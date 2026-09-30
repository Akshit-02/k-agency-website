import type { BlogBlock } from "@/content/blog";

/**
 * Location cluster: "best influencer marketing agencies in [India / state / city]".
 * Every agency profile below doubles as the research record for the pages that cite it:
 * sources are the official pages checked, and `researched` is the date they were checked.
 * Refresh these records (and the pages' `lastReviewed`) before re-publishing a location page.
 * See docs/location-seo-audit.md for the full inventory and the refresh checklist.
 */
export const AUTHOR = { name: "Kudozz Strategy Team", role: "Agency Team" };
export const PUBLISHED = "2026-09-30";
export const REVIEWED = "September 2026";

export type AgencyRecord = {
  name: string;
  website: string;
  /** Display form of the website, used as the link text. */
  domain: string;
  /** Offices or presence as published on the agency's own site. */
  presence: string;
  /** Services as listed on the agency's own site, summarized. */
  services: string;
  /** What the agency's own positioning emphasizes. */
  focus: string;
  /** Short label for the comparison table. */
  specialty: string;
  /** Editorial judgement: the kind of brand it is likely to suit. */
  suitedFor: string;
  sources: string[];
  researched: string;
  /** Anything that could not be verified from an official source. */
  notes?: string;
};

export const AGENCIES = {
  chtrbox: {
    name: "Chtrbox",
    website: "https://chtrbox.com/",
    domain: "chtrbox.com",
    presence: "Andheri West, Mumbai",
    services: "Influencer marketing, social media marketing and performance marketing, plus a managed roster of creators",
    specialty: "360° agency with a managed creator roster",
    focus: "Chtrbox describes itself as a 360° marketing agency that builds influencer campaigns, runs social-first growth strategies and manages an exclusive creator roster, from nano creators and campus ambassadors to top influencers",
    suitedFor: "Consumer brands that want influencer, social and performance work under one roof",
    sources: ["https://chtrbox.com/"],
    researched: "2026-09-30",
  },
  confluencr: {
    name: "Confluencr",
    website: "https://confluencr.com/",
    domain: "confluencr.com",
    presence: "Office in Bengaluru; kick-off meetings offered in Bengaluru or Mumbai",
    services: "Influencer marketing by platform (YouTube, Instagram, X, LinkedIn, Telegram, podcasts), celebrity campaigns, UGC video production, regional influencer marketing, meme marketing, store visits, festive and sale promotions, and talent representation",
    specialty: "Specialist influencer agency; regional, meme and celebrity formats",
    focus: "Confluencr organizes its offer by platform, use case and industry, with dedicated pages for BFSI and fintech, e-commerce and D2C, retail, tech and apps, education, health and food",
    suitedFor: "Brands that want a specialist influencer agency with regional-language and use-case depth",
    sources: ["https://confluencr.com/"],
    researched: "2026-09-30",
  },
  grynow: {
    name: "Grynow",
    website: "https://www.grynow.in/",
    domain: "grynow.in",
    presence: "DLF Phase 1, Gurugram; publishes service pages for Delhi, Gurugram, Noida, Mumbai and Bengaluru, plus the UAE and other markets",
    services: "An influencer marketing platform for finding and activating creators, plus managed campaign services covering paid, barter, UGC and affiliate campaigns, YouTube video production, and micro, nano, regional and celebrity creators",
    specialty: "Platform plus managed campaigns; India and Middle East",
    focus: "Grynow combines a self-serve discovery platform with end-to-end campaign management, and also runs campaigns in the Middle East",
    suitedFor: "Brands that want the option to move between a platform and a managed service, or that also market in the Gulf",
    sources: ["https://www.grynow.in/"],
    researched: "2026-09-30",
  },
  influglue: {
    name: "InfluGlue",
    website: "https://www.influglue.com/",
    domain: "influglue.com",
    presence: "Gitanjali Park, Kolkata; takes campaign requests for more than 30 Indian cities",
    services: "Influencer marketing agency and platform, with campaign formats listed for store launches, restaurant reviews, app launches, hotel promotions and similar local briefs",
    specialty: "Agency and platform for city-level campaigns",
    focus: "InfluGlue positions itself as both an agency and a platform, with city-level micro-influencer listings",
    suitedFor: "Local businesses and multi-city brands running store, restaurant or launch campaigns outside the largest metros",
    sources: ["https://www.influglue.com/"],
    researched: "2026-09-30",
  },
  kofluence: {
    name: "Kofluence",
    website: "https://www.kofluence.com/",
    domain: "kofluence.com",
    presence: "Headquartered on Sarjapur Main Road, Bengaluru, with an office at T-Hub, Hyderabad",
    services: "AI-assisted influencer discovery, campaign management and reporting, a creator app, and celebrity campaigns",
    specialty: "Tech-led, performance-focused influencer marketing",
    focus: "Kofluence pitches itself as data-driven and performance-led, with its own technology platform alongside agency services",
    suitedFor: "Brands that want platform-style data and a managed team together, especially app and D2C brands chasing measurable outcomes",
    sources: ["https://www.kofluence.com/", "https://www.kofluence.com/contact-us/"],
    researched: "2026-09-30",
  },
  socialBeat: {
    name: "Social Beat",
    website: "https://www.socialbeat.in/",
    domain: "socialbeat.in",
    presence: "Offices in Bengaluru, Chennai, Delhi NCR and Mumbai",
    services: "A full-stack digital agency: performance media, social media, video, influencer marketing (including its Influencer.in platform), multilingual marketing, content and SEO",
    specialty: "Digital and performance agency with multilingual marketing",
    focus: "At Social Beat, influencer marketing sits inside a broader digital and performance offer, with a dedicated multilingual marketing practice",
    suitedFor: "Brands that want influencer work planned alongside paid media and regional-language content",
    sources: ["https://www.socialbeat.in/", "https://www.socialbeat.in/influencer-marketing/"],
    researched: "2026-09-30",
  },
  hashtagOrange: {
    name: "Hashtag Orange",
    website: "https://www.hashtagorange.in/",
    domain: "hashtagorange.in",
    presence: "Sushant Lok, Gurugram, with offices in Andheri East, Mumbai and Residency Road, Bengaluru",
    services: "Integrated marketing: strategy and creative, video production, influencer marketing, social media, paid media, SEO and corporate films",
    specialty: "Integrated creative, media and influencer campaigns",
    focus: "Hashtag Orange is an integrated agency where influencer marketing is one channel within wider brand campaigns",
    suitedFor: "Brands that want creator content tied into a larger creative and media plan",
    sources: ["https://www.hashtagorange.in/", "https://www.hashtagorange.in/contact-us"],
    researched: "2026-09-30",
  },
  opraah: {
    name: "Opraah",
    website: "https://opraah.in/",
    domain: "opraah.in",
    presence: "Sector 126, Noida",
    services: "Influencer marketing, creator management, IP building (branded content series), media production, and a program for developing micro creators",
    specialty: "Creator-first agency with creator management and branded IP",
    focus: "Opraah calls itself a creator-first agency, started in 2017, that manages creators as well as brand campaigns",
    suitedFor: "Brands interested in longer-form branded content or recurring creator-led formats, not just one-off posts",
    sources: ["https://opraah.in/"],
    researched: "2026-09-30",
  },
  gravmo: {
    name: "Gravmo",
    website: "https://www.gravmo.in/",
    domain: "gravmo.in",
    presence: "Lists offices in Delhi, Mumbai and Dubai; the site says it is managed by Fametick Media",
    services: "Influencer strategy and campaigns on Instagram, YouTube and LinkedIn, content in English, Hindi and Hinglish, UTM tracking and ROI reporting",
    specialty: "Hindi and Hinglish creators; diaspora campaigns",
    focus: "Gravmo's Delhi page emphasizes Hindi and Hinglish creators, B2B and edtech creators on LinkedIn and YouTube, and diaspora campaigns in the US, UK and Middle East",
    suitedFor: "Delhi brands that need Hindi or Hinglish content, or want to reach Indian diaspora audiences abroad",
    sources: ["https://www.gravmo.in/", "https://www.gravmo.in/best-influencer-marketing-agency-in-new-delhi"],
    researched: "2026-09-30",
    notes: "No street address published on the site; office cities taken from the site footer.",
  },
  famekeeda: {
    name: "Fame Keeda",
    website: "https://www.famekeeda.com/",
    domain: "famekeeda.com",
    presence: "Maharashtra-registered (Fame Keeda Networks Private Limited); its site lists Mumbai, Pune, Bengaluru, Delhi, Chennai, Hyderabad and Kolkata among its locations",
    services: "Influencer campaigns, celebrity endorsements, ad films with influencers, barter campaigns, product reviews, brand integrations, UGC and meme marketing",
    specialty: "Broad format menu: barter, reviews, celebrity, ad films",
    focus: "Fame Keeda offers a wide menu of creator formats, from barter and review campaigns to celebrity and ad-film work",
    suitedFor: "Brands that want many creator formats available from one partner, including lower-cost barter and review campaigns",
    sources: ["https://www.famekeeda.com/"],
    researched: "2026-09-30",
    notes: "Head-office address (CBD Belapur, Navi Mumbai) is from business directories, not the agency's own site.",
  },
  digichefs: {
    name: "DigiChefs",
    website: "https://digichefs.com/",
    domain: "digichefs.com",
    presence: "Andheri East, Mumbai",
    services: "Influencer marketing alongside SEO, social media, paid search, content, email and web development",
    specialty: "Boutique digital agency for startups",
    focus: "DigiChefs is a boutique digital agency that offers influencer marketing as part of a broader growth toolkit",
    suitedFor: "Startups and smaller brands that want influencer work and core digital marketing from the same team",
    sources: ["https://digichefs.com/influencer-marketing-agency-mumbai/"],
    researched: "2026-09-30",
  },
  gladUCame: {
    name: "Glad U Came",
    website: "https://www.gladucame.in/",
    domain: "gladucame.in",
    presence: "Andheri West, Mumbai",
    services: "Public relations and influencer marketing, run as an integrated PR and creator offer",
    specialty: "PR and influencer marketing combined",
    focus: "Glad U Came is PR-led: creator campaigns are planned alongside media relations rather than as a standalone channel",
    suitedFor: "Brands that want earned media and creator coverage coordinated around the same launch or story",
    sources: ["https://www.gladucame.in/"],
    researched: "2026-09-30",
  },
  evonix: {
    name: "Evonix",
    website: "https://www.evonix.co/",
    domain: "evonix.co",
    presence: "Wakad, Pune",
    services: "Influencer management within a wider technology and digital marketing business",
    specialty: "Local Pune influencer management",
    focus: "Evonix is a Pune technology and digital company with an influencer management service for regional brands",
    suitedFor: "Pune businesses that want a local team handling creators alongside web or digital work",
    sources: ["https://www.evonix.co/influencer-management-agency", "https://www.evonix.co/contact-us"],
    researched: "2026-09-30",
  },
  addinfi: {
    name: "Addinfi",
    website: "https://addinfi.com/",
    domain: "addinfi.com",
    presence: "Offices in Manish Nagar, Nagpur and Baner, Pune",
    services: "Digital marketing including affiliate and influencer marketing, social media and performance campaigns",
    specialty: "Digital agency across Nagpur and Pune",
    focus: "Addinfi is a digital agency with a footprint in both Vidarbha and Pune",
    suitedFor: "Brands selling into Nagpur and Vidarbha, or Pune, that want a locally present partner",
    sources: ["https://addinfi.com/", "https://addinfi.com/contact-us/"],
    researched: "2026-09-30",
  },
  monkeyAds: {
    name: "Monkey Ads & Studios",
    website: "https://www.monkeyads.in/",
    domain: "monkeyads.in",
    presence: "Offices in Althan, Surat and at World Trade Tower on SG Highway, Ahmedabad",
    services: "Influencer marketing, content marketing, SEO, performance marketing, social media and web development",
    specialty: "Video-first performance marketing",
    focus: "Monkey Ads describes itself as a video-first performance marketing agency",
    suitedFor: "Gujarat brands that want creator content judged on lead and sales numbers",
    sources: ["https://www.monkeyads.in/influencer-marketing/"],
    researched: "2026-09-30",
  },
  fourPillars: {
    name: "Four Pillars Media",
    website: "https://fourpillars.in/",
    domain: "fourpillars.in",
    presence: "Rustampura, Surat",
    services: "Influencer marketing covering creator discovery and vetting, outreach and contracting, briefing, content approvals and performance tracking, plus branding, advertising and ad films",
    specialty: "Branding, ad films and end-to-end creator campaigns",
    focus: "Four Pillars Media is a Surat branding and advertising company that runs influencer campaigns end to end for brands across India",
    suitedFor: "Surat and south Gujarat brands that want creative production and creator campaigns from one partner",
    sources: ["https://fourpillars.in/influencer-marketing/", "https://fourpillars.in/contact-us/"],
    researched: "2026-09-30",
  },
  socialee: {
    name: "Socialee",
    website: "https://www.socialee.in/",
    domain: "socialee.in",
    presence: "Lists Ahmedabad, Surat and Vadodara; business directories place its office in Alkapuri, Vadodara",
    services: "Performance, social media, content and influencer marketing, with an in-house content studio",
    specialty: "Digital media agency with an in-house studio",
    focus: "Socialee is a digital media agency with its own production studio",
    suitedFor: "Brands in central and south Gujarat that want content production and creator work together",
    sources: ["https://www.socialee.in/"],
    researched: "2026-09-30",
    notes: "Street address from business directories; the site itself lists only the three cities.",
  },
  medigit: {
    name: "MeDigit",
    website: "https://medigit.in/",
    domain: "medigit.in",
    presence: "Makarba, off SG Highway, Ahmedabad",
    services: "Influencer campaigns (creator discovery, outreach, storytelling and reporting) alongside performance marketing and demand generation",
    specialty: "Revenue-focused, including B2B influencer work",
    focus: "MeDigit frames influencer work in terms of revenue and demand generation, including B2B and e-commerce campaigns",
    suitedFor: "Ahmedabad brands, including B2B companies, that want creator work tied to pipeline or sales",
    sources: ["https://medigit.in/services/influencer-marketing/"],
    researched: "2026-09-30",
  },
  mediaF5: {
    name: "MediaF5",
    website: "https://mediaf5.com/",
    domain: "mediaf5.com",
    presence: "iSquare Corporate Park, Science City Road, Ahmedabad",
    services: "Influencer marketing, social media, content creation, photo and video production, SEO and advertising",
    specialty: "Full-service digital agency with in-house production",
    focus: "MediaF5 is a full-service digital agency with campaign managers and production in-house",
    suitedFor: "Local Ahmedabad businesses that want creator campaigns and content production handled by one team",
    sources: ["https://mediaf5.com/influencer-marketing/"],
    researched: "2026-09-30",
  },
  imiAdvertising: {
    name: "IMI Advertising",
    website: "https://imiadvertising.com/",
    domain: "imiadvertising.com",
    presence: "Titanium City Center, Satellite, Ahmedabad (also lists a UK phone number)",
    services: "Influencer selection, campaign planning, content and performance tracking on Instagram and YouTube, within a wider digital marketing offer",
    specialty: "Digital agency with tracked Instagram and YouTube campaigns",
    focus: "IMI Advertising offers influencer marketing as part of a digital agency, with an emphasis on transparent tracking",
    suitedFor: "Ahmedabad SMEs trying influencer marketing for the first time alongside their other digital channels",
    sources: ["https://imiadvertising.com/influencer-marketing-agency/"],
    researched: "2026-09-30",
  },
} satisfies Record<string, AgencyRecord>;

