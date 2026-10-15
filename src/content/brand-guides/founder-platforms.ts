import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";
import { SOURCES } from "@/content/creator-resources/shared";

/**
 * Founder questions, batch 6 (roadmap topics 101–120, platform-specific influencer marketing). Two genuinely missing
 * pages: a cross-market comparison of Instagram, YouTube and TikTok that also answers how to choose a platform for a
 * budget (113, with 120 folded in), and disclosure rules by platform and country (119). The other topics update the
 * existing platform owners. See docs/founder-questions-101-120-audit.md.
 */
const PUBLISHED = "2026-10-14";
const REVIEWED = "October 2026";

const EXT = {
  youtubeCreatorPartnerships: "https://support.google.com/youtube/answer/9385307",
  youtubePaidPromotion: "https://support.google.com/youtube/answer/154235",
  tiktokDisclosure: "https://ads.tiktok.com/help/article/about-the-content-disclosure-setting-for-creators",
  pinterestPaidPartnership: "https://help.pinterest.com/en/node/3261",
  nmaPermit: "https://www.nmo.gov.ae/en/initiatives/advertiser-permit-1",
  gamr: "https://gamr.gov.sa/en",
  asaInfluencersGuide: "https://www.asa.org.uk/resource/influencers-guide.html",
  cmaWhoRegulates: "https://assets.publishing.service.gov.uk/media/68b81754536d629f9c82aa16/Who_regulates_hidden_advertising.pdf",
  aanaCode: "https://aana.com.au/code-of-ethics/",
  acccInfluencers: "https://www.accc.gov.au/about-us/publications/social-media-influencer-testimonials-and-endorsements",
  asasSocial: "https://asas.org.sg/About/Social-Media",
};

