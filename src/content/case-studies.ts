export type CaseStudy = {
  slug: string;
  brand: string;
  industry: string;
  objective: string;
  creatorCategory: string;
  summary: string;
  metrics: { label: string; value: string }[];
  accent: "lime" | "coral" | "ink";
  isSample?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "aurora-skincare-launch",
    brand: "Sample Brand — Aurora Skincare",
    industry: "Beauty & Skincare",
    objective: "Drive awareness and pre-orders for a new serum launch",
    creatorCategory: "Beauty & Skincare creators",
    summary:
      "A 6-week seeding-to-launch program across mid-tier beauty creators, sequenced around a single launch date to build anticipation before paid amplification.",
    metrics: [
      { label: "Campaign Reach", value: "14.6M" },
      { label: "Engagement Rate", value: "6.8%" },
      { label: "Creators Activated", value: "34" },
    ],
    accent: "lime",
    isSample: true,
  },
  {
    slug: "trailhead-outdoor-ambassador",
    brand: "Sample Brand — Trailhead Outdoor",
    industry: "Outdoor & Fitness",
    objective: "Build an always-on ambassador program for a gear brand",
    creatorCategory: "Outdoor & Fitness creators",
    summary:
      "A 12-month ambassador cohort of 18 creators with quarterly content cadences, replacing one-off gifting with a structured, retained partnership model.",
    metrics: [
      { label: "Content Pieces / Quarter", value: "72" },
      { label: "Avg. Engagement Rate", value: "5.4%" },
      { label: "Program Retention", value: "89%" },
    ],
    accent: "coral",
    isSample: true,
  },
  {
    slug: "fintra-app-ugc",
    brand: "Sample Brand — Fintra",
    industry: "Fintech",
    objective: "Build a paid-social UGC library for a budgeting app",
    creatorCategory: "Finance & Lifestyle creators",
    summary:
      "A dedicated UGC production sprint generating a 40-asset content library used across paid social, App Store creative, and lifecycle email.",
    metrics: [
      { label: "UGC Assets Delivered", value: "40" },
      { label: "Paid CTR Lift", value: "+31%" },
      { label: "Turnaround", value: "3 weeks" },
    ],
    accent: "ink",
    isSample: true,
  },
];
