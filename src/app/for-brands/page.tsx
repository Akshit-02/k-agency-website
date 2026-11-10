import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { BrandsHero } from "@/components/brands/BrandsHero";
import { ProblemsSolved } from "@/components/brands/ProblemsSolved";
import { BrandServices } from "@/components/brands/BrandServices";
import { WhyChooseUs } from "@/components/brands/WhyChooseUs";
import { FeaturedCampaigns } from "@/components/home/FeaturedCampaigns";
import { InquirySection } from "@/components/brands/InquirySection";
import { BrandMarketsIndustries } from "@/components/brands/BrandMarketsIndustries";
import { FAQSection } from "@/components/ui/FAQSection";

export const metadata: Metadata = buildMetadata({
  title: "Influencer Marketing Services for Brands: Strategy to Reporting",
  description:
    "Partner with Kudozz, an influencer marketing agency for brands offering campaign strategy, creator discovery, outreach, and transparent reporting end to end.",
  path: "/for-brands",
});

const brandFaqs = [
  {
    question: "What's the minimum budget to work with Kudozz?",
    answer:
      "There's no fixed minimum. We scope the budget to your objective, markets and creator mix on the first call, and show creator fees and agency fees separately. Single campaigns are quoted per project; ambassador programs are usually structured as ongoing retainers.",
  },
  {
    question: "Do you only work with large brands?",
    answer:
      "No. We work with brands across company sizes, from funded DTC startups to established consumer brands, as long as there's a clear objective and budget to run a real campaign rather than a single gifted post.",
  },
  {
    question: "Can Kudozz manage creators we've already found ourselves?",
    answer:
      "Yes. We can bring existing creator relationships into a managed workflow — contracting, deliverable tracking, and reporting — without requiring you to start creator discovery over.",
  },
  {
    question: "How fast can a campaign go from inquiry to launch?",
    answer:
      "It depends on the number of creators, approvals, product shipping and usage terms. A small campaign with creators already agreed can launch within a few weeks of the strategy being signed off; launches with a fixed date are planned backwards from that date, with seeding and approvals scheduled first. We give you a timeline with the proposal.",
  },
  {
    question: "What if we've never run an influencer campaign before?",
    answer:
      "That's fine. Every engagement begins with a strategy call regardless of experience, and we handle the parts that are easiest to get wrong the first time: creator vetting, contracting, disclosure, approvals and coordination.",
  },
  {
    question: "Can Kudozz run campaigns for brands outside India?",
    answer:
      "Yes. Besides India, Kudozz runs campaigns for brands in the UAE, Saudi Arabia, the UK, Australia and Singapore. Each market has its own creator licensing, disclosure rules and languages, which we plan for from the start. Kudozz Studios Private Limited is registered in India, and contracting and invoicing are agreed per campaign.",
  },
];

export default function ForBrandsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "For Brands", url: `${siteConfig.url}/for-brands` },
        ])}
      />
      <JsonLd data={faqSchema(brandFaqs)} />

      <BrandsHero />
      <ProblemsSolved />
      <BrandServices />
      <WhyChooseUs />
      <BrandMarketsIndustries />
      {/* <FeaturedCampaigns /> */}
      <FAQSection
        faqs={brandFaqs}
        eyebrow="Before You Reach Out"
        title="What brands ask us before starting a campaign."
        dark
      />
      <InquirySection />
    </>
  );
}
