import type { BlogPost } from "@/content/blog";

/**
 * SMM batch 01 (2026-11-11), writer C: brand voice, multi-location, franchise and content repurposing.
 * Platform facts (Meta store Pages, Page access, Google Business Profile, Instagram and Facebook originality guidance)
 * were checked against official help pages in November 2026; see the batch sources log.
 */
export const smmConsistencyPosts: BlogPost[] = [
  {
    slug: "social-media-brand-voice",
    category: "Social Media Management",
    title: "How to Create a Social Media Brand Voice That Stays Consistent Across Platforms",
    seoTitle: "Social Media Brand Voice: Stay Consistent on Every Platform",
    excerpt:
      "A practical framework for a social media brand voice: voice attributes, vocabulary, emoji and Hinglish rules, the same message written three ways, platform adaptations and a one-page voice guide you can copy.",
    metaDescription:
      "Build a social media brand voice that holds across Instagram, LinkedIn, X and YouTube: voice attributes, Hinglish rules, tone examples and a one-page template.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-11",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: [
      "social media brand voice",
      "brand voice on social media",
      "social media tone of voice",
      "social media communication guidelines",
      "brand consistency across social media",
    ],
    related: ["influencer-brand-consistency", "regional-influencer-marketing-india", "ugc-content-usage-rights"],
    hero: {
      src: "/blog/brand-guides/social-media-brand-voice.svg",
      alt: "Brand voice framework: fixed voice attributes at the centre, with tone adjusting for a launch, a complaint reply and a festive post across four platforms",
    },
    body: [
      {
        type: "paragraph",
        text: "Scroll through most brand accounts and you can tell who wrote what. The Instagram captions are chirpy and full of emoji. The LinkedIn posts read like a press release. The reply to an angry customer sounds like a legal notice. Each one was written by a different person on a different day, and nobody had agreed how the brand is supposed to sound.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A consistent social media brand voice comes from writing down three to five voice attributes, each with a clear 'we are' and 'we are not', plus rules for vocabulary, emoji, slang and language mix. The voice stays fixed everywhere. The tone adjusts to the moment, such as a launch, a complaint or a festival, and the format adjusts to each platform. Put it on one page, use it in every brief and approval, and review it twice a year.",
      },
      { type: "heading", text: "Voice versus tone: the difference that matters", id: "voice-vs-tone" },
      {
        type: "paragraph",
        text: "Voice is who the brand is. It doesn't change between a product launch and an apology. Tone is how that same personality responds to a situation. A friend with a dry sense of humour doesn't crack jokes at a funeral, but you still recognise them. Brands get into trouble when they treat tone as voice and turn the jokes up everywhere, or treat voice as optional and let every writer improvise.",
      },
      {
        type: "paragraph",
        text: "Platform is a third layer. It changes length, structure and how much context you give, not who you are.",
      },
      { type: "heading", text: "Build the voice framework", id: "voice-framework" },
      { type: "subheading", text: "1. Voice attributes with 'we are' and 'we are not'" },
      {
        type: "paragraph",
        text: "Pick three to five adjectives, then pin each one down with what it rules out. 'Friendly' on its own means nothing; every brand thinks it is friendly. The 'we are not' column is what stops a writer drifting. Here is an example for a hypothetical Bengaluru coffee brand, which we'll call Brewline.",
      },
      {
        type: "table",
        headers: ["Attribute", "We are", "We are not", "In practice"],
        rows: [
          ["Warm", "Welcoming, generous with help", "Gushing or over-familiar", "We thank people by name; we don't call everyone 'fam'"],
          ["Knowledgeable", "Clear about how coffee is grown and brewed", "Snobbish or full of jargon", "We explain 'single origin' once, simply, then use it"],
          ["Light-hearted", "Playful about our own coffee habit", "Sarcastic, or joking at customers", "Jokes are about us or coffee, never the person asking"],
          ["Straightforward", "Direct about prices, delays and fixes", "Vague or defensive", "We say what went wrong and what happens next"],
        ],
      },
      { type: "subheading", text: "2. Vocabulary" },
      {
        type: "list",
        items: [
          "Words we use: the product names exactly as written on pack, two or three signature phrases, and the plain word for things ('order', not 'purchase journey').",
          "Words we avoid: superlatives we can't prove ('best', 'No. 1'), health or results claims the legal or regulatory team hasn't cleared, and internal jargon customers wouldn't use.",
          "Style: Indian English spellings, how we write prices (₹499, not Rs. 499/-) and the brand name.",
        ],
      },
      { type: "subheading", text: "3. Emoji and slang rules" },
      {
        type: "list",
        items: [
          "A short approved emoji set, usually three to six, and where they go (end of a line, not mid-sentence).",
          "No emoji in complaint replies, safety notices or anything about money owed.",
          "Slang only if your customers already use it and the writer genuinely understands it. If you have to look it up, leave it out.",
          "No meme formats that mock a group, region or religion.",
        ],
      },
      { type: "subheading", text: "4. Hinglish and regional language rules" },
      {
        type: "paragraph",
        text: "In India this is where voice guides most often fall silent. Decide it explicitly.",
      },
      {
        type: "list",
        items: [
          "Where Hinglish is allowed (for example, Instagram captions and Stories) and where it isn't (LinkedIn, formal announcements, anything legal).",
          "Script: Hinglish in Roman script, or Devanagari? Pick one per platform so the feed doesn't look like two brands.",
          "Regional languages: which ones, for which audiences, and who checks them. A native speaker on your side should approve every regional post; machine translation alone misses tone.",
          "Replies: answer in the language the customer used where your team can do so accurately, otherwise reply in English and say so politely.",
          "Festive greetings: name the festival correctly, use the region's own greeting, and don't assume one festival is celebrated everywhere in the same way.",
        ],
      },
      {
        type: "paragraph",
        text: "If regional content is a big part of your plan, regional and vernacular influencer marketing in India covers how language choices change by audience.",
        links: [{ text: "regional and vernacular influencer marketing in India", href: "/blog/regional-influencer-marketing-india" }],
      },
      { type: "heading", text: "One message, three tones", id: "tone-examples" },
      {
        type: "paragraph",
        text: "Here is the same hypothetical Brewline voice in three situations.",
      },
      { type: "subheading", text: "Launch post (tone: excited, still clear)" },
      {
        type: "quote",
        text: "Our first cold brew concentrate is here. Steeped for 18 hours, it's smooth enough to drink black and strong enough to stand up to milk. One bottle makes about eight glasses. Pour, top up, done. Available on our website from today.",
      },
      { type: "subheading", text: "Complaint reply (tone: calm, accountable, no jokes)" },
      {
        type: "quote",
        text: "Hi Priya, we're sorry your order arrived with a broken seal. That shouldn't happen. Please DM us your order number and we'll sort out a replacement today. We're also checking the batch with our packing team.",
      },
      { type: "subheading", text: "Festive post (tone: warm, light)" },
      {
        type: "quote",
        text: "Happy Diwali from all of us at Brewline. May your homes be bright, your sweets plentiful and your coffee strong enough for the late-night card games. We're closed on Diwali day and back the morning after.",
      },
      {
        type: "paragraph",
        text: "What stays the same: plain sentences, a specific detail, no exaggeration, a practical next step. What changes: energy, humour and how much the brand talks about itself.",
      },
      { type: "heading", text: "Adapting the voice by platform", id: "platform-adaptation" },
      {
        type: "paragraph",
        text: "The table below uses two hypothetical brands, Brewline (consumer) and a B2B payroll software company we'll call Ledgerly, to show how the voice flexes without breaking.",
      },
      {
        type: "table",
        headers: ["Platform", "What changes", "Brewline (consumer)", "Ledgerly (B2B)"],
        rows: [
          ["Instagram", "Short first line; the visual carries the story; Hinglish if allowed", "A playful hook, two lines of detail, one emoji", "Behind-the-scenes of the team, light and human"],
          ["LinkedIn", "Longer, more context, fewer jokes, no slang", "Sourcing stories, farmer partnerships, hiring", "Payroll compliance explainers in plain English"],
          ["X", "One idea per post; quick replies; wit only if it's natural", "Short coffee observations, fast service replies", "Product updates and short answers to questions"],
          ["YouTube", "Titles and descriptions searchable and literal; voice comes through on screen", "'How to make cold brew at home' style titles", "Walkthrough titles that say exactly what's covered"],
        ],
      },
      {
        type: "paragraph",
        text: "Copy that changes shape by platform while sounding like one brand is most of what social media copywriting involves day to day. When you reuse one idea across platforms, how to repurpose social media content for different platforms covers the formats in more detail.",
        links: [
          { text: "social media copywriting", href: "/services/social-media-management#copywriting" },
          { text: "how to repurpose social media content for different platforms", href: "/blog/social-media-content-repurposing" },
        ],
      },
      { type: "heading", text: "A one-page voice guide template", id: "voice-guide-template" },
      {
        type: "paragraph",
        text: "Keep it to one page. A long brand book gets opened once; a single page gets pinned next to the content calendar.",
      },
      {
        type: "template",
        label: "One-page social media voice guide",
        text: "BRAND: [name]          OWNER OF THIS GUIDE: [name, role]          LAST REVIEWED: [month, year]\n\nWHO WE TALK TO\n[One or two sentences on the main audience and how they speak.]\n\nVOICE ATTRIBUTES\n1. [Attribute]: we are [...]; we are not [...]\n2. [Attribute]: we are [...]; we are not [...]\n3. [Attribute]: we are [...]; we are not [...]\n\nTONE BY SITUATION\nLaunch: [...]   Everyday post: [...]   Complaint reply: [...]   Festive: [...]   Sensitive news: [...]\n\nVOCABULARY\nWe say: [...]\nWe never say: [...]\nClaims needing approval: [...]\n\nEMOJI AND SLANG\nApproved emoji: [...]   Never in: [complaints, safety, payments]\nSlang: [allowed / not allowed, examples]\n\nLANGUAGE\nHinglish: [platforms allowed] in [Roman / Devanagari]\nRegional languages: [which, for whom, who approves]\nReplies: [match the customer's language where possible]\n\nPLATFORM NOTES\nInstagram: [...]  LinkedIn: [...]  X: [...]  YouTube: [...]\n\nCREATOR AND UGC CONTENT\n[How we caption, credit and reply around creator posts on our feed]\n\nESCALATE, DON'T REPLY\n[Topics that go to a named person before anyone responds]",
      },
      { type: "heading", text: "When creators and UGC appear on your feed", id: "creators-and-ugc" },
      {
        type: "paragraph",
        text: "Creator and customer content is meant to sound like the creator, not like you. Rewriting a creator's script into brand voice usually makes it less believable. The voice guide still applies to everything around that content.",
      },
      {
        type: "list",
        items: [
          "The caption you write when you share or repost creator content is in your voice. The creator's words in the video stay theirs.",
          "Comment replies under collaboration posts are in your voice, even when the creator's audience is chattier than yours.",
          "Brief creators on what to avoid (claims, competitor digs, sensitive topics), not on how to talk.",
          "Keep disclosure intact. If the content came from a paid or gifted collaboration, it needs a clear label, and stripping it when you repost is a problem.",
          "Only reuse creator or customer content you have the rights to, for the platforms and period agreed.",
        ],
      },
      {
        type: "paragraph",
        text: "If you commission UGC specifically for your feed, brief it with the voice guide attached so the creator knows the boundaries. A UGC content production team can then match edits and captions to your feed without flattening the creator's style.",
        links: [{ text: "UGC content production team", href: "/services/ugc-content-production" }],
      },
      {
        type: "paragraph",
        text: "Disclosure labels for paid or gifted content are set out in ASCI's influencer advertising guidelines. Before reposting anything a creator or customer made, check UGC content usage rights. For the briefing side, how to maintain brand consistency across influencer content goes deeper.",
        links: [
          { text: "ASCI's influencer advertising guidelines", href: "https://www.ascionline.in/social/guidelines/" },
          { text: "UGC content usage rights", href: "/blog/ugc-content-usage-rights" },
          { text: "how to maintain brand consistency across influencer content", href: "/blog/influencer-brand-consistency" },
        ],
      },
      { type: "heading", text: "Keeping it consistent month after month", id: "keeping-it-consistent" },
      {
        type: "list",
        items: [
          "Attach the one-page guide to every content brief, agency or in-house.",
          "Add one line to your approval checklist: 'Does this sound like us?' Reviewers should point to the attribute it breaks, not just say 'doesn't feel right'.",
          "Keep a swipe file of ten posts and five replies that are exactly right. New writers learn faster from examples than from adjectives.",
          "Write saved replies, in voice, for the most common comments and DMs.",
          "Review the guide every six months. Add new words, retire phrases that have gone stale, and note anything that caused confusion.",
          "Name one owner. When two senior people disagree about tone, someone needs the final say.",
        ],
      },
      {
        type: "paragraph",
        text: "If you're setting up the approval step itself, the social media approval process explains who should sign off and when.",
        links: [{ text: "the social media approval process", href: "/blog/social-media-content-approval-process" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Adjectives with no 'we are not'. 'Bold, fun, authentic' describes every brand and guides nobody.",
          "Jokes in complaint replies. Humour reads as dismissive when someone is upset.",
          "Ignoring language. A guide written only for English leaves every Hinglish or regional caption to guesswork.",
          "Forcing creators into brand voice. It makes creator content sound like an ad and defeats the point of using creators.",
          "Writing the guide once and filing it. A voice guide that nobody opens is not a voice guide.",
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Pull your last 30 posts and 20 replies, mark the ones that sound most like the brand you want to be, and write the attributes from those. Then draft the one-page guide, test it by having two people write the same launch post, and fix whatever they interpreted differently.",
      },
      {
        type: "paragraph",
        text: "Brand voice and communication guidelines are part of the strategy work in Kudozz's social media management, but the guide only works if your own team uses it too.",
        links: [{ text: "Kudozz's social media management", href: "/services/social-media-management" }],
      },
    ],
    faqs: [
      {
        question: "How many voice attributes should a brand have?",
        answer:
          "Three to five. Fewer than three tends to be too vague to guide anyone, and more than five becomes hard to remember while writing. Each attribute needs a 'we are not' so writers know the boundary, and at least one example of copy that gets it right.",
      },
      {
        question: "Should a B2B brand use humour on social media?",
        answer:
          "It can, if humour is genuinely part of how the company talks to customers and it's aimed at shared work frustrations rather than at clients. Keep it out of anything about pricing, compliance, outages or complaints. On LinkedIn, a light line within a useful post usually works better than a post that exists only to be funny.",
      },
      {
        question: "Is it fine to use Hinglish in brand captions?",
        answer:
          "Yes, if your customers speak that way and the writer is fluent. Decide which platforms allow it, which script you use, and who reviews it. Hinglish in Instagram captions and English on LinkedIn is a common split. What hurts is switching randomly from post to post, which makes the feed look like two different brands.",
      },
      {
        question: "Who should own the brand voice guide?",
        answer:
          "One named person, usually the marketing head or brand manager. Agencies and freelancers can draft and update it, but the owner decides disputes and signs off changes. Without a single owner, the guide gets rewritten by whoever was last unhappy with a post.",
      },
    ],
  },
  {
    slug: "social-media-management-multiple-locations",
    category: "Social Media Management",
    title: "How to Manage Social Media for Multiple Locations Without Losing Brand Consistency",
    seoTitle: "Social Media for Multiple Locations: Stay On-Brand",
    excerpt:
      "How company-owned retail chains, restaurants, clinics and hotel groups can run social media across many locations: account structures, Facebook store Pages, central versus local content, a planning grid, escalation and reporting by location.",
    metaDescription:
      "Run social media for many locations without losing consistency: account structures, Facebook store Pages, a local content grid, escalation and reporting.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-11",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: [
      "social media management for multiple locations",
      "multi-location social media management",
      "local social media marketing",
      "location-based social media strategy",
      "Facebook store Pages",
    ],
    related: ["franchise-influencer-marketing-gcc", "retail-influencer-marketing-india", "restaurant-cafe-influencer-marketing-india"],
    hero: {
      src: "/blog/brand-guides/social-media-management-multiple-locations.svg",
      alt: "Hub and spoke diagram: a central brand team sets templates and the calendar, while city and store teams add local content, with escalation and reporting flowing back",
    },
    body: [
      {
        type: "paragraph",
        text: "A restaurant group opens its fourth outlet, and the new store manager sets up an Instagram account on his own phone. Within a month there are three versions of the logo online, two different prices for the same thali, and a Google review from an angry customer that nobody has answered. Nothing went wrong on purpose. There was just no plan for how social media works once the business is in more than one place.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Keep brand-level decisions central: account structure, visual templates, voice, offers and the monthly calendar. Let each location supply local material, such as staff, events, menus and photos, through a simple request process. Choose between one national account, national plus city accounts, or a main Page with location Pages based on how different your locations really are. Agree who answers local comments, what gets escalated, and report results by location, not just in total.",
      },
      {
        type: "paragraph",
        text: "This is for businesses that own all their locations: retail chains, restaurant and café groups, clinic and diagnostic chains, salons and hotel groups. The company controls every outlet, so it can set rules directly. If your locations are run by franchisees, the same ideas apply but ownership and permissions get more complicated; social media management for franchise businesses covers that operating model.",
        links: [{ text: "social media management for franchise businesses", href: "/blog/franchise-social-media-management" }],
      },
      { type: "heading", text: "Choose an account structure", id: "account-structure" },
      {
        type: "paragraph",
        text: "There are three common set-ups. Many brands use a mix: one national Instagram account, a Facebook main Page with location Pages, and a Google Business Profile for every outlet.",
      },
      {
        type: "table",
        headers: ["Structure", "Works best for", "Pros", "Cons"],
        rows: [
          ["One national account per platform", "Chains where every location sells the same thing at the same price", "One voice, one follower base, easiest to staff and approve", "Local news, events and city offers get crowded out or ignored"],
          ["National account plus city or regional accounts", "Restaurants, hotels and clinics where cities differ in menu, events or language", "Room for local relevance and regional language", "More accounts to staff; small accounts can look abandoned; follower base splits"],
          ["Main Page with location Pages (Facebook)", "Any business with physical outlets that people search for by address", "Each outlet gets its own address, hours and reviews; central control remains", "Facebook only; still needs someone to keep each Page's details current"],
        ],
      },
      {
        type: "paragraph",
        text: "A rule of thumb: only open a separate city account if that city will reliably produce content every week. A city account with six posts in a year does more damage than none, because it's what people find when they search for you locally.",
      },
      { type: "heading", text: "Platform features for multi-location businesses", id: "platform-features" },
      { type: "subheading", text: "Facebook store Pages" },
      {
        type: "paragraph",
        text: "At the time of writing (November 2026), Meta's Business Help Centre describes a 'stores' set-up for businesses with multiple physical locations. Setting up stores creates a Page structure: a main Page plus a separate store Page for each physical location. According to Meta's help pages:",
        links: [{ text: "Meta's Business Help Centre", href: "https://www.facebook.com/business/help/167222830549113" }],
      },
      {
        type: "list",
        items: [
          "Store details are managed from Store Locations in Meta's business tools, where you can add stores manually, and you need admin or editor rights on the main Page.",
          "Store Pages share the main Page's name, with a location descriptor (by default the city) to tell them apart.",
          "A map of locations can appear on the main Page so customers can find their nearest outlet.",
          "Posts from the main Page can be published to store Pages. By default, that automatic sharing stops for a store Page once it publishes its own post.",
          "Meta also has a separate 'Global Pages' structure, which is meant for different regions or languages, not for physical outlets.",
        ],
      },
      {
        type: "paragraph",
        text: "Some of these help articles note that they apply to the classic Pages experience, and Meta changes its business tools often, so check the current flow in Meta Business Suite before you plan around a specific feature. We couldn't find an equivalent store-Page structure for Instagram in Meta's help documentation at the time of writing, so treat Instagram account structure as a decision you make yourself.",
        links: [
          { text: "these help articles", href: "https://www.facebook.com/business/help/1656255721308266" },
        ],
      },
      { type: "subheading", text: "Google Business Profile, a related channel" },
      {
        type: "paragraph",
        text: "Google Business Profile isn't a social network, but for multi-location businesses it's often where local customers look first: hours, directions, photos and reviews. It sits close enough to social that the two teams should coordinate. At the time of writing, Google's help pages say:",
      },
      {
        type: "list",
        items: [
          "Businesses with 10 or more profiles for the same business can request bulk verification through Business Profile Manager. Agencies holding more than one business in one account can't bulk verify.",
          "Business groups let you organise many profiles; when the group's main owner is verified, eligible profiles in the group are verified too.",
          "Both owners and managers of a profile can reply to reviews. Only owners can add or remove users.",
        ],
      },
      {
        type: "paragraph",
        text: "The details are in Google's bulk verification guide and the owners and managers page. Social media management doesn't automatically include Google profile upkeep, so agree who keeps hours, holiday closures and photos current.",
        links: [
          { text: "Google's bulk verification guide", href: "https://support.google.com/business/answer/4490296?hl=en" },
          { text: "owners and managers page", href: "https://support.google.com/business/answer/3403100?hl=en" },
        ],
      },
      { type: "heading", text: "Central versus local content", id: "central-vs-local" },
      {
        type: "paragraph",
        text: "The most workable model is a hub and spokes. The central team (or agency) owns everything that must look and sound the same. Locations own the raw material only they have.",
      },
      {
        type: "table",
        headers: ["Content", "Created by", "Approved by", "Notes"],
        rows: [
          ["Brand campaigns, launches, national offers", "Central team", "Brand head", "Published nationally and shared to location Pages"],
          ["Templates for local posts (events, new staff, timings)", "Central team", "Brand head, once", "Locations fill in blanks; no free design"],
          ["Local photos, staff stories, events", "Location manager supplies material", "Central team edits and approves", "Shot on phone is fine if a short guide is followed"],
          ["City-specific offers", "Location or regional manager proposes", "Central marketing and finance", "Must not contradict a national offer"],
          ["Regional language posts", "Central team with a native speaker", "Regional manager", "Same visual template, translated copy"],
          ["Replies to comments and reviews", "Central team or trained location staff", "Escalation rules decide", "Saved replies in brand voice"],
        ],
      },
      {
        type: "paragraph",
        text: "A shared voice guide stops twelve location managers writing twelve ways. How to create a social media brand voice that stays consistent includes a one-page template you can give each location.",
        links: [{ text: "How to create a social media brand voice that stays consistent", href: "/blog/social-media-brand-voice" }],
      },
      { type: "heading", text: "A location content planning grid", id: "planning-grid" },
      {
        type: "paragraph",
        text: "Plan the month in a grid: national content in the first column, then one column per city or location. Here's an example for a hypothetical café chain with outlets in Pune, Mumbai and Ahmedabad.",
      },
      {
        type: "table",
        headers: ["Week", "National (all accounts)", "Pune", "Mumbai", "Ahmedabad"],
        rows: [
          ["1", "New monsoon menu launch Reel", "Barista intro (template)", "Live music night poster", "Gujarati-language menu carousel"],
          ["2", "Behind-the-scenes: how we roast", "College-area student offer", "Staff story: head chef", "Weekend brunch photos"],
          ["3", "Customer FAQ carousel", "Local community event photos", "Monsoon timings update", "Navratri hours and décor"],
          ["4", "Month's best reviews (with permission)", "Repost of local creator visit", "New outlet countdown", "Festive pre-order post"],
        ],
      },
      {
        type: "paragraph",
        text: "Each location knows two weeks ahead what it needs to supply, and the central team can see at a glance if a city has gone quiet. Festivals are the obvious reason to plan by location: Navratri, Onam, Durga Puja and Pongal don't land the same way in every city.",
      },
      { type: "heading", text: "Brand consistency checklist", id: "consistency-checklist" },
      {
        type: "list",
        items: [
          "Every account uses the same logo file, profile photo rules and bio format (brand name, location, hours or link).",
          "Account handles follow one naming pattern, such as @brand and @brand.pune.",
          "A shared folder of approved templates, fonts and colour codes; locations don't design from scratch.",
          "One voice guide, with saved replies for common questions.",
          "Prices, offers and timings checked against the central offer sheet before posting.",
          "Admin access held by the company, never only on a store manager's personal account.",
          "A quarterly sweep of every account: outdated bios, broken links, old offers still pinned.",
        ],
      },
      { type: "heading", text: "Local community management and escalation", id: "community-management" },
      {
        type: "paragraph",
        text: "Local comments and reviews are where consistency breaks most often. A store manager under pressure replies defensively, or nobody replies at all. Agree three things up front.",
      },
      {
        type: "list",
        items: [
          "Who answers what: routine questions (timings, parking, menu) can be handled centrally from saved replies; location-specific facts get checked with the outlet first.",
          "What escalates, and to whom: refunds, hygiene or safety complaints, medical questions at a clinic, staff behaviour and anything that mentions legal action go to a named person, not a public reply thread.",
          "How fast: an agreed response window for working hours, and what happens on weekends and holidays.",
        ],
      },
      {
        type: "paragraph",
        text: "Community management and customer support are different jobs, and multi-location brands feel the difference sharply. Community management vs customer support explains where to draw that line. Agency community management usually covers comments within agreed hours and scope, with sensitive queries passed to your team.",
        links: [
          { text: "Community management vs customer support", href: "/blog/community-management-vs-customer-support" },
          { text: "community management", href: "/services/social-media-management#community-management" },
        ],
      },
      { type: "heading", text: "Reporting by location", id: "reporting-by-location" },
      {
        type: "paragraph",
        text: "A single national number hides the location that has gone quiet and the one that's doing something worth copying. Report in two layers.",
      },
      {
        type: "table",
        headers: ["Layer", "What to show", "Who it's for"],
        rows: [
          ["National", "Reach, engagement and follower trends for brand accounts; best-performing content types", "Founders and marketing head"],
          ["By location", "Posts published versus plan, response time to comments and reviews, local post performance, review rating trend", "Regional and store managers"],
          ["Exceptions", "Locations below plan, unanswered reviews, repeated complaint themes", "Operations, so they can fix the cause"],
        ],
      },
      {
        type: "paragraph",
        text: "Only report what the platforms actually make available for each account type. If you want footfall or bookings linked to social, that needs tracking set up on your side, such as location-specific booking links or codes.",
      },
      { type: "heading", text: "Practical recommendations by business type", id: "recommendations" },
      {
        type: "list",
        items: [
          "Restaurants and cafés: national account for brand and menu launches, local Pages or accounts only where outlets differ in menu or events.",
          "Retail chains: usually one national Instagram account plus Facebook store Pages and a Google profile per store. Store openings and local events go through templates.",
          "Clinics and diagnostic chains: keep posting central, because health claims need careful review, and route every patient question to a private channel.",
          "Hotels and hospitality groups: a group account plus one account per property often makes sense, because each property has its own story, but share templates and a voice guide across all of them.",
        ],
      },
      {
        type: "paragraph",
        text: "Local creator visits are a good source of material for location accounts; restaurant influencer marketing covers how to plan them.",
        links: [{ text: "restaurant influencer marketing", href: "/blog/restaurant-cafe-influencer-marketing-india" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Letting each new outlet create its own accounts on personal phones and emails.",
          "Opening city accounts nobody has time to feed.",
          "Running a national offer on Instagram while a local Page still shows last month's price.",
          "Treating reviews as someone else's job because they're on Google, not Instagram.",
          "Reporting only totals, so struggling locations stay invisible.",
          "Translating national posts word for word instead of adapting them for the region.",
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "List every account, Page and profile that exists today, including the ones staff set up on their own, and who has admin access to each. Decide which to keep, merge or close, then set up the planning grid for next month with one column per location.",
      },
      {
        type: "paragraph",
        text: "A managed social media service can run the central layer and the calendar for you, but the location teams still need to supply local material and own their escalations.",
        links: [{ text: "A managed social media service", href: "/services/social-media-management" }],
      },
    ],
    faqs: [
      {
        question: "Should every store have its own Instagram account?",
        answer:
          "Usually not. Separate accounts make sense only when a location has genuinely different content, such as its own events, menu or language, and someone who will post every week. For most retail chains, one national account plus local Pages or profiles for addresses and hours is easier to keep consistent and keeps followers in one place.",
      },
      {
        question: "Can store managers post directly to the brand's accounts?",
        answer:
          "They can, with partial access and clear templates, but most chains find it safer for managers to send material and for a central team to publish. If managers do post, give them task-based access rather than full control, a short template library, and a rule that offers and prices are checked before posting.",
      },
      {
        question: "How do we handle a negative review at one outlet?",
        answer:
          "Reply publicly in brand voice, acknowledge the problem, and move the details to a private channel. Check the facts with the outlet before promising anything. Log the complaint so operations can see whether the same issue is repeating at that location. Never argue publicly or reveal customer details in the reply.",
      },
      {
        question: "What happens to Page access when a store manager leaves?",
        answer:
          "Remove their access on the same day, from the business portfolio and from any Page or profile roles they held. This is only easy if the company, not the manager, owns the accounts. Keep an access register listing every person with access to every account, and review it whenever staff change.",
      },
      {
        question: "How many posts should each location publish?",
        answer:
          "There isn't a correct number. Agree a rhythm each location can sustain, such as one local post a week alongside shared national content, and measure whether locations keep to it. A smaller, steady rhythm looks better to customers than a burst of posts followed by months of silence.",
      },
    ],
  },
  {
    slug: "franchise-social-media-management",
    category: "Social Media Management",
    title: "Social Media Management for Franchise Businesses: A Practical Operating Model",
    seoTitle: "Franchise Social Media Management: An Operating Model",
    excerpt:
      "An operating model for franchise social media: who does what between franchisor and franchisee, what the agreement or brand manual should address, local approvals, admin access, reviews, onboarding and exits, and how funding is usually framed.",
    metaDescription:
      "A franchise social media operating model: franchisor and franchisee roles, agreement questions, local approvals, admin access, reviews, onboarding and exits.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-11",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: [
      "social media management for franchises",
      "franchise social media marketing",
      "social media strategy for franchises",
      "franchise brand consistency",
      "franchise social media policy",
    ],
    related: ["franchise-influencer-marketing-gcc", "influencer-brand-consistency", "retail-influencer-marketing-india"],
    hero: {
      src: "/blog/brand-guides/franchise-social-media-management.svg",
      alt: "Franchise social media operating model: franchisor owns brand, accounts and guidelines; franchisee supplies local content and responds locally; an approval gate sits between them",
    },
    body: [
      {
        type: "paragraph",
        text: "A franchisee in Indore runs a '50% off everything' weekend on a Facebook Page she created herself, using a logo she downloaded from Google. The franchisor finds out when customers in Bhopal start asking for the same deal. She wasn't acting in bad faith. Nobody had told her what she could post, where, or who had to approve it.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Franchise social media works when the franchisor owns the brand accounts, the guidelines and the template library, and franchisees contribute local content and local responses inside those rules. Write down who owns which accounts, who holds admin access, how local posts and offers get approved, how reviews and complaints are handled, and what happens to access when a franchisee joins or leaves. Check how all of this fits your franchise agreement with a lawyer.",
      },
      {
        type: "paragraph",
        text: "In a company-owned chain, the head office can simply decide. In a franchise, the person running the outlet owns a business of their own, often pays into marketing, and wants local visibility. The brand, meanwhile, belongs to the franchisor and has to look the same in every city. Social media sits right on that line, which is why it needs explicit rules rather than goodwill.",
      },
      {
        type: "paragraph",
        text: "If your outlets are all company-owned, the simpler model in how to manage social media for multiple locations will fit better.",
        links: [{ text: "how to manage social media for multiple locations", href: "/blog/social-media-management-multiple-locations" }],
      },
      { type: "heading", text: "Franchisor versus franchisee responsibilities", id: "responsibilities" },
      {
        type: "paragraph",
        text: "This is a starting split. Your agreement may already set some of it, and some networks give franchisees more freedom.",
      },
      {
        type: "table",
        headers: ["Area", "Franchisor", "Franchisee"],
        rows: [
          ["Brand accounts (national)", "Owns, runs and publishes", "Shares posts, suggests local stories"],
          ["Local Pages or accounts", "Owns or co-owns; holds full admin control", "Posts within guidelines, with partial access if allowed"],
          ["Guidelines and templates", "Writes, updates and trains", "Uses them; flags gaps"],
          ["National campaigns and offers", "Plans and publishes", "Implements in store; doesn't change terms"],
          ["Local offers and events", "Approves and sets limits", "Proposes, runs and reports results"],
          ["Local photos and video", "Sets quality and consent rules", "Supplies material from the outlet"],
          ["Comments and reviews", "Sets response rules, handles escalations", "Answers local factual questions; fixes local issues"],
          ["Serious complaints and crises", "Leads the response", "Reports immediately; doesn't comment publicly"],
          ["Reporting", "Network-level and per-outlet reports", "Shares local sales or bookings data where agreed"],
        ],
      },
      { type: "heading", text: "What the agreement or brand manual should address", id: "agreement-questions" },
      {
        type: "paragraph",
        text: "This isn't legal advice, and franchise agreements vary. Use these as questions to raise with your lawyer when drafting or renewing agreements, or when updating the brand manual that the agreement refers to.",
      },
      {
        type: "list",
        items: [
          "Who owns social media accounts, handles and Pages that use the brand name, including ones a franchisee creates?",
          "Can a franchisee create their own accounts at all, and if so, under what naming rules?",
          "Who must hold admin rights, and does the franchisor keep full control of every branded account?",
          "What content needs approval before posting, and what can a franchisee post freely?",
          "Who owns photos, videos and customer content created at the outlet, and can the franchisor reuse them network-wide?",
          "What consent is needed before posting staff or customers, especially children?",
          "Can franchisees run paid ads or work with influencers locally, and with whose approval?",
          "What happens to accounts, followers and content when the agreement ends, is transferred or is terminated?",
          "How are marketing contributions collected, spent and reported?",
        ],
      },
      { type: "heading", text: "Centralised content guidelines", id: "content-guidelines" },
      {
        type: "paragraph",
        text: "Franchisees aren't marketers by trade. The guidelines need to be short, visual and specific, with examples of good and bad posts. A useful pack includes:",
      },
      {
        type: "list",
        items: [
          "A one-page voice guide with saved replies.",
          "Editable templates for the posts franchisees make most: new staff, local events, timings, festive greetings, store milestones.",
          "Photo rules: lighting, angles, what must never be in frame (competitor products, untidy kitchens, customers who haven't agreed).",
          "A list of claims and words that always need approval, such as health, price comparisons and 'best in town'.",
          "Disclosure rules if franchisees host local creators, in line with ASCI's influencer advertising guidelines.",
          "A short 'do not post' list: politics, religion-related debate, competitor criticism, internal disputes.",
        ],
      },
      {
        type: "paragraph",
        text: "The brand voice template is in how to create a social media brand voice, and ASCI's guidance is on its own site.",
        links: [
          { text: "how to create a social media brand voice", href: "/blog/social-media-brand-voice" },
          { text: "ASCI's guidance", href: "https://www.ascionline.in/social/guidelines/" },
        ],
      },
      { type: "heading", text: "A local content approval workflow", id: "approval-workflow" },
      {
        type: "paragraph",
        text: "Approval should be fast for low-risk posts and careful for anything involving price, claims or people. Three tiers usually cover it.",
      },
      {
        type: "table",
        headers: ["Tier", "Examples", "Approval", "Suggested turnaround"],
        rows: [
          ["Green: template posts", "Staff welcome, timings, event using an approved template", "None, or a spot check after posting", "Same day"],
          ["Amber: local content", "Original local photos, community events, local creator visit", "Central marketing approves", "One to two working days"],
          ["Red: offers and claims", "Discounts, contests, health or performance claims, anything with prices", "Central marketing plus whoever owns pricing", "Agreed in advance; plan a week ahead"],
        ],
      },
      {
        type: "paragraph",
        text: "Use one shared request form or tracker so nothing gets approved over a WhatsApp voice note that nobody can find later. The social media approval process covers sign-off stages and tools in more detail.",
        links: [{ text: "The social media approval process", href: "/blog/social-media-content-approval-process" }],
      },
      { type: "heading", text: "Page ownership and admin access", id: "page-ownership" },
      {
        type: "paragraph",
        text: "Most franchise social media problems come back to access. The safest principle is that the brand holds full control of every branded asset, and franchisees get only the access their role needs. At the time of writing (November 2026), the platforms support this:",
      },
      {
        type: "list",
        items: [
          "Meta: in a business portfolio, a person can be given full control of a Page or partial, task-based access (for example, creating content or responding to messages). Meta notes that a Page must have at least one person with full control, and people with full control can remove anyone else.",
          "Google Business Profile: profiles have owners and managers. Both can reply to reviews, but only owners can add or remove users, and the primary owner can't be removed until ownership is transferred.",
        ],
      },
      {
        type: "paragraph",
        text: "Meta explains access levels in its Page access help article, and Google covers profile roles in its owners and managers page. Keep an access register: every account, every person with access, their role, and the date it was granted.",
        links: [
          { text: "Page access help article", href: "https://www.facebook.com/help/289207354498410" },
          { text: "owners and managers page", href: "https://support.google.com/business/answer/3403100?hl=en" },
        ],
      },
      { type: "heading", text: "Local offers, reviews and complaints", id: "offers-reviews-complaints" },
      { type: "subheading", text: "Local offers" },
      {
        type: "paragraph",
        text: "Local offers are where franchisees most want freedom and where the network gets hurt most when they clash. Set a menu of pre-approved offer types and limits, and require that every offer post states which outlet it applies to and when it ends. Never let a local offer use national wording that suggests it's available everywhere.",
      },
      { type: "subheading", text: "Reviews" },
      {
        type: "paragraph",
        text: "Decide whether the central team or the franchisee replies to reviews on local Pages and profiles, and give whoever replies a bank of saved responses. Franchisees should not ask staff, friends or family to post reviews, and nobody should offer incentives in exchange for positive ones only.",
      },
      { type: "subheading", text: "Complaints" },
      {
        type: "paragraph",
        text: "A complaint about one outlet becomes a complaint about the brand within hours. Franchisees should fix the local issue, but public replies to serious complaints (food safety, injury, discrimination, legal threats) should come from the franchisor. For incidents that escalate, how to build a social media crisis response plan sets out severity levels; serious cases need legal and PR advice too.",
        links: [{ text: "how to build a social media crisis response plan", href: "/blog/social-media-crisis-management-plan" }],
      },
      { type: "heading", text: "Onboarding and exiting franchisees", id: "onboarding-exiting" },
      { type: "subheading", text: "When a franchisee joins" },
      {
        type: "list",
        items: [
          "Create or claim the outlet's location Page and Google Business Profile under the brand's business accounts.",
          "Grant the franchisee's named staff the agreed access level, never full control by default.",
          "Run a short training session on templates, approvals and escalation.",
          "Add the outlet to the content planning grid and reporting.",
          "Check for any accounts the franchisee already created under the brand name and agree what happens to them.",
        ],
      },
      { type: "subheading", text: "When a franchisee leaves or an outlet changes hands" },
      {
        type: "list",
        items: [
          "Remove the departing franchisee and their staff from every account on the access register, the same day the exit takes effect.",
          "Change any shared passwords and recovery emails or phone numbers.",
          "Update location details, hours or closure notices on Facebook and Google.",
          "Archive or hand over content as the agreement says.",
          "Search for unofficial accounts using the brand name for that city and report or reclaim them.",
        ],
      },
      { type: "heading", text: "Funding: central fund or local spend", id: "funding" },
      {
        type: "paragraph",
        text: "How social media is paid for is a commercial decision for each network, and the agreement usually decides it. These are the common approaches and the questions each raises.",
      },
      {
        type: "table",
        headers: ["Approach", "What it covers", "Questions to settle"],
        rows: [
          ["Central marketing fund", "Brand accounts, templates, national content, agency fees", "How contributions are set, how spend is reported to franchisees, whether local content is included"],
          ["Local spend by franchisee", "Local events, outlet shoots, local creators or ads", "Minimum or maximum spend, approval rules, whether the franchisor provides suppliers"],
          ["Mixed", "Central for brand-level work, local for outlet-level activity", "Where the line sits, and who pays for local content the central team produces"],
        ],
      },
      {
        type: "paragraph",
        text: "Whichever you choose, share a simple report of what the fund paid for. Franchisees who can see the work are much more willing to follow the rules that come with it.",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Letting franchisees create accounts in their own names, then discovering the brand can't access them.",
          "A brand manual with no social media section, or one written before Reels existed.",
          "Approval rules so slow that franchisees stop asking and post anyway.",
          "No exit checklist, so former franchisees keep posting under the brand name.",
          "Treating every franchisee post as a risk instead of giving them safe templates.",
          "Funding arguments that drag on because nobody reports what central money was spent on.",
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Build the access register first: every branded account in the network, who owns it and who can log in. Then write the three-tier approval rules and a starter template pack, and review the agreement questions with your lawyer before the next renewal or new signing.",
      },
      {
        type: "paragraph",
        text: "Social media management from Kudozz can run the central accounts, templates and calendar for a franchise network; franchise influencer marketing in the GCC covers the creator side for multi-location brands in that region.",
        links: [
          { text: "Social media management from Kudozz", href: "/services/social-media-management" },
          { text: "franchise influencer marketing in the GCC", href: "/blog/franchise-influencer-marketing-gcc" },
        ],
      },
    ],
    faqs: [
      {
        question: "Should franchisees have their own Instagram accounts?",
        answer:
          "Only if the network decides local accounts are worth maintaining, and then under brand-owned business accounts with a naming pattern such as @brand.city. Many franchisors keep Instagram national and give franchisees local Facebook Pages and Google profiles instead, which carry addresses, hours and reviews without splitting the main follower base.",
      },
      {
        question: "Who owns followers when a franchisee leaves?",
        answer:
          "That depends on your agreement and on who owns the account. If the brand's business portfolio owns the account and the franchisee only had access, the account stays with the brand. If the franchisee created it personally, it gets messy. This is exactly the question to settle with your lawyer before the situation arises.",
      },
      {
        question: "Can franchisees work with local influencers?",
        answer:
          "Many networks allow it with approval, because local creators can drive footfall. Set rules on approval, budget, disclosure in line with ASCI's guidelines, which claims are allowed, and who owns the content afterwards. The franchisor should see the brief before it goes out.",
      },
      {
        question: "How do we stop franchisees posting off-brand content?",
        answer:
          "Make the right thing easy. Give them templates for the posts they make most, a fast approval route for anything else, and examples of good posts. Then keep admin control, so off-brand posts can be removed. Most off-brand content comes from franchisees who had no template, not from deliberate rule-breaking.",
      },
      {
        question: "Does a franchise network need one agency or one per region?",
        answer:
          "One central team keeps the voice, templates and calendar consistent. Some networks add regional support for language or local events. Whatever the structure, the franchisor should hold the accounts and guidelines so changing a supplier doesn't mean losing access or starting again.",
      },
    ],
  },
  {
    slug: "social-media-content-repurposing",
    category: "Social Media Management",
    title: "How to Repurpose Social Media Content for Different Platforms Without Repeating the Same Post",
    seoTitle: "Social Media Content Repurposing Across Platforms",
    excerpt:
      "How to turn one piece of brand-owned content into posts that suit each platform: a repurposing matrix, one product Reel adapted six ways, a reuse and refresh workflow, what not to repurpose, and what Instagram and Facebook say about originality.",
    metaDescription:
      "Repurpose brand content across platforms without repeating yourself: a repurposing matrix, a product Reel adapted six ways, and Meta's originality guidance.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-11",
    lastReviewed: "November 2026",
    readingTime: "8 min read",
    tags: [
      "social media content repurposing",
      "repurpose content across social media",
      "cross-platform content strategy",
      "social media content distribution",
      "content repurposing matrix",
    ],
    related: ["repurpose-influencer-content", "influencer-usage-rights", "ugc-content-usage-rights"],
    hero: {
      src: "/blog/brand-guides/social-media-content-repurposing.svg",
      alt: "One product Reel at the centre adapted into a LinkedIn post, YouTube Short, carousel, Pinterest pin and Story",
    },
    body: [
      {
        type: "paragraph",
        text: "Your team spends two days making a product Reel. It goes up on Instagram, the same file goes to YouTube Shorts and Facebook, the caption gets pasted into LinkedIn, and that's the end of it. On LinkedIn it looks out of place, on YouTube the title is a string of hashtags, and the next month everyone is back to a blank page.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Repurposing means taking the idea, footage and information in one piece of content and rebuilding it for how each platform is used: a carousel for saving, a LinkedIn post for context, a Short with a searchable title, a pin that points to a product page. Change the hook, length, framing and caption, not just the file size. Export clean files without other apps' watermarks, and only reuse creator or customer content within the rights you agreed.",
      },
      { type: "heading", text: "Repurposing is not reposting", id: "repurpose-vs-repost" },
      {
        type: "paragraph",
        text: "Reposting is the same file and caption everywhere. Repurposing starts from the question 'what does someone on this platform want from this?' A person on LinkedIn wants to understand why the product exists or how the business made it. Someone on Pinterest is planning a purchase or a project. Someone on Instagram Stories wants something quick and a reason to tap.",
      },
      {
        type: "paragraph",
        text: "This guide is about your brand's own content: footage you shot, designs you made, articles and product information you own. Creator content follows the rules you agreed with each creator; influencer content repurposing covers that separately.",
        links: [{ text: "influencer content repurposing", href: "/blog/repurpose-influencer-content" }],
      },
      { type: "heading", text: "A content repurposing matrix", id: "repurposing-matrix" },
      {
        type: "paragraph",
        text: "Map each type of source asset to what it becomes on each platform. Not every cell needs filling; skip platforms where the idea doesn't fit.",
      },
      {
        type: "table",
        headers: ["Source asset", "Instagram", "LinkedIn", "YouTube", "Pinterest"],
        rows: [
          ["Product Reel (30–60 sec)", "Reel, plus Story cut with a poll or link", "Short native video with a 'why we made this' post", "Short with a literal, searchable title", "Video or image pin linking to the product page"],
          ["Long-form video or webinar", "Three or four clips as Reels; a quote carousel", "Key insight as a text post; one clip", "Full video plus chapters; Shorts from highlights", "Step-by-step image pins"],
          ["Blog article or guide", "Carousel of the main steps", "Summary post or document-style carousel", "Explainer script for a Short", "Infographic pin linking to the article"],
          ["Customer FAQ or comments", "Q&A Reel or Story answers", "Post on what customers ask most", "Shorts answering one question each", "FAQ pin for planning-stage buyers"],
          ["Founder or team story", "Behind-the-scenes Reel", "First-person post from the founder or company page", "Longer interview if the story is strong", "Usually skip"],
          ["Event or store opening", "Reel and Story highlights", "Post on what it means for the business", "Recap only if it's useful to watch later", "Usually skip"],
        ],
      },
      { type: "heading", text: "One product Reel, six outputs: a hypothetical example", id: "worked-example" },
      {
        type: "paragraph",
        text: "Say a Jaipur home-décor brand, which we'll call Chhapa, shoots a 45-second Reel showing how one block-printed cushion cover is made: carving the block, mixing natural dye, printing, washing and the finished piece on a sofa.",
      },
      { type: "subheading", text: "Instagram Reel (the source)" },
      {
        type: "paragraph",
        text: "Hook in the first second ('This cushion took nine days'), quick cuts, on-screen text, a caption that tells the story and ends with where to buy.",
      },
      { type: "subheading", text: "LinkedIn post" },
      {
        type: "paragraph",
        text: "Posted from the company page or the founder's profile, with a shorter cut of the video. The text talks about the artisan partnership, why the brand chose natural dyes and what that means for lead times. No hashtag blocks, no Hinglish, no emoji beyond the voice guide's limit.",
      },
      { type: "subheading", text: "YouTube Short" },
      {
        type: "paragraph",
        text: "Same footage, re-edited to open on the printing step, which is the most satisfying moment to watch. The title is literal and searchable: 'How hand block printing works (Jaipur cushion cover)'. The description names the technique and links to the product.",
      },
      { type: "subheading", text: "Instagram carousel" },
      {
        type: "paragraph",
        text: "Six frames pulled from the footage: block, dye, print, wash, dry, finished. One short line per slide. Carousels get saved for reference, so the last slide covers care instructions.",
      },
      { type: "subheading", text: "Pinterest pin" },
      {
        type: "paragraph",
        text: "A vertical styled image of the finished cushion in a room, with a short text overlay ('Hand block-printed cushion covers') and a link straight to the product page. The description reads like a search phrase, not a caption.",
      },
      { type: "subheading", text: "Instagram Story" },
      {
        type: "paragraph",
        text: "Three frames: a ten-second clip of the printing, a poll ('Indigo or madder red?'), and a link sticker to the collection. Stories are where you can be quickest and most informal.",
      },
      {
        type: "paragraph",
        text: "One shoot, six pieces of content, none of them a copy. Planning shoots this way is a big part of Reels and short-form video work: scripting with the cut-downs in mind before anyone presses record.",
        links: [{ text: "Reels and short-form video work", href: "/services/social-media-management#reels-short-form-video" }],
      },
      { type: "heading", text: "A reuse and refresh workflow", id: "workflow" },
      {
        type: "list",
        items: [
          "Plan the cut-downs at the brief stage. Note which platform versions you need before the shoot, so you capture vertical and horizontal angles, close-ups and clean audio.",
          "Keep a master folder per asset: raw footage, the edited source, project files and clean exports without text or logos baked in.",
          "Tag every asset in a simple library: product, theme, date, platforms used, performance notes and any rights limits.",
          "Adapt, don't resize: new hook, new length, new caption and platform-appropriate on-screen text for each version.",
          "Stagger publishing over days or weeks rather than posting everywhere at once, so each platform version gets your full attention in comments.",
          "Review after 30 days: which version worked where, and why.",
          "Refresh evergreen winners every few months with a new hook, updated price or packaging, or a new angle, and retire anything that's out of date.",
        ],
      },
      {
        type: "paragraph",
        text: "If you're building the whole production pipeline around this, how to build a repeatable social media content workflow covers ideation, batching and capacity.",
        links: [{ text: "how to build a repeatable social media content workflow", href: "/blog/social-media-content-workflow" }],
      },
      { type: "heading", text: "What not to repurpose", id: "what-not-to-repurpose" },
      {
        type: "list",
        items: [
          "Time-bound offers, prices and dates that have passed.",
          "Product information that has changed: old packaging, discontinued variants, revised ingredients or specs.",
          "Trend-led content where the trend has moved on; it looks dated on a second platform.",
          "Replies to a specific customer or complaint, even if they went well.",
          "Anything with people who only agreed to appear on one platform or for one campaign, including staff who have since left.",
          "Content that relied on licensed music, fonts or footage you don't have rights to use elsewhere.",
        ],
      },
      { type: "heading", text: "Watermarks and cross-posting: what the platforms say", id: "watermarks-cross-posting" },
      {
        type: "paragraph",
        text: "At the time of writing (November 2026), Meta's own guidance is clear on a few points. Instagram's creator FAQ says it encourages original content for the best reach, that it is less likely to recommend reposts of a reel already on Instagram or content with noticeable watermarks, and it advises removing third-party watermarks from Reels.",
        links: [{ text: "Instagram's creator FAQ", href: "https://creators.instagram.com/faq?locale=en_US" }],
      },
      {
        type: "paragraph",
        text: "Facebook's July 2025 post on combating unoriginal content is aimed at accounts that reuse other creators' work. It says you can share the same content across your own Pages or profiles, and that stitching clips together or adding a watermark doesn't count as a meaningful enhancement of someone else's content.",
        links: [{ text: "Facebook's July 2025 post on combating unoriginal content", href: "https://creators.facebook.com/blog/combating-unoriginal-content" }],
      },
      {
        type: "paragraph",
        text: "What follows from that is practice, not platform policy: export clean files from your editing software rather than downloading a video from one app to upload to another, avoid posting the identical Reel to the same platform twice, and treat auto-cross-posting tools as a convenience for low-priority posts rather than your main distribution method. Platforms change ranking signals often, so recheck their guidance every few months.",
      },
      { type: "heading", text: "Creator and UGC content: only within agreed rights", id: "creator-ugc-rights" },
      {
        type: "paragraph",
        text: "If a Reel on your feed was made by a creator or a customer, you can only repurpose it as far as your agreement allows: which platforms, for how long, whether you can edit it, and whether it can run as an ad. A creator who agreed to an Instagram collaboration post hasn't automatically agreed to appear in a YouTube Short or a Pinterest pin.",
      },
      {
        type: "paragraph",
        text: "Check influencer usage rights before you cut creator footage into new formats. When you plan to repurpose from the start, commissioning content through UGC content production with multi-platform rights agreed upfront avoids renegotiating later.",
        links: [
          { text: "influencer usage rights", href: "/blog/influencer-usage-rights" },
          { text: "UGC content production", href: "/services/ugc-content-production" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Pasting the Instagram caption, with all its hashtags, into LinkedIn and YouTube.",
          "Uploading a video downloaded from one app, complete with its watermark, to another.",
          "Using the same hook on every platform when audiences behave differently.",
          "Repurposing everything instead of the content that actually performed or answers a real question.",
          "Losing the raw files, so every adaptation has to be made from a compressed export.",
          "Reusing creator or customer content beyond the platforms and period agreed.",
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Pick your three best-performing posts from the last quarter, map each one through the matrix, and make two adapted versions of each. Set up the asset library as you go, so next month's shoot is planned with the cut-downs in mind.",
      },
      {
        type: "paragraph",
        text: "Planning one shoot for several platforms is part of our social media management scope, from scripting through to platform-specific publishing.",
        links: [{ text: "our social media management scope", href: "/services/social-media-management#scope" }],
      },
    ],
    faqs: [
      {
        question: "Is it bad to post the same video on Instagram and YouTube Shorts?",
        answer:
          "Not in itself, if it's your own content, exported cleanly without another app's watermark. It usually performs better with a platform-specific opening, title and description. YouTube viewers often arrive through search, so a literal title helps there, while Instagram relies more on the first second of the video.",
      },
      {
        question: "How long should we wait before reposting old content?",
        answer:
          "There's no platform rule we can point to. In practice, refresh rather than repost: give an evergreen piece a new hook, update anything out of date, and space it out by a few months. Avoid posting an identical Reel to the same account twice, since Instagram says it's less likely to recommend reposts of reels already on the platform.",
      },
      {
        question: "Do we need separate shoots for each platform?",
        answer:
          "Usually not. One well-planned shoot can cover most platforms if you capture vertical and horizontal framing, close-ups, clean audio and a few still frames. LinkedIn or long-form YouTube sometimes need an extra interview or explainer segment, which can be filmed on the same day.",
      },
      {
        question: "Can we turn a customer's tagged post into a Pinterest pin?",
        answer:
          "Only with the customer's permission for that use. A tag or a repost to Stories doesn't give you the right to reuse their photo or video on other platforms or in ads. Ask in writing, say where and for how long you'll use it, and credit them as agreed.",
      },
    ],
  },
];
