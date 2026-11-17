# 03 · Keyword-to-URL Mapping and Cannibalisation Control

**No URLs were changed, redirected, merged or deleted.** Every item marked *approval* below is a recommendation only.

## 1. Ownership map

| Keyword group | Owner URL | Role | Supporting URLs |
|---|---|---|---|
| best influencer marketing agency in India; influencer marketing agency (in) India; influencer agency India | **`/`** | Agency-level, brand-entity page | `/services/influencer-marketing`, `/about` |
| influencer marketing services (India) | **`/services/influencer-marketing`** | Service depth (scope, process, sub-services) | `/` |
| best / top influencer marketing agencies in India; top 10 … | **`/blog/best-influencer-marketing-agencies-in-india`** | List intent (comparison guide, discloses that Kudozz publishes it) | — |
| UGC marketing agency India; UGC content creation agency; UGC video production; UGC creators India | **`/services/ugc-content-production`** | Service depth | `/` (secondary), `/services/ugc-campaigns` |
| UGC for performance marketing; UGC creator campaigns; ongoing UGC ads | **`/services/ugc-campaigns`** | Programme/testing service | `/services/ugc-content-production` |
| best UGC marketing agencies in India | **`/blog/best-ugc-marketing-agencies-in-india`** | List intent | — |
| what is UGC marketing; UGC strategy | **`/blog/what-is-ugc-marketing`** | Informational | — |
| social media marketing agency India; social media management agency/services India; social media content creation; social media strategy | **`/services/social-media-management`** | Service depth | `/` (secondary) |
| best social media marketing agencies in India | **`/blog/best-social-media-marketing-agencies-in-india`** | List intent | — |
| influencer campaign management; influencer outreach | `/services/outreach-management` | Sub-service | — |
| influencer discovery and selection | `/services/creator-discovery` | Sub-service | — |
| influencer marketing strategy | `/services/campaign-strategy` | Sub-service | — |
| influencer campaign reporting | `/services/reporting` | Sub-service | — |
| regional influencer marketing | `/services/regional-influencer-marketing` | Sub-service | `/blog/regional-influencer-marketing-india` |
| micro-influencer marketing | `/services/micro-nano-influencer-marketing` | Sub-service | — |
| influencer / social media marketing for D2C | `/blog/influencer-marketing-d2c-brands-india`, `/blog/social-media-management-d2c-brands` | Informational / commercial investigation | — |
| creator partnerships for brands | `/` (supporting phrase), `/services/ambassador-programs` | — | — |
| all services overview | `/services` | Hub | — |
| brand enquiry | `/for-brands#inquiry` | Conversion | — |

## 2. Title and H1 overlap check (rendered, production build, 17 Nov 2026)

| URL | Title | H1 |
|---|---|---|
| `/` | Best Influencer Marketing Agency in India \| Kudozz | India's influencer, UGC and social media marketing agency for growing brands. |
| `/services` | Influencer Marketing & Social Media Services — Kudozz | Social media, influencer marketing and UGC services: Three service areas… |
| `/for-brands` | Influencer Marketing & Social Media Services for Brands | Influencer marketing and social media services for brands: Stop chasing attention… |
| `/about` | About Kudozz: Influencer Marketing Agency in India — Kudozz | We started Kudozz because… |
| `/services/influencer-marketing` | Influencer Marketing Services: Strategy to Reporting | Influencer Marketing Services |
| `/services/ugc-content-production` | UGC Video & Content Production Services — Kudozz | UGC Content Production |
| `/services/ugc-campaigns` | UGC Campaign Services for Brands in India — Kudozz | UGC Campaigns |
| `/services/social-media-management` | Social Media Management Services for Brands — Kudozz | Social media management services: … |
| `/blog/best-influencer-marketing-agencies-in-india` | Best Influencer Marketing Agencies in India (2026 Guide) | Best Influencer Marketing Agencies in India: 5 to Consider… |
| `/blog/best-ugc-marketing-agencies-in-india` | Best UGC Marketing Agencies in India (2026 Guide) — Kudozz | Best UGC Marketing Agencies in India: 5 to Consider… |
| `/blog/best-social-media-marketing-agencies-in-india` | Best Social Media Marketing Agencies in India (2026) | Best Social Media Marketing and Management Agencies… |

No two titles or H1s are identical, and every page has exactly one H1.

## 3. Cannibalisation risks and recommended corrections

| # | Risk | Evidence | Recommendation | Status |
|---|---|---|---|---|
| 1 | **Homepage vs India listicle for "best influencer marketing agency in India"** | The listicle had 14,204 impressions vs 521 for the homepage. The homepage title is now singular "Best … Agency" and the listicle plural "Best … Agencies". | Keep both. Google treats singular agency intent ("hire one") and plural list intent ("compare several") differently. Re-check in GSC in 6–8 weeks (Performance → query contains "best influencer marketing agency" → Pages). If the two pages trade positions for the same query, stop linking to the listicle from the homepage with the "Compare influencer marketing agencies in India" CTA. | Monitor |
| 2 | `/services` and `/for-brands` titles are near-duplicates ("Influencer Marketing & Social Media Services [for Brands]") | Titles differ only by "for Brands" | Retitle `/for-brands` around the enquiry intent, e.g. "Work With Kudozz: Brand Enquiries for Creator, UGC & Social Campaigns". Retitle `/services` as the catalogue, e.g. "Influencer, UGC & Social Media Services". | **Approval** (outside homepage scope) |
| 3 | Pillar title lacks "India" / "agency" | `/services/influencer-marketing`: "Influencer Marketing Services: Strategy to Reporting" | Change to "Influencer Marketing Services in India \| Kudozz" so it owns the service query while the homepage owns the agency query. Wait for the first GSC data on the pillar (created 13 Nov) before changing it. | Recommended after one GSC cycle |
| 4 | Two UGC service pages with blurred roles | `ugc-campaigns` meta starts "UGC marketing agency services…", while `ugc-content-production` targets production. GSC: `ugc-campaigns` 120 impr at pos 36. | Make `ugc-content-production` the owner of "UGC agency / UGC content creation agency" (the homepage now links it as the primary UGC page). Rewrite `ugc-campaigns`' meta description to lead with "ongoing UGC ad testing programme", not "UGC marketing agency". | **Approval** |
| 5 | No dedicated "social media marketing" page; the SMM page title says "management" only | 0 impressions on SMM agency queries | Don't create a new page; that would duplicate the SMM page. Consider retitling it "Social Media Marketing & Management Services in India" once it has 4–6 weeks of data. | Recommended, later |
| 6 | Homepage links to 10 state/city "best agencies" listicles (`IndiaCoverage`) | The earlier audit (`claude-seo-kudozz/06`) flags the 73-page location family as a doorway risk | Cut the homepage list to the national guide plus 3–4 states that actually get impressions (West Bengal, Karnataka, Telangana, Maharashtra), or move the list to `/markets`. This reduces sitewide emphasis on the doorway pattern. | **Approval** (link removal changes no URLs, but it reverses earlier work) |
| 7 | "best" phrasing on the homepage | The title holds the superlative (owner decision). The description uses it as a question. | Keep it out of headings and body copy. A comment in `src/app/page.tsx` records the rule. | Done |

## 4. Rules for future content

- Only the homepage uses "agency in India" as its headline positioning. Service pages say "services".
- List-intent ("best/top … agencies") stays on the existing listicles. Don't create new ones until the indexing question in `reports/claude-seo-kudozz/02` is answered.
- Don't copy homepage service paragraphs onto service pages. The homepage sections are summaries written for this page only (verified in report 08 §11).
