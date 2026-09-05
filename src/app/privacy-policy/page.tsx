import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects your information.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="September 5, 2026"
      sections={[
        {
          heading: "Overview",
          body: [
            `This placeholder policy outlines how ${siteConfig.name} ("we", "us") handles information collected through this website. It is intended as a starting structure and should be reviewed by legal counsel before publication.`,
          ],
        },
        {
          heading: "Information We Collect",
          body: [
            "We collect information you submit directly through our forms, including brand inquiries, creator applications, contact messages, and newsletter sign-ups — such as your name, email address, phone number, and any details you choose to share about your brand, content, or campaign goals.",
            "We may also collect standard technical information automatically, such as browser type and general usage data, to help us maintain and improve the site.",
          ],
        },
        {
          heading: "How We Use Information",
          body: [
            "We use the information you provide to respond to inquiries, evaluate creator applications, deliver requested content, and communicate about our services. We do not sell personal information to third parties.",
          ],
        },
        {
          heading: "Data Retention",
          body: [
            "We retain form submissions for as long as necessary to respond to your request and maintain business records, unless you ask us to delete your information sooner.",
          ],
        },
        {
          heading: "Your Choices",
          body: [
            `You can unsubscribe from our newsletter at any time using the link in any email, or by contacting us at ${siteConfig.contact.email}. You may also request access to, correction of, or deletion of your information by emailing the same address.`,
          ],
        },
        {
          heading: "Contact",
          body: [`Questions about this policy can be sent to ${siteConfig.contact.email}.`],
        },
      ]}
    />
  );
}
