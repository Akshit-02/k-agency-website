import type { BlogPost } from "@/content/blog";
import { AUTHOR, GCC_LANGUAGE, GCC_PLAYBOOK, GCC_PUBLISHED, GCC_REVIEWED, REVIEW_DATE_TEXT, SRC } from "@/content/gcc-guides/shared";

/**
 * Topics 1417–1418: Saudi Arabia vs UAE, and the GCC market-by-market playbook. Saudi and other GCC rules are
 * described from those countries' own authorities or reports of them, never by analogy with UAE rules.
 */
export const gccMarketPosts: BlogPost[] = [
  // 1417
  {
    slug: "influencer-marketing-saudi-arabia-vs-uae",
    category: "Influencer Marketing",
    title: "Influencer Marketing in Saudi Arabia vs UAE: Key Differences for Brands",
    seoTitle: "Influencer Marketing in Saudi Arabia vs UAE: Key Differences",
    excerpt:
      "How influencer marketing differs between Saudi Arabia and the UAE: audiences and language, platform priorities, creator discovery, commercial terms, campaign operations and the separate licensing regimes, Mawthooq in Saudi Arabia and the advertiser permit in the UAE.",
    metaDescription:
      "Saudi Arabia vs UAE influencer marketing: audiences, Arabic dialects, Snapchat and platform reach, creator discovery, terms, and Mawthooq vs the UAE permit.",
    author: AUTHOR,
    publishedAt: GCC_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "11 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "Saudi Arabia and United Arab Emirates",
    breadcrumbParents: [GCC_PLAYBOOK],
    tags: ["Saudi vs UAE influencer marketing", "Saudi Arabia vs UAE marketing differences", "Mawthooq vs UAE advertiser permit", "KSA and UAE creator campaigns"],
    related: ["influencer-marketing-saudi-arabia", "influencer-marketing-uae", "gcc-influencer-marketing-playbook"],
    hero: {
      src: "/blog/gcc-guides/influencer-marketing-saudi-arabia-vs-uae.svg",
      alt: "Side-by-side comparison of Saudi Arabia and the UAE for influencer campaigns: audience, language, platform emphasis, licensing regime and operations",
    },
    body: [
      {
        type: "paragraph",
        text: "Brands that succeed in the UAE often assume Saudi Arabia is the same campaign at a bigger scale. It isn't. The audience is different, the language balance is different, the platforms carry different weight, and the licensing regime is a separate Saudi system that a UAE permit doesn't satisfy. The two markets reward different plans.",
      },
      {
        type: "paragraph",
        text: `Reviewed ${REVIEW_DATE_TEXT}. Regulatory points are summaries for planning, not legal advice. Saudi requirements should be confirmed with the General Authority for Media Regulation (GAMR) and Saudi counsel; UAE requirements with the National Media Authority.`,
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "The main differences: Saudi Arabia's population is mostly Saudi nationals, so campaigns are typically Arabic-first in Saudi dialects, while the UAE's resident audience is mostly expatriate and multilingual. Snapchat, X, YouTube and TikTok carry more weight in Saudi Arabia than in the UAE, while Instagram and LinkedIn reach a larger share of UAE residents. Saudi creators who earn from promotional content need a Mawthooq licence from GAMR, with additional requirements for non-Saudis; UAE creators need a separate advertiser permit from the National Media Authority. Plan, brief, contract and measure each country separately, even when one team runs both.",
      },
      { type: "heading", text: "Side-by-side", id: "comparison" },
      {
        type: "table",
        headers: ["", "Saudi Arabia", "UAE"],
        rows: [
          ["Population (late 2025, DataReportal)", "About 34.7 million", "About 11.4 million"],
          ["Audience make-up", "Majority Saudi nationals, plus large expatriate communities", "Large expatriate majority from many countries; Emiratis a minority"],
          ["Main content language", "Arabic, in Saudi dialects; English for some segments", "English widely; Arabic for nationals and Arab expatriates; many community languages"],
          ["Regional variation", "Riyadh, Jeddah and the Eastern Province differ in dialect and culture", "Dubai, Abu Dhabi and the Northern Emirates differ in audience and authorities"],
          ["Creator licensing", "Mawthooq licence (GAMR)", "Advertiser Permit and Visitor Advertiser Permit (National Media Authority)"],
          ["Currency and VAT", "SAR; VAT 15%", "AED; VAT 5%"],
          ["Key national and seasonal moments", "Founding Day (22 February), Saudi National Day (23 September), entertainment seasons, Ramadan and Eid", "Commemoration Day and National Day (30 November and 2 December), Dubai Shopping Festival, Ramadan and Eid"],
        ],
      },
      { type: "heading", text: "Audience and language strategy", id: "audience" },
      {
        type: "paragraph",
        text: "In Saudi Arabia, most campaigns are built for Saudi nationals, in Arabic, by Saudi creators. Dialect and regional identity matter: a creator from Riyadh, one from Jeddah and one from the Eastern Province may each resonate differently. In the UAE, the same budget might be split across Emirati, Arab expatriate, South Asian and Western expatriate segments, in several languages.",
      },
      {
        type: "list",
        items: [
          "Don't use UAE-based Arabic creators as a proxy for Saudi audiences unless their audience data shows a strong Saudi following",
          "Brief Saudi creators in Arabic and have Saudi native speakers review drafts",
          "Expect cultural references, humor and family norms to differ; localize the idea, not only the language",
          "English-only campaigns will reach far less of the Saudi market than of the UAE's",
        ],
      },
      {
        type: "paragraph",
        text: "More on language choices in the UAE is in Arabic vs English influencer campaigns in the UAE.",
        links: [{ text: "Arabic vs English influencer campaigns in the UAE", href: "/blog/arabic-vs-english-influencer-campaigns-uae" }],
      },
      { type: "heading", text: "Platform priorities", id: "platforms" },
      {
        type: "paragraph",
        text: "DataReportal's Digital 2026 reports for Saudi Arabia and the UAE, published in November 2025, show the difference in advertising audiences as a share of the total population:",
        links: [
          { text: "Saudi Arabia", href: SRC.datareportalKsa.url },
          { text: "the UAE", href: SRC.datareportalUae.url },
        ],
      },
      {
        type: "table",
        headers: ["Platform", "Saudi Arabia: ad reach (share of population)", "UAE: ad reach (share of population)"],
        rows: [
          ["Snapchat", "25.3 million (72.9%)", "5.13 million (44.9%)"],
          ["YouTube", "27.5 million (79.2%)", "8.37 million (73.3%)"],
          ["Instagram", "18.2 million (52.4%)", "8.05 million (70.5%)"],
          ["X", "15.0 million (43.1%)", "2.85 million (25.0%)"],
          ["TikTok (users aged 18+)", "38.6 million (more than the adult population)", "12.5 million (more than the adult population)"],
          ["LinkedIn (registered members)", "12.0 million (34.6%)", "10.0 million (87.6%)"],
        ],
      },
      {
        type: "paragraph",
        text: "Ad-reach figures aren't active users and can exceed the population, so use them for relative emphasis only. The pattern is consistent with what practitioners describe: Snapchat and X are central to many Saudi campaigns, Instagram is relatively stronger in the UAE, and LinkedIn is far more relevant for UAE B2B.",
      },
      { type: "heading", text: "Creator licensing: two separate systems", id: "licensing" },
      { type: "subheading", text: "Saudi Arabia: Mawthooq" },
      {
        type: "paragraph",
        text: "Saudi Arabia's Mawthooq licence, issued by GAMR, is required for individuals who publish paid promotional content on social media. Saudipedia, a Saudi reference platform, describes the conditions: licensees must comply with the authority's content and advertising controls, provide data when asked, stop advertising content immediately on request, and advertise only through an account registered with the authority and linked to the licence. When the scheme launched in 2022, Arab News reported a fee of SAR 15,000 for three years, penalties of up to SAR 1 million, and extra requirements for non-Saudi residents, including representation by licensed agencies. Requirements for non-Saudi creators have evolved since launch, and secondary sources disagree on the current route, so confirm the current fee, conditions and the non-Saudi process with GAMR.",
        links: [
          { text: "Saudipedia", href: SRC.saudipediaMawthooq.url },
          { text: "Arab News reported", href: SRC.arabNewsMawthooq.url },
          { text: "GAMR", href: SRC.gamr.url },
        ],
      },
      { type: "subheading", text: "UAE: the Advertiser Permit" },
      {
        type: "paragraph",
        text: "In the UAE, individuals advertising on social media have needed an Advertiser Permit from the National Media Authority since 31 January 2026. It's free for residents for the first three years, with exemptions for people promoting their own business through their personal account. Visiting creators need a visitor permit through an accredited UAE agency. Details and sources are in our UAE influencer marketing guide.",
        links: [{ text: "UAE influencer marketing guide", href: "/blog/influencer-marketing-uae" }],
      },
      {
        type: "table",
        headers: ["Practical question", "Saudi Arabia", "UAE"],
        rows: [
          ["Does the other country's licence count?", "No. A UAE permit doesn't authorize advertising under Saudi rules", "No. Mawthooq doesn't replace the UAE permit"],
          ["Creator from the other country posting while visiting", "Check GAMR's requirements for non-Saudi creators", "Visitor Advertiser Permit through an accredited agency"],
          ["What brands should check", "Mawthooq licence and registered account", "Permit number displayed on the account"],
          ["Sector rules", "Saudi sector regulators (for example health, food and drug, financial)", "UAE federal and emirate regulators"],
        ],
      },
      {
        type: "paragraph",
        text: "A creator based in Dubai with a large Saudi audience raises a question both regimes may care about. Don't assume one licence covers the other; get advice for cross-border arrangements.",
      },
      { type: "heading", text: "Creator discovery", id: "discovery" },
      {
        type: "list",
        items: [
          "Saudi Arabia: a large, fast-growing pool of Saudi creators; check for a current Mawthooq licence early in shortlisting",
          "UAE: a highly international pool, many with audiences spread across the region; check audience country carefully",
          "In both: verify audience location and authenticity with creator-provided insights, and look at comment language and quality",
          "Regional celebrities may have audiences across both countries, but their fees reflect that; local mid-sized creators often deliver more relevant reach",
        ],
      },
      { type: "heading", text: "Commercial terms", id: "terms" },
      {
        type: "list",
        items: [
          "Currency: contract in SAR for Saudi creators and AED for UAE creators to avoid exchange disputes",
          "VAT: 15% in Saudi Arabia and 5% in the UAE; agree whether fees include it",
          "Licensing costs: creators carry their own licensing costs, which may be reflected in fees",
          "Usage rights and exclusivity: define the territory explicitly (Saudi only, UAE only or GCC) because content often travels",
          "Payments: cross-border payments to creators may need different invoicing and tax handling; check with finance",
        ],
      },
      { type: "heading", text: "Campaign operations", id: "operations" },
      {
        type: "table",
        headers: ["Operation", "Saudi Arabia", "UAE"],
        rows: [
          ["Briefing", "Arabic briefs; Saudi reviewers", "Language per segment; native reviewers for each"],
          ["Calendar", "Founding Day, National Day, entertainment seasons, Ramadan, Eid", "National Day, Dubai Shopping Festival, summer slowdown, Ramadan, Eid"],
          ["Events and on-ground", "Major cities are far apart; plan city by city", "Dubai-led, with separate Abu Dhabi planning where footfall matters"],
          ["Measurement", "Track separately; Snapchat and X often matter more", "Track separately by language segment"],
        ],
      },
      {
        type: "paragraph",
        text: "Ramadan and Eid fall at roughly the same time in both countries, but official announcements are made separately in each and can occasionally differ by a day. Confirm dates per country.",
      },
      { type: "heading", text: "Running both markets", id: "both" },
      {
        type: "list",
        items: [
          "Keep one strategy but separate plans, creators, briefs and reports per country",
          "Budget for Arabic production and review in Saudi Arabia, and for multilingual production in the UAE",
          "Check licences in each country for every creator, every campaign",
          "Compare results per country rather than blending them",
          "Where content is reused across both, make sure rights cover both territories",
        ],
      },
      {
        type: "paragraph",
        text: "Each market has its own guide: influencer marketing in Saudi Arabia and influencer marketing in the UAE. A market-by-market approach for the rest of the Gulf is in influencer marketing for brands entering the GCC.",
        links: [
          { text: "influencer marketing in Saudi Arabia", href: "/blog/influencer-marketing-saudi-arabia" },
          { text: "influencer marketing in the UAE", href: "/blog/influencer-marketing-uae" },
          { text: "influencer marketing for brands entering the GCC", href: "/blog/gcc-influencer-marketing-playbook" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Saudi Arabia and the UAE sit next to each other, share many cultural moments and are often run by the same regional team, but for creator campaigns they're different markets. Plan the audience, language, platforms and licensing for each on its own terms, and you'll avoid the most common regional mistake: a UAE campaign stretched to cover a much larger Saudi audience it was never built for.",
      },
    ],
    faqs: [
      {
        question: "Do influencers in Saudi Arabia need a licence?",
        answer:
          "Yes. Individuals who earn from promotional content on social media need a Mawthooq licence from the General Authority for Media Regulation, with additional requirements for non-Saudis. Confirm current conditions and fees with GAMR.",
      },
      {
        question: "Does a UAE advertiser permit cover Saudi Arabia?",
        answer:
          "No. The UAE permit applies under UAE rules. Advertising aimed at Saudi audiences is subject to Saudi requirements, including Mawthooq. Get advice on cross-border arrangements.",
      },
      {
        question: "Which platforms matter most for influencer marketing in Saudi Arabia?",
        answer:
          "Snapchat, YouTube, TikTok and X reach large shares of the Saudi population, with Instagram also important. Choose based on each creator's audience and your objective.",
      },
    ],
  },
  // 1418
  {
    slug: "gcc-influencer-marketing-playbook",
    category: "Campaign Strategy",
    title: "Influencer Marketing for Brands Entering the GCC: A Market-by-Market Playbook",
    seoTitle: "GCC Influencer Marketing Playbook: Market-by-Market Planning",
    excerpt:
      "A planning framework for brands taking creator marketing across the Gulf: how the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain and Oman differ, where licensing stands in each, and when you need separate research, creative, creators, approvals and measurement per country.",
    metaDescription:
      "GCC influencer marketing playbook: how the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain and Oman differ, licensing status, and when each needs its own plan.",
    author: AUTHOR,
    publishedAt: GCC_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "16 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "Gulf Cooperation Council countries",
    tags: ["GCC influencer marketing", "influencer marketing Middle East", "Gulf influencer marketing strategy", "influencer marketing Qatar Kuwait Oman Bahrain"],
    related: ["influencer-marketing-saudi-arabia", "gcc-influencer-marketing-budget", "gcc-influencer-campaign-reporting"],
    hero: {
      src: "/blog/gcc-guides/gcc-influencer-marketing-playbook.svg",
      alt: "Six GCC markets as separate planning units, each with its own audience, language, creators, licensing status and measurement",
    },
    body: [
      {
        type: "paragraph",
        text: "'The GCC' is a useful phrase for a regional office and a misleading one for a creator campaign. The six member states share a language family, a religious calendar and many cultural traditions, but their audiences, media rules and creator markets differ enough that one regional campaign rarely fits all of them. This playbook is a framework for deciding where to start, what can be shared and what each country needs of its own.",
      },
      {
        type: "paragraph",
        text: `Reviewed ${REVIEW_DATE_TEXT}. Licensing rules across the Gulf are changing quickly; Kuwait published a new media law in October 2026, for example. Treat the regulatory summary below as a starting point and confirm each country's current requirements with its authorities or local counsel.`,
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Treat each GCC country as its own market. Share strategy, brand guidelines and learning across the region, but plan audience research, creators, language and dialect, licensing checks, sector approvals and measurement per country. Most brands start in the UAE or Saudi Arabia, depending on whether they need a multilingual expatriate audience or a large, mostly national, Arabic-speaking one, then test smaller markets with local creators before scaling. Influencer licensing exists in the UAE, Saudi Arabia and Oman, has just been legislated in Kuwait, is proposed in Qatar and has no specific law in Bahrain, so compliance checks differ in each.",
      },
      { type: "heading", text: "Six markets, six plans", id: "markets" },
      {
        type: "table",
        headers: ["Market", "Audience notes", "Language", "Planning note"],
        rows: [
          ["UAE", "Large expatriate majority from many countries", "English widely, Arabic, many community languages", "Segment by community and emirate; a regional media and creator hub, but not a proxy for the region"],
          ["Saudi Arabia", "Largest population; majority Saudi nationals", "Arabic in Saudi dialects", "Arabic-first, city-by-city; Snapchat and X carry more weight"],
          ["Qatar", "Small national population and large expatriate majority", "Arabic and English", "Smaller creator pool; check audience location carefully"],
          ["Kuwait", "Large expatriate share; an influential national creator scene", "Arabic in Kuwaiti dialect, English", "New licensing law takes effect in 2027"],
          ["Bahrain", "Roughly balanced national and expatriate populations; close ties with Saudi Arabia's Eastern Province", "Arabic, English", "Smaller market; regional creators can overlap with Saudi audiences"],
          ["Oman", "Majority Omani nationals", "Arabic in Omani dialect, English", "Licensing has been in place since 2023; local creators matter"],
        ],
      },
      {
        type: "paragraph",
        text: "Audience shares by nationality vary by source and year, so we've described them qualitatively. Check current official statistics for any market you're budgeting for.",
      },
      { type: "heading", text: "Where creator licensing stands", id: "licensing" },
      {
        type: "table",
        headers: ["Market", "Status as reviewed", "Source"],
        rows: [
          ["UAE", "Advertiser Permit required since 31 January 2026; visitor permit through accredited agencies", "National Media Authority; Gulf News; Pinsent Masons"],
          ["Saudi Arabia", "Mawthooq licence from GAMR for paid promotional content; additional steps for non-Saudis", "GAMR; Saudipedia; Arab News"],
          ["Kuwait", "Decree-Law No. 102 of 2026 (Media Regulation Law) published 4 October 2026, in force six months later; introduces licences for influencers and paid advertisers on social platforms; executive regulations pending", "WEFAQ legal update"],
          ["Oman", "Licence for marketing and promotion on social media under Ministerial Decision 619/2022, in force since March 2023", "Oman Observer"],
          ["Qatar", "A licensing framework for content creators has been proposed; general advertising licensing applies; check current status", "Sultan Al-Abdulla & Partners"],
          ["Bahrain", "No specific influencer law as of October 2026; general advertising and commercial rules still apply", "GDN"],
        ],
      },
      {
        type: "paragraph",
        text: "Sources: the UAE rules are summarized with links in our UAE influencer marketing guide; Saudi Arabia's in Saudi Arabia vs UAE influencer marketing; Kuwait from WEFAQ's summary of the new law; Oman from Oman Observer's report on the licence; Qatar from Sultan Al-Abdulla & Partners on the proposed framework; and Bahrain from GDN's October 2026 report.",
        links: [
          { text: "UAE influencer marketing guide", href: "/blog/influencer-marketing-uae" },
          { text: "Saudi Arabia vs UAE influencer marketing", href: "/blog/influencer-marketing-saudi-arabia-vs-uae" },
          { text: "WEFAQ's summary of the new law", href: SRC.kuwaitMediaLaw.url },
          { text: "Oman Observer's report on the licence", href: SRC.omanLicence.url },
          { text: "Sultan Al-Abdulla & Partners on the proposed framework", href: SRC.qatarProposal.url },
          { text: "GDN's October 2026 report", href: SRC.bahrainNoLaw.url },
        ],
      },
      {
        type: "paragraph",
        text: "Two practical implications. First, a licence in one country doesn't cover another, so a creator with a cross-border audience may raise questions in more than one jurisdiction. Second, sector rules for health, food, finance and promotions are national too; a UAE health advertising approval says nothing about Kuwait or Oman.",
      },
      {
        type: "paragraph",
        text: "Country guides cover each market in more depth: influencer marketing in Saudi Arabia, influencer marketing in the UAE, influencer marketing in Qatar, influencer marketing in Kuwait and influencer marketing in Oman. Bahrain is covered below.",
        links: [
          { text: "influencer marketing in Saudi Arabia", href: "/blog/influencer-marketing-saudi-arabia" },
          { text: "influencer marketing in the UAE", href: "/blog/influencer-marketing-uae" },
          { text: "influencer marketing in Qatar", href: "/blog/influencer-marketing-qatar" },
          { text: "influencer marketing in Kuwait", href: "/blog/influencer-marketing-kuwait" },
          { text: "influencer marketing in Oman", href: "/blog/influencer-marketing-oman" },
        ],
      },
      { type: "heading", text: "Bahrain", id: "bahrain" },
      {
        type: "paragraph",
        text: "Bahrain is the smallest GCC market, with about 1.65 million people according to DataReportal's Digital 2026 Bahrain report. Its late-2025 advertising-audience figures show unusually high reach for Instagram (1.10 million, 66.6% of the population) and Snapchat (1.10 million, 66.3%), alongside YouTube (1.23 million, 74.5%) and TikTok (1.31 million users aged 18+, above the adult population). As elsewhere, these aren't active-user counts.",
        links: [{ text: "DataReportal's Digital 2026 Bahrain report", href: SRC.datareportalBahrain.url }],
      },
      {
        type: "list",
        items: [
          "Regulation: as of October 2026 there is no specific influencer law, according to GDN, and an influencer licence is under discussion; general advertising, consumer protection and commercial rules still apply",
          "Promotions: the Ministry of Industry and Commerce licenses promotional and discount campaigns for businesses, so check before a creator announces an offer or giveaway",
          "Audience: close ties with Saudi Arabia's Eastern Province mean some Bahraini creators reach Saudi audiences too, and vice versa; check audience location against your goal",
          "Scale: a small market saturates quickly, so rotate creators and watch frequency",
          "Currency: contract in Bahraini dinars (BHD), which are pegged to the US dollar",
        ],
      },
      {
        type: "paragraph",
        text: "We haven't published a separate Bahrain guide: with no influencer-specific regime yet and a small market, most planning questions are answered here. The ministry's promotional campaign service is listed on the Ministry of Industry and Commerce site.",
        links: [{ text: "Ministry of Industry and Commerce site", href: SRC.bahrainMoicPromotions.url }],
      },
      { type: "heading", text: "What to share, and what to localize", id: "share-localize" },
      {
        type: "table",
        headers: ["Element", "Usually shared across the region", "Usually per country"],
        rows: [
          ["Strategy", "Brand positioning, objectives framework, measurement principles", "Objective and target per market"],
          ["Research", "Category insight that applies widely", "Audience, competitors, platform habits, price expectations"],
          ["Creative", "The core idea and brand guidelines", "Dialect, references, casting, offers"],
          ["Creators", "Occasional regional names for reach", "Local creators for relevance and conversion"],
          ["Compliance", "A shared checklist format", "Licences, sector approvals, promotion permits, disclosure wording"],
          ["Commercial", "Contract templates", "Currency, VAT, payment and tax handling"],
          ["Measurement", "KPI definitions and reporting format", "Tracking, baselines and results per country"],
        ],
      },
      { type: "heading", text: "When a country needs its own plan", id: "decision" },
      {
        type: "list",
        items: [
          "Separate research: when you don't have sales or audience data for that country, or the category is new there",
          "Separate creative: when the audience speaks a different dialect, the offer or price differs, or cultural references don't travel",
          "Separate creators: almost always for conversion goals; regional creators may be enough for broad awareness",
          "Separate approvals: whenever licensing, sector or promotion rules apply, which is most of the time",
          "Separate measurement: always; blended GCC numbers hide which market worked",
        ],
      },
      { type: "heading", text: "Choosing where to start", id: "sequencing" },
      {
        type: "table",
        headers: ["If your situation is", "Consider starting in", "Why"],
        rows: [
          ["A multilingual or expatriate-focused product", "UAE", "The broadest mix of communities; English-language campaigns can work"],
          ["A mass-market product for Arabic-speaking nationals", "Saudi Arabia", "Scale; Arabic-first creative"],
          ["A premium product with limited distribution", "The market where you have retail or delivery coverage", "Creators can't sell what people can't buy"],
          ["A brand already in one GCC market", "The neighboring market with the most similar audience", "Reuse learning; adapt the creative"],
          ["A regulated category", "The market where you already hold approvals", "Approvals often drive the timeline"],
        ],
      },
      { type: "heading", text: "A test-and-scale approach", id: "test-scale" },
      {
        type: "list",
        items: [
          "Test: a small group of local creators per market, two or three content angles, tracked separately",
          "Learn: compare cost per result by market, language and creator type; read comments for objections",
          "Adapt: keep the idea, adjust dialect, casting, offer and platform mix",
          "Scale: increase budget where results justify it, and move strong creators into longer arrangements",
          "Review: re-check licensing and sector rules before each new campaign, since they're changing",
        ],
      },
      { type: "heading", text: "Running a multi-country campaign", id: "operations" },
      {
        type: "paragraph",
        text: "Once markets and roles are set, the work is operational. These are the areas that most often go wrong when one team runs several Gulf countries at once.",
      },
      { type: "subheading", text: "Creator contracting and deliverables" },
      {
        type: "list",
        items: [
          "One contract template, localized per country for currency, language, licence clauses and governing terms",
          "Deliverables per creator in writing: platform, format, number, posting window, how long posts stay live",
          "Licence or permit number recorded per creator, per country",
          "For contracts that run into a regulatory change, such as Kuwait's licensing from 2027, a clause requiring compliance once rules apply",
        ],
      },
      { type: "subheading", text: "Local regulatory checks" },
      {
        type: "list",
        items: [
          "Creator licensing per country (see the table above)",
          "Promotion and discount permits per country, owned by the business running the offer",
          "Sector approvals per country for health, food, financial and other regulated products",
          "Disclosure wording in every language the campaign uses",
        ],
      },
      { type: "subheading", text: "Budgets and currencies" },
      {
        type: "list",
        items: [
          "Contract in AED, SAR, QAR, KWD, BHD or OMR as appropriate",
          "Convert to a reporting currency only at a stated, dated rate; never add currencies together",
          "VAT differs (for example 5% in the UAE and 15% in Saudi Arabia), and not every GCC country applies it",
          "Cross-border creator payments may need specific invoicing and tax handling",
        ],
      },
      {
        type: "paragraph",
        text: "How to split spend between markets is covered in GCC influencer marketing budgets.",
        links: [{ text: "GCC influencer marketing budgets", href: "/blog/gcc-influencer-marketing-budget" }],
      },
      { type: "subheading", text: "Content rights and paid amplification" },
      {
        type: "list",
        items: [
          "Define territory in every licence: one country, several, or the GCC; regional rights cost more",
          "Content made for one market may need re-voicing or re-casting before it works in another",
          "Agree paid amplification through creator accounts per platform and per market, since tools and availability differ",
          "Track which assets are licensed for which markets and until when",
        ],
      },
      { type: "subheading", text: "Tracking, attribution and reporting" },
      {
        type: "list",
        items: [
          "Separate links, codes and landing pages per market and language",
          "The same reporting window across markets unless a buying cycle justifies a difference",
          "Report per market in local currency, then compare cost per result in a reporting currency at a stated rate",
        ],
      },
      {
        type: "paragraph",
        text: "A full framework for comparing countries is in GCC influencer campaign reporting.",
        links: [{ text: "GCC influencer campaign reporting", href: "/blog/gcc-influencer-campaign-reporting" }],
      },
      { type: "subheading", text: "Coordination and market-by-market optimization" },
      {
        type: "list",
        items: [
          "One owner per market, plus one person accountable for the regional view",
          "A shared tracker of creators, deliverables, approvals, licences and posting dates across markets",
          "A weekly check-in during live campaigns, with decisions recorded per market",
          "Decision rules agreed upfront: when to rebook a creator, pause one, or move budget between markets",
          "A debrief per market before the regional summary, so local learning isn't averaged away",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Running one Dubai-made campaign across the region",
          "Assuming one country's licence covers creators' posts aimed at another",
          "Using Modern Standard Arabic everywhere, or one Gulf dialect for every market",
          "Reporting a single GCC total",
          "Booking regional celebrities when local creators would convert better",
          "Planning around regulatory rules that changed since the last campaign",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A good GCC creator program looks like one strategy with six local executions. Share the idea, the brand and the learning; give each country its own research, creators, approvals and numbers. Start where your product and data are strongest, test before scaling, and re-check the rules each time, because across the Gulf they're still being written.",
      },
    ],
    faqs: [
      {
        question: "Can one influencer campaign work across the whole GCC?",
        answer:
          "Broad awareness campaigns with regional creators can reach several markets, but for relevance and conversion most brands need local creators, dialects, approvals and measurement per country. Licensing rules also differ by country.",
      },
      {
        question: "Which GCC countries require influencer licences?",
        answer:
          "As of October 2026: the UAE (Advertiser Permit), Saudi Arabia (Mawthooq) and Oman have licensing in place; Kuwait has passed a new media law that introduces influencer licences, in force in 2027; Qatar has a proposed framework; and Bahrain has no specific influencer law. Confirm current rules locally.",
      },
      {
        question: "Should brands enter the UAE or Saudi Arabia first?",
        answer:
          "It depends on the product and audience. The UAE suits multilingual and expatriate-focused products; Saudi Arabia suits products for a large, mostly national, Arabic-speaking audience. Distribution and regulatory approvals often decide it.",
      },
    ],
  },
];
