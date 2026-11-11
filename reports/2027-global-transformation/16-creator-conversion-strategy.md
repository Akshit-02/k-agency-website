# 16 · Creator Conversion Strategy

Date: 2026-11-10. Local and reviewable only; nothing was deployed.

## Journey audited
1. Search lands on a Creator Resources article. There are 298 creator articles, with 56 section pages under `/creator-resources`.
2. The article shows two system CTAs (mid and bottom). Both go to `/for-creators?src=<slug>&cat=…&pos=mid|bottom&t=…#apply` with `ctaType: creator_signup`. 30 articles also have article-specific copy (`CREATOR_SLUG_COPY`, Creator Batches 01–02).
3. The visitor reaches `/for-creators`: hero, benefits, how it works, **new** expectations sections, application form, **new** FAQ, resources teaser.
4. The form (unchanged) posts to `/api/creator-application` with attribution `src`, `cat` and `pos`.

Verified in the crawl: all 292+ creator article pages render creator CTAs only; none render brand-inquiry CTAs.

## Implemented in this pass
- For Creators expectation-setting content and FAQs (see report 14).
- Benefits copy no longer promises opportunities.
- Contact page routes creators to the application.
- `llms.txt` describes the creator registration process accurately.

## Recommendations
| # | Change | Why | Approval needed |
|---|---|---|---|
| 1 | Make the Instagram handle optional, or add "Primary platform" plus "Profile URL" | YouTube-only, UGC, podcast, LinkedIn and gaming creators are half of the recent creator content's audience | Yes (form change) |
| 2 | Add an optional "Languages you create in" field | Regional and multilingual matching is a core Kudozz claim | Yes (form) |
| 3 | Send a confirmation email that restates the no-guarantee terms and links 3 guides | Sets expectations and reduces follow-ups | Yes (email) |
| 4 | Report creator applications by `src` in analytics | Lets creator content be judged on registrations, not just traffic | Analytics owner |
| 5 | Add per-section CTA copy for the remaining 268 creator articles in batches (most high-impression first) | Contextual CTAs over generic ones | No (content) |
| 6 | Link the creator hub from the homepage hero ("Creator? Join the network") | Gives creators a second path from the homepage | No (copy) |
