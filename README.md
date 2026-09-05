# Kudozz

Marketing site for Kudozz, an influencer marketing agency. Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/app` — routes (pages, API routes, sitemap, robots, OG image)
- `src/components` — UI grouped by domain: `layout`, `navigation`, `ui`, `animations`, `graphics`, `forms`, and per-page folders (`home`, `brands`, `creators`, `services`, `blog`, `about`, `legal`)
- `src/content` — editable site content: services, case studies, testimonials, creator categories, blog posts, and photography brief prompts (`image-prompts.ts`)
- `src/config/site.ts` — agency name, contact info, nav, and stats — the first place to edit when rebranding
- `src/lib` — shared utilities: Zod validation schemas, metadata/schema.org helpers, the lead-delivery seam (`lib/leads.ts`)

## Editing Content

Most copy lives in `src/config/site.ts` and `src/content/*`, not hardcoded in components — update those files rather than the JSX.

## Connecting Real Lead Delivery

Form submissions (`/api/brand-inquiry`, `/api/creator-application`, `/api/contact`, `/api/newsletter`) are validated with Zod and currently logged server-side via `src/lib/leads.ts`. Replace the body of each `deliver*` function there with a call to your CRM, email provider, or database — the API routes and forms don't need to change.

## Visual System

There is no photography on the site yet — every visual (hero composition, campaign tiles, service icons, blog art) is a custom SVG/CSS "signal" motif built in `src/components/graphics`, so the whole site ships with zero image weight. `src/content/image-prompts.ts` documents a creative brief for real photography per section if you commission it later.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint
