import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_FACTS_REVIEWED, CREATOR_LAYER_4_PUBLISHED as PUBLISHED, SOURCES } from "@/content/creator-resources/shared";

/** Creator SEO and search discovery (500–509). Platform facts checked September 2026. */
export const searchDiscoveryPosts: BlogPost[] = [
  {
    slug: "creator-seo",
    category: "Creator Resources",
    title: "Creator SEO: Complete Guide to Getting Discovered Across Google, YouTube and Social Search",
    seoTitle: "Creator SEO: Get Discovered on Google, YouTube and Social",
    excerpt:
      "Search is where people go when they already want something. Here's how discovery works across Google, YouTube, Instagram, TikTok and AI search, and a single system for being findable on all of them.",
    metaDescription:
      "Creator SEO explained: how discovery differs across Google, YouTube, Instagram, TikTok and AI search, and a practical system to make your content findable for the questions your audience asks.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    updatedAt: "2026-09-29",
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["creator SEO", "SEO for creators", "search discovery", "YouTube SEO", "social search", "creator SEO content strategy", "search-first content", "creator discoverability"],
    related: ["social-search-for-creators", "youtube-seo-for-creators", "creator-website-seo"],
    body: [
      {
        type: "paragraph",
        text: "Feeds show people what an algorithm thinks they might like. Search shows people what they asked for. For creators, search traffic is valuable because it arrives with intent, keeps arriving long after posting, and doesn't depend on being in the right feed on the right day.",
      },
      {
        type: "paragraph",
        text: "This is the overview of creator search across platforms. For your own website specifically, see creator website SEO.",
        links: [{ text: "creator website SEO", href: "/blog/creator-website-seo" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creator SEO means making your content easy to find when people search, on Google, YouTube, Instagram, TikTok and increasingly AI search tools. Each platform ranks results differently, but the same foundations help everywhere: pick topics people actually search for, use the words they use in titles, captions, spoken audio and on-screen text, answer the question quickly and well, keep your identity consistent across platforms, and measure which searches bring viewers. There is no single universal algorithm.",
      },
      { type: "heading", text: "How discovery differs by platform", id: "platforms" },
      {
        type: "image",
        src: "/blog/creator-resources/creator-search-ecosystem.svg",
        alt: "Creator search ecosystem: Google Search, YouTube Search, Instagram Search, TikTok Search, social discovery feeds and AI search, each with its main discovery signals",
        caption: "Six discovery surfaces, six different systems. The shared foundation is matching real questions with clear, useful answers.",
        width: 1200,
        height: 675,
      },
      {
        type: "table",
        headers: ["Surface", "How people find content", "What helps creators"],
        rows: [
          ["Google Search", "Web pages, videos and social posts ranked for a query", "A website with helpful pages; video results; consistent name and profiles"],
          ["YouTube Search", "Results ranked by relevance, engagement and quality", "Clear titles and descriptions, strong watch time for that query, topical authority"],
          ["Instagram Search", "Accounts, audio, hashtags, places and posts matching search text", "Keywords in name, bio and captions; relevant hashtags; engagement"],
          ["TikTok Search", "Videos matching queries, where available", "Keywords in captions, on-screen text and speech (TikTok isn't available in India)"],
          ["Social discovery feeds", "Recommendations based on behaviour, not queries", "Retention, shares, saves, consistency"],
          ["AI search and answers", "Summaries citing web pages and videos", "Being indexed and eligible for search snippets; clear, well-structured answers"],
        ],
      },
      {
        type: "paragraph",
        text: "Official explanations: How YouTube search works, how Instagram search works, and Google's guidance on AI features and your website.",
        links: [
          { text: "How YouTube search works", href: SOURCES.youtubeSearch },
          { text: "how Instagram search works", href: SOURCES.instagramSearch },
          { text: "Google's guidance on AI features and your website", href: SOURCES.googleAiFeatures },
        ],
      },
      { type: "heading", text: "Search vs recommendations", id: "search-vs-recommendations" },
      {
        type: "paragraph",
        text: "Search responds to a query; recommendations respond to behaviour. Most creators get views from both. A video titled for search (\"best budget phone under ₹15,000\") can keep collecting views for months, while a trend-led Reel spikes and fades. A healthy channel usually has both kinds. YouTube search vs recommendations explains how to plan for each.",
        links: [{ text: "YouTube search vs recommendations", href: "/blog/youtube-search-vs-recommendations" }],
      },
      { type: "heading", text: "The creator SEO system", id: "system" },
      { type: "subheading", text: "1. Research what people search" },
      {
        type: "paragraph",
        text: "Use search suggestions, YouTube's Trends and research insights in Studio, TikTok's Creator Search Insights where available, your comments, and Google Search Console for your website. See YouTube keyword research and how to find content gaps.",
        links: [
          { text: "YouTube keyword research", href: "/blog/youtube-keyword-research" },
          { text: "how to find content gaps", href: "/blog/how-to-find-content-gaps" },
        ],
      },
      { type: "subheading", text: "2. Say the keyword where each platform reads it" },
      {
        type: "list",
        items: [
          "Titles and captions: the words people type, early and naturally.",
          "Spoken audio: platforms can process speech; say the topic clearly in the first seconds.",
          "On-screen text: reinforces the topic for viewers and search.",
          "Descriptions and alt text: more context, especially on YouTube and your website.",
          "Profile and bio: what your account is about, in searchable words.",
        ],
      },
      { type: "subheading", text: "3. Answer fast and well" },
      {
        type: "paragraph",
        text: "Search viewers leave quickly if the answer isn't there. Put the answer or promise early, then deliver it. Engagement for that query is a ranking signal on YouTube.",
      },
      { type: "subheading", text: "4. Build topical authority" },
      {
        type: "paragraph",
        text: "A channel with twenty videos on budget phones is more likely to be seen as a good result for budget phone searches than one video among random topics. Series and playlists help. See how to build authority as a creator.",
        links: [{ text: "how to build authority as a creator", href: "/blog/how-to-build-authority-as-a-creator" }],
      },
      { type: "subheading", text: "5. Connect your identity" },
      {
        type: "paragraph",
        text: "Use the same name, photo and short description across platforms, link them to each other and to your website. This helps Google and AI tools understand who you are. See how to build a creator website.",
        links: [{ text: "how to build a creator website", href: "/blog/how-to-build-a-creator-website" }],
      },
      { type: "subheading", text: "6. Measure search traffic" },
      {
        type: "paragraph",
        text: "YouTube Analytics shows YouTube search as a traffic source and the search terms that found you. Search Console shows Google queries for your site. Add these to your creator analytics dashboard.",
        links: [{ text: "creator analytics dashboard", href: "/blog/creator-analytics-dashboard" }],
      },
      { type: "heading", text: "AI search and creators", id: "ai-search" },
      {
        type: "paragraph",
        text: "AI answers increasingly summarise the web and cite sources. Google says there are no special technical requirements to appear as a supporting link in its AI features beyond being indexed and eligible for a snippet. Practically, clear, specific, well-structured answers from a credible creator are what get cited. Keep your website and video descriptions factual and up to date.",
      },
      { type: "heading", text: "Platform guides", id: "guides" },
      {
        type: "list",
        items: [
          "YouTube: YouTube SEO for creators, keyword research, search vs recommendations.",
          "Instagram: Instagram SEO for creators and Instagram keyword strategy.",
          "TikTok: TikTok SEO and Creator Search Insights (for creators outside India).",
          "Social behaviour overall: social search for creators.",
        ],
      },
      {
        type: "paragraph",
        text: "Start with YouTube SEO for creators, Instagram SEO for creators, TikTok SEO and social search for creators.",
        links: [
          { text: "YouTube SEO for creators", href: "/blog/youtube-seo-for-creators" },
          { text: "Instagram SEO for creators", href: "/blog/instagram-seo-for-creators" },
          { text: "TikTok SEO", href: "/blog/tiktok-seo" },
          { text: "social search for creators", href: "/blog/social-search-for-creators" },
        ],
      },
      { type: "heading", text: "A search-first content plan", id: "search-first" },
      {
        type: "paragraph",
        text: "Search-first content starts from what people are looking for, then makes the best answer in your style.",
      },
      {
        type: "template",
        label: "Search-first planning (monthly)",
        text: "1. List 20 questions your audience searches (search suggestions, research insights, comments)\n2. Check current results: what's missing, outdated or unclear?\n3. Pick 4\u20136 that fit your pillars and you can answer best\n4. Title and open with the searched phrase; answer early\n5. Link each to related content (series, playlists, guides)\n6. Review search traffic after 30 and 90 days; update winners",
      },
      {
        type: "paragraph",
        text: "Discoverability isn't only search: recommendations, collaborations and distribution matter too. Creator title strategy covers packaging for search and clicks, and creator content distribution covers the rest.",
        links: [
          { text: "Creator title strategy", href: "/blog/creator-title-strategy" },
          { text: "creator content distribution", href: "/blog/creator-content-distribution" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Assuming one algorithm works the same everywhere.",
          "Clever titles nobody would ever type into a search box.",
          "Keyword stuffing captions and hashtags until they read like spam.",
          "Chasing search terms unrelated to your niche.",
          "Never checking which searches actually bring viewers.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Treat search as a long-term asset. Pick a handful of questions your audience keeps asking, make the best answer on each platform you use, label it in the words people search, and review search traffic monthly. Over time, search viewers become a steady base that feeds don't provide.",
      },
    ],
    faqs: [
      {
        question: "What is creator SEO?",
        answer:
          "Making your content easy to find when people search on Google, YouTube, Instagram, TikTok and AI tools, by covering topics people search for, using their words in titles, captions, speech and on-screen text, and answering well.",
      },
      {
        question: "Is there one algorithm for all platforms?",
        answer:
          "No. Each platform ranks search results and recommendations differently. Shared foundations such as relevance, clear answers and engagement help across platforms, but tactics differ.",
      },
      {
        question: "How do creators appear in Google AI Overviews?",
        answer:
          "Google says pages need to be indexed and eligible to show a snippet in Search; there are no extra technical requirements. Clear, helpful, well-structured answers are what tend to be useful to cite.",
      },
    ],
  },
  {
    slug: "social-search-for-creators",
    category: "Creator Resources",
    title: "Social Search for Creators: How to Get Discovered Without Relying on Followers",
    seoTitle: "Social Search for Creators: Get Discovered Without Followers",
    excerpt:
      "More people now search inside social apps for recipes, products, places and advice. Here's how social search behaviour works and how creators can be the answer, even with a small following.",
    metaDescription:
      "Social search for creators: why people search on Instagram, YouTube and other apps, which queries social search suits, how to create search-friendly posts, and how to get discovered without relying on followers.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    updatedAt: "2026-09-29",
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "10 min read",
    tags: ["social search", "social media SEO", "discoverability", "search on Instagram", "small creators", "social search optimization"],
    related: ["creator-seo", "instagram-seo-for-creators", "how-to-find-content-gaps"],
    body: [
      {
        type: "paragraph",
        text: "Someone planning a weekend in Udaipur, choosing a sunscreen or learning a guitar chord often searches inside Instagram or YouTube before, or instead of, Google. That behaviour is social search. For creators, it's one of the few ways to reach new people who aren't your followers yet and don't depend on a trend.",
      },
      {
        type: "paragraph",
        text: "This article is about the behaviour and how to respond to it. For the full cross-platform system, see creator SEO.",
        links: [{ text: "creator SEO", href: "/blog/creator-seo" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Social search is when people type queries into social platforms to find content, products, places or advice. Creators get discovered through it by making posts that directly answer common, specific questions, and by labelling them in the words searchers use (in captions, on-screen text, speech, and profile text). Because search results aren't limited to followers, a small creator with the most useful answer can be found.",
      },
      { type: "heading", text: "What people search for on social platforms", id: "what-people-search" },
      {
        type: "table",
        headers: ["Query type", "Examples", "Content that answers it"],
        rows: [
          ["Visual \"show me\"", "\"saree draping styles\", \"small balcony garden ideas\"", "Short demos, before-and-after, carousels"],
          ["Reviews and comparisons", "\"best earbuds under 3000\"", "Honest comparisons and tests"],
          ["Places and experiences", "\"cafes in Indiranagar\", \"Rishikesh itinerary\"", "Location-tagged guides and walkthroughs"],
          ["How-to", "\"how to make filter coffee\", \"how to file ITR\"", "Step-by-step tutorials"],
          ["Language-specific", "Queries in Hindi, Tamil, Hinglish", "Content in that language with matching captions"],
          ["Creator or community", "Creator names, niche communities", "Consistent identity and series"],
        ],
      },
      { type: "heading", text: "Social search vs Google search", id: "vs-google" },
      {
        type: "table",
        headers: ["", "Social search", "Google search"],
        rows: [
          ["Format", "Video, images, short text", "Web pages, plus videos and social results"],
          ["Personalisation", "Strongly shaped by the searcher's activity", "Personalised to a lesser degree"],
          ["Trust signal", "Seeing a real person use or show it", "Authority and depth of the page"],
          ["Shelf life", "Varies; evergreen answers can last", "Often long-lived"],
        ],
      },
      { type: "heading", text: "How to be the answer", id: "be-the-answer" },
      {
        type: "list",
        items: [
          "Collect real questions: comments, DMs, search suggestions in each app.",
          "One question per post; say it in the first line and first seconds.",
          "Use the searcher's words, including Hinglish or regional terms.",
          "Add location tags for places and local businesses.",
          "Put key text on screen; many people watch without sound.",
          "Make evergreen versions of your best answers and update them.",
          "Group answers into series or guides so one good result leads to more of your content.",
        ],
      },
      { type: "heading", text: "Why followers matter less in search", id: "followers" },
      {
        type: "paragraph",
        text: "Search results are ranked for the query and the searcher, not just for accounts they follow. Instagram, for example, lists the search text itself as by far the most important signal, alongside the searcher's activity and popularity signals. That gives smaller creators a chance to appear for specific questions that larger accounts don't answer well.",
        links: [{ text: "Instagram, for example, lists the search text itself", href: SOURCES.instagramSearch }],
      },
      { type: "heading", text: "Turning searchers into followers", id: "convert" },
      {
        type: "list",
        items: [
          "End with a reason to follow: \"Part 1 of my 10-part budget phone series.\"",
          "Pin related posts or link a playlist.",
          "Keep your profile clear so a searcher instantly understands what else you offer.",
        ],
      },
      {
        type: "paragraph",
        text: "For converting sudden reach into a real audience, see how to turn viral views into loyal followers.",
        links: [{ text: "how to turn viral views into loyal followers", href: "/blog/turn-viral-views-into-followers" }],
      },
      { type: "heading", text: "Social search optimization checklist", id: "checklist" },
      {
        type: "template",
        label: "Before posting a searchable piece",
        text: "\u2610 Searched phrase said in the first seconds\n\u2610 Phrase in the first line of the caption\n\u2610 Phrase in on-screen text or cover\n\u2610 Profile name field and bio describe your topic\n\u2610 A few specific hashtags or keywords, not long lists\n\u2610 Clear, fast answer; detail after\n\u2610 Linked to a series or next video for searchers who want more",
      },
      {
        type: "paragraph",
        text: "Platform specifics: Instagram SEO for creators, TikTok SEO and YouTube SEO for creators.",
        links: [
          { text: "Instagram SEO for creators", href: "/blog/instagram-seo-for-creators" },
          { text: "TikTok SEO", href: "/blog/tiktok-seo" },
          { text: "YouTube SEO for creators", href: "/blog/youtube-seo-for-creators" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Vague captions like \"obsessed 😍\" that no one would search for.",
          "Answering five questions in one post so none is answered well.",
          "Ignoring regional-language searches your audience actually uses.",
          "Relying only on hashtags instead of clear words.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Social search rewards specific, useful answers. List the twenty questions your audience asks most, make one clear post for each, label it the way people search, and link them together. It's slower than a trend but compounds. For Instagram specifics, see Instagram SEO for creators.",
        links: [{ text: "Instagram SEO for creators", href: "/blog/instagram-seo-for-creators" }],
      },
    ],
    faqs: [
      {
        question: "What is social search?",
        answer: "People typing queries into social platforms like Instagram or YouTube to find content, products, places or advice, instead of or before using a search engine.",
      },
      {
        question: "Can small creators get discovered through social search?",
        answer:
          "Yes. Search results are ranked for the query and searcher, not only followers, so a specific, useful answer from a small creator can appear for relevant searches.",
      },
      {
        question: "Are hashtags enough for social search?",
        answer:
          "Not on their own. Clear keywords in captions, spoken audio, on-screen text and your profile matter too. Use a few relevant hashtags rather than long lists.",
      },
    ],
  },
  {
    slug: "youtube-seo-for-creators",
    category: "Creator Resources",
    title: "YouTube SEO for Creators: Complete Guide to Ranking Videos and Shorts",
    seoTitle: "YouTube SEO for Creators: Rank Videos and Shorts",
    excerpt:
      "How YouTube search ranks results, and exactly what creators can optimise: topic choice, titles, thumbnails, descriptions, chapters, captions, Shorts, playlists and the watch time that follows the click.",
    metaDescription:
      "YouTube SEO for creators: how YouTube search ranks by relevance, engagement and quality, and how to optimise titles, thumbnails, descriptions, chapters, captions, Shorts and playlists, with a checklist.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["YouTube SEO", "rank YouTube videos", "YouTube Shorts SEO", "YouTube titles", "YouTube descriptions"],
    related: ["youtube-keyword-research", "youtube-search-vs-recommendations", "youtube-analytics-for-creators"],
    body: [
      {
        type: "paragraph",
        text: "YouTube is one of the world's biggest search engines, and in India it's where many people go to learn, compare and decide. Ranking in YouTube search isn't about tricks. It's about matching what people search, and then being the video they're happy they clicked.",
      },
      {
        type: "paragraph",
        text: "This guide covers optimisation. For finding the right topics first, see YouTube keyword research.",
        links: [{ text: "YouTube keyword research", href: "/blog/youtube-keyword-research" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "YouTube search ranks results using relevance (how well the title, description and video content match the query), engagement (such as watch time for that query) and quality (signals of expertise, authoritativeness and trustworthiness on the topic). To rank, choose topics people search, use the searched words naturally in your title, description, spoken audio and captions, design a thumbnail that earns the click, deliver the answer promptly, add chapters, and build a body of videos on the same topic. Tags play a minor role.",
      },
      { type: "heading", text: "How YouTube search ranks videos", id: "how-it-ranks" },
      {
        type: "table",
        headers: ["Factor", "What YouTube describes", "What creators control"],
        rows: [
          ["Relevance", "How well title, tags, description and content match the search", "Topic choice, wording in title, description, speech"],
          ["Engagement", "Signals such as watch time for that query", "Delivering what the title promises; strong opening"],
          ["Quality", "Signals of expertise, authoritativeness and trustworthiness on the topic", "Consistency on a topic, accuracy, credentials where relevant"],
        ],
      },
      {
        type: "paragraph",
        text: "YouTube notes these are weighted differently depending on the search. Source: How YouTube search works.",
        links: [{ text: "How YouTube search works", href: SOURCES.youtubeSearch }],
      },
      { type: "heading", text: "Optimise each element", id: "elements" },
      { type: "subheading", text: "Title" },
      {
        type: "list",
        items: [
          "Put the main searched phrase near the start: \"Best Budget Phone Under ₹15,000 (2026): 5 Tested\".",
          "Promise a specific outcome; avoid clickbait that the video doesn't deliver.",
          "Keep it readable; titles are cut off on phones.",
        ],
      },
      { type: "subheading", text: "Thumbnail" },
      {
        type: "paragraph",
        text: "The thumbnail earns the click; the title explains it. Use one clear focal point, readable text of a few words, and consistency with your channel style. YouTube lets eligible creators A/B test titles and thumbnails; see creator A/B testing.",
        links: [{ text: "creator A/B testing", href: "/blog/creator-ab-testing" }],
      },
      { type: "subheading", text: "Description" },
      {
        type: "list",
        items: [
          "First two lines: a plain summary using the main phrase; this shows in search.",
          "Then detail, chapters, links, and disclosures for sponsors or affiliate links.",
          "Write for people, not a keyword list.",
        ],
      },
      { type: "subheading", text: "Spoken audio and captions" },
      {
        type: "paragraph",
        text: "Say the topic clearly in the opening. Upload or correct captions, particularly for names, products and Hindi or regional terms that auto-captions mishear.",
      },
      { type: "subheading", text: "Chapters" },
      {
        type: "paragraph",
        text: "Timestamps in the description help viewers jump to what they searched for and make sections easier to understand.",
      },
      { type: "subheading", text: "Playlists and series" },
      {
        type: "paragraph",
        text: "Group videos by topic. A playlist of related answers keeps search viewers watching and reinforces what your channel is about.",
      },
      { type: "heading", text: "Shorts and search", id: "shorts" },
      {
        type: "list",
        items: [
          "Shorts can appear in search results; a clear title and spoken keyword help.",
          "Answer the question within the first seconds; Shorts viewers decide fast.",
          "Link Shorts to a related long video where relevant, so searchers can go deeper.",
        ],
      },
      {
        type: "paragraph",
        text: "For a Shorts-first channel, see YouTube Shorts content strategy.",
        links: [{ text: "YouTube Shorts content strategy", href: "/blog/youtube-shorts-content-strategy" }],
      },
      { type: "heading", text: "YouTube SEO checklist", id: "checklist" },
      {
        type: "template",
        text: "☐ Topic confirmed with search suggestions / Trends / research insights\n☐ Main phrase near the start of the title\n☐ Thumbnail readable on a phone\n☐ First two description lines summarise the video\n☐ Topic said clearly in the first 10 seconds\n☐ Captions checked\n☐ Chapters added (long videos)\n☐ Added to a topic playlist\n☐ End screen to a related video\n☐ Sponsor / affiliate disclosure where applicable\n☐ Search traffic reviewed after 7 and 28 days",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Stuffing tags and descriptions with every related phrase.",
          "Clickbait titles that increase clicks but reduce watch time.",
          "Long intros before the answer.",
          "Covering random topics so YouTube can't tell what the channel is for.",
          "Judging a search video by its first 48 hours; search views often build over weeks.",
        ],
      },
      {
        type: "paragraph",
        text: "Search is one pillar of a channel plan; YouTube content strategy shows how it fits with signature series, community content and income.",
        links: [{ text: "YouTube content strategy", href: "/blog/youtube-content-strategy" }],
      },
      {
        type: "paragraph",
        text: "Search rewards evergreen answers; how to find evergreen content ideas covers where they come from. For packaging, see creator title strategy and creator thumbnail strategy.",
        links: [
          { text: "how to find evergreen content ideas", href: "/blog/evergreen-content-ideas-creators" },
          { text: "creator title strategy", href: "/blog/creator-title-strategy" },
          { text: "creator thumbnail strategy", href: "/blog/creator-thumbnail-strategy" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "YouTube SEO is mostly topic choice and honest packaging, followed by a video that delivers. Research what people search, label it clearly, answer quickly, and build a library on the same topic. Then use YouTube analytics to see which search terms bring viewers, and make more of what works.",
        links: [{ text: "YouTube analytics", href: "/blog/youtube-analytics-for-creators" }],
      },
    ],
    faqs: [
      {
        question: "How does YouTube search rank videos?",
        answer:
          "YouTube says it prioritises relevance, engagement and quality, weighted differently by search. Relevance covers how title, description and content match the query; engagement includes signals like watch time for that query; quality considers expertise, authoritativeness and trustworthiness.",
      },
      {
        question: "Do YouTube tags still matter?",
        answer: "They play a minor role. Titles, descriptions, spoken content and whether viewers are satisfied matter far more.",
      },
      {
        question: "Can YouTube Shorts rank in search?",
        answer: "Yes. Shorts can appear in search results. Clear titles, spoken keywords and answering quickly help.",
      },
      {
        question: "How long does YouTube SEO take to work?",
        answer: "Search views often build over weeks or months. Review search traffic after about 28 days rather than judging a search-led video in its first two days.",
      },
    ],
  },
  {
    slug: "youtube-keyword-research",
    category: "Creator Resources",
    title: "YouTube Keyword Research for Creators: How to Find Topics People Actually Search For",
    seoTitle: "YouTube Keyword Research: Find Topics People Search For",
    excerpt:
      "A practical method for finding YouTube topics with real demand: search suggestions, YouTube Studio's research insights and content gaps, competitor analysis, comments and your own search terms.",
    metaDescription:
      "YouTube keyword research for creators: using search suggestions, YouTube Studio Trends and content gaps, competitor channels, comments and your search traffic to find and prioritise topics, with a scoring template.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "11 min read",
    tags: ["YouTube keyword research", "YouTube topics", "YouTube content gaps", "YouTube Studio research", "video ideas"],
    related: ["youtube-seo-for-creators", "how-to-find-content-gaps", "youtube-search-vs-recommendations"],
    body: [
      {
        type: "paragraph",
        text: "The best-made video on a topic nobody searches will struggle in search. Keyword research is simply finding out what your audience types, in their words, before you spend a week making something.",
      },
      {
        type: "paragraph",
        text: "This guide is about finding and choosing topics. For optimising the video itself, see YouTube SEO for creators.",
        links: [{ text: "YouTube SEO for creators", href: "/blog/youtube-seo-for-creators" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To do YouTube keyword research: start from your niche's core topics, collect the phrases YouTube suggests as you type, check YouTube Studio's Trends and research insights (including content gaps, where viewers can't find enough good results), review what already ranks and where it falls short, mine your comments, and check the search terms already bringing viewers to your channel. Then prioritise topics by demand, your fit and your ability to make the best answer.",
      },
      { type: "heading", text: "Sources of topic ideas", id: "sources" },
      {
        type: "table",
        headers: ["Source", "How to use it", "What it tells you"],
        rows: [
          ["YouTube search suggestions", "Type your topic and note autocompletes; add letters (\"budget phone a…\")", "Real phrasing people use"],
          ["YouTube Studio Trends / research insights", "Explore what your audience and viewers across YouTube search; check content gaps", "Demand and underserved searches, from YouTube itself"],
          ["Competitor and peer channels", "Sort by popular; note recurring topics and weak answers", "Proven demand and gaps in quality"],
          ["Your comments", "Tag repeated questions", "Your audience's exact problems"],
          ["Your search terms report", "YouTube Analytics → traffic source: YouTube search", "Which queries already find you"],
          ["Google suggestions and 'People also ask'", "Search your topic on Google", "Related questions to answer in the video"],
        ],
      },
      {
        type: "paragraph",
        text: "YouTube explains content gaps in its research insights help page: a content gap is when viewers can't find enough quality results for a search. Note that YouTube is gradually retiring the separate Inspiration tab from August 2026 in favour of Ask Studio for brainstorming.",
        links: [{ text: "research insights help page", href: SOURCES.youtubeTrendsResearch }],
      },
      { type: "heading", text: "Step by step", id: "steps" },
      {
        type: "list",
        items: [
          "1. List 5 core topics for your niche (e.g. budget phones, earbuds, phone cameras, battery tips, buying guides).",
          "2. For each, collect 20 search suggestions from YouTube.",
          "3. Check Studio research insights for your audience's searches and content gaps.",
          "4. Search the top 10 candidates yourself: what ranks, how old, how good?",
          "5. Score each topic (template below).",
          "6. Pick 3 to 5 topics and plan them as a series.",
        ],
      },
      {
        type: "template",
        label: "Topic scoring (1–5 each)",
        text: "Demand: appears in suggestions / research insights / comments?\nGap: are existing results old, weak, or not in your language?\nFit: does it match what your channel is known for?\nCan you make the best answer? (access, expertise, testing)\nBusiness value: brand, affiliate or product relevance?\n\nExample (illustrative): \"best phone under ₹15,000 for camera\" — Demand 5 · Gap 3 · Fit 5 · Best answer 4 · Value 5 = 22",
      },
      { type: "heading", text: "Long-tail and language opportunities", id: "long-tail" },
      {
        type: "list",
        items: [
          "Long-tail phrases (\"best phone under 15000 for PUBG and camera\") are more specific and often less contested.",
          "Hindi and regional-language searches may have fewer strong results; if you create in that language, target them.",
          "Year and price modifiers (\"2026\", \"under ₹500\") signal intent to buy; keep such videos updated.",
        ],
      },
      { type: "heading", text: "Checking competition honestly", id: "competition" },
      {
        type: "paragraph",
        text: "Search the phrase and watch the top results. If they're recent, thorough and from large channels, you need a clearly better or different angle (a newer test, a different budget, a different language). If they're old, thin or off-target, there's room.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Picking topics only by your own interest without checking demand.",
          "Trusting third-party \"search volume\" numbers as exact; treat them as rough signals.",
          "Chasing broad terms (\"phone\") instead of specific questions.",
          "Ignoring your own search terms report, the most reliable data you have.",
        ],
      },
      {
        type: "paragraph",
        text: "Once you've chosen topics, plan them into a creator content calendar and track which searches bring viewers in YouTube analytics for creators.",
        links: [{ text: "creator content calendar", href: "/blog/creator-content-calendar" }, { text: "YouTube analytics for creators", href: "/blog/youtube-analytics-for-creators" }],
      },
      {
        type: "paragraph",
        text: "Once you have a keyword, creator title strategy explains how to write a title that's both found and clicked, and how to find evergreen content ideas helps turn keywords into lasting videos.",
        links: [
          { text: "creator title strategy", href: "/blog/creator-title-strategy" },
          { text: "how to find evergreen content ideas", href: "/blog/evergreen-content-ideas-creators" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Good keyword research is a habit, not a tool. Spend an hour each month collecting suggestions, checking research insights and content gaps, and reviewing your own search terms. Pick topics you can answer best and build them into a series. For the broader method across platforms, see how to find content gaps.",
        links: [{ text: "how to find content gaps", href: "/blog/how-to-find-content-gaps" }],
      },
    ],
    faqs: [
      {
        question: "How do I find keywords for YouTube videos?",
        answer:
          "Use YouTube search suggestions, YouTube Studio's Trends and research insights (including content gaps), competitor channels, your comments and your own YouTube search terms report, then prioritise by demand, gap, fit and your ability to make the best answer.",
      },
      {
        question: "What is a content gap on YouTube?",
        answer: "YouTube describes it as a search where viewers can't find enough quality results, which can be an opportunity to create or improve content.",
      },
      {
        question: "Are keyword tools' search volumes accurate?",
        answer: "Third-party estimates are useful signals but rarely exact. YouTube's own suggestions, research insights and your search terms report are more reliable indicators.",
      },
    ],
  },
  {
    slug: "youtube-search-vs-recommendations",
    category: "Creator Resources",
    title: "YouTube Search vs Recommendations: How Creators Can Optimize for Both",
    seoTitle: "YouTube Search vs Recommendations: Optimise for Both",
    excerpt:
      "Search answers queries; recommendations predict what viewers want next. Here's how each system works, how to tell which one drives your views, and how to plan content for both.",
    metaDescription:
      "YouTube search vs recommendations: how each discovery system works, key signals, traffic sources in YouTube Analytics, search-led vs browse-led content, and a plan to optimise for both.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "10 min read",
    tags: ["YouTube recommendations", "YouTube algorithm", "YouTube search", "browse features", "suggested videos"],
    related: ["youtube-seo-for-creators", "youtube-analytics-for-creators", "youtube-keyword-research"],
    body: [
      {
        type: "paragraph",
        text: "Two videos on the same channel can succeed for completely different reasons. One is found by people searching a question; the other is shown on home pages to people who never searched anything. Understanding which system is working for you changes what you should make next.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "YouTube search ranks videos for a specific query using relevance, engagement and quality. Recommendations (home feed, Up Next, Shorts feed) predict what each viewer will value based on signals such as watch history, search history, subscriptions, likes and satisfaction feedback. Search-led videos answer specific questions and grow slowly and steadily; recommendation-led videos rely on strong click-through and satisfying viewing for a broad audience. Check traffic sources in YouTube Analytics and plan a mix.",
      },
      { type: "heading", text: "How each system works", id: "systems" },
      {
        type: "table",
        headers: ["", "Search", "Recommendations"],
        rows: [
          ["Trigger", "A viewer types a query", "A viewer opens home, watches a video, or scrolls Shorts"],
          ["What YouTube looks at", "Relevance to the query, engagement for that query, quality", "Viewer's watch and search history, subscriptions, likes, feedback, satisfaction surveys"],
          ["Typical curve", "Slower start, long tail of views", "Can spike quickly, then taper"],
          ["Content that suits it", "Answers, tutorials, reviews, comparisons", "Stories, entertainment, broad-interest topics, series viewers binge"],
          ["Key creator lever", "Topic and wording", "Packaging (title + thumbnail) and viewer satisfaction"],
        ],
      },
      {
        type: "paragraph",
        text: "Official explanations: How YouTube search works and How YouTube recommendations work.",
        links: [
          { text: "How YouTube search works", href: SOURCES.youtubeSearch },
          { text: "How YouTube recommendations work", href: SOURCES.youtubeRecommendations },
        ],
      },
      { type: "heading", text: "Find out which one drives your views", id: "traffic-sources" },
      {
        type: "list",
        items: [
          "YouTube Analytics → Reach → Traffic source types: YouTube search, Browse features (home and subscriptions), Suggested videos, Shorts feed, and others.",
          "For search, open the search terms report to see the queries.",
          "Compare by video: some will be search-heavy, others browse-heavy.",
        ],
      },
      { type: "heading", text: "Optimising for search", id: "for-search" },
      {
        type: "list",
        items: [
          "Choose topics people search (see YouTube keyword research).",
          "Use the searched phrase in title, description opening and speech.",
          "Answer fast; chapters help.",
          "Keep evergreen videos updated when prices or facts change.",
        ],
      },
      { type: "heading", text: "Optimising for recommendations", id: "for-recommendations" },
      {
        type: "list",
        items: [
          "Packaging: a title and thumbnail that make a clear, honest promise to a broad viewer.",
          "Satisfaction: viewers who watch, enjoy and don't feel misled. YouTube uses satisfaction surveys as a signal.",
          "Retention: a strong opening and pacing that holds attention.",
          "Series: viewers who finish one video and want the next.",
        ],
      },
      { type: "heading", text: "A balanced content mix", id: "mix" },
      {
        type: "template",
        label: "Illustrative monthly mix for a tech creator",
        text: "2 search-led videos: \"Best phone under ₹15,000 (camera test)\", \"How to improve phone battery life\"\n1 recommendation-led video: \"I used a ₹10,000 phone for 30 days\"\n8–12 Shorts: quick tests and myths, each linked to a long video\n\nReview traffic sources monthly and adjust the mix toward what grows.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Believing there's one \"algorithm\" to beat.",
          "Clickbait packaging that wins clicks but loses satisfaction.",
          "Only making search videos, which limits growth, or only trend videos, which limits longevity.",
          "Ignoring traffic source data.",
        ],
      },
      {
        type: "paragraph",
        text: "Recommendations reward strong openings and satisfying videos; see short-form video hooks and how to write video scripts.",
        links: [{ text: "short-form video hooks", href: "/blog/short-form-video-hooks" }, { text: "how to write video scripts", href: "/blog/how-to-write-video-scripts" }],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Search gives you steady discovery; recommendations give you reach. Check which drives each video, then plan a mix on purpose. For the metrics that show satisfaction and retention, see YouTube analytics for creators and watch time vs retention.",
        links: [
          { text: "YouTube analytics for creators", href: "/blog/youtube-analytics-for-creators" },
          { text: "watch time vs retention", href: "/blog/watch-time-vs-retention" },
        ],
      },
    ],
    faqs: [
      {
        question: "What's the difference between YouTube search and recommendations?",
        answer:
          "Search ranks videos for a typed query using relevance, engagement and quality. Recommendations suggest videos on home, Up Next and the Shorts feed based on each viewer's history, subscriptions, likes and satisfaction signals.",
      },
      {
        question: "How do I know if my views come from search or recommendations?",
        answer: "Check Traffic source types in YouTube Analytics: YouTube search versus Browse features, Suggested videos and the Shorts feed.",
      },
      {
        question: "Which is better for creators, search or recommendations?",
        answer: "Neither alone. Search brings steady, long-term views; recommendations bring larger reach. Most growing channels plan for both.",
      },
    ],
  },
  {
    slug: "instagram-seo-for-creators",
    category: "Creator Resources",
    title: "Instagram SEO for Creators: How to Get Discovered on Instagram Search",
    seoTitle: "Instagram SEO for Creators: Get Found in Instagram Search",
    excerpt:
      "How Instagram search works, what it reads, how recommendations and originality affect reach, and how professional accounts can now appear in search engines, with a practical Instagram SEO checklist.",
    metaDescription:
      "Instagram SEO for creators: how Instagram search ranks accounts, hashtags, places and posts, profile and caption optimisation, originality and recommendations, and search engine indexing for professional accounts.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "11 min read",
    tags: ["Instagram SEO", "Instagram search", "Instagram discovery", "Instagram originality", "Reels discovery"],
    related: ["instagram-keyword-strategy", "reels-content-strategy", "instagram-insights-for-creators"],
    body: [
      {
        type: "paragraph",
        text: "Instagram search used to mean looking up a friend's username. Today people search for recipes, outfits, gym routines, cafes and products, and Instagram tries to return accounts, audio, hashtags, places and posts that match. Creators who label their profiles and content clearly are easier to find.",
      },
      {
        type: "paragraph",
        text: "This is the complete guide. For step-by-step keyword placement in your profile and posts, see Instagram keyword strategy.",
        links: [{ text: "Instagram keyword strategy", href: "/blog/instagram-keyword-strategy" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Instagram SEO means making your account and posts easier to find in Instagram search and recommendations. Instagram says search matches the text people type with usernames, bios, captions, hashtags and places, and ranks results using the search text (the most important signal), the searcher's activity and popularity signals. Put clear keywords in your name field, bio and captions (not comments), use a few relevant hashtags and locations, post original content, and follow Instagram's recommendation guidelines. Public posts from professional accounts may also appear in search engine results.",
      },
      { type: "heading", text: "How Instagram search works", id: "how-it-works" },
      {
        type: "table",
        headers: ["Signal", "What Instagram says", "What you control"],
        rows: [
          ["Search text", "By far the most important signal; matched to usernames, bios, captions, hashtags and places", "Clear words in name, bio, captions"],
          ["Searcher's activity", "Accounts and hashtags they follow or visit rank higher", "Consistency so followers and visitors engage"],
          ["Popularity signals", "Clicks, likes, shares and follows when many results match", "Content people interact with"],
        ],
      },
      {
        type: "paragraph",
        text: "Source: Instagram's explanation of how search works.",
        links: [{ text: "Instagram's explanation of how search works", href: SOURCES.instagramSearch }],
      },
      { type: "heading", text: "Profile optimisation", id: "profile" },
      {
        type: "list",
        items: [
          "Name field: your name plus your topic (\"Priya | Budget Skincare\"); the name field is searchable.",
          "Username: simple and memorable; include your topic only if it stays relevant.",
          "Bio: who you help and with what, in words people search; add city or language if relevant.",
          "Category and contact options on a professional account.",
          "Highlights named by topic (\"Sunscreens\", \"Routines\").",
        ],
      },
      { type: "heading", text: "Post optimisation", id: "posts" },
      {
        type: "list",
        items: [
          "Caption: start with the topic in plain words; Instagram notes keywords and hashtags should be in the caption, not comments.",
          "Hashtags: a few specific, relevant ones rather than long lists.",
          "Location tags for places, restaurants and travel.",
          "On-screen text and clear spoken topic for Reels.",
          "Alt text on photo posts where helpful.",
        ],
      },
      { type: "heading", text: "Originality and recommendations", id: "originality" },
      {
        type: "paragraph",
        text: "Instagram says it's less likely to recommend reposts of reels already on Instagram, content with noticeable watermarks from other apps, and accounts that mainly reshare others' content, because credit and distribution should go to original creators. Content that breaks its recommendation guidelines may not be shown to non-followers. Check Account Status for recommendation eligibility.",
        links: [
          { text: "Instagram says it's less likely to recommend reposts", href: SOURCES.instagramOriginality },
          { text: "recommendation eligibility", href: SOURCES.instagramRecommendations },
        ],
      },
      { type: "heading", text: "Instagram content in Google and other search engines", id: "search-engines" },
      {
        type: "paragraph",
        text: "Instagram's help centre says public photos and videos from professional accounts may appear in search engine results, so people outside Instagram can find them, and you can control this in settings. That makes clear captions useful beyond Instagram too.",
        links: [{ text: "Instagram's help centre says", href: SOURCES.instagramSearchIndexing }],
      },
      { type: "heading", text: "Instagram SEO checklist", id: "checklist" },
      {
        type: "template",
        text: "☐ Name field includes your topic\n☐ Bio says who you help, with what, in searchable words\n☐ Highlights named by topic\n☐ Every post caption starts with the topic in plain words\n☐ 3–5 relevant hashtags, in the caption\n☐ Location tags where relevant\n☐ Original content; no other apps' watermarks\n☐ Account Status checked for recommendation eligibility\n☐ Search-engine visibility setting reviewed",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Clever bios nobody would search (\"chaos in human form ✨\").",
          "Thirty hashtags or hashtags in the first comment.",
          "Reposting TikTok-watermarked videos.",
          "Keyword-stuffing the name field until it looks like spam.",
        ],
      },
      {
        type: "paragraph",
        text: "Searchable content works best inside a consistent format; see Reels content strategy, and for the broader picture across platforms, creator SEO.",
        links: [{ text: "Reels content strategy", href: "/blog/reels-content-strategy" }, { text: "creator SEO", href: "/blog/creator-seo" }],
      },
      {
        type: "paragraph",
        text: "Being found is half the job; the other half is convincing the brands and followers who land on your profile. See Instagram creator portfolio.",
        links: [{ text: "Instagram creator portfolio", href: "/blog/instagram-creator-portfolio" }],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Instagram SEO is mostly clarity: a profile that says what you do and captions that say what each post is about, in the words people search, on original content. Set up your profile once, add a caption habit, and check Instagram insights for how many accounts reach you through search and Explore.",
        links: [{ text: "Instagram insights", href: "/blog/instagram-insights-for-creators" }],
      },
    ],
    faqs: [
      {
        question: "Does Instagram have SEO?",
        answer:
          "Yes, in the sense that Instagram search matches the text people type with usernames, bios, captions, hashtags and places, and ranks results using search text, the searcher's activity and popularity signals.",
      },
      {
        question: "Should hashtags go in the caption or comments?",
        answer: "Instagram's guidance is to put keywords and hashtags in the caption, not the comments, for a post to be found in search.",
      },
      {
        question: "Can Instagram posts appear on Google?",
        answer:
          "Instagram says public photos and videos from professional accounts may appear in search engine results, and you can manage this in your settings.",
      },
      {
        question: "Why aren't my Reels shown to non-followers?",
        answer:
          "Possible reasons include content that doesn't meet Instagram's recommendation guidelines, reposted or watermarked content, or low engagement. Check Account Status for recommendation eligibility.",
      },
    ],
  },
  {
    slug: "instagram-keyword-strategy",
    category: "Creator Resources",
    title: "Instagram Keyword Strategy for Creators: How to Optimize Your Profile and Content",
    seoTitle: "Instagram Keyword Strategy: Optimise Profile and Posts",
    excerpt:
      "A step-by-step method for choosing Instagram keywords and placing them in your name, bio, captions, on-screen text, hashtags and highlights, with examples across niches and a caption template.",
    metaDescription:
      "Instagram keyword strategy for creators: finding keywords in Instagram search suggestions, building a keyword map, and placing keywords in your name, bio, captions, on-screen text, hashtags and highlights.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    readingTime: "10 min read",
    tags: ["Instagram keywords", "Instagram bio keywords", "Instagram captions", "hashtag strategy", "Instagram profile optimisation"],
    related: ["instagram-seo-for-creators", "social-search-for-creators", "reels-content-strategy"],
    body: [
      {
        type: "paragraph",
        text: "Instagram can only show your posts for a search if it can tell what they're about. A keyword strategy is a short list of the words your audience uses, and a habit of putting them where Instagram reads them.",
      },
      {
        type: "paragraph",
        text: "For how Instagram search works overall, see Instagram SEO for creators. This guide is the practical keyword method.",
        links: [{ text: "Instagram SEO for creators", href: "/blog/instagram-seo-for-creators" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Build an Instagram keyword strategy by listing your 3 to 5 core topics, collecting the phrases Instagram suggests when you type them into search, grouping them into a keyword map, and placing one main keyword per post in the caption opening, on-screen text and spoken audio, plus a few relevant hashtags. Put your main topic keywords in your name field and bio, and name highlights by topic.",
      },
      { type: "heading", text: "Step 1: Find your keywords", id: "find" },
      {
        type: "list",
        items: [
          "Type each core topic into Instagram search and note the suggestions.",
          "Check which accounts, audio and posts appear for them.",
          "Collect exact phrases from your comments and DMs.",
          "Add language variants your audience uses (Hindi, Hinglish, regional words).",
        ],
      },
      { type: "heading", text: "Step 2: Build a keyword map", id: "map" },
      {
        type: "table",
        headers: ["Core topic (illustrative fitness creator)", "Keywords to use", "Where"],
        rows: [
          ["Home workouts", "home workout for beginners, no equipment workout", "Bio, highlight, caption openings"],
          ["Fat loss", "fat loss diet Indian, weight loss meals veg", "Caption openings, on-screen text"],
          ["Strength", "dumbbell workout at home, beginner strength", "Series titles"],
          ["Local", "gym in Pune, Pune fitness trainer", "Bio (if you train locally), location tags"],
        ],
      },
      { type: "heading", text: "Step 3: Place keywords in your profile", id: "profile" },
      {
        type: "template",
        label: "Profile example (illustrative)",
        text: "Name field: Arjun | Home Workouts for Beginners\nBio: No-equipment home workouts & Indian veg fat-loss meals 🏠🥗\nNew routine every Mon & Thu · Pune\nHighlights: Home Workouts · Veg Meals · Beginners · FAQs",
      },
      { type: "heading", text: "Step 4: Place keywords in each post", id: "posts" },
      {
        type: "template",
        label: "Caption template",
        text: "[Main keyword in plain words]: [specific promise]\n\n[2–4 lines of useful detail]\n\n[Question or call to action]\n\n#keyword1 #keyword2 #keyword3\n\nExample: \"No-equipment home workout for beginners: 15 minutes, no jumping (flat-friendly).\"",
      },
      {
        type: "list",
        items: [
          "Say the keyword in the first seconds of the Reel.",
          "Show it as on-screen text on the cover or first frame.",
          "Use 3 to 5 specific hashtags; avoid giant generic ones only.",
          "Add a location tag where place matters.",
        ],
      },
      { type: "heading", text: "Examples across niches", id: "examples" },
      {
        type: "table",
        headers: ["Niche", "Weak caption opening", "Keyword-clear opening"],
        rows: [
          ["Beauty", "Obsessed with this! ✨", "Sunscreen for oily skin under ₹500: 3 tested"],
          ["Travel", "Weekend vibes 🌄", "Lonavala weekend trip from Pune: 2-day itinerary"],
          ["Finance", "Money talk 💸", "SIP vs lump sum for beginners (in Hindi)"],
          ["Food", "Sunday special!", "Instant filter coffee at home without a filter"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Targeting ten keywords in one post.",
          "Stuffing the name field with keywords so it reads like spam.",
          "Changing your username too often.",
          "Hashtags in comments instead of the caption.",
          "Keywords unrelated to what the post actually shows.",
        ],
      },
      {
        type: "paragraph",
        text: "Find the questions worth targeting with how to find content gaps, and check results in Instagram insights for creators.",
        links: [{ text: "how to find content gaps", href: "/blog/how-to-find-content-gaps" }, { text: "Instagram insights for creators", href: "/blog/instagram-insights-for-creators" }],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Keep a short keyword map, update it quarterly, and give every post one clear keyword in the caption opening and on screen. It takes seconds per post and makes your content findable for months. Pair it with a consistent Reels content strategy.",
        links: [{ text: "Reels content strategy", href: "/blog/reels-content-strategy" }],
      },
    ],
    faqs: [
      {
        question: "Where should I put keywords on Instagram?",
        answer: "In your name field, bio, highlight names, caption openings, on-screen text, spoken audio, a few relevant hashtags and location tags.",
      },
      {
        question: "How many hashtags should creators use on Instagram?",
        answer: "A few specific, relevant hashtags in the caption usually work better than long generic lists.",
      },
      {
        question: "Should I change my Instagram name to include keywords?",
        answer: "Adding your topic to the name field can help search, but keep it readable and natural. Avoid stuffing multiple keywords.",
      },
    ],
  },
  {
    slug: "tiktok-seo",
    category: "Creator Resources",
    title: "TikTok SEO: Complete Guide to Getting Discovered Through Search (and Creator Search Insights)",
    seoTitle: "TikTok SEO and Creator Search Insights: A Creator's Guide",
    excerpt:
      "How TikTok search discovery works, how to optimise each video for search (speech, on-screen text, captions, covers), how Creator Search Insights helps, how to measure search traffic, and what Indian creators should know given TikTok isn't available in India.",
    metaDescription:
      "TikTok SEO guide: optimising videos for TikTok search with speech, on-screen text, captions and covers, Creator Search Insights, measuring search traffic, and notes for Indian creators.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    updatedAt: "2026-09-29",
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["TikTok SEO", "TikTok video SEO", "TikTok search", "Creator Search Insights", "TikTok India"],
    related: ["tiktok-content-gaps", "tiktok-profile-optimization", "social-search-for-creators"],
    body: [
      {
        type: "paragraph",
        text: "TikTok is a major search surface in many countries, and its creator tools show what people search for. For Indian creators the context is different: TikTok has not been available in India since the Government of India blocked it in 2020. This guide is for creators serving audiences outside India, and for anyone who wants to apply TikTok's search lessons to Reels and Shorts.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "TikTok SEO means making videos easy to find in TikTok search by using the searched phrase in your caption, on-screen text and spoken audio, answering quickly, and building videos around topics people search. TikTok's Creator Search Insights, where available, shows what people search for, including a Content Gap view of searches without enough good results. TikTok isn't available in India, so Indian creators with Indian audiences should apply the same principles on YouTube Shorts and Instagram Reels.",
      },
      { type: "heading", text: "Availability for Indian creators", id: "india" },
      {
        type: "paragraph",
        text: "Because TikTok is blocked in India, creators in India can't publish to or reach Indian audiences on it. Creators who have moved abroad, or who manage audiences outside India, should check TikTok's rules for their country. For Indian audiences, the closest equivalents are YouTube Shorts and Instagram Reels; see YouTube Shorts content strategy and Reels content strategy.",
        links: [
          { text: "YouTube Shorts content strategy", href: "/blog/youtube-shorts-content-strategy" },
          { text: "Reels content strategy", href: "/blog/reels-content-strategy" },
        ],
      },
      { type: "heading", text: "How to optimise for TikTok search", id: "optimise" },
      {
        type: "list",
        items: [
          "Caption: open with the search phrase in plain words.",
          "On-screen text: repeat the topic in the first frame.",
          "Speech: say the phrase clearly early in the video.",
          "Answer fast: the first seconds decide whether searchers stay.",
          "A few relevant hashtags, not long lists.",
          "Series: numbered parts keep searchers watching your other videos.",
        ],
      },
      { type: "heading", text: "Video-level SEO: a checklist for every upload", id: "video-seo" },
      {
        type: "paragraph",
        text: "Search optimisation happens video by video. Before posting a video you want people to find, check each layer TikTok can read or viewers can see in search results.",
      },
      {
        type: "table",
        headers: ["Layer", "What to do", "Example (illustrative)"],
        rows: [
          ["Spoken audio", "Say the searched phrase in the first seconds", "\"Here's how to open a bank account in Canada as a student.\""],
          ["On-screen text", "Put the topic in the first frame, in plain words", "\"Student bank account Canada: 4 steps\""],
          ["Caption", "Lead with the phrase, then one line of context", "\"Student bank account in Canada: what you need and which documents\""],
          ["Cover", "A readable title on the cover for profile and search browsing", "Short title matching the phrase"],
          ["Hashtags", "A few specific ones, not long lists", "Topic and audience tags only"],
          ["Structure", "Answer first, detail second; point to part 2", "\"Part 2: comparing fees\""],
        ],
      },
      {
        type: "paragraph",
        text: "Your profile matters too: a searchable name field and bio help people who find one video decide to follow. See TikTok profile optimization.",
        links: [{ text: "TikTok profile optimization", href: "/blog/tiktok-profile-optimization" }],
      },
      { type: "heading", text: "Search videos vs For You videos", id: "search-vs-fyp" },
      {
        type: "paragraph",
        text: "Not every video should be a search video. For You videos win on surprise, story and emotion; search videos win on clarity and a fast answer, and can keep being found long after posting. Most accounts need both. Plan a regular share of search videos inside your series; TikTok content strategy explains the mix.",
        links: [{ text: "TikTok content strategy", href: "/blog/tiktok-content-strategy" }],
      },
      { type: "heading", text: "Creator Search Insights", id: "search-insights" },
      {
        type: "paragraph",
        text: "TikTok describes Creator Search Insights as personalised information about topics people search for, available in many countries (and in TikTok Studio under creator tools). You can filter by categories and use the Content Gap filter to see searches where there isn't enough content, then track how your posts perform for those topics.",
        links: [{ text: "TikTok describes Creator Search Insights", href: SOURCES.tiktokSearchInsights }],
      },
      {
        type: "template",
        label: "Using Search Insights (where available)",
        text: "1. Open Creator Search Insights (search for it, or via TikTok Studio)\n2. Filter by your category; check Content Gap and searches by your followers\n3. Pick 3 topics that fit your niche and you can answer well\n4. Make one clear, fast answer for each\n5. Check performance after a week; make a part 2 for what works",
      },
      {
        type: "paragraph",
        text: "For a step-by-step method for judging and prioritising gaps, see TikTok content gaps.",
        links: [{ text: "TikTok content gaps", href: "/blog/tiktok-content-gaps" }],
      },
      { type: "heading", text: "Measuring search traffic", id: "measure" },
      {
        type: "paragraph",
        text: "After a week, open the video's analytics and check its traffic sources. A meaningful search share means the video is working as a search video; where TikTok shows the search terms that led to it, note them and make follow-ups for related phrases. Compare search share across your search videos rather than against For You videos. TikTok analytics covers the other metrics worth tracking.",
        links: [{ text: "TikTok analytics", href: "/blog/tiktok-analytics" }],
      },
      { type: "heading", text: "Lessons that transfer to Reels and Shorts", id: "transfer" },
      {
        type: "table",
        headers: ["TikTok lesson", "Apply on YouTube Shorts", "Apply on Instagram Reels"],
        rows: [
          ["Search phrase in caption and speech", "Title and spoken opening", "Caption opening and spoken opening"],
          ["Content gaps", "YouTube Studio research insights and content gaps", "Instagram search suggestions and comments"],
          ["Series", "Playlists and linked long videos", "Named series and highlights"],
        ],
      },
      {
        type: "paragraph",
        text: "See how to find content gaps for a cross-platform method, and YouTube keyword research for YouTube's own tools.",
        links: [
          { text: "how to find content gaps", href: "/blog/how-to-find-content-gaps" },
          { text: "YouTube keyword research", href: "/blog/youtube-keyword-research" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Assuming TikTok strategies apply to Indian audiences directly.",
          "Using long hashtag lists instead of clear captions.",
          "Slow openings that lose searchers.",
          "Reposting TikTok-watermarked videos to Instagram, which Instagram is less likely to recommend.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "TikTok's search tools make one thing obvious: people search short-video apps for answers. If you create for audiences where TikTok is available, optimise each video's speech, text and caption, use Creator Search Insights and measure search traffic. If your audience is in India, apply the same thinking to Shorts and Reels. For the rest of TikTok, see the TikTok creator hub, starting with TikTok creator monetization.",
        links: [{ text: "TikTok creator monetization", href: "/blog/tiktok-creator-monetization" }],
      },
    ],
    faqs: [
      {
        question: "Is TikTok available in India?",
        answer: "No. TikTok has not been available in India since the Government of India blocked it in 2020.",
      },
      {
        question: "What is TikTok Creator Search Insights?",
        answer:
          "A TikTok tool, available in many countries, that shows creators what people search for, including a Content Gap view of searches without enough content.",
      },
      {
        question: "How do I do TikTok SEO?",
        answer:
          "Use the searched phrase in your caption, on-screen text and speech, answer quickly, add a few relevant hashtags, and build series around topics people search.",
      },
      {
        question: "How do I optimise a single TikTok video for search?",
        answer:
          "Say the search phrase in the first seconds, put it in the first frame's on-screen text and at the start of the caption, add a readable cover title, use a few specific hashtags and answer before adding detail.",
      },
      {
        question: "How can I tell if a TikTok video is getting search traffic?",
        answer:
          "Check the video's traffic sources for search, and the search terms shown for the video where TikTok provides them.",
      },
    ],
  },
  {
    slug: "how-to-find-content-gaps",
    category: "Creator Resources",
    title: "How to Find Content Gaps as a Creator: Turn Unanswered Questions Into Content Ideas",
    seoTitle: "How to Find Content Gaps: Turn Questions Into Content Ideas",
    excerpt:
      "A cross-platform method for finding questions your audience asks that nobody answers well: where to look, how to judge a real gap, and how to turn it into content that gets found.",
    metaDescription:
      "How creators find content gaps: sources (comments, search suggestions, YouTube research insights, Reddit, Google), judging quality and language gaps, scoring ideas, and turning gaps into content series.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    updatedAt: "2026-09-29",
    readingTime: "10 min read",
    tags: ["content gaps", "content ideas", "creator research", "unanswered questions", "topic research", "content gap analysis", "audience questions content ideas"],
    related: ["youtube-keyword-research", "creator-seo", "creator-content-series"],
    body: [
      {
        type: "paragraph",
        text: "A content gap is a question people are asking that isn't answered well yet. It might be unanswered entirely, answered only in English, answered years ago, or answered badly. Gaps are where smaller creators can win, because you don't have to beat a giant; you just have to be the best answer.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To find content gaps: collect questions from your comments, DMs, search suggestions, platform research tools (such as YouTube Studio's research insights and content gaps), forums and Google's related questions; check what currently answers them; and look for gaps in existence, quality, recency, depth, format or language. Score gaps by demand and your ability to answer, then turn the best into a series.",
      },
      { type: "heading", text: "Types of content gaps", id: "types" },
      {
        type: "table",
        headers: ["Gap type", "What it looks like", "Example (illustrative)"],
        rows: [
          ["Existence", "Nobody has answered it", "\"Best budget laptop for Tally and GST filing\""],
          ["Quality", "Answers exist but are shallow or wrong", "Finance tips with no real numbers"],
          ["Recency", "Answers are outdated", "Tax or platform rules from years ago"],
          ["Depth", "Only surface-level answers", "\"How to start a home bakery\" without FSSAI basics"],
          ["Format", "Only text, no demonstration (or vice versa)", "No video showing a saree drape step by step"],
          ["Language", "Only in English", "Personal finance basics in Marathi"],
          ["Audience", "Not answered for a specific group", "Skincare for men with oily skin in humid cities"],
        ],
      },
      { type: "heading", text: "Where to look", id: "where" },
      {
        type: "list",
        items: [
          "Your comments and DMs: repeated questions are the strongest signal you have.",
          "Search suggestions on YouTube, Instagram and Google.",
          "YouTube Studio research insights: YouTube defines a content gap as a search where viewers can't find enough quality results.",
          "Creator Search Insights on TikTok, where available.",
          "Reddit, Quora and niche forums: long, frustrated questions reveal depth gaps.",
          "Google's \"People also ask\" and related searches.",
          "Brand and product reviews: what buyers keep asking before purchasing.",
        ],
      },
      {
        type: "paragraph",
        text: "YouTube's research insights help page explains content gaps in YouTube Studio.",
        links: [{ text: "research insights help page", href: SOURCES.youtubeTrendsResearch }],
      },
      { type: "heading", text: "Check whether the gap is real", id: "validate" },
      {
        type: "list",
        items: [
          "Search the question on each platform you use. Watch or read the top results.",
          "Note what's missing: numbers, demonstration, recency, language, a specific audience.",
          "Check that people really ask it (more than one source, more than once).",
          "Be honest about whether you can answer it better.",
        ],
      },
      { type: "heading", text: "Score and prioritise", id: "score" },
      {
        type: "template",
        label: "Gap scoring (1–5 each)",
        text: "Demand: how often and where it's asked\nGap size: how weak current answers are\nFit: matches your niche and positioning\nAbility: can you make the best answer?\nSeries potential: does it lead to follow-up content?\n\nWork on the top 3 each month.",
      },
      { type: "heading", text: "Turn gaps into content", id: "turn-into-content" },
      {
        type: "list",
        items: [
          "Make the definitive answer in your main format.",
          "Cut short versions for Shorts and Reels, each answering one sub-question.",
          "Write it up on your website or newsletter if it's evergreen.",
          "Group related gaps into a series people can follow.",
        ],
      },
      {
        type: "paragraph",
        text: "See creator content series and content repurposing for creators.",
        links: [
          { text: "creator content series", href: "/blog/creator-content-series" },
          { text: "content repurposing for creators", href: "/blog/content-repurposing-for-creators" },
        ],
      },
      { type: "heading", text: "Turn audience questions into content: a weekly routine", id: "questions-routine" },
      {
        type: "template",
        label: "Question-to-content routine (weekly, 30 minutes)",
        text: "1. Collect: copy every question from comments, DMs, email replies and Story boxes into one sheet\n2. Group: tag by pillar and merge duplicates; count how often each appears\n3. Check: search each top question on YouTube, Instagram and Google; note gaps\n4. Assign: turn the top 3 into this week's posts (short answer) or a series (deep answer)\n5. Close the loop: reply to the people who asked with the link",
      },
      {
        type: "paragraph",
        text: "For a full quarterly gap analysis, run the steps above across your whole niche, add competitor comments (see creator competitor analysis) and search data, and score gaps with the method earlier in this guide. Audience research methods are in creator audience research.",
        links: [
          { text: "creator competitor analysis", href: "/blog/creator-competitor-analysis" },
          { text: "creator audience research", href: "/blog/creator-audience-research" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Mistaking a question nobody asks for a gap.",
          "Chasing gaps outside your niche.",
          "Filling a gap with a weak answer.",
          "Never updating answers when facts change.",
        ],
      },
      {
        type: "paragraph",
        text: "On YouTube specifically, see YouTube keyword research; on Instagram, Instagram keyword strategy.",
        links: [{ text: "YouTube keyword research", href: "/blog/youtube-keyword-research" }, { text: "Instagram keyword strategy", href: "/blog/instagram-keyword-strategy" }],
      },
      {
        type: "paragraph",
        text: "Language gaps are among the most common; regional creator growth in India explains how to build a whole audience around them.",
        links: [{ text: "regional creator growth in India", href: "/blog/regional-creator-growth-india" }],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Keep a running question log from comments and searches, check it monthly, and pick the gaps you can fill best. Over time you'll become the creator people find when they have that problem, which is how authority is built.",
      },
    ],
    faqs: [
      {
        question: "What is a content gap?",
        answer:
          "A question or topic people search for that isn't answered well yet: unanswered, outdated, shallow, in the wrong format or language, or not tailored to a specific audience.",
      },
      {
        question: "Where can creators find content gaps?",
        answer:
          "Comments and DMs, search suggestions, YouTube Studio research insights and content gaps, TikTok Creator Search Insights where available, forums, and Google's related questions.",
      },
      {
        question: "How do I know if a content gap is worth filling?",
        answer: "Check that people genuinely ask it in more than one place, that current answers are weak, that it fits your niche, and that you can make the best answer.",
      },
    ],
  },
];
