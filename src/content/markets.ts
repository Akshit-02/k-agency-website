/**
 * Market landing pages (/markets/[slug]): the commercial layer for brands outside India.
 *
 * The blog clusters (UAE/GCC, Australia, UK) are buyer guides; these pages say what Kudozz does in each market.
 * Kudozz has confirmed it delivers campaigns in all six markets (owner confirmation, 2026-10-12). Nothing here
 * claims a local office, local staff, local clients, case studies or results: none are verified. Rules are
 * summarised from primary sources (checked dates below) and from the cluster source registers in
 * src/content/{gcc,au,uk}-guides/shared.ts. See docs/international-seo-audit.md before adding a market.
 */

export type MarketLink = { label: string; url: string };

export type MarketRule = { title: string; body: string; sources: MarketLink[] };

export type Market = {
  slug: string;
  /** Display name, e.g. "the UAE" is written out in copy; this is the bare name. */
  name: string;
  /** Country for schema.org areaServed. */
  country: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  /** Open Graph locale and schema inLanguage for the market's English variant. */
  ogLocale: string;
  inLanguage: string;
  /** CTA topic passed as ?t= to the inquiry form (mapped in BrandInquiryForm). */
  ctaTopic: string;
  /** Cities and regions this page owns, so separate city pages aren't needed. */
  coverage: string;
  delivery: string[];
  services: { slug: string; note: string }[];
  rules: MarketRule[];
  platformsAndLanguages: string[];
  marketFacts?: { text: string; source: MarketLink }[];
  sectors: { name: string; href: string }[];
  proposal: string[];
  faqs: { question: string; answer: string }[];
  /** Blog guides for this market, shown as "Guides for brands in …". */
  guides: string[];
  reviewed: string;
};

const REVIEWED = "October 2026";

/** Shared delivery facts. Contracting entity is a fact; office and team location are deliberately not claimed. */
const ENTITY_LINE =
  "Kudozz Studios Private Limited is registered in India. Contracting, invoicing currency and working hours are agreed per campaign, so ask us how they would work for yours.";

