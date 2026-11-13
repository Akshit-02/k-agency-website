# 08 · International SEO Strategy

**Builds on:** `reports/2027-global-transformation/02-global-market-research.md` (sourced market, platform and regulatory research per country, checked 10 Nov 2026), `09-international-market-opportunity-matrix.csv` and `12-international-url-architecture.md`. Those reports hold the market sizes, regulations and sources; this one adds what the November data shows and sets the next steps. **No search volumes are quoted:** no keyword volume source (Keyword Planner, DataForSEO) is configured, so demand evidence is Search Console impressions only.

## What the data shows

### Country performance (GSC, 5 Sep – 3 Nov 2026)

| Market | Clicks | Impressions | CTR | Avg pos | Kudozz delivery (owner-confirmed Oct 2026) |
|---|---|---|---|---|---|
| India | 2,499 | 112,188 | 2.2% | 7.8 | Yes (registered entity) |
| United States | 28 | 15,110 | 0.19% | 12.0 | **No** |
| United Kingdom | 15 | 3,396 | 0.44% | 12.1 | Yes |
| Canada | 6 | 1,320 | 0.45% | 8.7 | No |
| Germany | 3 | 1,037 | 0.29% | 7.6 | No |
| Australia | 8 | 906 | 0.88% | 9.1 | Yes |
| UAE | 5 | 670 | 0.75% | 7.9 | Yes |
| Singapore | 2 | 556 | 0.36% | 8.1 | Yes |
| Saudi Arabia | 5 | 337 | 1.5% | 7.6 | Yes |
| Qatar / Kuwait / Oman / Bahrain | 1 | 279 | – | 6–8 | Case by case |

### The international content hasn't surfaced yet

| Content set | Posts | Published | Posts with any impressions |
|---|---|---|---|
| GCC / UAE / Saudi guides | 65 | 4 Oct – 3 Nov | **0** |
| Australia guides | 26 | 4 Oct – 3 Nov | **0** |
| UK guides | 9 | 4 Oct – 3 Nov | **0** |
| `/markets/{uae, saudi-arabia, uk, australia, singapore}` | 5 | rebuilt Oct | **0** |

So the non-India impressions above come from **India-focused and creator-education pages** seen abroad, not from the market pages. The US's 15,110 impressions at 0.19% CTR are almost entirely creator how-to content, which matches the October finding.

This is part of the site-wide pattern in technical P0-1 (only 1 of 306 posts published after 3 October has impressions). **International SEO can't be judged until those pages are indexed.**

## Strategy by market

| Market | Priority | Search intent / local terminology | Current Kudozz coverage | Next step | Do not |
|---|---|---|---|---|---|
| **India** | 1 (core) | "influencer marketing agency/company in India", "influencer marketing services", city and state + agency, Hindi and regional creator terms ("regional influencer", "vernacular") | Homepage, new pillar, India shortlist, 26 state guides, ~800 articles | Win the commercial head terms (pillar, proof, internal links); grow regional and vernacular authority (a genuine differentiator) | Add more city shortlists |
| **UAE** | 2 | "influencer marketing agency Dubai", "UAE influencer permit", Arabic/English campaigns; diaspora | `/markets/uae` + ~40 guides | After indexing: link the market page from the top UAE guides; keep permit facts dated | Claim a UAE office, licence or the ability to issue NMA permits |
| **Saudi Arabia** | 3 | "influencer marketing Saudi Arabia", Mawthooq, Snapchat-first | `/markets/saudi-arabia` + KSA guides | Arabic only with a native editor; Snapchat and TikTok depth | Machine-translated Arabic pages |
| **UK** | 3 | "influencer marketing agency UK", ASA/CMA rules; "creator", "talent" | `/markets/uk` + 9 guides | Lead with the India–UK corridor and diaspora campaigns, where Kudozz has a real reason to be chosen | Generic "agency in London" pages |
| **Australia** | 4 | "influencer marketing agency Australia", ACCC/AANA, under-16 rules | `/markets/australia` + 26 guides | Keep compliance content dated; no new pages until indexed | City pages (Sydney/Melbourne) |
| **Singapore** | 4 | "KOL marketing Singapore", ASAS, MAS finfluencer rules | `/markets/singapore` | Monitor | New pages before delivery evidence |
| **Qatar / Kuwait / Oman / Bahrain** | 5 | thin search results (observed in Oct) | Single guides | Content only | Commercial pages until delivery is confirmed per market |
| **United States** | Not a delivery market | creator education, Indian brands entering the US | None commercial | Educational and cross-border content only; revisit if Kudozz confirms US delivery | Sell US services |
| **Europe** | None | – | – | No action (GSC impressions are creator education) | – |

## Architecture decisions (unchanged from October, reconfirmed)

- **Keep one English site on `www.kudozz.in`** with `/markets/{country}` landing pages and country guides under `/blog`. No subfolders (`/ae/`), subdomains or ccTLDs. Every page is English, so **hreflang isn't needed**: there are no language or regional alternates of the same content, and adding hreflang between different pages would be wrong. Revisit only if real Arabic pages are produced.
- Market pages already set Open Graph locale per market (`en_GB`, `en_AE`…) and `inLanguage`; their Service schema uses `areaServed` for the country. That is sufficient.
- **No URL migration.** None was made.

## Rules for any new international page

1. Delivery in that market is confirmed by Kudozz, in writing.
2. At least 60% unique, market-specific content: regulation, platforms, languages, local examples (claude-seo quality gate).
3. No claims of offices, teams, clients or licences that aren't verified.
4. It doesn't duplicate an existing market page or guide (check `05-keyword-url-map.xlsx`).
5. It's published only after the October cohort shows impressions, so you know new pages can surface at all.

## Measurement

- GSC → Performance, filter by country: impressions and clicks for UAE, Saudi Arabia, UK, Australia and Singapore, monthly.
- GSC → Pages: indexing state of `/markets/*` and the GCC/AU/UK guides.
- Leads: the inquiry form has no market field, but it records the entry page (`?from=market:uae`, `?from=service:…`) in the lead email. Count inquiries that start on market pages and international guides each month (owner data, not available to this audit). A market selector on the form was proposed in October and is still awaiting approval; this project didn't change form fields.
