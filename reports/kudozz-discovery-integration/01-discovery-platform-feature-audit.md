# 01 — Kudozz Discovery: platform feature audit

Audited 25 Nov 2026 from the source of `influencer-discovery-fe` (Next.js 14 app) and `influencer-discovery-be` (AppSync/Lambda/DynamoDB), plus the live host `https://discover.kudozz.in/`. Neither repository was modified.

## How the live URL behaves

| Request | Result |
| --- | --- |
| `GET https://discover.kudozz.in/` | 307 → `/dashboard/discover` (`next.config.mjs` redirect) |
| `GET /dashboard/discover` (signed out) | 307 → `/login?redirect=%2Fdashboard%2Fdiscover` (`src/middleware.ts`) |
| `GET /login` | 200, `<title>Sign in · Kudozz Discovery</title>` |

There is **no public landing page**: a new visitor lands on the sign-in screen, which links to sign-up. The sign-in layout carries a product showcase (`components/auth/AuthShowcase.tsx`).

Query strings survive both redirects (the second one nests them inside `redirect=`), so UTM tags reach the platform's logs but the platform itself has **no analytics** installed (no gtag/GA/GTM in its source).

## Verified capabilities

| # | Question | Finding | Source |
| --- | --- | --- | --- |
| 1 | What it does | "Find, filter and shortlist the right creators for your brand." | `src/config/brand.ts` (`APP_TAGLINE`) |
| 2 | Who it's for | Brands, marketers and agencies. Sign-up profile asks for job title, company, industry, company size, monthly budget; industry list includes "Marketing agency". | `src/lib/constants/profile.ts` |
| 3 | Platforms | **Instagram only.** Usernames link to instagram.com, avatars are cropped from Instagram's profile embed; no other platform appears in code or data model. | `components/creators/CreatorIdentity.tsx`, `CreatorAvatar.tsx` |
| 3a | Market | Indian creators (the product's own copy: "shortlist Indian creators"; location filters are states and cities). | `AuthShowcase.tsx`, `creatorFilters.ts` |
| 4 | Creator info shown | Name, @username, verified badge, followers, following, posts, avg likes, avg views, avg comments, engagement rate (with quality label Low/Average/Strong/Exceptional), posting frequency, gender, city/state/country, niches, languages, collaboration types. Rate-card fields exist in the model but are **not shown** in the profile drawer. | `lib/models/creator.ts`, `CreatorDrawer.tsx`, `lib/utils/format.ts` |
| 5 | Search | Free-text search by name or @username (debounced). Sort: most/fewest followers, highest engagement, most avg views, most avg likes. Card and table views. Filters and sort live in the URL, so searches can be bookmarked/shared. | `DiscoverView.tsx`, `creatorFilters.ts` |
| 6 | Filters | Follower bands (Under 1K, 1K–3K, 3K–5K, 5K–10K, 10K–100K, 100K–1M, 1M+) or a custom range; niche (14 + Other); state; city; language; gender; min engagement rate (0–15%); min avg views; min avg likes; min posting frequency; "has email"; "has phone". Facet options come from live data. | `creatorFilters.ts`, `niches.ts`, `components/discover/filters/*` |
| 7 | Creator profiles | Yes — profile drawer. Opening a profile costs 1 credit the first time; it then stays unlocked. | `CreatorDrawer.tsx`, BE `CLAUDE.md` |
| 8 | Shortlist / save | Yes — named personal lists ("My lists"), "Save to list" picker, list detail view with in-list search/sort. | `components/lists/*`, `listsSlice.ts` |
| 9 | Contact reveal | Yes — email (1 credit) and phone (2 credits). Contact values are never sent with search rows. **Missing contacts are never charged.** Unlocks are permanent. | `models/creator.ts`, `CreatorDrawer.tsx`, BE `CLAUDE.md` |
| 10 | Registration | Required. Full name, work email, password, then email verification code. | `SignupForm.tsx`, `VerifyCodeStep.tsx` |
| 11 | Free / paid | Sign-up is free and grants **30 credits valid for 30 days**. Credit packs (Starter ₹249/50 … Agency ₹2,999/1,000) are defined, but **checkout is not live** — the Pay button is disabled with "Online payments are launching soon". | BE `cognito/functions/post-confirmation/index.js`; FE `creditPacks.ts`, `BuyCreditsModal.tsx` |
| 12 | Credits | Yes. Costs: advanced filter set 2 (same set free for 24h), open profile 1, reveal email 1, reveal phone 2. Expired wallets spend nothing. | BE `CLAUDE.md`, `helper/credits.js` |
| 13 | Onboarding | Sign-up → email code → `/dashboard/discover`. Settings page for profile and password; Help & support page (contact Kudozz, suggestions/feedback). | `routes.ts`, `navItems.ts` |
| 14 | What a new visitor can do | Before sign-up: only see sign-in/sign-up screens. After sign-up: search, filter (basic free; advanced costs credits), sort, view profiles, build lists, reveal contacts, contact support. "Campaigns" and "Reports" appear in the sidebar as **coming soon**. | `navItems.ts` (`UPCOMING_ITEMS`) |

## Claims intentionally NOT used on kudozz.in

| Excluded claim | Why |
| --- | --- |
| Creator database size / "millions of creators" / "largest" | No count is published; `totalCount` is per search only. |
| YouTube, LinkedIn or multi-platform discovery | Instagram only. |
| Creators outside India | Not supported. |
| Pricing / credit-pack prices | Checkout isn't live; packs could change. |
| "Free forever" / "free to use" | Only the sign-up grant (30 credits, 30 days) is free. |
| Campaign management or reporting inside the tool | Listed as "coming soon". |
| Audience demographics, fake-follower detection, AI matching | Not present. |
| Rate cards / creator pricing | Fields exist in the model but aren't shown to users. |
| Live data in the homepage mock-up | The mock-up is illustrative with blank creator details. |

## Metadata note (platform, for a separate task)

The platform's root metadata is only `title: "Kudozz Influencer Discovery"` and the tagline; there are no Open Graph tags or public indexable page. Not changed here — recommend a public landing page on `discover.kudozz.in` as a separate project if the product should rank on its own.
