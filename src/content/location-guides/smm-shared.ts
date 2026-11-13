import type { BlogBlock } from "@/content/blog";

/**
 * Shared blocks for the social media marketing / management location cluster
 * ("best social media marketing agencies in [India / city]"). One page per location targets both the marketing and
 * management keyword groups, and both "agency" and "company" variants: SERPs for those terms returned the same
 * directories and agencies (see reports/location-seo/04-keyword-and-url-map.md).
 *
 * Kudozz facts here must stay consistent with src/content/social-media-management.ts and public/llms.txt:
 * social media management is offered to brands in India, delivered remotely; no city offices are claimed.
 * Competitor records live in each page file as AgencyRecord objects with sources and the date researched.
 */

export const SMM_PUBLISHED = "2026-11-12";
export const SMM_REVIEWED = "November 2026";

/** Publisher disclosure, shown near the top of every page in this cluster. */
export const SMM_DISCLOSURE: BlogBlock = {
  type: "paragraph",
  text: "Disclosure: this guide is published by Kudozz, which is included in the comparison and listed first. It is an editorial shortlist to help businesses understand their options, not an independent or official ranking, and the other agencies are not ordered by quality. Evaluate any agency, including Kudozz, against your own requirements.",
};

/** Selection criteria shared by every page; each page adds its own framing paragraph. */
export const SMM_SELECTION_CRITERIA: BlogBlock = {
  type: "list",
  items: [
    "Service relevance: social media marketing or social media management is a listed service on the agency's own website, not an occasional add-on",
    "Location relevance: an office or published presence in this market, checked on the agency's own website",
    "Execution capability: publicly described work across strategy, content creation, publishing, community management or reporting",
    "Public information: services and presence we could verify from official pages, recorded with the date checked",
    "Distinct fit: a different angle, such as scale, industry focus, performance marketing or creative production, so the shortlist offers real alternatives",
  ],
};

/** Comparison table row for Kudozz, used first in every comparison table. */
export const SMM_KUDOZZ_ROW = [
  "Kudozz",
  "Works with brands across India, remotely; no city offices claimed",
  "Social media strategy and management, content and Reels, community management, reporting, plus influencer marketing and UGC",
  "Social media management connected with creator partnerships and UGC",
  "Brands that want their own accounts and creator campaigns planned by one team",
];

export const SMM_COMPARISON_HEADERS = ["Agency", "Location / presence", "Services listed", "Specialisation", "May suit"];

/** The Kudozz profile used on every page. `localNote` is a page-specific, factual sentence. */
export function smmKudozzProfile(localNote: string): BlogBlock[] {
  return [
    { type: "subheading", text: "1. Kudozz" },
    {
      type: "paragraph",
      text: `Kudozz is a social media management and influencer marketing agency working with brands across India. It plans and runs brands' own social accounts month by month and can connect that work with creator campaigns and UGC when the plan needs them. ${localNote}`,
      links: [{ text: "social media management", href: "/services/social-media-management" }],
    },
    {
      type: "list",
      items: [
        "Presence: works with brands across India, remotely, over calls and shared calendars; Kudozz does not list a city office",
        "Social media management: strategy, monthly content calendars, creative design, Reels and short-form editing from supplied or creator footage, copywriting, publishing, community management within an agreed scope, and monthly reporting",
        "Connected services: influencer marketing, creator discovery, campaign management, product launches, and UGC content production",
        "Scoped separately: paid social advertising and ad budgets, shoots, influencer fees, customer support and crisis communication",
        "May suit: brands that want their own accounts and creator campaigns planned together by one team",
      ],
    },
    {
      type: "paragraph",
      text: "Kudozz publishes no client list, results or prices on its site, and none are claimed here. The full scope, including what is included and what is scoped separately, is on its service page, and enquiries go through the brand enquiry form.",
      links: [
        { text: "its service page", href: "/services/social-media-management#scope" },
        { text: "brand enquiry form", href: "/for-brands#inquiry" },
      ],
    },
  ];
}

/** India country page slug, linked from every city page. */
export const SMM_INDIA_SLUG = "best-social-media-marketing-agencies-in-india";
