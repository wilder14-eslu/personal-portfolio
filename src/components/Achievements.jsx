import { FiArrowUpRight, FiAward } from "react-icons/fi";
import usePortfolio from "../lib/usePortfolio";

export default function Achievements() {
  const { ui, projects } = usePortfolio();
  return (
    <section className="award-section" aria-labelledby="award-title"><div className="container"><div className="award-banner">
      <div className="award-icon"><FiAward aria-hidden="true" /></div>
      <div className="award-copy"><p className="eyebrow">{ui.awardLabel}</p><h2 id="award-title">{ui.awardTitle}</h2><p>{ui.awardDescription}</p></div>
      <div className="award-action"><span>{ui.awardDate}</span><a href={projects.find((project) => project.id === "orchestrate").github} target="_blank" rel="noopener noreferrer">{ui.awardLink}<FiArrowUpRight aria-hidden="true" /></a></div>
    </div></div></section>
  );
}
