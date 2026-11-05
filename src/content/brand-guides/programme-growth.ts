import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";
import { SOURCES } from "@/content/creator-resources/shared";

/**
 * Batch 26 (2026-11-05): five brand-side gaps left after checking 100 proposed topics against the existing library.
 * Proposed topics 17+20, 28, 52+54, 87 (+82, 84) and 88 had no dedicated owner; the rest were refreshed, merged or
 * skipped. Decisions are recorded in reports/next-100-industry-marketing-batch-26/.
 */
const PUBLISHED = "2026-11-05";
const REVIEWED = "November 2026";

const EXT = {
  docaHealthGuidelines:
    "https://www.tribuneindia.com/news/business/disclosure-or-disclaimer-must-for-celebrities-virtual-influencers-endorsing-as-health-experts-government-533924",
  asciHealthFinance2025:
    "https://www.exchange4media.com/advertising-news/asci-updates-influencer-guidelines-with-respect-to-health-finance-influencers-142977.html",
  fssaiInfluencerAdvisory:
    "https://www.restaurantindia.in/news/fssai-warns-celebrities-and-influencers-against-misleading-food-claims.n16989",
  ccpaSurrogateAnalysis:
    "https://khaitanco.com/thought-leaderships/CCPA-releases-guidelines-for-Prevention-of-Misleading-Advertisements-and-Endorsements-for-Misleading-Advertisements-2022",
  asciVdaGuidelines: "https://www.khaitanco.com/thought-leaderships/ASCI-releases-crypto-and-NFT-advertising-guidelines-effective-1-April-22-onward",
  ccpaCoachingGuidelines:
    "https://www.mondaq.com/india/advertising-marketing-branding/1549922/guidelines-for-prevention-of-misleading-ads-in-coaching-sector-an-insight-into-new-ccpa-guidelines",
  mahareraAdPenalty:
    "https://www.livelaw.in/amp/consumer-cases/maharera-fines-promoter-for-publishing-newspaper-ad-without-clear-rera-registration-and-qr-code-518299",
};

