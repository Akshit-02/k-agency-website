# 04 — Implementation Report (Batch 04)

**Status: 20 articles written, integrated locally, built and validated. Not committed, deployed or published.** The blog has no draft flag, so the articles go live with the next deploy unless removed from `src/content/brand-guides/index.ts`.

## Summary
- **Audit:** 6 proposed topics duplicated existing Batch 01/02 articles and were **replaced**:
  - D2C strategy → repeat customers
  - D2C calendar → festive and sale plan
  - D2C in-house vs outsource → Amazon/Flipkart sellers
  - D2C content system → stock-outs, delays and price changes
  - Café marketing → packaged food brands
  - Fashion collections → home décor brands
- **Narrowed:** 2 topics, product explainer formats and small-business offline/online measurement.
- **Writing:** five writers worked in parallel, under a Batch 04 addendum to the shared spec (organic SMM focus, food and product claims rules, review ethics, required assets).
- **Lead review:**
  - Validator: 0 issues (one false positive).
  - Numeric-claim scan.
  - Markdown-link bug found and fixed across all files.
  - Hero contact sheets reviewed.
- **Integration:** index wiring; 20 hand-written CTA pairs (unique headlines and bodies); new "D2C and e-commerce" and "Food, cafés and restaurants" groups on `/services/social-media-management`, with retail and home décor added to "By industry"; `llms.txt` (via the guide groups and the location section).

## Articles, URLs and metadata

Word counts are body plus FAQs. "Title / meta" is the rendered `<title>` length and the meta description length. CTA placement is computed with the live `getMidCtaIndex` logic.

