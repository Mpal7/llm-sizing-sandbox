const modelPresets = [
  {
    id: "velvet-14b",
    name: "Velvet 14B",
    parameterization: "dense",
    totalParamsB: 14,
    activeParamsB: 14,
    layers: 50,
    attentionHeads: 40,
    attentionType: "gqa",
    kvHeads: 8,
    headDim: 128,
    mlaKvRank: 512,
    mlaRopeDim: 64,
    mlaQkNopeDim: 128,
    mlaValueHeadDim: 128,
    sparseAttentionTopK: 0,
    indexerHeads: 0,
    indexerHeadDim: 0,
    indexerCacheBytes: 0,
    maxContextTokens: 0,
    slidingWindowLayers: 0,
    slidingWindowTokens: 4096,
    weightBytes: 2,
    kvBytes: 2
  },
  {
    id: "dense-70b",
    name: "Dense 70B",
    parameterization: "dense",
    totalParamsB: 70,
    activeParamsB: 70,
    layers: 80,
    attentionHeads: 64,
    attentionType: "gqa",
    kvHeads: 8,
    headDim: 128,
    mlaKvRank: 512,
    mlaRopeDim: 64,
    mlaQkNopeDim: 128,
    mlaValueHeadDim: 128,
    sparseAttentionTopK: 0,
    indexerHeads: 0,
    indexerHeadDim: 0,
    indexerCacheBytes: 0,
    maxContextTokens: 0,
    slidingWindowLayers: 0,
    slidingWindowTokens: 4096,
    weightBytes: 2,
    kvBytes: 2
  },
  {
    id: "moe-47b",
    name: "MoE 47B / 13B active",
    parameterization: "moe",
    totalParamsB: 47,
    activeParamsB: 13,
    layers: 32,
    attentionHeads: 32,
    attentionType: "gqa",
    kvHeads: 8,
    headDim: 128,
    mlaKvRank: 512,
    mlaRopeDim: 64,
    mlaQkNopeDim: 128,
    mlaValueHeadDim: 128,
    sparseAttentionTopK: 0,
    indexerHeads: 0,
    indexerHeadDim: 0,
    indexerCacheBytes: 0,
    maxContextTokens: 0,
    slidingWindowLayers: 0,
    slidingWindowTokens: 4096,
    weightBytes: 2,
    kvBytes: 2
  },
  {
    id: "deepseek-v32",
    name: "DeepSeek V3.2 · MoE + MLA + DSA",
    parameterization: "moe",
    totalParamsB: 685,
    activeParamsB: 37,
    layers: 61,
    attentionHeads: 128,
    attentionType: "mla",
    kvHeads: 8,
    headDim: 128,
    mlaKvRank: 512,
    mlaRopeDim: 64,
    mlaQkNopeDim: 128,
    mlaValueHeadDim: 128,
    sparseAttentionTopK: 2048,
    indexerHeads: 64,
    indexerHeadDim: 128,
    indexerCacheBytes: 1,
    maxContextTokens: 163840,
    slidingWindowLayers: 0,
    slidingWindowTokens: 4096,
    weightBytes: 1,
    kvBytes: 1
  }
];

const hardwarePresets = [
  {
    id: "a100-80",
    name: "A100 80GB",
    gpuCount: 1,
    vramGB: 80,
    bandwidthTBps: 2.039,
    computeTFLOPS: 312,
    decodeEfficiencyPct: 70,
    decodeComputeEfficiencyPct: 35,
    prefillEfficiencyPct: 50,
    multiGpuEfficiencyPct: 90
  },
  {
    id: "h100-80",
    name: "H100 80GB",
    gpuCount: 1,
    vramGB: 80,
    bandwidthTBps: 3.35,
    computeTFLOPS: 989,
    decodeEfficiencyPct: 75,
    decodeComputeEfficiencyPct: 40,
    prefillEfficiencyPct: 55,
    multiGpuEfficiencyPct: 90
  },
  {
    id: "h200-141",
    name: "H200 141GB",
    gpuCount: 1,
    vramGB: 141,
    bandwidthTBps: 4.8,
    computeTFLOPS: 989,
    decodeEfficiencyPct: 75,
    decodeComputeEfficiencyPct: 40,
    prefillEfficiencyPct: 55,
    multiGpuEfficiencyPct: 90
  },
  {
    id: "b200-180",
    name: "B200 180GB",
    gpuCount: 1,
    vramGB: 180,
    bandwidthTBps: 8,
    computeTFLOPS: 2250,
    decodeEfficiencyPct: 75,
    decodeComputeEfficiencyPct: 45,
    prefillEfficiencyPct: 55,
    multiGpuEfficiencyPct: 90
  },
  {
    id: "b300-270",
    name: "NVIDIA B300 270GB",
    gpuCount: 1,
    vramGB: 270,
    bandwidthTBps: 7.7,
    computeTFLOPS: 2250,
    decodeEfficiencyPct: 75,
    decodeComputeEfficiencyPct: 45,
    prefillEfficiencyPct: 55,
    multiGpuEfficiencyPct: 90
  },
  {
    id: "rubin-288-preliminary",
    name: "NVIDIA Rubin 288GB · preliminary",
    gpuCount: 1,
    vramGB: 288,
    bandwidthTBps: 22,
    computeTFLOPS: 4000,
    decodeEfficiencyPct: 75,
    decodeComputeEfficiencyPct: 45,
    prefillEfficiencyPct: 55,
    multiGpuEfficiencyPct: 90
  },
  {
    id: "mi300x-192",
    name: "AMD MI300X 192GB",
    gpuCount: 1,
    vramGB: 192,
    bandwidthTBps: 5.3,
    computeTFLOPS: 1307,
    decodeEfficiencyPct: 70,
    decodeComputeEfficiencyPct: 40,
    prefillEfficiencyPct: 50,
    multiGpuEfficiencyPct: 90
  },
  {
    id: "mi355x-288",
    name: "AMD MI355X 288GB",
    gpuCount: 1,
    vramGB: 288,
    bandwidthTBps: 8,
    computeTFLOPS: 2500,
    decodeEfficiencyPct: 70,
    decodeComputeEfficiencyPct: 40,
    prefillEfficiencyPct: 50,
    multiGpuEfficiencyPct: 90
  },
  {
    id: "rtx-4090",
    name: "RTX 4090 24GB",
    gpuCount: 1,
    vramGB: 24,
    bandwidthTBps: 1.008,
    computeTFLOPS: 165.2,
    decodeEfficiencyPct: 60,
    decodeComputeEfficiencyPct: 25,
    prefillEfficiencyPct: 40,
    multiGpuEfficiencyPct: 80
  }
];

const guideSections = [
  {
    id: "constraints",
    title: "Mental model",
    summary: "Anchor the guide in the three physical limits that govern every deployment: fit, feed, and process, then discount spec-sheet peaks into usable hardware.",
    bullets: [
      "VRAM capacity decides whether the model and cache can exist on the card.",
      "Usable memory bandwidth usually dominates decode throughput and tokens/sec.",
      "Usable compute usually dominates prefill and the lower-bound TTFT story."
    ],
    topicId: "mental-model"
  },
  {
    id: "architecture",
    title: "Architecture class",
    summary: "Parameter routing and attention-cache layout are separate design choices, and modern models can combine them.",
    bullets: [
      "Dense or MoE determines how many parameters are active per token.",
      "GQA or MLA determines the main attention KV state held per token.",
      "DeepSeek V3.2 adds a sparse-attention indexer and its own cache."
    ],
    topicId: "architecture"
  },
  {
    id: "weights",
    title: "Static VRAM",
    summary: "This is the cost of keeping the model resident in memory before any request is served.",
    bullets: [
      "Start with raw weight memory.",
      "Treat it as the base load, not the full production footprint.",
      "Dense, MoE, and MLA all pay storage on total parameters."
    ],
    topicId: "weight-vram"
  },
  {
    id: "kv",
    title: "Dynamic VRAM",
    summary: "KV cache is the part that explodes with longer prompts and more simultaneous users.",
    bullets: [
      "It scales linearly with total sequence length.",
      "It scales linearly with concurrency.",
      "GQA and MLA change the slope dramatically."
    ],
    topicId: "kv-cache"
  },
  {
    id: "overhead",
    title: "Memory margin",
    summary: "Reserve room for runtime allocations, workspaces, fragmentation, and per-device imbalance.",
    bullets: [
      "The multiplier is a safety assumption, not measured runtime overhead.",
      "The cluster fit assumes even sharding across selected GPUs.",
      "Use measured per-GPU free memory for deployment decisions."
    ],
    topicId: "overhead"
  },
  {
    id: "throughput",
    title: "Decode throughput",
    summary: "Per-token generation is usually a bandwidth problem, which is why usable HBM matters more than raw peak compute.",
    bullets: [
      "Dense decode is tied to total parameter reads.",
      "MoE and MLA decode can feel faster because active parameters are smaller.",
      "Peak bandwidth is discounted by a decode-efficiency assumption before the app uses it."
    ],
    topicId: "decode"
  },
  {
    id: "latency",
    title: "Prefill and TTFT",
    summary: "Prompt processing has a compute floor plus attention work that grows with prompt length.",
    bullets: [
      "Use total parameters for dense prefill.",
      "Use active parameters for MoE; MLA alone does not imply sparse parameter activation.",
      "The floor includes an approximate causal-attention FLOP estimate."
    ],
    topicId: "ttft"
  },
  {
    id: "concurrency",
    title: "Concurrency capacity",
    summary: "Memory capacity gives a rough fit ceiling; latency and SLO capacity need a serving benchmark.",
    bullets: [
      "Fit is necessary but not sufficient.",
      "Context size is the fastest way to collapse density.",
      "A fit count does not predict queueing, latency, or service quality."
    ],
    topicId: "concurrency"
  }
];

const sidebarTopics = {
  "mental-model": {
    title: "Three constraints",
    eyebrow: "Control frame",
    summary: "Start with fit, feed, and process. Everything else in the guide hangs off those three limits.",
    detail:
      "VRAM capacity answers whether the model can be resident at all. Memory bandwidth answers how quickly weights can be streamed during decode. Compute answers how quickly prompt tokens can be processed during prefill. The important update is that the app now treats hardware peaks as ceilings and then discounts them into usable throughput with separate decode and prefill efficiency assumptions. In real serving systems the bottleneck can move, but these three remain the first-order frame.",
    formula: "Fit → VRAM. Decode → usable bandwidth. Prefill → usable compute.",
    assumptions: [
      "This is a first-order planning frame.",
      "Peak specs are not treated as sustained serving throughput."
    ],
    pitfalls: [
      "Treating a single metric as the whole story.",
      "Using raw peak hardware numbers as latency promises."
    ],
    statA: "3",
    statALabel: "Primary constraints",
    statB: "1st",
    statBLabel: "Order of approximation"
  },
  "hardware-envelope": {
    title: "Hardware envelope",
    eyebrow: "Spec sheet vs real work",
    summary: "The hardware panel separates spec-sheet ceilings from the share of those ceilings your workload is likely to reach.",
    detail:
      "Peak bandwidth and peak compute are the best-case numbers printed on hardware spec sheets for a particular precision path. Real inference rarely reaches those numbers end to end. The app therefore asks for separate efficiency assumptions: one for decode, where memory movement is usually the main limiter, and one for prefill, where math throughput matters more. If you use more than one GPU, a scaling percentage further discounts the ideal N-times speedup to account for coordination and communication overhead.",
    formula:
      "usable_decode_bandwidth = peak_bandwidth × decode_efficiency × multi_gpu_scaling\nusable_prefill_compute = peak_compute × prefill_efficiency × multi_gpu_scaling",
    assumptions: [
      "Peak fields should match the precision and kernel path you actually care about.",
      "Efficiency fields are planning heuristics until replaced by measurements."
    ],
    pitfalls: [
      "Using a sparse or marketing peak that your workload does not actually reach.",
      "Assuming decode and prefill should use the same efficiency."
    ],
    statA: "Peaks",
    statALabel: "Spec-sheet ceilings",
    statB: "Efficiencies",
    statBLabel: "Usable-share inputs"
  },
  architecture: {
    title: "Model architecture",
    eyebrow: "Decision point",
    summary: "Parameter routing and attention/cache layout are independent design choices.",
    detail:
      "Dense models activate all parameters. MoE models store all parameters but activate a configured subset per token. GQA reduces KV heads; MLA stores a latent KV vector plus positional key dimensions. DeepSeek V3.2 combines MoE and MLA with DSA, which selects top-k context positions using a separate indexer cache. Its preset's 37B active count is an estimate carried forward from the V3 report; change it if you have a better measured or published count.",
    formula: "Weights = P_total × bytes/weight\nGQA KV/token/layer = 2 × KV_heads × head_dim × bytes\nMLA KV/token/layer = (KV_rank + RoPE_dim) × bytes + optional indexer cache",
    assumptions: [
      "Preset labels are editable and intended as planning seeds.",
      "Use exact config values when finalizing a deployment."
    ],
    pitfalls: [
      "Using active parameters to size stored MoE weights.",
      "Treating MLA as an alternative to MoE.",
      "Using a guessed MLA reduction factor instead of model dimensions."
    ],
    statA: "Dense / MoE / GQA / MLA / DSA",
    statALabel: "Classes supported",
    statB: "Wrong class",
    statBLabel: "Invalidates downstream math"
  },
  "weight-vram": {
    title: "Static VRAM",
    eyebrow: "Base load",
    summary: "Weight memory is the cost of simply loading the model. It is necessary but incomplete.",
    detail:
      "Weight memory is computed from total parameters and bytes per weight. This gives a raw resident size, not the final production footprint. Real deployments also need runtime workspace, allocator slack, and communication buffers if the model is split across devices.",
    formula: "VRAM_weights = P_total × bytes_per_weight",
    assumptions: [
      "Total parameters always drive storage.",
      "Displayed values use decimal GB (1 GB = 1,000,000,000 bytes)."
    ],
    pitfalls: [
      "Confusing raw weight size with total deployment VRAM.",
      "Sizing MoE storage from active parameters."
    ],
    statA: "Static",
    statALabel: "Memory character",
    statB: "P_total",
    statBLabel: "Always used for storage"
  },
  "kv-cache": {
    title: "KV cache",
    eyebrow: "Context pressure",
    summary: "KV memory depends on the model's cache representation and retained context.",
    detail:
      "GQA stores keys and values for each KV head. MLA stores a latent KV vector plus its positional key dimensions. DSA adds a per-layer indexer key cache and attends to a top-k subset after scoring the context. Sliding-window layers retain only their configured window. Runtime block rounding, cache quantization metadata, and shared prefixes can change the actual allocation.",
    formula: "GQA: layers × seq × 2 × KV_heads × head_dim × cache_bytes\nMLA: layers × seq × ((KV_rank + RoPE_dim) × cache_bytes + indexer_dim × indexer_bytes)",
    assumptions: [
      "MLA dimensions are modeled directly, not as a guessed reduction percentage.",
      "Sliding-window layers use min(sequence, window) tokens.",
      "Quantization metadata and runtime block rounding are omitted."
    ],
    pitfalls: [
      "Using attention heads instead of KV heads.",
      "Forgetting that output and hidden reasoning tokens extend the live sequence.",
      "Assuming sparse attention means the indexer does not scan the retained context."
    ],
    statA: "Linear",
    statALabel: "Growth with sequence",
    statB: "Linear",
    statBLabel: "Growth with users"
  },
  overhead: {
    title: "Memory margin",
    eyebrow: "Safety factor",
    summary: "The selected factor reserves space for runtime allocations and uncertainty.",
    detail:
      "The calculator multiplies weights plus live KV by the chosen factor. That factor is an editable planning assumption, not a measured property of the model or runtime. Aggregate GPU capacity assumes even sharding and can miss replicated layers, uneven rank loads, communication buffers, and runtime-specific reservations.",
    formula: "Planning demand = (weights + live KV) × safety factor",
    assumptions: [
      "The 1.25× default is a starting assumption.",
      "Use measured free memory per device for a deployment decision."
    ],
    pitfalls: [
      "Treating the factor as measured runtime overhead.",
      "Treating aggregate cluster VRAM as proof that every rank fits."
    ],
    statA: "1.25×",
    statALabel: "Editable default",
    statB: "Assumption",
    statBLabel: "Replace with measurements"
  },
  decode: {
    title: "Decode roofline",
    eyebrow: "Tokens per second",
    summary: "The estimate compares memory-bandwidth and compute ceilings for a single sequence and packed batch.",
    detail:
      "The single-sequence roofline is the smaller of the active-weight HBM bound and the matrix-compute bound. Packed-batch throughput is shown as a theoretical range: dense models reuse one weight set across the batch, while MoE traffic depends on how many distinct experts are routed. Attention reads, scheduler gaps, communication, and kernel effects still need measurement.",
    formula: "Single-stream TPS ≤ min(HBM bytes/s ÷ active weight bytes, compute FLOPs/s ÷ (2 × P_active))\nPacked-batch TPS depends on weight reuse, routing, and scheduling.",
    assumptions: [
      "Decode uses active parameters and a selected hardware efficiency assumption.",
      "MoE batch traffic is a range because expert overlap is unknown.",
      "The batch bound assumes all selected requests decode together."
    ],
    pitfalls: [
      "Treating the estimate as measured production TPS.",
      "Reading the roofline as measured production tokens per second."
    ],
    statA: "Usable bandwidth",
    statALabel: "Primary decode driver",
    statB: "P_active",
    statBLabel: "MoE active-count input"
  },
  ttft: {
    title: "Prefill and first token",
    eyebrow: "First visible token",
    summary: "The prompt floor counts model work and causal attention, then divides by assumed usable compute.",
    detail:
      "This estimate counts two FLOPs per active parameter per prompt token plus approximate causal-attention work, then divides by discounted peak compute. For DSA it estimates top-k attention pairs and full-context indexer scoring. It remains a compute floor: projection details, routing, queueing, chunked prefill, memory stalls, launch overhead, and kernel efficiency can make real TTFT much longer. Hidden reasoning may delay the first visible answer token depending on the model and server.",
    formula: "Prefill FLOPs ≈ 2 × P_active × prompt + attention/indexer FLOPs\nCompute floor = prefill FLOPs ÷ usable compute",
    assumptions: [
      "Dense uses total parameters; MoE uses configured active parameters.",
      "The attention term uses configured dimensions; DSA adds an approximate indexer scoring term.",
      "The hidden-token delay is a single-stream lower bound, not a latency prediction."
    ],
    pitfalls: [
      "Reading the number as user-facing latency.",
      "Ignoring queueing, memory stalls, or server scheduling."
    ],
    statA: "Usable compute",
    statALabel: "Primary prefill driver",
    statB: "Prompt length",
    statBLabel: "Direct multiplier"
  },
  concurrency: {
    title: "Concurrency capacity",
    eyebrow: "Memory fit ceiling",
    summary: "The result is a rough request-fit ceiling, not an SLO capacity.",
    detail:
      "The calculator divides the cache budget remaining after weights by the cache estimate for one request. It assumes every request has the selected sequence length, the model is evenly sharded, and no prefix blocks are shared. Runtime block allocation, prefix caching, preemption, scheduler admission, and per-GPU placement can change actual capacity. Throughput and latency SLO capacity need a benchmark with the target model, runtime, and traffic mix.",
    formula: "max_users ≈ (usable_VRAM - weights) / KV_per_user",
    assumptions: [
      "Usable VRAM is total VRAM divided by the selected overhead multiplier.",
      "Shared-prefix cache savings and scheduler admission limits are not modeled."
    ],
    pitfalls: [
      "Treating fit as a guarantee of smooth latency.",
      "Ignoring prompt/output mix and scheduler policy."
    ],
    statA: "Memory-bound",
    statALabel: "Capacity estimate",
    statB: "Estimate",
    statBLabel: "Not an SLO"
  },
  "worked-example": {
    title: "Velvet 14B example",
    eyebrow: "Illustrative scenario",
    summary: "A small editable example for seeing how the inputs move memory and throughput bounds.",
    detail:
      "The starting example uses Velvet 14B on an A100 80GB with an 8k total sequence and a 1.25× safety factor. Velvet is an illustrative model config; replace its values with the checkpoint and runtime you plan to serve.",
    formula: "Illustrative defaults; all model, hardware, and workload fields are editable.",
    assumptions: [
      "The example starts from a dense 14B model at BF16.",
      "Peak hardware fields and efficiency fields can both be edited."
    ],
    pitfalls: [
      "Treating the illustrative model name as a published checkpoint.",
      "Comparing scenarios without holding the hardware-efficiency assumptions constant."
    ],
    statA: "8k",
    statALabel: "Default total sequence",
    statB: "A100 80GB",
    statBLabel: "Default hardware"
  },
  "workload-reference": {
    title: "Workload mix example",
    eyebrow: "Illustrative context",
    summary: "Use these rough token ranges as an example to start a workload estimate, not as measured industry norms.",
    detail:
      "Prompt size is application-specific. Retrieved chunk count, tokenizer, prompt template, history retention, output policy, and hidden reasoning can move the total widely. Replace this example with a sample from your own traffic.",
    formula: "Prompt context ~= system prompt + retrieved context + retained user history + current turn",
    assumptions: [
      "The split is illustrative and not a universal range.",
      "Retrieved chunk count, chunk size, and memory policy can move the total quickly."
    ],
    pitfalls: [
      "Treating the table as a fixed recipe for every application.",
      "Forgetting that chat history counts only if it is still retained in the active prompt."
    ],
    statA: "4k-8k",
    statALabel: "Illustrative total",
    statB: "Reference",
    statBLabel: "Planning aid",
    referenceTable: [
      {
        component: "System Prompt",
        tokenUsage: "~500 - 1,000",
        notes: "The instructions, guardrails, and assistant framing."
      },
      {
        component: "RAG Context",
        tokenUsage: "~2,000 - 3,000",
        notes: "Usually top 3-5 search results (chunks of ~500 tokens each), or 7-8 chunks at around 400 tokens each."
      },
      {
        component: "User History",
        tokenUsage: "~1,000 - 4,000",
        notes: "The last 5-10 turns of conversation, depending on memory strategy."
      },
      {
        component: "Example total",
        tokenUsage: "~4,000 - 8,000",
        notes: "Illustrative only; measure your own prompt and completion distribution."
      }
    ]
  }
};