type AgencyId = keyof typeof AGENCIES;

/** Profile blocks for one researched agency: an h3, a summary and the verified facts. */
export function agencyProfile(id: AgencyId, position: number, localNote: string): BlogBlock[] {
  const a: AgencyRecord = AGENCIES[id];
  return [
    { type: "subheading", text: `${position}. ${a.name}` },
    {
      type: "paragraph",
      text: `${a.focus}. ${localNote} Website: ${a.domain}.`,
      links: [{ text: a.domain, href: a.website }],
    },
    {
      type: "list",
      items: [
        `Presence: ${a.presence}`,
        `Services listed on its site: ${a.services}`,
        `May suit: ${a.suitedFor}`,
      ],
    },
  ];
}

const KUDOZZ_ROW = [
  "Kudozz",
  "Works with brands across India",
  "Strategy, creator discovery, outreach, campaign management, launches, UGC, ambassador programs, reporting",
  "Dedicated influencer and creator marketing, with audience-fit and authenticity screening",
];

/** Comparison table with Kudozz first; `fit` supplies the last column per agency. */
export function comparisonTable(ids: AgencyId[], kudozzFit: string, fit: Partial<Record<AgencyId, string>> = {}): BlogBlock {
  return {
    type: "table",
    headers: ["Agency", "Location / presence", "Core services", "Specialization", "May suit"],
    rows: [
      [...KUDOZZ_ROW, kudozzFit],
      ...ids.map((id) => {
        const a: AgencyRecord = AGENCIES[id];
        return [a.name, a.presence.split(";")[0], shorten(a.services), a.specialty, fit[id] ?? a.suitedFor];
      }),
    ],
  };
}

