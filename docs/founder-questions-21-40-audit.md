# Founder questions, batch 2 (roadmap topics 21–40: campaign management and execution): audit, decisions and implementation log

Date: 2026-10-14. Builds on batch 1 (`docs/founder-questions-1-20-audit.md`), which is also uncommitted. Not deployed; nothing committed.

- **New module:** `src/content/brand-guides/founder-execution.ts` (`founderExecutionPosts`), registered in `brand-guides/index.ts`.
- **Conventions:** the same as batch 1. American spelling (brand guides), heroes in `public/blog/brand-guides/`, CTA copy in `BRAND_GUIDE_CTAS`, existing `BlogMidCTA`/`BlogBottomCTA` and analytics events, no em dashes in new or rewritten copy, hypothetical scenarios labelled, no invented statistics or client claims.
- **Not available:** Search Console, analytics, backlink and keyword-volume tools. No volumes, difficulty or traffic figures are stated. Intent was judged from query wording, the existing inventory and current results (US-only web search, 2026-10-14).

## Executive summary

The site already had a dense campaign-execution cluster: around 20 brand-side pages published or updated between 2026-10-08 and 2026-10-10 (coordination, tracker, approval, revisions, delays, escalation, non-compliance, quality check, documentation, post-mortem and others). Most of the 20 topics already had a dedicated, recent owner whose title targets the same query.

**Decisions: 5 CREATE, 5 UPDATE, 4 CONSOLIDATE, 6 SKIP, 0 MONITOR (one overlap pair noted for monitoring).** No redirects, deletions or URL changes.

**Corrections made on the way:**

- **Gifting guide:** told readers a "gifted" label satisfies ASCI. It isn't on ASCI's accepted list; "Free gift" is. Fixed.
- **Campaign planning guide:**
  - Its FAQ said campaigns take "two to four weeks" to launch, contradicting the site's own timeline guide (three to five weeks for a small test). Fixed.
  - It had an unsourced "3 to 8 creators" figure. Fixed.
  - It presented TikTok as a default platform on an India-first page. Fixed.
  - It had 11 em dashes. Removed.
- **Post-mortem guide:** its H1 began "Creator Campaign Post-Mortem", the same phrase as the agency-side Creator Resources page. Retitled.
- **International playbook:** a pre-existing paragraph linked the same text ("the UAE") twice. Fixed.
- **Batch 1 fix:** `/blog/is-influencer-marketing-worth-it` named the UAE Media Council as the permit issuer. The site's GCC sources record that the National Media Authority replaced it in January 2026. Corrected.

## Decision register

