import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";

/**
 * Measurement, insight and brand strategy gaps (1710–1759). Most of the 50 candidate topics already had owners,
 * so this module holds only six: marketing mix modeling (1730, with 1735), reconciling platform reports with web
 * analytics (1732, with 1737), long sales cycles (1753, with 1733, 1734 and 1752), rebrands and repositioning
 * (1751, with 1750 and 1727), coordinating with PR (1754, with 1748) and customer insight in briefs (1723, with
 * 1720, 1721, 1724 and 1725). See docs/brand-guides-1710-1759-audit.md.
 */
const PUBLISHED = "2026-10-10";
const REVIEWED = "October 2026";

const EXT = {
  iabCreatorMeasurement: "https://www.iab.com/guidelines/creator-economy-as-is-measurement-landscape/",
  iabauReview: "https://www.iabaustralia.com.au/news/iab-australia-review-finds-industry-needs-shared-data-standards-as-advertising-measurement-grows-more-complex/",
  iabauCreators: "https://www.iabaustralia.com.au/news/six-in-ten-australians-now-discover-brands-through-creators-new-iab-australia-research-finds/",
  meridianAbout: "https://developers.google.com/meridian/docs/basics/about-the-project",
  meridianData: "https://developers.google.com/meridian/docs/user-guide/collect-data",
  meridianOrganic: "https://developers.google.com/meridian/docs/advanced-modeling/organic-and-non-media-variables",
  robynGuide: "https://facebookexperimental.github.io/Robyn/docs/analysts-guide-to-MMM/",
  ga4Models: "https://support.google.com/analytics/answer/10596866",
  ga4Settings: "https://support.google.com/analytics/answer/10597962",
  ga4Utm: "https://support.google.com/analytics/answer/10917952",
  metaWindows: "https://docs.supermetrics.com/docs/facebook-ads-new-historical-limitations-attribution-window-and-metric-removals-january-12-2026",
  asciSocial: "https://www.ascionline.in/social/",
};

