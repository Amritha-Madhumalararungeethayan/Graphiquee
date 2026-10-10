import { Link } from "react-router-dom";
import "./Domains2Page.css";

function FigmaMark() {
  return (
    <svg className="domains2-figma-mark" viewBox="0 0 40 60" aria-hidden="true">
      <rect x="2" y="2" width="18" height="18" rx="9" fill="#f24e1e" />
      <rect x="20" y="2" width="18" height="18" rx="9" fill="#ff7262" />
      <rect x="2" y="20" width="18" height="18" rx="9" fill="#a259ff" />
      <circle cx="29" cy="29" r="9" fill="#1abcfe" />
      <rect x="2" y="38" width="18" height="18" rx="9" fill="#0acf83" />
    </svg>
  );
}

export default function Domains2Page() {
  return (
    <main className="domains2-page">
      <div className="domains2-grid" aria-hidden="true" />
      <div className="domains2-stars" aria-hidden="true" />

      <h1 className="domains2-title">WHAT DO WE DO?</h1>

      <section className="domains2-feature" aria-label="UI/UX integration">
        <h2 className="domains2-integrate">INTEGRATE</h2>
        <div className="domains2-orbit" aria-hidden="true">
          <svg className="domains2-orbit-ticks" viewBox="0 0 463 478" role="presentation">
            {Array.from({ length: 40 }, (_, index) => (
              <line
                key={index}
                x1="231.5"
                y1="14"
                x2="231.5"
                y2="70"
                transform={`rotate(${index * 9} 231.5 239)`}
              />
            ))}
          </svg>
          <div className="domains2-orbit-center">
            <FigmaMark />
            <span>UI/UX</span>
          </div>
        </div>
        <p className="domains2-description">
          Hardware, sensors, spatial design and UX combine into one seamless
          system engineered for reliability and wow
        </p>
      </section>

      <Link className="domains2-projects-link" to="/projects">
        CHECK OUT OUR
        <br />
        PROJECTS
      </Link>
      <img className="domains2-project-art" src="/image.png" alt="" />
    </main>
  );
}
