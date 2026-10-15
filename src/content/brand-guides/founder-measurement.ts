import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";
import { SOURCES } from "@/content/creator-resources/shared";

/**
 * Founder questions, batch 4 (roadmap topics 61–80, ROI, attribution and reporting). Five genuinely missing pages:
 * UTM tagging for creator links (66), creator-level sales tracking (67), attribution models and the customer journey
 * (68, with 70 folded in), diagnosing engagement without sales (69) and scale, pause or stop decisions (80, with 75
 * folded in). The other topics update the existing measurement owners. See docs/founder-questions-61-80-audit.md.
 */
const PUBLISHED = "2026-10-14";
const REVIEWED = "October 2026";

const EXT = {
  ga4UtmParameters: "https://support.google.com/analytics/answer/10917952?hl=en",
  ga4ChannelGroups: "https://support.google.com/analytics/answer/9756891?hl=en",
  ga4AttributionModels: "https://support.google.com/analytics/answer/10596866?hl=en",
  ga4AttributionSettings: "https://support.google.com/analytics/answer/10597962?hl=en",
  ga4AdvertisingReports: "https://support.google.com/analytics/answer/10595568?hl=en",
  amazonAttribution: "https://advertising.amazon.com/solutions/products/amazon-attribution",
  icoStorageAccess:
    "https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/",
  dpdpRules: "https://www.meity.gov.in/data-protection-framework",
};

