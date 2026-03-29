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
    computeTFLOPS: 312
  },
  {
    id: "h100-80",
    name: "H100 80GB",
    gpuCount: 1,
    vramGB: 80,
    bandwidthTBps: 3.35,
    computeTFLOPS: 989
  },
  {
    id: "rtx-4090",
    name: "RTX 4090 24GB",
    gpuCount: 1,
    vramGB: 24,
    bandwidthTBps: 1.008,
    computeTFLOPS: 330
  }
];

const guideSections = [
  {
    id: "constraints",
    title: "Mental model",
    summary: "Anchor the guide in the three physical limits that govern every deployment: fit, feed, and process.",
    bullets: [
      "VRAM capacity decides whether the model and cache can exist on the card.",
      "Memory bandwidth usually dominates decode throughput and tokens/sec.",
      "Compute usually dominates prefill and the lower-bound TTFT story."
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
    summary: "Per-token generation is usually a bandwidth problem, which is why faster HBM often matters more than raw compute.",
    bullets: [
      "Dense decode is tied to total parameter reads.",
      "MoE and MLA decode can feel faster because active parameters are smaller.",
      "This is a first-order estimate, not a benchmark promise."
    ],
    topicId: "decode"
  },
  {
    id: "latency",
    title: "Prefill and TTFT",
    summary: "Prompt processing behaves differently from decode. It leans harder on compute, prompt length, and scheduler behavior.",
    bullets: [
      "Use total parameters for dense prefill.",
      "Use active parameters for MoE and MLA lower-bound intuition.",
      "Treat the result as a compute floor, not user-facing truth."
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
      "VRAM capacity answers whether the model can be resident at all. Memory bandwidth answers how quickly weights can be streamed during decode. Compute answers how quickly prompt tokens can be processed during prefill. In real serving systems the bottleneck can move, but these three remain the first-order frame.",
    formula: "Fit → VRAM. Decode → bandwidth. Prefill → compute.",
    assumptions: [
      "This is a first-order planning frame.",
      "Scheduler behavior and runtime kernels can still shift the bottleneck."
    ],
    pitfalls: [
      "Treating a single metric as the whole story.",
      "Using fit numbers as latency promises."
    ],
    statA: "3",
    statALabel: "Primary constraints",
    statB: "1st",
    statBLabel: "Order of approximation"
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
    summary: "During decode, the system often behaves like a weight-streaming machine, so bandwidth is the cleanest first-order predictor.",
    detail:
      "The simplified estimate divides the active weight bytes read per token by the available memory bandwidth. Dense models pay with total parameters. MoE and MLA pay with active parameters, which is why sparse models can decode far faster than their storage footprint suggests.",
    formula: "time_per_token ≈ (P_active × bytes_per_weight) / bandwidth",
    assumptions: [
      "Decode is assumed to be bandwidth-dominant.",
      "Attention, batching, and kernel efficiency are not fully modeled."
    ],
    pitfalls: [
      "Treating the estimate as measured production TPS.",
      "Ignoring interconnect penalties in multi-GPU serving."
    ],
    statA: "Bandwidth",
    statALabel: "Primary decode driver",
    statB: "P_active",
    statBLabel: "Sparse speed variable"
  },
  ttft: {
    title: "Prefill and TTFT",
    eyebrow: "First visible token",
    summary: "Prompt processing is more compute-shaped than decode and scales directly with prompt length.",
    detail:
      "The simplified TTFT estimate treats prompt processing as a lower-bound compute floor. It is useful for understanding why bigger prompts and bigger models cost more, but it deliberately ignores attention cost, scheduler delay, batching interference, and software overhead. For reasoning-heavy models, hidden internal generation can dominate the perceived wait.",
    formula: "TTFT_floor ≈ (params × prompt_tokens × 2) / peak_FLOPS",
    assumptions: [
      "Dense uses total parameters. MoE and MLA use active parameters for lower-bound intuition.",
      "Hidden reasoning tokens can be added separately as an interpretive delay."
    ],
    pitfalls: [
      "Reading the number as user-facing latency.",
      "Ignoring long hidden chains of thought in reasoning models."
    ],
    statA: "Compute",
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
      "The default worked example is Velvet 14B on an A100 80GB with an 8k total sequence and a conservative 1.25× overhead. The live controls let you keep the narrative but change the hardware, context, or concurrency assumptions and watch the supporting numbers respond together.",
    formula: "Defaults match the guide’s example and remain fully editable.",
    assumptions: [
      "The example starts from a dense 14B model at BF16.",
      "Context scenarios are displayed as total sequence lengths."
    ],
    pitfalls: [
      "Forgetting that the guide example is memory-first before it is experience-first.",
      "Comparing scenarios without holding the overhead assumption constant."
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
      "For normal QA / RAG applications, the app classifies the experience from the per-user generation speed after sharing total service throughput across the selected concurrency. The practical bands are: smooth at 20+ tok/s per user, acceptable at 10–20 tok/s per user, poor at 5–10 tok/s per user, and unusable below 5 tok/s per user. The calculation still shows TTFT under load separately, but the experience badge itself is driven by the per-user speed band because that is the clearest interaction signal once concurrency is applied.",
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
  }
};

const scenarioPresets = [4096, 8192, 32768, 128000];

const state = {
  mode: "sandbox",
  selectedSectionId: "constraints",
  selectedTopicId: "mental-model",
  sidebarOpen: false,
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

function calculateSizing(model, hardware, workload) {
  const gpuCount = Math.max(1, Math.floor(hardware.gpuCount || 1));
  const totalSystemVramGB = hardware.vramGB * gpuCount;
  const aggregateBandwidthTBps = hardware.bandwidthTBps * gpuCount;
  const aggregateComputeTFLOPS = hardware.computeTFLOPS * gpuCount;
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
  const totalKvGB = kvPerUserGB * workload.concurrentUsers;
  const usableBudgetGB = totalSystemVramGB / workload.overheadMultiplier;
  const remainingKvBudgetGB = usableBudgetGB - weightMemoryGB;
  const requiredVramGB = (weightMemoryGB + totalKvGB) * workload.overheadMultiplier;
  const fitsInMemory = requiredVramGB <= totalSystemVramGB;
  const decodeTimePerTokenSec =
    aggregateBandwidthTBps > 0 ? (activeParamsB * model.weightBytes) / aggregateBandwidthTBps / 1000 : Infinity;
  const decodeTps = decodeTimePerTokenSec > 0 ? 1 / decodeTimePerTokenSec : 0;
  const ttftFloorSec =
    aggregateComputeTFLOPS > 0
      ? (prefillParamsB * 1e9 * workload.promptTokens * 2) / (aggregateComputeTFLOPS * 1e12)
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
    aggregateBandwidthTBps,
    aggregateComputeTFLOPS,
    activeParamsB,
    prefillParamsB,
    totalSequenceTokens,
    kvPerTokenBytes,
    kvPerUserGB,
    totalKvGB,
    weightMemoryGB,
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
  state.mode = "sandbox";
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
    state.mode === "guide"
      ? "Walk the guide, click any system block, and open the sidebar when you want the deeper explanation."
      : "Adjust the model, hardware, and workload assumptions and watch the memory, throughput, and latency story update together.";

  return `
    <section class="hero-strip">
      <div class="hero-panel">
        <div class="micro-label">Operating canvas</div>
        ${renderModeSwitch()}
        <h2 class="hero-title">A visual control room for LLM sizing, not just another long article.</h2>
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
        <div>
          <div class="micro-label">Hardware</div>
          <h3>GPU envelope</h3>
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
            <span>Bandwidth (TB/s)</span>
            <input data-group="hardware" data-field="bandwidthTBps" type="number" min="0.1" step="0.01" value="${state.hardware.bandwidthTBps}" />
          </label>
          <label class="field">
            <span>Compute (TFLOPS)</span>
            <input data-group="hardware" data-field="computeTFLOPS" type="number" min="1" step="1" value="${state.hardware.computeTFLOPS}" />
          </label>
        </div>
        <div class="footer-note">
          <div class="metric-label">Budget after overhead</div>
          <div class="summary-value">${formatGB(results.usableBudgetGB)}</div>
          <div class="support-copy">Usable planning budget after overhead across ${formatNumber(results.gpuCount, 0)} GPUs.</div>
        </div>
      </article>
      <article class="control-group">
        <div>
          <div class="micro-label">Workload</div>
          <h3>Context, concurrency, and caution</h3>
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
          <div class="support-copy">Bandwidth-led decode estimate from active weight reads.</div>
        </button>
        <button type="button" class="visual-button three-up" data-action="focus-topic" data-topic="ttft">
          <div class="section-kicker">Process</div>
          <strong>${formatDuration(results.ttftFloorSec)}</strong>
          <div class="support-copy">Compute-led prefill floor for the visible prompt.</div>
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
          <div class="support-copy">Derived from ${formatNumber(results.activeParamsB, 1)}B active params and ${formatNumber(state.hardware.bandwidthTBps, 2)} TB/s bandwidth.</div>
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
          <div class="support-copy">Prompt tokens: ${formatTokens(state.workload.promptTokens)} • effective prefill params: ${formatNumber(results.prefillParamsB, 1)}B</div>
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
          <div class="metric-label">Weight memory</div>
          <div class="metric-value">${formatGB(results.weightMemoryGB)}</div>
          <div class="metric-subtext">Raw resident model size from total parameters and weight precision.</div>
        </article>
        <article class="metric-card cyan">
          <div class="metric-label">KV per user</div>
          <div class="metric-value">${formatGB(results.kvPerUserGB)}</div>
          <div class="metric-subtext">At ${formatTokens(results.totalSequenceTokens)} total sequence tokens.</div>
        </article>
        <article class="metric-card ${results.fitsInMemory ? "success" : "warning"}">
          <div class="metric-label">Total estimated VRAM</div>
          <div class="metric-value">${formatGB(results.requiredVramGB)}</div>
          <div class="metric-subtext">${results.fitsInMemory ? "Fits inside the selected card envelope." : "Exceeds the selected card envelope."}</div>
        </article>
        <article class="metric-card accent">
          <div class="metric-label">Service throughput</div>
          <div class="metric-value">${formatNumber(results.serviceThroughputTps, 0)} tok/s</div>
          <div class="metric-subtext"><strong>${formatNumber(results.tpsPerUser, 1)} tok/s per user</strong> at the selected concurrency.</div>
          <div class="metric-subtext">Concurrency-aware throughput using the QA / RAG per-user speed heuristic.</div>
        </article>
        <article class="metric-card cyan">
          <div class="metric-label">TTFT under load</div>
          <div class="metric-value">${formatDuration(results.ttftUnderLoadSec)}</div>
          <div class="metric-subtext">Relative to a theoretical floor of ${formatDuration(results.ttftFloorSec)}.</div>
        </article>
        <article class="metric-card ${experienceClass === "comfortable" ? "success" : experienceClass === "tight" ? "accent" : "warning"}">
          <div class="metric-label">Typical experience</div>
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
          <button type="button" class="action-button" data-action="open-topic" data-topic="overhead">Explain the overhead rule</button>
        </div>
        <div class="visual-grid">
          <div class="visual-panel half">
            <div class="metric-label">Budget after overhead</div>
            <div class="topic-stat" style="margin-top: 10px;">${formatGB(results.usableBudgetGB)}</div>
            <div class="support-copy" style="margin-top: 8px;">Usable planning budget across ${formatNumber(results.gpuCount, 0)} GPUs. Planned demand is combined weights + total cache × ${formatNumber(state.workload.overheadMultiplier, 2)}.</div>
            <div class="support-copy" style="margin-top: 8px;">Multi-GPU values assume near-ideal aggregation; real tensor parallelism, interconnect, and runtime overhead can reduce throughput and usable capacity.</div>
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
  const topic = sidebarTopics[state.selectedTopicId] || sidebarTopics["mental-model"];

  return `
    <aside class="sidebar" aria-hidden="${state.sidebarOpen ? "false" : "true"}">
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
        <div class="sidebar-block">
          <div class="metric-label">Current live values</div>
          <div class="topic-stat-row">
            <div class="topic-stat-card">
              <div class="metric-label">VRAM demand</div>
              <div class="topic-stat">${formatGB(results.requiredVramGB)}</div>
            </div>
            <div class="topic-stat-card">
              <div class="metric-label">Decode</div>
              <div class="topic-stat">${formatNumber(results.decodeTps, 0)} tok/s</div>
            </div>
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
    <div class="attention-note" role="note" aria-label="Sizing caution">
      <div class="attention-label">Attention</div>
      <div class="attention-copy">
        This is a broad theoretical sizing guide for understanding memory, throughput, latency, and concurrency tradeoffs. Actual results can vary materially based on runtime, batching, kernels, interconnect, scheduler behavior, and implementation details.
      </div>
    </div>
  `;
}

function renderMain(results) {
  if (state.mode === "sandbox") {
    return renderSandboxView(results);
  }
  return renderGuideView(results);
}

function renderApp() {
  const results = calculateSizing(state.model, state.hardware, state.workload);
  const showGuideRail = state.mode === "guide";
  const workspaceClass = `${showGuideRail ? "has-rail" : "no-rail"} ${state.sidebarOpen ? "sidebar-open" : "sidebar-closed"}`;

  app.innerHTML = `
    <div class="app-shell">
      <header class="masthead">
        <div class="masthead-grid">
          <h1>Start in the sizing sandbox, then switch to guide mode when you want the walkthrough.</h1>
          <p>
            The default view is a live calculator for model, hardware, and workload assumptions. Guide mode is still available when you want the structured narrative, visual breakdowns, and on-demand explanations in the sidebar.
          </p>
        </div>
      </header>
      <div class="workspace ${workspaceClass}">
        ${showGuideRail ? renderSectionRail() : ""}
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
    group === "model"
      ? field === "architecture"
        ? "architecture"
        : "weight-vram"
      : group === "hardware"
        ? "decode"
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

renderApp();
