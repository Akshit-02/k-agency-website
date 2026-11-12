import type { BlogPost } from "@/content/blog";

/**
 * SMM batch 02, writer A (2026-11-12): the Instagram cluster for brands' own accounts. Monthly Instagram
 * management (21), Stories (23), carousels (24) and profile optimisation for enquiries (25).
 * Platform facts checked against Instagram Help, Instagram's own blog and Meta for Creators in November 2026.
 * Sources log: smm-sources-smm-instagram.md in the batch scratchpad.
 */
export const smmInstagramPosts: BlogPost[] = [
  {
    slug: "instagram-management-for-business",
    category: "Social Media Management",
    title: "Instagram Management for Businesses: What Should a Professional Monthly Strategy Include?",
    seoTitle: "Instagram Management for Businesses: Monthly Strategy",
    excerpt:
      "What a professional monthly Instagram strategy covers for a business: objectives, profile, content pillars, the role of each format, planning, publishing, community management, reporting and a monthly checklist.",
    metaDescription:
      "Instagram management for businesses, month by month: objectives, content pillars, format roles, publishing, replies, Insights reporting and a checklist.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-12",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: [
      "Instagram management for businesses",
      "Instagram account management",
      "Instagram marketing strategy for business",
      "Instagram management services",
      "monthly Instagram strategy",
    ],
    related: ["social-media-kpis", "instagram-algorithm-changes-what-still-works", "social-media-content-workflow"],
    hero: {
      src: "/blog/brand-guides/instagram-management-for-business.svg",
      alt: "A monthly Instagram management loop: set objectives, plan pillars and formats, create and publish, manage the community, then review Insights and adjust",
    },
    body: [
      {
        type: "paragraph",
        text: "Your Instagram account posts four or five times a week. Some posts are product shots, some are festive greetings, and every few weeks someone remembers to make a Reel. Comments get answered when the person who runs the account has time. Nobody can say what the account is meant to do for the business, so nobody can say whether it's working.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A professional monthly Instagram strategy starts with one or two business objectives, then sets content pillars and gives each format a job: Reels for reach, carousels for depth, Stories for ongoing contact, static posts for clear announcements. It includes a dated monthly calendar, an approval cycle, scheduled publishing, community management within agreed hours, and a monthly review of Instagram Insights that changes next month's plan.",
      },
      { type: "heading", text: "Set account objectives before anything else", id: "objectives" },
      {
        type: "paragraph",
        text: "Instagram can do several jobs for a business, but rarely all of them at once. Pick one primary objective and at most one secondary one for the quarter. The objective decides the content mix, the call to action and what you measure.",
      },
      {
        type: "table",
        headers: ["Objective", "What the content has to do", "What to watch in Insights"],
        rows: [
          ["Awareness in a new city or segment", "Reach people who don't follow you yet", "Views, reach and the share of views from non-followers"],
          ["Trust before purchase", "Answer doubts, show proof, explain the product", "Saves, shares, comments with real questions"],
          ["Enquiries or bookings", "Move interested people to a DM, form or website", "Profile activity, link taps, DMs with intent"],
          ["Launch support", "Build anticipation, then explain the new product", "Story replies, countdown reminders, profile visits in launch week"],
          ["Retention and community", "Give existing customers reasons to come back", "Story views from followers, replies, repeat commenters"],
        ],
      },
      { type: "subheading", text: "Get the profile ready to receive visitors" },
      {
        type: "paragraph",
        text: "Every good post sends some people to your profile, so the profile has to explain what you do, for whom and what to do next. Check the name field, the bio, the links, pinned posts, Highlights and contact options at least once a quarter. We cover this in detail in how to turn Instagram profile visitors into enquiries.",
        links: [{ text: "how to turn Instagram profile visitors into enquiries", href: "/blog/instagram-business-profile-optimization" }],
      },
      { type: "heading", text: "Build three to five content pillars", id: "content-pillars" },
      {
        type: "paragraph",
        text: "Content pillars are the recurring themes the account comes back to. They stop the calendar from becoming a list of whatever product needs a push this week. Three to five is enough for most businesses. More than that and nothing gets repeated often enough for people to recognise it.",
      },
      {
        type: "list",
        items: [
          "Education: what the customer needs to know to use or choose the product well.",
          "Product and proof: features, use cases, reviews and customer content you have permission to share.",
          "Behind the brand: the people, process, sourcing or workspace.",
          "Community and conversation: questions from customers, polls, replies to comments.",
          "Moments: launches, offers, festive and seasonal content tied to the business calendar.",
        ],
      },
      {
        type: "paragraph",
        text: "Write each pillar down with a one-line purpose and two or three example post ideas, and check it sounds like the brand. If the voice keeps drifting between designers and writers, settle it first with a short brand voice document.",
      },
      { type: "heading", text: "Give each format a role", id: "formats" },
      {
        type: "paragraph",
        text: "Treat formats as tools with different jobs rather than boxes to fill. The roles below are a practitioner view of how formats usually work together, not platform rules.",
      },
      {
        type: "table",
        headers: ["Format", "Usual role", "Typical use for a business"],
        rows: [
          ["Reels", "Reach and discovery, including people who don't follow you", "Product demos, quick tips, customer stories, founder explainers"],
          ["Carousels", "Depth and reference value people save", "How-to guides, comparisons, checklists, myth vs fact"],
          ["Stories", "Ongoing contact with people who already follow you", "Updates, polls, FAQs, behind the scenes, launch countdowns"],
          ["Static posts", "Clear, single-message announcements", "New product, offer, opening hours, event, milestone"],
        ],
      },
      {
        type: "paragraph",
        text: "Each format has its own guide in this series: a Reels strategy built around products and customers, how to use Instagram Stories between posts, and how to plan carousels that educate. Before planning reach-focused Reels, read Instagram's own help page on which reels it may show less often. At the time of writing (November 2026), it lists reels that are blurry or muted, have borders or watermarks, are mostly text or aren't original, among others.",
        links: [
          { text: "a Reels strategy built around products and customers", href: "/blog/instagram-reels-strategy-for-brands" },
          { text: "how to use Instagram Stories between posts", href: "/blog/instagram-stories-for-business" },
          { text: "how to plan carousels that educate", href: "/blog/instagram-carousel-strategy" },
          { text: "which reels it may show less often", href: "https://help.instagram.com/1525585517644948/" },
        ],
      },
      { type: "heading", text: "Run the month on a fixed planning cycle", id: "monthly-planning" },
      {
        type: "paragraph",
        text: "Consistency on Instagram comes from a calendar that is planned and approved before the month starts, not from posting when there's time. A simple cycle for a brand with one approver looks like this:",
      },
      {
        type: "list",
        items: [
          "Week 3 of the previous month: review last month's Insights, list launches, offers and dates, and agree themes.",
          "Week 4: share the full calendar with post ideas, formats, captions in draft and the footage needed.",
          "Before the month starts: designs and edits ready for the first two weeks, approved in one batch.",
          "Mid-month: the second batch is approved, with space kept for one or two timely posts.",
          "Through the month: Stories planned weekly, because they depend more on what's happening now.",
        ],
      },
      {
        type: "paragraph",
        text: "If you need the template itself, see how to build a monthly social media content calendar. It also covers the planning meeting and how approvals fit into the month.",
        links: [{ text: "how to build a monthly social media content calendar", href: "/blog/monthly-social-media-content-calendar" }],
      },
      { type: "subheading", text: "Publishing" },
      {
        type: "paragraph",
        text: "Approved posts and Reels should be scheduled with the final caption, cover image, alt text where relevant, location and any collaborator or product tags already set. Someone should check each post on a phone after it goes live, because crops, cover frames and line breaks don't always come out as planned.",
      },
      { type: "heading", text: "Community management within agreed hours", id: "community-management" },
      {
        type: "paragraph",
        text: "Comments and DMs are where Instagram turns into a conversation with buyers. A monthly plan should state who replies, during which hours, how quickly, and which messages go to your team: order problems, refunds, medical or legal questions, complaints and press enquiries. Keep a short library of approved replies for common questions so answers stay consistent. Agree in advance where community management ends and customer support begins.",
      },
      { type: "heading", text: "Reporting with Instagram Insights", id: "reporting" },
      {
        type: "paragraph",
        text: "Instagram Insights is available to professional accounts. At the time of writing (November 2026), Instagram Help describes views, reach, interactions (likes, comments, saves and shares on posts and Reels) and profile activity such as profile visits and link taps. Meta announced in November 2024 that views would replace plays and impressions as the main count across Facebook and Instagram, so older reports may use different names. Metric names change, so check the current Insights screens before you fix a report template.",
        links: [
          { text: "Instagram Help describes", href: "https://help.instagram.com/788388387972460" },
          { text: "Meta announced in November 2024", href: "https://creators.facebook.com/introducing-views-to-simplify-content" },
        ],
      },
      {
        type: "paragraph",
        text: "A useful monthly report answers three questions: which content did its job against the objective, what we learned about the audience, and what changes next month. Pick the metrics by objective using social media KPIs by business goal.",
        links: [{ text: "social media KPIs by business goal", href: "/blog/social-media-kpis" }],
      },
      { type: "heading", text: "What a monthly management scope should include", id: "monthly-scope" },
      {
        type: "paragraph",
        text: "Whether the work is in-house or with an agency, write the monthly scope down. Vague scopes are where most Instagram disappointments start.",
      },
      {
        type: "table",
        headers: ["Line", "What to specify"],
        rows: [
          ["Strategy", "Objectives, pillars and a quarterly review"],
          ["Calendar", "Delivery date, revision rounds, approval turnaround"],
          ["Reels", "Number per month, who supplies footage, scripting and editing"],
          ["Carousels and static posts", "Number per month, slide counts, design templates"],
          ["Stories", "Number of Story days or frames per week, stickers, Highlights upkeep"],
          ["Copy", "Captions, hooks, alt text, languages"],
          ["Community management", "Hours, days, response time, comments vs DMs, escalation list"],
          ["Reporting", "Monthly report, review call, metrics tied to the objective"],
          ["Scoped separately", "Shoots, paid ads and ad budgets, influencer fees, customer support, crisis communication"],
        ],
      },
      { type: "subheading", text: "Monthly Instagram strategy checklist" },
      {
        type: "list",
        items: [
          "Primary objective for the month written down, with the metric that shows progress.",
          "Profile checked: bio, links, pinned posts and Highlights match current offers.",
          "Calendar covers every pillar at least once and every planned launch or offer.",
          "Each Reel, carousel and static post has a stated purpose and call to action.",
          "Stories planned week by week, with at least one interactive sticker each week.",
          "Footage, product samples and claims checked before design starts.",
          "All content approved before scheduling, with one named approver.",
          "Reply hours and escalation list shared with whoever handles comments and DMs.",
          "Insights pulled for the month and compared with the previous month.",
          "Three changes agreed for next month based on what the numbers and comments showed.",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Posting the same content type every day because it is quick to make.",
          "Treating Stories as an afterthought, so followers only hear from you when you sell.",
          "Copying trends that don't fit the brand just to chase views.",
          "Judging the month on follower count alone.",
          "Leaving DMs unread for days while posting continues on schedule.",
          "Changing the plan every week, so nothing runs long enough to learn from.",
        ],
      },
      { type: "heading", text: "Practical recommendations", id: "recommendations" },
      {
        type: "list",
        items: [
          "Commit to a posting rhythm your team can approve every month, then hold it for a quarter.",
          "Plan Reels as series rather than one-offs, so ideas and edits get faster.",
          "Turn the questions in your DMs into carousels and Story FAQs.",
          "Review the profile whenever offers, prices or locations change.",
          "Keep a running list of what worked, and reuse winning formats with new topics.",
        ],
      },
      {
        type: "paragraph",
        text: "For a reference point, here is what a managed Instagram and social media service from Kudozz covers and scopes separately, and how we work with brands more broadly.",
        links: [
          { text: "what a managed Instagram and social media service from Kudozz covers", href: "/services/social-media-management#scope" },
          { text: "how we work with brands", href: "/for-brands" },
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Write down one objective, three to five pillars and a role for each format, then plan next month's calendar against them. Run that cycle for three months before judging it. A strategy you can repeat every month will do more for the account than a burst of activity followed by silence.",
      },
    ],
    faqs: [
      {
        question: "How often should a business post on Instagram?",
        answer:
          "There's no official number. Pick a rhythm your team can plan, produce and approve every month without rushing, and keep it steady. For many small brands that means a few feed posts or Reels a week plus Stories on most days. Consistency over a quarter tells you more than a short burst of daily posting.",
      },
      {
        question: "Should a business use a professional account on Instagram?",
        answer:
          "Yes, in most cases. Professional accounts get Instagram Insights, contact options and business tools that personal accounts don't. Business or creator is a choice you make in settings. Most brands choose a business account, but check the current options in Instagram Help, as the tools available to each type change over time.",
      },
      {
        question: "How long before an Instagram strategy shows results?",
        answer:
          "Expect the first month to be about setting up the profile, pillars and workflow. Give a new plan around three months before judging it, because you need enough posts in each format to see patterns. Nobody can promise a specific growth figure, since Instagram decides distribution.",
      },
      {
        question: "Can one person manage a business Instagram account?",
        answer:
          "For a small account, yes, if the scope is realistic. The work covers planning, design, video editing, copy, publishing, replies and reporting. One person can do a lighter version of all of it, but video and community replies usually suffer first. Be clear which parts get priority each week.",
      },
      {
        question: "Do we need to run ads alongside organic Instagram management?",
        answer:
          "Not necessarily. Organic management builds the account, content and community; paid ads buy reach for specific goals. They're different jobs, and ad management is usually scoped and budgeted separately. Many brands start organic, then promote proven posts once they know what works.",
      },
    ],
  },
  {
    slug: "instagram-stories-for-business",
    category: "Social Media Management",
    title: "Instagram Stories for Businesses: How to Keep Your Audience Engaged Between Posts",
    seoTitle: "Instagram Stories for Business: Keep Followers Engaged",
    excerpt:
      "How businesses can use Instagram Stories as ongoing communication: what to post, which stickers to use, how to build Highlights, a seven-day example plan and how to read Story insights.",
    metaDescription:
      "Instagram Stories for business: what to post between feed posts, using polls, questions, quizzes and link stickers, Highlights, a 7-day plan and Story insights.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-12",
    lastReviewed: "November 2026",
    readingTime: "8 min read",
    tags: [
      "Instagram Stories for business",
      "Instagram Stories strategy",
      "Instagram Stories ideas for brands",
      "Instagram Story highlights",
      "Instagram Story stickers",
    ],
    related: ["instagram-stories-influencer-marketing", "customer-testimonials-ugc", "instagram-content-strategy"],
    hero: {
      src: "/blog/brand-guides/instagram-stories-for-business.svg",
      alt: "Four jobs Instagram Stories do for a business between feed posts: update, ask, show and keep, with Highlights holding the Stories worth keeping",
    },
    body: [
      {
        type: "paragraph",
        text: "A bakery posts a new cake on its feed on Monday, then nothing until Thursday. In between, the owner is answering the same three DMs about delivery areas, eggless options and order cut-off times. Those three days are exactly when Stories could be doing the talking: a quick poll on next week's flavour, an answer to the delivery question, a look at the oven at 6 am.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Use Instagram Stories as the ongoing conversation between feed posts. Post short updates, answer FAQs, show behind the scenes, share customer feedback with permission and build up to launches. Use polls, questions, quizzes and link stickers to invite a response or a next step. Save the Stories worth keeping into Highlights on your profile, and review replies, sticker taps and exits each week to see what holds attention.",
      },
      { type: "heading", text: "Stories as ongoing communication", id: "ongoing-communication" },
      {
        type: "paragraph",
        text: "Instagram's own guide says Stories last for 24 hours from the moment you post them, then move to your archive. That short life is what makes them useful: they can be quick, informal and timely without cluttering the profile grid. The feed carries the polished, lasting content. Stories carry the day-to-day.",
        links: [{ text: "Instagram's own guide", href: "https://about.instagram.com/blog/tips-and-tricks/how-to-use-instagram-stories" }],
      },
      {
        type: "paragraph",
        text: "In practice, Stories are mostly seen by people who already follow you. That makes them a retention and trust tool more than a reach tool. Plan them for the customer who is already interested and needs a reason to come back, ask a question or buy. This guide is about your brand's own Stories. If you're working with creators, see our guide to Instagram Stories influencer marketing.",
        links: [{ text: "Instagram Stories influencer marketing", href: "/blog/instagram-stories-influencer-marketing" }],
      },
      { type: "heading", text: "What to post in Stories", id: "what-to-post" },
      { type: "subheading", text: "Product updates" },
      {
        type: "paragraph",
        text: "Restocks, new shades or sizes, price changes, delivery updates and opening hours. These are useful but too small for a feed post. Keep them short, one message per frame, with large readable text.",
      },
      { type: "subheading", text: "FAQs" },
      {
        type: "paragraph",
        text: "Take the questions you get most in DMs and comments and answer one per day. Over time these become a ready-made FAQ Highlight, and they reduce repetitive DMs.",
      },
      { type: "subheading", text: "Behind the scenes" },
      {
        type: "paragraph",
        text: "Packing orders, a team meeting, a supplier visit, a product being tested. This content doesn't need to be polished, but it does need to be real. Check that nothing confidential, such as customer addresses on labels, is visible.",
      },
      { type: "subheading", text: "Customer feedback, with permission" },
      {
        type: "paragraph",
        text: "Resharing a customer's Story when they tag you is common practice, but ask before you screenshot a DM or a review and post it. Remove personal details, never edit what the customer said, and keep a record of the permission. Our guide to using customer testimonials and UGC covers the evidence and consent rules in more detail.",
        links: [{ text: "using customer testimonials and UGC", href: "/blog/customer-testimonials-ugc" }],
      },
      { type: "subheading", text: "Launches and community interactions" },
      {
        type: "paragraph",
        text: "Use Stories to build up to a launch over several days: a teaser, a countdown, a sneak peek, then launch day with a link. Between launches, reply to good questions publicly in Stories (with the person's permission if you show their name), run small polls and thank people who share your product.",
      },
      { type: "heading", text: "Interactive stickers and how to use them", id: "stickers" },
      {
        type: "paragraph",
        text: "At the time of writing (November 2026), Instagram's guide to Stories lists poll, quiz, questions, emoji slider, countdown, link and Add Yours stickers, among others. Instagram opened the link sticker to all accounts in October 2021, except new accounts and accounts that repeatedly break Community Guidelines. Sticker options change, so check the sticker tray in the app before planning a campaign around one.",
        links: [{ text: "opened the link sticker to all accounts", href: "https://about.instagram.com/blog/announcements/expanding-sharing-links-in-stories-to-everyone" }],
      },
      {
        type: "table",
        headers: ["Sticker", "Good business use", "Watch out for"],
        rows: [
          ["Poll", "Choose the next flavour, colour or topic; quick sentiment checks", "Only ask what you'll act on, and share the result"],
          ["Questions", "Collect FAQs, run an 'ask us anything' with a product expert", "Screen replies before resharing; some will be complaints"],
          ["Quiz", "Light product education, myth vs fact", "Keep it fair and easy; don't make claims you can't support"],
          ["Emoji slider", "Gauge enthusiasm for an idea or launch", "Hard to act on, so use it sparingly"],
          ["Countdown", "Launches, sales, events and live sessions", "Followers can opt in to a reminder, so keep the date"],
          ["Link", "Send people to a product page, booking page or form", "One clear destination per frame; check the link works"],
        ],
      },
      {
        type: "paragraph",
        text: "If you plan to boost a Story as an ad, check Instagram's boosting rules first. At the time of writing, Instagram Help says Stories with polls, quizzes, music or link stickers can't be boosted, so build boosted Stories separately.",
        links: [{ text: "Instagram Help says", href: "https://help.instagram.com/2281642782069520/" }],
      },
      { type: "heading", text: "Highlights: the Stories worth keeping", id: "highlights" },
      {
        type: "paragraph",
        text: "Highlights appear as round covers under your bio and, according to Instagram, stay there until you remove them. For a business they work like a small menu on the profile. Common sets include FAQs, how to order, delivery, reviews, product categories, stores or locations, and new arrivals.",
      },
      {
        type: "list",
        items: [
          "Keep five to eight Highlights, ordered by what a new visitor most needs.",
          "Use short, plain names that fit under the cover.",
          "Use consistent cover designs so they look like one set.",
          "Remove outdated offers, prices and expired links every month.",
          "Put the most useful frame first in each Highlight, because many people won't tap through all of them.",
        ],
      },
      {
        type: "paragraph",
        text: "Highlights are a big part of how a profile converts visitors into enquiries, which we cover in how to turn Instagram profile visitors into business enquiries.",
        links: [{ text: "how to turn Instagram profile visitors into business enquiries", href: "/blog/instagram-business-profile-optimization" }],
      },
      { type: "heading", text: "A seven-day example Stories plan", id: "seven-day-plan" },
      {
        type: "paragraph",
        text: "Here's a hypothetical week for an online tea brand launching a new cold brew blend on Saturday. It's an illustration, not a benchmark for volume.",
      },
      {
        type: "table",
        headers: ["Day", "Theme", "Frames", "Sticker or action"],
        rows: [
          ["Monday", "Behind the scenes", "Blending and packing the new batch, no product name yet", "Emoji slider: how much do you like cold brew?"],
          ["Tuesday", "FAQ", "Answer 'Is this tea caffeinated?' with a simple graphic", "Questions sticker: what else do you want to know?"],
          ["Wednesday", "Teaser", "Close-up of the new pack, name hidden", "Countdown to Saturday"],
          ["Thursday", "Education", "Three-frame quick quiz on cold brewing vs hot brewing", "Quiz sticker"],
          ["Friday", "Community", "Reshare two customer Stories (with permission) of their current favourite blend", "Poll: which pairing should we post next?"],
          ["Saturday", "Launch", "Reveal, how to brew it, price", "Link sticker to the product page"],
          ["Sunday", "Recap", "Answers to questions from the week, poll result", "Add the best frames to the New Arrivals and FAQ Highlights"],
        ],
      },
      { type: "heading", text: "Measuring Story performance", id: "measuring" },
      {
        type: "paragraph",
        text: "At the time of writing (November 2026), Instagram Help shows Story insights for professional accounts, including interactions such as replies, shares, sticker taps and link taps, and profile activity such as profile visits and follows. Navigation data shows forward taps, back taps, swipes to the next story and exits. Instagram Help says Story insights stay available for up to two years.",
        links: [{ text: "Instagram Help shows Story insights", href: "https://help.instagram.com/383939598845756/" }],
      },
      {
        type: "list",
        items: [
          "Compare views on the first frame of the day with the last frame. A sharp drop shows where people lost interest.",
          "Look at exits and next-story swipes frame by frame, not just in total.",
          "Back taps often mean a frame had too much text to read in time.",
          "Count replies and sticker taps as signals of interest, and read the replies themselves.",
          "Track link taps against the visits and enquiries your website or booking tool records.",
        ],
      },
      {
        type: "paragraph",
        text: "Our guide to Instagram Insights for creators explains the metrics in more depth; the definitions are the same for brand accounts.",
        links: [{ text: "Instagram Insights for creators", href: "/blog/instagram-insights-for-creators" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Posting Stories only when there's a sale.",
          "Ten frames in a row of reshared tags, with nothing from the brand.",
          "Polls and questions with no follow-up, so followers stop answering.",
          "Small text near the top or bottom of the frame, where it gets covered.",
          "Highlights full of expired offers and broken links.",
        ],
      },
      { type: "heading", text: "Practical recommendations", id: "recommendations" },
      {
        type: "list",
        items: [
          "Plan Stories weekly, with a theme for each day, and leave room for real-time updates.",
          "Use at least one interactive sticker a week, and share what you learned from it.",
          "Keep a library of templates for FAQs, updates and launches so Stories are quick to make.",
          "Review Story insights weekly and Highlights monthly.",
          "Agree who answers Story replies, because they land in your DMs.",
        ],
      },
      {
        type: "paragraph",
        text: "Stories are a natural part of community management, and they sit in the same monthly plan as feed posts in a social media management engagement. For how that plan fits together, see Instagram management for businesses, and for how we work with brands, visit our brands page.",
        links: [
          { text: "community management", href: "/services/social-media-management#community-management" },
          { text: "Instagram management for businesses", href: "/blog/instagram-management-for-business" },
          { text: "our brands page", href: "/for-brands" },
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Pick one theme per weekday, write down your five most common customer questions, and plan next week's Stories around them. Add one sticker a week, keep the best frames in Highlights, and look at exits and replies every Friday. Stories work best as a habit, not a campaign.",
      },
    ],
    faqs: [
      {
        question: "How many Instagram Stories should a business post a day?",
        answer:
          "Instagram doesn't set a number for this. Post enough to say something useful, and stop before frames turn repetitive. Check exits and next-story swipes: if people leave by the third frame, shorten the sequence. Posting on most days usually matters more than posting many frames on a single day.",
      },
      {
        question: "Can we reshare customer Stories without asking?",
        answer:
          "When a customer tags you in a Story, Instagram lets you reshare it, and many brands do. For anything beyond that, such as screenshots of DMs, reviews or photos from elsewhere, ask first and keep a record. Never alter what the customer said, and remove personal details.",
      },
      {
        question: "Do Stories help us reach new people?",
        answer:
          "Mostly they reach people who already follow you, so treat them as a retention and trust tool. Reels and shared posts do more for discovery. Stories can still reach new people when followers share them or when you're tagged by others, but don't plan your growth around that.",
      },
      {
        question: "Should we use Close Friends for business Stories?",
        answer:
          "Some brands use a Close Friends list for early access or loyal customers. It can work if you have a clear way to add people and a reason they'd want to be on it. Remember that you add people manually, so it's practical only for a small group.",
      },
    ],
  },
  {
    slug: "instagram-carousel-strategy",
    category: "Social Media Management",
    title: "How to Plan Instagram Carousels That Educate, Engage and Build Brand Trust",
    seoTitle: "Instagram Carousel Strategy: Plan Posts That Build Trust",
    excerpt:
      "How to plan Instagram carousels for a brand: structure, first-slide hooks, story progression, educational and comparison carousels, design consistency, measuring saves and shares, and five reusable frameworks.",
    metaDescription:
      "An Instagram carousel strategy for brands: structure, first-slide hooks, fair comparison carousels, design consistency, saves and shares, and five frameworks.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-12",
    lastReviewed: "November 2026",
    readingTime: "8 min read",
    tags: [
      "Instagram carousel strategy",
      "Instagram carousel ideas for brands",
      "carousel post design",
      "educational carousels",
      "Instagram carousel frameworks",
    ],
    related: ["instagram-content-strategy", "accessible-content-captions-for-creators", "social-media-content-repurposing"],
    hero: {
      src: "/blog/brand-guides/instagram-carousel-strategy.svg",
      alt: "A carousel structure diagram: hook slide, setup, three value slides, proof and a final call to action, with saves and shares as the measures",
    },
    body: [
      {
        type: "paragraph",
        text: "A skincare brand posts a carousel titled 'Our new serum'. Slide two is the pack shot again, slide three lists ingredients in small type, and slide four says 'Shop now'. A week later it posts '3 mistakes people make with their first serum', each slide answering one mistake. The second one gets saved and shared. The difference isn't design budget. It's planning.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Plan each Instagram carousel around one promise made on the first slide and delivered across the rest. Use a clear structure: hook, setup, one idea per slide, proof, and a call to action on the last slide. Educational, step-by-step, product explainer and fair comparison carousels suit brands well. Keep the design consistent across posts, and judge carousels mainly on saves and shares, which show people found them worth keeping or passing on.",
      },
      { type: "heading", text: "When a carousel is the right format", id: "when-to-use" },
      {
        type: "paragraph",
        text: "Carousels suit content people want to read at their own pace or come back to: guides, checklists, comparisons and explanations. Reels are usually better for showing a product in motion or reaching new people. Stories suit quick, temporary updates. If the idea needs more than one screen of information and works without sound, a carousel is often the right choice.",
      },
      {
        type: "paragraph",
        text: "At the time of writing (November 2026), Instagram Help says you can share up to 20 photos and videos in a single feed post. That's a ceiling, not a target. Most brand carousels say what they need to in far fewer slides, and every extra slide is another place for a reader to drop off.",
        links: [{ text: "Instagram Help says", href: "https://help.instagram.com/269314186824048/" }],
      },
      { type: "heading", text: "The structure of a carousel that works", id: "structure" },
      { type: "subheading", text: "Slide 1: the hook" },
      {
        type: "paragraph",
        text: "The first slide decides whether anyone swipes. It should make a specific promise in a few words: a number, a problem, a question or an outcome. 'How to choose a running shoe for flat feet' works better than 'Running shoe guide'. Make the text large enough to read on a phone and add a visual cue that there's more to swipe.",
      },
      { type: "subheading", text: "Slides 2 to the second last: the progression" },
      {
        type: "paragraph",
        text: "Put one idea on each slide, in a logical order, so every swipe gives a small reward. Repeat the visual layout so readers know where to look. If a slide needs a paragraph, it probably needs to be two slides. End each middle slide with a reason to swipe on, such as a numbered step or an unanswered question.",
      },
      { type: "subheading", text: "Last slide: the call to action" },
      {
        type: "paragraph",
        text: "Ask for one thing: save the post, share it with someone, comment with a question, visit the profile link or send a DM with a keyword. Match the ask to the content. An educational carousel earns a 'save this for later'. A product explainer can earn 'tap the link in our bio to see sizes'.",
      },
      { type: "heading", text: "Carousel types that suit brands", id: "carousel-types" },
      {
        type: "table",
        headers: ["Type", "What it does", "Example topic (hypothetical)"],
        rows: [
          ["Educational", "Teaches something useful related to the product", "5 things to check before buying a mattress"],
          ["Product explainer", "Shows how a product works, who it's for and how to use it", "How our water filter's three stages work"],
          ["Step-by-step", "Walks through a process the customer has to follow", "How to set up your smart plug in 4 steps"],
          ["Comparison", "Helps the customer choose between options fairly", "Cotton vs linen bedsheets: which suits a humid city?"],
          ["Myth vs fact", "Corrects common misunderstandings in the category", "4 myths about solar panels on apartment roofs"],
          ["Customer questions", "Answers what people ask most in DMs and comments", "Your top 6 questions about our return policy"],
        ],
      },
      { type: "subheading", text: "Keep comparison carousels fair" },
      {
        type: "paragraph",
        text: "Comparisons between your own products, materials or methods are low risk. Comparisons with competitors need much more care. In India, Chapter IV of the ASCI Code allows comparative advertising, but only when it's clear what is being compared, the comparison isn't chosen to give an artificial advantage, the claims are factual and can be substantiated, consumers aren't likely to be misled, and other products aren't unfairly denigrated. Check any competitor comparison with your legal or compliance team before it's designed.",
        links: [{ text: "Chapter IV of the ASCI Code", href: "https://www.ascionline.in/the-asci-code/" }],
      },
      { type: "heading", text: "Five reusable carousel frameworks", id: "frameworks" },
      {
        type: "paragraph",
        text: "These frameworks give a slide-by-slide structure you can reuse with different topics. Slide counts are a starting point; cut slides that don't earn their place.",
      },
      {
        type: "template",
        label: "Framework 1: The mistakes list (6 slides)",
        text: "Slide 1: '[Number] mistakes people make with [task or product]'\nSlides 2-4: One mistake per slide, with what to do instead\nSlide 5: The one thing to remember, in one line\nSlide 6: 'Save this for your next [task]' + where to learn more",
      },
      {
        type: "template",
        label: "Framework 2: The step-by-step guide (7 slides)",
        text: "Slide 1: 'How to [outcome] in [number] steps'\nSlide 2: What you need before you start\nSlides 3-6: One step per slide, numbered, with a photo or simple illustration\nSlide 7: Common problem and fix + 'Questions? Comment below'",
      },
      {
        type: "template",
        label: "Framework 3: The fair comparison (6 slides)",
        text: "Slide 1: '[Option A] vs [Option B]: which suits you?'\nSlide 2: The question the customer is really asking\nSlide 3: Option A: best for..., less suited to...\nSlide 4: Option B: best for..., less suited to...\nSlide 5: A simple 'choose A if... choose B if...' summary\nSlide 6: 'Still unsure? DM us your [need] and we'll suggest one'",
      },
      {
        type: "template",
        label: "Framework 4: The product explainer (6 slides)",
        text: "Slide 1: The problem the product solves, in the customer's words\nSlide 2: The product, named, with one clear photo\nSlides 3-4: How it works or how to use it, one point per slide\nSlide 5: Who it's for and who it isn't for\nSlide 6: Where to see sizes, prices or variants",
      },
      {
        type: "template",
        label: "Framework 5: The customer questions round-up (7 slides)",
        text: "Slide 1: 'You asked, we answered: [topic]'\nSlides 2-6: One real question per slide (no names) with a short answer\nSlide 7: 'Got another question? Ask in the comments' + link to the FAQ Highlight",
      },
      { type: "heading", text: "Design consistency", id: "design-consistency" },
      {
        type: "paragraph",
        text: "Carousels are where a visual system pays off. Use the same grid, fonts, colour roles and title placement across posts, so followers recognise your carousels before they read the brand name. Set templates for each framework rather than designing from scratch every time. Our guide to social media graphic design for businesses covers how to build that system.",
        links: [{ text: "social media graphic design for businesses", href: "/blog/social-media-graphic-design-for-business" }],
      },
      {
        type: "list",
        items: [
          "Keep important text away from the edges, where the feed can crop it.",
          "Use enough contrast for the text to be readable in sunlight.",
          "Add alt text and put the key points in the caption, so the carousel is accessible to screen reader users.",
          "Use one slide size across the whole carousel.",
          "Check the final export on a phone before approving it.",
        ],
      },
      {
        type: "paragraph",
        text: "More accessibility practice is in our guide to accessible content with captions and subtitles.",
        links: [{ text: "accessible content with captions and subtitles", href: "/blog/accessible-content-captions-for-creators" }],
      },
      { type: "heading", text: "Measuring saves and shares", id: "measuring" },
      {
        type: "paragraph",
        text: "At the time of writing (November 2026), Instagram Help lists likes, comments, saves and shares as the interactions counted in post insights for professional accounts, alongside views and reach. For carousels, saves and shares are the most telling: a save means someone wants to come back to it, and a share means they thought it was useful to someone else.",
        links: [{ text: "Instagram Help lists", href: "https://help.instagram.com/553860108359435/" }],
      },
      {
        type: "list",
        items: [
          "Compare saves and shares per carousel against reach, not just raw counts, so a large-reach post doesn't hide a weak one.",
          "Group carousels by framework and see which structures get saved most.",
          "Read the comments for follow-up questions; they're your next carousel topics.",
          "Track profile activity and link taps for product explainers, since their job is the next step.",
        ],
      },
      {
        type: "paragraph",
        text: "Which of these to report to leadership, and why, depends on the objective. See social media KPIs by business goal.",
        links: [{ text: "social media KPIs by business goal", href: "/blog/social-media-kpis" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "A first slide that is just a logo or a product shot with no promise.",
          "Packing a paragraph onto every slide.",
          "Ending without a call to action, or with five of them.",
          "Comparing yourself with a named competitor on claims you can't prove.",
          "Changing the design style with every post.",
          "Judging carousels on likes alone.",
        ],
      },
      { type: "heading", text: "Practical recommendations", id: "recommendations" },
      {
        type: "list",
        items: [
          "Pick two or three frameworks and use them regularly for a quarter.",
          "Draft the slide text before anyone opens a design tool.",
          "Source topics from DMs, comments, sales calls and reviews.",
          "Turn your most-saved carousels into Reels, Stories or blog posts.",
          "Refresh and repost evergreen carousels when the information changes.",
        ],
      },
      {
        type: "paragraph",
        text: "Carousels sit in the creative design part of social media management. For how they fit into the whole month, see Instagram management for businesses, and for how we work with brands, visit our brands page.",
        links: [
          { text: "creative design part of social media management", href: "/services/social-media-management#creative-design" },
          { text: "Instagram management for businesses", href: "/blog/instagram-management-for-business" },
          { text: "our brands page", href: "/for-brands" },
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "List the ten questions customers ask most. Pick the framework that fits each one, draft the slide text, and design them in one consistent template. Post them over the next month and see which get saved and shared. That tells you what to make more of.",
      },
    ],
    faqs: [
      {
        question: "How many slides should an Instagram carousel have?",
        answer:
          "As many as the idea needs and no more. Instagram allows far more slides than most brand carousels use, but every extra slide is another chance for people to stop swiping. Many brand carousels work well with five to eight slides. Test a shorter and a longer version of the same framework and compare saves and shares to see what your audience prefers.",
      },
      {
        question: "Should carousel slides be photos or designed graphics?",
        answer:
          "Either can work, and mixing them often helps. Designed slides suit guides and comparisons because text stays readable. Photos suit product details and behind-the-scenes. Keep one consistent layout across the carousel either way, and make sure text on photos has enough contrast to read on a phone.",
      },
      {
        question: "Can we include videos inside a carousel?",
        answer:
          "Yes. Instagram lets you mix photos and videos in one feed post. A short demo clip on one slide can explain a product better than a graphic. Keep videos short, add captions or on-screen text for people watching without sound, and make sure the first slide still works as a hook.",
      },
      {
        question: "Is it fine to repost the same carousel later?",
        answer:
          "For evergreen topics, yes. Update anything outdated, refresh the first slide and caption, and post it again a few months later. Many followers won't have seen the original. Avoid reposting so often that the grid looks repetitive, and check the old version's saves and shares first to confirm it's worth repeating.",
      },
      {
        question: "What should the caption of a carousel say?",
        answer:
          "Summarise the main point in the first line, add context or detail the slides couldn't fit, and repeat the call to action. Include the key words people might search for, written naturally. The caption also makes the carousel's information available to people using screen readers.",
      },
    ],
  },
  {
    slug: "instagram-business-profile-optimization",
    category: "Social Media Management",
    title: "How to Turn Instagram Profile Visitors Into Qualified Business Enquiries",
    seoTitle: "Instagram Profile Optimisation for Business Enquiries",
    excerpt:
      "How to optimise an Instagram business profile so visitors understand what you do and know how to enquire: name field, bio, links, pinned posts, Highlights, contact options, proof, the enquiry journey and DM handling.",
    metaDescription:
      "Instagram profile optimisation for business: name and bio, link in bio, pinned posts, Highlights, contact buttons, DM handling and a profile audit checklist.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-12",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: [
      "Instagram profile optimisation for business",
      "Instagram bio for business",
      "Instagram business profile",
      "Instagram link in bio",
      "Instagram highlights for business",
    ],
    related: ["social-media-audit", "instagram-keyword-strategy", "whatsapp-commerce-influencer-marketing"],
    hero: {
      src: "/blog/brand-guides/instagram-business-profile-optimization.svg",
      alt: "The Instagram profile enquiry journey: a visitor reads the name and bio, checks proof in pinned posts and Highlights, then chooses DM, WhatsApp, website or form",
    },
    body: [
      {
        type: "paragraph",
        text: "An interior design studio's Reel gets shared widely, and its profile gets hundreds of visits in two days. The bio says 'Designing dreams since 2015'. The link goes to a homepage. Highlights are from last Diwali. A handful of people send 'price?' in DMs, and most of those messages wait three days for a reply. The Reel did its job. The profile didn't.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Treat your Instagram profile as a landing page. Use the name field and bio to say clearly what you offer, for whom and where. Point your links to specific pages, pin posts that answer the main buying questions, and use Highlights for FAQs, proof and how to enquire. Turn on contact options, pick one main enquiry route, and reply to DMs quickly with a qualifying question. Audit the profile every quarter.",
      },
      { type: "heading", text: "What the profile has to do", id: "profile-job" },
      {
        type: "paragraph",
        text: "Visitors arrive from a post, a Reel, a tag or a search. Within seconds they want to know: is this relevant to me, can I trust them, and what's the next step? Every element of the profile should answer one of those questions.",
      },
      { type: "heading", text: "Name, username, bio and profile image", id: "name-and-bio" },
      { type: "subheading", text: "Name field and discoverability" },
      {
        type: "paragraph",
        text: "In a 2021 post explaining how search works, Instagram said the text people type is the most important search signal, and that it matches it against usernames, bios, captions, hashtags and places. It suggested using a handle or profile name related to your content, including keywords about who you are in your bio, and, for local businesses, adding your location. In practice, a name field like 'Studio Noor | Interior Design Pune' tells both people and search what you do.",
        links: [{ text: "explaining how search works", href: "https://about.instagram.com/blog/announcements/break-down-how-instagram-search-works" }],
      },
      {
        type: "paragraph",
        text: "Keep the username close to your brand name so customers can find you when they search for it directly. Don't stuff the name field with keywords; one clear descriptor is enough. For a deeper look at search wording, our creator-side guide to Instagram keyword strategy applies to brands too.",
        links: [{ text: "Instagram keyword strategy", href: "/blog/instagram-keyword-strategy" }],
      },
      { type: "subheading", text: "Bio positioning" },
      {
        type: "paragraph",
        text: "At the time of writing (November 2026), Instagram Help says a bio can be up to 150 characters, so every line has to work. A useful pattern is: what you offer, who it's for, one differentiator or piece of proof, and what to do next.",
        links: [{ text: "Instagram Help says", href: "https://help.instagram.com/936495066470190" }],
      },
      {
        type: "template",
        label: "Bio structure (example for a hypothetical business)",
        text: "Line 1: What you offer and where. 'Modular kitchens and wardrobes in Pune'\nLine 2: Who it's for or what's different. 'For 2 and 3 BHK homes, designed in 3D first'\nLine 3: Proof you can stand behind. 'In-house factory, 10-year hardware warranty'\nLine 4: Next step. 'DM 'KITCHEN' for a free layout consult'",
      },
      {
        type: "paragraph",
        text: "Only state proof you can back up: a real warranty, a real certification, a real years-in-business figure. Avoid 'best', 'No. 1' or 'most trusted' unless you can substantiate them.",
      },
      { type: "subheading", text: "Profile image" },
      {
        type: "paragraph",
        text: "Use your logo, centred, with enough padding to survive the circular crop. It appears tiny in comments and DMs, so test it small, and keep it the same across platforms.",
      },
      { type: "heading", text: "Links, pinned posts and Highlights", id: "links-pinned-highlights" },
      { type: "subheading", text: "Links in bio" },
      {
        type: "paragraph",
        text: "Instagram lets you add a website to your profile and, according to its help pages, add and reorder more than one link. We couldn't confirm the current maximum from an official page in November 2026, so check the Edit profile screen for what your account allows. Whatever the number, link to specific pages, such as a booking page, a product category or an enquiry form, rather than a generic homepage. Add UTM parameters so your website analytics can show traffic from Instagram.",
        links: [{ text: "according to its help pages", href: "https://help.instagram.com/1128232494579073/" }],
      },
      {
        type: "paragraph",
        text: "If you use a link-in-bio page with several options, keep it short and ordered by what buyers need most. The principles in our guide to link in bio for creators carry over to brands.",
        links: [{ text: "link in bio for creators", href: "/blog/link-in-bio-for-creators" }],
      },
      { type: "subheading", text: "Pinned posts" },
      {
        type: "paragraph",
        text: "At the time of writing, Instagram Help says you can pin up to three posts to the top of your profile. Use them for the content a first-time visitor most needs: what you do (an overview Reel or carousel), proof (a customer story you have permission to share), and how to buy or enquire. Review them when offers change.",
        links: [{ text: "Instagram Help says you can pin up to three posts", href: "https://help.instagram.com/318456537074409/" }],
      },
      { type: "subheading", text: "Highlights" },
      {
        type: "paragraph",
        text: "Highlights keep selected Stories on your profile until you remove them. For enquiries, the most useful sets are usually FAQs, pricing or packages (if you publish them), process, reviews, work samples by category, and how to order or book. Our guide to Instagram Stories for businesses covers how to feed Highlights each week.",
        links: [{ text: "Instagram Stories for businesses", href: "/blog/instagram-stories-for-business" }],
      },
      { type: "heading", text: "Contact options and action buttons", id: "contact-options" },
      {
        type: "paragraph",
        text: "At the time of writing (November 2026), Instagram Help says professional accounts can add a Contact button near the top of the profile, showing a phone number, email or directions, and choose whether to display contact information and the category label. Anyone who taps Contact can see the details you turn on, so use a business number and email.",
        links: [{ text: "Instagram Help says", href: "https://help.instagram.com/529483457260403" }],
      },
      {
        type: "list",
        items: [
          "Category label: choose the category that matches what you sell, since it's shown under your name if you display it.",
          "Email and phone: use shared business addresses and numbers that someone checks daily, not a founder's personal mobile.",
          "Directions: add the address only if customers actually visit, and keep it identical to your Google Business Profile.",
        ],
      },
      {
        type: "paragraph",
        text: "Two further options are worth checking. WhatsApp's help centre explains how to link a WhatsApp Business account to an Instagram professional account, which adds a WhatsApp contact option to the profile. Instagram Help also describes action buttons for business profiles, such as Book Now, Reserve and Order Food, set up through third-party partners. Partner availability varies by location, so check what's offered in India for your category.",
        links: [
          { text: "how to link a WhatsApp Business account", href: "https://faq.whatsapp.com/647574060315065" },
          { text: "describes action buttons for business profiles", href: "https://help.instagram.com/122793804938499" },
        ],
      },
      { type: "heading", text: "Proof, credibility and consistency", id: "proof" },
      {
        type: "paragraph",
        text: "Visitors look at the grid to decide whether you're real and good at what you do. Use only real, permitted proof: customer content shared with consent, genuine reviews, work you actually did, and certifications you actually hold. Never invent testimonials or present stock images as your own work. Our guide to customer testimonials and UGC explains the permission and evidence rules.",
        links: [{ text: "customer testimonials and UGC", href: "/blog/customer-testimonials-ugc" }],
      },
      {
        type: "paragraph",
        text: "Consistency is proof too. Recent posts in a recognisable style tell visitors the business is active. A last post from four months ago makes people wonder whether anyone will answer a DM.",
      },
      { type: "heading", text: "Design the enquiry journey", id: "enquiry-journey" },
      {
        type: "paragraph",
        text: "Decide which route you want most enquiries to take, and make it the most visible one on the profile. Too many equal options split attention and make follow-up harder.",
      },
      {
        type: "table",
        headers: ["Route", "Works well for", "What to set up"],
        rows: [
          ["Instagram DM", "Quick questions, product availability, low-ticket purchases", "Saved replies, a keyword prompt in the bio, agreed reply hours"],
          ["WhatsApp", "Businesses already selling or supporting customers on WhatsApp", "WhatsApp Business linked, catalogue or quick replies, who answers"],
          ["Website", "Ecommerce, detailed product information, pricing pages", "Specific landing pages, UTM-tagged links, mobile-friendly pages"],
          ["Enquiry form", "Services, B2B, higher-value or custom work", "Short form with qualifying fields, confirmation message, follow-up owner"],
          ["Booking or ordering partner", "Salons, clinics, restaurants, classes", "Action button or booking link, availability kept current"],
        ],
      },
      { type: "subheading", text: "DM handling" },
      {
        type: "paragraph",
        text: "DMs are where profile visits become enquiries or disappear. Agree who answers, during which hours, and how fast. Reply with a helpful answer plus one qualifying question, such as budget range, location, timeline or quantity, so the sales team gets context. Move serious enquiries to the agreed route and log them so you can count enquiries from Instagram each month. Complaints and order problems should go to customer support. Where that line sits is covered in community management vs customer support.",
        links: [{ text: "community management vs customer support", href: "/blog/community-management-vs-customer-support" }],
      },
      { type: "heading", text: "Instagram profile audit checklist", id: "audit-checklist" },
      {
        type: "list",
        items: [
          "Username matches the brand and is easy to search for.",
          "Name field includes the brand plus one clear descriptor (and city, if local).",
          "Bio states what you offer, for whom, one piece of real proof and the next step.",
          "Profile image is the logo, legible at small sizes and consistent across platforms.",
          "Links go to specific, working pages and are tagged for analytics.",
          "Pinned posts cover what you do, proof and how to enquire, and are current.",
          "Highlights are named clearly, ordered by visitor need, with no expired offers.",
          "Contact options, category and any action button are set up and accurate.",
          "Recent posts show the business is active and look consistent.",
          "One main enquiry route is obvious, with someone responsible for replies.",
          "Unanswered DMs and comments from the last week are cleared.",
          "Enquiries from Instagram are logged so you can compare months.",
        ],
      },
      {
        type: "paragraph",
        text: "If you're reviewing every platform, not just Instagram, use the wider social media audit before changing strategy.",
        links: [{ text: "social media audit", href: "/blog/social-media-audit" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "A bio that describes the brand's mission but not what it sells.",
          "Links pointing to a homepage that makes visitors search again.",
          "Pinned posts that are old offers or festive greetings.",
          "Using a personal mobile number on the Contact button.",
          "Unclear ownership of DMs, so replies take days.",
          "Claims like 'India's best' with nothing to support them.",
        ],
      },
      { type: "heading", text: "Practical recommendations", id: "recommendations" },
      {
        type: "list",
        items: [
          "Rewrite the bio for a stranger who has never heard of you.",
          "Pick one main enquiry route and make it the obvious next step.",
          "Use Highlights to answer the questions your DMs ask most.",
          "Review pinned posts and links whenever offers, prices or locations change.",
          "Count enquiries from Instagram monthly, not just followers.",
        ],
      },
      {
        type: "paragraph",
        text: "Profile upkeep is part of running each platform in a social media management engagement. For how we work with brands, see our brands page.",
        links: [
          { text: "running each platform in a social media management engagement", href: "/services/social-media-management#platforms" },
          { text: "our brands page", href: "/for-brands" },
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Open your profile on a phone and look at it as a first-time visitor. Can you tell what the business offers, whether to trust it and how to get in touch within a few seconds? Fix the bio, the links and the pinned posts first, then set up a DM routine. Most of the gains come from those four changes, though no profile change can guarantee a set number of enquiries.",
      },
    ],
    faqs: [
      {
        question: "Should we use a business or creator account for a brand?",
        answer:
          "Both are professional accounts with Insights and contact options. Most brands choose a business account, which supports business tools such as contact buttons and action button partners. Creator accounts are designed for individuals who publish content. Instagram's options change, so check the current differences in Instagram Help before switching, and make sure your team still has the access it needs afterwards.",
      },
      {
        question: "Can we change our Instagram username without losing followers?",
        answer:
          "Changing your username doesn't remove followers, but old links and printed handles that use your previous username won't lead people to you. Update links on your website, packaging, email signatures and other platforms the same day, tell followers in a Story, and avoid frequent changes that confuse returning customers.",
      },
      {
        question: "Should we publish prices on our Instagram profile?",
        answer:
          "If your prices are fixed and competitive, showing them in a Highlight or pinned post can filter out enquiries that won't convert. If pricing depends on scope, explain what drives price and invite a DM or form instead. Either way, keep anything you publish up to date.",
      },
      {
        question: "Is it fine to use automated DM replies?",
        answer:
          "Automated or saved replies can help with common questions and out-of-hours messages, as long as a person follows up. Make the reply useful, say when someone will respond, and don't let automation handle complaints, refunds or sensitive issues. Review the saved replies every few months so they match current offers and policies.",
      },
      {
        question: "How often should we audit our Instagram profile?",
        answer:
          "A full audit every quarter works for most brands, with quick checks whenever offers, prices, contact details or locations change. The quickest checks are links, pinned posts and Highlights, because they go out of date first. Add the audit date to your content calendar so it doesn't slip.",
      },
    ],
  },
];
