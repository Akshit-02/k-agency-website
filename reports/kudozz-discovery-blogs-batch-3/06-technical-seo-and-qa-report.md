# 06 — Technical SEO and QA report (batch 3)

All checks were run on 26 Nov 2026 against a local production build (`next build` + `next start`). Nothing was committed or deployed.

## Build, type-check, lint

| Check | Result |
| --- | --- |
| `npx tsc --noEmit -p .` | Pass |
| ESLint on `src/content`, `src/components`, `src/lib`, `src/config`, `src/app/blog/[slug]/page.tsx` | Pass, 0 warnings. Removing the old CRM entry left `GCC_SRC` unused in `brand-guides/technology-operations.ts`; that import was removed. |
| `next build` | Pass: 2,314 static pages (2,308 after batch 2 + 3 new articles + 3 OG images) |
| Post count | 1,101 (1,098 + 3 new); 0 duplicate slugs, titles or SEO titles |
| Site-wide link check | 7,765 `/blog/` links in posts and in `tools.ts`, `services.ts`, `home.ts`, `markets.ts`, `blogCta.ts`: **0 broken, 0 missing section anchors**, 0 anchor texts missing from their paragraph |

**Regression found and fixed:** the new anchor-aware check found 5 links on existing pages pointing at section ids that no longer existed. Two came from this batch's brand-fit rewrite. Three were left over from batch 1 (`influencers-for-product-launch#stock` ×2, `influencer-database#before-import`); the batch-1 link check didn't verify anchors. All 5 were repointed to the equivalent new sections.

## Article validator (all 20)

Same checks as batches 1–2 (one mid CTA in range, end-CTA headline and body, conclusion section, unique ids, link anchors and targets, no noindexed links, meta and title lengths, hero present, ≥ 4 FAQs, no em dashes, banned phrases, product-claim scan). **All 20 pass.** The one claim-scan hit is the FAQ "Does Kudozz Discovery detect fake followers?", whose answer is "No".

## Rendered-page checks (all 20 URLs)

| Check | Result |
| --- | --- |
| HTTP status | 200 for all 20 |
| Canonical | Self-referencing on all 20 |
| Robots | None noindex, including the 3 restored pages (`influencer-ranking`, `influencer-marketing-budget`, `how-to-create-a-successful-influencer-marketing-campaign`) |
| H1 | Exactly one per page |
| Structured data | `BlogPosting`, `BreadcrumbList`, `FAQPage` on every page; all JSON-LD parses; upgrades show `datePublished` = original date and `dateModified` = 2026-11-25; FAQ questions all visible |
| Open Graph | `og:title` and `og:image` on all 20 |
| Discovery CTAs | 2 per article (3 on #51 and #60 with their in-text link); hrefs match the UTM pattern exactly |
| Internal links | 120 unique internal URLs, all 200 |
| Sitemap | All 20 present (including the 3 restored) |
| Blog index | All 20 on `/blog` |
| Tools page | `/tools` still deep-links to `/blog/influencer-campaign-cost-india#calculator`, and the calculator section renders |

## Responsive checks

Headless Chromium at 1440×900, 768×1024 and 375×812 on four articles (cost by tier with its calculator and five tables, outreach email templates, the hub article, CRM): no horizontal overflow, hero loads, exactly one mid and one end CTA, tables scroll inside their wrapper on mobile. Screenshots reviewed. Safari, Firefox and real devices not tested.

## Changes to existing content (deliberate)

1. 17 old entries removed and replaced by rewrites on the same URLs (report 02), in `content/blog.ts` and `brand-guides/{intelligence-scoring, relationships-outreach, relationships-partnerships, technology-operations, operations-execution}.ts`. Old hero SVGs remain in `public/` unused.
2. `src/content/noindex.ts`: 3 slugs restored to the index (commented with date and reason).
3. 5 stale section-anchor hrefs on existing pages repointed (see above).
4. 3 existing posts got one added sentence each, linking to the new articles (report 05).

## Outstanding issues

- **Nothing is committed.** Batches 1–3 are all uncommitted working-tree changes and depend on each other (shared CTA components, `discovery-guides/index.ts`).
- **Publishing load.** Across three batches: 31 new URLs, 32 rewrites and 4 restored pages, while posts published after 3 Oct mostly aren't surfacing and ~140 pages were noindexed on 19 Nov for quality. Recommended order: deploy rewrites first (they sit on already-indexed URLs), request re-indexing for the 4 restored pages, then release new URLs in small weekly groups, checking the GSC Pages report between them.
- **Pricing sources** are partly commercial estimates (report 04). Re-check ranges quarterly and the Income-tax Act reference before publishing.
- **Pre-existing duplicates to merge later:** `how-to-negotiate-with-influencers` vs `negotiate-influencer-rates`; `influencer-engagement-rate` vs `influencer-engagement-quality`; `influencer-campaign-project-plan` (noindexed) vs the restored campaign-plan post.
- **SEO title change on #55** (from "calculator and budget examples" to "cost by follower count") may move its 29 existing impressions; watch GSC.
- **Not done:** deployment, GSC indexing requests, cross-browser and device testing.
