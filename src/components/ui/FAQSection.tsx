"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

export type Faq = { question: string; answer: string };

/**
 * Renders visible, crawlable question/answer content. Pass this exact
 * `faqs` array to `faqSchema()` in the page so the JSON-LD matches what a
 * visitor can actually read — never author hidden FAQ copy for schema.
 */
export function FAQSection({
  faqs,
  eyebrow = "Frequently Asked",
  title = "Common questions.",
  dark = false,
  className,
}: {
  faqs: Faq[];
  eyebrow?: string;
  title?: string;
  dark?: boolean;
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={cn("py-28 sm:py-36", dark && "bg-ink text-paper", className)}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} dark={dark} />
        <div className={cn("mt-14 border-t-[1.5px]", dark ? "border-paper/20" : "border-ink")}>
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={faq.question} delay={i * 0.04} className={cn("border-b-[1.5px]", dark ? "border-paper/20" : "border-ink")}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`faq-answer-${i}`}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-xl tracking-tight sm:text-2xl">{faq.question}</span>
                    <Plus
                      className={cn("size-5 shrink-0 transition-transform duration-300", open && "rotate-45", dark ? "text-lime" : "text-coral")}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`faq-answer-${i}`}
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className={cn("max-w-2xl pb-6 text-base leading-relaxed", dark ? "text-paper/70" : "text-ink/65")}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
