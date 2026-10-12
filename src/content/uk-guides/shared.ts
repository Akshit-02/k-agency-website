/**
 * UK cluster (1860–1909). Shared constants and the source register for every regulatory, tax, platform and market
 * claim. `checked` is the date the claim was verified. See docs/uk-seo-audit-1860-1909.md.
 *
 * Kudozz is an India-registered agency. Nothing in this cluster claims a UK office, staff, creator network, clients
 * or case studies. The pages are buyer guides written in British English.
 */
export const UK_AUTHOR = { name: "Kudozz Strategy Team", role: "Agency Team" };
export const UK_PUBLISHED = "2026-10-10";
export const UK_REVIEWED = "October 2026";
export const UK_REVIEW_DATE_TEXT = "10 October 2026";
export const UK_LANGUAGE = "en-GB";
export const UK_HUB = { name: "United Kingdom", href: "/blog/influencer-marketing-uk" };

export const UK_SRC = {
  // Disclosure: ASA/CAP and CMA
  asaInfluencerGuide: { url: "https://www.asa.org.uk/resource/influencers-guide.html", label: "ASA/CAP and CMA, Influencers' guide to making clear that ads are ads (3rd edition, 23 March 2023; page notes a DMCC Act update to follow)", checked: "2026-10-10" },
  asaInfluencerGuidePdf: { url: "https://www.asa.org.uk/static/b3d29825-db12-44c2-bfcff1b344b564b3/Influencerguidance2023v4-FINAL-DMMCA-Holding1.pdf", label: "ASA/CAP and CMA influencers' guide (PDF): payment, affiliate links, labels, 12-month rule, control test, sanctions", checked: "2026-10-10" },
  cmaWhoRegulates: { url: "https://assets.publishing.service.gov.uk/media/68b81754536d629f9c82aa16/Who_regulates_hidden_advertising.pdf", label: "CMA, Who regulates hidden advertising? (DMCC Act Part 4 replaced the CPRs from 6 April 2025; no control requirement; applies to brands, creators, intermediaries and platforms)", checked: "2026-10-10" },
  cmaBrands: { url: "https://www.gov.uk/government/publications/reviews-and-social-media-endorsements-guidance-for-businesses-and-brands/social-media-endorsements-guidance-for-brands", label: "CMA, Social media endorsements: guidance for brands", checked: "2026-10-10" },
  cmaCreators: { url: "https://www.gov.uk/government/publications/social-media-endorsements-guide-for-influencers", label: "CMA, Content creators and social media endorsements (published 23 January 2019, updated 3 September 2025)", checked: "2026-10-10" },
  cmaReviews: { url: "https://www.gov.uk/government/publications/reviews-and-social-media-endorsements-guidance-for-businesses-and-brands/reviews-guidance-for-businesses-and-agencies", label: "CMA, Reviews: guidance for businesses and agencies (fake and concealed incentivised reviews banned under the DMCC Act)", checked: "2026-10-10" },
  dmccFines: { url: "https://cms.law/en/gbr/legal-updates/judge-jury-and-executioner-the-cma-publishes-its-final-consumer-enforcement-guidance", label: "CMS, the CMA's final consumer enforcement guidance: direct fines up to 10% of global turnover (law-firm summary)", checked: "2026-10-10" },
  isbaCode: { url: "https://www.isba.org.uk/knowledge/influencer-marketing", label: "ISBA, Influencer Marketing Code of Conduct (non-binding; can be appended to contracts)", checked: "2026-10-10" },
  isbaTemplates: { url: "https://isba.org.uk/knowledge/isba-influencer-contract-templates", label: "ISBA, influencer contract templates (with and without a service company; micro-influencer template)", checked: "2026-10-10" },
  // Promotions
  asaPrizeDraws: { url: "https://www.asa.org.uk/advice-online/promotional-marketing-prize-draws-in-social-media.html", label: "CAP advice, prize draws in social media (rules 8.2, 8.17, 8.24, 8.28; joint promoters)", checked: "2026-10-10" },
  niPrizeDraws: { url: "https://www.lewissilkin.com/en/insights/no-purchase-necessary-route-for-chance-based-competitions-no-longer-required-in-northern-ireland", label: "Lewis Silkin, Northern Ireland prize draw law aligned with Great Britain from 27 April 2022 (law-firm summary)", checked: "2026-10-10" },
  // Regulated sectors
  lhfGuidance: { url: "https://www.asa.org.uk/static/98d383af-0e0c-4fbe-9c920927a369c112/Less-healthy-foods-advertising-guidance.pdf", label: "CAP, Advertising guidance on less healthy food and drink (rule 15.19, from 5 January 2026; influencer section 6.3)", checked: "2026-10-10" },
  lhfNews: { url: "https://www.asa.org.uk/news/new-rules-on-ads-for-less-healthy-food-and-drink-products.html", label: "ASA, New rules on ads for less healthy food and drink products", checked: "2026-10-10" },
  cap15: { url: "https://www.asa.org.uk/type/non_broadcast/code_section/15.html", label: "CAP Code section 15: food, food supplements and associated health or nutrition claims", checked: "2026-10-10" },
  alcoholUnder25: { url: "https://www.asa.org.uk/advice-online/alcohol-featuring-under-25s.html", label: "CAP advice, alcohol: featuring under-25s (rule 18.16, includes influencers)", checked: "2026-10-10" },
  alcoholInfluencers: { url: "https://www.asa.org.uk/advice-online/alcohol-use-of-celebrities.html", label: "CAP advice, alcohol: use of celebrities and influencers", checked: "2026-10-10" },
  gamblingStrongAppeal: { url: "https://www.asa.org.uk/news/tough-new-rules-to-curb-broad-appeal-of-gambling-ads-and-better-protect-under-18s.html", label: "ASA, strong-appeal rules for gambling ads (in force 1 October 2022; covers influencers)", checked: "2026-10-10" },
  pomAdvice: { url: "https://www.asa.org.uk/advice-online/healthcare-prescription-only-medicine.html", label: "CAP advice, prescription-only medicines (rule 12.12)", checked: "2026-10-10" },
  pomWeightLoss: { url: "https://www.asa.org.uk/advice-online/weight-control-prescription-only-medicines.html", label: "CAP advice, weight control: prescription-only medicines (affiliate and referral posts)", checked: "2026-10-10" },
  fcaFg241: { url: "https://www.fca.org.uk/publications/finalised-guidance/fg24-1-finalised-guidance-financial-promotions-social-media", label: "FCA, FG24/1 finalised guidance on financial promotions on social media (26 March 2024)", checked: "2026-10-10" },
  cmaFashionGreen: { url: "https://www.gov.uk/government/publications/complying-with-consumer-law-when-making-environmental-claims-in-the-fashion-retail-sector", label: "CMA, complying with consumer law when making environmental claims in fashion retail (18 September 2024)", checked: "2026-10-10" },
  greenClaimsCode: { url: "https://greenclaims.campaign.gov.uk/", label: "CMA, Green Claims Code", checked: "2026-10-10" },
  // Pricing
  cmaPriceTransparency: { url: "https://www.gov.uk/government/publications/price-transparency-cma209", label: "CMA, Price transparency guidance CMA209 (18 November 2025)", checked: "2026-10-10" },
  // Tax
  hmrcCreators: { url: "https://www.gov.uk/guidance/check-if-you-need-to-tell-hmrc-about-your-income-from-online-platforms", label: "HMRC, check if you need to tell HMRC about income from online platforms (gifts count, £1,000 trading allowance)", checked: "2026-10-10" },
  vatThreshold: { url: "https://www.gov.uk/vat-registration/when-to-register", label: "GOV.UK, VAT registration threshold £90,000 (rolling 12 months)", checked: "2026-10-10" },
  // Privacy
  icoCookies: { url: "https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/", label: "ICO, cookies and similar technologies (PECR)", checked: "2026-10-10" },
  // Market
  iabCreatorMarket: { url: "https://www.iabuk.com/news-article/uk-creator-revenue-surpass-ps1bn-first-time-2026", label: "IAB UK with IRM, UK creator partnership revenue £966m in 2025, forecast £1.217bn in 2026 (excludes paid amplification)", checked: "2026-10-10" },
  // Platforms
  tiktokShopUk: { url: "https://www.retailgazette.co.uk/blog/2024/11/how-tiktok-shop-is-becoming-the-uks-next-big-ecommerce-powerhouse/", label: "Retail Gazette, how TikTok Shop is becoming a UK ecommerce powerhouse (November 2024): creators act as affiliates earning commission. TikTok's own UK seller pages did not load for us", checked: "2026-10-10" },
  youtubeShoppingUk: { url: "https://www.retailgazette.co.uk/blog/2026/07/youtube-debuts-shopping-affiliate-programme-with-boots-ms-and-next-signing-up/", label: "Retail Gazette, YouTube launches its Shopping Affiliate programme in the UK (23 July 2026; creators with at least 500 subscribers). YouTube's help-page country list had not been updated when checked", checked: "2026-10-10" },
  // Regions
  welshCensus: { url: "https://www.gov.wales/welsh-language-wales-census-2021-html", label: "Welsh Government, Welsh language in Wales (Census 2021): 538,300 people aged 3+ (17.8%) able to speak Welsh", checked: "2026-10-10" },
} as const;
