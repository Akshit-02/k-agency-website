# Kudozz international SEO, AEO, GEO and inbound-lead audit (2026-10-12)

Companion files:

- `docs/international-url-inventory-2026-10.csv`: every indexable URL (905) with status, type, market, title, description, H1, word count, inbound links, schema, canonical, sitemap, CTA links and the action taken or recommended.
- `docs/service-location-matrix-2026-10.csv`: CREATE / UPDATE / CONSOLIDATE / SKIP decisions for service × location pages.
- Earlier records this audit builds on: `docs/seo-master-audit-2026-10.md`, `docs/location-seo-audit.md`, and the market batch audits (`uae-gcc-*`, `gcc-*`, `australia-*`, `uk-seo-audit-*`).

**Verified vs. assumed.** Everything marked *verified* was checked in this session: by crawling the production build, reading source, calling the API, or reading a primary source. Nothing here uses search volume, rankings, impressions, CTR or conversion data, because none of it was available (see §2). Priorities are judgements about intent, evidence and business fit, not traffic forecasts.

---

## 1. Executive summary

Kudozz already had a large, well-built informational layer: 825 articles, including 26 UAE, 12 Saudi, 23 wider-GCC, 26 Australia and 9 UK guides. Technically the site was clean: every URL returned 200, with no duplicate titles and valid JSON-LD. The main gaps were commercial and in trust:

1. **There was no commercial page for any market outside India.** Organization and Service schema said `areaServed: India`, and every international guide's CTA sent readers to an India-framed inquiry page. Singapore had **zero** pages.
2. **Unverified or misattributed claims were live.** /about showed "40k+ creators, 2k+ campaigns, 5.2B+ reach", figures that `public/llms.txt` itself described as illustrative. The homepage showed four uncited statistics, including a "92%" figure attributed to creators that is not supported as written.
3. **26 state pages were titled "Best Influencer Marketing Agencies in [State]" but named only Kudozz**, under an H2 of the same name. That is the self-ranking pattern this brief rules out.
4. **Lead measurement was blind outside the blog.** GA events fired only for leads arriving from blog CTAs. Service-page bottom CTAs were tagged `src=homepage`, so those leads were misreported as homepage leads. The lead email did not show the market or CTA topic.

All four were fixed in this session (§10–§15). The owner confirmed on 2026-10-12 that Kudozz delivers campaigns in all six markets. The new market pages say so, but they do not claim local offices, staff, clients or results, because none of those are verified.

**What this does not prove:** none of these changes has measured impact yet. They are expected to improve eligibility and lead quality. Whether rankings, traffic or qualified leads move has to be measured (§19).

---

## 2. Data access and limitations

| Source | Status |
| --- | --- |
| Repository and production build | Full access. Built and crawled locally (Next.js 16.3.4). |
| Live site (www.kudozz.in) | Reachable. 899 sitemap URLs before this change, matching the local build. Apex redirects to www with a 308. |
| Google Search Console | **Not available.** No queries, impressions, CTR, positions or country splits. |
| GA4 (G-HM12X0L35J) | **Not available** for reading. The event code was inspected, not observed firing. |
| CRM / lead inbox | **Not available.** Qualified and unqualified leads could not be separated. |
| Keyword tools | None. **No search volumes are stated or estimated anywhere.** |
| Browser automation | The Chrome extension was not connected, so there was no visual or mobile check and no live `dataLayer` check. |

---

## 3. Technical audit findings

**Stack (verified from source).** Next.js 16.3.4 App Router, React 19, TypeScript, Tailwind 4 and Framer Motion. Content lives as TypeScript data in `src/content/*` (blog posts are `BlogPost` objects aggregated in `src/content/blog.ts`). Every page is statically generated (1,744 pages after this change). SEO helpers are in `src/lib/metadata.ts` (title, canonical, OG) and `src/lib/schema.tsx` (JSON-LD). The sitemap and robots files are `src/app/sitemap.ts` and `robots.ts`. There are 35 permanent redirects in `next.config.ts`. GA4 is loaded in `layout.tsx`. Forms use react-hook-form and Zod, posting to `/api/*`, which calls `src/lib/leads.ts` and then the Nodemailer `src/lib/mailer.ts` (marked `server-only`). There is no test suite; checks are lint, `tsc` and build.

