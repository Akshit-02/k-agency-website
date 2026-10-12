# Australia batch (1540–1559): audit, decisions and research record

Date: 2026-10-09. Builds on the uncommitted GCC batches (1480–1539).

- **New module:** `src/content/au-guides/`
  - `shared.ts`: constants and the `AU_SRC` source register
  - `au-core.ts`: 1540, 1541, 1542, 1543, 1544, 1559
  - `au-sectors.ts`: 1548, 1550, 1552, 1553, 1554, 1555
  - `index.ts`
- **Wiring:** registered in `src/content/blog.ts` after `gccGuidePosts`.
- **CTAs:** `blogCta.ts`, under "Australia cluster". Topics start `AU:`. Three new prefill keys.
- **Heroes:** `public/blog/au-guides/<slug>.svg`.
- **Schema:** `inLanguage: "en-AU"`, `spatialCoverage: "Australia"`, breadcrumb Home › Blog › Australia › page.
- **Language:** Australian English.

## Starting point

- 768 blog posts. The repository had no Australian content: two incidental mentions in `blog.ts`, nothing in `llms.txt`, homepage or site config.
- The cannibalization risk is with generic global guides:
  - `how-to-vet-influencers`, `influencer-marketing-brand-safety`
  - `how-much-to-pay-influencers`, `influencer-marketing-budget`
  - `measuring-influencer-campaign-roi`, `youtube-product-reviews`
  - `nano-vs-micro-influencers`, `micro-vs-macro-influencers`, the UGC guides, platform guides
- Australian pages were created only where Australian law, regulators or platform availability add substance.
- No keyword-volume, ranking, Search Console or traffic data was available; none is estimated.
- Kudozz has no verified Australian office, team, creator network or clients. Pages are buyer guides, and CTAs offer a conversation only.
- The brand form's phone validation accepts international formats (`/^[+]?[\d\s().-]{7,20}$/`). Budget options use "$" without a currency.

## Decisions

| ID | Topic | Decision | Final URL | Rationale |
| --- | --- | --- | --- | --- |
| 1540 | Australia pillar | CREATE | /blog/influencer-marketing-australia | No Australian owner. Hub for rules, platforms, creator tiers, AUD budgets, measurement and sector guides. |
| 1541 | Agency selection, Australia | CREATE | /blog/choose-influencer-marketing-agency-australia | Commercial intent. Australian compliance questions (TGA, ABAC, under-16), GST transparency, AiMCO accreditation. Criteria, not rankings. |
| 1542 | Costs, Australia | CREATE | /blog/influencer-marketing-cost-australia | Distinct commercial intent. No independent Australian rate survey was found, so the page has no rate ranges: cost drivers, GST ($75k threshold), ATO treatment of non-cash benefits, AUD worksheet, labelled hypothetical. |
| 1543 | Advertising rules | CREATE | /blog/influencer-advertising-rules-australia | Core Australian intent. Law vs self-regulation, ACCC sweep and 2026 penalties, AANA 2.7 and Ad Standards "gift" case, disclosure table, reviews, TGA, ABAC, children's code. |
| 1544 | Find and vet influencers | CREATE (absorbs 1557) | /blog/find-vet-influencers-australia | Discovery plus vetting plus brand safety in one page avoids two thin Australian vetting pages. Australian audience checks, disclosure history, age rules, contract protections. |
| 1545 | Micro-influencers | CONSOLIDATE into 1540 | /blog/influencer-marketing-australia#creators | Generic tier pages exist; no Australia-specific substance for a standalone page. |
| 1546 | UGC creators | CONSOLIDATE into 1540 | /blog/influencer-marketing-australia#creators | The generic UGC cluster owns this; the Australian points (rights, "the ad is yours") fit as a section. |
| 1547 | TikTok, Australia | CONSOLIDATE into 1548 | /blog/instagram-tiktok-youtube-influencer-marketing-australia | Three single-platform pages would be near-duplicates of the global platform guides. The Australian substance (TikTok Shop not live, YouTube affiliate not listed, under-16 rules) is shared. |
| 1548 | Instagram, Australia | CREATE (platforms guide) | /blog/instagram-tiktok-youtube-influencer-marketing-australia | One guide covering the platform-mix decision. |
| 1549 | YouTube, Australia | CONSOLIDATE into 1548 | same | As 1547. |
| 1550 | E-commerce, Australia | CREATE (absorbs 1551) | /blog/ecommerce-influencer-marketing-australia | Links, codes and affiliates, net orders, consumer guarantees, honest reviews (ACCC). |
| 1551 | Creator reviews and AI shopping | CONSOLIDATE into 1550 | /blog/ecommerce-influencer-marketing-australia#ai | One verified data point (IAB Creator Connect 2026 says AI assistants are starting to draw on creator reviews). Not enough evidence for a standalone page; the section separates verified facts from unknowns and makes no visibility promises. |
| 1552 | Small business starter plan | CREATE | /blog/small-business-influencer-marketing-australia | Distinct reader. One-goal plan, gift vs pay (ATO note), one-page agreement template, 90-day review. |
| 1553 | Tourism and regional | CREATE | /blog/tourism-influencer-marketing-australia | Park filming permits explicitly covering influencers (Parks Australia, Uluṟu-Kata Tjuṯa), Traditional Owners' guidance, CASA drones, booking windows. |
| 1554 | Restaurants, cafés, hospitality | CREATE | /blog/hospitality-influencer-marketing-australia | ABAC covers venues; influencers 25+ (ABAC July 2026 guide); hosted-meal disclosure; ACCC reviews. |
| 1555 | Beauty and skincare | CREATE | /blog/beauty-skincare-influencer-marketing-australia | Cosmetic vs therapeutic boundary; TGA testimonial rule for sunscreens (from 2022); claims; filters; "gift" disclosure. |
| 1556 | ROI, Australia | UPDATE | /blog/measuring-influencer-campaign-roi#australia | The global ROI guide owns this intent. Added an Australian section (AUD and GST, net orders, local commerce limits, incrementality). |
| 1557 | Brand safety checklist | CONSOLIDATE into 1544 | /blog/find-vet-influencers-australia#brand-safety | Same intent as vetting. |
| 1558 | First Nations creator partnerships | DEFERRED (draft, not published) | Proposed /blog/first-nations-creator-partnerships-australia | The brief asks for paid review by a qualified First Nations expert; we couldn't arrange one. Draft and sources are in `docs/drafts/1558-first-nations-creator-partnerships-DRAFT.md`. Publish only after review. |
| 1559 | Under-16 restrictions | CREATE | /blog/social-media-minimum-age-influencer-campaigns-australia | eSafety-sourced: ten platforms, 10 Dec 2025 start, penalties on platforms only, logged-out viewing allowed, AANA children's code, OAIC Children's Online Privacy Code. |

