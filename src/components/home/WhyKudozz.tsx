import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { StaggerItem, StaggerReveal } from "@/components/animations/StaggerReveal";
import { reasons } from "@/content/home";
import { cn } from "@/lib/utils";

const accents = ["bg-coral", "bg-violet", "bg-lime", "bg-ink"];

export function WhyKudozz() {
  return (
    <section className="py-28 sm:py-36" id="why-kudozz">
      <Container>
        <SectionHeading
          eyebrow="Why Kudozz"
          title="Why brands choose Kudozz over running creators in-house."
          description="Running influencer marketing yourself means finding creators, checking their audiences, negotiating, chasing drafts and building reports. Here is what changes when Kudozz runs it."
        />

        <StaggerReveal className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <StaggerItem
              key={reason.title}
              className="flex flex-col justify-between border-[1.5px] border-ink bg-paper p-8 shadow-[6px_6px_0_0_var(--color-ink)]"
            >
              <div>
                <span className={cn("block h-2 w-10", accents[i % accents.length])} aria-hidden="true" />
                <h3 className="mt-6 font-display text-2xl leading-tight tracking-tight text-ink">{reason.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-ink/65">{reason.body}</p>
              </div>
              <Link
                href={reason.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-coral decoration-2 underline-offset-4 hover:text-coral"
              >
                {reason.linkLabel}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
