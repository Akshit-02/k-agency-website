export type ProcessStep = { title: string; body: string };
export type ServiceFaq = { question: string; answer: string };

export type ServiceComparison = {
  title: string;
  /** First column is the row label; the rest are the options being compared. */
  columns: string[];
  rows: string[][];
};

export type ServiceCategory = {
  id: string;
  name: string;
  description: string;
  slugs: string[];
};

export type Service = {
  slug: string;
  /** Display number, assigned from the category order below. */
  index: string;
  /** Category id, assigned from serviceCategories. */
  category: string;
  name: string;
  /**
   * The question a searcher (or answer engine) asks about this service, answered in 40–70 words directly under
   * the hero, so the page opens with a quotable definition.
   */
  answer: { question: string; text: string };
  /** Optional comparison table for services that are often confused with a neighbour (barter vs paid, etc.). */
  comparison?: ServiceComparison;
  /** Hand-picked related services; falls back to the category neighbours. */
  relatedSlugs?: string[];
  /** Search-result title; the service name alone reads oddly with a "Services" suffix. */
  seoTitle: string;
  /** Blog guides that go deeper on this service, linked from the service page (slugs in src/content/blog.ts). */
  guides: string[];
  shortDescription: string;
  description: string;
  metaDescription: string;
  secondaryKeywords: string[];
  whoItsFor: string;
  deliverables: string[];
  /** What the brand needs to provide; shown as "What we need from you". */
  clientProvides: string[];
  /** How the work itself is judged; shown as "How success is measured". */
  successMeasures: string[];
  process: ProcessStep[];
  benefits: string[];
  faqs: ServiceFaq[];
  motif: "orbit" | "grid" | "wave" | "beacon" | "loop" | "pulse" | "channel" | "ledger";
};

type ServiceInput = Omit<Service, "index" | "category">;

/** Shared by the paid and barter pages, which searchers often weigh against each other. */
const PAY_MODEL_COMPARISON: ServiceComparison = {
  title: "Paid vs barter vs gifting: what each one buys",
  columns: ["", "Paid campaign", "Barter campaign", "Gifting / seeding"],
  rows: [
    ["What the creator receives", "A fee, usually with the product", "Product, service or experience, for agreed posts", "Product, with no obligation to post"],
    ["Posting guaranteed?", "Yes, by contract", "Agreed in writing, but harder to enforce", "No"],
    ["Control over format and dates", "High", "Moderate", "None"],
    ["Usage rights for ads", "Negotiated in the contract", "Only if agreed separately", "Not included"],
    ["Best for", "Launches, fixed dates, content for ads", "Testing creators, nano and micro tiers", "Word of mouth, finding future partners"],
    ["Disclosure in India (ASCI)", "Required, e.g. 'Ad' or 'Collaboration'", "Required, e.g. 'Collaboration'", "Required if the creator posts, e.g. 'Free gift'"],
  ],
};

