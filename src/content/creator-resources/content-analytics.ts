import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_FACTS_REVIEWED, CREATOR_LAYER_4_PUBLISHED as PUBLISHED, SOURCES } from "@/content/creator-resources/shared";

/**
 * Content analytics (530–539). Each article answers a different question:
 * 530 what's working · 531 YouTube metrics · 532 Instagram metrics ·
 * 533 short-form metrics · 534 watch time vs retention · 535 what the
 * audience likes · 536 why one video went viral · 537 30-post audit ·
 * 538 controlled tests · 539 return on time and money.
 */
export const contentAnalyticsPosts: BlogPost[] = [
  {
    slug: "creator-content-analytics",
    category: "Creator Resources",
    title: "Creator Content Analytics: How to Identify What Content Is Actually Working",
    seoTitle: "Creator Content Analytics: Find What Content Is Working",
    excerpt:
      "A method for judging content by its goal, comparing like with like, and finding the patterns behind your best posts, so decisions come from evidence rather than your latest post.",
    metaDescription:
      "Creator content analytics: define what 'working' means per goal, choose the right metrics, compare like with like, find patterns across posts, and turn insights into decisions, with a content scoring table.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    readingTime: "10 min read",
    tags: ["content analytics", "what content works", "creator metrics", "content performance", "analytics for creators"],
    related: ["content-performance-audit", "creator-analytics-dashboard", "creator-engagement-analytics"],
    body: [
      {
        type: "paragraph",
        text: "\"That Reel did well\" usually means it got more views than the last one. But views alone can mislead: a post can get views and no follows, or modest views and a flood of saves and sales. Content analytics is about deciding what \"working\" means, then finding which content does it consistently.",
      },
      {
        type: "paragraph",
        text: "This article is the method. For a business-wide view (revenue, pipeline), see the creator analytics dashboard; for what to show brands, see creator analytics for brand deals.",
        links: [
          { text: "creator analytics dashboard", href: "/blog/creator-analytics-dashboard" },
          { text: "creator analytics for brand deals", href: "/blog/creator-analytics-for-brand-deals" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To identify what content is working: define each post's goal (reach, depth, community, conversion), pick the metrics that match that goal, compare posts of the same format and platform against your own recent average, look for patterns across topics, hooks, formats and lengths, and turn patterns into decisions about what to repeat, change or stop. Review weekly for quick signals and monthly for patterns.",
      },
      { type: "heading", text: "Define \"working\" by goal", id: "goals" },
      {
        type: "table",
        headers: ["Goal", "Primary metrics", "Secondary metrics"],
        rows: [
          ["Reach", "Views, reach, non-follower share", "Shares"],
          ["Depth / attention", "Average view duration, retention, watch time", "Saves"],
          ["Community", "Comments (quality), replies, DMs", "Returning viewers"],
          ["Growth", "Follows or subscribers gained", "Profile visits"],
          ["Conversion", "Link clicks, sign-ups, sales, leads", "Saves on product content"],
        ],
      },
      { type: "heading", text: "Compare like with like", id: "compare" },
      {
        type: "list",
        items: [
          "Same platform and format (Reels vs Reels, long videos vs long videos).",
          "Your own recent average, not other creators' numbers.",
          "Similar time windows (e.g. 7 days after posting).",
          "Separate organic from boosted or sponsored posts.",
        ],
      },
      { type: "heading", text: "Find patterns", id: "patterns" },
      {
        type: "table",
        headers: ["Variable", "Question to ask"],
        rows: [
          ["Topic", "Which topics beat my average most often?"],
          ["Hook type", "Which openings hold viewers past the first seconds?"],
          ["Format", "Tutorials vs tests vs stories: which works for which goal?"],
          ["Length", "Is there a length range that holds attention best?"],
          ["Series", "Do series episodes outperform one-offs?"],
          ["Language", "Does Hindi, English or regional-language content perform differently?"],
        ],
      },
      { type: "heading", text: "Turn insights into decisions", id: "decisions" },
      {
        type: "template",
        label: "Monthly decision template",
        text: "REPEAT: [topics/formats that beat average on the goal metric 3+ times]\nFIX: [promising topics with weak hooks or retention]\nSTOP: [formats consistently below average for 2 months]\nTEST: [one controlled experiment next month]",
      },
      {
        type: "paragraph",
        text: "For the monthly review itself, use the content performance audit; for experiments, creator A/B testing.",
        links: [
          { text: "content performance audit", href: "/blog/content-performance-audit" },
          { text: "creator A/B testing", href: "/blog/creator-ab-testing" },
        ],
      },
      { type: "heading", text: "Worked example", id: "worked-example" },
      {
        type: "template",
        label: "Monthly analysis (hypothetical numbers)",
        text: "Travel creator, one month, 14 Reels and 2 long videos (hypothetical)\n\nGoal split: 8 reach posts, 4 depth posts, 2 conversion posts (homestay affiliate links)\n\nFindings:\n• \"₹3,000 weekend\" series beat the Reels median on saves in 4 of 4 episodes → REPEAT\n• Trend-audio Reels got views but follows per post were below median → FIX (add series context) or STOP\n• Long video on Hampi held 48% average viewed vs a 35% channel median → make more long guides\n• Affiliate posts: clicks fine, bookings low → test a stronger reason to book\n\nDecisions: 2 more series slots, 1 long guide per fortnight, drop trend audio unless on-niche",
      },
      { type: "heading", text: "Tools you already have", id: "tools" },
      {
        type: "list",
        items: [
          "YouTube Studio and Instagram professional dashboard for native metrics.",
          "A spreadsheet for tagging posts by topic, format and hook.",
          "Link and affiliate dashboards for clicks and sales.",
          "Search Console if you publish on a website.",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Judging everything by views.",
          "Comparing a Reel with a long video.",
          "Reacting to one post instead of patterns.",
          "Mixing sponsored and organic results.",
          "Collecting data but never deciding anything.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Decide what each piece of content is for, measure that, and look for patterns across many posts. Analytics is only useful when it changes what you make next. For platform specifics, see YouTube analytics for creators and Instagram insights for creators.",
        links: [
          { text: "YouTube analytics for creators", href: "/blog/youtube-analytics-for-creators" },
          { text: "Instagram insights for creators", href: "/blog/instagram-insights-for-creators" },
        ],
      },
    ],
    faqs: [
      {
        question: "How do I know which content is working?",
        answer: "Define each post's goal, measure the metrics that match it, compare with your recent average for the same format and platform, and look for patterns across many posts.",
      },
      {
        question: "Are views the best measure of success?",
        answer: "Only for reach goals. Watch time, saves, comments, follows gained and conversions often tell you more about whether content is working.",
      },
      {
        question: "How often should creators review analytics?",
        answer: "A quick weekly check for signals and a monthly review for patterns and decisions works for most creators.",
      },
    ],
  },
  {
    slug: "youtube-analytics-for-creators",
    category: "Creator Resources",
    title: "YouTube Analytics for Creators: 20 Metrics You Should Understand",
    seoTitle: "YouTube Analytics for Creators: 20 Metrics Explained",
    excerpt:
      "Twenty YouTube Analytics metrics explained in plain language, grouped by reach, engagement, audience, Shorts and revenue, with what each tells you and what to do when it's low.",
    metaDescription:
      "YouTube Analytics for creators: 20 metrics explained, including impressions, CTR, views, engaged views, watch time, average view duration, retention, returning viewers, traffic sources, viewed vs swiped away and RPM.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["YouTube Analytics", "YouTube metrics", "impressions CTR", "average view duration", "YouTube Studio"],
    related: ["watch-time-vs-retention", "youtube-search-vs-recommendations", "short-form-video-analytics"],
    body: [
      {
        type: "paragraph",
        text: "YouTube Studio shows dozens of numbers. A handful explain most of what happens to a video: whether people see it, whether they click, whether they stay, and whether they come back. This guide explains twenty metrics and what to do with each.",
      },
      {
        type: "paragraph",
        text: "Metric names reflect YouTube Studio as of September 2026. YouTube changed how Shorts views are counted on 31 March 2025 and sometimes renames reports; check YouTube's analytics help for current definitions.",
        links: [{ text: "YouTube's analytics help", href: SOURCES.youtubeAnalyticsBasics }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "The most important YouTube Analytics metrics for creators are impressions and impressions click-through rate (do people see and click), average view duration, average percentage viewed and audience retention (do they stay), watch time (total attention), traffic sources and search terms (how they find you), returning and new viewers and subscribers gained (do they come back), and for Shorts, viewed vs swiped away and engaged views. Revenue metrics such as RPM matter once you're monetized.",
      },
      { type: "heading", text: "Reach metrics", id: "reach" },
      {
        type: "table",
        headers: ["#", "Metric", "What it tells you", "If it's low"],
        rows: [
          ["1", "Impressions", "How often thumbnails were shown on YouTube", "Topic may have limited appeal or reach; check traffic sources"],
          ["2", "Impressions click-through rate (CTR)", "Share of impressions that became views", "Improve title and thumbnail clarity"],
          ["3", "Views", "Total views (for Shorts, every start or replay since March 2025)", "Look at CTR and retention to see why"],
          ["4", "Unique viewers", "Estimated distinct people", "Reach isn't expanding beyond repeat viewers"],
          ["5", "Traffic source types", "Search, browse, suggested, Shorts feed, external", "Plan for the source you want to grow"],
          ["6", "YouTube search terms", "Queries that found your video", "Title may not match how people search"],
        ],
      },
      { type: "heading", text: "Engagement and attention metrics", id: "engagement" },
      {
        type: "table",
        headers: ["#", "Metric", "What it tells you", "If it's low"],
        rows: [
          ["7", "Watch time (hours)", "Total time watched", "Combine with views: few views or short watches?"],
          ["8", "Average view duration", "Average minutes watched per view", "Tighten intros and pacing"],
          ["9", "Average percentage viewed", "Share of the video watched on average", "Shorter videos or better structure"],
          ["10", "Audience retention graph", "Where viewers drop off or rewatch", "Fix the moments where the graph falls"],
          ["11", "Likes (and likes vs dislikes)", "Viewer approval", "Check whether the video delivered its promise"],
          ["12", "Comments", "Conversation", "Ask a specific question; reply early"],
          ["13", "Shares", "Word of mouth", "Make content more useful or relatable"],
          ["14", "End screen and card clicks", "Whether viewers continue to your other videos", "Link a genuinely related video"],
        ],
      },
      { type: "heading", text: "Audience metrics", id: "audience" },
      {
        type: "table",
        headers: ["#", "Metric", "What it tells you"],
        rows: [
          ["15", "Returning vs new viewers", "Loyalty vs discovery balance"],
          ["16", "Subscribers gained / lost", "Which videos convert viewers into subscribers"],
          ["17", "Audience demographics and geography", "Age, gender, country; useful for brand fit (city detail may be limited)"],
          ["18", "When your viewers are on YouTube", "Timing for uploads and Premieres"],
        ],
      },
      { type: "heading", text: "Shorts-specific metrics", id: "shorts" },
      {
        type: "table",
        headers: ["#", "Metric", "What it tells you"],
        rows: [
          ["19", "Viewed vs swiped away", "Share of Shorts feed impressions where viewers watched rather than swiped: hook strength"],
          ["20", "Engaged views", "The stricter Shorts view count, still used for YPP eligibility and Shorts revenue sharing"],
        ],
      },
      {
        type: "paragraph",
        text: "See YouTube's explanation of engaged views and Shorts analytics tips.",
        links: [
          { text: "YouTube's explanation of engaged views", href: SOURCES.youtubeEngagedViews },
          { text: "Shorts analytics tips", href: SOURCES.youtubeShortsAnalytics },
        ],
      },
      { type: "heading", text: "Revenue metrics (monetized channels)", id: "revenue" },
      {
        type: "list",
        items: [
          "Estimated revenue: what YouTube estimates you earned.",
          "RPM (revenue per mille): your revenue per 1,000 views after YouTube's share, the best number for your actual earnings.",
          "CPM: what advertisers pay per 1,000 monetized playbacks, before YouTube's share.",
          "Revenue by source: ads, memberships, Supers, Shopping, Premium.",
        ],
      },
      { type: "heading", text: "A diagnosis path", id: "diagnosis" },
      {
        type: "template",
        text: "Low views? → Check impressions (seen?) → CTR (clicked?) → retention (stayed?)\nLow impressions → topic/traffic source issue\nGood impressions, low CTR → packaging (title/thumbnail)\nGood CTR, low retention → content didn't match promise or pacing is slow\nGood retention, few subscribers → no reason to return (series, next video)",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Comparing Shorts views before and after March 2025 as if they were the same metric.",
          "Chasing CTR with misleading thumbnails.",
          "Ignoring the retention graph.",
          "Confusing CPM with RPM.",
        ],
      },
      {
        type: "paragraph",
        text: "For turning these metrics into decisions, see creator content analytics and YouTube search vs recommendations.",
        links: [{ text: "creator content analytics", href: "/blog/creator-content-analytics" }, { text: "YouTube search vs recommendations", href: "/blog/youtube-search-vs-recommendations" }],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Learn the diagnosis path and check it for every video after 7 and 28 days. For the two attention metrics creators confuse most, see watch time vs retention.",
        links: [{ text: "watch time vs retention", href: "/blog/watch-time-vs-retention" }],
      },
    ],
    faqs: [
      {
        question: "What are the most important YouTube Analytics metrics?",
        answer: "Impressions and click-through rate, average view duration and retention, watch time, traffic sources, returning viewers and subscribers gained, plus viewed vs swiped away and engaged views for Shorts.",
      },
      {
        question: "What's the difference between RPM and CPM?",
        answer: "CPM is what advertisers pay per 1,000 monetized playbacks before YouTube's share. RPM is your revenue per 1,000 views after YouTube's share, across revenue sources.",
      },
      {
        question: "Why did my Shorts views jump in 2025?",
        answer: "From 31 March 2025, YouTube counts a Shorts view each time a Short starts or replays. Engaged views, the previous method, are still reported and used for monetization.",
      },
    ],
  },
  {
    slug: "instagram-insights-for-creators",
    category: "Creator Resources",
    title: "Instagram Insights for Creators: Complete Guide to Understanding Your Performance",
    seoTitle: "Instagram Insights for Creators: Understand Your Performance",
    excerpt:
      "What each Instagram Insights metric means for creators, including views, reach, interactions, watch time, follows and profile activity, how to read Reels, Stories and posts, and what to do with them.",
    metaDescription:
      "Instagram Insights for creators: views, reach, interactions, saves, shares, watch time, follows and profile activity explained, Reels vs Stories vs posts insights, audience data, and a monthly review routine.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "11 min read",
    tags: ["Instagram Insights", "Instagram analytics", "Reels insights", "Instagram metrics", "professional dashboard"],
    related: ["short-form-video-analytics", "instagram-seo-for-creators", "reels-content-strategy"],
    body: [
      {
        type: "paragraph",
        text: "Instagram Insights answers three questions for creators: who's seeing my content, what are they doing with it, and is it bringing new people to my profile. Knowing which metric answers which question makes Insights far more useful.",
      },
      {
        type: "paragraph",
        text: "Instagram switched to Views as its main metric in 2025, replacing impressions and plays. Metric names below reflect Instagram's help centre as of September 2026.",
        links: [{ text: "Instagram's help centre", href: SOURCES.instagramInsights }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Instagram Insights, available to professional accounts, shows views (how many times content was played or displayed), reach and viewers (unique accounts), interactions (likes, comments, saves, shares, reposts), watch time and average watch time for Reels, follows, profile activity and audience demographics. Use views and reach for distribution, saves and shares for value, watch time for attention, and follows and profile activity for growth. Compare within the same format and time window.",
      },
      { type: "heading", text: "Core metrics", id: "core" },
      {
        type: "table",
        headers: ["Metric", "Meaning", "Use it to judge"],
        rows: [
          ["Views", "Times content started playing or was displayed", "Distribution"],
          ["Reach / viewers", "Unique accounts that saw it", "How many people"],
          ["Follower vs non-follower split", "Share of views from followers vs others", "Discovery"],
          ["Interactions", "Likes, comments, saves, shares, reposts", "Engagement"],
          ["Saves", "People keeping it for later", "Usefulness"],
          ["Shares", "People sending it to others", "Word of mouth"],
          ["Watch time / average watch time (Reels)", "How long people watched", "Attention"],
          ["Follows", "New follows from the content", "Growth"],
          ["Profile activity", "Profile visits and link taps", "Interest and conversion"],
        ],
      },
      {
        type: "paragraph",
        text: "Reel-specific definitions: view insights on your Instagram reels.",
        links: [{ text: "view insights on your Instagram reels", href: SOURCES.instagramReelInsights }],
      },
      { type: "heading", text: "Reels, Stories and posts", id: "formats" },
      {
        type: "table",
        headers: ["Format", "Most useful metrics"],
        rows: [
          ["Reels", "Views, non-follower share, average watch time, shares, saves, follows"],
          ["Stories", "Views per frame, drop-off between frames, replies, link sticker taps"],
          ["Carousels", "Saves, shares, reach"],
          ["Lives", "Peak viewers, comments, follows"],
        ],
      },
      { type: "heading", text: "Audience insights", id: "audience" },
      {
        type: "list",
        items: [
          "Top cities and countries, age ranges and gender split.",
          "Most active times.",
          "Use for brand fit and posting schedule, and update your media kit quarterly.",
        ],
      },
      {
        type: "paragraph",
        text: "See creator media kit for presenting audience data.",
        links: [{ text: "creator media kit", href: "/blog/creator-media-kit" }],
      },
      { type: "heading", text: "Monthly review routine", id: "routine" },
      {
        type: "template",
        text: "1. Top 5 Reels by average watch time — what's common?\n2. Top 5 by shares and saves — what's common?\n3. Top 5 by follows gained — what converted?\n4. Non-follower share trend — is discovery growing?\n5. Story drop-off — where do people leave?\n6. Audience cities/ages — any shift?\n7. One decision for next month",
      },
      { type: "heading", text: "Diagnosing a Reel with Insights", id: "diagnose" },
      {
        type: "template",
        label: "Five-step check",
        text: "1. Views vs your median → distribution problem or not?\n2. Non-follower share → did it reach new people?\n3. Average watch time vs Reel length → did it hold?\n4. Shares and saves per 1,000 views → was it valuable?\n5. Follows → did it convert?\n\nFix the first stage that's clearly below your median.",
      },
      { type: "heading", text: "The Stories funnel", id: "stories" },
      {
        type: "list",
        items: [
          "Frame 1 views show how many followers opened your Stories.",
          "The drop from frame 1 to the last frame shows how compelling the sequence was.",
          "Link sticker taps and replies show action.",
          "Put the most important frame (offer, link, question) early in the sequence.",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Comparing new Views figures directly with old impressions.",
          "Judging Reels by likes alone.",
          "Ignoring saves and shares.",
          "Mixing boosted and organic posts.",
        ],
      },
      {
        type: "paragraph",
        text: "For deciding what to do with these numbers, see creator content analytics and the content performance audit.",
        links: [{ text: "creator content analytics", href: "/blog/creator-content-analytics" }, { text: "content performance audit", href: "/blog/content-performance-audit" }],
      },
      {
        type: "paragraph",
        text: "For a Reels-only measurement system, including series tracking and a monthly review, see Instagram Reels analytics.",
        links: [{ text: "Instagram Reels analytics", href: "/blog/instagram-reels-analytics" }],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Match each metric to the question it answers, review monthly, and keep one decision per review. For Reels and Shorts together, see short-form video analytics.",
        links: [{ text: "short-form video analytics", href: "/blog/short-form-video-analytics" }],
      },
    ],
    faqs: [
      {
        question: "What does 'views' mean in Instagram Insights?",
        answer: "Instagram counts views as the number of times content starts to play or is displayed, replacing the older impressions and plays metrics in 2025.",
      },
      {
        question: "Which Instagram metrics matter most for creators?",
        answer: "Reach and non-follower share for discovery, average watch time for attention, saves and shares for value, and follows and profile activity for growth.",
      },
      {
        question: "Do I need a professional account for Insights?",
        answer: "Yes. Instagram Insights is available to professional (creator or business) accounts.",
      },
    ],
  },
  {
    slug: "short-form-video-analytics",
    category: "Creator Resources",
    title: "Short-Form Video Analytics: Which Metrics Matter Most for Reels and Shorts?",
    seoTitle: "Short-Form Video Analytics: Metrics for Reels and Shorts",
    excerpt:
      "The short-form metrics that matter, how Reels and Shorts define them differently, a funnel for diagnosing weak videos, and benchmarks you should build from your own data rather than borrow.",
    metaDescription:
      "Short-form video analytics for Reels and Shorts: hook, hold, action and growth metrics, how Instagram and YouTube define views differently, a diagnosis funnel and building your own benchmarks.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "10 min read",
    tags: ["short-form analytics", "Reels metrics", "Shorts metrics", "viewed vs swiped away", "average watch time"],
    related: ["youtube-shorts-content-strategy", "instagram-insights-for-creators", "short-form-video-hooks"],
    body: [
      {
        type: "paragraph",
        text: "Short-form analytics moves fast: most of a Reel's or Short's fate is decided in its first seconds and first days. The trick is knowing which number shows the hook, which shows the hold, and which shows whether viewers did anything next.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "For Reels and Shorts, track four stages: hook (did viewers stop: YouTube's viewed vs swiped away; early retention), hold (average watch time, percentage viewed, rewatches), action (shares, saves, comments, link or profile taps) and growth (follows or subscribers gained). Remember that platforms define views differently: both Instagram and YouTube now count views on each play or replay, while YouTube's engaged views remain the monetization metric for Shorts. Build benchmarks from your own recent averages.",
      },
      { type: "heading", text: "The short-form funnel", id: "funnel" },
      {
        type: "table",
        headers: ["Stage", "Instagram Reels", "YouTube Shorts", "Fix if weak"],
        rows: [
          ["Hook", "Early retention, views from non-followers", "Viewed vs swiped away", "First frame, first line, on-screen text"],
          ["Hold", "Average watch time", "Average view duration, average percentage viewed", "Cut filler, tighten pacing"],
          ["Action", "Shares, saves, comments", "Likes, comments, shares", "Make it more useful or relatable"],
          ["Growth", "Follows", "Subscribers gained", "Clear series and profile"],
        ],
      },
      { type: "heading", text: "How views differ by platform", id: "views" },
      {
        type: "list",
        items: [
          "Instagram: Views count each time a Reel starts to play or replay; reach counts unique accounts.",
          "YouTube Shorts: since 31 March 2025, views count each start or replay; engaged views (the older method) are still shown and used for YPP and Shorts revenue sharing.",
          "Don't add Reels and Shorts views together as if they're identical measures.",
        ],
      },
      { type: "heading", text: "Build your own benchmarks", id: "benchmarks" },
      {
        type: "template",
        label: "Personal benchmark sheet",
        text: "Platform: ___ · Format: ___ · Period: last 30 posts\nMedian views: ___\nMedian average watch time: ___\nMedian viewed vs swiped (Shorts): ___%\nMedian shares per 1,000 views: ___\nMedian saves per 1,000 views: ___\nMedian follows per post: ___\n\nA post \"worked\" if it beat the median on the metric that matched its goal.",
      },
      { type: "heading", text: "Worked diagnoses", id: "diagnoses" },
      {
        type: "paragraph",
        text: "The scenarios below use hypothetical numbers to show how the funnel points to a fix. Compare against your own medians, not these figures.",
      },
      {
        type: "table",
        headers: ["Symptom (hypothetical)", "Funnel stage", "Likely fix"],
        rows: [
          ["Viewed vs swiped away well below your median; everything else normal", "Hook", "New first frame and first line; put the result on screen"],
          ["Good hook, but average watch time drops sharply after 5 seconds", "Hold", "The opening promised something the middle didn't deliver; cut the setup"],
          ["Strong watch time, very few shares or saves", "Action", "Add a reason to save (list, steps) or share (relatable moment)"],
          ["Lots of views and shares, almost no follows", "Growth", "Add series context and a clearer profile; point to part 2"],
          ["Great on Reels, weak on Shorts with the same file", "Platform fit", "Adapt title, keywords and first frame per platform"],
        ],
      },
      { type: "heading", text: "When to check", id: "timing" },
      {
        type: "list",
        items: [
          "After 24 hours: hook and early hold signals.",
          "After 7 days: action and growth metrics, and your standard comparison point.",
          "After 28 days: search-driven Shorts and evergreen Reels, which can keep collecting views.",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Borrowing another creator's \"good\" numbers as your benchmark.",
          "Judging after a few hours; check at 24 hours and 7 days.",
          "Ignoring shares, often the strongest signal for reach.",
          "Chasing loops or rewatches with tricks that frustrate viewers.",
        ],
      },
      {
        type: "paragraph",
        text: "For platform detail, see YouTube analytics for creators and Instagram insights for creators, and for experiments, creator A/B testing.",
        links: [{ text: "YouTube analytics for creators", href: "/blog/youtube-analytics-for-creators" }, { text: "Instagram insights for creators", href: "/blog/instagram-insights-for-creators" }, { text: "creator A/B testing", href: "/blog/creator-ab-testing" }],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Use the funnel to diagnose each weak video, build benchmarks from your median, and improve one stage at a time. Hooks are usually the fastest win; see short-form video hooks.",
        links: [{ text: "short-form video hooks", href: "/blog/short-form-video-hooks" }],
      },
    ],
    faqs: [
      {
        question: "Which metrics matter most for Reels and Shorts?",
        answer: "Hook metrics (viewed vs swiped away, early retention), hold metrics (average watch time, percentage viewed), action metrics (shares, saves, comments) and growth metrics (follows, subscribers gained).",
      },
      {
        question: "Are Reels views and Shorts views the same?",
        answer: "Both count plays and replays, but platforms measure and report differently, and YouTube also reports engaged views for monetization. Treat them as separate metrics.",
      },
      {
        question: "What's a good average watch time for short-form?",
        answer: "It depends on length and niche. Build a benchmark from the median of your own last 30 posts rather than using universal numbers.",
      },
    ],
  },
  {
    slug: "watch-time-vs-retention",
    category: "Creator Resources",
    title: "Watch Time vs Retention: What's the Difference for Creators?",
    seoTitle: "Watch Time vs Retention: The Difference for Creators",
    excerpt:
      "Watch time is total attention; retention is the share of each video people watch. Here's how they differ, how they relate to video length, how to read a retention graph, and which to optimise when.",
    metaDescription:
      "Watch time vs retention explained: definitions, how average view duration and percentage viewed relate, why length changes the picture, reading retention graphs, worked examples and which metric to prioritise.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    updatedAt: "2026-09-29",
    readingTime: "9 min read",
    tags: ["watch time", "audience retention", "average view duration", "retention graph", "YouTube metrics", "creator retention strategy", "watch time and retention"],
    related: ["youtube-analytics-for-creators", "short-form-video-analytics", "how-to-write-video-scripts"],
    body: [
      {
        type: "paragraph",
        text: "Watch time and retention are both about attention, which is why they're often mixed up. But a video can have excellent retention and little watch time, or lots of watch time and poor retention. Knowing the difference tells you whether to fix the video, the length or the reach.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Watch time is the total time viewers spent watching (views × average view duration). Retention is how much of a video viewers watched, shown as average percentage viewed and the audience retention graph. Watch time grows with reach and length; retention shows how well the content holds attention regardless of length. Optimise retention to improve the video itself, and watch time to understand overall impact.",
      },
      { type: "heading", text: "Definitions", id: "definitions" },
      {
        type: "table",
        headers: ["Metric", "Formula / meaning", "Answers"],
        rows: [
          ["Watch time", "Total minutes or hours watched", "How much total attention did this get?"],
          ["Average view duration", "Watch time ÷ views", "How long did a typical view last?"],
          ["Average percentage viewed", "Average view duration ÷ video length", "What share of the video was watched?"],
          ["Retention graph", "Share of viewers still watching at each moment", "Where do people leave or rewatch?"],
        ],
      },
      { type: "heading", text: "Worked example", id: "example" },
      {
        type: "template",
        label: "Hypothetical numbers",
        text: "Video A: 4 minutes · 10,000 views · avg view duration 2:24\n  → Average % viewed: 60% · Watch time: 24,000 minutes (400 hours)\n\nVideo B: 20 minutes · 10,000 views · avg view duration 6:00\n  → Average % viewed: 30% · Watch time: 60,000 minutes (1,000 hours)\n\nA holds attention better (retention). B generated more total attention (watch time).",
      },
      { type: "heading", text: "Reading a retention graph", id: "graph" },
      {
        type: "list",
        items: [
          "Steep early drop: the hook or intro didn't match expectations.",
          "Gradual decline: normal; slope shows pacing.",
          "Sudden dips: a boring or confusing section.",
          "Bumps: rewatched moments, often useful clips.",
          "End spike on Shorts: loops or rewatches.",
        ],
      },
      { type: "heading", text: "Which to prioritise", id: "prioritise" },
      {
        type: "table",
        headers: ["Situation", "Focus on"],
        rows: [
          ["Improving how you make videos", "Retention (graph, % viewed)"],
          ["Choosing video length", "Both: retention for quality, watch time for total value"],
          ["Short-form", "Hook and percentage viewed"],
          ["Monetization and YPP (long-form)", "Watch time, which counts toward eligibility"],
        ],
      },
      { type: "heading", text: "Improving retention by drop-off type", id: "improve" },
      {
        type: "table",
        headers: ["Where viewers leave", "Common cause", "Fix"],
        rows: [
          ["First 5–10 seconds", "Slow intro or mismatch with title/thumbnail", "Start with the payoff or the problem; match the promise"],
          ["Steady slide throughout", "Pacing too slow", "Tighter cuts, remove repetition, add pattern changes"],
          ["Sudden cliff mid-video", "A tangent, a sponsor read or a confusing section", "Shorten, move or restructure that segment"],
          ["Just before the end", "Viewers sense it's wrapping up", "Keep the final point strong; avoid long outros"],
        ],
      },
      { type: "heading", text: "Short-form vs long-form", id: "short-vs-long" },
      {
        type: "list",
        items: [
          "Short-form: percentage viewed and rewatches matter most; watch time per view is small by design.",
          "Long-form: average view duration and total watch time matter; YouTube's long-form monetization eligibility counts watch hours.",
          "Don't compare a 30-second Short's percentage viewed with a 20-minute video's.",
        ],
      },
      {
        type: "paragraph",
        text: "See YouTube Shorts content strategy for how Shorts metrics differ.",
        links: [{ text: "YouTube Shorts content strategy", href: "/blog/youtube-shorts-content-strategy" }],
      },
      { type: "heading", text: "A retention strategy: seven levers", id: "retention-strategy" },
      {
        type: "table",
        headers: ["Lever", "What to do"],
        rows: [
          ["Deliver the promise early", "Show a glimpse of the payoff in the first seconds"],
          ["Cut the setup", "Start at the most interesting point, add context later"],
          ["Open loops", "Pose a question and answer it later in the video"],
          ["Pattern changes", "New visual, angle or on-screen text every few seconds in short-form"],
          ["Chapters and mini-payoffs", "Give long videos regular rewards"],
          ["Match packaging", "Title and thumbnail that the video actually delivers"],
          ["End well", "Finish at the payoff; don't trail off"],
        ],
      },
      {
        type: "paragraph",
        text: "Hooks and story shape drive most retention gains: see short-form video hooks and creator storytelling. Packaging that over-promises hurts retention; see creator thumbnail strategy.",
        links: [
          { text: "short-form video hooks", href: "/blog/short-form-video-hooks" },
          { text: "creator storytelling", href: "/blog/creator-storytelling" },
          { text: "creator thumbnail strategy", href: "/blog/creator-thumbnail-strategy" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Making videos longer just to raise watch time, while retention collapses.",
          "Comparing percentage viewed across very different lengths.",
          "Ignoring the graph and only looking at averages.",
        ],
      },
      {
        type: "paragraph",
        text: "See YouTube analytics for creators for where to find these metrics, and short-form video analytics for how they apply to Reels and Shorts.",
        links: [{ text: "YouTube analytics for creators", href: "/blog/youtube-analytics-for-creators" }, { text: "short-form video analytics", href: "/blog/short-form-video-analytics" }],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Use retention to improve each video and watch time to understand total impact. The retention graph is the most practical editing tool YouTube gives you; better scripts usually move it most. See how to write video scripts.",
        links: [{ text: "how to write video scripts", href: "/blog/how-to-write-video-scripts" }],
      },
    ],
    faqs: [
      {
        question: "What's the difference between watch time and retention?",
        answer: "Watch time is the total time viewers spent watching. Retention is how much of each video viewers watched, shown as average percentage viewed and the retention graph.",
      },
      {
        question: "Should I make longer videos to increase watch time?",
        answer: "Only if retention holds. Longer videos with poor retention can frustrate viewers and hurt performance.",
      },
      {
        question: "What does a sudden dip in my retention graph mean?",
        answer: "Usually a section that was slow, confusing or off-topic. Watch that moment and tighten or cut it in future videos.",
      },
    ],
  },
  {
    slug: "creator-engagement-analytics",
    category: "Creator Resources",
    title: "Creator Engagement Analytics: How to Understand What Your Audience Really Likes",
    seoTitle: "Creator Engagement Analytics: What Your Audience Likes",
    excerpt:
      "Go beyond engagement rate: what each type of interaction signals, how to analyse comments, saves, shares and DMs for patterns, and how to turn them into content decisions.",
    metaDescription:
      "Creator engagement analytics: what likes, comments, saves, shares, replies and DMs each signal, comment analysis, engagement per 1,000 views, patterns by topic and format, and turning insights into content.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    readingTime: "9 min read",
    tags: ["engagement analytics", "comment analysis", "saves and shares", "audience insights", "engagement signals"],
    related: ["influencer-engagement-rate", "creator-content-analytics", "how-to-find-content-gaps"],
    body: [
      {
        type: "paragraph",
        text: "An engagement rate is one number. Your audience's behaviour is much richer: what they save, what they send to friends, what they argue about in the comments, what they DM you about. Engagement analytics reads those signals to understand what people value.",
      },
      {
        type: "paragraph",
        text: "For calculating engagement rate itself, see how to calculate influencer engagement rate. This guide is about what engagement tells you.",
        links: [{ text: "how to calculate influencer engagement rate", href: "/blog/influencer-engagement-rate" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Engagement analytics means breaking engagement into its types, because each signals something different: likes (approval), comments (conversation and questions), saves (future usefulness), shares (worth recommending), replies and DMs (personal connection). Compare them per 1,000 views across topics and formats, read comments for themes, and use the patterns to decide what to make more of.",
      },
      { type: "heading", text: "What each signal means", id: "signals" },
      {
        type: "table",
        headers: ["Signal", "Usually indicates", "Content implication"],
        rows: [
          ["Likes", "Quick approval", "Weak signal on its own"],
          ["Comments", "Conversation, questions, disagreement", "Read them for topics and gaps"],
          ["Saves", "Reference value", "Make more guides, lists, tutorials"],
          ["Shares", "Worth passing on", "Relatable or highly useful content spreads"],
          ["Story replies / DMs", "Personal connection", "Community and trust"],
          ["Profile visits after a post", "Curiosity about you", "Content that shows your personality or series"],
        ],
      },
      { type: "heading", text: "Normalise by views", id: "normalise" },
      {
        type: "paragraph",
        text: "Compare engagement per 1,000 views so posts with different reach are comparable. A post with 5,000 views and 100 saves (20 per 1,000) signals more value than one with 50,000 views and 300 saves (6 per 1,000), even though the second has more saves.",
      },
      { type: "heading", text: "Comment analysis", id: "comments" },
      {
        type: "template",
        label: "Tag the last 200 comments",
        text: "Q = question · P = personal story · D = disagreement · R = request for more · B = buying intent (\"where to buy?\") · E = emoji/generic\n\nCount by post and topic. High Q and R = content gap to fill. High B = commerce potential. High D = strong opinion topic (handle with care).",
      },
      {
        type: "paragraph",
        text: "Questions from comments are the best source of content gaps; see how to find content gaps.",
        links: [{ text: "how to find content gaps", href: "/blog/how-to-find-content-gaps" }],
      },
      { type: "heading", text: "Patterns to look for", id: "patterns" },
      {
        type: "list",
        items: [
          "Topics with high saves: make them into series or products.",
          "Formats with high shares: use for reach.",
          "Posts with high buying-intent comments: affiliate or product opportunities.",
          "Topics that bring DMs: community or newsletter content.",
        ],
      },
      { type: "heading", text: "Worked example: tagging comments", id: "worked-example" },
      {
        type: "template",
        label: "Comment tagging (hypothetical counts)",
        text: "Budget skincare creator, last 200 comments across 10 Reels (hypothetical)\n\nQ (questions): 62 · R (requests for more): 28 · B (buying intent): 34 · P (personal stories): 21 · D (disagreement): 9 · E (generic): 46\n\nReading:\n• Most questions are about oily skin in humid weather → content gap; plan a 3-part series\n• Buying intent clusters on sunscreen posts → affiliate or storefront opportunity\n• Disagreements on one \"myth\" post → follow up with sources, not defensiveness",
      },
      { type: "heading", text: "Story replies and DMs", id: "dms" },
      {
        type: "paragraph",
        text: "Story replies and DMs are some of the strongest signals of connection, but they're private. Track counts and themes, never share screenshots without permission, and treat recurring DM questions as community or newsletter topics. See how to build a creator community.",
        links: [{ text: "how to build a creator community", href: "/blog/how-to-build-a-creator-community" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Treating all engagement as equal.",
          "Counting comments without reading them.",
          "Inflating engagement with giveaways or pods, which distorts your data.",
          "Comparing raw counts across posts with different reach.",
        ],
      },
      {
        type: "paragraph",
        text: "Engagement patterns feed the content performance audit; for what brands want to see, see creator analytics for brand deals.",
        links: [{ text: "content performance audit", href: "/blog/content-performance-audit" }, { text: "creator analytics for brand deals", href: "/blog/creator-analytics-for-brand-deals" }],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Once a month, compare saves, shares and comments per 1,000 views by topic and tag a sample of comments. You'll see what your audience values more clearly than any single engagement rate shows.",
      },
    ],
    faqs: [
      {
        question: "Which engagement signals matter most?",
        answer: "It depends on your goal, but saves (usefulness), shares (worth recommending) and meaningful comments usually tell you more than likes.",
      },
      {
        question: "How do I compare engagement across posts with different reach?",
        answer: "Normalise by views, for example saves or shares per 1,000 views.",
      },
      {
        question: "How can comments guide my content?",
        answer: "Tag comments by type (questions, requests, buying intent, stories). Repeated questions and requests point to content gaps and product ideas.",
      },
    ],
  },
  {
    slug: "how-to-analyze-a-viral-video",
    category: "Creator Resources",
    title: "How to Analyze a Viral Video: A Creator's Framework for Finding What Worked",
    seoTitle: "How to Analyse a Viral Video: A Creator's Framework",
    excerpt:
      "A structured way to break down why a video took off, whether yours or someone else's: topic, timing, hook, format, emotion, distribution and audience, separating repeatable causes from luck.",
    metaDescription:
      "How to analyze a viral video: a seven-factor framework (topic, timing, hook, format, emotion, distribution, audience), data to check, separating repeatable causes from luck, and turning findings into tests.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    readingTime: "9 min read",
    tags: ["viral video analysis", "why video went viral", "content analysis", "virality", "creator framework"],
    related: ["turn-viral-views-into-followers", "creator-ab-testing", "creator-content-analytics"],
    body: [
      {
        type: "paragraph",
        text: "When a video takes off, the tempting conclusion is \"that format works\" or \"the algorithm liked it.\" Usually it's a combination of factors, some repeatable and some luck. A framework helps you tell which is which so you can test the repeatable parts.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To analyse a viral video, examine seven factors: topic (why it mattered to many people), timing (a trend, season or news moment), hook (first seconds), format and length, emotion (surprise, relatability, usefulness, controversy), distribution (traffic sources, shares, non-follower reach) and audience (who watched and whether they fit your niche). Then separate what you can repeat from what was circumstantial, and design a few tests.",
      },
      { type: "heading", text: "The seven-factor framework", id: "framework" },
      {
        type: "table",
        headers: ["Factor", "Questions", "Repeatable?"],
        rows: [
          ["Topic", "Was it a broadly relatable problem or question?", "Often"],
          ["Timing", "Did it ride a trend, festival, launch or news?", "Sometimes"],
          ["Hook", "What happened in the first 1–3 seconds?", "Yes"],
          ["Format and length", "Structure, pace, length", "Yes"],
          ["Emotion", "Surprise, humour, usefulness, outrage, nostalgia?", "Partly"],
          ["Distribution", "Which traffic source? Shares? Non-follower share?", "Partly"],
          ["Audience", "Who watched? Your niche or a broad crowd?", "Informative"],
        ],
      },
      { type: "heading", text: "Data to check", id: "data" },
      {
        type: "list",
        items: [
          "Traffic sources and non-follower share.",
          "Retention graph: where people stayed and rewatched.",
          "Shares per 1,000 views compared with your average.",
          "Follows gained and whether new followers fit your niche.",
          "Comment themes.",
        ],
      },
      { type: "heading", text: "Analysing other creators' viral videos", id: "others" },
      {
        type: "paragraph",
        text: "You can't see their analytics, but you can study the hook, structure, length, topic, timing and comments. Learn the principle, not the specifics: copying another creator's video isn't just ineffective, it may infringe their rights and platforms are less likely to recommend unoriginal content.",
      },
      { type: "heading", text: "Turn findings into tests", id: "tests" },
      {
        type: "template",
        label: "From analysis to experiment",
        text: "Hypothesis: \"Result-first hooks on myth-busting topics outperform question hooks.\"\nTest: 4 videos, same topic type, 2 with each hook style\nMeasure: viewed vs swiped away / early retention, shares per 1,000 views\nDecide after: 2 weeks",
      },
      {
        type: "paragraph",
        text: "See creator A/B testing.",
        links: [{ text: "creator A/B testing", href: "/blog/creator-ab-testing" }],
      },
      { type: "heading", text: "Worked example", id: "worked-example" },
      {
        type: "template",
        label: "Filled-in framework (hypothetical)",
        text: "Video: \"10-minute paneer tiffin\" Reel from a food creator (hypothetical)\nResult: about 15x the creator's median views, 70% from non-followers\n\nTopic: busy working parents' lunch problem → broadly relatable ✓ (repeatable)\nTiming: posted the week schools reopened → helped (partly circumstantial)\nHook: finished tiffin shown in frame 1 + \"10 minutes, one pan\" → strong ✓ (repeatable)\nFormat: steps on screen, no voiceover needed → easy to share ✓ (repeatable)\nEmotion: relief/usefulness → high saves and shares ✓\nDistribution: shares per 1,000 views ~3x median → shared in family WhatsApp groups (inferred from comments)\nAudience: new followers were mostly parents, in-niche ✓\n\nRepeatable: result-first hook, one-pan constraint, on-screen steps, tiffin topic\nCircumstantial: school-reopening week\nNext tests: 4 more \"10-minute tiffin\" episodes, 2 with and 2 without on-screen steps",
      },
      {
        type: "paragraph",
        text: "Turn repeatable findings into a named series; see creator content series.",
        links: [{ text: "creator content series", href: "/blog/creator-content-series" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Crediting one factor for everything.",
          "Chasing an off-niche viral topic forever.",
          "Copying rather than learning the principle.",
          "Ignoring that luck and timing play a role.",
        ],
      },
      {
        type: "paragraph",
        text: "Use the retention graph explained in watch time vs retention, and review patterns across many posts with the content performance audit.",
        links: [{ text: "watch time vs retention", href: "/blog/watch-time-vs-retention" }, { text: "content performance audit", href: "/blog/content-performance-audit" }],
      },
      {
        type: "paragraph",
        text: "One viral video is a single data point; creator competitor analysis shows how to study patterns across several creators without copying them.",
        links: [{ text: "creator competitor analysis", href: "/blog/creator-competitor-analysis" }],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Break every breakout down with the seven factors, write down what's repeatable, and test it on purpose. Then follow up quickly to keep the new viewers; see how to turn viral views into loyal followers.",
        links: [{ text: "how to turn viral views into loyal followers", href: "/blog/turn-viral-views-into-followers" }],
      },
    ],
    faqs: [
      {
        question: "How do I figure out why my video went viral?",
        answer: "Examine topic, timing, hook, format, emotion, distribution and audience using your analytics and comments, then separate repeatable factors from luck.",
      },
      {
        question: "Can I copy another creator's viral video?",
        answer: "Learn the principles instead. Copying may infringe their rights, and platforms are less likely to recommend unoriginal content.",
      },
      {
        question: "Can virality be repeated?",
        answer: "Not reliably, but repeatable factors like hooks, formats and topics can be tested to improve your odds.",
      },
    ],
  },
  {
    slug: "content-performance-audit",
    category: "Creator Resources",
    title: "Content Performance Audit for Creators: How to Review Your Last 30 Posts",
    seoTitle: "Content Performance Audit: Review Your Last 30 Posts",
    excerpt:
      "A step-by-step audit of your last 30 posts with a ready-to-use template: collecting the data, scoring posts against your own medians, spotting patterns and leaving with three clear decisions.",
    metaDescription:
      "Content performance audit for creators: how to review your last 30 posts, the audit template columns, scoring against your own medians, finding patterns by topic, hook and format, and three decisions to take.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    updatedAt: "2026-09-29",
    readingTime: "10 min read",
    tags: ["content audit", "content performance review", "30 post audit", "creator analytics template", "social media audit", "creator content audit", "100 post content audit"],
    related: ["creator-content-analytics", "creator-content-calendar", "creator-analytics-dashboard"],
    body: [
      {
        type: "paragraph",
        text: "Looking at one post at a time tells you very little. Looking at thirty side by side shows patterns you can't see day to day: which topics carry you, which formats drag, which hooks actually hold. A monthly or quarterly audit is where most useful content decisions come from.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To audit your last 30 posts: export or copy key metrics for each (views, reach, average watch time, saves, shares, comments, follows), tag each post with topic, format, hook type, length and whether it was sponsored, calculate your medians, mark posts above and below median on the metric that matched their goal, look for patterns in the tags, and finish with three decisions: repeat, fix and stop.",
      },
      { type: "heading", text: "The 30-post audit template", id: "template" },
      {
        type: "template",
        label: "Columns (one row per post)",
        text: "# | Date | Platform | Format | Topic/pillar | Series? | Hook type | Length | Sponsored? | Goal (reach/depth/growth/conversion)\n| Views | Reach | Non-follower % | Avg watch time / % viewed | Saves | Shares | Comments | Follows gained | Link taps / clicks\n| Saves per 1k views | Shares per 1k views | Above/below median on goal metric | Notes",
      },
      { type: "heading", text: "Step by step", id: "steps" },
      {
        type: "list",
        items: [
          "1. Collect data at a consistent point (e.g. 7 days after posting).",
          "2. Tag every post honestly (topic, format, hook, length, sponsored).",
          "3. Calculate the median for each metric.",
          "4. Mark each post above or below median on its goal metric.",
          "5. Sort by tag and count above-median posts per tag.",
          "6. Write down three patterns.",
          "7. Make three decisions.",
        ],
      },
      { type: "heading", text: "Reading the patterns", id: "patterns" },
      {
        type: "table",
        headers: ["Pattern", "Possible meaning", "Decision"],
        rows: [
          ["One pillar above median 70% of the time", "Core audience interest", "Give it more slots or a series"],
          ["High views, low follows", "Broad reach, weak identity", "Stronger series and profile"],
          ["Low views, high saves", "Valuable but weak hooks", "Improve packaging, not topic"],
          ["Sponsored posts well below median", "Integration feels like an ad", "Change how products are integrated"],
          ["Long posts underperform", "Length vs retention issue", "Test shorter versions"],
        ],
      },
      { type: "heading", text: "Three decisions", id: "decisions" },
      {
        type: "template",
        text: "REPEAT: ______ (evidence: __ of __ above median)\nFIX: ______ (what exactly will change)\nSTOP: ______ (below median for 2+ audits)\n\nNext audit date: ______",
      },
      {
        type: "paragraph",
        text: "Feed decisions into next month's creator content calendar and track trends in your creator analytics dashboard.",
        links: [
          { text: "creator content calendar", href: "/blog/creator-content-calendar" },
          { text: "creator analytics dashboard", href: "/blog/creator-analytics-dashboard" },
        ],
      },
      { type: "heading", text: "Going deeper: a quarterly 100-post audit", id: "deep-audit" },
      {
        type: "image",
        src: "/blog/creator-resources/creator-content-audit-lenses.svg",
        alt: "Five content audit lenses: reach, engagement, retention, conversion and audience fit",
        caption: "Judge each post by the lens that matches its goal.",
        width: 1200,
        height: 675,
      },
      {
        type: "paragraph",
        text: "The 30-post audit is a monthly check. Once a quarter, extend it to your last 100 posts (or six months) to see patterns that a month can't show: which pillars grow the audience, which formats convert, and which content attracts the wrong audience.",
      },
      {
        type: "table",
        headers: ["Lens", "Question", "Metric"],
        rows: [
          ["Reach", "Did it find new people?", "Views, non-follower reach"],
          ["Engagement", "Did people value it?", "Saves and shares per 1,000 views"],
          ["Retention", "Did people stay?", "Average % watched"],
          ["Conversion", "Did it move people?", "Follows, clicks, sign-ups per 1,000 views"],
          ["Audience fit", "Were they the right people?", "Comment quality; audience demographics of top posts"],
        ],
      },
      {
        type: "paragraph",
        text: "Finish with decisions for the next quarter's content strategy: which pillars and formats to grow, change or drop. Creator content strategy explains how to update the plan.",
        links: [
          { text: "Creator content strategy", href: "/blog/creator-content-strategy" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Collecting data at different times after posting.",
          "Using averages distorted by one viral post; medians are safer.",
          "Auditing without tags, so patterns are invisible.",
          "Ending with observations but no decisions.",
        ],
      },
      {
        type: "paragraph",
        text: "For choosing metrics by goal, see creator content analytics; for testing changes, creator A/B testing.",
        links: [{ text: "creator content analytics", href: "/blog/creator-content-analytics" }, { text: "creator A/B testing", href: "/blog/creator-ab-testing" }],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Block ninety minutes a month for this audit. The template gets faster each time, and three clear decisions a month add up to a noticeably better content strategy within a quarter.",
      },
    ],
    faqs: [
      {
        question: "How do I audit my social media content?",
        answer: "Collect metrics for your last 30 posts at a consistent point, tag each by topic, format, hook, length and sponsorship, compare against your medians, look for patterns and make three decisions.",
      },
      {
        question: "Why use medians instead of averages?",
        answer: "One viral post can distort an average. The median shows your typical performance more reliably.",
      },
      {
        question: "How often should creators audit content?",
        answer: "Monthly for active creators, or quarterly if you post less often.",
      },
    ],
  },
  {
    slug: "creator-ab-testing",
    category: "Creator Resources",
    title: "Creator A/B Testing: How to Test Hooks, Thumbnails, Titles and Formats",
    seoTitle: "Creator A/B Testing: Test Hooks, Thumbnails and Titles",
    excerpt:
      "How to run controlled content experiments instead of random changes: built-in tools like YouTube's title and thumbnail testing and Instagram Trial Reels, manual test design, and reading results fairly.",
    metaDescription:
      "Creator A/B testing: controlled tests for hooks, thumbnails, titles and formats, YouTube title and thumbnail A/B testing, Instagram Trial Reels, manual test design, sample sizes and avoiding false conclusions.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "10 min read",
    tags: ["A/B testing creators", "thumbnail test", "YouTube test and compare", "Trial Reels", "content experiments"],
    related: ["short-form-video-hooks", "how-to-analyze-a-viral-video", "youtube-seo-for-creators"],
    body: [
      {
        type: "paragraph",
        text: "Changing five things at once and seeing views go up tells you nothing about which change helped. Testing means changing one thing, keeping everything else as similar as possible, and measuring the result that change should affect.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creator A/B testing means comparing two or more versions that differ in one variable (hook, thumbnail, title, format or length) and measuring the metric that variable affects. Use built-in tools where available: YouTube lets eligible creators A/B test up to three titles and thumbnails on long-form videos, choosing the winner by watch time; Instagram Trial Reels let you test content with non-followers first. Otherwise run manual tests across several similar posts and decide only after enough data.",
      },
      { type: "heading", text: "Built-in testing tools", id: "tools" },
      {
        type: "table",
        headers: ["Tool", "What it tests", "Notes"],
        rows: [
          ["YouTube title and thumbnail A/B testing", "Up to 3 titles and/or thumbnails per video", "Desktop YouTube Studio; advanced features needed; not for Shorts, scheduled lives or Premieres; winner chosen by watch time; usually within two weeks"],
          ["Instagram Trial Reels", "A reel shown to non-followers first", "For eligible professional accounts; shows early performance before sharing to followers"],
        ],
      },
      {
        type: "paragraph",
        text: "Official details: YouTube A/B testing for titles and thumbnails and Instagram Trial Reels.",
        links: [
          { text: "YouTube A/B testing for titles and thumbnails", href: SOURCES.youtubeAbTesting },
          { text: "Instagram Trial Reels", href: SOURCES.instagramTrialReels },
        ],
      },
      { type: "heading", text: "What to test and how to measure", id: "variables" },
      {
        type: "table",
        headers: ["Variable", "Primary metric"],
        rows: [
          ["Thumbnail / title", "Watch time from impressions (YouTube's test metric), CTR"],
          ["Hook", "Viewed vs swiped away, early retention"],
          ["Length", "Average % viewed, watch time"],
          ["Format", "Metric matching the goal (shares, saves, follows)"],
          ["Caption / keywords", "Search traffic, reach from non-followers"],
          ["Posting time", "Views in first 24 hours (weak signal; test last)"],
        ],
      },
      { type: "heading", text: "Designing a manual test", id: "manual" },
      {
        type: "template",
        label: "Test card",
        text: "HYPOTHESIS: [e.g. On-screen result in the first frame improves hold]\nVARIABLE: [one thing only]\nVERSIONS: A = [current] · B = [change]\nSAMPLE: [e.g. 4 posts each, same pillar, same length range]\nMETRIC: [e.g. viewed vs swiped away]\nDURATION: [e.g. 2 weeks, measured 7 days after each post]\nDECISION RULE: [e.g. adopt B if it beats A on 3 of 4 pairs]",
      },
      { type: "heading", text: "Avoiding false conclusions", id: "false" },
      {
        type: "list",
        items: [
          "One post per version is too little; topic and timing noise will dominate.",
          "Don't change the variable mid-test.",
          "Compare similar topics and lengths.",
          "Watch for outside events (festivals, news) that affect all posts.",
          "Record results even when the test \"fails\"; that's learning too.",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Testing several variables at once.",
          "Picking the metric after seeing results.",
          "Declaring winners after a day.",
          "Using misleading thumbnails that win clicks but lose watch time.",
        ],
      },
      {
        type: "paragraph",
        text: "Pick what to test from your content performance audit, and for titles and thumbnails in search, see YouTube SEO for creators.",
        links: [{ text: "content performance audit", href: "/blog/content-performance-audit" }, { text: "YouTube SEO for creators", href: "/blog/youtube-seo-for-creators" }],
      },
      {
        type: "paragraph",
        text: "What to test on thumbnails and titles is covered in creator thumbnail strategy and creator title strategy.",
        links: [
          { text: "creator thumbnail strategy", href: "/blog/creator-thumbnail-strategy" },
          { text: "creator title strategy", href: "/blog/creator-title-strategy" },
        ],
      },
      {
        type: "paragraph",
        text: "Brands testing creators and approaches across campaigns can use the brand-side guide to influencer marketing testing.",
        links: [
          { text: "influencer marketing testing", href: "/blog/influencer-marketing-testing" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Run one test a month, one variable at a time, with a written hypothesis and decision rule. Use built-in tools where available and keep a test log. Hooks are often the best first test; see short-form video hooks.",
        links: [{ text: "short-form video hooks", href: "/blog/short-form-video-hooks" }],
      },
    ],
    faqs: [
      {
        question: "Can I A/B test YouTube thumbnails and titles?",
        answer: "Yes. YouTube lets eligible creators test up to three titles and/or thumbnails on long-form videos in desktop YouTube Studio; the version with the most watch time is chosen. Shorts, scheduled lives and Premieres aren't supported.",
      },
      {
        question: "What are Instagram Trial Reels?",
        answer: "A feature for eligible professional accounts that shows a reel to non-followers first so you can see early performance before sharing it with followers.",
      },
      {
        question: "How many posts do I need for a manual test?",
        answer: "More than one per version. Several similar posts per version reduce the effect of topic and timing noise.",
      },
    ],
  },
  {
    slug: "creator-content-roi",
    category: "Creator Resources",
    title: "Creator Content ROI: How to Measure Whether Your Time and Money Are Paying Off",
    seoTitle: "Creator Content ROI: Measure Your Time and Money",
    excerpt:
      "How to connect content performance to the time and money it costs and the outcomes it produces, by format, series and platform, with an ROI worksheet and how to decide what to produce more or less of.",
    metaDescription:
      "Creator content ROI: tracking time and cost per piece, outcomes (audience, leads, revenue), ROI by format, series and platform, an ROI worksheet with hypothetical numbers, and deciding what to produce.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    updatedAt: "2026-09-29",
    readingTime: "10 min read",
    tags: ["content ROI", "creator ROI", "creator business ROI", "time tracking creators", "content cost", "creator business"],
    related: ["creator-business-plan", "creator-business-expenses-india", "creator-analytics-dashboard"],
    body: [
      {
        type: "paragraph",
        text: "A long documentary-style video might take four days and ₹15,000 in travel. A quick tip Reel might take forty minutes. If both bring similar followers, leads or income, you've learned something important about where to spend your week. Content ROI puts effort and outcome side by side.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To measure content ROI, track the time and money each piece or format costs, record the outcomes it produces (views, audience growth, email sign-ups, leads, affiliate and brand revenue), and compare outcomes per hour and per rupee across formats, series and platforms. Some content earns directly; some builds the audience that earns later, so judge each by its role.",
      },
      { type: "heading", text: "Track the inputs", id: "inputs" },
      {
        type: "table",
        headers: ["Input", "How to track"],
        rows: [
          ["Your time", "Hours per piece: planning, filming, editing, publishing"],
          ["Team time", "Editor, designer, assistant hours or fees"],
          ["Direct costs", "Props, travel, locations, products, music licences"],
          ["Tools", "Share of monthly software costs"],
        ],
      },
      { type: "heading", text: "Track the outcomes", id: "outcomes" },
      {
        type: "table",
        headers: ["Outcome type", "Examples"],
        rows: [
          ["Audience", "Follows, subscribers, returning viewers"],
          ["Owned audience", "Email sign-ups, community joins"],
          ["Leads", "Brand enquiries, service bookings"],
          ["Direct revenue", "Affiliate commissions, product sales, platform revenue"],
          ["Brand revenue", "Sponsored fees attributable to the content or series"],
        ],
      },
      { type: "heading", text: "ROI worksheet", id: "worksheet" },
      {
        type: "template",
        label: "Monthly, by format (hypothetical numbers)",
        text: "FORMAT: Long review videos (4/month)\nTime: 48 hrs · Costs: ₹12,000\nOutcomes: 1,200 subscribers · 180 email sign-ups · ₹22,000 affiliate + ad revenue · 2 brand enquiries\nPer hour: 25 subs · ₹458 revenue\n\nFORMAT: Tip Shorts/Reels (12/month)\nTime: 12 hrs · Costs: ₹0\nOutcomes: 900 followers · 20 sign-ups · ₹1,500 revenue\nPer hour: 75 followers · ₹125 revenue\n\nReading: Shorts are efficient for audience growth; long reviews earn more per hour. Keep both, but protect long-form time.",
      },
      { type: "heading", text: "Judge content by its role", id: "role" },
      {
        type: "list",
        items: [
          "Reach content: judge by audience growth per hour.",
          "Depth content: judge by returning viewers, sign-ups and trust signals.",
          "Commerce content: judge by revenue per hour and per rupee.",
          "Brand showcase content: judge by enquiries and deals it supports.",
        ],
      },
      { type: "heading", text: "Decisions", id: "decisions" },
      {
        type: "list",
        items: [
          "Protect formats with high outcome per hour.",
          "Cut or simplify formats with high cost and weak outcomes.",
          "Outsource tasks where your hourly outcome is higher elsewhere (e.g. editing).",
          "Revisit pricing if sponsored content costs more to make than you charge.",
        ],
      },
      {
        type: "paragraph",
        text: "Costs come from your creator business expenses log, and decisions feed your creator business plan. Pricing is covered in how much creators should charge.",
        links: [
          { text: "creator business expenses", href: "/blog/creator-business-expenses-india" },
          { text: "creator business plan", href: "/blog/creator-business-plan" },
          { text: "how much creators should charge", href: "/blog/how-much-should-creators-charge-india" },
        ],
      },
      { type: "heading", text: "Is your creator business working? A quarterly check", id: "business-roi" },
      {
        type: "paragraph",
        text: "Content ROI looks at pieces and formats. Once a quarter, zoom out to the business: is the whole thing working for the time and money you put in?",
      },
      {
        type: "template",
        label: "Quarterly business ROI check",
        text: "Revenue: total and by stream (income tracker)\nCosts: direct costs, tools, team, equipment share\nProfit: revenue minus costs\nHours: total time spent on the business\nEffective hourly rate: profit \u00f7 hours\nGrowth: owned audience (email, community) and audience quality\nConcentration: share of income from largest client/platform\nDecision: what to do more of, less of, stop",
      },
      {
        type: "paragraph",
        text: "Track revenue in a creator income tracker, calculate profit per deal with creator brand deal profit, and use the concentration figure to decide on creator revenue diversification.",
        links: [
          { text: "creator income tracker", href: "/blog/creator-income-tracker" },
          { text: "creator brand deal profit", href: "/blog/creator-brand-deal-profit" },
          { text: "creator revenue diversification", href: "/blog/creator-revenue-diversification" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Not tracking your own time because it's \"free\".",
          "Judging reach content by revenue alone.",
          "Counting pending affiliate commissions as earned.",
          "Cutting depth content that quietly drives brand deals.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Track time and cost for one month, match them to outcomes by format, and you'll know which content deserves more of your week. Review quarterly alongside your business plan.",
      },
    ],
    faqs: [
      {
        question: "How do creators measure content ROI?",
        answer: "By tracking time and money spent per piece or format and comparing it with outcomes such as audience growth, email sign-ups, leads and revenue, per hour and per rupee.",
      },
      {
        question: "Should all content make money directly?",
        answer: "No. Reach and depth content build the audience that later earns. Judge each piece by its role.",
      },
      {
        question: "Why track my own time?",
        answer: "Your time is your most limited resource. Outcomes per hour show which formats deserve more of it and which tasks to outsource.",
      },
    ],
  },
];
