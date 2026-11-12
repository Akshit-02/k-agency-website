import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StaggerItem, StaggerReveal } from "@/components/animations/StaggerReveal";
import { Reveal } from "@/components/animations/Reveal";
import { homeInquiryHref, serviceAreas, supportingServices } from "@/content/home";
import { cn } from "@/lib/utils";

const themes = {
  coral: { card: "bg-coral text-ink", sub: "text-ink/70", dot: "bg-ink" },
  violet: { card: "bg-violet text-paper", sub: "text-paper/70", dot: "bg-lime" },
  lime: { card: "bg-lime text-ink", sub: "text-ink/70", dot: "bg-coral" },
} as const;

/**
 * Homepage service discovery: the three service areas, two supporting services, and the separate brand and
 * creator journeys.
 */
export function ServiceAreas() {
  return (
    <section className="py-28 sm:py-36" id="service-areas">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Social media, creators and content, planned together."
          description="Hire Kudozz for one of these or for all three. They're designed to feed each other: your own accounts give people a reason to stay, creators bring new audiences, and UGC keeps both supplied with content."
        />

        <StaggerReveal className="mt-14 grid gap-5 lg:grid-cols-3">
          {serviceAreas.map((area, i) => {
            const theme = themes[area.theme];
            return (
              <StaggerItem key={area.name} className={cn("flex flex-col justify-between p-8 sm:p-10", theme.card)}>
                <div>
                  <span className="font-black-display text-sm opacity-50">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                    <Link href={area.href} className="hover:underline decoration-2 underline-offset-4">
                      {area.name}
                    </Link>
                  </h3>
                  <p className={cn("mt-4 text-base leading-relaxed", theme.sub)}>{area.body}</p>
                  <ul className="mt-6 space-y-2">
                    {area.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm">
                        <span className={cn("mt-2 size-1.5 shrink-0 rounded-full", theme.dot)} aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={area.href}
                  className="mt-10 inline-flex items-center gap-2 text-sm font-semibold underline decoration-2 underline-offset-4"
                >
                  {area.cta}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerReveal>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {supportingServices.map((service) => (
            <Reveal key={service.name}>
              <Link
                href={service.href}
                className="group flex h-full items-start justify-between gap-6 border-[1.5px] border-ink p-7 transition-colors hover:bg-ink hover:text-paper"
              >
                <span>
                  <span className="block font-display text-2xl tracking-tight">{service.name}</span>
                  <span className="mt-2 block text-sm leading-relaxed opacity-65">{service.body}</span>
                </span>
                <ArrowRight className="mt-1 size-5 shrink-0 text-coral transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border-[1.5px] border-ink bg-ink sm:grid-cols-2">
          <div className="bg-paper p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/50">For brands</p>
            <p className="mt-3 font-display text-2xl tracking-tight text-ink">
              Need help with your social media, creators or both?
            </p>
            <div className="mt-6">
              <Button href={homeInquiryHref("services")}>Let&apos;s Discuss Your Brand</Button>
            </div>
          </div>
          <div className="bg-ink p-8 text-paper sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-paper/50">For creators</p>
            <p className="mt-3 font-display text-2xl tracking-tight">Want to be considered for brand collaborations?</p>
            <div className="mt-6">
              <Button href="/for-creators#apply" variant="outline-light">
                Join Our Creator Network
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
