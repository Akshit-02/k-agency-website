/**
 * UAE and GCC cluster (1400–1419). Shared constants and the source register for every regulatory, calendar
 * and market claim in the cluster. Each entry records what it supports and when it was checked, so the pages
 * can be re-verified in one pass. See docs/uae-gcc-1400-1419-audit.md for decisions and the review schedule.
 *
 * Kudozz is an India-registered agency (see siteConfig). Nothing in this cluster claims a UAE office, UAE staff,
 * a UAE creator network, UAE clients or UAE case studies. The pages are buyer guides.
 */
export const AUTHOR = { name: "Kudozz Strategy Team", role: "Agency Team" };
export const GCC_PUBLISHED = "2026-10-09";
export const GCC_REVIEWED = "October 2026";
/** Shown in regulatory sections so readers know exactly when the rules were last checked. */
export const REVIEW_DATE_TEXT = "9 October 2026";
/** Content is written in English for an international readership, not Indian English. */
export const GCC_LANGUAGE = "en";

export const UAE_HUB = { name: "UAE", href: "/blog/influencer-marketing-uae" };
export const GCC_PLAYBOOK = { name: "GCC", href: "/blog/gcc-influencer-marketing-playbook" };
export const SAUDI_HUB = { name: "Saudi Arabia", href: "/blog/influencer-marketing-saudi-arabia" };
/** Batch 1420–1439 (Saudi Arabia and GCC). */
export const GCC2_PUBLISHED = "2026-10-09";

