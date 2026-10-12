# UK market cluster (1860–1909): audit, decisions and implementation

Date: 2026-10-10. Builds on the uncommitted batches up to and including 1810–1859. No uncommitted work was overwritten. Edits to already-modified files (`blog.ts`, `blogCta.ts`, `BrandInquiryForm.tsx`, `advanced-practice.ts`, `au-core.ts`) are insertions only.

- **New module:** `src/content/uk-guides/` (`shared.ts` with the `UK_SRC` source register, `uk-core.ts`, `uk-planning.ts`, `index.ts`), registered in `blog.ts` after `auGuidePosts`.
- **Conventions:** British English; `inLanguage: "en-GB"`; `spatialCoverage: "United Kingdom"`; breadcrumb parent "United Kingdom" → the hub; heroes in `public/blog/uk-guides/`; CTA topics prefixed `UK:`.
- **Positioning:** Kudozz is India-registered. Nothing in the cluster claims a UK office, staff, creator network, clients, case studies or UK results. The pages are buyer guides. CTA copy offers an approach or a second opinion and doesn't state UK service coverage. No UK landing page was created; that needs the business to confirm what it can deliver in the UK (see follow-ups).

## Baseline

- `git status`: 106 entries of uncommitted work; preserved.
- `npx tsc --noEmit`: exit 0. Previous build: exit 0, 1,720 pages, 816 blog URLs, 0 broken internal links.
- **Security:** unchanged.
  - `src/lib/mailer.ts` is `server-only`, using `EMAIL_FROM`, `EMAIL_TO` and `EMAIL_APP_PASSWORD`.
  - 0 references to `NEXT_PUBLIC_APP_PASSWORD`, `NEXT_PUBLIC_FROM_EMAIL` or `NEXT_PUBLIC_TO_EMAIL` in `src`.
  - The password value appears in 0 files under `.next/static`.
- **Data not available:** no Search Console, analytics, backlink or UK search-volume data. No access to the live site's UK traffic.

## Existing UK coverage

A body-text search of all 816 pages for UK, United Kingdom, British, ASA, CAP Code, CMA and London found only passing mentions: TikTok creator rewards, Pinterest trends, two Indian state pages, the Australian timeline page and a UAE expat page. **No page targets UK intent**, so the candidate list is a genuine market gap, unlike the generic lists in recent batches.

**Templates for structure:** the Australia cluster (26 URLs, `en-AU`) and the GCC cluster. Lessons applied:
- no city pages; regional intent lives in one regional guide
- no rate cards without credible data
- industry pages only where local rules justify them; otherwise sector rules are consolidated into one regulated-products guide

## Decisions

**9 CREATE, 0 UPDATE, 30 CONSOLIDATE, 11 SKIP.** CONSOLIDATE means the topic is a section of one of the nine new pages, not a separate URL.

