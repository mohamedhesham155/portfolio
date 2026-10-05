import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="eyebrow">Experience</div>
        <h2 className="section-title">On the floor.</h2>
        <div className="timeline">
          {experience.map((e) => (
            <div className="timeline__item" key={e.role + e.org}>
              <div className="timeline__marker" aria-hidden="true" />
              <div className="tech-card timeline__card">
                <div className="timeline__head">
                  <div>
                    <h3>{e.role}</h3>
                    <p className="timeline__org">{e.org}</p>
                  </div>
                  <span className="tag">{e.period}</span>
                </div>
                <p className="timeline__summary">{e.summary}</p>
                <ul>
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
