# 06 — Technical SEO and QA report

All checks below were actually run on 25 Nov 2026 against a local production build (`next build` + `next start`). Nothing was deployed.

## Build, type-check, lint

| Check | Result |
| --- | --- |
| `npx tsc --noEmit -p .` | Pass |
| ESLint on every changed/new file (`src/content/discovery-guides`, `src/content/blog.ts`, `src/content/brand-guides/*`, `src/content/creator-economy/marketplaces.ts`, `src/components/discovery`, `src/components/blog`, `src/app/blog/[slug]/page.tsx`, `src/config`, `src/lib/discoveryAnalytics.ts`) | Pass, 0 warnings (one unused import left behind by removing the old `influencer-search-tools` entry was fixed) |
| `next build` | Pass: 2,274 static pages (2,252 before + 11 new articles + their 11 OG images) |
| Post count | 1,081 (1,070 + 11 new); 0 duplicate slugs, 0 duplicate titles, 0 duplicate SEO titles across the whole library |

## Article validator (all 20)

Custom script (`validate.ts`, run on the source objects): exactly one `discovery-cta` block per article placed 30–75% through the body; `discoveryCta` present; `id: "conclusion"` present; unique heading ids; every link text is a verbatim substring of its paragraph; every href/related slug exists; SEO title ≤ 62 chars; meta description 110–160 chars; hero SVG exists and < 12 KB; ≥ 4 FAQs; ≥ 5 internal links; 0 em dashes; no banned filler phrases; product sentences scanned for forbidden claims (counts, "largest", AI, export, demographics, fraud detection, YouTube coverage). **All 20 pass.** The only claim-scan hits are in the tools comparison and are honest negatives ("Kudozz Discovery does not offer fraud detection").

## Rendered-page checks (all 20 URLs)

| Check | Result |
| --- | --- |
| HTTP status | 200 for all 20 |
| Canonical | Self-referencing `https://www.kudozz.in/blog/<slug>` on all 20 |
| H1 | Exactly one per page |
| Structured data | `BlogPosting`, `BreadcrumbList`, `FAQPage` on every page; all JSON-LD blocks parse; `datePublished` / `dateModified` match the post (upgrades show the 25 Nov modification date); image present; every FAQPage question is visible on the page |
| Open Graph | `og:title` + `og:image` present on all 20 (existing per-article OG image route) |
| Discovery CTAs | 2 per article (3 where the in-text link is used); every href exactly matches the blog UTM pattern with the article slug |
| Internal links | 131 unique internal URLs across the 20 articles; all return 200 |
| Sitemap | All 20 in `sitemap.xml` (after restoring `how-to-find-ugc-creators`, see below) |
| Blog index | All 20 linked from `/blog` (existing listing, search and category filters; no new category pages) |

FAQ schema note: FAQPage markup is the site's existing behaviour for posts with FAQs and matches visible content, but Google currently shows FAQ rich results only for authoritative government and health sites, so expect no FAQ snippets from it.

## Responsive checks

Headless Chromium at 1440×900, 768×1024 and 375×812 on four representative articles (tools comparison, local, database, YouTube): no horizontal page overflow; hero SVG loads; mid and end CTAs render once each; wide tables scroll inside their own wrapper on mobile (existing table behaviour); CTA buttons are full-size tap targets. Screenshots reviewed for the header, mid CTA and end CTA (desktop and mobile). Safari, Firefox and real devices were not tested.

## Changes to existing behaviour (deliberate)

1. **Nine old entries removed** from `content/blog.ts`, `creator-economy/marketplaces.ts`, `brand-guides/technology-operations.ts`, `brand-guides/campaign-planning.ts` and `brand-guides/technology-tools.ts`, replaced by rewrites on the same URLs (report 02). Old hero SVGs for those posts are still in `public/` but no longer referenced.
2. **`how-to-find-ugc-creators` removed from `src/content/noindex.ts`.** It had been noindexed on 19 Nov as low-demand; that file's documented route back is "remove its slug, improve it, request indexing". It's now fully rewritten. **Action: request indexing in GSC after deploy**, or put the slug back if you'd rather keep it out until the core-update recovery is clearer.
3. On these 20 posts, the automatic agency mid-CTA and the agency bottom CTA are replaced by the two Discovery CTAs; the end CTA keeps a secondary "Talk to Kudozz" link to the inquiry form.
4. 14 existing articles got one added sentence each with an inbound link (report 04).

## Remaining issues and recommendations

- **Indexing risk.** Posts published after 3 Oct 2026 have mostly not surfaced in Google, and rankings dropped in the November core update (see `src/content/noindex.ts` header and `reports/claude-seo-kudozz/`). The 11 new URLs are exposed to that; the 9 upgrades are on older, already-indexed URLs. Recommend deploying the 9 upgrades first, then the 11 new posts in smaller groups, requesting indexing for each in GSC, and checking the GSC Pages report before the next batch.
- **Keyword data.** No volume/difficulty data was available, and the brief's "review current search results" step was only done for the tools comparison (#2). A SERP pass with a keyword tool would sharpen titles for #4, #14, #15 and #16.
- **Competitor facts (#2)** were checked on official sites on 25 Nov 2026 (sources listed in the article's `mentions` and in report 03); re-check quarterly. Winkl was excluded because its official site couldn't be reached.
- **Links to noindexed pages.** Six body links point at existing posts that are `noindex,follow`; harmless, listed in report 04.
- **The discovery platform has no analytics**, so `utm_*` tags are only visible in the platform's server logs until analytics is added there.
- **Not done:** deployment, GSC indexing requests, cross-browser/device testing.

## Correction (26 Nov 2026)

The link checks above verified URLs but not `#section` anchors. A later anchor-aware check (batch 3) found three links on existing pages pointing at sections removed by this batch's rewrites (`influencers-for-product-launch#stock` ×2, `influencer-database#before-import`). They were repointed to `#store-stock` and `#data-hygiene`. A site-wide re-check now finds 0 broken links or anchors.