function shorten(text: string): string {
  const first = text.split(/[,;]/).slice(0, 3).join(",");
  return first.length < text.length ? `${first.trim()}, and more` : text;
}

/** The selection-criteria list shared by every page; each page writes its own framing paragraph. */
export const SELECTION_CRITERIA: BlogBlock = {
  type: "list",
  items: [
    "Service relevance: influencer or creator marketing is a listed service, not an occasional add-on",
    "Location relevance: an office or published presence in this market, checked on the agency's own site",
    "Creator capability: evidence of creator discovery, campaign management or a creator roster",
    "Public information: services and presence we could verify from official pages, recorded with the date checked",
    "Specialization: a distinct angle, such as regional languages, PR, performance or a platform, so the list offers real alternatives",
  ],
};

/** Kudozz's services as published on /services, linked; repeated factually on every location page. */
export const KUDOZZ_SERVICES: BlogBlock = {
  type: "paragraph",
  text: "Services: influencer marketing strategy, creator discovery and matchmaking, influencer outreach and management, social media campaigns, product launch campaigns, UGC campaigns, brand ambassador programs, and campaign reporting.",
  links: [
    { text: "influencer marketing strategy", href: "/services/campaign-strategy" },
    { text: "creator discovery and matchmaking", href: "/services/creator-discovery" },
    { text: "influencer outreach and management", href: "/services/outreach-management" },
    { text: "product launch campaigns", href: "/services/product-launches" },
    { text: "UGC campaigns", href: "/services/ugc-campaigns" },
    { text: "brand ambassador programs", href: "/services/ambassador-programs" },
    { text: "campaign reporting", href: "/services/reporting" },
  ],
};

/** Schema.org `mentions` entries for the agencies a page profiles, Kudozz first. */
export function mentionsFor(ids: AgencyId[]) {
  return [
    { name: "Kudozz", url: "https://www.kudozz.in" },
    ...ids.map((id) => ({ name: AGENCIES[id].name, url: AGENCIES[id].website })),
  ];
}
