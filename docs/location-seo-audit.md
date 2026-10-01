# Location SEO program: audit, decisions and research record (2026-09-30)

Master inventory (every state, UT, city and service evaluated): `docs/location-content-inventory.csv`.
Content: `src/content/location-guides/` (India pillar, `states.ts`, `cities.ts`; agency records in `shared.ts`).
Remaining state/UT guides are still in `src/content/blog.ts` (core array).

## 1. Audit of what existed

- India pillar and 29 state/UT guides at `/blog/best-influencer-marketing-agencies-in-[location]`, all live (200) on kudozz.in. None named any agency other than Kudozz.
- Four informational city guides at `/blog/influencer-marketing-{ahmedabad,bangalore,delhi,mumbai}`, all live.
- Gaps: **no Maharashtra page, no Delhi page**; no agency-intent city pages.
- Problems found across the cluster:
  - 27 pages said Kudozz has "480+ creators across 210+ campaigns and 18 industries". The site's own stats (`siteConfig.stats`) now say 40k+ / 2k+ / 18+, so the blog contradicted the homepage. Neither figure is independently verified, so the numbers were removed from the location pages rather than updated.
  - Every state page ended with an in-body "Start a campaign with Kudozz" section on top of the automatic mid and bottom CTAs, which made three CTAs. The four city guides had the same problem ("Start a brand inquiry").
  - Several pages have `publishedAt` dates in the future (for example the India page, 2026-12-14). These dates were kept to avoid changing live pages' schema dates, but they should be reviewed.

## 2. Decisions

| URL | Action |
| --- | --- |
| best-influencer-marketing-agencies-in-india | UPDATE: rewritten as the national pillar with Kudozz and 4 alternatives, a state/city directory, and ecosystem, D2C, language and cost sections |
| …-in-maharashtra | CREATE |
| …-in-gujarat | UPDATE: rewritten at the same URL |
| …-in-karnataka | UPDATE: rewritten and retitled "Karnataka and Bengaluru" so it owns Bengaluru agency intent (CONSOLIDATE, no separate Bengaluru agency page) |
| …-in-delhi | CREATE: Delhi NCR page; it owns Delhi, Gurugram and Noida agency intent |
| …-in-mumbai | CREATE: the commercial "which agency" intent is distinct from the informational `influencer-marketing-mumbai`, and the two pages are cross-linked |
| …-in-ahmedabad | CREATE: same reasoning as Mumbai |
| 27 other state/UT guides | Cleanup only: stats removed, extra CTA replaced by a "More location guides" link up to India (plus neighbor links). Competitor research is still pending |
| Singular or "company" / "top" variants | DO NOT CREATE: they have the same intent as the plural "agencies" URLs |

No redirects were needed, because every URL that changed kept its slug.

## 3. Competitor research record

Each agency is recorded in `src/content/location-guides/shared.ts` → `AGENCIES` with its source URLs, the date researched and notes. Summary:

| Page | Alternatives (after Kudozz) | Evidence of presence (official site unless noted) |
| --- | --- | --- |
| India | Chtrbox, Confluencr, Grynow, InfluGlue | Andheri W Mumbai; Bengaluru office; DLF Ph 1 Gurugram; Gitanjali Park Kolkata |
| Maharashtra | Chtrbox, Fame Keeda, Evonix, Addinfi | Mumbai; MH-registered and site lists Mumbai/Pune (HQ address from directories); Wakad Pune; Nagpur + Baner Pune |
| Mumbai | Chtrbox, DigiChefs, Glad U Came, Fame Keeda | Andheri W; Andheri E; Andheri W (careers page); see Fame Keeda note |
| Gujarat | Monkey Ads & Studios, Four Pillars Media, Socialee, MeDigit | Surat + SG Highway Ahmedabad; Rustampura Surat; site lists Ahd/Surat/Vadodara (Alkapuri address from directories); Makarba Ahmedabad |
| Ahmedabad | MeDigit, MediaF5, IMI Advertising, Monkey Ads & Studios | Makarba; Science City Rd; Satellite; World Trade Tower SG Highway |
| Karnataka / Bengaluru | Kofluence, Confluencr, Social Beat, Hashtag Orange | Sarjapur Rd HQ; Madiwala; Bengaluru office listed; Residency Rd |
| Delhi NCR | Grynow, Opraah, Hashtag Orange, Gravmo | Gurugram; Sector 126 Noida; Sushant Lok Gurugram; site footer "Delhi / Mumbai / Dubai" |

