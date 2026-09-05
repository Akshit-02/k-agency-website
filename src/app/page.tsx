import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { WhyInfluencer } from "@/components/home/WhyInfluencer";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FeaturedCampaigns } from "@/components/home/FeaturedCampaigns";
import { CreatorNetwork } from "@/components/home/CreatorNetwork";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: "Kudozz — Influencer Marketing Agency for Ambitious Brands",
  description:
    "Kudozz connects ambitious brands with vetted creators across every category, running influencer campaigns strategy-first and reported transparently.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyInfluencer />
      <WhatWeDo />
      <HowItWorks />
      <FeaturedCampaigns />
      <CreatorNetwork />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
