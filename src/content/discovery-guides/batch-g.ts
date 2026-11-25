import type { BlogPost } from "@/content/blog";

/**
 * Kudozz Discovery content cluster, batch G: tech, LinkedIn, YouTube Shorts, podcast and gaming creator discovery.
 * Kudozz Discovery is Instagram-only; these articles say so and position it only for the Instagram side.
 * Product claims stay within the verified facts in src/config/discovery.ts.
 */
export const discoveryBatchG: BlogPost[] = [
  // #29 NEW
  {
    slug: "find-tech-influencers-gadgets-electronics",
    category: "Influencer Marketing",
    title: "How to Find Tech Influencers for Gadgets, Electronics and Consumer Technology Brands",
    seoTitle: "How to Find Tech Influencers in India | Kudozz",
    excerpt:
      "Tech creators are not one category. How to tell deep reviewers from unboxers and comparison channels, check review integrity, handle embargoes and decide where Instagram fits next to YouTube.",
    metaDescription:
      "Find tech creators for gadget and electronics brands in India: reviewer types, review integrity checks, embargo readiness and Instagram vs YouTube depth.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["Creator Discovery", "Tech Influencers", "Consumer Electronics", "India"],
    related: [
      "consumer-electronics-influencer-marketing-india",
      "how-to-find-youtube-influencers",
      "find-youtube-shorts-creators",
      "influencers-for-product-launch",
    ],
    hero: {
      src: "/blog/discovery/find-tech-influencers-gadgets-electronics.svg",
      alt: "Two-by-two matrix placing tech creator types by depth of review and breadth of reach, with Instagram and YouTube roles marked",
    },
    discoveryCta: {
      headline: "Find Tech Creators for Your Next Launch",
      body: "For the Instagram side of a gadget or electronics campaign, Kudozz Discovery lets you filter Indian Instagram creators by the Technology & Gadgets niche, language, city and average views, and save candidates for each product into their own list.",
    },
    body: [
      {
        type: "paragraph",
        text: "Say a Noida brand making ₹1,999 wireless earbuds sends forty review units to every account with \"tech\" in its bio. Six weeks later it has a handful of unboxing Reels, two comparison videos that rank it fourth out of five, and a long-form review that spends three minutes on call quality the brand never tested. None of those creators were bad. They were simply the wrong kinds of tech creator for a budget audio product that needed quick, honest first impressions in Hindi.",
      },
      {
        type: "paragraph",
        text: "Tech is one of the few influencer categories where the audience actively wants criticism, where specifications get checked in the comments and where a review can keep selling, or hurting, a product for months. This guide covers how to sort tech creators by what they actually make, how to match them to your product, what to check about review integrity, and how to source with embargoes and review units in mind.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Start from the product and the buyer's decision, not from the word \"tech\". Decide whether you need depth (detailed reviews and comparisons, usually YouTube), reach and first impressions (short unboxings and demos, often Instagram Reels and YouTube Shorts) or everyday use (setup and lifestyle creators). Search by the questions buyers ask, check that a creator's past reviews include real criticism and accurate specs, confirm they will work with an embargo and a clear review-unit policy, and score candidates before you send a single unit.",
      },
      { type: "heading", text: "Not all tech creators do the same job", id: "tech-creator-types" },
      {
        type: "paragraph",
        text: "The label covers very different people. Treat each type as a role in your plan, because a deep reviewer and a desk-setup creator will produce completely different results from the same unit.",
      },
      {
        type: "table",
        headers: ["Creator type", "What they make", "Best for", "Check before you shortlist"],
        rows: [
          ["Deep reviewers", "Long reviews after days or weeks of use", "Phones, laptops, TVs, purchases buyers research", "Testing method, willingness to criticise, timeline"],
          ["Comparison and \"best under ₹X\" creators", "Head-to-heads and price-band roundups", "Crowded price bands where buyers compare", "Whether your product is honestly in their price band"],
          ["Unboxing and first-impression creators", "Short unboxings, design and feature demos", "Launch-week visibility, accessories", "Average views, hook quality, accuracy of claims"],
          ["Explainer and tips creators", "How-to content, hidden features, fixes", "Software, smart home, features buyers miss", "Clarity, audience questions in comments"],
          ["Setup and lifestyle tech creators", "Desk setups, travel kits, aesthetic use", "Accessories, audio, design-led products", "Audience taste, whether products feel used"],
          ["Regional-language tech creators", "Reviews and tips in Hindi, Tamil, Telugu, Bengali and more", "Mass-market products, Tier 2 and 3 buyers", "Language of comments, not just of the video"],
        ],
      },
      {
        type: "paragraph",
        text: "Gaming hardware sits at the edge of this list: peripherals, gaming phones and monitors often do better with gaming creators who use the product on stream. Our guide to finding gaming influencers and streamers covers that side.",
        links: [{ text: "finding gaming influencers and streamers", href: "/blog/find-gaming-influencers-streamers" }],
      },
      { type: "heading", text: "Match the creator type to the product and price", id: "match-product-to-creator" },
      {
        type: "paragraph",
        text: "The higher the price and the longer the buyer deliberates, the more depth you need. A rough way to think about it, as a rule of thumb rather than a formula:",
      },
      {
        type: "table",
        headers: ["Product situation", "Lead with", "Support with"],
        rows: [
          ["Accessories and audio under a few thousand rupees", "Unboxing and first-impression creators", "Setup creators, regional-language short-form"],
          ["Mid-range phones, wearables, budget laptops", "Comparison and \"best under ₹X\" creators", "Deep reviewers, explainer creators"],
          ["Premium phones, laptops, TVs, cameras", "Deep reviewers", "Comparison creators, then short-form for reach"],
          ["Smart home, apps and software features", "Explainer and tips creators", "Lifestyle creators showing daily use"],
          ["Category the buyer doesn't understand yet", "Explainer creators", "First-impression creators for awareness"],
        ],
      },
      {
        type: "paragraph",
        text: "Before you search, write down the buyer's main question in plain words: \"Is this the best earbuds under ₹2,000 for calls?\", \"Will this robot vacuum handle Indian dust and rugs?\". The creators who already answer that question for their audience are your strongest leads. For the wider category strategy (launch phases, affiliate deals, measurement), see our guide to influencer marketing for consumer electronics brands.",
        links: [{ text: "influencer marketing for consumer electronics brands", href: "/blog/consumer-electronics-influencer-marketing-india" }],
      },
      { type: "heading", text: "Instagram tech creators vs YouTube depth", id: "instagram-vs-youtube" },
      {
        type: "paragraph",
        text: "YouTube is where buyers go to research a considered purchase, and long-form reviews keep getting found through search long after launch. Instagram is where a lot of first exposure happens: a fast Reel showing the case, the fit, the one feature that matters. Most tech campaigns need both, and many tech creators run both, with different audiences on each.",
      },
      {
        type: "list",
        items: [
          "Use YouTube for depth: detailed reviews, comparisons and explainers that answer search queries.",
          "Use Instagram and YouTube Shorts for reach and first impressions: unboxings, demos and quick verdicts in launch week.",
          "Check both profiles of the same creator: a strong YouTube reviewer may post thin Reels, and a strong Reels creator may never have done a proper review.",
          "Budget separately: a long-form review and a Reel are different deliverables with different effort, and should be priced and briefed that way.",
        ],
      },
      {
        type: "paragraph",
        text: "For the YouTube side, our guide to finding YouTube creators for product reviews covers search and vetting on that platform, and how to find YouTube Shorts creators covers short-form. On the Instagram side, a discovery tool shortens the search. Kudozz Discovery covers Instagram creators in India only (not YouTube), and has a Technology & Gadgets niche filter you can combine with language, city, follower band and minimum average views. Sorting by most average views is a sensible first pass for launch-week reach, because tech Reels are judged on whether people watch them, not on follower totals.",
        links: [
          { text: "finding YouTube creators for product reviews", href: "/blog/how-to-find-youtube-influencers" },
          { text: "how to find YouTube Shorts creators", href: "/blog/find-youtube-shorts-creators" },
        ],
      },
      {
        type: "discovery-cta",
        headline: "Search Instagram Tech Creators by Niche and Views",
        body: "Kudozz Discovery filters Indian Instagram creators by the Technology & Gadgets niche, language, city and average views, so you can build a separate list for each product before you check review history.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Check review integrity before you shortlist", id: "review-integrity" },
      {
        type: "paragraph",
        text: "Tech audiences notice when a review is soft. A creator who praises everything is cheaper to brief and worth less to you, because their audience has learnt to discount them. Watch three or four of their recent reviews, including at least one of a product similar to yours, and check:",
      },
      {
        type: "list",
        items: [
          "Do they name real drawbacks, or only \"minor cons\" that aren't cons?",
          "Are the specifications and prices they quote accurate for the Indian variant of the product?",
          "Do they say clearly when a unit was sent by the brand and when a video is paid, in line with ASCI's disclosure guidelines?",
          "Do they test claims (battery, camera, durability) or read them off the box?",
          "What do the comments ask? Questions about alternatives and long-term use suggest buyers are watching; only emojis suggests they aren't.",
          "Have they reviewed close competitors recently, and how did they handle that?",
        ],
      },
      {
        type: "paragraph",
        text: "A creator who has criticised a competitor fairly is often a better bet than one who has never criticised anything. Accept that a credible reviewer may point out weaknesses in your product too. If you can't live with that, you need paid demos with clear disclosure, not reviews. Our general guide on researching influencers before approaching them covers the rest of the background checks.",
        links: [{ text: "researching influencers before approaching them", href: "/blog/how-to-research-influencers" }],
      },
      { type: "heading", text: "Embargoes, review units and timing", id: "embargoes-review-units" },
      {
        type: "paragraph",
        text: "Electronics launches often run on an embargo: units go out early, and nobody publishes until a set date and time. That makes sourcing part of logistics. A creator who is perfect on content but won't sign an embargo, or can't turn a review around in your window, is not shortlist-ready for that launch. Settle these points at sourcing, not after the unit has shipped:",
      },
      {
        type: "list",
        items: [
          "Will they agree to a written embargo date and time, and have they honoured embargoes before?",
          "How many days of use do they need before publishing, and does that fit your launch calendar?",
          "Is the unit a loan to be returned, or theirs to keep? Say so up front; it affects the fee conversation.",
          "Will they update or add a follow-up if a software update changes performance?",
          "What do they refuse? Many serious reviewers won't accept script approval on a review. Agree a factual accuracy check instead.",
          "Do they need a spec sheet, press images, a contact for technical questions and the Indian price before the embargo lifts?",
        ],
      },
      {
        type: "template",
        label: "First message to a tech reviewer (adapt to your launch)",
        text: "Hi [Name], I'm [Your name] from [Brand]. We're launching [product] in India at [price band] on [date]. We'd like to send you a review unit around [ship date] for an honest review, with an embargo until [date, time IST].\n\nThe unit is [yours to keep / a loan we'll collect after publishing]. We won't ask for script approval; we'll only check that specs and prices are accurate. If you'd also consider a paid Reel or Short around launch day, let me know your rates.\n\nWould this timeline work for you?",
      },
      {
        type: "paragraph",
        text: "If the review is part of a bigger launch, our guide to finding influencers for a product launch covers how to sequence teaser, launch-day and follow-up creators around the embargo.",
        links: [{ text: "finding influencers for a product launch", href: "/blog/influencers-for-product-launch" }],
      },
      { type: "heading", text: "A simple tech creator scorecard", id: "tech-creator-scorecard" },
      {
        type: "paragraph",
        text: "Score each shortlisted creator from 1 to 5 on these factors. The weights are a starting point; shift them toward depth for premium products and toward reach for accessories.",
      },
      {
        type: "table",
        headers: ["Factor", "Suggested weight", "What a 5 looks like"],
        rows: [
          ["Product and price-band fit", "25%", "Regularly covers products like yours at your price"],
          ["Review integrity", "20%", "Names real drawbacks, discloses clearly, accurate specs"],
          ["Buyer intent in comments", "20%", "Comments ask about alternatives, prices, long-term use"],
          ["Views relative to followers", "15%", "Recent videos or Reels hold steady views, not one-off spikes"],
          ["Timeline and embargo readiness", "10%", "Has worked to embargoes, fits your window"],
          ["Language and region fit", "10%", "Speaks to the buyers you sell to most"],
        ],
      },
      {
        type: "paragraph",
        text: "Keep the scores in the same sheet as your shortlist so the reasoning travels with the names. Our step-by-step guide to shortlisting influencers shows one way to set that sheet up.",
        links: [{ text: "step-by-step guide to shortlisting influencers", href: "/blog/influencer-shortlist" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Treating \"tech influencer\" as one category and sending every type the same brief.",
          "Choosing reviewers by subscriber count without watching how they review.",
          "Shipping units before confirming the embargo, timeline and return policy in writing.",
          "Asking for script approval on a review and then being surprised when credible reviewers decline.",
          "Putting a mid-range product with creators whose \"best under ₹X\" videos sit in a different price band.",
          "Ignoring regional-language tech creators for mass-market products sold mostly outside metros.",
          "Judging Instagram tech creators on followers instead of average views.",
        ],
      },
      { type: "heading", text: "Final thoughts", id: "conclusion" },
      {
        type: "paragraph",
        text: "Finding tech influencers is mostly about matching roles: depth for the buyer who researches, reach for the buyer who scrolls, and everyday use for the buyer who wants to picture the product on their desk. Search by the buyer's question, check integrity before reach, and sort out embargoes and units at the sourcing stage. If you'd rather hand the matching and logistics to a team that does it every week, Kudozz's creator discovery service can build and vet the shortlist for you.",
        links: [{ text: "creator discovery service", href: "/services/creator-discovery" }],
      },
    ],
    faqs: [
      {
        question: "Should a gadget brand pay tech reviewers or only send review units?",
        answer:
          "Both models exist. Many reviewers accept units for an honest, unpaid review with no guarantee of a positive verdict, while paid deliverables (a launch Reel, an integration, a sponsored segment) are separate and must be disclosed. Be clear which one you are asking for, because mixing the two in one message causes confusion and weakens trust.",
      },
      {
        question: "Can we ask a tech creator to remove a negative point from their review?",
        answer:
          "You can ask them to correct a factual error, such as a wrong price or specification. Asking them to remove an honest opinion usually damages the relationship and, if it becomes public, the product. If a criticism is valid, address it in your own communication or with a software update.",
      },
      {
        question: "How early should we contact tech creators before a launch?",
        answer:
          "Early enough to confirm interest, the embargo and the review window before units ship. For products that need days of testing, that often means reaching out several weeks before launch. Short-form first-impression creators can usually work to a shorter lead time.",
      },
      {
        question: "Are smaller tech creators worth it for electronics brands?",
        answer:
          "Often, yes, especially for accessories, regional-language audiences and niche products such as mechanical keyboards or audio gear. Smaller creators with focused audiences can have strong buyer intent in their comments. Judge them on review quality and views, not on follower count alone.",
      },
      {
        question: "Does Kudozz Discovery cover YouTube tech channels?",
        answer:
          "No. Kudozz Discovery covers Instagram creators in India only. It has a Technology & Gadgets niche filter for Instagram creators; for YouTube reviewers, search and vet on YouTube itself and check whether those creators also run an Instagram account.",
      },
    ],
  },

  // #31 UPGRADE (originally published 2026-09-13)
  {
    slug: "how-to-find-linkedin-influencers",
    category: "Campaign Strategy",
    title: "How to Find LinkedIn Creators for B2B Influencer Marketing",
    seoTitle: "How to Find LinkedIn Creators for B2B Marketing | Kudozz",
    excerpt:
      "The best LinkedIn creators for a B2B campaign are usually the people your buyers already read, not the accounts that call themselves influencers. Where to find them, how to judge them and what proof to ask for.",
    metaDescription:
      "Find LinkedIn creators for B2B campaigns in India: start from your buying committee, search posts and comments, score expertise and ask for audience proof.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-09-13",
    updatedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["LinkedIn Creators", "B2B Influencer Marketing", "Creator Discovery", "India"],
    related: [
      "linkedin-influencer-marketing-india",
      "b2b-creator-partnerships-linkedin",
      "how-to-find-podcasts-and-podcast-creators",
      "linkedin-influencer-rates-india",
    ],
    hero: {
      src: "/blog/discovery/how-to-find-linkedin-influencers.svg",
      alt: "Flow from buying committee roles to the voices they read and comment on, ending in a weighted LinkedIn creator scorecard",
    },
    discoveryCta: {
      headline: "Cover the Instagram Side of Your B2B Creator Mix",
      body: "Kudozz Discovery doesn't search LinkedIn. If your plan also includes founders, finance or education creators on Instagram, it lets you filter Indian Instagram creators by niche, language, city and engagement and save them into a campaign list.",
    },
    body: [
      {
        type: "paragraph",
        text: "Search LinkedIn for \"influencer\" and you mostly find people who have branded themselves as one. That is often the opposite of who a B2B brand needs. The most useful LinkedIn creators for a campaign tend to be practitioners your buyers already follow and argue with in the comments: a CFO who writes about closing the books, a DevOps lead who posts incident write-ups, a procurement head who explains vendor evaluation. You find them by working backwards from your buyer, not forwards from a list of self-declared influencers.",
      },
      {
        type: "paragraph",
        text: "This guide covers how to define who you are trying to reach, where to look on LinkedIn and off it, how to evaluate what you find, and what audience proof to ask for before you sign anyone. One thing up front: Kudozz Discovery, our creator discovery tool, searches Instagram creators only. It does not search LinkedIn, so this is mostly a manual research process.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Map your buying committee first (roles, seniority, industries, regions). Then search LinkedIn posts using the language your buyers use, note who keeps appearing in relevant conversations, check who people at your target accounts comment on, and mine event speaker lists, podcast guests and newsletters. Evaluate candidates on who engages with them, the depth of their expertise and the quality of discussion under their posts, not follower count. Ask shortlisted creators for screenshots of their post analytics before you agree terms.",
      },
      { type: "heading", text: "Start from the buying committee", id: "buying-committee" },
      {
        type: "paragraph",
        text: "B2B purchases usually involve several people. Before searching, write down who influences the decision and what each person reads. Say a Pune SaaS company sells compliance software to mid-sized manufacturers. The committee might include a plant head, a compliance manager, a CFO and an IT lead. Each follows different voices, and a creator who reaches only one of them may still be the right buy if that person drives the decision.",
      },
      {
        type: "table",
        headers: ["LinkedIn creator type", "Where they help", "How to find them"],
        rows: [
          ["Practitioner experts", "Credibility with hands-on users and managers", "Post search using technical or process terms"],
          ["Executive creators", "Reach to senior decision-makers", "People search by title plus industry; check for original posts"],
          ["Founders", "Peer trust with other founders and early-stage buyers", "Startup communities, funding news, founder newsletters"],
          ["Consultants and advisers", "Category education, evaluation frameworks", "Content that shows real client work, not generic advice"],
          ["Newsletter writers", "Engaged, higher-intent subscribers", "LinkedIn newsletters and email newsletters in your niche"],
          ["Community and event hosts", "Access to a gathered audience", "Meetups, conference organisers, LinkedIn Live hosts"],
          ["Your own employees", "Authentic product depth", "Who at your company already posts well"],
        ],
      },
      {
        type: "paragraph",
        text: "If you are still deciding whether creator partnerships make sense for your category at all, our complete guide to LinkedIn influencer marketing for B2B brands in India covers strategy, formats and measurement. This article stays on finding the right people.",
        links: [{ text: "LinkedIn influencer marketing for B2B brands in India", href: "/blog/linkedin-influencer-marketing-india" }],
      },
      { type: "heading", text: "Where to find LinkedIn creators", id: "where-to-find" },
      { type: "subheading", text: "1. Post search in your buyer's language" },
      {
        type: "paragraph",
        text: "Search LinkedIn for the exact terms your buyer uses (a regulation, a tool category, a process name) and filter results to posts. Look at recent posts, not only the most popular. Note anyone who appears repeatedly with original thinking rather than reshared news. A broad term like \"HR tech\" returns noise; \"attrition in BPO night shifts\" returns people who actually work on the problem.",
      },
      { type: "subheading", text: "2. People search with filters" },
      {
        type: "paragraph",
        text: "LinkedIn's people search lets you combine keywords with filters such as location, current company and industry. Search by job title plus topic, then open the activity tab of each profile to see whether they post or only have an impressive headline. If your sales team has Sales Navigator, its more detailed filters can speed this up, but the test is the same: do they post regularly, and does anyone relevant engage?",
      },
      { type: "subheading", text: "3. Who your target accounts already engage with" },
      {
        type: "paragraph",
        text: "Pick a handful of people at accounts you want to win and look at what they react to and comment on. The same few creators tend to show up. This is slow, but it is the most direct evidence you can get that a creator reaches your buyers.",
      },
      { type: "subheading", text: "4. Competitor and category conversations" },
      {
        type: "paragraph",
        text: "Read the comments on posts by competitors and category leaders. People who comment with substance are often creators in the making, and some will already have small, highly relevant followings. Also note who competitors have partnered with; you don't need to copy them, but it tells you who the category considers credible.",
      },
      { type: "subheading", text: "5. Events, podcasts and newsletters" },
      {
        type: "paragraph",
        text: "Conference speaker lists, panel line-ups and industry podcast guests are a strong source because someone else has already screened them for credibility. LinkedIn newsletter authors in your niche are worth a look too: subscribers chose to receive their writing, which usually says more than a follower count. Our guide to finding podcast hosts and creators covers the podcast side in detail.",
        links: [{ text: "finding podcast hosts and creators", href: "/blog/how-to-find-podcasts-and-podcast-creators" }],
      },
      { type: "subheading", text: "6. LinkedIn's own creator tools" },
      {
        type: "paragraph",
        text: "LinkedIn announced a Creator Marketplace inside Campaign Manager in 2026, letting brands search creators by topic and contact those who have opted in. Early coverage described a limited, invite-only rollout starting in North America, so check your own Campaign Manager account before planning around it for India. Separately, Thought Leader Ads let a company Page sponsor a member's post, including posts by people who don't work there, once the author approves the request. That is useful after you've found a creator whose post performed well with the right audience.",
      },
      { type: "subheading", text: "7. Agencies and third-party databases" },
      {
        type: "paragraph",
        text: "Agencies with B2B rosters can shortcut weeks of research, especially in technical or regulated categories where credible voices are hard to identify from outside. Third-party databases that index LinkedIn profiles can widen a longlist, but data goes stale quickly; always check current activity on the profile itself.",
      },
      { type: "heading", text: "Where Instagram fits, and where Kudozz Discovery does not", id: "instagram-side" },
      {
        type: "paragraph",
        text: "Kudozz Discovery does not search LinkedIn, and we won't pretend otherwise. It is useful for a different part of some B2B plans. Founders, finance educators, career coaches and small-business creators increasingly run Instagram accounts alongside LinkedIn, and some B2B brands (fintech, SME tools, edtech for professionals) reach their buyers on both. If your plan includes that Instagram layer, you can filter Indian Instagram creators by niches such as Finance & Business or Education, plus language, city and engagement rate, then save candidates into a list next to your LinkedIn research.",
      },
      {
        type: "discovery-cta",
        headline: "Add the Instagram Side to Your B2B Shortlist",
        body: "Kudozz Discovery searches Instagram creators in India, not LinkedIn. Use its Finance & Business and Education niche filters to find creators who also reach your buyers on Instagram, and keep them in a named list for this campaign.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "How to evaluate LinkedIn creators", id: "evaluation" },
      {
        type: "paragraph",
        text: "Follower count is one of the weakest signals on LinkedIn. A creator with a large, broad business audience and one with a small audience made up of your exact buyers can look identical on paper and perform very differently. Read the comments on their last ten posts and ask:",
      },
      {
        type: "list",
        items: [
          "Who comments? Check job titles and companies of the people engaging, not just how many there are.",
          "Is the discussion substantive, or mostly \"Great insights!\" and engagement-pod style replies?",
          "Does their expertise hold up? Look for specific, current knowledge rather than confident generalities.",
          "Do they post consistently on your topic, or only touch it occasionally?",
          "How have past brand partnerships looked: clearly disclosed, integrated into real thinking, received well?",
          "Is there anything in their history (political rants, attacks on customers, controversial takes) you couldn't sit next to?",
        ],
      },
      {
        type: "table",
        headers: ["Factor", "Weight", "Score 1–5", "Weighted score"],
        rows: [
          ["Audience relevance (who engages)", "25%", "", ""],
          ["Subject expertise", "20%", "", ""],
          ["Engagement quality", "20%", "", ""],
          ["Content quality and originality", "15%", "", ""],
          ["Brand safety", "10%", "", ""],
          ["Posting consistency", "10%", "", ""],
        ],
      },
      {
        type: "paragraph",
        text: "Multiply each score by its weight and total it. Adjust the weights to the objective: a pipeline campaign should weight audience relevance and engagement quality more heavily, while an awareness push can weight content quality and consistency higher. For the shortlisting process itself, our guide to shortlisting influencers for a campaign walks through the stages.",
        links: [{ text: "shortlisting influencers for a campaign", href: "/blog/influencer-shortlist" }],
      },
      {
        type: "quote",
        text: "The creator with 4,000 followers who all sit in your buying committee's job titles is worth more than the one with 40,000 followers who mostly don't.",
        attribution: "Kudozz Strategy Team",
      },
      { type: "heading", text: "Ask for audience proof before you agree terms", id: "audience-proof" },
      {
        type: "paragraph",
        text: "From the outside you can see who comments, but not who reads. Creators can see much more: LinkedIn's post and audience analytics break down viewers or followers by attributes such as job title, industry, seniority, company size and location (the exact breakdown varies by post and account). Ask shortlisted creators for screenshots from two or three recent posts on topics close to yours, plus their follower demographics. A creator who is comfortable sharing these is usually easier to work with later.",
      },
      {
        type: "template",
        label: "Audience proof request",
        text: "Thanks for considering this. Before we put a proposal together, could you share screenshots of:\n\n1. Post analytics (including the demographics section) for two or three recent posts on [topic]\n2. Your follower demographics: job titles or functions, industries, seniority and locations\n\nWe only use these to check audience fit and won't share them outside our team.",
      },
      {
        type: "paragraph",
        text: "Once you have a scored shortlist, move to pricing and outreach. Our guide to LinkedIn influencer rates in India covers what to expect, and B2B creator partnerships on LinkedIn covers structuring the collaboration itself.",
        links: [
          { text: "LinkedIn influencer rates in India", href: "/blog/linkedin-influencer-rates-india" },
          { text: "B2B creator partnerships on LinkedIn", href: "/blog/b2b-creator-partnerships-linkedin" },
        ],
      },
      { type: "heading", text: "Don't skip the creators already on your payroll", id: "employee-and-executive-creators" },
      {
        type: "paragraph",
        text: "Before paying external voices, look inside. Many B2B companies have a solutions engineer, a customer success lead or a co-founder who already posts thoughtfully and gets comments from customers. They know the product better than any external creator, and buyers often trust practitioners over polished influencers. Run the same evaluation on them: who engages, how deep the discussion goes, how consistently they post.",
      },
      {
        type: "list",
        items: [
          "Ask team leads who on their team already writes or speaks about the work publicly.",
          "Check the activity tabs of senior leaders, not just their headlines.",
          "Agree what employees can and can't say about customers, pricing and roadmap before they post more.",
          "Pair internal voices with one or two external creators who reach audiences your team doesn't.",
        ],
      },
      {
        type: "paragraph",
        text: "If your founders or CEO are the voices you want to build, our guide to executive influencer marketing on LinkedIn covers that programme.",
        links: [{ text: "executive influencer marketing on LinkedIn", href: "/blog/executive-influencer-marketing-linkedin" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Searching for \"influencer\" or \"top voice\" instead of the problems your buyer works on.",
          "Ranking candidates by follower count instead of who actually engages.",
          "Ignoring your own employees, who often have more credibility with buyers than external creators.",
          "Choosing general career or motivation creators for a technical product.",
          "Skipping audience proof because a creator \"looks senior\".",
          "Planning around LinkedIn tools that may not yet be available to Indian advertisers.",
          "Expecting a single sponsored post to create pipeline on its own; B2B buyers usually need repeated exposure.",
        ],
      },
      { type: "heading", text: "Bringing it together", id: "conclusion" },
      {
        type: "paragraph",
        text: "Good LinkedIn creators are found in conversations, not directories. Define the buying committee, search in their language, follow the comments back to the people they trust, and check proof before you sign. It takes longer than sorting a list, and the shortlist is much better for it. If you'd rather have a team run the research and outreach, Kudozz's LinkedIn influencer marketing service handles B2B creator programmes end to end.",
        links: [{ text: "LinkedIn influencer marketing service", href: "/services/linkedin-influencer-marketing" }],
      },
    ],
    faqs: [
      {
        question: "Is LinkedIn's Creator Marketplace available to brands in India?",
        answer:
          "LinkedIn announced the Creator Marketplace in 2026 with an initial, limited rollout reported to start in North America. Availability changes, so check inside your own Campaign Manager account rather than relying on articles, and don't make it the backbone of an India campaign until you have access.",
      },
      {
        question: "Can a brand run ads using a LinkedIn creator's post?",
        answer:
          "Yes, through Thought Leader Ads. A company Page can request to sponsor a member's post, including one by someone who doesn't work there, and the author has to approve. Agree payment, duration and disclosure with the creator separately, since the ad format itself doesn't handle that.",
      },
      {
        question: "How many followers should a LinkedIn creator have for a B2B campaign?",
        answer:
          "There's no useful minimum. A creator with a few thousand followers who are mostly your buyers can outperform a much larger account with a broad audience. Judge by who engages, the depth of discussion and audience analytics screenshots.",
      },
      {
        question: "Should we use employees or external LinkedIn creators?",
        answer:
          "Often both. Employees bring product depth and authenticity, while external creators bring reach and independence. Start by finding who inside your company already posts well, then add external voices for audiences your team doesn't reach.",
      },
      {
        question: "Does Kudozz Discovery search LinkedIn profiles?",
        answer:
          "No. Kudozz Discovery covers Instagram creators in India only. It can help with the Instagram side of a B2B plan, for example finance, business or education creators, but LinkedIn research has to happen on LinkedIn and through the other sources in this guide.",
      },
    ],
  },

  // #32 NEW
  {
    slug: "find-youtube-shorts-creators",
    category: "Influencer Marketing",
    title: "How to Find YouTube Shorts Creators for Your Brand",
    seoTitle: "How to Find YouTube Shorts Creators for Your Brand | Kudozz",
    excerpt:
      "Shorts reach comes from the feed, not the subscriber list, so channel size tells you less than you think. How to find Shorts creators, read a channel from outside and ask for the Studio numbers that matter.",
    metaDescription:
      "Find YouTube Shorts creators for brand campaigns: four creator types, where to search, how to read a channel from outside and which Studio proof to request.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "8 min read",
    tags: ["YouTube Shorts", "Creator Discovery", "Short-Form Video", "India"],
    related: [
      "youtube-shorts-influencer-marketing",
      "how-to-find-youtube-influencers",
      "find-instagram-reels-creators",
      "short-form-video-analytics",
    ],
    hero: {
      src: "/blog/discovery/find-youtube-shorts-creators.svg",
      alt: "Vertical phone frame beside a checklist of YouTube Studio Shorts metrics to request: shown in feed, viewed versus swiped away, engaged views and audience geography",
    },
    discoveryCta: {
      headline: "Find Short-Form Creators on Instagram Too",
      body: "Kudozz Discovery doesn't cover YouTube, but many Shorts creators also post Reels. Use it to filter Indian Instagram creators by niche, language, city and average views, and save the ones worth checking on YouTube into a list.",
    },
    body: [
      {
        type: "paragraph",
        text: "A Shorts channel with 3 lakh subscribers can be a weaker buy than one with 20,000. That sounds wrong until you remember how Shorts are watched: most views come from the Shorts feed, served to people who have never subscribed. Subscribers are a record of past hits, not a promise of future reach. Finding Shorts creators is therefore less about channel size and more about whether a creator's recent Shorts keep getting watched, by the right people, in the right language.",
      },
      {
        type: "paragraph",
        text: "This guide covers the kinds of Shorts creator you'll meet, where to find them, how to read a channel from outside and which numbers to request from YouTube Studio. It assumes you've already decided Shorts belong in your plan; if not, start with our guide to YouTube Shorts influencer marketing. One note on tools: Kudozz Discovery searches Instagram creators only and does not cover YouTube, so the YouTube side of this process is manual.",
        links: [{ text: "YouTube Shorts influencer marketing", href: "/blog/youtube-shorts-influencer-marketing" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Search YouTube for the topics and phrases your buyers use, switch results to Shorts, and watch the Shorts feed on a profile that's been trained on your category. Log creators who appear repeatedly. On each channel, open the Shorts tab, look at the latest twenty rather than the most popular, and check comments and language. Separate Shorts-native creators from long-form creators who also post Shorts and from accounts that only re-upload Reels. Before booking, ask for YouTube Studio screenshots showing views, engaged views, viewed versus swiped away and audience geography.",
      },
      { type: "heading", text: "Why Shorts sourcing is different", id: "why-shorts-is-different" },
      {
        type: "paragraph",
        text: "Three things make Shorts creators harder to judge than long-form YouTubers:",
      },
      {
        type: "list",
        items: [
          "Reach is feed-driven. A Short can reach far beyond the subscriber base, or barely past it, so subscriber count is a weak guide.",
          "Public view counts are generous. Since March 2025, YouTube counts a Shorts view each time a Short starts or replays. The older, stricter measure lives on in YouTube Studio as \"engaged views\".",
          "Shorts can be up to three minutes long (in a vertical or square format), so \"a Short\" may be a 15-second gag or a two-minute explainer. Know which kind you are buying.",
        ],
      },
      {
        type: "paragraph",
        text: "The practical result: the numbers you can see on a channel page are a starting signal, and the numbers that matter for a booking decision sit inside the creator's Studio account. Plan to ask for them.",
      },
      { type: "heading", text: "Four kinds of Shorts creator", id: "shorts-creator-types" },
      {
        type: "table",
        headers: ["Type", "What it looks like", "Good for", "Watch out for"],
        rows: [
          ["Shorts-native creators", "Channel built mainly on Shorts, posts often", "Reach, trends, quick demos", "Spiky views; audience may not know the creator by name"],
          ["Long-form creators who also post Shorts", "Shorts clipped from or teasing longer videos", "Credibility plus reach; a Short can drive to a review", "Shorts may be an afterthought with low effort"],
          ["Cross-posters", "Same videos on Instagram Reels and Shorts", "Two platforms from one brief", "Watermarks, mismatched audiences, usage terms covering both"],
          ["Faceless and compilation channels", "Clips, facts, edits, no consistent person", "Occasional reach plays", "Unclear ownership of footage, low trust, brand safety"],
        ],
      },
      {
        type: "paragraph",
        text: "For most brand work the first two types are the core of a shortlist. Cross-posters can be good value if the brief and usage rights cover both platforms properly. Treat faceless compilation channels cautiously: check whether they own the footage they post before your product appears next to it. If you need a long-form review as well as Shorts, our guide to finding YouTube creators for product reviews covers that side.",
        links: [{ text: "finding YouTube creators for product reviews", href: "/blog/how-to-find-youtube-influencers" }],
      },
      { type: "heading", text: "Where to find Shorts creators", id: "where-to-find" },
      {
        type: "list",
        items: [
          "YouTube search, switched to Shorts: use buyer phrases (\"kurti styling under 500\", \"protein breakfast in 5 minutes\", \"budget room makeover\"), not brand-speak.",
          "The Shorts feed itself: use a separate profile, watch and like Shorts in your category for a few days, then log the creators the feed keeps serving you.",
          "Competitor and category Shorts: see who has featured similar products and how the comments responded.",
          "Long-form channels you already trust: open their Shorts tab; many run Shorts alongside longer videos.",
          "Instagram Reels creators: plenty of short-form creators post on both platforms, so a Reels shortlist is often a Shorts shortlist in waiting.",
          "Your own comments and customers: viewers who make good Shorts about your product are worth a conversation.",
        ],
      },
      {
        type: "paragraph",
        text: "Keep a simple log as you go (channel link, niche, language, why you noted them). The same names will start to repeat, and repetition across searches is a useful signal that the feed trusts a creator in your category.",
      },
      { type: "heading", text: "Read a Shorts channel from the outside", id: "read-a-channel" },
      {
        type: "paragraph",
        text: "Open the channel's Shorts tab. It can be sorted by latest or popular; start with latest, because the popular view shows the creator's best moments, not their current form. Then check:",
      },
      {
        type: "list",
        items: [
          "Typical views across the latest twenty Shorts. Ignore the single biggest number; look at what an ordinary Short gets.",
          "Hit rate: how many of those twenty clearly outperformed the rest? Steady creators are easier to plan around than lottery tickets.",
          "Posting rhythm: regular uploads over recent months, or a burst followed by silence?",
          "Comments: real reactions and questions in your buyer's language, or generic emojis and spam?",
          "Craft: does the first second hook, is the text readable, is audio clear without captions?",
          "Brand work: any past sponsored Shorts, how they were disclosed, and whether views dropped sharply on them.",
        ],
      },
      {
        type: "paragraph",
        text: "None of this tells you who is watching. Views tell you a Short was played; they don't tell you the viewer was in India, the right age or remotely interested in your category. That gap is why the next step matters.",
      },
      {
        type: "discovery-cta",
        headline: "Start Your Short-Form Search on Instagram",
        body: "Kudozz Discovery covers Instagram, not YouTube. Many Shorts creators also post Reels, so you can filter Indian Instagram creators by niche, language, city and minimum average views, then check their YouTube channels before you shortlist.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Ask for YouTube Studio proof", id: "studio-proof" },
      {
        type: "paragraph",
        text: "Creators can see far more in YouTube Studio than you can from outside. For Shorts, the Content tab shows cards such as \"shown in feed\" (how often a Short appeared in the Shorts feed) and \"viewed vs swiped away\" (the share of those times people watched rather than scrolled past). Engaged views are available in Studio analytics, and the Audience tab shows geography, age and gender for viewers. Ask for screenshots covering the last 28 or 90 days, plus two or three individual Shorts similar to what you plan to brief.",
      },
      {
        type: "template",
        label: "Studio screenshot request for a Shorts creator",
        text: "Before we send a brief, could you share YouTube Studio screenshots for the last 90 days (Shorts only, if you can filter):\n\n1. Views and engaged views\n2. Viewed vs swiped away and shown in feed for two or three recent Shorts like [format]\n3. Audience geography, age and gender\n\nThese help us match the brief to your audience. We won't share them outside our team.",
      },
      {
        type: "paragraph",
        text: "Read them as signals, not guarantees. A high viewed-vs-swiped-away share on Shorts similar to your format is encouraging; a large gap between views and engaged views suggests lots of starts that didn't hold. Geography matters more than it seems: Shorts can travel well outside India, which is wasted reach for a brand that only ships domestically. For a deeper look at which short-form metrics carry weight, see our guide to short-form video analytics.",
        links: [{ text: "short-form video analytics", href: "/blog/short-form-video-analytics" }],
      },
      { type: "heading", text: "Run a small paid test before a bigger booking", id: "paid-test" },
      {
        type: "paragraph",
        text: "Shorts performance varies from one upload to the next even for good creators. Rather than putting the whole budget on two big channels, brief four to six shortlisted creators for one paid Short each, with the same product and a clear, simple ask. Compare engaged views, viewed versus swiped away, comments and any trackable action (a code, a link in the description, searches for your brand). Then rebook the ones that worked. Say a Jaipur home-decor label tests five creators with a 30-second \"before and after\" Short; even a rough comparison like that tells you more than subscriber counts did.",
      },
      {
        type: "paragraph",
        text: "If you are running Reels alongside Shorts, compare the two shortlists side by side; our guide to finding Instagram Reels creators covers how to judge Reels craft. For short-form ad assets you'll own and run yourself, finding UGC creators is the better starting point.",
        links: [
          { text: "finding Instagram Reels creators", href: "/blog/find-instagram-reels-creators" },
          { text: "finding UGC creators", href: "/blog/how-to-find-ugc-creators" },
        ],
      },
      { type: "heading", text: "Match the creator to the Short you need", id: "match-creator-to-format" },
      {
        type: "paragraph",
        text: "A creator's usual format matters as much as their numbers. Before you send a brief, match what you need to what the creator already does well:",
      },
      {
        type: "table",
        headers: ["Short you need", "Creator who usually fits", "What to check on their channel"],
        rows: [
          ["Quick demo or reveal (under 30 seconds)", "Shorts-native creators with fast hooks", "Strong first second, product visible early"],
          ["Explainer or tutorial (one to three minutes)", "Long-form creators who also post Shorts", "Clear voice-over, viewers asking follow-up questions"],
          ["Trend or skit with the product", "Comedy and trend-led Shorts creators", "Past brand skits that didn't feel forced"],
          ["Teaser that drives to a full review", "Reviewers with an active Shorts tab", "Shorts that already point to their longer videos"],
        ],
      },
      {
        type: "paragraph",
        text: "If you're unsure whether a product needs Shorts, long-form or both, our comparison of YouTube Shorts and long-form videos explains how the two formats behave, from the creator's side.",
        links: [{ text: "comparison of YouTube Shorts and long-form videos", href: "/blog/youtube-shorts-vs-long-form" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Choosing Shorts creators by subscriber count.",
          "Judging a channel by its popular Shorts instead of its latest ones.",
          "Treating public view counts as watched-through views; ask for engaged views.",
          "Booking a channel whose audience is mostly outside India for an India-only product.",
          "Ignoring usage rights when a creator cross-posts the same video to Reels.",
          "Briefing a two-minute explainer to a creator whose strength is ten-second gags, or the other way round.",
          "Putting the whole budget on one creator without a test round.",
        ],
      },
      { type: "heading", text: "Final thoughts", id: "conclusion" },
      {
        type: "paragraph",
        text: "Shorts creators are best found the way the feed finds them: by topic, by repetition and by what people keep watching. Use public numbers to build a longlist, Studio screenshots to check audience and watch quality, and a small paid test to decide who earns a bigger brief. If you'd rather have a team source, brief and report on Shorts and long-form creators together, Kudozz's YouTube influencer marketing service runs both.",
        links: [{ text: "YouTube influencer marketing service", href: "/services/youtube-influencer-marketing" }],
      },
    ],
    faqs: [
      {
        question: "How long can a YouTube Short be?",
        answer:
          "YouTube treats vertical or square videos of up to three minutes as Shorts. Many brand Shorts are much shorter, so agree the length in the brief and check that the creator's style suits it.",
      },
      {
        question: "What is the difference between views and engaged views on Shorts?",
        answer:
          "Since March 2025, a Shorts view is counted each time a Short starts to play or replays, with no minimum watch time. Engaged views keep the older, stricter method and are visible in YouTube Studio. For brand decisions, ask creators for both.",
      },
      {
        question: "Can we ask Shorts creators to post the same video on Instagram Reels?",
        answer:
          "Yes, if it is agreed and priced up front. Cross-posting is common, but it is a second placement with its own audience, so list both platforms, disclosure requirements and how long the brand can reuse the video in the contract.",
      },
      {
        question: "Are faceless Shorts channels worth using for brands?",
        answer:
          "Occasionally, for reach. The risks are unclear ownership of the footage they post, weaker audience trust and brand safety. Check what else the channel posts and who owns it before including it.",
      },
      {
        question: "Does Kudozz Discovery search YouTube Shorts creators?",
        answer:
          "No. Kudozz Discovery covers Instagram creators in India only. It is useful for finding short-form creators who post Reels, many of whom also post Shorts, but their YouTube channels need to be checked on YouTube itself.",
      },
    ],
  },

  // #34 UPGRADE (originally published 2026-09-17)
  {
    slug: "how-to-find-podcasts-and-podcast-creators",
    category: "Campaign Strategy",
    title: "How to Find Podcast Hosts and Creators for Brand Partnerships",
    seoTitle: "How to Find Podcast Creators for Brand Partnerships",
    excerpt:
      "Chart rankings tell you which shows are popular, not which ones your customers listen to. How to decide what kind of podcast partner you need, where to find hosts in India and what audience proof to ask for.",
    metaDescription:
      "Find podcast hosts for brand partnerships in India: pick the partnership type, search beyond the charts, score fit and ask for the right listener proof.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-09-17",
    updatedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "8 min read",
    tags: ["Podcast Creators", "Podcast Sponsorships", "Creator Discovery", "India"],
    related: [
      "podcast-influencer-marketing-india",
      "how-to-choose-the-right-podcast",
      "podcast-audience-analytics",
      "how-to-find-linkedin-influencers",
    ],
    hero: {
      src: "/blog/discovery/how-to-find-podcasts-and-podcast-creators.svg",
      alt: "Table matching four podcast partnership types to where to find the show and which listener proof to request, under an audio waveform",
    },
    discoveryCta: {
      headline: "Find the Podcasters Who Also Post on Instagram",
      body: "Kudozz Discovery doesn't search Spotify, Apple Podcasts or YouTube. Many podcast hosts run Instagram pages for clips, so you can filter Indian Instagram creators by niche, language and engagement and save the hosts worth a closer listen into a list.",
    },
    body: [
      {
        type: "paragraph",
        text: "The most common way brands pick a podcast is to open a chart, start at number one and work down until someone replies. It feels rigorous and usually isn't. A chart tells you which shows are popular this week; it doesn't tell you whether your customers listen to any of them. A tightly focused show whose listeners closely match your buyer is usually a better partner than a much bigger show with a broad, loosely related audience.",
      },
      {
        type: "paragraph",
        text: "This guide covers how to decide what kind of podcast partner you need, where to find shows and hosts in India, how to score them and what listener proof to ask for. A note before we start: Kudozz Discovery, our creator discovery tool, searches Instagram creators only. It does not search Spotify, Apple Podcasts, YouTube or any podcast directory, so most of this process happens on the podcast platforms themselves.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "First decide the partnership type: a host-read sponsorship, a guest appearance, a co-created series or a clip-led deal. Then search podcast apps and YouTube by topic, follow guests from show to show, ask customers what they listen to, note which shows competitors sponsor and look at production networks. Score shows on audience fit, niche relevance, host credibility and consistency before scale. Ask shortlisted hosts for listener analytics from their hosting platform, Spotify for Creators and YouTube Studio, and treat download totals as one input, not the deciding one.",
      },
      { type: "heading", text: "Decide what kind of podcast partner you need", id: "partnership-types" },
      {
        type: "paragraph",
        text: "\"Podcast creator\" covers very different deals, and each one changes who you should look for.",
      },
      {
        type: "table",
        headers: ["Partnership type", "What you're buying", "Look for"],
        rows: [
          ["Host-read sponsorship", "The host talking about your product in their own words", "Hosts whose listeners trust their recommendations; consistent publishing"],
          ["Guest appearance", "Your founder or expert in conversation on the show", "Shows whose guests resemble your expert and whose listeners are your buyers"],
          ["Co-created or branded series", "A season or segment made with the host or production team", "Hosts with production capacity and a track record of finished seasons"],
          ["Clip-led partnership", "Video podcast clips on YouTube, Instagram and LinkedIn", "Shows with a strong clip operation and engaged short-form accounts"],
          ["Creator who also podcasts", "A creator whose podcast is one channel among several", "Fit across their whole presence, not just the show"],
        ],
      },
      {
        type: "paragraph",
        text: "If your goal is getting a founder onto shows rather than buying ad reads, our guide to podcast guest marketing covers the pitch side. For the mechanics of ad reads, see host-read podcast ads.",
        links: [
          { text: "podcast guest marketing", href: "/blog/podcast-guest-marketing" },
          { text: "host-read podcast ads", href: "/blog/host-read-podcast-ads" },
        ],
      },
      { type: "heading", text: "Know the kinds of shows you'll meet in India", id: "indian-podcast-landscape" },
      {
        type: "list",
        items: [
          "Video-first interview shows, often published in full on YouTube and cut into clips for Instagram and Shorts.",
          "Audio-first storytelling, comedy and narrative shows, found mainly on audio apps such as Spotify, Apple Podcasts, JioSaavn and Amazon Music.",
          "Niche expert shows on personal finance, startups, health, parenting, careers, law or tech, often small but closely followed.",
          "Regional-language shows in Hindi, Tamil, Marathi, Bengali, Malayalam and other languages, which can reach audiences English-language shows miss.",
          "Shows produced by networks or production houses, where the commercial conversation may be with the network rather than the host.",
        ],
      },
      {
        type: "paragraph",
        text: "The type affects how you evaluate the show. A video-first show's reach is spread across YouTube views, audio listens and clips, while an audio-first show's numbers live almost entirely in its hosting dashboard.",
      },
      { type: "heading", text: "Where to find podcasts and hosts", id: "where-to-find" },
      { type: "subheading", text: "Platform search, used for discovery rather than ranking" },
      {
        type: "paragraph",
        text: "Search Spotify, Apple Podcasts and YouTube by the topics your buyer cares about (\"mutual funds for beginners\", \"startup hiring\", \"new parents\"), in English and the languages you sell in. Category charts are fine for spotting names; just don't treat position as a measure of fit.",
      },
      { type: "subheading", text: "Follow the guests" },
      {
        type: "paragraph",
        text: "Pick a guest who is exactly the kind of expert your buyer respects and look up every show they've appeared on. Then do the same for two or three others. The shows that keep recurring are where your category's conversations happen.",
      },
      { type: "subheading", text: "Ask your customers" },
      {
        type: "paragraph",
        text: "A one-question survey (\"Which podcasts or YouTube shows do you listen to regularly?\") in an order email, a customer WhatsApp group or a sales call often surfaces shows no chart would. Say a Kochi Ayurveda brand asks fifty repeat buyers and three small Malayalam wellness shows keep coming up; that list beats any leaderboard.",
      },
      { type: "subheading", text: "Listen for competitor sponsors" },
      {
        type: "paragraph",
        text: "Listen to recent episodes in your category and note which brands are being read. A show that already carries comparable sponsors knows how to integrate one; a show with no sponsors may be cheaper but will need more help.",
      },
      { type: "subheading", text: "Networks, producers and agencies" },
      {
        type: "paragraph",
        text: "Production houses and networks represent several shows at once and can package them. Agencies with podcast relationships shorten the process further. Both are faster than cold outreach; check that the shows they suggest actually fit, not just that they're available.",
      },
      { type: "subheading", text: "Clip accounts on Instagram, YouTube and LinkedIn" },
      {
        type: "paragraph",
        text: "Many hosts promote their shows through short clips. Browsing clips in your niche is a quick way to hear a host's style and see how listeners react in the comments. For B2B shows, LinkedIn is often where hosts and guests share episodes; our guide to finding LinkedIn creators covers that platform.",
        links: [{ text: "finding LinkedIn creators", href: "/blog/how-to-find-linkedin-influencers" }],
      },
      { type: "heading", text: "The Instagram side of a podcast search", id: "instagram-side" },
      {
        type: "paragraph",
        text: "Because many podcast hosts also run Instagram accounts for clips and community, Instagram can be a useful second lens. Kudozz Discovery covers that layer only: you can filter Indian Instagram creators by niche (Finance & Business, Education, Health & Fitness, Entertainment & Comedy and others), language, city and engagement rate, check whether a creator has an email or phone available, and save candidates into a list. It won't show you podcast downloads or listener data. Use it to find hosts and creators whose Instagram presence suggests a show worth hearing, then do the listening and evaluation on the podcast platforms.",
      },
      {
        type: "discovery-cta",
        headline: "Find Podcast Hosts Through Their Instagram Clips",
        body: "Kudozz Discovery searches Instagram creators in India, not podcast apps. Filter by niche, language and engagement to spot hosts promoting their shows on Instagram, and save them into a list before you listen to full episodes.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "How to evaluate a show", id: "evaluation" },
      {
        type: "paragraph",
        text: "Listen to at least two full recent episodes before you score anything. Then rate each show on the factors below, weighting audience fit, niche relevance and host credibility most heavily.",
      },
      {
        type: "table",
        headers: ["Factor", "What to check"],
        rows: [
          ["Audience fit", "Whether listeners resemble your buyer in role, life stage, city and income"],
          ["Niche relevance", "Whether your category comes up naturally in the show's regular topics"],
          ["Host credibility", "Real standing in the niche; listeners quote the host, not just the guests"],
          ["Language and geography", "Show language and listener locations match where you sell"],
          ["Consistency", "Regular publishing over recent months, not a burst and a long gap"],
          ["Engagement", "Comments on video episodes and clips, community activity, listener questions"],
          ["Past sponsors", "Which categories have sponsored the show and how reads were handled"],
          ["Brand safety", "Episode history and host conduct you'd be comfortable sitting next to"],
          ["Commercial fit", "Rates and deliverables relative to your budget and objective"],
        ],
      },
      {
        type: "paragraph",
        text: "Downloads are useful for gauging scale once fit is established. On their own they don't tell you whether an episode was listened to through to your ad, or whether the listeners are anywhere near your buyer. Our guide on how to choose the right podcast goes deeper on the decision once you have a scored shortlist.",
        links: [{ text: "how to choose the right podcast", href: "/blog/how-to-choose-the-right-podcast" }],
      },
      { type: "heading", text: "What listener proof to ask for", id: "listener-proof" },
      {
        type: "paragraph",
        text: "Podcast audience data is fragmented across platforms, so ask for screenshots from each place the show publishes:",
      },
      {
        type: "list",
        items: [
          "Hosting platform: per-episode downloads over a fixed period (for example, the first 30 days) for recent episodes, not lifetime totals.",
          "Spotify for Creators: listener locations, and age and gender where shown. These demographics cover Spotify listeners only, not the whole audience.",
          "YouTube Studio for video episodes: views, watch time, average view duration and audience geography, age and gender.",
          "Clip accounts: Instagram Insights or YouTube Studio screenshots for the short-form clips if they're part of the deal.",
          "Any listener survey the host has run, with the date and number of responses.",
        ],
      },
      {
        type: "paragraph",
        text: "Treat each as a partial view. No single dashboard shows the full audience, and none can prove a specific ad read was heard. Our guide to podcast audience analytics explains how to read these numbers and what to be sceptical about.",
        links: [{ text: "podcast audience analytics", href: "/blog/podcast-audience-analytics" }],
      },
      {
        type: "template",
        label: "First message to a podcast host",
        text: "Hi [Host name], I've been listening to [show], especially the episode on [topic]. I'm [Your name] from [Brand]; we [one line on what you do] for [your customer].\n\nWe're exploring a [host-read sponsorship / guest appearance / short series] in [month]. Could you share your rates and recent listener data: per-episode downloads for the last few episodes, listener locations and any audience breakdown from Spotify for Creators or YouTube Studio?\n\nHappy to share more about the product and what we'd want to say.",
      },
      {
        type: "paragraph",
        text: "From there, move to pricing and outreach: our guides to podcast influencer outreach and podcast influencer marketing costs in India pick up the process.",
        links: [
          { text: "podcast influencer outreach", href: "/blog/podcast-influencer-outreach" },
          { text: "podcast influencer marketing costs in India", href: "/blog/podcast-influencer-marketing-costs-india" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Starting from chart positions instead of from who your customer is.",
          "Comparing shows on lifetime downloads, which favour old shows over active ones.",
          "Scoring a show without listening to full episodes.",
          "Treating Spotify demographics as the whole audience when they cover Spotify listeners only.",
          "Ignoring regional-language shows for brands that sell mostly outside metros.",
          "Choosing the partnership type after the show, so a great guest-booking show gets a clumsy ad read.",
          "Negotiating with a host when the commercial rights sit with a network, or the other way round.",
        ],
      },
      { type: "heading", text: "Bringing it together", id: "conclusion" },
      {
        type: "paragraph",
        text: "Finding the right podcast partner starts with the deal you want, then the listener you need, and only then the show. Search by topic and guest trails, ask customers, listen properly and collect proof from every platform the show lives on. For the wider campaign plan around podcasts, our complete guide to podcast influencer marketing for Indian brands covers strategy and measurement, and Kudozz's creator discovery team can build and vet a podcast shortlist if you'd rather hand it off.",
        links: [
          { text: "podcast influencer marketing for Indian brands", href: "/blog/podcast-influencer-marketing-india" },
          { text: "creator discovery team", href: "/services/creator-discovery" },
        ],
      },
    ],
    faqs: [
      {
        question: "Is a podcast with more downloads always the better sponsorship?",
        answer:
          "No. Downloads show scale, not fit, and they don't confirm that an episode was played through to your ad. A smaller show whose listeners closely match your buyer usually delivers more relevant attention per rupee.",
      },
      {
        question: "Should brands sponsor video podcasts or audio-only shows?",
        answer:
          "It depends on the goal. Video podcasts give you visual integration and clips that travel on YouTube and Instagram; audio-only shows often have loyal, habitual listeners. Evaluate each show's audience on every platform it publishes on rather than choosing a format first.",
      },
      {
        question: "How many podcasts should be on a shortlist?",
        answer:
          "As a rule of thumb, eight to twelve scored shows for a typical campaign leaves room for hosts who don't reply or turn out to be a poor fit, without making outreach unmanageable.",
      },
      {
        question: "Can small or new podcasts be good partners?",
        answer:
          "Yes, if the audience fit is strong and the host publishes consistently. Small niche shows often have closer relationships with listeners and lower rates. Ask for listener data anyway, and consider a short test before a long commitment.",
      },
      {
        question: "Does Kudozz Discovery search podcasts?",
        answer:
          "No. Kudozz Discovery covers Instagram creators in India only. It can help you find hosts and creators who promote their shows on Instagram, but podcast listening data and show research have to happen on the podcast platforms.",
      },
    ],
  },

  // #35 NEW
  {
    slug: "find-gaming-influencers-streamers",
    category: "Influencer Marketing",
    title: "How to Find Gaming Influencers and Streamers for Brand Collaborations",
    seoTitle: "How to Find Gaming Influencers and Streamers | Kudozz",
    excerpt:
      "Gaming audiences follow games and personalities, not \"gaming\" in general. How to map the game, platform and creator type you need, find streamers in India and vet a live channel before you book.",
    metaDescription:
      "Find gaming influencers and streamers in India: map game, platform and format, search YouTube, Twitch, Loco and Rooter, and vet streams before you book.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "8 min read",
    tags: ["Gaming Influencers", "Streamers", "Creator Discovery", "India"],
    related: [
      "gaming-influencer-marketing-india",
      "find-youtube-shorts-creators",
      "find-tech-influencers-gadgets-electronics",
      "how-to-research-influencers",
    ],
    hero: {
      src: "/blog/discovery/find-gaming-influencers-streamers.svg",
      alt: "Three-column map from game and genre to platform to creator format, above a strip of live-stream checks such as average viewers, chat quality, schedule and conduct",
    },
    discoveryCta: {
      headline: "Find Gaming Creators on Instagram",
      body: "Kudozz Discovery doesn't search Twitch, YouTube Live, Loco or Rooter. For the Instagram side of a gaming campaign, filter Indian Instagram creators by the Gaming niche, language, city and average views, and save candidates into a list.",
    },
    body: [
      {
        type: "paragraph",
        text: "Is your audience watching someone play, or watching someone talk about games? That one question splits gaming creators into very different groups, and most sourcing mistakes start from skipping it. A snack brand that wants to be part of late-night BGMI streams needs a different creator from a phone brand that wants a frame-rate test, and both need someone different from a publisher launching a cosy mobile puzzle game.",
      },
      {
        type: "paragraph",
        text: "This guide covers the kinds of gaming creator, how to start from the game rather than the category, where to find streamers and creators in India, how to vet a live channel and the guardrails to set before you book. Kudozz Discovery, our creator discovery tool, searches Instagram creators only, with a Gaming niche filter. It does not search YouTube, Twitch, Loco, Rooter or Discord, so most streamer research happens on those platforms directly.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Start with the game or genre your audience plays, then the platform they watch it on, then the creator format (live streams, edited videos, short clips, reviews or esports). Search YouTube and its live streams, Twitch, Indian streaming apps such as Loco and Rooter, Instagram and community spaces like Discord. Vet streamers on typical concurrent viewers rather than peaks, chat quality, schedule consistency, language and on-stream conduct. Ask for dashboard screenshots before booking, check the audience age, and stay clear of real-money gaming promotions.",
      },
      { type: "heading", text: "The kinds of gaming creator", id: "gaming-creator-types" },
      {
        type: "table",
        headers: ["Creator type", "What they make", "Good for"],
        rows: [
          ["Live streamers", "Long live sessions with chat, often daily", "Sustained presence, in-stream integrations, community feel"],
          ["Gameplay video creators", "Edited gameplay, challenges, series", "Game launches, evergreen views on YouTube"],
          ["Short-form gaming creators", "Clips, funny moments, tips on Reels and Shorts", "Reach, launch-week buzz, non-gaming brands"],
          ["Reviewers and news creators", "Game reviews, updates, patch explainers", "Credibility for new titles and updates"],
          ["Esports players and team creators", "Competitive play, team content, tournaments", "Competitive titles, hardware, performance claims"],
          ["Setup and hardware creators", "Rigs, peripherals, phones tested for gaming", "Gaming phones, monitors, accessories"],
          ["Casual and mobile gaming creators", "Puzzle, simulation, cosy and casual titles", "Broader and often older or mixed audiences"],
          ["Community hosts", "Discord servers, tournaments, scrims", "Grassroots launches, feedback, beta tests"],
        ],
      },
      {
        type: "paragraph",
        text: "Hardware brands overlap with the tech category; our guide to finding tech influencers for gadgets and electronics covers reviewer types and embargoes for those products.",
        links: [{ text: "finding tech influencers for gadgets and electronics", href: "/blog/find-tech-influencers-gadgets-electronics" }],
      },
      { type: "heading", text: "Start from the game, not from \"gaming\"", id: "start-from-the-game" },
      {
        type: "paragraph",
        text: "Gaming audiences follow specific titles and specific people. A BGMI audience, a Valorant audience, a Free Fire audience and a Minecraft audience overlap less than you'd expect, and a mobile battle royale streamer's viewers may never watch a PC strategy creator. Before searching, write down:",
      },
      {
        type: "list",
        items: [
          "Which games or genres your audience plays: battle royale, shooters, sports and cricket titles, open-world, casual mobile, simulation.",
          "The device: mobile, PC or console. In India, a large share of gaming content centres on mobile titles, so don't default to PC.",
          "The language: many Indian gaming streams run in Hindi or Hinglish, with growing Tamil, Telugu, Bengali and other regional streamers.",
          "The format your product suits: an in-stream mention, a dedicated video, a short clip, a tournament sponsorship.",
          "Whether you are endemic (a game, a gaming phone, peripherals) or non-endemic (snacks, drinks, bikes, apparel, finance), which changes how integrations should feel.",
        ],
      },
      {
        type: "paragraph",
        text: "Say a Bengaluru energy-drink brand wants students playing late at night. That points to evening and night live streams of popular mobile shooters, Hindi and Kannada creators, and in-stream moments rather than polished ads.",
      },
      { type: "heading", text: "Where to find gaming creators and streamers", id: "where-to-find" },
      { type: "subheading", text: "YouTube, including live streams" },
      {
        type: "paragraph",
        text: "YouTube carries a large share of Indian gaming content: edited videos, Shorts and live streams. Search by game name plus language (\"BGMI live Hindi\", \"Minecraft Tamil\"), browse live streams in the evening when many Indian creators go live, and note who keeps appearing. For short-form gaming clips, our guide to finding YouTube Shorts creators covers how to read Shorts numbers.",
        links: [{ text: "finding YouTube Shorts creators", href: "/blog/find-youtube-shorts-creators" }],
      },
      { type: "subheading", text: "Twitch" },
      {
        type: "paragraph",
        text: "Twitch is available in India and has a smaller but committed set of Indian streamers, more often around PC titles and English or Hinglish streams. Browse by game category and filter by language where the option is available.",
      },
      { type: "subheading", text: "Loco and Rooter" },
      {
        type: "paragraph",
        text: "Loco and Rooter are India-focused game streaming apps with their own streamer communities, many centred on mobile esports titles and Indian languages. Browse the games your audience plays and note streamers with regular schedules and active chats. Some streamers also stream on YouTube, so check where each one's main audience actually sits.",
      },
      { type: "subheading", text: "Instagram" },
      {
        type: "paragraph",
        text: "Most streamers and gaming creators post clips, highlights and announcements on Instagram, and some creators are primarily Instagram-based. It is also where non-gaming brands often find gaming creators who already appeal to a wider audience.",
      },
      { type: "subheading", text: "Discord, esports teams and tournaments" },
      {
        type: "paragraph",
        text: "Discord servers, tournament organisers and esports organisations with creator rosters can introduce several creators at once. Team creators bring credibility with competitive players; community hosts bring the grassroots audience that turns up for launches and beta tests.",
      },
      { type: "heading", text: "The Instagram side: where Kudozz Discovery fits", id: "instagram-side" },
      {
        type: "paragraph",
        text: "Kudozz Discovery won't find you a Twitch or Loco streamer by their streaming stats. It covers Indian Instagram creators, and its Gaming niche filter, combined with language, city, gender, follower band and minimum average views, is a quick way to build a list of gaming creators whose Instagram clips already get watched. Open each profile to see averages, engagement rate and posting frequency, then follow the links in their bios to their streams and channels and do the live vetting there.",
      },
      {
        type: "discovery-cta",
        headline: "Search Instagram Gaming Creators by Language and Views",
        body: "Kudozz Discovery's Gaming niche filter covers Instagram creators in India. Combine it with language, city and average views to build a list, then vet each creator's streams on the platforms they broadcast on.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "How to vet a streamer", id: "vet-a-streamer" },
      {
        type: "paragraph",
        text: "Streams are long and unedited, which is both their value and their risk. Watch at least two full recent streams (or long sections of the recordings) and check:",
      },
      {
        type: "list",
        items: [
          "Typical concurrent viewers across ordinary streams, not the peak from one big night or a raid.",
          "Chat: real conversation and in-jokes, or a stream of bots and copy-paste messages?",
          "Schedule: regular days and times your target audience is awake for.",
          "Recording views: how many people watch the VOD or highlights afterwards.",
          "Conduct: language, how they treat chat and opponents, and anything you couldn't put your brand next to. Trash talk is part of gaming culture; slurs and harassment are not.",
          "Moderation: whether the chat is moderated, since your brand will sit next to it.",
          "Past sponsorships: how they integrated brands mid-stream and whether chat reacted well or mocked it.",
        ],
      },
      {
        type: "paragraph",
        text: "Then ask for proof from the streamer's own dashboards: average and peak concurrent viewers, hours watched and audience geography and age where the platform shows them (YouTube Studio does; other platforms vary). For Instagram clips, ask for Instagram Insights screenshots. Our guide to researching influencers before approaching them covers the wider background checks.",
        links: [{ text: "researching influencers before approaching them", href: "/blog/how-to-research-influencers" }],
      },
      {
        type: "template",
        label: "Data request for a streamer",
        text: "Hi [Name], we're planning a [product] campaign around [game] in [month] and your streams came up in our research. Before we send a proposal, could you share screenshots from the last 30 days of:\n\n1. Average and peak concurrent viewers, and hours watched\n2. Audience age and location, where your platform shows them\n3. Instagram Insights for two or three recent clips\n\nAlso, which days and times do you usually stream?",
      },
      { type: "heading", text: "Guardrails before you book", id: "guardrails" },
      {
        type: "list",
        items: [
          "Audience age: many gaming audiences include minors. Check age data, and don't use gaming creators to promote products unsuitable for younger viewers.",
          "Real-money gaming: India's Promotion and Regulation of Online Gaming Act, 2025 prohibits advertising and promoting online money games. Don't source creators for that category; esports and casual or social games are treated differently.",
          "Disclosure: sponsored segments in streams and videos need clear disclosure under ASCI's influencer guidelines, in a form live viewers will actually notice during the stream, not just a line in the description.",
          "Integration fit: non-endemic brands should brief light, natural moments rather than long scripted reads that interrupt play.",
          "Exclusivity: check whether the streamer is tied to a platform, team or sponsor that blocks your category.",
        ],
      },
      {
        type: "paragraph",
        text: "Our gaming and esports influencer marketing guide covers the Act, campaign formats and measurement in more detail.",
        links: [{ text: "gaming and esports influencer marketing guide", href: "/blog/gaming-influencer-marketing-india" }],
      },
      { type: "heading", text: "Build a balanced gaming roster", id: "balanced-roster" },
      {
        type: "paragraph",
        text: "One big streamer is a single point of failure: a cancelled stream, a bad night in chat or a rival sponsor and your campaign stalls. Most gaming campaigns work better with a mix of roles, as a rule of thumb rather than a formula:",
      },
      {
        type: "table",
        headers: ["Role in the roster", "Creator type", "Why it helps"],
        rows: [
          ["Anchor", "One or two established streamers in your core game", "Credibility and a central moment, such as a launch stream"],
          ["Reach", "Several short-form gaming creators", "Clips that travel beyond the live audience"],
          ["Depth", "A reviewer or esports creator", "Detail for players who compare before trying"],
          ["Community", "Discord hosts or smaller regional-language streamers", "Grassroots trust and feedback in specific languages"],
        ],
      },
      {
        type: "paragraph",
        text: "Keep backups for each role, because streamer schedules change. If audience age or location matters to your product, our guide to finding influencers whose audience matches your ideal customer explains how to set up the proof requests, and our step-by-step shortlisting guide covers turning research into a final list.",
        links: [
          { text: "finding influencers whose audience matches your ideal customer", href: "/blog/find-influencers-matching-target-audience" },
          { text: "step-by-step shortlisting guide", href: "/blog/influencer-shortlist" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Treating \"gaming\" as one audience instead of starting from specific games and devices.",
          "Judging streamers by follower count or one peak-viewer screenshot.",
          "Booking without watching full streams, then discovering conduct problems live.",
          "Defaulting to English and PC when the audience plays mobile titles in Hindi or regional languages.",
          "Scripting long, stiff reads that chat mocks and viewers skip.",
          "Ignoring audience age for products aimed at adults.",
          "Assuming a creator is big on every platform; their main audience may sit on only one.",
        ],
      },
      { type: "heading", text: "Final thoughts", id: "conclusion" },
      {
        type: "paragraph",
        text: "Gaming creators are found through games, platforms and formats, in that order. Map what your audience plays and watches, search where those streams happen, vet streams in full and collect dashboard proof before you book. Treat Instagram as the visible layer where many gaming creators share clips, and do the live vetting on the streaming platforms themselves. If you'd rather hand off sourcing and stream monitoring, Kudozz's influencer marketing team can run the campaign with you.",
        links: [{ text: "influencer marketing team", href: "/services/influencer-marketing" }],
      },
    ],
    faqs: [
      {
        question: "Should a non-gaming brand work with gaming creators?",
        answer:
          "It can, if the audience matches. Snacks, drinks, phones, apparel and two-wheelers often fit gaming audiences. Keep integrations light and natural, check audience age, and choose creators whose personality suits your brand rather than only the biggest channels.",
      },
      {
        question: "What's the difference between average and peak concurrent viewers?",
        answer:
          "Peak is the highest number of people watching at once during a stream; average is the typical number across the session. Average is the better planning number, because peaks can come from raids, events or one viral moment.",
      },
      {
        question: "Which platforms do Indian gaming streamers use?",
        answer:
          "YouTube (videos, Shorts and live streams) is widely used, alongside Twitch and India-focused streaming apps such as Loco and Rooter. Most streamers also post clips on Instagram. Check where each creator's main audience sits rather than assuming one platform.",
      },
      {
        question: "Can gaming creators promote fantasy sports or real-money games?",
        answer:
          "India's Promotion and Regulation of Online Gaming Act, 2025 prohibits advertising and promoting online money games, which includes influencer promotion. Get legal advice on any campaign near that category; esports and casual or social games are treated differently.",
      },
      {
        question: "Does Kudozz Discovery cover Twitch, Loco or YouTube streamers?",
        answer:
          "No. Kudozz Discovery covers Instagram creators in India only. It has a Gaming niche filter for Instagram creators, which helps you find gaming creators whose clips perform there, but streaming metrics have to be checked on each streaming platform.",
      },
    ],
  },
];