Candidates that were **rejected after checking**:

- YKONE: its Bengaluru "hub" is an engineering and data office, not a client team.
- Monk-E, MAD Influence, WhizCo and Buzzoka: no office published on their own sites.
- Ethinos and Pulp Strategy: no influencer service on their sites; Pulp only has a blog post.
- Amplify.club (formerly One Impression's domain): it is now an AI content product.
- Gravmo for Ahmedabad: its "Ahmedabad agency" page has no Ahmedabad office behind it.
- Programmatic "best agency in [city]" sites such as Moris Media.

Walnut Folks and Confluencr publish the same Bengaluru address, so only Confluencr is listed.

No agency on these pages has ratings, scores, client names, creator counts or awards quoted. Social Beat's award banner and self-described superlatives ("India's largest…", "#1…") were deliberately not repeated.

## 4. Technical changes

- `BlogPost` gained `spatialCoverage`, `mentions` and `breadcrumbParents`.
- `articleSchema` emits `spatialCoverage` (Place) and `mentions` (Organization).
- Blog breadcrumbs (visible and schema) show India › State › City where set.
- `blogCta.ts` has `LOCATION_GUIDE_CTAS`: per-location copy with topic `Location: <place>`, which flows into the inquiry form's `t` param and GA `cta_topic`. There are still exactly two CTAs per page (auto mid + bottom). The form, API, Nodemailer and env vars are untouched.
- Hero diagrams are in `public/blog/locations/*.svg`.
- QA on the production build (2026-09-30):
  - 11 pages checked: 200 status, one H1, correct canonical, valid JSON-LD (BlogPosting, BreadcrumbList, FAQPage), OG tags, 2 inquiry CTAs
  - 118 internal links: 0 broken
  - Sitemap includes all 7 URLs
  - No console or hydration errors
  - No duplicate titles or descriptions in the cluster

## 5. Refresh checklist (every 6 months, or before re-promoting a page)

1. Re-open every URL in `AGENCIES[*].sources`. Confirm the site is live, the office address still matches `presence` and influencer marketing is still listed.
2. Replace any agency that fails, choosing from a *different* agency where possible so that sets stay location-specific. Update `researched` and the page's `lastReviewed`.
3. Re-check that every Kudozz statement still matches `/services` (never add network or campaign counts unless they are verified).
4. Re-run the QA script checks: status, H1, canonical, schema, two CTAs, broken links, sitemap.
5. Only set `updatedAt` when the content itself changes.

## 6. 2026-10-01 update

- **Tamil Nadu rebuilt** (moved from blog.ts to `states.ts`, same URL): Kudozz + Social Beat (Chennai office listed), Bud (Anna Nagar West, Chennai; also Bengaluru), The Pixelate (Thousand Lights, Chennai), Orange Digital Marketing (Adambakkam, Chennai). Each verified on its own site on 2026-10-01; self-reported superlatives, Google Partner badges and counts were not repeated.
- **Telangana research (not yet published):** verified Kofluence (T-Hub, existing record), Social DNA (6-3-1089 Gulmohar Avenue, Somajiguda; influencer marketing listed, event and real estate focus) and Vhonk Digital Marketing (Morning Star Building, Road No. 10, Banjara Hills; influencer marketing listed). Rejected: Zapplr Media, Kalyan Chandra, Telangana Bloggers (no address on their own pages), Fame Keeda and Gravmo (Hyderabad landing pages without a Hyderabad office), Digital Mojo (influencer page 404; not a listed service). One more verified Hyderabad agency is needed before rebuilding the page.

## 7. Next priorities

- **P1 (expand existing guides with 4 researched alternatives):** Telangana (3 of 4 verified, see above), West Bengal (InfluGlue is in Kolkata), Uttar Pradesh (Opraah is in Sector 126, Noida).
- **P2:** Haryana, Rajasthan, Kerala, Punjab, Madhya Pradesh, Andhra Pradesh.
- **P2:** consider a Chandigarh UT page (tricity; TML Agency is headquartered there).
- **P2:** consider a Pune page, but only once 4 Pune-based agencies can be verified.
- **Not recommended:** Puducherry, Andaman & Nicobar, Lakshadweep, DNH&DD, and small cities (see the CSV).
- **Services:** no service × location pages are justified yet. "Company", "services" and "creator marketing agency" share the agency intent. UGC, campaign management, strategy and outreach are owned by `/services/*`. Talent management is not a Kudozz service.
