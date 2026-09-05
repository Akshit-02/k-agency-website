export type Service = {
  slug: string;
  index: string;
  name: string;
  shortDescription: string;
  description: string;
  deliverables: string[];
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
    deliverables: [
      "Audience and category research",
      "Platform and format strategy",
      "Creator tiering and budget allocation",
      "KPI framework agreed before launch",
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
    deliverables: [
      "Audience-fit and engagement audits",
      "Authenticity and fraud screening",
      "Curated creator shortlists with rationale",
      "Content style and brand-fit review",
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
    deliverables: [
      "Outreach and negotiation",
      "Contracting and usage rights",
      "Deliverable and approval tracking",
      "Single point of contact for both sides",
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
    deliverables: [
      "Cross-platform publishing calendar",
      "Coordinated creative direction",
      "Paid amplification guidance",
      "Real-time performance monitoring",
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
    deliverables: [
      "Pre-launch seeding strategy",
      "Embargo and exclusivity management",
      "Day-of creator coordination",
      "Post-launch content extension",
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
    deliverables: [
      "Creative brief and shot list",
      "Creator sourcing for UGC specifically",
      "Usage rights for owned and paid media",
      "Organized, ready-to-deploy asset library",
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
    deliverables: [
      "Program structure and incentive design",
      "Ambassador recruitment and onboarding",
      "Ongoing relationship management",
      "Quarterly program performance reviews",
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
    deliverables: [
      "Unified cross-creator reporting",
      "KPI-vs-actual scorecards",
      "Creator-level performance breakdown",
      "Post-campaign recommendations",
    ],
    motif: "ledger",
  },
];
