import type { BlogBlock } from "@/content/blog";
import { researchedComparison, researchedProfile, type AgencyRecord } from "@/content/location-guides/shared";

/**
 * Instagram agency cluster: "best Instagram influencer marketing agencies in [India / city]". Research records for
 * agencies whose own site describes Instagram influencer work, checked 2026-10-15. Two levels of evidence, stated in
 * each record's `services` line: a dedicated Instagram influencer marketing page, or Instagram named among the
 * platforms of an influencer service. Pages list dedicated-page agencies where they exist.
 *
 * Checked and excluded (no Instagram-specific influencer content, or no verifiable location):
 * - Chtrbox, Hashtag Orange, Social Beat, MediaF5, Monkey Ads: Instagram named only in passing or not at all.
 * - Gravmo: influencer service does not mention Instagram; city names only.
 * - GroomYourGram, Bold & Beyond, Team Pumpkin: official Instagram service pages not verified.
 * - Socialveins Mumbai page could not be loaded; its Bengaluru page (checked) lists Jaipur, Delhi and Mumbai.
 */
export const IG_RESEARCHED = "2026-10-15";
export const IG_REVIEWED = "October 2026";

export const IG_AGENCIES = {
  confluencr: {
    name: "Confluencr",
    website: "https://confluencr.com/instagram-influencer-marketing-agency/",
    domain: "confluencr.com",
    presence: "Offices in Bommanahalli, Bengaluru and Goregaon, Mumbai",
    services: "A dedicated Instagram influencer marketing page covering Reels, Stories, carousels, live content, UGC, product reviews, contests and giveaways, with strategy and creator curation, scripting and editing support, and tracking of engagement, reach and conversions",
    specialty: "Platform-by-platform specialist with a regional service",
    focus: "Confluencr organizes its influencer offer by platform, and its Instagram page covers formats from Reels to live content, with a separate regional influencer marketing service",
    suitedFor: "Brands that want an Instagram specialist with offices in both Bengaluru and Mumbai",
    sources: ["https://confluencr.com/instagram-influencer-marketing-agency/", "https://confluencr.com/"],
    researched: IG_RESEARCHED,
  },
  famekeeda: {
    name: "Fame Keeda",
    website: "https://www.famekeeda.com/instagram-influencer-marketing",
    domain: "famekeeda.com",
    presence: "Mumbai-registered; its site lists Mumbai, Bangalore, Kolkata, Chennai, Hyderabad, Pune and Delhi as locations",
    services: "A dedicated Instagram influencer marketing page covering Reels, Stories, carousels, Story takeovers, Instagram Live shopping and shoppable content, nano to celebrity creators, one-off campaigns or ambassador programs, and ASCI disclosure guidance for partners",
    specialty: "Wide Instagram format menu, incl. Live shopping",
    focus: "Fame Keeda's Instagram page goes furthest on commerce formats, including Live shopping and shoppable content, and states that sponsored content must follow ASCI disclosure",
    suitedFor: "Consumer brands that want shoppable and Live formats as well as Reels, from one-off pushes to ambassador programs",
    sources: ["https://www.famekeeda.com/instagram-influencer-marketing", "https://www.famekeeda.com/"],
    researched: IG_RESEARCHED,
    notes: "No street address is published on the site; locations are city pages.",
  },
  idiotic: {
    name: "Idiotic Media",
    website: "https://idiotic.media/instagram-influencer-marketing/",
    domain: "idiotic.media",
    presence: "Sector 53, Gurugram and Andheri East, Mumbai (Creatify Media Private Limited)",
    services: "A dedicated Instagram influencer marketing page with micro and macro creators matched to the brand category, planning and forecasting, negotiation within budget, deliverable management and a custom post-campaign report, alongside meme, celebrity, YouTube and UGC services",
    specialty: "Instagram-led campaigns with meme and celebrity options",
    focus: "Idiotic Media leads with Instagram and pairs it with meme marketing, celebrity campaigns and content amplification",
    suitedFor: "Youth and consumer brands that want Instagram creators alongside meme pages or celebrity reach",
    sources: ["https://idiotic.media/instagram-influencer-marketing/", "https://idiotic.media/"],
    researched: IG_RESEARCHED,
  },
  kofluence: {
    name: "Kofluence",
    website: "https://www.kofluence.com/instagram-influencer-marketing/",
    domain: "kofluence.com",
    presence: "Sarjapura Main Road, Bengaluru, with offices at T-Hub, Hyderabad and Andheri East, Mumbai (Kofluence Tech Private Limited)",
    services: "A dedicated Instagram influencer marketing page covering Reels, posts, Stories and live sessions, AI-assisted creator search by audience and engagement, nano to mega creators, and dashboards tracking reach, engagement, link clicks and conversions",
    specialty: "Tech-led Instagram campaigns with dashboards",
    focus: "Kofluence runs Instagram campaigns through its own platform, with AI-assisted creator matching and campaign dashboards",
    suitedFor: "App and D2C brands that want platform-style data and a managed team for Instagram",
    sources: ["https://www.kofluence.com/instagram-influencer-marketing/", "https://www.kofluence.com/contact-us/"],
    researched: IG_RESEARCHED,
  },
  ott: {
    name: "OTT (ottinfluence)",
    website: "https://ottinfluence.com/instagram-influencer-marketing-agency/",
    domain: "ottinfluence.com",
    presence: "FIEE Complex, Okhla Phase II, Delhi",
    services: "A dedicated Instagram influencer marketing page covering trending Reels, bespoke content, UGC, product reviews by micro and nano creators, and contests, with co-created scripts and tracking through links and promo codes",
    specialty: "Reels and reviews at scale, with regional options",
    focus: "OTT's Instagram service centres on Reels and review volume from micro and nano creators, with regional and celebrity influencer services alongside",
    suitedFor: "Delhi brands that want many Instagram reviews and Reels, with tracked links or codes",
    sources: ["https://ottinfluence.com/instagram-influencer-marketing-agency/", "https://ottinfluence.com/"],
    researched: IG_RESEARCHED,
  },
  grynow: {
    name: "Grynow",
    website: "https://www.grynow.in/instagram-influencer-marketing-agency.html",
    domain: "grynow.in",
    presence: "DLF Phase 1, Sector 27, Gurugram, with an office in Business Bay, Dubai",
    services: "A dedicated Instagram influencer page covering posts, Stories and Reels, UGC-style content, product reviews and contests, mega to nano creators, and a process of objectives and audits, ideation approved by the brand, then execution and a campaign report",
    specialty: "Platform plus managed Instagram campaigns; India and UAE",
    focus: "Grynow offers Instagram campaigns through a managed service alongside its creator platform, with a brand approval step before launch",
    suitedFor: "Delhi NCR brands that want to approve the creator plan before launch, or also run Instagram in the UAE",
    sources: ["https://www.grynow.in/instagram-influencer-marketing-agency.html", "https://www.grynow.in/contact-us.html"],
    researched: IG_RESEARCHED,
  },
  socialveins: {
    name: "Socialveins",
    website: "https://socialveins.com/influencer-marketing-in-bangalore",
    domain: "socialveins.com",
    presence: "Lists Jaipur, Delhi and Mumbai (Socialveins Private Limited); no street addresses published",
    services: "An influencer agency and creator platform; its city pages describe Instagram Reels, Stories and creator collaborations for product discovery, awareness and conversions, plus a searchable creator directory",
    specialty: "Agency plus self-serve creator directory",
    focus: "Socialveins combines a managed influencer service with a public creator directory, and publishes city pages describing local Instagram campaigns",
    suitedFor: "Brands that want to browse creators themselves and hand campaigns to a managed team when needed",
    sources: ["https://socialveins.com/influencer-marketing-in-bangalore"],
    researched: IG_RESEARCHED,
    notes: "Locations are city names only; we did not find a published street address.",
  },
  thistle: {
    name: "Thistle Media",
    website: "https://thistle.media/service/digital-branding/influencer-marketing/",
    domain: "thistle.media",
    presence: "HAL 2nd Stage, Indiranagar, Bengaluru",
    services: "An influencer marketing service (identification, outreach and campaign tracking) that names Instagram first among the platforms it works on, alongside YouTube and X, within a wider digital branding offer",
    specialty: "Bengaluru digital branding agency with an influencer service",
    focus: "Thistle Media is an Indiranagar agency where influencer marketing sits within digital branding, with Instagram listed first among its platforms",
    suitedFor: "Bengaluru brands that want Instagram creators and brand work from a local team",
    sources: ["https://thistle.media/service/digital-branding/influencer-marketing/"],
    researched: IG_RESEARCHED,
    notes: "Names Instagram among its platforms; no dedicated Instagram page.",
  },
  budIndia: {
    name: "Bud",
    website: "https://www.budindia.com/influencer-marketing-agency-chennai.php",
    domain: "budindia.com",
    presence: "Head office in Kalyan Nagar, Bengaluru, with a branch in Anna Nagar West, Chennai",
    services: "Influencer identification and vetting at local, regional and national level, content concepts with creators, and a multi-platform strategy naming Instagram, YouTube and LinkedIn, with performance tracking and long-term creator relationships",
    specialty: "Creative agency with a local and regional influencer service",
    focus: "Bud is a creative and digital agency whose Chennai influencer page names Instagram first in its multi-platform strategy",
    suitedFor: "Chennai and Bengaluru brands that want Instagram creators and creative advertising from one team",
    sources: ["https://www.budindia.com/influencer-marketing-agency-chennai.php", "https://www.budindia.com/"],
    researched: IG_RESEARCHED,
    notes: "Names Instagram among its platforms; no dedicated Instagram page.",
  },
  orangeDigital: {
    name: "Orange Digital Marketing",
    website: "https://www.orangedigitalmarketing.in/influencer-marketing-services",
    domain: "orangedigitalmarketing.in",
    presence: "Adambakkam, Chennai",
    services: "An influencer service with an Instagram subsection, covering creator research and shortlisting, sponsored content, reviews and unboxings, contests, affiliate programs and ambassador management, alongside YouTube and X",
    specialty: "Chennai digital agency with an Instagram subsection",
    focus: "Orange Digital Marketing's influencer page has its own Instagram section and names Instagram and YouTube as its preferred platforms",
    suitedFor: "Smaller Chennai brands that want Instagram reviews, contests or affiliates alongside SEO and other channels",
    sources: ["https://www.orangedigitalmarketing.in/influencer-marketing-services"],
    researched: IG_RESEARCHED,
  },
  zapplr: {
    name: "Zapplr Media",
    website: "https://zapplrmedia.com/influencer-marketing-agency-in-chennai",
    domain: "zapplrmedia.com",
    presence: "Publishes a Chennai agency page and a Tamil creator focus; no office address on the pages checked (Zapplr Media Pvt Ltd)",
    services: "Tamil-first influencer campaigns with vetted creators, in pure Tamil for Tier 2 and 3 audiences or Tanglish for younger urban audiences, plus UGC production with content licensed for paid-ad reuse",
    specialty: "Tamil creators and Tamil-language campaigns",
    focus: "Zapplr Media builds its Chennai offer around Tamil creators and language choice by audience",
    suitedFor: "Brands that want Tamil-language Instagram creators for Tamil Nadu",
    sources: ["https://zapplrmedia.com/influencer-marketing-agency-in-chennai"],
    researched: IG_RESEARCHED,
    notes: "No office address published on the pages checked; listed for Tamil-language capability.",
  },
  medigit: {
    name: "MeDigit",
    website: "https://medigit.in/services/influencer-marketing/",
    domain: "medigit.in",
    presence: "Makarba, off SG Highway, Ahmedabad",
    services: "Influencer campaigns (discovery, outreach, storytelling and reporting) that name Instagram influencer marketing and YouTube influencer marketing as campaign types, alongside performance marketing and demand generation",
    specialty: "Revenue-focused, including B2B influencer work",
    focus: "MeDigit frames Instagram and YouTube creator campaigns in terms of revenue and demand generation",
    suitedFor: "Ahmedabad brands, including B2B companies, that want Instagram creators tied to pipeline or sales",
    sources: ["https://medigit.in/services/influencer-marketing/"],
    researched: IG_RESEARCHED,
    notes: "Names Instagram influencer marketing as a campaign type; no dedicated Instagram page.",
  },
  imiAdvertising: {
    name: "IMI Advertising",
    website: "https://imiadvertising.com/influencer-marketing-agency/",
    domain: "imiadvertising.com",
    presence: "Titanium City Center, Satellite, Ahmedabad",
    services: "Influencer selection, campaign planning, content and performance tracking for Instagram and YouTube, within a wider digital marketing offer",
    specialty: "Digital agency with tracked Instagram and YouTube campaigns",
    focus: "IMI Advertising's influencer page names Instagram and YouTube as the platforms it creates content for, with an emphasis on tracking",
    suitedFor: "Ahmedabad SMEs trying Instagram influencer marketing for the first time alongside other digital channels",
    sources: ["https://imiadvertising.com/influencer-marketing-agency/"],
    researched: IG_RESEARCHED,
    notes: "Names Instagram among its platforms; no dedicated Instagram page.",
  },
} satisfies Record<string, AgencyRecord>;

