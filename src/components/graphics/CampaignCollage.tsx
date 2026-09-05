"use client";

import { motion } from "framer-motion";
import { Play, Sparkles, TrendingUp } from "lucide-react";
import { Waveform } from "@/components/graphics/Waveform";
import { NetworkField } from "@/components/graphics/NetworkField";

type Chip = {
  className: string;
  rotate: number;
  delay: number;
  floatDelay: string;
  content: React.ReactNode;
};

const chips: Chip[] = [
  {
    className: "left-[4%] top-[2%] w-[46%] bg-ink text-paper",
    rotate: -6,
    delay: 0.1,
    floatDelay: "0s",
    content: (
      <div className="p-4">
        <div className="flex items-center justify-between">
          <span className="flex size-8 items-center justify-center rounded-full bg-lime text-ink">
            <Play className="size-3.5 fill-current" />
          </span>
          <span className="font-black-display text-[10px] tracking-wide text-paper/50">LIVE</span>
        </div>
        <p className="mt-4 font-black-display text-2xl leading-none">24.6M</p>
        <p className="mt-1 text-[11px] uppercase tracking-wide text-paper/60">Campaign views</p>
      </div>
    ),
  },
  {
    className: "right-[2%] top-0 w-[38%] bg-coral text-ink",
    rotate: 5,
    delay: 0.22,
    floatDelay: "1.1s",
    content: (
      <div className="p-4">
        <Sparkles className="size-5" />
        <p className="mt-3 font-display text-lg italic leading-tight">Featured Drop</p>
        <p className="mt-1 text-[11px] uppercase tracking-wide text-ink/60">Beauty · Skincare</p>
      </div>
    ),
  },
  {
    className: "left-0 bottom-[20%] w-[40%] bg-violet text-paper",
    rotate: 4,
    delay: 0.34,
    floatDelay: "0.5s",
    content: (
      <div className="p-4">
        <div className="flex items-center justify-between">
          <span className="font-black-display text-[10px] tracking-wide text-lime">ENGAGEMENT</span>
          <TrendingUp className="size-4" />
        </div>
        <Waveform className="mt-3 h-10 text-lime" />
      </div>
    ),
  },
  {
    className: "right-[6%] bottom-[6%] w-[34%] bg-lime text-ink",
    rotate: -5,
    delay: 0.46,
    floatDelay: "1.6s",
    content: (
      <div className="p-4">
        <p className="font-black-display text-3xl leading-none">92%</p>
        <p className="mt-1 text-[11px] uppercase tracking-wide text-ink/60">Trust creator content</p>
      </div>
    ),
  },
  {
    className: "left-[26%] bottom-0 w-[26%] bg-paper text-ink border-[1.5px] border-ink",
    rotate: -2,
    delay: 0.55,
    floatDelay: "0.9s",
    content: (
      <div className="p-3 text-center">
        <p className="font-black-display text-xs tracking-wide">#CREATOR</p>
        <p className="font-black-display text-xs tracking-wide text-coral">-LED</p>
      </div>
    ),
  },
];

export function CampaignCollage({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative aspect-[4/5] w-full">
        <div className="absolute inset-[14%] opacity-70">
          <NetworkField className="h-full w-full" />
        </div>

        {chips.map((chip, i) => (
          <motion.div
            key={i}
            className={`absolute ${chip.className} shadow-[6px_6px_0_0_var(--color-ink)]`}
            initial={{ opacity: 0, y: 30, rotate: 0, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, rotate: chip.rotate, scale: 1 }}
            transition={{ duration: 0.7, delay: chip.delay, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="animate-float"
              style={{ animationDelay: chip.floatDelay, ["--float-rotate" as string]: "0deg" }}
            >
              {chip.content}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
