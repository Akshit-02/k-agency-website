import Link from "@/components/ui/Link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { StaggerItem, StaggerReveal } from "@/components/animations/StaggerReveal";
import { reasons } from "@/content/home";
import { IconTile } from "@/components/icons/Pictogram";
import { servicePictogram, slugFromServiceHref } from "@/components/icons/ServiceIcon";

const accents = ["coral", "lime"] as const;

export function WhyKudozz() {
  return (
    <section className="py-28 sm:py-36" id="why-kudozz">
      <Container>
        <SectionHeading
          eyebrow="Why Kudozz"
          title="Why brands choose Kudozz."
          description="Doing this in-house means finding creators, checking their audiences, negotiating, chasing drafts, keeping your own accounts posting and building reports. Here is how we work, whether you hire us for creators, UGC, social media or all three."
        />

        <StaggerReveal className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <StaggerItem
              key={reason.title}
              className="group flex flex-col justify-between border-[1.5px] border-ink bg-paper p-8 shadow-[6px_6px_0_0_var(--color-ink)]"
            >
              <div>
                <IconTile name={servicePictogram(slugFromServiceHref(reason.href))} accent={accents[i % accents.length]} />
                <h3 className="mt-6 font-display text-2xl leading-tight tracking-tight text-ink">{reason.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-ink/70">{reason.body}</p>
              </div>
              <Link
                href={reason.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-coral decoration-2 underline-offset-4 hover:text-coral-deep"
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
