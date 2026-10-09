import type { BlogPost } from "@/content/blog";
import { AUTHOR, GCC_LANGUAGE, GCC_PUBLISHED, GCC_REVIEWED, REVIEW_DATE_TEXT, SRC } from "@/content/gcc-guides/shared";

/**
 * UAE pillar. Not one of the 20 proposed topics: added because the site had no UAE page at all, and without a
 * hub every industry guide would have had to repeat the permit, platform and calendar basics. It also absorbs
 * topic 1416 (Abu Dhabi), which did not justify its own URL. See docs/uae-gcc-1400-1419-audit.md.
 */
export const uaeHubPost: BlogPost = {
  slug: "influencer-marketing-uae",
  category: "Influencer Marketing",
  title: "Influencer Marketing in the UAE: A Practical Guide for Brands",
  seoTitle: "Influencer Marketing in the UAE: Rules, Platforms and Planning",
  excerpt:
    "How influencer marketing works in the UAE: who the audience actually is, which platforms reach them, what the advertiser permit means for brands, how Dubai, Abu Dhabi and the Northern Emirates differ, and how to plan, budget and measure a campaign.",
  metaDescription:
    "A brand guide to influencer marketing in the UAE: audiences, platforms, the advertiser permit, Dubai vs Abu Dhabi, the seasonal calendar, costs and measurement.",
  author: AUTHOR,
  publishedAt: GCC_PUBLISHED,
  lastReviewed: GCC_REVIEWED,
  readingTime: "13 min read",
  inLanguage: GCC_LANGUAGE,
  spatialCoverage: "United Arab Emirates",
  tags: [
    "influencer marketing UAE",
    "influencer marketing Dubai",
    "UAE advertiser permit",
    "influencer marketing Abu Dhabi",
    "UAE influencer campaign planning",
  ],
  related: ["choose-influencer-marketing-agency-uae", "arabic-vs-english-influencer-campaigns-uae", "influencer-campaign-brief-template-uae"],
  hero: {
    src: "/blog/gcc-guides/influencer-marketing-uae.svg",
    alt: "Planning layers for a UAE influencer campaign: audience and language, platform mix, advertiser permit and sector approvals, emirate and season, then measurement",
  },
  body: [
    {
      type: "paragraph",
      text: "Brands arriving in the UAE often treat it as one audience reached through a handful of famous Dubai accounts. The country is more varied than that. Most residents are expatriates from dozens of countries, Emirati citizens are a minority with their own media habits, English is the everyday business language while Arabic is the official one, and since January 2026 anyone advertising on social media needs a federal permit. A campaign that ignores any of those will waste money, however good the creative is.",
    },
    { type: "heading", text: "Quick answer", id: "quick-answer" },
    {
      type: "paragraph",
      text: "Influencer marketing in the UAE means paying or gifting creators to feature a product or service for an audience in the country. Start by defining which segment you need, for example Emirati nationals, Arabic-speaking expatriates, South Asian communities, Western expatriates or tourists, because each has its own creators, languages and platforms. Check that each creator holds a valid UAE advertiser permit (or, for visiting creators, a visitor permit arranged through an accredited agency) and that your category doesn't need extra approval, as health, financial and promotional offers often do. Plan around Ramadan, Eid and the summer slowdown, measure with tracked links and codes, and verify where each creator's audience actually lives rather than where the creator does.",
    },
    { type: "heading", text: "Who you are actually reaching", id: "audience" },
    {
      type: "paragraph",
      text: "Several features of the UAE market shape creator selection more than follower counts do.",
    },
    {
      type: "table",
      headers: ["Feature", "What it means for a campaign"],
      rows: [
        ["Expatriates are the large majority of residents", "A creator's audience can be mostly one nationality or language group. Ask for audience breakdowns by country and language, not just 'UAE'."],
        ["Emirati citizens are a minority with distinct preferences", "Campaigns aimed at nationals usually need Emirati or Khaleeji (Gulf) Arabic-speaking creators and different cultural cues from expatriate campaigns."],
        ["English is the common working language; Arabic is official", "English reaches the widest resident audience, but Arabic matters for nationals and Arab expatriates. Hindi, Urdu, Tagalog, Malayalam and Russian communities are also large and reachable through their own creators."],
        ["Many followers of 'UAE' creators live elsewhere", "Large Dubai accounts often have big audiences in Saudi Arabia, Egypt, India, Pakistan or Europe. That is useful for regional reach and wasted spend for a local store."],
        ["Tourists and residents behave differently", "Hotels, attractions and restaurants may need both: residents for repeat visits, inbound travelers for bookings made from abroad."],
        ["Each emirate has its own authorities", "Health, tourism and commercial promotions are partly regulated at emirate level, so a Dubai approval doesn't automatically cover Abu Dhabi."],
      ],
    },
    {
      type: "paragraph",
      text: "Choosing between Arabic, English and bilingual content deserves its own decision; it's covered in Arabic vs English influencer campaigns in the UAE.",
      links: [{ text: "Arabic vs English influencer campaigns in the UAE", href: "/blog/arabic-vs-english-influencer-campaigns-uae" }],
    },
    { type: "heading", text: "Which platforms reach UAE audiences", id: "platforms" },
    {
      type: "paragraph",
      text: "Instagram, TikTok, Snapchat, YouTube and LinkedIn all have large UAE audiences. The DataReportal Digital 2026 UAE report, published in November 2025, gives these advertising-audience figures for late 2025 against a population of about 11.4 million:",
      links: [{ text: "DataReportal Digital 2026 UAE report", href: SRC.datareportalUae.url }],
    },
    {
      type: "table",
      headers: ["Platform", "Reported ad reach (late 2025)", "Typical campaign role"],
      rows: [
        ["Facebook", "9.70 million", "Older and South Asian audiences; community groups; less creator-led"],
        ["YouTube", "8.37 million", "Reviews, tutorials, long-form explainers, Arabic and South Asian language content"],
        ["Instagram", "8.05 million", "The default for lifestyle, beauty, fashion, food, hospitality and retail"],
        ["Snapchat", "5.13 million", "Daily, unpolished storytelling; often cited as especially strong with Emirati and Gulf audiences"],
        ["TikTok", "12.5 million users aged 18+ (more than the adult population)", "Discovery, trends, product demonstrations, entertainment-led formats"],
        ["LinkedIn", "10.0 million registered members", "B2B, recruitment, founder and executive content"],
        ["X", "2.85 million", "News, commentary, sport; limited for most consumer campaigns"],
      ],
    },
    {
      type: "paragraph",
      text: "Treat these as rough indicators. Ad-reach figures come from the platforms' own advertising tools, aren't the same as monthly active users, and can exceed the adult population because of duplicate accounts, visitors and people who have left the country. Use them to shortlist platforms, then judge each creator on their own audience data.",
    },
    { type: "heading", text: "The advertiser permit and other rules brands should know", id: "permits" },
    {
      type: "paragraph",
      text: `Reviewed ${REVIEW_DATE_TEXT}. This is a summary for planning, not legal advice. Confirm current requirements with the National Media Authority and, for regulated categories, the relevant sector authority before a campaign goes live.`,
    },
    {
      type: "paragraph",
      text: "Under Federal Decree-Law No. 55 of 2023 on media regulation, individuals who publish advertising content on social media in the UAE need an Advertiser Permit, whether they are paid in cash or in products, stays or other benefits. Enforcement began on 31 January 2026, and the National Media Authority took over from the UAE Media Council as regulator in late 2025 (see Pinsent Masons' summary of the deadline). According to the official requirements as reported by Gulf News, the permit for citizens and residents is free for its first three years and requires a trade or freelance licence for electronic media activity. Two groups are exempt: people promoting their own products or services, or those of a company they own, through their personal accounts, and under-18s taking part in educational, sporting, cultural or awareness activities within their age classification.",
      links: [
        { text: "Pinsent Masons' summary of the deadline", href: SRC.pinsentDeadline.url },
        { text: "as reported by Gulf News", href: SRC.gnPermitHowTo.url },
      ],
    },
    {
      type: "paragraph",
      text: "Visiting creators who aren't UAE residents need a separate Visitor Advertiser Permit. It must be applied for through an advertising or talent management agency accredited by the authority. It lasts three months and can be extended once, to a maximum of six months, and the UAE agency signs the contract and acts as the visitor's representative (Gulf News, July 2026). Permit holders must show their permit number on their social media accounts, and advertising may only be published through the accounts linked to the permit. You can check details on the authority's Advertiser Permit page and its Visitor Advertiser Permit page; both were unreachable when we reviewed this guide, so use the reports above as a cross-check.",
      links: [
        { text: "Gulf News, July 2026", href: SRC.gnVisitor.url },
        { text: "Advertiser Permit page", href: SRC.nmaPermit.url },
        { text: "Visitor Advertiser Permit page", href: SRC.nmaVisitor.url },
      ],
    },
    {
      type: "paragraph",
      text: "The permit sits on top of the authority's media content standards, which apply to paid and unpaid content alike. Al Tamimi's summary of UAE media and advertising standards covers the most relevant points for brands: content must respect religion, national symbols and public morals; advertising must be clearly identifiable as advertising; material connections with the brand must be disclosed; and alcohol, tobacco, narcotics, misleading claims and disparaging competitors are off limits. Gulf News reports fines from AED 10,000 up to AED 1 million depending on the violation and repetition.",
      links: [
        { text: "Al Tamimi's summary of UAE media and advertising standards", href: SRC.tamimiStandards.url },
        { text: "Gulf News reports fines", href: SRC.gn20Standards.url },
      ],
    },
    {
      type: "table",
      headers: ["If your campaign involves", "Check with", "Why"],
      rows: [
        ["Any creator advertising on social media", "National Media Authority", "Advertiser Permit or Visitor Advertiser Permit, permit number displayed"],
        ["Medicines, medical devices, clinics, treatments or health claims", "MOHAP, plus DHA in Dubai or DoH in Abu Dhabi", "Prior approval of health advertising; DHA's social media standards cover influencers promoting facilities"],
        ["Investments, trading, financial advice or recommendations", "SCA (mainland), DFSA (DIFC), FSRA (ADGM), CBUAE for banking", "SCA's 2025 finfluencer licence; financial promotion rules"],
        ["Crypto and other virtual assets in Dubai", "VARA", "Marketing regulations, mandatory risk disclaimer, licensed-firm requirement"],
        ["Discounts, sales, giveaways or prize draws", "Dubai DET, or the economic department of the relevant emirate", "Promotion permits; the trader is responsible for misleading influencer promotions"],
        ["Cosmetics, personal care and consumer products", "Product registration (for example Dubai Municipality's Montaji)", "Products and their claims must be registered before sale and promotion; therapeutic claims change the category"],
      ],
    },
    {
      type: "list",
      items: [
        "Ask every creator for their permit number before contracting, and record it in the agreement",
        "For visiting creators, contract through an accredited UAE agency and allow time for the visitor permit",
        "Agree disclosure wording and placement in the brief, in each language the post uses",
        "Get sector approvals before content is filmed, not after it's posted",
        "Keep approved claims, permits and final posts on file for each campaign",
      ],
    },
    {
      type: "paragraph",
      text: "The rules for Saudi Arabia are different and are not covered by a UAE permit; see Saudi influencer advertising rules, and Saudi Arabia vs UAE influencer marketing for the wider differences.",
      links: [
        { text: "Saudi influencer advertising rules", href: "/blog/saudi-influencer-advertising-rules" },
        { text: "Saudi Arabia vs UAE influencer marketing", href: "/blog/influencer-marketing-saudi-arabia-vs-uae" },
      ],
    },
    { type: "heading", text: "Dubai, Abu Dhabi and the Northern Emirates", id: "emirates" },
    {
      type: "paragraph",
      text: "Most UAE creator activity is Dubai-led, and many brands assume a Dubai campaign covers the country. It often doesn't, for three practical reasons.",
    },
    {
      type: "table",
      headers: ["", "Dubai", "Abu Dhabi", "Sharjah and the Northern Emirates"],
      rows: [
        ["Where creators are based", "The largest pool by far, across every category", "Smaller pool; many campaigns use Dubai creators who also reach Abu Dhabi", "Fewer dedicated creators; reached through Dubai creators and community accounts"],
        ["Emirate-level authorities to check", "DHA (health), DET (tourism, commerce and promotions), DIFC/DFSA and VARA (finance)", "DoH (health), DCT Abu Dhabi (culture and tourism), ADGM/FSRA (finance)", "Each emirate's own economic and health departments"],
        ["Audience notes", "Highly international; heavy tourist and new-resident share", "Larger share of Emirati and government-sector audiences; family and culture-led content", "Residential and family-focused; many residents commute to Dubai"],
        ["When a local campaign matters", "Store openings, restaurants, events, launches", "Hospitality, culture and tourism, events on Yas and Saadiyat islands, local retail", "Neighborhood retail, family services, education, F&B"],
      ],
    },
    {
      type: "paragraph",
      text: "For an Abu Dhabi campaign, confirm the share of each creator's audience that's in Abu Dhabi (Instagram and TikTok insights show top cities), check whether your category needs DoH or DCT involvement, and consider Abu Dhabi-based creators for anything where local credibility matters, such as a restaurant opening or a cultural event. National reach can come from Dubai creators; local footfall usually can't. The DoH and DCT Abu Dhabi are the authorities to contact for health and tourism activity in the emirate.",
      links: [
        { text: "DoH", href: SRC.doh.url },
        { text: "DCT Abu Dhabi", href: SRC.dct.url },
      ],
    },
    { type: "heading", text: "The seasonal calendar", id: "calendar" },
    {
      type: "paragraph",
      text: "Islamic dates move about 11 days earlier each year and depend on official moon-sighting announcements. The dates below for 2027 are astronomical forecasts reported by The National in October 2026, not confirmed dates. Check the UAE government's public holidays page before you lock in posting schedules.",
      links: [
        { text: "reported by The National", href: SRC.ramadan2027National.url },
        { text: "public holidays page", href: SRC.uaeHolidays.url },
      ],
    },
    {
      type: "table",
      headers: ["Moment", "Timing", "Planning note"],
      rows: [
        ["Ramadan", "Expected to begin around 8 February 2027", "Book creators and agree creative well before; content rhythms shift to evenings"],
        ["Eid al-Fitr", "Expected around 9 or 10 March 2027", "Gifting, fashion, family and travel; short, date-sensitive window"],
        ["Eid al-Adha", "Expected around 16 or 17 May 2027", "Family gatherings, travel and hospitality; another public holiday period"],
        ["Summer", "Roughly June to August", "Many residents travel; indoor, staycation and travel categories rise; local events thin out"],
        ["Back to school", "Late August to September", "Education, retail, family services"],
        ["Commemoration Day and National Day (Eid Al Etihad)", "30 November and 2 December", "National themes must be handled respectfully; avoid trivializing national symbols"],
        ["Peak season and Dubai Shopping Festival", "Roughly December to January (dates vary each year)", "Tourism, retail and events peak; creator demand and rates rise"],
        ["Community festivals such as Diwali, Christmas and Lunar New Year", "Varies", "Large communities celebrate these; reach them through creators from those communities"],
      ],
    },
    {
      type: "paragraph",
      text: "A full Ramadan and Eid planning guide is in Ramadan influencer marketing in the UAE.",
      links: [{ text: "Ramadan influencer marketing in the UAE", href: "/blog/ramadan-influencer-marketing-uae" }],
    },
    { type: "heading", text: "What UAE campaigns cost", id: "costs" },
    {
      type: "paragraph",
      text: "There's no official rate card. Published price guides from agencies and platforms disagree widely and rarely explain their method, so treat any single table as one vendor's estimate. What we can say with more confidence is what drives the price.",
    },
    {
      type: "list",
      items: [
        "Creator size and demand: rates rise steeply with audience size and with demand in peak seasons such as Ramadan and December",
        "Language: Arabic and bilingual creators are frequently quoted at a premium because the pool is smaller",
        "Deliverables: a Reel, a TikTok video, a Snapchat story series and a YouTube integration are priced differently",
        "Usage rights and exclusivity: using creator content in your own ads, or barring competitors, is usually priced as an addition",
        "Compliance costs: creators carry licence costs and some build them into fees",
        "VAT: creators and agencies registered for VAT add 5% (the Federal Tax Authority sets the rules)",
        "Production and hosting: hosted visits, travel and shoot days for UGC or events",
      ],
    },
    {
      type: "paragraph",
      text: "Budget in AED, get quotes per deliverable with usage rights itemized, and ask whether quoted fees include VAT. The general method for building a budget from objectives is in influencer marketing budget planning, and the line items in a creator agreement are covered in influencer usage rights.",
      links: [
        { text: "influencer marketing budget planning", href: "/blog/influencer-marketing-budget" },
        { text: "influencer usage rights", href: "/blog/influencer-usage-rights" },
      ],
    },
    { type: "heading", text: "Measuring results", id: "measurement" },
    {
      type: "paragraph",
      text: "Give each creator a unique tracked link and code, decide before launch whether success means reach, visits, bookings, leads or sales, and report each separately. UAE campaigns have a few specific measurement gaps: sales that move to marketplaces such as Amazon.ae and noon where your codes may not apply, cash-on-delivery orders that are later refused, bilingual campaigns where Arabic and English content need separate tracking, and audiences outside the UAE inflating reach. These are covered in the UAE and GCC section of how to measure influencer marketing ROI.",
      links: [{ text: "how to measure influencer marketing ROI", href: "/blog/measuring-influencer-campaign-roi" }],
    },
    { type: "heading", text: "How to plan a UAE campaign", id: "planning" },
    {
      type: "list",
      items: [
        "Write one objective and one primary metric",
        "Define the audience by nationality, language, emirate and resident-or-tourist, not just 'UAE'",
        "Choose language and platform from that audience, not from what worked in another market",
        "Check permits, sector approvals and promotion permits before briefing",
        "Shortlist creators whose audience data matches, and record permit numbers",
        "Brief in the language of the content, with disclosure, claims and cultural review written in",
        "Track per creator and per language; review mid-campaign; debrief against the objective",
      ],
    },
    {
      type: "paragraph",
      text: "A reusable brief with UAE-specific fields is in the influencer campaign brief template for UAE brands, and the questions to put to an agency are in how to choose an influencer marketing agency for a UAE campaign.",
      links: [
        { text: "influencer campaign brief template for UAE brands", href: "/blog/influencer-campaign-brief-template-uae" },
        { text: "how to choose an influencer marketing agency for a UAE campaign", href: "/blog/choose-influencer-marketing-agency-uae" },
      ],
    },
    { type: "heading", text: "UAE guides by industry and topic", id: "guides" },
    {
      type: "table",
      headers: ["Topic", "Guide"],
      rows: [
        ["Beauty and personal care", "Influencer marketing for beauty brands in the UAE"],
        ["Fashion and modest fashion", "Influencer marketing for fashion brands in Dubai"],
        ["Restaurants and cafes", "Restaurant influencer marketing in Dubai"],
        ["Hotels, attractions and travel", "Influencer marketing for travel brands in the UAE"],
        ["Online retail", "Influencer marketing for e-commerce brands in the UAE"],
        ["Health and wellness", "Influencer marketing for healthcare and wellness brands in the UAE"],
        ["Financial services", "Influencer marketing for fintech brands in the UAE"],
        ["Business audiences", "B2B influencer marketing in Dubai"],
        ["Apps", "Influencer marketing for mobile apps in the UAE"],
        ["Content production", "UGC agencies in Dubai"],
        ["Saudi Arabia", "Influencer marketing in Saudi Arabia"],
        ["Regional expansion", "Influencer marketing for brands entering the GCC"],
      ],
    },
    {
      type: "paragraph",
      text: "Start with the industry guide closest to your business: beauty brands, fashion brands, restaurants, travel brands, e-commerce, healthcare and wellness, fintech, B2B, mobile apps, UGC partners, Saudi Arabia, or expanding across the GCC.",
      links: [
        { text: "beauty brands", href: "/blog/influencer-marketing-beauty-brands-uae" },
        { text: "fashion brands", href: "/blog/influencer-marketing-fashion-brands-dubai" },
        { text: "restaurants", href: "/blog/restaurant-influencer-marketing-dubai" },
        { text: "travel brands", href: "/blog/influencer-marketing-travel-brands-uae" },
        { text: "e-commerce", href: "/blog/influencer-marketing-ecommerce-brands-uae" },
        { text: "healthcare and wellness", href: "/blog/influencer-marketing-healthcare-wellness-uae" },
        { text: "fintech", href: "/blog/influencer-marketing-fintech-brands-uae" },
        { text: "B2B", href: "/blog/b2b-influencer-marketing-dubai" },
        { text: "mobile apps", href: "/blog/mobile-app-influencer-marketing-uae" },
        { text: "UGC partners", href: "/blog/ugc-agencies-dubai" },
        { text: "Saudi Arabia", href: "/blog/influencer-marketing-saudi-arabia" },
        { text: "expanding across the GCC", href: "/blog/gcc-influencer-marketing-playbook" },
      ],
    },
    { type: "heading", text: "Conclusion", id: "conclusion" },
    {
      type: "paragraph",
      text: "The UAE rewards brands that do the unglamorous work first: knowing exactly which community they're trying to reach, checking permits and approvals, and matching language and platform to that audience. The famous accounts are only one option. Often the better campaign is a set of creators whose audiences actually live where you sell, briefed in their own language, and measured against a result you defined before anyone posted.",
    },
  ],
  faqs: [
    {
      question: "Do influencers in the UAE need a licence?",
      answer:
        "Yes, in most cases. Since 31 January 2026, individuals advertising on social media in the UAE need an Advertiser Permit from the National Media Authority, whether they're paid in cash or in kind. People promoting their own business through their personal account are exempt, and visiting creators need a separate visitor permit arranged through an accredited agency. Check the authority's current guidance for your situation.",
    },
    {
      question: "Is the permit the brand's responsibility or the creator's?",
      answer:
        "The permit is issued to the creator, but brands and agencies that commission advertising should verify it before contracting and keep a record. Brands also remain responsible for the accuracy of claims and for any category approvals or promotion permits their campaign needs.",
    },
    {
      question: "Which platform is best for influencer marketing in the UAE?",
      answer:
        "It depends on the audience. Instagram is the default for lifestyle categories, TikTok for discovery and demonstrations, Snapchat for everyday storytelling with Gulf audiences, YouTube for reviews and long-form content, and LinkedIn for B2B. Choose from your audience's habits and each creator's own data.",
    },
    {
      question: "Does a Dubai influencer campaign reach Abu Dhabi?",
      answer:
        "Partly. Many Dubai creators have followers across the UAE, but if you need footfall or bookings in Abu Dhabi, check each creator's audience by city and consider Abu Dhabi-based creators. Some categories also need Abu Dhabi authorities' approval in addition to Dubai's.",
    },
  ],
};
