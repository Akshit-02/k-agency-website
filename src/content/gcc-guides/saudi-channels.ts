import type { BlogPost } from "@/content/blog";
import { AUTHOR, GCC2_PUBLISHED, GCC_LANGUAGE, GCC_REVIEWED, REVIEW_DATE_TEXT, SAUDI_HUB, SRC } from "@/content/gcc-guides/shared";

/** Topics 1425–1428: TikTok, Snapchat, beauty and e-commerce in Saudi Arabia. Each built around its own buying path. */
export const saudiChannelPosts: BlogPost[] = [
  // 1425
  {
    slug: "tiktok-influencer-marketing-saudi-arabia",
    category: "Campaign Strategy",
    title: "TikTok Influencer Marketing in Saudi Arabia: From Discovery to Conversions",
    seoTitle: "TikTok Influencer Marketing in Saudi Arabia: Brand Guide",
    excerpt:
      "How brands can use TikTok creators in Saudi Arabia: where TikTok fits in the funnel, formats that work, choosing and briefing Saudi creators, boosting creator videos as ads, tracking conversions without assuming in-app shopping, and reporting.",
    metaDescription:
      "TikTok influencer marketing in Saudi Arabia: objectives, formats, creator selection and briefs, boosting creator videos as ads, tracking and reporting.",
    author: AUTHOR,
    publishedAt: GCC2_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "10 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "Saudi Arabia",
    breadcrumbParents: [SAUDI_HUB],
    tags: ["TikTok influencer marketing Saudi Arabia", "TikTok creators Saudi Arabia", "TikTok campaigns KSA", "TikTok marketing Riyadh"],
    related: ["snapchat-influencer-marketing-saudi-arabia", "influencer-marketing-saudi-arabia", "influencer-marketing-ecommerce-brands-saudi-arabia"],
    hero: {
      src: "/blog/gcc-guides/tiktok-influencer-marketing-saudi-arabia.svg",
      alt: "TikTok creator campaign path in Saudi Arabia: hook and discovery, demonstration, creator video boosted as an ad, tracked click and conversion",
    },
    body: [
      {
        type: "paragraph",
        text: "TikTok's advertising audience in Saudi Arabia is larger than the Kingdom's adult population, according to the platform's own ad tools as reported by DataReportal. That figure says more about duplicate and secondary accounts than about real people, but the direction is clear: TikTok is where many Saudi consumers discover products, places and trends. The challenge for brands is turning that discovery into results they can measure.",
        links: [{ text: "as reported by DataReportal", href: SRC.datareportalKsa.url }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "TikTok influencer marketing in Saudi Arabia works best for discovery and demonstration: Saudi creators showing a product, place or app in a native, entertaining way that earns attention in the first seconds. Choose creators by the share of their audience in Saudi Arabia and their fit with the category, brief them with a problem and a few must-haves rather than a script, run the best videos as ads through TikTok's creator-ad tools where available to your account, and track with unique links, codes and app attribution. Don't plan around in-app shopping in Saudi Arabia without confirming it's available to your business. Creators need a Mawthooq licence and must disclose the ad.",
      },
      { type: "heading", text: "Where TikTok fits", id: "role" },
      {
        type: "table",
        headers: ["Objective", "TikTok's role", "Better paired with"],
        rows: [
          ["Awareness and launch", "Strong: fast reach through native, trend-aware videos", "A few larger creators for scale"],
          ["Consideration", "Good for demonstrations and honest reviews", "YouTube for longer reviews"],
          ["Sales", "Works when videos lead to a clear next step and are boosted to the right audience", "Tracked links, codes, landing pages"],
          ["App installs", "Strong for showing an app solving a problem", "Mobile measurement links"],
          ["Local footfall", "Useful for venues and events, especially in Riyadh and Jeddah", "Snapchat for day-to-day local recommendations"],
        ],
      },
      {
        type: "paragraph",
        text: "TikTok and Snapchat do different jobs in Saudi campaigns: TikTok for reach and discovery, Snapchat for trusted, repeated recommendation from people the audience already follows. The Snapchat side is covered in Snapchat influencer marketing in Saudi Arabia, and the path from video to delivered order in influencer marketing for e-commerce brands in Saudi Arabia.",
        links: [
          { text: "Snapchat influencer marketing in Saudi Arabia", href: "/blog/snapchat-influencer-marketing-saudi-arabia" },
          { text: "influencer marketing for e-commerce brands in Saudi Arabia", href: "/blog/influencer-marketing-ecommerce-brands-saudi-arabia" },
        ],
      },
      { type: "heading", text: "Formats that work for brands", id: "formats" },
      {
        type: "list",
        items: [
          "Demonstrations: the product in use, start to finish, with the result shown",
          "Problem and solution: a recognizable Saudi everyday situation, then the product",
          "Honest reviews and first impressions, including what the creator didn't like",
          "Trends and sounds adapted to the brand, where they genuinely fit",
          "Series: several connected videos over a few weeks rather than one post",
          "Places and experiences: visits to venues, events and destinations",
          "Lives: Q&As or launches, where the creator's audience joins live",
        ],
      },
      {
        type: "paragraph",
        text: "Planning a live session, including moderation and what commerce features are actually available, is covered in influencer livestream campaigns in the GCC.",
        links: [{ text: "influencer livestream campaigns in the GCC", href: "/blog/influencer-livestream-campaigns-gcc" }],
      },
      {
        type: "paragraph",
        text: "The hook matters more on TikTok than almost anywhere else. Ask creators to lead with the most interesting moment and keep brand messaging in the creator's own words.",
      },
      { type: "heading", text: "Choosing Saudi TikTok creators", id: "creators" },
      {
        type: "table",
        headers: ["Check", "Why"],
        rows: [
          ["Share of audience in Saudi Arabia, by city if available", "Many Arabic TikTok creators have large audiences in Egypt, Iraq or the Levant"],
          ["Average views over the last 15 to 20 videos", "TikTok views vary sharply; one viral video can mislead"],
          ["Comment quality and dialect", "Real Saudi viewers comment in Saudi Arabic and ask real questions"],
          ["Category credibility", "Creators who already talk about the category convert better"],
          ["Sponsored frequency", "Too many ads in a row lowers trust"],
          ["Mawthooq licence and registered account", "Required for paid promotion in Saudi Arabia"],
        ],
      },
      { type: "heading", text: "Briefing for TikTok", id: "brief" },
      {
        type: "list",
        items: [
          "Give the problem, the audience and three must-haves at most; let the creator decide how to tell it",
          "Specify the first-frame requirement if any (for example the product visible early), not a full script",
          "Agree disclosure in Arabic, plus TikTok's branded-content setting where the account uses it",
          "Agree whether you'll run the video as an ad, for how long, and how the creator will authorize it",
          "Share approved claims, prices and offer terms in writing",
        ],
      },
      { type: "heading", text: "Boosting creator videos as ads", id: "paid" },
      {
        type: "paragraph",
        text: "TikTok lets advertisers run a creator's post as an ad from the creator's account, with the creator's authorization, and offers tools for finding and contracting creators. Feature names and availability vary by account and market, so confirm what's enabled in your Saudi ad account before planning around them. Agree the authorization period and any extra fee in the contract, and test several creator videos against each other rather than boosting the one you like best.",
      },
      { type: "heading", text: "Tracking conversions", id: "tracking" },
      {
        type: "list",
        items: [
          "Unique link per creator to a landing page in Arabic that matches the video",
          "Unique code per creator for buyers who don't click",
          "For apps, links from your mobile measurement partner, with deep links where supported",
          "TikTok's own conversion reporting for boosted videos, alongside your site or app analytics",
          "Branded search and direct traffic during the campaign window as a broader signal",
        ],
      },
      {
        type: "paragraph",
        text: `Checked ${REVIEW_DATE_TEXT}: we couldn't confirm an official launch of TikTok's in-app shop for Saudi sellers and affiliates, and published guides disagree. Don't build a Saudi plan on in-app checkout unless TikTok confirms availability for your business; plan for links to your own store or marketplace listings instead.`,
      },
      { type: "heading", text: "Reporting", id: "reporting" },
      {
        type: "table",
        headers: ["Metric", "Definition", "Use"],
        rows: [
          ["Views", "Times the video was played", "Reach indicator; compare by creator"],
          ["Average watch time and completion", "How much of the video viewers watched", "Creative quality, hook strength"],
          ["Engagement rate", "(Likes + comments + shares + saves) ÷ views × 100", "Response relative to reach"],
          ["Click-through rate", "Clicks ÷ views × 100 (or ÷ impressions for ads)", "Whether the video drives action"],
          ["Cost per result", "Total creator and media cost ÷ conversions", "Comparing creators and paid vs organic"],
        ],
      },
      {
        type: "paragraph",
        text: "Report organic and boosted results separately, and Saudi results separately from other markets. Comparing across Gulf countries is covered in GCC influencer campaign reporting.",
        links: [{ text: "GCC influencer campaign reporting", href: "/blog/gcc-influencer-campaign-reporting" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Choosing Arabic creators whose audiences are mostly outside Saudi Arabia",
          "Scripting the video so tightly that it looks like an ad and gets skipped",
          "Judging a creator on one viral video instead of their typical views",
          "Planning around in-app shopping without confirming it's available",
          "Forgetting to agree ad authorization and its duration in the contract",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "TikTok gives brands in Saudi Arabia enormous discovery potential. Turn it into results by choosing creators whose audiences are actually in the Kingdom, letting them tell the story, boosting what works, and tracking every creator and video to a measurable next step. For the wider market context, see our guide to influencer marketing in Saudi Arabia.",
        links: [{ text: "influencer marketing in Saudi Arabia", href: "/blog/influencer-marketing-saudi-arabia" }],
      },
    ],
    faqs: [
      {
        question: "Is TikTok good for influencer marketing in Saudi Arabia?",
        answer:
          "It's one of the strongest platforms for discovery and demonstration in Saudi Arabia. Results depend on choosing creators with Saudi audiences, native creative and tracking each creator to a measurable next step.",
      },
      {
        question: "Is TikTok Shop available in Saudi Arabia?",
        answer:
          "As of October 2026 we couldn't confirm an official launch for Saudi sellers and affiliates, and published sources disagree. Check with TikTok before planning around in-app checkout.",
      },
      {
        question: "Do TikTok creators in Saudi Arabia need a licence?",
        answer:
          "Creators who earn from advertising content on social media need a Mawthooq licence from GAMR and must advertise through their registered account. Sponsored videos must also be clearly disclosed.",
      },
    ],
  },
  // 1426
  {
    slug: "snapchat-influencer-marketing-saudi-arabia",
    category: "Campaign Strategy",
    title: "Snapchat Influencer Marketing in Saudi Arabia: Campaign Planning for Local Audiences",
    seoTitle: "Snapchat Influencer Marketing in Saudi Arabia: Campaign Guide",
    excerpt:
      "How to plan Snapchat creator campaigns in Saudi Arabia: why Snapchat matters locally, Story-led formats, choosing Saudi creators and Snap Stars, briefing for day-in-the-life content, local and venue campaigns, tracking and paid amplification.",
    metaDescription:
      "Snapchat influencer marketing in Saudi Arabia: Story formats, Saudi creators and Snap Stars, local and venue campaigns, briefing, tracking and amplification.",
    author: AUTHOR,
    publishedAt: GCC2_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "10 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "Saudi Arabia",
    breadcrumbParents: [SAUDI_HUB],
    tags: ["Snapchat influencer marketing Saudi Arabia", "Snapchat creators Saudi Arabia", "Snap Stars Saudi", "Snapchat campaigns KSA"],
    related: ["tiktok-influencer-marketing-saudi-arabia", "influencer-marketing-saudi-arabia", "snapchat-snap-star-marketing"],
    hero: {
      src: "/blog/gcc-guides/snapchat-influencer-marketing-saudi-arabia.svg",
      alt: "Snapchat campaign plan for Saudi audiences: daily Story series, local creator, venue or product moment, swipe-up and code, measured visits and sales",
    },
    body: [
      {
        type: "paragraph",
        text: "In much of the world Snapchat is a messaging app for teenagers. In Saudi Arabia it's part of daily life across age groups: people follow creators through their day, from breakfast to a new restaurant to a family gathering. Snap said in November 2024 that it had 25 million monthly users in the Kingdom and reached 90 percent of 13 to 34 year-olds there, and it opened a creator hub, Majlis Snap, near Riyadh. That makes Snapchat a different kind of creator channel from TikTok: less about going viral, more about trusted, repeated, everyday recommendation.",
        links: [{ text: "Snap said in November 2024", href: SRC.snapKsa.url }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Snapchat influencer marketing in Saudi Arabia works best for trusted, everyday recommendation: Saudi creators showing a product, venue or service as part of their real day in a series of Stories. Use it for local footfall, considered purchases that benefit from a familiar voice, and launches that need repeated exposure. Choose creators by the share of their audience in your city and their reputation for honest recommendations, brief for a story arc over several days rather than one Snap, track with swipe-up links and creator codes, and use paid tools to extend content where they're available to your account. Creators need a Mawthooq licence and must disclose the ad.",
      },
      { type: "heading", text: "How Snapchat differs from TikTok in Saudi campaigns", id: "vs-tiktok" },
      {
        type: "table",
        headers: ["", "Snapchat", "TikTok"],
        rows: [
          ["Main dynamic", "Following a person through their day", "Discovering videos from people you may not follow"],
          ["Strength", "Trust, repetition, local recommendation", "Reach, trends, demonstration"],
          ["Typical format", "Story series over hours or days", "Single short videos"],
          ["Best for", "Venues, local services, considered purchases, launches needing repeated exposure", "Discovery, new products, entertainment-led messages"],
          ["Creative style", "Unpolished, personal, in the moment", "Edited, hook-led, trend-aware"],
        ],
      },
      {
        type: "paragraph",
        text: "Many campaigns use both: TikTok for reach and Snapchat for the trusted follow-up. The TikTok side is covered in TikTok influencer marketing in Saudi Arabia, and how the same platforms compare for UAE audiences in Instagram vs TikTok vs Snapchat in the UAE.",
        links: [
          { text: "TikTok influencer marketing in Saudi Arabia", href: "/blog/tiktok-influencer-marketing-saudi-arabia" },
          { text: "Instagram vs TikTok vs Snapchat in the UAE", href: "/blog/instagram-vs-tiktok-vs-snapchat-uae" },
        ],
      },
      { type: "heading", text: "Formats", id: "formats" },
      {
        type: "list",
        items: [
          "Day-in-the-life Story series with the product or venue at a natural moment",
          "Visits: a creator going to a restaurant, store, clinic or event and showing it as it is",
          "Unboxing and first use at home, followed up days later with how it's going",
          "Q&A Stories answering followers' questions about the product",
          "Spotlight videos for broader reach where the content suits it",
          "AR Lenses for launches, with creators introducing and using them",
        ],
      },
      { type: "heading", text: "Choosing Saudi Snapchat creators", id: "creators" },
      {
        type: "list",
        items: [
          "Audience location by city: Snapchat creators are often strongly local, which suits venue campaigns",
          "Story view counts over several weeks, from screenshots of the creator's insights with dates",
          "Reputation: are they known for honest recommendations or for promoting everything?",
          "Snap Stars (verified creators) for scale; smaller local creators for neighborhood relevance",
          "Mawthooq licence, and advertising from the registered account",
          "Category fit: food, family, cars, beauty, travel and comedy all have distinct creator communities",
        ],
      },
      {
        type: "paragraph",
        text: "Beauty is one category where Snapchat follow-ups work particularly well, because viewers see a product used over days rather than once; see influencer marketing for beauty brands in Saudi Arabia.",
        links: [{ text: "influencer marketing for beauty brands in Saudi Arabia", href: "/blog/influencer-marketing-beauty-brands-saudi-arabia" }],
      },
      {
        type: "paragraph",
        text: "How Snap Stars work, and when a smaller creator is the better choice, is covered in Snap Star marketing; Snapchat creator formats more generally in Snapchat creator marketing.",
        links: [
          { text: "Snap Star marketing", href: "/blog/snapchat-snap-star-marketing" },
          { text: "Snapchat creator marketing", href: "/blog/snapchat-creator-marketing" },
        ],
      },
      { type: "heading", text: "Briefing for a Story arc", id: "brief" },
      {
        type: "table",
        headers: ["Day", "Example Story beats (a home appliance)"],
        rows: [
          ["Day 1", "Delivery and unboxing; first reaction; disclosure"],
          ["Day 2", "Using it in a real household situation; one feature shown"],
          ["Day 4", "A second use; answering followers' questions"],
          ["Day 7", "Honest verdict; where to buy; code and link"],
        ],
      },
      {
        type: "paragraph",
        text: "This is an illustrative structure. Agree the number of Snaps per day, the days, must-include points and disclosure in Arabic, and leave the creator room to react naturally.",
      },
      { type: "heading", text: "Local and venue campaigns", id: "local" },
      {
        type: "list",
        items: [
          "Choose creators whose followers live in the city, and ideally the district, you serve",
          "Plan visits on days when the venue is running normally, not empty or overcrowded",
          "Give a creator-specific offer or name to mention so staff can record visits",
          "Stagger visits so the venue appears across several weeks",
          "Check filming permissions and guests' privacy",
        ],
      },
      { type: "heading", text: "Tracking and amplification", id: "tracking" },
      {
        type: "list",
        items: [
          "Swipe-up or link Stickers to tracked links, one per creator",
          "Creator-specific codes for purchases and bookings",
          "Story insights screenshots (views, screenshots, link taps) collected at agreed times",
          "For apps, mobile measurement links with deep links",
          "Paid tools to run creator content as ads, where available to your account, with the creator's agreement and an agreed period",
        ],
      },
      {
        type: "paragraph",
        text: "Snapchat's creator and brand-partnership features change, and availability varies by account, so confirm current options with Snap or your ad account before contracting creators around a specific feature.",
      },
      { type: "heading", text: "Compliance", id: "compliance" },
      {
        type: "paragraph",
        text: `Reviewed ${REVIEW_DATE_TEXT}. Snapchat was one of the platforms named when the Ministry of Commerce penalized promoters for undisclosed and misleading ads in 2022. Disclose every sponsored Story clearly in Arabic, don't promote unlicensed businesses, and check promotion licences for discounts. Creator licensing and other requirements are in Saudi influencer advertising rules.`,
        links: [{ text: "Saudi influencer advertising rules", href: "/blog/saudi-influencer-advertising-rules" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Treating Snapchat as one post rather than a Story arc",
          "Choosing national names for a single-city venue",
          "Over-polished content that looks out of place among personal Stories",
          "No code or named offer, so visits can't be counted",
          "Not collecting insights screenshots before Stories expire",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Snapchat is one of the most personal creator channels in Saudi Arabia. Brands that use it well choose local, trusted creators, plan a story over days rather than a single post, and set up tracking before the first Snap. Used alongside TikTok and YouTube, it often provides the trust that turns discovery into a visit or purchase.",
      },
    ],
    faqs: [
      {
        question: "How many people use Snapchat in Saudi Arabia?",
        answer:
          "Snap reported 25 million monthly users in Saudi Arabia in November 2024, reaching 90 percent of 13 to 34 year-olds. DataReportal's late-2025 advertising-audience figure is 25.3 million, which isn't an active-user count.",
      },
      {
        question: "What works best on Snapchat for Saudi brands?",
        answer:
          "Story series in which a trusted creator shows a product, venue or service as part of their day, with a link or code to act on. It's especially useful for local footfall and considered purchases.",
      },
      {
        question: "Should brands use Snap Stars or smaller creators?",
        answer:
          "Snap Stars bring scale and reach; smaller local creators often bring stronger neighborhood relevance and trust. Many campaigns combine a few larger names with several local creators.",
      },
    ],
  },
  // 1427
  {
    slug: "influencer-marketing-beauty-brands-saudi-arabia",
    category: "Influencer Marketing",
    title: "Influencer Marketing for Beauty Brands in Saudi Arabia",
    seoTitle: "Beauty Influencer Marketing in Saudi Arabia: Brand Guide",
    excerpt:
      "How beauty, skincare and fragrance brands can run creator campaigns in Saudi Arabia: demonstrations and tutorials in Saudi Arabic, credible creators, keeping claims inside cosmetic use and SFDA listing, discount licences, content rights and measuring sales.",
    metaDescription:
      "Beauty influencer marketing in Saudi Arabia: tutorials, credible creators, SFDA listing and cosmetic claims, discount licences, content rights and sales tracking.",
    author: AUTHOR,
    publishedAt: GCC2_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "10 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "Saudi Arabia",
    breadcrumbParents: [SAUDI_HUB],
    tags: ["beauty influencer marketing Saudi Arabia", "skincare influencers Saudi Arabia", "makeup influencers KSA", "fragrance influencer marketing Saudi"],
    related: ["influencer-marketing-saudi-arabia", "influencer-marketing-beauty-brands-uae", "saudi-influencer-advertising-rules"],
    hero: {
      src: "/blog/gcc-guides/influencer-marketing-beauty-brands-saudi-arabia.svg",
      alt: "Saudi beauty campaign: SFDA-listed product, credible Saudi creator, Arabic tutorial, cosmetic-only claims, licensed offer and tracked sales",
    },
    body: [
      {
        type: "paragraph",
        text: "Beauty is one of the most active creator categories in Saudi Arabia, from makeup artists with large followings to fragrance creators and skincare enthusiasts reviewing products from their bathroom shelf. The audience is sophisticated and used to seeing products promoted, so what persuades is demonstration and credibility, in a voice that sounds Saudi.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Beauty brands in Saudi Arabia get the best results from creators who demonstrate rather than describe: tutorials, routines and wear tests in Saudi Arabic, from creators with credibility in the specific category. Make sure products are listed with the Saudi Food and Drug Authority (SFDA) and keep claims within cosmetic use, since claims to treat a condition move a product out of the cosmetic category. Get a Ministry of Commerce licence before any discount or giveaway, label every sponsored post, agree usage rights before content is made, and track sales across your store, retailers and marketplaces. Creators need a Mawthooq licence.",
      },
      { type: "heading", text: "What Saudi beauty audiences respond to", id: "audience" },
      {
        type: "table",
        headers: ["Theme", "Campaign implication"],
        rows: [
          ["Occasion beauty", "Weddings, Eid and evening events drive makeup and fragrance purchases; plan around them"],
          ["Fragrance culture", "Oud, bakhoor and layered fragrance have deep local roots; fragrance creators are a category of their own"],
          ["Climate and routines", "Heat, dry indoor air and sun exposure shape skincare needs; test before claiming performance"],
          ["Modest presentation", "Many creators show face-only or hands-only demonstrations; brief to their norms rather than imposing a format"],
          ["Language", "Tutorials in Saudi Arabic, with the right regional voice, feel more natural than translated content"],
          ["Discovery across platforms", "TikTok for discovery, Snapchat for everyday use and trusted follow-up, YouTube for long reviews, Instagram for visual looks"],
        ],
      },
      { type: "heading", text: "Demonstrations and tutorials", id: "formats" },
      {
        type: "list",
        items: [
          "Full tutorials for a look, filmed in natural light, with every product named",
          "Routines showing where a product fits and what it replaced",
          "Wear tests through a real day, including the end-of-day result",
          "Fragrance content describing notes, longevity and occasions honestly",
          "Snapchat follow-ups a week or two after first use",
          "Shade demonstrations on several skin tones",
        ],
      },
      { type: "heading", text: "Choosing credible creators", id: "creators" },
      {
        type: "table",
        headers: ["Creator type", "Strength", "Check"],
        rows: [
          ["Makeup artists", "Technique and credibility for color cosmetics", "Whether their audience buys or mainly learns"],
          ["Skincare creators", "Routines and ingredient discussion", "Skin type and concerns; no medical advice"],
          ["Fragrance creators", "Reviews and collections; strong Gulf audiences", "Audience location in Saudi Arabia"],
          ["Hair creators", "Hair care and styling tools", "Hair type match"],
          ["Lifestyle creators", "Everyday use, relatability", "Category credibility; sponsored frequency"],
          ["Healthcare professionals", "Authority", "Professional conduct rules; avoid turning cosmetics into medical claims"],
        ],
      },
      { type: "heading", text: "Claims, product listing and approvals", id: "claims" },
      {
        type: "paragraph",
        text: `Reviewed ${REVIEW_DATE_TEXT}; confirm with the SFDA. Cosmetic products sold in Saudi Arabia must be listed with the SFDA. In its July 2024 list of products that need advertising approval, the SFDA named medical equipment and supplies, foodstuffs and over-the-counter medicines among others, but not cosmetics. That doesn't make cosmetic claims unregulated: a claim to treat or prevent a condition can turn a product into a medicine or medical product with its own rules. If your range includes devices, supplements or medicated products, check whether advertising approval is needed before creators post.`,
        links: [{ text: "July 2024 list of products that need advertising approval", href: SRC.sfdaPriorApproval.url }],
      },
      {
        type: "list",
        items: [
          "Give creators a written list of approved claims in Arabic, and words to avoid such as 'treats', 'cures' or 'guaranteed results'",
          "Substantiate any 'halal', 'natural', 'organic', 'dermatologist-tested' or 'alcohol-free' claim",
          "Avoid skin-lightening language and anything that ranks skin tones",
          "No filters or edits that change the result being shown",
          "Label every sponsored post as advertising, as the E-Commerce Law requires for online ads",
        ],
      },
      { type: "heading", text: "Offers and giveaways", id: "offers" },
      {
        type: "paragraph",
        text: "Discounts, competitions and giveaways need a Ministry of Commerce licence before they run, and the terms the creator announces should match the licence. Beauty brands often use giveaways with creators; make sure the licence is in place first. The rules are summarized in Saudi influencer advertising rules.",
        links: [{ text: "Saudi influencer advertising rules", href: "/blog/saudi-influencer-advertising-rules" }],
      },
      { type: "heading", text: "Content rights", id: "rights" },
      {
        type: "list",
        items: [
          "Decide before the shoot whether you'll use the content in ads, on product pages or with retailers",
          "Agree channels, duration and territory (Saudi Arabia only, or the GCC)",
          "Tutorials keep working for months; short licences can be a false economy",
          "If a retailer wants to use the content, the agreement must allow it",
        ],
      },
      { type: "heading", text: "Measuring sales", id: "measurement" },
      {
        type: "table",
        headers: ["Channel", "How to track", "Gap"],
        rows: [
          ["Your online store", "UTM link and code per creator", "Buyers who search later"],
          ["Beauty retailers and pharmacies", "Sell-out data for promoted SKUs vs baseline", "Codes often can't be used"],
          ["Marketplaces", "Sales and search trend for promoted products", "Little creator-level data"],
          ["Stores and counters", "Creator-specific offer mentioned at purchase", "Depends on staff recording it"],
        ],
      },
      {
        type: "paragraph",
        text: "How the same category works in the UAE, with different regulators and audiences, is in influencer marketing for beauty brands in the UAE.",
        links: [{ text: "influencer marketing for beauty brands in the UAE", href: "/blog/influencer-marketing-beauty-brands-uae" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Using UAE or Levantine creators for a Saudi audience without checking audience location",
          "Running a giveaway without a Ministry of Commerce licence",
          "Therapeutic claims in Arabic captions nobody reviewed",
          "Buying a single post when the audience needs to see the product used over time",
          "Judging the campaign on your store alone when most sales happen at retailers",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Saudi beauty buyers respond to proof in their own language: a credible creator, a real demonstration and a product that does what the post says. Keep claims within the product's category, license your promotions, agree rights upfront and measure across every place the product sells.",
      },
    ],
    faqs: [
      {
        question: "Do cosmetics ads in Saudi Arabia need SFDA approval?",
        answer:
          "Cosmetics weren't among the categories the SFDA listed in July 2024 as needing approval before advertising, but products must be listed with the SFDA, and claims to treat a condition can bring a product under medical rules. Confirm with the SFDA for your product.",
      },
      {
        question: "Can beauty influencers in Saudi Arabia run giveaways?",
        answer:
          "Yes, but the business needs a Ministry of Commerce licence for contests and discounts before they run, and the announced terms should match the licence.",
      },
      {
        question: "Which creators work best for Saudi beauty brands?",
        answer:
          "Creators with credibility in the specific category, such as makeup artists, skincare or fragrance creators, whose audiences are in Saudi Arabia and who speak in a natural Saudi voice.",
      },
    ],
  },
  // 1428
  {
    slug: "influencer-marketing-ecommerce-brands-saudi-arabia",
    category: "Influencer Marketing",
    title: "Influencer Marketing for E-commerce Brands in Saudi Arabia",
    seoTitle: "E-commerce Influencer Marketing in Saudi Arabia: Brand Guide",
    excerpt:
      "How online stores selling in Saudi Arabia can use creators: product discovery, creator codes and affiliate attribution, Arabic landing pages, conversion tracking across stores and marketplaces, customer acquisition and repeat purchases, plus the disclosure and discount rules that apply.",
    metaDescription:
      "Saudi e-commerce influencer marketing: discovery, creator codes, affiliate attribution, Arabic landing pages, conversion tracking, repeat purchase and rules.",
    author: AUTHOR,
    publishedAt: GCC2_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "11 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "Saudi Arabia",
    breadcrumbParents: [SAUDI_HUB],
    tags: ["ecommerce influencer marketing Saudi Arabia", "online store influencer marketing KSA", "creator codes Saudi Arabia", "influencer sales Saudi Arabia"],
    related: ["influencer-affiliate-marketing-uae-saudi-arabia", "influencer-marketing-saudi-arabia", "influencer-marketing-ecommerce-brands-uae"],
    hero: {
      src: "/blog/gcc-guides/influencer-marketing-ecommerce-brands-saudi-arabia.svg",
      alt: "Saudi e-commerce creator funnel: discovery video, Arabic landing page, code or affiliate link, delivered order, and repeat purchase",
    },
    body: [
      {
        type: "paragraph",
        text: "Saudi online shoppers discover products on TikTok and Snapchat, check reviews on YouTube, and buy on brand stores, marketplaces and social channels. Creators can influence every step. The work for an e-commerce brand is connecting that influence to orders it can count, while staying inside the Kingdom's rules on online advertising and promotions.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "E-commerce brands in Saudi Arabia should use creators for discovery and demonstration, then send viewers to an Arabic landing page that matches the content, with a unique link and code per creator. Track delivered, non-returned orders across your store and marketplaces, set a break-even cost per order in SAR before agreeing fees, and use commission or affiliate terms where the economics allow. Label every sponsored post as an advertisement, get a Ministry of Commerce licence before promoting discounts or contests, and measure whether creator-acquired customers come back.",
      },
      { type: "heading", text: "From discovery to delivered order", id: "journey" },
      {
        type: "table",
        headers: ["Step", "Creator content", "What to set up"],
        rows: [
          ["Discovery", "Short demonstrations on TikTok, Snapchat Stories, Instagram Reels", "Creators with Saudi audiences; boosted content where it works"],
          ["Consideration", "Reviews, comparisons, sizing and suitability", "YouTube and longer formats; FAQs on the landing page"],
          ["Landing", "The link in the content", "Arabic page that shows the product from the video, the offer and delivery terms"],
          ["Purchase", "Code or affiliate link", "Codes that work at checkout; payment options customers expect"],
          ["Delivery", "Post-purchase how-to content", "Count delivered orders; reduce returns"],
          ["Repeat", "Refills, bundles, new arrivals from the same creators", "Customer-level tracking of creator-acquired buyers"],
        ],
      },
      { type: "heading", text: "Landing pages that convert creator traffic", id: "landing" },
      {
        type: "list",
        items: [
          "Arabic first, right-to-left, with the product from the video above the fold",
          "The same offer and price the creator mentioned, with the code pre-applied where your store allows",
          "Clear delivery times and costs to Saudi cities, and the returns policy",
          "Payment methods your customers use, including any instalment and cash-on-delivery options you offer",
          "Short reviews or answers to the questions the creator's audience asked in comments",
          "A dedicated page per campaign or creator, so traffic can be compared",
        ],
      },
      { type: "heading", text: "Creator codes and affiliate attribution", id: "codes" },
      {
        type: "table",
        headers: ["Method", "Captures", "Limitation"],
        rows: [
          ["UTM link per creator", "Clicks and on-site orders", "Buyers who search later"],
          ["Unique code per creator", "Orders where the code was used, even without a click", "Code leakage to coupon sites"],
          ["Affiliate platform link", "Orders within the attribution window, with commission tracking", "Window length; cross-device gaps"],
          ["Marketplace affiliate programs", "Orders on that marketplace through the creator's link", "Program rules and commissions set by the marketplace"],
          ["Post-purchase survey", "Influence with no digital trail", "Self-reported"],
        ],
      },
      {
        type: "paragraph",
        text: "Marketplace programs exist for Saudi shoppers, including Amazon Associates for amazon.sa; terms are set by each program, so check them before relying on one. Commission structures, attribution windows and how to handle returns are covered in influencer affiliate marketing in the UAE and Saudi Arabia.",
        links: [
          { text: "Amazon Associates for amazon.sa", href: SRC.amazonSaAssociates.url },
          { text: "influencer affiliate marketing in the UAE and Saudi Arabia", href: "/blog/influencer-affiliate-marketing-uae-saudi-arabia" },
        ],
      },
      { type: "heading", text: "Customer acquisition economics", id: "economics" },
      {
        type: "list",
        items: [
          "Contribution per order (SAR) = average order value × contribution margin %",
          "Cost per delivered order = total creator cost (fees + product + commission + rights + amplification) ÷ delivered, non-returned orders",
          "Customer value over time = contribution per order × expected orders per customer over your chosen period",
          "A creator is worth rebooking when cost per delivered order is below what a new customer is worth to you",
        ],
      },
      {
        type: "paragraph",
        text: "Hypothetical example: AOV SAR 220, contribution margin 35%, so SAR 77 per order. A creator package costing SAR 9,000 (excluding VAT) brings 90 delivered orders: SAR 100 per order, above first-order break-even. If those customers order 1.8 times on average within six months, each is worth about SAR 139 in contribution, and the creator pays back. Figures are illustrative, not benchmarks.",
      },
      { type: "heading", text: "Repeat purchases", id: "repeat" },
      {
        type: "list",
        items: [
          "Tag creator-acquired customers so you can see their reorder rate",
          "Send the creator's how-to content after delivery to reduce returns",
          "Use the same creators for refills, bundles and new arrivals; their audience already trusts them",
          "Compare creators on repeat rate, not only first orders",
        ],
      },
      { type: "heading", text: "Rules for e-commerce campaigns", id: "rules" },
      {
        type: "paragraph",
        text: `Reviewed ${REVIEW_DATE_TEXT}. Online commercial advertisements must make clear that they're promotional under the E-Commerce Law, and the Ministry of Commerce has penalized promoters who failed to disclose ads or promoted unlicensed activity. Discounts and contests need a Ministry of Commerce licence before they run, and advertised terms should match it. Creators need a Mawthooq licence. Prices, availability and claims must be accurate. Details and sources are in Saudi influencer advertising rules.`,
        links: [{ text: "Saudi influencer advertising rules", href: "/blog/saudi-influencer-advertising-rules" }],
      },
      { type: "heading", text: "A 60-day test plan", id: "test" },
      {
        type: "table",
        headers: ["Days", "Activity", "Decision"],
        rows: [
          ["1 to 30", "8 to 12 creators, two or three angles, landing pages and codes live, licences checked", "Which creators and angles produce delivered orders below target?"],
          ["31 to 60", "Rebook the best; boost their content; add consideration content and post-purchase follow-up", "Does amplification lower cost per order? Do customers reorder?"],
        ],
      },
      {
        type: "paragraph",
        text: "TikTok's role in discovery is covered in TikTok influencer marketing in Saudi Arabia, and how the same framework applies in the UAE in influencer marketing for e-commerce brands in the UAE.",
        links: [
          { text: "TikTok influencer marketing in Saudi Arabia", href: "/blog/tiktok-influencer-marketing-saudi-arabia" },
          { text: "influencer marketing for e-commerce brands in the UAE", href: "/blog/influencer-marketing-ecommerce-brands-uae" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Sending Arabic creator traffic to an English product page",
          "Promoting a discount before the licence is in place",
          "Counting placed orders instead of delivered ones",
          "Ignoring marketplace sales, then concluding creators didn't work",
          "Measuring first orders only",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "In Saudi e-commerce, creators can move product quickly when the path from video to delivered order is clear: an Arabic landing page that matches the content, codes and links per creator, licensed promotions and honest disclosure. Measure cost per delivered order and repeat purchase, and put more budget behind the creators whose customers stay.",
      },
    ],
    faqs: [
      {
        question: "How do Saudi online stores track influencer sales?",
        answer:
          "With a UTM link and unique code per creator, affiliate links where used, and counting delivered, non-returned orders. Marketplace sales and branded search show effects that links and codes miss.",
      },
      {
        question: "Do influencer discount codes need a licence in Saudi Arabia?",
        answer:
          "Discounts and contests need a Ministry of Commerce licence before they run, and the business is responsible for it. The terms the creator announces should match the licence.",
      },
      {
        question: "Should Saudi e-commerce brands pay influencers commission?",
        answer:
          "Commission or fee-plus-commission can work where sales are trackable and margins allow. Many established creators prefer a fee for planned content, so hybrid terms are common.",
      },
    ],
  },
];
