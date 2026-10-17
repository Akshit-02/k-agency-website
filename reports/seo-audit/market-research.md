# Market research: India, UK, Singapore, UAE, Australia

Date: 2026-10-17.

**Data limits.** No Search Console, GA4, Keyword Planner or third-party keyword tool was connected, so this file contains **no search volumes, rankings, keyword difficulty or traffic figures**. SERP observations come from a US-hosted web search on 2026-10-17. Local Google results in each country were not checked and may differ. Every finding is marked either *observed* (seen in results or on the site) or *hypothesis* (needs validation with real data).

Kudozz's served markets (owner-confirmed 2026-10-12): India (primary), UAE, Saudi Arabia, UK, Australia, Singapore. No local offices, staff, clients, case studies or volume statistics are verified in any market, so no page may imply local presence.

## Current coverage by market

| Market | Market page | Articles aimed at the market | Notes |
| --- | --- | --- | --- |
| India | Homepage acts as the owner ("Best Influencer Marketing Agency in India") | 130 India-specific, plus most of the 663 market-neutral articles default to India | Deepest cluster: national, state and city agency guides, 37 industry pages, regional/vernacular, cost and compliance |
| UK | `/markets/uk` | 9 | Core set exists: guide, ASA/CMA rules, costs, agency choice, e-commerce, giveaways, regulated products, regional, seasonal |
| Singapore | `/markets/singapore` | 1 (`influencer-marketing-singapore`) | Rules covered with primary sources (ASAS, CPFTA, MAS guidelines effective 25 Mar 2026, MOH, PDPC). Thinnest market |
| UAE | `/markets/uae` | 20 UAE + 29 GCC-wide | Strong: permit, UGC Dubai, Arabic/English, Ramadan, sectors |
| Australia | `/markets/australia` | 25 | Strong: ACCC/AANA rules, under-16 rules, greenwashing, 12 sectors, costs, agency choice |

## SERP observations (observed, 2026-10-17)

| Query pattern | What ranks | Implication |
| --- | --- | --- |
| influencer marketing agency UK | Agency location pages (Socially Powerful, inBeat), listicles (Found, Influencer Marketing Hub, NinjaPromo, Social Shepherd, House of Marketers) | Listicles and London agencies dominate. Kudozz has no UK office to claim, so its realistic angle is cross-market delivery plus ASA/CMA-compliant process, with the comparison/selection guide as the entry point |
| influencer marketing agency Singapore | inBeat Singapore pages, IMH list, ContentGrip "2026 edition" list, HypeAuditor directory, AWISEE | Thin, list-driven SERP; HypeAuditor's directory lists only two agencies. A substantive selection guide could compete (hypothesis) |
| influencer marketing agency Dubai / UAE | IMH, NinjaPromo lists, Socially Powerful Dubai, Dotts Media House, CreatorDB | Lists and agencies with Dubai addresses. Licensing comes up in results, which supports keeping the permit page prominent |
| influencer marketing agency Australia | IMH lists, Social Soup, Hypefy, Mumbrella, HypeAuditor | Sydney and Melbourne agencies with self-reported creator networks |
| best influencer marketing agency in India | Self-promotional lists, Kofluence, GoodFirms profiles, HypeAuditor Mumbai | No independent ranking. Kudozz's own "best agencies" article uses evidence levels, which sets it apart from these lists |
| UGC agency UK / Australia | Marketplace landing pages (Influee country pages, Billo, Creator Flow), UK UGC agencies, Social Shepherd list | Templated marketplace pages dominate; a guide covering rights transfer, disclosure on UGC ads and budgeting from quotes would be differentiated (hypothesis) |
| UGC agency Dubai | MKV Creators, Hypebox, Webtonic city pages, promotional blogs | Kudozz already owns `ugc-agencies-dubai` |
| Singapore influencer disclosure rules | ASAS guidance (2016 baseline), compliance blogs, MAS finfluencer coverage | Kudozz's Singapore guide already cites ASAS and MAS primary sources |

Competitor patterns worth noting (observed):
- Large agencies publish one page per country or city. Several marketplace pages read as templated doorway pages. Kudozz's rule of building location pages only when there is local information is a differentiator, provided its own 30 specialist location pages stay distinct (see `content-audit.csv`: 21 pages share 30% or more of their body text with siblings).
- Agency claims ("300M+ creators", "750K+ creators", "#1") are self-reported. Kudozz has removed unverified stats, and the homepage "Best … in India" claim is the remaining exception.
- One fact-checked regulatory change affects every market: from 24 Aug 2026, YouTube counts views from the first frame, and the old definition is reported as engaged views (YouTube blog, 19 Aug 2026). View-based prices and benchmarks need a like-for-like basis.

## Market-by-market findings

### India
- **Commercial intent** (observed): "best influencer marketing agency in India" and city variants. The homepage and the comparison article share this intent. Keep the comparison article as the "best agencies" owner and the homepage as the brand/service owner.
- **Industry intent** (hypothesis): sector pages answer "influencer marketing for [industry] brands". 47 industry and city pages lacked a direct answer, and this batch added one to each.
- **Local terminology**: lakh/crore, Hinglish, vernacular, tier-2/3 cities, ASCI "Free gift" label. These are already used across the site.
- **Risk**: specialist city clusters (UGC, Instagram, YouTube, seeding, campaign management) may cannibalise each other and the general city pages. They are MONITOR items until Search Console data exists.

### United Kingdom
- **Commercial intent**: "influencer marketing agency UK/London", "UGC agency UK". The UGC page is the clearest gap (observed in the SERP; demand unverified).
- **Rules**: ASA CAP Code and CMA guidance, already covered with sources. British English is used on en-GB pages.
- **Trust requirement**: UK buyers expect a named team and case studies. Kudozz has neither verified, which limits conversion and needs owner input (see final report).

### Singapore
- **Commercial intent**: "influencer marketing agency Singapore". The SERP is thin and list-led.
- **Gaps** (hypothesis): agency selection, costs/budgeting and UGC. UK, Australia and the UAE each have an agency-selection page; Singapore doesn't.
- **Rules**: ASAS guidelines, CPFTA and MAS digital advertising guidelines (financial institutions vet, brief and monitor creators). Already sourced in the guide.
- **Scope**: wider Southeast Asian expansion is not an owner-confirmed market. Don't write SEA pages.

### United Arab Emirates
- Strongest international cluster. The advertiser permit (National Media Authority, enforced since 31 Jan 2026) is the key differentiator and already has its own owner page.
- **Re-check needed**: the NMA permit pages returned 502 in earlier checks, so the Media Council FAQ remains the cited source. Confirm against NMA when reachable.

### Australia
- Strong cluster (25 pages). Several sector pages are 540–650 words, so review their depth against Search Console before expanding.
- **Gap** (hypothesis): an Australia UGC guide, since marketplace pages dominate "UGC agency Australia".
- **Rules**: ACL, AANA Code, TGA, under-16 social media minimum age. Already covered.

## What would turn hypotheses into evidence

1. Connect Search Console for `https://www.kudozz.in` and export 16 months of queries × pages, with country filters for IN, GB, SG, AE and AU.
2. Run Keyword Planner (or a comparable tool) for the intent clusters in `keyword-intent-map.csv`, by country.
3. Check local SERPs from each country (VPN or Search Console's country filter) for the commercial queries above.
4. Confirm with the owner which services Kudozz actually delivers in the UK, Singapore and Australia, and which proof (case studies, named team, client logos with permission) can be published.
