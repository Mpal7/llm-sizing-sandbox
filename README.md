# Inference Sizing Visualizer

A static browser app for exploring LLM inference memory fit, decode rooflines, prompt compute, and rough memory-bound concurrency. It has no build step or external runtime dependency.

## Run it

Open `index.html` directly, or serve this folder locally:

```bash
python -m http.server 4173
```

Then open <http://localhost:4173>.

## How to use it

Start with the model, accelerator, and request mix cards. Open **Advanced assumptions** to edit model dimensions, precision, efficiency factors, maximum context, and memory margin. **Guide** explains the sizing model; **Sandbox** puts the live bounds and memory breakdown first. Presets are editable starting points, not benchmark profiles.

Use the exact checkpoint config and serving-engine settings for a deployment estimate. The default Velvet 14B is illustrative, not a published checkpoint. The DeepSeek preset is based on the V3.2 config and uses FP8-sized weights and cache values as effective one-byte assumptions. The checkpoint reports 685B stored parameters; its 37B active count is carried forward from the V3 report as a planning estimate because the V3.2 config specifies expert counts but not an active-parameter total. The preset includes the 685B stored count but models main-path FLOPs only; optional multi-token prediction work is not included.

Dense 70B and MoE 47B / 13B active are generic shape examples, not exact published model configs. Replace their layer, head, and precision fields before using their results.

## Hardware preset values

The spec fields below are per accelerator. The editable efficiency values are defaults chosen as planning assumptions; they are not benchmark measurements.

| Accelerator | VRAM | Peak HBM bandwidth | Dense BF16/FP16 peak | Decode bandwidth efficiency | Decode compute efficiency | Prefill compute efficiency | Multi-GPU scaling |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A100 80GB | 80 GB | 2.039 TB/s | 312 TFLOPS | 70% | 35% | 50% | 90% |
| H100 80GB | 80 GB | 3.35 TB/s | 989 TFLOPS | 75% | 40% | 55% | 90% |
| H200 141GB | 141 GB | 4.8 TB/s | 989 TFLOPS | 75% | 40% | 55% | 90% |
| B200 180GB | 180 GB | 8.0 TB/s | 2,250 TFLOPS | 75% | 45% | 55% | 90% |
| B300 | 270 GB | 7.7 TB/s | 2,250 TFLOPS | 75% | 45% | 55% | 90% |
| Rubin GPU (preliminary) | 288 GB | 22 TB/s | 4,000 TFLOPS | 75% | 45% | 55% | 90% |
| AMD MI300X 192GB | 192 GB | 5.3 TB/s | 1,307 TFLOPS | 70% | 40% | 50% | 90% |
| AMD MI355X 288GB | 288 GB | 8.0 TB/s | 2,500 TFLOPS | 70% | 40% | 50% | 90% |
| RTX 4090 24GB | 24 GB | 1.008 TB/s | 165.2 TFLOPS | 60% | 25% | 40% | 80% |

The B300 preset uses the individual GPU configuration in NVIDIA's Blackwell Ultra datasheet (270 GB and 7.7 TB/s); platform summaries also report 288 GB gross memory and up to 8 TB/s. Rubin specifications are preliminary and may change. The RTX 4090 compute figure uses NVIDIA's dense BF16/FP16 tensor rate with FP32 accumulation; other accumulation modes can report different peaks.

## Calculation model

All memory figures use decimal GB (1 GB = 1,000,000,000 bytes). Parameter counts are in billions, so `parameters_B × bytes_per_parameter` gives decimal GB directly.

### Weight memory and fit

```text
weight_memory_GB = total_parameters_B × effective_weight_bytes
live_tokens = prompt + visible_output + hidden_reasoning
```

The cache estimate for one request is:

```text
GQA bytes/token/layer = 2 × KV_heads × head_dim × KV_bytes
MLA bytes/token/layer = (KV_latent_rank + RoPE_key_dim) × KV_bytes
                         + optional DSA_indexer_key_dim × indexer_cache_bytes
KV_per_request = bytes/token/layer × retained_tokens_across_layers
```

Sliding-window layers retain `min(live_tokens, window_tokens)` positions; other layers retain the full live sequence. DSA adds a per-layer indexer cache. For DeepSeek V3.2, the indexer key is a single-head FP8 vector per token; optional vLLM IndexCache layer reuse is not modeled, so runtime cache memory can be lower when that feature is enabled. The calculator does not apply a guessed MLA reduction factor. It represents GQA, MLA, optional DSA indexing, and sliding-window layers; it does not represent Mamba/linear-attention state or arbitrary mixed recurrent cache layouts.

```text
raw_working_set = weight_memory + concurrent_requests × KV_per_request
planned_memory = raw_working_set × safety_factor
fits = planned_memory ≤ GPU_count × VRAM_per_GPU
```

