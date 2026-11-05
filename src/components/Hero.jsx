import { FiArrowDown, FiArrowUpRight, FiDownload } from "react-icons/fi";
import usePortfolio from "../lib/usePortfolio";

export default function Hero() {
  const { aboutMe, ui, resumeLink, socialMedia, lang } = usePortfolio();
  const en = lang === "en";
  return <section id="home" className="editorial-hero"><div className="container hero-layout">
    <div className="hero-main"><p className="editorial-kicker">{en ? "STATISTICS  /  DATA SCIENCE  /  QUANTITATIVE RESEARCH" : "ESTADÍSTICA  /  CIENCIA DE DATOS  /  INVESTIGACIÓN CUANTITATIVA"}</p>
      <h1>{aboutMe.name}</h1><p className="hero-statement">{en ? "Turning data into" : "De los datos al"}<br/><em>{en ? "understanding." : "conocimiento."}</em></p>
      <p className="hero-summary">{aboutMe.intro}</p>
      <div className="hero-actions"><a className="button button-primary" href={resumeLink} download="Wilder_Espinoza_CV_ES.pdf" aria-label={`${ui.cvCta} (${ui.cvNote})`}><FiDownload aria-hidden="true"/>{ui.cvCta}<span className="pdf-badge">ES</span></a>{socialMedia.filter(s => ["github", "linkedin"].includes(s.id)).map(s => <a className="text-link" key={s.id} href={s.link} target="_blank" rel="noopener noreferrer">{s.name}<FiArrowUpRight aria-hidden="true"/></a>)}</div>
    </div><aside className="hero-aside"><span className="aside-label">{en ? "AREAS OF FOCUS" : "ÁREAS DE ENFOQUE"}</span><p>Statistical Learning<br/>Credit Risk Modeling<br/>Machine Learning</p><div className="aside-location"><span>{en ? "BASED IN" : "UBICACIÓN"}</span><strong>{aboutMe.location}</strong></div><a href="#about">{en ? "Explore profile" : "Explorar perfil"}<FiArrowDown aria-hidden="true"/></a></aside>
  </div><div className="container hero-bottom"><span>WILDER ESPINOZA / PORTFOLIO</span><span>STATISTICS · RESEARCH · COMPUTATION</span><span>01 — 06</span></div></section>;
}
