import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_CLUSTER_PUBLISHED, CREATOR_FACTS_REVIEWED, SOURCES } from "@/content/creator-resources/shared";

/** Contracts & rights (licensing, whitelisting) and analytics (case studies, engagement vs reach). */
export const rightsAndAnalyticsPosts: BlogPost[] = [
  {
    slug: "creator-content-licensing",
    category: "Creator Resources",
    title: "Creator Content Licensing: How to License Your Content to Brands",
    seoTitle: "Creator Content Licensing: How to License Content to Brands",
    excerpt:
      "Licensing turns content you've already made into income. Here's the difference between creating and licensing, what a licence should define, and how to structure licensing deals without giving away more than you mean to.",
    metaDescription:
      "Creator content licensing explained: ownership vs licensing, organic, paid media, website and e-commerce use, duration, territory, platforms, editing, derivative works and exclusivity, with a licensing checklist.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "11 min read",
    tags: ["content licensing", "creator licensing", "license content to brands", "UGC licensing", "content rights", "creator content licensing agreement", "licence agreement template creators"],
    related: ["creator-usage-rights", "creator-whitelisting", "creator-revenue-streams-from-brand-content"],
    body: [
      {
        type: "paragraph",
        text: "Most creators think of income as \"make something, get paid once.\" Licensing breaks that link. A brand can pay to use a video you made last year, extend the use of a sponsored Reel for another six months, or put your footage on its product pages. The content already exists; the licence is the product.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Content licensing means giving a brand permission to use content you own, under defined conditions, in exchange for a fee, while you usually keep ownership. A licence should define the content, the purpose (organic social, paid media, website, e-commerce, offline), duration, territory, platforms, editing and derivative-work rights, exclusivity and fee. It's separate from the fee to create content: creating is the work; licensing is the permission to use it.",
      },
      { type: "heading", text: "Creating content vs licensing content", id: "creating-vs-licensing" },
      {
        type: "table",
        headers: ["", "Creating content", "Licensing content"],
        rows: [
          ["What the brand pays for", "Your time, skill and production", "Permission to use content"],
          ["When", "Before the content exists", "Content may already exist"],
          ["Priced by", "Deliverables, production, your audience (if posted)", "Purpose, duration, territory, media, exclusivity"],
          ["Ends when", "Content is delivered", "The licence period expires"],
          ["Renewable?", "No, you'd create new content", "Yes, extensions are new income"],
        ],
      },
      {
        type: "paragraph",
        text: "A sponsored deal often includes both: a creation fee and a limited licence. Creator usage rights covers how rights are scoped inside a sponsored deal. This guide covers licensing as a product in its own right, including content brands didn't commission.",
        links: [{ text: "Creator usage rights", href: "/blog/creator-usage-rights" }],
      },
      { type: "heading", text: "Ownership: start here", id: "ownership" },
      {
        type: "list",
        items: [
          "You generally own content you create, unless you've signed an agreement assigning ownership (copyright) to someone else.",
          "Check past brand contracts: some assign ownership, some grant perpetual licences, which limits what you can license again.",
          "Music, footage, fonts and images inside your content may belong to others. Platform-licensed music often can't be used in brand ads.",
          "People appearing in your content may need to consent to commercial use.",
        ],
      },
      { type: "heading", text: "What a licence should define", id: "licence-terms" },
      {
        type: "table",
        headers: ["Term", "Options", "Why it matters"],
        rows: [
          ["Content", "Specific video(s), photos, clips, with links or file names", "Avoids \"all your content\" ambiguity"],
          ["Purpose / media", "Organic social, paid ads, website, e-commerce listings, email, in-store, print, TV", "Paid and offline use are far more valuable"],
          ["Platforms", "Instagram, Facebook, YouTube, marketplaces, brand app", "Each platform adds reach"],
          ["Duration", "30, 90, 180 days, 1 year, perpetual", "The main pricing lever"],
          ["Territory", "India, specific countries, worldwide", "Wider territory, more value"],
          ["Editing", "None, trims and subtitles, re-edits", "Protects how you're presented"],
          ["Derivative works", "New edits, compilations, AI variations of voice or likeness", "Protects your identity"],
          ["Exclusivity", "Non-exclusive, or exclusive to this brand/category", "Exclusive licences stop you licensing to others"],
          ["Credit", "Handle credited or not", "Visibility and audience trust"],
          ["Fee and renewal", "One-off, per period, renewal price", "Makes extensions easy"],
        ],
      },
      {
        type: "image",
        src: "/blog/creator-resources/licensing-vs-whitelisting.svg",
        alt: "Diagram comparing content licensing (brand uses your content from its own accounts and channels), paid amplification (brand pays to boost content) and whitelisting (brand runs ads through your handle)",
        caption: "Licensing, paid amplification and whitelisting are related but not the same. Each needs its own terms.",
        width: 1200,
        height: 675,
      },
      { type: "heading", text: "Common licensing scenarios", id: "scenarios" },
      {
        type: "list",
        items: [
          "Extension: a brand wants to keep running your sponsored Reel as an ad after the original 60 days.",
          "Retroactive licence: a brand spots an old organic review you made and wants to use it on its website.",
          "UGC licence: a brand commissions UGC for its own ads and needs paid usage for three months.",
          "Stock-style licence: a travel brand wants your destination footage for its campaign.",
          "Media licence: a publisher or channel wants to feature your viral clip.",
        ],
      },
      { type: "heading", text: "How to price a licence", id: "pricing" },
      {
        type: "paragraph",
        text: "There's no universal licensing rate. Instead, think about what the licence is worth to the brand and what it costs you. The factors that raise value are paid media, longer duration, wider territory, more platforms, exclusivity and broader editing rights. Many creators price licences per period (for example per 30 or 90 days) with a clear renewal price, so extensions are simple.",
      },
      {
        type: "template",
        label: "Licensing quote structure (fill in your own prices)",
        text: "Content: [Reel title, date, link]\nPurpose: Paid social ads (Meta platforms)\nTerritory: India\nDuration: 90 days from first ad date\nEditing: Trims, subtitles, aspect-ratio changes. No re-edits with other footage. No AI changes to face or voice.\nExclusivity: Non-exclusive\nCredit: @handle credited where the ad format allows\n\nFee: ₹____ for 90 days\nRenewal: ₹____ per additional 30 days\nAfter expiry: No new ads; organic posts already published may remain",
      },
      { type: "heading", text: "Perpetual and buyout licences", id: "perpetual" },
      {
        type: "paragraph",
        text: "Some brands ask for perpetual licences or full buyouts. That can be reasonable for certain uses (for example archival organic posts, or product-page videos) if the fee reflects it. Be more cautious with perpetual paid use and derivative rights, which can mean your content or likeness in ads indefinitely, including after you've partnered with a competitor.",
      },
      {
        type: "paragraph",
        text: "You can only license what you own. For copyright basics in India, see creator copyright.",
        links: [{ text: "creator copyright", href: "/blog/creator-copyright" }],
      },
      { type: "heading", text: "A licence agreement outline", id: "licence-outline" },
      {
        type: "template",
        label: "Content licence outline (have a lawyer adapt it)",
        text: "1. Parties\n2. Licensed content: [links/files], created on [dates]\n3. Ownership: creator retains copyright; this is a licence, not a transfer\n4. Permitted use: [organic brand channels / paid ads / website / print]\n5. Platforms and territory: [e.g. Instagram and YouTube ads, India]\n6. Duration: [start] to [end]; content removed from ads after expiry\n7. Edits allowed: [cropping, captions, cut-downs]; no changes to meaning; no AI alteration of likeness\n8. Fee and payment terms; renewal pricing\n9. Credit or handle tag, if required\n10. Termination and what happens to content in use",
      },
      {
        type: "paragraph",
        text: "Usage rights inside a new brand deal are covered in creator usage rights; ownership in creator intellectual property.",
        links: [
          { text: "creator usage rights", href: "/blog/creator-usage-rights" },
          { text: "creator intellectual property", href: "/blog/creator-intellectual-property" },
        ],
      },
      { type: "heading", text: "Licensing checklist", id: "checklist" },
      {
        type: "template",
        label: "Before you license any content",
        text: "☐ I own it (no past assignment or conflicting exclusive licence)\n☐ Music, footage and people in it are cleared for commercial use\n☐ Content identified precisely\n☐ Purpose and media listed\n☐ Platforms listed\n☐ Duration and start date\n☐ Territory\n☐ Editing limits; derivative and AI use addressed\n☐ Exclusive or non-exclusive\n☐ Credit\n☐ Fee, renewal price, payment terms\n☐ What happens at expiry\n☐ Everything in writing",
      },
      {
        type: "paragraph",
        text: "If the brand wants to run ads through your handle rather than its own, that's whitelisting, which needs extra terms; see creator whitelisting. For turning licences into a regular income line, see how to turn brand content into multiple revenue streams.",
        links: [
          { text: "creator whitelisting", href: "/blog/creator-whitelisting" },
          { text: "how to turn brand content into multiple revenue streams", href: "/blog/creator-revenue-streams-from-brand-content" },
        ],
      },
      {
        type: "paragraph",
        text: "Brands read about the same topic from their side in influencer usage rights and how to repurpose influencer content for paid ads.",
        links: [
          { text: "influencer usage rights", href: "/blog/influencer-usage-rights" },
          { text: "how to repurpose influencer content for paid ads", href: "/blog/repurpose-influencer-content" },
        ],
      },
    ],
    faqs: [
      {
        question: "What is content licensing for creators?",
        answer:
          "Giving a brand or publisher permission to use content you own, under defined terms such as purpose, duration, territory and editing rights, in exchange for a fee, usually while you keep ownership.",
      },
      {
        question: "What is the difference between usage rights and licensing?",
        answer:
          "Usage rights usually describe the rights included in a sponsored deal. Licensing is the broader practice of granting permission to use content, including content a brand didn't commission, often as a separate paid product.",
      },
      {
        question: "How much should I charge to license my content?",
        answer:
          "There's no universal rate. Price by purpose, duration, territory, platforms, editing rights and exclusivity, and set a renewal price per period.",
      },
      {
        question: "Can I license content I made for a previous brand?",
        answer:
          "Only if your earlier agreement allows it. Check for ownership assignments or exclusive licences, and avoid licensing to direct competitors if restrictions apply.",
      },
    ],
  },
  {
    slug: "creator-whitelisting",
    category: "Creator Resources",
    title: "Creator Whitelisting: Complete Guide to Allowing Brands to Run Ads With Your Content",
    seoTitle: "Creator Whitelisting: Letting Brands Run Ads With Your Content",
    excerpt:
      "Whitelisting lets a brand run ads that appear to come from you. Here's how it differs from licensing and paid amplification, how platform permissions work, what to charge for, and the risks to manage.",
    metaDescription:
      "Creator whitelisting explained: paid amplification vs licensing vs creator-authorised ads, Meta partnership ads permissions, duration, territory, usage, pricing considerations, risks and how to revoke access.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "11 min read",
    tags: ["creator whitelisting", "influencer whitelisting", "partnership ads", "paid amplification", "creator licensing"],
    related: ["creator-content-licensing", "creator-usage-rights", "influencer-rate-card-india"],
    body: [
      {
        type: "paragraph",
        text: "When a brand runs your content as an ad from its own account, viewers see a brand ad. When it runs the same content as an ad from your handle, viewers see a recommendation from you. That second version is whitelisting, and it uses something more valuable than your footage: your name and credibility.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Creator whitelisting (also called creator licensing, creator-authorised ads or, on Meta, partnership ads) means giving a brand permission to run paid ads that show your identity, usually your handle and profile, alongside or instead of the brand's. It's different from content licensing (brand uses your content from its own accounts) and paid amplification (brand pays to boost content). Agree duration, platforms, territory, budget visibility, ad copy approval and how access ends, and price it separately from your content fee.",
      },
      { type: "heading", text: "Licensing vs paid amplification vs whitelisting", id: "differences" },
      {
        type: "table",
        headers: ["", "Content licensing", "Paid amplification", "Whitelisting / creator-authorised ads"],
        rows: [
          ["What happens", "Brand uses your content on its own channels", "Paid budget boosts content to more people", "Ads run showing your handle and identity"],
          ["Whose name viewers see", "The brand's", "Depends on setup", "Yours (often with the brand's)"],
          ["Account access", "None needed", "Varies", "Platform permission from your account"],
          ["What you're granting", "Right to use content", "Right to promote content", "Right to use content and your identity in ads"],
          ["Main risks", "Scope and duration", "Content seen far beyond your audience", "Ad copy, targeting and comments attributed to you"],
        ],
      },
      { type: "heading", text: "Platform terminology", id: "platforms" },
      {
        type: "list",
        items: [
          "Meta (Instagram and Facebook): partnership ads, which show both the creator and brand. Creators grant permissions at the account level or for specific content, and can revoke them. See Instagram's help on partnership ad permissions.",
          "YouTube: brands can promote creator content through YouTube's creator partnership and advertising tools; YouTube has also announced ways for brands to boost creators' affiliate content. Check the current YouTube and Google Ads documentation for what's live in India.",
          "Other platforms use their own terms and tools. TikTok's Spark Ads are often mentioned in global guides, but TikTok isn't available in India.",
        ],
      },
      {
        type: "paragraph",
        text: "Terminology and permission settings change often. Check the official documentation before agreeing to a setup: Instagram's partnership ad permissions page is the place to start for Meta.",
        links: [{ text: "Instagram's partnership ad permissions page", href: SOURCES.instagramPartnershipAdPermissions }],
      },
      { type: "heading", text: "How authorisation usually works", id: "authorisation" },
      {
        type: "list",
        items: [
          "Use the platform's built-in permission tools. Never share your password or login with a brand or agency.",
          "Choose content-level permission (specific posts) where possible, rather than open account-level access.",
          "Note the date you grant access and set a reminder for the agreed end date.",
          "Revoke access in your settings when the agreed period ends, even if you trust the brand.",
        ],
      },
      { type: "heading", text: "What to agree before saying yes", id: "terms" },
      {
        type: "template",
        label: "Whitelisting terms checklist",
        text: "☐ Platforms (e.g. Meta partnership ads only)\n☐ Content: specific posts, or new ad variations?\n☐ Duration and start date; revocation date\n☐ Territory (e.g. India only)\n☐ Ad copy and headline: do I approve them?\n☐ Targeting: any audiences or placements excluded?\n☐ Budget or spend cap: will I be told the approximate spend?\n☐ Comments: who moderates comments on ads showing my name?\n☐ New edits: can the brand create new cuts? AI alterations excluded?\n☐ Exclusivity during the whitelisting period\n☐ Fee and renewal price\n☐ Performance data shared with me",
      },
      { type: "heading", text: "Pricing considerations", id: "pricing" },
      {
        type: "paragraph",
        text: "There's no universal whitelisting rate. Whitelisting is generally worth more than content licensing because it uses your identity as well as your content. Factors that affect price include duration, number of platforms and posts, territory, whether the brand can create new ad variations, expected spend (bigger spend means far more people see \"you\" in an ad), exclusivity and how much control you keep over copy and targeting. Most creators quote it per period with a renewal price, as a separate line on the rate card.",
      },
      {
        type: "paragraph",
        text: "See the influencer rate card guide for where it fits among your add-ons.",
        links: [{ text: "influencer rate card guide", href: "/blog/influencer-rate-card-india" }],
      },
      { type: "heading", text: "Risks and how to manage them", id: "risks" },
      {
        type: "table",
        headers: ["Risk", "How to manage it"],
        rows: [
          ["Ad copy you didn't write appears under your name", "Approve headlines and primary text"],
          ["Ads reach audiences you'd rather avoid", "Agree targeting exclusions; ask for placement details"],
          ["Negative comments on ads attributed to you", "Agree who moderates; keep the right to hide abusive comments"],
          ["Ads keep running after the agreed period", "Revoke permissions on the end date; check Meta's Ad Library"],
          ["Audience fatigue from seeing \"your\" ads repeatedly", "Limit duration and frequency; avoid overlapping with your organic posts"],
          ["Conflicts with future partners", "Match exclusivity and whitelisting periods; don't whitelist for competitors at the same time"],
          ["Account security", "Use platform permissions only; never share passwords"],
        ],
      },
      { type: "heading", text: "Revocation", id: "revocation" },
      {
        type: "paragraph",
        text: "Put the end date in the agreement, revoke access in your account settings on that date, and confirm by email. If ads continue after expiry, send a polite note with screenshots and offer a paid extension. Most overruns are oversights; a clear process turns them into renewals rather than disputes.",
      },
      {
        type: "paragraph",
        text: "Whitelisting sits alongside the other rights you grant. See creator usage rights, creator content licensing and the influencer contract guide for creators.",
        links: [
          { text: "creator usage rights", href: "/blog/creator-usage-rights" },
          { text: "creator content licensing", href: "/blog/creator-content-licensing" },
          { text: "influencer contract guide for creators", href: "/blog/influencer-contract-guide-for-creators" },
        ],
      },
      {
        type: "paragraph",
        text: "From the brand side, see Instagram partnership ads and UGC whitelisting and creator licensing.",
        links: [
          { text: "Instagram partnership ads", href: "/blog/instagram-partnership-ads" },
          { text: "UGC whitelisting and creator licensing", href: "/blog/ugc-whitelisting-creator-licensing" },
        ],
      },
    ],
    faqs: [
      {
        question: "What is creator whitelisting?",
        answer:
          "Giving a brand permission to run paid ads that show the creator's identity, such as their handle, so the ad appears to come from or with the creator. On Meta platforms this is done through partnership ads.",
      },
      {
        question: "Is whitelisting the same as content licensing?",
        answer:
          "No. Content licensing lets a brand use your content from its own accounts. Whitelisting lets it run ads that use your identity as well, which usually needs platform permissions and extra terms.",
      },
      {
        question: "Do I need to share my password for whitelisting?",
        answer:
          "No. Use the platform's permission tools, such as Meta's partnership ad permissions. Never share your password or login with a brand or agency.",
      },
      {
        question: "How much should I charge for whitelisting?",
        answer:
          "There's no universal rate. Price by duration, platforms, territory, expected spend, creative control and exclusivity, as a separate line from your content fee.",
      },
    ],
  },
  {
    slug: "creator-case-study",
    category: "Creator Resources",
    title: "Creator Case Study: How to Turn a Brand Collaboration Into Proof of Your Value",
    seoTitle: "Creator Case Study: Turn a Brand Collaboration Into Proof",
    excerpt:
      "A good case study turns one campaign into proof for the next ten. Here's what to include, how to go beyond vanity metrics, and a template you can use after every brand deal.",
    metaDescription:
      "How to write a creator case study: campaign objective, deliverables, audience, reach, views, engagement, clicks, conversions where legitimately available, content examples and lessons, with a template.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    updatedAt: "2026-09-29",
    readingTime: "11 min read",
    tags: ["creator case study", "campaign case study", "influencer case study", "campaign results", "creator portfolio", "creator testimonials", "social proof creators"],
    related: ["creator-portfolio", "creator-analytics-for-brand-deals", "creator-pitch-deck"],
    body: [
      {
        type: "paragraph",
        text: "\"I've worked with 30 brands\" tells a planner very little. \"For a sunscreen launch, my Reel reached 2.3 times my usual audience and the brand reused it as its best-performing ad\" tells them exactly what you can do. That second sentence is a case study.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator case study is a short, evidence-based summary of one campaign: the brand's objective, what you made, who saw it, what happened (reach, views, engagement, clicks and, where you legitimately have them, conversions), a link to the content and what you learned. Compare results against your own averages, lead with the metric that matches the objective, only use numbers you can back up, and get permission before sharing brand data.",
      },
      { type: "heading", text: "Why case studies beat a list of logos", id: "why" },
      {
        type: "list",
        items: [
          "They show you understand business objectives, not just content.",
          "They give planners numbers they can reuse in their own internal pitch.",
          "They prove reliability: brief followed, delivered on time, results reported.",
          "They make your pricing easier to justify.",
        ],
      },
      { type: "heading", text: "What to include", id: "what-to-include" },
      {
        type: "table",
        headers: ["Section", "What to write", "Example (illustrative)"],
        rows: [
          ["Brand and category", "Name (with permission) or category", "D2C sunscreen brand"],
          ["Objective", "What the brand wanted", "Launch awareness among first-time buyers"],
          ["Deliverables", "What you made", "1 Collab Reel, 2 Story sets"],
          ["Audience", "Who saw it", "74% aged 18–27; top cities Lucknow, Jaipur, Delhi"],
          ["Reach and views", "Unique reach, views", "Reach 2.3x my 90-day Reel average"],
          ["Engagement", "Saves, shares, comments, with context", "Saves 3.1x average; 140 product questions in comments"],
          ["Clicks", "Link taps, profile visits", "1,900 Story link taps"],
          ["Conversions", "Only if the brand shared them or you tracked them", "Code used 420 times (shared by brand, with permission)"],
          ["Content", "Link or thumbnail", "[link]"],
          ["Lessons", "What worked and what you'd change", "Myth-busting hook outperformed unboxing opener"],
        ],
      },
      { type: "heading", text: "Avoid leaning on vanity metrics", id: "vanity-metrics" },
      {
        type: "paragraph",
        text: "Likes and follower gains are easy to show and rarely what a brand is buying. Choose the headline metric that matches the objective:",
      },
      {
        type: "table",
        headers: ["Objective", "Lead with", "Supporting"],
        rows: [
          ["Awareness / launch", "Reach, views, audience fit", "Shares, completion"],
          ["Consideration / education", "Saves, watch time, completion", "Product questions in comments"],
          ["Traffic", "Link taps, profile visits", "Click-through from Stories"],
          ["Sales", "Code redemptions or tracked sales (if shared)", "Link taps"],
          ["Content for ads", "Brand's ad performance (if shared), reuse of your content", "Hook retention"],
        ],
      },
      {
        type: "paragraph",
        text: "Engagement rate vs reach explains how to pick between these, and the engagement rate guide covers formulas.",
        links: [
          { text: "Engagement rate vs reach", href: "/blog/engagement-rate-vs-reach-for-creators" },
          { text: "engagement rate guide", href: "/blog/influencer-engagement-rate" },
        ],
      },
      { type: "heading", text: "Use your own baseline", id: "baseline" },
      {
        type: "paragraph",
        text: "\"2.3x my average reach\" is more honest and more useful than comparing to industry benchmarks that use different methods. Calculate your average for the same format over a recent period (for example the last 90 days of Reels) and compare the campaign against it.",
      },
      { type: "heading", text: "Honesty rules", id: "honesty" },
      {
        type: "list",
        items: [
          "Only use numbers from native insights or data the brand shared with permission.",
          "Keep screenshots as evidence.",
          "Don't claim sales you can't attribute.",
          "If paid ads boosted the content, say so; don't present boosted reach as organic.",
          "Never fabricate or round results upward.",
          "If a campaign underperformed, you can still write a case study about what you learned, or leave it out.",
        ],
      },
      { type: "heading", text: "Case study template", id: "template" },
      {
        type: "template",
        label: "One-page creator case study",
        text: "[BRAND / CATEGORY] × [@handle] — [Campaign name, month year]\n\nOBJECTIVE\n[What the brand wanted, in one sentence]\n\nWHAT I MADE\n[Deliverables, formats, platforms]\n[Concept in one line]\n\nWHO SAW IT (native insights, [date range])\nReach: ___ ( __x my 90-day average)\nViews: ___\nAudience: [age, top cities, language]\n\nWHAT HAPPENED\nSaves ___ · Shares ___ · Comments ___ (themes: ___)\nLink taps ___ · Profile visits ___\nConversions: ___ (source: brand-shared / tracked link) — only if available\n\nCONTENT\n[link]\n\nWHAT I LEARNED\n[1–2 honest observations]\n\nBRAND FEEDBACK (with permission)\n\"[short quote]\" — [name, role]",
      },
      { type: "heading", text: "From brand collaboration to case study: step by step", id: "collab-to-case-study" },
      {
        type: "list",
        items: [
          "1. Collect data at the report date (usually 7 days after posting) and keep dated screenshots.",
          "2. Send the campaign report to the brand first; see creator campaign reporting.",
          "3. Ask permission to share the brand's name and any data they gave you.",
          "4. Draft the case study with the template below; lead with the objective and the metric that matched it.",
          "5. Get the brand contact to confirm facts (optional, but it builds trust and can yield a quote).",
          "6. Publish in your portfolio, pitch deck and website; update your media kit's past collaborations.",
        ],
      },
      {
        type: "paragraph",
        text: "The report comes first: creator campaign reporting explains what to send brands after a collaboration.",
        links: [{ text: "creator campaign reporting", href: "/blog/creator-campaign-reporting" }],
      },
      { type: "heading", text: "Permissions and confidentiality", id: "permissions" },
      {
        type: "list",
        items: [
          "Check your contract's confidentiality clause before naming the brand or sharing figures.",
          "If you can't name the brand, describe it (\"a D2C skincare brand\") and share only your own native metrics.",
          "Never publish a brand's sales, code or conversion data without written permission.",
          "Don't publish content still under embargo or before the campaign ends.",
        ],
      },
      { type: "heading", text: "Where to use case studies", id: "where" },
      {
        type: "list",
        items: [
          "Your portfolio: two or three strong ones near the top.",
          "Pitch decks: one case study from the same category as the brand.",
          "Proposals: a one-line result to justify pricing.",
          "Renewal conversations: evidence for a longer partnership.",
        ],
      },
      {
        type: "paragraph",
        text: "See creator portfolio, creator pitch deck and creator analytics for brand deals.",
        links: [
          { text: "creator portfolio", href: "/blog/creator-portfolio" },
          { text: "creator pitch deck", href: "/blog/creator-pitch-deck" },
          { text: "creator analytics for brand deals", href: "/blog/creator-analytics-for-brand-deals" },
        ],
      },
      { type: "heading", text: "Testimonials: collecting and using them honestly", id: "testimonials" },
      {
        type: "paragraph",
        text: "Testimonials complement case studies: a case study shows what happened; a testimonial shows how it felt to work with you. Ask at the moment of results, make it easy with two or three questions, get written permission to publish with the client's name or anonymised, never edit the meaning, and never invent or buy testimonials. In India, fake reviews and testimonials can also breach consumer protection rules.",
      },
      {
        type: "template",
        label: "Testimonial request",
        text: "\"Would you share a few lines about working together? It helps others decide.\n1. What was the situation before?\n2. What changed?\n3. What would you tell someone considering this?\nCan I publish it with your name and role, or would you prefer it anonymised?\"",
      },
      {
        type: "paragraph",
        text: "For service businesses, place testimonials on your offer pages and proposals; see creator services.",
        links: [
          { text: "creator services", href: "/blog/creator-services" },
        ],
      },
    ],
    faqs: [
      {
        question: "What should a creator case study include?",
        answer:
          "The campaign objective, deliverables, audience, reach and views, engagement, clicks, conversions where legitimately available, a link to the content and lessons learned.",
      },
      {
        question: "Can I share a brand's sales data in my case study?",
        answer: "Only with the brand's permission. Otherwise, share your own native metrics and describe outcomes in general terms.",
      },
      {
        question: "What if my campaign didn't perform well?",
        answer:
          "You can leave it out, or write an honest case study focused on what you learned. Never inflate or fabricate results.",
      },
    ],
  },
  {
    slug: "engagement-rate-vs-reach-for-creators",
    category: "Creator Resources",
    title: "Creator Engagement Rate vs Reach: What Should You Show Brands?",
    seoTitle: "Engagement Rate vs Reach: What Should Creators Show Brands?",
    excerpt:
      "Reach says how many people saw it. Engagement says what they did. Here's how the main metrics differ, and which to lead with depending on the platform and what the brand is trying to achieve.",
    metaDescription:
      "Engagement rate vs reach for creators: definitions of reach, impressions, views, average views, saves, shares, comments and clicks, labelled engagement formulas, and which metrics to show brands by platform and campaign objective.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "10 min read",
    tags: ["engagement rate vs reach", "reach vs impressions", "creator metrics", "which metrics to show brands", "average views"],
    related: ["influencer-engagement-rate", "creator-analytics-for-brand-deals", "creator-case-study"],
    body: [
      {
        type: "paragraph",
        text: "Creators often ask which number matters more: engagement rate or reach. The answer depends on what the brand is trying to do. A launch campaign needs people to see it. An education campaign needs people to pay attention. A sales campaign needs people to act. Each points to different metrics.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Reach is how many unique accounts saw your content; engagement rate is the share of an audience (followers, reach or views, depending on the formula) that interacted with it. Neither is universally better. Lead with reach and average views for awareness campaigns, saves, shares and watch time for consideration, and link clicks or tracked conversions for traffic and sales, and always label which formula and date range you used.",
      },
      { type: "heading", text: "The metrics, defined", id: "definitions" },
      {
        type: "table",
        headers: ["Metric", "What it measures", "Note"],
        rows: [
          ["Reach / accounts reached", "Unique accounts that saw content", "Counts people, not views"],
          ["Impressions", "Times content was displayed", "Instagram replaced impressions with Views in 2025"],
          ["Views", "Times content was viewed (definitions vary)", "Includes replays on some platforms"],
          ["Average views", "Typical views per post over a period", "Best single number for pricing"],
          ["Saves", "People keeping content to return to", "Strong intent signal"],
          ["Shares", "People sending content to others", "Signals word of mouth"],
          ["Comments", "Conversation and questions", "Read quality, not just count"],
          ["Clicks / link taps", "People leaving to visit a link", "Closest organic signal to action"],
          ["Watch time / retention", "How long people watched", "Especially important on YouTube"],
          ["Engagement rate", "Interactions ÷ an audience number", "Depends entirely on the denominator"],
        ],
      },
      { type: "heading", text: "Engagement rate: label your method", id: "er-methods" },
      {
        type: "paragraph",
        text: "No engagement rate formula is universally correct. Each answers a slightly different question. Say which one you used.",
      },
      {
        type: "table",
        headers: ["Method", "Formula", "Answers"],
        rows: [
          ["By followers", "Interactions ÷ followers × 100", "How engaged is my follower base overall?"],
          ["By reach", "Interactions ÷ accounts reached × 100", "How did people who saw it respond?"],
          ["By views", "Interactions ÷ views × 100", "How did viewers respond (useful for Reels and Shorts)?"],
        ],
      },
      {
        type: "paragraph",
        text: "For worked examples and how to average across posts, see how to calculate influencer engagement rate.",
        links: [{ text: "how to calculate influencer engagement rate", href: "/blog/influencer-engagement-rate" }],
      },
      { type: "heading", text: "Why reach and engagement often move in opposite directions", id: "opposite" },
      {
        type: "paragraph",
        text: "When a Reel is pushed widely to non-followers, reach goes up but engagement rate by reach often goes down, because strangers engage less than fans. That's not a bad result: it means more new people saw you. Showing only engagement rate would hide that; showing only reach would hide how your core audience responded. Show both, with context.",
      },
      {
        type: "template",
        label: "Hypothetical example",
        text: "Reel A (reached mostly followers): reach 18,000 · interactions 1,440 · ER by reach 8.0%\nReel B (pushed to non-followers): reach 95,000 · interactions 3,800 · ER by reach 4.0%\n\nFor an awareness brief, Reel B is the stronger proof. For a community or consideration brief, Reel A's depth of response may matter more.",
      },
      { type: "heading", text: "What to show by campaign objective", id: "by-objective" },
      {
        type: "table",
        headers: ["Brand objective", "Lead metric", "Supporting metrics"],
        rows: [
          ["Awareness / launch", "Average views, reach", "Audience fit, shares"],
          ["Consideration / education", "Saves, watch time, completion", "Comments with product questions"],
          ["Community / trust", "Engagement rate (stated method), comment quality", "Replies, returning viewers"],
          ["Traffic", "Link taps, profile visits", "Story views per frame"],
          ["Sales", "Code redemptions or tracked conversions (if available)", "Link taps, saves"],
          ["Content for ads", "Hook retention, past ad reuse", "Completion"],
        ],
      },
      { type: "heading", text: "What to show by platform", id: "by-platform" },
      {
        type: "list",
        items: [
          "Instagram: average Reel views and reach, saves and shares, Story link taps, audience demographics.",
          "YouTube long-form: average views in the first 30 days, average view duration, retention around sponsored segments, audience geography.",
          "YouTube Shorts: views, engaged views where available, subscribers gained.",
          "LinkedIn: impressions, members reached, audience job titles and industries, comment quality.",
        ],
      },
      {
        type: "paragraph",
        text: "Don't combine metrics across platforms into one total without explaining it; each platform counts differently. More on this in creator analytics for brand deals.",
        links: [{ text: "creator analytics for brand deals", href: "/blog/creator-analytics-for-brand-deals" }],
      },
      { type: "heading", text: "A simple way to present both", id: "present" },
      {
        type: "template",
        label: "Metrics block for a media kit or pitch",
        text: "Instagram Reels, last 90 days (native insights, as of [date])\nAverage views: ___ · Average reach: ___\nEngagement rate: ___% (interactions ÷ reach)\nAverage saves: ___ · Average shares: ___\nAudience: ___% aged ___ · top cities ___ · language ___",
      },
      {
        type: "paragraph",
        text: "After a campaign, turn these numbers into a case study. See creator case study.",
        links: [{ text: "creator case study", href: "/blog/creator-case-study" }],
      },
    ],
    faqs: [
      {
        question: "Is engagement rate or reach more important to brands?",
        answer:
          "It depends on the objective. Awareness campaigns focus on reach and views; consideration campaigns on saves and watch time; sales campaigns on clicks and conversions. Most brands want to see both reach and engagement, with context.",
      },
      {
        question: "What's the difference between reach and impressions?",
        answer:
          "Reach counts unique accounts; impressions count total displays, including repeats. Instagram replaced impressions with a Views metric in 2025, so use the metric names your platform currently reports.",
      },
      {
        question: "Why does my engagement rate drop when a Reel goes viral?",
        answer:
          "Viral reach brings in non-followers, who engage less than your core audience. Reach rises while engagement rate by reach often falls. Show both to give brands the full picture.",
      },
    ],
  },
];
