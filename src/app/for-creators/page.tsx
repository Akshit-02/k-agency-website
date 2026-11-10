import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { CreatorsHero } from "@/components/creators/CreatorsHero";
import { Benefits } from "@/components/creators/Benefits";
import { CreatorHowItWorks } from "@/components/creators/CreatorHowItWorks";
import { CreatorExpectations } from "@/components/creators/CreatorExpectations";
import { ApplySection } from "@/components/creators/ApplySection";
import { CreatorResourcesTeaser } from "@/components/creators/CreatorResourcesTeaser";
import { FAQSection } from "@/components/ui/FAQSection";

export const metadata: Metadata = buildMetadata({
  title: "For Creators: Join Our Influencer & Content Creator Network",
  description:
    "Apply to join Kudozz's creator network and get matched with relevant brand partnerships, clear communication, and professional campaign coordination.",
  path: "/for-creators",
});

/** Visible on the page and mirrored in FAQPage schema. Keep within the page's promises: no guaranteed campaigns or income. */
const creatorFaqs = [
  {
    question: "Does it cost anything to join the Kudozz creator network?",
    answer:
      "No. There's no cost to apply or to join, and no obligation to accept any campaign. Be wary of anyone who asks you to pay a registration fee to get brand deals.",
  },
  {
    question: "Is there a minimum follower count?",
    answer:
      "The application accepts creators from about 1,000 followers upwards, and the follower range field is optional. We look at audience fit, content quality and genuine engagement as well as size, because many briefs need nano and micro creators.",
  },
  {
    question: "Will I get brand campaigns after I join?",
    answer:
      "Joining doesn't guarantee campaigns or income. When a brand's brief fits your niche, audience and location, we contact you with the details, and you decide whether to take it.",
  },
  {
    question: "I mainly create on YouTube or as a UGC creator. Can I apply?",
    answer:
      "Yes. Add your Instagram handle, then put your YouTube channel, UGC portfolio or website in the Other Social Links field and mention your main platform in your introduction.",
  },
  {
    question: "Can creators outside India apply?",
    answer:
      "Yes. Kudozz runs campaigns for brands in India, the UAE, Saudi Arabia, the UK, Australia and Singapore. Add your city so we can match you with briefs where your audience is.",
  },
  {
    question: "What happens to the details I submit?",
    answer:
      "We use them to review your application and contact you about relevant campaigns. Our privacy policy explains how your information is handled.",
  },
];

export default function ForCreatorsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "For Creators", url: `${siteConfig.url}/for-creators` },
        ])}
      />
      <JsonLd data={faqSchema(creatorFaqs)} />
      <CreatorsHero />
      <Benefits />
      <CreatorHowItWorks />
      <CreatorExpectations />
      <ApplySection />
      <FAQSection faqs={creatorFaqs} eyebrow="Creator FAQ" title="Questions creators ask before applying." />
      <CreatorResourcesTeaser />
    </>
  );
}