export const measurementStrategyPosts: BlogPost[] = [
  // 1730 (+1735)
  {
    slug: "influencer-marketing-mix-modeling",
    category: "Campaign Strategy",
    title: "Influencer Marketing and Marketing Mix Modeling: How to Get Creators Into Your MMM",
    seoTitle: "Influencer Marketing in MMM: A Practical Guide",
    excerpt:
      "How to include creator campaigns in a marketing mix model: why creators are hard to model, the data to collect each week, separating paid and organic creator activity, calibrating with experiments, comparing creators fairly with other channels, and when MMM isn't worth it.",
    metaDescription:
      "Include influencer marketing in your marketing mix model: the data to collect, paid vs organic creator activity, calibration, and fair channel comparisons.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "4 min read",
    tags: ["influencer marketing mix modeling", "MMM influencer marketing", "creator marketing measurement", "marketing mix model creators", "compare influencer marketing with other channels"],
    related: ["influencer-marketing-incrementality", "measuring-influencer-campaign-roi", "influencer-reporting-discrepancies"],
    hero: {
      src: "/blog/brand-guides/influencer-marketing-mix-modeling.svg",
      alt: "Steps for getting creators into a marketing mix model: log weekly data, split paid and organic, model, calibrate with tests, compare channels",
    },
    body: [
      {
        type: "paragraph",
        text: "Marketing mix modeling (MMM) estimates how much each channel contributed to sales using several years of aggregate data, without tracking individuals. As creator budgets grow, finance teams want creators in the same model as search, social and TV. That is harder than it sounds, and the reasons are mostly about data, not statistics.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creators can go into an MMM if you log their activity weekly, by market, with spend and exposure (views or impressions), and keep paid creator ads separate from organic creator posts. Small or irregular creator spend is hard for a model to read, so group it, run experiments to calibrate it, and treat the result as an estimate with a range. If you don't have about two to three years of consistent data, start with holdout tests instead.",
      },
      { type: "heading", text: "MMM, attribution and incrementality", id: "methods" },
      {
        type: "table",
        headers: ["Method", "What it answers", "Weakness for creators"],
        rows: [
          ["Attribution (links, codes, platform reports)", "Which tracked clicks and codes led to sales", "Misses people who saw a post and bought later"],
          ["Incrementality tests", "What a specific campaign added, compared with a control", "One test at a time; needs a clean control"],
          ["Marketing mix modeling", "How each channel contributed over time, and where the next budget should go", "Needs long, consistent data; small channels get vague estimates"],
        ],
      },
      {
        type: "paragraph",
        text: "These methods work best together. IAB Australia's September 2026 measurement review cites IAB US research finding that only 39% of US buy-side decision-makers use MMM, attribution and incrementality together, and the review's central finding is that data, not a lack of methods, is the constraint. IAB's January 2026 creator measurement report also says creators remain undervalued in cross-media planning and attribution models. How to run creator holdout tests is covered in influencer marketing incrementality.",
        links: [
          { text: "September 2026 measurement review", href: EXT.iabauReview },
          { text: "January 2026 creator measurement report", href: EXT.iabCreatorMeasurement },
          { text: "influencer marketing incrementality", href: "/blog/influencer-marketing-incrementality" },
        ],
      },
      { type: "heading", text: "Why creators are hard to model", id: "why-hard" },
      {
        type: "list",
        items: [
          "Low spend: small budgets give the model little signal to separate from noise",
          "Lumpy timing: a few big posts in one week, then nothing, gives the model little variation to learn from",
          "Hidden cost: gifted products, usage rights and agency fees often sit outside the media budget",
          "Double counting: creator videos run as paid ads may already sit inside 'paid social'",
          "Indirect effects: creators often show up as more brand search or direct traffic, which the model may credit to search",
        ],
      },
      {
        type: "paragraph",
        text: "The low-spend problem is documented: Google's Meridian documentation advises combining low-spend channels with others to avoid issues with ROI estimation. Grouping all creator activity into one channel, rather than one per platform, is usually the first step.",
        links: [{ text: "Meridian documentation", href: EXT.meridianData }],
      },
      { type: "heading", text: "The data to log every week", id: "data" },
      {
        type: "table",
        headers: ["Field", "Why the model needs it"],
        rows: [
          ["Week and market (country, state or city)", "Regional data gives the model more variation to learn from"],
          ["Creator fees, agency fees, product and rights costs", "The true cost of the channel"],
          ["Paid spend behind creator content (partnership ads, whitelisting)", "Kept separate from brand-made paid social"],
          ["Views or impressions of organic creator posts", "Exposure, not just spend"],
          ["Number of creators and posts live", "Explains spikes"],
          ["Promotions, launches, price changes", "So creators don't get credit for a sale price"],
        ],
      },
      {
        type: "paragraph",
        text: "Meridian, Google's open-source MMM, can model organic media: activity with no direct cost, such as social posts. Organic channels get contribution estimates, but no ROI or budget recommendations, because there is no spend. Its documentation suggests at least two years of weekly data for regional models and three years for national ones as a rule of thumb. Meta's open-source tool, Robyn, follows a similar logic. Check each tool's current documentation before you build a dataset around it.",
        links: [
          { text: "can model organic media", href: EXT.meridianOrganic },
          { text: "Meridian, Google's open-source MMM", href: EXT.meridianAbout },
        ],
      },
      { type: "heading", text: "Calibrate with experiments", id: "calibrate" },
      {
        type: "paragraph",
        text: "Robyn's analyst guide recommends calibrating MMM with experimental results, such as lift studies, and running those experiments regularly. For creators, that means a regional holdout or a platform lift study for creator ads every few quarters. If the experiment says creators added 5% to sales and the model says 0.5%, the model needs work before anyone moves budget.",
        links: [{ text: "Robyn's analyst guide", href: EXT.robynGuide }],
      },
      { type: "heading", text: "Comparing creators with other channels", id: "compare-channels" },
      {
        type: "list",
        items: [
          "Use the same outcome (sales, qualified leads or new customers) for every channel",
          "Use full cost: fees, product, rights, production and management, not just media spend",
          "Compare marginal returns (what the next dollar buys), not averages",
          "Count content reused in ads, because brand-made ads need production budgets too",
          "Report ranges, not single figures, and say which method produced each number",
        ],
      },
      {
        type: "paragraph",
        text: "Hypothetical example: a skincare brand spends $40,000 a quarter on creators and $200,000 on paid social. Its model credits creators with $60,000 in sales (range $20,000 to $100,000) and paid social with $380,000. The creator range is wide because the spend is small and irregular. The sensible decision is a geographic holdout next quarter, not a budget cut.",
      },
      { type: "heading", text: "When MMM isn't worth it yet", id: "not-yet" },
      {
        type: "paragraph",
        text: "If you're under two years of clean weekly data, spend in only a few channels, or creators are a small share of the budget, MMM will produce estimates too vague to act on. Use tracked links and codes, brand search and a 'how did you hear about us' question, plus a holdout test, and start logging creator data in MMM format now. Our guide to measuring influencer campaign ROI covers the simpler methods.",
        links: [{ text: "measuring influencer campaign ROI", href: "/blog/measuring-influencer-campaign-roi" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Leaving gifted product, rights and fees out of creator cost",
          "Counting creator ads twice, in creators and paid social",
          "Reading a vague estimate as proof that creators don't work",
          "Never calibrating the model with an experiment",
          "Changing how creator data is logged every quarter",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "MMM can give creators a fair seat in budget discussions, but only if the creator data is consistent, complete and checked against experiments. Start logging now, keep paid and organic separate, and present creator results as ranges. When the platform numbers and your analytics disagree along the way, see reconciling creator reports with website analytics.",
        links: [{ text: "reconciling creator reports with website analytics", href: "/blog/influencer-reporting-discrepancies" }],
      },
    ],
    faqs: [
      {
        question: "Can influencer marketing be included in marketing mix modeling?",
        answer:
          "Yes. Log creator spend and exposure weekly, by market, keep paid creator ads separate from organic creator posts, and calibrate the estimate with holdout tests. Small or irregular creator spend gives wide, uncertain estimates.",
      },
      {
        question: "How much data does MMM need?",
        answer:
          "Google's Meridian documentation suggests, as a rule of thumb, at least two years of weekly data for regional models and three years for national ones. The right amount depends on how much your channels vary.",
      },
      {
        question: "How should brands compare influencer marketing with other channels?",
        answer:
          "Use the same outcome and full costs for every channel, compare marginal rather than average returns, include the value of content reused in ads, and report ranges with the method behind each number.",
      },
    ],
  },
  // 1732 (+1737)
  {
    slug: "influencer-reporting-discrepancies",
    category: "Campaign Strategy",
    title: "Why Creator Platform Reports and Website Analytics Don't Match, and How to Reconcile Them",
    seoTitle: "Creator Reports vs GA4: Why the Numbers Differ",
    excerpt:
      "Why Instagram, TikTok, Meta Ads and code reports never match Google Analytics: attribution models, lookback windows, view-through credit, broken tracking links and code leakage, plus a step-by-step reconciliation process and the reporting errors to avoid.",
    metaDescription:
      "Why creator platform reports and Google Analytics never match: attribution, windows, broken links and code leaks, plus a reconciliation process.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "4 min read",
    tags: ["influencer reporting discrepancies", "reconcile platform reports with GA4", "influencer campaign reporting errors", "creator campaign attribution", "UTM tracking influencers"],
    related: ["influencer-marketing-report", "measuring-influencer-campaign-roi", "influencer-marketing-dashboard"],
    hero: {
      src: "/blog/brand-guides/influencer-reporting-discrepancies.svg",
      alt: "Reconciling creator reports: line up dates, match definitions, check links, compare to orders, report one number with notes",
    },
    body: [
      {
        type: "paragraph",
        text: "A creator campaign ends and three reports arrive: the creator's screenshots, the ads platform's conversions and Google Analytics. None of them match, and someone asks which one is right. Usually all of them are, by their own rules. This guide explains why the numbers differ and how to produce one figure you can defend.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Platforms and website analytics count different things: different attribution models, different time windows, view-through credit versus clicks, and different ways of handling privacy. Before comparing, line up the dates and time zones, use the same definition of a conversion, check that tracking links work, and match everything against your own order or lead records. Report your own records as the main figure and explain the others.",
      },
      { type: "heading", text: "Why the numbers differ", id: "why" },
      {
        type: "table",
        headers: ["Cause", "What you see", "What to do"],
        rows: [
          ["Attribution model", "GA4 credits a sale to a different channel than the platform does", "Note which model each report uses"],
          ["Lookback windows", "A platform counts sales days after a click; GA4 uses its own window", "Compare like-for-like windows where possible"],
          ["View-through credit", "Ads platforms count people who saw an ad and bought later without clicking", "Report clicks and views separately"],
          ["In-app browsers, consent and blockers", "Clicks in the platform, fewer sessions in GA4", "Expect a gap; watch whether it changes"],
          ["Broken or missing tags", "Creator traffic shows as direct or referral", "Test every link before it goes live"],
          ["Code leakage", "Code sales far above link sales", "Check whether codes appeared on coupon sites"],
          ["Dates and time zones", "Totals differ at the edges of the campaign", "Use one time zone and date range"],
          ["Returns and cancellations", "Platform sales higher than finance's numbers", "Use net orders for final reporting"],
        ],
      },
      {
        type: "paragraph",
        text: "Two examples show how much the settings matter. GA4 uses data-driven attribution or last click, and it retired its first-click, linear, time-decay and position-based models in November 2023. Its default lookback window for most key events is 90 days, adjustable to 30 or 60. On Meta's side, connector documentation from Supermetrics records that the 7-day and 28-day view windows were removed from the Ads Insights API from January 12, 2026, so older reports may not be comparable with newer ones.",
        links: [
          { text: "data-driven attribution or last click", href: EXT.ga4Models },
          { text: "default lookback window", href: EXT.ga4Settings },
          { text: "connector documentation from Supermetrics", href: EXT.metaWindows },
        ],
      },
      { type: "heading", text: "A reconciliation process", id: "process" },
      {
        type: "list",
        items: [
          "Agree one date range and time zone for every report",
          "Write down each source's definition of a conversion and its attribution window",
          "Pull your own orders or CRM leads for the period, net of returns and cancellations",
          "Match tagged sessions, code redemptions and platform conversions against those records",
          "Look for broken links, duplicated codes and bot or test orders",
          "Report your own records as the main figure, with platform numbers as supporting context",
        ],
      },
      {
        type: "template",
        label: "Reconciliation table (one row per creator)",
        text: "Creator | Posts live (dates) | Link clicks (platform) | Sessions (GA4, tagged) | Orders via link (GA4) | Code redemptions (store) | Platform-reported conversions (window) | Net orders matched to records | Notes (leakage, broken link, timing)",
      },
      { type: "heading", text: "Tracking links that survive", id: "links" },
      {
        type: "paragraph",
        text: "Google's guidance is to always use utm_source, utm_medium and utm_campaign, and utm_content can tell creatives apart. Agree a naming scheme before the campaign, keep values lowercase and consistent so spellings don't split into separate rows, and test each link from a phone inside the app it will be shared in. Link shorteners and link-in-bio tools can strip parameters, so check the final landing URL.",
        links: [{ text: "Google's guidance", href: EXT.ga4Utm }],
      },
      {
        type: "paragraph",
        text: "A naming convention that keeps tags consistent is in influencer UTM tracking, and why different attribution models give different totals in influencer marketing attribution models.",
        links: [
          { text: "influencer UTM tracking", href: "/blog/influencer-utm-tracking" },
          { text: "influencer marketing attribution models", href: "/blog/influencer-marketing-attribution-models" },
        ],
      },
      { type: "heading", text: "Reporting errors to avoid", id: "errors" },
      {
        type: "list",
        items: [
          "Adding platform conversions and GA4 conversions together, counting the same sale twice",
          "Comparing a 30-day campaign with a 7-day one",
          "Using creator screenshots as the only source of reach",
          "Calling engagement rate 'conversion rate'",
          "Reporting gross sales when returns are high",
          "Treating code sales as proof the creator caused them, when codes leak",
          "Leaving out costs such as product, rights and fees",
        ],
      },
      {
        type: "paragraph",
        text: "A complete report structure, including how to show uncertainty, is in how to create an influencer marketing report. Where you need to know what creators added beyond tracked sales, see influencer marketing incrementality.",
        links: [
          { text: "how to create an influencer marketing report", href: "/blog/influencer-marketing-report" },
          { text: "influencer marketing incrementality", href: "/blog/influencer-marketing-incrementality" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Asking which report is 'right' instead of what each one counts",
          "Fixing tracking after the posts are live",
          "Not keeping the raw exports behind each number",
          "Changing definitions halfway through a program",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Mismatched numbers are normal. What matters is knowing why they differ, anchoring the report to your own records and being consistent over time. The same discipline makes creator data usable later in a marketing mix model.",
        links: [{ text: "marketing mix model", href: "/blog/influencer-marketing-mix-modeling" }],
      },
    ],
    faqs: [
      {
        question: "Why does Google Analytics show fewer conversions than Instagram or Meta Ads?",
        answer:
          "They use different attribution models and windows, ads platforms can count people who viewed an ad without clicking, and consent settings, in-app browsers and blockers stop some visits from being recorded in analytics.",
      },
      {
        question: "Which number should go in an influencer campaign report?",
        answer:
          "Use your own order or CRM records, net of returns, as the main figure. Show platform and analytics numbers as context, with each source's definition and window noted.",
      },
    ],
  },
  // 1753 (+1733, 1734, 1752)
  {
    slug: "influencer-marketing-long-sales-cycle",
    category: "Campaign Strategy",
    title: "Influencer Marketing for Long Sales Cycles: Planning and Measuring Creators When Buyers Take Months",
    seoTitle: "Influencer Marketing for Long Sales Cycles",
    excerpt:
      "How to use creators when buyers take weeks or months to decide: B2B software, property, cars, education and financial products. What creators do at each stage, educating a new category, tracking leads through the CRM, cost per qualified lead and when to judge results.",
    metaDescription:
      "Use creators when buyers take months: roles by stage, educating a new category, CRM lead tracking, cost per qualified lead and when to judge results.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "4 min read",
    tags: ["influencer marketing long sales cycle", "creator marketing considered purchase", "cost per qualified lead influencer", "B2B influencer measurement", "category education creators"],
    related: ["influencer-marketing-lead-generation", "b2b-influencer-marketing-india", "influencer-customer-quality"],
    hero: {
      src: "/blog/brand-guides/influencer-marketing-long-sales-cycle.svg",
      alt: "Long sales cycle creator plan: explain the problem, compare options, capture the lead, record the source, judge at 90 and 180 days",
    },
    body: [
      {
        type: "paragraph",
        text: "Some purchases take months: business software, an apartment, a car, a degree, an insurance policy. A creator post won't close those sales on its own, and judging it on sales in the first two weeks will make it look like a failure. This guide covers what creators can realistically do in a long sales cycle and how to measure it.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "In long sales cycles, use creators to explain the problem, help buyers compare options and earn a first conversation, such as a demo, site visit or consultation. Capture the creator source when the lead is created and store it in your CRM, because analytics tools may stop crediting the visit before the sale closes. Judge early results on qualified leads and cost per qualified lead, and judge revenue on cohorts after a full sales cycle.",
      },
      { type: "heading", text: "What creators do at each stage", id: "stages" },
      {
        type: "table",
        headers: ["Stage", "Creator role", "Signal to track"],
        rows: [
          ["Problem aware", "Explain the problem and why it matters", "Views by the right audience, saves, comments with questions"],
          ["Researching", "Compare approaches honestly, including when your product isn't the right fit", "Visits to comparison or pricing pages"],
          ["Shortlisting", "Demonstrate, answer objections, show real use", "Demo, visit or brochure requests"],
          ["Deciding", "Reassurance from people like the buyer", "Qualified leads, sales conversations"],
          ["After purchase", "Onboarding tips, community", "Retention, referrals"],
        ],
      },
      { type: "heading", text: "When the category itself is new", id: "new-category" },
      {
        type: "paragraph",
        text: "If buyers don't know your category exists, such as a new kind of financial product or a new device type, start further back. Ask creators to explain the problem before the product, compare the new approach with what people do today, and address myths and risks directly. Expect this to take several posts per creator over months. In regulated categories, claims need checking against the rules; see influencer marketing compliance.",
        links: [{ text: "influencer marketing compliance", href: "/blog/influencer-marketing-compliance" }],
      },
      { type: "heading", text: "Capture the source at the lead, not the sale", id: "crm" },
      {
        type: "paragraph",
        text: "Google Analytics only credits visits within its lookback window: 90 days by default for most key events, with 30 or 60 days as alternatives. A buyer who first saw a creator six months before signing may not be credited to that creator. So record the source when the lead is created: a hidden field filled from the tracking link, a creator code and a 'how did you hear about us' question. Store it in the CRM so it travels with the lead to the sale.",
        links: [{ text: "90 days by default", href: EXT.ga4Settings }],
      },
      { type: "heading", text: "Cost per qualified lead", id: "cpql" },
      {
        type: "paragraph",
        text: "Cost per qualified lead = total creator cost ÷ leads that meet your qualification rules. Agree the rules with sales before the campaign, such as budget, timeline and fit. Hypothetical example: a SaaS company spends ₹6,00,000 on fees, production and management for four LinkedIn creators. They produce 300 sign-ups, of which 60 meet the qualification rules. Cost per lead is ₹2,000, but cost per qualified lead is ₹10,000. Compare that with your other channels' cost per qualified lead, then track how many of those 60 reach a proposal and a sale.",
      },
      { type: "heading", text: "When to judge results", id: "timing" },
      {
        type: "table",
        headers: ["Read", "What to judge"],
        rows: [
          ["First 30 days", "Reach in the right audience, leads, qualified lead rate, cost per qualified lead"],
          ["90 days", "Pipeline: demos, visits, proposals by creator source"],
          ["After one full sales cycle", "Closed revenue and customer quality by creator cohort"],
        ],
      },
      {
        type: "paragraph",
        text: "Our guide to influencer marketing for lead generation covers landing pages, forms and lead routing; influencer customer quality covers how to compare customers from creators with customers from other channels.",
        links: [
          { text: "influencer marketing for lead generation", href: "/blog/influencer-marketing-lead-generation" },
          { text: "influencer customer quality", href: "/blog/influencer-customer-quality" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Judging a six-month purchase on two weeks of sales",
          "Counting sign-ups instead of qualified leads",
          "Losing the creator source when the lead moves into the CRM",
          "One post per creator, when buyers need to see an idea several times",
          "Choosing creators for reach rather than credibility with the buyer",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Creators can shorten a long sales cycle by educating buyers and earning first conversations, but only a CRM that remembers the source can prove it. Agree the qualification rules, capture the source at the lead and give the program a full cycle before deciding. B2B specifics are in influencer marketing for B2B companies in India.",
        links: [{ text: "influencer marketing for B2B companies in India", href: "/blog/b2b-influencer-marketing-india" }],
      },
    ],
    faqs: [
      {
        question: "Does influencer marketing work for long sales cycles?",
        answer:
          "It can, when creators are used to educate buyers and earn first conversations rather than to close sales. Results should be judged on qualified leads first and revenue after a full sales cycle.",
      },
      {
        question: "How do you calculate cost per qualified lead from influencers?",
        answer:
          "Divide total creator cost, including fees, production and management, by the number of leads that meet qualification rules agreed with sales before the campaign.",
      },
      {
        question: "How do you track a creator's influence when the sale closes months later?",
        answer:
          "Capture the source when the lead is created, using tracked links, codes and a 'how did you hear about us' question, and store it in the CRM. Analytics tools may stop crediting the visit after their lookback window.",
      },
    ],
  },
  // 1751 (+1750, 1727)
  {
    slug: "influencer-marketing-rebrand",
    category: "Brand Marketing",
    title: "Influencer Marketing for a Rebrand or Repositioning: How to Bring Creators and Audiences With You",
    seoTitle: "Rebranding With Influencers: A Planning Guide",
    excerpt:
      "How to use creators when a brand changes its name, look or position: testing the new positioning first, choosing and briefing creators, handling old content, links and codes, sequencing the reveal, responding to backlash and measuring whether the change is landing.",
    metaDescription:
      "Use creators in a rebrand or repositioning: test the new position, brief creators, update old content and codes, sequence the reveal and handle backlash.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "4 min read",
    tags: ["influencer marketing rebrand", "rebranding with influencers", "brand repositioning creators", "creator campaign brand refresh", "test brand positioning with creators"],
    related: ["influencer-marketing-brand-awareness", "influencer-sentiment-analysis", "influencer-usage-rights"],
    hero: {
      src: "/blog/brand-guides/influencer-marketing-rebrand.svg",
      alt: "Rebrand creator plan: test the new position, brief the why, clean up old content, reveal in stages, measure recognition and sentiment",
    },
    body: [
      {
        type: "paragraph",
        text: "A rebrand changes how a brand looks or what it's called; a repositioning changes what it stands for or who it's for. Either way, the people who already follow your creators knew the old version. Creators can help the change make sense to them, or they can make it look forced. This guide covers how to plan for the first outcome.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Test the new positioning with a few creators and their audiences before the launch. Start with creators who already like the brand, explain why the change is happening, and let them describe it in their own words. Update or retire old creator content, links, codes and ads that use the old name or look. Reveal in stages, respond to questions openly, and measure recognition of the new name and sentiment, not just reach.",
      },
      { type: "heading", text: "Rebrand or repositioning?", id: "types" },
      {
        type: "table",
        headers: ["Change", "What creators need to do", "Main risk"],
        rows: [
          ["New name or logo only", "Make the new name familiar and connect it to the old one", "People think it's a different company"],
          ["New look and tone", "Show the brand in the new style", "Old creators no longer fit"],
          ["New audience or price point", "Reach new people credibly", "Losing existing customers"],
          ["New category or purpose", "Explain what the brand now does", "Confusion about what you sell"],
        ],
      },
      { type: "heading", text: "Test the positioning first", id: "test" },
      {
        type: "list",
        items: [
          "Brief two or three trusted creators under NDA on the new positioning and ask for honest reactions",
          "Run organic posts that test the new message without the new name, and compare comments and saves with your usual content",
          "Test two or three versions of the core line as paid creator ads, and look at what people say, not only click rates",
          "Read comments for the words people use to describe the brand; if they don't match the new position, the position needs work",
        ],
      },
      {
        type: "paragraph",
        text: "These are signals, not proof. Combine them with customer research, and see influencer sentiment analysis for how to read comments systematically.",
        links: [{ text: "influencer sentiment analysis", href: "/blog/influencer-sentiment-analysis" }],
      },
      { type: "heading", text: "Choosing and briefing creators", id: "creators" },
      {
        type: "paragraph",
        text: "Start with creators who have already championed the brand: their audiences trust the recommendation and will accept a change from them. Add creators who fit the new position if it targets a new audience. IAB Australia's September 2026 creator research found that Australians weigh the reputation of the promoted brand (86%) and a creator's own expertise (84%) most before acting on a recommendation, which is a reminder that a rebrand can't borrow credibility the brand hasn't earned. Brief the reason for the change, what stays the same, the words to use and avoid, and the reveal date.",
        links: [{ text: "September 2026 creator research", href: EXT.iabauCreators }],
      },
      { type: "heading", text: "Clean up the old", id: "old-content" },
      {
        type: "list",
        items: [
          "List live creator content with the old name or logo, and decide which to leave, update or remove",
          "Update link-in-bio links, affiliate links and discount codes so they still work",
          "Pause or replace creator ads running with the old branding",
          "Check usage rights before editing creator content into new ads",
          "Tell ambassadors and affiliates before the public announcement",
        ],
      },
      {
        type: "paragraph",
        text: "Usage terms decide whether you can edit or keep running a creator's content; see influencer usage rights.",
        links: [{ text: "influencer usage rights", href: "/blog/influencer-usage-rights" }],
      },
      { type: "heading", text: "Sequencing the reveal", id: "sequence" },
      {
        type: "table",
        headers: ["Phase", "Creator content"],
        rows: [
          ["Before", "Nothing public; briefings under NDA"],
          ["Reveal", "Long-standing creators share the change and the reason in their own words"],
          ["Explain", "What's different, what isn't, answers to common questions"],
          ["Prove", "The product or service delivering on the new promise"],
        ],
      },
      { type: "heading", text: "Handling backlash", id: "backlash" },
      {
        type: "paragraph",
        text: "Some audiences dislike change. Prepare answers to likely questions, monitor comments on creator posts, and let creators reply in their own voice instead of pasting scripted statements. If criticism is about a real problem, such as price or quality, fix or explain it; creators shouldn't be asked to defend something they don't believe. Paid partnerships still need disclosure during a rebrand; ASCI's guidance sets the expectations in India.",
        links: [{ text: "ASCI's guidance", href: EXT.asciSocial }],
      },
      { type: "heading", text: "Measuring the change", id: "measurement" },
      {
        type: "list",
        items: [
          "Brand search for the new name, and searches combining the old and new names",
          "Comment sentiment and the words people use to describe the brand",
          "Recognition of the new name in a short survey, before and after",
          "Sales and retention among existing customers",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Revealing through new creators the audience doesn't know",
          "Scripting every word of the announcement",
          "Leaving old links and codes broken",
          "Treating reach as proof the new position landed",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Creators can carry a rebrand when the change is real, explained and tested first. Lead with the creators who already trust you, clean up the old assets and measure whether people understand the new brand. Awareness planning for the new name is covered in influencer marketing for brand awareness.",
        links: [{ text: "influencer marketing for brand awareness", href: "/blog/influencer-marketing-brand-awareness" }],
      },
    ],
    faqs: [
      {
        question: "How can influencers help with a rebrand?",
        answer:
          "Creators who already like the brand can explain the change and the reason to audiences who trust them, make the new name familiar and answer questions in their own words.",
      },
      {
        question: "Should you test a new brand positioning with creators before launch?",
        answer:
          "Yes, on a small scale: brief a few trusted creators under NDA, test the core message in organic posts and creator ads, and read the comments. Treat the results as signals alongside customer research.",
      },
    ],
  },
  // 1754 (+1748)
  {
    slug: "influencer-marketing-and-pr",
    category: "Brand Marketing",
    title: "Influencer Marketing and PR: How to Coordinate Creators, Press and Launch News",
    seoTitle: "Influencer Marketing and PR: How to Coordinate",
    excerpt:
      "How influencer marketing and PR differ, where they overlap and how to run them together: who owns what, sequencing press and creator content around a launch, keeping confidential launches under wraps, joint events, crises and shared measurement.",
    metaDescription:
      "Coordinate influencer marketing and PR: who owns what, launch sequencing, embargoes and confidential launches, joint events, crises and shared reporting.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "4 min read",
    tags: ["influencer marketing and PR", "influencer marketing vs PR", "PR and creator coordination", "confidential product launch creators", "influencer embargo"],
    related: ["influencers-for-product-launch", "event-influencer-marketing-india", "influencer-campaign-risk-management"],
    hero: {
      src: "/blog/brand-guides/influencer-marketing-and-pr.svg",
      alt: "Coordinating PR and creators: agree owners, set the embargo, brief both, release in sequence, report together",
    },
    body: [
      {
        type: "paragraph",
        text: "PR and influencer marketing often sit with different teams or agencies, and both talk to people who publish. When they don't coordinate, a creator posts before the press embargo lifts, journalists and creators get different facts, or the brand gives two answers in a crisis. This guide covers how to run them as one plan.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Agree one owner for the message and one calendar. Brief press and creators from the same facts, set embargo dates that apply to both, and decide in advance who speaks first. Keep confidential launches on a need-to-know basis with NDAs and staged information. In a crisis, PR leads and creator activity pauses until the response is agreed. Report reach and outcomes together, but keep earned and paid results separate.",
      },
      { type: "heading", text: "How they differ", id: "differences" },
      {
        type: "table",
        headers: ["", "PR", "Influencer marketing"],
        rows: [
          ["Usually paid?", "No, coverage is earned", "Usually, in money or product"],
          ["Control of content", "Journalist decides", "Agreed brief, creator's voice"],
          ["Disclosure", "Not an ad if unpaid", "Paid or gifted content must be disclosed"],
          ["Timing", "Embargoes and news cycles", "Content calendars and posting windows"],
          ["Measurement", "Coverage, share of voice, message pickup", "Reach, engagement, clicks, sales"],
        ],
      },
      {
        type: "paragraph",
        text: "Gifting to creators sits between the two. Sending product with no obligation looks like PR, but in India ASCI's guidelines can treat it as a material connection that needs disclosure. Make sure the PR team knows that before a gifting list goes out.",
        links: [{ text: "ASCI's guidelines", href: EXT.asciSocial }],
      },
      { type: "heading", text: "Who owns what", id: "owners" },
      {
        type: "table",
        headers: ["Task", "Lead", "Involved"],
        rows: [
          ["Core message and facts", "Brand or communications lead", "PR, creator team"],
          ["Press list, embargoes, interviews", "PR", "Creator team (for timing)"],
          ["Creator selection, briefs, contracts", "Creator team", "PR (for reputation checks)"],
          ["Launch calendar", "One named owner", "Both"],
          ["Crisis response", "PR", "Creator team pauses and informs creators"],
        ],
      },
      { type: "heading", text: "Sequencing a launch", id: "sequence" },
      {
        type: "list",
        items: [
          "Decide who goes first: press for news value, creators for demonstrations, or both at a set time",
          "Give creators the same embargo time as journalists, in their time zone, in writing",
          "Send creators the press release facts so prices, dates and claims match",
          "Hold creator content in approval until the embargo lifts",
          "Plan a second wave of creator content after coverage, answering questions the press raised",
        ],
      },
      {
        type: "paragraph",
        text: "Our guide to influencer marketing for product launches covers the creator side of the launch plan.",
        links: [{ text: "influencer marketing for product launches", href: "/blog/influencers-for-product-launch" }],
      },
      { type: "heading", text: "Keeping a launch confidential", id: "confidential" },
      {
        type: "list",
        items: [
          "Sign NDAs with creators, managers and agencies before sharing details",
          "Share in stages: the brief without the product name, then the product closer to filming",
          "Use code names in emails, calendars and file names",
          "Watermark preview images and keep pre-release files in access-controlled folders",
          "Ship samples as late as filming allows, in plain packaging",
          "Agree what happens if something leaks: who confirms, who stays quiet",
        ],
      },
      {
        type: "paragraph",
        text: "An NDA reduces risk but doesn't remove it. Limit the number of people who know, and assume anything sent widely may leak. Contract terms are covered in our influencer marketing contract guide.",
        links: [{ text: "influencer marketing contract guide", href: "/blog/influencer-marketing-contract" }],
      },
      { type: "heading", text: "Events with press and creators", id: "events" },
      {
        type: "paragraph",
        text: "Journalists and creators need different things at the same event: journalists want interviews and facts, creators want time and space to film. Run separate schedules, brief spokespeople for both, and tell creators which parts of the event they can film and post. Event planning for creators is covered in event influencer marketing.",
        links: [{ text: "event influencer marketing", href: "/blog/event-influencer-marketing-india" }],
      },
      { type: "heading", text: "When something goes wrong", id: "crisis" },
      {
        type: "paragraph",
        text: "If the brand faces a crisis, pause scheduled creator posts and ads, tell creators what is happening and what not to say, and let PR agree the statement. Don't ask creators to defend the brand. If the crisis involves a creator, PR and the creator team agree the response together. Our influencer campaign risk management guide covers preparation.",
        links: [{ text: "influencer campaign risk management", href: "/blog/influencer-campaign-risk-management" }],
      },
      { type: "heading", text: "Measuring together", id: "measurement" },
      {
        type: "paragraph",
        text: "Put press coverage and creator results on one launch report, but keep earned and paid results in separate columns. Shared signals include brand search, direct traffic and sales during the launch window. Don't credit the same sales to both teams.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Creators posting before the press embargo lifts",
          "Different prices or dates in press and creator content",
          "Gifting without explaining disclosure",
          "Two teams answering the same crisis",
          "Both teams claiming the same results",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "PR and creators reach people in different ways, and launches work better when they share one message, one calendar and one owner. Agree the sequence, protect confidential details and report the results side by side.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between influencer marketing and PR?",
        answer:
          "PR earns coverage that journalists control and is usually unpaid. Influencer marketing usually pays creators, in money or product, for content made to an agreed brief, which must be disclosed as advertising.",
      },
      {
        question: "How do you keep a product launch confidential when working with creators?",
        answer:
          "Use NDAs, share details in stages, use code names, watermark previews, ship samples late and keep the number of people who know small. Agree in advance how to respond if something leaks.",
      },
    ],
  },
  // 1723 (+1720, 1721, 1724, 1725)
  {
    slug: "customer-insights-influencer-brief",
    category: "Campaign Strategy",
    title: "How to Use Customer Insights in Influencer Briefs: Reviews, Objections and Segments",
    seoTitle: "Customer Insights for Influencer Briefs",
    excerpt:
      "How to turn customer reviews, support questions, sales objections and comment threads into better creator briefs: matching creators to customer problems, writing to segments, turning objections into content angles, and the honesty and privacy limits to respect.",
    metaDescription:
      "Turn customer reviews, objections and comments into better influencer briefs: match creators to customer problems, segment the message and stay honest.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "4 min read",
    tags: ["customer insights influencer brief", "customer reviews creator brief", "purchase objections creator content", "creator strategy customer segments", "match creators to customer problems"],
    related: ["influencer-campaign-brief", "influencer-social-listening", "creator-feedback-loop"],
    hero: {
      src: "/blog/brand-guides/customer-insights-influencer-brief.svg",
      alt: "From customer insight to creator brief: collect reviews and questions, find problems and objections, match creators, brief by segment",
    },
    body: [
      {
        type: "paragraph",
        text: "Most influencer briefs describe the product the way the brand sees it. Customers describe it differently: the problem they had, the doubt that nearly stopped them, the moment it worked. Briefs built on those words give creators something real to talk about. This guide covers where to find customer insight and how to turn it into a brief.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Collect what customers already say in reviews, support tickets, sales calls, returns and comments. Pull out the problems they're solving, the objections they raise and the words they use. Choose creators whose audiences have those problems, give each creator one problem and one objection to address, and let them show it in their own way. Never present customer quotes as the creator's experience, and keep personal data out of the brief.",
      },
      { type: "heading", text: "Where customer insight comes from", id: "sources" },
      {
        type: "table",
        headers: ["Source", "What it tells you", "Caution"],
        rows: [
          ["Reviews (your site, marketplaces)", "Outcomes, surprises, customers' own words", "Skewed to very happy or unhappy buyers"],
          ["Support tickets and chats", "Confusion and setup problems", "Shows problems, not reasons to buy"],
          ["Sales call notes", "Objections and competing options", "Depends on how well notes are kept"],
          ["Return and cancellation reasons", "Expectations the product didn't meet", "Small numbers can mislead"],
          ["Comments on creator posts", "Questions real audiences ask", "Read in aggregate; don't collect personal data"],
          ["Site search and FAQ visits", "What people look for before buying", "Needs analytics set up"],
        ],
      },
      {
        type: "paragraph",
        text: "Comments on past creator campaigns are especially useful because they come from the audiences you'll reach again. Influencer social listening covers how to collect them across platforms, and creator feedback loops cover what creators themselves notice in their communities.",
        links: [
          { text: "Influencer social listening", href: "/blog/influencer-social-listening" },
          { text: "creator feedback loops", href: "/blog/creator-feedback-loop" },
        ],
      },
      { type: "heading", text: "Match creators to customer problems", id: "match" },
      {
        type: "paragraph",
        text: "Start from the problem, not the creator category. A sleep supplement might suit a new-parent creator, a shift-work nurse and a frequent traveler, each for a different reason. Look for creators whose audiences already ask about the problem, and check audience location and age against your customers. Choosing the right influencer for your brand covers the rest of the selection checks.",
        links: [{ text: "Choosing the right influencer for your brand", href: "/blog/how-to-choose-the-right-influencer-for-your-brand" }],
      },
      { type: "heading", text: "Turn objections into content", id: "objections" },
      {
        type: "table",
        headers: ["Objection customers raise", "Creator content angle"],
        rows: [
          ["\"It's too expensive\"", "Cost per use, or comparison with what they use now"],
          ["\"Will it work for me?\"", "Use by someone like the audience, including limits"],
          ["\"It looks complicated\"", "Setup from unboxing to first use"],
          ["\"I've tried things like this before\"", "What's different, shown, not claimed"],
          ["\"Is it safe or legitimate?\"", "Certifications, policies, returns; checked claims only"],
        ],
      },
      { type: "heading", text: "Brief by segment", id: "segments" },
      {
        type: "paragraph",
        text: "If customers buy for different reasons, write one short section of the brief per segment instead of one message for everyone. For each segment, note the problem, the main objection, the proof that matters to them and the type of creator who reaches them. Give each creator one segment, so each video stays focused.",
      },
      {
        type: "template",
        label: "Customer insight section for a creator brief",
        text: "Segment: who they are (in customers' words)\nProblem: what they're trying to solve\nWords customers use: 3–5 phrases from reviews or calls\nMain objection: and what genuinely answers it\nProof we can support: approved claims and evidence\nWhat not to say: claims we can't prove, competitor comparisons we haven't checked\nCreator freedom: how they show it is up to them",
      },
      {
        type: "paragraph",
        text: "Add this to the rest of the brief; our influencer campaign brief guide covers the other sections.",
        links: [{ text: "influencer campaign brief guide", href: "/blog/influencer-campaign-brief" }],
      },
      { type: "heading", text: "Honesty and privacy limits", id: "limits" },
      {
        type: "list",
        items: [
          "Customer quotes can inform the brief, but creators speak from their own use",
          "Don't ask creators to repeat review claims you can't support",
          "Remove names and contact details from anything shared",
          "Summarize comments in aggregate rather than storing individual profiles",
          "Check claims against advertising rules in each market",
        ],
      },
      {
        type: "paragraph",
        text: "Our influencer marketing compliance guide covers claims and disclosure by market.",
        links: [{ text: "influencer marketing compliance guide", href: "/blog/influencer-marketing-compliance" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Briefs written only in the brand's language",
          "Asking one video to answer every objection",
          "Choosing creators by category instead of the problem their audience has",
          "Turning customer reviews into a creator's script",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Customer insight makes creator content more specific: the right problem, the right doubt and the words people actually use. Collect it before the brief, match creators to the problems and let them show the answer honestly. After the campaign, the comments become insight for the next brief.",
      },
    ],
    faqs: [
      {
        question: "How can customer reviews improve an influencer brief?",
        answer:
          "Reviews show the problems customers solve, the outcomes they value and the words they use. Use them to choose the problem and objection each creator addresses, not as a script for the creator to repeat.",
      },
      {
        question: "How do you match creators to customer segments?",
        answer:
          "Start from each segment's problem, then find creators whose audiences already ask about it, and check audience location and age against your customers. Give each creator one segment so the content stays focused.",
      },
    ],
  },
];
