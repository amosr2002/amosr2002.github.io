"use client";

import { useState } from "react";

type Stage = 0 | 1 | 2;

const stages = [
  { label: "Frame-level prosody", summary: "FastPitch baseline extended with a Mamba state-space module to model pitch and energy at the frame level for continuous prosody and lower latency." },
  { label: "Two-stage flow matching", summary: "The design pivoted to separate semantic speech planning from acoustic realization, using chunk-aware conditional flow matching for the acoustic stage." },
  { label: "Current pipeline design", summary: "The current design adds mixed text and IPA input, speaker selection, style conditioning, and a WER safety check around the two-stage core." },
];

function Block({ x, y, w, title, detail, tone = "base" }: { x: number; y: number; w: number; title: string; detail?: string; tone?: "base" | "model" | "acoustic" | "addition" }) {
  return <g className={`architecture-block architecture-${tone}`}><rect x={x} y={y} width={w} height="42" rx="4" /><text x={x + w / 2} y={y + 18} className="architecture-title">{title}</text>{detail && <text x={x + w / 2} y={y + 32} className="architecture-detail">{detail}</text>}</g>;
}

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return <path className="architecture-arrow" d={`M${x1} ${y1} H${x2} ${y2}`} />;
}

function Diagram({ stage }: { stage: Stage }) {
  if (stage === 0) return <svg viewBox="0 0 680 270" role="img" aria-label="FastPitch and Mamba state-space prosody architecture">
    <defs><marker id="architecture-arrowhead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 10 5 0 10z" /></marker></defs>
    <Block x={24} y={114} w={90} title="Text + IPA" detail="tokens" />
    <Block x={144} y={114} w={110} title="FastPitch" detail="encoder" tone="model" />
    <Block x={284} y={114} w={110} title="Length regulator" detail="frame states" tone="model" />
    <Block x={424} y={114} w={108} title="Mamba SSM" detail="prosody" tone="addition" />
    <Block x={562} y={114} w={94} title="Mel output" detail="decoder" tone="acoustic" />
    <Arrow x1={114} y1={135} x2={144} y2={135} /><Arrow x1={254} y1={135} x2={284} y2={135} /><Arrow x1={394} y1={135} x2={424} y2={135} /><Arrow x1={532} y1={135} x2={562} y2={135} />
    <Block x={424} y={32} w={108} title="Style text" detail="FiLM condition" tone="addition" />
    <path className="architecture-arrow" d="M478 74V108" />
    <text x="24" y="225" className="architecture-caption">Prosody moved from one value per phoneme to a continuous, frame-level representation.</text>
  </svg>;
  if (stage === 1) return <svg viewBox="0 0 680 270" role="img" aria-label="Two-stage conditional flow matching architecture">
    <defs><marker id="architecture-arrowhead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 10 5 0 10z" /></marker></defs>
    <Block x={28} y={114} w={92} title="Text input" detail="BPE tokens" />
    <Block x={150} y={114} w={110} title="AR language model" detail="semantic plan" tone="model" />
    <Block x={290} y={114} w={110} title="Semantic tokens" detail="content + prosody" tone="model" />
    <Block x={430} y={114} w={122} title="Conditional flow" detail="chunk-aware mel" tone="acoustic" />
    <Block x={582} y={114} w={72} title="Waveform" detail="vocoder" tone="acoustic" />
    <Arrow x1={120} y1={135} x2={150} y2={135} /><Arrow x1={260} y1={135} x2={290} y2={135} /><Arrow x1={400} y1={135} x2={430} y2={135} /><Arrow x1={552} y1={135} x2={582} y2={135} />
    <Block x={430} y={32} w={122} title="Speaker + style" detail="acoustic condition" tone="addition" />
    <path className="architecture-arrow" d="M491 74V108" />
    <text x="28" y="225" className="architecture-caption">Semantic planning and acoustic generation became separable stages, making the system easier to tune and evaluate.</text>
  </svg>;
  return <svg viewBox="0 0 680 270" role="img" aria-label="Current expressive speech pipeline design">
    <defs><marker id="architecture-arrowhead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 10 5 0 10z" /></marker></defs>
    <Block x={18} y={114} w={88} title="Text + IPA" detail="mixed input" />
    <Block x={132} y={114} w={100} title="AR LM + LoRA" detail="speaker-aware" tone="model" />
    <Block x={258} y={114} w={100} title="Semantic tokens" detail="content plan" tone="model" />
    <Block x={384} y={114} w={112} title="Conditional flow" detail="acoustic stage" tone="acoustic" />
    <Block x={522} y={114} w={70} title="Vocoder" detail="mel" tone="acoustic" />
    <Block x={610} y={114} w={54} title="WER" detail="gate" tone="addition" />
    <Arrow x1={106} y1={135} x2={132} y2={135} /><Arrow x1={232} y1={135} x2={258} y2={135} /><Arrow x1={358} y1={135} x2={384} y2={135} /><Arrow x1={496} y1={135} x2={522} y2={135} /><Arrow x1={592} y1={135} x2={610} y2={135} />
    <Block x={132} y={34} w={100} title="Speaker registry" detail="LoRA + embedding" tone="addition" />
    <Block x={384} y={34} w={112} title="Style encoder" detail="dual-path input" tone="addition" />
    <path className="architecture-arrow" d="M182 76V108M440 76V108" />
    <text x="18" y="225" className="architecture-caption">The current design keeps speaker identity and style as explicit conditions, then checks generated speech before release.</text>
  </svg>;
}

export default function TtsArchitectureEvolution() {
  const [stage, setStage] = useState<Stage>(0);
  return <section className="architecture-evolution" aria-labelledby="architecture-evolution-heading">
    <div className="architecture-heading"><h4 id="architecture-evolution-heading">Architecture evolution</h4><span>{String(stage + 1).padStart(2, "0")} / 03</span></div>
    <div className="architecture-steps" role="tablist" aria-label="TTS architecture stages">
      {stages.map((item, index) => <button key={item.label} type="button" role="tab" aria-selected={stage === index} className={stage === index ? "is-selected" : ""} onClick={() => setStage(index as Stage)}>{String(index + 1).padStart(2, "0")} {item.label}</button>)}
    </div>
    <div className="architecture-diagram"><Diagram stage={stage} /></div>
    <p className="architecture-summary">{stages[stage].summary}</p>
  </section>;
}
