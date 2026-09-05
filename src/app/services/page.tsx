import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { services } from "@/content/services";
import { JsonLd, breadcrumbSchema, itemListSchema, faqSchema } from "@/lib/schema";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceRow } from "@/components/services/ServiceRow";
import { FAQSection } from "@/components/ui/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = buildMetadata({
  title: "Influencer Marketing Services: What We Do",
  description:
    "Explore Kudozz's influencer marketing services — strategy, creator discovery, outreach and management, UGC campaigns, product launches, ambassador programs, and reporting.",
  path: "/services",
});

const hubFaqs = [
  {
    question: "What does an influencer marketing agency do?",
    answer:
      "An influencer marketing agency plans and manages creator-led campaigns on a brand's behalf — defining strategy, finding and vetting relevant creators, handling outreach and contracts, coordinating content and approvals, and reporting on results against agreed goals.",
  },
  {
    question: "How much does influencer marketing cost?",
    answer:
      "Cost varies widely by creator tier and campaign scope. Nano and micro-creator campaigns can start in the low thousands, while multi-creator or ambassador programs with mid-tier talent typically run into the tens of thousands. We size budgets to your objective during the strategy phase rather than working from a fixed rate card.",
  },
  {
    question: "How do you choose the right influencer marketing agency?",
    answer:
      "Look for an agency that leads with strategy and measurement rather than a creator list, screens for audience fit and authenticity rather than follower count, and is transparent about how it reports results against the KPI you actually care about.",
  },
  {
    question: "How is influencer campaign success measured?",
    answer:
      "Success is measured against the specific KPI set before launch — commonly engagement rate, traffic, or conversions tracked via UTM links and promo codes — with reach and impressions reported as context rather than the primary metric.",
  },
  {
    question: "What's the difference between UGC and influencer marketing?",
    answer:
      "Influencer marketing pays primarily for distribution to a creator's own audience. UGC (user-generated content) marketing pays for authentic-feeling content that your brand owns and distributes on its own paid and owned channels. Many campaigns use both.",
  },
  {
    question: "How long does it take to launch an influencer campaign?",
    answer:
      "A standard campaign typically takes two to four weeks from strategy sign-off to launch, covering creator discovery, outreach, and content approval. Compressed timelines are possible for product launches with a fixed date.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
        ])}
      />
      <JsonLd
        data={itemListSchema(
          services.map((service) => ({ name: service.name, url: `${siteConfig.url}/services/${service.slug}` }))
        )}
      />
      <JsonLd data={faqSchema(hubFaqs)} />

      <ServicesHero />
      <section className="pb-28 sm:pb-36">
        <Container>
          <h2 className="sr-only">All influencer marketing services</h2>
          {services.map((service, i) => (
            <ServiceRow key={service.slug} service={service} index={i} />
          ))}
        </Container>
      </section>
      <FAQSection faqs={hubFaqs} title="Common questions about working with an influencer marketing agency." />
      <FinalCTA />
    </>
  );
}
