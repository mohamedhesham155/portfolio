import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="footer__location">{profile.location}</span>
      </div>
    </footer>
  );
}
