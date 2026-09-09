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
  if (kind === "tts") return <svg viewBox="0 0 180 54" aria-hidden="true"><g className="thumb-spectrum"><rect x="12" y="23" width="4" height="8" /><rect x="20" y="18" width="4" height="18" /><rect x="28" y="12" width="4" height="30" /><rect x="36" y="19" width="4" height="16" /><rect x="44" y="9" width="4" height="36" /><rect x="52" y="15" width="4" height="24" /><rect x="60" y="22" width="4" height="10" /><rect x="68" y="17" width="4" height="20" /><rect x="76" y="25" width="4" height="4" /><rect x="84" y="20" width="4" height="14" /><rect x="92" y="14" width="4" height="26" /><rect x="100" y="18" width="4" height="18" /><rect x="108" y="9" width="4" height="36" /><rect x="116" y="13" width="4" height="28" /><rect x="124" y="22" width="4" height="10" /><rect x="132" y="16" width="4" height="22" /><rect x="140" y="20" width="4" height="14" /><rect x="148" y="11" width="4" height="32" /><rect x="156" y="19" width="4" height="16" /><rect x="164" y="23" width="4" height="8" /></g></svg>;
  if (kind === "mtl") return <svg viewBox="0 0 180 54" aria-hidden="true"><path className="thumb-trace" d="M48 27h16m26-12h16m-16 24h16m26-12h16" /><rect className="thumb-block block-one" x="14" y="17" width="34" height="20" rx="2" /><rect className="thumb-block block-two" x="64" y="5" width="26" height="20" rx="2" /><rect className="thumb-block block-three" x="64" y="29" width="26" height="20" rx="2" /><rect className="thumb-block block-four" x="106" y="17" width="26" height="20" rx="2" /><rect className="thumb-block block-five" x="148" y="17" width="18" height="20" rx="2" /><text className="thumb-text" x="31" y="30">W</text><text className="thumb-text" x="77" y="18">AF</text><text className="thumb-text" x="77" y="42">AF</text><text className="thumb-text" x="119" y="30">×</text><text className="thumb-text" x="157" y="30">P</text></svg>;
  if (kind === "aerial") return <svg viewBox="0 0 180 54" aria-hidden="true"><path className="thumb-grid" d="M28 8v38M52 8v38M76 8v38M100 8v38M124 8v38M148 8v38M16 16h148M16 30h148M16 44h148" /><circle className="thumb-radar" cx="100" cy="30" r="11" /><circle className="thumb-node" cx="100" cy="30" r="3" /></svg>;
  if (kind === "market") return <svg viewBox="0 0 180 54" aria-hidden="true"><path className="thumb-axis" d="M16 6v40h148" /><g className="thumb-candles"><path d="M31 38V22m-4 4h8v8h-8zm18 4V13m-4 9h8v10h-8zm18-6V19m-4 5h8v11h-8zm18-7V10m-4 6h8v13h-8zm18 4V17m-4 7h8v9h-8z" /></g><path className="thumb-forecast" d="M99 26c12-4 19-12 30-14s18-3 32-11" /><circle className="thumb-node market-dot" cx="160" cy="7" r="3" /></svg>;
  return <svg viewBox="0 0 180 54" aria-hidden="true"><text className="thumb-text odds-label" x="16" y="13">BOOKS</text><path className="thumb-book-line" d="M16 20h148M16 34h148M16 48h148" /><rect className="thumb-odds odds-one" x="41" y="22" width="31" height="10" rx="1" /><rect className="thumb-odds odds-two" x="91" y="36" width="48" height="10" rx="1" /><circle className="thumb-node market-dot" cx="151" cy="41" r="3" /><text className="thumb-text ev-label" x="155" y="44">+</text></svg>;
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
      <span className="project-marker-meta"><span className="project-number">{marker.number}</span><span className="project-discipline">{marker.label}</span></span>
    </button>
    {marker.href && <a className="marker-link" href={marker.href} target="_blank" rel="noreferrer">{marker.linkLabel} ↗</a>}
  </figure>;
}
