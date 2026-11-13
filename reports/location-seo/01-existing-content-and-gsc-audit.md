# 01 — Existing Content and GSC Audit (Location SEO)

Audit date: 12 November 2026. Sources: the repository (`src/content/location-guides/`, `src/content/blog.ts`, `src/lib/links.ts`, `src/lib/schema.tsx`), `reports/2027-global-transformation/10-content-cannibalisation-report.md`, and `gsc-data.xlsx` (web, last 3 months).

## 1. Existing location content

| Family | Pages | Notes |
|---|---|---|
| Influencer marketing agencies: India, states and UTs, cities | 1 India + ~37 states/UTs + Mumbai, Delhi, Ahmedabad (and a few others) | `best-influencer-marketing-agencies-in-<place>`. Built with researched `AgencyRecord`s (sources and date checked), Kudozz first, a publisher-style selection method, and `mentions` schema. |
| Specialist influencer listicles (UGC, Instagram, YouTube, campaign management, seeding) × India + Mumbai, Delhi, Bengaluru, Chennai, Ahmedabad | 30 | Published 15–16 Oct 2026. |
| Social media marketing or management location pages | **0** | — |
| Country pages for UAE, KSA, UK, Australia, Singapore | `/markets/<country>` service pages (influencer) plus country guides in the GCC, UK and AU clusters | Influencer intent only |

## 2. GSC performance of location pages (last 3 months)

| Page | Impressions | Clicks | Position |
|---|---|---|---|
| `/blog/best-influencer-marketing-agencies-in-india` | **14,204** | 141 | 11.3 (plus anchor URLs: #agencies-india 1,437, #quick-answer 1,243 …) |
| State pages (Karnataka 121, Kerala 118, Andhra Pradesh 98, Rajasthan 96, Manipur 94, West Bengal 70, Odisha 70, Telangana 62 …) | 49–121 each | 0–3 | 4–27 |
| City pages: Mumbai, Delhi (42), Ahmedabad | Low | ~0 | — |
| 30 specialist city listicles | **0** | 0 | — |

**What this shows:**
- The **national** listicle is by far the strongest location asset; Google rewards the comprehensive country page.
- State pages earn modest long-tail impressions.
- City-level and specialist variants earn almost nothing.

## 3. Queries in this programme's scope

| Query pattern | Matches in the GSC export |
|---|---|
| "social media marketing agency / company in <place>" | **0** |
| "social media management agency / company in <place>" | **0** |
| "social media agency" (any) | 0 brand-service matches; only "social media influencer (marketing) agency" variants (≤ 43 impressions, positions 20–30), which belong to the influencer pages |
| Country modifiers (UAE, UK, Australia, Singapore, Saudi) + social media | 0 |

**Conclusion:** Kudozz has **no existing visibility** for this keyword family, so there's nothing to cannibalise, and no page to improve instead. Every new page starts from zero.

## 4. Material risks identified (documented before building)

1. **Doorway-page risk is already on record.** The 10 November 2026 cannibalisation report rated the 30 specialist city listicles the site's "highest doorway-page risk": near-duplicate text, zero impressions. It recommended no new location pages without approval and proposed consolidating city variants. Adding a large new set of SMM city pages built from a template would amplify that risk across the domain.
   - **Mitigation adopted:** a small first wave (India + 8 metros).
   - Every page is individually researched, with location-specific sections and **different competitor sets** per city.
   - Shared text is limited to the disclosure, the selection criteria and the Kudozz profile (identical by design, for factual consistency).
   - A pairwise text-overlap check is part of QA (see 06).
   - **The existing doorway risk still needs a decision.** Consolidating the 30 specialist city pages is recommended again, and needs approval.
2. **International delivery of social media management is unconfirmed.** Every report since the service launch (expansion report 02/11, Batch 01–03 reports) has recorded SMM as offered in India, with other markets "confirmed case by case". The brief forbids implying service coverage that isn't verified.
   - **Decision:** UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, UK, Australia and Singapore pages are **not built in wave 1**. They are researched and prioritised in `02-location-opportunity-matrix.md`.
   - **This decision blocks international pages:** if Kudozz confirms it serves SMM in a market (remotely is fine, if stated honestly), those pages move to Priority 1.
3. **Outbound links are policy-blocked.** `src/lib/links.ts` renders all external URLs as plain text except `zspace.in` and `flowjam.com`, by an explicit site-wide policy. The brief asks to "link to the official website" of each competitor.
   - **Decision:** competitor domains appear on the page as text (the URL stays in the data and in the research log), consistent with every existing listicle.
   - **This needs a decision to change:** allowlisting competitor domains (with `rel="nofollow"`) would change site-wide policy. Not done.
4. **Kudozz has no city offices.** Pages say plainly that Kudozz works with brands across India **remotely**. No LocalBusiness schema; Organization schema is unchanged.

## 5. Agency vs company, marketing vs management (SERP check, 12 Nov 2026)

These queries were searched:
- "best social media marketing agency in Ahmedabad"
- "best social media management agency in Ahmedabad"
- "best social media marketing company in Mumbai"
- "best social media management company in Mumbai"

**Findings:**
- **Same result sets.** Clutch's "Top Social Media Marketing Companies in <city>", DesignRush "Social Media Marketing Company Rankings", Semrush Agencies, and agency self-published "top 10" lists.
- **The same agencies are named** for marketing and management queries.
- **Some agencies publish near-identical pages for both terms.** For example, Wildnet has separate "best social media management company in Mumbai" and "best social media marketing agency in Mumbai" pages with the same intent.
- **No distinct intent was found** between "marketing" and "management", or between "agency" and "company".

**Decision:** **one page per location** targets all four primary keyword groups. Separate pages would compete for the same results. See `04-keyword-and-url-map.md`.

## 6. Existing pages to improve rather than duplicate

- **None for SMM intent.**
- **Recommended, separately:** CTR work on `/blog/best-influencer-marketing-agencies-in-india` (14,204 impressions, 0.99% CTR) — a title/meta refresh, already noted in the 2027 roadmap. This is outside this programme and needs approval.

## 7. Internal linking architecture (decided)

- **India SMM page:** the hub. It links to all wave-1 city pages.
- **City pages:**
  - link to the India SMM page through breadcrumb and body;
  - cross-link the same place's existing *influencer* listicle, with one clarifying sentence;
  - link `/services/social-media-management` (sections), `/for-brands#inquiry`, the cost, brief and agency-choice guides, and relevant industry SMM guides for that city's business mix.
- **Service page:** the `/services/social-media-management` Guides section gets a "Agency guides by location" group.
- **No new hub route:** the India page plays that role.
