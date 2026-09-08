type Kind = "tts" | "mtl" | "aerial" | "market" | "sports";

const markers: Record<Kind, { number: string; label: string; href?: string }> = {
  tts: { number: "01", label: "Speech" },
  mtl: { number: "02", label: "Research", href: "https://arxiv.org/abs/2608.22273" },
  aerial: { number: "03", label: "Vision", href: "https://digital.wpi.edu/concern/student_works/hx11xj644?locale=en" },
  market: { number: "04", label: "Markets", href: "/reports/stock-market-forecasting-final-report.pdf" },
  sports: { number: "05", label: "Independent" },
};

export default function ProjectThumbnail({ kind }: { kind: Kind }) {
  const marker = markers[kind];
  const content = <><span className="project-number">{marker.number}</span><span className="project-discipline">{marker.label}</span></>;

  return <figure className="project-thumbnail minimal-thumbnail">
    {marker.href ? <a className="project-marker" href={marker.href} target="_blank" rel="noreferrer" aria-label={`Open ${marker.label.toLowerCase()} project link`}>{content}</a> : <div className="project-marker">{content}</div>}
  </figure>;
}
