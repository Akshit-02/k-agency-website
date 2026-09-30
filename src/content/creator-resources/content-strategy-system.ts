import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_FACTS_REVIEWED, CREATOR_LAYER_7_PUBLISHED as PUBLISHED } from "@/content/creator-resources/shared";

/**
 * Content strategy system (650–699 layer): the strategy pillar, content
 * pillars, planning frameworks, the production workflow and distribution
 * (673 content promotion merged into distribution). Calendar, batching,
 * repurposing and long-to-short (667, 669–671) stay in their existing guides.
 */
export const contentStrategySystemPosts: BlogPost[] = [
  {
    slug: "creator-content-strategy",
    category: "Creator Resources",
    title: "Creator Content Strategy: How to Build a Repeatable Content System",
    seoTitle: "Creator Content Strategy: Build a Repeatable Content System",
    excerpt:
      "A cross-platform content strategy for creators: the six-part system from audience to measurement, how to choose pillars and formats, plan production and distribution, measure what matters, and review the strategy each quarter without starting over.",
    metaDescription:
      "Creator content strategy as a system: audience, content pillars, formats, production, distribution and measurement, with a one-page template and quarterly review.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "15 min read",
    tags: ["creator content strategy", "content strategy for creators", "content system", "content planning creators", "social media content strategy", "content marketing for creators"],
    related: ["content-pillars-for-creators", "creator-content-workflow", "creator-content-distribution"],
    body: [
      {
        type: "paragraph",
        text: "Most creators don't lack ideas; they lack a system that decides which ideas get made, in what form, for whom and why. Without one, every week starts from a blank page, every trend feels urgent and nothing compounds. A content strategy is that system, written down clearly enough that you can follow it on a tired Tuesday.",
      },
      {
        type: "paragraph",
        text: "This is the pillar guide for Kudozz's content strategy section. It connects the more specific guides: content pillars, content frameworks, the content workflow, content distribution and the content calendar. Platform-specific strategies are in Instagram content strategy and YouTube content strategy.",
      },
      {
        type: "paragraph",
        text: "Related: content pillars, creator content workflow, Instagram content strategy and YouTube content strategy.",
        links: [
          { text: "content pillars", href: "/blog/content-pillars-for-creators" },
          { text: "creator content workflow", href: "/blog/creator-content-workflow" },
          { text: "Instagram content strategy", href: "/blog/instagram-content-strategy" },
          { text: "YouTube content strategy", href: "/blog/youtube-content-strategy" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator content strategy is a repeatable system with six parts: audience (who it's for and what they need), pillars (three or four topics you'll be known for), formats (the repeatable shapes content takes), production (how it gets made consistently), distribution (how it reaches people on and off platform) and measurement (the few numbers that decide what to keep). Write it on one page, run it for a quarter, review with data, and change one part at a time rather than starting over.",
      },
      { type: "heading", text: "The six-part system", id: "system" },
      {
        type: "image",
        src: "/blog/creator-resources/creator-content-strategy-system.svg",
        alt: "Creator content strategy system: audience, content pillars, formats, production, distribution, measurement",
        caption: "Each part answers one question; together they make content repeatable.",
        width: 1200,
        height: 675,
      },
      {
        type: "table",
        headers: ["Part", "Question it answers", "Guide"],
        rows: [
          ["Audience", "Who is this for and what do they need?", "Identify your ideal audience"],
          ["Pillars", "What topics will we be known for?", "Content pillars for creators"],
          ["Formats", "What shapes does content take?", "Creator content frameworks"],
          ["Production", "How does it get made every week?", "Creator content workflow"],
          ["Distribution", "How does each piece reach people?", "Creator content distribution"],
          ["Measurement", "What do we keep, change or stop?", "Creator content analytics"],
        ],
      },
      {
        type: "paragraph",
        text: "Guides: identify your ideal audience, creator content frameworks and creator content analytics.",
        links: [
          { text: "identify your ideal audience", href: "/blog/identify-ideal-audience-creator" },
          { text: "creator content frameworks", href: "/blog/creator-content-frameworks" },
          { text: "creator content analytics", href: "/blog/creator-content-analytics" },
        ],
      },
      { type: "heading", text: "1. Audience", id: "audience" },
      {
        type: "paragraph",
        text: "Start with a one-sentence ideal audience profile and the three problems or desires you'll serve most. If your audience research shows a gap between who you think watches and who does, resolve it here.",
      },
      { type: "heading", text: "2. Pillars", id: "pillars" },
      {
        type: "paragraph",
        text: "Choose three or four pillars: topics that fit your audience's needs, your expertise or experience, and the business you want (brand categories, products). Pillars make your account recognisable and give brands and search engines a clear picture of what you cover.",
      },
      { type: "heading", text: "3. Formats", id: "formats" },
      {
        type: "paragraph",
        text: "Formats are repeatable structures: a weekly Q&A, a \"tested for 30 days\" review, a myth-buster, a mini-documentary. Pick two or three per pillar, and make at least one a named series. Formats make production faster and give viewers a reason to come back.",
      },
      {
        type: "table",
        headers: ["Pillar (illustrative: personal finance educator)", "Formats"],
        rows: [
          ["Budgeting basics", "\"₹X salary budget breakdown\" series; carousel checklists"],
          ["First investments", "Myth vs fact Reels; long-form explainers"],
          ["Money and family", "Story-led Reels; live Q&A monthly"],
          ["Tax season", "Deadline explainers; FAQ carousels"],
        ],
      },
      { type: "heading", text: "4. Production", id: "production" },
      {
        type: "paragraph",
        text: "Decide your cadence from capacity, not from advice about posting frequency. Then choose how you'll produce: batching days, templates, an editor, AI assistance for drafts. The creator content workflow maps the process stage by stage; content batching covers the weekly production system.",
      },
      {
        type: "paragraph",
        text: "Production: content batching for creators.",
        links: [{ text: "content batching for creators", href: "/blog/content-batching-for-creators" }],
      },
      { type: "heading", text: "5. Distribution", id: "distribution" },
      {
        type: "paragraph",
        text: "Publishing is not distribution. Plan how each piece travels: cross-posting adapted versions, Stories and channels, your newsletter, communities, collaborations and search. Creator content distribution covers this.",
      },
      { type: "heading", text: "6. Measurement", id: "measurement" },
      {
        type: "paragraph",
        text: "Pick the few numbers that answer your strategy questions: follows per 1,000 views for discovery, saves and shares for value, retention for quality, sign-ups and clicks for business outcomes. Review monthly; change strategy quarterly.",
      },
      { type: "heading", text: "A one-page content strategy", id: "template" },
      {
        type: "template",
        label: "Content strategy (one page)",
        text: "AUDIENCE: [one-sentence profile] · Top 3 needs: [ ], [ ], [ ]\nGOALS THIS QUARTER: [1–2 outcome goals] (see creator goals)\nPILLARS: 1 [ ] 2 [ ] 3 [ ] (4 [ ])\nFORMATS: per pillar, 2–3; series names: [ ]\nPLATFORMS AND CADENCE: e.g. 3 Reels + 1 YouTube + 1 newsletter a week\nPRODUCTION: batching day(s), templates, help\nDISTRIBUTION: cross-post plan, newsletter, community, collabs, search\nMEASUREMENT: 4–5 metrics; monthly review date\nEXPERIMENTS: 1–2 tests this quarter",
      },
      {
        type: "paragraph",
        text: "Goals: creator goals.",
        links: [{ text: "creator goals", href: "/blog/creator-goals" }],
      },
      { type: "heading", text: "Strategy vs calendar vs workflow", id: "differences" },
      {
        type: "table",
        headers: ["Tool", "Answers", "Time horizon"],
        rows: [
          ["Content strategy", "What we make, for whom and why", "Quarter to year"],
          ["Content calendar", "What goes out when", "Week to month"],
          ["Content workflow", "How each piece gets made", "Per piece"],
        ],
      },
      {
        type: "paragraph",
        text: "The creator content calendar turns strategy into dates.",
        links: [{ text: "creator content calendar", href: "/blog/creator-content-calendar" }],
      },
      { type: "heading", text: "Examples by creator type", id: "examples" },
      {
        type: "table",
        headers: ["Creator", "Strategy summary (illustrative)"],
        rows: [
          ["Regional-language cooking creator", "Audience: working families; pillars: weekday dinners, festival food, budget groceries; formats: 30-minute series, market hauls; distribution: Reels + WhatsApp channel"],
          ["LinkedIn professional", "Audience: early-career analysts; pillars: skills, career moves, industry news; formats: carousels, short posts, monthly live; distribution: LinkedIn + newsletter"],
          ["YouTube tech reviewer", "Audience: budget buyers; pillars: phones, accessories, apps; formats: \"best under ₹X\", long-term reviews; distribution: search-first titles + Shorts cut-downs"],
          ["UGC creator", "Audience: D2C brands; pillars: skincare, food, home; formats: demo, unboxing, testimonial styles; distribution: portfolio site + LinkedIn outreach"],
        ],
      },
      { type: "heading", text: "Quarterly review", id: "review" },
      {
        type: "template",
        label: "Quarterly strategy review",
        text: "Which pillar grew the audience most? Which drove business outcomes?\nWhich formats held attention? Which cost too much for the result?\nIs the audience who we think it is?\nWhat will we stop, change and try next quarter?",
      },
      { type: "heading", text: "For brands: why creators with a strategy perform better", id: "for-brands" },
      {
        type: "paragraph",
        text: "For brands, creators with a clear content strategy are easier to brief and more consistent to work with: you can see which pillar your product fits, which formats perform and what their audience expects. Kudozz's influencer marketing strategy guides cover how brands plan around creator content.",
      },
      {
        type: "paragraph",
        text: "For brands: Instagram creator marketing.",
        links: [{ text: "Instagram creator marketing", href: "/blog/instagram-creator-marketing" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Choosing a posting frequency before knowing what you'll make.",
          "Too many pillars, so nothing becomes recognisable.",
          "Formats that change every week.",
          "Treating publishing as distribution.",
          "Rewriting the whole strategy after one slow month.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A content strategy is a system: audience, pillars, formats, production, distribution and measurement, written on one page and reviewed each quarter. It turns content from a weekly scramble into a repeatable process that compounds.",
      },
    ],
    faqs: [
      {
        question: "What is a creator content strategy?",
        answer:
          "A repeatable system that defines who your content is for, the pillars you'll be known for, the formats you'll use, how content is produced and distributed, and how you'll measure what works.",
      },
      {
        question: "How often should creators post?",
        answer:
          "As often as you can sustain with quality. Set cadence from your production capacity and review results, rather than following a universal posting rule.",
      },
      {
        question: "How is a content strategy different from a content calendar?",
        answer:
          "The strategy decides what you make, for whom and why over a quarter or year. The calendar schedules what goes out when over weeks and months.",
      },
    ],
  },
  {
    slug: "content-pillars-for-creators",
    category: "Creator Resources",
    title: "Content Pillars for Creators: How to Choose Topics That Build Authority",
    seoTitle: "Content Pillars for Creators: Topics That Build Authority",
    excerpt:
      "What content pillars are, how to choose three or four that fit your audience, expertise and business, how to test them, how pillars relate to series and formats, and examples for creators, educators, founders and regional creators.",
    metaDescription:
      "What content pillars are and how creators choose three or four that fit audience, expertise and business, with a scoring method, testing plan and examples.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["content pillars", "content pillars for creators", "content themes", "social media content pillars", "content categories", "creator topics"],
    related: ["creator-content-strategy", "creator-positioning", "creator-content-frameworks"],
    body: [
      {
        type: "paragraph",
        text: "Content pillars are the handful of topics you return to again and again. They're how an audience learns what you're about, how a brand decides whether you fit its category, and how search engines connect your content to a subject. Choose them well and ideas become easier, because every idea either fits a pillar or doesn't.",
      },
      {
        type: "paragraph",
        text: "This guide covers choosing and testing pillars. The system they belong to is in creator content strategy; how pillars support what you're known for is in creator positioning.",
        links: [
          { text: "creator content strategy", href: "/blog/creator-content-strategy" },
          { text: "creator positioning", href: "/blog/creator-positioning" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Content pillars are three or four core topics a creator covers consistently. Choose them where three things overlap: what your audience needs, what you know or have experienced, and what supports your business (brand categories, products, services). Test each pillar for a month with a couple of formats, keep the ones that attract the right audience and hold attention, and make sure every post clearly belongs to one pillar.",
      },
      { type: "heading", text: "Pillars vs formats vs series", id: "definitions" },
      {
        type: "table",
        headers: ["Term", "Means", "Example (fitness creator)"],
        rows: [
          ["Pillar", "A core topic", "Home workouts"],
          ["Format", "A repeatable content shape", "10-minute follow-along"],
          ["Series", "A named, recurring format", "\"No-Equipment Monday\""],
        ],
      },
      {
        type: "paragraph",
        text: "Pillars decide what you talk about; formats and series decide how.",
      },
      { type: "heading", text: "Choose pillars where three circles overlap", id: "overlap" },
      {
        type: "table",
        headers: ["Circle", "Question"],
        rows: [
          ["Audience need", "Do people I serve actively want this?"],
          ["Your credibility", "Can I talk about it with real knowledge or experience?"],
          ["Business fit", "Does it connect to brands, products or services I want?"],
        ],
      },
      {
        type: "paragraph",
        text: "A pillar with only audience need becomes content you can't make credibly. One with only credibility may interest nobody. One with no business fit can still be worth keeping for audience trust, but at least one pillar should connect to how you earn.",
      },
      { type: "heading", text: "A scoring method", id: "scoring" },
      {
        type: "template",
        label: "Pillar scoring (1–5 each)",
        text: "Audience demand (comments, search, past performance)\nMy credibility (knowledge, experience, access)\nIdea depth (can I make 50+ pieces?)\nBusiness fit (brand categories, products)\nEnjoyment (will I still want to make this in a year?)\nKeep the top 3–4; the rest become occasional topics",
      },
      { type: "heading", text: "Examples", id: "examples" },
      {
        type: "table",
        headers: ["Creator", "Pillars (illustrative)"],
        rows: [
          ["Personal finance educator", "Budgeting, first investments, tax basics, money and family"],
          ["Marathi food creator", "Weekday meals, festival recipes, budget groceries, kitchen tools"],
          ["B2B founder on LinkedIn", "Building the company, hiring, customer lessons, industry trends"],
          ["Tech reviewer", "Phones under ₹30,000, accessories, apps and software"],
          ["Career coach", "Job search, interviews, salary negotiation, workplace skills"],
          ["UGC creator (portfolio)", "Skincare demos, food and beverage, home and lifestyle"],
        ],
      },
      { type: "heading", text: "Test before you commit", id: "test" },
      {
        type: "paragraph",
        text: "Give each candidate pillar four weeks with two formats. Compare follows per 1,000 views, saves and shares, retention and comment quality. Keep pillars that attract the audience you want, not just views. Creator A/B testing covers fair comparisons.",
      },
      {
        type: "paragraph",
        text: "Testing: creator A/B testing.",
        links: [{ text: "creator A/B testing", href: "/blog/creator-ab-testing" }],
      },
      { type: "heading", text: "How many pillars?", id: "how-many" },
      {
        type: "paragraph",
        text: "Three or four for most creators. Fewer and you may run out of angles; more and your account looks unfocused. A new creator can start with two and add one once formats are working.",
      },
      { type: "heading", text: "Pillars and authority", id: "authority" },
      {
        type: "paragraph",
        text: "Consistent pillars build authority: people start associating you with a topic, search engines see depth, and brands see category fit. Going deep on a pillar (reference content, series, collaborations with experts) strengthens that. How to build authority as a creator covers the next step.",
      },
      {
        type: "paragraph",
        text: "Authority: how to build authority as a creator.",
        links: [{ text: "how to build authority as a creator", href: "/blog/how-to-build-authority-as-a-creator" }],
      },
      { type: "heading", text: "Pillars and brand deals", id: "brand-deals" },
      {
        type: "paragraph",
        text: "Pillars make brand fit obvious. A brand in your pillar's category can see where their product belongs; a brand outside your pillars is often a poor fit. List your pillars in your media kit.",
      },
      {
        type: "paragraph",
        text: "Media kit: creator media kit.",
        links: [{ text: "creator media kit", href: "/blog/creator-media-kit" }],
      },
      { type: "heading", text: "Worked example: choosing pillars from scratch", id: "example" },
      {
        type: "template",
        label: "Illustrative: a career coach starting on LinkedIn and Instagram",
        text: "Candidate topics scored (demand, credibility, depth, business fit, enjoyment):\n• Job search strategy: 5, 5, 5, 5, 4 = 24\n• Interview preparation: 5, 5, 4, 5, 4 = 23\n• Salary negotiation: 4, 4, 4, 5, 5 = 22\n• Workplace productivity: 3, 3, 5, 2, 3 = 16\n• Motivational quotes: 2, 1, 3, 1, 2 = 9\n\nChosen pillars: job search, interviews, salary negotiation\nOccasional topic: workplace productivity\nDropped: motivational quotes\nTest month: 2 formats per pillar (carousels and short videos); review follows per 1,000 views and DMs asking about coaching",
      },
      { type: "heading", text: "Rebalancing pillars over time", id: "rebalance" },
      {
        type: "table",
        headers: ["Signal after a quarter", "Action"],
        rows: [
          ["One pillar drives most follows and enquiries", "Give it more slots; add a series"],
          ["A pillar gets views but attracts the wrong audience", "Reduce or reframe it"],
          ["A pillar you love underperforms", "Test new formats before dropping"],
          ["Audience keeps asking about a new topic", "Trial it as a fourth pillar"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Pillars so broad they mean nothing (\"lifestyle\").",
          "Pillars chosen for brand money with no audience need.",
          "Too many pillars.",
          "Posts that don't clearly belong to any pillar.",
          "Never reviewing pillars as the audience evolves.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Content pillars are the few topics that define you. Choose them where audience need, your credibility and your business overlap, test them with real data, keep three or four, and make every piece of content belong to one.",
      },
    ],
    faqs: [
      {
        question: "What are content pillars?",
        answer:
          "Three or four core topics a creator covers consistently, which define what the account is known for and guide what content gets made.",
      },
      {
        question: "How many content pillars should a creator have?",
        answer:
          "Usually three or four. Start with two if you're new, and add one once your formats are working.",
      },
      {
        question: "How do I choose content pillars?",
        answer:
          "Look for topics where your audience's needs, your knowledge or experience and your business goals overlap, score them, and test the top candidates for a month.",
      },
    ],
  },
  {
    slug: "creator-content-frameworks",
    category: "Creator Resources",
    title: "Creator Content Frameworks: 15 Systems for Planning Better Content",
    seoTitle: "Creator Content Frameworks: 15 Systems for Planning Content",
    excerpt:
      "Fifteen practical content planning frameworks for creators, from Help-Hub-Hero and the 3E mix to problem-solution, series ladders and the question bank, with when to use each and examples for Indian creators.",
    metaDescription:
      "Fifteen content planning frameworks for creators, including Help-Hub-Hero, the 3E mix, problem-solution and series ladders, with when to use each and examples.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "15 min read",
    tags: ["content frameworks", "content planning frameworks", "creator content framework", "Hero Hub Help", "content mix framework", "content ideas system"],
    related: ["creator-content-strategy", "content-pillars-for-creators", "how-to-write-video-scripts"],
    body: [
      {
        type: "paragraph",
        text: "A framework is a shortcut for decisions you'd otherwise make from scratch every week. Some help you balance your content mix; others help you turn one topic into many pieces; others give each post a proven shape. You don't need all fifteen below. Pick the two or three that fix the planning problem you actually have.",
      },
      {
        type: "paragraph",
        text: "These are planning frameworks. For script structures inside a video, see how to write video scripts; for storytelling structures, see creator storytelling.",
        links: [
          { text: "how to write video scripts", href: "/blog/how-to-write-video-scripts" },
          { text: "creator storytelling", href: "/blog/creator-storytelling" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creator content frameworks are repeatable planning systems: mix frameworks (like Help-Hub-Hero or Educate-Entertain-Engage) balance what you publish; idea frameworks (like the question bank or problem ladder) generate topics; structure frameworks (like problem-solution or before-after) shape individual pieces; and scaling frameworks (like series ladders or pillar-to-post) turn one idea into many. Choose frameworks based on your planning problem, and apply them inside your content pillars.",
      },
      { type: "heading", text: "Which framework fixes which problem?", id: "problems" },
      {
        type: "table",
        headers: ["Problem", "Try"],
        rows: [
          ["Content feels unbalanced", "1 Help-Hub-Hero · 2 Educate-Entertain-Engage · 3 70/20/10"],
          ["Running out of ideas", "4 Question bank · 5 Problem ladder · 6 Myth list · 7 Audience journey"],
          ["Posts feel shapeless", "8 Problem-solution · 9 Before-after · 10 Listicle with verdict · 11 Tested for X days"],
          ["Nothing compounds", "12 Series ladder · 13 Pillar-to-post · 14 Big piece, small pieces · 15 Evergreen-plus-timely"],
        ],
      },
      { type: "heading", text: "Mix frameworks", id: "mix" },
      { type: "subheading", text: "1. Help-Hub-Hero" },
      {
        type: "paragraph",
        text: "Help: searchable answers people need regularly. Hub: recurring series your audience returns for. Hero: occasional big pieces that reach new people. Most weeks are Help and Hub; Hero is a few times a quarter.",
      },
      { type: "subheading", text: "2. Educate-Entertain-Engage (3E)" },
      {
        type: "paragraph",
        text: "Balance teaching, entertaining and inviting participation. A finance educator might post two explainers, one relatable skit and one poll a week.",
      },
      { type: "subheading", text: "3. 70/20/10" },
      {
        type: "paragraph",
        text: "70% proven formats, 20% variations, 10% experiments. The percentages are a guide, not a rule; the point is to keep testing without abandoning what works.",
      },
      { type: "heading", text: "Idea frameworks", id: "ideas" },
      { type: "subheading", text: "4. Question bank" },
      {
        type: "paragraph",
        text: "Keep a running list of every question your audience asks, tagged by pillar. Each question is a potential post. See how to find content gaps.",
      },
      { type: "subheading", text: "5. Problem ladder" },
      {
        type: "paragraph",
        text: "List a problem, then the smaller problems beneath it. \"Can't save money\" becomes \"don't know where money goes\", \"no budget\", \"impulse buying\", \"no emergency fund\": four posts.",
      },
      { type: "subheading", text: "6. Myth list" },
      {
        type: "paragraph",
        text: "List common beliefs in your niche that are wrong or oversimplified. Each myth is a post, with evidence.",
      },
      { type: "subheading", text: "7. Audience journey" },
      {
        type: "paragraph",
        text: "Map what your audience needs at each stage: beginner, intermediate, advanced. Plan content for each stage so newcomers and regulars both have something.",
      },
      {
        type: "paragraph",
        text: "Idea sources: how to find content gaps and creator audience research.",
        links: [
          { text: "how to find content gaps", href: "/blog/how-to-find-content-gaps" },
          { text: "creator audience research", href: "/blog/creator-audience-research" },
        ],
      },
      { type: "heading", text: "Structure frameworks", id: "structure" },
      { type: "subheading", text: "8. Problem-solution" },
      {
        type: "paragraph",
        text: "Name the problem, show why it matters, give the solution, show it working.",
      },
      { type: "subheading", text: "9. Before-after" },
      {
        type: "paragraph",
        text: "Show the before, the process and the after. Honest before-afters (same lighting, realistic time frame) build trust.",
      },
      { type: "subheading", text: "10. Listicle with verdict" },
      {
        type: "paragraph",
        text: "\"5 budget phones under ₹20,000\" is common; \"5 phones, and the one I'd buy\" is useful. Always end with a clear verdict.",
      },
      { type: "subheading", text: "11. Tested for X days" },
      {
        type: "paragraph",
        text: "Use something for a set period and report honestly. Strong for reviews and self-improvement niches.",
      },
      { type: "heading", text: "Scaling frameworks", id: "scaling" },
      { type: "subheading", text: "12. Series ladder" },
      {
        type: "paragraph",
        text: "Turn a successful post into a numbered series, then a named recurring format, then a playlist or highlight.",
      },
      { type: "subheading", text: "13. Pillar-to-post" },
      {
        type: "paragraph",
        text: "Break each pillar into subtopics, then subtopics into specific posts. One pillar can yield dozens of ideas.",
      },
      { type: "subheading", text: "14. Big piece, small pieces" },
      {
        type: "paragraph",
        text: "Make one substantial piece (a long video, a guide, a live session) and cut it into short pieces. See content repurposing for creators.",
      },
      { type: "subheading", text: "15. Evergreen-plus-timely" },
      {
        type: "paragraph",
        text: "Pair each timely post (a trend, news, a festival) with an evergreen piece it can lead viewers to. See trend vs evergreen content.",
      },
      {
        type: "paragraph",
        text: "Related: content repurposing for creators and trend vs evergreen content.",
        links: [
          { text: "content repurposing for creators", href: "/blog/content-repurposing-for-creators" },
          { text: "trend vs evergreen content", href: "/blog/trend-vs-evergreen-content-creators" },
        ],
      },
      { type: "heading", text: "A weekly plan using three frameworks", id: "example" },
      {
        type: "template",
        label: "Illustrative week: Kannada fitness creator, 4 posts",
        text: "Mix (Help-Hub-Hero): 2 Help, 2 Hub\nIdeas (Question bank): top questions this week: \"workouts for back pain\", \"protein on a vegetarian diet\"\nStructure:\n• Mon (Hub): \"No-Equipment Monday\" follow-along (series)\n• Wed (Help): \"3 gentle moves for lower back stiffness\" (problem-solution; not medical advice)\n• Fri (Help): \"Vegetarian protein: 5 foods, one verdict\" (listicle with verdict)\n• Sun (Hub): \"Your questions\" live clip (engage)",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Using a framework for its own sake instead of fixing a problem.",
          "Too many frameworks at once.",
          "Structure frameworks that make every post feel identical.",
          "Ignoring pillars when applying frameworks.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Frameworks save thinking time. Diagnose your planning problem, pick two or three frameworks that fix it, apply them within your pillars and drop any framework that stops helping.",
      },
    ],
    faqs: [
      {
        question: "What is a content framework for creators?",
        answer:
          "A repeatable planning system that helps decide what to publish, how to generate ideas, how to structure pieces or how to turn one idea into many.",
      },
      {
        question: "What is the Help-Hub-Hero framework?",
        answer:
          "A content mix model: Help content answers regular searches, Hub content is recurring series for your audience, and Hero content is occasional big pieces that reach new people.",
      },
      {
        question: "How many content frameworks should a creator use?",
        answer:
          "Two or three that solve your current planning problems. Too many make planning slower, not faster.",
      },
    ],
  },
  {
    slug: "creator-content-workflow",
    category: "Creator Resources",
    title: "Creator Content Workflow: From Idea to Published Post",
    seoTitle: "Creator Content Workflow: From Idea to Published Post",
    excerpt:
      "A stage-by-stage content workflow for creators across formats: capturing ideas, selecting and briefing, scripting, production, editing, quality checks, publishing and post-publish steps, with owners, tools and a checklist for solo creators and small teams.",
    metaDescription:
      "A content workflow for creators: idea capture, selection, scripting, production, editing, quality checks, publishing and post-publish steps, with a checklist and team roles.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    updatedAt: "2026-09-29",
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["creator content workflow", "content production workflow", "content creation process", "idea to publish", "content workflow template", "creator production process", "creator content production workflow", "brief to published"],
    related: ["creator-content-strategy", "content-batching-for-creators", "ai-content-workflow-for-creators"],
    body: [
      {
        type: "paragraph",
        text: "A content workflow is the path every piece travels from \"that could be a good post\" to \"it's live, captioned, shared and logged\". When the path isn't defined, pieces stall between stages: a script waiting for a shoot day that never comes, an edit waiting for a thumbnail, a video posted without the link that was the whole point.",
      },
      {
        type: "paragraph",
        text: "This guide maps the workflow stage by stage for any format. For scheduling production into weekly blocks, see content batching for creators; for where AI fits into the workflow, see AI content workflow for creators; for brand deliverables, see creator workflow.",
      },
      {
        type: "paragraph",
        text: "Related: content batching for creators, AI content workflow for creators and creator workflow for brand deals.",
        links: [
          { text: "content batching for creators", href: "/blog/content-batching-for-creators" },
          { text: "AI content workflow for creators", href: "/blog/ai-content-workflow-for-creators" },
          { text: "creator workflow for brand deals", href: "/blog/creator-workflow" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator content workflow has eight stages: capture ideas in one place, select and brief the ideas worth making, script or outline, produce (shoot or record), edit, run a quality check (facts, captions, disclosure, links), publish with platform-specific details, and complete post-publish steps (distribution, replies, logging results). Give each stage a clear \"done\" definition, a place in your tools and, if you have help, an owner. Track pieces through the stages on a simple board.",
      },
      { type: "heading", text: "The eight stages", id: "stages" },
      {
        type: "table",
        headers: ["Stage", "Done when", "Tools (examples)"],
        rows: [
          ["1. Capture", "Idea is in the idea bank with a pillar tag", "Notes app, spreadsheet, Notion"],
          ["2. Select and brief", "Idea chosen; one-line angle, format, target date", "Content board"],
          ["3. Script or outline", "Hook, key points and CTA written; visuals noted", "Docs"],
          ["4. Produce", "Footage or audio recorded; b-roll captured", "Phone, camera, mic"],
          ["5. Edit", "Cut, captions, music (licensed), graphics done", "Editing app"],
          ["6. Quality check", "Facts, spelling, captions, disclosure, links verified", "Checklist"],
          ["7. Publish", "Posted with title, caption, tags, cover, settings", "Platform or scheduler"],
          ["8. Post-publish", "Shared in Stories/channels/newsletter; replies done; logged", "Tracker"],
        ],
      },
      { type: "heading", text: "A content board", id: "board" },
      {
        type: "template",
        label: "Content board columns",
        text: "Ideas → Selected → Scripted → Filmed → Edited → Checked → Scheduled → Live → Logged\nEach card: title · pillar · format · platform · target date · owner · links",
      },
      {
        type: "paragraph",
        text: "A board shows bottlenecks at a glance: ten cards stuck in \"Filmed\" means editing is your constraint.",
      },
      { type: "heading", text: "Stage notes", id: "notes" },
      { type: "subheading", text: "Capture" },
      {
        type: "paragraph",
        text: "Capture everything in one place, tagged by pillar. Voice notes, screenshots of comments and search suggestions all count. How to find content gaps and creator audience research feed the idea bank.",
      },
      { type: "subheading", text: "Select and brief" },
      {
        type: "paragraph",
        text: "Choose ideas against your strategy: which pillar, which goal, which format. A one-line brief (\"Reel, myth-buster, pillar 2, for Friday\") saves time later.",
      },
      { type: "subheading", text: "Script or outline" },
      {
        type: "paragraph",
        text: "Short-form needs a hook, one point, proof and payoff; long-form needs a promise and structure. How to write video scripts covers both.",
      },
      {
        type: "paragraph",
        text: "Scripts: how to write video scripts.",
        links: [{ text: "how to write video scripts", href: "/blog/how-to-write-video-scripts" }],
      },
      { type: "subheading", text: "Quality check" },
      {
        type: "template",
        label: "Pre-publish checklist",
        text: "☐ Facts and numbers verified\n☐ Captions proofread; on-screen text readable\n☐ Music and assets licensed for this use\n☐ Disclosure added if sponsored, gifted or affiliate\n☐ Links, codes and tags tested\n☐ Title, caption and cover match the search phrase\n☐ AI-generated or altered visuals labelled where required",
      },
      {
        type: "paragraph",
        text: "Disclosure: creator disclosure guide and AI disclosure for creators.",
        links: [
          { text: "creator disclosure guide", href: "/blog/creator-disclosure-guide" },
          { text: "AI disclosure for creators", href: "/blog/ai-disclosure-creators" },
        ],
      },
      { type: "subheading", text: "Post-publish" },
      {
        type: "paragraph",
        text: "Share to Stories or channels, add to your newsletter if relevant, reply to early comments, pin a useful comment, and log the piece for your monthly review.",
      },
      { type: "heading", text: "Solo creator vs small team", id: "team" },
      {
        type: "table",
        headers: ["Stage", "Solo", "With an editor", "With editor + VA"],
        rows: [
          ["Capture, select", "You", "You", "You"],
          ["Script", "You", "You", "You"],
          ["Produce", "You", "You", "You"],
          ["Edit", "You", "Editor", "Editor"],
          ["Quality check", "You", "You", "VA first pass, you final"],
          ["Publish", "You", "You", "VA schedules"],
          ["Post-publish", "You", "You", "VA logs; you reply"],
        ],
      },
      {
        type: "paragraph",
        text: "Creator team building covers when to add help.",
      },
      {
        type: "paragraph",
        text: "Team: creator team building.",
        links: [{ text: "creator team building", href: "/blog/creator-team-building" }],
      },
      { type: "heading", text: "Briefs and handoffs in a team workflow", id: "handoffs" },
      {
        type: "paragraph",
        text: "When more than one person works on a piece, the workflow runs from brief to published content, and each stage needs a clear handoff: the script and shot list before a shoot, an organised footage folder before an edit, a checklist before review. How to structure the team around these stages, and plan its capacity, is covered in creator production team; how to review drafts quickly without lowering standards is in creator content quality control.",
        links: [
          { text: "creator production team", href: "/blog/creator-production-team" },
          { text: "creator content quality control", href: "/blog/creator-content-quality-control" },
        ],
      },
      { type: "heading", text: "Where time leaks", id: "leaks" },
      {
        type: "list",
        items: [
          "Deciding what to make every day instead of weekly.",
          "Filming without a script, then re-shooting.",
          "Editing without templates for captions and thumbnails.",
          "Publishing without a checklist, then fixing mistakes live.",
          "Skipping post-publish steps, so content reaches fewer people.",
        ],
      },
      { type: "heading", text: "Worked example: fixing a bottleneck", id: "example" },
      {
        type: "template",
        label: "Illustrative: a YouTube education creator with a part-time editor",
        text: "Board snapshot (Friday):\nIdeas 40 · Selected 6 · Scripted 5 · Filmed 5 · Edited 1 · Checked 1 · Scheduled 0 · Live 1\n\nDiagnosis: editing is the bottleneck (5 filmed, 1 edited)\nFixes:\n• Editor gets a template project and a written style guide\n• Creator reviews edits within 24 hours (was 4 days)\n• Thumbnails and titles prepared while editing happens, not after\nTwo weeks later: Edited 4 · Checked 3 · Scheduled 3; publishing back on schedule",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "No single idea bank.",
          "Stages without a clear \"done\" definition.",
          "Quality checks that happen after posting.",
          "Treating publishing as the last step.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A content workflow turns ideas into published, distributed and logged content without stalls. Define eight stages, give each a \"done\" state and a tool, track pieces on a board, and fix the stage where cards pile up.",
      },
    ],
    faqs: [
      {
        question: "What is a content creation workflow?",
        answer:
          "The defined stages every piece of content goes through, from idea capture to selection, scripting, production, editing, quality checks, publishing and post-publish distribution and logging.",
      },
      {
        question: "How is a content workflow different from content batching?",
        answer:
          "The workflow defines the stages a piece moves through. Batching is a way of scheduling those stages, grouping similar tasks into dedicated blocks.",
      },
      {
        question: "What should be in a pre-publish checklist?",
        answer:
          "Verified facts, proofread captions, licensed music and assets, disclosure where needed, tested links and codes, search-friendly titles and captions, and AI labels where required.",
      },
    ],
  },
  {
    slug: "creator-content-distribution",
    category: "Creator Resources",
    title: "Creator Content Distribution: How to Get More Reach From Every Post",
    seoTitle: "Creator Content Distribution: Get More Reach From Every Post",
    excerpt:
      "How creators distribute each piece of content beyond hitting publish: owned channels, adapted cross-posting, Stories and broadcast channels, communities, collaborations, search, and promoting your content without spamming, with a distribution checklist.",
    metaDescription:
      "How creators distribute content: owned channels, adapted cross-posting, Stories and channels, communities, collaborations, search and promotion without spam.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "14 min read",
    tags: ["creator content distribution", "content distribution strategy", "promote your content", "get more reach", "cross-posting", "content promotion without spamming"],
    related: ["creator-content-strategy", "content-repurposing-for-creators", "creator-cross-promotion"],
    body: [
      {
        type: "paragraph",
        text: "Publishing puts content on one platform, in front of whoever the algorithm chooses that day. Distribution is everything you do to make sure the right people actually see it: your own channels, adapted versions on other platforms, communities, collaborations and search. Many creators spend 90% of their effort making content and almost none distributing it, which is why good work often goes unseen.",
      },
      {
        type: "paragraph",
        text: "This guide covers distribution and promotion. For turning one piece into many formats, see content repurposing for creators; for growing together with other creators, see creator cross-promotion.",
        links: [
          { text: "content repurposing for creators", href: "/blog/content-repurposing-for-creators" },
          { text: "creator cross-promotion", href: "/blog/creator-cross-promotion" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Content distribution means actively getting each piece in front of the right people after you publish. Use owned channels (email newsletter, WhatsApp or broadcast channel, website), adapted cross-posting to other platforms (not identical uploads), Stories and pinned comments that point to the piece, relevant communities where sharing is welcome, collaborations and features, and search optimisation so it keeps being found. Promote without spamming by adding context, sharing only where it genuinely helps, and never dropping links into unrelated conversations.",
      },
      { type: "heading", text: "Distribution channels", id: "channels" },
      {
        type: "table",
        headers: ["Channel", "Reach type", "Best for"],
        rows: [
          ["Email newsletter", "Owned, direct", "Important pieces, evergreen guides"],
          ["WhatsApp or broadcast channel", "Owned-ish, direct", "Timely pieces, launches"],
          ["Stories and community posts", "Existing followers", "Sending followers to new posts"],
          ["Adapted cross-posts", "New audiences on other platforms", "Pieces that travel well"],
          ["Communities and forums", "Interest groups", "Genuinely helpful answers"],
          ["Collaborations and features", "Partner audiences", "Relevant, reciprocal"],
          ["Search (YouTube, Google, social)", "Ongoing discovery", "Evergreen answers"],
        ],
      },
      {
        type: "paragraph",
        text: "Owned channels: creator audience ownership and creator newsletter in India.",
        links: [
          { text: "creator audience ownership", href: "/blog/creator-audience-ownership" },
          { text: "creator newsletter in India", href: "/blog/creator-newsletter-india" },
        ],
      },
      { type: "heading", text: "A distribution checklist per piece", id: "checklist" },
      {
        type: "template",
        label: "After publishing",
        text: "☐ Story or community post pointing to it (with a reason to watch)\n☐ Pinned comment with context or the next step\n☐ Newsletter mention if it's useful beyond this week\n☐ Broadcast or WhatsApp channel message if timely\n☐ Adapted version for 1–2 other platforms (not a watermarked repost)\n☐ Share in a relevant community only if it answers a real question there\n☐ Title, caption and on-screen text checked for search\n☐ Add to a playlist, highlight or series page",
      },
      { type: "heading", text: "Cross-posting: adapt, don't copy", id: "cross-posting" },
      {
        type: "paragraph",
        text: "Uploading the identical file everywhere often underperforms and can be penalised: Instagram, for example, says it's less likely to recommend content with other apps' watermarks. Adapt captions, covers, length and audio for each platform. TikTok vs Instagram Reels covers the adaptation checklist.",
        links: [{ text: "TikTok vs Instagram Reels", href: "/blog/tiktok-vs-instagram-reels" }],
      },
      { type: "heading", text: "Promotion without spamming", id: "promotion" },
      {
        type: "table",
        headers: ["Spammy", "Helpful"],
        rows: [
          ["Dropping a link in unrelated comment threads", "Answering a question fully, then linking for detail"],
          ["Tagging brands and big creators to get noticed", "Tagging people genuinely featured"],
          ["Posting the same message in ten groups", "Sharing in one or two communities where it fits the rules"],
          ["DMing followers \"watch my new video\"", "Telling your newsletter why this piece is worth their time"],
          ["Asking for likes and shares in every post", "Giving people a reason to share (useful, funny, true)"],
        ],
      },
      {
        type: "paragraph",
        text: "A simple test: would the community be glad you shared it even if you weren't the author?",
      },
      { type: "heading", text: "Timing and sequencing", id: "timing" },
      {
        type: "list",
        items: [
          "Post when your audience is active (check your insights), then distribute over the following days, not all in the first hour.",
          "Stagger cross-platform versions so each gets attention.",
          "Resurface evergreen pieces months later in Stories, newsletters and playlists.",
        ],
      },
      { type: "heading", text: "Distribution through collaborations", id: "collabs" },
      {
        type: "paragraph",
        text: "Collab posts, guest appearances, newsletter swaps and featured channels put your content in front of adjacent audiences. Keep them relevant and reciprocal. Instagram Collab posts for creators and creator cross-promotion explain the mechanics.",
        links: [{ text: "Instagram Collab posts for creators", href: "/blog/instagram-collab-posts-for-creators" }],
      },
      { type: "heading", text: "Distribution through search", id: "search" },
      {
        type: "paragraph",
        text: "Search keeps content working long after posting. Use the words people search in titles, captions, spoken audio and on-screen text. Creator SEO and social search for creators cover the principles.",
      },
      {
        type: "paragraph",
        text: "Search: creator SEO and social search for creators.",
        links: [
          { text: "creator SEO", href: "/blog/creator-seo" },
          { text: "social search for creators", href: "/blog/social-search-for-creators" },
        ],
      },
      { type: "heading", text: "Measure distribution", id: "measure" },
      {
        type: "paragraph",
        text: "Track where views and followers come from: traffic sources (search, home, external, shares), link clicks from newsletters and channels, and views from cross-posted versions. Double down on channels that bring engaged viewers.",
      },
      { type: "heading", text: "Examples by creator type", id: "examples" },
      {
        type: "table",
        headers: ["Creator", "Distribution habits (illustrative)"],
        rows: [
          ["YouTube educator", "Shorts cut-downs, newsletter summary, pinned comment with chapters, search-first titles"],
          ["Instagram food creator", "Story teaser, WhatsApp channel message, carousel recipe version, Collab with a local restaurant"],
          ["LinkedIn founder", "Post, then a newsletter essay expanding it, podcast guest mention, team reshares where genuinely relevant"],
          ["Regional-language creator", "Same video with regional and Hindi captions, community group share, festival-timed resurfacing"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Treating \"posted\" as \"distributed\".",
          "Identical, watermarked cross-posts.",
          "Link-dropping in unrelated communities.",
          "All promotion in the first hour, nothing afterwards.",
          "Never resurfacing evergreen content.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Distribution multiplies the value of content you've already made. Use owned channels, adapt for other platforms, promote where it genuinely helps, collaborate with adjacent creators, optimise for search, and resurface evergreen work. Give distribution a place in your workflow, not an afterthought.",
      },
    ],
    faqs: [
      {
        question: "What is content distribution for creators?",
        answer:
          "Actively getting each piece in front of the right people after publishing, through owned channels, adapted cross-posts, Stories, communities, collaborations and search.",
      },
      {
        question: "How can creators promote content without spamming?",
        answer:
          "Share only where it genuinely helps, add context, answer questions fully before linking, follow community rules and give people a reason to share rather than asking repeatedly.",
      },
      {
        question: "Should creators post the same video on every platform?",
        answer:
          "Adapt it instead: change captions, covers, length and audio, and remove other apps' watermarks, since platforms may not recommend reposted or watermarked content.",
      },
    ],
  },
];
