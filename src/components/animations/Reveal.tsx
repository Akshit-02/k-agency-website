"use client";

import { motion } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
  as = "div",
  once = true,
  fade = true,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span";
  once?: boolean;
  /** Set false for above-the-fold text (H1, intro) so it paints before hydration and doesn't delay LCP. */
  fade?: boolean;
}) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={fade ? { opacity: 0, y } : { y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}
