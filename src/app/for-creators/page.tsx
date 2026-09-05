import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { CreatorsHero } from "@/components/creators/CreatorsHero";
import { Benefits } from "@/components/creators/Benefits";
import { CreatorHowItWorks } from "@/components/creators/CreatorHowItWorks";
import { ApplySection } from "@/components/creators/ApplySection";

export const metadata: Metadata = buildMetadata({
  title: "For Creators — Join the Kudozz Network",
  description:
    "Apply to join Kudozz's creator network and get matched with relevant brand partnerships, clear communication, and professional campaign coordination.",
  path: "/for-creators",
});

export default function ForCreatorsPage() {
  return (
    <>
      <CreatorsHero />
      <Benefits />
      <CreatorHowItWorks />
      <ApplySection />
    </>
  );
}