const scenarioPresets = [4096, 8192, 32768, 128000];

const glossaryTerms = [
  {
    id: "inference",
    terms: ["inference"],
    title: "Inference",
    meaning: "Inference is the work a model does when it reads an input and produces an answer.",
    why: "Sizing inference means estimating whether the model fits on the hardware and how quickly it can respond under your workload.",
    example: "When someone asks a chatbot a question and the model writes a reply, that is inference."
  },
  {
    id: "llm",
    terms: ["LLM"],
    title: "Large language model (LLM)",
    meaning: "An LLM is a neural network trained to understand and generate text, usually by predicting one token at a time.",
    why: "Its size, internal layout, and the length of conversations all affect how much GPU memory and processing time it needs.",
    example: "A 14B model has about 14 billion learned values called parameters."
  },
  {
    id: "gpu",
    terms: ["GPUs", "GPU"],
    title: "Graphics processor (GPU)",
    meaning: "A GPU is a processor built to do many calculations at the same time. AI models use it to read prompts and generate answers.",
    why: "The number and type of GPUs set the available memory and much of the model's potential speed.",
    example: "Two 80 GB GPUs provide 160 GB of memory in total, though the model must be split across them to use it."
  },
  {
    id: "vram",
    terms: ["VRAM"],
    title: "GPU memory (VRAM)",
    meaning: "VRAM is the fast memory attached to a GPU. The model's weights and each active conversation's working data need space in it.",
    why: "If the required memory is larger than the GPUs provide, the configured setup does not fit as modeled.",
    example: "A model that needs 90 GB cannot fit on one 80 GB GPU, even if its calculations would otherwise be fast."
  },
  {
    id: "hbm",
    terms: ["HBM"],
    title: "High-bandwidth memory (HBM)",
    meaning: "HBM is the high-speed memory used by many AI GPUs. It feeds model data to the processor while it works.",
    why: "During answer generation, the GPU repeatedly reads model weights, so HBM speed can limit how quickly tokens are produced.",
    example: "A GPU with faster HBM can often stream a large model's weights faster, much like a wider road can carry more traffic."
  },
  {
    id: "bandwidth",
    terms: ["memory bandwidth", "effective_bandwidth", "peak_bandwidth", "bandwidth"],
    title: "Memory bandwidth",
    meaning: "Bandwidth is how much data the GPU can move between its memory and processor in one second.",
    why: "A large model may be limited by how quickly its weights can be read, even when the GPU still has calculation capacity available.",
    example: "If a model needs 28 GB of weight data for a generation step and the system can move 1.4 TB each second, the rough ceiling is about 50 such steps per second in total."
  },
  {
    id: "compute",
    terms: ["compute"],
    title: "Compute",
    meaning: "Compute is the GPU's ability to perform mathematical operations.",
    why: "Reading a long prompt involves a large amount of math; the GPU's compute capacity helps set a lower limit on that work's time.",
    example: "If a prompt needs 100 units of work and the GPU can do 50 units each second, the ideal math time is two seconds."
  },
  {
    id: "tflops",
    terms: ["TFLOPS"],
    title: "TFLOPS",
    meaning: "TFLOPS means trillions of math operations per second. It is a headline measure of compute speed.",
    why: "The calculator uses it to estimate prompt-processing time, after applying an efficiency assumption.",
    example: "A 100 TFLOPS figure means a theoretical 100 trillion operations each second. Real model serving usually reaches less."
  },
  {
    id: "flops",
    terms: ["FLOPs"],
    title: "Floating-point operations (FLOPs)",
    meaning: "FLOPs count the arithmetic work needed for a calculation. One operation is a small step such as a multiply or add.",
    why: "The prompt estimate counts approximate FLOPs, then divides by the assumed usable compute speed.",
    example: "If a prompt takes 200 trillion operations and the GPU sustains 100 trillion per second, the ideal compute time is about two seconds."
  },
  {
    id: "parameters",
    terms: ["parameters", "parameter", "params", "P_total", "total_params"],
    title: "Model parameters",
    meaning: "Parameters are the learned numerical values that make up a model. They hold patterns learned during training.",
    why: "All stored parameters take memory. The parameters used for each token also determine much of the processing work.",
    example: "A 14B model has roughly 14 billion parameters. At two bytes each, its raw weights take about 28 GB."
  },
  {
    id: "active-parameters",
    terms: ["active parameters", "active params", "P_active", "active_parameters"],
    title: "Active parameters",
    meaning: "Active parameters are the model values actually used to process a particular token.",
    why: "A routed model may store many parameters but use only a smaller part for each token, which can reduce calculation and weight-reading work.",
    example: "A model might store 100B parameters but activate 10B for each token. It still needs memory for all 100B."
  },
  {
    id: "weights",
    terms: ["model weights", "weights", "weight"],
    title: "Model weights",
    meaning: "Weights are the stored numerical values of the trained model. They are loaded into GPU memory before it can answer.",
    why: "They are the model's base memory cost, before conversation memory and runtime overhead are added.",
    example: "Fourteen billion weights stored at two bytes each take about 28 GB before other memory needs."
  },
  {
    id: "precision",
    terms: ["precision"],
    title: "Number precision",
    meaning: "Precision describes how many bits are used to store each model value and how finely calculations represent numbers.",
    why: "Lower-bit storage can reduce memory use and data movement, but supported formats and answer quality matter.",
    example: "A two-byte value uses twice the storage of a one-byte value, before any extra scale information is counted."
  },
  {
    id: "fp16",
    terms: ["FP16"],
    title: "FP16",
    meaning: "FP16 is a 16-bit floating-point number format, also called half precision.",
    why: "It is one common format for storing weights or doing AI calculations; the supported GPU speed depends on the exact operation.",
    example: "At two bytes per weight, 14 billion weights take about 28 GB in raw storage."
  },
  {
    id: "bf16",
    terms: ["BF16"],
    title: "BF16",
    meaning: "BF16 is a 16-bit floating-point format designed to work well for AI calculations while keeping a wide numerical range.",
    why: "It uses two bytes per value, like FP16, but GPU performance and numerical behavior can differ.",
    example: "A model stored in BF16 needs about two bytes for each weight before runtime overhead."
  },
  {
    id: "fp8",
    terms: ["FP8"],
    title: "FP8",
    meaning: "FP8 is an 8-bit floating-point format that stores each value in one byte.",
    why: "It can roughly halve weight storage compared with a two-byte format, although real setups may need extra scaling data and compatible hardware.",
    example: "Fourteen billion FP8 weights use about 14 GB of raw storage, compared with about 28 GB at two bytes each."
  },
  {
    id: "quantization",
    terms: ["quantization"],
    title: "Quantization",
    meaning: "Quantization stores model values using fewer bits so they take less space and move less data.",
    why: "It can help a model fit or run faster, but extra scales, packing, and quality trade-offs are not captured by a simple bytes-per-value number.",
    example: "Changing weights from two bytes each to one byte each roughly halves their raw storage."
  },
  {
    id: "token",
    terms: ["tokens", "token"],
    title: "Token",
    meaning: "A token is a small piece of text the model reads or writes. It may be a whole word, part of a word, punctuation, or a space.",
    why: "Prompt length, answer length, and generation speed are all counted in tokens rather than words.",
    example: "The word “sizing” may be one token or several, depending on the model's tokenizer."
  },
  {
    id: "prompt",
    terms: ["prompt"],
    title: "Prompt",
    meaning: "The prompt is all the text given to the model before it starts answering: instructions, chat history, and the current question.",
    why: "The model must process the whole prompt first. Longer prompts take more work and use more conversation memory.",
    example: "A customer-support prompt may include system instructions, a policy excerpt, earlier messages, and the latest question."
  },
  {
    id: "context",
    terms: ["context"],
    title: "Context",
    meaning: "Context is the text the model can consider in the current request, including the prompt and the answer so far.",
    why: "Longer context needs more working memory and can make prompt processing slower.",
    example: "A chat that keeps 20,000 earlier tokens in its history has a larger context than a fresh question with 500 tokens."
  },
  {
    id: "output-tokens",
    terms: ["output tokens", "visible output"],
    title: "Output tokens",
    meaning: "Output tokens are the pieces of text the model generates for its answer.",
    why: "Longer answers take longer to finish and keep using conversation memory while they are being generated.",
    example: "If a reply contains 300 tokens and the stream runs at 10 tokens per second, generation takes about 30 seconds after it starts."
  },
  {
    id: "prefill",
    terms: ["effective_prefill_compute", "prompt processing", "prompt-reading time", "prefill"],
    title: "Prefill (reading the prompt)",
    meaning: "Prefill is the stage where the model processes the entire prompt before it begins writing its answer.",
    why: "A long prompt can cause a noticeable wait before the first answer token appears, even if the answer will stream quickly afterward.",
    example: "Before replying to a 10,000-token prompt, the model has to read and process those 10,000 tokens. This app shows an ideal compute-time floor, not a measured wait."
  },
  {
    id: "decode",
    terms: ["decoding", "decode"],
    title: "Decode (writing the answer)",
    meaning: "Decode is the repeated step of producing the next token of the answer, using the prompt and all tokens generated so far.",
    why: "The rate of this stage determines how quickly text appears once the answer has started.",
    example: "At 8 tokens per second, the model produces about 80 tokens in 10 seconds."
  },
  {
    id: "throughput",
    terms: ["throughput"],
    title: "Throughput",
    meaning: "Throughput is how much work the system completes in a period of time. For generation, it is usually reported as tokens per second.",
    why: "With several people generating at once, total system throughput must be shared among their answer streams.",
    example: "A total of 100 generated tokens per second shared evenly by 20 active people averages 5 tokens per second each."
  },
  {
    id: "tokens-per-second",
    terms: ["tokens per second", "token per second", "tok/s"],
    title: "Tokens per second",
    meaning: "Tokens per second, often shortened to tok/s, measures how quickly generated text appears.",
    why: "The speed for one person can be much lower than the total tokens per second when many answers are being generated together. This view marks under 2 as very slow, 2 to under 5 as noticeably slow, 5 to under 10 as steady, 10 to under 20 as smooth, and 20 or more as very fluid; these are rough reading guides, not measured human thresholds.",
    example: "If 60 tokens per second are shared evenly by 20 active streams, each gets about 3 tokens per second."
  },
  {
    id: "concurrency",
    terms: ["concurrent_requests", "concurrent requests", "simultaneous requests", "concurrency", "concurrent users"],
    title: "Concurrency (people active at once)",
    meaning: "Concurrency is the number of requests being served at the same time.",
    why: "More simultaneous requests need more conversation memory and divide the model's generation capacity among more people.",
    example: "A concurrency setting of 20 means the stress estimate assumes 20 requests are active together."
  },
  {
    id: "latency",
    terms: ["latency"],
    title: "Latency (waiting time)",
    meaning: "Latency is the time someone waits for an action to happen, such as the first answer token or the complete reply.",
    why: "A fast total token rate does not guarantee a short wait: prompt reading and queueing can delay the start.",
    example: "A model may start replying after one second, then stream the rest over another ten seconds."
  },
  {
    id: "ttft",
    terms: ["time to first token", "first visible token", "TTFT"],
    title: "Time to first token (TTFT)",
    meaning: "TTFT is the time from sending a request until the first answer token is shown.",
    why: "It includes prompt reading and may also include waiting in a queue or hidden reasoning. The app's compute floor does not include all of those delays.",
    example: "If a reply begins appearing 2 seconds after a person presses Send, its TTFT is 2 seconds."
  },
  {
    id: "attention",
    terms: ["causal attention", "attention"],
    title: "Attention",
    meaning: "Attention lets the model compare the current position with earlier text so it can use relevant context.",
    why: "Long prompts create more attention work. Different model designs reduce or store that work in different ways.",
    example: "When finishing “The capital of France is…”, attention lets the model use the earlier words in the sentence."
  },
  {
    id: "kv-cache",
    terms: ["KV cache", "KV memory", "KV"],
    title: "Key-value cache (KV cache)",
    meaning: "The KV cache is working memory that saves information from the prompt and answer so the model does not have to rebuild it for every new token.",
    why: "Each active conversation uses some of this memory. Longer conversations and more simultaneous people need more of it.",
    example: "If one conversation needs 2 GB of KV cache, 20 separate conversations need about 40 GB before overhead."
  },
  {
    id: "gqa",
    terms: ["grouped-query attention", "GQA"],
    title: "Grouped-query attention (GQA)",
    meaning: "GQA lets groups of query heads share a smaller set of key and value heads.",
    why: "Fewer stored key and value heads can reduce the KV memory needed for each token.",
    example: "If 32 query heads share 8 KV heads, the cache stores 8 key/value groups instead of 32."
  },
  {
    id: "mla",
    terms: ["multi-head latent attention", "MLA"],
    title: "Multi-head latent attention (MLA)",
    meaning: "MLA compresses attention information into a smaller shared representation, then reconstructs what is needed later.",
    why: "Its cache layout can use less memory than storing every key and value separately. It is an attention design, separate from how many model parameters are active.",
    example: "Instead of keeping a full key and value vector for every head, the model stores a smaller latent vector plus positional information."
  },
  {
    id: "dsa",
    terms: ["sparse attention", "DSA"],
    title: "DeepSeek Sparse Attention (DSA)",
    meaning: "Sparse attention first looks across the context, then focuses detailed attention on a smaller selected set of positions.",
    why: "The selection can reduce some attention work, but the model still needs to score the context and may keep extra index information.",
    example: "For a long conversation, the model might select the 1,000 most useful positions instead of attending closely to every position."
  },
  {
    id: "moe",
    terms: ["mixture of experts", "MoE"],
    title: "Mixture of experts (MoE)",
    meaning: "An MoE model contains several specialist parts called experts and routes each token through only some of them.",
    why: "The system still stores all experts, but only the selected experts do the work for each token. Different people may select different experts, so batched speed is less certain.",
    example: "A 100B MoE model might store 100B parameters but use 10B per token. It still needs room for all 100B weights."
  },
  {
    id: "dense-model",
    terms: ["dense model", "dense"],
    title: "Dense model",
    meaning: "A dense model uses its full set of parameters for each token it processes.",
    why: "All parameters affect both stored model size and the work done per token.",
    example: "A 14B dense model uses about 14B parameters for each generated token."
  },
  {
    id: "sliding-window",
    terms: ["sliding-window layers", "sliding window"],
    title: "Sliding attention window",
    meaning: "A sliding window lets some model layers keep only the most recent part of a conversation for attention.",
    why: "Those layers can use less cache for long conversations, though other layers may still keep the full context.",
    example: "With a 4,096-token window, a sliding-window layer keeps the latest 4,096 positions rather than every older position."
  },
  {
    id: "indexer",
    terms: ["indexer cache", "indexer"],
    title: "Attention indexer",
    meaning: "An indexer scores earlier positions to help sparse attention choose which parts of a long context to inspect closely.",
    why: "The scoring itself takes work, and the indexer may keep its own small cache.",
    example: "Think of it as making a shortlist of relevant pages before reading those pages in detail."
  },
  {
    id: "top-k",
    terms: ["top-k"],
    title: "Top-k selection",
    meaning: "Top-k means choosing the k highest-scoring items from a larger set.",
    why: "Sparse attention uses this idea to choose a limited number of context positions for detailed attention.",
    example: "If top-k is 1,000, the model selects up to 1,000 positions from the context."
  },
  {
    id: "expert",
    terms: ["experts", "expert"],
    title: "Model expert",
    meaning: "An expert is one specialist part inside a mixture-of-experts model.",
    why: "The system routes each token to selected experts; overlapping selections between requests affect how much work can be shared.",
    example: "One expert may specialize in code while another responds to a language question, though the model learns these roles rather than being hand-labeled."
  },
  {
    id: "roofline",
    terms: ["roofline"],
    title: "Roofline (ideal speed ceiling)",
    meaning: "A roofline estimate compares the main hardware limits and uses the slower limit as a theoretical maximum speed.",
    why: "Real software, memory traffic, and scheduling add delays, so observed speed is usually below this ceiling.",
    example: "If memory could support 50 tokens per second but compute could support only 40, the estimate uses 40."
  },
  {
    id: "batch-decoding",
    terms: ["packed-batch decoding", "packed_batch", "batch decoding", "packed batch", "packed-batch"],
    title: "Batched decoding",
    meaning: "Batched decoding advances several people's answers together so the GPU can serve multiple active requests in one step.",
    why: "It can improve total output, but that total rate is shared across the active streams.",
    example: "If a batch produces 100 tokens per second for 20 equally active requests, that averages 5 tokens per second per request."
  },
  {
    id: "memory-fit",
    terms: ["memory fit", "fits in memory"],
    title: "Memory fit",
    meaning: "A memory-fit check compares the estimated model and conversation memory with the GPU memory available.",
    why: "A configuration that exceeds the memory budget cannot serve the modeled workload without changing the setup or assumptions.",
    example: "If the model and 20 conversation caches need 150 GB, a 2-GPU setup with 80 GB each has 160 GB before real runtime details."
  },
  {
    id: "safety-factor",
    terms: ["memory safety factor", "safety factor", "planning margin"],
    title: "Memory safety margin",
    meaning: "The safety factor reserves extra GPU memory beyond the model weights and estimated conversation caches.",
    why: "Serving software needs room for temporary work and allocation overhead that this first-order model does not measure directly.",
    example: "A 1.25× factor plans for 125 GB when the raw estimate is 100 GB."
  },
  {
    id: "sharding",
    terms: ["sharding"],
    title: "Sharding across GPUs",
    meaning: "Sharding splits a model or its work across multiple GPUs.",
    why: "It can let a model use the combined memory of several GPUs, but communication between them adds overhead.",
    example: "A 120 GB model might be split across two 80 GB cards, with each holding about half of the weights."
  },
  {
    id: "multi-gpu-scaling",
    terms: ["multi-GPU scaling", "multi-GPU"],
    title: "Multi-GPU scaling",
    meaning: "Multi-GPU scaling describes how much faster a workload gets when additional GPUs work together.",
    why: "The speedup is usually less than the number of GPUs because they need to coordinate and move data between them.",
    example: "If two GPUs are set to 90% scaling, the calculator assumes they deliver 1.8 times one GPU's ideal capacity, not a full 2 times."
  },
  {
    id: "efficiency",
    terms: ["decode_efficiency", "prefill_efficiency", "multi_GPU_scaling", "efficiency"],
    title: "Hardware efficiency assumption",
    meaning: "An efficiency percentage is the share of a GPU's headline peak speed the calculator assumes the workload can use.",
    why: "Real inference rarely reaches a spec-sheet peak continuously. These percentages are planning inputs, not measurements.",
    example: "A 70% bandwidth efficiency assumption turns a 1 TB/s peak into 0.7 TB/s of estimated usable bandwidth."
  },
  {
    id: "hidden-reasoning",
    terms: ["hidden reasoning", "reasoning tokens"],
    title: "Hidden reasoning tokens",
    meaning: "Some models generate internal tokens before showing a final answer. These tokens may not be displayed to the person asking.",
    why: "They still take time and memory. A prompt-processing estimate alone does not include time spent generating them.",
    example: "If a model produces 200 internal tokens before its visible reply, those 200 tokens add generation time first."
  },
  {
    id: "layers",
    terms: ["transformer layers", "layers"],
    title: "Transformer layers",
    meaning: "Layers are repeated processing stages inside a transformer model. Each stage refines the information used to predict the next token.",
    why: "More layers usually mean more model work and more stored conversation information, depending on the attention layout.",
    example: "A model with 50 layers applies 50 processing stages to each token."
  },
  {
    id: "query-heads",
    terms: ["query_heads", "attention_heads", "query heads", "attention heads"],
    title: "Attention heads",
    meaning: "Attention heads are parallel ways a model can compare the current text with earlier text. A query head asks which earlier information is useful.",
    why: "The head count and dimensions affect attention work. In GQA, several query heads may share fewer KV heads.",
    example: "A model can have 32 query heads but only 8 key-value heads shared between them."
  },
  {
    id: "kv-heads",
    terms: ["KV_heads", "KV heads", "key/value heads"],
    title: "Key-value heads",
    meaning: "Key-value heads hold the attention information that later tokens look back at.",
    why: "Their number is one of the main controls on how much KV cache each token needs in a GQA model.",
    example: "Using 8 KV heads instead of 32 can reduce cache storage when the model's query heads share them."
  },
  {
    id: "head-dimension",
    terms: ["head_dim", "head dimension", "head dim", "key dim", "value head dim"],
    title: "Head dimension",
    meaning: "A head dimension is the number of values in each attention head's internal representation.",
    why: "Larger dimensions mean more information to store in the cache and more attention math to perform.",
    example: "A 128-value key and a 128-value value require more cache space than two 64-value vectors."
  },
  {
    id: "sequence-length",
    terms: ["sequence_length", "sequence length", "live sequence", "total sequence", "sequence"],
    title: "Sequence length",
    meaning: "Sequence length is the total number of tokens the model is currently keeping for a request: the prompt plus the answer so far.",
    why: "Longer sequences use more working memory and can increase attention work.",
    example: "A 7,000-token prompt and a 500-token answer create a sequence of about 7,500 tokens."
  },
  {
    id: "queueing",
    terms: ["scheduler admission", "admission policy", "queueing", "queue", "scheduler"],
    title: "Queueing and scheduling",
    meaning: "A serving system schedules incoming requests onto the GPUs. If the GPUs are busy, some requests wait their turn or are grouped into batches.",
    why: "Waiting in line adds time before a response begins and can change how smoothly different people receive tokens.",
    example: "If 30 people request answers while the server can actively process 20, some people may wait for an active slot."
  },
  {
    id: "runtime-overhead",
    terms: ["runtime overhead", "runtime reservations", "serving runtime", "runtime", "workspace"],
    title: "Serving runtime overhead",
    meaning: "The serving runtime is the software that loads the model and manages requests. It needs extra GPU memory and processing work around the model itself.",
    why: "This calculator uses a planning margin for some of that overhead but does not model every runtime allocation or delay.",
    example: "Temporary calculation buffers and cache bookkeeping take some memory in addition to the model weights."
  },
  {
    id: "working-set",
    terms: ["working set", "raw working set"],
    title: "Working set",
    meaning: "The working set is the memory occupied by the loaded model plus the active conversations' cached information.",
    why: "It is the main memory demand before adding the safety margin and runtime reservations.",
    example: "28 GB of model weights plus 20 GB of conversation caches makes a 48 GB raw working set."
  },
  {
    id: "dtype",
    terms: ["dtype"],
    title: "Data type (dtype)",
    meaning: "A data type specifies how a number is represented in memory, such as FP16, BF16, or FP8.",
    why: "The data type affects memory use, the calculations a GPU can accelerate, and sometimes numerical quality.",
    example: "FP16 stores each number in two bytes; FP8 stores it in one byte."
  },
  {
    id: "latent-rank",
    terms: ["KV_rank", "latent rank"],
    title: "Latent rank",
    meaning: "Latent rank is the size of the compressed attention representation that an MLA model keeps in its cache.",
    why: "A smaller rank means fewer values to save for each token, which can reduce conversation memory.",
    example: "A rank of 512 means the model stores a 512-value compressed vector for each relevant layer and token."
  },
  {
    id: "rope",
    terms: ["RoPE_dim", "RoPE"],
    title: "Rotary position information (RoPE)",
    meaning: "RoPE is a way of giving the model information about the order and distance of words in a sequence.",
    why: "Some model layouts keep a small RoPE-related key component in the attention cache, so its size affects memory.",
    example: "Position information helps the model distinguish “dog bites person” from “person bites dog.”"
  },
  {
    id: "mtp",
    terms: ["multi-token prediction", "MTP"],
    title: "Multi-token prediction (MTP)",
    meaning: "MTP is an optional model feature that predicts extra future tokens to help speed up answer generation.",
    why: "It can add model work and memory needs, and this calculator does not include that extra work in its estimates.",
    example: "A model may try to draft a few next tokens at once, then check them before showing the answer."
  },
  {
    id: "prefix-caching",
    terms: ["prefix caching", "shared prefix"],
    title: "Prefix caching",
    meaning: "Prefix caching lets requests reuse saved work when they begin with the same prompt text.",
    why: "It can reduce repeated prompt processing and cache memory, but the amount saved depends on the traffic and serving software.",
    example: "If 20 requests share the same long system instructions, the server may process and store that shared beginning once."
  },
  {
    id: "chunked-prefill",
    terms: ["chunked prefill"],
    title: "Chunked prefill",
    meaning: "Chunked prefill breaks a long prompt into smaller pieces and processes them over several steps.",
    why: "This can help a server keep other people's answers moving while it reads a long prompt.",
    example: "Instead of processing 20,000 prompt tokens all at once, the server may process them in several smaller batches."
  },
  {
    id: "speculative-decoding",
    terms: ["speculative decoding"],
    title: "Speculative decoding",
    meaning: "Speculative decoding uses a smaller or faster helper model to draft tokens that the main model can check in groups.",
    why: "It may increase generation speed, but extra model work and acceptance rates determine the actual benefit.",
    example: "A small model drafts five words, and the large model checks which of those it can safely keep."
  },
  {
    id: "slo",
    terms: ["service-level objective", "SLO"],
    title: "Service-level objective (SLO)",
    meaning: "An SLO is a target for how reliably or quickly a service should respond to people.",
    why: "A memory-fit estimate or theoretical token rate does not show whether a system meets its response-time target under real traffic.",
    example: "A team might set a target that 95 out of 100 requests show their first answer token within two seconds."
  },
  {
    id: "rag",
    terms: ["retrieval-augmented generation", "RAG"],
    title: "Retrieval-augmented generation (RAG)",
    meaning: "RAG looks up relevant information and includes it in the prompt before the model answers.",
    why: "Retrieved passages make prompts longer, which increases prompt-reading work and conversation memory.",
    example: "A support bot may search a help center and add three matching articles to the prompt before replying."
  },
  {
    id: "routing",
    terms: ["expert routing", "expert overlap", "routing", "routed"],
    title: "Expert routing",
    meaning: "Routing is the model's choice of which specialist parts, or experts, should process each token.",
    why: "Different requests can choose different experts, which changes how much work a batch can share.",
    example: "A code question and a translation question may be sent to different expert groups inside an MoE model."
  },
  {
    id: "kernel",
    terms: ["kernels", "kernel"],
    title: "GPU kernel",
    meaning: "A kernel is a small program that tells the GPU how to perform one part of the model's work.",
    why: "The way kernels are written and combined affects how much of the GPU's theoretical speed a real model reaches.",
    example: "One kernel may multiply two large blocks of numbers; another may apply an attention step."
  },
  {
    id: "interconnect",
    terms: ["interconnect", "GPU communication"],
    title: "GPU interconnect",
    meaning: "An interconnect is the link that lets GPUs send data to each other.",
    why: "When a model is split across cards, they must exchange information. Slow communication can reduce the speed gained from extra GPUs.",
    example: "If one GPU needs a result held on another GPU, it must send that result over their interconnect before continuing."
  },
  {
    id: "allocator",
    terms: ["allocator", "memory fragmentation"],
    title: "GPU memory allocation",
    meaning: "The serving software reserves and organizes blocks of GPU memory for model work and active requests.",
    why: "Unused gaps between memory blocks can make a setup run out of usable space before the simple total-memory estimate is reached.",
    example: "A card may have 5 GB free in total but lack one large enough continuous block for a 4 GB temporary buffer."
  },
  {
    id: "cache-blocks",
    terms: ["cache-page rounding", "cache pages", "cache blocks"],
    title: "Cache blocks and rounding",
    meaning: "Serving software often reserves conversation memory in fixed-size blocks instead of exact token-sized pieces.",
    why: "Rounding requests up to whole blocks can use slightly more memory than a simple per-token estimate.",
    example: "A request needing 10.2 blocks may have to reserve 11 full blocks."
  },
  {
    id: "weight-reuse",
    terms: ["weight reuse", "reuse model weights", "reuse weight reads"],
    title: "Reusing model weights across requests",
    meaning: "When requests are served together, the GPU may read a model's shared weights once and use them for several people's next tokens.",
    why: "Good reuse can raise total output speed, but different model types and serving schedules affect how much reuse is possible.",
    example: "One read of the model weights might help produce the next token for 20 active conversations instead of just one."
  },
  {
    id: "batch-throughput",
    terms: ["packed-batch throughput", "batch throughput", "packed-batch"],
    title: "Packed-batch throughput",
    meaning: "Packed-batch throughput is the total generation speed when the GPU processes several active requests together.",
    why: "The total rate is divided among the active people, and its accuracy depends on how efficiently the server groups requests.",
    example: "A batch producing 200 tokens per second across 20 people averages 10 tokens per second each."
  },
  {
    id: "fp32",
    terms: ["FP32"],
    title: "FP32",
    meaning: "FP32 is a 32-bit floating-point number format that uses four bytes per value.",
    why: "It can provide more numerical precision than FP16, BF16, or FP8, but it uses more memory and may have different GPU speed.",
    example: "A temporary buffer with one billion FP32 values takes about 4 GB."
  },
  {
    id: "aggregate",
    terms: ["aggregate", "aggregated"],
    title: "Aggregate (combined total)",
    meaning: "Aggregate means the combined amount from all selected GPUs or requests.",
    why: "Adding capacities gives a useful first estimate, but it does not guarantee that every GPU can use the total equally well.",
    example: "Four GPUs with 80 GB each have 320 GB aggregate memory before runtime details are considered."
  },
  {
    id: "matrix-multiply",
    terms: ["matrix compute", "matrix multiplication", "matrix multiply", "matmul"],
    title: "Matrix multiplication",
    meaning: "Matrix multiplication is a large set of repeated multiply-and-add calculations that forms much of a language model's work.",
    why: "GPUs are designed to perform these calculations in parallel, especially when processing prompts or batches of requests.",
    example: "The model combines a table of input values with a table of learned weights to produce the next set of values."
  },
  {
    id: "memory-stall",
    terms: ["memory stalls", "memory stall"],
    title: "Memory stall",
    meaning: "A memory stall is a pause while the GPU waits for data to arrive from memory.",
    why: "If the model or cache data cannot be delivered quickly enough, the GPU's calculation units sit idle and answers slow down.",
    example: "A chef waiting for ingredients cannot keep cooking, even if they are fast at chopping."
  },
  {
    id: "preemption",
    terms: ["preemption", "preempted"],
    title: "Request preemption",
    meaning: "Preemption means pausing one request so the server can make room to process another request.",
    why: "It affects which person waits and whether a response continues smoothly under heavy load.",
    example: "A server might pause a long answer briefly to admit a new request, then resume it later."
  },
  {
    id: "replication",
    terms: ["replication", "replicated"],
    title: "Model replication",
    meaning: "Replication means keeping a copy of some model data on more than one GPU.",
    why: "Repeated copies use extra memory, so the total GPU memory can overstate how much is available for conversation caches.",
    example: "If each of two GPUs keeps a 4 GB copy of a layer, that layer occupies 8 GB across the system."
  },
  {
    id: "projection",
    terms: ["projection", "decompression"],
    title: "Projection and decompression work",
    meaning: "Projection and decompression are calculations that transform model data into the form needed by an attention step.",
    why: "Some first-order prompt estimates leave this work out, so actual prompt processing can take longer.",
    example: "An MLA model may need to reconstruct a full attention representation from its smaller cached form before using it."
  }
];

