"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { creatorCategories } from "@/content/creator-categories";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

const sizes = ["text-4xl sm:text-5xl", "text-6xl sm:text-7xl", "text-3xl sm:text-4xl", "text-5xl sm:text-6xl"];
const hoverColors = ["hover:text-coral", "hover:text-violet", "hover:text-lime-dim", "hover:text-coral"];
const panelColors = ["bg-coral text-ink", "bg-violet text-paper", "bg-lime text-ink", "bg-ink text-paper"];

export function CreatorNetwork() {
  const [activeSlug, setActiveSlug] = useState(creatorCategories[0].slug);
  const activeIndex = creatorCategories.findIndex((c) => c.slug === activeSlug);
  const active = creatorCategories[activeIndex];

  return (
    <section className="bg-paper-dim py-28 sm:py-36">
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Creator Network"
            title="One network, every category that matters to your brand."
            description="Names and profiles shown to brands are drawn from our vetted, active network — browse the categories we work across."
          />
          <Reveal>
            <Button href="/for-creators#apply" variant="secondary">
              Join the Network
            </Button>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
            {creatorCategories.map((category, i) => {
              const isActive = category.slug === activeSlug;
              return (
                <button
                  key={category.slug}
                  type="button"
                  onMouseEnter={() => setActiveSlug(category.slug)}
                  onFocus={() => setActiveSlug(category.slug)}
                  aria-pressed={isActive}
                  className={cn(
                    "font-display tracking-tight transition-colors duration-200",
                    sizes[i % sizes.length],
                    isActive ? "text-coral" : `text-ink/70 ${hoverColors[i % hoverColors.length]}`
                  )}
                >
                  {category.name}
                  <span className="text-ink/25">,</span>
                </button>
              );
            })}
          </div>

          <motion.div
            key={active.slug}
            initial={{ opacity: 0, y: 16, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -1.5 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "flex flex-col justify-between border-[1.5px] border-ink p-8 shadow-[8px_8px_0_0_var(--color-ink)]",
              panelColors[activeIndex % panelColors.length]
            )}
          >
            <div>
              <span className="font-black-display text-xs tracking-wide opacity-60">{active.creatorCount} CREATORS</span>
              <p className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">{active.name}</p>
              <p className="mt-4 text-base opacity-75">{active.description}</p>
            </div>
            <p className="mt-8 text-sm opacity-60">Vetted for engagement quality and audience fit.</p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
