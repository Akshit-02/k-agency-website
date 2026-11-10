import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_FACTS_REVIEWED, CREATOR_LAYER_5_PUBLISHED as PUBLISHED, SOURCES } from "@/content/creator-resources/shared";

/**
 * YouTube creator hub (560–569): Creator Partnerships (formerly BrandConnect),
 * YouTube media kits, long-term sponsorships, affiliate strategy, product
 * tagging practice, live monetization, membership strategy, Shorts vs
 * long-form and channel strategy. Programme eligibility, Indian retailers and
 * payouts stay in youtube-shopping-india-creators; fan funding mechanics stay
 * in youtube-gifts-memberships-super-thanks.
 */
export const youtubeCreatorPosts: BlogPost[] = [
  {
    slug: "youtube-content-strategy",
    category: "Creator Resources",
    title: "YouTube Content Strategy: How to Build a Channel That Can Grow Into a Business",
    seoTitle: "YouTube Content Strategy: Build a Channel Into a Business",
    excerpt:
      "A YouTube channel strategy for creators who want more than views: choosing a channel promise, building pillar formats and series, balancing search and recommendations, pairing Shorts with long-form, and mapping content to income.",
    metaDescription:
      "YouTube channel strategy for Indian creators: channel promise, content pillars, series, search vs browse, Shorts plus long-form, and linking content to income streams.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["YouTube content strategy", "YouTube channel strategy", "grow a YouTube channel", "YouTube business", "YouTube content pillars"],
    related: ["youtube-shorts-vs-long-form", "youtube-creator-monetization", "youtube-seo-for-creators"],
    body: [
      {
        type: "paragraph",
        text: "Some channels get big and stay fragile: one format, one algorithm, one income line. Others grow slower and become businesses: viewers know what they'll get, videos keep earning years later, and brands, members and buyers all have a reason to show up. The difference is usually a strategy decided early and revisited often.",
      },
      {
        type: "paragraph",
        text: "This is the hub guide for YouTube creators on Kudozz. It connects the tactical guides: YouTube SEO for search, Shorts vs long-form for format mix, and YouTube creator monetization for income.",
        links: [
          { text: "YouTube SEO", href: "/blog/youtube-seo-for-creators" },
          { text: "Shorts vs long-form", href: "/blog/youtube-shorts-vs-long-form" },
          { text: "YouTube creator monetization", href: "/blog/youtube-creator-monetization" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A YouTube content strategy that can grow into a business has five parts: a channel promise (who it's for and what they'll get), three or four content pillars, repeatable formats and series inside those pillars, a deliberate balance between search-driven evergreen videos and browse-driven videos, and a map from each content type to an income stream (ads, memberships, Shopping, brand partnerships, your own products). Use Shorts for discovery and long-form for depth, measure by audience and revenue signals rather than views alone, and review quarterly.",
      },
      { type: "heading", text: "1. Write the channel promise", id: "promise" },
      {
        type: "paragraph",
        text: "One sentence that a new viewer and a brand manager would both understand.",
      },
      {
        type: "template",
        label: "Channel promise template",
        text: "\"[Channel] helps [specific audience] [achieve/understand/enjoy something] through [format], every [rhythm].\"\n\nExamples (illustrative)\n\"Honest phone reviews for Indian buyers under ₹30,000, every Friday.\"\n\"Tamil home-cooking for working couples: 30-minute dinners, three times a week.\"\n\"Plain-English GST and income tax explainers for freelancers, updated every budget.\"",
      },
      {
        type: "paragraph",
        text: "The promise decides which ideas you reject. That's its main job.",
      },
      { type: "heading", text: "2. Choose three or four content pillars", id: "pillars" },
      {
        type: "table",
        headers: ["Pillar type", "Purpose", "Example (tech reviewer)"],
        rows: [
          ["Search pillar", "Evergreen videos people look for", "\"Best phone under ₹20,000\" guides"],
          ["Signature pillar", "Your recognisable format", "Monthly \"30 days with\" long-term reviews"],
          ["Community pillar", "Deepen loyalty", "Live Q&As, viewer setup reviews"],
          ["Experiment pillar", "Test new directions", "Shorts on accessories, comparison formats"],
        ],
      },
      {
        type: "paragraph",
        text: "Every video should belong to a pillar. If a video idea doesn't fit, either it's a new experiment or it's off-promise. Content pillars for creators explains how to choose and test them.",
      },
      {
        type: "paragraph",
        text: "Pillars: content pillars for creators.",
        links: [{ text: "content pillars for creators", href: "/blog/content-pillars-for-creators" }],
      },
      { type: "heading", text: "3. Build formats and series", id: "series" },
      {
        type: "paragraph",
        text: "Formats are repeatable structures; series are named collections viewers can follow. Series help viewers binge, help YouTube understand your channel, and give brands a natural place to sponsor. See creator content series for how to design one.",
        links: [{ text: "creator content series", href: "/blog/creator-content-series" }],
      },
      { type: "heading", text: "4. Balance search and browse", id: "search-browse" },
      {
        type: "paragraph",
        text: "YouTube describes search and recommendations as separate systems. Search rewards videos that clearly answer what people type; recommendations reward videos that viewers choose and keep watching. A healthy channel has both: evergreen search videos that bring steady new viewers, and browse videos that keep your subscribers engaged. YouTube search vs recommendations and YouTube keyword research explain each side.",
        links: [
          { text: "YouTube search vs recommendations", href: "/blog/youtube-search-vs-recommendations" },
          { text: "YouTube keyword research", href: "/blog/youtube-keyword-research" },
        ],
      },
      { type: "heading", text: "5. Pair Shorts with long-form", id: "shorts" },
      {
        type: "paragraph",
        text: "Shorts bring reach and new subscribers; long-form builds depth, watch time and most of the revenue options. Decide deliberately which leads your channel, and link Shorts to related long videos. The trade-offs are covered in YouTube Shorts vs long-form.",
        links: [{ text: "YouTube Shorts vs long-form", href: "/blog/youtube-shorts-vs-long-form" }],
      },
      { type: "heading", text: "6. Map content to income", id: "income-map" },
      {
        type: "paragraph",
        text: "A channel becomes a business when every major content type has a job in the income mix.",
      },
      {
        type: "table",
        headers: ["Content type", "Primary income link", "Guide"],
        rows: [
          ["Evergreen search videos", "Ad revenue, Shopping tags, affiliate links", "YouTube affiliate marketing"],
          ["Signature series", "Brand sponsorships and integrations", "YouTube brand deals"],
          ["Live streams", "Super Chat, Gifts, memberships", "YouTube Live monetization"],
          ["Members-only content", "Channel memberships", "Membership strategy"],
          ["Tutorials and deep dives", "Your own digital products, courses", "Sell digital products"],
        ],
      },
      {
        type: "paragraph",
        text: "Guides: YouTube affiliate marketing, YouTube brand deals, YouTube Live monetization, membership strategy and sell digital products.",
        links: [
          { text: "YouTube affiliate marketing", href: "/blog/youtube-affiliate-marketing" },
          { text: "YouTube brand deals", href: "/blog/youtube-brand-deals" },
          { text: "YouTube Live monetization", href: "/blog/youtube-live-monetization" },
          { text: "membership strategy", href: "/blog/youtube-channel-membership-strategy" },
          { text: "sell digital products", href: "/blog/sell-digital-products-as-a-creator-india" },
        ],
      },
      { type: "heading", text: "Plan a quarter, not a week", id: "quarter" },
      {
        type: "template",
        label: "Quarterly channel plan (illustrative)",
        text: "Promise: (one sentence)\nPillars: search / signature / community / experiment\nPublishing: 1 long-form a week + 3 Shorts a week + 1 live a month\nSeries this quarter: (names, episode counts)\nIncome focus: (e.g. launch memberships; tag products on top 20 evergreen videos)\nExperiments: (2 questions to test)\nReview date: (end of quarter)",
      },
      {
        type: "paragraph",
        text: "Batching and a calendar make this sustainable; see content batching for creators and creator workflow.",
        links: [
          { text: "content batching for creators", href: "/blog/content-batching-for-creators" },
          { text: "creator workflow", href: "/blog/creator-workflow" },
        ],
      },
      { type: "heading", text: "Measure like a business", id: "measure" },
      {
        type: "list",
        items: [
          "Returning viewers and subscribers gained per video: is an audience forming?",
          "Average view duration and percentage viewed by pillar: which pillar holds attention?",
          "Traffic sources: how much comes from search vs browse vs Shorts?",
          "Revenue by source per month: ads, fan funding, Shopping, brands, products.",
          "Revenue per video type: which pillars pay, and how?",
        ],
      },
      {
        type: "paragraph",
        text: "YouTube analytics for creators explains the metrics; creator analytics dashboard shows how to track them monthly.",
        links: [
          { text: "YouTube analytics for creators", href: "/blog/youtube-analytics-for-creators" },
          { text: "creator analytics dashboard", href: "/blog/creator-analytics-dashboard" },
        ],
      },
      { type: "heading", text: "Regional-language and Indian-audience notes", id: "india" },
      {
        type: "paragraph",
        text: "Indian audiences search and watch in many languages. A channel promise in Hindi, Tamil, Telugu, Marathi, Bengali or another language can face less competition than English for the same topic. Think about titles and search phrases in the language (and script) your viewers actually type, and whether transliterated Hinglish titles match how they search. YouTube keyword research covers how to check. If part of your audience speaks another language, consider adding dubbed audio tracks to your best evergreen videos.", links: [{ text: "adding dubbed audio tracks", href: "/blog/ai-dubbing-translation-for-creators" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "No promise, so every trend looks like a good idea.",
          "Only browse content, so growth stops when a format fades.",
          "Only search content, so subscribers don't feel a relationship.",
          "Shorts that never lead viewers to long-form.",
          "Adding income streams before the content that supports them exists.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A YouTube channel grows into a business when viewers know what it promises, content is organised into pillars and series, search and browse are balanced, Shorts feed long-form, and each content type has a job in the income mix. Plan by quarter, measure by audience and revenue, and keep the promise narrow enough to be memorable.",
      },
    ],
    faqs: [
      {
        question: "What is a YouTube content strategy?",
        answer:
          "A plan for what your channel promises, which content pillars and series you make, how you balance search and recommended content, how Shorts and long-form work together, and how content links to income.",
      },
      {
        question: "How many content pillars should a YouTube channel have?",
        answer:
          "Three or four is usually enough: a search pillar, a signature pillar, a community pillar and room for experiments.",
      },
      {
        question: "Should a new YouTube channel focus on Shorts or long-form?",
        answer:
          "It depends on your goal and capacity. Shorts help discovery; long-form builds depth and most revenue options. Many channels use Shorts to lead viewers to long-form videos.",
      },
      {
        question: "How often should I review my YouTube strategy?",
        answer:
          "Quarterly for the overall plan, with a lighter monthly check on analytics and revenue.",
      },
    ],
  },
  {
    slug: "youtube-creator-partnerships-india",
    category: "Creator Resources",
    title: "YouTube Creator Partnerships: Complete Guide for Indian Creators",
    seoTitle: "YouTube Creator Partnerships in India: A Creator's Guide",
    excerpt:
      "How YouTube Creator Partnerships works for Indian creators: eligibility, what to set up in Studio, how brands search for you, brand partner access, Creator Partnerships boost, and how to stay safe.",
    metaDescription:
      "YouTube Creator Partnerships for Indian creators: eligibility, Studio setup, how brands find you, brand partner access, boost permissions and account safety.",
    author: { name: "Kudozz Partnerships Team", role: "Creator Partnerships" },
    publishedAt: "2026-09-28",
    updatedAt: "2026-11-10",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: ["YouTube Creator Partnerships", "Creator Partnerships boost", "brand partner access", "YouTube brand deals India", "YouTube media kit", "YouTube Studio brand inquiries"],
    related: ["youtube-brandconnect-vs-creator-partnerships", "youtube-media-kit", "youtube-brand-deals", "youtube-shopping-india-creators", "creator-whitelisting"],
    body: [
      {
        type: "paragraph",
        text: "Brands looking for YouTube creators in India can now search for channels inside Google Ads, and eligible creators get brand inquiries straight into YouTube Studio. That's YouTube Creator Partnerships. If you're eligible, the setup you do in Studio decides whether brands can evaluate you quickly or scroll past. This guide covers what to set up, what brands see, how boost permissions work and how to protect your account.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "YouTube Creator Partnerships is YouTube's brand-deal platform. It replaced BrandConnect on 24 March 2026, with India among the launch markets. Creators who are 18 or older, in the YouTube Partner Program, based in an available country and without active Community Guidelines strikes get a Creator Partnerships tab under Earn in Studio. There you set a media kit, desired rates, insights sharing and a manager's email, and respond to brand inquiries. The brand pays you directly under your own agreement, not through AdSense.",
      },
      { type: "heading", text: "What Creator Partnerships is", id: "what-it-is" },
      {
        type: "paragraph",
        text: "Creator Partnerships connects two sides. Brands use a Creator Partnerships area in Google Ads to search for creators, send inquiries, measure sponsored videos and run them as ads. Creators use a tab in YouTube Studio to set preferences and handle those inquiries. PPC Land, citing a TeamYouTube post, reported on 24 March 2026 that BrandConnect and the Google Ads creator partnerships hub were merged into YouTube Creator Partnerships, launching in the US, India, Indonesia, the UK, Brazil, Australia and Canada, with no tools discontinued.",
        links: [{ text: "PPC Land, citing a TeamYouTube post", href: "https://ppc.land/youtube-creator-partnerships-replaces-brandconnect-in-7-markets/" }],
      },
      {
        type: "paragraph",
        text: "If you want the naming history and how to read older BrandConnect advice, see YouTube BrandConnect vs Creator Partnerships. This page is about using the tool.",
        links: [{ text: "YouTube BrandConnect vs Creator Partnerships", href: "/blog/youtube-brandconnect-vs-creator-partnerships" }],
      },
      { type: "heading", text: "Eligibility", id: "eligibility" },
      {
        type: "table",
        headers: ["Requirement", "Detail (YouTube Help, India version)"],
        rows: [
          ["Age", "18 or older"],
          ["Programme", "Enrolled in the YouTube Partner Program"],
          ["Location", "Based in an available country; India is listed among 24 countries and regions"],
          ["Standing", "No active Community Guidelines strikes"],
        ],
      },
      {
        type: "paragraph",
        text: "Source: YouTube's Creator Partnerships help page. If you meet these, the tab appears under Earn in Studio on desktop and in the app. If it doesn't, recheck each requirement in Studio before assuming you've been left out.",
        links: [{ text: "YouTube's Creator Partnerships help page", href: "https://support.google.com/youtube/answer/9385307?hl=en&co=GENIE.CountryCode%3DIN" }],
      },
      { type: "heading", text: "What to set up in Studio", id: "studio" },
      {
        type: "table",
        headers: ["Setting", "What it does", "What to put there"],
        rows: [
          ["Channel insights sharing", "An optional toggle in Studio Advanced settings. Shares more audience data with brands. Public data stays visible even when off", "Turn it on if you're comfortable; some brand-side audience filters leave out creators who haven't opted in"],
          ["Media kit", "A customisable kit built from your channel data", "A one-line niche, your audience in plain words, two or three past partnership examples"],
          ["Desired rates", "Separate preferences for long-form and Shorts", "A realistic starting rate in INR for each, so inquiries start near your range"],
          ["Business contact email", "CC'd on inquiries", "Your manager's or agent's email, if you have one"],
          ["Authorised users", "Agents can be added to help manage the tab", "Only people you've worked with and trust"],
          ["Inquiry responses", "Interested shares your contact details; Not interested declines", "Reply within a few days either way"],
        ],
      },
      {
        type: "paragraph",
        text: "An inquiry shows the brand, a summary, and a potential earning amount set by the advertiser. YouTube's help page says that amount is negotiable and not a final offer. Inquiries may also include deliverables, talking points and calls to action. Brands sometimes follow up by email or social media instead of the tab. You can upload campaign videos as Unlisted for brand review before publishing.",
      },
      {
        type: "paragraph",
        text: "For setting your numbers, how much creators should charge in India walks through a rate card. The Studio media kit is useful, but brands often want your own version with examples; see YouTube media kit for what to include.",
        links: [
          { text: "how much creators should charge in India", href: "/blog/how-much-should-creators-charge-india" },
          { text: "YouTube media kit", href: "/blog/youtube-media-kit" },
        ],
      },
      { type: "heading", text: "How brands search and evaluate you", id: "brand-discovery" },
      {
        type: "paragraph",
        text: "On the brand side, Google Ads has a YouTube Creator Partnerships area with Overview, Creator search, Management, Analytics and Video discovery. According to Google Ads' Creator Partnerships help page, from June 2026 Overview, Creator search and Lists opened to all active Google Ads accounts in YPP-active countries, including India, without minimum spend or an assigned rep. Parts are still described as open beta. That means smaller Indian brands can now find you too, not only big advertisers.",
        links: [{ text: "Google Ads' Creator Partnerships help page", href: "https://support.google.com/google-ads/answer/15471603" }],
      },
      {
        type: "paragraph",
        text: "Video discovery suggests a brand's sponsored creator videos using signals such as #sponsored and paid product placement labels. Labelling your past sponsored work properly helps it show up as proof you can deliver.",
      },
      { type: "subheading", text: "Make your channel easier to evaluate" },
      {
        type: "list",
        items: [
          "Clear niche: a brand should guess your topic from your channel name, banner and last ten uploads.",
          "Consistent audience: if you post in Tamil, say so in your About section; a brand wanting Tamil Nadu reach is filtering for exactly that.",
          "About section and channel trailer: who you make videos for, how often, and your business email.",
          "Past partnership examples: keep sponsored videos public and correctly labelled, and add them to your media kit.",
          "Honest rates: rates far above your channel's track record lead to silence, and very low rates can signal inexperience.",
          "Insights sharing: turn it on if you're comfortable, so audience filters can include you.",
        ],
      },
      {
        type: "paragraph",
        text: "None of this guarantees inquiries. Plenty of brand deals still come through direct pitches, agencies and inbound email rather than Studio, which is why you should also keep up a strong general creator media kit and know what agencies ask for when you apply to a creator network.",
        links: [
          { text: "creator media kit", href: "/blog/creator-media-kit" },
          { text: "what agencies ask for when you apply to a creator network", href: "/for-creators" },
        ],
      },
      { type: "heading", text: "Responding to an inquiry", id: "inquiries" },
      {
        type: "template",
        label: "Inquiry response routine",
        text: "1. Read the brief: objective, deliverable (integration, dedicated video, Short), timeline\n2. Check fit: would you recommend this product unpaid? Any category conflict or exclusivity?\n3. Verify the brand: official website, company email domain, a real contact person\n4. Ask what's missing: will they want brand partner access? Boost? Usage beyond YouTube?\n5. Quote with extras itemised: integration fee, boost fee and duration, usage rights\n6. Get a written agreement with payment terms before you start\n7. Turn on Paid promotion when you publish",
      },
      {
        type: "paragraph",
        text: "How to read a brand brief goes deeper on step 1 and on spotting missing details.",
        links: [{ text: "How to read a brand brief", href: "/blog/creator-brand-brief" }],
      },
      { type: "heading", text: "Brand partner access: how linking works", id: "partner-access" },
      {
        type: "paragraph",
        text: "Brand partner access links one of your sponsored videos or Shorts to a brand's Google Ads account. YouTube's brand partner access help page says the brand can then view organic and paid metrics and boost the video in ads.",
        links: [{ text: "brand partner access help page", href: "https://support.google.com/youtube/answer/15672082" }],
      },
      {
        type: "table",
        headers: ["Way to grant access", "Who can use it", "Notes"],
        rows: [
          ["Select a brand deal the brand has reported", "All creators", "Done in Studio"],
          ["Search for the brand at upload or edit", "YPP creators", "Check you've picked the right account"],
          ["Generate a code or link and send it to the brand", "YPP creators", "Works while the video is public or unlisted; deleting the code removes access for every brand using it"],
          ["Accept a request the brand sends", "All creators", "Accept or decline in Studio; mobile can auto-accept repeat requests from the same Ads account"],
        ],
      },
      { type: "subheading", text: "What the brand sees and can do" },
      {
        type: "list",
        items: [
          "Non-public metrics: views, engaged views, watch time, average view duration, percentage viewed, reach, likes, dislikes, shares, playlist adds, comment counts.",
          "Audience age, gender, country and region, split by organic and paid.",
          "The ability to boost the video as an ad.",
          "Once access is shared, a Paid promotion label is added to the video.",
        ],
      },
      { type: "subheading", text: "Revoking access" },
      {
        type: "paragraph",
        text: "You can remove access at any time, whether you granted it or the brand requested it. That stops non-public metric sharing and ends the brand's ability to boost. The help page notes that the video may still be promoted in other ad contexts, such as ordinary ad targeting. A pending request expires if you delete the video or make it private. The help page lists no other limits on what the brand can do, and says creators should discuss usage rights with advertisers and get agreements in place independently. In practice, your contract is your protection.",
      },
      { type: "heading", text: "Creator Partnerships boost", id: "boost" },
      {
        type: "paragraph",
        text: "Creator Partnerships boost is the new name for what used to be called partnership ads, as Tubefilter reported in March 2026. The Google Ads Creator Partnerships boost help page says it lets brands use your video in their campaigns, served from your channel, with some clicks able to go to your channel. The co-branded format runs in places such as In-Feed and Shorts. The advertiser must secure rights to use the video, possibly through a separate agreement.",
        links: [
          { text: "as Tubefilter reported", href: "https://www.tubefilter.com/2026/03/23/youtube-creator-partnerships-brand-connect-platform-marketing/" },
          { text: "Creator Partnerships boost help page", href: "https://support.google.com/google-ads/answer/15223349" },
        ],
      },
      {
        type: "list",
        items: [
          "Permission: the brand can only boost after you grant brand partner access.",
          "Pay: the official pages describe no extra payout from YouTube. Any boost fee or usage fee is yours to negotiate with the brand.",
          "Organic impact: YouTube says boosting will not harm the video's organic performance.",
          "Country details: the Google Ads page doesn't list countries; Google's India blog in September 2026 presented one-click access codes and paid media behind videos as available to Indian creators.",
        ],
      },
      { type: "subheading", text: "Account safety checklist" },
      {
        type: "list",
        items: [
          "Never share your Google login, password or verification codes. Access is granted inside Studio; no brand needs your password.",
          "Verify the brand before sharing a code: official website, email from the company domain, and a reported deal or request that matches.",
          "Get the paid-media duration, the boost fee and where else the video can be used written into the contract.",
          "Note the date when paid usage ends and revoke access on that date if the contract allows.",
          "If you shared a code with several brands, remember that deleting it removes access for all of them.",
        ],
      },
      {
        type: "paragraph",
        text: "Pricing logic for paid usage is the same as whitelisting; see creator whitelisting and creator usage rights.",
        links: [
          { text: "creator whitelisting", href: "/blog/creator-whitelisting" },
          { text: "creator usage rights", href: "/blog/creator-usage-rights" },
        ],
      },
      { type: "heading", text: "How it differs from other YouTube income", id: "vs-other-income" },
      {
        type: "table",
        headers: ["Stream", "Who pays and how", "Main requirement"],
        rows: [
          ["Creator Partnerships deal", "The brand pays you directly under your agreement", "YPP, 18+, available country, no strikes"],
          ["Creator Partnerships boost", "Brand's ad spend; any fee to you is negotiated with the brand", "You grant brand partner access"],
          ["YPP ad revenue", "YouTube shares ad revenue via AdSense", "YPP (1,000 subs plus watch hours or Shorts views)"],
          ["Shopping affiliate", "Retailer commission per sale, via AdSense 60 to 120 days later", "YPP subscriber threshold shown in Studio; not music or Made for Kids"],
          ["Channel memberships", "Viewers' monthly fees", "Expanded YPP tier, 18+"],
          ["Super Thanks, Super Chat", "Viewers' one-off payments", "YPP (expanded tier OK), 18+"],
        ],
      },
      {
        type: "paragraph",
        text: "Affiliate commission works differently and is covered in our YouTube Shopping guide for Indian creators. Check current YPP and membership requirements in Studio, as they change.",
        links: [{ text: "YouTube Shopping guide for Indian creators", href: "/blog/youtube-shopping-india-creators" }],
      },
      { type: "heading", text: "What YouTube announced in September 2026", id: "2026-tools" },
      {
        type: "paragraph",
        text: "Google's India blog on bringing brands and creators together (24 September 2026) and the global Made On YouTube post (23 September 2026) described these updates. Statuses below are as stated then.",
        links: [
          { text: "bringing brands and creators together", href: "https://blog.google/intl/en-in/products/platforms/bringing-brands-and-creators-together-to-help-you-earn-more/" },
          { text: "Made On YouTube post", href: "https://blog.youtube/news-and-events/made-on-youtube-creator-monetization-shopping/" },
        ],
      },
      {
        type: "table",
        headers: ["Item", "What it does", "Status"],
        rows: [
          ["Creator Partnerships", "Brand discovery and inquiries; \"now available in 20 countries\" (the help page now lists 24)", "Live in India"],
          ["Brand partner access by one-click code, plus boost", "Brands see performance and put paid media behind your video", "Presented as current"],
          ["Dynamic brand segments", "Insert a sponsor segment into up to 20 long-form videos at once, with regional targeting and a CTA shelf", "Testing"],
          ["Ask Studio", "Drafts replies to brand briefs, builds pitches, tailors your media kit", "Announced as coming \"soon\""],
          ["Affiliate campaigns", "Exclusive commission rates or bonuses from retailers", "India post says \"next year\""],
        ],
      },
      { type: "heading", text: "Price boosts and back-catalogue segments properly", id: "pricing" },
      {
        type: "paragraph",
        text: "A boost is paid usage of your content and your face, so price it separately from the integration, by duration and scope. If dynamic brand segments reach your channel, a segment placed across many existing videos uses your library's ongoing views; price it by number of videos, regions and duration rather than as one new integration.",
      },
      { type: "heading", text: "Disclosure", id: "disclosure" },
      {
        type: "paragraph",
        text: "Turn on Paid promotion for every sponsored video, as described on YouTube's paid promotion page, and say the partnership clearly on camera. Sharing brand partner access adds the label automatically, but don't rely on that alone. Our creator disclosure guide covers ASCI expectations.",
        links: [
          { text: "YouTube's paid promotion page", href: "https://support.google.com/youtube/answer/154235" },
          { text: "creator disclosure guide", href: "/blog/creator-disclosure-guide" },
        ],
      },
      { type: "heading", text: "Watch for scams using the old BrandConnect name", id: "scams" },
      {
        type: "paragraph",
        text: "Real Creator Partnerships inquiries show up in your Studio tab or come from verifiable brand contacts. Be wary of messages claiming to be from \"YouTube BrandConnect\" that ask you to log in through a link, download a file, pay a registration fee or share codes. See the scams section of our BrandConnect explainer and how to spot fake brand collaboration offers.",
        links: [
          { text: "scams section of our BrandConnect explainer", href: "/blog/youtube-brandconnect-vs-creator-partnerships#scams" },
          { text: "how to spot fake brand collaboration offers", href: "/blog/creator-scams-fake-brand-collaborations" },
        ],
      },
      { type: "heading", text: "Creator Partnerships is one channel, not the only one", id: "channels" },
      {
        type: "paragraph",
        text: "Treat Creator Partnerships as one discovery route alongside direct pitching, agencies and repeat sponsors. YouTube brand deals covers turning a first sponsor into a long-term one.",
        links: [{ text: "YouTube brand deals", href: "/blog/youtube-brand-deals" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Leaving desired rates blank, so every inquiry starts with a guess.",
          "Treating the advertiser's potential earning amount as a final offer.",
          "Granting brand partner access without a written boost fee and end date.",
          "Sharing a login or code with someone you haven't verified.",
          "Leaving past sponsored videos unlabelled, so brands can't find your track record.",
          "Checking only email and missing inquiries in Studio.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Creator Partnerships puts brand discovery and inquiries inside Studio for eligible Indian creators, and lets brands measure and boost your sponsored videos once you grant access. Set up your rates, media kit and insights sharing, make your channel easy to evaluate, and treat every boost as paid usage with its own fee and end date in writing. The brand pays you, so the contract matters more than the platform.",
      },
    ],
    faqs: [
      {
        question: "Does YouTube pay me for Creator Partnerships deals?",
        answer:
          "No payout from YouTube is described. You negotiate and sign an agreement with the brand, and the brand pays you directly. Get payment terms and timelines in writing.",
      },
      {
        question: "Can I get brand inquiries without being in YPP?",
        answer:
          "The Creator Partnerships tab requires YPP. Outside it, brands can still reach you directly by email or through agencies, and any creator can select a brand deal the brand has reported to share brand partner access.",
      },
      {
        question: "What happens if I remove a brand's access mid-campaign?",
        answer:
          "Non-public metric sharing and the brand's ability to boost stop. YouTube notes the video may still be promoted in other ad contexts. Check your contract first, since revoking early may breach agreed terms.",
      },
      {
        question: "How do I stop brands finding me through Creator Partnerships?",
        answer:
          "The help page lists email opt-outs: youtube-brandconnect-opt-out@google.com to stop discovery and outreach, and youtube-creator-partnerships-opt-out@google.com to turn off Creator Partnerships entirely.",
      },
      {
        question: "Is the potential earning amount in an inquiry fixed?",
        answer:
          "No. YouTube says it's set by the advertiser, negotiable and not a final offer. Reply with your rate and itemise any boost or usage fees.",
      },
    ],
  },
  {
    slug: "youtube-media-kit",
    category: "Creator Resources",
    title: "YouTube Media Kit: How Creators Can Present Their Channel to Brands",
    seoTitle: "YouTube Media Kit: What to Include (With Template)",
    excerpt:
      "What a YouTube-specific media kit should contain: channel promise, audience data from YouTube Analytics, views per video rather than subscribers, integration formats, sponsor examples, rates or quote logic, and a template.",
    metaDescription:
      "Build a YouTube media kit brands trust: channel summary, YouTube Analytics audience data, average views, integration formats, sponsor results, rates and a template.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "11 min read",
    tags: ["YouTube media kit", "YouTuber media kit", "YouTube sponsorship media kit", "YouTube Analytics for brands", "media kit template"],
    related: ["creator-media-kit", "youtube-creator-partnerships-india", "youtube-brand-deals"],
    body: [
      {
        type: "paragraph",
        text: "A YouTube sponsor isn't buying followers. They're buying a slot inside a video that will keep getting watched, by an audience that trusts your recommendations. A media kit built from Instagram habits (follower count first, a grid of photos) undersells a YouTube channel. A YouTube kit should lead with views, watch behaviour and the formats a brand can buy.",
      },
      {
        type: "paragraph",
        text: "This guide is YouTube-specific. The general structure of a media kit is in creator media kit; YouTube's own Studio media kit is covered in YouTube Creator Partnerships.",
        links: [
          { text: "creator media kit", href: "/blog/creator-media-kit" },
          { text: "YouTube Creator Partnerships", href: "/blog/youtube-creator-partnerships-india" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A YouTube media kit should include your channel promise and niche, average views per long-form video and per Short over a recent period (not just subscribers), average view duration or percentage viewed, audience geography, age, gender and language from YouTube Analytics, returning viewers, your sponsorship formats (integration, dedicated video, Shorts, live, segments), two or three past sponsor examples with results, and either rates or how you quote. Date every number and keep it to two to four pages or one web page.",
      },
      { type: "heading", text: "Why YouTube kits differ", id: "why-different" },
      {
        type: "table",
        headers: ["Instagram-style kit", "YouTube kit"],
        rows: [
          ["Followers first", "Average views per video first"],
          ["Grid of posts", "Links to integrations with timestamps"],
          ["Reach and engagement rate", "Views, average view duration, returning viewers"],
          ["Post, Reel, Story rates", "Integration, dedicated video, Shorts, live and segment rates"],
          ["Short shelf life", "Evergreen views over months and years"],
        ],
      },
      {
        type: "paragraph",
        text: "Evergreen value is YouTube's biggest selling point. A sponsor segment in a search-driven tutorial can keep collecting views long after launch week. YouTube content strategy explains how to build the search pillar that creates it.",
        links: [{ text: "YouTube content strategy", href: "/blog/youtube-content-strategy" }],
      },
      { type: "heading", text: "What to include", id: "include" },
      {
        type: "list",
        items: [
          "Channel summary: promise, niche, language, upload rhythm.",
          "Performance: average views per long-form video (last 10 or last 90 days, say which), average Shorts views, average view duration or percentage viewed.",
          "Audience: top countries and cities, age, gender, languages, device mix if relevant.",
          "Loyalty: returning viewers, subscribers gained per month, members if you have them.",
          "Evergreen proof: views on sponsored videos after 3, 6 or 12 months.",
          "Formats you offer and what's included in each.",
          "Sponsor examples: brand, format, objective, results you're allowed to share, link with timestamp.",
          "Rates or quote approach, and what's priced separately (usage, boosts, segments, exclusivity).",
          "Contact and response time.",
        ],
      },
      { type: "heading", text: "Getting the numbers from YouTube Analytics", id: "analytics" },
      {
        type: "table",
        headers: ["Kit metric", "Where in YouTube Studio", "Tip"],
        rows: [
          ["Average views per video", "Content tab; export recent videos", "Exclude one-off viral outliers or show them separately"],
          ["Average view duration", "Engagement tab", "State it for the video length range you usually make"],
          ["Returning viewers", "Audience tab", "A strong loyalty signal for brands"],
          ["Geography, age, gender", "Audience tab", "Brands targeting India want the India share clearly"],
          ["Traffic sources", "Reach tab", "Show search share for evergreen value"],
        ],
      },
      {
        type: "paragraph",
        text: "YouTube analytics for creators explains each metric, and creator analytics for brand deals covers what to share and what to keep private.",
        links: [
          { text: "YouTube analytics for creators", href: "/blog/youtube-analytics-for-creators" },
          { text: "creator analytics for brand deals", href: "/blog/creator-analytics-for-brand-deals" },
        ],
      },
      { type: "heading", text: "Sponsorship formats to list", id: "formats" },
      {
        type: "table",
        headers: ["Format", "What it is", "Price driver"],
        rows: [
          ["Integration", "A segment of 30 to 120 seconds inside your video", "Average views, placement, length"],
          ["Dedicated video", "The whole video about the product", "Production effort, views, evergreen potential"],
          ["Shorts", "A sponsored Short or series", "Shorts views, number of Shorts"],
          ["Live segment", "Sponsored segment during a stream", "Live viewers, replay views"],
          ["Dynamic brand segments", "A segment across several back-catalogue videos, where available", "Number of videos, regions, duration"],
          ["Extras", "Pinned comment, description link, product tag, community post", "Priced as add-ons"],
        ],
      },
      {
        type: "paragraph",
        text: "Brands' view of these structures is in YouTube sponsorships; pricing logic is in how much creators should charge.",
        links: [
          { text: "YouTube sponsorships", href: "/blog/youtube-sponsorships" },
          { text: "how much creators should charge", href: "/blog/how-much-should-creators-charge-india" },
        ],
      },
      { type: "heading", text: "A YouTube media kit template", id: "template" },
      {
        type: "template",
        label: "YouTube media kit (2–4 pages)",
        text: "PAGE 1: Channel name · promise in one line · language · upload rhythm · contact\nPAGE 2: Performance (dated): avg long-form views (last 10 videos) · avg Shorts views · avg view duration · returning viewers · traffic sources (search %)\n         Audience: India share, top cities, age, gender, languages\nPAGE 3: Formats and what's included · rates or \"quotes by scope\" · add-ons priced separately\nPAGE 4: 2–3 sponsor examples: objective → format → results → link with timestamp\n         Evergreen proof: views on past sponsored videos at 6 and 12 months",
      },
      { type: "heading", text: "Honesty rules", id: "honesty" },
      {
        type: "list",
        items: [
          "Date every number and say the period.",
          "Don't show a viral outlier as your average.",
          "Get permission before sharing a brand's campaign results.",
          "Don't claim conversions you can't evidence; clicks from a tracked link are fine if you have them.",
        ],
      },
      {
        type: "paragraph",
        text: "Creator case study explains how to present results honestly.",
      },
      {
        type: "paragraph",
        text: "Results: creator case study.",
        links: [{ text: "creator case study", href: "/blog/creator-case-study" }],
      },
      { type: "heading", text: "Keep it current", id: "update" },
      {
        type: "paragraph",
        text: "Update monthly for numbers and after each sponsorship for examples. If you use Creator Partnerships, keep the Studio media kit and your own kit consistent so brands don't see two different stories. Older guides may call the tool BrandConnect; YouTube BrandConnect vs Creator Partnerships explains the change.",
        links: [{ text: "YouTube BrandConnect vs Creator Partnerships", href: "/blog/youtube-brandconnect-vs-creator-partnerships" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Leading with subscribers when views per video are what brands buy.",
          "No timestamps on sponsor examples.",
          "Mixing Shorts and long-form views into one average.",
          "Undated numbers.",
          "Forgetting to mention what's priced separately.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A YouTube media kit should sell what YouTube does best: dependable views, attention and evergreen value. Lead with average views and audience fit, list formats clearly, prove results with timestamped examples, and keep it dated and current.",
      },
    ],
    faqs: [
      {
        question: "What should a YouTube media kit include?",
        answer:
          "Channel summary, average views per long-form video and per Short, average view duration, audience data from YouTube Analytics, returning viewers, sponsorship formats, past sponsor examples and rates or how you quote.",
      },
      {
        question: "Should I put subscriber count or views in my YouTube media kit?",
        answer:
          "Include both, but lead with average views per video over a stated period. Brands pay for views and audience fit, not subscribers.",
      },
      {
        question: "How often should I update my YouTube media kit?",
        answer:
          "Numbers monthly and examples after each sponsorship, with a date on every figure.",
      },
      {
        question: "Does YouTube have a built-in media kit?",
        answer:
          "Eligible creators can customise a media kit in YouTube Creator Partnerships in Studio. Many creators also keep their own kit with examples and case studies.",
      },
    ],
  },
  {
    slug: "youtube-brand-deals",
    category: "Creator Resources",
    title: "YouTube Brand Deals: How Creators Can Turn Videos Into Long-Term Partnerships",
    seoTitle: "YouTube Brand Deals: Turn One Video Into Long-Term Sponsors",
    excerpt:
      "How YouTube creators turn a first sponsored video into repeat sponsorships: choosing integration types that suit your content, making segments that perform, reporting with YouTube data, evergreen value and proposing series sponsorships.",
    metaDescription:
      "How YouTube creators turn one sponsored video into long-term brand deals: integration choices, segments that perform, reporting, evergreen value and series proposals.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["YouTube brand deals", "YouTube sponsorship", "long-term YouTube sponsors", "YouTube integration", "YouTube series sponsorship"],
    related: ["youtube-media-kit", "creator-brand-partnerships", "youtube-creator-partnerships-india"],
    body: [
      {
        type: "paragraph",
        text: "The first sponsored video is an experiment for the brand. If it works, the brand wants to know whether it can work again, predictably. Creators who plan for that second conversation from day one turn one-off integrations into quarterly sponsors, series partners and, eventually, retainers.",
      },
      {
        type: "paragraph",
        text: "This guide is about YouTube specifically: the formats, data and evergreen economics that make YouTube sponsorships renewable. The platform-agnostic relationship playbook is in creator partnership strategy; the commercial structure of recurring deals is in creator retainer deals. Brands' side of the same relationship is in YouTube creator partnerships for brands.",
        links: [
          { text: "creator partnership strategy", href: "/blog/creator-brand-partnerships" },
          { text: "creator retainer deals", href: "/blog/creator-retainer-deals" },
          { text: "YouTube creator partnerships for brands", href: "/blog/youtube-creator-partnerships" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To turn a YouTube sponsorship into a long-term partnership: choose the integration format that fits the video (not the biggest fee), make a segment that's genuinely useful and honest, report results with YouTube data and context against your averages, show evergreen performance weeks and months later, and propose a specific next step, such as a named series, a quarterly slot or a product-launch package. Price extras like boosts, back-catalogue segments and usage separately, and keep disclosure consistent.",
      },
      { type: "heading", text: "Choose the right integration for the video", id: "formats" },
      {
        type: "table",
        headers: ["Format", "Suits", "Watch out for"],
        rows: [
          ["Early integration (first third)", "Tutorials, reviews, explainers", "Must not delay the payoff viewers came for"],
          ["Mid-roll integration", "Longer videos with natural breaks", "Clear transition, not a jarring cut"],
          ["Dedicated video", "Products central to your niche", "Must still be useful and honest"],
          ["Series sponsorship", "Named, recurring formats", "Consistent creative, agreed episode count"],
          ["Shorts package", "Launches, quick demos", "Shorts views differ from long-form; report separately"],
          ["Live segment", "Launches, Q&As", "Replay views vs live viewers"],
        ],
      },
      {
        type: "paragraph",
        text: "The brand-side view of these formats and pricing is in YouTube sponsorships and YouTube product reviews.",
        links: [
          { text: "YouTube sponsorships", href: "/blog/youtube-sponsorships" },
          { text: "YouTube product reviews", href: "/blog/youtube-product-reviews" },
        ],
      },
      { type: "heading", text: "Make a segment that performs", id: "segment" },
      {
        type: "list",
        items: [
          "Put it where it fits the story, not where it maximises the fee.",
          "Show the product in use, in your normal style.",
          "Say one honest limitation where relevant; it increases trust.",
          "Give one clear action: a link, code or product tag.",
          "Disclose verbally at the start of the segment and tick YouTube's paid promotion box.",
          "Keep it short enough that viewers don't skip; most skip long reads.",
        ],
      },
      {
        type: "paragraph",
        text: "For reviews specifically, see creator product reviews on staying authentic when paid.",
        links: [{ text: "creator product reviews", href: "/blog/creator-product-reviews" }],
      },
      { type: "heading", text: "Report with YouTube data", id: "reporting" },
      {
        type: "template",
        label: "Sponsor report (send 7–14 days after publishing, then again at 60–90 days)",
        text: "Video: title, link, publish date, segment timestamp\nViews: to date, and vs your average for similar videos\nAudience: India share, top cities, age range (from YouTube Analytics)\nAttention: average view duration; retention at the segment start and end if visible\nActions: link clicks (tracked link), code uses, product tag clicks if applicable\nComments: themes about the product, with examples\nLearnings: what to change next time",
      },
      {
        type: "paragraph",
        text: "Retention at the segment is powerful evidence: if most viewers stayed through it, say so. Creator campaign reporting has a full template.",
      },
      {
        type: "paragraph",
        text: "Template: creator campaign reporting.",
        links: [{ text: "creator campaign reporting", href: "/blog/creator-campaign-reporting" }],
      },
      { type: "heading", text: "Sell the evergreen tail", id: "evergreen" },
      {
        type: "paragraph",
        text: "YouTube's strongest argument for renewal is that videos keep getting watched. A follow-up note at 60 or 90 days showing that a sponsored tutorial doubled its launch-week views gives the brand a reason to buy again, and justifies higher fees for search-driven videos. If the sponsor's link or code has expired, offer to update the description or pinned comment as part of the renewal.",
      },
      { type: "heading", text: "Propose the next step", id: "next-step" },
      {
        type: "paragraph",
        text: "Don't end with \"let me know if you want to work again\". End with a specific proposal.",
      },
      {
        type: "template",
        label: "Renewal proposal (illustrative)",
        text: "\"The integration in [video] reached [X] views in 30 days, above my recent average, with most viewers staying through the segment. Viewers asked about [feature] in comments.\n\nFor next quarter I'd suggest a three-part series on [topic] with a 60-second integration in each, plus a Short per episode. I can hold [month] slots for you until [date].\"",
      },
      { type: "heading", text: "Recurring structures on YouTube", id: "structures" },
      {
        type: "table",
        headers: ["Structure", "Commitment", "Good when"],
        rows: [
          ["Quarterly slot", "One integration per quarter", "Seasonal products, steady brands"],
          ["Named series", "3–6 episodes over a few months", "Education, reviews, challenges"],
          ["Launch package", "Video + Shorts + live around a launch", "Product launches"],
          ["Back-catalogue segments", "Segment across existing videos, where available", "Evergreen niche with high search traffic"],
          ["Retainer", "Monthly deliverables and fee", "Established fit and trust"],
        ],
      },
      {
        type: "paragraph",
        text: "Retainers are covered in creator retainer deals, including scope, exclusivity and payment schedules.",
        links: [{ text: "creator retainer deals", href: "/blog/creator-retainer-deals" }],
      },
      { type: "heading", text: "Protect your channel while you grow sponsors", id: "protect" },
      {
        type: "list",
        items: [
          "Keep sponsored videos to a share of uploads your audience accepts; watch comments and retention.",
          "Avoid back-to-back sponsors in the same category unless exclusivity is priced.",
          "Put boost permissions and segment usage in writing; see YouTube Creator Partnerships.",
          "Keep your editorial independence in the contract.",
        ],
      },
      {
        type: "paragraph",
        text: "Tools and terms: YouTube Creator Partnerships and influencer contract guide for creators.",
        links: [
          { text: "YouTube Creator Partnerships", href: "/blog/youtube-creator-partnerships-india" },
          { text: "influencer contract guide for creators", href: "/blog/influencer-contract-guide-for-creators" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Choosing the placement that pays most, not the one that fits.",
          "Reporting only launch-week views.",
          "No follow-up at 60 to 90 days.",
          "Ending the campaign without a concrete proposal.",
          "Letting a sponsor's expired link sit in a video getting steady views.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Long-term YouTube sponsors come from segments that fit, reports that use real data, evidence of evergreen value and a clear proposal for what's next. Keep your YouTube media kit updated with that evergreen proof. Treat the first video as the start of a relationship and the renewal conversation starts itself.",
        links: [{ text: "YouTube media kit", href: "/blog/youtube-media-kit" }],
      },
    ],
    faqs: [
      {
        question: "How do YouTubers get repeat sponsors?",
        answer:
          "By delivering segments that fit their content, reporting results with YouTube data, showing views over time on sponsored videos, and proposing a specific next collaboration such as a series or quarterly slot.",
      },
      {
        question: "When should I send a report to a YouTube sponsor?",
        answer:
          "A first report 7 to 14 days after publishing, and a follow-up at 60 to 90 days to show evergreen views.",
      },
      {
        question: "What is a YouTube series sponsorship?",
        answer:
          "A brand sponsors a named, recurring format across several episodes, usually with a consistent integration in each and agreed episode count and timing.",
      },
      {
        question: "Should I update links in old sponsored videos?",
        answer:
          "Offer to as part of a renewal. Expired links in videos that still get views waste value for both you and the brand.",
      },
    ],
  },
  {
    slug: "youtube-brandconnect-vs-creator-partnerships",
    category: "Creator Resources",
    title: "YouTube BrandConnect vs Creator Partnerships: What Creators Need to Know",
    seoTitle: "YouTube BrandConnect Is Now Creator Partnerships",
    excerpt:
      "BrandConnect is now YouTube Creator Partnerships. The history from FameBit to BrandConnect to Creator Partnerships, what changed for creators, what stayed the same, and how to read old advice that still uses the BrandConnect name.",
    metaDescription: "What happened to YouTube BrandConnect: from FameBit to BrandConnect to YouTube Creator Partnerships, what changed for creators and how to read old advice.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "8 min read",
    tags: ["YouTube BrandConnect", "BrandConnect vs Creator Partnerships", "YouTube Creator Partnerships", "FameBit", "YouTube brand deals platform"],
    related: ["youtube-creator-partnerships-india", "youtube-brand-deals", "youtube-media-kit"],
    body: [
      {
        type: "paragraph",
        text: "Search for \"YouTube BrandConnect\" and you'll find guides, agency pages and creator videos that use the name confidently. Many are describing a product that YouTube now calls something else. The name changed, the tools moved, and a few important things are new. This short guide untangles the terminology so you can read older advice correctly.",
      },
      {
        type: "paragraph",
        text: "For how to use the current tool, see the full guide to YouTube Creator Partnerships. Details were checked against YouTube's help centre and blog in September 2026.",
        links: [{ text: "the full guide to YouTube Creator Partnerships", href: "/blog/youtube-creator-partnerships-india" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "YouTube BrandConnect was YouTube's branded content platform connecting creators and advertisers. It began as FameBit, which Google acquired in 2016, and was renamed YouTube BrandConnect in 2020. In 2026 YouTube announced that its brand partnership tools were evolving into a centralised platform called YouTube Creator Partnerships (formerly known as BrandConnect), inside YouTube Studio for creators and Google Ads and Display & Video 360 for advertisers. If you read \"BrandConnect\" in older advice, treat it as the predecessor of Creator Partnerships and check current eligibility and features in Studio.",
      },
      { type: "heading", text: "Timeline", id: "timeline" },
      {
        type: "table",
        headers: ["Period", "Name", "What it was"],
        rows: [
          ["Before 2016", "FameBit", "An independent influencer marketplace"],
          ["2016", "FameBit (Google-owned)", "Acquired by Google"],
          ["2020", "YouTube BrandConnect", "FameBit renamed; branded content platform for creators and advertisers"],
          ["2026", "YouTube Creator Partnerships", "YouTube's tools centralised under one name, formerly BrandConnect"],
        ],
      },
      {
        type: "paragraph",
        text: "Sources: YouTube's 2020 BrandConnect announcement and YouTube's 2026 Creator Partnerships announcement.",
        links: [
          { text: "YouTube's 2020 BrandConnect announcement", href: SOURCES.youtubeBrandConnectLaunch },
          { text: "YouTube's 2026 Creator Partnerships announcement", href: SOURCES.youtubeCreatorPartnershipsNewFronts },
        ],
      },
      { type: "heading", text: "What's the same", id: "same" },
      {
        type: "list",
        items: [
          "The purpose: helping brands find YouTube creators and run branded content with them.",
          "The need for disclosure: sponsored content still uses YouTube's paid promotion disclosure and, in India, ASCI's guidelines.",
          "The business basics: briefs, pricing, rights, reporting and payment still need to be agreed.",
        ],
      },
      { type: "heading", text: "What's different for creators", id: "different" },
      {
        type: "table",
        headers: ["Area", "Older BrandConnect-era advice", "Creator Partnerships today (as YouTube describes it)"],
        rows: [
          ["Where you manage it", "Varied; often through separate programmes or invitations", "A Creator Partnerships tab in the Earn section of Studio for eligible creators"],
          ["Eligibility", "Often described vaguely or by invitation", "18+, YPP, available country (India listed), no active strikes, monetization policies"],
          ["Media kit", "Mostly your own document", "A customisable media kit with audience insights in Studio, alongside your own"],
          ["Rates", "Negotiated case by case", "You can set desired rates for long-form and Shorts"],
          ["Brand tools", "Campaign management", "Discovery, inquiries, partner access codes, partnership boosts, dynamic brand segments (availability varies)"],
        ],
      },
      {
        type: "paragraph",
        text: "Official: YouTube's Creator Partnerships help page.",
        links: [{ text: "YouTube's Creator Partnerships help page", href: SOURCES.youtubeCreatorPartnerships }],
      },
      { type: "heading", text: "How to read older advice", id: "old-advice" },
      {
        type: "list",
        items: [
          "Replace \"BrandConnect\" with \"Creator Partnerships\" and check whether the feature described still exists.",
          "Ignore old eligibility numbers; use Studio's Earn section and the help centre.",
          "Be cautious with claims that you can \"apply to BrandConnect\" through third-party forms. Eligible creators see the tab in Studio.",
          "Advice about negotiating, disclosure and reporting is usually still valid.",
        ],
      },
      { type: "heading", text: "Watch for scams using the old name", id: "scams" },
      {
        type: "paragraph",
        text: "Because BrandConnect is a recognisable name, it's sometimes used in fake \"partnership invitations\". YouTube's tools live inside YouTube Studio; be suspicious of emails asking for fees, passwords or off-platform payments in YouTube's name. See how to spot fake brand collaboration offers.",
        links: [{ text: "how to spot fake brand collaboration offers", href: "/blog/creator-scams-fake-brand-collaborations" }],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "BrandConnect is the earlier name for what YouTube now calls Creator Partnerships. The purpose is the same, but the tools now sit in Studio with clearer eligibility, a built-in media kit, rate preferences and new brand measurement and amplification tools. Read older advice with that translation in mind, and confirm details in Studio.",
      },
    ],
    faqs: [
      {
        question: "Does YouTube BrandConnect still exist?",
        answer:
          "YouTube now uses the name YouTube Creator Partnerships, which it describes as formerly known as BrandConnect.",
      },
      {
        question: "Was BrandConnect the same as FameBit?",
        answer:
          "FameBit was an influencer marketplace Google acquired in 2016. It was renamed YouTube BrandConnect in 2020.",
      },
      {
        question: "How do I join YouTube Creator Partnerships?",
        answer:
          "Eligible creators (18+, in the YouTube Partner Program, in an available country such as India, with no active strikes) see the Creator Partnerships tab in YouTube Studio's Earn section.",
      },
      {
        question: "Is BrandConnect advice still useful?",
        answer:
          "Advice on negotiation, disclosure and reporting often is. Details about eligibility, applications and features should be checked against the current Creator Partnerships help page.",
      },
    ],
  },
  {
    slug: "youtube-affiliate-marketing",
    category: "Creator Resources",
    title: "YouTube Affiliate Marketing: How Creators Can Earn From Product Recommendations",
    seoTitle: "YouTube Affiliate Marketing for Creators: A Practical Guide",
    excerpt:
      "How YouTube creators earn from affiliate recommendations in India: YouTube Shopping tags vs description links, choosing programmes, video formats that convert, placing links without clutter, disclosure and tracking.",
    metaDescription: "How YouTube affiliate marketing works for Indian creators: Shopping tags vs description links, programmes, formats that convert, disclosure and tracking.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["YouTube affiliate marketing", "YouTube affiliate links", "YouTube Shopping affiliate", "affiliate marketing India YouTube", "product recommendations"],
    related: ["youtube-product-tagging", "youtube-shopping-india-creators", "creator-affiliate-links"],
    body: [
      {
        type: "paragraph",
        text: "YouTube is unusually good at affiliate income because people come to it to decide. They search \"best mixer grinder under 5,000\" or \"Nykaa vs Tira haul\", watch a creator they trust test the options, and click through to buy. The creator earns a commission; the viewer gets a decision made easier.",
      },
      {
        type: "paragraph",
        text: "This guide is about YouTube affiliate strategy as a whole. For the YouTube Shopping programme's eligibility, retailers and payouts in India, see YouTube Shopping for Indian creators; for tagging mechanics, see YouTube product tagging. For affiliate programmes across platforms, see creator affiliate marketing in India.",
        links: [
          { text: "YouTube Shopping for Indian creators", href: "/blog/youtube-shopping-india-creators" },
          { text: "YouTube product tagging", href: "/blog/youtube-product-tagging" },
          { text: "creator affiliate marketing in India", href: "/blog/creator-affiliate-marketing-india" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "YouTube creators earn affiliate income in two main ways: YouTube Shopping product tags, where eligible creators in India tag products from participating retailers and earn commission paid through AdSense, and external affiliate links or codes from retailer, brand or network programmes, placed in descriptions and pinned comments. Affiliate works best on decision-stage videos (reviews, comparisons, \"best under ₹X\", tutorials and setups), with honest recommendations, one clear action, disclosure in the video and description, and tracking by video.",
      },
      { type: "heading", text: "Two routes to affiliate income", id: "routes" },
      {
        type: "table",
        headers: ["", "YouTube Shopping tags", "External affiliate links"],
        rows: [
          ["Who runs it", "YouTube with participating retailers", "Retailers, brands, affiliate networks"],
          ["Eligibility", "YPP and programme threshold; India eligible", "Each programme's own rules"],
          ["Where it shows", "Product shelf, Shopping button, Shorts sticker, live", "Description, pinned comment, link cards"],
          ["Payment", "AdSense, typically 60–120 days after purchase", "Each programme's schedule"],
          ["Strength", "Native, visible, less friction", "Any product or retailer in any programme"],
        ],
      },
      {
        type: "paragraph",
        text: "YouTube says Shopping tags drive more than twice as many clicks as description links. Use tags where the product is in the programme and links where it isn't.",
      },
      {
        type: "paragraph",
        text: "Source: YouTube's 2026 Shopping update.",
        links: [{ text: "YouTube's 2026 Shopping update", href: SOURCES.madeOnYouTube2026 }],
      },
      { type: "heading", text: "Choose programmes carefully", id: "programmes" },
      {
        type: "list",
        items: [
          "Is the retailer one your audience already trusts and buys from?",
          "What's the commission and the attribution window (how long after a click a purchase counts)?",
          "How are returns handled? Commissions on returned items are usually reversed.",
          "When and how does it pay? What's the minimum payout?",
          "Does it allow YouTube as a traffic source and your disclosure wording?",
        ],
      },
      {
        type: "paragraph",
        text: "Creator affiliate marketing in India lists the types of programmes Indian creators use.",
      },
      { type: "heading", text: "Formats that convert", id: "formats" },
      {
        type: "table",
        headers: ["Format", "Why it converts", "Affiliate tip"],
        rows: [
          ["\"Best X under ₹Y\"", "Viewer has a budget and intent", "Tag each product at its timestamp"],
          ["Comparison (A vs B)", "Viewer is choosing", "Link both; say who each suits"],
          ["Long-term review", "Trust from real use", "Mention what you'd change"],
          ["Setup or routine", "Viewer wants the whole kit", "Group links by step"],
          ["Tutorial", "Viewer needs the tool", "Link only tools you actually used"],
          ["Haul or unboxing", "Discovery", "Be clear what was gifted"],
        ],
      },
      {
        type: "paragraph",
        text: "Shopping content that stays useful is covered in creator shopping content.",
        links: [{ text: "creator shopping content", href: "/blog/shoppable-content-creators" }],
      },
      { type: "heading", text: "Place links without clutter", id: "placement" },
      {
        type: "list",
        items: [
          "Put the one or two most relevant links in the first lines of the description, with plain labels.",
          "Use a pinned comment for the main recommendation.",
          "Mention the link or tag at the moment the product appears, not only at the end.",
          "Group long lists by use (\"For beginners\", \"If you have more budget\").",
          "Remove or update dead links in older videos that still get views.",
        ],
      },
      {
        type: "paragraph",
        text: "Creator affiliate links covers click-through without spam in more detail.",
      },
      {
        type: "paragraph",
        text: "Detail: creator affiliate links.",
        links: [{ text: "creator affiliate links", href: "/blog/creator-affiliate-links" }],
      },
      { type: "heading", text: "Disclosure", id: "disclosure" },
      {
        type: "paragraph",
        text: "Affiliate links are a material connection. Say it in the video (\"links below are affiliate links; I earn a commission if you buy\") and in the description near the links. ASCI's guidelines list \"Affiliate\" among acceptable labels. YouTube Shopping creators also need to follow YouTube's branded content and disclosure policies where relevant.",
      },
      {
        type: "paragraph",
        text: "Rules: creator disclosure guide and YouTube's paid promotion policy.",
        links: [
          { text: "creator disclosure guide", href: "/blog/creator-disclosure-guide" },
          { text: "YouTube's paid promotion policy", href: SOURCES.youtubePaidPromotion },
        ],
      },
      { type: "heading", text: "Tracking", id: "tracking" },
      {
        type: "template",
        label: "Monthly affiliate review",
        text: "By video: clicks, orders, confirmed commission, returns\nBy programme: conversion rate, average commission, payout timing\nTop 10 earning videos: update links, add tags, add a pinned comment\nBottom: remove affiliate links where they add clutter without value",
      },
      {
        type: "paragraph",
        text: "Remember that commissions confirm after return windows, so this month's clicks show up in next month's earnings.",
      },
      { type: "heading", text: "Affiliate and sponsorships together", id: "with-sponsors" },
      {
        type: "paragraph",
        text: "A brand may sponsor a video and also offer an affiliate code, or you may tag the sponsored product through YouTube Shopping. Agree this upfront, and check exclusivity so you don't tag a competitor's product in a sponsored video. Creator revenue streams from brand content explains hybrid deals.",
      },
      {
        type: "paragraph",
        text: "Hybrid deals: creator revenue streams from brand content.",
        links: [{ text: "creator revenue streams from brand content", href: "/blog/creator-revenue-streams-from-brand-content" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Linking products you didn't use.",
          "Walls of links with no context.",
          "Disclosure only at the bottom of a long description.",
          "Never updating links in evergreen videos.",
          "Judging programmes by commission rate alone, ignoring conversion and returns.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "YouTube affiliate income comes from helping people decide. Use Shopping tags where available, external programmes where they aren't, place links where they help, disclose clearly and track by video. Trust is the asset; commissions follow from it.",
      },
    ],
    faqs: [
      {
        question: "How do YouTubers make money from affiliate links?",
        answer:
          "Viewers click a tracked link, code or YouTube Shopping tag and buy; the programme pays the creator a commission, usually after the return window closes.",
      },
      {
        question: "Is the YouTube Shopping affiliate programme available in India?",
        answer:
          "Yes. India is among the eligible countries. Creators must be in the YouTube Partner Program and meet the programme's requirements; music and Made for Kids channels aren't eligible.",
      },
      {
        question: "Should I use Shopping tags or description links?",
        answer:
          "Use tags for products in the YouTube Shopping programme (YouTube says they drive more clicks than description links) and description or pinned-comment links for other programmes.",
      },
      {
        question: "Do I need to disclose affiliate links on YouTube?",
        answer:
          "Yes. Say it in the video and near the links in the description. ASCI lists \"Affiliate\" as an acceptable disclosure label.",
      },
    ],
  },
  {
    slug: "youtube-product-tagging",
    category: "Creator Resources",
    title: "YouTube Product Tagging: How Creators Can Use Shopping Features Effectively",
    seoTitle: "YouTube Product Tagging: Tips for Videos, Shorts and Live",
    excerpt:
      "How to tag products on YouTube well: choosing which products to tag, ordering the list, timestamps in long-form videos, the Shorts product sticker, tagging in live streams, updating old videos and reading what sells.",
    metaDescription:
      "YouTube product tagging tips: which products to tag, list order, timestamps, the Shorts sticker, live tagging, updating old videos and measuring tag clicks.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "10 min read",
    tags: ["YouTube product tagging", "tag products YouTube", "YouTube Shopping tips", "Shorts product sticker", "YouTube Shopping timestamps"],
    related: ["youtube-affiliate-marketing", "youtube-shopping-india-creators", "shoppable-content-creators"],
    body: [
      {
        type: "paragraph",
        text: "Tagging a product takes a minute. Tagging it well is what decides whether anyone clicks. The difference is in which products you choose, the order you put them in, when they appear on screen, and whether old videos are still tagged with products people can buy.",
      },
      {
        type: "paragraph",
        text: "This guide covers tagging practice. Eligibility, participating Indian retailers and how commissions are paid are in YouTube Shopping for Indian creators; the wider affiliate strategy is in YouTube affiliate marketing. Details were checked against YouTube's help centre in September 2026.",
        links: [
          { text: "YouTube Shopping for Indian creators", href: "/blog/youtube-shopping-india-creators" },
          { text: "YouTube affiliate marketing", href: "/blog/youtube-affiliate-marketing" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "YouTube lets eligible creators tag up to 60 products in a video or Short. Long-form videos show a Shopping button and product list; Shorts show a Shopping product sticker featuring the first product in your list, and you can adjust the sticker's size and placement in the app. Long-form videos (a minute or longer) can use product timestamps of 15 to 60 seconds so products appear when you discuss them. Tag only products that appear in the video, put the main product first, add timestamps, tag during or after live streams, and update tags on older videos. Tags can't be added to made-for-kids content, videos with copyright claims or videos limited for monetization.",
      },
      { type: "heading", text: "Where tags appear", id: "surfaces" },
      {
        type: "table",
        headers: ["Surface", "How it appears", "Your lever"],
        rows: [
          ["Long-form video", "Shopping button and product list; timestamped products during playback", "Order and timestamps"],
          ["Shorts", "Shopping product sticker showing the first product", "First product choice; sticker size and placement"],
          ["Live stream", "Products tagged during or after the stream; appear in replays", "Pre-planned product list"],
        ],
      },
      {
        type: "paragraph",
        text: "Official: YouTube's product tagging help page.",
        links: [{ text: "YouTube's product tagging help page", href: SOURCES.youtubeTagProducts }],
      },
      { type: "heading", text: "Choose what to tag", id: "choose" },
      {
        type: "list",
        items: [
          "Tag products that are visible and discussed, not everything related to the topic.",
          "Prefer products you used long enough to have an opinion on.",
          "Check availability: out-of-stock products waste the click.",
          "Avoid tagging a competitor's product in a sponsored video.",
          "Fewer, relevant tags beat the maximum. Sixty is a limit, not a target.",
        ],
      },
      { type: "heading", text: "Order matters", id: "order" },
      {
        type: "paragraph",
        text: "Put the product the video is about first. In Shorts, the first product becomes the sticker. In long-form, the list order is what viewers scroll. For comparison videos, order by your recommendation or by the order you cover them, and say which.",
      },
      { type: "heading", text: "Timestamps in long-form videos", id: "timestamps" },
      {
        type: "paragraph",
        text: "Product timestamps show the product while you talk about it. YouTube's rules, as published: long-form videos only (a minute or longer), each timestamp 15 to 60 seconds long, products can't share the same start time, and you set timestamps on a computer while editing.",
      },
      {
        type: "template",
        label: "Timestamp workflow",
        text: "1. Note the second each product appears while editing\n2. Upload; in Studio, open the video's Shopping section\n3. Add products in the order they appear\n4. Add a 15–60 second timestamp for each, starting when it's on screen\n5. Say \"tagged below\" at the moment it appears",
      },
      { type: "heading", text: "Shorts: the sticker is the call to action", id: "shorts" },
      {
        type: "list",
        items: [
          "Show the product clearly in the first seconds.",
          "Make the first tagged product the one the Short is about.",
          "Adjust the sticker so it doesn't cover text or the product.",
          "One product per Short often works better than a list.",
        ],
      },
      { type: "heading", text: "Live streams", id: "live" },
      {
        type: "paragraph",
        text: "Plan the product list before going live, tag products as you show them, and remember products added after the stream appear in the replay. For live selling and other live income, see YouTube Live monetization.",
        links: [{ text: "YouTube Live monetization", href: "/blog/youtube-live-monetization" }],
      },
      { type: "heading", text: "Update old videos", id: "update" },
      {
        type: "paragraph",
        text: "You can add, remove and reorder tags on published videos from the video's Details page in YouTube Studio, without re-uploading. Evergreen videos that keep getting views deserve a quarterly check: replace discontinued products, add newly available retailers (YouTube announced Amazon tagging for India in 2026), and remove tags that no longer fit.",
      },
      { type: "heading", text: "Read what sells", id: "measure" },
      {
        type: "paragraph",
        text: "Review tag clicks and confirmed commissions by video monthly. Look for patterns: which formats get clicks, which products convert, whether timestamps change results. Commissions confirm after return windows, so compare months, not days.",
      },
      { type: "heading", text: "Disclosure", id: "disclosure" },
      {
        type: "paragraph",
        text: "Tagged products that earn you a commission need disclosure. A short spoken line (\"products are tagged; I earn a commission if you buy\") plus a description note covers most videos. In India, follow ASCI's guidelines as well as YouTube's policies.",
      },
      {
        type: "paragraph",
        text: "Rules: creator disclosure guide.",
        links: [{ text: "creator disclosure guide", href: "/blog/creator-disclosure-guide" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Tagging dozens of loosely related products.",
          "A Shorts sticker for the wrong product because it was first in the list.",
          "No timestamps on long reviews.",
          "Out-of-date tags on evergreen videos.",
          "Forgetting disclosure because the tag \"looks official\".",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Good tagging is editing: choose the products that matter, order them deliberately, time them to when they appear, and keep evergreen videos current. Measure monthly and let the data decide which formats deserve tags.",
      },
    ],
    faqs: [
      {
        question: "How many products can you tag in a YouTube video?",
        answer:
          "YouTube's help centre says you can tag up to 60 products per video or Short. Fewer, relevant tags usually work better.",
      },
      {
        question: "How do product timestamps work on YouTube?",
        answer:
          "On long-form videos of a minute or longer, you can set 15 to 60 second timestamps so products appear while you discuss them. Timestamps are set on a computer while editing.",
      },
      {
        question: "Which product shows on a YouTube Shorts sticker?",
        answer:
          "The first product in your tagged list. You can adjust the sticker's size and placement in the YouTube app.",
      },
      {
        question: "Can I change product tags after uploading?",
        answer:
          "Yes. Add, remove or reorder tags from the video's Details page in YouTube Studio without re-uploading.",
      },
    ],
  },
  {
    slug: "youtube-live-monetization",
    category: "Creator Resources",
    title: "YouTube Live Monetization: How Creators Can Earn From Live Audiences",
    seoTitle: "YouTube Live Monetization: How Creators Earn From Streams",
    excerpt:
      "Every way to earn from YouTube live streams: ads, Super Chat and Super Stickers, Gifts, memberships and members-only streams, live product tagging and sponsored segments, plus live requirements and formats that earn without pressure.",
    metaDescription:
      "YouTube live monetization for Indian creators: live requirements, ads, Super Chat, Gifts, memberships, live shopping, sponsored segments and formats that earn.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["YouTube live monetization", "YouTube live streaming income", "Super Chat", "YouTube live Gifts", "YouTube live shopping"],
    related: ["youtube-gifts-memberships-super-thanks", "youtube-channel-membership-strategy", "youtube-product-tagging"],
    body: [
      {
        type: "paragraph",
        text: "Live is the one place on YouTube where viewers can talk to you and pay you at the same moment. That makes it powerful and easy to misuse. The creators who earn well from live treat streams as events with a format, not as open-ended requests for support.",
      },
      {
        type: "paragraph",
        text: "This guide covers monetizing live streams as a whole. For how each fan funding feature works (Super Chat, Super Stickers, Super Thanks, Gifts, memberships), see YouTube Gifts, memberships and Super Thanks. Details were checked against YouTube's help centre in September 2026.",
        links: [{ text: "YouTube Gifts, memberships and Super Thanks", href: "/blog/youtube-gifts-memberships-super-thanks" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "YouTube creators earn from live streams through ads (for YouTube Partner Program channels), Super Chat and Super Stickers, Gifts sent with Jewels on eligible vertical and horizontal streams, channel memberships and members-only streams, YouTube Shopping product tags during and after streams, and sponsored live segments. To stream on mobile you need at least 50 subscribers, a verified channel and no live streaming restrictions in the past 90 days; channels under 1,000 subscribers may have limited mobile audiences. Earn more by running planned, interactive formats and acknowledging support without pressuring viewers.",
      },
      { type: "heading", text: "Live requirements", id: "requirements" },
      {
        type: "table",
        headers: ["Requirement", "Detail (per YouTube's help centre)"],
        rows: [
          ["Verified channel", "Required to live stream"],
          ["No recent restrictions", "No live streaming restrictions in the last 90 days"],
          ["Mobile streaming", "At least 50 subscribers"],
          ["Under 1,000 subscribers", "Mobile audience may be limited; archived mobile streams private by default"],
          ["Monetization features", "Each has its own eligibility (YPP, fan funding, virtual items)"],
        ],
      },
      {
        type: "paragraph",
        text: "Official: YouTube's live streaming requirements and mobile live requirements.",
        links: [
          { text: "YouTube's live streaming requirements", href: SOURCES.youtubeLiveRequirements },
          { text: "mobile live requirements", href: SOURCES.youtubeMobileLive },
        ],
      },
      { type: "heading", text: "Live income streams", id: "streams" },
      {
        type: "table",
        headers: ["Stream", "How it pays", "Best formats"],
        rows: [
          ["Ads", "Ad revenue for YPP channels", "Longer streams with natural breaks"],
          ["Super Chat and Super Stickers", "Paid highlighted messages and stickers", "Q&As, reactions, community events"],
          ["Gifts", "Viewers send gifts using Jewels; you earn Rubies", "Interactive, mobile-first streams"],
          ["Memberships", "Monthly members; members-only streams", "Regular sessions for your core community"],
          ["Live Shopping", "Commission on tagged products", "Launches, demos, hauls"],
          ["Sponsored segments", "Brand fee", "Launches, tutorials, events"],
        ],
      },
      { type: "heading", text: "Formats that earn without pressure", id: "formats" },
      {
        type: "list",
        items: [
          "Weekly Q&A: viewers bring questions; Super Chats get priority but every question gets respect.",
          "Build or cook along: viewers follow in real time; tools and ingredients tagged.",
          "Review or reaction nights: you review viewer submissions or new launches.",
          "Study or work sessions: a calm, long format popular with student audiences.",
          "Launch events: a sponsor's product revealed and demonstrated, with tags and a disclosed sponsorship.",
          "Members-only monthly session: deeper Q&A as a membership perk.",
        ],
      },
      { type: "heading", text: "Plan each stream", id: "plan" },
      {
        type: "template",
        label: "Live stream plan",
        text: "Title and thumbnail: what viewers get and when\nSchedule: announce 2–3 days ahead; set a reminder\nRun of show: welcome → main segment → interactive segment → wrap-up\nMonetization: which features are on; products to tag; sponsor segment timing\nModeration: moderators, blocked words, slow mode if needed\nAfter: pin highlights, clip Shorts, tag products in the replay",
      },
      { type: "heading", text: "Sponsored live segments", id: "sponsors" },
      {
        type: "paragraph",
        text: "A live segment is a deliverable with its own risks: things go wrong in real time. Agree the talking points, what claims you can and can't make, how you'll handle negative comments, and whether the replay stays up. Disclose at the start of the segment and again later for people who join late, and tick YouTube's paid promotion setting. Price live viewers and replay views separately.",
      },
      {
        type: "paragraph",
        text: "Disclosure: creator disclosure guide.",
        links: [{ text: "creator disclosure guide", href: "/blog/creator-disclosure-guide" }],
      },
      { type: "heading", text: "Live Shopping", id: "shopping" },
      {
        type: "paragraph",
        text: "Tag products during the stream as you show them, or add them after; products added later appear in the replay. Keep a short list and demonstrate each product properly. Tagging mechanics are in YouTube product tagging.",
        links: [{ text: "YouTube product tagging", href: "/blog/youtube-product-tagging" }],
      },
      { type: "heading", text: "Acknowledge support well", id: "acknowledge" },
      {
        type: "list",
        items: [
          "Thank supporters by name, briefly, without making non-payers feel invisible.",
          "Don't promise outcomes for Super Chats or Gifts.",
          "Answer questions on merit, not just payment.",
          "Be careful with young viewers; don't encourage spending.",
        ],
      },
      { type: "heading", text: "Measure a live stream", id: "measure" },
      {
        type: "paragraph",
        text: "Look at peak and average concurrent viewers, chat rate, new members, Super Chat and Gifts revenue, product tag clicks, and replay views over the following week. Compare streams with the same format. Clip the best moments into Shorts to reach people who missed it. Starting a gaming channel? Read our practical guide to becoming a gaming content creator in India.", links: [{ text: "becoming a gaming content creator in India", href: "/blog/gaming-content-creator-india" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Unplanned streams with no reason to attend.",
          "Asking for support every few minutes.",
          "No moderators on a growing stream.",
          "Sponsor disclosures only at the start.",
          "Ending the stream and forgetting the replay, tags and clips.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "YouTube Live pays when streams are regular events with a clear format and genuine interaction. If you also stream for audiences abroad, TikTok LIVE works on similar principles, though it isn't available in India. Check requirements, turn on the features that suit your format, plan every stream, disclose sponsors throughout, and use the replay and clips to extend the value.",
        links: [{ text: "TikTok LIVE", href: "/blog/tiktok-live" }],
      },
    ],
    faqs: [
      {
        question: "How many subscribers do you need to go live on YouTube mobile?",
        answer:
          "At least 50 subscribers, with a verified channel and no live streaming restrictions in the past 90 days. Channels under 1,000 subscribers may have limited mobile audiences.",
      },
      {
        question: "How do YouTubers make money from live streams?",
        answer:
          "Through ads for YPP channels, Super Chat and Super Stickers, Gifts, memberships and members-only streams, YouTube Shopping tags and sponsored segments.",
      },
      {
        question: "Are YouTube Gifts available in India?",
        answer:
          "Yes. YouTube lists India among countries where Gifts are available for eligible creators on eligible live streams.",
      },
      {
        question: "Do I need to disclose a sponsor in a live stream?",
        answer:
          "Yes, at the start of the sponsored segment and again later for viewers who join late, plus YouTube's paid promotion setting.",
      },
    ],
  },
  {
    slug: "youtube-channel-membership-strategy",
    category: "Creator Resources",
    title: "YouTube Channel Membership Strategy: How to Build a Valuable Paid Community",
    seoTitle: "YouTube Channel Memberships: Strategy, Perks and Tiers",
    excerpt:
      "A strategy for YouTube channel memberships: deciding if you're ready, designing tiers around a monthly promise, choosing perks YouTube allows, planning members-only content, launching, and keeping members beyond month three.",
    metaDescription: "How to plan YouTube channel memberships: when you're ready, tier design, perks that are allowed, members-only content, launch and retention.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "11 min read",
    tags: ["YouTube channel memberships", "YouTube membership perks", "YouTube membership tiers", "members-only content", "YouTube paid community"],
    related: ["youtube-gifts-memberships-super-thanks", "creator-memberships", "youtube-live-monetization"],
    body: [
      {
        type: "paragraph",
        text: "Turning on channel memberships takes five minutes. Keeping members paying for a year takes a plan. The channels that do it well sell belonging and a predictable benefit, then deliver it on a calendar.",
      },
      {
        type: "paragraph",
        text: "This guide is about strategy. For how memberships work and how to turn them on, see YouTube Gifts, memberships and Super Thanks; for membership models across platforms, see creator memberships.",
        links: [
          { text: "YouTube Gifts, memberships and Super Thanks", href: "/blog/youtube-gifts-memberships-super-thanks" },
          { text: "creator memberships", href: "/blog/creator-memberships" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A strong YouTube membership strategy starts with a monthly promise members can rely on, one to three tiers built on that promise, perks YouTube allows (badges, emoji, members-only posts, live chats and content), a members-only content calendar you can sustain, a clear launch, and retention habits: welcoming new members, delivering consistently and reviewing cancellations. India is among the countries where memberships are available to eligible channels. YouTube doesn't allow perks such as downloads or random prize draws, and content marketed to children isn't eligible.",
      },
      { type: "heading", text: "Are you ready?", id: "ready" },
      {
        type: "list",
        items: [
          "Your comments show a regular core of viewers, not just one-time visitors.",
          "People ask for more of something specific: deeper tutorials, early access, behind the scenes, time with you.",
          "You can commit to members-only delivery for at least six months.",
          "You meet YouTube's fan funding eligibility (check Studio's Earn section).",
        ],
      },
      {
        type: "paragraph",
        text: "If you're unsure, run a free community post series or a monthly live Q&A first and watch who returns.",
      },
      { type: "heading", text: "Design tiers around a promise", id: "tiers" },
      {
        type: "table",
        headers: ["Tier (illustrative)", "Promise", "Perks"],
        rows: [
          ["Supporter", "\"Support the channel and be recognised\"", "Badge, emoji, members-only posts"],
          ["Insider", "\"Get more of what you come for\"", "Above + early access, monthly members-only live"],
          ["Inner circle", "\"Direct access\"", "Above + quarterly small-group session or feedback on your work"],
        ],
      },
      {
        type: "paragraph",
        text: "Keep the top tier deliverable. Direct-access perks scale badly; cap them or price them to reflect your time.",
      },
      { type: "heading", text: "Perks YouTube allows and doesn't", id: "perks" },
      {
        type: "paragraph",
        text: "YouTube's membership policies allow perks such as badges, emoji, members-only posts and live chats, and other goods and content delivered through YouTube's features. They prohibit certain perks, including downloads and random contests or lotteries, and memberships marketed to children. Check the current policy before promising anything unusual.",
      },
      {
        type: "paragraph",
        text: "Official: YouTube's channel memberships page.",
        links: [{ text: "YouTube's channel memberships page", href: SOURCES.youtubeMemberships }],
      },
      { type: "heading", text: "Plan members-only content", id: "calendar" },
      {
        type: "template",
        label: "Monthly members calendar (illustrative)",
        text: "Week 1: members-only post with next month's plan and a poll\nWeek 2: early access to a main video (members first, public later)\nWeek 3: members-only live Q&A or workshop\nWeek 4: behind the scenes or a bonus explainer\nEvery new member: a thank-you in the next community post",
      },
      {
        type: "paragraph",
        text: "Batch members-only content with your main production so it doesn't depend on spare time.",
      },
      { type: "heading", text: "Launch", id: "launch" },
      {
        type: "list",
        items: [
          "Announce in a main video and a community post: the promise, tiers and what free viewers keep.",
          "Run a first members-only live within the first week.",
          "Thank early members publicly (with their consent).",
          "Mention memberships at natural moments afterwards, not in every video.",
        ],
      },
      { type: "heading", text: "Retention: months three to twelve", id: "retention" },
      {
        type: "paragraph",
        text: "Cancellations usually spike after the first month (under-delivery) or after a few months (repetition). Keep a simple log of joins and cancellations by month, ask leaving members for a reason if you can, and refresh one perk each quarter. Community rituals, like a monthly members' showcase, keep people connected to each other as well as to you. See how to build a creator community.",
        links: [{ text: "how to build a creator community", href: "/blog/how-to-build-a-creator-community" }],
      },
      { type: "heading", text: "Memberships and live", id: "live" },
      {
        type: "paragraph",
        text: "Members-only live streams are often the most valued perk because they give time and interaction. They also connect with Super Chat and Gifts on public streams. YouTube Live monetization covers how to plan streams.",
        links: [{ text: "YouTube Live monetization", href: "/blog/youtube-live-monetization" }],
      },
      { type: "heading", text: "Measure", id: "measure" },
      {
        type: "paragraph",
        text: "Track active members by tier, new members and cancellations per month, members-only content delivered vs promised, and engagement on members-only posts and lives. Revenue matters, but delivery consistency predicts it.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Launching memberships with no promise beyond \"support me\".",
          "Too many tiers with overlapping perks.",
          "Perks that quietly stop after two months.",
          "Moving public content behind the paywall.",
          "Pressure-selling to young viewers.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "YouTube memberships succeed as a promise kept every month. Check eligibility, design one to three tiers around that promise, use allowed perks, put members-only content on a calendar and watch retention closely.",
      },
    ],
    faqs: [
      {
        question: "How many tiers should YouTube channel memberships have?",
        answer:
          "One to three is usually enough, each built on a clear promise and perks you can deliver every month.",
      },
      {
        question: "What perks can I offer YouTube members?",
        answer:
          "Badges, emoji, members-only posts, live chats and content delivered through YouTube's features. YouTube prohibits perks such as downloads and random contests or lotteries.",
      },
      {
        question: "Are YouTube channel memberships available in India?",
        answer:
          "Yes. India is listed among available locations for eligible channels that meet YouTube's fan funding requirements.",
      },
      {
        question: "Why do members cancel?",
        answer:
          "Usually because perks weren't delivered consistently or became repetitive. Track cancellations by month and refresh perks each quarter.",
      },
    ],
  },
  {
    slug: "youtube-shorts-vs-long-form",
    category: "Creator Resources",
    title: "YouTube Shorts vs Long-Form Videos: What Should Creators Focus On?",
    seoTitle: "YouTube Shorts vs Long-Form: Which Should You Focus On?",
    excerpt:
      "Shorts or long videos? Neither format always wins. Compare discovery, watch time, monetization and brand value, pick by your goal, and run a 30-day test on your own channel.",
    metaDescription:
      "Shorts or long videos for your channel? Compare discovery, watch time, YPP and brand value, pick by goal, and run a 30-day test with your own YouTube analytics.",
    author: { name: "Kudozz Partnerships Team", role: "Creator Partnerships" },
    publishedAt: "2026-09-29",
    updatedAt: "2026-11-10",
    lastReviewed: "November 2026",
    readingTime: "8 min read",
    tags: ["YouTube Shorts vs long-form", "Shorts or long videos", "new YouTube channel", "YouTube format strategy", "Shorts related video link"],
    related: ["youtube-shorts-content-strategy", "youtube-analytics-for-creators", "turn-long-video-into-short-form-content", "watch-time-vs-retention"],
    body: [
      {
        type: "paragraph",
        text: "You have limited time each week, and every creator forum gives a different answer: post only Shorts, Shorts are dead, long videos are the only real income. Here is the honest version. Shorts and long-form videos do different jobs, so the right focus depends on what you are trying to achieve right now, and your own analytics can settle it in about a month.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Neither format is always better. Shorts (vertical or square videos up to three minutes) are built for fast discovery in the Shorts feed and for testing ideas cheaply. Long-form videos are better for search, deeper trust, watch time and detailed brand integrations. If you want new viewers quickly, lead with Shorts. If your niche is search-led (tutorials, reviews, explainers), lead with long-form. Most growing channels use both, connect them with the Related Video link, and judge each format by its own job using a 30-day test in YouTube Analytics.",
      },
      { type: "heading", text: "The official facts first", id: "official-facts" },
      {
        type: "paragraph",
        text: "A lot of advice about Shorts is out of date, so start with what YouTube's own help pages say as of November 2026.",
      },
      {
        type: "list",
        items: [
          "Length: since 15 October 2024, square or vertical videos up to three minutes long count as Shorts. Videos uploaded before that date stay long-form even if they are short.",
          "YouTube Partner Program (YPP): you need 1,000 subscribers plus either 4,000 qualified watch hours in the last 12 months or 10 million qualified Shorts views in the last 90 days. Qualified Shorts views come from public Shorts in the Shorts feed; private, unlisted or deleted Shorts and ad views don't count.",
          "Shorts revenue: ad revenue from the Shorts feed is pooled each month and allocated by each channel's share of engaged views per country. Creators keep 45% of their allocated share. Views that are unoriginal, artificial or not advertiser-friendly are excluded.",
          "Long-form revenue: YouTube's YPP overview lists 55% for watch page ads, against 45% of the creator pool for Shorts feed ads.",
          "Music: Shorts longer than one minute that carry a Content ID claim are blocked from monetization, which matters if you use popular tracks in longer Shorts.",
          "Upcoming change: YouTube says updated YPP terms take effect on 1 February 2027 and must be accepted by 31 January 2027. Check YouTube Studio for the details that apply to your channel.",
        ],
      },
      {
        type: "paragraph",
        text: "Sources: YouTube Help on Shorts up to three minutes, YPP eligibility, Shorts monetization policies and the YPP overview, all checked on 10 November 2026.",
        links: [
          { text: "Shorts up to three minutes", href: "https://support.google.com/youtube/answer/15424877" },
          { text: "YPP eligibility", href: "https://support.google.com/youtube/answer/72851" },
          { text: "Shorts monetization policies", href: "https://support.google.com/youtube/answer/12504220" },
          { text: "the YPP overview", href: "https://support.google.com/youtube/answer/72902" },
        ],
      },
      { type: "heading", text: "How each format behaves", id: "comparison" },
      {
        type: "table",
        headers: ["", "Shorts", "Long-form"],
        rows: [
          ["How people find it", "Mostly the Shorts feed, where viewers swipe through videos they did not ask for", "Search, home, suggested videos and subscriptions"],
          ["Viewer intent", "Low: they are browsing, not looking for you", "Often high: they searched or chose to click"],
          ["What success looks like", "Viewers stay instead of swiping away, then some follow", "Click-through, how long people watch, returning viewers"],
          ["Watch time", "Small per view; YPP counts Shorts views separately", "Builds qualified watch hours for YPP"],
          ["Relationship", "Fast familiarity with your face and voice", "Deeper trust, because viewers spend real time with you"],
          ["Shelf life", "Usually short, sometimes resurfaces", "Search-led videos can keep getting found for a long time"],
          ["Production", "Quicker per piece, more pieces needed", "Slower, more planning and editing"],
        ],
      },
      {
        type: "paragraph",
        text: "None of this means one format grows channels faster on every niche. YouTube's own blog post on turning Shorts views into long-form growth (14 July 2026) recommends Related Video links but publishes no data showing that Shorts viewers go on to watch long videos. Treat crossover as something to test, not assume. For how search traffic differs from recommended traffic, see YouTube search vs recommendations.",
        links: [
          { text: "turning Shorts views into long-form growth", href: "https://blog.youtube/creator-and-artist-stories/youtube-related-videos-traffic-guide/" },
          { text: "YouTube search vs recommendations", href: "/blog/youtube-search-vs-recommendations" },
        ],
      },
      { type: "heading", text: "Pick by goal", id: "by-goal" },
      {
        type: "table",
        headers: ["Your main goal right now", "Lead with", "Why", "Support with"],
        rows: [
          ["New channel, need first viewers", "Shorts", "The feed shows your work to people who don't know you yet, and you learn which topics land", "One long video a week or fortnight on your best-performing Short topic"],
          ["Search-led tutorials (finance, tech, exam prep, recipes)", "Long-form", "People search for full answers and stay for detail", "Shorts that answer one sub-question and link to the full video"],
          ["Brand deals", "Both, priced separately", "Brands buy Shorts for reach bursts and long-form for integrations and reviews", "A media kit that reports each format on its own"],
          ["YouTube Shopping affiliate", "Both", "Products can be tagged on long videos, Shorts and live streams; long videos also get a Shopping button and timestamped tags", "Honest reviews in long-form, quick demos in Shorts"],
          ["Community and trust (memberships, loyal viewers)", "Long-form", "Time spent with you builds the relationship that paid support depends on", "Shorts as the front door"],
        ],
      },
      {
        type: "paragraph",
        text: "If affiliate income is part of your plan, YouTube Shopping for Indian creators covers eligibility and retailers, and YouTube's product tagging help page confirms tags work on videos, Shorts and live streams.",
        links: [
          { text: "YouTube Shopping for Indian creators", href: "/blog/youtube-shopping-india-creators" },
          { text: "product tagging help page", href: "https://support.google.com/youtube/answer/10191533" },
        ],
      },
      { type: "subheading", text: "When to lead with Shorts" },
      {
        type: "list",
        items: [
          "Your content is naturally quick: tips, reactions, before-and-after, comedy, one-step demos.",
          "Your channel is new and you need to find out which topics people actually stop for.",
          "You make content in a regional language and want to test whether a topic travels before investing in a long script. A Marathi cooking creator, for example, could test five dishes as Shorts before scripting a full recipe video.",
        ],
      },
      { type: "subheading", text: "When to lead with long-form" },
      {
        type: "list",
        items: [
          "Your niche needs explanation: personal finance, tech reviews, coding, education, travel planning.",
          "Viewers search to decide something, such as which phone to buy or how to file a return.",
          "You want income that does not depend on one viral week: integrations, memberships, affiliate reviews.",
        ],
      },
      { type: "heading", text: "A 30-day test to decide for your channel", id: "30-day-test" },
      {
        type: "paragraph",
        text: "Instead of guessing, run both formats on the same topics for four weeks and compare. Keep the plan realistic for one person with a phone.",
      },
      {
        type: "template",
        label: "30-day Shorts vs long-form test (illustrative plan)",
        text: "Week 0: Pick 4 topics from your niche. Note current subscribers and average views.\nWeeks 1-4: For each topic, publish 1 long video and 2-3 Shorts on the same idea. Link each Short to its long video with the Related Video link if you have access.\nTrack weekly, per format:\n- Shorts: viewed vs swiped away, engaged views, subscribers gained\n- Long-form: impressions click-through rate, average view duration, retention graph, returning viewers\n- Both: subscribers gained per format, traffic into long videos from Shorts\nDay 30: Ask three questions.\n1. Which format brought subscribers who came back?\n2. Which topics worked in both formats?\n3. Which format can you sustain without burning out?",
      },
      {
        type: "paragraph",
        text: "YouTube analytics for creators shows where each of these numbers lives in Studio, and watch time vs retention explains why a long video with fewer views can still be your stronger performer. For Shorts-specific numbers, short-form video analytics goes deeper.",
        links: [
          { text: "YouTube analytics for creators", href: "/blog/youtube-analytics-for-creators" },
          { text: "watch time vs retention", href: "/blog/watch-time-vs-retention" },
          { text: "short-form video analytics", href: "/blog/short-form-video-analytics" },
        ],
      },
      {
        type: "paragraph",
        text: "Read the results by job, not by raw views. Shorts will usually show bigger view numbers because of how the feed works. A long video with fewer views but strong retention and returning viewers may be doing more for your channel.",
      },
      { type: "heading", text: "Using both together", id: "together" },
      {
        type: "paragraph",
        text: "The most useful connection is the Related Video link. In YouTube Studio, open Content, choose the Short, and add a Related Video; it appears as a clickable link below your channel handle. The target must be one of your own public or unlisted videos, Shorts or live streams. YouTube's help page on related video links says it needs advanced feature access, so check that first.",
        links: [{ text: "help page on related video links", href: "https://support.google.com/youtube/answer/14075157" }],
      },
      {
        type: "list",
        items: [
          "Cut two or three Shorts from each long video, each answering one sub-question, and link each to the full video.",
          "Test topics as Shorts and turn the ones that hold viewers into long videos.",
          "Use Shorts for a launch or reaction and long-form for the full review.",
          "Make the Short complete on its own. A Short that only says 'watch the full video' feels like an ad and gets swiped.",
        ],
      },
      {
        type: "paragraph",
        text: "The step-by-step cutting workflow is in turn one long video into 10 pieces of short-form content, and the Shorts-only playbook (hooks, series, posting rhythm) is in our YouTube Shorts content strategy guide.",
        links: [
          { text: "turn one long video into 10 pieces of short-form content", href: "/blog/turn-long-video-into-short-form-content" },
          { text: "YouTube Shorts content strategy guide", href: "/blog/youtube-shorts-content-strategy" },
        ],
      },
      { type: "heading", text: "What brands ask for", id: "brands" },
      {
        type: "paragraph",
        text: "In general, brands use Shorts when they want quick reach around a launch, sale or festival moment, and long-form integrations when the product needs explaining or a believable review. Many briefs ask for a package: one integration plus a few Shorts.",
      },
      {
        type: "list",
        items: [
          "Price each format separately. A Short and a dedicated integration involve different work and different value.",
          "Report each format separately. Mixing Shorts views and long-form views into one average confuses brands and can undersell your long videos.",
          "Show the audience, not just views: where your viewers are, which languages they watch in, and how long they stay.",
          "Disclose paid promotions in both formats using YouTube's paid promotion setting.",
        ],
      },
      {
        type: "paragraph",
        text: "To set rates for each format, see YouTube brand deals and the influencer rate card guide for India.",
        links: [
          { text: "YouTube brand deals", href: "/blog/youtube-brand-deals" },
          { text: "influencer rate card guide for India", href: "/blog/influencer-rate-card-india" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Comparing Shorts views and long-form views as if they were the same currency.",
          "Deciding after one viral Short or one flop. Give each format a fair, equal test.",
          "Shorts that never point to deeper content, so new viewers have nowhere to go next.",
          "Dropping long-form entirely because Shorts numbers look bigger, then finding search traffic and integrations have dried up.",
          "Relying on old rules, such as the 60-second limit or YPP thresholds you read years ago. Check the current help pages and Studio.",
          "Using claimed music in Shorts over one minute and expecting them to earn.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Shorts and long-form are not rivals. Shorts help new people find you and let you test ideas quickly; long-form builds search traffic, trust and more ways to earn. Decide which leads based on your current goal, connect them with Related Video links, run a 30-day test, and let your own analytics, not forum opinions, set the balance.",
      },
    ],
    faqs: [
      {
        question: "Why do my Shorts get more views than my long videos?",
        answer:
          "The Shorts feed puts your video in front of people who were not looking for you, and views are quick to rack up. Long videos depend more on search, clicks and subscribers. Compare each format against its own past performance, not against the other.",
      },
      {
        question: "Will subscribers I gain from Shorts watch my long videos?",
        answer:
          "Some may, but it is not guaranteed, and YouTube has not published data showing it happens by default. Link Shorts to related long videos and check in Analytics whether Shorts viewers actually reach them.",
      },
      {
        question: "Is Shorts monetization worth it for a small channel?",
        answer:
          "You need YPP first, which means 1,000 subscribers plus 10 million qualified Shorts views in 90 days or 4,000 watch hours in 12 months. Until then, treat Shorts as a discovery and testing tool rather than an income source.",
      },
      {
        question: "Can I upload the same video as a Short and as a long video?",
        answer:
          "You can cut a Short from a long video, and that is a common workflow. Avoid uploading near-identical copies as separate long videos, and make each Short work on its own.",
      },
    ],
  },
];
