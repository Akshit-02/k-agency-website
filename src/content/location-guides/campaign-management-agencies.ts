import type { BlogBlock } from "@/content/blog";
import { researchedComparison, researchedProfile, type AgencyRecord } from "@/content/location-guides/shared";

/**
 * Campaign management agency cluster: "best influencer campaign management agencies in [India / city]".
 * This query overlaps heavily with the general "influencer marketing agency" pages, so the bar is stricter: the
 * agency's own site must describe managing campaigns (outreach, contracts, approvals, payments or reporting), and
 * shortlists avoid repeating the same city's influencer agency page where a verified alternative exists.
 * Checked 2026-10-16.
 *
 * Checked and excluded:
 * - SocioInfluencer: footer address is template text (Seattle); not verifiable.
 * - InfluCollabs: managed campaigns with a campaign manager, but no office address on the page checked.
 * - Urbanfluence Media: only a job listing found; no official site verified.
 * - Confluencr, Fame Keeda, Chtrbox: no page describing campaign management as such.
 */
export const CM_RESEARCHED = "2026-10-16";
export const CM_REVIEWED = "October 2026";

export const CM_AGENCIES = {
  kofluence: {
    name: "Kofluence",
    website: "https://www.kofluence.com/",
    domain: "kofluence.com",
    presence: "Sarjapura Main Road, Bengaluru, with offices at T-Hub, Hyderabad and Andheri East, Mumbai (Kofluence Tech Private Limited)",
    services: "End-to-end campaign management on its own platform: creator discovery and matchmaking with fraud protection, content approval before creators are paid, payment processing and real-time reports, run as a managed service",
    specialty: "Platform-run campaign management with real-time reports",
    focus: "Kofluence describes end-to-end campaign management that lets brands plan, execute and track campaigns in one platform, with approvals and payouts handled inside it",
    suitedFor: "Brands that want campaigns run for them but also want live dashboards instead of email updates",
    sources: ["https://www.kofluence.com/", "https://www.kofluence.com/instagram-influencer-marketing/", "https://www.kofluence.com/contact-us/"],
    researched: CM_RESEARCHED,
  },
  reelax: {
    name: "Reelax",
    website: "https://getreelax.com/",
    domain: "getreelax.com",
    presence: "Lists Gurgaon as headquarters, with Mumbai and Noida (Bridgeness Technologies Pvt Ltd); no street address on the pages checked",
    services: "A campaign manager assigned to each campaign who handles communication between brand and creators, briefing and quality checks on every piece, revision requests, and agreements, reviews and payouts in one platform, with live metrics and custom reports",
    specialty: "One campaign manager per brand, platform-backed",
    focus: "Reelax assigns a campaign manager to every campaign and runs agreements, revisions and payouts through its platform",
    suitedFor: "Brands that want one named person accountable for the campaign, with agreements and payouts in one place",
    sources: ["https://getreelax.com/", "https://getreelax.com/youtube-influencer-marketing/"],
    researched: CM_RESEARCHED,
    notes: "Cities are listed without street addresses on the pages checked.",
  },
  ott: {
    name: "OTT (ottinfluence)",
    website: "https://ottinfluence.com/influencer-campaign-management-services/",
    domain: "ottinfluence.com",
    presence: "FIEE Complex, Okhla Phase II, Delhi",
    services: "A dedicated influencer campaign management page covering end-to-end oversight from concept to launch, sourcing and managing creators, coordination against milestones, and reporting on engagement, views and sales against goals",
    specialty: "Dedicated campaign management service, Delhi-based",
    focus: "OTT is one of the few agencies with a page specifically for influencer campaign management, taking over a campaign from day one through to reporting",
    suitedFor: "Delhi brands that want to hand over a whole campaign, including regional and barter creators",
    sources: ["https://ottinfluence.com/influencer-campaign-management-services/"],
    researched: CM_RESEARCHED,
  },
  socialTweebs: {
    name: "Social Tweebs",
    website: "https://socialtweebs.com/",
    domain: "socialtweebs.com",
    presence: "Marathon Innova Corporate Centre, Lower Parel, Mumbai",
    services: "Fully managed campaigns run end to end, from planning and content moderation to finance management and reporting, with its own AI tool for discovery and campaign tracking",
    specialty: "Fully managed campaigns including finance management",
    focus: "Social Tweebs describes fully managed campaigns that include content moderation and finance management, the parts brands most often get stuck doing themselves",
    suitedFor: "Mumbai brands that want creator payments and content moderation taken off their team",
    sources: ["https://socialtweebs.com/"],
    researched: CM_RESEARCHED,
  },
  boomlet: {
    name: "Boomlet",
    website: "https://boomlet.co/",
    domain: "boomlet.co",
    presence: "Techniplex 1, Goregaon West, Mumbai (Boomlet Media Private Limited)",
    services: "Influencer marketing covering creative strategy, content creation and campaign management, with a separate talent wing",
    specialty: "Integrated influencer agency with content production",
    focus: "Boomlet runs campaign management alongside creative strategy and content production",
    suitedFor: "Mumbai brands that want campaign management and content production from the same team",
    sources: ["https://boomlet.co/"],
    researched: CM_RESEARCHED,
  },
  idiotic: {
    name: "Idiotic Media",
    website: "https://idiotic.media/instagram-influencer-marketing/",
    domain: "idiotic.media",
    presence: "Sector 53, Gurugram and Andheri East, Mumbai (Creatify Media Private Limited)",
    services: "Campaigns run in stages: planning and forecasting, finding creators, negotiating terms within the brand's budget and managing deliverables, with brand approval required at each stage and a custom post-campaign report",
    specialty: "Stage-gated campaigns with brand approval at each step",
    focus: "Idiotic Media describes negotiation, deliverable management and stage-by-stage brand approvals as part of every campaign",
    suitedFor: "Brands with formal sign-off processes that want approvals built into each stage",
    sources: ["https://idiotic.media/instagram-influencer-marketing/", "https://idiotic.media/youtube-influencer-marketing/"],
    researched: CM_RESEARCHED,
  },
  evonix: {
    name: "Evonix",
    website: "https://www.evonix.co/influencer-management-agency",
    domain: "evonix.co",
    presence: "Wakad, Pune",
    services: "An influencer management service covering creator selection, content alignment with brand guidelines, creative briefs and content sign-off through publishing, campaign execution and impact measurement",
    specialty: "Pune influencer management with brief-to-publish workflow",
    focus: "Evonix's influencer management page describes running creative briefs and content sign-off through to publishing",
    suitedFor: "Pune and Maharashtra brands that want a local team managing creators alongside digital work",
    sources: ["https://www.evonix.co/influencer-management-agency", "https://www.evonix.co/contact-us"],
    researched: CM_RESEARCHED,
  },
  broz: {
    name: "Broz Media",
    website: "https://www.brozmedia.co.in/",
    domain: "brozmedia.co.in",
    presence: "Paschim Vihar, New Delhi",
    services: "The full campaign lifecycle from strategy and influencer selection to content creation, campaign management, outreach, performance tracking and detailed reporting",
    specialty: "West Delhi agency running the full campaign lifecycle",
    focus: "Broz Media describes handling the whole lifecycle, from strategy and selection to campaign management and reporting",
    suitedFor: "Delhi brands that want a smaller local team to run campaigns end to end",
    sources: ["https://www.brozmedia.co.in/"],
    researched: CM_RESEARCHED,
  },
  budIndia: {
    name: "Bud",
    website: "https://www.budindia.com/influencer-marketing-agency-chennai.php",
    domain: "budindia.com",
    presence: "Head office in Kalyan Nagar, Bengaluru, with a branch in Anna Nagar West, Chennai",
    services: "Campaigns managed from start to finish, with influencer identification and vetting at local, regional and national level, content concepts, performance tracking, content creation and long-term creator relationships",
    specialty: "Start-to-finish management from a creative agency",
    focus: "Bud's influencer page says it manages campaigns from start to finish, with performance tracking and content creation included",
    suitedFor: "Chennai and Bengaluru brands that want campaigns and creative handled by one team",
    sources: ["https://www.budindia.com/influencer-marketing-agency-chennai.php", "https://www.budindia.com/"],
    researched: CM_RESEARCHED,
  },
  thistle: {
    name: "Thistle Media",
    website: "https://thistle.media/service/digital-branding/influencer-marketing/",
    domain: "thistle.media",
    presence: "HAL 2nd Stage, Indiranagar, Bengaluru",
    services: "An influencer service covering identification, outreach and campaign tracking, within a wider digital branding offer",
    specialty: "Local agency covering outreach and tracking",
    focus: "Thistle Media's influencer service covers identifying creators, outreach and tracking campaigns, alongside branding work",
    suitedFor: "Bengaluru brands that want a local team to handle outreach and tracking",
    sources: ["https://thistle.media/service/digital-branding/influencer-marketing/"],
    researched: CM_RESEARCHED,
    notes: "The page covers outreach and tracking; contracts and payments are not described.",
  },
  orangeDigital: {
    name: "Orange Digital Marketing",
    website: "https://www.orangedigitalmarketing.in/influencer-marketing-services",
    domain: "orangedigitalmarketing.in",
    presence: "Adambakkam, Chennai",
    services: "Influencer research and shortlisting, campaign planning, sponsored content, reviews and unboxings, contests, affiliate programs and ambassador program management",
    specialty: "Manages affiliate and ambassador programs as well as campaigns",
    focus: "Orange Digital Marketing's influencer service includes managing ongoing affiliate and ambassador programs, not only one-off campaigns",
    suitedFor: "Chennai brands that want ongoing creator programs managed alongside SEO",
    sources: ["https://www.orangedigitalmarketing.in/influencer-marketing-services"],
    researched: CM_RESEARCHED,
  },
  fourPillars: {
    name: "Four Pillars Media",
    website: "https://fourpillars.in/influencer-marketing/",
    domain: "fourpillars.in",
    presence: "Rustampura, Surat",
    services: "One team handling discovery, vetting and shortlisting, outreach, negotiation and agreements, campaign briefs and content review before posting, coordination of several creators in one campaign, and performance tracking",
    specialty: "End-to-end management with agreements and content review",
    focus: "Four Pillars Media's influencer page sets out the full management workflow, from agreements and briefs to reviewing content before it goes live",
    suitedFor: "Surat and south Gujarat brands that want one team to contract, brief and review creators",
    sources: ["https://fourpillars.in/influencer-marketing/", "https://fourpillars.in/contact-us/"],
    researched: CM_RESEARCHED,
  },
  medigit: {
    name: "MeDigit",
    website: "https://medigit.in/services/influencer-marketing/",
    domain: "medigit.in",
    presence: "Makarba, off SG Highway, Ahmedabad",
    services: "Influencer campaigns covering creator discovery, outreach, storytelling and reporting, framed around revenue and demand generation, including B2B",
    specialty: "Revenue-focused campaign management, including B2B",
    focus: "MeDigit manages creator discovery, outreach and reporting with results framed in revenue and pipeline terms",
    suitedFor: "Ahmedabad brands that want campaigns reported against leads or sales",
    sources: ["https://medigit.in/services/influencer-marketing/"],
    researched: CM_RESEARCHED,
  },
} satisfies Record<string, AgencyRecord>;

