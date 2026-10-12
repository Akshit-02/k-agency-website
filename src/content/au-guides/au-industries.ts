import type { BlogPost } from "@/content/blog";
import { AU_AUTHOR, AU_HUB, AU_LANGUAGE, AU_PUBLISHED, AU_REVIEWED, AU_SRC } from "@/content/au-guides/shared";

/**
 * Australia cluster, batch 2 (1560–1609): industry guides where Australian rules or market structure add substance.
 * Automotive (1596), B2B and SaaS (1597 + 1598), education (1599), food and beverage (1600), gaming and esports
 * (1601), financial services (1602), health, wellness and fitness (1603 + 1592) and sustainability claims with
 * fashion (1604 + 1591). Regulated-category pages are general information with a scope note, not legal advice.
 * See docs/australia-1560-1609-audit.md.
 */
const SCOPE_NOTE =
  "This guide is general information for marketers, not legal advice. Rules change, so check the current guidance from the regulators linked here, and take legal or compliance advice before running campaigns in this category.";

export const auIndustryPosts: BlogPost[] = [
  // 1602
  {
    slug: "financial-services-influencer-marketing-australia",
    category: "Influencer Marketing",
    title: "Influencer Marketing for Australian Financial Services Brands: ASIC Rules for Finfluencers",
    seoTitle: "Financial Services Influencer Marketing in Australia",
    excerpt:
      "How banks, super funds, brokers, insurers, fintechs and credit providers can work with creators in Australia: what ASIC's INFO 269 says about financial product advice and 'dealing by arranging', why licensees can be liable for influencers they use, design and distribution obligations, and safer campaign formats.",
    metaDescription:
      "Financial services influencer marketing in Australia: ASIC INFO 269, unlicensed advice and affiliate links, licensee liability, DDO and safer creator formats.",
    author: AU_AUTHOR,
    publishedAt: AU_PUBLISHED,
    lastReviewed: AU_REVIEWED,
    readingTime: "5 min read",
    inLanguage: AU_LANGUAGE,
    spatialCoverage: "Australia",
    breadcrumbParents: [AU_HUB],
    tags: ["finfluencer rules Australia", "ASIC INFO 269", "financial services influencer marketing Australia", "fintech influencer marketing Australia"],
    related: ["influencer-advertising-rules-australia", "influencer-contracts-australia", "influencer-marketing-fintech-brands-india"],
    hero: {
      src: "/blog/au-guides/financial-services-influencer-marketing-australia.svg",
      alt: "Financial services creator campaigns in Australia: licence check, factual content, no tailored advice, link structure, monitoring",
    },
    body: [
      {
        type: "paragraph",
        text: "Money content is popular with Australian audiences, and financial brands want to reach them through creators. It's also one of the most tightly regulated categories for creator content. ASIC has published specific guidance for influencers and for the licensees that use them, and the Federal Court has found an Instagram finance influencer gave financial product advice without a licence. This guide is for marketing teams at banks, super funds, brokers, insurers, payment and credit providers and fintechs.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Under ASIC's INFO 269, an influencer who recommends or gives opinions about financial products intended to influence decisions may be giving financial product advice, which requires an Australian financial services (AFS) licence or authorisation. Promoting a unique link that pays per sign-up can be 'dealing by arranging'. Content must not be misleading, and AFS licensees can be liable for influencers they use. Safer formats are factual and educational, balanced on risk, reviewed by compliance, and never presented as personal advice.",
      },
      { type: "heading", text: "What ASIC's INFO 269 says", id: "info-269" },
      {
        type: "table",
        headers: ["Issue", "ASIC's position (summarised)", "Example from the guidance"],
        rows: [
          ["Financial product advice", "A recommendation or opinion intended to influence a decision about a financial product. Being paid makes it more likely content is intended to influence.", "'Five stocks you should buy and hold' is likely advice; describing how shares and ETFs differ is unlikely to be"],
          ["Dealing by arranging", "Being actively involved in making a transaction happen is a financial service", "A unique link to a trading platform paying per sign-up, with a benefit to followers, is likely arranging"],
          ["Misleading conduct", "Statements must be true and substantiated; predictions need reasonable grounds; judged on the overall impression on the actual audience", "'Risk-free way to make a quick profit' is likely misleading"],
          ["Licensee obligations", "Licensees may be liable for influencers they use; need due diligence, monitoring and compliance resources", "Influencers acting on a licensee's behalf may be its representatives"],
          ["Design and distribution", "Consider whether influencers promote products to consumers outside the target market", "A product's target market determination limits who should be targeted"],
        ],
      },
      {
        type: "paragraph",
        text: "Source: ASIC's INFO 269, discussing financial products and services online (issued March 2022). ASIC notes that carrying on a financial services business without a licence is an offence, with penalties including up to five years' imprisonment for individuals.",
        links: [{ text: "ASIC's INFO 269", href: AU_SRC.asicInfo269.url }],
      },
      { type: "heading", text: "The Scholz case", id: "case" },
      {
        type: "paragraph",
        text: "In December 2022, the Federal Court found that Tyson Scholz, known online as 'ASX Wolf', had provided financial product advice without a licence through Instagram posts and a paid online community. Reports said the court considered that referring to a company favourably could be a recommendation even without an explicit 'buy'. Permanent injunctions and costs orders followed. The case is a reminder that the substance of content matters, not just its wording.",
        links: [{ text: "Federal Court found", href: AU_SRC.scholzCase.url }],
      },
      { type: "heading", text: "What brands can do with creators", id: "formats" },
      {
        type: "table",
        headers: ["Generally lower risk", "Higher risk: needs specialist advice"],
        rows: [
          ["Budgeting and saving habits that don't involve financial products", "Recommending specific shares, funds, crypto or super options"],
          ["Explaining how a product type works, with risks given equal prominence", "Performance or return claims, especially 'guaranteed' or 'risk-free'"],
          ["Showing how to use an app's features, factually", "Unique links that pay per account opened or trade"],
          ["Brand awareness without product recommendations", "Content aimed at people outside the product's target market"],
          ["Creators who are authorised representatives, within their authorisation", "Creators offering paid communities with stock tips"],
        ],
      },
      {
        type: "paragraph",
        text: "Whatever the format, disclosure is still required: say clearly that the post is paid. ASIC also suggests influencers use a documented agreement and check who is paying them. Contract terms are covered in influencer contracts in Australia.",
        links: [{ text: "influencer contracts in Australia", href: "/blog/influencer-contracts-australia" }],
      },
      { type: "heading", text: "A compliance checklist for licensees", id: "checklist" },
      {
        type: "list",
        items: [
          "Check whether the creator holds an AFS licence or is an authorised representative, and what for",
          "Decide whether the creator would act on your behalf, and what that triggers",
          "Brief on facts only: features, fees, risks; no personal or general advice unless authorised",
          "Map targeting to the target market determination for each product",
          "Review scripts, captions, links and pinned comments before posting",
          "Avoid per-sign-up payments for unauthorised creators without legal advice",
          "Monitor posts and comments during and after the campaign; keep records",
          "Apply ASIC's advertising guidance (RG 234) to creator content as you would to ads",
        ],
      },
      { type: "heading", text: "Credit, insurance and super", id: "products" },
      {
        type: "paragraph",
        text: "The same principles apply across product types, but each has its own licensing and disclosure rules: credit has its own licensing regime, insurance and super have product-specific rules, and buy now pay later is now regulated as credit. Brief your legal team on the specific product before choosing creators. Generic fintech planning is covered in our guides for fintech brands in India and in the UAE, which describe those markets' own rules.",
        links: [
          { text: "fintech brands in India", href: "/blog/influencer-marketing-fintech-brands-india" },
          { text: "in the UAE", href: "/blog/influencer-marketing-fintech-brands-uae" },
        ],
      },
      { type: "heading", text: "Measuring finance campaigns", id: "measurement" },
      {
        type: "list",
        items: [
          "Measure qualified applications and funded accounts, not clicks",
          "Track complaints and cancellations from creator-sourced customers",
          "Check that creator-sourced customers fit the target market",
          "Report brand search and awareness separately from acquisition",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Briefing creators to 'share why they love' an investment product",
          "Paying unlicensed creators per account opened",
          "Ignoring comments where creators answer followers' personal questions",
          "Targeting young audiences for products outside their target market",
          "Treating disclosure as the whole compliance job",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: `Creators can help financial brands explain products and build trust, but the line between education and advice is easy to cross. Start from ASIC's guidance, use factual formats, check licences, and monitor everything. ${SCOPE_NOTE}`,
      },
    ],
    faqs: [
      {
        question: "Do finfluencers need a licence in Australia?",
        answer:
          "If they carry on a business of providing financial services, such as financial product advice or dealing by arranging, they need an AFS licence or authorisation from a licensee, unless an exemption applies.",
      },
      {
        question: "Can a bank or fintech pay influencers in Australia?",
        answer:
          "Yes, but ASIC says licensees may be liable for influencers they use. Use factual, balanced content, check licences, avoid per-sign-up payments to unlicensed creators without advice, and monitor posts.",
      },
      {
        question: "Is disclosure enough for paid finance content?",
        answer:
          "No. Disclosure is required, but it doesn't make unlicensed advice or misleading claims lawful.",
      },
    ],
  },
  // 1603 (+1592)
  {
    slug: "health-wellness-influencer-marketing-australia",
    category: "Influencer Marketing",
    title: "Health, Wellness and Fitness Influencer Marketing in Australia: TGA and Ahpra Rules",
    seoTitle: "Health and Wellness Influencer Marketing in Australia",
    excerpt:
      "How health, wellness, supplement, fitness and clinic brands can work with creators in Australia: the TGA's social media guidance (paid testimonials, endorsements, comments, links and livestreams), Ahpra's ban on testimonials for regulated health services and the 2025 cosmetic procedure guidelines, and fitness claims.",
    metaDescription:
      "Health, wellness and fitness influencer marketing in Australia: TGA social media rules, paid testimonials, Ahpra's testimonial ban, cosmetic guidelines.",
    author: AU_AUTHOR,
    publishedAt: AU_PUBLISHED,
    lastReviewed: AU_REVIEWED,
    readingTime: "5 min read",
    inLanguage: AU_LANGUAGE,
    spatialCoverage: "Australia",
    breadcrumbParents: [AU_HUB],
    tags: ["TGA influencer rules", "health influencer marketing Australia", "Ahpra testimonials social media", "fitness influencer marketing Australia", "supplement influencer marketing Australia"],
    related: ["beauty-skincare-influencer-marketing-australia", "influencer-advertising-rules-australia", "influencer-brief-template-australia"],
    hero: {
      src: "/blog/au-guides/health-wellness-influencer-marketing-australia.svg",
      alt: "Health and wellness creator campaigns in Australia: classify the product, TGA or Ahpra rules, endorsement not testimonial, disclosure, monitoring",
    },
    body: [
      {
        type: "paragraph",
        text: "Health and wellness is a large creator category in Australia, and also one with specific advertising law. Medicines, supplements, sunscreens and medical devices are therapeutic goods regulated by the TGA. Clinics and practitioners are regulated health services under the National Law, administered by Ahpra and the National Boards. Fitness brands can fall under either, depending on what they sell and claim. This guide sets out what creators can and can't do for each.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "For therapeutic goods, paid or incentivised testimonials (personal experience of using the product) aren't permitted, but paid influencers can give endorsements of product features if the commercial relationship is clearly disclosed. Current or former health professionals can't endorse. Comments on your posts count as testimonials, and links and hashtags form part of the ad. For regulated health services, the National Law bans testimonials in advertising, and since 2 September 2025 Ahpra's cosmetic procedure guidelines strengthen the ban on influencer testimonials and ban advertising aimed at under-18s. Prescription medicines can't be advertised to the public at all.",
      },
      { type: "heading", text: "First, classify what you're promoting", id: "classify" },
      {
        type: "table",
        headers: ["What you sell", "Main regulator", "Creator implications"],
        rows: [
          ["Listed and OTC medicines, supplements, therapeutic sunscreens, medical devices", "TGA (Advertising Code)", "No paid testimonials; disclosed endorsements possible; required statements"],
          ["Prescription medicines", "TGA", "Can't be advertised to the public, including by influencers"],
          ["Services by registered practitioners (dentists, physios, GPs, cosmetic injectors and others)", "Ahpra and National Boards", "No testimonials in advertising; cosmetic procedure guidelines"],
          ["Gyms, classes, apparel, equipment", "ACCC (consumer law)", "Accurate claims; results claims need evidence"],
          ["Foods and sports foods", "Food standards and ACCC", "Health claims rules; some sports supplements are therapeutic goods depending on ingredients and claims"],
        ],
      },
      { type: "heading", text: "TGA rules for social media", id: "tga" },
      {
        type: "paragraph",
        text: "The TGA's guidance on advertising therapeutic goods on social media (last updated 5 November 2025) is the main reference. It says consumers should recognise content as advertising without clicking, that paid endorsements from influencers must clearly be identified as advertising, and that businesses may be responsible for non-compliant content they pay for. Businesses should tell creators the product is a therapeutic good and review their content.",
        links: [{ text: "advertising therapeutic goods on social media", href: AU_SRC.tgaSocial.url }],
      },
      {
        type: "list",
        items: [
          "Testimonials vs endorsements: creators who received payment or free products can't describe their personal results; they may endorse features with disclosure",
          "Prohibited endorsers: current or former health practitioners, health professionals and medical researchers, among others",
          "Comments: third-party comments claiming personal use are testimonials, and sponsors should remove non-compliant ones",
          "Links, tags and hashtags: linked content is part of the advertisement; hashtags naming a disease can advertise the product for that disease",
          "Livestreams and podcasts: repeat disclosure and mandatory statements; use text overlays",
          "Old posts: historical posts must comply too",
          "Children: advertising directed to children under 12 is prohibited",
          "AI-generated content: the advertiser is responsible; fake testimonials and deepfakes are non-compliant",
        ],
      },
      {
        type: "paragraph",
        text: "The difference between testimonials and endorsements is explained in the TGA's testimonials and endorsements guidance. Sunscreen and cosmetics specifics are in beauty and skincare influencer marketing in Australia.",
        links: [
          { text: "testimonials and endorsements guidance", href: AU_SRC.tgaTestimonials.url },
          { text: "beauty and skincare influencer marketing in Australia", href: "/blog/beauty-skincare-influencer-marketing-australia" },
        ],
      },
      { type: "heading", text: "Ahpra rules for health services", id: "ahpra" },
      {
        type: "paragraph",
        text: "Section 133 of the National Law prohibits using testimonials to advertise a regulated health service. Ahpra describes a testimonial as a positive statement about clinical aspects: the symptom, the diagnosis or treatment, or the outcome. Comments about customer service that don't touch on clinical aspects aren't testimonials. The advertiser, meaning whoever controls the advertising, is responsible, including on social media pages it controls. See Ahpra's testimonial guidance.",
        links: [{ text: "Ahpra's testimonial guidance", href: AU_SRC.ahpraTestimonials.url }],
      },
      {
        type: "paragraph",
        text: "For cosmetic procedures, Ahpra's guidelines in effect from 2 September 2025 strengthen the ban on testimonials from social media influencers, ban advertising aimed at under-18s, require higher-risk procedure ads to identify the practitioner, and introduce a seven-day cooling-off period for under-18s considering non-surgical procedures. Prescription-only injectables can't be advertised. Read Ahpra's announcement of the new cosmetic procedure guidelines.",
        links: [{ text: "new cosmetic procedure guidelines", href: AU_SRC.ahpraCosmetic.url }],
      },
      { type: "heading", text: "Fitness brands", id: "fitness" },
      {
        type: "list",
        items: [
          "Transformation results: show typical outcomes or don't imply they're typical; before-and-after content needs care",
          "Supplements: check whether the product is a food or a therapeutic good before writing claims",
          "Gyms and studios: membership terms, cancellation and prices must be accurate in creator posts",
          "Trainers who are also health practitioners (such as physiotherapists) bring Ahpra rules with them",
          "Under-16 audiences: major platforms restrict accounts, and youth-focused fitness campaigns need rethinking",
        ],
      },
      {
        type: "paragraph",
        text: "Fitness creators are often the right fit for apparel, equipment and gyms, where consumer law rather than the TGA applies. The general guide is in Australian influencer advertising rules.",
        links: [{ text: "Australian influencer advertising rules", href: "/blog/influencer-advertising-rules-australia" }],
      },
      { type: "heading", text: "A safer campaign workflow", id: "workflow" },
      {
        type: "list",
        items: [
          "1. Classify each product or service and confirm the regulator",
          "2. Choose creators who aren't prohibited endorsers",
          "3. Brief on approved claims and required statements; no personal-result scripts for therapeutic goods",
          "4. Require a clear paid partnership label and spoken disclosure",
          "5. Review drafts, captions, hashtags and links before posting",
          "6. Moderate comments during and after the campaign; record possible adverse events",
          "7. Remove non-compliant content quickly, including older posts",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Gifting supplements and asking creators to 'share your results'",
          "Using a nurse or pharmacist creator to endorse a therapeutic good",
          "Reposting patient or customer praise for a clinic",
          "Disease hashtags on product posts",
          "Leaving testimonial comments up",
          "Assuming disclosure fixes a prohibited testimonial",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: `Health and wellness creator campaigns can work in Australia, but only with the right format: disclosed endorsements of features, not paid personal results, and no testimonials for health services. Classify first, brief precisely and moderate comments. ${SCOPE_NOTE}`,
      },
    ],
    faqs: [
      {
        question: "Can influencers promote supplements in Australia?",
        answer:
          "Yes, if the supplement can be advertised to the public, but paid or gifted influencers can't give testimonials about their personal results. They can endorse product features with clear disclosure. Current or former health professionals can't endorse.",
      },
      {
        question: "Can a clinic use influencers in Australia?",
        answer:
          "Clinics advertising regulated health services can't use testimonials about clinical aspects, and Ahpra's 2025 cosmetic guidelines strengthen the ban on influencer testimonials for cosmetic procedures. Take advice before any creator activity.",
      },
      {
        question: "Are comments on my post my responsibility?",
        answer:
          "For therapeutic goods, the TGA treats third-party comments claiming personal use as testimonials, and sponsors should remove non-compliant ones. The ACCC also says businesses are responsible for misleading posts on their pages.",
      },
    ],
  },
  // 1604 (+1591)
  {
    slug: "greenwashing-influencer-marketing-australia",
    category: "Influencer Marketing",
    title: "Influencer Marketing for Sustainable Brands in Australia: Avoiding Greenwashing",
    seoTitle: "Greenwashing and Influencer Marketing in Australia",
    excerpt:
      "How sustainable and fashion brands can brief creators on environmental claims in Australia: the ACCC's eight principles, the vague terms it recommends avoiding, the Clorox 'ocean plastic' penalty, what the 2022 greenwashing sweep found in clothing and other sectors, and a claims checklist for creator content.",
    metaDescription:
      "Brief creators on environmental claims in Australia: ACCC greenwashing principles, terms to avoid, the Clorox penalty, fashion claims and a checklist.",
    author: AU_AUTHOR,
    publishedAt: AU_PUBLISHED,
    lastReviewed: AU_REVIEWED,
    readingTime: "4 min read",
    inLanguage: AU_LANGUAGE,
    spatialCoverage: "Australia",
    breadcrumbParents: [AU_HUB],
    tags: ["greenwashing influencer marketing", "sustainable brands influencer marketing Australia", "fashion influencer marketing Australia", "ACCC environmental claims"],
    related: ["influencer-advertising-rules-australia", "influencer-brief-template-australia", "sustainable-brands-influencer-marketing-gcc"],
    hero: {
      src: "/blog/au-guides/greenwashing-influencer-marketing-australia.svg",
      alt: "Environmental claims in creator content: specific claim, evidence first, conditions stated, no vague terms, visuals checked",
    },
    body: [
      {
        type: "paragraph",
        text: "Creators are good at making sustainability feel personal, which is exactly why environmental claims in creator content need care. When a creator says a product is 'better for the planet', the claim comes from your brand, in an ad, to an audience that can't check it. The ACCC has made greenwashing an enforcement focus and published guidance on what good claims look like. This guide applies that guidance to creator campaigns, including fashion.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Give creators specific, evidenced environmental claims to use, and nothing broader. The ACCC recommends avoiding vague terms such as 'green', 'environmentally friendly', 'eco friendly' and 'sustainable', expects evidence before claims are made, and says small print and conditions must not contradict the headline. Visuals count: in the Clorox case, blue colours and wave imagery contributed to a misleading 'ocean plastic' impression and an $8.25 million penalty. Apply the same standard to creator posts as to packaging.",
      },
      { type: "heading", text: "The ACCC's eight principles", id: "principles" },
      {
        type: "table",
        headers: ["Principle", "What it means for creator content"],
        rows: [
          ["Make accurate and truthful claims", "Consider the overall impression of the video, not just the words"],
          ["Have evidence to back up claims", "Hold evidence before briefing; independent, scientific evidence is most credible"],
          ["Don't hide important information", "If only one part of the product is recycled, say which"],
          ["Explain any conditions", "'Recyclable' only through special bins must say so"],
          ["Avoid broad and unqualified claims", "Replace 'eco friendly' with the specific fact"],
          ["Use clear and easy to understand language", "No technical terms the audience won't understand"],
          ["Visual elements shouldn't give the wrong impression", "Nature imagery, green halos and recycling symbols can make claims"],
          ["Be direct and open about sustainability transition", "Goals need real plans; offsetting should be described as offsetting"],
        ],
      },
      {
        type: "paragraph",
        text: "Source: the ACCC's environmental and sustainability claims guidance and its guide for business, published 12 December 2023.",
        links: [
          { text: "environmental and sustainability claims guidance", href: AU_SRC.acccGreenClaims.url },
          { text: "guide for business", href: AU_SRC.acccGreenGuide.url },
        ],
      },
      { type: "heading", text: "What enforcement shows", id: "enforcement" },
      {
        type: "paragraph",
        text: "On 14 April 2025 the Federal Court ordered Clorox Australia to pay $8.25 million for representing that GLAD bags were made of 50% recycled 'ocean plastic' when the plastic was collected from communities up to 50 kilometres from the shore. Clarifying statements on the back of the pack weren't enough to correct the impression. The court noted the blue colour and wave imagery, and that 'green' connoted environmental friendliness. Read the ACCC's release on the Clorox penalty.",
        links: [{ text: "release on the Clorox penalty", href: AU_SRC.acccClorox.url }],
      },
      {
        type: "paragraph",
        text: "The ACCC's 2022 internet sweep found 57% of 247 businesses reviewed made concerning environmental claims, with cosmetics and personal care, clothing and footwear, and food and drink among the sectors of most concern. See the greenwashing sweep findings.",
        links: [{ text: "greenwashing sweep findings", href: AU_SRC.acccGreenSweep.url }],
      },
      { type: "heading", text: "Briefing creators on green claims", id: "briefing" },
      {
        type: "table",
        headers: ["Avoid in the brief", "Use instead (if true and evidenced)"],
        rows: [
          ["'Sustainable', 'eco friendly', 'green'", "'Made with 60% recycled polyester (main fabric)'"],
          ["'Plastic free'", "'Plastic-free outer packaging; the inner seal contains plastic'"],
          ["'Carbon neutral'", "What was reduced, what was offset, and how"],
          ["'Biodegradable'", "Under what conditions and how long, or don't claim it"],
          ["'Better for the planet'", "The specific comparison and its basis"],
        ],
      },
      {
        type: "list",
        items: [
          "Put approved environmental wording in the brief, word for word",
          "Ask creators not to add their own environmental claims",
          "Check visuals: nature settings and recycling symbols can imply claims",
          "Link to your evidence page from the caption where possible",
          "Review comments where creators answer sustainability questions",
        ],
      },
      { type: "heading", text: "Fashion brands", id: "fashion" },
      {
        type: "paragraph",
        text: "Fashion is one of Australia's biggest creator categories, and clothing was one of the sectors where the ACCC's sweep found the most concerns. Beyond green claims, fashion creator content needs accurate prices and sale claims, honest descriptions of fabric and fit, and clear disclosure of gifted clothing, which is the most common gifting arrangement. Seasons are reversed from the northern hemisphere, so global content calendars rarely fit. Product and creator planning more generally is in our fashion brand guide, written for India but applicable in its method.",
        links: [{ text: "fashion brand guide", href: "/blog/influencer-marketing-fashion-brands-india" }],
      },
      {
        type: "list",
        items: [
          "'Recycled', 'organic' and 'ethically made' need evidence and should say which part of the garment",
          "Resale, repair and take-back programs: explain how they actually work",
          "Haul content: gifted hauls need disclosure for every item received for free",
          "Sizing and fit: don't present edited or pinned fits as typical",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Letting creators describe products as 'sustainable' in their own words",
          "Relying on a website disclaimer the viewer never sees",
          "Future goals presented as current facts",
          "Nature imagery that suggests more than the claim",
          "Offsetting presented as reduction",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: `Genuine sustainability work deserves accurate claims. Give creators specific, evidenced wording, check visuals as well as words, and treat their posts as your advertising. ${SCOPE_NOTE}`,
      },
    ],
    faqs: [
      {
        question: "Can influencers call a product sustainable in Australia?",
        answer:
          "The ACCC recommends avoiding broad terms such as 'sustainable', 'eco friendly' and 'green' because they're vague and likely to mislead. Use specific, evidenced claims instead.",
      },
      {
        question: "Is the brand responsible for a creator's environmental claims?",
        answer:
          "The ACCC applies advertising rules to posts businesses pay or incentivise influencers to make. Brief the exact wording, review content and correct claims you can't support.",
      },
    ],
  },
  // 1600
  {
    slug: "food-beverage-influencer-marketing-australia",
    category: "Influencer Marketing",
    title: "Influencer Marketing for Australian Food and Beverage Brands",
    seoTitle: "Food and Beverage Influencer Marketing in Australia",
    excerpt:
      "How Australian food and drink brands can work with creators: the AANA Food & Beverages Advertising Code (occasional food and children's audiences), the Children's Advertising Code, health and nutrition claims, alcohol under ABAC, environmental claims, and measuring retail sales.",
    metaDescription:
      "Food and beverage influencer marketing in Australia: AANA food code, children's audiences, health claims, alcohol under ABAC, green claims and measurement.",
    author: AU_AUTHOR,
    publishedAt: AU_PUBLISHED,
    lastReviewed: AU_REVIEWED,
    readingTime: "4 min read",
    inLanguage: AU_LANGUAGE,
    spatialCoverage: "Australia",
    breadcrumbParents: [AU_HUB],
    tags: ["food influencer marketing Australia", "beverage influencer marketing Australia", "AANA food and beverages code", "FMCG influencer marketing Australia"],
    related: ["hospitality-influencer-marketing-australia", "greenwashing-influencer-marketing-australia", "influencer-marketing-food-brands-india"],
    hero: {
      src: "/blog/au-guides/food-beverage-influencer-marketing-australia.svg",
      alt: "Food and drink creator campaigns in Australia: product classification, audience age, claims check, alcohol rules, retail measurement",
    },
    body: [
      {
        type: "paragraph",
        text: "Food and drink content is among the most-watched creator content in Australia, from recipes and taste tests to supermarket hauls. For packaged food and drink brands, it's also a category with specific advertising codes, particularly for anything children may watch. This guide covers the rules and how to plan, brief and measure creator campaigns for food and beverage brands. Venues and restaurants are covered separately in hospitality influencer marketing in Australia.",
        links: [{ text: "hospitality influencer marketing in Australia", href: "/blog/hospitality-influencer-marketing-australia" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Check whether the product is an 'occasional' food or drink under the AANA Food & Beverages Code (one that fails the FSANZ nutrient profiling test). If it is, its advertising must not target children under 15, and it should only run where children are 25% or less of the audience. Advertising directed at children must also meet the Children's Advertising Code. Health and nutrition claims must follow the Food Standards Code. Alcohol has its own code under ABAC, with creators 25 or older. Disclose every paid or gifted post.",
      },
      { type: "heading", text: "Occasional food and children's audiences", id: "children" },
      {
        type: "paragraph",
        text: "The AANA Food & Beverages Advertising Code, in effect since 1 November 2021, defines children as under 15 and treats food or drink that fails the FSANZ Nutrient Profiling Scoring Criterion as 'occasional'. Advertising for occasional food can't target children and should only appear where children make up 25% or less of the audience. That threshold applies to digital media, including creator content. Read the AANA's announcement of the Food & Beverages Code.",
        links: [{ text: "announcement of the Food & Beverages Code", href: AU_SRC.aanaFoodCode.url }],
      },
      {
        type: "list",
        items: [
          "Ask creators for their audience age split; look for the share under 15 and under 18",
          "Avoid creators whose content or audience is mainly children for occasional food",
          "Don't use themes, characters or challenges designed for children",
          "Remember that major platforms must restrict accounts for under-16s, but children can still view some content logged out",
          "Advertising directed at children must be immediately recognisable as advertising under the AANA Children's Advertising Code",
        ],
      },
      {
        type: "paragraph",
        text: "The Children's Advertising Code and the under-16 restrictions are covered in Australia's under-16 social media restrictions.",
        links: [{ text: "Australia's under-16 social media restrictions", href: "/blog/social-media-minimum-age-influencer-campaigns-australia" }],
      },
      { type: "heading", text: "Health and nutrition claims", id: "claims" },
      {
        type: "paragraph",
        text: "Claims such as 'high in protein', 'good source of fibre' or 'supports immunity' are regulated nutrition content and health claims under the Food Standards Code. Creators shouldn't make health claims that your label and evidence can't support. FSANZ's page on nutrition, health and related claims explains the framework. Put the approved claims word for word in the brief.",
        links: [{ text: "nutrition, health and related claims", href: "https://www.foodstandards.gov.au/business/labelling/nutrition-health-and-related-claims" }],
      },
      { type: "heading", text: "Alcohol and low and no alcohol drinks", id: "alcohol" },
      {
        type: "paragraph",
        text: "ABAC's July 2026 guide for brands working with influencers makes brands responsible for influencer posts, requires influencers to be 25 or older, and expects age-restriction controls. Low and no alcohol products that carry an alcohol brand's name can also raise ABAC issues. Read the ABAC guide for brands working with influencers.",
        links: [{ text: "ABAC guide for brands working with influencers", href: AU_SRC.abacInfluencers.url }],
      },
      { type: "heading", text: "Packaging and environmental claims", id: "green" },
      {
        type: "paragraph",
        text: "Food and drink was one of the sectors where the ACCC's 2022 sweep found the most concerning environmental claims. If creators mention packaging, recycling or sourcing, give them specific, evidenced wording. See influencer marketing for sustainable brands in Australia.",
        links: [{ text: "influencer marketing for sustainable brands in Australia", href: "/blog/greenwashing-influencer-marketing-australia" }],
      },
      { type: "heading", text: "Formats that work", id: "formats" },
      {
        type: "table",
        headers: ["Format", "Good for", "Watch for"],
        rows: [
          ["Recipes using the product", "Usage ideas, repeat purchase", "Nutrition claims in captions"],
          ["Honest taste tests", "Launches, credibility", "Don't script positive reactions"],
          ["Supermarket finds", "Retail availability", "Prices and availability must be accurate"],
          ["Seasonal entertaining", "Christmas, Easter, sport finals", "Occasional food and family audiences"],
          ["Behind the scenes", "Provenance and makers", "Origin claims need evidence"],
        ],
      },
      { type: "heading", text: "Measuring retail sales", id: "measurement" },
      {
        type: "list",
        items: [
          "Most food sales happen in supermarkets, where creator links can't track purchases",
          "Use regional or retailer-level sales comparisons, with and without creator activity",
          "Track online retailer clicks or recipe page visits as leading signals",
          "Run brand lift or search-trend checks for launches",
          "Separate creator effects from price promotions running at the same time",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Choosing family creators with large child audiences for occasional food",
          "Creators adding 'healthy' or 'guilt free' in captions",
          "Using creators under 25 for alcohol brands",
          "Undisclosed gifted hampers",
          "Measuring supermarket brands on code redemptions alone",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: `Food and drink creator campaigns work best with real use and honest reactions. Check the product's classification and the audience's age, brief claims exactly, and measure sales in the channels where people actually buy. ${SCOPE_NOTE}`,
      },
    ],
    faqs: [
      {
        question: "Can food brands use influencers to reach children in Australia?",
        answer:
          "Advertising for occasional food and drink (those that fail the FSANZ nutrient profiling test) must not target children under 15 and should only run where children are 25% or less of the audience. Other children's advertising must meet the Children's Advertising Code.",
      },
      {
        question: "Can influencers make health claims about food?",
        answer:
          "Only claims permitted under the Food Standards Code and supported by your evidence. Put the approved wording in the brief and check captions before posting.",
      },
    ],
  },
  // 1601
  {
    slug: "gaming-esports-influencer-marketing-australia",
    category: "Influencer Marketing",
    title: "Influencer Marketing for Australian Gaming and Esports Brands",
    seoTitle: "Gaming and Esports Influencer Marketing in Australia",
    excerpt:
      "How game publishers, hardware brands and esports organisations can work with streamers and creators in Australia: the under-16 account restrictions on Twitch, Kick, YouTube and other platforms, classification rules for loot boxes and simulated gambling, children's advertising, and measuring creator campaigns.",
    metaDescription:
      "Gaming and esports influencer marketing in Australia: under-16 limits on Twitch and YouTube, loot box and simulated gambling ratings, and measurement.",
    author: AU_AUTHOR,
    publishedAt: AU_PUBLISHED,
    lastReviewed: AU_REVIEWED,
    readingTime: "4 min read",
    inLanguage: AU_LANGUAGE,
    spatialCoverage: "Australia",
    breadcrumbParents: [AU_HUB],
    tags: ["gaming influencer marketing Australia", "esports influencer marketing Australia", "Twitch streamer marketing Australia", "loot box classification Australia"],
    related: ["social-media-minimum-age-influencer-campaigns-australia", "instagram-tiktok-youtube-influencer-marketing-australia", "gaming-influencer-marketing-india"],
    hero: {
      src: "/blog/au-guides/gaming-esports-influencer-marketing-australia.svg",
      alt: "Gaming creator campaigns in Australia: audience age, platform restrictions, game classification, disclosure on streams, measurement",
    },
    body: [
      {
        type: "paragraph",
        text: "Gaming creators and streamers have some of the most engaged audiences on any platform, and many of their viewers are young. In Australia, that combination now runs into two sets of rules: the social media minimum age, which covers Twitch, Kick and YouTube as well as the main social platforms, and classification rules for games with paid loot boxes and simulated gambling. This guide covers both, plus disclosure on streams and measurement.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Check the creator's audience age before anything else. Since 10 December 2025, age-restricted platforms including Twitch, Kick, YouTube, TikTok, Instagram and Reddit must take reasonable steps to stop under-16s holding accounts. Games classified from 22 September 2024 with paid chance-based items (such as loot boxes) get at least an M rating, and those with simulated gambling are R18+. Don't target children with M or R18+ games or gambling-like features, disclose sponsorship clearly and repeatedly on streams, and keep gambling sponsorships out of scope without specialist advice.",
      },
      { type: "heading", text: "Platforms and the under-16 rules", id: "platforms" },
      {
        type: "paragraph",
        text: "eSafety's view is that Facebook, Instagram, Snapchat, Threads, TikTok, Twitch, X, YouTube, Kick and Reddit are age-restricted platforms; YouTube Kids is not. The obligation is on platforms, not brands or creators, but it changes who is logged in, which features they see and what audience data means. eSafety's list of age-restricted platforms can change.",
        links: [{ text: "list of age-restricted platforms", href: AU_SRC.esafetyPlatforms.url }],
      },
      {
        type: "list",
        items: [
          "Ask for audience age splits, dated, and treat under-18 shares carefully",
          "Expect audience data and reach to have shifted since December 2025",
          "Logged-out viewing is still possible on some platforms, so young people may still see content",
          "Don't design campaigns that encourage under-16s to create accounts",
        ],
      },
      {
        type: "paragraph",
        text: "The full explanation is in Australia's under-16 social media restrictions.",
        links: [{ text: "Australia's under-16 social media restrictions", href: "/blog/social-media-minimum-age-influencer-campaigns-australia" }],
      },
      { type: "heading", text: "Loot boxes and simulated gambling", id: "classification" },
      {
        type: "paragraph",
        text: "From 22 September 2024, computer games classified in Australia with in-game purchases linked to chance (such as paid loot boxes) receive a minimum M rating, and games containing simulated gambling receive a minimum R18+ rating, which is legally restricted to adults. The changes apply to games classified after that date. Read the government's announcement on mandatory minimum classifications.",
        links: [{ text: "announcement on mandatory minimum classifications", href: AU_SRC.lootBoxes.url }],
      },
      {
        type: "list",
        items: [
          "Know your game's classification before choosing creators",
          "For M games, avoid creators whose audience is mostly children",
          "For R18+ games, use creators with adult audiences and avoid youth-skewed platforms and formats",
          "Don't present loot box openings as a way to win value",
          "Don't promote real-money gambling through gaming creators without specialist legal advice",
        ],
      },
      { type: "heading", text: "Disclosure on streams", id: "disclosure" },
      {
        type: "list",
        items: [
          "Use the platform's paid partnership or sponsorship setting",
          "Say it out loud at the start and repeat it during long streams, as viewers join late",
          "Keep an on-screen label or overlay for sponsored segments",
          "Disclose game keys, early access and hardware given for free",
          "Disclose affiliate and creator codes, including in-game creator codes",
        ],
      },
      {
        type: "paragraph",
        text: "General disclosure rules are in Australian influencer advertising rules.",
        links: [{ text: "Australian influencer advertising rules", href: "/blog/influencer-advertising-rules-australia" }],
      },
      { type: "heading", text: "Choosing creators and formats", id: "formats" },
      {
        type: "table",
        headers: ["Goal", "Format", "Measure"],
        rows: [
          ["Launch awareness", "Sponsored first-play streams, short clips", "Concurrent viewers, clip views, wishlist adds"],
          ["Sales", "Reviews, creator codes", "Code use, store clicks, purchases"],
          ["Community", "Ongoing streamer partnerships, tournaments", "Retention, Discord or community growth"],
          ["Hardware", "Long-form reviews, setup videos", "Retailer clicks, search lift"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Booking streamers by follower count without age data",
          "Promoting M or R18+ games to young audiences",
          "Disclosure only in the stream title or description",
          "Gambling-adjacent sponsorships without legal advice",
          "Measuring only peak viewers instead of results",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: `Gaming creators can deliver real launches and loyal communities, but audience age now shapes the whole plan. Check ages and classifications first, disclose clearly on streams, and stay away from gambling-like promotion to young audiences. ${SCOPE_NOTE}`,
      },
    ],
    faqs: [
      {
        question: "Is Twitch covered by Australia's under-16 social media rules?",
        answer:
          "Yes. eSafety lists Twitch, Kick, YouTube and other platforms as age-restricted, so they must take reasonable steps to stop under-16s holding accounts. The list can change.",
      },
      {
        question: "What rating do games with loot boxes get in Australia?",
        answer:
          "Games classified from 22 September 2024 with paid chance-based items get a minimum M rating, and games with simulated gambling are R18+.",
      },
    ],
  },
  // 1599
  {
    slug: "education-influencer-marketing-australia",
    category: "Influencer Marketing",
    title: "Influencer Marketing for Australian Universities and Education Providers",
    seoTitle: "Education Influencer Marketing in Australia",
    excerpt:
      "How Australian universities, TAFEs, colleges and education providers can work with student and alumni creators: accurate course and outcome claims, international student marketing and the ESOS National Code rules on education agents, the 2026 ban on commissions for onshore transfers, migration claims and under-16 audiences.",
    metaDescription:
      "Education influencer marketing in Australia: student creators, accurate claims, ESOS agent rules, onshore transfer commissions, migration claims and ages.",
    author: AU_AUTHOR,
    publishedAt: AU_PUBLISHED,
    lastReviewed: AU_REVIEWED,
    readingTime: "4 min read",
    inLanguage: AU_LANGUAGE,
    spatialCoverage: "Australia",
    breadcrumbParents: [AU_HUB],
    tags: ["university influencer marketing Australia", "education influencer marketing Australia", "student ambassadors social media", "international student recruitment influencers"],
    related: ["influencer-marketing-education-edtech-brands-india", "influencer-marketing-universities-uae", "influencer-contracts-australia"],
    hero: {
      src: "/blog/au-guides/education-influencer-marketing-australia.svg",
      alt: "Education creator campaigns in Australia: audience and market, student creators, accurate claims, agent rules, enquiries and enrolments",
    },
    body: [
      {
        type: "paragraph",
        text: "Prospective students trust other students. That makes student and alumni creators valuable for Australian universities, TAFEs and private colleges, both for domestic recruitment and for international students choosing a country and a course. Education marketing also comes with specific obligations, particularly for international students. This guide covers how to plan creator programs and where the rules apply.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Use current students and alumni as creators, paid and disclosed, showing real experiences. Keep course, cost, outcome and employment claims accurate under consumer law. For international students, providers are responsible under the ESOS National Code for the education agents they use, and from 2026 can't pay agents commissions for students transferring from another provider onshore. Never let creators imply visa or migration outcomes. Check audience age for school-leaver campaigns, given the under-16 account restrictions.",
      },
      { type: "heading", text: "Who makes good education creators", id: "creators" },
      {
        type: "table",
        headers: ["Creator", "Strength", "Watch for"],
        rows: [
          ["Current students", "Day-to-day credibility", "Pay and disclose; don't script; workload"],
          ["Alumni", "Outcomes and careers", "Outcome claims must be typical or labelled as personal"],
          ["Student creators from source countries", "Language and cultural relevance for international audiences", "Agent rules if they recruit"],
          ["Academics and staff", "Expertise", "Clear it's institutional content"],
          ["Study and career creators", "Reach among prospective students", "Audience location and age"],
        ],
      },
      { type: "heading", text: "International students and agent rules", id: "international" },
      {
        type: "paragraph",
        text: "Under Standard 4 of the ESOS National Code, registered providers must ensure education agents act ethically, honestly and in students' best interests, with written agreements and corrective action when agents don't comply. A creator who recruits students on your behalf, for example with a referral fee per enrolment, may be acting as an agent; get advice before structuring payments that way. The Department of Education says the National Code was amended in January 2026 to ban agent commissions for onshore transfers (students already studying with another provider), except where the student was accepted on or before 31 March 2026. See the department's page on changes to the legislative framework for overseas students.",
        links: [{ text: "changes to the legislative framework for overseas students", href: AU_SRC.esosStandard4.url }],
      },
      {
        type: "list",
        items: [
          "Pay creators for content, not per enrolment, unless they're properly engaged as agents",
          "Don't target students already enrolled elsewhere in Australia with transfer incentives",
          "Keep claims about work rights, visas and migration out of creator content",
          "Check claims about costs, scholarships and accommodation are current",
          "International demand is managed: the National Planning Level is 295,000 new overseas student commencements for 2026 and 2027",
        ],
      },
      {
        type: "paragraph",
        text: "Source for the planning level: Study Australia's update on international education settings for 2027.",
        links: [{ text: "international education settings for 2027", href: AU_SRC.studentPlanning.url }],
      },
      { type: "heading", text: "Accurate claims", id: "claims" },
      {
        type: "list",
        items: [
          "Rankings: name the ranking, year and subject",
          "Employment outcomes: use your published data and its date",
          "Fees: show the full cost and what's included",
          "Entry requirements and pathways: current and complete",
          "Campus life: real, not staged as typical",
        ],
      },
      {
        type: "paragraph",
        text: "The ACCC's rules on social media promotions apply to paid student creators. See Australian influencer advertising rules.",
        links: [{ text: "Australian influencer advertising rules", href: "/blog/influencer-advertising-rules-australia" }],
      },
      { type: "heading", text: "School leavers and younger audiences", id: "age" },
      {
        type: "paragraph",
        text: "Year 10 and 11 students considering pathways may be under 16, and major platforms must restrict accounts for under-16s. Reach school-age audiences through parents, schools, careers advisers and platforms not on the restricted list, and check audience age for creators. See Australia's under-16 social media restrictions.",
        links: [{ text: "Australia's under-16 social media restrictions", href: "/blog/social-media-minimum-age-influencer-campaigns-australia" }],
      },
      { type: "heading", text: "Measuring education campaigns", id: "measurement" },
      {
        type: "list",
        items: [
          "Track enquiries, open-day registrations and applications by creator link",
          "Measure by intake, as decisions take months",
          "For international students, report by source country",
          "Ask applicants how they heard about you",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Unpaid student ambassadors expected to post as a favour",
          "Per-enrolment payments to creators without considering agent rules",
          "Migration or work-rights claims",
          "Outdated fees and scholarship information",
          "School-leaver campaigns on age-restricted platforms",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: `Student creators are the most credible voice an education provider has. Pay them, disclose it, keep claims accurate and current, and structure international recruitment within the agent rules. ${SCOPE_NOTE}`,
      },
    ],
    faqs: [
      {
        question: "Can universities pay student influencers in Australia?",
        answer:
          "Yes. Pay and disclose it, keep claims accurate, and get advice before paying per enrolment, which can make a creator look like an education agent for international students.",
      },
      {
        question: "Can influencers recruit international students for commission?",
        answer:
          "Recruiting on a provider's behalf may make them an education agent, which brings ESOS National Code obligations. Commissions for onshore transfers between providers have been banned since 2026, with a transitional exception.",
      },
    ],
  },
  // 1596
  {
    slug: "automotive-influencer-marketing-australia",
    category: "Influencer Marketing",
    title: "Influencer Marketing for Australian Automotive Brands and Dealerships",
    seoTitle: "Automotive Influencer Marketing in Australia",
    excerpt:
      "How Australian car brands, EV makers and dealerships can work with creators: the FCAI motor vehicle advertising code (administered by Ad Standards and applied to social media), safe driving depictions, motor sport and off-road content, price and EV claims, and local dealership campaigns that generate test drives.",
    metaDescription:
      "Automotive influencer marketing in Australia: FCAI code, safe driving depictions, off-road and motor sport content, price and EV claims, dealership campaigns.",
    author: AU_AUTHOR,
    publishedAt: AU_PUBLISHED,
    lastReviewed: AU_REVIEWED,
    readingTime: "4 min read",
    inLanguage: AU_LANGUAGE,
    spatialCoverage: "Australia",
    breadcrumbParents: [AU_HUB],
    tags: ["automotive influencer marketing Australia", "car dealership influencer marketing", "FCAI code influencers", "EV influencer marketing Australia"],
    related: ["influencer-marketing-automotive-dealerships", "local-regional-influencer-marketing-australia", "greenwashing-influencer-marketing-australia"],
    hero: {
      src: "/blog/au-guides/automotive-influencer-marketing-australia.svg",
      alt: "Automotive creator campaigns in Australia: safe driving depictions, accurate prices, evidenced EV claims, local dealers, test drives",
    },
    body: [
      {
        type: "paragraph",
        text: "Car buyers research for weeks, and creator reviews, road trips and ownership videos are a large part of that research. In Australia, paid creator content about vehicles is advertising, and motor vehicle advertising has its own industry code focused on road safety. This guide covers what that means for brands and dealerships working with creators.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Paid creator content for cars, light commercials, motorbikes and ATVs should meet the FCAI Voluntary Code of Practice for Motor Vehicle Advertising, which Ad Standards administers and applies across all media including social. Show legal, safe driving; keep motor sport scenes on closed circuits with racing livery; don't show unsafe off-road driving; and follow Australian road rules even when filming overseas. Prices, specifications and EV range or environmental claims must be accurate under consumer law. Disclose loaned vehicles and paid trips.",
      },
      { type: "heading", text: "The FCAI code in creator content", id: "fcai" },
      {
        type: "table",
        headers: ["Topic", "What Ad Standards says the code expects", "Creator example"],
        rows: [
          ["Scope", "Ads for cars, light commercials, motorbikes and ATVs, across all media including social", "A paid review video is likely covered"],
          ["Driving behaviour", "Legal, responsible depictions of road and passenger safety", "No speeding, phone use or unsafe overtaking on camera"],
          ["Motor sport", "Allowed in a clearly closed-circuit environment, with racing livery", "Track days filmed as track days"],
          ["Off-road", "Capability can be shown, without unsafe driving on loose or unsealed terrain", "Controlled 4WD content with safe technique"],
          ["Filmed overseas", "Must still reflect the road rules where the ad is shown", "Road trip content filmed abroad"],
        ],
      },
      {
        type: "paragraph",
        text: "Source: Ad Standards' quick guide to motor vehicle advertising. Ad Standards also offers a paid copy advice service before publication.",
        links: [{ text: "quick guide to motor vehicle advertising", href: AU_SRC.fcaiCode.url }],
      },
      { type: "heading", text: "Prices, specifications and EV claims", id: "claims" },
      {
        type: "list",
        items: [
          "Prices: drive-away vs manufacturer's list prices must be clear and current",
          "Specifications: range, fuel use, towing and safety ratings must match published figures and conditions",
          "EV and hybrid claims: 'zero emissions' and environmental benefits need context and evidence",
          "Finance offers: conditions and comparison rates belong with the offer",
          "Availability: don't present models or stock that aren't available",
        ],
      },
      {
        type: "paragraph",
        text: "Environmental claims guidance is in influencer marketing for sustainable brands in Australia.",
        links: [{ text: "influencer marketing for sustainable brands in Australia", href: "/blog/greenwashing-influencer-marketing-australia" }],
      },
      { type: "heading", text: "Dealership campaigns", id: "dealerships" },
      {
        type: "list",
        items: [
          "Use local creators whose audience lives within your trading area",
          "Pick formats that answer buyer questions: walkarounds, ownership costs, family fit",
          "Track test-drive bookings with creator-specific links or codes",
          "Coordinate with the manufacturer on claims and model information",
          "Disclose that the vehicle was loaned and any payment",
        ],
      },
      {
        type: "paragraph",
        text: "Local targeting is covered in local and regional influencer marketing in Australia, and dealership planning in general in influencer marketing for automotive dealerships.",
        links: [
          { text: "local and regional influencer marketing in Australia", href: "/blog/local-regional-influencer-marketing-australia" },
          { text: "influencer marketing for automotive dealerships", href: "/blog/influencer-marketing-automotive-dealerships" },
        ],
      },
      { type: "heading", text: "Measuring automotive campaigns", id: "measurement" },
      {
        type: "list",
        items: [
          "Test-drive bookings and enquiries by creator",
          "Configurator starts and brochure downloads",
          "Model search lift during launches",
          "Sales matched to enquiries over the following months",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Creators filming 'spirited' driving on public roads",
          "Overseas road trip content that breaks Australian road rules",
          "Range or fuel claims without conditions",
          "Undisclosed long-term vehicle loans",
          "National creators for a single-site dealership",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: `Car buyers want honest, detailed creator content, and the FCAI code wants it to show safe driving. Brief both: accuracy on prices and specifications, safety in every shot, and local creators for dealerships. ${SCOPE_NOTE}`,
      },
    ],
    faqs: [
      {
        question: "Does the FCAI code apply to influencer car reviews?",
        answer:
          "Ad Standards says the code applies to motor vehicle advertising across all media, including social media. Paid creator content promoting a vehicle is likely to be treated as advertising.",
      },
      {
        question: "Can influencers show fast driving in car content?",
        answer:
          "Motor sport scenes are allowed in a clearly closed-circuit environment with racing livery. Unsafe or illegal driving on public roads should not be shown.",
      },
    ],
  },
  // 1597 (+1598)
  {
    slug: "b2b-saas-influencer-marketing-australia",
    category: "Influencer Marketing",
    title: "B2B and SaaS Influencer Marketing in Australia: Creators, Leads and the Rules",
    seoTitle: "B2B and SaaS Influencer Marketing in Australia",
    excerpt:
      "How Australian B2B and SaaS companies can work with industry creators on LinkedIn, YouTube and podcasts: choosing credible experts, formats that create pipeline, consumer law for B2B claims, Spam Act consent when creators drive leads, fair contracts with small creator businesses, and measuring pipeline.",
    metaDescription:
      "B2B and SaaS influencer marketing in Australia: industry creators, LinkedIn and podcasts, B2B claims, Spam Act consent for leads and pipeline measurement.",
    author: AU_AUTHOR,
    publishedAt: AU_PUBLISHED,
    lastReviewed: AU_REVIEWED,
    readingTime: "4 min read",
    inLanguage: AU_LANGUAGE,
    spatialCoverage: "Australia",
    breadcrumbParents: [AU_HUB],
    tags: ["B2B influencer marketing Australia", "SaaS influencer marketing Australia", "LinkedIn creator marketing Australia", "tech influencer marketing Australia"],
    related: ["b2b-creator-economy", "b2b-creator-partnerships-linkedin", "influencer-marketing-b2b-technology"],
    hero: {
      src: "/blog/au-guides/b2b-saas-influencer-marketing-australia.svg",
      alt: "B2B creator campaigns in Australia: credible experts, useful formats, accurate claims, consented leads, pipeline measurement",
    },
    body: [
      {
        type: "paragraph",
        text: "In B2B and SaaS, the creators who matter are practitioners: accountants, operators, engineers and founders whom buyers already follow on LinkedIn, YouTube or podcasts. Their audiences are small but valuable. This guide covers how Australian B2B companies can work with them, which formats create pipeline, and the rules that still apply when the buyer is a business.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Choose creators for credibility with your buyers, not reach, and use formats that teach: walkthroughs, webinars, podcasts and honest tool comparisons. Consumer law's ban on misleading conduct applies in trade or commerce, including to business buyers, so product claims need evidence. Disclose paid partnerships on LinkedIn as anywhere else. If creators drive sign-ups, follow the Spam Act for any marketing email that follows. Use fair contracts, since many creators are small businesses. Measure pipeline and revenue over a realistic sales cycle.",
      },
      { type: "heading", text: "Choosing B2B creators", id: "creators" },
      {
        type: "table",
        headers: ["Creator type", "Where", "Good for"],
        rows: [
          ["Practitioners (finance, HR, ops, engineering)", "LinkedIn, newsletters", "Credibility with the buyer function"],
          ["Tool reviewers and educators", "YouTube", "Evaluation-stage comparisons"],
          ["Podcast hosts", "Podcasts, YouTube", "Long-form trust, founder stories"],
          ["Community leaders", "Slack groups, events, LinkedIn", "Niche reach and referrals"],
          ["Customers who create content", "LinkedIn", "Proof, with disclosure if paid or incentivised"],
        ],
      },
      {
        type: "paragraph",
        text: "Generic frameworks are in B2B creator partnerships on LinkedIn and the B2B creator economy.",
        links: [
          { text: "B2B creator partnerships on LinkedIn", href: "/blog/b2b-creator-partnerships-linkedin" },
          { text: "B2B creator economy", href: "/blog/b2b-creator-economy" },
        ],
      },
      { type: "heading", text: "Formats that create pipeline", id: "formats" },
      {
        type: "list",
        items: [
          "Workflow walkthroughs showing how the creator actually uses the product",
          "Co-hosted webinars with registration you own",
          "Podcast sponsorships with a specific offer or resource",
          "Honest comparisons with competitors, where the creator chooses the conclusion",
          "Templates or calculators the creator built with your product",
        ],
      },
      { type: "heading", text: "B2B claims are still regulated", id: "claims" },
      {
        type: "paragraph",
        text: "Misleading conduct rules apply in trade or commerce, not only to consumers. 'Saves 10 hours a week', 'Australia's leading' or 'fully compliant' need evidence and context. Customer stories used as ads must be genuine and disclose any incentive, following the ACCC's online reviews guidance. Paid LinkedIn posts need disclosure like any other platform.",
        links: [{ text: "online reviews guidance", href: AU_SRC.acccReviews.url }],
      },
      { type: "heading", text: "Leads, consent and the Spam Act", id: "spam" },
      {
        type: "paragraph",
        text: "When creators send people to a webinar or trial sign-up, the follow-up emails are commercial electronic messages. The ACMA's guidance on avoiding spam requires consent, accurate sender identification and a working unsubscribe honoured within five working days, and applies to businesses of all sizes. Make consent explicit on the sign-up form, and don't import a creator's audience list into your CRM.",
        links: [{ text: "guidance on avoiding spam", href: AU_SRC.acmaSpam.url }],
      },
      { type: "heading", text: "Fair contracts with creator businesses", id: "contracts" },
      {
        type: "paragraph",
        text: "B2B creators are usually sole traders or small companies. Unfair contract terms laws can apply to standard form contracts with them, and exclusivity in a niche can cost a creator other income. Keep terms specific and fair. See influencer contracts in Australia.",
        links: [{ text: "influencer contracts in Australia", href: "/blog/influencer-contracts-australia" }],
      },
      { type: "heading", text: "Measuring B2B creator campaigns", id: "measurement" },
      {
        type: "list",
        items: [
          "Self-reported attribution ('how did you hear about us?') on demo forms",
          "Creator links and codes for trials and webinars",
          "Pipeline and revenue from creator-sourced or influenced deals over two or three quarters",
          "Branded search and direct traffic during campaigns",
          "Sales team notes on creator mentions in calls",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Choosing creators by follower count",
          "Scripting expert creators",
          "Unsubstantiated time-saving or ROI claims",
          "Emailing webinar sign-ups without clear consent",
          "Judging results after one month in a six-month sales cycle",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "B2B creator marketing works when credible practitioners teach your buyers something useful. Pay for expertise, keep claims evidenced, handle leads lawfully and measure over the sales cycle. This is general information, not legal advice.",
      },
    ],
    faqs: [
      {
        question: "Does influencer marketing work for B2B companies in Australia?",
        answer:
          "It can, when the creators are practitioners your buyers already trust. Use educational formats such as walkthroughs, webinars and podcasts, and measure pipeline over a realistic sales cycle.",
      },
      {
        question: "Do consumer law rules apply to B2B creator content?",
        answer:
          "Yes. The ban on misleading or deceptive conduct applies in trade or commerce, including to business buyers. Claims need evidence, and paid posts need disclosure.",
      },
    ],
  },
];