const glossaryAliases = glossaryTerms
  .flatMap((entry) => entry.terms.map((term) => ({ term, id: entry.id })))
  .sort((left, right) => right.term.length - left.term.length);

const state = {
  mode: "sandbox",
  selectedSectionId: "constraints",
  selectedTopicId: "mental-model",
  lastSidebarTriggerTopicId: "mental-model",
  advancedControlsOpen: false,
  sidebarOpen: false,
  sidebarWidth: 360,
  glossaryOpenTerm: null,
  glossaryTriggerTerm: null,
  glossaryTriggerIndex: null,
  modelPresetId: "velvet-14b",
  hardwarePresetId: "a100-80",
  model: structuredClone(modelPresets[0]),
  hardware: structuredClone(hardwarePresets[0]),
  workload: {
    promptTokens: 7680,
    outputTokens: 512,
    concurrentUsers: 20,
    overheadMultiplier: 1.25,
    hiddenReasoningTokens: 0
  }
};

const topicEnhancements = {
  "weight-vram": {
    liveStats(results) {
      return [
        { label: "Total params", value: `${formatNumber(state.model.totalParamsB, 1)}B` },
        { label: "Weight bytes", value: `${formatNumber(state.model.weightBytes, 1)} B` },
        { label: "Weight memory", value: formatGB(results.weightMemoryGB) },
        { label: "Cluster VRAM", value: formatGB(results.totalSystemVramGB) }
      ];
    },
    walkthrough(results) {
      return [
        {
          label: "Start with stored parameters",
          value: `${formatNumber(state.model.totalParamsB, 1)}B total parameters`,
          note: `${getArchitectureLabel(state.model)} stores the full model, so this step follows total parameters rather than active parameters.`
        },
        {
          label: "Apply the chosen precision",
          value: `${formatNumber(state.model.weightBytes, 1)} bytes per weight`,
          note: "This is the selected storage precision for the model weights."
        },
        {
          label: "Multiply for raw resident size",
          value: `${formatNumber(state.model.totalParamsB, 1)} × ${formatNumber(state.model.weightBytes, 1)} = ${formatGB(results.weightMemoryGB)}`,
          note: "This is raw weight memory only, before KV cache, runtime workspace, and planning headroom."
        }
      ];
    }
  },
  "kv-cache": {
    liveStats(results) {
      return [
        { label: "Prompt", value: formatTokens(state.workload.promptTokens) },
        { label: "Output", value: formatTokens(state.workload.outputTokens) },
        { label: "Total sequence", value: formatTokens(results.totalSequenceTokens) },
        { label: "KV per user", value: formatGB(results.kvPerUserGB) }
      ];
    },
    walkthrough(results) {
      return [
        {
          label: "Build the full sequence length",
          value: `${formatTokens(state.workload.promptTokens)} prompt + ${formatTokens(state.workload.outputTokens)} visible output + ${formatTokens(results.hiddenReasoningTokens)} hidden = ${formatTokens(results.totalSequenceTokens)} live tokens`,
          note: "Prompt, visible output, and configured hidden reasoning tokens all count toward live KV."
        },
        {
          label: "Compute KV bytes per token",
          value: `${formatCompact(results.kvBytesPerTokenPerLayer, 1)} bytes per layer-token`,
          note: state.model.attentionType === "mla"
            ? `MLA stores (${formatNumber(state.model.mlaKvRank, 0)} latent + ${formatNumber(state.model.mlaRopeDim, 0)} positional) values × ${formatNumber(state.model.kvBytes, 2)} bytes${state.model.indexerHeadDim > 0 ? `, plus ${formatNumber(state.model.indexerHeadDim, 0)} indexer values × ${formatNumber(state.model.indexerCacheBytes, 2)} bytes` : ""}.`
            : `GQA stores 2 × ${formatNumber(state.model.kvHeads, 0)} KV heads × ${formatNumber(state.model.headDim, 0)} dimensions × ${formatNumber(state.model.kvBytes, 2)} bytes.`
        },
        {
          label: "Scale by sequence length",
          value: `${formatGB(results.kvPerUserGB)} for one active request`,
          note: `${formatNumber(state.model.layers - results.slidingWindowLayers, 0)} full-context layers and ${formatNumber(results.slidingWindowLayers, 0)} sliding-window layers at a ${formatTokens(results.slidingWindowTokens)} window.`
        }
      ];
    }
  },
  overhead: {
    liveStats(results) {
      return [
        { label: "Total KV", value: formatGB(results.totalKvGB) },
        { label: "Raw weights + KV", value: formatGB(results.weightMemoryGB + results.totalKvGB) },
        { label: "Overhead", value: `${formatNumber(state.workload.overheadMultiplier, 2)}×` },
        { label: "Estimated VRAM", value: formatGB(results.requiredVramGB) }
      ];
    },
    walkthrough(results) {
      const rawWorkingSet = results.weightMemoryGB + results.totalKvGB;
      return [
        {
          label: "Expand one-user KV to all concurrent users",
          value: `${formatGB(results.kvPerUserGB)} × ${formatNumber(state.workload.concurrentUsers, 0)} = ${formatGB(results.totalKvGB)}`,
          note: "This is the total live cache footprint for the selected concurrency."
        },
        {
          label: "Add static weights and dynamic cache",
          value: `${formatGB(results.weightMemoryGB)} + ${formatGB(results.totalKvGB)} = ${formatGB(rawWorkingSet)}`,
          note: "This is the raw working set before any runtime safety margin."
        },
        {
          label: "Apply the planning multiplier",
          value: `${formatGB(rawWorkingSet)} × ${formatNumber(state.workload.overheadMultiplier, 2)} = ${formatGB(results.requiredVramGB)}`,
          note: `The selected margin is why the app compares ${formatGB(results.requiredVramGB)} against ${formatGB(results.totalSystemVramGB)} total system VRAM instead of using the raw working set alone.`
        }
      ];
    }
  },
  decode: {
    liveStats(results) {
      return [
        { label: "Active params", value: `${formatNumber(results.activeParamsB, 1)}B` },
        { label: "Peak bandwidth", value: `${formatNumber(results.aggregatePeakBandwidthTBps, 2)} TB/s` },
        { label: "Usable bandwidth", value: `${formatNumber(results.effectiveDecodeBandwidthTBps, 2)} TB/s` },
        { label: "Single-stream roofline", value: `${formatNumber(results.decodeTps, 1)} tok/s` },
        { label: "Packed-batch bound", value: `${formatNumber(results.batchDecodeThroughputLowTps, 1)}–${formatNumber(results.batchDecodeThroughputHighTps, 1)} tok/s` }
      ];
    },
    walkthrough(results) {
      return [
        {
          label: "Estimate active weight traffic and FLOPs per token",
          value: `${formatNumber(results.activeParamsB, 1)}B active params × ${formatNumber(state.model.weightBytes, 2)} bytes/weight = ${formatGB(results.activeWeightReadGBPerToken)}; about ${formatCompact(results.activeParamsB * 2, 1)}B FLOPs/token`,
          note: "Dense uses total parameters. MoE uses its configured active count; MLA does not change parameter activation."
        },
        {
          label: "Convert peak bandwidth and compute to usable ceilings",
          value:
            results.gpuCount > 1
              ? `${formatNumber(results.aggregatePeakBandwidthTBps, 2)} TB/s × ${formatPercent(results.decodeEfficiency)} decode efficiency × ${formatPercent(results.multiGpuEfficiency)} scaling = ${formatNumber(results.effectiveDecodeBandwidthTBps, 2)} TB/s`
              : `${formatNumber(results.aggregatePeakBandwidthTBps, 2)} TB/s × ${formatPercent(results.decodeEfficiency)} decode efficiency = ${formatNumber(results.effectiveDecodeBandwidthTBps, 2)} TB/s`,
          note: "Efficiency fields are planning assumptions. Use measured kernel and serving throughput when available."
        },
        {
          label: "Take the lower single-stream roofline",
          value: `min(${formatNumber(results.decodeBandwidthBoundTps, 1)} HBM-bound, ${formatNumber(results.decodeComputeBoundTps, 1)} compute-bound) = ${formatNumber(results.decodeTps, 1)} tok/s`,
          note: "This is a first-order ceiling. It excludes KV reads, attention work, queueing, and software overhead."
        },
        {
          label: "Bound a fully packed decode step",
          value: `${formatNumber(state.workload.concurrentUsers, 0)} concurrent sequences: ${formatNumber(results.batchDecodeThroughputLowTps, 1)}–${formatNumber(results.batchDecodeThroughputHighTps, 1)} aggregate tok/s`,
          note: state.model.parameterization === "moe"
            ? "The range runs from low expert reuse to all requests sharing the same active weights. Actual routes and scheduler occupancy determine the result."
            : "Assumes every selected request decodes in the same step and reuses the model weights. This is an ideal packed-batch bound, not a service prediction."
        }
      ];
    }
  },
  ttft: {
    liveStats(results) {
      const stats = [
        { label: "Prompt", value: formatTokens(state.workload.promptTokens) },
        { label: "Peak compute", value: `${formatNumber(results.aggregatePeakComputeTFLOPS, 0)} TFLOPS` },
        { label: "Usable compute", value: `${formatNumber(results.effectivePrefillComputeTFLOPS, 0)} TFLOPS` },
        { label: "One-prompt reading floor", value: formatLongDuration(results.ttftFloorSec) },
        { label: "All prompts arrive together", value: formatLongDuration(results.simultaneousPrefillFloorSec) }
      ];
      if (results.hiddenReasoningTokens > 0) {
        stats.push({ label: "First visible answer floor", value: formatLongDuration(results.simultaneousAnswerStartFloorSec) });
      }
      return stats;
    },
    walkthrough(results) {
      return [
        {
          label: "Choose the prefill-sized model footprint",
          value: `${formatNumber(results.prefillParamsB, 1)}B effective prefill params`,
          note: "Dense uses total parameters; MoE uses the configured active parameter count. MLA alone does not reduce parameter work."
        },
        {
          label: "Convert peak compute into usable prefill compute",
          value:
            results.gpuCount > 1
              ? `${formatNumber(results.aggregatePeakComputeTFLOPS, 0)} TFLOPS × ${formatPercent(results.prefillEfficiency)} prefill efficiency × ${formatPercent(results.multiGpuEfficiency)} scaling = ${formatNumber(results.effectivePrefillComputeTFLOPS, 0)} TFLOPS`
              : `${formatNumber(results.aggregatePeakComputeTFLOPS, 0)} TFLOPS × ${formatPercent(results.prefillEfficiency)} prefill efficiency = ${formatNumber(results.effectivePrefillComputeTFLOPS, 0)} TFLOPS`,
          note: "The value is discounted by the selected prefill-compute efficiency and multi-GPU scaling assumptions."
        },
        {
          label: "Estimate total prompt work",
          value: `${formatCompact(results.linearPrefillFLOPs, 2)} linear FLOPs + ${formatCompact(results.attentionPrefillFLOPs, 2)} attention FLOPs`,
          note: "The attention term uses configured layer/head dimensions; DSA adds a full-context indexer estimate. Projection, kernel, and memory effects are not included."
        },
        {
          label: "Estimate prompt reading time for one request and a full arrival burst",
          value: `${formatLongDuration(results.ttftFloorSec)} for one prompt; about ${formatLongDuration(results.simultaneousPrefillFloorSec)} for ${formatNumber(state.workload.concurrentUsers, 0)} matching prompts arriving together`,
          note: state.workload.hiddenReasoningTokens > 0
            ? `Including ${formatTokens(state.workload.hiddenReasoningTokens)} configured hidden reasoning tokens per request gives about ${formatLongDuration(results.simultaneousAnswerStartFloorSec)} before visible text in this synchronized stress case. Queueing and actual runtime behavior are not modeled.`
            : "These are compute-time floors, not response-time promises. Queueing and serving overhead can make the wait longer."
        }
      ];
    }
  },
  "workload-reference": {
    liveStats(results) {
      return [
        { label: "Prompt", value: formatTokens(state.workload.promptTokens) },
        { label: "Output", value: formatTokens(state.workload.outputTokens) },
        { label: "Total sequence", value: formatTokens(results.totalSequenceTokens) },
        { label: "Concurrent users", value: formatNumber(state.workload.concurrentUsers, 0) }
      ];
    },
    walkthrough(results) {
      return [
        {
          label: "Use the guide's QA / RAG planning range",
          value: "Illustrative total: 4k-8k tokens",
          note: "Use the table as a rough planning example only; your tokenized prompts and traffic samples are the source of truth."
        },
        {
          label: "Compare your live prompt mix",
          value: `${formatTokens(state.workload.promptTokens)} prompt + ${formatTokens(state.workload.outputTokens)} visible output + ${formatTokens(results.hiddenReasoningTokens)} hidden = ${formatTokens(results.totalSequenceTokens)} live tokens`,
          note: "Longer live sequences use more KV memory and reduce memory-bound concurrency."
        },
        {
          label: "Use it as an input sanity check",
          value: `${formatNumber(state.workload.concurrentUsers, 0)} concurrent users at ${formatTokens(results.totalSequenceTokens)} total tokens each`,
          note: "The workload table is illustrative, not a template. Use your own tokenized traffic to set these inputs."
        }
      ];
    }
  },
  "hardware-envelope": {
    liveStats(results) {
      return [
        { label: "GPU count", value: formatNumber(results.gpuCount, 0) },
        { label: "Peak bandwidth", value: `${formatNumber(results.aggregatePeakBandwidthTBps, 2)} TB/s` },
        { label: "Usable bandwidth", value: `${formatNumber(results.effectiveDecodeBandwidthTBps, 2)} TB/s` },
        { label: "Usable compute", value: `${formatNumber(results.effectivePrefillComputeTFLOPS, 0)} TFLOPS` }
      ];
    },
    walkthrough(results) {
      return [
        {
          label: "Enter the spec-sheet ceilings you want to start from",
          value: `${formatNumber(state.hardware.bandwidthTBps, 2)} TB/s bandwidth and ${formatNumber(state.hardware.computeTFLOPS, 0)} TFLOPS compute per GPU`,
          note: "These are headline ceilings. They are not treated as sustained end-to-end serving throughput."
        },
        {
          label: "Choose separate discounts for decode and prefill",
          value: `${formatNumber(state.hardware.decodeEfficiencyPct, 0)}% decode efficiency and ${formatNumber(state.hardware.prefillEfficiencyPct, 0)}% prefill efficiency`,
          note: "Decode and prefill stress the hardware differently, so the app keeps their efficiency assumptions separate."
        },
        {
          label: "Apply multi-GPU scaling only when the workload spans devices",
          value:
            results.gpuCount > 1
              ? `${formatNumber(state.hardware.multiGpuEfficiencyPct, 0)}% scaling across ${formatNumber(results.gpuCount, 0)} GPUs`
              : "Single-GPU scenario, so no scaling discount is applied",
          note: "This term exists to avoid pretending that two or more GPUs always give perfect linear speedup."
        }
      ];
    }
  }
};

