import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";
import { SOURCES } from "@/content/creator-resources/shared";

export const INTEL_PUBLISHED = "2026-10-07";
export const INTEL_REVIEWED = "October 2026";

/**
 * Creator intelligence cluster, data layer (1170–1174): what to collect, how intelligence differs from a database,
 * turning data into insight, normalising performance and fair benchmarks. Sits above the 1150–1169 technology
 * cluster. See docs/creator-intelligence-1170-1189-audit.md.
 */
export const intelligenceDataPosts: BlogPost[] = [
  {
    slug: "influencer-marketing-data",
    category: "Campaign Strategy",
    title: "Influencer Marketing Data: What Brand Teams Should Collect and Analyze",
    seoTitle: "Influencer Marketing Data: What Brands Should Collect",
    excerpt:
      "The nine categories of creator and campaign data brand teams should collect, when to collect each, who owns it, how reliable each source is, and the minimum dataset to start with.",
    metaDescription:
      "What influencer marketing data brands should collect: creator, audience, engagement, content, campaign, commercial, history, relationship and compliance data.",
    author: AUTHOR,
    publishedAt: INTEL_PUBLISHED,
    lastReviewed: INTEL_REVIEWED,
    readingTime: "8 min read",
    tags: ["influencer marketing data", "influencer data", "creator data brands should collect", "influencer campaign data", "influencer data management"],
    related: ["creator-intelligence", "influencer-database", "influencer-data-analytics"],
    hero: {
      src: "/blog/brand-guides/influencer-marketing-data.svg",
      alt: "Nine types of influencer data, from creator profile and audience to commercial, relationship and compliance records",
    },
    body: [
      {
        type: "paragraph",
        text: "Most brands have plenty of influencer data and very little they can use. It sits in insight screenshots on WhatsApp, rate cards in someone's inbox, UTM reports nobody joined to creator names and approval comments in email threads. The problem isn't collecting more. It's deciding which data matters, collecting it the same way every time and keeping it attached to the creator and campaign it describes.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Brand teams should collect nine kinds of influencer data: creator profile data, audience data, engagement data, content data, campaign data, commercial data, historical performance, relationship data and compliance data. Collect each at a fixed point in the campaign (discovery, vetting, contracting, posting, 7 and 30 days after posting, close), record its source and date, and store it against both the creator and the campaign. A small, consistent dataset beats a large, patchy one.",
      },
      { type: "heading", text: "The nine categories of influencer data", id: "categories" },
      {
        type: "table",
        headers: ["Category", "What it includes", "Main source", "Collected when"],
        rows: [
          ["1. Creator profile", "Handles and URLs per platform, languages, location, niche, formats, posting frequency, tier, manager", "Public profile, creator", "Discovery"],
          ["2. Audience", "Top cities and states, age, gender, language, returning viewers, audience growth", "Creator insights (screenshots or connected accounts); tools for estimates", "Vetting, refreshed before each booking"],
          ["3. Engagement", "Views, reach, likes, comments, saves, shares, watch time, comment substance", "Creator insights, public data", "Vetting and after posting"],
          ["4. Content", "Recent posts reviewed, themes, production quality, hooks, past sponsored content, disclosure habits", "Human review", "Vetting"],
          ["5. Campaign", "Objective, brief version, deliverables, dates, links, codes, drafts, approvals, live URLs", "Your campaign tracker", "Throughout the campaign"],
          ["6. Commercial", "Quoted and paid fees, product cost, usage rights fees, payment terms, total cost", "Contracts, finance", "Negotiation and close"],
          ["7. Historical performance", "Results per post and campaign: views, engagements, clicks, conversions, cost metrics", "Insights, analytics, store data", "7 and 30 days after posting"],
          ["8. Relationship", "Stage, owner, interactions, reliability, revision rounds, communication notes, rebook decision", "Your team", "During and after each campaign"],
          ["9. Compliance", "Disclosure check, claims approval record, usage rights and expiry, exclusivity, brand-safety notes", "Your team, contracts", "Before and after go-live"],
        ],
      },
      {
        type: "paragraph",
        text: "Categories 1–4 describe the creator before you work with them. Categories 5–9 are created by working with them, and only your brand has them. That second group is what makes your data more valuable over time than any third-party database. Influencer database covers the discovery-side fields in more detail; influencer marketing CRM covers relationship records.",
        links: [
          { text: "Influencer database", href: "/blog/influencer-database" },
          { text: "influencer marketing CRM", href: "/blog/influencer-marketing-crm" },
        ],
      },
      { type: "heading", text: "How reliable is each source?", id: "reliability" },
      {
        type: "table",
        headers: ["Source", "Reliability", "Use it for", "Don't use it for"],
        rows: [
          ["Creator-connected account data", "High", "Reporting, payment on results, audience fit", "Creators who haven't connected"],
          ["Creator insights screenshots", "High if recent and complete", "Audience fit, delivered reach and views", "Undated or cropped images"],
          ["Your analytics and store data", "High for what it tracks", "Clicks, sessions, orders by link or code", "Sales it can't see (marketplaces, later purchases)"],
          ["Public profile data", "Accurate for what's public", "Content review, public engagement, posting history", "Reach, audience demographics"],
          ["Third-party estimates", "Varies", "Scanning many creators quickly", "Reporting delivered results or paying creators"],
          ["Team judgment", "As good as the reviewer", "Content quality, brand fit, reliability", "Anything that should be measured"],
        ],
      },
      {
        type: "paragraph",
        text: "The single most useful habit is recording source and date next to every number. 'Audience 42% Maharashtra' means little without 'creator insights, 2026-08-14'.",
      },
      { type: "heading", text: "When to collect what", id: "collection-points" },
      {
        type: "template",
        label: "Data collection points in a campaign",
        text: "DISCOVERY → profile, public engagement, content themes (provisional)\nVETTING → audience insights from creator, authenticity check, content review, past sponsored work\nNEGOTIATION → quoted rates by deliverable (dated), usage and exclusivity terms\nCONTRACT → final fee, deliverables, dates, rights and expiry, payment terms\nBRIEF → brief version, mandatory messages, approved claims\nDRAFTS → submission dates, revision rounds, approval record\nGO-LIVE → live URL, disclosure check, tracking link and code\n+7 DAYS → views, reach, engagements, saves, shares, link clicks (same day for every creator)\n+30 DAYS → same metrics again, conversions, comment themes\nCLOSE → total cost, cost metrics, reliability rating, rebook decision and reason",
      },
      {
        type: "paragraph",
        text: "Fixed capture days matter more than most teams realise. Comparing a post at day 3 with another at day 25 makes the newer one look worse for no reason. Influencer campaign automation shows how to trigger these requests automatically.",
        links: [{ text: "Influencer campaign automation", href: "/blog/influencer-campaign-automation" }],
      },
      { type: "heading", text: "The minimum dataset to start with", id: "minimum-dataset" },
      {
        type: "paragraph",
        text: "If you collect nothing consistently today, start with twelve fields per creator per campaign. They're enough to compare creators fairly and decide who to rebook:",
      },
      {
        type: "list",
        items: [
          "Creator profile URL and primary language",
          "Audience top states or cities (with source and date)",
          "Deliverable type and platform",
          "Go-live date",
          "Total cost (fee plus product, shipping, rights and production)",
          "Views at 7 days",
          "Saves plus shares at 7 days",
          "Link clicks or sessions from the creator's UTM link",
          "Orders or leads from the creator's link or code",
          "On-time delivery (yes/no) and revision rounds",
          "Disclosure correct (yes/no)",
          "Rebook decision and one-line reason",
        ],
      },
      { type: "heading", text: "Data to stop collecting", id: "stop-collecting" },
      {
        type: "list",
        items: [
          "Follower counts as a performance measure. They describe a creator; they don't measure a campaign.",
          "Total likes without views or reach. They're hard to interpret and easy to inflate.",
          "Personal details you don't need: home addresses after delivery, identity documents outside finance, personal opinions about creators.",
          "Screenshots without dates.",
          "Metrics nobody has defined. If two people calculate engagement rate differently, the number is noise.",
        ],
      },
      { type: "heading", text: "Data ownership and privacy", id: "privacy" },
      {
        type: "paragraph",
        text: "Creator data is personal data. India's DPDP Rules, notified in November 2025, phase in most business obligations by May 2027: purpose limitation, security safeguards, breach handling and rights to correction and erasure. In practice that means collecting what you need for a defined purpose, restricting access to payment and identity data, keeping notes factual and agreeing with any agency who owns the data it collects on your behalf.",
        links: [{ text: "DPDP Rules, notified in November 2025", href: SOURCES.dpdpRules2025 }],
      },
      { type: "heading", text: "Who owns each kind of data", id: "ownership" },
      {
        type: "table",
        headers: ["Data", "Collected by", "Owned and maintained by", "Used by"],
        rows: [
          ["Creator profile and audience", "Discovery / campaign manager", "Influencer lead", "Shortlisting, planning"],
          ["Campaign record", "Campaign manager", "Campaign manager", "Operations, reporting"],
          ["Commercial", "Campaign manager, finance", "Finance (payment details), influencer lead (fees)", "Budgeting, cost metrics"],
          ["Performance", "Campaign manager, analyst", "Analyst", "Reporting, rebooking, benchmarks"],
          ["Relationship", "Whole team", "Influencer lead", "Rebooking, programmes"],
          ["Compliance", "Campaign manager, legal", "Legal or brand lead", "Risk, rights, audits"],
        ],
      },
      {
        type: "paragraph",
        text: "If an agency runs campaigns for you, agree in the contract which data it collects on your behalf, in what format you receive it and when. Otherwise your creator history leaves with the agency.",
      },
      { type: "heading", text: "Write a data dictionary", id: "data-dictionary" },
      {
        type: "paragraph",
        text: "Two people calculating 'engagement rate' differently produce two numbers that look comparable and aren't. A one-page data dictionary prevents that:",
      },
      {
        type: "template",
        label: "Data dictionary (examples)",
        text: "VIEWS: platform-reported views from creator insights, captured 7 days after posting\nQUALITY ENGAGEMENTS: saves + shares + comments coded as question, intent or experience\nENGAGEMENT RATE: (likes + comments + saves + shares) ÷ views, recent 10 posts, median\nTOTAL COST: fee + product at cost + shipping + usage-rights fee + production + paid boost on that post\nCLICKS: sessions in web analytics with utm_source = creator handle\nCONVERSIONS: delivered orders attributed by creator link or code within 14 days\nRELIABILITY: 1–5, based on on-time drafts and revision rounds",
      },
      { type: "heading", text: "India-specific data points", id: "india" },
      {
        type: "list",
        items: [
          "Language and script of the content, and of the audience's comments.",
          "Audience state and city tier, not just country.",
          "Cash-on-delivery share and return-to-origin rate for creator-driven orders, since placed orders overstate results in COD-heavy categories.",
          "Marketplace sales during campaign windows, which creator links often can't track directly.",
          "Manager or agency representing the creator, and who invoices.",
          "GST and TDS details, held by finance rather than the marketing team.",
        ],
      },
      {
        type: "paragraph",
        text: "These fields are what make regional and D2C comparisons possible later. Influencer analytics tools covers where each data type comes from, and measuring influencer campaign ROI covers attribution gaps for marketplace sellers.",
        links: [
          { text: "Influencer analytics tools", href: "/blog/influencer-analytics-tools" },
          { text: "measuring influencer campaign ROI", href: "/blog/measuring-influencer-campaign-roi" },
        ],
      },
      { type: "heading", text: "Check data quality before you report", id: "quality-checks" },
      {
        type: "list",
        items: [
          "Every creator has figures from the same capture day.",
          "Every audience figure has a source and date.",
          "Costs include everything in the total-cost definition.",
          "No duplicate creators (match on profile URL).",
          "Outliers have a note (viral post, boosted post, sale day).",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Collecting campaign results but not costs, so efficiency can't be calculated.",
          "Storing results only in campaign reports, so creator history has to be reassembled each time.",
          "Mixing estimated and creator-provided figures without labels.",
          "Different capture days for different creators.",
          "No record of why creators were chosen, so nobody can learn from the outcome.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Good influencer marketing data is defined, dated, sourced and attached to the right creator and campaign. Collect the nine categories at fixed points, start with a minimum dataset you can maintain, and let your own campaign, commercial and relationship data accumulate. That history is the foundation of creator intelligence: using data to decide who to work with and why. For turning the data into decisions, see influencer data analytics.",
        links: [
          { text: "creator intelligence", href: "/blog/creator-intelligence" },
          { text: "influencer data analytics", href: "/blog/influencer-data-analytics" },
        ],
      },
    ],
    faqs: [
      {
        question: "What data should brands collect about influencers?",
        answer:
          "Creator profile, audience, engagement, content, campaign, commercial, historical performance, relationship and compliance data, each with its source and capture date, stored against both the creator and the campaign.",
      },
      {
        question: "What is the most reliable influencer data?",
        answer:
          "Data from creators' own accounts (insights screenshots or connected-account data) and your own analytics and store data. Third-party estimates are useful for scanning but shouldn't be used to report results or pay creators.",
      },
      {
        question: "When should influencer performance data be collected?",
        answer:
          "At fixed points for every creator, typically 7 and 30 days after posting, so creators are compared on equal terms.",
      },
    ],
  },
  {
    slug: "creator-intelligence",
    category: "Influencer Marketing",
    title: "Creator Intelligence: How Brands Can Use Data to Make Better Influencer Decisions",
    seoTitle: "Creator Intelligence: Better Influencer Decisions With Data",
    excerpt:
      "Creator intelligence is the decision layer on top of influencer data. How it answers who to work with, why, for which campaign, audience and stage, with what role, and a framework brands can run without special software.",
    metaDescription:
      "What creator intelligence is and how brands use it: answering who, why, for which campaign, audience, stage and role, with a framework and decision examples.",
    author: AUTHOR,
    publishedAt: INTEL_PUBLISHED,
    lastReviewed: INTEL_REVIEWED,
    readingTime: "8 min read",
    tags: ["creator intelligence", "influencer intelligence", "creator data decisions", "influencer decision making", "data-driven influencer selection"],
    related: ["influencer-marketing-data", "creator-intelligence-platform", "influencer-ranking"],
    hero: {
      src: "/blog/brand-guides/creator-intelligence.svg",
      alt: "Creator intelligence turning data into answers: who, why, which campaign, which audience, which stage and what role",
    },
    body: [
      {
        type: "paragraph",
        text: "A creator database tells you that a Kannada home-cooking creator exists, has 80,000 followers and posts four Reels a week. It doesn't tell you whether she should be in your next campaign, what she should do in it, or whether she'll do it better than the three other creators you're considering. That gap, between knowing about creators and deciding about them, is what creator intelligence is meant to close.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creator intelligence is the practice of turning creator, audience, campaign and market data into decisions about which creators to work with, why, for which campaign and audience, at which funnel stage and in what role. It combines data you collect (performance, costs, reliability), data you observe (content, audience, competitors, trends) and human judgment (fit, credibility, creative quality). It is a decision layer, not a database or a tool, and it gets better as your own campaign history grows.",
      },
      { type: "heading", text: "Database vs analytics vs intelligence", id: "differences" },
      {
        type: "table",
        headers: ["", "Creator database", "Influencer analytics", "Creator intelligence"],
        rows: [
          ["Question", "Who exists?", "What happened?", "What should we do next, and why?"],
          ["Output", "Lists and profiles", "Metrics and reports", "Decisions with reasons"],
          ["Time focus", "Present", "Past", "Next campaign"],
          ["Inputs", "Profiles, audience data", "Campaign results", "Both, plus costs, reliability, market and competitor context, judgment"],
          ["Owner", "Discovery", "Analyst", "Whoever decides the creator mix"],
        ],
      },
      { type: "heading", text: "The six questions creator intelligence answers", id: "six-questions" },
      {
        type: "table",
        headers: ["Question", "Data that informs it", "What judgment adds"],
        rows: [
          ["Who should we work with?", "Audience fit, quality score, past performance, cost", "Credibility, creative strength, brand fit"],
          ["Why this creator?", "Evidence: audience match, results, content consistency", "A one-line reason anyone can check"],
          ["For which campaign?", "Past results by objective and format", "Whether their style suits this idea"],
          ["For which audience?", "Audience location, language, age, interests", "Whether their audience trusts them on this topic"],
          ["At what stage of the funnel?", "Reach and views (awareness), saves and comments (consideration), clicks and orders (conversion)", "Whether they persuade or only entertain"],
          ["With what role?", "Format strengths, reliability, rights availability", "Hero creator, regional voice, UGC producer, ambassador, seeding"],
        ],
      },
      { type: "heading", text: "The creator intelligence framework", id: "framework" },
      {
        type: "template",
        label: "Creator intelligence framework",
        text: "1. CONTEXT: What's the objective, audience, market, budget and timing? What are competitors doing?\n2. CANDIDATES: Who could fit? (discovery, listening, brand mentions, past creators)\n3. EVIDENCE: For each: audience quality and fit, engagement quality, content quality, past results, cost, reliability, risk\n4. ROLE: What job would this creator do? (reach, trust, conversion, regional coverage, content for ads)\n5. DECISION: Rank, shortlist and choose, with a written reason per creator\n6. LEARNING: After the campaign, compare results with the reason. Update scores, notes and rebook decisions.",
      },
      {
        type: "paragraph",
        text: "Step 6 is the one most brands skip and the one that makes the system intelligent. Without it, every campaign starts from the same assumptions.",
      },
      { type: "heading", text: "Creator roles: the most underused decision", id: "roles" },
      {
        type: "paragraph",
        text: "Most creator selection asks 'is this creator good?' The better question is 'good for what?' Assigning roles turns a list of creators into a plan:",
      },
      {
        type: "table",
        headers: ["Role", "What the creator is for", "Evidence to look for"],
        rows: [
          ["Reach driver", "Getting the product in front of many relevant people", "Consistent views in target markets; low cost per thousand views"],
          ["Trust builder", "Persuading an audience that already believes them", "Comments asking questions, saves, past sponsored posts with real discussion"],
          ["Converter", "Driving clicks and orders", "Past link clicks and code use; audience that buys in the category"],
          ["Regional voice", "Making the brand local in a language or city", "Audience concentrated in the market; native-language content"],
          ["Content producer", "Making assets for ads and owned channels", "Production quality, hooks, on-camera presence; rights available"],
          ["Ambassador", "Repeated presence over months", "Reliability, brand affinity, stable audience"],
        ],
      },
      {
        type: "paragraph",
        text: "A creator can be weak in one role and excellent in another. A micro creator with modest reach may be the strongest converter you have. Influencer ranking explains how to prioritise creators within each role.",
        links: [{ text: "Influencer ranking", href: "/blog/influencer-ranking" }],
      },
      { type: "heading", text: "Decision examples", id: "examples" },
      {
        type: "paragraph",
        text: "Hypothetical example 1: a D2C haircare brand has budget for one macro creator or six micro creators for a Hindi-belt launch. Intelligence from two past campaigns shows micro creators in its category drove most code redemptions while macro posts drove reach and search interest. The decision: one macro creator for launch-week reach, budget for four micro creators chosen for audience concentration in Uttar Pradesh and Madhya Pradesh, and two reserved slots to rebook whichever converts best.",
      },
      {
        type: "paragraph",
        text: "Hypothetical example 2: a fintech app sees a competitor working heavily with English-language finance creators. Market mapping shows few brands working with Hindi and Marathi personal-finance educators whose audiences are first-time investors. The brand tests three such creators on an education-led brief before committing a larger budget.",
      },
      {
        type: "paragraph",
        text: "Neither decision is proven by the data. In both, data narrowed the options and set up a test that produces better data next time. Competitor and market context of this kind is covered in competitor influencer research and influencer market mapping.",
        links: [
          { text: "competitor influencer research", href: "/blog/competitor-influencer-strategy" },
          { text: "influencer market mapping", href: "/blog/influencer-market-mapping" },
        ],
      },
      { type: "heading", text: "What creator intelligence can't do", id: "limits" },
      {
        type: "list",
        items: [
          "Predict a single post's performance reliably. Creative execution, timing and platform distribution vary too much.",
          "Replace watching the content. Credibility and tone are judged by people.",
          "Work without your own history. Third-party data describes creators; only your results describe how they perform for you.",
          "Compensate for a weak product, offer or landing page.",
          "Remove risk. It reduces avoidable mistakes; it doesn't guarantee results.",
        ],
      },
      { type: "heading", text: "How to build it without special software", id: "build" },
      {
        type: "list",
        items: [
          "Keep one creator record with linked campaign history (a structured tracker is enough to start).",
          "Collect the same metrics at the same capture days for every creator.",
          "Write a one-line reason for every booking and every rejection.",
          "After each campaign, compare result with reason and update the creator's notes and scores.",
          "Review competitor and category creator activity quarterly.",
          "Add a dedicated platform only when manual upkeep becomes the bottleneck; see creator intelligence platform.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer marketing data lists what to collect, and creator intelligence platform covers what to expect from software built for this.",
        links: [
          { text: "Influencer marketing data", href: "/blog/influencer-marketing-data" },
          { text: "creator intelligence platform", href: "/blog/creator-intelligence-platform" },
        ],
      },
      { type: "heading", text: "Questions different teams bring", id: "by-team" },
      {
        type: "table",
        headers: ["Team", "Their question", "What intelligence gives them"],
        rows: [
          ["Founder or CMO", "Is creator marketing working, and where should we put more money?", "Results by role, segment and market against baselines"],
          ["Brand manager", "Which creators should front the next launch?", "Ranked shortlist with reasons and roles"],
          ["Performance marketing", "Which creator content should we run as ads?", "Assets with strong engagement quality and rights available"],
          ["Regional or sales teams", "Who can we use in our markets?", "Market map by language and region"],
          ["Finance", "Are we paying fair rates?", "Fee history and cost metrics against peer cohorts"],
        ],
      },
      {
        type: "paragraph",
        text: "Answering these from one consistent record is what separates intelligence from a set of disconnected reports. Influencer market mapping and the creator performance scorecard are the two tools teams most often lack.",
        links: [
          { text: "Influencer market mapping", href: "/blog/influencer-market-mapping" },
          { text: "creator performance scorecard", href: "/blog/creator-performance-scorecard" },
        ],
      },
      { type: "heading", text: "Signals that should change a decision", id: "signals" },
      {
        type: "table",
        headers: ["Signal", "Possible decision"],
        rows: [
          ["A creator's sponsored posts consistently outperform their organic median", "Rebook; consider ambassador role"],
          ["Strong engagement quality but weak conversions", "Keep for consideration, not sales"],
          ["Audience shifted away from your markets between screenshots", "Pause until explained"],
          ["Competitors now book the same creator monthly", "Check exclusivity; look for lookalikes"],
          ["A segment beats baseline across several creators", "Shift budget to that segment"],
          ["Comments show recurring objections", "Change the brief before changing creators"],
        ],
      },
      { type: "heading", text: "Maturity levels", id: "maturity" },
      {
        type: "table",
        headers: ["Level", "What it looks like", "Next step"],
        rows: [
          ["1. Ad hoc", "Creators chosen by followers and familiarity; results in screenshots", "Standard data fields and capture days"],
          ["2. Recorded", "Consistent tracker; results per creator", "Written reasons for each booking; scorecards"],
          ["3. Compared", "Indexes, cohorts and baselines; scorecards drive rebooking", "Competitor and market context"],
          ["4. Strategic", "Market map, trend analysis and history inform annual plans", "Regular test slots; feedback loop on every decision"],
        ],
      },
      {
        type: "paragraph",
        text: "Most brands sit between levels 1 and 2. Moving up a level rarely needs new software; it needs consistent data and the habit of writing down why. Influencer data analytics covers the comparison work at level 3.",
        links: [
          { text: "Influencer data analytics", href: "/blog/influencer-data-analytics" },
        ],
      },
      { type: "heading", text: "Where intelligence meets regional India", id: "india" },
      {
        type: "paragraph",
        text: "National averages hide most of the useful intelligence in Indian creator marketing. A creator type that underperforms nationally may be the strongest option in one state; a format that works for Hindi audiences may need adapting for Tamil or Bengali ones. Keep results tagged by language, state and city tier so the intelligence stays local enough to act on. Regional influencer marketing in India covers language planning.",
        links: [
          { text: "Regional influencer marketing in India", href: "/blog/regional-influencer-marketing-india" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Calling a creator database 'intelligence' when it can't explain any decision.",
          "Choosing creators for the brand's most visible campaign without any history from smaller tests.",
          "Assigning every creator the same role and judging them on the same metric.",
          "Never writing down why a creator was chosen.",
          "Treating scores as answers rather than as structured questions.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Creator intelligence is what happens when influencer data is used to make and explain decisions: who, why, for which campaign, audience, stage and role. Build it from consistent data, explicit reasons and a learning loop after every campaign, and keep judgment in the room. The brands that get better at creator marketing year after year are usually the ones that remember why they chose each creator and what happened next.",
      },
    ],
    faqs: [
      {
        question: "What is creator intelligence?",
        answer:
          "The practice of turning creator, audience, campaign and market data into decisions about which creators to work with, why, for which campaign and audience, at which funnel stage and in what role, combined with human judgment.",
      },
      {
        question: "How is creator intelligence different from an influencer database?",
        answer:
          "A database lists creators and their data. Creator intelligence uses that data, plus your own campaign results, costs, reliability and market context, to make and explain decisions.",
      },
      {
        question: "Do I need software for creator intelligence?",
        answer:
          "Not to start. A consistent tracker, fixed capture days, written reasons for each decision and a post-campaign review provide most of the value. Software helps when manual upkeep becomes the bottleneck.",
      },
    ],
  },
  {
    slug: "influencer-data-analytics",
    category: "Campaign Strategy",
    title: "Influencer Data Analytics: How Brands Can Turn Creator Data Into Campaign Insights",
    seoTitle: "Influencer Data Analytics: Turning Data Into Insights",
    excerpt:
      "Seven practical analyses that turn influencer data into decisions: role and objective fit, cost efficiency, creator cohorts, content and hook analysis, audience overlap, comment themes and funnel diagnosis, with an insight template.",
    metaDescription:
      "How brands turn influencer data into insights: seven analyses, from cost efficiency and cohorts to comment themes and funnel diagnosis, plus a template.",
    author: AUTHOR,
    publishedAt: INTEL_PUBLISHED,
    lastReviewed: INTEL_REVIEWED,
    readingTime: "7 min read",
    tags: ["influencer data analytics", "influencer campaign learnings", "influencer campaign insights", "analyze influencer data", "influencer performance analysis"],
    related: ["influencer-performance-data", "influencer-benchmarking", "influencer-analytics-tools"],
    hero: {
      src: "/blog/brand-guides/influencer-data-analytics.svg",
      alt: "Influencer data moving from raw metrics through analysis to insights and next-campaign decisions",
    },
    updatedAt: "2026-10-08",
    body: [
      {
        type: "paragraph",
        text: "Most influencer reports describe what happened: views, engagement, clicks, a top-performing post. Few explain why, or what to do differently. The difference isn't more data or a better tool. It's asking specific questions of the data you already have.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Turn influencer data into insights by asking decision-shaped questions and answering them with comparisons, not totals. The most useful analyses are cost efficiency by creator and role, cohort comparisons (tier, language, format, platform), content and hook analysis, audience overlap, comment-theme analysis and funnel diagnosis (where people dropped off between view and purchase). Each insight should state what was found, how confident you are, why it probably happened and what you'll change next time.",
      },
      {
        type: "paragraph",
        text: "If you're choosing the tools that produce the data, see influencer analytics tools. This article is about what to do with the numbers once you have them.",
        links: [{ text: "influencer analytics tools", href: "/blog/influencer-analytics-tools" }],
      },
      { type: "heading", text: "From data to insight", id: "data-to-insight" },
      {
        type: "table",
        headers: ["Level", "Example", "Useful?"],
        rows: [
          ["Data", "Creator B: 62,000 views, 31 orders", "Raw material"],
          ["Metric", "Creator B: CPA ₹1,129", "Comparable"],
          ["Finding", "Hindi micro creators delivered lower CPA than the macro creator", "Interesting"],
          ["Insight", "Audiences concentrated in our delivery states converted; national reach didn't. Likely because the offer was region-specific.", "Explains"],
          ["Decision", "Next launch: shift budget to regional micro creators in delivery states; keep one reach creator", "Acts"],
        ],
      },
      {
        type: "paragraph",
        text: "The example figures are illustrative. The point is the progression: a report that stops at 'finding' leaves the team to guess the rest.",
      },
      { type: "heading", text: "Seven analyses worth running", id: "analyses" },
      { type: "subheading", text: "1. Cost efficiency by creator and role" },
      {
        type: "paragraph",
        text: "Calculate the cost metric that matches each creator's role: CPM for reach drivers, cost per save or share for trust builders, CPA for converters. Comparing a reach creator's CPA with a converter's is unfair to both. Influencer CPM, CPE, CPC and CPA has the formulas.",
        links: [{ text: "Influencer CPM, CPE, CPC and CPA", href: "/blog/influencer-marketing-cpm-cpe-cpa" }],
      },
      { type: "subheading", text: "2. Cohort comparisons" },
      {
        type: "paragraph",
        text: "Group creators by tier, language, region, platform or format and compare median results, not averages. Medians stop one viral post from distorting the picture. Typical questions: did regional-language creators outperform Hindi-national creators on cost per order? Did YouTube integrations drive more considered comments than Reels?",
      },
      { type: "subheading", text: "3. Content and hook analysis" },
      {
        type: "paragraph",
        text: "Tag every post by content variables: hook type (problem, result, question, trend), when the product appears, demo or no demo, length, language, call to action. Then compare results across tags. With enough posts this shows which creative patterns work for your product, which is often more useful than knowing which creator performed.",
      },
      { type: "subheading", text: "4. Audience overlap" },
      {
        type: "paragraph",
        text: "If several creators share audiences, you're buying frequency rather than reach. Signals include the same commenters across creators, shared collaborators and similar audience geography. Overlap isn't bad for a conversion push, where repetition helps, but it inflates reach estimates for awareness campaigns.",
      },
      { type: "subheading", text: "5. Comment theme analysis" },
      {
        type: "paragraph",
        text: "Code a sample of comments per creator into questions, objections, purchase intent, praise and off-topic. Compare the mix across creators and between sponsored and organic posts. A creator whose sponsored comments are full of price and availability questions is generating demand; one whose comments ignore the product isn't, whatever the engagement rate. Influencer sentiment analysis covers this in depth.",
        links: [{ text: "Influencer sentiment analysis", href: "/blog/influencer-sentiment-analysis" }],
      },
      { type: "subheading", text: "6. Funnel diagnosis" },
      {
        type: "table",
        headers: ["Pattern", "Likely problem", "Where to look"],
        rows: [
          ["High views, low clicks", "Weak call to action, link hard to find, low intent audience", "Creative, CTA placement, audience fit"],
          ["High clicks, low orders", "Landing page, price, offer, stock, delivery coverage", "Site, not the creator"],
          ["High orders, high returns or cancellations", "Expectation mismatch or offer abuse", "Claims, product fit, code rules"],
          ["Good results early, nothing after day 7", "Short shelf life of format", "Format mix; consider paid amplification"],
        ],
      },
      { type: "subheading", text: "7. Time and decay" },
      {
        type: "paragraph",
        text: "Compare day 7 and day 30 results. YouTube videos and searchable content often keep accumulating views; Stories don't. Knowing each format's decay curve for your category improves budget decisions and stops teams from undervaluing long-tail formats.",
      },
      { type: "heading", text: "How confident should you be?", id: "confidence" },
      {
        type: "list",
        items: [
          "Small samples: three creators per cohort is an anecdote, not a pattern. Say so.",
          "Confounders: a creator who posted during a sale will look better than one who didn't.",
          "Attribution gaps: link and code tracking misses people who buy later or on marketplaces.",
          "Selection bias: if you only rebook winners, your 'repeat creators perform better' finding is partly built in.",
          "Novelty: first-time results for a product often differ from repeat campaigns.",
        ],
      },
      {
        type: "paragraph",
        text: "Label each insight high, medium or low confidence. It keeps leadership from over-reacting to a single campaign and tells you which insights to test next.",
      },
      { type: "heading", text: "An insight template", id: "template" },
      {
        type: "template",
        label: "One insight, one decision",
        text: "FINDING: What the data shows (with numbers and comparison group)\nCONFIDENCE: High / Medium / Low, and why (sample size, confounders)\nLIKELY REASON: What probably caused it\nDECISION: What we'll do differently\nTEST: How the next campaign will confirm or disprove it",
      },
      { type: "heading", text: "Indian campaign specifics", id: "india" },
      {
        type: "list",
        items: [
          "Analyse by language and state, not just by creator. Regional results are often hidden inside national totals.",
          "For COD-heavy categories, analyse delivered orders, not placed orders.",
          "Separate marketplace sales from D2C site sales; creator impact may show up in marketplace search and sales your tracking can't attribute.",
          "Festival and sale periods distort comparisons; compare like with like.",
        ],
      },
      { type: "heading", text: "Worked example: a post-campaign analysis", id: "worked-example" },
      {
        type: "paragraph",
        text: "Hypothetical: a personal-care brand ran a 12-creator launch across Hindi, Marathi and Tamil creators on Instagram and YouTube. A totals-only report would say 'total views 18 lakh, 640 orders, CPA ₹1,400'. An analysis asks better questions:",
      },
      {
        type: "table",
        headers: ["Question", "Analysis", "Hypothetical finding", "Decision"],
        rows: [
          ["Which role worked?", "Cost metric by role", "Two reach creators delivered low CPM; converters drove most orders", "Keep both roles; don't judge reach creators on CPA"],
          ["Which segment worked?", "Cohort medians by language", "Tamil creators had the lowest median CPA", "Expand Tamil creators next launch"],
          ["Which content worked?", "Hook and demo tags vs results", "Posts showing the product in the first 3 seconds had higher click rates", "Brief: product early, no long setup"],
          ["Where did people drop off?", "Funnel by creator", "One creator: high clicks, few orders; landing page was in English only", "Fix landing page language, not the creator"],
          ["What did audiences ask?", "Comment themes", "Many questions about use during monsoon", "Add monsoon usage to brief and FAQ"],
        ],
      },
      {
        type: "paragraph",
        text: "The numbers are invented. The structure, five questions leading to five decisions, is what a useful analysis looks like.",
      },
      { type: "heading", text: "An analysis cadence", id: "cadence" },
      {
        type: "table",
        headers: ["When", "Analysis", "Purpose"],
        rows: [
          ["During the campaign (weekly)", "Early views, clicks, comment themes", "Fix briefs, links or landing pages while there's time"],
          ["30 days after the last post", "Full analysis and scorecards", "Rebooking and next-campaign decisions"],
          ["Quarterly", "Cohort baselines, content patterns across campaigns", "Budget allocation and creator mix"],
          ["Annually", "Market map, competitor review, programme results", "Strategy and planning"],
        ],
      },
      {
        type: "paragraph",
        text: "The live view during campaigns is covered in influencer marketing dashboard; the end-of-campaign document in influencer marketing report.",
        links: [
          { text: "influencer marketing dashboard", href: "/blog/influencer-marketing-dashboard" },
          { text: "influencer marketing report", href: "/blog/influencer-marketing-report" },
        ],
      },
      { type: "heading", text: "Presenting insights to leadership", id: "leadership" },
      {
        type: "list",
        items: [
          "Lead with the decision you recommend, then the evidence.",
          "Show comparisons (against baseline, cohort or target), not standalone totals.",
          "State confidence plainly: 'one campaign, five creators, medium confidence'.",
          "Separate creator performance from offer, landing page and timing effects.",
          "End with the test that will confirm or disprove the insight.",
        ],
      },
      { type: "heading", text: "A campaign learnings register", id: "learnings-register" },
      {
        type: "paragraph",
        text: "Insights only help if they reach the next campaign. A simple register, kept across campaigns, stops learnings from disappearing when people move on:",
      },
      {
        type: "template",
        label: "Learnings register fields",
        text: "Date · Campaign · Learning (one sentence) · Evidence (numbers, comparison group) · Confidence (high / medium / low) · Applies to (brief / creator selection / offer / process / platform) · Decision (keep / change / test) · Owner · Status · Confirmed in later campaign? (yes / no / contradicted)",
      },
      {
        type: "list",
        items: [
          "Write each learning as a sentence someone could act on: 'Hindi micro creators delivered lower cost per order than macro creators in two festive campaigns', not 'micro is good'.",
          "Upgrade confidence only when a later campaign confirms it.",
          "Mark contradicted learnings; they're as useful as confirmed ones.",
          "Review the register when writing every brief and shortlist.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer campaign post-mortem covers the review that produces these learnings, and influencer marketing testing covers confirming them deliberately.",
        links: [
          { text: "Influencer campaign post-mortem", href: "/blog/influencer-campaign-post-mortem" },
          { text: "influencer marketing testing", href: "/blog/influencer-marketing-testing" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Reporting totals instead of comparisons.",
          "Judging every creator on one metric regardless of role.",
          "Averages dragged by one viral post.",
          "Blaming creators for landing page or offer problems.",
          "Presenting low-confidence findings as conclusions.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Influencer data analytics is the step between a report and a better next campaign. Ask decision-shaped questions, compare cohorts with medians, analyse content and comments as well as numbers, diagnose the funnel before blaming creators, and state your confidence. For comparing creators across different campaigns fairly, see influencer performance data; for setting reference points, see influencer benchmarking.",
        links: [
          { text: "influencer performance data", href: "/blog/influencer-performance-data" },
          { text: "influencer benchmarking", href: "/blog/influencer-benchmarking" },
        ],
      },
    ],
    faqs: [
      {
        question: "How do brands turn influencer data into insights?",
        answer:
          "By asking decision-shaped questions and answering them with comparisons: cost efficiency by role, cohort medians, content and hook analysis, audience overlap, comment themes and funnel diagnosis, then stating confidence and the decision each insight leads to.",
      },
      {
        question: "What's the difference between influencer analytics and insights?",
        answer:
          "Analytics describes what happened (views, clicks, orders). Insights explain why it probably happened and what to change, with a stated level of confidence.",
      },
      {
        question: "Why should I use medians instead of averages for influencer data?",
        answer:
          "One viral post can inflate an average and make a cohort look better than it usually performs. Medians show typical performance.",
      },
    ],
  },
  {
    slug: "influencer-performance-data",
    category: "Campaign Strategy",
    title: "Influencer Performance Data: How to Compare Creators Across Campaigns",
    seoTitle: "Influencer Performance Data: Compare Creators Fairly",
    excerpt:
      "How to compare creators who worked on different campaigns, objectives, platforms and budgets: a normalisation method (rates, cost metrics, campaign indexes), a comparison sheet, worked example and what not to compare.",
    metaDescription:
      "How to compare influencer performance across campaigns: normalise for size, objective, format, platform and spend with rates, cost metrics and indexes.",
    author: AUTHOR,
    publishedAt: INTEL_PUBLISHED,
    lastReviewed: INTEL_REVIEWED,
    readingTime: "7 min read",
    tags: ["influencer performance data", "compare influencer performance", "creator performance comparison", "normalize influencer metrics", "influencer performance across campaigns"],
    related: ["influencer-benchmarking", "creator-performance-scorecard", "influencer-data-analytics"],
    hero: {
      src: "/blog/brand-guides/influencer-performance-data.svg",
      alt: "Raw creator results normalised by audience size, spend, format and campaign to give a fair comparison index",
    },
    body: [
      {
        type: "paragraph",
        text: "Creator A worked on your Diwali launch: one Reel, ₹1.5 lakh, 4 lakh views. Creator B worked on a quiet March campaign: a YouTube integration, ₹60,000, 70,000 views. Who performed better? On raw numbers, A. Per rupee, maybe B. For the objective each campaign had, possibly neither comparison is fair. Comparing creators across campaigns is one of the most common questions brands ask and one of the easiest to get wrong.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To compare creators across campaigns, convert raw results into rates and cost metrics (per view, per rupee, per follower where relevant), compare only within the same objective and format family, capture results on the same day after posting, and express each creator's result as an index against their campaign's median. A creator who delivered 1.4 times the median cost efficiency in their campaign can be compared with one who delivered 0.8 times in another. Always note the differences you couldn't adjust for: timing, offer, creative brief and platform changes.",
      },
      { type: "heading", text: "What makes campaigns hard to compare", id: "differences" },
      {
        type: "table",
        headers: ["Difference", "Why it distorts", "How to adjust"],
        rows: [
          ["Audience size", "Larger creators get more absolute views", "Use rates (views per follower, engagements per view) and cost metrics"],
          ["Campaign objective", "Awareness and sales briefs ask for different behaviour", "Compare on the metric matching each objective; don't cross-compare"],
          ["Content format", "Reels, Stories, long-form video and static posts behave differently", "Compare within format families"],
          ["Platform", "Instagram and YouTube count and distribute differently", "Compare within platform, or use cost per outcome"],
          ["Spend", "Higher fees should buy more", "Use cost metrics (CPM, CPE, CPA)"],
          ["Deliverables", "One Reel vs a Reel plus Stories plus a link", "Compare per deliverable, or total package cost per outcome"],
          ["Audience differences", "A Tamil Nadu audience for a national offer vs a regional one", "Note market fit; compare within market where possible"],
          ["Timing and offer", "Sale periods, festivals, discounts", "Note; compare against campaign median (index)"],
        ],
      },
      { type: "heading", text: "The normalisation method", id: "method" },
      {
        type: "template",
        label: "Three-step normalisation",
        text: "STEP 1: RATES\nViews ÷ followers (reach efficiency)\nQuality engagements (saves + shares + meaningful comments) ÷ views\nLink clicks ÷ views\nOrders ÷ clicks\n\nSTEP 2: COST METRICS (total cost, not just fee)\nCPM = cost ÷ views × 1,000\nCost per quality engagement\nCPC = cost ÷ link clicks\nCPA = cost ÷ orders or leads\n\nSTEP 3: CAMPAIGN INDEX\nFor the campaign's primary metric:\nCreator index = creator's result ÷ campaign median\n(for cost metrics, invert: campaign median ÷ creator's cost, so higher is better)\n1.0 = typical for that campaign; 1.5 = 50% better than typical",
      },
      {
        type: "paragraph",
        text: "The index is what makes cross-campaign comparison possible. It asks 'how did this creator do relative to the others who faced the same brief, offer and timing?' rather than comparing raw numbers from different conditions.",
      },
      { type: "heading", text: "Worked example (hypothetical)", id: "example" },
      {
        type: "table",
        headers: ["Creator", "Campaign", "Primary metric", "Creator result", "Campaign median", "Index"],
        rows: [
          ["A (macro, Reel)", "Diwali launch (awareness)", "CPM", "₹375", "₹520", "1.39"],
          ["B (micro, YouTube)", "March education (consideration)", "Cost per save + share", "₹48", "₹40", "0.83"],
          ["C (micro, Reel, Marathi)", "Diwali launch (awareness)", "CPM", "₹610", "₹520", "0.85"],
          ["D (micro, Reel, Hindi)", "Summer sale (sales)", "CPA", "₹1,100", "₹1,600", "1.45"],
        ],
      },
      {
        type: "paragraph",
        text: "For cost metrics, the index is campaign median ÷ creator cost (A: 520 ÷ 375 ≈ 1.39). The figures are invented for illustration. Read together: A and D outperformed their campaign peers; B and C underperformed theirs. That's a fairer basis for rebooking than raw views, though still not a verdict. B may have been briefed on a topic her audience cares less about, and C's Marathi audience may have been the right audience for a different offer.",
      },
      { type: "heading", text: "Capture rules that make comparison possible", id: "capture-rules" },
      {
        type: "list",
        items: [
          "Same capture days for every creator: 7 and 30 days after posting.",
          "Total cost includes product, shipping, rights and production, not just fee.",
          "Engagement defined once: which actions count, and divided by what.",
          "Views from creator insights, not third-party estimates.",
          "Clicks from your analytics via UTM, not platform 'taps'.",
          "Delivered orders, not placed orders, for COD-heavy categories.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer marketing data lists the full dataset and collection points. Reach vs impressions vs views explains why view counts aren't comparable across older and newer Instagram data.",
        links: [
          { text: "Influencer marketing data", href: "/blog/influencer-marketing-data" },
          { text: "Reach vs impressions vs views", href: "/blog/influencer-reach-vs-impressions" },
        ],
      },
      { type: "heading", text: "Comparing across platforms", id: "platforms" },
      {
        type: "paragraph",
        text: "Instagram and YouTube views aren't equivalent units: a view counts differently, attention differs, and long-form integrations last longer. Within-platform comparisons are more reliable. When you must compare across platforms, compare on outcomes both can produce (cost per click, cost per order or cost per qualified lead) and note the format difference beside the number.",
      },
      { type: "heading", text: "A comparison sheet", id: "sheet" },
      {
        type: "template",
        label: "Cross-campaign creator comparison sheet",
        text: "Creator | Platform | Format | Campaign | Objective | Market/language | Total cost | Capture day |\nViews | Views/follower | Quality engagements/view | CTR | Conv. rate |\nCPM | Cost/quality eng. | CPC | CPA |\nCampaign median (primary metric) | Index | Notes on differences not adjusted for",
      },
      { type: "heading", text: "What not to compare", id: "dont-compare" },
      {
        type: "list",
        items: [
          "A seeding post with a paid integration (different incentives and expectations).",
          "Organic posts with posts boosted by paid media, unless you separate organic and paid results.",
          "Results captured on different days.",
          "Creators on different objectives using one metric.",
          "This year's Instagram views with figures from before Instagram's switch to views reporting, without noting the change.",
        ],
      },
      { type: "heading", text: "Handling multi-deliverable packages", id: "packages" },
      {
        type: "paragraph",
        text: "Creators are often booked for a package: a Reel, three Stories and a link in bio. To compare at deliverable level, split the cost. Two common approaches:",
      },
      {
        type: "table",
        headers: ["Method", "How", "When to use"],
        rows: [
          ["Rate-card split", "Allocate cost using the creator's own quoted per-deliverable rates", "When the creator quoted individually"],
          ["Outcome split", "Compare the whole package cost with total outcomes", "When deliverables work together (Stories driving to the Reel's link)"],
        ],
      },
      {
        type: "paragraph",
        text: "Whichever you choose, use the same method for every creator in the comparison and note it on the sheet.",
      },
      { type: "heading", text: "Separate organic and paid results", id: "organic-vs-paid" },
      {
        type: "paragraph",
        text: "If a creator's post was boosted as a partnership ad, its views and clicks include paid distribution. Record organic and paid results separately where the platform allows, and compare creators on organic performance unless every post received the same paid support. Influencer marketing for performance marketing covers running creator content as ads.",
        links: [
          { text: "Influencer marketing for performance marketing", href: "/blog/influencer-performance-marketing" },
        ],
      },
      { type: "heading", text: "Small samples", id: "small-samples" },
      {
        type: "list",
        items: [
          "One post is weak evidence of a creator's typical performance. Two or three campaigns are much better.",
          "A campaign with four creators has a fragile median; one unusual result moves it a lot.",
          "Flag comparisons built on thin data rather than dropping them.",
          "Prefer ranges ('index between 1.1 and 1.4 across three campaigns') over single figures.",
        ],
      },
      { type: "heading", text: "Hypothetical example: same creator, two campaigns", id: "same-creator" },
      {
        type: "paragraph",
        text: "Hypothetical: a Gujarati food creator scores an index of 1.5 on a regional snack launch and 0.7 on a national health-drink campaign. Averaging gives 1.1, which hides the useful finding: she's excellent for regional food and weak for national wellness. Keep results by campaign type, not just a lifetime average, so the next booking matches what she's good at.",
      },
      {
        type: "paragraph",
        text: "Influencer data analytics covers cohort and content analysis built on these comparisons.",
        links: [
          { text: "Influencer data analytics", href: "/blog/influencer-data-analytics" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Ranking creators by raw views across campaigns of different sizes.",
          "Using fee instead of total cost.",
          "Treating a single campaign's index as a permanent rating.",
          "Ignoring market fit: a creator can underperform on a national brief and excel on a regional one.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Fair comparison across campaigns comes from rates, total-cost metrics and an index against each campaign's median, captured on the same days with the same definitions. It won't remove every difference, so note what you couldn't adjust for. To build a lasting record from these comparisons, use a creator performance scorecard, and for the reference points you compare against, see influencer benchmarking.",
        links: [
          { text: "creator performance scorecard", href: "/blog/creator-performance-scorecard" },
          { text: "influencer benchmarking", href: "/blog/influencer-benchmarking" },
        ],
      },
    ],
    faqs: [
      {
        question: "How do brands compare influencer performance across campaigns?",
        answer:
          "Convert results to rates and total-cost metrics, compare within the same objective and format, capture on the same days after posting, and index each creator against their campaign's median so different conditions are accounted for.",
      },
      {
        question: "Can you compare Instagram and YouTube influencer performance?",
        answer:
          "Views aren't equivalent across platforms. Compare within platform where possible; across platforms, use outcomes both can produce, such as cost per click or cost per order.",
      },
      {
        question: "What is a campaign index in influencer marketing?",
        answer:
          "A creator's result on the campaign's primary metric divided by the campaign median (inverted for cost metrics). It shows how a creator did relative to peers facing the same brief, offer and timing.",
      },
    ],
  },
  {
    slug: "influencer-benchmarking",
    category: "Campaign Strategy",
    title: "Influencer Benchmarking: How Brands Can Compare Creator Performance Fairly",
    seoTitle: "Influencer Benchmarking: Compare Creator Performance Fairly",
    excerpt:
      "Why one-number benchmarks like '3% engagement is good' mislead, the four kinds of benchmark worth using, how to build your own baselines by tier, format, language and objective, and how to read published benchmark reports.",
    metaDescription:
      "How to benchmark influencer performance fairly: why generic engagement benchmarks mislead, four benchmark types and how to build your own baselines.",
    author: AUTHOR,
    publishedAt: INTEL_PUBLISHED,
    lastReviewed: INTEL_REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer benchmarking", "influencer benchmarks", "creator performance benchmarks", "what is a good influencer engagement rate", "influencer baseline"],
    related: ["influencer-performance-data", "influencer-engagement-rate", "influencer-marketing-kpis"],
    hero: {
      src: "/blog/brand-guides/influencer-benchmarking.svg",
      alt: "Four kinds of influencer benchmark: own history, peer cohort, campaign median and category reports, compared in context",
    },
    body: [
      {
        type: "paragraph",
        text: "'What's a good engagement rate for an influencer?' is one of the most searched questions in influencer marketing, and most answers are a single number. The trouble is that published benchmark reports disagree with each other by several times, because they use different formulas (engagements divided by followers, reach or views), different samples, different platforms and different years. A benchmark is only useful if it's built the same way as the number you're comparing it with.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Fair influencer benchmarking compares a creator's result with a reference built from similar conditions: the same metric definition, platform, format, tier, language or market, objective and capture day. The most reliable benchmarks are your own: a creator's own recent history, a cohort of similar creators you've worked with, and the median of the campaign they were in. Published category benchmarks are useful for orientation only, after checking their formula and sample. There is no universal 'good' engagement rate.",
      },
      { type: "heading", text: "Why single-number benchmarks mislead", id: "why-mislead" },
      {
        type: "list",
        items: [
          "Formula: engagement ÷ followers and engagement ÷ views can differ several-fold for the same post.",
          "Tier: smaller accounts usually show higher engagement rates; comparing a nano creator with a macro benchmark flatters her.",
          "Format: Reels, carousels, Stories and long-form video have different interaction patterns.",
          "Platform: YouTube and Instagram count and distribute differently.",
          "Category: comedy and meme content draws likes; finance and skincare content draws saves and questions.",
          "Time: platform algorithm and reporting changes (such as Instagram's move to views) shift every baseline.",
          "Sponsored vs organic: sponsored posts typically perform differently from a creator's organic average.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer engagement rate explains the formula choices in detail. The point here is that a benchmark built one way can't judge a number built another way.",
        links: [{ text: "Influencer engagement rate", href: "/blog/influencer-engagement-rate" }],
      },
      { type: "heading", text: "Four kinds of benchmark", id: "four-kinds" },
      {
        type: "table",
        headers: ["Benchmark", "Compares a result with", "Best for", "Watch out for"],
        rows: [
          ["Creator's own history", "Their median over the last 10–15 comparable posts", "Did the sponsored post perform normally for this creator?", "Organic vs sponsored differences"],
          ["Peer cohort", "Median of similar creators (tier, platform, format, language, category)", "Vetting and shortlisting; fee negotiation", "Small cohorts; cohort built on estimates"],
          ["Campaign median", "Other creators in the same campaign", "Comparing creators who faced the same brief, offer and timing", "Few creators per campaign"],
          ["Published category reports", "Industry samples", "Orientation when you have no history", "Different formulas, samples, countries and years"],
        ],
      },
      { type: "heading", text: "Build your own baselines", id: "build-baselines" },
      {
        type: "template",
        label: "Baseline table (update each quarter)",
        text: "Segment: Platform × Format × Tier × Language/market × Objective\n\nFor each segment record (medians, not averages):\nViews per follower · Quality engagements per view · CTR · Conversion rate\nCPM · Cost per quality engagement · CPC · CPA\nNumber of posts in the segment · Date range\n\nOnly use a segment as a benchmark once it has enough posts to be meaningful; flag thin segments.",
      },
      {
        type: "paragraph",
        text: "After a few campaigns, this becomes the most valuable benchmark you have, because it's built from your products, offers and customers. Use it to set targets, judge new creators and negotiate fees. The per-campaign inputs come from influencer performance data.",
        links: [{ text: "influencer performance data", href: "/blog/influencer-performance-data" }],
      },
      { type: "heading", text: "Benchmarking a new creator before booking", id: "before-booking" },
      {
        type: "list",
        items: [
          "Calculate their median views and quality engagement per view over 10–15 recent posts in the format you're buying.",
          "Compare with their own sponsored posts: do sponsored posts hold up, or does the audience ignore them?",
          "Compare with your peer cohort for their tier, language and format.",
          "Compare their quoted fee with the cohort's typical CPM at their median views.",
          "Treat all of this as a starting point; the creator's fit and content quality still decide.",
        ],
      },
      { type: "heading", text: "How to read a published benchmark report", id: "reading-reports" },
      {
        type: "list",
        items: [
          "What's the formula? Engagement ÷ followers, reach or views?",
          "What's the sample? Countries, platforms, tiers, categories, number of accounts and posts.",
          "Organic or sponsored posts?",
          "Which period? Before or after major platform reporting changes?",
          "Median or average?",
          "Who published it, and do they sell something the benchmark supports?",
        ],
      },
      {
        type: "paragraph",
        text: "Indian creator data is often under-represented in global reports, and regional-language creators even more so. Use global numbers for direction, not for targets.",
      },
      { type: "heading", text: "Using benchmarks for targets", id: "targets" },
      {
        type: "paragraph",
        text: "Set campaign targets from your own baselines where you have them: for example, 'CPM at or below our Reels micro-creator median' or 'CPA within 20% of last festival campaign'. Where you don't, set a learning target instead of a performance one: test two or three segments and use the results to build the first baseline. Influencer marketing KPIs covers target setting by objective.",
        links: [{ text: "Influencer marketing KPIs", href: "/blog/influencer-marketing-kpis" }],
      },
      { type: "heading", text: "A hypothetical baseline table", id: "baseline-example" },
      {
        type: "paragraph",
        text: "After a few campaigns, a brand's baseline table might look like this. The figures are invented to show structure, not to serve as benchmarks:",
      },
      {
        type: "table",
        headers: ["Segment", "Posts", "Median views ÷ followers", "Median CPM", "Median CPA"],
        rows: [
          ["Instagram Reels · micro · Hindi · sales", "24", "0.42", "₹410", "₹1,350"],
          ["Instagram Reels · micro · Tamil · sales", "11", "0.55", "₹360", "₹1,120"],
          ["Instagram Reels · macro · English · awareness", "6", "0.18", "₹520", "n/a"],
          ["YouTube integration · micro · Hindi · consideration", "8", "0.30", "₹690", "₹1,600"],
        ],
      },
      {
        type: "paragraph",
        text: "Note the post counts. The macro row is thin; treat it as provisional. The Tamil row is promising but smaller than the Hindi one, which is a reason to test more, not to conclude.",
      },
      { type: "heading", text: "Benchmarking fees", id: "fees" },
      {
        type: "paragraph",
        text: "Benchmarks also help with negotiation. Divide a quoted fee by the creator's median views to get an expected CPM, then compare it with your segment baseline. A quote well above baseline isn't automatically wrong (strong engagement quality or usage rights can justify it), but it should come with a reason. Influencer CPM, CPE, CPC and CPA has the formulas, and how much to pay influencers covers pricing factors.",
        links: [
          { text: "Influencer CPM, CPE, CPC and CPA", href: "/blog/influencer-marketing-cpm-cpe-cpa" },
          { text: "how much to pay influencers", href: "/blog/how-much-to-pay-influencers" },
        ],
      },
      { type: "heading", text: "Benchmarks for regional creators", id: "regional" },
      {
        type: "list",
        items: [
          "Build separate baselines by language where you have enough posts; regional audiences often behave differently from national Hindi or English ones.",
          "Expect different view-to-follower ratios: tight regional communities can watch more of a creator's posts.",
          "Don't judge a regional creator against a national cohort when the campaign was regional.",
          "Where data is thin, use the creator's own history as the primary benchmark.",
        ],
      },
      { type: "heading", text: "When platforms change, rebase", id: "rebase" },
      {
        type: "paragraph",
        text: "Platform changes break old baselines. When Instagram moved to reporting views instead of impressions, earlier and later figures stopped being directly comparable. When a platform changes how it counts or distributes content, start a new baseline period and note the date in your table rather than mixing old and new data. Reach vs impressions vs views explains the Instagram change.",
        links: [
          { text: "Reach vs impressions vs views", href: "/blog/influencer-reach-vs-impressions" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Quoting one engagement-rate threshold for every creator.",
          "Comparing a nano creator's rate with a macro benchmark (or the reverse).",
          "Using a report's averages when your data uses medians.",
          "Benchmarking sponsored posts against organic averages without noting it.",
          "Rejecting regional creators because their numbers differ from national English-language benchmarks.",
        ],
      },
      {
        type: "paragraph",
        text: "If results fall below your baseline, influencer campaign underperformance covers diagnosing why.",
        links: [
          { text: "influencer campaign underperformance", href: "/blog/influencer-campaign-underperformance" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A fair benchmark is built like the number it judges: same metric, platform, format, tier, market, objective and capture day. Start with the creator's own history and your campaign medians, build segment baselines over time, and treat published reports as orientation. To turn benchmarks into consistent creator evaluations, use a creator performance scorecard.",
        links: [{ text: "creator performance scorecard", href: "/blog/creator-performance-scorecard" }],
      },
    ],
    faqs: [
      {
        question: "What is a good engagement rate for an influencer?",
        answer:
          "There's no universal number. It depends on the formula, platform, format, tier, category and whether the post is sponsored. Compare with the creator's own history and with similar creators measured the same way.",
      },
      {
        question: "What is influencer benchmarking?",
        answer:
          "Comparing a creator's results with a reference built under similar conditions, such as their own history, a peer cohort, the campaign median or, for orientation, published category data.",
      },
      {
        question: "Should brands use published influencer benchmark reports?",
        answer:
          "For orientation, after checking the formula, sample, period and whether figures are medians or averages. Your own baselines are more reliable for targets and decisions.",
      },
    ],
  },
];
