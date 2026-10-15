# Founder questions, batch 5 (roadmap topics 81–100: creator discovery, vetting, negotiation and partnerships): audit, decisions and implementation log

Date: 2026-10-14. Status: implemented in the working tree; uncommitted and not deployed.

Every one of the 20 topics already had at least one substantial owner page, and several had two or three. Most were reviewed in October 2026. So this batch creates no new URLs:

| Decision | Count | Topics |
| --- | --- | --- |
| UPDATE | 5 owner pages | 85 with 98, 88, 90, 96, 100 |
| MONITOR | 2 overlap groups | 87, 94 |
| SKIP | 12 | 81, 82, 83, 84, 86, 89, 91, 92, 93, 95, 97, 99 |

No URLs changed and no redirects were needed. Adding a page for any of these topics would have competed with an existing page.

## 1. Audit findings

Method:
- Imported all 848 posts.
- Matched slugs and titles against discovery, vetting, fake, audience, tier, pay, rate, negotiate, contract, rights, exclusivity, proposal, outreach, brief, relationship, CRM, database, safety, scorecard, ambassador and international terms.
- Searched full body text for "brand fit", "creative style", "compare proposals" and "ambassador vs campaign".
- Read the outline, and where needed the full text, of every candidate owner.

| Topic | Existing owner(s) | State |
| --- | --- | --- |
| 81 Find influencers | `find-indian-influencers` (12-step process, updated 2026-10-12); market pages `find-vet-influencers-australia`, `find-micro-influencers-saudi-arabia`, `regional-influencer-marketing-uk`; `influencer-shortlist`, `creator-discovery-platform` | Complete |
| 82 Vet influencers | `how-to-vet-influencers` (2,200 words, 7 steps, interactive checklist) | Complete |
| 83 Audience quality | `influencer-audience-quality` (Audience Quality Score) | Complete |
| 84 Micro vs macro | `micro-vs-macro-influencers` (updated in batch 1), `nano-vs-micro-influencers` | Complete |
| 85 Content quality, brand fit, creative style | `how-to-choose-the-right-influencer-for-your-brand` (brand-fit sections, 8-factor framework; Sept review); `creator-quality-score` (content craft); `influencer-content-quality-check` (post-delivery QC) | Gap: no repeatable pre-booking content review method; 3 em dashes |
| 86 How much to pay | `how-much-to-pay-influencers` (2,800 words) plus market cost pages | Complete; no unsourced rate table |
| 87 Negotiate rates | `how-to-negotiate-with-influencers` (overall deal) and `negotiate-influencer-rates` (fee) | Overlapping pair; cross-linked |
| 88 Agreement contents | `influencer-marketing-contract` (12 clauses, India and UAE/KSA); `influencer-contracts-australia` | Gap: no UK or Singapore notes; title said "Indian Brands" |
| 89 Usage rights and exclusivity | `influencer-usage-rights` (2,400 words), `influencer-exclusivity` | Complete |
| 90 Compare proposals | `how-much-to-pay-influencers` ("Compare quotes per deliverable"), `negotiate-influencer-rates` ("Comparing creator quotes like for like"), `influencer-campaign-hidden-costs` (quote checklist) | Covered by unit comparisons; no full-proposal worksheet |
| 91 Outreach | `influencer-outreach-email` (9 examples), `influencer-outreach-strategy`, `personalized-influencer-outreach`, `influencer-response-rate` | Complete |
| 92 Proposal | `influencer-collaboration-proposal` | Complete |
| 93 Brief with creative freedom | `influencer-campaign-brief` (updated in batch 1), `influencer-brand-consistency` (batch 2: fixed / flexible / free) | Complete |
| 94 Long-term relationships | `influencer-relationship-management`, `influencer-retention`, `repeat-influencer-collaborations`, `influencer-partnerships` | Complete, with a three- to four-way overlap |
| 95 Database and pipeline | `influencer-database`, `influencer-marketing-crm` | Complete |
| 96 Fake followers | `how-to-identify-fake-followers` | Weak: no quick answer or hero; a link labelled "fraud in India" pointed to the page itself; 13 em dashes; no platform-native checks or policies |
| 97 Brand safety | `influencer-marketing-brand-safety` (1,900 words) plus risk-management page | Complete |
| 98 Selection scorecard | `how-to-choose-the-right-influencer-for-your-brand` (8 factors, unweighted); `creator-quality-score`, `influencer-ranking`, `influencer-audience-quality`, `creator-performance-scorecard` | Gap: no gates and no objective-based weights. Four scoring pages already exist, so a fifth would cannibalise |
| 99 Campaigns vs ambassador programs | `brand-ambassador-program` (two comparison tables), `influencer-partnerships` (8-model table) | Complete |
| 100 Multi-market partnership strategy | `international-influencer-campaign-playbook` (batch 2) | Gaps: operating models, local discovery, Gulf countries treated separately, pricing, disclosure by market. It still linked the old UAE Media Council permit URL |

