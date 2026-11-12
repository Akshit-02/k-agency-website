import type { BlogPost } from "@/content/blog";

/**
 * SMM batch 01 (2026-11-11), writer E: platform choice, organic vs paid, KPIs and reporting for brand-owned social.
 * Platform metric names and availability were checked in November 2026; sources are logged in the batch scratchpad.
 */
export const smmPerformancePosts: BlogPost[] = [
  {
    slug: "choose-social-media-platforms-for-business",
    category: "Social Media Management",
    title: "How to Choose the Right Social Media Platforms Based on Your Business Model",
    seoTitle: "How to Choose Social Media Platforms for Your Business",
    excerpt:
      "A practical way to pick social media platforms by how your business sells: a platform matrix for D2C, B2B, local services, retail, education and high-consideration purchases, what each platform demands, and when to add or drop one.",
    metaDescription:
      "Choose social media platforms by business model: a matrix for D2C, B2B, local and retail brands, what each platform demands, and when to add or drop one.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-11",
    lastReviewed: "November 2026",
    readingTime: "11 min read",
    tags: [
      "choosing social media platforms for business",
      "best social media platforms for businesses",
      "social media platform strategy",
      "social media for B2B brands",
      "social media for D2C brands",
    ],
    related: ["instagram-vs-youtube-vs-tiktok", "influencer-marketing-platforms-india", "linkedin-thought-leadership-marketing"],
    hero: {
      src: "/blog/brand-guides/choose-social-media-platforms-for-business.svg",
      alt: "A decision flow from business model to buyer behaviour to content capacity, ending in one or two primary platforms",
    },
    body: [
      {
        type: "paragraph",
        text: "A skincare founder hears that LinkedIn builds authority, a friend says Pinterest drives sales, and the intern wants to start a YouTube channel. Meanwhile the Instagram account, the one place customers actually ask questions, hasn't posted in three weeks. Most businesses don't struggle on social media because they chose the wrong platform. They struggle because they chose too many, for reasons that had nothing to do with how they sell.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Choose platforms by working back from where your buyers make decisions, the content you can produce every week, and the job each platform must do. Most Indian consumer brands start with Instagram plus one more; B2B and SaaS companies start with LinkedIn; local services pair Instagram or Facebook with a Google Business Profile. Run one or two platforms well, review after a quarter, and add another only when the first ones are consistent.",
      },
      { type: "heading", text: "Start with how you sell, not where everyone else is", id: "business-model-first" },
      {
        type: "paragraph",
        text: "Platform choice is usually framed as audience size: where are the most people? Almost every platform has your customers on it somewhere. The better question is where they are in a buying mood, and what they need to see before they buy.",
      },
      {
        type: "paragraph",
        text: "A ₹499 snack is bought on impulse after a short video. A ₹15 lakh software contract is approved by three people who read, compare and ask peers over several months. A dental clinic is chosen by someone within a few kilometres who checks reviews and photos of the clinic. These are different decisions, and they happen in different places. Your business model tells you how long the decision takes, who makes it and what proof they need, and that narrows the platform list faster than any audience chart.",
      },
      { type: "heading", text: "A platform selection matrix by business model", id: "platform-selection-matrix" },
      {
        type: "paragraph",
        text: "Use this as a starting point, not a rule. It reflects common practice for Indian businesses, and your own audience research or account data should override it.",
      },
      {
        type: "table",
        headers: ["Business model", "Usually start with", "Add when ready", "Usually lower priority", "Why"],
        rows: [
          ["D2C and e-commerce", "Instagram", "YouTube for Shorts, reviews and how-tos; Pinterest for fashion, home, food and gifting", "X, unless your buyers follow news or tech", "Discovery, product education and creator content sit naturally on Instagram; YouTube catches people searching before they buy"],
          ["B2B and SaaS", "LinkedIn, with the company page and one or two leadership profiles", "YouTube for demos, webinars and explainers", "Snapchat, Pinterest", "Buyers research, compare and check credibility; expertise matters more than reach"],
          ["Local services (clinics, salons, restaurants, gyms)", "Instagram or Facebook, plus a Google Business Profile", "WhatsApp Business for enquiries and repeat customers", "LinkedIn, X", "People choose by distance, reviews and seeing the place; most actions happen nearby"],
          ["Multi-location retail", "One strong Instagram brand account; Facebook where local communities are active", "Location-level pages and store content, once you can run them", "A separate account per store before anyone owns them", "You need brand consistency plus a controlled way to show local stock, offers and events"],
          ["Education (schools, coaching, edtech, colleges)", "Instagram and YouTube", "LinkedIn for higher education and professional courses; Facebook where parents decide", "Pinterest", "Students watch explainers and campus life; parents and working learners research for longer"],
          ["High-consideration purchases (real estate, cars, premium home, jewellery)", "YouTube and Instagram", "Pinterest for home and wedding categories; LinkedIn for premium B2B services", "Platforms that reward daily trend posts you can't sustain", "Long research cycles reward walkthroughs, comparisons and proof that stays findable"],
        ],
      },
      {
        type: "paragraph",
        text: "Two notes on the matrix. First, a Google Business Profile isn't a social network, but for local businesses it's often where the decision ends, so it belongs in the same plan. Second, the matrix is about your own brand accounts. If you're choosing platforms for creator campaigns, the trade-offs are different, and our comparison of Instagram, YouTube and TikTok for creator campaigns covers that separately.",
        links: [{ text: "our comparison of Instagram, YouTube and TikTok for creator campaigns", href: "/blog/instagram-vs-youtube-vs-tiktok" }],
      },
      { type: "heading", text: "What each platform demands in content and time", id: "what-each-platform-demands" },
      {
        type: "paragraph",
        text: "The cost of a platform isn't the subscription or the ad budget. It's the content it needs every week and the people who have to be present to run it. Before you add a platform, check that you can feed it.",
      },
      {
        type: "table",
        headers: ["Platform", "What it tends to reward", "Content demand", "Hidden time cost"],
        rows: [
          ["Instagram", "Reels, carousels, Stories and a recognisable look", "High: short video plus static posts and Stories", "Replying to comments and DMs, which buyers expect to be quick"],
          ["Facebook", "Community, local groups, events and video", "Moderate; some content can be adapted from Instagram", "Moderating comments and answering detailed questions"],
          ["LinkedIn", "A clear point of view, expertise and people-led posts", "Moderate: fewer, stronger posts", "Founder or leadership time to approve or shape posts in their own voice"],
          ["YouTube", "Searchable videos, Shorts and series", "High per video, lower frequency", "Scripting, editing, titles, descriptions and thumbnails"],
          ["Pinterest", "Evergreen visual pins tied to plans and purchases", "Moderate and easy to batch", "Keeping pins linked to live product or content pages"],
          ["X", "Fast, conversational, news-led posts", "High frequency, often real time", "Someone has to be present when conversations happen"],
          ["Snapchat", "Youth-focused, native short content", "Moderate to high", "Formats that rarely reuse well elsewhere"],
        ],
      },
      {
        type: "paragraph",
        text: "Repurposing helps, but it doesn't make a platform free. A Reel can become a YouTube Short with little extra work, while the same idea on LinkedIn usually needs a different angle and a different voice. Our guide to repurposing content across platforms without repeating the same post explains where reuse works and where it falls flat.",
        links: [{ text: "repurposing content across platforms without repeating the same post", href: "/blog/social-media-content-repurposing" }],
      },
      { type: "heading", text: "Audience questions to answer before you choose", id: "audience-questions" },
      {
        type: "list",
        items: [
          "Who makes the buying decision, and who influences it? A parent, a procurement head, a couple planning a wedding?",
          "Where do they go when they're researching, not just scrolling? Search, YouTube, LinkedIn, WhatsApp groups, marketplaces?",
          "Which languages do they consume content in? A Hindi or Tamil-first audience changes both platform and format.",
          "Where do your existing customers already tag you, comment or message you?",
          "Which platforms do your competitors invest in, and where is there room to be noticeably better?",
          "Where does your website or enquiry data show social traffic coming from today?",
        ],
      },
      {
        type: "paragraph",
        text: "If you already have accounts, an audit answers several of these from your own data. Our guide to running a social media audit before changing your strategy walks through it.",
        links: [{ text: "running a social media audit before changing your strategy", href: "/blog/social-media-audit" }],
      },
      { type: "heading", text: "Platform availability: what's not an option in India", id: "platform-availability" },
      {
        type: "paragraph",
        text: "Many global guides put TikTok at the top of the list. In India it isn't available. The Ministry of Electronics and Information Technology blocked TikTok and 58 other apps under Section 69A of the IT Act on 29 June 2020, as set out in the PIB press release of that date. In August 2025, after reports that parts of TikTok's website were loading in India, the government clarified that no order had been issued to lift the ban (All India Radio News, 23 August 2025). At the time of writing (November 2026) we have found no official notice reversing it.",
        links: [
          { text: "PIB press release", href: "https://pib.gov.in/PressReleasePage.aspx?PRID=1635206" },
          { text: "All India Radio News, 23 August 2025", href: "https://www.newsonair.gov.in/no-order-issued-to-lift-ban-on-tiktok-in-india-govt" },
        ],
      },
      { type: "subheading", text: "If you're outside India" },
      {
        type: "paragraph",
        text: "If you sell in markets where TikTok is available, such as the UK, Australia or the UAE, it belongs in the evaluation alongside Instagram and YouTube for consumer brands, and the same matrix logic applies. Check current availability and any local rules on the platform before planning around it, because access and features vary by country.",
      },
      { type: "heading", text: "How many platforms should you start with?", id: "how-many-platforms" },
      {
        type: "paragraph",
        text: "For most businesses, one or two. One primary platform where you put most of your effort, and at most one secondary platform with a narrower job. A third platform makes sense only once the first two are running to a consistent rhythm, approvals are quick and you have content left over.",
      },
      {
        type: "paragraph",
        text: "Every platform needs its own planning, formats, captions, community time and reporting. Spread a fixed team across four platforms and each gets a thin, irregular presence, which can be worse than none: a dormant account suggests the business may be dormant too.",
      },
      { type: "subheading", text: "A decision checklist" },
      {
        type: "list",
        items: [
          "We can name the job this platform does for us: discovery, education, credibility, enquiries or community.",
          "Our buyers or their influencers use it while researching or deciding, not only for entertainment.",
          "We can produce the formats it rewards every week for at least three months.",
          "Someone owns replies and messages on it within an agreed response window.",
          "We know which one or two metrics will tell us whether it's working.",
          "It's available in the markets we sell in, and our content complies with its rules.",
          "Adding it won't reduce quality on the platform that already works.",
        ],
      },
      {
        type: "paragraph",
        text: "If you can't tick at least five, wait. For the metrics question, our guide to social media KPIs by business goal shows what to measure for each kind of platform job.",
        links: [{ text: "social media KPIs by business goal", href: "/blog/social-media-kpis" }],
      },
      { type: "heading", text: "When to add or drop a platform", id: "add-or-drop" },
      { type: "subheading", text: "Signs it's time to add one" },
      {
        type: "list",
        items: [
          "Your primary platform has run consistently for at least a quarter and approvals no longer slow it down.",
          "Customers keep asking for something your current platform can't deliver well, such as detailed demos or long explanations.",
          "You have a content source that suits the new platform, such as founder expertise for LinkedIn or recorded demos for YouTube.",
          "You're entering a market or audience segment that clearly uses another platform.",
        ],
      },
      { type: "subheading", text: "Signs it's time to drop or pause one" },
      {
        type: "list",
        items: [
          "After two quarters of consistent posting, it isn't moving the metric you gave it, and you've already changed format and content once.",
          "It needs time your team keeps taking from a platform that does work.",
          "The audience you reach there isn't the audience that buys.",
        ],
      },
      {
        type: "paragraph",
        text: "Pausing is fine. Pin a post that points people to where you're active, keep the handle so nobody else takes it, and check messages occasionally. Brands with several stores or regions face extra questions here, such as whether each location needs its own page, which our guide to managing social media for multiple locations covers.",
        links: [{ text: "managing social media for multiple locations", href: "/blog/social-media-management-multiple-locations" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Opening accounts on every platform at once to 'claim the handle', then leaving most of them empty.",
          "Posting the identical asset everywhere, so no platform gets content made for it.",
          "Choosing LinkedIn for a B2B brand but never involving the founder or leaders whose voice the audience actually follows.",
          "Judging a new platform after four weeks, before it has had a fair test.",
          "Planning around a platform that isn't available in your market, often because a global guide said it was essential.",
        ],
      },
      { type: "heading", text: "Practical recommendations", id: "recommendations" },
      {
        type: "list",
        items: [
          "Write one sentence per platform: 'We use this platform to…' If you can't finish it, don't open it yet.",
          "Put most of your effort into the primary platform, and give the secondary one a narrow, measurable job.",
          "Set a review date, usually after one quarter, to decide whether to keep, change or add.",
          "Plan formats per platform from the start, so repurposing is a choice, not an afterthought.",
          "Keep handles consistent across platforms even where you aren't active.",
        ],
      },
      {
        type: "paragraph",
        text: "If you're weighing up outside help, platform selection is usually the first output of an engagement; this is how we approach platform choice in a managed social media service, including which platforms we plan for and why most brands need fewer than they expect.",
        links: [{ text: "how we approach platform choice in a managed social media service", href: "/services/social-media-management#platforms" }],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Start with how your customers decide, not with which platform is trending. Pick one primary platform that matches that decision and one secondary platform with a clear job, make sure you can feed both every week, and review after a quarter.",
      },
      {
        type: "paragraph",
        text: "The right platform mix is the one you can run consistently. Adding a platform is easy; running it well for a year is the real commitment.",
      },
    ],
    faqs: [
      {
        question: "Is Instagram enough for a small D2C brand?",
        answer:
          "Often, yes, at the start. Many small D2C brands get most of their social discovery and customer questions on Instagram. Add YouTube when you have demos or reviews worth searching for, or Pinterest if you sell in visual, planned categories like home or weddings. The constraint is usually production capacity, not opportunity.",
      },
      {
        question: "Should a B2B company post on Instagram at all?",
        answer:
          "It can, but rarely as the main channel. Instagram can help with employer branding, events and culture, which matters if hiring is a priority. For reaching buyers, LinkedIn usually comes first because that's where professional research and peer credibility happen. Treat Instagram as optional until LinkedIn is consistent.",
      },
      {
        question: "Does a local business need a Facebook page if it has Instagram?",
        answer:
          "It depends on your customers. Facebook still matters for some older audiences and for local groups, events and reviews in many towns and cities. If your customers mention seeing you there, or local groups discuss your category, a simply maintained page is worth it. Keep your Google Business Profile updated either way.",
      },
      {
        question: "Can we run a platform with only reposted content from another one?",
        answer:
          "You can keep an account alive that way, but it rarely performs well. Each platform has its own formats, caption lengths and audience expectations. A light version is acceptable for a secondary platform, as long as captions and the opening seconds are adapted and someone still replies to comments there.",
      },
      {
        question: "How long should we test a new platform before deciding?",
        answer:
          "Plan for at least one quarter of consistent posting, with a fixed job and one or two metrics agreed at the start. Change the format or angle once if early signs are weak. If it still isn't moving the agreed metric after two quarters, pause it and move the effort back to what works.",
      },
    ],
  },
  {
    slug: "organic-vs-paid-social-media",
    category: "Social Media Management",
    title: "Organic Social Media vs Paid Social Advertising: What Should Your Business Invest In?",
    seoTitle: "Organic vs Paid Social Media: Where Should You Invest?",
    excerpt:
      "Organic social builds a presence people trust; paid social buys reach and speed. This guide compares the two, explains how to think about budget by stage and goal, and shows how they work together without confusing two different jobs.",
    metaDescription:
      "Organic vs paid social media compared: cost, speed, targeting and measurement, how to split effort by stage and goal, boosting vs Ads Manager and who does what.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-11",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: [
      "organic vs paid social media",
      "organic social media marketing",
      "paid social media advertising",
      "social media advertising strategy",
      "boosting posts",
    ],
    related: ["ugc-paid-social-testing", "creator-whitelisting", "influencer-marketing-attribution-models"],
    hero: {
      src: "/blog/brand-guides/organic-vs-paid-social-media.svg",
      alt: "Two parallel tracks, organic and paid social, linked by a loop where organic tests inform ads and ads send people to the profile",
    },
    body: [
      {
        type: "paragraph",
        text: "A founder boosts a post for ₹2,000 before Diwali, sees a spike in likes from accounts that look nothing like customers, and decides that ads don't work for the brand. Another brand runs ads for six months that send people to a profile with no posts since spring, and can't work out why visitors click and leave. Both are treating organic and paid social as one decision. They're two different jobs that happen to share a platform.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Invest in organic social first if people already look you up and you need a credible, active presence; it costs time and content rather than media spend, and compounds slowly. Invest in paid social when you need predictable reach, a specific audience or measurable conversions on a deadline. Most growing brands need both, run as separate jobs: organic builds trust and finds winning ideas, paid scales the ones that work.",
      },
      { type: "heading", text: "What organic and paid social actually mean", id: "definitions" },
      {
        type: "paragraph",
        text: "Organic social is everything you publish on your own accounts without paying the platform to distribute it: posts, Reels, Stories, carousels, replies and community conversations. Who sees it depends on your followers, how people engage and how each platform's recommendation systems treat it.",
      },
      {
        type: "paragraph",
        text: "Paid social is content the platform shows because you paid for delivery: ads built in a platform's ad tools, boosted posts, and creator content run as ads. You choose an objective, an audience, a budget and a schedule, and the platform's auction decides delivery and cost.",
      },
      { type: "heading", text: "Organic vs paid social, side by side", id: "comparison" },
      {
        type: "table",
        headers: ["Factor", "Organic social", "Paid social"],
        rows: [
          ["Main purpose", "Presence, trust, community, education and content learning", "Reach, targeted acquisition, retargeting and conversions"],
          ["Cost structure", "People and production time; no media spend", "Media spend paid to the platform, plus people to plan, build and optimise campaigns"],
          ["Speed", "Slow and cumulative", "Fast; delivery starts once ads are approved"],
          ["Targeting", "Limited to who follows, engages or is recommended your content", "Chosen audiences, locations, interests, custom and lookalike audiences, within platform rules"],
          ["Lifespan", "Posts stay on your profile and can keep being found", "Delivery stops when spend stops"],
          ["Skills", "Strategy, content, copy, design, video, community management", "Campaign structure, audiences, bidding, creative testing, tracking and analysis"],
          ["Measurement", "Views, reach, engagement, saves, shares, profile activity, tracked clicks", "Cost per result, conversions, return on ad spend, with attribution caveats"],
        ],
      },
      { type: "heading", text: "Organic and paid are separate jobs", id: "separate-jobs" },
      {
        type: "paragraph",
        text: "This is the point most budget conversations skip. Running organic social well means planning content, making it, publishing it and looking after the community. Running paid social well means setting up campaigns, choosing audiences, managing budgets daily, testing creative variations, checking tracking and reading results against cost. The skills overlap at the creative end and almost nowhere else.",
      },
      {
        type: "paragraph",
        text: "When one person or one retainer is expected to do both without that being scoped, one of them usually suffers. Often the ads get run as an afterthought by whoever made the posts, or the content calendar thins out because campaign management keeps interrupting. If you're deciding how to staff this, our comparison of in-house and outsourced social media management covers the operating-model trade-offs.",
        links: [{ text: "our comparison of in-house and outsourced social media management", href: "/blog/in-house-vs-outsourced-social-media-management" }],
      },
      { type: "heading", text: "How to think about budget by stage and goal", id: "budget-allocation" },
      {
        type: "paragraph",
        text: "There's no correct percentage split, and anyone who gives you one without knowing your margins, category and stage is guessing. Use the questions below to decide where the next rupee and the next hour should go.",
      },
      {
        type: "table",
        headers: ["Stage or goal", "Lean towards", "Reasoning"],
        rows: [
          ["Pre-launch or new brand with no presence", "Organic first", "Ads to an empty profile waste money; people check the profile before they trust the ad"],
          ["Launch with a fixed date", "Both, with paid timed to the launch", "Organic builds the story and proof; paid guarantees the launch reaches enough of the right people"],
          ["Growth with proven unit economics", "Paid gets more budget", "If you know what a customer is worth and what one costs, paid can scale what already works"],
          ["Building trust in a high-consideration category", "Organic and creator content", "Buyers research for weeks; depth and proof matter more than a burst of impressions"],
          ["Retention and repeat purchase", "Organic, community and owned channels", "Existing customers already follow or message you; paid retargeting supports specific offers"],
          ["Local footfall or enquiries", "Organic plus small, tightly targeted local ads", "A narrow radius keeps spend small; a well-kept profile and reviews do much of the persuading"],
        ],
      },
      {
        type: "paragraph",
        text: "Three questions decide most cases. Can you afford to wait for organic to compound? Do you know your margin per order or lead well enough to judge ad costs? Do you have creative that has already shown it works, or would paid be testing from scratch?",
      },
      { type: "heading", text: "When each one is the right tool", id: "scenarios" },
      { type: "subheading", text: "Organic is usually enough when" },
      {
        type: "list",
        items: [
          "Most of your sales come from referrals, repeat customers or search, and social mainly needs to reassure.",
          "Your audience is small and specific, and already knows where to find you.",
          "You're still learning what your brand should say, and testing ideas without spend is useful.",
        ],
      },
      { type: "subheading", text: "Paid is usually needed when" },
      {
        type: "list",
        items: [
          "You have a launch, sale or admission season with a deadline.",
          "You need to reach a defined audience your organic content isn't reaching, such as a new city.",
          "You want to retarget website visitors or people who engaged with your content.",
          "You have proof that a product converts and want to scale it while unit costs hold.",
        ],
      },
      { type: "heading", text: "How organic and paid work together", id: "working-together" },
      { type: "subheading", text: "Organic as a testing ground for ads" },
      {
        type: "paragraph",
        text: "Your organic calendar is a free test lab. Posts that earn unusually high saves, shares or completion rates from your own audience are good candidates for ad creative, because they've already shown that the hook and message land. Paid then puts budget behind proven ideas rather than guesses. This isn't a guarantee, since a cold audience reacts differently from followers, but it's a better starting point than briefing ads from nothing.",
      },
      { type: "subheading", text: "Creator content in ads" },
      {
        type: "paragraph",
        text: "Creator videos often perform as ads because they look native to the feed. On Meta, the official route is partnership ads. According to Meta's developer documentation on partnership ads, the ad shows both the brand and the partner account in its header, and the creator must give permission, either at account level or for a specific post, before the brand can run it. Instagram's creator guidance on partnership ads adds that the brand pays for the spend, and that formats like Reels, Stories, posts and carousels can run. These were the documented features at the time of writing (November 2026); check Meta's help pages before planning, as permissions and formats change.",
        links: [
          { text: "Meta's developer documentation on partnership ads", href: "https://developers.facebook.com/documentation/ads-commerce/marketing-api/ad-creative/partnership-ads/ads-creation" },
          { text: "Instagram's creator guidance on partnership ads", href: "https://creators.instagram.com/earn-money/partnership-ads" },
        ],
      },
      {
        type: "paragraph",
        text: "Usage rights, duration and fees for this need to be agreed with the creator in writing. Our guides to testing and scaling UGC in paid social and to how creator whitelisting works cover the practical side.",
        links: [
          { text: "testing and scaling UGC in paid social", href: "/blog/ugc-paid-social-testing" },
          { text: "how creator whitelisting works", href: "/blog/creator-whitelisting" },
        ],
      },
      { type: "heading", text: "Boosting a post vs using Ads Manager", id: "boosting-vs-ads-manager" },
      {
        type: "paragraph",
        text: "Meta's Business Help Center has a page on the difference between boosted posts and Meta ads. In broad terms, boosting turns a post that's already on your Page or profile into an ad, with a simplified set of choices for goal, audience, budget and duration. Ads Manager is the full tool, with more control over campaign objectives, audiences, placements and creative, including running an existing post inside a properly structured campaign. Either way, it's paid advertising. The available options change, so check Meta's page before deciding.",
        links: [{ text: "the difference between boosted posts and Meta ads", href: "https://www.facebook.com/business/help/317083072148603" }],
      },
      {
        type: "list",
        items: [
          "Boost when you want a quick, small push for a post that's already doing well, and the goal is simple, such as more people seeing it.",
          "Use Ads Manager when you care about a specific outcome like enquiries or purchases, need tracking, want to test variations, or plan to spend regularly.",
          "Either way, set the goal before spending. 'More engagement' bought from the wrong audience is how the founder in our opening ended up disappointed.",
        ],
      },
      { type: "heading", text: "How to structure agency responsibilities", id: "agency-responsibilities" },
      {
        type: "table",
        headers: ["Task", "Organic social team", "Paid social team"],
        rows: [
          ["Content calendar, posts, Reels and captions", "Owns", "Gives input on ideas worth testing"],
          ["Ad creative variations", "Supplies source content and brand guidance", "Briefs, versions and tests"],
          ["Campaign setup, audiences, budgets", "Not involved", "Owns"],
          ["Comments on organic posts", "Owns within agreed scope", "Flags comments on ads that need a reply"],
          ["Tracking, pixels and UTMs", "Uses UTMs on organic links", "Owns ad tracking with your web team"],
          ["Monthly reporting", "Organic performance and content learning", "Spend, cost per result and conversions"],
        ],
      },
      {
        type: "paragraph",
        text: "Put both scopes in writing, even if one agency does both: who approves spend, who can change budgets, how quickly ad comments are handled, and how the two reports connect. Our guide to writing a social media agency brief has a section for this. For clarity on our own side, Kudozz's social media management covers organic work, and paid ads and ad budgets sit outside it, as our social media management scope sets out, and would be agreed separately.",
        links: [
          { text: "writing a social media agency brief", href: "/blog/social-media-agency-brief" },
          { text: "our social media management scope", href: "/services/social-media-management#scope" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Running ads to a profile that looks abandoned.",
          "Boosting every post by habit instead of choosing posts with a clear goal.",
          "Judging organic social on sales alone, or paid social on likes alone.",
          "Expecting the organic team to run campaigns 'on the side' without scope or skills.",
          "Using creator content in ads without written usage rights.",
          "Comparing organic reach with paid reach as if they were the same thing.",
        ],
      },
      {
        type: "paragraph",
        text: "Measuring each properly starts with picking the right metrics for each job; our guide to social media KPIs by business goal sets those out.",
        links: [{ text: "social media KPIs by business goal", href: "/blog/social-media-kpis" }],
      },
      { type: "heading", text: "The bottom line", id: "conclusion" },
      {
        type: "paragraph",
        text: "Organic social earns trust and teaches you what your audience responds to. Paid social buys speed and reach for messages you already believe in. Decide by stage and goal, staff them as two jobs, and let the best organic ideas inform what you pay to scale.",
      },
    ],
    faqs: [
      {
        question: "Can organic social media work without any ad spend?",
        answer:
          "Yes, for many goals. Organic can build credibility, answer customer questions, support referrals and keep existing customers engaged. What it rarely does is deliver predictable reach to new audiences on a deadline. If your growth depends on reaching people who don't know you yet, some paid support or creator partnerships usually become necessary.",
      },
      {
        question: "How much should a small business spend on social media ads?",
        answer:
          "There's no standard figure, so start from your economics instead. Work out what a customer or qualified lead is worth to you, run a small test with one clear objective and tracking in place, and see what results actually cost. Increase spend only on what holds its cost as you scale, and stop what doesn't. Keep the test budget at a level you can afford to lose while learning.",
      },
      {
        question: "Should the same agency run organic and paid social?",
        answer:
          "It can work well if both are scoped, staffed and reported separately, because creative learning flows easily between them. It works badly when paid is added informally to an organic retainer. Some brands prefer a specialist for paid and a separate team for organic, connected by a shared monthly review.",
      },
      {
        question: "Who pays the ad budget when an agency runs paid social?",
        answer:
          "Normally the brand pays the platform directly, through its own ad account and payment method, and the agency charges a separate management fee. Keeping the ad account in your name means you keep the data, audiences and history if you change agencies. Agree access levels and spending limits in writing.",
      },
      {
        question: "Is paid social the same as paying influencers?",
        answer:
          "No. Paying a creator for a post is a creator partnership; the creator publishes to their own audience. Paid social is buying ad delivery from the platform. The two meet when creator content is run as an ad, such as a partnership ad, which needs the creator's permission and agreed usage terms.",
      },
    ],
  },
  {
    slug: "social-media-kpis",
    category: "Social Media Management",
    title: "Social Media KPIs by Business Goal: What Should Brands Actually Measure?",
    seoTitle: "Social Media KPIs by Business Goal: What to Measure",
    excerpt:
      "A KPI framework for brand-owned social media, organised by awareness, consideration, engagement, conversion and retention, with platform metric definitions checked in November 2026, UTM basics and the limits of attribution.",
    metaDescription:
      "Social media KPIs by business goal: what to track for awareness, consideration, conversion and retention, how platforms define views and reach, and UTM basics.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-11",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: [
      "social media KPIs for businesses",
      "social media marketing metrics",
      "social media performance measurement",
      "social media analytics for brands",
      "reach vs impressions vs views",
    ],
    related: ["influencer-marketing-kpis", "influencer-utm-tracking", "influencer-marketing-attribution-models"],
    hero: {
      src: "/blog/brand-guides/social-media-kpis.svg",
      alt: "Five business goals, from awareness to retention, each paired with the decision metric that tracks it",
    },
    body: [
      {
        type: "paragraph",
        text: "The monthly report says views are up sharply. The founder asks whether that means more orders, and nobody in the room can answer. The problem isn't the data, which is usually plentiful. It's that nobody agreed, before the month started, which numbers would show whether social media was doing its job.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Pick social media KPIs from the business goal, not the dashboard. For awareness, track reach and views among the right audience. For consideration, track saves, shares, profile visits and link clicks. For community, track meaningful comments and replies. For conversion, track tracked website sessions, enquiries and sales with UTMs. For retention, track repeat engagement and customer mentions. Choose two or three per goal and judge them against your own baseline.",
      },
      { type: "heading", text: "Start with the business goal, not the dashboard", id: "start-with-goal" },
      {
        type: "paragraph",
        text: "Every platform shows dozens of numbers, and all of them go up and down. A KPI is the small set you've agreed to act on. To choose them, write down what social media is meant to do for the business this quarter, in one sentence, such as 'make more people in Pune aware of the new clinic' or 'bring qualified demo requests from mid-size manufacturers'. Then pick metrics that would move if that sentence came true, and that you can actually measure.",
      },
      {
        type: "paragraph",
        text: "Different platforms can have different goals. Instagram might carry awareness and consideration for a D2C brand while LinkedIn carries credibility for hiring. That's fine, as long as each platform's KPIs match its job.",
      },
      { type: "heading", text: "A KPI framework by objective", id: "kpi-framework" },
      {
        type: "table",
        headers: ["Objective", "Metric", "What it tells you", "Limits"],
        rows: [
          ["Awareness", "Reach (unique accounts)", "How many different people saw your content", "Doesn't tell you whether they were the right people or paid attention"],
          ["Awareness", "Views", "How often content was displayed or played", "Counts repeats; easy to inflate with looping short videos"],
          ["Awareness", "Share of reach from non-followers", "Whether you're reaching beyond your existing audience", "Not every platform reports it in the same way"],
          ["Consideration", "Saves and shares", "Whether content was useful enough to keep or pass on", "Low numbers are normal for some formats and categories"],
          ["Consideration", "Profile visits and link clicks", "Whether people wanted to know more about you", "Clicks don't show what happened after they left the app"],
          ["Consideration", "Video retention or average watch time", "Whether the message held attention", "Definitions differ by platform; compare only within one platform"],
          ["Engagement and community", "Meaningful comments and replies", "Whether people are talking to you, not just tapping", "Needs manual reading; counts alone mislead"],
          ["Engagement and community", "DMs and enquiries started", "Whether content prompts real conversations", "Often tracked manually; depends on response quality"],
          ["Conversion", "Social sessions, leads or orders in analytics (via UTMs)", "Whether social traffic leads to business outcomes", "Misses people who see a post and later search or walk in"],
          ["Conversion", "Code redemptions or 'how did you hear about us' answers", "Conversions UTMs can't see", "Self-reported answers are approximate"],
          ["Retention and advocacy", "Repeat engagers and customer tags or mentions", "Whether customers stay engaged and talk about you", "Hard to automate; usually a monthly manual review"],
          ["Retention and advocacy", "User-generated posts and reviews", "Whether customers are willing to vouch for you", "Volume depends heavily on category"],
        ],
      },
      {
        type: "paragraph",
        text: "If you also run creator campaigns, those need their own measures, such as cost per creator post or earned reach, which our guide to influencer marketing KPIs covers. The framework here is for your own brand accounts.",
        links: [{ text: "influencer marketing KPIs", href: "/blog/influencer-marketing-kpis" }],
      },
      { type: "heading", text: "How the platforms define the core metrics", id: "metric-definitions" },
      {
        type: "paragraph",
        text: "Metric names change, and the same word can mean different things on different platforms. These definitions come from each platform's own documentation, checked in November 2026.",
      },
      { type: "subheading", text: "Meta (Instagram and Facebook): views and reach" },
      {
        type: "paragraph",
        text: "Meta now uses views as its main distribution metric on both apps. In its announcement Introducing Views (Meta for Creators, 14 November 2024), Meta said views count the number of times a reel or video was played, or the number of times a photo or text post was on screen, calculated the same way across Facebook and Instagram. For Stories, photos and text posts, views replaced impressions; for reels and videos, views replaced plays. Repeat views count. Reach (shown in Instagram Insights as accounts reached) counts each account once rather than every display, so it will usually be lower than views.",
        links: [{ text: "Introducing Views", href: "https://creators.facebook.com/introducing-views-to-simplify-content" }],
      },
      { type: "subheading", text: "LinkedIn: impressions and members reached" },
      {
        type: "paragraph",
        text: "LinkedIn's help page on combined post analytics defines impressions as the number of times a post was displayed on screen, noting that this is an estimate, and members reached as the number of distinct members and pages who viewed the post, without repeat views. It also lists engagements as reactions, comments, saves, sends and reposts.",
        links: [{ text: "combined post analytics", href: "https://www.linkedin.com/help/linkedin/answer/a701208" }],
      },
      { type: "subheading", text: "YouTube: impressions and click-through rate" },
      {
        type: "paragraph",
        text: "YouTube's impressions and click-through rate FAQ explains that impressions click-through rate measures how often viewers watched a video after seeing a registered impression on YouTube. Not every thumbnail sighting counts as an impression, impressions on external websites and end screens are excluded, and some views don't come from thumbnail impressions at all.",
        links: [{ text: "impressions and click-through rate FAQ", href: "https://support.google.com/youtube/answer/7628154" }],
      },
      {
        type: "paragraph",
        text: "The practical rule: never add up or compare views, impressions or engagement rates across platforms as if they were one currency. Compare each platform with itself over time.",
      },
      { type: "heading", text: "Vanity metrics vs decision metrics", id: "vanity-vs-decision" },
      {
        type: "paragraph",
        text: "A vanity metric is one that looks good but doesn't change what you do next. A decision metric is one that, if it moved, would make you change content, budget or platform. The same number can be either, depending on the goal.",
      },
      {
        type: "list",
        items: [
          "Follower count is vanity for most brands, but a useful signal if building an owned audience for launches is the goal.",
          "Total views are vanity if you can't tell who saw them, but decision-grade when reach in a new city or segment is the goal.",
          "Likes rarely change decisions; saves, shares and comments asking about price or availability often do.",
          "Engagement rate is useful within one platform over time, and misleading across platforms or account sizes.",
        ],
      },
      { type: "heading", text: "Reading the numbers: hypothetical examples", id: "interpretation-examples" },
      {
        type: "paragraph",
        text: "Say a skincare brand's Reels views doubled this month, but saves and profile visits stayed flat. The likely story is that a trend-led video spread widely without telling anyone why to care about the product. Worth noting, not worth repeating as a strategy.",
      },
      {
        type: "paragraph",
        text: "Now say a SaaS company's LinkedIn impressions fell, but members reached from target industries held steady and demo requests from social rose. Fewer, better-matched readers is a good month for a B2B goal, even if the headline number dropped.",
      },
      {
        type: "paragraph",
        text: "Finally, say a restaurant's reach is stable, but DMs asking about reservations jumped after a series of kitchen videos. That's a conversion signal UTMs would never catch, and the series deserves more space in next month's calendar.",
      },
      { type: "heading", text: "Setting baselines and targets without invented benchmarks", id: "baselines-targets" },
      {
        type: "paragraph",
        text: "Industry benchmark figures for engagement rates circulate widely, but they're usually drawn from different account sizes, categories and definitions, and many predate Meta's move to views. Your own history is a better benchmark.",
      },
      {
        type: "list",
        items: [
          "Export at least the last three months of data per platform before changing anything.",
          "Record the median, not just the average, per format, so one viral post doesn't distort the baseline.",
          "Note any definition changes, such as impressions becoming views, so you don't compare unlike numbers.",
          "Set directional targets for the next quarter, such as improving saves per post on carousels, rather than precise percentages you can't justify.",
          "Revisit targets after the first full quarter, once you know what normal looks like.",
        ],
      },
      {
        type: "paragraph",
        text: "If you're starting a new strategy or campaign alongside this, our campaign strategy work begins with exactly this baseline step.",
        links: [{ text: "campaign strategy work", href: "/services/campaign-strategy" }],
      },
      { type: "heading", text: "UTM tracking basics", id: "utm-tracking" },
      {
        type: "paragraph",
        text: "Platform insights stop at the click. To see what social visitors do on your website, add UTM parameters to your links. Google's guide to collecting campaign data with custom URLs recommends always using utm_source, utm_medium and utm_campaign, notes that values are case sensitive, and says the data appears in Google Analytics under Acquisition, then Traffic acquisition.",
        links: [{ text: "Google's guide to collecting campaign data with custom URLs", href: "https://support.google.com/analytics/answer/10917952" }],
      },
      {
        type: "template",
        label: "Example UTM naming for organic social",
        text: "Instagram bio link:\nhttps://example.in/?utm_source=instagram&utm_medium=social&utm_campaign=bio_link\n\nLinkedIn post about a webinar:\nhttps://example.in/webinar?utm_source=linkedin&utm_medium=social&utm_campaign=nov_webinar&utm_content=founder_post\n\nRules: lowercase only, underscores not spaces, one shared naming sheet for the whole team.",
      },
      {
        type: "paragraph",
        text: "Our guide to tracking conversions with UTM parameters goes deeper on naming and reporting.",
        links: [{ text: "tracking conversions with UTM parameters", href: "/blog/influencer-utm-tracking" }],
      },
      { type: "heading", text: "The limits of attribution", id: "attribution-limits" },
      {
        type: "paragraph",
        text: "Much of social media's effect never produces a tracked click. People see a Reel, search your name a week later, ask a friend on WhatsApp, or walk into a store. Analytics will credit search or direct traffic for those visits. Treat tracked conversions as a floor, not the full picture, and look at trends in branded search, direct traffic and enquiries alongside them. Our guides to attribution models and to measuring dark social explain the methods in more detail.",
        links: [
          { text: "attribution models", href: "/blog/influencer-marketing-attribution-models" },
          { text: "measuring dark social", href: "/blog/dark-social-influencer-marketing" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Reporting every available metric, so the important ones get lost.",
          "Comparing this month's views with last year's impressions without noting the definition change.",
          "Setting targets from someone else's benchmark instead of your own baseline.",
          "Using one KPI set for every platform regardless of its job.",
          "Leaving UTMs off bio links and Stories links, then concluding social drives no traffic.",
          "Treating a single unusual month as a trend.",
        ],
      },
      {
        type: "paragraph",
        text: "Choosing the metrics is half the work; the other half is presenting them so leadership can act, which our guide to social media reporting for founders covers.",
        links: [{ text: "social media reporting for founders", href: "/blog/social-media-reporting-for-founders" }],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Write down each platform's job, choose two or three KPIs that would move if it did that job, export your baseline, and put UTMs on every link you control. Review quarterly, and keep the definitions note up to date as platforms rename things.",
      },
      {
        type: "paragraph",
        text: "If you'd like to see how this fits into a monthly reporting routine, this is the analytics and reporting approach in our social media management service.",
        links: [{ text: "the analytics and reporting approach in our social media management service", href: "/services/social-media-management#analytics-reporting" }],
      },
    ],
    faqs: [
      {
        question: "What is a good engagement rate on Instagram?",
        answer:
          "There isn't a reliable universal number. Published benchmarks use different formulas, account sizes and categories, and many were calculated before Meta switched from impressions to views. Calculate your own engagement rate the same way every month, compare formats within your account, and aim to improve on your median rather than chase an outside figure.",
      },
      {
        question: "Should we still track follower growth?",
        answer:
          "Yes, but as a supporting metric. Follower growth shows whether people want to keep hearing from you, which matters for launches and community. It's a weak KPI on its own because followers can be gained through giveaways or trends that bring the wrong audience. Pair it with saves, profile visits or enquiries.",
      },
      {
        question: "Why does Instagram show more views than reach?",
        answer:
          "Views count every time your content was displayed or played, including repeat views by the same person, while reach counts each account once. A Reel that people rewatch, or a Story seen twice, adds views but not reach. A large gap can signal strong rewatching or simply looping short videos.",
      },
      {
        question: "How many KPIs should a brand track for social media?",
        answer:
          "Usually two or three per platform, tied to that platform's job, plus a small set of supporting metrics for context. More than that and reports become lists of numbers nobody acts on. You can still collect other data for analysis; just don't make every number a KPI.",
      },
      {
        question: "Can we measure social media ROI accurately?",
        answer:
          "Partly. You can measure tracked clicks, leads and sales from social links with UTMs and codes, and you can compare costs with those results. What you can't fully measure is influence that leads to later searches, word of mouth or offline visits. Report a tracked floor plus supporting trends, and be clear about the gap.",
      },
    ],
  },
  {
    slug: "social-media-reporting-for-founders",
    category: "Social Media Management",
    title: "How to Present Social Media Performance to Founders and Business Leaders",
    seoTitle: "Social Media Reporting for Founders: What to Show",
    excerpt:
      "Founders don't want a list of metrics; they want to know whether social media is helping the business and what happens next. A one-page monthly report format, an insights-to-action framework, and how to handle bad months honestly.",
    metaDescription:
      "Social media reporting for founders: a one-page monthly report template, insights-to-action framework, honest bad-month reporting and linking social to sales.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-11",
    lastReviewed: "November 2026",
    readingTime: "8 min read",
    tags: [
      "social media reporting for businesses",
      "social media monthly report",
      "social media performance dashboard",
      "social media marketing report",
      "reporting to founders",
    ],
    related: ["influencer-marketing-report", "influencer-marketing-quarterly-review", "influencer-marketing-dashboard"],
    hero: {
      src: "/blog/brand-guides/social-media-reporting-for-founders.svg",
      alt: "The insights-to-action framework in four steps: what happened, why, so what, and what we'll do next",
    },
    body: [
      {
        type: "paragraph",
        text: "The social media report arrives as a 24-slide deck. Slide 3 is follower growth, slide 9 is a chart of engagement by day, slide 17 is the top five posts. The founder skims it on the phone between meetings, replies 'Thanks, but are we getting customers from this?', and the conversation ends there. The data wasn't wrong. It just answered questions nobody in leadership was asking.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Present social media performance to founders as a one-page summary first: the goal, two or three KPIs against your own baseline, what worked, what didn't, and what changes next month. Link social to business data such as enquiries, sales and branded search, with clear caveats on attribution. Put detail in an appendix or dashboard. Report bad months plainly, with a reason and a fix.",
      },
      { type: "heading", text: "What founders actually want to know", id: "what-founders-want" },
      {
        type: "list",
        items: [
          "Is social media helping the business, and how do we know?",
          "Is it getting better or worse than before, and why?",
          "What are we doing differently next month because of what we learned?",
          "Is there anything you need from me: a decision, approval, budget or content?",
          "Is the money and time spent on this proportionate to what we get?",
        ],
      },
      {
        type: "paragraph",
        text: "Notice what's missing: a breakdown of every post, platform jargon and charts without conclusions. Those belong in the working file for the marketing team, not in the version leadership reads.",
      },
      { type: "heading", text: "A monthly report structure: summary first", id: "monthly-report-structure" },
      {
        type: "list",
        items: [
          "Page 1, the summary: goal, headline result, three KPIs against baseline, one win, one problem, next month's changes, decisions needed.",
          "Page 2, business link: social-sourced sessions, enquiries or orders from UTMs and codes, plus branded search and direct traffic trends.",
          "Page 3, content learning: what formats and topics worked and didn't, with two or three examples and the reason.",
          "Page 4, community: themes from comments and DMs, recurring questions, anything escalated.",
          "Appendix: full platform metrics, post-level data and definitions.",
        ],
      },
      {
        type: "paragraph",
        text: "The KPIs on page 1 should be the ones agreed at the start of the quarter, not whichever metrics went up this month. If you're still deciding what those should be, our guide to social media KPIs by business goal sets out a framework.",
        links: [{ text: "social media KPIs by business goal", href: "/blog/social-media-kpis" }],
      },
      { type: "heading", text: "A founder-friendly report template", id: "report-template" },
      {
        type: "template",
        label: "One-page monthly social media summary",
        text: "MONTH: [Month Year]    PLATFORMS: [e.g. Instagram, LinkedIn]\n\nGOAL THIS QUARTER\n[One sentence, e.g. Build consideration for the new range among women 25 to 40 in metro cities]\n\nHEADLINE\n[One sentence, e.g. Saves and profile visits rose for the second month; website enquiries from social were flat]\n\nKPIs (vs 3-month baseline)\n- [KPI 1]: [this month] vs [baseline]  [up / flat / down]\n- [KPI 2]: [this month] vs [baseline]  [up / flat / down]\n- [KPI 3]: [this month] vs [baseline]  [up / flat / down]\n\nWHAT WORKED\n[One or two lines, with the reason]\n\nWHAT DIDN'T\n[One or two lines, with the reason]\n\nBUSINESS LINK (tracked floor, see caveats)\n- Social sessions to website: [ ]\n- Enquiries / orders tagged to social: [ ]\n- Branded search trend: [ ]\n\nNEXT MONTH WE WILL\n1. [Change]\n2. [Change]\n\nDECISIONS OR INPUT NEEDED\n- [e.g. Approve founder video series; share upcoming launch dates]",
      },
      { type: "heading", text: "From insight to action", id: "insights-to-action" },
      {
        type: "paragraph",
        text: "Every observation in a founder report should travel through four steps. If it can't reach the last step, it probably doesn't belong on page 1.",
      },
      {
        type: "table",
        headers: ["Step", "Question", "Hypothetical example"],
        rows: [
          ["What happened", "What changed in the numbers?", "Carousel saves rose noticeably; Reels views fell"],
          ["Why", "What's the most likely reason?", "The ingredient-explainer carousels answered questions customers ask in DMs; Reels used trend audio with weak product links"],
          ["So what", "Why does it matter for the goal?", "Saves suggest people are considering the product; the goal is consideration"],
          ["What we'll do", "What changes next month?", "Double the explainer carousels, test turning the best two into Reels, drop trend-only Reels"],
        ],
      },
      {
        type: "paragraph",
        text: "The 'why' is usually a hypothesis, not a proven cause. Say so. 'We think' is more credible to a founder than false certainty, and it sets up next month as a test.",
      },
      { type: "heading", text: "How to present a bad month honestly", id: "bad-months" },
      {
        type: "paragraph",
        text: "Every account has bad months: a platform change, fewer posts because approvals stalled, a campaign that didn't land. Founders lose trust far faster over a hidden dip than over a reported one.",
      },
      {
        type: "list",
        items: [
          "Lead with it on page 1. Don't bury it on slide 14.",
          "Separate causes you control (content, timing, missed posts) from those you don't (platform changes, seasonality).",
          "Show the trend, not just the month, so one dip is seen in context.",
          "Give a specific fix and a date to judge it by.",
          "Don't switch to a different metric that looks better. Report the agreed KPIs every month.",
        ],
      },
      {
        type: "paragraph",
        text: "If several bad months suggest a deeper issue, a structured review helps more than another monthly report. Our guide to running a social media audit is a good place to start.",
        links: [{ text: "running a social media audit", href: "/blog/social-media-audit" }],
      },
      { type: "heading", text: "Connecting social media to business data", id: "business-data" },
      {
        type: "paragraph",
        text: "Founders think in sales, enquiries and customers. Bring those numbers into the report wherever you can, and be precise about what they do and don't show.",
      },
      {
        type: "list",
        items: [
          "Website sessions, leads and orders from UTM-tagged social links, from your analytics tool.",
          "Discount code or referral code redemptions linked to social content.",
          "Enquiries where the customer said they found you on social media, from your CRM or sales team.",
          "Branded search trends from Google Search Console, which often rise when social awareness grows.",
          "For local businesses, calls and direction requests, where your Google Business Profile performance report shows them.",
        ],
      },
      {
        type: "paragraph",
        text: "Add one caveat line every month: tracked results are a floor. Many people see social content and buy later through search, a marketplace or a store, and that won't show up as social. Don't overclaim the untracked part either; show the trends next to each other and let the pattern speak.",
      },
      { type: "heading", text: "Beyond the monthly report: dashboards and quarterly reviews", id: "dashboards-and-quarterly-reviews" },
      { type: "subheading", text: "Dashboard vs narrative report" },
      {
        type: "table",
        headers: ["", "Live dashboard", "Narrative monthly report"],
        rows: [
          ["Best for", "Marketing team checking numbers any time", "Founders and leaders making decisions"],
          ["Answers", "What are the numbers right now?", "What happened, why, and what next?"],
          ["Strength", "Always current; good for spotting problems early", "Context, judgement and recommendations"],
          ["Weakness", "No interpretation; easy to misread", "A snapshot; takes time to write well"],
          ["Format", "Charts and tables", "One-page summary plus a short appendix"],
        ],
      },
      {
        type: "paragraph",
        text: "Most businesses need both: a dashboard for the team and a narrative for leadership. Sending a founder a dashboard link instead of a report hands them the job of analysis.",
      },
      { type: "subheading", text: "The quarterly review add-on" },
      {
        type: "paragraph",
        text: "Once a quarter, step back from the monthly detail. A quarterly review covers progress against the quarter's goal, which content pillars and platforms earned their place, whether the platform mix should change, what was learned about the audience, and the goals and KPIs for the next quarter. Keep it to a short deck or document and a 30 to 45 minute conversation. Our guide to running a quarterly review for senior leadership covers the format in more depth; it's written for creator programmes, but the structure transfers.",
        links: [{ text: "running a quarterly review for senior leadership", href: "/blog/influencer-marketing-quarterly-review" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Opening with follower growth because it's the easiest number to show going up.",
          "Reporting numbers without baselines, so nobody knows if they're good.",
          "Changing the KPIs from month to month.",
          "Including screenshots of platform dashboards instead of summarised findings.",
          "Claiming sales influence you can't support, which costs credibility later.",
          "Ending without next steps or decisions needed.",
          "Sending the report without a short conversation to discuss it.",
        ],
      },
      { type: "heading", text: "Practical recommendations", id: "recommendations" },
      {
        type: "list",
        items: [
          "Agree the goal and KPIs with the founder at the start of each quarter, in writing.",
          "Keep page 1 readable in two minutes on a phone.",
          "Send the report within the first week of the month while the decisions still matter.",
          "Ask for business data, such as orders or enquiries by source, so the report reflects what matters.",
          "Keep a running log of definition changes and one-off events to explain jumps.",
        ],
      },
      {
        type: "paragraph",
        text: "For a sense of how this looks in a managed engagement, the monthly reporting in our social media management service follows the same principle: what happened, what we learned and what changes next.",
        links: [{ text: "the monthly reporting in our social media management service", href: "/services/social-media-management#analytics-reporting" }],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Rewrite next month's report so page 1 answers the founder's real question: is this helping, and what are we changing? Use the template, keep the agreed KPIs, add the business link with its caveat, and move everything else to the appendix.",
      },
      {
        type: "paragraph",
        text: "If your social mix includes paid campaigns too, report them alongside organic but separately; our guide to organic vs paid social media explains why they need different measures.",
        links: [{ text: "organic vs paid social media", href: "/blog/organic-vs-paid-social-media" }],
      },
    ],
    faqs: [
      {
        question: "How often should social media be reported to leadership?",
        answer:
          "Monthly is the right rhythm for most businesses, with a one-page summary, plus a deeper quarterly review that revisits goals and platform choices. Weekly updates suit only launches or campaigns with fixed dates. More frequent reporting to founders tends to encourage reactions to normal week-to-week noise.",
      },
      {
        question: "Should we include individual post performance in a founder report?",
        answer:
          "Only as evidence for a point. Showing the two posts that explain why a format worked is useful. Listing every post's metrics is not, because it buries the conclusion. Keep post-level data in the appendix or dashboard for the marketing team and anyone who wants to look deeper.",
      },
      {
        question: "What if the founder only cares about sales?",
        answer:
          "Then lead with the business link: tracked sessions, enquiries and orders from social, plus branded search trends. Explain honestly what tracking captures and misses. Then show the leading indicators, such as saves or profile visits, as signs of what's likely to convert next. If social isn't contributing to sales at all after a fair test, say so.",
      },
      {
        question: "Can we use AI tools to write the monthly report?",
        answer:
          "They can help summarise data and draft sections, but someone who knows the account must check the numbers and write the 'why' and 'what next'. Those parts need context about launches, approvals and the business that a tool won't have. Never let a tool invent reasons or figures you haven't verified.",
      },
    ],
  },
];
