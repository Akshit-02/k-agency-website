import type { BlogPost } from "@/content/blog";

/**
 * SMM batch 02, writer B (2026-11-12): Instagram Reels strategy (22), a monthly Reels plan (33), the monthly
 * social media content calendar (31) and managing several accounts for one brand (30).
 * Platform facts checked November 2026; sources log: smm-sources-smm-planning.md in the batch scratchpad.
 */

const AUTHOR = { name: "Kudozz Strategy Team", role: "Agency Team" };
const PUBLISHED = "2026-11-12";
const REVIEWED = "November 2026";

const SRC = {
  igTrialReels: "https://help.instagram.com/1013292530224018",
  metaTrialReelsNews: "https://about.fb.com/news/2024/12/trial-reels-try-content-non-followers-first-see-what-perfoms-best/",
  igInsights: "https://help.instagram.com/788388387972460",
  igWatchTime: "https://creators.instagram.com/blog/creator-bundle-trends-editing-gifts",
  igRanking: "https://about.instagram.com/blog/announcements/instagram-ranking-explained",
  igOriginality: "https://creators.instagram.com/blog/recommendations-and-originality",
  igAudio: "https://help.instagram.com/329208821595430",
  metaBusinessSuite: "https://www.facebook.com/business/tools/meta-business-suite",
  metaPartnerAccess: "https://www.facebook.com/business/help/1717412048538897",
  linkedinAdminRoles: "https://www.linkedin.com/help/linkedin/answer/a541981",
};

