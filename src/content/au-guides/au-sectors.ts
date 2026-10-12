import type { BlogPost } from "@/content/blog";
import { AU_AUTHOR, AU_HUB, AU_LANGUAGE, AU_PUBLISHED, AU_REVIEWED, AU_REVIEW_DATE_TEXT, AU_SRC } from "@/content/au-guides/shared";

/**
 * Australia cluster (1540–1559): platforms (1548, with TikTok 1547 and YouTube 1549 consolidated), e-commerce with
 * AI-assisted shopping (1550 + 1551), small business (1552), tourism (1553), hospitality (1554) and beauty and
 * skincare (1555). See docs/australia-1540-1559-audit.md.
 */
export const auSectorPosts: BlogPost[] = [
  // 1548 (+1547, 1549)
  {
    slug: "instagram-tiktok-youtube-influencer-marketing-australia",
    category: "Influencer Marketing",
    title: "Instagram, TikTok and YouTube Influencer Marketing in Australia: Choosing and Planning by Platform",
    seoTitle: "Instagram, TikTok and YouTube Influencers in Australia",
    excerpt:
      "How Australian brands should plan creator campaigns on Instagram, TikTok and YouTube: what each platform does best, formats and branded-content tools, which commerce features are and aren't available in Australia, the under-16 account restriction, measurement by platform and when to combine them.",
    metaDescription:
      "Plan influencer campaigns on Instagram, TikTok and YouTube in Australia: platform roles, formats, commerce availability, under-16 limits and measurement.",
    author: AU_AUTHOR,
    publishedAt: AU_PUBLISHED,
    updatedAt: "2026-10-10",
    lastReviewed: AU_REVIEWED,
    readingTime: "5 min read",
    inLanguage: AU_LANGUAGE,
    spatialCoverage: "Australia",
    breadcrumbParents: [AU_HUB],
    tags: ["TikTok influencer marketing Australia", "Instagram influencer marketing Australia", "YouTube influencer marketing Australia", "creator platforms Australia"],
    related: ["influencer-marketing-australia", "ecommerce-influencer-marketing-australia", "youtube-product-reviews"],
    hero: {
      src: "/blog/au-guides/instagram-tiktok-youtube-influencer-marketing-australia.svg",
      alt: "Choosing Australian creator platforms: Instagram for visual discovery, TikTok for short-form reach, YouTube for considered purchases",
    },
    body: [
      {
        type: "paragraph",
        text: "Most Australian creator campaigns run on Instagram, TikTok or YouTube, and many use more than one. The platforms do different jobs, and some features available overseas aren't available in Australia. This guide is for brands deciding where to put creator budget, and how to plan each platform. We've combined the three platforms in one guide because the decision is usually about the mix, not one platform in isolation.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "In Australia, use Instagram for visual discovery and lifestyle categories through Reels, Stories and collaborative posts; TikTok for short-form reach, trends and product demonstrations; and YouTube for considered purchases, reviews and integrations that keep working in search. As of our review, TikTok Shop wasn't live for Australian shoppers and YouTube's Shopping affiliate program didn't list Australia, so plan conversion through links, codes and your own store. All three platforms must restrict accounts for under-16s.",
      },
      { type: "heading", text: "What each platform does best", id: "roles" },
      {
        type: "table",
        headers: ["", "Instagram", "TikTok", "YouTube"],
        rows: [
          ["Strength", "Visual discovery, lifestyle, community", "Short-form reach, trends, demonstrations", "Depth, reviews, search and longevity"],
          ["Formats", "Reels, Stories, carousels, collaborative posts", "Short videos, LIVE, Spark-style creator ads", "Integrations, dedicated reviews, Shorts"],
          ["Best for", "Fashion, beauty, food, travel, home", "New products, entertainment, impulse categories", "Tech, cars, finance, education, considered buys"],
          ["Shelf life", "Days (Stories hours)", "Days to weeks", "Months to years"],
          ["Key measure", "Reach, saves, link taps, code use", "Views, watch time, clicks, code use", "Watch time, clicks over time, search traffic"],
        ],
      },
      { type: "heading", text: "Commerce availability in Australia", id: "commerce" },
      {
        type: "paragraph",
        text: `Checked ${AU_REVIEW_DATE_TEXT}. Several shopping features differ in Australia. Reports in 2026 said TikTok Shop had no Australian storefront and no announced launch date, and YouTube's Shopping affiliate program listed eligible countries that didn't include Australia. Features change, so check each platform's current help pages before planning. Until then, conversion usually runs through creator links and codes to your own site or retailer.`,
        links: [
          { text: "TikTok Shop had no Australian storefront", href: AU_SRC.tiktokShopAu.url },
          { text: "YouTube's Shopping affiliate program", href: AU_SRC.youtubeAffiliate.url },
        ],
      },
      { type: "heading", text: "Branded content and disclosure tools", id: "disclosure" },
      {
        type: "list",
        items: [
          "Use each platform's paid partnership or branded content label on every sponsored post",
          "Also say it's an ad in the caption or video, upfront; platform labels alone may not be obvious enough",
          "For creator ads run from your account, the ad is your advertising and must be clearly an ad",
          "Affiliate links and codes need a clear statement that the creator earns from them",
        ],
      },
      {
        type: "paragraph",
        text: "The legal and code requirements are in Australian influencer advertising rules.",
        links: [{ text: "Australian influencer advertising rules", href: "/blog/influencer-advertising-rules-australia" }],
      },
      { type: "heading", text: "Planning by platform", id: "planning" },
      { type: "subheading", text: "Instagram" },
      {
        type: "list",
        items: [
          "Reels for reach; Stories for links, polls and offers; carousels for detail",
          "Collaborative posts so the content sits on both the creator's and brand's profiles",
          "Plan Story link stickers with UTM tags per creator",
        ],
      },
      { type: "subheading", text: "TikTok" },
      {
        type: "list",
        items: [
          "Brief for the first two seconds and real demonstration, not polished ads",
          "Let creators use their own style; heavily scripted content performs poorly",
          "Plan paid amplification of the best creator videos with clear usage rights",
          "Link to your store or a retailer, since in-app shopping isn't available in Australia as of our review",
        ],
      },
      { type: "subheading", text: "YouTube" },
      {
        type: "list",
        items: [
          "Integrations for awareness; dedicated reviews for considered purchases",
          "Give review creators freedom to be honest; credibility is the value",
          "Track over months; YouTube videos keep earning views through search",
          "Shorts for reach alongside long-form",
        ],
      },
      {
        type: "paragraph",
        text: "Working with review creators is covered in YouTube product reviews.",
        links: [{ text: "YouTube product reviews", href: "/blog/youtube-product-reviews" }],
      },
      { type: "heading", text: "The under-16 restriction", id: "age" },
      {
        type: "paragraph",
        text: "Instagram, TikTok and YouTube are all on eSafety's list of platforms that must take reasonable steps to stop Australians under 16 from holding accounts. Campaigns aimed at younger audiences need a rethink; see Australia's under-16 social media restrictions.",
        links: [{ text: "Australia's under-16 social media restrictions", href: "/blog/social-media-minimum-age-influencer-campaigns-australia" }],
      },
{ type: "heading", text: "Live shopping and creator demonstrations", id: "live" },
      {
        type: "paragraph",
        text: "Live selling in Australia doesn't work the way it does in markets with TikTok Shop. Without an Australian TikTok Shop storefront, a livestream is mostly a demonstration with links: the creator shows the product, answers questions in real time and sends viewers to your store or retailer with a link or code. That suits products that need explaining, such as skincare routines, kitchen appliances, tech and tools.",
      },
      {
        type: "list",
        items: [
          "Prepare the facts and claims the creator can use, plus answers to likely questions",
          "Disclose the partnership out loud and on screen, and repeat it for people who join late",
          "Pin the link or code in the chat and the description",
          "Have stock and customer service ready for the live window",
          "Save the replay and cut clips, with usage rights agreed",
          "For therapeutic goods, the TGA expects mandatory statements and disclosure to be repeated during livestreams",
        ],
      },
      {
        type: "paragraph",
        text: "TGA livestream expectations are in its guidance on advertising therapeutic goods on social media.",
        links: [{ text: "advertising therapeutic goods on social media", href: AU_SRC.tgaSocial.url }],
      },
      { type: "heading", text: "Combining platforms", id: "combining" },
      {
        type: "table",
        headers: ["Objective", "Suggested mix"],
        rows: [
          ["Launch reach", "TikTok and Instagram Reels in the same week"],
          ["Considered purchase", "YouTube reviews, supported by Instagram Stories with links"],
          ["Local business", "Instagram with local creators; TikTok for discovery"],
          ["Always-on", "A small Instagram ambassador group plus periodic YouTube reviews"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Copying an overseas TikTok Shop plan into Australia",
          "The same script across all three platforms",
          "Judging YouTube on week-one views",
          "Relying only on the platform's partnership label for disclosure",
          "Ignoring the under-16 restriction for youth categories",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Pick platforms by the job: Instagram for visual discovery, TikTok for short-form reach and demonstration, YouTube for considered decisions. Check which commerce features exist in Australia before planning, disclose clearly on every platform, and measure each one against its role.",
      },
    ],
    faqs: [
      {
        question: "Is TikTok Shop available in Australia?",
        answer:
          "As of our October 2026 review, reports said TikTok Shop had no Australian storefront and no announced launch date. Check TikTok's current information before planning.",
      },
      {
        question: "Which platform is best for influencer marketing in Australia?",
        answer:
          "It depends on the job: Instagram for visual discovery and lifestyle categories, TikTok for short-form reach and demonstrations, YouTube for reviews and considered purchases. Many campaigns combine two.",
      },
      {
        question: "Do Australian creators need to use paid partnership labels?",
        answer:
          "Use them, and also say clearly in the post that it's an ad. The test is whether the advertising relationship is obvious to the audience.",
      },
    ],
  },
  // 1550 (+1551)
  {
    slug: "ecommerce-influencer-marketing-australia",
    category: "Influencer Marketing",
    title: "Influencer Marketing for Australian E-commerce Brands",
    seoTitle: "Influencer Marketing for Australian E-commerce Brands",
    excerpt:
      "How Australian online brands can use creators to drive profitable sales: the commerce features available locally, links, codes and affiliate terms, landing pages, measuring net orders after returns, consumer guarantees, honest reviews, and how creator reviews may feed AI-assisted shopping, separated from verified facts.",
    metaDescription:
      "Influencer marketing for Australian e-commerce: links, codes and affiliates, landing pages, net orders, consumer law and AI-assisted shopping.",
    author: AU_AUTHOR,
    publishedAt: AU_PUBLISHED,
    updatedAt: "2026-10-10",
    lastReviewed: AU_REVIEWED,
    readingTime: "5 min read",
    inLanguage: AU_LANGUAGE,
    spatialCoverage: "Australia",
    breadcrumbParents: [AU_HUB],
    tags: ["influencer marketing ecommerce Australia", "creator affiliate program Australia", "influencer discount codes Australia", "AI shopping creator reviews"],
    related: ["influencer-affiliate-program", "influencer-customer-quality", "instagram-tiktok-youtube-influencer-marketing-australia"],
    hero: {
      src: "/blog/au-guides/ecommerce-influencer-marketing-australia.svg",
      alt: "Australian e-commerce creator campaign: honest reviews, tracked links and codes, focused landing page, net orders, repeat customers",
    },
    body: [
      {
        type: "paragraph",
        text: "For Australian online brands, creators can drive traffic and sales, but the economics only work when campaigns are measured on profitable orders, not clicks. Local conditions matter too: some in-app shopping features available overseas aren't live here, consumer guarantees affect returns, and reviews must be honest. This guide is for e-commerce founders and growth teams.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Australian e-commerce brands get the best results from creators who demonstrate products honestly, with a tracked link and code per creator leading to a focused landing page. Measure net orders after returns and cancellations, cost per new customer and repeat purchases, not just clicks. Disclose every paid, gifted and affiliate relationship clearly, never edit or fake reviews, and plan conversion through your own store or retailers, because some platform shopping features aren't available in Australia.",
      },
      { type: "heading", text: "Creator roles in the funnel", id: "roles" },
      {
        type: "table",
        headers: ["Role", "Content", "Measure"],
        rows: [
          ["Discovery", "Short demos, first impressions", "Reach in Australia, link clicks"],
          ["Consideration", "Reviews, comparisons, sizing and fit", "Product page views, add to cart"],
          ["Conversion", "Codes, limited offers, bundles", "Net orders by creator"],
          ["Retention", "Ambassadors, refills, new ranges", "Repeat purchase by creator cohort"],
        ],
      },
      { type: "heading", text: "Links, codes and affiliate terms", id: "affiliate" },
      {
        type: "list",
        items: [
          "One UTM-tagged link and one code per creator",
          "Commission on net sales after returns, with a clear attribution window",
          "Pay commission after the return period, so refunds don't create disputes",
          "Creators state clearly that they earn from links or codes",
          "Watch for code leakage to coupon sites; use expiring or single-creator codes",
        ],
      },
      {
        type: "paragraph",
        text: "Program mechanics are covered in influencer affiliate programs.",
        links: [{ text: "influencer affiliate programs", href: "/blog/influencer-affiliate-program" }],
      },
      { type: "heading", text: "Landing pages", id: "landing" },
      {
        type: "list",
        items: [
          "Send creator traffic to the product shown, not the homepage",
          "Show the code applied, delivery times and costs, returns and payment options upfront",
          "Design for mobile and in-app browsers",
          "Keep claims identical to what the creator said",
        ],
      },
      { type: "heading", text: "Measuring profitable sales", id: "measurement" },
      {
        type: "table",
        headers: ["Metric", "Calculation"],
        rows: [
          ["Net orders", "Orders − returns − cancellations, by creator"],
          ["Cost per new customer", "Creator costs ÷ first-time customers"],
          ["Repeat rate", "Customers who buy again within 90 days ÷ customers"],
          ["Contribution", "Net revenue − product, shipping, commission and creator costs"],
        ],
      },
      {
        type: "paragraph",
        text: "Calculate break-even on revenue excluding GST. Hypothetical example: an A$110 order includes A$10 GST, so revenue is A$100. If product, shipping, payment fees and commission cost A$60, the contribution margin is 40%, and break-even ROAS is 1 ÷ 0.40 = 2.5 on GST-exclusive revenue (2.75 if your dashboard reports GST-inclusive revenue). The method is explained in how to calculate break-even ROAS for influencer campaigns.",
        links: [{ text: "how to calculate break-even ROAS for influencer campaigns", href: "/blog/break-even-roas-influencer-campaigns" }],
      },
      {
        type: "paragraph",
        text: "Customer quality by creator is covered in how to measure customer quality from influencer campaigns.",
        links: [{ text: "how to measure customer quality from influencer campaigns", href: "/blog/influencer-customer-quality" }],
      },
      { type: "heading", text: "Consumer law and reviews", id: "law" },
      {
        type: "paragraph",
        text: "Creator claims about your product must be accurate, and paid, gifted or affiliate relationships must be clear. The ACCC's guidance on online reviews says businesses must not write or arrange fake reviews, or edit reviews in ways that mislead, and in 2026 it penalised PhotobookShop over influencer reviews, including undisclosed edits. Returns and refunds are also shaped by the consumer guarantees in the Australian Consumer Law; don't let creator offers suggest customers have fewer rights than they do.",
        links: [
          { text: "ACCC's guidance on online reviews", href: AU_SRC.acccReviews.url },
          { text: "penalised PhotobookShop", href: AU_SRC.acccPhotobook.url },
        ],
      },
      { type: "heading", text: "Creator reviews and AI-assisted shopping", id: "ai" },
      {
        type: "paragraph",
        text: "Shoppers increasingly ask AI assistants for product recommendations. IAB Australia's Creator Connect Report 2026 says AI assistants are starting to draw on creator reviews, and surveyed consumers about what they want AI to draw on and how much source transparency they expect. What is verified: the research found the trend and consumers' expectations. What isn't: how any specific AI system selects or weights creator content, or whether your products will be recommended. No one can promise that.",
        links: [{ text: "Creator Connect Report 2026", href: AU_SRC.iabCreatorConnect.url }],
      },
      {
        type: "paragraph",
        text: "IAB Australia's Commerce and Discovery Report 2026 (published July 2026, surveying 1,079 Australian online shoppers aged 18 to 70) adds context: shoppers move between search, retailer sites, reviews, social media and AI tools before buying; search remains the main discovery source; AI tools are used alongside existing research rather than replacing it; and creators' influence depends more on authenticity and expertise than audience size. The public summary doesn't give the detailed figures, so we haven't quoted any.",
        links: [{ text: "Commerce and Discovery Report 2026", href: AU_SRC.iabCommerceDiscovery.url }],
      },
      {
        type: "list",
        items: [
          "Make reviews genuinely useful: specific use cases, sizing, pros and cons",
          "Keep facts consistent across creator content, product pages and retailer listings",
          "Publish clear product information on your own site (specifications, materials, care, returns)",
          "Keep disclosure clear; trustworthy sources are more useful to people and, plausibly, to AI systems",
          "Don't create fake or incentivised-but-undisclosed reviews to influence any channel",
        ],
      },
      {
        type: "paragraph",
        text: "Choosing between Instagram, TikTok and YouTube for each stage is covered in Instagram, TikTok and YouTube influencer marketing in Australia.",
        links: [{ text: "Instagram, TikTok and YouTube influencer marketing in Australia", href: "/blog/instagram-tiktok-youtube-influencer-marketing-australia" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Paying commission on orders that are later returned",
          "Planning around in-app shopping features that aren't live in Australia",
          "Editing creator reviews",
          "Judging creators on clicks",
          "Expecting AI visibility from volume rather than useful, consistent information",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "For Australian e-commerce, creators work best as honest demonstrators with tracked links, measured on net orders and repeat customers. Keep reviews genuine and product information consistent; it serves shoppers today and whatever discovery channels come next.",
      },
    ],
    faqs: [
      {
        question: "How should Australian online stores pay influencers?",
        answer:
          "Often a flat fee for content plus commission on net sales after returns, with clear attribution windows. Pay commission after the return period and require clear disclosure of affiliate links and codes.",
      },
      {
        question: "Can creator reviews help products appear in AI shopping recommendations?",
        answer:
          "IAB Australia reports that AI assistants are starting to draw on creator reviews, but no one can say how specific AI systems choose sources. Focus on useful, honest, consistent product information rather than trying to game any system.",
      },
      {
        question: "Can brands edit influencer reviews in Australia?",
        answer:
          "Not in ways that mislead. The ACCC penalised a business in 2026 partly for making undisclosed edits to an influencer's review.",
      },
    ],
  },
  // 1552
  {
    slug: "small-business-influencer-marketing-australia",
    category: "Influencer Marketing",
    title: "Influencer Marketing for Small Businesses in Australia: A Practical Starter Plan",
    seoTitle: "Influencer Marketing for Small Businesses in Australia",
    excerpt:
      "A starter plan for Australian small businesses trying creators for the first time: setting a goal you can measure, finding local creators, working with a modest AUD budget, gifting vs paying, disclosure obligations, a simple brief and contract, and what to measure in the first 90 days.",
    metaDescription:
      "Influencer marketing for Australian small businesses: a measurable goal, local creators, a modest AUD budget, gifting vs paying, disclosure and a 90-day plan.",
    author: AU_AUTHOR,
    publishedAt: AU_PUBLISHED,
    updatedAt: "2026-10-10",
    lastReviewed: AU_REVIEWED,
    readingTime: "5 min read",
    inLanguage: AU_LANGUAGE,
    spatialCoverage: "Australia",
    breadcrumbParents: [AU_HUB],
    tags: ["influencer marketing small business Australia", "local influencers Australia", "small business creator marketing", "influencer marketing on a budget Australia"],
    related: ["influencer-marketing-australia", "hospitality-influencer-marketing-australia", "influencer-marketing-cost-australia"],
    hero: {
      src: "/blog/au-guides/small-business-influencer-marketing-australia.svg",
      alt: "Small business starter plan: one goal, local creators, small budget, clear disclosure, measure for 90 days",
    },
    body: [
      {
        type: "paragraph",
        text: "Small businesses don't need celebrity creators. A café, salon, trade business or online shop can often get more from a few local creators whose followers live nearby or care about the niche. But small budgets leave no room for waste, and the same disclosure rules apply to a local creator as to a national one. This starter plan is for owners and small marketing teams trying creators for the first time.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Start with one measurable goal (bookings, store visits or online orders), two to five local or niche creators whose audiences are in your area, a small budget you can afford to test with, and a short written agreement covering deliverables, payment, disclosure and usage. Make sure every post says clearly that it's an ad or gifted ad, give each creator a code or link, and review results after 90 days before spending more.",
      },
      { type: "heading", text: "Step 1: Pick one goal", id: "goal" },
      {
        type: "table",
        headers: ["Business", "Goal", "How to count it"],
        rows: [
          ["Café or restaurant", "Visits and bookings", "Creator code at the counter, booking-link source"],
          ["Salon, gym, clinic", "New bookings", "Booking link per creator; ask new clients how they heard"],
          ["Online shop", "Orders", "Code and link per creator"],
          ["Trade or service", "Enquiries", "Tracked form or phone number per creator"],
        ],
      },
      { type: "heading", text: "Step 2: Find local creators", id: "find" },
      {
        type: "list",
        items: [
          "Search your suburb, city or niche on Instagram and TikTok; check who posts about places like yours",
          "Look at your own followers and customers; some may create content",
          "Ask creators for audience location screenshots; you want followers near you",
          "Check that past sponsored posts were clearly disclosed",
        ],
      },
      {
        type: "paragraph",
        text: "A fuller checklist is in how to find and vet influencers in Australia.",
        links: [{ text: "how to find and vet influencers in Australia", href: "/blog/find-vet-influencers-australia" }],
      },
      { type: "heading", text: "Step 3: Gift or pay?", id: "gift-or-pay" },
      {
        type: "table",
        headers: ["", "Gifting (product or experience)", "Paid"],
        rows: [
          ["Best for", "Testing interest, very small creators", "Guaranteed deliverables and timing"],
          ["What you can ask for", "Nothing guaranteed; it's an invitation", "Agreed posts, dates and usage"],
          ["Disclosure", "Required if there's any expectation of content", "Required"],
          ["Tax note", "The ATO treats benefits received for work as income for the creator", "Creators registered for GST add GST"],
        ],
      },
      {
        type: "paragraph",
        text: "See the ATO's guidance on non-cash income and influencer marketing costs in Australia for budgeting.",
        links: [
          { text: "ATO's guidance on non-cash income", href: AU_SRC.atoIncome.url },
          { text: "influencer marketing costs in Australia", href: "/blog/influencer-marketing-cost-australia" },
        ],
      },
      { type: "heading", text: "Step 4: A one-page brief and agreement", id: "brief" },
      {
        type: "template",
        label: "Small business creator agreement (outline)",
        text: "Business and contact:\nCreator and ABN (and GST status):\nWhat we're promoting:\nGoal and how we'll track it (code / link):\nDeliverables and dates:\nKey facts (prices, opening hours, what's included):\nDisclosure: start the caption/video with 'Ad' (or 'Gifted ad') and use the platform's paid partnership label\nApproval: we check facts before posting (not your style)\nPayment and terms:\nUsage: can we repost on our page? For how long? Ads included?\nCancellation or rescheduling:",
      },
      { type: "heading", text: "Step 5: Disclosure basics", id: "disclosure" },
      {
        type: "paragraph",
        text: "Under the Australian Consumer Law, posts must not mislead people about a commercial relationship, and the AANA code requires advertising to be clearly distinguishable. Ask creators to label posts clearly at the start; vague tags like 'collab' have been flagged by the ACCC. If you sell sunscreen, supplements or alcohol, extra rules apply. Details are in Australian influencer advertising rules.",
        links: [{ text: "Australian influencer advertising rules", href: "/blog/influencer-advertising-rules-australia" }],
      },
      { type: "heading", text: "Step 6: Measure for 90 days", id: "measure" },
      {
        type: "list",
        items: [
          "Count codes, link visits, bookings or enquiries per creator",
          "Note any rise in walk-ins or calls during the campaign weeks",
          "Calculate cost per result for each creator",
          "Ask new customers how they found you",
          "Rebook creators who brought results; drop or rebrief the rest",
        ],
      },
{ type: "heading", text: "For startups", id: "startups" },
      {
        type: "list",
        items: [
          "Use creators to learn, not only to sell: which message, audience and format gets a response",
          "Pay a few creators in your exact niche rather than one bigger name",
          "Offer equity or long deferred payments only with legal advice; keep creator deals simple",
          "Founder-led content and customer creators can come before paid creators",
          "Get usage rights for paid ads early; startup growth often depends on them",
          "Avoid claims you can't yet support, such as 'Australia's first' or 'best'",
        ],
      },
      {
        type: "paragraph",
        text: "Contracts with creators are covered in influencer contracts in Australia, and the first brief in the influencer brief template for Australian brands.",
        links: [
          { text: "influencer contracts in Australia", href: "/blog/influencer-contracts-australia" },
          { text: "influencer brief template for Australian brands", href: "/blog/influencer-brief-template-australia" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Choosing creators with big followings outside your area",
          "Gifting without saying what you hope for, then feeling let down",
          "No code or link, so results can't be counted",
          "No written agreement",
          "Forgetting disclosure because 'it's only a free coffee'",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "For small businesses, creator marketing works best small and local: one goal, a few well-matched creators, clear disclosure, a simple agreement and honest measurement. Learn from the first 90 days, then decide whether to scale. Hospitality businesses will find more detail in influencer marketing for Australian restaurants, cafés and hospitality.",
        links: [{ text: "influencer marketing for Australian restaurants, cafés and hospitality", href: "/blog/hospitality-influencer-marketing-australia" }],
      },
    ],
    faqs: [
      {
        question: "Can small businesses in Australia afford influencer marketing?",
        answer:
          "Often yes, by working with a few local or niche creators, starting with a small test budget, and measuring cost per booking or order before scaling.",
      },
      {
        question: "Do gifted posts need to be disclosed in Australia?",
        answer:
          "Yes, if there's an expectation of content. Ask creators to label posts clearly, for example 'Gifted ad', at the start of the caption or video.",
      },
      {
        question: "How do I measure influencer results for a local business?",
        answer:
          "Give each creator a code, booking link or tracked enquiry route, ask new customers how they heard about you, and compare cost per result across creators after 90 days.",
      },
    ],
  },
  // 1553
  {
    slug: "tourism-influencer-marketing-australia",
    category: "Influencer Marketing",
    title: "Influencer Marketing for Australian Tourism and Regional Destinations",
    seoTitle: "Tourism Influencer Marketing in Australia",
    excerpt:
      "How tourism operators, regional destinations and attractions in Australia can work with travel creators: choosing creators by source market, hosted trips and disclosure, filming permits in national parks, respecting Traditional Owners and sacred sites, drones, seasonality and measuring bookings and visitation.",
    metaDescription:
      "Tourism influencer marketing in Australia: source-market creators, hosted trips, park filming permits, Traditional Owners and booking measurement.",
    author: AU_AUTHOR,
    publishedAt: AU_PUBLISHED,
    updatedAt: "2026-10-10",
    lastReviewed: AU_REVIEWED,
    readingTime: "4 min read",
    inLanguage: AU_LANGUAGE,
    spatialCoverage: "Australia",
    breadcrumbParents: [AU_HUB],
    tags: ["tourism influencer marketing Australia", "regional tourism influencers", "travel creators Australia", "destination marketing influencers"],
    related: ["influencer-marketing-australia", "hospitality-influencer-marketing-australia", "experiential-influencer-marketing"],
    hero: {
      src: "/blog/au-guides/tourism-influencer-marketing-australia.svg",
      alt: "Tourism creator program: source-market creators, permits and protocols, hosted itinerary, disclosed content, bookings measured",
    },
    body: [
      {
        type: "paragraph",
        text: "Travel decisions are shaped by what people see: the beach, the trail, the meal, the room. Creators who show a destination honestly can bring visitors from interstate and overseas, and help regional areas compete with big cities. Tourism content also has rules other categories don't: permits to film in national parks, cultural protocols on Country, drone restrictions and disclosure for hosted trips. This guide is for operators, destinations and attractions.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Tourism influencer marketing in Australia works when you choose creators by the source market you want visitors from, host them on a realistic itinerary, and agree disclosure for hosted trips. Before filming, check permits (national parks often require them for commercial filming, including by influencers), respect Traditional Owners' wishes and sacred-site rules, and follow drone rules. Track bookings and enquiries per creator, and judge results over the booking window, not the week of posting.",
      },
      { type: "heading", text: "Choose creators by source market", id: "creators" },
      {
        type: "table",
        headers: ["Visitors you want", "Creators to consider"],
        rows: [
          ["Locals and weekenders", "City and lifestyle creators in nearby capitals"],
          ["Interstate travellers", "Travel and family creators in your key states"],
          ["International visitors", "Creators based in, or with audiences in, your priority countries"],
          ["Adventure and outdoors", "Hiking, diving, cycling and road-trip specialists"],
          ["Food and wine", "Food and regional producer creators"],
        ],
      },
      { type: "heading", text: "Hosted trips", id: "hosted" },
      {
        type: "list",
        items: [
          "Agree deliverables, dates and usage before the trip; a free trip is still a commercial relationship",
          "Disclose hosted stays clearly in each post, not only in a bio",
          "Plan a realistic itinerary; don't stage experiences guests can't book",
          "Give creators honest freedom; overly polished content can disappoint visitors",
          "Agree rights to reuse content in your own marketing and with tourism partners",
        ],
      },
      { type: "heading", text: "Permits, Country and protocols", id: "permits" },
      {
        type: "paragraph",
        text: `Checked ${AU_REVIEW_DATE_TEXT}. Many parks and reserves require permits for commercial filming and photography. At Uluṟu-Kata Tjuṯa National Park, for example, Parks Australia lists filming and photography for commercial or public purposes, explicitly including social media influencers and content creators, as an activity that needs a permit, and its media guidelines cover sacred sites and working with Aṉangu, the Traditional Owners. Check the rules for every park, beach or reserve on your itinerary with the managing agency.`,
        links: [{ text: "Parks Australia lists", href: AU_SRC.parksUluru.url }],
      },
      {
        type: "list",
        items: [
          "Ask the relevant Traditional Owners, land council or park agency how places can be shown, and follow their guidance",
          "Never film or photograph sites or people where it isn't permitted, and ask before photographing people",
          "Don't use First Nations art, stories or symbols in content without permission",
          "For drones, follow the Civil Aviation Safety Authority's rules and any park bans",
        ],
      },
      {
        type: "paragraph",
        text: "Sources: the Civil Aviation Safety Authority's drone rules and, for working with First Nations cultural material, Creative Australia's protocols.",
        links: [
          { text: "Civil Aviation Safety Authority's drone rules", href: AU_SRC.casaDrones.url },
          { text: "Creative Australia's protocols", href: AU_SRC.creativeAustraliaProtocols.url },
        ],
      },
      { type: "heading", text: "Seasonality and timing", id: "seasons" },
      {
        type: "list",
        items: [
          "Post content for the planning window, often weeks or months before the season",
          "Show the destination in the season you want to sell, not only its peak",
          "School holidays differ by state; target families accordingly",
          "Avoid promoting areas during fire, flood or other emergencies; follow official advice and pause content",
        ],
      },
{ type: "heading", text: "Travel gear and outdoor brands", id: "gear" },
      {
        type: "paragraph",
        text: "Outdoor, camping and travel gear brands often brief creators to film in national parks and remote areas. The same permits, drone rules and cultural protocols apply, and safety matters as much as the product. Show safe practice (water, sun, fire bans, track closures), don't depict behaviour that breaks park rules, and make performance claims (waterproof, UV-rated, weight) match your testing. Gear is easiest to measure with codes and retailer links, and longer-form reviews on YouTube tend to keep working for considered purchases.",
      },
      { type: "heading", text: "Measuring bookings and visitation", id: "measurement" },
      {
        type: "table",
        headers: ["Metric", "How"],
        rows: [
          ["Bookings", "Tracked booking links or codes per creator"],
          ["Enquiries", "Form or email enquiries by source"],
          ["Website visits from target states or countries", "Analytics filtered by location and creator link"],
          ["Search interest", "Branded and destination search during and after the campaign"],
          ["Content reuse", "Performance of creator content in your own channels"],
        ],
      },
      {
        type: "paragraph",
        text: "Bookings can arrive months later. Keep links live and report at 30, 90 and 180 days.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Hosting creators whose audiences aren't in your source markets",
          "Filming in parks without checking permits",
          "Ignoring cultural protocols on Country",
          "Undisclosed hosted stays",
          "Judging results in the week of posting",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Creators can put a destination on someone's list, but tourism content must respect place, people and rules. Choose creators by source market, check permits and protocols before filming, disclose hosted trips and measure bookings over the real planning window. For the wider Australian picture, see influencer marketing in Australia.",
        links: [{ text: "influencer marketing in Australia", href: "/blog/influencer-marketing-australia" }],
      },
    ],
    faqs: [
      {
        question: "Do influencers need permits to film in Australian national parks?",
        answer:
          "Often yes for commercial filming. Parks Australia, for example, requires a permit at Uluṟu-Kata Tjuṯa for commercial filming and photography, explicitly including influencers and content creators. Check with the agency that manages each park.",
      },
      {
        question: "Do hosted trips need to be disclosed?",
        answer:
          "Yes. A hosted stay is a commercial relationship; posts should clearly say they're advertising or hosted, upfront in each post.",
      },
      {
        question: "How should tourism businesses measure influencer results?",
        answer:
          "Track bookings and enquiries per creator, visits from target states or countries, and search interest, and report at 30, 90 and 180 days because travel is planned in advance.",
      },
    ],
  },
  // 1554
  {
    slug: "hospitality-influencer-marketing-australia",
    category: "Influencer Marketing",
    title: "Influencer Marketing for Australian Restaurants, Cafés and Hospitality Brands",
    seoTitle: "Restaurant and Café Influencer Marketing in Australia",
    excerpt:
      "How Australian restaurants, cafés, bars and hospitality groups can work with food creators: local creators, hosted meals and disclosure, honest reviews, alcohol marketing under the ABAC code, openings and menu launches, and measuring bookings, walk-ins and repeat visits.",
    metaDescription:
      "Restaurant and café influencer marketing in Australia: local food creators, hosted meals and disclosure, honest reviews, ABAC rules and bookings.",
    author: AU_AUTHOR,
    publishedAt: AU_PUBLISHED,
    lastReviewed: AU_REVIEWED,
    readingTime: "4 min read",
    inLanguage: AU_LANGUAGE,
    spatialCoverage: "Australia",
    breadcrumbParents: [AU_HUB],
    tags: ["restaurant influencer marketing Australia", "cafe influencers Sydney Melbourne", "hospitality influencer marketing", "food influencers Australia"],
    related: ["small-business-influencer-marketing-australia", "influencer-advertising-rules-australia", "restaurant-cafe-influencer-marketing-india"],
    hero: {
      src: "/blog/au-guides/hospitality-influencer-marketing-australia.svg",
      alt: "Hospitality creator campaign: local food creators, hosted visit disclosed, honest review, alcohol rules checked, bookings counted",
    },
    body: [
      {
        type: "paragraph",
        text: "Food content is one of the most-watched categories on Australian social media, and a single good video can fill a café on a Saturday. Hospitality also has specific risks: hosted meals that aren't disclosed, review practices the ACCC treats as misleading, and alcohol marketing rules that make the venue responsible for influencer posts. This guide is for restaurants, cafés, bars and hospitality groups.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Restaurants and cafés in Australia should work with food creators whose followers live nearby, host them on normal service days, and make sure hosted or paid visits are clearly disclosed. Let creators give honest opinions, never edit or fake reviews, and if alcohol features, follow the ABAC code's influencer guidance (creators 25 or over, adult-audience controls, no excessive drinking). Track bookings and walk-ins with creator links and codes.",
      },
      { type: "heading", text: "Choose local food creators", id: "creators" },
      {
        type: "list",
        items: [
          "Audience in your city or suburb matters more than follower count",
          "Match cuisine and price point: a fine-dining creator and a cheap-eats creator reach different diners",
          "Mix food critics and reviewers with lifestyle and family creators",
          "Check past hosted posts were clearly disclosed",
        ],
      },
      { type: "heading", text: "Hosted visits done properly", id: "hosted" },
      {
        type: "list",
        items: [
          "Invite on normal service days so content reflects the real experience",
          "Agree whether posting is expected; if it is, disclosure is required",
          "Avoid special plates or service creators' audiences won't get",
          "Brief on facts: dishes, prices, dietary options, opening hours",
          "Space visits over several weeks rather than one influencer night",
        ],
      },
      { type: "heading", text: "Reviews and honesty", id: "reviews" },
      {
        type: "paragraph",
        text: "The ACCC says businesses must not write or arrange fake reviews, ask paid people to post reviews without disclosing the relationship, or edit reviews in a way that misleads. A creator's honest mixed review is more credible than paid praise, and safer.",
        links: [{ text: "The ACCC says", href: AU_SRC.acccReviews.url }],
      },
      { type: "heading", text: "Alcohol and the ABAC code", id: "alcohol" },
      {
        type: "paragraph",
        text: "If your venue promotes alcoholic drinks through creators, the ABAC scheme applies to marketing by restaurants and venues as well as producers. ABAC's July 2026 guide for brands working with influencers says the brand is responsible for influencer content it engages, influencers promoting alcohol must be 25 or over and not pregnant, and creators should use the platform's 18+ restrictions. Avoid showing excessive or rapid drinking.",
        links: [{ text: "ABAC's July 2026 guide", href: AU_SRC.abacInfluencers.url }],
      },
      { type: "heading", text: "Openings and menu launches", id: "launches" },
      {
        type: "table",
        headers: ["When", "Creator activity"],
        rows: [
          ["Two weeks before", "Teasers, behind the scenes, booking link"],
          ["Opening weeks", "Staggered hosted visits on normal service"],
          ["First month", "Reviews and follow-ups; respond to feedback"],
          ["New menus or seasons", "Repeat creators who already know you"],
        ],
      },
      { type: "heading", text: "Measuring bookings and visits", id: "measurement" },
      {
        type: "list",
        items: [
          "Booking links with UTM tags per creator",
          "A creator-specific dish, code or 'mention' offer at the counter",
          "Covers and walk-ins vs the same days in previous weeks",
          "Repeat visits from loyalty or booking data",
          "Ask new guests how they heard about you",
        ],
      },
      {
        type: "paragraph",
        text: "A simple starter plan for owner-run venues is in influencer marketing for small businesses in Australia.",
        links: [{ text: "influencer marketing for small businesses in Australia", href: "/blog/small-business-influencer-marketing-australia" }],
      },
      {
        type: "paragraph",
        text: "Regional venues, wineries and food trails often sit within a wider destination story; see influencer marketing for Australian tourism and regional destinations.",
        links: [{ text: "influencer marketing for Australian tourism and regional destinations", href: "/blog/tourism-influencer-marketing-australia" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Undisclosed hosted meals",
          "Asking creators to remove or soften honest criticism",
          "Under-25 creators promoting cocktails",
          "One big influencer night instead of staggered visits",
          "No way to count bookings from creators",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "In hospitality, local trust is everything. Choose creators near you, host them on real service, disclose every hosted visit, keep reviews honest, follow ABAC rules for alcohol, and count the bookings. Venues that treat creators as honest guests tend to get the content that fills tables.",
      },
    ],
    faqs: [
      {
        question: "Do hosted restaurant visits need to be disclosed in Australia?",
        answer:
          "Yes, where the creator is expected to post. A free meal is a commercial relationship, and the post should clearly say it's hosted or an ad.",
      },
      {
        question: "Can venues use influencers to promote alcohol in Australia?",
        answer:
          "Yes, within the ABAC code. ABAC's guidance says influencers must be 25 or over and not pregnant, use 18+ audience controls, and avoid showing excessive drinking; the venue is responsible for content it engages.",
      },
      {
        question: "How do cafés measure influencer results?",
        answer:
          "With creator booking links, a creator-specific dish or code, covers compared with similar days, and asking new guests how they heard about you.",
      },
    ],
  },
  // 1555
  {
    slug: "beauty-skincare-influencer-marketing-australia",
    category: "Influencer Marketing",
    title: "Influencer Marketing for Australian Beauty and Skincare Brands",
    seoTitle: "Beauty and Skincare Influencer Marketing in Australia",
    excerpt:
      "How Australian beauty and skincare brands can work with creators within the rules: the line between cosmetics and therapeutic goods, why sunscreen testimonials from paid creators are restricted, substantiating claims, demonstration and before-and-after content, disclosure, and measuring sales across your store and retailers.",
    metaDescription:
      "Beauty and skincare influencer marketing in Australia: cosmetics vs therapeutic goods, sunscreen testimonial rules, claims, demos and disclosure.",
    author: AU_AUTHOR,
    publishedAt: AU_PUBLISHED,
    lastReviewed: AU_REVIEWED,
    readingTime: "4 min read",
    inLanguage: AU_LANGUAGE,
    spatialCoverage: "Australia",
    breadcrumbParents: [AU_HUB],
    tags: ["beauty influencer marketing Australia", "skincare influencers Australia", "TGA sunscreen influencer rules", "cosmetics claims Australia"],
    related: ["influencer-advertising-rules-australia", "skincare-influencer-brief-gcc", "ecommerce-influencer-marketing-australia"],
    hero: {
      src: "/blog/au-guides/beauty-skincare-influencer-marketing-australia.svg",
      alt: "Australian beauty creator campaign: cosmetic or therapeutic check, substantiated claims, honest demonstration, clear disclosure, sales tracked",
    },
    body: [
      {
        type: "paragraph",
        text: "Beauty and skincare are among the most active creator categories in Australia, and among the most regulated. Sunscreens and products with therapeutic claims fall under the Therapeutic Goods Administration's advertising rules, which restrict testimonials from paid or gifted creators. Cosmetics are governed mainly by consumer law: claims must be true and provable. This guide is for brand and marketing teams planning beauty campaigns. It's general information, not regulatory advice.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "First confirm whether each product is a cosmetic or a therapeutic good: primary sunscreens, and products making therapeutic claims such as treating a condition, are regulated by the TGA, and since 2022 paid or gifted creators can't give personal-experience testimonials for therapeutic goods. For cosmetics, make sure every claim is substantiated, show honest demonstrations without misleading filters, disclose every paid and gifted post clearly, and track sales across your store and retailers.",
      },
      { type: "heading", text: "Cosmetic or therapeutic good?", id: "boundary" },
      {
        type: "table",
        headers: ["Product or claim", "Usually", "Creator implication"],
        rows: [
          ["Moisturiser, makeup, cleanser with cosmetic claims", "Cosmetic", "Consumer law: claims must be true and substantiated"],
          ["Primary sunscreen (main purpose is sun protection)", "Therapeutic good", "TGA advertising rules; no paid or gifted testimonials"],
          ["Product claiming to treat acne, eczema or another condition", "Likely therapeutic", "Check with a regulatory adviser before any creator content"],
          ["Supplements, vitamins", "Therapeutic good (listed medicine)", "TGA rules apply"],
        ],
      },
      {
        type: "paragraph",
        text: `Checked ${AU_REVIEW_DATE_TEXT}. Classification depends on ingredients, presentation and claims; confirm with the TGA or a regulatory adviser.`,
        links: [{ text: "TGA", href: AU_SRC.tga.url }],
      },
      { type: "heading", text: "Sunscreen and the testimonial rule", id: "sunscreen" },
      {
        type: "paragraph",
        text: "The Therapeutic Goods Advertising Code changes that took effect in 2022 stopped people who are paid or gifted to promote therapeutic goods from giving testimonials, meaning personal accounts of their experience. As reported by AdNews, influencers can still be part of a therapeutic-goods brand's marketing if they don't give a personal account of using the product. In practice: a paid creator can show a sunscreen and state approved facts, but shouldn't say how it worked for their skin.",
        links: [{ text: "As reported by AdNews", href: AU_SRC.tgaInfluencers.url }],
      },
      { type: "heading", text: "Substantiating cosmetic claims", id: "claims" },
      {
        type: "list",
        items: [
          "Keep evidence for every claim creators will repeat ('hydrates for 24 hours', 'non-comedogenic', 'vegan')",
          "Avoid therapeutic language for cosmetics ('treats', 'heals', 'cures')",
          "Be careful with 'natural', 'clean' and 'chemical-free'; they're easily misleading",
          "Comparative claims need robust, current evidence",
          "Give creators a written approved-claims list",
        ],
      },
      { type: "heading", text: "Demonstrations, filters and before-and-after", id: "demos" },
      {
        type: "list",
        items: [
          "Apply products in real time, in natural light",
          "No skin-smoothing or beautifying filters on demonstrations; they misrepresent results",
          "Before-and-after only for substantiated, typical results, with identical conditions and the time between images stated",
          "Ask creators to describe their skin type so viewers can relate",
          "Show a range of skin tones and types across the campaign",
        ],
      },
      {
        type: "paragraph",
        text: "A detailed demonstration brief and template, written for Gulf markets but transferable, is in how to brief influencers for skincare product demonstrations.",
        links: [{ text: "how to brief influencers for skincare product demonstrations", href: "/blog/skincare-influencer-brief-gcc" }],
      },
      { type: "heading", text: "Disclosure", id: "disclosure" },
      {
        type: "paragraph",
        text: "Gifted beauty products are the classic grey area. If there's any expectation of content, the post must be clearly advertising; Ad Standards has found the word 'gift' alone insufficient. Ask creators to start captions or videos with 'Ad' or 'Gifted ad' and use the platform's partnership label. The broader rules are in Australian influencer advertising rules.",
        links: [
          { text: "Ad Standards has found the word 'gift' alone insufficient", href: AU_SRC.adStandardsGift.url },
          { text: "Australian influencer advertising rules", href: "/blog/influencer-advertising-rules-australia" },
        ],
      },
      { type: "heading", text: "Measuring sales across channels", id: "measurement" },
      {
        type: "table",
        headers: ["Where it sells", "How to track"],
        rows: [
          ["Your online store", "Creator links and codes; net orders after returns"],
          ["Pharmacy and beauty retailers", "Sell-out data for featured products vs baseline; retailer-specific offers"],
          ["Marketplaces", "Marketplace codes or tracked links where available"],
          ["Overall", "Branded search and brand lift where budgets allow"],
        ],
      },
      {
        type: "paragraph",
        text: "Online measurement is covered in influencer marketing for Australian e-commerce brands.",
        links: [{ text: "influencer marketing for Australian e-commerce brands", href: "/blog/ecommerce-influencer-marketing-australia" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Paid creators describing how a sunscreen worked for them",
          "Therapeutic claims for a cosmetic",
          "Filters on skin in demonstrations",
          "'Gifted' as the only disclosure",
          "Before-and-after images taken in different conditions",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Australian beauty marketing rewards honesty and punishes overclaiming. Classify each product, respect the TGA's testimonial rule for sunscreens and therapeutic goods, substantiate every cosmetic claim, demonstrate without filters and disclose clearly. That protects the brand and makes the content more convincing.",
      },
    ],
    faqs: [
      {
        question: "Can influencers promote sunscreen in Australia?",
        answer:
          "Yes, but sunscreens are therapeutic goods, and since 2022 paid or gifted creators can't give personal-experience testimonials for them. They can show the product and state approved information.",
      },
      {
        question: "What beauty claims can influencers make in Australia?",
        answer:
          "Only claims the brand can substantiate. Avoid therapeutic language for cosmetics, be careful with terms like 'natural' and 'clean', and give creators a written approved-claims list.",
      },
      {
        question: "Is 'gifted' enough disclosure for beauty products?",
        answer:
          "Often not. Ad Standards has found 'gift' insufficient. Use a clear label such as 'Ad' or 'Gifted ad' at the start, plus the platform's partnership tool.",
      },
    ],
  },
];
