import type { BlogBlock } from "@/content/blog";
import { researchedComparison, researchedProfile, type AgencyRecord } from "@/content/location-guides/shared";

/**
 * YouTube agency cluster: "best YouTube influencer marketing agencies in [India / city]". Research records for
 * agencies whose own site describes YouTube influencer work, checked 2026-10-15. As in the Instagram cluster, each
 * record's `services` line says whether that is a dedicated YouTube page or YouTube named within a wider service.
 *
 * Checked and excluded:
 * - OTT, Thistle Media (kept for Bengaluru only as a named-platform agency), Chtrbox: YouTube named only in passing.
 * - Social Tweebs: no YouTube service page. Opraah: YouTube not named as a service.
 * - GrowBoostly: dedicated YouTube page but no office address or city published.
 * - Creatify Media (creatifymedia.in) is Idiotic Media's legal entity; listed once, as Idiotic Media.
 */
export const YT_RESEARCHED = "2026-10-15";
export const YT_REVIEWED = "October 2026";

export const YT_AGENCIES = {
  confluencr: {
    name: "Confluencr",
    website: "https://confluencr.com/youtube-influencer-marketing-agency/",
    domain: "confluencr.com",
    presence: "Offices in Bommanahalli, Bengaluru and Goregaon, Mumbai",
    services: "A dedicated YouTube influencer marketing page covering product reviews, how-tos, unboxings and long-form storytelling, in-house scripting and video production support, keyword, tag and description optimization, and tracking of views, watch time, click-through and conversions",
    specialty: "Platform specialist with in-house scripting and production",
    focus: "Confluencr's YouTube service adds its own scripting and production teams to creator selection, and optimizes videos for search with keywords, tags and descriptions",
    suitedFor: "Brands that want help with scripts and production as well as creator selection, from Bengaluru or Mumbai",
    sources: ["https://confluencr.com/youtube-influencer-marketing-agency/"],
    researched: YT_RESEARCHED,
  },
  famekeeda: {
    name: "Fame Keeda",
    website: "https://www.famekeeda.com/youtube-influencer-marketing",
    domain: "famekeeda.com",
    presence: "Mumbai-registered; its site lists Mumbai, Bangalore, Kolkata, Chennai, Hyderabad, Pune and Delhi as locations",
    services: "A dedicated YouTube influencer marketing page covering integrations, dedicated videos (unboxings and reviews), Shorts with product links and pre-roll, nano to celebrity creators, ASCI disclosure guidance, and tracking through affiliate links and discount codes",
    specialty: "Full YouTube format menu, from Shorts to celebrity creators",
    focus: "Fame Keeda's YouTube page covers the full range of formats and creator tiers, with brand integrations and ad films with influencers as separate services",
    suitedFor: "Consumer brands that want every YouTube format available, from Shorts to celebrity integrations",
    sources: ["https://www.famekeeda.com/youtube-influencer-marketing"],
    researched: YT_RESEARCHED,
    notes: "No street address is published on the site; locations are city pages.",
  },
  grynow: {
    name: "Grynow",
    website: "https://www.grynow.in/youtube-influencer-marketing-agency-india.html",
    domain: "grynow.in",
    presence: "DLF Phase 1, Sector 27, Gurugram, with an office in Business Bay, Dubai",
    services: "A dedicated YouTube influencer page covering integrations, dedicated videos, unboxings, product intros, long-form and Shorts, vlogs and evergreen tutorials, mega to nano creators across categories from tech to automotive, plus a separate YouTube video production service",
    specialty: "Broad YouTube format menu plus video production",
    focus: "Grynow sets out a wide YouTube format menu, including evergreen tutorials and podcasts, and offers YouTube video production as a separate service",
    suitedFor: "Delhi NCR brands that want integrations and evergreen content, or also need YouTube production",
    sources: ["https://www.grynow.in/youtube-influencer-marketing-agency-india.html", "https://www.grynow.in/contact-us.html"],
    researched: YT_RESEARCHED,
  },
  kofluence: {
    name: "Kofluence",
    website: "https://www.kofluence.com/youtube-influencer-marketing/",
    domain: "kofluence.com",
    presence: "Sarjapura Main Road, Bengaluru, with offices at T-Hub, Hyderabad and Andheri East, Mumbai (Kofluence Tech Private Limited)",
    services: "A dedicated YouTube influencer marketing page covering videos and Shorts, creator matching by content style, audience demographics and past engagement, content approval before payment, and reporting on reach, watch time, engagement, clicks and conversions",
    specialty: "Platform-led YouTube matching and reporting",
    focus: "Kofluence runs YouTube campaigns through its own platform, matching creators on audience data and reporting watch time alongside clicks and conversions",
    suitedFor: "App and D2C brands that want platform data and watch-time reporting with a managed team",
    sources: ["https://www.kofluence.com/youtube-influencer-marketing/", "https://www.kofluence.com/contact-us/"],
    researched: YT_RESEARCHED,
  },
  idiotic: {
    name: "Idiotic Media",
    website: "https://idiotic.media/youtube-influencer-marketing/",
    domain: "idiotic.media",
    presence: "Sector 53, Gurugram and Andheri East, Mumbai (Creatify Media Private Limited)",
    services: "A dedicated YouTube influencer marketing page with a strategy, execution and delivery process, client approval at each stage, and community creators found to fit the brief, alongside content amplification and UGC",
    specialty: "Stage-gated YouTube campaigns with client approvals",
    focus: "Idiotic Media's YouTube service is built around a three-stage process that needs the brand's approval before each step",
    suitedFor: "Brands that want to sign off each stage of a YouTube campaign, in Gurugram or Mumbai",
    sources: ["https://idiotic.media/youtube-influencer-marketing/", "https://idiotic.media/"],
    researched: YT_RESEARCHED,
  },
  reelax: {
    name: "Reelax",
    website: "https://getreelax.com/youtube-influencer-marketing/",
    domain: "getreelax.com",
    presence: "Lists Gurgaon as headquarters, with Mumbai and Noida (Bridgeness Technologies Pvt Ltd); no street address on the page checked",
    services: "A dedicated YouTube influencer page covering long-form integrations, dedicated videos and Shorts matched to the goal, creators vetted on watch time and audience quality rather than subscribers, one campaign manager per brand, and weekly reviews of views, watch time and conversions",
    specialty: "Watch-time vetting and weekly reporting",
    focus: "Reelax vets YouTube creators on watch time and audience quality and gives each brand one campaign manager with weekly performance reviews",
    suitedFor: "Brands that want creators chosen on watch time and a weekly reporting rhythm",
    sources: ["https://getreelax.com/youtube-influencer-marketing/"],
    researched: YT_RESEARCHED,
    notes: "Cities are listed without street addresses on the page checked.",
  },
  influenceract: {
    name: "InfluencerAct",
    website: "https://www.influenceract.com/youtube-influencer-marketing-agency.html",
    domain: "influenceract.com",
    presence: "Sector 63, Noida",
    services: "A dedicated YouTube page covering channel strategy, creator partnerships chosen for audience fit, pre-production to post-production, repurposing into Shorts and social cuts, and dedicated videos, integrations, reviews and ambassador deals tracked by views, watch time, clicks and conversions",
    specialty: "Creator partnerships plus brand channel building",
    focus: "InfluencerAct combines creator partnerships with building a brand's own YouTube channel, from content pillars to editing for retention",
    suitedFor: "Brands that want creator campaigns and their own YouTube channel developed together",
    sources: ["https://www.influenceract.com/youtube-influencer-marketing-agency.html"],
    researched: YT_RESEARCHED,
  },
  budIndia: {
    name: "Bud",
    website: "https://www.budindia.com/youtube-marketing-agency-chennai.php",
    domain: "budindia.com",
    presence: "Head office in Kalyan Nagar, Bengaluru, with a branch in Anna Nagar West, Chennai",
    services: "A YouTube marketing page for Chennai covering collaborations with local influencers, channel management (posting, playlists, community) and Google Ads targeting, alongside an influencer service that names YouTube in its multi-platform strategy",
    specialty: "YouTube channel management plus local creators",
    focus: "Bud's YouTube offer combines local influencer collaborations with running a brand's own channel and YouTube ads",
    suitedFor: "Chennai and Bengaluru brands that want creator videos, their own channel and YouTube ads handled together",
    sources: ["https://www.budindia.com/youtube-marketing-agency-chennai.php", "https://www.budindia.com/"],
    researched: YT_RESEARCHED,
  },
  thistle: {
    name: "Thistle Media",
    website: "https://thistle.media/service/digital-branding/influencer-marketing/",
    domain: "thistle.media",
    presence: "HAL 2nd Stage, Indiranagar, Bengaluru",
    services: "An influencer marketing service (identification, outreach and campaign tracking) that names YouTube among the platforms it works on, within a wider digital branding offer",
    specialty: "Local digital branding agency with an influencer service",
    focus: "Thistle Media is an Indiranagar agency where influencer marketing, including YouTube, sits within digital branding",
    suitedFor: "Bengaluru brands that want YouTube creators and brand work from a local team",
    sources: ["https://thistle.media/service/digital-branding/influencer-marketing/"],
    researched: YT_RESEARCHED,
    notes: "Names YouTube among its platforms; no dedicated YouTube page.",
  },
  orangeDigital: {
    name: "Orange Digital Marketing",
    website: "https://www.orangedigitalmarketing.in/influencer-marketing-services",
    domain: "orangedigitalmarketing.in",
    presence: "Adambakkam, Chennai",
    services: "An influencer service with a YouTube subsection and Instagram and YouTube named as preferred platforms, covering creator shortlisting, sponsored content, reviews and unboxings, contests, affiliate programs and ambassador management",
    specialty: "Chennai digital agency with a YouTube subsection",
    focus: "Orange Digital Marketing's influencer page has its own YouTube section and treats YouTube as one of its two preferred platforms",
    suitedFor: "Smaller Chennai brands that want YouTube reviews, unboxings or affiliates alongside SEO",
    sources: ["https://www.orangedigitalmarketing.in/influencer-marketing-services"],
    researched: YT_RESEARCHED,
  },
  medigit: {
    name: "MeDigit",
    website: "https://medigit.in/services/influencer-marketing/",
    domain: "medigit.in",
    presence: "Makarba, off SG Highway, Ahmedabad",
    services: "Influencer campaigns that name YouTube influencer marketing and Instagram influencer marketing as campaign types, framed around revenue and demand generation, including B2B",
    specialty: "Revenue-focused, including B2B creator work",
    focus: "MeDigit frames YouTube creator campaigns in terms of pipeline and sales, including for B2B companies",
    suitedFor: "Ahmedabad brands, including B2B and considered-purchase companies, that want YouTube tied to leads or sales",
    sources: ["https://medigit.in/services/influencer-marketing/"],
    researched: YT_RESEARCHED,
    notes: "Names YouTube influencer marketing as a campaign type; no dedicated YouTube page.",
  },
  imiAdvertising: {
    name: "IMI Advertising",
    website: "https://imiadvertising.com/influencer-marketing-agency/",
    domain: "imiadvertising.com",
    presence: "Titanium City Center, Satellite, Ahmedabad",
    services: "Influencer selection, campaign planning, content and performance tracking for YouTube and Instagram, within a wider digital marketing offer",
    specialty: "Digital agency with tracked YouTube and Instagram campaigns",
    focus: "IMI Advertising names YouTube and Instagram as the platforms it creates influencer content for, with an emphasis on tracking",
    suitedFor: "Ahmedabad SMEs trying YouTube creators for the first time alongside other digital channels",
    sources: ["https://imiadvertising.com/influencer-marketing-agency/"],
    researched: YT_RESEARCHED,
    notes: "Names YouTube among its platforms; no dedicated YouTube page.",
  },
} satisfies Record<string, AgencyRecord>;