**Crawl results (production build, crawled from `/` plus the sitemap):**

| Check | Before | After |
| --- | --- | --- |
| URLs (all 200) | 899 | 905 (+6 market pages) |
| Not in sitemap / in sitemap but not linked | 0 / 0 | 0 / 0 |
| Duplicate titles / descriptions / H1s | 0 / 0 / 0 | 0 / 0 / 0 |
| Pages without exactly one H1 | 0 | 0 |
| Canonical mismatches, noindex, invalid JSON-LD | 0 | 0 |
| Broken internal links | 0 | 0 |
| Orphans | /privacy-policy, /terms | same (see §14) |
| hreflang | none | none (correct, see §7) |
| Titles > 60 chars | 148 | 156 (state-page titles got longer; Google truncates rather than penalises) |

**Issues found and fixed:**

1. Footer "Case Studies" linked to `/for-brands#work` on every page, but that section is commented out. The link was removed.
2. Sitemap `<lastmod>` for every static page was the build time (`new Date()`), which tells crawlers nothing. It is now omitted for static pages; blog posts keep their real dates.
3. `StatCounter` renders "0" in server HTML for numeric stats until hydration. Cited figures are now plain text, so the real numbers are in the HTML.

**Not changed:**

- 6 lint warnings (unused imports in contact/footer/for-brands) were pre-existing and are unrelated.
- 419 meta descriptions run over 160 characters. Google rewrites or truncates them; that is not an error, so they are left for content refreshes.

---

## 4. Service inventory (verified from `src/content/services.ts` and rendered pages)

| URL | Service | Primary intent | Before → after |
| --- | --- | --- | --- |
| /services/campaign-strategy | Influencer marketing strategy | influencer marketing strategy services | 516 → 639 words |
| /services/creator-discovery | Creator discovery & matchmaking | creator/influencer discovery services | 552 → 663 |
| /services/outreach-management | Outreach & campaign management | influencer campaign management services | 520 → 621 |
| /services/social-campaigns | Multi-creator social campaigns | social media influencer campaigns | 413 → 520 |
| /services/product-launches | Product launch campaigns | product launch influencer marketing | 433 → 535 |
| /services/ugc-campaigns | UGC campaigns | UGC marketing agency | 464 → 572 |
| /services/ambassador-programs | Brand ambassador programs | brand ambassador program services | 435 → 533 |
| /services/reporting | Reporting & performance tracking | influencer campaign reporting | 482 → 594 |

Each page already had a value proposition, who it's for, process, deliverables, benefits, FAQs (with FAQPage schema), guide links and a CTA. **Missing before:** what the client must provide, how success is judged, and where the service is offered. Related services always showed the first three services.

**Added:**

- "What we need from you" and "How success is measured" sections (process facts, not performance claims)
- "Where we run this service", linking all five market pages
- related services that rotate to each page's neighbours
- a lead-attributed CTA

Service names, slugs and titles are unchanged. No new service pages were created: industry service pages (D2C, beauty) remain the P2 recommendation from the previous audit and need owner input on actual industry experience.

Talent management and paid-media buying are **not** Kudozz services (`services.ts` FAQ: "paid media buying is typically executed by your team"), so no pages target them.

---

## 5. Market opportunity matrix

Evidence strength: **H** = primary regulatory sources plus an existing content cluster; **M** = primary sources, no cluster; **L** = no primary or demand evidence.

