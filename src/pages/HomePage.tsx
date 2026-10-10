import "../index.css";
import FigmaBackground from "../FigmaBackground";

function HomePage() {
  return (
    <main className="domains1">
      <div className="domains-layout">
        <FigmaBackground />
        <div className="domains-art-space" aria-hidden="true" />

        <section className="uiux-card">
          <div className="domains-card-top">
            <h1>UI/UX</h1>
            <span className="domains-arrow">↗</span>
          </div>
          <p>
            Designing intuitive and engaging digital experiences.
            <br />
            We transform ideas into seamless interfaces through research,
            creativity, and design.
          </p>
          <h2>What we do:</h2>
          <ul>
            <li>User research</li>
            <li>Wireframing &amp; Prototyping</li>
            <li>Interface Design</li>
            <li>Design System</li>
          </ul>
        </section>

        <section className="graphic-card">
          <div className="domains-card-top">
            <h1>02</h1>
            <span className="domains-arrow">↗</span>
          </div>
          <h2>Graphic Design</h2>
        </section>
      </div>
    </main>
  );
}

export default HomePage;