import { useEffect, useState } from "react";
import { FiArrowUpRight, FiChevronDown, FiGithub, FiLayers, FiTarget, FiTrendingUp } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import usePortfolio from "../lib/usePortfolio";

function ProjectCard({ project, ui }) {
  const Icon = project.category === "spatial" ? FiTarget : project.category === "ai" ? FiLayers : FiTrendingUp;
  return (
    <article id={`project-${project.id}`} className={`project-card${project.featured ? " featured-project" : ""}`} data-category={project.category}>
      <div className="project-copy">
        <div className="project-topline"><span className={`project-symbol symbol-${project.category}`}><Icon aria-hidden="true" /></span><span className="eyebrow">{project.featured ? ui.featured : project.kind}</span>{project.date && <span className="project-date">{project.date}</span>}</div>
        <h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.content}</p>
        {!project.featured && project.metrics && <div className="project-single-metric"><strong>{project.metrics[0].value}</strong><span>{project.metrics[0].label}</span></div>}
        <ul className="tech-list" aria-label={project.title + " — stack"}>{project.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
        {project.details && <details className="project-details"><summary>{ui.details}<FiChevronDown aria-hidden="true" /></summary><ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></details>}
        <div className="project-links">
          {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${ui.code}: ${project.title}`}><FiGithub aria-hidden="true" />{ui.code}<FiArrowUpRight aria-hidden="true" /></a>}
          {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`${ui[project.linkType]}: ${project.title}`}>{ui[project.linkType]}<FiArrowUpRight aria-hidden="true" /></a>}
        </div>
      </div>
      {project.featured && <aside className="project-evidence" aria-label={ui.details}>
        <span className="evidence-caption">LENDING CLUB / OUT-OF-TIME TEST</span>
        {project.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
        <span className="evidence-footer">PYTHON → DATABRICKS → DECISION</span>
      </aside>}
    </article>
  );
}

export default function Projects() {
  const { projects, ui } = usePortfolio();
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    const revealLinkedProject = () => {
      const id = window.location.hash.slice(1);
      if (!projects.some((project) => `project-${project.id}` === id)) return;
      setFilter("all");
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: "start" }));
    };
    revealLinkedProject();
    window.addEventListener("hashchange", revealLinkedProject);
    return () => window.removeEventListener("hashchange", revealLinkedProject);
  }, [projects]);
  const visible = projects.filter((project) => filter === "all" || project.category === filter);
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeading eyebrow={ui.projectsEyebrow} title={ui.projectsTitle} description={ui.projectsIntro} />
        <div className="project-toolbar"><div className="project-filters" role="group" aria-label={ui.filtersLabel}>
          {ui.filters.map((item) => <button key={item.id} type="button" aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>{item.label}</button>)}
        </div><p className="project-count" role="status">{visible.length} {ui.projectCount}</p></div>
        <div className="projects-grid">{visible.map((project) => <ProjectCard key={project.id} project={project} ui={ui} />)}</div>
      </div>
    </section>
  );
}
