/**
 * Australia cluster (1540–1559). Shared constants and the source register for every regulatory, platform and
 * market claim. `checked` is the date the claim was verified. See docs/australia-1540-1559-audit.md.
 *
 * Kudozz is an India-registered agency. Nothing in this cluster claims an Australian office, staff, creator
 * network, clients or case studies. The pages are buyer guides written in Australian English.
 */
export const AU_AUTHOR = { name: "Kudozz Strategy Team", role: "Agency Team" };
export const AU_PUBLISHED = "2026-10-09";
export const AU_REVIEWED = "October 2026";
export const AU_REVIEW_DATE_TEXT = "9 October 2026";
export const AU_LANGUAGE = "en-AU";
export const AU_HUB = { name: "Australia", href: "/blog/influencer-marketing-australia" };

export const AU_SRC = {
  // Consumer law and regulators
  acccSweep: { url: "https://www.accc.gov.au/system/files/social-media-influencer-testimonials.pdf", label: "ACCC, findings of the internet sweep of influencer testimonials and online reviews (December 2023)", checked: "2026-10-09" },
  acccSocialPromotions: { url: "https://www.accc.gov.au/business/advertising-and-promotions/social-media-promotions", label: "ACCC, social media promotions: businesses responsible for posts and comments on their pages", checked: "2026-10-09" },
  acccReviews: { url: "https://www.accc.gov.au/business/advertising-and-promotions/online-reviews-for-product-and-services", label: "ACCC, online reviews for products and services", checked: "2026-10-09" },
  acccPhotobook: { url: "https://www.accc.gov.au/media-release/photobookshop-pays-penalties-for-influencer-reviews", label: "ACCC, PhotobookShop pays $39,600 in penalties over influencer reviews (March 2026; 403 to scripted requests, content via search index)", checked: "2026-10-09" },
  acccHismile: { url: "https://www.accc.gov.au/media-release/hismile-pays-penalties-for-false-and-misleading-social-media-videos", label: "ACCC, Hismile pays $138,600 in penalties for misleading social media videos (2026)", checked: "2026-10-09" },
  acccPenalties: { url: "https://www.accc.gov.au/business/compliance-and-enforcement/fines-and-penalties", label: "ACCC, fines and penalties", checked: "2026-10-09" },
  aanaCode: { url: "https://aana.com.au/code-of-ethics/", label: "AANA Code of Ethics (clause 2.7: clearly distinguishable advertising)", checked: "2026-10-09" },
  adStandards: { url: "https://adstandards.com.au/", label: "Ad Standards (administers complaints under AANA codes)", checked: "2026-10-09" },
  adStandardsGift: { url: "https://adstandards.com.au/sites/default/files/reports/0172-22.pdf", label: "Ad Standards case 0172-22: 'gift' label not clearly distinguishable advertising (upheld)", checked: "2026-10-09" },
  aanaChildrensCode: { url: "https://aana.com.au/aana-compliance-childrens-advertising-code/", label: "AANA Children's Advertising Code (children defined as under 15; in effect 1 December 2023)", checked: "2026-10-09" },
  aimco: { url: "https://aimco.org.au/", label: "Australian Influencer Marketing Council (AiMCO): best practice, accreditation", checked: "2026-10-09" },
  tgaInfluencers: { url: "https://adnews.com.au/news/australian-influencers-can-still-promote-therapeutic-goods-under-tga-code", label: "AdNews, TGA code: paid or gifted testimonials for therapeutic goods banned from 2022; endorsements still allowed", checked: "2026-10-09" },
  tga: { url: "https://www.tga.gov.au/", label: "Therapeutic Goods Administration", checked: "2026-10-09" },
  abacInfluencers: { url: "https://abac.org.au/wp-content/uploads/2026/07/Toolkit-2-Working-with-influencers-compliance-guide-for-brands-1-7-26.pdf", label: "ABAC, working with influencers compliance guide for brands (1 July 2026)", checked: "2026-10-09" },
  // Social media minimum age and privacy
  esafetyPlatforms: { url: "https://www.esafety.gov.au/about-us/industry-regulation/social-media-age-restrictions/which-platforms-are-age-restricted", label: "eSafety, which platforms are age-restricted (timed out on our fetch; content via search index)", checked: "2026-10-09" },
  esafetyFaq: { url: "https://www.esafety.gov.au/about-us/industry-regulation/social-media-age-restrictions/faqs", label: "eSafety, social media age restrictions FAQs", checked: "2026-10-09" },
  esafetyNotice: { url: "https://www.esafety.gov.au/newsroom/media-releases/platforms-on-notice-to-comply-with-social-media-minimum-age", label: "eSafety, platforms on notice; civil penalties up to $49.5 million", checked: "2026-10-09" },
  smmaFactSheet: { url: "https://www.infrastructure.gov.au/sites/default/files/documents/social-media-minimum-age-fact-sheet-january-2026.pdf", label: "Department of Infrastructure, Social Media Minimum Age fact sheet (January 2026)", checked: "2026-10-09" },
  oaicChildrensCode: { url: "https://www.oaic.gov.au/privacy/privacy-registers/privacy-codes/childrens-online-privacy-code", label: "OAIC, Children's Online Privacy Code (exposure draft March 2026; registration due by 10 December 2026)", checked: "2026-10-09" },
  // Tax
  atoIncome: { url: "https://www.ato.gov.au/businesses-and-organisations/income-deductions-and-concessions/income-and-deductions-for-business/assessable-income/what-income-to-include", label: "ATO, what to include in assessable income (non-cash benefits at market value; online influencer example)", checked: "2026-10-09" },
  atoGst: { url: "https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/registering-for-gst", label: "ATO, registering for GST ($75,000 turnover threshold)", checked: "2026-10-09" },
  // Market research
  iabCreatorConnect: { url: "https://www.iabaustralia.com.au/resource/creator-connect-report-2026/", label: "IAB Australia, Creator Connect Report 2026 (17 September 2026; methodology in the full report)", checked: "2026-10-09" },
  // Platforms and commerce
  youtubeAffiliate: { url: "https://support.google.com/youtube/answer/13376398", label: "YouTube Help, Shopping affiliate program eligibility and countries", checked: "2026-10-09" },
  tiktokShopAu: { url: "https://www.marketing-interactive.com/tiktok-shop-is-booming-globally-so-why-is-australia-still-waiting", label: "Marketing-Interactive, TikTok Shop not launched in Australia", checked: "2026-10-09" },
  // Tourism
  parksUluru: { url: "https://parksaustralia.gov.au/uluru/plan/permits", label: "Parks Australia, Uluru-Kata Tjuta permits (commercial filming includes influencers and content creators)", checked: "2026-10-09" },
  casaDrones: { url: "https://www.casa.gov.au/drones", label: "Civil Aviation Safety Authority, drone rules", checked: "2026-10-09" },
  creativeAustraliaProtocols: { url: "https://creative.gov.au/investment-and-development/protocols-and-resources/protocols-for-using-first-nations-cultural-and-intellectual-property-in-the-arts/", label: "Creative Australia, Protocols for using First Nations Cultural and Intellectual Property in the Arts", checked: "2026-10-09" },

  // Batch 2 (1560–1609). See docs/australia-1560-1609-audit.md.
  // Batch 1660–1709
  acccBuyingOnline: { url: "https://www.accc.gov.au/consumers/buying-products-and-services/buying-online", label: "ACCC, buying online: overseas businesses selling directly to Australian consumers must follow the Australian Consumer Law", checked: "2026-10-10" },
  acccSweepPage: { url: "https://www.accc.gov.au/about-us/publications/social-media-influencer-testimonials-and-endorsements", label: "ACCC, social media influencer testimonials and endorsements (sweep report, 7 December 2023; guidance still described as planned)", checked: "2026-10-10" },
  acccGreenClaims: { url: "https://www.accc.gov.au/business/advertising-and-promotions/environmental-and-sustainability-claims", label: "ACCC, environmental and sustainability claims: eight principles (guide published 12 December 2023)", checked: "2026-10-10" },
  acccGreenGuide: { url: "https://www.accc.gov.au/about-us/publications/a-guide-to-making-environmental-claims-for-business", label: "ACCC, Making environmental claims: a guide for business (December 2023)", checked: "2026-10-10" },
  acccGreenSweep: { url: "https://www.accc.gov.au/about-us/publications/greenwashing-by-businesses-in-australia-findings-of-acccs-internet-sweep", label: "ACCC, greenwashing internet sweep findings (57% of 247 businesses; March 2023)", checked: "2026-10-10" },
  acccClorox: { url: "https://www.accc.gov.au/media-release/clorox-ordered-to-pay-825m-in-penalties-for-misleading-ocean-plastic-claims-about-certain-glad-products", label: "ACCC, Clorox ordered to pay $8.25m over 'ocean plastic' claims (14 April 2025)", checked: "2026-10-10" },
  acccUct: { url: "https://www.accc.gov.au/media-release/accc-welcomes-new-penalties-and-expansion-of-the-unfair-contract-terms-laws", label: "ACCC, new penalties and expansion of the unfair contract terms laws", checked: "2026-10-10" },
  asicInfo269: { url: "https://asic.gov.au/regulatory-resources/financial-services/giving-financial-product-advice/discussing-financial-products-and-services-online/", label: "ASIC, INFO 269: discussing financial products and services online (March 2022)", checked: "2026-10-10" },
  scholzCase: { url: "https://www.businessnewsaus.com.au/articles/finfluencer-crackdown--federal-court-rules-asx-wolf-breached-financial-licence-laws.html", label: "Business News Australia, Federal Court rules 'ASX Wolf' breached financial licence laws (December 2022)", checked: "2026-10-10" },
  tgaSocial: { url: "https://www.tga.gov.au/resources/guidance/advertising-therapeutic-goods-social-media", label: "TGA, advertising therapeutic goods on social media (last updated 5 November 2025)", checked: "2026-10-10" },
  tgaTestimonials: { url: "https://www.tga.gov.au/resources/guidance/applying-advertising-code-rules-testimonials-and-endorsements", label: "TGA, applying the Advertising Code rules: testimonials and endorsements", checked: "2026-10-10" },
  ahpraTestimonials: { url: "https://www.ahpra.gov.au/Resources/Advertising-hub/Resources-for-advertisers/Testimonial-tool.aspx", label: "Ahpra, testimonials: understand the requirements (National Law s133)", checked: "2026-10-10" },
  ahpraCosmetic: { url: "https://www.ahpra.gov.au/News/2025-06-03-New-cosmetic-procedure-guidelines", label: "Ahpra, new cosmetic procedure guidelines (in effect 2 September 2025)", checked: "2026-10-10" },
  aanaFoodCode: { url: "https://aana.com.au/new-advertising-code-for-food-strengthens-protections-for-children/", label: "AANA, Food & Beverages Advertising Code (in effect 1 November 2021): occasional food, 25% child audience threshold", checked: "2026-10-10" },
  lootBoxes: { url: "https://www.infrastructure.gov.au/department/media/news/new-mandatory-minimum-classifications-gambling-games-content", label: "Department of Infrastructure, mandatory minimum classifications for gambling-like content in games (from 22 September 2024; timed out on our fetch, content via search index)", checked: "2026-10-10" },
  fcaiCode: { url: "https://adstandards.com.au/article/quick-guide-motor-vehicle-advertising/", label: "Ad Standards, quick guide to motor vehicle advertising (FCAI code, all media including social)", checked: "2026-10-10" },
  esosStandard4: { url: "https://www.education.gov.au/esos-framework/changes-legislative-framework-overseas-students", label: "Department of Education, changes to the legislative framework for overseas students (agent commissions, National Code)", checked: "2026-10-10" },
  agentCommissionBan: { url: "https://thepienews.com/australia-tightens-agent-commission-rules-for-onshore-transfers/", label: "The PIE News, Australia bans agent commissions for onshore transfers (2026)", checked: "2026-10-10" },
  studentPlanning: { url: "https://www.studyaustralia.gov.au/en/tools-and-resources/news/australia-confirms-international-education-settings-for-2027", label: "Study Australia, international education settings for 2027 (National Planning Level 295,000)", checked: "2026-10-10" },
  atoSuperContractors: { url: "https://www.ato.gov.au/law/view/view.htm?docid=%22TXR%2FTR20234%2FNAT%2FATO%2F00001%22", label: "ATO, TR 2023/4: employees for superannuation guarantee purposes (contracts wholly or principally for labour)", checked: "2026-10-10" },
  moralRights: { url: "https://www.artslaw.com.au/information-sheet/moral-rights/", label: "Arts Law Centre of Australia, moral rights information sheet", checked: "2026-10-10" },
  acmaSpam: { url: "https://www.acma.gov.au/avoid-sending-spam", label: "ACMA, avoid sending spam (consent, identification, unsubscribe)", checked: "2026-10-10" },
  metaMarketplaceAu: { url: "https://www.mediaweek.com.au/meta-creator-marketplace-expands-to-australia-and-new-zealand", label: "Mediaweek, Instagram creator marketplace and partnership ads expand to Australia (23 February 2024)", checked: "2026-10-10" },
  iabCommerceDiscovery: { url: "https://www.iabaustralia.com.au/resource/commerce-and-discovery-report-2026/", label: "IAB Australia, Commerce and Discovery Report 2026 (6 July 2026; 1,079 Australian online shoppers aged 18–70)", checked: "2026-10-10" },
  absCapitals: { url: "https://www.abs.gov.au/media-centre/media-releases/capital-city-growth-slows", label: "ABS, Capital city growth slows (Regional population 2024–25, released 31 March 2026)", checked: "2026-10-10" },
} as const;
