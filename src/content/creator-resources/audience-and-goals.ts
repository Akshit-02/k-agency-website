import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_FACTS_REVIEWED, CREATOR_LAYER_7_PUBLISHED as PUBLISHED } from "@/content/creator-resources/shared";

/**
 * Creator growth: goals, ideal audience and audience research (650–699
 * layer). 650, 651, 653, 654 and 657 were consolidated into existing growth
 * and audience guides that already owned those intents.
 */
export const audienceAndGoalsPosts: BlogPost[] = [
  {
    slug: "creator-goals",
    category: "Creator Resources",
    title: "How to Set Creator Goals That Actually Improve Your Business",
    seoTitle: "How to Set Creator Goals That Improve Your Business",
    excerpt:
      "How creators set goals that lead somewhere: separating outcome, input and learning goals, choosing a few that match your business stage, making them measurable without chasing vanity numbers, reviewing them monthly and adjusting honestly.",
    metaDescription:
      "How creators set useful goals: outcome, input and learning goals, choosing goals by business stage, measurable targets without vanity metrics, and monthly reviews.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["creator goals", "content creator goals", "set goals as a creator", "creator business goals", "social media goals for creators", "creator OKRs"],
    related: ["creator-growth-strategy", "follower-growth-vs-audience-growth", "creator-business-plan"],
    body: [
      {
        type: "paragraph",
        text: "\"Hit 100K followers this year\" is the most common creator goal and one of the least useful. It depends on algorithms you don't control, tells you nothing about what to do on Monday, and can be reached in ways that don't help your business at all. Good creator goals do the opposite: they point at an outcome that matters, and they come with the weekly actions that make it likely.",
      },
      {
        type: "paragraph",
        text: "This guide covers setting goals for a creator business. For turning goals into a plan, see the creator business plan; for the metrics you'll track against them, see follower growth vs audience growth.",
        links: [
          { text: "creator business plan", href: "/blog/creator-business-plan" },
          { text: "follower growth vs audience growth", href: "/blog/follower-growth-vs-audience-growth" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Useful creator goals combine three types: an outcome goal that matters to your business (for example, a monthly income target, a number of email subscribers or a set of repeat brand clients), input goals you fully control (posts per week, pitches sent, newsletter issues), and a learning goal (a format or skill to test). Choose goals that fit your stage, make each measurable with a date, avoid goals that only track vanity numbers, review monthly and change the inputs, not the ambition, when results lag.",
      },
      { type: "heading", text: "Why follower goals mislead", id: "why-not-followers" },
      {
        type: "table",
        headers: ["Follower-only goal", "What it misses", "Better alternative"],
        rows: [
          ["\"Reach 50K followers\"", "Whether those followers watch, trust or buy", "\"Grow returning viewers and email subscribers\""],
          ["\"Go viral\"", "Viral reach often doesn't convert", "\"Five posts a month above my median follows per 1,000 views\""],
          ["\"Get more likes\"", "Likes are cheap signals", "\"Increase saves and shares per 1,000 views\""],
        ],
      },
      {
        type: "paragraph",
        text: "Followers still matter for some brand conversations. They just shouldn't be the only goal.",
      },
      { type: "heading", text: "The three types of goals", id: "types" },
      {
        type: "table",
        headers: ["Type", "You control it?", "Example (illustrative)"],
        rows: [
          ["Outcome", "Partly", "₹75,000 average monthly income by March; 2,000 email subscribers by year-end"],
          ["Input", "Fully", "3 Reels + 1 long-form a week; 5 brand pitches a week; 2 newsletter issues a month"],
          ["Learning", "Fully", "Test long-form YouTube for 8 weeks and decide whether to continue"],
        ],
      },
      {
        type: "paragraph",
        text: "Outcome goals set direction. Input goals decide your week. Learning goals stop you repeating the same plan forever.",
      },
      { type: "heading", text: "Goals by stage", id: "by-stage" },
      {
        type: "table",
        headers: ["Stage", "Focus", "Example goals"],
        rows: [
          ["Starting out", "Find a format and audience", "Post consistently for 90 days; find 2 formats with above-median retention"],
          ["Growing", "Build audience depth", "Grow returning viewers; start an email list; first paid collaborations"],
          ["Monetizing", "Turn attention into income", "Monthly income target; repeat brand clients; one digital product"],
          ["Running a business", "Stability and efficiency", "Diversify income; raise effective hourly rate; hire help"],
        ],
      },
      {
        type: "paragraph",
        text: "How to grow as a creator from zero covers the first stage in detail, and creator revenue diversification the last.",
      },
      {
        type: "paragraph",
        text: "Stages: how to grow as a creator from zero and creator revenue diversification.",
        links: [
          { text: "how to grow as a creator from zero", href: "/blog/how-to-grow-as-a-creator-from-zero" },
          { text: "creator revenue diversification", href: "/blog/creator-revenue-diversification" },
        ],
      },
      { type: "heading", text: "Make goals measurable", id: "measurable" },
      {
        type: "template",
        label: "Goal template",
        text: "Outcome: [what] from [baseline] to [target] by [date]\nWhy it matters: [business reason]\nInputs I'll do every week: [2–3 actions]\nLeading indicators to watch: [metrics that move before the outcome]\nReview: first working day of each month",
      },
      {
        type: "template",
        label: "Example (illustrative)",
        text: "Outcome: email subscribers from 300 to 1,500 by 31 March\nWhy: launches and brand pitches need an audience I can reach directly\nInputs: one lead magnet mention in 3 posts a week; weekly newsletter; one collab a month\nLeading indicators: landing page conversion; sign-ups per post\nReview: 1st of each month",
      },
      { type: "heading", text: "How many goals?", id: "how-many" },
      {
        type: "paragraph",
        text: "One or two outcome goals, three to five input goals and one learning goal is plenty for a solo creator. More than that and nothing gets full attention.",
      },
      { type: "heading", text: "Connect goals to your content", id: "content" },
      {
        type: "paragraph",
        text: "Every goal should change what you make. An email goal means lead magnets and calls to action in your content; a brand-income goal means portfolio-quality content in categories brands buy; a learning goal means reserving slots in your content calendar for the experiment. Creator content strategy covers planning content around goals.",
      },
      {
        type: "paragraph",
        text: "Planning: creator content strategy.",
        links: [{ text: "creator content strategy", href: "/blog/creator-content-strategy" }],
      },
      { type: "heading", text: "Monthly review", id: "review" },
      {
        type: "template",
        label: "Monthly goal review (30 minutes)",
        text: "1. Outcome progress vs target: on track, behind, ahead?\n2. Inputs: did I do what I committed to?\n3. Leading indicators: moving in the right direction?\n4. If behind with inputs done: change the input (not the goal)\n5. If behind with inputs missed: fix capacity or reduce inputs honestly\n6. Learning goal: what did I learn; continue or stop?",
      },
      {
        type: "paragraph",
        text: "Track the numbers in your creator analytics dashboard.",
        links: [{ text: "creator analytics dashboard", href: "/blog/creator-analytics-dashboard" }],
      },
      { type: "heading", text: "Examples by creator type", id: "examples" },
      {
        type: "table",
        headers: ["Creator", "Outcome goal", "Input goals"],
        rows: [
          ["Regional-language food creator", "First 3 paid brand collaborations this quarter", "3 Reels a week; media kit updated; 5 pitches a week"],
          ["Educator on YouTube", "500 course buyers this year", "1 long-form a week; weekly newsletter; 2 webinars a quarter"],
          ["UGC creator", "₹60,000 monthly UGC income", "10 brand outreach emails a week; 2 portfolio pieces a month"],
          ["Founder building an audience", "20 qualified inbound leads a month from content", "3 LinkedIn posts a week; 1 podcast guest spot a month"],
        ],
      },
      {
        type: "paragraph",
        text: "All figures are illustrative; set targets from your own baseline.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Only follower or view goals.",
          "Goals with no weekly inputs attached.",
          "Too many goals at once.",
          "Changing the goal every time a month is slow.",
          "Never checking whether the goal still fits your business.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Good creator goals connect a business outcome to weekly actions you control, with a learning goal that keeps you improving. Choose a few, make them measurable, review monthly and adjust the inputs before you abandon the ambition.",
      },
    ],
    faqs: [
      {
        question: "What are good goals for a content creator?",
        answer:
          "Goals tied to business outcomes, such as income, email subscribers or repeat brand clients, supported by input goals you control, such as posting cadence and pitches, and a learning goal for testing something new.",
      },
      {
        question: "Should creators set follower goals?",
        answer:
          "Followers can be one measure, but on their own they're a weak goal. Pair them with audience-quality measures such as returning viewers, saves, shares and email sign-ups.",
      },
      {
        question: "How often should creators review goals?",
        answer:
          "Monthly for progress and inputs, and quarterly for whether the goals themselves still fit your business.",
      },
    ],
  },
  {
    slug: "identify-ideal-audience-creator",
    category: "Creator Resources",
    title: "How to Identify Your Ideal Audience as a Creator",
    seoTitle: "How to Identify Your Ideal Audience as a Creator",
    excerpt:
      "How to define the specific people your content is for: a practical ideal-audience profile, the questions that sharpen it, how to check it against real data, when to have more than one audience, and how the profile guides content, brand deals and products.",
    metaDescription:
      "How creators define an ideal audience: a profile template, sharpening questions, checking it against analytics, multiple audiences and using it for decisions.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["ideal audience creator", "target audience for creators", "define your audience", "audience persona creator", "who is my audience", "creator target market"],
    related: ["creator-audience-research", "creator-niche-selection", "creator-positioning"],
    body: [
      {
        type: "paragraph",
        text: "\"My content is for everyone\" usually means it's for no one in particular. The creators who grow steadily can describe their ideal viewer in a sentence: who they are, what they're trying to do, what gets in their way and why they'd come back. That clarity makes every decision easier, from topics and hooks to which brands to work with.",
      },
      {
        type: "paragraph",
        text: "This guide helps you define that person. To collect evidence about what your audience actually wants, see creator audience research; for choosing a niche in the first place, see creator niche selection.",
        links: [
          { text: "creator audience research", href: "/blog/creator-audience-research" },
          { text: "creator niche selection", href: "/blog/creator-niche-selection" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Your ideal audience is the specific group of people your content is designed to help or entertain most. Define it by situation and goal (what they're trying to do), problem (what's in the way), context (life stage, location, language, budget), and the reason they'd choose you over others. Write it as a one-sentence profile, check it against your analytics and comments, and use it to decide topics, formats, language, collaborations, brand partners and products.",
      },
      { type: "heading", text: "What an ideal audience profile includes", id: "profile" },
      {
        type: "table",
        headers: ["Element", "Question", "Example (illustrative)"],
        rows: [
          ["Situation", "What stage of life or work are they in?", "First job in a new city"],
          ["Goal", "What are they trying to achieve?", "Save money and start investing"],
          ["Problem", "What's stopping them?", "Confusing advice, fear of mistakes"],
          ["Context", "Location, language, budget, time", "Tier 2 city, Hindi-first, ₹25–40K salary, little free time"],
          ["Where they are", "Platforms and formats they use", "Reels on the commute, YouTube at weekends"],
          ["Why you", "What makes your content right for them", "Plain Hindi, real numbers, no product pushing"],
        ],
      },
      {
        type: "template",
        label: "Ideal audience statement",
        text: "My content is for [situation] who want to [goal] but struggle with [problem]. They [context]. They choose me because [why you].\n\nExample (illustrative):\n\"My content is for young professionals in their first job who want to start saving and investing but find advice confusing. They mostly watch in Hindi on their phones, earn modest salaries and want plain answers. They choose me because I explain with real numbers and don't sell products.\"",
      },
      { type: "heading", text: "Demographics are the least useful part", id: "beyond-demographics" },
      {
        type: "paragraph",
        text: "Age, gender and city help, especially for brands, but they rarely explain why someone watches. Two 25-year-olds in Pune can want completely different things. Situation, goal and problem predict what content will resonate; demographics mostly help with language, budget and brand fit.",
      },
      { type: "heading", text: "Sharpen it with these questions", id: "questions" },
      {
        type: "list",
        items: [
          "What did they search for right before finding you?",
          "What would they happily pay for, if you offered it?",
          "What do they already follow, and what's missing from it?",
          "What words do they use to describe their problem?",
          "What would make them unfollow?",
        ],
      },
      { type: "heading", text: "Check it against real data", id: "check" },
      {
        type: "table",
        headers: ["Source", "What it tells you"],
        rows: [
          ["Platform audience insights", "Age, location, gender, active times"],
          ["Top 10 posts by follows per 1,000 views", "Which content attracts new followers who stay"],
          ["Comments and DMs", "Their words, questions and situations"],
          ["Email replies and polls", "Deeper motivations"],
          ["Who buys from you or your links", "Budget and intent"],
        ],
      },
      {
        type: "paragraph",
        text: "If the data shows a different audience than your profile, don't ignore it. Either adapt the profile to who's really watching, or change your content to attract the audience you want. Creator audience research explains how to gather this evidence.",
      },
      {
        type: "paragraph",
        text: "Research: creator audience research.",
        links: [{ text: "creator audience research", href: "/blog/creator-audience-research" }],
      },
      { type: "heading", text: "One audience or several?", id: "multiple" },
      {
        type: "paragraph",
        text: "Most creators have a primary audience and one or two secondary ones: a fitness creator might serve beginners primarily and gym regulars secondarily. That's fine as long as each piece of content is clearly for one of them. Trouble starts when a post tries to serve everyone and ends up vague.",
      },
      { type: "heading", text: "How the profile guides decisions", id: "uses" },
      {
        type: "table",
        headers: ["Decision", "How the profile helps"],
        rows: [
          ["Topics", "Choose problems your audience actually has"],
          ["Language and tone", "Match how they speak and search"],
          ["Formats", "Fit their time and platform habits"],
          ["Collaborations", "Partner with creators your audience also follows"],
          ["Brand deals", "Say yes to brands your audience needs and can afford"],
          ["Products", "Build what solves their recurring problem"],
        ],
      },
      {
        type: "paragraph",
        text: "Creator brand fit and creator positioning show how the profile carries into brand work and differentiation.",
      },
      {
        type: "paragraph",
        text: "Brand work: creator brand fit and creator positioning.",
        links: [
          { text: "creator brand fit", href: "/blog/creator-brand-fit" },
          { text: "creator positioning", href: "/blog/creator-positioning" },
        ],
      },
      { type: "heading", text: "Examples by creator type", id: "examples" },
      {
        type: "table",
        headers: ["Creator", "Ideal audience (illustrative)"],
        rows: [
          ["Tamil home cook", "Working couples in Chennai and abroad who want 30-minute traditional dinners"],
          ["UGC creator", "D2C skincare brands that need authentic demo videos for ads (the audience here is brands)"],
          ["LinkedIn founder", "Early-stage SaaS founders in India figuring out their first sales hires"],
          ["YouTube educator", "Commerce students preparing for CA Foundation who want concept clarity"],
          ["Travel creator", "Budget travellers from North India planning 3–5 day trips"],
        ],
      },
      { type: "heading", text: "For brands: why a creator's ideal audience matters", id: "for-brands" },
      {
        type: "paragraph",
        text: "For brands, a creator who can describe their audience precisely is easier to evaluate and usually delivers more relevant results than one who only shares follower counts. Ask creators who their content is for and check it against their audience insights. Kudozz's guide on choosing the right influencer for your brand covers audience fit from the brand side.",
        links: [{ text: "choosing the right influencer", href: "/blog/how-to-choose-the-right-influencer-for-your-brand" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Defining the audience only by age and gender.",
          "A profile that describes who you wish watched, not who does.",
          "Trying to serve every audience in every post.",
          "Never updating the profile as your audience changes.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "An ideal audience profile is a practical tool, not a marketing exercise. Define situation, goal, problem, context and why they'd choose you; check it against real data; and use it to make content, collaboration and business decisions.",
      },
    ],
    faqs: [
      {
        question: "What is an ideal audience for a creator?",
        answer:
          "The specific group of people your content is designed to help or entertain most, defined by their situation, goal, problem, context and why they'd choose you.",
      },
      {
        question: "How do I find my target audience as a creator?",
        answer:
          "Start with a hypothesis profile, then check it against platform audience insights, your best-performing posts, comments, DMs and who buys from you, and adjust.",
      },
      {
        question: "Can a creator have more than one audience?",
        answer:
          "Yes. Most have a primary and one or two secondary audiences. Keep each piece of content clearly aimed at one of them.",
      },
    ],
  },
  {
    slug: "creator-audience-research",
    category: "Creator Resources",
    title: "Creator Audience Research: How to Understand What Your Followers Want",
    seoTitle: "Creator Audience Research: Find Out What Your Followers Want",
    excerpt:
      "Practical audience research methods for creators: mining comments and DMs, polls and question boxes, short surveys, audience interviews, analytics patterns and search data, how to organise what you learn, and how to turn it into content and products.",
    metaDescription:
      "Audience research methods for creators: comments and DMs, polls, surveys, interviews, analytics patterns and search data, organising findings and acting on them.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["creator audience research", "understand your audience", "audience survey creators", "what do my followers want", "audience insights", "creator market research"],
    related: ["identify-ideal-audience-creator", "how-to-find-content-gaps", "creator-content-strategy"],
    body: [
      {
        type: "paragraph",
        text: "Most creators guess what their audience wants and then check the guess with views. Audience research reverses the order: find out what people need, in their own words, then make content for it. It's slower for a week and faster for a year.",
      },
      {
        type: "paragraph",
        text: "This guide covers methods and how to use what you learn. For defining who your audience is, see how to identify your ideal audience; for turning unanswered questions into topics, see how to find content gaps.",
        links: [
          { text: "how to identify your ideal audience", href: "/blog/identify-ideal-audience-creator" },
          { text: "how to find content gaps", href: "/blog/how-to-find-content-gaps" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creator audience research means systematically learning what your audience wants, struggles with and values. Combine what people say (comments, DMs, polls, question boxes, surveys, short interviews) with what they do (analytics on views, retention, saves, shares, clicks and purchases) and what they search for (platform search suggestions and research tools). Record findings in one place, look for repeated themes, and turn each theme into content ideas, series, products or partnership decisions. Repeat monthly in a light form and quarterly in depth.",
      },
      { type: "heading", text: "Say, do and search", id: "three-sources" },
      {
        type: "table",
        headers: ["Source type", "Methods", "Strength", "Weakness"],
        rows: [
          ["What they say", "Comments, DMs, polls, surveys, interviews", "Their words and motivations", "People say one thing, do another"],
          ["What they do", "Analytics, clicks, purchases", "Real behaviour", "Doesn't explain why"],
          ["What they search", "Search suggestions, research tools", "Demand you haven't served", "Needs interpretation"],
        ],
      },
      {
        type: "paragraph",
        text: "Good research uses all three. When they agree, you've found something worth acting on.",
      },
      { type: "heading", text: "Method 1: mine comments and DMs", id: "comments" },
      {
        type: "paragraph",
        text: "Once a month, read comments and DMs from your last 20 posts and copy questions, complaints and requests into a sheet. Tag each by theme. Repeated questions are your strongest signal.",
      },
      {
        type: "template",
        label: "Comment mining sheet",
        text: "Date · Post · Exact words · Type (question/complaint/request/story) · Theme · Count",
      },
      { type: "heading", text: "Method 2: polls and question boxes", id: "polls" },
      {
        type: "paragraph",
        text: "Story polls, community posts and question stickers get quick answers. Ask specific questions: \"Which is harder for you: saving or investing?\" works better than \"What content do you want?\"",
      },
      { type: "heading", text: "Method 3: short surveys", id: "surveys" },
      {
        type: "paragraph",
        text: "A five-question survey shared with your email list or community gives deeper answers. Keep it short, mostly multiple choice, with one open question at the end (\"What's the one thing you're struggling with right now?\"). Ask only for data you need, explain how you'll use answers, and follow applicable data protection rules.",
      },
      {
        type: "template",
        label: "Five-question survey (illustrative)",
        text: "1. Which best describes you? (options by situation)\n2. What are you trying to achieve in the next 3 months? (options)\n3. What's getting in the way? (options)\n4. Which of my formats do you find most useful? (options)\n5. What's the one thing you're struggling with right now? (open)",
      },
      { type: "heading", text: "Method 4: audience interviews", id: "interviews" },
      {
        type: "paragraph",
        text: "Ten 20-minute calls with engaged followers can teach you more than a thousand poll votes. Ask about their situation, what they've tried, what frustrated them and what they'd pay for. Listen for phrases you can use in hooks and titles.",
      },
      { type: "heading", text: "Method 5: analytics patterns", id: "analytics" },
      {
        type: "paragraph",
        text: "Look at your top and bottom posts by follows per 1,000 views, saves and shares, and retention. Which topics, formats and hooks keep appearing at the top? Content performance audit gives a template.",
      },
      {
        type: "paragraph",
        text: "Template: content performance audit.",
        links: [{ text: "content performance audit", href: "/blog/content-performance-audit" }],
      },
      { type: "heading", text: "Method 6: search data", id: "search" },
      {
        type: "paragraph",
        text: "Search suggestions on YouTube, Instagram and Google, and YouTube Studio's research insights, show what people look for, including topics without good answers. YouTube keyword research explains the tools.",
        links: [{ text: "YouTube keyword research", href: "/blog/youtube-keyword-research" }],
      },
      { type: "heading", text: "Organise what you learn", id: "organise" },
      {
        type: "table",
        headers: ["Theme", "Evidence (say / do / search)", "Opportunity", "Action"],
        rows: [
          ["\"Tax filing for freelancers\"", "14 DM questions; saves high on past tax post; search suggestions", "Under-served, recurring", "4-part series before July"],
          ["\"Budget meal prep\"", "Poll winner; low retention on past attempt", "Demand, but format issue", "Retest as carousel"],
        ],
      },
      { type: "heading", text: "Turn research into decisions", id: "decisions" },
      {
        type: "list",
        items: [
          "Content: new series, better hooks using audience words, formats people prefer.",
          "Community: topics for live Q&As and prompts.",
          "Products: recurring problems people would pay to solve.",
          "Brand deals: categories your audience actively asks about.",
        ],
      },
      {
        type: "paragraph",
        text: "Creator content strategy shows how research feeds planning.",
      },
      {
        type: "paragraph",
        text: "Planning: creator content strategy.",
        links: [{ text: "creator content strategy", href: "/blog/creator-content-strategy" }],
      },
      { type: "heading", text: "A research rhythm", id: "rhythm" },
      {
        type: "template",
        label: "Monthly (60 minutes): comment/DM mining · 2 polls · analytics top/bottom 5",
        text: "Quarterly (half a day): survey to email list · 5 interviews · search research · update ideal audience profile",
      },
      { type: "heading", text: "For brands: using creator audience insight", id: "for-brands" },
      {
        type: "paragraph",
        text: "For brands, creators who research their audience can explain why a product fits and which messages will land. Ask creators what their audience asks about in your category; it's often better insight than generic research. Kudozz's guide to influencer campaign briefs explains how to use creator input in planning.",
        links: [{ text: "influencer campaign briefs", href: "/blog/influencer-campaign-brief" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Asking \"What content do you want?\" and nothing more specific.",
          "Listening only to the loudest commenters.",
          "Surveys that are too long.",
          "Collecting insight and never acting on it.",
          "Ignoring behaviour data because it contradicts what people said.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Audience research is simply listening on purpose. Combine what people say, do and search for, organise it by theme, and turn it into content, community, product and partnership decisions, on a steady monthly and quarterly rhythm.",
      },
    ],
    faqs: [
      {
        question: "How can creators find out what their audience wants?",
        answer:
          "Combine comments, DMs, polls and surveys with analytics on what people watch, save, share and buy, plus search data on what they look for. Repeated themes across these sources are the best signals.",
      },
      {
        question: "What questions should creators ask in audience surveys?",
        answer:
          "Ask about situation, goals, obstacles and preferred formats, mostly as multiple choice, with one open question about their biggest current struggle.",
      },
      {
        question: "How often should creators do audience research?",
        answer:
          "A light monthly routine of comment mining, polls and analytics review, and a deeper quarterly round with surveys, interviews and search research.",
      },
    ],
  },
];
