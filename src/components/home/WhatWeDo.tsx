import { services } from "@/content/services";
import { ServiceRow } from "@/components/services/ServiceRow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";

export function WhatWeDo() {
  return (
    <section className="py-28 sm:py-36" id="what-we-do">
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Our Services"
            title="Influencer marketing services, from strategy to reporting."
            description="Hire Kudozz for the whole campaign or for the one piece your team can't cover. Each service connects to the next, so nothing gets lost between planning, creators and results."
          />
          <Reveal delay={0.15}>
            <Button href="/services" variant="secondary">
              View All Services
            </Button>
          </Reveal>
        </div>

        <div className="mt-14">
          {services.map((service, i) => (
            <ServiceRow key={service.slug} service={service} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
