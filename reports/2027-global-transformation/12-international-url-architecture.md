# 12 · International URL Architecture

Date: 2026-11-10. Local and reviewable only; nothing was deployed.

## Current architecture (audited)
| Layer | Pattern | Count | Notes |
|---|---|---|---|
| Market pages | `/markets/<slug>` (generated from `src/content/markets.ts`) | 5 + hub | uae, saudi-arabia, uk, australia, singapore. Each has its own `ogLocale` and `inLanguage` (en-AE, en-GB, en-AU, en-SG), `areaServed` schema, rules with sources, FAQs |
| Market guides | `/blog/<slug>` with market in the slug | 97 | GCC (~50), UK (~10), AU (~30); blog CTAs carry market topics |
| India location listicles | `/blog/best-…-in-<state/city>` | 64 | See report 10 (doorway risk) |
| Services | `/services/<slug>` | 18 | One global set; market pages reference 6 of them |
| Language | English only; no hreflang | — | Correct today: there are no alternate-language versions to pair |

## Options evaluated
| Option | SEO and technical implications | Verdict |
|---|---|---|
| ccTLDs or subdomains (kudozz.ae, uk.kudozz.in) | Splits authority on a young domain; separate Search Console properties; needs local entities for some ccTLDs | **Reject** |
| Country subfolders for everything (`/ae/`, `/uk/`, …) with hreflang | Requires duplicating core pages per market, which creates near-duplicates without distinct content; hreflang maintenance; big routing change | **Reject for now** (revisit only if Arabic or European-language versions are approved) |
| **Current hybrid: global core pages + `/markets/<country>` commercial pages + market guides in `/blog`** | Already built; no URL changes; distinct content per market; one domain's authority | **Keep** |
| Language subfolders for Arabic (`/ar/markets/uae`) | Justified only with native Arabic editorial review; would need hreflang pairs (en-AE ↔ ar-AE) | **Future option, gated** |

## Rules for any new URL
A new market or country URL needs all of the following:
1. Owner-confirmed delivery in that market.
2. Distinct market context, platform mix, regulation (with primary sources), workflow and FAQs. This is the `Market` type in `markets.ts`, which enforces it.
3. Evidence of search demand (GSC or observed search results).
4. A parent (`/markets`) plus internal links from at least 3 existing relevant pages.
5. A conversion goal: brand inquiry with a market topic (`ctaTopic`).

No page may differ from another only by its city or country name.

## Decision matrix for candidate landing pages
| Candidate | Recommendation | Reason |
|---|---|---|
| Influencer Marketing Agency in India | UPDATE existing (homepage and `/for-brands`); no new URL | Avoid creating a 5th URL for the same head term |
| …in the United States | SKIP | Delivery not confirmed; crowded results; 0.19% CTR on US impressions |
| …in the United Kingdom | UPDATE `/markets/uk` | Exists |
| …in Dubai / the UAE | UPDATE `/markets/uae` (covers Dubai and Abu Dhabi) | Exists; a separate Dubai URL would duplicate it |
| …in Australia | UPDATE `/markets/australia` | Exists |
| …in Singapore | UPDATE `/markets/singapore` (KOL terminology added) | Exists |
| …in Saudi Arabia | UPDATE `/markets/saudi-arabia` | Exists |
| …in Qatar | SKIP page; keep the guide | Case by case; thin demand |
| …in Europe (generic) | SKIP | Europe isn't one market |
| Country pages: Ireland or Netherlands (English) | Later test, gated | Need owner confirmation and an EU representative (GDPR Art. 27) |
| Germany, France, Italy, Spain | SKIP until local-language editorial capacity exists | English isn't viable for consumer buyers there |
| Russia | NO CONTENT | Compliance and sanctions review (report 15) |

## Technical items checked
- **Canonicals:** self-referencing on all 1,052 URLs.
- **Robots:** no `noindex`.
- **Sitemap:** includes market pages; blog `lastmod` comes from real dates.
- **`<html lang>` and OG locale:** set per market page.
- **hreflang:** not used, which is correct with no alternates.
- **Recommended:** add `/markets` and each market page as links from the footer "Markets We Serve" (exists) and from the For Brands markets section (added).
