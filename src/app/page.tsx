import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd, faqSchema, homePageSchema } from "@/lib/schema";
import { homeFaqs } from "@/content/home";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { WhyInfluencer } from "@/components/home/WhyInfluencer";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyKudozz } from "@/components/home/WhyKudozz";
import { IndiaCoverage } from "@/components/home/IndiaCoverage";
import { CreatorNetwork } from "@/components/home/CreatorNetwork";
import { FAQSection } from "@/components/ui/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";

const TITLE = "Best Influencer Marketing Agency in India | Kudozz";
const DESCRIPTION =
  "Kudozz is an influencer marketing agency for brands across India: creator discovery, campaign strategy, outreach, UGC and reporting tied to the KPI you set.";

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
      <WhyInfluencer />
      <WhatWeDo />
      <HowItWorks />
      <WhyKudozz />
      <IndiaCoverage />
      <CreatorNetwork />
      <FAQSection faqs={homeFaqs} eyebrow="FAQ" title="Questions brands ask before hiring an influencer agency." />
      <FinalCTA />
    </>
  );
}