| # | Topic | Decision | URL | Primary query · intent | Secondary / long-tail | Service page (via CTA) | Market | Cannibalisation note |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 21 | What is influencer campaign management and what does it include? | UPDATE | /blog/influencer-campaign-management | "influencer campaign management" · informational/commercial | what does it include; campaign management services | outreach-management | Global / India + UAE section | Owner already; added definition and scope table |
| 22 | Plan a campaign from brief to launch | UPDATE | /blog/how-to-create-a-successful-influencer-marketing-campaign | "how to plan an influencer campaign" · informational | brief to launch; campaign planning steps | campaign-strategy | Global / India default | Differentiated from #21 (operations) and the timeline guide (durations) |
| 23 | Build a campaign calendar | CREATE | /blog/influencer-campaign-calendar | "influencer campaign calendar" · informational | posting schedule; stagger posts; market moments | outreach-management | India, GCC, UK, AU, SG moments | Distinct from timeline (durations) and annual plan (strategy) |
| 24 | Manage multiple influencers in one campaign | SKIP | /blog/influencer-campaign-coordination | "manage multiple influencers" · informational | | outreach-management | | seoTitle already "How to Coordinate Multiple Influencers in One Campaign"; link added |
| 25 | Track deliverables, deadlines and approvals | SKIP | /blog/influencer-campaign-tracker | "influencer campaign tracker" · informational | | outreach-management | | Exact owner (2026-10-08); link added |
| 26 | When influencers miss deadlines | UPDATE | /blog/creator-non-compliance | "influencer missed deadline" · informational | what to do; replacement; payment | outreach-management | Global | Owner covered requirements generally; deadline playbook added. Delays page covers prevention |
| 27 | Brand consistency across influencer content | CREATE | /blog/influencer-brand-consistency | "brand consistency influencer content" · informational | creator brand guidelines; brand kit; creative control | outreach-management | Multi-language section | Brief = per campaign; this = standing brand rules and review standard |
| 28 | Campaigns across multiple platforms | CREATE | /blog/multi-platform-influencer-campaigns | "multi-platform influencer campaign" · informational | cross-platform; disclosure per platform | social-campaigns | India / GCC / UK-AU-SG platform notes | Platforms-India page = choosing a platform; this = running several |
| 29 | Campaign project plan | CREATE | /blog/influencer-campaign-project-plan | "influencer campaign project plan" · informational | RACI; risk register; change control | outreach-management | Global | Comparison table separates plan, brief, calendar, tracker and checklist |
| 30 | Campaigns across time zones | CONSOLIDATE | /blog/international-influencer-campaign-playbook#time-zones | "influencer campaign time zones" · informational | | (existing) | India, UAE, KSA, UK, AU, SG | Too narrow for its own URL; the playbook already had the section |
| 31 | Revisions without delaying a campaign | SKIP | /blog/influencer-revision-policy | "influencer content revisions" · informational | | | | Turnaround rules and "handling revisions without friction" already there; link added |
| 32 | Approval workflow | SKIP | /blog/influencer-content-approval | "influencer content approval process" · informational | | | | Exact owner (updated 2026-10-10); link added |
| 33 | Scale campaigns without losing quality | CONSOLIDATE | /blog/influencer-marketing-operations#scaling-quality | "scale influencer campaigns" · informational | | | | Operations owns process and metrics; a new page would split it |
| 34 | Campaign checklist | CREATE | /blog/influencer-campaign-checklist | "influencer campaign checklist" · informational | launch checklist; what to check before go-live | outreach-management | Market add-ons for all six markets | Short checklist sections in two older pages now point to it |
| 35 | Product seeding at scale | UPDATE | /blog/influencer-product-seeding-program | "product seeding at scale" · informational | | (existing) | India; cross-border note | Owner already; scale section added |
| 36 | Coordinate gifting and paid collaborations | CONSOLIDATE | /blog/influencer-gifting#gifting-and-paid | "gifting vs paid influencer" · informational | | (existing) | India, UK, AU disclosure | `instagram-gifting-vs-paid-collaboration` covers choosing; coordination added to gifting owner |
| 37 | Prevent campaign bottlenecks | SKIP | /blog/influencer-campaign-delays | "influencer campaign bottlenecks" · informational | | | | seoTitle already "Causes, Bottlenecks and Fixes"; link added |
| 38 | Manage long-term partnerships | SKIP | /blog/influencer-relationship-management | "influencer relationship management" · informational | | | | Four owners already (relationship management, partnerships, retention, repeat collaborations) |
| 39 | Campaign post-mortem | UPDATE (light) | /blog/influencer-campaign-post-mortem | "influencer campaign post-mortem" · informational | | (existing) | | Quick answer and FAQ already answer "what it should include"; H1 retitled. **Monitor** overlap with `/blog/creator-campaign-post-mortem` (agency-side) once Search Console is connected |
| 40 | When to outsource campaign management | CONSOLIDATE | /blog/influencer-marketing-agency-vs-in-house#outsource-campaign-management | "outsource influencer campaign management" · commercial | which tasks to outsource | outreach-management (existing CTA) | | The vs-in-house page owns the decision |

## Titles and meta descriptions (new and changed)