| ID | Topic | Decision | URL / owner | Intent | Overlap risk | Evidence | Value | Reason |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1860 | UK influencer marketing rules (ASA, CMA) | CREATE | /blog/influencer-advertising-rules-uk | Informational / commercial | L | H (ASA/CMA guide, CMA DMCC note) | H | Core UK intent; no coverage. |
| 1861 | Briefing creators on disclosure | CONSOLIDATE | …rules-uk#brief | Informational | H | H | M | Brief wording template. |
| 1862 | Gifts, paid, affiliate disclosure | CONSOLIDATE | …rules-uk#when-ad | Informational | H | H | H | Same intent as 1860. |
| 1863 | Who is responsible | CONSOLIDATE | …rules-uk#responsibility | Informational | H | H | M | Section. |
| 1864 | Compliance checklist | CONSOLIDATE | …rules-uk#review, /blog/influencer-marketing-uk#checklist | Informational | H | H | M | Checklists on rules page and hub. |
| 1865 | Reviewing content before it goes live | CONSOLIDATE | …rules-uk#review | Informational | H | M | M | Section. |
| 1866 | Giveaways and competitions | CREATE | /blog/influencer-giveaways-uk | Informational | L | H (CAP advice, lottery law, NI change) | M | Distinct query; CAP section 8 is UK-specific. |
| 1867 | Regulated and sensitive products | CREATE | /blog/regulated-products-influencer-marketing-uk | Informational | L | H (CAP LHF guidance, rules 18.16 and 12.12, FCA FG24/1, CMA green claims) | H | High-risk UK rules, several new in 2025–26. |
| 1868 | Common disclosure mistakes | CONSOLIDATE | …rules-uk#mistakes | Informational | H | H | M | Section. |
| 1869 | Compliance policy | CONSOLIDATE | …rules-uk#policy | Informational | H | M | M | Outline plus ISBA code. |
| 1870 | International brands launching in the UK | CREATE | /blog/influencer-marketing-uk | Commercial | L | H (IAB UK market data) | H | Pillar; hub for the cluster. |
| 1871 | UK vs US differences | CONSOLIDATE | …marketing-uk#from-abroad | Informational | M | M | M | US-specific FTC claims not verified, so framed as "from abroad". |
| 1872 | Adapting for British audiences without stereotypes | CONSOLIDATE | …marketing-uk#from-abroad, regional page | Informational | M | L | M | Section. |
| 1873 | London | CONSOLIDATE | /blog/regional-influencer-marketing-uk#england | Commercial | H if separate | L | M | City pages would be thin swaps. |
| 1874 | Manchester | CONSOLIDATE | …regional-uk#england | Commercial | H | L | L | Same. |
| 1875 | Birmingham | CONSOLIDATE | …regional-uk#england | Commercial | H | L | L | Same. |
| 1876 | Scotland | CONSOLIDATE | …regional-uk#scotland | Informational | M | M | M | Nation section. |
| 1877 | Wales and Welsh language | CONSOLIDATE | …regional-uk#wales | Informational | M | H (Census 2021) | M | Nation section with census figure. |
| 1878 | Northern Ireland | CONSOLIDATE | …regional-uk#northern-ireland | Informational | M | M | M | Nation section (cross-border, prize draw law). |
| 1879 | Multiregional campaigns without duplication | CREATE | /blog/regional-influencer-marketing-uk | Informational | L | M | M | One regional strategy page replaces six location pages. |
| 1880 | UK fashion brands | CONSOLIDATE | …regulated-uk#green | Commercial | H (India fashion page) | H (CMA fashion guidance) | M | Only the green-claims rules are UK-specific. |
| 1881 | UK beauty brands | CONSOLIDATE | …regulated-uk#medicines, #other-claims | Commercial | H | H | M | POM and claims rules. |
| 1882 | UK food and beverage | CONSOLIDATE | …regulated-uk#food, #alcohol | Commercial | H | H | H | Less healthy food rules from 5 January 2026. |
| 1883 | UK travel brands | SKIP | — | Commercial | H (generic travel pages) | L | L | No UK-specific rule to justify a page. |
| 1884 | UK hospitality | SKIP | — | Commercial | H | L | L | Same. |
| 1885 | UK fitness and sports | CONSOLIDATE | …regulated-uk#medicines, #other-claims | Commercial | H | H | M | Weight-loss POM rulings are the UK-specific part. |
| 1886 | UK home and interiors | SKIP | — | Commercial | H | L | L | Generic; green claims covered. |
| 1887 | UK education and online learning | SKIP | — | Commercial | H | L | L | Generic. |
| 1888 | UK technology brands | SKIP | — | Commercial | H | L | L | Generic. |
| 1889 | UK professional services | SKIP | — | Commercial | H | L | L | Profession-specific rules (SRA etc.) not researched; low evidence. |
| 1890 | Choosing an agency in the UK | CREATE | /blog/choose-influencer-marketing-agency-uk | Commercial | M (India and AU versions) | M (ISBA code) | H | Buyer guide; no ranking or self-promotion. |
| 1891 | Questions before hiring an agency | CONSOLIDATE | …agency-uk#questions | Commercial | H | M | M | Section; links to the pitch-questions page. |
| 1892 | Writing a UK brief | CONSOLIDATE | …rules-uk#brief | Informational | H (generic brief pages) | M | M | Only disclosure wording differs. |
| 1893 | UK budgets and costs | CREATE | /blog/influencer-marketing-cost-uk | Commercial | M | M (IAB, HMRC, VAT) | H | No rate card (no credible public data); cost structure, VAT, gifts as income. |
| 1894 | Comparing UK creator proposals | CONSOLIDATE | …cost-uk#compare | Commercial | H | M | M | Section; links to #compare-quotes. |
| 1895 | Micro, mid-tier, macro mix | CONSOLIDATE | …marketing-uk#creator-mix | Informational | H (micro vs macro) | L | M | No UK-specific evidence; short section. |
| 1896 | Seasonal retail moments | CREATE | /blog/seasonal-influencer-marketing-uk | Commercial | L | M (dates computed; CMA pricing guidance) | H | UK calendar differs (Mothering Sunday, Boxing Day). |
| 1897 | Black Friday | CONSOLIDATE | …seasonal-uk#black-friday | Commercial | M | M | M | Section; 27 November 2026. |
| 1898 | Christmas timeline | CONSOLIDATE | …seasonal-uk#christmas | Commercial | M | M | M | Section. |
| 1899 | Paid social usage and licensing | CONSOLIDATE | …rules-uk#paid-amplification | Informational | H (usage-rights pages) | M | M | UK point is that brand placements carry full CAP liability. |
| 1900 | Measuring ROI in the UK | CONSOLIDATE | …marketing-uk#measurement | Informational | H (ROI pages) | M (ICO) | M | UK difference is PECR consent. |
| 1901 | UK reporting | SKIP | /blog/influencer-marketing-report | Informational | H | — | — | Generic. |
| 1902 | UK e-commerce and online sales | CREATE | /blog/ecommerce-influencer-marketing-uk | Commercial | M | M (Retail Gazette, ASA, CMA) | H | UK platform availability, affiliate disclosure, DMCC review rules. |
| 1903 | Evaluating creators for DTC brands | CONSOLIDATE | …ecommerce-uk#evaluate | Commercial | H | M | M | Section. |
| 1904 | Retail store visits | SKIP | — | Commercial | M | L | L | Weak evidence; regional page covers stores. |
| 1905 | Testing before paid spend | SKIP | /blog/ugc-paid-social-testing | Informational | H | — | — | Generic. |
| 1906 | Subscription businesses | SKIP | /blog/subscription-influencer-marketing-india | Commercial | H | L | L | The DMCC subscription regime's start date wasn't verified; revisit when in force. |
| 1907 | UK B2B | SKIP | /blog/b2b-influencer-marketing-india, /blog/expert-creator-marketing | Commercial | H | L | L | Generic. |
| 1908 | Year-round strategy | CONSOLIDATE | …marketing-uk#year-round | Informational | H | M | M | Section. |
| 1909 | Planning checklist, brief to report | CONSOLIDATE | …marketing-uk#checklist | Informational | H | M | M | Section. |

