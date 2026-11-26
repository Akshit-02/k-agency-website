# 04 · Industry, business-type and objective content report

## Coverage
| Dimension | Articles | Angle |
|---|---|---|
| Business types | 61 startups, 62 small businesses, 63 Shopify stores, 64 ecommerce, 65 SaaS | Advice tailored to the business model's constraints: founder time, budget, store tooling, channels, B2B buying cycle |
| Industries | 66 luxury, 67 healthcare and wellness, 68 real estate, 69 education, 70 automotive | Each has a creator-profile table (creator type → what they're good for → what to check) and industry rules |
| Marketing objectives | 71 awareness, 72 product demos, 73 app promotion, 74 market entry, 75 performance / paid social | Starts from the objective, then creator types, formats, how to find them and how to measure |
| Strategy and growth | 76 always-on, 77 long-term partnerships, 78 new-brand strategy, 79 scaling, 80 in-house vs outsourced | Repeatable processes, templates, RACI, decision frameworks |

## Brief-specific requirements and how they were met
- **#63 Shopify:** no claim that Kudozz Discovery integrates with Shopify. Codes, UTMs and product-page video are described as Shopify's own features. Shopify Collabs availability in India is **not** asserted; readers are told to check the App Store for their country, plan and payouts.
- **#65 SaaS:** explains how B2B creator marketing differs from consumer campaigns. Discovery is stated to be Instagram-only, so LinkedIn and YouTube creators are sent to the batch 1–3 guides for those platforms.
- **#67 Healthcare:** qualified professionals only, substantiated claims, disclosure and medical/legal review. The mid-CTA says plainly that Discovery does not verify qualifications. Unqualified creators are never encouraged to give health advice.
- **#70 Automotive:** includes a road-safety clause for briefs (helmets, no handheld phone use, no stunts).
- **#75 Performance:** includes an influencer marketing vs paid media buying table. Both CTAs say Discovery doesn't run or track ads.
- **#80 In-house vs outsourcing:** balanced pros and cons, cost compared by structure only, and says outright that an agency (Kudozz included) isn't always the right choice.

## Kudozz Discovery claims (Phase 2 verification)
Verified on 26 Nov 2026 against `src/config/discovery.ts`, the platform repos (`../influencer-discovery-fe`, `../influencer-discovery-be`) and the live site:
- **Used in copy:**
  - Instagram creators in India
  - search by name or @username
  - sort by followers, engagement rate, average views and average likes
  - filters: follower range, niche, state, city, language, gender, minimum engagement, views, likes and posting frequency
  - profile metrics
  - named lists
  - email and phone reveals with credits
  - 30 sign-up credits valid for 30 days
- **Not claimed anywhere:** campaign management, outreach automation, contracts, creator payments, reporting, tracking links, integrations, audience demographics, fake-follower detection, ads, prices or credit packs.
- **New since 25 Nov:** discover.kudozz.in now serves a public landing page (HTTP 200, title "Kudozz Influencer Discovery — Find the right Instagram creators in India"), and Razorpay credit-pack checkout code was committed to both repos today. Paid checkout was **not** verified in production, so no article mentions buying credits. `src/config/discovery.ts` still describes the old state (no landing page, checkout not live); updating it is a separate, small follow-up.

## Research sources and regulatory facts
No external statistics are used. Regulatory and platform statements are general and recommend legal review. The writers flagged the following for verification before or soon after publishing:

| Article | Statement | Confidence / source |
|---|---|---|
| 67 | ASCI: health and finance influencers need relevant qualifications (`#asci-qualifications`) | Carried over verbatim from the old post; links to the ASCI guidelines PDF (HTTP 200) |
| 67 | Department of Consumer Affairs 2023 guidance for health and wellness influencers (credentials, disclaimers) | Medium: verify the wording |
| 67 | NMC 2023 professional-conduct regulations were held in abeyance, so the article tells readers to check with counsel | Medium: status not re-confirmed |
| 67 | Drugs and Magic Remedies Act 1954; FSSAI (Advertising and Claims) Regulations 2018 | High |
| 68 | RERA s.3, s.11(2), s.12; MahaRERA QR code in advertisements | High for RERA; medium for the MahaRERA QR requirement |
| 69 | CCPA coaching-sector guidelines, Nov 2024 (`#ccpa-coaching`) | High. The source link was a 404 on doca.gov.in and now points to the official PIB release (https://pib.gov.in/PressReleasePage.aspx?PRID=2073013) |
| 69 | DPDP Act: under-18 data | Carried over; links to the MeitY PDF (HTTP 200) |
| 70 | Motor Vehicles Act s.129 (helmets), s.184 (dangerous driving / handheld phone); ARAI/ICAT test-condition mileage | High; links to the ASCI code page (HTTP 200) |
| 72, 74, 76–80 | ASCI: a free product is a material connection and must be disclosed | High |
| 72 | ASCI guidance against filters that exaggerate a product's claimed effect | Medium-high |
| 73 | SEBI 2024 circular on regulated entities associating with unregistered finfluencers | High (described generally) |
| 73 | Promotion and Regulation of Online Gaming Act 2025 bans promotion of online money games | Medium: confirm that enforcement status matches the wording |
| 73 | Apple App Tracking Transparency limits iOS attribution | High |
| 64 | Amazon Attribution doesn't list Amazon.in, worded "at the time of writing" | Medium: re-check Amazon's current FAQ |
| 75 | Meta partnership ads described generally, with a pointer to Meta's help pages | High |
| 77 | DoCA Jan 2023 "Endorsement Know-hows!" | High |

## Content limitations
- No keyword-tool data. Keyword choices are qualitative.
- Industry advice is general guidance, not legal advice. Regulated categories (#67, #68, #69, #73) should get a quick legal read before release.
- Creator-fee figures are deliberately avoided. Readers are sent to the batch 3 pricing posts, which carry dated sources.
