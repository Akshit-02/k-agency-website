import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_CLUSTER_PUBLISHED, CREATOR_FACTS_REVIEWED, SOURCES } from "@/content/creator-resources/shared";

/** AI for creators and the creator analytics dashboard. */
export const aiAndAnalyticsPosts: BlogPost[] = [
  {
    slug: "ai-tools-for-creators",
    category: "Creator Resources",
    title: "AI Tools for Creators: How to Use AI Without Losing Your Personal Voice",
    seoTitle: "AI Tools for Creators: Use AI Without Losing Your Voice",
    excerpt:
      "Where AI genuinely helps creators, where it quietly hurts, what disclosure rules apply in India and on YouTube, and a set of principles for keeping your content recognisably yours.",
    metaDescription:
      "AI tools for creators: categories of AI tools, where AI helps and where it hurts, protecting your voice, AI disclosure on YouTube and under India's 2026 IT Rules, brand deal considerations and principles.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    updatedAt: "2026-09-29",
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["AI tools for creators", "AI for content creators", "AI disclosure", "synthetic content", "creator voice", "creator AI tools", "AI-assisted content workflow"],
    related: ["ai-content-workflow-for-creators", "how-to-build-a-creator-brand", "creator-content-licensing"],
    body: [
      {
        type: "paragraph",
        text: "AI can take hours out of research, transcription, editing and admin. It can also make your content sound like everyone else's. The creators who benefit most use AI for the parts of the work that don't carry their personality, and keep the parts that do firmly human.",
      },
      {
        type: "paragraph",
        text: "This article covers tools, opportunities, risks and principles. For a step-by-step production process, see the AI content workflow for creators.",
        links: [{ text: "AI content workflow for creators", href: "/blog/ai-content-workflow-for-creators" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creators use AI tools for research, ideation, scripting help, transcription and captions, translation and dubbing, editing assistance, thumbnails and design drafts, analytics summaries and admin. Use AI to speed up preparation and repetitive tasks, but keep your opinions, experiences, on-camera delivery and final judgement human. Fact-check everything, disclose realistic AI-generated or altered content (YouTube requires this, and India's 2026 IT Rules amendment adds labelling obligations for synthetic content), never use AI to fake results or testimonials, and protect your own face and voice in contracts.",
      },
      { type: "heading", text: "Categories of AI tools creators use", id: "categories" },
      {
        type: "table",
        headers: ["Category", "Helps with", "Keep human"],
        rows: [
          ["Chat assistants", "Research summaries, outlines, idea lists, email drafts", "Your opinions, final wording, facts"],
          ["Transcription and captions", "Subtitles, show notes, searchable transcripts", "Proofreading names and numbers"],
          ["Translation and dubbing", "Reaching other language audiences", "Cultural nuance; native review"],
          ["Video editing assistants", "Rough cuts, silence removal, reframing for vertical", "Pacing, story, final cut"],
          ["Image and design tools", "Thumbnail drafts, backgrounds, mock-ups", "Your face and real product shots"],
          ["Voice tools", "Cleaning audio, voiceover for your own scripts", "Consent for any voice other than yours"],
          ["Analytics assistants", "Summaries of performance, pattern spotting", "Decisions about what to make"],
          ["Admin and business tools", "Invoices, trackers, replies to routine enquiries", "Negotiation, relationships"],
        ],
      },
      {
        type: "paragraph",
        text: "Platforms are adding AI into creator tools too. YouTube, for example, has announced Ask Studio features in YouTube Studio to help creators respond to brand briefs, build pitches and tailor media kits. Features and availability change quickly; check each platform's current documentation.",
        links: [{ text: "YouTube, for example, has announced Ask Studio features", href: SOURCES.madeOnYouTube2026 }],
      },
      { type: "heading", text: "Where AI helps most", id: "helps" },
      {
        type: "list",
        items: [
          "Turning one long video into captions, show notes, a newsletter draft and social snippets.",
          "Summarising research you then verify.",
          "Generating 20 hook variations so you can pick and rewrite the best two.",
          "Cleaning audio and removing silences.",
          "Translating descriptions or subtitles into Hindi or regional languages, reviewed by a native speaker.",
          "Drafting routine emails and organising your campaign tracker.",
        ],
      },
      { type: "heading", text: "Where AI quietly hurts", id: "hurts" },
      {
        type: "list",
        items: [
          "Generic scripts: audiences follow you for your perspective, not a smooth average of the internet.",
          "Confident errors: AI can invent facts, prices, specifications and sources.",
          "Sameness: using the same tools and prompts as everyone else produces the same content.",
          "Thin mass content: search engines and platforms reward helpful, original work; mass-produced AI pages and non-original videos can underperform or lose monetization eligibility.",
          "Trust damage: undisclosed synthetic content, fake reviews or AI \"testimonials\" can end brand relationships.",
        ],
      },
      { type: "heading", text: "Protecting your voice", id: "voice" },
      {
        type: "template",
        label: "Voice rules to keep next to your AI tools",
        text: "1. My opinion comes first. AI can organise it, not invent it.\n2. Personal stories and experiences are never AI-generated.\n3. I rewrite every AI draft in my own words before publishing.\n4. My catchphrases, humour and language mix (Hindi/English) stay mine.\n5. Anything factual is checked against a primary source.\n6. If AI shaped something realistic that viewers could mistake for real, I disclose it.",
      },
      { type: "heading", text: "Disclosure rules", id: "disclosure" },
      {
        type: "paragraph",
        text: "YouTube requires creators to disclose meaningfully altered or synthetic content that looks realistic, such as making a real person appear to say something they didn't, altering footage of real events, or generating realistic scenes that didn't happen. Minor edits like colour correction, beauty filters or captions don't need disclosure. YouTube says disclosure doesn't limit a video's audience or monetization eligibility.",
        links: [{ text: "YouTube requires creators to disclose", href: SOURCES.youtubeAlteredContent }],
      },
      {
        type: "paragraph",
        text: "In India, the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Amendment Rules, 2026, in force from 20 February 2026, require platforms to label synthetically generated content and ask users to declare it at upload, and prohibit removing those labels. As a creator, declare synthetic content honestly when platforms ask, and don't strip labels or metadata. For brand campaigns, ASCI's influencer guidelines also address AI and virtual influencers; clarify disclosure with the brand upfront.",
      },
      { type: "heading", text: "AI in brand deals", id: "brand-deals" },
      {
        type: "list",
        items: [
          "Ask whether the brand allows AI-generated or AI-edited elements in sponsored content, and disclose where required.",
          "Don't use AI to fabricate product results, before-and-after images or demonstrations.",
          "Check contracts for rights to create AI variations of your face or voice; limit or price them. See creator content licensing.",
          "Don't feed a brand's confidential brief into tools that may use inputs for training, unless the brand agrees.",
        ],
      },
      {
        type: "paragraph",
        text: "Contract protection for your likeness is covered in creator content licensing and creator usage rights.",
        links: [
          { text: "creator content licensing", href: "/blog/creator-content-licensing" },
          { text: "creator usage rights", href: "/blog/creator-usage-rights" },
        ],
      },
      { type: "heading", text: "From tools to an AI-assisted workflow", id: "workflow" },
      {
        type: "paragraph",
        text: "Individual tools save minutes; a workflow saves hours. Decide which stages of your process AI supports (research, outlines, captions, rough cuts, repurposing, reporting) and where a person always checks the result. The AI content workflow for creators maps this stage by stage. Newer agent features can carry out multi-step tasks such as research, but need tighter limits; see AI agents for creators.",
        links: [
          { text: "AI content workflow for creators", href: "/blog/ai-content-workflow-for-creators" },
          { text: "AI agents for creators", href: "/blog/ai-agents-for-creators" },
        ],
      },
      {
        type: "paragraph",
        text: "AI tools change quickly, and features, free-plan limits and availability in India differ between products and plans. Test a tool on your own content before paying, and don't assume a feature announced for one country is available to you.",
      },
      { type: "heading", text: "Choosing tools", id: "choosing" },
      {
        type: "list",
        items: [
          "Start with one problem (captions, research, rough cuts), not ten tools.",
          "Check data and privacy terms: can the tool use your uploads for training?",
          "Check commercial usage rights for generated images, music and voices.",
          "Prefer tools that export in standard formats so you're not locked in.",
          "Track time saved; drop tools that don't earn their place.",
        ],
      },
      { type: "heading", text: "Mistakes to avoid", id: "mistakes" },
      {
        type: "list",
        items: [
          "Publishing AI drafts without rewriting them in your voice.",
          "Trusting AI facts, statistics or sources without checking.",
          "Undisclosed realistic synthetic content.",
          "Cloning someone else's voice or likeness without consent.",
          "Using AI-generated music or images without checking commercial rights.",
          "Mass-producing low-value content to chase volume.",
        ],
      },
      {
        type: "paragraph",
        text: "Two related guides go further: AI for brand collaborations covers pitches, briefs, proposals and reports, and AI influencers vs human creators compares virtual personas with real creators.",
        links: [
          { text: "AI for brand collaborations", href: "/blog/ai-for-creator-brand-collaborations" },
          { text: "AI influencers vs human creators", href: "/blog/ai-influencers-vs-human-creators" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "AI is best treated as a capable assistant, not a replacement for your perspective. Automate the repetitive parts, keep the personal parts human, verify facts, disclose honestly, and protect your likeness in contracts. Then build a repeatable process with the AI content workflow for creators.",
        links: [{ text: "AI content workflow for creators", href: "/blog/ai-content-workflow-for-creators" }],
      },
    ],
    faqs: [
      {
        question: "What AI tools do creators use?",
        answer:
          "Chat assistants for research and outlines, transcription and caption tools, translation and dubbing tools, video editing assistants, image and design tools, audio cleanup, analytics assistants and admin tools.",
      },
      {
        question: "Do creators need to disclose AI-generated content?",
        answer:
          "Often, yes. YouTube requires disclosure for realistic altered or synthetic content, and India's 2026 IT Rules amendment requires platforms to label synthetic content and users to declare it. Minor edits like colour correction or captions generally don't need disclosure.",
      },
      {
        question: "Will using AI hurt my YouTube monetization?",
        answer:
          "YouTube says disclosing AI content doesn't by itself limit reach or monetization eligibility. Non-original, repetitive or mass-produced content can, however, fall foul of monetization policies.",
      },
      {
        question: "How do I use AI without losing my voice?",
        answer:
          "Use AI for preparation and repetitive tasks, keep opinions, stories and delivery human, rewrite every draft in your own words, and verify facts before publishing.",
      },
    ],
  },
  {
    slug: "ai-content-workflow-for-creators",
    category: "Creator Resources",
    title: "AI Content Workflow for Creators: From Idea to Published Content",
    seoTitle: "AI Content Workflow for Creators: Idea to Published",
    excerpt:
      "A practical, step-by-step workflow showing exactly where AI fits in content production, from idea and research to scripting, editing, repurposing, publishing and review, with human checkpoints at each stage.",
    metaDescription:
      "An AI content workflow for creators: idea generation, research, scripting, production, editing, captions and translation, repurposing, publishing, disclosure and review, with human checkpoints and a weekly template.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "11 min read",
    tags: ["AI content workflow", "AI creator workflow", "AI for content planning", "AI scripting", "content repurposing AI", "creator productivity"],
    related: ["ai-tools-for-creators", "creator-workflow", "creator-analytics-dashboard"],
    body: [
      {
        type: "paragraph",
        text: "Most creators use AI in bursts: a caption here, a title idea there. A workflow is more useful. It decides in advance which steps AI handles, which steps are always human, and where you check the output before it goes anywhere.",
      },
      {
        type: "paragraph",
        text: "For choosing tools and the risks involved, see AI tools for creators. This article is the production process.",
        links: [{ text: "AI tools for creators", href: "/blog/ai-tools-for-creators" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "An AI content workflow has eight stages: idea, research, outline and script, production, editing, captions and translation, repurposing, and publishing and review. Use AI to generate options, summarise research, draft outlines, speed up rough edits, create captions and translations, and repurpose long content into short pieces. Put a human checkpoint after each AI step: choose the idea, verify facts, rewrite the script in your voice, approve the edit, proofread captions, and decide disclosure before publishing.",
      },
      { type: "heading", text: "The eight-stage workflow", id: "stages" },
      {
        type: "image",
        src: "/blog/creator-resources/ai-content-workflow.svg",
        alt: "Eight-stage AI content workflow for creators: idea, research, script, production, edit, captions and translation, repurpose, publish and review, with a human checkpoint after each AI step",
        caption: "AI speeds up each stage; a human checkpoint decides what moves forward.",
        width: 1200,
        height: 675,
      },
      {
        type: "table",
        headers: ["Stage", "AI does", "Human checkpoint"],
        rows: [
          ["1. Idea", "Lists angles from your comments, search questions and past top videos", "You pick the idea you have a real opinion on"],
          ["2. Research", "Summarises sources you provide; drafts a fact list", "You verify every fact against primary sources"],
          ["3. Outline and script", "Structures points; suggests hooks and transitions", "You rewrite in your voice; add personal stories"],
          ["4. Production", "Teleprompter text, shot list, checklist", "You perform; nothing replaces your delivery"],
          ["5. Editing", "Rough cut, silence removal, reframing, audio cleanup", "You set pacing and approve the final cut"],
          ["6. Captions and translation", "Subtitles, translated captions, descriptions", "You proofread names, numbers and meaning"],
          ["7. Repurposing", "Clips, carousel text, newsletter draft, show notes", "You choose what's worth reposting and rewrite"],
          ["8. Publish and review", "Title variations, description drafts, analytics summary", "You decide disclosure, final title and next steps"],
        ],
      },
      { type: "heading", text: "Stage notes and example prompts", id: "prompts" },
      { type: "subheading", text: "Idea" },
      {
        type: "template",
        text: "\"Here are the 30 most common questions from my comments this month [paste]. Group them into themes and suggest 10 video angles for first-time investors in India. Don't invent statistics.\"",
      },
      { type: "subheading", text: "Research" },
      {
        type: "template",
        text: "\"Summarise these three official pages [paste or attach] into a fact list with the source for each fact. Flag anything that is ambiguous or may have changed recently.\"",
      },
      { type: "subheading", text: "Script" },
      {
        type: "template",
        text: "\"Using my notes below, create a 60-second structure: hook, three points, one example, call to action. Keep my phrases where possible. Write in Hinglish like my notes.\"\nThen: rewrite it yourself, out loud, the way you'd actually say it.",
      },
      { type: "subheading", text: "Repurposing" },
      {
        type: "template",
        text: "\"From this transcript [paste], suggest five 30-second clip moments with timestamps, a 6-slide carousel outline, and a 300-word newsletter summary. Quote me exactly; don't add claims.\"",
      },
      { type: "heading", text: "Disclosure checkpoint", id: "disclosure" },
      {
        type: "list",
        items: [
          "Did AI create or meaningfully alter realistic visuals, audio or scenes? Disclose on YouTube and in line with India's 2026 IT Rules labelling requirements.",
          "Did AI only help with captions, colour, cleanup or scripting? Generally no disclosure needed on YouTube.",
          "Is this sponsored? Check the brand's position on AI elements and label the partnership as usual.",
        ],
      },
      {
        type: "paragraph",
        text: "YouTube's rules are on its altered or synthetic content page.",
        links: [{ text: "altered or synthetic content page", href: SOURCES.youtubeAlteredContent }],
      },
      { type: "heading", text: "A weekly AI-assisted schedule", id: "weekly" },
      {
        type: "template",
        label: "Illustrative week for one long video + repurposed content",
        text: "MONDAY — Ideas + research (AI summaries → you verify)\nTUESDAY — Script (AI outline → you rewrite); shot list\nWEDNESDAY — Shoot\nTHURSDAY — AI rough cut + audio cleanup → you edit\nFRIDAY — Captions, translations (AI → you proofread); thumbnail drafts → you finalise\nSATURDAY — Publish; AI drafts clips, carousel, newsletter → you choose and rewrite\nSUNDAY — AI summary of last week's analytics → you decide next week's focus",
      },
      {
        type: "paragraph",
        text: "Combine this with the brand-deal side of your week in the creator workflow, and track results in your creator analytics dashboard.",
        links: [
          { text: "creator workflow", href: "/blog/creator-workflow" },
          { text: "creator analytics dashboard", href: "/blog/creator-analytics-dashboard" },
        ],
      },
      { type: "heading", text: "Quality control checklist", id: "qc" },
      {
        type: "list",
        items: [
          "Every fact checked against a primary source",
          "Script rewritten in my own words",
          "Personal story or opinion included",
          "Names, prices and numbers in captions proofread",
          "Translation reviewed by a fluent speaker",
          "Music, images and voices cleared for commercial use",
          "AI disclosure decided",
          "Sponsored content labelled",
        ],
      },
      { type: "heading", text: "Research, scripts and content planning with AI", id: "research-planning" },
      {
        type: "paragraph",
        text: "Three stages benefit most from AI when you keep the judgement yourself. Research: ask for summaries and questions to investigate, then verify every fact at the source. Scripts: generate hook options and outlines from your own notes, then write and say the script in your own words. Planning: turn a list of audience questions into a month of content ideas grouped by series, then choose what fits your capacity and positioning.",
      },
      {
        type: "template",
        label: "Monthly planning prompt (adapt)",
        text: "\"Here are 20 questions my audience asked this month: [list]. Group them into 3\u20134 series for a [niche] creator posting [X] times a week. For each, suggest one short-form and one long-form idea. Flag anything that needs fact-checking.\"\nThen: pick, reorder and rewrite; check facts; add to your content calendar",
      },
      {
        type: "paragraph",
        text: "For AI in the business side of brand work, see AI for brand collaborations; for labelling AI content, see AI disclosure for creators.",
        links: [
          { text: "AI for brand collaborations", href: "/blog/ai-for-creator-brand-collaborations" },
          { text: "AI disclosure for creators", href: "/blog/ai-disclosure-creators" },
        ],
      },
      {
        type: "paragraph",
        text: "Agent features that carry out multi-step tasks, such as research packs, need tighter limits than chat assistants; see AI agents for creators.",
        links: [
          { text: "AI agents for creators", href: "/blog/ai-agents-for-creators" },
        ],
      },
      { type: "heading", text: "Mistakes to avoid", id: "mistakes" },
      {
        type: "list",
        items: [
          "Skipping checkpoints when you're busy; errors compound through repurposing.",
          "Letting AI choose topics you don't care about.",
          "Publishing auto-translated captions unchecked.",
          "Repurposing the same clip everywhere without adapting it to each platform.",
          "Pasting confidential brand briefs into tools without permission.",
        ],
      },
      {
        type: "paragraph",
        text: "For the non-AI parts of production, see content batching and content repurposing for creators.",
        links: [{ text: "content batching", href: "/blog/content-batching-for-creators" }, { text: "content repurposing for creators", href: "/blog/content-repurposing-for-creators" }],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A good AI workflow gives you back time without taking away your voice. Decide which stages AI handles, keep a human checkpoint after each, and review the process monthly: keep what saves time and improves quality, drop what doesn't.",
      },
    ],
    faqs: [
      {
        question: "How can creators use AI in their content workflow?",
        answer:
          "For generating idea options, summarising research, outlining scripts, rough editing, captions and translation, repurposing long content into short pieces, and summarising analytics, with a human review after each step.",
      },
      {
        question: "Should AI write my scripts?",
        answer:
          "AI can help structure a script, but rewriting it in your own words and adding your experiences keeps it credible and recognisably yours.",
      },
      {
        question: "Do I need to disclose AI-assisted editing?",
        answer:
          "Generally not for minor edits like captions, audio cleanup or colour correction. Realistic synthetic or meaningfully altered content should be disclosed on YouTube and labelled in line with India's IT Rules.",
      },
    ],
  },
  {
    slug: "creator-analytics-dashboard",
    category: "Creator Resources",
    title: "Creator Analytics Dashboard: How to Track Your Audience, Content and Revenue",
    seoTitle: "Creator Analytics Dashboard: Track Audience and Revenue",
    excerpt:
      "One dashboard for the numbers that actually guide your decisions: audience health, content performance, owned channels, revenue by stream and pipeline. Here's what to track, how often, and a template.",
    metaDescription:
      "How to build a creator analytics dashboard: audience, content, owned channels, revenue and brand-deal pipeline metrics, sources for each, review cadence, a dashboard template and mistakes to avoid.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "11 min read",
    tags: ["creator analytics dashboard", "creator metrics", "track creator revenue", "content analytics", "creator KPIs", "creator business dashboard", "full-time creator metrics", "creator financial dashboard", "creator business numbers"],
    related: ["creator-analytics-for-brand-deals", "creator-business-plan", "engagement-rate-vs-reach-for-creators"],
    body: [
      {
        type: "paragraph",
        text: "Every platform gives you analytics. None of them shows your whole business. Views live in YouTube Studio, saves in Instagram insights, subscribers in your email tool, commissions in affiliate dashboards and brand payments in your bank account. A creator analytics dashboard brings the few numbers that matter into one place, so you can make decisions instead of checking apps.",
      },
      {
        type: "paragraph",
        text: "This dashboard is for your own decisions. For which metrics to share with brands and how, see creator analytics for brand deals.",
        links: [{ text: "creator analytics for brand deals", href: "/blog/creator-analytics-for-brand-deals" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator analytics dashboard is a single sheet or tool that tracks five areas: audience (growth, demographics, retention), content (views, watch time, saves, shares by format), owned channels (email subscribers, community activity, website traffic), revenue (by stream: brand deals, platform payouts, affiliate, products, memberships) and pipeline (enquiries, proposals, confirmed deals). Update it weekly or monthly from native sources, compare against your own averages, and use it to decide what to make and what to stop.",
      },
      { type: "heading", text: "The five areas to track", id: "areas" },
      {
        type: "table",
        headers: ["Area", "Key metrics", "Source"],
        rows: [
          ["Audience", "Followers/subscribers net change, top cities, age, language, returning viewers", "Instagram insights, YouTube Studio, LinkedIn analytics"],
          ["Content", "Average views per format, watch time/retention, saves, shares, comments", "Native insights per platform"],
          ["Owned channels", "Email subscribers, open and click rates, community active members, website visits", "Email tool, community platform, website analytics, Search Console"],
          ["Revenue", "Income by stream, confirmed vs pending, expenses", "Invoices, AdSense, affiliate dashboards, payment gateway, bank"],
          ["Pipeline", "Enquiries, proposals sent, conversion to deals, average deal value", "Your campaign tracker"],
        ],
      },
      { type: "heading", text: "Choose a few metrics that drive decisions", id: "few-metrics" },
      {
        type: "paragraph",
        text: "A dashboard with fifty numbers gets ignored. Pick the handful that change what you do:",
      },
      {
        type: "list",
        items: [
          "Average views per format (last 30 or 90 days): tells you which formats to make more of.",
          "Saves and shares per post: tells you what people value, not just what they scroll past.",
          "Retention or watch time: tells you whether content holds attention.",
          "Email subscribers and community active members: your owned audience.",
          "Revenue by stream and month: tells you where income actually comes from.",
          "Deal pipeline: tells you whether next month's brand income is on track.",
        ],
      },
      { type: "heading", text: "A dashboard template", id: "template" },
      {
        type: "template",
        label: "Monthly creator dashboard (one row per month)",
        text: "AUDIENCE\nInstagram followers (net) · YouTube subscribers (net) · Top 3 cities · Main language split\n\nCONTENT (per platform, per format)\nPosts published · Avg views · Avg watch time/retention · Avg saves · Avg shares · Best post (link) · Worst post (link)\n\nOWNED\nEmail subscribers · Avg open rate · Avg click rate · Community active members · Website visits · Search Console clicks\n\nREVENUE (INR)\nBrand deals (invoiced / received) · YouTube (ads, Shorts, fan funding) · Shopping & affiliate (confirmed) · Products · Memberships · Other\nTotal income · Business expenses · Net\n\nPIPELINE\nEnquiries · Proposals · Confirmed deals · Avg deal value · Usage renewals due\n\nNOTES\nWhat worked · What to stop · One experiment for next month",
      },
      {
        type: "paragraph",
        text: "A spreadsheet is enough to start. The creator campaign tracker from the creator workflow guide feeds the pipeline and brand-revenue sections.",
        links: [{ text: "creator workflow guide", href: "/blog/creator-workflow" }],
      },
      { type: "heading", text: "Review cadence", id: "cadence" },
      {
        type: "table",
        headers: ["When", "What to look at", "Decision"],
        rows: [
          ["Weekly (15 min)", "Last week's posts, pipeline, overdue payments", "What to post and follow up this week"],
          ["Monthly (45 min)", "Averages, revenue by stream, owned channels", "Formats to double down on or drop; one experiment"],
          ["Quarterly (2 hrs)", "Trends, audience shifts, income mix, rates", "Update media kit and rate card; adjust business plan"],
        ],
      },
      {
        type: "paragraph",
        text: "Quarterly reviews feed straight into your creator business plan, and updated numbers go into your creator media kit.",
        links: [
          { text: "creator business plan", href: "/blog/creator-business-plan" },
          { text: "creator media kit", href: "/blog/creator-media-kit" },
        ],
      },
      { type: "heading", text: "Reading the numbers well", id: "reading" },
      {
        type: "list",
        items: [
          "Compare against your own averages, not other creators' screenshots.",
          "Label metric definitions; platforms count views differently, and Instagram replaced impressions with Views in 2025.",
          "Separate organic from paid-boosted performance.",
          "Treat one viral post as an outlier, not the new normal.",
          "Record revenue when confirmed, not when promised.",
        ],
      },
      {
        type: "paragraph",
        text: "For metric definitions and formulas, see engagement rate vs reach and how to calculate engagement rate.",
        links: [
          { text: "engagement rate vs reach", href: "/blog/engagement-rate-vs-reach-for-creators" },
          { text: "how to calculate engagement rate", href: "/blog/influencer-engagement-rate" },
        ],
      },
      { type: "heading", text: "The business dashboard for full-time creators", id: "business-dashboard" },
      {
        type: "paragraph",
        text: "Once creator work is your main income, add a business layer to the dashboard: the numbers that tell you whether the business is healthy, not just whether content performed.",
      },
      {
        type: "table",
        headers: ["Area", "Metric", "Guide"],
        rows: [
          ["Revenue", "Revenue by stream; share from largest client", "Creator income tracker"],
          ["Profit", "Gross and net margin", "Creator profit margin"],
          ["Cash", "Months of costs covered by buffer", "Creator cash flow management"],
          ["Pipeline", "Weighted pipeline for next 3 months", "Creator revenue forecasting"],
          ["Products", "Conversion by source; refunds; churn", "Creator product analytics"],
          ["Time", "Hours by activity; effective hourly rate", "Creator brand deal profit"],
        ],
      },
      {
        type: "paragraph",
        text: "Guides: creator income tracker, creator profit margin, creator cash flow management, creator revenue forecasting and creator product analytics.",
        links: [
          { text: "creator income tracker", href: "/blog/creator-income-tracker" },
          { text: "creator profit margin", href: "/blog/creator-profit-margin" },
          { text: "creator cash flow management", href: "/blog/creator-cash-flow-management" },
          { text: "creator revenue forecasting", href: "/blog/creator-revenue-forecasting" },
          { text: "creator product analytics", href: "/blog/creator-product-analytics" },
        ],
      },
      {
        type: "paragraph",
        text: "Operating metrics such as reply time to brands, on-time delivery and days to payment belong on the business dashboard too; creator operations lists the ones worth tracking.",
        links: [
          { text: "creator operations", href: "/blog/creator-operations" },
        ],
      },
      { type: "heading", text: "The financial dashboard", id: "financial-dashboard" },
      {
        type: "paragraph",
        text: "If you review money separately from audience numbers, keep a one-page financial dashboard that updates monthly from your books:",
      },
      {
        type: "table",
        headers: ["Metric", "What it tells you", "Source"],
        rows: [
          ["Revenue by stream", "Where money comes from and how concentrated it is", "Income tracker"],
          ["Gross and operating profit", "Whether the business makes money after costs", "Profit and loss statement"],
          ["Cash balance and runway", "How many months of costs you can cover", "Bank and budget"],
          ["Money owed and overdue", "Collection risk", "Invoice log ageing view"],
          ["Tax set aside", "Whether you're ready for tax dues", "Tax account"],
          ["Break-even coverage", "How far typical income is above break-even", "Break-even analysis"],
        ],
      },
      {
        type: "paragraph",
        text: "The underlying reports are covered in creator profit and loss statement, creator invoice management and creator break-even analysis.",
        links: [
          { text: "creator profit and loss statement", href: "/blog/creator-profit-loss-statement" },
          { text: "creator invoice management", href: "/blog/creator-invoice-management" },
          { text: "creator break-even analysis", href: "/blog/creator-break-even-analysis" },
        ],
      },
      { type: "heading", text: "Mistakes to avoid", id: "mistakes" },
      {
        type: "list",
        items: [
          "Tracking everything and acting on nothing.",
          "Watching follower count instead of views, saves and revenue.",
          "Mixing metric definitions across platforms into one total.",
          "Counting pending affiliate commissions as income.",
          "Never recording expenses, so you don't know your real earnings.",
        ],
      },
      {
        type: "paragraph",
        text: "For deciding which individual pieces of content are working, see creator content analytics and the 30-post content performance audit; for connecting content to time and money, creator content ROI.",
        links: [{ text: "creator content analytics", href: "/blog/creator-content-analytics" }, { text: "30-post content performance audit", href: "/blog/content-performance-audit" }, { text: "creator content ROI", href: "/blog/creator-content-roi" }],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A good dashboard is small, updated regularly and tied to decisions. Start with one sheet and the five areas above, review it weekly and monthly, and let it guide what you create, which income streams you grow and what you charge. Add expenses to see your real earnings with creator business expenses.",
        links: [{ text: "creator business expenses", href: "/blog/creator-business-expenses-india" }],
      },
    ],
    faqs: [
      {
        question: "What should a creator analytics dashboard include?",
        answer:
          "Audience growth and demographics, content performance by format, owned channels such as email and community, revenue by stream, and the brand-deal pipeline.",
      },
      {
        question: "How often should creators review analytics?",
        answer: "A short weekly check, a monthly review of averages and revenue, and a quarterly review of trends, rates and plans works for most creators.",
      },
      {
        question: "Do I need a paid analytics tool?",
        answer:
          "Not at first. A spreadsheet updated from native platform insights, your email tool and your invoices is enough. Tools help once you're managing many platforms or a team.",
      },
    ],
  },
];