export const smmPlanningPosts: BlogPost[] = [
  {
    slug: "instagram-reels-strategy-for-brands",
    category: "Social Media Management",
    title: "How to Build an Instagram Reels Strategy Around Your Products, Customers and Brand Story",
    seoTitle: "Instagram Reels Strategy for Brands: A Practical Guide",
    excerpt:
      "How brands can plan Instagram Reels around product education, customer questions, founder and behind-the-scenes video, creators and recurring series, then test with Trial Reels and read the right insights.",
    metaDescription:
      "An Instagram Reels strategy for brands: what to make from products, customers and your story, a Reels framework, Trial Reels testing and which insights to read.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "10 min read",
    tags: [
      "Instagram Reels strategy for brands",
      "Reels marketing for business",
      "Instagram Reels for brands",
      "Reels content strategy",
      "Instagram Trial Reels for brands",
    ],
    related: ["instagram-reels-influencer-marketing", "social-media-content-repurposing", "social-media-kpis"],
    hero: {
      src: "/blog/brand-guides/instagram-reels-strategy-for-brands.svg",
      alt: "Three sources of brand Reels, product, customer and story, feeding recurring series, then testing and monthly review",
    },
    body: [
      {
        type: "paragraph",
        text: "Your team posted eleven Reels last quarter. Two did well, a quick product demo and a clip of the founder answering a customer's question, and nobody is sure why. The rest were a mix of trending audio, offer announcements and a festive greeting. Everyone agrees Reels matter. What's missing is a reason for each one to exist.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A brand Reels strategy starts from three sources you already own: your products, your customers' questions and your brand story. Turn each into a few repeatable formats, such as demos, answers to real questions, founder explainers and behind-the-scenes clips, then run the best ones as recurring series. Add creator-led Reels where a third-party voice helps. Test uncertain ideas with Trial Reels, read watch time and shares alongside views, and change the plan each month based on what you learn.",
      },
      { type: "heading", text: "Start with the job Reels do for your brand", id: "job-of-reels" },
      {
        type: "paragraph",
        text: "Instagram's own explanation of ranking, published by Adam Mosseri in May 2023, says Reels are designed to help people discover new things, and that most Reels people see come from accounts they don't follow. That shapes the brief. A Reel has to make sense to someone who has never heard of you, in the first few seconds, often with the sound off. Inside jokes, unexplained product names and offers without context work poorly with strangers.",
        links: [{ text: "Instagram's own explanation of ranking", href: SRC.igRanking }],
      },
      {
        type: "paragraph",
        text: "The same explainer says Instagram aims to show fewer low-resolution or watermarked Reels, and fewer Reels that have already been posted on Instagram. In April 2024 Instagram also said that when it finds identical pieces of content, it will only recommend the original. For a brand, the practical takeaway is simple: make original Reels for Instagram rather than reposting exports from other apps with their logos on them. That's the extent of what we'd treat as confirmed. Claims about posting at a magic hour or a fixed number of hashtags are not things Instagram has published, so we don't plan around them.",
        links: [{ text: "Instagram also said", href: SRC.igOriginality }],
      },
      {
        type: "paragraph",
        text: "If you're deciding how Reels fit into a wider Instagram plan alongside Stories, carousels and your profile, start with what a professional Instagram management strategy includes. This guide stays on Reels.",
        links: [{ text: "what a professional Instagram management strategy includes", href: "/blog/instagram-management-for-business" }],
      },
      { type: "heading", text: "Build Reels from your products, customers and story", id: "three-sources" },
      {
        type: "paragraph",
        text: "Most brands have more Reel material than they think. It sits in product details, in the questions your sales and support teams answer every day, and in how the business actually works. Group it into a few types.",
      },
      { type: "subheading", text: "Product education and demonstrations" },
      {
        type: "paragraph",
        text: "Show the product doing its job: how it's used, what it looks like at real size, what the texture or finish is, how long a step takes. Demonstrations answer the question a still image can't. Keep claims to what you can substantiate, and show the result rather than describing it.",
      },
      { type: "subheading", text: "Customer questions" },
      {
        type: "paragraph",
        text: "Every repeated question in your DMs, comments, reviews or sales calls is a Reel brief. 'Does this work on curly hair?', 'Will it fit a 6-seater table?', 'How is this different from the cheaper one?' Answering on camera helps the person who asked and everyone who was wondering the same thing.",
      },
      { type: "subheading", text: "Founder-led and behind-the-scenes" },
      {
        type: "paragraph",
        text: "A founder explaining why a product is made a certain way, a packing table on a busy day, a quality check, a supplier visit: these show the people and decisions behind the brand. They don't need polish. They need someone who can talk naturally and a clear point in each clip.",
      },
      { type: "subheading", text: "Brand storytelling" },
      {
        type: "paragraph",
        text: "Storytelling Reels carry the bigger narrative: why the brand started, what problem it set out to fix, a product's journey from idea to shelf. Use them sparingly and make each one specific. A story about one decision lands better than a general montage about 'our passion'.",
      },
      { type: "heading", text: "Where creator-led Reels fit", id: "creator-led" },
      {
        type: "paragraph",
        text: "Creators add something your own account can't: a voice the audience already trusts, and a real-life setting. They work well for first impressions of a product, honest comparisons and routines. Choose creators whose audience matches yours, which is what creator discovery is for, and agree in writing whether you can reshare their Reels on your account. Instagram Reels influencer marketing covers briefing creators, hooks and campaign measurement in depth.",
        links: [
          { text: "creator discovery", href: "/services/creator-discovery" },
          { text: "Instagram Reels influencer marketing", href: "/blog/instagram-reels-influencer-marketing" },
        ],
      },
      { type: "heading", text: "A Reels content framework", id: "framework" },
      {
        type: "paragraph",
        text: "The table below maps each Reel type to the job it does and what to watch. The examples are hypothetical, for a small cookware brand selling online in India.",
      },
      {
        type: "table",
        headers: ["Reel type", "Job it does", "Hypothetical example", "What to watch"],
        rows: [
          ["Product demonstration", "Shows how it works and what it looks like in use", "Making a dosa on the cast-iron tawa, from seasoning to flip", "Average watch time, saves"],
          ["Customer question", "Removes a doubt that stops purchase", "'Can I use this tawa on induction?' answered in 20 seconds", "Shares, comments with follow-up questions"],
          ["Comparison or myth", "Helps people choose", "Cast iron vs non-stick: which one for daily rotis?", "Shares, profile visits"],
          ["Founder-led", "Builds trust in the people behind the brand", "The founder explains why the handle is riveted, not welded", "Watch time, follows"],
          ["Behind-the-scenes", "Shows process and care", "Pre-seasoning batch at the workshop", "Views from non-followers, comments"],
          ["Creator-led", "Adds a third-party voice in a real kitchen", "A home cook's first week with the pan, reshared with permission", "Shares, saves, enquiries"],
          ["Storytelling", "Carries the brand's reason to exist", "Why the founder started with one product, not twenty", "Watch time, follows"],
        ],
      },
      { type: "heading", text: "Turn good ideas into recurring series", id: "recurring-series" },
      {
        type: "paragraph",
        text: "A single good Reel is luck. A series is a system. When a type works, give it a name, a recognisable opening and a regular slot: 'Ask the founder' every Thursday, 'One pan, three dishes' each fortnight, a monthly 'What we changed and why'. Series make planning faster because the format is decided and only the topic changes. They also give viewers a reason to follow, since they know what's coming.",
      },
      {
        type: "paragraph",
        text: "Two or three series are enough for most brands. Keep space around them for launches, timely moments and one-off ideas. How to fill a month without repeating yourself is covered in how to plan a month of Instagram Reels.",
        links: [{ text: "how to plan a month of Instagram Reels", href: "/blog/instagram-reels-content-plan" }],
      },
      { type: "heading", text: "Test before you commit: Trial Reels", id: "trial-reels" },
      {
        type: "paragraph",
        text: "Trial Reels let you show a Reel to people who don't follow you before deciding whether to share it with everyone. At the time of writing (November 2026), Instagram's Help Centre says you need a professional account to use them, that followers won't see a trial in Feed or the Reels tab (though some may come across it in DMs or on pages for the same audio), and that insights appear within 24 hours. You can then share it to everyone, or switch on automatic sharing so Instagram shares it if it gets a lot of views within the first 72 hours. Meta announced the feature in December 2024.",
        links: [
          { text: "Instagram's Help Centre", href: SRC.igTrialReels },
          { text: "Meta announced the feature", href: SRC.metaTrialReelsNews },
        ],
      },
      {
        type: "paragraph",
        text: "For a brand, trials are useful for questions like: does a question hook beat a product shot in the first second? Does the founder or a team member explain this better? Does Hindi outperform English for this topic? Change one thing at a time and compare trials with other trials, not with Reels your followers saw. Avoid trialling time-bound content such as a launch announcement, which needs your followers on the day. Our creator-side guide to Instagram Trial Reels has a step-by-step testing routine you can adapt.",
        links: [{ text: "Instagram Trial Reels", href: "/blog/instagram-trial-reels" }],
      },
      { type: "heading", text: "Reading Reels performance", id: "performance" },
      {
        type: "paragraph",
        text: "Instagram's Help Centre, at the time of writing, defines views as the number of times content was played or displayed, viewers as the unique accounts that saw a Reel on screen at least once, and interactions as actions such as likes, comments, saves and shares. Instagram added total watch time and average watch time to Reels insights in April 2023. Metric names and layouts change, so check what your account shows each month rather than relying on an old screenshot.",
        links: [
          { text: "Instagram's Help Centre", href: SRC.igInsights },
          { text: "added total watch time and average watch time", href: SRC.igWatchTime },
        ],
      },
      {
        type: "paragraph",
        text: "Views alone tell you little. Read each metric against the question it answers:",
      },
      {
        type: "list",
        items: [
          "Did the opening hold people? Average watch time compared with the Reel's length.",
          "Was it worth passing on? Shares, especially for educational and comparison Reels.",
          "Was it worth keeping? Saves, for tutorials and how-tos.",
          "Did it reach new people? The split between followers and non-followers, where shown.",
          "Did it move people closer to buying? Profile visits, link taps or enquiries, where you track them.",
          "Is the series improving? The same metrics across five or six episodes, not one.",
        ],
      },
      {
        type: "paragraph",
        text: "Write one sentence per Reel on why you think it did well or badly, and decide whether to repeat, change one variable or drop the format. Which numbers matter for which business goal is covered in social media KPIs by goal.",
        links: [{ text: "social media KPIs by goal", href: "/blog/social-media-kpis" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Treating Reels as ads: an offer with a price and a 'shop now' does little for people who've never heard of you.",
          "Chasing every trending audio, even when it has nothing to do with the brand.",
          "Reposting videos from other apps with their watermark still on.",
          "Making one-off Reels each week instead of building two or three series.",
          "Burying the point: a logo intro or a slow pan before anything happens.",
          "Judging a format on one Reel, or on views without watch time and shares.",
          "Resharing a creator's or customer's video without written permission.",
        ],
      },
      { type: "heading", text: "Practical recommendations", id: "recommendations" },
      {
        type: "list",
        items: [
          "List your 20 most common customer questions. That's your first month of ideas.",
          "Pick two series to run for at least six weeks before judging them.",
          "Find one person on the team who is comfortable on camera, and plan around their time.",
          "Collect raw footage every week: packing, making, testing, unboxing. Editing is easier than shooting from scratch.",
          "Use Trial Reels for one deliberate test a fortnight.",
          "Review Reels monthly with watch time, shares and saves side by side, and change something each time.",
        ],
      },
      {
        type: "paragraph",
        text: "If you need help scripting and editing Reels from your own or creators' footage, this is what our Reels and short-form video service covers. You can also see how we work with brands more broadly.",
        links: [
          { text: "our Reels and short-form video service", href: "/services/social-media-management#reels-short-form-video" },
          { text: "how we work with brands", href: "/for-brands" },
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Start with what you already know: your products, the questions customers ask and the story behind the business. Turn the strongest ideas into two or three named series, test uncertain ones with Trial Reels, and judge them on watch time, shares and saves rather than views alone. A Reels strategy is mostly a habit of making, reviewing and adjusting every month.",
      },
    ],
    faqs: [
      {
        question: "How many Reels should a brand post each week?",
        answer:
          "There's no published number that works for every account, and Instagram hasn't given one. Choose a pace your team can keep up with good quality for at least three months. Work it out from capacity: count the hours your team really has for scripting, filming and editing, start with a weekly number that fits inside them, and build it around two recurring series. Review after a month. Consistency and a clear idea in each Reel matter more than volume.",
      },
      {
        question: "Do brand Reels need a face on camera?",
        answer:
          "Not always. Hands-only demos, process clips and text-led explainers can work well. A recognisable person, such as the founder or a team member, does help with trust and with series that answer questions. If nobody on the team is comfortable on camera, creators or voiceovers can fill the gap.",
      },
      {
        question: "Can we use trending audio on a business account?",
        answer:
          "Be careful. Instagram's Help Centre says licensed audio in posts can be muted if agreements with rights holders change. Check which tracks your account can use, prefer original audio or royalty-free sound where possible, and don't add commercial music to a Reel you plan to run as an ad without checking the licence.",
      },
      {
        question: "Should we post the same Reel on YouTube Shorts and Facebook?",
        answer:
          "You can adapt it, but export a clean version without another app's watermark and adjust the caption, text and opening for each platform. Instagram has said it shows fewer watermarked Reels and recommends the original when it finds identical content. Our guide to social media content repurposing explains how to adapt rather than copy.",
      },
      {
        question: "How long before we know whether our Reels strategy is working?",
        answer:
          "Give a series six to eight weeks before judging it, since single Reels vary a lot. Look for direction: rising average watch time, more shares and saves, and more profile visits or enquiries. If none of these move after two months, change the format or topic rather than posting more of the same.",
      },
    ],
  },
  {
    slug: "instagram-reels-content-plan",
    category: "Social Media Management",
    title: "How to Plan a Month of Instagram Reels Without Repeating the Same Ideas",
    seoTitle: "Instagram Reels Content Plan: 30 Days of Ideas for Brands",
    excerpt:
      "A practical way to plan a month of brand Reels: content categories to rotate, an idea bank that refills itself, creative variations of one idea, a 30-day plan by week, batching and a monthly review.",
    metaDescription:
      "Plan a month of Instagram Reels for your brand: categories to rotate, an idea bank method, creative variations, a 30-day plan by week and a monthly review.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "8 min read",
    tags: [
      "Instagram Reels content planning",
      "Reels content calendar",
      "Reels ideas for brands",
      "monthly Reels plan",
      "Instagram Reels content plan",
    ],
    related: ["social-media-content-workflow", "instagram-reels-influencer-marketing", "ugc-content-usage-rights"],
    hero: {
      src: "/blog/brand-guides/instagram-reels-content-plan.svg",
      alt: "A four-week Reels plan: idea bank, categories, variations and batching, ending in a monthly review",
    },
    body: [
      {
        type: "paragraph",
        text: "It's the 26th and next month's Reels plan is a blank sheet. Last month's ideas were 'something for the sale', 'a trending audio' and 'the founder talking about something'. Three weeks in, the team was repeating the same product shot with a new caption. The problem isn't creativity. It's that nobody kept a running list of ideas, and nobody decided which types of Reel the month needed.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Plan a month of Reels by rotating five or six content categories, such as education, demos, founder clips, customer questions, behind-the-scenes and UGC, and filling them from an idea bank you add to every week. Stretch each strong idea into variations with a different hook, format or presenter. Map ideas to a four-week plan, batch the scripting and shooting, and review the month to decide what to repeat, change or drop.",
      },
      { type: "heading", text: "Before you plan: inputs for the month", id: "inputs" },
      {
        type: "paragraph",
        text: "This guide is about filling a month. It assumes you already know why you're on Reels and which series you run. If not, read how to build an Instagram Reels strategy first. Then gather four inputs before the planning meeting:",
        links: [{ text: "how to build an Instagram Reels strategy", href: "/blog/instagram-reels-strategy-for-brands" }],
      },
      {
        type: "list",
        items: [
          "The month's business priorities: launches, offers, stock you need to move, festive moments.",
          "What footage exists or can be shot: product clips, team availability, customer or creator videos you have rights to.",
          "Who can present: the founder's available hours, a team member who is comfortable on camera.",
          "Last month's learnings: which Reels held attention, got shared or saved, and which didn't.",
        ],
      },
      { type: "heading", text: "Six Reels categories to rotate", id: "categories" },
      {
        type: "paragraph",
        text: "Repetition usually comes from making the same type of Reel every time. Rotating categories forces variety and covers different stages of a customer's thinking.",
      },
      {
        type: "table",
        headers: ["Category", "What it is", "Where ideas come from", "Production need"],
        rows: [
          ["Educational", "Teaches something useful about the problem your product solves", "Search queries, sales calls, category myths", "Script, simple shoot or screen recording"],
          ["Product demo", "Shows the product in use, at real size and speed", "Product features, returns reasons, launch briefs", "Product, hands, good light"],
          ["Founder or team", "A person explains a decision, a standard or a lesson", "Founder notes, team meetings, 'why we did this'", "A presenter for 20 to 30 minutes"],
          ["Customer questions", "Answers one real question per Reel", "DMs, comments, reviews, support tickets", "Script, presenter or text-led edit"],
          ["Behind-the-scenes", "Process, packing, testing, sourcing, the office", "Whatever happens this week", "Phone footage collected through the month"],
          ["UGC and creator", "Customers or creators using the product", "Tagged posts, creator deliverables, reviews", "Written permission and the original file"],
        ],
      },
      { type: "heading", text: "Build an idea bank that refills itself", id: "idea-bank" },
      {
        type: "paragraph",
        text: "An idea bank is a shared sheet where anyone can drop a Reel idea at any time, so planning starts from 40 options, not zero. Feed it from places that produce ideas without extra effort: the customer service inbox, comments on your posts, sales call notes, product reviews, competitor content you'd do differently, and questions the founder keeps answering at events. Tag each idea so you can pull a balanced month from it.",
      },
      {
        type: "template",
        label: "Idea bank columns",
        text: "Idea (one sentence)\nCategory: educational / demo / founder / customer question / BTS / UGC\nSource: DM, review, sales call, team, trend\nSeries it belongs to (if any)\nHook options (write two)\nPresenter: founder / team / creator / text-only\nFootage needed and whether we have it\nRights status (for customer or creator content)\nPriority for the month: high / later / park\nStatus: idea / scripted / shot / edited / approved / published",
      },
      {
        type: "paragraph",
        text: "Clean the bank once a month. Merge duplicates, park ideas that depend on footage you can't get, and move anything time-bound into the right month.",
      },
      { type: "heading", text: "Same idea, different Reel", id: "creative-variation" },
      {
        type: "paragraph",
        text: "You don't need 20 new ideas a month. You need a few strong ideas made in different ways. Take one idea and change one element at a time:",
      },
      {
        type: "list",
        items: [
          "Hook: open with the question, the result, a common mistake, or a surprising number you can verify.",
          "Format: talking head, hands-only demo, text on screen with voiceover, split-screen comparison, a quick list.",
          "Presenter: the founder, a team member, a creator, a customer (with permission), or no face at all.",
          "Length: a short answer and a fuller walkthrough of the same topic.",
          "Language: English, Hindi or a regional language, where your audience uses it.",
        ],
      },
      {
        type: "paragraph",
        text: "Say a hypothetical skincare brand's idea is 'How much sunscreen to apply'. Week one, a team member demonstrates with a measuring guide. Week two, the founder answers 'Why do I still tan?' in a talking-head Reel, a different angle on the same topic. Week three, a creator's routine Reel shows it in daily use. One idea, three Reels that don't feel repeated.",
      },
      { type: "heading", text: "UGC and creator footage: rights first", id: "ugc-rights" },
      {
        type: "paragraph",
        text: "Customer and creator videos add variety and a voice that isn't yours, but a tag is not permission. Before a UGC Reel goes into the plan, get written consent for where and how long you'll use it, and the original file rather than a screen recording. UGC content usage rights explains what to agree. If you need UGC made to a brief rather than collected, that's what UGC content production is for.",
        links: [
          { text: "UGC content usage rights", href: "/blog/ugc-content-usage-rights" },
          { text: "UGC content production", href: "/services/ugc-content-production" },
        ],
      },
      {
        type: "paragraph",
        text: "Check audio too. At the time of writing, Instagram's Help Centre says licensed audio must credit the artist and track, and can be muted if agreements with rights holders change. Original audio, voiceovers and royalty-free tracks are safer for brand Reels you want to keep.",
        links: [{ text: "Instagram's Help Centre says licensed audio", href: SRC.igAudio }],
      },
      { type: "heading", text: "A 30-day Reels plan for a hypothetical brand", id: "30-day-plan" },
      {
        type: "paragraph",
        text: "Here's a sample month for a hypothetical home-fragrance brand with a new candle range launching in week three, posting three Reels a week. Adjust the volume to what your team can make well.",
      },
      {
        type: "table",
        headers: ["Week", "Focus", "Reel 1", "Reel 2", "Reel 3"],
        rows: [
          ["Week 1", "Education and trust", "Educational: 'How long should a candle burn the first time?'", "Customer question: 'Why does my candle tunnel?'", "BTS: pouring and curing a batch"],
          ["Week 2", "Build-up to launch", "Founder: why the new range uses a different wax", "Demo: same room, three scents, three moods", "Customer question: 'Which scent suits a small bedroom?'"],
          ["Week 3", "Launch", "Launch Reel: the new range in real homes", "Creator Reel reshared with permission: first impressions", "Demo: what's in the gift box"],
          ["Week 4", "Proof and follow-up", "UGC: customer room tour, with consent", "Educational: candle care myths", "Founder: what we learned from launch week questions"],
        ],
      },
      {
        type: "paragraph",
        text: "Notice the pattern: every week mixes at least two categories, the launch sits between education and follow-up rather than alone, and two named series (customer questions and founder clips) recur. Leave one slot a fortnight free for a timely idea or a Trial Reel test.",
      },
      { type: "heading", text: "Batch production and review the month", id: "batching-and-review" },
      {
        type: "paragraph",
        text: "A month of Reels falls apart when every video is scripted, shot and edited separately. Batch instead: write all scripts in one sitting, shoot all founder clips in one session with outfit changes, and collect behind-the-scenes footage through the month. Edit in two rounds so approvals don't pile up at the end. The full brief-to-publish pipeline is covered in our social media content workflow guide, so we won't repeat it here.",
        links: [{ text: "social media content workflow", href: "/blog/social-media-content-workflow" }],
      },
      { type: "paragraph", text: "At the end of the month, run a short review:" },
      {
        type: "list",
        items: [
          "Which three Reels held attention best (average watch time against length)?",
          "Which got shared or saved most, and which category were they?",
          "Which hook styles worked, and which can be reused with a new topic?",
          "Which ideas did we park, and why?",
          "What questions came up in comments that belong in the idea bank?",
          "Which series should continue, change one element, or stop?",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Planning the month around trends, then scrambling when none fit the brand.",
          "Making every Reel a product Reel, so the feed reads like a catalogue.",
          "Waiting for perfect footage instead of collecting usable clips every week.",
          "Booking the founder for one Reel at a time.",
          "Using a customer's video because they tagged you, without asking.",
          "Judging the plan on one Reel's views instead of the month's pattern.",
        ],
      },
      { type: "heading", text: "Practical recommendations", id: "recommendations" },
      {
        type: "list",
        items: [
          "Set up the idea bank this week and ask sales and support to add to it.",
          "Plan the month on one page before scripting anything.",
          "Give each week a focus and at least two categories.",
          "Write two hooks for every idea and pick one at the edit.",
          "Keep one flexible slot every fortnight.",
          "Put the monthly review on the calendar before the month starts.",
        ],
      },
      {
        type: "paragraph",
        text: "Reels usually sit inside a wider calendar with posts, carousels and Stories. Building that calendar is covered in our guide to a monthly social media content calendar, and Kudozz's content planning work for brands follows the same monthly rhythm.",
        links: [
          { text: "a monthly social media content calendar", href: "/blog/monthly-social-media-content-calendar" },
          { text: "content planning work for brands", href: "/services/social-media-management#content-planning" },
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Start a shared idea bank today and fill it from customer questions. Next month, rotate at least five categories, turn your best idea into two or three variations, and batch the shooting. Review at the end of the month and carry the lessons into the next plan. Variety comes from the system, not from waiting for inspiration.",
      },
    ],
    faqs: [
      {
        question: "How far ahead should we plan Reels?",
        answer:
          "A month is a practical horizon for most brands: far enough to batch shoots and get approvals, short enough to react to what worked. Plan launch and festive Reels earlier if they need product samples, creators or a shoot. Keep a free slot or two each fortnight for timely ideas.",
      },
      {
        question: "What if we only have product photos and no video footage?",
        answer:
          "Start small. A phone, good daylight and hands-only demos are enough for many Reels. Text-led Reels with voiceover can turn photos and short clips into explainers. Over the month, collect a few seconds of footage every time something happens: packing, making, testing. That builds a library quickly.",
      },
      {
        question: "Should we plan Reels around trends?",
        answer:
          "Keep trends as an occasional extra, not the backbone. A trend only helps if it fits your brand and you can make it quickly while it's current. Most of a brand's Reels should come from its own products, customers and story, which don't expire in a week.",
      },
      {
        question: "Can we reuse a Reel idea that worked last month?",
        answer:
          "Yes, and you should. Repeat the idea with a new hook, a different presenter, a new example or a different format. A strong idea made three ways is better than three weak new ideas. Avoid reposting the identical video, which adds nothing for people who already saw it.",
      },
    ],
  },
  {
    slug: "monthly-social-media-content-calendar",
    category: "Social Media Management",
    title: "How to Build a Monthly Social Media Content Calendar for a Growing Brand",
    seoTitle: "Monthly Social Media Content Calendar: Template and Example",
    excerpt:
      "How to build and run a monthly social media content calendar: the fields to include, how to set objectives, pillars, campaign and festive dates, video, approvals and frequency, with a sample 30-day structure.",
    metaDescription:
      "A monthly social media content calendar for brands: the fields to track, a sample 30-day structure, festive and campaign dates, approvals, frequency and review.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "9 min read",
    tags: [
      "monthly social media content calendar",
      "social media content calendar template",
      "social media calendar for brands",
      "monthly content plan",
      "social media planning",
    ],
    related: ["social-media-content-workflow", "social-media-content-approval-process", "seasonal-influencer-marketing-india"],
    hero: {
      src: "/blog/brand-guides/monthly-social-media-content-calendar.svg",
      alt: "A monthly content calendar built from objectives, pillars, dates and products, running through approvals, publishing and review",
    },
    body: [
      {
        type: "paragraph",
        text: "Your brand posts most weeks, but the plan lives in three places: a WhatsApp group, the designer's folder and the marketing head's memory. The Diwali offer got designed on the Friday before. A product the founder wanted pushed never appeared. Nobody can say what's going out next Tuesday. A monthly calendar fixes this, as long as it's built to be used rather than admired.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A monthly social media content calendar is one shared sheet that lists every planned post with its date, platform, format, pillar, objective, copy, asset, owner and approval status. Build it from the month's business objectives, product priorities, campaign and festive dates and your content pillars. Lock it after approval, publish from it, and review it at the end of the month to shape the next one.",
      },
      { type: "heading", text: "The fields your calendar needs", id: "calendar-fields" },
      {
        type: "paragraph",
        text: "A calendar is a planning tool, not the production process. How briefs, design and editing move from stage to stage is covered in our social media content workflow guide. The calendar's job is to show, at a glance, what goes out, where, when and why. These fields cover it:",
        links: [{ text: "social media content workflow guide", href: "/blog/social-media-content-workflow" }],
      },
      {
        type: "table",
        headers: ["Field", "What goes in it", "Why it matters"],
        rows: [
          ["Date and time", "Planned publishing date and slot", "Shows gaps and clashes"],
          ["Platform", "Instagram, LinkedIn, Facebook, YouTube and so on", "One row per platform version, not one row per idea"],
          ["Format", "Reel, carousel, static, Story, Short, text post", "Lets you see the mix and the production load"],
          ["Content pillar", "One of your three to five pillars", "Stops one theme taking over"],
          ["Objective", "Educate, build trust, launch, drive enquiries, community", "Ties the post to the month's goals"],
          ["Campaign or moment", "Launch, sale, festival, awareness day", "Keeps campaigns visible across the month"],
          ["Product or service", "What it features, if anything", "Checks that product priorities are covered"],
          ["Hook and copy", "First line and caption, or a link to the draft", "Gives approvers something to review"],
          ["Asset", "Link to design or video file", "No hunting for the final version"],
          ["Owner", "Who makes it, who approves it", "Clear responsibility"],
          ["Status", "Idea, in production, in review, approved, scheduled, published", "One view of progress"],
          ["Result notes", "Two or three numbers and one line after publishing", "Feeds the monthly review"],
        ],
      },
      { type: "heading", text: "What goes into the plan", id: "inputs" },
      { type: "subheading", text: "Monthly objectives" },
      {
        type: "paragraph",
        text: "Write one to three objectives for the month in plain words: 'build interest in the new range before launch on the 18th', 'answer the top five pre-purchase questions', 'get enquiries for the corporate gifting service'. Every post should support one of them, or have a clear reason for being there.",
      },
      { type: "subheading", text: "Content pillars" },
      {
        type: "paragraph",
        text: "Pillars are the three to five recurring themes your brand talks about, such as product education, customer stories, behind-the-scenes and category expertise. They come from your strategy and rarely change month to month. The calendar's job is to spread posts across them so the feed doesn't drift.",
      },
      { type: "subheading", text: "Campaign and festive dates" },
      {
        type: "paragraph",
        text: "In India, festive and seasonal moments shape what people buy and what they expect from brands: Diwali, Holi, Raksha Bandhan, Navratri and Durga Puja, Eid, Onam, Pongal and Christmas, plus Republic Day, Independence Day, wedding season and end-of-season sales. Many festival dates follow lunar calendars and change each year, so confirm them annually. Only mark the ones that matter to your customers and regions, and decide early whether each one is a full campaign, a single post or nothing. A greeting post for every festival rarely adds much. Seasonal planning with creators is covered separately in seasonal influencer marketing in India.",
        links: [{ text: "seasonal influencer marketing in India", href: "/blog/seasonal-influencer-marketing-india" }],
      },
      { type: "subheading", text: "Product priorities" },
      {
        type: "paragraph",
        text: "Ask the business what needs attention this month: a launch, a bestseller in stock, slow-moving stock, a service with capacity. Social shouldn't become a sales flyer, but a calendar that ignores what the business is trying to sell is easy to cut.",
      },
      { type: "heading", text: "Balancing educational and promotional content", id: "balance" },
      {
        type: "paragraph",
        text: "We don't think there's a correct ratio, and we'd be wary of anyone quoting one as a rule. Use reasoning instead. People who don't know your brand yet need reasons to trust it before an offer means anything, so a newer brand needs more education, demonstrations and proof. A brand with an engaged following and a strong launch can lean more promotional for a week or two. Check the balance in your calendar view: if three promotional posts sit back to back, move something. Then watch what happens in comments and saves. If promotional posts are ignored and educational ones are saved, your audience is telling you something.",
      },
      { type: "heading", text: "Planning video in the calendar", id: "video-planning" },
      {
        type: "paragraph",
        text: "Video takes longer than static posts and depends on people and footage, so plan it first. Mark which Reels or Shorts need a shoot, a presenter or creator footage, and set their production dates before the static posts. Group shoots into one or two sessions a month. For a deeper method on filling the month with Reels, see how to plan a month of Instagram Reels. If you need product or UGC-style video made for you, UGC content production can supply footage that the calendar then schedules.",
        links: [
          { text: "how to plan a month of Instagram Reels", href: "/blog/instagram-reels-content-plan" },
          { text: "UGC content production", href: "/services/ugc-content-production" },
        ],
      },
      { type: "heading", text: "Approval schedule and publishing frequency", id: "approvals-frequency" },
      {
        type: "paragraph",
        text: "Put the approval dates in the calendar itself: when the draft plan is shared, when feedback is due, when final assets are sent and when they're signed off. Most delays come from approvals with no date. Who approves what, and how to keep turnaround short, is covered in the social media content approval process.",
        links: [{ text: "social media content approval process", href: "/blog/social-media-content-approval-process" }],
      },
      {
        type: "paragraph",
        text: "On frequency, ignore 'ideal posting frequency' figures you see online. They aren't published by the platforms and don't account for your team or audience. Choose the number of posts your team can make well and approve on time for three months running. Fewer, better posts on a reliable rhythm beat a packed calendar that collapses in week three.",
      },
      { type: "heading", text: "A sample 30-day structure", id: "sample-month" },
      {
        type: "paragraph",
        text: "Here's a hypothetical month for a growing tea brand on Instagram and LinkedIn, with a new gift box launching mid-month and Diwali at the end. It's a structure to copy, not a target volume.",
      },
      {
        type: "template",
        label: "Sample 30-day calendar structure (hypothetical tea brand)",
        text: "Objectives: build interest in the gift box (launch day 15); answer brewing questions; get corporate gifting enquiries\nPillars: brewing education / sourcing stories / customer moments / gifting\n\nWeek 1 (days 1-7): education first\n  IG Reel: how to brew loose-leaf masala chai\n  IG carousel: five mistakes that make tea bitter\n  IG Stories: poll on favourite chai time\n  LinkedIn: founder post on sourcing from small estates\n\nWeek 2 (days 8-14): build-up\n  IG Reel: behind-the-scenes, packing the gift box\n  IG carousel: what's inside the box\n  IG Stories: countdown sticker for launch\n  LinkedIn: corporate gifting service, how it works\n\nWeek 3 (days 15-21): launch\n  IG Reel: launch day, the gift box in real homes\n  IG static: launch offer with clear terms\n  IG Stories: Q&A on delivery dates\n  LinkedIn: launch announcement with the gifting enquiry link\n\nWeek 4 (days 22-30): Diwali and proof\n  IG Reel: creator unboxing, reshared with permission\n  IG carousel: Diwali delivery cut-off dates\n  IG static: Diwali greeting with no offer\n  LinkedIn: thank-you note to early corporate customers (with permission)\n\nApprovals: plan shared day -10 / feedback day -7 / final assets day -3\nReview: day 30, one-page report and next month's draft",
      },
      { type: "heading", text: "The monthly planning meeting and review", id: "planning-meeting" },
      {
        type: "paragraph",
        text: "Run one meeting a month, about an hour, with whoever owns social, the approver and someone who knows the product and sales picture. Use this agenda:",
      },
      {
        type: "list",
        items: [
          "Last month in one page: what went out, what was missed, three best and three weakest posts.",
          "What we learned: which pillars, formats and hooks worked, with a reason for each.",
          "This month's objectives and product priorities, from the business.",
          "Dates: campaigns, festivals, launches and anything that can't move.",
          "Video and shoot needs, with dates.",
          "Approval dates and who signs off.",
          "One thing we'll try differently this month.",
        ],
      },
      {
        type: "paragraph",
        text: "Keep the report short and tied to decisions. Which numbers to look at for which goal is explained in social media KPIs by goal.",
        links: [{ text: "social media KPIs by goal", href: "/blog/social-media-kpis" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Planning posts before deciding the month's objectives.",
          "Adding every festival and awareness day because they're on a list.",
          "Leaving video until last, then dropping it when time runs out.",
          "No approval dates, so the calendar slips every week.",
          "Treating the calendar as fixed once approved, with no room for timely posts.",
          "Never recording results in the calendar, so next month starts from guesswork.",
        ],
      },
      { type: "heading", text: "Practical recommendations", id: "recommendations" },
      {
        type: "list",
        items: [
          "Use one shared sheet or tool everyone can see, not a deck sent as an attachment.",
          "Plan by the 20th of the previous month and approve by the 25th.",
          "Fill video slots and campaign dates first, then pillars, then everything else.",
          "Keep about one slot a week flexible for timely or reactive content.",
          "Add result notes within a week of publishing, while the context is fresh.",
        ],
      },
      {
        type: "paragraph",
        text: "If you'd rather have someone else build and run the calendar, that's what our content planning service does each month, with you approving before anything is published.",
        links: [{ text: "our content planning service", href: "/services/social-media-management#content-planning" }],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Copy the fields above into a shared sheet, write next month's objectives, mark the dates that matter to your customers, and plan video first. Set approval dates before anything else is designed. After the month ends, spend an hour on what worked and carry it into the next calendar. The calendar gets better every month you actually review it.",
      },
    ],
    faqs: [
      {
        question: "Should we use a spreadsheet or a social media management tool for the calendar?",
        answer:
          "A spreadsheet is enough for many growing brands and easy for everyone to open. Scheduling tools add a visual calendar, direct publishing and sometimes approvals, which helps once you run several platforms or need a clear audit trail. Choose whichever your approver will actually open. The fields matter more than the software.",
      },
      {
        question: "How do we handle posts that need to go out at short notice?",
        answer:
          "Keep a flexible slot each week and a fast-track approval route for timely posts, with one named approver. Reactive content still gets added to the calendar so it's recorded and reviewed. If short-notice posts become most of the month, the planning inputs from sales or product are arriving too late.",
      },
      {
        question: "Should every platform have its own calendar?",
        answer:
          "Use one calendar with a platform column, so you can see the whole month and spot clashes or gaps. Filter by platform when you need a single view. Separate calendars for each platform tend to drift apart and make campaign coordination harder.",
      },
      {
        question: "How many festive posts should we plan in a month like October or November?",
        answer:
          "There's no right number. Plan around the festivals your customers actually celebrate and buy for, and decide which deserve a campaign and which a simple greeting. Keep your usual educational and product content running too, since feeds crowded with greetings make it hard to stand out.",
      },
      {
        question: "Who should own the content calendar?",
        answer:
          "One person: usually the social media manager in-house or the account lead at your agency. Others contribute ideas, product priorities and approvals, but a single owner keeps it current, chases approvals and makes sure results are recorded. Shared ownership usually means nobody updates it.",
      },
    ],
  },
  {
    slug: "manage-multiple-social-media-accounts",
    category: "Social Media Management",
    title: "How to Manage Multiple Social Media Accounts for One Brand Without Spreading Your Team Thin",
    seoTitle: "How to Manage Multiple Social Media Accounts for a Brand",
    excerpt:
      "How to run several social media platforms for one brand: tier platforms by priority, plan team capacity, coordinate one calendar, choose scheduling and inbox tools, adapt content, report and manage access.",
    metaDescription:
      "Managing multiple social media platforms for one brand: tier platforms, plan team capacity, coordinate one calendar, use scheduling tools and report clearly.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "8 min read",
    tags: [
      "managing multiple social media platforms",
      "manage multiple social media accounts",
      "multi-platform social media management",
      "social media management tools",
      "social media operations",
    ],
    related: ["social-media-content-repurposing", "social-media-brand-voice", "choose-social-media-platforms-for-business"],
    hero: {
      src: "/blog/brand-guides/manage-multiple-social-media-accounts.svg",
      alt: "Platforms tiered into primary, secondary and maintenance, run from one calendar, one inbox and one cross-platform report",
    },
    body: [
      {
        type: "paragraph",
        text: "Your brand is on Instagram, Facebook, LinkedIn, YouTube and X, and one marketing executive handles all five alongside email and the website. Instagram gets fresh work. LinkedIn gets the same post a day later. YouTube hasn't had a video since March. Comments sit unanswered on Facebook because nobody checks it. This is what happens when every account is treated as equally important with half the people needed.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To manage multiple social media accounts for one brand, rank each platform as primary, secondary or maintenance and give it effort to match. Assign clear roles for planning, creation, publishing, community and reporting, and check that capacity covers the plan. Run every platform from one calendar, use a scheduling tool and a unified inbox, adapt content to each platform, and report each platform's own metrics in one cross-platform summary. Control access with roles, not shared passwords.",
      },
      { type: "heading", text: "Tier your platforms: primary, secondary, maintenance", id: "tiering" },
      {
        type: "paragraph",
        text: "Which platforms you should be on at all is a separate decision, covered in how to choose social media platforms for your business. This guide assumes you've chosen them, and now need to run them without burning out. The answer is to stop treating them equally.",
        links: [{ text: "how to choose social media platforms for your business", href: "/blog/choose-social-media-platforms-for-business" }],
      },
      {
        type: "paragraph",
        text: "Audiences use each platform differently. People often scroll Instagram for discovery and visual inspiration, search YouTube for answers and longer explanations, read LinkedIn in a work frame of mind, and use Facebook for local groups and community. Your customers may behave differently, so check your own insights. Then give each platform a tier:",
      },
      {
        type: "table",
        headers: ["Tier", "What it means", "Effort", "Hypothetical example (B2B software brand)"],
        rows: [
          ["Primary", "Where your customers are most active and the business goal is clearest", "Original content, full community management, monthly deep review", "LinkedIn"],
          ["Secondary", "Useful but not central; supports the primary platform", "Adapted content, scheduled replies, monthly check", "YouTube for product walkthroughs"],
          ["Maintenance", "You need a presence, but it isn't a growth channel now", "Updated profile, occasional adapted posts, comments checked on set days", "Instagram and Facebook"],
        ],
      },
      {
        type: "paragraph",
        text: "Review tiers every quarter. A maintenance platform can move up if your customers shift, and a primary platform can move down if it stops serving the goal.",
      },
      { type: "heading", text: "Team roles and capacity", id: "roles-capacity" },
      {
        type: "paragraph",
        text: "Running several platforms involves five jobs, whether one person or six do them. Name who does each:",
      },
      {
        type: "list",
        items: [
          "Planning: owns the calendar, objectives and platform tiers.",
          "Creation: design, video editing and copywriting for each platform.",
          "Publishing: schedules, checks formatting and confirms posts went live.",
          "Community: replies to comments and messages within agreed hours, and escalates.",
          "Reporting: pulls numbers per platform and writes the monthly summary.",
        ],
      },
      {
        type: "paragraph",
        text: "Then check capacity honestly. List the posts, videos and community hours each platform needs per month and estimate the time each takes. If the total is more than your team has, drop a platform to maintenance before quality drops everywhere. Where the line falls between community replies and customer support is covered in community management vs customer support.",
        links: [{ text: "community management vs customer support", href: "/blog/community-management-vs-customer-support" }],
      },
      { type: "heading", text: "One calendar, one publishing workflow", id: "workflow-calendar" },
      {
        type: "paragraph",
        text: "Keep every platform in a single calendar with a platform column, so a launch shows up on all of them at once and nobody posts a sale on Facebook a day after it ended on Instagram. Plan around the primary platform first, then add secondary and maintenance versions. The fields and monthly rhythm are set out in how to build a monthly social media content calendar.",
        links: [{ text: "how to build a monthly social media content calendar", href: "/blog/monthly-social-media-content-calendar" }],
      },
      {
        type: "paragraph",
        text: "Agree a publishing routine: the same approval deadline for all platforms, one person who checks scheduled posts each morning, and a rule that time-sensitive posts (offers, launches, closures) go out on all relevant platforms in the same window. For launches that run across platforms with creators and a fixed date, plan them as a campaign. That's what social campaigns are designed for.",
        links: [{ text: "social campaigns", href: "/services/social-campaigns" }],
      },
      { type: "heading", text: "Scheduling and unified-inbox tools", id: "tools" },
      {
        type: "paragraph",
        text: "Tools fall into a few categories. You don't need all of them, and we don't rank vendors here because the right choice depends on your platforms, team size and budget.",
      },
      {
        type: "list",
        items: [
          "Native tools from the platforms: free, and usually the first to support new formats.",
          "Third-party scheduling tools: one calendar for several platforms, with drafts, approvals and team roles.",
          "Unified inboxes: comments and messages from several platforms in one queue, with assignment.",
          "Analytics and reporting tools: pull metrics from several platforms into one view.",
          "Shared asset libraries: one place for final designs, videos and brand files.",
        ],
      },
      {
        type: "paragraph",
        text: "For Facebook and Instagram, Meta Business Suite is the native option. At the time of writing (November 2026), Meta describes it as a way to manage business activity on Facebook, Messenger and Instagram from one place, including creating or scheduling posts and stories and responding to messages. Check what each tool supports for every platform you run before you commit: features for newer formats sometimes arrive in native apps first.",
        links: [{ text: "Meta describes it", href: SRC.metaBusinessSuite }],
      },
      { type: "heading", text: "Adapt content and keep one voice", id: "adaptation-voice" },
      {
        type: "paragraph",
        text: "Posting the identical post everywhere saves time and wastes reach. Adapt the strongest idea to how each platform is used. A short matrix for one hypothetical product video:",
      },
      {
        type: "table",
        headers: ["Platform", "How to adapt", "What changes"],
        rows: [
          ["Instagram", "Vertical Reel, hook on screen in the first seconds, short caption", "Pace and on-screen text"],
          ["YouTube", "Short version as a Short; a longer walkthrough as a video with a searchable title", "Length and title"],
          ["LinkedIn", "Native video or a text post with the key insight, framed for a work audience", "Angle and copy"],
          ["Facebook", "Same video with a caption suited to community or local audiences", "Caption and context"],
        ],
      },
      {
        type: "paragraph",
        text: "The format changes; the brand shouldn't. Write down how your brand sounds and what it never says, then adjust formality per platform within those limits. Social media brand voice covers how to set that up, and social media content repurposing goes deeper on turning one asset into several platform-native versions.",
        links: [
          { text: "Social media brand voice", href: "/blog/social-media-brand-voice" },
          { text: "social media content repurposing", href: "/blog/social-media-content-repurposing" },
        ],
      },
      { type: "heading", text: "Platform metrics and one cross-platform report", id: "reporting" },
      {
        type: "paragraph",
        text: "Each platform measures things differently and names metrics differently, so don't add up 'views' across platforms as if they meant the same thing. Report each platform on its own metrics, then write a one-page cross-platform summary: what each platform was for this month, whether it did that job, and what changes next month. Leadership reads the summary; the platform pages are there for detail. Presenting it well is covered in social media reporting for founders.",
        links: [{ text: "social media reporting for founders", href: "/blog/social-media-reporting-for-founders" }],
      },
      { type: "heading", text: "Access management", id: "access" },
      {
        type: "paragraph",
        text: "With several accounts and several people, shared passwords become a risk quickly. Use each platform's role-based access instead. Meta lets a business portfolio give partner businesses access to its assets, and LinkedIn Pages have separate admin roles; at the time of writing these are Super admin, Content admin and Analyst. Keep a simple access register:",
        links: [
          { text: "Meta lets a business portfolio give partner businesses access", href: SRC.metaPartnerAccess },
          { text: "LinkedIn Pages have separate admin roles", href: SRC.linkedinAdminRoles },
        ],
      },
      {
        type: "list",
        items: [
          "Every account, the email it's registered to and who owns it (always someone on your payroll).",
          "Who has access, at what role, and since when.",
          "Two-factor authentication switched on for every admin.",
          "Access removed the same week someone leaves or an agency contract ends.",
          "A quarterly check that the list matches reality.",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Giving every platform equal effort until all of them are mediocre.",
          "Cross-posting identical content, with hashtags and tags that don't work on the other platform.",
          "Separate calendars per platform, so campaigns go out on different days.",
          "Checking comments on the primary platform only.",
          "Adding views across platforms into one number.",
          "Shared logins that nobody remembers to change when people leave.",
        ],
      },
      { type: "heading", text: "Practical recommendations", id: "recommendations" },
      {
        type: "list",
        items: [
          "Tier your platforms this month and write the tier next to each in the calendar.",
          "Estimate monthly hours per platform and compare them with what your team has.",
          "Pick one scheduling tool and one inbox your whole team uses.",
          "Set fixed days to check maintenance platforms for comments and messages.",
          "Start an access register and fix shared passwords first.",
        ],
      },
      {
        type: "paragraph",
        text: "If you'd rather hand over the day-to-day running of several platforms, our social media management across platforms is planned in exactly these tiers, with each platform given its own job.",
        links: [{ text: "our social media management across platforms", href: "/services/social-media-management#platforms" }],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Rank your platforms, then match effort to rank. Put everything in one calendar, one inbox and one report, adapt rather than copy, and control access with roles. Doing three platforms well is usually worth more to a brand than doing five badly.",
      },
    ],
    faqs: [
      {
        question: "How many social media platforms can one person manage well?",
        answer:
          "It depends on the volume, how much video is involved and how many comments come in. One person can often run one primary platform properly and keep one or two others in maintenance. Beyond that, quality or community replies usually suffer. Estimate hours per platform rather than guessing.",
      },
      {
        question: "Is cross-posting the same content to every platform a bad idea?",
        answer:
          "Posting identical content everywhere tends to look out of place on at least one platform, and watermarks from other apps can limit distribution. Reusing the same idea is fine. Change the format, length, opening and caption for each platform so it fits how people use it there.",
      },
      {
        question: "Do we need a paid social media management tool?",
        answer:
          "Not always. Native tools, such as Meta Business Suite for Facebook and Instagram, are free and may be enough for one or two platforms. Paid tools help when several people need one calendar, approvals and an inbox across many platforms. Trial a tool with your real workflow before signing an annual plan.",
      },
      {
        question: "Should we close a platform we can't keep up with?",
        answer:
          "Not necessarily. A dormant account with old posts and unanswered comments looks worse than a quiet one with a clear profile. Move it to maintenance: update the bio and links, post occasionally, and check messages on set days. Close or archive it only if your customers genuinely aren't there and you've redirected people elsewhere.",
      },
    ],
  },
];
