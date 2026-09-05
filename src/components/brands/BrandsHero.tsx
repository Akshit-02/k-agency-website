"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { CampaignCollage } from "@/components/graphics/CampaignCollage";

export function BrandsHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[linear-gradient(180deg,var(--color-paper-dim)_0%,var(--color-paper)_60%)]" />
      <p
        aria-hidden="true"
        className="font-black-display pointer-events-none absolute -top-[3vw] left-1/2 w-[140vw] -translate-x-1/2 select-none text-center text-[22vw] leading-none tracking-tight text-ink/[0.04] sm:text-[14vw]"
      >
        BRANDS
      </p>
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Eyebrow>For Brands</Eyebrow>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 font-display text-6xl leading-[0.98] tracking-tight text-balance text-ink sm:text-7xl lg:text-8xl"
            >
              Stop chasing attention. Start building <em className="italic text-coral">influence.</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-ink/65 text-pretty"
            >
              We help brands identify and collaborate with the creators who already have your customer&apos;s
              attention — then run the campaign end to end, from strategy to final report.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10"
            >
              <Button href="#inquiry" size="lg" icon={false} magnetic>
                Start a Brand Inquiry <ArrowDown className="size-4" />
              </Button>
            </motion.div>
          </div>

          <CampaignCollage className="lg:pl-6" />
        </div>
      </Container>
    </section>
  );
}
