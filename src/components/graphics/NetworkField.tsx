"use client";

import { motion } from "framer-motion";

type Node = { x: number; y: number; r: number };

const CREATOR_NODES: Node[] = [
  { x: 82, y: 18, r: 4.5 },
  { x: 94, y: 42, r: 3 },
  { x: 88, y: 68, r: 5.5 },
  { x: 70, y: 86, r: 3.5 },
  { x: 44, y: 92, r: 4 },
  { x: 20, y: 80, r: 3 },
  { x: 8, y: 56, r: 5 },
  { x: 12, y: 28, r: 3.5 },
  { x: 32, y: 10, r: 4 },
  { x: 58, y: 6, r: 3 },
];

function round(n: number) {
  return Math.round(n * 1000) / 1000;
}

const AUDIENCE_DOTS = Array.from({ length: 46 }, (_, i) => {
  const angle = (i / 46) * Math.PI * 2;
  const radius = 46 + ((i * 37) % 9);
  return {
    x: round(50 + Math.cos(angle) * radius),
    y: round(50 + Math.sin(angle) * radius * 0.92),
    r: round(0.7 + ((i * 13) % 5) * 0.2),
  };
});

/**
 * A central node (the agency) connected to a ring
 * of creator nodes, which in turn radiate outward to an audience field.
 * Purely code-drawn: no photography, fully deterministic for SSR.
 */
export function NetworkField({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Diagram of a central brand node connected to a network of creator nodes reaching an outer audience field"
    >
      <g opacity={0.55}>
        {AUDIENCE_DOTS.map((d, i) => (
          <circle key={`aud-${i}`} cx={d.x} cy={d.y} r={d.r} className="fill-ink/15" />
        ))}
      </g>

      {CREATOR_NODES.map((n, i) => (
        <motion.line
          key={`line-${i}`}
          x1={50}
          y1={50}
          x2={n.x}
          y2={n.y}
          className="stroke-ink/20"
          strokeWidth={0.4}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}

      {CREATOR_NODES.map((n, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={n.x}
          cy={n.y}
          r={n.r}
          className={i % 3 === 0 ? "fill-coral" : "fill-ink"}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 + i * 0.06, ease: "backOut" }}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
        />
      ))}

      <motion.circle
        cx={50}
        cy={50}
        r={9}
        className="fill-lime"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "backOut" }}
        style={{ transformOrigin: "50px 50px" }}
      />
      <circle cx={50} cy={50} r={9} className="fill-none stroke-ink" strokeWidth={0.6} />
    </svg>
  );
}
