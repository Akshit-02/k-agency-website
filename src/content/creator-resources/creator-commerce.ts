import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_CLUSTER_PUBLISHED, CREATOR_FACTS_REVIEWED, SOURCES } from "@/content/creator-resources/shared";

/** Creator commerce: affiliate marketing, YouTube Shopping, stacking revenue around brand content. */
export const creatorCommercePosts: BlogPost[] = [
  {
    slug: "creator-affiliate-marketing-india",
    category: "Creator Resources",
    title: "Creator Affiliate Marketing in India: Complete Guide to Earning From Product Recommendations",
    seoTitle: "Creator Affiliate Marketing in India: How It Works",
    excerpt:
      "How affiliate links, codes and commissions work for Indian creators, how affiliate compares with and combines with brand deals, which products to promote, and how to keep audience trust.",
    metaDescription:
      "Creator affiliate marketing in India: affiliate links, commissions, tracking, disclosure, choosing products, audience trust, conversion, platforms, brand deal vs affiliate deal and hybrid deals.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "12 min read",
    tags: ["creator affiliate marketing", "affiliate marketing India", "affiliate content strategy", "affiliate links", "influencer commission", "affiliate disclosure"],
    related: ["youtube-shopping-india-creators", "creator-monetization-india", "creator-revenue-streams-from-brand-content"],
    body: [
      {
        type: "paragraph",
        text: "Every time someone comments \"link?\" under your video, there's an affiliate opportunity. Affiliate marketing pays you a share of sales you drive, which suits creators whose audiences already ask where to buy things. It rewards trust, not just reach.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creator affiliate marketing means earning a commission when your audience buys through your unique link or code. In India, creators use retailer affiliate programmes, brand-run programmes, affiliate networks and platform tools such as YouTube Shopping. Income depends on your audience's buying intent, the commission rate, the retailer's conversion and return window. Affiliate content must be disclosed (ASCI lists \"Affiliate\" as an acceptable label). Affiliate works on its own, but often works best combined with a fixed-fee brand deal.",
      },
      { type: "heading", text: "How affiliate marketing works", id: "how-it-works" },
      {
        type: "image",
        src: "/blog/creator-resources/affiliate-flow.svg",
        alt: "Affiliate marketing flow: creator joins programme, gets tracked link or code, recommends product in content, viewer clicks and buys, retailer tracks sale, commission is confirmed after the return window and paid",
        caption: "Commissions are usually confirmed only after the return window closes, so payouts lag sales.",
        width: 1200,
        height: 675,
      },
      {
        type: "list",
        items: [
          "Join a programme and get a tracked link or code.",
          "Feature the product in content and share the link (bio, description, Story link sticker, pinned comment, product tag).",
          "A viewer clicks and buys within the tracking window (often a cookie window).",
          "The retailer records the sale; commission is confirmed after returns and cancellations.",
          "You're paid once you pass the programme's payout threshold, on its payout schedule.",
        ],
      },
      { type: "heading", text: "Key terms", id: "terms" },
      {
        type: "table",
        headers: ["Term", "Meaning"],
        rows: [
          ["Commission rate", "Percentage (or fixed amount) you earn per qualifying sale; often varies by category"],
          ["Tracking or cookie window", "How long after a click a purchase still counts"],
          ["Conversion rate", "Share of clicks that become purchases"],
          ["EPC (earnings per click)", "Total earnings ÷ clicks; useful for comparing programmes"],
          ["Return window", "Period before a sale is confirmed; returns cancel commission"],
          ["Payout threshold", "Minimum balance before you're paid"],
          ["Discount code", "Code that tracks sales and gives the buyer a discount"],
        ],
      },
      {
        type: "template",
        label: "Simple affiliate maths (hypothetical numbers)",
        text: "Clicks: 2,000\nConversion rate: 3% → 60 orders\nAverage order value: ₹1,200 → sales ₹72,000\nCommission rate: 5% → ₹3,600\nReturns cancel 10% → confirmed ₹3,240\nEPC = ₹3,240 ÷ 2,000 = ₹1.62 per click",
      },
      { type: "heading", text: "Where Indian creators find affiliate programmes", id: "platforms" },
      {
        type: "list",
        items: [
          "E-commerce and marketplace affiliate programmes run by large Indian retailers.",
          "Brand-run programmes, especially D2C brands, often with codes and higher commissions.",
          "Affiliate networks and link tools that aggregate many retailers.",
          "Platform shopping tools: YouTube Shopping lets eligible creators in India tag products from participating retailers and earn commission.",
          "Service and app referral programmes (finance, education, software), which often pay per sign-up rather than per sale. Finance-related promotion carries extra regulatory caution.",
        ],
      },
      {
        type: "paragraph",
        text: "Read each programme's terms carefully: commission rates, cookie windows, prohibited promotion methods and payout rules differ. For YouTube specifically, see YouTube Shopping for Indian creators.",
        links: [{ text: "YouTube Shopping for Indian creators", href: "/blog/youtube-shopping-india-creators" }],
      },
      { type: "heading", text: "Brand deal vs affiliate deal", id: "brand-vs-affiliate" },
      {
        type: "table",
        headers: ["", "Brand deal (fixed fee)", "Affiliate deal"],
        rows: [
          ["You're paid for", "Content and reach", "Sales you drive"],
          ["Who carries the risk", "Mostly the brand", "Mostly you"],
          ["Income timing", "Per agreed payment terms", "After purchases and return windows"],
          ["Creative control", "Brief, approvals", "Usually more freedom"],
          ["Best for", "Awareness, launches", "Products your audience already wants"],
          ["Disclosure", "Required", "Required"],
        ],
      },
      { type: "heading", text: "Brand deal plus affiliate: the hybrid", id: "hybrid" },
      {
        type: "paragraph",
        text: "A hybrid deal pays a fixed fee for the content plus commission on sales. It shares risk fairly: the brand gets content and reach at a lower fixed cost, and you're rewarded if your audience buys. Useful when a brand is testing creators, or when you're confident your audience converts.",
      },
      {
        type: "template",
        label: "Proposing a hybrid",
        text: "Hi [Name],\n\nMy audience regularly asks where to buy the products I review, so I'd propose a hybrid: a ₹[X] fee for one Reel and a Story set, plus [Y]% commission on sales through my code for 60 days. That keeps your upfront cost lower while rewarding results. I'll share click and code data weekly.\n\n[Name]",
      },
      { type: "heading", text: "Choosing products to promote", id: "choosing-products" },
      {
        type: "list",
        items: [
          "Products you've actually used and would recommend without a commission.",
          "Products your audience already asks about.",
          "Price points that match your audience.",
          "Retailers with reliable delivery and returns in your audience's cities.",
          "Avoid products with unsupported health, finance or \"guaranteed results\" claims.",
        ],
      },
      { type: "heading", text: "Content formats that convert", id: "formats" },
      {
        type: "list",
        items: [
          "Comparisons: \"three sunscreens under ₹500 tested\".",
          "\"What I actually use\" routines and setups.",
          "Long-term reviews that show results over time.",
          "Sale-season buying guides (festive sales, year-end sales).",
          "Tutorials where the product is essential to the result.",
        ],
      },
      { type: "heading", text: "Disclosure and trust", id: "disclosure" },
      {
        type: "paragraph",
        text: "Affiliate links are a material connection. ASCI's influencer guidelines list \"Affiliate\" among acceptable disclosure labels; place disclosure upfront, not buried at the end of a description. Tell your audience plainly: \"I earn a small commission if you buy through my link, at no extra cost to you.\" Audiences forgive commissions; they don't forgive feeling tricked.",
        links: [{ text: "ASCI's influencer guidelines", href: SOURCES.asciSocial }],
      },
      { type: "heading", text: "Tracking and improving", id: "tracking" },
      {
        type: "list",
        items: [
          "Track clicks, conversions and earnings per product and per piece of content.",
          "Compare EPC across programmes, not just commission rates.",
          "Update or remove links to discontinued or out-of-stock products.",
          "Note which formats and price points convert best, and make more of them.",
          "Keep records of affiliate income for tax purposes; commissions may have TDS deducted.",
        ],
      },
      {
        type: "paragraph",
        text: "To give all your recommendations one shoppable home, see creator storefront, and for the wider strategy of turning content into sales, creator commerce in India.",
        links: [{ text: "creator storefront", href: "/blog/creator-storefront" }, { text: "creator commerce in India", href: "/blog/creator-commerce-india" }],
      },
      {
        type: "paragraph",
        text: "Affiliate income fits into a wider mix; see creator monetization in India and how to turn brand content into multiple revenue streams. For the tax side, see TDS for creators.",
        links: [
          { text: "creator monetization in India", href: "/blog/creator-monetization-india" },
          { text: "how to turn brand content into multiple revenue streams", href: "/blog/creator-revenue-streams-from-brand-content" },
          { text: "TDS for creators", href: "/blog/tds-for-influencers-india" },
        ],
      },
      {
        type: "paragraph",
        text: "Brands think about affiliate programmes differently; see Instagram influencer affiliate marketing and influencer marketing vs affiliate marketing.",
        links: [
          { text: "Instagram influencer affiliate marketing", href: "/blog/instagram-influencer-affiliate-marketing" },
          { text: "influencer marketing vs affiliate marketing", href: "/blog/influencer-marketing-vs-affiliate-marketing" },
        ],
      },
      {
        type: "paragraph",
        text: "Two guides go deeper: creator product recommendations for the trust standard behind every recommendation, and creator affiliate links for placement and clicks without spamming.",
        links: [
          { text: "creator product recommendations", href: "/blog/creator-product-recommendations" },
          { text: "creator affiliate links", href: "/blog/creator-affiliate-links" },
        ],
      },
      { type: "heading", text: "An affiliate content strategy that converts", id: "content-strategy" },
      {
        type: "paragraph",
        text: "Affiliate content converts best when it's planned around the decisions your audience is making, not around whichever products have the highest commission.",
      },
      {
        type: "table",
        headers: ["Audience stage", "Content that helps", "Affiliate role"],
        rows: [
          ["Discovering a need", "Problem explainers, routines, setups", "Light: link the tools you use"],
          ["Comparing options", "Comparisons, \"best under \u20b9X\", long-term reviews", "Main: link each option and say who it suits"],
          ["Ready to buy", "Deals roundups, restocks, sale guides", "Direct: current links and codes"],
          ["After purchase", "How-to and care guides", "Accessories and refills, if genuinely useful"],
        ],
      },
      {
        type: "paragraph",
        text: "Plan a monthly mix across these stages, keep commercial content within the share your audience accepts, and measure revenue per 1,000 views by format. Shoppable content for creators covers the formats, and creator conversion rate covers measurement.",
        links: [
          { text: "Shoppable content for creators", href: "/blog/shoppable-content-creators" },
          { text: "creator conversion rate", href: "/blog/creator-conversion-rate" },
        ],
      },
    ],
    faqs: [
      {
        question: "How does affiliate marketing work for creators in India?",
        answer:
          "Creators join retailer, brand or platform affiliate programmes, share tracked links or codes in content, and earn a commission when viewers buy within the tracking window, paid after returns are settled.",
      },
      {
        question: "Is affiliate marketing better than brand deals?",
        answer:
          "Neither is better in general. Brand deals pay a fixed fee for content and reach; affiliate pays for sales and shifts risk to you. Many creators combine them in hybrid deals.",
      },
      {
        question: "Do I need to disclose affiliate links?",
        answer:
          "Yes. Affiliate links are a material connection. ASCI lists \"Affiliate\" among acceptable labels, and disclosure should be upfront and clear.",
      },
      {
        question: "What is a good affiliate commission rate?",
        answer:
          "It varies widely by category and programme. Compare programmes by earnings per click, which reflects commission, conversion and returns together.",
      },
    ],
  },
  {
    slug: "youtube-shopping-india-creators",
    category: "Creator Resources",
    title: "YouTube Shopping for Indian Creators: How Affiliate Product Tagging Works",
    seoTitle: "YouTube Shopping India: Eligibility, Retailers and Commissions",
    excerpt:
      "How the YouTube Shopping affiliate programme works in India in 2026: who's eligible, which retailers take part, how tagging works in videos, Shorts and Live, how commissions are paid, and whether it fits your content.",
    metaDescription:
      "YouTube Shopping for Indian creators: eligibility, participating retailers, product tagging in long-form, Shorts and Live, affiliate commissions and payouts, disclosure, and how to decide if Shopping fits your channel.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["YouTube Shopping India", "YouTube Shopping affiliate", "product tagging", "YouTube affiliate program", "creator commerce"],
    related: ["creator-affiliate-marketing-india", "creator-monetization-india", "creator-revenue-streams-from-brand-content"],
    body: [
      {
        type: "paragraph",
        text: "YouTube Shopping has become one of the fastest-growing income streams for Indian creators. YouTube reports that average affiliate payouts to creators in India grew more than 160% year over year (Q1 2025 to Q1 2026), and that more than half of eligible Indian creators had enrolled in the affiliate programme by May 2026. Here's how it works and how to decide whether it suits your channel.",
      },
      {
        type: "paragraph",
        text: "Details in this guide were checked against YouTube's official help centre and Google's India blog in September 2026. Eligibility, retailers and features change; always confirm in YouTube Studio.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "YouTube Shopping lets eligible creators tag products from participating retailers in long-form videos, Shorts and live streams. Through the YouTube Shopping affiliate programme, creators in India earn a commission when viewers buy tagged products on the retailer's site. To join, your channel must be in the YouTube Partner Program and meet its subscriber threshold, and music channels, Official Artist Channels and channels set as Made for Kids aren't eligible. Commissions are paid through AdSense for YouTube, typically 60 to 120 days after purchase. You must follow YouTube's paid promotion and disclosure rules.",
      },
      { type: "heading", text: "Eligibility", id: "eligibility" },
      {
        type: "list",
        items: [
          "Your channel is in the YouTube Partner Program.",
          "It meets the subscriber threshold YouTube sets for the programme in your YPP tier.",
          "You're based in an eligible country; India is on the list.",
          "Your channel isn't a music channel, an Official Artist Channel or associated with music partners.",
          "Your audience isn't set as Made for Kids, and the channel doesn't have a significant number of made-for-kids videos.",
        ],
      },
      {
        type: "paragraph",
        text: "See YouTube's affiliate programme overview and eligibility page. Once eligible, enrolment is in YouTube Studio under Earn.",
        links: [{ text: "affiliate programme overview and eligibility", href: SOURCES.youtubeShoppingAffiliate }],
      },
      { type: "heading", text: "Participating retailers in India", id: "retailers" },
      {
        type: "paragraph",
        text: "According to Google's India blog, the programme's partners in India include Flipkart, Myntra, Nykaa, Purplle, Shopsy and Tira, with AJIO, Meesho, Snapdeal and Tata CLiQ announced as rolling out. On 23 September 2026, YouTube announced Amazon product tagging for creators in India, along with localised product tags and affiliate campaigns. Which retailers and products appear for your channel, and the commission on each, is shown in YouTube Studio.",
        links: [
          { text: "Google's India blog", href: SOURCES.youtubeShoppingIndia },
          { text: "YouTube announced Amazon product tagging for creators in India", href: SOURCES.madeOnYouTube2026 },
        ],
      },
      { type: "heading", text: "How product tagging works", id: "tagging" },
      {
        type: "table",
        headers: ["Format", "How tagging works", "Tips"],
        rows: [
          ["Long-form videos", "Tag products in YouTube Studio; viewers see them in a product shelf and during the video", "Mention the product when it's on screen; add timestamps"],
          ["Shorts", "Tag products; you can choose which appears as the Shopping product sticker", "Put the main product first; show it clearly in the first seconds"],
          ["Live streams", "Tag during or after the stream; products added later appear in replays", "Plan the product list before going live"],
        ],
      },
      {
        type: "paragraph",
        text: "YouTube's help page on tagging products covers the current limits and steps, including how many products can be tagged.",
        links: [{ text: "YouTube's help page on tagging products", href: SOURCES.youtubeTagProducts }],
      },
      { type: "heading", text: "How commissions are paid", id: "commissions" },
      {
        type: "list",
        items: [
          "A viewer taps a tagged product and buys on the retailer's site.",
          "Commission rates are set per product or retailer and shown in Studio.",
          "Commissions are paid through AdSense for YouTube, typically 60 to 120 days after purchase, to allow for returns.",
          "Returned or cancelled orders don't earn commission.",
          "Commission income may have tax implications; keep records and see TDS for creators.",
        ],
      },
      {
        type: "paragraph",
        text: "YouTube has also announced affiliate campaigns in India, where retailers and brands can offer incentives such as exclusive commission rates or bonuses for content featuring specific products, and tools for brands to boost creators' affiliate content with paid media. Check Studio for what's available to your channel.",
      },
      { type: "heading", text: "Disclosure", id: "disclosure" },
      {
        type: "paragraph",
        text: "YouTube requires creators in the programme to follow its branded content policies and add appropriate disclosures, including the paid product placements and endorsements disclosure where relevant. In India, also follow ASCI's influencer guidelines: make the commercial relationship clear upfront. A simple spoken line helps: \"The products are tagged below; I earn a commission if you buy.\"",
        links: [
          { text: "paid product placements and endorsements disclosure", href: SOURCES.youtubePaidPromotion },
          { text: "ASCI's influencer guidelines", href: SOURCES.asciSocial },
        ],
      },
      { type: "heading", text: "Does YouTube Shopping fit your content?", id: "fit" },
      {
        type: "table",
        headers: ["Good fit", "Weaker fit"],
        rows: [
          ["Reviews, comparisons, hauls, tutorials, setups, fashion and beauty, tech, home", "Commentary, news, entertainment with no products"],
          ["Audience asks \"where did you buy it?\"", "Audience rarely discusses products"],
          ["Products available from participating Indian retailers", "Products mostly unavailable in India or from non-participating sellers"],
          ["Evergreen content that keeps getting views", "Content that's only relevant for a day"],
        ],
      },
      { type: "heading", text: "A simple evaluation plan", id: "evaluation" },
      {
        type: "list",
        items: [
          "Tag products in your 10 most-viewed evergreen videos where products genuinely appear.",
          "Add products to new videos as part of your upload routine.",
          "After 60 to 90 days, look at clicks, orders and confirmed commissions by video.",
          "Double down on formats that convert; don't force tags onto videos where they don't fit.",
          "Keep brand deals and Shopping aligned: don't tag a competitor's product in a sponsored video.",
        ],
      },
      { type: "heading", text: "YouTube Shopping and brand deals", id: "brand-deals" },
      {
        type: "paragraph",
        text: "Shopping and sponsorships can work together: a brand sponsors a video and you tag its product so viewers can buy directly, earning a commission on top of the fee where the product is in the programme. Discuss this upfront with the brand, and make sure product tags don't conflict with exclusivity terms. YouTube Creator Partnerships, available to eligible Indian creators, is YouTube's own tool for managing brand enquiries and media kits.",
        links: [{ text: "YouTube Creator Partnerships", href: SOURCES.youtubeCreatorPartnerships }],
      },
      {
        type: "paragraph",
        text: "Shopping is one of several YouTube income streams; see YouTube creator monetization for the full picture, and creator storefront for bringing recommendations together off YouTube.",
        links: [{ text: "YouTube creator monetization", href: "/blog/youtube-creator-monetization" }, { text: "creator storefront", href: "/blog/creator-storefront" }],
      },
      {
        type: "paragraph",
        text: "For affiliate income beyond YouTube, see creator affiliate marketing in India. For the full income picture, see creator monetization in India.",
        links: [
          { text: "creator affiliate marketing in India", href: "/blog/creator-affiliate-marketing-india" },
          { text: "creator monetization in India", href: "/blog/creator-monetization-india" },
        ],
      },
      {
        type: "paragraph",
        text: "For tagging practice (which products, list order, timestamps, the Shorts sticker and updating old videos), see YouTube product tagging. For affiliate strategy beyond Shopping, including description links and disclosure, see YouTube affiliate marketing.",
        links: [
          { text: "YouTube product tagging", href: "/blog/youtube-product-tagging" },
          { text: "YouTube affiliate marketing", href: "/blog/youtube-affiliate-marketing" },
        ],
      },
    ],
    faqs: [
      {
        question: "Is YouTube Shopping available in India?",
        answer:
          "Yes. India is among the countries eligible for the YouTube Shopping affiliate programme. Creators must be in the YouTube Partner Program and meet its subscriber threshold, and music and Made for Kids channels aren't eligible.",
      },
      {
        question: "Which retailers are part of YouTube Shopping in India?",
        answer:
          "Google's India blog lists Flipkart, Myntra, Nykaa, Purplle, Shopsy and Tira, with AJIO, Meesho, Snapdeal and Tata CLiQ announced as rolling out, and YouTube announced Amazon product tagging for India in September 2026. Check YouTube Studio for what's available to your channel.",
      },
      {
        question: "When are YouTube Shopping commissions paid?",
        answer: "Through AdSense for YouTube, typically 60 to 120 days after the purchase, to account for returns.",
      },
      {
        question: "Can I tag products in YouTube Shorts?",
        answer:
          "Yes. Products can be tagged in Shorts, long-form videos and live streams. In Shorts, you can choose which product appears as the Shopping product sticker.",
      },
    ],
  },
  {
    slug: "creator-revenue-streams-from-brand-content",
    category: "Creator Resources",
    title: "How Creators Can Turn Brand Content Into Multiple Revenue Streams",
    seoTitle: "How to Turn Brand Content Into Multiple Revenue Streams",
    excerpt:
      "One brand collaboration can pay more than once: through usage extensions, whitelisting, affiliate commissions, UGC cut-downs, licensing and renewals. Here's how to stack revenue around brand content, fairly and in writing.",
    metaDescription:
      "How creators can turn brand content into multiple revenue streams: usage extensions, whitelisting, affiliate and YouTube Shopping on sponsored products, UGC versions, licensing, renewals, and how this fits brand, audience, commerce and creator-owned income.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "10 min read",
    tags: ["creator revenue streams", "multiple income streams", "monetize brand content", "usage extension", "content licensing"],
    related: ["creator-monetization-india", "creator-content-licensing", "creator-affiliate-marketing-india"],
    body: [
      {
        type: "paragraph",
        text: "Most creators are paid once per brand collaboration: make the Reel, post it, invoice, move on. But the content often keeps working for the brand, as an ad, on a product page, in a sale campaign. There are fair, transparent ways for you to keep earning from it too.",
      },
      {
        type: "paragraph",
        text: "This guide is about getting more value from brand content specifically. For a full map of income streams, including memberships, digital products and courses, see creator monetization in India.",
        links: [{ text: "creator monetization in India", href: "/blog/creator-monetization-india" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creators can turn one piece of brand content into several revenue lines by pricing usage extensions, whitelisting and raw footage separately, adding affiliate or YouTube Shopping commissions on the sponsored product where allowed, offering UGC cut-downs for the brand's ads, licensing the content for new uses, and converting successful one-off deals into retainers. The key is to agree each use in writing and price it visibly, so the brand pays for the value it actually gets.",
      },
      { type: "heading", text: "The four income types, briefly", id: "four-types" },
      {
        type: "table",
        headers: ["Income type", "Examples", "Guide"],
        rows: [
          ["Brand monetization", "Sponsorships, UGC, licensing, whitelisting", "Creator brand deals"],
          ["Commerce monetization", "Affiliate links, YouTube Shopping", "Creator affiliate marketing"],
          ["Audience monetization", "Memberships, subscriptions, ticketed events", "Creator monetization in India"],
          ["Creator-owned business", "Digital products, courses, consulting, merchandise", "Creator monetization in India"],
        ],
      },
      {
        type: "paragraph",
        text: "Brand content mostly generates the first two types. See the creator brand deals guide and creator affiliate marketing.",
        links: [
          { text: "creator brand deals guide", href: "/blog/creator-brand-deals" },
          { text: "creator affiliate marketing", href: "/blog/creator-affiliate-marketing-india" },
        ],
      },
      { type: "heading", text: "Seven ways one collaboration can pay more than once", id: "seven-ways" },
      { type: "subheading", text: "1. Usage extensions" },
      {
        type: "paragraph",
        text: "If your agreement grants 60 days of paid usage and the ad is performing, offer an extension before it expires. It's one of the easiest renewals to sell because the brand already knows the content works.",
      },
      { type: "subheading", text: "2. Whitelisting" },
      {
        type: "paragraph",
        text: "Running ads through your handle is worth more than running them from the brand's account. Price it as a separate line. See creator whitelisting.",
        links: [{ text: "creator whitelisting", href: "/blog/creator-whitelisting" }],
      },
      { type: "subheading", text: "3. UGC cut-downs and variations" },
      {
        type: "paragraph",
        text: "Offer 6, 15 and 30-second versions, alternate hooks or vertical and square edits for the brand's ads. It's extra production, priced as UGC.",
      },
      { type: "subheading", text: "4. Raw footage" },
      {
        type: "paragraph",
        text: "Unedited clips let a brand create many assets. List raw footage as an add-on with its own usage terms.",
      },
      { type: "subheading", text: "5. Affiliate or Shopping commissions on the sponsored product" },
      {
        type: "paragraph",
        text: "Where the brand agrees and the product is in an affiliate programme (including YouTube Shopping), add a tracked link or product tag so you earn on sales as well as the fee. Disclose both the sponsorship and the affiliate link. See YouTube Shopping for Indian creators.",
        links: [{ text: "YouTube Shopping for Indian creators", href: "/blog/youtube-shopping-india-creators" }],
      },
      { type: "subheading", text: "6. Licensing to new uses" },
      {
        type: "paragraph",
        text: "Website, e-commerce listings, email, in-store screens or new territories are new licences, not free extras. See creator content licensing.",
        links: [{ text: "creator content licensing", href: "/blog/creator-content-licensing" }],
      },
      { type: "subheading", text: "7. Turning a one-off into a retainer" },
      {
        type: "paragraph",
        text: "After two or three successful deals, propose a monthly arrangement. Recurring income is more valuable than a slightly higher one-off fee.",
      },
      {
        type: "paragraph",
        text: "For sales-driven income beyond brand deals, see creator commerce in India.",
        links: [{ text: "creator commerce in India", href: "/blog/creator-commerce-india" }],
      },
      { type: "heading", text: "Illustrative example", id: "example" },
      {
        type: "template",
        label: "One sunscreen Reel, several revenue lines (hypothetical)",
        text: "Month 1: Reel + Story set, 30 days organic reposting ........ creation fee\nMonth 1: YouTube Short cross-post with product tag ............ commissions (if eligible)\nMonth 2: Paid usage on Meta ads, 60 days ....................... usage fee\nMonth 2: Partnership ads through @handle, 60 days .............. whitelisting fee\nMonth 2: 3 cut-downs with new hooks for ads .................... UGC production fee\nMonth 4: Usage extension, 90 days .............................. extension fee\nMonth 6: 6-month ambassador retainer ........................... monthly fee\n\nEach line agreed and priced separately, in writing.",
      },
      { type: "heading", text: "Keeping it fair and trusted", id: "fair" },
      {
        type: "list",
        items: [
          "Be transparent: every extra use is a visible, priced line, not a surprise.",
          "Don't re-license content to a competitor while an exclusivity period is active.",
          "Disclose sponsorships and affiliate links clearly to your audience.",
          "Don't flood your audience with the same sponsored content across every format.",
        ],
      },
      { type: "heading", text: "Set it up in your rate card and contracts", id: "setup" },
      {
        type: "list",
        items: [
          "List add-ons (usage, whitelisting, raw footage, cut-downs, extensions) on your rate card.",
          "Put usage periods and renewal prices in every agreement.",
          "Track expiry dates in your campaign tracker and offer extensions two weeks before.",
        ],
      },
      {
        type: "paragraph",
        text: "See influencer rate card, creator usage rights and the creator workflow for tracking expiries.",
        links: [
          { text: "influencer rate card", href: "/blog/influencer-rate-card-india" },
          { text: "creator usage rights", href: "/blog/creator-usage-rights" },
          { text: "creator workflow", href: "/blog/creator-workflow" },
        ],
      },
    ],
    faqs: [
      {
        question: "How can creators earn more from one brand collaboration?",
        answer:
          "By pricing usage extensions, whitelisting, raw footage and ad cut-downs separately, adding affiliate or Shopping commissions where allowed, licensing content for new uses, and turning successful deals into retainers.",
      },
      {
        question: "Is it fair to charge brands again for extended usage?",
        answer:
          "Yes, if the original agreement defined a usage period. Extending it gives the brand more value, so a renewal fee is standard practice when agreed transparently.",
      },
      {
        question: "Can I add an affiliate link to sponsored content?",
        answer: "Only if the brand agrees and the product is in an affiliate programme. Disclose both the sponsorship and the affiliate relationship.",
      },
    ],
  },
];
