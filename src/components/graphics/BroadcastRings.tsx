"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BroadcastRings({
  className,
  ringClassName,
  count = 4,
}: {
  className?: string;
  ringClassName?: string;
  count?: number;
}) {
  const rings = Array.from({ length: count });

  return (
    <svg viewBox="0 0 100 100" className={cn("overflow-visible", className)} aria-hidden="true">
      {rings.map((_, i) => (
        <motion.circle
          key={i}
          cx={50}
          cy={50}
          r={10 + i * 12}
          className={cn("fill-none stroke-current", ringClassName)}
          strokeWidth={0.5}
          style={{ transformOrigin: "50px 50px" }}
          initial={{ opacity: 0.9 - i * 0.15, scale: 1 }}
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.9 - i * 0.15, 0.4 - i * 0.08, 0.9 - i * 0.15],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
        />
      ))}
      <circle cx={50} cy={50} r={4} className="fill-current" />
    </svg>
  );
}
