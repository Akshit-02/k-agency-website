import type { BlogPost } from "@/content/blog";
import { AUTHOR, GCC2_PUBLISHED, GCC_LANGUAGE, GCC_PLAYBOOK, GCC_REVIEWED, REVIEW_DATE_TEXT, SRC } from "@/content/gcc-guides/shared";

/** Topics 1435, 1438 and 1439: multi-market budgets, UAE/Saudi affiliate programs and cross-country reporting. */
export const gccOperationsPosts: BlogPost[] = [
  // 1435
  {
    slug: "gcc-influencer-marketing-budget",
    category: "Campaign Strategy",
    title: "GCC Influencer Marketing Budgets: How to Allocate Spend Across Markets",
    seoTitle: "GCC Influencer Marketing Budgets: Allocating Across Markets",
    excerpt:
      "How to split an influencer budget across the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain and Oman: allocating by objective and market role, the cost lines each market needs, handling six currencies honestly, and reallocating after a test.",
    metaDescription:
      "Allocating influencer budgets across GCC markets: objectives, market roles, creator mix, production, paid amplification, licensing, currencies and reallocation.",
    author: AUTHOR,
    publishedAt: GCC2_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "10 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "Gulf Cooperation Council countries",
    breadcrumbParents: [GCC_PLAYBOOK],
    tags: ["GCC influencer marketing budget", "influencer budget Middle East", "multi-country influencer budget", "influencer budget allocation GCC"],
    related: ["gcc-influencer-marketing-playbook", "influencer-marketing-cost-saudi-arabia", "gcc-influencer-campaign-reporting"],
    hero: {
      src: "/blog/gcc-guides/gcc-influencer-marketing-budget.svg",
      alt: "Budget allocation across GCC markets by role (lead, test, maintain), with each market's costs held in its own currency and converted at a dated rate",
    },
    body: [
      {
        type: "paragraph",
        text: "A GCC influencer budget often starts as one number and a list of six countries. Splitting it evenly, or by population, almost always misallocates it. Markets differ in what you're trying to achieve there, how much it costs to reach the right audience, and what else you need to pay for to operate properly: Arabic production, licence checks, promotion permits, paid amplification and measurement.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Allocate a GCC influencer budget by giving each market a role (lead, test or maintain) based on your objective and commercial priority, then build each market's budget bottom-up from creator quotes plus the costs that market needs: rights, production, Arabic or other language work, paid amplification, compliance and measurement. Keep each market in its own currency, convert to a reporting currency only at a disclosed, dated rate, hold back a reserve to move to whatever works, and reallocate after a test phase based on cost per result, not on reach.",
      },
      { type: "heading", text: "Step 1: Give each market a role", id: "roles" },
      {
        type: "table",
        headers: ["Role", "When to use it", "Budget behavior"],
        rows: [
          ["Lead", "Your biggest commercial opportunity, where you already sell or have distribution", "Largest share; full creator mix, amplification and measurement"],
          ["Test", "A market you're entering or unsure about", "Small, fixed budget with clear success criteria"],
          ["Maintain", "A market where you need presence but not growth this period", "Smaller always-on spend with a few trusted creators"],
          ["Skip for now", "No distribution, no approvals, or no clear audience", "Zero; creators can't sell what people can't buy"],
        ],
      },
      {
        type: "paragraph",
        text: "Smaller markets often start in the test role. What a test needs in each is covered in the country guides for Qatar, Kuwait and Oman, including how licensing works in each.",
        links: [
          { text: "Qatar", href: "/blog/influencer-marketing-qatar" },
          { text: "Kuwait", href: "/blog/influencer-marketing-kuwait" },
          { text: "Oman", href: "/blog/influencer-marketing-oman" },
        ],
      },
      { type: "heading", text: "Step 2: Build each market bottom-up", id: "bottom-up" },
      {
        type: "table",
        headers: ["Cost line", "What it covers", "Market-specific notes"],
        rows: [
          ["Creator fees", "Content and posting", "Quote per market; no universal GCC rate exists"],
          ["Usage rights and exclusivity", "Using content in ads; barring competitors", "Define territory: one country or the GCC"],
          ["Production", "Shoots, travel, hosting, events", "Higher where events or venues are central"],
          ["Language work", "Briefs, captions, subtitles, native review", "Saudi, Kuwaiti, Omani and other dialects; community languages in the UAE and Qatar"],
          ["Paid amplification", "Ad spend behind creator content", "Platform availability and costs vary by market"],
          ["Compliance", "Licence checks, promotion permits, product approvals", "Each country has its own regime"],
          ["Measurement", "Tracking set-up, landing pages, reporting", "Separate set-up per market"],
          ["Management", "Agency or internal team time", "Multi-market coordination takes more time"],
          ["Tax", "VAT where applicable", "Rates differ, and not every GCC country applies VAT"],
        ],
      },
      {
        type: "paragraph",
        text: "Saudi cost drivers and a worked worksheet in SAR are in how much influencer marketing costs in Saudi Arabia. The general method for budgeting across creators within one market is in influencer budget allocation.",
        links: [
          { text: "how much influencer marketing costs in Saudi Arabia", href: "/blog/influencer-marketing-cost-saudi-arabia" },
          { text: "influencer budget allocation", href: "/blog/influencer-budget-allocation" },
        ],
      },
      { type: "heading", text: "Step 3: Handle currencies honestly", id: "currencies" },
      {
        type: "paragraph",
        text: "Budget and contract each market in its own currency: AED, SAR, QAR, KWD, BHD and OMR. Don't add amounts in different currencies together. When you need a single regional total, convert each market's figure into one reporting currency at a stated rate and date, and record it in the plan.",
      },
      {
        type: "list",
        items: [
          "Five GCC currencies are pegged to the US dollar: as listed by MEED, AED 3.6725, SAR 3.75, QAR 3.64, BHD 0.376 and OMR 0.3845 per US dollar",
          "The Kuwaiti dinar is managed against an undisclosed basket of currencies, so its rate moves; use your finance team's rate for a stated date",
          "Pegs can be adjusted, so confirm current rates with the central banks or your bank before finalizing",
          "Note whether each figure includes VAT before converting",
        ],
      },
      {
        type: "paragraph",
        text: "The peg rates are summarized by MEED. A worked conversion, for illustration: a UAE budget of AED 183,625 is USD 50,000 at 3.6725, and a Saudi budget of SAR 225,000 is USD 60,000 at 3.75, giving a USD 110,000 reporting total for the two markets at those stated rates. The figures are hypothetical.",
        links: [{ text: "summarized by MEED", href: SRC.meedPegs.url }],
      },
      { type: "heading", text: "Step 4: Hold a reserve and reallocate", id: "reallocate" },
      {
        type: "list",
        items: [
          "Keep part of the total, often 15% to 25%, unallocated until test results are in",
          "Define in advance what success looks like per market: cost per delivered order, per qualified lead, per activated user",
          "After the test phase, move the reserve to the markets and creators beating their targets",
          "Compare markets on cost per result in a common currency at a stated rate, not on reach or engagement",
          "Account for differences in market size and objective when comparing; a small market with a test role won't match a lead market's volume",
        ],
      },
      { type: "heading", text: "An illustrative allocation", id: "example" },
      {
        type: "table",
        headers: ["Market", "Role", "Budget (local currency)", "Notes"],
        rows: [
          ["Saudi Arabia", "Lead", "SAR 300,000", "Arabic creators in two regions; paid amplification; licence checks"],
          ["UAE", "Lead", "AED 150,000", "Arabic and English segments; separate tracking per language"],
          ["Kuwait", "Test", "KWD 6,000", "Contracts reference the new licence requirement"],
          ["Qatar, Oman, Bahrain", "Not funded this quarter", "-", "Revisit after the test"],
          ["Reserve", "-", "Held in USD, 20% of the converted total", "Moved after week four"],
        ],
      },
      {
        type: "paragraph",
        text: "Hypothetical, for illustration only; not a recommendation for any brand and not Kudozz client data. Kuwait's figure would be converted at a dated rate before any regional total is calculated.",
      },
      { type: "heading", text: "What not to do", id: "mistakes" },
      {
        type: "list",
        items: [
          "Split the budget by population or evenly across six markets",
          "Apply one 'GCC rate' to every creator",
          "Add AED, SAR and KWD together without converting",
          "Forget language production, compliance and measurement costs",
          "Spend everything upfront with nothing left to move to what works",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A good GCC budget is six local budgets with a shared logic: roles set by commercial priority, costs built from real quotes and real operating needs, currencies kept separate until converted at a stated rate, and a reserve that follows the results. How results should be compared across markets is covered in GCC influencer campaign reporting.",
        links: [{ text: "GCC influencer campaign reporting", href: "/blog/gcc-influencer-campaign-reporting" }],
      },
    ],
    faqs: [
      {
        question: "How should I split an influencer budget across GCC countries?",
        answer:
          "Give each market a role based on your objective and commercial priority, build each market's budget from creator quotes and operating costs, hold a reserve, and reallocate after a test based on cost per result.",
      },
      {
        question: "Is there a standard GCC influencer rate?",
        answer:
          "No. Creator fees vary by market, audience, format, rights and timing. Get quotes per market rather than applying a regional rate.",
      },
      {
        question: "How do I report a GCC budget in one currency?",
        answer:
          "Keep each market in its own currency, then convert to a reporting currency at a stated rate and date. Five GCC currencies are pegged to the US dollar; the Kuwaiti dinar is managed against a basket, so use a dated rate.",
      },
    ],
  },
  // 1438
  {
    slug: "influencer-affiliate-marketing-uae-saudi-arabia",
    category: "Campaign Strategy",
    title: "Influencer Affiliate Marketing in the UAE and Saudi Arabia: A Practical Brand Guide",
    seoTitle: "Influencer Affiliate Marketing in the UAE and Saudi Arabia",
    excerpt:
      "How to run creator affiliate programs in the UAE and Saudi Arabia: links and promo codes, commission structures, attribution windows, returns and cancellations, payment terms, disclosure, and the separate licensing and promotion rules in each country.",
    metaDescription:
      "Influencer affiliate marketing in the UAE and Saudi Arabia: links and codes, commissions, attribution windows, returns, payments and each country's rules.",
    author: AUTHOR,
    publishedAt: GCC2_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "11 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "United Arab Emirates and Saudi Arabia",
    breadcrumbParents: [GCC_PLAYBOOK],
    tags: ["influencer affiliate marketing UAE", "influencer affiliate marketing Saudi Arabia", "affiliate creators GCC", "creator commission UAE Saudi"],
    related: ["influencer-affiliate-program", "influencer-marketing-ecommerce-brands-saudi-arabia", "influencer-marketing-ecommerce-brands-uae"],
    hero: {
      src: "/blog/gcc-guides/influencer-affiliate-marketing-uae-saudi-arabia.svg",
      alt: "Affiliate flow for creators in the UAE and Saudi Arabia: link or code, attribution window, delivered order after returns, commission payment, with separate country rules",
    },
    body: [
      {
        type: "paragraph",
        text: "Affiliate deals look simple: the creator shares a link or code and earns a commission on sales. In the UAE and Saudi Arabia they need a little more care. Many buyers pay on delivery or return items, marketplaces have their own affiliate programs, platform shopping features aren't the same in both countries, and each country has its own licensing and promotion rules.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To run influencer affiliate marketing in the UAE and Saudi Arabia, give each creator a tracked link and a unique code, define what counts as a sale (usually a delivered order after the return window), agree the commission, attribution window and data source in writing, and pay on a regular cycle after returns are settled. Require clear disclosure in every post. Keep the countries' rules separate: UAE creators need the National Media Authority's advertiser permit, Saudi creators need a Mawthooq licence, and discounts or contests need the relevant promotion permit or licence in each country. Confirm which platform and marketplace features are available in each market rather than assuming they match.",
      },
      { type: "heading", text: "Links, codes and attribution", id: "tracking" },
      {
        type: "table",
        headers: ["Method", "Captures", "Watch for"],
        rows: [
          ["Affiliate link (tracking platform or UTM)", "Clicks and orders within the attribution window", "Cross-device journeys; cookie limits"],
          ["Unique promo code", "Orders where the code was used, even without a click", "Leakage to coupon sites; codes used by existing customers"],
          ["Marketplace affiliate programs", "Orders on that marketplace through the creator's link", "The marketplace sets commission rates, windows and payout rules"],
          ["Code plus link", "Most complete; credit when either is used", "Agree how double-counting is handled"],
        ],
      },
      {
        type: "paragraph",
        text: "Amazon runs separate Associates programs for amazon.ae and amazon.sa, each with its own sign-up and terms. Other regional marketplaces and retailers run their own programs or work through affiliate networks. Read each program's current terms; commission rates and windows reported in third-party directories vary and change.",
        links: [
          { text: "amazon.ae", href: SRC.amazonAeAssociates.url },
          { text: "amazon.sa", href: SRC.amazonSaAssociates.url },
        ],
      },
      { type: "heading", text: "Commission structures", id: "commission" },
      {
        type: "table",
        headers: ["Structure", "How it works", "Suits"],
        rows: [
          ["Percentage of net sales", "A share of order value after discounts, VAT and returns", "Retail with varied order values"],
          ["Fixed amount per order", "A set amount per qualifying order", "Single products, subscriptions, first orders"],
          ["Tiered", "Rate rises with volume", "Rewarding top affiliates"],
          ["New-customer only", "Commission only for first-time buyers", "Customer acquisition goals"],
          ["Fee plus commission", "A base fee for planned content, plus commission", "Established creators who won't post for commission alone"],
        ],
      },
      { type: "heading", text: "Define the sale before anyone posts", id: "definitions" },
      {
        type: "list",
        items: [
          "Placed, paid or delivered: for cash-on-delivery orders, count delivered ones",
          "Return window: commission is confirmed after it closes",
          "Cancellations and fraud: excluded, with the rule agreed upfront",
          "Order value basis: before or after VAT, discounts and delivery fees",
          "New versus existing customers",
          "Attribution window: how many days after a click or code use the creator gets credit",
          "Data source: whose numbers decide, and how the creator can see them",
        ],
      },
      { type: "heading", text: "Payment terms", id: "payments" },
      {
        type: "list",
        items: [
          "Pay on a regular cycle, typically monthly, after the return window",
          "Show creators their confirmed and pending commissions",
          "Agree the currency: AED for UAE creators, SAR for Saudi creators",
          "Confirm invoicing and VAT handling with your finance team for each country",
          "Agree minimum payout thresholds and what happens to unpaid balances if the program ends",
        ],
      },
      { type: "heading", text: "UAE considerations", id: "uae" },
      {
        type: "paragraph",
        text: `Reviewed ${REVIEW_DATE_TEXT}. Affiliate creators promoting products are advertising, so UAE creators need an advertiser permit from the National Media Authority, whether paid by fee or commission, and must display the permit number. Discounts and giveaways may need a promotion permit from the relevant emirate's economic department, such as Dubai's Department of Economy and Tourism. The UAE rules are summarized in our UAE influencer marketing guide.`,
        links: [{ text: "UAE influencer marketing guide", href: "/blog/influencer-marketing-uae" }],
      },
      { type: "heading", text: "Saudi Arabia considerations", id: "saudi" },
      {
        type: "paragraph",
        text: "Saudi creators who earn from advertising content need a Mawthooq licence from GAMR and must post through their registered account. Online commercial ads must state that they're promotional, and discounts or contests need a Ministry of Commerce licence before they run. The Saudi rules, with sources, are in Saudi influencer advertising rules, and landing pages and repeat-purchase tracking for Saudi stores in influencer marketing for e-commerce brands in Saudi Arabia.",
        links: [
          { text: "Saudi influencer advertising rules", href: "/blog/saudi-influencer-advertising-rules" },
          { text: "influencer marketing for e-commerce brands in Saudi Arabia", href: "/blog/influencer-marketing-ecommerce-brands-saudi-arabia" },
        ],
      },
      { type: "heading", text: "Platform shopping features", id: "platforms" },
      {
        type: "paragraph",
        text: `Checked ${REVIEW_DATE_TEXT}: in-app shopping and affiliate features on social platforms aren't available in the same form in every market, and we couldn't confirm an official TikTok Shop launch for sellers and affiliates in either country. Build your program around links and codes to your own store and marketplaces, and add platform features only once they're confirmed for your business in that country. The same applies to live selling; see influencer livestream campaigns in the GCC.`,
        links: [{ text: "influencer livestream campaigns in the GCC", href: "/blog/influencer-livestream-campaigns-gcc" }],
      },
      { type: "heading", text: "Disclosure", id: "disclosure" },
      {
        type: "list",
        items: [
          "A commission is a commercial relationship; posts must be labelled as advertising",
          "Disclose in the language of the content, near the start, not hidden in hashtags",
          "Saved links in bios and Stories need disclosure too",
          "Claims must be accurate; commission-driven content is more prone to exaggeration",
        ],
      },
      { type: "heading", text: "Running the program", id: "operations" },
      {
        type: "paragraph",
        text: "Recruitment, activation, tiers and fraud controls work the same way across markets and are covered in influencer affiliate programs. Performance terms for planned content are in performance-based influencer marketing.",
        links: [
          { text: "influencer affiliate programs", href: "/blog/influencer-affiliate-program" },
          { text: "performance-based influencer marketing", href: "/blog/performance-based-influencer-marketing" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Paying commission on placed cash-on-delivery orders that are never delivered",
          "One program with one set of rules for both countries",
          "Assuming a platform shopping feature available in one market works in the other",
          "No cap or expiry on codes, so they leak to coupon sites",
          "Treating commission-only creators as exempt from licences and disclosure",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Affiliate programs in the UAE and Saudi Arabia work when the definitions are tight and the countries are treated separately: delivered orders, clear windows, payment after returns, licensed creators, disclosed posts and licensed promotions. Build on links and codes, add platform features as they become available, and pay your best affiliates properly to keep them active.",
      },
    ],
    faqs: [
      {
        question: "Do affiliate creators in the UAE and Saudi Arabia need a licence?",
        answer:
          "Promoting products for commission is advertising. In the UAE creators need the National Media Authority's advertiser permit; in Saudi Arabia, creators earning from advertising content need a Mawthooq licence. Check current rules in each country.",
      },
      {
        question: "What attribution window should affiliate programs use?",
        answer:
          "It depends on how long customers take to buy. Many programs use a window measured in days to a few weeks. Agree it in writing, along with the data source and how returns are handled.",
      },
      {
        question: "Should commission be paid on cash-on-delivery orders?",
        answer:
          "Pay on delivered orders after the return window, so refused deliveries and returns don't generate commission.",
      },
    ],
  },
  // 1439
  {
    slug: "gcc-influencer-campaign-reporting",
    category: "Campaign Strategy",
    title: "Influencer Marketing Reporting for GCC Campaigns: How to Compare Results Across Countries",
    seoTitle: "GCC Influencer Campaign Reporting: Comparing Countries Fairly",
    excerpt:
      "A reporting framework for creator campaigns across Gulf countries: the metrics to report and how to calculate them, how to compare markets of very different sizes and platform mixes without misleading anyone, organic versus paid, attribution limits and turning results into next actions.",
    metaDescription:
      "Reporting GCC influencer campaigns across countries: metric definitions and formulas, fair market comparisons, organic vs paid, attribution windows and actions.",
    author: AUTHOR,
    publishedAt: GCC2_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "11 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "Gulf Cooperation Council countries",
    breadcrumbParents: [GCC_PLAYBOOK],
    tags: ["GCC influencer campaign reporting", "multi-country influencer reporting", "influencer report Middle East", "compare influencer results across countries"],
    related: ["gcc-influencer-marketing-budget", "influencer-marketing-report", "measuring-influencer-campaign-roi"],
    hero: {
      src: "/blog/gcc-guides/gcc-influencer-campaign-reporting.svg",
      alt: "Cross-country reporting: per-market results in local currency, normalized rates and cost per result in a reporting currency, with organic and paid separated",
    },
    body: [
      {
        type: "paragraph",
        text: "A GCC campaign report that shows one total for reach, one for engagement and one for sales hides almost everything useful. Saudi Arabia has more than ten times Bahrain's population; Snapchat matters more in some markets than others; Arabic and English content reach different people; and attribution works differently where buyers pay on delivery or shop on marketplaces. A good cross-country report compares markets on terms that are fair to each.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To compare GCC influencer results across countries, report each market separately in its own currency, then compare on rates and cost per result rather than raw totals: engagement rate, click-through rate, conversion rate and cost per result in a common reporting currency at a stated exchange rate. Show creator-level and market-level results, separate organic from paid, state the reporting window and attribution method for each market, and flag differences in objective, audience size, platform mix and language. End with learnings and specific next actions per market.",
      },
      { type: "heading", text: "Metrics and how to calculate them", id: "metrics" },
      {
        type: "table",
        headers: ["Metric", "Definition", "Calculation"],
        rows: [
          ["Reach", "Unique accounts that saw the content", "From creator insights or ad reporting; not additive across creators without deduplication"],
          ["Impressions", "Total times content was displayed", "Platform-reported"],
          ["Target-market reach", "Reach among accounts in the target country", "Reach × share of the creator's audience in that country (an estimate)"],
          ["Video views and retention", "Plays, and how much was watched", "Average watch time ÷ video length; completion rate where available"],
          ["Engagement rate (by reach)", "Interactions relative to people reached", "(Likes + comments + shares + saves) ÷ reach × 100"],
          ["Click-through rate", "Clicks relative to reach or impressions", "Link clicks ÷ reach (or impressions) × 100"],
          ["Landing-page visits", "Sessions from tracked links", "From site analytics, by UTM"],
          ["Conversion rate", "Visits that became a result", "Conversions ÷ landing-page sessions × 100"],
          ["Qualified leads", "Leads meeting agreed criteria", "Counted against the definition agreed at kickoff"],
          ["Revenue", "Value of attributed orders", "Delivered, non-returned orders, in local currency"],
          ["Cost per result", "Total cost to achieve each result", "Total creator, production and media cost ÷ results"],
        ],
      },
      {
        type: "paragraph",
        text: "Single-campaign report structure is covered in how to create an influencer marketing report, and ROI formulas and attribution methods in how to measure influencer marketing ROI.",
        links: [
          { text: "how to create an influencer marketing report", href: "/blog/influencer-marketing-report" },
          { text: "how to measure influencer marketing ROI", href: "/blog/measuring-influencer-campaign-roi" },
        ],
      },
      { type: "heading", text: "Comparing markets fairly", id: "fair" },
      {
        type: "table",
        headers: ["Difference", "Why totals mislead", "What to report instead"],
        rows: [
          ["Market size", "Saudi totals will dwarf Bahrain's regardless of performance", "Rates and cost per result; share of target audience reached"],
          ["Objective", "An awareness test and a sales push aren't comparable on sales", "Compare each market against its own objective and target"],
          ["Platform mix", "Snapchat-heavy and Instagram-heavy plans produce different engagement patterns", "Compare like-for-like platforms; report the mix"],
          ["Language", "Arabic and English versions reach different segments", "Report by language within each market"],
          ["Audience location", "Creators' audiences outside the target market inflate reach", "Target-market reach estimates"],
          ["Currency", "Costs in different currencies can't be added", "Convert at a stated, dated rate for comparison"],
          ["Attribution", "Cash on delivery, marketplaces and offline sales vary by market", "State the method and its gaps per market"],
          ["Seasonality", "Ramadan or national days shift baselines", "Compare with the same period in the previous year"],
        ],
      },
      { type: "heading", text: "Creator-level and market-level views", id: "levels" },
      {
        type: "list",
        items: [
          "Creator level: cost, deliverables, reach, engagement rate, clicks, conversions, cost per result, audience in market",
          "Market level: totals and rates by market, against that market's objective and target",
          "Platform level within each market: which formats worked",
          "Language level where more than one language ran",
          "Regional summary: a short table of cost per result by market in the reporting currency, with the rate and date",
        ],
      },
      { type: "heading", text: "Organic versus paid", id: "organic-paid" },
      {
        type: "paragraph",
        text: "When creator content is boosted as ads, report organic and paid results separately: organic shows how the creator's own audience responded, paid shows what the content achieved with targeting and budget behind it. Blending them makes creators look better or worse than they are, and makes cost per result meaningless unless ad spend is included in the cost.",
      },
      { type: "heading", text: "Reporting windows and attribution limits", id: "windows" },
      {
        type: "list",
        items: [
          "State the window: for example, posting dates plus 14 days for clicks and conversions",
          "Use the same window for every market unless a market's buying cycle justifies a different one, and say so",
          "Collect Story and short-lived content insights before they expire",
          "Report tracked results as the minimum effect; note untracked channels such as marketplaces and offline sales",
          "Count delivered orders where cash on delivery is common",
        ],
      },
      { type: "heading", text: "An illustrative comparison", id: "example" },
      {
        type: "table",
        headers: ["Market", "Objective", "Cost (local)", "Delivered orders", "Cost per order (local)", "Cost per order (USD, at stated peg)"],
        rows: [
          ["Saudi Arabia", "Sales", "SAR 90,000", "600", "SAR 150", "USD 40.00 at 3.75"],
          ["UAE", "Sales", "AED 55,000", "400", "AED 137.50", "USD 37.44 at 3.6725"],
          ["Kuwait", "Awareness test", "KWD 4,000", "Not the objective", "-", "Not compared on sales"],
        ],
      },
      {
        type: "paragraph",
        text: "Hypothetical figures for illustration only, not Kudozz campaign results. Saudi Arabia and the UAE are compared on cost per delivered order because both had sales objectives; Kuwait is reported against its own awareness objective instead of being ranked on sales. Market context for each country, including Kuwait's new licensing rules, is in the country guides such as influencer marketing in Kuwait.",
        links: [{ text: "influencer marketing in Kuwait", href: "/blog/influencer-marketing-kuwait" }],
      },
      { type: "heading", text: "Learnings and next actions", id: "actions" },
      {
        type: "list",
        items: [
          "For each market: what worked, what didn't, and the evidence",
          "Which creators to rebook, drop or test further",
          "Which formats, platforms and languages to scale",
          "Where budget should move next period, and why",
          "What to change in tracking before the next campaign",
        ],
      },
      { type: "heading", text: "A report outline", id: "outline" },
      {
        type: "template",
        label: "GCC campaign report outline",
        text: `1. Summary: objective per market, headline results against target, key recommendations
2. Method: reporting window, attribution methods, exchange rates and dates used, known gaps
3. Market sections (one per country):
   - Objective and target
   - Creators, platforms, languages, deliverables
   - Reach, target-market reach, views and retention, engagement rate
   - Clicks, landing-page visits, conversion rate
   - Leads or orders (delivered), revenue (local currency)
   - Cost and cost per result (local currency)
   - Organic vs paid
   - Learnings and next actions
4. Regional comparison: cost per result by market in reporting currency (rate and date stated), with notes on differences in objective, size and attribution
5. Creator table: all creators, by market
6. Appendix: definitions and formulas`,
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Cross-country reporting is useful only if it's fair. Report each market on its own terms, compare on rates and cost per result in a stated currency, separate organic from paid, be explicit about windows and attribution gaps, and finish with decisions. Budget decisions that follow from the report are covered in GCC influencer marketing budgets.",
        links: [{ text: "GCC influencer marketing budgets", href: "/blog/gcc-influencer-marketing-budget" }],
      },
    ],
    faqs: [
      {
        question: "How do you compare influencer results across GCC countries?",
        answer:
          "Report each market separately, then compare rates and cost per result in a common reporting currency at a stated exchange rate, against each market's own objective. Avoid comparing raw totals across markets of different sizes.",
      },
      {
        question: "Should organic and paid creator results be reported together?",
        answer:
          "No. Report them separately so you can see how the creator's own audience responded and what paid amplification added, and include ad spend in cost per result for paid results.",
      },
      {
        question: "What reporting window should a GCC influencer campaign use?",
        answer:
          "A consistent window across markets, such as posting dates plus a fixed number of days, unless a market's buying cycle justifies a different one. State the window and attribution method in the report.",
      },
    ],
  },
];