export type YtAgencyId = keyof typeof YT_AGENCIES;

export function ytAgencyProfile(id: YtAgencyId, position: number, localNote: string): BlogBlock[] {
  return researchedProfile(YT_AGENCIES[id], position, localNote, "YouTube work described on its site");
}

export function ytComparisonTable(ids: YtAgencyId[], kudozzFit: string): BlogBlock {
  return researchedComparison(
    ids.map((id) => YT_AGENCIES[id]),
    ["Kudozz", "Works with brands across India", "Integrations, dedicated reviews, Shorts, video lifespan and link terms, tracked reporting", "Creators chosen on average views and audience, not subscribers", kudozzFit],
    ["Agency", "Location / presence", "YouTube offer", "Specialization", "May suit"],
  );
}

export const YT_SELECTION_CRITERIA: BlogBlock = {
  type: "list",
  items: [
    "YouTube evidence: a dedicated YouTube influencer marketing page, or YouTube named in the agency's own influencer service description (we say which)",
    "Verifiable presence: an office address or city published on the agency's own site, recorded with the date checked",
    "Campaign capability: creator discovery, campaign management and reporting, not only a creator directory",
    "A distinct angle: production support, watch-time vetting, channel building, data platforms or local presence, so the list offers real alternatives",
  ],
};

