# 07 · Service Page Audit

## Overall assessment

The service pages are well built. Every one of the 19 existing pages has an answer-first definition block, a "who it's for" line, a 4-step process, deliverables, "what we need from you", "how success is measured", market links, 3–7 FAQs, linked guides and related services, plus Service, BreadcrumbList and FAQPage JSON-LD. None contains fabricated results, client names or ratings. Testimonials and case studies were deliberately removed until real ones exist.

The problem is **visibility and proof**, not structure:

| Page | GSC impressions (3 mo) | Avg position |
|---|---|---|
| `/` (homepage) | 521 | 9.5 |
| `/services` | 42 | 8.8 |
| `/for-brands` | 34 | 7.9 |
| `/services/ugc-campaigns` | 120 | 36.0 |
| `/services/outreach-management` | 71 | 15.5 |
| `/services/creator-discovery` | 35 | 17.2 |
| `/services/product-launches` | 34 | 20.2 |
| `/services/social-campaigns` | 29 | 7.8 |
| `/services/campaign-strategy` | 22 | 38.7 |
| `/services/ambassador-programs` | 2 | 4.5 |
| 11 other service pages, incl. social media management | 0 | – |

Commercial influencer queries generated **13,466 impressions but 99 clicks** (0.7% CTR) across 261 queries, because the pages Google shows for them sit on page two. Meanwhile 49% of attributable clicks come from consumers looking for free access to Instagram subscription content, which has no commercial value.

## Page-by-page

### Homepage `/`
- **Strengths:** clear three-service positioning (social media management, influencer marketing, UGC), "how it works", industries linked to deep guides, India coverage, international markets, FAQs, two inquiry entry points with attribution parameters.
- **Issues:** the title and H1 claimed "Best Influencer Marketing Agency in India" with no verifiable basis (flagged by the October audit, still live). There was no link to a dedicated influencer marketing service page (none existed).
- **Changes made:** title → *Influencer Marketing & Social Media Agency in India | Kudozz*; H1 label → *Influencer Marketing & Social Media Agency in India*; "Influencer Marketing" service area and a new "Explore Influencer Marketing" button now link `/services/influencer-marketing`.
- **Still needed (owner input):** proof. Even 2–3 named, permissioned case studies with a real KPI would do more for conversion and E-E-A-T than any copy change.

### For Brands `/for-brands`
- **Strengths:** problem → service → why us → markets/industries → FAQ → inquiry form. FAQs answer real buying questions honestly (no minimum budget, fees shown separately, international contracting).
- **Issues:** almost no search visibility (34 impressions). That's expected for a conversion page; it should receive traffic from service pages and blog CTAs rather than rank itself. `FeaturedCampaigns` is commented out pending real case studies.
- **Recommendation:** no SEO rewrite. Add a short "what happens after you submit" timeline (response time, first call, proposal) once Kudozz commits to a response time. That was raised in October and still needs an owner decision.