const app = document.querySelector("#app");

function structuredClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function clamp(value, minValue, maxValue) {
  return Math.min(Math.max(value, minValue), maxValue);
}

function getArchitectureLabel(model) {
  const parameterization = model.parameterization === "moe" ? "MoE" : "Dense";
  const attention = model.attentionType === "mla" ? "MLA" : "GQA";
  const sparseAttention = Number(model.sparseAttentionTopK) > 0 ? " + DSA" : "";
  return `${parameterization} + ${attention}${sparseAttention}`;
}

function getActiveParams(model) {
  return model.parameterization === "moe" ? model.activeParamsB : model.totalParamsB;
}

function getPrefillParams(model) {
  return getActiveParams(model);
}

function getKvBytesPerTokenPerLayer(model) {
  const attentionCacheValues = model.attentionType === "mla"
    ? (Number(model.mlaKvRank) + Number(model.mlaRopeDim)) * Number(model.kvBytes)
    : 2 * Number(model.kvHeads) * Number(model.headDim) * Number(model.kvBytes);
  const indexerCacheValues = Number(model.sparseAttentionTopK) > 0 && Number(model.indexerHeadDim) > 0
    ? Number(model.indexerHeadDim) * Number(model.indexerCacheBytes)
    : 0;
  return attentionCacheValues + indexerCacheValues;
}

