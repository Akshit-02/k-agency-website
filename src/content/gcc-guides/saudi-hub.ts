import type { BlogPost } from "@/content/blog";
import { AUTHOR, GCC2_PUBLISHED, GCC_LANGUAGE, GCC_PLAYBOOK, GCC_REVIEWED, REVIEW_DATE_TEXT, SRC } from "@/content/gcc-guides/shared";

/**
 * Topic 1420, Saudi pillar. Also absorbs topic 1424 (Arabic and dialect strategy in Saudi Arabia): a standalone
 * dialect page would have split one intent across two URLs and overlapped the UAE language guide.
 */
export const saudiHubPost: BlogPost = {
  slug: "influencer-marketing-saudi-arabia",
  category: "Influencer Marketing",
  title: "Influencer Marketing in Saudi Arabia: A Practical Guide for Brands",
  seoTitle: "Influencer Marketing in Saudi Arabia: A Guide for Brands",
  excerpt:
    "How influencer marketing works in Saudi Arabia: setting objectives, choosing creators, Arabic and dialect strategy, the platforms Saudi audiences use, industry use cases, budgets in SAR, measurement and the Mawthooq licence and other rules brands need to check.",
  metaDescription:
    "Saudi influencer marketing for brands: objectives, creator selection, Arabic dialects, Snapchat and TikTok, budgets in SAR, measurement and Mawthooq rules.",
  author: AUTHOR,
  publishedAt: GCC2_PUBLISHED,
  lastReviewed: GCC_REVIEWED,
  readingTime: "14 min read",
  inLanguage: GCC_LANGUAGE,
  spatialCoverage: "Saudi Arabia",
  breadcrumbParents: [GCC_PLAYBOOK],
  tags: ["influencer marketing Saudi Arabia", "influencer marketing KSA", "Saudi influencer campaigns", "Arabic influencer marketing Saudi Arabia", "influencer marketing Riyadh"],
  related: ["saudi-influencer-advertising-rules", "influencer-marketing-cost-saudi-arabia", "choose-influencer-marketing-agency-saudi-arabia"],
  hero: {
    src: "/blog/gcc-guides/influencer-marketing-saudi-arabia.svg",
    alt: "Planning a Saudi influencer campaign: objective, region and dialect, platform mix, licensed creators, budget in SAR and measurement",
  },
  body: [
    {
      type: "paragraph",
      text: "Saudi Arabia is the largest creator market in the Gulf by population, and one of the most regulated. Most of its people are Saudi nationals, most campaigns run in Arabic, Snapchat and TikTok reach a larger share of the population than in most markets, and creators who earn from promotional content need a licence from the national media regulator. Brands that arrive with a Dubai playbook usually find that very little of it transfers unchanged.",
    },
    { type: "heading", text: "Quick answer", id: "quick-answer" },
    {
      type: "paragraph",
      text: "Influencer marketing in Saudi Arabia means paying or gifting creators to promote a product or service to audiences in the Kingdom. Start with one objective and a defined audience by region, age and language; choose Saudi creators whose audiences are in the cities you sell to, and who hold a valid Mawthooq licence from the General Authority for Media Regulation (GAMR); brief in Arabic and adapt to the right dialect; plan around Snapchat, TikTok, YouTube, Instagram and X according to the objective; budget in SAR with 15% VAT; and measure with tracked links, codes and app attribution. Check category rules too: health products, food, discounts and contests have their own requirements.",
    },
    { type: "heading", text: "What makes the Saudi market different", id: "market" },
    {
      type: "table",
      headers: ["Feature", "What it means for campaigns"],
      rows: [
        ["Large, mostly national population", "About 34.7 million people (DataReportal, late 2025), the majority Saudi nationals. Campaigns are usually built for Saudis first, with expatriate segments as a separate plan"],
        ["Young, mobile-first audience", "Short-form video and daily storytelling formats dominate creator work"],
        ["Distinct regions", "Riyadh, Jeddah and the Western Region, the Eastern Province and the South differ in dialect, culture and shopping habits"],
        ["Licensed creator market", "Creators who earn from promotional content need a Mawthooq licence, and advertising may only run through accounts registered with GAMR"],
        ["National calendar", "Founding Day (22 February), Saudi National Day (23 September), entertainment seasons, Ramadan and both Eids shape demand and creator availability"],
        ["Fast-growing entertainment, tourism and retail sectors", "Many new venues, events and brands compete for the same creators, especially in Riyadh"],
      ],
    },
    {
      type: "paragraph",
      text: "How these differences compare with the UAE is covered in Saudi Arabia vs UAE influencer marketing.",
      links: [{ text: "Saudi Arabia vs UAE influencer marketing", href: "/blog/influencer-marketing-saudi-arabia-vs-uae" }],
    },
    { type: "heading", text: "Set one objective first", id: "objectives" },
    {
      type: "table",
      headers: ["Objective", "Typical creator approach", "Primary measure"],
      rows: [
        ["Awareness for a launch or market entry", "A few well-known creators plus a wider group of mid-sized creators in priority cities", "Reach among the target audience in Saudi Arabia"],
        ["Consideration", "Reviews, demonstrations and comparisons from credible category creators", "Saves, profile and site visits, branded search"],
        ["Sales", "Creators with buying audiences, tracked links and codes, often with paid amplification", "Delivered orders and cost per order"],
        ["App installs and activation", "Demonstrations of the app solving a local problem", "Activated users, not installs"],
        ["Footfall and bookings", "City-specific creators for venues, restaurants and events", "Bookings and visits against a baseline"],
        ["Trust in a regulated category", "Fewer, more credible creators; tight claims review", "Qualified leads; sentiment"],
      ],
    },
    { type: "heading", text: "Choosing creators", id: "creators" },
    {
      type: "list",
      items: [
        "Licence: confirm a current Mawthooq licence and that the account you're paying for is the one registered with GAMR",
        "Audience location: what share of followers is in Saudi Arabia, and in which cities? Regional Arab creators often have large audiences outside the Kingdom",
        "Dialect and identity: does the creator's voice suit the region and audience you want?",
        "Category credibility: have they talked about your category before you approached them?",
        "Sponsored density: how many brands have they promoted recently, and any direct competitors?",
        "Content history: anything that conflicts with Saudi content standards or your brand's values",
        "Engagement quality: comments in the audience's language and dialect, asking real questions",
      ],
    },
    {
      type: "paragraph",
      text: "A full vetting process, including checks specific to Gulf campaigns, is in how to vet influencers.",
      links: [{ text: "how to vet influencers", href: "/blog/how-to-vet-influencers" }],
    },
    { type: "heading", text: "Arabic, dialects and creative", id: "arabic" },
    {
      type: "paragraph",
      text: "Most Saudi creator content is in spoken Saudi Arabic, not Modern Standard Arabic. The Kingdom isn't linguistically uniform: Najdi Arabic is associated with Riyadh and the central region, Hijazi with Jeddah, Makkah and Madinah, Gulf varieties with the Eastern Province, and southern varieties with regions such as Asir and Jazan. A creator who sounds natural to an audience in Jeddah may sound like an outsider to one in Riyadh, or simply like a different kind of person. That isn't a reason to split every campaign by dialect, but it is a reason to choose deliberately.",
    },
    {
      type: "table",
      headers: ["Decision", "Options", "How to decide"],
      rows: [
        ["Language", "Arabic, English, bilingual", "Arabic for most national audiences; English or bilingual for some premium, expatriate or professional segments. Test rather than assume"],
        ["Dialect", "A national 'white' Saudi register, or region-specific voices", "Match the dialect to where you sell. National launches often mix creators from several regions"],
        ["Script", "Creator-written, brand-outlined, or scripted", "Let creators write in their own words; give them the facts, claims and must-haves"],
        ["Subtitles", "None, Arabic, English, both", "Subtitles help with sound-off viewing and reach secondary audiences; check accuracy"],
        ["Review", "Native Saudi reviewer for each region used", "Check meaning, tone, religious and cultural references, and claims"],
      ],
    },
    {
      type: "list",
      items: [
        "Research first: comments, search terms and existing creator content show how your audience actually talks about the category",
        "Adapt the idea, not just the words: humor, family roles and references differ from the UAE, Egypt or the Levant",
        "Avoid translated scripts; they read as foreign even when grammatically correct",
        "Test bilingual or English versions only where there's evidence of an audience for them, and track each language separately",
        "Don't assume Arabic always wins: for some products and segments English performs well. Let segment-level results decide",
      ],
    },
    {
      type: "paragraph",
      text: "The approach to language choice in a more mixed market is compared in Arabic vs English influencer campaigns in the UAE.",
      links: [{ text: "Arabic vs English influencer campaigns in the UAE", href: "/blog/arabic-vs-english-influencer-campaigns-uae" }],
    },
    { type: "heading", text: "Platforms", id: "platforms" },
    {
      type: "paragraph",
      text: "DataReportal's Digital 2026 Saudi Arabia report gives these advertising-audience figures for late 2025. They aren't active-user counts, and TikTok's figure exceeds the adult population, so treat them as relative indicators. Snap reported 25 million monthly users in Saudi Arabia in November 2024.",
      links: [
        { text: "DataReportal's Digital 2026 Saudi Arabia report", href: SRC.datareportalKsa.url },
        { text: "Snap reported", href: SRC.snapKsa.url },
      ],
    },
    {
      type: "table",
      headers: ["Platform", "Ad reach (share of population)", "Typical role"],
      rows: [
        ["TikTok (18+)", "38.6 million (above the adult population)", "Discovery, trends, demonstrations, entertainment"],
        ["YouTube", "27.5 million (79.2%)", "Reviews, long-form, explainers, gaming"],
        ["Snapchat", "25.3 million (72.9%)", "Daily storytelling, behind the scenes, local recommendations"],
        ["Instagram", "18.2 million (52.4%)", "Lifestyle, beauty, fashion, food, visual products"],
        ["X", "15.0 million (43.1%)", "News, commentary, sport, public conversation"],
        ["LinkedIn (registered members)", "12.0 million (34.6%)", "B2B, professional services, recruitment"],
      ],
    },
    {
      type: "paragraph",
      text: "Platform-specific planning is covered in TikTok influencer marketing in Saudi Arabia and Snapchat influencer marketing in Saudi Arabia.",
      links: [
        { text: "TikTok influencer marketing in Saudi Arabia", href: "/blog/tiktok-influencer-marketing-saudi-arabia" },
        { text: "Snapchat influencer marketing in Saudi Arabia", href: "/blog/snapchat-influencer-marketing-saudi-arabia" },
      ],
    },
    { type: "heading", text: "Licences and rules to check", id: "rules" },
    {
      type: "paragraph",
      text: `Reviewed ${REVIEW_DATE_TEXT}. A planning summary, not legal advice. Creators who earn from advertising content on social media need a Mawthooq licence from GAMR, and agencies and advertising offices have their own licence. Online advertisements must make clear that they're promotional under the E-Commerce Law, discounts and contests need a Ministry of Commerce licence, and some product categories regulated by the Saudi Food and Drug Authority need advertising approval. The details, with sources, are in Saudi influencer advertising rules.`,
      links: [{ text: "Saudi influencer advertising rules", href: "/blog/saudi-influencer-advertising-rules" }],
    },
    { type: "heading", text: "Industry use cases", id: "industries" },
    {
      type: "table",
      headers: ["Industry", "What tends to work", "Watch for"],
      rows: [
        ["Beauty and fragrance", "Tutorials, routines, fragrance and oud culture, occasion looks", "Product listing and claims; therapeutic language"],
        ["E-commerce and retail", "Demonstrations, creator codes, marketplace and store links", "E-Commerce Law disclosure; discount licences"],
        ["Food, cafes and restaurants", "City-specific creators, openings, Ramadan and late-night content", "Prior approval rules for some food advertising"],
        ["Entertainment, events and tourism", "Experience-led content around seasons and events", "Venue filming permissions; creator availability peaks"],
        ["Apps and fintech", "Explainers, onboarding demos, community use cases", "Financial-promotion rules; activation, not installs"],
        ["Automotive and electronics", "Reviews and comparisons on YouTube and Snapchat", "Accurate specifications and pricing"],
      ],
    },
    {
      type: "paragraph",
      text: "Two sectors have their own guides: influencer marketing for beauty brands in Saudi Arabia and influencer marketing for e-commerce brands in Saudi Arabia.",
      links: [
        { text: "influencer marketing for beauty brands in Saudi Arabia", href: "/blog/influencer-marketing-beauty-brands-saudi-arabia" },
        { text: "influencer marketing for e-commerce brands in Saudi Arabia", href: "/blog/influencer-marketing-ecommerce-brands-saudi-arabia" },
      ],
    },
    { type: "heading", text: "Budgets", id: "budgets" },
    {
      type: "paragraph",
      text: "Plan and contract in Saudi riyals and confirm whether quotes include 15% VAT. Creator fees depend on audience size and quality, format, number of deliverables, usage rights, exclusivity and timing, and peak periods such as Ramadan raise demand. There's no official rate card; published per-post ranges come from agencies and don't disclose their methods. How to build a budget, with those published estimates labelled as such, is in how much influencer marketing costs in Saudi Arabia.",
      links: [{ text: "how much influencer marketing costs in Saudi Arabia", href: "/blog/influencer-marketing-cost-saudi-arabia" }],
    },
    { type: "heading", text: "Measurement", id: "measurement" },
    {
      type: "list",
      items: [
        "Track Saudi results separately from any other market, in SAR",
        "Give each creator a unique link and code; for apps, use your mobile measurement partner's links",
        "Report audience in Saudi Arabia, not total reach, where creator insights allow",
        "Count delivered orders where cash on delivery or returns are common",
        "Compare seasonal campaigns with the same season last year",
        "Separate organic posts from paid amplification of creator content",
      ],
    },
    {
      type: "paragraph",
      text: "Comparing Saudi results with other Gulf markets fairly is covered in GCC influencer campaign reporting.",
      links: [{ text: "GCC influencer campaign reporting", href: "/blog/gcc-influencer-campaign-reporting" }],
    },
    { type: "heading", text: "Working with an agency", id: "agency" },
    {
      type: "paragraph",
      text: "Many international brands use an agency for Saudi campaigns because of language, licensing and creator relationships. The checks that matter, including licences, Saudi creator sourcing and transparency on creator fees, are in how to choose an influencer marketing agency in Saudi Arabia.",
      links: [{ text: "how to choose an influencer marketing agency in Saudi Arabia", href: "/blog/choose-influencer-marketing-agency-saudi-arabia" }],
    },
    { type: "heading", text: "A planning sequence", id: "planning" },
    {
      type: "list",
      items: [
        "Write the objective, the primary metric and the regions that matter",
        "Check category rules and whether any approvals or licences are needed before content is filmed",
        "Decide language and dialect from audience research",
        "Shortlist creators with verified Mawthooq licences and Saudi audiences",
        "Brief in Arabic, with approved claims and disclosure",
        "Set up tracking per creator and per language; agree paid amplification and rights",
        "Review mid-campaign, then compare results by creator, city and format",
      ],
    },
    { type: "heading", text: "Conclusion", id: "conclusion" },
    {
      type: "paragraph",
      text: "Saudi Arabia rewards brands that treat it as its own market: Arabic-first creative in the right voice, licensed creators whose audiences are actually in the Kingdom, platforms chosen for the job, and measurement in SAR against a clear objective. Start with one region or objective, learn which creators move your numbers, and expand from there.",
    },
  ],
  faqs: [
    {
      question: "Do influencers in Saudi Arabia need a licence?",
      answer:
        "Creators who earn from advertising content on social media need a Mawthooq licence from the General Authority for Media Regulation, and may only advertise through accounts registered with it. Check current conditions with GAMR before contracting.",
    },
    {
      question: "Which platforms matter most for influencer marketing in Saudi Arabia?",
      answer:
        "TikTok, YouTube and Snapchat reach very large shares of the population, with Instagram and X also important. The right mix depends on the objective: discovery, daily storytelling, reviews or conversation.",
    },
    {
      question: "Should Saudi influencer campaigns be in Arabic?",
      answer:
        "For most national audiences, yes, and usually in spoken Saudi Arabic chosen for the region you're targeting. English or bilingual content can work for some segments; test and track each language separately.",
    },
    {
      question: "How long does it take to plan a Saudi influencer campaign?",
      answer:
        "Allow time for licence checks, any category approvals, Arabic briefing and native review. Several weeks is typical for a first campaign, and longer around Ramadan and national occasions when creators are booked early.",
    },
  ],
};