### Why these nine

Each has a UK-specific reason to exist: regulation, market structure, the calendar or commercial buyer intent. Each maps to a distinct query family:
- UK rules
- giveaways
- regulated products
- regions
- agency
- cost
- seasonal
- e-commerce
- the pillar

Only the hub targets "influencer marketing UK", and only the agency page targets "influencer marketing agency UK".

## Research record (checked 2026-10-10)

| Source | Type | Supports |
| --- | --- | --- |
| ASA/CAP and CMA, Influencers' guide (3rd ed., 23 March 2023; PDF text read in full) | Official guidance | When content is an ad; gifts, affiliates, own brand; accepted and discouraged labels; placement; 12-month rule; control test; sanctions; IMTB/ISBA |
| CMA, Who regulates hidden advertising? (PDF read in full) | Official | DMCC Act Part 4 replaced the CPRs from 6 April 2025; no control requirement; applies to brands, creators, intermediaries, platforms; Trading Standards roles incl. NI |
| CMA, guidance for brands; guidance for content creators (updated 3 Sept 2025); reviews guidance | Official | Brand duties for gifts and contracts; fake and concealed incentivised reviews |
| CMS law-firm summary of CMA enforcement guidance | Secondary | Direct fines up to 10% of global turnover |
| CAP advice, prize draws in social media (1 Sept 2021) | Official | Significant conditions, mechanics, random and independent selection, awards, joint promoters |
| Lewis Silkin on NI prize draws | Secondary | NI law aligned with GB from 27 April 2022 |
| CAP less healthy food guidance and ASA news | Official | Rule 15.19 from 5 January 2026; influencer section 6.3; gifting and affiliates likely count as payment |
| CAP Code section 15 | Official | Food and health claims |
| CAP advice on alcohol (under-25s; celebrities and influencers) | Official | Rule 18.16; 25% under-18 audience rule |
| ASA, strong-appeal gambling rules | Official | In force 1 October 2022; influencers in scope |
| CAP advice on prescription-only medicines and weight-loss POMs | Official | Rule 12.12; affiliate and referral rulings |
| FCA FG24/1 (26 March 2024) | Official | s21 FSMA; unauthorised finfluencers; standalone compliance |
| CMA fashion green claims guidance (18 Sept 2024); Green Claims Code | Official | Specific, evidenced environmental claims |
| CMA price transparency guidance CMA209 (18 Nov 2025) | Official | Total price upfront; drip pricing |
| HMRC, income from online platforms; GOV.UK VAT threshold | Official | Gifts count as income; £90,000 VAT threshold |
| ICO, cookies and similar technologies | Official | PECR consent affects analytics |
| IAB UK with IRM, UK creator market (2026) | Industry body | £966m in 2025 (+20.1%); £1.217bn forecast 2026; excludes amplification (2–3x per respondents) |
| ISBA Influencer Marketing Code of Conduct; ISBA contract templates | Industry body | Fee transparency, contract clauses |
| Welsh Government, Census 2021 Welsh language | Official statistics | 538,300 (17.8%) aged 3+ can speak Welsh |
| Retail Gazette (Nov 2024) on TikTok Shop; (23 July 2026) on YouTube Shopping Affiliate UK launch | Trade press | Creators as TikTok Shop affiliates; YouTube UK launch, 500-subscriber threshold, launch retailers |
| GOV.UK, online and distance selling | Official | 14-day cancellation rights |

