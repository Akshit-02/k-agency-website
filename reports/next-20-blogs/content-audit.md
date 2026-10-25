# Content audit: next 20 content opportunities, batch B (2026-10-24)

## Scope

- **Site:** Next.js (App Router) with statically generated blog posts. Content is TypeScript data (`BlogPost` in `src/content/blog.ts` plus imported clusters under `src/content/*`), served at `/blog/[slug]`. Metadata, canonical tags, BlogPosting, BreadcrumbList and FAQPage JSON-LD come from the shared template. The sitemap is `src/app/sitemap.ts`, and redirects are in `next.config.ts`.
- **CTAs:** the shared `BlogMidCTA` (placed automatically at a section break near the middle) and `BlogBottomCTA`, with copy resolved in `src/lib/blogCta.ts`. Forms, API routes and analytics weren't touched.
- **Inventory:** 903 posts after this batch, of which 902 existed at the start, including batch A's 8 new pages. The overlap check searched titles, slugs, headings and full body text, not titles alone.
- **Previous plans checked:** batch A, completed earlier the same day (`batch-a/topic-prioritisation.csv`), whose 20 candidates covered briefs, UGC, usage rights, attribution, jewellery, electronics, agencies, UAE and AI. Also the founder roadmap (200 topics, 2026-10-15) and the 2026-10-22 GSC registers in git history (commit 5c3aa08).
- **Data:** the Search Console Pages and Queries exports of 2026-10-22, recovered from commit 5c3aa08. See `gsc-opportunity-analysis.md` for their limitations.

## Findings

1. **All 20 candidates already had an owner page.** Eight of them were already decided or improved in batch A a few hours earlier: UGC brief, regional, jewellery, electronics, agencies, UAE, AI and campaign brief. Four more have strong, recently updated dedicated pages: budget, fraud, UGC testing and attribution. Publishing the list as written would have created near-duplicates of pages updated within the past two weeks.
2. **The best remaining opportunities are existing pages that underperform in Search Console,** not missing topics. Several brand-side pages sit near page one with zero clicks:
   - creator-whitelisting: 673 impressions
   - influencer-marketing-campaign-timeline: 299 impressions, 1 click
   - how-to-contact-youtube-creators: 277 impressions
   - youtube-sponsorships: 139 impressions
   - automotive dealerships: 144 impressions
   - gifting vs paid: 104 impressions
3. **Only one genuine new-page gap was found:** brands declining inbound creator requests. "How to politely decline an influencer collaboration" (57 impressions, average position 9.1) lands on an unrelated page.
4. **Thin pages with demand:** influencer-marketing-vs-traditional-advertising (426 words), influencer-management-vs-influencer-marketing (538 words) and how-to-work-with-influencers (585 words) were all thin for their intent.
5. **Two overlapping pairs were evaluated for consolidation.** They aren't merged, because the data can't yet justify a redirect:
   - **Negotiation pair:** how-to-negotiate-with-influencers (132 impressions at 9.6) and negotiate-influencer-rates (not in the export).
   - **Post-mortem pair:** the generic "campaign post mortem" query (85 impressions) lands on the creator-side page, while the brand-side page has no impressions. Both pairs already cross-link.
6. **Redirect intent mismatch found but not changed:** "esports influencer marketing" (56 impressions at 10.6) is attributed to `/blog/x-influencer-marketing-gaming-esports`. That URL now 308-redirects to the X pillar, which isn't the best esports owner. Recommendation: you could re-point it to `/blog/gaming-influencer-marketing-india`. It wasn't changed, because the brief rules out altering redirects without approval.
7. **Geographic candidates (Singapore, Australia, UAE) weren't forced.** There are no Singapore, Australia or UAE queries among the 1,000 exported. The Singapore guide is current, and Australia has 26 pages.

## Result

| Action | Count |
| --- | --- |
| New article | 1 |
| Updates to existing articles | 17 |
| Consolidation evaluations (documented, no redirect) | 2 |

The full plan is in `final-20-content-plan.csv` and per-candidate decisions in `topic-overlap-audit.csv`.

## Limitations

- The query→page mapping is inferred: the export has no query×page dimension, no country, no device and no date range.
- Ten of the update actions rest on page-level evidence (impressions and position with zero clicks) rather than specific queries. Their confidence is marked medium or low in the plan.
- No search volumes, keyword difficulty or third-party estimates were used, and none were available.
- No historical comparison is possible with a single export, so declining pages couldn't be identified.

## Needs human input

- Real first-hand examples (case studies, named campaigns) would strengthen the decline, dealership, events and affiliate pages. None were invented; all examples are labelled hypothetical.
- Decisions on the redirect recommendation and the two consolidation pairs.
- Whether to build a named-vendor "influencer marketing platforms in India" comparison (demand exists: 30 + 26 impressions). It needs vendor research and an owner decision on listing third-party tools.
