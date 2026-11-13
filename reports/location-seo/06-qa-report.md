# 06 — QA Report (Location SEO, Wave 1)

Validated 13 November 2026 on a local production build (2,206 pages), using Playwright with real Chrome.

| Check | Result |
|---|---|
| Duplicate content (doorway risk) | ✅ Pairwise 5-gram Jaccard overlap between the 9 pages: **max 0.13** (Bengaluru vs Chennai), **mean 0.10**. For comparison, the existing specialist influencer city listicles score **up to 0.49** on the same measure. Shared text is limited to the disclosure, selection criteria and Kudozz profile |
| Duplicate titles and descriptions | ✅ All unique (titles 52–60 rendered, metas 140–160) |
| Keyword cannibalisation | ✅ One page per location for all four keyword variants; no overlap with influencer listicles (different service), which are cross-linked |
| Competitor accuracy | ✅ All 36 verified on the agencies' own sites (services + presence), with sources and dates recorded. No agency appears on two pages; two India-page clashes were fixed and the replacements lead-verified on 13 Nov 2026 |
| Official website links | ⚠️ Domains are shown as text and kept in data and research logs. Live links are blocked by site policy (decision needed; see 01 §4) |
| Kudozz service accuracy | ✅ Shared profile matches `src/content/social-media-management.ts`: India, remote, no offices, scoped items, no clients, results or prices |
| CTA placement | ✅ Exactly one mid CTA (after the comparison and local sections) and one end CTA; copy hand-written per city |
| Mobile layout | ✅ 0/9 pages overflow at 390 px; comparison tables scroll inside their container |
| Schema validity | ✅ BlogPosting (with `mentions`, `spatialCoverage`), BreadcrumbList (with India parent) and FAQPage all parse; no ratings or LocalBusiness |
| Canonical tags | ✅ Self-referencing |
| Sitemap | ✅ All 9 included |
| Internal links | ✅ 0 broken across the 29 pages built this round |
| Build errors | ✅ None; tsc and eslint clean; 0 console errors |
| Forms, APIs, env, analytics | ✅ Untouched |

## Issues requiring manual review

1. **Weaker competitor records** (disclosed on-page):
   - Rioconn (Ahmedabad): no street address published.
   - Clicks and Co Media (Pune): no street address.
   - Social Beat (India): no addresses.

   Consider swapping Rioconn if a better-documented Ahmedabad agency is preferred.
2. **Re-verification:** re-verify all 36 records before publishing and every six months. During research, two candidate domains had lapsed and one now hosts betting content.
3. **Local facts:** check the local-context facts per page (sources in `03-competitor-research.md`). Examples:
   - Ganeshotsav as a Maharashtra state festival (AIR, July 2025)
   - The Sawai Gandharva 2025 dates (Pune)
   - Invest India sector statements
   - UNESCO listings (Garba 2023, Durga Puja 2021)
4. **Publisher disclosure and Kudozz-first ordering:** these are transparent but self-interested. Review that the wording meets your standards and Google's guidance on reviews and ranking content.
5. **Not yet run:** Rich Results Test and Lighthouse (they need a staging URL).