export type IgAgencyId = keyof typeof IG_AGENCIES;

export function igAgencyProfile(id: IgAgencyId, position: number, localNote: string): BlogBlock[] {
  return researchedProfile(IG_AGENCIES[id], position, localNote, "Instagram work described on its site");
}

export function igComparisonTable(ids: IgAgencyId[], kudozzFit: string): BlogBlock {
  return researchedComparison(
    ids.map((id) => IG_AGENCIES[id]),
    ["Kudozz", "Works with brands across India", "Reels, Stories, carousels, collab posts, partnership ads, reporting from creator insights", "Instagram planned by format, with creators chosen from audience insights", kudozzFit],
    ["Agency", "Location / presence", "Instagram offer", "Specialization", "May suit"],
  );
}

export const IG_SELECTION_CRITERIA: BlogBlock = {
  type: "list",
  items: [
    "Instagram evidence: a dedicated Instagram influencer marketing page, or Instagram named in the agency's own influencer service description (we say which)",
    "Verifiable presence: an office address or city published on the agency's own site, recorded with the date checked",
    "Campaign capability: creator discovery, campaign management and reporting, not only a creator directory",
    "A distinct angle: commerce formats, memes and celebrities, data platforms, regional languages or local presence, so the list offers real alternatives",
  ],
};