### For Creators `/for-creators`
Distinct creator journey with its own form; not turned into a sales page. **No changes.** (The October audit suggested making the Instagram handle optional and adding platform and language fields. That's out of scope here: form fields are frozen by the brief.)

### NEW: Influencer Marketing Services `/services/influencer-marketing`
- **Why:** "influencer marketing agency" (2,901 impressions, pos 11.7), "influencer marketing services" (453, pos 16.0) and about 160 related queries had no dedicated landing page. The nav pointed at an anchor on `/services`.
- **What it contains:** an answer-first definition, scope, a 4-step process, deliverables, client inputs, success measures, a comparison table (influencer marketing vs UGC vs social media management), a **"What's included" block linking all 16 influencer sub-services** by category, 8 linked guides, 6 FAQs, markets, and Service, BreadcrumbList and FAQPage schema.
- **Claims policy:** every statement restates what other Kudozz pages already publish (process, fee transparency, tiers, platforms, markets, disclosure). No results, clients or numbers were added.
- **Validation:** builds statically; `page_checks` reports **no findings**; title 52 chars; description 152 chars; no horizontal overflow at 390 px.
- **Cosmetic note:** the hero eyebrow reads "Service 20" because display numbers are kept stable for existing pages. Hide the eyebrow on pillar pages if that looks odd.

### Influencer sub-services (18 pages)
| Page | Assessment | Recommendation |
|---|---|---|
| `campaign-strategy` | Strong definition; pos 38.7 | Fine as a sub-service now that the pillar exists. Don't target "influencer marketing agency" here |
| `creator-discovery` | Most linked from blogs (59 body links) | Add an example shortlist row format (anonymised) to show what "the reason each creator is on it" looks like |
| `outreach-management` | Owns "campaign management services"; has a comparison table | Mention "influencer campaign management" once in the intro paragraph (the guide owns the how-to) |
| `reporting` | Good | Add an anonymised sample report image when available |
| `paid-` / `barter-` / `seeding-gifting` / `affiliate` | Shared comparison table; clear pay-model differences; ASCI labels | Keep |
| `ambassador-programs` | Only 3 FAQs | Add 2 FAQs on contract length and exclusivity (answers exist in the blog) |
| `product-launches` | Pos 20 | Link from `/blog/influencers-for-product-launch` near the top |
| `social-campaigns` | Pos 7.8 on small volume | Keep |
| `instagram-` / `youtube-` / `linkedin-influencer-marketing` | Platform-specific, not duplicates | Keep; each should link its strongest blog pillar (Instagram → `instagram-influencer-marketing`) |
| `regional-influencer-marketing` | Genuine differentiator (Indian languages) | Make it more visible on the homepage and India shortlist |
| `micro-nano-influencer-marketing` | Comparison table | Keep |

### UGC: `ugc-campaigns` and `ugc-content-production`
Clearly differentiated: campaigns are creators posting on their own accounts; production is brand-owned assets with usage rights. The pages distinguish commissioned creator content from organic customer content, as the brief requires. **Issue:** "ugc marketing" (232 impr, pos 19.2) is informational, so the guide `what-is-ugc-marketing` should own it and link both services prominently. A "UGC for e-commerce / Shopify product pages" section on `ugc-content-production` would serve the D2C target audience better than a new page.

### Social media management `/services/social-media-management`
- **Strengths:** a custom, comprehensive page: scope, what's included and what's scoped separately (paid ads, shoots, customer support), platforms chosen per brand rather than "all included", process, client responsibilities, community management limits, 109 linked guides. It separates organic management from paid advertising, as the brief requires.
- **Issues:** zero impressions so far (launched 12 Nov 2026; too new to judge). The HTML is 351 KB because of the 109-guide list.
- **Gap (needs owner decision):** the brief lists **social media marketing** as a separate service from management. The site has no social media marketing service page; "social media marketing" queries have no visibility in GSC, yet 9 new city shortlists target "social media marketing agencies". Decide whether Kudozz sells social media marketing beyond management (campaign planning, paid social). If yes, add a section to the SMM page first and only create a separate page if demand appears. If not, re-angle the 9 shortlists toward "social media management".

### Markets `/markets/*` (UAE, Saudi Arabia, UK, Australia, Singapore)
Well researched (local licensing such as the UAE NMA permit, ASA labels, ACCC) and honest about not having local offices. **Zero impressions** in the export because they were published or rebuilt in October (see technical P0-1). No changes; judge them after the indexing check.

## Conversion journey

- All brand CTAs lead to `/for-brands#inquiry` with source, position and topic parameters, so leads can be attributed. Form fields, API routes and email were **not touched**.
- Blog articles have two topic-matched CTAs (mid and end) plus a "Related Kudozz service" text link. This already meets the brief's "two subtle CTAs" standard. The only change was pointing generic topics' service link to the new pillar instead of `campaign-strategy`.

## Proof gaps Kudozz should fill (no fabrication)

1. 3–5 case studies with brand permission: objective, KPI, creator mix, what happened, what changed next time.
2. Named people: founder and strategist bios with LinkedIn, for authorship and the About page.
3. Real client logos or quotes, only with written permission.
4. A published response-time commitment for inquiries.
5. Any verifiable credentials (platform partner programmes, ASCI membership if applicable).
