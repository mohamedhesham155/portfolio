import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="eyebrow">Projects</div>
        <h2 className="section-title">Software built for the shop floor.</h2>
        <div className="projects__grid">
          {projects.map((p) => (
            <div className="tech-card project-card" key={p.name}>
              <div className="project-card__spec">{p.spec}</div>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <div className="project-card__tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
