import { FiBookOpen } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import usePortfolio from "../lib/usePortfolio";

export default function Education() {
  const { educationList, achievements, ui } = usePortfolio();
  return (
    <section id="education" className="section education-section"><div className="container">
      <SectionHeading eyebrow={ui.educationEyebrow} title={ui.educationTitle} description={ui.educationIntro} />
      <div className="education-grid">{educationList.map((item) => <article className="education-card" key={item.id}>
        <div className="education-top"><img src={item.icon} alt="" width="56" height="56" loading="lazy" /><time>{item.duration}</time></div>
        <h3>{item.title}</h3><p className="education-degree">{item.degree}</p><p>{item.content}</p>
      </article>)}</div>
      <div className="certifications" id="achievements"><h3>{ui.certificatesTitle}</h3><div className="certification-grid">{achievements.map((item) => <article className="certification-card" key={item.id}><img src={item.icon} alt="" width="44" height="44" loading="lazy" /><div><h4>{item.event}</h4><p>{item.position}</p></div></article>)}</div></div>
      <p className="language-note"><FiBookOpen aria-hidden="true" /><strong>{ui.languagesTitle}</strong><span>{ui.languages}</span></p>
    </div></section>
  );
}
