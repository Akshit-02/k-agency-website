// The /tools hub. Every tool lives inside the article that explains it; `href` points at the heading just above
// the tool so visitors land on it. When a tool block moves or its heading id changes, update the href here.

export type FreeTool = {
  name: string;
  kind: "Calculator" | "Checklist" | "Scorecard";
  /** What the visitor puts in and gets out, in one or two sentences. */
  description: string;
  href: string;
};

export type FreeToolGroup = {
  id: string;
  title: string;
  intro: string;
  tools: FreeTool[];
};

export type FreeDownload = {
  name: string;
  description: string;
  href: string;
  /** The article that explains how to use the file. */
  guideHref: string;
};

export const toolGroups: FreeToolGroup[] = [
  {
    id: "for-brands",
    title: "For brands planning a campaign",
    intro: "Budget, forecast and check a campaign before you commit money to creators or an agency.",
    tools: [
      {
        name: "Influencer campaign cost calculator",
        kind: "Calculator",
        description:
          "Add creators by tier with your quoted fees, then production, usage rights, exclusivity, paid amplification, product and agency fees. It totals the campaign and shows what share goes to creators.",
        href: "/blog/influencer-campaign-cost-india#calculator",
      },
      {
        name: "Influencer budget allocator",
        kind: "Calculator",
        description:
          "Enter a total budget, reserve a share for non-creator costs and a second wave, and see how many nano, micro, mid-tier or macro creators your quoted fees can book.",
        href: "/blog/influencer-budget-allocation#how-many",
      },
      {
        name: "Influencer ROI forecast calculator",
        kind: "Calculator",
        description:
          "Model cautious, expected and strong outcomes from views, click-through and conversion rates, average order value, gross margin and campaign cost.",
        href: "/blog/influencer-marketing-roi-forecasting#calculator",
      },
      {
        name: "Influencer vetting checklist",
        kind: "Checklist",
        description:
          "Tick through profile and audience, authenticity and engagement, content and brand safety, and commercial fit before approving a creator.",
        href: "/blog/how-to-vet-influencers#interactive-checklist",
      },
      {
        name: "Influencer agency contract checklist",
        kind: "Checklist",
        description:
          "Check scope, money, rights and compliance, and reporting, data and exit terms before signing with an influencer marketing agency.",
        href: "/blog/influencer-marketing-agency-checklist#checklist",
      },
    ],
  },
  {
    id: "for-creators",
    title: "For creators running a business",
    intro: "Price your work, plan your income and check the contracts and processes behind it.",
    tools: [
      {
        name: "Creator pricing calculator",
        kind: "Calculator",
        description:
          "Build a quote from hours, target hourly rate, direct costs and margin, cross-check it against a price per 1,000 views, and add uplifts for paid usage, exclusivity and rush work.",
        href: "/blog/creator-pricing-calculator#calculator",
      },
      {
        name: "Creator revenue forecast",
        kind: "Calculator",
        description:
          "Combine confirmed, recurring, pipeline and launch income into conservative, expected and optimistic months, and compare each with the costs you need to cover.",
        href: "/blog/creator-revenue-forecasting#calculator",
      },
      {
        name: "Creator break-even calculator",
        kind: "Calculator",
        description:
          "Enter fixed monthly costs, average price and direct costs per deal or sale to see how many you need each month to break even.",
        href: "/blog/creator-break-even-analysis#calculator",
      },
      {
        name: "Creator delegation calculator",
        kind: "Calculator",
        description:
          "Compare what a task costs in your own hours with the price of outsourcing it, including the time you'd still spend briefing and reviewing.",
        href: "/blog/creator-outsourcing#calculator",
      },
      {
        name: "Creator contract checklist",
        kind: "Checklist",
        description: "Review the clauses in a brand or agency contract before you sign it.",
        href: "/blog/influencer-contract-guide-for-creators#checklist",
      },
      {
        name: "Creator operations checklist",
        kind: "Checklist",
        description:
          "Check the 30 processes behind a creator business: brand deals, delivery, production, finance, team and tools, and records.",
        href: "/blog/creator-operations-checklist#checklist",
      },
      {
        name: "Creator business continuity checklist",
        kind: "Checklist",
        description: "Plan how your business keeps running when you can't create for a while.",
        href: "/blog/creator-business-continuity#checklist",
      },
    ],
  },
  {
    id: "for-agencies",
    title: "For creator agencies and platforms",
    intro: "Model margins, capacity and fees, and screen creators and deliverables consistently.",
    tools: [
      {
        name: "Creator agency revenue calculator",
        kind: "Calculator",
        description:
          "Estimate monthly agency revenue and profit from roster size, deals per creator, average deal fee, commission and costs.",
        href: "/blog/creator-management-agency-business-model#calculator",
      },
      {
        name: "Agency profitability calculator",
        kind: "Calculator",
        description:
          "Turn gross billings, pass-through costs, delivery team cost and overheads into net revenue, gross margin, operating profit and utilisation.",
        href: "/blog/creator-agency-profitability#calculator",
      },
      {
        name: "Campaign capacity calculator",
        kind: "Calculator",
        description:
          "Compare the hours your campaigns and creators need with the hours your team can actually deliver, and see how many campaigns you can carry.",
        href: "/blog/creator-campaign-capacity-planning#calculator",
      },
      {
        name: "Creator talent screening scorecard",
        kind: "Scorecard",
        description:
          "Apply pass/fail gates for authenticity, brand safety, disclosure and conduct, then score weighted criteria such as audience fit, content quality and commercial potential.",
        href: "/blog/creator-talent-screening#scorecard",
      },
      {
        name: "Campaign QA checklist",
        kind: "Checklist",
        description:
          "Check one deliverable against the brief, claims and accuracy, disclosure, and rights and safety before it goes live.",
        href: "/blog/creator-campaign-quality-assurance#checklist",
      },
      {
        name: "Creator marketplace fee calculator",
        kind: "Calculator",
        description:
          "Model brand-side and creator-side fees, other revenue and payment processing to see what brands pay, what creators receive and the platform's take rate.",
        href: "/blog/creator-marketplace-business-model#calculator",
      },
    ],
  },
];

export const toolDownloads: FreeDownload[] = [
  {
    name: "Influencer campaign budget template (CSV)",
    description: "The cost categories for a campaign budget, ready for Excel or Google Sheets. No rates are pre-filled.",
    href: "/downloads/influencer-campaign-budget-template.csv",
    guideHref: "/blog/influencer-campaign-cost-india",
  },
  {
    name: "Creator campaign tracker (CSV)",
    description:
      "One row per brand deal, from enquiry and deliverables to invoice, GST, TDS and usage expiry, with a sample row to delete.",
    href: "/downloads/creator-campaign-tracker.csv",
    guideHref: "/blog/creator-workflow",
  },
];
