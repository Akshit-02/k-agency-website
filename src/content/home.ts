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
  { value: "3", label: "Connected service areas" },
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
    title: "A strategy before any creator list or calendar",
    body: "Every engagement starts with your objective and one agreed KPI, then the mix of creators, UGC and your own channels that fits it, so everyone knows what success means before work begins.",
    href: "/services/campaign-strategy",
    linkLabel: "Campaign strategy",
  },
  {
    title: "Creators chosen for your audience, not their follower count",
    body: "We screen every candidate for audience fit, engagement quality and fake followers, and each name on your shortlist comes with the reason it is there.",
    href: "/services/creator-discovery",
    linkLabel: "How we find and vet creators",
  },
  {
    title: "One team runs the whole campaign",
    body: "Outreach, negotiation, contracts, usage rights, briefs, approvals and publishing dates sit with one point of contact, so your team isn't chasing creators on WhatsApp.",
    href: "/services/outreach-management",
    linkLabel: "Influencer campaign management",
  },
  {
    title: "Content made for each platform",
    body: "A Reel, a YouTube integration, a LinkedIn post and a 15-second ad are different jobs. Briefs, edits and captions are written for the platform and placement they'll run on.",
    href: "/services/ugc-content-production",
    linkLabel: "UGC video production",
  },
  {
    title: "Your social media and creator work on one calendar",
    body: "Launches, creator posts and your own content are planned together, so creator and UGC content can be reused on your channels where usage rights allow.",
    href: "/services/social-media-management",
    linkLabel: "Social media management",
  },
  {
    title: "Reporting you can take to your CFO",
    body: "Results are reported against the KPI agreed at kickoff, creator by creator and channel by channel, with a plain-language note on what to repeat and what to change.",
    href: "/services/reporting",
    linkLabel: "Campaign reporting",
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

/**
 * The homepage's service-discovery cards, in the same order as the homepage sections below them
 * (influencer marketing, UGC, social media). Links point at existing URLs only; anchors differ on purpose.
 */
export const serviceAreas: {
  name: string;
  body: string;
  points: string[];
  href: string;
  cta: string;
  theme: "coral" | "ink" | "lime";
}[] = [
  {
    name: "Influencer Marketing",
    body: "Creator campaigns planned around one agreed KPI, with creators vetted for audience fit and managed from outreach to reporting.",
    points: ["Campaign strategy", "Paid, barter and affiliate campaigns", "Product launches", "Instagram, YouTube and LinkedIn"],
    href: "/services/influencer-marketing",
    cta: "Influencer marketing services for brands",
    theme: "coral",
  },
  {
    name: "UGC Marketing & Content",
    body: "Creator-made videos your brand owns and runs in ads, on product pages, on marketplaces and in its own feed.",
    points: ["Scripts, hooks and shot lists", "Product demos and unboxings", "Edits for each ad placement", "Usage rights agreed up front"],
    href: "/services/ugc-content-production",
    cta: "UGC content creation services",
    theme: "ink",
  },
  {
    name: "Social Media Marketing & Management",
    body: "Strategy, content and publishing for your brand's own accounts, with community management and a monthly report on what to change.",
    points: ["Strategy and content calendars", "Posts, carousels and Reels", "Publishing and community management", "Monthly reporting"],
    href: "/services/social-media-management",
    cta: "Social media management for growing brands",
    theme: "lime",
  },
];

/**
 * Homepage FAQ. The same array feeds the visible FAQ and the FAQPage JSON-LD, so they always match.
 * Answers must stay consistent with /services, /services/social-media-management and the inquiry flow on /for-brands.
 */
export const homeFaqs = [
  {
    question: "What does an influencer marketing agency do?",
    answer:
      "An influencer marketing agency plans creator campaigns, finds and vets creators whose audiences match your customers, negotiates fees and usage rights, manages briefs, approvals and publishing, and reports results against an agreed KPI. Kudozz can run the whole campaign or take on one part of it, such as creator discovery or reporting.",
  },
  {
    question: "How do I choose an influencer marketing agency in India?",
    answer:
      "Look for creator relevance to your category, how the agency checks audience quality and fake followers, experience in your industry, whether it manages the full campaign, transparent pricing with creator and agency fees shown separately, reporting against a KPI, access to regional-language creators if you need them, and clear communication. Ask for a sample shortlist with reasons before you sign.",
  },
  {
    question: "What services does Kudozz offer?",
    answer:
      "Three connected services: influencer marketing (strategy, creator discovery, outreach, campaign management and reporting, across paid, barter, affiliate and ambassador formats), UGC marketing and content creation (creator-made videos your brand uses in ads and on its own channels), and social media marketing and management for your brand's own accounts. You can hire Kudozz for one of them or for all three.",
  },
  {
    question: "What is the difference between influencer marketing and UGC marketing?",
    answer:
      "With influencer marketing you pay for a creator's reach: they publish content about your brand to their own followers. With UGC marketing you pay for the content itself: creators make videos in a natural, first-person style and hand them over for your brand to publish, usually as ads, on product pages or on your own accounts. Influencer posts introduce you to a new audience; UGC gives you a steady supply of creative to test and reuse.",
  },
  {
    question: "How does a UGC marketing agency help brands?",
    answer:
      "It turns \"we need more videos\" into a production process: briefs and scripts, casting creators who suit the product and audience, coordinating products and shoots, editing hook and length variations for each placement, and agreeing where and for how long you can use each asset. Kudozz also reviews ad results with your team, so the next batch builds on the angles that worked.",
  },
  {
    question: "What does a social media marketing agency handle?",
    answer:
      "Usually the strategy for your brand's own accounts, a monthly content calendar, design and short-form video, captions, scheduling and publishing, community management and monthly reporting. That is what Kudozz's social media management covers, within an agreed scope. Paid social advertising, shoots and customer support are scoped separately, and any ad budget is paid by you to the platform.",
  },
  {
    question: "Can brands use influencer marketing and UGC together?",
    answer:
      "Yes, and they work well together. A common pattern is to run creator posts for reach, then put the best-performing creator content, or separately commissioned UGC, into ads and onto your own channels. That only works if usage rights are agreed before production, which is why Kudozz settles them in the creator contract.",
  },
  {
    question: "Which social media platforms can brands use for influencer campaigns?",
    answer:
      "For most consumer brands in India, Instagram and YouTube do the heavy lifting, from Reels and Stories to long-form integrations and Shorts. LinkedIn suits B2B brands that need to reach professionals. The right mix depends on where your customers spend time and what the campaign has to achieve, so Kudozz recommends platforms during strategy rather than defaulting to one.",
  },
  {
    question: "How do you measure influencer marketing campaign performance?",
    answer:
      "Against one primary KPI agreed before launch, such as reach in your target audience, engagement quality, website traffic or sales. Kudozz reports results creator by creator, uses tracked links or discount codes where sales attribution is possible, and closes each campaign with a plain-language debrief on what to repeat and what to change.",
  },
  {
    question: "How much does influencer marketing cost in India?",
    answer:
      "There is no fixed price. Cost depends on creator tier, platform, number of creators, deliverables, campaign duration, usage rights, production needs, the audience and locations you target, and your objective. Kudozz sizes the creator mix to your budget and shows creator fees separately.",
  },
  {
    question: "Does Kudozz run influencer campaigns outside India?",
    answer:
      "Yes. Besides India, Kudozz runs influencer campaigns for brands in the UAE, Saudi Arabia, the UK, Australia and Singapore, and plans Qatar, Kuwait, Oman and Bahrain case by case. Each market has its own creator licensing, disclosure rules and languages, which the market pages explain.",
  },
  {
    question: "How can a brand get started with Kudozz?",
    answer:
      "Fill in the brand enquiry form with your brand, contact details and website, and, if you like, what you're looking for and a rough budget. We reply within one business day, then hold a short call to agree the objective, audience, timeline and budget range, and follow up with a written plan that shows creator and agency fees separately.",
  },
];
