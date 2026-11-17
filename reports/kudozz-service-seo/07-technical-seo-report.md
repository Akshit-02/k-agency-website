# 07 · Technical SEO Report

All checks were run on the **local production build** (`next build` → `next start`) on 17 Nov 2026, across all 21 `/services*` URLs from `sitemap.xml`, plus `/` and `/for-brands` for clash checks. Nothing was deployed.

| Check | Result | Detail |
|---|---|---|
| Title tags | ✅ | 21/21 unique, 43–60 characters, primary keyword in each |
| Meta descriptions | ✅ | 21/21 unique, 150–162 characters |
| H1 | ✅ | Exactly 1 per page, 21/21 unique, primary keyword in each. The SMM H1 is no longer a colon-joined eyebrow. |
| Heading hierarchy | ✅ | H1 → H2 → H3. The new "What to look for" section uses H2 + H3 rows. |
| Canonical | ✅ | Self-referencing on every page, unchanged |
| Indexability / robots | ✅ | `index, follow`, `max-snippet:-1`, `max-image-preview:large`, unchanged |
| Open Graph / Twitter | ✅ | og:title equals `<title>` on all 21. Description, URL, image (1200×630), `en_IN` locale and `summary_large_image` are all present. |
| Image alt | ✅ | No `<img>` without alt. Icons are `aria-hidden`. |
| Internal links | ✅ | 250 unique internal paths, all 200 |
| Breadcrumbs | ✅ | Visible breadcrumb + BreadcrumbList schema, unchanged |
| Structured data | ✅ Valid JSON | Organization + WebSite (sitewide); Service, BreadcrumbList and FAQPage on every detail page; ItemList on the hub. **FAQPage questions equal the visible FAQ questions on every page** (the same array feeds both). |
| Mobile rendering | ✅ | 390×844 and 1440×900 on the pillar, UGC campaigns, product launches, SMM and hub: 0 px horizontal overflow, 0 console or page errors. The SMM H1 was reduced one size step so the hero CTA sits above the fold (bottom edge 758/900 px desktop, 811/844 px mobile). |
| Page performance | ⚠️ Not measured | No PageSpeed/CrUX API key is configured. The changes add server-rendered text only (no images or client scripts). `ServiceChoosing` is a server component using the existing reveal wrappers. |

## Structured data decisions

| Type | Decision |
|---|---|
| Service | **Kept as is.** `name` and `serviceType` stay the plain service name (e.g. "UGC Campaigns"), **not** the "Best …" H1, so the structured data makes no superlative claim. `provider` points to the Organization `@id`. `areaServed` lists the real markets. |
| BreadcrumbList | Kept |
| FAQPage | Kept, regenerated from the updated FAQ arrays. Google only shows FAQ rich results for government and health sites, so no rich result is expected. The markup stays because it mirrors visible content. |
| WebPage | Not added to service pages. Service + BreadcrumbList already describe them, so adding it would duplicate entities. |
| AggregateRating / Review / LocalBusiness / address / phone | **Not added.** No verified data exists. |

**Validation limit:** Google's Rich Results Test and validator.schema.org need the public URL, so run them after deploy (report 08).

## Code-level changes affecting technical SEO

- `src/app/services/[slug]/page.tsx`: titles are branded with " | Kudozz" when they're ≤ 62 characters, and use `absoluteTitle` (so no template suffix).
- `src/app/services/social-media-management/page.tsx` and `src/app/services/page.tsx`: `absoluteTitle: true`.
- `src/content/services.ts`: the `Service` type gains required `heroTitle` and optional `choosing` fields. All 20 entries have `heroTitle`, so the build fails if one is missing.
