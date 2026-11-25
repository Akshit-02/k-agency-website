# 02 — Product positioning and content

## Positioning

**Kudozz Discovery** is Kudozz's self-serve influencer discovery platform: brands and marketers search Indian Instagram creators, narrow results with filters, review profiles, shortlist creators into lists and reveal contacts with credits when they are ready to reach out.

It is presented as a Kudozz product, not as a replacement for the agency:

| | Kudozz Discovery — *do it yourself* | Kudozz Agency — *done with you* |
| --- | --- | --- |
| For | Teams who want to explore and shortlist creators on their own | Brands that want strategy, creators and execution handled |
| What they get | Search, filters, profiles, lists, contact reveal | Campaign strategy, creator recruitment and briefing, UGC, social media, reporting |
| Next step | Explore Kudozz Discovery (discover.kudozz.in) | Talk to the team (`/for-brands#inquiry`) / influencer marketing service |

This split appears verbatim on the homepage section, and the service-page copy hands off in both directions ("build your own shortlist first … bring the list to us").

The name "Kudozz Discovery" was used because it is the product's own title suffix (`Sign in · Kudozz Discovery`). The nav label is **Discover Creators** (not "Creator Discovery") because `/services/creator-discovery` already exists as an agency service in the Services menu — reusing the label would make two different things look identical.

## Final homepage content

- **Eyebrow:** A Kudozz product · Influencer discovery platform
- **H2:** Your next creator collaboration *starts here.*
- **Body:** Kudozz Discovery is our creator discovery tool for brands and marketers who want to find influencers themselves. Search Instagram creators in India, filter by niche, location and engagement, review profiles and shortlist the right fit for your campaign.
- **Primary CTA:** Explore Kudozz Discovery ↗ (new tab)
- **Micro-copy:** Free sign-up with 30 credits, valid for 30 days. Opens in a new tab.
- **Secondary CTA:** Looking for end-to-end influencer campaign management? → *See our influencer marketing service* (`/services/influencer-marketing`)
- **Features heading:** What you can do in Kudozz Discovery
  1. Search Indian Instagram creators
  2. Filter by what the brief needs
  3. Review a creator before you commit
  4. Shortlist into lists
  5. Reveal contacts when you're ready ("If a contact isn't on file, no credits are used.")
- **Split:** Do it yourself → *Start discovering creators* · Done with you → *Need help with your influencer campaign?* (`/for-brands?src=homepage&…&pos=discovery#inquiry`)

Five features, not six: "Campaign research" was dropped as a separate card because it would only restate search + filters.

## Service and blog copy

All service and blog copy is in `src/content/discovery.ts`. Headlines are sentence case to match the site's existing headings.

| Page | Variant | Headline | CTA |
| --- | --- | --- | --- |
| `/services/influencer-marketing` | feature | Want to find influencers yourself? | Explore Creator Discovery |
| `/services/influencer-marketing` | compact | Prefer to build your own creator shortlist first? | Explore Kudozz Discovery |
| `/services/creator-discovery` | feature | Rather search for creators yourself? | Try Kudozz Discovery |
| `/services/ugc-campaigns`, `/services/ugc-content-production` | compact | Looking for creators for your next UGC campaign? | Discover Creators |
| `/services/micro-nano-influencer-marketing` | compact | Searching for micro and nano creators yourself? | Discover Creators |
| `/services/instagram-influencer-marketing` | compact | Want to browse Instagram creators yourself? | Explore Kudozz Discovery |
| Blog (45 articles) | blog | Looking for creators for your next campaign? / Looking for Instagram creators for your next campaign? / Looking for UGC creators to work with? | Explore Kudozz Discovery |

## SEO terms used naturally

"influencer discovery platform", "creator discovery tool", "find influencers", "search Instagram creators", "shortlist". Each appears once or twice per placement; the homepage's agency keyword ownership (H1, title, "best" policy) is unchanged. No new pages were created.

## Claims guardrail

`src/config/discovery.ts` holds the only product facts copy may state (Instagram, India, 30 credits / 30 days, credit costs, follower bands, niches) with a pointer to the audit. Adding a capability to the site means verifying it in the platform source first.
