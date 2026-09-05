"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatCounter } from "@/components/ui/StatCounter";
import { CampaignCollage } from "@/components/graphics/CampaignCollage";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

const statStyles = [
  "bg-ink text-paper",
  "bg-coral text-ink",
  "bg-violet text-paper",
  "bg-lime text-ink",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-0 sm:pt-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[linear-gradient(180deg,var(--color-paper-dim)_0%,var(--color-paper)_60%)]" />
      <p
        aria-hidden="true"
        className="font-black-display pointer-events-none absolute -top-[2vw] left-1/2 w-[140vw] -translate-x-1/2 select-none text-center text-[26vw] leading-none tracking-tight text-ink/[0.04] sm:text-[18vw]"
      >
        KUDOZZ
      </p>

      <Container className="relative pb-20 sm:pb-28">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Eyebrow>Influencer Marketing Agency</Eyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-display text-[15vw] leading-[0.92] tracking-tight text-ink text-balance sm:text-8xl lg:text-[6.4rem]"
            >
              Influence
              <br />
              isn&apos;t <em className="italic text-coral">bought.</em>
              <br />
              It&apos;s built.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 max-w-lg text-lg leading-relaxed text-ink/65 text-pretty"
            >
              {siteConfig.name} connects ambitious brands with creators who actually move culture — turning
              attention into engagement, and engagement into growth you can measure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href="/for-brands#inquiry" size="lg" magnetic>
                Launch Your Campaign
              </Button>
              <Button href="/for-creators#apply" variant="secondary" size="lg">
                Join as a Creator
              </Button>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {siteConfig.stats.map((stat, i) => (
                <div key={stat.label} className={`p-4 ${statStyles[i % statStyles.length]}`}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-black-display text-2xl leading-none tracking-tight">
                    <StatCounter value={stat.value} />
                  </dd>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.12em] opacity-70">{stat.label}</p>
                </div>
              ))}
            </motion.dl>
          </div>

          <CampaignCollage className="lg:pl-6" />
        </div>
      </Container>

      <MarqueeBand />
    </section>
  );
}

const words = [
  "Fashion",
  "Beauty",
  "Tech",
  "Travel",
  "Fitness",
  "Food",
  "Lifestyle",
  "Finance",
  "Gaming",
];

function MarqueeBand() {
  const loop = [...words, ...words];
  return (
    <div className="-rotate-1 scale-[1.02] overflow-hidden bg-ink py-4 text-paper">
      <div className="flex w-max animate-marquee items-center gap-10">
        {loop.map((w, i) => (
          <span key={i} className="flex items-center gap-10 font-black-display text-2xl tracking-tight sm:text-3xl">
            {w}
            <span className="text-coral">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
