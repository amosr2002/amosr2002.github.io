import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amos Roche — ML Engineer / Researcher",
  description:
    "Amos Roche is an AI engineer working across model development, applied research, and production machine learning systems.",
};

const projects = [
  {
    number: "01",
    id: "tts",
    title: "Expressive speech systems",
    tag: "SPEECH / GENERATIVE AI",
    description:
      "A production-minded TTS system built from 10M+ speech clips, combining conditional flow matching with state-space architectures for more expressive, natural speech.",
    result: "10M+ clips assembled",
  },
  {
    number: "02",
    id: "clinical",
    title: "AI for clinical operations",
    tag: "HEALTHCARE / SYSTEMS",
    description:
      "An AI document-intake pipeline for hospital systems, designed to turn messy inputs into useful context for clinicians and care teams.",
    result: "300+ patients served",
  },
  {
    number: "03",
    id: "mtl",
    title: "Articulatory feature supervision",
    tag: "RESEARCH / MULTI-TASK LEARNING",
    description:
      "A hierarchical architecture using WavLM and cross-attention to improve phoneme recognition on L2-ARCTIC through articulatory feature supervision.",
    result: "13.47% phoneme error rate",
  },
];

const caseStudies = [
  {
    number: "01",
    id: "tts-case-study",
    label: "CONFIDENTIAL WORK · KALIBER LABS",
    title: "Making synthetic speech feel less synthetic.",
    problem:
      "Expressive speech is difficult to model: natural delivery depends on timing, emphasis, and subtle variation that basic text-to-speech systems often flatten. The challenge was to build a stronger foundation for naturalness while working with a large, heterogeneous speech corpus.",
    approach:
      "I assembled and curated a 10M+ clip training corpus, then worked across conditional flow-matching and state-space approaches to model speech with more expressive behavior. The work balanced research iteration with the practical constraints of training and inference.",
    stack: "Python · PyTorch · Audio preprocessing · CUDA · Flow matching · State-space models",
    result: "10M+ speech clips assembled for training",
    ownership:
      "End-to-end dataset assembly, model development, experiment design, and evaluation across the speech generation pipeline.",
  },
  {
    number: "02",
    id: "clinical-case-study",
    label: "CONFIDENTIAL WORK · KALIBER LABS",
    title: "Turning clinical documents into useful context.",
    problem:
      "Healthcare teams deal with information arriving in inconsistent formats and workflows. The goal was to make document intake more reliable and useful without exposing confidential patient or hospital information.",
    approach:
      "I built and productionized a document-intake pipeline that converts incoming materials into structured context for downstream workflows. The system was designed around operational reliability, clear handoffs, and the constraints of real clinical environments.",
    stack: "Python · LLM context engineering · Document processing · Production ML systems",
    result: "Pipeline serving 300+ patients and 50+ providers",
    ownership:
      "Pipeline architecture, implementation, productionization, and the context structures used to support model and care-team workflows.",
  },
  {
    number: "03",
    id: "mtl-case-study",
    label: "RESEARCH · ARXIV PREPRINT",
    title: "Teaching speech models to listen for articulation.",
    problem:
      "Phoneme recognition for non-native speech requires more than a generic acoustic representation. The research question was whether explicit articulatory supervision could help a model learn features that generalize better.",
    approach:
      "I developed a hierarchical multi-task architecture using WavLM representations and cross-attention. The model learns the primary recognition task alongside articulatory feature objectives, giving it an additional linguistic signal during training.",
    stack: "Python · PyTorch · WavLM · Cross-attention · Multi-task learning · Phoneme recognition",
    result: "13.47% phoneme error rate on L2-ARCTIC",
    ownership:
      "Architecture design, training and evaluation workflow, articulatory supervision strategy, and analysis of model performance.",
  },
];

const publications = [
  {
    year: "2026",
    type: "ARXIV PREPRINT",
    title: "Multi-Task Learning for Non-Canonical Phoneme Recognition via Articulatory Feature Decomposition",
    authors: "Sophia Riaz, Haoze Zheng, Amos Roche, Miyu Zhang, Anamika Ragu, Salvatore Penachio, Kaustav Mukherjee, Aneesh Jonelagadda",
    summary:
      "A linguistically structured approach to non-canonical phoneme recognition using articulatory feature decomposition, hierarchical multi-task learning, semi-supervised learning, and a cross-attention fusion module.",
    href: "https://arxiv.org/abs/2608.22273",
    action: "Read on arXiv",
  },
  {
    year: "2022",
    type: "CONFERENCE PAPER",
    title: "A Prognostic Machine Learning Framework and Algorithm for Predicting Long-term Behavioural Outcomes in Cancer Survivors",
    authors: "Amos Markus, Amos Roche, Chia-Kai Ngan, Yat-Tung Cheung, Katerina Prifti",
    summary:
      "A prognostic machine learning framework for predicting long-term behavioral outcomes in childhood cancer survivors.",
    href: "https://doi.org/10.5220/0010893700003123",
    action: "View publication",
  },
];