export const programmeGrowthPosts: BlogPost[] = [
  // Proposed topics 54 (regulated categories) and 52 (unsupported claims), merged into one hub.
  {
    slug: "regulated-categories-influencer-marketing-india",
    category: "Brand Marketing",
    title: "Influencer Marketing in Regulated Categories in India: What Brands Must Check",
    seoTitle: "Influencer Marketing in Regulated Categories in India",
    excerpt:
      "Health, food supplements, finance, insurance, gaming, alcohol, crypto, real estate and coaching each add their own rules on top of India's general advertising rules. A category-by-category map, a claims review process and the checks to run before a creator posts.",
    metaDescription:
      "Influencer marketing in India's regulated categories: health, finance, gaming, alcohol, crypto, real estate and coaching rules, plus a claims review process.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "11 min read",
    spatialCoverage: "India",
    tags: [
      "regulated categories influencer marketing",
      "influencer marketing rules india",
      "unsupported product claims influencers",
      "claim substantiation influencer content",
      "surrogate advertising influencers",
    ],
    related: ["influencer-marketing-compliance", "pharma-influencer-marketing-india", "expert-creator-marketing"],
    hero: {
      src: "/blog/brand-guides/regulated-categories-influencer-marketing-india.svg",
      alt: "Four checks for regulated-category creator campaigns in India: is the product promotable, which rulebook applies, can every claim be proved, and who reviews before posting",
    },
    body: [
      {
        type: "paragraph",
        text: "If you sell a supplement, a mutual fund platform, an insurance product, a coaching course or a housing project, a creator campaign has two rulebooks to satisfy. The first applies to every brand in India: disclose the partnership and don't mislead. The second belongs to your sector, and it's usually the one that catches brands out, because creators rarely know it and briefs rarely mention it.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Before you brief a creator in a regulated category, answer four questions. Can this product be advertised to consumers at all (prescription medicines, online money games and alcohol, for example, can't be in the usual way)? Which sector rules apply on top of the Consumer Protection Act, the CCPA's 2022 advertising guidelines and the ASCI Code? Can you prove every claim the creator will make, with evidence on file? And who reviews the script and final cut before it goes live? Give creators a claims sheet with approved wording, use qualified creators for technical health or financial advice, and keep records. This is general information, not legal advice: check your specific product with a lawyer who knows your sector.",
      },
      { type: "heading", text: "The two rulebooks", id: "two-rulebooks" },
      {
        type: "paragraph",
        text: "Every creator campaign in India sits under the Consumer Protection Act, 2019, the CCPA's Guidelines for Prevention of Misleading Advertisements and Endorsements for Misleading Advertisements, 2022, the Department of Consumer Affairs' endorsement guidance for influencers, and ASCI's Code and influencer guidelines. Those cover disclosure, honest endorsement and misleading claims for everyone. The CCPA guidelines also deal with surrogate advertising. Influencer campaign compliance covers this baseline in detail, so this guide concentrates on what changes by category.",
        links: [
          { text: "Influencer campaign compliance", href: "/blog/influencer-marketing-compliance" },
        ],
      },
      {
        type: "paragraph",
        text: "Primary sources for the baseline: the CCPA guidelines announcement, the Department of Consumer Affairs endorsement guidance and ASCI's influencer guidelines.",
        links: [
          { text: "the CCPA guidelines announcement", href: SOURCES.ccpaMisleadingAds },
          { text: "the Department of Consumer Affairs endorsement guidance", href: SOURCES.docaEndorsements },
          { text: "ASCI's influencer guidelines", href: SOURCES.asciGuidelines },
        ],
      },
      { type: "heading", text: "Category-by-category map", id: "category-map" },
      {
        type: "table",
        headers: ["Category", "Main rules to check", "What creators can usually do", "What to keep out"],
        rows: [
          [
            "Prescription medicines",
            "Drugs and Cosmetics Act and Rules; Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954",
            "Corporate and employer content; unbranded education by qualified doctors, disclosed",
            "Naming or hinting at a prescription drug; results, dosage or before-and-after content",
          ],
          [
            "OTC and AYUSH medicines",
            "Drugs and Cosmetics Act and Rules; 1954 Act",
            "Correct use, reading the label, when to see a doctor",
            "Claims to cure, treat or prevent the diseases the 1954 Act lists",
          ],
          [
            "Supplements, nutraceuticals, functional foods",
            "FSS Act, 2006; FSS (Advertising and Claims) Regulations, 2018; FSSAI's 2026 advisory to influencers",
            "Routines, taste, ingredients, approved and substantiated claims",
            "Disease-treatment claims; 'boosts immunity' or 'burns fat' without evidence",
          ],
          [
            "Securities, investments, trading",
            "SEBI's 2024 circular restricting regulated entities from associating with unregistered persons who give advice or claim returns; ASCI's finance rules",
            "Financial literacy and product mechanics by qualified, disclosed creators, where the regulated entity's own compliance allows it",
            "Stock tips, return claims or performance promises from unregistered creators",
          ],
          [
            "Insurance",
            "IRDAI's advertisement rules for insurers and intermediaries",
            "Explaining how a type of cover works; education-led content reviewed by compliance",
            "Product claims without the required disclosures; 'guaranteed' language",
          ],
          [
            "Online money games",
            "Promotion and Regulation of Online Gaming Act, 2025",
            "Esports and social or casual games, which remain permitted",
            "Any promotion of online money games, including rummy, poker and fantasy formats",
          ],
          [
            "Alcohol and tobacco",
            "Restrictions on advertising these products; surrogate advertising rules in the CCPA 2022 guidelines",
            "Very little; treat brand-extension content as high risk",
            "Content that refers, directly or indirectly, to the restricted product, including through a shared brand name or logo",
          ],
          [
            "Crypto and other virtual digital assets",
            "ASCI's 2022 guidelines for advertising virtual digital assets",
            "Disclosed content carrying the required risk disclaimer",
            "Profit promises; presenting crypto as a fix for money problems; missing disclaimer",
          ],
          [
            "Real estate projects",
            "Real Estate (Regulation and Development) Act, 2016 and state RERA orders",
            "Walkthroughs and location content showing the project's RERA details",
            "Ads for registrable projects without the registration number and website; investment-return promises",
          ],
          [
            "Coaching and test preparation",
            "CCPA's Guidelines for Prevention of Misleading Advertisement in Coaching Sector, 2024",
            "Course formats, teaching approach, honest student stories with consent",
            "'100% selection' or job guarantees; unverified rank or result claims",
          ],
        ],
      },
      {
        type: "paragraph",
        text: "Several of these categories have a full guide of their own: pharmaceutical companies, Ayurveda and supplement brands, personal finance platforms, insurance companies, gaming brands, real estate brands and education and EdTech brands. Use them for campaign ideas and creator selection; the rest of this page is about the checks they share.",
        links: [
          { text: "pharmaceutical companies", href: "/blog/pharma-influencer-marketing-india" },
          { text: "Ayurveda and supplement brands", href: "/blog/ayurveda-nutraceutical-influencer-marketing-india" },
          { text: "personal finance platforms", href: "/blog/personal-finance-influencer-marketing-india" },
          { text: "insurance companies", href: "/blog/insurance-influencer-marketing-india" },
          { text: "gaming brands", href: "/blog/gaming-influencer-marketing-india" },
          { text: "real estate brands", href: "/blog/influencer-marketing-real-estate-brands-india" },
          { text: "education and EdTech brands", href: "/blog/influencer-marketing-education-edtech-brands-india" },
        ],
      },
      { type: "heading", text: "Categories without a dedicated guide", id: "other-categories" },
      { type: "subheading", text: "Alcohol, tobacco and surrogate content" },
      {
        type: "paragraph",
        text: "Alcohol and tobacco can't be advertised in the usual way in India, and the CCPA's 2022 guidelines also address surrogate advertising: content that refers directly or indirectly to a product that can't be advertised. A creator promoting a soda, glassware or music event under the same name and logo as a liquor brand is the classic example. Commentators have noted grey areas around genuine brand extensions, so this is a decision for your lawyers, not for a creator brief. See this analysis of the 2022 guidelines.",
        links: [{ text: "this analysis of the 2022 guidelines", href: EXT.ccpaSurrogateAnalysis }],
      },
      { type: "subheading", text: "Crypto and virtual digital assets" },
      {
        type: "paragraph",
        text: "ASCI's guidelines for virtual digital assets, in force since April 2022, require a specific risk disclaimer stating that crypto products and NFTs are unregulated and can be highly risky, displayed prominently enough for an ordinary viewer to notice, with specific placement rules by ad format. They also rule out promising future profits or presenting crypto as a solution to money problems, and they apply to influencers who endorse these products. Summary: ASCI's VDA guidelines.",
        links: [{ text: "ASCI's VDA guidelines", href: EXT.asciVdaGuidelines }],
      },
      { type: "subheading", text: "Real estate projects" },
      {
        type: "paragraph",
        text: "Section 11(2) of RERA requires a promoter's advertisements for a registered project to show the project's registration number and the authority's website, and some states add more: Maharashtra, for example, requires a QR code and has penalised developers for unclear details. Creator walkthroughs of a registrable project are advertisements, so the details belong on screen and in the caption. An example of state enforcement: this MahaRERA penalty order.",
        links: [{ text: "this MahaRERA penalty order", href: EXT.mahareraAdPenalty }],
      },
      { type: "subheading", text: "Coaching and test preparation" },
      {
        type: "paragraph",
        text: "The CCPA's coaching guidelines, notified in November 2024, cover advertising by coaching providers and the people who endorse them. They rule out claims such as 100% selection or guaranteed jobs and require honesty about results, which matters for creator content built around toppers and success stories. Summary: the CCPA coaching guidelines.",
        links: [{ text: "the CCPA coaching guidelines", href: EXT.ccpaCoachingGuidelines }],
      },
      { type: "heading", text: "Reviewing creator content for unsupported claims", id: "claims-review" },
      {
        type: "paragraph",
        text: "Most problems in regulated categories aren't about disclosure. They're about a creator saying something the brand can't prove. Under the CCPA guidelines and the ASCI Code, objective claims need evidence, and endorsers are expected to have used the product and to avoid misleading statements. In practice, the brand has to supply that evidence before the creator writes anything.",
      },
      {
        type: "table",
        headers: ["Claim type", "Example", "Evidence to hold before approving"],
        rows: [
          ["Objective product fact", "'Contains 20 g protein per serving'", "Label, lab report or specification sheet"],
          ["Performance or results", "'Visible results in 4 weeks'", "Study or test on the product itself, with the conditions it was tested under"],
          ["Comparative", "'Cheaper than other term plans'", "Current, like-for-like comparison data, dated"],
          ["Absolute", "'100% safe', 'no side effects', 'guaranteed'", "Usually unprovable: rewrite rather than look for evidence"],
          ["Personal experience", "'This helped my knee pain'", "Genuine use by the creator; health experiences can still imply a treatment claim, so review against sector rules"],
          ["Expert advice", "'As a nutritionist, I recommend…'", "Proof of the qualification, declared in the content"],
        ],
      },
      { type: "subheading", text: "A five-step claims review" },
      {
        type: "list",
        items: [
          "Build a claims sheet before outreach: approved claims, the evidence behind each, mandatory disclaimers and banned words.",
          "Put the claims sheet in the brief and the contract, and say that anything outside it needs written approval.",
          "Review the script or outline against the claims sheet before filming, not only the final cut.",
          "Check the final cut, caption, on-screen text and any pinned comment: claims often creep in through captions and replies.",
          "File the approved version, the evidence and the approval record together, so you can answer a complaint quickly.",
        ],
      },
      {
        type: "template",
        label: "Claims sheet structure",
        text: "Product: [name, licence category]\nApproved claims:\n  1. [exact wording]  | Evidence: [document, date]  | Where it may appear: [video / caption / both]\nRequired disclaimers: [wording, placement, spoken or on screen]\nBanned words and ideas: [cure, guaranteed, 100%, returns, …]\nTopics creators must not address: [dosage, medical advice, stock tips, …]\nQualified creators only for: [technical health / financial advice]\nReviewer and turnaround: [name, role, 2 working days]",
      },
      { type: "heading", text: "Who can give technical advice", id: "qualified-creators" },
      {
        type: "paragraph",
        text: "ASCI's April 2025 update to its health and finance influencer rules expects creators who give technical health, nutrition or financial information to hold relevant qualifications and declare them; general or awareness content doesn't need them. The Department of Consumer Affairs issued similar expectations for health and wellness influencers in 2023, and FSSAI has asked influencers to check food and supplement claims themselves. Sources: ASCI's update, the 2023 health guidance and FSSAI's advisory. Choosing and briefing qualified creators is covered in expert creator marketing.",
        links: [
          { text: "ASCI's update", href: EXT.asciHealthFinance2025 },
          { text: "the 2023 health guidance", href: EXT.docaHealthGuidelines },
          { text: "FSSAI's advisory", href: EXT.fssaiInfluencerAdvisory },
          { text: "expert creator marketing", href: "/blog/expert-creator-marketing" },
        ],
      },
      {
        type: "paragraph",
        text: "In securities, the issue is sharper. SEBI's circular restricts regulated entities and their agents from associating with people who give securities advice or make return claims without being registered, so a broker or fund platform has to check who it pays before anything else. Source: SEBI's circular and its January 2025 clarification.",
        links: [
          { text: "SEBI's circular", href: SOURCES.sebiFinfluencerCircular },
          { text: "its January 2025 clarification", href: SOURCES.sebiFinfluencerClarification },
        ],
      },
      { type: "heading", text: "A workflow for regulated-category campaigns", id: "workflow" },
      {
        type: "table",
        headers: ["Stage", "Check", "Owner"],
        rows: [
          ["Before planning", "Is the product promotable this way? Which sector rules apply?", "Legal or compliance"],
          ["Shortlisting", "Qualifications where needed; registration status for finance; past sponsored posts disclosed", "Campaign team"],
          ["Brief and contract", "Claims sheet, disclaimers, disclosure, banned topics, approval rights", "Campaign team with legal"],
          ["Pre-filming", "Script or outline checked against the claims sheet", "Compliance reviewer"],
          ["Pre-publishing", "Final cut, caption, on-screen text, disclaimers, disclosure label", "Compliance reviewer"],
          ["Live", "Comment moderation; no advice in replies or DMs; adverse events routed where relevant", "Community or campaign team"],
          ["After", "Records filed: evidence, approvals, live links, screenshots", "Campaign team"],
        ],
      },
      {
        type: "paragraph",
        text: "A regulated campaign usually needs an extra review round, so plan for it in the timeline rather than squeezing compliance at the end. The creator content approval process shows how to run reviews in parallel without stalling. If you'd rather not build this process yourself, Kudozz's influencer outreach and management service runs contracting, claims checks and approvals as part of a managed campaign.",
        links: [
          { text: "The creator content approval process", href: "/blog/influencer-content-approval" },
          { text: "influencer outreach and management service", href: "/services/outreach-management" },
        ],
      },
      { type: "heading", text: "Platform rules add a third layer", id: "platform-rules" },
      {
        type: "paragraph",
        text: "Platforms restrict some categories in branded content regardless of local law, and YouTube applies its advertising policies to paid product placements. Check Instagram's branded content eligibility and YouTube's paid product placement policy before agreeing deliverables, especially for finance, health, gambling-adjacent and alcohol-adjacent products. Running abroad too? Rules differ by market; see regulated products in the UK for one comparison.",
        links: [
          { text: "Instagram's branded content eligibility", href: SOURCES.instagramBrandedContentEligibility },
          { text: "YouTube's paid product placement policy", href: SOURCES.youtubePaidPromotion },
          { text: "regulated products in the UK", href: "/blog/regulated-products-influencer-marketing-uk" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Assuming the creator knows the sector rules. Most don't, and the brand carries the risk too.",
          "Briefing on benefits without a claims sheet, then trying to fix claims at final review.",
          "Treating a personal story as safe. 'It cured my acidity' is still a treatment claim.",
          "Using a lifestyle creator for technical health or financial advice.",
          "Checking the video but not the caption, pinned comment or replies.",
          "Running 'awareness' content that points clearly at a product you can't advertise.",
          "Keeping no record of the evidence or the approval.",
        ],
      },
      {
        type: "paragraph",
        text: "This page is general information about Indian rules as reported up to November 2026, not legal advice. Rules change and their interpretation depends on your product and licence, so confirm your campaign with a qualified lawyer before launch.",
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Regulated categories can still use creators well, but the work moves earlier: decide whether the product can be promoted, write down what may be claimed and prove it, choose creators who are allowed to say it, and review before anything goes live. Brands that do this find careful creators say yes more often, because the brief already answers the questions those creators would ask.",
      },
    ],
    faqs: [
      {
        question: "Is the brand or the creator responsible for a misleading claim in a sponsored post?",
        answer:
          "Both can be. The CCPA's 2022 guidelines apply to advertisers, advertising agencies and endorsers, and ASCI expects both brands and influencers to follow its code. In practice the brand controls the brief, the claims and the approval, so it should supply evidence and review content before posting.",
      },
      {
        question: "Can health or finance creators promote products if they add a disclaimer?",
        answer:
          "A disclaimer doesn't make a prohibited or misleading claim acceptable. Creators giving technical health or financial advice are expected to hold and declare relevant qualifications, and sector rules (for example SEBI's restrictions on unregistered advice, or the bar on drug cure claims) still apply.",
      },
      {
        question: "Can we promote online rummy or fantasy games with influencers?",
        answer:
          "No. The Promotion and Regulation of Online Gaming Act, 2025 prohibits advertising and promoting online money games. Esports and social or casual games remain permitted; check the current status of a specific format before planning.",
      },
      {
        question: "Does a creator walkthrough of a housing project need the RERA number?",
        answer:
          "For a project that must be registered, treat it as an advertisement: show the registration number and the authority's website, and follow any extra state requirements such as Maharashtra's QR code. Check with your legal team for completed or exempt projects.",
      },
      {
        question: "What evidence should we hold before approving a product claim?",
        answer:
          "Evidence that matches the exact claim: a label or lab report for product facts, tests on the product itself for results claims, and current like-for-like data for comparisons. If you can't produce evidence for a claim, rewrite it rather than approve it.",
      },
    ],
  },

  // Proposed topics 17 (multi-campaign agreements) and 20 (contract renewals), merged.
  {
    slug: "multi-campaign-influencer-agreements",
    category: "Influencer Marketing",
    title: "How to Structure Multi-Campaign Creator Agreements and Renewals",
    seoTitle: "Multi-Campaign Influencer Agreements and Renewals",
    excerpt:
      "When you work with the same creator several times a year, a fresh contract every campaign is slow and inconsistent. How to split fixed terms into a master agreement and campaign-specific details into short campaign orders, handle pricing, rights and exclusivity across campaigns, and review the agreement at renewal.",
    metaDescription:
      "Structure multi-campaign creator agreements: master terms plus campaign orders, price locks, rights, exclusivity windows, termination and renewals.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "10 min read",
    tags: [
      "multi-campaign influencer agreement",
      "influencer master agreement",
      "influencer contract renewal",
      "creator retainer agreement",
      "long-term influencer contract",
    ],
    related: ["influencer-marketing-contract", "repeat-influencer-collaborations", "brand-ambassador-program"],
    hero: {
      src: "/blog/brand-guides/multi-campaign-influencer-agreements.svg",
      alt: "Structure of a multi-campaign creator agreement: master terms signed once, a short order per campaign, a rights register and a renewal review",
    },
    body: [
      {
        type: "paragraph",
        text: "The third time you book the same creator, the contract starts to feel like the slowest part of the campaign. Legal re-reviews the same clauses, the rate is renegotiated from scratch, and nobody is sure whether the rights from the first campaign have expired. A multi-campaign agreement fixes that by deciding the stable terms once and keeping each campaign to a one- or two-page order.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Use a two-layer structure. A master agreement holds the terms that don't change between campaigns: disclosure, approvals, payment mechanics, general rights rules, conduct, confidentiality, liability and termination. Each campaign then gets a short campaign order (sometimes called a statement of work) with deliverables, dates, fee, usage rights, exclusivity and any special conditions. Lock rates for a defined period or volume, give every campaign its own rights and exclusivity window, and set a review date before the agreement renews so both sides can renegotiate on evidence. This is general guidance, not legal advice.",
      },
      { type: "heading", text: "When a multi-campaign agreement makes sense", id: "when-it-fits" },
      {
        type: "table",
        headers: ["Arrangement", "Best for", "Contract shape"],
        rows: [
          ["One-off campaign", "First collaboration or a single launch", "One standalone contract"],
          ["Multi-campaign agreement", "A creator you expect to book two or more times in the next 6 to 12 months, with campaigns that differ", "Master agreement plus a campaign order each time"],
          ["Ambassador or retainer", "A steady monthly commitment and a deeper role with the brand", "One agreement with a fixed monthly scope, often with campaign orders for extras"],
        ],
      },
      {
        type: "paragraph",
        text: "If you're still deciding whether to rebook a creator at all, start with repeat influencer collaborations. If the relationship is becoming a fixed monthly role, an ambassador programme is the better model. The clauses themselves are explained in influencer marketing contracts; this page is about how to organise them over time.",
        links: [
          { text: "repeat influencer collaborations", href: "/blog/repeat-influencer-collaborations" },
          { text: "an ambassador programme", href: "/blog/brand-ambassador-program" },
          { text: "influencer marketing contracts", href: "/blog/influencer-marketing-contract" },
        ],
      },
      { type: "heading", text: "What goes in the master and what goes in each order", id: "master-vs-order" },
      {
        type: "table",
        headers: ["Master agreement (signed once)", "Campaign order (one per campaign)"],
        rows: [
          ["Parties, term and how orders are created and accepted", "Campaign name, objective and brief reference"],
          ["Disclosure duties and compliance with ASCI and platform rules", "Deliverables: platforms, formats, number of posts, duration"],
          ["Approval process, revision rounds and response times", "Draft, approval and go-live dates"],
          ["Payment mechanics: invoicing, tax documents, payment days", "Fee for this order and payment milestones"],
          ["Rate card or price lock, and when it can change", "Any agreed variation from the rate card"],
          ["Default rights rules (what's included if an order says nothing)", "Usage rights for this content: channels, duration, paid use, markets"],
          ["Default exclusivity rules", "Exclusivity for this campaign: category, period, markets"],
          ["Conduct, morality, confidentiality, data handling", "Product, gifting and return arrangements"],
          ["Cancellation and termination of the whole agreement", "Cancellation terms specific to this order, if different"],
          ["Liability, governing law, dispute process", "Special conditions (claims sheet, regulated-category review)"],
        ],
      },
      {
        type: "paragraph",
        text: "The rule of thumb: if a term would be the same in every campaign, it belongs in the master. If it changes with the brief, it belongs in the order. And the master should say clearly that when an order conflicts with the master on a specific point, the order wins for that campaign only.",
      },
      { type: "heading", text: "Pricing across several campaigns", id: "pricing" },
      {
        type: "paragraph",
        text: "Creators usually accept a lower per-campaign rate in exchange for predictable work, but only if the predictability is real. Decide which of these you're offering:",
      },
      {
        type: "table",
        headers: ["Model", "What the brand commits to", "What the creator gives", "Watch out for"],
        rows: [
          ["Rate lock", "Nothing beyond the orders you place", "A fixed rate card for a period, such as 12 months", "Creators often limit the lock to a period or a number of orders"],
          ["Volume commitment", "A minimum number of campaigns or spend", "A lower rate per deliverable", "You pay for the minimum even if plans change"],
          ["Options", "A right to book further campaigns at an agreed rate by a date", "Holds availability and price", "Options usually cost something if they're exclusive"],
          ["Retainer", "A fixed monthly fee for a fixed scope", "Monthly deliverables and priority", "Unused scope rarely rolls over unless agreed"],
        ],
      },
      {
        type: "paragraph",
        text: "Whichever model you choose, write down when rates can be reviewed (for example, at renewal or if the creator's audience changes materially) and what happens to orders already placed. For fair payment terms across several orders, see influencer payment terms.",
        links: [{ text: "influencer payment terms", href: "/blog/influencer-payment-terms" }],
      },
      { type: "heading", text: "Rights: one register, one window per campaign", id: "rights" },
      {
        type: "paragraph",
        text: "The most common mess in long relationships is rights. Content from campaign one is still running as an ad after its licence ended, or nobody knows whether paid use was ever included. Two habits prevent it. First, every campaign order states its own usage terms, even if it's 'as per master default'. Second, keep a rights register with one row per piece of content: creator, order number, channels, paid use, start and end dates. Influencer usage rights covers how to scope and price rights; the agreement's job is to make each campaign's rights unambiguous.",
        links: [{ text: "Influencer usage rights", href: "/blog/influencer-usage-rights" }],
      },
      { type: "heading", text: "Exclusivity across campaigns", id: "exclusivity" },
      {
        type: "paragraph",
        text: "A year-long blanket exclusivity in a multi-campaign agreement is expensive and often unnecessary. A fairer pattern is exclusivity tied to each active campaign, for example from the go-live date to 30 days after the last post, within a narrowly defined category. If you genuinely need year-round exclusivity, pay for it separately and say so. Influencer exclusivity explains how to define the category and judge the cost.",
        links: [{ text: "Influencer exclusivity", href: "/blog/influencer-exclusivity" }],
      },
      { type: "heading", text: "Cancelling an order versus ending the agreement", id: "cancellation" },
      {
        type: "list",
        items: [
          "Order cancellation: what you pay if a single campaign is cancelled before or after content is produced. This can differ by order.",
          "Termination of the master: notice period, what happens to orders already accepted, and whether either side can walk away without cause.",
          "Termination for cause: disclosure failures, serious conduct issues, repeated missed deadlines, non-payment.",
          "Rights after termination: licences already granted for completed content usually continue for their stated term unless the agreement says otherwise. Decide this explicitly.",
        ],
      },
      {
        type: "paragraph",
        text: "Cancellation in practice, including how to handle it with the creator, is covered in influencer campaign cancellation.",
        links: [{ text: "influencer campaign cancellation", href: "/blog/influencer-campaign-cancellation" }],
      },
      {
        type: "template",
        label: "Campaign order template",
        text: "Campaign order no. [__] under Master Creator Agreement dated [__]\nCampaign: [name]   Objective: [awareness / sales / content for ads]\nBrief: [link, version]\nDeliverables: [e.g. 1 Reel (45-60 s), 3 Stories with link, 1 collab post]\nDates: draft by [__]; brand feedback within [2] working days; go-live [__]\nFee: ₹[__] (rate card / agreed variation: [__])   Payment: [50% on approval, 50% within 30 days of go-live]\nUsage rights: [organic brand channels, 6 months; paid use on Meta, 3 months; India only]\nExclusivity: [category], from go-live to [30] days after last post\nProduct and gifting: [details, returns]\nSpecial conditions: [claims sheet attached; regulated review]\nSigned: Brand ______  Creator ______  Date ______",
      },
      { type: "heading", text: "Running the renewal review", id: "renewal-review" },
      {
        type: "paragraph",
        text: "Put a review date in the agreement, ideally 30 to 60 days before it renews or expires, so neither side is negotiating under deadline. The review should be a short, evidence-based conversation, not an automatic rollover.",
      },
      {
        type: "list",
        items: [
          "Results by campaign against each order's objective, compared with other creators of a similar type.",
          "Working relationship: draft quality, deadlines, revision rounds, responsiveness.",
          "Audience change since signing: size, location, engagement quality.",
          "Rights in use: which content is still running and whether licences need extending.",
          "Rate: whether the lock still reflects the market and the creator's value to you.",
          "Next year's plan: how many campaigns, which formats, whether exclusivity is still needed.",
          "The creator's view: what they'd change, and what would make them prioritise you.",
        ],
      },
      {
        type: "table",
        headers: ["Review outcome", "When", "What changes"],
        rows: [
          ["Renew as is", "Results and working relationship both strong", "Extend term; rate review if agreed"],
          ["Renew with changes", "Good partner, but scope, rate or formats no longer fit", "Updated rate card, deliverable mix or rights defaults"],
          ["Move to ambassador or retainer", "You're booking them almost monthly", "Fixed monthly scope replaces separate orders"],
          ["Let it lapse", "Results weak relative to alternatives, or fit has changed", "End cleanly; confirm rights still running and their end dates"],
        ],
      },
      { type: "heading", text: "An illustrative example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical: a home-fragrance brand books a lifestyle creator for Diwali, a spring launch and an end-of-season sale. Instead of three contracts, it signs a 12-month master with a rate lock at ₹60,000 per Reel and ₹15,000 per Story set, and a review date in month 10. Each campaign gets a one-page order: Diwali includes three months of paid use; the launch includes six months of organic use only; the sale has no exclusivity. At the month-10 review, the launch content outperformed the brand's other creator ads, so the brand renews with paid use as the default and adds one extra campaign. The figures are illustrative, not benchmarks.",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Copying the first campaign's contract and changing dates, so rights and exclusivity drift between campaigns.",
          "Putting deliverables in the master, then needing an amendment every time the brief changes.",
          "Blanket exclusivity for the full term without paying for it.",
          "No rights register, so expired content keeps running in ads.",
          "Letting the agreement renew automatically with no review.",
          "Locking a rate without saying when it can change.",
        ],
      },
      {
        type: "paragraph",
        text: "This is general guidance, not legal advice. Have a lawyer draft or review your master agreement, particularly the rights, termination and liability sections.",
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A master agreement with short campaign orders turns repeat creator work from a legal project into a quick booking, while keeping each campaign's rights and exclusivity clear. Add a rights register and a proper renewal review, and the relationship can grow on evidence rather than habit. If you'd like help setting up long-term creator agreements, Kudozz's influencer outreach and management team handles contracting and renewals as part of managed programmes.",
        links: [{ text: "influencer outreach and management team", href: "/services/outreach-management" }],
      },
    ],
    faqs: [
      {
        question: "Is a master agreement the same as a retainer?",
        answer:
          "No. A master agreement sets the shared terms and lets you place separate campaign orders when you need them. A retainer commits you to a fixed monthly fee and scope. You can combine them: a retainer for monthly content plus campaign orders for launches.",
      },
      {
        question: "How long should a multi-campaign creator agreement last?",
        answer:
          "Twelve months is common because it covers a full calendar of seasonal moments and gives a natural review point. Shorter terms suit a first trial of the arrangement; longer terms make sense only if both sides are confident and rates can be reviewed.",
      },
      {
        question: "Do creators give discounts for multiple campaigns?",
        answer:
          "Often, but in exchange for something real: a volume commitment, guaranteed bookings or faster payment. A rate lock with no commitment from the brand usually gets a smaller concession, or none.",
      },
      {
        question: "What happens to content rights when the agreement ends?",
        answer:
          "Whatever the agreement says. Commonly, licences already granted for completed content continue until their stated end date. Decide this explicitly in the termination clause and check your rights register before the agreement ends.",
      },
      {
        question: "Should exclusivity apply for the whole agreement?",
        answer:
          "Usually not. Exclusivity tied to each active campaign, plus a short cool-off period, protects the campaign without paying for a year of restriction. Use full-term exclusivity only when a competitor partnership would seriously damage you, and budget for it.",
      },
    ],
  },

  // Proposed topic 88 (creator advocacy for a new product category).
  {
    slug: "new-product-category-influencer-marketing",
    category: "Campaign Strategy",
    title: "Influencer Marketing for a New Product Category: How to Educate a Market That Doesn't Know It Needs You",
    seoTitle: "Influencer Marketing for a New Product Category",
    excerpt:
      "When people don't yet know your category exists, creator campaigns that push the brand fall flat. How to sequence creator content from the problem to the category to the brand, which creators play which role, how to turn early customers into advocates and what to measure while demand is still forming.",
    metaDescription:
      "Influencer marketing for a new product category: sell the problem first, use expert and everyday creators, build advocates and measure category demand.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "10 min read",
    tags: [
      "new product category marketing",
      "category creation influencer marketing",
      "educate market influencers",
      "creator advocacy new category",
      "launch new category india",
    ],
    related: ["influencers-for-product-launch", "expert-creator-marketing", "customer-advocacy-program"],
    hero: {
      src: "/blog/brand-guides/new-product-category-influencer-marketing.svg",
      alt: "Four stages of creator marketing for a new product category: name the problem, explain the category, show real use, then build advocates",
    },
    body: [
      {
        type: "paragraph",
        text: "A new product in a known category has a head start: people already search for it, compare options and know roughly what it costs. A new category has none of that. Nobody is looking for you, the words you use to describe the product mean nothing yet, and a creator saying 'try this brand' gets polite indifference. The job of creators here is different: they have to make a problem feel real and a new kind of solution feel normal before the brand matters.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "In a new category, sequence creator content from problem to category to brand. Start with creators who talk about the problem your audience already has, then use expert creators to explain the new kind of solution and why it works, then everyday creators and early customers to show real use, including the awkward first week. Keep one consistent category name across every creator so search and word of mouth can build. Turn early customers into an advocacy programme. Measure category understanding and demand (search for the category term, questions in comments, survey recall) before judging on sales, and plan for a longer runway than a normal launch.",
      },
      { type: "heading", text: "How a new category differs from a new product", id: "category-vs-product" },
      {
        type: "table",
        headers: ["", "New product, known category", "New category"],
        rows: [
          ["What the audience knows", "The category and its main brands", "The problem, at best"],
          ["Main question in comments", "'How is this better than X?'", "'What is this?' and 'Do I need it?'"],
          ["Creator's job", "Compare and recommend", "Explain, normalise, then recommend"],
          ["Search behaviour", "People search the category or brand", "People search the problem, if anything"],
          ["Typical timeline to sales", "Weeks", "Months, often several waves"],
          ["Biggest risk", "Being ignored among competitors", "Being misunderstood, or over-promising to make the case"],
        ],
      },
      { type: "heading", text: "The four stages of category content", id: "four-stages" },
      { type: "subheading", text: "1. Name the problem" },
      {
        type: "paragraph",
        text: "Start where your audience already is. If you sell a smart water bottle, people don't search for smart bottles; they talk about forgetting to drink water or afternoon headaches. Problem-first content from creators who genuinely live with that problem earns attention without a hard sell. Customer research is the best source of the language to use; see using customer insights in influencer briefs.",
        links: [{ text: "using customer insights in influencer briefs", href: "/blog/customer-insights-influencer-brief" }],
      },
      { type: "subheading", text: "2. Explain the category" },
      {
        type: "paragraph",
        text: "Once the problem is on the table, someone credible has to explain the new kind of solution: what it is, how it works, who it suits and who it doesn't. This is where subject-matter experts earn their fee, because they can explain the mechanism without sounding like an ad. Keep claims to what you can prove; new categories tempt brands to overstate the science to win attention. See expert creator marketing for verifying expertise and protecting independence.",
        links: [{ text: "expert creator marketing", href: "/blog/expert-creator-marketing" }],
      },
      { type: "subheading", text: "3. Show real use" },
      {
        type: "paragraph",
        text: "People adopt a new kind of product when they can picture it in their own routine. Everyday creators, and early customers who create content, should show setup, the first week, what took getting used to and where it actually fits. Honest friction is persuasive in a new category, because the audience assumes there's a catch and is reassured when someone names it.",
      },
      { type: "subheading", text: "4. Build advocates" },
      {
        type: "paragraph",
        text: "Early customers are your most believable voices. Invite the enthusiastic ones into a structured advocacy programme with early access, a direct line to the product team and clear disclosure rules. Customer advocacy programmes covers how to find, invite and reward them without buying opinions.",
        links: [{ text: "Customer advocacy programmes", href: "/blog/customer-advocacy-program" }],
      },
      { type: "heading", text: "Which creators play which role", id: "creator-roles" },
      {
        type: "table",
        headers: ["Creator type", "Role in a new category", "Content that suits them"],
        rows: [
          ["Problem-adjacent creators", "Make the problem feel real and shared", "Day-in-the-life, frustrations, 'how I used to handle this'"],
          ["Subject-matter experts", "Explain the mechanism and set honest expectations", "Explainers, myth-busting, Q&A"],
          ["Early-adopter or tech-curious creators", "Try new things first; give permission to experiment", "First impressions, setup, honest pros and cons"],
          ["Everyday creators and customers", "Normalise use in ordinary routines", "Week-one diaries, routines, before-and-after of the routine (not of results)"],
          ["Community leaders", "Spread it inside a specific group", "Group demos, discussions, AMAs"],
        ],
      },
      { type: "heading", text: "Agree the category name before anyone posts", id: "category-name" },
      {
        type: "paragraph",
        text: "If one creator calls your product a 'gut health shot', another a 'probiotic drink' and a third a 'fermented tonic', you've created three tiny categories instead of one. Pick the term your audience will understand and search for, put it in every brief, and ask creators to use it naturally in captions and on screen. Check which words people already use in reviews, comments and search suggestions; the category name you like internally may not be the one that spreads. Creator content also influences how a category shows up in search, covered in influencer marketing and SEO.",
        links: [{ text: "influencer marketing and SEO", href: "/blog/influencer-marketing-seo" }],
      },
      { type: "heading", text: "Plan in waves, not a single launch", id: "waves" },
      {
        type: "table",
        headers: ["Wave", "Focus", "Creators", "Main signal to watch"],
        rows: [
          ["Wave 1 (seed)", "Problem and first explanations", "Experts plus a handful of problem-adjacent creators", "Comment questions shift from 'what is this?' to 'how does it work?'"],
          ["Wave 2 (show)", "Real use and honest first weeks", "Everyday creators, early customers", "Category search term starts to appear; saves and shares rise"],
          ["Wave 3 (compare)", "Versus what people do today", "Experts and trusted reviewers", "Questions about price and where to buy"],
          ["Wave 4 (scale)", "Sales-focused content and offers", "Best performers from earlier waves, plus new creators", "Conversion and repeat purchase"],
        ],
      },
      {
        type: "paragraph",
        text: "A normal product launch compresses all of this into a few weeks; see influencer marketing for new product launches for that playbook. For a new category, each wave tells you whether the market understands enough to move on. Kudozz's influencer marketing strategy work often starts by mapping these waves against budget and the evidence each one needs to produce.",
        links: [
          { text: "influencer marketing for new product launches", href: "/blog/influencers-for-product-launch" },
          { text: "influencer marketing strategy", href: "/services/campaign-strategy" },
        ],
      },
      { type: "heading", text: "Measuring while demand is still forming", id: "measurement" },
      {
        type: "paragraph",
        text: "Judging wave 1 on sales usually kills a new category too early. Measure whether understanding and demand are building, then move to commercial metrics as the waves progress.",
      },
      {
        type: "list",
        items: [
          "Category search: track your category term and problem terms in Google Trends and Search Console, against a pre-campaign baseline.",
          "Comment analysis: tag comments as confused, curious, sceptical or ready to buy, and watch the mix change wave by wave.",
          "Recall and understanding: a short survey or brand lift study asking whether people can describe what the category does.",
          "Saves and shares: signals that people want to come back to or pass on the explanation.",
          "Sales and repeat purchase: from wave 3 onwards, by creator cohort.",
        ],
      },
      {
        type: "paragraph",
        text: "For survey design, see influencer brand lift surveys.",
        links: [{ text: "influencer brand lift surveys", href: "/blog/influencer-brand-lift-survey" }],
      },
      { type: "heading", text: "An illustrative example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical: a start-up launches a countertop composter in Bengaluru, a category most buyers haven't seen. Wave 1 pairs two waste-management experts with eight apartment-living creators who talk about wet-waste segregation rules and smell. Wave 2 sends units to twenty households, half of them existing customers, for honest four-week diaries. Comments move from 'what is this?' to 'how much electricity does it use?', and the brand answers that question in wave 3 with an expert explainer. Only in wave 4 does it run creator codes. Every number of creators here is illustrative.",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Leading with the brand and offers before anyone understands the category.",
          "Overstating benefits to make a new idea sound compelling.",
          "Letting every creator invent their own name for the category.",
          "Using only lifestyle creators, so nobody credible explains how it works.",
          "Judging the first wave on sales and stopping before demand has formed.",
          "Ignoring the questions in comments, which are the brief for the next wave.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Creators are well suited to new categories because they can explain and normalise in a way ads can't, but only if the content is sequenced: problem, category, real use, then brand. Agree the category name, plan in waves, measure understanding before sales, and invite your earliest customers to help tell the story.",
      },
    ],
    faqs: [
      {
        question: "How long does it take for influencer marketing to build a new category?",
        answer:
          "Longer than a normal launch. Plan for several waves over a number of months and judge each wave on whether understanding and demand are growing, not only on sales. The exact timeline depends on price, purchase frequency and how unfamiliar the idea is.",
      },
      {
        question: "Should we use big creators to make a new category feel mainstream?",
        answer:
          "Large creators can add reach once the category is explainable, but early on credible experts and relatable everyday creators usually do more, because the audience needs explanation and proof of normal use before scale helps.",
      },
      {
        question: "Can competitors benefit from our category education?",
        answer:
          "Yes, some category education helps every brand in it. Reduce that by tying the category name and the most useful explanations to your brand and product, and by building an advocacy community competitors can't copy quickly.",
      },
      {
        question: "What should creators avoid saying about a new category?",
        answer:
          "Unproven claims about results, comparisons with other products the brand can't substantiate, and anything that sounds like medical or financial advice unless the creator is qualified and the claim is approved.",
      },
    ],
  },

  // Proposed topic 87 (upgrades and cross-selling), with post-purchase education from topics 82 and 84.
  {
    slug: "influencer-marketing-cross-sell-upsell",
    category: "Brand Marketing",
    title: "How to Use Creators to Drive Upgrades, Cross-Sells and Repeat Purchases From Existing Customers",
    seoTitle: "Influencer Marketing for Upsells, Cross-Sells and Upgrades",
    excerpt:
      "Most creator campaigns chase new customers, but people who already bought from you are often easier to sell to. How to use creator content for onboarding, upgrades, complementary products and refills, where to show it, how to brief it and how to prove it added revenue.",
    metaDescription:
      "Use creator content to sell more to existing customers: onboarding, upgrades, cross-sells and refills, owned-channel distribution and holdout measurement.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "9 min read",
    tags: [
      "influencer marketing cross-sell",
      "upsell existing customers creators",
      "post-purchase creator content",
      "customer onboarding creator content",
      "product upgrade campaign",
    ],
    related: ["influencer-marketing-customer-retention", "influencer-content-email-marketing", "influencer-customer-quality"],
    hero: {
      src: "/blog/brand-guides/influencer-marketing-cross-sell-upsell.svg",
      alt: "Creator content for existing customers in four steps: help them use it, show the next product, deliver it in owned channels, measure against a holdout",
    },
    body: [
      {
        type: "paragraph",
        text: "Your existing customers already trust you enough to have paid once. Yet most creator budgets go on reaching strangers, while the people who bought last month get a discount email and a generic newsletter. Creator content can do something those emails can't: show a real person getting more out of the product, then naturally reaching for the next thing.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To sell more to existing customers with creators, start with post-purchase education (customers who use a product well are the ones who buy more), then brief creators on specific expansion moves: upgrading to a better tier, adding a complementary product, refilling or replenishing, or moving to an annual plan. Deliver the content mainly through channels you own, such as order emails, WhatsApp, in-app screens and product inserts, plus ads to customer audiences where you have consent. Measure with a holdout group of customers who don't see the content, so you can see what the creators added rather than what would have happened anyway.",
      },
      { type: "heading", text: "How this differs from retention and acquisition", id: "how-it-differs" },
      {
        type: "table",
        headers: ["Goal", "Question it answers", "Main metric"],
        rows: [
          ["Acquisition", "Will new people buy?", "Cost per new customer"],
          ["Retention", "Will customers stay and come back?", "Repeat rate, churn"],
          ["Expansion (this guide)", "Will customers buy more, or better?", "Upgrade or attach rate, revenue per customer"],
        ],
      },
      {
        type: "paragraph",
        text: "Retention and expansion overlap, and influencer marketing for customer retention covers keeping customers and turning them into advocates. This guide focuses on the commercial step after that: the second product, the upgrade and the refill.",
        links: [{ text: "influencer marketing for customer retention", href: "/blog/influencer-marketing-customer-retention" }],
      },
      { type: "heading", text: "Start with post-purchase education", id: "post-purchase-education" },
      {
        type: "paragraph",
        text: "A customer who struggled with setup, never found the best feature or used the product wrongly is unlikely to buy your next product. Creator onboarding content fixes the first-week experience and makes the next sale easier. It also tends to reduce support tickets and returns; see how creator content can help reduce returns.",
        links: [{ text: "how creator content can help reduce returns", href: "/blog/creator-content-reduce-returns" }],
      },
      {
        type: "list",
        items: [
          "Setup and first use, filmed in a real home or workplace rather than a studio.",
          "The three features most customers miss, shown in a normal routine.",
          "Common mistakes and how to avoid them.",
          "Care, cleaning, storage or maintenance.",
          "'Week two' content: what changes once the novelty wears off.",
        ],
      },
      { type: "heading", text: "Expansion moves creators can support", id: "expansion-moves" },
      {
        type: "table",
        headers: ["Move", "Example", "Content that works", "Creator fit"],
        rows: [
          ["Upgrade", "Basic plan to premium; entry model to pro", "What changed when I upgraded, and who doesn't need to", "Power users, reviewers who've used both"],
          ["Complementary product", "Camera to lens; skincare serum to sunscreen", "How the two work together in one routine", "Creators already using the first product"],
          ["Refill or replenishment", "Water purifier filters; pet food; coffee", "The reminder moment and what happens if you leave it", "Everyday creators, routine content"],
          ["Bundle", "Starter kit to full regime", "Building a routine step by step", "Routine-led creators"],
          ["Annual or longer plan", "Monthly to annual subscription", "What a year of use looks like", "Long-term users, diaries"],
          ["New use case", "Kitchen appliance used for a second cuisine", "Recipes or tasks customers haven't tried", "Specialists in that use case"],
        ],
      },
      { type: "heading", text: "Choosing creators for existing customers", id: "choosing-creators" },
      {
        type: "paragraph",
        text: "The best creators for expansion content are often people your customers already know from the first purchase, or customers who create content themselves. Continuity matters: if a creator persuaded someone to buy, the same creator showing the next step feels like a natural follow-up. For specialist upgrades, add creators who can compare tiers honestly. Kudozz's ambassador programmes service is built for exactly this kind of ongoing, multi-stage creator relationship.",
        links: [{ text: "ambassador programmes service", href: "/services/ambassador-programs" }],
      },
      { type: "heading", text: "Where to show the content", id: "distribution" },
      {
        type: "paragraph",
        text: "Expansion content mostly runs in channels you already control, because that's where existing customers are. Make sure your content rights cover these uses before you brief.",
      },
      {
        type: "table",
        headers: ["Channel", "Moment", "Format"],
        rows: [
          ["Order confirmation and delivery emails", "Just after purchase", "Short setup video or GIF linking to the full version"],
          ["WhatsApp or SMS (opted-in customers)", "First week; refill reminders", "Vertical clip with one clear action"],
          ["In-app or account dashboard", "When a customer hits a limit or milestone", "Upgrade explainer"],
          ["Product inserts with a QR code", "Unboxing", "Setup and 'get more from it' videos"],
          ["Paid social to customer lists", "Weeks or months later", "Cross-sell and upgrade ads using creator content"],
          ["Product pages of the next product", "When customers browse", "Creator demonstrating the pairing"],
        ],
      },
      {
        type: "paragraph",
        text: "Using creator content in email is covered in more depth in using influencer content in email marketing. Uploading customer lists for ad targeting involves personal data, so check consent and your obligations under India's data protection law; see influencer marketing data privacy.",
        links: [
          { text: "using influencer content in email marketing", href: "/blog/influencer-content-email-marketing" },
          { text: "influencer marketing data privacy", href: "/blog/influencer-marketing-data-privacy" },
        ],
      },
      { type: "heading", text: "Offers: don't discount what customers would buy anyway", id: "offers" },
      {
        type: "paragraph",
        text: "Existing customers are already more likely to buy again, so a generous discount often gives away margin on purchases that would have happened regardless. Try useful content and convenience first: auto-replenishment, a bundle that saves effort, early access to a new product, or a loyalty perk. Keep discounts for moves customers resist, such as a first upgrade, and test them against a no-discount version.",
      },
      {
        type: "template",
        label: "Expansion brief, one page",
        text: "Audience: existing customers who bought [product] in the last [90] days\nMove: [upgrade / cross-sell / refill / annual plan]\nOne message: [e.g. 'The serum works better with daily SPF; here's my routine']\nMust show: [real use, both products together, honest who-it's-not-for]\nMust not: [claims beyond the claims sheet, pressure language, fake scarcity]\nFormats: [1 x 45-60 s vertical video, 2 x 15 s cut-downs for WhatsApp and email]\nDistribution: [order emails, WhatsApp opt-in list, customer-audience ads]\nRights needed: [owned channels and paid use, 6 months]\nMeasurement: [attach rate vs holdout over 60 days]",
      },
      { type: "heading", text: "Measuring what creators added", id: "measurement" },
      {
        type: "paragraph",
        text: "Existing customers buy again without any campaign, so attribution through codes alone overstates the effect. The cleanest approach is a holdout: randomly keep a share of eligible customers (for example 10 to 20 percent) out of the creator content, then compare upgrade, attach or repeat rates between the two groups over the same period.",
      },
      {
        type: "list",
        items: [
          "Attach or upgrade rate: share of customers who bought the next product or tier.",
          "Revenue per customer over 60 to 90 days, against the holdout.",
          "Time to second purchase.",
          "Support tickets and returns, for onboarding content.",
          "Margin after any discount, not just revenue.",
        ],
      },
      {
        type: "paragraph",
        text: "To compare the long-term value of customers different creators bring in, see measuring customer quality from influencer campaigns.",
        links: [{ text: "measuring customer quality from influencer campaigns", href: "/blog/influencer-customer-quality" }],
      },
      { type: "heading", text: "An illustrative example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical: a water purifier brand has thousands of customers due for a filter change. It commissions three creators who already own the purifier to film the change, what the indicator light means and why leaving it late matters. The clips go into a WhatsApp reminder to opted-in customers, with 15 percent held out. Over 60 days, the brand compares filter orders between the two groups and finds the creator version beats its plain text reminder. It then tests one more creator video promoting an annual maintenance plan. All figures and outcomes are illustrative.",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Selling the next product before customers have succeeded with the first.",
          "Running expansion content only on public social, where most viewers aren't customers.",
          "Discounting purchases customers would have made anyway.",
          "Measuring only code redemptions, with no holdout.",
          "Forgetting that owned-channel and ad use of creator content needs the right licence.",
          "Using new creators with no link to the first purchase when the original creator was available.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Creator content for existing customers is under-used because it doesn't look like a campaign: it lives in emails, WhatsApp messages and product inserts rather than on a creator's feed. But it reaches people who already trust you, at the moment they're ready for the next step. Start with onboarding, brief one expansion move at a time, deliver it in owned channels and measure against a holdout.",
      },
    ],
    faqs: [
      {
        question: "Can influencer marketing really drive repeat purchases?",
        answer:
          "It can support them, especially when creator content is delivered to existing customers through owned channels at the right moment. Because customers buy again without any campaign, use a holdout group to measure the extra effect rather than counting every repeat order.",
      },
      {
        question: "Do we need different creators for upsell content?",
        answer:
          "Not always. Creators who drove the first purchase are often the most natural voice for the next step. Add specialists when the upgrade needs an honest comparison between tiers or a new use case the original creator doesn't cover.",
      },
      {
        question: "What rights do we need to use creator content in emails and WhatsApp?",
        answer:
          "A licence covering owned channels, including email and messaging, for the period you plan to use it, plus paid use if you'll run it as ads to customer lists. Agree this before the content is made.",
      },
      {
        question: "Is customer onboarding content worth paying creators for?",
        answer:
          "Often, because it's used for months and reaches every new customer. It can reduce support load and returns as well as help later sales. Prioritise it for products with setup, a learning curve or features customers commonly miss.",
      },
    ],
  },

  // Proposed topic 28 (products that are difficult to demonstrate).
  {
    slug: "creator-content-hard-to-demonstrate-products",
    category: "UGC Marketing",
    title: "How to Create Creator Content for Products That Are Hard to Demonstrate",
    seoTitle: "Creator Content for Products That Are Hard to Demonstrate",
    excerpt:
      "Supplements that work slowly, insurance you hope never to use, software that lives behind a login, services that happen off camera: some products don't show well in a 30-second video. Seven content formats that work instead, how to brief them and where the claim limits are.",
    metaDescription:
      "Creator content for hard-to-demonstrate products: slow results, invisible benefits, services, software and insurance. Seven formats, a brief and claim limits.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "9 min read",
    tags: [
      "hard to demonstrate products",
      "creator content intangible products",
      "ugc for services",
      "influencer content software products",
      "explainer creator content",
    ],
    related: ["influencer-creative-strategy", "honest-product-comparison-creator-brief", "customer-insights-influencer-brief"],
    hero: {
      src: "/blog/brand-guides/creator-content-hard-to-demonstrate-products.svg",
      alt: "Ways to show a product that's hard to demonstrate: document over time, explain how it works, compare honestly, and show the proof you hold",
    },
    body: [
      {
        type: "paragraph",
        text: "Creator content is at its best when the product does something visible: a stain disappears, a gadget unfolds, a dish comes together. Plenty of products don't work like that. A supplement takes weeks, an insurance policy matters on a day you hope never comes, a B2B tool's value sits in a dashboard, and a cleaning service happens while the customer is at work. Asking creators to 'show the results' for these products leads either to boring content or to faked results, which is worse.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "When you can't show the result, show something true that stands in for it: the process over time (diaries), how it works (explainers), the situation without it (scenarios), an honest comparison with what people do now, the experience of using it (screen recordings and walkthroughs), an expert's explanation, or the proof you genuinely hold (certifications, test reports, guarantees). Brief creators on which of these to use, give them a claims sheet, and never let editing simulate a result the product didn't deliver.",
      },
      { type: "heading", text: "Why some products are hard to show", id: "why-hard" },
      {
        type: "table",
        headers: ["Type", "Examples", "What you can show instead"],
        rows: [
          ["Slow results", "Supplements, skincare, haircare, fitness programmes, courses", "A documented routine over time, with honest expectations"],
          ["Invisible benefit", "Air and water purifiers, mattresses, ergonomic chairs", "How it works, the problem it addresses, how it feels to use"],
          ["Prevention or protection", "Insurance, security, warranties, maintenance plans", "Scenarios, the claim or service process, what's covered and what isn't"],
          ["Services delivered off camera", "Cleaning, repairs, accounting, legal, logistics", "Booking, the handover, the before-and-after of the space or task"],
          ["Software and digital products", "SaaS, apps, fintech", "Screen recordings of a real task, start to finish"],
          ["Experience goods", "Fragrance, taste, comfort", "Reactions, comparisons with familiar references, use occasions"],
          ["Complex or B2B", "Industrial products, enterprise tools", "Expert explanation, customer workflow, time or effort saved described honestly"],
        ],
      },
      { type: "heading", text: "Seven formats that work", id: "formats" },
      { type: "subheading", text: "1. The diary" },
      {
        type: "paragraph",
        text: "For slow products, film the routine rather than the result: day one, week two, week six. The creator says what they're noticing and what they aren't. The honesty is the persuasion; a diary that admits 'nothing much yet' at week two is more believable at week six. Agree up front that the creator will report what really happens, and that you won't ask them to show changes that didn't occur.",
      },
      { type: "subheading", text: "2. The mechanism explainer" },
      {
        type: "paragraph",
        text: "When the benefit is invisible, explain how the product works in plain language, ideally with a simple physical demonstration (filter layers laid out on a table, a cutaway of a mattress). Explainers suit qualified or technically fluent creators. Keep every claim inside what the brand can prove.",
      },
      { type: "subheading", text: "3. The scenario" },
      {
        type: "paragraph",
        text: "For protection products, show the situation the product is for: a hospital admission, a phone stolen on a train, a delayed shipment. The creator walks through what would happen with and without cover, including what isn't covered. Make clear when a scenario is a dramatisation, and have regulated categories such as insurance reviewed by compliance; see influencer marketing in regulated categories in India.",
        links: [{ text: "influencer marketing in regulated categories in India", href: "/blog/regulated-categories-influencer-marketing-india" }],
      },
      { type: "subheading", text: "4. The honest comparison" },
      {
        type: "paragraph",
        text: "Compare the product with what the audience does today, not with a straw man: the gym versus the home programme, the spreadsheet versus the app, the local plumber versus the service. Honest comparisons include where the alternative wins. The full method is in the honest product comparison brief.",
        links: [{ text: "the honest product comparison brief", href: "/blog/honest-product-comparison-creator-brief" }],
      },
      { type: "subheading", text: "5. The walkthrough" },
      {
        type: "paragraph",
        text: "For software and services, record a real task from start to finish: booking a cleaner, filing an expense, setting up a policy claim. Screen recordings with the creator's face or voice over them work well because they show the effort involved, which is usually the real question. Use a demo account or blur personal data.",
      },
      { type: "subheading", text: "6. The expert explanation" },
      {
        type: "paragraph",
        text: "A dermatologist on why results take weeks, an engineer on what a certification test measures, a chartered accountant on what the software automates. Experts set expectations credibly, which reduces disappointment later. In health and finance, they also need to hold and declare relevant qualifications.",
      },
      { type: "subheading", text: "7. Proof you can show" },
      {
        type: "paragraph",
        text: "If you hold real proof, let creators show it rather than assert it: a lab report, a certification mark and what it means, a warranty card, a free-trial or return policy, aggregate customer reviews on the product page. Showing proof is more persuasive than a creator saying 'it really works', and it's easier to substantiate.",
      },
      { type: "heading", text: "Picking the right format for your product", id: "choosing-formats" },
      {
        type: "table",
        headers: ["Main barrier for buyers", "Best formats", "Supporting format"],
        rows: [
          ["'I don't believe it works'", "Diary, proof you can show", "Expert explanation"],
          ["'I don't understand it'", "Mechanism explainer, expert explanation", "Walkthrough"],
          ["'I don't think I need it'", "Scenario", "Honest comparison"],
          ["'It looks complicated'", "Walkthrough", "Diary of the first week"],
          ["'What I use now is fine'", "Honest comparison", "Scenario"],
        ],
      },
      {
        type: "paragraph",
        text: "The barrier usually comes straight from customer research and sales conversations, so start there; see using customer insights in influencer briefs. Your creative strategy should then assign formats to creator types, as described in building an influencer creative strategy.",
        links: [
          { text: "using customer insights in influencer briefs", href: "/blog/customer-insights-influencer-brief" },
          { text: "building an influencer creative strategy", href: "/blog/influencer-creative-strategy" },
        ],
      },
      { type: "heading", text: "Claim limits: what not to fake", id: "claim-limits" },
      {
        type: "list",
        items: [
          "Don't use editing, lighting, filters or staged footage to suggest a result the product didn't produce.",
          "Don't present a dramatised scenario as a real event.",
          "Don't let a time-lapse imply results came faster than they did; show dates.",
          "Don't suggest one creator's experience is typical unless you have evidence it is.",
          "Don't show proof you don't hold, or describe a certification as more than it is.",
          "Health, finance, insurance and other regulated products need the claims checked against sector rules before filming.",
        ],
      },
      {
        type: "paragraph",
        text: "These limits come from India's general rules on misleading advertising and endorsements, which expect claims to be truthful and substantiated; see influencer campaign compliance for the baseline.",
        links: [{ text: "influencer campaign compliance", href: "/blog/influencer-marketing-compliance" }],
      },
      {
        type: "template",
        label: "Brief for a hard-to-demonstrate product",
        text: "Product: [name]   Main buyer barrier: [don't believe / don't understand / don't need / looks complicated]\nFormat: [diary / explainer / scenario / comparison / walkthrough / expert / proof]\nWhat you can show: [routine, process, screen, scenario, proof document]\nWhat you must not show or say: [simulated results, unproven claims, 'guaranteed']\nHonest expectations to state: [e.g. 'most people notice changes after several weeks, if at all']\nApproved claims: [claims sheet attached]\nDiary dates (if relevant): [day 1, week 2, week 6]\nDemo account or data handling: [details]\nDisclosure: [platform label plus spoken or on-screen disclosure]",
      },
      { type: "heading", text: "Production tips", id: "production" },
      {
        type: "list",
        items: [
          "Budget for time: diaries need several shoots, so pay for the full schedule rather than one deliverable.",
          "Send creators the product early enough to use it genuinely before filming.",
          "Give creators props that make the invisible visible: cutaways, test kits, diagrams they can hold.",
          "For software, provide a clean demo account with realistic sample data.",
          "Ask for raw footage of reactions and process; it's often more useful for ads than the polished edit.",
        ],
      },
      {
        type: "paragraph",
        text: "If you need this kind of content in volume for ads and product pages, Kudozz's UGC content production service briefs and manages creators for exactly these formats.",
        links: [{ text: "UGC content production service", href: "/services/ugc-content-production" }],
      },
      { type: "heading", text: "Measuring content that explains rather than shows", id: "measurement" },
      {
        type: "paragraph",
        text: "Explainer and diary content often converts later than a flashy demo, so judge it on signals of understanding and intent as well as clicks: average watch time and completion, saves and shares, the questions in comments, and assisted conversions over a longer window. Comparing one format with another inside the same campaign tells you more than comparing it with a different product's demo video.",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Forcing a 'results' format on a product whose results are slow or invisible.",
          "Faking or exaggerating results through editing.",
          "Briefing lifestyle creators to explain technical mechanisms they don't understand.",
          "Paying for one post when the format needs a diary over weeks.",
          "Hiding the effort or limits of using the product, which comes back as returns and complaints.",
          "Judging explainer content on click-through rate alone.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Products that are hard to demonstrate aren't bad candidates for creator content; they just need a different brief. Identify the buyer's real barrier, pick the format that answers it, show only what's true and give creators the time and props to do it well.",
      },
    ],
    faqs: [
      {
        question: "Can influencer marketing work for services rather than products?",
        answer:
          "Yes. Show the parts customers care about: how easy it is to book, what happens on the day, the handover and the result for the space or task. Walkthroughs and honest comparisons with the usual alternative tend to work well.",
      },
      {
        question: "How do we show results for products that take weeks to work?",
        answer:
          "Use a diary format with several check-ins over the period, and let creators report honestly, including when they notice little. Pay for the full schedule, and never let editing suggest faster or bigger results than happened.",
      },
      {
        question: "Is a dramatised scenario allowed in creator content?",
        answer:
          "It can be, if it's clearly presented as a dramatisation and doesn't mislead about what the product does or covers. For insurance and other regulated products, have compliance review the scenario and its claims first.",
      },
      {
        question: "What creators suit hard-to-demonstrate products?",
        answer:
          "Creators who explain well and are trusted for honesty: subject-matter experts for mechanisms, everyday creators for diaries and routines, and creators comfortable with screen recordings for software. Polished lifestyle creators suit them less well unless paired with an explainer.",
      },
    ],
  },
];
