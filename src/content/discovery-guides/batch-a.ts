import type { BlogPost } from "@/content/blog";

/**
 * Kudozz Discovery content cluster, batch A: broad, Instagram, micro, relevance and local creator discovery.
 * Product claims stay within the verified facts in src/config/discovery.ts.
 */
export const discoveryBatchA: BlogPost[] = [
  // #1 UPGRADE (originally published 2026-09-06)
  {
    slug: "find-indian-influencers",
    category: "Influencer Marketing",
    title: "How to Find the Right Influencers for Your Brand in India",
    seoTitle: "How to Find Influencers for Your Brand in India | Kudozz",
    excerpt:
      "A practical process for Indian brands: set the objective, describe the creator you need, search the right sources, evaluate fit and build a shortlist your team can act on.",
    metaDescription:
      "Find influencers for your brand in India: set the objective, profile the creator, search six sources, evaluate fit and build a shortlist you can act on.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-09-06",
    updatedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["Creator Discovery", "Influencer Marketing", "India", "Influencer Selection"],
    related: [
      "how-to-find-instagram-influencers",
      "influencer-shortlist",
      "things-to-check-before-selecting-influencers",
      "best-influencer-discovery-tools-india",
    ],
    hero: {
      src: "/blog/discovery/find-indian-influencers.svg",
      alt: "Five-step process for finding influencers in India: objective, creator profile, six search sources, evaluation and shortlist",
    },
    discoveryCta: {
      body: "Once you know the creator profile you need, Kudozz Discovery lets you search Instagram creators in India by niche, city, language and engagement, save them into a list for each campaign and build a shortlist faster.",
    },
    body: [
      {
        type: "paragraph",
        text: "Most brands start looking for influencers in the wrong place: the search bar. Someone types the category into Instagram, scrolls the accounts with the most followers, sends a few DMs and hopes the replies are affordable. Sometimes it works. More often the brand ends up with creators who are popular but wrong for the product, or spends three weeks chasing people who never reply.",
      },
      {
        type: "paragraph",
        text: "Finding the right influencers is less about search tricks and more about order. Decide what the campaign must achieve, describe the creator who can achieve it, and only then go looking. This guide walks through that process for Indian brands, from objective to shortlist, and links to deeper guides on each step so you can go further where you need to.",
      },
      { type: "heading", text: "The short version", id: "short-version" },
      {
        type: "list",
        items: [
          "Set one primary objective for the campaign (awareness, sales, content, footfall or credibility).",
          "Write a creator profile: niche, audience, language, region, format and tier.",
          "Search several sources, not one: Instagram search, hashtags, competitor tags, your own customers, discovery tools and agencies.",
          "Evaluate each candidate on relevance, content quality, audience fit, engagement quality and professionalism.",
          "Record everything in one shortlist with consistent columns, then move to outreach.",
        ],
      },
      { type: "heading", text: "Start with the objective, not the creator", id: "start-with-objective" },
      {
        type: "paragraph",
        text: "The same creator can be a great choice for one goal and a poor one for another. A creator with polished, aesthetic Reels may be ideal if you need content to run as ads, and much less useful if you need people in Lucknow to walk into a new store this weekend. Pick one primary objective before you search, because it changes which creators you look for and where you find them.",
      },
      {
        type: "table",
        headers: ["Primary objective", "The creator you need", "What to look at first"],
        rows: [
          ["Awareness for a launch", "Creators whose audience overlaps your target customer, often a mix of tiers", "Consistent reach on recent posts, not one viral Reel"],
          ["Sales through links or codes", "Creators whose audience already buys on their recommendation", "Comments asking where to buy, past affiliate or code work"],
          ["Content for ads and your own feed", "Strong on-camera or production skill, comfortable with usage rights", "Hook quality, lighting, clarity of demos"],
          ["Local footfall", "Creators based in and posting about your city", "Location tags, local references, city-specific audience"],
          ["Credibility and education", "Creators with genuine expertise or long-form trust", "Depth of explanations, how they handle questions"],
        ],
      },
      { type: "heading", text: "Write a one-paragraph creator profile", id: "creator-profile" },
      {
        type: "paragraph",
        text: "A creator profile is a short description of the person you are trying to find. It keeps searches focused, makes shortlisting faster and stops each team member from applying their own taste. Say a Jaipur block-print clothing label wants to reach working women in metros and Tier 2 cities ahead of the festive season. Its profile might look like the template below.",
      },
      {
        type: "template",
        label: "Creator profile template",
        text: "Objective: festive-season awareness and first purchases on our website\nNiche: ethnic and everyday fashion, slow fashion, handloom (not general lifestyle)\nAudience we want to reach: women 22–40, working, metros plus Tier 2 cities\nLanguage: English or Hindi-English mix\nRegion: pan-India, with a few creators in Rajasthan for credibility\nFormat: Reels with try-ons, styling carousels, Stories with link stickers\nTier: mostly micro creators, one or two larger names for reach\nNon-negotiables: no fast-fashion haul content, clear #ad disclosure history",
      },
      {
        type: "paragraph",
        text: "Notice that the profile separates the audience you want from the creator's own traits. You are hiring access to an audience and a way of communicating with it, so the audience line matters most. Our guide to finding creators by niche, location and audience relevance goes deeper on how to judge each of those layers.",
        links: [
          { text: "finding creators by niche, location and audience relevance", href: "/blog/influencer-search-tools" },
        ],
      },
      { type: "heading", text: "Where to search: six sources worth using", id: "where-to-search" },
      {
        type: "paragraph",
        text: "No single source finds every good creator. Manual methods are free but slow; tools are faster but still need human judgement; agencies save time but cost money. Most brands get the best list by combining two or three of the sources below.",
      },
      { type: "subheading", text: "1. Manual Instagram search" },
      {
        type: "paragraph",
        text: "Search category keywords, product terms and phrases your customers use, then open profiles and look at recent posts rather than the grid's best performers. Train a research account by following and engaging with your niche so Explore starts suggesting similar creators. Our step-by-step guide to finding Instagram influencers covers search, Explore, Reels audio and other platform-specific methods in detail.",
        links: [{ text: "guide to finding Instagram influencers", href: "/blog/how-to-find-instagram-influencers" }],
      },
      { type: "subheading", text: "2. Hashtags" },
      {
        type: "paragraph",
        text: "Skip the giant hashtags where top posts are dominated by large accounts. Mid-sized, specific tags (a product type plus a city, a community phrase, a regional-language term) surface working creators who post in your space regularly. Note anyone who appears more than once.",
      },
      { type: "subheading", text: "3. Competitor and complementary-brand tagged posts" },
      {
        type: "paragraph",
        text: "Open the tagged tab of competitors and of brands that sell to the same customer without competing with you. Creators there have already shown they make content in your category. Look for those who posted organically, not just once as a paid post. Note whether any of them are currently tied to a competitor, since exclusivity terms may rule them out for now.",
      },
      { type: "subheading", text: "4. Customers who already post about you" },
      {
        type: "paragraph",
        text: "Your best-fit creators may already be your customers. Check your tagged posts, Story mentions, product reviews with photos and comments from people with sizeable followings. A creator who bought your product with their own money is more credible than one who has never heard of you. Make checking mentions a weekly habit so these posts do not slip past.",
      },
      { type: "subheading", text: "5. Creator discovery tools" },
      {
        type: "paragraph",
        text: "Discovery tools let you filter creators by attributes like niche, follower range, city, language and engagement, so you are reviewing a relevant set instead of scrolling randomly. They differ widely in platform coverage, data and pricing, so compare them against your actual needs; our roundup of influencer discovery tools for Indian brands is a good starting point. Treat any tool's numbers as signals to investigate, not verdicts.",
        links: [{ text: "influencer discovery tools for Indian brands", href: "/blog/best-influencer-discovery-tools-india" }],
      },
      { type: "subheading", text: "6. Agencies" },
      {
        type: "paragraph",
        text: "An agency brings existing creator relationships, negotiation experience and the time to manage dozens of conversations. It makes most sense when you need many creators across cities, have a tight deadline or do not have someone in-house to run outreach. If you would rather hand discovery and shortlisting off entirely, Kudozz offers creator discovery as an agency service.",
        links: [{ text: "creator discovery as an agency service", href: "/services/creator-discovery" }],
      },
      {
        type: "discovery-cta",
        headline: "Turn your creator profile into a search",
        body: "Kudozz Discovery lets you filter Indian Instagram creators by niche, follower band, city, language and minimum engagement rate, then save the ones that fit into a named list for your campaign.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Which source to use when", id: "which-source" },
      {
        type: "table",
        headers: ["Source", "Best for", "Cost", "Watch out for"],
        rows: [
          ["Manual Instagram search", "Small campaigns, understanding a niche", "Time only", "Slow; biased towards already-popular accounts"],
          ["Hashtags", "Niche and regional creators", "Time only", "Spam and inactive accounts in big tags"],
          ["Competitor tagged posts", "Proven category creators", "Time only", "Exclusivity clauses with competitors"],
          ["Your own customers", "Authentic advocates, gifting", "Product cost", "Smaller reach; may need briefing help"],
          ["Discovery tools", "Filtering many creators quickly", "Subscription or credits", "Data is a signal; still review content"],
          ["Agencies", "Scale, speed, multi-city campaigns", "Fees or retainer", "Make sure you see and approve the shortlist"],
        ],
      },
      { type: "heading", text: "Evaluate candidates before they reach the shortlist", id: "evaluate" },
      {
        type: "paragraph",
        text: "Searching produces a long list. Evaluation turns it into a short one. For each candidate, answer five questions, ideally within a few minutes per profile so the process stays manageable:",
      },
      {
        type: "list",
        items: [
          "Relevance: do most of their recent posts sit in your niche, or did they post about it once?",
          "Content quality: would you be happy to put this content on your own page or run it as an ad?",
          "Audience fit: do comments, language and references suggest the audience you want? Ask for insights screenshots to confirm age, gender and top cities.",
          "Engagement quality: are comments specific and conversational, or generic emoji strings? Do views hold steady across recent Reels?",
          "Professionalism and safety: do they disclose paid posts, reply to messages and avoid content that would embarrass your brand?",
        ],
      },
      {
        type: "paragraph",
        text: "For a fuller list, use our 15 things to check before selecting an influencer. If you suspect inflated numbers, follow the authenticity steps in how to vet influencers, and research each creator's past brand work properly before you approach them.",
        links: [
          { text: "15 things to check before selecting an influencer", href: "/blog/things-to-check-before-selecting-influencers" },
          { text: "how to vet influencers", href: "/blog/how-to-vet-influencers" },
          { text: "research each creator's past brand work", href: "/blog/how-to-research-influencers" },
        ],
      },
      { type: "heading", text: "Turn candidates into a shortlist your team can use", id: "build-shortlist" },
      {
        type: "paragraph",
        text: "A shortlist is only useful if everyone can read it the same way. Keep one sheet per campaign with the same columns every time, so you can compare creators and reuse the research later.",
      },
      {
        type: "template",
        label: "Shortlist columns",
        text: "Creator name | Handle and profile link | City / state | Language | Niche | Follower band\nAvg views (recent Reels) | Engagement notes | Content fit (1–5) | Audience fit (1–5)\nPast brand work | Red flags | Contact route | Status (to contact / contacted / replied / confirmed)",
      },
      {
        type: "paragraph",
        text: "Aim for more names than you need, since some creators will be unavailable, over budget or uninterested. Our step-by-step shortlisting guide explains how to rank and trim the list, and the influencer outreach list guide shows how to hand it to whoever is sending the messages.",
        links: [
          { text: "step-by-step shortlisting guide", href: "/blog/influencer-shortlist" },
          { text: "influencer outreach list guide", href: "/blog/how-to-create-influencer-outreach-list" },
        ],
      },
      { type: "heading", text: "India-specific things to plan for", id: "india-specifics" },
      {
        type: "list",
        items: [
          "Language: a Hindi-English creator and a Tamil creator reach very different audiences, even with similar follower counts. Decide which languages matter before you search.",
          "Region: creator location and audience location are not the same thing. A Mumbai creator may have most of their audience elsewhere, so confirm with insights.",
          "Festive timing: creators get booked early around Diwali, wedding season and big sale events. Start discovery several weeks before you need content.",
          "Platform mix: Instagram suits most fashion, beauty, food and lifestyle campaigns, while long product reviews often work better on YouTube. Plan which platform each creator is for.",
          "Tier mix: many Indian campaigns combine a few larger creators for reach with a group of micro creators for trust and volume.",
        ],
      },
      {
        type: "paragraph",
        text: "If micro creators are a big part of your plan, read how to find micro-influencers, since they are harder to surface through standard search. Review-heavy categories such as electronics or appliances may also need a separate search on YouTube.",
        links: [
          { text: "how to find micro-influencers", href: "/blog/how-to-find-micro-influencers" },
        ],
      },
      { type: "heading", text: "Common mistakes when finding influencers", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Searching before deciding the objective, then picking creators who suit a different goal.",
          "Treating follower count as the main filter instead of relevance and recent performance.",
          "Using one source only, which gives you the same popular names every other brand is contacting.",
          "Assuming a creator's city is where their audience lives.",
          "Judging profiles on their top posts rather than the last ten or twelve.",
          "Keeping the shortlist in screenshots and DMs, so nobody can compare creators or reuse the research.",
          "Starting too close to the launch date, leaving no time for replies, negotiation and briefing.",
        ],
      },
      { type: "heading", text: "Bringing it together", id: "conclusion" },
      {
        type: "paragraph",
        text: "The right influencers for your brand are the ones whose audience, language and content style match a clear objective. Set that objective, write the creator profile, search several sources, evaluate each candidate on the same criteria and record everything in a shortlist your team can act on. The process takes a little longer at the start and saves a great deal of time, money and awkward conversations later.",
      },
    ],
    faqs: [
      {
        question: "How many influencers should a brand shortlist for one campaign?",
        answer:
          "A common rule of thumb is to shortlist two to three times the number of creators you plan to work with. Some will be unavailable, over budget or slow to reply, and a longer list lets you choose on fit rather than settling.",
      },
      {
        question: "Is it better to find influencers yourself or use an agency?",
        answer:
          "If you need a handful of creators and have someone with time to research and message them, doing it in-house works well. Agencies make more sense for multi-city campaigns, large creator volumes or tight deadlines, where existing relationships and outreach capacity matter.",
      },
      {
        question: "Can I find influencers for free?",
        answer:
          "Yes. Instagram search, hashtags, competitor tagged posts and your own customers cost nothing but time. Discovery tools and agencies speed up the process, but the free methods are still worth using alongside them.",
      },
      {
        question: "How do I know an influencer's audience is in India or in my target city?",
        answer:
          "You cannot tell reliably from the public profile. Comments, language and local references give hints, but the dependable step is to ask the creator for a screenshot of their audience insights showing top countries, cities, age and gender.",
      },
      {
        question: "How long does it take to find the right influencers?",
        answer:
          "For a small campaign, expect a few days of focused research plus time for replies. For festive or launch campaigns with many creators, start several weeks ahead, because popular creators get booked early and negotiation takes time.",
      },
    ],
  },

  // #3 UPGRADE (originally published 2026-09-12)
  {
    slug: "how-to-find-instagram-influencers",
    category: "Instagram Marketing",
    title: "How to Find Instagram Influencers for Your Next Brand Campaign",
    seoTitle: "How to Find Instagram Influencers for Your Brand | Kudozz",
    excerpt:
      "Nine practical ways to find Instagram influencers, from search, hashtags and Explore to location tags, Reels audio, tagged posts and discovery tools, plus how to check a profile in two minutes.",
    metaDescription:
      "Nine ways to find Instagram influencers: search, hashtags, Explore, location tags, Reels audio, tagged and Collab posts, discovery tools, plus profile checks.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-09-12",
    updatedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "8 min read",
    tags: ["Creator Discovery", "Instagram Marketing", "Instagram Influencers", "India"],
    related: [
      "find-indian-influencers",
      "how-to-find-micro-influencers",
      "how-to-contact-instagram-influencers",
      "instagram-influencer-rates-india",
    ],
    hero: {
      src: "/blog/discovery/how-to-find-instagram-influencers.svg",
      alt: "Grid of nine Instagram discovery methods, from search and hashtags to Reels audio, tagged posts and discovery tools",
    },
    discoveryCta: {
      headline: "Find Instagram Creators Who Fit Your Campaign",
      body: "Skip some of the scrolling. Kudozz Discovery is built for Instagram creators in India: filter by niche, city, language, follower band and engagement, compare average views and likes, and save the right creators into a campaign list.",
    },
    body: [
      {
        type: "paragraph",
        text: "Say a Pune protein-snack brand has a new flavour launching in six weeks and wants twenty Instagram creators to talk about it. The founder opens Instagram, types \"fitness\" into search and gets a wall of accounts with millions of followers, half of them outside India and none of them likely to reply. The problem is not that the right creators are missing from Instagram. It is that the default search shows the most popular accounts, not the most relevant ones.",
      },
      {
        type: "paragraph",
        text: "Instagram gives you many more ways in than the search bar. This guide covers nine of them, how to run the research without losing track, and how to judge a profile quickly once you find it. If you need the broader process (objective, creator profile, evaluation) first, start with our guide to finding the right influencers for your brand in India.",
        links: [{ text: "finding the right influencers for your brand in India", href: "/blog/find-indian-influencers" }],
      },
      { type: "heading", text: "Decide what a good Instagram fit looks like", id: "define-fit" },
      {
        type: "paragraph",
        text: "Before searching, decide which Instagram formats the campaign needs, because creators are rarely equally strong at all of them. Some are excellent at Reels with sharp hooks, some build trust through talking-to-camera Stories, and some make carousels people save. Also decide how you plan to collaborate: a Collab post that appears on both accounts, Stories with a link sticker, or content you want to run as ads later. That shapes who you look for.",
      },
      {
        type: "table",
        headers: ["Campaign need", "Look for creators who…"],
        rows: [
          ["Reach through Reels", "Hold steady views across recent Reels, not just one viral video"],
          ["Clicks and sales", "Use Stories regularly and get replies or questions about products"],
          ["Saveable education", "Post carousels or explainers with comments asking follow-up questions"],
          ["Content for ads", "Shoot clean, well-lit demos and are open to usage rights"],
        ],
      },
      { type: "heading", text: "Nine ways to find Instagram influencers", id: "nine-methods" },
      { type: "subheading", text: "1. Keyword search, used properly" },
      {
        type: "paragraph",
        text: "Instagram search looks at names, usernames, bios and captions, so search the words a creator in your niche would actually use: \"home baker Indore\", \"skincare for oily skin\", \"budget travel Kerala\". Use the Accounts and Reels tabs separately. The Reels tab shows you who is making content on the topic right now, which is more useful than accounts that simply have the word in their name.",
      },
      { type: "subheading", text: "2. Specific hashtags" },
      {
        type: "paragraph",
        text: "Broad tags like #fashion are crowded with large accounts and spam. Narrow tags work better: product-specific (#cottonkurtas), community-specific (#homebakersofindia) or city-specific (#lucknowfoodies). Open several recent posts in each, and note creators who appear across more than one tag.",
      },
      { type: "subheading", text: "3. Train Explore with a research account" },
      {
        type: "paragraph",
        text: "Create a separate account for research and spend a few sessions following, saving and watching content in your niche. Explore and Reels recommendations will start surfacing similar creators, including smaller ones you would not find through search. Keeping research separate stops your personal feed from skewing the results.",
      },
      { type: "subheading", text: "4. Location tags" },
      {
        type: "paragraph",
        text: "Tap a location tag (a city, a neighbourhood, a mall, a popular café) to see recent posts from that place. This is the fastest way to find creators who are physically active in a city, which matters for store launches and events. Remember it tells you where the creator posts from, not where their followers live.",
      },
      { type: "subheading", text: "5. Reels audio pages" },
      {
        type: "paragraph",
        text: "When a song or sound is trending in your niche, tap the audio name on a Reel to see other Reels using it. This shows creators who are active, trend-aware and comfortable with the format, often in a specific language or region if the audio is regional.",
      },
      { type: "subheading", text: "6. Tagged posts of competitors and complementary brands" },
      {
        type: "paragraph",
        text: "A brand's tagged tab shows creators who have posted about it. Check competitors and complementary brands (for a protein snack, a gym chain or a sportswear label). Creators who tag several brands in your space are proven category creators; check whether any are tied up with a direct competitor.",
      },
      { type: "subheading", text: "7. Collab posts and suggested accounts" },
      {
        type: "paragraph",
        text: "Collab posts show two account names at the top, which leads you from one good creator to the people they work with. When you follow a creator, Instagram often suggests similar accounts; those suggestions are a quick way to widen a niche list. If you plan to use the format yourself, read our guide to Instagram Collab posts for brands.",
        links: [{ text: "Instagram Collab posts for brands", href: "/blog/instagram-collab-posts" }],
      },
      { type: "subheading", text: "8. Instagram's own creator marketplace tools" },
      {
        type: "paragraph",
        text: "Meta has offered a creator marketplace for brands within Instagram's professional tools, but availability, eligibility and features have varied by country and account type and change over time. Check whether your professional account currently has access and what it shows before planning around it. Treat it as one more source, not a replacement for your own review.",
      },
      { type: "subheading", text: "9. Creator discovery tools" },
      {
        type: "paragraph",
        text: "Discovery tools let you filter creators instead of stumbling across them. Kudozz Discovery, for example, covers Indian Instagram creators only and lets you filter by niche, follower band, state, city, language, gender and minimum engagement rate, then sort by average views or likes. You still need to watch the content, but you start from a relevant set rather than a random one.",
      },
      {
        type: "discovery-cta",
        headline: "Search Instagram creators by niche and city",
        body: "Kudozz Discovery lets you filter Indian Instagram creators by niche, city, language and engagement, sort by average views, and save the right ones into a list for this campaign.",
        ctaLabel: "Search Instagram creators",
      },
      { type: "heading", text: "Run the research without losing track", id: "research-workflow" },
      {
        type: "paragraph",
        text: "Instagram research falls apart when it lives in screenshots and saved posts. Use a simple workflow so every creator you find ends up somewhere your team can see:",
      },
      {
        type: "list",
        items: [
          "Create one Saved collection per campaign in your research account for creators worth a second look.",
          "Log each candidate in a sheet the same day: handle, city, language, niche, follower band, recent Reel views and a one-line note on why they fit.",
          "Record which method found them (hashtag, location tag, competitor tag, tool), so you learn which sources work for your category.",
          "Review in batches of ten to fifteen rather than one at a time; comparisons get easier side by side.",
        ],
      },
      {
        type: "paragraph",
        text: "If you prefer filters over scrolling, you can also start a search in Kudozz Discovery and save shortlisted creators into a named list per campaign.",
        links: [
          {
            text: "start a search in Kudozz Discovery",
            href: "https://discover.kudozz.in/?utm_source=kudozz_website&utm_medium=blog&utm_campaign=discovery_content&utm_content=how-to-find-instagram-influencers",
          },
        ],
      },
      { type: "heading", text: "A one-week Instagram search plan", id: "one-week-plan" },
      {
        type: "paragraph",
        text: "Searching without a time box tends to drift: one good profile leads to another and a whole afternoon disappears. For a campaign needing ten to twenty creators, a plan like the one below keeps research moving. Adjust the days to your deadline.",
      },
      {
        type: "table",
        headers: ["Day", "Focus", "Output"],
        rows: [
          ["Day 1", "Write the creator profile; set up or warm the research account", "Profile, 15–20 search terms and hashtags"],
          ["Day 2", "Keyword search, hashtags, location tags", "First 30–40 candidates logged"],
          ["Day 3", "Reels audio, tagged posts, Collab posts, suggested accounts, discovery tool", "Long list of 50–80 names"],
          ["Day 4", "Two-minute profile checks; cut anyone off-niche or inactive", "Long list trimmed to roughly 25–35"],
          ["Day 5", "First messages and insights requests", "Replies start arriving"],
          ["Days 6–7", "Review insights, compare quotes, rank", "Final shortlist with backups"],
        ],
      },
      {
        type: "paragraph",
        text: "The numbers are a rule of thumb, not a target. A niche B2B or regional campaign may produce a much shorter long list, which is fine if every name on it is relevant. What matters is that each day ends with something written down, not just a feed full of saved posts.",
      },
      { type: "heading", text: "How to read an Instagram profile in two minutes", id: "profile-check" },
      {
        type: "list",
        items: [
          "Recent Reels views: scroll the last ten to twelve. Are views broadly consistent, or is one viral outlier propping up the profile?",
          "Comments: open a few posts. Real audiences ask questions, tag friends and reply in full sentences, often in their own language.",
          "Niche consistency: count how many recent posts sit in your category.",
          "Highlights and tagged tab: past brand work, disclosure habits and how the creator presents products.",
          "Posting rhythm: regular activity matters more than a big archive.",
          "Bio: a contact email or management details usually signal the creator is open to collaborations.",
        ],
      },
      {
        type: "paragraph",
        text: "Engagement rate is a useful first filter, but calculate it consistently (our engagement rate guide explains the formulas) and remember it can be distorted. If numbers look odd, use the checks in how to identify fake followers and fake engagement.",
        links: [
          { text: "engagement rate guide", href: "/blog/influencer-engagement-rate" },
          { text: "how to identify fake followers and fake engagement", href: "/blog/how-to-identify-fake-followers" },
        ],
      },
      { type: "heading", text: "Ask for the data Instagram doesn't show publicly", id: "ask-for-insights" },
      {
        type: "paragraph",
        text: "Audience age, gender, top cities and reach are only visible to the creator. Before you confirm anyone, ask for recent insights screenshots. Most professional creators expect the request.",
      },
      {
        type: "template",
        label: "Insights request (DM or email)",
        text: "Hi [Name], thanks for the quick reply. Before we share a brief, could you send screenshots of your Instagram insights for the last 30 days? Mainly: audience top cities, age range and gender split, plus reach and views on two or three recent Reels. It helps us match the campaign to the right creators. Happy to share more about the product in return.",
      },
      {
        type: "paragraph",
        text: "Once you have a shortlist, our guide on how to contact Instagram influencers covers the first message, and our Instagram influencer rates guide helps you sense-check quotes.",
        links: [
          { text: "how to contact Instagram influencers", href: "/blog/how-to-contact-instagram-influencers" },
          { text: "Instagram influencer rates guide", href: "/blog/instagram-influencer-rates-india" },
        ],
      },
      { type: "heading", text: "Common mistakes when searching Instagram", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Relying on the top results of broad hashtags, which mostly show large and international accounts.",
          "Researching from a personal account, so Explore recommendations reflect your own interests.",
          "Judging a creator by follower count while ignoring recent Reels views.",
          "Reading a location tag as proof of where the audience lives.",
          "Shortlisting creators who are clearly tied to a direct competitor this season.",
          "Not checking disclosure habits; undisclosed paid posts are a compliance risk for your brand too.",
        ],
      },
      { type: "heading", text: "Final thoughts", id: "conclusion" },
      {
        type: "paragraph",
        text: "Instagram is full of good creators; the default search just isn't built to surface them for you. Combine keyword search, specific hashtags, a trained research account, location tags, Reels audio, tagged and Collab posts and a discovery tool, log everything in one place, and verify audience data before you commit. If you also need creators for long-form reviews, our guide to finding YouTube creators covers that platform, and Kudozz can run Instagram influencer campaigns end to end if you would rather hand it off.",
        links: [
          { text: "finding YouTube creators", href: "/blog/how-to-find-youtube-influencers" },
          { text: "run Instagram influencer campaigns end to end", href: "/services/instagram-influencer-marketing" },
        ],
      },
    ],
    faqs: [
      {
        question: "Should I use my brand account or a separate account to research creators?",
        answer:
          "A separate research account is better. Its Explore and Reels recommendations reflect only your niche research, and you avoid accidentally liking or following creators from the brand account before you have decided to work with them.",
      },
      {
        question: "Can I see an Instagram creator's audience location without asking them?",
        answer:
          "Not reliably. Location tags, comment language and local references are hints, but audience top cities and countries are only visible in the creator's own insights. Ask for screenshots before confirming a collaboration.",
      },
      {
        question: "How many recent posts should I review before shortlisting an Instagram creator?",
        answer:
          "Ten to twelve recent posts is a practical rule of thumb. It is enough to see whether views are consistent, whether the niche is real and whether comments look like a genuine audience.",
      },
      {
        question: "Do Instagram creators prefer DMs or email for brand enquiries?",
        answer:
          "If a bio lists an email or management contact, use it, since that is where creators track brand work. DMs are fine for smaller creators without a listed email, but keep the first message short and specific.",
      },
      {
        question: "Is Instagram the right platform for every influencer campaign?",
        answer:
          "Not always. Instagram suits visual categories such as fashion, beauty, food, travel and fitness. Detailed product reviews, tech and finance often benefit from longer YouTube content, so many brands use both.",
      },
    ],
  },

  // #4 NEW
  {
    slug: "how-to-find-micro-influencers",
    category: "Influencer Marketing",
    title: "How to Find Micro-Influencers for Your Brand",
    seoTitle: "How to Find Micro-Influencers in India | Kudozz",
    excerpt:
      "Micro-influencers rarely show up in standard search. Here is where to find creators in the 10K–100K range, how to filter them quickly and how to scale from a handful to a reliable roster.",
    metaDescription:
      "How to find micro-influencers in India: where 10K–100K creators show up, a quick quality filter and how to grow a test batch into a creator roster.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "8 min read",
    tags: ["Creator Discovery", "Micro-Influencers", "Influencer Marketing", "India"],
    related: [
      "nano-vs-micro-influencers",
      "micro-influencers-india",
      "find-indian-influencers",
      "influencer-database",
    ],
    hero: {
      src: "/blog/discovery/how-to-find-micro-influencers.svg",
      alt: "Follower scale highlighting the 10K to 100K micro band, beside a roster structure of test batch, core creators and bench",
    },
    discoveryCta: {
      headline: "Build Your Micro-Creator Roster",
      body: "Filter Indian Instagram creators in the 10K–100K band by niche, city, language and minimum engagement rate in Kudozz Discovery, then save them into lists for your test batch, core roster and bench.",
    },
    body: [
      {
        type: "paragraph",
        text: "Here is the blunt answer: you will not find good micro-influencers by searching for \"micro-influencers\". Instagram search, big hashtags and most brand radars are tilted towards larger accounts, so the creators in the 10K–100K range, who are often the most practical partners for growing brands, stay just out of view. Finding them takes different sources and a faster way to filter.",
      },
      {
        type: "paragraph",
        text: "This guide covers how to define the tier, where micro creators actually show up, how to judge them quickly, and how to grow from five creators to a roster of thirty or fifty without your team drowning in DMs. If you are still deciding whether micro or nano creators suit your campaign, read our comparison of nano vs micro influencers first.",
        links: [{ text: "comparison of nano vs micro influencers", href: "/blog/nano-vs-micro-influencers" }],
      },
      { type: "heading", text: "What counts as a micro-influencer", id: "what-counts" },
      {
        type: "paragraph",
        text: "There is no official standard. Tiers are industry conventions, and agencies, platforms and tools draw the lines differently. The bands below are a common way of describing them, and the one this guide uses.",
      },
      {
        type: "table",
        headers: ["Tier (convention)", "Typical follower range", "Often used for"],
        rows: [
          ["Nano", "Under 10K", "Gifting, local and community word of mouth"],
          ["Micro", "10K–100K", "Niche trust, steady content volume, conversions"],
          ["Mid-tier", "100K–500K", "Broader reach while keeping some niche focus"],
          ["Macro", "500K–1M", "Awareness at scale"],
          ["Mega", "1M+", "Mass reach, launches, celebrity-style visibility"],
        ],
      },
      {
        type: "paragraph",
        text: "Some teams split micro further (10K–50K and 50K–100K) because creators at either end behave differently on pricing and responsiveness. What matters is that your team uses the same bands consistently in briefs, sheets and budgets. Follower count is only a starting point: a 25K creator with steady Reels views can outperform a 90K creator whose recent posts have flattened.",
      },
      { type: "heading", text: "Why micro creators are harder to find", id: "why-harder" },
      {
        type: "list",
        items: [
          "They rarely appear in top posts for popular hashtags, which favour accounts with large, fast engagement.",
          "Instagram search tends to rank familiar and larger accounts first.",
          "Many do not have managers or list a business email, so they are invisible on agency rosters.",
          "There are far more of them, so random scrolling gives you a tiny, unrepresentative sample.",
        ],
      },
      {
        type: "paragraph",
        text: "The upside is that the brands willing to do this work face less competition for attention. A micro creator who is not already fielding offers every week is more likely to read your message properly, ask good questions about the product and treat the collaboration as a relationship. The search methods below are designed around where these creators spend their time, not where the algorithm puts the biggest accounts.",
      },
      { type: "heading", text: "Where micro-influencers actually show up", id: "where-to-find" },
      { type: "subheading", text: "Mid-sized and specific hashtags" },
      {
        type: "paragraph",
        text: "Skip tags with tens of millions of posts. Look for tags with a focused community: #chennaibakers, #indianskincarecommunity, #runnersofbangalore. The creators posting there consistently, with a few thousand to tens of thousands of followers, are your micro pool.",
      },
      { type: "subheading", text: "Comment sections of larger creators" },
      {
        type: "paragraph",
        text: "Open a popular creator's post in your niche and scan the comments. Smaller creators in the same space often comment thoughtfully on bigger accounts. Click through to anyone whose comment shows real knowledge of the topic.",
      },
      { type: "subheading", text: "Your customers and tagged posts" },
      {
        type: "paragraph",
        text: "Micro creators are more likely than large ones to buy and post about a product without being paid. Check your tagged posts, Story mentions and product reviews for customers with a meaningful following. They come with built-in credibility.",
      },
      { type: "subheading", text: "Creator referrals" },
      {
        type: "paragraph",
        text: "When you find one micro creator you like, ask them who else they rate in the niche. Creators know their peers, and a referral usually leads to people with a similar style and professionalism. One good conversation can produce three or four new names.",
      },
      { type: "subheading", text: "Community pages and local events" },
      {
        type: "paragraph",
        text: "City food pages, running clubs, college fest pages and maker markets feature and tag local creators regularly. For a Coimbatore home-décor brand, for instance, the creators tagged by local interiors and lifestyle pages are a faster route than any national hashtag.",
      },
      { type: "subheading", text: "Discovery tools with follower filters" },
      {
        type: "paragraph",
        text: "This is where tools save the most time, because you can set the follower range directly instead of hoping the algorithm shows you smaller accounts. In Kudozz Discovery, for example, you can choose the 10K–100K band (or a custom range), add a niche, city or language, set a minimum engagement rate, and sort by average views to see who is getting consistent attention.",
      },
      {
        type: "discovery-cta",
        headline: "Filter straight to the 10K–100K band",
        body: "In Kudozz Discovery, pick the 10K–100K follower band or set a custom range, add niche, city and language, then save promising Instagram creators into a list for your test batch.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Micro-creator search ideas by category", id: "search-ideas" },
      {
        type: "paragraph",
        text: "The best places to look change with the category. The table below gives starting points for a few common ones; swap in your own city, language and product terms.",
      },
      {
        type: "table",
        headers: ["Category", "Hashtag and keyword ideas", "Communities to check", "Adjacent creators worth a look"],
        rows: [
          ["Skincare", "Skin-type and ingredient terms, \"skincare routine\" in Hindi or Tamil", "Skincare community pages, dermatology Q&A comment threads", "Makeup artists, wellness creators"],
          ["Fitness and nutrition", "City + running, home workout, high-protein recipes", "Running clubs, cycling groups, gym tagged posts", "Home cooks, physiotherapy explainers"],
          ["Home décor", "Small-flat makeover, rental decor, festive home decor", "Local interiors pages, maker markets", "DIY and thrift creators, plant parents"],
          ["Packaged food", "Tiffin ideas, quick snacks, regional recipes", "City food pages, home-baker groups", "Parenting creators, college students"],
          ["Parenting and baby", "Toddler activities, new mom diaries", "Parent community pages, school-run creators", "Doctors' explainers, home organisation"],
        ],
      },
      {
        type: "paragraph",
        text: "Expect a funnel. A rough rule of thumb is that only a fraction of the micro creators you find will survive a content review, and only some of those will reply and agree terms. So if you want ten creators in a test batch, plan to review several times that number. Starting with a wider long list is cheaper than relaunching the search a week later.",
      },
      { type: "heading", text: "A quick quality filter for micro creators", id: "quality-filter" },
      {
        type: "paragraph",
        text: "Micro creators vary widely in quality, and you will review many of them, so use a fast, consistent filter. The table below is a starting point; our guide to engagement quality explains how to tell genuine interaction from vanity metrics.",
        links: [{ text: "guide to engagement quality", href: "/blog/influencer-engagement-quality" }],
      },
      {
        type: "table",
        headers: ["Signal", "What good looks like", "Red flag"],
        rows: [
          ["Recent Reels views", "Broadly consistent across the last ten or so", "One huge spike, the rest far lower"],
          ["Comments", "Questions, opinions, replies from the creator", "Generic emojis, same accounts every time"],
          ["Niche focus", "Most recent posts in your category", "Random mix; niche appears once"],
          ["Posting rhythm", "Regular, recent activity", "Long gaps, then bursts"],
          ["Brand work", "A few disclosed collaborations, varied brands", "Every post sponsored, or nothing disclosed"],
          ["Responsiveness", "Replies to comments and DMs", "No replies to anyone"],
        ],
      },
      { type: "heading", text: "Scaling from five creators to fifty", id: "scaling-roster" },
      {
        type: "paragraph",
        text: "The appeal of micro creators is volume, but volume brings admin. The brands that make it work treat micro creators as a roster they manage over time, not a list they rebuild every campaign. A simple three-layer structure helps:",
      },
      {
        type: "list",
        items: [
          "Test batch: five to ten new creators per cycle on a small brief, so you can see content quality, timeliness and results with limited risk.",
          "Core roster: the creators who delivered. Offer them repeat work, longer arrangements or ambassador-style terms.",
          "Bench: vetted creators you have not used yet, ready when a core creator is unavailable or you expand to a new city or language.",
        ],
      },
      {
        type: "paragraph",
        text: "Running a small pilot before scaling protects your budget; see how to run a pilot influencer campaign. Once creators prove themselves, our guide to repeat influencer collaborations explains how to turn one-off posts into ongoing work.",
        links: [
          { text: "how to run a pilot influencer campaign", href: "/blog/pilot-influencer-campaign" },
          { text: "repeat influencer collaborations", href: "/blog/repeat-influencer-collaborations" },
        ],
      },
      { type: "subheading", text: "Systems that keep a big roster manageable" },
      {
        type: "list",
        items: [
          "One database with the same fields for every creator, so anyone on the team can pick up where someone else left off.",
          "A standard brief with clear must-haves and room for creators to use their own style.",
          "Batched outreach and batched product dispatch, rather than one creator at a time.",
          "A shared tracker for content due dates, approvals, live links and payment status.",
          "A short post-campaign note on each creator: content quality, timeliness, results, would you rebook.",
        ],
      },
      {
        type: "paragraph",
        text: "Our guide to building an influencer database covers the fields worth tracking. For a deeper look at how e-commerce brands structure larger micro-creator networks, read our guide to micro-influencer marketing for e-commerce brands in India.",
        links: [
          { text: "building an influencer database", href: "/blog/influencer-database" },
          { text: "micro-influencer marketing for e-commerce brands in India", href: "/blog/micro-influencers-india" },
        ],
      },
      { type: "heading", text: "Barter, paid or both?", id: "barter-or-paid" },
      {
        type: "paragraph",
        text: "Many micro creators accept product-only collaborations, especially for products they genuinely want. Others charge fees, and those who treat content as a profession increasingly do. A practical approach is to offer barter for low-effort deliverables (a Story or honest first impressions) and pay for Reels, usage rights or tight timelines. Be clear about tax and disclosure either way; our guide to barter influencer collaborations covers the terms to agree.",
        links: [{ text: "barter influencer collaborations", href: "/blog/barter-influencer-collaborations" }],
      },
      { type: "heading", text: "Common mistakes when finding micro-influencers", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Treating tier boundaries as fixed rules rather than conventions, and rejecting a strong 9K or 110K creator on a technicality.",
          "Filtering only on follower count and engagement rate without watching the content.",
          "Sending identical mass DMs that read like spam to creators who receive many of them.",
          "Rebuilding the list from scratch every campaign instead of keeping a roster.",
          "Giving micro creators rigid scripts, which removes the authentic voice you chose them for.",
          "Paying late. Micro creators talk to each other, and a reputation for slow payments spreads quickly.",
        ],
      },
      { type: "heading", text: "Final thoughts", id: "conclusion" },
      {
        type: "paragraph",
        text: "Micro-influencers are easy to underestimate because they are hard to see. Look in focused hashtags, comment sections, your own customer base, creator referrals, community pages and filtered discovery tools. Apply a quick, consistent quality filter, start with a test batch, and keep the creators who deliver in a roster you can return to. If you would rather have the roster built and managed for you, Kudozz runs micro and nano influencer campaigns for brands across India.",
        links: [{ text: "micro and nano influencer campaigns", href: "/services/micro-nano-influencer-marketing" }],
      },
    ],
    faqs: [
      {
        question: "How many micro-influencers should a brand start with?",
        answer:
          "Five to ten is a sensible first test batch for most brands. It is enough to compare content quality and results across creators without committing a large budget or creating more coordination than your team can handle.",
      },
      {
        question: "Do micro-influencers always have better engagement than larger creators?",
        answer:
          "Not always. Smaller accounts often have closer relationships with their audience, but engagement depends on the creator, niche and content. Judge each creator on recent performance rather than assuming tier tells you the answer.",
      },
      {
        question: "Will micro-influencers work for free?",
        answer:
          "Some will accept product-only collaborations, particularly for products they would buy anyway. Many professional micro creators charge fees, especially for Reels, usage rights or tight deadlines. Ask rather than assume, and respect a quote even if you cannot meet it.",
      },
      {
        question: "Can a creator with 8K or 120K followers still be part of a micro campaign?",
        answer:
          "Yes. Tier bands are conventions, not rules. If a creator just outside the band fits the niche, audience and content style, include them and note the reason so budgeting stays clear.",
      },
      {
        question: "How do I keep track of dozens of micro creators?",
        answer:
          "Use one shared database with consistent fields, a tracker for each campaign's deliverables and payments, and a short performance note after every collaboration. That turns one-off research into a roster you can reuse.",
      },
    ],
  },

  // #10 UPGRADE (originally published 2026-10-07 as an influencer search tools guide)
  {
    slug: "influencer-search-tools",
    category: "Influencer Marketing",
    title: "How to Find Influencers Based on Niche, Location and Audience Relevance",
    seoTitle: "Find Influencers by Niche, Location and Audience | Kudozz",
    excerpt:
      "A relevance framework for finding the right creators: niche fit, creator location versus audience location, language and content style, plus how to use search tools and filters without being misled.",
    metaDescription:
      "Find relevant influencers by niche, location, language and content style. Why creator location isn't audience location, and how to use search filters well.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-10-07",
    updatedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "8 min read",
    tags: ["Creator Discovery", "Audience Relevance", "Influencer Search", "India"],
    related: [
      "how-to-find-local-influencers",
      "find-indian-influencers",
      "influencer-audience-quality",
      "regional-influencer-marketing-india",
    ],
    hero: {
      src: "/blog/discovery/influencer-search-tools.svg",
      alt: "Four relevance layers (niche, location, language, content style) with a note that creator location is not the same as audience location",
    },
    discoveryCta: {
      body: "Put the relevance framework into practice. Kudozz Discovery lets you filter Indian Instagram creators by niche, state, city, language and engagement, so you start from a relevant set and spend your time verifying fit, not scrolling.",
    },
    body: [
      {
        type: "paragraph",
        text: "If a creator based in Lucknow has 60,000 followers, how many of those followers live in Lucknow? From the public profile, you cannot know. It might be most of them, or it might be a small share spread across Delhi, Mumbai and the Gulf. That single question explains why so many influencer campaigns reach the wrong people: brands search for creators who look relevant, without checking whether their audience is.",
      },
      {
        type: "paragraph",
        text: "Relevance is not one filter. It is four layers that need to line up: niche, location, language and content style. This guide explains how to judge each one, where search tools and filters help, and where you have to ask the creator for proof.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "list",
        items: [
          "Niche: check that most of a creator's recent content sits in your category, not just their bio label.",
          "Location: separate where the creator is based from where their audience is, and confirm the audience with insights screenshots.",
          "Language: match the language your customers buy in, including Hinglish and regional languages.",
          "Content style: make sure the creator's format and tone suit your product and objective.",
          "Use search filters to narrow the pool, then verify each layer on the shortlist.",
        ],
      },
      { type: "heading", text: "The four layers of relevance", id: "four-layers" },
      {
        type: "table",
        headers: ["Layer", "Question to answer", "What you can see publicly", "What you must ask for"],
        rows: [
          ["Niche", "Do they consistently make content in our category?", "Recent posts, captions, past brand work", "Usually nothing extra"],
          ["Location", "Is their audience where we sell or deliver?", "Creator's city, location tags, local references", "Audience top cities and countries"],
          ["Language", "Do they speak to our customers in the language they buy in?", "Spoken and caption language, comment language", "Rarely needed"],
          ["Content style", "Will their format and tone suit our product?", "Reels, carousels, Stories, production quality", "Examples of past briefed work"],
        ],
      },
      { type: "heading", text: "Niche fit: consistency beats labels", id: "niche-fit" },
      {
        type: "paragraph",
        text: "Bios and tool categories are a starting point, not proof. \"Lifestyle\" can mean anything from cooking to luxury travel. To judge niche fit, look at the last twelve posts and count how many sit in your category or a closely adjacent one. A rough rule of thumb: if fewer than a third do, the creator's audience probably did not follow them for that topic.",
      },
      {
        type: "paragraph",
        text: "Also consider adjacent niches, which often work better than the obvious one. For example, a Coimbatore brand selling cold-pressed oils could look beyond food creators to home cooks who focus on traditional recipes, wellness creators who talk about ingredients, and young parents who discuss family meals. Each brings a different audience reason to care.",
      },
      {
        type: "list",
        items: [
          "Primary niche: the category you sell in (for example, skincare).",
          "Adjacent niches: topics your customer also follows (wellness, makeup, dermatology explainers).",
          "Context niches: life stages or situations where your product matters (new parents, college students, office workers).",
        ],
      },
      { type: "heading", text: "Location: creator location is not audience location", id: "location" },
      {
        type: "paragraph",
        text: "This is the most misunderstood layer. Search tools, location tags and bios all tell you where a creator is based or posts from. None of that tells you where their followers are. A Jaipur travel creator may have an audience spread across India. A Kochi food creator who posts in Malayalam is far more likely to have a Kerala-heavy audience, but even then you should check. Here is how to check an influencer's audience location before hiring them.",
        links: [{ text: "how to check an influencer's audience location", href: "/blog/influencer-audience-location" }],
      },
      {
        type: "subheading",
        text: "Public signals that hint at a local audience",
      },
      {
        type: "list",
        items: [
          "Comments that mention local places, events or in-jokes.",
          "Comments in the regional language, or Hinglish typical of a region.",
          "Regular location tags in the same city and collaborations with local businesses.",
          "Followers asking \"where is this?\" about local spots, rather than nationwide product questions.",
        ],
      },
      {
        type: "subheading",
        text: "How to confirm it",
      },
      {
        type: "paragraph",
        text: "Ask for a screenshot of audience insights showing top cities and countries. For any campaign where geography matters (a store opening, city-limited delivery, a regional launch), make this a requirement before confirming. Our guide to checking influencer audience quality explains what else to look for in those screenshots.",
        links: [{ text: "checking influencer audience quality", href: "/blog/influencer-audience-quality" }],
      },
      {
        type: "template",
        label: "Audience location request",
        text: "Hi [Name], we're planning a campaign focused on [city / state]. Could you share a screenshot of your Instagram audience insights showing top cities and countries for the last 30 days? It helps us make sure the campaign reaches people who can actually visit or order. Thanks!",
      },
      {
        type: "paragraph",
        text: "If your campaign is about a single city or neighbourhood, our guide to finding local influencers for your business covers the hyperlocal side in more detail.",
        links: [{ text: "finding local influencers for your business", href: "/blog/how-to-find-local-influencers" }],
      },
      { type: "heading", text: "Using search tools and filters well", id: "search-tools" },
      {
        type: "paragraph",
        text: "Search tools are good at the first pass: narrowing thousands of possibilities to a manageable set by niche, creator location, language and follower range. They are less good at the parts that need judgement or private data. Use them to shrink the pool, then verify.",
      },
      {
        type: "list",
        items: [
          "Native Instagram search, hashtags and location tags: free, show real content, but rank by popularity and give no audience data.",
          "YouTube search: useful for long-form niches; filter by upload date to find active channels.",
          "Google search with site operators (for example site:instagram.com plus a niche and city): occasionally surfaces creators that platform search buries.",
          "Discovery tools: filter by attributes in one place, but each covers different platforms and data, so check what a tool actually includes.",
        ],
      },
      {
        type: "paragraph",
        text: "Kudozz Discovery, for instance, covers Indian Instagram creators and lets you filter by niche, state, city, language, gender and follower band, with a minimum engagement rate. Note that the city and state filters describe where the creator is, which is exactly why the audience check above still matters. For a comparison of tools, see our roundup of influencer discovery tools for Indian brands, and our guide to evaluating discovery platforms explains what to ask before paying for one.",
        links: [
          { text: "influencer discovery tools for Indian brands", href: "/blog/best-influencer-discovery-tools-india" },
          { text: "evaluating discovery platforms", href: "/blog/creator-discovery-platform" },
        ],
      },
      {
        type: "discovery-cta",
        headline: "Narrow the pool by niche, city and language",
        body: "Kudozz Discovery filters Indian Instagram creators by niche, state, city, language and engagement, so your first pass is relevant. Then verify audience location with the creator's insights before you confirm.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Language: match how your customers actually talk", id: "language" },
      {
        type: "paragraph",
        text: "In India, language often decides relevance more than geography. A Tamil creator in Bengaluru may reach Tamil speakers across several states; a Hindi-English creator in Pune may reach a national, metro-skewed audience. Decide which languages matter for your product and customers, then check three things: the language the creator speaks in, the language of captions and on-screen text, and the language of the comments. The comments show you the audience; the rest shows you the creator.",
      },
      {
        type: "paragraph",
        text: "For campaigns built around vernacular audiences, our guide to regional and vernacular influencer marketing in India goes deeper on planning by language.",
        links: [{ text: "regional and vernacular influencer marketing in India", href: "/blog/regional-influencer-marketing-india" }],
      },
      { type: "heading", text: "Content style: the layer brands forget", id: "content-style" },
      {
        type: "paragraph",
        text: "A creator can be right on niche, location and language and still be wrong for your campaign. A Lucknow chikankari label that wants elegant styling content will struggle with a creator whose strength is fast, loud comedy sketches, even if the audience matches. Check:",
      },
      {
        type: "list",
        items: [
          "Format: Reels, carousels, Stories, long videos. Which do they do best, and which does your campaign need?",
          "Tone: informative, funny, aspirational, raw. Does it suit how your brand wants to be seen?",
          "Production: polished or phone-shot. Neither is better; it depends on the objective.",
          "How they handle products: honest reviews, integrated storytelling or obvious ad reads.",
        ],
      },
      { type: "heading", text: "Score relevance before reach", id: "relevance-score" },
      {
        type: "paragraph",
        text: "A simple scorecard keeps the team consistent. Score each layer from 1 to 5 and only look at follower count once relevance clears your bar. The weights below are a suggested starting point; adjust them for your campaign (a store opening would weight location higher).",
      },
      {
        type: "table",
        headers: ["Layer", "Suggested weight", "Score 5 means", "Score 1 means"],
        rows: [
          ["Niche fit", "30%", "Most recent posts in category or close adjacent", "Category appears rarely or never"],
          ["Audience location", "25%", "Insights confirm your target cities or states", "Audience mostly outside your market"],
          ["Language", "20%", "Speaks and gets comments in your customers' language", "Language mismatch"],
          ["Content style", "25%", "Format and tone suit your product and objective", "Style clashes with brand or goal"],
        ],
      },
      {
        type: "paragraph",
        text: "Once a creator scores well, move on to deeper research on past brand work and reliability, covered in how to research influencers before approaching them. If you are building the broader process, start from our guide to finding the right influencers for your brand in India.",
        links: [
          { text: "how to research influencers before approaching them", href: "/blog/how-to-research-influencers" },
          { text: "finding the right influencers for your brand in India", href: "/blog/find-indian-influencers" },
        ],
      },
      { type: "heading", text: "A worked example", id: "worked-example" },
      {
        type: "paragraph",
        text: "Say a Kochi-based Ayurvedic haircare brand wants to grow in Kerala and Tamil Nadu before expanding further. Here is how the four layers shape the search:",
      },
      {
        type: "list",
        items: [
          "Niche: haircare and hair-routine creators first, then adjacent beauty, wellness and traditional-remedy creators whose recent posts regularly touch on hair.",
          "Location: creators based in Kerala and Tamil Nadu are the starting pool, but each one is asked for top-cities insights before confirming, since some will have audiences spread across India or the Gulf.",
          "Language: Malayalam creators for Kerala and Tamil creators for Tamil Nadu, plus a few English creators in Kochi, Chennai and Coimbatore whose comments show a local audience.",
          "Content style: routine demos and honest before-and-after-style progress content, avoiding creators known for exaggerated claims, since haircare results need careful wording.",
        ],
      },
      {
        type: "paragraph",
        text: "The result is a shortlist where every creator has a clear reason to be there, and where audience location has been checked rather than assumed. Follower count only comes in at the end, to balance reach across the list.",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Using a creator's city, or a tool's location filter, as proof of audience location.",
          "Trusting bio labels and tool categories without looking at recent posts.",
          "Ignoring language because the creator's captions are in English, when the comments show a regional audience.",
          "Choosing on niche and location but forgetting content style, then rewriting the creator's work in approvals.",
          "Letting follower count override relevance in final selection.",
          "Skipping the insights request because it feels awkward. Professional creators expect it.",
        ],
      },
      { type: "heading", text: "Final thoughts", id: "conclusion" },
      {
        type: "paragraph",
        text: "Relevant influencers line up on four layers: they make content in your niche, their audience is where you sell, they speak your customers' language and their style suits your product. Use search tools and filters to narrow the field quickly, then confirm the parts you cannot see, especially audience location, directly with the creator. If you are running campaigns across several states and languages, Kudozz also runs regional influencer campaigns for brands that want help with the planning and execution.",
        links: [{ text: "regional influencer campaigns", href: "/services/regional-influencer-marketing" }],
      },
    ],
    faqs: [
      {
        question: "Can any tool tell me exactly where an influencer's audience lives?",
        answer:
          "Treat any audience-location figure from a third party as an estimate. The most reliable source is the creator's own platform insights, which only they can access. Ask for a recent screenshot of top cities and countries.",
      },
      {
        question: "Should I choose creators from my city or creators whose audience is in my city?",
        answer:
          "The audience matters more. A creator based elsewhere with a strong following in your city can outperform a local creator whose audience is national. For footfall campaigns, though, local creators who can visit in person usually make more convincing content.",
      },
      {
        question: "How do I find influencers who speak a specific regional language?",
        answer:
          "Search in that language and script, use regional hashtags, check Reels using regional audio, and filter by language in discovery tools that support it. Then check the comment language to confirm the audience matches.",
      },
      {
        question: "Is niche fit more important than engagement rate?",
        answer:
          "In most cases, yes. High engagement from an audience that has no interest in your category rarely helps. Use niche fit as the first gate and engagement as a quality check among relevant creators.",
      },
      {
        question: "What if a creator refuses to share audience insights?",
        answer:
          "It is a reasonable request, and most professional creators will share. If they decline, weigh the public signals carefully and consider a smaller first collaboration, or move on to creators who are comfortable being transparent.",
      },
    ],
  },

  // #16 NEW
  {
    slug: "how-to-find-local-influencers",
    category: "Influencer Marketing",
    title: "How to Find Local Influencers for Your Business in India",
    seoTitle: "How to Find Local Influencers in India | Kudozz",
    excerpt:
      "For cafés, salons, gyms, clinics, property developers and local shops: how to find creators in your city, check that their audience is actually local and set up collaborations that bring people through the door.",
    metaDescription:
      "Find local influencers in your Indian city: location tags, city hashtags, hyperlocal pages, city and language filters, and checks that the audience is local.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "8 min read",
    tags: ["Creator Discovery", "Local Influencers", "Local Business", "India"],
    related: [
      "influencer-search-tools",
      "restaurant-cafe-influencer-marketing-india",
      "influencer-marketing-tier-2-tier-3-cities",
      "how-to-find-micro-influencers",
    ],
    hero: {
      src: "/blog/discovery/how-to-find-local-influencers.svg",
      alt: "City block map with local business pins for a café, salon, gym and clinic, beside a city, language and location-tag search flow",
    },
    discoveryCta: {
      headline: "Find Creators in Your City",
      body: "Kudozz Discovery lets you filter Indian Instagram creators by state, city and language, add a niche like Food & Beverages or Health & Fitness, and save local candidates into a list for your next opening or offer.",
    },
    body: [
      {
        type: "paragraph",
        text: "Picture a new specialty café opening in Kochi's Panampilly Nagar. The owner has a small marketing budget and one clear goal: get people from the neighbourhood and nearby areas through the door in the first month. A creator with a million followers in Mumbai would be useless here. What the café needs is a handful of creators whose followers live within a short drive, and who can walk in, film the space and make people want to visit this weekend.",
      },
      {
        type: "paragraph",
        text: "Local influencer marketing works differently from national campaigns. The pool is smaller, location matters more than follower count, and the content has to drive a visit or a call rather than a click. This guide covers how local businesses in India (cafés, salons, gyms, clinics, real estate and local retail) can find the right creators in their city, including Tier 2 cities where the creator pool is smaller. If you're planning around a launch date, there's a separate guide to finding local creators for store openings and retail activations.",
        links: [{ text: "finding local creators for store openings and retail activations", href: "/blog/store-opening-influencer-campaign" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "list",
        items: [
          "Search location tags for your own address, neighbouring businesses and city landmarks.",
          "Use city hashtags in English and the local language.",
          "Check hyperlocal pages (city food, events and \"things to do\" accounts) and the creators they feature.",
          "Look at your own customers and tagged posts first.",
          "Use city and language filters in discovery tools to widen the pool.",
          "Before confirming, ask for audience insights showing top cities, because a local creator does not guarantee a local audience.",
        ],
      },
      { type: "heading", text: "What makes a creator \"local\"", id: "what-is-local" },
      {
        type: "paragraph",
        text: "A useful local creator ideally ticks three boxes: they live in or regularly visit your city, they post about it, and a meaningful share of their audience is there. Most brands check only the first. A Jaipur creator who mostly makes national fashion content may have followers all over India; a smaller Jaipur creator who reviews local eateries and markets is more likely to have followers who can actually visit you.",
      },
      {
        type: "paragraph",
        text: "Hyperlocal pages are a separate category. Accounts like city food guides, event listings and neighbourhood pages often have strongly local audiences, but many operate as small media businesses with their own rates and formats. Treat them as a paid placement and judge them on the same evidence as any creator.",
      },
      { type: "heading", text: "Who to look for, by business type", id: "by-business-type" },
      {
        type: "table",
        headers: ["Business", "Creator types that fit", "Where to look first", "Collaboration idea"],
        rows: [
          ["Café or restaurant", "Food reviewers, city explorers, students, couples content", "Location tags of nearby cafés, city food pages", "Invite to a tasting; Reel of signature items"],
          ["Salon or spa", "Beauty, bridal, hair and grooming creators", "Bridal and beauty hashtags with city name", "Service experience with before-and-after"],
          ["Gym or studio", "Fitness, wellness, running and sports creators", "Running clubs, sports events, gym check-ins", "Trial membership with a progress series"],
          ["Clinic (dental, skin, physio)", "Health explainers, parents, wellness creators", "Local parenting pages, wellness hashtags", "Educational visit; no outcome promises"],
          ["Real estate project", "Home, interiors, city-life and property creators", "Locality hashtags, home-tour content", "Site visit walkthrough with clear details"],
          ["Local retail store", "Fashion, home, gadget or lifestyle creators", "Mall and market location tags", "Store haul or festive shopping visit"],
        ],
      },
      {
        type: "paragraph",
        text: "Regulated and high-trust categories need extra care. Clinics should avoid creators promising treatment outcomes, and property content should be accurate on approvals and pricing. Our guides to restaurant and café influencer campaigns and influencer marketing for real estate brands cover category-specific planning in more depth.",
        links: [
          { text: "restaurant and café influencer campaigns", href: "/blog/restaurant-cafe-influencer-marketing-india" },
          { text: "influencer marketing for real estate brands", href: "/blog/influencer-marketing-real-estate-brands-india" },
        ],
      },
      { type: "heading", text: "Six ways to find creators in your city", id: "six-ways" },
      { type: "subheading", text: "1. Location tags around you" },
      {
        type: "paragraph",
        text: "Start with your own location tag, then the tags of neighbouring businesses, popular hangouts and landmarks in your area. For an Indore salon, that might mean tags around Vijay Nagar, a nearby mall and well-known food streets. Creators who appear repeatedly across these tags are active in your area.",
      },
      { type: "subheading", text: "2. City hashtags in English and the local language" },
      {
        type: "paragraph",
        text: "Combine the city with your category (#indorefood, #kochicafes, #coimbatorefitness) and try local-language and neighbourhood variants. Local-language tags often surface creators with a more local audience than English ones.",
      },
      { type: "subheading", text: "3. Hyperlocal pages and who they feature" },
      {
        type: "paragraph",
        text: "City food, events and lifestyle pages regularly repost or tag local creators. Scroll their recent posts and tagged tabs; it is a ready-made list of people already making content about your city.",
      },
      { type: "subheading", text: "4. Your own customers" },
      {
        type: "paragraph",
        text: "Check your tagged posts, Story mentions and reviews. A regular customer with a few thousand local followers who already loves your place is often the most convincing creator you can find.",
      },
      { type: "subheading", text: "5. City and language filters in discovery tools" },
      {
        type: "paragraph",
        text: "When manual search runs dry, discovery tools let you filter by where creators are based. In Kudozz Discovery you can filter Indian Instagram creators by state and city, add language and a niche, and set a follower band such as 1K–3K or 10K–100K. Remember that these filters describe the creator's location, so the audience check further down still applies.",
      },
      { type: "subheading", text: "6. Local events and communities" },
      {
        type: "paragraph",
        text: "Flea markets, college fests, running events, pop-ups and creator meet-ups are full of local creators. Note who is filming, follow up online, and you will often find people search would never surface.",
      },
      {
        type: "discovery-cta",
        headline: "Filter Instagram creators by city and language",
        body: "Kudozz Discovery lets you search Indian Instagram creators by state, city, language and niche, then save local candidates into a named list for your opening, offer or event.",
        ctaLabel: "Find creators in your city",
      },
      { type: "heading", text: "Finding creators in Tier 2 and smaller cities", id: "tier-2-cities" },
      {
        type: "paragraph",
        text: "In cities like Coimbatore, Lucknow, Indore or Kochi there are capable creators, but fewer of them in each niche. A few practical adjustments help:",
      },
      {
        type: "list",
        items: [
          "Widen the niche: in a smaller city, one lifestyle creator may cover food, fashion and events credibly.",
          "Include nano creators: accounts under 10K with a tight local following can outperform larger ones for footfall.",
          "Look at nearby towns and the state capital; audiences often travel in for shopping and weekends.",
          "Prioritise the local language; many of the most-followed local creators post mainly in it.",
          "Build relationships, not one-offs: the pool is small, so a good reputation among local creators matters.",
        ],
      },
      {
        type: "paragraph",
        text: "If you are a brand expanding into several smaller cities rather than a single local business, our guide to influencer marketing in Tier 2 and Tier 3 cities covers multi-city planning. For smaller creators specifically, see how to find micro-influencers.",
        links: [
          { text: "influencer marketing in Tier 2 and Tier 3 cities", href: "/blog/influencer-marketing-tier-2-tier-3-cities" },
          { text: "how to find micro-influencers", href: "/blog/how-to-find-micro-influencers" },
        ],
      },
      { type: "heading", text: "Check that the audience is actually local", id: "verify-local" },
      {
        type: "paragraph",
        text: "For a local business, an audience outside your city is wasted reach. Before confirming, ask each creator for an insights screenshot showing top cities, and look for comments that mention local places. The broader method for weighing creator location against audience location is in our guide to finding influencers by niche, location and audience relevance.",
        links: [{ text: "finding influencers by niche, location and audience relevance", href: "/blog/influencer-search-tools" }],
      },
      {
        type: "list",
        items: [
          "Top cities: your city (and nearby ones) should feature prominently.",
          "Comments: people asking for the address, timings or prices are a strong sign.",
          "Past local collaborations: did similar businesses get visible responses?",
          "Tracking: give each creator a unique offer code or a \"mention this Reel\" offer so you can count visits.",
        ],
      },
      { type: "heading", text: "Brief local creators on the practical details", id: "brief-essentials" },
      {
        type: "paragraph",
        text: "Local content only works if viewers can act on it. Creators know how to make a good Reel; what they need from you are the facts that turn interest into a visit. Send these before the visit, not after:",
      },
      {
        type: "list",
        items: [
          "Exact address, a map pin and nearby landmarks people will recognise.",
          "Opening hours, booking process and whether walk-ins are welcome.",
          "Price range or the specific offer for their followers, with dates.",
          "Parking or public transport tips if they matter in your area.",
          "Two or three things you would like shown, and anything to avoid.",
          "Your handle and location tag, and the disclosure you expect (#ad or a collaboration tag).",
          "A quiet slot for the visit, so the space and service look their best on camera.",
        ],
      },
      { type: "heading", text: "Collaboration formats that suit local businesses", id: "formats" },
      {
        type: "list",
        items: [
          "Invite-and-experience: the creator visits, tries the product or service and posts honestly.",
          "Opening weekend push: several local creators post within the same few days to create a sense of buzz.",
          "Offer-led: a creator-specific discount or freebie that gives followers a reason to come in this week.",
          "Series: a gym trial over several weeks or a salon's bridal journey, which builds trust over time.",
          "Local ambassador: one or two creators who return regularly and become associated with your business.",
        ],
      },
      {
        type: "paragraph",
        text: "Many local collaborations start as barter (a meal, a service, a membership), which is fine as long as expectations and disclosure are agreed clearly; see our guide to barter influencer collaborations. If you would rather have someone else run the creator side, Kudozz handles barter influencer campaigns for businesses that want it done for them.",
        links: [
          { text: "barter influencer collaborations", href: "/blog/barter-influencer-collaborations" },
          { text: "barter influencer campaigns", href: "/services/barter-influencer-campaigns" },
        ],
      },
      {
        type: "template",
        label: "First message to a local creator",
        text: "Hi [Name], I run [business] in [area], and I've seen your posts about [specific local post]. We're [opening / launching / running something new] on [date] and would love to invite you for [experience] as our guest. If you enjoy it and want to post, we'd ask for a Reel or Stories with #ad or a collaboration tag, and we're happy to discuss a fee for anything beyond that. Would you be free in the next two weeks?",
      },
      { type: "heading", text: "Common mistakes local businesses make", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Choosing big city-based creators without checking that their audience is local.",
          "Inviting creators on a busy evening, so the content shows a crowded, rushed experience.",
          "Not briefing the essentials: address, timings, price range and what to highlight.",
          "Expecting a guaranteed post from every barter invite without agreeing it upfront.",
          "Skipping tracking, so you cannot tell which creators actually brought people in.",
          "Making medical, financial or property claims through creators that you cannot back up.",
        ],
      },
      { type: "heading", text: "Bringing it together", id: "conclusion" },
      {
        type: "paragraph",
        text: "Finding local influencers starts close to home: your location tag, neighbouring businesses, city hashtags, hyperlocal pages and your own customers. City and language filters in discovery tools widen the pool, but always confirm the audience is local before you commit. Pick a format that gives people a reason to visit soon, track the results with simple codes or offers, and keep the creators who deliver. For more ideas on day-to-day content, our guides on social media marketing for salons and for gyms are useful companions.",
        links: [
          { text: "social media marketing for salons", href: "/blog/social-media-marketing-for-salons" },
          { text: "for gyms", href: "/blog/social-media-marketing-for-gyms" },
        ],
      },
    ],
    faqs: [
      {
        question: "How many local influencers does a small business need?",
        answer:
          "For a single location, three to six well-chosen local creators over a few weeks is often enough to create visible buzz. More creators help for an opening weekend, but quality and audience location matter more than numbers.",
      },
      {
        question: "Are hyperlocal city pages better than individual creators?",
        answer:
          "They do different jobs. City pages can reach a local audience quickly and are good for announcements and offers. Individual creators usually build more trust through personal experience. Many local businesses use one page plus a few creators.",
      },
      {
        question: "Can I work with local influencers in exchange for food or services?",
        answer:
          "Yes, many local collaborations are barter. Agree the deliverables upfront, make sure the post is disclosed as a collaboration, and be ready to pay for extras such as multiple Reels or rights to use the content in ads.",
      },
      {
        question: "How do I measure whether local influencer posts brought customers?",
        answer:
          "Use a unique offer code or a \"mention this Reel\" offer per creator, ask new customers how they heard about you, and compare walk-ins or bookings in the days after each post with a normal week.",
      },
      {
        question: "What if there are very few creators in my town?",
        answer:
          "Widen the search to nearby towns and the nearest larger city, include nano creators under 10K followers, and consider customers with an engaged local following. Local-language creators are often the most influential in smaller towns.",
      },
    ],
  },
];
