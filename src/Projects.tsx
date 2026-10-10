import { useEffect, useRef, useState } from "react";
import "./Projects.css";

const glows = [
  { id: "ellipse-29", width: 14, height: 14, left: 978, top: 491, color: "#169b99" },
  { id: "ellipse-31", width: 9, height: 8, left: 980, top: 425, color: "#169b99" },
  { id: "ellipse-26", width: 15, height: 16, left: 1034, top: 499, color: "#169b99" },
  { id: "ellipse-35", width: 11, height: 10, left: 867, top: 374, color: "#152f7b" },
  { id: "ellipse-32", width: 32, height: 32, left: 905, top: 443, color: "#152f7b" },
  { id: "ellipse-36", width: 9, height: 9, left: 971, top: 352, color: "#78797c" },
  { id: "ellipse-37", width: 8, height: 8, left: 897, top: 276, color: "#78797c" },
  { id: "ellipse-38", width: 10, height: 10, left: 980, top: 275, color: "#78797c" },
  { id: "ellipse-39", width: 14, height: 14, left: 938, top: 389, color: "#169b99" },
  { id: "ellipse-40", width: 9, height: 8, left: 940, top: 323, color: "#169b99" },
  { id: "ellipse-41", width: 15, height: 16, left: 994, top: 387, color: "#169b99" },
  { id: "ellipse-42", width: 11, height: 10, left: 827, top: 262, color: "#152f7b" },
  { id: "ellipse-43", width: 32, height: 32, left: 865, top: 331, color: "#152f7b" },
  { id: "ellipse-44", width: 9, height: 9, left: 804.11, top: 906.86, color: "#78797c", rotate: 178.48 },
  { id: "ellipse-45", width: 8, height: 8, left: 881.12, top: 981.87, color: "#78797c", rotate: 178.48 },
  { id: "ellipse-46", width: 10, height: 10, left: 796.13, top: 983.07, color: "#78797c", rotate: 178.48 },
  { id: "ellipse-47", width: 14, height: 14, left: 830.98, top: 864, color: "#169b99", rotate: 178.48 },
  { id: "ellipse-48", width: 9, height: 8, left: 835.89, top: 936.03, color: "#169b99", rotate: 178.48 },
  { id: "ellipse-49", width: 15, height: 16, left: 774, top: 865.49, color: "#169b99", rotate: 178.48 },
  { id: "ellipse-50", width: 11, height: 10, left: 948.42, top: 992.01, color: "#152f7b", rotate: 178.48 },
  { id: "ellipse-51", width: 32, height: 32, left: 887.02, top: 902.05, color: "#152f7b", rotate: 178.48 },
];

const ambientParticles = [
  [212, 760, 9, "#78797c"],
  [1230, 967, 14, "#78797c"],
  [1687, 579, 14, "#78797c"],
  [944, 858, 14, "#78797c"],
  [1524, 45, 14, "#78797c"],
  [386, 130, 8, "#78797c"],
  [1106, 482, 10, "#78797c"],
  [416, 960, 14, "#169b99"],
  [1715, 70, 11, "#169b99"],
  [1410, 898, 11, "#169b99"],
  [84, 524, 9, "#169b99"],
  [766, 639, 15, "#169b99"],
  [878, 274, 14, "#281f4a"],
  [1701, 804, 14, "#281f4a"],
  [555, 767, 14, "#281f4a"],
  [1504, 609, 40, "#281f4a"],
  [697, 0, 14, "#281f4a"],
  [1273, 448, 14, "#152f7b"],
  [144, 933, 11, "#152f7b"],
  [772, 181, 11, "#152f7b"],
  [1821, 274, 14, "#152f7b"],
  [1472, 403, 14, "#152f7b"],
  [84, 136, 32, "#152f7b"],
] as const;

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const updateScale = () => setScale(section.clientWidth / 1920);
    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-section" ref={sectionRef}>
      <div className="projects-canvas" style={{ transform: `scale(${scale})` }}>
        {ambientParticles.map(([left, top, size, color], index) => (
          <span
            key={`ambient-${index}`}
            className="project-glow particle"
            style={{
              width: size,
              height: size,
              left,
              top,
              backgroundColor: color,
            }}
          />
        ))}

        {glows.map((glow) => (
          <span
            key={glow.id}
            className={`project-glow particle ${glow.id} ${
              glow.color === "#169b99"
                ? "particle-teal"
                : glow.color === "#152f7b"
                  ? "particle-blue"
                  : "particle-grey"
            }`}
            style={{
              width: glow.width,
              height: glow.height,
              left: glow.left,
              top: glow.top,
              backgroundColor: glow.color,
              transform: glow.rotate ? `rotate(${glow.rotate}deg)` : undefined,
            }}
          />
        ))}

        <img className="projects-spine" src="/image.png" alt="" />

        <div className="project-card project-card-1">
          <span>PROJECT 1</span>
        </div>
        <div className="project-card project-card-2">
          <span>PROJECT 2</span>
        </div>
        <div className="project-card project-card-3">
          <span>PROJECT 3</span>
        </div>
      </div>
    </section>
  );
}
