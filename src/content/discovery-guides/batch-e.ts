import type { BlogPost } from "@/content/blog";

const AUTHOR = { name: "Kudozz Strategy Team", role: "Agency Team" };

export const discoveryBatchE: BlogPost[] = [
  // #21 find-influencers-matching-target-audience (NEW)
  {
    slug: "find-influencers-matching-target-audience",
    category: "Influencer Marketing",
    title: "How to Find Influencers Whose Audience Matches Your Ideal Customer Profile",
    seoTitle: "Find Influencers Who Match Your Target Audience | Kudozz",
    excerpt:
      "Turn your ideal customer profile into an audience spec, write a hypothesis for each creator, ask for the right insights screenshots and score the match before you book anyone.",
    metaDescription:
      "Match influencers to your ideal customer: turn your ICP into an audience spec, form a hypothesis per creator, request insights proof and score the overlap.",
    author: AUTHOR,
    publishedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "8 min read",
    tags: ["Audience Targeting", "Creator Discovery", "Ideal Customer Profile", "India"],
    related: ["influencer-search-tools", "influencer-audience-quality", "how-to-research-influencers", "life-stage-influencer-marketing"],
    hero: {
      src: "/blog/discovery/find-influencers-matching-target-audience.svg",
      alt: "A four-step flow from ideal customer profile to audience hypothesis, insights proof and a match score, with the overlap between creator audience and customer profile highlighted",
    },
    discoveryCta: {
      headline: "Find Creators for Your Target Audience",
      body: "Build your candidate list from the signals you can see publicly. Kudozz Discovery lets you search Instagram creators in India by niche, state, city, language, gender and engagement, then save the ones worth an audience-proof request into a list for this campaign.",
      ctaLabel: "Explore Kudozz Discovery",
    },
    body: [
      {
        type: "paragraph",
        text: "A creator who looks like your customer is not the same as a creator whose followers are your customers. A 28-year-old Bengaluru software engineer who posts about running might seem perfect for a sports-nutrition brand aimed at 28-year-old Bengaluru software engineers. Then the insights screenshot arrives and most of the followers turn out to be college students in Kerala who came for the creator's old exam-prep videos. Nothing was fake. The match was assumed rather than checked.",
      },
      {
        type: "paragraph",
        text: "This guide is about closing that gap. It walks through a four-part method: translate your ideal customer profile (ICP) into an audience spec, write a hypothesis about each creator's audience, ask for proof, and score the overlap. It sits alongside our guide on finding influencers by niche, location and audience relevance, which covers the search filters themselves. Here the focus is on the audience behind the profile.",
        links: [{ text: "finding influencers by niche, location and audience relevance", href: "/blog/influencer-search-tools" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "list",
        items: [
          "Write your ICP as five or six audience attributes you could actually verify: location, age band, gender split, language, life stage and buying context.",
          "For each candidate creator, write a one-line guess about who follows them and why, based on public clues such as comments, content history and language.",
          "Ask shortlisted creators for dated insights screenshots that test the guess: top cities, age range, gender and countries.",
          "Score the match on a simple weighted sheet. Book on audience fit first, then weigh reach and price.",
        ],
      },
      { type: "heading", text: "Step 1: Turn your ICP into an audience spec", id: "icp-to-audience-spec" },
      {
        type: "paragraph",
        text: "Most ICPs are written for sales or ads teams: job titles, income, pain points, objections. Only some of that can be checked against a creator's audience. Instagram's professional dashboard shows a creator their followers' top cities and countries, age ranges and gender. It doesn't show income, job role or whether someone owns a car. So split your ICP into what you can verify and what you can only infer.",
      },
      {
        type: "table",
        headers: ["ICP attribute", "Can a creator show you this?", "How you check it"],
        rows: [
          ["Cities or states you deliver to", "Yes, top cities and countries", "Insights screenshot"],
          ["Age band", "Yes, as age ranges", "Insights screenshot"],
          ["Gender split", "Yes", "Insights screenshot"],
          ["Language", "Not directly", "Language of captions, voiceover and comments"],
          ["Life stage (student, new parent, retired)", "Not directly", "Content themes and what commenters say about themselves"],
          ["Price sensitivity or income", "No", "Products the creator features, and how followers react to prices"],
          ["Buying context (gifting, routine, emergency)", "No", "Questions in the comments and past sponsored results"],
        ],
      },
      {
        type: "paragraph",
        text: "Then write the spec as a short card the whole team can use. Keep it to attributes that would change your decision. If you'd still book a creator whose audience skewed slightly older, age is a preference, not a requirement.",
      },
      {
        type: "template",
        label: "Audience spec card",
        text: "Product: (one line)\nMust-have (dealbreakers):\n  Location: e.g. at least a third of followers in cities we deliver to\n  Language: e.g. Hindi or Hinglish content, Hindi comments welcome\nStrong preferences:\n  Age band: e.g. 22–34\n  Gender: e.g. mostly women, but not exclusive\nInferred, not verifiable:\n  Life stage: e.g. working, living away from family\n  Price comfort: e.g. buys ₹500–₹1,500 personal-care items online\nAnti-fit: who we don't want to pay to reach (e.g. under-18 audiences for an adult product)",
      },
      {
        type: "paragraph",
        text: "The anti-fit line matters more than it looks. A brand selling a ₹4,000 skincare device doesn't want a creator whose comments are full of school students, however good the engagement. Writing it down stops the team from talking itself into a popular but wrong creator.",
      },
      { type: "heading", text: "Step 2: Write an audience hypothesis for each creator", id: "audience-hypothesis" },
      {
        type: "paragraph",
        text: "Before you ask a creator for anything, write one sentence about who you think follows them and why. It forces you to look at the right evidence, and it tells you exactly what the screenshot needs to confirm. A hypothesis looks like this: \"Mostly women in their late twenties to thirties in Maharashtra, following for affordable home-organising ideas in Marathi and English.\"",
      },
      {
        type: "paragraph",
        text: "Build it from public clues. None of these is proof on its own, but together they make a reasonable guess:",
      },
      {
        type: "list",
        items: [
          "What commenters say about themselves: \"as a new mom\", \"my hostel room\", \"we just moved to Gurgaon\".",
          "Which language the comments are in, and whether it matches the captions.",
          "Where commenters ask about delivery, stock or store locations.",
          "What the creator's content was about two or three years ago, since early followers often stay.",
          "Which of their posts went unusually wide. A single viral Reel can bring in thousands of followers from a completely different audience.",
          "The price points of products they feature, and whether followers say \"too expensive\" or \"ordered\".",
          "Collab posts with other creators, which often pull in that creator's audience too.",
        ],
      },
      {
        type: "paragraph",
        text: "Our guide on how to research influencers covers the full content audit. For audience matching, you only need enough to write the sentence and to know what result would rule the creator out.",
        links: [{ text: "how to research influencers", href: "/blog/how-to-research-influencers" }],
      },
      { type: "heading", text: "Step 3: Build candidates from public proxies", id: "public-proxies" },
      {
        type: "paragraph",
        text: "You can't search Instagram by audience demographics. What you can search by is the creator's own attributes that tend to correlate with an audience: where they're based, the language they create in, the niche they post in, and their gender. Those are proxies, not proof. A Lucknow creator posting in Hindi about home cooking is more likely to have a North Indian audience than a Mumbai creator posting in English about fine dining, but neither is certain.",
      },
      {
        type: "paragraph",
        text: "Use the proxies to build a longer list than you need, because some candidates will fail the proof step. As a rule of thumb, start with around twice as many candidates as you plan to book, more if your ICP is narrow or regional.",
      },
      {
        type: "discovery-cta",
        headline: "Discover Creators for Your Target Audience",
        body: "Kudozz Discovery doesn't show audience demographics, but it does let you filter Instagram creators in India by the proxies that matter here: niche, state, city, language, gender and minimum engagement. Save the candidates into a list, then ask the best ones for audience proof.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Step 4: Ask for audience proof", id: "audience-proof" },
      {
        type: "paragraph",
        text: "Once a creator is interested, ask for screenshots from their own insights. Be specific, because a vague \"can you share your insights?\" usually gets a single flattering screenshot of a viral Reel. What to request and how to read it is covered in analysing an influencer's audience demographics.",
        links: [{ text: "analysing an influencer's audience demographics", href: "/blog/influencer-audience-demographics" }],
      },
      {
        type: "list",
        items: [
          "Instagram: follower demographics from the professional dashboard (top cities, top countries, age range, gender), plus reach on the last 5 to 10 Reels.",
          "YouTube: the audience section of YouTube Studio for the last 28 or 90 days, including geography and age.",
          "Ask for the date range to be visible in every screenshot, and for full-screen captures rather than crops.",
          "For larger commitments, ask for a short screen recording that scrolls through the insights. It is much harder to edit than a still image.",
        ],
      },
      {
        type: "template",
        label: "Audience proof request",
        text: "Hi (name), thanks for getting back to us. Before we put together a brief, could you share a few screenshots from your Instagram insights?\n\n1. Follower demographics: top cities, top countries, age range and gender\n2. Reach or views on your last 5–10 Reels\n\nPlease keep the date range visible. We only use these to check audience fit for this campaign and won't share them outside our team.",
      },
      {
        type: "paragraph",
        text: "Know the limits of what you get back. Insights describe followers, while much of a Reel's reach can come from non-followers. Small accounts may see thinner breakdowns. Cities show where followers are, not whether they shop online or can afford your product. And screenshots can be edited, which is why a recording and a consistency check against public numbers help. Store what creators send you carefully and only for as long as you need it; our guide to influencer marketing data privacy covers the basics.",
        links: [{ text: "influencer marketing data privacy", href: "/blog/influencer-marketing-data-privacy" }],
      },
      { type: "heading", text: "Step 5: Score the match", id: "match-scoring" },
      {
        type: "paragraph",
        text: "Put every creator's proof through the same sheet. A simple weighted score stops the loudest opinion in the room from deciding. The weights below are an example for a city-specific consumer brand; set your own from the spec card before you look at any screenshots.",
      },
      {
        type: "table",
        headers: ["Criterion", "Example weight", "Full marks when", "Zero when"],
        rows: [
          ["Location overlap", "30", "Your delivery cities dominate the top-cities list", "Top cities are mostly places you can't serve"],
          ["Age fit", "25", "The largest age bands sit inside your target band", "The audience skews well outside it"],
          ["Language fit", "15", "Content and comments match your customers' language", "Mismatch you'd have to fix with subtitles"],
          ["Gender fit", "10", "Split matches your buyer", "Split is opposite to your buyer"],
          ["Life-stage and intent evidence", "20", "Comments show your buying context", "No sign of it after reading a dozen posts"],
        ],
      },
      {
        type: "paragraph",
        text: "Treat dealbreakers separately from the score. If a creator fails a must-have on the spec card, they're out, however high they score elsewhere. And keep audience match separate from audience quality: a perfectly matched audience can still be inflated. Influencer audience quality explains how to check that side, and how to vet influencers covers fraud signals.",
        links: [
          { text: "Influencer audience quality", href: "/blog/influencer-audience-quality" },
          { text: "how to vet influencers", href: "/blog/how-to-vet-influencers" },
        ],
      },
      { type: "heading", text: "A worked example", id: "worked-example" },
      {
        type: "paragraph",
        text: "Say a Pune protein-snack brand sells mainly through its own site and quick-commerce apps in Pune, Mumbai and Bengaluru. Its ICP: working professionals aged roughly 24 to 35 who train three or four times a week and snack at their desks. Three candidates come up.",
      },
      {
        type: "table",
        headers: ["Creator (hypothetical)", "Hypothesis", "What the proof showed", "Decision"],
        rows: [
          ["Pune strength coach, English and Marathi", "Local gym-goers in their twenties and thirties", "Pune and Mumbai at the top, ages mostly in range", "Book"],
          ["Comedy creator with a far larger following", "Broad, young, national", "Ages skew younger; the delivery cities appear but well down the list", "Pass for this brief"],
          ["Corporate-life creator, Bengaluru", "Office workers, mixed fitness interest", "Strong city and age fit; comments rarely mention fitness", "Book for a desk-snacking angle, not a gym angle"],
        ],
      },
      {
        type: "paragraph",
        text: "The third result is the useful one. The audience matched on every verifiable attribute, and the intent evidence simply changed the brief. Audience matching isn't only a filter; it tells you what to say to the people you reach. If you plan creators around customer life stages more broadly, 10 influencer campaign ideas for different life stages has angles to borrow.",
        links: [{ text: "10 influencer campaign ideas for different life stages", href: "/blog/life-stage-influencer-marketing" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Assuming a creator who resembles your customer has an audience of your customers.",
          "Using follower count as a stand-in for audience fit. A larger audience that sits mostly outside your delivery area is mostly wasted spend.",
          "Asking for insights without a hypothesis, then reading whatever arrives as good news.",
          "Accepting a single cropped screenshot with no date range.",
          "Mixing audience match with audience quality in one gut-feel number.",
          "Writing an ICP with attributes no creator can ever show you, such as income, then guessing at them as if they were verified.",
          "Forgetting the anti-fit, especially for products that shouldn't be marketed to minors.",
        ],
      },
      { type: "heading", text: "Bringing it together", id: "conclusion" },
      {
        type: "paragraph",
        text: "Audience matching is a short loop: spec, hypothesis, proof, score. The spec card keeps the team honest about what it actually needs. The hypothesis makes you read the profile properly. The proof request turns a guess into evidence, and the score keeps decisions consistent from one campaign to the next. When you've done it a few times, the shortlist stage gets much easier, and our step-by-step guide to shortlisting influencers picks up from there. If you'd rather have a team run the matching for you, Kudozz's creator discovery service builds audience-checked shortlists for brands.",
        links: [
          { text: "step-by-step guide to shortlisting influencers", href: "/blog/influencer-shortlist" },
          { text: "creator discovery service", href: "/services/creator-discovery" },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I see an influencer's audience demographics without asking them?",
        answer:
          "Not reliably. Instagram shows follower demographics only to the account owner through its insights. Some third-party tools estimate audience data, but those are estimates. Public clues such as comments and content language help you guess; the creator's own insights are what confirm it.",
      },
      {
        question: "What share of a creator's audience should match my target market?",
        answer:
          "There's no universal number. Decide your own minimum from your delivery footprint and budget before you see any screenshots, for example that your delivery cities should appear among the creator's top few cities. Setting the bar in advance stops you from moving it for a creator you already like.",
      },
      {
        question: "Is it rude to ask creators for insights screenshots?",
        answer:
          "No. Professional creators expect it, and many keep a media kit with the same information. Ask after they've shown interest, explain why you need it, say how you'll store it, and don't ask for more than you'll use.",
      },
      {
        question: "What if a creator's audience matches but their engagement is low?",
        answer:
          "Look at why. Low engagement on a well-matched audience can still deliver reach in the right cities, especially for awareness. Check recent Reel views rather than likes alone, and consider a smaller test before a larger commitment.",
      },
      {
        question: "Does matching the creator's language guarantee matching the audience's language?",
        answer:
          "Usually, but not always. A creator who switched from English to Hindi content last year may still have many followers from the English years. Read the comments on recent posts to see which language the audience actually responds in.",
      },
    ],
  },

  // #22 how-to-find-emerging-influencers (NEW)
  {
    slug: "how-to-find-emerging-influencers",
    category: "Influencer Marketing",
    title: "How to Discover Emerging Influencers Before They Become Popular",
    seoTitle: "How to Find Emerging Influencers Early | Kudozz",
    excerpt:
      "Spot rising creators by trajectory rather than size: the growth and consistency signals to watch, how to track a watchlist, how to structure early partnerships and the risks to plan for.",
    metaDescription:
      "Find emerging influencers before they get expensive: read growth and consistency signals, track a watchlist, structure early-partner deals and manage risks.",
    author: AUTHOR,
    publishedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "8 min read",
    tags: ["Emerging Influencers", "Creator Discovery", "Rising Creators", "India"],
    related: ["how-to-find-micro-influencers", "influencer-trend-analysis", "influencer-relationship-management", "influencer-database"],
    hero: {
      src: "/blog/discovery/how-to-find-emerging-influencers.svg",
      alt: "Two creator growth lines compared: a steady upward line from consistent posting and a single spike from one viral post, with a watchlist of three monthly snapshots",
    },
    discoveryCta: {
      headline: "Spot Rising Creators Earlier",
      body: "Start your watchlist with creators whose views are running ahead of their size. Kudozz Discovery lets you search Instagram creators in India by follower band and niche, sort by average views or engagement, check posting frequency, and keep candidates in a named list you revisit each month.",
      ctaLabel: "Explore Kudozz Discovery",
    },
    body: [
      {
        type: "paragraph",
        text: "Every brand team has a story about the one that got away: a creator who replied happily to a barter offer two years ago, got passed over because the follower count looked small, and now has a manager, a rate card and a waiting list. Finding emerging influencers is about catching that moment on purpose rather than by luck.",
      },
      {
        type: "paragraph",
        text: "Emerging doesn't mean small. Plenty of small creators have been the same size for years, and that's fine for many campaigns; our guide on how to find micro-influencers covers that search. An emerging creator is defined by direction: their reach, craft and consistency are all improving, and the market hasn't priced it in yet. This guide covers how to read those signals, where to look, how to track candidates before you commit, how to structure an early deal and what can go wrong.",
        links: [{ text: "how to find micro-influencers", href: "/blog/how-to-find-micro-influencers" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "list",
        items: [
          "Look for trajectory, not size: recent Reels outperforming older ones, average views high for the follower count, and steady rather than one-off growth.",
          "Check consistency: regular posting, a clear focus, visibly improving production and a creator who replies to comments.",
          "Track candidates on a watchlist with a dated snapshot each month before you commit money.",
          "Offer early partners something worth staying for: fair pay, creative room and a multi-month arrangement with a planned rate review.",
          "Plan for the risks: one-hit spikes, bought growth, burnout and inexperience with briefs and disclosure.",
        ],
      },
      { type: "heading", text: "Growth signals you can see publicly", id: "growth-signals" },
      {
        type: "paragraph",
        text: "You can't see a creator's follower history on their profile, but you can see the content history, and that tells you a lot. Scroll back three to six months and compare.",
      },
      {
        type: "table",
        headers: ["Signal", "How to check", "What it may mean", "Caveat"],
        rows: [
          ["Recent Reels get more views than older ones", "Compare view counts across the last 10 Reels and 10 from a few months back", "The algorithm is testing them with wider audiences", "One outlier can distort this; look at the typical post"],
          ["High average views for the follower count", "Average views on recent Reels against followers", "Content travels beyond existing followers", "Common on Reels generally; compare with peers in the same niche"],
          ["Comments rising faster than likes", "Read comment counts and content on recent posts", "A community is forming, not just passive reach", "Giveaways and \"comment X\" prompts inflate this"],
          ["Bigger creators engaging with them", "Look for comments, Collab posts and shout-outs from established accounts", "Peers rate their work", "Friendship is not the same as audience growth"],
          ["Recurring series or formats", "Numbered episodes, repeat segments", "They've found something that works and are building on it", "Series can stall; check the latest episodes too"],
          ["Inbound brand interest", "First paid partnership labels appearing", "The market is starting to notice", "Prices will move soon"],
        ],
      },
      {
        type: "paragraph",
        text: "None of these proves growth on its own. Two or three pointing the same way, across several months, is a reasonable bet. If you want to spot rising content themes as well as rising creators, influencer trend analysis is a useful companion.",
        links: [{ text: "influencer trend analysis", href: "/blog/influencer-trend-analysis" }],
      },
      { type: "heading", text: "Consistency signals that separate risers from one-hit wonders", id: "consistency-signals" },
      {
        type: "paragraph",
        text: "Growth without consistency is usually a spike. The creators worth backing early tend to show the habits of someone building a body of work:",
      },
      {
        type: "list",
        items: [
          "A posting rhythm they've kept for months, even if it's only two or three times a week.",
          "A clear focus. Experimenting with formats is a good sign; jumping between unrelated topics every week is not.",
          "Production that has visibly improved: better hooks, cleaner audio, tighter edits, more confident delivery.",
          "Replies to comments, especially questions, rather than silence or copy-pasted emoji.",
          "Their own words in captions and voiceovers, not reposted trends with no point of view.",
          "Signs they treat it as work: a contact email, a highlight of past collaborations, a simple media kit link.",
        ],
      },
      {
        type: "paragraph",
        text: "Say a Hyderabad creator posting Telugu home-cooking Reels has gone from irregular uploads to a fixed three-a-week schedule, started a \"₹200 dinner\" series, and is now getting more questions in the comments than compliments. That's a creator building something. Compare that with a creator whose one Reel about a train journey went wide and whose other posts look the same as a year ago. The first is emerging; the second had a good week.",
      },
      { type: "heading", text: "Where emerging creators show up first", id: "where-to-look" },
      {
        type: "list",
        items: [
          "The comment sections of established creators in your niche. Thoughtful, regular commenters with their own accounts are often creators on the way up.",
          "Collab posts, Remixes and stitched responses, where smaller creators reply to bigger ones.",
          "Trending audio and hashtag pages in your category, sorted by recent rather than top posts.",
          "Your own tagged posts and mentions. Customers who already make good content about you are the cheapest early partners there are.",
          "College fests, local events, pop-up markets and community meetups, which surface creators before the algorithm does.",
          "Discovery tools filtered to smaller follower bands and sorted by views or engagement, which flags accounts outperforming their size.",
        ],
      },
      {
        type: "paragraph",
        text: "The last of these is where a filter beats scrolling. Narrow to a niche and a band such as 5K–10K or 10K–100K, sort by average views, and the creators whose content is travelling further than their follower count float to the top. Then read the profiles properly, because high views on a few Reels can still be a spike.",
      },
      {
        type: "discovery-cta",
        headline: "Find Creators Outperforming Their Size",
        body: "In Kudozz Discovery, filter Instagram creators in India by follower band and niche, sort by average views, and check posting frequency on each profile. It's a quick way to build a first watchlist of creators whose reach is running ahead of their follower count.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Track a watchlist before you commit", id: "watchlist" },
      {
        type: "paragraph",
        text: "The difference between spotting an emerging creator and guessing is time. Keep a watchlist and take a dated snapshot once a month. Two or three snapshots showing the same direction is far stronger evidence than one good-looking profile on one afternoon.",
      },
      {
        type: "template",
        label: "Emerging creator watchlist (one row per creator per month)",
        text: "Handle | Niche | City | Snapshot date | Followers | Avg views, last 10 Reels | Posts in last 30 days | Notable change this month | Paid partnerships seen | Fit notes | Next action (watch / approach / drop)",
      },
      {
        type: "paragraph",
        text: "Keep it small: 15 to 30 creators per category is plenty for one person to review in an hour a month. Drop anyone who stalls for two snapshots and add new names as you find them. If your team already runs an influencer database, add a \"watchlist\" status there rather than starting another sheet.",
        links: [{ text: "influencer database", href: "/blog/influencer-database" }],
      },
      { type: "heading", text: "Early-partner economics: what you get and what you owe", id: "early-partner-economics" },
      {
        type: "paragraph",
        text: "The obvious upside of working with a creator early is price. The less obvious upsides are often worth more: emerging creators usually have more time for your brief, more willingness to try formats, more flexibility on usage and timing, and, if you treat them well, a memory of who backed them first. That loyalty is real, but it isn't owed. A brand that sends a free product, demands three revisions and disappears doesn't earn it.",
      },
      {
        type: "table",
        headers: ["Structure", "How it works", "Good for"],
        rows: [
          ["Paid test post", "One paid Reel or post at a fair fee, with a clear brief", "Seeing how they handle a brief before committing"],
          ["Short series", "Three or four posts over two or three months", "Building familiarity with their audience"],
          ["Multi-month arrangement with a review", "A fixed term with a fee review written in at the halfway point", "Locking in a partnership while being fair as they grow"],
          ["Affiliate or commission top-up", "A modest fee plus a commission on tracked sales", "Sharing upside if their audience converts"],
          ["Ambassador track", "A defined path from test to longer-term role", "Your strongest early partners"],
        ],
      },
      {
        type: "paragraph",
        text: "A word on barter. Product-only deals can be a fair start with creators who genuinely want the product, but they're a weak foundation for a long relationship with someone whose time is getting more valuable. Pay something for real work, and agree upfront how fees will be reviewed as their audience grows. It's cheaper than losing them to a competitor the moment their numbers jump. For keeping those relationships healthy, read influencer relationship management.",
        links: [{ text: "influencer relationship management", href: "/blog/influencer-relationship-management" }],
      },
      { type: "heading", text: "The risks, and how to manage them", id: "risks" },
      {
        type: "table",
        headers: ["Risk", "What it looks like", "How to manage it"],
        rows: [
          ["One-hit spike", "A single viral post, flat before and after", "Wait for two or three watchlist snapshots"],
          ["Bought growth", "Sudden follower jumps with no matching views or comments", "Vet before paying; check comment quality"],
          ["Niche pivot", "They chase whatever went viral and drift from your category", "Short initial terms; review fit at each renewal"],
          ["Burnout or quitting", "Posting gaps, apologetic \"I'm back\" posts", "Avoid long lock-ins early; keep backups"],
          ["Inexperience", "Missed deadlines, unclear disclosure, unhappy with feedback", "A clear brief, a simple timeline and disclosure written into the agreement"],
          ["Thin history", "Less public content to check for brand-safety issues", "Read everything they've posted and ask direct questions"],
        ],
      },
      {
        type: "paragraph",
        text: "Inexperience deserves a special note. Many early creators have never had a written brief or a disclosure requirement. Spell out the ASCI expectation that paid and gifted content is clearly labelled, and see our influencer marketing compliance guide for what that means in practice. For authenticity checks before money changes hands, use our guide on how to vet influencers.",
        links: [
          { text: "influencer marketing compliance guide", href: "/blog/influencer-marketing-compliance" },
          { text: "how to vet influencers", href: "/blog/how-to-vet-influencers" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Treating every small creator as emerging. Most aren't, and that's fine; just don't pay a premium for growth that isn't there.",
          "Judging from one viral post.",
          "Committing on day one instead of watching for two or three months.",
          "Offering barter forever to someone whose time is clearly becoming valuable.",
          "Locking an early creator into a long, rigid contract that they'll resent as they grow.",
          "Skipping vetting because the creator \"seems genuine\".",
          "Not writing anything down, so nobody remembers who was on the watchlist when the next campaign comes round.",
        ],
      },
      { type: "heading", text: "Final thoughts", id: "conclusion" },
      {
        type: "paragraph",
        text: "Finding emerging influencers is less about a clever search and more about a habit: notice creators whose reach and craft are improving, watch them for a few months, then approach with a fair offer and a plan to grow together. The brands that do this well end up with creators who know the product, like the team and stay. If you want help building a pipeline of rising micro and nano creators, Kudozz runs micro and nano influencer campaigns for brands across India.",
        links: [{ text: "micro and nano influencer campaigns", href: "/services/micro-nano-influencer-marketing" }],
      },
    ],
    faqs: [
      {
        question: "How early is too early to approach a creator?",
        answer:
          "If you can't yet tell whether their growth is steady or a spike, it's too early to commit money. You can still follow them, engage genuinely with their content and add them to your watchlist. Approach once two or three monthly snapshots point the same way.",
      },
      {
        question: "Are emerging creators always cheaper?",
        answer:
          "Usually, but not always. Some price for where they expect to be rather than where they are. Focus on value: fee against the views and fit you can reasonably expect, plus the flexibility and attention you'll get.",
      },
      {
        question: "Can I lock in today's rate for a year?",
        answer:
          "You can ask, but a fixed rate for a long period can feel unfair to a creator whose audience grows quickly, and resentful partners rarely do their best work. A shorter term with a planned fee review is usually a better basis for a lasting relationship.",
      },
      {
        question: "How do I tell real growth from bought followers?",
        answer:
          "Real growth usually shows in views and comments as well as followers. A sudden follower jump with flat views, generic comments and no obvious viral post is a warning sign. Ask for insights screenshots and check comment quality before paying.",
      },
      {
        question: "Should emerging creators be part of every campaign?",
        answer:
          "Not necessarily. They suit always-on programmes, community building and testing new angles. For a high-stakes launch day where you need guaranteed reach, pair them with established creators rather than relying on them alone.",
      },
    ],
  },

  // #23 influencers-for-customer-journey (NEW)
  {
    slug: "influencers-for-customer-journey",
    category: "Campaign Strategy",
    title: "How to Find Influencers for Different Stages of the Customer Journey",
    seoTitle: "Influencers for Each Customer Journey Stage | Kudozz",
    excerpt:
      "Which creators to source for discovery, consideration, purchase, first use and advocacy: the creator types, search signals, formats and brief essentials for each stage.",
    metaDescription:
      "Source the right creator for each customer journey stage: who to look for, which signals to filter on, which formats work and what each brief must say.",
    author: AUTHOR,
    publishedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "7 min read",
    tags: ["Customer Journey", "Creator Discovery", "Campaign Strategy", "India"],
    related: ["influencer-marketing-funnel", "d2c-influencer-marketing-funnel-india", "influencer-campaign-brief", "customer-advocacy-program"],
    hero: {
      src: "/blog/discovery/influencers-for-customer-journey.svg",
      alt: "A five-stage customer journey path from discover to consider, buy, use and advocate, with the creator type to source and the signal to search for at each stage",
    },
    discoveryCta: {
      headline: "Source Creators for Every Stage",
      body: "Build one list per journey stage. Kudozz Discovery lets you search Instagram creators in India by niche, city, language and follower band, sort by average views or engagement rate, and save each stage's candidates into its own named list.",
      ctaLabel: "Explore Kudozz Discovery",
    },
    body: [
      {
        type: "paragraph",
        text: "Here's a brief that fails more often than it should: \"Find us ten creators for the new launch.\" Ten creators to do what? A creator who can make two lakh strangers notice a new hair oil is rarely the same creator who can talk a hesitant buyer through ingredients, and neither is the right person to show a new customer how to use it properly in week one. When one shortlist is asked to do every job, it usually does one job well and the rest badly.",
      },
      {
        type: "paragraph",
        text: "This guide is about sourcing: which kinds of creators to look for at each stage of the customer journey, what to filter and read for, which formats to ask for and what each stage's brief must include. The strategy of influencer funnels (budgets, KPIs, sequencing) is covered in our influencer marketing funnel guide, so here we assume you know which stages you're investing in and need to find the right people for them.",
        links: [{ text: "influencer marketing funnel guide", href: "/blog/influencer-marketing-funnel" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "table",
        headers: ["Stage", "The creator's job", "Who to source"],
        rows: [
          ["Discover", "Get the product noticed by the right strangers", "Entertainers, trend-led creators and broad-niche creators with strong views"],
          ["Consider", "Answer doubts and compare options", "Explainers, reviewers and credible niche experts"],
          ["Buy", "Give a reason to act now", "Creators with a record of driving clicks and codes, deal-sharers"],
          ["Use", "Help new customers get value fast", "Tutorial creators and UGC creators who demonstrate well"],
          ["Advocate", "Keep customers coming back and talking", "Existing customers, loyal fans, community-led creators"],
        ],
      },
      { type: "heading", text: "Why one shortlist can't cover the whole journey", id: "why-separate-lists" },
      {
        type: "paragraph",
        text: "Each stage rewards a different creator skill. Discovery rewards hooks and reach: the first two seconds matter more than the depth. Consideration rewards credibility and patience: the audience has already noticed you and wants to know if it's worth it. Purchase rewards trust plus a clear call to action. First use rewards clarity. Advocacy rewards relationship. A comedy creator who is brilliant at the first is often unconvincing at the second, and a dermatologist who is perfect for the second may be dull for the first.",
      },
      {
        type: "paragraph",
        text: "So run discovery as several small searches, one per stage you're funding, each with its own criteria. They can share a database and a review meeting. They shouldn't share a scorecard.",
      },
      { type: "heading", text: "Stage 1: Discover", id: "stage-discover" },
      {
        type: "list",
        items: [
          "Who to source: entertainers, skit and trend creators, broad lifestyle creators, and niche creators whose Reels regularly travel well beyond their follower base.",
          "What to search and read for: average views on recent Reels, strong hooks, content that gets shared and saved, and an audience in your delivery footprint.",
          "Formats: short Reels, trend adaptations, Collab posts that put your brand account alongside theirs.",
          "Brief essentials: one memorable message, the product shown clearly and early, freedom on format, and no pressure to explain every feature.",
        ],
      },
      {
        type: "paragraph",
        text: "A common slip here is sourcing for followers rather than for views. A creator whose recent Reels reliably travel is more useful for discovery than a bigger account whose posts have gone quiet. For how awareness campaigns are planned and measured, see influencer marketing for brand awareness.",
        links: [{ text: "influencer marketing for brand awareness", href: "/blog/influencer-marketing-brand-awareness" }],
      },
      { type: "heading", text: "Stage 2: Consider", id: "stage-consider" },
      {
        type: "list",
        items: [
          "Who to source: explainers, reviewers, comparison creators, and qualified experts where your category needs them (dermatologists, nutritionists, financial educators).",
          "What to search and read for: comments full of questions the creator actually answers, saves and shares on explainer posts, a history of honest reviews that mention downsides.",
          "Formats: carousels, longer Reels, side-by-side comparisons, \"one week using\" diaries, Q&A Stories.",
          "Brief essentials: the three objections customers raise most, the claims you can and can't make, permission to be honest about who the product isn't for.",
        ],
      },
      {
        type: "paragraph",
        text: "Your customer service inbox and product reviews are the best source for those objections. Turning customer questions into creator briefs shows how to collect them, and how to brief creators for honest product comparisons covers the comparison format without unfair claims.",
        links: [{ text: "Turning customer questions into creator briefs", href: "/blog/customer-insights-influencer-brief" }],
      },
      { type: "heading", text: "Stage 3: Buy", id: "stage-buy" },
      {
        type: "list",
        items: [
          "Who to source: creators who already run codes or affiliate links, deal and offer pages in your category, and trusted niche creators whose followers say \"ordered\" in the comments.",
          "What to search and read for: past sponsored posts with a clear call to action, comments asking for links or codes, link-in-bio pages that are kept up to date.",
          "Formats: Stories with link stickers, pinned comments with codes, unboxing plus offer, live sessions where your category suits it.",
          "Brief essentials: the exact offer and deadline, the destination (your site, Amazon, Flipkart, Nykaa or a quick-commerce app), tracking links or codes, and disclosure.",
        ],
      },
      {
        type: "paragraph",
        text: "Ask creators for results from previous conversion campaigns: clicks, code uses or sales, with screenshots where possible. Some will decline, which is fair, but those who share are telling you they're used to being measured. Set up tracking before the creator posts; tracking influencer sales with codes, links and analytics explains the options.",
        links: [{ text: "tracking influencer sales with codes, links and analytics", href: "/blog/track-influencer-sales" }],
      },
      {
        type: "discovery-cta",
        headline: "Build a Shortlist for Each Journey Stage",
        body: "Discovery-stage creators often show up when you sort by average views; consideration-stage creators when you filter by niche and minimum engagement rate. Kudozz Discovery lets you do both for Instagram creators in India and keep each stage in its own list.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Stage 4: Use", id: "stage-use" },
      {
        type: "list",
        items: [
          "Who to source: tutorial creators, UGC creators who demonstrate clearly, and creators who already use products like yours every day.",
          "What to search and read for: clear step-by-step content, good lighting and audio, and comments where people say a tutorial helped.",
          "Formats: how-to Reels, \"first week\" routines, setup and troubleshooting videos you can reuse on product pages, in order emails and in WhatsApp follow-ups.",
          "Brief essentials: the mistakes new customers make, the result to expect and when, usage rights for reuse outside the creator's feed.",
        ],
      },
      {
        type: "paragraph",
        text: "This stage is often forgotten because it doesn't show up in launch metrics, yet it shapes reviews, returns and repeat purchase. Many of the best creators for it are UGC creators rather than influencers, since you mostly need the content rather than their audience; how to find UGC creators covers that search.",
        links: [{ text: "how to find UGC creators", href: "/blog/how-to-find-ugc-creators" }],
      },
      { type: "heading", text: "Stage 5: Advocate", id: "stage-advocate" },
      {
        type: "list",
        items: [
          "Who to source: existing customers who post about you unprompted, loyal followers of your brand account, community-led creators who run groups or broadcast channels.",
          "What to search and read for: your tagged posts and mentions, repeat buyers in your order data who are also active creators, people who already defend you in comments.",
          "Formats: \"six months later\" updates, refill or repeat-purchase content, referral programmes, community events.",
          "Brief essentials: very light. Give them early access, a referral mechanism and a direct line to the team rather than a script.",
        ],
      },
      {
        type: "paragraph",
        text: "Advocacy creators are found more than searched for: start with your own tags and customer list. Our guides to customer advocacy programmes and influencer marketing for customer retention go deeper on running this stage.",
        links: [
          { text: "customer advocacy programmes", href: "/blog/customer-advocacy-program" },
          { text: "influencer marketing for customer retention", href: "/blog/influencer-marketing-customer-retention" },
        ],
      },
      { type: "heading", text: "A sourcing matrix for small budgets", id: "sourcing-matrix" },
      {
        type: "paragraph",
        text: "Most brands can't fund five separate rosters. The practical answer is to cover two adjacent stages with one creator where their strengths overlap, and to be deliberate about which stage you're leaving to other channels. Say a Kochi Ayurvedic hair-oil brand has a modest quarterly budget:",
      },
      {
        type: "table",
        headers: ["Creator slot", "Stages covered", "Why this pairing works"],
        rows: [
          ["Two Malayalam lifestyle creators with strong Reel views", "Discover", "Reach in the home market with native-language hooks"],
          ["One hair-care explainer with an engaged comment section", "Consider + Buy", "Answers doubts, then shares the code in Stories"],
          ["Two UGC creators", "Use", "Tutorial videos reused on the product page and in WhatsApp follow-ups"],
          ["Five existing customers who already post", "Advocate", "Product and early access in return for honest updates"],
        ],
      },
      {
        type: "paragraph",
        text: "The pairing that rarely works is Discover plus Use. Entertainers seldom make good tutorials, and tutorial creators seldom stop the scroll. If budget forces a single pairing, Consider plus Buy is usually the strongest, because the same trust that answers doubts also makes the call to action land.",
      },
      { type: "heading", text: "Connect the stages so creators hand over to each other", id: "connect-the-stages" },
      {
        type: "paragraph",
        text: "Sourcing by stage only pays off if the stages are linked. Someone who watched a discovery-stage Reel should next see consideration-stage content, not the same hook again. That has two consequences for sourcing. First, time the searches: line up consideration creators before discovery content goes live, so the follow-up exists when interest peaks. Second, secure the rights you need: if you plan to run a reviewer's video as an ad to people who engaged with an entertainer's Reel, agree usage rights when you book the reviewer, not afterwards. Connecting influencer campaigns with retargeting explains how the paid side of that handover works.",
        links: [{ text: "Connecting influencer campaigns with retargeting", href: "/blog/influencer-retargeting" }],
      },
      {
        type: "paragraph",
        text: "Keep one shared sheet where every creator is tagged with their stage, so the team can see at a glance whether any stage is empty before the campaign starts.",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Using one scorecard for every creator, so reach-heavy creators win every slot.",
          "Briefing a discovery-stage creator with a long list of features.",
          "Expecting conversion from creators whose audience has never heard of you.",
          "Ignoring the first-use stage, then wondering why reviews mention confusion.",
          "Searching for advocates among strangers instead of starting with customers who already post.",
          "Sending every stage's creators to the same landing page with the same offer.",
        ],
      },
      { type: "heading", text: "Bringing it together", id: "conclusion" },
      {
        type: "paragraph",
        text: "Sourcing by journey stage is simple once you stop asking one list to do everything. Decide which stages you're funding, write a short set of criteria for each, search and read with those criteria, and brief each creator for the job you hired them for. The result is a roster where every creator has a clear role and a fair way to be measured. For a ready-made structure for those briefs, see how to write an influencer campaign brief, and if you'd like a team to plan the roster across stages, Kudozz's campaign strategy service can help.",
        links: [
          { text: "how to write an influencer campaign brief", href: "/blog/influencer-campaign-brief" },
          { text: "campaign strategy service", href: "/services/campaign-strategy" },
        ],
      },
    ],
    faqs: [
      {
        question: "Can one influencer cover the whole customer journey?",
        answer:
          "Occasionally, over a long partnership: a trusted niche creator can introduce a product, review it, share an offer and post a follow-up months later. For a single campaign, though, expecting one creator to do every job usually weakens all of them.",
      },
      {
        question: "Which journey stage should a new brand fund first?",
        answer:
          "Usually consideration, paired with a light purchase push. A new brand needs credibility more than raw reach, and creators who explain and review build that. Add discovery-stage creators once you know which message converts.",
      },
      {
        question: "How do I measure creators at different stages fairly?",
        answer:
          "Give each stage its own measure: views and reach in your target cities for discovery, saves, comments and click-throughs for consideration, tracked sales for purchase, reuse and support-ticket themes for first use, and repeat posts or referrals for advocacy.",
      },
      {
        question: "Do retention and advocacy creators need to be paid?",
        answer:
          "Often not in the same way. Many advocates are happy with early access, recognition and a referral reward. If you ask for specific deliverables, usage rights or a posting schedule, pay for it, and always make sure any material connection is disclosed.",
      },
      {
        question: "Should B2B brands think about the journey the same way?",
        answer:
          "Yes, with longer gaps between stages and different creators: industry educators and practitioners for consideration, and customers or partners for advocacy. Our guide on influencer marketing for long sales cycles covers how that changes planning.",
      },
    ],
  },

  // #25 find-influencers-by-content-niche (NEW)
  {
    slug: "find-influencers-by-content-niche",
    category: "Influencer Marketing",
    title: "How to Find Influencers in Specific Content Niches and Sub-Niches",
    seoTitle: "How to Find Niche Content Creators and Sub-Niches | Kudozz",
    excerpt:
      "A method for going from a broad category to the exact sub-niche your customers follow: product-led niche maps, keyword and hashtag trees, adjacent niches and a quick depth test.",
    metaDescription:
      "Find niche content creators: map your product to sub-niches, build keyword and hashtag trees, test adjacent niches and check each creator's depth.",
    author: AUTHOR,
    publishedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "7 min read",
    tags: ["Niche Creators", "Creator Discovery", "Sub-Niches", "India"],
    related: ["creator-niches-beyond-lifestyle", "influencer-search-tools", "influencer-market-mapping", "how-to-find-instagram-influencers"],
    hero: {
      src: "/blog/discovery/find-influencers-by-content-niche.svg",
      alt: "A niche tree branching from a broad category into sub-niches and micro-topics, with three rings showing core, adjacent and lateral niches around a product",
    },
    discoveryCta: {
      headline: "Start Broad, Then Go Deep",
      body: "Use a broad niche filter to get candidates, then read for the sub-niche. Kudozz Discovery lets you search Instagram creators in India by niche, city, language and engagement, and save each sub-niche's candidates into its own list so you can compare them side by side.",
      ctaLabel: "Explore Kudozz Discovery",
    },
    body: [
      {
        type: "paragraph",
        text: "Is \"fitness\" a niche? A calisthenics coach in Pune, a postpartum yoga teacher in Chennai, a marathon runner in Delhi and a gym-meme account in Indore all call themselves fitness creators. Their audiences barely overlap. If you sell a resistance-band kit for home workouts, maybe one of the four is right for you, and the label didn't help you find which.",
      },
      {
        type: "paragraph",
        text: "That's why niche search goes wrong so often. Broad categories are where creators file themselves and where filters start, but buying decisions happen at the sub-niche level. This guide gives you a repeatable method for mapping a product to the sub-niches its customers follow, building keyword and hashtag trees to search them, deciding which adjacent niches to test, and checking that a creator's focus is as deep as their bio suggests. If you're looking for ideas beyond the usual lifestyle categories, 13 creator niches beyond lifestyle is a good starting list.",
        links: [{ text: "13 creator niches beyond lifestyle", href: "/blog/creator-niches-beyond-lifestyle" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "list",
        items: [
          "Work in three levels: niche (fitness), sub-niche (home strength training), micro-topic (resistance-band routines for small flats).",
          "Map from your product outwards: the problems it solves, the rituals it fits, the identities of its buyers.",
          "Turn each sub-niche into a keyword and hashtag tree, including Hinglish and regional terms, and search each branch.",
          "Test one or two adjacent niches with a small budget before scaling.",
          "Check depth: what share of a creator's recent posts sit in the sub-niche, and whether the comments show real expertise.",
        ],
      },
      { type: "heading", text: "Niche, sub-niche and micro-topic", id: "three-levels" },
      {
        type: "table",
        headers: ["Level", "Example: food", "Example: personal finance", "Example: home"],
        rows: [
          ["Niche", "Food", "Personal finance", "Home and decor"],
          ["Sub-niche", "High-protein vegetarian cooking", "Money for first-job earners", "Rental-flat makeovers"],
          ["Micro-topic", "Tiffin-box ideas for gym-goers", "Building an emergency fund on a first salary", "No-drill storage hacks"],
        ],
      },
      {
        type: "paragraph",
        text: "Search tools and Instagram categories usually work at the first level. Your customers live at the second and third. The method below is about getting from one to the other without guessing.",
      },
      { type: "heading", text: "Step 1: Map your product to sub-niches", id: "product-to-sub-niche" },
      {
        type: "paragraph",
        text: "Start from the product, not the category. Ask four questions and write every answer down, however obvious it looks:",
      },
      {
        type: "list",
        items: [
          "What problems does it solve? Each problem is a sub-niche where people already watch content about that problem.",
          "What rituals or routines does it fit into? Morning routines, weekend projects, festive preparation, exam season.",
          "Who are its buyers, as they'd describe themselves? \"Home baker\", \"first-time parent\", \"cyclist\", \"WFH techie\".",
          "Where is it used? Kitchen, office desk, hostel, car, trek.",
        ],
      },
      {
        type: "paragraph",
        text: "For example, a Bengaluru specialty-coffee roaster might end up with: home brewing, coffee gear reviews, café hopping in Bengaluru, South Indian filter coffee nostalgia, desk and productivity setups, latte art, and weekend cycling culture. Only the first two are obviously \"coffee\". The rest are where a lot of its actual buyers spend their scrolling time.",
      },
      { type: "heading", text: "Step 2: Build keyword and hashtag trees", id: "keyword-trees" },
      {
        type: "paragraph",
        text: "Each sub-niche becomes a tree: a root term, branches that narrow it, and leaves that are specific enough to surface individual creators. Include the words your customers actually use, which in India often means English, Hinglish and a regional language side by side.",
      },
      {
        type: "template",
        label: "Keyword and hashtag tree (example: home brewing)",
        text: "Root: home brewing / coffee at home\n  Branch: pour-over\n    Leaves: V60 recipe, pour over India, #pourovercoffee, #v60\n  Branch: South Indian filter coffee\n    Leaves: filter kaapi, decoction, #filterkaapi, #filtercoffee\n  Branch: cold brew\n    Leaves: cold brew at home, summer coffee, #coldbrewindia\n  Branch: gear\n    Leaves: French press review, moka pot, hand grinder India\nExclude: café ads, giveaway pages, repost accounts",
      },
      {
        type: "paragraph",
        text: "Search each leaf in Instagram's search, look at recent posts as well as top posts, and note the creators who appear on more than one leaf. Those repeat appearances are your strongest sub-niche candidates. Mid-sized hashtags usually work better than huge ones, which are crowded with big accounts and reposts. Our guide on how to find Instagram influencers covers the mechanics of Instagram search in more detail.",
        links: [{ text: "how to find Instagram influencers", href: "/blog/how-to-find-instagram-influencers" }],
      },
      { type: "heading", text: "Step 3: Use broad filters, then read for the sub-niche", id: "filters-then-reading" },
      {
        type: "paragraph",
        text: "Discovery tools help with the first cut. In Kudozz Discovery, for instance, the niche filter covers broad categories such as Food & Beverages, Health & Fitness, Finance & Business, Home & Decor and Technology & Gadgets. That turns a broad search into a manageable pool, and you can combine it with city, language and engagement. What no niche filter can do is tell a pour-over enthusiast from a café-review page. That last step is reading.",
      },
      {
        type: "paragraph",
        text: "A practical rhythm: filter broadly, open the profiles that look promising, and tag each with the sub-niche you actually see in their last few weeks of content. You'll often find that a broad category splits into three or four sub-niches you didn't plan for, which is useful in itself.",
      },
      {
        type: "discovery-cta",
        headline: "Explore Creator Profiles by Niche",
        body: "Filter Instagram creators in India by niche, then narrow by city, language and minimum engagement in Kudozz Discovery. Open the profiles that look right, check their niches, languages and posting frequency, and save each sub-niche into its own list.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Step 4: Map adjacent and lateral niches", id: "adjacent-niches" },
      {
        type: "paragraph",
        text: "The core niche is crowded: every coffee brand calls the same coffee creators. Adjacent niches share your buyers' interests without being about your category, and they're often cheaper and less saturated. Think in three rings.",
      },
      {
        type: "table",
        headers: ["Ring", "Definition", "Example for the coffee roaster", "How to use it"],
        rows: [
          ["Core", "Content about your category", "Home brewing, coffee gear", "Product education and reviews"],
          ["Adjacent", "Content about something your buyers also care about, where your product fits naturally", "Desk setups, baking, book reviews", "Product as part of a routine"],
          ["Lateral", "Shared audience, little natural product fit", "Indie music, travel", "Occasional tests only; brief carefully"],
        ],
      },
      {
        type: "paragraph",
        text: "As a rule of thumb, put most of your budget in core and adjacent, and use lateral niches only for small experiments where the creative idea is strong. When you test an adjacent niche, change one thing at a time: same message, same offer, different niche. Otherwise you won't know what caused the result. For a wider view of who already occupies your category, influencer market mapping explains how to chart it, and competitor influencer research shows which niches rivals are already using.",
        links: [
          { text: "influencer market mapping", href: "/blog/influencer-market-mapping" },
          { text: "competitor influencer research", href: "/blog/competitor-influencer-strategy" },
        ],
      },
      { type: "heading", text: "Step 5: Check sub-niche depth", id: "depth-test" },
      {
        type: "paragraph",
        text: "A bio that says \"skincare | travel | food | tech\" tells you very little. Run a quick depth test before anything else:",
      },
      {
        type: "list",
        items: [
          "Share test: count how many of the last 20 posts sit in your sub-niche. A handful suggests an occasional topic; a clear majority suggests a real focus.",
          "Vocabulary test: do they use the terms practitioners use, and use them correctly?",
          "Comment test: do followers ask detailed sub-niche questions, and does the creator answer them well?",
          "History test: how long have they posted on this topic? A sub-niche adopted last month may be a trend-chase.",
          "Credential test: in regulated or high-trust categories, check qualifications. Investment advice, medical and nutrition claims need particular care.",
        ],
      },
      {
        type: "paragraph",
        text: "The credential test is the one brands most often skip. A finance creator giving specific investment advice may need to be registered with SEBI, and health claims made in sponsored content can fall foul of advertising rules whoever makes them. Our influencer marketing compliance guide covers what to check.",
        links: [{ text: "influencer marketing compliance guide", href: "/blog/influencer-marketing-compliance" }],
      },
      { type: "heading", text: "Multi-niche creators and niche drift", id: "multi-niche" },
      {
        type: "paragraph",
        text: "Not every multi-niche creator is a bad fit. Some have a strong personality that holds several topics together, and their audience follows them rather than the topic. The question is whether your sub-niche is part of what their audience comes for. Check how posts in your sub-niche perform compared with their other topics: if those posts get noticeably fewer views and comments, the audience is tolerating that topic rather than seeking it.",
      },
      {
        type: "paragraph",
        text: "Watch for drift too. Creators move between sub-niches as their lives and the algorithm change. A creator who was deep in budget travel two years ago may now post mostly about parenting. Always judge on recent content, and record the sub-niche you saw with a date so the next person doesn't rely on an out-of-date label.",
      },
      { type: "heading", text: "A sub-niche sourcing sheet", id: "sourcing-sheet" },
      {
        type: "template",
        label: "Columns for a sub-niche sourcing sheet",
        text: "Sub-niche | Ring (core / adjacent / lateral) | Keyword or hashtag leaf where found | Handle | City | Language | Share of last 20 posts in sub-niche | Comment depth (high / medium / low) | Credentials if relevant | Date checked | Notes",
      },
      {
        type: "paragraph",
        text: "Keep one tab per sub-niche. When a campaign brief arrives, you can see at a glance which sub-niches are well covered and which are thin. Thin sub-niches are where new searches should go next.",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Trusting the self-declared niche in a bio or a tool's category without reading the content.",
          "Searching only the core niche, where every competitor is bidding for the same creators.",
          "Building keyword lists only in English when your customers search and comment in Hinglish or a regional language.",
          "Testing a lateral niche with a big budget before proving the adjacent ones.",
          "Ignoring credentials in finance, health and nutrition.",
          "Relying on a niche label recorded months ago.",
        ],
      },
      { type: "heading", text: "Final thoughts", id: "conclusion" },
      {
        type: "paragraph",
        text: "Niche search works when you stop at the right level of detail. Map your product to the sub-niches its customers actually follow, grow keyword trees for each, use broad filters for the first cut and your own reading for the last, test adjacent niches carefully and check depth before you commit. Do it once and you'll have a sub-niche map you can reuse for every campaign. For how niche fits alongside location, language and content style, read our guide to finding influencers by niche, location and audience relevance, or ask Kudozz's creator discovery team to build the map for you.",
        links: [
          { text: "finding influencers by niche, location and audience relevance", href: "/blog/influencer-search-tools" },
          { text: "creator discovery team", href: "/services/creator-discovery" },
        ],
      },
    ],
    faqs: [
      {
        question: "How narrow should a sub-niche be?",
        answer:
          "Narrow enough that the audience shares a clear buying reason, but wide enough that you can find several creators in it. If a sub-niche turns up only one or two credible creators after a proper search, widen it a level.",
      },
      {
        question: "Are niche creators always smaller?",
        answer:
          "Often, but not always. Some sub-niches have large, established creators, especially in personal finance, tech and fitness. Size and niche depth are separate questions, so judge them separately.",
      },
      {
        question: "How do I find niche creators who post in regional languages?",
        answer:
          "Build your keyword tree in that language too, including transliterated terms people type in English script. Ask a native speaker to check which terms are actually used, and filter by language where your search tool allows it.",
      },
      {
        question: "Should I avoid creators who cover several niches?",
        answer:
          "No. Check whether posts in your sub-niche perform as well as their other content and whether the audience asks about it. A versatile creator whose audience genuinely engages with your topic can be a strong choice.",
      },
      {
        question: "How often should I refresh a niche map?",
        answer:
          "Review it every quarter, and recheck any creator's sub-niche before you approach them. Creators change focus over time, and new sub-niches appear as trends and products change.",
      },
    ],
  },

  // #40 influencer-sourcing-workflow (NEW)
  {
    slug: "influencer-sourcing-workflow",
    category: "Campaign Strategy",
    title: "How to Create a Repeatable Influencer Sourcing Workflow for Your Marketing Team",
    seoTitle: "Influencer Sourcing Workflow for Marketing Teams | Kudozz",
    excerpt:
      "Stop restarting creator search for every campaign: an intake form, clear roles, internal turnaround targets, a weekly sourcing rhythm and the templates that make it repeatable.",
    metaDescription:
      "Build a repeatable influencer sourcing workflow: intake form, roles, internal turnaround targets, a weekly cadence, saved searches and handover templates.",
    author: AUTHOR,
    publishedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "7 min read",
    tags: ["Sourcing Workflow", "Creator Discovery", "Marketing Operations", "India"],
    related: ["influencer-discovery-checklist", "influencer-database", "influencer-marketing-operations", "influencer-marketing-team-structure"],
    hero: {
      src: "/blog/discovery/influencer-sourcing-workflow.svg",
      alt: "A weekly sourcing calendar from Monday intake to Friday handover, with the owner and output for each day and a loop back to the creator database",
    },
    discoveryCta: {
      headline: "Make Creator Search a Weekly Habit",
      body: "Give your sourcing workflow a dependable search step. Kudozz Discovery lets your team search Instagram creators in India by niche, location and engagement, bookmark or share filtered searches by URL, and keep each request's candidates in its own named list.",
      ctaLabel: "Explore Kudozz Discovery",
    },
    body: [
      {
        type: "paragraph",
        text: "If every campaign at your company starts with someone in a group chat asking \"can anyone find twenty creators by Friday?\", you don't have a sourcing problem. You have a workflow problem. The search gets done, usually by whoever is least busy, in whatever way they remember, and the results live in a sheet nobody else can find. Next quarter the same scramble starts again.",
      },
      {
        type: "paragraph",
        text: "A sourcing workflow turns that into a routine: requests come in one way, a named person owns them, searches follow the same steps, shortlists arrive in the same format on a predictable day, and every creator found goes back into a shared pool. This guide covers the operating side: roles, an intake form, turnaround targets, a weekly cadence and templates. For the checks inside a single search, use our influencer discovery checklist; for where the results are stored, see how to build an influencer database.",
        links: [
          { text: "influencer discovery checklist", href: "/blog/influencer-discovery-checklist" },
          { text: "how to build an influencer database", href: "/blog/influencer-database" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "list",
        items: [
          "Route every creator request through one short intake form.",
          "Name a sourcing owner and an approver for each request, even if one person plays several roles.",
          "Set internal turnaround targets for each stage so requesters know when to expect a shortlist.",
          "Run sourcing on a weekly rhythm: triage, search, research, review, hand over.",
          "Save searches, log what you tried and return every creator to the database, so each request starts further ahead than the last.",
        ],
      },
      { type: "heading", text: "What a sourcing workflow covers", id: "what-it-covers" },
      {
        type: "paragraph",
        text: "Sourcing is the slice of influencer operations between \"we need creators\" and \"here's the approved shortlist\". It ends when outreach begins. Keeping it separate matters because it has a different rhythm from the rest of a campaign: requests arrive unevenly, searches can run in parallel, and the output (a researched shortlist) is easy to define. The wider process of running creator partnerships, from contracts to payments, is covered in influencer marketing operations.",
        links: [{ text: "influencer marketing operations", href: "/blog/influencer-marketing-operations" }],
      },
      { type: "heading", text: "Roles: who does what", id: "roles" },
      {
        type: "table",
        headers: ["Role", "Responsibility", "In a small team"],
        rows: [
          ["Requester", "Fills in the intake form and answers questions about the brief", "Brand or product manager"],
          ["Sourcing owner", "Triages requests, plans the search, owns the deadline", "The influencer or social media lead"],
          ["Researcher", "Runs searches, screens profiles, writes research notes", "Same person, or an intern or executive"],
          ["Approver", "Signs off the shortlist against the brief and budget", "Marketing head or founder"],
          ["Outreach owner", "Takes the approved shortlist and makes contact", "Often the sourcing owner"],
        ],
      },
      {
        type: "paragraph",
        text: "One person can hold several roles. What matters is that each request has exactly one sourcing owner and exactly one approver. Shortlists reviewed by committee tend to stall. If you're deciding where influencer work should sit in your organisation, influencer marketing team structure lays out the options.",
        links: [{ text: "influencer marketing team structure", href: "/blog/influencer-marketing-team-structure" }],
      },
      { type: "heading", text: "The intake form", id: "intake-form" },
      {
        type: "paragraph",
        text: "Most wasted sourcing time comes from vague requests. A short form, filled in before any search starts, fixes that. Keep it to one screen; if it takes longer than five minutes, people will skip it. A field-by-field template is in how to write an influencer sourcing brief.",
        links: [{ text: "how to write an influencer sourcing brief", href: "/blog/influencer-sourcing-brief" }],
      },
      {
        type: "template",
        label: "Creator sourcing request",
        text: "Request ID | Date | Requester\nCampaign or product:\nObjective (awareness / consideration / sales / content for ads / always-on):\nPlatform: Instagram / YouTube / other\nNumber of creators needed (plus backups):\nFollower range or tier preference:\nNiche and sub-niche:\nCities, states or regions:\nLanguages:\nAudience must-haves (to verify later with insights):\nBudget per creator or total, and barter / paid / both:\nContent needed and usage rights:\nDates: shortlist needed by / content live by\nExclusions: competitors' recent collaborators, creators used in the last X months, categories to avoid\nApprover:",
      },
      {
        type: "paragraph",
        text: "The exclusions line saves a surprising amount of time. Knowing up front that the brand won't work with anyone who promoted a rival in the last three months removes a whole round of rework at review.",
      },
      { type: "heading", text: "Stages and turnaround targets", id: "stages-and-turnaround" },
      {
        type: "paragraph",
        text: "Agree internal targets for each stage. These aren't promises to creators; they're commitments between teams, so requesters plan with realistic dates. The timings below are an example for a request of about ten creators; adjust them to your team's size and volume.",
      },
      {
        type: "table",
        headers: ["Stage", "Owner", "Output", "Example target"],
        rows: [
          ["Triage", "Sourcing owner", "Request accepted, questions sent back, or declined with a reason", "1 working day"],
          ["Search", "Researcher", "Longlist with a search log", "2 working days"],
          ["Screen", "Researcher", "Longlist cut to candidates that pass the hard gates", "1 working day"],
          ["Research", "Researcher", "Research note per remaining candidate", "1–2 working days"],
          ["Review", "Approver", "Approved shortlist with backups, or specific changes", "1 working day"],
          ["Handover", "Sourcing owner", "Shortlist passed to outreach with notes", "Same day as approval"],
        ],
      },
      {
        type: "paragraph",
        text: "Publish the targets where requesters can see them, and add a rush path for genuine emergencies with a limit on how often it can be used. Without a limit, everything becomes a rush. For the shortlisting method itself (gates, weights and tiers), see our step-by-step guide to shortlisting influencers.",
        links: [{ text: "step-by-step guide to shortlisting influencers", href: "/blog/influencer-shortlist" }],
      },
      { type: "heading", text: "A weekly sourcing rhythm", id: "weekly-cadence" },
      {
        type: "paragraph",
        text: "Requests that arrive at random get handled at random. Batching them into a weekly rhythm lets one person work on several requests without constant context-switching.",
      },
      {
        type: "table",
        headers: ["Day", "Focus", "What happens"],
        rows: [
          ["Monday", "Triage", "Review new requests, check intake forms, ask clarifying questions, set due dates"],
          ["Tuesday", "Search", "Run saved and new searches, pull matches from the database, log what was tried"],
          ["Wednesday", "Screen and research", "Apply hard gates, read profiles, write research notes"],
          ["Thursday", "Shortlist", "Score, tier and add backups; prepare the review pack"],
          ["Friday", "Review and handover", "Approver signs off; outreach owner receives the list; database updated"],
        ],
      },
      {
        type: "paragraph",
        text: "Add two slower loops. Once a month, refresh the database: update follower counts and recent performance for active creators, archive anyone who has gone quiet, and add promising names found along the way. Once a quarter, run a short retrospective on sourcing itself: which requests overran, which searches produced creators who performed, and which intake questions people keep getting wrong.",
      },
      {
        type: "discovery-cta",
        headline: "Start Your Creator Discovery on Tuesday, Not From Scratch",
        body: "In Kudozz Discovery, filters stay in the URL, so your team can bookmark the searches it runs every week and share them with colleagues. Save each request's Instagram creators into its own named list, ready for Wednesday's research.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Templates that make it repeatable", id: "templates" },
      {
        type: "subheading",
        text: "Saved search library",
      },
      {
        type: "paragraph",
        text: "Keep a short document of searches that have worked, by category: the filters or keywords used, the platform, and a link where your tool allows one. A new researcher can then start from proven searches rather than a blank box. Review the library quarterly and delete searches that keep returning the same names.",
      },
      {
        type: "subheading",
        text: "Search log",
      },
      {
        type: "template",
        label: "Search log (one line per search run)",
        text: "Request ID | Date | Researcher | Source (tool / Instagram search / hashtag / database / referral) | Filters or keywords used | Profiles reviewed | Candidates kept | Notes",
      },
      {
        type: "paragraph",
        text: "The log shows the approver how thorough the search was and shows you, over time, which sources actually produce usable creators.",
      },
      {
        type: "subheading",
        text: "Shortlist handover note",
      },
      {
        type: "template",
        label: "Shortlist handover",
        text: "Request ID | Campaign | Approved by | Date\nPrimary creators: handle, why chosen (one line), tier, estimated fee range, preferred contact channel, personalisation hook\nBackups: handle, which primary they replace\nRejected but worth keeping: handle, reason, revisit date\nOpen questions for outreach: audience proof to request, exclusivity to check\nDatabase updated: yes / no",
      },
      {
        type: "paragraph",
        text: "The handover note feeds straight into an outreach list. How to create an influencer outreach list shows how outreach teams segment and track it from there.",
        links: [{ text: "How to create an influencer outreach list", href: "/blog/how-to-create-influencer-outreach-list" }],
      },
      { type: "heading", text: "Measuring the workflow", id: "measuring" },
      {
        type: "paragraph",
        text: "You don't need a dashboard. Track a handful of numbers per request in the same sheet as the intake forms, and look at them each quarter:",
      },
      {
        type: "list",
        items: [
          "Time from request to approved shortlist, against your target.",
          "Share of shortlisted creators approved at first review. Low numbers usually mean the intake form is missing something.",
          "Reply rate from outreach to sourced creators.",
          "Share of creators found in your own database versus new searches. This should rise as the workflow matures.",
          "How sourced creators performed once they posted, linked back to the source that found them.",
        ],
      },
      {
        type: "paragraph",
        text: "If you run creators continuously rather than campaign by campaign, the same rhythm becomes the engine of an always-on programme; see how to build an always-on influencer marketing program.",
        links: [{ text: "always-on influencer marketing program", href: "/blog/always-on-influencer-marketing" }],
      },
      { type: "heading", text: "Onboarding someone new to the workflow", id: "onboarding" },
      {
        type: "paragraph",
        text: "A workflow is only repeatable if a new team member can run it without shadowing you for a month. Give every new researcher the same starter pack and a small first assignment:",
      },
      {
        type: "list",
        items: [
          "The intake form, the turnaround targets and the weekly rhythm on one page.",
          "Access to the database, the saved search library and two or three past handover notes that were approved first time.",
          "A short note on house rules: which categories the brand avoids, how contact details are stored, and who can approve a rush.",
          "A practice request using a past brief, reviewed against what the team actually shortlisted.",
          "A first live request run alongside the sourcing owner, with the research notes checked before review.",
        ],
      },
      {
        type: "paragraph",
        text: "The practice request is the fastest teacher. Comparing a newcomer's shortlist with the one the team chose shows exactly where judgement differs, and that conversation is worth more than any written guide.",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Accepting requests by chat message instead of the intake form.",
          "Having no named approver, so shortlists circulate for days.",
          "Setting turnaround targets nobody publishes, then being blamed for missing them.",
          "Searching from scratch every time instead of starting with the database and saved searches.",
          "Treating rejected creators as wasted work rather than logging them for future briefs.",
          "Letting the rush path become the normal path.",
          "Never reviewing which sources actually find creators who perform.",
        ],
      },
      { type: "heading", text: "Bringing it together", id: "conclusion" },
      {
        type: "paragraph",
        text: "A repeatable sourcing workflow is mostly a set of small agreements: one intake form, one owner, one approver, a few published targets and a weekly rhythm. The templates make it easy to follow; the monthly and quarterly loops make it better over time. Within a few cycles, requests stop feeling like emergencies and your database starts doing half the work. If your team would rather not run sourcing in-house, Kudozz's creator discovery service can take requests through the same kind of process and hand back shortlists ready for approval.",
        links: [{ text: "creator discovery service", href: "/services/creator-discovery" }],
      },
    ],
    faqs: [
      {
        question: "How many people do I need to run a sourcing workflow?",
        answer:
          "One person can run it for a modest volume of requests, as long as someone else approves shortlists. As requests grow, the first role worth adding is a researcher, so the sourcing owner can focus on triage, review and quality.",
      },
      {
        question: "Should sourcing sit with the social media team or the brand team?",
        answer:
          "Whichever team owns creator relationships day to day. Brand and product teams should be requesters and, where relevant, approvers, but splitting the search itself across teams usually leads to duplicate outreach to the same creators.",
      },
      {
        question: "How do we handle urgent requests?",
        answer:
          "Create a rush path with a shorter target and a cap on how often each team can use it each quarter. Urgent requests should still use the intake form; it's the fastest way to avoid searching for the wrong thing.",
      },
      {
        question: "Can we use the same workflow for UGC creators and influencers?",
        answer:
          "Yes, with a different intake field set. UGC requests care more about production quality, usage rights and turnaround than audience fit, so add those questions and adjust the research note accordingly.",
      },
      {
        question: "What should happen to creators we found but didn't use?",
        answer:
          "Log them in the database with the reason they weren't chosen and a revisit date. A creator who was too expensive for one brief or outside one city may be ideal for the next, and that saved research is the main payoff of a repeatable workflow.",
      },
    ],
  },
];
