# Founder questions, batch 1 (roadmap topics 1–20): audit, decisions and implementation log

Date: 2026-10-14. Scope: the first 20 topics of the 200-article founder-focused roadmap. Not deployed; nothing committed.

- **New module:** `src/content/brand-guides/founder-questions.ts` (`founderQuestionPosts`), registered in `brand-guides/index.ts`.
- **Conventions kept:** American spelling (brand guides), heroes in `public/blog/brand-guides/`, CTA copy in `BRAND_GUIDE_CTAS` (`src/lib/blogCta.ts`), CTAs rendered by the existing `BlogMidCTA`/`BlogBottomCTA` (no in-body CTA sections, no new analytics events), no em dashes in new or rebuilt copy, hypothetical figures labelled, no invented statistics, clients or case studies.
- **Not available:** Search Console, analytics, backlink and keyword-volume tools. No search volumes, difficulty, CPC or traffic figures are stated anywhere. Intent was judged from the query wording and from what currently ranks (US-only web search, 2026-10-14).

## Executive summary

Before this batch the site had 825 articles, and most of the 20 topics already had a dedicated owner. Publishing 20 new URLs would have created direct cannibalisation, for example against `/blog/what-is-influencer-marketing`, `/blog/influencer-marketing-cost-india` and `/blog/micro-vs-macro-influencers`.

**Decisions: 6 CREATE, 10 UPDATE, 4 CONSOLIDATE (into updated owners), 0 SKIP.** No redirects, deletions or URL changes.

- **Topic 3 (cost in India).** The biggest content fix was removing an unsourced per-tier rupee rate table and unsourced budget totals. They were replaced with a dated comparison of five 2026 published rate guides: they disagree several-fold, use different follower bands and none discloses its method. A quote-based pricing method replaces the table.
- **Accuracy fixes elsewhere:**
  - A broken internal claim ("fifteen" campaign ideas linked to a 30-ideas page).
  - Twenty vs twenty-five questions.
  - TikTok presented as a main platform on an India-default page; it has been blocked in India since 2020.
  - An unsourced dollar cost range.
  - Unsourced "many brands use" and "consistently underperforms" claims.

## Decision matrix and keyword/intent mapping

Primary query = the researched query each URL targets. Secondary = question variants and long-tail queries covered on-page. Market: "Global / India default" means broad founder content with India examples and short, linked notes for the UAE/GCC, UK and Australia (no local-presence claims).

