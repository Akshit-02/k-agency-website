import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";
import { SOURCES } from "@/content/creator-resources/shared";

/**
 * Founder questions, batch 10 (roadmap topics 181–200, governance, risk, technology and the future). Three genuinely
 * missing pages: auditing an influencer program before scaling (192), platform dependency risk (196) and reviewing
 * an agency's performance after hiring (198). The other topics update or are served by existing owners. See
 * docs/founder-questions-181-200-audit.md and the master inventory docs/founder-roadmap-200-inventory.csv.
 */
const PUBLISHED = "2026-10-15";
const REVIEWED = "October 2026";

const EXT = {
  youtubeEngagedViews: "https://blog.youtube/inside-youtube/engaged-views-youtube-explained/",
};

export const founderFinalPosts: BlogPost[] = [
  // Topic 192
  {
    slug: "influencer-marketing-audit",
    category: "Campaign Strategy",
    title: "How to Audit an Influencer Marketing Program Before You Scale It",
    seoTitle: "Influencer Marketing Audit: Check a Program Before Scaling",
    excerpt:
      "Before doubling an influencer budget, check that the results are real and the program can carry more weight. A seven-part audit covering objectives and results, measurement, creators, content and rights, contracts and payments, compliance, and operations, with a scoring sheet.",
    metaDescription:
      "Audit an influencer program before scaling: results, measurement, creators, content and rights, contracts and payments, compliance and operations, plus a scoring sheet.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer marketing audit", "audit influencer program", "influencer program review", "scale influencer marketing", "influencer compliance audit"],
    related: ["scale-pause-stop-influencer-campaigns", "influencer-marketing-governance", "influencer-campaign-risk-management"],
    hero: {
      src: "/blog/brand-guides/influencer-marketing-audit.svg",
      alt: "A seven-part influencer program audit: results, measurement, creators, content and rights, contracts, compliance and operations",
    },
    body: [
      {
        type: "paragraph",
        text: "A program that worked at a small budget can break when it grows. Tracking that was 'good enough' starts double counting, a few creators carry most of the results, rights paperwork falls behind, disclosure slips, and the team that coped with ten creators drowns at forty. An audit before scaling finds these problems while they're still cheap to fix.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Audit an influencer program in seven areas: whether results are real and measured consistently, how reliable tracking is, how dependent results are on a few creators, whether content and rights records are complete, whether contracts and payments are in order, whether disclosure and claims comply in every market, and whether operations can handle more volume. Score each area, fix anything rated weak before adding budget, and scale in steps with a comparison group.",
      },
      { type: "heading", text: "When to run an audit", id: "when" },
      {
        type: "list",
        items: [
          "Before a significant budget increase, a new market or a new platform.",
          "When results look much better or worse than other channels and nobody can say why.",
          "When responsibility moves: a new marketing lead, a new agency or bringing work in-house.",
          "Once a year for an always-on program, even when nothing seems wrong.",
        ],
      },
      { type: "heading", text: "The seven areas", id: "areas" },
      {
        type: "table",
        headers: ["Area", "What to check", "Warning signs"],
        rows: [
          ["1. Objectives and results", "Each campaign had a primary KPI and threshold set before launch; results compared with it", "Success defined after the fact; reports full of reach with no business result"],
          ["2. Measurement", "One naming convention for links and codes; orders deduplicated; delivered, net orders; a test or holdout for the channel", "Code, link and survey sales added together; no comparison group; placed orders counted"],
          ["3. Creators", "Share of results from the top few creators; audience location and quality checked; rebooking based on evidence", "Two creators drive most results; creators booked on follower count"],
          ["4. Content and rights", "Every reused asset has a rights record with channels, territory and expiry", "Ads running on expired licences; nobody can find raw footage"],
          ["5. Contracts and payments", "Signed agreements for every creator; payments on time; tax details collected", "Work started on email agreements; late creator payments"],
          ["6. Compliance", "Disclosure on every paid or gifted post; approved claims; licences where required (UAE permit, Saudi Mawthooq)", "Missing labels; creators making claims the brand can't support"],
          ["7. Operations", "Brief, approval and payment times; who owns what; capacity for more creators", "Approvals take weeks; one person holds everything in their head"],
        ],
      },
      {
        type: "paragraph",
        text: "Related guides: how to track influencer sales, influencer usage rights, influencer disclosure rules by platform and country, and influencer marketing operations.",
        links: [
          { text: "how to track influencer sales", href: "/blog/track-influencer-sales" },
          { text: "influencer usage rights", href: "/blog/influencer-usage-rights" },
          { text: "influencer disclosure rules by platform and country", href: "/blog/influencer-disclosure-rules-by-country" },
          { text: "influencer marketing operations", href: "/blog/influencer-marketing-operations" },
        ],
      },
      { type: "heading", text: "How to run it", id: "how-to-run" },
      {
        type: "list",
        items: [
          "Pull the last six to twelve months of campaigns: briefs, contracts, the creator list, posts, reports, rights records and payment dates.",
          "Sample rather than read everything: for example, ten creators and twenty posts chosen at random, plus the five biggest-spend creators.",
          "Check each sampled item against the checklist and note evidence, not impressions.",
          "Interview the people who run the program, including the agency if there is one, and a few creators.",
          "Score each area and agree fixes with owners and dates.",
        ],
      },
      { type: "heading", text: "A scoring sheet", id: "scoring" },
      {
        type: "template",
        label: "Influencer program audit",
        text: "Area | Score (strong / adequate / weak) | Evidence | Fix | Owner | Date\n1. Objectives and results |\n2. Measurement |\n3. Creators |\n4. Content and rights |\n5. Contracts and payments |\n6. Compliance |\n7. Operations |\n\nRule: any area scored weak is fixed before budget increases; compliance weaknesses are fixed immediately.",
      },
      { type: "heading", text: "Hypothetical example", id: "hypothetical-example" },
      {
        type: "paragraph",
        text: "Hypothetical. A D2C brand plans to triple creator spend after a strong quarter. The audit finds that results are reported from code and link reports added together (inflating orders), that three creators delivered most of the orders, and that six ads use creator content whose paid licences have expired. Compliance and operations score adequately. The brand pauses the six ads, renews or replaces the licences, deduplicates past results (which turn out lower but still above break-even), recruits more creators similar to the top three, and scales in two steps with a regional comparison group.",
      },
      { type: "heading", text: "After the audit", id: "after" },
      {
        type: "paragraph",
        text: "An audit tells you whether the program is ready; the scaling decision itself is covered in how to decide whether to scale, pause or stop an influencer campaign. Standing policies and approvals are in influencer marketing governance, and risk triggers in influencer campaign risk management.",
        links: [
          { text: "how to decide whether to scale, pause or stop an influencer campaign", href: "/blog/scale-pause-stop-influencer-campaigns" },
          { text: "influencer marketing governance", href: "/blog/influencer-marketing-governance" },
          { text: "influencer campaign risk management", href: "/blog/influencer-campaign-risk-management" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Auditing only the results, not how they were measured.",
          "Reading reports instead of checking source records.",
          "Treating compliance gaps as minor because results are good.",
          "Scaling in one jump after the audit, with no comparison group.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Scaling multiplies whatever is already in a program, including its weaknesses. Audit results, measurement, creators, rights, contracts, compliance and operations against evidence, fix what's weak, and then scale in steps.",
      },
    ],
    faqs: [
      {
        question: "What is an influencer marketing audit?",
        answer:
          "A structured review of an influencer program covering results, measurement, creators, content and rights, contracts and payments, compliance and operations, based on source records rather than reports, to decide whether it's ready to scale.",
      },
      {
        question: "How often should we audit our influencer program?",
        answer:
          "Before any major budget increase, new market or new platform, when responsibility changes hands, and at least once a year for an always-on program.",
      },
      {
        question: "Who should run the audit?",
        answer:
          "Someone not responsible for the day-to-day results, such as a marketing leader from another team, finance or an independent reviewer, with access to contracts, reports and payment records.",
      },
    ],
  },
  // Topic 196
  {
    slug: "influencer-platform-dependency-risk",
    category: "Campaign Strategy",
    title: "How to Plan for Platform Changes and Reduce Influencer Marketing Dependency Risk",
    seoTitle: "Platform Dependency Risk in Influencer Marketing",
    excerpt:
      "Platforms change rules, metrics and even availability with little notice. Real examples from recent years, the four kinds of platform risk, and practical ways to reduce dependence: spreading creators and platforms, owning the relationship and the data, licensing content broadly enough, and agreeing what happens when a platform changes mid-campaign.",
    metaDescription:
      "Reduce platform dependency risk in influencer marketing: real platform changes, four kinds of risk, diversification, owned audiences, content rights and contract clauses.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "6 min read",
    tags: ["platform dependency risk", "social media platform changes", "influencer marketing risk", "algorithm changes influencer", "diversify influencer platforms"],
    related: ["influencer-campaign-risk-management", "instagram-vs-youtube-vs-tiktok", "influencer-content-library"],
    hero: {
      src: "/blog/brand-guides/influencer-platform-dependency-risk.svg",
      alt: "Four kinds of platform risk and ways to reduce them: spread platforms, own the relationship, license broadly, plan contract clauses",
    },
    body: [
      {
        type: "paragraph",
        text: "Every creator campaign runs on someone else's platform. The platform decides who sees the content, how it's measured, which ad formats exist and, occasionally, whether it's available in a country at all. Brands that built their creator programs around a single platform have learned this the hard way. You can't prevent platform changes, but you can make sure one change doesn't stop your program.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Reduce platform dependency by keeping no single platform responsible for most of your creator results, building direct relationships with creators rather than relying on one platform's tools, licensing content for use across platforms and your own channels, turning creator audiences into your own (email, WhatsApp, customers) with consent, and writing platform-change clauses into contracts. Review exposure each quarter.",
      },
      { type: "heading", text: "Recent changes that show the risk", id: "examples" },
      {
        type: "table",
        headers: ["Change", "What it meant for brands"],
        rows: [
          ["TikTok blocked in India (2020)", "Creator programs built on TikTok had to move to other platforms; the block remains in place"],
          ["Instagram replaced impressions and plays with views (2025)", "Year-on-year reports needed relabelling; metrics weren't comparable"],
          ["YouTube counted views from the first frame (from 24 August 2026)", "View counts rose; engaged views became the comparable figure"],
          ["Australia's minimum age for social media accounts", "Youth-focused campaigns had to rethink audiences and platforms"],
          ["Recommendation and originality changes on Instagram", "Reposted or aggregated content became less likely to be recommended"],
        ],
      },
      {
        type: "paragraph",
        text: "Sources and detail: the government statement on TikTok in India, YouTube's explanation of engaged views, reach vs impressions vs views, Australia's under-16 social media rules for brands and Instagram algorithm changes.",
        links: [
          { text: "the government statement on TikTok in India", href: SOURCES.tiktokIndiaBlockStatus },
          { text: "YouTube's explanation of engaged views", href: EXT.youtubeEngagedViews },
          { text: "reach vs impressions vs views", href: "/blog/influencer-reach-vs-impressions" },
          { text: "Australia's under-16 social media rules for brands", href: "/blog/social-media-minimum-age-influencer-campaigns-australia" },
          { text: "Instagram algorithm changes", href: "/blog/instagram-algorithm-changes-what-still-works" },
        ],
      },
      { type: "heading", text: "Four kinds of platform risk", id: "risk-types" },
      {
        type: "table",
        headers: ["Risk", "Example", "Impact"],
        rows: [
          ["Availability", "A platform blocked or restricted in a market", "Campaigns and creators lost overnight"],
          ["Distribution", "Ranking or recommendation changes", "Reach falls for the same content and fees"],
          ["Measurement", "Metric definitions or API access change", "Reports stop being comparable; tools break"],
          ["Commercial tools", "Ad formats, creator marketplaces or shopping features change or launch only in some countries", "Paid plans and shoppable content need rework"],
        ],
      },
      { type: "heading", text: "Ways to reduce dependency", id: "reduce" },
      {
        type: "list",
        items: [
          "Spread results: track the share of creator results by platform, and set a ceiling (for example, no platform above a level you agree) for always-on programs.",
          "Own the relationship: keep creator contacts, contracts and performance history in your own CRM, not only inside a platform's tools.",
          "License for flexibility: secure rights to reuse creator content on other platforms and your own channels, so a platform change doesn't strand the content.",
          "Build owned audiences: convert creator interest into email, WhatsApp or customer relationships, with opt-in.",
          "Keep raw files: store raw footage and edits in your content library, not only as posts.",
          "Define metrics yourself: write KPI definitions that survive metric changes, and record which platform definition applied.",
          "Test a second platform before you need it, at small scale.",
        ],
      },
      {
        type: "paragraph",
        text: "Platform choice is compared in Instagram vs YouTube vs TikTok, storing content and rights in how to build an influencer content library, follow-up with consent in influencer retargeting, and creator records in the influencer marketing CRM guide.",
        links: [
          { text: "Instagram vs YouTube vs TikTok", href: "/blog/instagram-vs-youtube-vs-tiktok" },
          { text: "how to build an influencer content library", href: "/blog/influencer-content-library" },
          { text: "influencer retargeting", href: "/blog/influencer-retargeting" },
          { text: "the influencer marketing CRM guide", href: "/blog/influencer-marketing-crm" },
        ],
      },
      { type: "heading", text: "Contract clauses for platform changes", id: "contracts" },
      {
        type: "list",
        items: [
          "If a platform becomes unavailable, restricted or changes a format before posting, the parties agree an equivalent deliverable on another platform, or a proportionate refund.",
          "If metrics change, reporting uses the closest equivalent metric and states the change.",
          "If an ad permission tool changes, the creator agrees to grant equivalent permission through the replacement.",
          "Usage rights name the content, not just the platform post, so content can move with you.",
        ],
      },
      {
        type: "paragraph",
        text: "Contract basics are in influencer marketing contracts; this is general guidance, not legal advice.",
        links: [{ text: "influencer marketing contracts", href: "/blog/influencer-marketing-contract" }],
      },
      { type: "heading", text: "A quarterly exposure check", id: "quarterly-check" },
      {
        type: "table",
        headers: ["Question", "Healthy answer"],
        rows: [
          ["What share of creator results came from one platform?", "Below the ceiling you set"],
          ["Could we run next month's campaign if our main platform changed tomorrow?", "Yes, with creators and rights already in place elsewhere"],
          ["Do we hold creator contacts and content outside the platforms?", "Yes, in our CRM and content library"],
          ["Are our KPI definitions documented, with the platform definition recorded?", "Yes"],
          ["What share of customers from creators are now reachable directly?", "Rising, through opted-in channels"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Building an entire program on one platform because it works today.",
          "Licensing content for one platform only.",
          "Keeping creator relationships only in a platform's messaging or marketplace.",
          "Comparing metrics across a platform's definition change without noting it.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Platform changes are routine, and some are sudden. Spread results across platforms, own the creator relationships and content rights, build opted-in audiences, put platform-change clauses in contracts, and check exposure every quarter.",
      },
    ],
    faqs: [
      {
        question: "What is platform dependency risk in influencer marketing?",
        answer:
          "It's the risk that a single platform's change in availability, distribution, metrics or ad tools disrupts a creator program that relies heavily on it.",
      },
      {
        question: "How can brands reduce dependence on one social platform?",
        answer:
          "Spread creator activity across platforms, keep creator relationships and content in your own systems, license content for use beyond one platform, build opted-in owned audiences, and add platform-change clauses to contracts.",
      },
      {
        question: "What should a contract say if a platform changes mid-campaign?",
        answer:
          "That the parties agree an equivalent deliverable on another platform or a proportionate refund, that reporting uses the closest equivalent metric, and that usage rights cover the content itself rather than only the original post.",
      },
    ],
  },
  // Topic 198
  {
    slug: "influencer-agency-performance-review",
    category: "Influencer Marketing",
    title: "How to Evaluate Your Influencer Marketing Agency's Performance Beyond Vanity Metrics",
    seoTitle: "How to Evaluate Influencer Agency Performance",
    excerpt:
      "Once an agency is hired, judging it on reach and post counts says little. A scorecard for business results, measurement quality, creator quality, operations, compliance and strategic value, how to run a quarterly review, and when to fix the relationship or move on.",
    metaDescription:
      "Evaluate an influencer marketing agency after hiring: a scorecard for results, measurement, creators, operations, compliance and strategy, plus a quarterly review agenda.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "6 min read",
    tags: ["evaluate influencer agency", "influencer agency performance", "agency scorecard", "influencer agency review", "agency KPIs"],
    related: ["influencer-marketing-agency-checklist", "influencer-marketing-report", "influencer-marketing-agency-vs-in-house"],
    hero: {
      src: "/blog/brand-guides/influencer-agency-performance-review.svg",
      alt: "An agency scorecard: business results, measurement quality, creators, operations, compliance and strategic value",
    },
    body: [
      {
        type: "paragraph",
        text: "Agency reports often look impressive: millions of views, dozens of posts, glowing engagement. None of that tells you whether the agency is good at the job you hired it for. A fair review looks at what the agency controls, judges results against what was agreed, and checks how the work was done, not only what was reported.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Evaluate an influencer agency on six things: business results against the KPIs and thresholds agreed in advance, the quality and honesty of measurement, the quality of creators it brings, operational reliability (timelines, approvals, payments), compliance (disclosure, claims, rights), and strategic value (learning and recommendations). Review quarterly with a written scorecard, separate what the agency controls from what it doesn't, and agree fixes before deciding to change agencies.",
      },
      { type: "heading", text: "Vanity metrics vs useful measures", id: "vanity-vs-useful" },
      {
        type: "table",
        headers: ["Vanity measure", "Better question"],
        rows: [
          ["Total reach or views", "Reach in our target market and audience, at what cost per thousand?"],
          ["Number of posts or creators", "Did the creators fit, and did they deliver against the brief?"],
          ["Average engagement rate", "Did engagement lead to the outcome we agreed: clicks, orders, leads?"],
          ["'Earned media value'", "What did we actually gain, measured the way finance would accept?"],
          ["Positive comments", "What did we learn about our customers and product?"],
        ],
      },
      { type: "heading", text: "An agency scorecard", id: "scorecard" },
      {
        type: "table",
        headers: ["Area", "What good looks like", "Evidence to ask for"],
        rows: [
          ["Business results", "Results against the primary KPI and threshold set before each campaign", "Creator-level results, deduplicated, with the agreed definitions"],
          ["Measurement quality", "Honest labelling of measured vs estimated results; tracking set up before launch", "Link and code setup, reporting method, any tests or holdouts"],
          ["Creator quality", "Creators chosen on audience fit and quality, with clear reasons", "Shortlist rationale, audience data, rebooking decisions"],
          ["Operations", "Briefs, approvals and payments on time; few surprises", "Timeline adherence, approval turnaround, creator payment dates"],
          ["Compliance", "Disclosure on every post; claims approved; rights recorded; licences checked where required", "Post checks, rights register, licence records"],
          ["Strategic value", "Clear learnings and recommendations that change the next campaign", "Post-mortems, test results, decision log"],
        ],
      },
      {
        type: "paragraph",
        text: "Score each area as strong, adequate or weak, with the evidence. Results matter most, but an agency with good results and weak compliance or measurement is a risk you're carrying.",
      },
      { type: "heading", text: "Separate what the agency controls", id: "controllables" },
      {
        type: "table",
        headers: ["Mostly agency-controlled", "Mostly brand-controlled", "Shared"],
        rows: [
          ["Creator selection, briefs, timelines, compliance checks, reporting quality", "Product, price, offer, stock, landing pages, approval speed on the brand side", "Objectives, budget, creative direction, measurement setup"],
        ],
      },
      {
        type: "paragraph",
        text: "Weak results caused by a slow brand approval process or an out-of-stock product aren't an agency failure. Agree in advance who owns what, and review against that.",
      },
      { type: "heading", text: "A quarterly review agenda", id: "quarterly-review" },
      {
        type: "list",
        items: [
          "Results against plan, by campaign and creator, with measured and estimated results labelled.",
          "What worked, what didn't, and why, in the agency's words and yours.",
          "Scorecard, area by area, with evidence.",
          "Issues on both sides: brand delays, agency misses, creator problems.",
          "Next quarter: objectives, tests, budget and any changes to scope or team.",
          "Agreed actions with owners and dates, reviewed at the start of the next meeting.",
        ],
      },
      {
        type: "paragraph",
        text: "What a good report contains is covered in how to create an influencer marketing report, and the decision log in scale, pause or stop.",
        links: [
          { text: "how to create an influencer marketing report", href: "/blog/influencer-marketing-report" },
          { text: "scale, pause or stop", href: "/blog/scale-pause-stop-influencer-campaigns#report-to-decisions" },
        ],
      },
      { type: "heading", text: "Fix, re-scope or change agencies?", id: "fix-or-change" },
      {
        type: "table",
        headers: ["Situation", "Usually"],
        rows: [
          ["Results below plan, but measurement honest and causes understood", "Fix together: adjust creators, briefs or offers for a defined period"],
          ["Good operations, weak strategy", "Re-scope: keep execution, add strategic support elsewhere or in-house"],
          ["Repeated compliance failures or misleading reporting", "Change: trust and risk outweigh results"],
          ["Needs have outgrown the agency (new markets, scale, in-house team)", "Re-scope or move work in-house; see agency vs in-house"],
        ],
      },
      {
        type: "paragraph",
        text: "If you're choosing a new agency, the agency checklist covers what to verify before signing, and influencer marketing agency vs in-house compares the models.",
        links: [
          { text: "the agency checklist", href: "/blog/influencer-marketing-agency-checklist" },
          { text: "influencer marketing agency vs in-house", href: "/blog/influencer-marketing-agency-vs-in-house" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Judging the agency on reach and post counts.",
          "Changing KPIs after results arrive.",
          "Blaming the agency for brand-side problems.",
          "Ignoring compliance because results look good.",
          "Reviewing only when something goes wrong.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Judge an influencer agency on agreed results, honest measurement, creator quality, reliable operations, compliance and the learning it brings, not on vanity totals. Use a written scorecard, separate what each side controls, review every quarter, and fix problems together before deciding to move on.",
      },
    ],
    faqs: [
      {
        question: "How do I measure my influencer agency's performance?",
        answer:
          "Use a scorecard covering results against agreed KPIs, measurement quality, creator quality, operations, compliance and strategic value, with evidence for each, reviewed every quarter.",
      },
      {
        question: "What are vanity metrics in influencer marketing?",
        answer:
          "Numbers that look impressive but don't show business impact on their own, such as total reach, post counts, average engagement rate or 'earned media value'. Useful only as context for the outcome you agreed.",
      },
      {
        question: "When should we change influencer agencies?",
        answer:
          "After repeated compliance failures or misleading reporting, or when your needs have clearly outgrown what the agency does. For weak results with honest measurement, agree fixes for a defined period first.",
      },
    ],
  },
];
