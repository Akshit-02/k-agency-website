import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_CLUSTER_PUBLISHED, CREATOR_FACTS_REVIEWED, SOURCES } from "@/content/creator-resources/shared";

/** Pillar page and monetization guide. */
export const growYourIncomePosts: BlogPost[] = [
  {
    slug: "creator-business-kit",
    category: "Creator Resources",
    title: "Creator Business Kit: 10 Resources Every Professional Creator Should Have",
    seoTitle: "Creator Business Kit: 10 Resources for Professional Creators",
    excerpt:
      "The ten documents and systems that separate creators who get repeat brand work from those who don't, from media kit and rate card to contracts, invoices and analytics, with a guide for each.",
    metaDescription:
      "The creator business kit: media kit, rate card, portfolio, brand pitch, collaboration emails, contract knowledge, usage rights, negotiation, invoicing and analytics, each explained with a link to a full guide.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "10 min read",
    tags: ["creator business", "creator resources", "media kit", "rate card", "influencer contract", "creator invoice"],
    related: ["creator-media-kit", "influencer-rate-card-india", "creator-monetization-india"],
    body: [
      {
        type: "paragraph",
        text: "Brands don't only choose creators for their content. They choose creators who are easy to work with: who reply clearly, quote sensibly, deliver what was agreed, invoice correctly and report honestly. Most of that comes down to having a small set of resources ready before a brand asks.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A professional creator business kit has ten parts: a media kit, a rate card, a portfolio, a brand pitch, collaboration email templates, working knowledge of influencer contracts, a clear position on usage rights, a negotiation approach, an invoice template and process, and an honest analytics and reporting setup. Together they cover the whole brand deal journey, from getting ready and finding brands to negotiating, delivering, getting paid and measuring results.",
      },
      {
        type: "image",
        src: "/blog/creator-resources/creator-business-journey.svg",
        alt: "The creator brand deal journey in nine stages: get ready, find brands, pitch, negotiate, contract, deliver, invoice, measure, monetize",
        caption: "Each stage of a brand deal has a resource that makes it easier. This kit covers all of them.",
        width: 1200,
        height: 675,
      },
      { type: "heading", text: "1. Media kit", id: "media-kit" },
      {
        type: "paragraph",
        text: "A two to five page summary of who you are, who your audience is, how your content performs and how to work with you. It's usually the first thing a brand asks for. Keep numbers dated and taken from native insights. Full guide: creator media kit.",
        links: [{ text: "creator media kit", href: "/blog/creator-media-kit" }],
      },
      { type: "heading", text: "2. Rate card", id: "rate-card" },
      {
        type: "paragraph",
        text: "A price list for each format you offer, with add-ons like usage rights, exclusivity, raw footage and extra revisions priced separately. Full guides: influencer rate card for the document, and how much creators should charge for the pricing logic.",
        links: [
          { text: "influencer rate card", href: "/blog/influencer-rate-card-india" },
          { text: "how much creators should charge", href: "/blog/how-much-should-creators-charge-india" },
        ],
      },
      { type: "heading", text: "3. Portfolio", id: "portfolio" },
      {
        type: "paragraph",
        text: "Your curated best work with context and results, including short case studies. It's what a brand opens when it's choosing between you and two others. Full guide: creator portfolio. UGC creators should also read how to build a UGC creator portfolio.",
        links: [
          { text: "creator portfolio", href: "/blog/creator-portfolio" },
          { text: "how to build a UGC creator portfolio", href: "/blog/ugc-creator-portfolio" },
        ],
      },
      { type: "heading", text: "4. Brand pitch", id: "brand-pitch" },
      {
        type: "paragraph",
        text: "A repeatable way to research brands, find the right contact and propose a specific idea. Full guides: how to pitch brands as a creator, how to find brands to collaborate with, and, if you're just starting, how to get your first brand collaboration.",
        links: [
          { text: "how to pitch brands as a creator", href: "/blog/how-to-pitch-brands-as-a-creator" },
          { text: "how to find brands to collaborate with", href: "/blog/how-to-find-brands-to-collaborate-with" },
          { text: "how to get your first brand collaboration", href: "/blog/first-brand-collaboration-india" },
        ],
      },
      { type: "heading", text: "5. Collaboration email templates", id: "email-templates" },
      {
        type: "paragraph",
        text: "Saved drafts for the messages you send again and again: cold and warm pitches, follow-ups, negotiation replies and polite declines. Personalise the first line every time. Full guide: 15 brand collaboration email templates.",
        links: [{ text: "15 brand collaboration email templates", href: "/blog/brand-collaboration-email-templates" }],
      },
      { type: "heading", text: "6. Contract knowledge", id: "contract" },
      {
        type: "paragraph",
        text: "You don't need to be a lawyer, but you should understand what each clause in a collaboration agreement means for you, and know when to get professional review. Full guides: influencer contract guide for creators, creator deliverables and creator payment terms.",
        links: [
          { text: "influencer contract guide for creators", href: "/blog/influencer-contract-guide-for-creators" },
          { text: "creator deliverables", href: "/blog/creator-deliverables" },
          { text: "creator payment terms", href: "/blog/creator-payment-terms" },
        ],
      },
      { type: "heading", text: "7. Usage rights position", id: "usage-rights" },
      {
        type: "paragraph",
        text: "A clear, consistent answer to \"how can the brand use this content?\": organic vs paid, duration, territory, media, editing and whitelisting, each priced where it adds value. Full guides: creator usage rights, creator exclusivity, creator content licensing and creator whitelisting.",
        links: [
          { text: "creator usage rights", href: "/blog/creator-usage-rights" },
          { text: "creator exclusivity", href: "/blog/creator-exclusivity" },
          { text: "creator content licensing", href: "/blog/creator-content-licensing" },
          { text: "creator whitelisting", href: "/blog/creator-whitelisting" },
        ],
      },
      { type: "heading", text: "8. Negotiation approach", id: "negotiation" },
      {
        type: "paragraph",
        text: "A calm, honest method: ask before quoting, adjust scope rather than just price, get payment terms in writing, and know when to walk away. Full guide: how to negotiate brand deals as a creator.",
        links: [{ text: "how to negotiate brand deals as a creator", href: "/blog/how-to-negotiate-brand-deals-as-a-creator" }],
      },
      { type: "heading", text: "9. Invoice template and process", id: "invoice" },
      {
        type: "paragraph",
        text: "A consistent invoice with everything a finance team needs, plus a simple record of what's been billed and paid, and an understanding of how GST and TDS affect you. Full guides: how to invoice brands as a creator in India, TDS for creators, GST for creators, and the creator workflow with its downloadable campaign tracker.",
        links: [
          { text: "how to invoice brands as a creator in India", href: "/blog/how-to-invoice-brands-as-a-creator-india" },
          { text: "TDS for creators", href: "/blog/tds-for-influencers-india" },
          { text: "GST for creators", href: "/blog/gst-for-influencers-india" },
          { text: "creator workflow", href: "/blog/creator-workflow" },
        ],
      },
      { type: "heading", text: "10. Analytics and reporting", id: "analytics" },
      {
        type: "paragraph",
        text: "Knowing which metrics to share, where they come from, and how to present them honestly in pitches and post-campaign reports. Full guides: creator analytics for brand deals, how to calculate engagement rate, engagement rate vs reach and creator case studies.",
        links: [
          { text: "creator analytics for brand deals", href: "/blog/creator-analytics-for-brand-deals" },
          { text: "how to calculate engagement rate", href: "/blog/influencer-engagement-rate" },
          { text: "engagement rate vs reach", href: "/blog/engagement-rate-vs-reach-for-creators" },
          { text: "creator case studies", href: "/blog/creator-case-study" },
        ],
      },
      { type: "heading", text: "Two habits that protect everything else", id: "habits" },
      {
        type: "list",
        items: [
          "Check every deal before accepting it. Use the creator brand deal checklist.",
          "Verify every unexpected offer. Read how to spot fake brand collaboration offers.",
        ],
      },
      {
        type: "paragraph",
        text: "Both are short reads: the creator brand deal checklist and how to spot fake brand collaboration offers.",
        links: [
          { text: "creator brand deal checklist", href: "/blog/creator-brand-deal-checklist" },
          { text: "how to spot fake brand collaboration offers", href: "/blog/creator-scams-fake-brand-collaborations" },
        ],
      },
      { type: "heading", text: "Your kit at a glance", id: "at-a-glance" },
      {
        type: "table",
        headers: ["Resource", "Used when", "Update"],
        rows: [
          ["Media kit", "First pitch or reply", "Quarterly, or after big changes"],
          ["Rate card", "After understanding a brief", "Quarterly; add a validity date"],
          ["Portfolio", "When a brand is seriously evaluating you", "After each strong campaign"],
          ["Pitch process", "Weekly prospecting", "Review what gets replies monthly"],
          ["Email templates", "Every brand conversation", "When you find better wording"],
          ["Contract knowledge", "Before signing", "When you meet a new clause"],
          ["Usage rights position", "Quoting and contracting", "As your pricing evolves"],
          ["Negotiation approach", "Every offer", "After each deal"],
          ["Invoice template", "On signing and posting", "When your tax status changes"],
          ["Analytics and reports", "Pitches and post-campaign", "Every campaign"],
        ],
      },
      {
        type: "paragraph",
        text: "The agreements behind the kit, from management to freelancer contracts, are mapped in creator contracts.",
        links: [
          { text: "creator contracts", href: "/blog/creator-contracts" },
        ],
      },
      { type: "heading", text: "Beyond brand deals", id: "beyond-brand-deals" },
      {
        type: "paragraph",
        text: "Brand deals are one income stream. Creators with sustainable businesses usually combine them with affiliate income, platform revenue, memberships, digital products and services. Read creator monetization in India for twelve ways to diversify, and the difference between brand-funded, audience-funded, commerce and creator-owned income.",
        links: [{ text: "creator monetization in India", href: "/blog/creator-monetization-india" }],
      },
      {
        type: "paragraph",
        text: "For how these resources come together in a single deal, from enquiry to repeat booking, read the creator brand deals guide. Everything in this kit, organised by stage, is also on the Creator Resources hub.",
        links: [
          { text: "creator brand deals guide", href: "/blog/creator-brand-deals" },
          { text: "Creator Resources hub", href: "/creator-resources" },
        ],
      },
      {
        type: "paragraph",
        text: "The kit covers the documents. For the strategy behind them, write a one-page creator business plan, and give everything a permanent home with a creator website.",
        links: [{ text: "creator business plan", href: "/blog/creator-business-plan" }, { text: "creator website", href: "/blog/how-to-build-a-creator-website" }],
      },
      {
        type: "paragraph",
        text: "Once the kit is in place, the next decisions are strategic: see creator business model, creator pricing strategy and creator manager vs agency.",
        links: [
          { text: "creator business model", href: "/blog/creator-business-model" },
          { text: "creator pricing strategy", href: "/blog/creator-pricing-strategy" },
          { text: "creator manager vs agency", href: "/blog/creator-manager-vs-agency" },
        ],
      },
    ],
    faqs: [
      {
        question: "What documents does a professional creator need?",
        answer:
          "At minimum a media kit, a rate card and a portfolio, plus saved pitch and email templates, an invoice template, and a basic understanding of contracts, usage rights and analytics reporting.",
      },
      {
        question: "What is the difference between a media kit and a rate card?",
        answer: "A media kit summarises who you are, your audience and performance. A rate card lists your prices and what each includes. Many creators keep them separate so pricing can change without redoing the media kit.",
      },
      {
        question: "Do small creators need a creator business kit?",
        answer:
          "Yes, in a simpler form. A short media kit, a portfolio page, a few pitch templates and an invoice template make even small creators easier for brands to work with.",
      },
    ],
  },
  {
    slug: "creator-monetization-india",
    category: "Creator Resources",
    title: "Creator Monetization in India: 20 Revenue Streams and How to Build Your Strategy",
    seoTitle: "Creator Monetization in India: 12 Ways Beyond Brand Deals",
    excerpt:
      "Brand deals are one income stream. Here are twelve more, grouped by who actually pays you: brands, your audience, commerce partners, or your own business, with current platform details and caveats.",
    metaDescription:
      "Creator monetization in India: 12 income streams beyond brand deals, including UGC, affiliate marketing, YouTube Shopping, memberships, subscriptions, digital products, courses, consulting, events, licensing and merchandise.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["creator monetization India", "creator revenue streams", "creator monetization strategy", "how creators make money", "YouTube Shopping", "affiliate marketing", "Instagram subscriptions", "digital products"],
    related: ["creator-business-kit", "how-much-should-creators-charge-india", "creator-usage-rights"],
    body: [
      {
        type: "paragraph",
        text: "Creators who rely on one income source are exposed to one algorithm change, one quiet quarter for brand budgets, or one platform policy update. Diversifying doesn't mean doing everything. It means adding one or two streams that fit your audience and skills, so no single source can sink you.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Beyond sponsored posts, Indian creators can earn from UGC and content services, content licensing, platform ad revenue sharing, affiliate marketing, YouTube Shopping, memberships, subscriptions, events and ticketed experiences, digital products, courses and workshops, consulting and services, and merchandise or creator-owned brands. These fall into four groups: brand-funded income, audience-funded income, commerce and affiliate income, and creator-owned business income. Platform features and eligibility change often, so check each platform's help centre for current requirements.",
      },
      { type: "heading", text: "The four types of creator income", id: "four-types" },
      {
        type: "table",
        headers: ["Income type", "Who pays", "Examples", "Depends on"],
        rows: [
          ["Brand-funded", "Brands, directly or via platform ad programmes", "Sponsored content, UGC, content licensing, YouTube ad revenue share", "Brand budgets and advertiser demand"],
          ["Audience-funded", "Your audience, directly", "Memberships, subscriptions, tips, paid communities, ticketed events", "Trust and depth of relationship with your audience"],
          ["Commerce / affiliate", "Retailers and brands, per sale", "Affiliate links, codes, YouTube Shopping", "Your audience's buying intent and your recommendations"],
          ["Creator-owned business", "Customers of your own products", "Digital products, courses, consulting, merchandise, your own brand", "Your ability to build and run a product"],
        ],
      },
      {
        type: "paragraph",
        text: "The distinction matters. Brand-funded income rises and falls with marketing budgets. Audience-funded income depends on how much your audience values you. Commerce income depends on whether people buy what you recommend. Creator-owned income is the most work but the most yours.",
      },
      { type: "heading", text: "The baseline: sponsored content", id: "sponsored-content" },
      {
        type: "paragraph",
        text: "Paid brand collaborations remain the core income for many Indian creators. If you're still building that side, start with the creator business kit, which links to guides on pitching, pricing, contracts and invoicing.",
        links: [{ text: "creator business kit", href: "/blog/creator-business-kit" }],
      },
      { type: "heading", text: "Brand-funded income", id: "brand-funded" },
      { type: "subheading", text: "1. UGC and content services" },
      {
        type: "paragraph",
        text: "Making videos and photos for brands to use on their own channels and ads, without posting on yours. Because brands pay for production and usage rather than your audience, UGC can work at any follower count. The key is a strong portfolio and clear usage terms. See how to build a UGC creator portfolio and, for how brands think about it, UGC marketing for brands.",
        links: [
          { text: "how to build a UGC creator portfolio", href: "/blog/ugc-creator-portfolio" },
          { text: "UGC marketing for brands", href: "/blog/what-is-ugc-marketing" },
        ],
      },
      { type: "subheading", text: "2. Content licensing" },
      {
        type: "paragraph",
        text: "Licensing existing content, such as a viral clip, a tutorial or footage, to brands, media companies or other publishers for a fee. It includes extending usage periods on past brand content. Define purpose, duration, territory and editing in writing, as covered in creator content licensing. For getting more from each brand collaboration, see how to turn brand content into multiple revenue streams.",
        links: [
          { text: "creator content licensing", href: "/blog/creator-content-licensing" },
          { text: "how to turn brand content into multiple revenue streams", href: "/blog/creator-revenue-streams-from-brand-content" },
        ],
      },
      { type: "subheading", text: "3. Platform ad revenue sharing" },
      {
        type: "paragraph",
        text: "YouTube shares ad revenue with creators in the YouTube Partner Program. The standard threshold for ad revenue is 1,000 subscribers plus either 4,000 valid public watch hours in 12 months or 10 million valid public Shorts views in 90 days. YouTube also runs a lower-threshold tier in many countries that unlocks fan funding and shopping features before ad revenue. YouTube has announced updates to the programme's terms from 1 February 2027, so check the help centre for current requirements. Other platforms run their own programmes, such as X's creator revenue sharing, with different rules and availability.",
        links: [
          { text: "check the help centre", href: SOURCES.youtubePartnerProgram },
          { text: "X's creator revenue sharing", href: "/blog/x-creator-revenue-sharing" },
        ],
      },
      {
        type: "paragraph",
        text: "Every YouTube income stream, from Shorts to Gifts, is mapped in YouTube creator monetization.",
        links: [{ text: "YouTube creator monetization", href: "/blog/youtube-creator-monetization" }],
      },
      { type: "heading", text: "Commerce and affiliate income", id: "commerce-affiliate" },
      { type: "subheading", text: "4. Affiliate marketing" },
      {
        type: "paragraph",
        text: "Earning a commission when your audience buys through your link or code. Major Indian e-commerce platforms and many D2C brands run affiliate programmes. Affiliate works best when you recommend products your audience already asks about, in formats built for decisions: comparisons, \"what I use\" lists, how-tos. Affiliate content still needs disclosure; ASCI lists \"Affiliate\" among acceptable labels.",
      },
      {
        type: "paragraph",
        text: "Brands see affiliate differently from paid collaborations. The full creator affiliate marketing guide covers commissions, tracking and hybrid deals, and the brand-side comparison of influencer marketing vs affiliate marketing and Instagram influencer affiliate marketing explain how brands structure these programmes.",
        links: [
          { text: "creator affiliate marketing guide", href: "/blog/creator-affiliate-marketing-india" },
          { text: "influencer marketing vs affiliate marketing", href: "/blog/influencer-marketing-vs-affiliate-marketing" },
          { text: "Instagram influencer affiliate marketing", href: "/blog/instagram-influencer-affiliate-marketing" },
        ],
      },
      { type: "subheading", text: "5. YouTube Shopping" },
      {
        type: "paragraph",
        text: "YouTube Shopping lets eligible creators tag products in videos, Shorts and live streams. Through the YouTube Shopping affiliate programme, creators in supported countries, including India, can earn commission on products from participating retailers. According to YouTube's help centre, you need to be in the YouTube Partner Program and meet its subscriber threshold, and music channels, Official Artist Channels and channels set as Made for Kids aren't eligible. In India, partners include Flipkart, Myntra, Nykaa, Purplle, Shopsy and Tira, with AJIO, Meesho, Snapdeal and Tata CLiQ announced in 2026 and Amazon product tagging announced for India in September 2026. See YouTube Shopping for Indian creators for the full guide.",
        links: [
          { text: "YouTube's help centre", href: SOURCES.youtubeShoppingAffiliate },
          { text: "YouTube Shopping for Indian creators", href: "/blog/youtube-shopping-india-creators" },
        ],
      },
      { type: "heading", text: "Audience-funded income", id: "audience-funded" },
      { type: "subheading", text: "6. Memberships" },
      {
        type: "paragraph",
        text: "Monthly payments from your most committed viewers in exchange for perks: badges, members-only posts, early access, live sessions. YouTube channel memberships are the most familiar example; eligibility depends on YouTube Partner Program status and country. Memberships work when you can deliver a consistent perk without burning out. Start small, with one or two tiers.",
      },
      {
        type: "paragraph",
        text: "Tier design and churn are covered in creator memberships, and YouTube's fan funding features in YouTube Gifts, memberships and Super Thanks.",
        links: [{ text: "creator memberships", href: "/blog/creator-memberships" }, { text: "YouTube Gifts, memberships and Super Thanks", href: "/blog/youtube-gifts-memberships-super-thanks" }],
      },
      { type: "subheading", text: "7. Subscriptions" },
      {
        type: "paragraph",
        text: "Instagram Subscriptions let eligible creators offer paid subscriber-only content such as Stories, Lives, posts and group chats. Instagram lists India among the countries where subscriptions are available, subject to eligibility requirements like age, account type and policy compliance, and access can roll out gradually. X offers creator subscriptions too. Check each platform's current eligibility before building a plan around it.",
        links: [
          { text: "Instagram Subscriptions", href: SOURCES.instagramSubscriptions },
          { text: "X offers creator subscriptions", href: "/blog/x-creator-subscriptions" },
        ],
      },
      { type: "subheading", text: "8. Events and ticketed experiences" },
      {
        type: "paragraph",
        text: "Workshops, meetups, paid live sessions, walking tours, tastings and live shows. Events can be audience-funded (ticket sales) and brand-funded (event sponsors) at once. Start with a small, low-risk event before booking a large venue, and be clear about refunds.",
      },
      {
        type: "paragraph",
        text: "If the value you offer is ongoing interaction rather than a one-off event, see how to build a paid community.",
        links: [{ text: "how to build a paid community", href: "/blog/creator-paid-community-india" }],
      },
      { type: "heading", text: "Creator-owned business income", id: "creator-owned" },
      { type: "subheading", text: "9. Digital products" },
      {
        type: "paragraph",
        text: "Templates, presets, guides, e-books, planners, recipe books, spreadsheets. Low marginal cost once made, and they turn the questions your audience keeps asking into something they can buy. Price and pay GST correctly once you cross registration thresholds, and use a reliable payment gateway.",
      },
      {
        type: "paragraph",
        text: "For the full process, see how to sell digital products as a creator in India, and for inspiration, 30 digital product ideas for creators.",
        links: [{ text: "how to sell digital products as a creator in India", href: "/blog/sell-digital-products-as-a-creator-india" }, { text: "30 digital product ideas for creators", href: "/blog/digital-product-ideas-for-creators" }],
      },
      { type: "subheading", text: "10. Courses and workshops" },
      {
        type: "paragraph",
        text: "Structured teaching, live or recorded, cohort-based or self-paced. Works best in skills niches: editing, finance basics, fitness, cooking, languages, career skills. Be careful with outcome promises, especially in finance and health, where ASCI expects appropriate qualifications for specialised advice, and avoid income claims you can't back up.",
      },
      { type: "subheading", text: "11. Consulting and services" },
      {
        type: "paragraph",
        text: "Selling your expertise directly: social media consulting for small businesses, editing services, photography, scriptwriting, speaking, or coaching other creators. Often the fastest way to earn from a small but expert audience, especially on LinkedIn and in B2B niches.",
      },
      { type: "subheading", text: "12. Merchandise and creator-owned brands" },
      {
        type: "paragraph",
        text: "From print-on-demand merchandise to full product brands in beauty, food, fashion or accessories. Merchandise works best when your community has a shared identity; a product brand is a separate business with inventory, quality control, compliance and customer service. Many creators test demand with a small drop before committing.",
      },
      {
        type: "paragraph",
        text: "Commerce income, from affiliate links to merchandise and live selling, is covered in creator commerce in India.",
        links: [{ text: "creator commerce in India", href: "/blog/creator-commerce-india" }],
      },
      { type: "heading", text: "Choosing the right streams", id: "choosing" },
      {
        type: "table",
        headers: ["If your audience…", "Consider"],
        rows: [
          ["Asks \"where did you buy that?\"", "Affiliate, YouTube Shopping"],
          ["Asks \"how do you do that?\"", "Digital products, courses, workshops"],
          ["Is loyal and wants more of you", "Memberships, subscriptions, events"],
          ["Is small but professional", "Consulting, services, speaking"],
          ["Shares a strong identity", "Merchandise, community events"],
          ["Doesn't matter — you're good at making content", "UGC, licensing"],
        ],
      },
      { type: "heading", text: "A realistic diversification plan", id: "plan" },
      {
        type: "list",
        items: [
          "Keep your main stream healthy; don't neglect brand deals while experimenting.",
          "Add one new stream at a time and give it three to six months.",
          "Pick streams that reuse work you already do (a tutorial Reel becomes a paid template).",
          "Track income by stream so you know what's actually working.",
          "Keep tax and compliance in mind: income from every stream is taxable, and product sales and services may bring GST obligations. Speak to a tax professional.",
          "Disclose every material connection: sponsorships, gifts and affiliate links alike.",
        ],
      },
      {
        type: "paragraph",
        text: "No stream is guaranteed. Platform programmes change, affiliate commissions get revised, and audiences shift. Diversification is about resilience, not a promise of income.",
      },
      {
        type: "paragraph",
        text: "For platform-specific detail, see Instagram creator monetization and YouTube Live monetization. To decide which of these income types to build first, see creator business model.",
        links: [
          { text: "Instagram creator monetization", href: "/blog/instagram-creator-monetization" },
          { text: "YouTube Live monetization", href: "/blog/youtube-live-monetization" },
          { text: "creator business model", href: "/blog/creator-business-model" },
        ],
      },
      { type: "heading", text: "20 creator revenue streams at a glance", id: "twenty-streams" },
      {
        type: "table",
        headers: ["Group", "Revenue stream", "Guide"],
        rows: [
          ["Brand-funded", "Sponsored content", "Creator brand deals"],
          ["Brand-funded", "Long-term partnerships and retainers", "Creator retainer deals"],
          ["Brand-funded", "UGC for brands' channels", "UGC creator portfolio"],
          ["Brand-funded", "Usage rights and whitelisting", "Creator whitelisting"],
          ["Brand-funded", "Content licensing", "Creator content licensing"],
          ["Platform", "YouTube ad and Shorts revenue", "YouTube creator monetization"],
          ["Platform", "Fan funding (Gifts, Supers, badges)", "YouTube Gifts, memberships and Super Thanks"],
          ["Platform", "Platform subscriptions and memberships", "Creator memberships"],
          ["Commerce", "Affiliate marketing", "Creator affiliate marketing in India"],
          ["Commerce", "YouTube Shopping and product tags", "YouTube Shopping for Indian creators"],
          ["Commerce", "Storefront and curated recommendations", "Creator storefront"],
          ["Commerce", "Merchandise and co-created products", "Creator commerce in India"],
          ["Products", "Templates, guides and toolkits", "Templates, guides and toolkits"],
          ["Products", "Ebooks and printables", "Creator ebooks"],
          ["Products", "Online courses", "Creator course business"],
          ["Products", "Paid workshops and webinars", "Creator workshops"],
          ["Audience", "Paid communities", "Paid communities"],
          ["Audience", "Paid newsletters", "Creator newsletter monetization"],
          ["Services", "Consulting and coaching", "Creator services"],
          ["Services", "Speaking and team training", "Creator services"],
        ],
      },
      {
        type: "paragraph",
        text: "Guides for the fastest-growing groups: creator services, creator course business, templates, guides and toolkits, and creator memberships.",
        links: [
          { text: "creator services", href: "/blog/creator-services" },
          { text: "creator course business", href: "/blog/creator-course-business" },
          { text: "templates, guides and toolkits", href: "/blog/sell-templates-guides-creators" },
          { text: "creator memberships", href: "/blog/creator-memberships" },
        ],
      },
      { type: "heading", text: "A monetization strategy: which streams, in what order?", id: "strategy" },
      {
        type: "paragraph",
        text: "Twenty options doesn't mean twenty streams. A monetization strategy picks a primary stream that fits your audience's intent, adds one or two supporting streams that use different payers or platforms, and sequences them by effort and evidence.",
      },
      {
        type: "template",
        label: "Sequencing streams (illustrative, not a promise of income)",
        text: "1. Primary: the stream your audience already signals (brand deals for product niches; services for expertise niches)\n2. Owned audience: email list or community to reduce platform dependence\n3. Low-effort addition: affiliate links or a small digital product that fits the content\n4. Recurring: membership or retainer once trust and demand are proven\n5. Scaled education: course or cohort built from what workshops and clients taught you",
      },
      {
        type: "paragraph",
        text: "Choosing the primary model is covered in creator business model, managing dependency in creator revenue diversification and planning income in creator revenue forecasting.",
        links: [
          { text: "creator business model", href: "/blog/creator-business-model" },
          { text: "creator revenue diversification", href: "/blog/creator-revenue-diversification" },
          { text: "creator revenue forecasting", href: "/blog/creator-revenue-forecasting" },
        ],
      },
    ],
    faqs: [
      {
        question: "How do creators make money in India besides brand deals?",
        answer:
          "Through UGC and content services, content licensing, platform ad revenue sharing, affiliate marketing, YouTube Shopping, memberships, subscriptions, events, digital products, courses, consulting and merchandise or their own brands.",
      },
      {
        question: "Is YouTube Shopping affiliate available in India?",
        answer:
          "Yes, YouTube's help centre lists India among eligible countries. Creators need to be in the YouTube Partner Program and meet its subscriber threshold; music and Made for Kids channels aren't eligible. Available retailers can change, so check YouTube Studio.",
      },
      {
        question: "Are Instagram Subscriptions available in India?",
        answer:
          "Instagram lists India among the countries where Subscriptions are available, subject to eligibility requirements and gradual rollout. Check the Instagram Help Centre and your professional dashboard for current access.",
      },
      {
        question: "What's the difference between brand-funded and audience-funded income?",
        answer:
          "Brand-funded income comes from brands, such as sponsorships, UGC and ad revenue share. Audience-funded income comes directly from your audience, such as memberships, subscriptions and ticketed events.",
      },
    ],
  },
];
