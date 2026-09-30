import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_FACTS_REVIEWED, CREATOR_LAYER_5_PUBLISHED as PUBLISHED, SOURCES } from "@/content/creator-resources/shared";

/**
 * TikTok creator hub (570–579). TikTok has been blocked in India since
 * 2020, so these guides are for creators based where TikTok operates, and
 * each one points India-based creators to the Reels and Shorts equivalent.
 * 574 (TikTok video SEO) was consolidated into the existing tiktok-seo
 * article to avoid duplicate intent.
 */
export const tiktokCreatorPosts: BlogPost[] = [
  {
    slug: "tiktok-creator-monetization",
    category: "Creator Resources",
    title: "TikTok Creator Monetization: Complete Guide for Indian Creators",
    seoTitle: "TikTok Monetization: What Indian Creators Need to Know",
    excerpt:
      "TikTok isn't available in India, but many Indian creators build audiences abroad. How TikTok monetization works where it operates: Creator Rewards, LIVE Gifts, subscriptions, TikTok Shop affiliate and brand deals, and what transfers to Reels and Shorts.",
    metaDescription:
      "TikTok monetization for Indian creators abroad: India status, Creator Rewards, LIVE Gifts, subscriptions, TikTok Shop affiliate, brand deals and lessons for Reels.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["TikTok monetization", "TikTok for Indian creators", "TikTok Creator Rewards", "TikTok India ban", "TikTok income"],
    related: ["tiktok-creator-rewards-program", "tiktok-live", "tiktok-vs-instagram-reels"],
    body: [
      {
        type: "paragraph",
        text: "Start with the fact that shapes everything else: TikTok has been blocked in India since June 2020, and in August 2025 the government said no order had been issued to lift the block. Creators living in India can't publish to Indian audiences on TikTok, and TikTok's monetization programmes are tied to the country a creator is actually based in.",
      },
      {
        type: "paragraph",
        text: "So who is this guide for? Indian creators who live abroad (students, professionals, families who've moved), creators of Indian origin building audiences in countries where TikTok operates, managers and agencies working with those creators, and India-based creators who want to understand what TikTok's systems teach about Reels and Shorts. It doesn't cover workarounds for the block. Details were checked against TikTok's official pages in September 2026.",
      },
      {
        type: "paragraph",
        text: "Status source: government statement reported by All India Radio.",
        links: [{ text: "government statement reported by All India Radio", href: SOURCES.tiktokIndiaBlockStatus }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "TikTok isn't available in India, so Indian creators can monetize TikTok only if they're genuinely based in a country where TikTok and its programmes operate. There, the main income routes are the Creator Rewards Program (for eligible creators in listed countries, rewarding original videos over a minute), LIVE Gifts (converted to Diamonds), subscriptions and other paid features where available, TikTok Shop affiliate commissions in markets where TikTok Shop runs, and brand partnerships. Each has its own age, follower and location rules. For Indian audiences, apply the same principles on Instagram Reels and YouTube Shorts.",
      },
      { type: "heading", text: "The TikTok monetization map", id: "map" },
      {
        type: "table",
        headers: ["Route", "Who pays", "Typical requirements (vary by country)", "Guide"],
        rows: [
          ["Creator Rewards Program", "TikTok", "18+, 10,000 followers, 100,000 views in 30 days, personal account, eligible country", "Creator Rewards"],
          ["LIVE Gifts", "Viewers, via Gifts converted to Diamonds", "18+ (19 in South Korea), LIVE access, Gifts available in your location", "TikTok LIVE"],
          ["Subscriptions and paid features", "Fans", "Follower and activity thresholds; market-dependent", "TikTok LIVE"],
          ["TikTok Shop affiliate", "Sellers, per sale", "TikTok Shop market; creator eligibility rules", "TikTok affiliate"],
          ["Brand partnerships", "Brands", "Audience fit; disclosure rules", "Creator brand deals"],
        ],
      },
      {
        type: "paragraph",
        text: "Guides: Creator Rewards, TikTok LIVE, TikTok affiliate and creator brand deals.",
        links: [
          { text: "Creator Rewards", href: "/blog/tiktok-creator-rewards-program" },
          { text: "TikTok LIVE", href: "/blog/tiktok-live" },
          { text: "TikTok affiliate", href: "/blog/tiktok-affiliate-marketing" },
          { text: "creator brand deals", href: "/blog/creator-brand-deals" },
        ],
      },
      { type: "heading", text: "Where you're based decides what you can use", id: "location" },
      {
        type: "paragraph",
        text: "TikTok programmes are country-specific. The Creator Rewards Program, for example, lists a small set of countries and requires your account to be registered and based there. TikTok Shop runs only in certain markets. Moving your phone's region setting or using a VPN doesn't make you eligible, and can breach platform terms. If you've relocated, set up your account properly in your country of residence and check each programme's page.",
      },
      { type: "heading", text: "Brand deals: usually the biggest line", id: "brand-deals" },
      {
        type: "paragraph",
        text: "As on every platform, brand partnerships tend to matter more than platform payouts for many creators. Diaspora audiences are valuable to brands selling Indian food, fashion, travel, remittance, education and festive products abroad, as well as local brands in your new country. Your media kit should state where your audience is (TikTok analytics shows audience locations), the language mix, and examples. Disclose sponsored content with TikTok's content disclosure setting and the rules of your country.",
      },
      {
        type: "paragraph",
        text: "Brand basics: creator media kit and how to pitch brands.",
        links: [
          { text: "creator media kit", href: "/blog/creator-media-kit" },
          { text: "how to pitch brands", href: "/blog/how-to-pitch-brands-as-a-creator" },
        ],
      },
      { type: "heading", text: "What transfers to Reels and Shorts", id: "transfer" },
      {
        type: "table",
        headers: ["TikTok lesson", "Apply on Instagram Reels", "Apply on YouTube Shorts"],
        rows: [
          ["Rewards favour original, longer videos", "Originality matters for Reels recommendations", "Engaged views and originality affect Shorts revenue"],
          ["Search value is rewarded", "Instagram search matches captions and on-screen text", "Clear titles help Shorts in search"],
          ["LIVE Gifts reward interaction", "Instagram badges in Live", "Super Chat and Gifts on YouTube Live"],
          ["Affiliate via in-app shop", "Instagram affiliate tools (rolling out)", "YouTube Shopping (available in India)"],
        ],
      },
      {
        type: "paragraph",
        text: "For Indian audiences: Instagram creator monetization and YouTube creator monetization. If you create for both TikTok and Reels, see TikTok vs Instagram Reels for adapting videos between them.",
        links: [
          { text: "Instagram creator monetization", href: "/blog/instagram-creator-monetization" },
          { text: "YouTube creator monetization", href: "/blog/youtube-creator-monetization" },
          { text: "TikTok vs Instagram Reels", href: "/blog/tiktok-vs-instagram-reels" },
        ],
      },
      { type: "heading", text: "Cross-platform, not single-platform", id: "cross-platform" },
      {
        type: "paragraph",
        text: "TikTok's history in India is a reminder that a platform can disappear from a market overnight. Creators who had built everything on it lost their audience in a day. Whatever platform you use, build an owned audience alongside it: email, a website, a community. See creator audience ownership and creator revenue diversification.",
        links: [
          { text: "creator audience ownership", href: "/blog/creator-audience-ownership" },
          { text: "creator revenue diversification", href: "/blog/creator-revenue-diversification" },
        ],
      },
      { type: "heading", text: "Money, tax and residency", id: "tax" },
      {
        type: "paragraph",
        text: "If you live abroad, platform income is usually taxed where you're resident, and Indian tax may also apply depending on your residential status. This is a specialist area; get advice from a qualified professional who understands both countries. Keep records by programme and month.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Assuming TikTok monetization works from India with a workaround.",
          "Following eligibility numbers from videos made for another country.",
          "Ignoring brand deals while chasing Creator Rewards.",
          "Reposting TikTok-watermarked videos to Reels, which Instagram is less likely to recommend.",
          "Building everything on one platform.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "For Indian creators, TikTok monetization is only relevant if you're based where TikTok operates. There, combine Creator Rewards, LIVE, TikTok Shop affiliate and brand deals according to each programme's rules. Everywhere, the underlying lessons (originality, search value, live interaction, commerce built on trust) apply to Reels and Shorts too.",
      },
    ],
    faqs: [
      {
        question: "Is TikTok available in India in 2026?",
        answer:
          "No. TikTok has been blocked in India since June 2020, and in August 2025 the government said no order had been issued to lift the block.",
      },
      {
        question: "Can Indian creators earn money on TikTok?",
        answer:
          "Only if they're genuinely based in a country where TikTok and its monetization programmes operate, and they meet each programme's requirements.",
      },
      {
        question: "Can I use a VPN to join TikTok's Creator Rewards Program from India?",
        answer:
          "No. The programme requires your account to be based in an eligible country, and using workarounds can breach platform terms and put the account at risk.",
      },
      {
        question: "What should India-based creators use instead of TikTok?",
        answer:
          "Instagram Reels and YouTube Shorts, which offer similar short-form discovery along with monetization options available in India.",
      },
    ],
  },
  {
    slug: "tiktok-creator-rewards-program",
    category: "Creator Resources",
    title: "TikTok Creator Rewards Program: How Creator Rewards Work",
    seoTitle: "TikTok Creator Rewards Program: Eligibility and How It Pays",
    excerpt:
      "How TikTok's Creator Rewards Program works: eligibility, eligible countries, why it rewards original videos over a minute, the factors TikTok says affect rewards, and how to plan content for it without chasing length for its own sake.",
    metaDescription:
      "TikTok Creator Rewards Program explained: eligibility, countries, one-minute original videos, what TikTok says affects rewards, and content planning. India note included.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "10 min read",
    tags: ["TikTok Creator Rewards Program", "Creator Rewards eligibility", "TikTok Creativity Program", "TikTok rewards", "TikTok monetization"],
    related: ["tiktok-creator-monetization", "tiktok-content-strategy", "tiktok-analytics"],
    body: [
      {
        type: "paragraph",
        text: "TikTok's Creator Rewards Program replaced its earlier Creativity Program Beta and moved TikTok's platform payouts toward longer, original videos. It's one of the few programmes that pays creators directly for views, which is exactly why rumours about it spread quickly and inaccurately.",
      },
      {
        type: "paragraph",
        text: "Important for Indian readers: TikTok isn't available in India, and the programme is open only to creators based in listed countries. This guide is for creators living in those countries. Details were checked against TikTok's official pages in September 2026.",
      },
      {
        type: "paragraph",
        text: "Context: TikTok creator monetization for Indian creators.",
        links: [{ text: "TikTok creator monetization for Indian creators", href: "/blog/tiktok-creator-monetization" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "TikTok's Creator Rewards Program pays eligible creators for qualified views on original videos longer than one minute. TikTok lists these requirements: 18 or older, at least 10,000 followers, at least 100,000 video views in the last 30 days, a personal account in good standing, and being based in an eligible country (TikTok's creator academy lists the US, UK, Germany, Japan, South Korea, France, Mexico and Brazil). When TikTok introduced the programme, it said rewards reflect originality, play duration, search value and audience engagement. Plan genuinely useful minute-plus videos rather than stretching short ones.",
      },
      { type: "heading", text: "Eligibility", id: "eligibility" },
      {
        type: "table",
        headers: ["Requirement", "Detail (per TikTok)"],
        rows: [
          ["Age", "18 or older"],
          ["Followers", "At least 10,000"],
          ["Views", "At least 100,000 in the last 30 days"],
          ["Account type", "Personal account"],
          ["Standing", "Follows Community Guidelines and Terms of Service"],
          ["Location", "Based in an eligible country, with the account registered there"],
        ],
      },
      {
        type: "paragraph",
        text: "Official: TikTok's Creator Rewards Program page.",
        links: [{ text: "TikTok's Creator Rewards Program page", href: SOURCES.tiktokCreatorRewards }],
      },
      { type: "heading", text: "What TikTok says it rewards", id: "rewards" },
      {
        type: "paragraph",
        text: "When TikTok launched the programme, it described four areas that influence rewards:",
      },
      {
        type: "list",
        items: [
          "Originality: content you created, not reposts or lightly edited clips.",
          "Play duration: how long people watch.",
          "Search value: content people look for.",
          "Audience engagement: how viewers interact.",
        ],
      },
      {
        type: "paragraph",
        text: "Official launch: TikTok's Creator Rewards announcement.",
        links: [{ text: "TikTok's Creator Rewards announcement", href: SOURCES.tiktokCreatorRewardsLaunch }],
      },
      { type: "heading", text: "Plan content for it without stretching", id: "planning" },
      {
        type: "paragraph",
        text: "Videos must be over a minute to qualify, but padding a 30-second idea to 61 seconds tends to hurt play duration. Choose ideas that genuinely need a minute or more.",
      },
      {
        type: "table",
        headers: ["Format", "Why it suits minute-plus", "Example (illustrative)"],
        rows: [
          ["Explainers", "Room to answer fully", "\"How the UK student visa rules changed this year\""],
          ["Storytimes", "Narrative holds attention", "A cultural moment from moving abroad"],
          ["Tutorials", "Steps take time", "A full biryani method with timings"],
          ["Reviews and comparisons", "Viewers want detail", "Two budget phones compared"],
          ["Series episodes", "Viewers return", "\"Week 3 of learning Kannada as a British-Indian\""],
        ],
      },
      {
        type: "paragraph",
        text: "TikTok content strategy covers building series around these.",
        links: [{ text: "TikTok content strategy", href: "/blog/tiktok-content-strategy" }],
      },
      { type: "heading", text: "Search value in practice", id: "search" },
      {
        type: "paragraph",
        text: "Search value connects to TikTok SEO: say the searched phrase early, put it in the caption and on-screen text, and answer quickly. Creator Search Insights, where available, shows what people search, including a Content Gap view.",
      },
      {
        type: "paragraph",
        text: "Search guides: TikTok SEO and TikTok content gaps.",
        links: [
          { text: "TikTok SEO", href: "/blog/tiktok-seo" },
          { text: "TikTok content gaps", href: "/blog/tiktok-content-gaps" },
        ],
      },
      { type: "heading", text: "Measuring rewards", id: "measure" },
      {
        type: "paragraph",
        text: "Track which videos qualify and earn, their length, average watch time and share of search traffic. After two months, compare earning videos with non-earning ones to see whether originality, length or search is the difference. TikTok analytics explains the metrics.",
        links: [{ text: "TikTok analytics", href: "/blog/tiktok-analytics" }],
      },
      { type: "heading", text: "Don't make it the whole plan", id: "balance" },
      {
        type: "paragraph",
        text: "Programme terms, eligible countries and payout logic can change. Treat Creator Rewards as one income line alongside brand deals, LIVE and affiliate, and keep an owned audience.",
      },
      {
        type: "paragraph",
        text: "Balance: creator revenue diversification.",
        links: [{ text: "creator revenue diversification", href: "/blog/creator-revenue-diversification" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Padding short ideas past a minute.",
          "Reposting others' clips and expecting rewards.",
          "Following eligibility numbers from outdated or other-country videos.",
          "Switching to a business account (the programme lists personal accounts).",
          "Assuming it's available in India.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Creator Rewards pays for original, minute-plus videos that people watch, search for and engage with. Check eligibility for your country, choose ideas that need the time, apply search principles and keep other income lines alongside it.",
      },
    ],
    faqs: [
      {
        question: "What are the requirements for TikTok's Creator Rewards Program?",
        answer:
          "TikTok lists being 18 or older, at least 10,000 followers, at least 100,000 video views in the last 30 days, a personal account in good standing, and being based in an eligible country.",
      },
      {
        question: "Which countries is Creator Rewards available in?",
        answer:
          "TikTok's creator academy lists the United States, United Kingdom, Germany, Japan, South Korea, France, Mexico and Brazil. Check TikTok's page for your country.",
      },
      {
        question: "Do TikTok Creator Rewards pay for videos under one minute?",
        answer:
          "The programme is designed for original videos longer than one minute.",
      },
      {
        question: "Is the Creator Rewards Program available in India?",
        answer:
          "No. TikTok isn't available in India, and the programme is only for creators based in listed countries.",
      },
    ],
  },
  {
    slug: "tiktok-profile-optimization",
    category: "Creator Resources",
    title: "TikTok Creator Profile Optimization: How to Build a Searchable Creator Profile",
    seoTitle: "TikTok Profile Optimization: A Searchable Creator Profile",
    excerpt:
      "How to set up a TikTok profile that searchers, new viewers and brands understand in seconds: username and name keywords, bio, profile video and photo, pinned videos, playlists, links and contact options.",
    metaDescription:
      "TikTok profile optimization for creators: searchable name and username, bio, pinned videos, playlists, links and contact options for brands. India availability note.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "9 min read",
    tags: ["TikTok profile optimization", "TikTok bio", "searchable TikTok profile", "TikTok pinned videos", "TikTok creator profile"],
    related: ["tiktok-seo", "tiktok-content-strategy", "instagram-creator-portfolio"],
    body: [
      {
        type: "paragraph",
        text: "On TikTok, most viewers meet a video before they meet you. When a video lands, some tap your profile to decide whether to follow. Your profile has a few seconds to answer: what do you post, is it for me, and is there more like the video I just saw?",
      },
      {
        type: "paragraph",
        text: "TikTok isn't available in India. This guide is for creators serving audiences where TikTok operates; the same principles apply to Instagram profiles (see Instagram creator portfolio). Features vary by account and country.",
        links: [{ text: "Instagram creator portfolio", href: "/blog/instagram-creator-portfolio" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A searchable, brand-ready TikTok profile uses a name field that includes your topic, a simple username, a bio that says what you post and who it's for, a clear profile photo, three pinned videos that represent your best series, playlists that group episodes, a link or contact option where available, and a consistent look across recent videos. Keywords in your name and bio help people find you in search; clarity helps them follow.",
      },
      { type: "heading", text: "Name, username and search", id: "name" },
      {
        type: "list",
        items: [
          "Username: short, easy to spell, the same across platforms if possible.",
          "Name field: your name plus your topic (\"Priya | Indian Recipes UK\").",
          "Keep it natural; stuffing keywords looks spammy to people and brands.",
        ],
      },
      { type: "heading", text: "Bio: what, who, why follow", id: "bio" },
      {
        type: "template",
        label: "Bio structure (illustrative)",
        text: "Line 1: what you post (\"30-min Indian dinners for busy students\")\nLine 2: who / where (\"London · Hindi + English\")\nLine 3: why follow (\"New recipe every Tue & Fri\")\nContact: email for brand enquiries, if the option is available",
      },
      { type: "heading", text: "Pinned videos", id: "pinned" },
      {
        type: "paragraph",
        text: "Pin three videos that answer \"what will I get if I follow?\"",
      },
      {
        type: "list",
        items: [
          "Your best-performing episode of your main series.",
          "A video that shows your personality or story.",
          "A strong example of your most searchable topic.",
        ],
      },
      {
        type: "paragraph",
        text: "Change pins when your focus changes. A pinned video from an old niche confuses new visitors.",
      },
      { type: "heading", text: "Playlists and series", id: "playlists" },
      {
        type: "paragraph",
        text: "Where playlists are available on your account, group series episodes so new viewers can binge in order. Named series are easier to follow and easier for brands to sponsor. See TikTok content strategy.",
        links: [{ text: "TikTok content strategy", href: "/blog/tiktok-content-strategy" }],
      },
      { type: "heading", text: "Links and contact", id: "links" },
      {
        type: "paragraph",
        text: "Link options depend on account type, follower count and country. If you can add a link, point it to a link-in-bio page or your website with your newsletter, media kit and products. Make a business email easy to find for brands.",
      },
      {
        type: "paragraph",
        text: "Link page: link in bio for creators.",
        links: [{ text: "link in bio for creators", href: "/blog/link-in-bio-for-creators" }],
      },
      { type: "heading", text: "Visual consistency", id: "visual" },
      {
        type: "paragraph",
        text: "Viewers scan your grid of video covers. Consistent cover text, readable titles on covers and a recognisable style make your profile look like a channel rather than a random collection.",
      },
      { type: "heading", text: "Brand-ready checklist", id: "checklist" },
      {
        type: "template",
        label: "☐ Name field includes your topic",
        text: "☐ Bio says what, who and how often\n☐ Three pinned videos chosen deliberately\n☐ Series grouped in playlists (if available)\n☐ Link or contact route for brands\n☐ Covers readable and consistent\n☐ Sponsored videos disclosed with TikTok's content disclosure setting",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "A clever bio that doesn't say what you post.",
          "Pinning your most viral video even if it's off-topic.",
          "No contact route for brands.",
          "Changing usernames often, which breaks recognition.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A TikTok profile converts a curious viewer into a follower and a browsing brand into an enquiry. Make your topic obvious in your name and bio, pin deliberately, group series and make contact easy. For search on the videos themselves, see TikTok SEO.",
        links: [{ text: "TikTok SEO", href: "/blog/tiktok-seo" }],
      },
    ],
    faqs: [
      {
        question: "How do I make my TikTok profile searchable?",
        answer:
          "Include your topic naturally in your name field and bio, keep your username simple, and post videos whose captions and on-screen text use the phrases people search.",
      },
      {
        question: "What should I pin on my TikTok profile?",
        answer:
          "Three videos that show new visitors what they'll get: your best series episode, a video that shows who you are, and a strong searchable topic.",
      },
      {
        question: "Is TikTok profile advice useful for Indian creators?",
        answer:
          "TikTok isn't available in India, but the same principles apply to Instagram and YouTube profiles for Indian audiences.",
      },
    ],
  },
  {
    slug: "tiktok-content-strategy",
    category: "Creator Resources",
    title: "TikTok Content Strategy: How to Build a Consistent Creator Growth System",
    seoTitle: "TikTok Content Strategy: A Consistent Creator Growth System",
    excerpt:
      "A TikTok content system for creators where TikTok operates: content pillars, series, For You and search content, a posting rhythm you can sustain, testing and weekly review, plus notes for Indian-origin creators abroad.",
    metaDescription:
      "TikTok content strategy for creators: pillars, series, For You vs search videos, sustainable rhythm, testing and weekly review, with notes for Indian creators abroad.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "11 min read",
    tags: ["TikTok content strategy", "TikTok growth", "TikTok series", "TikTok posting plan", "TikTok content pillars"],
    related: ["tiktok-analytics", "tiktok-seo", "short-form-video-strategy"],
    body: [
      {
        type: "paragraph",
        text: "TikTok rewards creators who make it easy for viewers to know what's next. A viewer who enjoys episode three of a series has a reason to follow; a viewer who enjoys a random one-off usually doesn't. A content strategy on TikTok is less about predicting trends and more about building formats people want to return to.",
      },
      {
        type: "paragraph",
        text: "TikTok isn't available in India; this guide is for creators serving audiences where it operates, and the system mirrors Kudozz's short-form video strategy for Reels and Shorts.",
        links: [{ text: "short-form video strategy", href: "/blog/short-form-video-strategy" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Build a TikTok content strategy around three or four content pillars, each with a named, repeatable series; mix For You videos (entertaining or relatable) with search videos (clear answers to things people type); choose a posting rhythm you can sustain for three months; test one variable at a time; and review analytics weekly. Originality matters for reach and for TikTok's rewards programme, so make content, don't repost it.",
      },
      { type: "heading", text: "Pillars and series", id: "pillars" },
      {
        type: "table",
        headers: ["Pillar", "Job", "Series example (illustrative, Indian-origin creator in Canada)"],
        rows: [
          ["Search pillar", "Answer questions people type", "\"Newcomer money basics\""],
          ["Signature pillar", "Your recognisable format", "\"Mum reacts to Canadian food\""],
          ["Community pillar", "Bring viewers in", "\"Your Diwali setups, rated\""],
          ["Experiment pillar", "Test new directions", "Short documentary-style storytimes"],
        ],
      },
      { type: "heading", text: "For You vs search videos", id: "fyp-search" },
      {
        type: "paragraph",
        text: "For You videos win on the first seconds and emotion; search videos win on clarity and usefulness. A healthy account has both.",
      },
      {
        type: "table",
        headers: ["", "For You videos", "Search videos"],
        rows: [
          ["Hook", "Surprise, story, humour", "The search phrase, said early"],
          ["Caption", "Short, supports the joke or story", "Plain words that match searches"],
          ["Lifespan", "Often short", "Can keep getting found"],
          ["Measure", "Watch time, shares, follows", "Search traffic share, saves"],
        ],
      },
      {
        type: "paragraph",
        text: "TikTok SEO and TikTok content gaps cover search videos in depth.",
        links: [
          { text: "TikTok SEO", href: "/blog/tiktok-seo" },
          { text: "TikTok content gaps", href: "/blog/tiktok-content-gaps" },
        ],
      },
      { type: "heading", text: "A rhythm you can sustain", id: "rhythm" },
      {
        type: "template",
        label: "Weekly rhythm (illustrative)",
        text: "3–5 videos a week: 2 signature series, 1–2 search videos, 1 experiment\n1 LIVE a week or fortnight (if eligible)\nBatch filming once a week; edit in two sessions",
      },
      {
        type: "paragraph",
        text: "If you're eligible for TikTok's Creator Rewards Program, plan some series as minute-plus episodes; if you go LIVE, see TikTok LIVE for creators. Before scaling output, make sure your profile converts visitors: see TikTok profile optimization.",
        links: [
          { text: "TikTok's Creator Rewards Program", href: "/blog/tiktok-creator-rewards-program" },
          { text: "TikTok LIVE for creators", href: "/blog/tiktok-live" },
          { text: "TikTok profile optimization", href: "/blog/tiktok-profile-optimization" },
        ],
      },
      {
        type: "paragraph",
        text: "Content batching for creators explains how to produce a week's videos in one or two sessions.",
      },
      {
        type: "paragraph",
        text: "Batching: content batching for creators.",
        links: [{ text: "content batching for creators", href: "/blog/content-batching-for-creators" }],
      },
      { type: "heading", text: "Test one thing at a time", id: "testing" },
      {
        type: "paragraph",
        text: "Change one variable (hook line, length, format, language) across a few similar videos, then compare. Creator A/B testing explains how to avoid false conclusions.",
      },
      {
        type: "paragraph",
        text: "Testing: creator A/B testing.",
        links: [{ text: "creator A/B testing", href: "/blog/creator-ab-testing" }],
      },
      { type: "heading", text: "Weekly review", id: "review" },
      {
        type: "list",
        items: [
          "Which videos brought the most followers per 1,000 views?",
          "Which had the highest average watch time relative to length?",
          "Which got search traffic, and for what terms?",
          "What did comments ask for?",
          "Decision: repeat, change one thing, or drop.",
        ],
      },
      {
        type: "paragraph",
        text: "TikTok analytics explains where to find each number.",
        links: [{ text: "TikTok analytics", href: "/blog/tiktok-analytics" }],
      },
      { type: "heading", text: "Notes for Indian-origin creators abroad", id: "diaspora" },
      {
        type: "list",
        items: [
          "Language mix is a strategic choice: English reaches widely; Hindi, Punjabi, Tamil or another language builds a closer community.",
          "Cultural explainers and \"first-generation\" experiences often resonate across diaspora audiences.",
          "Festive moments (Diwali, Eid, Holi, Onam, Pongal) are predictable content peaks; plan them.",
          "Brands in both India-linked and local markets may value your audience; see TikTok creator monetization.",
        ],
      },
      {
        type: "paragraph",
        text: "Monetization and commerce: TikTok creator monetization, TikTok affiliate marketing and, if you also post Reels, TikTok vs Instagram Reels.",
        links: [
          { text: "TikTok creator monetization", href: "/blog/tiktok-creator-monetization" },
          { text: "TikTok affiliate marketing", href: "/blog/tiktok-affiliate-marketing" },
          { text: "TikTok vs Instagram Reels", href: "/blog/tiktok-vs-instagram-reels" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Chasing every trend without a series.",
          "Only For You content, so nothing keeps working after a week.",
          "Reposting others' content.",
          "A posting rhythm that collapses after a month.",
          "Reviewing views without writing decisions.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A TikTok strategy is a system: pillars, series, a mix of For You and search videos, a sustainable rhythm, one-variable tests and weekly decisions. The same system runs on Reels and Shorts, which matters if your audience spans countries.",
      },
    ],
    faqs: [
      {
        question: "How often should I post on TikTok?",
        answer:
          "As often as you can sustain with quality for at least three months. Three to five videos a week is a common, sustainable range for individual creators.",
      },
      {
        question: "What are TikTok content pillars?",
        answer:
          "Three or four themes your account consistently covers, each with a repeatable series, such as a search pillar, a signature format, a community format and an experiment slot.",
      },
      {
        question: "Should TikTok videos target search or the For You feed?",
        answer:
          "Both. For You videos build reach and personality; search videos keep bringing viewers who look for answers.",
      },
    ],
  },
  {
    slug: "tiktok-content-gaps",
    category: "Creator Resources",
    title: "TikTok Content Gaps: How Creators Can Find Topics With Search Demand",
    seoTitle: "TikTok Content Gaps: Find Topics People Search For",
    excerpt:
      "A step-by-step workflow for TikTok's Content Gap view in Creator Search Insights: finding searches with too few good videos, judging fit, making the best answer, and measuring search traffic, with alternatives for Reels and Shorts.",
    metaDescription:
      "How to use TikTok's Content Gap view in Creator Search Insights: find under-served searches, score fit, make the best answer and measure search traffic.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "9 min read",
    tags: ["TikTok content gaps", "Creator Search Insights", "TikTok content gap filter", "TikTok topic research", "TikTok search demand"],
    related: ["tiktok-seo", "how-to-find-content-gaps", "tiktok-content-strategy"],
    body: [
      {
        type: "paragraph",
        text: "A content gap is a search where people aren't finding enough good answers. TikTok makes some of these visible through the Content Gap view in Creator Search Insights, which is unusually direct: the platform is telling you what its searchers want more of.",
      },
      {
        type: "paragraph",
        text: "This guide is a focused workflow for that tool. For TikTok search optimisation overall, see TikTok SEO; for finding content gaps on any platform, including Reels and Shorts for Indian audiences, see how to find content gaps. TikTok isn't available in India; features vary by country.",
        links: [
          { text: "TikTok SEO", href: "/blog/tiktok-seo" },
          { text: "how to find content gaps", href: "/blog/how-to-find-content-gaps" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To use TikTok content gaps: open Creator Search Insights (where available), filter by your category and select Content Gap to see searches without enough quality content; shortlist topics that fit your niche and that you can answer better than what exists; make a clear, fast answer with the search phrase in your speech, on-screen text and caption; then check search traffic and search terms in the video's analytics after a week. Turn the topics that work into a series.",
      },
      { type: "heading", text: "What TikTok's Content Gap view shows", id: "what" },
      {
        type: "paragraph",
        text: "TikTok describes Creator Search Insights as information about what people search for, including a Content Gap filter showing searches where there isn't enough content, and searches by your followers. You can also track how your videos perform for the topics you choose.",
      },
      {
        type: "paragraph",
        text: "Official: TikTok's Creator Search Insights page.",
        links: [{ text: "TikTok's Creator Search Insights page", href: SOURCES.tiktokSearchInsights }],
      },
      { type: "heading", text: "The five-step workflow", id: "workflow" },
      {
        type: "template",
        label: "Content gap workflow",
        text: "1. FIND: Creator Search Insights → your category → Content Gap\n2. VERIFY: search each topic; watch the top 5 results; note what's missing\n3. SCORE: demand, gap size, niche fit, your ability to answer (1–5 each)\n4. MAKE: the clearest, fastest answer; phrase said in first seconds, on screen and in caption\n5. MEASURE: after 7 days, check search traffic share and search terms; make part 2 for winners",
      },
      { type: "heading", text: "How to judge a gap", id: "judge" },
      {
        type: "table",
        headers: ["Gap type", "What you see", "Your angle (illustrative)"],
        rows: [
          ["Missing", "Few or no relevant videos", "\"How to get a UK NI number as a student\" with steps"],
          ["Weak", "Videos exist but are vague", "Real numbers, screen recordings"],
          ["Outdated", "Old rules or prices", "\"Updated for this year\" with sources"],
          ["Language", "Only in English", "Same answer in Hindi or Tamil"],
          ["Audience", "Not for a specific group", "\"For Indian vegetarians in Germany\""],
        ],
      },
      { type: "heading", text: "Make the best answer", id: "make" },
      {
        type: "list",
        items: [
          "Answer in the first seconds; don't build up to it.",
          "Show, don't just tell: screen recordings, demonstrations, documents (with personal details hidden).",
          "Keep it accurate; searchers act on your answer.",
          "End with the next logical question as a follow-up video.",
        ],
      },
      { type: "heading", text: "Measure and build series", id: "measure" },
      {
        type: "paragraph",
        text: "Check the video's traffic sources for search share and the search terms that led to it, where TikTok shows them. If a gap video brings steady search traffic, the adjacent questions probably do too. Group them into a named series and pin the best one. TikTok analytics explains the metrics.",
        links: [{ text: "TikTok analytics", href: "/blog/tiktok-analytics" }],
      },
      { type: "heading", text: "For Indian audiences: the same method on Reels and Shorts", id: "india" },
      {
        type: "paragraph",
        text: "TikTok's tool isn't available in India, but the method transfers. YouTube Studio's research insights show content gaps for YouTube searches, and Instagram and Google search suggestions reveal what people ask. See YouTube keyword research and Instagram keyword strategy.",
        links: [
          { text: "YouTube keyword research", href: "/blog/youtube-keyword-research" },
          { text: "Instagram keyword strategy", href: "/blog/instagram-keyword-strategy" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Making a gap video outside your niche because the gap is big.",
          "A slow opening that loses searchers.",
          "Answers that are confident but wrong.",
          "Not checking search traffic afterwards.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "TikTok's Content Gap view is a shortcut to demand. Verify each gap, score fit, make the clearest answer, measure search traffic and build series from what works. On Reels and Shorts, use the same method with each platform's own tools.",
      },
    ],
    faqs: [
      {
        question: "What is the Content Gap in TikTok Creator Search Insights?",
        answer:
          "A filter in Creator Search Insights, where available, that shows searches where there isn't enough content, so creators can make videos that answer them.",
      },
      {
        question: "How do I know if a TikTok content gap video worked?",
        answer:
          "Check its traffic sources for search share and the search terms that led to it, and whether it brought followers.",
      },
      {
        question: "Can Indian creators use TikTok's Content Gap tool?",
        answer:
          "TikTok isn't available in India. Indian creators can use YouTube Studio's research insights and search suggestions on Instagram, YouTube and Google instead.",
      },
    ],
  },
  {
    slug: "tiktok-live",
    category: "Creator Resources",
    title: "TikTok LIVE for Creators: Complete Guide to Building and Monetizing Live Audiences",
    seoTitle: "TikTok LIVE for Creators: Build and Monetize Live Audiences",
    excerpt:
      "How TikTok LIVE works for creators where TikTok operates: access requirements, LIVE Gifts and Diamonds, LIVE subscriptions, formats that build regular audiences, moderation, safety and disclosure.",
    metaDescription:
      "TikTok LIVE guide: access and age rules, Gifts and Diamonds, LIVE subscriptions, formats, moderation, safety and sponsored LIVE disclosure. India availability note.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "11 min read",
    tags: ["TikTok LIVE", "TikTok LIVE Gifts", "TikTok Diamonds", "TikTok LIVE monetization", "TikTok LIVE subscription"],
    related: ["tiktok-creator-monetization", "youtube-live-monetization", "tiktok-content-strategy"],
    body: [
      {
        type: "paragraph",
        text: "TikTok LIVE can turn a quiet audience into a community in a way short videos rarely do. It's also where the most pressure-based monetization happens, which is why the creators who last on LIVE are usually the ones with a format, boundaries and good moderation rather than the ones who ask hardest for gifts.",
      },
      {
        type: "paragraph",
        text: "TikTok isn't available in India. This guide is for creators based where TikTok operates. For live streaming in India, see YouTube Live monetization and Instagram content strategy (Live section).",
        links: [
          { text: "YouTube Live monetization", href: "/blog/youtube-live-monetization" },
          { text: "Instagram content strategy", href: "/blog/instagram-content-strategy" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To go LIVE with Gifts on TikTok, you generally need to be 18 or older (19 in South Korea), meet TikTok's LIVE access requirements for your region, and live where LIVE Gifts are available. Viewers send Gifts, which convert to Diamonds you can redeem under TikTok's terms; eligible creators may also offer LIVE subscriptions. Build regular audiences with scheduled, interactive formats, use moderators and keyword filters, disclose sponsored segments, and never pressure viewers, especially younger ones, to spend.",
      },
      { type: "heading", text: "Access and Gifts", id: "access" },
      {
        type: "table",
        headers: ["Area", "What TikTok says", "Check"],
        rows: [
          ["Age", "18+ for LIVE Gifts (19 in South Korea)", "Your account age settings"],
          ["LIVE access", "Requirements vary by region and account", "LIVE Center in the app"],
          ["Gifts", "Available only in certain locations", "TikTok's LIVE Gifts page"],
          ["Diamonds", "Gifts you receive convert to Diamonds", "Redemption terms in the app"],
        ],
      },
      {
        type: "paragraph",
        text: "Official: TikTok's LIVE Gifts page.",
        links: [{ text: "TikTok's LIVE Gifts page", href: SOURCES.tiktokLiveGifts }],
      },
      { type: "heading", text: "Formats that build regulars", id: "formats" },
      {
        type: "list",
        items: [
          "Scheduled weekly show with the same segments each time.",
          "Q&A on your niche, with questions collected beforehand.",
          "Co-hosted LIVE with a creator in an adjacent niche.",
          "Build-alongs: cooking, drawing, study sessions, workouts.",
          "Community events: rating viewer submissions, challenges.",
        ],
      },
      { type: "heading", text: "Run of show", id: "run-of-show" },
      {
        type: "template",
        label: "LIVE plan",
        text: "Before: announce time; set an event if available; brief moderators\nOpen (0–5 min): welcome, today's plan, how to join in\nMain (5–35 min): your core segment\nInteractive (35–50 min): questions, polls, co-host\nClose: thank supporters briefly, announce next LIVE\nAfter: clip highlights into short videos",
      },
      { type: "heading", text: "Subscriptions and supporters", id: "subscriptions" },
      {
        type: "paragraph",
        text: "Where available, LIVE subscriptions let viewers pay monthly for perks such as badges and subscriber-only interactions. Treat it like any membership: a clear promise, perks you can deliver, and fair treatment of non-paying viewers. Creator memberships covers the principles.",
      },
      {
        type: "paragraph",
        text: "Principles: creator memberships.",
        links: [{ text: "creator memberships", href: "/blog/creator-memberships" }],
      },
      { type: "heading", text: "Moderation and safety", id: "safety" },
      {
        type: "list",
        items: [
          "Appoint trusted moderators and use keyword filters.",
          "Don't share personal location details live.",
          "End the LIVE if it turns abusive; you don't owe anyone a stream.",
          "Be cautious with minors in your audience; don't encourage spending.",
          "Don't promise outcomes for Gifts (\"gift and I'll follow you\").",
        ],
      },
      { type: "heading", text: "Sponsored LIVE", id: "sponsored" },
      {
        type: "paragraph",
        text: "Brand segments on LIVE need disclosure at the start of the segment and again for people who join later, plus TikTok's content disclosure tools where applicable and your country's advertising rules. Agree talking points and claims beforehand; mistakes happen faster live.",
      },
      {
        type: "paragraph",
        text: "Disclosure: creator disclosure guide.",
        links: [{ text: "creator disclosure guide", href: "/blog/creator-disclosure-guide" }],
      },
      { type: "heading", text: "Measure", id: "measure" },
      {
        type: "paragraph",
        text: "Track average and peak viewers, viewer duration, new followers from LIVE, comments per minute, Gifts and subscriptions, and how many viewers return next time. Compare streams with the same format.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Unscheduled LIVEs with no format.",
          "Constant requests for Gifts.",
          "No moderators as the audience grows.",
          "Sponsored segments without disclosure.",
          "Ending without announcing the next one.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "TikTok LIVE rewards consistency and interaction. Check access and Gifts availability in your region, schedule a format, moderate well, disclose sponsors, and let support come from value rather than pressure.",
      },
    ],
    faqs: [
      {
        question: "What are the requirements to go LIVE on TikTok?",
        answer:
          "Requirements vary by region and account. To receive LIVE Gifts, TikTok requires creators to be 18 or older (19 in South Korea) and to be in a location where LIVE Gifts are available.",
      },
      {
        question: "How do TikTok LIVE Gifts turn into money?",
        answer:
          "Gifts you receive convert to Diamonds, which eligible creators can redeem under TikTok's terms.",
      },
      {
        question: "Is TikTok LIVE available in India?",
        answer:
          "No. TikTok isn't available in India. Indian creators can use YouTube Live and Instagram Live instead.",
      },
    ],
  },
  {
    slug: "tiktok-affiliate-marketing",
    category: "Creator Resources",
    title: "TikTok Affiliate Marketing: How Creators Can Earn From Product Recommendations",
    seoTitle: "TikTok Affiliate Marketing: How TikTok Shop Affiliate Works",
    excerpt:
      "How TikTok Shop affiliate works for creators in markets where TikTok Shop operates: eligibility basics, choosing products, showcases, video and LIVE formats that sell honestly, disclosure and tracking, plus Indian alternatives.",
    metaDescription:
      "TikTok Shop affiliate for creators: markets, eligibility basics, choosing products, showcase, shoppable video and LIVE formats, disclosure, and Indian alternatives.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "10 min read",
    tags: ["TikTok affiliate marketing", "TikTok Shop affiliate", "TikTok showcase", "TikTok product recommendations", "TikTok commissions"],
    related: ["tiktok-creator-monetization", "creator-product-recommendations", "youtube-affiliate-marketing"],
    body: [
      {
        type: "paragraph",
        text: "TikTok Shop turned product discovery into a checkout inside the app in the markets where it operates. For creators, the affiliate side means earning a commission when viewers buy products you feature. It also creates a strong temptation to push products you haven't tried, and audiences notice quickly.",
      },
      {
        type: "paragraph",
        text: "TikTok and TikTok Shop aren't available in India. This guide is for creators in TikTok Shop markets; Indian creators should see YouTube affiliate marketing and creator affiliate marketing in India.",
        links: [
          { text: "YouTube affiliate marketing", href: "/blog/youtube-affiliate-marketing" },
          { text: "creator affiliate marketing in India", href: "/blog/creator-affiliate-marketing-india" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "TikTok Shop affiliate lets eligible creators in TikTok Shop markets add sellers' products to their showcase, feature them in videos and LIVE with product links, and earn a commission set by the seller when viewers buy. Eligibility rules differ by market; in the US, for example, TikTok's creator eligibility policy covers age verification and follower thresholds, with a pilot route for smaller creators. Choose products you've used, demonstrate them honestly, disclose the commercial relationship and track sales and returns by video.",
      },
      { type: "heading", text: "Markets and eligibility", id: "eligibility" },
      {
        type: "paragraph",
        text: "TikTok Shop runs in selected markets, and the list has changed over time as TikTok enters or leaves markets. Eligibility is set per market: age verification, account standing and follower thresholds are common elements. In the US, TikTok's published creator eligibility policy includes age checks and a follower threshold, and describes a pilot programme for creators with fewer followers. Always check the policy for your market.",
      },
      {
        type: "paragraph",
        text: "Example policy: TikTok Shop US creator eligibility policy.",
        links: [{ text: "TikTok Shop US creator eligibility policy", href: SOURCES.tiktokShopCreatorEligibilityUs }],
      },
      { type: "heading", text: "Choose products you can stand behind", id: "products" },
      {
        type: "list",
        items: [
          "Order samples and use them before promoting.",
          "Check the seller's ratings, returns and delivery reliability.",
          "Prefer products that fit your niche and audience budget.",
          "Compare commission with the risk to your reputation if the product disappoints.",
        ],
      },
      {
        type: "paragraph",
        text: "Creator product recommendations explains a trust-first framework.",
      },
      {
        type: "paragraph",
        text: "Framework: creator product recommendations.",
        links: [{ text: "creator product recommendations", href: "/blog/creator-product-recommendations" }],
      },
      { type: "heading", text: "Formats that sell honestly", id: "formats" },
      {
        type: "table",
        headers: ["Format", "Why it works", "Honesty check"],
        rows: [
          ["Demo", "Viewers see it working", "Show the real result, not an edited ideal"],
          ["Before and after", "Clear transformation", "Same lighting, no filters, realistic time frame"],
          ["Comparison", "Helps decide", "Include a genuine downside"],
          ["Problem-solution", "Relatable", "Don't overstate the problem"],
          ["LIVE demo", "Questions answered live", "Answer \"does it work for X?\" truthfully"],
        ],
      },
      {
        type: "paragraph",
        text: "Shoppable formats across platforms are covered in creator shopping content.",
        links: [{ text: "creator shopping content", href: "/blog/shoppable-content-creators" }],
      },
      { type: "heading", text: "Disclosure", id: "disclosure" },
      {
        type: "paragraph",
        text: "Affiliate products are commercial content. Use TikTok's disclosure tools where applicable and say it clearly in the video. Follow the advertising rules of your country as well.",
      },
      { type: "heading", text: "Track and prune", id: "track" },
      {
        type: "paragraph",
        text: "Review sales, commission, returns and product ratings by video monthly. Drop products with high returns or complaints even if the commission is high; they cost trust.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Promoting products you've never used.",
          "Exaggerated before-and-after claims.",
          "Ignoring return rates.",
          "Assuming TikTok Shop is available in India.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "TikTok Shop affiliate works for creators who recommend products they understand, demonstrate them honestly and disclose clearly. Check your market's eligibility rules, pick products carefully and track returns as closely as sales.",
      },
    ],
    faqs: [
      {
        question: "Is TikTok Shop available in India?",
        answer:
          "No. TikTok isn't available in India. Indian creators can use YouTube Shopping and retailer affiliate programmes instead.",
      },
      {
        question: "How do TikTok Shop affiliate commissions work?",
        answer:
          "Sellers set commission rates for their products. Eligible creators feature products in their showcase, videos or LIVE, and earn commission when viewers buy.",
      },
      {
        question: "Do I need a lot of followers for TikTok Shop affiliate?",
        answer:
          "Thresholds vary by market. In the US, TikTok's creator eligibility policy includes a follower threshold and a pilot route for smaller creators. Check your market's policy.",
      },
    ],
  },
  {
    slug: "tiktok-analytics",
    category: "Creator Resources",
    title: "TikTok Creator Analytics: Metrics Every Creator Should Track",
    seoTitle: "TikTok Analytics: Metrics Every Creator Should Track",
    excerpt:
      "The TikTok metrics that matter for creators: views, watch time and average watch time, full video watches, traffic sources including search, new followers, audience location and a weekly review routine.",
    metaDescription:
      "TikTok analytics for creators: views, watch time, completion, traffic sources and search, followers gained, audience location and a weekly review routine.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "10 min read",
    tags: ["TikTok analytics", "TikTok metrics", "TikTok Studio analytics", "TikTok watch time", "TikTok traffic sources"],
    related: ["tiktok-content-strategy", "short-form-video-analytics", "tiktok-creator-rewards-program"],
    body: [
      {
        type: "paragraph",
        text: "TikTok gives creators plenty of numbers. The useful ones answer three questions: did people stop, did they stay, and did they come back for more? Everything else is context.",
      },
      {
        type: "paragraph",
        text: "TikTok isn't available in India. This guide is for creators where TikTok operates; for Reels and Shorts metrics, see short-form video analytics. Metric names and availability vary by account and app version.",
        links: [{ text: "short-form video analytics", href: "/blog/short-form-video-analytics" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "The TikTok metrics most creators should track are views, average watch time relative to video length, the share of viewers who watched the full video, traffic sources (For You, search, profile, following), search terms where shown, shares and saves, new followers per video, and audience location and age. Compare videos of similar length and format against your own recent averages, and review weekly.",
      },
      { type: "heading", text: "The metrics that matter", id: "metrics" },
      {
        type: "table",
        headers: ["Question", "Metric", "Why"],
        rows: [
          ["Did people stop?", "Views; early retention where shown", "Hook quality"],
          ["Did they stay?", "Average watch time; watched full video", "Pacing and payoff"],
          ["Did it spread?", "Shares, saves", "Usefulness and relatability"],
          ["Where did views come from?", "Traffic sources, search terms", "For You vs search strategy"],
          ["Did it grow the account?", "New followers from the video", "Conversion to audience"],
          ["Who is watching?", "Audience location, age, gender", "Brand fit, language choice"],
        ],
      },
      { type: "heading", text: "Normalise before comparing", id: "normalise" },
      {
        type: "list",
        items: [
          "Average watch time ÷ video length gives a comparable attention figure.",
          "Followers per 1,000 views compares growth across videos with different reach.",
          "Shares plus saves per 1,000 views compares value.",
        ],
      },
      { type: "heading", text: "Search traffic", id: "search" },
      {
        type: "paragraph",
        text: "If a video's traffic sources show a meaningful search share, it's working as a search video. Where TikTok shows the search terms that led to it, note them and make follow-ups. TikTok SEO and TikTok content gaps explain how to plan for search.",
        links: [
          { text: "TikTok SEO", href: "/blog/tiktok-seo" },
          { text: "TikTok content gaps", href: "/blog/tiktok-content-gaps" },
        ],
      },
      { type: "heading", text: "Audience location", id: "location" },
      {
        type: "paragraph",
        text: "For Indian-origin creators abroad, audience location is a strategic number. It tells you whether you're reaching the diaspora audience in your country, a local audience, or a mix, which affects language choices and which brands will value you. If you're in TikTok's Creator Rewards Program, also track which videos qualify and earn.",
        links: [{ text: "TikTok's Creator Rewards Program", href: "/blog/tiktok-creator-rewards-program" }],
      },
      { type: "heading", text: "Weekly review routine", id: "routine" },
      {
        type: "template",
        label: "Weekly TikTok review (20 minutes)",
        text: "1. List the week's videos with length and format\n2. Add: views, avg watch time ÷ length, followers per 1,000 views, shares+saves per 1,000 views, search share\n3. Mark best and worst on followers per 1,000 views\n4. Write one reason for each\n5. Decide next week's repeat, change and drop",
      },
      { type: "heading", text: "Reporting to brands", id: "brands" },
      {
        type: "paragraph",
        text: "Share views, reach where available, engagement, audience location and age, and link clicks or sales where tracked, all dated and from TikTok's analytics. Add context against your averages. Creator campaign reporting has a template.",
      },
      {
        type: "paragraph",
        text: "Template: creator campaign reporting.",
        links: [{ text: "creator campaign reporting", href: "/blog/creator-campaign-reporting" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Comparing a 15-second video with a 3-minute one.",
          "Treating views as people.",
          "Ignoring traffic sources.",
          "Judging a video in its first hour.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "TikTok analytics is useful when it answers stop, stay and come back. Normalise, check traffic sources and search, watch audience location and review weekly. The same discipline works on Reels and Shorts.",
      },
    ],
    faqs: [
      {
        question: "What is a good average watch time on TikTok?",
        answer:
          "It depends on length. Compare average watch time as a share of video length against your own recent videos of similar length.",
      },
      {
        question: "How do I see if my TikTok video got search traffic?",
        answer:
          "Check the video's traffic sources for search, and the search terms shown for the video where TikTok provides them.",
      },
      {
        question: "Which TikTok metric matters most for growth?",
        answer:
          "New followers per video, especially relative to views, shows whether a video converted viewers into an audience.",
      },
    ],
  },
  {
    slug: "tiktok-vs-instagram-reels",
    category: "Creator Resources",
    title: "TikTok vs Instagram Reels: How Creators Can Adapt Content Across Both Platforms",
    seoTitle: "TikTok vs Instagram Reels: How to Adapt Content for Both",
    excerpt:
      "How TikTok and Instagram Reels differ for creators, what to change when adapting a video between them (watermarks, captions, audio, length, search, formats), and what it means for Indian creators, where only Reels is available.",
    metaDescription:
      "TikTok vs Reels for creators: differences in discovery, search, audio, originality and monetization, and a checklist for adapting videos between them, with an India note.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "10 min read",
    tags: ["TikTok vs Instagram Reels", "cross-posting TikTok to Reels", "adapt content for Reels", "short-form cross-platform", "TikTok and Reels differences"],
    related: ["tiktok-content-strategy", "reels-content-strategy", "content-repurposing-for-creators"],
    body: [
      {
        type: "paragraph",
        text: "The same 30-second idea can work on TikTok and Reels, but the same file often doesn't. Watermarks, audio licensing, caption conventions, search behaviour and each platform's attitude to reposted content all differ. Adapting well means changing a few things deliberately rather than uploading twice.",
      },
      {
        type: "paragraph",
        text: "For Indian creators, the choice is simpler: TikTok isn't available in India, so Reels (and Shorts) is where Indian audiences are. This guide is for creators whose audiences span countries, and for India-based creators who learn from TikTok creators abroad.",
      },
      {
        type: "paragraph",
        text: "Related: Reels content strategy and content repurposing for creators.",
        links: [
          { text: "Reels content strategy", href: "/blog/reels-content-strategy" },
          { text: "content repurposing for creators", href: "/blog/content-repurposing-for-creators" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "TikTok and Instagram Reels both reward original short videos with strong openings, but differ in audience, search behaviour, audio libraries, monetization and how they treat reposted content. To adapt a video: export a clean version without the other platform's watermark, replace platform-specific audio with licensed or original sound, rewrite captions and on-screen text for each platform's search, adjust length and pacing, and use each platform's native features (Trial Reels on Instagram, playlists on TikTok). Instagram says it's less likely to recommend content with other apps' watermarks.",
      },
      { type: "heading", text: "Key differences", id: "differences" },
      {
        type: "table",
        headers: ["Area", "TikTok", "Instagram Reels"],
        rows: [
          ["Availability in India", "Not available", "Available"],
          ["Discovery", "For You feed, strong search", "Reels feed, Explore, search, followers' feeds"],
          ["Relationship layer", "Profile, LIVE", "Stories, broadcast channels, DMs, Live"],
          ["Reposted content", "Originality affects rewards", "Less likely to recommend watermarked or reposted content"],
          ["Monetization", "Creator Rewards, LIVE Gifts, TikTok Shop (where available)", "Gifts, Subscriptions, badges, branded content"],
          ["Testing", "Manual tests", "Trial Reels"],
        ],
      },
      { type: "heading", text: "Adaptation checklist", id: "checklist" },
      {
        type: "template",
        label: "Before cross-posting",
        text: "☐ Export from your editor without any app watermark\n☐ Replace trending app audio with licensed or original sound where needed\n☐ Rewrite the caption for each platform's search phrasing\n☐ Re-check on-screen text safe zones (interfaces differ)\n☐ Adjust length: trim slow sections for the platform where attention is shorter for you\n☐ Change the cover or first frame if the platform shows it differently\n☐ Use native features (Trial Reels, playlists, Collab posts)\n☐ Keep disclosure consistent for sponsored content on both",
      },
      {
        type: "paragraph",
        text: "Instagram's originality guidance: Instagram's recommendations and originality guidance.",
        links: [{ text: "Instagram's recommendations and originality guidance", href: SOURCES.instagramOriginality }],
      },
      { type: "heading", text: "Adapt the idea, not just the file", id: "adapt" },
      {
        type: "list",
        items: [
          "The same topic may need a different hook for each audience.",
          "On Reels, pair the video with Stories or a channel message to reach existing followers.",
          "On TikTok, series and playlists help viewers binge.",
          "Language choices can differ if your audiences are in different countries.",
        ],
      },
      { type: "heading", text: "For Indian creators", id: "india" },
      {
        type: "paragraph",
        text: "If your audience is in India, don't plan around TikTok at all. Use TikTok creators' public work as inspiration, then build for Reels and Shorts with original content. Instagram content strategy and YouTube Shorts vs long-form cover the systems.",
        links: [
          { text: "Instagram content strategy", href: "/blog/instagram-content-strategy" },
          { text: "YouTube Shorts vs long-form", href: "/blog/youtube-shorts-vs-long-form" },
        ],
      },
      { type: "heading", text: "Brand deals across both", id: "brands" },
      {
        type: "paragraph",
        text: "If a brand books both platforms, price and report each separately; audiences, reach and formats differ. Confirm usage rights cover each platform. Creator usage rights explains platform-specific usage.",
      },
      {
        type: "paragraph",
        text: "Rights: creator usage rights.",
        links: [{ text: "creator usage rights", href: "/blog/creator-usage-rights" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Uploading TikTok-watermarked videos to Reels.",
          "Copying TikTok captions word for word.",
          "Using app audio that isn't licensed for the other platform or for branded content.",
          "Reporting combined numbers to brands.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "TikTok and Reels share a format, not a rulebook. Export clean files, fix audio and captions, use each platform's native tools, and report separately. For Indian audiences, the whole strategy lives on Reels and Shorts.",
      },
    ],
    faqs: [
      {
        question: "Can I post the same video on TikTok and Instagram Reels?",
        answer:
          "You can, but adapt it: remove other apps' watermarks, use licensed or original audio, rewrite captions for search and use each platform's native features.",
      },
      {
        question: "Does Instagram penalise TikTok watermarks?",
        answer:
          "Instagram says it's less likely to recommend content that is reposted from other apps or carries their watermarks.",
      },
      {
        question: "Should Indian creators plan content for TikTok?",
        answer:
          "Not for Indian audiences, as TikTok isn't available in India. Instagram Reels and YouTube Shorts are the relevant short-form platforms.",
      },
    ],
  },
];