/** Source register. `checked` is the date the claim was verified against the page. */
export const SRC = {
  // UAE advertiser permit (official site returned 502 / expired certificate on 2026-10-09; rules confirmed via the reports below)
  nmaPermit: { url: "https://www.nmo.gov.ae/en/initiatives/advertiser-permit-1", label: "National Media Authority: Advertiser Permit", checked: "2026-10-09" },
  nmaVisitor: { url: "https://www.nmo.gov.ae/en/initiatives/visitor-advertiser-permit", label: "National Media Authority: Visitor Advertiser Permit", checked: "2026-10-09" },
  gnPermitHowTo: { url: "https://gulfnews.com/living-in-uae/telephone-internet/advertiser-permit-uae-who-needs-it-and-how-to-apply-online-1.500278441", label: "Gulf News, permit eligibility, fees and exemptions (updated 22 Sep 2025)", checked: "2026-10-09" },
  gnVisitor: { url: "https://gulfnews.com/uae/what-visiting-influencers-need-to-know-before-promoting-brands-in-the-uae-1.500618704", label: "Gulf News, visitor permit via accredited agency, six-month cap (updated 24 Jul 2026)", checked: "2026-10-09" },
  pinsentDeadline: { url: "https://www.pinsentmasons.com/out-law/news/uae-influencer-licence-deadline-looms", label: "Pinsent Masons, 31 Jan 2026 deadline, Decree-Law 55/2023, NMA replaced Media Council (29 Jan 2026)", checked: "2026-10-09" },
  tamimiStandards: { url: "https://www.tamimi.com/law-update-articles/media-law-and-advertising-standards-in-the-uae-key-rules-and-restrictions/", label: "Al Tamimi, UAE media law and advertising standards", checked: "2026-10-09" },
  gn20Standards: { url: "https://gulfnews.com/uae/uae-media-law-media-must-follow-20-key-standards-to-avoid-fines-of-up-to-dh1m-1.500157204", label: "Gulf News, 20 media content standards and fines", checked: "2026-10-09" },
  // Sector rules
  dhaSocial: { url: "https://gulfnews.com/uae/health/dubai-issues-social-media-rules-for-doctors-health-facilities-and-influencers-bans-misleading-claims-1.500659503", label: "Gulf News, DHA Standards for Medical Advertisement Content on Social Media (updated 1 Sep 2026)", checked: "2026-10-09" },
  tamimiHealth: { url: "https://www.tamimi.com/law-update-articles/healthcare-advertising-in-the-uae", label: "Al Tamimi, healthcare advertising in the UAE", checked: "2026-10-09" },
  dha: { url: "https://www.dha.gov.ae", label: "Dubai Health Authority", checked: "2026-10-09" },
  doh: { url: "https://www.doh.gov.ae", label: "Department of Health Abu Dhabi", checked: "2026-10-09" },
  mohap: { url: "https://mohap.gov.ae", label: "Ministry of Health and Prevention", checked: "2026-10-09" },
  ede: { url: "https://www.ede.gov.ae", label: "Emirates Drug Establishment", checked: "2026-10-09" },
  dm: { url: "https://www.dm.gov.ae", label: "Dubai Municipality (Montaji product registration)", checked: "2026-10-09" },
  sca: { url: "https://www.sca.gov.ae", label: "Securities and Commodities Authority", checked: "2026-10-09" },
  pinsentFinfluencer: { url: "https://www.pinsentmasons.com/out-law/news/uae-new-licensing-regime-finfluencers", label: "Pinsent Masons, SCA Resolution No. 10 of 2025 on finfluencers (12 Jun 2025)", checked: "2026-10-09" },
  vara: { url: "https://rulebooks.vara.ae", label: "VARA rulebooks (marketing regulations)", checked: "2026-10-09" },
  dfsa: { url: "https://www.dfsa.ae", label: "Dubai Financial Services Authority", checked: "2026-10-09" },
  adgm: { url: "https://www.adgm.com", label: "ADGM Financial Services Regulatory Authority", checked: "2026-10-09" },
  cbuae: { url: "https://www.centralbank.ae", label: "Central Bank of the UAE", checked: "2026-10-09" },
  det: { url: "https://www.dubaidet.gov.ae", label: "Dubai Department of Economy and Tourism", checked: "2026-10-09" },
  ktShowroomFine: { url: "https://www.khaleejtimes.com/uae/government/dubai-car-showroom-fined-for-misleading-sales-promotion-using-social-media-influencer", label: "Khaleej Times, Dubai Economy fines trader for misleading influencer promotion (2021)", checked: "2026-10-09" },
  dct: { url: "https://dct.gov.ae", label: "Department of Culture and Tourism Abu Dhabi", checked: "2026-10-09" },
  fta: { url: "https://tax.gov.ae/en", label: "Federal Tax Authority (VAT)", checked: "2026-10-09" },
  // Calendar
  uaeHolidays: { url: "https://u.ae/en/information-and-services/public-holidays-and-religious-affairs/public-holidays", label: "UAE government portal, public holidays", checked: "2026-10-09" },
  ramadan2027National: { url: "https://www.thenationalnews.com/news/uae/2026/10/06/ramadan-2027-uae-dates-eid-al-fitr-holiday/", label: "The National, expected Ramadan 2027 and Eid dates (6 Oct 2026)", checked: "2026-10-09" },
  ramadan2027GulfNews: { url: "https://gulfnews.com/uae/ramadan/when-is-ramadan-2027-the-expected-date-moon-sighting-and-eid-explained-1.500630523", label: "Gulf News, Ramadan 2027 expected date and moon sighting", checked: "2026-10-09" },
  // Platform data
  datareportalUae: { url: "https://datareportal.com/reports/digital-2026-united-arab-emirates", label: "DataReportal, Digital 2026: UAE (5 Nov 2025; ad-reach data, not active users)", checked: "2026-10-09" },
  datareportalKsa: { url: "https://datareportal.com/reports/digital-2026-saudi-arabia", label: "DataReportal, Digital 2026: Saudi Arabia (8 Nov 2025)", checked: "2026-10-09" },
  // Saudi Arabia and other GCC markets
  gamr: { url: "https://gamr.gov.sa/en", label: "General Authority for Media Regulation (GAMR)", checked: "2026-10-09" },
  saudipediaMawthooq: { url: "https://saudipedia.com/en/what-is-the-mawthooq-license", label: "Saudipedia, What is the Mawthooq licence", checked: "2026-10-09" },
  arabNewsMawthooq: { url: "https://www.arabnews.com/node/2176661/media", label: "Arab News, Mawthooq licence rules at launch (2022)", checked: "2026-10-09" },
  kuwaitMediaLaw: { url: "https://www.wefaqlaw.com/en/news/kuwait-issues-new-media-regulation-law-with-licences-for-websites-influencers-and-advertisers", label: "WEFAQ, Kuwait Decree-Law No. 102 of 2026 (4 Oct 2026)", checked: "2026-10-09" },
  omanLicence: { url: "https://www.omanobserver.om/article/1130811/business/markets/new-social-media-marketing-rule-aimed-at-regulating-influencers", label: "Oman Observer, social media marketing licence (Ministerial Decision 619/2022)", checked: "2026-10-09" },
  bahrainNoLaw: { url: "https://www.gdnonline.com/Details/1408389/Clear-rules-urged-to-help-content-creators-sector", label: "GDN, Bahrain has no specific influencer law (3 Oct 2026)", checked: "2026-10-09" },
  // Batch 1420–1439. my.gov.sa and GAMR e-services returned 403 / did not resolve on 2026-10-09; Saudi licence
  // conditions are corroborated from the mirrored service text (VCO), Saudipedia and Arab News.
  myGovMawthooq: { url: "https://my.gov.sa/en/services/698238", label: "Saudi national portal: licence for individuals publishing advertising content on social media", checked: "2026-10-09" },
  myGovAgency: { url: "https://my.gov.sa/en/services/20543", label: "Saudi national portal: licensing advertising, publicity and marketing agencies", checked: "2026-10-09" },
  gamrAgency: { url: "https://gmedia.gov.sa/en/services/licensing-of-advertising-offices-marketing-offices-and-advertising-agencies", label: "GAMR e-services: licensing advertising offices, marketing offices and advertising agencies", checked: "2026-10-09" },
  vcoMawthooq: { url: "https://www.vco.sa/en/government/detail/259", label: "View Consulting, mirror of GAMR service conditions for the individual licence (consultancy)", checked: "2026-10-09" },
  mocPromoters2022: { url: "https://english.aawsat.com/home/article/3902116/saudi-arabia-penalizes-24-promoters-violating-e-advertisement-rules", label: "Asharq Al-Awsat, Ministry of Commerce penalizes 24 promoters under the E-Commerce Law (29 Sep 2022)", checked: "2026-10-09" },
  mocDiscountLicence: { url: "https://www.arabnews.com/node/2571612/amp", label: "Arab News, Ministry of Commerce refers 44 businesses over unlicensed competitions and discounts", checked: "2026-10-09" },
  mc: { url: "https://mc.gov.sa/en", label: "Saudi Ministry of Commerce", checked: "2026-10-09" },
  sfdaPriorApproval: { url: "https://sfda.gov.sa/en/news/17433", label: "SFDA, products requiring approval before advertising (27 Jul 2024)", checked: "2026-10-09" },
  sfda: { url: "https://sfda.gov.sa/en", label: "Saudi Food and Drug Authority", checked: "2026-10-09" },
  sfdaPharmaAdGuide: { url: "https://regulinked.com/sfda-guideline-on-requirements-for-advertising-and-promotion-of-pharmaceutical-and-herbal-products-v-7-0/", label: "ReguLinked summary, SFDA advertising guideline for pharmaceutical and herbal products v7.0 (Jan 2026)", checked: "2026-10-09" },
  snapKsa: { url: "https://www.arabnews.com/node/2580293/media", label: "Arab News, Snap: 25 million monthly users in Saudi Arabia, Majlis Snap creator hub (22 Nov 2024)", checked: "2026-10-09" },
  catchersCostKsa: { url: "https://catchers.agency/blog/influencer-marketing-cost-in-saudi-arabia/", label: "Catchers, Saudi influencer cost estimates (24 Jun 2026; agency, no method stated)", checked: "2026-10-09" },
  imhKsa: { url: "https://influencermarketinghub.com/influencer-marketing-in-saudi-arabia-guide/", label: "Influencer Marketing Hub, Saudi guide with tier estimates citing Starngage (updated 1 May 2026)", checked: "2026-10-09" },
  amazonSaAssociates: { url: "https://affiliate-program.amazon.sa/", label: "Amazon Associates Saudi Arabia", checked: "2026-10-09" },
  amazonAeAssociates: { url: "https://affiliate-program.amazon.ae/", label: "Amazon Associates UAE", checked: "2026-10-09" },
  datareportalQatar: { url: "https://datareportal.com/reports/digital-2026-qatar", label: "DataReportal, Digital 2026: Qatar (8 Nov 2025)", checked: "2026-10-09" },
  datareportalKuwait: { url: "https://datareportal.com/reports/digital-2026-kuwait", label: "DataReportal, Digital 2026: Kuwait (8 Nov 2025)", checked: "2026-10-09" },
  datareportalBahrain: { url: "https://datareportal.com/reports/digital-2026-bahrain", label: "DataReportal, Digital 2026: Bahrain (8 Nov 2025)", checked: "2026-10-09" },
  datareportalOman: { url: "https://datareportal.com/reports/digital-2026-oman", label: "DataReportal, Digital 2026: Oman (8 Nov 2025)", checked: "2026-10-09" },
  qatarMocGuide2023: { url: "https://www.gulf-times.com/article/666347/qatar/moc-licence-for-content-creators", label: "Gulf Times, Ministry of Culture licence for content creators (12 Aug 2023)", checked: "2026-10-09" },
  qatarFeeCut2024: { url: "https://www.sovereigngroup.com/news/qatar-culture-ministry-slashes-licence-fees-for-culture-and-media-sector/", label: "Sovereign Group, Qatar Ministry of Culture fee cuts (Feb 2024)", checked: "2026-10-09" },
  qatarEcommerce2026: { url: "https://www.crowell.com/en/insights/client-alerts/qatar-introduces-licensing-framework-for-e-commerce-activities-without-a-physical-premises", label: "Crowell, Qatar MoCI Ministerial Decision No. 25 of 2026 on e-commerce licensing (17 Mar 2026)", checked: "2026-10-09" },
  kuwaitTimesLaw: { url: "https://kuwaittimes.com/article/50960/kuwait/other-news/what-kuwaits-new-media-law-will-mean-for-influencers/", label: "Kuwait Times, what the new media law means for influencers (4 Oct 2026)", checked: "2026-10-09" },
  omanDecreeBlog: { url: "https://blog.decree.om/2022/mjomba-regulated-new-mociip-decision-requires-social-media-influencers-to-be-licensed/", label: "Decree.om, MOCIIP Decision 619/2022 explained", checked: "2026-10-09" },
  omanNoFees: { url: "https://cdn.timesofoman.com/article/128379-no-licence-fees-required-for-social-media-influencers-companies", label: "Times of Oman, no licence fees currently for influencers and companies", checked: "2026-10-09" },
  bahrainMoicPromotions: { url: "https://www.moic.gov.bh/en/node/2717", label: "Bahrain MOIC, promotional and sales campaign request", checked: "2026-10-09" },
  meedPegs: { url: "https://www.meed.com/gcc-to-defend-currency-pegs/", label: "MEED, GCC currency pegs table", checked: "2026-10-09" },
  qatarProposal: { url: "https://qatarlaw.com/news/state-licensing-framework-proposed-for-digital-content-creators-in-qatar", label: "Sultan Al-Abdulla & Partners, proposed Qatar creator licensing framework", checked: "2026-10-09" },
} as const;
