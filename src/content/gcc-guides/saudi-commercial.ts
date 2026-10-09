import type { BlogPost } from "@/content/blog";
import { AUTHOR, GCC2_PUBLISHED, GCC_LANGUAGE, GCC_REVIEWED, REVIEW_DATE_TEXT, SAUDI_HUB, SRC } from "@/content/gcc-guides/shared";

/** Topics 1421–1423: agency evaluation, costs and rules for Saudi Arabia. No agency list, no invented rates. */
export const saudiCommercialPosts: BlogPost[] = [
  // 1423
  {
    slug: "saudi-influencer-advertising-rules",
    category: "Influencer Marketing",
    title: "Saudi Influencer Advertising Rules: What Brands and Creators Need to Verify",
    seoTitle: "Saudi Influencer Advertising Rules: Mawthooq and What to Verify",
    excerpt:
      "The rules that apply to influencer advertising in Saudi Arabia, separated by who they apply to: the Mawthooq licence for individual creators, licensing for advertising agencies and offices, disclosure under the E-Commerce Law, Ministry of Commerce licences for discounts and contests, and SFDA rules for regulated products.",
    metaDescription:
      "Saudi influencer advertising rules for brands: Mawthooq for creators, agency licensing, E-Commerce Law disclosure, discount licences and SFDA product rules.",
    author: AUTHOR,
    publishedAt: GCC2_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "11 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "Saudi Arabia",
    breadcrumbParents: [SAUDI_HUB],
    tags: ["Saudi influencer advertising rules", "Mawthooq licence", "GAMR influencer licence", "Saudi advertising regulations influencers", "influencer disclosure Saudi Arabia"],
    related: ["influencer-marketing-saudi-arabia", "choose-influencer-marketing-agency-saudi-arabia", "influencer-marketing-saudi-arabia-vs-uae"],
    hero: {
      src: "/blog/gcc-guides/saudi-influencer-advertising-rules.svg",
      alt: "Who each Saudi influencer advertising rule applies to: creators, agencies, advertisers and regulated product categories",
    },
    body: [
      {
        type: "paragraph",
        text: "Saudi Arabia regulates influencer advertising through several authorities at once. The media regulator licenses the people and companies doing the advertising, the Ministry of Commerce polices how online ads and promotions are presented, and sector regulators control what can be said about certain products. A brand that checks only one of these can still get a campaign wrong.",
      },
      {
        type: "paragraph",
        text: `Reviewed ${REVIEW_DATE_TEXT}. This page summarizes publicly reported requirements for planning purposes. It is not legal advice. The official service pages on the Saudi national portal and GAMR's e-services could not be loaded from our location when we reviewed this, so the details below are corroborated from reports of those pages; confirm current requirements with the relevant authority or a Saudi-licensed adviser before a campaign.`,
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Brands running influencer campaigns in Saudi Arabia should verify five things: that each creator holds a Mawthooq licence from the General Authority for Media Regulation (GAMR) and posts from the account registered to it; that any agency or advertising office involved holds the relevant GAMR licence; that every post clearly states it's an advertisement, as the E-Commerce Law requires for online commercial ads; that any discount, contest or giveaway has a Ministry of Commerce licence; and that products regulated by the Saudi Food and Drug Authority (SFDA) have any required advertising approval. Non-Saudi creators face additional conditions.",
      },
      { type: "heading", text: "Who each rule applies to", id: "map" },
      {
        type: "table",
        headers: ["Rule", "Applies to", "Authority", "What to check"],
        rows: [
          ["Mawthooq licence", "Individuals who publish advertising content on social media", "GAMR", "Licence is current; the account is the one registered and linked to the licence"],
          ["Advertising office, marketing office or agency licence", "Companies that create or run advertising and marketing campaigns", "GAMR", "The agency's licence and commercial registration cover the activity"],
          ["Advertisement disclosure", "Online commercial advertisements, including by promoters on social media", "Ministry of Commerce (E-Commerce Law)", "Each post clearly states that it's promotional"],
          ["Discount and contest licences", "Stores and online stores running discounts, competitions or prize promotions", "Ministry of Commerce", "Licence obtained before the promotion; terms match the licence"],
          ["Product advertising approval", "Advertisers of SFDA-regulated products", "SFDA", "Whether the product category needs approval before advertising"],
        ],
      },
      { type: "heading", text: "The Mawthooq licence for individual creators", id: "mawthooq" },
      {
        type: "paragraph",
        text: "The national portal lists the service as a licence for individuals publishing advertising content through social media, issued by GAMR. The conditions, as mirrored from the service page by a Saudi consultancy and consistent with Saudipedia and reporting at the scheme's launch, are:",
        links: [
          { text: "The national portal lists the service", href: SRC.myGovMawthooq.url },
          { text: "mirrored from the service page by a Saudi consultancy", href: SRC.vcoMawthooq.url },
          { text: "Saudipedia", href: SRC.saudipediaMawthooq.url },
        ],
      },
      {
        type: "list",
        items: [
          "Applicants are Saudi nationals or residents aged 18 or over, with no criminal record for offences involving dishonesty or breach of trust",
          "Content published in the six months before applying must comply with the authority's regulations",
          "Applicants prove ownership of the social media accounts they'll advertise through; advertising may only run on accounts registered with the authority and linked to the licence",
          "Licensees undertake to follow GAMR's content, advertising and age-classification controls, supply information on request, and stop advertising any content immediately if the authority asks",
          "Resident or foreign investors are listed as needing a licence for an audiovisual advertising office, marketing office or advertising agency, with an ownership share of at least 50%",
          "The government fee is reported as SAR 15,000, with a three-year term reported at the scheme's launch",
        ],
      },
      {
        type: "paragraph",
        text: "Arab News reported at launch in 2022 that non-Saudi residents would need representation by licensed agencies, and secondary sources since then describe the non-Saudi route differently. Treat the non-Saudi conditions as the area most likely to have changed, and confirm with GAMR before contracting a non-Saudi creator for Saudi advertising.",
        links: [{ text: "Arab News reported at launch in 2022", href: SRC.arabNewsMawthooq.url }],
      },
      { type: "subheading", text: "What the licence doesn't settle" },
      {
        type: "list",
        items: [
          "A UAE advertiser permit, or a licence in any other country, doesn't authorize advertising under Saudi rules",
          "A licensed creator still has to meet disclosure rules and product-specific requirements",
          "The brand remains responsible for the accuracy of what it asks creators to say",
          "Penalty amounts are reported differently across sources, so we haven't stated a figure; they include suspension of advertising as well as fines",
        ],
      },
      { type: "heading", text: "Licences for agencies and advertising offices", id: "agencies" },
      {
        type: "paragraph",
        text: "Separately from the individual licence, GAMR licenses advertising offices, marketing offices and advertising agencies: companies and institutions that design and run advertising and marketing campaigns. The service is listed on the national portal and on GAMR's e-services. If you hire an agency to run Saudi creator campaigns, ask which licences it holds, which entity will contract the creators, and how it handles non-Saudi creators. Our guide to choosing an influencer marketing agency in Saudi Arabia covers the other questions to ask.",
        links: [
          { text: "listed on the national portal", href: SRC.myGovAgency.url },
          { text: "GAMR's e-services", href: SRC.gamrAgency.url },
          { text: "choosing an influencer marketing agency in Saudi Arabia", href: "/blog/choose-influencer-marketing-agency-saudi-arabia" },
        ],
      },
      { type: "heading", text: "Disclosure under the E-Commerce Law", id: "disclosure" },
      {
        type: "paragraph",
        text: "In September 2022 the Ministry of Commerce announced penalties against 24 promoters for violations on Snapchat, Twitter (now X), Instagram and TikTok, including failure to disclose that content was advertising, misleading advertisements and promoting unlicensed activity, as reported by Asharq Al-Awsat. The ministry said penalties under the E-Commerce Law can reach SAR 1 million, with blocking of websites and bans on the activity. In practice:",
        links: [{ text: "as reported by Asharq Al-Awsat", href: SRC.mocPromoters2022.url }],
      },
      {
        type: "list",
        items: [
          "Every sponsored post, Story or video should state clearly, in the language of the content, that it's an advertisement",
          "Gifts, free stays and products in exchange for content are commercial relationships too; treat them the same way",
          "Don't promote businesses or products that aren't licensed to operate",
          "Keep claims accurate: prices, availability, results and comparisons",
        ],
      },
      { type: "heading", text: "Discounts, contests and giveaways", id: "promotions" },
      {
        type: "paragraph",
        text: "Discounts and competitions need a licence from the Ministry of Commerce before they run, for physical and online stores alike. Arab News reported the ministry referring 44 businesses for prosecution over unlicensed competitions and discounts, under the Anti-Commercial Fraud Law. If a creator announces your discount code or runs a giveaway for you, the licence is the business's responsibility, and the advertised terms should match the licensed terms. Check the current process with the Ministry of Commerce.",
        links: [
          { text: "Arab News reported", href: SRC.mocDiscountLicence.url },
          { text: "the Ministry of Commerce", href: SRC.mc.url },
        ],
      },
      { type: "heading", text: "Products regulated by the SFDA", id: "sfda" },
      {
        type: "paragraph",
        text: "In July 2024 the SFDA said the following product groups need its approval before they're advertised: medical equipment and supplies, crop-protection chemicals, animal feed, foodstuffs and over-the-counter medicines. Cosmetics weren't on that list, but cosmetic products must be listed with the SFDA and their claims must stay within cosmetic use. For pharmaceutical and herbal products, a summary of the SFDA's advertising guideline (version 7.0) reports that influencer advertising requires notifying the SFDA before publication, a contract with the influencer and a valid Mawthooq licence. Confirm what applies to your product directly with the SFDA.",
        links: [
          { text: "In July 2024 the SFDA said", href: SRC.sfdaPriorApproval.url },
          { text: "a summary of the SFDA's advertising guideline", href: SRC.sfdaPharmaAdGuide.url },
          { text: "the SFDA", href: SRC.sfda.url },
        ],
      },
      {
        type: "paragraph",
        text: "Other sectors, such as financial services, have their own regulators and promotion rules; check them for your category before briefing creators. How these rules play out for two common categories is covered in influencer marketing for beauty brands in Saudi Arabia and influencer marketing for e-commerce brands in Saudi Arabia.",
        links: [
          { text: "influencer marketing for beauty brands in Saudi Arabia", href: "/blog/influencer-marketing-beauty-brands-saudi-arabia" },
          { text: "influencer marketing for e-commerce brands in Saudi Arabia", href: "/blog/influencer-marketing-ecommerce-brands-saudi-arabia" },
        ],
      },
      { type: "heading", text: "A verification checklist for brands", id: "checklist" },
      {
        type: "list",
        items: [
          "Creator: Mawthooq licence confirmed, account registered and matching the one in the contract",
          "Non-Saudi creator: route confirmed with GAMR or a Saudi-licensed adviser before contracting",
          "Agency: GAMR licence and commercial registration for advertising and marketing activity",
          "Disclosure: wording and placement agreed in Arabic and any other language used",
          "Promotions: Ministry of Commerce licence for any discount, contest or giveaway, with matching terms",
          "Product: SFDA listing or advertising approval where the category requires it",
          "Claims: approved claims list reviewed; no therapeutic or misleading claims",
          "Records: licences, approvals, briefs and final posts kept on file",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Saudi influencer advertising is workable once you separate the questions: is this person licensed, is the agency licensed, is the ad disclosed, is the promotion licensed, and is the product allowed to be advertised this way? Answer each with evidence before content goes live, and recheck with the authorities, because these rules are still evolving. The wider planning context is in our guide to influencer marketing in Saudi Arabia.",
        links: [{ text: "influencer marketing in Saudi Arabia", href: "/blog/influencer-marketing-saudi-arabia" }],
      },
    ],
    faqs: [
      {
        question: "What is the Mawthooq licence?",
        answer:
          "Mawthooq is the licence the General Authority for Media Regulation issues to individuals who publish advertising content on social media in Saudi Arabia. Licensees may only advertise through accounts registered with the authority and must follow its content and advertising controls.",
      },
      {
        question: "Can non-Saudi influencers advertise in Saudi Arabia?",
        answer:
          "The licence is described as open to Saudi nationals and residents, with additional conditions for resident and foreign investors, including an agency or office licence. Requirements for non-Saudis have changed since launch and sources differ, so confirm with GAMR before contracting.",
      },
      {
        question: "Do influencer ads in Saudi Arabia have to be labelled?",
        answer:
          "Yes. The Ministry of Commerce has enforced the E-Commerce Law against promoters who failed to disclose that content was advertising. Label every sponsored post clearly in the language of the content.",
      },
      {
        question: "Do brands need a licence to run a discount through an influencer?",
        answer:
          "Discounts and competitions need a Ministry of Commerce licence before they run, and the business offering the promotion is responsible for it. The terms the creator announces should match the licence.",
      },
    ],
  },
  // 1421
  {
    slug: "choose-influencer-marketing-agency-saudi-arabia",
    category: "Influencer Marketing",
    title: "Influencer Marketing Agency in Riyadh: How Brands Should Evaluate Their Options",
    seoTitle: "Influencer Marketing Agency in Riyadh: How to Evaluate Options",
    excerpt:
      "How to evaluate influencer marketing agencies for Riyadh and wider Saudi campaigns: the licences to ask about, how they source and verify Saudi creators, Arabic and dialect capability, fee transparency, execution and reporting, with a proposal comparison template and red flags.",
    metaDescription:
      "Evaluating influencer marketing agencies in Riyadh and Saudi Arabia: licences, creator sourcing, Arabic capability, fees, execution, reporting and red flags.",
    author: AUTHOR,
    publishedAt: GCC2_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "10 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "Riyadh, Saudi Arabia",
    breadcrumbParents: [SAUDI_HUB],
    tags: ["influencer marketing agency Riyadh", "influencer marketing agency Saudi Arabia", "choose influencer agency KSA", "Saudi influencer agency evaluation"],
    related: ["saudi-influencer-advertising-rules", "influencer-marketing-cost-saudi-arabia", "choose-influencer-marketing-agency-uae"],
    hero: {
      src: "/blog/gcc-guides/choose-influencer-marketing-agency-saudi-arabia.svg",
      alt: "Evaluating a Saudi influencer agency: licences, creator sourcing, Arabic capability, fee transparency, execution and reporting",
    },
    body: [
      {
        type: "paragraph",
        text: "Search for an influencer marketing agency in Riyadh and you'll mostly find rankings published by agencies, directories that charge for placement, and pages from regional firms with a Saudi landing page. None of that tells you which partner suits your campaign. This guide sets out what to check, so you can compare agencies on evidence, including any that already have your attention.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To evaluate influencer marketing agencies for Saudi campaigns, check six areas: licensing (the agency's own GAMR licence and how it verifies creators' Mawthooq licences); creator sourcing and audience verification in the cities you care about; Arabic writing, dialect and cultural review capability; transparency on creator fees versus agency fees, in SAR with VAT shown; how campaigns are run day to day, including approvals and problem handling; and reporting tied to your objective. Ask two or three agencies to respond to the same written brief and compare proposals side by side.",
      },
      { type: "heading", text: "Decide what kind of help you need", id: "needs" },
      {
        type: "table",
        headers: ["Your situation", "What to prioritize in an agency"],
        rows: [
          ["Entering Saudi Arabia for the first time", "Market and regulatory guidance, Arabic creative, a test-and-learn plan"],
          ["Already selling, need more sales from creators", "Performance tracking, creator codes, paid amplification, reporting by creator"],
          ["Launching a venue, event or store in Riyadh", "Riyadh creator relationships, event coordination, footfall tracking"],
          ["Running Saudi alongside the UAE or other GCC markets", "Dedicated Saudi expertise inside a regional setup; separate reporting per country"],
          ["Regulated category (health, food, finance)", "Experience with approvals and claims review"],
        ],
      },
      { type: "heading", text: "Six areas to evaluate", id: "areas" },
      { type: "subheading", text: "1. Licensing and compliance" },
      {
        type: "list",
        items: [
          "Which GAMR licence does the agency hold for advertising and marketing activity, and under which commercial registration?",
          "How does it verify each creator's Mawthooq licence and registered account?",
          "How does it handle non-Saudi creators, given the additional conditions?",
          "Who checks E-Commerce Law disclosure, Ministry of Commerce promotion licences and SFDA rules?",
        ],
      },
      {
        type: "paragraph",
        text: "The rules behind these questions are explained in Saudi influencer advertising rules.",
        links: [{ text: "Saudi influencer advertising rules", href: "/blog/saudi-influencer-advertising-rules" }],
      },
      { type: "subheading", text: "2. Creator sourcing and verification" },
      {
        type: "list",
        items: [
          "How do they find creators beyond the most visible names?",
          "Can they show audience location by city, not just 'Saudi Arabia'?",
          "How do they check engagement quality and authenticity, and what tools and evidence do they use?",
          "Will they recommend creators they don't represent, or only their own roster?",
        ],
      },
      { type: "subheading", text: "3. Arabic and local market capability" },
      {
        type: "list",
        items: [
          "Who writes and reviews Arabic briefs and content, and which regions are they from?",
          "Can they work across Najdi, Hijazi, Eastern Province and other regional audiences?",
          "How well do they understand the national calendar, Ramadan and local events in Riyadh and other cities?",
          "Where is the team that will run your campaign, and how do they coordinate shoots and events in the Kingdom?",
        ],
      },
      { type: "subheading", text: "4. Fees and transparency" },
      {
        type: "list",
        items: [
          "Is the agency fee shown separately from creator fees, or bundled into a single rate?",
          "Are quotes in SAR, with 15% VAT shown?",
          "What's included: production, usage rights, paid amplification, reporting?",
          "When are creators paid? Late payment hurts your brand's reputation with creators",
        ],
      },
      { type: "subheading", text: "5. Execution" },
      {
        type: "list",
        items: [
          "Timeline from brief to first posts, and the approval steps",
          "How they brief creators without over-scripting",
          "What happens when a creator misses a deadline or a post has an error",
          "One named contact and a clear escalation route",
        ],
      },
      { type: "subheading", text: "6. Reporting" },
      {
        type: "list",
        items: [
          "Reporting against the objective agreed at the start, by creator and by city where possible",
          "Separation of organic and paid results",
          "Access to raw data, not only a presentation",
          "Learnings you can use for the next campaign",
        ],
      },
      { type: "heading", text: "Compare proposals side by side", id: "proposal-comparison" },
      {
        type: "table",
        headers: ["Item", "Agency A", "Agency B", "Agency C"],
        rows: [
          ["Understanding of our objective and audience", "", "", ""],
          ["Proposed creators, with reasons and audience data", "", "", ""],
          ["Licensing and compliance approach", "", "", ""],
          ["Arabic and dialect plan", "", "", ""],
          ["Agency fee (SAR, excl. VAT)", "", "", ""],
          ["Estimated creator fees (SAR, excl. VAT)", "", "", ""],
          ["Usage rights and paid amplification", "", "", ""],
          ["Tracking and reporting plan", "", "", ""],
          ["Team and point of contact", "", "", ""],
        ],
      },
      {
        type: "paragraph",
        text: "Give every agency the same written brief so proposals are comparable. Our influencer campaign brief template for UAE brands can be adapted for Saudi Arabia: replace the UAE permit fields with Mawthooq, GAMR and Ministry of Commerce checks.",
        links: [{ text: "influencer campaign brief template for UAE brands", href: "/blog/influencer-campaign-brief-template-uae" }],
      },
      { type: "heading", text: "Riyadh-specific considerations", id: "riyadh" },
      {
        type: "list",
        items: [
          "Riyadh has a dense calendar of events and entertainment seasons; ask how the agency secures creators when demand peaks",
          "For openings and events, check whether the agency can coordinate in person and manage creator attendance",
          "A Riyadh campaign may need different creators from a Jeddah or Eastern Province campaign; ask how they'd handle a national rollout",
        ],
      },
      { type: "heading", text: "Red flags", id: "red-flags" },
      {
        type: "list",
        items: [
          "No clear answer on licences, or suggestions that Mawthooq doesn't matter",
          "Guaranteed results such as sales, followers or 'viral' reach",
          "A single bundled price with no breakdown of creator and agency fees",
          "Creator recommendations without audience data",
          "Rankings or awards offered as the main evidence of capability",
          "Contracts that leave you without access to content or data afterwards",
        ],
      },
      {
        type: "paragraph",
        text: "A clause-by-clause contract checklist is in influencer marketing agency checklist, and the same evaluation applied to the UAE is in how to choose an influencer marketing agency for a UAE campaign.",
        links: [
          { text: "influencer marketing agency checklist", href: "/blog/influencer-marketing-agency-checklist" },
          { text: "how to choose an influencer marketing agency for a UAE campaign", href: "/blog/choose-influencer-marketing-agency-uae" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "The right Saudi agency can show you how it would reach your audience, in the right Arabic, with licensed creators and reporting you can trust. Ask the same questions of every agency, compare written proposals, and start with a defined first campaign before committing to a long retainer.",
      },
    ],
    faqs: [
      {
        question: "What licences should an influencer marketing agency in Saudi Arabia have?",
        answer:
          "Agencies that design and run advertising and marketing campaigns are licensed by the General Authority for Media Regulation, alongside their commercial registration. Ask which licence an agency holds and how it verifies creators' Mawthooq licences.",
      },
      {
        question: "Should I choose a Riyadh-based agency?",
        answer:
          "Local presence helps with events, shoots and creator relationships, but what matters most is evidence: Saudi creator sourcing, Arabic capability, licensing, transparent fees and reporting. Apply the same checks to local, regional and international agencies.",
      },
      {
        question: "How do I compare agency proposals fairly?",
        answer:
          "Send every agency the same written brief and compare their understanding of your objective, proposed creators with audience data, compliance approach, Arabic plan, fees in SAR with VAT shown, rights, tracking and team.",
      },
    ],
  },
  // 1422
  {
    slug: "influencer-marketing-cost-saudi-arabia",
    category: "Campaign Strategy",
    title: "How Much Does Influencer Marketing Cost in Saudi Arabia?",
    seoTitle: "Influencer Marketing Cost in Saudi Arabia (SAR): A Brand Guide",
    excerpt:
      "What drives influencer costs in Saudi Arabia, how to build a campaign budget in SAR, what published rate estimates say and why to treat them with caution, and how VAT, usage rights, exclusivity, paid amplification and licensing affect the final number.",
    metaDescription:
      "Influencer marketing cost in Saudi Arabia: what drives creator fees, published SAR estimates and their limits, VAT, rights, exclusivity and a budget worksheet.",
    author: AUTHOR,
    publishedAt: GCC2_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "10 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "Saudi Arabia",
    breadcrumbParents: [SAUDI_HUB],
    tags: ["influencer marketing cost Saudi Arabia", "influencer rates Saudi Arabia", "influencer price SAR", "Saudi influencer campaign budget"],
    related: ["influencer-marketing-saudi-arabia", "gcc-influencer-marketing-budget", "choose-influencer-marketing-agency-saudi-arabia"],
    hero: {
      src: "/blog/gcc-guides/influencer-marketing-cost-saudi-arabia.svg",
      alt: "Components of a Saudi influencer campaign budget in SAR: creator fees, rights and exclusivity, production, paid amplification, agency fee and VAT",
    },
    body: [
      {
        type: "paragraph",
        text: "Ask what influencer marketing costs in Saudi Arabia and you'll find confident tables of per-post prices. They're a starting point at best. Two creators with the same follower count can quote very different fees, and the post itself is often not the biggest cost: usage rights, exclusivity, production, paid amplification and VAT can change the total considerably. This guide explains what drives the price and how to budget for it.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "There's no official rate card for Saudi creators. Fees depend on audience size and quality, platform and format, number of deliverables, usage rights, exclusivity, timing and the creator's demand. Two agency-published guides from mid-2026 give similar indicative per-post ranges, roughly SAR 500 to 3,000 for nano creators, SAR 2,500 to 15,000 for micro creators, SAR 15,000 to 75,000 for macro creators and SAR 75,000 upwards for the largest names, but neither explains its method. Use them as orientation only, get quotes for your actual brief, and add rights, amplification, production, agency fees and 15% VAT to the creator fees.",
      },
      { type: "heading", text: "What drives creator fees", id: "drivers" },
      {
        type: "table",
        headers: ["Factor", "Effect on price"],
        rows: [
          ["Audience size and quality", "Larger, more engaged and more relevant Saudi audiences cost more; reach outside the Kingdom is worth less to a Saudi campaign"],
          ["Platform and format", "A Snapchat Story series, a TikTok video, an Instagram Reel and a YouTube integration take different effort and are priced differently"],
          ["Number of deliverables", "Packages usually cost less per item than single posts"],
          ["Production", "Shoots on location, travel, props or a crew raise the fee"],
          ["Usage rights", "Using the content in your own ads or on your channels is normally priced separately"],
          ["Paid amplification", "Running ads through the creator's account is usually an additional fee"],
          ["Exclusivity", "Barring competitors for a period is priced by category breadth and duration"],
          ["Timing", "Ramadan, Eid, National Day and major seasons increase demand"],
          ["Creator category", "Specialist creators in categories such as automotive, finance or tech can command more"],
          ["Licensing", "Creators carry the cost of their Mawthooq licence, which some build into rates"],
        ],
      },
      { type: "heading", text: "What published estimates say", id: "estimates" },
      {
        type: "paragraph",
        text: "The figures below come from Catchers, published in June 2026, and from Influencer Marketing Hub, updated in May 2026, which attributes its ranges to Starngage reports. Both are commercial publishers, neither describes how the figures were collected, and the ranges don't say whether VAT, usage rights or production are included. They're estimates, not market data.",
        links: [
          { text: "Catchers", href: SRC.catchersCostKsa.url },
          { text: "Influencer Marketing Hub", href: SRC.imhKsa.url },
        ],
      },
      {
        type: "table",
        headers: ["Tier (followers)", "Catchers, per post (SAR)", "Influencer Marketing Hub, per post (SAR)"],
        rows: [
          ["Nano (1K to 10K)", "500 to 2,500", "750 to 3,000"],
          ["Micro (10K to 100K)", "2,500 to 15,000", "3,000 to 15,000"],
          ["Macro (100K to 1M)", "15,000 to 75,000", "15,000 to 75,000"],
          ["Mega (1M+)", "75,000 to 500,000+", "75,000 to 300,000+"],
        ],
      },
      {
        type: "list",
        items: [
          "Published estimate: a figure in a guide like the ones above, with no disclosed method",
          "Creator's quoted rate: what a creator or their manager asks for a specific brief",
          "Negotiated fee: what's agreed after scope, rights, timing and package size are settled",
        ],
      },
      {
        type: "paragraph",
        text: "Budget from quoted and negotiated fees for your brief. Treat published ranges as a sense check, not a target.",
      },
      { type: "heading", text: "Costs beyond creator fees", id: "other-costs" },
      {
        type: "table",
        headers: ["Line item", "What it covers", "Notes"],
        rows: [
          ["Usage rights", "Using creator content in your ads, website or retail", "Agree channels, duration and territory"],
          ["Paid amplification", "Ad spend behind creator content, plus any fee for running through the creator's account", "Ad spend is separate from creator fees"],
          ["Production", "Shoots, locations, travel, props", "Higher for events and premium formats"],
          ["Product and gifting", "Samples, gifted products, hosted visits", "Count the cost, including delivery"],
          ["Agency or management fee", "Strategy, sourcing, contracting, approvals, reporting", "Ask for it separately from creator fees"],
          ["Arabic copy and review", "Briefs, captions, subtitles, native review", "Essential for most Saudi campaigns"],
          ["Promotion licences", "Ministry of Commerce licence for discounts or contests", "Required before the promotion runs"],
          ["VAT", "15% on taxable supplies", "Confirm whether each quote includes VAT"],
          ["Contingency", "Replacements, reshoots, extra amplification", "Commonly 10% to 15% of the total"],
        ],
      },
      { type: "heading", text: "A budget worksheet", id: "worksheet" },
      {
        type: "template",
        label: "Saudi influencer campaign budget (SAR): copy and adapt",
        text: `Objective and primary metric:
Regions / cities:
Language(s) and dialect(s):
Campaign window (avoid or plan for Ramadan, Eid, National Day):

CREATOR FEES (quoted, excl. VAT)
Creator | Platform | Deliverables | Fee (SAR)
-
-
Subtotal creator fees:

ADDITIONAL CREATOR COSTS (excl. VAT)
Usage rights (channels, duration):
Paid amplification access via creator accounts:
Exclusivity (category, duration):
Production / travel / hosting:
Product and gifting:

PAID MEDIA
Ad spend behind creator content:

AGENCY AND SUPPORT (excl. VAT)
Agency or management fee:
Arabic copy, subtitles and native review:

COMPLIANCE
Promotion licence (if discounts or contests):
Product approvals (if SFDA-regulated):

Subtotal before VAT:
VAT (15% where applicable):
Contingency (10% to 15%):
TOTAL (SAR):

Target cost per result (e.g. per delivered order, per activated user):`,
      },
      { type: "heading", text: "An illustrative example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical, for illustration only: a skincare brand plans a four-week test in Riyadh and Jeddah with eight micro creators. Quoted creator fees total SAR 64,000 for two videos each, usage rights for paid ads add SAR 12,000, ad spend behind the best content is SAR 30,000, Arabic review and subtitles SAR 4,000, and an agency fee SAR 18,000. That's SAR 128,000 before VAT, of which ad spend may be invoiced by the platform. Adding 15% VAT to taxable items and a 10% contingency gives the planning total. None of these numbers is a benchmark or a Kudozz client figure; your quotes will differ.",
      },
      { type: "heading", text: "Getting better value", id: "value" },
      {
        type: "list",
        items: [
          "Book early for Ramadan and national occasions",
          "Prefer packages over single posts with creators who perform",
          "Buy rights you'll actually use, for the period you need",
          "Test with mid-sized and micro creators whose audiences are in your cities before committing to the largest names",
          "Pay for results where the economics allow; see performance-based influencer marketing",
        ],
      },
      {
        type: "paragraph",
        text: "How to find good smaller creators is in how to find micro-influencers in Saudi Arabia, how to structure pay around outcomes in performance-based influencer marketing, and how to split spend across several Gulf countries in GCC influencer marketing budgets.",
        links: [
          { text: "how to find micro-influencers in Saudi Arabia", href: "/blog/find-micro-influencers-saudi-arabia" },
          { text: "performance-based influencer marketing", href: "/blog/performance-based-influencer-marketing" },
          { text: "GCC influencer marketing budgets", href: "/blog/gcc-influencer-marketing-budget" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "In Saudi Arabia, the price of a post is only part of the cost of a campaign. Budget from real quotes for your brief, add rights, amplification, production, Arabic review, compliance and VAT, keep a contingency, and judge the spend by cost per result rather than by the headline fee.",
      },
    ],
    faqs: [
      {
        question: "How much do Saudi influencers charge per post?",
        answer:
          "There's no official rate card. Agency-published estimates from mid-2026 range from a few hundred or a few thousand SAR for nano creators to SAR 75,000 and above for the largest names, without disclosed methods. Quotes for your specific brief are the reliable figure.",
      },
      {
        question: "Is VAT charged on influencer fees in Saudi Arabia?",
        answer:
          "VAT in Saudi Arabia is 15% on taxable supplies, and creators or agencies registered for VAT will add it. Confirm whether each quote includes VAT.",
      },
      {
        question: "What is a realistic budget for a first Saudi influencer campaign?",
        answer:
          "It depends on the objective, number of creators, rights and amplification. Build it from quotes using a worksheet that includes creator fees, rights, production, ad spend, agency fees, Arabic review, compliance, VAT and a contingency.",
      },
    ],
  },
];
