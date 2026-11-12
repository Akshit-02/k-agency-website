import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services, getServicesByCategory, SERVICE_PILLARS } from "@/content/services";
import { SMM_PATH, smmCapabilities } from "@/content/social-media-management";
import { Button } from "@/components/ui/Button";
import { JsonLd, breadcrumbSchema, itemListSchema, faqSchema } from "@/lib/schema";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceRow } from "@/components/services/ServiceRow";
import { FAQSection } from "@/components/ui/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = buildMetadata({
  title: "Influencer Marketing & Social Media Services",
  description:
    "Kudozz services: social media management, influencer marketing from strategy and creator discovery to paid, barter and affiliate campaigns, and UGC production.",
  path: "/services",
});

const hubFaqs = [
  {
    question: "Does Kudozz offer social media management?",
    answer:
      "Yes. Kudozz manages brand social media month by month: strategy, content calendars, posts and Reels, captions, publishing, community management within an agreed scope and monthly reporting. Paid advertising, shoots and customer support are scoped separately.",
  },
  {
    question: "What's the difference between social media management and influencer marketing?",
    answer:
      "Social media management runs your brand's own accounts: what you post, when, and how you respond. Influencer marketing pays creators to talk about your brand to their audiences. Many brands use both, and Kudozz can plan them on one calendar so launches and creator content line up with your own posts.",
  },
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
          {SERVICE_PILLARS.map((pillar, p) => {
            const categories = getServicesByCategory().filter((c) => pillar.categoryIds.includes(c.id));
            return (
              <section key={pillar.id} id={pillar.id} aria-labelledby={`${pillar.id}-heading`} className="scroll-mt-28 pt-20 first:pt-0">
                <div className="flex items-baseline gap-5 border-b-[3px] border-ink pb-6">
                  <span className="font-black-display text-sm text-coral">{String(p + 1).padStart(2, "0")}</span>
                  <div>
                    <h2 id={`${pillar.id}-heading`} className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
                      {pillar.name}
                    </h2>
                    <p className="mt-3 max-w-2xl text-base text-ink/65">{pillar.description}</p>
                  </div>
                </div>

                {pillar.id === "social-media-management" && (
                  <div className="mt-10 grid gap-8 bg-ink p-8 text-paper sm:p-12 lg:grid-cols-[1fr_1.1fr]">
                    <div>
                      <h3 className="font-display text-3xl tracking-tight">
                        <Link href={SMM_PATH} className="hover:underline decoration-2 underline-offset-4">
                          Social Media Management
                        </Link>
                      </h3>
                      <p className="mt-4 max-w-md text-base leading-relaxed text-paper/70">
                        We run your brand&apos;s own social accounts: strategy, a monthly content calendar, posts and Reels,
                        publishing, community management and a report that shapes the next month. It connects directly
                        with our influencer and UGC work when your plan needs creators.
                      </p>
                      <div className="mt-8">
                        <Button href={SMM_PATH}>Explore Social Media Management</Button>
                      </div>
                    </div>
                    <ul className="grid content-start gap-px bg-paper/15 sm:grid-cols-2">
                      {smmCapabilities.map((cap) => (
                        <li key={cap.id} className="bg-ink">
                          <Link
                            href={`${SMM_PATH}#${cap.id}`}
                            className="group flex h-full items-start justify-between gap-3 p-4 transition-colors hover:bg-paper/5"
                          >
                            <span>
                              <span className="block font-display text-lg tracking-tight">{cap.title}</span>
                              <span className="mt-1 block text-xs leading-relaxed text-paper/55">{cap.summary.split(". ")[0]}.</span>
                            </span>
                            <ArrowRight className="mt-1 size-4 shrink-0 text-lime transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {pillar.id === "ugc-content-creation" && (
                  <p className="mt-8 max-w-3xl text-base leading-relaxed text-ink/70">
                    UGC videos, product demonstrations and creator-led content made for your channels, with usage rights
                    agreed upfront so the same assets can be repurposed across ads, your website, marketplaces and your
                    organic feed.
                  </p>
                )}

                {pillar.id !== "social-media-management" &&
                  categories.map((category) => (
                    <div key={category.id} className="mt-14">
                      {categories.length > 1 && (
                        <>
                          <h3 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">{category.name}</h3>
                          <p className="mt-2 mb-6 max-w-2xl text-base text-ink/65">{category.description}</p>
                        </>
                      )}
                      {category.services.map((service) => (
                        <ServiceRow
                          key={service.slug}
                          service={service}
                          index={parseInt(service.index, 10) - 1}
                          headingLevel={categories.length > 1 ? "h4" : "h3"}
                        />
                      ))}
                    </div>
                  ))}
              </section>
            );
          })}
        </Container>
      </section>
      <FAQSection faqs={hubFaqs} title="Common questions about working with Kudozz." />
      <FinalCTA inquiryHref="/for-brands?from=services&pos=bottom#inquiry" />
    </>
  );
}
