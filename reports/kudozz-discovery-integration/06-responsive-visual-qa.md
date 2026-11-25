# 06 — Responsive and visual QA

Method: `next dev` + headless Chromium (Playwright), `prefers-reduced-motion: reduce`, page scrolled end-to-end so scroll-reveal content is visible, fixed header hidden for element shots. Then `tsc --noEmit`, ESLint on changed files and a full `next build` (exit 0).

## Homepage section

| Viewport | Width | Section height | Primary CTA | Overflow in section | Notes |
| --- | --- | --- | --- | --- | --- |
| Large desktop | 1600 | 1,680px | 283×56 | none* | Two columns; mock-up with sidebar, results and profile panel; 5 feature cards in a row. |
| Laptop | 1280 | 1,702px | 283×56 | none* | Sidebar hidden in mock-up to give the results room. |
| Small laptop | 1024 | 2,167px | 283×56 | none* | Nav pill shortens to "Discover"; toast moved off the cards. |
| Tablet | 768 | 2,563px | 283×56 | none* | Stacked; mock-up shows sidebar + two cards; features 2-up. |
| Mobile | 390 | 2,555px | 267×56 | none* | CTA ~575px into the section; feature cards show titles only, 2-up. |
| Small mobile | 320 | 2,867px | 267×56 | none* | Fixed a grid min-content overflow (`minmax(0,1fr)`) and reduced CTA padding. |

\* The only element past the right edge is the decorative blurred glow, clipped by the section's `overflow-hidden`.

## Other placements

| Check | Result |
| --- | --- |
| Desktop nav (1024 / 1280 / 1600) | Pill fits beside "Talk to Our Team" with no wrapping; lime border, hover fills lime. |
| Mobile menu (320 / 390 / 768) | Discovery card first in the menu, visible without scrolling; link present (`nav_mobile` count 1). |
| Footer | "Kudozz Discovery [Tool]" in lime at the end of FOR BRANDS. |
| Influencer marketing feature band (1280 / 390) | Headline + CTA left, verified points right; stacks on mobile. |
| Compact strip (1280 / 390) | Text left, link right; stacks on mobile. No overflow. |
| Blog aside (1280 / 390) | Sits after the article body within the text column. No overflow. |

## Accessibility

- All Discovery links are real `<a>` elements, keyboard focusable, with the site's coral `:focus-visible` outline, and an sr-only "(opens in a new tab)".
- Section has `aria-labelledby` its H2; banners/asides have `aria-label="Kudozz Discovery"`.
- Mock-up is `aria-hidden` with a visible caption; no fake data is read out.
- Icons are `aria-hidden`; the CTA and nav pill include text.
- Motion: one-off CSS rise-in and the site's existing float/Reveal; all disabled by the global `prefers-reduced-motion` rule. No animation blocks nav or CTAs.

## Performance

- No images, video or new libraries; the mock-up is ~200 lines of HTML/CSS with inline SVG icons from the existing `lucide-react`.
- Fixed-size layout, so no layout shift; the homepage hero/LCP is unchanged.
- Section is below the fold and server-rendered.

## Known pre-existing issues (not introduced here)

- At 320px another homepage section (the `clip-notch` ink block with the large coral number) overflows by ~25px.
- Global `* { border-color }` overrides Tailwind border colours site-wide (see 03).

## Not tested

Real devices and Safari/Firefox — Chromium only. The live production deploy was not checked, because nothing has been deployed.
