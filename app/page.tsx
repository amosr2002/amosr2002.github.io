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
    <main id="top" className="page">
      <a className="skip-link" href="#about">Skip to content</a>
      <nav className="nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top">Amos Roche</a>
        <div className="nav-links">
          <a href="#about">About</a><a href="#work">Work</a>
          <a href="#publications">Publications</a><a href="#contact">Contact</a>
          <a href="/Amos-Roche-Resume.pdf" target="_blank" rel="noreferrer">Résumé</a>
        </div>
      </nav>

      <header className="intro">
        <p className="location">AI engineer & researcher · San Francisco</p>
        <h1>Amos Roche</h1>
        <p className="intro-text">I work on machine learning, from the first experiment to the system that runs in production.</p>
      </header>

      <section id="about" className="about">
        <div className="about-copy">
          <h2>About me</h2>
          <p>I&apos;m an AI engineer at <strong>Kaliber Labs</strong>, where I develop models and production AI pipelines. My recent work includes speech generation, phoneme recognition, and clinical document processing.</p>
          <p>Before that, I worked on advertising experimentation at <strong>Walmart</strong>, NLP and data engineering at <strong>Fidelity</strong>, and computer vision for aerial localization. I&apos;m interested in ML problems across domains, and in the work it takes to make a promising model useful.</p>
          <p>I studied data science at <strong>Columbia University</strong> (MS) and <strong>Worcester Polytechnic Institute</strong> (BS).</p>
          <div className="personal-links"><a href="mailto:ar4626@columbia.edu">Email</a><a href="https://github.com/amosr2002">GitHub</a><a href="https://www.linkedin.com/in/amos-roche">LinkedIn</a><a href="/Amos-Roche-Resume.pdf" download>Download résumé</a></div>
        </div>
        <figure className="portrait"><div className="portrait-frame"><img src="/amos-roche-portrait.png" alt="Amos Roche" width={1224} height={1285} decoding="async" /></div><figcaption>Based in San Francisco, California.</figcaption></figure>
      </section>

      <section id="work" className="section">
        <div className="section-heading"><h2>Selected work</h2><span>Engineering & research</span></div>
        {projects.map((project, index) => {
          const study = caseStudies[index];
          return <article className="work-entry" id={`${project.id}-case-study`} key={project.id}>
            <div className="entry-heading"><h3>{project.title}</h3><span className="result">{project.result}</span></div>
            <p>{project.description}</p>
            <details>
              <summary>More about this project</summary>
              <div className="project-details">
                <p className="confidential-note">{study.label.includes("CONFIDENTIAL") ? "Kaliber Labs · Details kept high-level for confidentiality." : "Research · arXiv preprint"}</p>
                <h4>Problem</h4><p>{study.problem}</p>
                <h4>Approach</h4><p>{study.approach}</p>
                <h4>My contribution</h4><p>{study.ownership}</p>
                <h4>Tools & methods</h4><p>{study.stack}</p>
                <h4>Result</h4><p>{study.result}</p>
              </div>
            </details>
          </article>;
        })}
      </section>

      <section id="publications" className="section">
        <div className="section-heading"><h2>Publications</h2><span>2022–2026</span></div>
        {publications.map((publication) => <article className="publication" key={publication.title}>
          <span className="publication-year">{publication.year}</span>
          <div><h3><a href={publication.href} target="_blank" rel="noreferrer">{publication.title}</a></h3>
            <p className="authors">{publication.authors}</p>
            <p>{publication.summary}</p>
            <a className="paper-link" href={publication.href} target="_blank" rel="noreferrer">{publication.action} ↗</a>
          </div>
        </article>)}
      </section>

      <section className="section tools"><h2>Tools & methods</h2><p>{skills.join(" · ")}</p></section>
      <footer id="contact">
        <h2>Get in touch</h2>
        <p>For opportunities, research, or a conversation about what you&apos;re building:</p>
        <a className="email" href="mailto:ar4626@columbia.edu">ar4626@columbia.edu</a>
        <div className="footer-bottom"><span>© 2026 Amos Roche</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
