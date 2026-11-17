"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { Pictogram, type PictogramName } from "@/components/icons/Pictogram";
import { cn } from "@/lib/utils";

const steps = [
  {
    n: "01",
    icon: "brief" as PictogramName,
    title: "Understand Your Brand",
    body: "We start with your business objective, customers and category, not a creator list, and agree the one KPI that will define success.",
    bg: "bg-ink text-paper",
    accent: "coral" as const,
  },
  {
    n: "02",
    icon: "strategy" as PictogramName,
    title: "Build the Strategy",
    body: "The mix of creators, UGC and your own channels that fits the goal, with platforms, formats and budget mapped to that KPI.",
    bg: "bg-coral text-ink",
    accent: "lime" as const,
  },
  {
    n: "03",
    icon: "discovery" as PictogramName,
    title: "Find Creators and Content",
    body: "We shortlist creators for audience fit and engagement quality, with the reason for every name, and plan the content your channels and ads need.",
    bg: "bg-paper text-ink border-[1.5px] border-ink",
    accent: "coral" as const,
  },
  {
    n: "04",
    icon: "launch" as PictogramName,
    title: "Plan and Execute",
    body: "We handle outreach, contracts, briefs, approvals and publishing, so content goes out on schedule and on-brand without you chasing anyone.",
    bg: "bg-lime text-ink",
    accent: "coral" as const,
  },
  {
    n: "05",
    icon: "analytics" as PictogramName,
    title: "Track, Analyse, Report",
    body: "Reporting against the KPI agreed at the start, plus a plain-language debrief on what worked and what we'd change next time.",
    bg: "bg-ink text-paper",
    accent: "lime" as const,
  },
];

/** Desktop panel. Its title is not an <h3>: the mobile stack below carries the step headings, so each appears once in the HTML. */
function StepPanel({ step }: { step: (typeof steps)[number] }) {
  return (
    <div className={cn("flex h-[26rem] w-[80vw] shrink-0 flex-col justify-between p-10 sm:w-[26rem]", step.bg)}>
      <div className="flex items-start justify-between">
        <span className="font-black-display text-7xl leading-none opacity-70">{step.n}</span>
        <Pictogram name={step.icon} accent={step.accent} className="size-14" />
      </div>
      <div>
        <p role="heading" aria-level={3} className="font-display text-3xl tracking-tight">
          {step.title}
        </p>
        <p className="mt-4 text-base leading-relaxed opacity-85">{step.body}</p>
      </div>
    </div>
  );
}

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 26, mass: 0.4 });
  const x = useTransform(smooth, [0, 1], ["2vw", `-${(steps.length - 1) * 27}rem`]);
  const barWidth = useTransform(smooth, [0, 1], ["6%", "100%"]);

  return (
    <section className="py-28 sm:py-36" id="process">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="How we work, from first call to final report."
          description="The same five steps whether you hire us for an influencer campaign, a UGC batch or monthly social media."
        />
      </Container>

      {/* Desktop: pinned horizontal scroll-through */}
      <div ref={ref} className="relative mt-16 hidden lg:block" style={{ height: `${steps.length * 70}vh` }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <Container>
            <div className="mb-8 h-1 w-full max-w-xs bg-ink/10">
              <motion.div className="h-full bg-coral" style={{ width: barWidth }} />
            </div>
          </Container>
          <motion.div className="flex gap-6 pl-[6vw]" style={{ x }}>
            {steps.map((step) => (
              <StepPanel key={step.n} step={step} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile / tablet: vertical stack */}
      <Container className="mt-12 lg:hidden">
        <div className="grid gap-5">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.05}>
              <div className={cn("p-7", step.bg)}>
                <div className="flex items-start justify-between">
                  <span className="font-black-display text-4xl leading-none opacity-70">{step.n}</span>
                  <Pictogram name={step.icon} accent={step.accent} className="size-11" />
                </div>
                <h3 className="mt-4 font-display text-2xl tracking-tight">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed opacity-85">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
