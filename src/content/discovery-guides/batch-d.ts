import type { BlogPost } from "@/content/blog";

export const discoveryBatchD: BlogPost[] = [
  {
    slug: "how-to-find-ugc-creators",
    category: "UGC Marketing",
    title: "How to Find UGC Creators for Your Brand",
    seoTitle: "How to Find UGC Creators for Your Brand | Kudozz",
    excerpt:
      "UGC creators are hired for their footage, not their followers. Where to find them in India, what to ask for before you book, and how to run a paid test brief that shows who can actually deliver.",
    metaDescription:
      "Where to find UGC creators in India, what to ask for (portfolio, raw footage, usage rights, whitelisting) and how to run a paid test brief before you scale.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-09-11",
    updatedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "8 min read",
    tags: ["UGC Creators", "Creator Discovery", "UGC Marketing", "India"],
    related: ["ugc-agency-vs-direct-creators", "ugc-content-usage-rights", "how-to-find-micro-influencers", "ugc-creator-portfolio"],
    hero: {
      src: "/blog/discovery/how-to-find-ugc-creators.svg",
      alt: "Diagram comparing what brands judge in UGC creators versus influencers, and a four-step path from sourcing to a paid test brief",
    },
    discoveryCta: {
      body: "Some of the best UGC creators are already posting on Instagram to small, real audiences. Use Kudozz Discovery to search Instagram creators in India by niche, city, language and follower band, save the ones whose videos look right into a list, then brief them for a paid test.",
    },
    body: [
      {
        type: "paragraph",
        text: "The most common mistake brands make when they go looking for UGC creators is sorting by follower count. It is a habit carried over from influencer marketing, and it filters out a large share of the people you actually want: creators with a few hundred or a few thousand followers who shoot clean, believable product videos and are happy to hand you the files.",
      },
      {
        type: "paragraph",
        text: "This guide covers how UGC creators differ from influencers, where to find them in India, what to ask for before you book anyone, and how to use a small paid test brief to separate creators who look good on a grid from creators who deliver usable footage on deadline.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Find UGC creators among your own customers, on Instagram (searching for video style rather than reach), in creator communities, on UGC platforms and through agencies with tested rosters. Judge them on portfolio quality, raw footage, reliability and how well they match your customer. Agree usage rights and any whitelisting in writing, then commission a paid test from three to five shortlisted creators before you commit to a larger batch.",
      },
      { type: "heading", text: "UGC creators vs influencers: what you are actually hiring", id: "ugc-creators-vs-influencers" },
      {
        type: "paragraph",
        text: "An influencer is paid largely for distribution: their post reaches an audience that trusts them. A UGC creator is paid for content and rights: they make videos and photos in the style of a genuine customer, and your brand publishes them on its own channels, product pages and ads. The same person can do both, but the brief, contract and fee logic differ. For the full decision, see our comparison of UGC creators and influencers.",
        links: [{ text: "comparison of UGC creators and influencers", href: "/blog/ugc-vs-influencer-content-whats-the-difference" }],
      },
      {
        type: "table",
        headers: ["What you judge", "Influencer", "UGC creator"],
        rows: [
          ["Following", "Central to the fee and the outcome", "Often irrelevant; many good UGC creators have small accounts"],
          ["Where content runs", "Creator's own profile", "Brand's ads, website, marketplace listings, emails"],
          ["Main deliverable", "A published post or Reel", "Edited files, often with raw footage and hook variations"],
          ["What drives the fee", "Reach, engagement, niche demand", "Number of assets, complexity, usage rights"],
          ["Key risk", "Audience doesn't match your customer", "Footage looks staged or isn't usable in ads"],
        ],
      },
      {
        type: "paragraph",
        text: "That last row is why discovery works differently. You are not checking whether a creator's audience will buy. You are checking whether a stranger scrolling past your ad would believe this person uses the product.",
      },
      { type: "heading", text: "Where to find UGC creators in India", id: "where-to-find-ugc-creators" },
      { type: "subheading", text: "1. Your own customers and reviewers" },
      {
        type: "paragraph",
        text: "Start with people who already bought. Look at tagged posts, product reviews with photos, customers who reply to your stories, and anyone who has sent an unsolicited unboxing video. Say a Bengaluru skincare brand notices a customer who keeps posting honest, well-lit morning routines with its cleanser in frame. That person needs no convincing about the product, and their content already has the texture of real use. Approach them politely, offer a paid brief, and be clear about how the footage will be used.",
      },
      { type: "subheading", text: "2. Instagram, searched for style rather than reach" },
      {
        type: "paragraph",
        text: "Instagram is where a large share of Indian creators already shoot vertical video. Search by niche and city, then open Reels rather than the grid: you want to hear the audio, see how they hold a product and judge whether the first two seconds would stop a scroll. Accounts in the smallest follower bands are worth a look precisely because they are often overlooked. Our guide on finding micro-influencers covers small-account search in more depth.",
        links: [{ text: "finding micro-influencers", href: "/blog/how-to-find-micro-influencers" }],
      },
      {
        type: "paragraph",
        text: "A creator discovery tool helps here, with one caveat. Kudozz Discovery, for example, lets you filter Indian Instagram creators by niche, city, language, gender and follower band (including Under 1K and 1K–3K), then save promising profiles to a list. It is not a UGC marketplace: it shows creators who post on Instagram, not people who have signed up to sell UGC. You still need to watch their videos and ask whether they take UGC briefs.",
      },
      { type: "subheading", text: "3. Creator communities" },
      {
        type: "paragraph",
        text: "UGC creators in India share work, rates and leads in WhatsApp groups, Telegram channels, Discord servers and LinkedIn posts. Some of these accept brand posts asking for portfolios. Responses can be high in volume and uneven in quality, so ask for a specific format (two links and a raw clip) to make screening manageable.",
      },
      { type: "subheading", text: "4. UGC platforms and marketplaces" },
      {
        type: "paragraph",
        text: "Dedicated UGC platforms let creators sign up specifically to make brand content, often with set packages. They are convenient for volume but can produce footage that looks like everyone else's on the same platform. Check whether you can talk to the creator directly before the brief and who owns the rights.",
      },
      { type: "subheading", text: "5. Agencies with tested rosters" },
      {
        type: "paragraph",
        text: "An agency has already done the screening and test rounds and can run several creators at once. You pay for that time saved. If you'd rather hand the sourcing, briefing and quality control off, Kudozz runs UGC campaigns for brands that need volume, multiple languages or a steady monthly supply. The trade-offs are laid out in UGC agency vs hiring creators directly.",
        links: [
          { text: "Kudozz runs UGC campaigns", href: "/services/ugc-campaigns" },
          { text: "UGC agency vs hiring creators directly", href: "/blog/ugc-agency-vs-direct-creators" },
        ],
      },
      {
        type: "table",
        headers: ["Source", "Best for", "Watch out for"],
        rows: [
          ["Your customers", "Authentic testimonials, repeat-use content", "Inconsistent production quality; needs gentle briefing"],
          ["Instagram search", "Matching niche, city and language", "Not every creator takes UGC work; check before briefing"],
          ["Creator communities", "Fast responses, many portfolios", "Screening load; portfolios that include others' work"],
          ["UGC platforms", "Volume, fixed packages", "Look-alike footage; unclear rights terms"],
          ["Agencies", "Scale, multiple creators, quality control", "Higher cost per asset; less direct contact"],
        ],
      },
      {
        type: "discovery-cta",
        headline: "Find small Instagram creators who already shoot well",
        body: "Kudozz Discovery lets you filter Indian Instagram creators by niche, city, language and follower band, including accounts under 1K, and save the ones worth a UGC test brief into a named list.",
        ctaLabel: "Search creators in Kudozz Discovery",
      },
      { type: "heading", text: "What to ask for before you book", id: "what-to-ask-for" },
      {
        type: "paragraph",
        text: "A UGC creator's Instagram profile tells you very little about their brand work, because the best of it lives in other people's ads. Ask for four things.",
      },
      { type: "subheading", text: "A portfolio with context" },
      {
        type: "paragraph",
        text: "Ask which pieces were paid brand work and which were self-made samples, and whether they shot, edited and voiced each piece themselves. Samples show skill; paid work shows they can follow a brief. What a strong portfolio looks like from the creator's side is covered in building a UGC creator portfolio.",
        links: [{ text: "building a UGC creator portfolio", href: "/blog/ugc-creator-portfolio" }],
      },
      { type: "subheading", text: "Raw footage" },
      {
        type: "paragraph",
        text: "Request one raw clip next to its final edit. Raw footage reveals audio quality, lighting and how much of the polish came from an editor. It also matters later: if raw files are part of the deliverable, your own team can re-cut hooks and lengths for different placements.",
      },
      { type: "subheading", text: "Usage rights" },
      {
        type: "paragraph",
        text: "Agree where the content can run (paid social, website, marketplace listings, email, offline), for how long and in which territories, before anyone shoots. Experienced creators price extended or perpetual usage separately. Our guide to UGC content usage rights explains the common structures.",
        links: [{ text: "UGC content usage rights", href: "/blog/ugc-content-usage-rights" }],
      },
      { type: "subheading", text: "Whitelisting" },
      {
        type: "paragraph",
        text: "If you want to run ads from the creator's own handle (often called whitelisting or partnership ads), that is a separate permission with its own fee, duration and approval process. Ask up front whether they offer it, since some UGC creators don't want ads on their personal account. More on this in UGC whitelisting and creator licensing.",
        links: [{ text: "UGC whitelisting and creator licensing", href: "/blog/ugc-whitelisting-creator-licensing" }],
      },
      {
        type: "template",
        label: "First message to a shortlisted UGC creator",
        text: "Hi [Name], I'm [Your name] from [Brand], a [category] brand based in [city].\n\nWe liked your [specific Reel or video] and are looking for creators to make UGC videos for our ads and product pages.\n\nBefore we brief anyone, could you share:\n1. Two or three brand pieces you shot and edited yourself\n2. One raw clip with its final edit\n3. Your rate for a paid test (1 video, 20 to 30 seconds, 2 hook variations)\n4. Your usual terms for usage rights, and whether you offer whitelisting\n\nThis would be a paid test first, with a larger batch for creators it works with. Thanks!",
      },
      { type: "heading", text: "Run a paid test brief before you scale", id: "test-briefs" },
      {
        type: "paragraph",
        text: "A portfolio shows what a creator made for someone else. A test shows what they make for you, on your product, under your constraints. Commission the same small brief from three to five creators and compare the results side by side.",
      },
      {
        type: "list",
        items: [
          "Keep it small: one video of 20 to 30 seconds with two or three alternative opening hooks.",
          "Brief it like the real job, with approved claims, must-show product moments, aspect ratio and a delivery date.",
          "Pay for it. Unpaid tests attract the least experienced creators and waste the time of the best ones.",
          "Ship the product early and confirm it arrived before the clock starts.",
          "Agree in advance that test content can be used under the same rights terms as the full job, or that it is for evaluation only.",
        ],
      },
      {
        type: "paragraph",
        text: "Use a consistent brief so you are comparing creators, not briefs. Our UGC brief template gives a ready structure, and once you have tested creators you'll want a way to compare cuts in-market, which UGC paid social testing covers.",
        links: [
          { text: "UGC brief template", href: "/blog/ugc-brief-template" },
          { text: "UGC paid social testing", href: "/blog/ugc-paid-social-testing" },
        ],
      },
      {
        type: "table",
        headers: ["Test criterion", "What good looks like"],
        rows: [
          ["Opening seconds", "Hooks that are genuinely different, not the same line reworded"],
          ["Audio", "Clear voice with no echo, fan hum or traffic"],
          ["Product handling", "Natural use, label visible when needed, no awkward posing"],
          ["Brief adherence", "All must-show moments and approved claims, nothing invented"],
          ["Believability", "Looks like a real customer in a real home, office or bathroom"],
          ["Process", "On-time delivery, clear communication, sensible questions before shooting"],
        ],
      },
      {
        type: "paragraph",
        text: "Creators who score well become your roster. Re-brief them for the next batch rather than sourcing from scratch, and keep one or two new test slots each round so the roster doesn't go stale. If production volume is the bottleneck rather than sourcing, our UGC content production team can take on the shoots.",
        links: [{ text: "UGC content production team", href: "/services/ugc-content-production" }],
      },
      { type: "heading", text: "Common mistakes when finding UGC creators", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Filtering by follower count and missing small creators who shoot better content.",
          "Booking from a polished grid without asking for raw footage or a clear account of who edited what.",
          "Leaving usage rights and whitelisting to be sorted out after delivery.",
          "Running one test with one creator and treating the result as a verdict on UGC as a format.",
          "Choosing creators who look nothing like your customer, so the content reads as an ad from the first frame.",
          "Asking for free test videos, which filters for inexperience.",
          "Writing a vague brief (\"a few fun videos\") and then rejecting work that followed it.",
        ],
      },
      { type: "heading", text: "Bringing it together", id: "conclusion" },
      {
        type: "paragraph",
        text: "Finding UGC creators is closer to hiring a freelance videographer than booking an influencer. Cast a wide net across customers, Instagram, communities, platforms and agencies; judge on footage, not followers; settle rights and whitelisting before the shoot; and let a paid test decide who earns a bigger batch. Do that a couple of times and you'll have a small, reliable roster that makes the next brief much faster. For pricing context before you set budgets, see what UGC content costs in India.",
        links: [{ text: "what UGC content costs in India", href: "/blog/ugc-content-cost-india" }],
      },
    ],
    faqs: [
      {
        question: "Do UGC creators need a big following?",
        answer:
          "No. Because the brand publishes the content on its own channels and ads, the creator's audience size matters far less than their camera presence, audio, lighting and believability. Many strong UGC creators have small or private accounts.",
      },
      {
        question: "Can an influencer also make UGC for my brand?",
        answer:
          "Yes, and many do. Just separate the two deliverables in the agreement: a post to their audience is priced on reach, while UGC files for your ads are priced on assets and usage rights. Mixing them in one vague fee causes disputes later.",
      },
      {
        question: "Should I ask for raw footage every time?",
        answer:
          "It is worth asking during screening, because it shows the creator's real audio and lighting. Whether raw files are part of the final deliverable is a commercial choice; they cost more but let your team re-edit hooks and lengths without a new shoot.",
      },
      {
        question: "How many creators should be in a UGC test round?",
        answer:
          "Three to five is a practical range for most brands: enough to compare styles side by side, small enough to brief and review properly. Treat this as a rule of thumb and adjust to your budget and how many angles you need to test.",
      },
      {
        question: "Do UGC videos need an ad disclosure?",
        answer:
          "When content runs as a paid ad from your brand account, the ad itself is clearly the brand's. If it runs from the creator's handle or is posted to their own profile, it is a paid collaboration and should carry a clear disclosure label such as #ad or the platform's paid partnership tag.",
      },
    ],
  },
  {
    slug: "influencer-discovery-for-d2c-brands",
    category: "Influencer Marketing",
    title: "How D2C Brands Can Find the Right Influencers to Promote Their Products",
    seoTitle: "How D2C Brands Can Find the Right Influencers | Kudozz",
    excerpt:
      "For a D2C brand, the right influencer is the one whose audience can afford the product, can buy it where you sell it, and will come back for more. A discovery framework built around those three questions.",
    metaDescription:
      "How D2C brands can find influencers who drive sales: product fit, price vs audience, conversion intent, marketplace vs website, codes and repeat purchase.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "8 min read",
    tags: ["Creator Discovery", "D2C", "Influencer Marketing", "India"],
    related: ["instagram-creator-marketing-d2c-brands", "d2c-influencer-marketing-funnel-india", "influencer-shortlist", "track-influencer-sales"],
    hero: {
      src: "/blog/discovery/influencer-discovery-for-d2c-brands.svg",
      alt: "Diagram of four D2C discovery filters stacked as a sieve: product fit, price match, conversion signals and where you sell, narrowing a long list to a shortlist",
    },
    discoveryCta: {
      headline: "Build a D2C Shortlist That Can Actually Sell",
      body: "Start with the creators who fit your category, city and language. Kudozz Discovery lets you search Instagram creators in India by niche, location and engagement, sort by average views, and save each campaign's candidates into its own list.",
    },
    body: [
      {
        type: "paragraph",
        text: "Say a Pune protein-snack brand books ten Instagram creators with strong engagement for a launch. The Reels do well. Sales barely move. When the team looks closer, half the creators have audiences of college students who love the content but won't pay ₹600 for a box of bars, and two of them post mostly from Delhi, where the brand's quick-commerce listings aren't live yet. Nothing was wrong with the creators. The discovery brief was wrong.",
      },
      {
        type: "paragraph",
        text: "D2C brands live and die on unit economics, so creator discovery has to answer commercial questions that awareness campaigns can skip. This guide is about those questions. For the broader channel strategy, see our playbook on Instagram creator marketing for D2C brands; if you're weighing whether to hire help, read about choosing an influencer marketing agency for D2C brands.",
        links: [
          { text: "Instagram creator marketing for D2C brands", href: "/blog/instagram-creator-marketing-d2c-brands" },
          { text: "choosing an influencer marketing agency for D2C brands", href: "/blog/influencer-marketing-agency-d2c-brands" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "D2C brands should find influencers by working backwards from the sale: start with creators whose content naturally features your product category, check that their audience can afford your price point, look for signs their followers act on recommendations, match them to the places your product is actually sold, and favour creators who can show repeat use if your product is a repeat purchase. Reach and engagement come after these filters, not before.",
      },
      { type: "heading", text: "Start from the product, not the platform", id: "product-category-fit" },
      {
        type: "paragraph",
        text: "Different D2C products ask different things of a creator. A ₹299 lip tint is an impulse buy that one Reel can sell. A ₹14,000 air purifier is a considered purchase that needs a creator people trust for detail. Before searching, write down which of these your product is closest to.",
      },
      {
        type: "table",
        headers: ["Product type", "Example", "Creator you need", "Discovery signal to look for"],
        rows: [
          ["Impulse, low price", "Snacks, lip tints, phone accessories", "High-frequency posters with an engaged, broad audience", "Strong average views; content that already features small buys"],
          ["Considered, higher price", "Appliances, mattresses, premium skincare", "Trusted reviewers who explain and compare", "Long captions, detailed comments, past honest reviews"],
          ["Demonstrative", "Kitchen tools, haircare devices, fitness gear", "Creators who show use on camera", "Tutorial and routine formats in their recent posts"],
          ["Repeat purchase", "Coffee, supplements, pet food, skincare", "Creators who can show ongoing use", "Same products appearing across months of posts"],
          ["Identity-led", "Handloom, sustainable fashion, regional foods", "Creators whose values match the brand story", "Consistent themes; audience conversations about provenance"],
        ],
      },
      {
        type: "paragraph",
        text: "If you're unsure which SKU to lead with, choosing which products to promote with influencers walks through that decision before discovery starts.",
        links: [{ text: "choosing which products to promote with influencers", href: "/blog/which-products-to-promote-with-influencers" }],
      },
      { type: "heading", text: "Match your price point to the creator's audience", id: "price-point-fit" },
      {
        type: "paragraph",
        text: "Price mismatch is the quiet killer of D2C creator campaigns. Public profile data won't tell you audience income, so read the signals instead and confirm with the creator.",
      },
      {
        type: "list",
        items: [
          "What other brands do they feature? A creator who regularly promotes ₹199 marketplace finds and one who styles premium labels serve different wallets.",
          "What do comments ask? \"Price?\" and \"Any dupe?\" under every post suggests a price-sensitive audience; \"Where can I buy this?\" suggests intent at a range of prices.",
          "How do they live on camera? Home, travel, eating out and the products in frame are rough cues, not proof.",
          "Ask for audience insights screenshots (age, top cities, gender split) from their Instagram professional dashboard. Most working creators share these on request.",
        ],
      },
      {
        type: "paragraph",
        text: "Price fit doesn't mean only premium creators for premium products. A mid-tier creator whose audience aspires to your product can work well for a launch offer. It means you've thought about it rather than discovered it in the sales report.",
      },
      { type: "heading", text: "Look for conversion intent, not just engagement", id: "conversion-intent" },
      {
        type: "paragraph",
        text: "Engagement rate tells you people react. For D2C, you want evidence that people act. Signals worth noting on a shortlist:",
      },
      {
        type: "list",
        items: [
          "Comments asking for links, sizes, shades or delivery details, and creators who answer them.",
          "Saved-style content: routines, comparisons, \"what I bought\" lists and how-tos that people return to.",
          "Past discount codes or affiliate links the creator still mentions, which suggests their audience is used to buying through them.",
          "Story highlights for product recommendations or a link-in-bio page that is kept up to date.",
          "A modest following with consistent views, rather than one viral Reel inflating the average.",
        ],
      },
      {
        type: "paragraph",
        text: "None of this is a guarantee, and engagement figures from any source are signals, not proof of audience quality. They help you rank who to look at first. For how creators fit across awareness, consideration and conversion stages, see the D2C influencer marketing funnel.",
        links: [{ text: "D2C influencer marketing funnel", href: "/blog/d2c-influencer-marketing-funnel-india" }],
      },
      { type: "heading", text: "Match creators to where you sell", id: "marketplace-vs-website" },
      {
        type: "paragraph",
        text: "A creator who sends followers to your website, one who points them to Amazon, Flipkart, Nykaa or Myntra, and one whose audience orders on Blinkit or Zepto are doing different jobs. Decide where you want the click to land and look for creators whose audience already shops there.",
      },
      {
        type: "table",
        headers: ["Where you sell", "Creator fit", "What to check during discovery"],
        rows: [
          ["Own website", "Creators comfortable driving to a link or code", "Link-in-bio habits; past code campaigns"],
          ["Marketplaces", "Creators who already say \"available on Amazon\" or share marketplace links", "Whether their audience trusts marketplace buying in your category"],
          ["Quick commerce", "Creators in cities where you're actually listed", "City and state of the creator; local language"],
          ["Offline or modern trade", "Local creators near your stores", "City-level presence; content shot in local settings"],
        ],
      },
      {
        type: "paragraph",
        text: "Location matters more than many D2C teams expect: there is no point paying a Kolkata creator to push a product that isn't deliverable in Kolkata yet. How each destination changes measurement is covered in influencer traffic to website, marketplace and quick commerce.",
        links: [{ text: "influencer traffic to website, marketplace and quick commerce", href: "/blog/influencer-traffic-website-marketplace-quick-commerce" }],
      },
      {
        type: "discovery-cta",
        headline: "Filter for creators where your product is actually sold",
        body: "In Kudozz Discovery you can narrow Indian Instagram creators by niche, state, city and language, sort by average views or engagement, and save each campaign's candidates into its own list before checking price and audience fit.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Plan codes and links before you pick creators", id: "codes-and-links" },
      {
        type: "paragraph",
        text: "Your tracking setup changes who you should shortlist. If you'll judge creators on code redemptions, you need creators willing to say a code clearly on camera and repeat it in Stories. If you'll use UTM links, you need creators who use link stickers and keep their bio link current. Ask about both in the first conversation, and give each creator a unique code and link so results can be attributed later. Our guide to tracking influencer sales explains the setup.",
        links: [{ text: "tracking influencer sales", href: "/blog/track-influencer-sales" }],
      },
      {
        type: "paragraph",
        text: "If you plan to pay on commission rather than a flat fee, discovery shifts again towards creators who already run affiliate links and understand the model. That approach is covered in how to set up an influencer affiliate program, and Kudozz runs influencer affiliate marketing for brands that want it managed.",
        links: [
          { text: "how to set up an influencer affiliate program", href: "/blog/influencer-affiliate-program" },
          { text: "influencer affiliate marketing", href: "/services/influencer-affiliate-marketing" },
        ],
      },
      { type: "heading", text: "Repeat-purchase categories need different creators", id: "repeat-purchase" },
      {
        type: "paragraph",
        text: "For coffee, supplements, pet food, skincare and household refills, the first order is only part of the value. Look for creators who can credibly show the product over weeks: a morning-coffee routine, a dog's feeding bowl, a monthly restock video. One Reel from a creator who never mentions the product again tells their audience it was a one-off. Several months of natural mentions from a smaller creator often builds more trust.",
      },
      {
        type: "paragraph",
        text: "In practice that means shortlisting for consistency (regular posting, a stable niche, a lifestyle your product fits into every week) and planning longer arrangements with the creators who work, rather than a fresh cast every campaign.",
      },
      { type: "heading", text: "Think in rosters, not one-off bookings", id: "roster-economics" },
      {
        type: "paragraph",
        text: "D2C creator spend is rarely about one perfect creator. It's about a roster whose combined cost makes sense against the orders and repeat customers it brings. You don't need industry benchmarks to plan this; you need your own numbers.",
      },
      {
        type: "table",
        headers: ["Roster shape", "Strengths", "Trade-offs"],
        rows: [
          ["A few larger creators", "Fast reach; simpler to manage", "Each miss is expensive; harder to learn what worked"],
          ["Many smaller creators", "More tests, more content, more cities covered", "More briefing, shipping and follow-up time"],
          ["Mixed tiers", "Reach for launch, depth for conversion", "Needs clear roles per tier in the brief"],
          ["Long-term ambassadors", "Repeat mentions suit repeat purchases", "Needs early proof that the creator converts"],
        ],
      },
      {
        type: "template",
        label: "Roster economics worksheet (fill in your own numbers)",
        text: "Per creator\n  Fee (or expected commission):          ₹______\n  Product + shipping cost:                ₹______\n  Team time (hours x internal rate):      ₹______\n  Total cost per creator:                 ₹______\n\nYour unit economics\n  Contribution margin per first order:    ₹______\n  Expected repeat orders per customer:    ______\n  Margin per repeat order:                ₹______\n\nBreak-even orders per creator\n  = Total cost per creator / (first-order margin + expected repeat margin)\n\nCompare: does this creator's likely reach, location and audience fit make that order count plausible?",
      },
      {
        type: "paragraph",
        text: "Hidden costs matter: product seeding, reshoots, the hours your team spends chasing drafts. If gifting is a big part of your plan, influencer seeding and gifting covers how to structure it at scale. For more small-creator options at lower cost, see how to find micro-influencers.",
        links: [
          { text: "influencer seeding and gifting", href: "/services/influencer-seeding-gifting" },
          { text: "how to find micro-influencers", href: "/blog/how-to-find-micro-influencers" },
        ],
      },
      { type: "heading", text: "A D2C discovery workflow", id: "d2c-discovery-workflow" },
      {
        type: "list",
        items: [
          "Write a one-page brief: product type, price, where it's sold, target cities and languages, and the KPI (orders, codes, first purchases).",
          "Search by niche, then filter by location and language to match where you deliver.",
          "Sort by average views or engagement to decide review order, not to decide the shortlist.",
          "Review the last 20 to 30 posts for category fit, price signals and conversion intent.",
          "Ask shortlisted creators for audience insights screenshots, rates and willingness to use codes or links.",
          "Run a test wave, compare cost per order with your worksheet, and rebook the creators who earned it.",
        ],
      },
      {
        type: "paragraph",
        text: "The shortlist step itself is broken down in our guide to influencer shortlisting.",
        links: [{ text: "influencer shortlisting", href: "/blog/influencer-shortlist" }],
      },
      { type: "heading", text: "Common mistakes D2C brands make", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Shortlisting on engagement rate before checking category, price and location fit.",
          "Booking creators in cities where the product isn't deliverable or listed yet.",
          "Sending everyone to the website when the audience buys this category on marketplaces.",
          "Launching without unique codes or links, then guessing which creator drove sales.",
          "Judging a repeat-purchase product on first-week orders from one post.",
          "Ignoring product, shipping and team time when calculating creator cost.",
          "Replacing the whole roster every campaign instead of rebooking proven creators.",
        ],
      },
      { type: "heading", text: "Final thoughts", id: "conclusion" },
      {
        type: "paragraph",
        text: "D2C influencer discovery is a sales question dressed up as a content question. Shortlist creators who fit the product, the price and the place it's sold; check for signs their audience acts; set up codes and links before you book; and judge the roster on your own unit economics. The brands that do this well tend to end up with a smaller, steadier group of creators who sell, rather than a long list of names who were popular for one campaign.",
      },
    ],
    faqs: [
      {
        question: "Should a new D2C brand start with micro or macro influencers?",
        answer:
          "Most early-stage D2C brands learn more from several smaller creators than from one large one, because they can test different audiences, cities and formats for the same spend. Larger creators make more sense once you know which message and audience converts.",
      },
      {
        question: "How do I know a creator's audience can afford my product without audience data?",
        answer:
          "Look at the brands they already promote, the questions in their comments and the lifestyle in their content, then ask the creator for audience insights screenshots from their Instagram professional dashboard. Treat the public signals as a filter and the screenshots as confirmation.",
      },
      {
        question: "Are discount codes or affiliate links better for D2C creator campaigns?",
        answer:
          "Codes are easy to say on camera and work across website and some marketplace setups; links capture clicks but depend on the creator using link stickers and bio links. Many brands use both, with each creator getting a unique code and link.",
      },
      {
        question: "How long should I wait before judging a creator's sales?",
        answer:
          "Give a post a reasonable window for Stories, saves and late clicks before judging it, and for repeat-purchase products look at whether those customers reorder. One week of code redemptions is rarely a fair verdict on its own.",
      },
      {
        question: "Can I use the same creators for marketplace and website sales?",
        answer:
          "Yes, but brief them on one destination per post. Splitting a single call to action between your site and a marketplace usually weakens both and makes attribution harder.",
      },
    ],
  },
  {
    slug: "find-beauty-skincare-influencers-india",
    category: "Influencer Marketing",
    title: "How to Find Beauty and Skincare Influencers in India",
    seoTitle: "How to Find Beauty and Skincare Influencers in India",
    excerpt:
      "\"Beauty influencer\" covers ingredient explainers, bridal makeup artists, haircare creators and dermatologists. How to find the right sub-niche, match skin type, tone and climate, and check claims before you shortlist.",
    metaDescription:
      "Find beauty and skincare influencers in India by sub-niche, skin type, tone, climate and language, with checks for expert credentials and ASCI-style claims.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "7 min read",
    tags: ["Creator Discovery", "Beauty", "Skincare", "India"],
    related: ["influencer-marketing-beauty-brands-india", "ugc-beauty-skincare", "how-to-research-influencers", "regulated-categories-influencer-marketing-india"],
    hero: {
      src: "/blog/discovery/find-beauty-skincare-influencers-india.svg",
      alt: "Matrix mapping beauty creator sub-niches (skincare science, makeup artistry, haircare, ayurveda and clean beauty, men's grooming) against what each is best for, plus a fit check for skin type, tone and climate",
    },
    discoveryCta: {
      headline: "Find Beauty Creators Who Match Your Customer",
      body: "Kudozz Discovery lets you search Indian Instagram creators in the Beauty & Skincare niche and narrow by city, state, language, gender and minimum engagement, so your shortlist starts closer to the skin, climate and language your customer lives with.",
    },
    body: [
      {
        type: "paragraph",
        text: "Who counts as a beauty influencer? A creator explaining niacinamide percentages, a Lucknow bridal makeup artist, a Kochi creator testing hair oils through the monsoon and a dermatologist debunking skincare myths all sit in the same category on most platforms. They reach different people, earn trust in different ways, and carry very different compliance risks. Finding the right beauty or skincare creator starts with being precise about which of them you need.",
      },
      {
        type: "paragraph",
        text: "This guide is about the search and selection side. For overall campaign strategy, read our guide to influencer marketing for beauty brands in India; for creator-made ad content, see UGC for beauty and skincare brands.",
        links: [
          { text: "influencer marketing for beauty brands in India", href: "/blog/influencer-marketing-beauty-brands-india" },
          { text: "UGC for beauty and skincare brands", href: "/blog/ugc-beauty-skincare" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To find beauty and skincare influencers in India, first pick the sub-niche your product belongs to, then filter creators by location and language, review whether their skin type, skin tone and climate match your customer, check past content for exaggerated claims or undisclosed ads, and verify credentials for anyone presenting as an expert. Engagement and views help you prioritise the review; they don't replace it.",
      },
      { type: "heading", text: "Map the sub-niche before you search", id: "beauty-sub-niches" },
      {
        type: "table",
        headers: ["Sub-niche", "Best for", "What to check"],
        rows: [
          ["Skincare science", "Actives, sunscreens, serums, launches that need explaining", "Accuracy of ingredient claims; whether they admit what a product can't do"],
          ["Makeup artistry", "Colour cosmetics, shade launches, tools", "Shade-matching on their own skin; tutorial quality; lighting honesty"],
          ["Haircare", "Oils, shampoos, styling tools, scalp care", "Hair type shown on camera; long-term routine content"],
          ["Ayurveda and clean beauty", "Herbal, natural and heritage formulations", "Careful language around efficacy; no therapeutic promises"],
          ["Men's grooming", "Beard care, face wash, fragrance, styling", "Tone that suits your brand; audience fit for the product price"],
          ["Bridal and occasion", "Long-wear makeup, festive and wedding kits", "Seasonal demand; booking calendar during wedding season"],
        ],
      },
      {
        type: "paragraph",
        text: "A single launch can span two sub-niches. Say a Bengaluru brand launches a tinted sunscreen: a skincare-science creator explains the SPF and filters, while a makeup creator shows how it sits under foundation. Brief them differently and judge them on different things.",
      },
      { type: "heading", text: "Match skin type, skin tone and climate", id: "skin-type-tone-climate" },
      {
        type: "paragraph",
        text: "Beauty is the category where \"does this creator look like my customer?\" matters most, because viewers judge the product on the creator's own face, hair and skin. Three checks to run on every shortlist:",
      },
      {
        type: "list",
        items: [
          "Skin type: oily, dry, combination, sensitive or acne-prone. A mattifying product reviewed by a dry-skin creator rarely lands.",
          "Skin tone and undertone: shade launches need creators across the range you sell, shown in natural light. If every creator on the list has the same tone, your shade range isn't being demonstrated.",
          "Climate: a moisturiser that suits a Delhi winter may feel heavy in Chennai humidity. Creators in coastal, northern and hill-state cities test products in very different conditions, and their audiences live in those same conditions.",
        ],
      },
      {
        type: "paragraph",
        text: "City and state filters are a practical stand-in for climate when you search. A creator's location doesn't tell you where their audience lives, though, so ask for audience insights screenshots showing top cities before you confirm.",
      },
      { type: "heading", text: "Dermatologists and expert creators", id: "expert-creators" },
      {
        type: "paragraph",
        text: "Dermatologists, cosmetologists, trichologists and qualified aestheticians who create content add credibility, particularly for actives and sensitive-skin products. They also add responsibility for you.",
      },
      {
        type: "list",
        items: [
          "Verify qualifications independently: ask for registration details for medical professionals and check them, rather than relying on a bio that says \"skin expert\".",
          "Separate enthusiasts from professionals in your brief. A skincare enthusiast shares personal experience; a professional's statement carries the weight of expertise, so what they say about your product needs to be accurate and supportable.",
          "Expect professionals to have their own rules about what they will endorse, and respect them. Many will decline scripts that overstate results.",
          "Check how they've handled past brand work: do they disclose clearly and stay within what the product actually does?",
        ],
      },
      {
        type: "discovery-cta",
        headline: "Narrow beauty creators by city, language and engagement",
        body: "Kudozz Discovery lets you filter Indian Instagram creators in Beauty & Skincare by city, state, language, gender and minimum engagement rate, then save the promising ones into a list for a closer look at skin, tone and claims.",
        ctaLabel: "Search beauty creators",
      },
      { type: "heading", text: "Check claims and disclosure before you shortlist", id: "claims-compliance" },
      {
        type: "paragraph",
        text: "Beauty and personal care sit close to health claims, and Indian advertising self-regulation by ASCI applies to influencer content as well as brand ads. In general terms: paid content must be clearly labelled, claims must be ones the brand can substantiate, and ASCI's influencer guidance asks that filters not be used in a way that exaggerates the effect of a beauty product. Check the current ASCI guidelines and take legal advice for your specific claims.",
      },
      {
        type: "paragraph",
        text: "For discovery, that translates into a content review step. Before shortlisting anyone, scroll their recent brand collaborations and look for:",
      },
      {
        type: "list",
        items: [
          "Medical-sounding promises such as \"cures acne\", \"removes pigmentation permanently\" or \"regrows hair\".",
          "Fairness or whitening language, or before-and-after visuals with obvious changes in lighting or filters.",
          "Paid posts with no disclosure label, or disclosure buried at the end of a long caption.",
          "Comparisons that disparage named competitors.",
        ],
      },
      {
        type: "paragraph",
        text: "A creator who habitually over-claims will probably do it in your video too, and the consequences land on your brand. Our guide to regulated categories in Indian influencer marketing covers the stricter end of this, and the creator disclosure guide is useful to share with creators directly.",
        links: [
          { text: "regulated categories in Indian influencer marketing", href: "/blog/regulated-categories-influencer-marketing-india" },
          { text: "creator disclosure guide", href: "/blog/creator-disclosure-guide" },
        ],
      },
      {
        type: "paragraph",
        text: "Ayurvedic and herbal products need extra care because the line between a cosmetic and a drug claim is easy to cross. See ayurveda and nutraceutical influencer marketing for that specific context.",
        links: [{ text: "ayurveda and nutraceutical influencer marketing", href: "/blog/ayurveda-nutraceutical-influencer-marketing-india" }],
      },
      { type: "heading", text: "Give skincare creators time to test", id: "testing-time" },
      {
        type: "paragraph",
        text: "Discovery and timing are linked in skincare. A creator who posts a \"review\" two days after the parcel arrives can only talk about texture and packaging, and experienced audiences know it. When you shortlist, ask each creator how long they usually test a product before posting, and plan your calendar so they have that time.",
      },
      {
        type: "list",
        items: [
          "Ask whether they patch test new products and whether they're happy to show that step; it signals care to their audience.",
          "Check whether their skin is going through anything that would confuse results, such as an existing treatment they mention on camera.",
          "Prefer creators who post follow-ups (\"two weeks in\", \"one month later\"). Those updates are often more persuasive than the first video.",
          "Read their comments for questions about skin type and shade. A creator whose followers ask \"will this suit oily skin?\" and who answers is talking to buyers, not just fans.",
          "Make sure they're not mid-way through a paid run with a direct competitor; layering two vitamin C serums in one month helps nobody.",
        ],
      },
      {
        type: "paragraph",
        text: "For makeup, the equivalent is wear time: ask creators to show a product at the start and end of a real day, not only fresh application under ring lights.",
      },
      { type: "heading", text: "Don't skip regional-language beauty creators", id: "regional-languages" },
      {
        type: "paragraph",
        text: "Tamil, Telugu, Malayalam, Kannada, Bengali, Marathi and Hindi beauty creators often explain routines with a closeness that English content can't match for their audience, and they talk about local conditions (hard water, humidity, festival makeup traditions) in ways that feel lived rather than scripted. If your sales or growth targets include a region, search in that language first. The wider case is made in regional influencer marketing in India.",
        links: [{ text: "regional influencer marketing in India", href: "/blog/regional-influencer-marketing-india" }],
      },
      { type: "heading", text: "A search workflow for beauty and skincare", id: "search-workflow" },
      {
        type: "list",
        items: [
          "Write the profile of the creator you need: sub-niche, skin type, tone range, cities or climate, language, and whether you need an expert.",
          "Search the Beauty & Skincare niche (add Health & Fitness for some wellness-adjacent products), then filter by state, city, language and, for men's grooming, gender.",
          "Set a minimum engagement rate or average views to decide review order.",
          "Open each profile and watch recent Reels with the sound on: lighting honesty, bare-skin shots, how they talk about results.",
          "Run the claims and disclosure check above on their last few brand posts.",
          "Ask shortlisted creators for audience insights screenshots, rates and any category exclusivity they're already under.",
        ],
      },
      {
        type: "paragraph",
        text: "Kudozz Discovery covers the first half of this list for Indian Instagram creators: niche, location, language, gender and engagement filters, plus lists to keep each campaign's candidates together. The second half is human review. For a fuller research routine before outreach, see how to research influencers before approaching them, and for the final go or no-go, the things to check before selecting an influencer.",
        links: [
          { text: "Kudozz Discovery", href: "https://discover.kudozz.in/?utm_source=kudozz_website&utm_medium=blog&utm_campaign=discovery_content&utm_content=find-beauty-skincare-influencers-india" },
          { text: "how to research influencers before approaching them", href: "/blog/how-to-research-influencers" },
          { text: "things to check before selecting an influencer", href: "/blog/things-to-check-before-selecting-influencers" },
        ],
      },
      {
        type: "table",
        headers: ["Review question", "Good sign", "Pause if"],
        rows: [
          ["Does their skin, tone and hair match my customer?", "Clear, natural-light shots of their own skin or hair", "Heavy filters on every post"],
          ["Do they explain, or just show?", "Routines, reasons, honest negatives", "Every product is \"holy grail\""],
          ["How do they handle claims?", "Measured language; credits ingredients accurately", "Promises cures or permanent results"],
          ["Do they disclose paid work?", "Clear labels at the start", "Brand posts with no label"],
          ["Is there category clutter?", "A few brands, used over time", "A new competing serum every week"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Searching \"beauty\" broadly and ending up with makeup creators for an active-ingredient skincare launch.",
          "Shortlisting a single skin tone for a product sold in a wide shade range.",
          "Ignoring climate, then wondering why a heavy cream underperformed in coastal cities.",
          "Treating a \"skin expert\" bio as a qualification without verifying it.",
          "Booking creators whose past brand posts over-claim or skip disclosure.",
          "Writing scripts with claims your brand can't substantiate, then blaming the creator.",
          "Choosing creators who promote a competing product every week, so yours gets lost.",
        ],
      },
      { type: "heading", text: "Final thoughts", id: "conclusion" },
      {
        type: "paragraph",
        text: "The beauty creator market in India is wide enough that \"find a beauty influencer\" is not a useful brief. Narrow to the sub-niche, match skin, tone, climate and language, verify anyone presented as an expert, and read past brand posts with a compliance eye before you shortlist. If you'd rather have a team run the search, vetting and briefing, Kudozz handles Instagram influencer marketing for beauty and skincare brands.",
        links: [{ text: "Instagram influencer marketing", href: "/services/instagram-influencer-marketing" }],
      },
    ],
    faqs: [
      {
        question: "Should skincare brands work with dermatologists or regular creators?",
        answer:
          "Often both, for different jobs. Qualified professionals help explain actives and build credibility for sensitive-skin products; everyday creators show texture, routine and real-life results. Brief and review them differently, and verify professional credentials.",
      },
      {
        question: "Can beauty influencers use filters in sponsored content?",
        answer:
          "ASCI's influencer guidance asks that filters not exaggerate the effect a beauty or personal care product claims to have. Brief creators to show product results without beauty filters and check drafts before they go live.",
      },
      {
        question: "How do I find creators for a wide foundation shade range?",
        answer:
          "Plan the shortlist by tone first: decide which parts of your range must be demonstrated, then search for creators who can show each in natural light. Ask for unedited photos if their grid is heavily edited.",
      },
      {
        question: "Are men's grooming creators a separate search?",
        answer:
          "Usually, yes. Many grooming creators sit in fashion, fitness or lifestyle niches rather than beauty, so search across those niches and use a gender filter, then check whether their audience fits your price point.",
      },
      {
        question: "Do I need different creators for different cities?",
        answer:
          "For skincare and haircare, climate and water differ enough across India that city-level creators can make content feel more relevant. For colour cosmetics, tone and language usually matter more than city.",
      },
    ],
  },
  {
    slug: "find-fashion-lifestyle-influencers",
    category: "Influencer Marketing",
    title: "How to Find Fashion and Lifestyle Influencers for Your Brand",
    seoTitle: "How to Find Fashion and Lifestyle Influencers | Kudozz",
    excerpt:
      "In fashion, the creator's wardrobe is half the brief. How to find fashion and lifestyle influencers whose aesthetic, sizing, price tier, city and occasions actually fit your label.",
    metaDescription:
      "How to find fashion and lifestyle influencers: aesthetic fit, body inclusivity, price tier, festive and wedding timing, city style, try-on formats and returns.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "7 min read",
    tags: ["Creator Discovery", "Fashion", "Lifestyle", "India"],
    related: ["influencer-marketing-fashion-brands-india", "influencer-search-tools", "wedding-influencer-marketing-india", "seasonal-influencer-marketing-india"],
    hero: {
      src: "/blog/discovery/find-fashion-lifestyle-influencers.svg",
      alt: "Diagram plotting fashion creators on a price-tier axis from fast fashion to premium, with ethnic wear in between, alongside a festive and wedding season booking calendar",
    },
    discoveryCta: {
      headline: "Find Fashion Creators Who Already Dress Like Your Customer",
      body: "Use Kudozz Discovery to search Indian Instagram creators in Fashion & Lifestyle by city, state, language and engagement, save each season's candidates into a list, and review their styling before you reach out.",
    },
    body: [
      {
        type: "paragraph",
        text: "Here is the blunt version: in fashion, the creator's existing wardrobe is half your brief. If your kurta set would look out of place among the last thirty outfits on their grid, no script will fix it. Their audience follows them for a look, and your product has to belong in it.",
      },
      {
        type: "paragraph",
        text: "That makes fashion and lifestyle creator discovery more visual and more seasonal than most categories. This guide covers how to judge aesthetic fit, sizing and body inclusivity, price tier, occasions and city style, and which content formats suit which products. For overall campaign planning, see our guide to influencer marketing for fashion brands in India.",
        links: [{ text: "influencer marketing for fashion brands in India", href: "/blog/influencer-marketing-fashion-brands-india" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To find fashion and lifestyle influencers, define the aesthetic, price tier and customer body types you sell to; search by niche, city and language; review each creator's last 20 to 30 outfits for styling consistency and brand mix; check that your size range and sizing can be shown honestly; and book around the festive and wedding calendar, not after it has started.",
      },
      { type: "heading", text: "Judge aesthetic and styling consistency", id: "aesthetic-fit" },
      {
        type: "paragraph",
        text: "Scroll a creator's grid quickly, then slowly. The quick scroll tells you their colour palette and mood. The slow one tells you how they style: do they mix high-street and designer, repeat pieces, layer, accessorise heavily, or keep it minimal? Consistency matters because a creator who reinvents their look every week gives your product no stable context.",
      },
      {
        type: "table",
        headers: ["Aesthetic", "Suits", "Look for"],
        rows: [
          ["Minimal and neutral", "Basics, linen, workwear, capsule labels", "Muted palette; outfit repeats; fit-focused captions"],
          ["Colourful and maximal", "Prints, statement pieces, accessories", "Confident colour mixing; playful styling"],
          ["Indo-western and fusion", "Co-ords, modern ethnic, festive separates", "Ethnic pieces styled for daily wear"],
          ["Traditional and handloom", "Sarees, block print, regional crafts", "Draping skill; interest in fabric and makers"],
          ["Streetwear", "Sneakers, oversized fits, graphic tees", "Footwear focus; younger, city-based audience"],
          ["Modest fashion", "Longer cuts, layering, abayas, co-ords", "Consistent modest styling across seasons"],
        ],
      },
      {
        type: "paragraph",
        text: "For example, a Jaipur block-print label would look for creators who already wear handcrafted cotton, talk about fabric, and style ethnic pieces for everyday life rather than only weddings. A creator with a streetwear grid might drive reach, but the product would read as a one-off costume change.",
      },
      { type: "heading", text: "Match your price tier", id: "price-tier" },
      {
        type: "paragraph",
        text: "Fashion audiences self-select by price more sharply than almost any category. Check what a creator usually wears and promotes.",
      },
      {
        type: "list",
        items: [
          "Fast fashion and value: haul creators, \"under ₹999\" edits and marketplace finds suit high-volume, low-price labels.",
          "Ethnic wear and festive: creators who mix price points across occasions; check whether they style mid-range sets or mostly designer pieces.",
          "Premium and designer: creators who style fewer, pricier pieces and talk about fabric, cut and craft.",
        ],
      },
      {
        type: "paragraph",
        text: "A ₹4,500 handloom saree promoted by a creator known for ₹499 hauls will get compliments and few orders. Ask shortlisted creators for audience insights screenshots and the brands they've worked with recently, and compare those with your own price band. For the very top end, see luxury influencer marketing in India.",
        links: [{ text: "luxury influencer marketing in India", href: "/blog/luxury-influencer-marketing-india" }],
      },
      { type: "heading", text: "Body inclusivity and honest sizing", id: "body-inclusivity" },
      {
        type: "paragraph",
        text: "If you sell XS to 4XL, your creator list should show that range, not just one body type with a single plus-size creator added at the end. Customers want to see how a fit sits on someone shaped like them. Search deliberately for plus-size, petite, tall and curvy creators, and for creators across ages if your customer base spans them.",
      },
      {
        type: "list",
        items: [
          "Ask each creator for their usual size in your brand's chart before shipping, so the fit on camera is right.",
          "Encourage them to state their height and the size they're wearing in the video or caption.",
          "Check how they've talked about bodies in past content; a creator with a respectful, body-neutral voice protects your brand tone.",
        ],
      },
      {
        type: "discovery-cta",
        headline: "Shortlist fashion creators by city and style",
        body: "Kudozz Discovery lets you search Indian Instagram creators in Fashion & Lifestyle and filter by city, state, language, gender and follower band, so you can build season-specific lists and then review each creator's styling yourself.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Plan around occasions, not just campaigns", id: "occasions-calendar" },
      {
        type: "paragraph",
        text: "Indian fashion demand is shaped by occasions: wedding season, Diwali, Durga Puja, Navratri, Eid, Onam, Pongal, Karva Chauth, Raksha Bandhan, plus summer and monsoon edits. Two things follow for discovery.",
      },
      {
        type: "list",
        items: [
          "Book early. Fashion creators with strong festive content fill their calendars well before the festival itself, so start the search one to two months ahead as a working rule.",
          "Match the occasion to the region. Puja styling content lands best with creators in and around Kolkata; Onam content with creators in Kerala; Navratri with creators in Gujarat and Maharashtra.",
        ],
      },
      {
        type: "paragraph",
        text: "Our guides to wedding influencer marketing and seasonal influencer marketing in India cover campaign timing in more detail.",
        links: [
          { text: "wedding influencer marketing", href: "/blog/wedding-influencer-marketing-india" },
          { text: "seasonal influencer marketing in India", href: "/blog/seasonal-influencer-marketing-india" },
        ],
      },
      { type: "heading", text: "City style differences", id: "city-style" },
      {
        type: "paragraph",
        text: "Climate, work culture and local occasions shape what people wear. Linen and breathable cotton make more sense for creators in Chennai or Mumbai humidity; layering and winter ethnic wear suit Delhi or Chandigarh creators in December; Bengaluru's office and café culture favours smart-casual. These are tendencies, not rules, but they explain why a winter shawl campaign with creators in coastal cities may struggle. Tier 2 cities add another layer: creators in Indore, Lucknow, Surat or Coimbatore often style for family occasions and local markets in ways metro creators don't, and their audiences can be closer to the customer many ethnic and value labels actually sell to.",
      },
      {
        type: "paragraph",
        text: "Filtering by city and state is the quickest way to apply this, combined with a language filter if you're targeting a regional audience. For a deeper look at combining niche, location and audience relevance in search, see how to find influencers by niche, location and audience. For hyperlocal store launches, how to find local influencers covers the neighbourhood-level approach.",
        links: [
          { text: "how to find influencers by niche, location and audience", href: "/blog/influencer-search-tools" },
          { text: "how to find local influencers", href: "/blog/how-to-find-local-influencers" },
        ],
      },
      { type: "heading", text: "Pick formats that sell clothes", id: "try-on-haul-formats" },
      {
        type: "table",
        headers: ["Format", "Best for", "Watch out for"],
        rows: [
          ["Try-on", "Fit, drape and movement", "Needs honest size and height info"],
          ["Haul", "Range, value, new collection drops", "Can feel disposable for premium labels"],
          ["Get ready with me", "Occasion wear, accessories, beauty tie-ins", "Product can get lost in the routine"],
          ["One piece, three ways", "Versatility, capsule pieces, ethnic separates", "Needs a creator with real styling skill"],
          ["Fabric close-up", "Handloom, linen, premium materials", "Lighting must be true to colour"],
        ],
      },
      {
        type: "paragraph",
        text: "When reviewing a creator, find the formats they already do well. A creator who has never made a try-on video is a riskier bet for a fit-led product than one whose try-ons are their most-watched content.",
      },
      { type: "heading", text: "Returns-sensitive categories", id: "returns-sensitive" },
      {
        type: "paragraph",
        text: "Fit-driven categories (denim, bras and lingerie, footwear, tailored ethnic sets) carry a higher risk of returns when expectations don't match reality. Discovery can help reduce that risk:",
      },
      {
        type: "list",
        items: [
          "Favour creators who talk about fit, fabric weight and sizing honestly, including what didn't work.",
          "Avoid creators who heavily filter colour; a kurta that looks coral on screen and arrives rust will come back.",
          "Brief creators to show the product in natural light and in motion, and to mention size worn.",
          "Watch the comments on past try-ons: questions about sizing that the creator answers are a good sign.",
        ],
      },
      {
        type: "paragraph",
        text: "If you'd like help with the sourcing and briefing, Kudozz runs Instagram influencer marketing for fashion labels, from creator selection to approvals.",
        links: [{ text: "Instagram influencer marketing", href: "/services/instagram-influencer-marketing" }],
      },
      { type: "heading", text: "When a lifestyle creator is the better pick", id: "lifestyle-creators" },
      {
        type: "paragraph",
        text: "Not every apparel or accessories brand needs a dedicated fashion creator. Lifestyle creators (people who post about their home, work, travel, food and routines, with clothes as part of that life) often suit everyday basics, loungewear, bags, watches and eyewear better, because the product appears in a believable context rather than a styled shoot. A Kochi café owner who posts about her mornings, or a Hyderabad software engineer documenting his commute and weekends, can make a linen shirt or a tote feel like a habit rather than a trend.",
      },
      {
        type: "paragraph",
        text: "The trade-off is control. Lifestyle creators may not do try-ons or detailed styling, so brief them on one or two moments where the product must be clearly visible, and judge them on fit with the life they show rather than on fashion credentials. For launches that depend on fit, drape or styling skill, stick with fashion specialists.",
      },
      {
        type: "template",
        label: "Fashion creator shortlist columns",
        text: "Handle | City | Language | Aesthetic (one line) | Sizes they can show | Price tier of brands they wear | Formats done well (try-on, haul, GRWM, styling) | Festive or wedding availability | Colour accuracy (natural light?) | Recent competing brands | Notes",
      },
      {
        type: "paragraph",
        text: "Keeping these columns consistent across every creator you review makes it easy to see gaps: a list that is all one aesthetic, one size or one city shows up immediately, before you have spent anything on samples.",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Picking creators for follower count when their aesthetic clashes with the collection.",
          "Sending premium pieces to haul creators whose audience shops on price.",
          "Shortlisting one body type for a label with a wide size range.",
          "Starting festive outreach a week before the festival.",
          "Using the same city's creators for a pan-India seasonal launch.",
          "Allowing heavy colour filters on products customers will compare in person.",
          "Shipping the wrong size because nobody asked the creator first.",
        ],
      },
      { type: "heading", text: "Final thoughts", id: "conclusion" },
      {
        type: "paragraph",
        text: "Good fashion creator discovery is mostly careful looking. Define the aesthetic, price tier and bodies you dress; search by niche, city and language; read grids for styling consistency; plan around the occasions your customers dress for; and favour creators who show fit and colour honestly. Once you have candidates, our guide to influencer shortlisting helps turn them into a final list.",
        links: [{ text: "influencer shortlisting", href: "/blog/influencer-shortlist" }],
      },
    ],
    faqs: [
      {
        question: "What's the difference between fashion and lifestyle influencers?",
        answer:
          "Fashion creators centre on clothes, styling and accessories. Lifestyle creators cover a wider life (home, travel, food, routines) where fashion appears alongside other things. Lifestyle creators can suit everyday basics and accessories; fit-led or styling-heavy launches usually need dedicated fashion creators.",
      },
      {
        question: "How early should I book creators for Diwali or wedding season?",
        answer:
          "As a working rule, start searching one to two months before the occasion, and earlier for wedding season content that needs shoots in specific outfits. Popular festive creators often have their calendars filled well before the festival.",
      },
      {
        question: "Should I ship one size or several to a creator?",
        answer:
          "Ask for their usual size against your size chart and ship that, plus a second size if your fits run unpredictably. A poorly fitting piece on camera hurts the product more than the cost of an extra unit.",
      },
      {
        question: "Can small fashion creators work for an ethnic wear label?",
        answer:
          "Yes, often very well. Smaller creators who wear ethnic pieces in daily life, speak the regional language and live in the cities you ship to can make a collection feel real in a way a large, general creator may not.",
      },
    ],
  },
  {
    slug: "how-to-find-youtube-influencers",
    category: "Campaign Strategy",
    title: "How to Find YouTube Influencers in India for Your Brand",
    seoTitle: "How to Find YouTube Influencers in India: Brand Guide",
    excerpt:
      "A practical guide for Indian brands: where to find YouTube creators (search, competitor reviews, Shorts, regional channels), how to evaluate a channel on recent views and comments, what drives pricing, and a checklist for your shortlist.",
    metaDescription:
      "Find YouTube influencers in India: search like a buyer, find regional channels, judge recent views and comments, spot red flags and use a shortlist checklist.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-09-12",
    updatedAt: "2026-11-26",
    lastReviewed: "November 2026",
    readingTime: "13 min read",
    tags: ["YouTube Influencers", "Creator Discovery", "YouTube Influencer Marketing", "India"],
    related: ["youtube-influencer-marketing-india", "youtube-influencer-rates-india", "how-to-contact-youtube-creators", "find-youtube-shorts-creators"],
    hero: {
      src: "/blog/discovery/how-to-find-youtube-influencers-india.svg",
      alt: "Four-step process for finding YouTube influencers in India: search like a buyer in English and regional languages, collect channels from competitor reviews and Shorts, evaluate recent average views, comments and sponsorship frequency, then shortlist with backups",
    },
    discoveryCta: {
      headline: "Add the Instagram Side to Your Creator Shortlist",
      body: "Kudozz Discovery covers Instagram creators in India, not YouTube. Many YouTube creators also post on Instagram, so you can look them up by name or @username, or filter Instagram creators by niche, city, language and engagement for the Instagram half of a cross-platform campaign.",
      ctaLabel: "Explore Kudozz Discovery",
    },
    body: [
      {
        type: "paragraph",
        text: "Search \"best sunscreen for oily skin\" or \"phone under 20000\" on YouTube and you'll see why brands care about the platform. The videos that answer those questions are made by creators, they keep getting watched for months, and the people watching are often a few days away from buying. YouTube says more than 15,000 Indian channels had over a million subscribers as of May 2025, so the challenge for brands is rarely a shortage of creators.",
        links: [{ text: "YouTube says", href: "https://blog.google/intl/en-in/products/platforms/youtubes-india-bet-inr-21000-crore-paid-out-to-indian-creators-commits-inr-850-crores-to-power-indias-creator-nation/" }],
      },
      {
        type: "paragraph",
        text: "The difficulty is finding the right channels. Subscriber counts are easy to compare and tell you little about who watches today. This guide covers how Indian brands can find YouTube influencers by niche, language and region, evaluate a channel before collaborating, choose between Shorts and long-form, think about pricing, and build a shortlist, with examples from skincare, consumer electronics, food and fintech.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To find YouTube influencers in India, search YouTube the way your customers do (reviews, comparisons and \"best under ₹\" queries) in English and the regional languages you sell in, and log the channels that keep appearing. Add creators who have reviewed competitor products, Shorts creators in your category and channels from talent agencies or creator networks. Then judge each channel on the median views of its last 10 to 15 videos, comment quality, audience language and location, posting consistency and how often it runs sponsorships. Ask shortlisted creators for YouTube Studio screenshots before you agree terms.",
      },
      { type: "heading", text: "How is YouTube influencer marketing different from Instagram?", id: "youtube-vs-instagram" },
      {
        type: "paragraph",
        text: "Both work for Indian brands, but they behave differently, and that changes how you search and what you check.",
      },
      {
        type: "table",
        headers: ["", "YouTube", "Instagram"],
        rows: [
          ["How viewers find content", "Largely search and recommendations; a video can surface for a query months after upload", "Mostly feed, Reels and Explore; reach concentrates in the first few days"],
          ["Typical brand format", "Dedicated review, 60–90 second integration in a longer video, Shorts", "Reels, Stories, carousels"],
          ["Depth", "Room to demonstrate, compare and answer objections", "Fast, visual, good for discovery and repetition"],
          ["Main performance signal", "Recent views, watch time, comment discussion", "Reach, views, saves, shares, Story taps"],
          ["Production lead time", "Longer; integrations are often planned weeks ahead", "Shorter for Reels and Stories"],
          ["Best fit", "Considered purchases, tech, finance, education, detailed how-tos", "Launch buzz, fashion, beauty, food, impulse and lifestyle products"],
        ],
      },
      {
        type: "paragraph",
        text: "Many campaigns use both: a long-form review for buyers doing research and Reels or Shorts for reach. The broader strategy is in our YouTube influencer marketing guide for Indian brands; this article focuses on finding and vetting the creators.",
        links: [{ text: "YouTube influencer marketing guide for Indian brands", href: "/blog/youtube-influencer-marketing-india" }],
      },
      { type: "heading", text: "Types of YouTube creators brands can work with", id: "creator-types" },
      {
        type: "paragraph",
        text: "There is no official definition of a \"micro\" or \"mid-tier\" YouTuber, and agencies draw the lines differently. Treat the bands below as a rough guide and look at views rather than subscribers when you compare.",
      },
      {
        type: "table",
        headers: ["Creator type", "Rough subscriber band", "Where they fit", "Watch out for"],
        rows: [
          ["Nano and micro", "Under 10K to around 100K", "Category search queries, regional audiences, product seeding, affordable testing", "Irregular uploads; small samples make averages swing"],
          ["Mid-tier", "Around 100K to 1M", "Reviews and integrations with dependable reach and production quality", "Busier sponsor calendars; check recent competitor work"],
          ["Large", "1M and above", "National launches, awareness, credibility for a new brand", "Higher fees, longer lead times, broader and less targeted audiences"],
          ["Niche experts and educators", "Any size", "Finance, health, tech, education and B2B, where trust and accuracy matter most", "Regulatory rules on who can advise; reputations they will protect"],
          ["Regional and language creators", "Any size", "Reaching buyers who research in Hindi, Tamil, Telugu, Bengali, Marathi, Kannada, Malayalam, Gujarati and other languages", "Fewer discovery tools cover them; search in the language itself"],
        ],
      },
      {
        type: "paragraph",
        text: "For a closer look at the smaller end, micro influencers in India covers how brands use them across platforms.",
        links: [{ text: "micro influencers in India", href: "/blog/micro-influencers-india" }],
      },
      { type: "heading", text: "How to find YouTube influencers in India", id: "how-to-find" },
      { type: "subheading", text: "1. Search YouTube the way your buyer does" },
      {
        type: "paragraph",
        text: "Type the queries your customers type before they buy, and note which channels rank across several of them. These are the creators your buyers already find.",
      },
      {
        type: "list",
        items: [
          "Review queries: \"[product] review\", \"[product] honest review\", \"[product] after 3 months\".",
          "Comparison queries: \"[brand A] vs [brand B]\", \"which [product] to buy\".",
          "Price queries: \"best [product] under ₹2000\".",
          "Problem queries: \"how to reduce tanning\", \"how to start SIP\", \"how to fix slow laptop\".",
          "Language versions: the same queries in Hindi or regional languages, typed in the script and in Roman letters (\"sunscreen kaunsa lagaye\").",
        ],
      },
      {
        type: "paragraph",
        text: "Use the filters for upload date and type (video or Shorts) to keep results current. Then open each promising channel and look at its featured channels and the \"up next\" recommendations beside its videos; similar creators cluster together.",
      },
      { type: "subheading", text: "2. Search by niche and content category" },
      {
        type: "paragraph",
        text: "Category searches (\"skincare routine\", \"budget tech\", \"home cooking Telugu\", \"personal finance Hindi\") surface creators who make that content regularly, not just once. Check the Videos tab: you want a channel where your category is the main subject, not an occasional detour.",
      },
      { type: "subheading", text: "3. Research competitors and similar brands" },
      {
        type: "paragraph",
        text: "Search competitor product names with \"review\" and \"unboxing\", and scan the descriptions of sponsored videos for brand names in your category. Creators who have covered a comparable product already have an interested audience and know how to film it. Note how they handled it: did they mention drawbacks, use YouTube's paid promotion label, or cover the same competitor repeatedly (a sign of an ongoing deal or exclusivity)?",
      },
      { type: "subheading", text: "4. Look at YouTube Shorts separately" },
      {
        type: "paragraph",
        text: "Browse the Shorts feed for your category and check the Shorts tab on channels you already found. Some creators are strong on Shorts and weak on long-form, and the reverse. If Shorts are central to your plan, how to find YouTube Shorts creators goes deeper.",
        links: [{ text: "how to find YouTube Shorts creators", href: "/blog/find-youtube-shorts-creators" }],
      },
      { type: "subheading", text: "5. Use creator communities, agencies and networks" },
      {
        type: "paragraph",
        text: "Many mid-tier and large Indian YouTubers are represented by talent agencies or multi-channel networks, often named in the channel's About section or video descriptions. Ask agencies for creators in your category, but still check each channel yourself. Creator meet-ups, category communities and recommendations from creators you have worked with are also useful, especially for regional channels. YouTube also runs its own brand and creator matchmaking programme, now called YouTube Creator Partnerships (previously BrandConnect), which it lists as available to eligible creators in India. Our comparison of BrandConnect and direct creator partnerships explains when each route makes sense.",
        links: [
          { text: "YouTube Creator Partnerships", href: "https://support.google.com/youtube/answer/9385307" },
          { text: "comparison of BrandConnect and direct creator partnerships", href: "/blog/youtube-brandconnect-vs-creator-partnerships" },
        ],
      },
      { type: "subheading", text: "6. Use influencer discovery platforms, knowing what each covers" },
      {
        type: "paragraph",
        text: "Discovery platforms save time when they cover the platform you need. Check before you rely on one: some tools are YouTube-first, some are Instagram-first, and coverage of regional and smaller channels varies a lot. Kudozz Discovery, for example, covers Instagram creators in India, not YouTube channels. It is still useful for YouTube campaigns in one way: many YouTubers also post on Instagram, so you can look them up by name or @username to check their Instagram presence, or build the Instagram half of a cross-platform plan.",
      },
      { type: "heading", text: "How to find YouTube creators by language, city and region", id: "language-city-region" },
      {
        type: "paragraph",
        text: "YouTube doesn't let you filter search results by a creator's city, so regional discovery takes a few extra steps.",
      },
      {
        type: "list",
        items: [
          "Search in the language and script: a Tamil query surfaces a different set of channels than its English equivalent. Try both the native script and transliterated versions.",
          "Add place names to category queries: \"Indore street food\", \"Kolkata cafe\", \"Hyderabad real estate\", \"Pune budget shopping\".",
          "Check the About section: many channels list a country, an email domain or a city; videos and descriptions often mention where the creator is based.",
          "Read the comments: viewers naming their cities, or asking about delivery to their town, are a useful hint about audience geography.",
          "Ask for proof: a YouTube Studio screenshot of the audience's top geographies and languages settles it. Public cues only suggest where viewers are.",
        ],
      },
      {
        type: "paragraph",
        text: "Regional creators often have the most engaged audiences for products sold beyond the metros. Our guide to finding regional and vernacular content creators in India covers the approach across platforms.",
        links: [{ text: "finding regional and vernacular content creators in India", href: "/blog/find-regional-content-creators-india" }],
      },
      { type: "heading", text: "Examples: how four Indian brands might search", id: "brand-examples" },
      { type: "subheading", text: "A D2C skincare brand" },
      {
        type: "paragraph",
        text: "A brand launching a gel moisturiser for oily skin would search \"moisturiser for oily skin\", \"niacinamide review\" and \"skincare routine humid weather\", plus Hindi versions. It wants creators who show product texture on camera, discuss ingredients and get comments asking about skin types. Long-form reviewers suit the research stage; Shorts creators suit reach. The brief should rule out claims that the product treats acne or other conditions. For the Instagram side, see how to find beauty and skincare influencers in India.",
        links: [{ text: "how to find beauty and skincare influencers in India", href: "/blog/find-beauty-skincare-influencers-india" }],
      },
      { type: "subheading", text: "A consumer electronics brand" },
      {
        type: "paragraph",
        text: "A brand selling budget earbuds would search \"best earbuds under 2000\", \"[competitor model] vs\" and \"earbuds review Tamil\" or \"Telugu\". Tech reviewers test, compare and point out flaws, so look for channels with a record of balanced verdicts and allow two to three weeks with the product before the review. Comparison videos rank for a long time, which makes them worth more than their first-week views suggest.",
      },
      { type: "subheading", text: "A regional food brand" },
      {
        type: "paragraph",
        text: "A Gujarat-based snack or masala brand expanding into Maharashtra might search recipe and street-food queries in Gujarati, Marathi and Hindi, plus city names such as Surat, Ahmedabad, Pune and Nashik. Home-cooking channels that use the product in a real recipe often convert better than taste-test videos. Check whether the creator's audience is in the cities where you have distribution, or a viewer who wants to buy won't find the product.",
      },
      { type: "subheading", text: "A fintech or education brand" },
      {
        type: "paragraph",
        text: "A fintech app or test-prep brand needs educators whose audiences trust their accuracy, searching queries such as \"how to file ITR\", \"credit score explained Hindi\" or \"UPSC preparation strategy\". This category carries extra rules. SEBI's regulations, amended in August 2024 and explained in its circular of 22 October 2024, bar SEBI-regulated entities from associating with people who give securities advice without being registered or who make claims about returns, with an exception for investor-education content. ASCI's guidelines, updated in August 2023, also expect finance and health influencers to hold and state relevant qualifications, such as SEBI registration for investment advice. Check credentials, past content and disclosure habits before you shortlist; influencer marketing for finance and fintech brands covers the details.",
        links: [
          { text: "circular of 22 October 2024", href: "https://www.sebi.gov.in/legal/circulars/oct-2024/association-of-persons-regulated-by-the-board-and-their-agents-with-certain-persons_87837.html" },
          { text: "ASCI's guidelines, updated in August 2023", href: "https://www.ascionline.in/wp-content/uploads/2023/08/GUIDELINES-FOR-INFLUENCER-ADVERTISING-IN-DIGITAL-MEDIA.pdf" },
          { text: "influencer marketing for finance and fintech brands", href: "/blog/influencer-marketing-fintech-brands-india" },
        ],
      },
      { type: "heading", text: "How to evaluate a YouTube channel before collaborating", id: "evaluate-channel" },
      {
        type: "table",
        headers: ["What to check", "How to check it", "Red flag"],
        rows: [
          ["Subscriber count", "Channel page; use only to set a rough tier", "Treating it as a proxy for reach"],
          ["Average views", "Median views of the last 10 to 15 long-form videos, and separately for Shorts", "Averages pulled up by one viral video"],
          ["Recent video performance", "Are views stable, rising or falling over the last three months?", "Steady decline, or long gaps followed by spikes"],
          ["Engagement and interaction", "Likes, comment count and what comments say; creator replies", "Big view counts with almost no discussion, or generic comments"],
          ["Content quality", "Audio, lighting, editing, how well they explain or demonstrate", "Quality that would make your product look worse"],
          ["Audience relevance", "Language, topics, viewer questions; Studio geography and age data on request", "An audience mostly outside your markets or age group"],
          ["Posting consistency", "Upload dates over the last six months", "Months of silence before your campaign window"],
          ["Sponsorship frequency", "How many recent videos are sponsored, and for whom", "Sponsors in most videos, or a direct competitor last month"],
        ],
      },
      { type: "subheading", text: "Working out recent average views" },
      {
        type: "paragraph",
        text: "Take the last 10 to 15 long-form videos that are at least two weeks old, list their views and use the median rather than the mean, so one viral upload doesn't distort it. Do the same separately for Shorts. Example: a tech channel with 320,000 subscribers whose last 12 videos have a median of 45,000 views is reaching roughly 14% of its subscriber base per video. A 90,000-subscriber Tamil channel with a median of 38,000 views reaches about 42%. For a Tamil Nadu launch, the smaller channel may be the better buy. Both figures here are hypothetical; the method is the point.",
      },
      {
        type: "paragraph",
        text: "View counts are not always comparable across time, either. From 31 March 2025, YouTube changed how Shorts views are counted, keeping the earlier measure in YouTube Analytics as \"engaged views\". Compare channels over the same recent period, use engaged views when comparing Shorts, and ask creators for Studio screenshots of views and average view duration for the videos you are looking at.",
        links: [{ text: "changed how Shorts views are counted", href: "https://support.google.com/youtube/answer/10059070" }],
      },
      { type: "heading", text: "How to spot suspicious subscribers or engagement", id: "suspicious-signals" },
      {
        type: "paragraph",
        text: "No single number proves a channel has bought subscribers or views. Some channels have low views because their audience has moved on or because the algorithm stopped recommending them, not because of fraud. Treat the signals below as reasons to ask more questions, not as verdicts.",
      },
      {
        type: "list",
        items: [
          "A very large subscriber count with consistently tiny views across recent videos, with no obvious explanation.",
          "Sudden subscriber jumps that don't line up with a viral video, collaboration or press mention (third-party trackers can show history, but treat their estimates with caution).",
          "Comments that are generic (\"nice video\", \"great content\"), repeated across videos, or unrelated to the topic.",
          "Views that are high but likes and comments almost absent, particularly on videos that should invite questions.",
          "An audience that doesn't fit the content, such as a Hindi cooking channel with most comments in languages the creator never uses.",
        ],
      },
      {
        type: "paragraph",
        text: "If something looks off, ask the creator for YouTube Studio screenshots of traffic sources, audience geography and returning viewers for recent videos. Creators with real audiences usually share these without fuss. The same mindset applies on Instagram; how to identify fake followers covers those signals.",
        links: [{ text: "how to identify fake followers", href: "/blog/how-to-identify-fake-followers" }],
      },
      { type: "heading", text: "YouTube Shorts vs long-form: which should brands choose?", id: "shorts-vs-long-form" },
      {
        type: "table",
        headers: ["Format", "Best for", "Limitations"],
        rows: [
          ["Dedicated long-form review", "Considered purchases, tech, finance, appliances; detailed comparisons", "Higher fee, longer lead time; the creator controls the verdict"],
          ["Integration (60–90 sec in a regular video)", "Awareness with context, recurring sponsorships", "Viewers may skip; depends on how naturally it fits"],
          ["Shorts", "Launches, quick demos, impulse and low-price products, reach", "Less room to explain; viewers act less on Shorts for complex products"],
          ["Shorts plus long-form from the same creator", "Launches that need both reach and depth", "Costs more; check the creator is strong in both formats"],
        ],
      },
      {
        type: "paragraph",
        text: "As a rule of thumb, the more research a buyer does before purchasing, the more long-form matters. A ₹299 snack can sell on Shorts; a ₹30,000 phone or a credit card needs a review that answers questions. Our comparison of YouTube Shorts vs long-form goes into how each format behaves.",
        links: [{ text: "YouTube Shorts vs long-form", href: "/blog/youtube-shorts-vs-long-form" }],
      },
      { type: "heading", text: "How much do YouTube influencers charge in India?", id: "pricing" },
      {
        type: "paragraph",
        text: "We have not found a credible, recent published rate card for YouTube creators in India, so we don't quote ranges here; the tier figures circulating online disagree with each other several-fold and rarely explain their method. Fees are set by negotiation, and two channels with similar subscriber counts can quote very different amounts. The factors that move the price most:",
      },
      {
        type: "table",
        headers: ["Factor", "Effect on price"],
        rows: [
          ["Recent average views", "The strongest driver; many creators price against views, not subscribers"],
          ["Niche", "Finance, tech and B2B audiences usually cost more per view than entertainment"],
          ["Format", "A dedicated review costs more than an integration; Shorts are often priced lower or bundled"],
          ["Deliverables", "Extra Shorts, community posts, pinned comments or Instagram cross-posts add to the fee"],
          ["Usage rights", "Running the video or clips as paid ads, or on your website, is usually charged separately"],
          ["Exclusivity", "Blocking competitor deals for a period costs the creator income, so it raises the fee"],
          ["Timeline", "Rushed slots and festive-season dates cost more"],
          ["Language and region", "Regional channels can offer strong value for specific markets, but rates vary widely"],
        ],
      },
      {
        type: "paragraph",
        text: "For budgeting detail, see YouTube influencer rates in India. Ask for a quote against a written brief that lists format, deliverables, usage rights and exclusivity, or the numbers you compare will not be like for like.",
        links: [{ text: "YouTube influencer rates in India", href: "/blog/youtube-influencer-rates-india" }],
      },
      { type: "heading", text: "How to shortlist YouTube creators for a campaign", id: "shortlist" },
      {
        type: "list",
        items: [
          "Write the brief first: objective, audience, language, regions, format and budget band.",
          "Build a long list of 20 to 40 channels from search, competitor reviews, Shorts and agency suggestions.",
          "Log each one with the query that surfaced it, language, main format, median recent views and sponsorship frequency.",
          "Cut to 10 to 15 using the evaluation table above, removing channels with recent competitor deals or poor audience fit.",
          "Request Studio screenshots and rates from the shortlist, against the same brief.",
          "Pick your final creators plus two or three backups, since some will decline or be booked.",
        ],
      },
      {
        type: "template",
        label: "YouTube creator search log columns",
        text: "Channel name | Channel URL | Found via (query or competitor video) | Language | City/region cues | Main format (long-form / Shorts / both) | Subscribers | Median views, last 10-15 videos | Median Shorts views | Comment quality (notes) | Sponsored videos in last 10 | Recent competitor deals | Business email listed? | Instagram handle | Status",
      },
      {
        type: "paragraph",
        text: "If you need a deeper process for comparing candidates, how to shortlist influencers for a brand campaign covers scoring, and how to contact YouTube creators covers outreach once your list is ready.",
        links: [
          { text: "how to shortlist influencers for a brand campaign", href: "/blog/influencer-shortlist" },
          { text: "how to contact YouTube creators", href: "/blog/how-to-contact-youtube-creators" },
        ],
      },
      {
        type: "discovery-cta",
        headline: "Running YouTube and Instagram together?",
        body: "Kudozz Discovery covers Instagram creators in India, not YouTube channels. Look up your YouTube shortlist's Instagram accounts by name or @username, or filter Instagram creators by niche, city, language and engagement, and save them to a campaign list.",
        ctaLabel: "Search Instagram creators",
      },
      { type: "heading", text: "Common mistakes when choosing YouTube influencers", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Choosing by subscriber count instead of recent median views.",
          "Searching only in English for a product sold across India.",
          "Booking a channel that reviewed a direct competitor last month without asking about exclusivity.",
          "Scripting the verdict, which viewers notice and call out in comments.",
          "Choosing a long-form creator for a Shorts-only brief, or the reverse.",
          "Not giving the creator enough time with the product to test it properly.",
          "Agreeing a fee before settling usage rights, then paying again to run the video as an ad.",
          "Skipping disclosure, or relying on a line buried in the description.",
        ],
      },
      { type: "heading", text: "YouTube influencer evaluation checklist", id: "evaluation-checklist" },
      {
        type: "template",
        label: "YouTube influencer evaluation checklist",
        text: "CHANNEL FIT\n[ ] Makes regular content in our category (not a one-off)\n[ ] Language and region match our target markets\n[ ] Strong in the format we need (long-form, integration or Shorts)\n[ ] Our product would look natural in their last five videos\n\nPERFORMANCE\n[ ] Median views of last 10-15 long-form videos noted\n[ ] Median Shorts views noted separately\n[ ] Views stable or rising over the last three months\n[ ] Uploads regularly in the run-up to our campaign window\n\nAUDIENCE AND ENGAGEMENT\n[ ] Comments are specific and on-topic; viewers ask buying questions\n[ ] Creator replies to comments\n[ ] No unexplained mismatch between subscribers, views and engagement\n[ ] Studio screenshots received: geography, age, traffic sources, average view duration\n\nBRAND SAFETY AND TERMS\n[ ] Mentions drawbacks in past reviews; no misleading claims\n[ ] Uses YouTube's paid promotion label and a spoken disclosure\n[ ] No direct competitor deal in the last [x] days; exclusivity discussed\n[ ] Sponsored videos are not the majority of recent uploads\n[ ] Credentials checked where the category needs them (finance, health)\n[ ] Quote covers format, deliverables, usage rights and exclusivity in writing",
      },
      {
        type: "paragraph",
        text: "The general vetting steps in how to vet influencers apply on YouTube too, and are worth running before you sign.",
        links: [{ text: "how to vet influencers", href: "/blog/how-to-vet-influencers" }],
      },
      { type: "heading", text: "Final thoughts", id: "conclusion" },
      {
        type: "paragraph",
        text: "Finding YouTube influencers in India rewards brands that search like their customers, in the languages their customers use, and then judge channels on what is happening now: recent views, real comments, sponsorship history and audience fit. Build a long list, check it against a written brief and keep backups. For the Instagram side of the same campaign, Kudozz Discovery helps you research Indian Instagram creators by niche, location and engagement. If you'd rather hand over search, outreach and briefing, Kudozz also runs YouTube influencer marketing for Indian brands.",
        links: [
          { text: "Kudozz Discovery", href: "https://discover.kudozz.in/?utm_source=kudozz_website&utm_medium=blog&utm_campaign=discovery_content&utm_content=how-to-find-youtube-influencers" },
          { text: "YouTube influencer marketing", href: "/services/youtube-influencer-marketing" },
        ],
      },
    ],
    faqs: [
      {
        question: "How do I find YouTube influencers in India for my brand?",
        answer:
          "Search YouTube for the queries your customers use before buying, in English and the regional languages you sell in, and note the channels that rank repeatedly. Add creators who have reviewed competitor products, Shorts creators in your category and channels suggested by talent agencies, then evaluate each one on recent median views, comments and audience fit.",
      },
      {
        question: "Is subscriber count a reliable way to compare YouTube creators?",
        answer:
          "Not on its own. Subscribers accumulate over years and many no longer watch. The median views of a channel's last 10 to 15 videos, its comment quality and how closely its content matches your category are better indicators of what a collaboration will deliver.",
      },
      {
        question: "What is a micro YouTube influencer in India?",
        answer:
          "There is no official definition, but brands often use it for channels with roughly 10,000 to 100,000 subscribers. What matters more is whether the channel's recent views and audience language and location fit your campaign.",
      },
      {
        question: "Should I choose YouTube Shorts or long-form videos?",
        answer:
          "Use long-form reviews or integrations for products people research before buying, such as electronics, finance and education. Use Shorts for reach, launches and low-price or impulse products. Many launches combine both, ideally with creators who perform well in each format.",
      },
      {
        question: "How much do YouTube influencers charge in India?",
        answer:
          "Rates are negotiated and vary widely with recent views, niche, format, deliverables, usage rights, exclusivity and timing. Ask for quotes against a written brief so you are comparing the same scope, and budget separately for ad usage rights.",
      },
      {
        question: "Can I use Kudozz Discovery to find YouTube creators?",
        answer:
          "No. Kudozz Discovery covers Instagram creators in India. It helps with the Instagram side of a cross-platform campaign, including looking up YouTube creators who also have Instagram accounts, but YouTube discovery itself happens on YouTube and through creator networks.",
      },
      {
        question: "Do YouTube creators need to disclose paid partnerships in India?",
        answer:
          "Yes. ASCI's influencer guidelines expect paid or gifted collaborations to be disclosed upfront, and YouTube asks creators to select its paid promotion setting, which adds a disclosure label at the start of the video. A spoken mention at the start of the sponsored segment is good practice too.",
      },
    ],
  },
];
