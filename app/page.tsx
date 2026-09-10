import type { Metadata } from "next";
import ThemeToggle from "./theme-toggle";
import ProjectThumbnail from "./project-thumbnail";
import TtsArchitectureEvolution from "./tts-architecture-evolution";

export const metadata: Metadata = {
  title: "Amos Roche — ML Engineer and Researcher",
  description:
    "Amos Roche is an ML engineer and researcher working across model development, applied research, and production machine learning systems.",
};

const projects = [
  {
    number: "01",
    id: "tts",
    title: "Expressive speech systems",
    tag: "SPEECH / GENERATIVE AI",
    description:
      "An expressive TTS system built around natural conversational speech, precise prosody, and stable long-form delivery. The work spans a purpose-built labeling studio, low-latency prosody research, and a CosyVoice-style conditional flow-matching pipeline.",
    result: "10M+ clips assembled",
  },
  {
    number: "02",
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
      "Natural delivery depends on timing, pause structure, vocal events, emotion, and small changes in pitch and energy. Standard speech datasets rarely capture these details well enough to train for conversational expression, and long-form generation can also introduce speaker drift and discontinuities between streamed chunks.",
    approach:
      "I built a reviewable dataset workflow for timestamped phonemes, paralinguistic events, speech behaviors, and emotion labels. In parallel, I explored a FastPitch plus state-space prosody module for lower-latency, frame-level control, then moved toward a two-stage CosyVoice-style architecture in which semantic speech tokens feed chunk-aware conditional flow matching for acoustic generation.",
    stack: "Python · PyTorch · Audio preprocessing · Dataset annotation · Forced alignment · Conditional flow matching · State-space models",
    result: "10M+ speech clips assembled for training",
    ownership:
      "Designed and built the Expressive Speech Dataset Studio, assembled and curated the training corpus, and contributed to architecture research, experiment design, and evaluation across the speech pipeline.",
  },
  {
    number: "02",
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
    authors: "Anneliese Markus, Amos Roche, Chun-Kit Ngan, Yin-Ting Cheung, Kristi Prifti",
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
          <a href="/Amos-Roche-Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          <ThemeToggle />
        </div>
      </nav>

      <div className="hero-layout">
        <header className="intro">
          <p className="location">ML Engineer and Researcher · San Francisco</p>
          <h1>Amos Roche</h1>
          <p className="intro-text">I build and evaluate ML systems, from research prototypes to deployed applications.</p>
        </header>
        <aside className="profile" aria-label="Career summary">
          <figure className="portrait"><div className="portrait-frame"><img src="/amos-roche-portrait-selected.png" alt="Amos Roche" width={1222} height={1287} decoding="async" /></div></figure>
          <dl className="career-summary">
            <div><dt>Now</dt><dd>Kaliber Labs</dd></div>
            <div><dt>Previously</dt><dd>Walmart · Fidelity</dd></div>
            <div><dt>Education</dt><dd><abbr title="Columbia University, Master of Science in Data Science">Columbia MS</abbr> · <abbr title="Worcester Polytechnic Institute, Bachelor of Science in Data Science">WPI BS</abbr></dd></div>
          </dl>
        </aside>
      </div>

      <section id="about" className="about">
        <div className="about-copy">
          <h2>About me</h2>
          <p>I&apos;m an ML engineer and researcher developing models and production AI pipelines. My recent work includes speech generation, phoneme recognition, and clinical document processing.</p>
          <p>My background spans statistical analysis, ML research, and LLM and computer-vision pipelines across domains including MLB sports analytics, healthcare, aerial localization for U.S. Army DEVCOM, and finance. I care about turning strong technical work into clear, useful experiences that stakeholders and customers want to adopt.</p>
          <div className="personal-links"><a href="mailto:ar4626@columbia.edu">Email</a><a href="https://github.com/amosr2002">GitHub</a><a href="https://www.linkedin.com/in/amos-roche">LinkedIn</a><a href="/Amos-Roche-Resume.pdf" download>Download Resume</a></div>
        </div>
      </section>

      <section id="work" className="section">
        <div className="section-heading"><h2>Selected work</h2><span>Engineering & research</span></div>
        {projects.map((project, index) => {
          const study = caseStudies[index];
          return <article className="work-entry" id={`${project.id}-case-study`} key={project.id}>
            <ProjectThumbnail kind={project.id as "tts" | "mtl"} />
            <div className="work-body">
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
                {project.id === "tts" && <TtsArchitectureEvolution />}
                {project.id === "tts" && <figure className="tts-studio-preview">
                  <img src="/tts-dataset-studio.png" alt="Expressive Speech Dataset Studio showing waveform-aligned phonemes, vocal events, speech behaviors, and emotion annotations" width={2048} height={1128} loading="lazy" decoding="async" />
                  <figcaption>Expressive Speech Dataset Studio: a human review workflow for waveform-aligned phonemes, vocal events, speech behaviors, and emotion labels.</figcaption>
                </figure>}
              </div>
            </details>
            </div>
          </article>;
        })}
        <article className="work-entry" id="aerial-localization">
          <ProjectThumbnail kind="aerial" />
          <div className="work-body">
          <div className="entry-heading"><h3>Aerial image understanding and localization</h3><span className="result">Computer vision</span></div>
          <p className="confidential-note">Undergraduate capstone · WPI × DEVCOM · 2023</p>
          <p>Developed a computer vision pipeline for GPS-denied aerial localization, using semantic segmentation to identify geographic regions and a neural network to estimate positional changes between aerial images.</p>
          <a className="paper-link" href="https://digital.wpi.edu/concern/student_works/hx11xj644?locale=en" target="_blank" rel="noreferrer">Read project report ↗</a>
                  </div>
        </article>
        <article className="work-entry" id="market-forecasting">
          <ProjectThumbnail kind="market" />
          <div className="work-body">
          <div className="entry-heading"><h3>Stock market forecasting</h3><span className="result">Time-series modeling</span></div>
          <p className="confidential-note">Columbia University capstone with JPMorgan Chase &amp; Co.</p>
          <p>Collaborated on a forecasting system using historical market data, trading volumes, options pricing, and machine learning. Explored traditional market analysis, the Black–Scholes model, deep learning, and Prophet to investigate patterns in stock market data.</p>
          <a className="paper-link" href="/reports/stock-market-forecasting-final-report.pdf" target="_blank" rel="noreferrer">Read final report (PDF) ↗</a>
                  </div>
        </article>
        <article className="work-entry" id="sports-betting-analytics">
          <ProjectThumbnail kind="sports" />
          <div className="work-body">
          <div className="entry-heading"><h3>Sports betting analytics</h3><span className="result">Independent project</span></div>
          <p>Analyzed sportsbook pricing, compared expected value across markets, tracked closing-line value, and applied the Kelly criterion to bankroll allocation. Identified arbitrage and middling opportunities and evaluated risk across different bet types.</p>
          <details className="sports-results">
            <summary>View Pikkit results</summary>
            <figure className="sports-results-image">
              <img src="/pikkit-results.png" alt="Original Pikkit screenshot showing $2,989.64 profit, 22.99% ROI, and a 127–127–10 record, updated September 7, 2026." width={768} height={922} loading="lazy" decoding="async" />
              <figcaption>Pikkit · All-time results as of September 7, 2026</figcaption>
            </figure>
          </details>
                  </div>
        </article>
        <article className="work-entry" id="covid19-symptom-research">
          <ProjectThumbnail kind="anomaly" />
          <div className="work-body">
            <div className="entry-heading"><h3>Anomaly detection in COVID-19 symptom reports</h3><span className="result">Time-series research</span></div>
            <p className="confidential-note">Independent Study Research · Worcester Polytechnic Institute</p>
            <p className="authors">Amos Roche and Matthew Finn</p>
            <p>An exploratory study of hourly COVID-19 symptom reports, combining principal component analysis, LSTM sequence reconstruction, and overlapping-window voting to identify unusual reporting patterns.</p>
            <a className="paper-link" href="/reports/covid19-symptom-anomaly-detection-roche-finn.pdf" target="_blank" rel="noreferrer">Read paper (PDF) ↗</a>
          </div>
        </article>
      </section>

      <section id="publications" className="section">
        <div className="section-heading"><h2>Publications</h2><span>2022–2026</span></div>
        {publications.map((publication) => <article className="publication" key={publication.title}>
          <span className="publication-year">{publication.year}</span>
          <div>
            <h3><a href={publication.href} target="_blank" rel="noreferrer">{publication.title}</a></h3>
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