export const markets: Market[] = [
  {
    slug: "uae",
    name: "UAE",
    country: "United Arab Emirates",
    seoTitle: "Influencer Marketing Agency in Dubai and the UAE",
    metaDescription:
      "Influencer campaigns for brands in Dubai, Abu Dhabi and across the UAE: strategy, permit-checked creators, Arabic and English content and reporting.",
    h1: "Influencer marketing agency for brands in Dubai and the UAE",
    intro: [
      "Kudozz plans and runs influencer and creator campaigns for brands selling in the UAE. We define the audience segment first (Emirati nationals, Arabic-speaking residents, South Asian communities, Western expatriates or visitors), shortlist creators whose audiences are actually in the Emirates, check their advertiser permits, manage contracts and content, and report results against one KPI agreed before launch.",
      "This page covers Dubai, Abu Dhabi, Sharjah and the northern emirates. Rules, platforms and campaign planning are the same across the UAE; the audience and creator mix are what change from one emirate to another.",
    ],
    ogLocale: "en_AE",
    inLanguage: "en-AE",
    ctaTopic: "UAE: Market Page",
    coverage: "Dubai, Abu Dhabi, Sharjah and the northern emirates",
    delivery: [
      "Full campaigns or single services: strategy, creator discovery, outreach and contracts, content approvals, publishing and reporting.",
      "Creators based in the UAE who hold a valid advertiser permit. If you want a visiting creator, we tell you before shortlisting that they need a visitor permit.",
      "Arabic, English or bilingual content, chosen by segment rather than by default.",
      ENTITY_LINE,
    ],
    services: [
      { slug: "campaign-strategy", note: "Segment-first planning: which communities, which emirates, which language, and the calendar around Ramadan, Eid and the cooler season." },
      { slug: "creator-discovery", note: "Shortlists screened for UAE audience share, permit status and category fit, not follower count." },
      { slug: "outreach-management", note: "Contracts that cover permit status, usage rights, approvals and disclosure, with one point of contact." },
      { slug: "ugc-campaigns", note: "Arabic and English UGC for paid social, marketplaces and your site, with rights cleared up front." },
      { slug: "product-launches", note: "Launch sequencing for store openings, product drops and Ramadan or Eid moments." },
      { slug: "reporting", note: "Results by creator against the agreed KPI, with retailer and marketplace sales tracked where attribution allows." },
    ],
    rules: [
      {
        title: "Creators need an Advertiser Permit",
        body: "Under Federal Decree-Law No. 55 of 2023, people who publish advertising content on social media in the UAE need an Advertiser Permit, whether they are paid in cash or in products, stays or other benefits. Enforcement began on 31 January 2026, and the National Media Authority is now the regulator. We check permit status before a creator is shortlisted.",
        sources: [
          { label: "National Media Authority: Advertiser Permit", url: "https://www.nmo.gov.ae/en/initiatives/advertiser-permit-1" },
          { label: "Pinsent Masons: UAE influencer licence deadline (January 2026)", url: "https://www.pinsentmasons.com/out-law/news/uae-influencer-licence-deadline-looms" },
        ],
      },
      {
        title: "Visiting creators need a visitor permit",
        body: "Creators who are not UAE residents need a Visitor Advertiser Permit, arranged through an accredited agency, before they post sponsored content from the UAE. Factor the lead time into flown-in creator trips.",
        sources: [{ label: "National Media Authority: Visitor Advertiser Permit", url: "https://www.nmo.gov.ae/en/initiatives/visitor-advertiser-permit" }],
      },
      {
        title: "Health and financial claims carry extra approvals",
        body: "Health and medical claims can need approval from MOHAP, DHA or DoH, and creators who promote financial products fall under the Securities and Commodities Authority's finfluencer rules. We flag these categories at briefing, not after drafts are made.",
        sources: [
          { label: "Pinsent Masons: SCA Resolution No. 10 of 2025 on finfluencers", url: "https://www.pinsentmasons.com/out-law/news/uae-new-licensing-regime-finfluencers" },
        ],
      },
      {
        title: "Personal data",
        body: "Campaigns that collect leads or entries must handle personal data under the UAE's data protection law, Federal Decree-Law No. 45 of 2021.",
        sources: [{ label: "UAE legislation portal: Federal Decree-Law No. 45 of 2021", url: "https://uaelegislation.gov.ae/en/legislations/1972" }],
      },
    ],
    platformsAndLanguages: [
      "Instagram, TikTok, Snapchat and YouTube are the main creator platforms; LinkedIn for B2B. The right mix depends on the segment.",
      "Arabic for Emirati and many Arab expatriate audiences, English for mixed and Western audiences, and Hindi, Urdu, Malayalam or Tagalog creators for South Asian and Filipino communities.",
      "Ramadan, Eid al-Fitr, Eid al-Adha, summer and the October–April cooler season shape timing and creative.",
    ],
    sectors: [
      { name: "Beauty", href: "/blog/influencer-marketing-beauty-brands-uae" },
      { name: "Fashion", href: "/blog/influencer-marketing-fashion-brands-dubai" },
      { name: "Restaurants", href: "/blog/restaurant-influencer-marketing-dubai" },
      { name: "E-commerce", href: "/blog/influencer-marketing-ecommerce-brands-uae" },
      { name: "Travel", href: "/blog/influencer-marketing-travel-brands-uae" },
      { name: "Healthcare and wellness", href: "/blog/influencer-marketing-healthcare-wellness-uae" },
      { name: "Fintech", href: "/blog/influencer-marketing-fintech-brands-uae" },
      { name: "B2B", href: "/blog/b2b-influencer-marketing-dubai" },
      { name: "Mobile apps", href: "/blog/mobile-app-influencer-marketing-uae" },
      { name: "Events and exhibitions", href: "/blog/influencer-marketing-events-exhibitions-dubai" },
    ],
    proposal: [
      "Your product, price point and where it is sold (own site, marketplaces, retail, venues).",
      "The audience segment and emirates you need to reach.",
      "One primary objective: awareness, footfall, sales, app installs or leads.",
      "Language preference, if you have one, and any brand guidelines in Arabic.",
      "Your budget range in AED or USD, and any fixed dates such as a launch or Ramadan.",
      "Whether your category needs regulatory approval for claims (health, finance, alcohol-free venues, education).",
    ],
    faqs: [
      {
        question: "Does Kudozz run influencer campaigns in Dubai and the rest of the UAE?",
        answer:
          "Yes. Kudozz runs influencer campaigns for brands selling in the UAE, from strategy and creator discovery to contracts, content approvals, publishing and reporting. Kudozz Studios Private Limited is registered in India, and contracting and working hours are agreed per campaign.",
      },
      {
        question: "Do UAE influencers need a licence to post sponsored content?",
        answer:
          "Yes. Under Federal Decree-Law No. 55 of 2023, people who publish advertising content on social media in the UAE need an Advertiser Permit, whether paid in cash or in kind, with enforcement from 31 January 2026. Visiting creators need a Visitor Advertiser Permit through an accredited agency. Kudozz checks permit status before shortlisting.",
      },
      {
        question: "Should a UAE influencer campaign be in Arabic or English?",
        answer:
          "It depends on the segment. Arabic usually suits Emirati and many Arab expatriate audiences, English suits mixed and Western audiences, and some campaigns need both or a South Asian language. Kudozz picks the language from the audience you need, not by default.",
      },
      {
        question: "What does an influencer campaign in the UAE cost?",
        answer:
          "There is no standard rate card. Cost depends on creator tier, number of creators, deliverables, usage rights, production, permits for visiting creators and timing, with Ramadan and peak season usually costing more. Kudozz sizes the creator mix to your budget and shows creator fees separately from agency fees.",
      },
      {
        question: "Can you run one campaign across the UAE and Saudi Arabia?",
        answer:
          "Yes, but plan it as two markets. Licensing (the UAE Advertiser Permit and Saudi Arabia's Mawthooq licence), dialect, platforms and audience behaviour differ, so creators, briefs and reporting are set up per country and compared fairly.",
      },
    ],
    guides: [
      "influencer-marketing-uae",
      "uae-advertiser-permit",
      "choose-influencer-marketing-agency-uae",
      "arabic-vs-english-influencer-campaigns-uae",
      "ramadan-influencer-marketing-uae",
      "ugc-agencies-dubai",
      "influencer-campaign-brief-template-uae",
      "instagram-vs-tiktok-vs-snapchat-uae",
    ],
    reviewed: REVIEWED,
  },
  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    country: "Saudi Arabia",
    seoTitle: "Influencer Marketing Agency in Saudi Arabia",
    metaDescription:
      "Influencer campaigns for brands in Saudi Arabia: Mawthooq-licensed creators, Arabic briefs by dialect, Snapchat, TikTok and YouTube plans, SAR reporting.",
    h1: "Influencer marketing agency for brands in Saudi Arabia",
    intro: [
      "Kudozz plans and runs influencer campaigns for brands selling in Saudi Arabia. We start from one objective and an audience defined by city, age and language, shortlist Saudi creators who hold a valid Mawthooq licence, brief them in Arabic in the right dialect, and report results in SAR against the KPI agreed before launch.",
      "This page covers Riyadh, Jeddah, the Eastern Province and the rest of the Kingdom. We plan Saudi Arabia as its own market rather than as an extension of a UAE campaign.",
    ],
    ogLocale: "en_SA",
    inLanguage: "en",
    ctaTopic: "KSA: Market Page",
    coverage: "Riyadh, Jeddah, Dammam and the Eastern Province, and the rest of the Kingdom",
    delivery: [
      "Full campaigns or single services: strategy, creator discovery, outreach and contracts, content approvals, publishing and reporting.",
      "Saudi creators with a valid Mawthooq licence, checked before shortlisting.",
      "Arabic-first briefs adapted to dialect and region, with English where the audience needs it.",
      ENTITY_LINE,
    ],
    services: [
      { slug: "campaign-strategy", note: "Objective, city and audience first, then the platform mix across Snapchat, TikTok, YouTube, Instagram and X." },
      { slug: "creator-discovery", note: "Licence-checked shortlists with Saudi audience share and dialect fit, including micro-creators by city." },
      { slug: "outreach-management", note: "Arabic contracts and briefs, approvals and disclosure checks with one point of contact." },
      { slug: "ugc-campaigns", note: "Arabic UGC for paid social and marketplaces, briefed by dialect, with usage rights agreed up front." },
      { slug: "social-campaigns", note: "Multi-creator pushes timed around Ramadan, Eid, Saudi National Day and Riyadh Season." },
      { slug: "reporting", note: "Creator-level results in SAR, with Saudi results kept separate from other GCC markets." },
    ],
    rules: [
      {
        title: "Creators need a Mawthooq licence",
        body: "Influencers who advertise in Saudi Arabia need a Mawthooq licence issued by the General Authority for Media Regulation (GAMR). We check the licence before a creator is shortlisted and keep a record for the campaign file.",
        sources: [
          { label: "General Authority for Media Regulation (GAMR)", url: "https://gamr.gov.sa/en" },
          { label: "Saudipedia: What is the Mawthooq licence", url: "https://saudipedia.com/en/what-is-the-mawthooq-license" },
        ],
      },
      {
        title: "Content standards and claims",
        body: "Content must respect Saudi media content standards, and health, financial and other regulated claims need the relevant approvals. We review drafts for claims and cultural fit before anything goes live.",
        sources: [{ label: "Kudozz guide: Saudi influencer advertising rules", url: "/blog/saudi-influencer-advertising-rules" }],
      },
      {
        title: "Personal data",
        body: "Lead-generation and competition campaigns must follow Saudi Arabia's Personal Data Protection Law, in force since 14 September 2023.",
        sources: [{ label: "CMS: Saudi Personal Data Protection Law", url: "https://cms.law/en/are/legal-updates/one-year-anniversary-saudi-personal-data-protection-law" }],
      },
    ],
    platformsAndLanguages: [
      "Snapchat, TikTok and YouTube carry much of Saudi creator marketing; Instagram and X matter for specific audiences and categories.",
      "Arabic first, adapted to Najdi, Hijazi or other dialects where the audience is regional; English for some expatriate and B2B audiences.",
      "Ramadan, Eid al-Fitr, Eid al-Adha, Saudi National Day (23 September) and seasonal events shape timing.",
    ],
    sectors: [
      { name: "Beauty", href: "/blog/influencer-marketing-beauty-brands-saudi-arabia" },
      { name: "E-commerce", href: "/blog/influencer-marketing-ecommerce-brands-saudi-arabia" },
      { name: "Gaming and esports", href: "/blog/gaming-esports-influencer-marketing-saudi-arabia" },
      { name: "FMCG", href: "/blog/fmcg-influencer-marketing-uae-saudi-arabia" },
      { name: "Automotive", href: "/blog/automotive-influencer-marketing-uae-saudi-arabia" },
      { name: "Film and streaming", href: "/blog/film-streaming-influencer-marketing-saudi-arabia-uae" },
    ],
    proposal: [
      "Your product, price point and where Saudi customers buy it.",
      "The cities and audience you need, and whether you need regional dialects.",
      "One primary objective and how you will measure it (sales, installs, leads, footfall or reach).",
      "Your budget range in SAR or USD and any fixed dates.",
      "Brand guidelines and any Arabic copy you already use.",
      "Whether your category needs approvals for claims.",
    ],
    faqs: [
      {
        question: "Does Kudozz run influencer campaigns in Saudi Arabia?",
        answer:
          "Yes. Kudozz runs influencer campaigns for brands selling in Saudi Arabia: strategy, licence-checked creator discovery, Arabic briefs, contracts, approvals, publishing and reporting in SAR. Kudozz Studios Private Limited is registered in India, and contracting is agreed per campaign.",
      },
      {
        question: "What is a Mawthooq licence?",
        answer:
          "Mawthooq is the licence that influencers who advertise in Saudi Arabia need from the General Authority for Media Regulation (GAMR). Brands should confirm every creator's licence before contracting; Kudozz checks it before shortlisting.",
      },
      {
        question: "Which platforms work best for influencer marketing in Saudi Arabia?",
        answer:
          "Snapchat, TikTok and YouTube carry much of Saudi creator marketing, with Instagram and X useful for particular audiences. The right platform depends on the objective and audience, so Kudozz sets the mix in the strategy rather than defaulting to one.",
      },
      {
        question: "Is Saudi Arabia planned separately from the UAE?",
        answer:
          "Yes. Licensing, dialect, platform habits, audience and seasonality differ, so Kudozz plans, briefs and reports on Saudi Arabia as its own market, even when it runs alongside a UAE campaign.",
      },
    ],
    guides: [
      "influencer-marketing-saudi-arabia",
      "saudi-influencer-advertising-rules",
      "choose-influencer-marketing-agency-saudi-arabia",
      "influencer-marketing-cost-saudi-arabia",
      "tiktok-influencer-marketing-saudi-arabia",
      "snapchat-influencer-marketing-saudi-arabia",
      "find-micro-influencers-saudi-arabia",
      "influencer-marketing-saudi-arabia-vs-uae",
    ],
    reviewed: REVIEWED,
  },
  {
    slug: "uk",
    name: "UK",
    country: "United Kingdom",
    seoTitle: "Influencer Marketing Agency in the UK",
    metaDescription:
      "Influencer campaigns for brands in the UK: ASA and CMA-compliant briefs, creator vetting, contracts, paid usage rights and reporting tied to one agreed KPI.",
    h1: "Influencer marketing agency for brands in the UK",
    intro: [
      "Kudozz plans and runs influencer and creator campaigns for brands selling in the UK. We set one objective, shortlist creators whose audiences are in the UK and fit your category, write ASA and CMA disclosure rules into contracts and briefs, manage approvals and usage rights, and report results creator by creator.",
      "This page covers England, Scotland, Wales and Northern Ireland, including London, Manchester and Birmingham. Regional differences (Welsh-language audiences, Northern Ireland promotions, city-level targeting) are planned inside one UK campaign rather than as separate city projects.",
    ],
    ogLocale: "en_GB",
    inLanguage: "en-GB",
    ctaTopic: "UK: Market Page",
    coverage: "England, Scotland, Wales and Northern Ireland, including London, Manchester and Birmingham",
    delivery: [
      "Full campaigns or single services: strategy, creator discovery, outreach and contracts, content approvals, publishing and reporting.",
      "UK creators vetted for UK audience share, engagement quality and past disclosure.",
      "Contracts and briefs that require 'Ad' labelling and cover usage rights for paid social.",
      ENTITY_LINE,
    ],
    services: [
      { slug: "campaign-strategy", note: "One KPI, the platform mix and a calendar built around UK retail moments such as Black Friday and Christmas." },
      { slug: "creator-discovery", note: "UK audience share, engagement quality and a check of each creator's past ad labelling." },
      { slug: "outreach-management", note: "Contracts that require upfront 'Ad' labels, set approval steps and agree paid usage rights." },
      { slug: "ugc-campaigns", note: "Creator content licensed for paid social and your site, treated as advertising from the start." },
      { slug: "ambassador-programs", note: "Longer creator partnerships, with disclosure kept up for the life of the relationship." },
      { slug: "reporting", note: "Creator-level results against the agreed KPI, separating organic posts from paid amplification." },
    ],
    rules: [
      {
        title: "Ads must be obviously identifiable",
        body: "The ASA and CMA's joint influencer guide expects any post with a commercial relationship (payment, gifts, affiliate links or brand control) to be labelled clearly and upfront, usually with 'Ad'. Brands, creators and agencies are all responsible.",
        sources: [{ label: "ASA, CAP and CMA: Influencers' guide to making clear that ads are ads", url: "https://www.asa.org.uk/resource/influencers-guide.html" }],
      },
      {
        title: "Consumer law now has direct fines",
        body: "Since 6 April 2025, hidden advertising is covered by Part 4 of the Digital Markets, Competition and Consumers Act 2024. The CMA can fine businesses directly, up to 10% of global turnover, and the rules apply across brands, creators and intermediaries.",
        sources: [
          { label: "CMA: Who regulates hidden advertising?", url: "https://assets.publishing.service.gov.uk/media/68b81754536d629f9c82aa16/Who_regulates_hidden_advertising.pdf" },
          { label: "CMS: the CMA's consumer enforcement guidance", url: "https://cms.law/en/gbr/legal-updates/judge-jury-and-executioner-the-cma-publishes-its-final-consumer-enforcement-guidance" },
        ],
      },
      {
        title: "Sector rules: food, alcohol, gambling, medicines, finance",
        body: "Less healthy food and drink advertising rules apply from 5 January 2026 and cover influencers. Alcohol, gambling and prescription-only medicines have their own CAP rules, and financial promotions on social media fall under the FCA's FG24/1 guidance.",
        sources: [
          { label: "ASA: new rules on ads for less healthy food and drink", url: "https://www.asa.org.uk/news/new-rules-on-ads-for-less-healthy-food-and-drink-products.html" },
          { label: "FCA: FG24/1 financial promotions on social media", url: "https://www.fca.org.uk/publications/finalised-guidance/fg24-1-finalised-guidance-financial-promotions-social-media" },
        ],
      },
    ],
    platformsAndLanguages: [
      "Instagram, TikTok and YouTube for most consumer campaigns; LinkedIn for B2B; TikTok Shop and YouTube Shopping affiliates for commerce-led campaigns.",
      "British English throughout; Welsh-language creators where a Wales audience matters.",
      "Black Friday, Christmas, January sales, Valentine's Day, Mother's Day (March in the UK) and summer shape the calendar.",
    ],
    marketFacts: [
      {
        text: "UK creator partnership revenue was £966m in 2025 and is forecast to pass £1bn in 2026 (excluding paid amplification).",
        source: { label: "IAB UK and IRM", url: "https://www.iabuk.com/news-article/uk-creator-revenue-surpass-ps1bn-first-time-2026" },
      },
    ],
    sectors: [
      { name: "E-commerce", href: "/blog/ecommerce-influencer-marketing-uk" },
      { name: "Regulated products", href: "/blog/regulated-products-influencer-marketing-uk" },
      { name: "Seasonal campaigns", href: "/blog/seasonal-influencer-marketing-uk" },
      { name: "Giveaways", href: "/blog/influencer-giveaways-uk" },
      { name: "Regional campaigns", href: "/blog/regional-influencer-marketing-uk" },
    ],
    proposal: [
      "Your product, price point and where UK customers buy it.",
      "The audience and any nations or regions that matter.",
      "One primary objective and how you measure it today.",
      "Your budget range in GBP or USD, and fixed dates such as a launch or Black Friday.",
      "Whether the product falls under food, alcohol, gambling, medicines or financial rules.",
      "Whether you want to run creator content as paid ads.",
    ],
    faqs: [
      {
        question: "Does Kudozz run influencer campaigns in the UK?",
        answer:
          "Yes. Kudozz runs influencer campaigns for brands selling in the UK: strategy, creator discovery, contracts, approvals, publishing and reporting, with ASA and CMA disclosure rules built into briefs and contracts. Kudozz Studios Private Limited is registered in India, and contracting is agreed per campaign.",
      },
      {
        question: "What are the UK rules for influencer advertising?",
        answer:
          "If there is a commercial relationship, the post must be clearly identifiable as an ad, usually with an upfront 'Ad' label. The ASA enforces the CAP Code, and since 6 April 2025 the CMA can fine businesses directly under the DMCC Act. Food, alcohol, gambling, medicines and financial products have extra rules.",
      },
      {
        question: "Do you need separate campaigns for London, Manchester or Scotland?",
        answer:
          "Usually not. Kudozz plans one UK campaign and selects creators by where their audience is, adding regional creators or Welsh-language content where a nation or city matters to the brand.",
      },
      {
        question: "How much does UK influencer marketing cost?",
        answer:
          "There is no standard UK rate card. Cost depends on creator tier, platform, deliverables, usage rights for paid ads, exclusivity and timing. Kudozz sizes the creator mix to your budget and shows creator fees separately from agency fees.",
      },
    ],
    guides: [
      "influencer-marketing-uk",
      "influencer-advertising-rules-uk",
      "choose-influencer-marketing-agency-uk",
      "influencer-marketing-cost-uk",
      "regulated-products-influencer-marketing-uk",
      "seasonal-influencer-marketing-uk",
      "ecommerce-influencer-marketing-uk",
      "regional-influencer-marketing-uk",
    ],
    reviewed: REVIEWED,
  },
  {
    slug: "australia",
    name: "Australia",
    country: "Australia",
    seoTitle: "Influencer Marketing Agency in Australia",
    metaDescription:
      "Influencer campaigns for brands in Australia: creator vetting, ACL and AANA-compliant disclosure, TGA checks, under-16 rules and reporting tied to one KPI.",
    h1: "Influencer marketing agency for brands in Australia",
    intro: [
      "Kudozz plans and runs influencer and creator campaigns for brands selling in Australia. We set one objective, shortlist creators whose audiences are in Australia, make sure every paid, gifted or affiliate post is clearly disclosed and makes only claims you can prove, and report results creator by creator in AUD.",
      "This page covers Sydney, Melbourne, Brisbane, Perth, Adelaide and regional Australia. State and city targeting is handled inside one Australian campaign through creator selection.",
    ],
    ogLocale: "en_AU",
    inLanguage: "en-AU",
    ctaTopic: "AU: Market Page",
    coverage: "Sydney, Melbourne, Brisbane, Perth, Adelaide and regional Australia",
    delivery: [
      "Full campaigns or single services: strategy, creator discovery, outreach and contracts, content approvals, publishing and reporting.",
      "Australian creators vetted for local audience share, engagement quality and disclosure history.",
      "Briefs that cover the Australian Consumer Law, the AANA Code and sector rules such as the TGA's.",
      ENTITY_LINE,
    ],
    services: [
      { slug: "campaign-strategy", note: "Objective, platform mix and timing around EOFY, Click Frenzy, Black Friday and Christmas." },
      { slug: "creator-discovery", note: "Australian audience share, age profile (with the under-16 rules in mind) and category fit." },
      { slug: "outreach-management", note: "Contracts covering disclosure, claim substantiation, usage rights and GST." },
      { slug: "ugc-campaigns", note: "Creator content licensed for paid social, treated as advertising under the ACL and AANA Code." },
      { slug: "product-launches", note: "Launch sequencing with seeding, embargoes and coordinated launch-day coverage." },
      { slug: "reporting", note: "Creator-level results against the agreed KPI, with organic and paid separated." },
    ],
    rules: [
      {
        title: "Consumer law applies to brands and creators",
        body: "Misleading influencer posts can breach the Australian Consumer Law, enforced by the ACCC, for both brand and creator. The ACCC's sweep found widespread non-disclosure, and it has since taken enforcement action.",
        sources: [{ label: "ACCC: social media influencer testimonials and endorsements", url: "https://www.accc.gov.au/about-us/publications/social-media-influencer-testimonials-and-endorsements" }],
      },
      {
        title: "Advertising must be clearly distinguishable",
        body: "Clause 2.7 of the AANA Code of Ethics requires advertising to be clearly distinguishable as such. Ad Standards handles complaints and has upheld cases where labels like 'gift' were not clear enough.",
        sources: [{ label: "AANA Code of Ethics", url: "https://aana.com.au/code-of-ethics/" }],
      },
      {
        title: "Therapeutic goods and the under-16 rules",
        body: "Paid or gifted testimonials for therapeutic goods (which include sunscreen and many supplements) are not allowed under the TGA's rules. From December 2025, age-restricted platforms must stop under-16s holding accounts, which changes how youth-facing campaigns are planned.",
        sources: [
          { label: "TGA: advertising therapeutic goods on social media", url: "https://www.tga.gov.au/resources/guidance/advertising-therapeutic-goods-social-media" },
          { label: "eSafety: social media age restrictions FAQs", url: "https://www.esafety.gov.au/about-us/industry-regulation/social-media-age-restrictions/faqs" },
        ],
      },
    ],
    platformsAndLanguages: [
      "Instagram, TikTok and YouTube for most consumer campaigns; LinkedIn for B2B; Pinterest for home and lifestyle.",
      "Australian English; multicultural creators where your audience includes Chinese, Indian, Vietnamese or other communities.",
      "EOFY (June), Click Frenzy, Black Friday, Christmas and summer shape the calendar.",
    ],
    marketFacts: [
      {
        text: "Six in ten Australian shoppers, and more than eight in ten under 40, pass through creator content before they buy.",
        source: { label: "IAB Australia, Creator Connect Report 2026", url: "https://www.iabaustralia.com.au/resource/creator-connect-report-2026/" },
      },
    ],
    sectors: [
      { name: "E-commerce", href: "/blog/ecommerce-influencer-marketing-australia" },
      { name: "Beauty and skincare", href: "/blog/beauty-skincare-influencer-marketing-australia" },
      { name: "Health and wellness", href: "/blog/health-wellness-influencer-marketing-australia" },
      { name: "Food and beverage", href: "/blog/food-beverage-influencer-marketing-australia" },
      { name: "Tourism", href: "/blog/tourism-influencer-marketing-australia" },
      { name: "Financial services", href: "/blog/financial-services-influencer-marketing-australia" },
      { name: "Small business", href: "/blog/small-business-influencer-marketing-australia" },
    ],
    proposal: [
      "Your product, price point and where Australians buy it.",
      "The audience, including age range, and any states or cities that matter.",
      "One primary objective and how you measure it today.",
      "Your budget range in AUD or USD, and fixed dates such as EOFY or a launch.",
      "Whether the product is a therapeutic good, alcohol, financial product or makes environmental claims.",
      "Whether you want to run creator content as paid ads.",
    ],
    faqs: [
      {
        question: "Does Kudozz run influencer campaigns in Australia?",
        answer:
          "Yes. Kudozz runs influencer campaigns for brands selling in Australia: strategy, creator discovery, contracts, approvals, publishing and reporting, with ACL, AANA and sector rules built into briefs. Kudozz Studios Private Limited is registered in India, and contracting is agreed per campaign.",
      },
      {
        question: "What are the rules for influencer marketing in Australia?",
        answer:
          "Posts with a commercial relationship must be clearly identifiable as advertising (AANA Code clause 2.7), and misleading posts can breach the Australian Consumer Law for both brand and creator. Therapeutic goods, alcohol and financial products have extra rules, and platforms must keep under-16s off age-restricted services from December 2025.",
      },
      {
        question: "Do you need separate campaigns for Sydney and Melbourne?",
        answer:
          "Usually not. Kudozz plans one Australian campaign and chooses creators whose audiences are in the states or cities that matter, adding local creators where a city or region is the focus.",
      },
      {
        question: "How much does influencer marketing cost in Australia?",
        answer:
          "There is no standard rate card. Cost depends on creator tier, platform, deliverables, usage rights, exclusivity, production and GST. Kudozz sizes the creator mix to your budget and shows creator fees separately from agency fees.",
      },
    ],
    guides: [
      "influencer-marketing-australia",
      "influencer-advertising-rules-australia",
      "choose-influencer-marketing-agency-australia",
      "influencer-marketing-cost-australia",
      "find-vet-influencers-australia",
      "social-media-minimum-age-influencer-campaigns-australia",
      "influencer-contracts-australia",
      "influencer-brief-template-australia",
    ],
    reviewed: REVIEWED,
  },
  {
    slug: "singapore",
    name: "Singapore",
    country: "Singapore",
    seoTitle: "Influencer Marketing Agency in Singapore",
    metaDescription:
      "Kudozz runs influencer campaigns for brands in Singapore: ASAS-compliant disclosure, MAS and MOH sector checks, multilingual creators, management and reporting.",
    h1: "Influencer marketing agency for brands in Singapore",
    intro: [
      "Kudozz plans and runs influencer and creator campaigns for brands selling in Singapore. We set one objective, shortlist creators whose audiences are in Singapore, choose language by audience (English, Mandarin, Malay or Tamil), build ASAS disclosure rules into every brief and contract, and report results creator by creator in SGD.",
      "Singapore is a compact, highly connected market: DataReportal counted 5.33 million social media user identities in October 2025, equal to 90.6% of the population. That makes audience overlap between creators a real planning issue, so we check it before shortlisting.",
    ],
    ogLocale: "en_SG",
    inLanguage: "en-SG",
    ctaTopic: "SG: Market Page",
    coverage: "Singapore",
    delivery: [
      "Full campaigns or single services: strategy, creator discovery, outreach and contracts, content approvals, publishing and reporting.",
      "Singapore creators vetted for local audience share, engagement quality and overlap with other creators on the shortlist.",
      "English, Mandarin, Malay or Tamil content, chosen by audience.",
      ENTITY_LINE,
    ],
    services: [
      { slug: "campaign-strategy", note: "One KPI, the platform mix and language choice, timed around 11.11, Chinese New Year, Hari Raya, Deepavali and year-end sales." },
      { slug: "creator-discovery", note: "Local audience share, engagement quality and audience overlap between creators in a small market." },
      { slug: "outreach-management", note: "Contracts that require clear, early disclosure, set approval steps and agree usage rights." },
      { slug: "ugc-campaigns", note: "Multilingual UGC for paid social, marketplaces and your site, with rights cleared up front." },
      { slug: "social-campaigns", note: "Coordinated multi-creator pushes for launches and shopping festivals." },
      { slug: "reporting", note: "Creator-level results against the agreed KPI, with marketplace and site sales tracked where attribution allows." },
    ],
    rules: [
      {
        title: "Disclose commercial relationships clearly and early",
        body: "The ASAS Guidelines for Interactive Marketing Communication and Social Media, part of the Singapore Code of Advertising Practice, require marketing to be identified as such and any commercial relationship (payment, free samples, favours or invitations) to be disclosed. Disclosures should appear as early as possible, show that the content is paid for, be readable on any device and not be hidden behind a link. They apply to brands, agencies and creators alike.",
        sources: [
          { label: "ASAS: Guidelines for Interactive Marketing Communication and Social Media (2016)", url: "https://asas.org.sg/About/Social-Media" },
        ],
      },
      {
        title: "No fake engagement, no misleading claims",
        body: "The same guidelines ban boosting engagement through bought likes, fake accounts or view-generating programmes. False or misleading claims are also an unfair practice under the Consumer Protection (Fair Trading) Act.",
        sources: [{ label: "ASAS: Consumer Protection (Fair Trading) Act", url: "https://asas.org.sg/Resources/CPFTA" }],
      },
      {
        title: "Financial products: MAS digital advertising guidelines",
        body: "MAS's Guidelines on Standards of Conduct for Digital Advertising Activities took effect on 25 March 2026. They apply to financial institutions and their digital marketers, including content creators, and expect institutions to vet, brief and monitor the creators they use.",
        sources: [
          { label: "MAS: Guidelines on Standards of Conduct for Digital Advertising Activities", url: "https://www.mas.gov.sg/regulation/guidelines/guidelines-on-standards-of-conduct-for-digital-advertising-activities" },
          { label: "MAS: initiatives to promote responsible online financial content (September 2025)", url: "https://www.mas.gov.sg/news/media-releases/2025/initiatives-to-promote-responsible-online-financial-content" },
        ],
      },
      {
        title: "Healthcare services and personal data",
        body: "Under the Healthcare Services (Advertisement) Regulations 2021, social media influencers may not advertise licensable healthcare services such as aesthetic treatments. Campaigns that send marketing messages to Singapore numbers must also follow the PDPA's Do Not Call rules.",
        sources: [
          { label: "Ministry of Health: regulation of advertisements for aesthetic treatments (January 2024)", url: "https://www.moh.gov.sg/news-highlights/details/regulation-of-advertisements-for-aesthetic-treatments" },
          { label: "PDPC: Do Not Call Registry and your business", url: "https://www.pdpc.gov.sg/Organisations/Do-Not-Call-Registry-and-Your-Business" },
        ],
      },
    ],
    platformsAndLanguages: [
      "YouTube, TikTok, Instagram and Facebook for consumer campaigns; LinkedIn for B2B and technology brands. DataReportal's late-2025 ad-reach figures put YouTube at 90.6% of the population and TikTok at 75.4% of adults.",
      "English, Mandarin, Malay and Tamil are Singapore's four official languages; the right one depends on the audience segment.",
      "Chinese New Year, Hari Raya Puasa, Deepavali, the Great Singapore Sale, 9.9, 11.11 and 12.12 shape timing.",
    ],
    marketFacts: [
      {
        text: "5.33 million social media user identities in Singapore in October 2025, equal to 90.6% of the population.",
        source: { label: "DataReportal, Digital 2026: Singapore", url: "https://datareportal.com/reports/digital-2026-singapore" },
      },
    ],
    // No Singapore sector guides yet; the page links general guides instead of India-specific ones.
    sectors: [],
    proposal: [
      "Your product, price point and where Singapore customers buy it (own site, Shopee, Lazada, retail).",
      "The audience segment and preferred language.",
      "One primary objective and how you measure it today.",
      "Your budget range in SGD or USD, and fixed dates such as a launch or 11.11.",
      "Whether the product is a financial product, health product or healthcare service.",
      "Whether you want to run creator content as paid ads.",
    ],
    faqs: [
      {
        question: "Does Kudozz run influencer campaigns in Singapore?",
        answer:
          "Yes. Kudozz runs influencer campaigns for brands selling in Singapore: strategy, creator discovery, contracts, approvals, publishing and reporting, with ASAS disclosure rules built into briefs and contracts. Kudozz Studios Private Limited is registered in India, and contracting is agreed per campaign.",
      },
      {
        question: "What are Singapore's rules for influencer disclosure?",
        answer:
          "The ASAS Guidelines for Interactive Marketing Communication and Social Media require any commercial relationship, including payment, free samples or invitations, to be disclosed. Disclosures should be clear, appear as early as possible, show the content is paid for and not be hidden behind a link. The rules apply to brands, agencies and creators.",
      },
      {
        question: "Can influencers promote financial products in Singapore?",
        answer:
          "Only with care. MAS's digital advertising guidelines, in effect from 25 March 2026, apply to financial institutions and the content creators they use, and creators who give financial advice may need a licence. Kudozz confirms the client's obligations before briefing any finance creator.",
      },
      {
        question: "Which language should a Singapore influencer campaign use?",
        answer:
          "English reaches most audiences, but Mandarin, Malay or Tamil creators can work better for specific segments and festive campaigns. Kudozz chooses the language from the audience you need to reach.",
      },
    ],
    guides: [
      "influencer-marketing-singapore",
      "influencer-disclosure-rules-by-country",
      "how-to-vet-influencers",
      "influencer-marketing-contract",
      "measuring-influencer-campaign-roi",
    ],
    reviewed: REVIEWED,
  },
];

/** The market name as it reads mid-sentence: "the UAE", "the UK", "Australia". */
export function marketPhrase(market: Pick<Market, "name">) {
  return market.name === "UAE" || market.name === "UK" ? `the ${market.name}` : market.name;
}

export function getMarketBySlug(slug: string) {
  return markets.find((market) => market.slug === slug);
}

/** India is served by the homepage and the India guides; the other GCC countries by their guides. */
export const otherMarketLinks = {
  india: [
    { label: "Influencer marketing in India (Kudozz homepage)", href: "/" },
    { label: "Compare influencer marketing agencies in India", href: "/blog/best-influencer-marketing-agencies-in-india" },
    { label: "Regional and multilingual campaigns in India", href: "/blog/regional-influencer-marketing-india" },
  ],
  gcc: [
    { label: "GCC influencer marketing playbook", href: "/blog/gcc-influencer-marketing-playbook" },
    { label: "Qatar", href: "/blog/influencer-marketing-qatar" },
    { label: "Kuwait", href: "/blog/influencer-marketing-kuwait" },
    { label: "Oman", href: "/blog/influencer-marketing-oman" },
  ],
};
