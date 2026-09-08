type Kind = "tts" | "mtl" | "aerial" | "market" | "sports";

function Workflow({ kind }: { kind: "tts" | "market" }) {
  const labels = {
    tts: ["Text", "Speech model", "Audio"],
    market: ["Market data", "Time-series model", "Forecast"],
  }[kind];
  return <svg viewBox="0 0 360 220" role="img" aria-label={`${labels.join(" to ")}, conceptual workflow`}>
    <defs><marker id={`arrow-${kind}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" /></marker></defs>
    <g fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="94" y="24" width="172" height="40" rx="3" />
      <path d="M180 64V90" markerEnd={`url(#arrow-${kind})`} />
      <rect x="62" y="94" width="236" height="46" rx="3" className="diagram-model" />
      <path d="M180 140V166" markerEnd={`url(#arrow-${kind})`} />
      <rect x="94" y="170" width="172" height="30" rx="3" />
    </g>
    <g fill="currentColor" textAnchor="middle" fontSize="16" fontFamily="Arial, sans-serif">
      <text x="180" y="49">{labels[0]}</text><text x="180" y="123">{labels[1]}</text><text x="180" y="190">{labels[2]}</text>
    </g>
  </svg>;
}

export default function ProjectThumbnail({ kind }: { kind: Kind }) {
  if (kind === "market") return <figure className="project-thumbnail">
    <a className="thumbnail-frame paper-thumbnail" href="/reports/stock-market-forecasting-final-report.pdf" target="_blank" rel="noreferrer" aria-label="Read the stock market forecasting final report">
      <img src="/thumbnails/market-volatility.png" width={1820} height={1092} alt="AAPL stock price and implied volatility over time, from the capstone report" loading="lazy" />
    </a><figcaption>Price &amp; volatility · Final report</figcaption>
  </figure>;
  if (kind === "mtl") return <figure className="project-thumbnail">
    <a className="thumbnail-frame paper-thumbnail" href="https://arxiv.org/abs/2608.22273" target="_blank" rel="noreferrer" aria-label="Read the paper containing the hierarchical multi-task model architecture">
      <img src="/thumbnails/articulatory-architecture.png" width={646} height={250} alt="Figure 2: WavLM backbone, articulatory feature heads, cross-attention, and phoneme classifier" loading="lazy" />
    </a><figcaption>Model architecture · Figure 2</figcaption>
  </figure>;
  if (kind === "aerial") return <figure className="project-thumbnail">
    <a className="thumbnail-frame aerial-thumbnail" href="https://digital.wpi.edu/concern/student_works/hx11xj644?locale=en" target="_blank" rel="noreferrer" aria-label="Read the WPI aerial image report">
      <img src="/thumbnails/aerial-segmentation.png" width={1364} height={772} alt="Aerial scene of buildings and parkland from Figure 58 of the WPI capstone report" loading="lazy" />
    </a><figcaption>Aerial dataset · WPI report</figcaption>
  </figure>;
  if (kind === "sports") return <figure className="project-thumbnail">
    <a className="thumbnail-frame sports-thumbnail" href="/pikkit-results.png" target="_blank" rel="noreferrer" aria-label="Open original Pikkit results screenshot">
      <img src="/pikkit-results.png" width={768} height={922} alt="Profit curve from the original Pikkit results screenshot" loading="lazy" />
    </a><figcaption>Pikkit · Tracked results</figcaption>
  </figure>;
  return <figure className="project-thumbnail"><div className="thumbnail-frame workflow-thumbnail"><Workflow kind={kind} /></div><figcaption>Conceptual workflow</figcaption></figure>;
}
