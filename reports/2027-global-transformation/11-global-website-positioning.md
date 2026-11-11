# 11 · Global Website Positioning

Date: 2026-11-10. Local and reviewable only; nothing was deployed.

## Positioning statement (recommended; uses only verified facts)
> **Kudozz is an influencer marketing agency from India that plans, runs and measures creator campaigns for brands in India, the UAE, Saudi Arabia, the UK, Australia and Singapore, with each market's creator licensing, disclosure rules and languages built into the plan.**

Every element can be checked:
- India-registered entity (Kudozz Studios Private Limited).
- Six delivery markets, confirmed by the owner on 2026-10-12.
- The service process published on `/services`.

It does **not** claim offices, local teams, clients, results, network size, awards or rankings.

## Consistent entity description (use everywhere: site, `llms.txt`, social bios, directories)
| Element | Wording |
|---|---|
| Name | Kudozz (legal: Kudozz Studios Private Limited, registered in India) |
| Category | Influencer marketing agency (managed service; not a platform or marketplace) |
| Services | Strategy, creator discovery and vetting, outreach and management, social and launch campaigns, UGC, ambassador programmes, paid/barter/seeding/affiliate models, platform specialisms (Instagram, YouTube, LinkedIn), regional and micro/nano programmes, reporting |
| Markets | India (primary); UAE, Saudi Arabia, UK, Australia, Singapore; Qatar, Kuwait, Oman, Bahrain case by case |
| Audiences | Brands (inquiry at `/for-brands#inquiry`); creators (application at `/for-creators#apply`) |
| Differentiators (process claims, not results) | One agreed KPI before outreach; audience-fit and authenticity screening with a written reason per creator; one point of contact; market-specific compliance (disclosure labels, permits/licences); creator and agency fees shown separately |

## Messages by audience and market
| Audience or market | Lead message | Proof available today | Avoid |
|---|---|---|---|
| Indian brands | "Creator campaigns planned around one KPI, with creators across India's languages and cities" | Process pages, regional service, 900+ guides | "Best", "No. 1", client counts |
| Indian brands expanding abroad | "Take a proven creator approach into the UAE, Saudi Arabia, the UK, Australia or Singapore, with each market's rules handled" | Market pages with primary-source rules | Implying local offices or licences |
| UAE and Saudi brands | "Arabic and English creator campaigns, with permit and Mawthooq checks before shortlisting" | Market pages, GCC guides | Claiming Kudozz can issue or obtain permits |
| UK, Australian and Singapore brands | "Strategy-first creator campaigns with your market's disclosure rules written into every brief" | Market pages | "Local team" |
| US and EU brands | Educational and cross-border content only (diaspora, India-entry) | Guides | Service landing pages until delivery is confirmed |
| Creators | "Free to join, reviewed personally, briefs and terms shared before you commit, no promised deals" | For Creators page | Income or deal-frequency promises |

## The "Best Influencer Marketing Agency in India" question (needs your decision)
- **Current state:** the homepage `<title>` and H1 lead with "Best Influencer Marketing Agency in India".
- **Search data:** GSC shows "best influencer marketing agency in india" (539 impressions, position 7.7) and "influencer marketing agency" (2,901 impressions, position 11.7). These most likely land on the India listicle, not the homepage (homepage: 521 impressions in total).
- **Risks:**
  - The superlative is unsubstantiated. ASCI's Code expects objective claims to be substantiated, and `llms.txt` already says there is no verified ranking.
  - The site's credibility depends on not overstating.
- **Recommendation:** change the H1 lead phrase and title to "Influencer Marketing Agency in India", keeping the slogan. Expected SEO impact is small, because the listicle already carries the "best" queries.
- **Not changed in this pass.** It is a top-level brand and SEO decision; approve and it's a two-line edit in `src/components/home/Hero.tsx` and `src/app/page.tsx`.
