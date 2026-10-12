import type { BlogPost } from "@/content/blog";
import { UK_AUTHOR, UK_HUB, UK_LANGUAGE, UK_PUBLISHED, UK_REVIEW_DATE_TEXT, UK_REVIEWED, UK_SRC } from "@/content/uk-guides/shared";

/**
 * UK cluster core (1860–1909): the pillar (1870, with 1871, 1872, 1895, 1900, 1908 and 1909), advertising rules
 * (1860, with 1861–1865, 1868, 1869, 1892 and 1899), choosing an agency (1890, with 1891) and costs (1893, with 1894).
 * Buyer guides only. See docs/uk-seo-audit-1860-1909.md.
 */
export const ukCorePosts: BlogPost[] = [
  // 1870 (+1871, 1872, 1895, 1900, 1908, 1909)
  {
    slug: "influencer-marketing-uk",
    category: "Influencer Marketing",
    title: "Influencer Marketing in the UK: A Planning Guide for Brands",
    seoTitle: "Influencer Marketing in the UK: A Guide for Brands",
    excerpt:
      "A planning guide for brands running creator campaigns in the UK, including those launching from abroad: the size of the market, the rules (ASA, CAP and the CMA), platforms and social commerce, choosing a creator mix, measurement under UK consent rules, a year-round calendar and a checklist from brief to report.",
    metaDescription:
      "Plan influencer marketing in the UK: market size, ASA and CMA rules, platforms, creator mix, measurement, a year-round calendar and a launch checklist.",
    author: UK_AUTHOR,
    publishedAt: UK_PUBLISHED,
    lastReviewed: UK_REVIEWED,
    readingTime: "5 min read",
    inLanguage: UK_LANGUAGE,
    spatialCoverage: "United Kingdom",
    tags: ["influencer marketing UK", "influencer marketing United Kingdom", "creator marketing UK", "UK influencer campaign planning", "launch influencer marketing in the UK"],
    related: ["influencer-advertising-rules-uk", "influencer-marketing-cost-uk", "choose-influencer-marketing-agency-uk"],
    hero: {
      src: "/blog/uk-guides/influencer-marketing-uk.svg",
      alt: "Planning influencer marketing in the UK: objective, ASA and CMA rules, platforms, creator mix, measurement",
    },
    body: [
      {
        type: "paragraph",
        text: "The UK is one of the most regulated and most measured creator markets. Disclosure rules are detailed, regulators publish rulings and name non-compliant influencers, and the trade bodies now measure creator spend as its own channel. That makes it a good market for brands that plan properly and an expensive one for those that don't. This guide is for UK marketing teams and for brands planning a UK launch from abroad.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Start with one objective and one audience, check the ASA and CMA rules for your category before briefing anyone, choose platforms based on where that audience buys (TikTok Shop and, since July 2026, YouTube's Shopping affiliate programme both operate in the UK), build a mix of creator sizes, agree measurement that works under UK cookie consent rules, and plan around the UK retail calendar. Every incentivised post, including gifted products and affiliate links, needs a clear 'Ad' label upfront.",
      },
      { type: "heading", text: "The UK market in numbers", id: "market" },
      {
        type: "paragraph",
        text: "IAB UK's first study of the market, produced with IRM, puts UK creator partnership revenue at £966 million in 2025, up 20.1% from £804 million in 2024, and forecasts £1.217 billion for 2026. The figure counts creator campaigns on creators' own channels, including production and rights, but excludes paid amplification of that content, which survey respondents suggested could be two to three times as large. Treat the 2026 number as a forecast, not a result.",
        links: [{ text: "IAB UK's first study of the market", href: UK_SRC.iabCreatorMarket.url }],
      },
      { type: "heading", text: "The rules in brief", id: "rules" },
      {
        type: "table",
        headers: ["Body", "What it does", "What it means for a campaign"],
        rows: [
          ["ASA (applying the CAP Code)", "Self-regulatory advertising regulator; publishes rulings and a list of non-compliant influencers", "Ads must be obviously identifiable; claims need evidence; sector rules apply"],
          ["CMA and Trading Standards", "Enforce consumer law, including the DMCC Act since 6 April 2025", "Hidden advertising and fake reviews are unlawful whether or not the brand controlled the post"],
          ["Sector regulators (FCA, MHRA and others)", "Rules for financial promotions, medicines and other regulated products", "Some products can't be promoted by creators at all"],
        ],
      },
      {
        type: "paragraph",
        text: "The detail, including what counts as payment and which labels work, is in UK influencer advertising rules. Category restrictions (food, alcohol, gambling, medicines, finance, green claims) are covered in regulated products in UK influencer marketing.",
        links: [
          { text: "UK influencer advertising rules", href: "/blog/influencer-advertising-rules-uk" },
          { text: "regulated products in UK influencer marketing", href: "/blog/regulated-products-influencer-marketing-uk" },
        ],
      },
      { type: "heading", text: "Launching in the UK from abroad", id: "from-abroad" },
      {
        type: "list",
        items: [
          "Labels: the ASA advises against 'Sponsored', 'Collab', 'Gifted' and 'PR' as labels, which teams from other markets often use. Use 'Ad' or 'Advert', upfront.",
          "Claims: a claim that's acceptable at home may need different evidence in the UK, especially for health, beauty, food and environmental claims.",
          "Contracts and tax: agree fees in pounds, check whether creators are VAT-registered, and decide which country's law governs the contract.",
          "Language: write briefs in British English and let creators speak as they normally do; don't script an accent or slang.",
          "Culture: avoid building content around national stereotypes (tea, weather, royals). Regional and community differences matter more than a single 'British' audience; see regional influencer marketing in the UK.",
          "Time zones and approvals: plan approval windows that suit UK working hours, or posts will miss their slots.",
        ],
      },
      {
        type: "paragraph",
        text: "Regional planning is covered in regional influencer marketing in the UK.",
        links: [{ text: "regional influencer marketing in the UK", href: "/blog/regional-influencer-marketing-uk" }],
      },
      { type: "heading", text: "Platforms and social commerce", id: "platforms" },
      {
        type: "table",
        headers: ["Platform", "Commerce in the UK (checked October 2026)", "Note"],
        rows: [
          ["TikTok", "TikTok Shop operates in the UK; creators can earn commission as affiliates", "Affiliate posts are ads and need labels"],
          ["YouTube", "Shopping affiliate programme launched in the UK in July 2026, for creators with at least 500 subscribers", "Product tags in videos, Shorts and live; check which retailers take part"],
          ["Instagram", "Paid partnership label and partnership ads available", "The ASA says the platform label may be enough only if clear and upfront"],
        ],
      },
      {
        type: "paragraph",
        text: "Sources: Retail Gazette's reports on TikTok Shop in the UK and YouTube's UK launch. More on selling through creators is in UK e-commerce influencer marketing.",
        links: [
          { text: "Retail Gazette's reports on TikTok Shop in the UK", href: UK_SRC.tiktokShopUk.url },
          { text: "YouTube's UK launch", href: UK_SRC.youtubeShoppingUk.url },
          { text: "UK e-commerce influencer marketing", href: "/blog/ecommerce-influencer-marketing-uk" },
        ],
      },
      { type: "heading", text: "Choosing a creator mix", id: "creator-mix" },
      {
        type: "table",
        headers: ["Creator size", "Typical role", "Watch out for"],
        rows: [
          ["Nano and micro", "Trust in a niche or local community, product seeding, UGC for ads", "Time to manage many relationships; disclosure discipline"],
          ["Mid-tier", "Reach with credibility; often the best balance for launches", "Rates rise quickly with exclusivity and usage"],
          ["Macro and celebrity", "Fast awareness, PR value", "Cost, age-of-audience rules for restricted categories"],
        ],
      },
      {
        type: "paragraph",
        text: "There's no UK-specific rule for the right mix; it depends on objective and budget. Tier trade-offs are explained in micro vs macro influencers. For alcohol and gambling, a creator's audience age matters as much as size.",
        links: [{ text: "micro vs macro influencers", href: "/blog/micro-vs-macro-influencers" }],
      },
      { type: "heading", text: "Measuring under UK consent rules", id: "measurement" },
      {
        type: "paragraph",
        text: "UK cookie rules (PECR, enforced by the ICO) require consent for most analytics and advertising cookies, and visitors who decline aren't counted, so website analytics undercount creator traffic. Use tracked links and creator codes as a floor, compare against your own orders or CRM, and use holdout regions or brand lift studies when the budget justifies it. The ICO's cookie guidance explains the consent requirements; methods are covered in measuring influencer campaign ROI and influencer marketing incrementality.",
        links: [
          { text: "ICO's cookie guidance", href: UK_SRC.icoCookies.url },
          { text: "measuring influencer campaign ROI", href: "/blog/measuring-influencer-campaign-roi" },
          { text: "influencer marketing incrementality", href: "/blog/influencer-marketing-incrementality" },
        ],
      },
      { type: "heading", text: "A year-round plan", id: "year-round" },
      {
        type: "paragraph",
        text: "Most UK brands combine an always-on base of a few creators with peaks around retail moments: January sales, Valentine's Day, Mothering Sunday, Easter, summer, back to school, Black Friday and Christmas. Book creators for peaks early, because rates and availability tighten. Dates and timelines are in seasonal influencer marketing in the UK, and the always-on model in always-on influencer marketing.",
        links: [
          { text: "seasonal influencer marketing in the UK", href: "/blog/seasonal-influencer-marketing-uk" },
          { text: "always-on influencer marketing", href: "/blog/always-on-influencer-marketing" },
        ],
      },
      { type: "heading", text: "Checklist: from brief to final report", id: "checklist" },
      {
        type: "template",
        label: "UK influencer campaign checklist",
        text: "1. Objective, audience and one main message\n2. Category rules checked (food, alcohol, gambling, medicines, finance, green claims, children)\n3. Claims and evidence file ready\n4. Platforms and creator mix chosen; audience age and location checked\n5. Brief includes disclosure wording ('Ad' upfront) and prohibited claims\n6. Contracts: fees in GBP, VAT, usage rights, exclusivity, disclosure duty, approval rights\n7. Giveaways: CAP section 8 terms, random selection, winner handling\n8. Tracking: links, codes, consent-aware analytics, baseline\n9. Pre-publication review: label, claims, links\n10. Live monitoring: labels present, comments, corrections\n11. Report: results against objective, method, lessons; keep records",
      },
      {
        type: "paragraph",
        text: "Related guides: UK influencer giveaways, UK influencer marketing costs and how to choose an influencer marketing agency in the UK.",
        links: [
          { text: "UK influencer giveaways", href: "/blog/influencer-giveaways-uk" },
          { text: "UK influencer marketing costs", href: "/blog/influencer-marketing-cost-uk" },
          { text: "how to choose an influencer marketing agency in the UK", href: "/blog/choose-influencer-marketing-agency-uk" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Using labels from other markets, such as 'Sponsored' or 'Gifted', on their own.",
          "Assuming gifted products don't need disclosure.",
          "Briefing claims that haven't been substantiated for the UK.",
          "Planning commerce around features that aren't available in the UK.",
          "Relying only on website analytics when many visitors decline cookies.",
          "Booking Christmas creators in November.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "The UK rewards brands that treat creator marketing as advertising: clear labels, evidence for claims, sector rules checked early, and measurement that doesn't depend on cookies alone. Plan around the retail calendar, choose platforms by where your customers buy, and start with the rules in UK influencer advertising rules.",
        links: [{ text: "UK influencer advertising rules", href: "/blog/influencer-advertising-rules-uk" }],
      },
    ],
    faqs: [
      {
        question: "How big is the UK influencer marketing market?",
        answer:
          "IAB UK and IRM measured UK creator partnership revenue at £966 million in 2025 and forecast £1.217 billion for 2026. The figure excludes paid amplification of creator content.",
      },
      {
        question: "Who regulates influencer marketing in the UK?",
        answer:
          "The ASA applies the CAP Code to ads, including influencer ads. The CMA and Trading Standards enforce consumer law, including the DMCC Act's rules on hidden advertising and fake reviews. Sector regulators such as the FCA and MHRA add rules for their products.",
      },
      {
        question: "Can a brand based outside the UK run influencer campaigns there?",
        answer:
          "Yes, but plan to UK rules. The campaign is aimed at UK consumers, so check labels, claims and sector restrictions against ASA and CMA guidance before briefing creators.",
      },
    ],
  },
  // 1860 (+1861, 1862, 1863, 1864, 1865, 1868, 1869, 1892, 1899)
  {
    slug: "influencer-advertising-rules-uk",
    category: "Influencer Marketing",
    title: "UK Influencer Marketing Rules: A Brand's Guide to ASA and CMA Guidance",
    seoTitle: "UK Influencer Marketing Rules: ASA and CMA Guide",
    excerpt:
      "What UK brands need to know about influencer advertising rules: when a post is an ad, gifted products, affiliate links and own-brand posts, which labels the ASA and CMA accept, who is responsible, how to brief and review content, paid amplification, a compliance policy outline and common mistakes.",
    metaDescription:
      "UK influencer rules for brands: when posts are ads, gifts and affiliate links, accepted labels, who is responsible, briefing, review and common mistakes.",
    author: UK_AUTHOR,
    publishedAt: UK_PUBLISHED,
    lastReviewed: UK_REVIEWED,
    readingTime: "6 min read",
    inLanguage: UK_LANGUAGE,
    spatialCoverage: "United Kingdom",
    breadcrumbParents: [UK_HUB],
    tags: ["UK influencer marketing rules", "ASA influencer guidance", "CMA influencer rules", "influencer disclosure UK", "gifted products disclosure UK"],
    related: ["influencer-marketing-uk", "regulated-products-influencer-marketing-uk", "influencer-giveaways-uk"],
    hero: {
      src: "/blog/uk-guides/influencer-advertising-rules-uk.svg",
      alt: "UK influencer disclosure steps: spot the incentive, label 'Ad' upfront, check claims, brief and contract, review before posting",
    },
    body: [
      {
        type: "paragraph",
        text: "UK influencer rules come from two directions: the ASA, which applies the advertising industry's CAP Code, and consumer law, enforced by the CMA and Trading Standards. Since 6 April 2025, that law is Part 4 of the Digital Markets, Competition and Consumers (DMCC) Act 2024. Both expect the same thing in practice: if there's a commercial relationship, the audience must be able to tell immediately that the content is an ad. This guide is general information for brands and agencies, not legal advice.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Any incentive makes related content advertising: payment, free products (even unsolicited ones with no obligation to post), discounts, trips, commission and affiliate links, and posts about a brand the creator owns or is connected to. Label it with 'Ad' or 'Advert' at the very start, where people look first. Brands, creators and agencies all share responsibility. Put the disclosure duty in contracts and briefs, check posts before and after they go live, and keep disclosing for 12 months after an ongoing relationship ends.",
      },
      { type: "heading", text: "Who regulates what", id: "regulators" },
      {
        type: "table",
        headers: ["", "ASA and the CAP Code", "CMA, Trading Standards and the DMCC Act"],
        rows: [
          ["Type", "Self-regulation by the advertising industry", "Law"],
          ["When it applies to a creator post", "The brand paid (in any form) and had some editorial control, or the post contains affiliate links, or promotes the creator's own products or giveaways", "Whenever there's a commercial relationship; no control test"],
          ["Main sanctions", "Rulings, naming on non-compliant lists, targeted ads warning followers, referral to platforms and Trading Standards", "Enforcement action; since April 2025 the CMA can fine directly, up to 10% of global turnover"],
        ],
      },
      {
        type: "paragraph",
        text: "Sources: the ASA and CMA influencers' guide, the CMA's note on who regulates hidden advertising, and a law-firm summary of the CMA's fining powers. The ASA reads 'control' broadly: if the creator wasn't completely free to say anything or nothing, there was probably control.",
        links: [
          { text: "ASA and CMA influencers' guide", href: UK_SRC.asaInfluencerGuidePdf.url },
          { text: "CMA's note on who regulates hidden advertising", href: UK_SRC.cmaWhoRegulates.url },
          { text: "law-firm summary of the CMA's fining powers", href: UK_SRC.dmccFines.url },
        ],
      },
      { type: "heading", text: "When is a post an ad?", id: "when-ad" },
      {
        type: "table",
        headers: ["Arrangement", "Needs an ad label?", "Notes"],
        rows: [
          ["Paid post", "Yes", "Any payment, in money or kind"],
          ["Gifted product, no obligation to post", "Yes", "Free items count as payment even if unsolicited; the CMA's brand guidance says the same"],
          ["Discount, trip, hotel stay, event invite, loan", "Yes", "All count as incentives"],
          ["Affiliate links or codes earning commission", "Yes", "Label the affiliate content specifically; 'some links may earn commission' isn't enough"],
          ["Brand ambassador, shareholder, director, employee", "Yes", "Commercial connection, even for unpaid posts about the brand"],
          ["Creator's own products, events or giveaways", "Yes", "Must be clear from the content, not just the bio"],
          ["Family's or friends' brand", "Yes", "Personal connection counts"],
          ["Genuinely unconnected opinion", "No", "No incentive, no relationship"],
        ],
      },
      {
        type: "paragraph",
        text: "Based on the ASA and CMA influencers' guide and the CMA's guidance for brands. Gifts often cause the most confusion: under consumer law, labelling is the brand's responsibility too, even when it asked for nothing in return.",
        links: [
          { text: "ASA and CMA influencers' guide", href: UK_SRC.asaInfluencerGuide.url },
          { text: "CMA's guidance for brands", href: UK_SRC.cmaBrands.url },
        ],
      },
      { type: "heading", text: "Which labels work", id: "labels" },
      {
        type: "table",
        headers: ["Use", "Avoid on their own"],
        rows: [
          ["Ad, #Ad, Advert, Advertising, Advertisement, Advertisement Feature", "Sponsored, Spon, Sp, Gifted, Gift, PR, PR trip, Collab, Affiliate, Aff, Supported by, In partnership with, Thanks to [brand], just tagging the brand"],
        ],
      },
      {
        type: "list",
        items: [
          "Put the label first, where people look: the start of the caption, on the image or video, in the title or thumbnail.",
          "Don't bury it in hashtags or behind 'more'.",
          "Label every Story in a sequence, and every format separately (post, Reel, Story).",
          "For a video, make it clear from the start, not halfway through.",
          "Platform tools such as Instagram's 'Paid partnership' may be enough only if clear and upfront; if in doubt, add 'Ad' as well.",
        ],
      },
      { type: "heading", text: "Who is responsible", id: "responsibility" },
      {
        type: "paragraph",
        text: "Brands, creators and intermediaries (talent and marketing agencies) are all responsible. The ASA holds brands and creators responsible for what their agencies do, and the DMCC Act's unfair commercial practice rules apply across the whole chain, including platforms. In practice, a brand can't rely on 'the creator forgot': the CMA expects brands to require disclosure in contracts, check posts and correct problems promptly, and warns that brands are at risk if they keep working with creators who repeatedly fail to label.",
        links: [{ text: "CMA expects brands", href: UK_SRC.cmaBrands.url }],
      },
      { type: "heading", text: "Briefing creators on disclosure", id: "brief" },
      {
        type: "template",
        label: "Disclosure wording for a UK brief",
        text: "This content is an advertisement because [we are paying you / we gifted the product / you earn commission through the link or code].\n- Start the caption with 'Ad' (or 'Advert'), before anything else.\n- Add 'Ad' on screen at the start of videos and on every Story frame.\n- Also switch on the platform's paid partnership label where available.\n- Don't use 'gifted', 'collab' or 'sponsored' as the only label.\n- Approved claims: [list]. Don't add others about results, health or the environment.\n- Keep labelling posts about [brand] for 12 months after our partnership ends.",
      },
      {
        type: "paragraph",
        text: "General briefing structure is in the influencer campaign brief guide; this wording slots into its mandatory points.",
        links: [{ text: "influencer campaign brief guide", href: "/blog/influencer-campaign-brief" }],
      },
      { type: "heading", text: "Reviewing content before and after it goes live", id: "review" },
      {
        type: "list",
        items: [
          "Before posting: label present and first; claims match the approved list and evidence; nothing from a restricted category (see regulated products); giveaway terms included if relevant.",
          "On posting day: check the live post, because labels can be cut off or hidden by platform layouts.",
          "Afterwards: check reposts, Stories and any content made into ads; fix unlabelled posts promptly and keep a record of what was done.",
        ],
      },
      {
        type: "paragraph",
        text: "Sector restrictions are in regulated products in UK influencer marketing, and approval workflows in the creator content approval process.",
        links: [
          { text: "regulated products in UK influencer marketing", href: "/blog/regulated-products-influencer-marketing-uk" },
          { text: "creator content approval process", href: "/blog/influencer-content-approval" },
        ],
      },
      { type: "heading", text: "Paid amplification and content licensing", id: "paid-amplification" },
      {
        type: "paragraph",
        text: "When a brand runs creator content as ads (partnership ads, whitelisting or ads from the brand's own account), the brand is the advertiser for that placement and every CAP rule applies to it, including claims and sector restrictions. For less healthy food, paying to place an ad online is restricted even if the original organic post wasn't. Agree usage rights, duration and edits in the contract before launch; ISBA's influencer contract templates are a useful starting point.",
        links: [{ text: "ISBA's influencer contract templates", href: UK_SRC.isbaTemplates.url }],
      },
      { type: "heading", text: "A simple compliance policy", id: "policy" },
      {
        type: "list",
        items: [
          "Scope: which teams, agencies and creators it covers.",
          "Disclosure standard: labels, placement, the 12-month rule.",
          "Claims: who approves them and where evidence is kept.",
          "Restricted categories and audience-age checks.",
          "Contracts: disclosure duty, approval rights, takedown and correction.",
          "Monitoring: who checks live posts and how often.",
          "Breaches: how fixes are made, recorded and escalated; when to stop working with a creator.",
          "Training and review: at least once a year, and when guidance changes.",
        ],
      },
      {
        type: "paragraph",
        text: "ISBA's Influencer Marketing Code of Conduct can be appended to contracts as a shared standard. The wider structure of a policy is in influencer marketing governance.",
        links: [
          { text: "ISBA's Influencer Marketing Code of Conduct", href: UK_SRC.isbaCode.url },
          { text: "influencer marketing governance", href: "/blog/influencer-marketing-governance" },
        ],
      },
      { type: "heading", text: "Common disclosure mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "'Gifted' or 'PR' as the only label.",
          "The label at the end of the caption or among other hashtags.",
          "Labelling the first Story but not the rest.",
          "Relying on the bio or a pinned post.",
          "A vague affiliate disclaimer that doesn't say which links are ads.",
          "No disclosure on own-brand posts or creator-run giveaways.",
          "Stopping disclosure as soon as the contract ends.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "UK rules are strict but clear: if there's any incentive or connection, say 'Ad' first. Write it into contracts and briefs, check live posts, and treat creator content run as ads with the same care as any other advertising. Guidance is being updated for the DMCC Act, so check the ASA and CMA pages before major campaigns (last checked " + UK_REVIEW_DATE_TEXT + ").",
      },
    ],
    faqs: [
      {
        question: "Do gifted products need to be disclosed in the UK?",
        answer:
          "Yes. The ASA and CMA treat free products as payment even if they were unsolicited and there was no obligation to post, so related content needs a clear 'Ad' label upfront.",
      },
      {
        question: "Is #sponsored or #gifted enough in the UK?",
        answer:
          "The ASA and CMA advise against them as labels on their own. Use 'Ad', '#Ad' or 'Advert' at the start of the content.",
      },
      {
        question: "Is the brand responsible if an influencer doesn't label an ad?",
        answer:
          "Yes, brands share responsibility. The ASA holds brands and creators responsible, and consumer law applies across the chain. The CMA expects brands to require disclosure in contracts, check posts and correct problems.",
      },
    ],
  },
  // 1890 (+1891)
  {
    slug: "choose-influencer-marketing-agency-uk",
    category: "Influencer Marketing",
    title: "How to Choose an Influencer Marketing Agency in the UK",
    seoTitle: "How to Choose an Influencer Marketing Agency (UK)",
    excerpt:
      "A buyer's guide for UK brands comparing influencer marketing agencies: the agency types, what to check on compliance, contracts, fees and data, questions to ask before hiring, red flags, and what to consider if the agency is based outside the UK.",
    metaDescription:
      "Choose an influencer marketing agency in the UK: agency types, compliance and contract checks, fee transparency, questions to ask and red flags.",
    author: UK_AUTHOR,
    publishedAt: UK_PUBLISHED,
    lastReviewed: UK_REVIEWED,
    readingTime: "4 min read",
    inLanguage: UK_LANGUAGE,
    spatialCoverage: "United Kingdom",
    breadcrumbParents: [UK_HUB],
    tags: ["influencer marketing agency UK", "choose an influencer agency UK", "questions to ask an influencer agency", "UK influencer agency checklist", "hire influencer marketing agency"],
    related: ["influencer-marketing-uk", "influencer-marketing-cost-uk", "influencer-marketing-agency-pitch-questions"],
    hero: {
      src: "/blog/uk-guides/choose-influencer-marketing-agency-uk.svg",
      alt: "Choosing an influencer agency in the UK: define the job, shortlist, test compliance, compare fees, check contracts",
    },
    body: [
      {
        type: "paragraph",
        text: "There are hundreds of agencies offering influencer marketing to UK brands, from creator-led boutiques to platforms with a service team and global networks. Most will show attractive case studies. The useful comparison is how each would run your campaign: who does the work, how they handle UK disclosure and claims rules, what they charge and what you own at the end. This guide is written for UK buyers; it doesn't rank or recommend specific agencies.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Decide what you need (strategy, creator management, production, paid amplification or all of these), send the same brief to three or four agencies, and compare their written answers on approach, team, fees, creator payment, compliance process, reporting and contract terms. Ask how they apply ASA and CMA guidance and who checks posts. Prefer transparent fees and clear ownership of content and data over the biggest roster.",
      },
      { type: "heading", text: "Types of agency", id: "types" },
      {
        type: "table",
        headers: ["Type", "Good for", "Check"],
        rows: [
          ["Specialist influencer agency", "End-to-end campaigns and programmes", "Depth in your category and platforms"],
          ["Talent or management agency", "Access to its own roster", "Whether it recommends creators outside its roster"],
          ["Social or creative agency with influencer services", "Campaigns integrated with social and content", "Who actually manages creators"],
          ["Platform with managed service", "Scale, data, self-serve options", "Contract length, data access, service levels"],
          ["Freelancer or consultant", "Small or specialist projects", "Capacity and cover for absence"],
        ],
      },
      { type: "heading", text: "What to check", id: "checks" },
      {
        type: "table",
        headers: ["Area", "What good looks like"],
        rows: [
          ["Compliance", "A written process for labels, claims and sector rules; named reviewer; knows the ASA and CMA guidance and the DMCC Act changes"],
          ["Creator selection", "Shows how creators are vetted, including audience location and age"],
          ["Fees", "Agency fee separate from creator fees; no undisclosed margin on creator costs"],
          ["Creator payment", "Clear payment terms and who pays creators, and when"],
          ["Contracts", "Usage rights, exclusivity, disclosure duty and approval rights in creator agreements; ISBA's templates or equivalent"],
          ["Data", "UK GDPR-compliant handling of creator and audience data; who owns the data at the end"],
          ["Reporting", "Results against your objective, method stated, raw data shared"],
          ["Exit", "What you keep if you part ways: contracts, content files, creator contacts, reports"],
        ],
      },
      {
        type: "paragraph",
        text: "ISBA's Influencer Marketing Code of Conduct sets out expected practice for brands, agencies and creators, including fee transparency; asking whether an agency follows it is a quick test. The rules themselves are in UK influencer advertising rules.",
        links: [
          { text: "ISBA's Influencer Marketing Code of Conduct", href: UK_SRC.isbaCode.url },
          { text: "UK influencer advertising rules", href: "/blog/influencer-advertising-rules-uk" },
        ],
      },
      { type: "heading", text: "Questions to ask before hiring", id: "questions" },
      {
        type: "list",
        items: [
          "Who will work on our account day to day, and what else are they working on?",
          "How do you check disclosure and claims before and after posting? Can we see your process?",
          "How would you handle a creator who repeatedly forgets to label?",
          "Which of our product claims would you not let creators make, and why?",
          "Do you take a margin on creator fees? Is the agency fee fixed, a percentage or performance-based?",
          "How do you choose creators, and do you recommend creators outside your own roster?",
          "What will you report, how often, and will we get the raw data?",
          "Who owns the content, the creator contracts and the data at the end?",
          "What happens if a creator controversy hits mid-campaign?",
          "Can we speak to two current clients?",
        ],
      },
      {
        type: "paragraph",
        text: "A longer list with what good answers sound like is in influencer marketing agency pitch questions.",
        links: [{ text: "influencer marketing agency pitch questions", href: "/blog/influencer-marketing-agency-pitch-questions" }],
      },
      { type: "heading", text: "Red flags", id: "red-flags" },
      {
        type: "list",
        items: [
          "Guaranteed results, viral reach or sales figures.",
          "Vague answers on disclosure, or suggestions that 'gifted' posts don't need labels.",
          "One fee with no split between agency and creator costs.",
          "Reluctance to share creator audience data or raw results.",
          "Case studies without dates, objectives or methods.",
          "Contracts where the agency keeps the creator relationships and content rights.",
        ],
      },
      { type: "heading", text: "If the agency is based outside the UK", id: "outside-uk" },
      {
        type: "paragraph",
        text: "An agency doesn't need a UK office to run UK campaigns well, but it does need to apply UK rules, work UK hours for approvals and live monitoring, and contract creators properly. Ask which law governs the contract, how creators are paid in pounds and how VAT is handled, how it accesses UK creators, and who checks content against ASA and CMA guidance. Judge it on those answers, as you would a UK agency.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Choosing on roster size or follower totals.",
          "Comparing proposals that answer different briefs.",
          "Not asking how compliance is handled.",
          "Signing without clear ownership of content and data.",
          "Skipping a small first project before a long contract.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Pick the agency whose written answers to your brief are specific, transparent on money, serious about UK compliance and fair on ownership. Start with a defined first project, then extend. For budget planning, see UK influencer marketing costs.",
        links: [{ text: "UK influencer marketing costs", href: "/blog/influencer-marketing-cost-uk" }],
      },
    ],
    faqs: [
      {
        question: "What should I ask an influencer marketing agency in the UK?",
        answer:
          "Ask who will work on your account, how they check disclosure and claims against ASA and CMA guidance, how fees and creator payments are split, how creators are chosen, what they report, and who owns the content and data at the end.",
      },
      {
        question: "Does an influencer agency need to be based in the UK?",
        answer:
          "Not necessarily. What matters is that it applies UK rules, can contract and pay UK creators properly, and works UK hours for approvals and monitoring.",
      },
    ],
  },
  // 1893 (+1894)
  {
    slug: "influencer-marketing-cost-uk",
    category: "Influencer Marketing",
    title: "UK Influencer Marketing Costs: What Shapes a Campaign Budget",
    seoTitle: "UK Influencer Marketing Costs: What Shapes a Budget",
    excerpt:
      "What drives influencer marketing costs in the UK: creator fees, usage rights, exclusivity, production, agency fees, paid amplification, VAT and the tax position of gifts, how to compare creator proposals like for like, and a budget template. No invented rate cards.",
    metaDescription:
      "What shapes UK influencer marketing costs: creator fees, usage rights, exclusivity, agency fees, amplification and VAT, plus comparing creator proposals.",
    author: UK_AUTHOR,
    publishedAt: UK_PUBLISHED,
    lastReviewed: UK_REVIEWED,
    readingTime: "4 min read",
    inLanguage: UK_LANGUAGE,
    spatialCoverage: "United Kingdom",
    breadcrumbParents: [UK_HUB],
    tags: ["influencer marketing cost UK", "UK influencer rates", "influencer marketing budget UK", "how much do UK influencers charge", "compare influencer quotes UK"],
    related: ["influencer-marketing-uk", "choose-influencer-marketing-agency-uk", "negotiate-influencer-rates"],
    hero: {
      src: "/blog/uk-guides/influencer-marketing-cost-uk.svg",
      alt: "Building a UK influencer budget: creator fees, rights and exclusivity, production, agency, amplification and VAT",
    },
    body: [
      {
        type: "paragraph",
        text: "UK brands often ask what an influencer costs. There's no reliable public rate card: fees depend on the creator, the platform, the deliverables, the rights and the timing, and published 'average rates' rarely say how they were collected. What can be planned is the structure of a budget and the factors that move each line. This guide covers those, without inventing numbers.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A UK creator budget has six parts: creator fees, usage rights and exclusivity, production and product, agency or management fees, paid amplification, and VAT. Get quotes against one written scope, compare them line by line, and keep money back for amplifying the content that works. IAB UK's market study suggests paid amplification can be two to three times the spend on creator partnerships themselves, so don't treat creator fees as the whole budget.",
        links: [{ text: "IAB UK's market study", href: UK_SRC.iabCreatorMarket.url }],
      },
      { type: "heading", text: "What moves creator fees", id: "drivers" },
      {
        type: "table",
        headers: ["Factor", "Effect on cost"],
        rows: [
          ["Typical views, not followers", "The main driver of a fair price; ask for recent medians"],
          ["Format and number of deliverables", "Video costs more than a static post; bundles may be cheaper per item"],
          ["Usage rights", "Paid usage and longer periods add cost"],
          ["Exclusivity", "Category exclusivity is often priced separately"],
          ["Timing", "Peak periods (Black Friday, Christmas) tighten availability"],
          ["Production demands", "Scripts, locations, travel and reshoots add cost"],
          ["Management", "Managed creators may include an agent's fee"],
        ],
      },
      { type: "heading", text: "VAT and tax", id: "vat" },
      {
        type: "list",
        items: [
          "VAT: creators must register for VAT once taxable turnover passes £90,000 over a rolling 12 months, so some quotes will add 20% VAT and others won't. Compare quotes on the same basis.",
          "Gifts: HMRC counts gifts and services received for promoting products as creators' income, valued at what they would have cost. Expect experienced creators to treat gifted-only deals as payment, not a favour.",
          "Your own position: check with your accountant how gifted stock, fees and VAT are treated for your business.",
        ],
      },
      {
        type: "paragraph",
        text: "Sources: GOV.UK on the VAT registration threshold, and HMRC's guidance on income from online platforms. This is general information, not tax advice.",
        links: [
          { text: "VAT registration threshold", href: UK_SRC.vatThreshold.url },
          { text: "HMRC's guidance on income from online platforms", href: UK_SRC.hmrcCreators.url },
        ],
      },
      { type: "heading", text: "Comparing creator proposals like for like", id: "compare" },
      {
        type: "table",
        headers: ["Line", "Ask each creator to state"],
        rows: [
          ["Deliverables", "Exactly what is included: posts, Stories, video length, links"],
          ["Usage", "Organic only, or paid usage: channels and duration"],
          ["Exclusivity", "Category and period, priced separately"],
          ["Revisions and raw footage", "Number of revision rounds; raw files or not"],
          ["VAT", "Whether VAT is added"],
          ["Expected reach", "Median views on recent posts of the same format"],
        ],
      },
      {
        type: "paragraph",
        text: "Then compare cost per expected thousand views and per usable asset, alongside fit and audience. The full method is in comparing creator quotes like for like.",
        links: [{ text: "comparing creator quotes like for like", href: "/blog/negotiate-influencer-rates#compare-quotes" }],
      },
      { type: "heading", text: "A budget template", id: "template" },
      {
        type: "template",
        label: "UK creator campaign budget",
        text: "1. Creator fees (by creator, excl. VAT)\n2. Usage rights and exclusivity (separate lines)\n3. Product, shipping and production\n4. Agency or management fees\n5. Paid amplification of creator content\n6. Tracking, tools and reporting\n7. Contingency (replacements, reshoots)\n8. VAT where applicable\nTotal, plus the amount held back for post-launch amplification",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Budgeting creator fees and forgetting amplification.",
          "Comparing a VAT-inclusive quote with an exclusive one.",
          "Buying paid usage you won't run.",
          "Treating gifted-only deals as free.",
          "Relying on 'average UK rates' with no stated method.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A good UK budget is built from quotes against one scope, with rights, VAT and amplification visible as separate lines. Hidden costs and scope creep are covered in influencer campaign hidden costs; agency comparisons in how to choose an influencer marketing agency in the UK.",
        links: [
          { text: "influencer campaign hidden costs", href: "/blog/influencer-campaign-hidden-costs" },
          { text: "how to choose an influencer marketing agency in the UK", href: "/blog/choose-influencer-marketing-agency-uk" },
        ],
      },
    ],
    faqs: [
      {
        question: "How much do UK influencers charge?",
        answer:
          "There's no reliable public rate card. Fees depend on typical views, format, deliverables, usage rights, exclusivity and timing. Get quotes against one written scope and compare them line by line.",
      },
      {
        question: "Do UK influencers charge VAT?",
        answer:
          "Only if they're VAT-registered, which is required once taxable turnover passes £90,000 over a rolling 12 months. Compare quotes on the same VAT basis.",
      },
    ],
  },
];
