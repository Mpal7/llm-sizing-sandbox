# Inference Sizing Visualizer

Static browser-based visualizer for [Inference-sizing-and-performance-guide-v3.1.md](./Inference-sizing-and-performance-guide-v3.1.md).

## What it includes

- calculator-first UI with embedded guide sidebars and derivations
- sandbox mode with editable model, hardware, and workload assumptions
- hardware controls that separate spec-sheet peaks from usable throughput assumptions
- worked-example mode for the Velvet 14B / A100 scenario
- clickable visual elements that drive a deep-explanation sidebar

## Run it

You can open `index.html` directly in a browser, or serve the folder locally:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.