| Market | Main buyer types | Priority intents | Regulatory considerations (primary sources on page) | Kudozz URLs | Action | Evidence | Priority | Main risks |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| India | D2C, FMCG, beauty, fintech, B2B/SaaS | best agency India, cost, regional-language, state/city agency | ASCI influencer guidelines; 1,015 influencer ads investigated in FY24-25, 98% needed changes | Homepage, 8 services, India pillar, 34 state/city guides, ~600 topic guides | Fixed 26 self-ranking state pages; cited stats | H | 1 | Self-published "best" lists; programmatic X/podcast matrix |
| UAE | Retail, beauty, F&B, hospitality, real estate, fintech, events | agency Dubai/UAE, UGC Dubai, permit | Advertiser Permit (Decree-Law 55/2023, enforced 31 Jan 2026, NMA); Visitor Advertiser Permit; SCA finfluencer rules; PDPL | 26 guides + **/markets/uae** | CREATE market page | H | 1 | Competitive SERP of local agencies; visiting-creator permits |
| Saudi Arabia | FMCG, e-commerce, gaming, beauty, automotive | agency KSA/Riyadh, Mawthooq | Mawthooq (GAMR); PDPL (14 Sep 2023) | 12 guides + **/markets/saudi-arabia** | CREATE; retitled Riyadh guide | H | 2 | Arabic-first SERPs; Arabic content not in scope |
| Qatar / Kuwait / Oman / Bahrain | Retail, F&B | country guides | Qatar MoC licence; Kuwait Decree-Law 102/2026; Oman Decision 619/2022; Bahrain no specific law | 3 guides + GCC playbook | SKIP market pages | M | 4 | Thin demand; rules still changing (Kuwait) |
| UK | D2C, e-commerce, regulated products, B2B | agency UK/London, ASA rules, cost | ASA/CAP + CMA guide; DMCC Act Part 4 (6 Apr 2025, fines up to 10% of turnover); LHF food rules (5 Jan 2026); FCA FG24/1 | 9 guides + **/markets/uk** | CREATE | H | 2 | Very competitive; no UK proof points |
| Australia | E-commerce, beauty, health, F&B, tourism | agency Australia, ACCC rules, cost | ACL/ACCC; AANA Code 2.7; TGA testimonial ban; under-16 minimum age (Dec 2025) | 26 guides + **/markets/australia** | CREATE | H | 2 | No AU proof points |
| Singapore | E-commerce (Shopee/Lazada), beauty, fintech, tech/B2B | agency Singapore, disclosure rules | ASAS Guidelines 2016 (3.1, 3.5, 3.6); CPFTA; MAS FSG-03 (effective 25 Mar 2026); MOH HCSAR; PDPA DNC | **/markets/singapore** (only page) | CREATE | M | 2 | Zero supporting content; one page carries the market |

**Search-intent observations (from SERP inspection, not volume data):**

- "best influencer marketing agency in Singapore" returns self-published and vendor listicles (NinjaPromo, Ainfluencer, Influencer Marketing Hub) plus Clutch/HypeAuditor directories.
- The 2026-10-01 audit found India SERPs follow the same pattern.
- The winnable commercial asset is a credible service page plus a presence on independent directories, not a self-ranking listicle.

---

## 6. Keyword and search-intent map

| Cluster | Intent | Owner URL | Supporting |
| --- | --- | --- | --- |
| influencer marketing agency (India) / best … India | Commercial | `/` | India pillar (comparison), /services |
| influencer marketing agency Dubai / UAE / Abu Dhabi | Commercial | `/markets/uae` | `/blog/influencer-marketing-uae`, `choose-…-uae` |
| influencer marketing agency Saudi Arabia / Riyadh | Commercial | `/markets/saudi-arabia` | Saudi hub, `choose-…-saudi-arabia` (retitled) |
| influencer marketing agency UK / London | Commercial | `/markets/uk` | UK hub, `choose-…-uk` |
| influencer marketing agency Australia / Sydney | Commercial | `/markets/australia` | AU hub, `choose-…-australia` |
| influencer marketing agency Singapore | Commercial | `/markets/singapore` | general guides |
| how to choose an agency in [country] | Evaluation | `choose-influencer-marketing-agency-[country]` | market page |
| influencer marketing in [country] | Informational | country hubs | market page (contextual link added) |
| [country] influencer rules / permit / licence | Informational | rules guides | market page "Rules" section |
| [service] services | Commercial | `/services/[slug]` | guides listed on each service page |
| best influencer marketing agency in [Indian state] | Commercial/evaluation | state guide (retitled "How to choose…") | India pillar |

