/**
 * Homepage copy that is also used for structured data (FAQs) or internal links.
 * Keep every claim here checkable against /services; do not add client names, counts or ratings
 * unless they are verified (see public/llms.txt).
 */

/** Inquiry link with the lead form's existing attribution params (src/pos/t), so homepage leads are identifiable. */
export function homeInquiryHref(position: string) {
  return `/for-brands?src=homepage&cat=Homepage&pos=${position}&t=Homepage#inquiry`;
}

/** Hero facts: things Kudozz can state about how it works, not unverified volume numbers. */
export const heroFacts = [
  { value: "8", label: "Core services" },
  { value: "1 KPI", label: "Agreed before launch" },
  { value: "Pan-India", label: "Creator sourcing" },
  { value: "Nano–Macro", label: "Creator tiers" },
];

export const industries: { name: string; href: string }[] = [
  { name: "D2C & E-commerce", href: "/blog/influencer-marketing-d2c-brands-india" },
  { name: "Beauty & Skincare", href: "/blog/influencer-marketing-beauty-brands-india" },
  { name: "Fashion", href: "/blog/influencer-marketing-fashion-brands-india" },
  { name: "Food & Beverage", href: "/blog/influencer-marketing-food-brands-india" },
  { name: "FMCG", href: "/blog/influencer-marketing-fmcg-brands-india" },
  { name: "Fintech", href: "/blog/influencer-marketing-fintech-brands-india" },
  { name: "Jewellery", href: "/blog/influencer-marketing-jewellery-brands-india" },
  { name: "Travel & Hospitality", href: "/blog/influencer-marketing-travel-brands-india" },
  { name: "Real Estate", href: "/blog/influencer-marketing-real-estate-brands-india" },
  { name: "Apps & SaaS", href: "/blog/saas-influencer-marketing-india" },
  { name: "B2B", href: "/blog/b2b-influencer-marketing-india" },
];

export const reasons: { title: string; body: string; href: string; linkLabel: string }[] = [
  {
    title: "Creators chosen for your audience, not their follower count",
    body: "We screen every candidate for audience fit, engagement quality and fake followers, and each name on your shortlist comes with the reason it is there.",
    href: "/services/creator-discovery",
    linkLabel: "Creator discovery",
  },
  {
    title: "A plan before a creator list",
    body: "Each campaign starts with your objective, one agreed KPI, the platform mix and a creator-tier budget, so everyone knows what success means before outreach begins.",
    href: "/services/campaign-strategy",
    linkLabel: "Campaign strategy",
  },
  {
    title: "One team runs the whole campaign",
    body: "Outreach, negotiation, contracts, usage rights, briefs, approvals and publishing dates sit with one point of contact, so your team isn't chasing creators on WhatsApp.",
    href: "/services/outreach-management",
    linkLabel: "Outreach & management",
  },
  {
    title: "Creators across India's languages and cities",
    body: "We source creators in metros, Tier 2 and Tier 3 cities and regional languages, and check that their audience lives where you actually sell.",
    href: "/blog/regional-influencer-marketing-india",
    linkLabel: "Regional campaigns",
  },
  {
    title: "Reporting you can take to your CFO",
    body: "Results are reported creator by creator against the KPI agreed at kickoff, with a plain-language debrief on what to repeat and what to change.",
    href: "/services/reporting",
    linkLabel: "Reporting",
  },
  {
    title: "Content you can keep using",
    body: "Usage rights are agreed before production, so the best creator content can run as ads, UGC or on your site without a second negotiation.",
    href: "/services/ugc-campaigns",
    linkLabel: "UGC campaigns",
  },
];

export const markets: { name: string; note: string; href: string }[] = [
  { name: "Maharashtra", note: "Mumbai, Pune, Nagpur", href: "/blog/best-influencer-marketing-agencies-in-maharashtra" },
  { name: "Mumbai", note: "City guide", href: "/blog/best-influencer-marketing-agencies-in-mumbai" },
  { name: "Delhi NCR", note: "Delhi, Gurugram, Noida", href: "/blog/best-influencer-marketing-agencies-in-delhi" },
  { name: "Karnataka", note: "Bengaluru, Mysuru, Mangaluru", href: "/blog/best-influencer-marketing-agencies-in-karnataka" },
  { name: "Gujarat", note: "Surat, Vadodara, Rajkot", href: "/blog/best-influencer-marketing-agencies-in-gujarat" },
  { name: "Ahmedabad", note: "City guide", href: "/blog/best-influencer-marketing-agencies-in-ahmedabad" },
  { name: "Tamil Nadu", note: "Chennai, Coimbatore", href: "/blog/best-influencer-marketing-agencies-in-tamil-nadu" },
  { name: "Telangana", note: "Hyderabad", href: "/blog/best-influencer-marketing-agencies-in-telangana" },
  { name: "West Bengal", note: "Kolkata", href: "/blog/best-influencer-marketing-agencies-in-west-bengal" },
  { name: "Uttar Pradesh", note: "Lucknow, Noida, Kanpur", href: "/blog/best-influencer-marketing-agencies-in-uttar-pradesh" },
];

export const homeFaqs = [
  {
    question: "What does an influencer marketing agency do?",
    answer:
      "An influencer marketing agency plans creator campaigns, finds and vets creators whose audiences match your customers, negotiates fees and usage rights, manages briefs, approvals and publishing, and reports results against an agreed KPI. At Kudozz this covers strategy, creator discovery, outreach and management, social and launch campaigns, UGC, ambassador programs and reporting.",
  },
  {
    question: "How do I choose an influencer marketing agency in India?",
    answer:
      "Look for creator relevance to your category, how the agency checks audience quality and fake followers, experience in your industry, whether it manages the full campaign, transparent pricing with creator and agency fees shown separately, reporting against a KPI, access to regional-language creators if you need them, and clear communication. Ask for a sample shortlist with reasons before you sign.",
  },
  {
    question: "Does Kudozz work with brands and creators across India?",
    answer:
      "Yes. Kudozz works with brands across India and sources creators in metros, Tier 2 and Tier 3 cities, checking that each creator's audience is in the markets the brand sells to.",
  },
  {
    question: "Can Kudozz run regional-language influencer campaigns?",
    answer:
      "Yes. Kudozz sources creators who publish in regional languages, such as Hindi, Marathi, Gujarati, Tamil, Telugu, Kannada or Bengali, and briefs them to make original content rather than translated scripts.",
  },
  {
    question: "What types of brands work with Kudozz?",
    answer:
      "Kudozz plans campaigns for consumer brands, including D2C, e-commerce, beauty, fashion, food, FMCG, jewellery and travel, and for fintech, app, SaaS and B2B companies. The creator strategy changes by category and objective.",
  },
  {
    question: "How much does influencer marketing cost in India?",
    answer:
      "There is no fixed price. Cost depends on creator tier, platform, number of creators, deliverables, campaign duration, usage rights, production needs, the audience and locations you target, and your objective. Kudozz sizes the creator mix to your budget and shows creator fees separately.",
  },
  {
    question: "Can Kudozz manage an influencer campaign from start to finish?",
    answer:
      "Yes. Kudozz can run the whole campaign, from strategy and creator discovery to outreach, contracts, content approvals, publishing and reporting, or take on one part, such as creator discovery or reporting.",
  },
];
