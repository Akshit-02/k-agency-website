import type { BlogPost } from "@/content/blog";

const AUTHOR = { name: "Kudozz Strategy Team", role: "Agency Team" };

export const discoveryBatchH: BlogPost[] = [
  // #33 find-instagram-reels-creators (NEW)
  {
    slug: "find-instagram-reels-creators",
    category: "Instagram Marketing",
    title: "How to Find Instagram Reels Creators for Your Marketing Campaign",
    seoTitle: "How to Find Instagram Reels Creators for Brands | Kudozz",
    excerpt:
      "Follower count tells you little about whether a creator can make a Reel people watch to the end. Here's how to find and judge Reels creators on views, hooks, pacing and retention proof.",
    metaDescription:
      "Find Instagram Reels creators who hold attention: match creators to formats, build a views-first longlist, score hooks and pacing, and get retention proof.",
    author: AUTHOR,
    publishedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["Instagram Reels", "Creator Discovery", "Short-Form Video", "India"],
    related: ["how-to-find-instagram-influencers", "instagram-reels-influencer-marketing", "how-to-find-ugc-creators", "find-youtube-shorts-creators"],
    hero: {
      src: "/blog/discovery/find-instagram-reels-creators.svg",
      alt: "A vertical Reel timeline split into hook, middle and payoff, with the checks a brand makes at each stage and a views-versus-followers comparison",
    },
    discoveryCta: {
      headline: "Find Reels Creators by Views, Not Just Followers",
      body: "Kudozz Discovery lets you sort Instagram creators in India by average views, set a minimum average views and posting frequency, and save the ones whose Reels hold up into a list for your campaign.",
    },
    body: [
      {
        type: "paragraph",
        text: "Say a Pune protein-snack brand books a creator with a large following for a launch Reel. The post goes live, the creator delivers exactly what the brief asked for, and the views come in well below what the follower count suggested. Nothing went wrong with the deal. The brand simply hired for audience size when the job was making a Reel people stop for and watch to the end.",
      },
      {
        type: "paragraph",
        text: "Reels creators should be found and judged differently from creators in general. This guide is about that difference: matching creators to the Reel format you need, building a longlist around views instead of followers, scoring the craft of a Reel, and getting retention proof before you pay.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To find Instagram Reels creators for a campaign, decide the Reel format first (review, demo, skit, tutorial, POV), then look for creators who already make that format well. Build the longlist around typical Reel views and posting consistency rather than follower count, score each creator's hooks, pacing, audio and product handling across several recent Reels, and ask shortlisted creators for Reels insights screenshots showing reach, watch time and audience split before you book.",
      },
      { type: "heading", text: "Why Reels creators need a different search", id: "why-different" },
      {
        type: "paragraph",
        text: "Reels are distributed well beyond a creator's followers, and a creator's own followers don't see every Reel. That cuts both ways. A creator with a modest following can reach far more people than their follower count when their Reels hold attention, and a large account can reach fewer than you'd expect when they don't. Follower count is a record of past growth. Recent Reel views are closer to what your campaign will actually get.",
      },
      {
        type: "paragraph",
        text: "If you're still working out how to search Instagram in general (hashtags, tagged posts, competitor collaborations), start with how to find Instagram influencers for your next brand campaign. The strategy side, such as what Reels campaigns are good for and how to brief them, is in our guide to Instagram Reels influencer marketing. This article assumes you know you want Reels and need the right people to make them.",
        links: [
          { text: "how to find Instagram influencers for your next brand campaign", href: "/blog/how-to-find-instagram-influencers" },
          { text: "Instagram Reels influencer marketing", href: "/blog/instagram-reels-influencer-marketing" },
        ],
      },
      { type: "heading", text: "Start from the Reel you need, not the creator", id: "start-from-format" },
      {
        type: "paragraph",
        text: "A creator who makes brilliant comedy skits may be the wrong person for a calm skincare demo, and a polished aesthetic creator may struggle with a fast, opinionated review. Pick the format before you pick anyone, then search for creators whose recent Reels are already in it.",
      },
      {
        type: "table",
        headers: ["Reel format", "What the creator needs to be good at", "What to look for in their past Reels"],
        rows: [
          ["Talking-head review", "Speaking clearly to camera, having an opinion, sounding unscripted", "Reels where they explain why, not just what; comments asking follow-up questions"],
          ["Voiceover demo", "Clean close-up shots, tight scripting, steady pacing", "Product visible in the first seconds; no dead air between steps"],
          ["Skit or comedy", "Writing a premise, timing, acting", "Recurring characters or series; the joke still lands with the product in it"],
          ["Tutorial or recipe", "Breaking a process into steps people can follow", "Saves and comments saying they tried it"],
          ["POV or day-in-the-life", "Making routine moments feel personal", "Natural product placement in earlier Reels, not a sudden switch"],
          ["Trend or audio-led", "Spotting trends early and adapting them to a niche", "Original twists rather than copies of the same template"],
          ["Street or vox-pop", "Approaching strangers, editing conversations quickly", "Consent and comfort of people on camera; consistent quality across episodes"],
        ],
      },
      {
        type: "paragraph",
        text: "Write the chosen format into your brief in one line, such as \"30 to 45 second voiceover demo, product in hand within the first two seconds\". It becomes the first filter for every creator you consider.",
      },
      { type: "heading", text: "Build a views-first longlist", id: "views-first-longlist" },
      {
        type: "paragraph",
        text: "Collect creators the usual ways (searching your niche, checking who competitors work with, looking at who already tags your brand), but record typical Reel views for each one as you go. Three numbers are worth noting from the profile and the Reels tab:",
      },
      {
        type: "list",
        items: [
          "Typical views: the middle of their last 10 to 12 Reels, not the one that went viral. Ignore pinned Reels when you work this out, since they are usually the best performers.",
          "Views relative to followers: as a rough rule of thumb, Reels that regularly reach a healthy share of the follower count suggest content that travels. Treat it as a comparison between creators, not a pass mark.",
          "Consistency: how often they post Reels, and whether views are steady or swing wildly. A creator with steady mid-range views is often a safer booking than one with one hit and ten misses.",
        ],
      },
      {
        type: "paragraph",
        text: "This is where a discovery tool saves time. In Kudozz Discovery you can sort Instagram creators in India by most average views, set a minimum average views and a minimum posting frequency, and combine that with niche, city and language filters. Sorting by views rather than followers surfaces smaller creators whose Reels travel further than their size suggests, which is often exactly who you want for a Reels campaign.",
      },
      {
        type: "template",
        label: "Reels longlist columns",
        text: "Handle | Profile link | Niche | City | Language | Followers\nTypical Reel views (median of last 10–12) | Highest recent Reel | Reels per week\nFormats they make well | Best example Reel link | Sponsored Reel example link\nFirst impression of hooks (strong / mixed / weak) | Notes",
      },
      { type: "heading", text: "Score the craft: hook, middle and payoff", id: "score-the-craft" },
      {
        type: "paragraph",
        text: "Once you have 20 to 40 creators with healthy views, watch at least five recent Reels from each, including at least one branded Reel if they have one. Watch them with sound on and then once with sound off, since many people scroll muted. Score each area from 1 to 5.",
      },
      {
        type: "table",
        headers: ["Area", "What good looks like", "Red flag"],
        rows: [
          ["Hook (first 1–2 seconds)", "A clear reason to keep watching: a question, a visible result, a surprising statement or action", "A logo, a slow intro, or \"Hi guys, so today…\""],
          ["Pacing", "Every shot earns its place; cuts keep moving without feeling frantic", "Long pauses, repeated points, padding to hit a length"],
          ["On-screen text and captions", "Readable, placed clear of the app's buttons, makes sense on mute", "No text, or text that covers the product"],
          ["Audio", "Clean voice, music that supports rather than drowns the message", "Echo, wind noise, trending audio that has nothing to do with the content"],
          ["Product handling", "Product shown in use, in good light, with a reason to care", "Product held up to camera like an ad, then forgotten"],
          ["Payoff and call to action", "The Reel delivers what the hook promised; the ask feels natural", "A bait hook that never pays off; a hard sell tacked on at the end"],
          ["Originality", "A recognisable style or recurring series", "Every Reel copies the same trending template"],
        ],
      },
      {
        type: "paragraph",
        text: "Hooks deserve the most weight for awareness campaigns, while product handling and payoff matter more when you want sales or reusable ad footage. If your team wants a shared vocabulary for hooks, the creator-side guide to short-form video hooks lists patterns you'll start to recognise while scoring.",
        links: [{ text: "short-form video hooks", href: "/blog/short-form-video-hooks" }],
      },
      {
        type: "discovery-cta",
        headline: "Shortlist Reels Creators Whose Views Hold Up",
        body: "Sort Instagram creators by most average views, set a minimum views and posting frequency, and narrow by niche, city and language. Save the creators worth a closer watch into a list for this campaign.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Read retention from the outside, then ask for proof", id: "retention-proof" },
      {
        type: "paragraph",
        text: "Public numbers only take you so far. Views show how many times a Reel was played; they don't show how long people watched. A few outside signals hint at retention:",
      },
      {
        type: "list",
        items: [
          "Comments that refer to something late in the Reel (the result, the punchline, a specific step) suggest people watched to the end.",
          "Comments asking for the next part, the recipe or the product name show the content created intent.",
          "Recurring series with steady views suggest an audience that comes back.",
          "Branded Reels that perform close to the creator's organic Reels suggest their audience doesn't scroll past sponsored content.",
        ],
      },
      {
        type: "paragraph",
        text: "For anyone you're seriously considering, ask for Reels insights screenshots. Creators with professional accounts can see per-Reel metrics such as views, reach, watch time and average watch time, interactions, and how much of the audience came from followers versus non-followers. Ask for a few recent Reels, including one branded Reel, plus the account's audience breakdown by city, age and gender. This is not a reflection on their honesty; it's the only reliable way to see retention and audience, since none of it is public and discovery tools, including Kudozz Discovery, don't show audience demographics.",
      },
      {
        type: "template",
        label: "Insights request message",
        text: "Hi [Name], we're planning a Reels campaign for [brand] in [month] and your [format] Reels are a strong fit, especially [specific Reel].\n\nBefore we send a brief, could you share Insights screenshots for three recent Reels (including one branded Reel if possible)? We're looking at views, reach, average watch time and the follower vs non-follower split. An account-level screenshot of top cities and age range would help too.\n\nWe'll only use these to plan this campaign. Happy to share the brief and budget range in return.",
      },
      {
        type: "paragraph",
        text: "When the screenshots arrive, compare branded and organic Reels side by side, and check that the top cities and age range match your customers. If several creators you like share the same city and niche, check influencer audience quality and overlap before booking them all; how to judge influencer audience quality explains what to look for.",
        links: [{ text: "how to judge influencer audience quality", href: "/blog/influencer-audience-quality" }],
      },
      { type: "heading", text: "Test before you commit to a series", id: "test-first" },
      {
        type: "paragraph",
        text: "If you plan several Reels with one creator, start with one paid Reel and a short brief that leaves room for their style. Ask for two or three hook options in the concept stage and agree which one to shoot. You learn how they take feedback, how close the result is to their organic work, and whether their audience responds to your product, before you commit the bigger budget.",
      },
      {
        type: "paragraph",
        text: "Decide early whether you want to reuse the Reel in ads or run it as a partnership ad. Usage rights, duration and paid amplification permissions change the fee, so raise them before you agree a rate. Influencer usage rights covers what to put in writing. If what you really need is a library of ad-ready Reels rather than creator reach, a UGC creator may be the better hire; see how to find UGC creators for your brand.",
        links: [
          { text: "Influencer usage rights", href: "/blog/influencer-usage-rights" },
          { text: "how to find UGC creators for your brand", href: "/blog/how-to-find-ugc-creators" },
        ],
      },
      {
        type: "paragraph",
        text: "Running the same campaign on YouTube Shorts too? The sourcing there works differently, and Kudozz Discovery doesn't cover YouTube; finding YouTube Shorts creators for your brand covers that side.",
        links: [{ text: "finding YouTube Shorts creators for your brand", href: "/blog/find-youtube-shorts-creators" }],
      },
      { type: "heading", text: "Common mistakes when hiring Reels creators", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Judging a creator by their one viral Reel instead of their typical views.",
          "Booking a creator for a format they've never made, such as asking a skit creator for a careful demo.",
          "Watching Reels on mute only, or with sound only, and missing half the quality check.",
          "Ignoring how their branded Reels perform compared with their organic ones.",
          "Writing a brief so tight that the creator can't use the style that made you pick them.",
          "Forgetting to agree usage and ad rights before the Reel is made.",
          "Treating views or engagement rate as proof of the right audience without seeing Insights.",
        ],
      },
      { type: "heading", text: "Final thoughts", id: "conclusion" },
      {
        type: "paragraph",
        text: "Finding Reels creators is a craft check as much as a search. Pick the format first, build your longlist around typical views and consistency, score hooks, pacing, audio and product handling across several Reels, and ask for Insights before you book. A smaller creator who makes Reels people watch to the end will usually do more for your campaign than a large account whose Reels get skipped.",
      },
      {
        type: "paragraph",
        text: "If you'd rather have a team source, brief and manage Reels creators for you, Kudozz runs Instagram influencer marketing campaigns end to end.",
        links: [{ text: "Instagram influencer marketing campaigns", href: "/services/instagram-influencer-marketing" }],
      },
    ],
    faqs: [
      {
        question: "Is a high views-to-followers ratio always a good sign?",
        answer:
          "Usually, but check why. A creator whose Reels regularly travel beyond their followers is making content the platform keeps showing. A single viral Reel can distort the picture, so look at the typical Reel, and check the comments and Insights to make sure the views come from people who resemble your customers.",
      },
      {
        question: "How many Reels should I watch before shortlisting a creator?",
        answer:
          "At least five recent Reels, including at least one branded Reel if they have made any. That's enough to see whether quality is consistent and how they handle products, without spending too long on creators who won't make the cut.",
      },
      {
        question: "Should I pay creators for a Reel or offer product only?",
        answer:
          "If you need a specific format, a deadline or usage rights, pay. Gifting can work for creators who would genuinely post about the product anyway, but you can't expect a briefed Reel on a date in exchange for product. Seeding works best as a way to find creators who already like what you make.",
      },
      {
        question: "Do trending audios matter when choosing a Reels creator?",
        answer:
          "Less than the creator's own craft. Creators who adapt trends to their niche can get good reach, but trending audio may not be cleared for branded content, so check what audio can be used in a sponsored Reel or partnership ad before relying on it.",
      },
      {
        question: "Can I find Reels creators by city or language?",
        answer:
          "Yes. Creator location and content language are visible on most profiles and are filters in discovery tools such as Kudozz Discovery. Remember that a creator's city is not the same as their audience's city, so confirm the audience split with Insights screenshots.",
      },
    ],
  },

  // #36 influencer-shortlist-multi-city-campaign (NEW)
  {
    slug: "influencer-shortlist-multi-city-campaign",
    category: "Campaign Strategy",
    title: "How to Build an Influencer Shortlist for a Multi-City Marketing Campaign",
    seoTitle: "Influencer Shortlist for Multi-City Campaigns | Kudozz",
    excerpt:
      "A multi-city campaign needs a shortlist built city by city: slots and roles per city, the right language in each market, logistics checks, coverage gaps and a named backup in every city.",
    metaDescription:
      "Build an influencer shortlist for a multi-city campaign: a city allocation matrix, language per city, local sourcing, coverage gaps, logistics and backups.",
    author: AUTHOR,
    publishedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["Influencer Shortlisting", "Multi-City Campaigns", "Regional Marketing", "India"],
    related: ["influencer-shortlist", "how-to-find-local-influencers", "pan-india-influencer-marketing-campaign", "find-regional-content-creators-india"],
    hero: {
      src: "/blog/discovery/influencer-shortlist-multi-city-campaign.svg",
      alt: "City allocation matrix for a multi-city influencer campaign: each city with its role, language, creator slots, backups and a coverage gap flagged",
    },
    discoveryCta: {
      headline: "Build Each City's Shortlist Faster",
      body: "Kudozz Discovery filters Instagram creators in India by state, city, language, niche and engagement, so you can build a separate saved list for every city in your campaign and spot the markets that still need creators.",
    },
    body: [
      {
        type: "paragraph",
        text: "A single shortlist of twenty strong creators can still fail a six-city campaign. If fourteen of them live in Mumbai, two in Delhi and none in Hyderabad, the campaign looks national on paper and lands in one city. Multi-city shortlists go wrong in predictable ways: one city dominates, a market gets creators in the wrong language, a creator can't visit the store that's opening in their city, or a decline in a small market leaves it with no one at all.",
      },
      {
        type: "paragraph",
        text: "The fix is to build the shortlist city by city, inside a plan that says what each city needs. The general shortlisting process (criteria, gates, weighted scoring, tiers) is covered in how to shortlist influencers for a brand campaign. This guide adds the layer that only matters when you're working across several cities.",
        links: [{ text: "how to shortlist influencers for a brand campaign", href: "/blog/influencer-shortlist" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To build an influencer shortlist for a multi-city campaign, start with a city allocation matrix that sets each city's role, content language, number of creator slots, creator mix and backups. Source creators city by city using location and language filters, confirm their audience is actually in that city with Insights screenshots, check each city for coverage gaps and audience overlap, apply logistics checks such as product availability and store visits, and name at least one backup per city before approval.",
      },
      { type: "heading", text: "Step 1: Build a city allocation matrix", id: "city-allocation-matrix" },
      {
        type: "paragraph",
        text: "Before anyone searches for a creator, agree how the campaign is split across cities. The matrix is one row per city, and it turns a vague \"go national\" brief into slots your team can fill.",
      },
      {
        type: "table",
        headers: ["City", "Role", "Content language(s)", "Slots", "Creator mix", "Backups", "Dependency"],
        rows: [
          ["Bengaluru", "Lead market", "English, Kannada", "5", "1 reach, 3 trust, 1 content", "2", "Already selling online"],
          ["Hyderabad", "Lead market", "Telugu, English", "4", "1 reach, 3 trust", "2", "Store opening in week 2"],
          ["Chennai", "Growth market", "Tamil, English", "3", "3 trust", "1", "Delivery live from week 1"],
          ["Pune", "Growth market", "Marathi, Hindi, English", "3", "2 trust, 1 content", "1", "Delivery live from week 1"],
          ["Kochi", "Test market", "Malayalam", "2", "2 trust", "1", "Quick-commerce listing only"],
          ["Coimbatore", "Test market", "Tamil", "2", "2 trust", "1", "Marketplace delivery only"],
        ],
      },
      {
        type: "paragraph",
        text: "The rows above are a hypothetical example for a home-care brand expanding across South and West India. Your own split should come from where you sell, where you're opening, where existing customers are concentrated and what each city is worth to the business. A useful rule of thumb is to give each city enough creators to be noticed there, rather than spreading one creator per city across too many markets. Two or three voices in a city usually register; one voice often disappears.",
      },
      {
        type: "template",
        label: "City allocation matrix (copy into a sheet)",
        text: "City | State | Role (lead / growth / test) | Business reason\nContent language(s) | Slots | Creator mix (reach / trust / content / regional)\nBudget share | Backups required | Product live from (date) | Store or event dependency\nOwner | Status (sourcing / gated / scored / approved)",
      },
      {
        type: "paragraph",
        text: "If the campaign runs across most of the country, the strategic choices (which states, how to phase them, how to split budget) are covered in how to run a pan-India influencer marketing campaign. The matrix here is the sourcing layer underneath that plan.",
        links: [{ text: "how to run a pan-India influencer marketing campaign", href: "/blog/pan-india-influencer-marketing-campaign" }],
      },
      { type: "heading", text: "Step 2: Set the language for each city", id: "language-per-city" },
      {
        type: "paragraph",
        text: "Language is the column most often left blank, and the one that most often sinks a city. English and Hindi content reaches some audiences everywhere, but in many cities the people you want respond more to creators speaking their own language. Decide per city whether you need native-language creators, bilingual creators, or whether English or Hinglish is genuinely enough for your customer.",
      },
      {
        type: "list",
        items: [
          "Native-language creators: best when your customers live their daily lives in that language, or when the product needs explaining.",
          "Bilingual creators: useful in metros where audiences switch between languages, and where you also want content you can reuse elsewhere.",
          "English or Hinglish: fine for some premium or urban categories, but test it rather than assume it.",
        ],
      },
      {
        type: "paragraph",
        text: "Don't plan to translate a Hindi script for a Tamil creator and call it localisation. Brief the idea and let the creator write in their own language. Finding regional and vernacular content creators in India goes deeper on sourcing by language and checking audience language, and regional and vernacular influencer marketing covers the strategy.",
        links: [
          { text: "Finding regional and vernacular content creators in India", href: "/blog/find-regional-content-creators-india" },
          { text: "regional and vernacular influencer marketing", href: "/blog/regional-influencer-marketing-india" },
        ],
      },
      { type: "heading", text: "Step 3: Source city by city", id: "source-city-by-city" },
      {
        type: "paragraph",
        text: "Run a separate search for each city rather than one big search you sort afterwards. A single national search tends to fill up with metro creators, and smaller cities only get whatever is left. Sourcing city by city also lets each city have its own longlist size: test markets may need a wider net because fewer creators pass your gates.",
      },
      {
        type: "list",
        items: [
          "Search by city and state, plus city nicknames and local hashtags (neighbourhoods, local food spots, city pages).",
          "Check who local businesses in your category have worked with recently.",
          "Look at your own tagged posts and customer orders for creators already in each city.",
          "Ask creators you've worked with in one city for introductions in another; creators often know peers in nearby markets.",
        ],
      },
      {
        type: "paragraph",
        text: "A discovery tool helps keep the cities separate. In Kudozz Discovery you can filter Instagram creators by state, city, language, niche, follower band and minimum engagement rate, then save each city's candidates into its own named list, such as \"Winter launch: Hyderabad\". Because filters stay in the URL, you can also share each city's search with the person who owns that market. For single-city sourcing methods in more detail, see how to find local influencers for your business in India.",
        links: [{ text: "how to find local influencers for your business in India", href: "/blog/how-to-find-local-influencers" }],
      },
      {
        type: "discovery-cta",
        headline: "Give Every City Its Own Creator List",
        body: "Filter Instagram creators by state, city and language, then save each market's candidates into its own list. It keeps a six-city campaign from turning into one long Mumbai-heavy spreadsheet.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Step 4: Confirm the audience is in the city", id: "confirm-audience-city" },
      {
        type: "paragraph",
        text: "A creator who lives in Pune doesn't necessarily have a Pune audience. Many creators who moved for work or study still have most of their followers in their home state, and some city-based creators have a national audience with only a small local share. Creator location is a starting point. For each shortlisted creator, ask for an Insights screenshot of top cities and check what share of their audience is in your target city. Discovery tools show where the creator is based, not where their followers are, so this step can't be skipped for a city-led campaign.",
      },
      { type: "heading", text: "Step 5: Check for coverage gaps", id: "coverage-gaps" },
      {
        type: "paragraph",
        text: "Once each city has its scored candidates, step back and look at the whole map. A coverage check takes ten minutes and catches problems that no single city's scoring will show.",
      },
      {
        type: "table",
        headers: ["Gap to check", "What it looks like", "Fix"],
        rows: [
          ["Empty city", "A city in the matrix with no creator passing gates", "Widen that city's search, drop to a smaller follower band, or reassign the slot"],
          ["Wrong language", "All creators in a city post in English when the matrix says native language", "Run a language-filtered search for that city only"],
          ["Single point of failure", "One creator carries a whole city", "Add a second creator or a named backup in the same city"],
          ["Overlap", "Several creators in one city share most of their audience", "Keep the strongest, replace others with different niches or neighbourhoods"],
          ["Metro bias", "Lead markets get all the bigger creators, test markets get leftovers", "Score each city against its own pool, not against the metros"],
          ["Niche sameness", "Every city's creators are lifestyle generalists", "Mix in food, parenting, fitness or local news creators where they fit the product"],
        ],
      },
      {
        type: "paragraph",
        text: "Overlap is a particular risk in smaller cities, where local creators often follow and feature each other. How to detect audience overlap when selecting multiple influencers explains how to estimate it from comments and shared followers.",
        links: [{ text: "How to detect audience overlap when selecting multiple influencers", href: "/blog/influencer-audience-overlap" }],
      },
      { type: "heading", text: "Step 6: Apply the logistics checks", id: "logistics-checks" },
      {
        type: "paragraph",
        text: "Multi-city campaigns fail on logistics more often than on creative. A creator can be perfect for Kochi and still be the wrong pick if your product isn't available there when their Reel goes live. Ask these questions per city before final approval:",
      },
      {
        type: "table",
        headers: ["Logistics question", "Why it changes the shortlist"],
        rows: [
          ["Is the product buyable in this city on the posting date?", "Content that drives people to an out-of-stock or undeliverable product wastes the slot"],
          ["Does the brief need a store visit or event?", "Only creators who live nearby, or whose travel you'll cover, can deliver it"],
          ["Can product reach the creator in time?", "Smaller cities and remote areas can take longer to deliver to; build in buffer days"],
          ["Are local offers or codes city-specific?", "Creators need the right code or link for their city, or attribution breaks"],
          ["Is there a local festival or event in the posting window?", "It may help or crowd the feed; check the city's calendar"],
        ],
      },
      {
        type: "paragraph",
        text: "If smaller cities are a big part of the plan, influencer marketing in Tier 2 and Tier 3 cities covers what changes in budgets, creator tiers and content once you move beyond the metros.",
        links: [{ text: "influencer marketing in Tier 2 and Tier 3 cities", href: "/blog/influencer-marketing-tier-2-tier-3-cities" }],
      },
      { type: "heading", text: "Step 7: Name backups per city, not per campaign", id: "backups-per-city" },
      {
        type: "paragraph",
        text: "A general reserve list doesn't help when a Chennai creator drops out, because your reserves are in Mumbai and Delhi. Every city needs its own named backup, ideally in the same language, with a similar role and fee. Lead markets deserve two. Get the backups approved in the same review as the priority creators so a decline becomes a same-day swap.",
      },
      { type: "heading", text: "Step 8: Present the shortlist by city", id: "present-by-city" },
      {
        type: "paragraph",
        text: "Present the shortlist as one section per city, in the order of the matrix, so the decision-maker reviews it against the plan they already agreed.",
      },
      {
        type: "template",
        label: "Multi-city shortlist review doc",
        text: "Summary: cities covered, total slots, total backups, open gaps\n\nCity: [name] | Role: [lead / growth / test] | Language: [ ]\nPriority creators: Handle | Profile link | Role | Score | Audience in city (from Insights) | Fee range | Why they fit\nBackups: Handle | Replaces | Score | Fee range\nLogistics: Product live from [date] | Store/event needs | Shipping deadline\nOpen questions: [ ]\n\n(repeat per city)\n\nCoverage check: empty cities | overlap flags | single-creator cities | language mismatches",
      },
      {
        type: "paragraph",
        text: "After approval, track each city's creators through outreach, contracts, shipping and posting with a city column in your tracker, so you can see at a glance which markets are on schedule. Influencer campaign status tracking shows how to set that up.",
        links: [{ text: "Influencer campaign status tracking", href: "/blog/influencer-campaign-tracker" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Running one national search and sorting it into cities afterwards, so smaller markets get leftovers.",
          "Spreading one creator across too many cities instead of giving fewer cities enough presence.",
          "Treating where a creator lives as where their audience lives.",
          "Translating one script into several languages instead of briefing native creators.",
          "Approving creators in cities where the product isn't available yet.",
          "Keeping one reserve list for the whole campaign instead of backups per city.",
          "Booking several creators in a small city who all share the same followers.",
        ],
      },
      { type: "heading", text: "Bringing it together", id: "conclusion" },
      {
        type: "paragraph",
        text: "A multi-city shortlist is a set of city shortlists held together by a plan. Agree the city allocation matrix first, set the language for each city, source and score each market against its own pool, confirm audiences with Insights, check the full map for gaps and overlap, apply logistics checks, and name backups in every city. Do that and the campaign shows up in every market you planned for, not just the biggest one.",
      },
      {
        type: "paragraph",
        text: "If you'd rather hand the city-by-city sourcing to a team that does it every week, Kudozz runs regional influencer marketing campaigns across Indian states and languages.",
        links: [{ text: "regional influencer marketing campaigns", href: "/services/regional-influencer-marketing" }],
      },
    ],
    faqs: [
      {
        question: "How many cities can one influencer campaign cover well?",
        answer:
          "It depends on budget more than ambition. A useful check is whether you can give every city at least two or three creators plus a backup. If you can't, cover fewer cities properly and add the rest in a later phase.",
      },
      {
        question: "Should every city get the same number of creators?",
        answer:
          "No. Give lead markets more slots and a mix of roles, and give test markets a smaller set of trust-building creators. Base the split on sales potential, store presence and existing customers rather than population alone.",
      },
      {
        question: "Can a creator based in one city cover a nearby city?",
        answer:
          "Sometimes. A Coimbatore creator may have a meaningful following in nearby towns, and a Pune creator may reach parts of Mumbai. Check their top-cities Insights before counting them towards a second city, and don't rely on it for store visits.",
      },
      {
        question: "How do I handle different fees across cities?",
        answer:
          "Expect fees to vary between metros and smaller cities, and set a budget share per city in the matrix rather than one per-creator rate. Compare creators within the same city, and show fees beside the quality score rather than inside it.",
      },
      {
        question: "Should creators in different cities post on the same day?",
        answer:
          "Not necessarily. A burst on one day creates a moment, but staggering by city lets you fix problems found in the first market. Align posting dates with when the product is actually live in each city.",
      },
    ],
  },

  // #37 source-influencers-brand-ambassador-programme (NEW)
  {
    slug: "source-influencers-brand-ambassador-programme",
    category: "Influencer Marketing",
    title: "How to Source Influencers for a Brand Ambassador Programme",
    seoTitle: "How to Source Brand Ambassador Influencers | Kudozz",
    excerpt:
      "The best brand ambassadors are rarely found by searching for the biggest names. Here's where to look, how to test candidates through a trial-to-ambassador pipeline and how to score them before you sign.",
    metaDescription:
      "Source influencers for a brand ambassador programme: five candidate pools, a trial-to-ambassador pipeline, a scorecard and the red flags to catch early.",
    author: AUTHOR,
    publishedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["Brand Ambassadors", "Creator Discovery", "Long-Term Partnerships", "India"],
    related: ["brand-ambassador-program", "customer-advocacy-program", "influencer-product-seeding-program", "how-to-research-influencers"],
    hero: {
      src: "/blog/discovery/source-influencers-brand-ambassador-programme.svg",
      alt: "Five candidate pools feeding a trial-to-ambassador pipeline: spotted, seeded, paid trial, second brief and ambassador offer",
    },
    discoveryCta: {
      headline: "Start Your Ambassador Pipeline",
      body: "Kudozz Discovery helps you fill the gaps your own customers and past collaborators can't: filter Instagram creators in India by niche, city, language and engagement, and keep promising candidates in a saved list until they're ready for a trial.",
    },
    body: [
      {
        type: "paragraph",
        text: "Most ambassador programmes that fizzle out were sourced like a one-off campaign. The brand picked the most popular creators in its niche, offered a six- or twelve-month deal, and discovered by month three that the creators were posting on schedule but didn't really use the product, had three competing deals, or had lost interest. The contract was fine. The sourcing wasn't.",
      },
      {
        type: "paragraph",
        text: "An ambassador is a long-term voice for your brand, so you're selecting for different things: genuine use, staying power, values and how someone behaves over months, not just how one post performs. This guide is only about sourcing: where candidates come from, how to test them and how to decide. Running the programme once it exists (tiers, rewards, briefs, contracts) is covered in influencer ambassador programs.",
        links: [{ text: "influencer ambassador programs", href: "/blog/brand-ambassador-program" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To source influencers for a brand ambassador programme, look first at people who already know your brand (customers who create content, past collaborators, creators who tag you unprompted), then fill gaps with targeted discovery. Move candidates through a trial-to-ambassador pipeline (seeding, a paid trial, a second brief) before offering a long-term deal, and score them on genuine product use, consistency, audience match, professionalism, values and category conflicts rather than reach alone.",
      },
      { type: "heading", text: "What an ambassador needs that a one-off creator doesn't", id: "ambassador-vs-one-off" },
      {
        type: "table",
        headers: ["Criterion", "One-off collaboration", "Ambassador"],
        rows: [
          ["Product use", "Can try it for the post", "Should use it regularly and have a real opinion"],
          ["Consistency", "Needs to deliver once", "Needs to post steadily for months without quality dropping"],
          ["Category conflicts", "No competitor deal in the posting window", "No competing deals for the whole term, and comfortable with that"],
          ["Creative range", "Good at one format", "Can keep the brand fresh across many posts and formats"],
          ["Values and conduct", "Nothing alarming in recent content", "A track record you'd be comfortable tying the brand to for a year"],
          ["Relationship", "Professional for one brief", "Responsive, gives feedback, wants to be involved"],
        ],
      },
      {
        type: "paragraph",
        text: "These extra requirements explain why ambassadors are usually found among people who already have a relationship with the brand, and why a cold search should feed a pipeline rather than a contract.",
      },
      { type: "heading", text: "The five candidate pools", id: "candidate-pools" },
      {
        type: "table",
        headers: ["Pool", "Where to find them", "Strength", "Watch out for"],
        rows: [
          ["Customers who create", "Repeat buyers, reviewers, post-purchase surveys asking whether they make content", "Real, lasting product use", "Small audiences; may need help with briefs and disclosure"],
          ["Past collaborators", "Your campaign tracker, past contracts, seeding results", "Known delivery record and audience response", "Fatigue if they've posted about you often; check recent performance"],
          ["Unprompted fans", "Tagged posts, mentions, Stories that tag you, comments on your posts", "Genuine enthusiasm already visible to their audience", "Enthusiasm isn't the same as professionalism; test before committing"],
          ["Experts and community figures", "Practitioners in your category, trainers, chefs, stylists, community organisers", "Credibility that a lifestyle creator can't borrow", "Professional rules on endorsements in some fields; check before signing"],
          ["New creators from discovery", "Targeted searches by niche, city and language", "Fills specific gaps: a region, a language, a sub-niche", "No relationship yet, so they must go through the whole pipeline"],
        ],
      },
      {
        type: "paragraph",
        text: "Work through the pools in that order. The first three usually produce your strongest ambassadors because the relationship already exists. Customer advocacy programs explains how to turn existing fans into creator partners, which is the natural feeder for the first pool.",
        links: [{ text: "Customer advocacy programs", href: "/blog/customer-advocacy-program" }],
      },
      { type: "heading", text: "Mining your own pools first", id: "mine-your-own-pools" },
      {
        type: "list",
        items: [
          "Go through your tagged posts and mentions from the last six to twelve months and list everyone who posted about you more than once without being paid.",
          "Go through your campaign tracker and mark past collaborators whose content performed well and who were easy to work with.",
          "Add a question to post-purchase emails or review forms asking whether the customer creates content and would like to hear about collaborations. Only contact people who opt in.",
          "Ask your customer support and community teams who they hear from often; loyal customers who create often show up there first.",
          "Look at who comments thoughtfully on your posts, not just who comments often.",
        ],
      },
      {
        type: "paragraph",
        text: "If you've been seeding products, your seeding results are a ready-made ambassador pool: creators who posted without obligation and kept using the product are exactly who you want. How to find influencers for product gifting and seeding campaigns shows how to set that up so it feeds this pipeline.",
        links: [{ text: "How to find influencers for product gifting and seeding campaigns", href: "/blog/influencer-product-seeding-program" }],
      },
      { type: "heading", text: "Filling the gaps with discovery", id: "fill-gaps-with-discovery" },
      {
        type: "paragraph",
        text: "Your own pools will have gaps. Perhaps all your fans are in Delhi and you need someone in Kolkata, or your customers are mostly women and you want a dad creator for a family range. Define each gap as a specific search (niche, city, language, follower band) and fill it deliberately rather than browsing.",
      },
      {
        type: "paragraph",
        text: "Kudozz Discovery is built for that kind of targeted search on Instagram. You can filter creators in India by niche, state, city, language, gender, follower band, minimum engagement rate and posting frequency, which matters for ambassadors because steady posting is a requirement. Save candidates into a list such as \"Ambassador pipeline: East\" and they're ready to move into seeding. Treat everyone found this way as a stranger: they start at the beginning of the pipeline, however good the profile looks. The research steps are in how to research influencers before approaching them.",
        links: [{ text: "how to research influencers before approaching them", href: "/blog/how-to-research-influencers" }],
      },
      {
        type: "discovery-cta",
        headline: "Find Candidates for the Gaps in Your Programme",
        body: "Need a Bengali-speaking parenting creator or a Pune fitness coach who posts several times a week? Filter Instagram creators by niche, city, language and posting frequency, and save candidates into an ambassador pipeline list.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "The trial-to-ambassador pipeline", id: "trial-pipeline" },
      {
        type: "paragraph",
        text: "Long-term deals should be earned through short ones. A pipeline lets you see how a creator behaves across several touchpoints before you commit a year's budget, and it lets them decide whether they actually like working with you.",
      },
      {
        type: "table",
        headers: ["Stage", "What you do", "What you learn", "Move on if"],
        rows: [
          ["1. Spotted", "Add to the pipeline list with source and reason", "Initial fit on paper", "They pass your basic gates"],
          ["2. Seeded", "Send product with no obligation to post", "Whether they genuinely use and like it", "They post or give useful feedback and keep using it"],
          ["3. Paid trial", "One paid brief with a clear deliverable", "Professionalism, brief handling, audience response", "Delivered on time, content performed close to their organic work"],
          ["4. Second brief", "A different format or moment, ideally a month or two later", "Creative range and consistency", "Quality held and the relationship felt easy on both sides"],
          ["5. Ambassador offer", "Propose a term, deliverables and exclusivity", "Whether they want the commitment", "Terms agreed in writing"],
        ],
      },
      {
        type: "paragraph",
        text: "Customers and past collaborators can skip stages they've already passed. A customer who has posted about you for a year doesn't need seeding; a past collaborator with two good campaigns can go straight to an offer. Creators from cold discovery should go through every stage.",
      },
      { type: "heading", text: "The ambassador scorecard", id: "ambassador-scorecard" },
      {
        type: "paragraph",
        text: "Score candidates who reach stage 4 so the final decision is comparable and explainable. Weights below are a starting point; adjust them to what your programme is for.",
      },
      {
        type: "table",
        headers: ["Criterion", "Suggested weight", "Evidence to look at"],
        rows: [
          ["Genuine product use", "20%", "Unprompted posts, Stories, comments about the product, their feedback during seeding"],
          ["Consistency and reliability", "20%", "Posting frequency over months, deadlines met in trials"],
          ["Audience match", "15%", "Insights screenshots of city, age and gender from the creator"],
          ["Content quality and range", "15%", "Trial and second-brief content, variety of formats"],
          ["Values and conduct", "15%", "Past content, comments, how they handle criticism"],
          ["Category conflicts", "10%", "Current and recent deals in your category; willingness to be exclusive"],
          ["Growth trajectory", "5%", "Steady or improving reach and engagement over time"],
        ],
      },
      {
        type: "template",
        label: "Ambassador candidate scorecard (one row per creator)",
        text: "Creator | Profile link | Pool (customer / past collaborator / fan / expert / discovery) | Pipeline stage\nProduct use (1–5) | Reliability (1–5) | Audience match (1–5) | Content (1–5) | Values (1–5) | Conflicts (1–5) | Trajectory (1–5)\nWeighted score | Expected fee range | Exclusivity needed (yes / no)\nStrongest evidence link | Concerns | Decision (offer / another trial / not now) | Decided by | Date",
      },
      {
        type: "paragraph",
        text: "As with any shortlist, keep cost beside the score, not inside it. Audience match needs proof from the creator: public profiles and discovery tools show a creator's location, language, niche and engagement, but not who their followers are.",
      },
      { type: "heading", text: "Questions to ask before the offer", id: "questions-before-offer" },
      {
        type: "list",
        items: [
          "How long have you used the product, and what would you change about it?",
          "Which brands are you working with now, and are any in our category or likely to be?",
          "How do you feel about exclusivity in our category for the term?",
          "What kind of content would you like to make for us that we haven't asked for?",
          "How do you prefer to receive briefs and feedback, and how quickly can you usually turn things around?",
          "Are there topics or formats you won't do?",
        ],
      },
      {
        type: "paragraph",
        text: "The answers tell you as much about fit as the scorecard does. A candidate with ideas of their own is usually a better long-term partner than one who waits for the brief. Once you're ready to offer, the agreement needs to cover term, deliverables, exclusivity, usage rights and exit terms; the influencer marketing contract guide lists the clauses.",
        links: [{ text: "influencer marketing contract guide", href: "/blog/influencer-marketing-contract" }],
      },
      { type: "heading", text: "Red flags during sourcing", id: "red-flags" },
      {
        type: "list",
        items: [
          "They've posted for several competitors in the last few months and see that as normal.",
          "Seeded product shows up once in a haul and never again.",
          "Trial content is noticeably weaker than their organic content.",
          "They're slow or vague about sharing Insights.",
          "Past content or comment behaviour you wouldn't want next to your brand for a year.",
          "They want a long-term deal before doing a single paid trial.",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Recruiting ambassadors from a cold search of the biggest creators in the niche.",
          "Skipping trials and signing a year-long deal on the strength of a profile.",
          "Ignoring customers and fans who already create content about you.",
          "Scoring only on reach and engagement, not product use and reliability.",
          "Not asking about current and upcoming deals in your category.",
          "Building the whole programme from one city, one language or one creator type.",
        ],
      },
      { type: "heading", text: "Bringing it together", id: "conclusion" },
      {
        type: "paragraph",
        text: "Good ambassadors are mostly found, not recruited. Start with customers who create, past collaborators and unprompted fans, use targeted discovery to fill specific gaps, and move everyone through seeding, a paid trial and a second brief before an offer. Score finalists on genuine use, reliability, audience proof, content, values and conflicts. The programme you build that way starts with people who already want to be part of it.",
      },
      {
        type: "paragraph",
        text: "If you'd like help building and running the programme itself, Kudozz designs and manages brand ambassador programs for Indian brands.",
        links: [{ text: "brand ambassador programs", href: "/services/ambassador-programs" }],
      },
    ],
    faqs: [
      {
        question: "How many ambassadors should a brand start with?",
        answer:
          "Start small, often a handful, so you can manage each relationship properly and learn what works. Add more once the briefs, rewards and reporting are running smoothly. A pipeline of candidates in trials is more useful than a large group signed at once.",
      },
      {
        question: "Should ambassadors be big influencers or small creators?",
        answer:
          "Choose by role. Smaller creators with close communities often make the most convincing long-term advocates, while one or two larger names can add reach. What matters most is genuine product use and reliability over many months.",
      },
      {
        question: "Can existing customers with small followings be ambassadors?",
        answer:
          "Yes, and they're often among the most credible. Expect to give them more support with briefs, content quality and disclosure. Some brands run a separate customer tier alongside a creator tier for this reason.",
      },
      {
        question: "How long should the trial stage last before an ambassador offer?",
        answer:
          "Long enough to see at least two pieces of paid work in different formats, usually a couple of months. Customers and past collaborators with a track record can move faster.",
      },
      {
        question: "Do ambassadors need to disclose the relationship in every post?",
        answer:
          "Yes. A long-term deal is a material connection, so every post about the brand needs a clear disclosure under ASCI's guidelines, not just the first one. Build the disclosure requirement into the agreement and check posts against it.",
      },
    ],
  },

  // #38 find-influencers-seasonal-campaigns (NEW)
  {
    slug: "find-influencers-seasonal-campaigns",
    category: "Campaign Strategy",
    title: "How to Find Influencers for Seasonal Marketing Campaigns and Festive Promotions",
    seoTitle: "Find Influencers for Seasonal and Festive Campaigns | Kudozz",
    excerpt:
      "Festive campaigns are usually lost in the sourcing stage, weeks before anything posts. Here's a sourcing timeline, how to match creators to festivals and regions, and how to hold the creators you want.",
    metaDescription:
      "Find influencers for festive and seasonal campaigns in India: a sourcing timeline, festival-to-region creator mapping, relevance checks and booking holds.",
    author: AUTHOR,
    publishedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["Seasonal Campaigns", "Festive Marketing", "Creator Discovery", "India"],
    related: ["seasonal-influencer-marketing-india", "influencer-shortlist-multi-city-campaign", "influencer-marketing-campaign-timeline", "find-regional-content-creators-india"],
    hero: {
      src: "/blog/discovery/find-influencers-seasonal-campaigns.svg",
      alt: "Festive sourcing timeline counting back from launch: brief, longlist, outreach and holds, contracts and shipping, drafts, then go-live",
    },
    discoveryCta: {
      headline: "Start Sourcing Before the Season Does",
      body: "Kudozz Discovery lets you filter Instagram creators in India by niche, state, city and language and save them into a list for each festival, so next season's sourcing starts from a bench instead of a blank sheet.",
    },
    body: [
      {
        type: "paragraph",
        text: "When should you start finding creators for a Diwali campaign? Earlier than most brands do. By the time festive ads are everywhere, the creators who fit your brand have often already agreed their festive collaborations, and the ones still available may be available for a reason. Seasonal campaigns are usually won or lost in the sourcing stage, weeks before anything goes live.",
      },
      {
        type: "paragraph",
        text: "This guide is about the sourcing side of seasonal and festive campaigns: when to start, which creators fit which festivals and regions, how to check festive relevance and how to hold creators before your plan is final. For the campaign planning itself (which moments to own, messaging, budgets), see seasonal influencer marketing around Indian festivals.",
        links: [{ text: "seasonal influencer marketing around Indian festivals", href: "/blog/seasonal-influencer-marketing-india" }],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To find influencers for a seasonal or festive campaign, start sourcing roughly two to three months before go-live for major festivals. Match creators to the festival's region and language, check that they've made festive content before and that it felt authentic, reach out early with a clear hold request, and keep named backups. After the season, save the creators who worked into a festival-specific bench so next year's sourcing starts weeks ahead.",
      },
      { type: "heading", text: "Why festive sourcing is harder", id: "why-harder" },
      {
        type: "list",
        items: [
          "Demand bunches up. Many brands want the same creators in the same few weeks, so calendars fill early.",
          "Fees and terms can firm up. Expect less room to negotiate and shorter windows to confirm during peak season.",
          "Feeds get crowded. A creator posting several festive collaborations in a week dilutes each one, including yours.",
          "Festivals are regional. A campaign built around one festival may only make sense in a few states.",
          "Logistics tighten. Couriers are busy, stock moves fast and creators travel home for the holidays.",
        ],
      },
      {
        type: "paragraph",
        text: "None of this is a reason to avoid festive campaigns. It's a reason to move the sourcing work forward and treat it as its own project.",
      },
      { type: "heading", text: "A festive sourcing timeline", id: "sourcing-timeline" },
      {
        type: "paragraph",
        text: "Count back from the date the first post should go live. The windows below are a rule of thumb for a major festival with a mid-sized campaign; shorten them for smaller moments and extend them for large or multi-city campaigns.",
      },
      {
        type: "table",
        headers: ["Weeks before go-live", "Sourcing task"],
        rows: [
          ["12 to 10", "Agree the brief, festival, regions, languages, creator roles and budget range"],
          ["10 to 8", "Build the longlist, starting with last season's bench and past collaborators"],
          ["8 to 6", "Research and score; send outreach with a hold request to priority creators"],
          ["6 to 4", "Confirm fees and dates, sign agreements, name backups, ship product"],
          ["4 to 2", "Brief creators, review concepts and drafts, sort disclosure and usage rights"],
          ["2 to 0", "Final approvals, posting schedule, links and codes checked"],
          ["After the festival", "Record results and save the creators who worked into next year's bench"],
        ],
      },
      {
        type: "paragraph",
        text: "If you're starting late, cut research time, not checks: lean harder on creators you've worked with and on smaller creators, whose calendars are often less full. The full brief-to-report schedule is in our influencer marketing campaign timeline, and influencer marketing budget planning for seasonal businesses covers how to phase spend across the year.",
        links: [
          { text: "influencer marketing campaign timeline", href: "/blog/influencer-marketing-campaign-timeline" },
          { text: "influencer marketing budget planning for seasonal businesses", href: "/blog/influencer-budget-seasonal-business" },
        ],
      },
      { type: "heading", text: "Match creators to festivals and regions", id: "festivals-and-regions" },
      {
        type: "paragraph",
        text: "India's festive calendar is a set of regional seasons, not one national one. Many festivals follow lunar calendars, so dates shift from year to year; check the exact dates for your campaign year before building the timeline.",
      },
      {
        type: "table",
        headers: ["Moment", "Where it matters most", "Creator types that often fit", "Languages to consider"],
        rows: [
          ["Onam", "Kerala and Malayali communities elsewhere", "Food, home, traditional fashion, family", "Malayalam"],
          ["Ganesh Chaturthi", "Maharashtra, Goa, parts of Karnataka and Telangana", "Home, food, community, city creators", "Marathi, Hindi, Kannada, Telugu"],
          ["Navratri and Garba", "Gujarat, Mumbai, Gujarati communities", "Dance, fashion, jewellery, beauty", "Gujarati, Hindi"],
          ["Durga Puja", "West Bengal, Kolkata, Assam, Bengali communities", "Fashion, food, pandal-hopping, photography", "Bengali"],
          ["Diwali", "Most of India", "Gifting, home decor, food, fashion, beauty, finance", "Hindi plus regional languages"],
          ["Chhath", "Bihar, Jharkhand, eastern Uttar Pradesh", "Family, food, devotional, regional culture", "Bhojpuri, Hindi, Maithili"],
          ["Christmas and New Year", "Goa, Kerala, the North-East, metros", "Baking, parties, travel, gifting", "English, Malayalam, Konkani"],
          ["Pongal, Sankranti, Lohri, Magh Bihu", "Tamil Nadu; Andhra Pradesh, Telangana, Karnataka; Punjab; Assam", "Food, farming and rural life, traditional fashion", "Tamil, Telugu, Kannada, Punjabi, Assamese"],
          ["Holi", "Much of North and Central India", "Skincare and haircare, colour-safe products, food, parties", "Hindi"],
          ["Eid", "Muslim communities across India; dates move earlier each year", "Food, fashion, family, gifting", "Urdu, Hindi, Malayalam, others"],
          ["Wedding season", "Nationwide, with regional customs", "Bridal fashion, jewellery, beauty, wedding planners", "Varies by region"],
          ["Marketplace sale events", "Nationwide, online", "Deal and haul creators, tech, home, fashion", "Hindi, English, regional"],
        ],
      },
      {
        type: "paragraph",
        text: "Use the table as a starting point and add your own moments: back-to-school, monsoon, summer, exam season or end-of-season sales may matter more to your category than any festival. For regional festivals, native-language creators who celebrate the festival are worth far more than a national creator posting one festive Reel. Finding regional and vernacular content creators in India covers how to source by language and check audience language.",
        links: [{ text: "Finding regional and vernacular content creators in India", href: "/blog/find-regional-content-creators-india" }],
      },
      { type: "heading", text: "Check festive relevance, not just fit", id: "festive-relevance" },
      {
        type: "paragraph",
        text: "A creator who fits your brand the rest of the year may still be the wrong voice for a particular festival. Before shortlisting, look back at last year's season on their profile:",
      },
      {
        type: "list",
        items: [
          "Did they post about this festival last year, and did it feel personal rather than staged?",
          "How many brand collaborations did they run in that window? A feed packed with festive ads may bury yours.",
          "Do their audience's location and language line up with where the festival is celebrated? Ask for top-cities Insights.",
          "Is festive content a natural extension of their usual niche, or a sudden switch?",
          "Would their take on the festival sit comfortably with your brand's tone and values?",
        ],
      },
      {
        type: "paragraph",
        text: "This check is where tokenism gets caught. A brand asking a creator to perform a festival they don't celebrate, or don't understand, usually shows. Creators who already make festive content with care are easier to brief and more believable.",
      },
      {
        type: "discovery-cta",
        headline: "Find Festive Creators by Region and Language",
        body: "Filter Instagram creators in India by state, city, language and niche to build a longlist for a regional festival, then save it as a list for that festival so you can reuse it next season.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Source the longlist from your bench first", id: "source-from-bench" },
      {
        type: "paragraph",
        text: "Your quickest festive sourcing comes from creators you already know: last season's best performers, ambassadors, reserves who were never used, and creators who've tagged you recently. Approach them first; they're easier to confirm and already understand the brand. Then fill the gaps with searches by region, language and niche.",
      },
      {
        type: "paragraph",
        text: "In Kudozz Discovery you can filter Instagram creators by state, city, language, niche, follower band and minimum engagement rate, and save results into lists. Naming lists by festival and year (\"Durga Puja 2027: Kolkata\") turns this year's sourcing into next year's starting point. If the campaign covers several regions at once, split the sourcing by city as described in how to build an influencer shortlist for a multi-city marketing campaign.",
        links: [{ text: "how to build an influencer shortlist for a multi-city marketing campaign", href: "/blog/influencer-shortlist-multi-city-campaign" }],
      },
      { type: "heading", text: "Holds, booking windows and backups", id: "holds-and-backups" },
      {
        type: "paragraph",
        text: "Festive plans often aren't final when you need to approach creators. A hold bridges the gap: you ask a creator to keep specific dates open while you confirm, with a clear deadline for your decision. Keep holds honest. Don't hold more creators than you could realistically book, and release them promptly if plans change.",
      },
      {
        type: "template",
        label: "Festive hold request",
        text: "Hi [Name], we're planning a [festival] campaign for [brand] and your [specific content, e.g. Navratri looks last year] is exactly the tone we want.\n\nCould you hold [date range] for one [format] while we finalise the plan? We'll confirm or release the hold by [date], and if we go ahead we'll send the brief, fee and product by [date].\n\nIf you're already committed to a brand in our category for this festival, just let us know and we'll plan around it.",
      },
      {
        type: "list",
        items: [
          "Set a hold deadline you can actually meet, and release holds as soon as you know.",
          "Ask about category conflicts in the same message; festive exclusivity requests are common.",
          "Name a backup for every priority creator, in the same region and language.",
          "Agree shipping dates early: courier delays around festivals can push content past the moment.",
          "Confirm disclosure and usage rights in the agreement, not after posting.",
        ],
      },
      {
        type: "paragraph",
        text: "Your outreach tracker should show each creator's hold status and deadline alongside the usual contact fields; how to create an influencer outreach list shows a structure that works.",
        links: [{ text: "how to create an influencer outreach list", href: "/blog/how-to-create-influencer-outreach-list" }],
      },
      { type: "heading", text: "Sale events need different creators from festivals", id: "sale-events" },
      {
        type: "paragraph",
        text: "A festival campaign and a marketplace sale campaign can fall in the same weeks but want different people. Festival content runs on emotion, tradition and storytelling, so it suits creators known for family, food, fashion and culture. Sale content runs on urgency and value, so it suits creators whose audiences come to them for deals, comparisons and hauls. Decide which job each slot is doing and source accordingly; a mix of both is fine, as long as each creator is doing the job they're good at. For a week-by-week view of how creator content fits around a sale on your own channels, see the festive and sale-season social media plan for D2C brands.",
        links: [{ text: "festive and sale-season social media plan for D2C brands", href: "/blog/d2c-festive-sale-social-media-plan" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Starting sourcing when festive ads are already live.",
          "Running one national festive campaign for a festival that's celebrated mainly in a few states.",
          "Choosing creators with no history of festive content and hoping they'll make it feel natural.",
          "Booking creators whose feeds will carry several competing festive deals in the same week.",
          "Holding creators without a decision date, then releasing them too late for them to book anyone else.",
          "Not shipping product early enough for courier delays around the festival.",
          "Forgetting to save who worked, so next year starts from scratch.",
        ],
      },
      { type: "heading", text: "Final thoughts", id: "conclusion" },
      {
        type: "paragraph",
        text: "Seasonal influencer campaigns reward the brands that source early and specifically. Count back from go-live, map each festival to its regions and languages, check that creators have real festive relevance, use honest holds with deadlines, and keep backups. Then save the creators who delivered into a festival bench, so next season starts with a shortlist instead of a search.",
      },
      {
        type: "paragraph",
        text: "If you want help planning a festive campaign around the right moments and markets, Kudozz's campaign strategy team can build the plan with you.",
        links: [{ text: "campaign strategy team", href: "/services/campaign-strategy" }],
      },
    ],
    faqs: [
      {
        question: "How early should I contact influencers for a Diwali campaign?",
        answer:
          "As a rule of thumb, start outreach about six to eight weeks before your first post, after building the longlist a few weeks before that. Larger or multi-city campaigns benefit from starting earlier. If you're late, start with creators you've worked with before.",
      },
      {
        question: "Are smaller creators easier to book during festive season?",
        answer:
          "Often, because fewer brands compete for their dates. They can also be more willing to make content in their own regional language and style. Check their festive content from previous years, and confirm audience location with Insights.",
      },
      {
        question: "Should I ask festive creators for exclusivity?",
        answer:
          "Only if you need it and will pay for it. Short category exclusivity around a festival is reasonable to request, but it limits a creator's earnings in their busiest season, so expect it to affect the fee. At minimum, ask about competing deals in the same window.",
      },
      {
        question: "Can I reuse the same creators every festive season?",
        answer:
          "Yes, and repeat partnerships can feel more natural to audiences than a new face every year. Re-check each creator's recent performance, audience and deals before rebooking, and refresh the creative so the content doesn't feel like a repeat.",
      },
      {
        question: "What if our festive campaign dates aren't confirmed yet?",
        answer:
          "Use holds with a clear decision date, and be honest with creators about what's still open. Releasing a hold early is far better for the relationship than cancelling close to the festival.",
      },
    ],
  },

  // #39 influencer-product-seeding-program (UPGRADE, original 2026-09-30)
  {
    slug: "influencer-product-seeding-program",
    category: "Campaign Strategy",
    title: "How to Find Influencers for Product Gifting and Seeding Campaigns",
    seoTitle: "Find Influencers for Product Gifting and Seeding | Kudozz",
    excerpt:
      "Seeding works when the products land with creators who would genuinely use them. How to find and select seeding recipients, build a recipient sheet, and run the opt-in, logistics, follow-up and measurement that make it a programme.",
    metaDescription:
      "Find influencers for product gifting and seeding: recipient segments, where to source them, selection checks, a recipient sheet, logistics and measurement.",
    author: AUTHOR,
    publishedAt: "2026-09-30",
    updatedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["Product Seeding", "Influencer Gifting", "Creator Discovery", "India"],
    related: ["influencer-gifting", "instagram-product-seeding", "how-to-find-micro-influencers", "source-influencers-brand-ambassador-programme"],
    hero: {
      src: "/blog/discovery/influencer-product-seeding-program.svg",
      alt: "Seeding recipient funnel: candidate sources narrowed by selection checks into an opt-in recipient sheet, then shipped, posted and graduated to paid work",
    },
    discoveryCta: {
      headline: "Find Seeding Recipients Who Fit",
      body: "Kudozz Discovery lets you filter Instagram creators in India by niche, city, language, follower band and engagement, and save recipients into a list for each seeding wave before you send a single invitation.",
    },
    body: [
      {
        type: "paragraph",
        text: "Sending products to creators is easy. Sending them to creators who will genuinely use them, at the right time, with no strings that make the content feel forced, is a selection problem. Most seeding programmes that produce little come from the list, not the product: boxes sent to whoever was big, available or already in the spreadsheet, rather than to people whose audiences care about the category.",
      },
      {
        type: "paragraph",
        text: "This guide focuses on finding and selecting seeding recipients, and keeps the programme mechanics you need around them: opt-in, packaging, logistics, follow-up, disclosure and measurement. The Instagram-specific mechanics are in Instagram product seeding, relationship-led gifting to creators you already know is in influencer gifting strategy, and the creator's side is in creator product seeding.",
        links: [
          { text: "Instagram product seeding", href: "/blog/instagram-product-seeding" },
          { text: "influencer gifting strategy", href: "/blog/influencer-gifting" },
          { text: "creator product seeding", href: "/blog/creator-product-seeding" },
        ],
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To find influencers for product gifting and seeding, define recipient segments first (creators already mentioning your category, niche specialists, regional creators, potential long-term partners), source them from tagged posts, competitor and category content, past applicants and discovery tools, and check each one for genuine fit, organic product content, past disclosure and deliverable location. Invite before shipping, keep every recipient in one sheet with status and consent, follow up once without pressure, and measure content rate and which creators to move into paid work.",
      },
      { type: "heading", text: "Seeding, gifting and sampling compared", id: "models" },
      {
        type: "table",
        headers: ["", "Seeding", "Gifting", "Sampling"],
        rows: [
          ["Purpose", "Earned content and discovering good-fit creators", "Relationship building with a smaller group", "Trial at scale, often with content as a by-product"],
          ["Scale", "Dozens to hundreds of creators", "A curated group", "Hundreds or more, often micro and nano"],
          ["Obligation to post", "None", "None", "Usually none; sometimes a light ask"],
          ["Best for", "Launches, new ranges, testing creator fit", "Premium products, long-term partner pipelines", "FMCG, food, personal care, trial-led products"],
          ["Main cost", "Product and logistics", "Product, packaging and personal touch", "Product, logistics and coordination"],
        ],
      },
      {
        type: "paragraph",
        text: "If you need guaranteed posts on a date, that's a paid collaboration, and agreed posts in return for product is barter, which needs written terms. The trade-offs are in influencer gifting vs paid collaborations and barter influencer collaborations.",
        links: [
          { text: "influencer gifting vs paid collaborations", href: "/blog/instagram-gifting-vs-paid-collaboration" },
          { text: "barter influencer collaborations", href: "/blog/barter-influencer-collaborations" },
        ],
      },
      { type: "heading", text: "Who belongs on a seeding list", id: "recipient-segments" },
      {
        type: "table",
        headers: ["Segment", "Why include them", "Share of list (illustrative)"],
        rows: [
          ["Creators already mentioning your brand or category", "Highest chance of genuine posts", "Priority"],
          ["Niche specialists", "Credible reactions to an interested audience", "Core"],
          ["Regional creators in priority markets", "Local reach and language", "Depends on markets"],
          ["Potential long-term partners", "Test fit before a paid offer", "Small, curated"],
          ["Creators in adjacent categories", "New audiences", "Small, as a test"],
        ],
      },
      {
        type: "paragraph",
        text: "Smaller creators often make up most of a seeding list, because a product matters more to them and their audiences tend to trust their reactions. Follower size is not the selection criterion, though: fit is. How to find micro-influencers for your brand covers sourcing at that size.",
        links: [{ text: "How to find micro-influencers for your brand", href: "/blog/how-to-find-micro-influencers" }],
      },
      { type: "heading", text: "Where to find seeding recipients", id: "where-to-find" },
      {
        type: "list",
        items: [
          "Your tagged posts and mentions: people who already post about you are the most likely to post again.",
          "Category content: creators posting reviews, routines, recipes or setups in your category, found through search, hashtags and Explore.",
          "Competitor tags: creators who've posted about similar products, especially unpaid posts that show genuine interest.",
          "Past applicants and inbound requests: creators who've asked to collaborate, filtered properly rather than accepted wholesale.",
          "Customers who create: repeat buyers who post content and opt in to hear from you.",
          "Discovery tools: targeted searches by niche, location, language and size to fill segments the other sources miss.",
        ],
      },
      {
        type: "paragraph",
        text: "For the last source, Kudozz Discovery lets you filter Instagram creators in India by niche, city, state, language, follower band (including Under 1K, 1K–3K and 3K–5K for very small creators) and minimum engagement rate, and save results into a list per seeding wave. The \"has email\" filter helps when you plan to invite by email, and revealing a contact uses credits only when one is available. What the tool can't tell you is whether a creator would actually enjoy your product; that's what the checks below are for.",
      },
      {
        type: "discovery-cta",
        headline: "Build Your Seeding List by Niche and City",
        body: "Filter Instagram creators by niche, city, language and follower band, from under 1K upwards, and save each seeding wave as its own list. Then check every recipient by hand before you invite them.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Selection checks for each recipient", id: "selection-checks" },
      {
        type: "paragraph",
        text: "Seeding checks are lighter than checks for a paid campaign, because you're risking a product rather than a fee. They still matter: a gifted post from the wrong creator still ties them to your brand.",
      },
      {
        type: "table",
        headers: ["Check", "Why it matters"],
        rows: [
          ["Would they genuinely use it?", "Content only follows if the product fits their life and routine"],
          ["Do they post about products organically?", "Creators who share finds unprompted are likelier to post"],
          ["How do they handle gifted products?", "Look for clear disclosure and honest reactions, not hauls of everything received"],
          ["Is their content a fit for your category?", "A food creator won't help a skincare launch, however good they are"],
          ["Is their audience plausible for your product?", "Check comments and, for priority recipients, ask for Insights"],
          ["Can you deliver to them?", "Serviceable pin code, delivery time, perishability in summer"],
          ["Any brand-safety concerns?", "Past content or conduct you wouldn't want linked to your brand"],
        ],
      },
      {
        type: "paragraph",
        text: "For larger or riskier sends, run the fuller authenticity checks in how to vet influencers. Engagement rate and views in a discovery tool are signals for prioritising, not proof of audience quality.",
        links: [{ text: "how to vet influencers", href: "/blog/how-to-vet-influencers" }],
      },
      { type: "heading", text: "The seeding recipient sheet", id: "recipient-sheet" },
      {
        type: "paragraph",
        text: "Keep every recipient in one sheet from first selection to final result. It prevents duplicate sends, keeps addresses handled responsibly and becomes the record you use to decide who to invite into paid work.",
      },
      {
        type: "template",
        label: "Seeding recipient sheet columns",
        text: "Wave | Handle | Profile link | Segment | Niche | City | Language | Follower band\nWhy selected (one line) | Source (tagged / category / competitor / inbound / customer / discovery)\nInvited (date) | Accepted (yes / no) | Variant, size or shade | Address form received | Consent to use details for shipping only\nShipped (date) | Tracking number | Delivered (date) | Check-in sent (date)\nPosted (yes / no) | Post link | Disclosed (yes / no) | Feedback | Next step (paid offer / reseed / no further action)",
      },
      { type: "heading", text: "Opt-in, the package and the note", id: "package" },
      {
        type: "list",
        items: [
          "Invite before sending. Many creators prefer to opt in, and it saves wasted stock and unwanted parcels.",
          "Ask for size, shade or variant on the address form rather than guessing.",
          "Include how to use the product, the key facts and only claims you can substantiate.",
          "A short personal note that says why you chose them beats a glossy brochure.",
          "Say clearly there's no obligation to post, and what to do if they do: tag the brand and disclose the gift.",
          "Keep packaging sensible; excessive plastic reads badly on camera.",
        ],
      },
      {
        type: "table",
        headers: ["Do", "Don't"],
        rows: [
          ["Say there's no obligation to post", "Include a suggested caption or hashtag list"],
          ["Explain briefly why you chose them", "Send a brief disguised as a note"],
          ["Mention disclosure if they choose to post", "Ask for a post date"],
          ["Ask for honest feedback", "Chase creators who don't post"],
          ["Offer a paid conversation to those who love it", "Expect free content next time"],
        ],
      },
      { type: "heading", text: "Logistics across India and at scale", id: "logistics" },
      {
        type: "list",
        items: [
          "Collect addresses through one simple form with consent to use them only for shipping; creators' addresses are personal data.",
          "Allow longer delivery times for smaller towns and the North-East, and plan perishables carefully in summer.",
          "Send in waves, by city, segment or variant, so you can fix problems from the first wave before the next.",
          "Reserve stock per variant before inviting, so accepted creators don't wait for restocks.",
          "Track every parcel and confirm delivery; lost parcels are a common silent failure.",
          "Keep a daily exceptions list (failed deliveries, wrong items, returns) with one owner.",
          "Cost it fully: product, packaging, shipping, failed deliveries and team time, divided by usable content.",
          "Gifted products can carry tax implications for the business in India, so agree the treatment with your chartered accountant before a large programme.",
        ],
      },
      { type: "heading", text: "When you only have a few samples", id: "few-samples" },
      {
        type: "paragraph",
        text: "Early production runs, high-value products and limited editions often mean a handful of units. With so few, selection becomes everything.",
      },
      {
        type: "table",
        headers: ["Approach", "How it works", "Watch for"],
        rows: [
          ["Prioritise ruthlessly", "Send only to creators whose audiences best match the launch", "With very few units, a paid deal is often fairer than an unpaid gift"],
          ["Loan and return", "The creator uses the product for an agreed period and sends it back", "Agree the period, condition, damage and shipping costs in writing"],
          ["Rotate units", "The same units move from creator to creator on a schedule", "Clean and check each unit; build in buffer days"],
          ["Creator day", "Creators try units at a studio, store or event on one day", "Shared footage can look similar; give each creator a different angle"],
          ["Pre-production units", "Creators receive early samples before final production", "Say clearly that it's a pre-production unit if anything may change"],
        ],
      },
      { type: "heading", text: "Follow-up and disclosure", id: "follow-up" },
      {
        type: "paragraph",
        text: "Send one friendly check-in after delivery to confirm arrival and answer questions. Don't chase for posts; pressure turns a gift into an unpaid job. Anyone who does post should disclose: under ASCI's guidelines a free product is a material connection, and \"Free gift\" is among the accepted labels for gifted products. Remind creators kindly in the note, and don't repost undisclosed content. Rights to reuse gifted content in ads must be agreed separately; see influencer usage rights.",
        links: [{ text: "influencer usage rights", href: "/blog/influencer-usage-rights" }],
      },
      { type: "heading", text: "Measuring and graduating creators to paid work", id: "measurement" },
      {
        type: "table",
        headers: ["Metric", "What it tells you"],
        rows: [
          ["Content rate", "Share of recipients who posted anything, by segment and source"],
          ["Content quality", "Whether posts are usable, on-message and disclosed"],
          ["Reach and engagement of seeded posts", "Earned visibility"],
          ["Cost per piece of content", "Product plus logistics divided by pieces produced"],
          ["Sentiment and product feedback", "What creators liked or disliked"],
          ["Creators moved to paid work", "The programme's pipeline value"],
        ],
      },
      {
        type: "paragraph",
        text: "Break content rate down by source and segment. If creators found through your own tagged posts post far more often than those from cold searches, shift the next wave's sourcing accordingly. Creators who posted, disclosed and kept using the product are your best candidates for paid briefs and, later, ambassador roles; how to source influencers for a brand ambassador programme shows how seeding feeds that pipeline.",
        links: [{ text: "how to source influencers for a brand ambassador programme", href: "/blog/source-influencers-brand-ambassador-programme" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Choosing recipients by follower count instead of category fit and likely use.",
          "Sending unsolicited parcels instead of inviting first.",
          "Guessing sizes or shades and sending the wrong variant.",
          "Including a brief, caption or post date, then calling it a no-obligation gift.",
          "Chasing creators who didn't post.",
          "Not recording who received what, so the same creators get duplicate parcels and nobody knows what worked.",
          "Treating seeding as a substitute for paid content when you need specific posts by a specific date.",
        ],
      },
      { type: "heading", text: "Bringing it together", id: "conclusion" },
      {
        type: "paragraph",
        text: "A seeding programme is only as good as its recipient list. Define segments, source from the places where genuine interest already shows, check each recipient for fit, organic product content, disclosure habits and deliverability, and invite before you ship. Keep everything in one recipient sheet, follow up once, and measure content rate by source so each wave is better chosen than the last. The creators who respond well become your paid partners and ambassadors.",
      },
      {
        type: "paragraph",
        text: "If you'd rather have the selection, packing, shipping and follow-up handled for you, Kudozz runs influencer seeding and gifting campaigns across India.",
        links: [{ text: "influencer seeding and gifting campaigns", href: "/services/influencer-seeding-gifting" }],
      },
    ],
    faqs: [
      {
        question: "How many creators should I send products to?",
        answer:
          "Start with a first wave you can manage carefully, often a few dozen, and expand once you know your content rate and costs. The right size depends on product cost, stock and how many usable pieces of content you need.",
      },
      {
        question: "What if a creator accepts the product but doesn't post?",
        answer:
          "That's part of seeding. Send one friendly check-in after delivery and leave it there. Record the outcome in your sheet; if a segment or source consistently doesn't post, change where you find recipients next time.",
      },
      {
        question: "Can I seed creators with fewer than 1,000 followers?",
        answer:
          "Yes, if their content fits your category and their audience is real and engaged. Very small creators often post gifted products with genuine enthusiasm. Keep the checks the same, and expect smaller reach per post.",
      },
      {
        question: "Do creators have to disclose gifted products in India?",
        answer:
          "Yes. ASCI treats a free product as a material connection, so a post featuring a gifted product needs a clear disclosure label. Mention it in your note and don't reshare posts that aren't disclosed.",
      },
      {
        question: "When should a seeded creator get a paid offer?",
        answer:
          "When they've posted about the product unprompted, disclosed it properly, and their audience responded well. A paid brief is then a natural next step, and a fair way to ask for specific content, dates or usage rights.",
      },
    ],
  },
];
