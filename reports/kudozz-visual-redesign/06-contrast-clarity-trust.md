# 06 · Colour contrast, clarity and trust pass

Method: an axe-core `color-contrast` audit (WCAG 2.1 AA) in headless Chrome on 19 representative pages (home, For Brands, For Creators, services hub, 3 service pages, SMM, About, Contact, blog index and an article, markets hub and a market page, tools, creator resources hub and a section, a legal page, 404). Desktop at 1280 px, key pages repeated at 390 px.

## Result

| | Contrast failures |
|---|---|
| Before | 1,394 (1,099 on the blog index alone) |
| After | 0 real failures. The only remaining flags are giant `aria-hidden` watermark numerals and words ("KUDOZZ", "BRANDS", "01"), which are intentional background texture and hidden from assistive technology. |

## Root causes and fixes

| Cause | Fix |
|---|---|
| Bright coral used as small text on paper (2.96:1): blog card categories, section labels, calculator legends, error messages | New token `--color-coral-deep: #b8300a` for small coral text on light backgrounds (5.3:1 on paper, 4.6:1 on paper-dim). `text-coral-dim` and coral hover text converted. Bright coral stays for fills, icons and text on ink (5.7:1). |
| Large coral display words at 2.96:1 (needs 3:1) | `--color-coral` nudged from `#ff4d1c` to `#fb4a18` (not visibly different). 3.07:1 on paper. |
| Faded ink text, `text-ink/35` to `/65`, on paper | Floor of `text-ink/70` (157 replacements). Hierarchy now comes from size, weight and letter-spacing rather than near-invisible grey. |
| Faded ink on coral (`/60` and `/70`, 3.1–3.8:1) | `text-ink/90` or solid ink on coral: final CTA, footer newsletter band, coral service card, collage chip, SMM report card |
| Faded paper on ink (`/40`, `/45`) | Floor of `text-paper/70` (footer copyright, "problems" list, labels) |
| Opacity-dimmed text on rotating card colours | Body and labels `opacity-85`, large step numbers `opacity-70` |
| SMM approach step numbers at `text-ink/20` | `text-ink/55` (large text, passes 3:1) |
| Faint form placeholders | Raised to at least 55% |
| Coral initials on the lime "Creator Resources" blog graphic | Ink |
| Coral focus ring invisible on coral sections | Ink focus ring there (done earlier) |

## Clarity and trust changes

- **Stat sources are now real links** (IAB, IAB UK, ASCI) in "Why creator-led marketing wins", opening in a new tab. The code comment already said they were linked; they weren't.
- **Removed a visible developer placeholder** on For Brands: "Credentials, awards, and client results will appear here as they're finalized — this section is structured to add them without a redesign."
- **Four working commitments under the For Brands hero CTA**: screening, written terms, separate creator and agency fees, KPI reporting. Each one restates a promise already made elsewhere on the site (service pages, brand FAQ, inquiry section). No new claims, numbers, logos or testimonials were invented.
- **Button icon wrap fixed**: icons passed as button children (e.g. the ↓ on "Tell Us About Your Brand") wrapped to a second line because SVGs are `display: block`. The children wrapper is now `inline-flex`.

## Not changed

- Copy, metadata, URLs, forms logic, analytics.
- Blog diagram SVGs: their text was already high-contrast paper or ink.
- Decorative watermarks: kept as background texture, `aria-hidden`.

## Suggested next steps (need your input or real data)

- Real proof: client logos, case studies and testimonials. The components exist (`FeaturedCampaigns`, `Testimonials`) but are hidden until genuine material is available.
- Founder or team section on About with names and photos. Real people help trust a lot for agencies.
