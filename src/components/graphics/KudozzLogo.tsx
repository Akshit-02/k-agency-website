"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { KudozzMark } from "@/components/graphics/KudozzMark";
import { KudozzWordmark } from "@/components/graphics/KudozzWordmark";
import { cn } from "@/lib/utils";

const sizes = {
  sm: { mark: "h-7 w-7", word: "text-xl" },
  md: { mark: "h-8 w-8", word: "text-2xl" },
  lg: { mark: "h-11 w-11", word: "text-3xl" },
};

export function KudozzLogo({
  size = "md",
  dark = false,
  className,
  ariaLabel = "Kudozz home",
}: {
  size?: "sm" | "md" | "lg";
  dark?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const scale = sizes[size];

  return (
    <Link
      href="/"
      aria-label={ariaLabel}
      className={cn(
        "group flex items-center gap-2.5",
        dark ? "text-paper" : "text-ink",
        className
      )}
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex"
      >
        <KudozzMark className={scale.mark} accent={dark ? "var(--color-lime)" : "var(--color-coral)"} />
      </motion.span>
      <KudozzWordmark className={scale.word} accentClassName={dark ? "text-lime" : "text-coral"} />
    </Link>
  );
}