## 2. Research summary

Sources were accessed 2026-10-14.

| Fact | Source |
| --- | --- |
| YouTube fake engagement policy: no services that inflate views, likes or subscribers; artificial traffic not counted; strikes and termination | https://support.google.com/youtube/answer/3399767 |
| Instagram "About this account" shows date joined and username-change count, and country for some accounts | https://help.instagram.com/697961817256175 (help text read through search snippets; Instagram pages don't render to the fetch tool) |
| Instagram Community Guidelines: don't artificially collect likes, followers or shares | https://help.instagram.com/477434105621119 (wording confirmed only via secondary sources) |
| CMA social media endorsements guidance for content creators (first published 2019, updated 3 Sept 2025 with DMCC Act references) | https://www.gov.uk/government/publications/social-media-endorsements-guidance-for-content-creators |
| ASA/CMA influencers' guide | https://www.asa.org.uk/resource/influencers-guide.html |
| ASAS Guidelines on Interactive Marketing Communication and Social Media (29 Aug 2016) | https://asas.org.sg/About/Social-Media. The disclosure, fake-engagement, MAS and MOH points reuse owner-verified facts in `src/content/markets.ts` |
| UK fake-review ban from 6 April 2025 | Batch 3 (CMA208) |
| UK creator owns commissioned work unless assigned in writing | Batch 3 (gov.uk) |
| VAT and GST rates: UK 20%, Singapore 9%, Australia 10% | Standard rates |

Competitor patterns (vendor and agency pages, not independent research):
- Published selection scorecards agree on the core criteria but not on weights.
- Several use must-pass gates (audience or geography) rather than a single sum, which supported the gates-plus-weights design.
- Fake-follower guides stress multiple signals, native analytics and growth-versus-engagement divergence. Some quote prevalence figures from vendor datasets (for example 37.2% or "about 30%"); these were **not used** because they're vendor estimates.
- Multi-market guides recommend hub-and-spoke operating models and per-territory rights. This informed the operating-model table, framed as practice rather than a standard.

Sources: influencermarketinghub.com/influencer-scorecards, later.com/blog/influencer-score, contentgrip.com/how-to-vet-influencers, syncly.app, inbeat.agency/blog/global-creator-program, influencermarketinghub.com/how-global-consumer-brands-should-structure-influencer-marketing.

Limitations:
- No Search Console, GA4 or keyword tool access, so no volumes, rankings or difficulty were used.
- UAE government sites (nmo.gov.ae and uaemc.gov.ae) time out from this environment. The playbook link was switched to the NMA URL already used by `markets.ts` and `gcc-guides/shared.ts`, but neither could be re-checked live.
- The Singapore default for commissioned-work ownership could not be confirmed from IPOS, so the contract table says to state it explicitly rather than claiming a default.

## 3. Decision table and URL map

