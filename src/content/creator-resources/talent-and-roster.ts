import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_FACTS_REVIEWED, CREATOR_LAYER_11_PUBLISHED as PUBLISHED, SOURCES } from "@/content/creator-resources/shared";

/**
 * Creator talent and roster management (860–869 layer), following the talent lifecycle. Intent boundaries:
 * - creator-talent-acquisition: finding creators and bringing them into the agency (absorbs recruitment, 861)
 * - creator-talent-screening: evaluating a creator before signing, with an interactive scorecard
 * - creator-roster-strategy: designing the roster's composition (absorbs roster diversity 864 and talent categories 865)
 * - creator-talent-database: the data system behind the roster, incl. DPDP considerations
 * - creator-roster-evaluation: reviewing existing creators and deciding keep, develop, restructure or part ways
 * - creator-talent-development: helping signed creators grow
 * Existing owners: creator-talent-management (section pillar: day-to-day management, absorbs talent retention 869),
 * how-to-vet-influencers (brands vetting creators for a campaign), creator-manager-vs-agency (the creator's view).
 */
export const talentAndRosterPosts: BlogPost[] = [
  {
    slug: "creator-talent-acquisition",
    category: "Creator Resources",
    title: "Creator Talent Acquisition: How Agencies Find and Sign New Creators",
    seoTitle: "Creator Talent Acquisition: Find and Recruit Creators",
    excerpt:
      "How creator management agencies find and recruit new talent: a demand-led recruiting plan, sourcing channels, how to approach creators without spamming them, the pitch that earns a reply, discovery calls, handling competing offers and a signing process that starts the relationship well.",
    metaDescription:
      "How agencies find and recruit creators: demand-led plans, sourcing channels, outreach, the agency pitch, discovery calls and a fair signing process.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "14 min read",
    tags: ["creator talent acquisition", "recruit creators for agency", "how agencies find creators", "sign influencers to agency", "talent scouting creators", "creator recruitment"],
    related: ["creator-talent-screening", "creator-roster-strategy", "creator-talent-management"],
    body: [
      {
        type: "paragraph",
        text: "Good creators are already busy. The ones brands keep rebooking usually have offers from other managers, brand teams messaging them directly and little time for vague DMs promising \"more deals\". An agency recruits well when it knows exactly who it's looking for and can explain, specifically, what it will do for that person.",
      },
      {
        type: "paragraph",
        text: "Talent acquisition covers two jobs: finding creators who fit (sourcing) and bringing them into the agency (recruitment). Evaluating whether to sign them is covered separately in creator talent screening.",
        links: [{ text: "creator talent screening", href: "/blog/creator-talent-screening" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Agencies find creators by starting from demand: the briefs they couldn't fill and the creator types their clients keep asking for. They source through platform search, referrals from existing creators, brand and agency partners, creator communities and events, and inbound applications. Recruitment then means a personalised approach, a pitch that states what the agency will actually do (and won't promise), a discovery call to understand the creator's goals, screening, and a fair written agreement explained before signing.",
      },
      { type: "heading", text: "Start from demand, not from follower counts", id: "demand" },
      {
        type: "paragraph",
        text: "Before searching, write a recruiting brief the way a brand writes a campaign brief. It should come from evidence: declined or half-filled briefs, client requests, and gaps in your roster map. Creator roster strategy explains how to build that map.",
        links: [{ text: "Creator roster strategy", href: "/blog/creator-roster-strategy" }],
      },
      {
        type: "template",
        label: "Recruiting brief (example, illustrative)",
        text: "Looking for: 2 Telugu food creators, Instagram-first, YouTube a plus\nWhy: 4 briefs from quick-commerce and packaged-food clients in the last quarter we couldn't fill\nAudience: majority in Andhra Pradesh and Telangana; home cooks and young families\nContent: recipe Reels, honest product use; comfortable with branded integrations\nMust have: consistent posting for 12+ months; clean brand-safety history\nNice to have: some past brand work with clear disclosure",
      },
      { type: "heading", text: "Sourcing channels", id: "sourcing" },
      {
        type: "table",
        headers: ["Channel", "Strengths", "Watch for"],
        rows: [
          ["Platform search (hashtags, keywords, audio, Explore)", "Finds creators brands haven't found yet", "Time-consuming; needs structured notes"],
          ["Referrals from roster creators", "Trust is pre-built; creators know who's professional", "Friends recommending friends; still screen"],
          ["Brand and agency partners", "They know who delivered well", "Don't poach creators from partners' rosters"],
          ["Discovery tools and databases", "Filters by niche, size, language", "Estimated data; verify with the creator"],
          ["Creator communities, meetups and events", "Relationships before the pitch", "Slow; needs ongoing presence"],
          ["Inbound applications", "Creators already interested", "Volume without fit; screen consistently"],
          ["Collaboration networks", "Creators who appear in each other's content", "Similar audiences; check overlap"],
        ],
      },
      {
        type: "paragraph",
        text: "Discovery tools are compared in creator discovery platform. Record every promising creator in your talent database with where you found them, even if you don't approach them yet; see creator talent database.",
        links: [
          { text: "creator discovery platform", href: "/blog/creator-discovery-platform" },
          { text: "creator talent database", href: "/blog/creator-talent-database" },
        ],
      },
      { type: "heading", text: "Approaching creators", id: "approach" },
      {
        type: "list",
        items: [
          "Use the contact route in their bio; if it's email, use email.",
          "Show you've watched their work: mention two specific pieces and why they stood out.",
          "Say who you are, who you represent and one relevant result, in a few lines.",
          "Ask for a short call; don't send an agreement in the first message.",
          "Follow up once or twice, then stop. Pressure damages your reputation in creator circles.",
          "Never ask for passwords, fees or exclusivity before a conversation.",
        ],
      },
      {
        type: "template",
        label: "First message (example)",
        text: "Hi [name], I'm [your name] from [agency]. We represent [n] food and lifestyle creators across South India and run campaigns with brands like [category examples].\n\nYour [specific video] and the [specific series] stood out: you make product use feel like real cooking, which is exactly what our FMCG clients keep asking for.\n\nWould you be open to a 20-minute call next week? I'd like to understand what you want from brand work and share how we operate: commission, what we handle, and what we don't promise.\n\n[Name] · [phone] · [website]",
      },
      { type: "heading", text: "The pitch: what to say, and not say", id: "pitch" },
      {
        type: "table",
        headers: ["Say", "Don't say"],
        rows: [
          ["Which brands and categories you actually work with", "\"We work with all the top brands\""],
          ["What you handle: pitching, negotiation, contracts, invoicing, collections", "\"You'll never have to think about business again\""],
          ["How commission works and what it applies to", "Vague percentages without the base defined"],
          ["How money flows and when creators get paid", "Nothing about payment timing"],
          ["How you'd help them grow over a year", "Guaranteed deal volumes or income"],
          ["Who else on your roster might compete for briefs", "Nothing about conflicts"],
        ],
      },
      {
        type: "paragraph",
        text: "Creators increasingly compare managers carefully; the questions they ask are listed in creator manager vs agency. Answer them before they're asked.",
        links: [{ text: "creator manager vs agency", href: "/blog/creator-manager-vs-agency" }],
      },
      { type: "heading", text: "The discovery call", id: "discovery-call" },
      {
        type: "list",
        items: [
          "Goals for the next year: income, brand types, platforms, projects.",
          "Categories they won't promote, and personal boundaries.",
          "Current commitments: existing managers, exclusivities, ongoing brand deals.",
          "How they like to work: response times, approvals, who speaks to brands.",
          "Capacity: how many brand pieces they can make without hurting their content.",
          "Their questions about you. Their questions tell you a lot about fit.",
        ],
      },
      { type: "heading", text: "Competing offers", id: "competing" },
      {
        type: "paragraph",
        text: "If a creator is talking to other managers, don't compete on promises. Compete on clarity: a fair agreement, transparent money flow, a written 90-day plan and references from creators you represent. If another agency offers something you can't match honestly, let the creator go with goodwill.",
      },
      { type: "heading", text: "Signing well", id: "signing" },
      {
        type: "list",
        items: [
          "Screen before offering; see creator talent screening.",
          "Send the management agreement with a plain-language summary and time to review it.",
          "Encourage the creator to take independent advice; don't rush signatures.",
          "Confirm existing commitments and exclusivities in writing.",
          "Start onboarding the same week: access, media kit, rate card, 90-day plan.",
        ],
      },
      {
        type: "paragraph",
        text: "Agreement terms are mapped in creator contracts, and onboarding in creator talent management.",
        links: [
          { text: "creator contracts", href: "/blog/creator-contracts" },
          { text: "creator talent management", href: "/blog/creator-talent-management" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Recruiting whoever has the largest following instead of who brands ask for.",
          "Mass copy-paste DMs.",
          "Promising deal volumes or income to win a signature.",
          "Poaching creators from partners or other agencies mid-contract.",
          "Signing before checking existing commitments.",
          "Recruiting faster than managers can service new creators.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Talent acquisition works when it starts from real brand demand, sources through channels that bring trusted creators, approaches people respectfully, and pitches with specifics instead of promises. Screen carefully, sign fairly, and start onboarding immediately. The creators you recruit this way are the ones who stay.",
      },
    ],
    faqs: [
      {
        question: "How do talent agencies find creators?",
        answer:
          "Through platform search, referrals from creators they already represent, brand and agency partners, discovery tools, creator communities and events, and inbound applications, guided by the creator types brands are actually asking for.",
      },
      {
        question: "How should an agency approach a creator it wants to represent?",
        answer:
          "Through the contact route the creator lists, with a short, specific message that shows you know their work, says who you represent and asks for a call. Explain commission, money flow and what you won't promise before sending any agreement.",
      },
      {
        question: "What's the difference between talent acquisition and talent screening?",
        answer:
          "Acquisition is finding creators and bringing them into the agency; screening is evaluating whether a specific creator is a good fit before signing them.",
      },
    ],
  },
  {
    slug: "creator-talent-screening",
    category: "Creator Resources",
    title: "Creator Talent Screening: How Agencies Should Evaluate Creators",
    seoTitle: "Creator Talent Screening: An Agency Scorecard",
    excerpt:
      "How creator agencies evaluate a creator before signing: must-pass checks (audience authenticity, brand safety, conduct), weighted fit criteria, commercial potential, working style, conflicts with the existing roster, the information to request, and an interactive talent screening scorecard.",
    metaDescription:
      "How agencies screen creators before signing: must-pass checks, weighted fit criteria, commercial potential, conflicts and an interactive scorecard.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "13 min read",
    tags: ["creator talent screening", "evaluate creators agency", "creator evaluation scorecard", "influencer talent assessment", "screen influencers before signing", "talent evaluation criteria"],
    related: ["creator-talent-acquisition", "creator-roster-strategy", "how-to-vet-influencers"],
    body: [
      {
        type: "paragraph",
        text: "Signing a creator is a longer commitment than booking one. A brand vetting a creator for one campaign asks whether this person suits this brief. An agency screening a creator asks whether it can build a business with them for years: will brands book them repeatedly, will they deliver, and will representing them strengthen or strain the roster?",
      },
      {
        type: "paragraph",
        text: "For the brand-side version, see how to vet influencers before a brand collaboration.",
        links: [{ text: "how to vet influencers before a brand collaboration", href: "/blog/how-to-vet-influencers" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Screen creators in two stages. First, must-pass checks: audience authenticity, brand-safety history, correct disclosure on past sponsored content, and professional conduct. A creator who fails any of these isn't signed, whatever their numbers. Second, score fit on weighted criteria: audience quality and fit with the brands you serve, content quality and consistency, commercial potential, professionalism and working style, growth trajectory, and roster fit including conflicts. Use the same scorecard for every creator so decisions are consistent and explainable.",
      },
      { type: "heading", text: "Stage 1: Must-pass checks", id: "must-pass" },
      {
        type: "table",
        headers: ["Check", "What to look at", "Red flags"],
        rows: [
          ["Audience authenticity", "Follower growth pattern, comment quality, audience location and language", "Sudden spikes, generic comments, audience mostly outside the creator's market"],
          ["Brand safety", "Past content, public controversies, statements in comments and other platforms", "Hate, harassment, misleading claims, repeated controversies"],
          ["Disclosure history", "How past sponsored posts were labelled", "Undisclosed paid content"],
          ["Professional conduct", "References from brands or other creators, how they handle the approach", "Missed commitments, disputes, disrespectful communication"],
        ],
      },
      {
        type: "paragraph",
        text: "Fake follower signals are explained in how to identify fake followers, and brand-safety review in creator brand safety. Disclosure rules are in the creator disclosure guide.",
        links: [
          { text: "how to identify fake followers", href: "/blog/how-to-identify-fake-followers" },
          { text: "creator brand safety", href: "/blog/creator-brand-safety" },
          { text: "creator disclosure guide", href: "/blog/creator-disclosure-guide" },
        ],
      },
      { type: "heading", text: "Stage 2: Weighted fit criteria", id: "criteria" },
      {
        type: "table",
        headers: ["Criterion", "Questions", "Evidence to request"],
        rows: [
          ["Audience fit", "Does the audience match what our brand clients buy?", "Platform insights screenshots: location, age, gender, language"],
          ["Content quality and consistency", "Is the work distinctive, and do they post reliably?", "Last 6–12 months of content"],
          ["Commercial potential", "Will brands book them repeatedly, at fees that justify the effort?", "Past brand deals, rates, rebooking history"],
          ["Professionalism", "Do they meet deadlines, reply, take feedback well?", "References; how the screening process itself goes"],
          ["Growth trajectory", "Is the audience and engagement growing, flat or declining?", "Trend over 6–12 months, not one viral month"],
          ["Roster fit", "Do they fill a gap, or compete with creators we already represent?", "Your roster map; see creator roster strategy"],
        ],
      },
      {
        type: "paragraph",
        text: "Roster mapping: creator roster strategy. Reading engagement properly: influencer engagement rate.",
        links: [
          { text: "creator roster strategy", href: "/blog/creator-roster-strategy" },
          { text: "influencer engagement rate", href: "/blog/influencer-engagement-rate" },
        ],
      },
      { type: "heading", text: "Score a creator with the screening scorecard", id: "scorecard" },
      {
        type: "paragraph",
        text: "Score each criterion from 1 to 5 and adjust the weights to reflect your agency. Any failed must-pass check means the creator isn't signed, regardless of score.",
      },
      { type: "tool", tool: "creator-talent-scorecard" },
      { type: "heading", text: "Information to request", id: "request" },
      {
        type: "list",
        items: [
          "Recent platform insights screenshots (audience demographics, reach, views) with dates.",
          "A list of past brand collaborations and current commitments, including exclusivities.",
          "Existing management or agency agreements and when they end.",
          "Their rate card or recent fees, if they're comfortable sharing.",
          "Categories they won't promote.",
          "Permission to contact one or two previous brand partners as references.",
        ],
      },
      {
        type: "paragraph",
        text: "Handle this information carefully: request only what you need, store it securely and tell creators how you'll use it. Data practices are covered in creator talent database.",
        links: [{ text: "creator talent database", href: "/blog/creator-talent-database" }],
      },
      { type: "heading", text: "Conflicts with the existing roster", id: "conflicts" },
      {
        type: "paragraph",
        text: "Two creators with near-identical audiences and styles will compete for the same briefs. That isn't automatically a reason to decline, especially in high-demand categories, but both creators should know, and you need a fair way of recommending creators for briefs. Also check for conflicts with brand clients: a creator with a long exclusivity for a competitor may not be bookable by your main client for months.",
      },
      { type: "heading", text: "Making and explaining the decision", id: "decision" },
      {
        type: "table",
        headers: ["Outcome", "When", "What to tell the creator"],
        rows: [
          ["Sign", "Passes all checks; strong score; demand exists", "Offer, agreement summary, onboarding plan"],
          ["Not yet", "Passes checks; demand or fit not there today", "Honest reason; invite them to stay in touch"],
          ["Decline", "Fails a must-pass check or poor fit", "A courteous no; no need to list every reason"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Letting a large following override failed must-pass checks.",
          "Judging from one viral month instead of the trend.",
          "Screening some creators thoroughly and others on instinct.",
          "Ignoring existing exclusivities and management agreements.",
          "Asking for sensitive data you don't need.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Talent screening protects the agency, its brand clients and the creators already on the roster. Run must-pass checks first, score fit consistently, look at commercial potential and working style as carefully as audience numbers, and handle conflicts openly. A creator you decline politely today may be the right signing next year.",
      },
    ],
    faqs: [
      {
        question: "How do agencies evaluate creators before signing them?",
        answer:
          "With must-pass checks on audience authenticity, brand safety, disclosure history and conduct, followed by a weighted scorecard covering audience fit, content quality, commercial potential, professionalism, growth trajectory and roster fit.",
      },
      {
        question: "What's the difference between agency talent screening and brand influencer vetting?",
        answer:
          "Brand vetting asks whether a creator suits one campaign. Agency screening asks whether the agency can represent the creator well over time: repeat demand, working style, growth and fit with the rest of the roster.",
      },
      {
        question: "What data should an agency ask a creator for?",
        answer:
          "Dated platform insights, past brand collaborations, current commitments and exclusivities, existing agreements, and optionally recent rates, requested only as needed and stored securely.",
      },
    ],
  },
  {
    slug: "creator-roster-strategy",
    category: "Creator Resources",
    title: "Creator Roster Strategy: How to Build a Valuable Creator Network",
    seoTitle: "Creator Roster Strategy: Balance, Diversity and Categories",
    excerpt:
      "How creator agencies design a roster brands want to book: anchor, core and emerging creators, a category system for niches, formats, languages and audience, building a diverse and balanced roster, the roster map, roster size, and avoiding internal competition.",
    metaDescription:
      "Creator roster strategy: roster tiers, a talent category system, roster diversity across niches, languages and regions, the roster map and roster size.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "15 min read",
    tags: ["creator roster strategy", "creator roster diversity", "creator talent categories", "influencer roster building", "talent roster balance", "creator network strategy"],
    related: ["creator-talent-acquisition", "creator-roster-evaluation", "creator-talent-database"],
    body: [
      {
        type: "paragraph",
        text: "A roster is not a collection of creators; it's a product brands buy from. The question a brand manager brings is \"can you give me the right creators for this brief?\" A good roster strategy means the answer is usually yes, without your creators constantly competing for the same work.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator roster strategy decides who the agency represents and why. It defines the niches, audiences, languages, platforms and creator sizes the agency covers, organises creators with a consistent category system, balances anchor creators who bring big deals with a core of reliable mid-sized creators and a small group of emerging talent, and builds breadth where brands need it (regions, languages, formats, backgrounds) without duplicating creators who would compete for every brief. A roster map shows the gaps, and recruiting fills them from real brand demand.",
      },
      { type: "heading", text: "Specialist or broad?", id: "focus" },
      {
        type: "table",
        headers: ["Roster type", "Strength", "Risk"],
        rows: [
          ["Specialist (one category or language)", "Trusted expertise; easy to explain", "Exposed if the category slows or seasons end"],
          ["Multi-category", "More briefs you can answer", "Harder to be known for anything"],
          ["Regional or language-led", "Depth where national agencies are thin", "Needs genuine cultural and language knowledge"],
          ["Format-led (UGC, long-form, podcasts)", "Clear offer to specific buyers", "Dependent on one format's value"],
        ],
      },
      {
        type: "paragraph",
        text: "Most agencies start specialist and broaden carefully into adjacent categories where the same brands buy. Creator agency growth strategy covers when to add a niche.",
        links: [{ text: "Creator agency growth strategy", href: "/blog/creator-agency-growth-strategy" }],
      },
      { type: "heading", text: "Anchor, core and emerging creators", id: "tiers" },
      {
        type: "table",
        headers: ["Role on the roster", "What they bring", "What they need"],
        rows: [
          ["Anchor creators", "Recognition, larger deals, credibility with brands", "Senior attention; careful conflict management"],
          ["Core creators", "Steady rebookings; the backbone of most campaigns", "Efficient processes; regular development"],
          ["Emerging creators", "Future growth; value for budget-conscious briefs", "Coaching and patience; honest expectations"],
        ],
      },
      {
        type: "paragraph",
        text: "A roster built only on anchors is fragile: if one leaves, revenue drops sharply. A roster of only emerging creators struggles to win larger clients. The balance depends on your model, but every agency should know which creators play which role.",
      },
      { type: "heading", text: "A talent category system", id: "categories" },
      {
        type: "paragraph",
        text: "Categories are how you organise creators so you can search the roster quickly, see gaps and present shortlists consistently. Use several dimensions rather than a single \"niche\" label.",
      },
      {
        type: "table",
        headers: ["Dimension", "Example values"],
        rows: [
          ["Primary category", "Food, beauty, personal finance, tech, parenting, fitness, travel, gaming, B2B and careers"],
          ["Sub-category", "Home cooking, street food, skincare, credit cards, smartphones"],
          ["Platform and format", "Instagram Reels, YouTube long-form, Shorts, LinkedIn, podcasts"],
          ["Language", "Hindi, English, Tamil, Telugu, Marathi, Bengali, Kannada, Malayalam, Gujarati, bilingual"],
          ["Audience region", "Metro, specific states, tier 2 and 3 cities, diaspora"],
          ["Audience profile", "Age band, gender mix, life stage, professional audience"],
          ["Size band", "Your own bands by typical reach, not only followers"],
          ["Creator type", "Personality, educator, expert, reviewer, UGC creator, storyteller"],
          ["Commercial strengths", "Integrations, launches, affiliate and codes, long-term ambassadorships, events"],
        ],
      },
      {
        type: "paragraph",
        text: "Keep the vocabulary controlled: agree a fixed list of values for each dimension, so \"personal finance\", \"finance\" and \"money\" don't become three separate tags. These fields become the backbone of your creator talent database.",
        links: [{ text: "creator talent database", href: "/blog/creator-talent-database" }],
      },
      { type: "heading", text: "Roster diversity and balance", id: "diversity" },
      {
        type: "paragraph",
        text: "Diversity on a roster is partly commercial and partly about fairness. Brands in India increasingly need creators who reach audiences beyond English-speaking metros, and a roster that reflects India's languages, regions, backgrounds and body types can answer more briefs well. It also widens opportunity for creators who are often overlooked.",
      },
      {
        type: "list",
        items: [
          "Language and region: regional-language creators often reach audiences national campaigns miss; see regional creator growth in India.",
          "Audience profiles: different age groups, life stages and professional audiences.",
          "Creator backgrounds: gender, community, disability, age and body diversity, represented because they're good at what they do, not as tokens.",
          "Formats and platforms: long-form, short-form, audio and written content.",
          "Size: a range that fits different budgets without making smaller creators an afterthought.",
        ],
      },
      {
        type: "paragraph",
        text: "Regional audiences: regional creator growth in India.",
        links: [{ text: "regional creator growth in India", href: "/blog/regional-creator-growth-india" }],
      },
      {
        type: "paragraph",
        text: "Balance also means pay and opportunity. Track which creators get shortlisted and booked, and check that opportunities aren't flowing only to the same few people for reasons that have nothing to do with fit.",
      },
      { type: "heading", text: "The roster map", id: "roster-map" },
      {
        type: "paragraph",
        text: "A roster map puts categories against languages (or regions) and shows who fills each cell. An illustrative example:",
      },
      {
        type: "table",
        headers: ["Category", "Hindi", "English", "Tamil", "Telugu", "Marathi"],
        rows: [
          ["Food", "2 core", "1 anchor", "1 core", "Gap (demand)", "1 emerging"],
          ["Beauty and skincare", "1 core", "2 core", "Gap (demand)", "—", "—"],
          ["Personal finance", "1 anchor", "1 core", "—", "—", "—"],
          ["Parenting", "1 core (second needed)", "—", "1 core", "—", "—"],
        ],
      },
      {
        type: "paragraph",
        text: "Put demand next to the map: briefs received per cell last quarter. Cells with demand and no creators are your recruiting brief; cells with several creators and little demand are where internal competition and disappointed talent come from. Recruiting from the map is covered in creator talent acquisition.",
        links: [{ text: "creator talent acquisition", href: "/blog/creator-talent-acquisition" }],
      },
      { type: "heading", text: "How big should a roster be?", id: "size" },
      {
        type: "paragraph",
        text: "There's no right number. Roster size should follow two limits: brand demand (can you keep each creator reasonably busy?) and management capacity (can your team service each creator well?). Track deals and hours per creator; when either falls short, the roster is too big for the agency, whatever the headline number. Creator talent management covers manager capacity.",
        links: [{ text: "Creator talent management", href: "/blog/creator-talent-management" }],
      },
      { type: "heading", text: "Avoiding internal competition", id: "competition" },
      {
        type: "list",
        items: [
          "Avoid signing near-duplicates unless demand clearly supports both.",
          "Share how briefs are allocated: fit to the brief first, then availability, then rotation.",
          "Offer brands shortlists with two or three genuine options, and let them choose.",
          "Review booking patterns quarterly; see creator roster evaluation.",
        ],
      },
      {
        type: "paragraph",
        text: "Quarterly reviews: creator roster evaluation.",
        links: [{ text: "creator roster evaluation", href: "/blog/creator-roster-evaluation" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Growing the roster to look big, rather than to meet demand.",
          "Tags that mean different things to different team members.",
          "A roster of anchors with no dependable core.",
          "Treating diversity as a marketing line rather than recruiting and booking practice.",
          "Several similar creators competing for every brief.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Roster strategy turns a list of creators into something brands can rely on. Decide what you're specialist in, balance anchor, core and emerging creators, use a consistent category system, build breadth across languages, regions and backgrounds where brands need it, and let a demand-led roster map guide every signing.",
      },
    ],
    faqs: [
      {
        question: "What is a creator roster strategy?",
        answer:
          "The plan for which creators an agency represents: the niches, audiences, languages, platforms and sizes it covers, the balance of anchor, core and emerging creators, and how the roster avoids gaps and internal competition.",
      },
      {
        question: "How should agencies categorise creators?",
        answer:
          "Across several dimensions: primary and sub-category, platform and format, language, audience region and profile, size band, creator type and commercial strengths, using a fixed list of values for each so the roster can be searched consistently.",
      },
      {
        question: "Why does roster diversity matter for creator agencies?",
        answer:
          "A roster that covers different languages, regions, audiences, formats and creator backgrounds can answer more brand briefs well, reaches audiences national campaigns miss, and widens opportunity for creators who are often overlooked.",
      },
      {
        question: "How many creators should an agency represent?",
        answer:
          "As many as brand demand can keep reasonably busy and the team can service well. Track deals and management hours per creator rather than aiming for a headline number.",
      },
    ],
  },
  {
    slug: "creator-talent-database",
    category: "Creator Resources",
    title: "Creator Talent Database: How to Build and Manage a Creator Database",
    seoTitle: "Creator Talent Database: Build and Manage One",
    excerpt:
      "How agencies build a creator talent database: roster vs prospect records, the fields to capture, controlled categories, keeping audience data fresh, linking to deals and campaigns, choosing tools, access control, and handling creator personal data responsibly under India's DPDP framework.",
    metaDescription:
      "Build a creator talent database: fields to capture, categories, data freshness, links to deals, tools, access control and DPDP-aware data handling.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "14 min read",
    tags: ["creator talent database", "influencer database", "creator database agency", "roster database", "talent management database", "creator data management"],
    related: ["creator-roster-strategy", "creator-talent-screening", "creator-crm"],
    body: [
      {
        type: "paragraph",
        text: "Every agency has a creator database. In some it's a well-kept system; in others it's a spreadsheet one person understands, a WhatsApp history and a folder of screenshots. The difference shows the day a brand asks for \"three Bengali beauty creators available in November with clean exclusivity\" and you need an answer by lunch.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator talent database is a structured record of the creators an agency represents and the prospects it tracks. Capture identity and contact details, platforms, controlled category tags, dated audience data, rates, availability, exclusivities, brand history, performance and relationship notes, and link each creator to deals and campaigns. Keep audience data dated and refresh it on a schedule, limit access by role, and treat creator information as personal data: collect only what you need, explain how you use it, secure it, and delete what you no longer need. India's Digital Personal Data Protection framework is being phased in, so take legal advice on your obligations.",
      },
      { type: "heading", text: "Roster records vs prospect records", id: "record-types" },
      {
        type: "table",
        headers: ["", "Roster creators", "Prospects"],
        rows: [
          ["Relationship", "Represented under an agreement", "Not represented; tracked for future fit"],
          ["Data depth", "Full: insights, rates, commitments, performance", "Light: public profile, category, why interesting"],
          ["Source", "Mostly the creator, with consent", "Public information and your notes"],
          ["Refresh", "Monthly or quarterly", "When you're about to approach them"],
        ],
      },
      { type: "heading", text: "Fields to capture", id: "fields" },
      {
        type: "table",
        headers: ["Group", "Fields"],
        rows: [
          ["Identity", "Name, public name, handles, contact route, manager or agency (for prospects), city"],
          ["Categories", "Primary and sub-category, platforms and formats, languages, audience region and profile, size band, creator type"],
          ["Audience data", "Followers or subscribers, typical reach and views, audience demographics, engagement signals, date captured, source"],
          ["Commercials", "Rate card and date, recent deal fees, usage and exclusivity pricing notes"],
          ["Availability and commitments", "Current exclusivities (brand, category, end date), blackout dates, capacity per month"],
          ["Brand history", "Brands worked with, categories, results, rebookings"],
          ["Preferences and boundaries", "Categories they won't promote, preferred brands, approval preferences"],
          ["Performance", "Campaign results by deliverable, on-time delivery, feedback from brands"],
          ["Relationship", "Manager, last contact, next review, notes"],
        ],
      },
      {
        type: "paragraph",
        text: "The category fields should use the controlled values from your roster strategy; creator roster strategy includes a category system you can adapt.",
        links: [{ text: "creator roster strategy", href: "/blog/creator-roster-strategy" }],
      },
      { type: "heading", text: "Keep audience data dated and fresh", id: "freshness" },
      {
        type: "paragraph",
        text: "Audience numbers go stale quickly, and a shortlist built on last year's data can embarrass you in front of a client. Store the date and source with every figure: creator-provided insights screenshots, a platform tool, or a third-party estimate. Refresh roster data on a schedule, and always re-check before sending a shortlist. Where data comes from a third-party tool, label it as an estimate; creator discovery platform explains why estimates and first-party data differ.",
        links: [{ text: "creator discovery platform", href: "/blog/creator-discovery-platform" }],
      },
      { type: "heading", text: "Link people to deals and campaigns", id: "linking" },
      {
        type: "paragraph",
        text: "The database becomes powerful when each creator record links to the deals and campaigns they've been part of: fees, deliverables, dates, usage granted and results. That's what lets you see real rebooking rates, check exclusivity clashes before proposing someone, and answer \"who performed best for quick-commerce launches?\" from evidence. The deal side usually lives in a CRM; creator CRM covers pipeline structure.",
        links: [{ text: "creator CRM", href: "/blog/creator-crm" }],
      },
      { type: "heading", text: "Choosing a tool", id: "tools" },
      {
        type: "table",
        headers: ["Option", "Suits", "Limits"],
        rows: [
          ["Spreadsheet", "Small rosters; getting started", "Weak links between records; easy to break; access control is coarse"],
          ["Database-style workspace (relational no-code tools)", "Growing agencies wanting linked tables and views", "Needs someone to own structure and permissions"],
          ["CRM with custom objects", "Agencies already running sales in a CRM", "Creator-specific fields need setup"],
          ["Influencer marketing platform", "Agencies wanting discovery data and campaign tools together", "Cost; data you don't own; check export options"],
        ],
      },
      {
        type: "paragraph",
        text: "Whichever you choose, make sure you can export your data. The creator tech stack guide covers connecting tools so information is entered once.",
        links: [{ text: "creator tech stack", href: "/blog/creator-tech-stack" }],
      },
      { type: "heading", text: "Creator data is personal data", id: "privacy" },
      {
        type: "paragraph",
        text: "Contact details, phone numbers, bank and tax details, identity documents and private insights are personal data. India's Digital Personal Data Protection Act, 2023 and the DPDP Rules, 2025, notified in November 2025, are being brought into force in phases, with most processing obligations scheduled to apply from May 2027. Agencies should prepare now, and take legal advice on how the rules apply to them.",
        links: [{ text: "DPDP Rules, 2025", href: SOURCES.dpdpRules2025 }],
      },
      {
        type: "list",
        items: [
          "Collect only what you need for the purpose, and tell creators what you hold and why.",
          "Get consent for using private data such as insights screenshots in brand proposals.",
          "Keep bank, tax and identity documents in your finance system with tighter access, not in the shared roster.",
          "Give access by role: not everyone needs rates or bank details.",
          "Delete or archive data when a creator leaves or a prospect is no longer relevant, following your retention policy.",
          "Have a plan for a breach: who decides, who is informed, how quickly.",
        ],
      },
      {
        type: "paragraph",
        text: "This is general information, not legal advice. Account and data security basics are in creator account security.",
        links: [{ text: "creator account security", href: "/blog/creator-account-security" }],
      },
      { type: "heading", text: "Maintaining the database", id: "maintenance" },
      {
        type: "list",
        items: [
          "Name an owner responsible for structure, tags and permissions.",
          "Make updating it part of the workflow: after every deal, campaign and review.",
          "Run a monthly check for stale data, missing fields and duplicate records.",
          "Review the category values once a year as your roster changes.",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Audience numbers with no date or source.",
          "Free-text categories that can't be filtered.",
          "Exclusivities tracked in someone's memory.",
          "Sensitive financial data in a sheet shared with the whole team.",
          "No export route from the tool you depend on.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A creator talent database is the memory of the agency. Capture the right fields with controlled categories, date every number, link creators to deals and campaigns, choose a tool you can grow into, and handle creator data with the care the law increasingly expects. The payoff is faster shortlists, fewer clashes and decisions based on evidence.",
      },
    ],
    faqs: [
      {
        question: "What should a creator database include?",
        answer:
          "Identity and contact details, platforms, category tags, dated audience data with its source, rates, exclusivities and availability, brand history, performance, preferences and relationship notes, linked to deals and campaigns.",
      },
      {
        question: "What's the difference between a talent database and a creator discovery platform?",
        answer:
          "A talent database is the agency's own record of creators it represents or tracks, built largely from first-party information. A discovery platform is a third-party tool with searchable data on many creators, often including estimates.",
      },
      {
        question: "Does India's data protection law apply to creator databases?",
        answer:
          "Creator contact, financial and identity details are personal data. The DPDP Act, 2023 and DPDP Rules, 2025 are being phased in, with most processing obligations scheduled from May 2027. Agencies should take legal advice on how the rules apply to them.",
      },
    ],
  },
  {
    slug: "creator-roster-evaluation",
    category: "Creator Resources",
    title: "Creator Roster Evaluation: How to Know Which Creators to Keep",
    seoTitle: "Creator Roster Evaluation: A Quarterly Review",
    excerpt:
      "How creator agencies review the creators they already represent: a quarterly roster review, the evidence to gather, the keep, develop, restructure or part ways matrix, conversations with creators, fair exits under the agreement, and what the review should change in recruiting.",
    metaDescription:
      "Review your creator roster quarterly: evidence to gather, the keep, develop, restructure or exit matrix, honest conversations and fair, professional exits.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["creator roster evaluation", "talent roster review", "which creators to keep", "influencer roster audit", "drop creator from agency", "roster performance review"],
    related: ["creator-roster-strategy", "creator-talent-development", "creator-talent-management"],
    body: [
      {
        type: "paragraph",
        text: "Rosters drift. A creator who was in demand two years ago has changed direction, another has grown faster than the agency can serve, and a third quietly takes more time than all the others. Without a regular review, the agency keeps working the way it did when the roster was smaller and simpler.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Evaluate the roster every quarter using evidence: brand demand for each creator, revenue and time spent, delivery and professionalism, relationship health, growth and strategic fit. Place each creator in one of four outcomes: keep and invest, develop with a plan, restructure the arrangement, or part ways. Discuss the result with each creator, act on it, and let the review update your recruiting plan and roster strategy.",
      },
      { type: "heading", text: "The evidence to gather", id: "evidence" },
      {
        type: "table",
        headers: ["Dimension", "Evidence", "Source"],
        rows: [
          ["Brand demand", "Times shortlisted, times booked, rebookings", "CRM and proposals"],
          ["Commercial result", "Agency revenue from the creator; creator's earnings through you", "Finance records"],
          ["Effort", "Team hours spent; revision and issue history", "Time tracking, campaign tracker"],
          ["Delivery", "On-time rate, QA issues, brand feedback", "Campaign tracker, post-mortems"],
          ["Relationship", "Responsiveness, trust, satisfaction on both sides", "Manager notes; the creator's own view"],
          ["Growth", "Audience and engagement trend, content quality", "Dated insights in the talent database"],
          ["Strategic fit", "Fits the roster map and client demand", "Roster strategy"],
        ],
      },
      {
        type: "paragraph",
        text: "Profit per creator is explained in creator agency profitability, and dated creator data in creator talent database.",
        links: [
          { text: "creator agency profitability", href: "/blog/creator-agency-profitability" },
          { text: "creator talent database", href: "/blog/creator-talent-database" },
        ],
      },
      { type: "heading", text: "The four outcomes", id: "matrix" },
      {
        type: "table",
        headers: ["Outcome", "Typical pattern", "Action"],
        rows: [
          ["Keep and invest", "Strong demand, healthy relationship, fair effort", "More senior attention, bigger partnerships, rate growth"],
          ["Develop", "Good relationship, but demand or delivery below potential", "A written development plan with a review date"],
          ["Restructure", "Demand exists but the arrangement isn't working (effort, scope, terms)", "Change services, commission base, responsibilities or manager"],
          ["Part ways", "Low demand with no realistic path, or trust has broken down", "Honest conversation and a fair exit under the agreement"],
        ],
      },
      {
        type: "paragraph",
        text: "Low revenue alone doesn't mean exit. An emerging creator on a clear development path, or one filling an important gap in the roster map, may be worth patience. High revenue alone doesn't mean keep, either: a creator who repeatedly breaches trust or disclosure rules puts every client relationship at risk.",
      },
      { type: "heading", text: "Run the quarterly review", id: "process" },
      {
        type: "template",
        label: "Quarterly roster review (team agenda)",
        text: "Before: update each creator's record — demand, revenue, hours, delivery, growth\n1. Roster overview: revenue concentration, creators with no bookings this quarter\n2. Each creator: evidence summary, manager's view, proposed outcome\n3. Conflicts and internal competition: who is losing briefs to whom\n4. Gaps: brand demand we couldn't meet\nAfter: one-to-one conversations with creators; development plans; recruiting brief update",
      },
      { type: "heading", text: "Talk to the creator", id: "conversation" },
      {
        type: "list",
        items: [
          "Share the evidence, not just the conclusion.",
          "Ask how the relationship is working for them; the review goes both ways.",
          "Agree specific actions and a review date for anyone on a development plan.",
          "If restructuring, put the new terms in writing.",
          "Never let a creator discover a decision through reduced contact.",
        ],
      },
      {
        type: "paragraph",
        text: "Development plans are covered in creator talent development.",
        links: [{ text: "creator talent development", href: "/blog/creator-talent-development" }],
      },
      { type: "heading", text: "Parting ways professionally", id: "exits" },
      {
        type: "list",
        items: [
          "Follow the agreement's exit terms: notice, post-term commission and ongoing deals.",
          "Finish or hand over live campaigns cleanly, with brands informed.",
          "Pay everything owed promptly, with a final statement.",
          "Return or delete the creator's files and data as agreed; remove access.",
          "Stay courteous. Creators talk to each other, and some come back.",
        ],
      },
      {
        type: "paragraph",
        text: "Agreement terms on exit and post-term commission are covered in creator contracts; the creator's view of leaving is in creator manager vs agency.",
        links: [
          { text: "creator contracts", href: "/blog/creator-contracts" },
          { text: "creator manager vs agency", href: "/blog/creator-manager-vs-agency" },
        ],
      },
      { type: "heading", text: "What the review should change", id: "outputs" },
      {
        type: "list",
        items: [
          "The recruiting brief: gaps and oversupplied categories; see creator roster strategy.",
          "Manager allocation: rebalance creators across managers by effort.",
          "Pricing and terms: where effort consistently exceeds revenue.",
          "Processes: recurring delivery issues that are really process problems.",
        ],
      },
      {
        type: "paragraph",
        text: "Recruiting and roster design: creator roster strategy.",
        links: [{ text: "creator roster strategy", href: "/blog/creator-roster-strategy" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Judging creators only on this quarter's revenue.",
          "Reviewing without asking the creator how it's going.",
          "Letting creators drift without bookings instead of discussing it.",
          "Exits that ignore the agreement or delay payments.",
          "Reviews that change nothing in recruiting or process.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Roster evaluation keeps an agency honest with itself and with its creators. Review quarterly with evidence, choose between keep, develop, restructure and part ways, talk openly with each creator, exit fairly when it's right, and feed the lessons back into recruiting and process.",
      },
    ],
    faqs: [
      {
        question: "How often should an agency review its creator roster?",
        answer:
          "Quarterly works for most agencies: often enough to act on problems early, with enough campaigns in between to judge demand, delivery and relationship health fairly.",
      },
      {
        question: "How do agencies decide which creators to keep?",
        answer:
          "By weighing brand demand, revenue against team effort, delivery, relationship health, growth and strategic fit, then choosing to keep and invest, develop, restructure or part ways.",
      },
      {
        question: "How should an agency drop a creator from its roster?",
        answer:
          "With an honest conversation, following the agreement's exit terms, completing or handing over live campaigns, paying everything owed promptly and returning or deleting the creator's data as agreed.",
      },
    ],
  },
  {
    slug: "creator-talent-development",
    category: "Creator Resources",
    title: "Creator Talent Development: How Agencies Can Help Creators Grow",
    seoTitle: "Creator Talent Development: Help Creators Grow",
    excerpt:
      "How creator agencies develop the talent they represent: individual development plans, content and analytics reviews, brand-readiness skills, rate growth, long-term partnerships, new revenue lines, workshops and peer learning, and how to measure whether development is working.",
    metaDescription:
      "How agencies help creators grow: development plans, content and analytics reviews, brand-readiness, rate growth, new revenue lines and workshops.",
    author: CREATOR_AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: CREATOR_FACTS_REVIEWED,
    readingTime: "12 min read",
    tags: ["creator talent development", "develop influencers agency", "creator coaching agency", "talent development plan creators", "help creators grow", "creator career development"],
    related: ["creator-talent-management", "creator-roster-evaluation", "creator-growth-strategy"],
    body: [
      {
        type: "paragraph",
        text: "An agency that only sells deals is replaceable: another manager can sell deals too. An agency that helps a creator become better at their work, more valuable to brands and more secure as a business is much harder to leave. Talent development is how management becomes a partnership.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Agencies develop creators with a written development plan per creator, regular content and analytics reviews, brand-readiness support (media kits, case studies, briefs, approvals), deliberate rate growth, longer brand partnerships, and help building revenue lines beyond sponsorships where it fits. Group workshops and peer learning scale the effort across the roster. Development should follow the creator's goals, not the agency's convenience, and be measured by outcomes such as rebookings, rates and audience quality.",
      },
      { type: "heading", text: "The development plan", id: "plan" },
      {
        type: "template",
        label: "Creator development plan (one page)",
        text: "Creator: [ ]   Manager: [ ]   Period: [next 6–12 months]\nWhere they want to be: [income, brands, platforms, projects]\nStrengths to build on: [ ]\nGaps holding them back: [e.g. inconsistent posting, weak long-form, no case studies]\nFocus areas (max 3):\n  1. [ ] — action — support from agency — measure\n  2. [ ] — action — support from agency — measure\n  3. [ ] — action — support from agency — measure\nRate goal: [ ]   Target brands/categories: [ ]\nReview dates: [monthly check-in, quarterly review]",
      },
      {
        type: "paragraph",
        text: "Keep it to three focus areas. Plans that try to fix everything fix nothing.",
      },
      { type: "heading", text: "Development areas", id: "areas" },
      {
        type: "table",
        headers: ["Area", "What the agency can do", "Related guide"],
        rows: [
          ["Content and growth", "Monthly content reviews; format tests; series ideas", "Creator growth strategy"],
          ["Analytics", "Read insights together; identify what drives views and retention", "Creator content analytics"],
          ["Brand-readiness", "Media kit, rate card, case studies, pitch materials", "Creator media kit"],
          ["Brand collaboration skills", "Reading briefs, integrating products naturally, handling feedback", "Creator brand brief"],
          ["Rates", "Evidence-based rate increases at the right time", "How to raise creator rates"],
          ["Long-term partnerships", "Turning one-off deals into retainers and ambassadorships", "Creator brand partnerships"],
          ["Business foundations", "Invoicing, tax questions for a CA, basic finance", "Creator business plan"],
          ["New revenue lines", "Products, memberships, licensing where the audience wants them", "Creator revenue diversification"],
        ],
      },
      {
        type: "paragraph",
        text: "Guides: creator growth strategy, creator content analytics, creator media kit, creator brand brief, how to raise creator rates, creator brand partnerships and creator revenue diversification.",
        links: [
          { text: "creator growth strategy", href: "/blog/creator-growth-strategy" },
          { text: "creator content analytics", href: "/blog/creator-content-analytics" },
          { text: "creator media kit", href: "/blog/creator-media-kit" },
          { text: "creator brand brief", href: "/blog/creator-brand-brief" },
          { text: "how to raise creator rates", href: "/blog/how-to-raise-creator-rates" },
          { text: "creator brand partnerships", href: "/blog/creator-brand-partnerships" },
          { text: "creator revenue diversification", href: "/blog/creator-revenue-diversification" },
        ],
      },
      { type: "heading", text: "Use campaign feedback as coaching", id: "feedback" },
      {
        type: "paragraph",
        text: "Every campaign produces evidence: what the brand praised, what needed revisions, how the content performed against others in the campaign. Share it with the creator in a short debrief. Post-mortems are covered in creator campaign post-mortem; the creator's side of reporting results is in creator campaign reporting.",
        links: [
          { text: "creator campaign post-mortem", href: "/blog/creator-campaign-post-mortem" },
          { text: "creator campaign reporting", href: "/blog/creator-campaign-reporting" },
        ],
      },
      { type: "heading", text: "Scale with workshops and peers", id: "scale" },
      {
        type: "list",
        items: [
          "Monthly roster sessions on a single topic: disclosure updates, a platform change, pricing usage rights.",
          "Brand guests explaining how they choose creators and what makes a draft easy to approve.",
          "Peer reviews between creators in different categories, so they learn without competing.",
          "A shared library: brief examples, good integrations, report templates.",
        ],
      },
      { type: "heading", text: "Boundaries", id: "boundaries" },
      {
        type: "list",
        items: [
          "Development follows the creator's goals, including goals that don't make the agency money.",
          "Advice on content is advice; the creator decides what they make.",
          "Don't push creators into categories or brands they're uncomfortable with.",
          "Refer tax, legal and mental-health questions to qualified professionals.",
        ],
      },
      { type: "heading", text: "Measure development", id: "measure" },
      {
        type: "table",
        headers: ["Signal", "What it shows"],
        rows: [
          ["Rebooking rate", "Brands want the creator again"],
          ["Average fee over time", "Market value is rising"],
          ["Revision rounds per deliverable", "Brief and approval skills improving"],
          ["Audience quality trends", "Growth in the audience brands want, not just followers"],
          ["Plan actions completed", "Development is actually happening"],
          ["Creator satisfaction", "The relationship is working for them"],
        ],
      },
      {
        type: "paragraph",
        text: "These signals feed the quarterly review in creator roster evaluation.",
        links: [{ text: "creator roster evaluation", href: "/blog/creator-roster-evaluation" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Development that only means \"post more\".",
          "Plans written once and never reviewed.",
          "All development attention going to anchor creators.",
          "Pushing rate increases without the evidence to support them.",
          "Advising outside your competence.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Talent development turns an agency into a partner creators want to stay with. Write a short plan per creator, use content, analytics and campaign feedback as coaching material, grow rates and partnerships deliberately, scale through workshops and peers, respect boundaries, and measure the outcomes that matter to both of you.",
      },
    ],
    faqs: [
      {
        question: "How do talent agencies help creators grow?",
        answer:
          "With individual development plans, content and analytics reviews, brand-readiness support, evidence-based rate increases, longer brand partnerships, help with new revenue lines, and workshops and peer learning across the roster.",
      },
      {
        question: "What should a creator development plan include?",
        answer:
          "The creator's goals, strengths, the gaps holding them back, up to three focus areas with actions, agency support and measures, rate and brand goals, and review dates.",
      },
      {
        question: "How is talent development different from talent management?",
        answer:
          "Talent management runs the day-to-day relationship: deals, contracts, communication and protection. Talent development is the deliberate work of helping the creator become more skilled and more valuable over time.",
      },
    ],
  },
];
