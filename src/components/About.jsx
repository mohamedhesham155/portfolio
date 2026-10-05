import { about, education } from "../data/content";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="eyebrow">About</div>
        <h2 className="section-title">Engineering the line, then coding around it.</h2>
        <div className="about__grid">
          <div className="about__text">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="about__focus">
              {about.focus.map((f) => (
                <span className="tag" key={f}>
                  {f}
                </span>
              ))}
            </div>
          </div>
          <div className="tech-card about__edu">
            <div className="eyebrow" style={{ marginBottom: 12 }}>
              Education
            </div>
            <p className="about__edu-degree">{education.degree}</p>
            <p className="about__edu-school">{education.school}</p>
            <div className="about__edu-project">
              <span className="tag">Grade {education.grade}</span>
              <p>{education.project}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
