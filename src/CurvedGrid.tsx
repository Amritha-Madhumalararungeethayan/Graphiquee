import "./CurvedGrid.css";

export default function CurvedGrid() {
  const verticalLines = Array.from({ length: 25 }, (_, index) => index);
  const horizontalLines = Array.from({ length: 23 }, (_, index) => index);

  return (
    <svg
      className="curved-grid"
      viewBox="0 0 1920 1095"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="gridFade">
          <stop offset="0%" stopColor="#102b45" stopOpacity="1" />
          <stop offset="100%" stopColor="#010d20" stopOpacity=".5" />
        </radialGradient>
      </defs>

      <rect width="1920" height="1095" fill="#010d20" />

      <g fill="none" stroke="#244563" strokeWidth="2" opacity=".8">
        {verticalLines.map((index) => {
          const x = (index / 24) * 1920;
          const distance = (x - 960) / 960;
          const bend = distance * Math.abs(distance) * 100;

          return (
            <path
              key={`v-${index}`}
              d={`M ${x} 0 C ${x - bend} 260, ${x - bend * 0.45} 390, ${x} 475 C ${x + bend * 0.45} 570, ${x + bend} 790, ${x} 1095`}
            />
          );
        })}

        {horizontalLines.map((index) => {
          const t = index / 22;
          const y = t * 1095;
          const curve = Math.sin(t * Math.PI * 2) * 42;

          return (
            <path
              key={`h-${index}`}
              d={`M 0 ${y + curve} C 480 ${y - curve * 0.45}, 700 ${y + curve * 0.25}, 960 ${y} C 1220 ${y + curve * 0.25}, 1440 ${y - curve * 0.45}, 1920 ${y + curve}`}
            />
          );
        })}
      </g>

      <rect width="1920" height="1095" fill="url(#gridFade)" opacity=".28" />
    </svg>
  );
}