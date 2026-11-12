# 06 — Google Search Console Analysis (Batch 02)

Source: `gsc-data.xlsx` (web, last 3 months, export from early November 2026; top 1,000 queries, 697 pages). No newer export is in the repository, so Batch 01 and the SMM page have no data yet.

## Queries by Batch 02 theme

| Theme (regex on Queries sheet) | Queries | Impressions | Top queries | Owner today |
|---|---|---|---|---|
| Instagram business / management / profile / bio / carousel / Stories | 2 | 89 | "instagram stories influencer marketing" (74, pos 4.8) | `instagram-stories-influencer-marketing` (influencer). Article 23 links to it and targets brand Stories instead |
| Reels strategy / ideas / plan for brands | 1 | 12 | "indian food content creator instagram reels strategy" | Creator-side |
| Facebook | 11 | 807 | All variants of `site:facebook.com/help/instagram "view insights on your instagram reels"`, a creator analytics lookup | Creator Reels analytics guide |
| LinkedIn page / company | 0 | 0 | — | — |
| YouTube channel / thumbnail / title / brand | 12 | 1,110 | "plan a creative content strategy to grow a youtube shorts channel" (315, pos 7.4); "youtube brandconnect" (134) | Creator-side Shorts guide and BrandConnect guide |
| Pinterest | 3 | 78 | "pinterest influencer rates" (46) | Pinterest influencer cluster |
| Content calendar | 0 | 0 | — | — |
| Graphic / design / template | 4 | 33 | "hook video template" | UGC hooks |
| D2C / e-commerce | 8 | 172 | "best influencer marketing agencies for d2c brands in india" (35); "influencer marketing d2c brands india" (33); **"instagram content strategy for d2c beauty brand" (29, pos 9.5)** | Influencer D2C pages. The last query is brand-side SMM intent and is relevant to 36 and 37 |
| Beauty / skincare | 1 | 29 | same as above | — |
| Fashion | 1 | 37 | "india fashion influencer marketing market" | Influencer |
| Restaurant / food | 1 | 12 | creator Reels query | Creator-side |
| SaaS | 1 | 0 | — | — |

## Findings

1. **No cannibalisation risk.** No primary keyword in this batch has impressions on any existing page. Adjacent queries are influencer- or creator-intent and keep their current owners.
2. **One brand-side signal:** "instagram content strategy for d2c beauty brand" (29 impressions, position 9.5) suggests Google already sees Kudozz as relevant for brand Instagram strategy in D2C beauty. Articles 36 (D2C) and 37 (beauty) both address it. **36 is the intended owner** (D2C strategy); 37 links to it.
3. **Creator YouTube Shorts queries** (578 impressions combined, 0 clicks, positions 6.8–7.4) belong to the creator Shorts guide. That page has a CTR problem worth a separate title/meta review, outside this batch. Article 28 must not target them, and it doesn't: its primary is brand channel management.
4. **The Facebook query volume is a creator analytics lookup**, not Facebook Page management demand.

## Low-CTR opportunities (context)

Unchanged from Batch 01's analysis: influencer agency head terms on the homepage and service pages, and creator Instagram and YouTube queries. None are in scope here.

## Limitation

No keyword-volume tool was available, so prioritisation is qualitative (intent, gaps, service fit). Re-run GSC 8–12 weeks after deployment to see which Batch 01 and 02 articles earn impressions.
