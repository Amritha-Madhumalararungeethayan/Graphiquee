import { useEffect, useRef, useState } from "react";
import "./ManagersSection.css";

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

const columns = [
  { x: 171, color: "purple" },
  { x: 510, color: "blue" },
  { x: 849, color: "green" },
  { x: 1188, color: "lavender" },
  { x: 1527, color: "lavender" },
];

export default function ManagersSection() {
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
    <section id="managers-section" className="managers-section">
      <div className="managers-wrapper" ref={wrapperRef}>
        <div className="managers-stage" style={{ transform: `scale(${scale})` }}>
          {stars.map(([x, y, size, color], index) => (
            <span
              key={index}
              className="managers-star"
              style={{ left: x, top: y, width: size, height: size, background: color }}
            />
          ))}

          <h2 className="managers-heading">Managers</h2>
          <div className="manager-line main-line" />
          <div className="manager-line heading-line" />

          {columns.map((column, index) => (
            <div key={index}>
              <div className="manager-line upper-line" style={{ left: column.x + 104 }} />
              <div className="manager-line middle-line" style={{ left: column.x + 104 }} />
              <div
                className={`manager-card ${column.color}`}
                style={{ left: column.x, top: index === 3 ? 274 : 272 }}
              />
              <div
                className={`manager-card ${column.color}`}
                style={{ left: column.x, top: index === 3 ? 611 : 609 }}
              />
            </div>
          ))}

          <div className="manager-glow glow-one" />
          <div className="manager-glow glow-two" />
          <div className="manager-glow glow-three" />
        </div>
      </div>
    </section>
  );
}