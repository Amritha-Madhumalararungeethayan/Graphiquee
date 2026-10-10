import { useEffect, useRef, useState } from "react";
import "./TeamOrgChart.css";

const stars = [
  [212, 760, 9, "#78797C"],
  [1230, 967, 14, "#78797C"],
  [1687, 579, 14, "#78797C"],
  [944, 858, 14, "#78797C"],
  [1524, 45, 14, "#78797C"],
  [386, 130, 8, "#78797C"],
  [1106, 482, 10, "#78797C"],
  [416, 960, 14, "#169B99"],
  [1715, 70, 11, "#169B99"],
  [1410, 898, 11, "#169B99"],
  [84, 524, 9, "#169B99"],
  [766, 639, 15, "#169B99"],
  [878, 274, 14, "#281F4A"],
  [1701, 804, 14, "#281F4A"],
  [555, 767, 14, "#281F4A"],
  [1504, 609, 40, "#281F4A"],
  [697, 0, 14, "#281F4A"],
  [1273, 448, 14, "#152F7B"],
  [144, 933, 11, "#152F7B"],
  [772, 181, 11, "#152F7B"],
  [1821, 274, 14, "#152F7B"],
  [1472, 403, 14, "#152F7B"],
  [84, 136, 32, "#152F7B"],
] as const;

const cards = [
  { id: "overall", x: 832, y: 152, label: "OVERALL COORDINATOR" },
  { id: "internal-left", x: 543, y: 334, label: "INTERNAL CREATIVES" },
  { id: "internal-right", x: 1121, y: 334, label: "INTERNAL CREATIVES" },
  { id: "president", x: 832, y: 421, label: "PRESIDENT" },
  { id: "director-left", x: 546, y: 629, label: "FESTEMBER CREATIVE DIRECTOR" },
  { id: "director-right", x: 1118, y: 629, label: "FESTEMBER CREATIVE DIRECTOR" },
  { id: "treasurer", x: 832, y: 690, label: "TREASURER" },
] as const;

export default function TeamOrgChart() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const updateScale = () => setScale(wrapper.clientWidth / 1920);
    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="leadership-section">
      <div className="leadership-wrapper" ref={wrapperRef}>
        <div className="leadership-stage" style={{ transform: `scale(${scale})` }}>
          {stars.map(([x, y, size, color], index) => (
            <span
              key={index}
              className="leadership-star"
              style={{ left: x, top: y, width: size, height: size, background: color }}
            />
          ))}

          <h1 className="leadership-heading">Where Passion meets leadership</h1>

          <div className="leadership-lines">
            <span className="lead-line center-top" />
            <span className="lead-line center-middle" />
            <span className="lead-line center-bottom" />
            <span className="lead-line left-upper" />
            <span className="lead-line left-lower" />
            <span className="lead-line right-upper" />
            <span className="lead-line right-lower" />
            <span className="lead-line left-branch" />
            <span className="lead-line right-branch" />
          </div>

          {cards.map((card) => (
            <div
              key={card.id}
              className={`leadership-card ${card.id}`}
              style={{ left: card.x, top: card.y }}
            >
              <span>{card.label}</span>
            </div>
          ))}

          <div className="leadership-glow" />
          <button
            className="leadership-button"
            onClick={() =>
              document.getElementById("managers-section")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Meet our team !
          </button>
          <div className="leadership-arrow" />
        </div>
      </div>
    </section>
  );
}