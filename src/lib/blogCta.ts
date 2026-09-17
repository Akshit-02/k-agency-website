/**
 * Blog CTA resolver
 * -----------------
 * Derives the two contextual CTAs (mid-article + end-of-article) for a blog
 * post purely from its existing `slug`/`category` — no per-article data
 * migration required. This is what lets the CTA system apply automatically
 * to all existing posts and to every future post added to blog.ts.
 *
 * Matching is ordered most-specific-intent first (UGC, pricing, ROI, legal/
 * ops, campaign management, discovery) before platform buckets (Instagram,
 * YouTube, LinkedIn, X, Podcast, Snapchat, Pinterest, Reddit), then industry
 * verticals and location pages, ending in a generic fallback. First match
 * wins.
 */

import type { BlogPost } from "@/content/blog";

export type BlogCtaContent = {
  headline: string;
  body: string;
  ctaLabel: string;
  href: string;
};

export type BlogCtaSet = {
  topic: string;
  mid: BlogCtaContent;
  bottom: BlogCtaContent;
};

const INQUIRY = "/for-brands#inquiry";

function withTracking(basePath: string, slug: string, category: string, pos: "mid" | "bottom", topic: string): string {
  const [path, hash] = basePath.split("#");
  const params = new URLSearchParams({ src: slug, cat: category, pos, t: topic });
  return hash ? `${path}?${params.toString()}#${hash}` : `${path}?${params.toString()}`;
}

type Matcher = {
  topic: string;
  test: (slug: string) => boolean;
  mid: { headline: string; body: string; ctaLabel: string; path: string };
  bottom: { headline: string; body: string; ctaLabel: string };
};