| # | Topic | Decision | URL | Primary query / intent | Secondary and long-tail queries | Format | Market |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | What is influencer marketing and how can it help my business grow? | UPDATE | /blog/what-is-influencer-marketing | "what is influencer marketing" · informational | how influencer marketing helps a business grow; benefits; types; cost; disclosure | Definition + quick answer + growth-lever table | Global / India default |
| 2 | Is it worth it for a small business or startup? | CREATE | /blog/is-influencer-marketing-worth-it | "is influencer marketing worth it for small business" · informational/commercial | worth it for startups; ROI for small business; gifting vs paying | Decision guide + break-even formula | Global / India default; GCC, UK, AU notes |
| 3 | How much does influencer marketing cost in India? | UPDATE | /blog/influencer-marketing-cost-india | "influencer marketing cost in India" · commercial | influencer rates India; rate card; GST; usage rights cost | Cost factors + evidence table + pricing method | India |
| 4 | What should a brand look for when hiring an agency? | UPDATE | /blog/choose-influencer-marketing-agency-india | "how to choose an influencer marketing agency" · commercial | what to look for; red flags; questions | Evaluation guide + evidence table | India (UAE, KSA, UK, AU variants exist) |
| 5 | Agency vs in-house | UPDATE (light) | /blog/influencer-marketing-agency-vs-in-house | "influencer marketing agency vs in-house" · comparative | hybrid model; cost comparison | Comparison + decision matrix + cost worksheet | India + GCC section |
| 6 | Build a strategy from scratch | UPDATE | /blog/influencer-marketing-strategy | "influencer marketing strategy" · informational | strategy template; how to build; from scratch | 10-step framework + one-page template | Global / India default |
| 7 | Choose the right influencer marketing services | CONSOLIDATE → #8 owner | /blog/influencer-marketing-services-india#service-selection-framework | "influencer marketing services" · commercial | which services do I need; full-service vs specialist | Situation → service table | Global / India default |
| 8 | What does an agency actually do? | UPDATE | /blog/influencer-marketing-services-india | "what does an influencer marketing agency do" · informational | agency services explained; behind the scenes | Explainer + tables | Global / India default |
| 9 | How long to see results? | CREATE | /blog/how-long-influencer-marketing-results | "how long does influencer marketing take to work" · informational | when to measure; campaign measurement window; views but no sales | Clock tables by metric and objective | Global / India default; India and GCC timing notes |
| 10 | How many influencers for a campaign? | CREATE | /blog/how-many-influencers-for-a-campaign | "how many influencers do I need" · informational | one big vs many small; creator count formula | Four formulas + worked example | Global / India default |
| 11 | Set an influencer marketing budget | UPDATE (light) | /blog/influencer-marketing-budget | "influencer marketing budget" · informational/commercial | how much to spend; budget framework | 7-step framework | India |
| 12 | What should a brief include? | UPDATE (light) | /blog/influencer-campaign-brief | "influencer campaign brief" · informational | brief template; disclosure wording | Template + process | Global / India default |
| 13 | Is my brand ready? | CREATE | /blog/influencer-marketing-readiness | "is my brand ready for influencer marketing" · informational | readiness checklist; before influencer marketing | Scorecard | Global / India default; regulated categories |
| 14 | Biggest mistakes | UPDATE | /blog/15-influencer-marketing-mistakes | "influencer marketing mistakes" · informational | founder mistakes; disclosure mistakes | Listicle + founder section | Global / India default |
| 15 | How can startups compete with larger brands? | CREATE | /blog/how-startups-compete-with-creator-marketing | "how startups compete with big brands influencer marketing" · informational | challenger brand creator strategy; D2C startup | 7 plays + measures | Global / India default |
| 16 | Micro, macro or celebrity? | UPDATE (light) | /blog/micro-vs-macro-influencers | "micro vs macro influencers" · comparative | celebrity vs influencer; tier definitions | Comparison matrix | Global / India default |
| 17 | Evaluate an agency proposal | CONSOLIDATE → RFP owner | /blog/influencer-marketing-rfp#proposal-review | "how to evaluate an influencer marketing agency proposal" · commercial | compare agency quotes; questions to send back | Worked normalisation + checklist | Global / India default |
| 18 | Questions before signing an agency contract | UPDATE | /blog/influencer-marketing-agency-checklist | "questions to ask before signing influencer agency contract" · commercial | agency contract checklist | Question table + interactive checklist | India (ASCI, GST) |
| 19 | First 30, 60 and 90 days | CREATE | /blog/influencer-campaign-first-90-days | "influencer campaign 30 60 90 days" · informational/commercial | what to expect from an influencer agency; milestones | Phase table + scorecard | Global / India default |
| 20 | Repeatable growth channel | CONSOLIDATE → always-on owner | /blog/always-on-influencer-marketing#repeatable-growth-channel | "scale influencer marketing" · informational | repeatable growth channel; creator CAC; playbook | Tests table + unit-economics template | India + GCC |

### Why the substitutions

- **7 → 8's owner.** `/blog/influencer-marketing-services-india` already answered "what an agency does" in its quick answer and had a service-selection framework. Two separate URLs would compete for the same "influencer marketing services" results. The page now targets "what does an agency do" in its `seoTitle` and holds a situation-to-service table for topic 7.
- **17 → RFP guide.** `/blog/influencer-marketing-rfp` already had "What a strong proposal contains" and "Reviewing an agency proposal before you approve it". The gap (making quotes comparable, questions to send back, a single proposal with no RFP) was added there. Its `seoTitle` now names proposal evaluation.
- **20 → always-on guide.** The roster, calendar, budget model, testing and reporting rhythm already lived there. The missing growth-system layer (predictable, scalable, incremental and documented tests; unit economics; playbook; paid flywheel) was added as a section.
- **9 vs 19 vs the existing timeline guide.** These are kept as three intents with explicit cross-links:
  - The campaign timeline covers how long a campaign takes to run.
  - #9 covers when each result appears.
  - #19 covers what the brand should receive at each checkpoint.
- **2 vs 13 vs `/blog/influencer-marketing-startups-india`.** Also three intents:
  - #2 covers the economics (break-even) for small businesses and startups.
  - #13 is an operational readiness scorecard for any brand.
  - The startups guide is a first-campaign plan; it now links to both and doesn't repeat them.
- **10.** `/blog/influencer-budget-allocation` had a short "how many influencers" question list. It is now a two-line summary linking to the new dedicated page, so the two don't compete.

### Content quality before changes (owners)