| Article | File | Words | Read | Title / meta | Int. links | Ext. sources | CTA placement | Tags (first 3) | Status |
|---|---|---|---|---|---|---|---|---|---|
| [How D2C Brands Can Use Social Media to Turn First-Time Buyers Into Repeat Customers](/blog/d2c-social-media-repeat-customers) | `smm-d2c-customers.ts` | 2031 | 10 min read | 53 / 153 | 7 | 3 | after "Stage by stage: what to post" (block 19 of 36) + after article | social media for D2C repeat customers; post-purchase content strategy; D2C customer retention social media | Integrated (local, unpublished) |
| [How to Turn Instagram Followers Into Customers for Your D2C Brand](/blog/instagram-followers-to-customers-d2c) | `smm-d2c-customers.ts` | 1764 | 10 min read | 50 / 159 | 6 | 7 | after "Stage 3: proof that a stranger will believe" (block 16 of 31) + after article | how to get customers from Instagram for D2C; Instagram followers to customers; D2C Instagram sales funnel | Integrated (local, unpublished) |
| [How D2C Brands Can Create Product Content That Answers Customer Questions Before They Buy](/blog/d2c-product-explainer-content) | `smm-d2c-customers.ts` | 1715 | 10 min read | 51 / 155 | 5 | 2 | after "Producing each format well" (block 20 of 34) + after article | product content strategy for D2C brands; product explainer videos; D2C product demo content | Integrated (local, unpublished) |
| [Social Media Marketing for Homegrown Indian Brands: Building Trust Before Customers Place an Order](/blog/social-media-marketing-homegrown-indian-brands) | `smm-d2c-customers.ts` | 1621 | 10 min read | 56 / 155 | 5 | 4 | after "Brand story and founder visibility" (block 14 of 30) + after article | social media marketing for Indian brands; homegrown brand social media; building trust on social media | Integrated (local, unpublished) |
| [Festive and Sale-Season Social Media Planning for D2C Brands: A Week-by-Week Plan](/blog/d2c-festive-sale-social-media-plan) | `smm-d2c-planning.ts` | 1857 | 9 min read | 45 / 149 | 5 | 4 | after "Write offer terms people can actually read" (block 13 of 32) + after article | festive sale social media plan for D2C brands; Diwali social media plan; sale season content calendar | Integrated (local, unpublished) |
| [How to Launch a New D2C Product on Social Media: A Step-by-Step Content Plan](/blog/d2c-product-launch-social-media-plan) | `smm-d2c-planning.ts` | 1641 | 8 min read | 49 / 150 | 5 | 5 | after "Launch day: run it like an event" (block 16 of 30) + after article | D2C product launch social media strategy; product launch content plan; 14-day launch plan | Integrated (local, unpublished) |
| [Social Media Marketing for D2C Brands on a Small Budget: Where Should Founders Start?](/blog/low-budget-social-media-marketing-d2c) | `smm-d2c-planning.ts` | 1580 | 8 min read | 48 / 149 | 8 | 4 | after "The small-team weekly routine" (block 15 of 29) + after article | low budget social media marketing for D2C brands; social media for small D2C brands; D2C founder social media | Integrated (local, unpublished) |
| [How D2C Brands Should Communicate Stock-Outs, Delivery Delays and Price Changes on Social Media](/blog/d2c-stockouts-delays-social-media) | `smm-d2c-planning.ts` | 1729 | 9 min read | 57 / 160 | 5 | 2 | after "Delivery delays" (block 18 of 34) + after article | how to announce stock out or delivery delay on social media; delivery delay message to customers; out of stock announcement post | Integrated (local, unpublished) |
| [Social Media Marketing for Packaged Food and Beverage Brands: Building Trust Without Overclaiming](/blog/social-media-marketing-packaged-food-brands) | `smm-food.ts` | 2315 | 12 min read | 47 / 159 | 7 | 5 | after "Recipes, usage and label education that sell honestly" (block 16 of 32) + after article | social media marketing for food brands; packaged food social media strategy; FSSAI advertising and claims rules | Integrated (local, unpublished) |
| [Instagram Content Ideas for Café Owners: What to Post Beyond Food Photos](/blog/instagram-content-ideas-for-cafes) | `smm-food.ts` | 1792 | 9 min read | 48 / 154 | 6 | 3 | after "Single photo and graphic post ideas (5)" (block 16 of 30) + after article | Instagram content ideas for cafes; cafe Instagram post ideas; cafe Reels ideas | Integrated (local, unpublished) |
| [Social Media Marketing for Cloud Kitchens: Building Visibility Without a Physical Storefront](/blog/social-media-marketing-cloud-kitchens) | `smm-food.ts` | 1779 | 9 min read | 41 / 157 | 7 | 2 | after "Packaging as your shopfront" (block 17 of 32) + after article | social media marketing for cloud kitchens; cloud kitchen Instagram strategy; delivery-only restaurant marketing | Integrated (local, unpublished) |
| [How Bakeries and Dessert Brands Can Use Reels to Showcase Products and Drive Orders](/blog/instagram-reels-ideas-for-bakeries) | `smm-food.ts` | 1760 | 9 min read | 47 / 153 | 7 | 3 | after "24 Reels concepts with hook lines" (block 17 of 30) + after article | Instagram Reels marketing for bakeries; bakery Reels ideas; dessert brand Instagram | Integrated (local, unpublished) |
| [Restaurant Menu Photography and Short-Form Video: A Content Brief for Social Media Teams](/blog/restaurant-food-photography-video-brief) | `smm-restaurants.ts` | 2180 | 11 min read | 52 / 159 | 5 | 6 | after "The seven parts of a restaurant shoot brief" (block 21 of 42) + after article | social media content for restaurants; restaurant food photography brief; restaurant video shot list | Integrated (local, unpublished) |
| [Social Media Campaigns for Restaurants: How to Promote Seasonal Menus, Events and Limited-Time Offers](/blog/restaurant-seasonal-menu-campaigns) | `smm-restaurants.ts` | 1959 | 10 min read | 56 / 157 | 7 | 5 | after "Sample timeline: a six-week seasonal menu campaign" (block 16 of 31) + after article | social media marketing campaigns for restaurants; restaurant seasonal menu promotion; restaurant event promotion on Instagram | Integrated (local, unpublished) |
| [How to Promote a New Café or Restaurant Opening on Social Media](/blog/restaurant-opening-social-media-plan) | `smm-restaurants.ts` | 1902 | 10 min read | 53 / 158 | 6 | 4 | after "Running an honest soft launch" (block 15 of 28) + after article | social media marketing for restaurant opening; new café opening Instagram plan; restaurant launch content calendar | Integrated (local, unpublished) |
| [How Restaurants Can Manage Customer Comments, Reviews and Complaints on Social Media](/blog/restaurant-social-media-reviews-complaints) | `smm-restaurants.ts` | 2169 | 11 min read | 55 / 158 | 6 | 4 | after "Response examples by scenario" (block 35 of 49) + after article | restaurant social media reputation management; how to respond to restaurant reviews; restaurant complaint response examples | Integrated (local, unpublished) |
| [Social Media for Amazon and Flipkart Sellers: Building a Brand Beyond the Marketplace Listing](/blog/social-media-for-amazon-flipkart-sellers) | `smm-retail.ts` | 1977 | 10 min read | 54 / 157 | 5 | 3 | after "What to post, week to week" (block 18 of 34) + after article | social media marketing for Amazon sellers; social media for Flipkart sellers; marketplace seller brand building | Integrated (local, unpublished) |
| [Social Media Marketing for Local Retail Stores: How to Get More Customers From Your Nearby Area](/blog/social-media-marketing-retail-stores) | `smm-retail.ts` | 1658 | 10 min read | 54 / 153 | 7 | 3 | after "A four-week local retail content plan" (block 15 of 30) + after article | social media marketing for retail stores; local store social media; retail store Instagram ideas | Integrated (local, unpublished) |
| [Social Media Marketing for Home Décor and Furnishing Brands: Selling a Look, Not Just a Product](/blog/social-media-marketing-home-decor-brands) | `smm-retail.ts` | 1716 | 10 min read | 44 / 159 | 6 | 3 | after "Dimensions, colour and material honesty" (block 15 of 30) + after article | social media marketing for home decor brands; home furnishing brand social media; home decor Instagram content | Integrated (local, unpublished) |
| [How Small Business Owners Can Measure Whether Their Social Media Is Actually Generating Sales](/blog/measure-social-media-sales-small-business) | `smm-retail.ts` | 1801 | 10 min read | 58 / 159 | 6 | 2 | after "The signals worth counting" (block 17 of 34) + after article | social media metrics for small businesses; measure social media sales; social media ROI for small business | Integrated (local, unpublished) |

