import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_FACTS_REVIEWED, CREATOR_LAYER_7_PUBLISHED as PUBLISHED } from "@/content/creator-resources/shared";

/**
 * Content ideas and research (650–699 layer): competitor analysis, trend
 * research, evergreen ideas and trend vs evergreen. Content audits and gap
 * analysis (661, 662) stay in content-performance-audit and
 * how-to-find-content-gaps.
 */
export const contentIdeasResearchPosts: BlogPost[] = [
  {
    slug: "creator-competitor-analysis",
    category: "Creator Resources",
    title: "Creator Competitor Analysis: How to Study Other Creators Without Copying Them",
    seoTitle: "Creator Competitor Analysis: Study Creators Without Copying",
    excerpt:
      "How creators study other creators ethically and usefully: choosing who to analyse, what to look at (topics, formats, hooks, gaps, audience response), a comparison sheet, turning insight into your own angle, and where learning ends and copying begins.",
    metaDescription:
      "How creators analyse other creators without copying: who to study, what to compare, a comparison sheet, finding your own angle and the line between learning and copying.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["creator competitor analysis", "analyse other creators", "competitor research YouTube", "Instagram competitor analysis", "content inspiration without copying", "niche research"],
    related: ["how-to-find-content-gaps", "creator-positioning", "how-to-analyze-a-viral-video"],
    body: [
      {
        type: "paragraph",
        text: "Every creator watches other creators. The difference between learning from them and becoming a weaker copy is method: studying patterns rather than individual posts, looking for what's missing rather than what's popular, and turning what you learn into an angle only you can make.",
      },
      {
        type: "paragraph",
        text: "This guide covers a practical competitor analysis. For breaking down a single successful video, see how to analyse a viral video; for using gaps you find, see how to find content gaps.",
        links: [
          { text: "how to analyse a viral video", href: "/blog/how-to-analyze-a-viral-video" },
          { text: "how to find content gaps", href: "/blog/how-to-find-content-gaps" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creator competitor analysis means studying creators who serve a similar audience to understand what that audience responds to and what's missing. Pick five to eight creators (direct peers, aspirational creators and adjacent niches), review their last 20 to 30 posts for topics, formats, hooks, length, posting rhythm and audience response in comments, note what they don't cover well, and turn the patterns into your own angle. Learn from structures and gaps; never copy scripts, visuals, concepts or series names.",
      },
      { type: "heading", text: "Who to analyse", id: "who" },
      {
        type: "table",
        headers: ["Type", "Why", "Example (illustrative, finance creator)"],
        rows: [
          ["Direct peers", "Same audience and size", "Other Hindi personal-finance creators with similar reach"],
          ["Aspirational", "Where you want to be", "Large finance channels"],
          ["Adjacent", "Same audience, different topic", "Career and productivity creators your audience also follows"],
          ["Different platform", "Same topic, other format", "Finance newsletters or podcasts"],
        ],
      },
      { type: "heading", text: "What to look at", id: "what" },
      {
        type: "table",
        headers: ["Area", "Questions"],
        rows: [
          ["Topics", "Which subjects get the best response? Which are repeated?"],
          ["Formats", "Series, lengths, talking head vs b-roll, carousels vs Reels"],
          ["Hooks and titles", "How do strong posts open? What promises do they make?"],
          ["Rhythm", "How often and when they post"],
          ["Audience response", "What do comments ask, praise or complain about?"],
          ["Gaps", "What do comments request that nobody answers?"],
          ["Business model", "Brand categories, products, community"],
        ],
      },
      { type: "heading", text: "A comparison sheet", id: "sheet" },
      {
        type: "template",
        label: "Competitor analysis sheet (one row per creator)",
        text: "Creator · Platform · Audience (who) · Pillars · Top 5 posts (topic + format) · Common hook styles · Posting rhythm · Recurring comment questions · What's missing · Brand categories · What I'll do differently",
      },
      {
        type: "paragraph",
        text: "Review 20 to 30 recent posts per creator, not their one viral hit. Patterns matter more than outliers.",
      },
      { type: "heading", text: "Read the comments", id: "comments" },
      {
        type: "paragraph",
        text: "Comments on other creators' posts are free audience research: questions left unanswered, confusion, requests for a part two, complaints about too many ads. These are often your best content opportunities. Creator audience research covers organising this evidence.",
      },
      {
        type: "paragraph",
        text: "Research: creator audience research.",
        links: [{ text: "creator audience research", href: "/blog/creator-audience-research" }],
      },
      { type: "heading", text: "Turn insight into your angle", id: "angle" },
      {
        type: "table",
        headers: ["Insight", "Copying", "Your angle"],
        rows: [
          ["Their \"budget meal\" Reels do well", "Same recipes, same format", "Budget meals for hostel kitchens with one induction plate"],
          ["Comments ask for Hindi versions", "Translating their script", "Original Hindi explainers with local examples"],
          ["Long product lists get skipped", "Same lists", "\"One pick and why\" verdict format"],
          ["Nobody tests products over time", "-", "\"Used for 60 days\" series"],
        ],
      },
      {
        type: "paragraph",
        text: "Your angle usually comes from your audience, your experience or your format. Creator positioning explains how to own it.",
      },
      {
        type: "paragraph",
        text: "Positioning: creator positioning.",
        links: [{ text: "creator positioning", href: "/blog/creator-positioning" }],
      },
      { type: "heading", text: "Where learning ends and copying begins", id: "line" },
      {
        type: "table",
        headers: ["Fine to learn from", "Not fine to copy"],
        rows: [
          ["General formats (listicles, Q&A, tests)", "Specific scripts or wording"],
          ["Structures (hook-point-payoff)", "Distinctive visual style, sets, graphics"],
          ["Topics in your niche", "Unique concepts and series names"],
          ["What the audience responds to", "Thumbnails and titles that imitate closely"],
          ["Posting rhythm", "Their footage, photos or music"],
        ],
      },
      {
        type: "paragraph",
        text: "Copying damages your reputation and can raise copyright problems, and platforms may deprioritise unoriginal content. Creator copyright covers the legal basics.",
      },
      {
        type: "paragraph",
        text: "Copyright: creator copyright.",
        links: [{ text: "creator copyright", href: "/blog/creator-copyright" }],
      },
      { type: "heading", text: "How often", id: "how-often" },
      {
        type: "paragraph",
        text: "A full analysis once a quarter, and a light monthly scan of your five closest peers, is enough. More than that tends to become comparison anxiety rather than useful research.",
      },
      { type: "heading", text: "For brands: competitor analysis for creator selection", id: "for-brands" },
      {
        type: "paragraph",
        text: "For brands, looking at a creator's peers helps judge whether their content is distinctive or generic, and which creators in a niche have genuinely loyal audiences. Kudozz's guide on how to find YouTube influencers covers discovery and comparison from the brand side.",
        links: [{ text: "how to find YouTube influencers", href: "/blog/how-to-find-youtube-influencers" }],
      },
      { type: "heading", text: "Worked example: from analysis to angle", id: "example" },
      {
        type: "template",
        label: "Illustrative: a new Bengali travel creator",
        text: "Analysed: 6 creators (3 peers, 2 large travel channels, 1 food creator in the region)\nPatterns:\n• Top posts: budget breakdowns and \"hidden places\" lists\n• Comments repeatedly ask: \"How to reach by train?\", \"Is it safe for solo women?\", \"Best time to go?\"\n• Missing: practical transport details in Bengali; solo-female safety specifics\nAngle chosen:\n• Series: \"Weekend trips from Kolkata by train\", in Bengali, with fare and timing details (verified)\n• Recurring segment: safety notes from local women travellers (with permission)\nNot copied: the large channels' thumbnail style and \"hidden gem\" series names",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Studying one viral post instead of patterns.",
          "Analysing only much bigger creators.",
          "Ignoring comments.",
          "Copying formats so closely they become imitations.",
          "Letting analysis turn into daily comparison.",
        ],
      },
      {
        type: "paragraph",
        text: "Brands researching which creators their competitors work with can use the brand-side guide to finding competitors' influencers.",
        links: [
          { text: "finding competitors' influencers", href: "/blog/competitor-influencers" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Competitor analysis is research, not imitation. Study patterns across a few relevant creators, read what their audiences ask for, find what's missing, and build your own angle from your audience, experience and format.",
      },
    ],
    faqs: [
      {
        question: "How do creators do competitor analysis?",
        answer:
          "Choose five to eight relevant creators, review 20 to 30 recent posts each for topics, formats, hooks, rhythm and audience comments, note gaps, and turn patterns into your own angle.",
      },
      {
        question: "Is it okay to copy another creator's format?",
        answer:
          "General formats like listicles or Q&As are common and fine to use. Copying specific scripts, visual styles, unique concepts, series names or footage isn't.",
      },
      {
        question: "How often should creators analyse competitors?",
        answer:
          "A full analysis quarterly and a light monthly scan is usually enough.",
      },
    ],
  },
  {
    slug: "creator-trend-research",
    category: "Creator Resources",
    title: "Creator Trend Research: How to Find Trends Before They Become Saturated",
    seoTitle: "Creator Trend Research: Spot Trends Before They're Saturated",
    excerpt:
      "How creators spot trends early and decide which to use: where trends start, early-signal sources, a fit test, the timing window, how to add your own angle, and when to ignore a trend completely.",
    metaDescription:
      "How creators research trends: early-signal sources, a fit test, the timing window, adding your own angle, avoiding saturated trends and when to skip them.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["creator trend research", "find trends early", "social media trends creators", "trending topics", "trend spotting", "Reels trends"],
    related: ["trend-vs-evergreen-content-creators", "creator-growth-strategy", "evergreen-content-ideas-creators"],
    body: [
      {
        type: "paragraph",
        text: "By the time a trend appears on every creator's feed, the reach it offers has usually been divided among thousands of near-identical posts. Early trend research isn't about predicting the future; it's about noticing signals a little sooner, judging fit quickly and adding something only you can.",
      },
      {
        type: "paragraph",
        text: "This guide covers finding and filtering trends. Whether to prioritise trends or evergreen content is covered in trend vs evergreen content.",
        links: [{ text: "trend vs evergreen content", href: "/blog/trend-vs-evergreen-content-creators" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To find trends before they saturate, watch early-signal sources: rising audio and formats in your own feed and platform trend tools, search suggestions and rising searches, niche communities and forums, news and cultural calendars, and comments from your audience. Filter each trend with a fit test (does it suit your audience, pillars and brand?), act within its window with your own angle rather than a copy, and skip trends that don't fit. For many creators, a few well-chosen trends a month beat chasing every one.",
      },
      { type: "heading", text: "Types of trends", id: "types" },
      {
        type: "table",
        headers: ["Type", "Example", "Lifespan"],
        rows: [
          ["Audio and format trends", "A sound or editing style spreading on Reels", "Days to weeks"],
          ["Topic trends", "A new product, policy or news event", "Weeks"],
          ["Cultural moments", "Festivals, cricket tournaments, exam results", "Predictable"],
          ["Search trends", "Rising questions people type", "Weeks to months"],
          ["Niche trends", "A new technique or tool in your field", "Months"],
        ],
      },
      {
        type: "paragraph",
        text: "Cultural moments are the easiest to plan; niche and search trends often last longest and suit expertise-led creators.",
      },
      { type: "heading", text: "Early-signal sources", id: "sources" },
      {
        type: "table",
        headers: ["Source", "What to look for"],
        rows: [
          ["Your own feed (with a research account if needed)", "Formats and audio appearing repeatedly among smaller creators"],
          ["Platform trend tools, where available", "Rising audio, topics and search terms"],
          ["Search suggestions and Google Trends", "Rising queries in your niche"],
          ["Niche communities, Reddit, forums, WhatsApp groups", "New questions and tools people discuss"],
          ["Industry news and brand launches", "Changes your audience will ask about"],
          ["Your comments and DMs", "Questions that appear suddenly"],
          ["Cultural and festival calendar", "Predictable moments to prepare for"],
        ],
      },
      {
        type: "paragraph",
        text: "YouTube Studio's research insights show what viewers search for on YouTube, and Google Trends shows relative search interest over time.",
      },
      {
        type: "paragraph",
        text: "Tools: YouTube keyword research and Google Trends.",
        links: [
          { text: "YouTube keyword research", href: "/blog/youtube-keyword-research" },
          { text: "Google Trends", href: "https://trends.google.com/" },
        ],
      },
      { type: "heading", text: "The fit test", id: "fit-test" },
      {
        type: "template",
        label: "Trend fit test (answer yes to at least 3)",
        text: "☐ My audience would genuinely care\n☐ It fits one of my content pillars\n☐ I can add an angle, expertise or experience\n☐ It won't feel off-brand or clash with values\n☐ I can publish while it's still growing",
      },
      {
        type: "paragraph",
        text: "If a trend fails the test, skipping it is a strategy, not a missed opportunity.",
      },
      { type: "heading", text: "Timing windows", id: "timing" },
      {
        type: "table",
        headers: ["Trend type", "Act within"],
        rows: [
          ["Audio and format", "A few days of noticing"],
          ["Topic and news", "Days, with accuracy checked"],
          ["Cultural moments", "Plan weeks ahead"],
          ["Search and niche trends", "Weeks; can be evergreen later"],
        ],
      },
      {
        type: "paragraph",
        text: "Speed never excuses inaccuracy. For news and policy trends, check official sources before posting.",
      },
      { type: "heading", text: "Add your own angle", id: "angle" },
      {
        type: "table",
        headers: ["Trend", "Copy", "Angle (illustrative)"],
        rows: [
          ["A viral \"day in my life\" format", "Same format, same beats", "\"Day in the life of a first-year CA student in Indore\""],
          ["A new budget phone launch", "Specs recap", "\"Tested for a week on a 4G-only network in a small town\""],
          ["A festival recipe trend", "Same recipe", "\"The Kerala version my grandmother makes\""],
        ],
      },
      { type: "heading", text: "Trends and brand deals", id: "brands" },
      {
        type: "paragraph",
        text: "Brands often want to join trends through creators. Check that trend-based sponsored content still fits your audience and is disclosed, and be careful with trending audio: platform music libraries may not be licensed for branded content.",
      },
      {
        type: "paragraph",
        text: "Rights: creator copyright.",
        links: [{ text: "creator copyright", href: "/blog/creator-copyright" }],
      },
      { type: "heading", text: "Worked example: a week of trend research", id: "example" },
      {
        type: "template",
        label: "Illustrative: a Malayalam food creator",
        text: "Monday (20 min): scan feed and trend tools; note 6 trends\nFit test:\n• Viral \"3-ingredient dessert\" format → passes (fits pillar, can use local ingredients)\n• A dance trend → fails (no fit)\n• Onam in 5 weeks → passes (plan now)\n• A new air fryer model launching → partial (only if audience asks)\n• Rising search \"healthy tiffin ideas for kids\" → passes (evergreen-leaning)\n• A celebrity controversy → fails (off-brand)\n\nActions:\n• Wed: 3-ingredient payasam version (trend + own angle), pinned link to full Onam recipe playlist\n• Onam: 4-part series planned for weeks 3–5\n• Tiffin ideas: added to evergreen list",
      },
      {
        type: "paragraph",
        text: "Skipping half the trends you notice is normal. The value is in acting quickly on the few that fit.",
      },
      { type: "heading", text: "A simple trend log", id: "log" },
      {
        type: "template",
        label: "Trend log columns",
        text: "Date noticed · Trend · Source · Fit test (pass/fail) · Angle · Posted? · Result after 7 days · Keep as format?",
      },
      {
        type: "paragraph",
        text: "Over a few months the log shows which sources surface useful trends early and which trends turn into lasting formats.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Chasing every trend regardless of fit.",
          "Copying the trend exactly.",
          "Posting after saturation.",
          "Spreading misinformation in a rush to be first.",
          "Using trending audio in branded content without checking licensing.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Trend research is noticing early, judging fit fast and adding your own angle. Use early-signal sources, apply the fit test, respect timing windows, and skip trends that don't fit. The trends you choose not to follow are part of your strategy too.",
      },
    ],
    faqs: [
      {
        question: "How do creators find trends early?",
        answer:
          "Watch formats spreading among smaller creators, rising search suggestions and trend tools, niche communities, industry news, cultural calendars and sudden new questions from your audience.",
      },
      {
        question: "Should creators follow every trend?",
        answer:
          "No. Use a fit test: follow trends your audience cares about, that fit your pillars and where you can add your own angle.",
      },
      {
        question: "How quickly should creators act on a trend?",
        answer:
          "Audio and format trends within days, topic trends within days with facts checked, and cultural moments planned weeks ahead.",
      },
    ],
  },
  {
    slug: "evergreen-content-ideas-creators",
    category: "Creator Resources",
    title: "How to Find Evergreen Content Ideas as a Creator",
    seoTitle: "How to Find Evergreen Content Ideas as a Creator",
    excerpt:
      "Where to find content ideas that keep working for months or years: recurring questions, beginner problems, decision guides, how-tos, definitions and seasonal evergreen, with a test for evergreen potential and ways to keep evergreen content current.",
    metaDescription:
      "How creators find evergreen content ideas: recurring questions, beginner problems, decision guides, how-tos and seasonal evergreen, with a test for evergreen potential.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["evergreen content ideas", "evergreen content creators", "evergreen YouTube videos", "long-lasting content", "timeless content ideas", "searchable content ideas"],
    related: ["trend-vs-evergreen-content-creators", "creator-seo", "how-to-find-content-gaps"],
    body: [
      {
        type: "paragraph",
        text: "Evergreen content is the work that keeps paying you back: the tutorial that still gets views two years later, the explainer people find every exam season, the comparison that keeps sending affiliate clicks. For creators who want sustainable growth, a library of evergreen pieces is one of the most valuable things to build.",
      },
      {
        type: "paragraph",
        text: "This guide covers finding evergreen ideas and keeping them current. Balancing evergreen with trend content is covered in trend vs evergreen content; making evergreen pieces findable is covered in creator SEO.",
        links: [
          { text: "trend vs evergreen content", href: "/blog/trend-vs-evergreen-content-creators" },
          { text: "creator SEO", href: "/blog/creator-seo" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Evergreen content ideas answer questions people keep asking over time. Find them in recurring audience questions, beginner problems in your niche, decision guides (\"which should I choose?\"), step-by-step how-tos, definitions and explainers, and seasonal topics that return every year. Test an idea by asking whether someone will search for it a year from now and whether the core answer will still be true, then make the definitive version, title it the way people search and update it when details change.",
      },
      { type: "heading", text: "Where evergreen ideas come from", id: "sources" },
      {
        type: "table",
        headers: ["Source", "Example (illustrative)"],
        rows: [
          ["Recurring questions", "\"How do I start a SIP?\""],
          ["Beginner problems", "\"My sourdough is flat, why?\""],
          ["Decision guides", "\"Laptop for coding under ₹60,000: what to look for\""],
          ["How-tos", "\"How to file a vehicle insurance claim\""],
          ["Definitions and explainers", "\"What is a credit score?\""],
          ["Mistakes and myths", "\"Common mistakes first-time home buyers make\""],
          ["Seasonal evergreen", "\"What to pack for a monsoon trek\" (returns every year)"],
        ],
      },
      {
        type: "paragraph",
        text: "How to find content gaps and creator audience research are both good sources of recurring questions.",
      },
      {
        type: "paragraph",
        text: "Sources: how to find content gaps and creator audience research.",
        links: [
          { text: "how to find content gaps", href: "/blog/how-to-find-content-gaps" },
          { text: "creator audience research", href: "/blog/creator-audience-research" },
        ],
      },
      { type: "heading", text: "Test evergreen potential", id: "test" },
      {
        type: "template",
        label: "Evergreen test",
        text: "☐ Will someone search for this a year from now?\n☐ Will the core answer still be true (or easy to update)?\n☐ Is it useful without context from this week's news?\n☐ Does it fit one of my content pillars?\n☐ Can I make the best version available?",
      },
      { type: "heading", text: "Make the definitive version", id: "definitive" },
      {
        type: "paragraph",
        text: "Evergreen content competes on quality over time. Make it the clearest, most complete answer: examples, steps, visuals, common mistakes. Title it with the words people search, and add chapters or timestamps on YouTube.",
      },
      { type: "heading", text: "Evergreen by format", id: "formats" },
      {
        type: "table",
        headers: ["Format", "Evergreen strength"],
        rows: [
          ["YouTube long-form", "High, especially search-driven tutorials and comparisons"],
          ["Blog or website guides", "High with search optimisation"],
          ["Carousels", "Medium; saves keep them visible"],
          ["Short-form video", "Varies; searchable answers can last"],
          ["Newsletter archive", "Medium, if public and searchable"],
        ],
      },
      { type: "heading", text: "Keep it current", id: "update" },
      {
        type: "paragraph",
        text: "Evergreen doesn't mean \"never touch\". Prices, apps, rules and platform features change. Keep a list of evergreen pieces with a review date, update descriptions and pinned comments, and remake the piece when the core answer changes. For tax, finance or platform rules, date your information clearly.",
      },
      { type: "heading", text: "Evergreen and monetization", id: "monetization" },
      {
        type: "paragraph",
        text: "Evergreen pieces are natural homes for affiliate links, product tags, lead magnets and sponsor segments that keep earning. Keep links current and disclosures clear. Shoppable content for creators covers the commerce side.",
      },
      {
        type: "paragraph",
        text: "Commerce: shoppable content for creators.",
        links: [{ text: "shoppable content for creators", href: "/blog/shoppable-content-creators" }],
      },
      { type: "heading", text: "Worked example: building an evergreen library", id: "example" },
      {
        type: "template",
        label: "Illustrative: a Telugu personal-finance creator",
        text: "Recurring questions from comments and search suggestions (grouped):\n• Starting out: \"How to open a demat account\", \"SIP vs lump sum\"\n• Decisions: \"Term insurance vs endowment\", \"Which credit card first\"\n• Seasonal: \"Tax saving before March\", \"Bonus: what to do with it\"\n\nEvergreen test result: 9 of 12 pass (3 depend on this year's rules → make them timely posts linking to evergreen ones)\n\nPlan:\n• One definitive long-form video per pillar a month\n• A Short and a carousel from each\n• Review date on each video: every April (after budget changes)\n• Pinned comment with updated notes when details change",
      },
      {
        type: "paragraph",
        text: "After a year, that's a library of a dozen or more pieces that keep answering questions, each with its own short-form versions leading back to it.",
      },
      { type: "heading", text: "Turn one evergreen piece into a small hub", id: "hub" },
      {
        type: "table",
        headers: ["Piece", "Role"],
        rows: [
          ["Definitive long-form video or guide", "The complete answer"],
          ["3–5 Shorts or Reels", "Each answers one sub-question and links back"],
          ["Carousel checklist", "Saveable summary"],
          ["Newsletter issue", "The story behind it, with the link"],
          ["Playlist or series page", "Keeps viewers moving to related answers"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Assuming all evergreen content must be long.",
          "Titles that are clever but unsearchable.",
          "Never updating outdated details.",
          "Evergreen pieces that don't fit your pillars.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Evergreen ideas come from questions that don't go away. Find them in recurring questions, beginner problems and decisions, test for lasting demand, make the definitive version, title it for search and keep it current.",
      },
    ],
    faqs: [
      {
        question: "What is evergreen content for creators?",
        answer:
          "Content that stays useful and searchable for months or years, such as how-tos, explainers, decision guides and answers to recurring questions.",
      },
      {
        question: "How do I find evergreen content ideas?",
        answer:
          "Look at recurring audience questions, beginner problems, decisions people face, definitions and seasonal topics that return every year, and test whether people will still search for them a year from now.",
      },
      {
        question: "Does evergreen content need updating?",
        answer:
          "Yes. Update prices, apps, rules and platform details, and remake the piece if the core answer changes.",
      },
    ],
  },
  {
    slug: "trend-vs-evergreen-content-creators",
    category: "Creator Resources",
    title: "Trend Content vs Evergreen Content: What Should Creators Post?",
    seoTitle: "Trend vs Evergreen Content: What Should Creators Post?",
    excerpt:
      "How trend and evergreen content differ in reach, lifespan, effort and business value, how to choose a mix for your goals and platform, how to link trend content to evergreen pieces, and example mixes for different creators.",
    metaDescription:
      "Trend vs evergreen content for creators: differences in reach, lifespan and business value, choosing a mix by goal and platform, linking them, and example mixes.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["trend vs evergreen content", "trending content vs evergreen", "content mix creators", "what should creators post", "evergreen and trending content", "content balance"],
    related: ["creator-trend-research", "evergreen-content-ideas-creators", "creator-content-strategy"],
    body: [
      {
        type: "paragraph",
        text: "Trend content can bring a spike of new viewers this week. Evergreen content can bring a steady flow for years. Most creators need both, and the right mix depends on your goals, your platform and how much time you have. The mistake is treating it as an either-or choice, or letting whatever is trending decide by default.",
      },
      {
        type: "paragraph",
        text: "This guide compares the two and helps you choose a mix. Finding trends is covered in creator trend research; finding evergreen ideas in how to find evergreen content ideas.",
        links: [
          { text: "creator trend research", href: "/blog/creator-trend-research" },
          { text: "how to find evergreen content ideas", href: "/blog/evergreen-content-ideas-creators" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Trend content rides current interest for short, intense reach; evergreen content answers lasting questions and keeps getting found over months or years. Use trends selectively to reach new people and show personality, and evergreen content to build search traffic, trust and long-term income. Choose the mix from your goals and platform: short-form platforms reward more trend participation, while YouTube, search and websites reward evergreen depth. Link trend posts to evergreen pieces so new viewers have somewhere to go.",
      },
      { type: "heading", text: "Side by side", id: "comparison" },
      {
        type: "table",
        headers: ["", "Trend content", "Evergreen content"],
        rows: [
          ["Reach pattern", "Spike, then fades", "Slow start, steady over time"],
          ["Lifespan", "Days to weeks", "Months to years"],
          ["Competition", "Many creators at once", "Quality wins over time"],
          ["Effort", "Fast to make, time-sensitive", "More research, lasting"],
          ["Discovery", "Recommendations, feeds", "Search and recommendations"],
          ["Business value", "Awareness, personality", "Trust, leads, affiliate, products"],
          ["Risk", "Off-brand or saturated", "Outdated details"],
        ],
      },
      { type: "heading", text: "Choose a mix by goal", id: "by-goal" },
      {
        type: "table",
        headers: ["Main goal right now", "Lean towards"],
        rows: [
          ["Reach new audiences quickly", "More trend content (with your angle)"],
          ["Build search traffic and authority", "More evergreen"],
          ["Grow email list or product sales", "Evergreen with lead magnets"],
          ["Land brand deals in a category", "Evergreen pillar content plus selective trends"],
        ],
      },
      { type: "heading", text: "Choose a mix by platform", id: "by-platform" },
      {
        type: "table",
        headers: ["Platform", "Typical balance"],
        rows: [
          ["Instagram Reels, short-form feeds", "More trend-friendly, but searchable answers work too"],
          ["YouTube long-form", "Evergreen-heavy; timely videos for news niches"],
          ["YouTube Shorts", "Mixed"],
          ["LinkedIn", "Timely commentary plus evergreen frameworks"],
          ["Website, newsletter archive", "Evergreen"],
        ],
      },
      {
        type: "paragraph",
        text: "These are tendencies, not rules. Your own analytics should settle it.",
      },
      { type: "heading", text: "Link trend posts to evergreen pieces", id: "link" },
      {
        type: "paragraph",
        text: "A trend post brings a spike of new viewers; an evergreen piece gives them a reason to stay. Point trend content to a related evergreen video, guide or series in a pinned comment, Story or caption.",
      },
      {
        type: "template",
        label: "Example (illustrative)",
        text: "Trend: Reel using a popular audio about \"salary day\"\nEvergreen link: \"My 5-step salary day money routine\" (YouTube, updated yearly)\nCTA: pinned comment linking the full routine",
      },
      { type: "heading", text: "Example mixes", id: "examples" },
      {
        type: "table",
        headers: ["Creator", "Mix (illustrative)"],
        rows: [
          ["Comedy Reels creator", "Mostly timely, plus recurring characters (evergreen formats)"],
          ["Finance educator", "Mostly evergreen, plus budget-day and policy-change explainers"],
          ["Tech reviewer", "Launch coverage (trend) plus \"best under ₹X\" guides (evergreen)"],
          ["Regional food creator", "Festival and seasonal content plus everyday recipes"],
          ["B2B founder on LinkedIn", "Industry news commentary plus evergreen lessons"],
        ],
      },
      { type: "heading", text: "Review the mix", id: "review" },
      {
        type: "paragraph",
        text: "Each quarter, compare trend and evergreen posts on follows per 1,000 views, views after 30 and 90 days, saves and shares, and business outcomes (clicks, sign-ups, enquiries). Shift the mix toward what serves your goals. Creator content analytics explains the measurement.",
      },
      {
        type: "paragraph",
        text: "Measurement: creator content analytics.",
        links: [{ text: "creator content analytics", href: "/blog/creator-content-analytics" }],
      },
      { type: "heading", text: "Worked example: rebalancing a trend-heavy account", id: "example" },
      {
        type: "template",
        label: "Illustrative review (hypothetical numbers)",
        text: "Creator: fashion Reels, 20 posts last month (16 trend, 4 evergreen)\n\nAfter 30 days:\n• Trend posts: high views in week 1, very few new views after; follows per 1,000 views low\n• Evergreen posts (\"What to wear to an office interview in summer\", \"Kurta sizing guide\"): smaller launch, still getting views and saves; follows per 1,000 views higher\n\nDecision for next month:\n• 10 trend posts, only those passing the fit test, each linking to an evergreen piece\n• 6 evergreen posts built around searched questions\n• 4 series episodes (hub content)\nReview again in 60 days",
      },
      {
        type: "paragraph",
        text: "The point isn't a fixed ratio. It's using your own numbers, after enough time has passed, to decide the balance.",
      },
      { type: "heading", text: "Signs your mix is off", id: "signs" },
      {
        type: "table",
        headers: ["Sign", "Likely imbalance"],
        rows: [
          ["Views spike and vanish; follower count stalls", "Too much trend content with nowhere to go next"],
          ["Steady search views but little new reach", "Too little trend or discovery content"],
          ["Every month feels like starting from zero", "Not enough evergreen building up"],
          ["Content feels dated quickly", "Trend posts not tied to lasting topics"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Letting trends decide your whole calendar.",
          "Ignoring trends entirely on trend-driven platforms.",
          "Trend posts with nowhere for new viewers to go next.",
          "Judging evergreen content in its first week.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Trend and evergreen content do different jobs. Use trends selectively for reach and personality, build evergreen pieces for search, trust and income, link the two, and let your goals, platform and data set the mix.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between trend and evergreen content?",
        answer:
          "Trend content rides current interest for a short spike of reach. Evergreen content answers lasting questions and keeps getting found for months or years.",
      },
      {
        question: "Should creators post trending or evergreen content?",
        answer:
          "Usually both. Use trends selectively for reach and personality, and evergreen content for search, trust and long-term income, adjusting the mix to your goals and platform.",
      },
      {
        question: "How long does evergreen content take to perform?",
        answer:
          "It often starts slowly and grows through search and recommendations over months. Judge it over 30 to 90 days, not its first week.",
      },
    ],
  },
];