| URL | Before | Main issues |
| --- | --- | --- |
| what-is-influencer-marketing | Good structure, 1,270 words | 0 sources; "fifteen" vs 30-ideas page; TikTok/TikTok Shop on India-default page; unsourced dollar cost range; 8 em dashes; no hero |
| influencer-marketing-cost-india | Strong factors table | Unsourced "directional" tier rate table and INR scenarios; "most first campaigns use 5 to 15 creators" unsupported; no hero |
| choose-influencer-marketing-agency-india | Strong | "twenty" vs 25 questions |
| influencer-marketing-agency-vs-in-house | Strong (updated 2026-10-09) | Told readers to compare annual cost but gave no method |
| influencer-marketing-strategy | Good | No quick answer; unsourced "split many brands use"; 0 sources; 8 em dashes |
| influencer-marketing-services-india | Good | No "what you don't see" layer; selection framework thin |
| influencer-marketing-budget | Strong | No lastReviewed |
| influencer-campaign-brief | Strong | Disclosure wording unspecified; unsourced "consistently underperforms"; em dashes |
| 15-influencer-marketing-mistakes | Fair | 0 sources; no founder-stage mistakes; "three to five campaigns" inconsistent with other guidance; no hero |
| micro-vs-macro-influencers | Good | Tier bands presented as fixed; no evidence on brand preferences |
| influencer-marketing-rfp, -agency-checklist, always-on | Strong | Specific gaps listed above |

## Titles and meta descriptions (as published)

| URL | Title tag (seoTitle) | Meta description |
| --- | --- | --- |
| /blog/is-influencer-marketing-worth-it | Is Influencer Marketing Worth It for a Small Business? | Is influencer marketing worth it for a small business or startup? When it pays off, when it doesn't, a break-even check on your own numbers and a low-risk first test. |
| /blog/how-long-influencer-marketing-results | How Long Does Influencer Marketing Take to Show Results? | How long influencer marketing takes to work: when reach, clicks, sales and brand effects appear, why results lag, and when to judge a creator, campaign or channel. |
| /blog/how-many-influencers-for-a-campaign | How Many Influencers Do You Need for a Campaign? — Kudozz | Work out how many influencers your campaign needs from reach, learning, market coverage, budget and team capacity, with formulas and a worked example. |
| /blog/influencer-marketing-readiness | Is Your Brand Ready for Influencer Marketing? Checklist | Check whether your brand is ready for influencer marketing: a scorecard covering product, customer, tracking, fulfilment, claims, budget and approvals, with fixes. |
| /blog/how-startups-compete-with-creator-marketing | How Startups Compete With Big Brands Using Creators — Kudozz | How startups compete with larger brands through creator marketing: own a niche, go deep with fewer creators, use founder access and speed, and measure what matters. |
| /blog/influencer-campaign-first-90-days | Influencer Campaign: What to Expect in 30, 60 and 90 Days | What to expect in the first 30, 60 and 90 days of an influencer campaign: setup, go-live, results, what you should receive at each checkpoint and warning signs. |
| /blog/what-is-influencer-marketing | What Is Influencer Marketing? How It Helps a Business Grow | What influencer marketing is, how it works and how it helps a business grow through reach, trust, content and sales, plus influencer types, costs, rules and a first step. |
| /blog/influencer-marketing-cost-india | Influencer Marketing Cost in India: What Drives It — Kudozz | What influencer marketing costs in India: the factors behind creator fees, why published 2026 rate guides disagree, agency fees and a method to price your campaign. |
| /blog/influencer-marketing-services-india | What Does an Influencer Marketing Agency Do? — Kudozz | What an influencer marketing agency actually does, from strategy and creator vetting to approvals and reporting, and how to choose the services your brand needs. |
| /blog/15-influencer-marketing-mistakes | 15 Influencer Marketing Mistakes Brands Should Avoid | The influencer marketing mistakes brands make most often, from choosing creators by follower count to skipping disclosure, why each hurts results and how to fix it. |
| /blog/influencer-marketing-rfp | Influencer Marketing RFP: How to Evaluate Agency Proposals | Run an influencer marketing RFP and evaluate agency proposals: what a good proposal contains, how to make quotes comparable, a weighted scoring matrix and pilots. |
| /blog/influencer-marketing-agency-checklist | Influencer Marketing Agency Checklist Before You Sign (unchanged) | Questions to ask and terms to check before signing an influencer marketing agency contract: scope, fees, creator payments, rights, compliance, reporting and exit. |
| /blog/always-on-influencer-marketing | Always-On Influencer Marketing: Build and Scale a Program (unchanged) | Turn influencer marketing into a repeatable growth channel: an always-on program with a creator roster, calendar, budget, unit economics, testing and reporting. |

