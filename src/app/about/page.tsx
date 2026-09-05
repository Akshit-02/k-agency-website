import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { AboutContent } from "@/components/about/AboutContent";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: "About Kudozz",
  description:
    "Kudozz is an influencer marketing agency built on strategy-first campaigns, transparent reporting, and real partnerships with brands and creators.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <FinalCTA />
    </>
  );
}
