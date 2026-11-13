# 10 · Schema and Structured Data Audit

**Method:** JSON-LD extracted from all 1,154 live pages that returned 200 (crawl, 13 Nov 2026), plus review of the builders in `src/lib/schema.tsx`. Every block was parsed; type counts are from the crawl. Rules follow claude-seo's schema references: no HowTo; FAQPage rich results were retired for all sites on 7 May 2026, so existing FAQPage is informational only; never mark up content that isn't visible.

## Inventory

| Type | Pages | Where | Assessment |
|---|---|---|---|
| Organization (`@id: /#organization`) + ContactPoint + OfferCatalog (20 Services) | 1,154 | Layout (every page) | Valid. `legalName`, `logo` (180×180 PNG), `email`, `areaServed` (6 countries), `sameAs` (Instagram, LinkedIn), `knowsAbout`. No address, phone, founders, ratings or awards, which is correct because none are verified |
| WebSite (`@id: /#website`) | 1,154 | Layout | Valid; `publisher` → Organization. No SearchAction (no site search URL, so correctly omitted) |
| WebPage (`@id: /#webpage`) | Homepage | `/` | Valid; `about` and `publisher` → Organization |
| AboutPage | `/about` | | Valid; `mainEntity` → Organization |
| BlogPosting | 1,062 | Blog articles | Valid. `headline`, `description`, `image` (per-post OG image), `datePublished`/`dateModified` from content (not build time), `inLanguage`, `articleSection`, `keywords`, `spatialCoverage` on location guides, `mentions` (profiled agencies) on shortlists, `publisher` → Organization |
| BreadcrumbList | 1,149 | All but home and a few hubs | Valid; hierarchy matches visible breadcrumbs (Home › Blog › [parents] › Article; Home › Services › Service) |
| Service | 20 service pages + 5 market pages (+ in the OfferCatalog) | `/services/*`, `/markets/*` | Valid; `provider` → Organization, `areaServed`, `audience: BusinessAudience`, `disambiguatingDescription` = the visible answer block |
| FAQPage | 1,069 | Pages with visible FAQ sections | Valid and visible. **Info:** no Google rich result since May 2026. Not removed (harmless, and the Q&A content is visible); no new FAQPage added for SERP benefit |
| ItemList / CollectionPage | Hubs | `/services`, creator resource sections | Valid |

**Parse errors:** 0. **Duplicate conflicting entities:** none (one Organization `@id` referenced everywhere). **Invented data:** none found: no `aggregateRating`, `review`, `award`, `founder`, `telephone`, `address` or `priceRange` anywhere.

## Issues and changes

| # | Issue | Severity | Change | Status |
|---|---|---|---|---|
| 1 | `JsonLd` serialised with plain `JSON.stringify`, so a `</script>` sequence in content could break the tag | Medium (robustness) | `<` escaped as `<` (valid JSON, identical data) | **Done** |
| 2 | Service nodes had no `@id`, so other nodes couldn't reference them | Low | `@id: {page}#service` added | **Done** |
| 3 | New pillar needed schema | n/a | `/services/influencer-marketing` emits Service, BreadcrumbList (Home › Services › Influencer Marketing Services) and FAQPage for its 6 visible FAQs, and appears in the Organization OfferCatalog and the `/services` ItemList | **Done** |
| 4 | BlogPosting `author` is an Organization-type team ("Kudozz Strategy Team") linking to `/about` | Low (E-E-A-T) | Keep until real authors exist. Then use `Person` with `name`, `jobTitle`, `url` (author page), `sameAs` (LinkedIn) and `worksFor` → `/#organization` | Awaiting owner input |
| 5 | Organization emitted in full on every page (~2–3 KB each) | Low | Optional: full node on `/` and `/about`, an `@id` reference elsewhere | Recommended |
| 6 | `logo` is the 180 px apple-icon | Low | Google accepts ≥ 112 px; optionally point to `/icons/512` | Recommended |
| 7 | `sameAs` has 2 profiles | Low | Add YouTube or other official profiles only when they exist | Owner |
| 8 | LocalBusiness | n/a | **Not added.** No verified public address or opening hours; Kudozz is a service-area business with no published office | Correct as is |

## Validation

- Local production build: every checked page's JSON-LD parses (homepage, `/blog`, `/services`, `/services/influencer-marketing`, `/for-brands`, `/for-creators`, `/contact`, 5 blog posts, a market page); types as expected.
- The claude-seo PostToolUse schema hook (`validate-schema.py`) was installed with the plugin. It loads on the next Claude Code session, so it didn't run on this session's edits.
- **Still to do after deploy:** Google Rich Results Test on `/services/influencer-marketing`, one BlogPosting and the homepage, plus the Schema.org validator. These need the public URL.
