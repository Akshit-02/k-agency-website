import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { services } from "@/content/services";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceRow } from "@/components/services/ServiceRow";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = buildMetadata({
  title: "Influencer Marketing Services",
  description:
    "Explore Kudozz's influencer marketing services — strategy, creator discovery, outreach and management, UGC, product launches, ambassador programs, and reporting.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <section className="pb-28 sm:pb-36">
        <Container>
          {services.map((service, i) => (
            <ServiceRow key={service.slug} service={service} index={i} />
          ))}
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
