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
/** Batch 1440–1459. */
export const GCC3_PUBLISHED = "2026-10-09";
/** Batch 1480–1499. */
export const GCC4_PUBLISHED = "2026-10-09";
/** Batch 1500–1519. */
export const GCC5_PUBLISHED = "2026-10-09";
/** Batch 1520–1539. */
export const GCC6_PUBLISHED = "2026-10-09";

/** Source register. `checked` is the date the claim was verified against the page. */
export const SRC = {
  // UAE advertiser permit (official site returned 502 / expired certificate on 2026-10-09; rules confirmed via the reports below)
  nmaPermit: { url: "https://www.nmo.gov.ae/en/initiatives/advertiser-permit-1", label: "National Media Authority: Advertiser Permit", checked: "2026-10-09" },
  nmaVisitor: { url: "https://www.nmo.gov.ae/en/initiatives/visitor-advertiser-permit", label: "National Media Authority: Visitor Advertiser Permit", checked: "2026-10-09" },
  // Batch 1660–1709: the UAE Media Council site was reachable on 2026-10-10 (the NMA permit pages still returned 502)
  uaemcFaq: { url: "https://uaemc.gov.ae/en/faq/", label: "UAE Media Council FAQ: advertiser permit scope, exemptions, requirements, validity, fees, requester obligations, virtual advertisers", checked: "2026-10-10" },
  uaemcVisitor: { url: "https://uaemc.gov.ae/en/visitor-advertiser-permit-2/", label: "UAE Media Council: Visitor Advertiser Permit (accredited agency, 3 months, total up to 6 months)", checked: "2026-10-10" },
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
  kuwaitDigitalCommerce: { url: "https://www.netinfluencer.com/kuwait-new-digital-commerce-law-requires-businesses-to-keep-influencer-records-for-five-years/", label: "Net Influencer, Kuwait Digital Commerce Law (Decree-Law No. 10 of 2026) and influencer records (28 Sep 2026)", checked: "2026-10-09" },
  omanDecreeBlog: { url: "https://blog.decree.om/2022/mjomba-regulated-new-mociip-decision-requires-social-media-influencers-to-be-licensed/", label: "Decree.om, MOCIIP Decision 619/2022 explained", checked: "2026-10-09" },
  omanNoFees: { url: "https://cdn.timesofoman.com/article/128379-no-licence-fees-required-for-social-media-influencers-companies", label: "Times of Oman, no licence fees currently for influencers and companies", checked: "2026-10-09" },
  bahrainMoicPromotions: { url: "https://www.moic.gov.bh/en/node/2717", label: "Bahrain MOIC, promotional and sales campaign request", checked: "2026-10-09" },
  meedPegs: { url: "https://www.meed.com/gcc-to-defend-currency-pegs/", label: "MEED, GCC currency pegs table", checked: "2026-10-09" },
  // Batch 1440–1459
  uaeCopyrightLaw: { url: "https://uaelegislation.gov.ae/en/legislations/1534", label: "UAE Federal Decree-Law No. 38 of 2021 on Copyright and Neighboring Rights (official legislation portal)", checked: "2026-10-09" },
  saudiCopyright2026: { url: "https://www.mondaq.com/saudiarabia/copyright/1750022/saudi-arabias-new-copyright-law-key-changes-and-implications", label: "Mondaq, Saudi Arabia's new Copyright Law (Royal Decree M/169, enacted 13 Feb 2026, in force 1 Aug 2026)", checked: "2026-10-09" },
  saip: { url: "https://www.saip.gov.sa/en", label: "Saudi Authority for Intellectual Property", checked: "2026-10-09" },
  igLiveShoppingEnd: { url: "https://www.engadget.com/instagram-live-shopping-shutdown-205824247.html", label: "Engadget, Instagram ends live shopping from 16 March 2023", checked: "2026-10-09" },
  coodoooUgc: { url: "https://coodooo.com/en/blog/ugc-rates-gcc-2026", label: "Coodooo, GCC UGC rates (27 Aug 2026; says no reliable GCC-specific UGC rate survey exists)", checked: "2026-10-09" },
  kolsquareMe: { url: "https://www.kolsquare.com/en/blog/influencer-marketing-in-the-middle-east-in-2026-high-stakes-high-spend-and-the-arabic-first-imperative", label: "Kolsquare, Middle East influencer marketing 2026 (30 Apr 2026)", checked: "2026-10-09" },
  // Batch 1480–1499. Regional conflict: the 2026 Iran war began on 28 February 2026 and was ongoing when checked.
  uaeStrikeFootage: { url: "https://www.thenationalnews.com/news/uae/2026/03/06/public-warned-that-taking-or-resharing-footage-of-drone-and-missile-incidents-is-illegal-in-uae/", label: "The National, UAE Attorney General: filming or resharing drone and missile incident footage is a criminal offence (6 Mar 2026)", checked: "2026-10-09" },
  skiftEventDelays: { url: "https://meetings.skift.com/2026/03/12/informa-delays-major-dubai-event-as-middle-east-conflict-threatens-more-shows/", label: "Skift Meetings, Middle East Energy moved from April to September; other Gulf shows at risk (12 Mar 2026)", checked: "2026-10-09" },
  dubaiEventsRecovery: { url: "https://www.thenationalnews.com/news/uae/2026/09/09/dubai-events-calendar-gitex-arabian-travel-market/", label: "The National, Dubai's year-end events calendar after shows were postponed by the conflict (9 Sep 2026)", checked: "2026-10-09" },
  ewc2026Paris: { url: "https://sports.yahoo.com/articles/2026-esports-world-cup-moves-081717402.html", label: "Deadline via Yahoo Sports, Esports World Cup 2026 moves from Riyadh to Paris over security concerns (21 May 2026)", checked: "2026-10-09" },
  asianCup2027: { url: "https://www.aljazeera.com/sports/2026/4/15/saudi-arabia-hosted-asian-cup-draw-rescheduled-due-to-us-israel-war-on-iran", label: "Al Jazeera (Reuters), Asian Cup draw moved to 9 May; Saudi Arabia set to host 7 Jan to 5 Feb 2027 (15 Apr 2026)", checked: "2026-10-09" },
  ewcOfficial: { url: "https://esportsworldcup.com/", label: "Esports World Cup (official site): 2027 edition in Riyadh, July to August 2027", checked: "2026-10-09" },
  // Events and exhibitions
  gitex2026: { url: "https://mediaoffice.ae/en/news/2025/october/08-10/gitex-global-to-begin-a-new-chapter-at-expo-city-dubai-in-2026", label: "Dubai Media Office, GITEX GLOBAL 7–11 December 2026 at Dubai Exhibition Centre, Expo City (8 Oct 2025)", checked: "2026-10-09" },
  gulfood2027: { url: "https://www.dubaiexhibitioncentre.com/en/whats-on/gulfood-exhibition-2027", label: "Dubai Exhibition Centre, Gulfood 15–19 March 2027 across DWTC and DEC", checked: "2026-10-09" },
  whx2027: { url: "https://www.worldhealthexpo.com/events/healthcare/dubai/", label: "World Health Expo, WHX Dubai 25–28 January 2027", checked: "2026-10-09" },
  // Gaming and esports (Saudi Arabia)
  ngesSaudipedia: { url: "https://saudipedia.com/en/the-national-gaming-and-esports-strategy", label: "Saudipedia, National Gaming and Esports Strategy (launched 2022; 2030 targets)", checked: "2026-10-09" },
  gamrGameRatings: { url: "https://www.arabnews.com/node/2075831", label: "Arab News, Saudi game age-rating system: all games sold rated since August 2016 (5 May 2022)", checked: "2026-10-09" },
  // Education (UAE)
  khdaAdGuidelines: { url: "https://www.khda.gov.ae/CMS/WebParts/TextEditor/Documents/Guidelinesforadvertisingandmarketing.pdf", label: "KHDA, Guidelines for Advertising and Marketing (official PDF; file dated 2011, still published)", checked: "2026-10-09" },
  khdaAdApproval: { url: "https://web.khda.gov.ae/en/Services/Higher-Education-Parent-Services/Requesting-for-Advertisement-Approval", label: "KHDA e-service, advertisement approval for higher education institutions (certificate error on our fetch; content via search index)", checked: "2026-10-09" },
  // Measurement platforms
  googleBrandLift: { url: "https://support.google.com/google-ads/answer/9049825", label: "Google Ads Help, About Brand Lift", checked: "2026-10-09" },
  googleBrandLiftMinimums: { url: "https://support.google.com/displayvideo/answer/9570506?hl=en", label: "Google Help, YouTube Brand Lift minimum budgets by country tier (UAE, KSA, Kuwait, Bahrain, Oman tier A; Qatar tier C)", checked: "2026-10-09" },
  metaBrandLift: { url: "https://www.facebook.com/business/help/1693381447650068", label: "Meta Business Help Center, About brand lift tests", checked: "2026-10-09" },
  metaBrandLiftMinimums: { url: "https://www.facebook.com/business/help/417527072254206", label: "Meta Business Help Center, brand lift supported countries and minimums (page did not render for us; check in Ads Manager)", checked: "2026-10-09" },
  tiktokBrandLift: { url: "https://ads.tiktok.com/help/article/tiktok-brand-lift-studies?lang=en", label: "TikTok Ads Help, TikTok Brand Lift Studies (set up by account manager)", checked: "2026-10-09" },
  snapBrandLift: { url: "https://businesshelp.snapchat.com/s/article/brand-lift?language=en_US", label: "Snapchat Business Help, About Brand Lift", checked: "2026-10-09" },
  metaCreativeFatigue: { url: "https://www.facebook.com/business/help/1346816142327858", label: "Meta Business Help Center, creative fatigue recommendations in Ads Manager", checked: "2026-10-09" },
  // Audiences and data
  indiansInUae: { url: "https://gulfnews.com/world/asia/india/indian-expat-population-in-uae-doubles-to-436-million-more-than-half-live-in-dubai-envoys-1.500129223", label: "Gulf News, Consul General of India: 4.36 million Indians in the UAE as of December 2024 (updated 16 May 2025)", checked: "2026-10-09" },
  uaePdpl: { url: "https://uaelegislation.gov.ae/en/legislations/1972", label: "UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (official legislation portal)", checked: "2026-10-09" },
  saudiPdplCms: { url: "https://cms.law/en/are/legal-updates/one-year-anniversary-saudi-personal-data-protection-law", label: "CMS, Saudi Personal Data Protection Law: in force 14 Sep 2023, grace period to 14 Sep 2024", checked: "2026-10-09" },
  // Batch 1500–1519
  nmaAiApproval: { url: "https://www.gulftoday.ae/news/2026/09/29/creators-in-uae-generating-content-for-public-figures-need-prior-approval-national-media-authority", label: "Gulf Today, NMA: AI images or videos of national symbols or public figures need prior approval (29 Sep 2026)", checked: "2026-10-09" },
  sdaiaDeepfakes: { url: "https://www.arabnews.com/node/2642878/amp", label: "Arab News, SDAIA deepfakes guidelines: consent, visible watermarks, prohibited uses (9 May 2026)", checked: "2026-10-09" },
  tiktokAiLabel: { url: "https://www.tiktok.com/community-guidelines/en/integrity-authenticity", label: "TikTok Community Guidelines, Integrity and Authenticity (AI-generated content labels)", checked: "2026-10-09" },
  youtubeAiDisclosure: { url: "https://support.google.com/youtube/answer/14328491?hl=en", label: "YouTube Help, Disclosing use of GenAI content", checked: "2026-10-09" },
  metaAiDisclosure: { url: "https://about.fb.com/news/2026/02/meta-prepares-for-2026-us-midterms/", label: "Meta, disclosure required for photorealistic AI video and realistic audio; AI info labels (Feb 2026)", checked: "2026-10-09" },
  mediaCouncilHealthClaims: { url: "https://gulfnews.com/uae/government/uae-advertising-council-cracks-down-on-misleading-health-promotion-on-social-media-1.500265380", label: "Gulf News, UAE Media Council summons advertiser over unapproved health claims on social media (11 Sep 2025)", checked: "2026-10-09" },
  abuDhabiFastFood: { url: "https://www.lexis.ae/2026/03/05/auh-fast-food-advertising-banned/", label: "LexisNexis ME, Abu Dhabi bans fast-food advertising; restrictions on high fat, sugar and salt marketing (5 Mar 2026)", checked: "2026-10-09" },
  uaeGreenClaimsCms: { url: "https://cms.law/en/int/publication/cms-green-globe/uae", label: "CMS Green Globe, UAE: no specific green marketing rules; consumer protection and advertising law apply", checked: "2026-10-09" },
  uaeGreenClaimsTracker: { url: "https://www.twobirds.com/en/trending-topics/green-claims/uae", label: "Bird & Bird, UAE green claims tracker", checked: "2026-10-09" },
  saudiFilmBoxOffice: { url: "https://www.arabnews.com/saudi-arabia/saudi-films-cross-sr100m-for-second-year-as-local-cinema-gains-ground-3002546", label: "Arab News, Saudi films SR122.6m in 2025, about 13% of box office; 538 films screened (21 Sep 2026)", checked: "2026-10-09" },
  gamrFilmRatings: { url: "https://www.gamr.gov.sa/en/age-classification", label: "GAMR, age classification (domain did not resolve from our location; content via search index)", checked: "2026-10-09" },
  splSeason2627: { url: "https://www.spl.com.sa/en/news/1079597/spl-announces-2026-27-rsl-fixture-schedule", label: "Saudi Pro League, 2026-27 season 13 Aug 2026 to 29 May 2027 (24 Jul 2026)", checked: "2026-10-09" },
  splCreatorDistribution: { url: "https://www.spl.com.sa/en/news/spl-opens-new-route-to-international-fans-with-innovative-distribution-model", label: "Saudi Pro League, approved creators and players can sell match access in 16 international markets for a revenue share (16 Sep 2026)", checked: "2026-10-09" },
  f1Cancel2026: { url: "https://www.skysports.com/f1/news/12433/13519453/f1-confirms-cancellation-of-bahrain-and-saudi-arabian-grands-prix", label: "Sky Sports, F1 cancels 2026 Bahrain and Saudi Arabian Grands Prix over the Middle East conflict (14 Mar 2026)", checked: "2026-10-09" },
  f1Saudi2027: { url: "https://www.arabnews.com/sport/formula-one-saudi-grand-prix-set-for-2027-return-3002056", label: "Arab News, Saudi Arabian Grand Prix 19–21 March 2027 in Jeddah (17 Sep 2026)", checked: "2026-10-09" },
  uaeHallmarkLaw: { url: "https://uaelegislation.gov.ae/en/legislations/1055", label: "UAE Federal Law No. 11 of 2015 on monitoring trade in precious metals and stones (hallmarking)", checked: "2026-10-09" },
  gnHallmarking: { url: "https://gulfnews.com/business/retail/buying-gold-in-the-uae-heres-what-hallmarking-rules-mean-for-shoppers-1.500210288", label: "Gulf News, UAE gold hallmarking rules for shoppers", checked: "2026-10-09" },
  saudiGoldAdRule: { url: "https://mc.gov.sa/en/mediacenter/News/Pages/16-10-25-02.aspx", label: "Saudi Ministry of Commerce, precious metals amendments: ads must state type, weight, fineness and price (certificate error on our fetch; content via search index)", checked: "2026-10-09" },
  uaeFundraisingLaw: { url: "https://gulfnews.com/uae/uae-dh300000-fine-jail-for-illegal-fundraising-1.1635868753080", label: "Gulf News, Federal Law No. 3 of 2021: individuals barred from fundraising, including social media appeals (2 Nov 2021)", checked: "2026-10-09" },
  saudiFundraisingBylaw: { url: "https://www.lexisnexis.com/blogs/ae-legal/b/insights/posts/ksa-fundraising-regulation-bylaw-enters-into-force", label: "LexisNexis, Saudi Fundraising Regulation bylaw in force; approved electronic channels only (21 May 2026)", checked: "2026-10-09" },
  saudiFundraisingDraft: { url: "https://www.gulf-insider.com/saudi-arabia-moves-to-prohibit-children-in-fundraising-advertising-introducing-stricter-governance-and-transparency/", label: "Gulf Insider, draft Saudi fundraising governance rules: no children in ads, Donate Safely QR code (13 Aug 2026; draft)", checked: "2026-10-09" },
  dubaiPromotionsTamimi: { url: "https://www.tamimi.com/law-update/september-2020/articles/promotional-activities-in-dubai/", label: "Al Tamimi, promotional activities and draws in Dubai (Sep 2020)", checked: "2026-10-09" },
  detServices: { url: "https://www.dubaidet.gov.ae/en/our-services", label: "Dubai DET services: retail promotions and raffles", checked: "2026-10-09" },
  uaeAgencyLawCms: { url: "https://cms.law/en/are/legal-updates/balancing-the-books-new-dawn-for-commercial-agencies-in-the-uae", label: "CMS, UAE Federal Law No. 3 of 2022 on commercial agencies", checked: "2026-10-09" },
  khdaTrainingAds: { url: "https://web.khda.gov.ae/en/Services/Training-Institute-Permit-Services/Approving-Training-Institutes-Advertisement", label: "KHDA e-service, approving training institutes' advertisements (content via search index)", checked: "2026-10-09" },
  // Batch 1520–1539
  netflixArabicSubs: { url: "https://partnerhelp.netflixstudios.com/hc/en-us/articles/215517947", label: "Netflix Partner Help, Arabic Timed Text Style Guide (42 characters per line, two lines, up to 20 characters per second for adults)", checked: "2026-10-09" },
  w3cRtl: { url: "https://www.w3.org/International/questions/qa-html-dir", label: "W3C Internationalization, structural markup and right-to-left text in HTML", checked: "2026-10-09" },
  metaAdLibrary: { url: "https://transparency.meta.com/en-gb/researchtools/ad-library-tools/", label: "Meta Ad Library tools: search all active ads across Meta technologies", checked: "2026-10-09" },
  tiktokTopAds: { url: "https://ads.tiktok.com/resources/help/article/top-ads", label: "TikTok Ads Help, About Top Ads in Creative Center (filter by region, industry, objective; advertiser-authorized)", checked: "2026-10-09" },
  mafPrecisionMedia: { url: "https://www.majidalfuttaim.com/en/media-centre/press-releases/detail/2025/05/majid-al-futtaim-s-precision-media-and-advertima-set-new-retail-media-benchmark-with-ai-rollout-in-carrefour-stores", label: "Majid Al Futtaim, Precision Media retail media network and in-store AI rollout in Carrefour (May 2025; timed out on our fetch, content via search index)", checked: "2026-10-09" },
  gnSaudiDays: { url: "https://gulfnews.com/world/gulf/saudi/saudi-arabia-what-is-the-difference-between-national-day-and-founding-day-1.1726826316779", label: "Gulf News, Saudi Founding Day (22 Feb) and National Day (23 Sep)", checked: "2026-10-09" },
  omanNationalDayDecree: { url: "https://gulfnews.com/world/gulf/oman/national-day-holidays-announced-in-oman-for-public-private-sectors-1.500339433", label: "Gulf News, Oman National Day holidays (National Day moved to 20–21 November by Royal Decree 15/2025)", checked: "2026-10-09" },
  qatarProposal: { url: "https://qatarlaw.com/news/state-licensing-framework-proposed-for-digital-content-creators-in-qatar", label: "Sultan Al-Abdulla & Partners, proposed Qatar creator licensing framework", checked: "2026-10-09" },
} as const;
