import "./Project2.css";
import CurvedGrid from "./CurvedGrid";

const particles = [
  { x: 212, y: 760, s: 9, c: "#78797c" },
  { x: 1230, y: 967, s: 14, c: "#78797c" },
  { x: 1687, y: 579, s: 14, c: "#78797c" },
  { x: 944, y: 858, s: 14, c: "#78797c" },
  { x: 1524, y: 45, s: 14, c: "#78797c" },
  { x: 386, y: 130, s: 8, c: "#78797c" },
  { x: 1106, y: 482, s: 10, c: "#78797c" },
  { x: 416, y: 960, s: 14, c: "#169b99" },
  { x: 1715, y: 70, s: 11, c: "#169b99" },
  { x: 1410, y: 898, s: 11, c: "#169b99" },
  { x: 84, y: 524, s: 9, c: "#169b99" },
  { x: 766, y: 639, s: 15, c: "#169b99" },
  { x: 878, y: 274, s: 14, c: "#281f4a" },
  { x: 1701, y: 804, s: 14, c: "#281f4a" },
  { x: 555, y: 767, s: 14, c: "#281f4a" },
  { x: 1504, y: 609, s: 40, c: "#281f4a" },
  { x: 697, y: 0, s: 14, c: "#281f4a" },
  { x: 1273, y: 448, s: 14, c: "#152f7b" },
  { x: 144, y: 933, s: 11, c: "#152f7b" },
  { x: 772, y: 181, s: 11, c: "#152f7b" },
  { x: 1821, y: 274, s: 14, c: "#152f7b" },
  { x: 1472, y: 403, s: 14, c: "#152f7b" },
  { x: 84, y: 136, s: 32, c: "#152f7b" },
];

const projectParticles = particles.flatMap((particle) => [
  particle,
  { ...particle, y: particle.y + 1095 },
]);

const description =
  "Designing intuitive and engaging digital experiences. We transform ideas into seamless interfaces through research, creativity, and design.";

function ParticleField() {
  return (
    <div className="project2-particle-field" aria-hidden="true">
      {projectParticles.map((particle, index) => (
        <span
          key={index}
          className="project2-particle"
          style={{
            left: `${(particle.x / 1920) * 100}%`,
            top: `${(particle.y / 2160) * 100}%`,
            width: particle.s,
            height: particle.s,
            backgroundColor: particle.c,
          }}
        />
      ))}
    </div>
  );
}

export default function Project2() {
  return (
    <section className="project2">
      <div className="project2-background" aria-hidden="true">
        <div className="project2-grid-panel project2-grid-panel-top">
          <CurvedGrid />
        </div>
        <div className="project2-grid-panel project2-grid-panel-bottom">
          <CurvedGrid />
        </div>
        <ParticleField />
      </div>

      <div className="project2-content">
        <header className="project2-header">
          <span className="project2-name">PROJECT NAME</span>
          <span className="project2-year">YEAR - 2022</span>
        </header>

        <div className="project2-image" role="img" aria-label="Project image placeholder">
          <span>Project image</span>
        </div>

        <div className="project2-concept">
          <h2>CONCEPT</h2>
          <p>
            {description} {description} {description}
          </p>
        </div>
      </div>
    </section>
  );
}
