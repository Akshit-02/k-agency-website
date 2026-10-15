import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { services, getServicesByCategory } from "@/content/services";
import { JsonLd, breadcrumbSchema, itemListSchema, faqSchema } from "@/lib/schema";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceRow } from "@/components/services/ServiceRow";
import { FAQSection } from "@/components/ui/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = buildMetadata({
  title: "Influencer Marketing Services: What We Do",
  description:
    "Influencer marketing services: strategy, discovery, paid, barter, gifting and affiliate campaigns, UGC, plus Instagram, YouTube, LinkedIn and regional creators.",
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
      "Cost depends on creator tier, the number of creators, deliverables, usage rights, production and the markets you run in. A small nano- or micro-creator test costs far less than a multi-creator launch or an ambassador program. We size the budget to your objective during the strategy phase rather than working from a fixed rate card, and show creator and agency fees separately.",
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
    question: "What types of influencer campaigns does Kudozz run?",
    answer:
      "Paid campaigns with fixed fees, barter campaigns that exchange product for agreed posts, seeding and gifting with no obligation to post, affiliate and performance deals paid on tracked sales, ambassador programs, product launches, multi-creator social campaigns and UGC. We often combine them, for example seeding first and then paying the creators who respond best.",
  },
  {
    question: "Which platforms does Kudozz run influencer campaigns on?",
    answer:
      "Mainly Instagram, YouTube and LinkedIn, each with its own service, plus Snapchat, TikTok and X in markets where they matter, such as the UAE, Saudi Arabia, the UK and Australia. We plan formats, creators and disclosure for each platform rather than reusing one plan everywhere.",
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
          {getServicesByCategory().map((category) => (
            <div key={category.id} className="mt-20 first:mt-0">
              <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">{category.name}</h2>
              <p className="mt-3 mb-8 max-w-2xl text-base text-ink/65">{category.description}</p>
              {category.services.map((service) => (
                <ServiceRow key={service.slug} service={service} index={parseInt(service.index, 10) - 1} />
              ))}
            </div>
          ))}
        </Container>
      </section>
      <FAQSection faqs={hubFaqs} title="Common questions about working with an influencer marketing agency." />
      <FinalCTA inquiryHref="/for-brands?from=services&pos=bottom#inquiry" />
    </>
  );
}