---

## 7. Architecture decisions

- **Kept the single domain (www.kudozz.in) and all existing URLs.** No migrations or redirects. Country subdirectories (`/ae/`, `/uk/`) would mean duplicating an English site with no language difference, which carries cannibalisation risk for no benefit.
- **New `/markets` hub and `/markets/[slug]`** for the commercial layer, linked from the homepage ("Beyond India"), the footer ("Markets We Serve"), /about, every service page and the four country hub articles.
- **No hreflang.** The market pages are different content in English, not language or regional alternates of one page, so hreflang would be incorrect. Each page has a self-referencing canonical. Market pages set `og:locale` (en_AE, en_GB, en_AU, en_SG) and schema `inLanguage` for their English variant.
- **No fake locality.** No addresses, phone numbers, LocalBusiness schema or office pages. Every market page states that Kudozz Studios Private Limited is registered in India and that contracting and hours are agreed per campaign.

---

## 8. CREATE / UPDATE / CONSOLIDATE / SKIP

The full table is in `docs/service-location-matrix-2026-10.csv`. Summary:

- **CREATE (6):** `/markets`, `/markets/uae`, `/markets/saudi-arabia`, `/markets/uk`, `/markets/australia`, `/markets/singapore`.
- **UPDATE (41 URLs):**
  - 26 state guides
  - 8 service pages
  - homepage and /about
  - 4 country hubs (contextual link to their market page)
  - `choose-influencer-marketing-agency-saudi-arabia`, retitled from "Influencer Marketing Agency in Riyadh…" to avoid competing with `/markets/saudi-arabia`
- **CONSOLIDATE (into market pages, no new URLs):** Abu Dhabi, Sharjah, Riyadh/Jeddah, London/Manchester/Birmingham, Sydney/Melbourne.
- **SKIP:**
  - Qatar, Kuwait, Oman and Bahrain market pages (guides exist)
  - UGC or campaign-management × country pages
  - a Singapore rules guide for now (P3)
- **REVIEW (no change, needs Search Console data):** 34 URLs.
  - 27 in the platform × topic matrix: X, podcast, Pinterest, Reddit, Snapchat and LinkedIn × ROI, metrics, campaign ideas, strategy, mistakes and partnerships. Title overlap is 0.78–0.88 Jaccard.
  - 7 under 800 words, including `instagram-algorithm-changes-what-still-works` at 471 words.
  - Smallest north-eastern state and UT pages: consolidation candidates.

---

## 9. Research sources and the claims they support