| # | Topic | Decision | Final owner URL |
| --- | --- | --- | --- |
| 81 | Find the right influencers | SKIP | /blog/find-indian-influencers, plus market pages, linked from the playbook |
| 82 | Vet before investing | SKIP | /blog/how-to-vet-influencers |
| 83 | Audience quality and authenticity | SKIP | /blog/influencer-audience-quality |
| 84 | Micro vs macro | SKIP | /blog/micro-vs-macro-influencers |
| 85 | Content quality, brand fit, creative style | UPDATE | /blog/how-to-choose-the-right-influencer-for-your-brand#content-review |
| 86 | How much to pay | SKIP (owner complete; link target) | /blog/how-much-to-pay-influencers |
| 87 | Negotiate rates without damaging the relationship | MONITOR | /blog/negotiate-influencer-rates, sharing the topic with /blog/how-to-negotiate-with-influencers |
| 88 | Agreement contents | UPDATE | /blog/influencer-marketing-contract#uk-australia-singapore |
| 89 | Usage rights and exclusivity | SKIP | /blog/influencer-usage-rights, /blog/influencer-exclusivity |
| 90 | Compare proposals | CONSOLIDATE (update owner) | /blog/how-much-to-pay-influencers#compare-proposals |
| 91 | Outreach | SKIP | /blog/influencer-outreach-email |
| 92 | Collaboration proposal | SKIP | /blog/influencer-collaboration-proposal |
| 93 | Brief with creative freedom | SKIP | /blog/influencer-campaign-brief, /blog/influencer-brand-consistency |
| 94 | Long-term relationships | MONITOR | /blog/influencer-relationship-management (plus retention, repeat collaborations and partnerships) |
| 95 | Database and pipeline | SKIP | /blog/influencer-database, /blog/influencer-marketing-crm |
| 96 | Fake followers | UPDATE | /blog/how-to-identify-fake-followers |
| 97 | Brand safety | SKIP | /blog/influencer-marketing-brand-safety |
| 98 | Selection scorecard | CONSOLIDATE into 85 | /blog/how-to-choose-the-right-influencer-for-your-brand#selection-scorecard |
| 99 | Campaigns vs ambassador programs | SKIP | /blog/brand-ambassador-program |
| 100 | Multi-market partnership strategy | UPDATE | /blog/international-influencer-campaign-playbook#multi-market-partnerships |

Why the overlaps are monitored rather than merged: the SEO workflow waits for Search Console data before merging ranking pages.
- **87:** the pair is already differentiated (deal terms vs fee) and cross-linked.
- **94:** the retention page explicitly separates the jobs.

Merge only if Search Console shows the pages splitting the same queries.

## 4. Keyword and intent map (inferred, no volume data)

| URL | Primary query | Supporting concepts | Intent |
| --- | --- | --- | --- |
| how-to-choose-the-right-influencer-for-your-brand | influencer selection criteria; how to choose an influencer | brand fit, creative style, content review, scorecard, gates, weights | Evaluative / how-to |
| how-to-identify-fake-followers | how to spot fake followers | fake engagement, authenticity, growth spikes, native insights, platform policy | Diagnostic |
| influencer-marketing-contract | influencer contract / agreement clauses | disclosure, ownership, tax, sector rules by market | Informational (commercial) |
| how-much-to-pay-influencers | how much to pay influencers; compare influencer proposals | cost per deliverable, rights-adjusted fee, proposal worksheet | Commercial / how-to |
| international-influencer-campaign-playbook | international / multi-market influencer campaigns | hub and spoke, local discovery, Gulf markets, disclosure by market | Strategic |

## 5. Implementation summary

**how-to-choose-the-right-influencer-for-your-brand** (topics 85 and 98):
- New seoTitle and meta.
- "How to review a creator's content before booking": a 7-step method and a signals table (sponsored vs organic, disclosure, credibility, sponsorship density, range, comments), plus a paid-concept tip.
- "Turn the factors into a selection scorecard": gates (authenticity, brand safety, disclosure history, audience in market) and example weights for conversion vs awareness objectives.
- A hypothetical worked example: 3.9, 4.4, and a gate failure at 4.75. All three are arithmetically checked.
- A scorecard template and reviewer calibration advice.
- Em dashes removed.

**how-to-identify-fake-followers** (topic 96):
- Quick answer; manual checks you can run (About this account, views vs followers, engagement vs followers over time, comment sample, screen-recorded insights).
- A hypothetical growth-vs-engagement table.
- "What the platforms say": the YouTube fake engagement policy and Instagram's guidelines.
- A broken self-link fixed (now points to how-to-vet-influencers); related posts and a hero added; 13 em dashes removed.

**influencer-marketing-contract** (topic 88):
- seoTitle no longer India-only; meta updated.
- A UK, Australia and Singapore clause table (disclosure, ownership, fees and tax, sector rules, fake reviews and engagement) with CMA, ASA/CMA and ASAS sources and internal guide links.

