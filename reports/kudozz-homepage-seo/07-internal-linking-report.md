# 07 · Internal Linking Report

## 1. Homepage links: before and after

| Metric (`<main>` only) | Before | After |
|---|---|---|
| Unique internal paths | 54 | 58 |
| Unique internal paths, whole page (incl. header/footer) | — | 62, all returning **200** |
| Links to `/services/influencer-marketing` | 3 | 3 |
| Links to `/services/ugc-content-production` | 3 | 4 |
| Links to `/services/ugc-campaigns` | 2 | 1 (now an explicit "Ongoing UGC Campaigns" button; the generic category-list link was removed) |
| Links to `/services/social-media-management` | 2 | 4 |
| Links to `/services/regional-influencer-marketing` | 2 | 1 |
| Links to UGC / SMM blog guides | 0 | 4 |
| External links | 4 (IAB, IAB UK, ASCI sources) | Unchanged |

## 2. Links added or changed

| Section | Anchor text | Target | Change |
|---|---|---|---|
| Hero | Explore Our Services | `#service-areas` (in-page) | Was `/services`. It now jumps to the service overview directly below. `/services` is still linked from the influencer section and the nav. |
| Intro card | Influencer marketing services for brands | `/services/influencer-marketing` | New anchor (was "See Influencer Marketing") |
| Intro card | UGC content creation services | `/services/ugc-content-production` | New anchor (was "See UGC Production") |
| Intro card | Social media management for growing brands | `/services/social-media-management` | New anchor (was "Explore Social Media Management") |
| Influencer | Explore Influencer Marketing Services | `/services/influencer-marketing` | Anchor extended |
| UGC (new) | See UGC Content Creation | `/services/ugc-content-production` | New |
| UGC (new) | Ongoing UGC Campaigns | `/services/ugc-campaigns` | New |
| UGC (new) | how UGC marketing works for brands | `/blog/what-is-ugc-marketing` | New (327 impr in GSC, pos 17) |
| UGC (new) | what UGC videos cost in India | `/blog/ugc-content-cost-india` | New (160 impr, pos 7.8) |
| Social (new) | Explore Social Media Management | `/services/social-media-management` | New |
| Social (new) | what social media management costs in India | `/blog/social-media-management-cost-india` | New |
| Social (new) | how to choose a social media agency | `/blog/choose-social-media-management-agency` | New |
| Why Kudozz | How we find and vet creators | `/services/creator-discovery` | Anchor varied |
| Why Kudozz | Influencer campaign management | `/services/outreach-management` | Anchor uses a target keyword naturally |
| Why Kudozz | UGC video production | `/services/ugc-content-production` | New card |
| Why Kudozz | Social media management | `/services/social-media-management` | New card |
| Why Kudozz | Campaign reporting | `/services/reporting` | Anchor varied |

**Removed:** the two "supporting service" cards (Creator Discovery and Campaign Management). Both targets are still linked from the influencer section rows and from Why Kudozz. Also removed: the "UGC and content" category list in the influencer section, now covered by the UGC section. The Why Kudozz link to `/services/regional-influencer-marketing` went too, but that page is still linked from the influencer section's "Audiences" list.

No anchor text is repeated for different targets, and each service page gets differently worded anchors.

## 3. Links kept that need a decision

- **10 state/city listicle links in `IndiaCoverage`.** See report 03 #6. My recommendation is to cut this to the national guide plus the 3–4 states that have impressions. **Approval needed.**
- **"Compare influencer marketing agencies in India" → the India listicle.** Keep it for now. It's useful to buyers and transparent. Revisit if GSC shows the homepage and the listicle swapping on the same query.

## 4. Blog → homepage / service page opportunities (recommendations)

The site already adds an automatic "related service" link at the end of every brand article (`src/lib/blogServiceLink.ts`). In-body contextual links are still missing in the posts that get the most commercial impressions:

| Article | GSC (3 mo) | Current service links in body | Add |
|---|---|---|---|
| `/blog/influencer-marketing-agency-pitch-questions` | 522 impr, pos 6.9 | none | In the intro or closing paragraph: "…the questions we expect brands to ask [Kudozz, an influencer marketing agency in India](/)" |
| `/blog/influencer-marketing-agency-fees-india` | 435 impr, pos 12.1 | none | Link "influencer marketing services" → `/services/influencer-marketing` where fees are broken down |
| `/blog/influencer-marketing-agency-checklist` | 175 impr | none | Link to `/` from the checklist's "agency" definition |
| `/blog/ugc-content-cost-india` | 160 impr, pos 7.8 | none | "UGC content creation agency" → `/services/ugc-content-production` in the agency-vs-freelancer cost section |
| `/blog/ugc-content-usage-rights` | 201 impr | `ugc-campaigns` only | Add `/services/ugc-content-production` where it says usage rights are agreed before production |
| `/blog/what-is-ugc-marketing` | 327 impr | ugc-campaigns, ugc-content-production | Already good. Optionally add a link to `/` from "UGC marketing agency". |
| `/blog/instagram-ugc-marketing` | 73 impr | ugc-campaigns, social-campaigns | Add `/services/social-media-management` where it covers reposting UGC on brand accounts |
| SMM guides (`social-media-management-cost-india`, `choose-social-media-management-agency`) | new | — | Link "social media marketing agency in India" → `/` once, and keep service-intent links → `/services/social-media-management` |

**Sitewide rule worth changing (approval):** `blogServiceLink.ts` maps every UGC topic to `/services/ugc-campaigns`. If `ugc-content-production` becomes the UGC agency owner (report 03 #4), route general UGC topics there and keep "Creator Ads / testing" topics on `ugc-campaigns`. This is a one-line regex change, but it affects every UGC article, so I haven't made it.

**Caution:** the memory note on the October indexing gap still applies. Prefer adding links in existing indexed posts over publishing new posts.
