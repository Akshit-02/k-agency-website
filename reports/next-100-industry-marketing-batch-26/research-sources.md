# Batch 26: Research Sources

All external URLs cited in the 15 new articles were HTTP-checked on 2026-11-05. URLs marked 403 block automated requests. These sources are only for factual and regulatory statements. No statistics or performance figures were taken from them, and every numeric example in the articles is labelled hypothetical or illustrative.

## Existing verified sources reused (`SOURCES` in `src/content/creator-resources/shared.ts`)

| Key | Supports | Used in |
|---|---|---|
| ccpaMisleadingAds (PIB) | CCPA Guidelines for Prevention of Misleading Advertisements and Endorsements, 2022 | regulated-categories |
| docaEndorsements (PIB) | Department of Consumer Affairs endorsement guidance for influencers | regulated-categories |
| asciGuidelines (ASCI) | ASCI influencer guidelines | regulated-categories |
| sebiFinfluencerCircular, sebiFinfluencerClarification (SEBI) | Restrictions on regulated entities associating with unregistered advice and return claims | regulated-categories |
| instagramBrandedContentEligibility, youtubePaidPromotion | Platform limits on branded content in restricted categories | regulated-categories |
| dpdpRules2025 (PIB) | DPDP Rules notified November 2025, phased in | influencer-leads-crm-follow-up |

## Existing sources reused from `content-gaps.ts` (`EXT`)

| Source | Status | Supports |
|---|---|---|
| tribuneindia.com: DoCA health-expert disclosure guidance | 200 | Disclaimer rules for health endorsements |
| exchange4media.com: ASCI 2025 health and finance influencer update | 403 (bot block; already cited on the site) | Qualification rules for health and finance influencers |
| restaurantindia.in: FSSAI advisory to influencers | 200 | FSSAI warning on misleading food claims |

## New sources added in this batch

| URL | Status | Supports | Article | Type |
|---|---|---|---|---|
| https://www.scconline.com/blog/post/2023/12/04/ccpa-notifies-guidelines-for-prevention-and-regulation-of-dark-patterns-2023-legal-news/ | 200 | The CCPA Dark Patterns Guidelines, 2023 (in force 30 Nov 2023) list "false urgency" | influencer-marketing-limited-stock | Legal press (replaced a law-firm newsletter) |
| https://khaitanco.com/thought-leaderships/CCPA-releases-guidelines-for-Prevention-of-Misleading-Advertisements-and-Endorsements-for-Misleading-Advertisements-2022 | 200 | Surrogate advertising provisions in the CCPA 2022 guidelines, and grey areas around brand extensions | regulated-categories | Law-firm analysis |
| https://www.khaitanco.com/thought-leaderships/ASCI-releases-crypto-and-NFT-advertising-guidelines-effective-1-April-22-onward | 200 | ASCI VDA guidelines effective 1 April 2022, mandatory risk disclaimer | regulated-categories | Law-firm analysis (replaced a 403 link) |
| https://www.mondaq.com/india/advertising-marketing-branding/1549922/guidelines-for-prevention-of-misleading-ads-in-coaching-sector-an-insight-into-new-ccpa-guidelines | 200 | CCPA coaching-sector guidelines notified November 2024 (no "100% selection" or job-guarantee claims; endorsers covered) | regulated-categories | Law-firm analysis (replaced a 403 link) |
| https://www.livelaw.in/amp/consumer-cases/maharera-fines-promoter-for-publishing-newspaper-ad-without-clear-rera-registration-and-qr-code-518299 | 200 | MahaRERA penalty for an ad without clear registration details and QR code | regulated-categories | Legal press |
| https://support.google.com/business/answer/6103862 | 200 | Business Profile photos and videos appear after verification and review | store-opening-influencer-campaign | Official (Google) |
| https://whatsappbusiness.com/products/ads-that-click-to-whatsapp/ | 200 | Facebook and Instagram ads can open a WhatsApp chat directly | influencer-leads-crm-follow-up | Official (Meta) |
| https://web.dev/articles/lazy-loading-video | 200 | Loading product-page video lazily with `preload="none"` and a poster image | creator-content-product-pages | Official (Google web.dev) |

## Search and cross-check references (not cited in articles)

These were used to confirm dates and wording:

- CCPA coaching guidelines (13 Nov 2024; draft in PIB PRID 2006533): https://pib.gov.in/PressReleasePage.aspx?PRID=2006533, https://taxguru.in/corporate-law/ccpa-guidelines-target-misleading-coaching-advertisements.html
- ASCI VDA guidelines (23 Feb 2022, effective 1 April 2022): https://www.businesstoday.in/crypto/story/ads-featuring-cryptos-vdas-to-feature-disclaimer-from-april-1-asci-323604-2022-02-23, https://www.coindesk.com/policy/2022/02/23/indias-crypto-advertising-guidelines-are-out/
- Dark Patterns Guidelines (30 Nov 2023, 13 practices): https://www.jsalaw.com/newsletters-and-updates/ccpa-issues-guidelines-for-prevention-and-regulation-of-dark-patterns-2023/

## Recommended upgrades before publishing

- Replace the law-firm summaries with the official CCPA notifications (the consumeraffairs.nic.in gazette PDFs) once they can be opened manually.
- Have someone with legal training review `regulated-categories-influencer-marketing-india`. It carries a "general information, not legal advice" note, but it summarises rules across nine categories.