**how-much-to-pay-influencers** (topic 90): "Comparing full proposals side by side", a hypothetical two-proposal worksheet:
- Cost per 1,000 views: ₹1,333 vs ₹1,100.
- Rights-adjusted: ₹800.
- Also compares exclusivity, payment terms and fit score.
- Ends with a checklist of items to compare.

**international-influencer-campaign-playbook** (topic 100):
- "Creator partnerships across markets": central, hub-and-spoke and local-led models.
- Local creator discovery and fit, with links to each market's discovery guide.
- "The Middle East is several markets": UAE permit vs Saudi Mawthooq licence, with links to Qatar, Kuwait and Oman.
- Pricing across markets: no cross-market rate card; links to the India, UK, Australia and Saudi cost guides.
- A disclosure and licensing table by market with guide links.
- Visitor permit link moved to the NMA URL.

All examples are labelled hypothetical. No Kudozz clients, creator databases, prices or results were added.

## 6. SEO changes

- **Updated metadata:**
  - New seoTitle and meta: how-to-choose-the-right-influencer-for-your-brand, influencer-marketing-contract.
  - Meta only: international-influencer-campaign-playbook.
- **Dates:** `updatedAt: 2026-10-14` is set on the 5 updated pages. The fake-follower page also gained `lastReviewed`. Sitemap lastmod and JSON-LD dateModified follow. Link-only pages keep their dates.
- **Template:** canonical, Open Graph, BlogPosting, BreadcrumbList and FAQPage come from the existing template, unchanged. The FAQPage decision is still open.

## 7. Internal links

**Within the updated pages:**
- **Selection page:** links to the content quality check, influencer ranking, creator quality score and influencer shortlisting.
- **Fake-follower page:** links to how-to-vet-influencers, replacing the self-link.
- **Contract page:** links to UK influencer advertising rules, regulated products in the UK and influencer contracts in Australia.
- **Pricing page:** links to the selection scorecard.
- **Playbook:** links to:
  - Discovery and selection: find-indian-influencers, find-vet-influencers-australia, find-micro-influencers-saudi-arabia, regional-influencer-marketing-uk and the selection scorecard.
  - Gulf markets: influencer-marketing-saudi-arabia-vs-uae, influencer-marketing-qatar, -kuwait and -oman.
  - Cost guides: India, UK, Australia and Saudi Arabia.
  - Rules: influencer-marketing-india, uae-advertiser-permit, saudi-influencer-advertising-rules, influencer-advertising-rules-uk, influencer-advertising-rules-australia, and /markets/singapore.

**Link-only additions** (dates unchanged):
- creator-quality-score → selection scorecard
- influencer-shortlist → selection scorecard
- negotiate-influencer-rates → how-much-to-pay-influencers#compare-proposals

## 8. CTA and analytics

- No CTA mapping or analytics code was changed. The updated pages keep their existing CTA topics: Creator Discovery, Campaign Planning and others.
- **Local check** (gtag stubbed in headless Chrome; nothing submitted):
  - **how-to-identify-fake-followers:**
    - Fired `blog_mid_cta_click` and `blog_bottom_cta_click` with topic Creator Discovery.
    - On the inquiry page, fired `brand_lead_form_start` and `blog_lead_form_start`.
    - The goal field pre-filled to "Creator Discovery".
  - **international-influencer-campaign-playbook:**
    - Fired the same events with topic Campaign Planning.
    - The goal field pre-filled to "Campaign Management".
- `blog_lead_form_submit` and GA4 receipt were not tested, because submitting sends a real email and there is no GA4 access.

## 9. Images and accessibility

- One hero SVG was added: `public/blog/brand-guides/how-to-identify-fake-followers.svg`, a diagram of five warning signs with alt text. The page previously had none.
- The other updated pages already had heroes.
- No screenshots of creator analytics, contracts or reports were created.

## 10. Validation