const skills = [
  "Python",
  "PyTorch",
  "Transformers",
  "Computer Vision",
  "Scikit-learn",
  "SQL",
  "OpenCV",
  "TTS",
  "WavLM",
  "Flow Matching",
  "State-Space Models",
  "RAG",
  "CUDA",
  "AWS / GCP",
  "PySpark",
  "Snowflake",
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#work">Skip to selected work</a>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Amos Roche home">
          amos roche<span> / </span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
          <a className="resume-nav" href="/Amos-Roche-Resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">AI ENGINEER & RESEARCHER · SAN FRANCISCO</p>
          <h1>
            Amos Roche<span className="name-dot">.</span>
          </h1>
          <p className="hero-intro">
            I&apos;m an AI engineer working across model development, applied research, and production systems. I build end-to-end solutions—from data and experimentation to deployment.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              Explore my work <span aria-hidden="true">↘</span>
            </a>
            <a className="text-link" href="mailto:ar4626@columbia.edu">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Current work and education">
          <p className="eyebrow"><span className="status-dot" /> CURRENTLY</p>
          <h2>Machine learning<br />research.<br /><em>Real-world systems.</em></h2>
          <div className="panel-row"><span>Building at</span><strong>Kaliber Labs ↗</strong></div>
          <div className="panel-row"><span>Previously</span><strong>Walmart · Fidelity</strong></div>
          <div className="panel-row"><span>Studied at</span><strong>Columbia · WPI</strong></div>
        </aside>
        <div className="hero-meta">
          <span>MODELS / RESEARCH / SYSTEMS</span>
          <span>Scroll to explore <b>↓</b></span>
        </div>
      </section>

      <section className="about-section shell" id="about">
        <div className="about-portrait">
          <img src="/amos-roche-portrait.png" alt="Amos Roche" width={1224} height={1285} loading="lazy" decoding="async" />
        </div>
        <div className="about-copy">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>Curious by default.<br /><em>Rigorous by choice.</em></h2>
          <p>
            At Kaliber Labs, I develop speech models and production AI pipelines.
            My background also spans advertising experimentation at Walmart,
            NLP and data engineering at Fidelity, and computer vision research
            for aerial localization. I studied data science at Columbia and WPI.
            Across these domains, I bring the same focus: rigorous experiments
            and useful, reliable systems.
          </p>
        </div>
        <div className="about-facts">
          <div><span>BASED IN</span><strong>San Francisco, CA</strong></div>
          <div><span>EDUCATION</span><strong>MS Data Science<br />Columbia University</strong></div>
          <div><span>EXPERIENCE ACROSS</span><strong>Speech · NLP · Computer vision<br />Experimentation · ML systems</strong></div>
        </div>
      </section>

      <section className="signal-band" aria-label="Focus areas">
        <div className="signal-track">
          <span>Model development</span><i>✳</i><span>Applied research</span><i>✳</i>
          <span>Production ML</span>
        </div>
      </section>

      <section className="work-section shell" id="work">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>From first principles<br />to <em>in production.</em></h2>
          <p className="section-note">A few things I&apos;ve built and researched.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <a className="project-card" key={project.number} href={`#${project.id}-case-study`}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <p className="project-tag">{project.tag}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
              <div className="project-result">
                <span>OUTCOME</span>
                <strong>{project.result}</strong>
              </div>
              <div className="project-arrow" aria-hidden="true">↗</div>
            </a>
          ))}
        </div>
      </section>

      <section className="case-studies shell" aria-label="Detailed case studies">
        <div className="case-studies-heading">
          <p className="eyebrow">CASE STUDIES</p>
          <p>Selected details are intentionally high-level where the work is confidential.</p>
        </div>
        {caseStudies.map((study) => (
          <article className="case-study" id={study.id} key={study.id}>
            <div className="case-study-topline">
              <span>{study.number}</span>
              <span>{study.label}</span>
            </div>
            <div className="case-study-grid">
              <h3>{study.title}</h3>
              <div className="case-study-details">
                <div><span>THE PROBLEM</span><p>{study.problem}</p></div>
                <div><span>MY APPROACH</span><p>{study.approach}</p></div>
                <div><span>TECHNICAL STACK</span><p>{study.stack}</p></div>
                <div><span>RESULT</span><p className="case-result">{study.result}</p></div>
                <div><span>WHAT I OWNED</span><p>{study.ownership}</p></div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="publications-section shell" id="publications">
        <div className="section-heading publication-heading">
          <p className="eyebrow">PUBLICATIONS</p>
          <h2>Research in<br /><em>the open.</em></h2>
          <p className="section-note">Papers on speech, language, and applied machine learning.</p>
        </div>
        <div className="publication-list">
          {publications.map((publication) => (
            <article className="publication-card" key={publication.title}>
              <div className="publication-year">{publication.year}</div>
              <div className="publication-content">
                <p className="publication-type">{publication.type}</p>
                <h3>{publication.title}</h3>
                <p className="publication-authors">{publication.authors}</p>
                <p className="publication-summary">{publication.summary}</p>
              </div>
              <a className="publication-link" href={publication.href} target="_blank" rel="noreferrer">
                {publication.action} <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section shell">
        <p className="eyebrow">THE TOOLKIT</p>
        <div className="skills-grid">
          {skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </section>

      <footer className="footer shell" id="contact">
        <div>
          <p className="eyebrow">HAVE A GOOD PROBLEM?</p>
          <h2>Let&apos;s make<br /><em>something useful.</em></h2>
        </div>
        <div className="footer-right">
          <a className="button button-light" href="mailto:ar4626@columbia.edu">Say hello <span aria-hidden="true">↗</span></a>
          <div className="footer-links">
            <a href="/Amos-Roche-Resume.pdf" download>Résumé ↓</a>
            <a href="https://www.linkedin.com/in/amos-roche">LinkedIn ↗</a>
            <a href="https://github.com/amosr2002">GitHub ↗</a>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 Amos Roche</span><span>Made with curiosity.</span></div>
      </footer>
    </main>
  );
}