const matchers: Matcher[] = [
  {
    topic: "UGC",
    test: (s) => /\bugc\b/.test(s),
    mid: {
      headline: "Need UGC Creators for Your Brand?",
      body: "Get creator content tailored to your campaign and content goals.",
      ctaLabel: "Explore UGC Support",
      path: "/services/ugc-campaigns",
    },
    bottom: {
      headline: "Need UGC Content for Your Brand?",
      body: "Let's help you find creators and build a UGC content plan that fits your campaign goals.",
      ctaLabel: "Get UGC Support",
    },
  },
  {
    topic: "Product Launch",
    test: (s) => /product-launch/.test(s) || /influencers-for-product-launch/.test(s),
    mid: {
      headline: "Launching a New Product?",
      body: "Kudozz can help plan creator coverage timed around your launch window.",
      ctaLabel: "Plan the Launch",
      path: "/services/product-launches",
    },
    bottom: {
      headline: "Launching a New Product?",
      body: "Build a creator campaign around your launch, audience and objectives.",
      ctaLabel: "Plan My Campaign",
    },
  },
  {
    topic: "Ambassador Program",
    test: (s) => /ambassador-program/.test(s),
    mid: {
      headline: "Considering a Brand Ambassador Program?",
      body: "Kudozz can help structure a program built for long-term creator relationships, not one-off posts.",
      ctaLabel: "Talk to Kudozz",
      path: "/services/ambassador-programs",
    },
    bottom: {
      headline: "Ready to Build an Ambassador Program?",
      body: "Tell us about your brand and let's design a program structure that keeps creators engaged long-term.",
      ctaLabel: "Start the Conversation",
    },
  },
  {
    topic: "Pricing",
    test: (s) => /-cost|-costs|-budget|-rates|how-much/.test(s),
    mid: {
      headline: "Planning Your Influencer Marketing Budget?",
      body: "Tell us about your campaign and we'll help you think through the creator mix and campaign structure.",
      ctaLabel: "Discuss Your Campaign",
      path: INQUIRY,
    },
    bottom: {
      headline: "Ready to Scope Your Campaign Budget?",
      body: "Share your goals and we'll help you plan a creator mix that fits your budget.",
      ctaLabel: "Discuss Your Budget",
    },
  },
  {
    topic: "ROI & Reporting",
    test: (s) => /-roi|measure-|-metrics|-kpis|-analytics|marketing-report$/.test(s),
    mid: {
      headline: "Want Clearer Campaign Reporting?",
      body: "Kudozz tracks performance by creator, not just campaign totals, so you know what actually worked.",
      ctaLabel: "Improve Your Reporting",
      path: "/services/reporting",
    },
    bottom: {
      headline: "Want to Improve Campaign Measurement?",
      body: "Tell us how you're tracking campaigns today and let's build a clearer reporting setup.",
      ctaLabel: "Talk to Kudozz",
    },
  },
  {
    topic: "Legal & Compliance",
    test: (s) =>
      /-contract|-compliance|-brief$|-brief-|-negotiat|-payments|usage-rights|-whitelisting|-licensing|brand-safety/.test(
        s
      ),
    mid: {
      headline: "Need Help With Creator Contracts or Compliance?",
      body: "Kudozz handles contracting, usage rights and compliance as part of a managed campaign.",
      ctaLabel: "Talk to Kudozz",
      path: "/services/outreach-management",
    },
    bottom: {
      headline: "Want Campaign Contracting Handled for You?",
      body: "Let Kudozz manage negotiation, contracts and compliance so nothing falls through the cracks.",
      ctaLabel: "Get Campaign Support",
    },
  },
  {
    topic: "Campaign Management",
    test: (s) => /outreach|campaign-management|how-to-work-with|how-to-brief|how-to-contact/.test(s),
    mid: {
      headline: "Need Help Managing Your Campaign?",
      body: "From creator coordination to campaign execution and reporting, Kudozz can support the process.",
      ctaLabel: "Get Campaign Support",
      path: "/services/outreach-management",
    },
    bottom: {
      headline: "Need Help Running the Campaign End to End?",
      body: "Tell us what you're working on and let Kudozz manage outreach, coordination and reporting for you.",
      ctaLabel: "Get Campaign Support",
    },
  },
  {
    topic: "Creator Discovery",
    test: (s) =>
      /how-to-find|how-to-vet|avoid-fake-influencers|fake-follow|fake-influencer|micro-vs-macro|micro-influencers|-vetting|find-indian-influencers/.test(
        s
      ),
    mid: {
      headline: "Need the Right Creators for Your Campaign?",
      body: "Kudozz can help with creator discovery, vetting and shortlisting suited to your brand.",
      ctaLabel: "Find the Right Creators",
      path: "/services/creator-discovery",
    },
    bottom: {
      headline: "Need Help Finding the Right Creators?",
      body: "Tell us about your brand and audience, and let Kudozz build a vetted creator shortlist.",
      ctaLabel: "Find the Right Creators",
    },
  },
  {
    topic: "Podcast",
    test: (s) => /podcast/.test(s),
    mid: {
      headline: "Exploring Podcast Creator Partnerships?",
      body: "Kudozz can help identify the right shows and structure host-read or sponsorship-style partnerships.",
      ctaLabel: "Talk to Kudozz",
      path: INQUIRY,
    },
    bottom: {
      headline: "Planning a Podcast Sponsorship Campaign?",
      body: "Tell us about your brand and let's find the right podcast creator partnerships for it.",
      ctaLabel: "Start Your Campaign",
    },
  },
  {
    topic: "Instagram",
    test: (s) => /instagram/.test(s),
    mid: {
      headline: "Planning an Instagram Creator Campaign?",
      body: "Find the right creators and build a campaign around your audience and goals.",
      ctaLabel: "Talk to Kudozz",
      path: INQUIRY,
    },
    bottom: {
      headline: "Ready to Plan Your Instagram Campaign?",
      body: "Tell us what you're trying to achieve and let Kudozz build the right Instagram creator strategy for your brand.",
      ctaLabel: "Start Your Campaign",
    },
  },
  {
    topic: "YouTube",
    test: (s) => /youtube/.test(s),
    mid: {
      headline: "Looking for YouTube Creators?",
      body: "Build creator partnerships around reviews, integrations and sponsored content.",
      ctaLabel: "Find the Right Creators",
      path: INQUIRY,
    },
    bottom: {
      headline: "Planning a YouTube Creator Campaign?",
      body: "Tell us about your campaign and let's find the right creator approach for your brand.",
      ctaLabel: "Start Your Campaign",
    },
  },
  {
    topic: "LinkedIn / B2B",
    test: (s) => /linkedin|^b2b-|-b2b-/.test(s),
    mid: {
      headline: "Exploring B2B Creator Marketing?",
      body: "Kudozz can help you find credible voices for thought leadership and B2B campaigns.",
      ctaLabel: "Talk to Kudozz",
      path: INQUIRY,
    },
    bottom: {
      headline: "Looking to Work With B2B Creators?",
      body: "Build creator partnerships around expertise, thought leadership and your business goals.",
      ctaLabel: "Talk to Kudozz",
    },
  },
  {
    topic: "X",
    test: (s) => /(^|-)x-/.test(s),
    mid: {
      headline: "Exploring Creator Marketing on X?",
      body: "Kudozz can help identify credible voices and build a campaign around real-time conversation.",
      ctaLabel: "Talk to Kudozz",
      path: INQUIRY,
    },
    bottom: {
      headline: "Planning a Creator Campaign on X?",
      body: "Tell us about your brand and goals, and let's find the right creator approach on X.",
      ctaLabel: "Start Your Campaign",
    },
  },
  {
    topic: "Snapchat",
    test: (s) => /snapchat/.test(s),
    mid: {
      headline: "Exploring Snapchat Creator Marketing?",
      body: "Kudozz can help you plan a creator campaign suited to Snapchat's younger, mobile-first audience.",
      ctaLabel: "Talk to Kudozz",
      path: INQUIRY,
    },
    bottom: {
      headline: "Planning a Snapchat Creator Campaign?",
      body: "Tell us about your brand and goals, and let's build the right creator approach on Snapchat.",
      ctaLabel: "Start Your Campaign",
    },
  },
  {
    topic: "Pinterest",
    test: (s) => /pinterest/.test(s),
    mid: {
      headline: "Exploring Pinterest Creator Marketing?",
      body: "Kudozz can help you plan a creator campaign around Pinterest's long content lifespan and purchase intent.",
      ctaLabel: "Talk to Kudozz",
      path: INQUIRY,
    },
    bottom: {
      headline: "Planning a Pinterest Creator Campaign?",
      body: "Tell us about your brand and goals, and let's build the right creator approach on Pinterest.",
      ctaLabel: "Start Your Campaign",
    },
  },
  {
    topic: "Reddit",
    test: (s) => /reddit/.test(s),
    mid: {
      headline: "Exploring Reddit Community Marketing?",
      body: "Kudozz can help you approach Reddit communities the way they expect — credibly, not like an ad.",
      ctaLabel: "Talk to Kudozz",
      path: INQUIRY,
    },
    bottom: {
      headline: "Planning a Reddit Creator or Community Strategy?",
      body: "Tell us about your brand and goals, and let's find the right approach for Reddit's communities.",
      ctaLabel: "Start Your Campaign",
    },
  },
];

