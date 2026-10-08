# Compliance, brand safety and campaign risk cluster (1310–1329): audit, decisions and content database

Date: 2026-10-08. New module: `src/content/brand-guides/governance-risk.ts` (registered in `src/content/brand-guides/index.ts`). CTA pairs in `src/lib/blogCta.ts`. Hero diagrams in `public/blog/brand-guides/<slug>.svg`.

## Organising principle

Most of the 20 topics already had strong owners, several published earlier the same day (approval, quality control, escalation, non-compliance). Each concept now has one brand-side owner:

| Concept | Question | Owner |
| --- | --- | --- |
| Compliance (pre-launch, India requirements, guidelines) | What must be true before a campaign goes live, and which rules apply? | /blog/influencer-marketing-compliance (expanded hub) |
| How to disclose | Which label, where, on which format? | /blog/creator-disclosure-guide (existing; shared with creators) |
| Brand safety, suitability, reputation risk | Is this creator safe and suitable for us, and how does their reputation become ours? | /blog/influencer-marketing-brand-safety (expanded) |
| Vetting and due diligence | Is this creator who they appear to be, and what else must be true for a high-stakes deal? | /blog/how-to-vet-influencers (expanded) |
| Audience authenticity | Are the followers and engagement real? | /blog/how-to-identify-fake-followers, /blog/influencer-fraud-detection-tools (unchanged; linked) |
| Content approval and stakeholders | How is content reviewed and approved? | /blog/influencer-content-approval, /blog/influencer-marketing-governance (unchanged) |
| Content review checklist | What do we check before approving and at go-live? | /blog/influencer-content-quality-check (unchanged) |
| Escalation | How do issues move up and how fast? | /blog/influencer-campaign-escalation (backlinks added) |
| Non-compliance | What if a creator misses requirements? | /blog/creator-non-compliance (backlink added) |
| Controversy mid-campaign | What if the creator becomes the story? | /blog/influencer-controversy-response (new) |
| Cancellation | Should we cancel, and how? | /blog/influencer-campaign-cancellation (new) |
| Risk management and assessment | What could go wrong across the campaign, and what controls it? | /blog/influencer-campaign-risk-management (new) |

## Summary

- **3 new URLs** (risk management, controversy response, cancellation)
- **3 existing hubs expanded** (compliance, brand safety, vetting); URLs unchanged
- **10 topics consolidated** into existing or new owners
- **5 topics: do not create** (already fully served by pages published 2026-10-08)
- **0 merges, 0 redirects**

## Decisions

| ID | Topic | Decision | Final URL | Why |
| --- | --- | --- | --- | --- |
| 1310 | Campaign compliance before launch | EXPAND EXISTING | /blog/influencer-marketing-compliance | Owner (30 inbound). Retitled to "Influencer Campaign Compliance: What Indian Brands Should Check Before Launch"; added pre-launch checklist by stage. |
| 1311 | Disclosure requirements in India | CONSOLIDATE | → influencer-marketing-compliance | Added "Which rules apply, and what kind of rule each is" (law, government guidelines, self-regulation, sector regulation, platform rules, good practice) and brand-side disclosure requirements. A separate URL would compete with this hub and the 35-inbound creator disclosure guide. |
| 1312 | How to disclose sponsored content | CONSOLIDATE | → creator-disclosure-guide | Exact intent already owned (format-by-format placement and platform tools); added a link from it to the brand compliance hub. |
| 1313 | Compliance guidelines/checklist for brands | CONSOLIDATE | → influencer-marketing-compliance | Same intent as 1310; covered by the checklist and rule-source table. |
| 1314 | Creator brand safety | EXPAND EXISTING | /blog/influencer-marketing-brand-safety | Owner. Added safety vs suitability, review areas with signals, what screening must not do; tags, related, hero added. |
| 1315 | Brand-safety checks before selection | CONSOLIDATE | → influencer-marketing-brand-safety | "What to review, and what signals matter" table; the vetting page's step 5 links here. |
| 1316 | Creator reputation risk | CONSOLIDATE | → influencer-marketing-brand-safety | "How creator reputation becomes brand risk" (association, duration, identity in ads, closeness to message, audience overlap). |
| 1317 | Controversy during a campaign | CREATE NEW | /blog/influencer-controversy-response | No brand-side owner (only creator crisis pages); escalation covers operational issues, not a creator becoming the story. |
| 1318 | Content approval process | DO NOT CREATE | → influencer-content-approval | Published 2026-10-08 with this exact intent. |
| 1319 | Content review checklist | DO NOT CREATE | → influencer-content-quality-check | Published 2026-10-08: pre-approval and go-live checklists. |
| 1320 | Campaign approval workflow | DO NOT CREATE | → influencer-content-approval, influencer-marketing-governance | Stakeholders and who-approves-what already covered. |
| 1321 | Escalation | DO NOT CREATE | → influencer-campaign-escalation | Published 2026-10-08; added links to the risk register and controversy pages. |
| 1322 | Non-compliance | DO NOT CREATE | → creator-non-compliance | Published 2026-10-08; added link to cancellation. |
| 1323 | Cancellation decisions | CREATE NEW | /blog/influencer-campaign-cancellation | No brand-side owner (creator-cancellation-policy is the creator view). |
| 1324 | Professional termination | MERGE (into 1323 before publishing) | → influencer-campaign-cancellation | Same searches and same reader; one page covers deciding and handling. |
| 1325 | Risk management framework | CREATE NEW | /blog/influencer-campaign-risk-management | No owner; creator-business-risk-management is creator-side. |
| 1326 | Pre-launch risk assessment | MERGE (into 1325 before publishing) | → influencer-campaign-risk-management | The assessment is a section of the framework (scoring and hypothetical example). |
| 1327 | Creator vetting checklist | CONSOLIDATE | → how-to-vet-influencers | Owner with an interactive vetting checklist; checklist extended. |
| 1328 | Influencer due diligence | EXPAND EXISTING | /blog/how-to-vet-influencers | SEO title already "A Brand Due-Diligence Checklist". Added screening vs vetting vs due diligence table and "Deeper due diligence for high-stakes partnerships". |
| 1329 | Pre-campaign brand-safety checklist | CONSOLIDATE | → influencer-marketing-brand-safety | Checklist expanded from 6 to 12 items. |

