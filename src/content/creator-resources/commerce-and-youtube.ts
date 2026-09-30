import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_CLUSTER_PUBLISHED, CREATOR_FACTS_REVIEWED, SOURCES } from "@/content/creator-resources/shared";

/** Creator commerce and YouTube monetization. Platform facts checked against official sources, September 2026. */
export const commerceAndYouTubePosts: BlogPost[] = [
  {
    slug: "creator-storefront",
    category: "Creator Resources",
    title: "Creator Storefront: How to Build a Shop for Your Products, Recommendations and Services",
    seoTitle: "Creator Storefront: Build a Shop for Products and Picks",
    excerpt:
      "A storefront puts your products, affiliate recommendations and services in one shoppable place. Here's what to include, how to organise it, which setup to choose, and how to keep it trustworthy.",
    metaDescription:
      "How to build a creator storefront: what to sell, organising products, recommendations and services, storefront options, payments and checkout in India, disclosure, analytics and mistakes to avoid.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "10 min read",
    tags: ["creator storefront", "creator shop", "influencer storefront", "shop recommendations", "sell online creators"],
    related: ["creator-commerce-india", "link-in-bio-for-creators", "sell-digital-products-as-a-creator-india"],
    body: [
      {
        type: "paragraph",
        text: "When your audience asks \"where can I buy that?\" or \"do you sell your planner?\", a storefront is the answer. It's the shelf where everything you sell or recommend lives, organised so people can find it quickly and trust what they see.",
      },
      {
        type: "paragraph",
        text: "This guide covers the storefront itself. For the strategy of turning content into sales, see creator commerce in India; for the quick bio menu, see link in bio for creators.",
        links: [
          { text: "creator commerce in India", href: "/blog/creator-commerce-india" },
          { text: "link in bio for creators", href: "/blog/link-in-bio-for-creators" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator storefront is a shoppable page or small shop that brings together your own products (digital or physical), your affiliate recommendations and your bookable services. Build it on a storefront or link-in-bio tool, a creator commerce platform, or your own website, organise it by use case rather than by retailer, make checkout work on mobile with UPI, disclose affiliate links clearly, keep products current, and track which items get clicks and sales.",
      },
      { type: "heading", text: "What goes in a storefront", id: "what-goes-in" },
      {
        type: "table",
        headers: ["Section", "Examples", "How you earn"],
        rows: [
          ["Your products", "Templates, courses, presets, merchandise", "Direct sales"],
          ["Recommendations", "Products you use, grouped into collections", "Affiliate commission"],
          ["Services", "Audits, consultations, workshops", "Booking fees"],
          ["Memberships", "Community, paid newsletter, channel memberships", "Recurring payments"],
          ["Free resources", "Lead magnet, starter guide", "Email subscribers (future revenue)"],
        ],
      },
      { type: "heading", text: "Organise by use case, not by retailer", id: "organise" },
      {
        type: "list",
        items: [
          "Collections like \"My monsoon skincare routine\", \"Budget home office setup\", \"Travel essentials under ₹2,000\".",
          "Put your own products first; they earn more per sale and build your brand.",
          "Keep collections short (five to fifteen items) and explain why each item is there.",
          "Add a \"new this month\" collection so returning visitors see something fresh.",
        ],
      },
      { type: "heading", text: "Storefront options", id: "options" },
      {
        type: "table",
        headers: ["Option", "Good for", "Check"],
        rows: [
          ["Link-in-bio tools with shop blocks", "Quick start from social profiles", "Fees, checkout experience, domain"],
          ["Creator commerce platforms", "Selling digital products and services", "Payout timing, Indian payment methods"],
          ["Affiliate storefront features from retailers or networks", "Recommendation-heavy creators", "Programme rules, cookie windows"],
          ["Platform shopping features (e.g. YouTube Shopping)", "Tagging products inside content", "Eligibility and participating retailers"],
          ["Your own website shop", "Control, brand, SEO", "Setup effort, payment gateway"],
        ],
      },
      {
        type: "paragraph",
        text: "Many creators use two layers: platform tools inside content (such as YouTube Shopping tags) and one storefront on their own domain or bio link that holds everything. See YouTube Shopping for Indian creators.",
        links: [{ text: "YouTube Shopping for Indian creators", href: "/blog/youtube-shopping-india-creators" }],
      },
      { type: "heading", text: "Checkout and payments in India", id: "payments" },
      {
        type: "list",
        items: [
          "UPI is essential; test the full purchase on a phone.",
          "Show prices in INR, inclusive or exclusive of taxes, clearly.",
          "State delivery (instant download, email, shipping time) and refund policies before purchase.",
          "For physical merchandise, plan fulfilment, shipping and returns; cash-on-delivery expectations are common in India.",
          "Keep records of sales, fees and refunds for tax purposes.",
        ],
      },
      { type: "heading", text: "Trust and disclosure", id: "trust" },
      {
        type: "list",
        items: [
          "Label affiliate collections clearly: \"I may earn a commission from links on this page.\"",
          "Only include products you've actually used, and say how you use them.",
          "Remove discontinued or out-of-stock items.",
          "Don't mix sponsored placements into \"my favourites\" without saying so.",
        ],
      },
      {
        type: "paragraph",
        text: "Disclosure rules are covered in creator affiliate marketing.",
        links: [{ text: "creator affiliate marketing", href: "/blog/creator-affiliate-marketing-india" }],
      },
      { type: "heading", text: "Track what sells", id: "tracking" },
      {
        type: "list",
        items: [
          "Clicks per item and per collection.",
          "Conversion and revenue for your own products.",
          "Confirmed affiliate commissions after returns.",
          "Which content drove visits (use UTM links from different platforms).",
        ],
      },
      {
        type: "paragraph",
        text: "Add these to your creator analytics dashboard.",
        links: [{ text: "creator analytics dashboard", href: "/blog/creator-analytics-dashboard" }],
      },
      { type: "heading", text: "Mistakes to avoid", id: "mistakes" },
      {
        type: "list",
        items: [
          "Hundreds of unsorted affiliate links.",
          "Your own products buried below retailer links.",
          "A checkout that fails on mobile.",
          "Outdated prices, dead links and discontinued products.",
          "Undisclosed affiliate or sponsored placements.",
        ],
      },
      {
        type: "paragraph",
        text: "Seasonal gift guides make a natural storefront section before festivals and weddings; see creator gift guides.",
        links: [{ text: "creator gift guides", href: "/blog/creator-gift-guides" }],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Keep your storefront small, organised and honest. Lead with your own products, group recommendations by real use cases, make checkout effortless on mobile, and review it monthly. If you don't have your own product yet, see 30 digital product ideas for creators.",
        links: [{ text: "30 digital product ideas for creators", href: "/blog/digital-product-ideas-for-creators" }],
      },
    ],
    faqs: [
      {
        question: "What is a creator storefront?",
        answer:
          "A shoppable page or small shop that brings together a creator's own products, affiliate recommendations and bookable services in one place.",
      },
      {
        question: "Is a storefront the same as a link-in-bio page?",
        answer:
          "Not quite. A link-in-bio page routes visitors to several destinations; a storefront is focused on products and recommendations. Many creators link to their storefront from their bio page.",
      },
      {
        question: "Do I need to disclose affiliate links in my storefront?",
        answer: "Yes. Label affiliate collections clearly so visitors know you may earn a commission.",
      },
    ],
  },
  {
    slug: "creator-commerce-india",
    category: "Creator Resources",
    title: "Creator Commerce in India: Complete Guide to Turning Content Into Sales",
    seoTitle: "Creator Commerce in India: Turning Content Into Sales",
    excerpt:
      "Creator commerce is income earned when your content leads directly to a purchase. Here's how the main models work in India, how to build a content-to-sale funnel, and how to choose where to start.",
    metaDescription:
      "Creator commerce in India: affiliate marketing, platform shopping, own digital and physical products, merchandise, co-created brand products and live commerce, with a content-to-sale funnel and commerce stack.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["creator commerce", "creator commerce India", "social commerce", "shoppable content", "live commerce"],
    related: ["creator-affiliate-marketing-india", "youtube-shopping-india-creators", "creator-storefront"],
    body: [
      {
        type: "paragraph",
        text: "Creator commerce is growing fast in India. YouTube, for example, reports that average affiliate payouts to Indian creators grew more than 160% year over year from Q1 2025 to Q1 2026. More importantly, audiences increasingly discover products through creators before they search a marketplace. For creators, that means income tied to what you recommend and make, not only what brands sponsor.",
      },
      {
        type: "paragraph",
        text: "Commerce is one part of creator income. For the full map, including brand deals and audience-funded income, see creator monetization in India.",
        links: [{ text: "creator monetization in India", href: "/blog/creator-monetization-india" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creator commerce is earning from sales driven by your content: affiliate commissions, platform shopping features like YouTube Shopping, your own digital or physical products, merchandise, products co-created with brands, and live selling. To build it, pick products your audience already asks about, make content that helps people decide (reviews, comparisons, routines), give them one easy place to buy (tags, storefront, link), disclose every commercial relationship, and track sales by content piece.",
      },
      { type: "heading", text: "The main creator commerce models", id: "models" },
      {
        type: "table",
        headers: ["Model", "How you earn", "Effort", "Guide"],
        rows: [
          ["Affiliate links and codes", "Commission on sales", "Low to medium", "Creator affiliate marketing"],
          ["Platform shopping (YouTube Shopping)", "Commission via product tags", "Low to medium", "YouTube Shopping for Indian creators"],
          ["Own digital products", "Direct sales", "Medium", "How to sell digital products"],
          ["Merchandise", "Margin on physical products", "Medium to high", "This guide"],
          ["Co-created or licensed products", "Fee, royalty or revenue share with a brand", "High", "This guide"],
          ["Live commerce", "Commission or sales during live streams", "Medium", "This guide"],
        ],
      },
      {
        type: "paragraph",
        text: "Guides for the first three: creator affiliate marketing, YouTube Shopping for Indian creators and how to sell digital products.",
        links: [
          { text: "creator affiliate marketing", href: "/blog/creator-affiliate-marketing-india" },
          { text: "YouTube Shopping for Indian creators", href: "/blog/youtube-shopping-india-creators" },
          { text: "how to sell digital products", href: "/blog/sell-digital-products-as-a-creator-india" },
        ],
      },
      { type: "heading", text: "The content-to-sale funnel", id: "funnel" },
      {
        type: "table",
        headers: ["Stage", "Content that works", "Where the sale happens"],
        rows: [
          ["Discovery", "Short-form: \"3 things under ₹999 I use daily\"", "Profile visit, save"],
          ["Consideration", "Long-form reviews, comparisons, tutorials, long-term updates", "Product tags, description links"],
          ["Decision", "Honest pros and cons, who it's not for, price context", "Storefront, code, tagged product"],
          ["Repeat", "Newsletter, community, restock alerts", "Email, WhatsApp, storefront"],
        ],
      },
      { type: "heading", text: "Merchandise", id: "merch" },
      {
        type: "list",
        items: [
          "Works best when your community has shared identity, catchphrases or visual style.",
          "Print-on-demand avoids inventory but has lower margins and less quality control.",
          "Small pre-order drops test demand before you commit to stock.",
          "Plan for sizes, returns, shipping costs and customer service.",
          "Physical goods carry their own GST and consumer protection obligations; get advice before scaling.",
        ],
      },
      { type: "heading", text: "Co-created and licensed products", id: "co-created" },
      {
        type: "paragraph",
        text: "Brands sometimes work with creators on a product line: a creator's edition, a collaboration, or a product using the creator's name. Compensation can be a fee, a royalty on sales, a revenue share, or a combination. Treat it as a major contract: define your name and likeness rights, approvals, quality control, how sales are reported, audits, duration and exit. See creator content licensing and the influencer contract guide for creators.",
        links: [
          { text: "creator content licensing", href: "/blog/creator-content-licensing" },
          { text: "influencer contract guide for creators", href: "/blog/influencer-contract-guide-for-creators" },
        ],
      },
      { type: "heading", text: "Live commerce", id: "live-commerce" },
      {
        type: "paragraph",
        text: "Live streams let creators demonstrate products, answer questions and share links in real time. On YouTube, eligible creators can tag products during live streams, and products tagged afterwards appear in replays. Keep live selling honest: no invented scarcity, clear prices, and disclosure at the start and end of the stream.",
        links: [{ text: "tag products during live streams", href: SOURCES.youtubeTagProducts }],
      },
      { type: "heading", text: "Your commerce stack", id: "stack" },
      {
        type: "template",
        label: "A simple stack (adapt to your platforms)",
        text: "IN CONTENT: product tags (YouTube Shopping), pinned links, codes\nONE HOME: storefront on your site or bio link\nCHECKOUT: payment gateway with UPI and cards (own products)\nRETENTION: newsletter and/or WhatsApp channel for restocks and new picks\nTRACKING: UTM links, affiliate dashboards, sales by content piece\nRECORDS: sales, commissions, fees, refunds, GST/TDS",
      },
      {
        type: "paragraph",
        text: "See creator storefront and creator analytics dashboard.",
        links: [
          { text: "creator storefront", href: "/blog/creator-storefront" },
          { text: "creator analytics dashboard", href: "/blog/creator-analytics-dashboard" },
        ],
      },
      { type: "heading", text: "Commerce and brand deals together", id: "brand-deals" },
      {
        type: "paragraph",
        text: "Commerce and sponsorships reinforce each other. Proof that your audience buys makes you more valuable to brands, and hybrid deals (fee plus commission) share risk fairly. Keep them compatible: don't tag a competitor's product in a sponsored video, and respect exclusivity terms. See how to turn brand content into multiple revenue streams.",
        links: [{ text: "how to turn brand content into multiple revenue streams", href: "/blog/creator-revenue-streams-from-brand-content" }],
      },
      { type: "heading", text: "Where to start", id: "where-to-start" },
      {
        type: "table",
        headers: ["If you…", "Start with"],
        rows: [
          ["Already review or recommend products", "Affiliate links and YouTube Shopping tags"],
          ["Get asked for your templates, plans or methods", "A digital product"],
          ["Have a community with a strong identity", "A small merchandise drop"],
          ["Have proven sales for a brand repeatedly", "Discuss a co-created product or hybrid deal"],
        ],
      },
      { type: "heading", text: "For brands: how creator commerce changes campaigns", id: "for-brands" },
      {
        type: "paragraph",
        text: "For brands, creator commerce shifts campaigns from reach alone toward measurable sales: product tags, affiliate links and codes make it easier to see what creators drive, while fee-plus-commission structures share risk. It works best when brands pick creators whose audiences already buy in the category, allow honest reviews, and set up tracking before launch. Kudozz's guide to influencer marketing for e-commerce brands in India covers the brand side, and creator attribution explains how sales are measured.",
        links: [
          { text: "influencer marketing for e-commerce brands in India", href: "/blog/influencer-marketing-ecommerce-brands-india" },
          { text: "creator attribution", href: "/blog/creator-attribution" },
        ],
      },
      { type: "heading", text: "Mistakes to avoid", id: "mistakes" },
      {
        type: "list",
        items: [
          "Recommending products only because the commission is high.",
          "Turning every video into a sales pitch.",
          "Fake urgency and inflated \"original\" prices.",
          "No tracking, so you don't know which content sells.",
          "Physical products without planning returns and support.",
          "Undisclosed affiliate, sponsored or own-product promotion.",
        ],
      },
      {
        type: "paragraph",
        text: "For the formats that turn discovery into sales, see creator shopping content. For the full path from follower to customer, see the creator funnel.",
        links: [
          { text: "creator shopping content", href: "/blog/shoppable-content-creators" },
          { text: "the creator funnel", href: "/blog/creator-funnel" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Creator commerce rewards trust. Start with the model closest to what you already do, make content that genuinely helps people decide, give them one easy place to buy, and measure sales by content piece. Build from there.",
      },
    ],
    faqs: [
      {
        question: "What is creator commerce?",
        answer:
          "Income creators earn when their content leads directly to purchases, through affiliate links, platform shopping features, their own products, merchandise, co-created products or live selling.",
      },
      {
        question: "Is creator commerce different from brand sponsorships?",
        answer:
          "Yes. Sponsorships pay a fee for content and reach; commerce pays based on sales. Many creators combine them, for example with hybrid fee-plus-commission deals.",
      },
      {
        question: "Which creator commerce model should I start with?",
        answer:
          "Start with what's closest to your existing content: affiliate links and product tags if you review products, a digital product if people ask for your methods, or merchandise if your community has a strong identity.",
      },
    ],
  },
  {
    slug: "youtube-creator-monetization",
    category: "Creator Resources",
    title: "YouTube Creator Monetization: Complete Guide to Building Multiple Revenue Streams",
    seoTitle: "YouTube Monetization: How Creators Earn From YouTube",
    excerpt:
      "Every way creators earn on YouTube in 2026: the Partner Program tiers, ad and Premium revenue, Shorts, fan funding, YouTube Shopping, Creator Partnerships and off-platform income, with current eligibility.",
    metaDescription:
      "YouTube creator monetization: YouTube Partner Program eligibility and tiers, ad revenue, Shorts revenue sharing, memberships, Super Chat, Super Thanks, Gifts, YouTube Shopping, Creator Partnerships and brand deals.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["YouTube monetization", "YouTube Partner Program", "YouTube revenue streams", "YouTube Shorts monetization", "YouTube India creators"],
    related: ["youtube-gifts-memberships-super-thanks", "youtube-shopping-india-creators", "creator-monetization-india"],
    body: [
      {
        type: "paragraph",
        text: "YouTube offers more built-in ways to earn than any other major platform, but they unlock at different stages and work very differently. Ad revenue rewards watch time, fan funding rewards loyalty, Shopping rewards recommendations, and brand partnerships reward audience fit. Understanding the whole system helps you build a channel that isn't dependent on any single line.",
      },
      {
        type: "paragraph",
        text: "Requirements below were checked against YouTube's help centre and official blog in September 2026. YouTube has announced updates to the YouTube Partner Program terms from 1 February 2027; always confirm current requirements in YouTube Studio's Earn section.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "YouTube creators earn through the YouTube Partner Program (ad revenue on long-form videos, a share of Shorts feed ad revenue, and YouTube Premium revenue), fan funding (channel memberships, Super Chat, Super Stickers, Super Thanks and Gifts), YouTube Shopping (affiliate commissions from tagged products, available in India), brand partnerships (including through YouTube Creator Partnerships), and off-platform income such as products and services. Ad revenue requires 1,000 subscribers plus 4,000 valid public watch hours in 12 months or 10 million valid public Shorts views in 90 days; an expanded tier with lower thresholds unlocks fan funding and Shopping earlier in eligible countries.",
      },
      { type: "heading", text: "The YouTube Partner Program tiers", id: "ypp" },
      {
        type: "table",
        headers: ["Tier", "Requirements (as published by YouTube)", "What it unlocks"],
        rows: [
          ["Expanded YPP (where available)", "500 subscribers, 3 valid public uploads in 90 days, and 3,000 valid public watch hours in 12 months or 3 million valid public Shorts views in 90 days", "Fan funding (memberships, Supers) and Shopping"],
          ["Full YPP (ad revenue)", "1,000 subscribers and 4,000 valid public watch hours in 12 months, or 10 million valid public Shorts views in 90 days", "Ad revenue sharing, YouTube Premium revenue, plus the above"],
        ],
      },
      {
        type: "paragraph",
        text: "You also need to live in an eligible country, follow YouTube's monetization policies, have two-step verification on, have no active Community Guidelines strikes, and link an AdSense account. Official details: YouTube Partner Program overview and the expanded YPP overview.",
        links: [
          { text: "YouTube Partner Program overview", href: SOURCES.youtubePartnerProgram },
          { text: "expanded YPP overview", href: SOURCES.youtubeExpandedYpp },
        ],
      },
      { type: "heading", text: "Revenue stream by stream", id: "streams" },
      {
        type: "table",
        headers: ["Stream", "Who pays", "Rewards", "Guide"],
        rows: [
          ["Long-form ad revenue", "Advertisers, via YouTube", "Watch time on advertiser-friendly content", "YPP overview"],
          ["Shorts revenue sharing", "Advertisers, pooled", "Engaged Shorts views", "Shorts monetization policies"],
          ["YouTube Premium revenue", "Premium subscribers", "Watch time by Premium members", "YPP overview"],
          ["Channel memberships", "Fans, monthly", "Loyalty and perks", "Fan funding guide"],
          ["Super Chat, Super Stickers", "Fans, during live streams and Premieres", "Live engagement", "Fan funding guide"],
          ["Super Thanks", "Fans, on videos", "Gratitude for specific videos", "Fan funding guide"],
          ["Gifts", "Fans, via Jewels during live streams", "Live interaction", "Fan funding guide"],
          ["YouTube Shopping affiliate", "Retailers, per sale", "Recommendations", "YouTube Shopping guide"],
          ["Brand partnerships", "Brands", "Audience fit and trust", "Creator brand deals"],
        ],
      },
      {
        type: "paragraph",
        text: "Fan funding is covered in depth in YouTube Gifts, memberships and Super Thanks, and Shopping in YouTube Shopping for Indian creators.",
        links: [
          { text: "YouTube Gifts, memberships and Super Thanks", href: "/blog/youtube-gifts-memberships-super-thanks" },
          { text: "YouTube Shopping for Indian creators", href: "/blog/youtube-shopping-india-creators" },
        ],
      },
      { type: "heading", text: "Shorts monetization", id: "shorts" },
      {
        type: "paragraph",
        text: "Shorts ads run between videos in the Shorts feed. YouTube pools that revenue, allocates part of it to creators based on their share of engaged views (with adjustments for music use), and pays creators 45% of their allocated amount, according to its Shorts monetization policies. Non-original Shorts and artificial views don't qualify.",
        links: [{ text: "Shorts monetization policies", href: SOURCES.youtubeShortsMonetization }],
      },
      { type: "heading", text: "YouTube Shopping in India", id: "shopping" },
      {
        type: "paragraph",
        text: "Eligible Indian creators can tag products from participating retailers and earn commission. In September 2026, YouTube announced Amazon product tagging for India, alongside existing partners such as Flipkart, Myntra and Nykaa, and affiliate campaigns where retailers offer bonuses or exclusive commission rates.",
        links: [{ text: "YouTube announced Amazon product tagging for India", href: SOURCES.madeOnYouTube2026 }],
      },
      { type: "heading", text: "Brand partnerships on YouTube", id: "brand-partnerships" },
      {
        type: "paragraph",
        text: "YouTube Creator Partnerships (which absorbed BrandConnect) helps eligible creators in India get discovered by brands, manage enquiries and share a media kit from YouTube Studio. YouTube has also announced tools such as dynamic brand segments, which let creators insert sponsor segments into multiple long-form videos, and Ask Studio features to help respond to brand briefs. Availability varies; check Studio. For negotiating and managing sponsorships, see the creator brand deals guide.",
        links: [
          { text: "YouTube Creator Partnerships", href: SOURCES.youtubeCreatorPartnerships },
          { text: "creator brand deals guide", href: "/blog/creator-brand-deals" },
        ],
      },
      { type: "heading", text: "Off-platform income from YouTube audiences", id: "off-platform" },
      {
        type: "list",
        items: [
          "Digital products and courses linked from descriptions.",
          "Newsletter and community for your most engaged viewers.",
          "Consulting, workshops and speaking.",
          "Content licensing of your videos.",
        ],
      },
      {
        type: "paragraph",
        text: "See how to sell digital products and creator content licensing.",
        links: [
          { text: "how to sell digital products", href: "/blog/sell-digital-products-as-a-creator-india" },
          { text: "creator content licensing", href: "/blog/creator-content-licensing" },
        ],
      },
      { type: "heading", text: "Building a balanced YouTube income", id: "balance" },
      {
        type: "template",
        label: "Stage-by-stage focus (illustrative, not a guarantee)",
        text: "BEFORE YPP: consistency, niche, retention; small brand deals and affiliate links where allowed\nEXPANDED YPP: memberships, Super Thanks, Shopping tags on evergreen videos\nFULL YPP: ad revenue; optimise watch time; add Creator Partnerships\nESTABLISHED: own products, community, licensing, long-term sponsors",
      },
      { type: "heading", text: "Mistakes to avoid", id: "mistakes" },
      {
        type: "list",
        items: [
          "Relying on third-party posts for eligibility instead of checking Studio.",
          "Chasing views with reused or non-original content that won't qualify for monetization.",
          "Buying views or subscribers, which can cost you the programme entirely.",
          "Ignoring the audience experience with too many mid-rolls or constant pitches.",
          "Forgetting disclosure on sponsored and Shopping content.",
          "Treating YouTube income as guaranteed; revenue shares and policies can change.",
        ],
      },
      {
        type: "paragraph",
        text: "Monetization follows discovery and attention. See YouTube SEO for creators, YouTube Shorts content strategy and YouTube analytics for creators.",
        links: [{ text: "YouTube SEO for creators", href: "/blog/youtube-seo-for-creators" }, { text: "YouTube Shorts content strategy", href: "/blog/youtube-shorts-content-strategy" }, { text: "YouTube analytics for creators", href: "/blog/youtube-analytics-for-creators" }],
      },
      {
        type: "paragraph",
        text: "Each stream has a deeper guide: YouTube Live monetization, YouTube channel membership strategy, YouTube affiliate marketing and YouTube Creator Partnerships. For the channel plan that supports them, see YouTube content strategy.",
        links: [
          { text: "YouTube Live monetization", href: "/blog/youtube-live-monetization" },
          { text: "YouTube channel membership strategy", href: "/blog/youtube-channel-membership-strategy" },
          { text: "YouTube affiliate marketing", href: "/blog/youtube-affiliate-marketing" },
          { text: "YouTube Creator Partnerships", href: "/blog/youtube-creator-partnerships-india" },
          { text: "YouTube content strategy", href: "/blog/youtube-content-strategy" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "YouTube monetization works best as a portfolio: ad revenue for scale, fan funding for loyalty, Shopping for recommendations, and partnerships and products for depth. Check eligibility in Studio, add one stream at a time, and track each in your creator analytics dashboard.",
        links: [{ text: "creator analytics dashboard", href: "/blog/creator-analytics-dashboard" }],
      },
    ],
    faqs: [
      {
        question: "How many subscribers do you need to monetize on YouTube?",
        answer:
          "For ad revenue, YouTube requires 1,000 subscribers plus 4,000 valid public watch hours in 12 months or 10 million valid public Shorts views in 90 days. An expanded tier starting at 500 subscribers unlocks fan funding and Shopping in eligible countries.",
      },
      {
        question: "How do YouTube Shorts make money?",
        answer:
          "Ads between Shorts are pooled, part is allocated to creators based on their share of engaged views, and creators receive 45% of their allocated revenue, according to YouTube's Shorts monetization policies.",
      },
      {
        question: "Is YouTube Shopping available in India?",
        answer:
          "Yes. Eligible creators in India can tag products from participating retailers and earn commission. YouTube announced Amazon tagging for India in September 2026.",
      },
      {
        question: "What changes to YouTube monetization are coming in 2027?",
        answer:
          "YouTube has announced updates to the YouTube Partner Program terms from 1 February 2027 and asked creators to accept the updated terms in YouTube Studio. Check the help centre for the details that apply to your channel.",
      },
    ],
  },
  {
    slug: "youtube-gifts-memberships-super-thanks",
    category: "Creator Resources",
    title: "YouTube Gifts, Memberships and Super Thanks: Complete Monetization Guide for Indian Creators",
    seoTitle: "YouTube Gifts, Memberships and Super Thanks in India",
    excerpt:
      "How YouTube's fan funding features work in India: channel memberships, Super Chat, Super Stickers, Super Thanks and Gifts (Jewels and Rubies), who's eligible, how to turn them on, and how to use them without annoying viewers.",
    metaDescription:
      "YouTube fan funding for Indian creators: Gifts with Jewels and Rubies, channel memberships, Super Chat, Super Stickers and Super Thanks, eligibility, setup in YouTube Studio, best practices and disclosure.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "11 min read",
    tags: ["YouTube Gifts", "YouTube Jewels", "YouTube channel memberships", "Super Thanks", "Super Chat India"],
    related: ["youtube-creator-monetization", "creator-memberships", "how-to-build-a-creator-community"],
    body: [
      {
        type: "paragraph",
        text: "Fan funding is money viewers choose to give you directly: a monthly membership, a highlighted message in a live chat, a thank-you on a video, or an animated gift during a stream. It rewards loyalty rather than views, which makes it especially useful for mid-sized channels with close communities.",
      },
      {
        type: "paragraph",
        text: "This guide covers YouTube's fan funding features specifically. For every YouTube income stream, see YouTube creator monetization. Details were checked against YouTube's help centre in September 2026; eligibility and availability can change.",
        links: [{ text: "YouTube creator monetization", href: "/blog/youtube-creator-monetization" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "YouTube's fan funding features are channel memberships (monthly paid tiers with perks), Super Chat and Super Stickers (paid highlighted messages and stickers in live chats and Premieres), Super Thanks (a paid thank-you on videos) and Gifts (animated virtual gifts viewers send during live streams using Jewels, which earn creators Rubies). They require meeting YouTube's fan funding or virtual items eligibility, living in an available country (India is included for these features), and turning them on in YouTube Studio's Earn section. Made-for-kids content isn't eligible.",
      },
      { type: "heading", text: "The features compared", id: "compared" },
      {
        type: "table",
        headers: ["Feature", "What viewers do", "Where it appears", "Best for"],
        rows: [
          ["Channel memberships", "Pay monthly for a tier with perks", "Channel, videos, community posts", "Loyal audiences, recurring income"],
          ["Super Chat", "Pay to highlight a message", "Live chat in streams and Premieres", "Q&As, live events"],
          ["Super Stickers", "Pay for an animated sticker", "Live chat", "Casual live engagement"],
          ["Super Thanks", "Pay to thank you on a video, with a highlighted comment", "Under eligible videos", "Tutorials and helpful videos"],
          ["Gifts", "Buy Jewels, send animated gifts", "Vertical and horizontal live streams", "Interactive, mobile-first live streams"],
        ],
      },
      { type: "heading", text: "Gifts, Jewels and Rubies", id: "gifts" },
      {
        type: "paragraph",
        text: "Gifts are animated virtual items viewers send during live streams. Viewers buy a virtual currency called Jewels and use them to send gifts; creators earn Rubies, which represent their earnings. YouTube launched Gifts in India with locally themed gifts. Creators turn them on by accepting the Virtual Items module in the Earn section of YouTube Studio.",
      },
      {
        type: "list",
        items: [
          "India is listed among countries where Gifts are available.",
          "Gifts work on eligible vertical and horizontal live streams.",
          "They aren't available on age-restricted, unlisted, private or made-for-kids streams, streams with YouTube Giving fundraisers, or streams with live chat turned off.",
          "Creators must meet the minimum requirements in YouTube's Virtual Items policies.",
        ],
      },
      {
        type: "paragraph",
        text: "Official details: Gifts eligibility and availability.",
        links: [{ text: "Gifts eligibility and availability", href: SOURCES.youtubeGifts }],
      },
      { type: "heading", text: "Channel memberships", id: "memberships" },
      {
        type: "list",
        items: [
          "Create up to several tiers with different prices and perks (badges, emojis, members-only posts, videos, lives).",
          "Offer perks you can deliver every month; members notice when perks stop.",
          "Mention memberships at natural moments, not in every video.",
          "Use members-only live streams or community posts for regular contact.",
        ],
      },
      {
        type: "paragraph",
        text: "YouTube's channel memberships page lists eligibility and available countries. For designing tiers and reducing churn across platforms, see creator memberships.",
        links: [
          { text: "channel memberships page", href: SOURCES.youtubeMemberships },
          { text: "creator memberships", href: "/blog/creator-memberships" },
        ],
      },
      { type: "heading", text: "Super Chat, Super Stickers and Super Thanks", id: "supers" },
      {
        type: "list",
        items: [
          "Super Chat and Super Stickers appear in live chat during streams and Premieres; acknowledge them by name.",
          "Super Thanks appears under videos; it suits tutorials and problem-solving content where viewers feel grateful.",
          "Eligibility requires meeting fan funding minimums and living in an available location.",
          "Set clear moderation rules; paid messages still need to follow Community Guidelines.",
        ],
      },
      {
        type: "paragraph",
        text: "See Super Chat and Super Stickers eligibility.",
        links: [{ text: "Super Chat and Super Stickers eligibility", href: SOURCES.youtubeSuperChat }],
      },
      { type: "heading", text: "How to turn fan funding on", id: "setup" },
      {
        type: "template",
        label: "Setup steps",
        text: "1. Check eligibility: YouTube Studio → Earn\n2. Join YPP (expanded tier if available in your country, or full YPP)\n3. Accept the relevant modules (e.g. Supers, Memberships, Virtual Items for Gifts)\n4. Configure: membership tiers and perks; Super Chat on for streams; Super Thanks on for videos\n5. Tell viewers once, clearly, what each feature is and what supporters get",
      },
      { type: "heading", text: "Using fan funding without annoying viewers", id: "best-practice" },
      {
        type: "list",
        items: [
          "Thank supporters genuinely; never shame non-payers.",
          "Don't promise outcomes in exchange for Supers or Gifts.",
          "Plan interactive formats: Q&As, challenges, reviews of viewer submissions.",
          "Keep paid and free viewers' experience fair.",
          "Watch for minors; YouTube restricts fan funding on made-for-kids content, and it's good practice to discourage young viewers from spending.",
        ],
      },
      { type: "heading", text: "Money and records", id: "money" },
      {
        type: "paragraph",
        text: "Fan funding is paid through YouTube's payout system to your linked AdSense account after YouTube's share and applicable taxes. It's taxable income; keep monthly records by feature. See creator business expenses and GST for creators.",
        links: [
          { text: "creator business expenses", href: "/blog/creator-business-expenses-india" },
          { text: "GST for creators", href: "/blog/gst-for-influencers-india" },
        ],
      },
      { type: "heading", text: "Mistakes to avoid", id: "mistakes" },
      {
        type: "list",
        items: [
          "Turning on every feature and mentioning all of them in every stream.",
          "Membership perks that quietly stop after two months.",
          "Pressuring viewers, especially younger ones, to spend.",
          "Relying on outdated third-party eligibility lists instead of Studio.",
          "Ignoring moderation of paid messages.",
        ],
      },
      {
        type: "paragraph",
        text: "Once the features are on, strategy matters more than settings: see YouTube channel membership strategy for tiers, perks and retention, and YouTube Live monetization for planning streams that earn without pressure.",
        links: [
          { text: "YouTube channel membership strategy", href: "/blog/youtube-channel-membership-strategy" },
          { text: "YouTube Live monetization", href: "/blog/youtube-live-monetization" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Fan funding grows from community, not from asking harder. Turn on the features that match how you create (memberships for regular uploaders, Supers and Gifts for live streamers, Super Thanks for tutorials), thank supporters well, and keep perks consistent. For building the community itself, see how to build a creator community.",
        links: [{ text: "how to build a creator community", href: "/blog/how-to-build-a-creator-community" }],
      },
    ],
    faqs: [
      {
        question: "What are YouTube Gifts and Jewels?",
        answer:
          "Gifts are animated virtual items viewers send during live streams. Viewers buy Jewels to send Gifts, and creators earn Rubies, which represent their earnings. Gifts are available in India for eligible creators.",
      },
      {
        question: "Who is eligible for YouTube channel memberships in India?",
        answer:
          "Channels that meet YouTube's fan funding eligibility requirements, are in an available country such as India, and aren't set as made for kids. Check YouTube Studio's Earn section for your channel's status.",
      },
      {
        question: "What is Super Thanks on YouTube?",
        answer:
          "A fan funding feature that lets viewers pay to thank a creator on an eligible video, with a highlighted comment.",
      },
      {
        question: "Can I use Gifts on any live stream?",
        answer:
          "No. Gifts aren't available on age-restricted, unlisted, private or made-for-kids streams, streams with YouTube Giving fundraisers, or streams with live chat turned off.",
      },
    ],
  },
];
