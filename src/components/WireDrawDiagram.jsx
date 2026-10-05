export default function WireDrawDiagram({ draws }) {
  // Layout: n dies evenly spaced across a viewBox, wire diameter tapers
  // through each one. Purely decorative/informative SVG, CSS-var themed.
  const width = 1000;
  const height = 160;
  const laneY = height / 2;
  const startX = 40;
  const endX = width - 40;
  const step = (endX - startX) / (draws.length - 1);
  const maxR = 20;
  const minR = 5;

  const radiusAt = (i) => {
    const t = i / (draws.length - 1);
    return maxR - t * (maxR - minR);
  };

  return (
    <svg
      className="wire-diagram"
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="Wire drawing diagram showing diameter reduction through successive dies"
    >
      {/* base rail */}
      <line
        x1={startX}
        y1={laneY}
        x2={endX}
        y2={laneY}
        stroke="var(--border-strong)"
        strokeWidth="1"
      />

      {/* wire body: tapering polygon between die stations */}
      {draws.map((d, i) => {
        if (i === draws.length - 1) return null;
        const x1 = startX + i * step;
        const x2 = startX + (i + 1) * step;
        const r1 = radiusAt(i);
        const r2 = radiusAt(i + 1);
        return (
          <polygon
            key={`seg-${i}`}
            points={`${x1},${laneY - r1} ${x2},${laneY - r2} ${x2},${
              laneY + r2
            } ${x1},${laneY + r1}`}
            fill="var(--steel)"
            opacity="0.35"
          />
        );
      })}

      {/* moving pulse along the wire to suggest motion/process */}
      <circle r="4" fill="var(--accent)" className="wire-diagram__pulse">
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          path={`M${startX},${laneY} L${endX},${laneY}`}
        />
      </circle>

      {/* die stations */}
      {draws.map((d, i) => {
        const x = startX + i * step;
        const r = radiusAt(i);
        return (
          <g key={d.label}>
            {/* die block */}
            <rect
              x={x - 14}
              y={laneY - maxR - 16}
              width="28"
              height={maxR * 2 + 32}
              fill="var(--panel)"
              stroke="var(--border-strong)"
            />
            <line
              x1={x}
              y1={laneY - maxR - 16}
              x2={x}
              y2={laneY - r}
              stroke="var(--border-strong)"
            />
            <line
              x1={x}
              y1={laneY + r}
              x2={x}
              y2={laneY + maxR + 16}
              stroke="var(--border-strong)"
            />
            {/* wire diameter dot */}
            <circle cx={x} cy={laneY} r={r} fill="none" stroke="var(--accent)" strokeWidth="1.5" />
            {/* label */}
            <text
              x={x}
              y={laneY + maxR + 36}
              textAnchor="middle"
              className="wire-diagram__label"
            >
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