/** Kudozz's Instagram offer, repeated factually on every Instagram location page. */
export const KUDOZZ_INSTAGRAM: BlogBlock[] = [
  {
    type: "paragraph",
    text: "Kudozz is an influencer and creator marketing agency that works with brands across India, with a dedicated Instagram influencer marketing service. Each campaign starts from the objective and matches formats to it: Reels for discovery, Stories for clicks and offers, carousels and collab posts for consideration.",
    links: [{ text: "Instagram influencer marketing service", href: "/services/instagram-influencer-marketing" }],
  },
  {
    type: "paragraph",
    text: "Creators are chosen from audience insights (location, age and authenticity), not follower count, and recent Reels are reviewed for hook quality. Drafts are approved before posting, with Instagram's paid partnership label and an upfront ASCI label checked on every post. The strongest posts can be set up as partnership ads, and results are reported creator by creator from insights, links and codes.",
    links: [{ text: "partnership ads", href: "/blog/instagram-partnership-ads" }],
  },
];

export const IG_CHECKLIST: BlogBlock = {
  type: "list",
  items: [
    "How do you check a creator's audience location, age and authenticity? Will I see insights, not just follower counts?",
    "Which formats do you recommend for my objective, and why: Reels, Stories, carousels or collab posts?",
    "Can strong posts run as partnership ads, and are paid usage and duration in the creator contract?",
    "How do you make sure every post carries the paid partnership label and an upfront ASCI label?",
    "What will the report show: reach, saves, shares, link clicks and codes by creator, against the KPI we agreed?",
    "Are creator fees and your fee shown separately?",
  ],
};
