import { Link } from "react-router-dom";
import "./LandingPage.css";

const apps = [
  { name: "Photo shop", className: "photoshop", mark: "Ps" },
  { name: "Figma", className: "figma", mark: "◖" },
  { name: "Procreate", className: "procreate", mark: "✿" },
  { name: "Blender", className: "blender", mark: "◉" },
  { name: "Procreate", className: "procreate-two", mark: "✿" },
];

const copy = "We unite talented designers and creative minds to craft impactful visual solutions, blending creativity, strategy, and innovation across every project.";

export default function LandingPage() {
  return <main className="landing-page">
    <div className="landing-grid" aria-hidden="true" />
    <div className="landing-stars" aria-hidden="true" />
    <header className="landing-brand"><img src="/landing-glyph.png" alt=""/><div><h1>GRAPHIQUE</h1><p>We are the designing club</p></div></header>
    <section className="landing-hero" aria-label="Design tools and studio introduction">
      {apps.map((app) => <div className={`landing-tool ${app.className}`} key={app.className}><span className="tool-mark">{app.mark}</span>{app.name}</div>)}
      <img className="landing-emblem" src="/landing-emblem.png" alt="Graphique orbital monogram" />
      <p className="landing-intro">{copy}</p>
    </section>
    <section className="landing-network" aria-label="Building Networks">
      <div className="landing-clouds" aria-hidden="true" />
      <img className="landing-orb" src="/landing-v7-orb.png" alt="" />
      <div className="landing-network-copy">
        {[0, 1, 2].map((item) => <article key={item}><h2>Building Networks</h2><p>{copy}</p></article>)}
      </div>
    </section>
    <a href="#landing-network" className="landing-scroll" aria-label="Scroll to network section">⌄</a>
    <span id="landing-network" className="landing-anchor" />
    <Link to="/graphique" className="landing-store-link">EXPLORE THE STORE <span>↗</span></Link>
  </main>;
}
