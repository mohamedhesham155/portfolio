import { profile, dieDraws } from "../data/content";
import WireDrawDiagram from "./WireDrawDiagram";
import headshot from "../assets/mohamed.jpg";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="eyebrow">Available for work — Alexandria, Egypt</div>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__roles">
            {profile.roles.join("  //  ")}
          </p>
          <p className="hero__tagline">{profile.tagline}</p>
          <div className="hero__ctas">
            <a className="btn btn-primary" href="#projects">
              View projects
            </a>
            <a className="btn" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__photo-frame">
            <img src={headshot} alt={profile.name} />
          </div>
        </div>
      </div>

      <div className="hero__diagram">
        <div className="container">
          <div className="eyebrow">Wire drawing — reduction schedule</div>
          <WireDrawDiagram draws={dieDraws} />
        </div>
      </div>
    </section>
  );
}
