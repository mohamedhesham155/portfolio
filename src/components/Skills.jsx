import {
  skills,
  manufacturingKnowledge,
  certifications,
  languages,
} from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="eyebrow">Skills</div>
        <h2 className="section-title">Two toolkits, one problem set.</h2>

        <div className="skills__grid">
          {Object.entries(skills).map(([group, items]) => (
            <div className="tech-card skills__group" key={group}>
              <h3>{group}</h3>
              <div className="skills__items">
                {items.map((it) => (
                  <span className="tag" key={it}>
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills__lower">
          <div className="tech-card skills__block">
            <h3>Manufacturing knowledge</h3>
            <div className="skills__items">
              {manufacturingKnowledge.map((it) => (
                <span className="tag" key={it}>
                  {it}
                </span>
              ))}
            </div>
          </div>

          <div className="tech-card skills__block">
            <h3>Certifications</h3>
            <ul className="skills__list">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <h3 style={{ marginTop: 20 }}>Languages</h3>
            <ul className="skills__list">
              {languages.map((l) => (
                <li key={l.name}>
                  {l.name} <span className="text-muted">— {l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
