import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";

/**
 * Batch 26 (2026-11-05), commercial planning: five brand-side gaps left after checking 100 proposed topics against the
 * existing library. Product prioritisation, limited stock, campaign break-even (INR), seasonal-business budgets and the
 * quarterly leadership review. See reports/next-100-industry-marketing-batch-26/.
 */
const PUBLISHED = "2026-11-05";
const REVIEWED = "November 2026";

const EXT = {
  darkPatterns2023: "https://www.scconline.com/blog/post/2023/12/04/ccpa-notifies-guidelines-for-prevention-and-regulation-of-dark-patterns-2023-legal-news/",
};

export const commercialPlanningPosts: BlogPost[] = [
  // Topic 98.
  {
    slug: "which-products-to-promote-with-influencers",
    category: "Campaign Strategy",
    title: "How to Decide Which Products to Prioritise for Influencer Marketing",
    seoTitle: "Which Products Should You Promote With Influencers?",
    excerpt:
      "Most brands send creators their newest or most important product. That's often the wrong choice. A scoring method for picking the products creators can actually sell: margin, demonstrability, stock, reviews and the job each product does for the business.",
    metaDescription:
      "How to choose which products to promote with influencers: score margin, demonstrability, stock depth and proof, then match each product to a campaign role.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "9 min read",
    tags: ["which products to promote with influencers", "influencer product selection", "hero product influencer marketing", "product prioritisation", "influencer campaign planning"],
    related: ["influencer-marketing-product-lifecycle", "influencer-budget-allocation", "creator-content-reduce-returns"],
    hero: {
      src: "/blog/brand-guides/which-products-to-promote-with-influencers.svg",
      alt: "Four tests for choosing products to promote with influencers: margin, demonstrability, stock depth and proof",
    },
    body: [
      {
        type: "paragraph",
        text: "If your catalogue has more than a handful of products, the first influencer decision isn't which creators to hire. It's which products to put in their hands. Pick badly and even well-matched creators struggle: the product is hard to show on camera, the margin can't absorb the cost, or it sells out the week the posts go live.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Prioritise products that score well on five things: contribution margin after discounts and returns, how easily the benefit shows on camera, stock depth for the campaign window, existing proof (reviews, repeat purchase, low return rate) and strategic role (does it bring in new customers who go on to buy more?). Score each candidate from 1 to 5 on each factor, weight the factors by your campaign objective, and give the top one or two products the bulk of creator spend. Keep a small test slot for a newer product rather than spreading the budget evenly across the range.",
      },
      { type: "heading", text: "Why the obvious choice is often wrong", id: "obvious-choice" },
      {
        type: "paragraph",
        text: "Brands usually default to one of three products: the newest launch, the best seller, or the item with the most stock to clear. Each can work, but none is a strategy on its own.",
      },
      {
        type: "table",
        headers: ["Default choice", "When it works", "When it backfires"],
        rows: [
          ["Newest launch", "There's a real story, stock is ready and the product page has proof", "No reviews yet, so creator traffic lands on a page that doesn't convert"],
          ["Best seller", "You want efficient first orders and a reliable test of creators", "It already sells through search and repeat buyers, so creators add little that wasn't happening anyway"],
          ["Excess stock", "The product is good and simply under-discovered", "It's slow because people don't want it; creators make that visible to a bigger audience"],
          ["Highest price", "The product needs explanation and has margin to fund it", "Price is the main objection and creators can't answer it in a 30-second Reel"],
        ],
      },
      { type: "heading", text: "The five factors to score", id: "five-factors" },
      { type: "subheading", text: "1. Contribution margin after the real costs" },
      {
        type: "paragraph",
        text: "Use the margin left after product cost, shipping, payment fees, the creator discount and expected returns, not the gross margin on the price list. A product with a thin margin needs far more orders to recover a creator fee; how to calculate the break-even point of an influencer campaign shows the arithmetic.",
        links: [{ text: "how to calculate the break-even point of an influencer campaign", href: "/blog/influencer-campaign-break-even" }],
      },
      { type: "subheading", text: "2. Demonstrability" },
      {
        type: "paragraph",
        text: "Ask whether a stranger could understand the benefit with the sound off in ten seconds. Visible change (a stain removed, a fit on a real body, a before-and-after room) scores high. Benefits that take weeks to appear, or that viewers have to take on trust, score low. Low doesn't mean impossible, but it means a longer format, a more expert creator and a bigger budget per conversion.",
      },
      { type: "subheading", text: "3. Stock depth and fulfilment" },
      {
        type: "paragraph",
        text: "A product that might sell out in the posting window shouldn't be the lead, unless scarcity is the plan and you've prepared for it. Check stock across every channel the creators will send people to: your site, marketplaces, quick commerce and stores. If supply is tight, see how to plan influencer campaigns when stock is limited.",
        links: [{ text: "how to plan influencer campaigns when stock is limited", href: "/blog/influencer-marketing-limited-stock" }],
      },
      { type: "subheading", text: "4. Existing proof" },
      {
        type: "paragraph",
        text: "Creator traffic is sceptical traffic. People arrive, scroll to the reviews and check the return policy. Products with a healthy rating, a decent number of reviews, a low return rate and a high repeat-purchase rate convert that traffic better. If a promising product has a high return rate, fix the cause first; creator content can help, as how creator content can help reduce product returns explains, but it shouldn't be the first job you give a paid campaign.",
        links: [{ text: "how creator content can help reduce product returns", href: "/blog/creator-content-reduce-returns" }],
      },
      { type: "subheading", text: "5. Strategic role" },
      {
        type: "paragraph",
        text: "Some products are entry points: cheap enough to try, and likely to lead to a second purchase. Others lift average order value, defend a category against a competitor, or establish the brand in a new segment. A product with a modest margin can still be the right lead if the customers it brings in are worth a lot over a year.",
      },
      { type: "heading", text: "A product prioritisation scorecard", id: "scorecard" },
      {
        type: "paragraph",
        text: "Score each candidate from 1 (weak) to 5 (strong), multiply by the weight for your objective, and add up. The weights below are a starting point; change them to suit your business, but agree them before scoring so the favourite product doesn't win by default.",
      },
      {
        type: "table",
        headers: ["Factor", "Weight: first orders", "Weight: awareness or launch", "Weight: repeat and loyalty"],
        rows: [
          ["Contribution margin", "25%", "15%", "20%"],
          ["Demonstrability", "25%", "30%", "15%"],
          ["Stock depth", "15%", "20%", "15%"],
          ["Existing proof", "20%", "10%", "20%"],
          ["Strategic role", "15%", "25%", "30%"],
        ],
      },
      {
        type: "table",
        headers: ["Product (hypothetical skincare brand)", "Margin", "Demo", "Stock", "Proof", "Role", "Score (first orders)"],
        rows: [
          ["Sunscreen, 50 ml", "3", "4", "5", "5", "5", "4.25"],
          ["New vitamin C serum", "4", "2", "3", "1", "4", "2.75"],
          ["Gift set", "2", "3", "2", "3", "2", "2.45"],
          ["Face wash", "2", "3", "5", "4", "3", "3.25"],
        ],
      },
      {
        type: "paragraph",
        text: "Illustrative only. In this example the sunscreen leads the first-order campaign: it's easy to show, well reviewed and in stock, and it brings in customers who buy other products. The serum is the brand's priority launch, but it has no reviews yet and its benefit takes weeks to show, so it gets a smaller test with expert creators rather than the main budget.",
      },
      { type: "heading", text: "Giving each product a role, not just a share", id: "product-roles" },
      {
        type: "paragraph",
        text: "Once you've ranked the products, decide what each one is for in this campaign. That changes the creators, the format and the measure of success, so it's worth writing down.",
      },
      {
        type: "table",
        headers: ["Role", "Typical share of creator budget (illustrative)", "Creators and format", "Judge it on"],
        rows: [
          ["Lead product", "60–70%", "Creators whose audience matches your best customers; demos and honest reviews", "Cost per new customer and their second purchase"],
          ["Test product", "15–25%", "A few specialist or expert creators; longer explainers", "Whether proof builds: saves, questions, early reviews"],
          ["Bundle or add-on", "10–15%", "Mentioned alongside the lead product rather than on its own", "Average order value on creator-attributed orders"],
        ],
      },
      {
        type: "paragraph",
        text: "How you divide the creator budget once products are chosen is covered in how to allocate your influencer marketing budget across creators. Where a product sits in its life (launch, growth, maturity or decline) also shapes the plan; see planning influencer campaigns around your product's lifecycle.",
        links: [
          { text: "how to allocate your influencer marketing budget across creators", href: "/blog/influencer-budget-allocation" },
          { text: "planning influencer campaigns around your product's lifecycle", href: "/blog/influencer-marketing-product-lifecycle" },
        ],
      },
      { type: "heading", text: "Check the landing experience before you commit", id: "landing-check" },
      {
        type: "list",
        items: [
          "Does the product page show the product in use, from real people, not just studio shots?",
          "Are the questions people ask in comments answered on the page (size, shade, compatibility, how long until results)?",
          "Is the price the creator will mention the price the viewer will see, including on marketplaces?",
          "Is there enough stock in every size, shade or variant the creators will feature?",
          "Will the discount code work on this product, and is it excluded from other offers that would make it pointless?",
        ],
      },
      {
        type: "paragraph",
        text: "If several answers are no, you can still run the campaign, but fix the page first or pick a product that is ready. Our creator content on product pages guide covers how to use creator videos on the page itself.",
        links: [{ text: "creator content on product pages guide", href: "/blog/creator-content-product-pages" }],
      },
      { type: "heading", text: "When to spread across many products", id: "many-products" },
      {
        type: "paragraph",
        text: "Concentration is the default, but there are exceptions. Fashion and home brands where the appeal is the whole range often do better with creators styling several pieces. Gifting periods suit curated edits. Marketplace sellers with dozens of near-identical variants may lead with the listing that has the most reviews and let the variants ride along. Even then, give creators a clear lead item so the content has a focus and the measurement has an anchor.",
      },
      {
        type: "paragraph",
        text: "If you're unsure which products to lead with across a year of campaigns, Kudozz's influencer campaign strategy service starts with exactly this exercise before any creator is approached.",
        links: [{ text: "influencer campaign strategy service", href: "/services/campaign-strategy" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Choosing the product the founder is most excited about without scoring it against the others.",
          "Using list-price gross margin instead of margin after discounts, shipping and returns.",
          "Sending creators the whole range, so each product gets a few seconds and none gets a proper demonstration.",
          "Leading with a product that has no reviews and expecting creator traffic to convert anyway.",
          "Judging a test product by the same cost-per-order target as the lead product in its first campaign.",
          "Forgetting to check stock on marketplaces and quick commerce, where much creator-driven demand ends up.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Product choice quietly decides how well an influencer campaign can perform. Score your candidates on margin, demonstrability, stock, proof and role; weight the scores by what the campaign needs to achieve; and concentrate spend on one or two products while keeping a small, fairly judged test slot. Revisit the scores every quarter, because reviews, stock and margins change.",
      },
    ],
    faqs: [
      {
        question: "Should we promote our best-selling product with influencers?",
        answer:
          "Often, but not automatically. A best seller converts creator traffic well, but if it already sells through search and repeat customers, creators may add little extra. Check whether the customers it brings in are new to the brand.",
      },
      {
        question: "Is it a good idea to use influencers to clear excess stock?",
        answer:
          "Only if the product is good and simply under-discovered. If it's slow because customers don't want it, creators will expose that to a larger audience. Look at reviews and return rates before deciding.",
      },
      {
        question: "How many products should one influencer campaign feature?",
        answer:
          "Usually one lead product per creator, with an optional add-on. More than that tends to produce catalogue-style content where nothing gets a proper demonstration.",
      },
      {
        question: "What if our priority launch has no reviews yet?",
        answer:
          "Give it a smaller test with a few credible creators, collect early reviews and questions, and keep most of the budget on a proven product until the launch page can convert sceptical visitors.",
      },
    ],
  },

  // Topics 94 and 95, merged.
  {
    slug: "influencer-marketing-limited-stock",
    category: "Campaign Strategy",
    title: "How to Plan Influencer Campaigns When Stock or Supply Is Limited",
    seoTitle: "Influencer Campaigns When Stock Is Limited: Planning Guide",
    excerpt:
      "Creator demand is lumpy and hard to predict, which makes it risky when stock is tight. How to size a campaign to what you can actually ship, stagger creators against inventory, handle sell-outs honestly and avoid paying for posts that send people to an empty page.",
    metaDescription:
      "Plan influencer campaigns around limited stock: size demand to inventory, stagger go-lives, set sell-out rules with creators and avoid misleading scarcity.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "9 min read",
    tags: ["influencer campaign limited stock", "inventory and influencer marketing", "product sold out influencer campaign", "influencer campaign calendar inventory", "limited edition influencer launch"],
    related: ["influencer-campaign-calendar", "influencers-for-product-launch", "influencer-marketing-distributors-retailers"],
    hero: {
      src: "/blog/brand-guides/influencer-marketing-limited-stock.svg",
      alt: "Four steps for influencer campaigns with limited stock: size demand to stock, stagger creators, agree sell-out rules, keep scarcity honest",
    },
    body: [
      {
        type: "paragraph",
        text: "A creator post that works too well can be as damaging as one that flops. If the product sells out on day two, the remaining creators send their audiences to an out-of-stock page, paid boosts keep spending, and the brand ends up with annoyed customers and a report full of traffic that couldn't buy anything.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "When stock is limited, plan the campaign backwards from the units you can ship. Estimate a cautious and an optimistic demand range from your own past campaigns, keep the optimistic case within available stock (or hold a reserve), and stagger creator go-lives in waves so you can pause the later waves if stock runs low. Agree in each creator contract what happens if the product sells out, set up a waitlist or back-in-stock alert, and never claim scarcity you can't back up.",
      },
      { type: "heading", text: "Which situation are you in?", id: "situations" },
      {
        type: "table",
        headers: ["Situation", "Typical example", "Main risk", "Plan for"],
        rows: [
          ["Planned limited edition", "A collaboration drop or festive edition with a fixed run", "Selling out before most creators post", "Short, tightly coordinated launch window and a waitlist"],
          ["Constrained supply", "A new product with slow manufacturing or imported stock", "Demand outrunning restock lead times", "Waves sized to each incoming batch"],
          ["Uneven distribution", "Stock in some cities, stores or marketplaces but not others", "Creators driving people to places with nothing on the shelf", "Creators and regions matched to where stock is"],
          ["Unplanned shortage", "A supplier delay after creators are booked", "Paying for posts that can't convert", "Postpone, swap the product, or change the call to action"],
        ],
      },
      { type: "heading", text: "Step 1: Turn stock into a demand ceiling", id: "demand-ceiling" },
      {
        type: "paragraph",
        text: "Start from sellable units, not total units. Take away stock committed to other channels, marketplace and retail allocations, a safety buffer for normal sales and replacements, and anything reserved for creator seeding. What's left is what the campaign can sell.",
      },
      {
        type: "paragraph",
        text: "Then estimate demand as a range. If you've run creator campaigns before, use your own figures for orders per creator or per thousand views. If you haven't, treat any estimate as a guess and plan the first wave small. Influencer marketing ROI forecasting walks through building that range; the point here is to compare its optimistic end with your ceiling.",
        links: [{ text: "Influencer marketing ROI forecasting", href: "/blog/influencer-marketing-roi-forecasting" }],
      },
      {
        type: "table",
        headers: ["Line (hypothetical D2C brand)", "Units"],
        rows: [
          ["Stock arriving before launch", "3,000"],
          ["Less marketplace allocation", "–800"],
          ["Less buffer for regular sales and replacements", "–400"],
          ["Less seeding units for creators", "–40"],
          ["Sellable through the campaign", "1,760"],
          ["Cautious demand estimate (all creators)", "900"],
          ["Optimistic demand estimate (all creators)", "2,400"],
        ],
      },
      {
        type: "paragraph",
        text: "Illustrative figures. Here the optimistic case is above the ceiling, so the brand either holds back some creators until the next batch lands or accepts a sell-out and prepares for it properly.",
      },
      { type: "heading", text: "Step 2: Stagger creators in waves", id: "waves" },
      {
        type: "paragraph",
        text: "Waves are the most useful tool you have. Instead of every creator posting the same day, split them into two or three groups. The first wave tells you the real demand rate; the later waves can go ahead, be delayed until restock, or switch to a different product. Build these dates into your influencer campaign calendar from the start, with the decision points marked.",
        links: [{ text: "influencer campaign calendar", href: "/blog/influencer-campaign-calendar" }],
      },
      {
        type: "list",
        items: [
          "Wave 1: a smaller group, ideally a mix of creator sizes, to measure demand. Keep paid boosting off or low.",
          "Decision point: compare orders and stock remaining with your range. Decide go, delay or switch for wave 2.",
          "Wave 2: the larger group, timed to land when stock is confirmed. Turn on paid amplification for the best wave 1 content only if stock allows.",
          "Wave 3 (optional): restock or 'back in stock' content, ideally from creators whose audiences missed out first time.",
        ],
      },
      {
        type: "paragraph",
        text: "A fixed launch date with one coordinated drop is different: everyone posts together on purpose. That works for planned limited editions, but only with a waitlist and clear stock messaging. How to plan a creator-led product launch covers the launch-day coordination itself.",
        links: [{ text: "How to plan a creator-led product launch", href: "/blog/influencers-for-product-launch" }],
      },
      { type: "heading", text: "Step 3: Put sell-out rules into the contract", id: "contract-rules" },
      {
        type: "paragraph",
        text: "Creators plan their own calendars, so last-minute changes cost them money. Agree up front what happens if stock runs out, and pay fairly for flexibility you ask for.",
      },
      {
        type: "template",
        label: "Stock clause notes for creator agreements (adapt with your legal adviser)",
        text: "Go-live window: [date range], with the exact date confirmed by the brand at least [X] days in advance.\nStock-related postponement: the brand may move the go-live date once, by up to [X] weeks, if stock is unavailable. Fee unchanged; [rescheduling fee, if any].\nSell-out after posting: the creator will update the caption, pinned comment or Story to point to [waitlist / alternative product / restock date] within [X] hours of the brand's request.\nNo scarcity claims: the creator will not say 'only a few left', 'last chance' or similar unless the brand provides the wording and confirms it is true at the time of posting.\nCancellation because of stock: [kill fee or percentage], and content already produced remains [usable / not usable] by the brand.",
      },
      {
        type: "paragraph",
        text: "If the shortage is serious enough to cancel, the professional way to handle it is set out in influencer campaign cancellation.",
        links: [{ text: "influencer campaign cancellation", href: "/blog/influencer-campaign-cancellation" }],
      },
      { type: "heading", text: "Step 4: Prepare the page for a sell-out", id: "sell-out-page" },
      {
        type: "list",
        items: [
          "Replace the buy button with a waitlist or back-in-stock alert, rather than a dead 'sold out' label.",
          "Show an honest restock estimate if you have one, and say so when you don't.",
          "Suggest a genuine alternative product on the same page.",
          "Pause or redirect paid creator ads the same day; check partnership and Spark-style ads, which keep spending even when organic posts slow down.",
          "Tell customer service and the creators what to say when people ask.",
        ],
      },
      {
        type: "paragraph",
        text: "Waitlist sign-ups are also useful data: they show you real demand you couldn't serve, which helps size the next production run and the next wave.",
      },
      { type: "heading", text: "Step 5: Keep scarcity claims honest", id: "honest-scarcity" },
      {
        type: "paragraph",
        text: "Limited stock is a legitimate reason to buy soon, but only if it's true. In India, the Central Consumer Protection Authority's Guidelines for Prevention and Regulation of Dark Patterns, 2023 list false urgency, falsely stating or implying urgency or scarcity, as a practice to avoid. Keep 'limited edition' or 'only 500 made' claims factual, give creators the exact wording, and update or remove it when it stops being true. This is general information, not legal advice.",
        links: [{ text: "Guidelines for Prevention and Regulation of Dark Patterns, 2023", href: EXT.darkPatterns2023 }],
      },
      { type: "heading", text: "When stock sits in stores and marketplaces", id: "retail-stock" },
      {
        type: "paragraph",
        text: "If customers buy through retailers, distributors, marketplaces or quick commerce, your own stock count isn't enough. Check availability where creators will send people, city by city if needed, and only activate creators in places where the product is on the shelf. Influencer marketing for brands sold through distributors and retailers covers this in detail.",
        links: [{ text: "Influencer marketing for brands sold through distributors and retailers", href: "/blog/influencer-marketing-distributors-retailers" }],
      },
      {
        type: "paragraph",
        text: "Getting stock, creators and launch dates to line up is a large part of what Kudozz's product launch campaign service handles, especially when manufacturing dates move.",
        links: [{ text: "product launch campaign service", href: "/services/product-launches" }],
      },
      { type: "heading", text: "Measuring a stock-constrained campaign", id: "measurement" },
      {
        type: "paragraph",
        text: "Sales are capped by stock, so judging the campaign only on orders understates it. Report orders and revenue, but also waitlist sign-ups, back-in-stock alerts, branded search and the date stock ran out. Compare creators on what they achieved while stock was available; a creator who posted after the sell-out shouldn't be judged on orders they couldn't have generated.",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Booking every creator for the same week when stock might not last that long.",
          "Counting total warehouse stock instead of units actually available to the campaign.",
          "Leaving paid boosts running after the product sells out.",
          "Letting creators improvise urgency language that isn't true.",
          "Judging late-wave creators on sales they couldn't make because stock had run out.",
          "Postponing creators repeatedly without compensating them for the disruption.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Limited stock doesn't rule out influencer marketing; it changes how you schedule it. Work out how many units the campaign can really sell, release creators in waves with decision points between them, agree sell-out rules before anyone posts, and keep scarcity claims true. Then measure the demand you created, not just the demand you could fulfil.",
      },
    ],
    faqs: [
      {
        question: "Should we pause an influencer campaign if the product is about to sell out?",
        answer:
          "Pause or delay the creators who haven't posted yet, and pause paid amplification straight away. Ask creators who have already posted to point people to a waitlist or alternative. Then restart when stock is confirmed.",
      },
      {
        question: "Can selling out be good for an influencer campaign?",
        answer:
          "It can build demand for the restock if you capture it with a waitlist and communicate honestly. It's damaging when people repeatedly hit an empty page with no next step.",
      },
      {
        question: "Can creators say 'limited stock' or 'selling fast'?",
        answer:
          "Only when it's true at the time of posting, and ideally using wording the brand provides. False urgency is a recognised dark pattern under India's 2023 guidelines, so treat scarcity claims as you would any other product claim.",
      },
      {
        question: "Do we have to pay creators if we postpone because of stock?",
        answer:
          "That depends on your agreement. A fair contract allows one postponement within a set window and specifies a kill fee if the campaign is cancelled. Agree this before signing, not after the shortage.",
      },
    ],
  },

  // Topic 7, with the cost-per-acquisition angle from topics 2 and 9.
  {
    slug: "influencer-campaign-break-even",
    category: "Influencer Marketing",
    title: "How to Calculate the Break-Even Point of an Influencer Campaign",
    seoTitle: "Influencer Campaign Break-Even: How to Calculate It",
    excerpt:
      "How many orders or customers does an influencer campaign need before it pays for itself? A step-by-step method in rupees: full campaign cost, contribution margin per order, break-even orders, break-even cost per customer, and payback when customers buy again.",
    metaDescription:
      "Calculate an influencer campaign's break-even point in INR: full cost, contribution margin, break-even orders, maximum CPA and payback from repeat purchases.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "9 min read",
    spatialCoverage: "India",
    tags: ["influencer campaign break-even", "influencer marketing break-even point", "break-even CPA", "influencer campaign payback", "contribution margin influencer"],
    related: ["influencer-marketing-cpm-cpe-cpa", "influencer-marketing-roi-forecasting", "influencer-customer-quality"],
    hero: {
      src: "/blog/brand-guides/influencer-campaign-break-even.svg",
      alt: "Four steps to an influencer campaign break-even point: full cost, margin per order, break-even orders, payback",
    },
    body: [
      {
        type: "paragraph",
        text: "'Did the campaign make money?' is the question finance asks, and 'it generated 4x ROAS' doesn't answer it. Revenue isn't profit, and a campaign can produce plenty of revenue while losing money on every order. A break-even calculation tells you the number of orders or customers you need before the campaign has paid for itself, so you can judge it before launch as well as after.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Break-even orders = full campaign cost ÷ contribution margin per order. Full campaign cost includes creator fees, product and shipping for creators, paid amplification, agency or team time and tools. Contribution margin per order is the selling price after the creator discount, minus product cost, shipping, payment fees, GST you don't keep and an allowance for returns. If you expect customers to reorder, calculate a second number: how many first-time customers you need when each one's expected margin over, say, 6 or 12 months is counted. Your maximum affordable cost per new customer is that margin figure.",
      },
      {
        type: "paragraph",
        text: "This page focuses on orders, customers and payback in rupees. For a ROAS-based version with worked examples in AED and SAR, see how to calculate break-even ROAS for influencer campaigns in the GCC.",
        links: [{ text: "how to calculate break-even ROAS for influencer campaigns in the GCC", href: "/blog/break-even-roas-influencer-campaigns" }],
      },
      { type: "heading", text: "Step 1: Add up the full campaign cost", id: "full-cost" },
      {
        type: "table",
        headers: ["Cost line", "Include?", "Note"],
        rows: [
          ["Creator fees", "Yes", "Including usage-rights fees if you'll run the content as ads"],
          ["Product sent to creators", "Yes", "At cost, plus packaging and shipping"],
          ["Paid amplification", "Yes", "Partnership ads, boosts or whitelisting spend"],
          ["Agency fee or team time", "Yes", "Estimate internal hours at a realistic cost; leaving it out flatters the result"],
          ["Tools and tracking", "Share", "The campaign's fair share of software and production"],
          ["Discounts on creator-coded orders", "No, handle in margin", "Counting it here and in the margin double-counts it"],
        ],
      },
      { type: "heading", text: "Step 2: Work out contribution margin per order", id: "contribution-margin" },
      {
        type: "paragraph",
        text: "Contribution margin is what each order contributes after the costs that only exist because the order happened. Use realistic averages from your own data, not the list price.",
      },
      {
        type: "template",
        label: "Contribution margin per order",
        text: "Average order value, after creator discount (excluding GST)   ₹[  ]\n– Product cost (landed cost of goods)                          ₹[  ]\n– Shipping and packaging                                       ₹[  ]\n– Payment gateway or COD charges                               ₹[  ]\n– Marketplace commission (if the order is on a marketplace)    ₹[  ]\n– Returns allowance (return rate × cost of a return)            ₹[  ]\n= Contribution margin per order                                ₹[  ]",
      },
      {
        type: "paragraph",
        text: "Work in prices excluding GST if you're GST-registered, since the tax isn't yours to keep. Cash-on-delivery brands should include failed deliveries (return to origin) in the returns allowance; they can be a large hidden cost.",
      },
      { type: "heading", text: "Step 3: Calculate break-even orders and break-even CPA", id: "break-even-orders" },
      {
        type: "table",
        headers: ["Line (hypothetical home-care brand)", "Value"],
        rows: [
          ["Creator fees (10 micro-creators)", "₹2,50,000"],
          ["Product, packaging and shipping to creators", "₹15,000"],
          ["Paid amplification", "₹60,000"],
          ["Team time (estimated)", "₹45,000"],
          ["Full campaign cost", "₹3,70,000"],
          ["Average order value after 15% creator discount, ex-GST", "₹1,190"],
          ["Product, shipping, payment and returns allowance", "₹690"],
          ["Contribution margin per order", "₹500"],
          ["Break-even orders (₹3,70,000 ÷ ₹500)", "740"],
          ["Break-even cost per order", "₹500"],
        ],
      },
      {
        type: "paragraph",
        text: "Illustrative figures. The campaign needs 740 orders to recover its cost on first orders alone, which means it can afford to pay up to ₹500 per order. That ₹500 is your break-even CPA. For how CPA, CPM and CPE are calculated and compared across creators, see influencer marketing CPM, CPE, CPC and CPA.",
        links: [{ text: "influencer marketing CPM, CPE, CPC and CPA", href: "/blog/influencer-marketing-cpm-cpe-cpa" }],
      },
      { type: "heading", text: "Step 4: Add repeat purchases and calculate payback", id: "payback" },
      {
        type: "paragraph",
        text: "Many influencer campaigns don't break even on the first order and shouldn't be expected to. If new customers come back, what matters is how long it takes for their combined margin to cover the cost of acquiring them. That's the payback period.",
      },
      {
        type: "table",
        headers: ["Period after first order (hypothetical)", "Share of customers who reorder", "Margin per reorder", "Cumulative margin per customer"],
        rows: [
          ["First order", "100%", "₹500", "₹500"],
          ["Months 1–3", "30%", "₹520", "₹656"],
          ["Months 4–6", "20%", "₹520", "₹760"],
          ["Months 7–12", "25%", "₹520", "₹890"],
        ],
      },
      {
        type: "paragraph",
        text: "Illustrative figures. If the campaign above brings in 600 new customers, cost per new customer is about ₹617. It misses break-even on the first order (₹500) but passes it within the first three months if this repeat pattern holds. Use repeat rates from your own customer data, ideally for customers acquired through creators, because they can behave differently from customers acquired through search or ads. How to measure customer quality from influencer campaigns explains how to compare cohorts.",
        links: [{ text: "How to measure customer quality from influencer campaigns", href: "/blog/influencer-customer-quality" }],
      },
      { type: "heading", text: "Step 5: Decide what counts as a campaign order", id: "what-counts" },
      {
        type: "paragraph",
        text: "Break-even depends on which orders you credit to the campaign. Codes and links undercount (people see a post and buy later on a different device or a marketplace), while counting every order in the campaign period overcounts. Agree the rule before launch and state it in the report.",
      },
      {
        type: "list",
        items: [
          "Conservative: tracked codes and links only. Useful as a floor.",
          "Middle: tracked orders plus a clearly stated uplift from a post-purchase survey or comparison period.",
          "Fullest: incremental orders estimated from a holdout region or a before-and-after baseline.",
        ],
      },
      {
        type: "paragraph",
        text: "If the campaign breaks even on the conservative count, the decision is easy. If it only breaks even on the fullest count, be open about that and run a cleaner test next time. Influencer marketing incrementality explains how to estimate the orders creators actually added.",
        links: [{ text: "Influencer marketing incrementality", href: "/blog/influencer-marketing-incrementality" }],
      },
      { type: "heading", text: "Using break-even before launch", id: "before-launch" },
      {
        type: "paragraph",
        text: "Break-even is most useful as a planning check. Before you approve a creator list, compare break-even orders with what's plausible. If ten micro-creators would need to sell 740 orders between them and your past campaigns averaged 30 orders per creator, the plan is unlikely to break even on first orders, and you either need cheaper creators, a higher-margin product, a longer payback window or a different objective. Influencer marketing ROI forecasting shows how to build that range of likely outcomes.",
        links: [{ text: "Influencer marketing ROI forecasting", href: "/blog/influencer-marketing-roi-forecasting" }],
      },
      {
        type: "paragraph",
        text: "For campaigns where finance needs this analysis set up and reported consistently, Kudozz's campaign reporting service builds the cost, margin and attribution rules in before launch.",
        links: [{ text: "campaign reporting service", href: "/services/reporting" }],
      },
      { type: "heading", text: "Is influencer marketing a good acquisition channel for you?", id: "acquisition-channel" },
      {
        type: "paragraph",
        text: "Break-even also lets you compare creators fairly with other channels. Use the same cost definition and the same order rule for each channel, then compare cost per new customer and payback, not ROAS. A creator campaign with a slightly higher cost per customer can still be the better channel if those customers reorder more or return less. Equally, if creator customers are mostly discount hunters who never come back, a low first-order CPA can hide a poor investment.",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Using revenue or ROAS as if it were profit.",
          "Leaving out team time, product seeding and paid amplification from the campaign cost.",
          "Including GST in order value when it isn't money the business keeps.",
          "Ignoring returns and cash-on-delivery failures in the margin.",
          "Assuming repeat purchase rates from the whole customer base apply to creator-acquired customers.",
          "Changing the attribution rule after seeing the results.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Break-even is a simple calculation that forces the right questions: what did the campaign really cost, what is each order really worth, and how long until new customers pay back? Work out the full cost, the contribution margin per order and the break-even number before launch, decide how you'll count orders, and add a payback view if customers reorder. Then the conversation with finance is about evidence, not ROAS.",
      },
    ],
    faqs: [
      {
        question: "What is a good break-even point for an influencer campaign?",
        answer:
          "There's no universal number. A campaign is worth running if it breaks even within a payback period your business can afford, which depends on margins, repeat purchase and cash flow. Many brands accept losing money on the first order if customers pay back within a few months.",
      },
      {
        question: "Should I calculate break-even on revenue or profit?",
        answer:
          "On contribution margin, which is close to profit per order. Revenue-based break-even (ROAS) can be used if you convert it using your margin, but on its own it ignores costs.",
      },
      {
        question: "How do I include awareness value in break-even?",
        answer:
          "Don't add guessed values for reach to a break-even calculation. Calculate break-even on orders, and report awareness results separately against their own goals. If awareness is the main objective, break-even is the wrong primary measure.",
      },
      {
        question: "What's the difference between break-even CPA and target CPA?",
        answer:
          "Break-even CPA is the most you can pay per order without losing money. Target CPA is lower, leaving room for profit and for the uncertainty in attribution.",
      },
      {
        question: "How long should payback take?",
        answer:
          "It depends on your cash position and how reliably customers reorder. Use your own cohort data, and be cautious about payback periods longer than the period you actually have data for.",
      },
    ],
  },

  // Topic 8.
  {
    slug: "influencer-budget-seasonal-business",
    category: "Campaign Strategy",
    title: "Influencer Marketing Budget Planning for Seasonal Businesses",
    seoTitle: "Influencer Budget Planning for Seasonal Businesses",
    excerpt:
      "If most of your sales arrive in a few weeks or months, an evenly spread influencer budget wastes money. How seasonal brands should phase creator spend, book creators before rates and calendars fill up, build a content bank off-season and keep cash flow in check.",
    metaDescription:
      "Plan an influencer budget for a seasonal business: phase spend around your peak, book creators early, build content off-season and protect cash flow.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "9 min read",
    spatialCoverage: "India",
    tags: ["seasonal business influencer marketing", "influencer marketing budget seasonal", "festive influencer budget", "phasing influencer spend", "off-season influencer marketing"],
    related: ["influencer-marketing-budget", "seasonal-influencer-marketing-india", "influencer-marketing-annual-plan"],
    hero: {
      src: "/blog/brand-guides/influencer-budget-seasonal-business.svg",
      alt: "Four phases of an influencer budget for seasonal businesses: off-season content, pre-peak build, peak conversion, post-peak learning",
    },
    body: [
      {
        type: "paragraph",
        text: "A woollens brand that sells most of its year in a few winter months, an air-conditioner maker that lives on the summer, a wedding-wear label, a coaching institute tied to exam dates: for these businesses, an influencer budget split evenly across twelve months is money spent when customers aren't buying and missing when they are. Seasonal brands need a budget shaped like their demand, and the planning has to start before the peak, not during it.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Map your sales by month, then phase creator spend in four parts: an off-season period for building content and relationships cheaply, a pre-peak period to build awareness and consideration, the peak itself for conversion-focused content and paid amplification of proven posts, and a short post-peak period for retention and learning. Book creators for the peak well in advance, because the best ones fill up and many raise rates in busy periods. Keep a reserve to scale what works mid-season, and check that the cash leaves the business at a time you can afford it.",
      },
      { type: "heading", text: "Know which kind of seasonality you have", id: "seasonality-types" },
      {
        type: "table",
        headers: ["Pattern", "Examples", "Budget implication"],
        rows: [
          ["Weather-driven", "Woollens, air conditioners, coolers, sunscreen, rainwear", "Peak dates move with the weather; keep wave timing flexible by region"],
          ["Festival and gifting", "Gift hampers, jewellery, sweets, electronics during festive sales", "Fixed dates, crowded feeds, higher creator demand; book early"],
          ["Life-event", "Wedding wear, wedding services, baby products", "Long consideration; pre-peak content matters as much as the peak"],
          ["Academic calendar", "Coaching, test prep, school supplies, study-abroad services", "Tied to exam and admission dates; parents and students decide at different times"],
          ["Travel and holiday", "Hotels, tour operators, travel gear", "Booking happens well before travel; spend ahead of the season, not during it"],
        ],
      },
      {
        type: "paragraph",
        text: "If your peaks are mainly festivals and cultural moments, seasonal influencer marketing in India covers the calendar and creative side. This page is about the money: how much to spend in each phase and when.",
        links: [{ text: "seasonal influencer marketing in India", href: "/blog/seasonal-influencer-marketing-india" }],
      },
      { type: "heading", text: "Step 1: Map demand, then map decisions", id: "map-demand" },
      {
        type: "paragraph",
        text: "Start with your own sales by month (or week) for at least the last two years, by product and region if the pattern differs. Then mark when customers decide, which is often earlier than when they buy. Wedding outfits and holidays are researched weeks or months before purchase; an air conditioner might be bought on the first very hot weekend. Creator content has to arrive in the research window, not just the buying window.",
      },
      { type: "heading", text: "Step 2: Phase the budget", id: "phase-budget" },
      {
        type: "table",
        headers: ["Phase", "Typical share of annual creator budget (illustrative)", "What the spend does", "Measure"],
        rows: [
          ["Off-season", "10–15%", "Seeding, content shoots, testing hooks and creators at lower competition", "Content produced, creator fit, early engagement quality"],
          ["Pre-peak build", "25–35%", "Awareness and consideration content in the research window", "Reach in target audience, saves, branded search, waitlists"],
          ["Peak", "40–50%", "Conversion content, codes, paid amplification of proven posts", "Orders, cost per new customer, stock sell-through"],
          ["Post-peak", "5–10%", "Usage, care and second-purchase content; review what worked", "Repeat orders, returns, learnings for next season"],
          ["Reserve", "10% (held back)", "Scaling winners mid-season or covering a late, strong peak", "Released only against agreed triggers"],
        ],
      },
      {
        type: "paragraph",
        text: "These shares are illustrative, not a benchmark. A brand with a very short peak might put more into pre-peak; a brand whose customers decide on the day might put more into the peak itself. What matters is that the shape follows your demand curve. For building the overall budget figure and its line items, see influencer marketing budget planning.",
        links: [{ text: "influencer marketing budget planning", href: "/blog/influencer-marketing-budget" }],
      },
      { type: "heading", text: "Step 3: Book peak creators early", id: "book-early" },
      {
        type: "paragraph",
        text: "In busy periods, the best-fit creators are booked by several brands at once and many raise their rates. Approach them before the season, agree dates and fees, and consider a multi-post deal spanning pre-peak and peak, which gives the creator certainty and often costs less per post. Avoid booking creators whose feeds will be wall-to-wall sponsored content during the peak; your post will compete with five others in the same week.",
      },
      {
        type: "list",
        items: [
          "Shortlist and vet peak creators during the off-season.",
          "Lock dates with a clear go-live window, not a single day, so you can move with the weather or stock.",
          "Agree usage rights at booking if you plan to run their content as ads during the peak.",
          "Leave a few slots open for creators you discover in the pre-peak phase.",
        ],
      },
      { type: "heading", text: "Step 4: Build a content bank off-season", id: "content-bank" },
      {
        type: "paragraph",
        text: "Off-season is the cheapest time to produce creator content. A winter-wear brand can shoot styling content in autumn with creators who have time to do it properly. That content becomes the peak's paid ads, product page videos and email assets, already tested on a small audience. Store it with rights and expiry dates in an influencer content library so it can be found when the rush starts.",
        links: [{ text: "influencer content library", href: "/blog/influencer-content-library" }],
      },
      { type: "heading", text: "Step 5: Set triggers for the reserve", id: "reserve-triggers" },
      {
        type: "paragraph",
        text: "Decide in advance what would release the reserve, so it isn't spent in a panic or held back out of caution. For example: release half the reserve if peak-week cost per new customer is below target and stock is above a set level; hold it if the weather turns late or stock is tight. The same logic applies in reverse: if the season starts weakly, cut the later waves rather than pushing spend into a market that isn't buying yet.",
      },
      { type: "heading", text: "Cash flow: when the money actually leaves", id: "cash-flow" },
      {
        type: "paragraph",
        text: "Seasonal businesses often have the least cash just before the peak, when stock has been bought but not sold. Creator payments add to that pressure. Plan payment timing as carefully as the budget split.",
      },
      {
        type: "list",
        items: [
          "Agree staggered payments (for example, part at booking, the rest after the content goes live) and put them in a cash calendar alongside stock purchases.",
          "Consider performance-linked elements for peak creators, such as a lower fixed fee plus commission, if your tracking supports it.",
          "Keep paid amplification flexible; it's the easiest line to scale up or down at short notice.",
          "Don't let an off-season budget underspend roll silently into the peak. Decide where it goes.",
        ],
      },
      {
        type: "paragraph",
        text: "If you'd like help building a seasonal plan with the timing, creator bookings and budget phasing worked out, Kudozz's influencer campaign strategy service does this as part of annual planning.",
        links: [{ text: "influencer campaign strategy service", href: "/services/campaign-strategy" }],
      },
      { type: "heading", text: "An illustrative seasonal plan", id: "example" },
      {
        type: "table",
        headers: ["Month (hypothetical winter-wear brand, North India)", "Phase", "Creator activity", "Indicative spend"],
        rows: [
          ["July–August", "Off-season", "Seed 15 creators; shoot styling and fabric content with five", "₹1,20,000"],
          ["September", "Pre-peak planning", "Confirm peak creators, dates and usage rights", "Booking deposits"],
          ["October", "Pre-peak build", "Layering and fabric-care content as nights cool; wishlist and waitlist", "₹2,40,000"],
          ["November–December", "Peak", "Conversion content, codes, paid amplification of tested content", "₹3,80,000 + reserve if triggered"],
          ["January", "Late peak and post-peak", "Care, styling repeats, clearance only if margins allow", "₹60,000"],
          ["February–June", "Low", "Review, creator relationship upkeep, no paid creator spend", "Minimal"],
        ],
      },
      {
        type: "paragraph",
        text: "Illustrative only. The numbers show shape, not a recommendation for any particular brand. For how this fits into a full-year plan with several products and regions, see influencer marketing annual plan.",
        links: [{ text: "influencer marketing annual plan", href: "/blog/influencer-marketing-annual-plan" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Spreading the budget evenly across the year regardless of when customers buy.",
          "Starting creator outreach when the season has already begun.",
          "Spending the whole peak budget in the first week with nothing left to scale winners.",
          "Treating off-season as dead time instead of the cheapest time to make content.",
          "Ignoring regional differences; winter, monsoon and festival timing vary across India.",
          "Paying creators in full upfront just when stock purchases have drained cash.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A seasonal business doesn't need a bigger influencer budget, it needs a better-timed one. Map when customers decide and buy, phase spend from off-season content through pre-peak and peak, book creators early, hold a reserve with clear triggers, and plan payments around your cash position. Then each season's results feed a sharper plan for the next.",
      },
    ],
    faqs: [
      {
        question: "Should a seasonal brand stop influencer marketing in the off-season?",
        answer:
          "Paid campaigns can usually be paused, but the off-season is the cheapest time to seed products, build creator relationships and produce content you'll use in the peak. A small off-season budget usually makes the peak budget work harder.",
      },
      {
        question: "How early should we book creators for festive season campaigns?",
        answer:
          "As early as you can confirm product and stock. For Diwali and similar peaks, many brands shortlist in the summer and confirm bookings several weeks before the festive window, because popular creators fill up and rates can rise.",
      },
      {
        question: "What share of the budget should go to the peak?",
        answer:
          "Often the largest share, but not all of it. Customers decide before they buy, so pre-peak content matters, and a reserve lets you scale what's working. The right split comes from your own sales and decision timing.",
      },
      {
        question: "How do weather-dependent businesses plan creator dates?",
        answer:
          "Use go-live windows rather than fixed dates, plan by region, and keep paid amplification flexible so you can move spend when the weather turns.",
      },
    ],
  },

  // Topic 99.
  {
    slug: "influencer-marketing-quarterly-review",
    category: "Brand Marketing",
    title: "How to Run a Quarterly Influencer Marketing Review for Senior Leadership",
    seoTitle: "Quarterly Influencer Marketing Review: Agenda and Template",
    excerpt:
      "Senior leaders don't want a deck of reach screenshots. A quarterly influencer marketing review should answer four questions: what did we spend, what did we get, what did we learn and what do we do next quarter. An agenda, a one-page template and the decisions it should produce.",
    metaDescription:
      "Run a quarterly influencer marketing review leadership can act on: a 45-minute agenda, a one-page template, and the decisions each review should produce.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "8 min read",
    tags: ["quarterly influencer marketing review", "influencer marketing QBR", "influencer marketing leadership report", "influencer program review", "influencer marketing quarterly report"],
    related: ["influencer-marketing-dashboard", "influencer-marketing-annual-plan", "scale-pause-stop-influencer-campaigns"],
    hero: {
      src: "/blog/brand-guides/influencer-marketing-quarterly-review.svg",
      alt: "Four questions of a quarterly influencer marketing review: what we spent, what we got, what we learned, what we do next",
    },
    body: [
      {
        type: "paragraph",
        text: "Most influencer reporting is built for the people running campaigns: post-by-post reach, engagement and creator lists. Senior leaders need something different. They want to know whether the channel is earning its budget, what's changed since last quarter and what they're being asked to approve. A quarterly review gives them that, and it's often what decides whether influencer marketing gets more budget or less next year.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Hold a 45-minute review each quarter built around four questions: what did we spend, what did we get for it against the targets set last quarter, what did we learn, and what do we recommend for next quarter. Send a one-page summary two days before the meeting, keep detail in an appendix, compare results with targets and other channels using consistent definitions, be honest about what you can't measure, and end with specific decisions for leadership to make.",
      },
      { type: "heading", text: "How this differs from your other reports", id: "how-it-differs" },
      {
        type: "table",
        headers: ["Format", "Audience", "Frequency", "Job"],
        rows: [
          ["Campaign report", "Marketing team, agency", "After each campaign", "What happened in one campaign"],
          ["Dashboard", "Marketing team, sometimes leaders", "Live or weekly", "Monitor performance as it happens"],
          ["Quarterly review", "Senior leadership, finance", "Every quarter", "Decide budget, priorities and changes"],
          ["Program audit", "Marketing lead, leadership", "Before scaling or once a year", "Check the whole program's foundations"],
          ["Agency review", "Marketing lead", "Quarterly or twice a year", "Judge the agency's work and relationship"],
        ],
      },
      {
        type: "paragraph",
        text: "The quarterly review draws on the others but doesn't replace them. For the live tracking it pulls from, see what an influencer marketing dashboard should track; for the deeper health check, how to audit an influencer marketing program; and for evaluating an agency partner, the influencer agency performance review.",
        links: [
          { text: "what an influencer marketing dashboard should track", href: "/blog/influencer-marketing-dashboard" },
          { text: "how to audit an influencer marketing program", href: "/blog/influencer-marketing-audit" },
          { text: "the influencer agency performance review", href: "/blog/influencer-agency-performance-review" },
        ],
      },
      { type: "heading", text: "Before the meeting: get the numbers straight", id: "preparation" },
      {
        type: "list",
        items: [
          "Use the same definitions as last quarter (what counts as a new customer, which orders are attributed, how cost is calculated). If something changed, say so on the page.",
          "Reconcile creator platform numbers with your own analytics and order data, and explain any gaps.",
          "Include full cost: creator fees, product, paid amplification, agency or team time and tools.",
          "Compare with the targets agreed at the last review, not with targets invented afterwards.",
          "Get finance to check the cost and revenue figures before they're presented.",
        ],
      },
      {
        type: "paragraph",
        text: "If platform and website numbers don't match, why creator reports and analytics don't match covers how to reconcile them before leadership sees two versions of the truth.",
        links: [{ text: "why creator reports and analytics don't match", href: "/blog/influencer-reporting-discrepancies" }],
      },
      { type: "heading", text: "A 45-minute agenda", id: "agenda" },
      {
        type: "table",
        headers: ["Time", "Section", "What to cover"],
        rows: [
          ["5 min", "Headline", "One sentence on how the quarter went against its targets, and the decisions you'll ask for"],
          ["10 min", "Spend and results", "Spend vs budget; results vs targets for the two or three agreed metrics; comparison with last quarter"],
          ["10 min", "What worked and what didn't", "Top and bottom creators, formats and products, with the reason, not just the ranking"],
          ["5 min", "Risks and issues", "Compliance, brand safety, creator problems, measurement gaps"],
          ["10 min", "Recommendations", "Scale, change or stop; next quarter's budget, targets and tests"],
          ["5 min", "Decisions", "Confirm what leadership has approved, owners and dates"],
        ],
      },
      { type: "heading", text: "The one-page summary", id: "one-page-template" },
      {
        type: "template",
        label: "Quarterly influencer marketing review: one page",
        text: "Quarter: [Q_ FY__]          Prepared by: [name]          Checked by finance: [yes/no]\n\nHEADLINE\n[One sentence: on track / ahead / behind, and why.]\n\nSPEND\nBudget ₹[  ]   Actual ₹[  ]   Variance [  ]%\nSplit: creator fees ₹[  ] | product and shipping ₹[  ] | paid amplification ₹[  ] | agency/team ₹[  ]\n\nRESULTS VS TARGETS (definitions unchanged from last quarter: [yes/no, explain])\nPrimary metric: [e.g. new customers]   Target [  ]   Actual [  ]\nCost per [result]: Target ₹[  ]   Actual ₹[  ]\nSecondary: [e.g. 90-day repeat rate of creator customers]   [  ]\nCompared with other channels: [one line, same definitions]\n\nWHAT WE LEARNED (max three)\n1. [Finding + evidence + confidence: high/medium/low]\n2.\n3.\n\nRISKS AND ISSUES\n[Compliance, brand safety, measurement gaps, creator issues]\n\nRECOMMENDATIONS FOR NEXT QUARTER\nScale: [ ]   Change: [ ]   Stop: [ ]\nTest: [one question, budget, pass mark]\nProposed budget: ₹[  ]   Targets: [  ]\n\nDECISIONS REQUESTED\n1. [Approve / reject / discuss]\n2.",
      },
      { type: "heading", text: "Choosing the metrics leadership sees", id: "metrics" },
      {
        type: "paragraph",
        text: "Pick two or three metrics that connect to business goals and keep them stable for the year, so quarters can be compared. Show everything else in an appendix. Which metrics depend on what the program is for:",
      },
      {
        type: "table",
        headers: ["Program objective", "Headline metrics for leadership", "Keep in the appendix"],
        rows: [
          ["New customer acquisition", "New customers, cost per new customer, repeat rate of those customers", "Reach, engagement rate, clicks per creator"],
          ["Brand awareness", "Reach in the target audience, brand lift or branded search change", "Likes, comments, follower changes"],
          ["Content for ads", "Cost per result when creator content runs as ads vs brand-made ads", "Number of assets, organic engagement"],
          ["B2B pipeline", "Qualified leads or meetings, pipeline value influenced", "Impressions, profile views"],
        ],
      },
      {
        type: "paragraph",
        text: "Show confidence alongside numbers. 'Tracked orders: 1,240 (a floor; codes and links miss some sales)' is more useful to a CFO than a single confident figure that later turns out to be inflated.",
      },
      { type: "heading", text: "Turning results into decisions", id: "decisions" },
      {
        type: "paragraph",
        text: "A review that ends with 'we'll keep going' wastes leadership time. Each recommendation should be one of three things: scale something that's working, change something that's underperforming, or stop something that isn't worth fixing. Use the rules from how to decide whether to scale, pause or stop an influencer campaign, and tie each one to a budget figure.",
        links: [{ text: "how to decide whether to scale, pause or stop an influencer campaign", href: "/blog/scale-pause-stop-influencer-campaigns" }],
      },
      {
        type: "list",
        items: [
          "Scale: 'Move ₹4,00,000 from awareness creators to the six creators whose customers repeat most, keeping their content and offer the same.'",
          "Change: 'Keep YouTube, but switch from one-off integrations to a three-video series with two creators, and judge it on qualified leads.'",
          "Stop: 'End the gifting-only program; it produced content we couldn't use and no measurable sales.'",
          "Test: 'Spend ₹1,50,000 testing regional-language creators in two states, with a pass mark agreed today.'",
        ],
      },
      {
        type: "paragraph",
        text: "These examples are illustrative. Note how each names an amount, a reason and a way to judge it next quarter.",
      },
      { type: "heading", text: "Linking quarters to the annual plan", id: "annual-plan" },
      {
        type: "paragraph",
        text: "Each quarterly review should check progress against the year's plan and adjust it. If the first two quarters show creator customers repeat more than expected, the second half of the year might shift budget toward acquisition. If a new market isn't working, the review is the moment to pause it. Influencer marketing annual plan covers building the yearly plan these reviews update.",
        links: [{ text: "Influencer marketing annual plan", href: "/blog/influencer-marketing-annual-plan" }],
      },
      {
        type: "paragraph",
        text: "If you'd like this reporting done for you, with costs, attribution and creator results pulled together each quarter, Kudozz's campaign reporting service produces leadership-ready reviews alongside campaign reports.",
        links: [{ text: "campaign reporting service", href: "/services/reporting" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Presenting a 40-slide deck of post screenshots instead of a one-page summary.",
          "Changing metric definitions between quarters without saying so.",
          "Reporting revenue or ROAS without full cost, or without finance checking the numbers.",
          "Showing only successes; leaders trust reviews that also name what didn't work.",
          "Comparing influencer results with other channels using different attribution rules.",
          "Ending without clear decisions, owners and budget figures.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A good quarterly review is short, consistent and ends in decisions. Keep the same few metrics every quarter, include full costs, be honest about measurement limits, explain what you learned, and bring specific recommendations with budgets attached. Over a year, those reviews build the evidence that decides how much influencer marketing your business should do.",
      },
    ],
    faqs: [
      {
        question: "What should a quarterly influencer marketing report include?",
        answer:
          "Spend against budget, results against the targets agreed last quarter, a comparison with other channels on the same definitions, up to three learnings, risks and issues, and specific recommendations with budgets for next quarter.",
      },
      {
        question: "How long should a quarterly review meeting be?",
        answer:
          "About 45 minutes is usually enough if a one-page summary is shared beforehand. Detail belongs in an appendix that people can read if they want to.",
      },
      {
        question: "Who should attend the review?",
        answer:
          "The marketing lead who owns influencer marketing, a senior decision-maker who controls budget, someone from finance, and, if you use one, your agency lead for the results section.",
      },
      {
        question: "How do we report results we can't measure precisely?",
        answer:
          "State the method and its limits plainly, show a conservative figure as a floor, and explain any uplift estimate separately. Leaders generally prefer an honest range to an overconfident single number.",
      },
    ],
  },
];
