import type { BlogPost } from "@/content/blog";
import { AUTHOR, GCC5_PUBLISHED, GCC_LANGUAGE, GCC_PLAYBOOK, GCC_REVIEWED, REVIEW_DATE_TEXT, SRC } from "@/content/gcc-guides/shared";

/**
 * Batch 1500–1519: industry guides with distinct GCC substance. FMCG (1503, with quick commerce 1507),
 * sustainable brands (1506), film and streaming (1509), sports (1510), watches and jewellery (1512) and
 * nonprofits (1514). Buyer guides only. See docs/gcc-1500-1519-audit.md.
 */
export const gccVerticalPosts: BlogPost[] = [
  // 1503 (+1507)
  {
    slug: "fmcg-influencer-marketing-uae-saudi-arabia",
    category: "Influencer Marketing",
    title: "Influencer Marketing for FMCG Brands in the UAE and Saudi Arabia",
    seoTitle: "FMCG Influencer Marketing in the UAE and Saudi Arabia",
    excerpt:
      "How food, beverage, household and personal care brands can use creators in the UAE and Saudi Arabia: the roles creators play in a fast-moving category, food and health claim rules in each market, Ramadan and household moments, hypermarket and quick-commerce activation, and measuring sales when most of them happen offline.",
    metaDescription:
      "FMCG influencer marketing in the UAE and Saudi Arabia: creator roles, food and health claims, Ramadan, retail and quick-commerce activation, and sales tracking.",
    author: AUTHOR,
    publishedAt: GCC5_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "12 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "United Arab Emirates and Saudi Arabia",
    breadcrumbParents: [GCC_PLAYBOOK],
    tags: ["FMCG influencer marketing UAE", "FMCG influencer marketing Saudi Arabia", "food brand influencers Dubai", "quick commerce influencer marketing UAE"],
    related: ["retail-influencer-marketing-gcc", "ramadan-influencer-marketing-uae", "influencer-marketing-ecommerce-brands-saudi-arabia"],
    hero: {
      src: "/blog/gcc-guides/fmcg-influencer-marketing-uae-saudi-arabia.svg",
      alt: "FMCG creator campaign: approved claims, household moments, recipes and routines, hypermarket and quick-commerce links, sales against baseline",
    },
    body: [
      {
        type: "paragraph",
        text: "FMCG (fast-moving consumer goods) brands sell low-priced products that people buy often: snacks, drinks, dairy, household cleaning, baby care and personal care. In the UAE and Saudi Arabia most of those purchases still happen in hypermarkets, supermarkets and neighborhood stores, with a growing share through delivery apps. Creators help by putting products into everyday routines that shoppers recognize. This guide is for brand managers and trade marketing teams planning creator activity across both markets.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "FMCG influencer marketing in the UAE and Saudi Arabia works when creators show products inside real routines (cooking, cleaning, school lunches, iftar tables) for audiences in the right country and language, around moments when baskets change, especially Ramadan. Check food and health claims before creators repeat them: Saudi Arabia's food regulator lists foodstuffs among products needing approval before advertising, and the UAE has acted against unapproved health claims on social media. Link content to where people buy, from hypermarket offers to quick-commerce apps, and judge results on sales against a baseline rather than views.",
      },
      { type: "heading", text: "What creators do for FMCG brands", id: "roles" },
      {
        type: "table",
        headers: ["Role", "Creator content", "Measure"],
        rows: [
          ["Usage and recipes", "Recipes, cleaning hacks, lunchbox ideas built around the product", "Saves, shares, recipe page visits"],
          ["Launches and flavours", "First tastes, comparisons, limited editions", "Trial: first purchases, sampling uptake"],
          ["Seasonal baskets", "Iftar tables, Eid hosting, back-to-school", "Seasonal sales of featured lines"],
          ["Retail activation", "Where to find it, in-store offers, hypermarket hauls", "Sales in featured retailers vs others"],
          ["Delivery apps", "Order-now content with app links or codes", "Code redemptions and orders"],
          ["Reassurance", "Ingredients, halal status, how it's made", "Comment sentiment, fewer objections"],
        ],
      },
      { type: "heading", text: "Claims rules in each market", id: "claims" },
      {
        type: "paragraph",
        text: `Reviewed ${REVIEW_DATE_TEXT}. Not legal advice. In Saudi Arabia, the Saudi Food and Drug Authority (SFDA) lists foodstuffs among the products that must not be advertised without its prior approval, alongside non-prescription medicines and medical devices. In the UAE, the Media Council summoned an advertiser in 2025 over a social media promotion making medical and therapeutic claims without approval from the health authority. Abu Dhabi announced in February 2026 a ban on fast-food advertising across the emirate and restrictions on marketing products high in fat, sugar and salt, particularly where children could be influenced.`,
        links: [
          { text: "lists foodstuffs among the products", href: SRC.sfdaPriorApproval.url },
          { text: "summoned an advertiser in 2025", href: SRC.mediaCouncilHealthClaims.url },
          { text: "Abu Dhabi announced in February 2026", href: SRC.abuDhabiFastFood.url },
        ],
      },
      {
        type: "list",
        items: [
          "Give creators an approved-claims sheet: what the product does, ingredients, halal status and nutrition statements you can prove",
          "No health or therapeutic claims ('boosts immunity', 'detox', 'cures') without the relevant approval",
          "Check product registration and labelling in each market before seeding",
          "For snacks, sweets and sugary drinks, avoid creators with child-heavy audiences and check Abu Dhabi's restrictions",
          "Get promotion permits before creators announce discounts, contests or giveaways (Saudi Ministry of Commerce, Dubai DET)",
        ],
      },
      { type: "heading", text: "Moments that move baskets", id: "moments" },
      {
        type: "table",
        headers: ["Moment", "Planning note"],
        rows: [
          ["Ramadan and Eid al-Fitr", "The biggest shift in food and household baskets; brief creators before Ramadan begins, not during it"],
          ["Eid al-Adha", "Family hosting and gifting"],
          ["Back to school", "Lunchboxes, snacks, laundry and hygiene"],
          ["Summer", "Hydration, cooling drinks, travel-size products"],
          ["National days and sales seasons", "Retailer promotions; coordinate with trade marketing"],
        ],
      },
      {
        type: "paragraph",
        text: "Ramadan timing and tone are covered in Ramadan influencer marketing in the UAE.",
        links: [{ text: "Ramadan influencer marketing in the UAE", href: "/blog/ramadan-influencer-marketing-uae" }],
      },
      { type: "heading", text: "Hypermarkets, stores and quick commerce", id: "channels" },
      {
        type: "paragraph",
        text: "Creator content only sells FMCG if the product is easy to find. Align creator timing with retailer promotions and shelf availability, and tell creators where the product is sold in each city. Grocery delivery and quick-commerce apps, which promise delivery within minutes, add a direct route: a creator can show the product and link straight to an order.",
      },
      {
        type: "table",
        headers: ["Route", "Creator mechanic", "What to agree first"],
        rows: [
          ["Hypermarket or supermarket", "'Find it at' content, in-store visits, retailer-specific offers", "Stock in featured stores; the retailer's approval for filming"],
          ["Quick-commerce and grocery apps", "Order links or app codes; 'what's in my basket' content", "Listing in each city, stock levels, app-specific promo mechanics"],
          ["Brand's own store", "Bundles or subscriptions with creator codes", "Delivery coverage and minimum order"],
        ],
      },
      {
        type: "paragraph",
        text: "If you are a grocery or quick-commerce platform rather than a brand, the app growth playbook in influencer marketing for mobile apps in the UAE is the closer match: installs, first orders and retention.",
        links: [{ text: "influencer marketing for mobile apps in the UAE", href: "/blog/mobile-app-influencer-marketing-uae" }],
      },
      { type: "heading", text: "Choosing creators", id: "creators" },
      {
        type: "list",
        items: [
          "Home cooks, family and parenting creators often suit everyday categories better than lifestyle celebrities",
          "Language and dialect by market: Saudi and Emirati Arabic for nationals; Egyptian or Levantine Arabic, English and South Asian languages for other communities",
          "Audience location by country, so UAE spend reaches UAE shoppers",
          "Several mid-sized creators per market rather than one national name, so content looks like real use",
        ],
      },
      { type: "heading", text: "Measuring sales", id: "measurement" },
      {
        type: "table",
        headers: ["Method", "How", "Limitation"],
        rows: [
          ["Retailer sales vs baseline", "Sales of featured lines in featured retailers vs the previous period and other retailers", "Promotions and seasonality interfere"],
          ["App and online codes", "Creator codes or links in delivery apps and online stores", "Undercounts in-store purchases"],
          ["Brand lift", "Exposed vs control surveys on awareness and consideration", "Needs budget; see our brand lift guide"],
          ["Household panel data", "Purchase panel data where you subscribe to it", "Cost; small samples in smaller markets"],
        ],
      },
      {
        type: "paragraph",
        text: "Survey-based measurement is covered in measuring influencer brand lift in the GCC, and store-level comparisons in retail influencer marketing in the GCC.",
        links: [
          { text: "measuring influencer brand lift in the GCC", href: "/blog/influencer-brand-lift-gcc" },
          { text: "retail influencer marketing in the GCC", href: "/blog/retail-influencer-marketing-gcc" },
        ],
      },
      {
        type: "paragraph",
        text: "Coordinating creators with marketplace, grocery-app and in-store advertising is covered in influencers and retail media in the GCC.",
        links: [
          { text: "influencers and retail media in the GCC", href: "/blog/retail-media-influencer-marketing-gcc" }
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Health claims in creator scripts that the product isn't approved to make",
          "Creator content running before stock reaches the featured stores",
          "One English script used in both markets",
          "Booking Ramadan creators after Ramadan has started",
          "Judging an FMCG campaign on engagement when the objective was sales",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "FMCG creator campaigns in the Gulf work when they're rooted in routines, timed to the moments baskets change, careful with claims and linked to where people actually buy. Plan with trade marketing, brief creators with an approved-claims sheet, and measure against sales, not just reach.",
      },
    ],
    faqs: [
      {
        question: "Do food ads by influencers need approval in Saudi Arabia?",
        answer:
          "The SFDA lists foodstuffs among products that must not be advertised without its prior approval. Check with the SFDA before creators publish food advertising, and keep claims to what's approved.",
      },
      {
        question: "How do FMCG brands measure influencer sales in the GCC?",
        answer:
          "Compare featured products' sales in featured retailers against a baseline, use creator codes in delivery apps and online stores, and add brand lift studies where budgets allow. Codes alone undercount in-store sales.",
      },
      {
        question: "Can quick-commerce apps be used in FMCG creator campaigns?",
        answer:
          "Yes. Creators can link to the product in a grocery or quick-commerce app or share an app code, provided the product is listed and in stock in each city the creator's audience lives in.",
      },
    ],
  },
  // 1506
  {
    slug: "sustainable-brands-influencer-marketing-gcc",
    category: "Influencer Marketing",
    title: "Influencer Marketing for Sustainable Brands in the GCC: Credible Claims and Creator Fit",
    seoTitle: "Influencer Marketing for Sustainable Brands in the GCC",
    excerpt:
      "How brands with environmental or social credentials can work with creators in the UAE, Saudi Arabia and other GCC markets without greenwashing: the legal position on green claims, a claims ladder from vague to specific, choosing credible creators, content that shows rather than asserts, and measuring trust.",
    metaDescription:
      "Sustainable brand influencer marketing in the GCC: green claims and the law, specific vs vague claims, credible creators and proof-led content.",
    author: AUTHOR,
    publishedAt: GCC5_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "10 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "Gulf Cooperation Council countries",
    breadcrumbParents: [GCC_PLAYBOOK],
    tags: ["sustainable brands influencer marketing GCC", "green claims UAE", "greenwashing influencers", "eco-friendly brand creators Dubai"],
    related: ["influencer-marketing-brand-safety", "influencer-content-quality-check", "fmcg-influencer-marketing-uae-saudi-arabia"],
    hero: {
      src: "/blog/gcc-guides/sustainable-brands-influencer-marketing-gcc.svg",
      alt: "Sustainable brand creator campaign: specific claims, evidence on file, credible creators, show the proof, measure trust",
    },
    body: [
      {
        type: "paragraph",
        text: "Sustainability messaging has become common in the Gulf, from refillable packaging and solar-powered stores to recycled materials and lower-emission products. Creators can explain these choices in a way that feels human, but they also amplify any claim that can't be backed up. This guide is for brands with genuine environmental or social credentials who want creator content that builds trust rather than accusations of greenwashing.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Sustainable brands in the GCC should give creators specific, evidenced claims ('made with 50% recycled plastic, certified by X') rather than vague ones ('eco-friendly', 'green'), choose creators whose own behavior is consistent with the message, and show proof in the content: the refill station, the certificate, the supply chain. The UAE has no dedicated green-claims rules, but general consumer protection and advertising law prohibit false or misleading descriptions, so unsupported environmental claims carry legal as well as reputational risk.",
      },
      { type: "heading", text: "The legal position", id: "law" },
      {
        type: "paragraph",
        text: `Reviewed ${REVIEW_DATE_TEXT}. Not legal advice. According to CMS's UAE summary, there are no specific rules or guides on green marketing in the UAE, so general advertising, consumer protection and anti-fraud rules apply. Article 17 of the Consumer Protection Law (Federal Law No. 15 of 2020) bars advertisers from describing a product or service with false data or in a misleading way, which covers labels, packaging and promotions. Bird & Bird's green claims tracker reports the same position and points to international practice: terms like 'green', 'sustainable' and 'eco-friendly' shouldn't be used without explanation or substantiation. Saudi Arabia and the other GCC states also prohibit misleading advertising under their consumer and e-commerce rules. If you also sell in the EU, its stricter rules on environmental claims apply there.`,
        links: [
          { text: "CMS's UAE summary", href: SRC.uaeGreenClaimsCms.url },
          { text: "Bird & Bird's green claims tracker", href: SRC.uaeGreenClaimsTracker.url },
        ],
      },
      { type: "heading", text: "A claims ladder", id: "claims" },
      {
        type: "table",
        headers: ["Level", "Example", "Use with creators?"],
        rows: [
          ["Vague", "'Eco-friendly', 'green', 'kind to the planet'", "Avoid unless explained in the same sentence"],
          ["Absolute", "'Carbon neutral', 'zero waste', '100% sustainable'", "Only with robust, current evidence; often better avoided"],
          ["Comparative", "'30% less plastic than our previous bottle'", "Yes, with the comparison and date stated"],
          ["Specific and verified", "'Bottle made from 50% recycled plastic, certified by [scheme]'", "Best: easy to explain and defend"],
          ["Action-based", "'Return empties to any store for a refill'", "Strong: creators can show it"],
        ],
      },
      { type: "heading", text: "Choosing credible creators", id: "creators" },
      {
        type: "list",
        items: [
          "Consistency: a creator who flies weekly for luxury travel content will struggle to sell a low-impact lifestyle",
          "Knowledge: some creators specialise in sustainable living, food waste, fashion repair or outdoor life; they spot weak claims",
          "Local relevance: content about water, heat, cooling, waste and food that reflects Gulf life lands better than imported messaging",
          "Freedom to be honest: let creators say what the product doesn't do yet; it builds credibility",
        ],
      },
      { type: "heading", text: "Content that shows, not asserts", id: "content" },
      {
        type: "list",
        items: [
          "Visit the refill station, recycling partner or factory and film the process",
          "Explain one change in detail rather than listing every initiative",
          "Show the certificate or label and what it actually means",
          "Compare honestly with the previous product, not with competitors you can't measure",
          "Answer critical comments with facts rather than deleting them",
        ],
      },
      { type: "heading", text: "Brief and review checklist", id: "checklist" },
      {
        type: "list",
        items: [
          "Every environmental claim in the brief has evidence on file and a date",
          "Claims in Arabic and English say exactly the same thing",
          "No imagery that implies more than the claim (forests and oceans for a product with a small change)",
          "No comparison with competitors unless independently substantiated",
          "Disclosure of the paid relationship is clear; sustainability content is still advertising",
        ],
      },
      {
        type: "paragraph",
        text: "Reviewing creator drafts for claims is covered in influencer campaign quality control, and reputational risk in influencer marketing brand safety.",
        links: [
          { text: "influencer campaign quality control", href: "/blog/influencer-content-quality-check" },
          { text: "influencer marketing brand safety", href: "/blog/influencer-marketing-brand-safety" },
        ],
      },
      { type: "heading", text: "Measuring trust, not just reach", id: "measurement" },
      {
        type: "table",
        headers: ["Signal", "What it tells you"],
        rows: [
          ["Comment sentiment and themes", "Whether audiences believe the claim or challenge it"],
          ["Questions asked", "What people want proved; feed into FAQs and packaging"],
          ["Uptake of the action", "Refills, returns or trade-ins, where the claim is action-based"],
          ["Brand perception surveys", "Change in 'trusted' or 'responsible' attributes over time"],
          ["Sales of the sustainable range", "Whether the message moves product, not just sentiment"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Vague words like 'green' and 'eco' with nothing behind them",
          "Absolute claims based on offsets the brand can't explain",
          "Creators whose lifestyle contradicts the message",
          "Deleting critical comments instead of answering them",
          "Assuming no specific green law means no legal risk",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Creators can make a sustainable brand's work tangible, but only with claims that are specific, evidenced and shown rather than asserted. In the GCC, general consumer and advertising law already prohibits misleading descriptions, and audiences are quick to notice greenwashing. Start with one well-proven claim and a creator who lives it.",
      },
    ],
    faqs: [
      {
        question: "Are there greenwashing rules in the UAE?",
        answer:
          "There are no dedicated green-claims rules, according to law-firm summaries, but the Consumer Protection Law and advertising rules prohibit false or misleading descriptions, which covers unsupported environmental claims.",
      },
      {
        question: "What sustainability claims can influencers make for a brand?",
        answer:
          "Specific, evidenced claims such as the share of recycled material or a named certification, ideally shown in the content. Avoid vague terms like 'eco-friendly' or absolute claims like 'carbon neutral' without robust proof.",
      },
      {
        question: "How do you choose creators for a sustainable brand?",
        answer:
          "Look for creators whose own behavior and content are consistent with the message, who understand the topic well enough to question weak claims, and whose audiences are in the markets you sell in.",
      },
    ],
  },
  // 1509
  {
    slug: "film-streaming-influencer-marketing-saudi-arabia-uae",
    category: "Influencer Marketing",
    title: "Influencer Marketing for Film and Streaming Launches in Saudi Arabia and the UAE",
    seoTitle: "Film and Streaming Launch Influencer Marketing, KSA and UAE",
    excerpt:
      "How distributors, cinemas and streaming platforms can use creators to launch films and series in Saudi Arabia and the UAE: the growth of Saudi cinema and local films, Ramadan drama season, age ratings, spoiler and embargo rules, creator formats from reactions to premieres, and measuring tickets and sign-ups.",
    metaDescription:
      "Film and streaming influencer marketing in Saudi Arabia and the UAE: cinema growth, Ramadan drama, age ratings, embargoes, creator formats and ticket tracking.",
    author: AUTHOR,
    publishedAt: GCC5_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "11 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "Saudi Arabia and United Arab Emirates",
    breadcrumbParents: [GCC_PLAYBOOK],
    tags: ["film marketing influencers Saudi Arabia", "streaming launch influencer marketing", "movie premiere creators Dubai", "Ramadan series influencer marketing"],
    related: ["influencer-marketing-events-exhibitions-dubai", "tiktok-influencer-marketing-saudi-arabia", "ramadan-influencer-marketing-uae"],
    hero: {
      src: "/blog/gcc-guides/film-streaming-influencer-marketing-saudi-arabia-uae.svg",
      alt: "Film and streaming launch: rating checked, teaser creators, premiere and screenings, spoiler-free reactions, tickets and sign-ups tracked",
    },
    body: [
      {
        type: "paragraph",
        text: "Saudi Arabia reopened cinemas in 2018 and has since become one of the region's most watched film markets, while the UAE has a long-established cinema culture and an audience that follows global and Arabic releases. Streaming adds the Ramadan drama season, when Arabic series dominate conversation across the Gulf. Creators shape what people decide to watch, but entertainment launches have their own rules: embargoes, spoilers, age ratings and very short windows. This guide is for distributors, cinema chains and streaming platforms.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "For a film or series launch in Saudi Arabia or the UAE, work with creators whose audiences match the title's genre and language, build anticipation two to three weeks out, invite creators to premieres or early screenings under a clear embargo and spoiler policy, and keep content and audiences consistent with the title's age rating. Give each creator a tracked ticketing or sign-up link, concentrate effort on opening weekend for cinema and on the first episodes for series, and plan Arabic series around Ramadan, when attention peaks.",
      },
      { type: "heading", text: "Why this market is different", id: "market" },
      {
        type: "paragraph",
        text: "Local productions are gaining ground. Arab News reported in September 2026 that Saudi films earned SR122.6 million in 2025, about 13% of box-office revenue, from 11 of the 538 films screened. That means Saudi-made titles punch above their share of releases, and Saudi creators who champion local cinema have a real audience. In the UAE, audiences span Arabic, Hollywood, Bollywood and other language releases, so creator choice follows the film's audience rather than the country alone.",
        links: [{ text: "Arab News reported in September 2026", href: SRC.saudiFilmBoxOffice.url }],
      },
      { type: "heading", text: "Creator formats by stage", id: "formats" },
      {
        type: "table",
        headers: ["Stage", "Format", "Notes"],
        rows: [
          ["Announcement", "Trailer reactions, theories, cast interviews", "Use approved assets only"],
          ["Two to three weeks out", "Countdown content, behind the scenes, ticket pre-sales", "Tracked ticketing links per creator"],
          ["Premiere or early screening", "Arrivals, atmosphere, first reactions without spoilers", "Embargo time and spoiler rules in writing"],
          ["Opening weekend", "Reviews, 'should you watch it' videos, group outings", "Most of the cinema revenue is decided here"],
          ["Streaming release", "Episode-one reactions, character discussions, watch-along content", "Agree which episodes creators may discuss"],
          ["After release", "Explainers, rankings, fan theories", "Keeps a series discoverable"],
        ],
      },
      { type: "heading", text: "Ratings, embargoes and spoilers", id: "rules" },
      {
        type: "paragraph",
        text: `Reviewed ${REVIEW_DATE_TEXT}. Saudi Arabia's General Authority for Media Regulation (GAMR) classifies films by age, with categories from G to R18 listed on its age-classification page, and the UAE applies its own classification. Promote a title to audiences its local rating suits: a creator with a young audience is the wrong partner for an R18 release. Creators promoting the release also need the usual licences: the UAE advertiser permit and Saudi Mawthooq licence.`,
        links: [{ text: "age-classification page", href: SRC.gamrFilmRatings.url }],
      },
      {
        type: "list",
        items: [
          "Embargo: the exact date and time (in local time) creators may post reactions or reviews",
          "Spoilers: what can't be revealed, and how long the restriction lasts",
          "Honesty: ask for honest reactions; paid praise that audiences see through hurts the title",
          "Recording: no filming of the film itself in cinemas; use only supplied clips",
          "Disclosure: paid premiere invitations and sponsored reviews are advertising and need disclosure",
        ],
      },
      { type: "heading", text: "Ramadan drama season", id: "ramadan" },
      {
        type: "paragraph",
        text: "Ramadan is the peak season for Arabic television and streaming series, with platforms releasing many new titles at once. That makes it a crowded launch window. Book creators who discuss Arabic drama well before Ramadan, plan content for the first few episodes when audiences decide what to follow, and respect the tone of the month. Expected dates for Ramadan 2027 are in our Ramadan influencer marketing guide.",
        links: [{ text: "Ramadan influencer marketing guide", href: "/blog/ramadan-influencer-marketing-uae" }],
      },
      { type: "heading", text: "Choosing creators", id: "creators" },
      {
        type: "list",
        items: [
          "Genre fit: horror, family, comedy and drama audiences follow different creators",
          "Language fit: Saudi or Khaleeji Arabic for local productions; English or other languages for international releases in the UAE",
          "Film and TV commentators for credibility; lifestyle creators for group outings and premiere atmosphere",
          "Cast and crew as creators, where contracts allow",
          "Audience location by country, so Saudi ticket links reach Saudi audiences",
        ],
      },
      {
        type: "paragraph",
        text: "Premieres in Dubai are events too; event permits, accreditation and filming rules are covered in our events and exhibitions playbook. For short-form strategy in Saudi Arabia, see TikTok influencer marketing in Saudi Arabia.",
        links: [
          { text: "events and exhibitions playbook", href: "/blog/influencer-marketing-events-exhibitions-dubai" },
          { text: "TikTok influencer marketing in Saudi Arabia", href: "/blog/tiktok-influencer-marketing-saudi-arabia" },
        ],
      },
      { type: "heading", text: "Measuring results", id: "measurement" },
      {
        type: "table",
        headers: ["Objective", "Metric", "How"],
        rows: [
          ["Tickets", "Tickets sold through creator links or codes", "Ticketing partner reports by link"],
          ["Opening weekend", "Admissions vs comparable titles", "Distributor data"],
          ["Streaming", "Sign-ups or trial starts from creator links", "Platform attribution"],
          ["Engagement", "Episodes watched by attributed viewers", "Platform analytics where available"],
          ["Conversation", "Mentions, searches and sentiment around the title", "Social listening"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Creators with young audiences promoting an adult-rated title",
          "No written embargo, so reactions go live early",
          "Peaking too early: most creator content should land around release",
          "Ramadan series campaigns booked after Ramadan begins",
          "Measuring views instead of tickets or sign-ups",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Entertainment launches are short and intense. In Saudi Arabia and the UAE, the winners pick creators by genre, language and audience age, control embargoes and spoilers, concentrate effort on release, and track tickets and sign-ups per creator. Plan Ramadan series months ahead.",
      },
    ],
    faqs: [
      {
        question: "How do film distributors use influencers in Saudi Arabia?",
        answer:
          "With trailer reactions and countdown content before release, premiere or early-screening invitations under an embargo, honest spoiler-free reactions at opening weekend, and tracked ticketing links per creator, keeping audiences consistent with the film's age rating.",
      },
      {
        question: "When should streaming platforms book creators for Ramadan series?",
        answer:
          "Well before Ramadan begins. It is the most crowded release window for Arabic series, and audiences decide what to follow in the first few episodes.",
      },
      {
        question: "Do premiere invitations count as advertising?",
        answer:
          "When the creator is paid or hosted to promote the title, yes. Disclose the relationship clearly and make sure the creator holds the licence required in their market.",
      },
    ],
  },
  // 1510
  {
    slug: "sports-influencer-marketing-gcc",
    category: "Influencer Marketing",
    title: "Influencer Marketing for Sports Clubs and Sporting Events in the GCC",
    seoTitle: "Sports Club and Event Influencer Marketing in the GCC",
    excerpt:
      "How clubs, leagues, event organizers and sponsors in the GCC can use creators to build fan communities: the 2026–27 calendar and what 2026 disrupted, creator types from fan channels to athletes, formats for matchdays and seasons, sponsor activation, rules on betting and rights, and measuring fans, tickets and sponsor value.",
    metaDescription:
      "Sports influencer marketing in the GCC: fan creators, athletes, matchday content, sponsor activation, betting and rights rules, and the 2026–27 calendar.",
    author: AUTHOR,
    publishedAt: GCC5_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "12 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "Gulf Cooperation Council countries",
    breadcrumbParents: [GCC_PLAYBOOK],
    tags: ["sports influencer marketing GCC", "football club creators Saudi Arabia", "sports sponsorship influencers UAE", "fan engagement creators"],
    related: ["gaming-esports-influencer-marketing-saudi-arabia", "influencer-marketing-events-exhibitions-dubai", "gcc-influencer-marketing-plan-2027"],
    hero: {
      src: "/blog/gcc-guides/sports-influencer-marketing-gcc.svg",
      alt: "Sports creator program: fan creators and athletes, matchday content, sponsor activation, tickets and memberships, fan community over seasons",
    },
    body: [
      {
        type: "paragraph",
        text: "Sport in the Gulf has grown fast: Saudi football signs global stars, Formula One races in Jeddah and Abu Dhabi, and major tournaments are scheduled across the region. But fandom is built week by week, not only at big events. Creators, from fan channels and football analysts to athletes themselves, are where much of that week-by-week conversation happens. This guide is for clubs, leagues, event organizers and the brands that sponsor them.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Sports influencer marketing in the GCC works when it treats fans as a community, not an audience for one event. Partner with fan creators and analysts who already cover the club or sport, give them access (training, matchday, players) rather than scripts, use athletes where contracts allow, and connect content to tickets, memberships, merchandise and sponsor activations. Keep betting out of all content, respect broadcast and image rights, and plan around a 2026–27 calendar that was reshaped by the regional conflict.",
      },
      { type: "heading", text: "The calendar and what 2026 changed", id: "calendar" },
      {
        type: "paragraph",
        text: `Checked ${REVIEW_DATE_TEXT}. Formula One cancelled the 2026 Bahrain and Saudi Arabian Grands Prix in March because of the regional conflict, according to Sky Sports. Arab News reports the Saudi race returns on 19–21 March 2027 in Jeddah. The Saudi Pro League's 2026–27 season runs from 13 August 2026 to 29 May 2027, and Saudi Arabia is set to host the AFC Asian Cup from 7 January to 5 February 2027, according to Reuters via Al Jazeera. Build contingency into anything tied to a single event date.`,
        links: [
          { text: "according to Sky Sports", href: SRC.f1Cancel2026.url },
          { text: "Arab News reports", href: SRC.f1Saudi2027.url },
          { text: "2026–27 season", href: SRC.splSeason2627.url },
          { text: "according to Reuters via Al Jazeera", href: SRC.asianCup2027.url },
        ],
      },
      { type: "heading", text: "Creator types in sport", id: "creators" },
      {
        type: "table",
        headers: ["Creator", "Strength", "Plan for"],
        rows: [
          ["Fan creators (club channels run by supporters)", "Trust and daily conversation", "Independence; they will criticise results"],
          ["Analysts and tactics creators", "Credibility with serious fans", "Access to data, coaches or training"],
          ["Athletes", "Reach and authenticity", "Club and league image rules; sponsor conflicts"],
          ["Lifestyle and family creators", "New and casual fans; matchday experience", "Simple explainers; family-friendly content"],
          ["Gaming and esports creators", "Younger fans through football games", "See our Saudi gaming guide"],
        ],
      },
      {
        type: "paragraph",
        text: "Leagues are experimenting with creators as distribution partners too. In September 2026 the Saudi Pro League said approved creators and players can sell match access to fans in 16 international markets and receive a share of the revenue, a model aimed at audiences outside the region.",
        links: [{ text: "Saudi Pro League said", href: SRC.splCreatorDistribution.url }],
      },
      { type: "heading", text: "Formats that build fandom", id: "formats" },
      {
        type: "table",
        headers: ["Moment", "Format"],
        rows: [
          ["Pre-season and signings", "Behind-the-scenes, player introductions, kit launches"],
          ["Matchday", "Stadium experience, fan zones, live Stories, reactions"],
          ["Between matches", "Analysis, training access, player challenges, community events"],
          ["Big events", "Watch parties, travel and city guides, fan meet-ups"],
          ["End of season", "Highlights, awards, season tickets for next year"],
        ],
      },
      { type: "heading", text: "Sponsor activation", id: "sponsors" },
      {
        type: "list",
        items: [
          "Tie the sponsor to a fan benefit (better seats, meet-ups, exclusive content) rather than logo placement alone",
          "Use creators who already follow the sport so the sponsor message sounds natural",
          "Agree with the rights holder what the sponsor may show: logos, kits, stadium footage and player images",
          "Avoid conflicts: athletes and clubs often have their own sponsors in the same category",
        ],
      },
      { type: "heading", text: "Rules to check", id: "rules" },
      {
        type: "list",
        items: [
          "Betting: keep betting operators, odds and wagering out of all creator content; gambling is illegal in Saudi Arabia and tightly restricted across the region",
          "Broadcast rights: creators usually can't post match footage; agree what clips, if any, they may use",
          "Image rights: player and club images belong to their owners; get permission",
          "Licences: creators promoting clubs, events or sponsors need the UAE advertiser permit, Saudi Mawthooq licence or local equivalent",
          "Ticket promotions and giveaways: check promotion permits before announcing them",
          "Security: never film or share footage of security incidents; in the UAE this was declared a criminal offence in 2026",
        ],
      },
      {
        type: "paragraph",
        text: "Licensing by country is in the GCC influencer marketing playbook, and the UAE footage warning in The National's report.",
        links: [
          { text: "GCC influencer marketing playbook", href: "/blog/gcc-influencer-marketing-playbook" },
          { text: "The National's report", href: SRC.uaeStrikeFootage.url },
        ],
      },
      { type: "heading", text: "Measuring fans and sponsor value", id: "measurement" },
      {
        type: "table",
        headers: ["Objective", "Metric"],
        rows: [
          ["Attendance", "Tickets sold through creator links or codes; attendance vs comparable fixtures"],
          ["Membership", "Memberships or season tickets attributed to creators"],
          ["Fan growth", "Followers and app registrations from target countries"],
          ["Merchandise", "Sales through creator codes"],
          ["Sponsor value", "Sponsor mentions, reach among target fans, sponsor-specific actions (sign-ups, redemptions)"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Only activating creators for one big event, then going quiet",
          "Scripted content that fan creators won't post",
          "Sponsor content that conflicts with athletes' own sponsors",
          "Using match footage without the rights",
          "Any link to betting",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "In GCC sport, the clubs and sponsors that win online are those that work with the creators fans already trust, give them real access, and stay present between the big events. Build around the season, plan contingencies for event dates, and measure fans, tickets and sponsor actions. For the wider year ahead, see the 2027 GCC planning guide.",
        links: [{ text: "2027 GCC planning guide", href: "/blog/gcc-influencer-marketing-plan-2027" }],
      },
    ],
    faqs: [
      {
        question: "How do sports clubs in Saudi Arabia work with influencers?",
        answer:
          "By partnering with fan creators and analysts who already cover the club, giving them access to training, matchdays and players, using athletes where contracts allow, and linking content to tickets, memberships and merchandise.",
      },
      {
        question: "Can sports creators in the GCC promote betting?",
        answer:
          "No. Keep betting out of all creator content. Gambling is illegal in Saudi Arabia and restricted across the region.",
      },
      {
        question: "Were GCC sporting events affected in 2026?",
        answer:
          "Yes. Formula One cancelled the 2026 Bahrain and Saudi Arabian Grands Prix because of the regional conflict. The Saudi race is scheduled to return in March 2027. Plan event-linked campaigns with contingencies.",
      },
    ],
  },
  // 1512
  {
    slug: "watches-jewellery-influencer-marketing-gcc",
    category: "Influencer Marketing",
    title: "Influencer Marketing for Watches and Fine Jewellery Brands in the GCC",
    seoTitle: "Watch and Fine Jewellery Influencer Marketing in the GCC",
    excerpt:
      "How watch and jewellery brands and retailers can use creators in the UAE, Saudi Arabia and the wider GCC: the gifting and occasion calendar, gold pricing and hallmark rules that affect content, creator types from collectors to stylists, formats that show craft, luxury brand safety and measuring store appointments and sales.",
    metaDescription:
      "Watch and jewellery influencer marketing in the GCC: gifting moments, hallmark and gold ad rules, collector and stylist creators, store visits and sales.",
    author: AUTHOR,
    publishedAt: GCC5_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "11 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "Gulf Cooperation Council countries",
    breadcrumbParents: [GCC_PLAYBOOK],
    tags: ["jewellery influencer marketing UAE", "watch influencer marketing Dubai", "gold jewellery creators Saudi Arabia", "luxury influencer marketing GCC"],
    related: ["influencer-marketing-fashion-brands-dubai", "retail-influencer-marketing-gcc", "influencer-marketing-expat-communities-uae"],
    hero: {
      src: "/blog/gcc-guides/watches-jewellery-influencer-marketing-gcc.svg",
      alt: "Watch and jewellery creator campaign: occasion calendar, accurate gold and hallmark details, collector and stylist creators, store appointments, sales",
    },
    body: [
      {
        type: "paragraph",
        text: "Gold, jewellery and watches are deeply rooted in Gulf culture: wedding sets, Eid gifts, gold bought as savings, and a strong collector community for luxury watches. For brands and retailers, creators can show craftsmanship and help buyers choose, but this category has specific risks: prices that move with the gold market, legal rules on what jewellery ads must say, counterfeits and the brand-safety demands of luxury. This guide is for watch brands, jewellers and their retailers in the UAE, Saudi Arabia and the wider GCC.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Watch and jewellery influencer marketing in the GCC works when creators show craftsmanship and help buyers choose for real occasions (weddings, Eid, Diwali, anniversaries), with accurate product details. In Saudi Arabia, ads for precious metals and gemstones must state type, weight, fineness and price; in the UAE, gold sold must be hallmarked. Use collectors and specialist reviewers for watches and stylists and occasion creators for jewellery, drive store appointments rather than impulse clicks, and protect the brand with careful creator selection.",
      },
      { type: "heading", text: "The occasion calendar", id: "calendar" },
      {
        type: "table",
        headers: ["Occasion", "Buyers", "Content"],
        rows: [
          ["Weddings", "Families and couples, nationals and expatriates", "Bridal sets, traditional and modern styles, matching pieces"],
          ["Eid al-Fitr and Eid al-Adha", "Gift givers", "Gift guides by budget, children's pieces, family gifts"],
          ["Diwali and Akshaya Tritiya", "Indian and other South Asian communities", "Gold buying for festivals and auspicious days"],
          ["Valentine's Day, anniversaries, graduations", "Gift givers", "Personal milestones"],
          ["Year-end and shopping festivals", "Residents and visitors", "Promotions, new collections, visitor shopping"],
        ],
      },
      {
        type: "paragraph",
        text: "Reaching South Asian communities for Diwali and wedding seasons is covered in reaching expat communities in the UAE.",
        links: [{ text: "reaching expat communities in the UAE", href: "/blog/influencer-marketing-expat-communities-uae" }],
      },
      { type: "heading", text: "Rules that affect content", id: "rules" },
      {
        type: "paragraph",
        text: `Reviewed ${REVIEW_DATE_TEXT}. Not legal advice. In Saudi Arabia, the Ministry of Commerce announced amendments to the precious metals and gemstones rules that prohibit advertising such products without clearly stating the type, weight, fineness and price of each item. That applies to creator posts that promote specific pieces. In the UAE, Federal Law No. 11 of 2015 prohibits selling precious-metal articles without an official hallmark, and Gulf News reports that Dubai buyers should receive a purity certificate and an invoice showing price per gram, weight and making charges.`,
        links: [
          { text: "Ministry of Commerce announced amendments", href: SRC.saudiGoldAdRule.url },
          { text: "Federal Law No. 11 of 2015", href: SRC.uaeHallmarkLaw.url },
          { text: "Gulf News reports", href: SRC.gnHallmarking.url },
        ],
      },
      {
        type: "list",
        items: [
          "Give creators a product sheet: karat or fineness, weight, stones and their grading, price or price basis",
          "Gold prices move daily; say how prices are set (for example, gold rate plus making charges) and when the price shown applies",
          "Don't let creators describe pieces as investments or promise value increases",
          "For watches, state whether a piece is new from an authorised dealer, pre-owned or limited, and never feature replicas",
          "Disclose gifted and loaned pieces; luxury loans are still advertising",
        ],
      },
      { type: "heading", text: "Choosing creators", id: "creators" },
      {
        type: "table",
        headers: ["Creator", "Best for"],
        rows: [
          ["Watch collectors and reviewers", "Credibility on movements, finishing and value; considered buyers"],
          ["Stylists and fashion creators", "Showing how pieces are worn; jewellery for everyday and events"],
          ["Bridal and wedding creators", "Wedding sets and family purchases"],
          ["Community and language creators", "Festival gold buying in specific communities"],
          ["Lifestyle and luxury creators", "Brand image, launches and events, with careful brand-safety checks"],
        ],
      },
      { type: "heading", text: "Formats that show craft", id: "formats" },
      {
        type: "list",
        items: [
          "Close-up detail videos with good lighting: settings, engraving, dial finishing",
          "Workshop or atelier visits showing how pieces are made",
          "'How to choose' guides: karat, stone quality, sizes, straps",
          "Styling: one piece three ways, day to evening",
          "Store visits that show the buying experience and services such as resizing or engraving",
        ],
      },
      { type: "heading", text: "Luxury brand safety", id: "brand-safety" },
      {
        type: "list",
        items: [
          "Check a creator's history for counterfeit or replica promotion",
          "Avoid creators whose content conflicts with the brand's positioning",
          "Agree how pieces are handled, insured and returned for loans",
          "Approve imagery: luxury brands often have strict visual rules",
        ],
      },
      {
        type: "paragraph",
        text: "Fashion-side styling and modest fashion are covered in influencer marketing for fashion brands in Dubai, and store-level measurement in retail influencer marketing in the GCC.",
        links: [
          { text: "influencer marketing for fashion brands in Dubai", href: "/blog/influencer-marketing-fashion-brands-dubai" },
          { text: "retail influencer marketing in the GCC", href: "/blog/retail-influencer-marketing-gcc" },
        ],
      },
      { type: "heading", text: "Measuring appointments and sales", id: "measurement" },
      {
        type: "table",
        headers: ["Metric", "How"],
        rows: [
          ["Store appointments", "Booking links or WhatsApp click-to-chat per creator"],
          ["Store visits", "'Mention the creator' or creator codes at the counter"],
          ["Sales", "Sales of featured pieces vs baseline; codes where used"],
          ["Considered interest", "Saves, product page views, inquiries about specific pieces"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Showing a price without its basis or date when gold prices move",
          "Leaving out weight, karat or price in Saudi ads",
          "Creators describing jewellery as a guaranteed investment",
          "Lifestyle creators with replica watches in their history",
          "Measuring likes when the goal is store appointments",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "In the Gulf, jewellery and watches are bought for occasions and with care. Creators help when they show craft, explain choices accurately and lead buyers into stores, within each market's rules on what jewellery advertising must say. Choose creators the category trusts, give them accurate product sheets, and measure appointments and sales.",
      },
    ],
    faqs: [
      {
        question: "What must jewellery ads include in Saudi Arabia?",
        answer:
          "The Ministry of Commerce prohibits advertising precious metals and gemstones without clearly stating each item's type, weight, fineness and price. Apply this to creator posts that promote specific pieces.",
      },
      {
        question: "Which influencers work for watch brands in the GCC?",
        answer:
          "Watch collectors and specialist reviewers for credibility with considered buyers, plus selected lifestyle creators for launches and image, checked carefully for any history of promoting replicas.",
      },
      {
        question: "When should jewellery brands run creator campaigns in the GCC?",
        answer:
          "Around weddings, Eid, Diwali and other community festivals, anniversaries and graduations, and shopping festivals. Book creators ahead of each peak.",
      },
    ],
  },
  // 1514
  {
    slug: "nonprofit-influencer-marketing-gcc",
    category: "Influencer Marketing",
    title: "Creator Partnerships for Nonprofits and Social-Impact Campaigns in the GCC",
    seoTitle: "Nonprofit and Social-Impact Creator Campaigns in the GCC",
    excerpt:
      "How charities, foundations and brands running social-impact campaigns can work with creators in the UAE, Saudi Arabia and the wider GCC: fundraising laws that bar individuals from collecting donations, licensed channels, dignity and consent for people featured, awareness vs fundraising campaigns, and measuring impact honestly.",
    metaDescription:
      "Nonprofit creator campaigns in the GCC: fundraising laws, licensed donation channels, dignity and consent, awareness vs fundraising, and honest impact.",
    author: AUTHOR,
    publishedAt: GCC5_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "11 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "Gulf Cooperation Council countries",
    breadcrumbParents: [GCC_PLAYBOOK],
    tags: ["nonprofit influencer marketing GCC", "charity influencer campaign UAE", "fundraising influencers Saudi Arabia", "social impact creator campaigns"],
    related: ["ramadan-influencer-marketing-uae", "influencer-campaign-risk-management", "sustainable-brands-influencer-marketing-gcc"],
    hero: {
      src: "/blog/gcc-guides/nonprofit-influencer-marketing-gcc.svg",
      alt: "Nonprofit creator campaign: licensed charity and channel, awareness or fundraising, dignity and consent, donations through official links, honest impact reporting",
    },
    body: [
      {
        type: "paragraph",
        text: "Giving is part of daily life in the Gulf, especially during Ramadan, and creators can bring causes to audiences that charities struggle to reach. But fundraising is tightly regulated: in the UAE and Saudi Arabia, individuals can't simply ask their followers for donations. This guide is for charities, foundations and brands running cause campaigns, and explains how to work with creators within the rules while protecting the dignity of the people the campaign serves.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "In the GCC, creator partnerships for nonprofits should send every donation through the licensed charity's own approved channels, never through a creator's account. In the UAE, the fundraising law bars individuals from collecting donations, including through social media; in Saudi Arabia, fundraising is limited to licensed entities and approved electronic channels. Use creators to raise awareness and point followers to the official donation route, get informed consent from anyone featured, avoid images that strip people of dignity, and report impact honestly.",
      },
      { type: "heading", text: "Fundraising rules", id: "rules" },
      {
        type: "paragraph",
        text: `Reviewed ${REVIEW_DATE_TEXT}. Not legal advice; confirm with the regulator in each country. In the UAE, Federal Law No. 3 of 2021 on regulating fundraising bars individuals from organizing or carrying out fundraising, and Gulf News reported officials saying that seeking donations through social media without a licence is a punishable offence. In Saudi Arabia, the executive bylaw of the Fundraising Regulation Law came into force in 2026, banning cash collection in public spaces and limiting fundraising to bank transfers and approved electronic channels, according to LexisNexis. Draft governance rules published for consultation in August 2026 would bar fundraising ads from featuring children and require a QR code linking to the 'Donate Safely' verification service; check whether they have been finalised.`,
        links: [
          { text: "Gulf News reported", href: SRC.uaeFundraisingLaw.url },
          { text: "according to LexisNexis", href: SRC.saudiFundraisingBylaw.url },
          { text: "Draft governance rules", href: SRC.saudiFundraisingDraft.url },
        ],
      },
      {
        type: "list",
        items: [
          "Partner only with licensed charities, and confirm they hold a fundraising permit for this campaign",
          "Donations go to the charity's official channel; creators share that link, never their own payment details",
          "Creators don't collect money, goods or bank details from followers",
          "Check each country separately; a permit in one country doesn't cover another",
          "Creators still need the usual advertiser licence where they're paid to promote",
        ],
      },
      { type: "heading", text: "Awareness or fundraising?", id: "objectives" },
      {
        type: "table",
        headers: ["", "Awareness campaign", "Fundraising campaign"],
        rows: [
          ["Creator role", "Explain the cause, change attitudes, encourage action", "Point followers to the charity's licensed donation channel"],
          ["Rules", "Content standards and disclosure", "Fundraising law and permits, plus the above"],
          ["Call to action", "Learn more, volunteer, sign up, share", "Donate through the official link"],
          ["Measure", "Reach in target audience, sign-ups, volunteering", "Donations through tracked official links"],
        ],
      },
      { type: "heading", text: "Dignity and consent", id: "dignity" },
      {
        type: "list",
        items: [
          "Get informed consent from anyone featured, in their language, explaining where the content will appear",
          "Don't show people at their most vulnerable to drive donations; show agency and outcomes",
          "Avoid identifying children, refugees or patients; blur faces and avoid names and locations where they could cause harm",
          "Don't stage scenes or exaggerate needs",
          "Creators visiting projects follow the charity's safeguarding rules",
        ],
      },
      { type: "heading", text: "Brands running cause campaigns", id: "brands" },
      {
        type: "list",
        items: [
          "Say exactly what the brand gives: 'AED 5 per bottle sold to [charity], up to AED 100,000', not 'part of proceeds'",
          "Publish the result afterwards",
          "Avoid using the cause mainly to sell; audiences notice",
          "In Ramadan, keep tone respectful and avoid turning giving into a promotion",
        ],
      },
      {
        type: "paragraph",
        text: "Ramadan tone and timing are covered in Ramadan influencer marketing in the UAE, and claims about a brand's own environmental or social record in influencer marketing for sustainable brands in the GCC.",
        links: [
          { text: "Ramadan influencer marketing in the UAE", href: "/blog/ramadan-influencer-marketing-uae" },
          { text: "influencer marketing for sustainable brands in the GCC", href: "/blog/sustainable-brands-influencer-marketing-gcc" },
        ],
      },
      { type: "heading", text: "Choosing creators", id: "creators" },
      {
        type: "list",
        items: [
          "Creators with a genuine connection to the cause",
          "Volunteers or unpaid partners where possible, with any payment disclosed",
          "Creators whose audiences are in the country where donations are licensed",
          "Brand-safety checks: past controversies can overshadow the cause",
        ],
      },
      { type: "heading", text: "Measuring impact honestly", id: "measurement" },
      {
        type: "table",
        headers: ["Metric", "How"],
        rows: [
          ["Donations", "Tracked links to the official channel, per creator"],
          ["Donors", "New vs returning donors from creator links"],
          ["Awareness", "Reach in the target audience; survey where possible"],
          ["Action", "Volunteer sign-ups, pledges, event attendance"],
          ["Outcome", "What the money achieved, reported back to the audience"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Creators asking followers to send money to them directly",
          "Campaigns run with an unlicensed organization",
          "Images of identifiable children or patients without consent",
          "Vague 'part of proceeds' claims from brands",
          "No report back on what donations achieved",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Creators can bring a cause to new audiences across the GCC, but only within strict fundraising rules. Route every donation through a licensed charity's official channel, protect the dignity of the people featured, be specific about what a brand gives, and report back. Done properly, creator campaigns can build lasting support rather than one-off sympathy.",
      },
    ],
    faqs: [
      {
        question: "Can influencers raise money for charity in the UAE?",
        answer:
          "Individuals can't organise fundraising under Federal Law No. 3 of 2021, including through social media. Creators can raise awareness and point followers to a licensed charity's official donation channel.",
      },
      {
        question: "What are the fundraising rules in Saudi Arabia?",
        answer:
          "Fundraising is limited to licensed entities and approved electronic channels such as bank transfers, official websites and apps. Draft rules would also ban children in fundraising ads and require a Donate Safely QR code; check their status.",
      },
      {
        question: "How should brands describe cause-related campaigns?",
        answer:
          "Specifically: state exactly what is donated per purchase or in total, to which licensed charity, and publish the result afterwards. Avoid vague 'part of proceeds' wording.",
      },
    ],
  },
];
