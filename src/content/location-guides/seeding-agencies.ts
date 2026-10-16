import type { BlogBlock } from "@/content/blog";
import { researchedComparison, researchedProfile, type AgencyRecord } from "@/content/location-guides/shared";

/**
 * Seeding agency cluster: "best influencer seeding agencies in [India / city]". Few Indian agencies sell seeding
 * as a named service, so records cover agencies whose own site describes product gifting, seeding or barter
 * collaborations, and each says which. Checked 2026-10-16. The owner chose six pages after being told that only
 * Delhi NCR and Mumbai had verifiable local supply; city pages say plainly when an agency is not local.
 *
 * Checked and excluded:
 * - Vavo Digital (Mumbai, Sehaye barter app): no official website found, only a Linktree and directories.
 * - MyHaulStore (Bengaluru): a barter case study but no seeding or gifting service described.
 * - House of Marketers, AKS Agency, Anthunt: no verifiable Indian office on official pages.
 * - Kofluence, Confluencr: no seeding, gifting or barter service page found.
 */
export const SEED_RESEARCHED = "2026-10-16";
export const SEED_REVIEWED = "October 2026";

export const SEED_AGENCIES = {
  famekeeda: {
    name: "Fame Keeda",
    website: "https://www.famekeeda.com/barter-collaboration-agency",
    domain: "famekeeda.com",
    presence: "Mumbai-registered; its site lists Mumbai, Bangalore, Kolkata, Chennai, Hyderabad, Pune and Delhi as locations",
    services: "A barter collaboration page: creators receive products, experiences or service perks instead of cash, with the content to be created and posted agreed up front (reviews, unboxings, testimonials, styling videos), ASCI disclosure required, and tracking of engagement, mentions and conversions; a separate product reviews service",
    specialty: "Barter collaborations with agreed deliverables",
    focus: "Fame Keeda's barter page sets out what creators receive and what they post, with disclosure required, which sits between pure seeding and paid work",
    suitedFor: "Consumer brands that want gifted products to come with agreed content, across many cities",
    sources: ["https://www.famekeeda.com/barter-collaboration-agency", "https://www.famekeeda.com/product-reviews-agency"],
    researched: SEED_RESEARCHED,
    notes: "Barter (agreed deliverables), not no-obligation seeding; no street address on the site.",
  },
  ott: {
    name: "OTT (ottinfluence)",
    website: "https://ottinfluence.com/barter-influencer-marketing/",
    domain: "ottinfluence.com",
    presence: "FIEE Complex, Okhla Phase II, Delhi",
    services: "A barter influencer marketing page focused on nano and micro creators who accept products or other non-cash incentives, with Reels, Shorts or testimonials as content, plus a separate product review service across food, tech, automobiles and e-commerce",
    specialty: "Nano and micro barter, plus review campaigns",
    focus: "OTT's barter page centres on finding nano and micro creators open to non-cash collaborations, with product reviews as a related service",
    suitedFor: "Brands that want product-for-content campaigns with many smaller creators",
    sources: ["https://ottinfluence.com/barter-influencer-marketing/", "https://ottinfluence.com/review-services-in-india/"],
    researched: SEED_RESEARCHED,
    notes: "Its barter page does not describe shipping, disclosure or tracking; ask how each is handled.",
  },
  grynow: {
    name: "Grynow",
    website: "https://www.grynow.in/barter-influencer-marketing-agency.html",
    domain: "grynow.in",
    presence: "DLF Phase 1, Sector 27, Gurugram, with an office in Business Bay, Dubai",
    services: "A barter influencer marketing page: free products or services in exchange for agreed content (Reels, Stories, carousels), mostly nano and micro creators, with briefing, negotiation and product delivery handled, and a post-campaign report from a dashboard",
    specialty: "Barter with product delivery and reporting handled",
    focus: "Grynow's barter page sets out a six-step process that includes product delivery and a post-campaign report",
    suitedFor: "Brands that want product delivery and reporting handled for barter campaigns",
    sources: ["https://www.grynow.in/barter-influencer-marketing-agency.html", "https://www.grynow.in/contact-us.html"],
    researched: SEED_RESEARCHED,
    notes: "Barter (agreed deliverables), not no-obligation seeding.",
  },
  unikqo: {
    name: "Unikqo",
    website: "https://unikqo.com/influencer-marketing-agency-in-mumbai/",
    domain: "unikqo.com",
    presence: "Okhla Industrial Estate Phase III, New Delhi",
    services: "Lists product seeding among its influencer services, described as coordinating product gifting and creator outreach for suitable campaigns, alongside creator discovery, UGC, paid collaborations and performance-focused campaigns for D2C and e-commerce brands",
    specialty: "Product seeding within a D2C-focused influencer service",
    focus: "Unikqo names product seeding as a step in its D2C and e-commerce campaigns, alongside UGC and paid collaborations",
    suitedFor: "D2C brands that want seeding as the first step before UGC and paid creator work",
    sources: ["https://unikqo.com/influencer-marketing-agency-in-mumbai/"],
    researched: SEED_RESEARCHED,
    notes: "Seeding is listed as a service; there is no dedicated seeding page.",
  },
  orangeDigital: {
    name: "Orange Digital Marketing",
    website: "https://www.orangedigitalmarketing.in/influencer-marketing-services",
    domain: "orangedigitalmarketing.in",
    presence: "Adambakkam, Chennai",
    services: "An influencer service covering creator shortlisting, sponsored content, product reviews and unboxings, contests, affiliate programs and ambassador management",
    specialty: "Review and unboxing campaigns from a Chennai team",
    focus: "Orange Digital Marketing runs product review and unboxing campaigns, the formats most seeding programs aim for, from Chennai",
    suitedFor: "Chennai brands that want review and unboxing content locally",
    sources: ["https://www.orangedigitalmarketing.in/influencer-marketing-services"],
    researched: SEED_RESEARCHED,
    notes: "Lists reviews and unboxings, not seeding or gifting by name.",
  },
} satisfies Record<string, AgencyRecord>;

