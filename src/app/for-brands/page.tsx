import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { BrandsHero } from "@/components/brands/BrandsHero";
import { ProblemsSolved } from "@/components/brands/ProblemsSolved";
import { BrandServices } from "@/components/brands/BrandServices";
import { WhyChooseUs } from "@/components/brands/WhyChooseUs";
import { FeaturedCampaigns } from "@/components/home/FeaturedCampaigns";
import { InquirySection } from "@/components/brands/InquirySection";

export const metadata: Metadata = buildMetadata({
  title: "Influencer Marketing for Brands",
  description:
    "Partner with Kudozz for influencer campaign strategy, creator discovery, outreach, and transparent reporting — built for brands who take this channel seriously.",
  path: "/for-brands",
});

export default function ForBrandsPage() {
  return (
    <>
      <BrandsHero />
      <ProblemsSolved />
      <BrandServices />
      <WhyChooseUs />
      <FeaturedCampaigns />
      <InquirySection />
    </>
  );
}