function getEfficiencyRatio(percent, fallback = 100) {
  const value = Number(percent);
  return clamp((Number.isFinite(value) && value > 0 ? value : fallback) / 100, 0.1, 1);
}

function countCausalAttentionPairs(tokenCount, windowTokens = tokenCount) {
  const tokens = Math.max(0, Math.floor(tokenCount));
  const window = Math.max(1, Math.floor(windowTokens));
  if (tokens <= window) {
    return (tokens * (tokens + 1)) / 2;
  }
  return (window * (window + 1)) / 2 + (tokens - window) * window;
}

function calculateSizing(model, hardware, workload) {
  const gpuCount = Math.max(1, Math.floor(Number(hardware.gpuCount) || 1));
  const gpuVramGB = Math.max(0, Number(hardware.vramGB) || 0);
  const peakBandwidthTBps = Math.max(0, Number(hardware.bandwidthTBps) || 0);
  const peakComputeTFLOPS = Math.max(0, Number(hardware.computeTFLOPS) || 0);
  const totalSystemVramGB = gpuVramGB * gpuCount;
  const aggregatePeakBandwidthTBps = peakBandwidthTBps * gpuCount;
  const aggregatePeakComputeTFLOPS = peakComputeTFLOPS * gpuCount;
  const decodeEfficiency = getEfficiencyRatio(hardware.decodeEfficiencyPct);
  const decodeComputeEfficiency = getEfficiencyRatio(hardware.decodeComputeEfficiencyPct, 35);
  const prefillEfficiency = getEfficiencyRatio(hardware.prefillEfficiencyPct);
  const multiGpuEfficiency = gpuCount > 1 ? getEfficiencyRatio(hardware.multiGpuEfficiencyPct) : 1;
  const effectiveDecodeBandwidthTBps = aggregatePeakBandwidthTBps * decodeEfficiency * multiGpuEfficiency;
  const effectiveDecodeComputeTFLOPS = aggregatePeakComputeTFLOPS * decodeComputeEfficiency * multiGpuEfficiency;
  const effectivePrefillComputeTFLOPS = aggregatePeakComputeTFLOPS * prefillEfficiency * multiGpuEfficiency;
  const totalParamsB = Math.max(0, Number(model.totalParamsB) || 0);
  const activeParamsB = Math.min(totalParamsB, Math.max(0, Number(getActiveParams(model)) || 0));
  const prefillParamsB = getPrefillParams({ ...model, totalParamsB, activeParamsB });
  const layers = Math.max(0, Math.floor(Number(model.layers) || 0));
  const attentionHeads = Math.max(0, Math.floor(Number(model.attentionHeads) || 0));
  const slidingWindowLayers = clamp(Math.floor(Number(model.slidingWindowLayers) || 0), 0, layers);
  const slidingWindowTokens = Math.max(1, Math.floor(Number(model.slidingWindowTokens) || 1));
  const promptTokens = Math.max(1, Math.floor(Number(workload.promptTokens) || 1));
  const outputTokens = Math.max(0, Math.floor(Number(workload.outputTokens) || 0));
  const concurrentUsers = Math.max(1, Math.floor(Number(workload.concurrentUsers) || 1));
  const hiddenReasoningTokens = Math.max(0, Math.floor(Number(workload.hiddenReasoningTokens) || 0));
  const overheadMultiplier = Math.max(1, Number(workload.overheadMultiplier) || 1);
  const weightBytes = Math.max(0, Number(model.weightBytes) || 0);
  const kvBytes = Math.max(0, Number(model.kvBytes) || 0);
  const totalSequenceTokens = promptTokens + outputTokens + hiddenReasoningTokens;
  const maxContextTokens = Math.max(0, Math.floor(Number(model.maxContextTokens) || 0));
  const contextLimitExceeded = maxContextTokens > 0 && totalSequenceTokens > maxContextTokens;
  const sparseAttentionTopK = Math.max(0, Math.floor(Number(model.sparseAttentionTopK) || 0));
  const indexerHeads = Math.max(0, Math.floor(Number(model.indexerHeads) || 0));
  const indexerHeadDim = Math.max(0, Math.floor(Number(model.indexerHeadDim) || 0));
  const kvBytesPerTokenPerLayer = getKvBytesPerTokenPerLayer({ ...model, kvBytes });
  const fullAttentionLayers = layers - slidingWindowLayers;
  const kvPerUserBytes =
    kvBytesPerTokenPerLayer *
    (fullAttentionLayers * totalSequenceTokens + slidingWindowLayers * Math.min(totalSequenceTokens, slidingWindowTokens));
  const kvPerUserGB = kvPerUserBytes / 1e9;
  const weightMemoryGB = totalParamsB * weightBytes;
  const activeWeightReadBytesPerToken = activeParamsB * 1e9 * weightBytes;
  const activeWeightReadGBPerToken = activeWeightReadBytesPerToken / 1e9;
  const totalKvGB = kvPerUserGB * concurrentUsers;
  const usableBudgetGB = overheadMultiplier > 0 ? totalSystemVramGB / overheadMultiplier : 0;
  const remainingKvBudgetGB = usableBudgetGB - weightMemoryGB;
  const rawWorkingSetGB = weightMemoryGB + totalKvGB;
  const requiredVramGB = rawWorkingSetGB * overheadMultiplier;
  const fitsInMemory = requiredVramGB <= totalSystemVramGB;
  const effectiveDecodeBandwidthBps = effectiveDecodeBandwidthTBps * 1e12;
  const effectiveDecodeComputeFLOPS = effectiveDecodeComputeTFLOPS * 1e12;
  const effectivePrefillComputeFLOPS = effectivePrefillComputeTFLOPS * 1e12;
  const activeModelFLOPsPerToken = activeParamsB * 1e9 * 2;
  const decodeBandwidthBoundTps = activeWeightReadBytesPerToken > 0
    ? effectiveDecodeBandwidthBps / activeWeightReadBytesPerToken
    : Infinity;
  const decodeComputeBoundTps = activeModelFLOPsPerToken > 0
    ? effectiveDecodeComputeFLOPS / activeModelFLOPsPerToken
    : Infinity;
  const decodeTps = Math.max(0, Math.min(decodeBandwidthBoundTps, decodeComputeBoundTps));
  const decodeTimePerTokenSec = decodeTps > 0 ? 1 / decodeTps : Infinity;
  const bestCaseBatchWeightBytes = model.parameterization === "moe"
    ? activeWeightReadBytesPerToken
    : weightMemoryGB * 1e9;
  const worstCaseBatchWeightBytes = model.parameterization === "moe"
    ? Math.min(totalParamsB, activeParamsB * concurrentUsers) * 1e9 * weightBytes
    : bestCaseBatchWeightBytes;
  const batchBandwidthBoundLowTps = worstCaseBatchWeightBytes > 0
    ? (concurrentUsers * effectiveDecodeBandwidthBps) / worstCaseBatchWeightBytes
    : Infinity;
  const batchBandwidthBoundHighTps = bestCaseBatchWeightBytes > 0
    ? (concurrentUsers * effectiveDecodeBandwidthBps) / bestCaseBatchWeightBytes
    : Infinity;
  const batchDecodeThroughputLowTps = Math.max(0, Math.min(batchBandwidthBoundLowTps, decodeComputeBoundTps));
  const batchDecodeThroughputHighTps = Math.max(0, Math.min(batchBandwidthBoundHighTps, decodeComputeBoundTps));
  const perUserDecodeConservativeTps = Number.isFinite(Math.min(decodeTps, batchDecodeThroughputLowTps))
    ? Math.max(0, Math.min(decodeTps, batchDecodeThroughputLowTps) / concurrentUsers)
    : 0;
  const perUserDecodeLowTps = Number.isFinite(batchDecodeThroughputLowTps)
    ? batchDecodeThroughputLowTps / concurrentUsers
    : 0;
  const perUserDecodeHighTps = Number.isFinite(batchDecodeThroughputHighTps)
    ? batchDecodeThroughputHighTps / concurrentUsers
    : 0;
  const queryKeyHeadDim = model.attentionType === "mla"
    ? (Number(model.mlaQkNopeDim) || 0) + (Number(model.mlaRopeDim) || 0)
    : (Number(model.headDim) || 0);
  const valueHeadDim = model.attentionType === "mla"
    ? (Number(model.mlaValueHeadDim) || 0)
    : (Number(model.headDim) || 0);
  const fullAttentionWindow = sparseAttentionTopK > 0 ? Math.min(promptTokens, sparseAttentionTopK) : promptTokens;
  const slidingAttentionWindow = sparseAttentionTopK > 0
    ? Math.min(slidingWindowTokens, sparseAttentionTopK)
    : slidingWindowTokens;
  const fullAttentionPairs = countCausalAttentionPairs(promptTokens, fullAttentionWindow);
  const slidingAttentionPairs = countCausalAttentionPairs(promptTokens, slidingAttentionWindow);
  const indexerAttentionPairs = countCausalAttentionPairs(promptTokens, promptTokens);
  const attentionFlopsPerPair = 2 * attentionHeads * (queryKeyHeadDim + valueHeadDim);
  const linearPrefillFLOPs = prefillParamsB * 1e9 * promptTokens * 2;
  const sparseAttentionPrefillFLOPs = attentionFlopsPerPair *
    (fullAttentionLayers * fullAttentionPairs + slidingWindowLayers * slidingAttentionPairs);
  const indexerPrefillFLOPs = sparseAttentionTopK > 0
    ? 2 * indexerHeads * indexerHeadDim * layers * indexerAttentionPairs
    : 0;
  const attentionPrefillFLOPs = sparseAttentionPrefillFLOPs + indexerPrefillFLOPs;
  const totalPrefillFLOPs = linearPrefillFLOPs + attentionPrefillFLOPs;
  const ttftFloorSec = effectivePrefillComputeFLOPS > 0 ? totalPrefillFLOPs / effectivePrefillComputeFLOPS : Infinity;
  const simultaneousPrefillFloorSec = ttftFloorSec * concurrentUsers;
  const simultaneousAnswerStartFloorSec =
    simultaneousPrefillFloorSec + (perUserDecodeConservativeTps > 0 ? hiddenReasoningTokens / perUserDecodeConservativeTps : 0);
  const memoryBoundConcurrency = kvPerUserGB > 0
    ? Math.max(0, Math.floor(remainingKvBudgetGB / kvPerUserGB))
    : 0;
  const memoryUtilization = totalSystemVramGB > 0 ? requiredVramGB / totalSystemVramGB : Infinity;

  return {
    gpuCount,
    totalSystemVramGB,
    aggregatePeakBandwidthTBps,
    aggregatePeakComputeTFLOPS,
    effectiveDecodeBandwidthTBps,
    effectiveDecodeComputeTFLOPS,
    effectivePrefillComputeTFLOPS,
    decodeEfficiency,
    decodeComputeEfficiency,
    prefillEfficiency,
    multiGpuEfficiency,
    activeParamsB,
    prefillParamsB,
    totalSequenceTokens,
    hiddenReasoningTokens,
    maxContextTokens,
    contextLimitExceeded,
    sparseAttentionTopK,
    indexerHeadDim,
    kvBytesPerTokenPerLayer,
    kvPerUserBytes,
    kvPerUserGB,
    totalKvGB,
    weightMemoryGB,
    activeWeightReadBytesPerToken,
    activeWeightReadGBPerToken,
    bestCaseBatchWeightBytes,
    worstCaseBatchWeightBytes,
    usableBudgetGB,
    remainingKvBudgetGB,
    requiredVramGB,
    fitsInMemory,
    decodeBandwidthBoundTps,
    decodeComputeBoundTps,
    decodeTimePerTokenSec,
    decodeTps,
    batchDecodeThroughputLowTps,
    batchDecodeThroughputHighTps,
    perUserDecodeConservativeTps,
    perUserDecodeLowTps,
    perUserDecodeHighTps,
    linearPrefillFLOPs,
    indexerPrefillFLOPs,
    attentionPrefillFLOPs,
    totalPrefillFLOPs,
    ttftFloorSec,
    simultaneousPrefillFloorSec,
    simultaneousAnswerStartFloorSec,
    memoryBoundConcurrency,
    memoryUtilization,
    rawWorkingSetGB,
    slidingWindowLayers,
    slidingWindowTokens
  };
}

function calculateScenario(totalSequenceTokens) {
  const mix = getSequenceMix(totalSequenceTokens);
  return calculateSizing(state.model, state.hardware, {
    ...state.workload,
    ...mix,
    concurrentUsers: Math.max(1, state.workload.concurrentUsers)
  });
}

function getSequenceMix(totalSequenceTokens) {
  const total = Math.max(1, Math.floor(totalSequenceTokens));
  const currentTotal = Math.max(1, state.workload.promptTokens + state.workload.outputTokens);
  const promptShare = state.workload.promptTokens / currentTotal;
  const promptTokens = clamp(Math.round(total * promptShare), 1, total);
  return { promptTokens, outputTokens: total - promptTokens };
}

function formatNumber(value, digits = 1) {
  return Number.isFinite(value)
    ? new Intl.NumberFormat("en-US", {
        maximumFractionDigits: digits,
        minimumFractionDigits: value < 10 && digits > 0 ? Math.min(digits, 1) : 0
      }).format(value)
    : "—";
}

function formatCompact(value, digits = 1) {
  return Number.isFinite(value)
    ? new Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: digits
      }).format(value)
    : "—";
}

function formatDuration(seconds) {
  if (!Number.isFinite(seconds)) {
    return "—";
  }
  if (seconds < 1) {
    return `${formatNumber(seconds * 1000, 0)} ms`;
  }
  return `${formatNumber(seconds, 2)} s`;
}

function formatLongDuration(seconds) {
  if (!Number.isFinite(seconds)) return "—";
  if (seconds < 60) return formatDuration(seconds);
  const roundedSeconds = Math.round(seconds);
  if (roundedSeconds < 3600) {
    const minutes = Math.floor(roundedSeconds / 60);
    const remainder = roundedSeconds % 60;
    return remainder ? `${minutes} min ${remainder} sec` : `${minutes} min`;
  }
  const hours = Math.floor(roundedSeconds / 3600);
  const minutes = Math.floor((roundedSeconds % 3600) / 60);
  return minutes ? `${hours} hr ${minutes} min` : `${hours} hr`;
}

function formatPercent(value) {
  return `${formatNumber(value * 100, 0)}%`;
}

function formatGB(value) {
  return `${formatNumber(value, value < 10 ? 2 : 1)} GB`;
}

function formatTokens(value) {
  return new Intl.NumberFormat("en-US").format(Math.round(value));
}

function getStreamComfort(tokensPerSecond) {
  if (!(tokensPerSecond > 0) || !Number.isFinite(tokensPerSecond)) {
    return {
      label: "No speed estimate",
      className: "unavailable",
      description: "Enter valid model and hardware values to estimate a generation pace."
    };
  }
  if (tokensPerSecond >= 20) {
    return {
      label: "Very fluid",
      className: "fluid",
      description: "Text should appear quickly and continuously if the system reaches this estimate."
    };
  }
  if (tokensPerSecond >= 10) {
    return {
      label: "Smooth",
      className: "smooth",
      description: "A steady pace for most chat replies if the system reaches this estimate."
    };
  }
  if (tokensPerSecond >= 5) {
    return {
      label: "Steady, with pauses",
      className: "steady",
      description: "The answer remains readable, but people may notice it arriving word by word."
    };
  }
  if (tokensPerSecond >= 2) {
    return {
      label: "Noticeably slow",
      className: "slow",
      description: "People are likely to see pauses between parts of the answer."
    };
  }
  return {
    label: "Very slow",
    className: "very-slow",
    description: "Text may arrive in short bursts with long pauses between them."
  };
}