export type SeedAgencyId = keyof typeof SEED_AGENCIES;

export function seedAgencyProfile(id: SeedAgencyId, position: number, localNote: string): BlogBlock[] {
  return researchedProfile(SEED_AGENCIES[id], position, localNote, "Seeding, gifting or barter work described on its site");
}

export function seedComparisonTable(ids: SeedAgencyId[], kudozzFit: string): BlogBlock {
  return researchedComparison(
    ids.map((id) => SEED_AGENCIES[id]),
    ["Kudozz", "Works with brands across India", "Opt-in seeding lists, shipping coordination, disclosure guidance, mention tracking, barter as a separate service", "No-obligation seeding run as a way to find future partners", kudozzFit],
    ["Agency", "Location / presence", "Seeding or barter offer", "Specialization", "May suit"],
  );
}

export const SEED_SELECTION_CRITERIA: BlogBlock = {
  type: "list",
  items: [
    "Seeding evidence: the agency's own site describes product seeding, gifting or barter collaborations (we say which, because barter comes with agreed posts and seeding does not)",
    "Verifiable presence: an office address or city published on the agency's own site, recorded with the date checked",
    "Campaign capability: creator selection and some combination of logistics, follow-up and reporting, not only a creator marketplace",
    "Honest labelling: where no local agency met these criteria, we list national agencies and say they are not local",
  ],
};

export const KUDOZZ_SEEDING: BlogBlock[] = [
  {
    type: "paragraph",
    text: "Kudozz is an influencer and creator marketing agency that works with brands across India, and runs influencer seeding and gifting as a service of its own. Seeding means sending your product to creators with no payment and no obligation to post; Kudozz runs barter, where posts are agreed in writing, as a separate service, so you always know which you're buying.",
    links: [
      { text: "influencer seeding and gifting", href: "/services/influencer-seeding-gifting" },
      { text: "barter", href: "/services/barter-influencer-campaigns" },
    ],
  },
  {
    type: "paragraph",
    text: "Creators are picked for audience fit and genuine affinity with the product, and asked before anything ships, which avoids wasted units and unwanted parcels. Kudozz coordinates packaging and delivery, sends a light follow-up with disclosure guidance, logs every mention and reports who posted, how their audience reacted and which creators to approach for paid or ambassador work next.",
  },
];

export const SEED_MODELS: BlogBlock = {
  type: "table",
  headers: ["", "Seeding (gifting)", "Barter", "Paid collaboration"],
  rows: [
    ["Creator receives", "Product, no obligation", "Product or experience for agreed posts", "A fee, usually with product"],
    ["Posting guaranteed?", "No", "Agreed in writing", "Yes, by contract"],
    ["Best for", "Word of mouth, finding partners", "Testing creators, nano and micro tiers", "Launch dates, ads, exclusivity"],
    ["Disclosure in India if posted", "Required, e.g. 'Free gift'", "Required, e.g. 'Collaboration'", "Required, e.g. 'Ad'"],
  ],
};

export const SEED_CHECKLIST: BlogBlock = {
  type: "list",
  items: [
    "Is this seeding (no obligation) or barter (agreed posts)? Get it in writing.",
    "Do you ask creators before shipping, and how do you collect addresses securely?",
    "Who packs and ships, who pays for shipping and returns, and how are damaged or lost parcels handled?",
    "What disclosure guidance goes in the package or follow-up?",
    "How will you track mentions, and what will the report show: posting rate, sentiment, creators to approach next?",
    "How are tax implications of gifted products flagged for our finance team?",
  ],
};

export const SEED_COMPLIANCE: BlogBlock = {
  type: "paragraph",
  text: "Two compliance points apply in every city. A free product is a material connection under ASCI's guidelines, so a creator who posts about it should use a clear upfront label such as 'Free gift'. And gifted products can carry tax obligations for brand and creator, including TDS on business benefits above a threshold, so ask your finance team or tax adviser how each programme is treated.",
  links: [{ text: "ASCI's guidelines", href: "/blog/influencer-disclosure-rules-by-country" }],
};
