"use client";

import { motion } from "framer-motion";
import type { Service } from "@/content/services";

export function ServiceMotif({ motif, className }: { motif: Service["motif"]; className?: string }) {
  const common = { viewBox: "0 0 64 64", className, "aria-hidden": true as const };

  switch (motif) {
    case "orbit":
      return (
        <svg {...common}>
          <circle cx="32" cy="32" r="4" className="fill-current" />
          <ellipse cx="32" cy="32" rx="26" ry="12" className="fill-none stroke-current" strokeWidth="1" />
          <motion.circle
            cx="6"
            cy="32"
            r="2.6"
            className="fill-current"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "32px 32px" }}
          />
          <ellipse cx="32" cy="32" rx="12" ry="26" className="fill-none stroke-current opacity-40" strokeWidth="1" />
        </svg>
      );
    case "grid":
      return (
        <svg {...common}>
          {Array.from({ length: 9 }).map((_, i) => {
            const x = 10 + (i % 3) * 18;
            const y = 10 + Math.floor(i / 3) * 18;
            return (
              <motion.rect
                key={i}
                x={x}
                y={y}
                width="12"
                height="12"
                className={i === 4 ? "fill-current" : "fill-none stroke-current"}
                strokeWidth="1"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.15 }}
              />
            );
          })}
        </svg>
      );
    case "wave":
      return (
        <svg {...common}>
          <motion.path
            d="M4 40 Q 14 20, 24 40 T 44 40 T 64 40"
            className="fill-none stroke-current"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          <circle cx="4" cy="40" r="2" className="fill-current" />
          <circle cx="44" cy="40" r="2" className="fill-current" />
        </svg>
      );
    case "beacon":
      return (
        <svg {...common}>
          <path d="M32 44 L22 58 H42 Z" className="fill-current" />
          <rect x="29" y="30" width="6" height="16" className="fill-current" />
          {[16, 24, 32].map((r, i) => (
            <motion.path
              key={r}
              d={`M${32 - r} 30 A${r} ${r} 0 0 1 ${32 + r} 30`}
              className="fill-none stroke-current"
              strokeWidth="1.4"
              strokeLinecap="round"
              initial={{ opacity: 0.9 - i * 0.25 }}
              animate={{ opacity: [0.9 - i * 0.25, 0.2, 0.9 - i * 0.25], y: [0, -2, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </svg>
      );
    case "loop":
      return (
        <svg {...common}>
          <motion.path
            d="M14 24a18 14 0 0 1 34 0"
            className="fill-none stroke-current"
            strokeWidth="1.5"
            strokeLinecap="round"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "32px 24px" }}
          />
          <path d="M44 12 L48 24 L36 22 Z" className="fill-current" />
          <path d="M50 40a18 14 0 0 1 -34 0" className="fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M20 52 L16 40 L28 42 Z" className="fill-current" />
        </svg>
      );
    case "pulse":
      return (
        <svg {...common}>
          <motion.path
            d="M2 32 H18 L24 16 L32 48 L40 24 L46 32 H62"
            className="fill-none stroke-current"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.6, ease: "easeInOut" }}
          />
        </svg>
      );
    case "channel":
      return (
        <svg {...common}>
          <circle cx="12" cy="16" r="5" className="fill-current" />
          <circle cx="12" cy="48" r="5" className="fill-none stroke-current" strokeWidth="1.4" />
          <circle cx="52" cy="32" r="5" className="fill-coral" />
          <motion.path
            d="M17 16 H36 V32 H47"
            className="fill-none stroke-current"
            strokeWidth="1.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 0.8 }}
          />
          <motion.path
            d="M17 48 H36 V32 H47"
            className="fill-none stroke-current"
            strokeWidth="1.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 0.8, delay: 0.2 }}
          />
        </svg>
      );
    case "ledger":
      return (
        <svg {...common}>
          <rect x="10" y="8" width="44" height="48" rx="1" className="fill-none stroke-current" strokeWidth="1.2" />
          {[18, 27, 36, 45].map((y, i) => (
            <motion.line
              key={y}
              x1="16"
              y1={y}
              x2={i === 1 ? 40 : 48}
              y2={y}
              className={i === 1 ? "stroke-coral" : "stroke-current"}
              strokeWidth="1.4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            />
          ))}
        </svg>
      );
    default:
      return null;
  }
}
