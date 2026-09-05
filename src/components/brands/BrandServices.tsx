import { services } from "@/content/services";
import { ServiceMotif } from "@/components/graphics/ServiceMotif";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { StaggerItem, StaggerReveal } from "@/components/animations/StaggerReveal";
import { Reveal } from "@/components/animations/Reveal";

const brandRelevant = services.filter((s) =>
  ["campaign-strategy", "creator-discovery", "outreach-management", "social-campaigns", "reporting"].includes(s.slug)
);

export function BrandServices() {
  return (
    <section className="bg-violet py-28 text-paper sm:py-36">
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Services for Brands"
            title="Strategy, execution, and reporting — under one roof."
            description="Everything a brand needs to run influencer campaigns without building an in-house team for it."
            dark
          />
          <Reveal delay={0.1}>
            <Button href="/services" variant="outline-light">
              See Full Service List
            </Button>
          </Reveal>
        </div>

        <StaggerReveal className="mt-14 grid gap-px overflow-hidden border-[1.5px] border-paper/20 sm:grid-cols-2 lg:grid-cols-5">
          {brandRelevant.map((service, i) => (
            <StaggerItem
              key={service.slug}
              className="flex flex-col bg-violet p-6 transition-colors duration-300 hover:bg-violet-dim"
            >
              <span className="font-black-display text-xs text-lime">0{i + 1}</span>
              <ServiceMotif motif={service.motif} className="mt-4 h-10 w-10 text-lime" />
              <h3 className="mt-5 font-display text-lg tracking-tight">{service.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">{service.shortDescription}</p>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
