import type { BlogPost } from "@/content/blog";

/**
 * SMM batch 04, writer B (2026-11-12): festive and sale-season planning for D2C brands (02R), an organic
 * 14-day product launch plan (05), small-budget social media prioritisation for D2C founders (07) and
 * communicating stock-outs, delivery delays and price changes (08R).
 * CCPA, ASCI and platform facts checked November 2026; sources log: smm-sources-smm-d2c-planning.md
 * in the batch scratchpad.
 */

const AUTHOR = { name: "Kudozz Strategy Team", role: "Agency Team" };
const PUBLISHED = "2026-11-12";
const REVIEWED = "November 2026";
const CATEGORY = "Social Media Management" as const;

const SRC = {
  ccpaDarkPatterns: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1983994&reg=48&lang=2",
  asciCode: "https://www.ascionline.in/the-asci-code/",
  igPinPost: "https://help.instagram.com/318456537074409/",
  igStickers: "https://help.instagram.com/818507804873835",
  igLikeApps: "https://help.instagram.com/263751177667145/",
  metaSpam: "https://transparency.meta.com/policies/community-standards/spam/",
  metaSchedule: "https://www.facebook.com/business/help/1252240869631062",
  gaUtm: "https://support.google.com/analytics/answer/10917952",
};

export const smmD2cPlanningPosts: BlogPost[] = [
  // 02R: festive and sale-season planning
  {
    slug: "d2c-festive-sale-social-media-plan",
    category: CATEGORY,
    title: "Festive and Sale-Season Social Media Planning for D2C Brands: A Week-by-Week Plan",
    seoTitle: "Festive Sale Social Media Plan for D2C Brands",
    excerpt:
      "A week-by-week festive and sale-season social media plan for D2C brands in India: readiness checks for stock, offers and service capacity, honest offer terms, sale-day operations and the post-sale weeks most brands skip.",
    metaDescription:
      "A festive sale social media plan for D2C brands: readiness checks, honest offer terms, a week-by-week plan from six weeks out to the post-sale weeks.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "9 min read",
    tags: [
      "festive sale social media plan for D2C brands",
      "Diwali social media plan",
      "sale season content calendar",
      "D2C festive marketing India",
      "festive offer posts",
    ],
    related: ["social-media-management-d2c-brands", "monthly-social-media-content-calendar", "seasonal-influencer-marketing-india"],
    hero: {
      src: "/blog/brand-guides/d2c-festive-sale-social-media-plan.svg",
      alt: "Timeline diagram of a festive sale social media plan: readiness six weeks out, build-up, early access, sale days and post-sale care, with a reminder that offer terms and stock are confirmed first.",
    },
    body: [
      {
        type: "paragraph",
        text: "It is three weeks before Diwali. The founder wants a 'big festive push', the warehouse has not confirmed how many units of the hero product will be ready, and nobody has written down whether the offer stacks with the welcome code. The social calendar is still a mood board. Most festive social problems start here, before a single post goes out.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Plan festive and sale-season social media six weeks out. Confirm stock, offer terms and customer service capacity first, then run a sequence: build interest with useful festive content, open early access, run the sale days with clear terms and fast replies, and keep posting after the sale for delivery updates, how-to-use content and returns. Never use fake countdowns or false scarcity. Check lunar festival dates every year, because they move.",
      },
      { type: "heading", text: "Build your festive calendar from your customers, not a generic list", id: "festive-calendar" },
      {
        type: "paragraph",
        text: "A national list of festivals is a starting point, not a plan. A skincare brand selling mostly in Kerala and Tamil Nadu may care more about Onam and Pongal than about a north Indian festival that dominates generic calendars. Look at your own order history by state and month, your marketplace sale participation, and the gifting moments your category genuinely serves.",
      },
      {
        type: "paragraph",
        text: "Many Indian festivals follow lunar or lunisolar calendars, so Diwali, Eid, Holi, Durga Puja and others fall on different Gregorian dates each year. Confirm dates every year from an official holiday list or a reliable panchang before you lock the plan. Do not copy last year's dates.",
      },
      {
        type: "table",
        headers: ["Season type", "Examples", "What changes for social"],
        rows: [
          ["Major festivals", "Diwali, Durga Puja, Eid, Christmas, Onam, Pongal", "Gifting content, regional language posts, delivery cut-off reminders"],
          ["Relationship moments", "Raksha Bandhan, Karva Chauth, wedding season", "Gift guides, personalisation lead times, bundles"],
          ["Marketplace sale periods", "Large platform sale events, described by each marketplace", "Pricing consistency between your site and marketplaces, where-to-buy clarity"],
          ["End-of-season sales", "Summer and winter clearance", "Size and colour availability, final-sale return terms"],
          ["Brand-owned moments", "Anniversary sale, member early access", "Your own terms and timing, fewer competing messages"],
        ],
      },
      { type: "heading", text: "Readiness check: stock, offers and service capacity", id: "readiness" },
      {
        type: "paragraph",
        text: "Social media amplifies whatever the business is ready for. If stock is thin, the courier partner is already stretched or only one person answers DMs, a successful festive post creates complaints. Run this check with operations, finance and support before the creative work starts.",
      },
      {
        type: "list",
        items: [
          "Stock: confirmed units for each product you plan to feature, plus what happens when one sells out (hide it, swap it, or post a restock note).",
          "Offer: the exact discount or bundle, start and end date and time, exclusions, whether it stacks with other codes, and minimum order value if any. Written down and signed off by whoever owns pricing.",
          "Prices: the same offer, or a clearly explained difference, across your website and marketplaces.",
          "Delivery: last order date for festive delivery by region, agreed with your logistics team, and a plan for courier delays.",
          "Returns and exchanges: whether sale items follow normal terms, and where that is written.",
          "Service capacity: who answers comments and DMs, during which hours, and the reply bank they use.",
          "Approvals: who signs off creatives and copy, with turnaround times shortened for sale week.",
        ],
      },
      { type: "heading", text: "Write offer terms people can actually read", id: "offer-terms" },
      {
        type: "paragraph",
        text: "Festive offers attract the most scrutiny of anything you post. The ASCI Code expects claims to be truthful and capable of substantiation, so a 'flat 40% off' must be true for what the post shows. The Central Consumer Protection Authority's Guidelines for Prevention and Regulation of Dark Patterns, issued in November 2023, name practices such as false urgency, drip pricing and bait and switch. A countdown that resets, a 'only 3 left' sticker that is not true, or a fee revealed at checkout all fall into that territory.",
        links: [
          { text: "ASCI Code", href: SRC.asciCode },
          { text: "Guidelines for Prevention and Regulation of Dark Patterns", href: SRC.ccpaDarkPatterns },
        ],
      },
      {
        type: "template",
        label: "Festive offer post with terms (fill every bracket before publishing)",
        text: "[Offer headline, e.g. 'Festive gift sets: [X]% off']\n\nWhat's included: [products or collection, linked]\nWhen: [start date, time] to [end date, time] IST\nWhere: [website / app / marketplaces where the same offer applies]\nTerms: [exclusions], [does / does not stack with other codes], [minimum order, if any]\nDelivery: order by [date] for delivery before [festival] in [regions]. Later orders ship normally.\nReturns: [sale items follow our usual return policy / exchange only], details at [link].\n\nQuestions? Comment or DM us between [hours].",
      },
      { type: "heading", text: "The week-by-week festive plan", id: "week-by-week-plan" },
      {
        type: "paragraph",
        text: "This plan assumes the sale starts in week 0 and that you post four to six times a week on your main platform. Shrink or stretch it to your capacity; the order matters more than the volume. Keep your usual monthly calendar running underneath, as described in our guide to a monthly social media content calendar.",
        links: [{ text: "monthly social media content calendar", href: "/blog/monthly-social-media-content-calendar" }],
      },
      {
        type: "table",
        headers: ["Week", "Goal", "Feed and Reels", "Stories and community", "Owner check"],
        rows: [
          ["Week -6", "Readiness", "Normal calendar continues", "Collect customer questions from last season", "Stock, offer terms, delivery cut-offs agreed"],
          ["Week -5", "Plan and produce", "Shoot or source gift and usage content", "Ask followers what they are shopping for (poll)", "Creative brief and approvals schedule"],
          ["Week -4", "Useful festive content", "Gift guides by budget or recipient, how-to-use Reels", "Answer gifting questions in Stories", "Product pages updated for festive bundles"],
          ["Week -3", "Build interest", "Bundle reveals, behind-the-scenes packing", "Early access sign-up for email or WhatsApp list, with consent", "Reply bank drafted"],
          ["Week -2", "Announce", "Offer announcement with full terms, pinned", "Countdown sticker set to the real start time", "Terms checked against checkout"],
          ["Week -1", "Early access and reminders", "Delivery cut-off post by region", "Early access Stories, FAQs on sizes and shades", "Support rota for sale week confirmed"],
          ["Week 0", "Sale days", "Daily highlight post, sold-out updates", "Live stock and delivery updates, fast replies", "Daily check of stock vs posts"],
          ["Week +1", "Deliver well", "Unboxing and how-to-use content", "Order status FAQs, delay notices if needed", "Complaint themes logged"],
          ["Week +2", "Keep the new customers", "Care, refills, styling or recipe ideas", "Invite reviews and UGC honestly, with permission", "Post-sale review meeting"],
        ],
      },
      { type: "subheading", text: "Weeks -6 to -3: readiness and useful content" },
      {
        type: "paragraph",
        text: "The early weeks earn attention without asking for a sale. Gift guides, 'what to buy for a host who has everything' carousels and short how-to-use Reels are saved and shared, and they give you something to point at when the offer arrives. Use customer questions from last season to decide what to explain.",
      },
      { type: "subheading", text: "Weeks -2 to 0: announce, remind, run" },
      {
        type: "paragraph",
        text: "Announce once, clearly, with the template above. On Instagram you can pin up to three posts to the top of your profile, so pin the offer post and the delivery cut-off post for the sale period. A countdown sticker in Stories lets people set a reminder and notifies them when it ends, which is useful only if the end time is real.",
        links: [
          { text: "pin up to three posts", href: SRC.igPinPost },
          { text: "countdown sticker", href: SRC.igStickers },
        ],
      },
      { type: "subheading", text: "Weeks +1 and +2: the part most brands skip" },
      {
        type: "paragraph",
        text: "After the sale, festive buyers are waiting for parcels and deciding whether you are worth buying from again. Post order status FAQs, how-to-use and care content, and honest delay notices if couriers slow down. Our guide on turning first-time buyers into repeat customers covers this stage in depth, and the guide on communicating stock-outs and delivery delays has templates for the notices.",
        links: [
          { text: "turning first-time buyers into repeat customers", href: "/blog/d2c-social-media-repeat-customers" },
          { text: "communicating stock-outs and delivery delays", href: "/blog/d2c-stockouts-delays-social-media" },
        ],
      },
      { type: "heading", text: "Running sale days without losing control of the comments", id: "sale-days" },
      {
        type: "paragraph",
        text: "Sale days bring the same ten questions hundreds of times: is the code working, does the offer apply to this product, when will it arrive, can I return it. Prepare answers before the sale and keep them consistent with the pinned terms.",
      },
      {
        type: "list",
        items: [
          "Check stock against live posts twice a day and edit captions or Stories when a featured product sells out.",
          "Reply publicly to general questions and move order-specific ones to DMs or your support channel.",
          "Log repeated problems (a broken code, a wrong price) and escalate them to the person who can fix them, not just the person replying.",
          "Do not delete genuine complaints. Reply, fix and follow up. Remove only spam, abuse or personal data.",
          "Keep a short end-of-day note of what was asked and what went wrong for the post-sale review.",
        ],
      },
      { type: "heading", text: "Common mistakes in festive social planning", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Locking creative before stock and offer terms are confirmed, then editing live posts all week.",
          "Using last year's festival dates.",
          "Different offers on the website and marketplaces with no explanation.",
          "Countdowns that restart, or 'last few left' claims nobody checked.",
          "Turning the whole feed into sale banners for a month, so the useful content disappears.",
          "No support rota for sale days, so DMs pile up and become public complaints.",
          "Stopping all posting once the sale ends, just when new buyers are paying attention.",
        ],
      },
      { type: "heading", text: "Where creators and paid ads fit", id: "creators-and-ads" },
      {
        type: "paragraph",
        text: "This plan covers your brand's own organic accounts. Creator campaigns for festive seasons need longer lead times, briefs and disclosures, which our guide to seasonal influencer marketing in India covers. Paid festive ads are a separate job with their own budget and should use the same offer terms as your organic posts.",
        links: [{ text: "seasonal influencer marketing in India", href: "/blog/seasonal-influencer-marketing-india" }],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Open a shared document today with three headings: stock, offer terms and service capacity. Fill them with the people who own each one, then build the week-by-week plan around what is actually confirmed. The posts get easier once the facts are settled.",
      },
      {
        type: "paragraph",
        text: "If you want a team to plan and run the festive calendar on your own accounts, Kudozz's social media management includes content planning, copy and publishing, with community replies within an agreed scope.",
        links: [{ text: "social media management", href: "/services/social-media-management#content-planning" }],
      },
    ],
    faqs: [
      {
        question: "How early should a D2C brand start planning festive social media?",
        answer:
          "About six weeks before the sale is a practical minimum for a small team: two weeks to confirm stock, offer terms and delivery cut-offs, two weeks to produce content, and two weeks of build-up before the sale. Brands working with creators, custom packaging or new bundles usually need longer, because those depend on suppliers and approvals outside the social team.",
      },
      {
        question: "Should we post the same festive offer on Instagram, our website and marketplaces?",
        answer:
          "Ideally the offer is the same everywhere, or the difference is explained plainly, for example a bundle that exists only on your website. Customers compare prices across channels, and unexplained differences turn into angry comments. Agree pricing with whoever manages marketplaces before you post, and say clearly where each offer applies.",
      },
      {
        question: "Is a countdown timer on a sale post a dark pattern?",
        answer:
          "A countdown to a real end time is fine. It becomes a problem when it resets, when the sale is quietly extended after the timer ends, or when it implies scarcity that does not exist. The CCPA's November 2023 dark patterns guidelines name false urgency as a dark pattern. If you extend a sale, say so openly.",
      },
      {
        question: "How many posts a day should we publish during a sale?",
        answer:
          "There is no reliable number. Post as often as you have something genuinely new to say: a new product in the sale, a sold-out update, a delivery cut-off, an answer to a common question. Stories suit frequent updates better than the feed. Posting the same banner repeatedly mostly creates noise and tires your followers.",
      },
      {
        question: "What should we do if a festive product sells out mid-sale?",
        answer:
          "Update the posts and Stories that feature it the same day, reply to comments asking about it with an honest restock date if you have one, and suggest an alternative only if it genuinely suits the same need. Do not leave sold-out products in pinned posts. A short sold-out Story is usually better than silence.",
      },
    ],
  },

  // 05: product launch on social media
  {
    slug: "d2c-product-launch-social-media-plan",
    category: CATEGORY,
    title: "How to Launch a New D2C Product on Social Media: A Step-by-Step Content Plan",
    seoTitle: "D2C Product Launch Social Media Strategy and Plan",
    excerpt:
      "A step-by-step organic launch plan for a new D2C product: what must be ready before day one, a 14-day content plan, how to run launch day, an asset brief template and how to judge the launch honestly.",
    metaDescription:
      "A D2C product launch social media strategy with a 14-day content plan, launch-day checklist, asset brief template and honest ways to judge the launch.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "8 min read",
    tags: [
      "D2C product launch social media strategy",
      "product launch content plan",
      "14-day launch plan",
      "new product launch Instagram",
      "D2C launch calendar",
    ],
    related: ["social-media-management-d2c-brands", "instagram-reels-strategy-for-brands", "influencers-for-product-launch"],
    hero: {
      src: "/blog/brand-guides/d2c-product-launch-social-media-plan.svg",
      alt: "Diagram of a 14-day product launch content plan in four stages: build-up on days 1 to 4, launch on day 5, explain on days 6 to 10 and prove on days 11 to 14.",
    },
    body: [
      {
        type: "paragraph",
        text: "The new product is finally in the warehouse. The founder has posted one teaser that says 'something big is coming', the product page is half written, and the team plans to 'go live on Monday'. On Monday the post goes up, a few loyal followers react, and by Thursday the feed is back to normal. Nothing went wrong, exactly. There just was no plan for days two to fourteen.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A D2C product launch on social media works best as a 14-day sequence, not a single post. Spend a few days building interest around the problem the product solves, launch with a clear post that states price, availability and where to buy, then spend most of the fortnight explaining the product and showing proof. Make sure the product page, stock and support answers are ready before day one.",
      },
      { type: "heading", text: "Before day one: what must already be true", id: "launch-readiness" },
      {
        type: "paragraph",
        text: "Social posts send people somewhere. If that place is not ready, the launch spends its attention on confusion. Tick these off before the first teaser.",
      },
      {
        type: "list",
        items: [
          "Product page live (or ready to switch on) with price, sizes or variants, ingredients or materials, delivery and returns.",
          "Stock confirmed for the launch window, and a decision on what to say if it sells out.",
          "Every claim in the launch copy checked against evidence. The ASCI Code expects claims to be capable of substantiation, and that includes 'longest-lasting', 'clinically tested' or 'eco-friendly'.",
          "Launch price and any introductory offer written down with its end date and terms.",
          "A one-page FAQ for whoever replies to comments and DMs.",
          "Core assets: product photos, one demo video, close-ups of texture, size or fit, and packaging.",
          "Tracking links with UTM parameters for every link you will share, so website visits from the launch can be separated in Google Analytics.",
        ],
      },
      {
        type: "paragraph",
        text: "Two references help here: the ASCI Code for what counts as a supportable claim, and Google's Analytics help on collecting campaign data with custom URLs for UTM tagging. Name the campaign once, for example 'launch-[product]-[month]', and use it everywhere.",
        links: [
          { text: "ASCI Code", href: SRC.asciCode },
          { text: "collecting campaign data with custom URLs", href: SRC.gaUtm },
        ],
      },
      { type: "heading", text: "The launch in four stages", id: "four-stages" },
      {
        type: "table",
        headers: ["Stage", "Days", "Job", "What the audience should think"],
        rows: [
          ["Build-up", "1 to 4", "Name the problem, show the making, invite reminders", "'I have this problem and they are working on it'"],
          ["Launch", "5", "Reveal clearly: what it is, price, where to buy", "'I know exactly what this is and how to get it'"],
          ["Explain", "6 to 10", "Demos, use cases, comparisons, answers to questions", "'I understand whether it suits me'"],
          ["Prove", "11 to 14", "First customer reactions with permission, founder notes, restock or next steps", "'Real people are using it'"],
        ],
      },
      { type: "heading", text: "The 14-day launch content plan", id: "14-day-plan" },
      {
        type: "paragraph",
        text: "This plan is written for Instagram as the main platform, with Stories for daily updates. Adapt formats to your own channels. A hypothetical example runs through it: a D2C brand launching a new unscented body lotion.",
      },
      {
        type: "table",
        headers: ["Day", "Format", "Post idea", "Purpose"],
        rows: [
          ["1", "Carousel", "The problem: why people with sensitive skin avoid scented lotions (no medical claims)", "Name the need"],
          ["2", "Reel", "Behind the scenes: testing textures in the lab or workshop", "Show effort and process"],
          ["3", "Stories", "Poll and questions sticker: what do you look for in a body lotion?", "Collect objections early"],
          ["4", "Stories", "Countdown sticker to the real launch time, with reminder", "Let interested people opt in"],
          ["5", "Reel plus pinned post", "Launch reveal: product, size, price, where to buy, delivery", "Clear announcement"],
          ["5", "Stories", "Launch-day updates, link to product page, answers to first questions", "Route interest to the page"],
          ["6", "Reel", "30-second demo: texture, how much to use, how it absorbs", "Product understanding"],
          ["7", "Carousel", "Ingredients explained plainly, what each does, what it does not do", "Pre-empt questions"],
          ["8", "Stories", "'You asked' replies from launch-day comments", "Show you listen"],
          ["9", "Reel", "Founder on why we made it and who it is not for", "Trust and honesty"],
          ["10", "Carousel", "How it compares with our existing lotion, factual only", "Help existing buyers choose"],
          ["11", "Post", "First customer reaction, shared with written permission", "Early proof"],
          ["12", "Reel", "Use case: after a shower, travel size, desk drawer", "Everyday context"],
          ["13", "Stories", "Stock update, restock date if any, delivery times", "Honest availability"],
          ["14", "Carousel", "Launch FAQ roundup, saved to a Highlight", "Long-life reference"],
        ],
      },
      {
        type: "paragraph",
        text: "For depth on demos, comparisons and explainer formats, see our guide to product content that answers customer questions before they buy. Most launches fall short on the explain stage.",
        links: [{ text: "product content that answers customer questions before they buy", href: "/blog/d2c-product-explainer-content" }],
      },
      { type: "heading", text: "Launch day: run it like an event", id: "launch-day" },
      {
        type: "paragraph",
        text: "On Instagram, a countdown sticker lets followers set a reminder and notifies them when the countdown ends, so set it to the real launch time. Pin the launch post to the top of your profile for the first two weeks; Instagram allows up to three pinned posts at the time of writing (November 2026).",
        links: [
          { text: "countdown sticker", href: SRC.igStickers },
          { text: "up to three pinned posts", href: SRC.igPinPost },
        ],
      },
      {
        type: "list",
        items: [
          "Post at a time when your team can reply for the next three hours.",
          "Check the product page, checkout and launch code yourself after posting.",
          "Reply to every genuine question in the first hours, using the FAQ so answers stay consistent.",
          "Note every question you could not answer and get the answer by evening.",
          "Share early Stories updates only with facts: sold-out variants, delivery times, a fixed bug.",
        ],
      },
      { type: "heading", text: "A brief template for each launch asset", id: "asset-brief" },
      {
        type: "paragraph",
        text: "Each of the 14 days needs a short brief so the designer, editor and copywriter work from the same facts. Keep it to one screen.",
      },
      {
        type: "template",
        label: "Launch asset brief",
        text: "Day and stage: [Day 6, Explain]\nFormat: [Reel, 30 to 45 seconds, vertical]\nOne message: [How much to use and how it feels]\nWho it is for: [People who dislike scented lotions]\nMust show: [Texture close-up, pump amount, skin after 1 minute]\nClaims allowed (with evidence on file): [list]\nClaims not allowed: [no medical or 'cures' language]\nCaption elements: [price, size, link in bio or product tag if available]\nLink: [product page URL with UTM]\nApprover and deadline: [name, date]",
      },
      { type: "heading", text: "How to judge the launch after 14 days", id: "judge-the-launch" },
      {
        type: "paragraph",
        text: "Look at three layers. Content signals: saves, shares, replies and watch time on the explain posts. Intent signals: profile visits, link clicks, DMs asking where to buy, and questions about sizes or ingredients. Sales signals: orders and sessions tagged with your launch UTM. Many buyers see the launch on social and buy later or on a marketplace, so treat social's share of sales as directional. Our guide to social media KPIs explains which metrics fit which goal.",
        links: [{ text: "social media KPIs", href: "/blog/social-media-kpis" }],
      },
      {
        type: "paragraph",
        text: "Write a one-page launch review: what people asked, which posts they saved, what confused them, and what you would change. That document is worth more than the launch numbers for the next product.",
      },
      { type: "heading", text: "Mistakes that flatten a launch", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Teasing for a week without saying what the product is, then launching to people who have lost interest.",
          "A launch post without price, size or where to buy.",
          "Claims the brand cannot back up, written in excitement on launch day.",
          "Fake scarcity, such as 'only 50 made' when more are coming. The CCPA's November 2023 dark patterns guidelines name false urgency.",
          "Going quiet after day five, when the explain stage should begin.",
          "Not telling the support team the launch date and FAQ.",
        ],
      },
      {
        type: "paragraph",
        text: "The CCPA guidelines are summarised in the Department of Consumer Affairs release on dark patterns.",
        links: [{ text: "Department of Consumer Affairs release on dark patterns", href: SRC.ccpaDarkPatterns }],
      },
      { type: "heading", text: "Where creators fit in a launch", id: "creators" },
      {
        type: "paragraph",
        text: "This plan covers your own accounts. Creators add reach and independent voices, but they need product early, a clear brief and disclosure, which our guide on using influencers for a product launch explains. If you run both, schedule creator posts in the explain and prove stages so your own feed is ready to answer the questions they bring. Kudozz plans the creator side through its product launch campaigns.",
        links: [
          { text: "using influencers for a product launch", href: "/blog/influencers-for-product-launch" },
          { text: "product launch campaigns", href: "/services/product-launches" },
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Pick a launch date only after the product page, stock and FAQ are ready, then count back four days for the build-up. Write the 14 one-line post ideas before anyone designs anything. If the explain stage feels thin, the product page probably is too.",
      },
      {
        type: "paragraph",
        text: "For brands that want the organic side planned and produced, a managed social media service such as Kudozz's covers launch calendars, Reels editing from supplied footage, copy and publishing.",
        links: [{ text: "a managed social media service", href: "/services/social-media-management#reels-short-form-video" }],
      },
    ],
    faqs: [
      {
        question: "How long should a product teaser phase last on social media?",
        answer:
          "For most D2C launches, three to five days of build-up is enough. Longer teasers work for brands with a large, engaged following or a genuinely awaited product. For a smaller account, a long mystery phase usually loses people. Make the teasers useful by talking about the problem the product solves rather than hiding what it is.",
      },
      {
        question: "Should we launch on Instagram, our website or a marketplace first?",
        answer:
          "Launch where customers can buy most easily and where you can control the product information. Many D2C brands launch on their own website first, then add marketplaces. Whatever you choose, say clearly in the launch post where the product is available today and where it will arrive later, so comments do not fill with 'is it on Amazon?' questions.",
      },
      {
        question: "Can we share early customer reviews during the launch?",
        answer:
          "Yes, if they are genuine and you have the customer's permission to share them on social media. Do not edit them to change the meaning, and disclose if the customer received the product free. Do not share only the glowing ones while hiding a common problem; fix the problem and say so.",
      },
      {
        question: "What if the launch post gets very little engagement?",
        answer:
          "One quiet post does not mean the launch failed. Check whether people who saw it clicked, visited the product page or asked questions. Then put more effort into the explain stage: demos, comparisons and answers often do better than the reveal itself. Review the full 14 days before drawing conclusions.",
      },
      {
        question: "Do we need paid ads for a product launch?",
        answer:
          "Not always. Organic posts reach existing followers and customers well, which is often where early buyers come from. Paid ads extend reach to new audiences and are a separate job with its own budget and skills. If you run them, use the same claims, price and terms as your organic launch posts.",
      },
    ],
  },

  // 07: small-budget social media for D2C
  {
    slug: "low-budget-social-media-marketing-d2c",
    category: CATEGORY,
    title: "Social Media Marketing for D2C Brands on a Small Budget: Where Should Founders Start?",
    seoTitle: "Low Budget Social Media Marketing for D2C Brands",
    excerpt:
      "A prioritisation guide for D2C founders with little money and less time: what to do now, what to leave for later and what to skip, a small-team weekly routine, and the shortcuts that cost more than they save.",
    metaDescription:
      "Low budget social media marketing for D2C brands: a do now, later or skip table, a small-team weekly routine and the shortcuts founders should avoid.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "8 min read",
    tags: [
      "low budget social media marketing for D2C brands",
      "social media for small D2C brands",
      "D2C founder social media",
      "small team social media routine",
      "social media on a small budget",
    ],
    related: ["social-media-management-d2c-brands", "choose-social-media-platforms-for-business", "low-budget-influencer-marketing-ideas"],
    hero: {
      src: "/blog/brand-guides/low-budget-social-media-marketing-d2c.svg",
      alt: "Prioritisation grid for small-budget D2C social media with three columns, do now, later and skip, and a weekly routine of plan, make, post and review.",
    },
    body: [
      {
        type: "paragraph",
        text: "A founder runs a two-person candle brand from a rented unit. They pack orders in the morning, answer WhatsApp messages at lunch and try to post on Instagram at night, usually after scrolling competitors and feeling behind. They have heard they need Reels every day, a YouTube channel, LinkedIn thought leadership and a giveaway. They have about four hours a week.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "On a small budget, start with one main platform where your customers already are, a clean profile that makes buying easy, three posts a week built from real product use and customer questions, and fast replies to every comment and DM. Leave extra platforms, paid tools and shoots for later. Skip bought followers, engagement pods and fake urgency entirely. Your time is the real budget, so protect it with a weekly routine.",
      },
      { type: "heading", text: "What a small budget can and can't do", id: "what-budget-does" },
      {
        type: "paragraph",
        text: "Organic social media costs time more than money. A small team can build trust, answer questions and give existing customers a reason to come back. It cannot reliably reach large new audiences on demand, which is what paid ads are for. Our guide to organic versus paid social media explains the difference in jobs. For a founder, the practical question is which hours produce the most useful content and the fewest regrets.",
        links: [{ text: "organic versus paid social media", href: "/blog/organic-vs-paid-social-media" }],
      },
      { type: "heading", text: "The prioritisation table: do now, later, skip", id: "prioritisation-table" },
      {
        type: "table",
        headers: ["Activity", "Decision", "Why"],
        rows: [
          ["Profile: clear bio, product link, delivery and returns in Highlights", "Do now", "Every visitor sees it; low effort, lasting value"],
          ["One main platform, posted consistently", "Do now", "Consistency on one beats absence on four"],
          ["Replying to comments and DMs the same day", "Do now", "Questions are often buying signals"],
          ["Product demos shot on a phone", "Do now", "Shows texture, size and use better than polished stills"],
          ["Customer questions turned into posts", "Do now", "Free ideas that match real objections"],
          ["Sharing customer photos with permission", "Do now", "Proof that costs nothing but a request"],
          ["A second platform", "Later", "Add once the first runs without stress"],
          ["Scheduling tool beyond the free native one", "Later", "Native schedulers cover a small calendar"],
          ["Professional photo or video shoot", "Later", "Worth it for hero assets once you know what sells"],
          ["Paid ads", "Later", "Test once the organic content and product page convert"],
          ["Small creator collaborations", "Later", "Useful once the profile can convert their audience"],
          ["Buying followers, likes or views", "Skip", "Breaks platform rules and misleads you about demand"],
          ["Engagement pods and follow-for-follow", "Skip", "Fake signals from people who will never buy"],
          ["Giveaways that only require tags and follows", "Skip", "Attracts prize hunters, not customers"],
          ["Daily trend-chasing unrelated to the product", "Skip", "Uses hours, rarely sells"],
        ],
      },
      { type: "heading", text: "Pick one main platform and one support channel", id: "one-platform" },
      {
        type: "paragraph",
        text: "For many Indian D2C brands, Instagram is the main platform and WhatsApp is the support channel where questions turn into orders. That is not a rule. A home-appliance brand whose buyers research on YouTube, or a stationery brand with a strong Pinterest audience, may choose differently. Our guide to choosing social media platforms by business model walks through the decision.",
        links: [{ text: "choosing social media platforms by business model", href: "/blog/choose-social-media-platforms-for-business" }],
      },
      {
        type: "paragraph",
        text: "If WhatsApp Business is your support channel, set up quick replies for common questions and an away message for out-of-hours. Both are features of the WhatsApp Business app at the time of writing (November 2026).",
      },
      { type: "heading", text: "The small-team weekly routine", id: "weekly-routine" },
      {
        type: "paragraph",
        text: "Four focused hours a week can keep a D2C account healthy if they are planned. Batch the work so you are not deciding what to post every evening. Meta Business Suite lets you schedule Facebook and Instagram posts in advance, which covers most small calendars without a paid tool.",
        links: [{ text: "schedule Facebook and Instagram posts", href: SRC.metaSchedule }],
      },
      {
        type: "template",
        label: "Small-team weekly social media routine (about 4 hours)",
        text: "MONDAY (45 min): Plan\n- Read last week's comments, DMs and WhatsApp questions\n- Pick 3 post ideas: 1 product demo, 1 customer question, 1 behind-the-scenes or customer photo (with permission)\n- Note any stock, offer or delivery news to share\n\nTUESDAY (90 min): Make\n- Film 2 short phone videos in one session (good light, 20 to 40 seconds)\n- Write all 3 captions; check every claim is true\n\nWEDNESDAY (30 min): Schedule\n- Schedule the 3 posts for the week\n- Plan 2 to 3 simple Stories (packing orders, a poll, a restock)\n\nDAILY (10 min, twice): Reply\n- Comments and DMs, morning and evening\n- Move order issues to WhatsApp or email\n\nFRIDAY (30 min): Review\n- What did people save, share or ask about?\n- One line in a notes file: keep, change, drop",
      },
      { type: "subheading", text: "If you only have one hour a week" },
      {
        type: "paragraph",
        text: "Reply to messages every day, post once a week with a product demo or a customer answer, and keep your profile up to date. That is enough to stay credible while the business grows.",
      },
      { type: "heading", text: "Content that costs little and helps people buy", id: "low-cost-content" },
      {
        type: "list",
        items: [
          "Product in use: hands, texture, size next to a familiar object, before and after for function (not for health or body claims).",
          "Answers to questions customers really asked, one per post.",
          "Packing orders and making the product, which shows there are real people behind the brand.",
          "Customer photos and reviews, shared only with permission and never edited to change the meaning.",
          "Founder explaining one decision: a material, a price, a packaging change.",
          "Clear posts on delivery times, returns and payment options, pinned or saved to Highlights.",
        ],
      },
      {
        type: "paragraph",
        text: "Our guide to customer testimonials and UGC covers permission and evidence rules, and the guide on turning Instagram followers into customers covers the path from post to product page.",
        links: [
          { text: "customer testimonials and UGC", href: "/blog/customer-testimonials-ugc" },
          { text: "turning Instagram followers into customers", href: "/blog/instagram-followers-to-customers-d2c" },
        ],
      },
      { type: "heading", text: "Shortcuts to skip", id: "shortcuts-to-skip" },
      {
        type: "paragraph",
        text: "Instagram's Help Centre warns against apps that offer likes and followers: giving them your login can expose your account, Instagram may remove the engagement they generate, and accounts that keep using them may have features limited. Meta's Community Standards on spam also prohibit buying, selling or exchanging engagement such as likes, follows and views. Beyond the rules, fake numbers ruin your own data: you can no longer tell which posts real customers liked.",
        links: [
          { text: "warns against apps that offer likes and followers", href: SRC.igLikeApps },
          { text: "Community Standards on spam", href: SRC.metaSpam },
        ],
      },
      {
        type: "list",
        items: [
          "Do not buy followers, likes, views or comments.",
          "Do not join engagement pods or follow-for-follow groups.",
          "Do not post fake 'only 2 left' or resetting countdowns. The CCPA's November 2023 dark patterns guidelines name false urgency.",
          "Do not ask friends to post reviews of products they have not bought.",
          "Do not delete genuine criticism. Reply and fix the problem.",
        ],
      },
      {
        type: "paragraph",
        text: "The CCPA guidelines are summarised in the Department of Consumer Affairs release on dark patterns.",
        links: [{ text: "Department of Consumer Affairs release on dark patterns", href: SRC.ccpaDarkPatterns }],
      },
      { type: "heading", text: "When to spend the first rupees", id: "first-spend" },
      {
        type: "paragraph",
        text: "Spend money where it saves the most time or removes the biggest weakness. Common first spends are a basic phone light and tripod, a part-time freelancer to edit videos, a one-day shoot for hero product images once you know your bestsellers, and small creator collaborations. Our guide to low-budget influencer marketing ideas covers that last option. When the founder's hours become the bottleneck, compare an in-house hire with outsourcing using our guides to in-house versus outsourced social media and to what drives social media management cost in India.",
        links: [
          { text: "low-budget influencer marketing ideas", href: "/blog/low-budget-influencer-marketing-ideas" },
          { text: "in-house versus outsourced social media", href: "/blog/in-house-vs-outsourced-social-media-management" },
        ],
      },
      { type: "heading", text: "Measuring when you have no analyst", id: "measure" },
      {
        type: "paragraph",
        text: "Track a few things in a spreadsheet each month: orders where the customer said they found you on social, DMs and WhatsApp chats that became orders, website visits from social links tagged with UTM parameters, and the questions people asked. Our guide on measuring whether social media generates sales for a small business sets this up in detail.",
        links: [{ text: "measuring whether social media generates sales for a small business", href: "/blog/measure-social-media-sales-small-business" }],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "This week, fix your profile and reply to every open message. Next week, run the routine once and note how long each step took. Add a second platform, a tool or a freelancer only when the first routine runs without dropping replies.",
      },
      {
        type: "paragraph",
        text: "When the founder can no longer give it those hours, our social media management scope shows what a managed service covers on a monthly basis, so you can compare it with a hire.",
        links: [{ text: "our social media management scope", href: "/services/social-media-management#scope" }],
      },
    ],
    faqs: [
      {
        question: "How often should a small D2C brand post on Instagram?",
        answer:
          "Choose a frequency you can sustain for six months without dropping replies. For many small teams that is two or three feed posts a week plus a few Stories. There is no official ideal number. Consistent, useful posts and fast replies matter more than a daily schedule that collapses after three weeks.",
      },
      {
        question: "Are giveaways worth it for a small brand?",
        answer:
          "Giveaways that only ask people to follow and tag friends usually attract prize hunters who unfollow later. If you run one, make entry depend on something that shows real interest, such as answering a product question, state the terms clearly, pick winners fairly and announce them publicly. Check the platform's current promotion rules before you launch.",
      },
      {
        question: "Should a founder appear on camera?",
        answer:
          "It helps, but it is not required. Founder videos explaining why a product is made a certain way often build trust for lesser-known brands. If you are uncomfortable on camera, show your hands making or packing the product and use voiceover. What matters is that people sense a real, accountable team behind the brand.",
      },
      {
        question: "Can we use AI tools to save time?",
        answer:
          "Yes, for drafting caption options, summarising customer questions or resizing designs. Check every output yourself before publishing, especially product claims, prices and terms. Do not use AI to generate fake customer photos or reviews. Keep the real product and real customers at the centre of what you post.",
      },
      {
        question: "When should a D2C brand hire help for social media?",
        answer:
          "Consider help when replies are slipping, posting has become irregular, or the founder's social hours are taking time from product and operations. A part-time freelancer suits editing or design gaps. A managed service suits brands that need planning, production and publishing handled together. Compare costs with the founder's time, not with zero.",
      },
    ],
  },

  // 08R: stock-outs, delays and price changes
  {
    slug: "d2c-stockouts-delays-social-media",
    category: CATEGORY,
    title: "How D2C Brands Should Communicate Stock-Outs, Delivery Delays and Price Changes on Social Media",
    seoTitle: "Announcing Stock-Outs and Delivery Delays on Social Media",
    excerpt:
      "Copy-ready post and reply templates for D2C stock-outs, delivery delays and price changes, a matrix for what goes in a post, a Story or a DM, and when to stop and escalate, including product recalls.",
    metaDescription:
      "How to announce a stock out or delivery delay on social media: post and reply templates for stock-outs, courier delays and price changes, plus escalation rules.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "9 min read",
    tags: [
      "how to announce stock out or delivery delay on social media",
      "delivery delay message to customers",
      "out of stock announcement post",
      "price increase announcement",
      "D2C customer communication",
    ],
    related: ["social-media-crisis-management-plan", "community-management-vs-customer-support", "influencer-marketing-limited-stock"],
    hero: {
      src: "/blog/brand-guides/d2c-stockouts-delays-social-media.svg",
      alt: "Decision diagram for operational updates on social media: stock-outs, delivery delays and price changes go to a post, Story and reply templates, while recalls and safety issues go to legal escalation.",
    },
    body: [
      {
        type: "paragraph",
        text: "Heavy rain has shut a courier hub for two days. By the evening, a D2C brand has forty DMs asking 'where is my order', three angry comments under an unrelated Reel, and a customer service lead asking the social team whether they should 'post something'. Nobody has agreed what to say, so the comments keep coming.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Announce stock-outs, delivery delays and price changes early, plainly and with what the customer can do next. Use a short post or Story for issues that affect many people, reply to individual comments with a consistent template, and move order-specific details to DMs or support. Say only what you know, give the next update time, and never use fake scarcity. Product recalls or safety issues go to legal before anything is posted.",
      },
      { type: "heading", text: "Three rules for bad-news posts", id: "three-rules" },
      {
        type: "list",
        items: [
          "Early: post as soon as you know the issue affects many customers, before the comments decide the story for you.",
          "Specific: what is affected (products, regions, order dates), why in one line, and when you will update next.",
          "Actionable: what the customer can do, such as wait, switch, cancel, get a refund or join a restock list, with the link or channel.",
        ],
      },
      {
        type: "paragraph",
        text: "Avoid blaming partners by name in public, guessing timelines you cannot keep, or promising compensation nobody has approved. The ASCI Code's expectation that claims be truthful applies to these notices too: if you say 'back in stock on the 20th', make sure that is your genuine best estimate.",
        links: [{ text: "ASCI Code", href: SRC.asciCode }],
      },
      { type: "heading", text: "Where each update goes", id: "channel-matrix" },
      {
        type: "table",
        headers: ["Situation", "Feed post", "Story", "Comment and DM replies", "Escalate to"],
        rows: [
          ["One variant sold out, restock known", "No", "Yes", "Template reply", "Not needed"],
          ["Bestseller out of stock for weeks", "Yes, pinned", "Yes", "Template reply", "Product or ops lead for dates"],
          ["Regional courier delay, 1 to 3 days", "Optional", "Yes", "Template reply, details in DM", "Logistics lead"],
          ["Festive volume delay across orders", "Yes", "Yes, daily", "Template reply", "Logistics and support leads"],
          ["Price increase", "Yes, for core products", "Optional", "Template reply", "Founder or finance for reason"],
          ["Wrong price shown on site or post", "Correction post if widely seen", "Yes", "Template reply", "Founder, finance, legal"],
          ["Safety issue or recall", "Only legal-approved text", "Only legal-approved text", "Holding reply only", "Legal, founder, crisis plan"],
        ],
      },
      { type: "heading", text: "Stock-outs", id: "stock-outs" },
      {
        type: "paragraph",
        text: "A stock-out can be good news (it sold) or a frustration (you cannot get it). Be honest about which products and for how long. Do not call a restock 'limited' or a 'final drop' if it is not. The CCPA's November 2023 Guidelines for Prevention and Regulation of Dark Patterns name false urgency as a dark pattern. If creators are promoting the product, tell them the same day; our guide to influencer marketing with limited stock covers that side.",
        links: [
          { text: "Guidelines for Prevention and Regulation of Dark Patterns", href: SRC.ccpaDarkPatterns },
          { text: "influencer marketing with limited stock", href: "/blog/influencer-marketing-limited-stock" },
        ],
      },
      {
        type: "template",
        label: "Stock-out post or Story",
        text: "[Product name] is out of stock.\n\nWe sold through faster than planned. We expect the next batch around [date or week], and we'll update this post if that changes.\n\nWhat you can do:\n- Get a restock alert: [link or 'reply RESTOCK' / WhatsApp opt-in]\n- Similar option in stock: [product, only if it genuinely suits the same need]\n- Orders already placed are not affected.\n\nThank you for your patience.",
      },
      {
        type: "template",
        label: "Reply to 'when is it back?' comments",
        text: "Hi [name], it's out of stock right now. We expect it back around [date or week] and will post as soon as it's live. You can get an alert here: [link]. Sorry for the wait.",
      },
      {
        type: "template",
        label: "Restock post",
        text: "[Product name] is back in stock: [link].\n\nThank you to everyone who waited. Restock quantity: [only state if accurate]. If you joined the alert list, you should already have a message from us.",
      },
      { type: "heading", text: "Delivery delays", id: "delivery-delays" },
      {
        type: "paragraph",
        text: "Delays come from courier backlogs, weather, festive volume, regional disruptions or your own warehouse. Customers mostly want to know whether their order is affected and what to do. Post when the delay touches many orders, and give the next update time even if nothing changes.",
      },
      {
        type: "template",
        label: "Delivery delay post (weather, courier or festive volume)",
        text: "Delivery update, [date]\n\nOrders placed between [date] and [date] to [regions / pin codes or 'all regions'] are taking [X to Y] extra days because of [heavy rain in X / a courier backlog / festive order volume].\n\nYour order is safe and will ship in the order it was placed. Tracking links will update as parcels move.\n\nIf you need to cancel, or your order is for a fixed date, message us at [channel] with your order number and we'll tell you what's possible.\n\nNext update: [date and time], even if nothing changes.",
      },
      {
        type: "template",
        label: "Reply to 'where is my order?' in comments",
        text: "Hi [name], sorry for the wait. Some deliveries to [region] are delayed by [reason]. Please DM us your order number (not here in the comments) and we'll check its status for you.",
      },
      {
        type: "template",
        label: "DM follow-up once you have checked the order",
        text: "Thanks, [name]. Order [number] left our warehouse on [date] and is with [courier] at [hub / status]. Current estimate: [date]. If it hasn't arrived by [date], reply here and we'll [agreed option: reship / refund / escalate]. Sorry again for the delay.",
      },
      { type: "heading", text: "Price changes", id: "price-changes" },
      {
        type: "paragraph",
        text: "Price increases on core products deserve a short, honest note before they take effect. Give the date, which products, and a one-line reason only if it is true and you are comfortable stating it (for example, a change in materials or packaging). Do not hide extra charges until checkout; drip pricing is one of the practices named in the CCPA guidelines. If a post or the site showed a wrong price, correct it publicly and agree with the founder and legal how orders placed at that price will be handled.",
      },
      {
        type: "template",
        label: "Price change post",
        text: "A note on prices\n\nFrom [date], the price of [products] will change from [old price] to [new price] (MRP inclusive of taxes).\n\nWhy: [one honest line, e.g. 'our glass jar supplier's costs have gone up'].\n\nOrders placed before [date and time] will be charged the current price. Nothing else about the product is changing.\n\nQuestions? Comment or DM us.",
      },
      {
        type: "template",
        label: "Reply to 'why is it more expensive now?'",
        text: "Hi [name], fair question. We raised the price from [date] because [same reason as the post]. The product itself hasn't changed. We've explained more here: [link to post].",
      },
      {
        type: "template",
        label: "Wrong price correction (only after founder and legal agree the handling)",
        text: "Correction: our post on [date] showed [product] at [wrong price]. The correct price is [price]. Orders placed at the incorrect price between [time] and [time] will be [agreed handling]. We're sorry for the confusion.",
      },
      { type: "heading", text: "Recalls and safety issues: stop and escalate", id: "recalls" },
      {
        type: "paragraph",
        text: "If a product may be unsafe, contaminated, mislabelled or subject to a recall, the social team should not write the message on its own. Hold scheduled promotions for that product, tell the founder and legal immediately, and post only text approved by legal. Recalls can carry legal obligations, and the wording, scope and refund process need specialist advice. Our social media crisis management plan covers severity levels, holding statements and roles. A social media agency does not replace legal or PR advice in these situations.",
        links: [{ text: "social media crisis management plan", href: "/blog/social-media-crisis-management-plan" }],
      },
      {
        type: "template",
        label: "Holding reply (use only if legal has approved it)",
        text: "Thank you for raising this. We're looking into it urgently and will share an update on [channel] by [time]. If you have this product, please [legal-approved instruction]. For your order, please contact [channel] with your order number.",
      },
      { type: "heading", text: "Replying in comments without making it worse", id: "comment-replies" },
      {
        type: "list",
        items: [
          "Reply to the first few public comments with the template, then link to the pinned post so later readers see the answer.",
          "Never ask for order numbers, phone numbers or addresses in public comments.",
          "Do not delete genuine complaints or hide them because they are inconvenient. Remove only spam, abuse or posts sharing personal data.",
          "If one customer's problem needs refunds or investigation, hand it to support with notes; the line between community and support is set out in our guide on community management vs customer support.",
          "Close the loop publicly when the issue is resolved: 'Deliveries to Chennai are back to normal from today.'",
        ],
      },
      {
        type: "paragraph",
        text: "The guide on community management vs customer support explains who owns which conversation and how escalation works.",
        links: [{ text: "community management vs customer support", href: "/blog/community-management-vs-customer-support" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Waiting for the problem to fix itself while comments pile up.",
          "Continuing scheduled promotions for a product that is out of stock or delayed.",
          "Vague notices with no regions, dates or next update.",
          "Turning a restock into fake scarcity.",
          "Raising prices silently and letting customers find out at checkout.",
          "Different answers from the social team, support and the founder's personal account.",
          "Drafting recall or safety messages without legal review.",
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Copy these templates into a shared document today, fill in the fixed parts (channels, refund options, who approves what) and agree them with logistics, support and the founder. When the next delay arrives, you will be editing a few brackets rather than writing under pressure. For festive weeks, plan these notices alongside the festive sale social media plan.",
        links: [{ text: "festive sale social media plan", href: "/blog/d2c-festive-sale-social-media-plan" }],
      },
      {
        type: "paragraph",
        text: "What an agency like Kudozz includes in social media management is posting these updates and handling community replies within an agreed scope; customer support and crisis communication are scoped separately.",
        links: [{ text: "What an agency like Kudozz includes", href: "/services/social-media-management#community-management" }],
      },
    ],
    faqs: [
      {
        question: "Should we announce a stock-out publicly or just reply to people who ask?",
        answer:
          "If one variant is briefly out and you know the restock date, a Story and replies are usually enough. If a bestseller is out for weeks, or many people are asking, a pinned post saves everyone time and shows you are not hiding it. Remove or update the post when stock returns.",
      },
      {
        question: "Is it fine to blame the courier company for a delay?",
        answer:
          "Explain the cause briefly and factually, such as 'a backlog at our courier partner's hub', without naming or blaming anyone publicly. Customers bought from you, so they expect you to own the problem and fix it. Naming partners in public can also create disputes your team then has to manage.",
      },
      {
        question: "How often should we post updates during a long delivery delay?",
        answer:
          "Give a next-update time in every notice and keep it, even if the update is 'no change yet'. For festive volume or weather delays, a daily Story is often enough, with the pinned post edited as facts change. Silence after a first notice usually brings more DMs than the delay itself.",
      },
      {
        question: "Do we have to explain why we are raising prices?",
        answer:
          "You are not obliged to give a reason on social media, but an honest one-line explanation usually reduces anger. Do not invent a reason or overstate it. What matters most is announcing the change before it applies, stating which products are affected, and keeping the price shown on social consistent with checkout.",
      },
      {
        question: "Can we delete angry comments about a delay?",
        answer:
          "Do not delete genuine complaints. Reply with the template, move order details to DMs and close the loop when it is fixed. Deleting criticism tends to be noticed and makes the problem look bigger. Remove comments only when they are spam, abusive, or expose someone's personal information.",
      },
    ],
  },
];