const serviceList: ServiceInput[] = [
  {
    slug: "campaign-strategy",
    answer: {
      question: "What is an influencer marketing strategy?",
      text: "An influencer marketing strategy is the written plan behind a creator campaign: the business objective, the audience, the platforms and formats, the creator tiers, the budget split and the one KPI the campaign is judged on. Kudozz agrees it with you before any creator is contacted, so creator selection, content and reporting all follow from it.",
    },
    name: "Influencer Marketing Strategy",
    seoTitle: "Influencer Marketing Strategy Services in India",
    guides: ["influencer-marketing-strategy", "influencer-marketing-budget", "influencer-budget-allocation", "influencer-marketing-kpis", "influencer-marketing-cost-india"],
    shortDescription: "Campaign planning built on audience, objective, and platform.",
    description:
      "Every campaign starts with a strategic brief, not a creator list. We study your audience, category, and business objective, then map the platform mix, content formats, and creator tiers most likely to move the metric you actually care about.",
    metaDescription:
      "Influencer marketing strategy services from Kudozz: audience research, platform and format planning, creator tiering, and a KPI framework before outreach begins.",
    secondaryKeywords: ["influencer marketing strategy services", "influencer marketing strategy", "influencer campaign planning", "influencer marketing plan"],
    whoItsFor:
      "Brands running their first influencer campaign, or teams whose past campaigns produced reach without measurable results.",
    deliverables: [
      "Audience and category research",
      "Platform and format strategy",
      "Creator tiering and budget allocation",
      "KPI framework agreed before launch",
    ],
    clientProvides: [
      "Your business objective and the one metric that matters most this quarter",
      "Who your customer is, and any customer or sales data you can share",
      "Budget range and any fixed dates (launches, sales, festivals)",
      "Past campaign results, if any, including what didn't work",
    ],
    successMeasures: [
      "One primary KPI and target agreed in writing before outreach",
      "Budget split by creator tier and platform with the reasoning stated",
      "A plan your team can approve or challenge line by line",
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
      {
        question: "What do influencer marketing strategy services include?",
        answer:
          "Audience and category research, platform and format strategy, creator tiering and budget allocation, and a KPI framework agreed before any creator is contacted, delivered as a written strategy.",
      },
    ],
    motif: "orbit",
  },
  {
    slug: "creator-discovery",
    relatedSlugs: ["micro-nano-influencer-marketing", "regional-influencer-marketing", "outreach-management"],
    answer: {
      question: "What is creator discovery?",
      text: "Creator discovery is finding creators whose audience matches your customer, then checking their engagement, authenticity and content fit before you commit budget. Kudozz screens on audience location, age, language and engagement quality rather than follower count, and delivers a shortlist with a written reason for every creator on it.",
    },
    name: "Creator Discovery & Matchmaking",
    seoTitle: "Creator Discovery & Influencer Matchmaking Services",
    guides: ["find-indian-influencers", "how-to-vet-influencers", "how-to-identify-fake-followers", "influencer-shortlist", "micro-vs-macro-influencers"],
    shortDescription: "Finding creators aligned with your audience and goals — not just your category.",
    description:
      "We screen for audience overlap, engagement quality, content style, and brand fit — not follower count alone. Every shortlist is vetted for authenticity signals before it reaches you.",
    metaDescription:
      "Influencer discovery services that screen for audience overlap, engagement quality, and authenticity — not follower count. Curated creator shortlists with a documented rationale.",
    secondaryKeywords: ["creator discovery services", "influencer discovery services", "creator matchmaking", "find influencers for brand"],
    whoItsFor:
      "Brands who have tried building creator shortlists in-house using follower count or hashtag search and gotten inconsistent results.",
    deliverables: [
      "Audience-fit and engagement audits",
      "Authenticity and fraud screening",
      "Curated creator shortlists with rationale",
      "Content style and brand-fit review",
    ],
    clientProvides: [
      "Your target audience: age, location, language and interests",
      "Brands or creators you would not work with",
      "Examples of creator content you like and dislike",
      "Budget range per creator, if you have one",
    ],
    successMeasures: [
      "Share of each creator's audience in your target market and age range",
      "Engagement quality and authenticity checks passed",
      "How many shortlisted creators you approve, and why others were rejected",
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
      {
        question: "How does creator discovery work?",
        answer:
          "We build a target audience profile from your customer data, screen candidate creators' audiences against it, audit engagement and authenticity, review recent content for tone and brand fit, and deliver a shortlist with a written rationale for each creator.",
      },
      {
        question: "Should brands use an agency for creator discovery?",
        answer:
          "It helps most when you need many creators, creators in specific regions or niches, or consistent vetting at speed. Brands with a small, familiar niche can often build shortlists in-house using clear criteria.",
      },
    ],
    motif: "grid",
  },
  {
    slug: "outreach-management",
    answer: {
      question: "What does influencer campaign management include?",
      text: "Influencer campaign management covers everything between choosing creators and reporting: outreach, rate negotiation, contracts and usage rights, briefs, draft approvals, disclosure checks, publishing dates and payments. Kudozz runs it through one point of contact, so your team approves the work without chasing every creator itself.",
    },
    name: "Influencer Outreach & Management",
    seoTitle: "Influencer Outreach & Campaign Management Services",
    guides: ["influencer-campaign-management", "how-to-negotiate-with-influencers", "influencer-marketing-contract", "influencer-campaign-brief", "influencer-outreach-email"],
    shortDescription: "Negotiation, contracts, and day-to-day coordination handled end to end.",
    description:
      "From first outreach to final invoice, we manage the relationship — negotiating terms, aligning deliverables, tracking approvals, and keeping creators and brand stakeholders in sync.",
    metaDescription:
      "Influencer outreach and campaign management services: negotiation, contracting, usage rights, and deliverable tracking handled by a single point of contact.",
    secondaryKeywords: ["influencer outreach services", "influencer campaign management services", "influencer campaign management", "creator management"],
    whoItsFor: "Brands who don't have the internal bandwidth to negotiate, contract, and coordinate multiple creators at once.",
    deliverables: [
      "Outreach and negotiation",
      "Contracting and usage rights",
      "Deliverable and approval tracking",
      "Single point of contact for both sides",
    ],
    clientProvides: [
      "Approved creator shortlist and budget",
      "Product samples or access, and shipping details",
      "Brand guidelines, mandatory messages and claims you can substantiate",
      "A named approver on your side and a turnaround time for drafts",
    ],
    successMeasures: [
      "Creators contracted on time and within the agreed budget",
      "Every post approved before publishing and correctly disclosed",
      "Deliverables published on the agreed dates",
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
      {
        question: "What do influencer campaign management services include?",
        answer:
          "Outreach and negotiation, contracting with usage rights agreed upfront, tracking of drafts, revisions and approvals, and a single point of contact for your team and every creator.",
      },
      {
        question: "How is creator communication managed during a campaign?",
        answer:
          "One dedicated contact handles creator communication and follow-ups, with every creator's status tracked in one place, so your team isn't managing separate threads with each creator.",
      },
    ],
    motif: "channel",
  },
  {
    slug: "social-campaigns",
    relatedSlugs: ["instagram-influencer-marketing", "youtube-influencer-marketing", "paid-influencer-campaigns"],
    answer: {
      question: "What is a multi-creator social media campaign?",
      text: "A multi-creator social media campaign coordinates several creators across one or more platforms around one message and one publishing window. Kudozz staggers posts so reach builds across the window, keeps the message consistent while each creator uses their own voice, and flags the strongest posts for paid amplification.",
    },
    name: "Social Media Campaigns",
    seoTitle: "Multi-Creator Social Media Campaign Services",
    guides: ["how-to-create-a-successful-influencer-marketing-campaign", "influencer-marketing-campaign-ideas", "instagram-influencer-marketing", "pan-india-influencer-marketing-campaign", "regional-influencer-marketing-india"],
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
    clientProvides: [
      "Campaign objective and the KPI it is judged on",
      "Key messages and the publishing window",
      "Your own content calendar and paid media plans, so the two line up",
      "Tracking links or codes, if sales are measured",
    ],
    successMeasures: [
      "Results against the agreed KPI across all creators",
      "Reach and engagement compared with the plan, by creator and platform",
      "Which posts earned paid amplification, and how they performed",
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
    relatedSlugs: ["influencer-seeding-gifting", "social-campaigns", "youtube-influencer-marketing"],
    answer: {
      question: "How do influencers help a product launch?",
      text: "Influencers help a launch by building anticipation before it, coverage on the day and reviews after it. Kudozz sequences all three around your launch date: embargoed seeding to a small group first, coordinated posts on launch day, then reuse of the best content in ads and on your site once the window closes.",
    },
    name: "Product Launch Campaigns",
    seoTitle: "Influencer Marketing for Product Launches",
    guides: ["influencers-for-product-launch", "influencer-product-seeding-program", "instagram-product-launch-campaigns", "influencer-marketing-campaign-timeline"],
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
    clientProvides: [
      "Launch date, product details and embargo terms",
      "Product units or access for seeding",
      "Launch assets and key claims you can substantiate",
      "Retail, marketplace or site links that will be live on launch day",
    ],
    successMeasures: [
      "Embargo kept and coverage published inside the launch window",
      "Launch-day reach and engagement against plan",
      "Traffic, sign-ups or sales attributed through links and codes, where tracked",
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
    answer: {
      question: "What is a UGC campaign?",
      text: "A UGC campaign is a programme of creator-made content that your brand publishes on its own channels and ads, rather than paying for posts on the creator's profile. Kudozz plans the angles to test, sources and briefs creators, clears usage rights, and uses ad results to decide what the next batch of content should be.",
    },
    name: "UGC Campaigns",
    seoTitle: "UGC Campaign Services for Brands in India",
    guides: ["what-is-ugc-marketing", "ugc-vs-influencer-content-whats-the-difference", "how-to-find-ugc-creators", "ugc-content-cost-india", "ugc-ads-indian-brands"],
    shortDescription: "A repeatable UGC programme: angles, creators, rights and ad testing.",
    description:
      "Not every asset needs a full influencer post. We run UGC as a programme: we decide which angles and hooks to test, source creators for them, clear rights for ads and owned channels, then use the ad results to brief the next round.",
    metaDescription:
      "UGC marketing agency services: UGC strategy, creator sourcing, cleared usage rights and ad-testing rounds that turn creator content into a repeatable programme.",
    secondaryKeywords: ["UGC marketing agency", "UGC campaign management", "UGC campaigns for brands", "user-generated content creators"],
    whoItsFor:
      "Brands who want UGC as an ongoing source of ads and owned content, planned and improved round by round, rather than reach on the creator's own following.",
    deliverables: [
      "UGC plan: angles, hooks and formats to test",
      "Creator sourcing for UGC specifically",
      "Usage rights for owned and paid media",
      "Round-by-round briefs based on ad results",
    ],
    clientProvides: [
      "The channels the content will run on (ads, site, marketplace, email)",
      "Shot list priorities, formats and aspect ratios",
      "Product samples and brand guidelines",
      "How long and where you need usage rights",
    ],
    successMeasures: [
      "Assets delivered to the brief, on time, with rights cleared",
      "Share of assets your team approves without reshoots",
      "Paid performance of the assets (for example click-through or cost per result), measured by your ad team",
    ],
    process: [
      { title: "Creative Brief & Shot List", body: "We define the specific shots, formats, and messaging your paid and owned channels need." },
      { title: "UGC-Specific Creator Sourcing", body: "We source creators for content style and authenticity, not their existing follower count." },
      { title: "Production & Usage Rights", body: "Creators produce content under contracts that clear usage rights for paid and owned media from the outset." },
      { title: "Test & Iterate", body: "After each batch we review ad results with your team and brief the next round around the angles that worked." },
    ],
    benefits: [
      "A ready-to-deploy content library, not a single asset",
      "Usage rights cleared for paid and owned media from the start",
      "Creators sourced specifically for UGC style, not follower count",
      "Each new round briefed on what the last one proved",
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
      {
        question: "What is the difference between a UGC campaign and UGC content production?",
        answer:
          "UGC content production is the making of the assets: scripts, shoots, edits and variations to a spec. A UGC campaign is the programme around them: which angles to test, how the content runs in ads and on your site, and what the next batch should be based on results. Kudozz offers production on its own or as part of a campaign.",
      },
    ],
    relatedSlugs: ["ugc-content-production", "paid-influencer-campaigns", "influencer-affiliate-marketing"],
    motif: "loop",
  },
  {
    slug: "ambassador-programs",
    relatedSlugs: ["influencer-affiliate-marketing", "micro-nano-influencer-marketing", "influencer-seeding-gifting"],
    answer: {
      question: "What is a brand ambassador program?",
      text: "A brand ambassador program is a long-term agreement with a group of creators who post about your brand regularly, usually over six or twelve months, instead of once. Kudozz designs the incentives and content cadence, recruits and onboards ambassadors, manages them day to day and reviews the results every quarter.",
    },
    name: "Brand Ambassador Programs",
    seoTitle: "Brand Ambassador Program Services",
    guides: ["brand-ambassador-program", "influencer-partnerships", "always-on-influencer-marketing", "employee-influencer-marketing"],
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
    clientProvides: [
      "The program objective and the length of commitment",
      "Budget per quarter and incentive structure limits",
      "Product access and any exclusivity requirements",
      "A brand contact for quarterly reviews",
    ],
    successMeasures: [
      "Content delivered on cadence each quarter",
      "Engagement and audience trends over time, by ambassador",
      "Ambassador retention and the results against the program KPI",
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
    answer: {
      question: "How is influencer campaign performance measured?",
      text: "Influencer campaign performance is measured against the KPI agreed before launch, such as engagement, traffic, sign-ups or sales, tracked through UTM links, promo codes and creator insights. Kudozz reports results creator by creator, labels what is measured and what is estimated, and closes with a plain-language debrief.",
    },
    name: "Campaign Reporting & Performance Tracking",
    seoTitle: "Influencer Campaign Reporting & ROI Tracking",
    guides: ["measuring-influencer-campaign-roi", "influencer-marketing-kpis", "influencer-marketing-report", "influencer-engagement-rate", "influencer-marketing-roi-forecasting"],
    shortDescription: "Transparent, plain-language reporting tied to your original KPIs.",
    description:
      "You get a dashboard and a debrief — not just a spreadsheet. We track reach, engagement, and conversion signals against the goals set at kickoff, and tell you plainly what worked.",
    metaDescription:
      "Influencer campaign reporting and ROI tracking: unified dashboards, KPI-vs-actual scorecards, and a plain-language debrief tied to the goals set before launch.",
    secondaryKeywords: ["influencer campaign reporting", "influencer campaign reporting services", "influencer marketing ROI", "campaign performance tracking"],
    whoItsFor: "Brands who need influencer campaign results reported with the same rigor as paid media, not a follower-count recap.",
    deliverables: [
      "Unified cross-creator reporting",
      "KPI-vs-actual scorecards",
      "Creator-level performance breakdown",
      "Post-campaign recommendations",
    ],
    clientProvides: [
      "The KPI agreed at kickoff and its target",
      "Access to tracking: UTM links, promo codes, platform or store data",
      "Creator post links, or permission for us to collect insights",
      "Any baseline figures to compare against",
    ],
    successMeasures: [
      "A report delivered on the agreed date, against the agreed KPI",
      "Results broken down by creator, not just campaign totals",
      "Recommendations your team acts on in the next campaign",
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
      {
        question: "What should a professional influencer campaign report include?",
        answer:
          "Results against the KPI agreed at kickoff, a creator-level performance breakdown, reach, engagement, clicks and conversions where they can be tracked, and a plain-language debrief with recommendations.",
      },
    ],
    motif: "ledger",
  },
  {
    slug: "paid-influencer-campaigns",
    name: "Paid Influencer Campaigns",
    seoTitle: "Paid Influencer Campaign Services in India",
    answer: {
      question: "What is a paid influencer campaign?",
      text: "A paid influencer campaign pays creators a fee for agreed deliverables, such as a Reel, a YouTube integration or a set of Stories, published on agreed dates with a disclosure label. Unlike barter or gifting, the fee buys certainty: the format, timing, revisions, exclusivity and usage rights are all written into the contract.",
    },
    comparison: PAY_MODEL_COMPARISON,
    relatedSlugs: ["barter-influencer-campaigns", "influencer-seeding-gifting", "influencer-affiliate-marketing"],
    guides: ["instagram-gifting-vs-paid-collaboration", "how-to-negotiate-with-influencers", "influencer-marketing-contract", "influencer-marketing-cost-india", "influencer-disclosure-rules-by-country"],
    shortDescription: "Fee-based creator collaborations with guaranteed deliverables and rights.",
    description:
      "When a post has to go live on a set date, in a set format, with usage rights you can rely on, you pay for it. We scope, price and contract paid collaborations so every fee maps to a named deliverable, a publishing date and a disclosure label.",
    metaDescription:
      "Paid influencer campaign services: fee-based creator collaborations with fixed deliverables, dates, usage rights and disclosure, negotiated and managed for you.",
    secondaryKeywords: ["paid influencer campaigns", "paid influencer marketing", "paid creator collaborations", "sponsored influencer posts"],
    whoItsFor:
      "Brands that need guaranteed posts on fixed dates, exclusivity, or content they can run as ads, and have outgrown gifting and barter.",
    deliverables: [
      "Creator fee benchmarking from current quotes",
      "Scope of work: formats, dates, revisions and exclusivity",
      "Contracts with usage and paid-ad rights",
      "Payment schedule tied to delivery",
    ],
    clientProvides: [
      "A budget for creator fees, kept separate from agency fees",
      "The campaign objective and the KPI it is judged on",
      "Mandatory messages and claims you can substantiate",
      "Whether you plan to run creator content as ads, and for how long",
    ],
    successMeasures: [
      "Every contracted deliverable published on its agreed date",
      "Cost per result (view, click or sale) compared across creators",
      "Usage rights and disclosure in place for each post",
    ],
    process: [
      { title: "Scope & Pricing", body: "We define the deliverables and benchmark fees against current quotes for similar creators, not a published rate card." },
      { title: "Negotiation", body: "We negotiate fee, formats, revisions, exclusivity and usage together, because each one changes the price." },
      { title: "Contract & Brief", body: "Contracts set dates, approval rounds, disclosure and payment milestones; briefs set the message without scripting the creator." },
      { title: "Delivery & Payment", body: "We check every post against the brief and disclosure rules, then release payment against delivered work." },
    ],
    benefits: [
      "Guaranteed deliverables on dates you can plan around",
      "Fees benchmarked against current quotes, not rate cards",
      "Usage and ad rights priced in up front",
      "Payment released only against delivered work",
    ],
    faqs: [
      {
        question: "How much do paid influencer campaigns cost?",
        answer:
          "It depends on creator tier, platform, format, number of deliverables, exclusivity and usage rights. Published rate cards disagree widely, so we price from current quotes for creators who fit your brief and show creator fees and agency fees separately.",
      },
      {
        question: "When should a brand pay creators instead of using barter?",
        answer:
          "Pay when you need certainty: a fixed launch date, a specific format, exclusivity from competitors, or the right to run the content as ads. Barter suits testing new creators and smaller tiers, where the product is a fair exchange for the work.",
      },
      {
        question: "Do paid influencer posts need to be labelled as ads?",
        answer:
          "Yes. In India, ASCI's guidelines require a clear, upfront label such as 'Ad', 'Sponsored' or 'Collaboration', alongside the platform's paid partnership tool. The UK, UAE, Saudi Arabia, Australia and Singapore have their own rules, which we build into the contract for each market.",
      },
      {
        question: "Can we run paid influencer content as ads?",
        answer:
          "Yes, if the contract grants it. We agree paid usage, platforms, duration and whether ads run from the creator's handle (for example Instagram partnership ads) before the content is made, because adding rights afterwards usually costs more.",
      },
      {
        question: "How are creators paid in a paid campaign?",
        answer:
          "Usually part on signing and the balance on publishing, or in full after delivery for smaller deals. Payment is released against delivered, approved and correctly disclosed posts, with tax documents handled as each market requires.",
      },
    ],
    motif: "ledger",
  },
  {
    slug: "barter-influencer-campaigns",
    name: "Barter Influencer Campaigns",
    seoTitle: "Barter Influencer Campaigns for Brands in India",
    answer: {
      question: "What is a barter influencer campaign?",
      text: "A barter influencer campaign gives creators your product, service or an experience in exchange for agreed content, instead of a cash fee. Unlike pure gifting, the deliverables are agreed in writing: what the creator posts, on which platform and by when. It suits nano and micro creators, products with real value, and brands testing creator fit before paying fees.",
    },
    comparison: PAY_MODEL_COMPARISON,
    relatedSlugs: ["influencer-seeding-gifting", "paid-influencer-campaigns", "micro-nano-influencer-marketing"],
    guides: ["instagram-gifting-vs-paid-collaboration", "influencer-gifting", "nano-vs-micro-influencers", "micro-influencers-india", "influencer-marketing-contract"],
    shortDescription: "Product-for-content collaborations with deliverables agreed in writing.",
    description:
      "Barter works when the product is worth the creator's time and both sides know what's expected. We match products to creators who would genuinely use them, agree the deliverables in writing and track every post, so barter stops being a scatter of free samples.",
    metaDescription:
      "Barter influencer campaign services: product-for-content collaborations with nano and micro creators, written deliverables, disclosure checks and post tracking.",
    secondaryKeywords: ["barter influencer marketing", "barter collaboration with influencers", "barter influencer campaigns", "product for content collaborations"],
    whoItsFor:
      "D2C, beauty, food, fashion and hospitality brands with products or experiences creators value, testing creators before paying fees or scaling with nano and micro tiers.",
    deliverables: [
      "Barter offer design: product value, deliverables and timing",
      "Shortlist of creators who would genuinely use the product",
      "Written barter agreement covering posts, dates and disclosure",
      "Shipping, follow-up and post tracking",
    ],
    clientProvides: [
      "Products, vouchers or experiences to offer, with their retail value",
      "Units available, and shipping or redemption details",
      "The content you'd like, and any claims creators must not make",
      "Whether you want to reuse the content, so rights can be agreed",
    ],
    successMeasures: [
      "Share of creators who post the agreed content on time",
      "Engagement and audience quality, by creator",
      "Creators worth moving into paid or ambassador deals",
    ],
    process: [
      { title: "Offer Design", body: "We weigh the product's value against what you're asking for, so the exchange is fair and creators actually accept." },
      { title: "Creator Matching", body: "We shortlist creators whose audience fits and who would plausibly use the product, which is what makes barter content believable." },
      { title: "Written Agreement", body: "Each creator agrees deliverables, dates, disclosure and any reuse rights in writing before the product ships." },
      { title: "Tracking & Follow-Up", body: "We track deliveries and posts, follow up on missed dates and report which creators earned a paid next step." },
    ],
    benefits: [
      "Lower cash cost than fee-based campaigns",
      "Deliverables agreed in writing, not hoped for",
      "Creator fit tested before you commit fees",
      "A pipeline of proven creators for paid work",
    ],
    faqs: [
      {
        question: "Does barter influencer marketing work?",
        answer:
          "It works when the product has real value to the creator, the audience fits and the deliverables are agreed up front. It works poorly for low-value products, for larger creators who charge fees, and for campaigns that need exact dates and formats, where a paid deal is more reliable.",
      },
      {
        question: "Do barter collaborations need to be disclosed?",
        answer:
          "Yes. A free product is a material connection under ASCI's guidelines in India, so the post needs a clear label such as 'Collaboration' or 'Free gift'. In the UAE, creators paid in products or stays also need an Advertiser Permit. We write each market's disclosure rules into every barter agreement.",
      },
      {
        question: "Are there tax implications for barter deals in India?",
        answer:
          "There can be. Barter and gifted products can carry tax obligations for both the brand and the creator, including TDS on business benefits above a threshold. We flag this during planning and ask your finance team or tax adviser to confirm how each arrangement is treated.",
      },
      {
        question: "Which creators accept barter collaborations?",
        answer:
          "Mostly nano and micro creators, and larger creators when the product is high value or an experience they would pay for anyway, such as a hotel stay or a premium gadget. We check fit first: a creator who accepts every barter offer usually has a less trusting audience.",
      },
      {
        question: "What happens if a creator doesn't post after receiving the product?",
        answer:
          "The written agreement sets dates and follow-up steps, and we chase missed posts. Barter is still harder to enforce than a paid contract, so we ship in waves, start with creators who have a record of delivering, and keep a reserve list.",
      },
    ],
    motif: "loop",
  },
  {
    slug: "influencer-seeding-gifting",
    name: "Influencer Seeding & Gifting",
    seoTitle: "Influencer Seeding & Product Gifting Services",
    answer: {
      question: "What is influencer seeding?",
      text: "Influencer seeding, or gifting, is sending your product to selected creators with no payment and no obligation to post. Brands use it to earn organic mentions, get honest reactions and find creators who like the product enough to partner with later. If a creator does post, the post still needs a disclosure label, such as 'Free gift' in India.",
    },
    relatedSlugs: ["barter-influencer-campaigns", "product-launches", "ambassador-programs"],
    guides: ["influencer-product-seeding-program", "influencer-gifting", "instagram-product-seeding", "instagram-gifting-vs-paid-collaboration", "influencer-disclosure-rules-by-country"],
    shortDescription: "Products in the right hands, with no posting strings attached.",
    description:
      "Seeding puts your product with creators who would genuinely like it, without paying them or requiring a post. Done well, it produces organic mentions and tells you which creators to partner with next. We build the list, handle opt-ins and logistics, and track who posts.",
    metaDescription:
      "Influencer seeding and gifting services: curated creator lists, opt-ins, shipping, disclosure guidance and mention tracking to find your next paid partners.",
    secondaryKeywords: ["influencer seeding", "influencer gifting services", "product seeding agency", "PR packages for influencers"],
    whoItsFor:
      "Brands with products creators genuinely want, such as beauty, fashion, food, gadgets and home, who want organic word of mouth and a tested shortlist for future paid work.",
    deliverables: [
      "Seeding list of creators matched to the product",
      "Opt-in outreach and address collection",
      "Packaging, inserts and shipping coordination",
      "Mention tracking and a report on who posted",
    ],
    clientProvides: [
      "Product units and any packaging or inserts",
      "Who the product is for, and creators you'd rule out",
      "Shipping details or a warehouse contact",
      "What you'd like creators to know, without a script",
    ],
    successMeasures: [
      "Share of seeded creators who post without payment",
      "Sentiment and quality of organic mentions",
      "Creators identified for paid or ambassador deals",
    ],
    process: [
      { title: "Seeding List", body: "We pick creators for audience fit and genuine affinity with the product, not for follower count." },
      { title: "Opt-In Outreach", body: "We ask before shipping, which avoids wasted units and unwanted parcels, and collect addresses securely." },
      { title: "Ship & Follow Up", body: "We coordinate packaging and delivery, then send a light, no-pressure follow-up with disclosure guidance." },
      { title: "Track & Shortlist", body: "We log every mention and report who posted, how their audience reacted and who to approach next." },
    ],
    benefits: [
      "Organic mentions from creators who chose to post",
      "Honest product reactions before paid spend",
      "A tested shortlist for paid and ambassador work",
      "Opt-in outreach that wastes fewer units",
    ],
    faqs: [
      {
        question: "What is the difference between influencer seeding and barter?",
        answer:
          "With seeding, creators receive the product with no obligation to post. With barter, they agree to specific deliverables in exchange for it. Seeding produces fewer but more genuine posts; barter gives more certainty about what gets published.",
      },
      {
        question: "Do gifted posts need to be disclosed?",
        answer:
          "Yes, in most markets. In India, ASCI treats a free product as a material connection, so a post about it should carry a label such as 'Free gift'. In the UK, the CMA expects gifts to be disclosed too. We include disclosure guidance with every package.",
      },
      {
        question: "What share of seeded creators usually post?",
        answer:
          "It varies widely with product appeal, creator fit and whether creators opted in. We don't promise a posting rate for seeding; we report the actual rate for each wave and use it to refine the next list.",
      },
      {
        question: "How is seeding different from a product launch campaign?",
        answer:
          "A product launch campaign uses seeding as one step, timed and embargoed around a launch date, with paid creators alongside. Seeding as a standalone service runs continuously or in waves, to build word of mouth and find future partners.",
      },
      {
        question: "How many products should we seed?",
        answer:
          "Start with a wave large enough to learn from but small enough to personalise, then expand based on the posting rate and response. The right size depends on product cost and how many creators genuinely fit.",
      },
    ],
    motif: "beacon",
  },
  {
    slug: "influencer-affiliate-marketing",
    name: "Influencer Affiliate & Performance Marketing",
    seoTitle: "Influencer Affiliate & Performance Marketing",
    answer: {
      question: "What is influencer affiliate marketing?",
      text: "Influencer affiliate marketing pays creators a commission on the sales or sign-ups they drive, tracked through unique links or discount codes. Performance-based deals can be pure commission or a hybrid of a smaller fixed fee plus commission. It works best for products bought online, where each sale can be traced back to a creator.",
    },
    comparison: {
      title: "Pay models for performance-led creator deals",
      columns: ["", "Pure commission", "Hybrid (fee + commission)", "Flat fee with tracking"],
      rows: [
        ["Creator's guaranteed income", "None", "A smaller fixed fee", "The full fee"],
        ["Your risk", "Lowest", "Shared", "Highest"],
        ["Creators who accept", "Mostly nano, micro and existing fans", "Most tiers", "Most tiers, including larger creators"],
        ["Posting guaranteed?", "No", "Yes, for the fee portion", "Yes"],
        ["Best for", "Always-on affiliate programmes", "Proving a creator's sales impact", "Launches and reach, judged on tracked sales"],
      ],
    },
    relatedSlugs: ["paid-influencer-campaigns", "ambassador-programs", "reporting"],
    guides: ["influencer-affiliate-program", "performance-based-influencer-marketing", "influencer-marketing-vs-affiliate-marketing", "instagram-influencer-affiliate-marketing", "influencer-marketing-cpm-cpe-cpa", "influencer-performance-marketing"],
    shortDescription: "Creators paid on results: commissions, hybrids and tracked sales.",
    description:
      "If you sell online and can track a sale, creators can be paid partly or fully on results. We design the commission or hybrid model, set up links and codes, recruit and activate creators, and report sales by creator, so you know who actually drives revenue.",
    metaDescription:
      "Influencer affiliate and performance marketing: commission and hybrid creator deals, tracked links and codes, creator recruitment and sales reports by creator.",
    secondaryKeywords: ["influencer affiliate marketing", "performance-based influencer marketing", "influencer affiliate program management", "pay per sale influencer marketing"],
    whoItsFor:
      "E-commerce, D2C, app and subscription brands with online checkout or sign-up tracking that want creator spend tied to measurable sales.",
    deliverables: [
      "Commission or hybrid deal structure",
      "Tracking setup: links, codes and attribution rules",
      "Creator recruitment, onboarding and activation",
      "Sales and payout reporting by creator",
    ],
    clientProvides: [
      "Margins, average order value and the commission you can afford",
      "Access to your affiliate platform, store or app analytics",
      "Discount rules and any products excluded",
      "Who approves payouts, and how often creators are paid",
    ],
    successMeasures: [
      "Tracked sales or sign-ups, by creator",
      "Cost per acquisition compared with your other channels",
      "Share of recruited creators who become active sellers",
    ],
    process: [
      { title: "Model Design", body: "We work out what you can pay per sale from your margins, then choose pure commission, a hybrid, or a fee for top creators." },
      { title: "Tracking Setup", body: "We set up unique links and codes and agree the attribution window and how returns are handled, before anyone posts." },
      { title: "Recruit & Activate", body: "We recruit creators who sell well to your audience, seed product, and help new affiliates to their first post." },
      { title: "Report & Optimise", body: "We report revenue and payouts by creator, move top sellers into paid deals and drop those who don't convert." },
    ],
    benefits: [
      "Creator spend tied to tracked sales",
      "Commission levels set from your margins",
      "Clear attribution and payout rules before launch",
      "Top sellers identified for bigger partnerships",
    ],
    faqs: [
      {
        question: "Is influencer affiliate marketing better than paying a fee?",
        answer:
          "It lowers your risk, but many creators, especially larger ones, won't work on commission alone, and content that builds awareness rarely converts on the same day. Many brands use a hybrid: a smaller fee for guaranteed posts plus commission on tracked sales.",
      },
      {
        question: "What commission rate should we offer creators?",
        answer:
          "Start from your margin and what you already pay to acquire a customer, then compare with what creators in your category are offered elsewhere. We model a rate you can sustain rather than quoting an industry average.",
      },
      {
        question: "How are influencer affiliate sales tracked?",
        answer:
          "Through unique links with UTM parameters, creator-specific discount codes, or an affiliate platform. Codes catch sales that links miss, such as purchases made later or on another device, so we usually use both.",
      },
      {
        question: "Do affiliate posts need disclosure?",
        answer:
          "Yes. In India, ASCI lists 'Affiliate' among its accepted labels and expects it upfront, not hidden in hashtags. An affiliate link in a bio or video description still needs disclosure on the post itself.",
      },
      {
        question: "Can affiliate creators join our ambassador program?",
        answer:
          "Often that's the goal. Creators who sell consistently are strong candidates for an ambassador program, with a retainer plus commission and a longer commitment.",
      },
    ],
    motif: "pulse",
  },
  {
    slug: "ugc-content-production",
    name: "UGC Content Production",
    seoTitle: "UGC Video & Content Production Services",
    answer: {
      question: "What is UGC content production?",
      text: "UGC content production is commissioning creators to script, shoot and edit content in a natural, first-person style that your brand then publishes, mainly as ads, product page videos and social posts. The creator doesn't post it on their own profile. You pay for the assets and the right to use them, not for reach.",
    },
    comparison: {
      title: "UGC production vs a UGC campaign vs an influencer post",
      columns: ["", "UGC content production", "UGC campaign", "Influencer post"],
      rows: [
        ["What you pay for", "Assets and usage rights", "A programme of assets, testing and iteration", "Reach on the creator's profile"],
        ["Posted on the creator's profile?", "No", "Usually no", "Yes"],
        ["Who distributes it", "Your ads, site and marketplaces", "Your ads and owned channels, round after round", "The creator"],
        ["Creator chosen for", "On-camera delivery and fit", "Delivery, fit and past ad results", "Audience size and fit"],
        ["Best for", "A defined batch of assets", "Ongoing creative testing", "Awareness and trust"],
      ],
    },
    relatedSlugs: ["ugc-campaigns", "paid-influencer-campaigns", "regional-influencer-marketing"],
    guides: ["ugc-production-workflow", "ugc-video-scripts", "ugc-brief-template", "ugc-ad-hooks", "scale-ugc-content-production", "ugc-content-usage-rights"],
    shortDescription: "Scripted, shot and edited UGC assets, delivered to your specs.",
    description:
      "Sometimes you just need the assets: product videos for ads, unboxing clips for a marketplace listing, testimonials for a landing page. We handle scripts, creators, shoots, edits and variations, and deliver labelled files in the formats and ratios you need, with rights cleared.",
    metaDescription:
      "UGC content production: scripts, creator shoots, editing, hook variations and labelled files for ads, websites and marketplaces, with usage rights cleared.",
    secondaryKeywords: ["UGC content production", "UGC video production", "UGC video creators", "UGC ads production"],
    whoItsFor:
      "Performance, e-commerce and brand teams who know what they need and want production handled: ad creative volume, marketplace videos, testimonials or product demos.",
    deliverables: [
      "Scripts or talking points, hooks and shot lists",
      "Creator casting matched to the product and audience",
      "Edited videos with hook, length and ratio variations",
      "Raw footage, captions and labelled file delivery",
    ],
    clientProvides: [
      "Products for each creator, and any demo instructions",
      "Specs: number of assets, lengths, aspect ratios and platforms",
      "Approved claims, and anything creators must not say",
      "How long and where you need usage rights",
    ],
    successMeasures: [
      "Assets delivered to spec and on the agreed date",
      "First-round approval rate, and revisions needed",
      "Paid performance of the assets, measured by your ad team",
    ],
    process: [
      { title: "Brief & Scripts", body: "We turn your specs into talking points, hooks and shot lists, written the way people actually talk about the product." },
      { title: "Creator Casting", body: "We cast creators for on-camera delivery, setting and audience fit, and you approve the casting before products ship." },
      { title: "Shoot & Edit", body: "Creators shoot to the shot list; we edit into the lengths, ratios and hook variations each placement needs." },
      { title: "Review & Delivery", body: "One revision round against the brief, then labelled files, raw footage and a rights log in a shared folder." },
    ],
    benefits: [
      "Ad-ready creative volume without a studio shoot",
      "Hook and length variations built in for testing",
      "Files named and organised for your ad and web teams",
      "Usage rights logged for every asset",
    ],
    faqs: [
      {
        question: "How many UGC videos should a brand order?",
        answer:
          "Enough to test more than one angle. For ads, we usually suggest several hooks per product and at least two or three creators, so you learn which message works rather than which face. The right number depends on your ad spend and how often creative needs refreshing.",
      },
      {
        question: "Do UGC creators post the content on their own accounts?",
        answer:
          "Not by default. UGC production is made for your channels. If you also want it on the creator's profile, that's a separate deliverable with its own fee and disclosure.",
      },
      {
        question: "Who owns UGC content?",
        answer:
          "It depends on the contract and the market. In India, commissioned photographs and films generally belong to the commissioner unless agreed otherwise, while in the UK the creator usually keeps copyright unless it is assigned in writing. We set usage scope, duration and ownership explicitly in every agreement.",
      },
      {
        question: "How long does UGC content production take?",
        answer:
          "Typically two to four weeks from approved brief to final files, depending on the number of creators, product shipping and revision rounds. Repeat batches with creators who already know the product are faster.",
      },
      {
        question: "Can you produce UGC in regional languages or for other markets?",
        answer:
          "Yes. We cast creators who speak the language your customers use, including Hindi and South Indian languages in India and Arabic for the UAE and Saudi Arabia, and we localise scripts rather than translating them word for word.",
      },
    ],
    motif: "grid",
  },
  {
    slug: "instagram-influencer-marketing",
    name: "Instagram Influencer Marketing",
    seoTitle: "Instagram Influencer Marketing Agency Services",
    answer: {
      question: "How does Instagram influencer marketing work?",
      text: "Brands pay or partner with Instagram creators to feature a product in Reels, Stories, carousels or collab posts, labelled with Instagram's paid partnership tag. The strongest posts can then run as partnership ads from the creator's handle. Results are judged from creator-shared insights, link clicks and codes rather than follower counts.",
    },
    relatedSlugs: ["youtube-influencer-marketing", "ugc-content-production", "social-campaigns"],
    guides: ["instagram-influencer-marketing", "instagram-reels-influencer-marketing", "instagram-partnership-ads", "instagram-collab-posts", "how-to-find-instagram-influencers", "instagram-influencer-marketing-roi"],
    shortDescription: "Reels, Stories, collab posts and partnership ads, planned for Instagram.",
    description:
      "Instagram rewards content that feels native: Reels that hook in the first seconds, Stories with links, collab posts that appear on both profiles. We plan each campaign around those formats, choose creators from audience data, and set up partnership ads so the best posts keep working.",
    metaDescription:
      "Instagram influencer marketing services: creators chosen from audience data, Reels, Stories and collab posts, partnership ads, disclosure checks and reporting.",
    secondaryKeywords: ["Instagram influencer marketing agency", "Instagram influencer marketing services", "Instagram creator campaigns", "Instagram Reels influencer marketing"],
    whoItsFor:
      "Consumer, D2C, beauty, fashion, food, travel and lifestyle brands whose customers discover and research products on Instagram.",
    deliverables: [
      "Format plan: Reels, Stories, carousels and collab posts",
      "Creators selected from audience insights, not follower count",
      "Partnership ad permissions and paid-usage terms",
      "Reporting from creator insights, links and codes",
    ],
    clientProvides: [
      "Your Instagram handle, and access for collab posts and partnership ads",
      "Products and key messages",
      "Tracking links or codes",
      "Your paid social contact, if you plan to boost creator posts",
    ],
    successMeasures: [
      "Reach, saves, shares and link clicks against plan",
      "Results by format: Reels, Stories and carousels",
      "Partnership ad performance, measured with your ad team",
    ],
    process: [
      { title: "Format & Objective", body: "We match formats to the goal: Reels for discovery, Stories for clicks and offers, carousels and collab posts for consideration." },
      { title: "Creator Selection", body: "We review audience location, age and authenticity from creator insights, and check recent Reels for hook quality." },
      { title: "Brief, Approve & Label", body: "Creators get a brief built for Instagram; we approve drafts and check the paid partnership label and on-post disclosure." },
      { title: "Amplify & Report", body: "We set up partnership ad permissions for strong posts and report from creator insights, links and codes." },
    ],
    benefits: [
      "Content planned for Instagram's formats, not repurposed",
      "Creators chosen from audience insights",
      "Partnership ads set up for posts worth boosting",
      "Disclosure checked on every post",
    ],
    faqs: [
      {
        question: "Which Instagram format works best for influencer marketing?",
        answer:
          "It depends on the goal. Reels reach people who don't follow the creator, Stories drive link clicks and time-limited offers, and carousels suit products people research. Most campaigns combine a Reel with supporting Stories.",
      },
      {
        question: "What are Instagram partnership ads?",
        answer:
          "Partnership ads, previously called branded content ads, let a brand run ads that appear from a creator's handle, or from both handles, with the creator's permission. They keep the creator's voice in paid placements. Usage terms and duration should be agreed in the contract.",
      },
      {
        question: "How do you check an Instagram creator's audience?",
        answer:
          "We ask for recent insights showing audience location, age and gender, then review engagement patterns, comment quality and follower growth for signs of purchased followers.",
      },
      {
        question: "How much does Instagram influencer marketing cost?",
        answer:
          "Fees vary with creator tier, format, number of posts, usage rights and exclusivity, and published rate guides disagree widely. We price from current quotes for creators who fit your brief, with creator and agency fees shown separately.",
      },
      {
        question: "Do Instagram influencer posts need the paid partnership label?",
        answer:
          "Use the paid partnership label for any commercial relationship, and in India add an upfront ASCI label such as 'Ad' or 'Collaboration' in the caption or on the video. The platform label alone may not be enough in every market.",
      },
    ],
    motif: "orbit",
  },
  {
    slug: "youtube-influencer-marketing",
    name: "YouTube Influencer Marketing",
    seoTitle: "YouTube Influencer Marketing Agency Services",
    answer: {
      question: "How does YouTube influencer marketing work?",
      text: "Brands partner with YouTube creators for an integration (a sponsored segment inside a regular video), a dedicated review or tutorial, or Shorts. Creators turn on YouTube's paid promotion setting, and links and codes go in the description. Because videos stay searchable for years, YouTube suits products people research before they buy.",
    },
    relatedSlugs: ["instagram-influencer-marketing", "product-launches", "reporting"],
    guides: ["youtube-influencer-marketing-india", "youtube-sponsorships", "youtube-shorts-influencer-marketing", "how-to-find-youtube-influencers", "youtube-influencer-marketing-roi", "youtube-product-reviews"],
    shortDescription: "Integrations, dedicated reviews and Shorts for considered purchases.",
    description:
      "YouTube is where people go to understand a product before they buy it. We plan integrations, dedicated reviews and Shorts with creators whose viewers match your customer, agree how long videos and links stay live, and report on views, watch time and tracked clicks.",
    metaDescription:
      "YouTube influencer marketing services: integrations, dedicated reviews and Shorts, creators chosen on audience and watch data, contracts and tracked reporting.",
    secondaryKeywords: ["YouTube influencer marketing agency", "YouTube influencer marketing services", "YouTube sponsorships for brands", "YouTube creator integrations"],
    whoItsFor:
      "Brands selling considered purchases, such as tech, finance, education, automotive, gaming and appliances, where buyers research before deciding.",
    deliverables: [
      "Format plan: integrations, dedicated videos and Shorts",
      "Creators selected on audience, watch time and comment quality",
      "Contracts covering video lifespan, links and pinned comments",
      "Reporting on views, watch time, clicks and codes",
    ],
    clientProvides: [
      "Product, demo access or review units, with time to use them",
      "Key features and claims you can substantiate",
      "Tracking links and codes",
      "Lead time: YouTube creators often book weeks ahead",
    ],
    successMeasures: [
      "Views and watch time on the sponsored segment",
      "Clicks, codes and sign-ups traced to each video",
      "Views the video keeps earning after launch week",
    ],
    process: [
      { title: "Format Choice", body: "Integrations for reach at lower cost, dedicated reviews for depth, Shorts for discovery; we choose by goal and budget." },
      { title: "Creator Selection", body: "We look at audience geography, average views across recent videos, watch time and comment quality, not subscriber count." },
      { title: "Brief & Review", body: "Creators get time with the product and a brief with must-say points; we review the cut for accuracy and disclosure." },
      { title: "Track & Report", body: "We track description links, codes and pinned comments, and report over weeks, because YouTube views keep accruing." },
    ],
    benefits: [
      "Content that keeps being found in search",
      "Room to explain features and answer objections",
      "Creators chosen on average views, not subscribers",
      "Reporting that accounts for long-tail views",
    ],
    faqs: [
      {
        question: "What is a YouTube integration?",
        answer:
          "An integration is a sponsored segment inside a creator's regular video, usually near the start or middle, with a link in the description. It costs less than a dedicated video and reaches the creator's usual audience, but gives you less time to explain the product.",
      },
      {
        question: "YouTube integration or dedicated video: which is better?",
        answer:
          "Integrations suit awareness and products that are easy to explain. Dedicated reviews and tutorials suit complex or expensive products, where buyers want depth. Many campaigns use integrations broadly and dedicated videos with a few trusted reviewers.",
      },
      {
        question: "Do sponsored YouTube videos need to be disclosed?",
        answer:
          "Yes. Creators should turn on YouTube's 'includes paid promotion' setting, which adds an on-screen notice, and in India also say it clearly in the video and description to meet ASCI's guidelines.",
      },
      {
        question: "How do you measure YouTube influencer campaigns?",
        answer:
          "We report views, watch time and retention on the sponsored segment, plus clicks and codes from the description. YouTube changed how it counts views on 24 August 2026 (a view now counts from the first frame, and the previous measure is reported as engaged views), so every report states which view metric it uses.",
      },
      {
        question: "Do YouTube Shorts work for brand campaigns?",
        answer:
          "Shorts are useful for reach and for cutting a longer review into quick clips. They usually drive fewer clicks than long-form videos, so we pair them with an integration or review rather than relying on Shorts alone.",
      },
    ],
    motif: "wave",
  },
  {
    slug: "linkedin-influencer-marketing",
    name: "LinkedIn Influencer Marketing",
    seoTitle: "LinkedIn Influencer Marketing for B2B Brands",
    answer: {
      question: "What is LinkedIn influencer marketing?",
      text: "LinkedIn influencer marketing is partnering with professionals who have an engaged following among your buyers, such as founders, operators or industry specialists, to post about a problem your product solves. Formats include posts, documents, newsletters, live sessions and co-hosted webinars. Brands can sponsor strong posts with Thought Leader Ads, with the author's permission.",
    },
    relatedSlugs: ["campaign-strategy", "creator-discovery", "reporting"],
    guides: ["linkedin-influencer-marketing-india", "linkedin-creator-marketing", "b2b-creator-partnerships-linkedin", "how-to-find-linkedin-influencers", "measure-linkedin-influencer-marketing-roi", "executive-influencer-marketing-linkedin"],
    shortDescription: "B2B creators and practitioners your buyers already follow.",
    description:
      "B2B buyers trust practitioners more than brand pages. We find LinkedIn creators your buyers follow, from founders and operators to niche specialists, plan posts, newsletters, live sessions and webinars with them, and use Thought Leader Ads to put the best posts in front of target accounts.",
    metaDescription:
      "LinkedIn influencer marketing for B2B brands: creators your buyers follow, posts, newsletters and webinars, Thought Leader Ads and pipeline reporting.",
    secondaryKeywords: ["LinkedIn influencer marketing agency", "B2B influencer marketing", "LinkedIn creator marketing services", "B2B creator partnerships"],
    whoItsFor:
      "SaaS, fintech, HR tech, professional services and other B2B companies with long sales cycles and buying committees.",
    deliverables: [
      "Creator mapping by buyer role, industry and seniority",
      "Content plan: posts, documents, newsletters, lives and webinars",
      "Thought Leader Ads permissions and targeting brief",
      "Reporting on target-account engagement, clicks and leads",
    ],
    clientProvides: [
      "Your ideal customer profile and target accounts",
      "Subject-matter experts who can brief creators",
      "Material creators can reference: research, data, product demos",
      "CRM or lead-source tracking, so leads can be traced",
    ],
    successMeasures: [
      "Engagement from your target roles and accounts",
      "Clicks, webinar sign-ups and demo requests traced to creators",
      "Pipeline influenced, tracked in your CRM",
    ],
    process: [
      { title: "Buyer Mapping", body: "We start from the roles and industries on your buying committee and find who they already follow." },
      { title: "Creator Vetting", body: "We check that a creator's followers match those roles, that engagement comes from real practitioners, and that their views fit yours." },
      { title: "Co-Created Content", body: "Creators write in their own voice from your insight and data; we review for accuracy and disclosure, not to make it sound like an ad." },
      { title: "Amplify & Measure", body: "We sponsor strong posts with Thought Leader Ads and track sign-ups, demo requests and pipeline in your CRM." },
    ],
    benefits: [
      "Reach among buyers who ignore brand ads",
      "Credibility from practitioners, not celebrities",
      "Posts amplified to target accounts with Thought Leader Ads",
      "Measurement tied to pipeline, not likes",
    ],
    faqs: [
      {
        question: "Does influencer marketing work for B2B?",
        answer:
          "Yes, when the creators are people your buyers already learn from. B2B creator campaigns work best on problems and ideas rather than product pitches, and their effect shows over a longer sales cycle, so we measure leads and pipeline as well as engagement.",
      },
      {
        question: "Who counts as a LinkedIn influencer?",
        answer:
          "Anyone with an engaged following among your buyers: founders, operators, consultants, analysts or specialists. Who the followers are matters more than how many there are, so a niche expert with a few thousand of the right followers can outperform a large general account.",
      },
      {
        question: "Do sponsored LinkedIn posts need to be disclosed?",
        answer:
          "Yes. Disclosure rules apply to B2B content too. In January 2025, ASCI issued an advisory to LinkedIn influencers after complaints about undisclosed brand partnerships, so every sponsored post we run carries a clear label.",
      },
      {
        question: "What are LinkedIn Thought Leader Ads?",
        answer:
          "Thought Leader Ads let a brand sponsor a post from an individual's profile, such as an employee or an external creator, with their permission, so it reaches a targeted audience while still appearing as that person's post.",
      },
      {
        question: "Can our own executives be part of the programme?",
        answer:
          "Yes. Many B2B programmes pair external creators with the company's own leaders. We plan executive content alongside creator partnerships so the two reinforce each other.",
      },
    ],
    motif: "channel",
  },
  {
    slug: "regional-influencer-marketing",
    name: "Regional Influencer Marketing",
    seoTitle: "Regional & Vernacular Influencer Marketing",
    answer: {
      question: "What is regional influencer marketing?",
      text: "Regional influencer marketing uses creators who make content in a local language or for a specific state or city, rather than national English-language creators. In India that can mean Tamil creators for Tamil Nadu or Marathi creators for Maharashtra. It works because people trust recommendations in their own language, from someone who shares their context.",
    },
    relatedSlugs: ["micro-nano-influencer-marketing", "creator-discovery", "social-campaigns"],
    guides: ["regional-influencer-marketing-india", "influencer-marketing-tier-2-tier-3-cities", "ugc-localization", "regional-influencer-marketing-uk", "local-regional-influencer-marketing-australia"],
    shortDescription: "Creators who speak your customer's language, in the cities you sell.",
    description:
      "India doesn't buy in one language. We find creators who speak to customers in Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi, Bengali, Gujarati, Punjabi and more, check that their audience actually lives where you sell, and plan campaigns state by state around local festivals and buying moments.",
    metaDescription:
      "Regional influencer marketing in India: vernacular creators in Hindi, Tamil, Telugu, Kannada, Marathi, Bengali and more, with audience-location checks by state.",
    secondaryKeywords: ["regional influencer marketing", "vernacular influencer marketing", "regional language influencers India", "tier 2 and tier 3 influencer marketing"],
    whoItsFor:
      "Brands expanding beyond the metros, entering a new state, or selling to customers who prefer content in their own language.",
    deliverables: [
      "Market and language plan by state, city or region",
      "Vernacular creator shortlists with audience-location checks",
      "Briefs localised by native speakers, not translated",
      "Results compared by region and language",
    ],
    clientProvides: [
      "The states, cities or regions you sell in, and where you want to grow",
      "Where the product is available locally: stores, marketplaces, delivery areas",
      "Regional sales data, if you can share it",
      "Approved product claims and any language-specific materials",
    ],
    successMeasures: [
      "Share of each creator's audience in the target region",
      "Results compared by language and region",
      "Sales or traffic in target regions, where tracked",
    ],
    process: [
      { title: "Market Plan", body: "We decide which regions and languages matter from your sales and distribution, and the festivals and seasons that drive buying there." },
      { title: "Vernacular Creator Sourcing", body: "We source creators who make content natively in each language and check that their audience is in the region, not just the creator." },
      { title: "Localised Briefs", body: "Native speakers adapt the brief, references and claims for each market, so creators aren't reading a translation." },
      { title: "Regional Reporting", body: "We report by region and language, so you can see where to put more budget next." },
    ],
    benefits: [
      "Creators your customers trust, in their own language",
      "Audience location checked, not assumed",
      "Briefs adapted by native speakers",
      "A clear read on which regions respond",
    ],
    faqs: [
      {
        question: "Why use regional influencers instead of national ones?",
        answer:
          "Regional creators often have closer, more trusting audiences in a specific market, and their content feels local rather than translated. National creators give broad reach; regional creators give depth where you sell. Many campaigns combine both.",
      },
      {
        question: "Which languages can Kudozz cover?",
        answer:
          "In India we source creators across major languages, including Hindi, Tamil, Telugu, Kannada, Malayalam, Marathi, Bengali, Gujarati, Punjabi and Odia, plus Hinglish. Outside India we plan Arabic-language campaigns for the UAE and Saudi Arabia, and regional campaigns in the UK and Australia.",
      },
      {
        question: "Does regional influencer marketing work in tier 2 and tier 3 cities?",
        answer:
          "Often better than national campaigns, because regional creators reach customers that metro-focused creators miss. Check distribution first: creators can only convert demand where customers can actually buy the product.",
      },
      {
        question: "How do you check that a regional creator's audience is local?",
        answer:
          "We review audience location from creator insights, the language of the comments and the creator's local context. A creator based in Chennai may have most of their audience elsewhere, so we check the data rather than the creator's address.",
      },
      {
        question: "Should we translate one brief into several languages?",
        answer:
          "Translate the facts, but let native speakers adapt the hooks, references and humour. A localised brief with room for each creator's voice works better than one script translated word for word.",
      },
    ],
    motif: "orbit",
  },
  {
    slug: "micro-nano-influencer-marketing",
    name: "Micro & Nano Influencer Marketing",
    seoTitle: "Micro & Nano Influencer Marketing Services",
    answer: {
      question: "What are micro and nano influencers?",
      text: "Nano influencers usually have roughly 1,000 to 10,000 followers and micro influencers roughly 10,000 to 100,000, though sources draw the lines differently. Smaller creators often have closer, more local audiences and stronger engagement than large accounts. Brands work with many at once to combine that trust with meaningful total reach.",
    },
    comparison: {
      title: "Nano vs micro influencers at a glance",
      columns: ["", "Nano", "Micro"],
      rows: [
        ["Typical following", "Roughly 1,000 to 10,000", "Roughly 10,000 to 100,000"],
        ["Audience", "Close, often local or community-based", "Niche, built around a topic"],
        ["Typical deal", "Barter, gifting or small fees", "Fees, often with product"],
        ["Content", "Personal and informal", "More polished, still personal"],
        ["Best for", "Local reach, word of mouth, volume", "Niche authority, conversions, launches"],
      ],
    },
    relatedSlugs: ["barter-influencer-campaigns", "regional-influencer-marketing", "creator-discovery"],
    guides: ["nano-vs-micro-influencers", "micro-influencers-india", "micro-vs-macro-influencers", "how-to-identify-fake-followers"],
    shortDescription: "Many smaller creators, managed as one campaign.",
    description:
      "Smaller creators often have closer, more engaged audiences, but running fifty of them is a logistics job. We find nano and micro creators whose followers match your customer, handle outreach, products, briefs and approvals at volume, and report the campaign as one result.",
    metaDescription:
      "Micro and nano influencer marketing services: vetted smaller creators managed at volume, with briefs, product logistics, approvals and one combined report.",
    secondaryKeywords: ["micro influencer marketing agency", "nano influencer marketing", "micro influencer campaigns", "small influencer marketing"],
    whoItsFor:
      "Brands that want trust and local reach over celebrity reach, need many voices for one launch, or are testing influencer marketing on a smaller budget.",
    deliverables: [
      "Vetted nano and micro creator shortlist, sized to the budget",
      "Volume outreach, agreements and product logistics",
      "Templated briefs and batch approvals",
      "One combined report, broken down by creator",
    ],
    clientProvides: [
      "Target audience, cities and languages",
      "Product units for each creator, or a voucher process",
      "Budget split between fees, barter and product",
      "Tracking links or codes per creator",
    ],
    successMeasures: [
      "Combined reach and engagement against plan",
      "Cost per engagement and per result across the group",
      "Top performers identified for repeat or ambassador deals",
    ],
    process: [
      { title: "Tier & Size the Group", body: "We work out how many creators the budget supports, and the mix of nano and micro, fee and barter." },
      { title: "Vet at Volume", body: "Every creator is checked for audience fit and authenticity; smaller accounts get the same fraud checks as large ones." },
      { title: "Run in Batches", body: "We onboard, ship, brief and approve in batches, so fifty creators don't mean fifty separate threads for your team." },
      { title: "Report as One Campaign", body: "You get one report with a creator-level breakdown, and a shortlist of who to work with again." },
    ],
    benefits: [
      "Engaged, trusting audiences instead of passive reach",
      "Many authentic voices in one campaign",
      "Lower cost per creator, so you can test more",
      "Volume handled without adding to your team's workload",
    ],
    faqs: [
      {
        question: "Are micro influencers better than macro influencers?",
        answer:
          "Not always. Micro creators tend to have closer audiences and stronger engagement, which helps trust and conversions. Macro creators deliver reach quickly. The right mix depends on your goal; many campaigns use a few larger creators for reach and many smaller ones for trust.",
      },
      {
        question: "How many micro or nano influencers does a campaign need?",
        answer:
          "Enough that combined reach meets your goal and that you can compare results across creators. We size the group from your budget and objective, and start with a smaller first wave when you are testing.",
      },
      {
        question: "Do nano influencers charge fees?",
        answer:
          "Some work on barter or gifting, especially for products they like, while others charge modest fees. We mix fee, barter and product deals within one campaign depending on the creator and the work involved.",
      },
      {
        question: "How do you manage so many creators at once?",
        answer:
          "Batched onboarding, one brief template per campaign, a tracked approval queue and a single point of contact. Your team approves in batches rather than handling every creator separately.",
      },
      {
        question: "Are small accounts more likely to have fake followers?",
        answer:
          "They can be, which is why every creator is checked regardless of size: engagement patterns, comment quality, follower growth and audience location. A small account with a real, local audience is worth more than a large one with bought followers.",
      },
    ],
    motif: "loop",
  },
];

/** Display order and grouping for the services hub, home page and numbering. Every service must appear once. */
export const serviceCategories: ServiceCategory[] = [
  {
    id: "plan-and-manage",
    name: "Plan and manage",
    description: "Strategy, creator selection, day-to-day campaign management and reporting.",
    slugs: ["campaign-strategy", "creator-discovery", "outreach-management", "reporting"],
  },
  {
    id: "campaign-types",
    name: "Campaign types and pay models",
    description: "How creators are engaged and paid, from gifting and barter to fixed fees, commissions and long-term programmes.",
    slugs: [
      "paid-influencer-campaigns",
      "barter-influencer-campaigns",
      "influencer-seeding-gifting",
      "influencer-affiliate-marketing",
      "ambassador-programs",
      "product-launches",
      "social-campaigns",
    ],
  },
  {
    id: "ugc",
    name: "UGC and content",
    description: "Creator-made content your brand owns and runs on its own channels and ads.",
    slugs: ["ugc-campaigns", "ugc-content-production"],
  },
  {
    id: "platforms",
    name: "Platforms",
    description: "Campaigns planned around how each platform's formats, audiences and ad tools work.",
    slugs: ["instagram-influencer-marketing", "youtube-influencer-marketing", "linkedin-influencer-marketing"],
  },
  {
    id: "audiences",
    name: "Audiences and creator tiers",
    description: "Reaching customers in their own language and through smaller, closer creator communities.",
    slugs: ["regional-influencer-marketing", "micro-nano-influencer-marketing"],
  },
];

export const services: Service[] = serviceCategories
  .flatMap((category) =>
    category.slugs.map((slug) => {
      const service = serviceList.find((s) => s.slug === slug);
      if (!service) throw new Error(`serviceCategories lists unknown service "${slug}"`);
      return { ...service, category: category.id };
    })
  )
  .map((service, i) => ({ ...service, index: String(i + 1).padStart(2, "0") }));

if (services.length !== serviceList.length) {
  throw new Error("Every service in serviceList must appear exactly once in serviceCategories");
}

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServicesByCategory() {
  return serviceCategories.map((category) => ({
    ...category,
    services: services.filter((s) => s.category === category.id),
  }));
}

/**
 * Hand-picked related services first, then the next services in the list (wrapping around), so every service
 * page links to closely related neighbours.
 */
export function getRelatedServices(service: Service, count = 3) {
  const picked = (service.relatedSlugs ?? []).flatMap((slug) => {
    const s = getServiceBySlug(slug);
    return s && s.slug !== service.slug ? [s] : [];
  });
  const start = services.findIndex((s) => s.slug === service.slug);
  for (let i = 1; picked.length < count && i < services.length; i++) {
    const next = services[(start + i) % services.length];
    if (!picked.includes(next)) picked.push(next);
  }
  return picked.slice(0, count);
}
