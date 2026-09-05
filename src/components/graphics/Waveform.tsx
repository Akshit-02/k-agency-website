"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const HEIGHTS = [30, 55, 40, 80, 60, 95, 45, 70, 35, 85, 50, 65, 30, 75, 40, 90, 55, 60, 35, 80];

export function Waveform({ className, barClassName }: { className?: string; barClassName?: string }) {
  return (
    <div className={cn("flex h-full items-end gap-[3px]", className)} aria-hidden="true">
      {HEIGHTS.map((h, i) => (
        <motion.span
          key={i}
          className={cn("w-full flex-1 rounded-full bg-current", barClassName)}
          style={{ height: `${h}%` }}
          initial={{ scaleY: 0.3 }}
          animate={{ scaleY: [0.3, 1, 0.5, 0.85, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.06, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
