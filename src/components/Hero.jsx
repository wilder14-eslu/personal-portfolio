import { FiArrowDown, FiArrowUpRight, FiDownload, FiMapPin } from "react-icons/fi";
import profile from "../assets/profile.jpg";
import usePortfolio from "../lib/usePortfolio";

export default function Hero() {
  const { aboutMe, ui, resumeLink } = usePortfolio();
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span className="status-dot" />{ui.heroLabel}</p>
            <h1>{ui.headline}<br /><span>{ui.headlineAccent}</span></h1>
            <p className="hero-intro" data-testid="hero-intro">{aboutMe.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">{ui.projectsCta}<FiArrowDown aria-hidden="true" /></a>
              <a className="button button-outline" href={resumeLink} download="Wilder_Espinoza_CV_ES.pdf" aria-label={`${ui.cvCta} (${ui.cvNote})`}>
                <FiDownload aria-hidden="true" />{ui.cvCta}<span className="pdf-badge">ES</span>
              </a>
            </div>
            <div className="hero-person">
              <img src={profile} alt={aboutMe.name} width="48" height="48" fetchPriority="high" />
              <div><p className="person-name">{aboutMe.name}</p><p className="person-location"><FiMapPin aria-hidden="true" />{aboutMe.location}<span aria-hidden="true">·</span>UNMSM</p></div>
            </div>
          </div>
          <div className="decision-card">
            <div className="case-topline"><span className="eyebrow">{ui.caseLabel}</span><span className="case-year">2026</span></div>
            <h2>{ui.caseTitle}</h2>
            <p className="case-subtitle">{ui.caseSubtitle}</p>
            <div className="decision-flow" aria-label={ui.focus}>
              {ui.steps.map((step, index) => <div key={step}><span className="step-number">0{index + 1}</span><span>{step}</span>{index < 2 && <span className="flow-arrow" aria-hidden="true">→</span>}</div>)}
            </div>
            <figure className="credit-chart" aria-labelledby="chart-title">
              <figcaption id="chart-title">{ui.chartTitle}</figcaption>
              <div className="chart-row"><div><span>{ui.baseline}</span><strong>15.5%</strong></div><div className="chart-track"><span className="chart-bar baseline-bar" /></div></div>
              <div className="chart-row"><div><span>{ui.approved}</span><strong>9.6%</strong></div><div className="chart-track"><span className="chart-bar approved-bar" /></div></div>
            </figure>
            <div className="case-metrics"><div><strong>61.3<span>%</span></strong><span>{ui.caseMetric}</span></div><div><strong>887<span>k</span></strong><span>{ui.caseData}</span></div></div>
            <p className="case-note">{ui.chartNote}</p>
            <a href="#project-credit-risk" className="case-link">{ui.caseLink}<FiArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="impact-strip">
          <div className="impact-intro"><span className="eyebrow">{ui.impactLabel}</span><span>{ui.impactContext}</span></div>
          {ui.impact.map((item) => <div className="impact-item" key={item.value}><strong>{item.value}</strong><div><p>{item.label}</p><span>{item.note}</span></div></div>)}
        </div>
      </div>
    </section>
  );
}
