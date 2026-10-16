import type { BlogBlock } from "@/content/blog";
import { researchedComparison, researchedProfile, type AgencyRecord } from "@/content/location-guides/shared";

/**
 * UGC agency cluster: "best UGC marketing agencies in [India / city]". Research records for agencies that list
 * UGC as a dedicated service on their own site, checked 2026-10-15. These are separate from AGENCIES in
 * shared.ts because a UGC listing needs UGC-specific evidence (a UGC page or service), not general influencer work.
 *
 * Checked and excluded (record kept so the next refresh doesn't repeat the work):
 * - Kofluence, Social Beat, MediaF5, Socialee, Monkey Ads, The Pixelate, Bud, Paaru Studio: no UGC service listed.
 * - Pink Lemonade: launched a UGC Studio in 2022 (trade press) but its site no longer lists UGC.
 * - ugcagency.in: only office address is in Dubai.
 * - Baclinc, Shoot Bangalore, Brand Height, House of UGC: official pages could not be loaded or verified.
 * - MADnext, Adverra Studio, Olatech: UGC listed, but no office address or city published.
 * - Intent Farm: same office addresses as Confluencr; UGC is not a main service.
 */
export const UGC_RESEARCHED = "2026-10-15";
export const UGC_REVIEWED = "October 2026";