| Claim (where used) | Source | Checked |
| --- | --- | --- |
| US creator ad spend projected at $37B in 2025, +26%; 48% of buyers call creators a "must buy" (homepage) | IAB press release, 20 Nov 2025: iab.com/news/creator-economy-ad-spend-to-reach-37-billion-… | 2026-10-12 |
| ASCI investigated 1,015 influencer ads in FY24-25, 98% needed modification (homepage) | ASCI press release, 28 May 2025 (PDF on ascionline.in) | 2026-10-12, read in full |
| UK creator partnership revenue £966m in 2025 (homepage, /markets/uk) | IAB UK with IRM (in `uk-guides/shared.ts`) | 2026-10-10 |
| Six in ten Australian shoppers pass through creator content (/markets/australia) | IAB Australia Creator Connect 2026 | 2026-10-09 |
| Singapore disclosure rules: clauses 3.1(c)/(d), 3.5(b), 3.6 | ASAS Guidelines for Interactive Marketing Communication & Social Media (PDF, effective 29 Aug 2016) | 2026-10-12, read in full |
| CPFTA: false or misleading claims are an unfair practice | asas.org.sg/Resources/CPFTA | 2026-10-12 |
| MAS FSG-03, effective 25 Mar 2026, covers content creators | mas.gov.sg guideline page and 25 Sep 2025 media release | 2026-10-12 |
| Influencers may not advertise licensable healthcare services (HCSAR 2021) | MOH, 9 Jan 2024 | 2026-10-12 |
| PDPA Do Not Call duties | PDPC | 2026-10-12 |
| 5.33m social media identities (90.6%); ad reach for YouTube 90.6% and TikTok 75.4% of adults | DataReportal Digital 2026: Singapore (Oct 2025 data) | 2026-10-12 |
| UAE Advertiser Permit, visitor permit, SCA finfluencer rules, PDPL | `gcc-guides/shared.ts` register (NMA, Pinsent Masons, UAE legislation portal) | 2026-10-09 |
| Mawthooq/GAMR, Saudi PDPL | `gcc-guides/shared.ts` register | 2026-10-09 |
| ASA/CMA guide, DMCC Act, LHF rules, FCA FG24/1 | `uk-guides/shared.ts` register | 2026-10-10 |
| ACCC, AANA 2.7, TGA, eSafety minimum age | `au-guides/shared.ts` register | 2026-10-09/10 |
| AI features: no special schema or files needed; SEO best practices apply | Google Search Central, "AI features and your website" (updated 2025-12-10) | 2026-10-12 |

Singapore's four official languages come from Article 153A of the Constitution (Singapore Statutes Online). That page returned 403 to automated fetching, so the claim rests on the well-established constitutional text.

---

## 10. Technical SEO changes

- `src/app/sitemap.ts`: market pages added; build-time `lastModified` removed from static entries.
- `src/lib/schema.tsx`:
  - `SERVED_COUNTRIES` drives Organization and Service `areaServed`, now six countries instead of India only
  - ContactPoint `areaServed` lists six country codes
  - new `marketServiceSchema` (Service with one country)
- `src/config/site.ts`: Organization description names the six markets; footer link added; broken "Case Studies" link and the unverified `stats` removed.
- Schema on market pages: Service, BreadcrumbList and FAQPage. FAQs are the visible ones, and all markup matches visible content (verified in the crawl: 0 invalid JSON-LD).

## 11. AEO / GEO improvements

- Market pages lead with a direct answer: what Kudozz does there, for whom, and how. They use descriptive H2s ("Rules we plan around in the UK", "What to send us for a proposal") and 4–5 visible FAQs that answer buyer questions, each starting with "Yes"/"No" where applicable. Every regulatory statement is linked to its source.
- Entity consistency: llms.txt, the Organization description, /about, the homepage FAQ and the market pages now give the same facts: India primary, plus five markets, India-registered, no office claims, no volume figures.
- **llms.txt** was updated, but it is not treated as a ranking lever. Google states that no special AI files or schema are needed.
- No hidden text, no keyword blocks, no repetitive entity stuffing.

## 12. Service-page and blog changes

- **Service pages:** see §4.
- **26 state guides:**
  - titled "How to Choose the Best Influencer Marketing Agency in [State]", with seoTitle "Best Influencer Marketing Agency in [State]: How to Choose"
  - the "Best Influencer Marketing Agencies in [State]" H2 is now "How Kudozz Works With [State] Brands" (same anchor id)
  - each page now discloses that the section describes Kudozz's own services and is not an independent ranking
  - `updatedAt: 2026-10-12`, because the content changed
- **The 8 researched location pages** (India, Maharashtra, Gujarat, Karnataka, Tamil Nadu, Delhi, Mumbai, Ahmedabad) already list four verified alternatives and an independence disclaimer, so they were left unchanged.
- **4 country hubs:** one contextual paragraph linking to the market page, placed before the FAQs. This is a text link, not a third CTA, so the two-CTA convention (`BlogMidCTA` + `BlogBottomCTA`) holds: 0 articles have more than 2 inquiry CTAs.

## 13. CTA, form and analytics changes

