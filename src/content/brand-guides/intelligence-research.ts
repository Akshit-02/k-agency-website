import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";
import { SOURCES } from "@/content/creator-resources/shared";
import { INTEL_PUBLISHED, INTEL_REVIEWED } from "@/content/brand-guides/intelligence-data";

const META_BRANDED_CONTENT_LIBRARY = "https://www.socialmediatoday.com/news/meta-adds-branded-content-campaign-oversight-to-ads-library/691703/";

/**
 * Creator intelligence cluster, market research layer (1182–1186, 1188, 1189). 1187 (creator landscape
 * analysis) is consolidated into influencer-market-mapping as its niche deep-dive section.
 */
export const intelligenceResearchPosts: BlogPost[] = [
  {
    slug: "social-listening-creator-discovery",
    category: "Influencer Marketing",
    title: "Social Listening for Creator Discovery: How Brands Can Find Influencers Through Conversations",
    seoTitle: "Social Listening for Creator Discovery: Find Influencers",
    excerpt:
      "How to find creators by starting with conversations instead of a database: building topic queries, identifying voices that shape a conversation, the Conversation-to-Creator workflow, scoring conversation influence and turning finds into outreach.",
    metaDescription:
      "Use social listening to discover influencers through conversations: topic queries, finding voices that shape discussion, a workflow, scoring and outreach.",
    author: AUTHOR,
    publishedAt: INTEL_PUBLISHED,
    lastReviewed: INTEL_REVIEWED,
    readingTime: "6 min read",
    tags: ["social listening for creator discovery", "find influencers through social listening", "conversation-based influencer discovery", "discover creators by topic", "listening-led influencer search"],
    related: ["brand-mention-monitoring", "influencer-social-listening", "influencer-search-tools"],
    hero: {
      src: "/blog/brand-guides/social-listening-creator-discovery.svg",
      alt: "Conversation-to-creator workflow: topic queries surface conversations, which reveal the voices that shape them",
    },
    body: [
      {
        type: "paragraph",
        text: "Database search starts with creators and asks what they talk about. Listening-led discovery starts with what your customers talk about and asks who shapes those conversations. It finds a different kind of creator: the person people quote, tag and ask for advice when a topic comes up, who may not look impressive on a follower filter at all.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Social listening helps influencer discovery by tracking conversations about your category's problems, questions and occasions, then identifying the creators who start, shape or get referenced in those conversations. Build queries in customer language (and regional languages), collect posts and comments over a few weeks, rank voices by how often they're engaged with and referenced on the topic rather than by followers, then vet the strongest candidates as you would any creator. It is slower than filtering a database, and it finds creators with genuine topic authority.",
      },
      {
        type: "paragraph",
        text: "For wider uses of listening (content angles, campaign monitoring, risk), see social listening for influencer marketing. For creators who mention your own brand, see brand mention monitoring.",
        links: [
          { text: "social listening for influencer marketing", href: "/blog/influencer-social-listening" },
          { text: "brand mention monitoring", href: "/blog/brand-mention-monitoring" },
        ],
      },
      { type: "heading", text: "Why conversations find different creators", id: "why" },
      {
        type: "table",
        headers: ["", "Database-first discovery", "Conversation-first discovery"],
        rows: [
          ["Starting point", "Creator profiles and filters", "Topics customers discuss"],
          ["Ranks by", "Followers, engagement, estimated audience", "Topic participation, being referenced, discussion generated"],
          ["Finds", "Visible creators in a category", "Topic authorities, community voices, emerging experts"],
          ["Misses", "Creators with thin data or unusual bios", "Creators who don't post about the topic publicly"],
          ["Speed", "Fast", "Slower; needs weeks of data"],
        ],
      },
      { type: "heading", text: "Step 1: Build topic queries", id: "queries" },
      {
        type: "template",
        label: "Topic query map (example: a millet-based breakfast brand)",
        text: "PROBLEMS: 'healthy breakfast for diabetics', 'quick breakfast for office', 'kids won't eat breakfast'\nQUESTIONS: 'is ragi good for weight loss', 'millet vs oats', 'millet recipes for beginners'\nOCCASIONS: 'tiffin ideas', 'navratri fasting recipes', 'post-workout breakfast'\nREGIONAL TERMS: ragi / nachni / mandua / kezhvaragu; jowar / jonna; bajra\nEXCLUDE: job posts, wholesale listings, unrelated meanings",
      },
      {
        type: "paragraph",
        text: "Regional terms matter. The same grain or dish has different names across Indian languages, and creators use the local term. A query set limited to English product language will miss many regional creators.",
      },
      { type: "heading", text: "Step 2: Identify the voices", id: "voices" },
      {
        type: "paragraph",
        text: "Collect posts and comments matching your queries for three to six weeks. Then look at who appears, and in what role:",
      },
      {
        type: "table",
        headers: ["Voice type", "How to spot them", "Value for brands"],
        rows: [
          ["Originator", "Posts that start topic discussions; others respond and remake", "Sets direction; often strong for launches"],
          ["Explainer", "Answers questions repeatedly; long comments threads under their posts", "Trust builder for considered purchases"],
          ["Referenced expert", "Tagged or named in other people's posts and comments ('ask @…')", "High credibility; may be a professional"],
          ["Community connector", "Active in many conversations; tags and recommends others", "Good for seeding and ambassador programmes"],
          ["Rising voice", "Small but growing share of topic conversation", "Early partnership opportunity"],
        ],
      },
      { type: "heading", text: "Step 3: Score conversation influence", id: "scoring" },
      {
        type: "template",
        label: "Conversation influence score (1–5 each)",
        text: "TOPIC FOCUS ....... Share of their recent posts on this topic\nDISCUSSION ........ Comments and replies their topic posts generate (substance, not count)\nREFERENCES ........ How often others tag, quote or recommend them on the topic\nCONSISTENCY ....... Participation over weeks, not one viral post\nAUDIENCE MATCH .... Language, region and audience type match your customer (provisional; verify later)",
      },
      {
        type: "paragraph",
        text: "This ranks topic authority, not reach. Combine it with reach and cost later when you rank creators for a specific campaign; influencer ranking explains how.",
        links: [{ text: "influencer ranking", href: "/blog/influencer-ranking" }],
      },
      { type: "heading", text: "Step 4: Vet and verify", id: "vet" },
      {
        type: "list",
        items: [
          "Watch 10–15 recent posts to confirm the topic focus isn't a coincidence.",
          "Check audience quality and request audience insights before booking.",
          "Check past sponsorships for competitor conflicts and disclosure habits.",
          "Check stance: a creator often discussing supplements may be a critic of the category.",
          "Run brand-safety checks as usual.",
        ],
      },
      {
        type: "paragraph",
        text: "How to vet influencers has the full checklist.",
        links: [{ text: "How to vet influencers", href: "/blog/how-to-vet-influencers" }],
      },
      { type: "heading", text: "Step 5: Reach out with the conversation as context", id: "outreach" },
      {
        type: "paragraph",
        text: "Listening gives you a specific, honest reason for contacting someone: 'Your post comparing ragi and oats answered a question our customers ask us every week.' That's stronger than generic praise and tells the creator you understand their work. Influencer outreach automation covers channels and follow-ups.",
        links: [{ text: "Influencer outreach automation", href: "/blog/influencer-outreach-automation" }],
      },
      { type: "heading", text: "Where listening-led discovery works best", id: "best-for" },
      {
        type: "list",
        items: [
          "Considered purchases where trust matters: health, finance, parenting, skincare, education.",
          "Niche and regional categories where databases are thin.",
          "Professional and expert voices (doctors, chartered accountants, engineers, chefs) who don't market themselves as influencers.",
          "B2B categories where conversations happen on LinkedIn and X.",
          "Finding rising creators before they're widely booked.",
        ],
      },
      { type: "heading", text: "Limits", id: "limits" },
      {
        type: "list",
        items: [
          "Listening tools cover public conversation only; Stories, closed groups and WhatsApp are mostly invisible.",
          "Coverage varies by platform; some platforms are much more listenable than others.",
          "Spoken mentions in video may be missed unless the tool transcribes audio.",
          "It takes weeks to see patterns; it's not a same-day shortlist method.",
          "Regulated professionals (doctors, financial advisers) may have rules on endorsements; check before approaching.",
        ],
      },
      { type: "heading", text: "Hypothetical walkthrough", id: "walkthrough" },
      {
        type: "paragraph",
        text: "Hypothetical: a pet-food brand wants creators for a Bengaluru and Chennai launch. Five weeks of listening on terms like 'indie dog diet', 'homemade dog food', 'dog food for Indian summers' and their Kannada and Tamil equivalents surfaces about 300 authors. Sorting by topic focus and references narrows that to 35. Twelve are vets or trainers others tag for advice, eight are rescue and adoption voices whose posts generate long discussions, and the rest are pet owners with small, engaged followings. After vetting, the shortlist mixes two vets for credibility, three rescue voices for trust and four local pet owners for everyday use content. None of the vets appeared in the brand's earlier database search under 'pet influencer'.",
      },
      { type: "heading", text: "Where conversations happen", id: "where" },
      {
        type: "table",
        headers: ["Category", "Where to listen first", "Notes"],
        rows: [
          ["Beauty and personal care", "Instagram comments, YouTube review comments", "Questions cluster under tutorials"],
          ["Food", "Instagram, YouTube recipe comments", "Regional terms essential"],
          ["Personal finance", "YouTube, X, LinkedIn", "Many experts are professionals first"],
          ["Tech and gadgets", "YouTube, X", "Comparison discussions are rich"],
          ["B2B and SaaS", "LinkedIn, X", "Practitioners rarely call themselves influencers"],
        ],
      },
      { type: "heading", text: "Keep it running", id: "continuous" },
      {
        type: "paragraph",
        text: "Keep the core queries live after the first project. A monthly review adds rising voices to your watchlist, spots new sub-topics and keeps the shortlist pipeline full. Over time, listening data also feeds your influencer market map and influencer trend analysis.",
        links: [
          { text: "influencer market map", href: "/blog/influencer-market-mapping" },
          { text: "influencer trend analysis", href: "/blog/influencer-trend-analysis" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Queries in product language instead of customer language.",
          "Ranking listening results by follower count, which defeats the point.",
          "Mistaking critics for advocates.",
          "Skipping audience verification because the creator 'clearly knows the topic'.",
          "Running listening once instead of keeping queries live.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Listening-led discovery finds creators who already shape your customers' conversations. Build queries in customer and regional language, identify originators, explainers, referenced experts and rising voices, score topic influence rather than reach, then vet and reach out with the conversation as context. It works especially well alongside database search; influencer search tools covers the database side.",
        links: [{ text: "influencer search tools", href: "/blog/influencer-search-tools" }],
      },
    ],
    faqs: [
      {
        question: "How does social listening help influencer discovery?",
        answer:
          "It tracks conversations about your category's problems, questions and occasions and identifies the creators who start, shape or are referenced in them, surfacing topic authorities that follower-based searches often miss.",
      },
      {
        question: "Is social listening better than an influencer database for finding creators?",
        answer:
          "They find different creators. Databases are fast for broad filtering; listening is slower but finds creators with genuine topic authority and community influence. Many brands use both.",
      },
      {
        question: "How long does listening-led creator discovery take?",
        answer:
          "Typically a few weeks of collecting conversations to see consistent patterns, followed by normal vetting of the strongest candidates.",
      },
    ],
  },
  {
    slug: "brand-mention-monitoring",
    category: "Influencer Marketing",
    title: "Brand Mention Monitoring: How Brands Can Find Creators Already Talking About Them",
    seoTitle: "Brand Mention Monitoring: Find Creators Who Mention You",
    excerpt:
      "How to find creators who already mention, use or review your brand: where mentions hide (tags, untagged posts, spoken mentions, Stories), a mention triage system, warm outreach that doesn't feel transactional, and what to do with critics.",
    metaDescription:
      "How to find creators already mentioning your brand: tagged and untagged mentions, spoken mentions, triage, warm outreach, reposting rights and handling critics.",
    author: AUTHOR,
    publishedAt: INTEL_PUBLISHED,
    lastReviewed: INTEL_REVIEWED,
    readingTime: "6 min read",
    tags: ["brand mention monitoring", "find creators talking about your brand", "organic brand mentions influencers", "warm influencer outreach", "brand mentions creators"],
    related: ["social-listening-creator-discovery", "competitor-influencers", "influencer-outreach-automation"],
    hero: {
      src: "/blog/brand-guides/brand-mention-monitoring.svg",
      alt: "Brand mentions sorted into fans, customers, reviewers and critics, each with a different next step",
    },
    body: [
      {
        type: "paragraph",
        text: "Somewhere in your mentions there are creators who already bought your product, used it on camera and recommended it without being paid. They're the warmest leads any influencer programme can have: proven interest, an audience that has already seen your product, and a reason to say yes. Most brands never find them because they only look at posts that tag the brand account.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To find creators already talking about your brand, monitor tagged mentions, untagged mentions of your brand and product names (including misspellings and regional spellings), hashtag use, spoken mentions in videos, and reviews on marketplaces and YouTube. Triage each creator as a fan, customer, reviewer, critic or competitor-affiliated creator, then respond differently: thank and engage fans, invite strong customers into seeding or paid work with a personal message, ask permission before reusing content, and listen carefully to critics. Warm outreach should reference what they actually said.",
      },
      { type: "heading", text: "Where mentions hide", id: "where" },
      {
        type: "table",
        headers: ["Mention type", "How to find it", "Often missed because"],
        rows: [
          ["Tagged posts and Reels", "Instagram tagged tab, notifications, collab requests", "Rarely missed, but rarely logged"],
          ["Untagged posts", "Search brand and product names, hashtags, listening tools", "No notification"],
          ["Misspellings and transliterations", "Queries with common spellings and Hindi/regional scripts", "Exact-match searches"],
          ["Spoken mentions", "YouTube search, video transcripts (where tools support them)", "Not in caption text"],
          ["Stories", "Mentions only if tagged; disappear in 24 hours", "Not saved; not searchable later"],
          ["Reviews and hauls", "YouTube search 'brand + review/haul', marketplace reviews", "Not on Instagram"],
          ["Comments under other creators' posts", "Listening tools; manual checks on category creators", "Buried in comment threads"],
        ],
      },
      {
        type: "paragraph",
        text: "For a structured listening setup, see social listening for influencer marketing.",
        links: [{ text: "social listening for influencer marketing", href: "/blog/influencer-social-listening" }],
      },
      { type: "heading", text: "Triage: not every mention is an opportunity", id: "triage" },
      {
        type: "table",
        headers: ["Creator type", "Signal", "Next step"],
        rows: [
          ["Fan", "Repeated positive mentions, unprompted", "Thank, engage, add to seeding or ambassador shortlist"],
          ["Customer creator", "Shows the product in normal content", "Personal message; offer product or paid collaboration"],
          ["Reviewer", "Balanced review with pros and cons", "Thank for honesty; consider for future launches; don't push for edits"],
          ["Critic", "Negative experience or criticism", "Listen; resolve the issue privately if possible; don't pitch"],
          ["Competitor-affiliated", "Mentions you while working with a competitor", "Note; check exclusivity before any approach"],
          ["Previously paid", "Mentions you after a past paid collaboration", "Strong rebooking signal; check scorecard"],
        ],
      },
      { type: "heading", text: "Warm outreach that doesn't feel transactional", id: "outreach" },
      {
        type: "list",
        items: [
          "Reference the specific post and what they said ('Your morning routine Reel where you used our sunscreen under makeup').",
          "Thank them before asking for anything.",
          "Be clear about what you're offering: product, early access, a paid collaboration or an ambassador conversation.",
          "Don't ask them to repeat the same content as an ad; ask what they'd like to make.",
          "Respect a no; they were already a fan without being paid.",
        ],
      },
      {
        type: "template",
        label: "Warm outreach message",
        text: "Hi [name], we saw your [post/video] from [date] where you [what they said or did]. Thank you, it genuinely made our team's day.\n\nWe're planning [campaign/launch] in [month] and would love to work with you properly this time, as a paid collaboration. No script; we'd like to hear what you'd want to make.\n\nIf you're open to it, could you share your rates and a recent audience screenshot? Either way, thanks again for the support.",
      },
      { type: "heading", text: "Reusing organic creator content", id: "reuse" },
      {
        type: "paragraph",
        text: "Resharing a creator's organic post on your account is common; using it in ads is a different matter. Ask permission before reposting, credit the creator, and get written agreement with clear usage terms before using organic content in paid ads or on your website. A creator who posted unpaid may reasonably expect payment for commercial use. Influencer usage rights covers the terms.",
        links: [{ text: "Influencer usage rights", href: "/blog/influencer-usage-rights" }],
      },
      { type: "heading", text: "Disclosure once the relationship changes", id: "disclosure" },
      {
        type: "paragraph",
        text: "A creator who posts about your product unprompted doesn't need a paid-partnership label. Once you send free product, pay them or offer any benefit, future posts about you are material connections that need clear disclosure under ASCI's influencer guidelines. Explain this when you first work together, especially with creators new to brand deals.",
        links: [{ text: "ASCI's influencer guidelines", href: SOURCES.asciGuidelines }],
      },
      { type: "heading", text: "Build a mention log", id: "mention-log" },
      {
        type: "template",
        label: "Mention log fields",
        text: "Date · Creator handle and URL · Platform · Mention type (tagged/untagged/spoken/review) · Product · Sentiment · Creator type (fan/customer/reviewer/critic/competitor) · Audience size and language · Action taken · Outcome",
      },
      {
        type: "paragraph",
        text: "Over time the log becomes a pipeline of warm creators, and its outcomes show whether creators who mentioned you first perform differently from cold recruits. Keep it alongside your influencer marketing CRM.",
        links: [{ text: "influencer marketing CRM", href: "/blog/influencer-marketing-crm" }],
      },
      { type: "heading", text: "Set it up in a week", id: "setup" },
      {
        type: "template",
        label: "One-week setup",
        text: "DAY 1: List brand names, product names, common misspellings, Hindi and regional spellings, campaign hashtags\nDAY 2: Set up saved searches and alerts (native search, listening tool if you have one)\nDAY 3: Search YouTube for '[brand] review', '[product] honest review', '[brand] haul'\nDAY 4: Review the last 90 days of tagged posts; start the mention log\nDAY 5: Triage creators found; assign owners for outreach\nDAY 6–7: Send the first warm outreach messages; set a weekly review slot",
      },
      { type: "heading", text: "Turn mentions into programmes", id: "programmes" },
      {
        type: "table",
        headers: ["Creator group", "Programme", "Where to start"],
        rows: [
          ["Loyal fans with small audiences", "Seeding or community programme", "Influencer product seeding programme"],
          ["Customers who make strong content", "UGC for ads, with paid rights", "UGC campaigns"],
          ["Repeat organic advocates", "Ambassador programme", "Brand ambassador programme"],
          ["Honest reviewers", "Early access for launches", "Influencers for product launch"],
        ],
      },
      {
        type: "paragraph",
        text: "Influencer product seeding programme, brand ambassador programme and influencers for product launch cover how each works; for UGC, see what is UGC marketing.",
        links: [
          { text: "Influencer product seeding programme", href: "/blog/influencer-product-seeding-program" },
          { text: "brand ambassador programme", href: "/blog/brand-ambassador-program" },
          { text: "influencers for product launch", href: "/blog/influencers-for-product-launch" },
          { text: "what is UGC marketing", href: "/blog/what-is-ugc-marketing" },
        ],
      },
      { type: "heading", text: "Measure warm against cold", id: "warm-vs-cold" },
      {
        type: "paragraph",
        text: "Tag creators sourced from mentions in your tracker. After a few campaigns, compare their reply rates, fees, reliability and results with creators recruited cold. Brands often find warm creators reply faster and need less persuading; whether they perform better is worth testing rather than assuming.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Only monitoring tagged posts.",
          "Reposting creator content without permission.",
          "Using organic content in ads without a rights agreement.",
          "Pitching paid work to a creator who just posted a complaint.",
          "Sending a generic outreach message to someone who already loves the product.",
        ],
      },
      {
        type: "paragraph",
        text: "For creators who already like your product, a thoughtful gift can be the right next step; see influencer gifting.",
        links: [
          { text: "influencer gifting", href: "/blog/influencer-gifting" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Brand mention monitoring turns existing goodwill into creator partnerships. Look beyond tags to untagged, spoken and review mentions, triage creators by type, reach out warmly with specifics, ask before reusing content and handle critics as customers rather than prospects. To find creators who mention your competitors instead, see competitor influencers.",
        links: [{ text: "competitor influencers", href: "/blog/competitor-influencers" }],
      },
    ],
    faqs: [
      {
        question: "How can brands find creators talking about them?",
        answer:
          "Monitor tagged and untagged mentions of brand and product names (including misspellings and regional spellings), hashtags, spoken mentions in videos and reviews on YouTube and marketplaces, and log each creator found.",
      },
      {
        question: "Can I repost a creator's organic post about my brand?",
        answer:
          "Ask permission and credit them before reposting. For ads or website use, get written agreement on usage terms; commercial use usually warrants payment.",
      },
      {
        question: "Do creators need to disclose if they post about a brand unpaid?",
        answer:
          "Not if there's no material connection. Once a brand gives free product, payment or other benefits, related posts need clear disclosure under ASCI's guidelines.",
      },
    ],
  },
  {
    slug: "competitor-influencers",
    category: "Influencer Marketing",
    title: "Influencer Competitor Analysis: How Brands Can Discover Creators Working With Competitors",
    seoTitle: "Find the Influencers Your Competitors Work With",
    excerpt:
      "How to find which creators your competitors work with: paid-partnership labels, Meta's branded content search, YouTube disclosures, hashtags, codes and listening, how to log what you find, and when (and when not) to approach those creators.",
    metaDescription:
      "How to find the influencers your competitors work with: partnership labels, branded content search, codes and listening, plus exclusivity and ethics.",
    author: AUTHOR,
    publishedAt: INTEL_PUBLISHED,
    lastReviewed: INTEL_REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer competitor analysis", "find competitor influencers", "which influencers do competitors use", "competitor creator collaborations", "competitor influencer list"],
    related: ["competitor-influencer-strategy", "brand-mention-monitoring", "influencer-market-mapping"],
    hero: {
      src: "/blog/brand-guides/competitor-influencers.svg",
      alt: "Signals that reveal competitor creator partnerships: partnership labels, branded content search, codes, hashtags and listening",
    },
    body: [
      {
        type: "paragraph",
        text: "Your competitors' creator partnerships are mostly public. Paid posts carry partnership labels, discount codes appear in captions, campaign hashtags repeat across creators and brands repost their best collaborations. With a few hours a month, a brand can build a reliable list of who its competitors work with. What it does with that list matters more.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To find creators working with competitors, check the 'Paid partnership' labels on competitors' tagged posts, search Meta's Ad Library branded content tool where it's available, look for YouTube videos marked 'Includes paid promotion', track competitor campaign hashtags and discount codes, and use listening tools for brand-name mentions. Log each creator with date, format and evidence. Use the list to understand the category and find gaps, check exclusivity before approaching any creator, and don't assume a competitor's creator is right for you.",
      },
      {
        type: "paragraph",
        text: "This guide is about finding the creators. Analysing what competitors' creator strategy tells you is covered in competitor influencer research.",
        links: [{ text: "competitor influencer research", href: "/blog/competitor-influencer-strategy" }],
      },
      { type: "heading", text: "Where competitor collaborations show up", id: "sources" },
      {
        type: "table",
        headers: ["Source", "What it shows", "Limits"],
        rows: [
          ["Instagram 'Paid partnership with' label", "Branded content where creators used the label", "Only when the label is applied; check the brand's tagged posts and Reels"],
          ["Meta Ad Library branded content search", "Branded content posts searchable by brand or creator", "Coverage and date ranges are limited and some campaigns don't appear; treat as partial"],
          ["YouTube 'Includes paid promotion'", "Videos declared as paid promotion", "Only when declared; search 'brand + review' and check descriptions"],
          ["Competitor's own reposts and collab posts", "Collaborations the brand chose to showcase", "Shows their best, not all"],
          ["Campaign hashtags", "Creators in a coordinated campaign", "Not every creator uses them"],
          ["Discount and affiliate codes", "Creators with codes (often CREATORNAME10)", "Codes in Stories expire; check captions and descriptions"],
          ["Listening and brand-name search", "Tagged and untagged mentions over time", "Includes organic mentions; check the label"],
        ],
      },
      {
        type: "paragraph",
        text: "Instagram's paid partnership label and YouTube's paid promotion setting are how creators disclose brand relationships, which is also why they make competitor research possible. Meta added a branded content search to its Ad Library in 2023, with limits on coverage.",
        links: [
          { text: "paid partnership label", href: SOURCES.instagramPaidPartnership },
          { text: "paid promotion setting", href: SOURCES.youtubePaidPromotion },
          { text: "branded content search to its Ad Library", href: META_BRANDED_CONTENT_LIBRARY },
        ],
      },
      { type: "heading", text: "A monthly research routine", id: "routine" },
      {
        type: "template",
        label: "Competitor creator check (60–90 minutes a month)",
        text: "FOR EACH OF 3–5 COMPETITORS:\n1. Review tagged posts and Reels from the last 30 days; note paid-partnership labels\n2. Search the branded content tool (where available) by brand name\n3. Search YouTube: '[brand] review', '[brand] haul', '[brand] honest'; check paid promotion disclosure\n4. Search campaign hashtags and common code formats\n5. Check listening results for brand-name mentions\n6. Log new creators; update repeat creators\n\nEVERY QUARTER: summarise patterns for competitor influencer research",
      },
      { type: "heading", text: "What to log", id: "log" },
      {
        type: "template",
        label: "Competitor creator log",
        text: "Competitor · Creator handle and URL · Platform · Tier · Language and region · Date · Format (Reel/Story/video/live) · Paid label? · Code or link? · Content theme · Repeat collaboration? (count) · Evidence link · Notes",
      },
      {
        type: "paragraph",
        text: "Repeat collaborations are the most important field. A creator a competitor books once may have been a test; a creator booked every month is probably working for them, and may be under exclusivity.",
      },
      { type: "heading", text: "Should you approach a competitor's creators?", id: "approach" },
      {
        type: "table",
        headers: ["Situation", "Approach?", "Why"],
        rows: [
          ["One-off collaboration months ago", "Possibly", "Check for exclusivity; ask openly"],
          ["Ongoing ambassador or repeated monthly content", "Usually not", "Likely exclusivity; credibility suffers if they switch"],
          ["Creator reviews many brands in the category", "Yes, with care", "Reviewers often cover competitors; check how they disclose"],
          ["Creator criticised the competitor after a collaboration", "Carefully", "They may be open, but their audience saw the earlier post"],
          ["Creator posts for competitors in a different category", "Yes", "No conflict"],
        ],
      },
      {
        type: "paragraph",
        text: "Audiences notice when a creator promotes two rival products in quick succession, and it damages trust in both endorsements. Even without a contractual exclusivity, give a clear gap and ask the creator directly about any restrictions.",
      },
      { type: "heading", text: "Better uses of the list", id: "better-uses" },
      {
        type: "list",
        items: [
          "Find lookalikes: creators similar to your competitors' best partners who aren't committed to anyone.",
          "Find gaps: languages, regions, tiers or formats competitors aren't using.",
          "Understand costs: which tiers competitors invest in repeatedly.",
          "Avoid crowded creators: those carrying many category sponsorships may be less persuasive.",
          "Feed market mapping: see influencer market mapping.",
        ],
      },
      {
        type: "paragraph",
        text: "Market-level use of this data is covered in influencer market mapping.",
        links: [{ text: "influencer market mapping", href: "/blog/influencer-market-mapping" }],
      },
      { type: "heading", text: "Ethics and limits", id: "ethics" },
      {
        type: "list",
        items: [
          "Use only public information. Don't ask creators to share competitors' briefs, fees or contracts.",
          "Don't assume undisclosed posts are paid; many mentions are organic.",
          "Labels are applied inconsistently, so your list will be incomplete.",
          "Don't contact a competitor's creator with disparaging comments about the competitor.",
        ],
      },
      { type: "heading", text: "Reading the list", id: "reading" },
      {
        type: "table",
        headers: ["Pattern in your log", "What it may mean"],
        rows: [
          ["Same creators booked monthly", "Ongoing partnership; likely exclusivity"],
          ["Many new creators each month, few repeats", "Testing or seeding at volume"],
          ["Heavy concentration in one language or region", "A priority market (and possibly a gap elsewhere)"],
          ["Creators also appear in competitor ads", "Content is good enough to run as paid; rights negotiated"],
          ["Sudden drop in activity", "Budget shift, strategy change or seasonal pause"],
        ],
      },
      {
        type: "paragraph",
        text: "These are inferences, not facts. Competitor influencer research explains how to turn patterns like these into a strategy comparison.",
        links: [
          { text: "Competitor influencer research", href: "/blog/competitor-influencer-strategy" },
        ],
      },
      { type: "heading", text: "Find lookalikes instead of poaching", id: "lookalikes" },
      {
        type: "list",
        items: [
          "Take the competitor creators who appear most often and note what they share: niche, tier, language, format, style.",
          "Use lookalike search in discovery tools, or describe the profile in content search.",
          "Search the same niche in languages and regions competitors haven't covered.",
          "Check each lookalike for conflicts before shortlisting.",
        ],
      },
      {
        type: "paragraph",
        text: "AI for influencer discovery explains lookalike and content search; influencer search tools covers manual methods.",
        links: [
          { text: "AI for influencer discovery", href: "/blog/ai-influencer-discovery" },
          { text: "influencer search tools", href: "/blog/influencer-search-tools" },
        ],
      },
      { type: "heading", text: "Exclusivity in your own contracts", id: "exclusivity" },
      {
        type: "paragraph",
        text: "The same research works in reverse: competitors can see your creators. If a creator matters to your positioning, agree a category exclusivity period in the contract and pay for it. Influencer marketing contract covers exclusivity clauses.",
        links: [
          { text: "Influencer marketing contract", href: "/blog/influencer-marketing-contract" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Copying a competitor's creator list instead of learning from it.",
          "Poaching a competitor's ambassador and losing credibility for both.",
          "Treating one competitor post as their whole strategy.",
          "Logging creators without dates, so stale relationships look current.",
        ],
      },
      {
        type: "paragraph",
        text: "When a creator declines because of a competitor partnership, influencer collaboration rejection covers how to respond.",
        links: [
          { text: "influencer collaboration rejection", href: "/blog/influencer-collaboration-rejection" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Competitor creator partnerships are discoverable through disclosure labels, branded content search, codes, hashtags and listening. Log them with dates and evidence, check exclusivity before approaching anyone, and use the list mainly to find gaps and lookalikes rather than to copy. The strategic analysis comes next, in competitor influencer research.",
        links: [{ text: "competitor influencer research", href: "/blog/competitor-influencer-strategy" }],
      },
    ],
    faqs: [
      {
        question: "How can brands find which influencers their competitors use?",
        answer:
          "Check paid-partnership labels on competitors' tagged posts, Meta's Ad Library branded content search where available, YouTube videos marked as paid promotion, campaign hashtags, discount codes and brand-name mentions in listening tools.",
      },
      {
        question: "Is it okay to work with an influencer who worked with a competitor?",
        answer:
          "Often yes, if the collaboration was one-off and there's no exclusivity. Avoid creators in ongoing competitor partnerships, ask about restrictions directly and allow a clear gap between campaigns.",
      },
      {
        question: "Is Meta's branded content search complete?",
        answer:
          "No. It's useful but partial: coverage, date ranges and inclusion vary, and only posts using branded content tools appear. Combine it with manual checks.",
      },
    ],
  },
  {
    slug: "competitor-influencer-strategy",
    category: "Campaign Strategy",
    title: "Competitor Influencer Research: How Brands Can Analyze Other Brands' Creator Strategies",
    seoTitle: "Competitor Influencer Research: Analyze Creator Strategies",
    excerpt:
      "A Competitor Creator Analysis framework covering creator types, platforms, formats, messaging, frequency, content themes, audience positioning and gaps, with a comparison sheet, a gap analysis method and what not to conclude.",
    metaDescription:
      "How to analyze competitors' influencer strategies: creator types, platforms, formats, messaging, frequency, themes, audience positioning and gap analysis.",
    author: AUTHOR,
    publishedAt: INTEL_PUBLISHED,
    lastReviewed: INTEL_REVIEWED,
    readingTime: "6 min read",
    tags: ["competitor influencer research", "competitor influencer strategy", "analyze competitor influencer marketing", "competitive creator analysis", "influencer gap analysis"],
    related: ["competitor-influencers", "influencer-market-mapping", "influencer-marketing-strategy"],
    hero: {
      src: "/blog/brand-guides/competitor-influencer-strategy.svg",
      alt: "Competitor creator strategy compared across creator types, platforms, formats, messages, frequency and audiences to reveal gaps",
    },
    body: [
      {
        type: "paragraph",
        text: "Knowing that a competitor worked with 40 creators last quarter tells you little. Knowing that 30 of them were Hindi micro creators posting Reels about one product benefit, that they never used YouTube, and that nobody in the category is speaking to Tamil Nadu tells you where to compete. Competitor influencer research is about the second kind of knowledge.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Analyse a competitor's creator strategy across eight dimensions: creator types and tiers, platforms, formats, messaging, frequency and timing, content themes, audience positioning (languages, regions, life stages) and commercial model (paid, affiliate, seeding, ambassadors). Build a comparison sheet for three to five competitors, look for patterns that repeat over months rather than single campaigns, then run a gap analysis to find audiences, creators, formats or messages nobody is serving well. Treat conclusions as hypotheses to test, since you can't see competitors' results.",
      },
      {
        type: "paragraph",
        text: "Start with a list of who competitors work with; influencer competitor analysis explains how to find them.",
        links: [{ text: "influencer competitor analysis", href: "/blog/competitor-influencers" }],
      },
      { type: "heading", text: "The Competitor Creator Analysis framework", id: "framework" },
      {
        type: "table",
        headers: ["Dimension", "Questions", "Evidence"],
        rows: [
          ["Creator types", "Which tiers and niches? Experts, entertainers, everyday users?", "Creator log by tier and niche"],
          ["Platforms", "Instagram, YouTube, others? Where's the weight?", "Count of posts by platform"],
          ["Formats", "Reels, Stories, long-form, lives, collab posts, UGC ads?", "Format counts; ad library"],
          ["Messaging", "Which benefit, claim or story do creators repeat?", "Content review; captions; spoken lines"],
          ["Frequency and timing", "Always-on or bursts? Around which festivals and sales?", "Post dates over 6–12 months"],
          ["Content themes", "Tutorials, reviews, routines, challenges, unboxings?", "Theme tags per post"],
          ["Audience positioning", "Which languages, regions, city tiers, life stages?", "Creator language and audience signals"],
          ["Commercial model", "Paid posts, codes, affiliate links, gifting, ambassadors?", "Labels, codes, repeat collaborations"],
        ],
      },
      { type: "heading", text: "Build a comparison sheet", id: "comparison-sheet" },
      {
        type: "template",
        label: "Competitor creator strategy sheet (one column per competitor)",
        text: "Period analysed: [ ] to [ ]   Posts reviewed: [ ]\n\nCreators (count) · repeat creators (count)\nTier mix: nano / micro / mid / macro (%)\nLanguages: Hindi / English / regional (%)\nPlatforms: Instagram / YouTube / other (%)\nFormats: Reels / Stories / long-form / UGC ads (%)\nTop 3 messages:\nTop 3 content themes:\nTiming pattern: always-on / bursts around [ ]\nCommercial model: paid / codes / affiliate / gifting / ambassadors\nVisible in ads (partnership ads or creator content in ads)? yes/no\nOne-line summary of their creator strategy:",
      },
      {
        type: "paragraph",
        text: "Percentages here are shares of what you observed, not of their whole programme. Note that limit in the sheet.",
      },
      { type: "heading", text: "Reading messaging and themes", id: "messaging" },
      {
        type: "paragraph",
        text: "Watch 20–30 competitor creator posts and note the single main claim or benefit in each. Patterns appear quickly: one brand may push 'natural ingredients' through every creator, another 'value for money', another 'results in 7 days'. Then read comments for how audiences respond: questions, scepticism, comparisons with other brands. Sceptical comments about a competitor's main claim can point to a message your brand can own more credibly.",
      },
      { type: "heading", text: "Gap analysis", id: "gap-analysis" },
      {
        type: "table",
        headers: ["Gap type", "Example finding", "Possible move"],
        rows: [
          ["Audience gap", "No brand uses Kannada or Malayalam creators", "Regional creator test in Karnataka and Kerala"],
          ["Creator-type gap", "Everyone uses lifestyle creators; no experts", "Partner with qualified professionals for credibility"],
          ["Format gap", "All Reels; nobody does long-form reviews", "YouTube integrations for considered buyers"],
          ["Message gap", "Everyone claims results; nobody explains how to use the product", "Education-led briefs"],
          ["Timing gap", "Everyone bursts at Diwali", "Always-on presence, or a different seasonal moment"],
          ["Tier gap", "Heavy macro spend, little micro", "Micro and nano creators in specific cities"],
        ],
      },
      {
        type: "paragraph",
        text: "A gap is a hypothesis, not proof of opportunity. Nobody may be doing something because it doesn't work, or because nobody has tried. Test small before committing. Regional gaps are common in Indian categories; regional influencer marketing in India covers how to approach them.",
        links: [{ text: "regional influencer marketing in India", href: "/blog/regional-influencer-marketing-india" }],
      },
      { type: "heading", text: "What you can and can't conclude", id: "limits" },
      {
        type: "table",
        headers: ["You can infer", "You can't know"],
        rows: [
          ["Which creators, formats and messages they use", "Their results, costs or ROI"],
          ["Which creators they rebook (a signal of satisfaction)", "Why a creator wasn't rebooked"],
          ["Where they concentrate effort", "Their total budget"],
          ["How audiences publicly respond", "Private sales impact"],
        ],
      },
      {
        type: "paragraph",
        text: "Repeated behaviour over months is the strongest signal you have. A competitor that rebooks the same creator type every month is probably seeing results there; a format tried once and dropped probably didn't work for them, though it might for you.",
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical: a new D2C coffee brand analyses three competitors over six months. All three use English-language lifestyle creators in Mumbai, Delhi and Bengaluru, mostly Reels about aesthetic morning routines. Comments frequently ask about taste compared with South Indian filter coffee. Nobody works with Tamil or Kannada food creators. The brand tests five regional food creators on a 'filter coffee drinkers try instant' brief. Whether that works is still unknown; the analysis made it a sensible test rather than a guess.",
      },
      { type: "heading", text: "Put your own programme on the same sheet", id: "self-comparison" },
      {
        type: "paragraph",
        text: "Add a column for your brand. Seeing your tier mix, languages, formats and messages beside competitors' often reveals that you're doing the same thing as everyone else, or that your strongest segment is one nobody else is contesting. Both are useful to know.",
      },
      { type: "heading", text: "Creator content in competitors' ads", id: "ads" },
      {
        type: "paragraph",
        text: "Check whether competitors run creator content as paid ads, for example partnership ads showing both brand and creator. Creator content used heavily in ads suggests the brand is treating creators as a source of performance creative, not only as reach. That has implications for your rights negotiations and budgets; influencer marketing for performance marketing and UGC whitelisting and creator licensing cover how it works.",
        links: [
          { text: "influencer marketing for performance marketing", href: "/blog/influencer-performance-marketing" },
          { text: "UGC whitelisting and creator licensing", href: "/blog/ugc-whitelisting-creator-licensing" },
        ],
      },
      { type: "heading", text: "A quarterly competitor review", id: "quarterly-review" },
      {
        type: "template",
        label: "Quarterly agenda (60 minutes)",
        text: "1. What changed in each competitor's creator activity this quarter? (15 min)\n2. New creators, formats, messages or markets? (15 min)\n3. Gaps we identified last quarter: did we test them, and what happened? (15 min)\n4. One or two new tests for next quarter (15 min)\nOUTPUT: updated comparison sheet; test briefs",
      },
      { type: "heading", text: "India-specific angles", id: "india" },
      {
        type: "list",
        items: [
          "Compare by language and state, not just nationally; many categories are crowded in Hindi and English and open in regional languages.",
          "Watch festival timing by region: competitors may burst at Diwali but ignore Onam, Pongal or Durga Puja.",
          "Compare marketplace-led brands with D2C-led ones; their creator strategies often differ (codes and links vs awareness).",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Copying the market leader's creator strategy, which puts you in their shadow.",
          "Judging strategy from one campaign.",
          "Assuming competitors' visible activity reflects their results.",
          "Ignoring audience comments, which often reveal the best gaps.",
          "Not repeating the analysis; strategies change.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Competitor influencer research looks past creator lists to strategy: types, platforms, formats, messages, timing, themes, audience positioning and commercial model. Build a comparison sheet over months, find gaps, test them small and keep the analysis current. For a category-wide view that includes non-competitors, see influencer market mapping; to fold the findings into your own plan, see influencer marketing strategy.",
        links: [
          { text: "influencer market mapping", href: "/blog/influencer-market-mapping" },
          { text: "influencer marketing strategy", href: "/blog/influencer-marketing-strategy" },
        ],
      },
    ],
    faqs: [
      {
        question: "How can brands analyze competitors' influencer strategies?",
        answer:
          "Log competitor creator collaborations over several months and compare creator types, platforms, formats, messaging, frequency, content themes, audience positioning and commercial model, then look for gaps to test.",
      },
      {
        question: "Can I see competitors' influencer marketing results?",
        answer:
          "Not directly. You can see public activity and audience responses. Repeated rebooking of creator types or formats over months is the strongest public signal that something is working for them.",
      },
      {
        question: "What is influencer gap analysis?",
        answer:
          "Comparing what competitors do with creators to find audiences, regions, creator types, formats, messages or timing that nobody serves well, then testing those gaps.",
      },
    ],
  },
  {
    slug: "influencer-market-mapping",
    category: "Campaign Strategy",
    title: "Influencer Market Mapping: How Brands Can Understand the Creator Landscape in Their Category",
    seoTitle: "Influencer Market Mapping: Map Your Category's Creators",
    excerpt:
      "How to map the creator landscape in a category, from audience to tiers, platforms, locations, languages, formats, competitors and whitespace, plus a niche landscape analysis for finding specific opportunities and a Creator Market Map template.",
    metaDescription:
      "How to map your category's creator landscape: audiences, tiers, platforms, regions, languages, competitors and whitespace, plus niche landscape analysis.",
    author: AUTHOR,
    publishedAt: INTEL_PUBLISHED,
    lastReviewed: INTEL_REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer market mapping", "creator landscape analysis", "influencer landscape", "creator market map", "influencer opportunities in a niche"],
    related: ["competitor-influencer-strategy", "influencer-trend-analysis", "creator-intelligence"],
    hero: {
      src: "/blog/brand-guides/influencer-market-mapping.svg",
      alt: "Creator market map moving from category and audience through tiers, platforms, locations, languages and formats to competitors and whitespace",
    },
    body: [
      {
        type: "paragraph",
        text: "Before deciding which creators to book, it helps to know what the creator landscape in your category looks like: who creates, for whom, in which languages and places, on which platforms, how crowded each corner is with sponsorships, and where nobody is working yet. Without that view, brands tend to compete for the same visible creators while better-fitting ones go unnoticed.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Influencer market mapping is a structured view of the creator ecosystem in a category. Map it in layers: category and sub-niches → audience segments → creator tiers → platforms → locations → languages → content formats → competitor presence → whitespace. Populate each layer from discovery searches, listening, competitor logs and your own campaign data, count roughly how many relevant creators sit in each cell and how saturated they are with sponsorships, then pick the segments where audience demand is real and competition for creators is low. Update it every six to twelve months.",
      },
      { type: "heading", text: "The creator market map", id: "map-layers" },
      {
        type: "table",
        headers: ["Layer", "Question", "Example (personal care)"],
        rows: [
          ["Category and sub-niches", "What topics make up the category?", "Skincare, haircare, men's grooming, Ayurveda, dermatology education"],
          ["Audience segments", "Who buys, and why?", "Students on a budget, working women 25–35, new mothers, men starting a routine"],
          ["Creator tiers", "How many creators at each size?", "Nano, micro, mid, macro, celebrity"],
          ["Platforms", "Where does each segment watch?", "Instagram Reels, YouTube long-form, YouTube Shorts"],
          ["Locations", "Where are creators and their audiences?", "Metros, tier 2 cities, specific states"],
          ["Languages", "In which languages does the conversation happen?", "Hindi, English, Tamil, Telugu, Bengali, Marathi"],
          ["Content formats", "How do creators cover the topic?", "Routines, reviews, dermatologist explainers, hauls, before/after"],
          ["Competitor presence", "Which brands already work with creators in each cell?", "Heavy in English metro skincare; light in regional haircare"],
          ["Whitespace", "Where is demand real and competition low?", "Bengali haircare educators; men's grooming in Hindi"],
        ],
      },
      { type: "heading", text: "How to populate the map", id: "populate" },
      {
        type: "list",
        items: [
          "Discovery searches by sub-niche, language and location (native search, tools, Google operators).",
          "Listening for category conversations to see where audiences ask questions.",
          "Competitor creator logs to mark sponsored density in each cell.",
          "Your own campaign data to mark which cells you've tested and how they performed.",
          "Creator and manager conversations to learn about communities tools miss.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer search tools covers search methods, and influencer competitor analysis covers the competitor log.",
        links: [
          { text: "Influencer search tools", href: "/blog/influencer-search-tools" },
          { text: "influencer competitor analysis", href: "/blog/competitor-influencers" },
        ],
      },
      { type: "heading", text: "A market map grid", id: "grid" },
      {
        type: "template",
        label: "Creator market map grid (one row per segment)",
        text: "Sub-niche | Language | Region | Platform | Relevant creators found (approx.) | Typical tier | Sponsored density (low/med/high) | Competitors present | Audience demand signal | Our history | Opportunity (low/med/high)\n\nExample row (hypothetical):\nHaircare education | Bengali | West Bengal | YouTube + Reels | ~40 | micro | low | 1 | many unanswered questions in comments | none | high",
      },
      {
        type: "paragraph",
        text: "Counts are approximate; the goal is relative scale between cells, not a census. 'Sponsored density' is the share of a cell's creators' recent posts that are paid partnerships, judged from a sample.",
      },
      { type: "heading", text: "Finding whitespace", id: "whitespace" },
      {
        type: "paragraph",
        text: "Whitespace is where three things line up: an audience you can serve and sell to, enough credible creators to work with, and little brand competition for those creators. Score each cell on those three and look for high-high-low combinations.",
      },
      {
        type: "table",
        headers: ["Audience demand", "Creator supply", "Brand competition", "Reading"],
        rows: [
          ["High", "High", "High", "Crowded; compete on creator quality and creative"],
          ["High", "High", "Low", "Whitespace; test early"],
          ["High", "Low", "Low", "Opportunity to develop creators (seeding, ambassadors)"],
          ["Low", "High", "Low", "Probably low value for you"],
        ],
      },
      { type: "heading", text: "Niche landscape analysis", id: "niche-landscape" },
      {
        type: "paragraph",
        text: "A market map shows the whole category. When you've picked a promising niche, a landscape analysis goes deeper to find specific creator opportunities inside it:",
      },
      {
        type: "list",
        items: [
          "List the 30–60 most relevant creators in the niche, across tiers.",
          "Group them by sub-topic, style (expert, reviewer, storyteller, entertainer) and audience.",
          "Mark who's rising (growing views and topic participation over months) and who's plateauing.",
          "Note sponsorship density and recent brand partners for each.",
          "Identify the conversation leaders others reference; social listening for creator discovery explains how.",
          "Spot missing voices: sub-topics with audience questions but no creator answering well.",
          "Pick a first wave: a few established voices plus a few rising ones, with roles assigned.",
        ],
      },
      {
        type: "paragraph",
        text: "Rising voices and emerging sub-niches are covered in influencer trend analysis; how to find conversation leaders is in social listening for creator discovery.",
        links: [
          { text: "influencer trend analysis", href: "/blog/influencer-trend-analysis" },
          { text: "social listening for creator discovery", href: "/blog/social-listening-creator-discovery" },
        ],
      },
      { type: "heading", text: "India-specific layers worth mapping", id: "india" },
      {
        type: "list",
        items: [
          "Language × region: Hindi alone covers very different audiences across states; regional languages often have tighter, more loyal creator communities.",
          "City tier: tier 2 and tier 3 audiences may follow different creators and respond to different price points.",
          "Script: creators writing captions in native script vs Roman transliteration reach overlapping but different readers.",
          "Platform mix: some regional creators are strongest on YouTube; some categories live mainly on Instagram.",
          "Festival calendar by region: creator demand and sponsorship density spike at different times in different states.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer marketing in tier 2 and tier 3 cities covers planning for those markets.",
        links: [{ text: "Influencer marketing in tier 2 and tier 3 cities", href: "/blog/influencer-marketing-tier-2-tier-3-cities" }],
      },
      { type: "heading", text: "Using the map", id: "using" },
      {
        type: "list",
        items: [
          "Annual planning: decide which cells to own, test and ignore.",
          "Budget allocation: weight spend towards proven and promising cells.",
          "Discovery briefs: send searches to specific cells rather than 'find skincare creators'.",
          "Competitive positioning: avoid cells where you'd be the fifth brand with the same message.",
        ],
      },
      { type: "heading", text: "Hypothetical worked map: packaged snacks", id: "worked-map" },
      {
        type: "table",
        headers: ["Segment", "Creators (approx.)", "Sponsored density", "Competitors", "Demand signal", "Opportunity"],
        rows: [
          ["Hindi · healthy snacking · Reels · metros", "Many", "High", "4", "Strong", "Low (crowded)"],
          ["Tamil · kids' tiffin · Reels + YouTube", "Moderate", "Low", "1", "Many recipe questions", "High"],
          ["Marathi · office snacks · Reels", "Moderate", "Medium", "2", "Moderate", "Medium"],
          ["Bengali · evening snacks · YouTube", "Few", "Low", "0", "Searches and comments growing", "Develop (seed creators)"],
          ["English · fitness snacking · YouTube", "Many", "High", "3", "Strong", "Low (crowded)"],
        ],
      },
      {
        type: "paragraph",
        text: "All invented. The map points to a Tamil tiffin test first, a Marathi follow-up and a longer-term seeding programme for Bengali creators, rather than another crowded Hindi metro campaign.",
      },
      { type: "heading", text: "Who builds it, and how long it takes", id: "effort" },
      {
        type: "paragraph",
        text: "A first map for one category usually takes a few days of focused work: a day to define layers and searches, a few days of discovery and listening, a day to fill competitor presence from your logs and a day to score and review. Updates take less. Someone with category knowledge should own it, with input from regional teams and anyone who talks to creators regularly.",
      },
      { type: "heading", text: "Turn the map into a plan", id: "plan" },
      {
        type: "list",
        items: [
          "Own: segments where you're strong and want to stay present (always-on).",
          "Test: whitespace segments, with small budgets and clear success measures.",
          "Develop: segments with demand but few creators (seeding, ambassadors).",
          "Ignore: segments with low demand or poor commercial fit, for now.",
        ],
      },
      {
        type: "paragraph",
        text: "The influencer marketing annual plan and influencer budget allocation cover how to schedule and fund these choices.",
        links: [
          { text: "influencer marketing annual plan", href: "/blog/influencer-marketing-annual-plan" },
          { text: "influencer budget allocation", href: "/blog/influencer-budget-allocation" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Mapping only English-language and metro creators.",
          "Treating creator counts as precise.",
          "Calling an empty cell whitespace without checking audience demand.",
          "Building the map once and never updating it.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "An influencer market map shows where your category's creators, audiences and competitors actually are, layer by layer, and where whitespace exists. Populate it from search, listening, competitor logs and your own results; analyse promising niches in depth; and update it regularly. It's the strategic layer of creator intelligence.",
        links: [{ text: "creator intelligence", href: "/blog/creator-intelligence" }],
      },
    ],
    faqs: [
      {
        question: "What is influencer market mapping?",
        answer:
          "A structured view of the creator ecosystem in a category, layered by sub-niche, audience, creator tier, platform, location, language, format, competitor presence and whitespace.",
      },
      {
        question: "How do brands find influencer opportunities in a niche?",
        answer:
          "List the most relevant creators across tiers, group them by sub-topic, style and audience, mark rising voices and sponsorship density, find conversation leaders and spot sub-topics where audiences ask questions nobody answers well.",
      },
      {
        question: "How often should an influencer market map be updated?",
        answer:
          "Every six to twelve months, or before major planning cycles and launches, since creators, platforms and competitor activity change.",
      },
    ],
  },
  {
    slug: "influencer-trend-analysis",
    category: "Campaign Strategy",
    title: "Influencer Trend Analysis: How Brands Can Identify Emerging Creator Opportunities",
    seoTitle: "Influencer Trend Analysis: Spot Emerging Opportunities",
    excerpt:
      "How to analyse emerging creator opportunities (rising creators, new sub-niches, formats, platforms and regional shifts) with a signal-validation method that separates durable shifts from noise, without making unsupported predictions.",
    metaDescription:
      "How brands analyse emerging creator opportunities: rising creators, sub-niches, formats and regional shifts, with a signal-validation framework and test plan.",
    author: AUTHOR,
    publishedAt: INTEL_PUBLISHED,
    lastReviewed: INTEL_REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer trend analysis", "emerging creator opportunities", "rising creators", "creator trend detection", "emerging influencer niches"],
    related: ["influencer-trend-tracking", "influencer-market-mapping", "creator-intelligence"],
    hero: {
      src: "/blog/brand-guides/influencer-trend-analysis.svg",
      alt: "Creator trend detection: early signals are validated over time for persistence, spread and audience pull before a brand tests them",
    },
    body: [
      {
        type: "paragraph",
        text: "Trend tracking asks 'what format or sound is rising this week, and can we use it in a brief?' Trend analysis asks a slower question: 'which creators, sub-niches, formats or regions are becoming important in our category over the next year, and should we build a position there early?' The first is campaign tactics. The second is where brands find creators before they're expensive and audiences before competitors arrive.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Influencer trend analysis identifies emerging creator opportunities by tracking signals over months: creators whose views and topic influence are growing, sub-niches attracting more creators and audience questions, formats spreading across creator tiers, platform shifts and regional-language growth. Validate each signal for persistence, spread, audience pull and commercial fit before acting, then test with small commitments. It doesn't predict the future; it reduces the chance of arriving late or betting on noise.",
      },
      {
        type: "paragraph",
        text: "For short-term trends to use in briefs (sounds, memes, formats this month), see influencer trend tracking.",
        links: [{ text: "influencer trend tracking", href: "/blog/influencer-trend-tracking" }],
      },
      { type: "heading", text: "Five kinds of emerging opportunity", id: "kinds" },
      {
        type: "table",
        headers: ["Opportunity", "Early signals", "What a brand gains by being early"],
        rows: [
          ["Rising creators", "Median views growing over several months; more references from peers; first brand deals", "Partnership before fees rise; long-term relationship"],
          ["Emerging sub-niches", "More creators covering a topic; growing audience questions; new search terms", "Category authority; message ownership"],
          ["Spreading formats", "Format moves from a few originators to many creators across tiers", "Creative advantage while fresh"],
          ["Platform shifts", "Category creators investing more in a platform or feature", "Presence before competition intensifies"],
          ["Regional growth", "More regional-language creators and audiences in a category", "Local trust; lower creator competition"],
        ],
      },
      { type: "heading", text: "The creator trend detection framework", id: "framework" },
      {
        type: "template",
        label: "Signal validation (score each 1–5; review monthly)",
        text: "PERSISTENCE ....... Has the signal held or grown for 3+ months, not just one spike?\nSPREAD ............ Is it moving beyond its originators to other creators, tiers or regions?\nAUDIENCE PULL ..... Are audiences asking for more (comments, searches, saves), not just creators supplying it?\nCOMMERCIAL FIT .... Does it connect to what we sell and to customers who buy?\nCOMPETITION ....... Are brands already crowding in? (lower is better for early movers)\n\nACT when persistence, spread and audience pull are all ≥ 3 and commercial fit ≥ 4.",
      },
      {
        type: "paragraph",
        text: "The thresholds are a starting point. The principle is that a trend worth acting on shows both supply (creators making it) and demand (audiences wanting it) over time.",
      },
      { type: "heading", text: "Spotting rising creators", id: "rising-creators" },
      {
        type: "list",
        items: [
          "Track median views over the last 10–15 posts each month for a watchlist, not follower count.",
          "Note who's being tagged, quoted or collaborated with by established creators.",
          "Watch for first sponsored posts and how audiences react to them.",
          "Check that growth comes from content performance, not a single viral post or a giveaway.",
          "Run authenticity checks; rapid growth can also be bought.",
        ],
      },
      {
        type: "paragraph",
        text: "Rising creators are often the best long-term partners: early relationships, fair fees and content that grows with the creator. The trade-off is less history to judge them by, so start with smaller collaborations. Influencer fraud detection tools covers checks for suspicious growth.",
        links: [{ text: "Influencer fraud detection tools", href: "/blog/influencer-fraud-detection-tools" }],
      },
      { type: "heading", text: "Signal sources", id: "sources" },
      {
        type: "table",
        headers: ["Source", "What it shows", "Caution"],
        rows: [
          ["Creator watchlist metrics", "Rising creators and formats", "Small samples; check consistency"],
          ["Search interest (Google Trends, YouTube search suggestions)", "Audience demand for topics", "Relative, not absolute; regional data can be thin"],
          ["Social listening", "Conversation growth; new terms", "Coverage gaps by platform and language"],
          ["Comment sections", "Unmet questions and requests", "Vocal minority"],
          ["Competitor creator logs", "Where brands are moving", "Lagging signal; brands follow creators"],
          ["Your own tests", "What works for your brand", "Requires deliberate test slots"],
        ],
      },
      { type: "heading", text: "Separating trends from noise", id: "noise" },
      {
        type: "list",
        items: [
          "One viral post is noise until the creator repeats it.",
          "A format used only by creators who copy each other is supply without demand.",
          "A spike around a festival, exam season or sporting event is seasonal, not structural.",
          "Platform-driven spikes (a new feature being promoted) may fade when promotion stops.",
          "Coverage in marketing media is not evidence that your audience cares.",
        ],
      },
      { type: "heading", text: "Turning analysis into action", id: "action" },
      {
        type: "template",
        label: "Emerging opportunity test plan",
        text: "OPPORTUNITY: [rising creators in X / sub-niche Y / format Z / region R]\nEVIDENCE: [signals, scores, dates]\nTEST: [2–5 creators, small budget, clear brief]\nMEASURE: [primary metric vs our baseline for similar creators]\nDECISION DATE: [after 30-day capture]\nIF IT WORKS: [scale: more creators, ambassador, always-on]\nIF NOT: [what we learned; revisit in 6 months?]",
      },
      {
        type: "paragraph",
        text: "Reserving a small share of each campaign for tests like these is how creator intelligence keeps improving. Influencer ranking explains how to keep test slots in the final creator mix.",
        links: [{ text: "Influencer ranking", href: "/blog/influencer-ranking" }],
      },
      { type: "heading", text: "Indian patterns worth watching", id: "india" },
      {
        type: "paragraph",
        text: "Without predicting specific trends, a few kinds of shift are worth monitoring in most Indian categories: growth of regional-language creators in categories that started English-first, professional and expert creators (doctors, chartered accountants, lawyers, teachers) building audiences, creators in tier 2 and tier 3 cities gaining national audiences, and long-form YouTube content in categories where trust matters. Whether any of these is an opportunity for your brand depends on your evidence, not on general commentary.",
      },
      { type: "heading", text: "Build a watchlist that catches early signals", id: "watchlist" },
      {
        type: "list",
        items: [
          "40–80 creators across tiers and languages in and around your category, including some outside it who often start formats.",
          "A monthly snapshot of each: median views on recent posts, topic share, notable collaborations, first sponsored posts.",
          "Tags for language, region and sub-topic, so shifts show up by segment.",
          "A notes column for qualitative changes: new format, new tone, new audience in comments.",
        ],
      },
      {
        type: "paragraph",
        text: "Social listening for creator discovery is a good source of new names for the watchlist.",
        links: [
          { text: "Social listening for creator discovery", href: "/blog/social-listening-creator-discovery" },
        ],
      },
      { type: "heading", text: "Hypothetical example: validating a signal", id: "example" },
      {
        type: "table",
        headers: ["Month", "Signal", "Score change"],
        rows: [
          ["1", "A few Telugu creators post 'budget kitchen setup for first job' videos", "Persistence 1, spread 1"],
          ["2", "More creators and higher views; comments ask for product links", "Persistence 2, spread 2, audience pull 3"],
          ["3", "Format spreads to Kannada and Tamil creators; search interest for related terms rises", "Persistence 3, spread 4, audience pull 4"],
          ["4", "Two kitchenware brands appear in the format", "Competition 2; commercial fit 4 → act"],
        ],
      },
      {
        type: "paragraph",
        text: "Invented, but typical of how a real opportunity looks: slow at first, then spreading across creators, languages and audience demand before brands crowd in. A brand acting in month 3 or 4, with a small test, is early without guessing.",
      },
      { type: "heading", text: "Who owns it", id: "ownership" },
      {
        type: "paragraph",
        text: "Trend analysis works best with one owner and a monthly half-hour review, feeding a quarterly planning discussion. It sits naturally with whoever maintains the influencer market map, since both look at the same creator landscape over different time frames.",
        links: [
          { text: "influencer market map", href: "/blog/influencer-market-mapping" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Acting on a single data point.",
          "Confusing creator supply with audience demand.",
          "Following competitors into a trend they've already crowded.",
          "Betting a whole campaign on an untested opportunity.",
          "Presenting trend analysis as prediction.",
        ],
      },
      {
        type: "paragraph",
        text: "To test an emerging opportunity properly, influencer marketing testing has a test plan template.",
        links: [
          { text: "influencer marketing testing", href: "/blog/influencer-marketing-testing" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Influencer trend analysis looks months ahead at rising creators, sub-niches, formats, platforms and regions. Validate signals for persistence, spread, audience pull and commercial fit, separate them from seasonal and platform noise, and test small before scaling. Combined with an influencer market map, it shows where your creator programme should be heading next.",
        links: [{ text: "influencer market map", href: "/blog/influencer-market-mapping" }],
      },
    ],
    faqs: [
      {
        question: "What is influencer trend analysis?",
        answer:
          "Tracking signals over months to identify emerging creator opportunities, such as rising creators, growing sub-niches, spreading formats, platform shifts and regional growth, and validating them before acting.",
      },
      {
        question: "How is trend analysis different from trend tracking?",
        answer:
          "Trend tracking monitors short-term formats, sounds and topics to use in current briefs. Trend analysis looks at medium-term shifts in creators, niches and audiences that affect strategy.",
      },
      {
        question: "How can brands spot rising creators early?",
        answer:
          "Track median views on a watchlist monthly, note who established creators reference and collaborate with, watch first sponsored posts and audience reactions, and confirm growth is consistent and authentic.",
      },
    ],
  },
  {
    slug: "creator-intelligence-platform",
    category: "Campaign Strategy",
    title: "Creator Intelligence Platform: What Brands Should Expect From Modern Influencer Data Systems",
    seoTitle: "Creator Intelligence Platform: What Brands Should Expect",
    excerpt:
      "What a creator intelligence platform should contain: data with provenance and freshness, discovery, audience intelligence, explainable scoring, performance history, listening, competitor research, reporting, integrations and human review, plus evaluation questions.",
    metaDescription:
      "What a creator intelligence platform should include: data provenance and freshness, discovery, audience intelligence, scoring, listening and human review.",
    author: AUTHOR,
    publishedAt: INTEL_PUBLISHED,
    lastReviewed: INTEL_REVIEWED,
    readingTime: "7 min read",
    tags: ["creator intelligence platform", "influencer data platform", "influencer intelligence software", "creator data system", "influencer intelligence tool"],
    related: ["creator-intelligence", "influencer-marketing-software", "creator-discovery-platform"],
    hero: {
      src: "/blog/brand-guides/creator-intelligence-platform.svg",
      alt: "Creator intelligence platform layers: data, discovery, audience intelligence, scoring, listening, competitor research, history, reporting and human review",
    },
    body: [
      {
        type: "paragraph",
        text: "Vendors increasingly describe influencer software as 'creator intelligence'. Sometimes that means a genuine decision system that combines creator data, your campaign history and market context. Sometimes it means a discovery database with a dashboard. Knowing what a real intelligence system should contain helps you tell the difference and decide whether you need one.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator intelligence platform should combine trustworthy creator data (with source and freshness shown), discovery, audience intelligence, explainable scoring, your own performance and relationship history, social listening, competitor and market research, reporting and integrations, with clear points for human review. The test is whether it helps you decide and explain who to work with, why and in what role, not how many creators it indexes. Many brands get most of the value from a disciplined data process before buying a platform.",
      },
      {
        type: "paragraph",
        text: "For the operational features any influencer software needs (campaigns, approvals, payments), see influencer marketing software. This guide covers the intelligence layer specifically.",
        links: [{ text: "influencer marketing software", href: "/blog/influencer-marketing-software" }],
      },
      { type: "heading", text: "What a creator intelligence platform should contain", id: "components" },
      {
        type: "table",
        headers: ["Component", "What it should do", "Test question"],
        rows: [
          ["Data with provenance", "Show whether each figure is creator-connected, public or estimated, and when it was captured", "Can I see the source and date of this audience number?"],
          ["Data freshness", "Refresh profiles, views and audience data on a known schedule", "How old is this creator's data, and how do I trigger a refresh?"],
          ["Discovery", "Search by content, audience, language, region and lookalikes", "Does it find creators I know in my languages and categories?"],
          ["Audience intelligence", "Audience location, language, age, interests and quality signals", "Does it distinguish audience quality from audience fit?"],
          ["Explainable scoring", "Quality, fit and risk scores with visible inputs and adjustable weights", "Why did this creator score 4.1, and can I change the weights?"],
          ["Performance history", "Your results per creator, normalised across campaigns", "Can I compare creators across campaigns with a campaign index or similar?"],
          ["Relationship history", "Rates over time, reliability, rights, notes, rebook decisions", "Does history stay on the creator record?"],
          ["Social listening", "Category conversations, brand mentions, creator voices", "Does it cover the platforms and languages that matter to us?"],
          ["Competitor and market research", "Competitor collaborations, sponsorship density, market maps", "Can it show which creators competitors use repeatedly, with evidence?"],
          ["Reporting", "Insights, not just metrics; exportable", "Can I trace every number to its source?"],
          ["Integrations", "Connects to CRM, campaign tools, analytics, store and ads", "Does data flow both ways, or only out?"],
          ["Human review", "Workflow for people to check, override and annotate", "Can reviewers record why they disagree with a score?"],
        ],
      },
      { type: "heading", text: "The two capabilities that separate intelligence from a database", id: "separators" },
      { type: "subheading", text: "1. Your own history, joined to creator data" },
      {
        type: "paragraph",
        text: "Third-party data describes creators. Only your campaigns show how they perform for your brand, at what cost and how reliably. A platform that can't hold and analyse your performance and relationship history is a discovery tool, however good its search.",
      },
      { type: "subheading", text: "2. Explainable decisions" },
      {
        type: "paragraph",
        text: "Intelligence should produce reasons a person can check: 'audience 58% Karnataka (creator-connected, August), Kannada content, two past campaigns at 1.3× median CPA'. A black-box score of 87 invites either blind trust or none. Creator intelligence explains the decision questions a platform should help answer.",
        links: [{ text: "Creator intelligence", href: "/blog/creator-intelligence" }],
      },
      { type: "heading", text: "Data freshness and provenance", id: "freshness" },
      {
        type: "paragraph",
        text: "Stale data is the most common silent failure. Audience composition, views and rates change, sometimes quickly. A good platform shows the capture date beside every metric, refreshes active creators frequently and lets you request a refresh before booking. It also labels estimates clearly. A platform that shows audience location to a decimal place without saying it's modelled is presenting false precision.",
      },
      { type: "heading", text: "Where human review belongs", id: "human-review" },
      {
        type: "list",
        items: [
          "Content and brand-fit review before any creator is shortlisted.",
          "Interpreting fraud and anomaly flags.",
          "Adjusting scoring weights per campaign.",
          "Approving final selections and the reasons recorded.",
          "Checking automated sentiment and theme classifications on samples.",
          "Post-campaign scorecards that feed history.",
        ],
      },
      { type: "heading", text: "Evaluation questions", id: "evaluation" },
      {
        type: "list",
        items: [
          "Which data is first-party, public or estimated, and is it labelled everywhere it appears?",
          "How often is data refreshed, by creator group?",
          "How well does it cover our categories, languages, regions and tiers? Can we test with creators we know?",
          "Can we import our historical campaign data and keep adding to it?",
          "Can we see and change how scores are calculated?",
          "Which platforms and languages does listening cover?",
          "How does competitor research work, and how complete is it?",
          "How is creator personal data handled under Indian data protection rules?",
          "Can we export everything, including our own history and notes?",
        ],
      },
      {
        type: "paragraph",
        text: "The wider buying process, trial plans and AI-specific questions are covered in AI-powered influencer marketing tools and creator discovery platforms.",
        links: [
          { text: "AI-powered influencer marketing tools", href: "/blog/ai-influencer-marketing-tools" },
          { text: "creator discovery platforms", href: "/blog/creator-discovery-platform" },
        ],
      },
      { type: "heading", text: "Do you need one?", id: "need" },
      {
        type: "table",
        headers: ["Situation", "Likely answer"],
        rows: [
          ["A few campaigns a year; small creator pool", "No. A structured tracker, scorecards and periodic competitor checks deliver most of the value"],
          ["Regular campaigns, growing history, several team members", "Possibly; start with tools that hold your history and explain scores"],
          ["Always-on programme across languages and regions", "Often yes, if it covers your markets and integrates with your stack"],
          ["Agency partner already provides intelligence", "Check what you'd duplicate; make sure your data is shared with you"],
        ],
      },
      {
        type: "paragraph",
        text: "Kudozz is an agency rather than a platform vendor. Its creator discovery work combines technology with human review and delivers shortlists with dated audience data and a written reason for each creator.",
        links: [{ text: "creator discovery work", href: "/services/creator-discovery" }],
      },
      { type: "heading", text: "Bring your own data", id: "your-data" },
      {
        type: "paragraph",
        text: "A platform's value depends heavily on the history you put into it. Before evaluating vendors, prepare:",
      },
      {
        type: "list",
        items: [
          "Past campaigns: creators, deliverables, dates, total costs and results at fixed capture days.",
          "Scorecards or at least rebook decisions with reasons.",
          "Usage rights and expiry dates still in force.",
          "Your data dictionary: how you define each metric.",
          "Your market map and competitor logs, if you have them.",
        ],
      },
      {
        type: "paragraph",
        text: "Influencer marketing data lists the full dataset and how to collect it consistently.",
        links: [
          { text: "Influencer marketing data", href: "/blog/influencer-marketing-data" },
        ],
      },
      { type: "heading", text: "The first 90 days", id: "first-90-days" },
      {
        type: "template",
        label: "90-day rollout",
        text: "DAYS 1–30: Import history; map fields to your data dictionary; test coverage with creators you know; set scoring weights per objective\nDAYS 31–60: Run one campaign's discovery, shortlisting and ranking through the platform alongside your current method; compare outcomes\nDAYS 61–90: Review: did it surface better creators, explain decisions and save time? Keep, adjust or exit before renewal",
      },
      { type: "heading", text: "Agency, platform or both", id: "agency-platform" },
      {
        type: "table",
        headers: ["Setup", "Who holds the data", "Watch for"],
        rows: [
          ["Platform only", "Your team", "Enough people to do the review and judgment work"],
          ["Agency only", "Agency (unless agreed)", "Contract terms for sharing data and history with you"],
          ["Agency using your platform", "Your team", "Agency workflows fitting your platform"],
          ["Agency with its own tools", "Shared", "Regular exports into your records"],
        ],
      },
      {
        type: "paragraph",
        text: "Whichever model you choose, make sure your creator history ends up in your records, not only in a vendor's or partner's. Influencer ranking and the creator performance scorecard describe the decisions and records a platform should support.",
        links: [
          { text: "Influencer ranking", href: "/blog/influencer-ranking" },
          { text: "creator performance scorecard", href: "/blog/creator-performance-scorecard" },
        ],
      },
      { type: "heading", text: "Red flags", id: "red-flags" },
      {
        type: "list",
        items: [
          "Index size presented as the main benefit.",
          "Scores without visible inputs.",
          "No capture dates on metrics.",
          "Claims of predicting campaign results precisely.",
          "No way to import or export your own history.",
          "Listening and competitor features demoed only in English.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A creator intelligence platform earns the name when it combines trustworthy, dated data with your own history and market context, and produces explainable recommendations that people review. Judge platforms on provenance, freshness, coverage of your markets, explainability and how well they keep your history, not on database size. For where it sits among your other tools, see the influencer marketing technology stack.",
        links: [{ text: "influencer marketing technology stack", href: "/blog/influencer-marketing-technology" }],
      },
    ],
    faqs: [
      {
        question: "What should a creator intelligence platform include?",
        answer:
          "Data with source and freshness, discovery, audience intelligence, explainable scoring, your own performance and relationship history, social listening, competitor and market research, reporting, integrations and human review workflows.",
      },
      {
        question: "What's the difference between a creator intelligence platform and a discovery tool?",
        answer:
          "A discovery tool finds creators. An intelligence platform also holds your campaign history, explains scores and recommendations, and adds market context such as listening and competitor research.",
      },
      {
        question: "Can a creator intelligence platform predict influencer performance?",
        answer:
          "It can estimate ranges from history and benchmarks, but individual posts depend on creative, timing and platform distribution. Treat predictions as rough guidance, not forecasts.",
      },
    ],
  },
];
