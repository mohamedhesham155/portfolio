import { profile, interests } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="eyebrow">Contact</div>
        <h2 className="section-title">Let's build something that runs the line.</h2>
        <p className="contact__lede">
          Open to roles and projects across industrial automation, manufacturing
          software, MES/ERP integration, and applied data work.
        </p>
        <div className="contact__interests">
          {interests.map((i) => (
            <span className="tag" key={i}>
              {i}
            </span>
          ))}
        </div>
        <div className="contact__links">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          {profile.linkedin && (
            <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
          {profile.github && (
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