export const KUDOZZ_YOUTUBE: BlogBlock[] = [
  {
    type: "paragraph",
    text: "Kudozz is an influencer and creator marketing agency that works with brands across India, with a dedicated YouTube influencer marketing service. It plans the format by goal and budget: integrations for reach at lower cost, dedicated reviews and tutorials for depth, and Shorts for discovery.",
    links: [{ text: "YouTube influencer marketing service", href: "/services/youtube-influencer-marketing" }],
  },
  {
    type: "paragraph",
    text: "Creators are chosen on audience geography, average views across recent videos, watch time and comment quality, not subscriber count. Contracts cover how long the video and description links stay live, pinned comments and usage rights. Creators get time with the product and a brief with must-say points, and Kudozz reviews each cut for accuracy and for YouTube's paid promotion setting. Reports track views, watch time, clicks and codes over weeks, and state which view metric they use.",
  },
];

export const YT_CHECKLIST: BlogBlock = {
  type: "list",
  items: [
    "Which format do you recommend for my goal, integration, dedicated video or Shorts, and why?",
    "How do you choose creators: average views on recent videos, watch time and audience geography, or subscribers?",
    "Does the contract say how long the video and links stay live, and whether we get a pinned comment?",
    "Will you review the cut for product accuracy and check the paid promotion setting before it goes live?",
    "How long after publishing will you keep reporting, given that YouTube views keep accruing?",
    "Which view metric will the report use, and how will clicks and codes be tracked by creator?",
  ],
};
