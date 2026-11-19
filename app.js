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

const state = {
  mode: "sandbox",
  selectedSectionId: "constraints",
  selectedTopicId: "mental-model",
  lastSidebarTriggerTopicId: "mental-model",
  advancedControlsOpen: false,
  sidebarOpen: false,
  sidebarWidth: 360,
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
        { label: "Prefill compute floor", value: formatDuration(results.ttftFloorSec) },
        { label: "With hidden-token floor", value: formatDuration(results.answerStartFloorSec) }
      ];
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
          label: "Divide by usable compute and optionally add hidden tokens",
          value: `${formatDuration(results.ttftFloorSec)} prompt floor; ${formatTokens(state.workload.hiddenReasoningTokens)} hidden tokens give ${formatDuration(results.answerStartFloorSec)} lower bound`,
          note: "The hidden-token delay assumes single-stream decoding. Neither value estimates queueing or actual user-visible TTFT."
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
  const answerStartFloorSec = ttftFloorSec + (decodeTps > 0 ? hiddenReasoningTokens / decodeTps : 0);
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
    linearPrefillFLOPs,
    indexerPrefillFLOPs,
    attentionPrefillFLOPs,
    totalPrefillFLOPs,
    ttftFloorSec,
    answerStartFloorSec,
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

function formatPercent(value) {
  return `${formatNumber(value * 100, 0)}%`;
}

function formatGB(value) {
  return `${formatNumber(value, value < 10 ? 2 : 1)} GB`;
}

function formatTokens(value) {
  return new Intl.NumberFormat("en-US").format(Math.round(value));
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
    "Estimate memory fit, decode rooflines, and a prompt-processing floor. Use your model config and serving benchmarks to replace the planning assumptions.";

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
          <strong>${formatDuration(results.ttftFloorSec)}</strong>
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
          <strong>${formatDuration(results.ttftFloorSec)}</strong>
          <div class="support-copy">Prompt tokens: ${formatTokens(state.workload.promptTokens)} • usable prefill compute: ${formatNumber(results.effectivePrefillComputeTFLOPS, 0)} TFLOPS</div>
        </button>
        <div class="visual-panel half">
          <div class="metric-label">Prompt work estimate</div>
          <div class="topic-stat" style="margin-top: 10px;">${formatCompact(results.totalPrefillFLOPs, 2)} FLOPs</div>
          <div class="support-copy" style="margin-top: 8px;">Includes ${formatCompact(results.attentionPrefillFLOPs, 2)} attention FLOPs. Compute floor: ${formatDuration(results.ttftFloorSec)}; hidden-token floor: ${formatDuration(results.answerStartFloorSec)}.</div>
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
          ${renderMetricHeader("Model weights", "weight-vram")}
          <div class="metric-value">${formatGB(results.weightMemoryGB)}</div>
          <div class="metric-subtext">${formatNumber(state.model.totalParamsB, 1)}B total parameters × ${formatNumber(state.model.weightBytes, 2)} bytes.</div>
        </article>
        <article class="metric-card cyan">
          ${renderMetricHeader("KV per request", "kv-cache")}
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
          <div class="metric-subtext">min(${formatNumber(results.decodeBandwidthBoundTps, 1)} HBM-bound, ${formatNumber(results.decodeComputeBoundTps, 1)} compute-bound).</div>
          <div class="metric-subtext">Theoretical ceiling before attention, queueing, and runtime overhead.</div>
        </article>
        <article class="metric-card cyan">
          ${renderMetricHeader("Packed-batch decode bound", "decode")}
          <div class="metric-value">${formatNumber(results.batchDecodeThroughputLowTps, 1)}–${formatNumber(results.batchDecodeThroughputHighTps, 1)} tok/s</div>
          <div class="metric-subtext">Aggregate ceiling for ${formatNumber(state.workload.concurrentUsers, 0)} simultaneous decode sequences.</div>
          <div class="metric-subtext">MoE range reflects unknown expert reuse; actual scheduling can lower throughput.</div>
        </article>
        <article class="metric-card">
          ${renderMetricHeader("Prompt compute floor", "ttft")}
          <div class="metric-value">${formatDuration(results.ttftFloorSec)}</div>
          <div class="metric-subtext">From ${formatCompact(results.totalPrefillFLOPs, 2)} FLOPs and ${formatNumber(results.effectivePrefillComputeTFLOPS, 0)} usable TFLOPS.</div>
          <div class="metric-subtext">Lower bound; not predicted TTFT.</div>
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
      <div class="support-copy">${topic.summary}</div>
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
        Use output rates as planning ceilings and memory fit as a first-order check. Fit assumes even sharding. Runtime reservations, cache-page rounding, shared prefixes, MoE interconnect, scheduler effects, and optional MTP compute are omitted; DSA indexer FLOPs are approximate and runtime-specific index-cache sharing is not modeled. Replace editable values with exact checkpoint and runtime measurements before deployment sizing.
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
          ${renderMain(results)}
        </main>
        ${state.sidebarOpen ? renderSidebar(results) : ""}
      </div>
      <div class="developed-by">Developed by Matteo Paliani</div>
    </div>
  `;
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) {
    return;
  }

  const action = target.dataset.action;

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
