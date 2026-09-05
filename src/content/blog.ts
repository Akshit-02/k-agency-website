export type BlogBlock =
  | { type: "paragraph"; text: string }
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
  readingTime: string;
  featured?: boolean;
  body: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-the-right-influencer-for-your-brand",
    category: "Influencer Marketing",
    title: "How to Choose the Right Influencer for Your Brand (Not Just the Biggest One)",
    excerpt:
      "Follower count is the weakest signal in influencer marketing. Here's the framework we use to evaluate audience fit, engagement quality, and brand alignment before a single dollar is spent.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-08-18",
    readingTime: "7 min read",
    featured: true,
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
      { type: "paragraph", text: "Audience overlap, engagement quality, authenticity, and brand fit — weighted against your specific campaign goal — is the scoring framework we run every shortlist through before it reaches a client. It's slower than sorting by follower count. It's also why our campaigns tend to outperform the industry average on engagement and conversion." },
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
      { type: "paragraph", text: "Brands are moving away from large one-off gifting rosters and toward smaller cohorts of creators on retained, ambassador-style terms. The data supports it: audiences respond more to a creator they've seen mention a brand three times than one they've seen mention it once." },
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
      { type: "paragraph", text: "For brands, the takeaway is straightforward: influencer marketing now rewards the same discipline as any other channel — clear objectives, rigorous partner selection, and honest measurement." },
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
      { type: "paragraph", text: "Individual post performance matters less than sustained posting cadence from a creator's account. This is part of why we favor ambassador-style, multi-post partnerships over single-post placements for brands optimizing for long-term reach." },
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
      { type: "paragraph", text: "Every campaign we run ends with a plain-language debrief: what worked, what underperformed, and what we'd change next time. Dashboards show numbers. Debriefs turn those numbers into a decision for the next campaign." },
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
      { type: "paragraph", text: "'UGC' and 'influencer marketing' are often used as if they're the same service. They're related, but they solve different problems, and choosing the wrong one for your goal wastes budget." },
      { type: "heading", text: "Influencer content is built for the creator's own audience", id: "influencer-content" },
      { type: "paragraph", text: "When a creator posts to their own following, you're paying primarily for distribution and trust transfer — their audience trusts them, and that trust extends, partially, to your brand. The content lives on the creator's channel." },
      { type: "heading", text: "UGC is built for your channels", id: "ugc-content" },
      { type: "paragraph", text: "UGC campaigns commission creators to produce authentic-feeling content that your brand then owns and distributes — on paid social, your website, product pages, and email. You're paying for content style and authenticity, not the creator's existing audience." },
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
      { type: "paragraph", text: "Ambassador programs are easy to launch and hard to sustain. The initial cohort is excited, the first quarter of content looks great, and then momentum quietly drops as the program becomes an afterthought for both the brand and the creators." },
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