export const founderMeasurementPosts: BlogPost[] = [
  // Topic 66
  {
    slug: "influencer-utm-tracking",
    category: "Campaign Strategy",
    title: "How to Track Influencer Marketing Conversions Using UTM Parameters",
    seoTitle: "Influencer UTM Tracking: How to Tag Creator Links",
    excerpt:
      "A practical UTM setup for creator campaigns: which parameters to use, a naming convention you can copy, how GA4 groups creator traffic, where links go on each platform, and why tagged numbers always come in lower than creator clicks.",
    metaDescription:
      "Set up UTM parameters for influencer campaigns: a naming convention, how GA4 channel groups treat creator traffic, link placement, testing and reading conversions.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "7 min read",
    tags: ["influencer UTM tracking", "UTM parameters for influencers", "GA4 influencer tracking", "creator link tracking", "campaign tagging"],
    related: ["track-influencer-sales", "influencer-marketing-attribution-models", "influencer-reporting-discrepancies"],
    hero: {
      src: "/blog/brand-guides/influencer-utm-tracking.svg",
      alt: "The parts of a tagged creator link: source, medium, campaign, ID and content, flowing into analytics",
    },
    body: [
      {
        type: "paragraph",
        text: "Most creator campaigns lose their tracking before a single post goes live: links get made the night before, every creator gets the same URL, and the medium is spelled three different ways. A UTM setup takes an hour to do properly, and it decides whether you can compare creators afterwards or only guess.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Give every creator, and every placement they use, its own tagged link. Set utm_source to the platform, utm_medium to one agreed value for creator traffic, utm_campaign and utm_id to the campaign, and utm_content to the creator and placement. Write values in lowercase with one separator, record every link in a sheet, test each one on a phone, and put the links in the brief before content is made. In GA4, read results in the Traffic acquisition report and against your key events. Treat tagged conversions as the minimum the creator drove, because people who watch and buy later without clicking never carry the tag.",
      },
      { type: "heading", text: "What each parameter is for", id: "parameters" },
      {
        type: "paragraph",
        text: "Google Analytics recognizes a fixed set of URL parameters. Google's own guidance recommends setting utm_source, utm_medium, utm_campaign, utm_id and utm_source_platform where relevant, and warns that missing parameters show up as '(not set)' in reports. Values are case sensitive, so 'Instagram' and 'instagram' become two different sources.",
        links: [{ text: "Google Analytics recognizes a fixed set of URL parameters", href: EXT.ga4UtmParameters }],
      },
      {
        type: "table",
        headers: ["Parameter", "What GA4 uses it for", "Suggested use for creators", "Example"],
        rows: [
          ["utm_source", "Where the traffic came from", "The platform the creator posted on", "instagram, youtube, podcast"],
          ["utm_medium", "The marketing medium", "One fixed value for all creator traffic (see the next section)", "social, influencer or affiliate"],
          ["utm_campaign", "Campaign name", "The campaign, matching your plan and budget sheet", "diwali_2026_serum"],
          ["utm_id", "Campaign ID", "A short ID that matches your budget or finance records", "c2611"],
          ["utm_content", "Differentiates creatives or links", "Creator handle plus placement", "priya_k_story, priya_k_bio"],
          ["utm_term", "Paid keyword", "Usually leave empty for organic creator posts", ""],
        ],
      },
      {
        type: "paragraph",
        text: "Two newer parameters, utm_creative_format and utm_marketing_tactic, are accepted in URLs, but Google's documentation says they aren't currently reported in Google Analytics properties. Don't build your creator reporting on them.",
      },
      { type: "heading", text: "Choose a medium that lands in the right channel", id: "medium-and-channels" },
      {
        type: "paragraph",
        text: "GA4 sorts traffic into default channel groups using fixed rules, and the medium you pick decides where creator traffic ends up. Organic Social matches when the source is a recognized social site or the medium is a social value such as 'social'. Paid Social needs a social source plus a paid-style medium such as 'paid_social' or 'cpc'. Affiliates needs the medium 'affiliate'. A medium GA4 doesn't recognize, combined with a source it doesn't recognize, falls into Unassigned.",
        links: [{ text: "GA4 sorts traffic into default channel groups using fixed rules", href: EXT.ga4ChannelGroups }],
      },
      {
        type: "table",
        headers: ["Your setup", "Likely default channel", "When it fits"],
        rows: [
          ["source=instagram, medium=social", "Organic Social", "Organic creator posts, reported alongside your own social"],
          ["source=instagram, medium=influencer", "Organic Social (the social source matches)", "Organic creator posts where you want to filter creators by medium"],
          ["source=creatorname, medium=influencer", "Unassigned", "Avoid: neither value matches a channel rule"],
          ["source=instagram, medium=paid_social", "Paid Social", "Creator content run as ads, such as partnership ads"],
          ["source=creatorname, medium=affiliate", "Affiliates", "Commission-based creator programs"],
        ],
      },
      {
        type: "paragraph",
        text: "A common approach is to keep the platform as the source, use one dedicated medium value for organic creator posts, and set up a custom channel group in GA4 if you want 'Creators' to appear as its own channel. Whatever you choose, write it down and use it for every campaign, or year-on-year comparisons break.",
      },
      { type: "heading", text: "A naming convention you can copy", id: "naming-convention" },
      {
        type: "template",
        label: "Creator link naming convention",
        text: "Rules: lowercase only; underscores between words; no spaces, emojis or personal data\n\nutm_source   = platform        (instagram | youtube | podcast | whatsapp)\nutm_medium   = influencer      (or the value your team agreed; never change it mid-year)\nutm_campaign = name_period     (diwali_2026_serum)\nutm_id       = budget code     (c2611)\nutm_content  = handle_placement (priya_k_story | priya_k_bio | priya_k_ytdesc)\n\nExample:\nhttps://example.com/serum?utm_source=instagram&utm_medium=influencer&utm_campaign=diwali_2026_serum&utm_id=c2611&utm_content=priya_k_story",
      },
      {
        type: "paragraph",
        text: "Keep a link sheet with one row per link: creator, platform, placement, full URL, short URL if any, the date it was tested and the date it went live. That sheet becomes the key you use to join analytics data to creator costs later.",
      },
      { type: "heading", text: "One link per creator, per placement", id: "placements" },
      {
        type: "table",
        headers: ["Placement", "Link format", "Tracking note"],
        rows: [
          ["Instagram Story", "Link sticker", "Give Stories their own utm_content; they expire after 24 hours unless highlighted"],
          ["Instagram bio", "Bio link or link page", "Agree how long the link stays up; bio links collect clicks long after the post"],
          ["Instagram Reel or post caption", "Not clickable", "Point viewers to the bio or Story link, or use a code"],
          ["YouTube description or pinned comment", "Clickable link", "Separate tags for description and pinned comment if both are used"],
          ["Podcast or spoken mention", "Short vanity URL", "Use a memorable path that redirects to the tagged URL"],
          ["WhatsApp channel or broadcast", "Clickable link", "Use source=whatsapp so forwarded traffic isn't lost in Direct"],
        ],
      },
      {
        type: "paragraph",
        text: "Short links and vanity URLs are useful, but a redirect that drops the query string silently destroys your tracking. Click every short link on a phone, through the app it will be posted in, and check that the tags survive to the landing page.",
      },
      { type: "heading", text: "Reading creator conversions in GA4", id: "reading-results" },
      {
        type: "list",
        items: [
          "Traffic acquisition report: filter by session medium (your creator value) and break down by session campaign and session manual ad content to compare creators and placements.",
          "Key events: mark purchases, sign-ups or leads as key events so they appear against each creator's traffic.",
          "Explorations: build a free-form table of utm_content against key events and revenue for a creator-level view.",
          "Attribution: GA4 credits key events to channels using your reporting attribution model, so a creator click followed by a later Google search may be credited partly or wholly to search. Influencer marketing attribution models explains the options.",
        ],
      },
      {
        type: "paragraph",
        text: "Export the creator-level table once the measurement window closes, join it to your link sheet and costs, and you have cost per session, cost per key event and conversion rate by creator. Influencer CPM, CPE, CPC and CPA covers the formulas.",
        links: [{ text: "Influencer CPM, CPE, CPC and CPA", href: "/blog/influencer-marketing-cpm-cpe-cpa" }],
      },
      { type: "heading", text: "Why tagged numbers come in lower than creator clicks", id: "why-numbers-differ" },
      {
        type: "list",
        items: [
          "Platform link taps aren't the same as sessions: some taps never load the page, especially on slow connections.",
          "In-app browsers and cookie consent choices can stop analytics recording a visit.",
          "People who watch, then search your brand or type your URL later, arrive without the tag.",
          "Purchases on marketplaces, by phone, on WhatsApp or in stores never touch your site.",
          "Cross-device journeys break the link between a phone click and a laptop purchase.",
        ],
      },
      {
        type: "paragraph",
        text: "None of this means UTMs are wrong. It means they measure the clicking customers, not everyone the creator influenced. Why creator reports and GA4 don't match covers reconciling the two, and how to track influencer sales covers codes and other methods that catch people who don't click.",
        links: [
          { text: "Why creator reports and GA4 don't match", href: "/blog/influencer-reporting-discrepancies" },
          { text: "how to track influencer sales", href: "/blog/track-influencer-sales" },
        ],
      },
      { type: "heading", text: "Privacy and consent", id: "privacy" },
      {
        type: "list",
        items: [
          "Never put names, emails, phone numbers or customer IDs in UTM values; Google Analytics policies don't allow personal information to be sent to it.",
          "Analytics depends on your consent setup: visitors who decline analytics cookies may not be counted at all, which lowers every tagged number.",
          "UK: the ICO finalized its guidance on storage and access technologies in April 2026, including when statistical analytics can rely on an exception to consent. Check its conditions before changing your banner.",
          "India: the Digital Personal Data Protection Rules were notified in November 2025, with most obligations phased in over the following 18 months. Review consent notices for analytics and marketing data with counsel.",
          "UAE, Australia and Singapore have their own data protection laws; take local advice on consent for analytics and advertising cookies.",
        ],
      },
      {
        type: "paragraph",
        text: "These notes are general information, not legal advice. The ICO's storage and access guidance and MeitY's data protection framework page are the starting points for the UK and India.",
        links: [
          { text: "The ICO's storage and access guidance", href: EXT.icoStorageAccess },
          { text: "MeitY's data protection framework page", href: EXT.dpdpRules },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "One link shared by every creator, so results can't be split.",
          "Mixed case or spelling ('Influencer', 'influencers', 'IG') splitting one source into several rows.",
          "A medium that sends creator traffic to Unassigned.",
          "Short links whose redirects strip the tags.",
          "Links created after content is filmed, so creators read out the wrong URL.",
          "Treating tagged conversions as the creator's total effect.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Good UTM tracking is mostly discipline: one convention, one link per creator and placement, tested before launch and recorded in a sheet. It gives you a clean, comparable floor for each creator's results. Pair it with codes for people who don't click, and with incrementality tests for the effect neither can see.",
      },
    ],
    faqs: [
      {
        question: "What utm_medium should I use for influencer links?",
        answer:
          "Pick one value and use it consistently. With the platform as utm_source (for example instagram), a medium such as 'social' or 'influencer' will usually land in GA4's Organic Social channel. Use a paid-style medium such as 'paid_social' for creator ads and 'affiliate' for commission programs.",
      },
      {
        question: "Why does GA4 show fewer sessions than the creator's link clicks?",
        answer:
          "Platform taps and analytics sessions are counted differently. Pages that don't load, in-app browsers, declined cookie consent and redirects that strip tags all reduce the number GA4 records.",
      },
      {
        question: "Do I need a different UTM link for every creator?",
        answer:
          "Yes, and ideally for every placement each creator uses, such as Story, bio and YouTube description. Without separate links you can't compare creators or formats.",
      },
    ],
  },
  // Topic 67
  {
    slug: "track-influencer-sales",
    category: "Campaign Strategy",
    title: "How to Track Influencer Sales With Promo Codes, Affiliate Links and Analytics",
    seoTitle: "How to Track Influencer Sales: Codes, Links and Analytics",
    excerpt:
      "Promo codes, tagged links, affiliate platforms and post-purchase surveys each catch a different slice of creator-driven sales. How to set each up, combine them without double counting, and track orders that happen on marketplaces, WhatsApp or cash on delivery.",
    metaDescription:
      "Track influencer sales with promo codes, affiliate links, UTMs and surveys: setup, code leakage, deduplication, marketplace and COD orders, and honest reporting.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "7 min read",
    tags: ["track influencer sales", "influencer promo codes", "influencer affiliate links", "creator sales attribution", "influencer sales tracking"],
    related: ["influencer-utm-tracking", "influencer-affiliate-program", "influencer-marketing-incrementality"],
    hero: {
      src: "/blog/brand-guides/track-influencer-sales.svg",
      alt: "Four ways to track creator sales: promo codes, tagged links, affiliate platforms and post-purchase surveys",
    },
    body: [
      {
        type: "paragraph",
        text: "A creator posts, sales go up, and three reports give three different answers: the code report, the analytics report and the creator's own screenshot. Each is counting something real. The job is to know what each method catches, set them up so they can be joined, and report the result without counting the same order twice.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Track influencer sales with at least two methods per creator: a unique promo code and a unique tagged link, recorded against each order. Add an affiliate platform if creators are paid on commission, and a 'how did you hear about us?' question at checkout to catch people who used neither. Agree a rule for which method gets credit when an order has more than one, count delivered orders net of returns, and report the total as attributed sales, not as the sales the campaign caused.",
      },
      { type: "heading", text: "The methods compared", id: "methods" },
      {
        type: "table",
        headers: ["Method", "What it catches", "What it misses", "Watch out for"],
        rows: [
          ["Unique promo code", "Buyers who enter the code, even without clicking", "Buyers who forget or skip it", "Leakage to coupon sites; the discount changes who buys"],
          ["Tagged link (UTM)", "Buyers who click and buy in the same browser", "Buyers who search later, switch device or buy elsewhere", "Consent, in-app browsers, redirects"],
          ["Affiliate platform link", "Clicks and orders within the cookie window, with commission tracking", "Same gaps as links; credit rules vary by platform", "Last-click rules that override other channels"],
          ["Vanity URL", "Spoken mentions on podcasts and video", "People who don't type it", "Redirects that drop tags"],
          ["Post-purchase survey", "Influence with no digital trail", "People who don't answer or misremember", "Small samples; list creators by name"],
          ["Creator-specific product page or bundle", "Orders for an offer only that creator promotes", "Buyers of the standard product", "Only practical for larger partnerships"],
        ],
      },
      { type: "heading", text: "Setting up promo codes properly", id: "promo-codes" },
      {
        type: "list",
        items: [
          "One code per creator, short and easy to say: the creator's name plus a number works.",
          "Set usage limits per customer, an expiry date and the products it applies to.",
          "Record the code on the order and in your customer record, so repeat purchases can be traced later.",
          "Watch for leakage: if a code appears on coupon sites, orders from it stop meaning 'this creator's audience'.",
          "Keep discounts comparable across creators you want to compare; a bigger discount buys more orders and different customers.",
        ],
      },
      {
        type: "paragraph",
        text: "A discount is not free measurement. It reduces margin on every order, including orders from people who would have paid full price. Count it as a campaign cost when you calculate ROI.",
      },
      { type: "heading", text: "Affiliate links and commission programs", id: "affiliate-links" },
      {
        type: "paragraph",
        text: "Affiliate platforms track clicks and orders within a cookie or attribution window and calculate commissions automatically. Before you rely on one, check how it decides credit when a buyer clicked a creator link and later came through a paid search ad: many platforms credit the last affiliate click, which can disagree with your analytics. Commission links are a material connection, so creators must disclose them; ASCI's influencer guidelines in India, and the advertising rules in the other markets you sell in, apply to affiliate content too. Influencer affiliate programs covers program design.",
        links: [
          { text: "ASCI's influencer guidelines", href: SOURCES.asciGuidelines },
          { text: "Influencer affiliate programs", href: "/blog/influencer-affiliate-program" },
        ],
      },
      { type: "heading", text: "Connecting it in analytics", id: "analytics" },
      {
        type: "paragraph",
        text: "Each creator link should carry UTM tags, set up with one naming convention across the campaign. In your store or CRM, store the code, the landing source and the survey answer on the order record, so one export shows every signal for every order. Influencer UTM tracking covers the tags, and how GA4 groups creator traffic.",
        links: [{ text: "Influencer UTM tracking", href: "/blog/influencer-utm-tracking" }],
      },
      { type: "heading", text: "Avoid counting the same order twice", id: "deduplication" },
      {
        type: "paragraph",
        text: "An order can carry a creator code, arrive through that creator's link and name them in the survey. Add the three reports together and you count it three times. Agree one credit order before launch and apply it to every order: for example, code first, then tagged link, then survey answer.",
      },
      {
        type: "table",
        headers: ["Signal on the order (hypothetical)", "Orders", "Credited to creator under 'code, then link, then survey'"],
        rows: [
          ["Code only", "120", "120"],
          ["Code and tagged link", "80", "80 (counted once)"],
          ["Tagged link only", "60", "60"],
          ["Survey answer only", "40", "40, reported separately as self-reported"],
          ["Sum of the three raw reports", "Codes 200 + links 140 + survey 40 = 380", "Deduplicated total: 300"],
        ],
      },
      {
        type: "paragraph",
        text: "Hypothetical figures for illustration. Keep self-reported orders in their own line: they are useful evidence, but they rest on memory rather than a recorded action.",
      },
      { type: "heading", text: "Marketplaces, cash on delivery and WhatsApp orders", id: "untracked-orders" },
      {
        type: "list",
        items: [
          "Marketplaces: Amazon's Attribution tool measures off-Amazon traffic to Amazon listings for eligible sellers and vendors, and Amazon lists India, the UAE, Saudi Arabia, the UK, Australia and Singapore among its marketplaces. Check eligibility in your account. Where no tool exists, compare listing sales during the campaign against a baseline.",
          "Cash on delivery: credit creators with delivered, non-returned orders, not placed orders.",
          "WhatsApp and phone orders: add a 'source' field that staff fill in, with creator names as options, and ask for the code at the time of order.",
          "Stores and bookings: creator-specific offer names, booking source fields and staff prompts at checkout.",
        ],
      },
      {
        type: "paragraph",
        text: "Amazon's Attribution page lists the supported marketplaces and requirements. Amazon and Flipkart seller tactics, including reviews you must not ask for, are covered in influencer marketing for Amazon and Flipkart sellers.",
        links: [
          { text: "Amazon's Attribution page", href: EXT.amazonAttribution },
          { text: "influencer marketing for Amazon and Flipkart sellers", href: "/blog/influencer-marketing-amazon-flipkart-sellers" },
        ],
      },
      { type: "heading", text: "A creator sales sheet", id: "sales-sheet" },
      {
        type: "template",
        label: "One row per creator",
        text: "Creator | Platform | Code | Link ID | Post date | Window end\nOrders (deduplicated) | Delivered, net of returns | Net revenue | Discount cost\nNew customers | Repeat customers | Survey mentions (separate)\nTotal creator cost (fee + product + rights + amplification + management)\nCost per delivered order | Contribution after creator cost",
      },
      {
        type: "paragraph",
        text: "The last two columns are where the sheet becomes a decision tool. How to measure influencer marketing ROI shows how to turn them into a return figure, and customer quality from influencer campaigns follows those customers beyond the first order.",
        links: [
          { text: "How to measure influencer marketing ROI", href: "/blog/measuring-influencer-campaign-roi" },
          { text: "customer quality from influencer campaigns", href: "/blog/influencer-customer-quality" },
        ],
      },
      { type: "heading", text: "Report it honestly", id: "honest-reporting" },
      {
        type: "list",
        items: [
          "Call the total 'attributed sales': orders with a creator signal, not orders the creator caused.",
          "Some attributed buyers would have bought anyway; some influenced buyers left no trace. The two errors don't cancel out neatly.",
          "Show deduplicated orders, self-reported mentions and any lift in branded search or baseline sales as separate lines.",
          "Where the decision is large, test what the creators actually added with a holdout or geographic comparison.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer marketing incrementality explains those tests.",
        links: [{ text: "Influencer marketing incrementality", href: "/blog/influencer-marketing-incrementality" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "One generic code for every creator.",
          "Adding code, link and affiliate reports together.",
          "Counting placed orders where cash on delivery is common.",
          "Forgetting the discount when calculating cost per order.",
          "Ignoring marketplace and offline sales because they're hard to see.",
          "Losing the creator signal after the first order, so repeat purchases can't be credited.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "No single method tracks all creator sales. Use a code and a tagged link for every creator, a survey for the rest, one deduplication rule and delivered orders as the unit. Report what you can count as the minimum, and test for the rest when the budget makes it worth it.",
      },
    ],
    faqs: [
      {
        question: "Are promo codes or affiliate links better for tracking influencer sales?",
        answer:
          "Use both. Codes catch buyers who don't click, including people who hear the code in a video. Links catch buyers who click but don't enter a code. Together, with one rule to avoid double counting, they catch more than either alone.",
      },
      {
        question: "How do I stop influencer codes leaking to coupon sites?",
        answer:
          "Limit uses per customer, set an expiry, restrict the code to the promoted products and watch coupon sites during the campaign. If a code leaks, retire it and issue a new one, and treat orders after the leak with caution.",
      },
      {
        question: "Do code sales show the full impact of an influencer?",
        answer:
          "No. They are the sales you can attribute, which is a minimum in one sense and an overstatement in another: some code users would have bought anyway, and many influenced buyers never use the code. Incrementality tests estimate the real effect.",
      },
    ],
  },
  // Topic 68 (topic 70, the customer journey, is folded in)
  {
    slug: "influencer-marketing-attribution-models",
    category: "Campaign Strategy",
    title: "Influencer Marketing Attribution Models Explained: First Click, Last Click and Beyond",
    seoTitle: "Influencer Marketing Attribution Models Explained",
    excerpt:
      "How first-click, last-click, linear, position-based and data-driven attribution share credit for a sale, what GA4 still offers, why creator content is under-credited by click-based models, and how to see the creator's role across the customer journey.",
    metaDescription:
      "Attribution models for influencer marketing compared: last click, first click, linear, data-driven, what GA4 offers now, and how to measure creators across the journey.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer marketing attribution", "attribution models", "first click vs last click", "data-driven attribution", "customer journey measurement"],
    related: ["influencer-marketing-incrementality", "influencer-utm-tracking", "influencer-marketing-funnel"],
    hero: {
      src: "/blog/brand-guides/influencer-marketing-attribution-models.svg",
      alt: "A customer journey from creator video to purchase, with credit shared differently by each attribution model",
    },
    body: [
      {
        type: "paragraph",
        text: "A customer watches a creator's Reel on Monday, looks at your Instagram profile, searches your brand on Thursday, opens an email on Saturday and buys. Which channel earned the sale? An attribution model is the rule you pick to answer that question. Different rules give the creator very different amounts of credit, and none of them proves the creator caused the sale.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Attribution models divide credit for a conversion among the tracked touchpoints before it. Last-click gives it all to the final touch, first-click to the first, linear splits it equally, position-based favors the first and last, and data-driven models assign it from patterns in your own data. Creator content usually starts journeys and is often seen without a click, so click-based models tend to under-credit it. GA4 now offers data-driven and two last-click models. Use attribution to compare creators and channels on the same basis, and use incrementality tests to find out what creators actually added.",
      },
      { type: "heading", text: "Attribution is not incrementality", id: "attribution-vs-incrementality" },
      {
        type: "paragraph",
        text: "Every model, however sophisticated, shares out credit among touches that were recorded. It cannot tell you whether the sale would have happened without the campaign. That needs a comparison group that didn't see the activity. Influencer marketing incrementality covers those tests; this guide covers how credit is shared.",
        links: [{ text: "Influencer marketing incrementality", href: "/blog/influencer-marketing-incrementality" }],
      },
      { type: "heading", text: "The models compared", id: "models" },
      {
        type: "table",
        headers: ["Model", "How it shares credit", "Effect on creator content", "Still in GA4?"],
        rows: [
          ["Last click (paid and organic)", "All credit to the last non-direct touch", "Under-credits creators who start journeys", "Yes"],
          ["Google paid channels last click", "All credit to the last Google Ads click, if any", "Creators get none unless nothing paid was clicked", "Yes"],
          ["First click", "All credit to the first touch", "Favors creators who introduce the brand", "No"],
          ["Linear", "Equal credit to every touch", "Gives creators a share, but a fixed one", "No"],
          ["Time decay", "More credit to touches closer to the sale", "Under-credits early creator touches", "No"],
          ["Position-based", "Most credit to first and last, the rest split", "Rewards creators that start journeys", "No"],
          ["Data-driven", "Credit from patterns in your account's converting and non-converting paths", "Depends on data volume and on creator touches being tracked at all", "Yes (the default)"],
        ],
      },
      {
        type: "paragraph",
        text: "Google says the first click, linear, time decay and position-based models stopped being available in GA4 as of November 2023. The remaining models are data-driven, paid and organic last click, and Google paid channels last click. Lookback windows are 30 days by default for acquisition key events (7 days is the alternative) and 90 days by default for other key events (30 or 60 are the alternatives).",
        links: [
          { text: "stopped being available in GA4 as of November 2023", href: EXT.ga4AttributionModels },
          { text: "Lookback windows", href: EXT.ga4AttributionSettings },
        ],
      },
      { type: "heading", text: "One journey, five answers", id: "worked-example" },
      {
        type: "paragraph",
        text: "Hypothetical example. A ₹3,000 order follows four tracked touches: a creator's link (day 1), an organic Google search (day 4), an email (day 6) and a direct visit where the purchase happens (day 7).",
      },
      {
        type: "table",
        headers: ["Model", "Creator link", "Organic search", "Email", "Direct"],
        rows: [
          ["Last click (non-direct)", "₹0", "₹0", "₹3,000", "₹0"],
          ["First click", "₹3,000", "₹0", "₹0", "₹0"],
          ["Linear (across the three non-direct touches)", "₹1,000", "₹1,000", "₹1,000", "₹0"],
          ["Position-based (40% first, 40% last, 20% middle)", "₹1,200", "₹600", "₹1,200", "₹0"],
          ["Data-driven", "Depends on your data", "", "", ""],
        ],
      },
      {
        type: "paragraph",
        text: "Hypothetical figures; the linear and position-based rows ignore the direct visit, as last non-direct models do. The point is the range: the same creator is worth nothing or the whole order depending on the rule. And if the customer had only watched the Reel without clicking, every model would give the creator nothing, because no touch was recorded.",
      },
      { type: "heading", text: "Platform-reported conversions", id: "platform-reporting" },
      {
        type: "paragraph",
        text: "Ad platforms report conversions using their own attribution settings, which can include people who saw an ad without clicking it. When creator content runs as partnership ads or other creator ads, the platform's number and your analytics will differ, and adding them together double counts. Report platform conversions as the platform's view, label the attribution setting, and use your own analytics or order data as the common basis for comparing channels.",
      },
      { type: "heading", text: "Self-reported attribution", id: "self-reported" },
      {
        type: "paragraph",
        text: "A 'how did you hear about us?' question at checkout catches influence that left no click at all, which is exactly where creators are most under-credited. List creators and platforms by name, include 'a friend or family member' and 'other', and compare the share naming creators with what your click-based reports say. Self-reports depend on memory, so treat them as a second opinion, not a replacement.",
      },
      { type: "heading", text: "Measuring the creator's role across the customer journey", id: "customer-journey" },
      {
        type: "paragraph",
        text: "Creators rarely do one job. They introduce the brand, answer questions people have before buying, nudge a purchase and sometimes bring customers back. To see that role, look at evidence at each stage rather than a single attribution number.",
      },
      {
        type: "table",
        headers: ["Journey stage", "What creators do", "Evidence to look at"],
        rows: [
          ["Discovery", "Introduce the brand to new people", "Reach in the target market, new profile visitors, first-time site visitors from creator links"],
          ["Consideration", "Demonstrate, compare and answer questions", "Saves, product questions in comments, branded search and direct traffic against a baseline"],
          ["Conversion", "Give a reason to act now", "Code and link orders, deduplicated; conversion rate from creator traffic"],
          ["Assisting", "Appear earlier in paths that end elsewhere", "GA4's attribution paths report: creator traffic in early and middle touches"],
          ["Retention", "Help customers use the product and come back", "Repeat purchase rate of creator-acquired customers"],
        ],
      },
      {
        type: "paragraph",
        text: "GA4's Advertising section includes an attribution paths report (formerly called conversion paths) showing which channels start, assist and close key events. It only sees tagged, consented visits, so it shows part of the creator's role, not all of it. The influencer marketing funnel explains the stages, and customer quality from influencer campaigns covers the retention end.",
        links: [
          { text: "attribution paths report", href: EXT.ga4AdvertisingReports },
          { text: "The influencer marketing funnel", href: "/blog/influencer-marketing-funnel" },
          { text: "customer quality from influencer campaigns", href: "/blog/influencer-customer-quality" },
        ],
      },
      { type: "heading", text: "Choosing an approach", id: "choosing" },
      {
        type: "table",
        headers: ["Situation", "Practical approach"],
        rows: [
          ["Comparing creators inside one campaign", "One consistent rule (codes plus links, deduplicated); the model matters less than consistency"],
          ["Comparing creators with other channels", "The same analytics model for every channel, plus a self-reported question"],
          ["Deciding whether to keep funding creators", "A holdout or geographic test, not a different attribution model"],
          ["Several years of multi-channel spend", "Marketing mix modeling, calibrated with tests"],
        ],
      },
      {
        type: "paragraph",
        text: "Marketing mix modeling is covered in influencer marketing and marketing mix modeling.",
        links: [{ text: "influencer marketing and marketing mix modeling", href: "/blog/influencer-marketing-mix-modeling" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Switching models between reports, so creators look better or worse for reasons that have nothing to do with them.",
          "Adding platform-reported and analytics conversions together.",
          "Judging awareness creators on last-click sales.",
          "Treating a data-driven model's output as proof of cause.",
          "Ignoring buyers who never clicked, because no model can see them.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Attribution models are accounting rules for sharing credit, and click-based ones see only part of what creators do. Pick one rule, apply it to every channel, add a self-reported question, look at the creator's role stage by stage, and use controlled tests when the question is whether creators are worth the money.",
      },
    ],
    faqs: [
      {
        question: "Which attribution model is best for influencer marketing?",
        answer:
          "No model is correct; each is a rule for sharing credit. Use one consistently across channels, add a post-purchase survey for influence without clicks, and use incrementality tests for budget decisions. Last-click models usually under-credit creators who start journeys.",
      },
      {
        question: "Does GA4 still have first-click attribution?",
        answer:
          "No. Google says the first click, linear, time decay and position-based models were removed from GA4 as of November 2023. GA4 offers data-driven, paid and organic last click, and Google paid channels last click.",
      },
      {
        question: "How do I measure influencer impact across the customer journey?",
        answer:
          "Look at evidence by stage: reach and new visitors for discovery, saves and branded search for consideration, deduplicated code and link orders for conversion, attribution paths for assisting touches, and repeat purchase for retention.",
      },
    ],
  },
  // Topic 69
  {
    slug: "influencer-engagement-no-sales",
    category: "Campaign Strategy",
    title: "Why Influencer Campaigns Generate Engagement but Not Sales",
    seoTitle: "Influencer Engagement but No Sales? How to Diagnose It",
    excerpt:
      "Likes and comments without orders usually have a findable cause: broken tracking, the wrong audience, a weak next step, a landing page that loses people, or an objective that was never about sales. A stage-by-stage diagnosis and what to change.",
    metaDescription:
      "Influencer posts getting engagement but no sales? Check tracking, audience fit, the call to action, landing page and offer, stage by stage, and know what to change next.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer engagement no sales", "influencer campaign not converting", "influencer marketing conversions", "creator campaign diagnosis"],
    related: ["influencer-engagement-quality", "influencer-campaign-optimization", "scale-pause-stop-influencer-campaigns"],
    hero: {
      src: "/blog/brand-guides/influencer-engagement-no-sales.svg",
      alt: "Where engagement fails to become sales: tracking, audience, call to action, landing page and offer",
    },
    body: [
      {
        type: "paragraph",
        text: "The Reels did well. Thousands of likes, hundreds of comments, creators happy with the numbers. The sales report shows a handful of orders. Before deciding that influencer marketing doesn't work for your brand, find out where the chain from attention to purchase broke. It usually breaks in one or two specific places, and most of them can be fixed.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Engagement without sales usually comes from one of six causes: sales are happening but aren't being tracked, the engaged audience isn't your buyer (wrong country, age or intent), the content entertained without giving a clear reason or way to buy, the landing page or checkout lost people, the offer or price didn't fit the audience, or the campaign was built for awareness and judged on sales. Check them in that order, using clicks, landing-page behavior and orders as stage-by-stage evidence, and change one thing at a time.",
      },
      { type: "heading", text: "Step 1: check whether sales are really missing", id: "check-measurement" },
      {
        type: "list",
        items: [
          "Do the creator links work on a phone, and do the tags survive any redirect?",
          "Is the code active, on the right products, and spelled the way the creator said it?",
          "Are buyers going to a marketplace, a store, WhatsApp or cash on delivery, where your report can't see them?",
          "Has enough time passed? Considered purchases can follow days or weeks after the post.",
          "Did branded search, direct traffic or baseline sales move during the campaign, even if codes didn't?",
        ],
      },
      {
        type: "paragraph",
        text: "If the answer to any of these is unclear, fix measurement before judging the creators. How to track influencer sales covers codes, links and untracked channels, and how long influencer marketing takes to show results covers sensible waiting times.",
        links: [
          { text: "How to track influencer sales", href: "/blog/track-influencer-sales" },
          { text: "how long influencer marketing takes to show results", href: "/blog/how-long-influencer-marketing-results" },
        ],
      },
      { type: "heading", text: "Step 2: find the stage where people drop off", id: "find-the-stage" },
      {
        type: "paragraph",
        text: "Write the chain out with your own numbers. Hypothetical example: 2,00,000 views, 0.4% of viewers click (800 clicks), 1% of visitors buy (8 orders). Then compare each step with your normal rates from other channels. If your site usually converts 2.5% of visitors and creator traffic converts 1%, the problem is after the click. If creator traffic converts normally but almost nobody clicks, the problem is in the content, the audience or the call to action.",
      },
      {
        type: "table",
        headers: ["Symptom", "Likely causes", "What to check"],
        rows: [
          ["High engagement, very few clicks", "No clear call to action; link hard to find; content entertained but didn't sell; audience not in a buying mood", "Was the product shown in use? Was there a reason to act now? Where was the link?"],
          ["Engagement from the wrong places", "Creator's audience outside your selling regions or age group", "Audience location and age from creator insights; traffic by country in analytics"],
          ["Suspiciously generic engagement", "Giveaway hunters, engagement groups or bought engagement", "Comment audit: product questions versus emojis and 'nice post'"],
          ["Clicks, but visitors leave quickly", "Slow page, wrong landing page, message mismatch, in-app browser problems", "Load time on mobile; does the page show what the creator showed?"],
          ["Add to cart, but no orders", "Shipping cost or delivery coverage, payment options, price surprise", "Checkout drop-off; delivery pin codes or regions; cash on delivery availability"],
          ["Orders only with a big discount", "Audience curious but price-sensitive; product-audience fit", "Order value and margin by creator; repeat purchase later"],
        ],
      },
      {
        type: "paragraph",
        text: "Judging engagement quality, including comment audits and suspicious patterns, is covered in influencer engagement quality.",
        links: [{ text: "influencer engagement quality", href: "/blog/influencer-engagement-quality" }],
      },
      { type: "heading", text: "Step 3: check the objective and the creator fit", id: "objective-and-fit" },
      {
        type: "paragraph",
        text: "Some campaigns were never built to sell directly. Entertainment-led creators, broad lifestyle audiences and storytelling briefs build familiarity, and familiarity often turns into sales slowly and through other channels. If the brief asked for reach and the review asks for orders, the campaign hasn't failed; the measurement has. Equally, if you need direct sales, the creator mix should lean towards people whose audiences already buy on their recommendation: reviewers, experts and creators with a history of driving clicks.",
      },
      {
        type: "list",
        items: [
          "Was the primary KPI agreed before launch? Influencer marketing KPIs covers matching KPIs to objectives.",
          "Have these creators driven sales for other brands in your price range?",
          "Did the content show the product being used, by someone the audience trusts on that topic?",
          "Was the price a stretch for this audience?",
        ],
      },
      {
        type: "paragraph",
        text: "The full KPI framework is in influencer marketing KPIs.",
        links: [{ text: "influencer marketing KPIs", href: "/blog/influencer-marketing-kpis" }],
      },
      { type: "heading", text: "What to change, and in what order", id: "what-to-change" },
      {
        type: "table",
        headers: ["Where it broke", "First change to try"],
        rows: [
          ["Measurement", "Fix links and codes; add a post-purchase survey; extend the window"],
          ["Content", "Brief for product-in-use, a specific reason to buy and a clear next step; keep the creator's voice"],
          ["Call to action", "Story link sticker or pinned link plus a spoken code; one action, not three"],
          ["Audience", "Rebook creators whose audience is in your market and price range"],
          ["Landing page", "Send creator traffic to the product shown, fast on mobile, with the code applied automatically if possible"],
          ["Offer or price", "Test a bundle or starter size rather than a deeper discount"],
        ],
      },
      {
        type: "paragraph",
        text: "Change one thing per round, so you know what worked. Mid-campaign influencer optimization covers what can still change while posts are live, and creator campaign testing covers structured tests.",
        links: [
          { text: "Mid-campaign influencer optimization", href: "/blog/mid-campaign-optimization" },
          { text: "creator campaign testing", href: "/blog/influencer-marketing-testing" },
        ],
      },
      { type: "heading", text: "When to stop rather than fix", id: "when-to-stop" },
      {
        type: "paragraph",
        text: "If measurement is sound, the landing page converts other traffic normally, the creators fit and a fixed round still produces sales far below break-even, the answer may be that this audience, product or price doesn't work through creators right now. How to decide whether to scale, pause or stop an influencer campaign sets out how to make that call on evidence.",
        links: [{ text: "How to decide whether to scale, pause or stop an influencer campaign", href: "/blog/scale-pause-stop-influencer-campaigns" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Judging an awareness brief on direct sales.",
          "Blaming creators before testing the links, code and landing page.",
          "Choosing creators by engagement rate alone, without checking audience location and buying intent.",
          "Sending creator traffic to the homepage.",
          "Fixing several things at once, so nothing is learned.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Engagement without sales is a symptom, not a verdict. Check measurement first, find the stage where people drop off by comparing with your normal rates, confirm the objective and creator fit, then fix one thing at a time. If a fixed, well-measured round still falls short, stop with confidence rather than on a hunch.",
      },
    ],
    faqs: [
      {
        question: "Why do influencer posts get likes but no sales?",
        answer:
          "Common causes are untracked sales, an engaged audience that isn't your buyer, content with no clear reason or way to buy, a landing page or checkout that loses people, an offer that doesn't fit the audience, or a campaign designed for awareness being judged on sales.",
      },
      {
        question: "Is high engagement a good sign for sales?",
        answer:
          "Not on its own. Saves, product questions and clicks are better signs of buying intent than likes. Check whether the engagement comes from people in your market and price range.",
      },
      {
        question: "How long should I wait for sales after an influencer post?",
        answer:
          "Low-cost products often sell within days; considered purchases can take weeks. Agree the measurement window before launch and judge results at the end of it.",
      },
    ],
  },
  // Topic 80 (topic 75, turning reports into decisions, is folded in)
  {
    slug: "scale-pause-stop-influencer-campaigns",
    category: "Campaign Strategy",
    title: "How to Decide Whether to Scale, Pause or Stop an Influencer Marketing Campaign",
    seoTitle: "Scale, Pause or Stop an Influencer Campaign? How to Decide",
    excerpt:
      "A decision framework for creator campaigns: rules to set before launch, the evidence for scaling, fixing, pausing or stopping at creator, campaign and program level, and how to turn a report into decisions someone owns.",
    metaDescription:
      "Decide whether to scale, pause or stop an influencer campaign: decision rules set before launch, evidence thresholds, scaling safely, and turning reports into decisions.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "6 min read",
    tags: ["scale influencer campaign", "stop influencer campaign", "influencer campaign decisions", "influencer report to decision", "influencer budget decisions"],
    related: ["influencer-marketing-testing", "influencer-campaign-post-mortem", "influencer-engagement-no-sales"],
    hero: {
      src: "/blog/brand-guides/scale-pause-stop-influencer-campaigns.svg",
      alt: "Four outcomes of a campaign review: scale, fix, pause or stop, each with the evidence it needs",
    },
    body: [
      {
        type: "paragraph",
        text: "Most creator campaigns end with a report and no decision. The numbers are mixed, nobody agreed beforehand what 'good' looked like, and the next campaign gets planned on instinct. The fix is to decide the decision rules before launch, so the report has something to answer.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Set decision rules before launch: the primary KPI, the threshold that counts as success (usually your break-even cost per result), the minimum sample and the measurement window. At the review, scale when results beat the threshold, hold across more than one creator and survive a comparison with a baseline. Fix when one identifiable stage is broken. Pause when the evidence isn't in yet or something outside the campaign is distorting it. Stop when a well-measured, fixed round still falls clearly short. Make the decision at creator, campaign and program level separately, and write down who owns each action.",
      },
      { type: "heading", text: "Set the decision rules before launch", id: "decision-rules" },
      {
        type: "table",
        headers: ["Rule", "Example"],
        rows: [
          ["Primary KPI", "Cost per delivered first order"],
          ["Success threshold", "At or below break-even cost per order, including returns"],
          ["Minimum evidence", "At least 8 creators and 100 orders before judging the approach; individual creators judged on their own results only after 2 posts"],
          ["Measurement window", "Day 14 after each post, and campaign total at day 30"],
          ["Comparison", "Last 8 weeks of baseline sales in the same regions"],
          ["Who decides", "Growth lead, with finance sign-off above a stated budget"],
        ],
      },
      {
        type: "paragraph",
        text: "These example thresholds are illustrative; set yours from your margins and history. Break-even ROAS for influencer campaigns shows how to calculate the threshold, and creator campaign testing covers designing the first round as a test.",
        links: [
          { text: "Break-even ROAS for influencer campaigns", href: "/blog/break-even-roas-influencer-campaigns" },
          { text: "creator campaign testing", href: "/blog/influencer-marketing-testing" },
        ],
      },
      { type: "heading", text: "Scale, fix, pause or stop", id: "four-decisions" },
      {
        type: "table",
        headers: ["Decision", "When the evidence shows", "What to do"],
        rows: [
          ["Scale", "Results beat the threshold; hold across several creators or rounds; look real against a baseline or holdout; unit costs stay within margin", "Increase in steps, add similar creators, keep a comparison group"],
          ["Fix", "Most stages work but one is clearly broken (tracking, call to action, landing page, offer)", "Change that one thing and run another round"],
          ["Pause", "Too little data yet, a stock or delivery problem, a sale or festival distorting results, or a brand-safety issue being investigated", "Hold new bookings; keep measuring; set a date to decide"],
          ["Stop", "A fixed, well-measured round is still clearly below threshold; or creators don't fit the brand or rules", "Finish contracted work properly, record the learnings, move budget"],
        ],
      },
      { type: "heading", text: "Decide at three levels", id: "three-levels" },
      {
        type: "list",
        items: [
          "Creator: rebook, rebrief or drop each creator on their own results against the threshold, with a minimum sample. Creator performance scorecards keep this consistent.",
          "Campaign: was the approach (format, offer, audience, market) worth repeating, judged on the whole group of creators rather than the best one?",
          "Program: is creator marketing earning its share of the budget against other channels? This needs incrementality evidence, not just attributed sales.",
        ],
      },
      {
        type: "paragraph",
        text: "A campaign can fail while two creators in it succeed, and a program can be worth funding even when one campaign misses. Keep the three decisions separate. The program-level evidence is covered in influencer marketing incrementality.",
        links: [{ text: "influencer marketing incrementality", href: "/blog/influencer-marketing-incrementality" }],
      },
      { type: "heading", text: "Turning a report into decisions", id: "report-to-decisions" },
      {
        type: "paragraph",
        text: "A report describes what happened. A decision log says what you'll do about it, how sure you are and who's responsible. Add one to the end of every campaign report.",
      },
      {
        type: "template",
        label: "Decision log",
        text: "Finding | Evidence (measured / estimated / assumed) | Sample | Decision (scale / fix / pause / stop) | Owner | Review date\n\nExample (hypothetical):\nRegional-language creators delivered orders at 30% lower cost than Hindi-national creators | Measured, codes and links deduplicated | 8 vs 8 creators, 210 orders | Scale regional to 60% of next budget, keep 40% as comparison | Growth lead | After next campaign's day-30 read",
      },
      {
        type: "list",
        items: [
          "Every finding gets a decision, even if the decision is 'no change'.",
          "Label evidence honestly: measured, estimated or assumed.",
          "Name an owner and a date, or the decision won't happen.",
          "Read last campaign's log before planning the next one.",
        ],
      },
      {
        type: "paragraph",
        text: "Reporting itself is covered in how to create an influencer marketing report, and the review meeting in influencer campaign post-mortems.",
        links: [
          { text: "how to create an influencer marketing report", href: "/blog/influencer-marketing-report" },
          { text: "influencer campaign post-mortems", href: "/blog/influencer-campaign-post-mortem" },
        ],
      },
      {
        type: "paragraph",
        text: "Before a big step up in budget, an influencer marketing audit checks that results, tracking, rights and compliance can carry the extra weight.",
        links: [
          { text: "an influencer marketing audit", href: "/blog/influencer-marketing-audit" },
        ],
      },
      { type: "heading", text: "Scaling without breaking what worked", id: "scaling-safely" },
      {
        type: "list",
        items: [
          "Increase in steps, for example doubling rather than multiplying by ten, and re-read results after each step.",
          "Expect diminishing returns: the best-fit creators are booked first, so the next ones may perform less well.",
          "Check creator supply: are there enough similar creators in the market and language?",
          "Watch frequency: as more creators reach overlapping audiences, the same people see the message repeatedly.",
          "Keep a comparison group or region so you can see whether results still hold.",
          "Check operations: briefing, approvals, payments and rights must handle more creators.",
        ],
      },
      { type: "heading", text: "Pausing and stopping properly", id: "pausing-and-stopping" },
      {
        type: "list",
        items: [
          "Check contracts before pausing: posting dates, cancellation terms and fees already earned.",
          "Pay creators for completed work on time; a stopped campaign is not a reason to delay payment.",
          "Track usage rights, so paused or stopped content isn't run beyond what was licensed.",
          "Retire codes and update landing pages, so old links don't lead to dead offers.",
          "Tell creators why, briefly; good creators will want to work with you again.",
        ],
      },
      {
        type: "paragraph",
        text: "Cancellation terms and how to end a campaign fairly are covered in influencer campaign cancellation.",
        links: [{ text: "influencer campaign cancellation", href: "/blog/influencer-campaign-cancellation" }],
      },
      { type: "heading", text: "Hypothetical example", id: "hypothetical-example" },
      {
        type: "paragraph",
        text: "Hypothetical. A home-fragrance brand runs 12 micro-creators for four weeks with a break-even cost per delivered order of ₹900. Overall cost per order is ₹1,150, above threshold. But five creators who showed the product in use in a real room came in at ₹700, while seven who posted styled flat-lays came in at ₹1,500. The campaign-level decision is 'fix': the next round briefs every creator for product-in-use content. The creator-level decision is 'rebook' for four of the five and 'stop' for the flat-lay creators with no sign of improvement. The program decision waits for the second round and a regional comparison.",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Setting the success threshold after seeing results.",
          "Scaling on one viral post.",
          "Stopping a campaign whose tracking was broken.",
          "Judging a program on one campaign, or a campaign on one creator.",
          "Reports with findings but no owners or dates.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Decide the decision rules before launch, then let the evidence choose between scale, fix, pause and stop, separately for creators, campaigns and the program. End every report with a decision log, so the next campaign starts from what you learned rather than from scratch.",
      },
    ],
    faqs: [
      {
        question: "When should I scale an influencer campaign?",
        answer:
          "When results beat a threshold you set before launch, such as break-even cost per order, hold across more than one creator or round, and look real against a baseline or holdout. Scale in steps and keep a comparison group.",
      },
      {
        question: "When should I stop an influencer campaign?",
        answer:
          "When a round with working tracking, a sound landing page and well-fitted creators still falls clearly short of your threshold after a fix has been tried. Finish contracted work and payments properly, and record what you learned.",
      },
      {
        question: "How do I turn an influencer report into decisions?",
        answer:
          "Add a decision log: each finding, how strong the evidence is, the decision (scale, fix, pause or stop), an owner and a review date. Read it before planning the next campaign.",
      },
    ],
  },
];
