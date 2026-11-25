import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd, faqSchema, homePageSchema } from "@/lib/schema";
import { homeFaqs } from "@/content/home";
import { Hero } from "@/components/home/Hero";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { DiscoveryPromoSection } from "@/components/discovery/DiscoveryPromoSection";
import { WhyInfluencer } from "@/components/home/WhyInfluencer";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { HomeUgc } from "@/components/home/HomeUgc";
import { HomeSocial } from "@/components/home/HomeSocial";
import { WhyKudozz } from "@/components/home/WhyKudozz";
import { TrustBar } from "@/components/home/TrustBar";
import { HowItWorks } from "@/components/home/HowItWorks";
import { IndiaCoverage } from "@/components/home/IndiaCoverage";
import { GlobalMarkets } from "@/components/home/GlobalMarkets";
import { CreatorNetwork } from "@/components/home/CreatorNetwork";
import { FAQSection } from "@/components/ui/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";

/*
 * Homepage keyword ownership (reports/kudozz-homepage-seo/03-keyword-url-mapping.md):
 * primary "best influencer marketing agency in India" / "influencer marketing agency India"; secondary UGC and
 * social media marketing agency terms, which the service pages own in depth.
 * "Best" is in the title by the site owner's decision (17 Nov 2026). The description phrases it as the searcher's
 * question, and the H1 and body make no superlative claim. Don't add "best" anywhere else on the page.
 */
const TITLE = "Best Influencer Marketing Agency in India | Kudozz";
const DESCRIPTION =
  "Looking for the best influencer marketing, UGC or social media marketing agency in India? Kudozz runs creator campaigns, UGC videos and brand social media.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/",
  absoluteTitle: true,
});

// FeaturedCampaigns and Testimonials are off the homepage until real case studies and client quotes
// replace the sample content in src/content/case-studies.ts and testimonials.ts.
export default function HomePage() {
  return (
    <>
      <JsonLd data={homePageSchema({ title: TITLE, description: DESCRIPTION })} />
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <ServiceAreas />
      {/* Kudozz Discovery product promotion: right after the agency introduction, before the per-service deep dives. */}
      <DiscoveryPromoSection />
      <WhyInfluencer />
      <WhatWeDo />
      <HomeUgc />
      <HomeSocial />
      <WhyKudozz />
      <TrustBar />
      <HowItWorks />
      <IndiaCoverage />
      <GlobalMarkets />
      <CreatorNetwork />
      <FAQSection faqs={homeFaqs} eyebrow="FAQ" title="Questions brands ask before choosing an agency." />
      <FinalCTA
        title="Ready to build a stronger presence for your brand?"
        body="Tell us what you need: an influencer campaign, a batch of UGC videos, ongoing social media marketing or a mix of all three. We'll come back with a point of view and a suggested plan before we talk fees."
        primaryLabel="Let's Discuss Your Brand"
        secondary={{ label: "Join Our Creator Network", href: "/for-creators#apply" }}
      />
    </>
  );
}
