# 02 · Icon design system

## Brand context (unchanged)

The site is editorial and neo-brutalist: paper `#faf1e2` background, ink `#150f0b`, with coral `#ff4d1c` and lime `#ccff3d` as flat blocks (violet was removed from the palette; see `03-implementation-report.md`). Cards have square corners, 1.5 px ink borders and hard offset shadows (`shadow-[6px_6px_0_0_var(--color-ink)]`). Type is Fraunces, Archivo Black and Inter. No gradients and no soft shadows. The icon system follows these rules instead of adding a new look.

## Three tiers

| Tier | Used for | Implementation |
|---|---|---|
| **UI icons** | Arrows, chevrons, menu/close, FAQ plus, search, mail, download, list checks | `lucide-react` (already installed, the only icon library). 2 px stroke. |
| **Pictograms** | Services, process steps, benefits, capability cards | `Pictogram` (`src/components/icons/Pictogram.tsx`): 34 custom glyphs |
| **Platform marks** | Only where the copy is about that platform: platform service rows, SMM platform cards, social links | `PlatformLogo`: official Simple Icons paths, unmodified |
| **Illustrations** | Concepts that need a scene (hero collage, content calendar, network) | Existing code-drawn graphics, kept |

## Pictogram rules

- **Grid:** 48 × 48 with a 3–45 live area.
- **Stroke:** `currentColor`, round caps and joins, `vector-effect: non-scaling-stroke`. This keeps the line at 2 px on screen at every size, matching Lucide. The `weight` prop changes it if needed.
- **Two tones only:** a line colour (inherited text colour) and one accent fill (`--kz-accent`, coral by default). Accent shapes keep their ink outline, so they work on any of the four brand backgrounds. There are no gradients, highlights or extra colours.
- **Accent pairing:** on paper, use the accent of the card's own colour (coral or lime). On coral, use lime. On lime, use coral. On ink, use lime or coral with paper lines.
- **Each glyph is a literal, recognisable object** (calendar, phone filming a product, megaphone, rocket, contract, gift box, map pin, report with bars) rather than an abstract shape. No two services share a glyph.
- **Minimum size 24 px.** Dense glyphs (paid, barter, profile) are only used at 32 px or larger.

## "3D" and depth direction

The brief asks for selective soft 3D renders. On this site, glossy soft-lit 3D icons would break the flat, hard-shadow language (strict rule 1: preserve brand identity). They would also mean large raster files, and no image-generation tool was available in this session. Depth comes from the brand's own vocabulary instead:

- `IconTile` is a solid tile with a 1.5 px ink border and a 3/4/5 px hard offset shadow, the same as the site's cards. It lifts 2 px on hover of a `group` parent.
- It is used only on prominent placements: home service areas (`lg`), the service page hero (`md`) and Why Kudozz (`md`).

If real 3D renders are wanted later, see "Future work" in `03-implementation-report.md`.

## Sizes

| Use | Size |
|---|---|
| Lucide in nav, buttons and links | 16–24 px (unchanged) |
| Platform mark, social link | 18 px |
| Platform mark next to an H3 | 28 px |
| Pictogram in a list row or related card | 40–44 px |
| Pictogram in a feature or process card | 44–56 px |
| `IconTile` sm / md / lg | 48 / 64 / 80–96 px tile, icon 36 / 48 / 60–72 px |

## Colour usage

- Lines use `currentColor`, so hover states that change text colour (related cards, WhyChooseUs ink hover) recolour the icon automatically.
- Accents are set with the `accent` prop, or with a class such as `group-hover:[--kz-accent:var(--color-lime)]` when the card background changes on hover.
- The `.kz-icon` CSS lives in `@layer components` so Tailwind utilities can override the default accent.
- Platform marks are single-colour `currentColor` in paper/white or ink, which every platform's guidelines allow. `brandColor` exists for neutral backgrounds only.

## Accessibility

- Pictograms and platform marks are `aria-hidden` by default because they always sit next to visible text. Passing `label` gives them `role="img"` and an `aria-label`.
- Icon-only links (footer social) carry `aria-label="Kudozz on Instagram"` and similar.
- Meaning never relies on colour alone: every icon has a text label next to it.
- `focusable="false"` is set on SVGs so old Edge and IE versions don't add a tab stop.
- Pictograms are static. The only motion is the 2 px tile lift on hover, a CSS transition that the global `prefers-reduced-motion` rule already shortens.

## Platform marks

- Path data comes from Simple Icons (CC0). LinkedIn's path comes from v13.21.0 because it was removed from later releases at LinkedIn's request; the path is LinkedIn's own "in" mark. The paths are copied byte for byte into `platformPaths.ts` and never redrawn or stretched.
- They appear only next to that platform's name. There is no implied partnership and no decorative use.