**Totals:** 12 new URLs. 1 existing page updated (ROI). 7 topics consolidated into new pages. 1 deferred (1558). 0 redirects.

## Research findings (checked 2026-10-09)

| Claim | Source | Status |
| --- | --- | --- |
| Six in ten Australian shoppers, and more than eight in ten under 40, pass through creator content before buying; authenticity and fit outrank reach; most brands aren't measuring the channel; AI assistants starting to draw on creator reviews | IAB Australia Creator Connect Report 2026 (17 Sep 2026), page summary | Methodology is in the PDF, which we couldn't access |
| 81% of 118 influencers swept raised concerns; vague labels flagged | ACCC sweep findings (Dec 2023) | ACCC site blocks scripted requests; corroborated by AANA and law-firm summaries |
| PhotobookShop $39,600 (Mar 2026); Hismile $138,600 | ACCC media releases (via search index) | — |
| ACCC promised specific influencer guidance (early 2024) | ACCC | **Could not confirm** that it has been published, so pages don't cite it |
| AANA 2.7 clearly distinguishable; Practice Note: "gifted", "#sp" may be insufficient; "gift" complaint upheld | Ad Standards case 0172-22; AANA | — |
| TGA: paid or gifted testimonials for therapeutic goods banned from 2022; sunscreen included | AdNews and other 2022 coverage | Check the current Code; we didn't fetch the TGA page |
| ABAC: brand responsible; influencers 25+ and not pregnant; 18+ controls | ABAC brand toolkit (1 Jul 2026) | — |
| eSafety: 10 platforms; penalties up to $49.5m; no penalties for children or parents; logged-out viewing allowed | eSafety (via search index; site timed out); infrastructure fact sheet (Jan 2026) | List can change; the proposed $99m increase was not confirmed, so not stated |
| AANA Children's Code: children under 15; in effect 1 Dec 2023 | AANA, Ad Standards | — |
| OAIC Children's Online Privacy Code: exposure draft 31 Mar 2026; registration due by 10 Dec 2026 | OAIC, law firms | Commencement unconfirmed |
| TikTok Shop not live in Australia; YouTube Shopping affiliate program doesn't list Australia | Marketing-Interactive; YouTube Help; 2026 reports | Re-check every 3 months |
| GST registration at $75k; non-cash benefits are income at market value (influencer example) | ATO | — |
| Uluṟu-Kata Tjuṯa: permits for commercial filming, including influencers | Parks Australia | — |
| Australian influencer rate figures | Elev8or pages only (modelled, no method) | **Not used** |

The brief's leads were checked: IAB (used), AiMCO (used: accreditation and best practice; no dated code found), ACCC, AANA, Ad Standards and eSafety (used).

## Validation (run 2026-10-09)

- **Build:** `tsc` clean. ESLint: 0 errors; 6 pre-existing warnings in contact, for-brands and Footer. `next build` passed with 1,648 pages (12 pages plus 12 OG images).
- **Crawl** of 780 sitemap blog URLs: all 200, 0 broken internal links or anchors.
- **The 12 new and 3 updated pages:**
  - `index, follow`, self-canonical, one H1
  - 5/5 JSON-LD blocks parse, FAQ schema matches visible FAQs
  - exactly one mid and one bottom CTA
  - OG images and heroes return 200; listed on `/blog`
- **Metadata:** SEO titles 41–57 characters, descriptions 142–158. No duplicate titles or descriptions sitewide. Every inline link's text is present in its paragraph. No American spellings found in the Australian files.
- **External sources:**
  - ACCC, ATO, Ad Standards and ABAC return 403 to scripted requests; eSafety, TGA, CASA and the infrastructure department time out
  - one genuine 404 (AANA Children's Code URL) was replaced with AANA's current page (200)
- **Secrets:** the app password is not in `.next/static`.
- **Forms:** both APIs return 400 on empty payloads (no email sent). `/for-brands` with `AU:` tracking params returns 200.
- **Not done:** browser or mobile check.

## Follow-ups

- Commission paid review of the 1558 draft by a First Nations expert, then publish.
- Check whether the ACCC's influencer guidance has been published, and cite it.
- Re-check eSafety's platform list, TikTok Shop and YouTube affiliate availability every 3 months.
- Check the TGA code and the OAIC children's privacy code when they change.
- `public/llms.txt` and the homepage describe Kudozz as India-focused. If Australia is a real service market, the business should confirm it and update entity information; otherwise these pages stay buyer guides.