Total: about 36,900 words.

## Search intent and practical resources

| Article | Intent | Resource |
|---|---|---|
| 01R repeat customers | Informational | Post-purchase content sequence; reminder checklist |
| 03 Instagram to customers | Informational / commercial | Follower-to-customer journey table and checklist |
| 06 product explainers | Informational | Question-to-format map; explainer brief template |
| 19 homegrown brands | Informational | Trust-building framework |
| 02R festive and sale plan | Planning | Week −6 to +2 plan; offer-terms template; readiness checklist |
| 05 launch | Planning | 14-day launch plan; asset brief template |
| 07 small budget | Informational | Do now / later / skip table; ~4-hour weekly routine |
| 08R stock-outs and delays | Template | 10 post and reply templates; "where each update goes" table |
| 09R packaged food | Commercial / informational | FSSAI provision table; pillars; claims checklist |
| 10 café ideas | Inspiration | 36 ideas in 5 formats; views-to-visits note |
| 15 cloud kitchens | Commercial / informational | Delivery journey; weekly plan and planning sheet |
| 16 bakery Reels | Inspiration | 24 Reels concepts with hooks; order-enquiry journey; reply templates |
| 11 restaurant shoot brief | Template | Shoot brief template; 8-row shot list |
| 12 seasonal campaigns | Planning | 6-week timeline; campaign brief; event and LTO variants |
| 13 opening | Planning | 21-day calendar (D−14 to D+6); set-up checklist |
| 14 reviews and complaints | Template | 8 reply templates; 11-row escalation table |
| 04R marketplace sellers | Informational | Listing-to-social map; channel-consistency checklist |
| 17 retail stores | Commercial / informational | Four-week plan; weekly planning template |
| 18R home décor | Commercial / informational | Room-and-product framework; room shoot brief |
| 20 measurement | Informational | Monthly reporting template; "can and can't attribute" table |

## Files

**Created:**
- `src/content/brand-guides/smm-d2c-customers.ts`
- `src/content/brand-guides/smm-d2c-planning.ts`
- `src/content/brand-guides/smm-food.ts`
- `src/content/brand-guides/smm-restaurants.ts`
- `src/content/brand-guides/smm-retail.ts`
- 20 SVG heroes in `public/blog/brand-guides/`
- `reports/social-media-management-batch-04/internal-links.csv`

**Modified:**
- `src/content/brand-guides/index.ts`
- `src/lib/blogCta.ts` (20 entries)
- `src/content/social-media-management.ts` (guide groups)

**Not touched:** forms, APIs, email, environment, analytics, existing articles and URLs.

## Internal links and service pages supported

- **Volume:** 195 links in total: 96 blog, 25 service and 74 external official references (shown as plain text under the link policy).
- **SMM page:** 20 links using 16 distinct anchors.
- **Other services linked:**
  - `/services/ugc-content-production`
  - `/services/product-launches` (05)
  - `/services/social-campaigns` (12, 13)
  - `/services#influencer-marketing` and `/services/creator-discovery` where relevant
- **Twins:** every article links its influencer twin, plus the Batch 01–02 operations guides (community vs support, crisis, KPIs, Reels, calendar, customer questions, multiple locations).

## Metadata and schema

- Unique titles (50–60 characters) and meta descriptions (140–160), one H1, self canonicals.
- BlogPosting, BreadcrumbList and FAQPage via the existing templates.
- No schema changes.