The other updated URLs kept their existing titles and descriptions (choose agency, vs in-house, strategy, budget, brief, micro vs macro). Titles over 60 characters drop the "— Kudozz" suffix automatically (`src/lib/metadata.ts`).

## Service pages and internal links

**Service pages (via CTAs and the automatic related-service link; all verified to exist):**

- `/services/campaign-strategy`: worth it, readiness, startups compete.
- `/services/reporting`: results timing.
- `/services/creator-discovery`: how many influencers.
- `/services/outreach-management`: first 90 days.
- Updated owners keep their existing service mapping.
- No service page was created. **Content gap noted:** there is no dedicated "first campaign" or "pilot" service page. Paid pilots are recommended in several guides, but Kudozz has no verified pilot offer to link to. Owner decision needed.

**Contextual internal links added (descriptive anchors, no sitewide links):**

- **Inbound links to the new pages:**
  - worth-it: 6
  - results timing: 6
  - how many: 7
  - readiness: 5
  - startups compete: 2
  - first 90 days: 6
- **From existing pages to new ones:**
  - what-is → worth-it, readiness, results, how-many, first-90
  - cost-india → worth-it, how-many
  - choose-agency → first-90, RFP proposal review, agency checklist
  - vs-in-house → readiness
  - strategy → how-many, readiness, budget
  - services → vs-in-house
  - budget → how-many, worth-it
  - brief → agency brief, UAE brief template, GCC playbook
  - mistakes → readiness, results, how-many
  - micro-vs-macro → how-many, cost-india rate guides
  - RFP → cost-india pricing method
  - agency checklist → first-90
  - always-on → incrementality, business case, first-90
  - budget-allocation → how-many
  - onboarding → first-90
  - campaign timeline → results
  - startups-india → worth-it, startups-compete
- **Between the new pages:** each new page links to 2–5 of the others or to the updated owners.

## CTA implementation

- Each new and updated page renders exactly one `BlogMidCTA` and one `BlogBottomCTA` through the existing resolver. On every page the mid CTA appears after at least three H2 sections, never directly after the introduction (checked on the rendered HTML).
- Six new entries in `BRAND_GUIDE_CTAS` give topic-specific copy and existing topics: Campaign Planning ×3, Campaign Measurement, Creator Selection, Campaign Management. These reuse the existing `cta_topic` values and click events (`blog_mid_cta_click` and the bottom equivalent); no new events.
- The `what-is` and `15-mistakes` pages keep their existing generic "Planning an Influencer Campaign?" CTA (topic "General"). This is deliberate, to keep their `cta_topic` analytics continuous. Changing it is an owner call.
- Form behaviour is unchanged. Bottom CTAs go to `/for-brands#inquiry` with the existing `src/cat/pos/t` parameters.

## Research sources (all checked 2026-10-14)

