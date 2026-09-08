"use client";

import { useState } from "react";

type Kind = "tts" | "mtl" | "aerial" | "market" | "sports";

const markers: Record<Kind, { number: string; label: string; href?: string; linkLabel?: string }> = {
  tts: { number: "01", label: "Speech" },
  mtl: { number: "02", label: "Research", href: "https://arxiv.org/abs/2608.22273", linkLabel: "Paper" },
  aerial: { number: "03", label: "Vision", href: "https://digital.wpi.edu/concern/student_works/hx11xj644?locale=en", linkLabel: "Report" },
  market: { number: "04", label: "Markets", href: "/reports/stock-market-forecasting-final-report.pdf", linkLabel: "Report" },
  sports: { number: "05", label: "Independent" },
};

function Sketch({ kind }: { kind: Kind }) {
  if (kind === "tts") return <svg viewBox="0 0 180 54" aria-hidden="true"><path className="thumb-trace" d="M2 27h15l6-15 8 31 10-38 9 34 8-20 10 8h15l8-11 7 19 9-28 8 20 11-7h42" /></svg>;
  if (kind === "mtl") return <svg viewBox="0 0 180 54" aria-hidden="true"><path className="thumb-trace" d="M18 27h38m18-16 31 16m-31 16 31-16m18 0h39" /><circle className="thumb-node node-one" cx="18" cy="27" r="4" /><circle className="thumb-node node-two" cx="74" cy="11" r="4" /><circle className="thumb-node node-three" cx="74" cy="43" r="4" /><circle className="thumb-node node-four" cx="123" cy="27" r="5" /><circle className="thumb-node node-five" cx="162" cy="27" r="4" /></svg>;
  if (kind === "aerial") return <svg viewBox="0 0 180 54" aria-hidden="true"><path className="thumb-grid" d="M28 8v38M52 8v38M76 8v38M100 8v38M124 8v38M148 8v38M16 16h148M16 30h148M16 44h148" /><circle className="thumb-radar" cx="100" cy="30" r="11" /><circle className="thumb-node" cx="100" cy="30" r="3" /></svg>;
  if (kind === "market") return <svg viewBox="0 0 180 54" aria-hidden="true"><path className="thumb-axis" d="M16 6v40h148" /><path className="thumb-trace" d="M20 39 39 34 53 38 67 25 82 31 96 20 112 24 127 12 142 18 160 7" /><circle className="thumb-node market-dot" cx="160" cy="7" r="3" /></svg>;
  return <svg viewBox="0 0 180 54" aria-hidden="true"><path className="thumb-axis" d="M16 6v40h148" /><path className="thumb-trace" d="M20 40c13 4 20-8 31-5s14-13 25-11 16 8 27-1 13-8 24-3 15-9 33-13" /><circle className="thumb-node market-dot" cx="160" cy="7" r="3" /></svg>;
}

export default function ProjectThumbnail({ kind }: { kind: Kind }) {
  const marker = markers[kind];
  const [isAnimated, setIsAnimated] = useState(false);
  const replay = () => {
    setIsAnimated(false);
    requestAnimationFrame(() => setIsAnimated(true));
  };

  return <figure className="project-thumbnail interactive-thumbnail">
    <button type="button" className={`project-marker ${isAnimated ? "is-animated" : ""}`} onClick={replay} aria-label={`Animate ${marker.label.toLowerCase()} illustration`}>
      <Sketch kind={kind} />
      <span className="project-marker-meta"><span className="project-number">{marker.number}</span><span className="project-discipline">{marker.label}</span><span className="animate-label">Animate ↗</span></span>
    </button>
    {marker.href && <a className="marker-link" href={marker.href} target="_blank" rel="noreferrer">{marker.linkLabel} ↗</a>}
  </figure>;
}
