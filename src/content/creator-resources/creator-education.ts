import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_FACTS_REVIEWED, CREATOR_LAYER_8_PUBLISHED as PUBLISHED } from "@/content/creator-resources/shared";

/**
 * Paywall decisions and creator education (700–749 layer): free vs paid
 * content (733 with 734 merged in), course business, course topic, course
 * pricing, course launch, workshops and webinars.
 */
export const creatorEducationPosts: BlogPost[] = [
  {
    slug: "creator-paywall-content",
    category: "Creator Resources",
    title: "How to Decide What to Put Behind a Creator Paywall",
    seoTitle: "What to Put Behind a Paywall: Free vs Paid Creator Content",
    excerpt:
      "How creators decide what stays free and what goes behind a paywall: the job of free content, what people will actually pay for, a free-vs-paid decision table, designing the content funnel between them, and avoiding paywalls that shrink your audience.",
    metaDescription:
      "How creators decide what to paywall: the job of free content, what people pay for, a free vs paid decision table, the content funnel and paywall mistakes.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["creator paywall", "free vs paid content", "what to put behind a paywall", "paid content strategy", "premium content creators", "content funnel free paid"],
    related: ["creator-memberships", "creator-paid-community-india", "creator-newsletter-monetization"],
    body: [
      {
        type: "paragraph",
        text: "Every creator who launches a membership, paid newsletter or course faces the same question: if I charge for some things, what happens to everything I give away? Paywall too much and your free audience stops growing. Paywall too little and paying members wonder what they're paying for. The answer is to give free and paid content different jobs.",
      },
      {
        type: "paragraph",
        text: "This guide covers the free-versus-paid decision. How memberships work is in creator memberships; paid communities in how to build a paid community.",
        links: [
          { text: "creator memberships", href: "/blog/creator-memberships" },
          { text: "how to build a paid community", href: "/blog/creator-paid-community-india" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Keep content free when its job is discovery, trust and showing how you think: answers, ideas, opinions and examples. Put content behind a paywall when it provides depth, convenience, personal access, community or implementation help that free content can't: complete systems, templates, detailed walkthroughs, live sessions, feedback and member-only community. Design the path between them so free content naturally leads to the paid offer, and review what converts and what shrinks your free audience.",
      },
      { type: "heading", text: "Free and paid do different jobs", id: "jobs" },
      {
        type: "table",
        headers: ["Free content", "Paid content"],
        rows: [
          ["Reaches new people", "Serves committed people"],
          ["Answers \"what\" and \"why\"", "Delivers \"exactly how\", done together"],
          ["Builds trust and authority", "Saves time, adds depth, gives access"],
          ["Shareable", "Personal or structured"],
        ],
      },
      { type: "heading", text: "The decision table", id: "decision" },
      {
        type: "table",
        headers: ["Content type", "Usually free", "Usually paid"],
        rows: [
          ["Answers to common questions", "✓", ""],
          ["Your opinions and frameworks", "✓", ""],
          ["Examples and case studies", "✓ (summary)", "✓ (detailed breakdown)"],
          ["Step-by-step systems", "", "✓"],
          ["Templates and tools", "Sampler", "✓ Full set"],
          ["Live Q&A", "Occasional", "✓ Regular, members-only"],
          ["Personal feedback", "", "✓"],
          ["Community", "Public comments", "✓ Members' space"],
          ["Early access", "", "✓"],
        ],
      },
      { type: "heading", text: "What people actually pay for", id: "pay-for" },
      {
        type: "paragraph",
        text: "People rarely pay for information alone; it's usually available free somewhere. They pay for:",
      },
      {
        type: "list",
        items: [
          "Convenience: organised, complete, in one place.",
          "Depth: the detail free content skips.",
          "Access: time with you, answers to their question.",
          "Community: peers working on the same thing.",
          "Accountability: structure that keeps them going.",
          "Speed: templates and systems that save hours.",
        ],
      },
      { type: "heading", text: "Design the free-to-paid path", id: "path" },
      {
        type: "template",
        label: "Free-to-paid path (illustrative: fitness creator)",
        text: "Free Reel: \"3 mistakes in home workouts\"\nFree carousel: \"A beginner's week plan\" (sample)\nFree newsletter: weekly tip + member spotlight\nPaid membership: full 12-week programme, form-check videos, monthly live Q&A, members' group",
      },
      {
        type: "paragraph",
        text: "Every free piece should be useful on its own and make the paid offer an obvious next step for people who want more. The creator funnel covers this path in detail.",
      },
      {
        type: "paragraph",
        text: "Path: the creator funnel.",
        links: [{ text: "the creator funnel", href: "/blog/creator-funnel" }],
      },
      { type: "heading", text: "Signs your paywall is wrong", id: "signs" },
      {
        type: "table",
        headers: ["Sign", "Likely issue"],
        rows: [
          ["Free audience stops growing", "Too much moved behind the paywall"],
          ["Members say \"I get this free anyway\"", "Not enough paid value"],
          ["High sign-ups, fast cancellations", "Paid content doesn't match the promise"],
          ["Free content gets fewer saves", "Free content became teasers, not help"],
        ],
      },
      { type: "heading", text: "Platform paywalls", id: "platforms" },
      {
        type: "paragraph",
        text: "Many platforms support paid content: YouTube channel memberships, Instagram Subscriptions (for eligible creators), paid newsletters and community platforms. Choose based on where your audience already is and what you can deliver. YouTube channel membership strategy and Instagram Subscriptions cover the platform options.",
        links: [
          { text: "YouTube channel membership strategy", href: "/blog/youtube-channel-membership-strategy" },
          { text: "Instagram Subscriptions", href: "/blog/instagram-subscriptions" },
        ],
      },
      { type: "heading", text: "Worked example: redesigning a paywall", id: "example" },
      {
        type: "template",
        label: "Illustrative: a paid newsletter on personal productivity",
        text: "Before: free issue monthly; everything else paid → free list stopped growing; paid growth stalled\nAfter:\n• Free weekly issue: one useful idea, fully explained\n• Paid: monthly deep-dive system with templates, member Q&A, archive, community thread\n• Free issues end with one line on what members got that week\nResults to watch: free list growth, free-to-paid conversion, paid churn",
      },
      {
        type: "paragraph",
        text: "The change gave free readers a reason to stay and share, and gave paid members depth and access they couldn't get free.",
      },
      { type: "heading", text: "A quarterly paywall review", id: "review" },
      {
        type: "table",
        headers: ["Question", "Look at"],
        rows: [
          ["Is the free audience still growing?", "Subscriber or follower growth"],
          ["Do members value the paid content?", "Churn, replies, usage"],
          ["Is the path to paid clear?", "Clicks from free to paid pages"],
          ["Are we paywalling the wrong things?", "Member feedback, free content saves"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Paywalling your best free content.",
          "Free content that's only teasers.",
          "Paid content that's just more of the same.",
          "No clear path from free to paid.",
          "Never reviewing what converts.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Free and paid content should do different jobs: free for discovery and trust, paid for depth, access, community and convenience. Design the path between them, keep free content genuinely useful and adjust based on what grows your audience and what members value.",
      },
    ],
    faqs: [
      {
        question: "What should creators put behind a paywall?",
        answer:
          "Content that adds depth, convenience, personal access, community or implementation help, such as complete systems, templates, live sessions, feedback and members-only spaces.",
      },
      {
        question: "What should creators keep free?",
        answer:
          "Content whose job is discovery and trust: answers to common questions, opinions, frameworks and examples that are useful on their own.",
      },
      {
        question: "Will a paywall reduce my audience?",
        answer:
          "It can if you move your most useful free content behind it. Keep free content genuinely helpful and use paid content for depth and access.",
      },
    ],
  },
  {
    slug: "creator-course-business",
    category: "Creator Resources",
    title: "Creator Course Business: How to Build and Sell an Online Course",
    seoTitle: "Creator Course Business: Build and Sell an Online Course",
    excerpt:
      "The creator course business end to end: course formats (self-paced, cohort, mini-course), the education journey from problem to retention, validation, building a course people finish, platforms and payments in India, support, refunds and when a course isn't the right product.",
    metaDescription:
      "The creator course business end to end: course formats, validation, building a course people finish, platforms and payments in India, support, refunds and fit.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "14 min read",
    tags: ["creator course business", "sell online course India", "build an online course", "course creator business", "cohort course", "self-paced course"],
    related: ["creator-course-topic", "creator-course-pricing", "creator-course-launch"],
    body: [
      {
        type: "paragraph",
        text: "A course is one of the most discussed creator products and one of the most misunderstood. Done well, it turns expertise into a structured learning experience people finish and recommend. Done badly, it's a folder of recorded lectures that people buy on impulse, never finish and quietly regret. The difference is less about production quality and more about choosing the right problem, the right format and the right support.",
      },
      {
        type: "paragraph",
        text: "This is the pillar guide for Kudozz's courses and workshops section. Choosing a topic is covered in how to choose a course topic; pricing in creator course pricing; launching in creator course launch.",
        links: [
          { text: "how to choose a course topic", href: "/blog/creator-course-topic" },
          { text: "creator course pricing", href: "/blog/creator-course-pricing" },
          { text: "creator course launch", href: "/blog/creator-course-launch" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator course business sells structured learning that takes students from a problem to a result. Choose a specific outcome your audience needs and you can teach, validate demand with a workshop or pre-sale, pick a format (self-paced, cohort-based or mini-course), build lessons around actions rather than lectures, choose a platform with UPI payments and good student experience, support students so they finish, state a clear refund policy, and use results and feedback to improve. Audience size alone doesn't decide success; fit, trust and outcomes do.",
      },
      { type: "heading", text: "The education journey", id: "journey" },
      {
        type: "image",
        src: "/blog/creator-resources/creator-education-journey.svg",
        alt: "Creator education journey: audience, problem, educational offer, validation, pricing, launch, sales, delivery, retention",
        caption: "Courses succeed when every step is planned, not just the recording.",
        width: 1200,
        height: 675,
      },
      {
        type: "table",
        headers: ["Step", "Question", "Guide"],
        rows: [
          ["Audience and problem", "What do people struggle to learn?", "How to choose a course topic"],
          ["Offer", "Course, workshop, cohort or coaching?", "This guide"],
          ["Validation", "Will people pay?", "Creator digital product validation"],
          ["Pricing", "What's it worth to them?", "Creator course pricing"],
          ["Launch", "How will they hear about it?", "Creator course launch"],
          ["Delivery", "Will they finish?", "This guide"],
          ["Retention", "What's next for them?", "Offer ladder"],
        ],
      },
      {
        type: "paragraph",
        text: "Validation: creator digital product validation.",
        links: [{ text: "creator digital product validation", href: "/blog/creator-digital-product-validation" }],
      },
      { type: "heading", text: "Course formats", id: "formats" },
      {
        type: "table",
        headers: ["Format", "How it works", "Best for"],
        rows: [
          ["Mini-course", "1–2 hours, one focused skill", "First product, low price"],
          ["Self-paced course", "Recorded lessons, learn anytime", "Evergreen skills, scale"],
          ["Cohort-based course", "Live sessions with a group over weeks", "Accountability, higher completion"],
          ["Hybrid", "Recorded lessons plus live Q&A", "Balance of scale and support"],
        ],
      },
      {
        type: "paragraph",
        text: "Many creators start with a live workshop or cohort, then turn the refined material into a self-paced course.",
      },
      {
        type: "paragraph",
        text: "Workshops: creator workshops.",
        links: [{ text: "creator workshops", href: "/blog/creator-workshops" }],
      },
      { type: "heading", text: "Build a course people finish", id: "build" },
      {
        type: "list",
        items: [
          "Start from the outcome; work backwards to the fewest lessons needed.",
          "Short lessons with one action each.",
          "Worksheets, templates and examples students use as they go.",
          "Checkpoints and small wins early.",
          "A community or Q&A for questions.",
          "Updates when the topic changes.",
        ],
      },
      { type: "heading", text: "Platforms and payments", id: "platforms" },
      {
        type: "paragraph",
        text: "Choose a platform based on student experience on mobile, UPI and card payments, video hosting, community features, fees, and whether you can access student emails. Some creators use their own website with a course plugin. Compare fees and control carefully. Creator checkout covers reducing friction at payment.",
      },
      {
        type: "paragraph",
        text: "Checkout: creator checkout experience.",
        links: [{ text: "creator checkout experience", href: "/blog/creator-checkout" }],
      },
      { type: "heading", text: "Support and refunds", id: "support" },
      {
        type: "paragraph",
        text: "Budget time for student questions, especially in the first cohorts. State your refund policy clearly before purchase; consumer protection rules in India expect clear information on refunds and grievance handling. A fair refund policy also builds trust.",
      },
      { type: "heading", text: "When a course isn't the right product", id: "not-right" },
      {
        type: "table",
        headers: ["Situation", "Better option"],
        rows: [
          ["Problem needs personal diagnosis", "Coaching or consulting"],
          ["Topic changes monthly", "Membership or newsletter"],
          ["Audience wants a quick tool", "Template or toolkit"],
          ["You haven't taught it live yet", "Workshop first"],
        ],
      },
      {
        type: "paragraph",
        text: "Alternatives: creator coaching business and how creators can sell templates, guides and toolkits.",
        links: [
          { text: "creator coaching business", href: "/blog/creator-coaching-business" },
          { text: "how creators can sell templates, guides and toolkits", href: "/blog/sell-templates-guides-creators" },
        ],
      },
      { type: "heading", text: "Examples", id: "examples" },
      {
        type: "table",
        headers: ["Creator", "Course (illustrative)"],
        rows: [
          ["Finance educator", "\"Your first year of investing\" cohort (educational, not personalised advice)"],
          ["Designer", "Self-paced Figma course for freelancers"],
          ["Photographer", "Mobile product photography mini-course for D2C sellers"],
          ["Regional-language teacher", "Spoken English course in Hindi for job seekers"],
          ["Creator coach", "6-week YouTube starter cohort"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Recording everything before anyone pays.",
          "Long lectures without actions.",
          "No support, so students stall.",
          "Unclear refund policy.",
          "Promising income or career outcomes.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A creator course business sells results, not recordings. Choose a specific outcome, validate it, pick the right format, build for completion, support students, be clear about refunds and improve with every cohort.",
      },
    ],
    faqs: [
      {
        question: "How do creators build and sell an online course?",
        answer:
          "Choose a specific outcome your audience needs, validate demand with a workshop or pre-sale, choose a format, build short action-based lessons, sell through a platform with UPI payments, support students and improve from feedback.",
      },
      {
        question: "Should my first course be self-paced or cohort-based?",
        answer:
          "Many creators start with a live cohort or workshop to learn what students need, then turn refined material into a self-paced course.",
      },
      {
        question: "Does a big audience guarantee course sales?",
        answer:
          "No. Fit between the course outcome and your audience's needs, trust and clear delivery matter more than audience size.",
      },
    ],
  },
  {
    slug: "creator-course-topic",
    category: "Creator Resources",
    title: "How to Choose a Course Topic People Will Pay to Learn",
    seoTitle: "How to Choose a Course Topic People Will Pay to Learn",
    excerpt:
      "How creators choose a course topic with real demand: signs people will pay, narrowing broad topics into outcomes, checking your credibility, comparing alternatives, a topic scoring sheet and testing before you build.",
    metaDescription:
      "How creators choose a course topic people will pay for: demand signals, narrowing to an outcome, credibility, alternatives, a scoring sheet and testing first.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "11 min read",
    tags: ["course topic ideas", "choose a course topic", "online course ideas India", "what course to create", "profitable course topics", "course idea validation"],
    related: ["creator-course-business", "creator-digital-product-validation", "creator-audience-research"],
    body: [
      {
        type: "paragraph",
        text: "Most course topics fail for one of two reasons: they're too broad to deliver a clear result (\"digital marketing\"), or they solve a problem people don't feel strongly enough to pay for. A good course topic sits at the point where a specific audience wants a specific outcome, feels stuck getting there alone and trusts you to guide them.",
      },
      {
        type: "paragraph",
        text: "This guide covers choosing and testing a topic. The course business as a whole is in creator course business.",
        links: [{ text: "creator course business", href: "/blog/creator-course-business" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Choose a course topic by finding a specific outcome your audience repeatedly struggles to reach, where they'd pay for structure, speed or support. Narrow broad subjects into outcomes (\"get your first three freelance design clients\" rather than \"design\"), check you can credibly teach it, compare what alternatives already exist and what's missing, score candidates on demand, pain, credibility and fit, and test the top one with a workshop, waitlist or pre-sale before building.",
      },
      { type: "heading", text: "Signs people will pay", id: "signs" },
      {
        type: "list",
        items: [
          "The same question keeps coming up in comments and DMs.",
          "People describe failed attempts (\"I tried free videos but…\").",
          "Your content on the topic gets saved and shared heavily.",
          "People ask for one-to-one help.",
          "There's a clear outcome with value (a job, a client, time saved, money managed better).",
        ],
      },
      {
        type: "paragraph",
        text: "Creator audience research covers gathering these signals.",
      },
      {
        type: "paragraph",
        text: "Research: creator audience research.",
        links: [{ text: "creator audience research", href: "/blog/creator-audience-research" }],
      },
      { type: "heading", text: "Narrow the topic to an outcome", id: "narrow" },
      {
        type: "table",
        headers: ["Broad topic", "Outcome-based course (illustrative)"],
        rows: [
          ["Excel", "Excel for accounts executives: month-end reports in half the time"],
          ["Photography", "Phone product photos for small online sellers"],
          ["Personal finance", "Your first year of saving and investing basics (educational)"],
          ["YouTube", "Launch a faceless educational channel in 60 days"],
          ["Cooking", "Weekday tiffin planning for working parents"],
        ],
      },
      { type: "heading", text: "Check credibility", id: "credibility" },
      {
        type: "paragraph",
        text: "Can you teach this well because of experience, results or expertise? Have you helped others reach this outcome? In regulated areas such as investments, health or law, make sure the course is educational and within your qualifications.",
      },
      { type: "heading", text: "Compare alternatives", id: "alternatives" },
      {
        type: "paragraph",
        text: "Look at free content, existing courses, books and offline classes. Ask what's missing: a language, a specific audience, practical examples, support, recency. Creator competitor analysis and how to find content gaps help.",
      },
      {
        type: "paragraph",
        text: "Gaps: creator competitor analysis and how to find content gaps.",
        links: [
          { text: "creator competitor analysis", href: "/blog/creator-competitor-analysis" },
          { text: "how to find content gaps", href: "/blog/how-to-find-content-gaps" },
        ],
      },
      { type: "heading", text: "Score your topics", id: "score" },
      {
        type: "template",
        label: "Course topic scoring (1–5 each)",
        text: "Demand: how often people ask\nPain: how stuck and frustrated they are\nOutcome value: what reaching it is worth to them\nCredibility: can I teach this well?\nAudience fit: is it for the people who follow me?\nGap: is there something missing in alternatives?\nEnjoyment: will I want to teach this for a year?",
      },
      { type: "heading", text: "Test before you build", id: "test" },
      {
        type: "paragraph",
        text: "Run a live workshop on the topic, open a waitlist with a price, or pre-sell a first cohort. Creator digital product validation explains the methods.",
      },
      {
        type: "paragraph",
        text: "Testing: creator digital product validation.",
        links: [{ text: "creator digital product validation", href: "/blog/creator-digital-product-validation" }],
      },
      { type: "heading", text: "Worked example: narrowing a course topic", id: "example" },
      {
        type: "template",
        label: "Illustrative: a finance creator with a Hindi audience",
        text: "Starting idea: \"Personal finance course\"\nAudience signals: repeated DMs about \"first salary\", \"SIP kaise shuru karein\", \"tax regime confusion\"\nScoring (1–5):\n• \"Personal finance basics\": demand 5, pain 3, value 3, credibility 5, fit 4, gap 2 → 22\n• \"Your first salary: 30-day money setup\": demand 5, pain 4, value 4, credibility 5, fit 5, gap 4 → 27\n• \"Advanced options trading\": demand 3, pain 4, value 4, credibility 2, fit 2, gap 2 → 17 (and regulatory care needed)\nChosen: \"Your first salary: 30-day money setup\" (educational, no investment recommendations)\nTest: a paid 90-minute workshop on the first week of the setup → sold out twice → course built from workshop questions",
      },
      { type: "heading", text: "Topic red flags", id: "red-flags" },
      {
        type: "list",
        items: [
          "The outcome depends mainly on factors outside the student's control (job markets, algorithms, investment returns).",
          "You'd need to promise results to make it sound valuable.",
          "The topic is regulated and outside your qualifications.",
          "Existing free content already answers it completely, in your audience's language.",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Topics too broad to finish.",
          "Choosing what you want to teach rather than what people want to learn.",
          "Ignoring existing free alternatives.",
          "Teaching outside your expertise.",
          "Building before testing.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A strong course topic is a specific outcome your audience struggles to reach and trusts you to help with. Narrow it, check credibility and alternatives, score candidates and test the best before building.",
      },
    ],
    faqs: [
      {
        question: "How do I choose a topic for an online course?",
        answer:
          "Find a specific outcome your audience repeatedly struggles to reach, narrow it, check you can teach it credibly, compare alternatives and test demand with a workshop, waitlist or pre-sale.",
      },
      {
        question: "What makes a course topic profitable?",
        answer:
          "Clear demand, real frustration, a valuable outcome, your credibility, audience fit and something missing from existing alternatives. None of these is guaranteed by audience size.",
      },
      {
        question: "Should a course topic be narrow or broad?",
        answer:
          "Narrow enough to deliver a clear outcome. Broad topics are hard to finish and hard to sell.",
      },
    ],
  },
  {
    slug: "creator-course-pricing",
    category: "Creator Resources",
    title: "Creator Course Pricing: How Much Should an Online Course Cost?",
    seoTitle: "Creator Course Pricing: How Much Should an Online Course Cost?",
    excerpt:
      "How creators price online courses: value of the outcome, format and support level, audience budget, alternatives, tiers, cohort vs self-paced pricing, payment plans, launch pricing, fees and GST, and signals to adjust price.",
    metaDescription:
      "How creators price online courses: outcome value, format and support, audience budget, tiers, cohort vs self-paced, payment plans, launch pricing and fees.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["course pricing", "how to price an online course", "online course price India", "cohort course pricing", "course payment plans", "pricing a course"],
    related: ["creator-course-business", "creator-digital-product-pricing", "creator-course-launch"],
    body: [
      {
        type: "paragraph",
        text: "Course prices vary enormously, and not because some creators are greedy and others generous. Price follows the outcome, the level of support, the audience's budget and the alternatives available. A mini-course teaching one skill and a live cohort with feedback aren't the same product and shouldn't cost the same.",
      },
      {
        type: "paragraph",
        text: "This guide covers course pricing specifically. General digital product pricing is in creator digital product pricing; pricing across all offers in creator pricing strategy.",
        links: [
          { text: "creator digital product pricing", href: "/blog/creator-digital-product-pricing" },
          { text: "creator pricing strategy", href: "/blog/creator-pricing-strategy" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Price a course by the value of the outcome it delivers, the level of support included, your audience's budget and the alternatives they'd otherwise choose. Self-paced courses usually cost less than cohorts with live sessions and feedback. Use tiers (course only, course plus community, course plus feedback), consider payment plans for higher prices, use honest launch pricing, account for platform fees and GST, and adjust based on conversion, refunds and student results.",
      },
      { type: "heading", text: "What drives course price", id: "drivers" },
      {
        type: "table",
        headers: ["Driver", "Pushes price up", "Pushes price down"],
        rows: [
          ["Outcome value", "Career, income or major time savings", "Hobby or nice-to-have"],
          ["Support", "Live sessions, feedback, community", "Self-paced only"],
          ["Specificity", "Niche, specialist", "Broad, widely available"],
          ["Proof", "Strong results and testimonials", "New, untested"],
          ["Audience budget", "Professionals, businesses", "Students, price-sensitive audiences"],
        ],
      },
      { type: "heading", text: "Pricing by format", id: "formats" },
      {
        type: "table",
        headers: ["Format", "Relative price", "Why"],
        rows: [
          ["Mini-course", "Lowest", "One skill, short"],
          ["Self-paced course", "Low to medium", "Scales; no live time"],
          ["Hybrid", "Medium", "Adds live Q&A"],
          ["Cohort", "Higher", "Live teaching, accountability, feedback"],
          ["Cohort + 1:1", "Highest", "Personal support"],
        ],
      },
      { type: "heading", text: "Tiers", id: "tiers" },
      {
        type: "template",
        label: "Course tiers (illustrative)",
        text: "CORE: self-paced lessons + templates\nPLUS: core + community + monthly live Q&A\nPRO: plus + two 1:1 reviews (limited seats)",
      },
      { type: "heading", text: "Payment plans", id: "payment-plans" },
      {
        type: "paragraph",
        text: "For higher-priced courses, instalments make access easier for many buyers. Keep the total transparent, and make sure your platform supports it. Some creators price the instalment total slightly higher to reflect admin and risk; say so clearly.",
      },
      { type: "heading", text: "Launch pricing, honestly", id: "launch" },
      {
        type: "paragraph",
        text: "A founding-cohort price rewards early students who help you improve the course. Make the later price real and state what founding students get. Creator course launch covers the launch plan.",
      },
      {
        type: "paragraph",
        text: "Launch: creator course launch.",
        links: [{ text: "creator course launch", href: "/blog/creator-course-launch" }],
      },
      { type: "heading", text: "Fees and tax", id: "fees" },
      {
        type: "paragraph",
        text: "Platform fees, payment gateway fees and GST (if you're registered) affect what you keep. Calculate net revenue per student before finalising price. See creator profit margin and GST for creators.",
        links: [
          { text: "creator profit margin", href: "/blog/creator-profit-margin" },
          { text: "GST for creators", href: "/blog/gst-for-influencers-india" },
        ],
      },
      { type: "heading", text: "Signals to adjust", id: "adjust" },
      {
        type: "table",
        headers: ["Signal", "Consider"],
        rows: [
          ["Sells out quickly; strong results", "Raise price for the next cohort"],
          ["Many visitors, few buyers", "Clarify outcome; add a lower tier or payment plan"],
          ["High refunds", "Fix delivery or promise before price"],
          ["Students want more support", "Add a higher tier"],
        ],
      },
      { type: "heading", text: "Worked example: pricing three versions of the same course", id: "example" },
      {
        type: "template",
        label: "Illustrative: a spoken-English educator teaching interview skills (Hindi medium)",
        text: "Audience: job seekers, many students and first-job candidates; budget-conscious; UPI-first\nAlternatives they pay for: local coaching classes, one-off mock interviews\n\nSelf-paced (20 short lessons + practice sheets): entry price, sold year-round\nCohort (4 weeks, 2 live sessions a week, feedback on recorded answers): several times the self-paced price, 30 seats\nCohort + 1:1 (adds two private mock interviews): premium tier, 8 seats\n\nChecks before finalising:\n• Net revenue per student after platform and payment fees (and GST if registered)\n• Cohort price vs time: live hours × sessions ÷ seats → does it cover your minimum rate?\n• Payment plan for the cohort tier, with the total shown clearly",
      },
      {
        type: "paragraph",
        text: "The self-paced tier gives price-sensitive learners a way in; the cohort tier pays for the live time; the premium tier is limited by your hours, so it's capped.",
      },
      { type: "heading", text: "Signals from a first cohort", id: "signals" },
      {
        type: "table",
        headers: ["What happened", "What it suggests"],
        rows: [
          ["Sold out in days; many on the waitlist", "Price can rise for cohort two"],
          ["Lots of checkout visits, few purchases", "Test a payment plan or clarify the outcome"],
          ["Students skipped live sessions", "Too much live time for the price; adjust format"],
          ["Strong results and referrals", "Raise price and add testimonials to the page"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Pricing by number of hours of video.",
          "Copying prices from creators with different audiences.",
          "Same price for self-paced and cohort.",
          "Fake permanent discounts.",
          "Promising income outcomes to justify price.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Course pricing reflects outcome value, support, audience budget and alternatives. Use tiers and payment plans, price launches honestly, account for fees and tax, and adjust with evidence from sales, refunds and student results.",
      },
    ],
    faqs: [
      {
        question: "How much should an online course cost?",
        answer:
          "There's no universal price. Base it on the value of the outcome, the support included, your audience's budget and alternatives, and check what you keep after fees and tax.",
      },
      {
        question: "Should cohort courses cost more than self-paced courses?",
        answer:
          "Usually, because cohorts include live teaching, feedback and accountability that take more of your time and often lead to better completion.",
      },
      {
        question: "Are payment plans a good idea for courses?",
        answer:
          "For higher-priced courses they can widen access. Keep the total cost transparent.",
      },
    ],
  },
  {
    slug: "creator-course-launch",
    category: "Creator Resources",
    title: "Creator Course Launch Strategy: From Audience Building to First Sale",
    seoTitle: "Creator Course Launch Strategy: From Audience to First Sale",
    excerpt:
      "How creators launch a course: building the waitlist months ahead, a free workshop or webinar as the launch event, open-cart week, email and community sequences, founding cohorts, handling objections, onboarding students and turning a launch into an evergreen funnel.",
    metaDescription:
      "How creators launch a course: waitlist, a free workshop or webinar as the launch event, open-cart week, email sequences, founding cohorts, objections and evergreen.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["course launch strategy", "launch an online course", "course launch plan", "founding cohort", "open cart launch", "course waitlist"],
    related: ["creator-course-business", "creator-webinar-strategy", "creator-email-funnel"],
    body: [
      {
        type: "paragraph",
        text: "A course launch is an event with a before and an after. The before is weeks or months of building an audience that trusts you on the topic and a waitlist of people who want it. The launch itself is a short, focused window. The after is what keeps the course selling once the launch energy fades. Most first launches under-invest in the before and forget the after.",
      },
      {
        type: "paragraph",
        text: "This guide covers course launches. For a first digital product of any kind, see how to launch your first digital product; for the live session that often anchors a launch, see creator webinar strategy.",
        links: [
          { text: "how to launch your first digital product", href: "/blog/launch-digital-product-creators" },
          { text: "creator webinar strategy", href: "/blog/creator-webinar-strategy" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To launch a course: build topic authority and a waitlist for weeks before, run a free workshop or webinar as the launch event, open enrolment for a short window with a clear offer and honest deadline (such as a cohort start date), email your list and community daily during the window, answer objections openly, onboard students quickly, and afterwards turn the course into an evergreen offer through a lead magnet and email funnel. Plan for modest first launches and learn from them.",
      },
      { type: "heading", text: "The launch phases", id: "phases" },
      {
        type: "table",
        headers: ["Phase", "Timing", "Focus"],
        rows: [
          ["Build", "4–8+ weeks before", "Content on the problem; waitlist; case examples"],
          ["Warm-up", "1–2 weeks before", "Behind the scenes; announce the free event"],
          ["Event", "Launch day", "Free workshop or webinar teaching something useful"],
          ["Open cart", "5–7 days", "Offer, FAQs, objections, stories, reminders"],
          ["Close", "Deadline", "Cohort starts or launch price ends (real)"],
          ["Onboard", "Week 1 of course", "Welcome, community, first quick win"],
          ["Evergreen", "After", "Lead magnet → email funnel → course page"],
        ],
      },
      { type: "heading", text: "The free event", id: "event" },
      {
        type: "paragraph",
        text: "A free workshop or webinar lets people experience your teaching, get a real result and understand what the course adds. Teach something genuinely useful; present the course briefly at the end. Creator webinar strategy covers structure.",
      },
      {
        type: "paragraph",
        text: "Webinars: creator webinar strategy.",
        links: [{ text: "creator webinar strategy", href: "/blog/creator-webinar-strategy" }],
      },
      { type: "heading", text: "Open-cart week content", id: "open-cart" },
      {
        type: "table",
        headers: ["Day", "Content"],
        rows: [
          ["1", "Offer: outcome, who it's for, what's included, price"],
          ["2", "Curriculum walkthrough"],
          ["3", "Student or pilot results (with permission)"],
          ["4", "Objections: time, price, level"],
          ["5", "Your story: why this course"],
          ["6", "Live Q&A"],
          ["7", "Reminder with the real deadline"],
        ],
      },
      { type: "heading", text: "Email and community", id: "email" },
      {
        type: "paragraph",
        text: "Your email list usually drives most launch sales. A simple sequence: event invitation, event replay, offer, FAQ, stories, final reminder. Creator email funnel covers writing sequences.",
      },
      {
        type: "paragraph",
        text: "Email: creator email funnel.",
        links: [{ text: "creator email funnel", href: "/blog/creator-email-funnel" }],
      },
      { type: "heading", text: "Founding cohorts", id: "founding" },
      {
        type: "paragraph",
        text: "A first cohort at a founding price, with live involvement, helps you refine the course and collect results. Be clear about what founding students get and that the course will improve.",
      },
      { type: "heading", text: "Honest deadlines", id: "deadlines" },
      {
        type: "paragraph",
        text: "Use real deadlines: a cohort start date, a founding price that ends, bonuses that close. Avoid fake scarcity or countdown timers that reset.",
      },
      { type: "heading", text: "Onboarding students", id: "onboarding" },
      {
        type: "paragraph",
        text: "Welcome email, access, a start-here lesson, community invitation and a quick first win in week one. Students who start well are more likely to finish and recommend the course.",
      },
      { type: "heading", text: "From launch to evergreen", id: "evergreen" },
      {
        type: "paragraph",
        text: "After the launch, move the course into a steady funnel: a lead magnet related to the course, an email sequence and a course landing page, with periodic live events. The creator funnel and creator landing pages cover the pieces.",
      },
      {
        type: "paragraph",
        text: "Evergreen: the creator funnel and creator landing pages.",
        links: [
          { text: "the creator funnel", href: "/blog/creator-funnel" },
          { text: "creator landing pages", href: "/blog/creator-landing-pages" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Launching without a waitlist.",
          "Free events that are all pitch.",
          "Relying on one social post.",
          "Fake scarcity.",
          "No plan after launch week.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A course launch is built before it happens: authority and a waitlist, a genuinely useful free event, a clear open-cart week, email-led selling, honest deadlines and strong onboarding. Afterwards, an evergreen funnel keeps it selling.",
      },
    ],
    faqs: [
      {
        question: "How do creators launch an online course?",
        answer:
          "Build authority and a waitlist, run a free workshop or webinar, open enrolment for a short window with a clear offer and honest deadline, email your list daily, answer objections and onboard students well.",
      },
      {
        question: "How long before launch should I start promoting a course?",
        answer:
          "Start building topic content and a waitlist several weeks before, with focused warm-up in the final one or two weeks.",
      },
      {
        question: "What is a founding cohort?",
        answer:
          "A first group of students who join at an introductory price, often with extra live involvement, helping the creator refine the course.",
      },
    ],
  },
  {
    slug: "creator-workshops",
    category: "Creator Resources",
    title: "Creator Workshop Business: How to Sell Live Workshops Online",
    seoTitle: "Creator Workshops: How to Sell Live Workshops Online",
    excerpt:
      "How creators sell paid live workshops: choosing a workshop topic and outcome, formats and length, pricing, promotion, running the session well, recordings and follow-up, team workshops for businesses, and using workshops to validate bigger products.",
    metaDescription:
      "How creators sell paid live workshops: topic and outcome, format and length, pricing, promotion, running the session, recordings, team workshops and validation.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "11 min read",
    tags: ["creator workshops", "sell online workshops", "paid workshop India", "live workshop creators", "workshop business", "team workshops for companies"],
    related: ["creator-course-business", "creator-webinar-strategy", "creator-offer-packaging"],
    body: [
      {
        type: "paragraph",
        text: "A paid live workshop is one of the simplest creator products: a date, a topic, a group of people and a result by the end of the session. It needs little upfront production, earns quickly, teaches you what your audience struggles with and often becomes the foundation of a course.",
      },
      {
        type: "paragraph",
        text: "This guide covers paid workshops. Free educational sessions used to sell something else are covered in creator webinar strategy; full courses in creator course business.",
        links: [
          { text: "creator webinar strategy", href: "/blog/creator-webinar-strategy" },
          { text: "creator course business", href: "/blog/creator-course-business" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator workshop is a paid live session (usually 60 to 180 minutes) where participants learn and apply one specific skill or complete one task. Choose an outcome people can reach in the session, design it with short teaching blocks and hands-on exercises, price it by outcome and group size, promote it two to three weeks ahead, run it with a clear agenda and interaction, share the recording and resources afterwards, and use feedback to improve or build a larger product.",
      },
      { type: "heading", text: "Workshop formats", id: "formats" },
      {
        type: "table",
        headers: ["Format", "Length", "Best for"],
        rows: [
          ["Single session", "60–120 min", "One skill or task"],
          ["Two-part workshop", "2 × 90 min", "Skill plus practice"],
          ["Intensive", "Half day", "Bigger task done together"],
          ["Team workshop", "1–3 hours", "Businesses training staff"],
        ],
      },
      { type: "heading", text: "Design for a result", id: "design" },
      {
        type: "template",
        label: "Workshop agenda (illustrative: 90 min \"Plan a month of Reels\")",
        text: "0–10: welcome, goal, quick wins\n10–30: teach: the planning framework\n30–55: exercise: participants plan their pillars and series\n55–70: examples and feedback\n70–85: build the calendar\n85–90: next steps and resources",
      },
      { type: "heading", text: "Pricing", id: "pricing" },
      {
        type: "paragraph",
        text: "Price by the outcome and the level of interaction. Smaller groups with feedback can command more; larger, lecture-style sessions less. Team workshops for businesses are priced per session rather than per person. Creator service pricing covers the underlying method.",
      },
      {
        type: "paragraph",
        text: "Pricing: creator service pricing.",
        links: [{ text: "creator service pricing", href: "/blog/creator-service-pricing" }],
      },
      { type: "heading", text: "Promotion", id: "promotion" },
      {
        type: "paragraph",
        text: "Announce two to three weeks ahead with the outcome, date, time, price and who it's for. Use content on the topic, Stories, your newsletter and community. A reminder the day before and an hour before reduces no-shows.",
      },
      { type: "heading", text: "Running it well", id: "running" },
      {
        type: "list",
        items: [
          "Test tech, audio and screen sharing beforehand.",
          "Keep teaching blocks short; alternate with exercises.",
          "Use chat, polls and breakout rooms for interaction.",
          "Have a helper for tech issues if the group is large.",
          "End with clear next steps.",
        ],
      },
      { type: "heading", text: "Recordings and follow-up", id: "follow-up" },
      {
        type: "paragraph",
        text: "Share the recording and resources within a day, ask for feedback, and invite participants to the next step (a course, coaching or membership) where it genuinely fits.",
      },
      { type: "heading", text: "Workshops as validation", id: "validation" },
      {
        type: "paragraph",
        text: "A workshop tests whether people will pay to learn a topic and shows where they struggle. Several good workshops on the same topic are often the best foundation for a course. Creator digital product validation explains more.",
      },
      {
        type: "paragraph",
        text: "Validation: creator digital product validation.",
        links: [{ text: "creator digital product validation", href: "/blog/creator-digital-product-validation" }],
      },
      { type: "heading", text: "Team workshops for businesses", id: "teams" },
      {
        type: "paragraph",
        text: "Businesses book creators to train staff on social media, content, creator marketing or niche skills. Package these with a clear agenda, materials and a fixed fee, and treat them like consulting engagements.",
      },
      {
        type: "paragraph",
        text: "Consulting: creator consulting services.",
        links: [{ text: "creator consulting services", href: "/blog/creator-consulting-services" }],
      },
      { type: "heading", text: "Worked example: a workshop series that became a course", id: "example" },
      {
        type: "template",
        label: "Illustrative: a photographer teaching phone product photography to small sellers",
        text: "Workshop 1: \"Shoot your products on a phone\" · 90 min · 25 seats · sold via Instagram and a WhatsApp community\nFeedback: lighting and backgrounds were the hardest parts\nWorkshop 2: \"Light and backgrounds under ₹1,000\" · 90 min · 30 seats\nWorkshop 3: \"Editing product photos on your phone\" · 90 min · 30 seats\nAfter three: recordings refined into a self-paced course with the most-asked questions answered\nTeam offer: small brands booked private workshops for their staff",
      },
      { type: "heading", text: "Workshop pricing inputs", id: "pricing-inputs" },
      {
        type: "table",
        headers: ["Input", "Consider"],
        rows: [
          ["Outcome", "What participants leave with"],
          ["Group size", "Smaller groups allow feedback"],
          ["Interaction", "Exercises and reviews vs lecture"],
          ["Materials", "Templates, worksheets, recordings"],
          ["Team or public", "Team sessions priced per session"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Topics too big for the time.",
          "Lecture only, no exercises.",
          "Promoting only a few days before.",
          "No recording or follow-up.",
          "Treating a free webinar as a paid workshop, or vice versa.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Workshops are fast to create, quick to earn from and valuable for learning. Choose an outcome people can reach in the session, design for doing rather than listening, price by outcome, promote early, follow up well and use what you learn to build bigger products.",
      },
    ],
    faqs: [
      {
        question: "How do creators sell workshops online?",
        answer:
          "Choose a specific outcome people can reach in one session, set a date and price, promote two to three weeks ahead through content, newsletter and community, and deliver a hands-on session with follow-up resources.",
      },
      {
        question: "How long should an online workshop be?",
        answer:
          "Usually 60 to 180 minutes, long enough to reach one outcome with teaching and exercises.",
      },
      {
        question: "What's the difference between a workshop and a webinar?",
        answer:
          "A workshop is usually a paid, hands-on session focused on a result. A webinar is usually a free educational session that often introduces a paid offer.",
      },
    ],
  },
  {
    slug: "creator-webinar-strategy",
    category: "Creator Resources",
    title: "Creator Webinar Strategy: How to Turn Educational Sessions Into Revenue",
    seoTitle: "Creator Webinar Strategy: Turn Free Sessions Into Revenue",
    excerpt:
      "How creators use free webinars to educate and sell: choosing a topic that leads to your offer, registration and reminders, a teach-then-offer structure, presenting the offer ethically, replays, follow-up emails and measuring show-up and conversion.",
    metaDescription:
      "How creators run webinars that educate and sell: topic choice, registration and reminders, teach-then-offer structure, ethical offers, replays, follow-up and metrics.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["creator webinar strategy", "webinar to sell course", "free webinar funnel", "webinar structure", "webinar for creators India", "live training sales"],
    related: ["creator-course-launch", "creator-workshops", "creator-email-funnel"],
    body: [
      {
        type: "paragraph",
        text: "A webinar is a free live session that teaches something genuinely useful and, at the end, invites interested people to a paid offer. When the teaching is real, attendees leave with value whether they buy or not, and the ones who buy do so because they've seen how you teach. When the teaching is thin and the pitch is long, attendance drops and trust suffers.",
      },
      {
        type: "paragraph",
        text: "This guide covers webinars as an education-to-revenue tool. Paid hands-on sessions are covered in creator workshops; the course launch around a webinar in creator course launch.",
        links: [
          { text: "creator workshops", href: "/blog/creator-workshops" },
          { text: "creator course launch", href: "/blog/creator-course-launch" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator webinar strategy uses free live sessions to teach one useful idea and introduce a related paid offer. Choose a topic that's the natural first step toward your offer, collect registrations with a clear promise, send reminders to improve attendance, teach for most of the session with real takeaways, present the offer briefly and honestly with a clear next step, send the replay and follow-up emails, and measure registration, show-up and conversion rates to improve the next one.",
      },
      { type: "heading", text: "Choose a topic that leads to the offer", id: "topic" },
      {
        type: "table",
        headers: ["Paid offer", "Webinar topic (illustrative)"],
        rows: [
          ["YouTube starter course", "\"Plan your first 10 videos in 60 minutes\""],
          ["Personal finance cohort", "\"Build your first monthly budget: live walkthrough\""],
          ["Freelance design coaching", "\"How to price your first design project\""],
          ["Product photography course", "\"Shoot product photos on a phone: 5 setups\""],
        ],
      },
      {
        type: "paragraph",
        text: "The webinar solves a first step; the paid offer takes people the rest of the way.",
      },
      { type: "heading", text: "Registration and reminders", id: "registration" },
      {
        type: "template",
        label: "Reminder sequence",
        text: "On registration: confirmation + calendar link + what to prepare\n1 day before: reminder with the key takeaway\n1 hour before: link + \"we start in an hour\"\nAt start time: \"we're live\"\nAfter: replay link (time-limited if you choose, stated honestly)",
      },
      { type: "heading", text: "A teach-then-offer structure", id: "structure" },
      {
        type: "table",
        headers: ["Minutes", "Section"],
        rows: [
          ["0–5", "Welcome, who it's for, what they'll leave with"],
          ["5–40", "Teaching: framework, demo, examples"],
          ["40–45", "Recap and how to apply it"],
          ["45–55", "Offer: who it's for, what's included, price, next step"],
          ["55–60+", "Q&A"],
        ],
      },
      { type: "heading", text: "Present the offer ethically", id: "offer" },
      {
        type: "list",
        items: [
          "Keep the offer short relative to teaching.",
          "Say who it's not for.",
          "State price and refund policy clearly.",
          "Use real deadlines only (a cohort start, an actual bonus end).",
          "Never pressure attendees or invent scarcity.",
        ],
      },
      { type: "heading", text: "Replays and follow-up", id: "follow-up" },
      {
        type: "paragraph",
        text: "Many registrants watch the replay rather than live. Send it with a short summary, then a few follow-up emails: key takeaway, FAQ about the offer, a student story (with permission), and a final reminder if there's a real deadline. Creator email funnel covers sequences.",
      },
      {
        type: "paragraph",
        text: "Emails: creator email funnel.",
        links: [{ text: "creator email funnel", href: "/blog/creator-email-funnel" }],
      },
      { type: "heading", text: "Measure", id: "measure" },
      {
        type: "table",
        headers: ["Metric", "Tells you"],
        rows: [
          ["Registrations", "Topic and promotion appeal"],
          ["Show-up rate", "Reminder effectiveness and timing"],
          ["Watch time", "Teaching quality"],
          ["Offer clicks", "Offer relevance"],
          ["Purchases", "Fit and trust"],
        ],
      },
      {
        type: "paragraph",
        text: "Creator product analytics covers tracking what happens after the offer.",
      },
      {
        type: "paragraph",
        text: "Analytics: creator product analytics.",
        links: [{ text: "creator product analytics", href: "/blog/creator-product-analytics" }],
      },
      { type: "heading", text: "Worked example: a webinar that leads to a cohort", id: "example" },
      {
        type: "template",
        label: "Illustrative: a design creator selling a freelancing cohort",
        text: "Webinar: \"Price your first design project (live walkthrough)\" · 60 minutes · free\nRegistration page: who it's for, what they'll leave with (a pricing sheet), date, time\nReminders: day before, hour before, \"we're live\"\nSession: 40 minutes teaching the pricing method with three real (anonymised) examples; 10 minutes on the cohort; 10+ minutes Q&A\nFollow-up: replay + pricing sheet · FAQ email · a past student's story (with permission) · final reminder before the cohort's real start date\nWhat the creator tracked: registrations, show-up rate, watch time to the end of the teaching section, clicks on the cohort page, enrolments",
      },
      { type: "heading", text: "Webinar vs workshop vs live stream", id: "comparison" },
      {
        type: "table",
        headers: ["", "Webinar", "Paid workshop", "Public live stream"],
        rows: [
          ["Price", "Free", "Paid", "Free"],
          ["Goal", "Educate and introduce an offer", "Deliver a result in-session", "Community, reach"],
          ["Registration", "Yes", "Yes", "No"],
          ["Follow-up", "Replay + email sequence", "Recording + resources", "Replay"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Webinars that are mostly pitch.",
          "Topics unrelated to the offer.",
          "No reminders.",
          "No replay or follow-up.",
          "Fake urgency.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A webinar earns revenue by teaching well first. Pick a topic that leads naturally to your offer, remind registrants, teach generously, present the offer briefly and honestly, follow up with the replay and learn from the numbers.",
      },
    ],
    faqs: [
      {
        question: "How do creators make money from webinars?",
        answer:
          "By teaching a useful first step for free and presenting a related paid offer at the end, followed by replay and follow-up emails for those who want to continue.",
      },
      {
        question: "How long should a webinar be?",
        answer:
          "Around 45 to 75 minutes, with most of the time spent teaching and a short offer and Q&A at the end.",
      },
      {
        question: "How can I get more people to attend my webinar?",
        answer:
          "Choose a clear, specific topic, send reminders a day and an hour before, and schedule it when your audience is available.",
      },
    ],
  },
];