**Dates computed and checked:**
- Black Friday: 27 November 2026
- Cyber Monday: 30 November 2026
- Mothering Sunday: 7 March 2027 (Easter is 28 March 2027)
- Father's Day: 20 June 2027
- weekdays for every date in the table

**Corrected during research:**
- **YouTube Shopping affiliate:** YouTube's help page still omits the UK, but the programme launched in the UK on 23 July 2026. A first draft said it wasn't available; corrected before publication.
- **Same risk for Australia:** the Australian pages rely on the same help-page list, which may also be stale (see follow-ups).

**Not used:**
- **TikTok Shop's own UK seller pages:** no response from this network or in Chrome.
- **Kolsquare and other vendor surveys:** commercial sponsors.
- **Statista-derived £1.3bn figures:** unclear method.
- **FTC labelling claims for the "UK vs US" comparison:** not verified.
- **The DMCC subscription-contracts regime:** start date not verified.

## Changes

- **New pages (9),** each with a hero SVG, FAQs (2–3, matching FAQ schema), `en-GB` schema and the hub breadcrumb (except the hub itself):
  - /blog/influencer-marketing-uk
  - /blog/influencer-advertising-rules-uk
  - /blog/choose-influencer-marketing-agency-uk
  - /blog/influencer-marketing-cost-uk
  - /blog/influencer-giveaways-uk
  - /blog/regulated-products-influencer-marketing-uk
  - /blog/regional-influencer-marketing-uk
  - /blog/seasonal-influencer-marketing-uk
  - /blog/ecommerce-influencer-marketing-uk
