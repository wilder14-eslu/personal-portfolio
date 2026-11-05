import { FiArrowUpRight, FiCheck, FiMapPin } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import usePortfolio from "../lib/usePortfolio";

export default function SkillsAndExperience() {
  const { experiences, skills, ui } = usePortfolio();
  return (
    <section id="skills" className="section experience-section"><div className="container">
      <SectionHeading eyebrow={ui.experienceEyebrow} title={ui.experienceTitle} description={ui.experienceIntro} />
      <div className="experience-layout">
        <div className="experience-column">
          <p className="eyebrow">{ui.workLabel}</p>
          {experiences.map((experience) => <article className="experience-card" key={experience.organisation}>
            <div className="company-row"><div className="company-mark" aria-hidden="true">m.</div><div><h3>{experience.organisation}</h3><span>{experience.industry}</span></div><FiArrowUpRight aria-hidden="true" /></div>
            <h4>{experience.title}</h4><p className="experience-focus">{experience.focus}</p>
            <p className="experience-date"><time>{experience.duration}</time><span><FiMapPin aria-hidden="true" />{experience.location}</span></p>
            <ul className="experience-results">{experience.content.map((result) => <li key={result}><FiCheck aria-hidden="true" /><span>{result}</span></li>)}</ul>
          </article>)}
        </div>
        <div className="skills-column"><h3>{ui.skillsTitle}</h3><p>{ui.skillsIntro}</p>
          <div className="skills-grid">{skills.map((skill, index) => <article className="skill-group" key={skill.title}><span className="skill-index">0{index + 1}</span><h4>{skill.title}</h4><ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul>{skill.note && <p className="skill-note">{skill.note}</p>}</article>)}</div>
        </div>
      </div>
    </div></section>
  );
}