export const founderPlatformPosts: BlogPost[] = [
  // Topic 113 (topic 120, choosing a platform for a budget, is folded in)
  {
    slug: "instagram-vs-youtube-vs-tiktok",
    category: "Campaign Strategy",
    title: "Instagram vs YouTube vs TikTok: Which Platform Fits Your Creator Campaign?",
    seoTitle: "Instagram vs YouTube vs TikTok for Influencer Marketing",
    excerpt:
      "How Instagram, YouTube and TikTok differ for creator campaigns: what each does best, where each is available across India, the Gulf, the UK, Australia and Singapore, and how to choose by audience, objective, format, budget and measurement.",
    metaDescription:
      "Instagram vs YouTube vs TikTok for creator campaigns: strengths, availability in India, the Gulf, UK, Australia and Singapore, and choosing by goal, budget and tracking.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "8 min read",
    tags: ["instagram vs youtube vs tiktok", "best platform for influencer marketing", "choose influencer platform", "influencer platform budget", "tiktok vs instagram for brands"],
    related: ["multi-platform-influencer-campaigns", "influencer-marketing-platforms-india", "instagram-vs-tiktok-vs-snapchat-uae"],
    hero: {
      src: "/blog/brand-guides/instagram-vs-youtube-vs-tiktok.svg",
      alt: "Instagram, YouTube and TikTok compared by format, discovery, shelf life and conversion path",
    },
    body: [
      {
        type: "paragraph",
        text: "Most brands pick a creator platform by habit: the one the marketing team uses, or the one a competitor seems to be on. A better starting point is where your customers actually spend attention, what the content needs to do, and whether you can measure the result. The three big video platforms do different jobs, and one of them isn't available in India at all.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Choose Instagram when you need short, visual content that sits close to purchase, with Stories links and creator ads. Choose YouTube when the product needs explaining: reviews, demos and comparisons that people search for and watch for months. Choose TikTok for fast discovery and trend-led reach in markets where it's available, which excludes India. Then check five things before committing budget: where your audience is in each market, the objective, the format the product needs, how buyers will get from the content to a purchase, and whether you can measure it.",
      },
      { type: "heading", text: "What each platform does best", id: "comparison" },
      {
        type: "table",
        headers: ["", "Instagram", "YouTube", "TikTok"],
        rows: [
          ["Core creator formats", "Reels, Stories, carousels, Live", "Long-form videos, Shorts, Live", "Short videos, Live"],
          ["How people find content", "Followers plus recommendations", "Search and recommendations", "Mostly the recommendation feed"],
          ["Shelf life of a post", "Days for Reels, 24 hours for Stories", "Long-form can keep getting views for months", "Usually short, with occasional resurfacing"],
          ["Path to purchase", "Story link stickers, bio links, codes, product tags where available", "Description links, pinned comments, codes, YouTube Shopping where available", "Bio links, codes, TikTok Shop where available"],
          ["Running creator content as ads", "Partnership ads with the creator's permission", "Ads from creator videos with permission", "Spark Ads with the creator's authorisation"],
          ["Best for", "Lifestyle, beauty, fashion, food, D2C launches", "Considered purchases: tech, finance, education, auto, B2B", "Discovery, trends, younger audiences, entertainment-led products"],
        ],
      },
      {
        type: "paragraph",
        text: "These are tendencies, not rules. A finance brand can do well with Instagram explainers, and a beauty brand with long YouTube reviews. Platform guides go deeper: Instagram influencer marketing, YouTube influencer marketing and YouTube Shorts vs long-form.",
        links: [
          { text: "Instagram influencer marketing", href: "/blog/instagram-influencer-marketing" },
          { text: "YouTube influencer marketing", href: "/blog/youtube-influencer-marketing-india" },
          { text: "YouTube Shorts vs long-form", href: "/blog/youtube-shorts-influencer-marketing" },
        ],
      },
      { type: "heading", text: "Availability by market", id: "availability" },
      {
        type: "table",
        headers: ["Market", "Instagram", "YouTube", "TikTok", "Also consider"],
        rows: [
          ["India", "Available", "Available", "Not available (blocked since 2020)", "Regional short-video apps, LinkedIn for B2B"],
          ["UAE", "Available", "Available", "Available", "Snapchat; creator advertiser permits apply"],
          ["Saudi Arabia", "Available", "Available", "Available", "Snapchat; Mawthooq licences apply"],
          ["United Kingdom", "Available", "Available", "Available", "Podcasts, LinkedIn for B2B"],
          ["Australia", "Available", "Available", "Available", "Under-16 social media age rules affect youth campaigns"],
          ["Singapore", "Available", "Available", "Available", "Multilingual audiences; sector rules for finance and healthcare"],
        ],
      },
      {
        type: "paragraph",
        text: "India's TikTok status is confirmed in the government's own statement that no order has been issued to lift the ban. YouTube's Creator Partnerships tools for finding creators are available in all six of these markets. Commerce features such as TikTok Shop and YouTube Shopping vary by country and change often, so check the current help pages for each market before planning shoppable content.",
        links: [
          { text: "the government's own statement", href: SOURCES.tiktokIndiaBlockStatus },
          { text: "YouTube's Creator Partnerships tools", href: EXT.youtubeCreatorPartnerships },
        ],
      },
      { type: "heading", text: "Choose by objective", id: "by-objective" },
      {
        type: "table",
        headers: ["Objective", "Usually leads", "Why"],
        rows: [
          ["Awareness in a new audience", "TikTok or Instagram Reels (YouTube Shorts in India)", "Recommendation feeds show creators to non-followers"],
          ["Consideration for a complex product", "YouTube long-form", "Time to explain, compare and answer objections; searchable for months"],
          ["Direct sales of a visual product", "Instagram", "Stories links, codes and creator ads close to purchase"],
          ["Launch-day spike", "Instagram plus TikTok or Shorts", "Many creators posting in a short window"],
          ["Content for your own ads", "Whichever platform you advertise on most", "Rights and ad permissions are platform-specific"],
          ["B2B leads", "LinkedIn, then YouTube", "Professional context; longer explanations"],
        ],
      },
      { type: "heading", text: "Choose by budget", id: "by-budget" },
      {
        type: "paragraph",
        text: "Budget changes the answer more than most brands expect. Long-form YouTube integrations usually cost more per creator because they take more scripting, filming and editing, so a small budget buys fewer of them. Short-form platforms let the same budget spread across more creators, which is better for testing and reach. Paid amplification of creator content needs its own line.",
      },
      {
        type: "list",
        items: [
          "Small test budget: one platform, several creators, one objective. Spreading a small budget across three platforms leaves too little on each to learn anything.",
          "Mid budget: a lead platform for the objective plus a second for reach or content reuse, with tracking set up on both.",
          "Larger budget: give each platform a job, and keep a share for paid amplification of the best creator content.",
        ],
      },
      {
        type: "paragraph",
        text: "Fees vary too much by creator, niche and market for a reliable rate card; price from quotes for your exact scope. How much to pay influencers and the market cost guides explain the drivers, and influencer marketing budget covers splitting spend.",
        links: [
          { text: "How much to pay influencers", href: "/blog/how-much-to-pay-influencers" },
          { text: "influencer marketing budget", href: "/blog/influencer-marketing-budget" },
        ],
      },
      { type: "heading", text: "Check the path to purchase and measurement", id: "conversion-and-measurement" },
      {
        type: "list",
        items: [
          "Where will buyers click? Instagram feed captions and Reels captions don't carry clickable links; Stories and bios do. YouTube descriptions do.",
          "Where will they buy? Your site, a marketplace, an in-app shop, a store or WhatsApp. Plan codes and links for each.",
          "What can you see? Ask creators for native insights on a fixed day; platform metric definitions differ (YouTube counted views differently from 24 August 2026).",
          "Can you run the content as ads? Each platform has its own permission flow; agree it in the contract.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer UTM tracking and how to track influencer sales cover the setup, and reach vs impressions vs views explains the metric differences.",
        links: [
          { text: "Influencer UTM tracking", href: "/blog/influencer-utm-tracking" },
          { text: "how to track influencer sales", href: "/blog/track-influencer-sales" },
          { text: "reach vs impressions vs views", href: "/blog/influencer-reach-vs-impressions" },
        ],
      },
      { type: "heading", text: "Beyond the big three", id: "other-platforms" },
      {
        type: "list",
        items: [
          "LinkedIn: B2B and professional audiences; see LinkedIn influencer marketing.",
          "Snapchat: important for younger audiences in Saudi Arabia and the UAE; see Instagram vs TikTok vs Snapchat in the UAE.",
          "Podcasts: trust built over long listening; see podcast influencer marketing.",
          "Pinterest: planning and inspiration searches; see Pinterest creator marketing.",
        ],
      },
      {
        type: "paragraph",
        text: "Guides: LinkedIn influencer marketing, Instagram vs TikTok vs Snapchat in the UAE, podcast influencer marketing and Pinterest creator marketing. Market-specific platform comparisons are in the best platforms in India and Instagram, TikTok and YouTube in Australia.",
        links: [
          { text: "LinkedIn influencer marketing", href: "/blog/linkedin-influencer-marketing-india" },
          { text: "Instagram vs TikTok vs Snapchat in the UAE", href: "/blog/instagram-vs-tiktok-vs-snapchat-uae" },
          { text: "podcast influencer marketing", href: "/blog/podcast-influencer-marketing-india" },
          { text: "Pinterest creator marketing", href: "/blog/pinterest-creator-marketing" },
          { text: "the best platforms in India", href: "/blog/influencer-marketing-platforms-india" },
          { text: "Instagram, TikTok and YouTube in Australia", href: "/blog/instagram-tiktok-youtube-influencer-marketing-australia" },
        ],
      },
      { type: "heading", text: "Hypothetical example", id: "hypothetical-example" },
      {
        type: "paragraph",
        text: "Hypothetical. A skincare brand selling in India and the UAE wants first orders and content for its ads. In India it leads with Instagram (Reels for reach, Stories links for orders) and adds two YouTube reviews for people researching ingredients. In the UAE it uses Instagram and TikTok, checks every creator's advertiser permit, and secures partnership ad and Spark Ads permissions so the best videos can run as ads. Each platform gets its own codes and links, and results are reported per market and platform before any budget is moved.",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Planning TikTok for an India campaign.",
          "Choosing the platform before the objective.",
          "Spreading a small budget across every platform.",
          "Comparing views across platforms as if they were counted the same way.",
          "Forgetting that ad permissions are platform-specific.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Instagram, YouTube and TikTok aren't interchangeable. Start from the audience in each market, the objective and the format the product needs, then check the path to purchase, the budget and whether you can measure the result. For more than one platform at once, see multi-platform influencer campaigns.",
        links: [{ text: "multi-platform influencer campaigns", href: "/blog/multi-platform-influencer-campaigns" }],
      },
    ],
    faqs: [
      {
        question: "Is TikTok available for influencer marketing in India?",
        answer:
          "No. TikTok has been blocked in India since 2020, and the government has said no order has been issued to lift the ban. Indian campaigns usually use Instagram and YouTube instead.",
      },
      {
        question: "Which is better for influencer marketing, Instagram or YouTube?",
        answer:
          "It depends on the job. Instagram suits short, visual content close to purchase; YouTube suits products that need explaining and content people search for. Many brands use both, with different objectives for each.",
      },
      {
        question: "How do I choose a social platform for a small influencer budget?",
        answer:
          "Pick one platform where your audience is and the content format suits the product, run several creators on one objective, and track results. Add a second platform only once the first is working.",
      },
    ],
  },
  // Topic 119
  {
    slug: "influencer-disclosure-rules-by-country",
    category: "Campaign Strategy",
    title: "Influencer Disclosure Rules by Platform and Country: What Brands Should Check",
    seoTitle: "Influencer Disclosure Rules by Platform and Country",
    excerpt:
      "Platform labels and country rules are different obligations. A side-by-side guide to disclosure tools on Instagram, YouTube, TikTok, Pinterest and Reddit, and to the rules and regulators in India, the UAE, Saudi Arabia, the UK, Australia and Singapore.",
    metaDescription:
      "Influencer disclosure rules compared: platform tools on Instagram, YouTube, TikTok and Pinterest, and the rules in India, the Gulf, the UK, Australia and Singapore.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "8 min read",
    tags: ["influencer disclosure rules", "paid partnership label", "influencer ad disclosure by country", "sponsored content rules", "influencer compliance"],
    related: ["influencer-marketing-compliance", "multi-platform-influencer-campaigns", "creator-non-compliance"],
    hero: {
      src: "/blog/brand-guides/influencer-disclosure-rules-by-country.svg",
      alt: "Two layers of influencer disclosure: platform labels and country advertising rules",
    },
    body: [
      {
        type: "paragraph",
        text: "A creator ticks the paid partnership box, the post shows a label, and everyone assumes the campaign is compliant. Sometimes it is. But the platform label is the platform's rule; the advertising law of the country where the audience is has its own requirements, and in some markets the creator also needs a licence before posting at all.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Treat disclosure as two layers. First, the platform's own tool: Instagram's paid partnership label, YouTube's paid promotion setting, TikTok's content disclosure setting and Pinterest's paid partnership tag. Second, the rules of each market where the audience is: ASCI's guidelines in India, the advertiser permit in the UAE, the Mawthooq licence in Saudi Arabia, the ASA and CMA in the UK, the AANA code and consumer law in Australia, and ASAS guidelines in Singapore. Most require a clear, upfront label in words the audience understands, whatever the platform shows. Write both layers into the brief and contract, and check every post before and after it goes live.",
      },
      { type: "heading", text: "Layer 1: platform disclosure tools", id: "platform-tools" },
      {
        type: "table",
        headers: ["Platform", "Tool", "What it does", "Source"],
        rows: [
          ["Instagram", "Paid partnership label", "Adds 'Paid partnership with [brand]' under the creator's name; the brand is tagged", "Instagram Help Centre"],
          ["YouTube", "Paid promotion setting", "Creator selects that the video includes paid promotion; a disclosure label appears at the start", "YouTube Help"],
          ["TikTok", "Content disclosure setting", "Required when content promotes a brand, product or service; labels the post 'Paid partnership' or 'Promotional content'; undisclosed marketing can be excluded from the For You feed", "TikTok Ads Help"],
          ["Pinterest", "Paid partnership tag", "Creator tags the brand; the brand's name is added to the label if the brand approves", "Pinterest Help"],
          ["Reddit", "Brand Affiliate tag (reported)", "Reported as Reddit's tag for posts with a commercial connection; subreddit rules also apply", "Check Reddit's Help Center"],
          ["LinkedIn", "No verified creator label", "Write the disclosure in the post text; promoted posts carry LinkedIn's own ad label", "Check LinkedIn's current policies"],
        ],
      },
      {
        type: "paragraph",
        text: "Sources: Instagram's paid partnership label, YouTube's paid promotion policy, TikTok's content disclosure setting and Pinterest's paid partnership tag. YouTube's page is explicit that creators and their partners remain responsible for complying with the law; the setting alone doesn't satisfy it.",
        links: [
          { text: "Instagram's paid partnership label", href: SOURCES.instagramPaidPartnership },
          { text: "YouTube's paid promotion policy", href: EXT.youtubePaidPromotion },
          { text: "TikTok's content disclosure setting", href: EXT.tiktokDisclosure },
          { text: "Pinterest's paid partnership tag", href: EXT.pinterestPaidPartnership },
        ],
      },
      { type: "heading", text: "Why the platform label isn't enough", id: "labels-not-enough" },
      {
        type: "list",
        items: [
          "Regulators judge whether the audience clearly understood it was an ad, not whether a setting was ticked.",
          "Labels can be small, hidden by the interface or missing on reposts and screenshots.",
          "Some markets expect particular words, or a disclosure at the start of a video or caption.",
          "Licensing rules, such as permits in the UAE and Saudi Arabia, sit outside the platform entirely.",
          "Running creator content as ads changes the format but not the obligation to be clear it's advertising.",
        ],
      },
      { type: "heading", text: "Layer 2: the rules by country", id: "country-rules" },
      {
        type: "table",
        headers: ["Market", "Main rules and who enforces them", "What brands should check"],
        rows: [
          ["India", "ASCI influencer guidelines; consumer protection endorsement guidelines from the Department of Consumer Affairs", "An accepted label such as 'Ad', 'Sponsored', 'Collaboration' or 'Free gift', placed upfront; claims substantiated"],
          ["UAE", "National Media Authority; advertiser permit under Federal Decree-Law No. 55 of 2023, enforced from 31 January 2026", "The creator's advertiser permit (or visitor permit for non-residents), plus clear ad disclosure"],
          ["Saudi Arabia", "General Authority for Media Regulation (GAMR); E-Commerce Law", "The creator's Mawthooq licence; content clearly identifiable as advertising"],
          ["Qatar, Kuwait, Oman", "Separate national rules", "Check each country; don't assume UAE or Saudi rules apply"],
          ["United Kingdom", "ASA (CAP Code) and CMA; direct CMA fines under the DMCC Act since 6 April 2025", "Clear 'Ad' label upfront for any commercial relationship, including gifts and affiliate links"],
          ["Australia", "AANA Code of Ethics clause 2.7 (Ad Standards); Australian Consumer Law (ACCC)", "Advertising clearly distinguishable; vague labels such as 'gift' alone have been found unclear"],
          ["Singapore", "ASAS Guidelines on Interactive Marketing Communication and Social Media; sector rules from MAS and MOH", "Commercial relationships disclosed early and readably; finance and healthcare restrictions"],
        ],
      },
      {
        type: "paragraph",
        text: "Sources: ASCI's influencer guidelines, the Department of Consumer Affairs endorsement guidelines, the National Media Authority's advertiser permit page, GAMR, the ASA/CMA influencers' guide, the CMA's note on who regulates hidden advertising, the AANA Code of Ethics, the ACCC's influencer guidance and the ASAS guidelines. These summaries were checked in October 2026; rules change, so confirm before each campaign and take legal advice for significant spend.",
        links: [
          { text: "ASCI's influencer guidelines", href: SOURCES.asciGuidelines },
          { text: "the Department of Consumer Affairs endorsement guidelines", href: SOURCES.docaEndorsements },
          { text: "the National Media Authority's advertiser permit page", href: EXT.nmaPermit },
          { text: "GAMR", href: EXT.gamr },
          { text: "the ASA/CMA influencers' guide", href: EXT.asaInfluencersGuide },
          { text: "the CMA's note on who regulates hidden advertising", href: EXT.cmaWhoRegulates },
          { text: "the AANA Code of Ethics", href: EXT.aanaCode },
          { text: "the ACCC's influencer guidance", href: EXT.acccInfluencers },
          { text: "the ASAS guidelines", href: EXT.asasSocial },
        ],
      },
      {
        type: "paragraph",
        text: "Detailed market guides: influencer marketing compliance in India, the UAE advertiser permit, Saudi influencer advertising rules, UK influencer advertising rules and Australian influencer advertising rules.",
        links: [
          { text: "influencer marketing compliance in India", href: "/blog/influencer-marketing-compliance" },
          { text: "the UAE advertiser permit", href: "/blog/uae-advertiser-permit" },
          { text: "Saudi influencer advertising rules", href: "/blog/saudi-influencer-advertising-rules" },
          { text: "UK influencer advertising rules", href: "/blog/influencer-advertising-rules-uk" },
          { text: "Australian influencer advertising rules", href: "/blog/influencer-advertising-rules-australia" },
        ],
      },
      { type: "heading", text: "Which rules apply to a cross-border post?", id: "cross-border" },
      {
        type: "paragraph",
        text: "As a working rule, plan for the rules of each market whose audience you're targeting, plus any licensing rules where the creator is based or posting from. A UK brand paying a Dubai-based creator to reach UAE and UK audiences should expect the creator to hold a UAE permit and the post to meet UK labelling standards. Where rules differ, meet the stricter standard in one post rather than trying to split audiences.",
      },
      { type: "heading", text: "What to put in the brief and contract", id: "brief-and-contract" },
      {
        type: "list",
        items: [
          "The exact label wording and where it appears (first line of caption, on screen in the first seconds, spoken).",
          "Which platform tool to switch on, and that it stays on for reposts and ads.",
          "Licence or permit numbers where required, checked before booking.",
          "Claims the creator may and may not make, with evidence held by the brand.",
          "A right to request corrections, and what happens if disclosure is missing.",
          "Who checks each post after it goes live, and when.",
        ],
      },
      {
        type: "paragraph",
        text: "What to do when a creator misses a disclosure is covered in when influencers miss requirements, and the wider contract in influencer marketing contracts.",
        links: [
          { text: "when influencers miss requirements", href: "/blog/creator-non-compliance" },
          { text: "influencer marketing contracts", href: "/blog/influencer-marketing-contract" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Treating the platform label as full compliance.",
          "Disclosure only at the end of a caption or video, or hidden among hashtags.",
          "Assuming gifted or affiliate content doesn't need a label.",
          "Booking Gulf creators without checking permits or licences.",
          "Applying one country's rules to every market in a campaign.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Use the platform's disclosure tool, and also meet the rules of every market the post targets, including creator licensing in the Gulf. Put the exact wording, placement and licence checks in the brief and contract, and check live posts. This page is general guidance, not legal advice.",
      },
    ],
    faqs: [
      {
        question: "Is Instagram's paid partnership label enough for compliance?",
        answer:
          "Not on its own. It's the platform's tool. Advertising rules in markets such as India, the UK, Australia and Singapore look at whether the audience clearly understood the post was an ad, so most brands also require a clear label in the caption or on screen.",
      },
      {
        question: "Do creators in the UAE and Saudi Arabia need a licence?",
        answer:
          "Yes. In the UAE, creators who publish advertising content need an advertiser permit, regulated by the National Media Authority, with a visitor permit for non-residents. In Saudi Arabia, they need a Mawthooq licence from GAMR. Check before booking.",
      },
      {
        question: "Does gifted or affiliate content need disclosure?",
        answer:
          "Generally yes. Rules in India, the UK, Australia and Singapore treat free products, affiliate commission and other benefits as commercial relationships that must be disclosed clearly.",
      },
    ],
  },
];
