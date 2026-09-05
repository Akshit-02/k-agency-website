import { services } from "@/content/services";
import { ServiceRow } from "@/components/services/ServiceRow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";

export function WhatWeDo() {
  const featured = services.slice(0, 6);

  return (
    <section className="py-28 sm:py-36" id="what-we-do">
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="What We Do"
            title="End-to-end influencer marketing, run like a discipline."
            description="From first strategy session to final report, every service is built to compound with the others — not sold as a one-off add-on."
          />
          <Reveal delay={0.15}>
            <Button href="/services" variant="secondary">
              View All Services
            </Button>
          </Reveal>
        </div>

        <div className="mt-14">
          {featured.map((service, i) => (
            <ServiceRow key={service.slug} service={service} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
