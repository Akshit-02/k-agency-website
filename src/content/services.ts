export type ProcessStep = { title: string; body: string };
export type ServiceFaq = { question: string; answer: string };

export type Service = {
  slug: string;
  index: string;
  name: string;
  shortDescription: string;
  description: string;
  metaDescription: string;
  secondaryKeywords: string[];
  whoItsFor: string;
  deliverables: string[];
  process: ProcessStep[];
  benefits: string[];
  faqs: ServiceFaq[];
  motif: "orbit" | "grid" | "wave" | "beacon" | "loop" | "pulse" | "channel" | "ledger";
};

export const services: Service[] = [
  {
    slug: "campaign-strategy",
    index: "01",
    name: "Influencer Marketing Strategy",
    shortDescription: "Campaign planning built on audience, objective, and platform.",
    description:
      "Every campaign starts with a strategic brief, not a creator list. We study your audience, category, and business objective, then map the platform mix, content formats, and creator tiers most likely to move the metric you actually care about.",
    metaDescription:
      "Influencer marketing strategy services from Kudozz: audience research, platform and format planning, creator tiering, and a KPI framework before outreach begins.",
    secondaryKeywords: ["influencer marketing strategy", "influencer campaign planning", "influencer marketing plan"],
    whoItsFor:
      "Brands running their first influencer campaign, or teams whose past campaigns produced reach without measurable results.",
    deliverables: [
      "Audience and category research",
      "Platform and format strategy",
      "Creator tiering and budget allocation",
      "KPI framework agreed before launch",
    ],
    process: [
      { title: "Discovery Call", body: "We start with your business objective, target customer, and category — not a creator wishlist." },
      { title: "Platform & Format Mapping", body: "We map which platforms and content formats fit your audience and goal, from short-form video to long-form integrations." },
      { title: "Creator Tiering & Budget", body: "We recommend a mix of nano, micro, and mid-tier creators sized to your budget and objective, not a one-size roster." },
      { title: "KPI Framework", body: "We agree on the single primary KPI before outreach begins, so success is defined before launch, not after." },
    ],
    benefits: [
      "A strategy document before a single creator is contacted",
      "Budget allocated by objective, not spread evenly",
      "One clear KPI everyone is accountable to",
      "A platform and format mix backed by audience data",
    ],
    faqs: [
      {
        question: "How long does it take to build an influencer marketing strategy?",
        answer:
          "Most strategy engagements take one to two weeks from discovery call to a finalized brief, depending on how many product lines or markets are involved.",
      },
      {
        question: "Do I need a strategy if I already know which creators I want to use?",
        answer:
          "Yes — strategy determines budget allocation, content format, and the KPI you'll measure against. Creator selection is one output of the strategy, not a replacement for it.",
      },
      {
        question: "Can Kudozz work from an existing brand marketing plan?",
        answer:
          "Yes. We fold your existing brand guidelines, launch calendar, and paid media plan into the influencer strategy so campaigns reinforce what you're already running instead of operating in isolation.",
      },
    ],
    motif: "orbit",
  },
  {
    slug: "creator-discovery",
    index: "02",
    name: "Creator Discovery & Matchmaking",
    shortDescription: "Finding creators aligned with your audience and goals — not just your category.",
    description:
      "We screen for audience overlap, engagement quality, content style, and brand fit — not follower count alone. Every shortlist is vetted for authenticity signals before it reaches you.",
    metaDescription:
      "Influencer discovery services that screen for audience overlap, engagement quality, and authenticity — not follower count. Curated creator shortlists with a documented rationale.",
    secondaryKeywords: ["influencer discovery services", "creator matchmaking", "find influencers for brand"],
    whoItsFor:
      "Brands who have tried building creator shortlists in-house using follower count or hashtag search and gotten inconsistent results.",
    deliverables: [
      "Audience-fit and engagement audits",
      "Authenticity and fraud screening",
      "Curated creator shortlists with rationale",
      "Content style and brand-fit review",
    ],
    process: [
      { title: "Audience-Fit Modeling", body: "We build a target audience profile from your customer data and screen candidate creators' audiences against it." },
      { title: "Engagement & Authenticity Audit", body: "We review real engagement — comments, saves, growth curves — and screen for fake or purchased followers." },
      { title: "Content & Brand-Fit Review", body: "We review a creator's recent content the way a creative director would, for tone, pacing, and visual fit." },
      { title: "Shortlist Delivery", body: "You receive a curated shortlist with a written rationale for every name, not just a spreadsheet of handles." },
    ],
    benefits: [
      "Shortlists scored on audience overlap, not follower count",
      "Authenticity screening built into every candidate",
      "A documented rationale for every creator recommended",
      "Access to Kudozz's vetted, active creator network",
    ],
    faqs: [
      {
        question: "How do you check whether a creator's followers are real?",
        answer:
          "We review engagement patterns over their last 10 to 15 posts, audience growth curves, and comment quality — sudden follower spikes or generic comment patterns are the clearest signals of purchased or bot audiences.",
      },
      {
        question: "How many creators do you typically shortlist per campaign?",
        answer:
          "It depends on budget and objective, but most brands see 8 to 15 vetted candidates per campaign, from which 3 to 8 are typically activated.",
      },
      {
        question: "Can you find creators in a specific niche or region?",
        answer:
          "Yes. Our network spans fashion, beauty, tech, travel, food, fitness, lifestyle, finance, and gaming, and we source region-specific candidates outside our existing network when a campaign requires it.",
      },
    ],
    motif: "grid",
  },
  {
    slug: "outreach-management",
    index: "03",
    name: "Influencer Outreach & Management",
    shortDescription: "Negotiation, contracts, and day-to-day coordination handled end to end.",
    description:
      "From first outreach to final invoice, we manage the relationship — negotiating terms, aligning deliverables, tracking approvals, and keeping creators and brand stakeholders in sync.",
    metaDescription:
      "Influencer outreach and campaign management services: negotiation, contracting, usage rights, and deliverable tracking handled by a single point of contact.",
    secondaryKeywords: ["influencer outreach services", "influencer campaign management", "creator management"],
    whoItsFor: "Brands who don't have the internal bandwidth to negotiate, contract, and coordinate multiple creators at once.",
    deliverables: [
      "Outreach and negotiation",
      "Contracting and usage rights",
      "Deliverable and approval tracking",
      "Single point of contact for both sides",
    ],
    process: [
      { title: "Outreach & Negotiation", body: "We approach creators on your behalf and negotiate rates, deliverables, and timelines." },
      { title: "Contracting & Usage Rights", body: "Every agreement covers deliverables, timelines, and usage rights up front, before any content is produced." },
      { title: "Deliverable & Approval Tracking", body: "We track drafts, revisions, and approvals in one place so nothing ships without sign-off." },
      { title: "Single Point of Contact", body: "Your team and every creator have one dedicated contact managing the relationship end to end." },
    ],
    benefits: [
      "One team handling every creator relationship",
      "Contracts that cover usage rights up front, not after the fact",
      "A tracked approval process so nothing ships without sign-off",
      "Fewer emails and DMs landing in your inbox",
    ],
    faqs: [
      {
        question: "Who owns the contract with the creator — Kudozz or my brand?",
        answer:
          "This is set per engagement. Most clients prefer Kudozz to contract directly with creators under a master agreement with the brand, which keeps a single point of accountability.",
      },
      {
        question: "What happens if a creator misses a deadline?",
        answer:
          "Our contracts include delivery windows and contingency terms, and our team follows up proactively — most delays are caught and resolved before they affect a campaign's launch date.",
      },
      {
        question: "Can Kudozz manage creators we've already worked with?",
        answer:
          "Yes. We can bring existing creator relationships into a managed workflow, keeping the history and tone of the relationship while adding structured tracking and reporting.",
      },
    ],
    motif: "channel",
  },
  {
    slug: "social-campaigns",
    index: "04",
    name: "Social Media Campaigns",
    shortDescription: "Multi-creator campaigns engineered for coordinated reach and engagement.",
    description:
      "We orchestrate multi-creator, multi-platform pushes with staggered publishing, consistent messaging, and cross-promotion designed to compound reach instead of fragmenting it.",
    metaDescription:
      "Social media influencer campaigns coordinated across multiple creators and platforms — publishing calendar, creative direction, and real-time performance monitoring.",
    secondaryKeywords: ["social media influencer campaigns", "multi-creator campaigns", "influencer social media marketing"],
    whoItsFor: "Brands running a coordinated push across multiple creators and platforms rather than a single sponsored post.",
    deliverables: [
      "Cross-platform publishing calendar",
      "Coordinated creative direction",
      "Paid amplification guidance",
      "Real-time performance monitoring",
    ],
    process: [
      { title: "Publishing Calendar", body: "We stagger creator publishing across a defined window so reach compounds instead of hitting all at once." },
      { title: "Creative Direction", body: "We align messaging across creators while leaving room for each creator's own voice and format." },
      { title: "Paid Amplification Guidance", body: "We flag top-performing organic posts as boosting or whitelisting candidates for your paid team." },
      { title: "Real-Time Monitoring", body: "We track performance throughout the campaign window and flag underperformance early enough to adjust." },
    ],
    benefits: [
      "Reach that compounds instead of fragmenting",
      "Consistent messaging across creators without losing their voice",
      "Paid amplification guidance for top-performing organic posts",
      "Live performance monitoring during the campaign window",
    ],
    faqs: [
      {
        question: "How many creators does a typical social media campaign involve?",
        answer:
          "Multi-creator campaigns typically run 5 to 20 creators depending on budget, staggered across a 2 to 6 week publishing window for compounding reach.",
      },
      {
        question: "Do you handle paid amplification too?",
        answer:
          "We advise on which organic posts are strong whitelisting or boosting candidates and provide the creative brief; paid media buying is typically executed by your team or paid media partner.",
      },
      {
        question: "Can this run alongside our existing content calendar?",
        answer:
          "Yes — we build the creator publishing calendar around your existing brand content and product calendar so the two reinforce rather than compete.",
      },
    ],
    motif: "pulse",
  },
  {
    slug: "product-launches",
    index: "05",
    name: "Product Launch Campaigns",
    shortDescription: "Creator-driven buzz built around your launch window, not after it.",
    description:
      "Launch campaigns need sequencing — teasers, seeding, day-of coverage, and aftermarket content. We build the creator rollout calendar around your launch date, not the other way around.",
    metaDescription:
      "Product launch influencer marketing: pre-launch seeding, embargo management, day-of creator coordination, and post-launch content extension built around your launch date.",
    secondaryKeywords: ["product launch influencer marketing", "influencer product launch", "launch campaign creators"],
    whoItsFor: "Brands with a fixed launch date who need creator buzz sequenced around it, not scattered before or after.",
    deliverables: [
      "Pre-launch seeding strategy",
      "Embargo and exclusivity management",
      "Day-of creator coordination",
      "Post-launch content extension",
    ],
    process: [
      { title: "Pre-Launch Seeding", body: "We seed product with a smaller cohort ahead of launch to build early, embargoed content." },
      { title: "Embargo & Exclusivity Management", body: "We manage release timing so no creator posts before your announcement." },
      { title: "Day-Of Coordination", body: "We coordinate synchronized coverage across every activated creator on launch day." },
      { title: "Post-Launch Extension", body: "We plan how launch content gets reused in paid and owned channels after the initial window closes." },
    ],
    benefits: [
      "A creator rollout calendar built around your launch date",
      "Embargo management so no creator jumps the announcement",
      "Coordinated day-of coverage across every activated creator",
      "Content that keeps working after launch day",
    ],
    faqs: [
      {
        question: "How far in advance should we start planning a launch campaign?",
        answer:
          "We recommend starting four to six weeks before launch for seeding and embargoed content, though compressed timelines are possible in as little as two weeks when needed.",
      },
      {
        question: "How do you prevent creators from posting early?",
        answer:
          "Every embargoed creator signs terms with a specific release window, and we stagger product delivery and briefing timing to reduce the risk of early posts.",
      },
      {
        question: "What happens to the content after launch day?",
        answer:
          "We build a post-launch extension plan — usage rights negotiated up front let the content be reused in paid social and owned channels well after the launch window closes.",
      },
    ],
    motif: "beacon",
  },
  {
    slug: "ugc-campaigns",
    index: "06",
    name: "UGC Campaigns",
    shortDescription: "Authentic, creator-shot content built for your owned channels and ads.",
    description:
      "Not every asset needs a full influencer post. We run dedicated UGC production campaigns to build a library of authentic, on-brand content for paid social, website, and email.",
    metaDescription:
      "UGC marketing agency services: creator-shot content produced for your paid social, website, and email, with usage rights cleared for owned and paid media.",
    secondaryKeywords: ["UGC marketing agency", "UGC campaign management", "user-generated content creators"],
    whoItsFor:
      "Brands who need a library of authentic, creator-shot content for paid social and owned channels — not necessarily reach on the creator's own following.",
    deliverables: [
      "Creative brief and shot list",
      "Creator sourcing for UGC specifically",
      "Usage rights for owned and paid media",
      "Organized, ready-to-deploy asset library",
    ],
    process: [
      { title: "Creative Brief & Shot List", body: "We define the specific shots, formats, and messaging your paid and owned channels need." },
      { title: "UGC-Specific Creator Sourcing", body: "We source creators for content style and authenticity, not their existing follower count." },
      { title: "Production & Usage Rights", body: "Creators produce content under contracts that clear usage rights for paid and owned media from the outset." },
      { title: "Asset Delivery", body: "You receive an organized, ready-to-deploy library, not a single scattered batch of files." },
    ],
    benefits: [
      "A ready-to-deploy content library, not a single asset",
      "Usage rights cleared for paid and owned media from the start",
      "Creators sourced specifically for UGC style, not follower count",
      "Faster turnaround than in-house content production",
    ],
    faqs: [
      {
        question: "What is UGC marketing, and how is it different from influencer marketing?",
        answer:
          "UGC (user-generated content) marketing commissions creators to produce authentic-feeling content that your brand owns and distributes on its own channels, rather than paying for distribution to the creator's audience.",
      },
      {
        question: "Do we own the content after the campaign?",
        answer:
          "Yes — UGC engagements are contracted with usage rights for your paid and owned channels from the outset, which is the core difference from a standard influencer post.",
      },
      {
        question: "How fast can a UGC library be delivered?",
        answer:
          "Most UGC production sprints deliver a full asset library in two to four weeks from brief approval, depending on the number of creators and assets required.",
      },
    ],
    motif: "loop",
  },
  {
    slug: "ambassador-programs",
    index: "07",
    name: "Brand Ambassador Programs",
    shortDescription: "Long-term creator relationships built to compound over time.",
    description:
      "One-off posts rarely build trust. We design ambassador programs — retainers, tiered incentives, and recurring content cadences — that turn creators into long-term brand partners.",
    metaDescription:
      "Brand ambassador marketing programs: incentive design, ambassador recruitment, and ongoing relationship management for creator partnerships that compound over time.",
    secondaryKeywords: ["brand ambassador marketing", "influencer ambassador program", "creator partnership management"],
    whoItsFor: "Brands who want an always-on creator presence rather than one-off, single-post placements.",
    deliverables: [
      "Program structure and incentive design",
      "Ambassador recruitment and onboarding",
      "Ongoing relationship management",
      "Quarterly program performance reviews",
    ],
    process: [
      { title: "Program Structure & Incentives", body: "We design tiered incentives that reward consistency, not just a single deliverable." },
      { title: "Ambassador Recruitment", body: "We recruit and onboard ambassadors aligned with your brand for the long term, not a single campaign." },
      { title: "Ongoing Relationship Management", body: "We manage the day-to-day relationship — briefs, content plans, and communication — for the life of the program." },
      { title: "Quarterly Reviews", body: "We review content volume, engagement trends, and satisfaction every quarter to catch fatigue early." },
    ],
    benefits: [
      "A content cadence that compounds instead of resetting each campaign",
      "Tiered incentives that reward long-term consistency",
      "One team managing every ambassador relationship",
      "Quarterly performance reviews built into the program",
    ],
    faqs: [
      {
        question: "How long do ambassador programs typically run?",
        answer:
          "Most programs are structured as renewable six- or twelve-month terms with quarterly performance and content reviews built in, rather than a fixed one-off engagement.",
      },
      {
        question: "How is an ambassador program different from a series of individual campaigns?",
        answer:
          "An ambassador program uses a single incentive structure and ongoing relationship, so content cadence compounds and creators become genuinely familiar with the brand — rather than every campaign starting outreach from zero.",
      },
      {
        question: "How many ambassadors should a program include?",
        answer:
          "It depends on budget and category, but most brands start with 5 to 15 ambassadors, expanding the roster once the initial cohort's content cadence and performance are proven.",
      },
    ],
    motif: "wave",
  },
  {
    slug: "reporting",
    index: "08",
    name: "Campaign Reporting & Performance Tracking",
    shortDescription: "Transparent, plain-language reporting tied to your original KPIs.",
    description:
      "You get a dashboard and a debrief — not just a spreadsheet. We track reach, engagement, and conversion signals against the goals set at kickoff, and tell you plainly what worked.",
    metaDescription:
      "Influencer campaign reporting and ROI tracking: unified dashboards, KPI-vs-actual scorecards, and a plain-language debrief tied to the goals set before launch.",
    secondaryKeywords: ["influencer marketing ROI", "influencer campaign reporting", "campaign performance tracking"],
    whoItsFor: "Brands who need influencer campaign results reported with the same rigor as paid media, not a follower-count recap.",
    deliverables: [
      "Unified cross-creator reporting",
      "KPI-vs-actual scorecards",
      "Creator-level performance breakdown",
      "Post-campaign recommendations",
    ],
    process: [
      { title: "Unified Dashboard Setup", body: "We consolidate every creator's performance into a single dashboard instead of scattered platform exports." },
      { title: "KPI-vs-Actual Tracking", body: "We track results against the specific KPI agreed at kickoff throughout the campaign." },
      { title: "Creator-Level Breakdown", body: "We report performance by creator, not just as a campaign-wide total, so you know what worked and for whom." },
      { title: "Post-Campaign Debrief", body: "We close every campaign with a plain-language debrief and recommendations for the next one." },
    ],
    benefits: [
      "Reporting tied to the KPI agreed before launch, not vanity metrics",
      "Creator-level performance breakdowns, not just campaign totals",
      "A plain-language debrief, not just a data export",
      "Recommendations you can act on for the next campaign",
    ],
    faqs: [
      {
        question: "How do you measure influencer marketing ROI?",
        answer:
          "We tie reporting to the primary KPI set at kickoff — typically engagement rate, traffic, or conversions via UTM and promo codes — and report reach and impressions as context rather than the headline metric.",
      },
      {
        question: "What's included in a campaign report?",
        answer:
          "A unified cross-creator dashboard, KPI-vs-actual scorecards, a creator-level performance breakdown, and a written debrief with recommendations for future campaigns.",
      },
      {
        question: "Can you report on campaigns that weren't run through Kudozz?",
        answer:
          "In most cases, yes — if we have platform access or exported data, we can build a comparable reporting structure for campaigns run by another team or agency.",
      },
    ],
    motif: "ledger",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(service: Service, count = 3) {
  return services.filter((s) => s.slug !== service.slug).slice(0, count);
}