| URL | Title tag | Meta description |
| --- | --- | --- |
| /blog/influencer-campaign-calendar | Influencer Campaign Calendar: How to Build One — Kudozz | Build an influencer campaign calendar: anchor dates, lead times, staggered go-lives, market moments and blackout dates, with a template your team can copy. |
| /blog/influencer-brand-consistency | Brand Consistency Across Influencer Content — Kudozz | Keep influencer content on-brand without killing authenticity: what to fix and what to leave free, a creator brand kit, concept checks and multi-market consistency. |
| /blog/multi-platform-influencer-campaigns | Multi-Platform Influencer Campaigns: How to Manage Them | Manage influencer campaigns across several platforms: a job for each platform, native deliverables, disclosure tools, creator ads, tracking and consistent reporting. |
| /blog/influencer-campaign-project-plan | Influencer Campaign Project Plan: What to Include — Kudozz | What an influencer campaign project plan should include: scope, milestones, dependencies, RACI, budget, approvals, risks, communication and close-out, with a template. |
| /blog/influencer-campaign-checklist | Influencer Campaign Checklist for Brands — Kudozz | A phase-by-phase influencer campaign checklist for brands: strategy, creators, contracts, compliance, briefs, approvals, go-live, monitoring and close-out. |
| /blog/how-to-create-a-successful-influencer-marketing-campaign | How to Plan an Influencer Campaign From Brief to Launch (changed) | unchanged |
| /blog/influencer-campaign-post-mortem | Influencer Campaign Post-Mortem: Template and Agenda (unchanged); **H1 changed** to "Influencer Campaign Post-Mortem: What It Should Include and How Brands Run One" | unchanged |
| /blog/influencer-product-seeding-program | unchanged | Run influencer product seeding, including at scale: choosing recipients, packaging, logistics, a status pipeline, disclosure, cross-border shipping and measurement. |
| /blog/influencer-gifting | unchanged | Influencer gifting strategy: gifting vs paid vs seeding, what to send, disclosure, follow-up, and how to run gifting and paid collaborations together in one program. |

Other updated owners kept their titles and descriptions. `/blog/influencer-campaign-management` got a new excerpt only.

## Internal links

**Into the new pages (counted from source):**

- calendar: 8
- project plan: 6
- checklist: 4
- brand consistency: 3
- multi-platform: 2

**From existing pages:**

- campaign-management → project plan, calendar, checklist
- planning guide → calendar, project plan, checklist, multi-platform
- non-compliance → calendar
- international playbook → calendar
- operations → brand consistency
- seeding → gifting `#gifting-and-paid`
- post-mortem → project plan, checklist `#close-out`
- agency-vs-in-house → campaign-management `#scope`, first-90-days
- coordination → multi-platform
- tracker → calendar
- approval → brand consistency
- revision policy → brand consistency
- delays → calendar, project plan `#sections`

**Between the new pages:** each links to 2–4 of the others and to their owners (brief, approval, quality check, tracker, timeline, escalation, documentation, post-mortem, compliance, platform and market guides).

**Service pages:** only existing `/services/*` URLs are used.

- `outreach-management` ("Influencer Outreach & Management") is the closest real page to "campaign management services".
- `social-campaigns` is used for multi-platform.
- `campaign-strategy` is used for the planning topics.
- No new service page was created.

## CTA implementation

- Five `BRAND_GUIDE_CTAS` entries, reusing existing topic values:
  - Campaign Planning ×2
  - Campaign Management ×3
- Updated owners keep their existing CTAs.
- On all 20 crawled pages, the rendered mid CTA sits after at least 3 H2 sections and the bottom CTA is present. No new analytics events; form behaviour unchanged.

## Research sources (checked 2026-10-14)

