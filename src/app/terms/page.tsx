import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: `The terms governing use of the ${siteConfig.name} website.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="September 5, 2026"
      sections={[
        {
          heading: "Overview",
          body: [
            `This placeholder page outlines the general terms for using the ${siteConfig.name} website. It should be reviewed and finalized by legal counsel before publication. It does not constitute the terms of any specific brand or creator services agreement, which are governed by a separate signed contract.`,
          ],
        },
        {
          heading: "Use of This Website",
          body: [
            "This website is provided for informational purposes and to facilitate inquiries from brands and creators. You agree not to misuse the site, including attempting to disrupt its operation or submitting false information through our forms.",
          ],
        },
        {
          heading: "Intellectual Property",
          body: [
            `All content on this website, including text, graphics, and design, is the property of ${siteConfig.legalName} unless otherwise noted, and may not be reproduced without permission.`,
          ],
        },
        {
          heading: "No Guaranteed Outcomes",
          body: [
            "Any statistics, case study results, or performance figures referenced on this site are illustrative or historical and do not guarantee similar results for future campaigns.",
          ],
        },
        {
          heading: "Changes to These Terms",
          body: ["We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the updated terms."],
        },
        {
          heading: "Contact",
          body: [`Questions about these terms can be sent to ${siteConfig.contact.email}.`],
        },
      ]}
    />
  );
}