The memory-bound request ceiling divides the cache budget left after weights by the selected per-request cache estimate. It assumes even sharding across GPUs, equal request lengths, and no shared-prefix savings. It does not model separate per-rank placement, runtime reservations, cache-page rounding, quantization scales, KV offload, replicated layers, or admission policy. A fit result is not an SLO or a guarantee that the runtime can allocate the model.

### Decode throughput

```text
effective_bandwidth = peak_bandwidth × decode_efficiency × multi_GPU_scaling
effective_compute = peak_dense_compute × decode_compute_efficiency × multi_GPU_scaling
active_weight_bytes/token = active_parameters × effective_weight_bytes
FLOPs/token ≈ 2 × active_parameters
single_sequence_tokens/s ≤ min(
  effective_bandwidth / active_weight_bytes_per_token,
  effective_compute / FLOPs_per_token
)
```

Dense models use all stored parameters as active. MoE models use the configured active count for per-token work but all stored parameters for weight memory. The packed-batch range estimates weight reuse: its MoE low end assumes little expert overlap and its high end assumes requests reuse the same active experts. Both are capped by the single-token compute roofline. These are ideal synchronized decode bounds; KV/indexer reads, interconnect traffic, routing, speculative decoding, batching gaps, queueing, and runtime overhead can lower or change actual throughput.

### Prompt compute and first visible answer

```text
linear_prefill_FLOPs ≈ 2 × active_parameters × prompt_tokens
prompt_compute_floor = (linear_prefill_FLOPs + attention_FLOPs) / effective_prefill_compute
first_visible_answer_floor = prompt_compute_floor
                             + hidden_reasoning_tokens / single_sequence_decode_rate
```

Attention FLOPs are approximate. For a query with `N` causal positions and an attention window `W`, the calculator counts `N(N+1)/2` pairs when `N ≤ W`; otherwise it counts `W(W+1)/2 + (N-W)W` pairs. The main attention term is `2 × query_heads × (QK_dim + value_dim) × pairs × attention_layers`. Sliding windows and DSA top-k reduce the main attention pairs. For DSA, the calculator separately estimates full-context indexer scoring as `2 × indexer_heads × indexer_key_dim × full_causal_pairs × layers`. This indexer term can be large for long prompts. It omits projection/decompression work, top-k selection cost, routing, memory stalls, kernel details, chunked prefill, and queueing. Treat both times as optimistic compute floors, not TTFT predictions.

## Preset sources and limitations

Model and accelerator specs change. The presets are a small reference set, not a continuously maintained catalog. Sources were checked on 2026-11-19. Peak compute uses dense BF16/FP16 rates where available; the app does not assume structured sparsity peaks. Efficiency percentages are transparent user-editable assumptions, not measured norms.

- [DeepSeek-V3.2 model card](https://huggingface.co/deepseek-ai/DeepSeek-V3.2) and [inference config](https://huggingface.co/deepseek-ai/DeepSeek-V3.2/blob/main/inference/config_671B_v3.2.json) for stored size, MLA/DSA dimensions, FP8 inference, top-k, and context limit.
- [DeepSeek-V3 technical report](https://arxiv.org/abs/2412.19437) for the 671B main model and 37B activated-parameter baseline used to seed the V3.2 active-count estimate.
- [DeepSeek-V3.2 technical report](https://arxiv.org/abs/2512.02556) for DeepSeek Sparse Attention.
- [vLLM hybrid KV cache design](https://docs.vllm.ai/en/stable/design/hybrid_kv_cache_manager/), [IndexCache documentation](https://github.com/vllm-project/vllm/blob/main/docs/features/index_cache.md), and [prefix caching design](https://docs.vllm.ai/en/stable/design/prefix_caching/) for runtime cache layouts and optional cross-layer/index reuse.
- [vLLM expert-parallel deployment guidance](https://docs.vllm.ai/en/latest/serving/expert_parallel_deployment/) for MoE deployment topology; this calculator does not model EP/TP/DP interconnect costs.
- [NVIDIA HGX H100/H200/B200 specifications](https://docs.nvidia.com/enterprise-reference-architectures/hgx-ai-factory-h100-h200-b200/latest/components.html), [NVIDIA Blackwell Ultra B300 datasheet](https://resources.nvidia.com/en-us-gpu-resources/blackwell-ultra-datasheet), [NVIDIA Rubin specifications](https://www.nvidia.com/en-eu/data-center/hgx/), [AMD MI300X specifications](https://www.amd.com/en/products/accelerators/instinct/mi300/mi300x.html), [AMD MI355X specifications](https://www.amd.com/en/products/accelerators/instinct/mi350/mi355x.html), [NVIDIA A100 specifications](https://www.nvidia.com/en-eu/data-center/a100/), and [NVIDIA Ada architecture whitepaper](https://images.nvidia.com/aem-dam/Solutions/Data-Center/l4/nvidia-ada-gpu-architecture-whitepaper-V2.02.pdf) for hardware preset ceilings.
