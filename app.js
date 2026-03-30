const modelPresets = [
  {
    id: "velvet-14b",
    name: "Velvet 14B",
    architecture: "dense",
    totalParamsB: 14,
    activeParamsB: 14,
    layers: 50,
    attentionHeads: 40,
    kvHeads: 8,
    headDim: 128,
    weightBytes: 2,
    kvBytes: 2,
    mlaReduction: 0.08
  },
  {
    id: "dense-70b",
    name: "Dense 70B",
    architecture: "dense",
    totalParamsB: 70,
    activeParamsB: 70,
    layers: 80,
    attentionHeads: 64,
    kvHeads: 8,
    headDim: 128,
    weightBytes: 2,
    kvBytes: 2,
    mlaReduction: 0.08
  },
  {
    id: "moe-47b",
    name: "MoE 47B / 13B active",
    architecture: "moe",
    totalParamsB: 47,
    activeParamsB: 13,
    layers: 32,
    attentionHeads: 32,
    kvHeads: 8,
    headDim: 128,
    weightBytes: 2,
    kvBytes: 2,
    mlaReduction: 0.08
  },
  {
    id: "mla-671b",
    name: "MLA 671B / 37B active",
    architecture: "mla",
    totalParamsB: 671,
    activeParamsB: 37,
    layers: 61,
    attentionHeads: 128,
    kvHeads: 8,
    headDim: 128,
    weightBytes: 2,
    kvBytes: 2,
    mlaReduction: 0.08
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
    prefillEfficiencyPct: 55,
    multiGpuEfficiencyPct: 90
  },
  {
    id: "rtx-4090",
    name: "RTX 4090 24GB",
    gpuCount: 1,
    vramGB: 24,
    bandwidthTBps: 1.008,
    computeTFLOPS: 330,
    decodeEfficiencyPct: 60,
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
    summary: "Dense, MoE, and MLA look similar on paper but expose very different serving behavior once you map active parameters and KV shape.",
    bullets: [
      "Dense uses every parameter every token.",
      "MoE stores the full model but activates only a subset per token.",
      "MLA keeps the same sparse intuition while shrinking KV pressure."
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
    title: "Reality tax",
    summary: "A deployment that mathematically fits can still be unstable once allocator behavior and runtime workspace enter the picture.",
    bullets: [
      "Use a planning buffer instead of aiming for 99% utilization.",
      "Treat 1.25× as a conservative planning heuristic, not a law.",
      "Adjust once you measure the real stack."
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
    summary: "Prompt processing behaves differently from decode. It leans harder on usable compute, prompt length, and scheduler behavior.",
    bullets: [
      "Use total parameters for dense prefill.",
      "Use active parameters for MoE and MLA lower-bound intuition.",
      "Peak compute is discounted by a prefill-efficiency assumption before the floor is estimated."
    ],
    topicId: "ttft"
  },
  {
    id: "concurrency",
    title: "Concurrency and feel",
    summary: "Memory capacity tells you how many requests can fit. User experience depends on how that capacity collides with decode share and scheduling.",
    bullets: [
      "Fit is necessary but not sufficient.",
      "Context size is the fastest way to collapse density.",
      "A rough operating zone is often more useful than a single magic number."
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
    title: "Architecture branching",
    eyebrow: "Decision point",
    summary: "Pick the class first. The same arithmetic means different things depending on what is stored, what is active, and what is compressed.",
    detail:
      "Dense models couple storage and speed because every parameter is read for every token. MoE splits those concerns: total parameters set the storage bill, active parameters set most of the speed bill. MLA preserves the sparse intuition while compressing the KV representation, which changes the capacity curve again.",
    formula: "Dense: storage = speed. MoE: storage ≠ speed. MLA: storage ≠ speed and KV shrinks.",
    assumptions: [
      "Preset labels are editable and intended as planning seeds.",
      "Use exact config values when finalizing a deployment."
    ],
    pitfalls: [
      "Using total parameters everywhere for MoE.",
      "Ignoring MLA-specific KV compression."
    ],
    statA: "Dense / MoE / MLA",
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
      "Displayed values use decimal GB for consistency with the guide."
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
    summary: "This is the cost of remembering the sequence, and it is the main reason long context crushes concurrency.",
    detail:
      "KV cache scales with layers, sequence length, KV heads, head dimension, and cache precision. Multiply it by the number of active requests and the dynamic memory bill grows fast. GQA lowers the multiplier by reducing KV heads. MLA lowers it again through compression, which is why the same headline context window can behave very differently across architectures.",
    formula: "KV = 2 × layers × seq × kv_heads × head_dim × bytes_per_kv × MLA_factor",
    assumptions: [
      "MLA is modeled with an editable reduction factor.",
      "Numbers remain first-order estimates and not runtime telemetry."
    ],
    pitfalls: [
      "Using attention heads instead of KV heads.",
      "Forgetting that output tokens also extend the sequence."
    ],
    statA: "Linear",
    statALabel: "Growth with sequence",
    statB: "Linear",
    statBLabel: "Growth with users"
  },
  overhead: {
    title: "Reality tax",
    eyebrow: "Stability margin",
    summary: "The planning multiplier exists because exact fits are fragile in real inference runtimes.",
    detail:
      "A system that appears to fit at near-total utilization often becomes unstable once allocator behavior, transient kernel workspace, and runtime-reserved memory enter the picture. The app exposes the overhead multiplier directly so you can feel how aggressively density drops as your confidence margin increases.",
    formula: "Total_VRAM ≈ (weights + total_KV) × overhead",
    assumptions: [
      "1.25× is the conservative default from the guide.",
      "Tuned stacks may run closer to 1.10×."
    ],
    pitfalls: [
      "Treating 1.25× as a physical constant.",
      "Planning around 98–99% VRAM utilization."
    ],
    statA: "1.10×–1.25×",
    statALabel: "Typical planning band",
    statB: "Headroom",
    statBLabel: "Buys stability"
  },
  decode: {
    title: "Bandwidth-driven decode",
    eyebrow: "Tokens per second",
    summary: "During decode, the system often behaves like a weight-streaming machine, so usable bandwidth is the cleanest first-order predictor.",
    detail:
      "The simplified estimate starts by asking how many model-weight bytes must be touched for one generated token. Dense models pay with total parameters. MoE and MLA pay with active parameters, which is why sparse models can decode far faster than their storage footprint suggests. The app then divides that byte cost by usable bandwidth, not raw peak bandwidth. Usable bandwidth is peak bandwidth after a decode-efficiency discount and, when relevant, a multi-GPU scaling discount.",
    formula: "time_per_token ≈ (P_active × bytes_per_weight) / usable_bandwidth",
    assumptions: [
      "Decode is assumed to be bandwidth-dominant.",
      "Attention, batching, and kernel efficiency are still simplified."
    ],
    pitfalls: [
      "Treating the estimate as measured production TPS.",
      "Forgetting to discount peak bandwidth before using it."
    ],
    statA: "Usable bandwidth",
    statALabel: "Primary decode driver",
    statB: "P_active",
    statBLabel: "Sparse speed variable"
  },
  ttft: {
    title: "Prefill and TTFT",
    eyebrow: "First visible token",
    summary: "Prompt processing is more compute-shaped than decode and scales directly with prompt length.",
    detail:
      "The simplified TTFT estimate treats prompt processing as a lower-bound compute floor. It is useful for understanding why bigger prompts and bigger models cost more, but it deliberately ignores attention cost, scheduler delay, batching interference, and software overhead. The important change is that the floor is now computed with usable prefill compute rather than raw peak compute. For reasoning-heavy models, hidden internal generation can dominate the perceived wait.",
    formula: "TTFT_floor ≈ (params × prompt_tokens × 2) / usable_prefill_FLOPS",
    assumptions: [
      "Dense uses total parameters. MoE and MLA use active parameters for lower-bound intuition.",
      "Hidden reasoning tokens can be added separately as an interpretive delay."
    ],
    pitfalls: [
      "Reading the number as user-facing latency.",
      "Ignoring the gap between peak compute and usable compute."
    ],
    statA: "Usable compute",
    statALabel: "Primary prefill driver",
    statB: "Prompt length",
    statBLabel: "Direct multiplier"
  },
  concurrency: {
    title: "Concurrency envelope",
    eyebrow: "Capacity vs feel",
    summary: "Memory-bound concurrency is a fit number. Experience quality depends on how many users are competing for the same decode budget.",
    detail:
      "The app computes the maximum number of requests that can fit in VRAM for a given total sequence length and overhead assumption. It then combines memory pressure and tokens/sec per active user into a simple operating-zone badge. That badge is intentionally interpretive: it exists to guide planning conversations, not replace production measurements.",
    formula: "max_users ≈ (usable_VRAM - weights) / KV_per_user",
    assumptions: [
      "Usable VRAM is total VRAM divided by the selected overhead multiplier.",
      "Typical-experience rating uses guide-aligned heuristic thresholds."
    ],
    pitfalls: [
      "Treating fit as a guarantee of smooth latency.",
      "Ignoring prompt/output mix and scheduler policy."
    ],
    statA: "Memory-bound",
    statALabel: "Capacity estimate",
    statB: "Heuristic",
    statBLabel: "Experience badge"
  },
  "worked-example": {
    title: "Velvet 14B example",
    eyebrow: "Guide scenario",
    summary: "This panel turns the guide’s worked example into something you can manipulate without losing the original arithmetic.",
    detail:
      "The default worked example is Velvet 14B on an A100 80GB with an 8k total sequence and a conservative 1.25× overhead. The live controls let you keep the narrative but change the hardware, context, concurrency, and usable-throughput assumptions and watch the supporting numbers respond together.",
    formula: "Defaults match the guide’s example and remain fully editable.",
    assumptions: [
      "The example starts from a dense 14B model at BF16.",
      "Peak hardware fields and efficiency fields can both be edited."
    ],
    pitfalls: [
      "Forgetting that the guide example is memory-first before it is experience-first.",
      "Comparing scenarios without holding the hardware-efficiency assumptions constant."
    ],
    statA: "8k",
    statALabel: "Default total sequence",
    statB: "A100 80GB",
    statBLabel: "Default hardware"
  },
  "operating-zone": {
    title: "Typical experience",
    eyebrow: "Guide heuristic",
    summary: "This badge uses per-user tokens/sec bands for normal QA / RAG workloads, then applies them to the selected concurrency.",
    detail:
      "For normal QA / RAG applications, the app classifies the experience from the per-user generation speed after sharing total service throughput across the selected concurrency. The practical bands are: smooth at 20+ tok/s per user, acceptable at 10–20 tok/s per user, poor at 5–10 tok/s per user, and unusable below 5 tok/s per user. The calculation still shows TTFT under load separately, but the experience badge itself is driven by the per-user speed band because that is the clearest interaction signal once concurrency is applied. Because throughput now uses usable bandwidth rather than raw peak bandwidth, the badge is less likely to overstate real serving feel.",
    formula: "per_user_tps = service_throughput / concurrent_users",
    assumptions: [
      "Assumes a reasonably efficient continuous-batching stack for QA / RAG patterns.",
      "Uses per-user tok/s bands as a broad heuristic, not a benchmark."
    ],
    pitfalls: [
      "Treating the label as a production benchmark.",
      "Ignoring interconnect, runtime, and tail-latency effects at higher concurrency."
    ],
    statA: "20+ / 10–20 / 5–10 / <5",
    statALabel: "Tok/s per user bands",
    statB: "Smooth / Acceptable / Poor / Unusable",
    statBLabel: "QA / RAG feel"
  },
  "workload-reference": {
    title: "Workload reference",
    eyebrow: "QA / RAG context",
    summary: "This table is a reference for context in a QA / RAG application when sizing the workload inputs.",
    detail:
      "Use the table as a planning reference for what usually makes up the prompt-side context in a retrieval-backed Q&A flow. It is meant to help interpret the workload calculator, not prescribe an exact prompt template.",
    formula: "Prompt context ~= system prompt + retrieved context + retained user history + current turn",
    assumptions: [
      "The split is a realistic planning range for many QA / RAG workloads.",
      "Retrieved chunk count, chunk size, and memory policy can move the total quickly."
    ],
    pitfalls: [
      "Treating the table as a fixed recipe for every application.",
      "Forgetting that chat history counts only if it is still retained in the active prompt."
    ],
    statA: "4k-8k",
    statALabel: "Typical total context",
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
        component: "Total Average",
        tokenUsage: "~4,000 - 8,000",
        notes: "A realistic planning range for many QA / RAG workloads."
      }
    ]
  }
};

const scenarioPresets = [4096, 8192, 32768, 128000];

const state = {
  mode: "sandbox",
  selectedSectionId: "constraints",
  selectedTopicId: "mental-model",
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
    guideReferences: [
      "Inference guide Step 2: Sizing static VRAM",
      "Inference guide Worked example: Velvet 14B on A100 80GB"
    ],
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
          note: `${getArchitectureLabel(state.model.architecture)} storage still uses the full model, so this step follows total parameters rather than active parameters.`
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
    guideReferences: [
      "Inference guide Step 3: Sizing dynamic VRAM (KV cache)",
      "Inference guide Workload reference: typical QA / RAG context",
      "Inference guide Estimating concurrent users"
    ],
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
          value: `${formatTokens(state.workload.promptTokens)} prompt + ${formatTokens(state.workload.outputTokens)} output = ${formatTokens(results.totalSequenceTokens)} total tokens`,
          note: "The guide treats both prompt and generated output as part of the active sequence, so both contribute to KV growth."
        },
        {
          label: "Compute KV bytes per token",
          value: `${formatCompact(results.kvPerTokenBytes, 1)} bytes/token`,
          note: `The app uses 2 × layers × KV heads × head dim × KV bytes × MLA factor. It deliberately uses ${formatNumber(state.model.kvHeads, 0)} KV heads, not ${formatNumber(state.model.attentionHeads, 0)} attention heads, following the guide's GQA warning.`
        },
        {
          label: "Scale by sequence length",
          value: `${formatCompact(results.kvPerTokenBytes, 1)} × ${formatTokens(results.totalSequenceTokens)} = ${formatGB(results.kvPerUserGB)}`,
          note: "That gives the KV cache footprint for one active user at the current sequence length."
        }
      ];
    }
  },
  overhead: {
    guideReferences: [
      "Inference guide Step 2: Sizing static VRAM",
      "Inference guide Step 3: Sizing dynamic VRAM (KV cache)",
      "Inference guide Step 4: Adding a planning buffer",
      "Inference guide Worked example: Velvet 14B on A100 80GB"
    ],
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
          note: `The guide's reality-tax step is why the app compares ${formatGB(results.requiredVramGB)} against ${formatGB(results.totalSystemVramGB)} total system VRAM instead of using the raw working set alone.`
        }
      ];
    }
  },
  decode: {
    guideReferences: [
      "Inference guide Step 1: Defining the hardware envelope",
      "Inference guide Step 5: Estimating decode throughput",
      "Inference guide Interpreting throughput for concurrent users"
    ],
    liveStats(results) {
      return [
        { label: "Active params", value: `${formatNumber(results.activeParamsB, 1)}B` },
        { label: "Peak bandwidth", value: `${formatNumber(results.aggregatePeakBandwidthTBps, 2)} TB/s` },
        { label: "Usable bandwidth", value: `${formatNumber(results.effectiveDecodeBandwidthTBps, 2)} TB/s` },
        { label: "Service TPS", value: `${formatNumber(results.serviceThroughputTps, 0)} tok/s` },
        { label: "Per user", value: `${formatNumber(results.tpsPerUser, 1)} tok/s` }
      ];
    },
    walkthrough(results) {
      const batchingGain = results.decodeTps > 0 ? results.serviceThroughputTps / results.decodeTps : 0;
      return [
        {
          label: "Estimate the weight bytes touched for one generated token",
          value: `${formatNumber(results.activeParamsB, 1)}B active params × ${formatNumber(state.model.weightBytes, 1)} bytes = ${formatGB(results.activeWeightReadGBPerToken)}`,
          note: "Dense models use total parameters here. MoE and MLA use active parameters, which is why sparse models can store large weights but decode faster."
        },
        {
          label: "Convert peak bandwidth into usable bandwidth",
          value:
            results.gpuCount > 1
              ? `${formatNumber(results.aggregatePeakBandwidthTBps, 2)} TB/s × ${formatPercent(results.decodeEfficiency)} decode efficiency × ${formatPercent(results.multiGpuEfficiency)} scaling = ${formatNumber(results.effectiveDecodeBandwidthTBps, 2)} TB/s`
              : `${formatNumber(results.aggregatePeakBandwidthTBps, 2)} TB/s × ${formatPercent(results.decodeEfficiency)} decode efficiency = ${formatNumber(results.effectiveDecodeBandwidthTBps, 2)} TB/s`,
          note: "This is the key correction for real serving. The app no longer treats peak bandwidth as the same thing as usable throughput."
        },
        {
          label: "Convert usable bandwidth into single-stream decode speed",
          value: `${formatDuration(results.decodeTimePerTokenSec)} per token = ${formatNumber(results.decodeTps, 0)} tok/s`,
          note: "This remains a bandwidth-dominant first-order estimate rather than a production benchmark."
        },
        {
          label: "Apply the app's concurrency batching heuristic",
          value: `${formatNumber(results.decodeTps, 0)} × ${formatNumber(batchingGain, 2)} = ${formatNumber(results.serviceThroughputTps, 0)} tok/s`,
          note: "The guide gives the baseline decode math. The app then adds a batching-gain heuristic so the service-throughput card reflects shared decode under active concurrency."
        },
        {
          label: "Split the total service rate across users",
          value: `${formatNumber(results.serviceThroughputTps, 0)} ÷ ${formatNumber(state.workload.concurrentUsers, 0)} = ${formatNumber(results.tpsPerUser, 1)} tok/s per user`,
          note: "That per-user number is what the app later uses for the typical-experience heuristic."
        }
      ];
    }
  },
  ttft: {
    guideReferences: [
      "Inference guide Step 1: Defining the hardware envelope",
      "Inference guide Step 6: Estimating TTFT",
      "Inference guide Hidden reasoning delay"
    ],
    liveStats(results) {
      const stats = [
        { label: "Prompt", value: formatTokens(state.workload.promptTokens) },
        { label: "Peak compute", value: `${formatNumber(results.aggregatePeakComputeTFLOPS, 0)} TFLOPS` },
        { label: "Usable compute", value: `${formatNumber(results.effectivePrefillComputeTFLOPS, 0)} TFLOPS` },
        { label: "TTFT floor", value: formatDuration(results.ttftFloorSec) },
        { label: "TTFT under load", value: formatDuration(results.ttftUnderLoadSec) }
      ];

      if (state.workload.hiddenReasoningTokens > 0) {
        stats.push({ label: "Answer start", value: formatDuration(results.answerStartSec) });
      }

      return stats;
    },
    walkthrough(results) {
      const loadPenalty = results.ttftFloorSec > 0 ? results.ttftUnderLoadSec / results.ttftFloorSec : 0;
      return [
        {
          label: "Choose the prefill-sized model footprint",
          value: `${formatNumber(results.prefillParamsB, 1)}B effective prefill params`,
          note: "Dense models use total parameters for prefill. MoE and MLA use active parameters for the lower-bound intuition described in the guide."
        },
        {
          label: "Convert peak compute into usable prefill compute",
          value:
            results.gpuCount > 1
              ? `${formatNumber(results.aggregatePeakComputeTFLOPS, 0)} TFLOPS × ${formatPercent(results.prefillEfficiency)} prefill efficiency × ${formatPercent(results.multiGpuEfficiency)} scaling = ${formatNumber(results.effectivePrefillComputeTFLOPS, 0)} TFLOPS`
              : `${formatNumber(results.aggregatePeakComputeTFLOPS, 0)} TFLOPS × ${formatPercent(results.prefillEfficiency)} prefill efficiency = ${formatNumber(results.effectivePrefillComputeTFLOPS, 0)} TFLOPS`,
          note: "This is where the app now discounts spec-sheet compute before using it for TTFT."
        },
        {
          label: "Compute the theoretical TTFT floor",
          value: `${formatNumber(results.prefillParamsB, 1)}B × ${formatTokens(state.workload.promptTokens)} prompt tokens × 2 ÷ ${formatNumber(results.effectivePrefillComputeTFLOPS, 0)} TFLOPS = ${formatDuration(results.ttftFloorSec)}`,
          note: "This follows the guide's lower-bound TTFT framing rather than a production latency promise."
        },
        {
          label: "Apply the app's load penalty",
          value: `${formatDuration(results.ttftFloorSec)} × ${formatNumber(loadPenalty, 2)} = ${formatDuration(results.ttftUnderLoadSec)}`,
          note: "The app scales the floor upward when per-user throughput drops under load, so this card is more practical than the theoretical floor alone."
        },
        {
          label: "Optionally add hidden reasoning delay",
          value: state.workload.hiddenReasoningTokens > 0 ? `${formatTokens(state.workload.hiddenReasoningTokens)} hidden tokens push answer start to ${formatDuration(results.answerStartSec)}` : "No hidden reasoning tokens are added in the current scenario",
          note: "This matches the guide's warning that reasoning models can feel slower even when the visible TTFT math looks acceptable."
        }
      ];
    }
  },
  "workload-reference": {
    guideReferences: [
      "Inference guide Workload reference: typical QA / RAG context",
      "Inference guide Estimating concurrent users"
    ],
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
          value: "Typical total context: 4k-8k tokens",
          note: "The table is there to help you decide whether your prompt-side assumptions look light, standard, or aggressive."
        },
        {
          label: "Compare your live prompt mix",
          value: `${formatTokens(state.workload.promptTokens)} prompt + ${formatTokens(state.workload.outputTokens)} output = ${formatTokens(results.totalSequenceTokens)} total sequence`,
          note: "If this total grows well past the guide's common range, KV pressure and practical concurrency fall quickly."
        },
        {
          label: "Use it as an input sanity check",
          value: `${formatNumber(state.workload.concurrentUsers, 0)} concurrent users at ${formatTokens(results.totalSequenceTokens)} total tokens each`,
          note: "The guide's workload table is not a template. It is a planning reference for deciding whether your workload assumptions are plausible."
        }
      ];
    }
  },
  "hardware-envelope": {
    guideReferences: [
      "Inference guide Step 1: Defining the hardware envelope",
      "Inference guide Choosing peak specs without double-counting",
      "Inference guide Choosing initial efficiency assumptions"
    ],
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

function getArchitectureLabel(architecture) {
  return architecture === "dense" ? "Dense" : architecture === "moe" ? "MoE" : "MLA";
}

function getActiveParams(model) {
  return model.architecture === "dense" ? model.totalParamsB : model.activeParamsB;
}

function getPrefillParams(model) {
  return model.architecture === "dense" ? model.totalParamsB : model.activeParamsB;
}

function getKvReduction(model) {
  return model.architecture === "mla" ? model.mlaReduction : 1;
}

function getEfficiencyRatio(percent, fallback = 100) {
  return clamp((Number(percent) || fallback) / 100, 0.1, 1);
}

function calculateSizing(model, hardware, workload) {
  const gpuCount = Math.max(1, Math.floor(hardware.gpuCount || 1));
  const totalSystemVramGB = hardware.vramGB * gpuCount;
  const aggregatePeakBandwidthTBps = hardware.bandwidthTBps * gpuCount;
  const aggregatePeakComputeTFLOPS = hardware.computeTFLOPS * gpuCount;
  const decodeEfficiency = getEfficiencyRatio(hardware.decodeEfficiencyPct);
  const prefillEfficiency = getEfficiencyRatio(hardware.prefillEfficiencyPct);
  const multiGpuEfficiency = gpuCount > 1 ? getEfficiencyRatio(hardware.multiGpuEfficiencyPct) : 1;
  const effectiveDecodeBandwidthTBps = aggregatePeakBandwidthTBps * decodeEfficiency * multiGpuEfficiency;
  const effectivePrefillComputeTFLOPS = aggregatePeakComputeTFLOPS * prefillEfficiency * multiGpuEfficiency;
  const activeParamsB = getActiveParams(model);
  const prefillParamsB = getPrefillParams(model);
  const totalSequenceTokens = Math.max(1, workload.promptTokens + workload.outputTokens);
  const kvPerTokenBytes =
    2 *
    model.layers *
    model.kvHeads *
    model.headDim *
    model.kvBytes *
    getKvReduction(model);
  const kvPerUserGB = (kvPerTokenBytes * totalSequenceTokens) / 1e9;
  const weightMemoryGB = model.totalParamsB * model.weightBytes;
  const activeWeightReadGBPerToken = activeParamsB * model.weightBytes;
  const totalKvGB = kvPerUserGB * workload.concurrentUsers;
  const usableBudgetGB = totalSystemVramGB / workload.overheadMultiplier;
  const remainingKvBudgetGB = usableBudgetGB - weightMemoryGB;
  const requiredVramGB = (weightMemoryGB + totalKvGB) * workload.overheadMultiplier;
  const fitsInMemory = requiredVramGB <= totalSystemVramGB;
  const decodeTimePerTokenSec =
    effectiveDecodeBandwidthTBps > 0 ? activeWeightReadGBPerToken / effectiveDecodeBandwidthTBps / 1000 : Infinity;
  const decodeTps = decodeTimePerTokenSec > 0 ? 1 / decodeTimePerTokenSec : 0;
  const ttftFloorSec =
    effectivePrefillComputeTFLOPS > 0
      ? (prefillParamsB * 1e9 * workload.promptTokens * 2) / (effectivePrefillComputeTFLOPS * 1e12)
      : Infinity;
  const memoryBoundConcurrency = kvPerUserGB > 0 ? Math.max(0, Math.floor(remainingKvBudgetGB / kvPerUserGB)) : 0;
  const memoryUtilization = requiredVramGB / totalSystemVramGB;

  const batchingGain = 1 + 3.2 * (1 - Math.exp(-(Math.max(workload.concurrentUsers, 1) - 1) / 12));
  const serviceThroughputTps = decodeTps * batchingGain;
  const tpsPerUser = serviceThroughputTps / Math.max(1, workload.concurrentUsers);
  const ttftUnderLoadSec = ttftFloorSec * clamp(24 / Math.max(tpsPerUser, 6), 1.1, 4.5);
  const answerStartSec = ttftUnderLoadSec + workload.hiddenReasoningTokens / Math.max(tpsPerUser, 1);
  let experienceLabel = "Smooth";
  let experienceTone = "comfortable";
  let experienceReason = "For normal QA / RAG applications, this per-user speed should feel fluid and comfortably interactive.";

  if (tpsPerUser >= 20) {
    experienceLabel = "Smooth";
    experienceTone = "comfortable";
    experienceReason = "For normal QA / RAG applications, ≥20 tok/s per user is usually smooth and faster than most users can comfortably read.";
  } else if (tpsPerUser >= 10) {
    experienceLabel = "Acceptable";
    experienceTone = "tight";
    experienceReason = "For normal QA / RAG applications, 10–20 tok/s per user is still clearly usable, but users will notice the system working.";
  } else if (tpsPerUser >= 5) {
    experienceLabel = "Poor";
    experienceTone = "degraded";
    experienceReason = "For normal QA / RAG applications, 5–10 tok/s per user feels slow enough that lag becomes noticeable.";
  } else {
    experienceLabel = "Unusable";
    experienceTone = "degraded";
    experienceReason = "For normal QA / RAG applications, below 5 tok/s per user is generally too slow for a good interactive experience.";
  }

  let acceptableRagConcurrency = 0;
  for (let userCount = 1; userCount <= memoryBoundConcurrency; userCount += 1) {
    const userBatchingGain = 1 + 3.2 * (1 - Math.exp(-(userCount - 1) / 12));
    const userServiceThroughput = decodeTps * userBatchingGain;
    const userTps = userServiceThroughput / userCount;
    if (userTps >= 10) {
      acceptableRagConcurrency = userCount;
    }
  }

  let zone = "comfortable";
  let zoneReason = experienceReason;

  if (!fitsInMemory || remainingKvBudgetGB < 0) {
    zone = "overflow";
    zoneReason = "The model plus cache do not fit inside the selected VRAM envelope.";
  } else if (memoryUtilization > 0.9 || experienceTone === "degraded") {
    zone = "degraded";
  } else if (memoryUtilization > 0.75 || experienceTone === "tight") {
    zone = "tight";
    zoneReason = "The deployment still fits, but the selected concurrency is near the upper human-comfort range for typical RAG Q&A.";
  }

  return {
    gpuCount,
    totalSystemVramGB,
    aggregatePeakBandwidthTBps,
    aggregatePeakComputeTFLOPS,
    effectiveDecodeBandwidthTBps,
    effectivePrefillComputeTFLOPS,
    decodeEfficiency,
    prefillEfficiency,
    multiGpuEfficiency,
    activeParamsB,
    prefillParamsB,
    totalSequenceTokens,
    kvPerTokenBytes,
    kvPerUserGB,
    totalKvGB,
    weightMemoryGB,
    activeWeightReadGBPerToken,
    usableBudgetGB,
    remainingKvBudgetGB,
    requiredVramGB,
    fitsInMemory,
    decodeTimePerTokenSec,
    decodeTps,
    serviceThroughputTps,
    tpsPerUser,
    ttftFloorSec,
    ttftUnderLoadSec,
    answerStartSec,
    memoryBoundConcurrency,
    acceptableRagConcurrency,
    memoryUtilization,
    experienceLabel,
    experienceTone,
    experienceReason,
    zone,
    zoneReason
  };
}

function calculateScenario(totalSequenceTokens) {
  return calculateSizing(state.model, state.hardware, {
    ...state.workload,
    promptTokens: totalSequenceTokens,
    outputTokens: 0,
    concurrentUsers: Math.max(1, state.workload.concurrentUsers)
  });
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
  state.selectedTopicId = preset.architecture === "dense" ? "weight-vram" : "architecture";
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
  const numericFields = [
    "totalParamsB",
    "activeParamsB",
    "layers",
    "attentionHeads",
    "kvHeads",
    "headDim",
    "weightBytes",
    "kvBytes",
    "mlaReduction"
  ];
  state.model[field] = numericFields.includes(field) ? Number(rawValue) : rawValue;
  if (field === "architecture" && rawValue === "dense") {
    state.model.activeParamsB = state.model.totalParamsB;
  }
  if (field === "totalParamsB" && state.model.architecture === "dense") {
    state.model.activeParamsB = Number(rawValue);
  }
}

function updateHardwareField(field, rawValue) {
  state.hardware[field] = Number(rawValue);
}

function updateWorkloadField(field, rawValue) {
  state.workload[field] = Number(rawValue);
}

function renderModeSwitch() {
  const modes = [
    { id: "guide", label: "Guide" },
    { id: "sandbox", label: "Sandbox" }
  ];

  return `
    <div class="mode-switch">
      ${modes
        .map(
          (mode) => `
            <button
              type="button"
              class="${state.mode === mode.id ? "active" : ""}"
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
    <aside class="section-rail">
      <div>
        <div class="micro-label">Guide map</div>
      </div>
      ${guideSections
        .map(
          (section, index) => `
            <button
              type="button"
              class="${state.selectedSectionId === section.id ? "active" : ""}"
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
    </aside>
  `;
}

function renderHeroStrip(results) {
  const primarySummary =
    "Adjust the model, hardware peaks, efficiency assumptions, and workload, then use the Info buttons to inspect the math, assumptions, and inference-guide references behind each metric.";

  return `
    <section class="hero-strip">
      <div class="hero-panel">
        <div class="micro-label">Calculator-first guide</div>
        <h2 class="hero-title">Inference Sizing Visualizer</h2>
        <p class="guide-copy">${primarySummary}</p>
        <div class="chip-row">
          <div class="chip"><strong>${state.model.name}</strong> • ${getArchitectureLabel(state.model.architecture)}</div>
          <div class="chip"><strong>${state.hardware.name} × ${formatNumber(results.gpuCount, 0)}</strong> • ${formatGB(results.totalSystemVramGB)} cluster VRAM</div>
          <div class="chip"><strong>${formatTokens(results.totalSequenceTokens)}</strong> total sequence</div>
          <div class="chip"><strong>${results.fitsInMemory ? results.experienceLabel : "Does not fit"}</strong> • ${formatNumber(results.tpsPerUser, 1)} tok/s per user</div>
        </div>
      </div>
    </section>
  `;
}

function renderSidebarToggle() {
  const topic = sidebarTopics[state.selectedTopicId] || sidebarTopics["mental-model"];
  return `
    <button
      type="button"
      class="sidebar-toggle ${state.sidebarOpen ? "hidden" : ""}"
      data-action="open-sidebar"
      aria-label="Open explanation sidebar"
    >
      <span class="sidebar-toggle-label">Deep dive</span>
      <strong>${topic.title}</strong>
    </button>
  `;
}

function renderControlDeck(results) {
  return `
    <section class="control-grid">
      <article class="control-group">
        <div>
          <div class="micro-label">Model</div>
          <h3>Architecture and parameters</h3>
        </div>
        <div class="field">
          <span>Preset</span>
          <select data-group="preset" data-field="model">
            <option value="custom" ${state.modelPresetId === "custom" ? "selected" : ""}>Custom</option>
            ${modelPresets
              .map(
                (preset) => `
                  <option value="${preset.id}" ${state.modelPresetId === preset.id ? "selected" : ""}>${preset.name}</option>
                `
              )
              .join("")}
          </select>
        </div>
        <div class="field-grid">
          <label class="field">
            <span>Name</span>
            <input data-group="model" data-field="name" value="${state.model.name}" />
          </label>
          <label class="field">
            <span>Architecture</span>
            <select data-group="model" data-field="architecture">
              <option value="dense" ${state.model.architecture === "dense" ? "selected" : ""}>Dense</option>
              <option value="moe" ${state.model.architecture === "moe" ? "selected" : ""}>MoE</option>
              <option value="mla" ${state.model.architecture === "mla" ? "selected" : ""}>MLA</option>
            </select>
          </label>
          <label class="field">
            <span>Total params (B)</span>
            <input data-group="model" data-field="totalParamsB" type="number" min="1" step="0.1" value="${state.model.totalParamsB}" />
          </label>
          <label class="field">
            <span>Active params (B)</span>
            <input data-group="model" data-field="activeParamsB" type="number" min="1" step="0.1" value="${state.model.activeParamsB}" />
          </label>
          <label class="field">
            <span>Layers</span>
            <input data-group="model" data-field="layers" type="number" min="1" step="1" value="${state.model.layers}" />
          </label>
          <label class="field">
            <span>KV heads</span>
            <input data-group="model" data-field="kvHeads" type="number" min="1" step="1" value="${state.model.kvHeads}" />
          </label>
          <label class="field">
            <span>Head dim</span>
            <input data-group="model" data-field="headDim" type="number" min="1" step="1" value="${state.model.headDim}" />
          </label>
          <label class="field">
            <span>Weight bytes</span>
            <input data-group="model" data-field="weightBytes" type="number" min="0.1" step="0.1" value="${state.model.weightBytes}" />
          </label>
          <label class="field">
            <span>KV bytes</span>
            <input data-group="model" data-field="kvBytes" type="number" min="0.1" step="0.1" value="${state.model.kvBytes}" />
          </label>
          <label class="field">
            <span>MLA factor</span>
            <input data-group="model" data-field="mlaReduction" type="number" min="0.01" max="1" step="0.01" value="${state.model.mlaReduction}" />
          </label>
        </div>
      </article>
      <article class="control-group">
        <div class="control-header">
          <div>
            <div class="micro-label">Hardware</div>
            <h3>GPU envelope</h3>
          </div>
          <button
            type="button"
            class="control-info-button"
            data-action="open-topic"
            data-topic="hardware-envelope"
            aria-label="Open hardware envelope explanation"
          >
            Info
          </button>
        </div>
        <div class="field">
          <span>Preset</span>
          <select data-group="preset" data-field="hardware">
            <option value="custom" ${state.hardwarePresetId === "custom" ? "selected" : ""}>Custom</option>
            ${hardwarePresets
              .map(
                (preset) => `
                  <option value="${preset.id}" ${state.hardwarePresetId === preset.id ? "selected" : ""}>${preset.name}</option>
                `
              )
              .join("")}
          </select>
        </div>
        <div class="field-grid">
          <label class="field">
            <span>GPU count</span>
            <input data-group="hardware" data-field="gpuCount" type="number" min="1" step="1" value="${state.hardware.gpuCount}" />
          </label>
          <label class="field">
            <span>VRAM (GB)</span>
            <input data-group="hardware" data-field="vramGB" type="number" min="1" step="1" value="${state.hardware.vramGB}" />
          </label>
          <label class="field">
            <span>Peak bandwidth (TB/s)</span>
            <input data-group="hardware" data-field="bandwidthTBps" type="number" min="0.1" step="0.01" value="${state.hardware.bandwidthTBps}" />
          </label>
          <label class="field">
            <span>Peak compute (TFLOPS)</span>
            <input data-group="hardware" data-field="computeTFLOPS" type="number" min="1" step="1" value="${state.hardware.computeTFLOPS}" />
          </label>
          <label class="field">
            <span>Decode efficiency (%)</span>
            <input data-group="hardware" data-field="decodeEfficiencyPct" type="number" min="10" max="100" step="1" value="${state.hardware.decodeEfficiencyPct}" />
          </label>
          <label class="field">
            <span>Prefill efficiency (%)</span>
            <input data-group="hardware" data-field="prefillEfficiencyPct" type="number" min="10" max="100" step="1" value="${state.hardware.prefillEfficiencyPct}" />
          </label>
          <label class="field">
            <span>Multi-GPU scaling (%)</span>
            <input data-group="hardware" data-field="multiGpuEfficiencyPct" type="number" min="10" max="100" step="1" value="${state.hardware.multiGpuEfficiencyPct}" />
          </label>
        </div>
        <div class="support-copy">Peak fields are spec-sheet ceilings. Percentage fields discount those ceilings into usable throughput for planning.</div>
      </article>
      <article class="control-group">
        <div class="control-header">
          <div>
            <div class="micro-label">Workload</div>
            <h3>Context, concurrency, and caution</h3>
          </div>
          <button
            type="button"
            class="control-info-button"
            data-action="open-topic"
            data-topic="workload-reference"
            aria-label="Open workload reference"
          >
            Info
          </button>
        </div>
        <div class="field-grid">
          <label class="field">
            <span>Prompt tokens</span>
            <input data-group="workload" data-field="promptTokens" type="number" min="1" step="128" value="${state.workload.promptTokens}" />
          </label>
          <label class="field">
            <span>Output tokens</span>
            <input data-group="workload" data-field="outputTokens" type="number" min="0" step="128" value="${state.workload.outputTokens}" />
          </label>
          <label class="field">
            <span>Concurrent users</span>
            <input data-group="workload" data-field="concurrentUsers" type="number" min="1" step="1" value="${state.workload.concurrentUsers}" />
          </label>
          <label class="field">
            <span>Overhead multiplier</span>
            <input data-group="workload" data-field="overheadMultiplier" type="number" min="1.05" max="2" step="0.01" value="${state.workload.overheadMultiplier}" />
          </label>
          <label class="field">
            <span>Hidden reasoning tokens</span>
            <input data-group="workload" data-field="hiddenReasoningTokens" type="number" min="0" step="128" value="${state.workload.hiddenReasoningTokens}" />
          </label>
        </div>
        <div class="action-row">
          ${scenarioPresets
            .map(
              (preset) => `
                <button
                  type="button"
                  class="scenario-preset ${state.workload.promptTokens + state.workload.outputTokens === preset ? "active" : ""}"
                  data-action="load-sequence-preset"
                  data-sequence="${preset}"
                >
                  ${formatCompact(preset, 1)} total sequence
                </button>
              `
            )
            .join("")}
        </div>
        <div class="action-row">
          <button type="button" class="action-button" data-action="load-worked-example">Reset to Velvet 14B / A100</button>
        </div>
      </article>
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
        title: "Dense",
        topic: "architecture",
        detail: "Storage and speed both track the full model.",
        signal: `${formatNumber(state.model.totalParamsB, 1)}B active`
      },
      {
        id: "moe",
        title: "MoE",
        topic: "architecture",
        detail: "Storage tracks total params, speed tracks active params.",
        signal: `${formatNumber(getActiveParams({ ...state.model, architecture: "moe" }), 1)}B active`
      },
      {
        id: "mla",
        title: "MLA",
        topic: "architecture",
        detail: "Sparse intuition plus compressed KV behavior.",
        signal: `${formatNumber(state.model.mlaReduction * 100, 0)}% KV factor`
      }
    ];

    return `
      <div class="comparison-grid">
        ${cards
          .map(
            (card) => `
              <button type="button" class="topic-button ${state.model.architecture === card.id ? "active" : ""}" data-action="focus-topic" data-topic="${card.topic}">
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
          <div class="support-copy">${formatTokens(results.totalSequenceTokens)} total tokens across ${state.model.layers} layers and ${state.model.kvHeads} KV heads.</div>
        </button>
        <div class="visual-panel half">
          <div class="metric-label">Growth drivers</div>
          <div class="chip-row" style="margin-top: 12px;">
            <div class="chip"><strong>${formatTokens(results.totalSequenceTokens)}</strong> sequence</div>
            <div class="chip"><strong>${formatNumber(state.model.layers, 0)}</strong> layers</div>
            <div class="chip"><strong>${formatNumber(state.model.kvHeads, 0)}</strong> KV heads</div>
            <div class="chip"><strong>${formatNumber(getKvReduction(state.model), 2)}×</strong> KV factor</div>
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
              <div class="metric-label">Single-stream floor</div>
              <div class="topic-stat">${formatNumber(results.decodeTps, 0)} tok/s</div>
            </div>
            <div class="topic-stat-card">
              <div class="metric-label">Per active user</div>
              <div class="topic-stat">${formatNumber(results.tpsPerUser, 1)} tok/s</div>
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
          <div class="metric-label">Reasoning-aware answer start</div>
          <div class="topic-stat" style="margin-top: 10px;">${formatDuration(results.answerStartSec)}</div>
          <div class="support-copy" style="margin-top: 8px;">Adds ${formatTokens(state.workload.hiddenReasoningTokens)} hidden reasoning tokens as a separate interpretive delay.</div>
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
              <div class="section-kicker">${formatCompact(sequence, 1)} context</div>
              <strong>${formatNumber(scenario.memoryBoundConcurrency, 0)} users</strong>
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
      ${topicId ? `<button type="button" class="control-info-button metric-info-button" data-action="open-topic" data-topic="${topicId}" aria-label="Open ${label} explanation">Info</button>` : ""}
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
  const experienceClass = results.fitsInMemory ? results.experienceTone : "overflow";
  const experienceCopy = results.fitsInMemory ? results.experienceReason : results.zoneReason;
  const ragCapacityLine =
    results.acceptableRagConcurrency !== results.memoryBoundConcurrency
      ? `Memory-bound max: ${formatNumber(results.memoryBoundConcurrency, 0)} users • Acceptable RAG max: ${formatNumber(results.acceptableRagConcurrency, 0)} users.`
      : `Practical max concurrency: ${formatNumber(results.acceptableRagConcurrency, 0)} users.`;
  return `
    <section class="guide-stack">
      <div class="metric-grid">
        <article class="metric-card accent">
          ${renderMetricHeader("Weight memory", "weight-vram")}
          <div class="metric-value">${formatGB(results.weightMemoryGB)}</div>
          <div class="metric-subtext">Raw resident model size from total parameters and weight precision.</div>
        </article>
        <article class="metric-card cyan">
          ${renderMetricHeader("KV per user", "kv-cache")}
          <div class="metric-value">${formatGB(results.kvPerUserGB)}</div>
          <div class="metric-subtext">At ${formatTokens(results.totalSequenceTokens)} total sequence tokens.</div>
        </article>
        <article class="metric-card ${results.fitsInMemory ? "success" : "warning"}">
          ${renderMetricHeader("Total estimated VRAM", "overhead")}
          <div class="metric-value">${formatGB(results.requiredVramGB)}</div>
          <div class="metric-subtext">${results.fitsInMemory ? "Fits inside the selected card envelope." : "Exceeds the selected card envelope."}</div>
        </article>
        <article class="metric-card accent">
          ${renderMetricHeader("Service throughput", "decode")}
          <div class="metric-value">${formatNumber(results.serviceThroughputTps, 0)} tok/s</div>
          <div class="metric-subtext"><strong>${formatNumber(results.tpsPerUser, 1)} tok/s per user</strong> at the selected concurrency.</div>
          <div class="metric-subtext">Concurrency-aware throughput from usable decode bandwidth plus the QA / RAG per-user speed heuristic.</div>
        </article>
        <article class="metric-card cyan">
          ${renderMetricHeader("TTFT under load", "ttft")}
          <div class="metric-value">${formatDuration(results.ttftUnderLoadSec)}</div>
          <div class="metric-subtext">Relative to a usable-compute floor of ${formatDuration(results.ttftFloorSec)}.</div>
        </article>
        <article class="metric-card ${experienceClass === "comfortable" ? "success" : experienceClass === "tight" ? "accent" : "warning"}">
          ${renderMetricHeader("Typical experience")}
          <div class="zone-pill ${experienceClass}">${results.fitsInMemory ? results.experienceLabel : "Does not fit"}</div>
          <div class="metric-subtext">${experienceCopy}</div>
          <div class="action-row">
            <button type="button" class="action-button" data-action="open-topic" data-topic="operating-zone">Explain this rating</button>
          </div>
        </article>
      </div>
      <article class="guide-card">
        <div class="guide-card-header">
          <div>
            <div class="section-kicker">Memory composition</div>
            <h3>Show the post-overhead memory demand and the likely human feel for the selected concurrency.</h3>
          </div>
        </div>
        <div class="visual-grid">
          <div class="visual-panel half">
            <div class="metric-label">Budget after overhead</div>
            <div class="topic-stat" style="margin-top: 10px;">${formatGB(results.usableBudgetGB)}</div>
            <div class="support-copy" style="margin-top: 8px;">Usable planning budget across ${formatNumber(results.gpuCount, 0)} GPUs. Planned demand is combined weights + total cache × ${formatNumber(state.workload.overheadMultiplier, 2)}.</div>
            <div class="support-copy" style="margin-top: 8px;">Speed uses peak hardware discounted into usable bandwidth and usable compute. Multi-GPU scenarios also apply the selected scaling discount instead of assuming perfect linear speedup.</div>
            <div class="stack-meter" style="margin-top: 12px;">
              <div class="${results.fitsInMemory ? "stack-fill" : "stack-over"}" style="width: ${clamp((results.requiredVramGB / results.totalSystemVramGB) * 100, 0, 100)}%"></div>
            </div>
            <div class="stack-legend" style="margin-top: 12px;">
              <span><span class="legend-dot" style="background: var(--accent);"></span>Planned demand ${formatGB(results.requiredVramGB)}</span>
              <span><span class="legend-dot" style="background: rgba(255,255,255,0.08);"></span>Total cluster VRAM ${formatGB(results.totalSystemVramGB)}</span>
            </div>
          </div>
          <div class="visual-panel half">
            <div class="metric-label">RAG Q&A feel at ${formatNumber(state.workload.concurrentUsers, 0)} users</div>
            <div class="zone-pill ${experienceClass}" style="margin-top: 10px;">${results.fitsInMemory ? results.experienceLabel : "Does not fit"}</div>
            <div class="support-copy" style="margin-top: 12px;">~${formatNumber(results.serviceThroughputTps, 0)} total tok/s • ~${formatNumber(results.tpsPerUser, 1)} tok/s per user • ~${formatDuration(results.ttftUnderLoadSec)} TTFT under load.</div>
            <div class="divider" style="margin-top: 14px;"></div>
            <div class="support-copy" style="margin-top: 14px;">${ragCapacityLine}</div>
            <div class="support-copy" style="margin-top: 8px;">${experienceCopy}</div>
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
  const guideReferences = enhancement.guideReferences || [];
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
  const guideReferenceSection = guideReferences.length
    ? `
        <div class="sidebar-block">
          <div class="metric-label">Inference guide references</div>
          <ul>
            ${guideReferences.map((reference) => `<li>${reference}</li>`).join("")}
          </ul>
        </div>
      `
    : "";

  return `
    <aside class="sidebar" aria-hidden="${state.sidebarOpen ? "false" : "true"}">
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
        ${guideReferenceSection}
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
    <div class="attention-note" role="note" aria-label="Sizing caution">
      <div class="attention-label">Attention</div>
      <div class="attention-copy">
        This is a broad planning guide for understanding memory, throughput, latency, and concurrency tradeoffs. The app now separates peak hardware specs from usable throughput assumptions, but actual results can still vary materially based on runtime, batching, kernels, interconnect, scheduler behavior, and implementation details.
      </div>
    </div>
  `;
}

function renderMain(results) {
  return renderSandboxView(results);
}

function renderApp() {
  const results = calculateSizing(state.model, state.hardware, state.workload);
  const workspaceClass = `no-rail ${state.sidebarOpen ? "sidebar-open" : "sidebar-closed"}`;

  app.innerHTML = `
    <div class="app-shell" style="--sidebar-width: ${state.sidebarWidth}px;">
      <div class="workspace ${workspaceClass}">
        <main class="main-column">
          ${renderHeroStrip(results)}
          ${renderAttentionNote()}
          ${renderControlDeck(results)}
          ${renderMain(results)}
        </main>
        ${state.sidebarOpen ? renderSidebar(results) : ""}
      </div>
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
    state.workload.promptTokens = totalSequence;
    state.workload.outputTokens = 0;
    state.selectedTopicId = "concurrency";
  }

  renderApp();
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
      ? field === "architecture"
        ? "architecture"
        : "weight-vram"
      : group === "hardware"
        ? "hardware-envelope"
        : field === "overheadMultiplier"
          ? "overhead"
          : "concurrency";

  renderApp();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.sidebarOpen) {
    state.sidebarOpen = false;
    renderApp();
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
