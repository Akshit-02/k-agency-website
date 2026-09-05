"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

const steps = [
  {
    n: "01",
    title: "Understand Your Brand",
    body: "We start with your business objective, audience, and category — not a creator list. Every campaign begins with a strategy call, not a pitch deck.",
    bg: "bg-ink text-paper",
  },
  {
    n: "02",
    title: "Build the Strategy",
    body: "Platform mix, content formats, creator tiers, and budget allocation, mapped to the one KPI that matters most for this campaign.",
    bg: "bg-coral text-ink",
  },
  {
    n: "03",
    title: "Find the Right Creators",
    body: "We shortlist for audience overlap and engagement quality, screen for authenticity, and bring you a curated list — with the reasoning behind every name.",
    bg: "bg-violet text-paper",
  },
  {
    n: "04",
    title: "Launch the Campaign",
    body: "We manage outreach, contracts, deliverables, and approvals, so content ships on schedule and on-brand without you chasing anyone.",
    bg: "bg-lime text-ink",
  },
  {
    n: "05",
    title: "Track the Impact",
    body: "Unified reporting against your original KPI, plus a plain-language debrief on what worked and what we'd change next time.",
    bg: "bg-ink text-paper",
  },
];

function StepPanel({ step }: { step: (typeof steps)[number] }) {
  return (
    <div className={cn("flex h-[26rem] w-[80vw] shrink-0 flex-col justify-between p-10 sm:w-[26rem]", step.bg)}>
      <span className="font-black-display text-7xl leading-none opacity-25">{step.n}</span>
      <div>
        <h3 className="font-display text-3xl tracking-tight">{step.title}</h3>
        <p className="mt-4 text-base leading-relaxed opacity-75">{step.body}</p>
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
    <section className="bg-paper-dim py-28 sm:py-36">
      <Container>
        <SectionHeading eyebrow="How It Works" title="A clear campaign journey, from brief to results." />
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
                <span className="font-black-display text-4xl leading-none opacity-30">{step.n}</span>
                <h3 className="mt-4 font-display text-2xl tracking-tight">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed opacity-75">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
