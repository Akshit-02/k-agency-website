import Link from "next/link";
import { getServicesByCategory } from "@/content/services";
import { ServiceRow } from "@/components/services/ServiceRow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";

export function WhatWeDo() {
  // Influencer marketing detail; social media management is introduced in ServiceAreas above.
  // The overview category holds the pillar page itself, linked from the button below rather than the grid.
  const categories = getServicesByCategory().filter((c) => c.id !== "social-media" && c.id !== "influencer-overview");
  const core = categories.find((c) => c.id === "plan-and-manage") ?? categories[0];
  const rest = categories.filter((c) => c.id !== core.id);

  return (
    <section className="py-28 sm:py-36" id="what-we-do">
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Influencer Marketing"
            title="Influencer marketing services, from strategy to reporting."
            description="Influencer marketing is where Kudozz started, and it's still at the centre of what we do. Hire us for the whole campaign or for the one piece your team can't cover."
          />
          <Reveal delay={0.15} className="flex flex-wrap gap-3">
            <Button href="/services/influencer-marketing">Explore Influencer Marketing</Button>
            <Button href="/services" variant="secondary">
              View All Services
            </Button>
          </Reveal>
        </div>

        <div className="mt-14">
          {core.services.map((service, i) => (
            <ServiceRow key={service.slug} service={service} index={i} />
          ))}
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((category) => (
            <div key={category.id}>
              <h3 className="font-display text-xl tracking-tight text-ink">{category.name}</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink/70">
                {category.services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="underline-offset-4 hover:text-ink hover:underline">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