export const UGC_AGENCIES = {
  confluencr: {
    name: "Confluencr",
    website: "https://confluencr.com/ugc-video-production/",
    domain: "confluencr.com",
    presence: "Offices in Bommanahalli, Bengaluru and Goregaon, Mumbai",
    services: "UGC video production with models, micro-influencers, customers and celebrities, scripted, shot and edited in an in-house studio, for paid ads and organic content, alongside its wider influencer marketing service",
    specialty: "Influencer agency with an in-house UGC studio",
    focus: "Confluencr runs UGC as a use case of its influencer business, with scripting, production and editing in its own studio and creators chosen for the brand's target audience",
    suitedFor: "Brands that want UGC and influencer campaigns from one partner, with offices in both Bengaluru and Mumbai",
    sources: ["https://confluencr.com/", "https://confluencr.com/ugc-video-production/"],
    researched: UGC_RESEARCHED,
  },
  famekeeda: {
    name: "Fame Keeda",
    website: "https://www.famekeeda.com/user-generated-content-agency",
    domain: "famekeeda.com",
    presence: "Mumbai-registered; its site lists Mumbai, Bangalore, Kolkata, Chennai, Hyderabad, Pune and Delhi as locations",
    services: "UGC campaigns built on customers and creators: hashtag challenges, contests, reviews, testimonials and unboxings, with curation and repurposing for ads, email, social and websites",
    specialty: "Community and customer UGC, plus creator content",
    focus: "Fame Keeda's UGC page is about turning customers and micro-influencers into content sources through challenges, contests and reviews, then curating that content for brand channels",
    suitedFor: "Consumer brands that want customer reviews and community content as well as commissioned creator videos",
    sources: ["https://www.famekeeda.com/", "https://www.famekeeda.com/user-generated-content-agency"],
    researched: UGC_RESEARCHED,
    notes: "No street address is published on the site; locations are city pages.",
  },
  grynow: {
    name: "Grynow",
    website: "https://www.grynow.in/top-user-generated-video-company-in-india.html",
    domain: "grynow.in",
    presence: "DLF Phase 1, Sector 27, Gurugram, with an office in Business Bay, Dubai",
    services: "Influencer-made UGC videos for social, ads, product pages, e-commerce, websites and email: unboxings, explainers, how-tos, reviews and app demos, with the brand choosing creators from nano to celebrity tiers",
    specialty: "Platform plus managed UGC; India and the UAE",
    focus: "Grynow sells UGC videos made by influencers, with the brand selecting creators by tier and platform, alongside its influencer platform and managed campaigns",
    suitedFor: "Brands in Delhi NCR that want to pick creators themselves, or that also need UGC for the Gulf",
    sources: ["https://www.grynow.in/top-user-generated-video-company-in-india.html", "https://www.grynow.in/contact-us.html"],
    researched: UGC_RESEARCHED,
  },
  theUgcAgency: {
    name: "The UGC Agency",
    website: "https://theugcagency.com/",
    domain: "theugcagency.com",
    presence: "Naktala, Kolkata (a unit of Zusta Autonetic Private Limited)",
    services: "UGC video production for paid ads and organic social: research and concepts, scripts with three hooks per video, creator casting, shooting and editing, with commercial usage rights and fixed monthly plans",
    specialty: "Dedicated UGC ad production on monthly plans",
    focus: "The UGC Agency is a UGC-only production business aimed at consumer brands with ongoing ad spend, built around monthly sets of master videos and hook variations",
    suitedFor: "D2C brands running Meta ads that need a steady monthly supply of tested UGC creatives",
    sources: ["https://theugcagency.com/"],
    researched: UGC_RESEARCHED,
  },
  blusteak: {
    name: "Blusteak",
    website: "https://blusteak.com/ugc",
    domain: "blusteak.com",
    presence: "Nagampadam, Kottayam, Kerala",
    services: "UGC ads for Meta and YouTube, multi-language UGC for regional Indian markets, testimonials, demos, unboxings and native-style ad creatives, within a wider performance and marketplace marketing offer",
    specialty: "Performance agency with multi-language UGC",
    focus: "Blusteak sells UGC as performance creative, with regional-language videos and marketplace and quick-commerce marketing in the same team",
    suitedFor: "Brands that want UGC tied to ad and marketplace performance, especially in regional-language markets",
    sources: ["https://blusteak.com/ugc"],
    researched: UGC_RESEARCHED,
  },
  marketingStudio: {
    name: "Marketing Studio",
    website: "https://marketingstudio.in/ugc-video-agency/",
    domain: "marketingstudio.in",
    presence: "Sector 10, Noida",
    services: "UGC video ads for each funnel stage (testimonials, demos, reviews, unboxings), creator sourcing with options to choose from, usage rights for paid ads, and published packages, alongside product and fashion photography and a rental studio",
    specialty: "Studio-backed UGC packages for D2C",
    focus: "Marketing Studio is a production studio that sells UGC in fixed packages, with photography and studio hire under the same roof",
    suitedFor: "Fashion, beauty, lifestyle and D2C brands that want UGC and product photography from one studio, starting small",
    sources: ["https://marketingstudio.in/ugc-video-agency/"],
    researched: UGC_RESEARCHED,
  },
  ott: {
    name: "OTT (ottinfluence)",
    website: "https://ottinfluence.com/ugc-video-agency/",
    domain: "ottinfluence.com",
    presence: "FIEE Complex, Okhla Phase II, Delhi",
    services: "UGC videos (testimonials, unboxings, product explainers, how-tos, trend reels, e-commerce content) alongside influencer, regional, barter and celebrity campaigns",
    specialty: "Influencer agency with a broad UGC format menu",
    focus: "OTT runs UGC as one of several creator formats, next to regional, barter and celebrity influencer campaigns",
    suitedFor: "Delhi brands that want UGC and influencer campaigns, including regional creators, from one team",
    sources: ["https://ottinfluence.com/ugc-video-agency/"],
    researched: UGC_RESEARCHED,
  },
  digistreet: {
    name: "DigiStreet Media",
    website: "https://digistreetmedia.com/services/ugc-video-agency/",
    domain: "digistreetmedia.com",
    presence: "Noida (city given on its site; no street address on the UGC page)",
    services: "UGC films planned around specific questions and placements: approved scripts and presenters before products ship, shoots with alternate openings, captioned edits and files named by concept, duration and placement, within a 360° marketing agency",
    specialty: "Process-led UGC inside a full-service agency",
    focus: "DigiStreet Media publishes a detailed UGC process, from mapping each film to one purpose to cataloguing final files, as part of a wider SEO, performance and creative offer",
    suitedFor: "Brands that want UGC planned alongside search, performance and brand work by one agency",
    sources: ["https://digistreetmedia.com/services/ugc-video-agency/"],
    researched: UGC_RESEARCHED,
  },
  irpr: {
    name: "IRPR Agency",
    website: "https://irpr.agency/ugc-agency-in-delhi",
    domain: "irpr.agency",
    presence: "Headquartered in Pune (no street address published); lists Mumbai, Delhi NCR, Bengaluru and other cities as delivery markets",
    services: "UGC videos and testimonials, vetted UGC creators, UGC built into social strategy and e-commerce content, alongside advertising, PR, technology, video production and events",
    specialty: "Pune marketing and PR agency with a UGC service",
    focus: "IRPR Agency is a Pune-based marketing, PR and technology business that runs UGC for brands in several Indian cities",
    suitedFor: "Pune and Maharashtra brands that want UGC alongside PR and advertising",
    sources: ["https://irpr.agency/ugc-agency-in-delhi", "https://irpr.agency/"],
    researched: UGC_RESEARCHED,
    notes: "The UGC page names Pune as HQ; no street address is published.",
  },
  sqroot: {
    name: "Sqroot",
    website: "https://sqroot.in/services/ugc-ads-services/",
    domain: "sqroot.in",
    presence: "Paragon Plaza, Phoenix Market City, Kurla West, Mumbai (Sqroot Media Private Limited)",
    services: "AI-generated UGC-style videos using AI avatars, with scripting, voice and lip-sync in Hindi, Hinglish and other Indian languages, delivered in vertical, square and horizontal formats",
    specialty: "AI-avatar UGC, not human creators",
    focus: "Sqroot's UGC page offers AI avatars delivering scripted, UGC-style videos as a faster, cheaper alternative to filming real creators",
    suitedFor: "Brands that want to test many scripts and hooks quickly before paying real creators to film the winners",
    sources: ["https://sqroot.in/services/ugc-ads-services/"],
    researched: UGC_RESEARCHED,
    notes: "Its UGC page describes AI avatars only; it is listed as a different kind of option, not as a creator UGC agency.",
  },
  zapplr: {
    name: "Zapplr Media",
    website: "https://zapplrmedia.com/influencer-marketing-agency-in-chennai",
    domain: "zapplrmedia.com",
    presence: "Publishes a Chennai agency page and a Tamil creator focus; no office address on the pages checked (Zapplr Media Pvt Ltd)",
    services: "Tamil-first influencer marketing and UGC production with vetted creators, raw content licensed for paid-ad reuse, in Tamil and Tanglish, with Malayalam, Telugu and Hindi campaigns mentioned",
    specialty: "Tamil creators and Tamil-language UGC",
    focus: "Zapplr Media positions itself around Tamil creators, offering pure Tamil for Tier 2 and 3 audiences and Tanglish for younger urban audiences, with UGC production as a listed service",
    suitedFor: "Brands selling in Tamil Nadu that want Tamil-language UGC and creators",
    sources: ["https://zapplrmedia.com/influencer-marketing-agency-in-chennai", "https://zapplrmedia.com/"],
    researched: UGC_RESEARCHED,
    notes: "No office address published on the pages checked; listed for Tamil-language capability, not a verified Chennai office.",
  },
} satisfies Record<string, AgencyRecord>;

