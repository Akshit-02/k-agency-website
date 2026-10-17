# Content roadmap

Date: 2026-10-17. Status: **recommendations, none implemented.** Each new page below needs its gate to pass first: demand evidence from Search Console or Keyword Planner, plus owner confirmation that Kudozz delivers the service in that market. The site already has 889 articles and earlier batches found that most topics have an owner, so the default action is to update or consolidate, and to create a page only when no existing page can satisfy the intent.

## P1: decisions that block or shape other work

| # | Item | Owner input needed |
| --- | --- | --- |
| 1 | Connect Search Console (property `https://www.kudozz.in`) and export queries × pages by country | Access |
| 2 | Homepage title and H1 eyebrow say "Best Influencer Marketing Agency in India", a self-awarded claim with no evidence on the site. Option A: "Influencer Marketing Agency in India" (no superlative). Option B: keep it and publish evidence that substantiates it. Changing it risks movement on the site's main commercial query, so watch Search Console for 4 weeks after any change | Decision |
| 3 | Named authors. All 889 articles are bylined to team names ("Kudozz Strategy Team"). Real people with role and experience (Person schema, author pages) would strengthen E-E-A-T and AI citation. Requires real bios; none may be invented | Names, roles, consent |
| 4 | Proof: case studies, client logos or testimonials the owner can authorise. `case-studies.ts` and `testimonials.ts` hold only `isSample: true` placeholders, and `src/app/page.tsx` keeps them off the homepage "until real case studies and client quotes" exist. This is the biggest trust gap for UK, Singapore and Australia buyers | Approved material |
| 5 | FAQPage JSON-LD on every article: keep or remove (Google removed FAQ rich results in June 2026). Keeping it is harmless if FAQs stay visible | Decision |

## P2: new pages, gated on demand evidence

| Market | Proposed page | Why | Gate | Must not |
| --- | --- | --- | --- | --- |
| Singapore | How to choose an influencer marketing agency in Singapore | UK, Australia and the UAE each have one; the SERP is list-led and thin | Search Console impressions for SG agency queries, or Keyword Planner volume | Claim a Singapore office, clients or creator database |
| UK | UGC for UK brands: rights, disclosure on UGC ads and budgeting | SERP dominated by marketplace landing pages; no UK UGC page exists | Same, plus owner confirms UGC delivery in the UK | Publish GBP rate tables |
| Australia | UGC for Australian brands: ACL, AANA and paid-ad usage rights | Same pattern as the UK; `creator-content-paid-ads-australia` covers only part of it | Same | Duplicate `creator-content-paid-ads-australia`; merge into it if overlap exceeds half |
| Singapore | Influencer marketing costs in Singapore (cost factors, not rate cards) | Only market without a cost page | Demand evidence | Unsourced SGD rates |

## P2: updates to existing pages

| Page | Update | Confidence |
| --- | --- | --- |
| `youtube-influencer-rates-india` | Replace the vague unsourced range in "Indicative market benchmarks" with cost-factor guidance, or cite dated published guides the way `influencer-marketing-cost-india` does | high (owner rule) |
| 30 specialist location pages (UGC, Instagram, YouTube, seeding, campaign management × 6 markets) | Reduce shared boilerplate; 21 share 30% or more of their body text with siblings. Consolidate into the India page with a 301 if Search Console shows no distinct queries (owner chose six per cluster; MONITOR) | medium |
| `influencer-marketing-uk`, `influencer-marketing-cost-uk`, AU sector pages under 650 words | Expand only where Search Console shows impressions | medium |
| `podcast-advertising-compliance`, `x-influencer-marketing-compliance`, X/podcast contract pages | Cite primary sources or consolidate into their platform pillars | medium |
| `uae-advertiser-permit` and the UAE hub | Re-check against the National Media Authority pages when reachable | high |
| Fintech vs personal finance; D2C guide vs D2C funnel; negotiation pair; attribution vs incrementality | Consolidation candidates already in the prior register; decide with Search Console data | medium |

## P3: hygiene

- 371 blog descriptions over 160 characters: rewrite at sentence level in batches by cluster, never by truncation. Listed in `content-audit.csv` (`flags`).
- 76 brand articles under 600 body words: review each against Search Console before expanding or merging.
- Prose em dashes (21 articles with five or more): sentence-level edits when an article is next revised.
- `og:locale="en"` on 65 GCC articles: set `en_AE` for UAE-led pages if the owner wants a territory.

## Not recommended

- Swapping the country name in existing articles to make UK, Singapore, UAE or Australia versions (doorway risk; the brief also rules it out).
- More "best [service] agencies in [city]" clusters until the existing 30 pages prove distinct in Search Console.
- Southeast Asia pages beyond Singapore (not an owner-confirmed market).
- An `llms.txt` overhaul as a ranking tactic. `public/llms.txt` exists; keep it accurate, but there's no evidence it drives inclusion.
