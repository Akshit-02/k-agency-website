# Batch 26: SEO Validation

Validated 2026-11-05 against the local production build (`npm run build`, Next.js 16.3.4). The checks read the prerendered HTML in `.next/server/app/blog/<slug>.html`.

## Build, types and lint

| Check | Result |
|---|---|
| `npm run build` | Pass: compiled, 1,989/1,989 static pages generated (run twice: after integration and after backlinks) |
| `npx tsc --noEmit -p .` | Pass (after the build generated Next's `PageProps` types; before a build it reports 8 pre-existing `PageProps` errors in route files not touched here) |
| `npx eslint` | 0 errors, 6 warnings. All warnings are pre-existing, in `src/app/contact/page.tsx`, `src/app/for-brands/page.tsx` and `src/components/layout/Footer.tsx`, which this batch did not touch |
| Tests | The project has no test script or test files |

## Per-article checks

| URL (/blog/…) | `<title>` (chars) | Meta (chars) | H1 | H2 / H3 | Canonical | Mid + bottom CTA | Broken internal links |
|---|---|---|---|---|---|---|---|
| which-products-to-promote-with-influencers | 60 | 155 | 1 | 11 / 16 | ✓ self | ✓ | 0 |
| influencer-marketing-limited-stock | 58 | 155 | 1 | 13 / 11 | ✓ | ✓ | 0 |
| influencer-campaign-break-even | 60 | 157 | 1 | 12 / 12 | ✓ | ✓ | 0 |
| influencer-budget-seasonal-business | 59 | 149 | 1 | 13 / 11 | ✓ | ✓ | 0 |
| influencer-marketing-quarterly-review | 58 | 153 | 1 | 12 / 11 | ✓ | ✓ | 0 |
| creator-content-product-pages | 58 | 150 | 1 | 13 / 13 | ✓ | ✓ | 0 |
| influencer-leads-crm-follow-up | 60 | 153 | 1 | 13 / 15 | ✓ | ✓ | 0 |
| measure-influencer-in-store-sales | 59 | 158 | 1 | 12 / 12 | ✓ | ✓ (mid CTA links to /services/reporting, as on all ROI-topic posts) | 0 |
| store-opening-influencer-campaign | 60 | 149 | 1 | 12 / 11 | ✓ | ✓ | 0 |
| creator-content-sales-enablement | 59 | 152 | 1 | 13 / 11 | ✓ | ✓ | 0 |
| regulated-categories-influencer-marketing-india | 53 | 157 | 1 | 12 / 17 | ✓ | ✓ | 0 |
| multi-campaign-influencer-agreements | 58 | 147 | 1 | 13 / 12 | ✓ | ✓ | 0 |
| new-product-category-influencer-marketing | 56 | 151 | 1 | 12 / 15 | ✓ | ✓ | 0 |
| influencer-marketing-cross-sell-upsell | 58 | 154 | 1 | 13 / 11 | ✓ | ✓ | 0 |
| creator-content-hard-to-demonstrate-products | 57 | 158 | 1 | 11 / 18 | ✓ | ✓ | 0 |

Title lengths include the site's " — Kudozz" suffix where the template adds it.

- **Duplicate checks:** none of the 15 titles or meta descriptions duplicates any other page under `/blog/`, checked across all built blog HTML.
- **Internal links:** every `/blog/*` and `/services/*` href on the 15 pages resolves to a built page. The checker flagged the hero `.svg` paths only because they are static assets; all 15 files exist in `public/blog/brand-guides/`.
- **Backlinks:** all 15 host articles render exactly one link to their new article (verified in the built HTML).
- **Sitemap:** all 15 URLs are in `sitemap.xml` (1,033 URLs total) with `lastmod` 2026-11-05.
- **Blog index:** the new posts are picked up automatically, because `/blog` and category filtering read `blogPosts`.
- **Images:** each hero has descriptive alt text (`hero.alt`). The SVGs are about 2–3 KB vector files in the existing card style, and contain no charts or numbers presented as data.
- **Em dashes:** none in the article source text. The only ones in the HTML come from the existing title template.

## CTA rule

Article bodies contain **no hand-written CTAs**. The existing system inserts exactly two:

- **Mid-article CTA:** placed at a section boundary near the middle. Never inside the first three blocks, never directly before the conclusion.
- **Bottom CTA:** placed near the end.

This satisfies "exactly two CTAs, not immediately after the introduction" without changing any CTA code.

## Structured data

Each page emits, through the existing templates:

- **`BlogPosting`** (with `ImageObject`) and **`BreadcrumbList`**: appropriate and valid.
- **`Place`** on the India-specific posts that set `spatialCoverage`.
- **`Organization`, `WebSite`, `Service`, `OfferCatalog`**: site-wide schema that is already on every page.
- **`FAQPage`**: see the outstanding issues below.

## Outstanding issues (need your decision)

1. **The site emits FAQPage schema automatically.** `src/app/blog/[slug]/page.tsx` outputs FAQPage JSON-LD for every post that has `faqs`, including these 15. The brief says not to add FAQ schema automatically. This is existing site-wide behaviour, so I did not change it. Google restricts FAQ rich results to authoritative government and health sites, so the markup is valid but will rarely produce rich results. Options: leave it, or remove FAQPage output site-wide. **Changing it affects 1,000+ pages and needs your approval.**
2. **Search demand is unverified.** No keyword tool or Search Console data was available, so prioritisation is based on intent and commercial fit only. Re-score with real data before the next batch.
3. **Mobile layout was not visually tested.** No browser session was run. The articles use only existing block types (paragraph, list, table, template, heading, subheading), which already render responsively on 900+ posts, and no new components or styles were added.
4. **Several citations are secondary sources.** Some regulatory statements cite law-firm or legal-press summaries because the official notifications (PIB or gazette) blocked automated access. See `research-sources.md`. Swap in the official links before publishing if you want primary citations.
5. **Some regulatory content was not independently re-verified.** The online-gaming, IRDAI and Drugs and Magic Remedies Act statements in the regulated-categories article follow the wording of existing Kudozz pages and the existing `SOURCES.onlineGamingAct2025` reference. They were not re-verified in this session. Recommend a legal read of that article before publishing.
