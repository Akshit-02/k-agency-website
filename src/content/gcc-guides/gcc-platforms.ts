import type { BlogPost } from "@/content/blog";
import { AUTHOR, GCC3_PUBLISHED, GCC_LANGUAGE, GCC_PLAYBOOK, GCC_REVIEWED, REVIEW_DATE_TEXT, SAUDI_HUB, SRC, UAE_HUB } from "@/content/gcc-guides/shared";

/** Batch 1440–1459: platform, format and sourcing guides (1440, 1441, 1443, 1444, 1448). */
export const gccPlatformPosts: BlogPost[] = [
  // 1440
  {
    slug: "instagram-vs-tiktok-vs-snapchat-uae",
    category: "Campaign Strategy",
    title: "Instagram vs TikTok vs Snapchat in the UAE: Which Platform Fits Your Campaign?",
    seoTitle: "Instagram vs TikTok vs Snapchat in the UAE: Choosing a Platform",
    excerpt:
      "How to choose between Instagram, TikTok and Snapchat for a UAE creator campaign: what each platform is good and bad at, which audiences and objectives suit it, creator fit, tracking and paid amplification, and when to combine them.",
    metaDescription:
      "Instagram vs TikTok vs Snapchat for UAE influencer campaigns: strengths, limits, audiences, objectives, creator fit, tracking, amplification and combinations.",
    author: AUTHOR,
    publishedAt: GCC3_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "10 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "United Arab Emirates",
    breadcrumbParents: [UAE_HUB],
    tags: ["Instagram vs TikTok vs Snapchat UAE", "best platform influencer marketing UAE", "TikTok vs Instagram Dubai", "Snapchat influencer marketing UAE"],
    related: ["influencer-marketing-uae", "arabic-vs-english-influencer-campaigns-uae", "tiktok-influencer-marketing-saudi-arabia"],
    hero: {
      src: "/blog/gcc-guides/instagram-vs-tiktok-vs-snapchat-uae.svg",
      alt: "Instagram, TikTok and Snapchat compared for UAE creator campaigns by main dynamic, best objective, format and tracking",
    },
    body: [
      {
        type: "paragraph",
        text: "'Which platform is best in the UAE?' has no single answer, and articles that give one usually generalize from a different market or a different objective. Instagram, TikTok and Snapchat each reach millions of UAE residents and each does a different job. The useful question is which one fits the audience you need and the result you're paying for.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "In the UAE, Instagram usually suits visual lifestyle categories, polished creator content and audiences across expatriate communities; TikTok suits discovery, demonstrations and reaching people who don't yet follow the creator; Snapchat suits trusted, everyday recommendation, especially with Emirati and wider Gulf audiences. Choose by objective and by where your specific audience spends time, confirm it with each shortlisted creator's audience data, and combine platforms when one does reach and another builds trust. No platform is best for every campaign.",
      },
      { type: "heading", text: "Reach in the UAE", id: "reach" },
      {
        type: "paragraph",
        text: "DataReportal's Digital 2026 UAE report (published November 2025) gives these late-2025 advertising-audience figures. They're platform-reported ad reach, not active users, and TikTok's figure exceeds the adult population, so use them to confirm that all three are large, not to rank them.",
        links: [{ text: "DataReportal's Digital 2026 UAE report", href: SRC.datareportalUae.url }],
      },
      {
        type: "table",
        headers: ["Platform", "Ad reach (late 2025)", "Share"],
        rows: [
          ["Instagram", "8.05 million", "70.5% of population"],
          ["TikTok (18+)", "12.5 million", "Above the adult population (treat with caution)"],
          ["Snapchat", "5.13 million", "44.9% of population"],
        ],
      },
      { type: "heading", text: "How the three platforms differ", id: "comparison" },
      {
        type: "table",
        headers: ["", "Instagram", "TikTok", "Snapchat"],
        rows: [
          ["Main dynamic", "Following creators and browsing visual content", "Recommendation feed; discovering creators you don't follow", "Following people through their day in Stories"],
          ["Strongest at", "Visual products, lifestyle, aspiration, polished creator content", "Reach, demonstrations, trends, entertainment-led messages", "Trust, repetition, local recommendations"],
          ["Weaker at", "Reaching beyond a creator's followers without paid support", "Sustained trust from a single post; older or professional audiences", "Polished brand storytelling; broad discovery"],
          ["Typical formats", "Reels, carousels, Stories, collaborative posts", "Short videos, series, Lives", "Story series, Spotlight, AR Lenses"],
          ["Audience notes", "Broad across expatriate communities and nationals", "Broad and young; strong discovery behavior", "Often cited as especially strong with Emirati and Gulf audiences"],
          ["Tracking", "Link stickers in Stories, bio links, codes", "Bio links, codes, boosted videos with conversion tracking", "Link stickers in Stories, codes, insights screenshots"],
        ],
      },
      {
        type: "paragraph",
        text: "The audience notes are general observations from practitioners, not measured shares. Check them against each creator's own audience breakdown.",
      },
      { type: "heading", text: "Match the platform to the objective", id: "objectives" },
      {
        type: "table",
        headers: ["Objective", "Usually leads with", "Supporting role"],
        rows: [
          ["Awareness for a launch", "TikTok for reach; Instagram for visual impact", "Snapchat for Gulf audiences"],
          ["Consideration", "Instagram carousels and Reels; TikTok demonstrations", "YouTube for longer reviews"],
          ["Sales from your store", "Instagram and TikTok with codes, links and boosting", "Snapchat follow-ups from trusted creators"],
          ["Footfall to a venue", "Snapchat and Instagram Stories from local creators", "TikTok for openings and events"],
          ["Reaching Emirati nationals", "Snapchat and Instagram with Emirati creators", "TikTok for younger audiences"],
          ["Reaching a specific expatriate community", "Whichever platform that community's creators use most", "Facebook and YouTube for some communities"],
        ],
      },
      { type: "heading", text: "Creator fit by platform", id: "creators" },
      {
        type: "list",
        items: [
          "Instagram: look at Reels views relative to followers, saves and comment quality, not just likes",
          "TikTok: judge typical views across the last 15 to 20 videos; one viral video says little",
          "Snapchat: ask for dated Story insights (views per Story, link taps, screenshots); public numbers are limited",
          "On every platform: the share of the creator's audience in the UAE, and in which emirate",
          "Many creators are strong on one platform and weak on another; price and plan per platform",
        ],
      },
      {
        type: "paragraph",
        text: "Why audience location matters as much as platform is explained in influencer audience quality.",
        links: [{ text: "influencer audience quality", href: "/blog/influencer-audience-quality" }],
      },
      { type: "heading", text: "Paid amplification", id: "paid" },
      {
        type: "paragraph",
        text: "All three platforms let advertisers run creator content as ads in some form, typically with the creator's authorization and sometimes through the creator's own handle. Tool names, eligibility and availability vary by account and change over time, so confirm what's enabled in your UAE ad accounts before contracting. Agree paid usage, duration and handle access in the creator contract and price it separately.",
      },
      { type: "heading", text: "Measurement", id: "measurement" },
      {
        type: "list",
        items: [
          "Report each platform separately: engagement means different things on each",
          "Use views or reach as the denominator for engagement on TikTok and Snapchat, not followers",
          "Track clicks and conversions per creator and per platform with unique links and codes",
          "Separate organic results from boosted results",
          "Compare platforms on cost per result for your objective, not on engagement rate",
        ],
      },
      {
        type: "paragraph",
        text: "How to read engagement rates without misleading yourself is covered in how to calculate influencer engagement rate.",
        links: [{ text: "how to calculate influencer engagement rate", href: "/blog/influencer-engagement-rate" }],
      },
      { type: "heading", text: "When to combine platforms", id: "combine" },
      {
        type: "list",
        items: [
          "Launches: TikTok for reach, Instagram for considered visual content, Snapchat for trusted follow-up",
          "Venues: Snapchat and Instagram Stories for locals, TikTok for the opening buzz",
          "E-commerce: TikTok and Instagram for discovery, boosted content for scale, creator codes on both",
          "Keep the same creator across two platforms where they're strong on both; it reinforces the message",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Picking a platform because it's 'the best' in a report rather than for your audience",
          "Comparing engagement rates across platforms as if they measured the same thing",
          "Booking Snapchat creators without asking for Story insights",
          "Running one creative across all three platforms unchanged",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Instagram, TikTok and Snapchat are all large in the UAE, and each wins different campaigns. Start from the audience and the result you need, check each creator's audience data, and use more than one platform when the jobs differ. For the wider UAE context, including permits and language, see our UAE influencer marketing guide.",
        links: [{ text: "UAE influencer marketing guide", href: "/blog/influencer-marketing-uae" }],
      },
    ],
    faqs: [
      {
        question: "Is TikTok or Instagram better for influencer marketing in the UAE?",
        answer:
          "Neither is better for every campaign. TikTok is usually stronger for discovery and demonstrations; Instagram for visual lifestyle categories and polished creator content. Choose by objective and audience, and check each creator's data.",
      },
      {
        question: "Is Snapchat still worth using in the UAE?",
        answer:
          "Yes for many campaigns. Its advertising reach in the UAE was about 5.1 million in late 2025, and it's often cited as especially strong with Emirati and Gulf audiences and for trusted, everyday recommendations.",
      },
      {
        question: "How should brands compare results across platforms?",
        answer:
          "Report each platform separately and compare on cost per result for your objective. Engagement rates are calculated differently and aren't comparable across platforms.",
      },
    ],
  },
  // 1441
  {
    slug: "youtube-influencer-marketing-saudi-arabia",
    category: "Campaign Strategy",
    title: "YouTube Influencer Marketing in Saudi Arabia: When Long-Form Creator Content Makes Sense",
    seoTitle: "YouTube Influencer Marketing in Saudi Arabia: A Brand Guide",
    excerpt:
      "When YouTube creators are the right choice for Saudi campaigns: long-form reviews, demonstrations and comparisons for considered purchases, integration formats, choosing Saudi creators, attribution over months rather than days, and how YouTube fits with TikTok and Snapchat.",
    metaDescription:
      "YouTube influencer marketing in Saudi Arabia: reviews and demos for considered purchases, integration formats, Saudi creators, attribution and platform mix.",
    author: AUTHOR,
    publishedAt: GCC3_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "10 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "Saudi Arabia",
    breadcrumbParents: [SAUDI_HUB],
    tags: ["YouTube influencer marketing Saudi Arabia", "YouTube creators Saudi Arabia", "YouTube reviews KSA", "long-form influencer content Saudi"],
    related: ["influencer-marketing-saudi-arabia", "tiktok-influencer-marketing-saudi-arabia", "automotive-influencer-marketing-uae-saudi-arabia"],
    hero: {
      src: "/blog/gcc-guides/youtube-influencer-marketing-saudi-arabia.svg",
      alt: "Where YouTube fits in a Saudi creator campaign: discovery on TikTok and Snapchat, consideration through long-form YouTube reviews, then purchase",
    },
    body: [
      {
        type: "paragraph",
        text: "TikTok and Snapchat get most of the attention in Saudi creator marketing, but YouTube reaches a very large share of the Kingdom too: 27.5 million in late 2025, or 79.2% of the population, by its own ad tools as reported by DataReportal. Its role is different. People go to YouTube when they want to understand something before they spend money on it, which makes it the natural home for reviews, comparisons and demonstrations.",
        links: [{ text: "as reported by DataReportal", href: SRC.datareportalKsa.url }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "YouTube influencer marketing makes sense in Saudi Arabia when the purchase needs explanation: cars, electronics, appliances, financial products, education, gaming, travel and premium beauty. Use integrations or dedicated reviews from Saudi creators who already cover the category, give them the product early enough to use it properly, and measure over months rather than days, because long-form videos keep getting found through search. Track with description links, codes and branded search, and pair YouTube with TikTok or Snapchat for discovery. Creators need a Mawthooq licence and must disclose the paid relationship.",
      },
      { type: "heading", text: "When YouTube is the right choice", id: "when" },
      {
        type: "table",
        headers: ["Situation", "Why YouTube fits"],
        rows: [
          ["High-price or complex products", "Viewers watch long reviews before deciding"],
          ["Products people search for by name", "Videos rank in YouTube and Google search for months"],
          ["Comparisons and 'is it worth it?' questions", "Long-form allows pros, cons and alternatives"],
          ["Tutorials and setup", "Reduces returns and support requests"],
          ["Categories with established YouTube audiences, such as tech, cars, gaming and cooking", "Creators already have trusted, engaged viewers"],
        ],
      },
      {
        type: "paragraph",
        text: "Two categories where this matters most have their own guides: automotive brands in the UAE and Saudi Arabia, and technology brands in the GCC.",
        links: [
          { text: "automotive brands in the UAE and Saudi Arabia", href: "/blog/automotive-influencer-marketing-uae-saudi-arabia" },
          { text: "technology brands in the GCC", href: "/blog/technology-influencer-marketing-gcc" },
        ],
      },
      {
        type: "paragraph",
        text: "It's usually a weaker choice for impulse purchases, short-lived offers or venue footfall, where TikTok and Snapchat move faster.",
      },
      { type: "heading", text: "Formats", id: "formats" },
      {
        type: "table",
        headers: ["Format", "What it is", "Best for"],
        rows: [
          ["Integration", "A segment of 60 to 120 seconds inside a regular video", "Awareness with credibility; cost-efficient"],
          ["Dedicated review", "A whole video about the product", "Considered purchases; strongest search value"],
          ["Comparison", "Your product against alternatives the audience considers", "Category leaders and challengers confident in their product"],
          ["Tutorial or setup", "How to use or get the most from the product", "Post-purchase satisfaction, fewer returns"],
          ["Series", "Several videos over weeks, such as a long-term test", "Durability, results over time"],
          ["Shorts", "Short vertical videos", "Reach and cut-downs from longer content"],
        ],
      },
      {
        type: "paragraph",
        text: "Comparisons must be fair and accurate, and creators shouldn't disparage named competitors. Agree factual claims, prices and availability in writing.",
      },
      { type: "heading", text: "Choosing Saudi YouTube creators", id: "creators" },
      {
        type: "list",
        items: [
          "Category expertise: their last 10 videos should be about your category, not a one-off",
          "Saudi audience share, from YouTube Studio's geography report, shared as a dated screenshot",
          "Typical views over the first 30 days, not lifetime views on a few hits",
          "Average view duration: long-form only works if people actually watch",
          "Comment quality: real questions in Saudi Arabic about the product category",
          "Sponsorship history and disclosure practice",
          "A current Mawthooq licence for paid promotion",
        ],
      },
      { type: "heading", text: "Briefing for long-form", id: "brief" },
      {
        type: "list",
        items: [
          "Send the product early: a real review needs real use, sometimes weeks",
          "Give key facts, approved claims, prices and availability in Saudi Arabia",
          "Agree what's mandatory (for example the product name and where to buy), and leave the verdict to the creator",
          "Agree whether you see the video before publishing, limited to factual accuracy",
          "Agree the description link, pinned comment, code and disclosure in Arabic",
          "Agree how long the video stays public; long-form value comes from staying up",
        ],
      },
      { type: "heading", text: "Attribution over months, not days", id: "attribution" },
      {
        type: "paragraph",
        text: "A YouTube review keeps working long after launch week. Measure with that in mind.",
      },
      {
        type: "list",
        items: [
          "Description links with UTM parameters, and codes that stay valid for months",
          "Views and watch time at 7, 30 and 90 days",
          "Branded search and direct traffic over the following weeks",
          "Leads or bookings asking 'where did you hear about us?', for cars, finance and services",
          "Retailer or marketplace sales of the reviewed model",
        ],
      },
      {
        type: "paragraph",
        text: `Checked ${REVIEW_DATE_TEXT}: YouTube's shopping affiliate program was not listed for Saudi Arabia in the sources we reviewed, so plan around description links and codes rather than in-video product tagging. Creator-partnership and ad tools also vary by market; confirm what's available in your account.`,
      },
      { type: "heading", text: "How YouTube fits with TikTok and Snapchat", id: "mix" },
      {
        type: "table",
        headers: ["Stage", "Platform role"],
        rows: [
          ["Discovery", "TikTok and Snapchat introduce the product"],
          ["Consideration", "YouTube reviews and comparisons answer the hard questions"],
          ["Purchase", "Codes and links from any platform; boosted content for scale"],
          ["After purchase", "YouTube tutorials reduce returns and support load"],
        ],
      },
      {
        type: "paragraph",
        text: "The discovery side is covered in TikTok influencer marketing in Saudi Arabia, and the market overview in influencer marketing in Saudi Arabia.",
        links: [
          { text: "TikTok influencer marketing in Saudi Arabia", href: "/blog/tiktok-influencer-marketing-saudi-arabia" },
          { text: "influencer marketing in Saudi Arabia", href: "/blog/influencer-marketing-saudi-arabia" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Judging a YouTube campaign after one week",
          "Sending the product too late for an honest review",
          "Choosing creators by subscriber count instead of recent views and watch time",
          "Codes that expire while the video is still being watched",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "In Saudi Arabia, YouTube is where considered purchases get decided. Use it for products that need explaining, choose creators with real category expertise and Saudi audiences, give them time to review honestly, and measure the long tail rather than the launch week.",
      },
    ],
    faqs: [
      {
        question: "Is YouTube effective for influencer marketing in Saudi Arabia?",
        answer:
          "It's especially effective for considered purchases such as cars, electronics, finance and premium products, where viewers watch long reviews before deciding. Its advertising reach in Saudi Arabia was 27.5 million in late 2025.",
      },
      {
        question: "Should brands choose a YouTube integration or a dedicated video?",
        answer:
          "Integrations are cost-efficient for credible awareness; dedicated reviews suit considered purchases and keep earning search views longer. Many brands test integrations first, then commission dedicated reviews from the best performers.",
      },
      {
        question: "How long should a YouTube campaign be measured?",
        answer:
          "At least 30 to 90 days, with codes and links that stay valid, because long-form videos keep being found through search.",
      },
    ],
  },
  // 1443
  {
    slug: "influencer-livestream-campaigns-gcc",
    category: "Campaign Strategy",
    title: "Influencer Livestream Campaigns in the GCC: How Brands Should Plan and Measure Them",
    seoTitle: "Influencer Livestreams in the GCC: Planning and Measurement",
    excerpt:
      "How to plan creator livestreams for UAE, Saudi and other GCC audiences: which platforms support what, why not to assume native live shopping, planning the run of show, moderation in Arabic, product demonstrations, giveaways and permits, contingencies and measurement.",
    metaDescription:
      "Planning influencer livestreams in the GCC: platform features, live shopping availability, run of show, Arabic moderation, giveaways and permits, measurement.",
    author: AUTHOR,
    publishedAt: GCC3_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "10 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "Gulf Cooperation Council countries",
    breadcrumbParents: [GCC_PLAYBOOK],
    tags: ["influencer livestream GCC", "live shopping UAE Saudi", "TikTok LIVE brand campaign", "livestream influencer campaign planning"],
    related: ["instagram-live-influencer-marketing", "tiktok-influencer-marketing-saudi-arabia", "influencer-affiliate-marketing-uae-saudi-arabia"],
    hero: {
      src: "/blog/gcc-guides/influencer-livestream-campaigns-gcc.svg",
      alt: "Livestream campaign timeline: announce, rehearse, go live with demo and Arabic moderation, link or code during the window, then measure",
    },
    body: [
      {
        type: "paragraph",
        text: "Livestreams can do things recorded content can't: answer questions in real time, show a product unedited and create a moment people turn up for. In the GCC they're often pitched as 'live shopping', borrowing from China and Southeast Asia. Before planning around that, check what's actually available in the countries you're targeting, because native in-stream checkout is not something brands can assume in the Gulf.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Plan GCC livestreams as live content events with an off-platform next step, unless a platform confirms native shopping for your business in that country. Choose a creator who is comfortable live and speaks the audience's dialect, write a run of show with the product demonstration and key messages, assign a moderator for Arabic and English comments, prepare answers and a contingency plan, and give viewers a link or time-limited code to act on. Check permits before running giveaways or discounts, disclose the partnership, and measure peak and average viewers, watch time, comments, link clicks and code redemptions in the live window.",
      },
      { type: "heading", text: "What platforms support, and what to check", id: "platforms" },
      {
        type: "table",
        headers: ["Platform", "Live features", "Commerce in the GCC (as reviewed)"],
        rows: [
          ["TikTok LIVE", "Live video, comments, co-hosting; gifts", "In-app shopping depends on TikTok Shop; we couldn't confirm an official launch for sellers in the UAE or Saudi Arabia"],
          ["Instagram Live", "Live video, comments, guests", "Instagram ended product tagging in Lives in March 2023; use links, codes or comment-to-message flows"],
          ["YouTube Live", "Live video, chat, longer formats", "YouTube's shopping affiliate program wasn't listed for the UAE or Saudi Arabia in sources we reviewed"],
          ["Marketplace or retailer streams", "Some retailers and marketplaces run their own live events", "Depends on the retailer; ask directly"],
        ],
      },
      {
        type: "paragraph",
        text: `Checked ${REVIEW_DATE_TEXT}. Instagram's live shopping shutdown was reported by Engadget. Platform features change; confirm with each platform for your account and country before you plan the commerce side.`,
        links: [{ text: "reported by Engadget", href: SRC.igLiveShoppingEnd.url }],
      },
      { type: "heading", text: "Good reasons to go live", id: "reasons" },
      {
        type: "list",
        items: [
          "Launches where people want to see the product unedited and ask questions",
          "Products that need demonstration: beauty, electronics, cooking, fitness equipment",
          "Q&As with experts or founders",
          "Seasonal moments when audiences are online in the evening, such as Ramadan nights",
          "Events: a store opening, a show or a behind-the-scenes visit",
        ],
      },
      { type: "heading", text: "Planning the stream", id: "planning" },
      {
        type: "table",
        headers: ["Element", "What to prepare"],
        rows: [
          ["Creator", "Someone who is natural live, knows the product and speaks the audience's dialect"],
          ["Run of show", "Opening, demonstration, key messages, Q&A, call to action, close; with timings"],
          ["Product", "Samples for demonstration, backups, any setup done in advance"],
          ["Facts", "Approved claims, prices, availability and offer terms the creator can repeat accurately"],
          ["Moderation", "A named moderator watching comments in Arabic and English, with answers to likely questions"],
          ["Call to action", "A link in bio or Stories, and a code valid for the live window"],
          ["Technical", "Stable connection, lighting, sound, a second device, a test stream"],
          ["Timing", "When the creator's audience is actually online; announce in advance"],
        ],
      },
      { type: "heading", text: "Creator responsibilities", id: "responsibilities" },
      {
        type: "list",
        items: [
          "Disclose the partnership clearly at the start and again during long streams",
          "Stick to approved claims; say 'I'll find out' rather than guess",
          "Don't answer medical, legal or financial questions beyond the approved script",
          "Follow content standards in the country being targeted",
          "Hand off customer service questions to the brand's channels",
        ],
      },
      { type: "heading", text: "Giveaways, discounts and permits", id: "permits" },
      {
        type: "paragraph",
        text: "Live giveaways and limited-time discounts are common, and they're regulated in several GCC countries. In Saudi Arabia, discounts and contests need a Ministry of Commerce licence before they run. In the UAE, promotions may need a permit from the relevant emirate's economic department. Kuwait's new media law, as reported, requires prior permits for draws and giveaways once it applies. Check the rules for each country before announcing anything on a stream, and make sure live terms match the licensed terms. Country summaries are in Saudi influencer advertising rules and the UAE influencer marketing guide.",
        links: [
          { text: "Saudi influencer advertising rules", href: "/blog/saudi-influencer-advertising-rules" },
          { text: "UAE influencer marketing guide", href: "/blog/influencer-marketing-uae" },
        ],
      },
      { type: "heading", text: "Contingency plan", id: "contingency" },
      {
        type: "list",
        items: [
          "Connection drops: a backup device and a plan to restart, announced in Stories",
          "Product fails on camera: acknowledge it honestly; have a backup unit",
          "Hostile or off-topic comments: moderator removes or hides according to agreed rules",
          "A question the creator can't answer: moderator posts the answer or a follow-up link",
          "Low turnout: record the stream for later highlights; don't judge on live viewers alone",
        ],
      },
      { type: "heading", text: "Measurement", id: "measurement" },
      {
        type: "table",
        headers: ["Metric", "Definition"],
        rows: [
          ["Peak concurrent viewers", "Highest number watching at once"],
          ["Total viewers", "Unique accounts that joined"],
          ["Average watch time", "How long viewers stayed"],
          ["Comments and questions", "Volume and quality; recurring objections"],
          ["Link clicks", "Clicks on the tracked link during and after the stream"],
          ["Code redemptions", "Orders using the live code within its window"],
          ["Replay views", "Views of the saved stream or highlights afterwards"],
          ["Cost per result", "Creator fee, production and any media ÷ conversions"],
        ],
      },
      {
        type: "paragraph",
        text: "Instagram-specific planning is in Instagram Live influencer marketing, and affiliate and code tracking across the UAE and Saudi Arabia in influencer affiliate marketing in the UAE and Saudi Arabia.",
        links: [
          { text: "Instagram Live influencer marketing", href: "/blog/instagram-live-influencer-marketing" },
          { text: "influencer affiliate marketing in the UAE and Saudi Arabia", href: "/blog/influencer-affiliate-marketing-uae-saudi-arabia" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Building a plan around in-app checkout that isn't available in your market",
          "No moderator, so questions go unanswered and comments go unchecked",
          "Announcing a giveaway without the required permit",
          "Judging success only on live viewer numbers",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Livestreams work in the GCC when they're treated as live events with a clear next step, not as a shortcut to in-app sales. Choose a confident creator, prepare the run of show and moderation, check permits for anything you give away, and measure the whole window, including replays.",
      },
    ],
    faqs: [
      {
        question: "Is live shopping available in the UAE and Saudi Arabia?",
        answer:
          "As of October 2026 we couldn't confirm native in-stream shopping from TikTok, Instagram or YouTube for sellers in either country. Instagram ended live product tagging in 2023. Plan for links and codes unless a platform confirms availability for your business.",
      },
      {
        question: "Do livestream giveaways need a permit in the GCC?",
        answer:
          "Often, yes. Saudi Arabia requires a Ministry of Commerce licence for contests and discounts, UAE emirates may require promotion permits, and Kuwait's new media law requires prior permits for draws once it applies. Check each country.",
      },
      {
        question: "How should brands measure an influencer livestream?",
        answer:
          "Look at peak and total viewers, average watch time, comments, link clicks and code redemptions in the live window, plus replay views and cost per result.",
      },
    ],
  },
  // 1444
  {
    slug: "find-micro-influencers-saudi-arabia",
    category: "Influencer Marketing",
    title: "How to Find Micro-Influencers in Saudi Arabia: A Brand-Side Research Framework",
    seoTitle: "How to Find Micro-Influencers in Saudi Arabia: A Framework",
    excerpt:
      "A step-by-step framework for finding and shortlisting Saudi micro-influencers: where to search in Arabic and by city, how licensing affects the pool, what to check before outreach, a scoring sheet and how to approach creators.",
    metaDescription:
      "Finding micro-influencers in Saudi Arabia: Arabic and city-based search, licence checks, audience and engagement checks, a scoring sheet and outreach.",
    author: AUTHOR,
    publishedAt: GCC3_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "10 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "Saudi Arabia",
    breadcrumbParents: [SAUDI_HUB],
    tags: ["find micro influencers Saudi Arabia", "micro influencers KSA", "Saudi creator discovery", "micro influencers Riyadh"],
    related: ["influencer-marketing-saudi-arabia", "influencer-marketing-cost-saudi-arabia", "how-to-vet-influencers"],
    hero: {
      src: "/blog/gcc-guides/find-micro-influencers-saudi-arabia.svg",
      alt: "Saudi micro-influencer research funnel: Arabic and city search, longlist, licence and audience checks, scoring, shortlist and outreach",
    },
    body: [
      {
        type: "paragraph",
        text: "Micro-influencers, usually defined as creators with somewhere between 10,000 and 100,000 followers, are often where Saudi campaigns find their best value: specific audiences, credible voices and more reasonable fees. They're also harder to find than the big names, and the pool is shaped by licensing. This framework is for brands doing the research themselves, or checking the work of an agency.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To find micro-influencers in Saudi Arabia, search in Arabic by category, city and dialect on the platforms your audience uses; mine your own customers, competitors' tagged posts and local hashtags; build a longlist of 30 to 50 creators; then check each one's Mawthooq licence, share of audience in Saudi Arabia and in your cities, typical views, comment quality, sponsored frequency and content history. Score them, shortlist 10 to 15, and approach them in Arabic with a clear brief. Treat discovery tools as a starting point, not a verdict.",
      },
      { type: "heading", text: "How licensing shapes the pool", id: "licensing" },
      {
        type: "paragraph",
        text: "Creators who earn from advertising content in Saudi Arabia need a Mawthooq licence, reported at SAR 15,000. For a micro creator, that's a significant fixed cost, and it means the licensed pool is smaller than the pool of active creators. Kolsquare reported that the number of active Instagram creators with 5,000+ followers in Saudi Arabia fell about 35% between 2022 and its 2026 analysis, coinciding with the scheme's introduction, though it didn't establish that licensing caused the drop. Expect to find good creators who aren't licensed and can't take paid work.",
        links: [{ text: "Kolsquare reported", href: SRC.kolsquareMe.url }],
      },
      {
        type: "paragraph",
        text: "We couldn't confirm a public online lookup for Mawthooq licences. Ask each creator for their licence number in writing, verify it with GAMR, and put a licence warranty in the contract. The rules are in Saudi influencer advertising rules.",
        links: [{ text: "Saudi influencer advertising rules", href: "/blog/saudi-influencer-advertising-rules" }],
      },
      { type: "heading", text: "Step 1: Define who you're looking for", id: "define" },
      {
        type: "list",
        items: [
          "Category and sub-category (for example 'specialty coffee', not 'food')",
          "Cities and regions that matter (Riyadh, Jeddah, the Eastern Province, the South)",
          "Language and dialect",
          "Platform: TikTok, Snapchat, Instagram, YouTube or X",
          "Audience: age, gender split if relevant, nationals or expatriates",
          "Budget range per creator, so you don't longlist people you can't afford",
        ],
      },
      { type: "heading", text: "Step 2: Search where Saudi creators actually are", id: "search" },
      {
        type: "table",
        headers: ["Method", "How", "Notes"],
        rows: [
          ["Arabic search", "Search category terms in Arabic, including Saudi colloquial phrasing", "English search misses most Saudi creators"],
          ["Location tags and city names", "Search venues, districts and city names in Riyadh, Jeddah, Dammam and so on", "Good for local and venue campaigns"],
          ["Your own customers", "People who already tag or mention your brand", "Often the most credible voices"],
          ["Competitors and adjacent brands", "Creators tagged by similar brands", "Check for exclusivities"],
          ["Platform search and suggestions", "Follow a few good creators; check who the platform suggests", "Quick way to find clusters"],
          ["Snapchat", "Ask creators and audiences who they follow locally; Story-led creators are less visible publicly", "Harder to search; worth the effort for local reach"],
          ["Discovery tools and agencies", "Databases and agency rosters", "Check Arabic and Saudi coverage; verify independently"],
        ],
      },
      { type: "heading", text: "Step 3: Check before you reach out", id: "check" },
      {
        type: "list",
        items: [
          "Licence: current Mawthooq licence and the account it's registered to",
          "Audience location: share in Saudi Arabia and in your cities, from dated insights screenshots",
          "Typical performance: median views or reach over recent posts, not the best one",
          "Comment quality: Saudi Arabic, real questions, not repetitive generic comments",
          "Growth pattern: sudden follower jumps without a reason are worth asking about",
          "Sponsored frequency: how many brands in the last month, and any direct competitors",
          "Content history: anything that conflicts with your brand or local content standards",
          "Disclosure: whether past sponsored posts were labelled",
        ],
      },
      {
        type: "paragraph",
        text: "Public numbers and third-party tools estimate audience location and authenticity from samples, and they can be wrong, especially for Arabic accounts and Story-heavy platforms. Ask creators for their own insights, and don't label anyone fraudulent on a tool's score alone. The full vetting process is in how to vet influencers.",
        links: [{ text: "how to vet influencers", href: "/blog/how-to-vet-influencers" }],
      },
      { type: "heading", text: "Step 4: Score and shortlist", id: "score" },
      {
        type: "table",
        headers: ["Criterion", "Weight (example)", "Score 1 to 5"],
        rows: [
          ["Category relevance and credibility", "25%", ""],
          ["Audience in Saudi Arabia and target cities", "25%", ""],
          ["Engagement quality", "15%", ""],
          ["Content quality and fit with brand", "15%", ""],
          ["Brand safety and disclosure history", "10%", ""],
          ["Rate relative to expected value", "10%", ""],
        ],
      },
      { type: "heading", text: "Step 5: Approach creators", id: "outreach" },
      {
        type: "list",
        items: [
          "Write in Arabic, briefly, and say why you chose them specifically",
          "Share the objective, deliverables, timing and whether the brief is paid or gifted",
          "Ask for their licence number, rate card and recent insights",
          "Expect professional micro creators to negotiate; respect their pricing logic",
          "Confirm everything in a written agreement before any content is made",
        ],
      },
      {
        type: "paragraph",
        text: "Typical cost drivers and published fee estimates for Saudi creators are in how much influencer marketing costs in Saudi Arabia.",
        links: [{ text: "how much influencer marketing costs in Saudi Arabia", href: "/blog/influencer-marketing-cost-saudi-arabia" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Searching only in English",
          "Shortlisting creators whose audiences are mostly outside Saudi Arabia",
          "Skipping the licence check, then losing creators at contract stage",
          "Relying on one tool's authenticity score",
          "Choosing on follower count within the micro range instead of fit",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Finding the right Saudi micro-influencers is research work: Arabic search, local signals, licence checks and audience evidence. Done well, it gives you creators with specific, trusting audiences at a sensible cost, and a shortlist you can reuse.",
      },
    ],
    faqs: [
      {
        question: "What counts as a micro-influencer in Saudi Arabia?",
        answer:
          "Definitions vary, but micro-influencers are commonly creators with roughly 10,000 to 100,000 followers. In practice, audience relevance and location matter more than where a creator falls in that range.",
      },
      {
        question: "Do micro-influencers in Saudi Arabia need a Mawthooq licence?",
        answer:
          "Creators who earn from advertising content need a Mawthooq licence regardless of size. Ask for the licence number and verify it with GAMR before contracting.",
      },
      {
        question: "Can brands find Saudi micro-influencers without a tool?",
        answer:
          "Yes. Arabic and city-based search, your own customers, competitors' tagged posts and platform suggestions surface many creators. Tools help scale the search, but verify their data independently.",
      },
    ],
  },
  // 1448
  {
    slug: "arabic-ugc-creators-gcc",
    category: "UGC Marketing",
    title: "Arabic UGC Creators in the GCC: How Brands Can Brief and Evaluate Content",
    seoTitle: "Arabic UGC Creators in the GCC: Briefing and Evaluating Content",
    excerpt:
      "How to commission Arabic user-generated content for Gulf markets: choosing the dialect for each market, briefing for natural delivery, subtitles and right-to-left text, revisions, a scorecard for evaluating content, usage rights for paid ads and what pricing evidence exists.",
    metaDescription:
      "Arabic UGC for GCC brands: dialect by market, briefing for natural delivery, subtitles, revisions, an evaluation scorecard, usage rights and pricing evidence.",
    author: AUTHOR,
    publishedAt: GCC3_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "10 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "Gulf Cooperation Council countries",
    breadcrumbParents: [GCC_PLAYBOOK],
    tags: ["Arabic UGC creators", "Arabic UGC GCC", "Arabic UGC brief", "UGC Saudi Arabia UAE"],
    related: ["ugc-agencies-dubai", "arabic-vs-english-influencer-campaigns-uae", "ugc-brief-template"],
    hero: {
      src: "/blog/gcc-guides/arabic-ugc-creators-gcc.svg",
      alt: "Arabic UGC workflow: choose dialect per market, brief with talking points, natural delivery, Arabic subtitles, review and licensed paid use",
    },
    body: [
      {
        type: "paragraph",
        text: "Arabic UGC, short creator-made videos for a brand's own ads and channels, is in demand across the Gulf because ads that sound local tend to feel more trustworthy than translated ones. 'Arabic' isn't one voice, though. A video that sounds natural in Riyadh can sound slightly foreign in Kuwait City or Dubai, and a script written in English and read out in Arabic sounds like exactly that.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To get good Arabic UGC for GCC markets, choose the dialect for each market (Saudi for Saudi Arabia, Gulf or Emirati voices for UAE nationals, the relevant dialects for Arab expatriate audiences), brief creators with talking points rather than a word-for-word script, ask for natural delivery in real settings, add accurate Arabic subtitles with correct right-to-left text, allow defined revision rounds, and evaluate each video against a scorecard. Agree usage rights for paid ads, territory and duration before production, and price bilingual versions separately.",
      },
      { type: "heading", text: "Choosing the dialect for each market", id: "dialect" },
      {
        type: "table",
        headers: ["Target audience", "Usual choice", "Note"],
        rows: [
          ["Saudi Arabia (national audiences)", "Saudi Arabic, chosen by region where it matters", "Najdi, Hijazi and Eastern voices differ"],
          ["UAE nationals", "Emirati or wider Gulf Arabic", "Emirati creators carry extra credibility"],
          ["Kuwait", "Kuwaiti Arabic", "Kuwaiti audiences notice other Gulf dialects"],
          ["Arab expatriates in the UAE and Qatar", "Levantine, Egyptian or other relevant dialects", "Match the community you're targeting"],
          ["Pan-Arab or broad Gulf reach", "A neutral Gulf register, or several versions", "One version rarely suits every market equally"],
          ["Formal or institutional content", "Modern Standard Arabic", "Usually sounds stiff in UGC-style ads"],
        ],
      },
      {
        type: "paragraph",
        text: "Many creators can soften their dialect for a broader audience, but few can convincingly switch to another country's. If you need several markets, plan several creators. The broader language decision is covered in Arabic vs English influencer campaigns in the UAE and the dialect section of influencer marketing in Saudi Arabia.",
        links: [
          { text: "Arabic vs English influencer campaigns in the UAE", href: "/blog/arabic-vs-english-influencer-campaigns-uae" },
          { text: "influencer marketing in Saudi Arabia", href: "/blog/influencer-marketing-saudi-arabia" },
        ],
      },
      { type: "heading", text: "Briefing for natural delivery", id: "brief" },
      {
        type: "list",
        items: [
          "Write the brief in Arabic, or at least the talking points and claims",
          "Give the problem, the product's key benefit and three talking points, not a script",
          "Provide approved claims and words to avoid in Arabic",
          "Ask for several hook options in the first three seconds",
          "Specify setting (home, car, office, outdoors) and what must be visible",
          "State length, aspect ratios and whether on-screen text is needed",
          "Let creators phrase things their way; correct facts, not style",
        ],
      },
      {
        type: "paragraph",
        text: "A general UGC brief structure is in our UGC brief template; add the dialect, subtitle and market fields from this page.",
        links: [{ text: "UGC brief template", href: "/blog/ugc-brief-template" }],
      },
      { type: "heading", text: "Subtitles and on-screen text", id: "subtitles" },
      {
        type: "list",
        items: [
          "Most people watch ads without sound; Arabic subtitles are usually essential",
          "Subtitle what the creator actually said, not the original script",
          "Check right-to-left rendering: Arabic broken into separate letters or reversed is a common editing error",
          "Keep numbers, prices and product names consistent across subtitles and voice",
          "If you need English subtitles too, deliver them as a separate version",
        ],
      },
      { type: "heading", text: "Revisions", id: "revisions" },
      {
        type: "list",
        items: [
          "Agree the number of revision rounds (often one or two) and what counts as a revision versus a reshoot",
          "Give consolidated feedback in one document, in Arabic where it concerns wording",
          "Have a native speaker from the target market review before you approve",
          "Separate factual corrections (always fixable) from taste (be sparing)",
        ],
      },
      { type: "heading", text: "Evaluating Arabic UGC", id: "scorecard" },
      {
        type: "table",
        headers: ["Criterion", "What good looks like"],
        rows: [
          ["Hook", "Grabs attention in the first seconds without clickbait"],
          ["Natural delivery", "Sounds like the creator talking, not reading"],
          ["Dialect fit", "Right for the target market; a native reviewer agrees"],
          ["Clarity of benefit", "A viewer understands what the product does and why it matters"],
          ["Accuracy", "Claims, prices and product details correct in voice and subtitles"],
          ["Visual quality", "Well lit, product clearly visible, real setting"],
          ["Subtitles", "Accurate, readable, correct right-to-left text"],
          ["Call to action", "Clear next step that matches the ad's destination"],
        ],
      },
      {
        type: "paragraph",
        text: "Score each video, then let ad performance decide: hook rate, watch time and cost per result by version will tell you which creators and angles to commission again.",
      },
      { type: "heading", text: "Usage rights and paid ads", id: "rights" },
      {
        type: "list",
        items: [
          "Define channels: organic social, paid social, website, marketplaces, retail screens",
          "Define territory: one country, several, or the GCC",
          "Define duration and what happens when it ends",
          "Agree whether ads can run through the creator's handle",
          "Agree edits: cut-downs, new hooks, re-subtitling; ask before re-voicing",
        ],
      },
      {
        type: "paragraph",
        text: "How rights work under UAE and Saudi copyright law is covered in influencer usage rights.",
        links: [{ text: "influencer usage rights", href: "/blog/influencer-usage-rights" }],
      },
      { type: "heading", text: "What Arabic UGC costs", id: "pricing" },
      {
        type: "paragraph",
        text: "There's little reliable pricing data. A Kuwait-based affiliate platform, Coodooo, wrote in August 2026 that it had not found a reliable published GCC-specific UGC rate survey; its own sample rate card treats one language as included in the base price, adds roughly 40% for both Arabic and English versions from the same script, and prices dialects outside the creator's own case by case. Treat that as one company's sample, not market data. Ask for quotes per finished video with rights, extra hooks, bilingual versions and VAT itemized.",
        links: [{ text: "Coodooo, wrote in August 2026", href: SRC.coodoooUgc.url }],
      },
      { type: "heading", text: "Permits", id: "permits" },
      {
        type: "paragraph",
        text: `Reviewed ${REVIEW_DATE_TEXT}. The UAE advertiser permit and Saudi Arabia's Mawthooq licence are framed around individuals publishing advertising through their own social accounts. Whether content that appears only on a brand's channels requires the creator to hold one isn't clearly addressed in the guidance we reviewed. Ask your UGC partner how they handle it, and confirm with the relevant authority. If the creator also posts the content on their own account, the licensing rules clearly apply.`,
      },
      {
        type: "paragraph",
        text: "How to compare UGC partners is covered in UGC agencies in Dubai.",
        links: [{ text: "UGC agencies in Dubai", href: "/blog/ugc-agencies-dubai" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Translating an English script and asking creators to read it",
          "Using one dialect for every Gulf market",
          "Subtitles that don't match what was said, or broken Arabic text",
          "Buying organic-only rights, then running the video as an ad",
          "Approving without a native reviewer from the target market",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Good Arabic UGC sounds like someone from your customer's own world talking honestly about a product. Choose the dialect per market, brief with talking points, check subtitles and claims carefully, buy the rights you need, and let ad performance tell you which creators to work with again.",
      },
    ],
    faqs: [
      {
        question: "Which Arabic dialect should UGC use for GCC ads?",
        answer:
          "Match the market: Saudi Arabic for Saudi audiences, Emirati or Gulf voices for UAE nationals, Kuwaiti for Kuwait, and the relevant dialects for Arab expatriate audiences. One version rarely suits every market.",
      },
      {
        question: "Should Arabic UGC be scripted?",
        answer:
          "Use talking points and approved claims rather than a word-for-word script. Natural delivery in the creator's own words usually performs better than reading a translation.",
      },
      {
        question: "How much does Arabic UGC cost in the GCC?",
        answer:
          "There's no reliable published GCC rate survey. Get quotes per finished video with rights, extra hooks, bilingual versions and VAT itemized, and compare like for like.",
      },
    ],
  },
];