| Claim | Source | Notes |
| --- | --- | --- |
| ASCI accepted labels (Ad, Sponsored, Collaboration, Partnership, Free gift…), placement, joint responsibility | [ASCI guidelines page](https://www.ascionline.in/social/guidelines/) / [PDF](https://www.ascionline.in/social/wp-content/uploads/2025/04/ASCI-Influencer-Guidelines.pdf) | "Gifted" is not on the list |
| TikTok content disclosure setting | [TikTok Ads help](https://ads.tiktok.com/resources/help/article/about-the-content-disclosure-setting-for-creators) | Label wording varies across secondary sources, so none is quoted |
| Snapchat Paid Partnership label; brand boosting after approval | [Snap Creators: Brand Partnerships](https://creators.snap.com/learn-reap-rewards-brand-partnerships) | |
| LinkedIn Brand Partnership label | [Social Media Today](https://www.socialmediatoday.com/news/linkedin-rolls-out-brand-partnership-tags/691582/) | Secondary; no official help URL found |
| YouTube Shorts up to three minutes | [YouTube Help 15424877](https://support.google.com/youtube/answer/15424877) | |
| Instagram originality and recycled content | Existing `SOURCES.instagramOriginality` | |
| UAE Saturday–Sunday weekend from Jan 2022 (government; private sector not required) | [Pinsent Masons Out-Law](https://www.pinsentmasons.com/out-law/news/uae-move-weekend-saturday-and-sunday), Simmons & Simmons | |
| Saudi Arabia Friday–Saturday weekend from June 2013 | [Arab News](https://www.arabnews.com/news/455923) | |
| UK gifted posts need disclosure (consumer law) | [ASA influencers' guide](https://www.asa.org.uk/advice-online/influencers-guide.html) | Secondary commentary disagrees on whether the CAP Code applies without brand control, so the page only says the guide expects disclosure |
| Australia | [ACCC guidance for influencers](https://www.accc.gov.au/about-us/publications/social-media-influencer-testimonials-and-endorsements) | Already on site |
| Singapore | [ASAS social media guidance](https://asas.org.sg/About/Social-Media) | Already on site |
| UAE public holidays | [u.ae holidays page](https://u.ae/en/information-and-services/public-holidays-and-religious-affairs/public-holidays) | Already on site |

Time-zone offsets and DST periods (UK late March to late October; south-eastern Australia early October to early April, not Queensland; Perth UTC+8) are standard reference facts and were not separately cited.

**Not used:**

- Instagram Reels maximum length: sources conflict.
- TikTok label names: they vary by source.
- Any "best time to post" statistics: vendor data. Readers are pointed to each creator's own insights instead.

## Technical validation (2026-10-14)

| Check | Result |
| --- | --- |
| `npx tsc --noEmit` | Pass. It first caught a duplicate `metaDescription` in the gifting article, which was fixed before the build |
| `npx eslint` | Exit 0; 0 errors, 6 pre-existing warnings in untouched files |
| `npm run build` | Pass; 1,766 static pages |
| Inventory | 836 posts (831 + 5), all unique; no duplicate titles, seoTitles or meta descriptions |
| Crawl of `next start` (20 URLs: 5 new, 9 updated, 6 link-only/batch-1 fix) | All 200, 1 H1, self-canonical, JSON-LD valid (BlogPosting + BreadcrumbList + FAQPage), lastmod in sitemap matches data, listed on `/blog` |
| Links and images | 168 internal URLs and 20 images: 0 non-200. Every link's text is unique in its paragraph; all anchors exist (`#scope`, `#gifting-and-paid`, `#close-out`, `#sections`, `#time-zones`, `#scaling-quality`, `#outsource-campaign-management`, `#missed-deadline`) |
| CTAs | 1 mid (after ≥3 H2s) and 1 bottom on all 20 |
| Em dashes | 0 in new module; removed from rewritten owner copy |
| Mobile layout | **Not verified** (same headless-Chrome width limit as batch 1). New tables use the existing `overflow-x-auto` wrapper |
| Form submission | Not exercised (it would send a real email) |
| Automated tests | None exist in the repo |

## Files changed (batch 2)

- `src/content/brand-guides/founder-execution.ts` (new): 5 articles.
- `src/content/brand-guides/index.ts`: register module.
- `src/lib/blogCta.ts`: 5 CTA entries.
- `src/content/blog.ts`: campaign-management, planning guide, agency-vs-in-house.
- `src/content/brand-guides/operations-execution.ts`: non-compliance (update); coordination, tracker, approval, revision policy, delays (links only).
- `src/content/brand-guides/programs-and-industries.ts`: seeding.
- `src/content/brand-guides/relationships-partnerships.ts`: gifting.
- `src/content/brand-guides/advanced-practice.ts`: international playbook.
- `src/content/brand-guides/operations-records.ts`: operations.
- `src/content/brand-guides/optimization-cycle.ts`: post-mortem.
- `src/content/brand-guides/founder-questions.ts`: batch 1 correction (UAE permit issuer).
- `public/blog/brand-guides/`: 5 new SVG heroes.
- `docs/seo-register-blog-2026-10.csv`: 5 rows added, 16 updated.
- `docs/seo-audit-progress.md`, `docs/founder-questions-21-40-audit.md`.

`updatedAt` was set only on genuinely revised owners. Link-only edits kept their dates.

## Outstanding

- [ ] Phone-width QA and a staged form test (carried over from batch 1).
- [ ] Monitor the post-mortem pair (`/blog/influencer-campaign-post-mortem` brand-side vs `/blog/creator-campaign-post-mortem` agency-side) once Search Console data exists.
- [ ] `/blog/influencer-management-vs-influencer-marketing` is thin (534 words, 2 em dashes, no review date). Next batch or a P3 update.
- [ ] Older pages in the execution cluster still have no external sources. Low risk, because their claims are procedural.
- [ ] Batch 1 owner decisions remain open: FAQPage markup, rate-guide naming on the cost page, a pilot offer page.

## Recommendations for topics 41–60

The execution cluster is now saturated, so batch 3 should move to measurement and commercial decisions. Each topic still needs the overlap check; several likely have partial owners (`influencer-marketing-kpis`, `measuring-influencer-campaign-roi`, `influencer-marketing-report`, `influencer-marketing-incrementality`, `influencer-brand-lift-survey`).

1. How do I measure influencer marketing when most sales happen on marketplaces or offline?
2. What is a good cost per acquisition from influencer marketing, and how do I calculate mine?
3. How do I attribute sales to influencers without promo codes?
4. What should a monthly influencer marketing report to leadership include? (Possibly an UPDATE to `influencer-marketing-report`.)
5. How do I compare influencer marketing with paid social on the same terms?
6. How do I run a holdout or geo test for an influencer campaign? (Check `influencer-marketing-incrementality`.)
7. Which influencer metrics are vanity metrics, and which matter?
8. How do I know if an influencer drove sales after the campaign ended?
9. How do I measure UGC used in ads? (Check `ugc-marketing-roi`.)
10. How do I set KPIs for an influencer campaign by objective? (Check `influencer-marketing-kpis`.)
11. How do I build an influencer marketing dashboard for founders? (Check `influencer-marketing-dashboard`.)
12. How do I report influencer results across India, the UAE and the UK in one view? (Check `gcc-influencer-campaign-reporting`.)
13. When should a brand run a brand lift study? (Check `influencer-brand-lift-survey`.)
14. How do I forecast results before signing creators? (Check `influencer-marketing-roi-forecasting`.)
15. How do I measure B2B influencer marketing pipeline?
16. How do I value creator content I reuse in ads and on product pages?
17. How do I decide whether to renew an influencer after one campaign?
18. How do I measure influencer marketing for an app (installs, retention)?
19. How long should I keep tracking links and codes live after a campaign?
20. Influencer management vs influencer marketing: what's the difference? (UPDATE the thin owner.)
