# 04 · Visual QA report

Method: `next dev` on localhost. Headless Chrome (Playwright) scrolled each page to trigger the reveal animations, then took screenshots of individual sections at **1440**, **1280** and **390** px wide. A contact sheet of all 34 pictograms was also rendered at 64, 40 and 24 px on all four brand backgrounds. The extension-based browser was not used.

## Pages and sections checked

| Page / section | Desktop | Mobile | Result |
|---|---|---|---|
| Home: service areas + supporting cards | ✓ | ✓ | Pass, after one fix (below) |
| Home: What we do (ServiceRow) | ✓ | — (icons hidden below `sm`, as before) | Pass |
| Home: How it works (desktop scroller, mobile stack) | — | ✓ | Pass |
| Home: Why Kudozz | ✓ | — | Pass, after one fix |
| Home: hero collage | ✓ | — | Pass |
| `/services` directory (all 20 rows, including platform rows) | ✓ | — | Pass |
| Service detail hero (`/services/creator-discovery`) | — | ✓ | Pass: tile sits next to the CTA without wrapping |
| For Brands: services grid, why choose us | ✓ | — | Pass |
| For Creators: why join, how it works | ✓ | ✓ | Pass |
| SMM: approach, capabilities, platforms | ✓ | — | Pass, after one fix |
| Footer | ✓ | — | Pass |
| Production build | ✓ | | Pass (2,247 pages) |

## Issues found and fixed

1. **Icons too small inside tiles.** The `IconTile` icon filled about 58% of the tile. Raised it to about 75% (sm 36, md 48, lg 60–72 px), and moved Why Kudozz from `sm` to `md` tiles.
2. **Platform marks in lime.** Single-colour use of platform marks is generally allowed only in black or white. Changed the SMM platform marks from lime to paper (near-white).
3. **Accent override not applying.** The `.kz-icon` default accent was unlayered CSS, so it would beat Tailwind's layered `[--kz-accent:…]` utilities. Moved it into `@layer components`. Confirmed in screenshots: violet and lime accents render on the home tiles.

## Checks passed

- No icon overflows its container at 390 px, and no horizontal scroll was introduced.
- Icons align with the step numbers and headings in every card group.
- Every icon set inside a card group uses one style (pictograms, or official marks in the platform group).
- Platform marks render their correct, unaltered shapes (Instagram, Facebook, LinkedIn, YouTube, Pinterest, X, Snapchat).
- No broken or missing assets. All icons are inline SVG, so there are no network requests and no layout shift.
- Hover states keep contrast: related cards (ink hover), WhyChooseUs (coral, lime and violet hovers).

## Known notes, not defects

- A "Skip to content" pill and an overlapping header appear in the element screenshots. These come from Playwright's capture of fixed elements. The skip link is off-screen until focused (`-translate-y-24`, `focus:translate-y-0`), and `layout.tsx` was not changed.
- Platform icons in `ServiceRow` are hidden below `sm`, as the motifs were before; the row title already names the platform.
- Not checked visually: blog pages, markets pages and the tools page. Their only icon changes are the shared footer and the small tools kind icons, which typecheck and build cleanly. Worth a quick look before release.
