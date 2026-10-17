# International SEO plan

Date: 2026-10-17. Status: **recommendation. No URL migration is proposed.**

## Current architecture (observed)

- One English-language site on one domain: `https://www.kudozz.in`.
- Country landing pages under `/markets/{uae,saudi-arabia,uk,australia,singapore}`, plus the `/markets` hub. India is served by the homepage and the India article cluster; there's no `/markets/india`.
- Market-specific articles live under `/blog/{slug}`, with `inLanguage` (en-GB, en-AU, en-SG, en, default en-IN), matching `og:locale`, and `spatialCoverage` in BlogPosting schema.
- Each article's related-service aside links its market page when `spatialCoverage` or the CTA topic names a market (`src/lib/blogServiceLink.ts`).
- No `hreflang`. This is correct today: no page has an equivalent translation or regional variant. The UK, Australia and UAE pages are different documents about different rules, not variants of one page.

## Recommendation: keep the current structure

| Option | Verdict | Reason |
| --- | --- | --- |
| Keep `/markets/*` + `/blog/*` on one domain | **Recommended** | 979 indexed URLs, 36 working redirects and accumulated signals stay intact. Market pages already hold country-specific rules, sources and CTAs |
| Subfolders `/uk/`, `/sg/`, `/ae/`, `/au/`, `/in/` | Not now | Would move hundreds of URLs for no new content. Only worth it if Kudozz later publishes genuinely parallel regional versions of the same pages |
| ccTLDs (`kudozz.co.uk` etc.) | No | Splits authority; no local entities are verified |
| `/markets/india` | No | Would compete with the homepage and the India agency guides for the same intent. Revisit only if the homepage is repositioned as global |

## When hreflang becomes appropriate

Add `hreflang` only when a page has a true equivalent for another locale, for example if a guide is published in an India version and a UK version that cover the same topic for each market. Then:
- Use `alternates.languages` in `buildMetadata()` (`src/lib/metadata.ts`), keyed by `en-IN`, `en-GB`, `en-AU`, `en-SG` and `en-AE`, with reciprocal links on every member of the set and a self-reference.
- Keep each version's self-canonical; never canonicalise one regional version to another.
- Don't use `hreflang` to link pages that are merely related (for example `influencer-marketing-uk` and `influencer-marketing-australia`).

## Localisation checklist for any new market page

- **Spelling and terms:** British English for UK, SG and AU pages (programme, organisation). The site already writes in British English, so this is mainly about local terms: VAT/GST, CAP Code, ASAS, ACL/AANA, NMA.
- **Rules:** cite the primary regulator page (ASA/CMA, ASAS/CPFTA/MAS, NMA, ACCC/AANA/TGA, ASCI/CCPA) with a checked date. `markets.ts` has a `reviewed` field and per-rule `sources`.
- **Claims:** no local office, team, client, creator database or result unless verified. `SERVED_COUNTRIES` in `src/lib/schema.tsx`, `src/content/markets.ts` and `public/llms.txt` must change together.
- **Currency:** describe cost factors and price from quotes; no rate tables.
- **Schema:** `marketServiceSchema` (Service with `areaServed` set to the country) already exists; reuse it.
- **CTA:** market pages pass `from=market:{slug}` and a topic to `/for-brands#inquiry`, which preserves lead attribution.

## Risks

| Risk | Mitigation |
| --- | --- |
| Templated location pages read as doorway pages | Build only with local evidence; monitor the 30 specialist location pages and consolidate where Search Console shows overlap |
| Market pages imply presence Kudozz doesn't have | Current copy says Kudozz "runs campaigns" in each market; keep that wording |
| Regulatory facts go stale (UAE NMA transition, MAS guidelines, YouTube metrics) | Re-check `reviewed` dates quarterly; the source labels in `gcc-guides/shared.ts` record the dates they were checked |