| Change | File | Verified |
| --- | --- | --- |
| Budget options show INR and USD with the same buckets (owner-approved) | `BrandInquiryForm.tsx` | Rendered on /for-brands |
| Hidden `ctaTopic`, `ctaPosition`, `leadSource` sent with each inquiry and shown in the lead email ("CTA Topic / Market", "CTA Position", "Entry Page") | form, `validations.ts`, `leads.ts` | API accepts them and rejects over-long values (400). The form clips them first, so a mangled URL can't block a real lead. |
| `leadSource`: `?from=` (service/market/about/contact/markets) → `homepage` → `blog:<slug>` → `for-brands` | form | Code path |
| New GA4 events `brand_lead_form_start` and `generate_lead`, fired for **every** brand inquiry, with lead_source, cta_topic, cta_position, campaign_goal, budget_range, page_path | `blogAnalytics.ts`, form | Code only; not observed in GA (no browser or GA access) |
| Existing `blog_mid_cta_click`, `blog_bottom_cta_click`, `blog_lead_form_start` and `blog_lead_form_submit` unchanged (same names, params and trigger conditions) | — | Code diff |
| `FinalCTA` accepts `inquiryHref`, so /services, service pages, /about and market pages no longer report as `src=homepage` | `FinalCTA.tsx` | Rendered hrefs checked |
| Market CTAs carry `t=<Market>: Market Page`, which pre-selects the goal and labels the email | market route | Rendered hrefs checked |

There is no double counting: the new events have different names, and each fires once per form instance (a ref guard for start; one call per successful submit).

**GA4 action for the owner:** mark `generate_lead` as a key event, and register `lead_source` and `cta_topic` as custom dimensions.

## 14. Security findings

- **Secrets:** `src/lib/mailer.ts` is `server-only` and reads `EMAIL_FROM`, `EMAIL_TO` and `EMAIL_APP_PASSWORD` (no `NEXT_PUBLIC_` prefix). There are 0 references to `NEXT_PUBLIC_APP_PASSWORD`, `NEXT_PUBLIC_FROM_EMAIL` or `NEXT_PUBLIC_TO_EMAIL` in `src`. `.env` is git-ignored and has never been committed (git log). **No rotation is needed based on the repo.** The hosting provider's environment settings could not be seen; if old `NEXT_PUBLIC_*` variables still exist there, delete them.
- **Forms:**
  - Zod validation on server and client
  - honeypot
  - per-IP 20-second cooldown (in-memory, best effort)
  - HTML-escaped email templates
  - generic error messages
  - All unchanged.
- **P1 owner item:** `/privacy-policy` describes itself as a "placeholder… should be reviewed by legal counsel before publication" and is unlinked from the site. Kudozz now collects leads from the UK (UK GDPR), Singapore (PDPA), the UAE and Saudi Arabia (PDPLs) and India (DPDP Act 2023). Get a counsel-reviewed policy, then restore the footer legal links (commented out in `Footer.tsx`) and add a privacy link beside the form. Legal text was deliberately not written in this audit.

## 15. Redirects and structured data

- Redirects: none added or changed (35 existing, no chains). No URL was renamed.
- Structured data: see §10. No reviews, ratings, awards, addresses or LocalBusiness markup were added.

## 16. Tests and results

| Check | Baseline | After |
| --- | --- | --- |
| `npx tsc --noEmit` | pass | pass (after `next typegen` for the new route) |
| `npm run lint` | 0 errors, 6 warnings | 0 errors, the same 6 pre-existing warnings |
| `npm run build` | pass, 1,738 pages | pass, 1,744 pages |
| Crawl (status, H1, canonical, schema, sitemap, links) | 899 URLs, 0 issues except 2 orphans | 905 URLs, 0 new issues |
| API `/api/brand-inquiry` | — | valid + honeypot returns 200 (no email sent); invalid returns 400 with field errors; over-long hidden field returns 400 (now clipped client-side) |
| Two-CTA convention | 0 posts > 2 | 0 posts > 2 |
| Email delivery | **Not tested.** Sending a real lead would email the live inbox. Mailer code is unchanged; only three fields were added to the template. |
| Mobile, accessibility, Core Web Vitals | **Not tested** (no browser connection). The new pages reuse existing responsive components and patterns; H1s are not opacity-faded. |
| GA events firing | **Not tested** in a browser. |

