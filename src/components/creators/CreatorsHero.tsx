"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { Waveform } from "@/components/graphics/Waveform";
import { creatorCategories } from "@/content/creator-categories";

const tagColors = ["border-lime text-lime", "border-coral text-coral", "border-paper/40 text-paper/70"];

export function CreatorsHero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-32 pb-24 text-paper sm:pt-40 sm:pb-32">
      <p
        aria-hidden="true"
        className="font-black-display pointer-events-none absolute -top-[3vw] left-1/2 w-[140vw] -translate-x-1/2 select-none text-center text-[22vw] leading-none tracking-tight text-paper/[0.045] sm:text-[14vw]"
      >
        CREATORS
      </p>
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Eyebrow dark>For Creators</Eyebrow>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 font-display text-6xl leading-[0.98] tracking-tight text-balance sm:text-7xl lg:text-8xl"
            >
              Great brands are looking for creators like <em className="italic text-lime">you.</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-paper/65 text-pretty"
            >
              Join a network built around real partnerships — relevant campaigns, professional coordination, and
              brands who respect the work that goes into your content.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10"
            >
              <Button href="#apply" size="lg" variant="bright" magnetic>
                Apply Now
              </Button>
            </motion.div>

            <div className="mt-14 flex flex-wrap gap-2">
              {creatorCategories.map((c, i) => (
                <span
                  key={c.slug}
                  className={`border-[1.5px] px-4 py-1.5 text-xs font-medium uppercase tracking-wide ${tagColors[i % tagColors.length]}`}
                >
                  {c.name}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-sm border-[1.5px] border-paper/20 bg-paper/[0.03] p-10">
            <Waveform className="h-full text-lime" />
          </div>
        </div>
      </Container>
    </section>
  );
}
