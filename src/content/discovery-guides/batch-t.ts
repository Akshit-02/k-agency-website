import type { BlogPost } from "@/content/blog";

const AUTHOR = { name: "Kudozz Strategy Team", role: "Agency Team" };

export const discoveryBatchT: BlogPost[] = [
  // #98 compare-influencer-social-profiles (NEW)
  {
    slug: "compare-influencer-social-profiles",
    category: "Influencer Marketing",
    title: "How to Compare an Influencer's Instagram, YouTube and Other Social Profiles",
    seoTitle: "How to Compare Influencer Social Profiles | Kudozz",
    excerpt:
      "A creator with 4 lakh YouTube subscribers and 68,000 Instagram followers isn't six times bigger on YouTube. Here's how to compare one creator's profiles across platforms fairly, with a framework and a worksheet.",
    metaDescription:
      "Compare influencer social profiles across Instagram, YouTube and LinkedIn: why follower counts don't line up, what to check on each, and a copyable worksheet.",
    author: AUTHOR,
    publishedAt: "2026-11-27",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["Influencer Evaluation", "Cross-Platform", "Instagram", "YouTube"],
    related: ["how-to-find-youtube-influencers", "multi-platform-influencer-campaigns", "influencer-engagement-quality", "instagram-vs-youtube-vs-tiktok"],
    hero: {
      src: "/blog/discovery/compare-influencer-social-profiles.svg",
      alt: "Three platform profiles counting different units, followers, subscribers and connections, feeding into one shared set of comparison lenses that ends in a lead or support role for each profile",
    },
    discoveryCta: {
      headline: "Start the Worksheet With Instagram Data",
      body: "Explore Kudozz Discovery to find Instagram creators in India by niche, city, language and engagement, then open their profiles for followers, average views and engagement rate. YouTube, LinkedIn and audience checks stay with your team.",
    },
    body: [
      {
        type: "paragraph",
        text: "A Bengaluru-based kitchen-appliance brand is looking at a home-cooking creator for its new air fryer. Her YouTube channel shows 4.2 lakh subscribers. Her Instagram shows 68,000 followers. Someone in the meeting asks the obvious question: so she's six times bigger on YouTube, right? Not necessarily, and that question is where most attempts to compare influencer social profiles go wrong.",
      },
      {
        type: "paragraph",
        text: "Each platform counts different things, holds a different kind of attention and rewards different content. This guide explains what really differs between a creator's Instagram, YouTube and other profiles, why the headline numbers can't be lined up side by side, and gives you a cross-platform evaluation framework and a worksheet to copy. It's about judging one creator's presence before you hire them. Running a campaign that spans several platforms is a separate job, covered in managing influencer campaigns across multiple platforms.",
        links: [{ text: "managing influencer campaigns across multiple platforms", href: "/blog/multi-platform-influencer-campaigns" }],
      },
      { type: "heading", text: "Why follower counts can't be compared directly", id: "follower-counts" },
      {
        type: "paragraph",
        text: "A follower, a subscriber and a connection are three different relationships. On Instagram, following an account makes its posts eligible for your feed, but Reels are also shown widely to people who don't follow the creator. On YouTube, much viewing comes through search and recommendations rather than the subscriptions feed, so a subscriber count says little about who will watch the next video. On LinkedIn, a creator has both connections and followers, and posts travel on professional relevance as much as on either number.",
      },
      {
        type: "table",
        headers: ["What you see", "Instagram", "YouTube", "LinkedIn"],
        rows: [
          ["Audience size label", "Followers", "Subscribers (the public count is rounded on larger channels)", "Followers and connections"],
          ["Public delivery signals", "Views on Reels, likes (which can be hidden) and comments", "Views on every video, likes and comments", "Reactions, comments and reposts"],
          ["Private analytics to ask for", "Insights: reach, views, interactions, audience cities, age and gender", "YouTube Studio: watch time, average view duration, audience geography, age and gender", "Post analytics and follower demographics such as job title, industry and location"],
          ["How people find content", "Followers' feeds plus Reels and Explore recommendations", "Search, recommendations and subscriptions", "A feed shaped by network and professional relevance"],
        ],
      },
      {
        type: "paragraph",
        text: "Views are just as slippery. An Instagram view, a YouTube view and a LinkedIn impression are counted differently, and platforms revise their definitions from time to time; YouTube, for example, now reports 'engaged views' alongside views in YouTube Studio. Views also include repeats, while reach counts unique accounts. So don't compare raw totals across platforms. Compare each profile against itself and against creators of a similar size on the same platform, then compare the conclusions.",
      },
      { type: "heading", text: "What actually differs from platform to platform", id: "platform-differences" },
      {
        type: "paragraph",
        text: "Beyond the numbers, the same creator often plays a different role for a different audience on each platform. These are tendencies, not rules, but they shape what each profile is good for:",
      },
      {
        type: "table",
        headers: ["", "Instagram", "YouTube", "LinkedIn"],
        rows: [
          ["Audience mindset", "Browsing, entertainment, discovering products and places", "Intentional viewing, often research before a purchase", "Professional learning and opinion"],
          ["Strong formats", "Reels, Stories, carousels, collaborative posts", "Long-form reviews and tutorials, Shorts", "Text posts, documents, short video, newsletters"],
          ["Content shelf life", "Mostly days", "Can keep earning views for months through search", "Mostly days"],
          ["Campaign jobs it suits", "Awareness, launches, local reach, social proof", "Considered purchases, demos, comparisons", "B2B awareness, thought leadership, events"],
        ],
      },
      {
        type: "paragraph",
        text: "Choosing a platform before you have any creator in mind is covered in Instagram vs YouTube vs TikTok for creator campaigns. Here the question is narrower: for this creator, which profile is strongest, and for which job in your brief?",
        links: [{ text: "Instagram vs YouTube vs TikTok for creator campaigns", href: "/blog/instagram-vs-youtube-vs-tiktok" }],
      },
      { type: "subheading", text: "Consistency across profiles" },
      {
        type: "paragraph",
        text: "Look at whether the creator is the same person everywhere. Some keep one voice and adapt the format, which is ideal. Some post identical clips on every platform, which is efficient but less native. Others have one active profile and two that were abandoned a year ago. Posting cadence, tone and topic should each be checked per platform, because a booking for 'one video on Instagram and YouTube' only works if both channels are alive.",
      },
      { type: "heading", text: "A framework to compare influencer social profiles", id: "comparison-framework" },
      {
        type: "paragraph",
        text: "Use the same six lenses on every platform, judge each against that platform's norms, and record public evidence separately from what you'll need the creator to share.",
      },
      {
        type: "table",
        headers: ["Lens", "Question to answer", "Public evidence", "Ask the creator for"],
        rows: [
          ["Audience", "Who watches here, and where are they?", "Comment language and what commenters mention", "Analytics screenshots: top cities, age, gender"],
          ["Delivery", "What does a typical post achieve here?", "Median views or reactions on the last 10 to 15 posts", "Reach and views for those same posts"],
          ["Response", "Do people react like interested buyers?", "Questions about price, use and where to buy; creator replies", "Saves, shares, link taps or watch time"],
          ["Content fit", "Can they make the format this job needs?", "Recent examples of that format", "Past sponsored examples in that format"],
          ["Consistency", "Is this profile active and steady?", "Posting cadence over the last three months", "Planned content for your campaign window"],
          ["Commercial", "What does this platform cost with this creator?", "Rarely public", "Rate per deliverable per platform, bundles, usage rights"],
        ],
      },
      {
        type: "paragraph",
        text: "For reading comments and engagement in depth, see how to evaluate an influencer's engagement. Run a fake-follower check on every platform you're considering too, because a healthy YouTube channel tells you nothing about a padded Instagram account.",
        links: [
          { text: "how to evaluate an influencer's engagement", href: "/blog/influencer-engagement-quality" },
          { text: "fake-follower check", href: "/blog/how-to-identify-fake-followers" },
        ],
      },
      { type: "heading", text: "Covering the Instagram side quickly", id: "instagram-side" },
      {
        type: "paragraph",
        text: "For most Indian consumer brands, Instagram is the profile they look at for nearly every creator, which makes it the part worth speeding up. A discovery tool gives you comparable Instagram numbers across many creators at once. The other platforms still have to be checked by hand.",
      },
      {
        type: "paragraph",
        text: "Kudozz Discovery covers that Instagram side, for creators in India only. You can filter by niche, follower range, city, language and minimum engagement or views, open a profile to see followers, posts, average views and likes and engagement rate, and save candidates into a named list. It doesn't include YouTube, LinkedIn or any other platform, and it doesn't show audience demographics, so YouTube Studio data, LinkedIn analytics and audience screenshots still come from the creator.",
      },
      {
        type: "paragraph",
        text: "For the YouTube column, finding YouTube creators for reviews and brand collaborations covers channel search, comment reading and a simple scorecard. For B2B briefs, the guide to finding LinkedIn creators covers the professional platform.",
        links: [
          { text: "finding YouTube creators for reviews and brand collaborations", href: "/blog/how-to-find-youtube-influencers" },
          { text: "finding LinkedIn creators", href: "/blog/how-to-find-linkedin-influencers" },
        ],
      },
      {
        type: "discovery-cta",
        headline: "Pull the Instagram Numbers Before You Compare",
        body: "Kudozz Discovery shows followers, posts, average views and likes and engagement rate for Instagram creators in India, so the Instagram column of your worksheet fills quickly. YouTube, LinkedIn and audience data still come from the creator and your own checks.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Step by step: comparing one creator's profiles", id: "step-by-step" },
      {
        type: "list",
        items: [
          "Confirm every account belongs to the same person. Check links in bio, channel descriptions and cross-mentions. Fan pages, clip accounts and old abandoned profiles are common.",
          "Collect the last 10 to 15 posts on each platform, leaving out pinned posts. Note the median views or reactions, not the best performer.",
          "Record format and cadence: what they post, how often, and whether one platform simply repeats another.",
          "Read the comments on at least five recent posts per platform. Note the language, the questions people ask and whether the creator replies.",
          "Review sponsored content on each platform separately: how often, which categories, and how clearly it's labelled.",
          "Ask for analytics screenshots from each platform you're considering (Instagram Insights, YouTube Studio, LinkedIn analytics) covering the last 30 to 90 days, including audience location, age and gender.",
          "Fill in the worksheet below, score each profile against its own platform's norms, then give each one a role: lead, support or not for this brief.",
        ],
      },
      {
        type: "paragraph",
        text: "Audience data is never public, and it doesn't carry over from one platform to another. What to request, and how to sanity-check the screenshots, is covered in reviewing an influencer's audience demographics.",
        links: [{ text: "reviewing an influencer's audience demographics", href: "/blog/influencer-audience-demographics" }],
      },
      { type: "heading", text: "Cross-platform comparison worksheet", id: "worksheet" },
      {
        type: "paragraph",
        text: "Fill one block per platform, then make the decision at the bottom. Keep the best post noted but out of the score.",
      },
      {
        type: "template",
        label: "Cross-platform creator worksheet",
        text: "CREATOR: ________   CAMPAIGN JOB: ________   CHECKED BY / DATE: ________\n\nREPEAT FOR EACH PLATFORM (Instagram / YouTube / other: ________)\nProfile link, same person confirmed: [ ] yes\nSize shown (followers / subscribers / connections): ________\nPosts reviewed (last 10 to 15, pinned excluded): ________\nMedian views or reactions: ________   Best post (not scored): ________\nPosting cadence, last 3 months: ________\nFormats they do well: ________\nComment quality (questions, language, replies): ________\nSponsored posts seen, categories, disclosure: ________\nAnalytics received (tool, date range): ________\nAudience top cities, age, gender (from screenshots): ________\nRate per deliverable, usage rights: ________\nScore 1 to 5 vs this platform's norms:\n  Audience __  Delivery __  Response __  Content fit __  Consistency __\nRole for this brief: Lead / Support / Not for this brief\n\nDECISION\nLead platform: ________   Support platform: ________\nReason: ________",
      },
      { type: "heading", text: "Reading the result", id: "reading-patterns" },
      {
        type: "table",
        headers: ["Pattern", "What it often means", "What to do"],
        rows: [
          ["Large subscriber count, modest recent YouTube views", "An older subscriber base; the channel now depends on search and recommendations", "Judge on recent median views and watch-time screenshots, not subscribers"],
          ["Strong Instagram Reels, quiet YouTube", "The creator's effort has moved to short-form", "Lead with Instagram; treat YouTube as a bonus only if recent uploads hold up"],
          ["Identical clips on every platform", "Efficient, but less platform-native", "Fine for awareness; for demos or tutorials, ask for a platform-specific version"],
          ["Big LinkedIn following, engagement mostly from peers", "The audience may be other creators or recruiters rather than buyers", "Ask for follower job titles and industries before committing"],
          ["Different audiences by platform, such as metro English viewers on YouTube and Hindi-speaking tier-2 viewers on Instagram", "Two audiences you can address separately", "Brief each platform for its own audience"],
        ],
      },
      {
        type: "paragraph",
        text: "If the comparison turns into a question of format rather than platform, such as Reels versus Stories versus long-form video, choosing creators by content format walks through that decision.",
        links: [{ text: "choosing creators by content format", href: "/blog/influencers-for-reels-stories-youtube" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Adding follower counts from every platform into one 'total reach' figure.",
          "Treating YouTube subscribers and Instagram followers as the same unit.",
          "Scoring a profile on its best post instead of its typical one.",
          "Assuming audience location, age or language carries over from one platform to another.",
          "Paying for a multi-platform bundle when only one profile is genuinely active.",
          "Skipping the same-person check and ending up with a fan page or a dormant second account.",
          "Agreeing a fee for 'one video' without confirming which platforms it covers.",
        ],
      },
      { type: "heading", text: "The short version", id: "conclusion" },
      {
        type: "paragraph",
        text: "Don't ask which profile is bigger. Ask which profile does the job in your brief best, judged against that platform's own norms. Collect the same evidence on each platform, get the private analytics from the creator, score each profile separately and give each one a role. If you'd like a team to handle YouTube creator selection and campaigns, Kudozz's YouTube influencer marketing service can take that on.",
        links: [{ text: "YouTube influencer marketing service", href: "/services/youtube-influencer-marketing" }],
      },
    ],
    faqs: [
      {
        question: "Can you compare Instagram followers with YouTube subscribers?",
        answer:
          "Not directly. They measure different relationships, and on both platforms much of a creator's reach comes from people who don't follow or subscribe. Compare each profile's typical recent performance against creators of a similar size on the same platform instead.",
      },
      {
        question: "Which platform's public numbers are most reliable?",
        answer:
          "None of them tells the whole story. Public views, likes and follower counts are proxies; reach, watch time and audience demographics sit in each platform's private analytics. Ask the creator for recent screenshots and run a fake-follower check on each profile separately.",
      },
      {
        question: "Does Kudozz Discovery show a creator's YouTube or LinkedIn data?",
        answer:
          "No. Kudozz Discovery covers Instagram creators in India only, with profile metrics such as followers, average views and likes and engagement rate. YouTube, LinkedIn and audience demographics need to be checked manually or requested from the creator.",
      },
      {
        question: "Should we book a creator on every platform they're active on?",
        answer:
          "Only where that profile fits a job in your brief. Many creators have one strong profile and others that are less active or reach a different audience. Give each profile a role, lead, support or not for this brief, and pay for what you'll actually use.",
      },
      {
        question: "What analytics should we ask a creator for on each platform?",
        answer:
          "On Instagram, Insights screenshots showing reach, views and audience cities, age and gender for the last 30 to 90 days. On YouTube, Studio screenshots for watch time, average view duration and audience geography. On LinkedIn, post analytics and follower demographics such as job title and industry.",
      },
    ],
  },

  // #99 influencer-sourcing-brief (NEW)
  {
    slug: "influencer-sourcing-brief",
    category: "Campaign Strategy",
    title: "How to Create an Influencer Sourcing Brief for Your Marketing Team",
    seoTitle: "Influencer Sourcing Brief: Template for Teams | Kudozz",
    excerpt:
      "An influencer sourcing brief tells whoever searches for creators exactly who to look for and how to judge them. Here's what to include, how the fields map to search filters, and a template to copy.",
    metaDescription:
      "Write an influencer sourcing brief your team can search from: audience, objective, niche, location, language, tier, budget and exclusions, plus a template.",
    author: AUTHOR,
    publishedAt: "2026-11-27",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["Influencer Sourcing", "Creator Discovery", "Brief Template", "Marketing Teams"],
    related: ["influencer-sourcing-workflow", "influencer-campaign-brief", "influencer-shortlist", "influencer-search-tools"],
    hero: {
      src: "/blog/discovery/influencer-sourcing-brief.svg",
      alt: "A sourcing brief whose fields connect either to search filters such as niche, follower range, city and language, or to manual checks such as audience location, budget and exclusions",
    },
    discoveryCta: {
      headline: "Search From Your Brief, Not From Scratch",
      body: "Explore Kudozz Discovery to search Instagram creators in India using the creator profile from your sourcing brief, and keep each brief's candidates in their own saved list. Audience verification, outreach and contracts stay with your team.",
    },
    body: [
      {
        type: "paragraph",
        text: "'Can you find us 20 fitness influencers by Friday?' Requests like this reach marketing teams every week, and they nearly always come back wrong. Twenty creators turn up. Half are the wrong size, a few live in cities the brand doesn't ship to, two worked with a competitor last month, and the whole round starts again.",
      },
      {
        type: "paragraph",
        text: "An influencer sourcing brief prevents that. It's a short internal document that tells whoever searches for creators exactly who they're looking for and why: target audience, objective, niche, location, language, platforms, creator tier, budget and exclusions. Written once, it turns a vague request into search criteria, a fair way to judge candidates and a clear point at which the search is finished.",
      },
      { type: "heading", text: "Three documents that get confused", id: "three-documents" },
      {
        type: "paragraph",
        text: "Teams often use 'brief' for three different things. Each has its own reader and job:",
      },
      {
        type: "table",
        headers: ["Document", "Who reads it", "What it answers", "When it's written"],
        rows: [
          ["Sourcing brief (this guide)", "Your team or agency doing the search", "Which creators are we looking for, and how will we judge them?", "Before any search starts"],
          ["Sourcing workflow", "Everyone involved in sourcing", "How do requests move from intake to an approved shortlist, and who does what?", "Once, then refined over time"],
          ["Campaign brief", "The creators you approach", "What do we want you to make, by when, and on what terms?", "Before outreach, once the shortlist is approved"],
        ],
      },
      {
        type: "paragraph",
        text: "The workflow is the process; the sourcing brief is the input for one run of it. If you're setting up the process itself, read how to build a repeatable influencer sourcing workflow. Once creators are chosen, the document they receive is the one described in what to put in an influencer marketing brief before approaching creators.",
        links: [
          { text: "how to build a repeatable influencer sourcing workflow", href: "/blog/influencer-sourcing-workflow" },
          { text: "what to put in an influencer marketing brief before approaching creators", href: "/blog/influencer-campaign-brief" },
        ],
      },
      { type: "heading", text: "What an influencer sourcing brief should include", id: "what-to-include" },
      { type: "subheading", text: "1. Objective and product" },
      {
        type: "paragraph",
        text: "State one primary objective in a way that changes the search: awareness in a new city, sales through a code, content for ads, launch buzz or store footfall. Add the product, its price point, where it's sold and anything creators must not claim. A sales objective points the searcher towards creators whose comments are full of buying questions; a content-for-ads objective points them towards strong producers, whatever their audience size.",
      },
      { type: "subheading", text: "2. Target audience" },
      {
        type: "paragraph",
        text: "Describe the customer, not the creator: age range, gender where relevant, cities or states, language, life stage or interests, and why they buy. Mark which of these are must-haves, because each one will later need proof from the creator's own analytics.",
      },
      { type: "subheading", text: "3. Creator profile" },
      {
        type: "list",
        items: [
          "Niche and sub-niche: 'vegetarian home cooking, quick weekday meals' is searchable; 'food' is not.",
          "Creator location: where the creator lives and shoots, if local relevance or in-person shoots matter.",
          "Content language: the language the content must be in, which may differ from the language of the brief.",
          "Platforms and formats: Instagram Reels and Stories, YouTube long-form, and so on.",
          "Creator tier: a follower range for each role, for example a few larger creators for reach and more micro creators for depth.",
          "Creator gender, only where the product or content genuinely requires it.",
          "Activity: a minimum posting frequency, so dormant accounts drop out early.",
        ],
      },
      { type: "subheading", text: "4. Budget" },
      {
        type: "paragraph",
        text: "Give a range per creator role and say what it must cover: fee, product, shipping and usage rights. Note whether barter or seeding is acceptable. Without a budget line, the search drifts towards creators the brand can't afford.",
      },
      { type: "subheading", text: "5. Exclusions and gates" },
      {
        type: "list",
        items: [
          "Creators who worked with named competitors, with a time window.",
          "Creators the brand used recently, if the brief needs fresh faces.",
          "Content themes or past controversies the brand won't be associated with.",
          "A minimum engagement rate or typical view count below which nobody is considered.",
          "Category rules, such as ASCI's expectation that creators giving health or financial advice hold relevant qualifications.",
        ],
      },
      {
        type: "paragraph",
        text: "Whether a creator is currently tied to a rival is a separate question to raise before signing; checking influencer exclusivity explains what to ask.",
        links: [{ text: "checking influencer exclusivity", href: "/blog/influencer-exclusivity" }],
      },
      { type: "subheading", text: "6. Numbers, dates and owners" },
      {
        type: "paragraph",
        text: "Say how many creators the campaign needs, how many backups, roughly how large the longlist should be, when the shortlist is due, who searches and who approves. Work out how many influencers a campaign needs before filling this line, and use the guide to selecting the right influencer mix to split tiers by role.",
        links: [
          { text: "how many influencers a campaign needs", href: "/blog/how-many-influencers-for-a-campaign" },
          { text: "selecting the right influencer mix", href: "/blog/select-influencer-mix-for-campaign" },
        ],
      },
      { type: "heading", text: "Write the audience and the creator separately", id: "audience-vs-creator" },
      {
        type: "paragraph",
        text: "This is the field teams blur most often. 'Women in Pune aged 25 to 35' describes your customer. It doesn't describe the creator, and a Pune-based creator can have most of her audience in Mumbai, Delhi or abroad. Keep the two apart:",
      },
      {
        type: "table",
        headers: ["", "Target audience", "Creator profile"],
        rows: [
          ["Describes", "Who should see the content", "Who should make it"],
          ["Location", "Where customers live", "Where the creator lives and shoots"],
          ["Language", "What customers understand and prefer", "What the creator speaks on camera"],
          ["Gender", "Who buys or uses the product", "Only if the content requires it"],
          ["How it's checked", "The creator's analytics screenshots, after the search", "Public profile and search filters, during the search"],
        ],
      },
      {
        type: "paragraph",
        text: "Search filters work on the creator side. The audience side has to be confirmed with the creator, which is why it pays to understand where an influencer's audience actually lives before anyone is approved.",
        links: [{ text: "where an influencer's audience actually lives", href: "/blog/influencer-audience-location" }],
      },
      { type: "heading", text: "How brief fields map to search filters", id: "brief-to-filters" },
      {
        type: "paragraph",
        text: "A well-written brief can be typed almost straight into a search tool. Here's how the fields line up with the filters in Kudozz Discovery, which searches Instagram creators in India, and what each filter can't tell you:",
      },
      {
        type: "table",
        headers: ["Brief field", "Filter you can set", "Still checked by hand"],
        rows: [
          ["Niche and sub-niche", "Niche (14 categories, such as Beauty & Skincare or Food & Beverages)", "Sub-niche, style and topic fit from recent posts"],
          ["Creator tier", "Follower range", "Whether the followers are genuine"],
          ["Creator location", "State and city (the creator's)", "Audience location, from the creator's Insights"],
          ["Content language", "Language", "Whether the audience understands it, from comments and Insights"],
          ["Creator gender", "Gender (the creator's)", "Audience gender split, from Insights"],
          ["Engagement gate", "Minimum engagement rate", "Comment quality and signs of inauthentic activity"],
          ["Delivery gate", "Minimum average views or likes", "Typical rather than best-post performance"],
          ["Activity", "Posting frequency", "Content consistency over recent months"],
          ["Platform", "Instagram only", "YouTube, LinkedIn and other platforms, searched separately"],
          ["Budget", "None; rates aren't listed", "Quotes from creators"],
          ["Exclusions", "None", "Past sponsored posts, competitor work, brand-safety review"],
        ],
      },
      {
        type: "paragraph",
        text: "There's more on how to set search filters by niche, location and audience relevance in a separate guide. Name your saved list after the brief, so the candidates and the criteria they were found against stay together.",
        links: [{ text: "how to set search filters by niche, location and audience relevance", href: "/blog/influencer-search-tools" }],
      },
      {
        type: "discovery-cta",
        headline: "Run Your Sourcing Brief as a Search",
        body: "Kudozz Discovery turns the creator side of your brief into filters for Instagram creators in India: niche, follower range, state, city, language, gender, minimum engagement, views, likes and posting frequency. Save results into a list named after the brief; audience checks, outreach and contracts stay with your team.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Influencer sourcing brief template", id: "sourcing-brief-template" },
      {
        type: "paragraph",
        text: "Copy this into a shared doc or form. If a field doesn't apply, write 'not relevant' rather than leaving it blank, so the searcher knows it was considered.",
      },
      {
        type: "template",
        label: "Influencer sourcing brief",
        text: "INFLUENCER SOURCING BRIEF\nBrief name / ID:            Requested by:            Date:\nSearcher:                   Approver:                Shortlist due:\n\n1. OBJECTIVE AND PRODUCT\nPrimary objective (one):\nProduct, price point, where it's sold:\nClaims creators must not make:\n\n2. TARGET AUDIENCE (verify later with creator analytics)\nAge range:                  Gender (if relevant):\nCities / states / countries:\nLanguages:\nLife stage or interests:\nMust-haves vs nice-to-haves:\n\n3. CREATOR PROFILE (used as search filters)\nNiche and sub-niche:\nCreator location (state / city), if it matters:\nContent language:\nPlatforms and formats:\nFollower range per role:\nCreator gender, only if required:\nMinimum engagement / average views / posting frequency:\n\n4. BUDGET\nRange per creator role:\nCovers: fee / product / shipping / usage rights\nBarter or seeding acceptable?  Y / N\n\n5. EXCLUSIONS AND GATES\nCompetitors' collaborators to exclude (time window):\nCreators used recently to exclude:\nContent themes or issues to avoid:\nCategory rules (qualifications, disclosures):\n\n6. NUMBERS AND OUTPUT\nCreators needed:        Backups:        Longlist size:\nFields to record per creator:\nShared list name:",
      },
      { type: "heading", text: "A filled-in example", id: "worked-example" },
      {
        type: "paragraph",
        text: "Say a Jaipur-based millet snacks brand wants awareness among young working professionals in Jaipur, Ahmedabad and Indore before its products reach supermarket shelves there. The key lines of its brief might read:",
      },
      {
        type: "list",
        items: [
          "Objective: awareness in three cities ahead of retail listing; no sales target for this round.",
          "Target audience: 22 to 35, working professionals in Jaipur, Ahmedabad and Indore; Hindi and Gujarati; snacking at work.",
          "Creator profile: Food & Beverages or Health & Fitness niche; based in Rajasthan, Gujarat or Madhya Pradesh; Hindi or Gujarati content; Reels; mostly 10K to 100K followers plus two or three larger creators; posting at least weekly.",
          "Budget: a fee range by tier plus product; three months of usage rights for paid social.",
          "Exclusions: anyone who promoted a competing snack brand in the last six months; content built around crash dieting.",
          "Output: 10 creators plus 4 backups from a longlist of about 50, due in eight working days.",
        ],
      },
      {
        type: "paragraph",
        text: "Every line either becomes a filter or tells the searcher what to check by hand. Nothing says 'good vibes' or 'premium feel' without describing what that looks like.",
      },
      { type: "heading", text: "Why a structured brief makes shortlisting better", id: "better-shortlisting" },
      {
        type: "list",
        items: [
          "Searches are reproducible: a colleague can run the same filters and get comparable candidates.",
          "Every candidate is judged on the same criteria, so scoring is fair and easy to explain.",
          "The longlist has a stopping point, because the brief says how many candidates are needed.",
          "Exclusions remove rework before the shortlist meeting rather than during it.",
          "Audience questions are written down upfront, so the first conversation with a creator collects the right screenshots.",
          "Briefs can be reused: the next campaign in the same category starts from the last one.",
        ],
      },
      {
        type: "paragraph",
        text: "From there, the steps for building a shortlist from a longlist take over.",
        links: [{ text: "building a shortlist from a longlist", href: "/blog/influencer-shortlist" }],
      },
      { type: "heading", text: "Mistakes that make sourcing briefs fail", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Describing the customer and calling it the creator profile.",
          "Asking for 'micro and macro' without saying what role each plays.",
          "Leaving budget out to 'see what's out there'.",
          "Listing ten must-haves, which leaves almost nobody; separate must-haves from preferences.",
          "Forgetting exclusions until a competitor's recent collaborator is already on the shortlist.",
          "No owner or deadline, so the brief sits in a folder.",
          "Writing the brief for one platform and expecting the searcher to cover others without saying so.",
        ],
      },
      { type: "heading", text: "Before you send the brief", id: "conclusion" },
      {
        type: "paragraph",
        text: "Read it as the person searching would. Could they set every filter without asking you a question? Could they tell a good candidate from a near miss? Do they know when to stop? If the answer to all three is yes, the brief is ready. If your team doesn't have the hours for the search itself, Kudozz's creator discovery service can take your sourcing brief and return a vetted shortlist.",
        links: [{ text: "creator discovery service", href: "/services/creator-discovery" }],
      },
    ],
    faqs: [
      {
        question: "What is an influencer sourcing brief?",
        answer:
          "It's an internal document that tells the person searching for creators who to look for and how to judge them. It covers the objective, target audience, creator profile, budget, exclusions, numbers and deadlines, so the search can be run once and run properly.",
      },
      {
        question: "How is a sourcing brief different from an influencer campaign brief?",
        answer:
          "The sourcing brief stays inside your team and describes the creators you want. The campaign brief goes to the creators you've chosen and describes the content, timelines, terms and disclosure rules. One comes before the search, the other before outreach.",
      },
      {
        question: "Who should write the sourcing brief?",
        answer:
          "Whoever owns the campaign, usually the brand or marketing manager, with the decision-maker signing off on budget and exclusions. Ask the person who'll run the search to read it first; if they have questions, the brief isn't finished.",
      },
      {
        question: "How long should an influencer sourcing brief be?",
        answer:
          "One to two pages is plenty. The template in this guide fits on a single page once filled in, and longer briefs tend to get skimmed. Detail on creative direction belongs in the campaign brief, not here.",
      },
      {
        question: "Can one sourcing brief cover Instagram and YouTube?",
        answer:
          "The objective, audience, budget and exclusions can be shared, but write a separate creator profile for each platform, because tiers, formats and signals differ. Kudozz Discovery covers Instagram creators in India only, so YouTube candidates need to be searched separately.",
      },
    ],
  },

  // #100 influencer-discovery-checklist (UPGRADE, orig 2026-11-25)
  {
    slug: "influencer-discovery-checklist",
    category: "Influencer Marketing",
    title: "Influencer Discovery Checklist: 25 Questions to Ask Before Shortlisting a Creator",
    seoTitle: "Influencer Discovery Checklist: 25 Questions | Kudozz",
    excerpt:
      "Twenty-five questions to ask about every creator before they reach your shortlist, grouped by audience, engagement, content, brand fit, past collaborations, cost and readiness, and marked by where the answer comes from.",
    metaDescription:
      "An influencer discovery checklist of 25 questions to ask before shortlisting a creator, each marked public research or ask the creator, with a template.",
    author: AUTHOR,
    publishedAt: "2026-11-25",
    updatedAt: "2026-11-27",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["Influencer Discovery", "Checklist", "Influencer Vetting", "Creator Shortlist"],
    related: ["things-to-check-before-selecting-influencers", "influencer-shortlist", "how-to-research-influencers", "influencer-engagement-quality"],
    hero: {
      src: "/blog/discovery/influencer-discovery-checklist.svg",
      alt: "Twenty-five numbered checklist squares in seven groups, from audience to campaign readiness, each marked as public research or a question to ask the creator",
    },
    discoveryCta: {
      headline: "Work Through Your 25 Questions Faster",
      body: "Explore Kudozz Discovery to find Instagram creators in India by niche, city, language and engagement, check their profile metrics and save the ones worth a full checklist into a named list. Outreach, contracts and creator-provided analytics stay with your team.",
    },
    body: [
      {
        type: "paragraph",
        text: "Most shortlisting mistakes aren't caused by bad judgement. They come from questions nobody asked: whether the audience lives where you sell, whether that strong Reel was a one-off, whether the creator signed with a competitor last month. This influencer discovery checklist puts those questions in one place, 25 of them, so every candidate goes through the same list before reaching your shortlist.",
      },
      {
        type: "paragraph",
        text: "Each question is marked with where its answer comes from. Some you can settle from the creator's public profile in a few minutes. Others only the creator can answer, with analytics screenshots or a straight reply. Knowing which is which tells you what to finish before outreach and what to ask in the first conversation.",
      },
      { type: "heading", text: "Public research or ask the creator?", id: "public-or-ask" },
      {
        type: "paragraph",
        text: "Public research means anything you can see without the creator's help: posts, captions, comments, posting dates, visible views and likes, past sponsored content and public statements. Profile metrics in a discovery tool count here too. Ask the creator means data and commitments only they hold: private analytics such as Instagram Insights or YouTube Studio, current contracts, rates, availability and how they like to work.",
      },
      {
        type: "paragraph",
        text: "A practical rule: finish every public-research question before you contact anyone, so conversations are spent only on creators who already pass. Then send the ask-the-creator questions together in one message. A creator who won't share recent analytics has given you an answer too.",
      },
      { type: "heading", text: "All 25 questions at a glance", id: "all-25-questions" },
      {
        type: "paragraph",
        text: "The questions are grouped: audience (1 to 4), engagement (5 to 8), content (9 to 12), brand fit (13 to 16), previous collaborations (17 to 19), commercial suitability (20 to 22) and campaign readiness (23 to 25). Sixteen can be answered by public research; nine need the creator.",
      },
      {
        type: "table",
        headers: ["#", "Question", "Answer from", "Where to look"],
        rows: [
          ["1", "Does the audience's age and gender match your customer?", "Ask the creator", "Insights or Studio screenshots, last 30 to 90 days"],
          ["2", "Is the audience in the cities, states or countries you sell to?", "Ask the creator", "Top cities and countries in Insights"],
          ["3", "Does the audience understand the language your content will use?", "Public research", "Language of comments and replies"],
          ["4", "Do the commenters look like your customers?", "Public research", "Who comments and what they ask"],
          ["5", "What do typical recent posts achieve, ignoring the best one?", "Public research", "Median views on the last 10 to 15 Reels"],
          ["6", "Is the engagement rate normal for this size and niche?", "Public research", "Profile metrics vs similar creators"],
          ["7", "Are there signs of bought followers or engagement?", "Public research", "Follower jumps, generic comments, views out of line with likes"],
          ["8", "What reach, saves and shares do recent posts get?", "Ask the creator", "Post-level Insights screenshots"],
          ["9", "Has the creator posted steadily for the last three months?", "Public research", "Post dates and gaps"],
          ["10", "Is quality consistent, or carried by one viral post?", "Public research", "Spread of results and production across recent posts"],
          ["11", "Can they make the format you need?", "Public research", "Recent Reels, Stories highlights, carousels or long-form"],
          ["12", "Do they hook viewers and work products in naturally?", "Public research", "Opening seconds of recent videos; past integrations"],
          ["13", "Would your product look natural in this feed?", "Public research", "Grid, themes, products they already use"],
          ["14", "Do their tone and values match your brand guidelines?", "Public research", "Captions, humour, how they handle comments"],
          ["15", "Do they genuinely use products in your category?", "Public research", "Unsponsored mentions and routines"],
          ["16", "Is there anything in their content you couldn't stand behind?", "Public research", "Past posts, replies, public controversies"],
          ["17", "Which brands have they worked with in the last 6 to 12 months, and any competitors?", "Public research", "Paid partnership labels, tags, ad disclosures"],
          ["18", "How much of the feed is sponsored?", "Public research", "Share of recent posts that are paid"],
          ["19", "Are paid posts clearly disclosed?", "Public research", "Labels and caption disclosures"],
          ["20", "Does their rate for these deliverables fit the budget?", "Ask the creator", "Quote per deliverable and what it includes"],
          ["21", "Are they bound by any exclusivity that conflicts with yours?", "Ask the creator", "Current agreements and end dates"],
          ["22", "Will they accept your usage rights and approval terms?", "Ask the creator", "Rights period, paid usage, revision rounds"],
          ["23", "Are they available in your campaign window?", "Ask the creator", "Dates and other commitments"],
          ["24", "Will they work to a brief, share drafts and use your disclosure wording?", "Ask the creator", "Their process and turnaround"],
          ["25", "Can they share analytics and the details needed to pay them?", "Ask the creator", "Screenshots, invoice and tax details"],
        ],
      },
      { type: "heading", text: "Audience: questions 1 to 4", id: "audience-questions" },
      {
        type: "paragraph",
        text: "Public numbers say nothing reliable about who the audience is. The creator's location isn't the audience's location: a Kolkata-based creator can have most viewers in Bengaluru or abroad. That's why questions 1 and 2 go to the creator, while 3 and 4 can be answered by reading comments. What to request and how to read the screenshots is covered in checking an influencer's audience demographics and in confirming where an influencer's audience is located.",
        links: [
          { text: "checking an influencer's audience demographics", href: "/blog/influencer-audience-demographics" },
          { text: "confirming where an influencer's audience is located", href: "/blog/influencer-audience-location" },
        ],
      },
      { type: "heading", text: "Engagement: questions 5 to 8", id: "engagement-questions" },
      {
        type: "paragraph",
        text: "Use the median, not the best post, and compare against creators of a similar size in the same niche rather than a universal benchmark. Question 7 is a screen, not a verdict: unusual patterns are a reason to look closer, not to reject outright. The methods are in judging engagement quality before a collaboration and in spotting fake followers and suspicious audience patterns.",
        links: [
          { text: "judging engagement quality before a collaboration", href: "/blog/influencer-engagement-quality" },
          { text: "spotting fake followers and suspicious audience patterns", href: "/blog/how-to-identify-fake-followers" },
        ],
      },
      { type: "heading", text: "Content: questions 9 to 12", id: "content-questions" },
      {
        type: "paragraph",
        text: "One viral Reel can make a profile look far stronger than the creator's usual work. Scroll back three months, note posting gaps and look at the spread of results, not the peak. The deep dive on judging influencer content consistency shows what steady looks like. Question 12 is where you find out whether the creator can make your product interesting rather than just visible.",
        links: [{ text: "judging influencer content consistency", href: "/blog/influencer-content-consistency" }],
      },
      {
        type: "discovery-cta",
        headline: "Answer the Public Questions First",
        body: "Kudozz Discovery shows followers, posts, average views and likes and engagement rate for Instagram creators in India, a starting point for questions 5 and 6, and its posting-frequency filter helps with question 9. Audience data, past-collaboration research and every ask-the-creator question stay with your team.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Brand fit: questions 13 to 16", id: "brand-fit-questions" },
      {
        type: "paragraph",
        text: "Brand fit is part taste and part risk. Questions 13 to 15 test whether a collaboration would feel natural; question 16 is a brand-safety screen. Do it by reading recent posts and replies rather than only searching for keywords, have a second person review anything borderline, and record the decision. Running a pre-hire brand safety check sets out that process.",
        links: [{ text: "Running a pre-hire brand safety check", href: "/blog/influencer-marketing-brand-safety" }],
      },
      { type: "heading", text: "Previous collaborations: questions 17 to 19", id: "collaboration-questions" },
      {
        type: "paragraph",
        text: "Past sponsored work shows three things at once: who the audience has already been sold to, how commercial the feed has become and whether the creator discloses properly. ASCI's guidelines for influencer advertising require paid or otherwise material connections to be clearly disclosed, so careless labelling on past posts is a risk you inherit. Researching an influencer's previous brand collaborations explains how to build that history from public posts.",
        links: [{ text: "Researching an influencer's previous brand collaborations", href: "/blog/influencer-previous-brand-collaborations" }],
      },
      { type: "heading", text: "Commercial suitability: questions 20 to 22", id: "commercial-questions" },
      {
        type: "paragraph",
        text: "Only the creator can answer these, and they decide whether a strong candidate is actually bookable. Ask for a rate per deliverable with usage rights priced separately, and ask directly about any current exclusivity in your category and when it ends. What to ask, and what exclusivity to request yourself, is covered in checking a creator's existing exclusivity deals.",
        links: [{ text: "checking a creator's existing exclusivity deals", href: "/blog/influencer-exclusivity" }],
      },
      { type: "heading", text: "Campaign readiness: questions 23 to 25", id: "readiness-questions" },
      {
        type: "paragraph",
        text: "A perfect creator who can't post before your launch date doesn't belong on this shortlist. Confirm dates, how many draft rounds they accept, that they'll use the disclosure wording you need, and that they can share recent analytics and invoice the way your finance team requires. Put these in your first message to save a round of back-and-forth.",
      },
      { type: "heading", text: "Turning answers into a shortlist decision", id: "scoring" },
      {
        type: "paragraph",
        text: "The questions don't decide anything on their own. Treat a few as gates, such as a conflicting exclusivity, a habit of undisclosed sponsorships or a brand-safety concern, and score the rest. Building a creator quality score shows how to weight the answers into one pre-collaboration score, and the 15 things to check before selecting an influencer explain the reasoning behind many of these checks in more depth.",
        links: [
          { text: "Building a creator quality score", href: "/blog/creator-quality-score" },
          { text: "15 things to check before selecting an influencer", href: "/blog/things-to-check-before-selecting-influencers" },
        ],
      },
      { type: "heading", text: "Copyable influencer discovery checklist", id: "checklist-template" },
      {
        type: "paragraph",
        text: "Paste this into your shared tracker and fill one copy per creator. Note the evidence for each tick, so anyone can check the decision later.",
      },
      {
        type: "template",
        label: "Influencer discovery checklist: 25 questions",
        text: "Creator: ________   Platform: ________   Checked by / date: ________\nP = public research (finish before outreach)   C = ask the creator\n\nAUDIENCE\n[ ] 1  C  Audience age and gender match our customer\n[ ] 2  C  Audience in our cities / states / countries\n[ ] 3  P  Audience understands our content language\n[ ] 4  P  Commenters look like our customers\n\nENGAGEMENT\n[ ] 5  P  Typical (median) recent views noted, best post ignored\n[ ] 6  P  Engagement rate normal for size and niche\n[ ] 7  P  No signs of bought followers or engagement\n[ ] 8  C  Reach, saves and shares from Insights\n\nCONTENT\n[ ] 9  P  Posting steadily for three months\n[ ] 10 P  Quality consistent, not one viral post\n[ ] 11 P  Can make the format we need\n[ ] 12 P  Strong hooks, natural product integration\n\nBRAND FIT\n[ ] 13 P  Product would look natural in the feed\n[ ] 14 P  Tone and values match our guidelines\n[ ] 15 P  Genuinely uses products in our category\n[ ] 16 P  Nothing we couldn't stand behind (second reviewer if borderline)\n\nPREVIOUS COLLABORATIONS\n[ ] 17 P  Brands in last 6 to 12 months; no conflicting competitor\n[ ] 18 P  Feed not overly sponsored\n[ ] 19 P  Paid posts clearly disclosed\n\nCOMMERCIAL\n[ ] 20 C  Rate fits budget (usage rights priced separately)\n[ ] 21 C  No conflicting exclusivity; end dates noted\n[ ] 22 C  Accepts usage rights and approval terms\n\nREADINESS\n[ ] 23 C  Available in campaign window\n[ ] 24 C  Works to brief, drafts and disclosure wording\n[ ] 25 C  Shares analytics; can invoice as finance needs\n\nGates failed: ________   Score: ____   Decision: Shortlist / Reserve / Out\nReason: ________",
      },
      { type: "heading", text: "Common mistakes with discovery checklists", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Answering ask-the-creator questions with guesses from public data, especially audience location.",
          "Contacting creators before the public questions are done, then dropping them after a conversation.",
          "Ticking boxes without noting the evidence, so nobody can check the decision later.",
          "Using a creator's best post as the answer to question 5.",
          "Treating every question as equal when a few of them are gates.",
          "Running the full checklist on the entire longlist instead of narrowing it first.",
        ],
      },
      { type: "heading", text: "Keep it where the team will use it", id: "conclusion" },
      {
        type: "paragraph",
        text: "A checklist only helps if it's used the same way every time. Bookmark this page or paste the template into your tracker, finish the public questions before outreach, ask the creator questions in one go, and record the evidence behind every answer. If you'd rather hand the research to a team, Kudozz's managed creator discovery runs these checks and returns a shortlist with the evidence attached.",
        links: [{ text: "managed creator discovery", href: "/services/creator-discovery" }],
      },
    ],
    faqs: [
      {
        question: "What should an influencer discovery checklist include?",
        answer:
          "Questions about the creator's audience, engagement, content, brand fit, previous collaborations, commercial terms and campaign readiness. The useful versions also say where each answer comes from, so the team knows what to research publicly and what to ask the creator.",
      },
      {
        question: "Which questions can I answer without contacting the creator?",
        answer:
          "In this checklist, 16 of the 25: comment language and quality, typical views, engagement rate, signs of inauthentic activity, posting consistency, formats, storytelling, brand fit, brand safety and past sponsored work. Audience demographics, reach, rates, exclusivity, rights, availability, working process and payment details need the creator.",
      },
      {
        question: "What if a creator won't share their analytics?",
        answer:
          "Ask once more and explain why you need it, such as confirming the audience is in your target cities. If they still decline, record that and weigh it in your decision; for briefs where audience location or age is a must-have, it's usually reason enough to move to a backup.",
      },
      {
        question: "How is a discovery checklist different from a campaign checklist?",
        answer:
          "A discovery checklist ends when a creator is approved for the shortlist. A campaign checklist goes on to contracts, creator briefs, content approval, posting, tracking and reporting.",
      },
      {
        question: "Do I need to ask all 25 questions about every creator?",
        answer:
          "Not on the whole longlist. Use the public-research questions to narrow it first, then ask the remaining questions of creators who pass. Everyone who makes the final shortlist should have all 25 answered.",
      },
    ],
  },
];
