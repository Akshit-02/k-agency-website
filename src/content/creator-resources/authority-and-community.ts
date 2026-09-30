import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_FACTS_REVIEWED, CREATOR_LAYER_7_PUBLISHED as PUBLISHED, CREATOR_LAYER_11_PUBLISHED } from "@/content/creator-resources/shared";

/**
 * Thought leadership, founder creator brands and community engagement
 * (650–699 layer). Personal brand, positioning, authority, employee
 * creators, community building, paid communities, WhatsApp and newsletters
 * (689–691, 694, 695, 697–699) stay in their existing guides.
 */
export const authorityAndCommunityPosts: BlogPost[] = [
  {
    slug: "creator-thought-leadership",
    category: "Creator Resources",
    title: "Creator Thought Leadership: How to Build Influence Beyond Social Media",
    seoTitle: "Creator Thought Leadership: Influence Beyond Social Media",
    excerpt:
      "How creators move from popular content to shaping conversations in their field: the difference between authority and thought leadership, original points of view, long-form writing, talks, podcasts, research and collaborations, and how to measure influence honestly.",
    metaDescription:
      "How creators build thought leadership beyond social media: original points of view, long-form writing, talks, podcasts, research, collaborations and measuring influence.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["creator thought leadership", "thought leadership for creators", "build influence", "industry influence creators", "original point of view", "speaking and writing creators"],
    related: ["how-to-build-authority-as-a-creator", "creator-positioning", "founder-creator-brand"],
    body: [
      {
        type: "paragraph",
        text: "Plenty of creators are trusted. Fewer are cited. Thought leadership is the step from \"I explain this topic well\" to \"people in my field use my ideas, frameworks or data when they talk about it\". It usually happens beyond social media too: in articles, talks, podcasts, reports and the rooms where decisions in a field get made.",
      },
      {
        type: "paragraph",
        text: "This guide covers building thought leadership as a creator. Being trusted for expertise is covered in how to build authority as a creator; being known for a specific topic in creator positioning. For brands building thought leadership with creators and executives, see LinkedIn thought leadership marketing.",
        links: [
          { text: "how to build authority as a creator", href: "/blog/how-to-build-authority-as-a-creator" },
          { text: "creator positioning", href: "/blog/creator-positioning" },
          { text: "LinkedIn thought leadership marketing", href: "/blog/linkedin-thought-leadership-marketing" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creator thought leadership means your ideas shape how others in your field think and act. Build it by developing a clear, original point of view, supporting it with evidence (your own data, experiments, case studies), publishing it in durable formats (long-form articles, newsletters, reports, talks, podcasts), engaging respectfully with other experts, and being consistent over years. Measure it by citations, invitations, requests to collaborate and whether peers use your frameworks, not just follower counts.",
      },
      { type: "heading", text: "Personal brand, positioning, authority and thought leadership", id: "differences" },
      {
        type: "table",
        headers: ["Concept", "Question it answers", "Example (illustrative)"],
        rows: [
          ["Personal brand", "How do people perceive me overall?", "\"Friendly, practical, honest\""],
          ["Positioning", "What am I known for?", "\"Personal finance for first-job earners\""],
          ["Authority", "Why do people trust my expertise?", "\"Real numbers, correct information, credentials\""],
          ["Thought leadership", "How do my ideas shape the field?", "\"My budgeting framework is used by other educators\""],
        ],
      },
      {
        type: "paragraph",
        text: "These build on each other. Thought leadership without authority is opinion; authority without a point of view is useful but rarely cited.",
      },
      { type: "heading", text: "Develop an original point of view", id: "pov" },
      {
        type: "paragraph",
        text: "A point of view is a clear position on how something in your field should be done or understood, one that some people might disagree with.",
      },
      {
        type: "template",
        label: "Point-of-view prompts",
        text: "• What does my field get wrong, and what do I believe instead?\n• What have I seen repeatedly that others haven't noticed?\n• What framework do I use that I could name and explain?\n• What would I change if I ran the industry for a year?",
      },
      {
        type: "paragraph",
        text: "Test it: can you state it in one sentence, support it with evidence and explain it to a sceptic?",
      },
      { type: "heading", text: "Support it with evidence", id: "evidence" },
      {
        type: "list",
        items: [
          "Your own data: audience surveys, experiment results, client outcomes (with permission).",
          "Case studies with specifics.",
          "Repeated observation over time.",
          "References to credible sources.",
        ],
      },
      {
        type: "paragraph",
        text: "Evidence is what separates thought leadership from hot takes.",
      },
      { type: "heading", text: "Publish in durable formats", id: "formats" },
      {
        type: "table",
        headers: ["Format", "Why it matters"],
        rows: [
          ["Long-form articles and newsletters", "Ideas in full, searchable, citable"],
          ["Reports or original research", "Data others reference"],
          ["Talks and panels", "Credibility with peers and industry"],
          ["Podcasts (guest and host)", "Depth and reach in your field"],
          ["Frameworks and templates", "Tools people adopt and credit"],
          ["Books or courses", "Structured, lasting"],
        ],
      },
      {
        type: "paragraph",
        text: "Social posts introduce ideas; durable formats let others cite them. A creator website gives them a permanent home.",
      },
      {
        type: "paragraph",
        text: "Website: how to build a creator website.",
        links: [{ text: "how to build a creator website", href: "/blog/how-to-build-a-creator-website" }],
      },
      { type: "heading", text: "Engage with your field", id: "engage" },
      {
        type: "paragraph",
        text: "Respond thoughtfully to other experts, credit ideas you build on, collaborate on research or events, and disagree respectfully. Thought leadership grows through conversation, not broadcasting. Creator networking covers building those relationships.",
      },
      {
        type: "paragraph",
        text: "Relationships: creator networking.",
        links: [{ text: "creator networking", href: "/blog/creator-networking" }],
      },
      { type: "heading", text: "Examples by creator type", id: "examples" },
      {
        type: "table",
        headers: ["Creator", "Thought leadership path (illustrative)"],
        rows: [
          ["Career coach", "Annual survey of hiring managers; talks at college placement cells"],
          ["UX designer on LinkedIn", "Named framework for app onboarding; newsletter case studies"],
          ["Agriculture creator", "Field experiment results shared with farmer groups and agricultural journalists"],
          ["Founder", "Candid essays on building in a specific market; podcast guest circuit"],
          ["Regional-language educator", "A teaching method adopted by other creators in the language"],
        ],
      },
      { type: "heading", text: "Measure influence honestly", id: "measure" },
      {
        type: "table",
        headers: ["Signal", "Suggests"],
        rows: [
          ["Others cite or quote your ideas", "Influence on the conversation"],
          ["Invitations to speak, write or advise", "Industry recognition"],
          ["Peers use your frameworks or data", "Adoption"],
          ["Journalists and brands ask your view", "Trusted perspective"],
          ["Inbound collaboration requests", "Network effect"],
        ],
      },
      { type: "heading", text: "Responsibility", id: "responsibility" },
      {
        type: "paragraph",
        text: "Influence brings responsibility: correct mistakes publicly, disclose commercial relationships, stay within your expertise on regulated topics, and don't overstate certainty. Creator reputation management covers corrections and transparency.",
      },
      {
        type: "paragraph",
        text: "Reputation: creator reputation management.",
        links: [{ text: "creator reputation management", href: "/blog/creator-reputation-management" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Confusing contrarian hot takes with thought leadership.",
          "No evidence behind the point of view.",
          "Publishing only short social posts that can't be cited.",
          "Ignoring or dismissing other experts.",
          "Measuring influence by follower count alone.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Thought leadership is earned by original, evidence-backed ideas published in durable formats and discussed with your field over time. Build authority first, develop a point of view, publish beyond social media and measure influence by whether others use your ideas.",
      },
    ],
    faqs: [
      {
        question: "What is thought leadership for creators?",
        answer:
          "When a creator's ideas, frameworks or data shape how others in their field think and act, often recognised through citations, invitations and adoption of their frameworks.",
      },
      {
        question: "How is thought leadership different from authority?",
        answer:
          "Authority is why people trust your expertise. Thought leadership is when your original ideas influence the wider conversation in your field.",
      },
      {
        question: "How can creators build influence beyond social media?",
        answer:
          "Publish in durable formats such as long-form articles, newsletters, reports, talks and podcasts, support ideas with evidence and engage respectfully with other experts.",
      },
    ],
  },
  {
    slug: "founder-creator-brand",
    category: "Creator Resources",
    title: "Founder Creator Brand: How Founders Can Build an Audience Through Content",
    seoTitle: "Founder Creator Brand: Build an Audience Through Content",
    excerpt:
      "How founders build a personal audience that supports their company: why founder content works, choosing platforms and pillars, what to share and what not to, time-efficient systems, running founder content as a company programme, measuring business outcomes, and when to add external creators.",
    metaDescription:
      "How founders build a creator brand: platforms, pillars, what to share, time-efficient systems, running a founder content programme and business outcomes.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    updatedAt: CREATOR_LAYER_11_PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "16 min read",
    tags: ["founder creator brand", "founder creator programs", "founder-led content", "founder personal brand", "founder LinkedIn strategy", "founder marketing India"],
    related: ["b2b-creator-economy", "executive-influencer-marketing-linkedin", "employee-influencer-marketing"],
    body: [
      {
        type: "paragraph",
        text: "Founders have something most marketing teams can't manufacture: a real person with a real story making real decisions. Customers, candidates and investors increasingly want to hear from the person building the company, not just the company account. A founder creator brand is how that voice becomes an audience.",
      },
      {
        type: "paragraph",
        text: "This guide is for founders building their own audience. For employees creating content for their company, see employee influencer marketing; for founders on X specifically, see X founder-led creator marketing.",
        links: [
          { text: "employee influencer marketing", href: "/blog/employee-influencer-marketing" },
          { text: "X founder-led creator marketing", href: "/blog/x-founder-led-creator-marketing" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A founder creator brand is a founder's personal audience built through consistent, genuine content about their work, industry and lessons. Choose one or two platforms where your customers, hires or investors pay attention (often LinkedIn, YouTube, X or podcasts), pick three content pillars (building the company, industry insight, lessons and values), share honest specifics rather than polished announcements, set a sustainable system with team support for editing and distribution, avoid disclosing confidential information, and measure business outcomes such as inbound leads, hiring interest and partnerships.",
      },
      { type: "heading", text: "Why founder content works", id: "why" },
      {
        type: "list",
        items: [
          "People trust people more than logos.",
          "Founders have unique context: decisions, trade-offs, customer conversations.",
          "It attracts customers, employees, partners and investors at the same time.",
          "It compounds: an audience built over years outlasts campaigns.",
        ],
      },
      {
        type: "paragraph",
        text: "It doesn't replace marketing, sales or product; it amplifies them.",
      },
      { type: "heading", text: "Choose platforms by audience", id: "platforms" },
      {
        type: "table",
        headers: ["Platform", "Suits founders whose audience is", "Common formats"],
        rows: [
          ["LinkedIn", "B2B buyers, hires, investors", "Text posts, carousels, short video, newsletters"],
          ["YouTube", "Customers researching in depth", "Explainers, build diaries, interviews"],
          ["X", "Tech, startup and policy conversations", "Threads, commentary"],
          ["Podcasts (guest and host)", "Industry and niche audiences", "Long conversations"],
          ["Instagram", "Consumer brands, lifestyle and D2C", "Behind the scenes, product stories"],
        ],
      },
      {
        type: "paragraph",
        text: "Start with one platform and do it well.",
      },
      { type: "heading", text: "Three founder content pillars", id: "pillars" },
      {
        type: "table",
        headers: ["Pillar", "Examples (illustrative)"],
        rows: [
          ["Building the company", "Hiring decisions, pricing changes, what failed and why"],
          ["Industry insight", "What customers are really asking; market shifts you see early"],
          ["Lessons and values", "Leadership mistakes, how you make decisions, what you believe"],
        ],
      },
      {
        type: "paragraph",
        text: "Content pillars for creators explains how to choose and test them.",
      },
      {
        type: "paragraph",
        text: "Pillars: content pillars for creators.",
        links: [{ text: "content pillars for creators", href: "/blog/content-pillars-for-creators" }],
      },
      { type: "heading", text: "What to share and what not to", id: "boundaries" },
      {
        type: "table",
        headers: ["Share", "Be careful with"],
        rows: [
          ["Decisions and the reasoning", "Confidential customer, financial or investor information"],
          ["Honest lessons from mistakes", "Criticism of named employees or customers"],
          ["Customer insights (anonymised)", "Forward-looking claims that could mislead"],
          ["Team wins (with their consent)", "Regulatory or legal matters without advice"],
          ["Industry observations", "Hype you can't back up"],
        ],
      },
      {
        type: "paragraph",
        text: "If your company is listed or regulated, check disclosure and communication rules with your legal or compliance team before posting about performance or plans.",
      },
      { type: "heading", text: "A time-efficient system", id: "system" },
      {
        type: "template",
        label: "Founder content system (2–3 hours a week, illustrative)",
        text: "Mon: 20 min capturing ideas from the week (meetings, customer calls, decisions)\nTue: 60 min writing or recording 2–3 pieces\nWed–Fri: team member edits, formats and schedules; founder approves\nDaily: 10–15 min replying to comments and messages personally\nMonthly: one longer piece (article, podcast guest spot or video)",
      },
      {
        type: "paragraph",
        text: "Ghostwriting and editing help are common. The ideas, opinions and final approval should be the founder's, and if others write in your name, keep it true to your voice and views.",
      },
      { type: "heading", text: "Work with the team", id: "team" },
      {
        type: "list",
        items: [
          "A marketer or editor can shape drafts, design visuals and schedule posts.",
          "Encourage (never force) team members to share or create content about their own work; see employee influencer marketing.",
          "Keep the founder account personal rather than turning it into a second company page.",
        ],
      },
      { type: "heading", text: "Running founder content as a company programme", id: "programme" },
      {
        type: "paragraph",
        text: "When a company decides founder content is a marketing priority, it becomes a programme with owners, not just a founder's habit. The founder's voice stays theirs; the company supplies structure.",
      },
      {
        type: "table",
        headers: ["Element", "What it looks like"],
        rows: [
          ["Owner", "One person (often in marketing or communications) runs the calendar, editing and distribution"],
          ["Input sessions", "A short weekly interview where the owner draws out ideas from the founder's week"],
          ["Review", "Founder approves every post; legal or compliance reviews only sensitive topics"],
          ["Distribution", "Company channels, newsletter and sales team share the strongest pieces; paid amplification where platforms allow it with the founder's permission"],
          ["Co-founders and leaders", "A second voice only if they genuinely want it, with a different content territory"],
          ["Measurement", "Monthly review of the business outcomes below, not just likes"],
        ],
      },
      {
        type: "paragraph",
        text: "Founder content is one of several company voices. How it differs from executive creator marketing, employee advocacy and external creator partnerships is set out in the B2B creator economy, and the executive-level version in executive influencer marketing.",
        links: [
          { text: "the B2B creator economy", href: "/blog/b2b-creator-economy" },
          { text: "executive influencer marketing", href: "/blog/executive-influencer-marketing-linkedin" },
        ],
      },
      { type: "heading", text: "Measure business outcomes", id: "measure" },
      {
        type: "table",
        headers: ["Outcome", "Signal"],
        rows: [
          ["Sales", "Inbound leads mentioning your content; content in deal conversations"],
          ["Hiring", "Candidates citing your posts"],
          ["Partnerships", "Inbound collaboration and speaking requests"],
          ["Brand", "Search for your name and company; press enquiries"],
          ["Audience quality", "Followers who are customers, hires and peers"],
        ],
      },
      {
        type: "paragraph",
        text: "Follower counts matter less than whether the right people are paying attention.",
      },
      { type: "heading", text: "When to add external creators", id: "external-creators" },
      {
        type: "paragraph",
        text: "A founder's own audience is one channel. Creators who already have the trust of your customers can extend reach into audiences you can't reach yourself, through reviews, collaborations and campaigns. Founder content and creator partnerships work well together: creators bring reach and credibility with their audience; the founder brings depth and continuity.",
      },
      { type: "heading", text: "For brands: founder content and creator campaigns", id: "for-brands" },
      {
        type: "paragraph",
        text: "For companies, a founder's audience and external creator campaigns reinforce each other: founder content explains the why, creators show the product in their audiences' lives. Kudozz's guide to LinkedIn thought leadership marketing covers combining founder, employee and creator voices.",
        links: [{ text: "LinkedIn thought leadership marketing", href: "/blog/linkedin-thought-leadership-marketing" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Posting only announcements and press coverage.",
          "Fully outsourced content that doesn't sound like the founder.",
          "Sharing confidential or misleading information.",
          "Trying every platform at once.",
          "Measuring success by likes instead of business outcomes.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A founder creator brand turns the founder's real experience into an audience that supports the company. Pick one platform, three pillars and a sustainable system, share honest specifics within sensible boundaries, and measure the business outcomes that matter.",
      },
    ],
    faqs: [
      {
        question: "How can founders build a personal brand?",
        answer:
          "Choose one or two platforms where customers, hires or investors pay attention, post consistently around a few pillars (building the company, industry insight, lessons), share honest specifics and measure business outcomes.",
      },
      {
        question: "Should founders use ghostwriters?",
        answer:
          "Editing and ghostwriting help is common, but the ideas, opinions and final approval should be the founder's, and the content should stay true to their voice.",
      },
      {
        question: "How can a company run a founder content programme?",
        answer:
          "Give it an owner who runs weekly input sessions, editing and distribution, keep the founder as the final approver of every post, involve legal only for sensitive topics, share strong pieces through company channels and measure business outcomes such as inbound leads, hiring interest and partnerships.",
      },
      {
        question: "What should founders avoid posting?",
        answer:
          "Confidential customer, financial or investor information, misleading forward-looking claims, and criticism of named people. Listed or regulated companies should check communication rules first.",
      },
    ],
  },
  {
    slug: "creator-community-engagement",
    category: "Creator Resources",
    title: "Creator Community Engagement: How to Build Conversations Around Your Content",
    seoTitle: "Creator Community Engagement: Build Real Conversations",
    excerpt:
      "How creators turn one-way posts into conversations: designing content that invites replies, comment strategies, replying well at scale, prompts and rituals, lives and DMs, moderation, and measuring conversation rather than vanity engagement.",
    metaDescription:
      "How creators build conversations around content: prompts that invite replies, comment strategy, replying at scale, rituals, lives, moderation and measuring conversation.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["creator community engagement", "build conversations", "comment strategy creators", "increase comments", "audience engagement", "community engagement ideas"],
    related: ["how-to-build-a-creator-community", "creator-engagement-analytics", "instagram-broadcast-channels"],
    body: [
      {
        type: "paragraph",
        text: "Engagement is often treated as a number to push up. Community engagement is different: it's the conversation that happens around your content, between you and your audience, and eventually between audience members themselves. That conversation is where loyalty forms, where content ideas come from and where the trust that brands value shows up.",
      },
      {
        type: "paragraph",
        text: "This guide covers designing and running those conversations. For building a community space itself, see how to build a creator community; for measuring engagement data, see creator engagement analytics.",
        links: [
          { text: "how to build a creator community", href: "/blog/how-to-build-a-creator-community" },
          { text: "creator engagement analytics", href: "/blog/creator-engagement-analytics" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To build conversations around your content, design posts that invite a specific response (a choice, an experience, a question), reply early and genuinely to comments, highlight good contributions (pinned comments, reply videos, Story shares), create recurring rituals such as weekly prompts or monthly lives, move deeper conversations to channels or communities, moderate clearly, and measure conversation quality (thoughtful comments, replies between members, repeat commenters) rather than raw likes.",
      },
      { type: "heading", text: "Design content that invites conversation", id: "design" },
      {
        type: "table",
        headers: ["Prompt type", "Example (illustrative)", "Why it works"],
        rows: [
          ["A choice", "\"Would you pick the ₹15K phone or wait for the ₹20K one?\"", "Easy to answer, invites reasons"],
          ["An experience", "\"What was your first salary mistake?\"", "People like sharing stories"],
          ["A gap", "\"What's the one thing nobody explained about GST to you?\"", "Generates content ideas"],
          ["A disagreement", "\"Unpopular opinion: meal prep is overrated. Agree?\"", "Invites debate (keep it respectful)"],
          ["A challenge", "\"Try this for 7 days and tell me day 3\"", "Creates follow-up conversation"],
        ],
      },
      {
        type: "paragraph",
        text: "\"Comment below!\" invites nothing specific. A clear, easy question does.",
      },
      { type: "heading", text: "Reply well", id: "reply" },
      {
        type: "list",
        items: [
          "Reply early: the first hour of comments sets the tone.",
          "Reply specifically, not with a single emoji.",
          "Ask a follow-up question to deepen a thread.",
          "Pin a comment that adds value or starts the conversation.",
          "Turn great questions into reply videos, crediting the commenter where appropriate.",
        ],
      },
      { type: "heading", text: "Replying at scale", id: "scale" },
      {
        type: "template",
        label: "When comments outgrow your time",
        text: "• Reply to the first 20–30 comments on every post\n• Prioritise questions and first-time commenters\n• Use saved replies only for FAQs, then personalise\n• Batch replies in two short sessions a day\n• Turn repeated questions into content instead of answering each one\n• Consider a community manager when replies become a bottleneck",
      },
      {
        type: "paragraph",
        text: "Team help: creator team building.",
        links: [{ text: "creator team building", href: "/blog/creator-team-building" }],
      },
      { type: "heading", text: "Rituals that bring people back", id: "rituals" },
      {
        type: "table",
        headers: ["Ritual", "Example"],
        rows: [
          ["Weekly prompt", "\"Sunday wins\": share one thing you did this week"],
          ["Monthly live", "Q&A on the month's most-asked question"],
          ["Community showcase", "Share members' results with permission"],
          ["Challenge series", "14-day habit challenge with check-ins"],
          ["Vote on content", "Polls deciding the next episode"],
        ],
      },
      { type: "heading", text: "Take conversations deeper", id: "deeper" },
      {
        type: "paragraph",
        text: "Some conversations need more space: broadcast channels, WhatsApp communities, Discord, or email replies. Invite your most engaged commenters there. Instagram broadcast channels and WhatsApp community for creators cover these spaces.",
        links: [
          { text: "Instagram broadcast channels", href: "/blog/instagram-broadcast-channels" },
          { text: "WhatsApp community for creators", href: "/blog/whatsapp-community-for-creators" },
        ],
      },
      { type: "heading", text: "Moderation", id: "moderation" },
      {
        type: "paragraph",
        text: "Healthy conversation needs clear boundaries: hide spam and abuse, don't delete legitimate criticism, set comment filters for slurs and harassment, and state simple community rules. Moderation protects the people who make your comments section worth reading.",
      },
      {
        type: "paragraph",
        text: "Filters, community rules and handling harassment are covered in detail in creator content moderation.",
        links: [
          { text: "creator content moderation", href: "/blog/creator-content-moderation" },
        ],
      },
      { type: "heading", text: "Measure conversation, not just engagement", id: "measure" },
      {
        type: "table",
        headers: ["Metric", "Shows"],
        rows: [
          ["Thoughtful comments (more than a few words)", "Real engagement"],
          ["Replies between audience members", "Community forming"],
          ["Repeat commenters", "Loyalty"],
          ["Questions asked", "Content opportunities"],
          ["Saves and shares", "Value"],
          ["DMs and replies to Stories", "Personal connection"],
        ],
      },
      {
        type: "paragraph",
        text: "Engagement pods, comment-for-comment schemes and giveaways that require comments inflate numbers without building conversation, and brands increasingly notice.",
      },
      { type: "heading", text: "Engagement and brand partnerships", id: "brands" },
      {
        type: "paragraph",
        text: "Brands value comment sections where real people ask real questions. In sponsored posts, answer product questions honestly, pass complaints to the brand, and keep the conversation as genuine as on your own posts.",
      },
      {
        type: "paragraph",
        text: "Trust: creator audience trust.",
        links: [{ text: "creator audience trust", href: "/blog/creator-audience-trust-sponsored-content" }],
      },
      { type: "heading", text: "Worked example: a month of conversation design", id: "example" },
      {
        type: "template",
        label: "Illustrative: a Hindi study creator (exam prep), 3 posts a week",
        text: "Week 1: Reel with a choice prompt: \"Morning study or night study? Tell me your exam and why.\"\n        Reply to first 30 comments; pin the most useful answer\nWeek 2: Reply video to the best question from week 1 (credited, with permission)\nWeek 3: \"Sunday check-in\" ritual starts: share one thing you finished this week\nWeek 4: Monthly live: the 5 most-asked questions; invite regulars to a WhatsApp study channel\n\nWhat to watch: comments longer than a few words, repeat commenters, replies between students, questions for next month's content",
      },
      { type: "heading", text: "Reply templates that keep conversations going", id: "templates" },
      {
        type: "template",
        label: "Reply patterns (adapt; don't copy-paste for every comment)",
        text: "To a question: \"Good question. Short answer: [answer]. I'll do a full video on this next week.\"\nTo a story: \"Thanks for sharing this. What helped you most when [situation]?\"\nTo disagreement: \"Fair point. Here's why I see it differently: [reason]. What's worked for you?\"\nTo praise: \"Glad it helped! Which part are you trying first?\"",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Generic \"comment below\" prompts.",
          "Replying only with emojis.",
          "Deleting criticism.",
          "Buying or trading engagement.",
          "Measuring success by comment count alone.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Community engagement is conversation by design. Ask specific questions, reply genuinely, create rituals, move deeper conversations to community spaces, moderate clearly and measure the quality of conversation, not just the volume.",
      },
    ],
    faqs: [
      {
        question: "How can creators increase engagement on their posts?",
        answer:
          "Ask specific, easy-to-answer questions, reply early and genuinely, pin useful comments, turn great questions into reply content and create recurring rituals people return for.",
      },
      {
        question: "How should creators handle too many comments?",
        answer:
          "Reply to the first batch on every post, prioritise questions and first-time commenters, batch replies, turn repeated questions into content and consider a community manager.",
      },
      {
        question: "Are engagement pods worth it?",
        answer:
          "No. They inflate numbers without building real conversation, and brands increasingly recognise artificial engagement.",
      },
    ],
  },
];
