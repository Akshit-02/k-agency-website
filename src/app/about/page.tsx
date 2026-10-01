import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { JsonLd, aboutPageSchema, breadcrumbSchema } from "@/lib/schema";
import { AboutContent } from "@/components/about/AboutContent";
import { FinalCTA } from "@/components/home/FinalCTA";

const TITLE = "About Kudozz: Influencer Marketing Agency in India";
const DESCRIPTION =
  "Kudozz is an influencer marketing agency for brands in India: strategy-first campaigns, creator discovery, campaign management and reporting tied to one agreed KPI.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageSchema({ title: TITLE, description: DESCRIPTION })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "About", url: `${siteConfig.url}/about` },
        ])}
      />
      <AboutContent />
      <FinalCTA />
    </>
  );
}
