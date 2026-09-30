import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_FACTS_REVIEWED, CREATOR_LAYER_7_PUBLISHED as PUBLISHED, SOURCES } from "@/content/creator-resources/shared";

/**
 * Video craft (650–699 layer): storytelling (677 frameworks merged in),
 * thumbnails (683 psychology merged in) and titles. Hooks, scripts,
 * structure and retention (674–675, 678–681) stay in their existing guides.
 */
export const videoCraftPosts: BlogPost[] = [
  {
    slug: "creator-storytelling",
    category: "Creator Resources",
    title: "Creator Storytelling: How to Turn Information Into Content People Remember",
    seoTitle: "Creator Storytelling: Make Information Content People Remember",
    excerpt:
      "How creators use storytelling to make information stick: the building blocks (character, stakes, tension, change), seven storytelling frameworks for Reels, Shorts and YouTube, how to find stories in everyday material, and storytelling for educators, brands and regional audiences.",
    metaDescription:
      "Storytelling for creators: character, stakes, tension and change, seven frameworks for Reels, Shorts and YouTube, finding stories in everyday material and ethics.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "15 min read",
    tags: ["creator storytelling", "storytelling for content creators", "storytelling frameworks", "storytelling for Reels", "YouTube storytelling", "story-based content"],
    related: ["how-to-write-video-scripts", "short-form-video-hooks", "creator-content-frameworks"],
    body: [
      {
        type: "paragraph",
        text: "Facts are easy to forget; stories aren't. \"Emergency funds matter\" slides past. \"My friend's laptop died a week before her placement interview, and she had ₹900 in her account\" sticks. Storytelling isn't only for vloggers and filmmakers. Educators, reviewers, founders and even UGC creators use it to turn information into something people remember and share.",
      },
      {
        type: "paragraph",
        text: "This guide covers the building blocks of creator storytelling and seven frameworks for short-form and long-form video. For script structure and wording, see how to write video scripts; for openings, see short-form video hooks.",
        links: [
          { text: "how to write video scripts", href: "/blog/how-to-write-video-scripts" },
          { text: "short-form video hooks", href: "/blog/short-form-video-hooks" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creator storytelling means presenting information through a character, a situation with stakes, tension and a change, so viewers care about the outcome. Use a real person (you, a viewer with permission, a composite you label as such), make the stakes clear early, build tension with a problem or question, and show what changed. Frameworks such as problem-attempt-result, before-during-after, the mistake story, the mini hero's journey and the open loop give that shape to Reels, Shorts and YouTube videos. Keep stories honest: never invent results or pass off fiction as fact.",
      },
      { type: "heading", text: "The four building blocks", id: "blocks" },
      {
        type: "table",
        headers: ["Block", "Question", "Example (personal finance)"],
        rows: [
          ["Character", "Who is this about?", "A first-job employee in Pune"],
          ["Stakes", "What could they gain or lose?", "Missing rent after an emergency"],
          ["Tension", "What's the problem or question?", "No savings, a sudden expense"],
          ["Change", "What's different at the end?", "A simple emergency fund system"],
        ],
      },
      {
        type: "paragraph",
        text: "Remove any block and the story weakens: without stakes nobody cares, without tension nothing happens, without change there's no payoff.",
      },
      { type: "heading", text: "Seven storytelling frameworks", id: "frameworks" },
      {
        type: "table",
        headers: ["Framework", "Shape", "Best for"],
        rows: [
          ["1. Problem-attempt-result", "Problem → what was tried → what happened", "Tutorials, reviews"],
          ["2. Before-during-after", "Starting point → process → outcome", "Transformations, projects"],
          ["3. The mistake story", "\"I got this wrong\" → cost → lesson", "Education, trust-building"],
          ["4. Mini hero's journey", "Ordinary life → challenge → help or tool → change", "Longer videos, founder stories"],
          ["5. Open loop", "Pose a question early, answer at the end", "Retention on YouTube"],
          ["6. Contrast", "Expectation vs reality", "Myths, reviews"],
          ["7. The one moment", "One specific scene that captures the idea", "Short-form, emotional topics"],
        ],
      },
      { type: "subheading", text: "Short-form examples (illustrative)" },
      {
        type: "template",
        label: "The mistake story (Reel, 35 sec)",
        text: "\"I lost ₹12,000 on my first freelance project.\" (stakes)\n\"I didn't ask for an advance and the client disappeared.\" (tension)\n\"Now I ask for 50% upfront, and here's the exact message I send.\" (change + lesson)",
      },
      {
        type: "template",
        label: "Before-during-after (Short, 45 sec)",
        text: "Before: cracked balcony garden, dead plants\nDuring: three changes, shown quickly\nAfter: same balcony, six weeks later, same camera angle",
      },
      { type: "subheading", text: "Long-form example" },
      {
        type: "template",
        label: "Mini hero's journey (YouTube, 12 min)",
        text: "Ordinary: \"I was spending ₹40,000 a year on subscriptions I didn't use.\"\nChallenge: \"I tried to cancel everything for 30 days.\"\nHelp: the spreadsheet and the rule that made it work\nSetbacks: two services I had to restart, and why\nChange: what I saved and what I kept\nInvitation: download the tracker (lead magnet)",
      },
      { type: "heading", text: "Find stories in everyday material", id: "sources" },
      {
        type: "list",
        items: [
          "Your own mistakes, experiments and firsts.",
          "Audience questions (with permission if you share someone's story).",
          "Behind the scenes of making your content or running your business.",
          "Customer or client stories, anonymised where needed.",
          "History and origin stories in your niche.",
        ],
      },
      { type: "heading", text: "Storytelling for different creators", id: "types" },
      {
        type: "table",
        headers: ["Creator", "Storytelling angle"],
        rows: [
          ["Educator", "Start with a student's confusion, end with clarity"],
          ["Reviewer", "\"Here's the day this product earned its place\""],
          ["Founder", "The decision that almost went wrong"],
          ["UGC creator", "A relatable before moment, product in real use, honest after"],
          ["Regional-language creator", "Local settings, family and community stories"],
        ],
      },
      { type: "heading", text: "Stories in sponsored content", id: "sponsored" },
      {
        type: "paragraph",
        text: "Stories make sponsored content feel natural when the product genuinely plays a part in your story. Don't invent situations to fit a brief, don't fake transformations, and disclose the sponsorship clearly at the start. Creator audience trust covers authenticity in sponsored content.",
      },
      {
        type: "paragraph",
        text: "Trust: creator audience trust.",
        links: [{ text: "creator audience trust", href: "/blog/creator-audience-trust-sponsored-content" }],
      },
      { type: "heading", text: "Honesty rules", id: "honesty" },
      {
        type: "list",
        items: [
          "Label composite or hypothetical stories as such.",
          "Don't exaggerate results or timelines.",
          "Get permission before sharing someone else's story; anonymise details.",
          "Keep AI-generated scenes labelled where they could be mistaken for real.",
        ],
      },
      {
        type: "paragraph",
        text: "AI labelling: AI disclosure for creators.",
        links: [{ text: "AI disclosure for creators", href: "/blog/ai-disclosure-creators" }],
      },
      { type: "heading", text: "Worked example: the same information, told two ways", id: "example" },
      {
        type: "template",
        label: "Information version (illustrative)",
        text: "\"Emergency funds should cover 3–6 months of expenses. Keep them in a liquid account.\"\n\nStory version (the one moment framework)\n\"Rohan's bike broke down the week his rent was due. Repair: ₹14,000. Savings: ₹3,000.\nHe borrowed from a friend and spent three months paying it back.\nHere's the fund he built afterwards, and how he did it on a ₹28,000 salary.\"\n(Hypothetical example, labelled as such in the video)",
      },
      {
        type: "paragraph",
        text: "The facts are identical. The second version gives viewers a person, stakes and a change, which is why they remember it and share it.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Long backstory before the stakes are clear.",
          "Stories with no change or payoff.",
          "Every video forced into the same framework.",
          "Invented or exaggerated stories.",
          "Stories that overshadow the useful information.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Storytelling turns information into something people remember. Give every story a character, stakes, tension and change, choose a framework that fits the format, find stories in everyday material and keep them honest.",
      },
    ],
    faqs: [
      {
        question: "What is storytelling for content creators?",
        answer:
          "Presenting information through a character, clear stakes, tension and a change, so viewers care about the outcome and remember the lesson.",
      },
      {
        question: "What storytelling frameworks work for Reels and Shorts?",
        answer:
          "Short frameworks such as the mistake story, before-during-after, contrast and the one moment work well because they establish stakes and payoff quickly.",
      },
      {
        question: "Can educational creators use storytelling?",
        answer:
          "Yes. Starting with a real or clearly hypothetical person's confusion and ending with clarity makes explanations more memorable.",
      },
    ],
  },
  {
    slug: "creator-thumbnail-strategy",
    category: "Creator Resources",
    title: "Creator Thumbnail Strategy: How to Design Thumbnails That Earn Clicks",
    seoTitle: "Creator Thumbnail Strategy: Design Thumbnails That Earn Clicks",
    excerpt:
      "How creators design thumbnails that earn honest clicks: the job of a thumbnail, the psychology of attention (faces, contrast, curiosity, clarity), title-thumbnail pairing, mobile legibility, testing with YouTube's Test & Compare where available, and avoiding clickbait.",
    metaDescription:
      "Thumbnail strategy for creators: what thumbnails must do, attention psychology, pairing with titles, mobile legibility, testing thumbnails and avoiding clickbait.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    updatedAt: "2026-09-29",
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "14 min read",
    tags: ["thumbnail strategy", "YouTube thumbnail tips", "thumbnail psychology", "thumbnails that get clicks", "YouTube thumbnail design", "test thumbnails", "thumbnail design outsourcing", "hire thumbnail designer"],
    related: ["creator-title-strategy", "creator-ab-testing", "youtube-seo-for-creators"],
    body: [
      {
        type: "paragraph",
        text: "A thumbnail has one job: make the right viewer want to click, and make the video deliver what the thumbnail promised. Thumbnails that win the click but disappoint the viewer hurt a channel more than they help, because people leave quickly and stop trusting what you show them.",
      },
      {
        type: "paragraph",
        text: "This guide covers designing and testing thumbnails, mainly for YouTube, with notes for covers on other platforms. Writing the title that pairs with it is covered in creator title strategy; testing methods in creator A/B testing.",
        links: [
          { text: "creator title strategy", href: "/blog/creator-title-strategy" },
          { text: "creator A/B testing", href: "/blog/creator-ab-testing" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A strong thumbnail shows one clear idea that complements (not repeats) the title, is readable at phone size, uses contrast and a clear focal point (often a face showing genuine emotion, or the object the video is about), and creates honest curiosity the video pays off. Design for mobile first, keep text to a few words, stay consistent enough to be recognisable, and test alternatives, using YouTube's Test & Compare where it's available for your channel.",
      },
      { type: "heading", text: "What a thumbnail must do", id: "job" },
      {
        type: "table",
        headers: ["Job", "Means"],
        rows: [
          ["Stop the scroll", "Stand out among other thumbnails in feed and search"],
          ["Communicate the idea", "One glance explains what the video is about"],
          ["Create honest curiosity", "A reason to click that the video fulfils"],
          ["Match the viewer", "Look like something this audience wants"],
          ["Build recognition", "Consistent enough that subscribers spot your videos"],
        ],
      },
      { type: "heading", text: "Attention psychology to test", id: "psychology" },
      {
        type: "paragraph",
        text: "These are principles creators commonly test, not guarantees; your audience decides.",
      },
      {
        type: "table",
        headers: ["Principle", "What it looks like", "Watch out for"],
        rows: [
          ["Faces and emotion", "A clear face with a genuine expression", "Exaggerated shock faces that don't match the video"],
          ["Contrast", "Bright subject against a simple background", "Clutter that makes nothing stand out"],
          ["One focal point", "A single object, result or comparison", "Five competing elements"],
          ["Curiosity gap", "Show the situation, not the answer", "Promising something the video doesn't show"],
          ["Before/after or comparison", "Two states side by side", "Fake or edited results"],
          ["Minimal text", "Three to five words that add to the title", "Text that repeats the title exactly"],
        ],
      },
      { type: "heading", text: "Pair thumbnail and title", id: "pairing" },
      {
        type: "paragraph",
        text: "The title and thumbnail should work as a pair: the title states the topic; the thumbnail adds emotion, outcome or curiosity.",
      },
      {
        type: "table",
        headers: ["Title", "Weak thumbnail", "Strong thumbnail"],
        rows: [
          ["\"I tried the cheapest air fryer on Amazon\"", "Title text repeated on image", "The air fryer with a burnt samosa and a raised eyebrow"],
          ["\"How to make a budget on a ₹25,000 salary\"", "Generic calculator stock image", "A simple split of ₹25,000 into 4 boxes"],
          ["\"iPhone vs Android for a student in 2026\"", "Two phones, no context", "Two phones, one with \"₹\" price tag and a verdict face"],
        ],
      },
      { type: "heading", text: "Design for mobile", id: "mobile" },
      {
        type: "paragraph",
        text: "Most viewers see thumbnails at a small size on phones. Check yours at phone size before publishing: can you read the text, recognise the subject and understand the idea in a second? YouTube recommends 1280 × 720 pixels (16:9) for custom thumbnails.",
      },
      { type: "heading", text: "Consistency without sameness", id: "consistency" },
      {
        type: "paragraph",
        text: "Use a recognisable style (colours, font, framing) so subscribers spot your videos, but vary composition so every thumbnail doesn't look identical. Series can have a consistent template.",
      },
      { type: "heading", text: "Test thumbnails", id: "testing" },
      {
        type: "paragraph",
        text: "YouTube's Test & Compare lets eligible creators test up to three thumbnails (and titles) on long-form videos, choosing the winner by watch time rather than clicks alone. Where it isn't available, compare thumbnail styles across similar videos over time, changing one element at a time.",
      },
      {
        type: "paragraph",
        text: "Official: YouTube's A/B testing help page. Methods: creator A/B testing.",
        links: [
          { text: "YouTube's A/B testing help page", href: SOURCES.youtubeAbTesting },
          { text: "creator A/B testing", href: "/blog/creator-ab-testing" },
        ],
      },
      { type: "heading", text: "Read the metrics honestly", id: "metrics" },
      {
        type: "table",
        headers: ["Pattern", "Meaning"],
        rows: [
          ["High click-through, low retention", "Thumbnail over-promises"],
          ["Low click-through, high retention", "Great video, packaging not communicating it"],
          ["Low both", "Topic or audience mismatch"],
        ],
      },
      {
        type: "paragraph",
        text: "YouTube analytics for creators explains impressions click-through rate and retention.",
        links: [{ text: "YouTube analytics for creators", href: "/blog/youtube-analytics-for-creators" }],
      },
      { type: "heading", text: "Covers on other platforms", id: "covers" },
      {
        type: "paragraph",
        text: "Reels covers, Shorts frames and carousel first slides do a similar job on profile grids and search. Use readable text, a clear subject and consistent style; on Instagram, grid appearance also affects how brands see your profile. See Instagram creator portfolio.",
        links: [{ text: "Instagram creator portfolio", href: "/blog/instagram-creator-portfolio" }],
      },
      { type: "heading", text: "Working with a thumbnail designer", id: "designer" },
      {
        type: "paragraph",
        text: "Thumbnails are often the second thing creators outsource after editing, because they're a specialist skill that directly affects clicks. A good designer understands your audience and packaging, not just design software.",
      },
      {
        type: "list",
        items: [
          "Find designers through creators in your niche, portfolios of thumbnails for similar channels, and freelance marketplaces.",
          "Run a paid test: the same video and title brief to two or three designers.",
          "Brief each thumbnail with the title, the one idea the image must show, the key frame or photo, text (if any) and references.",
          "Agree the number of concepts per video (two or three lets you test), revision rounds and turnaround.",
          "Pay per thumbnail or a monthly retainer for a set number; get a quote for your format rather than relying on averages.",
          "Put ownership of final files in writing, and confirm fonts, stock images and any likeness used are properly licensed.",
          "Share the click-through results so the designer learns what works for your audience.",
        ],
      },
      {
        type: "paragraph",
        text: "The wider decision on what to delegate is in creator outsourcing.",
        links: [{ text: "creator outsourcing", href: "/blog/creator-outsourcing" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Thumbnails that repeat the title word for word.",
          "Tiny text unreadable on phones.",
          "Misleading images, fake results or faces unrelated to the video.",
          "Changing style every video, so subscribers don't recognise you.",
          "Judging thumbnails by click-through rate alone.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Good thumbnails earn honest clicks: one clear idea, readable at phone size, paired with the title, and delivered by the video. Test changes, read click-through alongside retention, and stay recognisable without becoming repetitive.",
      },
    ],
    faqs: [
      {
        question: "What makes a good YouTube thumbnail?",
        answer:
          "One clear idea that complements the title, readable at phone size, strong contrast and a clear focal point, and honest curiosity that the video delivers.",
      },
      {
        question: "Should thumbnails have text?",
        answer:
          "A few words that add to the title can help. Avoid repeating the title or using text too small to read on phones.",
      },
      {
        question: "How can creators test YouTube thumbnails?",
        answer:
          "Eligible creators can use YouTube's Test & Compare to test up to three thumbnails on long-form videos, with the winner chosen by watch time. Otherwise, compare styles across similar videos over time.",
      },
    ],
  },
  {
    slug: "creator-title-strategy",
    category: "Creator Resources",
    title: "Creator Title Strategy: How to Write Titles That Get Clicks and Search Traffic",
    seoTitle: "Creator Title Strategy: Titles That Get Clicks and Searches",
    excerpt:
      "How creators write titles that work for both search and browsing: the two jobs of a title, formulas that stay honest, balancing keywords with curiosity, titles on YouTube, Instagram, LinkedIn and newsletters, regional-language titles and testing.",
    metaDescription:
      "How creators write titles for search and clicks: the two jobs of a title, honest formulas, keywords vs curiosity, titles by platform, regional-language titles and testing.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["creator title strategy", "YouTube title tips", "how to write video titles", "titles for search", "clickable titles", "SEO titles for creators"],
    related: ["creator-thumbnail-strategy", "youtube-seo-for-creators", "creator-seo"],
    body: [
      {
        type: "paragraph",
        text: "A title has two audiences at once: people searching for something specific, and people browsing who need a reason to stop. Search rewards clarity and the words people type; browsing rewards curiosity and emotion. Good titles serve both, and never promise more than the content delivers.",
      },
      {
        type: "paragraph",
        text: "This guide covers writing titles across platforms. Pairing titles with thumbnails is covered in creator thumbnail strategy; YouTube search in depth in YouTube SEO for creators.",
        links: [
          { text: "creator thumbnail strategy", href: "/blog/creator-thumbnail-strategy" },
          { text: "YouTube SEO for creators", href: "/blog/youtube-seo-for-creators" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Write titles that state the topic in the words people search, then add a specific benefit, outcome or angle that makes browsers want to click. Put the main phrase early, keep it concise, avoid misleading claims, and make the title and thumbnail work as a pair rather than repeat each other. Adapt for each platform: YouTube titles serve search and suggested videos; Instagram captions and on-screen text serve social search; LinkedIn and newsletter headlines serve feed and inbox browsing. Test titles when you can.",
      },
      { type: "heading", text: "The two jobs of a title", id: "two-jobs" },
      {
        type: "table",
        headers: ["Job", "Serves", "Needs"],
        rows: [
          ["Be found", "Searchers", "The phrase people actually type"],
          ["Be chosen", "Browsers", "A specific benefit, result or curiosity"],
        ],
      },
      {
        type: "paragraph",
        text: "\"Budget\" is found; \"How I budget ₹30,000 a month in Bengaluru (real numbers)\" is found and chosen.",
      },
      { type: "heading", text: "Honest title formulas", id: "formulas" },
      {
        type: "table",
        headers: ["Formula", "Example (illustrative)"],
        rows: [
          ["How to [result] [constraint]", "How to start investing with ₹500 a month"],
          ["[Number] [things] for [audience]", "7 laptops for coding students under ₹60,000"],
          ["I tried [thing] for [time]", "I tried a 5 am routine for 30 days"],
          ["[A] vs [B]: [verdict angle]", "Mutual funds vs FD: which suits a first job?"],
          ["Why [common belief] is wrong", "Why your first credit card isn't a trap"],
          ["[Topic] explained in [time]", "GST for freelancers explained in 8 minutes"],
          ["The [mistake] that cost me [cost]", "The pricing mistake that cost me ₹40,000"],
        ],
      },
      { type: "heading", text: "Keywords vs curiosity", id: "balance" },
      {
        type: "list",
        items: [
          "Search-heavy content (tutorials, how-tos, comparisons): lead with the search phrase.",
          "Browse-heavy content (stories, opinions, entertainment): lead with the hook, keep the topic clear.",
          "Either way: no clickbait that the content can't back up.",
        ],
      },
      {
        type: "paragraph",
        text: "Social search for creators and YouTube keyword research explain how to find the phrases people use.",
      },
      {
        type: "paragraph",
        text: "Phrases: social search for creators and YouTube keyword research.",
        links: [
          { text: "social search for creators", href: "/blog/social-search-for-creators" },
          { text: "YouTube keyword research", href: "/blog/youtube-keyword-research" },
        ],
      },
      { type: "heading", text: "Titles by platform", id: "platforms" },
      {
        type: "table",
        headers: ["Platform", "Where the \"title\" lives", "Tips"],
        rows: [
          ["YouTube", "Video title (up to 100 characters)", "Main phrase early; key idea visible in the first part on mobile"],
          ["YouTube Shorts", "Title plus on-screen text", "Short and clear; say it in the first seconds"],
          ["Instagram", "First line of caption and on-screen text", "Put keywords in the first line; readable cover text"],
          ["LinkedIn", "First two lines before \"see more\"", "The claim or story hook in line one"],
          ["Newsletter", "Subject line", "Specific benefit, not vague teasers"],
          ["Blog or website", "Page title and H1", "Search phrase plus clear value"],
        ],
      },
      { type: "heading", text: "Regional-language titles", id: "regional" },
      {
        type: "paragraph",
        text: "Match the language and script your audience searches in: native script, Roman-script Hinglish or Tanglish, or a mix. Check search suggestions in your language before choosing. Regional creator growth in India covers this.",
      },
      {
        type: "paragraph",
        text: "Regional: regional creator growth in India.",
        links: [{ text: "regional creator growth in India", href: "/blog/regional-creator-growth-india" }],
      },
      { type: "heading", text: "Test titles", id: "testing" },
      {
        type: "paragraph",
        text: "YouTube's Test & Compare lets eligible creators test titles on long-form videos, with the winner chosen by watch time. Elsewhere, compare title styles across similar posts and change one element at a time. Creator A/B testing covers method.",
      },
      {
        type: "paragraph",
        text: "Testing: creator A/B testing.",
        links: [{ text: "creator A/B testing", href: "/blog/creator-ab-testing" }],
      },
      { type: "heading", text: "Title checklist", id: "checklist" },
      {
        type: "template",
        label: "Before publishing",
        text: "☐ Main search phrase included, early\n☐ Specific benefit, number or angle\n☐ Works with the thumbnail (doesn't repeat it)\n☐ Honest: the content delivers it\n☐ Readable on mobile; key idea in the first words\n☐ Language and script match how the audience searches",
      },
      { type: "heading", text: "Worked examples: rewriting weak titles", id: "examples" },
      {
        type: "table",
        headers: ["Weak title", "Problem", "Stronger title (illustrative)"],
        rows: [
          ["\"My thoughts on investing\"", "Vague; nothing to search", "\"Index funds explained for your first salary\""],
          ["\"SHOCKING phone review!!!\"", "Clickbait, no topic", "\"I used a ₹12,000 phone for 30 days: honest review\""],
          ["\"Vlog 47\"", "Meaningless to non-subscribers", "\"One day in Hampi on a ₹2,000 budget\""],
          ["\"Resume tips\"", "Generic", "\"3 resume mistakes that get freshers rejected\""],
          ["\"Diwali special\"", "No promise", "\"5 Diwali sweets you can make in 30 minutes\""],
        ],
      },
      { type: "heading", text: "Titles for series", id: "series" },
      {
        type: "paragraph",
        text: "Series need titles that work alone and together: a consistent prefix or suffix (\"Budget Kitchen, Ep. 4: Rajma in 20 minutes\") helps regulars spot new episodes, while the specific topic still serves search.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Clever titles nobody searches for.",
          "Keyword-stuffed titles nobody wants to click.",
          "Clickbait that the video doesn't deliver.",
          "Identical title and thumbnail text.",
          "Changing titles constantly without learning anything.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A good title is found and chosen. State the topic in searchers' words, add a specific reason to click, keep it honest, pair it with the thumbnail, adapt to each platform and test when you can.",
      },
    ],
    faqs: [
      {
        question: "How do creators write good video titles?",
        answer:
          "State the topic in the words people search, add a specific benefit or angle, keep it concise and honest, and make it work alongside the thumbnail.",
      },
      {
        question: "Should YouTube titles include keywords?",
        answer:
          "Yes, especially for search-driven videos: put the main phrase early. For entertainment or story videos, lead with the hook while keeping the topic clear.",
      },
      {
        question: "How long can a YouTube title be?",
        answer:
          "YouTube allows up to 100 characters, but the first words matter most because titles are often truncated on mobile.",
      },
    ],
  },
];