| Claim used | Source | Date | Type |
| --- | --- | --- | --- |
| US creator ad spend $37bn (2025 projection); 48% of ad spenders see creators as "must buy"; goals awareness 43%, new audiences 41%, trust 35%, online sales 32% | [IAB press release](https://www.iab.com/news/creator-economy-ad-spend-to-reach-37-billion-in-2025-growing-4x-faster-than-total-media-industry-according-to-iab) | 2025-11-20 | Industry survey (US) |
| India industry ₹3,600 crore (2024); 72% of brands favour long-term partnerships; 95% lean to macro (control, safety); 85% of auto/durables marketers to increase niche micro spend; 63% discovery, 69% information, 60% action | [WPP Media, India Influencer Marketing Report 2025 (with Kantar)](https://www.wppmedia.com/news/influencing-with-integrity) | 2025-06-10 | Industry report (agency group, Kantar TGI) |
| Disclosure labels, upfront placement, joint responsibility, virtual influencers, BFSI/health qualifications | [ASCI influencer guidelines PDF](https://www.ascionline.in/social/wp-content/uploads/2025/04/ASCI-Influencer-Guidelines.pdf), [ASCI guidelines page](https://www.ascionline.in/social/guidelines/) | Addendum 2 dated 2025-04-07 | Self-regulatory code |
| DoCA endorsement guidelines for influencers | [PIB release 1892527](https://www.pib.gov.in/PressReleasePage.aspx?PRID=1892527) | January 2023 | Government |
| Partnership ads: ≥30% share → 45% lower median cost per incremental purchase, 20 EMEA lift studies, Jan–Jun 2025, 92% confidence | [PPC Land summary of Meta's white paper](https://ppc.land/meta-says-partnership-ads-cut-incremental-purchase-costs-45-in-emea-tests/) | 2026-10-11 (Meta paper 2026-10-07) | Platform's own analysis, attributed as such |
| YouTube search ranking; Instagram search indexing | Existing `SOURCES.youtubeSearch`, `SOURCES.instagramSearchIndexing` | Already on site | Official platform help |
| Five Indian rate guides (bands, ranges, method disclosure) | upGrowth (estimate dated Sept 2026), Zutsu Media (July 2026), Rulescale (updated 2026-09-29), Nurdd (2026-09-28), Snippet (updated June 2026). Publishers named on the page, not linked (most are competitors). | 2026 | Vendor estimates, used only to show disagreement |
| UAE advertiser permit mandatory | Multiple news reports (Gulf News, Middle East Briefing); detail left to existing GCC guides | Feb 2026 | News; not restated in detail |
| UK: ASA influencer guide (3rd ed., March 2023) recommends "Ad" | [ASA influencers' guide](https://www.asa.org.uk/advice-online/influencers-guide.html) | 2023-03-23 | Regulator guidance |
| Google: no special optimisation or schema for AI features | [Google Search Central, AI features](https://developers.google.com/search/docs/appearance/ai-features) | updated 2025-12-10 | Official |
| Google: generative AI content and scaled content abuse | [Google Search Central, gen AI content](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) | updated 2026-10-01 | Official |
| FAQ rich results removed from Google Search | [Google FAQPage docs](https://developers.google.com/search/docs/appearance/structured-data/faqpage) | 2026-05-07 / 2026-06-15 | Official |

**Considered and not used:**

- EY's April 2024 India report (₹3,375 crore by 2026): the official URL now returns 404, and the newer WPP/Kantar figure is used instead.
- Vendor "$X returned per $1" ROI averages: methods not published. The worth-it page explicitly warns against relying on them.
- GA4 default lookback window: sources conflict, so readers are told to check their own settings.
- Meta's 19% lower CPA figure: platform data with no method visible.
- A claimed 2026 ASCI update reported only by a law-firm blog: not on ASCI's site.

## Technical validation (2026-10-14)

| Check | Result |
| --- | --- |
| `npx tsc --noEmit` | Pass (exit 0) |
| `npx eslint` | Exit 0; 0 errors, 6 warnings, all pre-existing in `contact/page.tsx`, `for-brands/page.tsx`, `Footer.tsx` (untouched) |
| `npm run build` | Pass; 1,756 static pages |
| Article inventory | 831 posts (825 + 6), all slugs unique; no duplicate titles, seoTitles or meta descriptions sitewide |
| Crawl of `next start` (23 URLs: 6 new, 13 updated, 4 supporting) | All 200; 1 H1; self-canonical `https://www.kudozz.in/blog/<slug>`; JSON-LD parses (BlogPosting + BreadcrumbList + FAQPage, plus site Organization/WebSite); OG title present; datePublished/dateModified match data; in `sitemap.xml` with lastmod matching `updatedAt ?? publishedAt`; listed on `/blog` |
| Internal links and images on those pages | 162 unique internal URLs and 23 images requested: 0 non-200 |
| Link-text integrity | Every inline link's text occurs exactly once in its paragraph (renderer links every occurrence); all `/blog/` targets and `#anchors` exist |
| CTAs | 1 mid (after ≥3 H2s) and 1 bottom on all 23 pages |
| Heroes | 9 new SVGs (1600×700, site palette), rendered and checked in Chrome; meaningful alt text in data |
| Em dashes | 0 in the new module; removed from the rewritten copy of all updated owners |
| Mobile layout | **Not verified.** Headless Chrome enforces a minimum window width above 390px, so screenshots crop the same way on untouched pages. Tables use the existing `overflow-x-auto` wrapper. Manual phone check still needed. |
| Form submission | Not exercised (it would send a real email). CTA hrefs and parameters verified. |
| Automated test suite | None exists in the repo (`package.json` has no test script) |

**Structured data note:** Google removed FAQ rich results in June 2026. The site still emits FAQPage JSON-LD that matches the visible FAQs. It is valid and not misleading, but it no longer earns a Google feature. Removing it sitewide is out of scope and is listed as a decision for the owner.

## Files changed

- `src/content/brand-guides/founder-questions.ts` (new): 6 articles.
- `src/content/brand-guides/index.ts`: registers the module.
- `src/lib/blogCta.ts`: 6 CTA entries.
- `src/content/blog.ts`:
  - Updated: what-is, cost-india, choose-agency-india, vs-in-house, strategy, services-india, budget, campaign-brief, 15-mistakes, micro-vs-macro.
  - Links only: startups-india.
- `src/content/brand-guides/agency-selection.ts`: RFP, agency checklist.
- `src/content/brand-guides/objectives-and-scale.ts`: always-on.
- `src/content/brand-guides/campaign-planning.ts`: budget-allocation (section trimmed), campaign-timeline (link).
- `src/content/brand-guides/planning-and-programs.ts`: onboarding (link).
- `public/blog/brand-guides/`: 9 new SVG heroes (6 new pages plus what-is, cost-india, 15-mistakes).
- `docs/seo-register-blog-2026-10.csv`: 17 rows updated, 6 added.
- `docs/seo-audit-progress.md`: batch row.
- `docs/founder-questions-1-20-audit.md`: this file.

`updatedAt` was set only where content was genuinely revised (13 owners). Link-only edits (startups-india, onboarding, timeline, budget-allocation) kept their dates.

## Open items and blocked work

- [ ] Phone-width visual QA of the 6 new pages (tables and template blocks).
- [ ] Test-submit the brand inquiry form from a new article in a staging environment, and confirm GA4 `generate_lead` and the CTA click events in DebugView.
- [ ] Search Console baseline before and after, especially for `/blog/influencer-marketing-cost-india`. Removing the rate table may change rankings for "influencer rates India" queries.
- [ ] The same unsourced-rate pattern probably exists in `instagram-influencer-rates-india`, `youtube-influencer-rates-india`, `ugc-content-cost-india`, `influencer-campaign-cost-india` (INR scenarios) and the platform rate pages. These were not changed in this batch, and they are the highest-priority follow-up.
- [ ] Owner decision: keep or remove sitewide FAQPage JSON-LD (no longer a Google rich result).
- [ ] Owner decision: whether Kudozz offers a paid pilot or first-campaign package that guides can link to.
- [ ] Owner decision: rate-guide publishers are named but not linked on the cost page; change this if the owner prefers links or anonymised labels.

## Recommendations for topics 21–40

Chosen to fill founder questions that have no owner today (checked against the 831 slugs). Each needs the same overlap check before writing.

1. How do I measure influencer marketing if most of my sales are on Amazon or Flipkart? (Check `influencer-marketing-amazon-flipkart-sellers` first; may be an UPDATE.)
2. Should a founder be the face of the brand or use creators? (A generic founder-led page was skipped in 1760–1809; reopen it if Search Console shows demand.)
3. How do I run an influencer marketing pilot with an agency?
4. What results should I report to my board or investors from creator marketing?
5. How do I calculate customer acquisition cost from influencer marketing? (Check `influencer-marketing-cpm-cpe-cpa`.)
6. Influencer marketing vs paid social ads: where should a startup put the first ₹5 lakh? (Comparative; avoid unsourced benchmarks.)
7. How do I know if an influencer agency is overcharging?
8. What does a good influencer campaign report look like? (Probably an UPDATE to `influencer-marketing-report`.)
9. How should a brand handle a creator who posts something off-brand mid-campaign? (Check the escalation pages.)
10. How do I expand a creator program from India to the UAE? (Cross-market; link to the GCC hub.)
11. How do I expand to the UK or Australia with creators? (Market-specific, British/Australian English.)
12. Singapore influencer marketing guide. (The market is owner-confirmed but has no dedicated content; needs IMDA/ASAS source research.)
13. What should a startup's first influencer contract include? (Check `influencer-marketing-contract`.)
14. How do I avoid fake engagement when I can't afford tools? (Check `how-to-identify-fake-followers`.)
15. When should a brand stop working with an influencer?
16. How do seasonal peaks change influencer budgets in India? (Probably an UPDATE to the seasonal page.)
17. How to get board or finance approval for influencer spend. (Check `influencer-marketing-business-case`.)
18. B2B founders: does creator marketing work for SaaS sales cycles? (Check the B2B and SaaS pages.)
19. How do I brief an agency when I don't know my budget yet?
20. What KPIs should a founder look at weekly vs monthly?
