# 13 — Conversion Optimisation Recommendations

## Implemented

| Area | Change |
|---|---|
| SMM page | Four tracked CTAs at natural decision points: hero (`pos=hero`), after the service breakdown (`pos=mid`), after the scope section (`pos=scope`), final (`pos=bottom`). All carry `from=service:social-media-management` and `t=Social Media Management`, which the existing form already passes into the lead email and GA4 `generate_lead`. |
| SMM page | Transparency sections (included vs scoped separately, Kudozz vs client responsibilities) to pre-qualify leads and cut scope arguments later. |
| Homepage | Service discovery cards for the three areas; separate brand ("Let's Discuss Your Brand") and creator ("Join Our Creator Network") journeys; final CTA no longer campaign-only. |
| Navigation | Services dropdown; Contact added; CTA "Talk to Our Team" fits every service. |
| For Brands | Service cards now link to service pages (previously dead-end cards); hero CTA "Tell Us About Your Brand". |
| Services hub | Pillar jump links in the hero; SMM feature block with direct CTA. |
| CTA variety | Discuss Your Social Media Goals · Let's Plan Your Social Presence · Tell Us About Your Brand · Talk to Our Team · Explore Social Media Management · Let's Discuss Your Brand · Join Our Creator Network. No label repeats within a page. |

## Recommended, NOT implemented (need approval: form and backend are out of scope)

1. **Add "Social Media Management" to the "What are you looking for?" options** in `BrandInquiryForm.tsx` (`campaignGoalOptions`) and map `t=Social Media Management` → that option in `TOPIC_TO_CAMPAIGN_GOAL`. Today SMM leads arrive with the dropdown blank; the topic is still visible in the hidden `ctaTopic` field. Front-end-only change; no API, schema or email change needed (`campaignGoal` is a free string ≤ 200 chars).
2. **Budget field fit.** Current buckets ("Under ₹4 lakh (under US$5k)" …) read as campaign totals. SMM is usually priced monthly. Options: add a "Monthly retainer" helper line, or show alternative monthly buckets when SMM is selected. Requires validation and email-template review.
3. **Optional qualifier for SMM:** "Which platforms do you need managed?" (multi-select). Improves scoping but adds friction; test only if lead quality is a problem.
4. **Analytics:** add a GA4 exploration for `generate_lead` where `lead_source = service:social-media-management`, and track clicks on the nav dropdown items. (No tracking code was changed.)
5. **Proof:** the For Brands `WhyChooseUs` section shows a visible placeholder ("Credentials, awards, and client results will appear here…"). Replace with real, approved proof (a first SMM client calendar sample, anonymised before/after audit) or remove the line.
6. **Sample deliverable:** a downloadable anonymised "sample monthly content calendar" or "sample monthly report" on the SMM page would be the strongest conversion asset, since the page can't show results yet.
7. **Response promise:** the inquiry section promises a reply "within one business day". Confirm the team can hold this with added SMM enquiries.
8. **Contact page:** consider adding the same three-area choice there so general enquiries self-segment.

## What to measure after launch (no claims of improvement made)

- SMM page: sessions, scroll to `#scope`, CTA clicks by `pos`, enquiries with `lead_source=service:social-media-management`.
- Homepage: clicks on ServiceAreas cards vs old WhatWeDo rows; creator vs brand CTA split.
- Nav: dropdown item clicks.
- Search Console: impressions for "social media management" queries on the SMM page; homepage "influencer marketing agency" position (guard metric, should not fall).
