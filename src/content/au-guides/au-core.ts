import type { BlogPost } from "@/content/blog";
import { AU_AUTHOR, AU_HUB, AU_LANGUAGE, AU_PUBLISHED, AU_REVIEWED, AU_REVIEW_DATE_TEXT, AU_SRC } from "@/content/au-guides/shared";

/**
 * Australia cluster (1540–1559): pillar (1540, with 1545 micro-influencers and 1546 UGC as sections), agency
 * selection (1541), costs (1542), advertising rules (1543), finding and vetting with brand safety (1544 + 1557)
 * and the under-16 social media minimum age (1559). Australian English. See docs/australia-1540-1559-audit.md.
 */
export const auCorePosts: BlogPost[] = [
  // 1540 (+1545, 1546)
  {
    slug: "influencer-marketing-australia",
    category: "Influencer Marketing",
    title: "Influencer Marketing in Australia: A Practical Guide for Brands",
    seoTitle: "Influencer Marketing in Australia: A Guide for Brands",
    excerpt:
      "A practical guide for brands planning creator campaigns in Australia: how creator content fits the path to purchase, the rules that apply (Australian Consumer Law, AANA codes, TGA and ABAC), platforms and the under-16 restrictions, creator tiers including micro and UGC creators, budgets in AUD, measurement and how to plan a first campaign.",
    metaDescription:
      "Influencer marketing in Australia: the rules (ACCC, AANA, TGA, ABAC), platforms and under-16 limits, creator tiers, AUD budgets and measurement.",
    author: AU_AUTHOR,
    publishedAt: AU_PUBLISHED,
    updatedAt: "2026-10-10",
    lastReviewed: AU_REVIEWED,
    readingTime: "6 min read",
    inLanguage: AU_LANGUAGE,
    spatialCoverage: "Australia",
    tags: ["influencer marketing Australia", "influencer marketing agency Australia", "creator marketing Australia", "micro influencers Australia", "UGC creators Australia"],
    related: ["influencer-advertising-rules-australia", "influencer-marketing-cost-australia", "find-vet-influencers-australia"],
    hero: {
      src: "/blog/au-guides/influencer-marketing-australia.svg",
      alt: "Planning influencer marketing in Australia: objective, rules check, platform and age limits, creator mix, AUD budget, measurement",
    },
    body: [
      {
        type: "paragraph",
        text: "Creators are now part of how many Australians shop. IAB Australia's Creator Connect Report 2026 found that six in ten Australian shoppers, and more than eight in ten under 40, pass through creator content before they buy, and that authenticity and brand fit matter more than reach. Australia also has a well-developed set of rules: consumer law enforced by the ACCC, industry codes, sector rules for health products and alcohol, and from December 2025 a minimum age for social media accounts. This guide is for brands planning creator campaigns in Australia, and links to detailed guides on each topic.",
        links: [{ text: "Creator Connect Report 2026", href: AU_SRC.iabCreatorConnect.url }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To run influencer marketing in Australia, set one objective, choose creators whose audiences are in Australia and match your category, and make sure every paid, gifted or affiliate post is clearly disclosed and makes only claims you can prove, because misleading posts can breach the Australian Consumer Law for both brand and creator. Check sector rules (TGA for therapeutic goods including sunscreen, ABAC for alcohol), plan around platforms' under-16 restrictions, budget in AUD including GST where it applies, and measure results beyond views.",
      },
      { type: "heading", text: "How creators fit the Australian path to purchase", id: "path" },
      {
        type: "paragraph",
        text: "IAB Australia's research positions creator content alongside search and online stores rather than replacing them: shoppers still search and compare, but creators appear at every stage. The same report notes that most brands are not yet measuring this channel properly. The practical implication is to plan creators as part of the media mix, with clear roles and measurement, rather than as one-off posts.",
      },
      { type: "heading", text: "The rules that apply", id: "rules" },
      {
        type: "table",
        headers: ["Layer", "What it covers", "Who enforces"],
        rows: [
          ["Australian Consumer Law", "Misleading or deceptive conduct, including undisclosed paid posts and fake or edited reviews", "ACCC (and state fair trading agencies)"],
          ["AANA Code of Ethics", "Advertising must be clearly distinguishable as advertising (clause 2.7)", "Ad Standards (industry self-regulation)"],
          ["AANA Children's Advertising Code", "Advertising directed at children under 15", "Ad Standards"],
          ["Therapeutic Goods Advertising Code", "Medicines, supplements, sunscreens; no paid or gifted testimonials", "TGA"],
          ["ABAC Code", "Alcohol marketing, including influencers", "ABAC scheme"],
          ["Social media minimum age", "Platforms must stop under-16s holding accounts", "eSafety Commissioner"],
        ],
      },
      {
        type: "paragraph",
        text: "The detail, with sources, is in Australian influencer advertising rules, and the account-age law in Australia's under-16 social media restrictions.",
        links: [
          { text: "Australian influencer advertising rules", href: "/blog/influencer-advertising-rules-australia" },
          { text: "Australia's under-16 social media restrictions", href: "/blog/social-media-minimum-age-influencer-campaigns-australia" },
        ],
      },
      { type: "heading", text: "Platforms", id: "platforms" },
      {
        type: "paragraph",
        text: "Instagram, TikTok and YouTube carry most Australian creator campaigns, with Facebook, Snapchat and Pinterest for specific audiences and LinkedIn for B2B. Commerce features differ from other markets: as of our review, TikTok Shop had not launched for Australian shoppers and YouTube's Shopping affiliate program didn't list Australia. All three major platforms are covered by the under-16 account restriction. Planning by platform is covered in Instagram, TikTok and YouTube influencer marketing in Australia.",
        links: [{ text: "Instagram, TikTok and YouTube influencer marketing in Australia", href: "/blog/instagram-tiktok-youtube-influencer-marketing-australia" }],
      },
      { type: "heading", text: "Creator tiers, micro-influencers and UGC creators", id: "creators" },
      {
        type: "table",
        headers: ["Creator type", "Best for", "Watch out for"],
        rows: [
          ["Micro-influencers (often 10,000–100,000 followers)", "Niche credibility, local audiences, testing several creators", "More management per result; check audience is in Australia"],
          ["Nano creators", "Local businesses, community and suburb-level reach", "Inconsistent posting and reporting"],
          ["Mid-tier and macro creators", "Launches and national reach", "Higher fees, overlap, more sponsored content"],
          ["UGC creators", "Content for your own channels and ads, not their audience", "Rights, licensing and approvals; the ad is yours to disclose"],
          ["Expert creators", "Health, finance, trades, B2B", "Professional rules for their field"],
        ],
      },
      {
        type: "paragraph",
        text: "For micro-influencers, the case is usually relevance rather than cost: a creator whose followers live in your city or care about your niche can outperform a larger account. For UGC creators, you're buying content, not reach, so the contract should state where you'll use it, for how long and whether paid ads are included. When UGC runs in your own ads, the ad is your advertising and must not mislead. Choosing and checking creators is covered in how to find and vet influencers in Australia.",
        links: [{ text: "how to find and vet influencers in Australia", href: "/blog/find-vet-influencers-australia" }],
      },
      { type: "heading", text: "Budgets in AUD", id: "budgets" },
      {
        type: "paragraph",
        text: "We found no independent survey of Australian creator rates, so plan from quotes rather than averages. Cost depends on audience, format, deliverables, usage rights, exclusivity and production. Remember GST: creators registered for GST will add it to invoices. The cost drivers and a budget worksheet are in influencer marketing costs in Australia.",
        links: [{ text: "influencer marketing costs in Australia", href: "/blog/influencer-marketing-cost-australia" }],
      },
      { type: "heading", text: "Industry guides", id: "industries" },
      {
        type: "paragraph",
        text: "Category-specific guides cover e-commerce brands, small businesses, tourism and regional destinations, restaurants, cafés and hospitality, beauty and skincare, health, wellness and fitness, financial services, food and beverage, sustainable and fashion brands, gaming and esports, universities and education, automotive brands and dealerships, and B2B and SaaS companies.",
        links: [
          { text: "e-commerce brands", href: "/blog/ecommerce-influencer-marketing-australia" },
          { text: "small businesses", href: "/blog/small-business-influencer-marketing-australia" },
          { text: "tourism and regional destinations", href: "/blog/tourism-influencer-marketing-australia" },
          { text: "restaurants, cafés and hospitality", href: "/blog/hospitality-influencer-marketing-australia" },
          { text: "beauty and skincare", href: "/blog/beauty-skincare-influencer-marketing-australia" },
          { text: "health, wellness and fitness", href: "/blog/health-wellness-influencer-marketing-australia" },
          { text: "financial services", href: "/blog/financial-services-influencer-marketing-australia" },
          { text: "food and beverage", href: "/blog/food-beverage-influencer-marketing-australia" },
          { text: "sustainable and fashion brands", href: "/blog/greenwashing-influencer-marketing-australia" },
          { text: "gaming and esports", href: "/blog/gaming-esports-influencer-marketing-australia" },
          { text: "universities and education", href: "/blog/education-influencer-marketing-australia" },
          { text: "automotive brands and dealerships", href: "/blog/automotive-influencer-marketing-australia" },
          { text: "B2B and SaaS companies", href: "/blog/b2b-saas-influencer-marketing-australia" },
        ],
      },
      { type: "heading", text: "Measurement", id: "measurement" },
      {
        type: "list",
        items: [
          "Set one primary objective and KPI before choosing creators",
          "Track each creator with a UTM-tagged link and, where useful, a code",
          "Report reach among Australian audiences, not total reach",
          "Go beyond clicks: orders, net revenue after returns, repeat customers",
          "Treat code sales as the minimum effect; creators influence people who never use a code",
        ],
      },
      {
        type: "paragraph",
        text: "The difference between views, engagement, leads, revenue and incremental impact is explained in measuring influencer campaign ROI, which includes notes for Australian campaigns.",
        links: [{ text: "measuring influencer campaign ROI", href: "/blog/measuring-influencer-campaign-roi#australia" }],
      },
      { type: "heading", text: "Entering Australia from overseas", id: "market-entry" },
      {
        type: "paragraph",
        text: "Overseas brands launching in Australia often assume their home-market creator playbook will carry over. The rules are the first thing to check: the ACCC says an overseas business that sells directly to consumers in Australia must follow the Australian Consumer Law, including the rules on misleading claims and consumer guarantees. Then check whether your product needs Australian approvals (for example, therapeutic goods), and take tax advice on GST before you price.",
        links: [{ text: "the ACCC says", href: AU_SRC.acccBuyingOnline.url }],
      },
      {
        type: "table",
        headers: ["Decision", "What we suggest"],
        rows: [
          ["Local or international creators", "Mostly Australia-based creators for persuasion; international creators only where audience data shows a real Australian following"],
          ["Claims", "Re-approve every claim for Australian rules; don't reuse overseas wording unchecked"],
          ["Disclosure", "Use clear advertising labels, and require the same standard from overseas creators in your contracts"],
          ["Availability", "Launch creators only when Australians can buy, with local delivery, returns and AUD pricing"],
          ["Timing", "Plan around the Australian calendar and seasons, which are opposite to the northern hemisphere"],
          ["Test size", "Start with several micro-creators in one or two cities before a national push"],
        ],
      },
      {
        type: "paragraph",
        text: "Running Australia alongside other markets is covered in the international influencer campaign playbook.",
        links: [{ text: "international influencer campaign playbook", href: "/blog/international-influencer-campaign-playbook" }],
      },
      { type: "heading", text: "A planning sequence", id: "planning" },
      {
        type: "list",
        items: [
          "1. Objective, audience and one KPI",
          "2. Rules check: consumer law, codes and any sector rules for your category",
          "3. Platform choice, considering the audience's age and the under-16 restrictions",
          "4. Creator shortlist with Australian audience data and a vetting check",
          "5. Brief with approved claims and disclosure wording",
          "6. Contracts covering fees, GST, usage rights, exclusivity and approvals",
          "7. Launch, monitor comments and disclosure, report against the KPI",
        ],
      },
      {
        type: "paragraph",
        text: "Templates and detail for each step: the influencer brief template for Australian brands, influencer campaign timelines in Australia, influencer contracts in Australia and local and regional campaigns. If you're comparing outside help, see how to choose an influencer marketing agency in Australia, and for campaigns that also run in India or the UAE, see influencer marketing across Australia, India and the UAE.",
        links: [
          { text: "influencer brief template for Australian brands", href: "/blog/influencer-brief-template-australia" },
          { text: "influencer campaign timelines in Australia", href: "/blog/influencer-campaign-timeline-australia" },
          { text: "influencer contracts in Australia", href: "/blog/influencer-contracts-australia" },
          { text: "local and regional campaigns", href: "/blog/local-regional-influencer-marketing-australia" },
          { text: "how to choose an influencer marketing agency in Australia", href: "/blog/choose-influencer-marketing-agency-australia" },
          { text: "influencer marketing across Australia, India and the UAE", href: "/blog/influencer-marketing-australia-india-uae" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Vague disclosures such as 'gifted' or 'collab' instead of a clear advertising label",
          "Paid or gifted testimonials for sunscreen and other therapeutic goods",
          "Creators whose audiences are mostly overseas",
          "Planning youth campaigns without considering the under-16 restrictions",
          "Judging success on views alone",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Australian audiences pay attention to creators they trust, and Australian regulators pay attention to whether that trust is respected. Choose creators for fit and audience location, disclose clearly, prove every claim, check sector rules, and measure what the campaign actually achieved.",
      },
    ],
    faqs: [
      {
        question: "Is influencer marketing regulated in Australia?",
        answer:
          "Yes. The Australian Consumer Law prohibits misleading or deceptive conduct, which covers undisclosed paid posts and false claims; the AANA Code of Ethics requires advertising to be clearly distinguishable; and the TGA and ABAC codes add rules for therapeutic goods and alcohol.",
      },
      {
        question: "Which platforms do Australian brands use for influencer marketing?",
        answer:
          "Mostly Instagram, TikTok and YouTube, with Facebook, Snapchat, Pinterest and LinkedIn for specific audiences. All the major platforms must now take reasonable steps to stop under-16s from holding accounts.",
      },
      {
        question: "Are micro-influencers worth it in Australia?",
        answer:
          "Often, when their audiences are in your city or niche. Their value is relevance and credibility rather than reach, and they suit testing several creators before scaling.",
      },
    ],
  },
  // 1541
  {
    slug: "choose-influencer-marketing-agency-australia",
    category: "Influencer Marketing",
    title: "How to Choose an Influencer Marketing Agency in Australia",
    seoTitle: "How to Choose an Influencer Marketing Agency in Australia",
    excerpt:
      "What Australian brands should compare when choosing an influencer marketing agency: compliance processes for consumer law and industry codes, creator sourcing and audience checks, transparency on creator fees and GST, contracts and rights, reporting, and the questions to ask in a pitch. No rankings, just criteria.",
    metaDescription:
      "Choose an influencer marketing agency in Australia: compliance process, creator sourcing, fee and GST transparency, rights, reporting and questions to ask.",
    author: AU_AUTHOR,
    publishedAt: AU_PUBLISHED,
    updatedAt: "2026-10-10",
    lastReviewed: AU_REVIEWED,
    readingTime: "5 min read",
    inLanguage: AU_LANGUAGE,
    spatialCoverage: "Australia",
    breadcrumbParents: [AU_HUB],
    tags: ["influencer marketing agency Australia", "choose influencer agency Australia", "influencer agency Sydney Melbourne", "influencer marketing agency checklist"],
    related: ["influencer-marketing-agency-checklist", "influencer-marketing-agency-pitch-questions", "influencer-marketing-agency-vs-in-house"],
    hero: {
      src: "/blog/au-guides/choose-influencer-marketing-agency-australia.svg",
      alt: "Agency selection in Australia: compliance process, creator sourcing, fee and GST transparency, rights and contracts, reporting",
    },
    body: [
      {
        type: "paragraph",
        text: "Australian brands can choose from specialist influencer agencies, social and media agencies with creator teams, talent agencies and platforms. They differ in what they actually do, how they charge and how seriously they take compliance. This guide gives you the criteria to compare them. It doesn't rank agencies, and Kudozz is one of the agencies you might compare: weigh our answers against the same criteria.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Choose an influencer marketing agency in Australia by comparing how it handles compliance (disclosure, claims, sector rules), how it finds and vets creators with Australian audiences, whether creator fees, agency fees and GST are shown separately, what the contract says about usage rights and exclusivity, and how it reports against your objective. Send every agency the same brief, ask for a written response, and speak to a reference client before signing.",
      },
      { type: "heading", text: "What to compare", id: "criteria" },
      {
        type: "table",
        headers: ["Criterion", "Good sign", "Red flag"],
        rows: [
          ["Compliance process", "Written disclosure wording, claims review, awareness of TGA and ABAC rules where relevant", "'Creators handle disclosure'"],
          ["Creator sourcing", "Audience location and quality data for every recommended creator", "Follower counts only"],
          ["Fee transparency", "Creator fees, agency fee, production and GST as separate lines", "One bundled number"],
          ["Rights and exclusivity", "Usage rights by platform, duration and paid use, stated in the proposal", "Rights 'included' with no detail"],
          ["Reporting", "Results against your KPI, with sample report", "Reach and likes only"],
          ["Team", "Named people and their time on your account", "Only the pitch team named"],
          ["Experience", "Verifiable examples relevant to your category", "Unlabelled 'case studies' with no client you can contact"],
        ],
      },
      { type: "heading", text: "Compliance questions to ask", id: "compliance" },
      {
        type: "list",
        items: [
          "How do you make sure every paid, gifted or affiliate post is clearly disclosed?",
          "Who reviews product claims before posting, and against what evidence?",
          "How do you handle therapeutic goods (including sunscreen) under the TGA's testimonial rules?",
          "For alcohol, how do you apply the ABAC influencer guidance, including creator age and audience controls?",
          "What do you do if a creator posts without disclosure or edits a review?",
          "How do you plan youth-skewed campaigns given the under-16 account restrictions?",
        ],
      },
      {
        type: "paragraph",
        text: "The ACCC has penalised businesses over influencer posts, including a 2026 case where a business told influencers not to disclose free products. The rules and cases are summarised in Australian influencer advertising rules.",
        links: [
          { text: "a 2026 case", href: AU_SRC.acccPhotobook.url },
          { text: "Australian influencer advertising rules", href: "/blog/influencer-advertising-rules-australia" },
        ],
      },
      { type: "heading", text: "Fees and GST", id: "fees" },
      {
        type: "list",
        items: [
          "Ask whether the agency fee is a retainer, a project fee or a percentage of creator spend",
          "Check whether creator fees are passed through at cost or marked up",
          "Confirm how GST is shown: the agency and GST-registered creators add it to invoices",
          "Ask who pays creators and on what terms; late payment damages creator relationships",
        ],
      },
      {
        type: "paragraph",
        text: "Cost drivers and a budget worksheet are in influencer marketing costs in Australia.",
        links: [{ text: "influencer marketing costs in Australia", href: "/blog/influencer-marketing-cost-australia" }],
      },
      { type: "heading", text: "Industry accreditation", id: "accreditation" },
      {
        type: "paragraph",
        text: "The Australian Influencer Marketing Council (AiMCO) publishes best-practice material and runs an influencer marketing accreditation course. Accreditation shows training, not results, but it is a reasonable question to ask, alongside how the agency keeps up with ACCC and Ad Standards decisions.",
        links: [{ text: "Australian Influencer Marketing Council (AiMCO)", href: AU_SRC.aimco.url }],
      },
      { type: "heading", text: "Running the selection", id: "process" },
      {
        type: "list",
        items: [
          "Write one brief with objective, audience, budget range and timing",
          "Send it to three or four agencies and ask for written responses",
          "Score responses against criteria agreed before reading them",
          "Ask for sample creators with audience data, not just names",
          "Call a reference client",
          "Start with a defined first campaign before a long retainer",
        ],
      },
      {
        type: "paragraph",
        text: "A general scoring checklist is in the influencer marketing agency checklist, and pitch questions in 25 questions to ask an influencer marketing agency. If you're weighing an agency against building a team, see influencer marketing agency vs in-house.",
        links: [
          { text: "influencer marketing agency checklist", href: "/blog/influencer-marketing-agency-checklist" },
          { text: "25 questions to ask an influencer marketing agency", href: "/blog/influencer-marketing-agency-pitch-questions" },
          { text: "influencer marketing agency vs in-house", href: "/blog/influencer-marketing-agency-vs-in-house" },
        ],
      },
{ type: "heading", text: "In-house, agency or hybrid?", id: "in-house" },
      {
        type: "table",
        headers: ["", "In-house", "Agency", "Hybrid"],
        rows: [
          ["Best when", "Always-on creator programs, strong brand knowledge, steady volume", "Launches, new markets or categories, peaks, regulated categories", "In-house strategy and relationships; agency for sourcing, contracting and peaks"],
          ["Costs", "Salaries, tools, time", "Fees or margin on creator spend (ask which, ex GST)", "Smaller retained scope"],
          ["Compliance", "Your team must know ACL, AANA and sector rules", "Check the agency's process in writing", "Agree who checks claims and disclosure"],
          ["Risk", "Key-person dependency", "Less direct creator relationships", "Unclear responsibilities if not written down"],
        ],
      },
      {
        type: "paragraph",
        text: "Many Australian brands start with an agency for the first campaigns, learn what works, then bring always-on activity in-house. Whatever the model, keep creator contracts, content rights and results data in your name. The global comparison is in influencer marketing agency vs in-house, and briefing either team is easier with the influencer brief template for Australian brands.",
        links: [
          { text: "influencer marketing agency vs in-house", href: "/blog/influencer-marketing-agency-vs-in-house" },
          { text: "influencer brief template for Australian brands", href: "/blog/influencer-brief-template-australia" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Choosing on the most famous creator names in a pitch deck",
          "Accepting a single bundled fee",
          "Not asking how disclosure and claims are checked",
          "Signing a long retainer before a first campaign",
          "Assuming an agency's offshore creator results apply to Australian audiences",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "The right agency is the one that fits your objective, shows its working, protects you on compliance and reports honestly. Compare agencies on the same brief, look for transparency on fees, GST and rights, and start with a defined campaign you can judge.",
      },
    ],
    faqs: [
      {
        question: "What should I look for in an Australian influencer marketing agency?",
        answer:
          "A documented compliance process, creator recommendations backed by Australian audience data, separate lines for creator fees, agency fee and GST, clear usage rights, and reporting against your objective.",
      },
      {
        question: "How do influencer agencies in Australia charge?",
        answer:
          "Commonly a retainer, a project fee or a percentage of creator spend, plus creator fees and production. Ask whether creator fees are marked up and how GST is shown.",
      },
      {
        question: "Is an agency responsible if an influencer post misleads consumers?",
        answer:
          "Liability depends on the facts, and brands, agencies and creators can all be exposed under the Australian Consumer Law. Choose an agency with a disclosure and claims-review process, and take legal advice on specific situations.",
      },
    ],
  },
  // 1542
  {
    slug: "influencer-marketing-cost-australia",
    category: "Influencer Marketing",
    title: "Influencer Marketing Costs in Australia: Creator Fees and Campaign Budgets",
    seoTitle: "Influencer Marketing Costs in Australia: Fees and Budgets",
    excerpt:
      "What drives influencer marketing costs in Australia and how to build a budget in AUD: creator fee factors, usage rights and exclusivity, production, paid amplification, agency fees, GST and the tax treatment of gifted products, plus a worksheet and a labelled hypothetical. No invented rate cards.",
    metaDescription:
      "Influencer marketing costs in Australia: what drives creator fees, rights, exclusivity, production, agency fees and GST, with an AUD budget worksheet.",
    author: AU_AUTHOR,
    publishedAt: AU_PUBLISHED,
    updatedAt: "2026-10-10",
    lastReviewed: AU_REVIEWED,
    readingTime: "5 min read",
    inLanguage: AU_LANGUAGE,
    spatialCoverage: "Australia",
    breadcrumbParents: [AU_HUB],
    tags: ["influencer marketing cost Australia", "how much do influencers charge Australia", "influencer rates AUD", "influencer campaign budget Australia"],
    related: ["how-much-to-pay-influencers", "influencer-marketing-budget", "negotiate-influencer-rates"],
    hero: {
      src: "/blog/au-guides/influencer-marketing-cost-australia.svg",
      alt: "Building an Australian influencer budget: creator fees, rights and exclusivity, production, amplification, agency fee, GST",
    },
    body: [
      {
        type: "paragraph",
        text: "Most people searching for influencer costs want a number. The honest answer is that we found no independent, methodology-backed survey of Australian creator rates; published 'rate cards' are mostly modelled estimates from platforms selling services. This guide explains what actually drives cost, how to build an AUD budget from quotes, and the GST and tax points Australian brands should know.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Influencer marketing costs in Australia depend on the creator's audience and engagement, the platform and format, the number of deliverables, usage rights and exclusivity, production needs and any paid amplification. Build the budget bottom-up from several creator quotes, add agency fees and production, and remember GST: creators registered for GST add 10% to invoices. Gifted products count too: the ATO treats non-cash benefits received for work as income for the creator at market value.",
      },
      { type: "heading", text: "What drives creator fees", id: "drivers" },
      {
        type: "table",
        headers: ["Factor", "Effect on price"],
        rows: [
          ["Audience size and engagement", "Larger, more engaged audiences cost more; check how much of it is in Australia"],
          ["Niche and expertise", "Specialist creators (health, finance, trades, B2B) often charge more"],
          ["Platform and format", "Long-form YouTube integrations usually cost more than a Story"],
          ["Deliverables", "Each extra post, Story frame or revision adds cost"],
          ["Usage rights", "Using content in your ads, website or retail displays, and for how long"],
          ["Exclusivity", "Paying a creator not to work with competitors for a period"],
          ["Production", "Travel, locations, props, editing, talent"],
          ["Timing", "Peak seasons and short turnarounds"],
        ],
      },
      { type: "heading", text: "Other budget lines", id: "lines" },
      {
        type: "list",
        items: [
          "Product and shipping for creators",
          "Paid amplification of creator content (ad spend plus usage rights)",
          "Agency or management fees",
          "Measurement: tracking set-up, brand lift studies where used",
          "Contingency for reshoots or extra creators",
        ],
      },
      { type: "heading", text: "GST and tax", id: "gst" },
      {
        type: "paragraph",
        text: `Checked ${AU_REVIEW_DATE_TEXT}. General information, not tax advice. Businesses must register for GST once their GST turnover reaches $75,000, according to the ATO, so some creators will charge GST and others won't. Ask for each creator's ABN and GST status before contracting, and budget GST-inclusive. The ATO also says goods, services or other benefits received as payment for work count as income at market value, and gives an online influencer as an example; gifted products are therefore part of the commercial arrangement, not free.`,
        links: [
          { text: "according to the ATO", href: AU_SRC.atoGst.url },
          { text: "The ATO also says", href: AU_SRC.atoIncome.url },
        ],
      },
      { type: "heading", text: "A budget worksheet", id: "worksheet" },
      {
        type: "template",
        label: "AUD campaign budget",
        text: "Creator fees (ex GST):        A$ ______  (sum of quotes)\nUsage rights / exclusivity:   A$ ______\nProduct and shipping:          A$ ______\nProduction:                    A$ ______\nPaid amplification:            A$ ______\nAgency or management fee:      A$ ______\nMeasurement:                   A$ ______\nContingency (e.g. 10%):        A$ ______\nSubtotal (ex GST):             A$ ______\nGST where charged:             A$ ______\nTotal:                         A$ ______",
      },
{ type: "heading", text: "Budget by campaign goal", id: "by-goal" },
      {
        type: "table",
        headers: ["Goal", "Where the budget usually goes", "What to hold back"],
        rows: [
          ["Awareness", "More creators or larger creators; reach-focused formats; paid amplification of the best posts", "A share for amplifying what performs"],
          ["Consideration", "Fewer, more credible creators; longer formats such as reviews and tutorials", "Usage rights to reuse reviews"],
          ["Sales", "Creators with proven audiences in your market; links, codes and landing pages; affiliate commission", "A test budget before scaling winners"],
          ["Launch", "Seeding, embargoed content, a second wave of reviews, paid support in launch week", "Contingency for delays and stock"],
          ["Always-on", "Retainers or ambassador fees; content rights; management time", "Quarterly review points"],
        ],
      },
      {
        type: "paragraph",
        text: "This shows where money tends to go, not how much to spend; we found no independent Australian benchmark for budget splits. Build each line from quotes. For timing, see influencer campaign timelines in Australia, and for licence costs, influencer content in paid ads in Australia.",
        links: [
          { text: "influencer campaign timelines in Australia", href: "/blog/influencer-campaign-timeline-australia" },
          { text: "influencer content in paid ads in Australia", href: "/blog/creator-content-paid-ads-australia" },
        ],
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical, for illustration only; not market rates. A skincare brand plans six micro-creators on Instagram and TikTok. It collects quotes, which total A$9,000 ex GST for one Reel and three Stories each. It adds A$2,000 for 3 months' paid usage rights, A$600 for product and shipping, A$4,000 of amplification and a 10% contingency, then adds GST for the four creators who are registered. The point is the method: every line comes from a quote or a decision, not an average.",
      },
      { type: "heading", text: "Getting better quotes", id: "quotes" },
      {
        type: "list",
        items: [
          "Send a clear brief with deliverables, rights, exclusivity and timing; vague briefs get padded quotes",
          "Ask for the price of organic posting and paid usage separately",
          "Compare cost per expected result (reach in Australia, clicks or orders), not cost per post",
          "Negotiate on scope (fewer deliverables, shorter rights) rather than squeezing fees",
        ],
      },
      {
        type: "paragraph",
        text: "Negotiation is covered in how to negotiate influencer rates, and fee structures in how much to pay influencers.",
        links: [
          { text: "how to negotiate influencer rates", href: "/blog/negotiate-influencer-rates" },
          { text: "how much to pay influencers", href: "/blog/how-much-to-pay-influencers" },
        ],
      },
      {
        type: "paragraph",
        text: "If you're comparing agency proposals, check that creator fees, agency fees and GST are shown separately; see how to choose an influencer marketing agency in Australia.",
        links: [{ text: "how to choose an influencer marketing agency in Australia", href: "/blog/choose-influencer-marketing-agency-australia" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Budgeting from a rate card with no stated method",
          "Forgetting GST or usage rights",
          "Treating gifted products as free for the creator",
          "Paying for followers who live overseas",
          "No contingency",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "There is no reliable average price for an Australian influencer post. Build budgets from quotes against a clear brief, separate fees, rights, production and GST, and judge value by what each creator is likely to achieve for your objective.",
      },
    ],
    faqs: [
      {
        question: "How much do influencers charge in Australia?",
        answer:
          "It varies with audience, engagement, format, deliverables, rights and exclusivity. We found no independent survey of Australian rates, so collect several quotes against the same brief and compare cost per expected result.",
      },
      {
        question: "Do Australian influencers charge GST?",
        answer:
          "Those registered for GST do. Registration is required once GST turnover reaches $75,000, so check each creator's ABN and GST status and budget GST-inclusive.",
      },
      {
        question: "Are gifted products taxable for Australian influencers?",
        answer:
          "The ATO says goods or benefits received as payment for work are income at market value. Creators should take their own tax advice; brands should treat gifts as part of the commercial arrangement.",
      },
    ],
  },
  // 1543
  {
    slug: "influencer-advertising-rules-australia",
    category: "Influencer Marketing",
    title: "Australian Influencer Advertising Rules: ACCC, AANA and Disclosure Explained",
    seoTitle: "Australian Influencer Advertising Rules: ACCC and AANA",
    excerpt:
      "The rules for influencer advertising in Australia, explained for brands: the Australian Consumer Law and ACCC enforcement, the AANA Code of Ethics and Ad Standards, what counts as clear disclosure for paid, gifted and affiliate posts, fake and edited reviews, TGA and ABAC sector rules, children's advertising and a compliance checklist.",
    metaDescription:
      "Australian influencer advertising rules: consumer law, ACCC cases, AANA code and Ad Standards, disclosure for paid, gifted and affiliate posts.",
    author: AU_AUTHOR,
    publishedAt: AU_PUBLISHED,
    updatedAt: "2026-10-10",
    lastReviewed: AU_REVIEWED,
    readingTime: "6 min read",
    inLanguage: AU_LANGUAGE,
    spatialCoverage: "Australia",
    breadcrumbParents: [AU_HUB],
    tags: ["influencer advertising rules Australia", "ACCC influencer guidelines", "AANA influencer disclosure", "#ad disclosure Australia"],
    related: ["influencer-marketing-compliance", "find-vet-influencers-australia", "beauty-skincare-influencer-marketing-australia"],
    hero: {
      src: "/blog/au-guides/influencer-advertising-rules-australia.svg",
      alt: "Australian influencer rules: consumer law, AANA code, clear disclosure, sector rules for therapeutic goods and alcohol, records",
    },
    body: [
      {
        type: "paragraph",
        text: "Australia regulates influencer advertising through two layers: the Australian Consumer Law, which is legally binding and enforced by the ACCC, and industry self-regulation under the AANA codes, administered by Ad Standards. Sector rules add more for therapeutic goods and alcohol. This guide explains each layer for brands. It's general information, not legal advice; take advice for specific campaigns or disputes.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "In Australia, influencer posts must not be misleading or deceptive under the Australian Consumer Law, which means paid, gifted and affiliate relationships must be disclosed in a way that is immediately obvious, and product claims must be true and provable. The AANA Code of Ethics separately requires advertising to be clearly distinguishable as advertising; Ad Standards has found labels like 'gift' insufficient. Brands can be responsible too: the ACCC has penalised businesses that told influencers not to disclose or edited their reviews. Sunscreen and other therapeutic goods can't be promoted with paid or gifted testimonials, and alcohol influencers must follow the ABAC code.",
      },
      { type: "heading", text: "Law vs self-regulation", id: "layers" },
      {
        type: "table",
        headers: ["", "Australian Consumer Law", "AANA codes"],
        rows: [
          ["Type", "Legislation", "Industry self-regulation"],
          ["Main rule", "No misleading or deceptive conduct in trade or commerce", "Advertising must be clearly distinguishable as such (Code of Ethics clause 2.7)"],
          ["Who it applies to", "Businesses and influencers engaged in trade or commerce", "Advertisers and marketers"],
          ["Enforcement", "ACCC: infringement notices, court action, penalties", "Ad Standards Community Panel determinations; removal or amendment"],
          ["Sources", "ACCC guidance and cases", "AANA Code of Ethics, Ad Standards case reports"],
        ],
      },
      {
        type: "paragraph",
        text: "Sources: the AANA Code of Ethics and Ad Standards.",
        links: [
          { text: "AANA Code of Ethics", href: AU_SRC.aanaCode.url },
          { text: "Ad Standards", href: AU_SRC.adStandards.url },
        ],
      },
      { type: "heading", text: "What the ACCC has found", id: "accc" },
      {
        type: "paragraph",
        text: `Reviewed ${AU_REVIEW_DATE_TEXT}. The ACCC's internet sweep, published in December 2023, found that 81% of the 118 influencers reviewed made posts raising concerns about potentially misleading advertising, most often by not disclosing brand relationships, and flagged vague labels such as 'sp', 'spon' and 'collab' as unlikely to fix a misleading impression. In 2026 PhotobookShop paid $39,600 in penalties after the ACCC alleged it told influencers not to disclose that it paid them in free products and made undisclosed edits to a review, and Hismile paid $138,600 over social media videos presenting employees as 'random shoppers'. The ACCC also says businesses are responsible for false or misleading posts and comments others make on their own social media pages.`,
        links: [
          { text: "internet sweep, published in December 2023", href: AU_SRC.acccSweep.url },
          { text: "PhotobookShop paid $39,600", href: AU_SRC.acccPhotobook.url },
          { text: "Hismile paid $138,600", href: AU_SRC.acccHismile.url },
          { text: "businesses are responsible", href: AU_SRC.acccSocialPromotions.url },
        ],
      },
      { type: "heading", text: "What clear disclosure looks like", id: "disclosure" },
      {
        type: "table",
        headers: ["Relationship", "Disclose?", "Better practice"],
        rows: [
          ["Paid post", "Yes", "'Ad' or 'Advertisement' at the start, plus the platform's paid partnership label"],
          ["Gifted product with any expectation of content", "Yes", "Say it's an ad or gifted ad, not just 'gifted' or 'thanks to'"],
          ["Affiliate link or discount code with commission", "Yes", "State that you earn commission, near the link or code"],
          ["Brand ambassador or ongoing partnership", "Yes, in each post", "Don't rely on a bio statement alone"],
          ["Brand reposts creator content as its own ad", "It's the brand's advertising", "Make the ad clearly advertising; don't present it as a spontaneous review"],
          ["Hosted trip, event, meal or stay", "Yes", "Say it was hosted or paid for, in each post about it"],
          ["Employee, family member or investor", "Yes", "State the connection; don't present it as an ordinary customer's view"],
          ["Livestream with a sponsored segment", "Yes", "Say it out loud, keep an on-screen label and repeat it for people who join late"],
        ],
      },
      {
        type: "paragraph",
        text: "No single hashtag guarantees compliance. The test is whether the overall impression is clear: the label must be visible without expanding the caption, in the video itself for video formats, and in words the audience understands. Ad Standards upheld a complaint where the word 'gift' didn't make Instagram Stories clearly distinguishable as advertising.",
        links: [{ text: "upheld a complaint", href: AU_SRC.adStandardsGift.url }],
      },
{ type: "subheading", text: "Platform labels and their limits" },
      {
        type: "paragraph",
        text: `Use each platform's paid partnership or branded content tool, because it adds a visible label and gives the brand access to results. But a label on its own may not be enough if the content still looks like an independent opinion, or if the label is hard to see on a video. Put 'Ad' at the start of the caption and in the first seconds of the video as well. Disclosure also doesn't fix a misleading claim: a clearly labelled ad must still be accurate. The ACCC's December 2023 sweep report still says it plans targeted influencer guidance; as of our ${AU_REVIEW_DATE_TEXT} check we couldn't find it published.`,
        links: [{ text: "December 2023 sweep report", href: AU_SRC.acccSweepPage.url }],
      },
      { type: "heading", text: "Reviews and testimonials", id: "reviews" },
      {
        type: "list",
        items: [
          "Don't write, edit or ask for fake reviews; don't edit a creator's review without disclosure",
          "Don't present staff, family or paid people as ordinary customers",
          "Don't selectively hide negative reviews in a way that misleads",
          "Incentivised reviews must disclose the incentive",
        ],
      },
      {
        type: "paragraph",
        text: "The ACCC's guidance on online reviews explains these points for businesses.",
        links: [{ text: "ACCC's guidance on online reviews", href: AU_SRC.acccReviews.url }],
      },
      { type: "heading", text: "Sector rules", id: "sectors" },
      {
        type: "table",
        headers: ["Category", "Rule", "Source"],
        rows: [
          ["Therapeutic goods (medicines, supplements, sunscreens)", "Paid or incentivised testimonials aren't permitted; paid endorsements must be clearly identified as advertising; health professionals can't endorse", "TGA social media guidance (updated November 2025)"],
          ["Regulated health services (clinics, practitioners)", "Testimonials in advertising are banned; cosmetic procedure guidelines from 2 September 2025 strengthen the ban on influencer testimonials", "Ahpra"],
          ["Alcohol", "ABAC guidance: brands are responsible for influencer posts; influencers must be 25 or over and use 18+ audience controls", "ABAC influencer guide (July 2026)"],
          ["Advertising to children", "Advertising directed primarily at children under 15 must meet the Children's Advertising Code", "AANA Children's Code"],
          ["Financial products", "Recommendations can be unlicensed financial product advice; unique paid links can be 'dealing by arranging'; licensees can be liable", "ASIC INFO 269"],
          ["Food and drink to children", "Occasional food advertising must not target children under 15", "AANA Food & Beverages Code"],
          ["Environmental claims", "Specific, evidenced claims; avoid vague terms", "ACCC environmental claims guidance"],
          ["Gambling", "Separate laws and regulators apply", "Take specialist advice"],
        ],
      },
      {
        type: "paragraph",
        text: "Sources: the TGA's social media guidance, the ABAC guide for brands working with influencers, and the AANA Children's Advertising Code. Beauty specifics are in beauty and skincare influencer marketing in Australia; other sectors are covered in our guides to health, wellness and fitness, financial services, food and beverage and sustainability claims.",
        links: [
          { text: "TGA's social media guidance", href: AU_SRC.tgaSocial.url },
          { text: "health, wellness and fitness", href: "/blog/health-wellness-influencer-marketing-australia" },
          { text: "financial services", href: "/blog/financial-services-influencer-marketing-australia" },
          { text: "food and beverage", href: "/blog/food-beverage-influencer-marketing-australia" },
          { text: "sustainability claims", href: "/blog/greenwashing-influencer-marketing-australia" },
          { text: "ABAC guide for brands working with influencers", href: AU_SRC.abacInfluencers.url },
          { text: "AANA Children's Advertising Code", href: AU_SRC.aanaChildrensCode.url },
          { text: "beauty and skincare influencer marketing in Australia", href: "/blog/beauty-skincare-influencer-marketing-australia" },
        ],
      },
      { type: "heading", text: "A compliance checklist", id: "checklist" },
      {
        type: "list",
        items: [
          "Every paid, gifted and affiliate post disclosed clearly and upfront, in the brief and contract",
          "Approved claims with evidence on file",
          "No instructions to hide the relationship, and no undisclosed edits to creator reviews",
          "Sector check: therapeutic goods, alcohol, children, finance",
          "Comments on your own pages monitored for misleading content",
          "Records of briefs, approvals and final posts",
          "A plan for fixing a post quickly if disclosure is missing",
        ],
      },
      {
        type: "paragraph",
        text: "If the same campaign also runs in the UK, labels and responsibilities differ; see UK influencer advertising rules.",
        links: [
          { text: "UK influencer advertising rules", href: "/blog/influencer-advertising-rules-uk" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Relying on 'gifted', 'collab' or a brand tag",
          "Disclosure hidden after 'more' or at the end of a long caption",
          "Sunscreen testimonials from paid creators",
          "Assuming the creator carries all the risk",
          "Editing reviews without saying so",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Australian rules come down to honesty that's obvious to the audience: say clearly when content is advertising, make only claims you can prove, and follow the extra rules for health products, alcohol and children. Put disclosure and claims into every brief and contract, and take legal advice for complex arrangements.",
      },
    ],
    faqs: [
      {
        question: "Do Australian influencers have to disclose ads?",
        answer:
          "Yes. Undisclosed paid or gifted posts can be misleading under the Australian Consumer Law, and the AANA Code of Ethics requires advertising to be clearly distinguishable. Disclosure should be immediately obvious to the audience.",
      },
      {
        question: "Is #gifted enough in Australia?",
        answer:
          "Often not. Ad Standards has found 'gift' insufficient, and the ACCC has flagged vague labels like 'spon' and 'collab'. Use clear words such as 'Ad' or 'Advertisement', placed upfront.",
      },
      {
        question: "Can brands be penalised for influencer posts in Australia?",
        answer:
          "Yes. The ACCC penalised PhotobookShop in 2026 over influencer reviews, including instructing influencers not to disclose free products. Brands should brief, check and keep records.",
      },
    ],
  },
  // 1544 (+1557)
  {
    slug: "find-vet-influencers-australia",
    category: "Influencer Marketing",
    title: "How to Find and Vet Influencers in Australia: A Brand Safety Checklist",
    seoTitle: "How to Find and Vet Influencers in Australia",
    excerpt:
      "How Australian brands can find creators and check them before contracting: discovery methods, Australian audience location and quality, disclosure history, brand safety and content history, sector and age considerations, contracts and a printable vetting checklist, with the limits of public metrics and tools.",
    metaDescription:
      "Find and vet influencers in Australia: discovery, Australian audience checks, disclosure history, brand safety, sector and age rules, and a vetting checklist.",
    author: AU_AUTHOR,
    publishedAt: AU_PUBLISHED,
    updatedAt: "2026-10-10",
    lastReviewed: AU_REVIEWED,
    readingTime: "5 min read",
    inLanguage: AU_LANGUAGE,
    spatialCoverage: "Australia",
    breadcrumbParents: [AU_HUB],
    tags: ["find influencers Australia", "vet influencers Australia", "influencer brand safety Australia", "influencer vetting checklist"],
    related: ["how-to-vet-influencers", "influencer-marketing-brand-safety", "influencer-audience-quality"],
    hero: {
      src: "/blog/au-guides/find-vet-influencers-australia.svg",
      alt: "Finding and vetting Australian creators: discover, check Australian audience, review disclosure history, brand safety, contract",
    },
    body: [
      {
        type: "paragraph",
        text: "Finding creators in Australia is the easy part; checking them is where campaigns are won or lost. A creator with a large but mostly overseas audience, a history of undisclosed ads or content that conflicts with your brand can waste budget or create risk. This guide covers both steps, for brand and marketing teams building Australian shortlists.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Find Australian influencers through platform search and hashtags, location tags, competitor and category research, creator platforms and inbound applications. Before contracting, check that a meaningful share of the audience is in Australia (and in your target state or city), that engagement looks genuine, that past sponsored posts were clearly disclosed, that content history fits your brand, and that sector and age rules don't rule the creator out. Record the evidence, and remember public metrics and tools are estimates.",
      },
      { type: "heading", text: "Where to find creators", id: "discovery" },
      {
        type: "table",
        headers: ["Method", "Good for", "Limit"],
        rows: [
          ["Platform search and hashtags", "Niche and topic creators", "Time-consuming"],
          ["Location tags and local content", "City, suburb or regional creators", "Tags show where content was made, not where followers live"],
          ["Category and competitor research", "Creators already working in your category", "Check exclusivity"],
          ["Creator platforms and databases", "Filters by audience location", "Data is modelled; verify"],
          ["Customers and fans", "Authentic advocates", "May lack reach or experience"],
        ],
      },
      { type: "heading", text: "Audience checks", id: "audience" },
      {
        type: "list",
        items: [
          "Ask for screenshots of audience location by country and city from the platform's own analytics, dated",
          "Check age split, especially for youth categories and alcohol",
          "Look at who comments: real people from your market, or generic and repetitive accounts?",
          "Compare engagement over time; sudden spikes can signal bought engagement",
          "Check overlap if you're booking several creators in one niche",
        ],
      },
      {
        type: "paragraph",
        text: "Audience scoring is covered in influencer audience quality, and overlap in how to detect influencer audience overlap.",
        links: [
          { text: "influencer audience quality", href: "/blog/influencer-audience-quality" },
          { text: "how to detect influencer audience overlap", href: "/blog/influencer-audience-overlap" },
        ],
      },
{ type: "heading", text: "Estimating Australian audience share", id: "audience-share" },
      {
        type: "paragraph",
        text: "Total reach isn't useful if much of it is overseas. Estimate effective Australian reach for each creator before comparing prices. Use the platform's own audience data, not third-party estimates alone, and ask for screenshots dated within the last 30 days.",
      },
      {
        type: "template",
        label: "Effective Australian reach (per creator)",
        text: "Typical reach or views per post (median of last 10):   ______\nShare of audience in Australia (platform analytics):   ______ %\nShare in your target state or city, if local:          ______ %\n\nEffective Australian reach = typical reach × Australian share\nEffective local reach      = typical reach × local share\nCost per 1,000 effective Australian reach = fee ex GST ÷ effective reach × 1,000",
      },
      {
        type: "paragraph",
        text: "Hypothetical example: creator A reaches 40,000 per post with 85% of followers in Australia (34,000 effective); creator B reaches 90,000 with 30% in Australia (27,000 effective). At similar fees, A is better value for an Australian brand. Audience location for followers and for viewers of a specific post can differ, so ask for both where the platform shows them. City-level checks for local campaigns are in local and regional influencer marketing in Australia.",
        links: [{ text: "local and regional influencer marketing in Australia", href: "/blog/local-regional-influencer-marketing-australia" }],
      },
      { type: "heading", text: "Disclosure and compliance history", id: "disclosure" },
      {
        type: "list",
        items: [
          "Review the last 20–30 sponsored posts: were they clearly disclosed upfront?",
          "Look for vague labels ('gifted', 'collab', 'spon') or no label at all",
          "Check for health, sunscreen or alcohol content that wouldn't meet TGA or ABAC rules",
          "Search for past complaints or Ad Standards determinations involving the creator",
        ],
      },
      {
        type: "paragraph",
        text: "A creator who regularly fails to disclose is a risk to your brand as well as theirs; the ACCC has penalised businesses over influencer posts. The rules are in Australian influencer advertising rules.",
        links: [{ text: "Australian influencer advertising rules", href: "/blog/influencer-advertising-rules-australia" }],
      },
      { type: "heading", text: "Brand safety checklist", id: "brand-safety" },
      {
        type: "table",
        headers: ["Check", "What to look for"],
        rows: [
          ["Content history", "Statements, jokes or imagery that conflict with your values or audience"],
          ["Past partnerships", "Competitors, controversial brands, very frequent sponsorships"],
          ["Audience behaviour", "Comment sections with abuse or harassment the creator ignores"],
          ["Professional claims", "Health, finance or legal advice given without qualifications"],
          ["Age and audience", "Youth-heavy audiences for adult categories; creator age for alcohol"],
          ["Cultural respect", "Use of First Nations culture, imagery or places without permission"],
          ["Reliability", "Late or missed deliverables reported by other brands, where you can find out"],
        ],
      },
      {
        type: "paragraph",
        text: "Record what you found and when. Don't label a creator as fraudulent or unsafe publicly without strong evidence; simply decide not to work with them. A general framework is in influencer marketing brand safety, and detailed vetting steps in how to vet influencers.",
        links: [
          { text: "influencer marketing brand safety", href: "/blog/influencer-marketing-brand-safety" },
          { text: "how to vet influencers", href: "/blog/how-to-vet-influencers" },
        ],
      },
      { type: "heading", text: "Age and platform considerations", id: "age" },
      {
        type: "paragraph",
        text: "Since 10 December 2025, major platforms must take reasonable steps to prevent Australians under 16 from holding accounts. That affects which creators you can work with (under-16 creators can't hold accounts on those platforms) and who sees content. Implications for campaigns are covered in Australia's under-16 social media restrictions.",
        links: [{ text: "Australia's under-16 social media restrictions", href: "/blog/social-media-minimum-age-influencer-campaigns-australia" }],
      },
      { type: "heading", text: "Contract protections", id: "contract" },
      {
        type: "list",
        items: [
          "Disclosure wording and placement required in every post",
          "Approved claims only; draft approval before posting",
          "Right to request edits or removal if a post breaches the brief or the law",
          "Exclusivity and conflicts stated",
          "Usage rights, duration and paid use",
          "A morals or conduct clause appropriate to your brand",
        ],
      },
      { type: "heading", text: "The limits of tools and public metrics", id: "limits" },
      {
        type: "list",
        items: [
          "Follower counts and engagement rates can be inflated",
          "Fraud-detection scores are estimates from samples",
          "Audience location from tools is modelled; ask for first-party screenshots",
          "No check removes all risk; it reduces it and documents your diligence",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Choosing creators by follower count without checking Australian audience share",
          "Ignoring past undisclosed ads",
          "No brand-safety review of older content",
          "Booking youth-skewed creators for adult categories",
          "No written record of checks",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Good vetting is a short, repeatable checklist: Australian audience, genuine engagement, clean disclosure history, brand-safe content and the right age profile. Do it for every creator, record it, and write the protections into the contract.",
      },
    ],
    faqs: [
      {
        question: "How do I find influencers in Australia?",
        answer:
          "Use platform search and hashtags, location tags, category and competitor research, creator platforms with audience-location filters, and your own customers. Always verify audience location with the creator's own analytics.",
      },
      {
        question: "What should I check before hiring an Australian influencer?",
        answer:
          "Audience location and age, engagement quality, past disclosure of sponsored posts, content history and brand safety, sector rules for your category, and reliability. Record what you checked.",
      },
      {
        question: "Can brands work with influencers under 16 in Australia?",
        answer:
          "Major platforms must now take reasonable steps to prevent under-16s from holding accounts, so under-16 creators generally can't run their own accounts on those platforms. Take advice for any campaign involving minors.",
      },
    ],
  },
  // 1559
  {
    slug: "social-media-minimum-age-influencer-campaigns-australia",
    category: "Influencer Marketing",
    title: "Australia's Under-16 Social Media Restrictions: What Brands and Creator Campaigns Need to Review",
    seoTitle: "Australia's Under-16 Social Media Rules: A Brand Review",
    excerpt:
      "What Australia's social media minimum age means for brands and creator campaigns: which platforms are covered, what platforms must do, what the law doesn't do, how youth-skewed campaigns, creator selection, measurement and privacy plans should change, and what to watch next.",
    metaDescription:
      "Australia's under-16 social media restrictions for brands: covered platforms, what the law does and doesn't do, and how creator campaigns change.",
    author: AU_AUTHOR,
    publishedAt: AU_PUBLISHED,
    lastReviewed: AU_REVIEWED,
    readingTime: "5 min read",
    inLanguage: AU_LANGUAGE,
    spatialCoverage: "Australia",
    breadcrumbParents: [AU_HUB],
    tags: ["Australia under 16 social media ban brands", "social media minimum age Australia marketing", "eSafety age restriction influencers", "youth marketing Australia 2026"],
    related: ["influencer-advertising-rules-australia", "find-vet-influencers-australia", "influencer-marketing-australia"],
    hero: {
      src: "/blog/au-guides/social-media-minimum-age-influencer-campaigns-australia.svg",
      alt: "Under-16 restrictions review: covered platforms, audience age, creator age, measurement and privacy, ongoing monitoring",
    },
    body: [
      {
        type: "paragraph",
        text: "Since 10 December 2025, major social media platforms have had to take reasonable steps to prevent Australians under 16 from holding accounts. The law is aimed at platforms, not brands, but it changes who campaigns can reach and which creators brands can work with. This guide explains what the law does and doesn't do, and what brand and agency teams should review. It's general information based on official guidance at the time of review, not legal advice.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Australia's social media minimum age requires covered platforms (including Facebook, Instagram, Snapchat, Threads, TikTok, X, YouTube, Reddit, Kick and Twitch, according to eSafety) to take reasonable steps to stop under-16s from holding accounts. Penalties apply to platforms, not to children, parents, creators or brands. Brands should review youth-skewed campaigns, avoid creators under 16 on covered platforms, re-check audience age data, keep following advertising codes for children, and watch for the Children's Online Privacy Code.",
      },
      { type: "heading", text: "What the law does", id: "law" },
      {
        type: "list",
        items: [
          "Requires age-restricted social media platforms to take reasonable steps to prevent Australians under 16 from having accounts",
          "Applies from 10 December 2025",
          "Platforms face civil penalties of up to $49.5 million for failing to comply, according to eSafety",
          "Covered platforms named by eSafety: Facebook, Instagram, Kick, Reddit, Snapchat, Threads, TikTok, Twitch, X and YouTube; the list can change",
        ],
      },
      {
        type: "paragraph",
        text: `Checked ${AU_REVIEW_DATE_TEXT}. Sources: eSafety's list of age-restricted platforms, eSafety's FAQs and its media release on penalties. eSafety has also said services such as WhatsApp, Messenger, YouTube Kids, Discord, Pinterest and Roblox didn't meet the criteria when assessed; check the current list before planning.`,
        links: [
          { text: "eSafety's list of age-restricted platforms", href: AU_SRC.esafetyPlatforms.url },
          { text: "eSafety's FAQs", href: AU_SRC.esafetyFaq.url },
          { text: "its media release on penalties", href: AU_SRC.esafetyNotice.url },
        ],
      },
      { type: "heading", text: "What the law doesn't do", id: "not" },
      {
        type: "list",
        items: [
          "It doesn't penalise children, parents or carers, according to the government's fact sheet",
          "It doesn't stop under-16s viewing publicly available content without logging in",
          "It doesn't replace advertising codes, consumer law or privacy law, which still apply",
          "It isn't an advertising ban; it's an account-age rule for platforms",
        ],
      },
      {
        type: "paragraph",
        text: "Source: the Department of Infrastructure's Social Media Minimum Age fact sheet (January 2026).",
        links: [{ text: "Social Media Minimum Age fact sheet", href: AU_SRC.smmaFactSheet.url }],
      },
      { type: "heading", text: "What brands should review", id: "review" },
      {
        type: "table",
        headers: ["Area", "Question to ask", "Likely change"],
        rows: [
          ["Target audience", "Did the campaign rely on under-16s seeing content while logged in?", "Shift to parents, older teens, or channels outside the restriction"],
          ["Creators", "Are any creators under 16, or are accounts run for them?", "Don't book under-16 creators on covered platforms; take advice on family accounts"],
          ["Audience data", "Has the creator's audience age changed since December 2025?", "Request fresh, dated audience screenshots"],
          ["Content", "Is content still directed primarily at children under 15?", "Apply the AANA Children's Advertising Code"],
          ["Data and privacy", "Do you collect data from young people through campaigns?", "Prepare for the Children's Online Privacy Code"],
          ["Measurement", "Do historic youth benchmarks still apply?", "Reset baselines; compare like with like"],
        ],
      },
      { type: "heading", text: "Other rules still apply", id: "other-rules" },
      {
        type: "paragraph",
        text: "Advertising directed primarily at children under 15 must meet the AANA Children's Advertising Code. Separately, the OAIC released an exposure draft of a Children's Online Privacy Code in March 2026, with registration required by 10 December 2026; check whether it has commenced and what it requires before collecting young people's data. Consumer law disclosure rules apply to every sponsored post regardless of audience age.",
        links: [
          { text: "AANA Children's Advertising Code", href: AU_SRC.aanaChildrensCode.url },
          { text: "Children's Online Privacy Code", href: AU_SRC.oaicChildrensCode.url },
        ],
      },
      { type: "heading", text: "Planning youth-relevant campaigns now", id: "planning" },
      {
        type: "list",
        items: [
          "Speak to parents and families through parent creators, especially for products bought for children",
          "For 16–18 audiences, use creators whose audience data confirms that age group and be cautious with categories that need adult audiences",
          "Use platforms and formats outside the restriction only where they genuinely fit and their own rules allow",
          "Keep content age-appropriate even where under-16s may view logged out",
          "Document why you believe your campaign is not directed at under-16s on covered platforms",
        ],
      },
      {
        type: "paragraph",
        text: "Categories with young audiences have extra considerations: see our guides to gaming and esports, universities and education, and food and beverage brands.",
        links: [{ text: "gaming and esports", href: "/blog/gaming-esports-influencer-marketing-australia" }, { text: "universities and education", href: "/blog/education-influencer-marketing-australia" }, { text: "food and beverage brands", href: "/blog/food-beverage-influencer-marketing-australia" }],
      },
      { type: "heading", text: "What to watch", id: "watch" },
      {
        type: "list",
        items: [
          "Changes to eSafety's list of age-restricted platforms",
          "Enforcement actions and reports on compliance",
          "Proposed changes to penalties",
          "Commencement and final content of the Children's Online Privacy Code",
          "Platform changes to youth features and audience data",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Treating the law as an advertising ban, or ignoring it entirely",
          "Using audience data from before December 2025",
          "Booking creators under 16 on covered platforms",
          "Forgetting children's advertising and privacy rules",
          "Assuming the platform list is fixed",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "The minimum age law changes who's on Australian social platforms, not the rules for advertising. Review youth-skewed campaigns, creator choices, audience data and privacy plans, keep to the children's code, and check eSafety's guidance before each campaign, because the details are still evolving. The wider rules are in Australian influencer advertising rules.",
        links: [{ text: "Australian influencer advertising rules", href: "/blog/influencer-advertising-rules-australia" }],
      },
    ],
    faqs: [
      {
        question: "Which platforms are covered by Australia's under-16 social media restrictions?",
        answer:
          "According to eSafety: Facebook, Instagram, Kick, Reddit, Snapchat, Threads, TikTok, Twitch, X and YouTube. The list can change, so check eSafety's current page before planning.",
      },
      {
        question: "Can brands still advertise to teenagers in Australia?",
        answer:
          "The law restricts under-16 accounts on covered platforms; it isn't an advertising ban. Brands should reassess who their campaigns reach, follow the AANA Children's Advertising Code for under-15s, and consider privacy obligations.",
      },
      {
        question: "Are brands penalised under the social media minimum age law?",
        answer:
          "Penalties apply to platforms that fail to take reasonable steps, not to children, parents or brands. Brands remain subject to consumer law, advertising codes and privacy law.",
      },
    ],
  },
];