export type UgcAgencyId = keyof typeof UGC_AGENCIES;

/** Profile blocks for one researched UGC agency: an h3, a summary and the verified facts. */
export function ugcAgencyProfile(id: UgcAgencyId, position: number, localNote: string): BlogBlock[] {
  return researchedProfile(UGC_AGENCIES[id], position, localNote, "UGC services listed on its site");
}

/** Comparison table with Kudozz first. */
export function ugcComparisonTable(ids: UgcAgencyId[], kudozzFit: string): BlogBlock {
  return researchedComparison(
    ids.map((id) => UGC_AGENCIES[id]),
    ["Kudozz", "Works with brands across India", "UGC campaigns, UGC content production, usage rights, creator sourcing, influencer campaigns", "UGC run as a tested programme, alongside influencer marketing", kudozzFit],
    ["Agency", "Location / presence", "UGC offer", "Specialization", "May suit"],
  );
}

export const UGC_SELECTION_CRITERIA: BlogBlock = {
  type: "list",
  items: [
    "UGC is a listed service: a UGC page or a named UGC service on the agency's own site, not a passing mention",
    "Verifiable presence: an office address or city published on the agency's own site, recorded with the date checked",
    "Production capability: evidence of scripting, creator casting, shooting or editing, not only a creator directory",
    "Clarity on rights or delivery: the site says how content can be used or how it is delivered",
    "A distinct angle: monthly ad production, community UGC, regional languages, studio packages or AI, so the list offers real alternatives",
  ],
};

/** Kudozz's UGC offer, repeated factually on every UGC location page. */
export const KUDOZZ_UGC: BlogBlock[] = [
  {
    type: "paragraph",
    text: "Kudozz is an influencer and creator marketing agency that works with brands across India. It offers UGC in two ways: UGC content production, where creators script, shoot and edit a defined batch of assets to your specs, and UGC campaigns, where those assets are planned as angles to test in ads and each new round is briefed from the last round's results.",
    links: [
      { text: "UGC content production", href: "/services/ugc-content-production" },
      { text: "UGC campaigns", href: "/services/ugc-campaigns" },
    ],
  },
  {
    type: "paragraph",
    text: "Creators are cast for on-camera delivery and audience fit, and the brand approves casting before products ship. Usage rights, duration and ownership are written into every agreement before production, and delivery includes hook and length variations, raw footage and labelled files. Because Kudozz also runs influencer campaigns, the same creators can post on their own profiles when a brand wants reach as well as assets.",
    links: [{ text: "influencer campaigns", href: "/services/paid-influencer-campaigns" }],
  },
];

/** Shared questions-to-ask list; each page frames it with its own paragraph. */
export const UGC_CHECKLIST: BlogBlock = {
  type: "list",
  items: [
    "Can I approve the creators before products ship, and see their past UGC work?",
    "What usage rights are included: which channels, paid ads or organic only, and for how long?",
    "Do I get raw footage, captions and hook variations, or only one final edit per video?",
    "How many revision rounds are included, and what counts as a reshoot?",
    "Can creators work in the languages my customers use?",
    "Who writes the scripts or talking points, and how are product claims checked?",
    "How will we decide what to make next: will you look at ad results with my team?",
  ],
};
