import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_CLUSTER_PUBLISHED, SOURCES } from "@/content/creator-resources/shared";

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
    title: "YouTube Shopping in India: Eligibility, Payouts and How to Pick Products That Sell",
    seoTitle: "YouTube Shopping India: Eligibility, Payouts and What to Tag",
    excerpt:
      "A creator's guide to the YouTube Shopping affiliate programme in India: who qualifies, which retailers are live, how commission and AdSense payouts work, and a framework for choosing products your viewers will actually buy.",
    metaDescription:
      "YouTube Shopping in India, explained for creators: eligibility, live retailers, Amazon tags, payouts via AdSense, and how to choose products your viewers buy.",
    author: { name: "Kudozz Partnerships Team", role: "Creator Partnerships" },
    publishedAt: "2026-09-28",
    updatedAt: "2026-11-10",
    lastReviewed: "November 2026",
    readingTime: "11 min read",
    tags: ["YouTube Shopping India", "YouTube Shopping affiliate", "product tagging", "YouTube affiliate program", "Affiliate Partnerships Boost", "creator commerce"],
    related: ["youtube-product-tagging", "youtube-affiliate-marketing", "youtube-creator-partnerships-india", "youtube-creator-monetization", "creator-affiliate-marketing-india"],
    body: [
      {
        type: "paragraph",
        text: "You've seen the yellow Shopping button under other creators' videos and wondered whether it's worth the effort on your channel. The honest answer depends on two things: whether you're eligible, and whether you tag products your viewers were already close to buying. This guide covers both, with the official rules as of November 2026 and a practical way to choose what to tag.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "The YouTube Shopping affiliate programme lets eligible Indian creators tag products from participating retailers such as Flipkart, Myntra and Nykaa in videos, Shorts and live streams. When a viewer buys through a tag, you earn the commission the retailer sets for that product, paid through AdSense for YouTube 60 to 120 days after purchase. Returns reverse the commission. You need to be in the YouTube Partner Program and meet the subscriber threshold YouTube shows in Studio. Products you genuinely use, at prices your audience pays, convert best.",
      },
      { type: "heading", text: "What YouTube Shopping affiliate is and how earning works", id: "how-it-works" },
      {
        type: "paragraph",
        text: "YouTube Shopping affiliate is a commission programme run inside YouTube Studio. Retailers list products, you tag the ones that appear in your content, and viewers see those products in a Shopping button, product list or Shorts sticker. If they buy, you earn a share of that sale. According to YouTube's affiliate programme overview, each brand or retailer sets its own commission rate and attribution window per product, and you can see both on the offer before you tag it.",
        links: [{ text: "YouTube's affiliate programme overview", href: "https://support.google.com/youtube/answer/13376398" }],
      },
      {
        type: "list",
        items: [
          "Rates: set by the merchant per product and shown on each offer in Studio. YouTube does not publish fixed percentages.",
          "Custom campaigns: merchants may offer higher rates for specific campaigns. Joining them is optional.",
          "Payout: through AdSense for YouTube, 60 to 120 days after the purchase.",
          "Returns: if the buyer returns the product, the commission is reversed.",
          "Temporary incentive: the overview page describes a period where 100% of the merchant's commission is passed to creators, with at least 30 days' notice before rates drop. Check whether it applies to the offers you see.",
        ],
      },
      {
        type: "paragraph",
        text: "Commission is business income, so keep a simple record of what lands in AdSense each month. TDS for influencers in India explains the tax side.",
        links: [{ text: "TDS for influencers in India", href: "/blog/tds-for-influencers-india" }],
      },
      { type: "heading", text: "Eligibility", id: "eligibility" },
      {
        type: "paragraph",
        text: "YouTube's get started with Shopping page and the overview page list these requirements. Neither page gives a subscriber number; they say your channel must meet the YPP subscriber threshold.",
        links: [{ text: "get started with Shopping page", href: "https://support.google.com/youtube/answer/12257682?hl=en-IN" }],
      },
      {
        type: "table",
        headers: ["Requirement", "What the help pages say"],
        rows: [
          ["Programme", "Your channel is in the YouTube Partner Program"],
          ["Subscribers", "Meets the YPP subscriber threshold (no number stated on the help page)"],
          ["Country", "India is listed, alongside the US, South Korea, Indonesia, Thailand, Vietnam, Malaysia, the Philippines, Singapore, Brazil, Taiwan and Japan"],
          ["Channel type", "Not a music channel, Official Artist Channel, or channel tied to music partners such as labels or distributors"],
          ["Audience setting", "Not set to Made for Kids, and no significant number of Made for Kids videos"],
          ["Standing", "No active Community Guidelines strikes"],
        ],
      },
      {
        type: "paragraph",
        text: "The number has changed over time. When the programme launched in India in October 2024, TechCrunch reported that creators needed YPP membership plus at least 10,000 subscribers. Reports of a lower threshold since then are unverified, so don't rely on any figure you read online, including this one. Open YouTube Studio, go to Earn, and check whether Shopping appears for your channel.",
        links: [{ text: "TechCrunch reported", href: "https://techcrunch.com/2024/10/24/youtube-brings-its-affilate-program-to-india-partners-with-walmart-owned-flipkart/" }],
      },
      { type: "heading", text: "Participating retailers in India", id: "retailers" },
      {
        type: "paragraph",
        text: "The programme launched in India with Flipkart and Myntra, according to Google's India launch post from October 2024. In September 2026, Google's India blog post on helping creators build businesses on YouTube Shopping listed the current partners and the next wave.",
        links: [
          { text: "Google's India launch post", href: "https://blog.google/intl/en-in/products/platforms/youtube-shopping-affiliate-program-arrives-in-india/" },
          { text: "helping creators build businesses on YouTube Shopping", href: "https://blog.google/intl/en-in/products/platforms/helping-indian-creators-build-thriving-businesses-on-youtube-shopping/" },
        ],
      },
      {
        type: "table",
        headers: ["Retailer", "Status", "Source and date"],
        rows: [
          ["Flipkart, Myntra", "Live (launch partners)", "Google India blog, Oct 2024"],
          ["Nykaa, Purplle, Shopsy, Tira", "Live (\"already in the program\")", "Google India blog, Sep 2026"],
          ["AJIO, Meesho, Snapdeal, Tata CLiQ", "Announced as \"set to roll out soon\"; not confirmed live as of November 2026", "Google India blog, Sep 2026"],
          ["Amazon", "Announced for India \"in the coming weeks\" in Sep 2026; India is now listed on the Amazon tagging help page", "YouTube blog, 23 Sep 2026; YouTube Help"],
        ],
      },
      {
        type: "paragraph",
        text: "The help pages don't name merchants. The list that actually applies to you is in Studio under Earn, then Shopping, then Explore affiliate offers.",
      },
      { type: "subheading", text: "Amazon product tags" },
      {
        type: "paragraph",
        text: "YouTube announced at Made On YouTube 2026 that Amazon tagging would expand to India and Brazil. The Amazon tagging help page now lists India as eligible. It requires YPP and affiliate enrolment and supports auto-tagging. One difference matters for your monthly review: Amazon analytics are aggregate only, showing daily revenue, clicks and sales without a per-video or per-product breakdown. Amazon commissions lock monthly and are paid in a later AdSense cycle, so January earnings arrive around March.",
        links: [
          { text: "announced at Made On YouTube 2026", href: "https://blog.youtube/news-and-events/made-on-youtube-creator-monetization-shopping/" },
          { text: "Amazon tagging help page", href: "https://support.google.com/youtube/answer/17105501" },
        ],
      },
      { type: "heading", text: "Tagging on videos, Shorts and Live", id: "tagging" },
      {
        type: "paragraph",
        text: "You can tag products in long-form videos, Shorts and live streams, and viewers can shop on mobile, web and connected TV. YouTube's tagging help page sets a limit of 60 products per video or Short.",
        links: [{ text: "YouTube's tagging help page", href: "https://support.google.com/youtube/answer/10191533" }],
      },
      {
        type: "table",
        headers: ["Format", "How tags appear", "What to do"],
        rows: [
          ["Long-form", "Shopping button plus tags in the description. Timestamps on videos of 1 minute or more, each lasting 15 to 60 seconds, added on desktop", "Add a timestamp when each product is on screen"],
          ["Shorts", "A product sticker shows the first tagged product; you can reorder the list", "Put the product the Short is about first"],
          ["Live", "Tag and pin products during the stream; pinning several at once is desktop only", "Prepare the product list before you go live"],
        ],
      },
      {
        type: "paragraph",
        text: "The live tagging help page doesn't state a product limit for streams, so check in Studio rather than trusting third-party numbers. YouTube also says product tags now show localised offers based on the viewer's location. For list order, timestamps and refreshing old uploads, see our YouTube product tagging tips.",
        links: [
          { text: "live tagging help page", href: "https://support.google.com/youtube/answer/12299016" },
          { text: "YouTube product tagging tips", href: "/blog/youtube-product-tagging" },
        ],
      },
      { type: "heading", text: "How to choose products that actually convert", id: "choose-products" },
      {
        type: "paragraph",
        text: "Sixty tags is a ceiling, not a target. Viewers buy when the product solves a problem they recognise, at a price they already pay, from someone they trust on that topic. Run every product through these six checks before tagging it.",
      },
      {
        type: "table",
        headers: ["Check", "Question to ask", "Red flag"],
        rows: [
          ["Audience fit", "Do my comments and DMs ask about this kind of product?", "You're tagging it only because the commission rate looks good"],
          ["You actually use it", "Have I used it long enough to show real pros and cons?", "You unboxed it on camera for the first time"],
          ["Price band", "Is the price close to what my viewers usually spend in this category?", "A ₹40,000 phone on a channel where viewers ask for under-₹1,000 picks"],
          ["Problem-solution fit", "Does the video show the problem this product fixes?", "The product appears in the background with no context"],
          ["Format fit", "Does this product need a demo, a comparison or just a quick show?", "A skincare routine squeezed into a 10-second Short"],
          ["Tag count", "Would a viewer know which tag to tap?", "Twenty loosely related tags on a five-minute video"],
        ],
      },
      { type: "subheading", text: "Match the price band to your audience" },
      {
        type: "paragraph",
        text: "Your analytics show where viewers are and what they watch, but your comments show what they can afford. A budget-beauty creator in Indore and a premium-tech reviewer in Bengaluru may have similar subscriber counts and completely different baskets. If you're unsure, tag one budget and one mid-range option for the same need and let the Affiliate tab tell you which one your audience picks.",
      },
      { type: "subheading", text: "Choose the content format by product type" },
      {
        type: "table",
        headers: ["Product type", "Format that tends to suit it", "Why"],
        rows: [
          ["Gadgets, appliances", "Long-form review or comparison", "Viewers want specs, trade-offs and real use"],
          ["Skincare, haircare", "Tutorial or routine, then a follow-up after a few weeks", "Results take time; a follow-up builds trust"],
          ["Fashion, accessories", "Haul, styling Short, or \"what I wore this week\"", "Visual, quick decisions, sizes matter"],
          ["Kitchen and home", "Tutorial or \"what I use\" setup tour", "Seeing it in use answers most questions"],
          ["Festive and gifting", "Gift guide by budget before Diwali, Rakhi or wedding season", "Viewers are already planning purchases"],
        ],
      },
      { type: "subheading", text: "Avoid over-tagging" },
      {
        type: "list",
        items: [
          "Tag what appears or is discussed in the video. Unrelated tags look like spam and make the shelf harder to use.",
          "On Shorts, keep the main product first so the sticker matches what's on screen.",
          "Don't tag a competitor's product in a sponsored video. Check exclusivity clauses before tagging anything in a brand deal.",
          "If a product disappoints you, untag it. One honest \"I stopped using this\" protects every future recommendation.",
        ],
      },
      {
        type: "paragraph",
        text: "For how exclusivity clauses work, see creator exclusivity in brand deals.",
        links: [{ text: "creator exclusivity in brand deals", href: "/blog/creator-exclusivity" }],
      },
      { type: "heading", text: "Content formats that suit tagging", id: "formats" },
      {
        type: "list",
        items: [
          "Honest review: one product, what it does well, where it falls short, who should skip it.",
          "Comparison: two or three options in the same price band, with a clear \"pick this if\" for each.",
          "\"What I use\": your desk setup, travel kit, kitchen or skincare shelf. Evergreen and easy to keep tags updated.",
          "Tutorial: the product is the tool for a result (a recipe, a hairstyle, a phone camera setting).",
          "Haul: works for fashion and beauty when you show fit, texture or size honestly, not just the packaging.",
        ],
      },
      {
        type: "template",
        label: "Product selection worksheet (copy for each video)",
        text: "Video idea:\nViewer problem it solves:\nProduct 1: ___ | Used for ___ weeks | Price ₹___ | Retailer ___ | Commission shown in Studio ___%\nWould I recommend it with no commission? Yes / No\nFormat: review / comparison / what I use / tutorial / haul\nWhere it appears in the video (timestamp):\nTotal tags planned (keep it to what's on screen):\nSponsored video? If yes, any exclusivity conflict?\nDisclosure line I'll say on camera:",
      },
      { type: "heading", text: "Reading the Affiliate analytics tab", id: "analytics" },
      {
        type: "paragraph",
        text: "In YouTube Studio, go to Analytics, then Revenue, then the Affiliate tab. According to YouTube's affiliate analytics help page, it shows estimated revenue, earned revenue, total sales, orders and product clicks, with cards for top content, top tagged products and top sellers. Advanced mode breaks results down by product, content, geography and seller. Earnings are typically finalised in two to three months, and AdSense is the final word on what you're paid.",
        links: [{ text: "YouTube's affiliate analytics help page", href: "https://support.google.com/youtube/answer/16322165" }],
      },
      {
        type: "table",
        headers: ["Metric", "What it tells you", "What to do"],
        rows: [
          ["Product clicks", "Whether viewers are interested enough to tap", "High views but few clicks: show the product more clearly or explain it"],
          ["Orders", "Whether interest becomes a purchase", "Many clicks but few orders: check price, stock, ratings on the retailer page"],
          ["Total sales", "The basket value, which can include other items", "Useful for spotting which retailers bring bigger baskets"],
          ["Earned revenue", "Commission after it's confirmed", "Your real number for planning; estimated revenue can still change"],
          ["By video / product / seller", "Which content and products carry the results", "Make more of what works; untag what never gets clicked"],
        ],
      },
      {
        type: "template",
        label: "Monthly Shopping review (20 minutes)",
        text: "1. Affiliate tab, last 28 days: note product clicks, orders, earned revenue\n2. Top 5 videos by clicks: is the tagged product clearly shown? Add timestamps if missing\n3. Top 5 products: do I have a newer video that should also tag them?\n4. Zero-click tags older than 60 days: remove or replace\n5. Out-of-stock or discontinued products: swap for a current equivalent\n6. Upcoming sale or festival: plan one gift guide or comparison\n7. Cross-check last cycle's payout in AdSense",
      },
      {
        type: "paragraph",
        text: "Clicks and orders are only part of the picture; YouTube analytics for creators explains how retention and traffic sources affect what you see here.",
        links: [{ text: "YouTube analytics for creators", href: "/blog/youtube-analytics-for-creators" }],
      },
      { type: "heading", text: "Affiliate Partnerships Boost: what it means for you", id: "affiliate-boost" },
      {
        type: "paragraph",
        text: "Affiliate Partnerships Boost lets brands and sellers whose products you've tagged run your shoppable videos as ads. YouTube's Affiliate Partnerships Boost help page lists India among the eligible markets, and Google's India blog described it as recently launched in September 2026. It's opt-in: in Studio go to Earn, then Shopping, then Affiliate boost, and sign the Affiliate Boost terms.",
        links: [{ text: "Affiliate Partnerships Boost help page", href: "https://support.google.com/youtube/answer/16984119" }],
      },
      {
        type: "list",
        items: [
          "You earn commission on purchases the ads drive, at the same rates as organic sales.",
          "Eligibility: YPP, not music or Official Artist Channel, not Made for Kids, and enrolled in affiliate with a contract you signed yourself rather than through a Content Owner.",
          "Brands get broad metrics and aggregated audience insights, and can turn on comments on their ad placements.",
          "You get an email when an advertiser picks your video.",
          "To stop it, remove that advertiser's tags from a video or switch it off for the whole channel under Advanced settings.",
          "Analytics, Advanced mode, Organic vs. Paid shows which results came from ads.",
        ],
      },
      {
        type: "paragraph",
        text: "Before opting in, ask yourself whether you're comfortable with your face and voice appearing as an ad for that brand. If a brand wants more than commission-based boosting, such as a fee, a fixed duration or use outside YouTube, that's a separate deal. See creator whitelisting for how paid usage is usually priced.",
        links: [{ text: "creator whitelisting", href: "/blog/creator-whitelisting" }],
      },
      { type: "heading", text: "YouTube Shopping and brand deals", id: "brand-deals" },
      {
        type: "paragraph",
        text: "Shopping and sponsorships can sit together. A brand might sponsor a video and you tag its product so viewers can buy directly. Agree this with the brand upfront, and make sure tags don't break exclusivity terms. Sponsored deals found through YouTube's own brand tool work differently from affiliate commission: the brand pays you directly under your own contract. Our guide to YouTube Creator Partnerships in India covers that side.",
        links: [{ text: "YouTube Creator Partnerships in India", href: "/blog/youtube-creator-partnerships-india" }],
      },
      { type: "heading", text: "Disclosure", id: "disclosure" },
      {
        type: "paragraph",
        text: "The tagging help page asks creators to add appropriate disclosures, including YouTube's paid product placement disclosure, and to follow the branded content policy. On the YouTube paid promotion page, the setting is under Details, Show more, Paid promotion. In India, ASCI's influencer guidelines expect the commercial link to be clear to viewers. Say it plainly and early, and don't overclaim results.",
        links: [
          { text: "YouTube paid promotion page", href: "https://support.google.com/youtube/answer/154235" },
          { text: "ASCI's influencer guidelines", href: "https://www.ascionline.in/social/" },
        ],
      },
      {
        type: "template",
        label: "Simple disclosure lines",
        text: "Spoken (start of video): \"Products I use are tagged below. If you buy through them, I earn a small commission at no extra cost to you.\"\nHindi/Hinglish: \"Neeche products tagged hain. Aap unse kharidte ho toh mujhe commission milta hai.\"\nSponsored + tagged: \"This video is sponsored by [brand], and their product is tagged below.\"\nAvoid: \"guaranteed results\", \"best in India\", or medical-style claims you can't back up.",
      },
      {
        type: "paragraph",
        text: "Our creator disclosure guide covers ASCI labels, placement and gifted products in more detail.",
        links: [{ text: "creator disclosure guide", href: "/blog/creator-disclosure-guide" }],
      },
      { type: "heading", text: "Does YouTube Shopping fit your content?", id: "fit" },
      {
        type: "table",
        headers: ["Good fit", "Weaker fit"],
        rows: [
          ["Reviews, comparisons, tutorials, setups, fashion, beauty, tech, kitchen, home", "News, commentary or entertainment where no products appear"],
          ["Viewers ask \"where did you buy it?\" or \"link please\"", "Viewers rarely discuss products"],
          ["Products sold by participating Indian retailers", "Products mostly unavailable from participating sellers"],
          ["Evergreen videos that keep getting views", "Content relevant for a day"],
        ],
      },
      { type: "heading", text: "A simple 90-day plan", id: "evaluation" },
      {
        type: "list",
        items: [
          "Week 1: tag products in your ten most-viewed evergreen videos where products genuinely appear.",
          "Every upload: run the product selection worksheet before you publish.",
          "Month 1 and 2: do the monthly review; fix videos with views but no clicks.",
          "Day 90: compare earned revenue by format. Make more of the format that works and stop forcing tags where they don't fit.",
        ],
      },
      {
        type: "paragraph",
        text: "Shopping is one of several income streams. YouTube creator monetization gives the full picture, and YouTube affiliate marketing covers description links and programmes outside Shopping.",
        links: [
          { text: "YouTube creator monetization", href: "/blog/youtube-creator-monetization" },
          { text: "YouTube affiliate marketing", href: "/blog/youtube-affiliate-marketing" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "YouTube Shopping is live in India with Flipkart, Myntra, Nykaa, Purplle, Shopsy and Tira, Amazon tagging now listed for India, and more retailers announced. Check your eligibility in Studio rather than trusting a number online. Then tag fewer, better products: things you use, at prices your viewers pay, shown in a format that answers their questions. Review the Affiliate tab monthly and disclose every tag clearly.",
      },
    ],
    faqs: [
      {
        question: "How many subscribers do I need for YouTube Shopping in India?",
        answer:
          "YouTube's help pages say you must be in YPP and meet the YPP subscriber threshold, without giving a number. At the October 2024 India launch it was 10,000 subscribers (TechCrunch). The figure may have changed, so check Earn in YouTube Studio for your channel.",
      },
      {
        question: "How much commission will I get per sale?",
        answer:
          "It depends on the product. Each retailer sets its own rate and attribution window, shown on the offer in Studio before you tag it. YouTube doesn't publish standard percentages, and returned orders reverse the commission.",
      },
      {
        question: "Why am I getting clicks but no sales?",
        answer:
          "Usually the price, stock or reviews on the retailer page put viewers off, or the product doesn't match your audience's budget. Check the product page yourself, try a lower-priced alternative for the same need, and make sure the video shows why the product is worth buying.",
      },
      {
        question: "Can I tag Amazon products on YouTube in India?",
        answer:
          "YouTube's Amazon tagging help page lists India as eligible, following a September 2026 announcement. You need YPP and affiliate enrolment. Analytics for Amazon tags are aggregate only, without per-video breakdowns.",
      },
      {
        question: "Does Affiliate Partnerships Boost cost me anything?",
        answer:
          "No fee is described. Brands pay for the ads and you earn commission on sales they drive at your usual rates. It's opt-in, and you can switch it off channel-wide or remove a specific advertiser's tags.",
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