- **CTAs:** 9 entries in `BRAND_GUIDE_CTAS` with `UK:` topics. `BrandInquiryForm.tsx` maps "UK: Campaign Planning" → "Campaign Management" and "UK: Agency Selection" → "Influencer Marketing". These are insertions mirroring the AU entries; "UK: Budget" and "UK: Compliance" stay unmapped, as their AU equivalents are.
- **Technical SEO fix:** `og:locale` was hard-coded to `en_IN` for every page.
  - `buildMetadata` (`src/lib/metadata.ts`) now takes an optional `locale`.
  - `src/app/blog/[slug]/page.tsx` passes the post's `inLanguage`.
  - Result: UK pages output `en_GB`, Australian pages `en_AU`, and everything else stays `en_IN`.
- **Inbound links (link-only, no date change):**
  - international campaign playbook → UK hub
  - India compliance → UK rules
  - Australian rules → UK rules
- **Content map:** 9 rows added to `docs/blog-content-map.csv`.
- **Not changed:** redirects, URLs, forms' validation or submission, APIs, analytics code, mailer, `llms.txt`, homepage.

## Validation

- **Code:** `npx tsc --noEmit` clean; `npx eslint` clean on `uk-guides`, `blogCta.ts`, `BrandInquiryForm.tsx`, `metadata.ts` and the blog page; `npm run build` exit 0, **1,738** static pages (was 1,720; +2 routes per new article, as in earlier batches).
- **Crawl of the local production build:** 825 blog URLs, all 200; 9/9 new URLs in the sitemap; 0 broken internal links or anchors; 0 future sitemap dates.
- **All 9 new pages and the 3 linking pages:** `index, follow`, self-canonical, 1 H1, exactly 1 mid CTA and 1 bottom CTA, 5/5 valid JSON-LD, FAQ schema present, hero present on new pages. BlogPosting carries `inLanguage: en-GB` and `spatialCoverage: United Kingdom`; BreadcrumbList is Home › Blog › United Kingdom › page.
- **Text:**
  - 0 link-text mismatches; no duplicate titles or meta descriptions site-wide
  - no em dashes or banned phrases; British spelling scan clean
  - titles 39–59 characters; meta descriptions 142–155
- **Browser test** on /blog/influencer-marketing-uk (local build, gtag stubbed):
  - `blog_mid_cta_click` fired once (topic "UK: Campaign Planning", position "mid", `brand_inquiry`)
  - `blog_bottom_cta_click` fired once
  - the bottom link opened `/for-brands?src=influencer-marketing-uk&cat=Influencer+Marketing&pos=bottom&t=UK%3A+Campaign+Planning#inquiry` with Campaign Goal prefilled to "Campaign Management"
  - typing in Brand Name fired `blog_lead_form_start` once, with source article, position and intent
  - nothing was submitted
- **Form APIs:** `brand-inquiry`, `creator-application` and `contact` return 400 on `{}`.
- **Not tested:**
  - real email delivery and `blog_lead_form_submit`
  - a real-device mobile check (the template is shared with existing pages)
  - the live site (nothing deployed)

## Follow-ups

1. **Confirm the UK service model.** Can Kudozz contract and pay UK creators, invoice in GBP, handle VAT, and work UK hours? If yes, a UK landing page (separate from the blog hub) and firmer CTA copy become justified. Until then, the pages stay as buyer guides.
2. **Legal review:** have a UK advertising lawyer review the rules, giveaways and regulated-products pages before deployment. Re-check when the ASA/CMA influencer guide is reissued for the DMCC Act, and when CAP updates the less healthy food guidance.
3. **Australian YouTube claim:** re-check the Australian pages' YouTube Shopping affiliate statement; the help-page country list proved stale for the UK.
4. **Revisit with evidence:** 1906 (subscriptions) once the DMCC subscription regime's commencement is confirmed, and 1889 (professional services) with profession-specific rules.
5. **Search Console:** connect a UK property view so the cluster's impressions and queries can guide the next UK batch.
