import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";

const GROWTH_PUBLISHED = "2026-10-08";
const GROWTH_REVIEWED = "October 2026";

/**
 * Creator programs, performance and commerce cluster (1330–1379). Of 50 topics, 47 were already owned by
 * existing pages (always-on, partnerships, ambassadors, launches, funnel stages, the AI cluster, tiers,
 * regional, e-commerce, D2C, apps, SaaS, employee and executive creators, operations). The three distinct
 * intents with no owner were performance-based deal structures, brand-run affiliate programs and
 * creator-led campaigns. See docs/growth-programs-1330-1379-audit.md.
 */
export const growthProgramPosts: BlogPost[] = [
  {
    slug: "performance-based-influencer-marketing",
    category: "Campaign Strategy",
    title: "Performance-Based Influencer Marketing: How to Structure Creator Deals Around Results",
    seoTitle: "Performance-Based Influencer Deals: Models, Tracking, Risks",
    excerpt:
      "How to pay creators partly or fully for results: the deal models from bonus to commission-only, when paying for performance works and when it doesn't, how to define a conversion, set rates from your margins, track fairly and avoid the usual disputes.",
    metaDescription:
      "Performance-based influencer deals: hybrid, bonus and commission models, when they work, defining conversions, setting rates from margins, tracking and risks.",
    author: AUTHOR,
    publishedAt: GROWTH_PUBLISHED,
    lastReviewed: GROWTH_REVIEWED,
    readingTime: "10 min read",
    tags: [
      "performance-based influencer marketing",
      "performance-based influencer deals",
      "pay influencers per sale",
      "hybrid influencer payment",
      "influencer commission structure",
      "influencer CPA deals",
    ],
    related: ["influencer-affiliate-program", "how-much-to-pay-influencers", "influencer-marketing-sales"],
    hero: {
      src: "/blog/brand-guides/performance-based-influencer-marketing.svg",
      alt: "Influencer payment models from flat fee to fee plus bonus, hybrid base plus commission and commission-only, with brand risk falling and creator risk rising",
    },
    body: [
      {
        type: "paragraph",
        text: "\"We'll pay for results\" sounds like the safest way to buy creator content. Sometimes it is. Often it turns into a fee nobody accepts, a creator who posts once and disappears, or a dispute about whether a sale counted. Paying for performance works when the result is trackable, close to the content and largely within the creator's influence. This guide is about structuring those deals; running creator content as paid ads is a different topic, covered in influencer marketing for performance marketing.",
        links: [{ text: "influencer marketing for performance marketing", href: "/blog/influencer-performance-marketing" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Performance-based influencer marketing ties some or all of a creator's pay to measurable results such as sales, sign-ups, installs or qualified leads. The common structures are a flat fee with a performance bonus, a hybrid of a lower base fee plus commission, commission-only affiliate terms, and fixed payments per action. It suits trackable conversion goals with healthy margins; it suits awareness, long B2B cycles and marketplace-heavy sales poorly. Define exactly what counts as a conversion, the attribution window and the data source in writing, set rates from what an outcome is worth to you, and pay a fair base for the creator's work when you need guaranteed deliverables.",
      },
      { type: "heading", text: "The deal models", id: "models" },
      {
        type: "table",
        headers: ["Model", "How it works", "Suits", "Watch for"],
        rows: [
          ["Flat fee", "Fixed fee for agreed deliverables", "Awareness, content, launches; any creator", "Paying the same for posts that underperform"],
          ["Flat fee plus bonus", "Fixed fee, plus a bonus if a threshold is hit", "Established creators on sales or lead goals", "Thresholds set without data become arbitrary"],
          ["Hybrid", "Lower base fee plus commission per conversion", "Testing sales impact while respecting creators' time", "Creators may compare the base with their usual fee"],
          ["Pay per action", "Fixed amount per sale, install, sign-up or qualified lead", "App installs, lead generation, subscriptions", "Definitions of a valid action; fraud"],
          ["Commission-only (affiliate)", "Percentage or fixed commission on tracked sales, no fee", "Always-on programs with many creators", "Few established creators accept it for planned deliverables"],
          ["Tiered commission", "Rate rises with volume", "Rewarding top affiliates", "Complexity in reporting and payouts"],
        ],
      },
      {
        type: "paragraph",
        text: "These sit alongside the other payment models in how much to pay influencers, and running commission-only creators as an ongoing program is covered in influencer affiliate programs.",
        links: [
          { text: "how much to pay influencers", href: "/blog/how-much-to-pay-influencers" },
          { text: "influencer affiliate programs", href: "/blog/influencer-affiliate-program" },
        ],
      },
      { type: "heading", text: "When paying for performance works, and when it doesn't", id: "when" },
      {
        type: "table",
        headers: ["Works when", "Struggles when"],
        rows: [
          ["The action happens soon after viewing and can be tracked (an order, install or sign-up)", "The goal is awareness, recall or consideration"],
          ["Margins leave room to pay per outcome", "Sales cycles are long, as in most B2B, and leads convert months later"],
          ["The audience has buying intent in your category", "Most sales happen on marketplaces or offline where links and codes don't follow"],
          ["Your site, offer and stock are ready, so the creator isn't paid less for problems they can't fix", "Price, stock or checkout issues are likely to suppress conversions"],
          ["You have past data to set realistic rates", "It's a first test with no baseline"],
        ],
      },
      {
        type: "paragraph",
        text: "Pure commission shifts the risk onto the creator for things they don't control: your price, your landing page, your stock, your delivery promise. That's why experienced creators often decline commission-only terms for planned deliverables or price them higher. A fair structure pays for the work and shares the upside.",
      },
      { type: "heading", text: "Define the conversion before anything else", id: "definitions" },
      {
        type: "table",
        headers: ["Decision", "Options", "Why it matters"],
        rows: [
          ["What counts", "Order placed, order delivered, first order only, any order", "Cash-on-delivery refusals and returns change the number"],
          ["Customer type", "New customers only, or all", "Existing customers using a creator's code aren't new demand"],
          ["App actions", "Install, registration, first transaction", "Installs without activation are cheap to generate and worth little"],
          ["Leads", "Form fill, or qualified lead by agreed criteria", "Unqualified leads inflate payouts"],
          ["Attribution", "Code, link, platform tool, or a combination; window in days", "Decides who gets credit and for how long"],
          ["Data source", "Brand's store, affiliate platform, app attribution tool", "Both sides need to trust the same number"],
          ["Adjustments", "Returns, cancellations, fraud exclusions", "Clawbacks must be agreed upfront, not applied after"],
        ],
      },
      { type: "heading", text: "Setting rates from what an outcome is worth", id: "rates" },
      {
        type: "paragraph",
        text: "Work backwards from your economics, not from what another brand pays. Hypothetical example: average order value ₹1,200, contribution margin after product, shipping and returns ₹480 per order. The brand decides it can spend up to ₹300 to acquire a new customer given expected repeat purchases. It offers a ₹10,000 base fee for one Reel and Stories, plus ₹150 per delivered first order. If the creator drives 60 new customers, total cost is ₹19,000, or about ₹317 per customer, close to the target; at 120 it's about ₹233, comfortably inside it. The base guarantees the content; the commission rewards results the creator actually drives.",
      },
      {
        type: "paragraph",
        text: "All figures are illustrative. How much a customer is worth over time, and how to forecast outcomes before committing, is covered in influencer marketing ROI forecasting and influencer CPM, CPE, CPC and CPA.",
        links: [
          { text: "influencer marketing ROI forecasting", href: "/blog/influencer-marketing-roi-forecasting" },
          { text: "influencer CPM, CPE, CPC and CPA", href: "/blog/influencer-marketing-cpm-cpe-cpa" },
        ],
      },
      { type: "heading", text: "Tracking and reporting fairly", id: "tracking" },
      {
        type: "list",
        items: [
          "Give each creator a unique link with UTM parameters and a unique code, so buyers who don't click are still counted",
          "For apps, use the attribution tool you already rely on for other channels, with creator-specific links",
          "Agree the reporting cadence and give creators read access to their own numbers where you can",
          "Report delivered orders and returns separately so adjustments don't come as a surprise",
          "Track marketplace and quick-commerce sales separately; codes and links often don't follow buyers there",
        ],
      },
      {
        type: "paragraph",
        text: "Tracked results usually undercount creator impact, because some buyers search for the brand later or buy on a marketplace. Treat tracked conversions as a floor, and look at branded search and overall sales during the campaign as well; how to measure influencer marketing ROI covers incrementality.",
        links: [{ text: "how to measure influencer marketing ROI", href: "/blog/measuring-influencer-campaign-roi" }],
      },
      { type: "heading", text: "Risks to plan for", id: "risks" },
      {
        type: "list",
        items: [
          "Code leakage to coupon and cashback sites, earning commission on sales the creator didn't drive",
          "Self-purchases or fake orders to trigger payouts",
          "Paying commission on existing customers who would have bought anyway",
          "Pressure to oversell: commission-driven content is more likely to exaggerate claims, which brands remain responsible for",
          "Disclosure slipping because creators treat affiliate posts as 'not sponsored'; affiliate links are a material connection",
          "Disputes about attribution windows and returns, when terms were vague",
        ],
      },
      {
        type: "paragraph",
        text: "Claims and disclosure rules apply to performance deals exactly as they do to flat-fee posts; see influencer marketing compliance.",
        links: [{ text: "influencer marketing compliance", href: "/blog/influencer-marketing-compliance" }],
      },
      { type: "heading", text: "What to put in the agreement", id: "agreement" },
      {
        type: "list",
        items: [
          "Base fee and deliverables, if any, separate from performance terms",
          "Conversion definition, customer type and attribution method and window",
          "The data source both sides accept, and how the creator can see it",
          "Rate, any tiers or caps, and how returns, cancellations and fraud are handled",
          "Payout timing (for example monthly after the return window) and tax treatment",
          "Disclosure requirements and approved claims",
          "How long the code or link stays active, and what happens after the campaign",
        ],
      },
      {
        type: "paragraph",
        text: "Tax deductions on creator payments and invoicing are covered in the influencer payment process, and negotiating performance terms fairly in negotiate influencer rates.",
        links: [
          { text: "influencer payment process", href: "/blog/influencer-marketing-payments" },
          { text: "negotiate influencer rates", href: "/blog/negotiate-influencer-rates" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Offering commission-only terms to creators whose value is content and credibility",
          "Using performance pay for awareness or long-cycle B2B goals",
          "Vague conversion definitions that lead to disputes",
          "Setting rates without knowing your own margins and acceptable acquisition cost",
          "Counting all code uses as new demand",
          "No plan for returns, cancellations and code leakage",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Performance-based deals work best as a shared bet: the creator is paid fairly for the work and shares in results they genuinely influence, measured on terms both sides agreed before posting. Use them where outcomes are trackable and margins allow, keep flat fees where the job is reach, content or credibility, and write the definitions down.",
      },
    ],
    faqs: [
      {
        question: "What is performance-based influencer marketing?",
        answer:
          "Paying creators partly or fully for measurable results, such as sales, installs, sign-ups or qualified leads, through bonuses, hybrid base-plus-commission deals, pay-per-action fees or commission-only affiliate terms.",
      },
      {
        question: "Should brands only pay influencers for performance?",
        answer:
          "Rarely. Commission-only shifts risk onto creators for things they don't control, so many decline it for planned deliverables. A base fee plus a performance component usually works better when you need guaranteed content and results.",
      },
      {
        question: "How do you set an influencer commission rate?",
        answer:
          "Work back from your contribution margin and the acquisition cost you can afford for a new customer, decide how much to pay as a base for guaranteed work, and set the commission so total cost per customer stays within target at realistic volumes.",
      },
      {
        question: "What counts as a conversion in an influencer deal?",
        answer:
          "Whatever the agreement defines: for example delivered first orders, activated app users or qualified leads, tracked through an agreed code, link or tool within an agreed window, with returns and fraud excluded.",
      },
    ],
  },
  {
    slug: "influencer-affiliate-program",
    category: "Campaign Strategy",
    title: "Influencer Affiliate Programs: How Brands Can Build a Creator-Led Sales Channel",
    seoTitle: "Influencer Affiliate Program: How to Build and Scale One",
    excerpt:
      "How to run a commission-based creator program as an ongoing sales channel: commission structures, tracking, recruiting and activating creators, tiers, payouts, fraud, what to measure, and how affiliates graduate into paid partnerships.",
    metaDescription:
      "Build an influencer affiliate program: commission structure, tracking, recruiting and activating creators, tiers, payouts, fraud controls and what to measure.",
    author: AUTHOR,
    publishedAt: GROWTH_PUBLISHED,
    lastReviewed: GROWTH_REVIEWED,
    readingTime: "10 min read",
    tags: [
      "influencer affiliate program",
      "creator affiliate program",
      "influencer affiliate marketing",
      "affiliate program for brands India",
      "creator commission program",
    ],
    related: ["performance-based-influencer-marketing", "influencer-marketing-vs-affiliate-marketing", "instagram-influencer-affiliate-marketing"],
    hero: {
      src: "/blog/brand-guides/influencer-affiliate-program.svg",
      alt: "Influencer affiliate program flow: recruit creators, activate them with product and briefs, track sales, pay commission and promote top affiliates into paid partnerships",
    },
    body: [
      {
        type: "paragraph",
        text: "A one-off affiliate campaign is a test. An affiliate program is a sales channel: a standing offer that any suitable creator can join, with commission on the sales they drive, run month after month. Most brands that launch one discover the same thing quickly: signing creators up is easy, getting them to post consistently is the real work.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "An influencer affiliate program pays creators commission on sales tracked through their unique links or codes, as an always-on channel rather than a single campaign. To build one: set a commission structure your margins can sustain, choose tracking that works where your customers actually buy, write clear terms (disclosure, prohibited practices, returns, payout timing), recruit creators whose audiences already ask about your category, activate them with product and simple briefs, pay reliably, control fraud, and move your best affiliates into paid or hybrid partnerships.",
      },
      { type: "heading", text: "Affiliate program, campaign or performance deal?", id: "differences" },
      {
        type: "table",
        headers: ["", "Sponsored campaign", "Performance-based deal", "Affiliate program"],
        rows: [
          ["Who", "Chosen creators", "Chosen creators", "Any creator who qualifies and joins"],
          ["Pay", "Fee for deliverables", "Base plus bonus or commission, or per action", "Commission on tracked sales"],
          ["Deliverables", "Guaranteed", "Usually guaranteed", "Not guaranteed"],
          ["Duration", "Campaign window", "Campaign or a few months", "Ongoing"],
          ["Main work", "Briefing and approvals", "Defining terms and tracking", "Recruiting, activating and paying many creators"],
        ],
      },
      {
        type: "paragraph",
        text: "Individually negotiated results-based deals are covered in performance-based influencer marketing, and the broader choice between the channels in influencer marketing vs affiliate marketing.",
        links: [
          { text: "performance-based influencer marketing", href: "/blog/performance-based-influencer-marketing" },
          { text: "influencer marketing vs affiliate marketing", href: "/blog/influencer-marketing-vs-affiliate-marketing" },
        ],
      },
      { type: "heading", text: "The building blocks", id: "building-blocks" },
      {
        type: "table",
        headers: ["Element", "Decide"],
        rows: [
          ["Commission", "A percentage or fixed amount per order; whether it differs by product margin, new vs returning customer, or affiliate tier"],
          ["Attribution", "Links, codes or both; the attribution window; what happens when a buyer uses a different code"],
          ["Tracking", "Your store's discount and referral tools, an affiliate platform, or marketplace and platform affiliate programs where your products sell"],
          ["Terms", "Disclosure, approved claims, prohibited practices (coupon sites, paid search on your brand name, misleading claims), returns and clawbacks"],
          ["Payouts", "Minimum threshold, monthly timing after the return window, invoicing and tax deductions"],
          ["Creator kit", "Product information, approved claims, brand assets, content ideas, how to get product"],
          ["Ownership", "Who runs recruitment, support, reporting and payouts each month"],
        ],
      },
      {
        type: "paragraph",
        text: "Where your customers buy decides the tracking. Sales on your own site are easiest to attribute. For products sold on marketplaces or through platform shopping features, check which affiliate programs are available to creators in India; YouTube Shopping's affiliate program is one example, explained from the creator's side in YouTube Shopping for Indian creators. Instagram's affiliate features vary by market, so confirm availability before you plan around them; see Instagram influencer affiliate marketing.",
        links: [
          { text: "YouTube Shopping for Indian creators", href: "/blog/youtube-shopping-india-creators" },
          { text: "Instagram influencer affiliate marketing", href: "/blog/instagram-influencer-affiliate-marketing" },
        ],
      },
      { type: "heading", text: "Recruiting the right affiliates", id: "recruiting" },
      {
        type: "list",
        items: [
          "Customers who already create content about your product",
          "Creators from seeding and gifting who posted without being asked",
          "Creators from past paid campaigns who performed but weren't rebooked",
          "Niche creators whose audiences ask for recommendations in your category",
          "Inbound applications, screened like any other creator",
        ],
      },
      {
        type: "paragraph",
        text: "Screen affiliates for audience fit, authenticity and past disclosure, just as you would a paid creator, because their content carries your brand. A lighter version of how to vet influencers is usually enough at the entry tier.",
        links: [{ text: "how to vet influencers", href: "/blog/how-to-vet-influencers" }],
      },
      { type: "heading", text: "Activation is the real job", id: "activation" },
      {
        type: "paragraph",
        text: "In most affiliate programs, many members never post or post once. Commission alone rarely changes that. What does:",
      },
      {
        type: "list",
        items: [
          "Send product. Creators recommend what they've used",
          "Give a monthly theme or moment (a launch, a festival, a restock) with two or three content ideas",
          "Share what's working: formats and hooks from top affiliates, without asking anyone to copy",
          "Time-limited bonuses for activity in key periods, written into the terms",
          "Early access to launches for active affiliates",
          "A simple community channel for questions and announcements",
          "Fast, reliable payouts; late commission is the quickest way to lose good affiliates",
        ],
      },
      { type: "heading", text: "Tiers: from affiliate to partner", id: "tiers" },
      {
        type: "table",
        headers: ["Tier", "Who", "What they get"],
        rows: [
          ["Open", "Approved members", "Standard commission, creator kit, product on request"],
          ["Active", "Creators posting regularly with sales", "Higher commission, priority product, early access"],
          ["Partner", "Top performers with strong content", "Hybrid deals with a base fee, briefed campaigns, possibly retainers or ambassador roles"],
        ],
      },
      {
        type: "paragraph",
        text: "The affiliate program becomes a discovery engine for paid partnerships: the creators who sell for you without a fee are the ones most worth paying. Long-term structures are covered in long-term influencer partnerships and influencer ambassador programs.",
        links: [
          { text: "long-term influencer partnerships", href: "/blog/influencer-partnerships" },
          { text: "influencer ambassador programs", href: "/blog/brand-ambassador-program" },
        ],
      },
      { type: "heading", text: "Fraud and quality controls", id: "fraud" },
      {
        type: "list",
        items: [
          "Monitor coupon and cashback sites for leaked codes; deactivate and reissue",
          "Exclude self-purchases and flag unusual order patterns",
          "Prohibit paid search on your brand name unless agreed",
          "Hold commission until the return or cancellation window has closed",
          "Spot-check affiliate content for disclosure and accurate claims",
        ],
      },
      { type: "heading", text: "What to measure", id: "measurement" },
      {
        type: "table",
        headers: ["Metric", "Why"],
        rows: [
          ["Active affiliates (posted and sold this month)", "Shows whether the program is alive, not how many signed up"],
          ["Revenue and orders per active affiliate", "Concentration: usually a few drive most sales"],
          ["New-customer share", "Whether affiliates find new customers or reach existing ones"],
          ["Return and cancellation rate by affiliate", "Quality of the sales driven"],
          ["Contribution after commission", "Whether the channel makes money"],
          ["Content produced and reusable", "Affiliate content can feed product pages and ads, with rights agreed"],
        ],
      },
      {
        type: "paragraph",
        text: "If you want to reuse affiliate content in ads or on product pages, agree usage rights in the program terms; see influencer usage rights.",
        links: [{ text: "influencer usage rights", href: "/blog/influencer-usage-rights" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Measuring the program by sign-ups rather than active, selling affiliates",
          "Commission rates set without checking margins after returns",
          "No product for affiliates to actually use",
          "Late or unpredictable payouts",
          "Leaving disclosure to chance because affiliates 'aren't sponsored'",
          "Never promoting top affiliates into paid partnerships",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "An affiliate program is cheap to start and demanding to run. Commission that fits your margins, tracking that follows your customers, clear terms, real activation work and reliable payouts are what turn a list of sign-ups into a sales channel, and into a pipeline of creators worth paying properly.",
      },
    ],
    faqs: [
      {
        question: "What is an influencer affiliate program?",
        answer:
          "An ongoing program where creators earn commission on sales tracked through their unique links or codes. Unlike a sponsored campaign, deliverables aren't guaranteed; the brand's work is recruiting, activating, tracking and paying creators.",
      },
      {
        question: "How much commission should brands offer influencers?",
        answer:
          "There's no standard rate. Set it from your contribution margin after returns and the acquisition cost you can afford, and consider higher rates for new customers or top-tier affiliates.",
      },
      {
        question: "How do you get affiliates to actually post?",
        answer:
          "Send product, give monthly themes and content ideas, share what's working, offer time-limited bonuses and early access, keep a community channel and pay on time. Commission on its own rarely drives activity.",
      },
      {
        question: "Do affiliate creators need to disclose?",
        answer:
          "Yes. An affiliate commission is a material connection, so affiliate content needs clear disclosure like any sponsored post.",
      },
    ],
  },
  {
    slug: "creator-led-campaigns",
    category: "Campaign Strategy",
    title: "Creator-Led Campaigns: How Brands Can Build Campaigns Around Creator Storytelling",
    seoTitle: "Creator-Led Campaigns vs Traditional Influencer Campaigns",
    excerpt:
      "What changes when creators shape the idea rather than deliver a brand script: how creator-led campaigns differ from traditional influencer campaigns, when each fits, how to brief for ideas, the story formats that work, guardrails, measurement and the commercial terms involved.",
    metaDescription:
      "Creator-led campaigns vs traditional influencer campaigns: when to let creators lead, briefing for ideas, story formats, guardrails, measurement and terms.",
    author: AUTHOR,
    publishedAt: GROWTH_PUBLISHED,
    lastReviewed: GROWTH_REVIEWED,
    readingTime: "9 min read",
    tags: [
      "creator-led campaigns",
      "creator-led marketing",
      "creator storytelling brand campaign",
      "creator-led vs influencer campaign",
      "co-creation with creators",
    ],
    related: ["influencer-campaign-brief", "influencer-partnerships", "influencer-content-performance"],
    hero: {
      src: "/blog/brand-guides/creator-led-campaigns.svg",
      alt: "Traditional influencer campaign with a brand-written script compared with a creator-led campaign where creators pitch ideas within brand guardrails",
    },
    body: [
      {
        type: "paragraph",
        text: "In a traditional influencer campaign, the brand writes the idea and creators deliver it in their own voice. In a creator-led campaign, the brand defines the problem and the guardrails, and creators bring the idea. The second can produce content that feels native to each creator's audience; it can also produce content nobody approved of in spirit if the brief is vague. The difference is mostly in how you brief and what you review for.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator-led campaign gives creators responsibility for the concept, story and execution within clear guardrails: the objective, the audience, a few must-haves, approved claims and things to avoid. It works best when you want content that feels native to each creator's audience, cultural relevance or variety for testing. Brand-led campaigns remain better for precise product messages, regulated claims and tightly coordinated launches. Brief with a problem rather than a script, invite ideas, review for accuracy and fit rather than taste, and agree how ideas, rights and any development work are paid for.",
      },
      { type: "heading", text: "Creator-led vs traditional influencer campaigns", id: "comparison" },
      {
        type: "table",
        headers: ["", "Traditional (brand-led)", "Creator-led"],
        rows: [
          ["Idea comes from", "Brand or agency", "Creators, responding to a brief"],
          ["Brief", "Concept, key messages, often a script outline", "Objective, audience, insight, must-haves, no-gos"],
          ["Output", "Consistent across creators", "Varied: different stories from each creator"],
          ["Approval focus", "Matching the concept", "Accuracy, claims, disclosure and brand fit"],
          ["Strength", "Message control and consistency", "Native feel, audience relevance, more creative range to test"],
          ["Risk", "Content that feels like an ad on the creator's feed", "Ideas that miss the objective, or drift off-brand"],
        ],
      },
      { type: "heading", text: "When to let creators lead", id: "when" },
      {
        type: "table",
        headers: ["Creator-led fits", "Brand-led fits"],
        rows: [
          ["Brand building and cultural relevance", "Precise product information (specs, pricing, offers)"],
          ["Categories where audiences distrust scripted ads", "Health, nutrition, finance or other regulated claims"],
          ["Testing many angles for paid creative", "Launches with embargoes and a single coordinated message"],
          ["Long-term partners who know your brand", "First collaborations with unfamiliar creators"],
          ["Regional and language markets the brand team doesn't know well", "Campaigns needing identical assets across markets"],
        ],
      },
      {
        type: "paragraph",
        text: "Most programs mix both: a brand-led core message, with creator-led stories around it.",
      },
      { type: "heading", text: "Briefing for ideas, not scripts", id: "briefing" },
      {
        type: "list",
        items: [
          "The objective and the one thing the audience should think, feel or do",
          "Who the audience is, in the creator's terms rather than a persona deck",
          "An insight or tension worth building a story around",
          "Must-haves, kept short: product shown in use, disclosure, any mandatory claim or offer",
          "No-gos: claims you can't support, topics to avoid, competitor mentions",
          "What freedom the creator has: format, tone, story, language",
          "How ideas will be chosen and what happens if an idea isn't selected",
        ],
      },
      {
        type: "paragraph",
        text: "Asking for a short idea pitch before production saves both sides time. If you ask for detailed concepts from several creators, consider paying for that development work. The full briefing guide is influencer campaign brief.",
        links: [{ text: "influencer campaign brief", href: "/blog/influencer-campaign-brief" }],
      },
      { type: "heading", text: "Story formats that work", id: "formats" },
      {
        type: "list",
        items: [
          "The creator's own problem, and how the product fits into solving it",
          "Series: several episodes over weeks, such as a 30-day routine or a home project",
          "Behind the scenes: visiting the factory, farm or kitchen and asking real questions",
          "Day-in-the-life content where the product appears where it naturally would",
          "Creator collaborations: two creators with different audiences on one idea",
          "Local and language stories: a regional recipe, a city's commute, a festival ritual",
          "Co-created editions or products, for long-term partners",
        ],
      },
      {
        type: "paragraph",
        text: "Hypothetical example: a kitchenware brand asks home-cook creators in five states to show one family recipe that's hard to get right, and how the pan changes it. Each video looks different; together they say the same thing about the product in five regional contexts. Regional influencer marketing covers working across languages.",
        links: [{ text: "Regional influencer marketing", href: "/blog/regional-influencer-marketing-india" }],
      },
      { type: "heading", text: "Guardrails and approvals", id: "guardrails" },
      {
        type: "paragraph",
        text: "Creative freedom doesn't remove the brand's responsibility for claims and disclosure. Review creator-led content for accuracy, approved claims, disclosure and brand safety, and resist rewriting it to your taste; heavy edits turn a creator-led idea back into a brand ad. Influencer content approval and influencer marketing compliance cover the review process.",
        links: [
          { text: "Influencer content approval", href: "/blog/influencer-content-approval" },
          { text: "influencer marketing compliance", href: "/blog/influencer-marketing-compliance" },
        ],
      },
      { type: "heading", text: "Measuring creator-led work", id: "measurement" },
      {
        type: "list",
        items: [
          "Content performance against each creator's own baseline, not against other creators",
          "Saves, shares and comment quality as signs the story landed",
          "Sentiment and brand mentions in comments",
          "Which story angles perform, to inform the next brief and paid creative",
          "For awareness goals, recall and branded search; for sales, the same tracking as any campaign",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer content performance explains how to identify which stories worked and why.",
        links: [{ text: "Influencer content performance", href: "/blog/influencer-content-performance" }],
      },
      { type: "heading", text: "Commercial terms", id: "terms" },
      {
        type: "list",
        items: [
          "Who owns the concept and format if you want to reuse it with other creators",
          "Usage rights for the content, especially if creator-led pieces will become ads",
          "Payment for idea development or pitches that aren't produced",
          "Approval rights and revision limits suited to a creator's idea",
        ],
      },
      {
        type: "paragraph",
        text: "Ownership and licensing are covered in who owns influencer content and influencer usage rights.",
        links: [
          { text: "who owns influencer content", href: "/blog/influencer-content-ownership" },
          { text: "influencer usage rights", href: "/blog/influencer-usage-rights" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Calling it creator-led while sending a script",
          "A brief so open that ideas miss the objective",
          "Rewriting creators' ideas at approval",
          "Using creator-led formats for regulated or technical claims",
          "Comparing varied creative pieces as if they were the same ad",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Creator-led campaigns trade some message control for content audiences actually want to watch. They work when the brand is clear about the objective and the guardrails and genuinely open about everything else. Start with creators who know your brand, brief with a problem, review for accuracy rather than taste, and keep the stories that work.",
      },
    ],
    faqs: [
      {
        question: "What is a creator-led campaign?",
        answer:
          "A campaign where creators develop the concept, story and execution in response to a brand's objective and guardrails, rather than delivering a brand-written script.",
      },
      {
        question: "What is the difference between creator-led and traditional influencer campaigns?",
        answer:
          "In traditional campaigns the brand sets the idea and creators deliver it; in creator-led campaigns the brand sets the problem and limits, and creators bring the idea. Creator-led work varies more and feels more native; brand-led work gives more message control.",
      },
      {
        question: "When should brands avoid creator-led campaigns?",
        answer:
          "For precise product or offer information, regulated health, nutrition or finance claims, and tightly coordinated launches that need one consistent message.",
      },
      {
        question: "Should brands pay creators for campaign ideas?",
        answer:
          "If you ask several creators for developed concepts and only produce some, paying for that development work is fair and keeps good creators willing to pitch.",
      },
    ],
  },
];
