import type { BlogPost } from "@/content/blog";
import { UK_AUTHOR, UK_HUB, UK_LANGUAGE, UK_PUBLISHED, UK_REVIEW_DATE_TEXT, UK_REVIEWED, UK_SRC } from "@/content/uk-guides/shared";

/**
 * UK cluster planning guides (1860–1909): giveaways (1866), regulated products (1867, with 1880, 1881, 1882 and 1885),
 * regional strategy (1879, with 1873–1878), seasonal retail moments (1896, with 1897 and 1898) and e-commerce
 * (1902, with 1903). See docs/uk-seo-audit-1860-1909.md.
 */
const ONLINE_SELLING = "https://www.gov.uk/online-and-distance-selling-for-businesses";

export const ukPlanningPosts: BlogPost[] = [
  // 1866
  {
    slug: "influencer-giveaways-uk",
    category: "Influencer Marketing",
    title: "UK Influencer Giveaways and Competitions: What Brands Need to Get Right",
    seoTitle: "UK Influencer Giveaways: Rules for Brands",
    excerpt:
      "How to run influencer giveaways and prize draws in the UK: CAP Code section 8, what the post must say, like-share-tag mechanics, random and independent winner selection, awarding prizes, purchase-to-enter and lotteries, Northern Ireland, disclosure, winner data and a checklist.",
    metaDescription:
      "Run UK influencer giveaways well: CAP Code section 8, terms in the post, random winner selection, prizes, purchase to enter, disclosure and winner data.",
    author: UK_AUTHOR,
    publishedAt: UK_PUBLISHED,
    lastReviewed: UK_REVIEWED,
    readingTime: "4 min read",
    inLanguage: UK_LANGUAGE,
    spatialCoverage: "United Kingdom",
    breadcrumbParents: [UK_HUB],
    tags: ["influencer giveaway UK rules", "Instagram giveaway rules UK", "prize draw rules UK", "CAP Code section 8", "influencer competition UK"],
    related: ["influencer-advertising-rules-uk", "influencer-marketing-uk", "influencer-marketing-data-privacy"],
    hero: {
      src: "/blog/uk-guides/influencer-giveaways-uk.svg",
      alt: "Running a UK influencer giveaway: state the terms, track entries, pick randomly and independently, award and publish, label as an ad",
    },
    body: [
      {
        type: "paragraph",
        text: "Giveaways are one of the most common influencer formats and one of the most complained about. In the UK, prize promotions are covered by section 8 of the CAP Code, which the ASA applies to brands and influencers alike, and by lottery law. Problems usually come from missing terms, winners who can't be shown to have been picked fairly, and prizes that never arrive. This is general guidance, not legal advice.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "State the significant conditions in the post itself (how to enter, closing date, prize, eligibility), link to full terms, only use entry mechanics you can track, pick the winner at random through a verifiable process or an independent person, keep the evidence, award the prize promptly at no cost to the winner, and publish who won. Brands and influencers who run a giveaway together can both be responsible, and the post needs an 'Ad' label.",
      },
      { type: "heading", text: "What the post must say", id: "terms" },
      {
        type: "table",
        headers: ["Condition", "Why it matters"],
        rows: [
          ["How to enter, including every platform", "Entry across several platforms is a significant condition"],
          ["Closing date and time", "The ASA has upheld complaints where it was missing"],
          ["Prize: what and how many", "Prizes must be awarded as described"],
          ["Eligibility: age, location (UK only?)", "Excludes people who can't win before they enter"],
          ["Link to full terms", "Including how and when winners are notified"],
        ],
      },
      {
        type: "paragraph",
        text: "The ASA doesn't usually accept that a social post is too short for these conditions. Source: CAP's advice on prize draws in social media.",
        links: [{ text: "CAP's advice on prize draws in social media", href: UK_SRC.asaPrizeDraws.url }],
      },
      { type: "heading", text: "Like, share, tag and follow mechanics", id: "mechanics" },
      {
        type: "list",
        items: [
          "You must be able to see and include every valid entry. If you can't track a mechanic (for example, shares to private Stories), don't use it.",
          "Bonus entries must genuinely improve the chance of winning.",
          "Check eligibility yourself rather than asking entrants to send proof.",
          "Check each platform's promotion policies before launch.",
          "Plan for volume: large audiences produce large entry numbers, and the ASA expects promoters to cope.",
        ],
      },
      { type: "heading", text: "Picking and announcing winners", id: "winners" },
      {
        type: "list",
        items: [
          "Use a verifiably random computer process or an independent person. A staff member scrolling comments isn't independent.",
          "Keep evidence of how the winner was chosen.",
          "Make reasonable attempts to contact winners; one public post is unlikely to be enough.",
          "Award the prize as described, or a reasonable equivalent if it becomes unavailable, and don't charge winners to claim it.",
          "Make evidence of the award available, such as the winner's surname and county, and say in the terms that you will.",
        ],
      },
      { type: "heading", text: "Prize draws, competitions and lotteries", id: "lotteries" },
      {
        type: "paragraph",
        text: "A prize draw that relies on chance can become an illegal lottery if people pay to enter. In Great Britain, buying a product to enter isn't treated as payment as long as the price isn't inflated to fund the promotion. Northern Ireland used to differ, requiring a free entry route, but its law was aligned with Great Britain's from 27 April 2022. Competitions that genuinely test skill follow different rules. Take legal advice before any draw linked to a purchase.",
        links: [{ text: "aligned with Great Britain's from 27 April 2022", href: UK_SRC.niPrizeDraws.url }],
      },
      { type: "heading", text: "Disclosure and joint promotions", id: "disclosure" },
      {
        type: "paragraph",
        text: "The ASA's influencer guidance treats prize draws and giveaways that creators run or take part in as content that must be labelled as advertising, so start the post with 'Ad'. When a brand and an influencer run a giveaway together, both can be held responsible for every stage, so agree in writing who writes the terms, who runs the draw, who contacts the winner and who sends the prize. Labels are covered in UK influencer advertising rules.",
        links: [
          { text: "ASA's influencer guidance", href: UK_SRC.asaInfluencerGuidePdf.url },
          { text: "UK influencer advertising rules", href: "/blog/influencer-advertising-rules-uk" },
        ],
      },
      { type: "heading", text: "Winner data", id: "data" },
      {
        type: "paragraph",
        text: "Collect only what you need to deliver the prize, through a form with a privacy notice, and delete it afterwards. Don't use entries for marketing unless people have agreed to it separately, and don't ask creators to forward entrant lists. Restrictions on children's data also apply if under-18s can enter. Practical data handling is covered in influencer marketing data privacy, written for India but with the same principles.",
        links: [{ text: "influencer marketing data privacy", href: "/blog/influencer-marketing-data-privacy" }],
      },
      { type: "heading", text: "Giveaway checklist", id: "checklist" },
      {
        type: "template",
        label: "Before a UK influencer giveaway goes live",
        text: "□ 'Ad' label upfront\n□ How to enter, closing date, prize, eligibility in the post\n□ Link to full terms (including winner notification and publication)\n□ Every entry mechanic trackable\n□ Random, verifiable selection method agreed; evidence kept\n□ Roles agreed between brand and creator\n□ Purchase-linked? Legal advice taken\n□ Prize ready to send; no cost to winner\n□ Winner data form with privacy notice; deletion date set\n□ Platform promotion policies checked",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "No closing date in the post.",
          "The creator picking a favourite from the comments.",
          "Entry by shares that can't be seen.",
          "Prizes sent months late, or not at all.",
          "No 'Ad' label because the creator is 'giving something away'.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A UK giveaway is a promotion with rules, not just a post. Put the terms in the post, keep the selection random and documented, deliver what you promised, and label it as an ad. Wider planning is in influencer marketing in the UK.",
        links: [{ text: "influencer marketing in the UK", href: "/blog/influencer-marketing-uk" }],
      },
    ],
    faqs: [
      {
        question: "What are the rules for Instagram giveaways in the UK?",
        answer:
          "CAP Code section 8 applies: state how to enter, the closing date, the prize and eligibility in the post, link to full terms, use trackable entry methods, pick winners randomly via a verifiable process or independent person, award prizes as described and publish evidence of the winner.",
      },
      {
        question: "Does an influencer giveaway need an #ad label?",
        answer:
          "Yes. The ASA's influencer guidance treats giveaways creators run or take part in as advertising, so the post should be labelled 'Ad' upfront.",
      },
    ],
  },
  // 1867 (+1880, 1881, 1882, 1885)
  {
    slug: "regulated-products-influencer-marketing-uk",
    category: "Influencer Marketing",
    title: "Influencer Marketing for Regulated Products in the UK: Food, Alcohol, Gambling, Medicines, Finance and Green Claims",
    seoTitle: "UK Influencer Rules for Regulated Products",
    excerpt:
      "Sector rules UK brands must check before working with creators: less healthy food from January 2026, alcohol and under-25s, gambling and strong appeal to under-18s, prescription-only medicines including weight-loss injections, financial promotions and FG24/1, and environmental claims in fashion and beyond.",
    metaDescription:
      "UK influencer rules for regulated products: less healthy food, alcohol, gambling, prescription medicines, financial promotions and green claims.",
    author: UK_AUTHOR,
    publishedAt: UK_PUBLISHED,
    lastReviewed: UK_REVIEWED,
    readingTime: "5 min read",
    inLanguage: UK_LANGUAGE,
    spatialCoverage: "United Kingdom",
    breadcrumbParents: [UK_HUB],
    tags: ["influencer marketing regulated products UK", "HFSS influencer rules", "alcohol influencer rules UK", "finfluencer rules UK", "weight loss injection influencer ads"],
    related: ["influencer-advertising-rules-uk", "influencer-marketing-uk", "influencer-giveaways-uk"],
    hero: {
      src: "/blog/uk-guides/regulated-products-influencer-marketing-uk.svg",
      alt: "UK sector checks before briefing creators: food, alcohol, gambling, medicines, finance, green claims",
    },
    body: [
      {
        type: "paragraph",
        text: "Disclosure is only the first rule. In several UK categories, what a creator can say, who they can be, and whether paid creator content is allowed at all are restricted. These rules change, and some are recent. Check them before briefing creators, not after the post goes live. This guide summarises the main sectors with links to the official guidance; it isn't legal advice.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "table",
        headers: ["Category", "Key rule for creator content", "Source"],
        rows: [
          ["Less healthy food and drink", "Paid online ads for identifiable less healthy products are banned from 5 January 2026; paying creators to post them is likely caught", "CAP guidance, rule 15.19"],
          ["Alcohol", "Nobody shown drinking or playing a significant role, including influencers, may be or seem under 25", "CAP rule 18.16"],
          ["Gambling", "No creators or content with strong appeal to under-18s (since 1 October 2022)", "CAP and BCAP rules"],
          ["Prescription-only medicines", "Can't be advertised to the public; this includes influencer and affiliate posts about weight-loss injections and Botox", "CAP rule 12.12"],
          ["Financial products", "Promotions must be made or approved by an FCA-authorised firm; unauthorised 'finfluencers' risk a criminal offence", "FSMA s21, FCA FG24/1"],
          ["Environmental claims", "Claims must be specific, accurate and evidenced across the supply chain", "CMA Green Claims Code, fashion guidance"],
        ],
      },
      { type: "heading", text: "Less healthy food and drink", id: "food" },
      {
        type: "paragraph",
        text: "From 5 January 2026, CAP rule 15.19 bans paid-for online advertising of identifiable 'less healthy' products: those that are high in fat, salt or sugar under the nutrient profiling model and in one of the government's listed categories. CAP's guidance says a brand paying an influencer to show a specific less healthy product on the influencer's own channels is likely to be prohibited, and that gifting and affiliate arrangements are likely to count as payment. Content an influencer makes that the brand posts on its own channels is unlikely to be in scope, because the placement wasn't paid for, but boosting it would be. Brand-only content with no identifiable product may fall outside the rule. Keep nutrient-profile evidence for anything you rely on.",
        links: [
          { text: "CAP's guidance", href: UK_SRC.lhfGuidance.url },
          { text: "rule 15.19", href: UK_SRC.lhfNews.url },
        ],
      },
      {
        type: "paragraph",
        text: "Health and nutrition claims for food and supplements have their own rules in CAP Code section 15: only authorised claims can be used, so give creators the exact approved wording.",
        links: [{ text: "CAP Code section 15", href: UK_SRC.cap15.url }],
      },
      { type: "heading", text: "Alcohol", id: "alcohol" },
      {
        type: "paragraph",
        text: "CAP rule 18.16 says anyone drinking or playing a significant role in an alcohol ad must neither be nor seem to be under 25, and CAP applies this to influencers and celebrities. Proof of age isn't enough if they look younger. Alcohol ads also mustn't appear in media where more than 25% of the audience is under 18, so check a creator's audience age, not just their own. CAP has parallel rules for alcohol alternatives (low and no-alcohol versions), so check those too.",
        links: [
          { text: "CAP rule 18.16", href: UK_SRC.alcoholUnder25.url },
          { text: "applies this to influencers and celebrities", href: UK_SRC.alcoholInfluencers.url },
        ],
      },
      { type: "heading", text: "Gambling", id: "gambling" },
      {
        type: "paragraph",
        text: "Since 1 October 2022, gambling and lottery ads can't include people or content with strong appeal to under-18s, a stricter test than the earlier 'particular appeal'. The ASA said this would significantly affect the use of sportspeople, reality stars and social media influencers popular with young people. Assess each creator's audience and profile before booking, and keep the evidence.",
        links: [{ text: "Since 1 October 2022", href: UK_SRC.gamblingStrongAppeal.url }],
      },
      { type: "heading", text: "Prescription-only medicines, weight loss and aesthetics", id: "medicines" },
      {
        type: "paragraph",
        text: "Prescription-only medicines and treatments can't be advertised to the public under CAP rule 12.12. The ASA treats all injectable weight-loss medicines as prescription-only and has ruled against influencer and affiliate posts that promoted them through images of pens, hashtags or referral codes, even without naming a drug. Botox and similar injectables are also prescription-only. A clinic or pharmacy can promote a consultation service, carefully, but creators shouldn't post about the medicine itself.",
        links: [
          { text: "CAP rule 12.12", href: UK_SRC.pomAdvice.url },
          { text: "ruled against influencer and affiliate posts", href: UK_SRC.pomWeightLoss.url },
        ],
      },
      { type: "heading", text: "Financial products", id: "finance" },
      {
        type: "paragraph",
        text: "Under section 21 of the Financial Services and Markets Act 2000, a financial promotion made in the course of business must be made or approved by an FCA-authorised person unless an exemption applies. The FCA's FG24/1 guidance (March 2024) reads 'in the course of business' broadly, so paid or affiliate creators are caught, and says unauthorised influencers promoting regulated products without approval may be committing a criminal offence. Each post must be compliant on its own, including required risk warnings. Finance brands should route every creator post through their financial promotions approval process.",
        links: [{ text: "FCA's FG24/1 guidance", href: UK_SRC.fcaFg241.url }],
      },
      { type: "heading", text: "Environmental claims (fashion, beauty, home)", id: "green" },
      {
        type: "paragraph",
        text: "The CMA's Green Claims Code and its 2024 guidance for fashion retail say claims must be specific and evidenced: 'made with 60% recycled polyester', not 'eco-friendly' or 'sustainable' without explanation. The guidance includes social media examples and says every business in the supply chain is responsible for its claims. Give creators the exact approved environmental wording and keep the evidence.",
        links: [
          { text: "Green Claims Code", href: UK_SRC.greenClaimsCode.url },
          { text: "2024 guidance for fashion retail", href: UK_SRC.cmaFashionGreen.url },
        ],
      },
      { type: "heading", text: "Beauty, fitness and other claims", id: "other-claims" },
      {
        type: "list",
        items: [
          "Before-and-after images and results claims need evidence and mustn't be exaggerated by filters; the CMA treats claimed results a creator hasn't experienced as misleading.",
          "Fitness and supplement brands: weight-loss claims and health claims are tightly restricted; brief only approved wording.",
          "Children: ads aimed at children need extra care with content and disclosure, and some categories can't target them at all.",
        ],
      },
      { type: "heading", text: "A pre-brief check", id: "check" },
      {
        type: "template",
        label: "Regulated category check before briefing creators",
        text: "1. Is the product in a restricted category? (food, alcohol, gambling, medicines, finance, others)\n2. Is paid creator content allowed for it at all?\n3. Creator checks: age, appearance, audience age profile\n4. Approved claims and evidence on file\n5. Required warnings or approvals (e.g. financial promotion sign-off)\n6. Placement: organic only, or paid amplification? (food rules differ)\n7. Named reviewer for every post",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Assuming organic creator posts escape the less healthy food rules when the brand paid for them.",
          "Booking a 24-year-old creator for an alcohol brand.",
          "Using referral codes for prescription treatments.",
          "Letting creators describe investments without authorised approval.",
          "Allowing 'eco' or 'sustainable' without specifics.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "In regulated UK categories, the first question isn't which creator but whether, and how, creators can promote the product at all. Check the sector rules, brief approved wording, and review every post. Disclosure basics are in UK influencer advertising rules. Last checked " + UK_REVIEW_DATE_TEXT + ".",
        links: [{ text: "UK influencer advertising rules", href: "/blog/influencer-advertising-rules-uk" }],
      },
    ],
    faqs: [
      {
        question: "Can influencers promote HFSS or less healthy food in the UK?",
        answer:
          "Paid online advertising of identifiable less healthy food and drink is banned from 5 January 2026. CAP's guidance says paying influencers to post such products on their own channels is likely to be prohibited, and gifting can count as payment.",
      },
      {
        question: "Can influencers promote weight-loss injections in the UK?",
        answer:
          "No. They're prescription-only medicines, which can't be advertised to the public. The ASA has ruled against influencer and affiliate posts that promoted them, even without naming a drug.",
      },
      {
        question: "Can influencers promote financial products in the UK?",
        answer:
          "Only if the promotion is made or approved by an FCA-authorised firm, or an exemption applies. The FCA says unauthorised influencers promoting regulated products may commit a criminal offence.",
      },
    ],
  },
  // 1879 (+1873–1878)
  {
    slug: "regional-influencer-marketing-uk",
    category: "Influencer Marketing",
    title: "Regional Influencer Marketing in the UK: London, the English Regions, Scotland, Wales and Northern Ireland",
    seoTitle: "Regional Influencer Marketing in the UK",
    excerpt:
      "How to plan creator campaigns across UK regions and nations without thin, duplicated content: when a London focus makes sense, using regional creators in cities such as Manchester and Birmingham, Scotland, Welsh-language content, Northern Ireland's cross-border audiences, and a core-plus-local model.",
    metaDescription:
      "Plan UK regional influencer campaigns: London vs the regions, Scotland, Welsh-language content, Northern Ireland, and a core-plus-local model.",
    author: UK_AUTHOR,
    publishedAt: UK_PUBLISHED,
    lastReviewed: UK_REVIEWED,
    readingTime: "4 min read",
    inLanguage: UK_LANGUAGE,
    spatialCoverage: "United Kingdom",
    breadcrumbParents: [UK_HUB],
    tags: ["regional influencer marketing UK", "London influencer marketing", "Manchester influencer marketing", "Scotland influencer marketing", "Welsh language influencer campaigns"],
    related: ["influencer-marketing-uk", "seasonal-influencer-marketing-uk", "influencer-advertising-rules-uk"],
    hero: {
      src: "/blog/uk-guides/regional-influencer-marketing-uk.svg",
      alt: "UK regional creator planning: one core message, local creators, nation-specific details, regional measurement",
    },
    body: [
      {
        type: "paragraph",
        text: "Many UK campaigns default to London creators and a national message. That's often fine, but it can miss audiences who don't see themselves in London content, and it ignores real differences between the four nations: language in Wales, school holidays and some laws in Scotland, and Northern Ireland's links with the Republic of Ireland. This guide covers when to go regional and how to do it without making near-identical content for every city.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Keep one core message and add a local layer: creators who live in and talk to each region, local references they choose themselves, and nation-specific details where they matter (Welsh-language content, Scottish school dates, cross-border offers in Northern Ireland). Advertising rules are UK-wide, so labels and claims don't change by region. Measure by region with separate links or codes so you can tell which local layer earned its cost.",
      },
      { type: "heading", text: "When a regional approach is worth it", id: "when" },
      {
        type: "table",
        headers: ["Situation", "Regional fit"],
        rows: [
          ["Physical locations (stores, venues, events)", "Strong: creators near the location drive visits"],
          ["Uneven distribution or availability", "Strong: don't advertise where people can't buy"],
          ["Products with regional culture (food, sport, music)", "Strong, if creators lead the local angle"],
          ["National e-commerce with even demand", "Moderate: a national creator mix with regional diversity may be enough"],
          ["Small budget", "Weak: concentrate rather than spread thinly"],
        ],
      },
      { type: "heading", text: "London and the English regions", id: "england" },
      {
        type: "paragraph",
        text: "London has the densest creator supply and the most competition for it, so rates and availability can be tighter. Cities such as Manchester, Birmingham, Leeds, Bristol and Glasgow have their own creator communities, and audiences there may trust local creators more for local recommendations. Don't build content around regional clichés; let creators decide how their area appears. A city's name in a caption isn't localisation.",
      },
      { type: "heading", text: "Scotland", id: "scotland" },
      {
        type: "paragraph",
        text: "Advertising rules (ASA, CAP and consumer law) apply across the UK, but Scotland has its own school calendar, with summer holidays starting earlier than in England, plus its own public holidays and some separate laws, so check dates and any category-specific rules. Scottish creators can make national campaigns feel less London-centric without a separate campaign.",
      },
      { type: "heading", text: "Wales and the Welsh language", id: "wales" },
      {
        type: "paragraph",
        text: "In the 2021 Census, 538,300 people in Wales aged three or over (17.8%) said they could speak Welsh, with much higher shares in some areas. Welsh-language or bilingual creator content can reach audiences that English-only content doesn't, but it should be made by fluent creators, not translated afterwards. Disclosure still has to be clear to the audience, so pair any Welsh label with 'Ad' if you're unsure it will be understood.",
        links: [{ text: "2021 Census", href: UK_SRC.welshCensus.url }],
      },
      { type: "heading", text: "Northern Ireland", id: "northern-ireland" },
      {
        type: "list",
        items: [
          "Audiences follow creators and media from both sides of the border; content can reach people in the Republic of Ireland, where prices are in euros and different rules apply.",
          "Check that offers, delivery and prices apply to Northern Ireland; some UK promotions exclude it by default.",
          "Prize draw law in Northern Ireland was aligned with Great Britain's in 2022, but check terms for cross-border entrants; see UK influencer giveaways.",
        ],
      },
      {
        type: "paragraph",
        text: "Giveaway rules are in UK influencer giveaways.",
        links: [{ text: "UK influencer giveaways", href: "/blog/influencer-giveaways-uk" }],
      },
      { type: "heading", text: "A core-plus-local model", id: "model" },
      {
        type: "table",
        headers: ["Layer", "What's shared", "What's local"],
        rows: [
          ["Message", "One proposition and approved claims", "How each creator explains it"],
          ["Creators", "A few national creators", "Creators based in each priority region or nation"],
          ["Offer", "National price and offer", "Local stores, events or delivery details"],
          ["Tracking", "One campaign structure", "A link or code per region"],
          ["Timing", "Campaign window", "School holidays, local events"],
        ],
      },
      {
        type: "paragraph",
        text: "This avoids making separate near-identical campaigns (or separate near-identical web pages) for each city, while still giving each region a reason to pay attention. Seasonal timing is covered in seasonal influencer marketing in the UK.",
        links: [{ text: "seasonal influencer marketing in the UK", href: "/blog/seasonal-influencer-marketing-uk" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Treating London creators as 'the UK'.",
          "Scripted regional slang or accents.",
          "Translating English content into Welsh after the fact.",
          "Promoting offers that exclude Northern Ireland without saying so.",
          "No regional tracking, so nobody knows which local layer worked.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Regional creator marketing in the UK works best as one campaign with local voices, not many campaigns with swapped place names. Go regional where location, availability or culture matter, respect the nations' differences, and measure each layer. Wider planning is in influencer marketing in the UK.",
        links: [{ text: "influencer marketing in the UK", href: "/blog/influencer-marketing-uk" }],
      },
    ],
    faqs: [
      {
        question: "Should UK influencer campaigns use regional creators?",
        answer:
          "When location, availability or local culture matter, yes. Keep one core message and add creators based in each priority region, with separate tracking so you can see which local layer worked.",
      },
      {
        question: "Do advertising rules differ between England, Scotland, Wales and Northern Ireland?",
        answer:
          "ASA rules and consumer law on disclosure apply UK-wide. Some other laws, school calendars and holidays differ, so check category rules and dates for each nation.",
      },
    ],
  },
  // 1896 (+1897, 1898)
  {
    slug: "seasonal-influencer-marketing-uk",
    category: "Influencer Marketing",
    title: "UK Seasonal Influencer Campaigns: Black Friday, Christmas and the Retail Calendar",
    seoTitle: "UK Seasonal Influencer Campaigns: Black Friday to Christmas",
    excerpt:
      "How UK brands can plan creator campaigns around the retail calendar: dates for 2026–27, a Black Friday plan that goes beyond discount codes, a Christmas timeline, pricing rules for 'was/now' claims and drip pricing, and less healthy food rules at Christmas.",
    metaDescription:
      "Plan UK creator campaigns around the retail calendar: 2026–27 dates, Black Friday beyond discount codes, a Christmas timeline and UK pricing rules.",
    author: UK_AUTHOR,
    publishedAt: UK_PUBLISHED,
    lastReviewed: UK_REVIEWED,
    readingTime: "4 min read",
    inLanguage: UK_LANGUAGE,
    spatialCoverage: "United Kingdom",
    breadcrumbParents: [UK_HUB],
    tags: ["Black Friday influencer marketing UK", "Christmas influencer campaign UK", "UK retail calendar influencer", "seasonal influencer marketing UK", "Mothering Sunday influencer campaign"],
    related: ["influencer-marketing-uk", "ecommerce-influencer-marketing-uk", "regional-influencer-marketing-uk"],
    hero: {
      src: "/blog/uk-guides/seasonal-influencer-marketing-uk.svg",
      alt: "UK seasonal creator planning: pick the moments, book early, seed and test, peak posting, post-peak content",
    },
    body: [
      {
        type: "paragraph",
        text: "In the UK, the busiest creator weeks of the year are also the most crowded: Black Friday and Christmas compress demand for creators, inflate ad costs and fill feeds with discount codes. Brands that plan earlier, use creators for more than a code, and keep their pricing claims honest tend to get more from the season. This guide gives dates for 2026–27 and planning timelines.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Choose two or three moments that matter for your category, book creators 8 to 12 weeks ahead for Black Friday and Christmas, use creators for gift guides, demonstrations and comparisons rather than codes alone, line up paid amplification for the best content, and make sure every price claim is genuine: 'was' prices must be real and total prices shown upfront.",
      },
      { type: "heading", text: "Key dates, 2026–27", id: "dates" },
      {
        type: "table",
        headers: ["Moment", "Date", "Creator angle"],
        rows: [
          ["Bonfire Night", "Thursday 5 November 2026", "Events, food, local"],
          ["Black Friday", "Friday 27 November 2026", "Considered buys, comparisons, wishlists"],
          ["Cyber Monday", "Monday 30 November 2026", "Last-chance reminders"],
          ["Christmas", "Friday 25 December 2026", "Gift guides, hosting, how-to"],
          ["Boxing Day sales", "Saturday 26 December 2026", "Sale picks, returns help"],
          ["January sales and new year", "January 2027", "Resolutions, routines"],
          ["Valentine's Day", "Sunday 14 February 2027", "Gifts, experiences"],
          ["Mothering Sunday", "Sunday 7 March 2027", "Gifts; UK date differs from the US"],
          ["Easter Sunday", "28 March 2027", "Food, family, spring"],
          ["Father's Day", "Sunday 20 June 2027", "Gifts"],
          ["Back to school", "August (Scotland) to early September (England, Wales, Northern Ireland)", "Uniform, tech, routines"],
        ],
      },
      { type: "heading", text: "Black Friday beyond discount codes", id: "black-friday" },
      {
        type: "list",
        items: [
          "Weeks before: demonstrations and honest comparisons so people decide what to buy before prices drop.",
          "Wishlist content: 'what I'd buy if it's discounted', without promising prices you haven't confirmed.",
          "On the day: short reminders with the confirmed offer; pause if stock runs out.",
          "After: setup and how-to content for new buyers, which also reduces returns.",
          "Paid amplification: run the content that performed in the weeks before, rather than new untested posts.",
        ],
      },
      { type: "heading", text: "A Christmas timeline", id: "christmas" },
      {
        type: "table",
        headers: ["When", "What to do"],
        rows: [
          ["August to September", "Choose moments, budget and products; brief agencies"],
          ["September to early October", "Book creators; agree usage rights for ads; send products"],
          ["October", "Content created and approved; claims and labels checked"],
          ["November", "Gift guides and demonstrations go live; amplify the best"],
          ["Early to mid-December", "Last-order-date reminders; delivery promises checked"],
          ["Late December to January", "Sale and post-gift content; how-to for new owners"],
        ],
      },
      { type: "heading", text: "Pricing claims and sale rules", id: "pricing" },
      {
        type: "paragraph",
        text: "Under the DMCC Act, the CMA can fine businesses directly for misleading pricing. Its price transparency guidance (November 2025) says the total price, including unavoidable fees, should be shown upfront rather than added during checkout, and it has warned about misleading countdown timers. 'Was' prices in sale content must reflect genuine previous prices. A creator saying '50% off' is making your price claim, so give them only confirmed, accurate offers.",
        links: [{ text: "price transparency guidance", href: UK_SRC.cmaPriceTransparency.url }],
      },
      { type: "heading", text: "Christmas food and drink", id: "food" },
      {
        type: "paragraph",
        text: "Christmas content often features chocolate, mince pies and party food, many of which may count as less healthy under the rules in force from 5 January 2026. Paying creators to post identifiable less healthy products is likely to be prohibited online, and alcohol content must follow the under-25 rule. Check before briefing; see regulated products in UK influencer marketing.",
        links: [{ text: "regulated products in UK influencer marketing", href: "/blog/regulated-products-influencer-marketing-uk" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Booking creators in November for Black Friday.",
          "Posting prices before they're confirmed.",
          "Inflated 'was' prices.",
          "Codes as the only creator content.",
          "Using the US Mother's Day date for UK content.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Seasonal success in the UK comes from planning early, using creators to help people choose, amplifying content that already works, and keeping price claims genuine. For selling through creators year-round, see UK e-commerce influencer marketing.",
        links: [{ text: "UK e-commerce influencer marketing", href: "/blog/ecommerce-influencer-marketing-uk" }],
      },
    ],
    faqs: [
      {
        question: "When should UK brands book influencers for Black Friday and Christmas?",
        answer:
          "Around 8 to 12 weeks ahead, typically September to early October, so content can be made, approved and tested before November.",
      },
      {
        question: "When is Black Friday in 2026?",
        answer: "Friday 27 November 2026, with Cyber Monday on 30 November 2026.",
      },
    ],
  },
  // 1902 (+1903)
  {
    slug: "ecommerce-influencer-marketing-uk",
    category: "Influencer Marketing",
    title: "Influencer Marketing for UK E-Commerce and DTC Brands: Connecting Creator Content With Sales",
    seoTitle: "UK E-Commerce Influencer Marketing: Content to Sales",
    excerpt:
      "How UK e-commerce and direct-to-consumer brands can connect creator content with online sales: TikTok Shop and YouTube Shopping affiliates, affiliate networks and disclosure, tracking under UK consent rules, evaluating creators on new customers and returns, and review rules.",
    metaDescription:
      "Connect creator content with UK online sales: TikTok Shop affiliates, affiliate networks and disclosure, tracking, evaluating creators and review rules.",
    author: UK_AUTHOR,
    publishedAt: UK_PUBLISHED,
    lastReviewed: UK_REVIEWED,
    readingTime: "4 min read",
    inLanguage: UK_LANGUAGE,
    spatialCoverage: "United Kingdom",
    breadcrumbParents: [UK_HUB],
    tags: ["ecommerce influencer marketing UK", "DTC influencer marketing UK", "TikTok Shop affiliate UK", "influencer affiliate disclosure UK", "creator sales tracking UK"],
    related: ["influencer-marketing-uk", "seasonal-influencer-marketing-uk", "influencer-advertising-rules-uk"],
    hero: {
      src: "/blog/uk-guides/ecommerce-influencer-marketing-uk.svg",
      alt: "Connecting UK creator content to sales: choose channels, label affiliates, track, judge on customers, reuse content",
    },
    body: [
      {
        type: "paragraph",
        text: "For UK online retailers and DTC brands, creators sit across the whole funnel: discovery on TikTok and Instagram, consideration through reviews and comparisons, and sales through links, codes and in-app shops. The UK has its own mix of platform features, affiliate networks and consumer rules, which shapes what's possible.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Use TikTok Shop or YouTube Shopping affiliates where you sell through them, links and codes everywhere else, and an affiliate network or your own programme for ongoing commission deals. Every affiliate post is an ad and needs a specific 'Ad' label. Track with links and codes as well as analytics, judge creators on new customers, returns and repeat purchase, not just orders, and never trade products for reviews.",
      },
      { type: "heading", text: "Channels and what's available in the UK", id: "channels" },
      {
        type: "table",
        headers: ["Channel", "UK status (checked October 2026)", "Use it for"],
        rows: [
          ["TikTok Shop", "Live in the UK; creators can earn commission as affiliates", "In-app sales and live shopping"],
          ["YouTube Shopping affiliate", "Launched in the UK in July 2026, run with Awin; creators need at least 500 subscribers", "Product tags in videos, Shorts and live; sale completes on the retailer's site"],
          ["Affiliate networks and brand programmes", "Widely used in the UK (the ASA guide names Awin, Skimlinks and LTK)", "Ongoing commission partnerships"],
          ["Links and codes to your site", "Anywhere", "Tracking and offers"],
        ],
      },
      {
        type: "paragraph",
        text: "Sources: Retail Gazette on TikTok Shop and on YouTube's UK launch, and the ASA and CMA influencers' guide. YouTube's help-page country list hadn't been updated when we checked, so confirm eligibility in YouTube Studio.",
        links: [
          { text: "Retail Gazette on TikTok Shop", href: UK_SRC.tiktokShopUk.url },
          { text: "YouTube's UK launch", href: UK_SRC.youtubeShoppingUk.url },
          { text: "ASA and CMA influencers' guide", href: UK_SRC.asaInfluencerGuidePdf.url },
        ],
      },
      { type: "heading", text: "Affiliate disclosure", id: "affiliate-disclosure" },
      {
        type: "paragraph",
        text: "When a creator earns commission from links or codes, that content is advertising and both the brand and the creator are responsible for it. If only some products in a post are affiliate-linked, those parts must be clearly labelled; a general note that 'some links may earn commission' isn't enough, and labels such as 'aff' aren't understood. Details are in UK influencer advertising rules.",
        links: [{ text: "UK influencer advertising rules", href: "/blog/influencer-advertising-rules-uk" }],
      },
      { type: "heading", text: "Tracking sales", id: "tracking" },
      {
        type: "list",
        items: [
          "A unique link and code per creator; codes catch people who don't click.",
          "Analytics will miss visitors who decline cookies under UK consent rules, so reconcile against orders.",
          "In-app shop sales are reported by the platform; compare them with your own order data.",
          "For bigger budgets, test a holdout region or period to estimate what creators added.",
        ],
      },
      {
        type: "paragraph",
        text: "Reconciling platform figures with your own records is covered in why creator reports and analytics don't match.",
        links: [{ text: "why creator reports and analytics don't match", href: "/blog/influencer-reporting-discrepancies" }],
      },
      { type: "heading", text: "Evaluating creators for a DTC brand", id: "evaluate" },
      {
        type: "table",
        headers: ["Measure", "Why it matters"],
        rows: [
          ["New-customer share", "Codes often go to existing customers"],
          ["Return rate by creator", "Under UK distance-selling rules customers can usually cancel within 14 days, so returns hit margins"],
          ["Repeat purchase", "Shows whether the creator brought the right customers"],
          ["Contribution after fees, discount and returns", "Revenue alone flatters high-discount creators"],
          ["Content reusable in ads", "Value beyond the post itself"],
        ],
      },
      {
        type: "paragraph",
        text: "Cancellation rights are explained in GOV.UK's guide to online and distance selling. Comparing creators on customer quality is covered in how to measure customer quality from influencer campaigns.",
        links: [
          { text: "GOV.UK's guide to online and distance selling", href: ONLINE_SELLING },
          { text: "how to measure customer quality from influencer campaigns", href: "/blog/influencer-customer-quality" },
        ],
      },
      { type: "heading", text: "Reviews: what's banned", id: "reviews" },
      {
        type: "paragraph",
        text: "Under the DMCC Act, fake reviews and reviews that hide an incentive are banned, and businesses can be liable for reviews they commission. Don't give creators or customers products or money in return for reviews on your site or marketplaces, and don't ask only happy customers. Creator content on social channels, clearly labelled as an ad, is the right place for paid opinion. See the CMA's reviews guidance.",
        links: [{ text: "CMA's reviews guidance", href: UK_SRC.cmaReviews.url }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Assuming a platform's shopping features are the same in the UK as elsewhere; check current availability.",
          "Vague affiliate disclaimers.",
          "Judging creators on orders, ignoring returns and discounts.",
          "Relying on analytics alone under consent rules.",
          "Offering free product in return for reviews.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "UK e-commerce brands get the most from creators when channels match what's actually available, every affiliate post is labelled, tracking doesn't depend on cookies alone, and creators are judged on the customers they bring. Seasonal peaks are covered in UK seasonal influencer campaigns.",
        links: [{ text: "UK seasonal influencer campaigns", href: "/blog/seasonal-influencer-marketing-uk" }],
      },
    ],
    faqs: [
      {
        question: "Is TikTok Shop available in the UK?",
        answer:
          "Yes. TikTok Shop operates in the UK, and creators can earn commission as affiliates for promoting sellers' products. Affiliate posts must be labelled as ads.",
      },
      {
        question: "Is YouTube Shopping's affiliate programme available in the UK?",
        answer:
          "Yes. YouTube launched its Shopping affiliate programme in the UK in July 2026 for creators with at least 500 subscribers, with retailers such as Boots, M&S and Next taking part at launch.",
      },
    ],
  },
];
