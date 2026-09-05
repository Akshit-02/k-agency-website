"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

function parseValue(raw: string) {
  const match = raw.match(/^([\d.]+)(.*)$/);
  if (!match) return { number: null, suffix: raw };
  return { number: parseFloat(match[1]), suffix: match[2] };
}

export function StatCounter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState("0");
  const { number, suffix } = parseValue(value);
  const showFinalImmediately = number === null || (inView && reduceMotion);

  // Safety net: if the in-view observer never fires (e.g. an instant scroll
  // jump skips past this element), still land on the correct final value.
  useEffect(() => {
    if (number === null) return;
    const timeout = setTimeout(() => setDisplay((current) => (current === "0" ? value : current)), 2000);
    return () => clearTimeout(timeout);
  }, [number, value]);

  useEffect(() => {
    if (!inView || number === null || reduceMotion) return;
    const duration = 1200;
    const start = performance.now();
    const decimals = value.includes(".") ? 1 : 0;

    let frame: number;
    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = number! * eased;
      setDisplay(current.toFixed(decimals) + suffix);
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, number, suffix, reduceMotion, value]);

  return (
    <span ref={ref} className={className}>
      {showFinalImmediately ? value : display}
    </span>
  );
}
