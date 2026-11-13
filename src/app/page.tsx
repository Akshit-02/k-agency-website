import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd, faqSchema, homePageSchema } from "@/lib/schema";
import { homeFaqs } from "@/content/home";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { WhyInfluencer } from "@/components/home/WhyInfluencer";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyKudozz } from "@/components/home/WhyKudozz";
import { IndiaCoverage } from "@/components/home/IndiaCoverage";
import { GlobalMarkets } from "@/components/home/GlobalMarkets";
import { CreatorNetwork } from "@/components/home/CreatorNetwork";
import { FAQSection } from "@/components/ui/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";

// No unverifiable superlative ("Best"): the H1 and title name what Kudozz is, which is also the head query.
const TITLE = "Influencer Marketing & Social Media Agency in India | Kudozz";
const DESCRIPTION =
  "Kudozz is an influencer marketing and social media management agency in India: creator campaigns, brand social media, UGC and reporting tied to your goals.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/",
});

// FeaturedCampaigns and Testimonials are off the homepage until real case studies and client quotes
// replace the sample content in src/content/case-studies.ts and testimonials.ts.
export default function HomePage() {
  return (
    <>
      <JsonLd data={homePageSchema({ title: TITLE, description: DESCRIPTION })} />
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <TrustBar />
      <ServiceAreas />
      <WhyInfluencer />
      <WhatWeDo />
      <HowItWorks />
      <WhyKudozz />
      <IndiaCoverage />
      <GlobalMarkets />
      <CreatorNetwork />
      <FAQSection faqs={homeFaqs} eyebrow="FAQ" title="Questions brands ask before working with Kudozz." />
      <FinalCTA
        title="Let's talk about your brand's social presence."
        body="Tell us about your brand, your customers and what you need: social media management, creator campaigns, UGC or a mix. We'll come back with a point of view and a plan before we talk fees."
        primaryLabel="Let's Discuss Your Brand"
        secondary={{ label: "Join Our Creator Network", href: "/for-creators#apply" }}
      />
    </>
  );
}
