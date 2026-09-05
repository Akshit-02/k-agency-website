export type InlineLink = { text: string; href: string };

export type BlogBlock =
  | { type: "paragraph"; text: string; links?: InlineLink[] }
  | { type: "heading"; text: string; id: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; attribution?: string };

export type BlogCategory =
  | "Influencer Marketing"
  | "Creator Economy"
  | "Social Media Trends"
  | "Brand Marketing"
  | "Instagram Marketing"
  | "Campaign Strategy";

export type BlogPost = {
  slug: string;
  category: BlogCategory;
  title: string;
  excerpt: string;
  author: { name: string; role: string };
  publishedAt: string;
  /** Only set this when the article's content is genuinely revised — never bump it automatically. */
  updatedAt?: string;
  readingTime: string;
  featured?: boolean;
  body: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-influencer-marketing",
    category: "Influencer Marketing",
    title: "What Is Influencer Marketing? A Complete Guide for Brands",
    excerpt:
      "A clear, no-fluff definition of influencer marketing — how it works, the main campaign types, micro vs. macro creators, what it costs, and how brands typically get started.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-08-25",
    readingTime: "9 min read",
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "Influencer marketing is a form of marketing in which brands partner with creators who have built trust with a specific audience, paying them to create and share content that promotes a product or service. Instead of buying ad space, brands are borrowing a creator's credibility with people who already pay attention to them.",
      },
      { type: "heading", text: "How does influencer marketing work?", id: "how-it-works" },
      {
        type: "paragraph",
        text: "A typical campaign starts with a business objective — awareness, engagement, traffic, or sales — then works backward: which platform and content format reach that audience, which creators already have that audience's attention, and what a fair rate and deliverable look like for the scope of work.",
        links: [{ text: "which platform and content format reach that audience", href: "/services/campaign-strategy" }],
      },
      { type: "heading", text: "Types of influencer marketing campaigns", id: "campaign-types" },
      {
        type: "list",
        items: [
          "Sponsored posts — a single paid post or story on a creator's own channel",
          "Product seeding and gifting — sending product in exchange for organic, unpaid coverage with no guaranteed post",
          "Brand ambassador programs — an ongoing, retained relationship over months or a year",
          "UGC production — commissioning creator-shot content for the brand's own paid and owned channels, not the creator's audience",
          "Affiliate and performance partnerships — compensation tied to trackable sales or sign-ups",
          "Product launch campaigns — sequenced teaser, seeding, and day-of content built around a release date",
        ],
      },
      { type: "heading", text: "Micro vs. macro influencers", id: "micro-vs-macro" },
      {
        type: "paragraph",
        text: "Follower count alone doesn't determine which tier is right for a campaign. Macro and celebrity creators, generally 500,000 or more followers, offer broad reach and brand awareness fast, but typically at lower engagement rates and higher cost per post. Micro and nano creators — under 100,000, often under 10,000 — tend to have smaller but more engaged, more trusting audiences, and are usually more cost-efficient for driving action rather than pure reach. Most effective campaigns mix tiers rather than picking one.",
      },
      { type: "heading", text: "How much does influencer marketing cost?", id: "cost" },
      {
        type: "paragraph",
        text: "Cost depends heavily on creator tier, deliverable count, and usage rights, and can range from a few hundred dollars for a single nano-creator post to six figures for a multi-creator, multi-platform program. We break down realistic budget ranges by campaign type in our influencer marketing cost guide.",
        links: [{ text: "influencer marketing cost guide", href: "/blog/how-much-does-influencer-marketing-cost" }],
      },
      { type: "heading", text: "How brands typically get started", id: "getting-started" },
      {
        type: "paragraph",
        text: "Most brands start with a single, well-scoped campaign tied to one clear objective rather than an open-ended retainer, which makes it easier to prove the channel works before committing a larger budget. Our influencer marketing services cover strategy, creator discovery, outreach, and reporting for brands doing this for the first time or the fiftieth.",
        links: [{ text: "influencer marketing services", href: "/services" }],
      },
      {
        type: "quote",
        text: "Influencer marketing works when it's treated as a media channel with its own strategy and measurement — not a stack of one-off favors from people with large followings.",
        attribution: "Kudozz Strategy Team",
      },
      { type: "heading", text: "Getting started with Kudozz", id: "getting-started-kudozz" },
      {
        type: "paragraph",
        text: "If you're evaluating influencer marketing for the first time, our team can walk through what a realistic first campaign looks like for your budget and category. Start a brand inquiry to talk to our strategy team.",
        links: [{ text: "Start a brand inquiry", href: "/for-brands#inquiry" }],
      },
    ],
  },
  {
    slug: "how-much-does-influencer-marketing-cost",
    category: "Campaign Strategy",
    title: "How Much Does Influencer Marketing Cost? A Practical Breakdown",
    excerpt:
      "Realistic budget ranges by creator tier and campaign type, plus the variables that move the number most — so you can plan a campaign budget with fewer surprises.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-08-29",
    readingTime: "6 min read",
    body: [
      {
        type: "paragraph",
        text: "There's no single price for influencer marketing — cost is driven by creator tier, number of creators, deliverable count, usage rights, and campaign duration. A single nano-creator post might cost $50 to $300, while a multi-creator ambassador program can run into six figures a year. The ranges below are directional starting points, not quotes.",
      },
      { type: "heading", text: "Cost by creator tier", id: "cost-by-tier" },
      {
        type: "list",
        items: [
          "Nano creators (1K–10K followers): roughly $50–$300 per post",
          "Micro creators (10K–100K followers): roughly $300–$2,000 per post",
          "Mid-tier creators (100K–500K followers): roughly $2,000–$10,000 per post",
          "Macro and celebrity creators (500K+ followers): $10,000 to six figures per post",
        ],
      },
      {
        type: "paragraph",
        text: "These are directional ranges, not quotes — actual rates vary by platform, content format, niche, and the usage rights negotiated into the deal.",
      },
      { type: "heading", text: "What else moves the price", id: "what-moves-price" },
      {
        type: "list",
        items: [
          "Usage rights — licensing content for paid ads or owned channels costs more than organic-only rights",
          "Exclusivity — asking a creator not to work with competing brands for a period",
          "Production complexity — a scripted, multi-scene video costs more than a single photo or story",
          "Number of revisions included in the agreed scope",
          "Whitelisting or paid amplification access to the creator's ad account",
        ],
      },
      { type: "heading", text: "Typical budgets by campaign type", id: "budgets-by-campaign-type" },
      {
        type: "paragraph",
        text: "A single-creator sponsored post can run a few hundred to a few thousand dollars. A multi-creator social media campaign with 5 to 15 creators typically starts in the low five figures. Product launch campaigns with seeding, embargo management, and day-of coordination usually run mid-five to low-six figures depending on scope. Brand ambassador programs are usually structured as retainers, billed quarterly or annually.",
        links: [
          { text: "multi-creator social media campaign", href: "/services/social-campaigns" },
          { text: "Product launch campaigns", href: "/services/product-launches" },
          { text: "Brand ambassador programs", href: "/services/ambassador-programs" },
        ],
      },
      { type: "heading", text: "Agency fees vs. creator fees", id: "agency-fees" },
      {
        type: "paragraph",
        text: "An agency fee is typically separate from creator payments and covers strategy, creator discovery services, outreach, contracting, and reporting. Ask any agency you evaluate whether their quote is an all-in campaign cost or a management fee on top of media spend, so you're comparing like for like.",
        links: [{ text: "creator discovery services", href: "/services/creator-discovery" }],
      },
      { type: "heading", text: "How to budget your first campaign", id: "how-to-budget" },
      {
        type: "paragraph",
        text: "Start with your objective and a target number of creators rather than a total dollar figure, then work backward into tier and format. Our team can help size a realistic first-campaign budget for your category during a strategy call — no fixed package required.",
        links: [{ text: "strategy call", href: "/for-brands#inquiry" }],
      },
      {
        type: "quote",
        text: "The biggest budgeting mistake we see is brands fixing a total dollar amount before defining the objective it needs to hit.",
        attribution: "Kudozz Strategy Team",
      },
    ],
  },
  {
    slug: "how-to-choose-the-right-influencer-for-your-brand",
    category: "Influencer Marketing",
    title: "How to Choose the Right Influencer for Your Brand (Not Just the Biggest One)",
    excerpt:
      "Follower count is the weakest signal in influencer marketing. Here's the framework we use to evaluate audience fit, engagement quality, and brand alignment before a single dollar is spent.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-08-18",
    readingTime: "7 min read",
    body: [
      { type: "paragraph", text: "Every brand eventually asks the same question: how many followers does this creator need to have for the campaign to work? It's the wrong question. Follower count tells you reach, not relevance — and relevance is what converts attention into action." },
      { type: "heading", text: "Start with audience overlap, not audience size", id: "audience-overlap" },
      { type: "paragraph", text: "Before evaluating any creator, we map their audience against your actual customer profile: age range, geography, interests, and purchase intent signals. A creator with 40,000 highly relevant followers will consistently outperform one with 400,000 loosely related followers on any conversion metric." },
      { type: "heading", text: "Engagement quality over engagement rate", id: "engagement-quality" },
      { type: "paragraph", text: "Engagement rate is a useful filter, but it's easy to game and easy to misread. We look past the percentage and into the comments themselves — are people asking genuine questions, tagging friends, and expressing intent to buy? Or are comments generic, repetitive, or bot-like?" },
      { type: "list", items: [
        "Comment sentiment and specificity, not just comment count",
        "Save and share rates where platform data allows",
        "Consistency of engagement across the last 10–15 posts, not just the best one",
        "Audience authenticity checks to rule out purchased followers",
      ] },
      { type: "heading", text: "Content style and brand fit", id: "brand-fit" },
      { type: "paragraph", text: "A creator can have the right audience and strong engagement and still be the wrong fit if their content style clashes with your brand voice. We review a creator's last several months of content the way a creative director would — for tone, pacing, visual style, and how naturally a product placement would sit inside it." },
      { type: "quote", text: "The best-performing partnerships rarely come from the creator with the largest audience. They come from the creator whose audience was already primed to care.", attribution: "Kudozz Creator Strategy Team" },
      { type: "heading", text: "Bringing it together", id: "bringing-it-together" },
      {
        type: "paragraph",
        text: "Audience overlap, engagement quality, authenticity, and brand fit — weighted against your specific campaign goal — is the scoring framework behind our creator discovery service. It's slower than sorting by follower count. It's also why our campaigns tend to outperform the industry average on engagement and conversion, a difference that shows up clearly once you start measuring influencer campaign ROI.",
        links: [
          { text: "creator discovery service", href: "/services/creator-discovery" },
          { text: "measuring influencer campaign ROI", href: "/blog/measuring-influencer-campaign-roi" },
        ],
      },
    ],
  },
  {
    slug: "state-of-the-creator-economy-2026",
    category: "Creator Economy",
    title: "The State of the Creator Economy in 2026: What Brands Need to Know",
    excerpt:
      "The creator economy has matured from experimental line-item to core marketing channel. Here's what's actually changed for brands allocating budget this year.",
    author: { name: "Kudozz Insights Team", role: "Agency Team" },
    publishedAt: "2026-07-02",
    readingTime: "6 min read",
    body: [
      { type: "paragraph", text: "Influencer marketing is no longer a test budget line — it's a planned, forecastable channel with its own reporting standards, contracting norms, and specialist agencies. That maturity has changed what 'good' looks like for brands entering the space." },
      { type: "heading", text: "Consolidation around fewer, deeper partnerships", id: "consolidation" },
      {
        type: "paragraph",
        text: "Brands are moving away from large one-off gifting rosters and toward smaller cohorts of creators on retained, ambassador-style terms. The data supports it: audiences respond more to a creator they've seen mention a brand three times than one they've seen mention it once.",
        links: [{ text: "ambassador-style terms", href: "/services/ambassador-programs" }],
      },
      { type: "heading", text: "Short-form video remains the default, but not the only format", id: "short-form" },
      { type: "paragraph", text: "Short-form video continues to dominate reach, but categories like finance, technology, and B2B are seeing renewed traction with longer-form breakdowns and creator-hosted live formats, where trust-building matters more than viral potential." },
      { type: "heading", text: "Measurement expectations have caught up", id: "measurement" },
      { type: "paragraph", text: "Clients increasingly expect influencer campaigns to be reported with the same rigor as paid media — unified dashboards, creator-level attribution where platforms allow it, and post-campaign debriefs tied to the original KPI, not vanity metrics." },
      { type: "list", items: [
        "Reach and impressions as a top-line indicator, not the goal itself",
        "Engagement rate normalized by creator tier",
        "Traffic and conversion tracking via UTM and promo codes",
        "Qualitative creative feedback loops for future campaigns",
      ] },
      {
        type: "paragraph",
        text: "For brands, the takeaway is straightforward: influencer marketing now rewards the same discipline as any other channel — clear objectives, rigorous creator discovery, and honest measurement.",
        links: [{ text: "rigorous creator discovery", href: "/services/creator-discovery" }],
      },
    ],
  },
  {
    slug: "instagram-algorithm-changes-what-still-works",
    category: "Instagram Marketing",
    title: "Instagram's Algorithm Keeps Changing. Here's What Still Reliably Works.",
    excerpt:
      "Chasing every algorithm update is a losing game. These are the durable content principles that have held up across every major Instagram change in the last two years.",
    author: { name: "Kudozz Social Team", role: "Agency Team" },
    publishedAt: "2026-06-14",
    readingTime: "5 min read",
    body: [
      { type: "paragraph", text: "Every few months, a new Instagram algorithm change sends brands scrambling to reverse-engineer the platform. Most of that energy is wasted. The formats and habits that consistently perform well have stayed remarkably stable — because they're rooted in what keeps people watching, not what tricks a ranking system." },
      { type: "heading", text: "Watch time still beats every other single signal", id: "watch-time" },
      { type: "paragraph", text: "Whatever else changes, content that holds attention for longer continues to get distributed further. That favors clear hooks in the first two seconds, pacing that avoids dead air, and captions that don't give away the payoff before the video does." },
      { type: "heading", text: "Native-feeling content over polished production", id: "native-feeling" },
      { type: "paragraph", text: "Creator content that looks like it belongs in the feed — rather than an obvious ad unit — consistently earns more completion and shares. This is one of the strongest arguments for creator-led content over traditional brand video." },
      { type: "heading", text: "Consistency compounds", id: "consistency" },
      {
        type: "paragraph",
        text: "Individual post performance matters less than sustained posting cadence from a creator's account. This is part of why we favor ambassador-style, multi-post partnerships over single-post placements for brands optimizing for long-term reach.",
        links: [{ text: "ambassador-style, multi-post partnerships", href: "/services/ambassador-programs" }],
      },
      { type: "list", items: [
        "Hook viewers in the first two seconds",
        "Favor native, in-feed aesthetics over polished ad production",
        "Prioritize sustained cadence over one-off viral swings",
        "Let the creator's established format lead, not the brand's brief",
      ] },
    ],
  },
  {
    slug: "measuring-influencer-campaign-roi",
    category: "Campaign Strategy",
    title: "How to Actually Measure Influencer Campaign ROI",
    excerpt:
      "ROI measurement is where most influencer campaigns fall apart after the fact. Here's the reporting structure we set up before a campaign ever launches.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-05-22",
    readingTime: "8 min read",
    body: [
      { type: "paragraph", text: "'Did the campaign work?' is a hard question to answer if nobody defined what working meant before launch. Most reporting failures in influencer marketing are set up on day one, not the day the report is due." },
      { type: "heading", text: "Define the primary KPI before creator outreach begins", id: "define-kpi" },
      { type: "paragraph", text: "Awareness, engagement, traffic, and conversion are all valid goals — but a single campaign should have one primary KPI, not four competing ones. That KPI determines everything downstream: creator tier, content format, and even platform choice." },
      { type: "heading", text: "Build measurement into the campaign, not after it", id: "build-measurement-in" },
      { type: "list", items: [
        "Unique promo codes or landing pages per creator where possible",
        "UTM-tagged links for any bio or story link placements",
        "Baseline metrics captured before launch for fair comparison",
        "A shared reporting template agreed with the client in advance",
      ] },
      { type: "heading", text: "Separate reach metrics from performance metrics", id: "reach-vs-performance" },
      { type: "paragraph", text: "Reach and impressions tell you how far a campaign traveled. They don't tell you whether it worked. We report reach as context, then evaluate performance against the specific KPI defined at kickoff — engagement rate, click-through, conversion, or sentiment, depending on the goal." },
      { type: "quote", text: "A campaign that reaches 10 million people and moves nothing is a worse outcome than one that reaches 200,000 and converts.", attribution: "Kudozz Campaign Reporting Team" },
      { type: "heading", text: "Close the loop with a debrief, not just a dashboard", id: "close-the-loop" },
      {
        type: "paragraph",
        text: "Every campaign we run ends with a plain-language debrief as part of our campaign reporting service: what worked, what underperformed, and what we'd change next time. Dashboards show numbers. Debriefs turn those numbers into a decision for the next campaign.",
        links: [{ text: "campaign reporting service", href: "/services/reporting" }],
      },
    ],
  },
  {
    slug: "ugc-vs-influencer-content-whats-the-difference",
    category: "Brand Marketing",
    title: "UGC vs. Influencer Content: What's the Difference, and When Do You Need Each?",
    excerpt:
      "These two terms get used interchangeably, but they solve different problems. Here's how to decide which one your next campaign actually needs.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-04-09",
    readingTime: "5 min read",
    body: [
      {
        type: "paragraph",
        text: "'UGC' and 'influencer marketing' are often used as if they're the same service. They're related, but they solve different problems, and choosing the wrong one for your goal wastes budget.",
      },
      { type: "heading", text: "Influencer content is built for the creator's own audience", id: "influencer-content" },
      { type: "paragraph", text: "When a creator posts to their own following, you're paying primarily for distribution and trust transfer — their audience trusts them, and that trust extends, partially, to your brand. The content lives on the creator's channel." },
      { type: "heading", text: "UGC is built for your channels", id: "ugc-content" },
      {
        type: "paragraph",
        text: "UGC campaigns commission creators to produce authentic-feeling content that your brand then owns and distributes — on paid social, your website, product pages, and email. You're paying for content style and authenticity, not the creator's existing audience.",
        links: [{ text: "UGC campaigns", href: "/services/ugc-campaigns" }],
      },
      { type: "list", items: [
        "Choose influencer content when the goal is reach into a new, relevant audience",
        "Choose UGC when the goal is a library of authentic assets for your own paid and owned channels",
        "Many mature campaigns use both — creator posts for reach, UGC for the ad account",
      ] },
      { type: "paragraph", text: "The clearest sign a brand needs UGC rather than influencer posts: your paid social creative has started to feel stale, and you need authentic-feeling assets faster than your in-house content team can produce them." },
    ],
  },
  {
    slug: "building-a-brand-ambassador-program-that-lasts",
    category: "Influencer Marketing",
    title: "Building a Brand Ambassador Program That Actually Lasts",
    excerpt:
      "Most ambassador programs quietly die after two quarters. Here's the structure that keeps creators engaged and content flowing long after the initial excitement fades.",
    author: { name: "Kudozz Partnerships Team", role: "Agency Team" },
    publishedAt: "2026-03-11",
    readingTime: "6 min read",
    body: [
      {
        type: "paragraph",
        text: "Ambassador programs are easy to launch and hard to sustain. The initial cohort is excited, the first quarter of content looks great, and then momentum quietly drops as the program becomes an afterthought for both the brand and the creators.",
        links: [{ text: "Ambassador programs", href: "/services/ambassador-programs" }],
      },
      { type: "heading", text: "Structure the incentive beyond the first post", id: "structure-incentive" },
      { type: "paragraph", text: "Programs that last are built on tiered incentives that reward consistency, not just participation — creators who hit content or engagement milestones unlock better terms over time, giving them a reason to stay engaged past the first deliverable." },
      { type: "heading", text: "Treat creators like partners, not vendors", id: "treat-as-partners" },
      { type: "list", items: [
        "Share upcoming product and campaign plans early, not just briefs",
        "Ask for creative input instead of issuing rigid scripts",
        "Respond to creator questions within a committed timeframe",
        "Recognize top performers publicly, not just financially",
      ] },
      { type: "heading", text: "Review the program quarterly, not just annually", id: "review-quarterly" },
      { type: "paragraph", text: "A quarterly review — content volume, engagement trends, and creator satisfaction — catches fatigue early enough to address it, whether that means refreshing the brief, rotating in new creators, or adjusting incentives." },
      { type: "quote", text: "An ambassador program is a relationship with a renewal date, not a one-time contract with a recurring invoice.", attribution: "Kudozz Partnerships Team" },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost, count = 3) {
  return blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : 0) - (b.category === post.category ? -1 : 0))
    .slice(0, count);
}

export const blogCategories: BlogCategory[] = [
  "Influencer Marketing",
  "Creator Economy",
  "Social Media Trends",
  "Brand Marketing",
  "Instagram Marketing",
  "Campaign Strategy",
];
