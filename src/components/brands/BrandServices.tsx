import Link from "@/components/ui/Link";
import { ArrowUpRight } from "lucide-react";
import { getServiceBySlug } from "@/content/services";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { StaggerItem, StaggerReveal } from "@/components/animations/StaggerReveal";
import { Reveal } from "@/components/animations/Reveal";

/** The services brands most often start with, grouped by service area. Each card links to its service page. */
const groups: { area: string; slugs: string[] }[] = [
  { area: "Social media", slugs: ["social-media-management"] },
  {
    area: "Influencer marketing",
    slugs: ["campaign-strategy", "creator-discovery", "outreach-management", "social-campaigns", "product-launches"],
  },
  { area: "UGC and content", slugs: ["ugc-content-production"] },
  { area: "Measurement", slugs: ["reporting"] },
];

const cards = groups.flatMap((group) =>
  group.slugs.flatMap((slug) => {
    const service = getServiceBySlug(slug);
    return service ? [{ area: group.area, service }] : [];
  })
);

export function BrandServices() {
  return (
    <section className="bg-coral py-28 text-ink sm:py-36 [&_*:focus-visible]:outline-ink">
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Services for Brands"
            title="Social media, creators and content, under one roof."
            description="Work with Kudozz on your own social accounts, on creator campaigns and launches, on UGC, or on all of them together. Every service can be hired on its own."
            descriptionClassName="text-ink"
            eyebrowClassName="bg-paper [&>span]:bg-coral"
          />
          <Reveal delay={0.1}>
            <Button href="/services" variant="dark">
              See Full Service List
            </Button>
          </Reveal>
        </div>

        <StaggerReveal className="mt-14 grid gap-[1.5px] overflow-hidden border-[1.5px] border-ink bg-ink shadow-[8px_8px_0_0_var(--color-ink)] sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ area, service }) => (
            <StaggerItem key={service.slug} className="bg-paper">
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col p-6 text-ink transition-colors duration-300 hover:bg-lime"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/70">{area}</span>
                <ServiceIcon slug={service.slug} accent="coral" className="mt-5 size-12 text-ink" />
                <h3 className="mt-5 flex items-start justify-between gap-2 font-display text-lg tracking-tight">
                  {service.name}
                  <ArrowUpRight
                    className="mt-1 size-4 shrink-0 opacity-85 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{service.shortDescription}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