const LOCATION_OVERRIDES: Record<string, string> = {
  ahmedabad: "Ahmedabad",
  bangalore: "Bangalore",
  delhi: "Delhi",
  mumbai: "Mumbai",
};

function isLocationSlug(slug: string): string | null {
  const agencyMatch = slug.match(/^best-influencer-marketing-agencies-in-(.+)$/);
  if (agencyMatch) return titleCaseWords(agencyMatch[1]);
  const cityMatch = slug.match(/^influencer-marketing-(ahmedabad|bangalore|delhi|mumbai)$/);
  if (cityMatch) return LOCATION_OVERRIDES[cityMatch[1]];
  return null;
}

const ACRONYM_OVERRIDES: Record<string, string> = {
  d2c: "D2C",
  b2b: "B2B",
  saas: "SaaS",
  ev: "EV",
  hr: "HR",
  fmcg: "FMCG",
  edtech: "EdTech",
  it: "IT",
  nadu: "Nadu",
  pradesh: "Pradesh",
};

const STOPWORDS = new Set(["influencer", "marketing", "brands", "brand", "india", "agencies", "agency", "in", "best", "for", "funnel"]);

function titleCaseWords(raw: string): string {
  return raw
    .split("-")
    .map((w) => ACRONYM_OVERRIDES[w] ?? w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const SLUG_LABEL_OVERRIDES: Record<string, string> = {
  "d2c-influencer-marketing-funnel-india": "D2C",
  "photography-creative-services-influencer-marketing-india": "Photography & Creative Services",
  "hr-recruitment-influencer-marketing-india": "HR & Recruitment",
  "restaurant-cafe-influencer-marketing-india": "Restaurant & Cafe",
  "parenting-baby-influencer-marketing-india": "Parenting & Baby",
};

function extractIndustryLabel(slug: string): string {
  if (SLUG_LABEL_OVERRIDES[slug]) return SLUG_LABEL_OVERRIDES[slug];
  const words = slug.split("-").filter((w) => !STOPWORDS.has(w));
  const label = words
    .map((w) => ACRONYM_OVERRIDES[w] ?? w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
    .trim();
  return label || "Brand";
}

const isIndustryVerticalSlug = (slug: string) =>
  /influencer-marketing-.+-india$|influencer-marketing-.+-brands-india$|-influencer-marketing-india$/.test(slug) &&
  !/^(youtube|instagram|linkedin|snapchat|pinterest|reddit|regional)-/.test(slug) &&
  slug !== "influencer-marketing-india" &&
  slug !== "seasonal-influencer-marketing-india" &&
  slug !== "linkedin-influencer-marketing-india";

const isAgencyComparisonSlug = (slug: string) =>
  /agency-vs-in-house|choose-influencer-marketing-agency|how-to-choose-an-influencer-marketing-agency|influencer-management-vs-influencer-marketing|influencer-marketing-services-india/.test(
    slug
  );

const isTrendsSlug = (slug: string) => /trends-2026|state-of-the-creator-economy|algorithm-changes/.test(slug);

export function getBlogCtaSet(post: BlogPost): BlogCtaSet {
  const { slug, category } = post;

  for (const matcher of matchers) {
    if (matcher.test(slug)) {
      return {
        topic: matcher.topic,
        mid: {
          headline: matcher.mid.headline,
          body: matcher.mid.body,
          ctaLabel: matcher.mid.ctaLabel,
          href: matcher.mid.path === INQUIRY ? withTracking(INQUIRY, slug, category, "mid", matcher.topic) : matcher.mid.path,
        },
        bottom: {
          headline: matcher.bottom.headline,
          body: matcher.bottom.body,
          ctaLabel: matcher.bottom.ctaLabel,
          href: withTracking(INQUIRY, slug, category, "bottom", matcher.topic),
        },
      };
    }
  }

  const locationLabel = isLocationSlug(slug);
  if (locationLabel) {
    return {
      topic: "Location",
      mid: {
        headline: `Running a Campaign in ${locationLabel}?`,
        body: `Kudozz works with brands across India to plan and run influencer campaigns, including in ${locationLabel}.`,
        ctaLabel: "Talk to Kudozz",
        href: withTracking(INQUIRY, slug, category, "mid", "Location"),
      },
      bottom: {
        headline: `Ready to Plan a Campaign in ${locationLabel}?`,
        body: "Tell us about your brand and goals, and let's build the right creator strategy for your market.",
        ctaLabel: "Start Your Campaign",
        href: withTracking(INQUIRY, slug, category, "bottom", "Location"),
      },
    };
  }

  if (isAgencyComparisonSlug(slug)) {
    return {
      topic: "Agency Comparison",
      mid: {
        headline: "Weighing Your Options for Running a Campaign?",
        body: "Kudozz can walk you through what a managed campaign looks like for your specific situation.",
        ctaLabel: "Talk to Kudozz",
        href: withTracking(INQUIRY, slug, category, "mid", "Agency Comparison"),
      },
      bottom: {
        headline: "Ready to Talk to an Influencer Marketing Agency?",
        body: "Tell us about your brand and what you're trying to achieve, and we'll take it from there.",
        ctaLabel: "Talk to Kudozz",
        href: withTracking(INQUIRY, slug, category, "bottom", "Agency Comparison"),
      },
    };
  }

  if (isIndustryVerticalSlug(slug)) {
    const label = extractIndustryLabel(slug);
    return {
      topic: "Industry",
      mid: {
        headline: `Planning a Campaign for Your ${label} Brand?`,
        body: `Kudozz can help you find creators who understand the ${label.toLowerCase()} space and build a campaign around your audience.`,
        ctaLabel: "Talk to Kudozz",
        href: withTracking(INQUIRY, slug, category, "mid", "Industry"),
      },
      bottom: {
        headline: `Ready to Launch a ${label} Creator Campaign?`,
        body: "Tell us about your brand and goals, and let's build a creator strategy suited to your category.",
        ctaLabel: "Start Your Campaign",
        href: withTracking(INQUIRY, slug, category, "bottom", "Industry"),
      },
    };
  }

  if (isTrendsSlug(slug)) {
    return {
      topic: "Trends",
      mid: {
        headline: "Want to Put These Trends Into Practice?",
        body: "Kudozz can help you turn what's working right now into an actual campaign plan.",
        ctaLabel: "Talk to Kudozz",
        href: withTracking(INQUIRY, slug, category, "mid", "Trends"),
      },
      bottom: {
        headline: "Ready to Build a Campaign Around What's Working Now?",
        body: "Tell us about your brand and goals, and let's plan a campaign grounded in where the creator economy actually is.",
        ctaLabel: "Start Your Campaign",
        href: withTracking(INQUIRY, slug, category, "bottom", "Trends"),
      },
    };
  }

  return {
    topic: "General",
    mid: {
      headline: "Planning an Influencer Campaign?",
      body: "Kudozz can help you find relevant creators and plan the right campaign for your brand.",
      ctaLabel: "Talk to Kudozz",
      href: withTracking(INQUIRY, slug, category, "mid", "General"),
    },
    bottom: {
      headline: "Ready to Plan Your Influencer Campaign?",
      body: "Tell us what you're trying to achieve and let Kudozz help you build the right creator strategy for your brand.",
      ctaLabel: "Start Your Campaign",
      href: withTracking(INQUIRY, slug, category, "bottom", "General"),
    },
  };
}