export type CmAgencyId = keyof typeof CM_AGENCIES;

export function cmAgencyProfile(id: CmAgencyId, position: number, localNote: string): BlogBlock[] {
  return researchedProfile(CM_AGENCIES[id], position, localNote, "Campaign management described on its site");
}

export function cmComparisonTable(ids: CmAgencyId[], kudozzFit: string): BlogBlock {
  return researchedComparison(
    ids.map((id) => CM_AGENCIES[id]),
    ["Kudozz", "Works with brands across India", "Outreach, negotiation, contracts and usage rights, approvals, disclosure checks, payments, reporting", "One point of contact; usage rights agreed before production", kudozzFit],
    ["Agency", "Location / presence", "What they manage", "Specialization", "May suit"],
  );
}

export const CM_SELECTION_CRITERIA: BlogBlock = {
  type: "list",
  items: [
    "Management evidence: the agency's own site describes running campaigns (outreach, contracts, approvals, payments or reporting), not just 'influencer marketing'",
    "Verifiable presence: an office address or city published on the agency's own site, recorded with the date checked",
    "A distinct operating model: a named campaign manager, platform-run workflows, stage-gated approvals or finance management, so the list offers real alternatives",
    "Where possible, agencies not already listed on our general influencer agency guide for the same market",
  ],
};