| Check | Result |
| --- | --- |
| `npx tsc --noEmit` | Pass |
| `npx eslint .` | 0 errors; 6 pre-existing warnings |
| `npm run build` | Pass; 1,790 static pages |
| Content checks (8 pages) | Pass. Links and anchors resolve; link text unique per paragraph (two duplicates fixed in the playbook); meta and title lengths; 0 em dashes on updated pages. `/markets/singapore` was flagged as an unknown path by the checker and confirmed 200 in the crawl |
| Crawl of `next start` (8 pages) | All 200; 1 H1; self-canonical; valid JSON-LD; mid and bottom CTA; sitemap lastmod correct; listed on /blog. 112 internal links and 7 images, none broken |
| 390px mobile emulation (CDP) | 8 of 8 pages, no horizontal overflow |
| CTA and form-start events | See section 8 |
| Secrets in `.next/static` | 0 occurrences of any server-only `.env` value |

## 11. Files changed

- **Created:**
  - `docs/founder-questions-81-100-audit.md`
  - `public/blog/brand-guides/how-to-identify-fake-followers.svg`
- **Edited:**
  - `src/content/blog.ts`: choose-right, fake followers, contract, how-much-to-pay
  - `src/content/brand-guides/advanced-practice.ts`: playbook
  - `src/content/brand-guides/intelligence-scoring.ts`: creator-quality-score link
  - `src/content/brand-guides/campaign-planning.ts`: shortlist link
  - `src/content/brand-guides/relationships-outreach.ts`: negotiate-rates link
  - `docs/seo-register-blog-2026-10.csv`: 8 rows updated
  - `docs/seo-audit-progress.md`: F5 row
- **Removed:** none.

## 12. Outstanding risks

**Overlaps to watch in Search Console:**
- The negotiation pair (87).
- The relationships, retention and repeat-collaboration group (94).
- Scoring pages: creator-quality-score, influencer-ranking, audience-quality and the selection scorecard.
- brand-ambassador-program, which has two near-duplicate comparison tables; one could be trimmed.

**Unverified sources:**
- UAE regulator URLs can't be reached from here. `gcc-guides/shared.ts` still defines uaemc.gov.ae sources used by uae-permit and uae-hub pages.
- Instagram policy wording was confirmed only through secondary sources.

**Untested:** form submission and GA4 receipt.

**Carried over:**
- FAQPage markup decision.
- YouTube view definition on YouTube pages.
- Thin platform ROI pages.
- Unsourced INR rate tables on platform rate pages.

## 13. Next batch (101–120): platform-specific influencer marketing

Platform inventory from the site (brand-side pages; word counts from the content data):

| Platform | Pages | Under 800 words |
| --- | --- | --- |
| X | 38 | 37 |
| Podcasts | 29 | 28 |
| Instagram | 22 | 6 |
| YouTube | 12 | 2 |
| Snapchat | 11 | 1 |
| LinkedIn | 10 | 1 |
| Pinterest | 10 | 0 |
| Reddit | 10 | 2 |
| TikTok | 1 | 0 |

The platform layer is already large and uneven, so batch 6 should be mostly consolidation and updates, not new pages:

1. **Instagram and YouTube first.** These are the highest-value platforms for India, the UAE, the UK, Australia and Singapore.
   - Update the thin Instagram owners (ROI, brief, Stories, e-commerce, algorithm) and the YouTube owners for the 24 Aug 2026 view redefinition (engaged views).
   - Verify Instagram views, Trial Reels and partnership-ad permissions, and YouTube BrandConnect and Shopping availability by market, against official help pages.
2. **LinkedIn for B2B.** Check `b2b-creator-partnerships-linkedin`, `executive-influencer-marketing-linkedin` and `linkedin-thought-leadership-marketing` for overlap; verify LinkedIn's BrandLink and Thought Leader Ads documentation.
3. **TikTok.** There is one page and TikTok is unavailable in India. Consider one owner page for TikTok in the UAE, Saudi Arabia, the UK, Australia and Singapore. Verify TikTok One / Creator Marketplace, Spark Ads and TikTok Shop availability by country; don't assume US features.
4. **Snapchat in Saudi Arabia and the UAE.** Check the existing Snapchat pages for current Snap Star and Public Profile documentation.
5. **X and podcasts.** 65 thin pages: plan consolidation into a few strong owners per platform once Search Console shows which ones get impressions, with 301 redirects for merged URLs.
6. **Platform rate pages** (Instagram, YouTube, LinkedIn, Snapchat, Pinterest rates India) still need unsourced INR tables replaced with cost-factor guidance.