## Second-pass cannibalization review

- 1310 vs 1313, 1311 vs 1312: one brand hub (compliance) plus the existing creator how-to (disclosure guide); cross-linked.
- 1314 vs 1315 vs 1329, 1315 vs 1327: brand safety owns safety/suitability judgement and its checklist; vetting owns the go/no-go process and due diligence; each links to the other; authenticity stays with the fake-followers and fraud-tools pages.
- 1316 vs 1317: reputation risk (before) on brand safety; controversy response (during) on its own page.
- 1318/1319/1320, 1321/1322: existing owners unchanged; no new URLs.
- 1323 vs 1324, 1325 vs 1326: merged before publishing.
- Against older content: controversy vs escalation (operational issues vs creator becoming the story); cancellation vs non-compliance (fixing misses vs ending the partnership); risk management vs governance (per-campaign risks vs standing policies). Each pair cross-linked.

## Accuracy notes

- Rule-source table distinguishes law, government guidelines, government guidance, self-regulation, sector regulation, platform rules and good practice, and links to primary sources already verified on the site: CCPA guidelines announcement (PIB), Department of Consumer Affairs endorsement guidance (PIB), ASCI influencer guidelines (PDF), SEBI October 2024 circular, online gaming law announcement (PIB).
- Secondary sources disagree on ASCI specifics such as video timing rules; no such specifics are stated. Readers are told to check current versions.
- The vetting page previously called disclosure "a legal requirement"; now "Indian advertising guidance expects".
- Brand-safety screening explicitly excludes protected and personal characteristics, private accounts and family members.
- Contract, payment and removal questions defer to the agreement and legal advice; example messages are labelled as examples.
- No Search Console data was available; prioritisation used existing inbound links and owner strength.

## New and changed pages

| URL | Primary keyword | CTA (mid → / bottom → inquiry) |
| --- | --- | --- |
| influencer-campaign-risk-management (new) | influencer campaign risk management | Campaign Planning → /services/campaign-strategy |
| influencer-controversy-response (new) | influencer controversy | Campaign Management → /services/outreach-management |
| influencer-campaign-cancellation (new) | influencer campaign cancellation | Campaign Management → /services/outreach-management |
| influencer-marketing-compliance | influencer marketing compliance | Campaign Management → /services/outreach-management (new pair) |
| influencer-marketing-brand-safety | influencer brand safety | Creator Selection → /services/creator-discovery (new pair) |
| how-to-vet-influencers | influencer vetting | Existing pair |

## Internal links

- New page inbound: risk management 6 (governance, escalation, controversy, brand safety, vetting, compliance); controversy 5 (creator crisis management, escalation, risk management, cancellation, brand safety); cancellation 4 (creator cancellation policy, non-compliance, controversy, contract).
- Hubs link to each other and to contracts, usage rights, exclusivity, whitelisting, payment terms, delays, post-mortem, sentiment analysis, fake followers and fraud tools.

## Validation

- `tsc --noEmit` clean; ESLint clean on changed files; production build passed (1,490 static pages).
- Content QA across all 701 posts: no broken internal links, missing link text, duplicate slugs, titles, meta descriptions or heading IDs; all heroes present.
- Rendered HTML on 10 pages: `index, follow`, correct canonical, one H1, OG title present, five JSON-LD blocks parsing, FAQ schema count matching visible FAQs, exactly one mid CTA (mid-article) and one bottom CTA.
- New URLs in sitemap; robots.txt unchanged; `/for-brands` (with tracking parameters) and `/for-creators` return 200. CTA components, analytics events and forms untouched.

## Known limitations

- Mobile and desktop layout not checked in a browser.
- creator-disclosure-guide's long meta description (214 characters) and missing hero were left as they were; it received only a backlink.
- ASCI guidance and platform tools change; re-check at the next review.
