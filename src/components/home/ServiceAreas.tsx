import Link from "@/components/ui/Link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StaggerItem, StaggerReveal } from "@/components/animations/StaggerReveal";
import { homeInquiryHref, serviceAreas } from "@/content/home";
import { IconTile } from "@/components/icons/Pictogram";
import { servicePictogram, slugFromServiceHref } from "@/components/icons/ServiceIcon";
import { cn } from "@/lib/utils";

const themes = {
  coral: { card: "bg-coral text-ink", sub: "text-ink/90", dot: "bg-ink" },
  ink: { card: "bg-ink text-paper", sub: "text-paper/70", dot: "bg-lime" },
  lime: { card: "bg-lime text-ink", sub: "text-ink/70", dot: "bg-coral" },
} as const;

/**
 * Agency introduction: what Kudozz is, how the three services fit together, one card per service (each linking to
 * its service page), and the separate brand and creator journeys. The deeper sections for each service follow.
 */
export function ServiceAreas() {
  return (
    <section className="py-28 sm:py-36" id="service-areas">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="A creative marketing partner for brands that want to grow."
          description="Kudozz is an influencer marketing, UGC and social media marketing agency in India. Hire us for one service or all three: creators introduce your brand to new audiences, UGC gives you videos to run in ads and on product pages, and your own social media gives people a reason to stay."
        />
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70 text-pretty">
          Whether you need a launch campaign, a steady supply of ad creative or someone to run your accounts every
          month, the work follows the same order: a strategy tied to your business goal, execution handled by one
          team, and reporting that shows what worked.
        </p>

        <StaggerReveal className="mt-14 grid gap-5 lg:grid-cols-3">
          {serviceAreas.map((area, i) => {
            const theme = themes[area.theme];
            return (
              <StaggerItem key={area.name} className={cn("group flex flex-col justify-between p-8 sm:p-10", theme.card)}>
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-black-display text-sm opacity-85">{String(i + 1).padStart(2, "0")}</span>
                    <IconTile name={servicePictogram(slugFromServiceHref(area.href))} accent={area.theme === "ink" ? "lime" : area.theme} size="lg" />
                  </div>
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

        <div className="mt-16 grid gap-px overflow-hidden border-[1.5px] border-ink bg-ink sm:grid-cols-2">
          <div className="bg-paper p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/70">For brands</p>
            <p className="mt-3 font-display text-2xl tracking-tight text-ink">
              Need creators, UGC, social media or all three?
            </p>
            <div className="mt-6">
              <Button href={homeInquiryHref("services")}>Let&apos;s Discuss Your Brand</Button>
            </div>
          </div>
          <div className="bg-ink p-8 text-paper sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-paper/70">For creators</p>
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
