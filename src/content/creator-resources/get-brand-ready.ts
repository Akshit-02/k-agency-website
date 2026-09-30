import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_CLUSTER_PUBLISHED } from "@/content/creator-resources/shared";

/** Get Brand-Ready: media kit, rate card, portfolio. */
export const getBrandReadyPosts: BlogPost[] = [
  {
    slug: "creator-media-kit",
    category: "Creator Resources",
    title: "Creator Media Kit: How to Create a Media Kit That Gets Brand Deals",
    seoTitle: "Creator Media Kit: What to Include and How to Make One",
    excerpt:
      "A media kit is the document a brand opens when it's deciding whether you're worth a conversation. Here's what to put in it, what to leave out, and how to keep it honest.",
    metaDescription:
      "How to create a creator media kit brands actually read: what to include, audience and performance data, rates or no rates, PDF vs online, and a page-by-page structure.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "11 min read",
    tags: ["media kit", "influencer media kit", "creator media kit template", "brand collaborations", "creator resources", "creator media kit system", "update media kit"],
    related: ["creator-portfolio", "influencer-rate-card-india", "how-to-pitch-brands-as-a-creator"],
    body: [
      {
        type: "paragraph",
        text: "Most brand managers and agency planners look at dozens of creators for a single campaign. A media kit is how you make that shortlist decision easy: one document that tells them who you are, who watches you, what your content does, and how to work with you.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator media kit is a short document, usually 2 to 5 pages or one web page, that summarises your niche, audience demographics, platform performance (average views and engagement, not just followers), content examples, past brand work and contact details. Its job is to help a brand decide quickly whether you fit a campaign. Keep it current, use real numbers from your platform insights with a date on them, and decide deliberately whether to include rates.",
      },
      { type: "heading", text: "What is a creator media kit?", id: "what-is-a-media-kit" },
      {
        type: "paragraph",
        text: "A media kit (also called an influencer media kit or creator press kit) is a sales document for your channel. It is not your whole portfolio and it is not a price list. It sits between the two: enough evidence to earn a reply, short enough to read in two minutes.",
      },
      {
        type: "paragraph",
        text: "Creators often confuse it with related documents. If you're unsure where one ends and the other begins, the creator portfolio guide breaks down media kit vs portfolio vs rate card vs creator website in detail. When you want to propose specific ideas to one brand rather than introduce yourself generally, use a creator pitch deck instead.",
        links: [
          { text: "creator portfolio guide", href: "/blog/creator-portfolio" },
          { text: "creator pitch deck", href: "/blog/creator-pitch-deck" },
        ],
      },
      { type: "heading", text: "Why brands ask for media kits", id: "why-brands-ask" },
      {
        type: "list",
        items: [
          "Speed: a planner comparing 40 creators needs the same information from each one in a predictable format.",
          "Internal approval: the person talking to you usually has to justify the choice to a manager or client. Your media kit often gets forwarded as-is.",
          "Audience fit: brands care most about who your audience is (city, age, gender split, language), because that decides whether the campaign reaches their buyers.",
          "Risk check: past collaborations and content samples show how you handle brand work and whether your content is brand-safe for them.",
        ],
      },
      {
        type: "paragraph",
        text: "It helps to see the other side of the table. Brands usually follow a vetting process before they shortlist anyone, and a good media kit answers most of those questions before they're asked. See how brands vet influencers and how brands choose the right influencer for what they're checking.",
        links: [
          { text: "how brands vet influencers", href: "/blog/how-to-vet-influencers" },
          { text: "how brands choose the right influencer", href: "/blog/how-to-choose-the-right-influencer-for-your-brand" },
        ],
      },
      { type: "heading", text: "What a media kit should contain", id: "what-to-include" },
      {
        type: "table",
        headers: ["Section", "What to include", "Why it matters to a brand"],
        rows: [
          ["Creator bio", "Name, handle(s), 2 to 3 lines on what your content is and who it's for", "Tells them in seconds whether you're in their category"],
          ["Niche and content pillars", "3 to 4 recurring themes, e.g. budget skincare, ingredient explainers, GRWM", "Shows where a brand fits naturally in your content"],
          ["Audience demographics", "Top cities/countries, age ranges, gender split, main language(s)", "Decides whether you reach their customer"],
          ["Platform statistics", "Followers/subscribers per platform, with the date the numbers were taken", "Context for size, not the main decision factor"],
          ["Performance", "Average views per Reel/video, average reach, engagement rate with the formula you used", "The number most planners actually compare"],
          ["Content examples", "3 to 6 links or thumbnails of your best-performing and most brand-relevant posts", "Proof of quality and style"],
          ["Previous collaborations", "Brand names, what you made, and a result if you have one you can share", "Shows you can deliver brand work"],
          ["Testimonials", "Only real quotes, with permission, attributed to a role or company", "Social proof from people who've paid you"],
          ["Services and formats", "Reels, Stories, YouTube integrations, Shorts, UGC-only, live, events", "Tells them what they can actually buy"],
          ["Contact details", "Business email, phone/WhatsApp if you want it used, manager if any", "Makes the next step easy"],
        ],
      },
      { type: "subheading", text: "Audience demographics" },
      {
        type: "paragraph",
        text: "Pull demographics from your platform's native insights (Instagram professional dashboard, YouTube Studio Analytics) rather than third-party estimates. Show the top 3 to 5 cities, the dominant age bands and the gender split. For Indian creators, language matters: if 60% of your audience watches your Hindi or Tamil content, say so. Regional reach is a selling point for brands trying to grow beyond metros.",
      },
      { type: "subheading", text: "Platform statistics and engagement" },
      {
        type: "paragraph",
        text: "Followers tell a brand how big the room is. Average views and engagement tell them how many people are actually listening. Lead with averages over a recent period (for example your last 10 to 15 Reels or last 90 days of videos) and state the period. Since April 2025 Instagram reports a unified Views metric instead of impressions and plays, so label your numbers with the metric name your dashboard uses today.",
      },
      {
        type: "paragraph",
        text: "If you quote an engagement rate, say how you calculated it: engagement divided by followers gives a very different number to engagement divided by reach or views. The engagement rate guide walks through both formulas with worked examples, and creator analytics for brand deals covers which metrics are worth sharing at all.",
        links: [
          { text: "engagement rate guide", href: "/blog/influencer-engagement-rate" },
          { text: "creator analytics for brand deals", href: "/blog/creator-analytics-for-brand-deals" },
        ],
      },
      { type: "subheading", text: "Previous collaborations and testimonials" },
      {
        type: "paragraph",
        text: "List brands you've genuinely worked with, paid or gifted, and be accurate about which was which if asked. If a campaign produced a result you're allowed to share (a sold-out discount code, a high save rate, a brand reusing your video as an ad), include it in one line. Only use testimonials people actually gave you, and ask before quoting a brand contact by name. Invented or inflated social proof is easy to check and ends conversations quickly.",
      },
      { type: "subheading", text: "Services and content formats" },
      {
        type: "paragraph",
        text: "List what you offer, not what you've done once. If you make UGC-only videos for brands' own ads, say so separately from posting on your channel, because they're priced and licensed differently. If you're open to long-term ambassador work, events or live sessions, mention it.",
      },
      { type: "heading", text: "Should you include rates in your media kit?", id: "rates-in-media-kit" },
      {
        type: "paragraph",
        text: "There's no single right answer. Both approaches are common, and the choice depends on how you want the conversation to go.",
      },
      {
        type: "table",
        headers: ["", "Include rates", "Leave rates out"],
        rows: [
          ["Best for", "Creators with consistent formats and a clear price floor", "Creators whose pricing depends heavily on rights, exclusivity and scope"],
          ["Upside", "Filters out brands who can't afford you; speeds up simple deals", "Lets you price each brief properly; avoids anchoring low"],
          ["Downside", "Rates get forwarded and can become outdated or anchor negotiations", "One extra email before you know if the budget is there"],
          ["Middle ground", "\"Starting from\" prices for core formats, with usage rights and exclusivity quoted separately", "A line saying \"Rate card available on request\""],
        ],
      },
      {
        type: "paragraph",
        text: "Whichever you choose, keep your full pricing in a separate rate card so your media kit doesn't go stale every time you adjust a price. The influencer rate card guide shows how to structure one, and how much creators should charge covers the pricing logic behind the numbers.",
        links: [
          { text: "influencer rate card guide", href: "/blog/influencer-rate-card-india" },
          { text: "how much creators should charge", href: "/blog/how-much-should-creators-charge-india" },
        ],
      },
      { type: "heading", text: "A practical media kit structure", id: "media-kit-structure" },
      {
        type: "image",
        src: "/blog/creator-resources/media-kit-structure.svg",
        alt: "Diagram of a four-page creator media kit: page 1 intro and niche, page 2 audience and performance, page 3 content examples and past brand work, page 4 services and contact",
        caption: "A four-page structure works for most creators. Nano creators can compress it to two pages.",
        width: 1200,
        height: 675,
      },
      {
        type: "template",
        label: "Media kit outline (copy and adapt)",
        text: "PAGE 1 — WHO I AM\n• Photo, name, handle(s), city\n• One-line positioning: \"I make ___ for ___ who want ___.\"\n• 3–4 content pillars\n\nPAGE 2 — AUDIENCE & PERFORMANCE (numbers as of [month year])\n• Followers/subscribers per platform\n• Average views per Reel / video (last 90 days)\n• Engagement rate + formula used\n• Top cities, age bands, gender split, languages\n\nPAGE 3 — PROOF\n• 3–6 best content examples (links or QR codes)\n• Past brand collaborations (brand, format, one-line result if shareable)\n• 1–2 genuine testimonials (with permission)\n\nPAGE 4 — WORK WITH ME\n• Formats offered: Reels, Stories, carousels, YouTube integrations, Shorts, UGC-only\n• Rates: included / \"from\" prices / on request\n• Business email, phone, manager (if any)\n• Link to portfolio or website",
      },
      { type: "heading", text: "Media kit design", id: "design" },
      {
        type: "list",
        items: [
          "Readability beats decoration. Brands skim on phones; use large numbers, short labels and plenty of space.",
          "Match your content's look. If your feed is minimal and neutral, your media kit shouldn't be neon.",
          "Use your own photos. Don't use images of other creators or stock photos that suggest work you didn't do.",
          "Make links clickable in the PDF and add QR codes if it may be printed or shown at events.",
          "Keep file size small (under a few MB) so it doesn't bounce off email attachment limits.",
        ],
      },
      { type: "heading", text: "PDF vs online media kit", id: "pdf-vs-online" },
      {
        type: "table",
        headers: ["Format", "Pros", "Cons"],
        rows: [
          ["PDF", "Easy to attach and forward; works offline; brands can save it to a campaign folder", "Goes out of date the moment you send it; old versions keep circulating"],
          ["Online page (website, Notion, link-in-bio page)", "Always current; can embed videos; one link in every pitch", "Some brand teams prefer attachments; depends on the tool staying online"],
          ["Both", "PDF for formal pitches, link for DMs and bios", "Two things to update"],
        ],
      },
      {
        type: "paragraph",
        text: "Many creators keep an online version as the source of truth and export a dated PDF when a brand asks for one. Put the month and year in the PDF filename, for example yourname-media-kit-sep-2026.pdf.",
      },
      {
        type: "paragraph",
        text: "A work-with-me page on your own site is a natural home for the online version; see how to build a creator website.",
        links: [{ text: "how to build a creator website", href: "/blog/how-to-build-a-creator-website" }],
      },
      { type: "heading", text: "How often to update it", id: "how-often-to-update" },
      {
        type: "paragraph",
        text: "Update your numbers at least every quarter, and immediately after anything that changes the picture: a big jump in audience, a new platform, a strong brand campaign, or a shift in niche. Always date your stats. A brand that later checks your insights and sees lower numbers than your media kit claimed will stop trusting everything else in it.",
      },
      { type: "heading", text: "A media kit system: keep it current without rebuilding it", id: "media-kit-system" },
      {
        type: "template",
        label: "Media kit system",
        text: "Source of truth: one editable master file (not only a PDF)\nMonthly (15 min): update audience numbers and date them; swap in a recent top post\nAfter each campaign: add results to case studies; add the brand to past partners (if allowed)\nQuarterly: refresh photos, bio and rate card; check every link\nShare: a stable link that always points to the latest version\nKeep with: bios, headshots and logos in your brand asset folder",
      },
      {
        type: "paragraph",
        text: "Where bios, photos and logos live is covered in creator file management.",
        links: [
          { text: "creator file management", href: "/blog/creator-file-management" },
        ],
      },
      { type: "heading", text: "Do small creators need a media kit?", id: "small-creators" },
      {
        type: "paragraph",
        text: "Yes, but it can be shorter. Nano and micro creators often have stronger engagement and a more specific audience than larger accounts, and a one or two page kit that shows this clearly can be more persuasive than a long one. If you haven't done paid work yet, replace the collaborations section with self-initiated sample content: a product you genuinely use, reviewed the way you'd do it for a brand. The first brand collaboration guide covers this in more depth.",
        links: [{ text: "first brand collaboration guide", href: "/blog/first-brand-collaboration-india" }],
      },
      { type: "heading", text: "Mistakes to avoid", id: "mistakes" },
      {
        type: "list",
        items: [
          "Leading with follower count and burying average views and audience data.",
          "Undated statistics, or numbers from your best month presented as typical.",
          "Engagement rate with no formula, or one calculated on a single viral post.",
          "Listing brands you were only gifted by as if they were paid partnerships, or brands you never worked with at all.",
          "Using other people's photos or content without permission.",
          "Ten-page designs that bury the essentials; if it takes more than two minutes to read, trim it.",
          "No business email. A personal DM-only contact route looks unprofessional to many brand teams.",
        ],
      },
      {
        type: "quote",
        text: "The best media kits we receive answer three questions in the first page: who is this for, who actually watches, and what does a typical post do. Everything else is supporting evidence.",
        attribution: "Kudozz Partnerships Team",
      },
      { type: "heading", text: "Media kit checklist", id: "checklist" },
      {
        type: "list",
        items: [
          "Positioning line that names your niche and audience",
          "Numbers dated with month and year, pulled from native insights",
          "Average views and engagement, with the formula stated",
          "Top cities, age bands, gender split and languages",
          "3 to 6 content examples with working links",
          "Accurate list of past collaborations",
          "Formats you offer, including UGC-only if relevant",
          "A deliberate choice on rates (included, \"from\" prices or on request)",
          "Business email and a link to your portfolio",
        ],
      },
      {
        type: "paragraph",
        text: "Once your media kit is ready, it's one part of a wider set of documents professional creators keep on hand. The creator business kit lists all ten and links to a guide for each.",
        links: [{ text: "creator business kit", href: "/blog/creator-business-kit" }],
      },
      {
        type: "paragraph",
        text: "Platform-specific versions: YouTube media kit for channels, and Instagram creator portfolio for making your profile match your kit.",
        links: [
          { text: "YouTube media kit", href: "/blog/youtube-media-kit" },
          { text: "Instagram creator portfolio", href: "/blog/instagram-creator-portfolio" },
        ],
      },
    ],
    faqs: [
      {
        question: "What should a creator media kit include?",
        answer:
          "A short bio and niche, audience demographics (location, age, gender, language), platform statistics with dates, average views and engagement with the formula used, 3 to 6 content examples, past brand collaborations, the formats you offer, and business contact details. Rates are optional.",
      },
      {
        question: "How many pages should a media kit have?",
        answer:
          "Two to five pages is typical. Most creators can fit everything into four: who you are, audience and performance, proof of work, and how to work with you. Shorter is better if the essentials are clear.",
      },
      {
        question: "Do small creators need a media kit?",
        answer:
          "Yes. A one or two page kit that shows a specific audience and solid average views helps nano and micro creators look professional and makes it easier for brands to say yes, even without past brand work.",
      },
      {
        question: "Should I put my rates in my media kit?",
        answer:
          "It depends. Including \"starting from\" rates filters out brands without budget, while leaving them out lets you price usage rights, exclusivity and scope properly for each brief. Many creators keep a separate rate card and share it on request.",
      },
      {
        question: "Is a media kit the same as a portfolio?",
        answer:
          "No. A media kit is a short summary built for a quick decision. A portfolio is a fuller body of work, often with case studies. Most professional creators keep both and link the portfolio from the media kit.",
      },
    ],
  },
  {
    slug: "influencer-rate-card-india",
    category: "Creator Resources",
    title: "Influencer Rate Card: How to Create and Price Your Creator Rate Card in India",
    seoTitle: "Influencer Rate Card India: How to Build and Price Yours",
    excerpt:
      "A rate card turns \"what do you charge?\" into a quick, professional answer. Here's how to structure one, which line items to include, and how to price add-ons like usage rights and exclusivity.",
    metaDescription:
      "How to create an influencer rate card in India: line items for Reels, Stories, YouTube integrations and UGC, add-ons for usage rights and exclusivity, bundles, and a pricing framework.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "11 min read",
    tags: ["influencer rate card", "creator rate card India", "influencer pricing", "usage rights", "exclusivity"],
    related: ["how-much-should-creators-charge-india", "creator-media-kit", "creator-usage-rights"],
    body: [
      {
        type: "paragraph",
        text: "When a brand asks \"what are your rates?\", creators without a rate card tend to either undercharge on the spot or go quiet for two days. A rate card fixes both problems: it's a document you prepare once, price carefully, and update when your numbers change.",
      },
      {
        type: "paragraph",
        text: "This guide is about building the document itself: its structure, line items and add-ons. For the reasoning behind the actual numbers, read how much creators should charge for brand collaborations alongside it.",
        links: [{ text: "how much creators should charge for brand collaborations", href: "/blog/how-much-should-creators-charge-india" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "An influencer rate card lists your base price for each content format you offer (for example an Instagram Reel, a Story set, a YouTube integration or a UGC-only video), then prices add-ons separately: paid usage rights, exclusivity, extra revisions, raw footage and cross-posting. There's no standard India rate. Build your prices from your average views, engagement, niche, production effort and the rights a brand wants, and quote bundles for multi-deliverable campaigns.",
      },
      { type: "heading", text: "What is a rate card?", id: "what-is-a-rate-card" },
      {
        type: "paragraph",
        text: "A rate card is a price list for your creator services. Unlike a media kit, which sells you, a rate card defines what each thing costs and what's included. Good rate cards make it obvious that a Reel posted on your account is a different product from a Reel the brand runs as an ad for six months.",
      },
      { type: "heading", text: "Why creators need one", id: "why-you-need-one" },
      {
        type: "list",
        items: [
          "Consistency: similar work gets similar prices, which protects your credibility when brands compare notes.",
          "Speed: you can answer rate questions the same day, which matters when brands are shortlisting.",
          "Unbundling: listing usage rights and exclusivity separately stops them being given away inside the base fee.",
          "Negotiation room: a clear structure lets you adjust scope instead of just cutting your price.",
        ],
      },
      { type: "heading", text: "Base deliverables to list", id: "base-deliverables" },
      {
        type: "paragraph",
        text: "List only the formats you actually make well. For each, define what's included so the price has a clear scope.",
      },
      {
        type: "table",
        headers: ["Deliverable", "What the base price should include", "Notes"],
        rows: [
          ["Instagram Reel", "Concept, script, shoot, edit, caption, one posting on your account, one round of revisions, organic reposting by the brand with credit", "Usually your core product; price from average Reel views"],
          ["Instagram Story set", "A set of 3 to 5 frames, link sticker if eligible, one posting", "Stories expire in 24 hours unless highlighted; note if a highlight is included and for how long"],
          ["Static post", "One image, caption, posting", "Fewer brands ask for single images now; keep if your audience engages with them"],
          ["Carousel", "Up to a stated number of slides, caption, posting", "Good for education and product comparisons; state the slide count"],
          ["YouTube integration", "A segment of stated length (for example 60 to 90 seconds) inside a regular video, link in description, pinned comment if agreed", "Price from average views per long-form video over a recent period"],
          ["YouTube dedicated video", "A full video about the brand or product", "Higher production and audience-trust cost than an integration"],
          ["YouTube Shorts", "One Short, posting, link in related video or description as available", "Price from Shorts views, which behave differently from long-form"],
          ["UGC-only video", "Video delivered to the brand for their channels or ads, not posted on your account", "Priced for production; usage rights are usually the main variable"],
        ],
      },
      {
        type: "paragraph",
        text: "If UGC is a big part of your work, the UGC creator portfolio guide covers how brands evaluate UGC-only creators, which is a slightly different sell to influencer work.",
        links: [{ text: "UGC creator portfolio guide", href: "/blog/ugc-creator-portfolio" }],
      },
      { type: "heading", text: "Add-ons to price separately", id: "add-ons" },
      {
        type: "paragraph",
        text: "These are where most creators leave money on the table. Each one gives the brand extra value or restricts what you can do, so each should have its own line.",
      },
      {
        type: "table",
        headers: ["Add-on", "What it means", "How to express it on your card"],
        rows: [
          ["Paid usage rights", "The brand runs your content as ads, from its own account", "Priced by duration (e.g. 30, 90, 180 days) and media (Meta ads, YouTube ads, website)"],
          ["Paid amplification / whitelisting", "The brand runs ads from your handle, for example Instagram partnership ads", "Separate line; state duration and whether you approve ad copy"],
          ["Exclusivity", "You agree not to work with competitors for a period", "Priced by category breadth and duration"],
          ["Extra revision rounds", "Changes beyond the included round", "Per-round fee, or \"one round included, further rounds charged\""],
          ["Raw footage", "Unedited clips for the brand to re-edit", "Separate fee; raw footage lets the brand make many new assets"],
          ["Cross-posting", "Same content posted to another platform (e.g. Reel to YouTube Shorts)", "Percentage or flat add-on per extra platform"],
          ["Rush delivery", "Turnaround faster than your standard timeline", "Flat fee or percentage uplift"],
          ["Link in bio / highlight", "Keeping a link or Story highlight live for a set period", "Per week or per month"],
        ],
      },
      {
        type: "paragraph",
        text: "We don't publish a fixed percentage for these add-ons because it varies too much between creators, categories and campaigns. What matters is that they're visible, so a brand asking for six months of paid usage understands it's buying more than a post. The creator usage rights, creator exclusivity, creator whitelisting and creator content licensing guides explain how to scope each one.",
        links: [
          { text: "creator usage rights", href: "/blog/creator-usage-rights" },
          { text: "creator exclusivity", href: "/blog/creator-exclusivity" },
          { text: "creator whitelisting", href: "/blog/creator-whitelisting" },
          { text: "creator content licensing", href: "/blog/creator-content-licensing" },
        ],
      },
      { type: "heading", text: "Bundles", id: "bundles" },
      {
        type: "paragraph",
        text: "Bundles combine formats at a price below the sum of the parts. They're useful because most campaigns want more than one touchpoint, and a bundle lets you offer value without cutting your per-format rate.",
      },
      {
        type: "template",
        label: "Example bundle structure (illustrative, not a price recommendation)",
        text: "LAUNCH BUNDLE\n• 1 Instagram Reel\n• 1 Story set (3–5 frames) on launch day with link sticker\n• 1 follow-up Story set within 7 days\n• 30 days organic reposting rights for the brand\nPrice: [your Reel rate + Story rates] minus [a discount you're comfortable with]\n\nALWAYS-ON BUNDLE (3 months)\n• 1 Reel per month\n• 2 Story sets per month\n• Category exclusivity for the 3 months (priced in)\nPrice: monthly fee, invoiced monthly",
      },
      { type: "heading", text: "How to price: a framework, not a market rate", id: "pricing-framework" },
      {
        type: "paragraph",
        text: "You'll see \"standard\" India rate tables online listing a price per follower tier. Treat them with caution. Pricing in India varies enormously by audience, niche, city mix, language, content quality and the rights involved, and two creators with the same follower count can reasonably charge very different amounts. Instead of copying a table, build your number step by step.",
      },
      {
        type: "list",
        items: [
          "Start from your audience value: your average views per format over a recent period, not followers.",
          "Adjust for engagement quality: saves, shares and meaningful comments signal attention brands will pay more for.",
          "Adjust for niche: finance, B2B, tech and some health categories typically command more than broad entertainment, because the audience is harder to reach.",
          "Adjust for geography and language: audience concentration in a brand's target cities or language is worth more to that brand.",
          "Add production cost: locations, props, extra talent, editing time, travel.",
          "Add rights and restrictions: usage rights, exclusivity, whitelisting.",
          "Sense-check against demand: if you're booked out, your price is probably low; if nobody replies after many good pitches, look at fit before cutting price.",
        ],
      },
      {
        type: "paragraph",
        text: "It can help to look at how brands think about the same numbers. Brand-side guides to influencer marketing rates in India and how much brands should pay influencers show what planners weigh when they read your rate card.",
        links: [
          { text: "influencer marketing rates in India", href: "/blog/influencer-marketing-cost-india" },
          { text: "how much brands should pay influencers", href: "/blog/how-much-to-pay-influencers" },
        ],
      },
      { type: "heading", text: "A rate card template", id: "template" },
      {
        type: "image",
        src: "/blog/creator-resources/rate-card-structure.svg",
        alt: "Diagram of a creator rate card with three blocks: base deliverables with what's included, add-ons such as usage rights and exclusivity, and terms such as payment and revisions",
        caption: "Separate base deliverables, add-ons and terms so each price has a clear scope.",
        width: 1200,
        height: 675,
      },
      {
        type: "template",
        label: "Rate card template (fill in your own prices)",
        text: "[YOUR NAME] — RATE CARD — valid until [date]\nRates in INR, exclusive of applicable taxes.\n\nBASE DELIVERABLES\nInstagram Reel ........................ ₹____\n  Includes: concept, script, shoot, edit, 1 revision round, posting, 30 days organic reposting with credit\nInstagram Story set (3–5 frames) ....... ₹____\nCarousel (up to __ slides) ............. ₹____\nYouTube integration (60–90 sec) ........ ₹____\nYouTube dedicated video ................ ₹____\nYouTube Short .......................... ₹____\nUGC-only video (not posted by me) ...... ₹____\n\nADD-ONS\nPaid usage (per 30 days, per platform) . ₹____\nWhitelisting / partnership ads ......... ₹____ per 30 days\nCategory exclusivity ................... quoted per brief\nExtra revision round ................... ₹____\nRaw footage ............................ ₹____\nCross-posting to another platform ...... ₹____\nRush delivery (under __ days) .......... +__%\n\nTERMS\nPayment: __% advance, balance within __ days of posting\nTimeline: draft within __ working days of receiving product/brief\nDisclosure: all paid content labelled per ASCI guidelines and platform tools",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "One price for \"a Reel\" with no definition of what's included.",
          "Giving perpetual or paid usage rights inside the base fee.",
          "Pricing from follower count alone.",
          "Never updating the card as views and demand grow.",
          "No validity date, so a brand quotes a year-old rate back to you.",
          "Forgetting taxes: say whether prices include or exclude GST if you're registered.",
        ],
      },
      { type: "heading", text: "Sharing your rate card", id: "sharing" },
      {
        type: "paragraph",
        text: "Share it after you've understood the brief, not before. Once you know the deliverables, platforms, timeline and usage the brand wants, send the relevant lines plus a quote for the specific campaign. That keeps the conversation about scope rather than a single number. When the brand pushes back, how to negotiate brand deals as a creator has example replies.",
        links: [{ text: "how to negotiate brand deals as a creator", href: "/blog/how-to-negotiate-brand-deals-as-a-creator" }],
      },
      {
        type: "paragraph",
        text: "Before setting base prices, work out what each format costs you to make with creator content production cost, then turn your numbers into quotes with the creator pricing calculator.",
        links: [
          { text: "creator content production cost", href: "/blog/creator-content-production-cost" },
          { text: "creator pricing calculator", href: "/blog/creator-pricing-calculator" },
        ],
      },
    ],
    faqs: [
      {
        question: "What is an influencer rate card?",
        answer:
          "A price list for the content formats a creator offers, such as Reels, Stories, YouTube integrations and UGC-only videos, with add-ons like usage rights, exclusivity, raw footage and extra revisions priced separately.",
      },
      {
        question: "Is there a standard influencer rate in India?",
        answer:
          "No. Rates vary with average views, engagement, niche, audience location and language, production effort, and the rights and exclusivity a brand wants. Published follower-tier tables are rough indications at best and shouldn't be treated as a market rate.",
      },
      {
        question: "Should usage rights be included in my base price?",
        answer:
          "Limited organic reposting by the brand is often included. Paid advertising use, whitelisting and long or perpetual rights should be priced as separate add-ons with a stated duration and scope.",
      },
      {
        question: "How often should I update my rate card?",
        answer:
          "Review it at least every quarter, and after any meaningful change in your average views, audience or demand. Add a validity date so older versions don't get quoted back to you.",
      },
      {
        question: "Should my rates include GST?",
        answer:
          "State clearly whether rates are inclusive or exclusive of applicable taxes. If you're GST-registered, most creators quote exclusive of GST and add it on the invoice. Check your own position with a tax professional.",
      },
    ],
  },
  {
    slug: "creator-portfolio",
    category: "Creator Resources",
    title: "Creator Portfolio: How to Build a Portfolio That Brands Want to See",
    seoTitle: "Creator Portfolio: How to Build One Brands Want to See",
    excerpt:
      "A portfolio is where a brand goes after your media kit to decide whether you can actually deliver. Here's what to include, how it differs from a media kit or rate card, and what to show if you haven't done brand work yet.",
    metaDescription:
      "How to build a creator portfolio: media kit vs portfolio vs rate card vs creator website, what to include, case studies, hosting options, and what to show with no brand collaborations.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "9 min read",
    tags: ["creator portfolio", "influencer portfolio", "content creator portfolio", "case studies", "creator website"],
    related: ["creator-media-kit", "ugc-creator-portfolio", "first-brand-collaboration-india"],
    body: [
      {
        type: "paragraph",
        text: "Your media kit gets you shortlisted. Your portfolio is what the brand opens when it's deciding between you and two other creators. It's the evidence: the actual content, the context behind it, and what happened when it went live.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator portfolio is a curated collection of your best and most brand-relevant content, organised so a brand can judge your style, range and results. Include a short introduction, your niche, 6 to 12 selected pieces grouped by format or theme, 2 or 3 short case studies, results you're allowed to share, genuine testimonials and contact details. Host it somewhere easy to open on a phone. If you have no brand work yet, use self-initiated sample content made the way you'd make it for a brand.",
      },
      { type: "heading", text: "Media kit vs portfolio vs rate card vs creator CV vs website", id: "differences" },
      {
        type: "table",
        headers: ["Document", "Purpose", "Length", "When you send it"],
        rows: [
          ["Media kit", "Summarises who you are, your audience and performance", "2 to 5 pages", "First pitch or first reply"],
          ["Portfolio", "Shows your work and results in detail", "6 to 12 pieces plus case studies", "When a brand is seriously considering you"],
          ["Rate card", "Lists prices and what each includes", "1 to 2 pages", "After you understand the brief"],
          ["Creator CV", "Lists experience, skills, clients, education, for agency or in-house roles and some B2B work", "1 to 2 pages", "Applications, corporate or B2B clients who ask for one"],
          ["Creator website", "A permanent home linking all of the above", "As needed", "In your bio and email signature"],
        ],
      },
      {
        type: "paragraph",
        text: "You don't need all five on day one. Most creators start with a media kit and a simple portfolio page, then add a rate card once brands start asking about price. The creator media kit guide covers the summary document in depth, and the creator pitch deck guide covers brand-specific presentations.",
        links: [
          { text: "creator media kit guide", href: "/blog/creator-media-kit" },
          { text: "creator pitch deck guide", href: "/blog/creator-pitch-deck" },
        ],
      },
      { type: "heading", text: "What to include", id: "what-to-include" },
      { type: "subheading", text: "Introduction and niche" },
      {
        type: "paragraph",
        text: "Two or three lines: what you make, who it's for, and what makes your angle different. \"Honest budget skincare reviews in Hindi for college students\" is more useful to a brand than \"lifestyle creator.\"",
      },
      { type: "subheading", text: "Best content, selected for brands" },
      {
        type: "paragraph",
        text: "Choose work that shows what a brand would be buying: product demos, tutorials, reviews, storytelling, not just your most viral meme. Aim for 6 to 12 pieces. Group them by format (Reels, YouTube, carousels, UGC) or by category (beauty, tech, food) so a brand can jump to what's relevant.",
      },
      { type: "subheading", text: "Case studies" },
      {
        type: "paragraph",
        text: "A case study is a short story of one piece of work: the brief, your idea, what you made and what happened. Two or three strong ones beat twenty thumbnails. Keep each to a few lines here; the creator case study guide has a fuller one-page template and advice on which results to lead with.",
        links: [{ text: "creator case study guide", href: "/blog/creator-case-study" }],
      },
      {
        type: "template",
        label: "Case study format",
        text: "BRAND / CATEGORY: [e.g. D2C skincare brand]\nBRIEF: [e.g. introduce a new sunscreen to first-time buyers]\nMY IDEA: [e.g. a 'sunscreen myths' Reel using my existing myth-busting series format]\nDELIVERED: [1 Reel + 2 Story sets]\nRESULT (shareable numbers only): [e.g. 2.1x my average Reel views, 900 saves, brand reused it as a paid ad]\nLINK: [post link]",
      },
      { type: "subheading", text: "Results" },
      {
        type: "paragraph",
        text: "Only share numbers you're allowed to share and can back up with screenshots from native insights. Compare to your own average (\"2x my usual saves\") rather than claiming industry benchmarks. If a brand gave you results, such as code redemptions, ask before publishing them.",
      },
      { type: "subheading", text: "Testimonials" },
      {
        type: "paragraph",
        text: "A line from a brand manager saying you delivered on time and needed no revisions is valuable. Only use real feedback, ask permission, and attribute it to a name and role or a company type if they'd rather stay anonymous.",
      },
      { type: "subheading", text: "Formats, audience and contact" },
      {
        type: "paragraph",
        text: "End with the formats you offer, a short audience snapshot (or a link to your media kit), and a business email. Make the next step obvious.",
      },
      { type: "heading", text: "What to include if you have no brand collaborations", id: "no-collaborations" },
      {
        type: "list",
        items: [
          "Spec content: pick products you already own and create the kind of post you'd make for that brand. Label it clearly as self-initiated, not sponsored.",
          "Before-and-after edits: show a raw clip and your finished edit to demonstrate production skill.",
          "Organic wins: posts where your audience saved, shared or asked where to buy something.",
          "Local work: a cafe, gym or boutique you've featured, even unpaid, with their permission to show it.",
          "Writing and scripts: for educational niches, a strong script or carousel shows your thinking.",
        ],
      },
      {
        type: "paragraph",
        text: "Never tag or present spec content as if the brand commissioned it. Paid or gifted content needs disclosure, and presenting unpaid work as a partnership misleads both your audience and future brands. For the full path from zero to a first deal, read how to get your first brand collaboration in India.",
        links: [{ text: "how to get your first brand collaboration in India", href: "/blog/first-brand-collaboration-india" }],
      },
      { type: "heading", text: "Where to host your portfolio", id: "hosting" },
      {
        type: "table",
        headers: ["Option", "Good for", "Watch out for"],
        rows: [
          ["Personal website", "Long-term professional presence, search visibility for your name", "Needs upkeep; keep it fast on mobile"],
          ["Notion or Google Slides link", "Quick to build and update", "Check sharing permissions before every pitch"],
          ["Link-in-bio page", "Pointing your audience and brands to the same place", "Space is limited; link out to the full portfolio"],
          ["PDF", "Formal pitches, agencies that archive files", "Goes out of date; keep file size small"],
          ["Instagram highlights / YouTube playlist", "Showing work natively", "Brands may not dig through them; use as a supplement"],
        ],
      },
      {
        type: "paragraph",
        text: "If you're setting up a site from scratch, how to build a creator website covers domains, platforms and the core pages.",
        links: [{ text: "how to build a creator website", href: "/blog/how-to-build-a-creator-website" }],
      },
      { type: "heading", text: "Portfolio mistakes brands notice", id: "mistakes" },
      {
        type: "list",
        items: [
          "Too much: 40 unsorted links instead of 8 curated ones.",
          "Broken or private links, or Google Drive files that request access.",
          "No context: a Reel with no explanation of the brief or result.",
          "Claimed results with no way to verify them.",
          "Using another creator's footage or music you don't have rights to.",
          "No contact details on the portfolio itself.",
        ],
      },
      { type: "heading", text: "UGC creators: a note", id: "ugc-note" },
      {
        type: "paragraph",
        text: "If you mainly make content for brands to post rather than posting on your own account, your portfolio needs to emphasise hooks, variations and ad-ready edits rather than audience numbers. We cover that in detail in how to build a UGC creator portfolio.",
        links: [{ text: "how to build a UGC creator portfolio", href: "/blog/ugc-creator-portfolio" }],
      },
      {
        type: "paragraph",
        text: "Your Instagram profile works as a portfolio too; see Instagram creator portfolio for pinned posts, highlights and a Creator Marketplace portfolio.",
        links: [{ text: "Instagram creator portfolio", href: "/blog/instagram-creator-portfolio" }],
      },
    ],
    faqs: [
      {
        question: "What is the difference between a media kit and a portfolio?",
        answer:
          "A media kit is a short summary of your audience, performance and services, built for a quick decision. A portfolio is a curated collection of your work with context and results, used when a brand is seriously evaluating you.",
      },
      {
        question: "How many pieces should a creator portfolio have?",
        answer: "Six to twelve curated pieces plus two or three short case studies is enough for most creators. Curate for relevance rather than volume.",
      },
      {
        question: "What can I put in my portfolio if I haven't worked with brands yet?",
        answer:
          "Self-initiated spec content featuring products you already use (clearly labelled as unsponsored), before-and-after edits, organic posts that drove saves or questions, and work for local businesses with their permission.",
      },
      {
        question: "Where should I host my creator portfolio?",
        answer:
          "A personal website or a simple Notion or Slides page works well, linked from your bio and media kit. Keep a PDF version for formal pitches, and check links and permissions before sending.",
      },
    ],
  },
];
