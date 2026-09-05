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
      "There's no fixed minimum — budgets are scoped to your objective during the strategy call. Most single-campaign engagements start in the low-to-mid five figures, with ambassador programs typically structured as ongoing retainers.",
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
      "Most campaigns move from a signed strategy brief to launch in two to four weeks. Product launches with a fixed date can move faster with a compressed seeding timeline.",
  },
  {
    question: "What if we've never run an influencer campaign before?",
    answer:
      "That's the most common starting point for our clients. Every engagement begins with a strategy call regardless of experience level, and we handle the parts — creator vetting, contracting, coordination — that are easiest to get wrong the first time.",
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
      <FeaturedCampaigns />
      <FAQSection faqs={brandFaqs} eyebrow="Before You Reach Out" title="What brands ask us before starting a campaign." dark />
      <InquirySection />
    </>
  );
}