There is no automated test suite in the repo, so none was run.

## 17. Remaining risks and limitations

- No demand data. Market priorities are judgement-based, and Singapore rests on one page.
- Market pages have no proof points: no case studies, clients or results, because none are verified. The commercial SERPs in every market include agencies that show them. **Real, permissioned case studies are the largest remaining gap for both conversion and credibility.**
- Regulatory content changes quickly. The Kuwait media law (Oct 2026), the UAE NMA transition and DMCC guidance updates are all moving. Each market page shows "Rules last checked October 2026".
- Saying that Kudozz delivers in six markets rests on the owner's confirmation (2026-10-12). If delivery in any market changes, update `src/content/markets.ts`, `SERVED_COUNTRIES` and llms.txt together.
- The privacy policy is a placeholder (§14).

## 18. Prioritised next steps

| P | Item | Effort | Dependency |
| --- | --- | --- | --- |
| 1 | Counsel-reviewed privacy policy and terms; restore footer links; add a privacy link at the form | S (dev) | Legal |
| 1 | Connect Search Console (domain property) and GA4 key events; create a baseline export (§19) | S | Owner access |
| 1 | Send one real test inquiry from a market page and confirm the email shows topic, position and entry page | S | Owner inbox |
| 2 | Add 1–2 permissioned case studies per priority market (UAE first), then re-enable `FeaturedCampaigns` | M | Client permission |
| 2 | Get listed on independent directories (Clutch, Sortlist), with real reviews only | S | Owner |
| 2 | Industry service pages (D2C/e-commerce first) per `seo-master-audit-2026-10.md` §8 | M | Owner confirms experience |
| 2 | Telangana, West Bengal and Uttar Pradesh researched lists (`location-seo-audit.md` §7) | M | Research |
| 3 | Singapore rules guide (sources in §9 already gathered) once SG impressions appear | S | Search Console |
| 3 | Consolidate the 27-URL platform × topic matrix into platform pillars where Search Console shows overlap or no impressions | M | Search Console |
| 4 | Consolidate the smallest north-eastern state and UT guides into the India pillar if they earn no impressions after 3 months | S | Search Console |
| 4 | Qatar or Kuwait market pages only if those countries show impressions and leads | S | Data |

## 19. Measurement plan

**Baseline (take within a week of deploy):** a Search Console 3-month export by page, query and country, and GA4 lead events by `lead_source`. Before this change there was no reliable baseline for non-blog leads, so the first 4 weeks of `generate_lead` data become the baseline.

| Metric | Source | Segment | Review |
| --- | --- | --- | --- |
| Indexation of /markets/* and the retitled state pages | Search Console URL inspection / Pages | per URL | 2 and 6 weeks |
| Impressions and clicks for "influencer marketing agency [country/city]" queries | Search Console | country = AE, SA, GB, AU, SG, IN | monthly |
| CTR on state guides (old vs new titles) | Search Console | 26 URLs | 8 weeks before/after |
| `brand_lead_form_start` → `generate_lead` rate | GA4 | lead_source, device | monthly |
| Leads by market | lead email "CTA Topic / Market" + phone country code, logged in a sheet or CRM | market | monthly |
| Qualified-lead rate (brand, budget fits, market served) | CRM / manual tagging | market, lead_source | monthly |
| Pages with impressions but no clicks; pages with visits but no leads | Search Console + GA4 | template | quarterly |

**Decision rules:**

- If a market page earns impressions without clicks after 8 weeks, rework its title and description.
- If it earns clicks without leads, test the CTA and add proof points.
- If a REVIEW URL earns no impressions in 90 days and overlaps a pillar, consolidate it with a 301.
- Don't expect ranking or lead changes on a fixed timeline. Judge on the trend after indexing.