export const KUDOZZ_CM: BlogBlock[] = [
  {
    type: "paragraph",
    text: "Kudozz is an influencer and creator marketing agency that works with brands across India, and runs campaign management as a service of its own. One point of contact handles outreach and negotiation, contracts with deliverables, timelines and usage rights agreed before any content is made, draft and revision tracking, and publishing dates, so nothing goes live without your sign-off.",
    links: [{ text: "campaign management as a service of its own", href: "/services/outreach-management" }],
  },
  {
    type: "paragraph",
    text: "Every post is checked for the platform's paid partnership tools and an upfront ASCI label before it is published. Contracts include delivery windows and what happens if a creator misses a date, and reporting is broken down by creator against the KPI agreed at kickoff. Kudozz can contract creators directly under a master agreement with your brand, or manage creators you already work with.",
    links: [{ text: "reporting", href: "/services/reporting" }],
  },
];

/** Who does what: the operational core every campaign management page explains. */
export const CM_RACI: BlogBlock = {
  type: "table",
  headers: ["Task", "Agency", "Your team"],
  rows: [
    ["Objective, KPI and budget", "Proposes and documents", "Decides and approves"],
    ["Creator shortlist", "Sources, vets and explains each choice", "Approves or rejects"],
    ["Rates, deliverables and usage rights", "Negotiates within the agreed budget", "Approves final terms"],
    ["Contracts", "Drafts and issues (or contracts directly under a master agreement)", "Approves the template once"],
    ["Brief and product shipping", "Writes the brief; coordinates shipping", "Supplies product, guidelines and approved claims"],
    ["Draft review and disclosure", "Checks against brief and disclosure rules", "Gives final sign-off within an agreed turnaround"],
    ["Publishing and monitoring", "Tracks go-live dates and chases misses", "Shares posts on owned channels if planned"],
    ["Creator payments", "Pays against delivered, approved work (or invoices you)", "Funds per the payment schedule"],
    ["Reporting", "Collects insights, reports by creator against KPI", "Shares sales or tracking data"],
  ],
};

export const CM_CHECKLIST: BlogBlock = {
  type: "list",
  items: [
    "Who is my single point of contact, and who covers when they are away?",
    "Who contracts the creators, you or us, and can I see your contract template, including usage rights and missed-deadline terms?",
    "What turnaround do you need from us on drafts, and what happens if we're late?",
    "How do you check disclosure on every post before it goes live?",
    "When are creators paid, against what proof, and how are tax documents handled?",
    "How often will we get updates during the campaign, and what does the final report include?",
    "Are creator fees and your management fee shown separately?",
  ],
};

export const CM_MODELS: BlogBlock = {
  type: "table",
  headers: ["Option", "Who runs the campaign", "Usually suited to"],
  rows: [
    ["Full-service agency", "The agency, end to end, with one point of contact", "Brands without in-house creator managers, or running many creators at once"],
    ["Platform with managed service", "A campaign manager using the platform's workflow and dashboards", "Brands that want live data as well as hands-on help"],
    ["Self-serve platform", "Your team, using the platform's tools", "Brands with in-house staff and time to manage creators"],
    ["Freelance campaign manager", "One person, usually without contracting or payment infrastructure", "Small or one-off campaigns with a handful of creators"],
  ],
};