function renderFullConcurrencyEstimate(results) {
  const users = Math.max(1, Math.floor(Number(state.workload.concurrentUsers) || 1));
  const tokensPerSecond = results.perUserDecodeConservativeTps;
  const comfort = getStreamComfort(tokensPerSecond);
  const outputTokens = Math.max(0, Math.floor(Number(state.workload.outputTokens) || 0));
  const completionTime = tokensPerSecond > 0 && outputTokens > 0
    ? formatLongDuration(outputTokens / tokensPerSecond)
    : null;
  const paceText = tokensPerSecond > 0 ? formatNumber(tokensPerSecond, 1) : "—";
  const packedRangeText = `${formatNumber(results.perUserDecodeLowTps, 1)}–${formatNumber(results.perUserDecodeHighTps, 1)} tokens/s per person`;

  return `
    <article class="comfort-card ${results.fitsInMemory ? "" : "memory-warning"}">
      <div class="comfort-main">
        <div class="section-kicker">How the stream may feel with everyone active</div>
        <h3>${comfort.label}</h3>
        <p>${comfort.description} ${tokensPerSecond > 0
          ? `With all ${formatNumber(users, 0)} requests generating together, if the GPU cannot share model reads between people, each gets about <strong>${paceText} tokens per second</strong>.`
          : "A per-person estimate is not available for these model and hardware values."}</p>
        <p class="support-copy">If the server batches requests and reuses weights well, its ideal packed-batch range is ${packedRangeText}.</p>
        ${completionTime
          ? `<p class="support-copy">At that pace, a ${formatTokens(outputTokens)}-token answer takes about ${completionTime} to generate after it starts. The model must read the prompt first.</p>`
          : `<p class="support-copy">Set output tokens above zero to estimate how long the answer takes to generate after it starts.</p>`}
        ${results.fitsInMemory
          ? ""
          : `<p class="comfort-warning">The model and ${formatNumber(users, 0)} conversation caches exceed the estimated GPU memory. Treat this speed as hypothetical until the configuration fits.</p>`}
      </div>
      <div class="comfort-stat">
        <div class="metric-label">Conservative per-person pace</div>
        <strong>${paceText} <span>tokens/s</span></strong>
        <span class="comfort-badge ${comfort.className}">${comfort.label}</span>
      </div>
      <div class="comfort-footnote">Cautious case: all ${formatNumber(users, 0)} configured requests decode at once and the GPU gets no benefit from sharing model reads. The packed-batch figure assumes it can reuse model data between requests. Both are ideal hardware ceilings; real speed can be lower, and prompt reading or queueing adds to the wait before an answer starts. The feel label is a rough guide, not a user-study result.</div>
    </article>
  `;
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function loadModelPreset(presetId) {
  if (presetId === "custom") {
    state.modelPresetId = "custom";
    return;
  }
  const preset = modelPresets.find((entry) => entry.id === presetId);
  if (!preset) {
    return;
  }
  state.modelPresetId = presetId;
  state.model = structuredClone(preset);
  state.selectedTopicId = preset.parameterization === "dense" ? "weight-vram" : "architecture";
}

function loadHardwarePreset(presetId) {
  if (presetId === "custom") {
    state.hardwarePresetId = "custom";
    return;
  }
  const preset = hardwarePresets.find((entry) => entry.id === presetId);
  if (!preset) {
    return;
  }
  state.hardwarePresetId = presetId;
  state.hardware = structuredClone(preset);
}

function loadWorkedExample() {
  loadModelPreset("velvet-14b");
  loadHardwarePreset("a100-80");
  state.workload = {
    promptTokens: 7680,
    outputTokens: 512,
    concurrentUsers: 20,
    overheadMultiplier: 1.25,
    hiddenReasoningTokens: 0
  };
  state.selectedTopicId = "weight-vram";
  state.sidebarOpen = false;
}

function updateModelField(field, rawValue) {
  const integerFields = ["layers", "attentionHeads", "kvHeads", "headDim", "mlaKvRank", "mlaRopeDim", "mlaQkNopeDim", "mlaValueHeadDim", "sparseAttentionTopK", "indexerHeads", "indexerHeadDim", "maxContextTokens", "slidingWindowLayers", "slidingWindowTokens"];
  const numericFields = ["totalParamsB", "activeParamsB", ...integerFields, "weightBytes", "kvBytes", "indexerCacheBytes"];
  if (!numericFields.includes(field)) {
    state.model[field] = rawValue;
  } else {
    let value = Number(rawValue);
    if (!Number.isFinite(value)) value = state.model[field];
    if (integerFields.includes(field)) value = Math.floor(value);
    const minimum = ["slidingWindowLayers", "sparseAttentionTopK", "indexerHeads", "indexerHeadDim", "indexerCacheBytes", "maxContextTokens"].includes(field)
      ? 0
      : ["totalParamsB", "activeParamsB", "weightBytes", "kvBytes"].includes(field)
        ? 0.01
        : 1;
    state.model[field] = Math.max(minimum, value);
  }
  if (field === "parameterization" && rawValue === "dense") {
    state.model.activeParamsB = state.model.totalParamsB;
  }
  if (field === "totalParamsB") {
    state.model.activeParamsB = state.model.parameterization === "dense"
      ? state.model.totalParamsB
      : Math.min(state.model.activeParamsB, state.model.totalParamsB);
  }
  if (field === "layers") state.model.slidingWindowLayers = Math.min(state.model.slidingWindowLayers, state.model.layers);
  if (field === "activeParamsB") state.model.activeParamsB = Math.min(state.model.activeParamsB, state.model.totalParamsB);
}

function updateHardwareField(field, rawValue) {
  let value = Number(rawValue);
  if (!Number.isFinite(value)) value = state.hardware[field];
  if (field === "gpuCount") value = Math.max(1, Math.floor(value));
  else if (field.endsWith("EfficiencyPct")) value = clamp(value, 10, 100);
  else value = Math.max(0.01, value);
  state.hardware[field] = value;
}

function updateWorkloadField(field, rawValue) {
  let value = Number(rawValue);
  if (!Number.isFinite(value)) value = state.workload[field];
  if (field === "concurrentUsers") value = Math.max(1, Math.floor(value));
  else if (field === "promptTokens") value = Math.max(1, Math.floor(value));
  else if (field === "outputTokens" || field === "hiddenReasoningTokens") value = Math.max(0, Math.floor(value));
  else if (field === "overheadMultiplier") value = clamp(value, 1, 2);
  state.workload[field] = value;
}

function renderModeSwitch() {
  const modes = [
    { id: "guide", label: "Guide" },
    { id: "sandbox", label: "Sandbox" }
  ];

  return `
    <div class="mode-switch" role="group" aria-label="Calculator view">
      ${modes
        .map(
          (mode) => `
            <button
              type="button"
              class="${state.mode === mode.id ? "active" : ""}"
              aria-pressed="${state.mode === mode.id}"
              data-action="set-mode"
              data-mode="${mode.id}"
            >
              ${mode.label}
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderSectionRail() {
  return `
    <nav class="section-rail" aria-label="Guide sections">
      <div>
        <div class="micro-label">Guide map</div>
      </div>
      ${guideSections
        .map(
          (section, index) => `
            <button
              type="button"
              class="${state.selectedSectionId === section.id ? "active" : ""}"
              aria-current="${state.selectedSectionId === section.id ? "location" : "false"}"
              data-action="select-section"
              data-section="${section.id}"
              data-topic="${section.topicId}"
            >
              <div class="nav-index">${String(index + 1).padStart(2, "0")}</div>
              <div class="nav-title">${section.title}</div>
              <div class="support-copy">${section.summary}</div>
            </button>
          `
        )
        .join("")}
    </nav>
  `;
}

function renderHeroStrip(results) {
  const primarySummary =
    "Check whether a model fits, how quickly answers may stream when everyone is active, and how long the model needs to read a prompt before replying. Replace planning assumptions with your serving measurements when you have them.";

  return `
    <section class="hero-strip">
      <div class="hero-panel">
        <div class="micro-label">LLM inference capacity planner</div>
        <h2 class="hero-title">Inference Sizing Visualizer</h2>
        <p class="guide-copy">${primarySummary}</p>
        ${renderModeSwitch()}
        <div class="chip-row">
          <div class="chip"><strong>${escapeHtml(state.model.name)}</strong> • ${getArchitectureLabel(state.model)}</div>
          <div class="chip"><strong>${state.hardware.name} × ${formatNumber(results.gpuCount, 0)}</strong> • ${formatGB(results.totalSystemVramGB)} cluster VRAM</div>
          <div class="chip"><strong>${formatTokens(results.totalSequenceTokens)}</strong> live sequence tokens</div>
          <div class="chip"><strong>${results.fitsInMemory ? "Fits with selected margin" : "Exceeds memory budget"}</strong> • ${formatGB(results.requiredVramGB)} planned demand</div>
        </div>
      </div>
    </section>
  `;
}

function renderContextLimitNote(results) {
  if (!results.contextLimitExceeded) return "";
  return `
    <div class="context-limit-note" role="alert">
      <strong>Configured model context exceeded.</strong>
      The live sequence is ${formatTokens(results.totalSequenceTokens)} tokens, above the configured ${formatTokens(results.maxContextTokens)}-token limit. Memory and throughput figures still calculate, but this sequence is not valid for the selected model config.
    </div>
  `;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function renderNumberField(group, field, label, value, options = {}) {
  const min = options.min ?? 0;
  const step = options.step ?? 1;
  const max = options.max === undefined ? "" : `max="${options.max}"`;
  return `
    <label class="field">
      <span>${label}</span>
      <input data-group="${group}" data-field="${field}" type="number" min="${min}" ${max} step="${step}" value="${escapeHtml(value)}" />
    </label>
  `;
}

function renderSelectField(group, field, label, value, options) {
  return `
    <label class="field">
      <span>${label}</span>
      <select data-group="${group}" data-field="${field}">
        ${options.map(([optionValue, optionLabel]) => `<option value="${optionValue}" ${value === optionValue ? "selected" : ""}>${optionLabel}</option>`).join("")}
      </select>
    </label>
  `;
}

function renderControlDeck(results) {
  const modelPresetOptions = [["custom", "Custom model"], ...modelPresets.map((preset) => [preset.id, preset.name])];
  const hardwarePresetOptions = [["custom", "Custom hardware"], ...hardwarePresets.map((preset) => [preset.id, preset.name])];
  const modelFields = [
    `<label class="field"><span>Model name</span><input data-group="model" data-field="name" value="${escapeHtml(state.model.name)}" /></label>`,
    renderSelectField("model", "parameterization", "Model type", state.model.parameterization, [["dense", "Dense"], ["moe", "Mixture of experts (MoE)"]]),
    renderSelectField("model", "attentionType", "Attention / KV layout", state.model.attentionType, [["gqa", "Grouped-query attention (GQA)"], ["mla", "Multi-head latent attention (MLA)"]]),
    renderNumberField("model", "totalParamsB", "Total parameters (B)", state.model.totalParamsB, { min: 0.1, step: 0.1 }),
    state.model.parameterization === "moe"
      ? renderNumberField("model", "activeParamsB", "Active parameters/token (B)", state.model.activeParamsB, { min: 0.1, max: state.model.totalParamsB, step: 0.1 })
      : `<div class="field-note"><strong>Active parameters</strong><span>Dense: all ${formatNumber(state.model.totalParamsB, 1)}B parameters are active per token.</span></div>`,
    renderNumberField("model", "layers", "Transformer layers", state.model.layers, { min: 1, step: 1 }),
    renderNumberField("model", "attentionHeads", "Query heads", state.model.attentionHeads, { min: 1, step: 1 }),
    state.model.attentionType === "mla"
      ? [
          renderNumberField("model", "mlaKvRank", "MLA KV latent rank", state.model.mlaKvRank, { min: 1, step: 1 }),
          renderNumberField("model", "mlaRopeDim", "MLA RoPE key dim", state.model.mlaRopeDim, { min: 1, step: 1 }),
          renderNumberField("model", "mlaQkNopeDim", "MLA QK content dim", state.model.mlaQkNopeDim, { min: 1, step: 1 }),
          renderNumberField("model", "mlaValueHeadDim", "MLA value head dim", state.model.mlaValueHeadDim, { min: 1, step: 1 })
        ].join("")
      : [
          renderNumberField("model", "kvHeads", "KV heads", state.model.kvHeads, { min: 1, step: 1 }),
          renderNumberField("model", "headDim", "Head dimension", state.model.headDim, { min: 1, step: 1 })
        ].join(""),
    renderNumberField("model", "slidingWindowLayers", "Sliding-window layers (0 = none)", state.model.slidingWindowLayers, { min: 0, max: state.model.layers, step: 1 }),
    renderNumberField("model", "slidingWindowTokens", "Sliding window (tokens)", state.model.slidingWindowTokens, { min: 1, step: 128 }),
    renderNumberField("model", "maxContextTokens", "Max sequence length (0 = unknown)", state.model.maxContextTokens, { min: 0, step: 128 }),
    renderNumberField("model", "sparseAttentionTopK", "Sparse attention top-k (0 = dense)", state.model.sparseAttentionTopK, { min: 0, step: 128 }),
    state.model.sparseAttentionTopK > 0
      ? [
          renderNumberField("model", "indexerHeads", "DSA indexer heads", state.model.indexerHeads, { min: 0, step: 1 }),
          renderNumberField("model", "indexerHeadDim", "DSA indexer key dim", state.model.indexerHeadDim, { min: 0, step: 1 }),
          renderNumberField("model", "indexerCacheBytes", "Indexer cache bytes/value", state.model.indexerCacheBytes, { min: 0, step: 0.01 })
        ].join("")
      : "",
    renderNumberField("model", "weightBytes", "Weight bytes/parameter", state.model.weightBytes, { min: 0.01, step: 0.01 }),
    renderNumberField("model", "kvBytes", "Main KV bytes/value", state.model.kvBytes, { min: 0.01, step: 0.01 })
  ].join("");

  return `
    <section class="control-area" aria-label="Sizing inputs">
      <div class="control-grid primary-controls">
        <article class="control-group">
          <div class="control-header"><div><div class="micro-label">1 · Model</div><h3>Choose a model</h3></div><button type="button" class="control-info-button" data-action="open-topic" data-topic="architecture" aria-controls="topic-sidebar" aria-expanded="${state.sidebarOpen}" aria-label="Explain model architecture">Info</button></div>
          ${renderSelectField("preset", "model", "Model preset", state.modelPresetId, modelPresetOptions)}
        <p class="support-copy">${escapeHtml(state.model.name)} · ${getArchitectureLabel(state.model)} · ${formatNumber(state.model.totalParamsB, 1)}B stored${state.model.parameterization === "moe" ? ` · ${formatNumber(state.model.activeParamsB, 1)}B active/token${state.model.id === "deepseek-v32" ? " (estimate)" : ""}` : ""}</p>
        </article>
        <article class="control-group">
          <div class="control-header"><div><div class="micro-label">2 · Hardware</div><h3>Choose accelerators</h3></div><button type="button" class="control-info-button" data-action="open-topic" data-topic="hardware-envelope" aria-controls="topic-sidebar" aria-expanded="${state.sidebarOpen}" aria-label="Explain hardware assumptions">Info</button></div>
          ${renderSelectField("preset", "hardware", "Hardware preset", state.hardwarePresetId, hardwarePresetOptions)}
          ${renderNumberField("hardware", "gpuCount", "GPU count", state.hardware.gpuCount, { min: 1, step: 1 })}
          <p class="support-copy">${escapeHtml(state.hardware.name)} · ${formatGB(results.totalSystemVramGB)} aggregate VRAM</p>
        </article>
        <article class="control-group">
          <div class="control-header"><div><div class="micro-label">3 · Workload</div><h3>Set active request mix</h3></div><button type="button" class="control-info-button" data-action="open-topic" data-topic="workload-reference" aria-controls="topic-sidebar" aria-expanded="${state.sidebarOpen}" aria-label="Explain workload inputs">Info</button></div>
          <div class="field-grid">
            ${renderNumberField("workload", "promptTokens", "Prompt tokens/request", state.workload.promptTokens, { min: 1, step: 128 })}
            ${renderNumberField("workload", "outputTokens", "Output tokens/request", state.workload.outputTokens, { min: 0, step: 128 })}
            ${renderNumberField("workload", "concurrentUsers", "Concurrent requests", state.workload.concurrentUsers, { min: 1, step: 1 })}
          </div>
          <div class="action-row">
            ${scenarioPresets.map((preset) => `
              <button type="button" class="scenario-preset ${state.workload.promptTokens + state.workload.outputTokens === preset ? "active" : ""}" data-action="load-sequence-preset" data-sequence="${preset}" aria-pressed="${state.workload.promptTokens + state.workload.outputTokens === preset}">
                ${formatCompact(preset, 1)} prompt + output
              </button>`).join("")}
          </div>
        </article>
      </div>
      <details class="advanced-controls" data-advanced-controls ${state.advancedControlsOpen ? "open" : ""}>
        <summary><span>Advanced assumptions</span><small>Model dimensions, precision, hardware efficiency, and memory margin</small></summary>
        <div class="control-grid advanced-grid">
          <article class="control-group"><div><div class="micro-label">Model details</div><h3>Architecture and precision</h3></div><div class="field-grid">${modelFields}</div><p class="support-copy">Bytes per weight/cache value are effective storage sizes. Quantization scales, packing, and runtime metadata need extra allowance. A zero max sequence length means no model limit is configured here.</p></article>
          <article class="control-group"><div><div class="micro-label">Hardware details</div><h3>Peak ceilings and efficiency</h3></div><div class="field-grid">
            ${renderNumberField("hardware", "vramGB", "VRAM (GB/GPU)", state.hardware.vramGB, { min: 1, step: 1 })}
            ${renderNumberField("hardware", "bandwidthTBps", "Peak HBM bandwidth (TB/s)", state.hardware.bandwidthTBps, { min: 0.01, step: 0.01 })}
            ${renderNumberField("hardware", "computeTFLOPS", "Dense FP16/BF16 peak (TFLOPS)", state.hardware.computeTFLOPS, { min: 1, step: 1 })}
            ${renderNumberField("hardware", "decodeEfficiencyPct", "Decode HBM efficiency (%)", state.hardware.decodeEfficiencyPct, { min: 10, max: 100, step: 1 })}
            ${renderNumberField("hardware", "decodeComputeEfficiencyPct", "Decode compute efficiency (%)", state.hardware.decodeComputeEfficiencyPct, { min: 10, max: 100, step: 1 })}
            ${renderNumberField("hardware", "prefillEfficiencyPct", "Prefill compute efficiency (%)", state.hardware.prefillEfficiencyPct, { min: 10, max: 100, step: 1 })}
            ${renderNumberField("hardware", "multiGpuEfficiencyPct", "Multi-GPU scaling (%)", state.hardware.multiGpuEfficiencyPct, { min: 10, max: 100, step: 1 })}
          </div><p class="support-copy">Match peak compute to the dtype, accumulation mode, and dense (non-sparse) kernel path. Rubin specs are preliminary; efficiency values are editable assumptions, not benchmark data.</p></article>
          <article class="control-group"><div><div class="micro-label">Memory and reasoning</div><h3>Planning margin</h3></div><div class="field-grid">
            ${renderNumberField("workload", "overheadMultiplier", "Memory safety factor", state.workload.overheadMultiplier, { min: 1, max: 2, step: 0.01 })}
            ${renderNumberField("workload", "hiddenReasoningTokens", "Hidden reasoning tokens", state.workload.hiddenReasoningTokens, { min: 0, step: 128 })}
          </div><p class="support-copy">The safety factor applies to weights plus live KV. It is not a universal runtime overhead.</p></article>
        </div>
      </details>
      <div class="action-row control-actions"><button type="button" class="action-button" data-action="load-worked-example">Reset example</button></div>
    </section>
  `;
}

function renderGuideVisual(sectionId, results) {
  if (sectionId === "constraints") {
    return `
      <div class="visual-grid">
        <button type="button" class="visual-button three-up" data-action="focus-topic" data-topic="weight-vram">
          <div class="section-kicker">Fit</div>
          <strong>${formatGB(results.requiredVramGB)}</strong>
          <div class="support-copy">Estimated total demand against ${formatGB(results.totalSystemVramGB)} of total cluster VRAM.</div>
        </button>
        <button type="button" class="visual-button three-up" data-action="focus-topic" data-topic="decode">
          <div class="section-kicker">Feed</div>
          <strong>${formatNumber(results.decodeTps, 0)} tok/s</strong>
          <div class="support-copy">Bandwidth-led decode estimate from active weight reads and usable bandwidth.</div>
        </button>
        <button type="button" class="visual-button three-up" data-action="focus-topic" data-topic="ttft">
          <div class="section-kicker">Process</div>
          <strong>${formatLongDuration(results.ttftFloorSec)}</strong>
          <div class="support-copy">Compute-led prefill floor from usable prefill compute.</div>
        </button>
      </div>
    `;
  }

  if (sectionId === "architecture") {
    const cards = [
      {
        id: "dense",
        title: "Dense parameters",
        topic: "architecture",
        detail: "All stored parameters are active per token.",
        signal: "P_active = P_total"
      },
      {
        id: "moe",
        title: "Mixture of experts",
        topic: "architecture",
        detail: "Store all experts; activate a subset per token.",
        signal: `${formatNumber(state.model.activeParamsB, 1)}B active / ${formatNumber(state.model.totalParamsB, 1)}B total`
      },
      {
        id: "gqa",
        title: "GQA attention",
        topic: "architecture",
        detail: "KV storage follows the configured key/value head count.",
        signal: "2 × KV heads × head dim"
      },
      {
        id: "mla",
        title: "MLA attention",
        topic: "architecture",
        detail: "KV storage follows latent rank plus positional key dimensions.",
        signal: `${formatNumber(state.model.mlaKvRank + state.model.mlaRopeDim, 0)} values/layer/token`
      },
      {
        id: "dsa",
        title: "Sparse attention (DSA)",
        topic: "architecture",
        detail: "An indexer scores context positions, then attention uses a top-k subset.",
        signal: state.model.sparseAttentionTopK > 0 ? `top ${formatNumber(state.model.sparseAttentionTopK, 0)}` : "not configured"
      }
    ];

    return `
      <div class="comparison-grid">
        ${cards
          .map(
            (card) => `
              <button type="button" class="topic-button ${card.id === state.model.parameterization || card.id === state.model.attentionType || (card.id === "dsa" && state.model.sparseAttentionTopK > 0) ? "active" : ""}" data-action="focus-topic" data-topic="${card.topic}">
                <div class="section-kicker">${card.title}</div>
                <strong>${card.signal}</strong>
                <div class="support-copy">${card.detail}</div>
              </button>
            `
          )
          .join("")}
      </div>
    `;
  }

  if (sectionId === "weights") {
    const weightWidth = clamp((results.weightMemoryGB / results.totalSystemVramGB) * 100, 0, 100);
    return `
      <div class="visual-grid">
        <div class="visual-panel half">
          <div class="metric-label">Weight memory vs card capacity</div>
          <div class="stack-meter" style="margin-top: 12px;">
            <div class="stack-fill" style="width: ${weightWidth}%"></div>
          </div>
          <div class="stack-legend" style="margin-top: 12px;">
            <span><span class="legend-dot" style="background: var(--accent);"></span>Weights ${formatGB(results.weightMemoryGB)}</span>
            <span><span class="legend-dot" style="background: rgba(255,255,255,0.08);"></span>Total cluster VRAM ${formatGB(results.totalSystemVramGB)}</span>
          </div>
        </div>
        <button type="button" class="visual-button half" data-action="focus-topic" data-topic="weight-vram">
          <div class="section-kicker">Formula</div>
          <strong>${formatNumber(state.model.totalParamsB, 1)}B × ${formatNumber(state.model.weightBytes, 1)} bytes</strong>
          <div class="support-copy">This is raw resident size before runtime overhead and communication buffers.</div>
        </button>
      </div>
    `;
  }

  if (sectionId === "kv") {
    return `
      <div class="visual-grid">
        <button type="button" class="visual-button half" data-action="focus-topic" data-topic="kv-cache">
          <div class="section-kicker">Per active user</div>
          <strong>${formatGB(results.kvPerUserGB)}</strong>
          <div class="support-copy">${formatTokens(results.totalSequenceTokens)} tokens · ${state.model.layers} layers · ${getArchitectureLabel(state.model)}.</div>
        </button>
        <div class="visual-panel half">
          <div class="metric-label">Growth drivers</div>
          <div class="chip-row" style="margin-top: 12px;">
            <div class="chip"><strong>${formatTokens(results.totalSequenceTokens)}</strong> sequence</div>
            <div class="chip"><strong>${formatNumber(state.model.layers, 0)}</strong> layers</div>
            <div class="chip"><strong>${formatCompact(results.kvBytesPerTokenPerLayer, 1)}</strong> bytes/layer/token</div>
            <div class="chip"><strong>${formatNumber(results.slidingWindowLayers, 0)}</strong> sliding-window layers</div>
          </div>
        </div>
      </div>
    `;
  }

  if (sectionId === "overhead") {
    const raw = results.weightMemoryGB + results.totalKvGB;
    const weightWidth = clamp((results.weightMemoryGB / results.totalSystemVramGB) * 100, 0, 100);
    const kvWidth = clamp((results.totalKvGB / results.totalSystemVramGB) * 100, 0, 100);
    const taxedWidth = clamp((results.requiredVramGB / results.totalSystemVramGB) * 100, 0, 100);
    return `
      <div class="visual-grid">
        <div class="visual-panel half">
          <div class="metric-label">Before planning buffer</div>
          <div class="stack-meter" style="margin-top: 12px;">
            <div class="stack-fill" style="width: ${weightWidth}%"></div>
            <div class="stack-kv" style="width: ${Math.max(0, Math.min(kvWidth, 100 - weightWidth))}%; left: ${weightWidth}%"></div>
          </div>
          <div class="support-copy" style="margin-top: 12px;">Weights + KV = ${formatGB(raw)}</div>
        </div>
        <button type="button" class="visual-button half" data-action="focus-topic" data-topic="overhead">
          <div class="section-kicker">After ${formatNumber(state.workload.overheadMultiplier, 2)}× multiplier</div>
          <strong>${formatGB(results.requiredVramGB)}</strong>
          <div class="support-copy">Combined weights + total cache × overhead against ${formatGB(results.totalSystemVramGB)} of total cluster VRAM.</div>
          <div class="stack-meter">
            <div class="${results.fitsInMemory ? "stack-fill" : "stack-over"}" style="width: ${taxedWidth}%"></div>
          </div>
        </button>
      </div>
    `;
  }

  if (sectionId === "throughput") {
    return `
      <div class="visual-grid">
        <button type="button" class="visual-button half" data-action="focus-topic" data-topic="decode">
          <div class="section-kicker">Decode time per token</div>
          <strong>${formatDuration(results.decodeTimePerTokenSec)}</strong>
          <div class="support-copy">Derived from ${formatNumber(results.activeParamsB, 1)}B active params and ${formatNumber(results.effectiveDecodeBandwidthTBps, 2)} TB/s usable bandwidth.</div>
        </button>
        <div class="visual-panel half">
          <div class="metric-label">Throughput split</div>
          <div class="topic-stat-row" style="margin-top: 12px;">
            <div class="topic-stat-card">
            <div class="metric-label">Single-stream roofline</div>
              <div class="topic-stat">${formatNumber(results.decodeTps, 0)} tok/s</div>
            </div>
            <div class="topic-stat-card">
              <div class="metric-label">Packed-batch range</div>
              <div class="topic-stat">${formatNumber(results.batchDecodeThroughputLowTps, 1)}–${formatNumber(results.batchDecodeThroughputHighTps, 1)} tok/s</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (sectionId === "latency") {
    return `
      <div class="visual-grid">
        <button type="button" class="visual-button half" data-action="focus-topic" data-topic="ttft">
          <div class="section-kicker">Prompt processing floor</div>
          <strong>${formatLongDuration(results.ttftFloorSec)}</strong>
          <div class="support-copy">Prompt tokens: ${formatTokens(state.workload.promptTokens)} • usable prefill compute: ${formatNumber(results.effectivePrefillComputeTFLOPS, 0)} TFLOPS</div>
        </button>
        <div class="visual-panel half">
          <div class="metric-label">Prompt work estimate</div>
          <div class="topic-stat" style="margin-top: 10px;">${formatCompact(results.totalPrefillFLOPs, 2)} FLOPs</div>
        <div class="support-copy" style="margin-top: 8px;">Includes ${formatCompact(results.attentionPrefillFLOPs, 2)} attention FLOPs. One prompt has a ${formatLongDuration(results.ttftFloorSec)} compute floor; if all ${formatNumber(state.workload.concurrentUsers, 0)} prompts arrive together, their combined prompt-work floor is about ${formatLongDuration(results.simultaneousPrefillFloorSec)}.</div>
        </div>
      </div>
    `;
  }

  return renderScenarioGrid();
}

function renderScenarioGrid() {
  return `
    <div class="scenario-grid">
      ${scenarioPresets
        .map((sequence) => {
          const scenario = calculateScenario(sequence);
          const isActive = state.workload.promptTokens + state.workload.outputTokens === sequence;
          return `
            <button type="button" class="scenario-card ${isActive ? "active" : ""}" data-action="load-sequence-preset" data-sequence="${sequence}">
              <div class="section-kicker">${formatCompact(sequence, 1)} sequence</div>
              <strong>${formatNumber(scenario.memoryBoundConcurrency, 0)} requests fit</strong>
              <div class="support-copy">${formatGB(scenario.kvPerUserGB)} KV per active user</div>
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderMetricHeader(label, topicId) {
  return `
    <div class="metric-card-header">
      <div class="metric-label">${label}</div>
      ${topicId ? `<button type="button" class="control-info-button metric-info-button" data-action="open-topic" data-topic="${topicId}" aria-controls="topic-sidebar" aria-expanded="${state.sidebarOpen}" aria-label="Open ${label} explanation">Info</button>` : ""}
    </div>
  `;
}

function renderGuideView(results) {
  return `
    <section class="guide-stack">
      ${guideSections
        .map(
          (section) => `
            <article class="guide-card" id="${section.id}">
              <div class="guide-card-header">
                <div>
                  <div class="section-kicker">${section.title}</div>
                  <h3>${section.summary}</h3>
                </div>
                <button type="button" class="action-button" data-action="open-topic" data-topic="${section.topicId}">
                  Open sidebar
                </button>
              </div>
              <div class="guide-copy">${section.bullets[0]} ${section.bullets[1]} ${section.bullets[2]}</div>
              ${renderGuideVisual(section.id, results)}
              <ul>
                ${section.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
              </ul>
            </article>
          `
        )
        .join("")}
      <div class="footer-note">
        <div class="micro-label">Why this layout exists</div>
        <p class="support-copy">
          The center canvas answers “what moves when I change assumptions?” The sidebar answers “what exactly does this component mean?”
          That split keeps the math explorable without turning the experience back into a wall of prose.
        </p>
      </div>
    </section>
  `;
}

function renderSandboxView(results) {
  return `
    <section class="results-stack" aria-label="Sizing results">
      <div class="metric-grid">
        <article class="metric-card accent">
          ${renderMetricHeader("Model weights (memory to load the model)", "weight-vram")}
          <div class="metric-value">${formatGB(results.weightMemoryGB)}</div>
          <div class="metric-subtext">${formatNumber(state.model.totalParamsB, 1)}B total parameters × ${formatNumber(state.model.weightBytes, 2)} bytes.</div>
        </article>
        <article class="metric-card cyan">
          ${renderMetricHeader("KV cache per request (conversation memory)", "kv-cache")}
          <div class="metric-value">${formatGB(results.kvPerUserGB)}</div>
          <div class="metric-subtext">${formatTokens(results.totalSequenceTokens)} live tokens at the configured ${getArchitectureLabel(state.model)} layout${results.maxContextTokens > 0 ? ` · ${formatTokens(results.maxContextTokens)} token limit` : ""}.</div>
        </article>
        <article class="metric-card ${results.fitsInMemory ? "success" : "warning"}">
          ${renderMetricHeader("Memory fit", "overhead")}
          <div class="zone-pill ${results.fitsInMemory ? "comfortable" : "overflow"}">${results.fitsInMemory ? "Fits with margin" : "Exceeds budget"}</div>
          <div class="metric-value">${formatGB(results.requiredVramGB)}</div>
          <div class="metric-subtext">Planned demand vs ${formatGB(results.totalSystemVramGB)} aggregate VRAM.</div>
        </article>
        <article class="metric-card accent">
          ${renderMetricHeader("Single-sequence decode roofline", "decode")}
          <div class="metric-value">${formatNumber(results.decodeTps, 1)} tok/s</div>
          <div class="metric-subtext">Plain language: the ideal speed ceiling for one answer stream.</div>
          <div class="metric-subtext">min(${formatNumber(results.decodeBandwidthBoundTps, 1)} HBM-bound, ${formatNumber(results.decodeComputeBoundTps, 1)} compute-bound).</div>
          <div class="metric-subtext">Ideal speed ceiling; a real server can be slower.</div>
        </article>
        <article class="metric-card cyan">
          ${renderMetricHeader("Packed-batch decode bound", "decode")}
          <div class="metric-value">${formatNumber(results.batchDecodeThroughputLowTps, 1)}–${formatNumber(results.batchDecodeThroughputHighTps, 1)} tok/s</div>
          <div class="metric-subtext">Plain language: combined speed when ${formatNumber(state.workload.concurrentUsers, 0)} answer streams run together.</div>
          <div class="metric-subtext">This ideal estimate allows requests to reuse model weight reads; real service can be slower.</div>
        </article>
        <article class="metric-card">
          ${renderMetricHeader("Prompt compute floor (prefill / prompt reading)", "ttft")}
          <div class="metric-value">${formatLongDuration(results.ttftFloorSec)}</div>
          <div class="metric-subtext">For one person, the model must read all ${formatTokens(state.workload.promptTokens)} prompt tokens before it starts writing.</div>
          <div class="metric-subtext">From ${formatCompact(results.totalPrefillFLOPs, 2)} FLOPs and ${formatNumber(results.effectivePrefillComputeTFLOPS, 0)} usable TFLOPS.</div>
          <div class="metric-subtext">If all ${formatNumber(state.workload.concurrentUsers, 0)} prompts arrive together, their combined prompt-processing floor is about ${formatLongDuration(results.simultaneousPrefillFloorSec)}.</div>
          <div class="metric-subtext">These are ideal compute floors; queueing and serving overhead can make the wait longer.</div>
          ${results.hiddenReasoningTokens > 0 ? `<div class="metric-subtext">Including the configured hidden reasoning, the synchronized first-visible-answer floor is ${formatLongDuration(results.simultaneousAnswerStartFloorSec)}.</div>` : ""}
        </article>
      </div>
      <article class="guide-card">
        <div class="guide-card-header">
          <div>
            <div class="section-kicker">Memory composition</div>
            <h3>See what occupies memory and how the selected safety factor changes the fit check.</h3>
          </div>
        </div>
        <div class="visual-grid">
          <div class="visual-panel half">
            <div class="metric-label">Requested vs aggregate accelerator memory</div>
            <div class="topic-stat" style="margin-top: 10px;">${formatGB(results.requiredVramGB)} / ${formatGB(results.totalSystemVramGB)}</div>
            <div class="support-copy" style="margin-top: 8px;">Demand is (weights + ${formatNumber(state.workload.concurrentUsers, 0)} request caches) × ${formatNumber(state.workload.overheadMultiplier, 2)} safety factor.</div>
            <div class="support-copy" style="margin-top: 8px;">Fit assumes even sharding. Per-GPU replication, workspaces, cache blocks, and runtime reservations are not calculated separately.</div>
            <div class="stack-meter" style="margin-top: 12px;">
              <div class="stack-fill" style="width: ${clamp((results.weightMemoryGB / results.totalSystemVramGB) * 100, 0, 100)}%"></div>
              <div class="stack-kv" style="left: ${clamp((results.weightMemoryGB / results.totalSystemVramGB) * 100, 0, 100)}%; width: ${clamp((results.totalKvGB / results.totalSystemVramGB) * 100, 0, Math.max(0, 100 - (results.weightMemoryGB / results.totalSystemVramGB) * 100))}%"></div>
              ${results.requiredVramGB > results.totalSystemVramGB ? `<div class="stack-over" style="left: 0; width: 100%; opacity: 0.45"></div>` : ""}
            </div>
            <div class="stack-legend" style="margin-top: 12px;">
              <span><span class="legend-dot" style="background: var(--accent);"></span>Weights ${formatGB(results.weightMemoryGB)}</span>
              <span><span class="legend-dot" style="background: var(--cyan);"></span>KV ${formatGB(results.totalKvGB)}</span>
              <span><span class="legend-dot" style="background: rgba(255,255,255,0.08);"></span>Capacity ${formatGB(results.totalSystemVramGB)}</span>
            </div>
          </div>
          <div class="visual-panel half">
            <div class="metric-label">Memory-bound concurrency ceiling</div>
            <div class="topic-stat" style="margin-top: 10px;">${formatNumber(results.memoryBoundConcurrency, 0)} requests</div>
            <div class="support-copy" style="margin-top: 12px;">Current workload selects ${formatNumber(state.workload.concurrentUsers, 0)} concurrent requests at ${formatTokens(results.totalSequenceTokens)} tokens each.</div>
            <div class="divider" style="margin-top: 14px;"></div>
            <div class="support-copy" style="margin-top: 14px;">This is a fit ceiling using aggregate VRAM and the selected safety factor. It does not estimate latency, SLO capacity, or scheduler admission.</div>
          </div>
        </div>
      </article>
    </section>
  `;
}

function renderSidebar(results) {
  const topicId = sidebarTopics[state.selectedTopicId] ? state.selectedTopicId : "mental-model";
  const topic = sidebarTopics[topicId] || sidebarTopics["mental-model"];
  const enhancement = topicEnhancements[topicId] || {};
  const liveStats =
    typeof enhancement.liveStats === "function"
      ? enhancement.liveStats(results)
      : [
          { label: "VRAM demand", value: formatGB(results.requiredVramGB) },
          { label: "Decode", value: `${formatNumber(results.decodeTps, 0)} tok/s` }
        ];
  const walkthrough = typeof enhancement.walkthrough === "function" ? enhancement.walkthrough(results) : [];
  const referenceTable = topic.referenceTable
    ? `
        <div class="sidebar-block">
          <div class="metric-label">Reference table</div>
          <div class="sidebar-table-wrap">
            <table class="sidebar-table">
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Token usage</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                ${topic.referenceTable
                  .map(
                    (row) => `
                      <tr>
                        <td>${row.component}</td>
                        <td>${row.tokenUsage}</td>
                        <td>${row.notes}</td>
                      </tr>
                    `
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        </div>
      `
    : "";
  const walkthroughSection = walkthrough.length
    ? `
        <div class="sidebar-block">
          <div class="metric-label">How we got this number</div>
          <div class="sidebar-step-list">
            ${walkthrough
              .map(
                (step, index) => `
                  <div class="sidebar-step">
                    <div class="sidebar-step-index">${String(index + 1).padStart(2, "0")}</div>
                    <div class="sidebar-step-copy">
                      <strong>${step.label}</strong>
                      <div class="topic-copy">${step.value}</div>
                      ${step.note ? `<div class="support-copy">${step.note}</div>` : ""}
                    </div>
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
      `
    : "";
  return `
    <aside class="sidebar" id="topic-sidebar" aria-label="${topic.eyebrow}: ${topic.title}">
      <button
        type="button"
        class="sidebar-resize-handle"
        data-action="start-sidebar-resize"
        aria-label="Resize sidebar"
        title="Drag to resize"
      ></button>
      <div class="sidebar-header">
        <div>
          <div class="micro-label">${topic.eyebrow}</div>
          <h2 class="topic-title">${topic.title}</h2>
        </div>
        <button type="button" class="sidebar-close" data-action="close-sidebar" aria-label="Close sidebar">×</button>
      </div>
      <div class="sidebar-summary">
        <div class="support-copy">${topic.summary}</div>
        <div class="info-glossary-hint" role="note">Dotted terms in this Info panel open a plain-language explanation and example.</div>
      </div>
      <div class="topic-stat-row">
        <div class="topic-stat-card">
          <div class="metric-label">${topic.statALabel}</div>
          <div class="topic-stat">${topic.statA}</div>
        </div>
        <div class="topic-stat-card">
          <div class="metric-label">${topic.statBLabel}</div>
          <div class="topic-stat">${topic.statB}</div>
        </div>
      </div>
      <div class="sidebar-body">
        <div class="sidebar-block">
          <div class="metric-label">Deep explanation</div>
          <div class="topic-copy">${topic.detail}</div>
        </div>
        <div class="sidebar-block">
          <div class="metric-label">Formula or rule</div>
          <code>${topic.formula}</code>
        </div>
        ${walkthroughSection}
        ${referenceTable}
        <div class="sidebar-block">
          <div class="metric-label">Current live values</div>
          <div class="topic-stat-row">
            ${liveStats
              .map(
                (item) => `
                  <div class="topic-stat-card">
                    <div class="metric-label">${item.label}</div>
                    <div class="topic-stat">${item.value}</div>
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
        <div class="sidebar-block">
          <div class="metric-label">Assumptions</div>
          <ul>
            ${topic.assumptions.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
        <div class="sidebar-block">
          <div class="metric-label">Common mistakes</div>
          <ul>
            ${topic.pitfalls.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>
    </aside>
  `;
}

function renderAttentionNote() {
  return `
    <div class="attention-note" role="note" aria-label="Sizing assumptions">
      <div class="attention-label">Planning limits</div>
      <div class="attention-copy">
        These are planning estimates, not promises about live performance. A memory fit is only a first check; serving software, waiting requests, shared prompts, and model-specific costs can change the result. For deployment sizing, use the exact model setup and a benchmark with the traffic you expect.
      </div>
      <details class="source-details">
        <summary>Model, runtime, and hardware sources</summary>
        <div class="source-links">
          <a href="https://huggingface.co/deepseek-ai/DeepSeek-V3.2" target="_blank" rel="noreferrer">DeepSeek V3.2 model card</a>
          <a href="https://huggingface.co/deepseek-ai/DeepSeek-V3.2/blob/main/inference/config_671B_v3.2.json" target="_blank" rel="noreferrer">V3.2 inference config</a>
          <a href="https://arxiv.org/abs/2512.02556" target="_blank" rel="noreferrer">V3.2 DSA report</a>
          <a href="https://docs.vllm.ai/en/stable/design/hybrid_kv_cache_manager/" target="_blank" rel="noreferrer">vLLM hybrid KV cache</a>
          <a href="https://github.com/vllm-project/vllm/blob/main/docs/features/index_cache.md" target="_blank" rel="noreferrer">vLLM IndexCache</a>
          <a href="https://docs.vllm.ai/en/stable/design/prefix_caching/" target="_blank" rel="noreferrer">Prefix caching</a>
          <a href="https://www.nvidia.com/en-eu/data-center/hgx/" target="_blank" rel="noreferrer">NVIDIA accelerator specs</a>
          <a href="https://www.amd.com/en/products/accelerators/instinct/mi350/mi355x.html" target="_blank" rel="noreferrer">AMD MI355X specs</a>
        </div>
      </details>
    </div>
  `;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function decorateGlossaryTerms() {
  const infoPanel = app.querySelector(".sidebar");
  if (!infoPanel) return;

  const walker = document.createTreeWalker(infoPanel, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (
        !parent ||
        parent.closest("button, a, option, select, input, textarea, script, style, .glossary-dialog, [data-no-glossary]")
      ) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  const indexByTerm = new Map();
  textNodes.forEach((node) => {
    const text = node.nodeValue;
    const matches = [];
    glossaryAliases.forEach(({ term, id }) => {
      const pattern = new RegExp(`(^|[^a-z0-9])(${escapeRegExp(term).replace(/\s+/g, "\\s+")})(?=$|[^a-z0-9])`, "gi");
      let match;
      while ((match = pattern.exec(text))) {
        const start = match.index + match[1].length;
        matches.push({ start, end: start + match[2].length, id, text: match[2] });
      }
    });
    if (!matches.length) return;

    matches.sort((left, right) => left.start - right.start || right.end - left.end);
    const selected = [];
    let cursor = 0;
    matches.forEach((match) => {
      if (match.start < cursor) return;
      selected.push(match);
      cursor = match.end;
    });
    if (!selected.length) return;

    const fragment = document.createDocumentFragment();
    cursor = 0;
    selected.forEach((match) => {
      fragment.append(document.createTextNode(text.slice(cursor, match.start)));
      const index = indexByTerm.get(match.id) || 0;
      indexByTerm.set(match.id, index + 1);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "glossary-link";
      button.dataset.action = "open-glossary-term";
      button.dataset.term = match.id;
      button.dataset.glossaryTerm = match.id;
      button.dataset.glossaryIndex = String(index);
      button.setAttribute("aria-haspopup", "dialog");
      button.setAttribute("aria-label", `${match.text}: open plain-language explanation`);
      button.textContent = match.text;
      fragment.append(button);
      cursor = match.end;
    });
    fragment.append(document.createTextNode(text.slice(cursor)));
    node.parentNode.replaceChild(fragment, node);
  });
}

function renderGlossaryModal() {
  const entry = glossaryTerms.find((term) => term.id === state.glossaryOpenTerm);
  if (!entry) return "";
  return `
    <dialog class="glossary-dialog" aria-modal="true" aria-labelledby="glossary-title">
      <div class="glossary-dialog-inner">
        <div class="glossary-dialog-header">
          <div class="section-kicker">Plain-language sizing guide</div>
          <button type="button" class="sidebar-close glossary-close" data-action="close-glossary" aria-label="Close explanation">×</button>
        </div>
        <h2 id="glossary-title">${entry.title}</h2>
        <section class="glossary-explanation">
          <h3>In simple terms</h3>
          <p>${entry.meaning}</p>
        </section>
        <section class="glossary-explanation">
          <h3>Why it matters here</h3>
          <p>${entry.why}</p>
        </section>
        <section class="glossary-explanation glossary-example">
          <h3>Example</h3>
          <p>${entry.example}</p>
        </section>
        <p class="glossary-hint">Select any dotted term in this Info panel to learn about it.</p>
      </div>
    </dialog>
  `;
}

function closeGlossaryDialog() {
  const termId = state.glossaryTriggerTerm;
  const termIndex = state.glossaryTriggerIndex;
  state.glossaryOpenTerm = null;
  state.glossaryTriggerTerm = null;
  state.glossaryTriggerIndex = null;
  renderApp();
  const trigger = Array.from(app.querySelectorAll(".glossary-link")).find(
    (button) => button.dataset.glossaryTerm === termId && button.dataset.glossaryIndex === String(termIndex)
  );
  trigger?.focus();
}

function renderMain(results) {
  return state.mode === "guide" ? renderGuideView(results) : renderSandboxView(results);
}

function renderApp() {
  const results = calculateSizing(state.model, state.hardware, state.workload);
  const workspaceClass = `${state.mode === "guide" ? "has-rail" : "no-rail"} ${state.sidebarOpen ? "sidebar-open" : "sidebar-closed"}`;

  app.innerHTML = `
    <div class="app-shell" style="--sidebar-width: ${state.sidebarWidth}px;">
      <div class="workspace ${workspaceClass}">
        ${state.mode === "guide" ? renderSectionRail() : ""}
        <main class="main-column">
          ${renderHeroStrip(results)}
          ${renderAttentionNote()}
          ${renderContextLimitNote(results)}
          ${renderControlDeck(results)}
          ${renderFullConcurrencyEstimate(results)}
          ${renderMain(results)}
        </main>
        ${state.sidebarOpen ? renderSidebar(results) : ""}
      </div>
      <div class="developed-by">Developed by Matteo Paliani</div>
    </div>
    ${renderGlossaryModal()}
  `;

  decorateGlossaryTerms();
  const glossaryDialog = app.querySelector(".glossary-dialog");
  if (glossaryDialog) {
    glossaryDialog.addEventListener("cancel", (event) => {
      event.preventDefault();
      closeGlossaryDialog();
    }, { once: true });
    glossaryDialog.showModal();
    glossaryDialog.querySelector(".glossary-close")?.focus();
  }
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) {
    if (event.target.matches(".glossary-dialog")) closeGlossaryDialog();
    return;
  }

  const action = target.dataset.action;

  if (action === "open-glossary-term") {
    state.glossaryOpenTerm = target.dataset.term;
    state.glossaryTriggerTerm = target.dataset.glossaryTerm;
    state.glossaryTriggerIndex = target.dataset.glossaryIndex;
    renderApp();
    return;
  }

  if (action === "close-glossary") {
    closeGlossaryDialog();
    return;
  }

  if (action === "set-mode") {
    state.mode = target.dataset.mode;
  }

  if (action === "select-section") {
    state.selectedSectionId = target.dataset.section;
    state.selectedTopicId = target.dataset.topic;
    scrollToSection(target.dataset.section);
  }

  if (action === "focus-topic") {
    state.selectedTopicId = target.dataset.topic;
  }

  if (action === "open-topic") {
    state.selectedTopicId = target.dataset.topic;
    state.lastSidebarTriggerTopicId = target.dataset.topic;
    state.sidebarOpen = true;
  }

  if (action === "open-sidebar") {
    state.sidebarOpen = true;
  }

  if (action === "close-sidebar") {
    state.sidebarOpen = false;
  }

  if (action === "load-worked-example") {
    loadWorkedExample();
  }

  if (action === "load-sequence-preset") {
    const totalSequence = Number(target.dataset.sequence);
    Object.assign(state.workload, getSequenceMix(totalSequence));
    state.selectedTopicId = "concurrency";
  }

  renderApp();
  if (state.sidebarOpen && ["open-topic", "open-sidebar"].includes(action)) {
    document.querySelector(".sidebar-close")?.focus();
  } else if (action === "close-sidebar") {
    const trigger = Array.from(document.querySelectorAll('[data-action="open-topic"]'))
      .find((button) => button.dataset.topic === state.lastSidebarTriggerTopicId);
    trigger?.focus();
  }
});

document.addEventListener("change", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement)) {
    return;
  }

  const group = target.dataset.group;
  const field = target.dataset.field;

  if (!group || !field) {
    return;
  }

  if (group === "preset" && field === "model") {
    loadModelPreset(target.value);
  }

  if (group === "preset" && field === "hardware") {
    loadHardwarePreset(target.value);
  }

  if (group === "model") {
    state.modelPresetId = "custom";
    updateModelField(field, target.value);
  }

  if (group === "hardware") {
    state.hardwarePresetId = "custom";
    updateHardwareField(field, target.value);
  }

  if (group === "workload") {
    updateWorkloadField(field, target.value);
  }

  state.selectedTopicId =
    group === "preset" && field === "model"
      ? "weight-vram"
      : group === "preset" && field === "hardware"
        ? "hardware-envelope"
        :
    group === "model"
      ? field === "parameterization" || field === "attentionType"
        ? "architecture"
        : "weight-vram"
      : group === "hardware"
        ? "hardware-envelope"
        : field === "overheadMultiplier"
          ? "overhead"
          : "concurrency";

  renderApp();
  document.querySelector(`[data-group="${group}"][data-field="${field}"]`)?.focus({ preventScroll: true });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.glossaryOpenTerm) {
    return;
  }
  if (event.key === "Escape" && state.sidebarOpen) {
    state.sidebarOpen = false;
    renderApp();
    const trigger = Array.from(document.querySelectorAll('[data-action="open-topic"]'))
      .find((button) => button.dataset.topic === state.lastSidebarTriggerTopicId);
    trigger?.focus();
  }
});

const SIDEBAR_MIN_WIDTH = 320;
const SIDEBAR_MAX_WIDTH = 720;

function clampSidebarWidth(value) {
  return clamp(value, SIDEBAR_MIN_WIDTH, SIDEBAR_MAX_WIDTH);
}

document.addEventListener("pointerdown", (event) => {
  const target = event.target.closest('[data-action="start-sidebar-resize"]');
  if (!target || window.innerWidth <= 1260) {
    return;
  }

  const startX = event.clientX;
  const startWidth = state.sidebarWidth;

  const handlePointerMove = (moveEvent) => {
    state.sidebarWidth = clampSidebarWidth(startWidth - (moveEvent.clientX - startX));
    renderApp();
  };

  const handlePointerUp = () => {
    document.removeEventListener("pointermove", handlePointerMove);
    document.removeEventListener("pointerup", handlePointerUp);
  };

  document.addEventListener("pointermove", handlePointerMove);
  document.addEventListener("pointerup", handlePointerUp);
});

renderApp();

document.addEventListener("toggle", (event) => {
  if (event.target.matches("details[data-advanced-controls]")) {
    state.advancedControlsOpen = event.target.open;
  }
});
