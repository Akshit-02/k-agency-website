import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";
import { SOURCES } from "@/content/creator-resources/shared";

/**
 * Founder questions, batch 2 (roadmap topics 21–40, campaign management and execution). Five genuinely missing
 * pages: the campaign calendar (23), brand consistency across creator content (27), multi-platform campaigns (28),
 * the campaign project plan (29) and a master campaign checklist (34). The other fifteen topics update, consolidate
 * into or are already served by existing owners. See docs/founder-questions-21-40-audit.md.
 */
const PUBLISHED = "2026-10-14";
const REVIEWED = "October 2026";

const EXT = {
  tiktokDisclosure: "https://ads.tiktok.com/resources/help/article/about-the-content-disclosure-setting-for-creators",
  tiktokSparkAds: "https://ads.tiktok.com/help/article/how-to-create-spark-ads-for-smart-campaigns-on-tiktok-ads-manager",
  snapPartnerships: "https://creators.snap.com/learn-reap-rewards-brand-partnerships",
  linkedinBrandPartnership: "https://www.socialmediatoday.com/news/linkedin-rolls-out-brand-partnership-tags/691582/",
  youtubeShortsLength: "https://support.google.com/youtube/answer/15424877",
  asaInfluencersGuide: "https://www.asa.org.uk/advice-online/influencers-guide.html",
  acccInfluencers: "https://www.accc.gov.au/about-us/publications/social-media-influencer-testimonials-and-endorsements",
  asasSocial: "https://asas.org.sg/About/Social-Media",
};

export const founderExecutionPosts: BlogPost[] = [
  // Topic 23
  {
    slug: "influencer-campaign-calendar",
    category: "Campaign Strategy",
    title: "How Do You Build an Influencer Campaign Calendar?",
    seoTitle: "Influencer Campaign Calendar: How to Build One",
    excerpt:
      "How to build an influencer campaign calendar: the annual planning calendar and the production calendar, working back from anchor dates, staggering go-lives, market moments in India, the Gulf, the UK, Australia and Singapore, and a template.",
    metaDescription:
      "Build an influencer campaign calendar: anchor dates, lead times, staggered go-lives, market moments and blackout dates, with a template your team can copy.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "7 min read",
    tags: ["influencer campaign calendar", "influencer content calendar", "influencer posting schedule", "creator campaign schedule"],
    related: ["influencer-campaign-project-plan", "influencer-marketing-campaign-timeline", "influencer-marketing-annual-plan"],
    hero: {
      src: "/blog/brand-guides/influencer-campaign-calendar.svg",
      alt: "Influencer campaign calendar: anchor dates, work back, stagger go-lives, add market moments, mark blackout dates",
    },
    body: [
      {
        type: "paragraph",
        text: "Most influencer campaigns that miss their moment didn't fail on creative. They failed on dates: product reached creators after the launch, drafts landed during a public holiday, or every creator posted on the same afternoon and the campaign disappeared by the weekend. A calendar fixes this by putting every date that matters in one place, worked back from the dates that can't move.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Build an influencer campaign calendar in six steps: fix the anchor dates that can't move (launch, sale, event), add the market moments and holidays that affect your audiences and creators, work backwards from each anchor using realistic lead times for sourcing, contracts, shipping, drafts and approvals, stagger creator go-lives rather than posting all at once, mark blackout dates (embargoes, exclusivity periods, sensitive dates), and give each date an owner. Keep two views: an annual calendar for planning campaigns across the year, and a production calendar with every creator's dates for each campaign.",
      },
      { type: "heading", text: "Two calendars, two jobs", id: "two-calendars" },
      {
        type: "table",
        headers: ["", "Annual planning calendar", "Campaign production calendar"],
        rows: [
          ["Answers", "Which campaigns run when, and how they fit the business calendar", "What each creator must do, by when"],
          ["Main dates", "Launches, sales, seasons, market holidays, budget periods", "Brief sent, product delivered, draft due, feedback due, go-live, insights due"],
          ["Owner", "Marketing lead", "Campaign manager"],
          ["Reviewed", "Quarterly", "Daily or weekly during a campaign"],
          ["Detail", "Weeks and months", "Days, and in launch week, hours"],
        ],
      },
      {
        type: "paragraph",
        text: "Planning a full year of creator activity is covered in the influencer marketing annual plan. This guide focuses on building the calendar itself.",
        links: [{ text: "influencer marketing annual plan", href: "/blog/influencer-marketing-annual-plan" }],
      },
      { type: "heading", text: "Step 1: Fix the anchor dates", id: "anchors" },
      {
        type: "paragraph",
        text: "Anchor dates are the ones the campaign serves: a product launch, a marketplace sale, a store opening, an event, a festival. Write them down first and agree with stakeholders that they're fixed. If an anchor date might move, note the latest date it can move to, because everything else depends on it.",
      },
      { type: "heading", text: "Step 2: Add market moments and holidays", id: "market-moments" },
      {
        type: "table",
        headers: ["Market", "Moments that commonly shape creator calendars", "Planning note"],
        rows: [
          ["India", "Diwali and the wider festive season, regional festivals (Durga Puja, Onam, Pongal and others), wedding season, marketplace sale events", "Popular creators book up early; regional festivals fall on different dates by state"],
          ["UAE and Saudi Arabia", "Ramadan, Eid al-Fitr, Eid al-Adha, national days, shopping festivals, summer travel", "Islamic holidays follow the lunar calendar and move about 11 days earlier each year; final dates depend on moon sighting"],
          ["United Kingdom", "Black Friday, Christmas, January sales, back to school", "Retail peaks concentrate demand for creators in Q4"],
          ["Australia", "End of financial year sales (June), Christmas in summer, Black Friday", "Seasons are reversed from the northern hemisphere, which changes product and content timing"],
          ["Singapore", "Lunar New Year, mid-year and year-end sales, 11.11 and 12.12 online sales", "Multilingual audiences may need separate creators or versions"],
        ],
      },
      {
        type: "paragraph",
        text: "Check holiday dates each year from official sources such as the UAE government's public holidays page, and confirm working weeks in each market. Seasonal planning in detail is covered in seasonal influencer marketing in India, UK seasonal influencer campaigns and influencer campaign timelines in Australia.",
        links: [
          { text: "UAE government's public holidays page", href: "https://u.ae/en/information-and-services/public-holidays-and-religious-affairs/public-holidays" },
          { text: "seasonal influencer marketing in India", href: "/blog/seasonal-influencer-marketing-india" },
          { text: "UK seasonal influencer campaigns", href: "/blog/seasonal-influencer-marketing-uk" },
          { text: "influencer campaign timelines in Australia", href: "/blog/influencer-campaign-timeline-australia" },
        ],
      },
      { type: "heading", text: "Step 3: Work backwards from each anchor", id: "work-backwards" },
      {
        type: "paragraph",
        text: "For each anchor, count back through the stages that must happen first. The lead times below are planning assumptions for a campaign starting from scratch; use your own history once you have it.",
      },
      {
        type: "table",
        headers: ["Milestone", "Counts back from", "What usually decides the gap"],
        rows: [
          ["Results and report", "Last go-live", "Your measurement window: a week for reach, several weeks for sales"],
          ["Last go-live", "Anchor date", "Whether content should lead into the moment or follow it"],
          ["Final approval", "Each go-live", "At least a couple of working days so creators aren't rushed"],
          ["Drafts due", "Final approval", "Your review time plus one revision round"],
          ["Product delivered", "Drafts due", "Time for creators to use the product honestly before filming"],
          ["Brief and kickoff", "Product delivered", "Shipping time, especially to smaller cities or across borders"],
          ["Contracts signed", "Brief", "Negotiation, usage rights and legal review"],
          ["Shortlist approved", "Contracts", "Outreach and response time"],
        ],
      },
      {
        type: "paragraph",
        text: "Typical stage lengths, and what slows them down, are in influencer marketing campaign timeline.",
        links: [{ text: "influencer marketing campaign timeline", href: "/blog/influencer-marketing-campaign-timeline" }],
      },
      { type: "heading", text: "Step 4: Stagger go-lives", id: "stagger" },
      {
        type: "paragraph",
        text: "Unless the objective is a single moment of maximum visibility, spread creator posts across days or weeks. Staggering keeps the brand visible for longer, lets you learn from the first posts and adjust later briefs, spreads your team's checking and comment-moderation load, and gives people several chances to see the product from different creators. For launches, a common shape is a small group of creators before launch (under embargo, posting on launch day), a larger wave in launch week, and follow-up content afterwards.",
      },
      {
        type: "paragraph",
        text: "Schedule posts in the audience's local time, not head office time, and use each creator's own audience insights to choose the hour rather than generic 'best time to post' advice. Instagram's professional insights, for example, show creators how their audience engages over time.",
        links: [{ text: "Instagram's professional insights", href: SOURCES.instagramInsights }],
      },
      { type: "heading", text: "Step 5: Mark blackout dates", id: "blackouts" },
      {
        type: "list",
        items: [
          "Embargoes: nothing goes live before the launch announcement.",
          "Exclusivity periods: dates when a creator can't post for a competitor, or when your brand shouldn't sit next to a competitor's campaign on the same account.",
          "Sensitive dates: religious observances, days of national significance, and periods when light-hearted promotion would be inappropriate.",
          "Your team's own blackouts: office closures and holidays when nobody can approve content.",
          "Stock and fulfilment limits: dates when you couldn't ship orders the campaign creates.",
        ],
      },
      { type: "heading", text: "Step 6: Give every date an owner", id: "owners" },
      {
        type: "paragraph",
        text: "A date without an owner is a hope. Each milestone needs one named person on your side (or the agency's) who confirms it happened, plus a backup. Share the calendar in a format everyone can see, and agree that only the owner moves a date, with a note of why.",
      },
      { type: "heading", text: "A production calendar template", id: "template" },
      {
        type: "template",
        label: "Columns for a campaign production calendar",
        text: "Creator | Platform and deliverable | Market and time zone | Brief sent | Product shipped | Product delivered (confirmed) | Concept due | Draft due | Feedback due | Final due | Go-live date and local time | Minimum live until | Insights due | Owner | Status | Notes",
      },
      {
        type: "paragraph",
        text: "The calendar shows when things should happen; the tracker shows whether they did. Keep them linked rather than separate: influencer campaign status tracking covers the tracker, and what an influencer campaign project plan should include covers the document that holds scope, owners and risks alongside the dates.",
        links: [
          { text: "influencer campaign status tracking", href: "/blog/influencer-campaign-tracker" },
          { text: "what an influencer campaign project plan should include", href: "/blog/influencer-campaign-project-plan" },
        ],
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical: a skincare brand launches a serum on a fixed Monday in India and the UAE. Working back, it plans results two weeks after the last post, three go-live waves (four creators on launch day under embargo, eight in launch week, six in the fortnight after), final approvals two working days before each wave, drafts five working days before that, product delivered at least ten days before drafts so creators can try the serum properly, and contracts signed a week before shipping. The UAE creators' permit numbers are checked before contracts, and drafts in Arabic are reviewed by a native speaker. The calendar marks Eid dates as tentative until confirmed, and no approvals are expected on the team's office holiday.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Planning forward from today instead of backwards from the anchor date.",
          "Forgetting shipping time, especially to smaller cities or across borders.",
          "Setting draft deadlines without the reviewer's availability.",
          "Every creator posting on the same day by default.",
          "Holiday dates copied from last year without checking.",
          "A calendar nobody owns, updated only when something has already slipped.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A good influencer campaign calendar starts from the dates that can't move, works backwards through realistic lead times, staggers go-lives, respects each market's moments and blackouts, and gives every date an owner. Keep an annual view for planning and a production view for each campaign, and link both to the tracker that shows what actually happened.",
      },
    ],
    faqs: [
      {
        question: "How do you create an influencer campaign calendar?",
        answer:
          "Fix the anchor dates, add market moments and holidays, work backwards with realistic lead times for sourcing, contracts, shipping, drafts and approvals, stagger go-lives, mark blackout dates and give every date an owner.",
      },
      {
        question: "Should all influencers post on the same day?",
        answer:
          "Usually not. Staggering posts keeps the brand visible for longer, lets you learn from early posts and spreads your team's workload. Same-day posting suits a single moment, such as a launch, where concentrated visibility is the goal.",
      },
      {
        question: "How far ahead should an influencer campaign calendar be planned?",
        answer:
          "Keep an annual calendar for major moments and build each production calendar backwards from its anchor date. Festive and seasonal peaks need the earliest start, because popular creators book up.",
      },
    ],
  },

  // Topic 27
  {
    slug: "influencer-brand-consistency",
    category: "Campaign Strategy",
    title: "How Do You Maintain Brand Consistency Across Influencer Content?",
    seoTitle: "Brand Consistency Across Influencer Content",
    excerpt:
      "How to keep many creators on-brand without making their content look like ads: decide what's fixed, flexible and free, give creators a one-page brand kit, check concepts before filming, review against one standard and adapt across languages.",
    metaDescription:
      "Keep influencer content on-brand without killing authenticity: what to fix and what to leave free, a creator brand kit, concept checks and multi-market consistency.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "7 min read",
    tags: ["brand consistency influencer content", "creator brand guidelines", "influencer brand kit", "on-brand influencer content"],
    related: ["influencer-campaign-brief", "influencer-content-approval", "influencer-content-quality-check"],
    hero: {
      src: "/blog/brand-guides/influencer-brand-consistency.svg",
      alt: "Brand consistency across creators: fix the message and claims, keep format flexible, leave the creator's voice free",
    },
    body: [
      {
        type: "paragraph",
        text: "Ten creators, ten styles, one brand. Push too hard for consistency and every video sounds like the same ad read by different people, which audiences scroll past. Push too little and one creator calls the product by the wrong name, another makes a claim legal never approved, and a third shows it next to a competitor. The answer is to be strict about a small number of things and genuinely relaxed about the rest.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Maintain brand consistency across influencer content by separating what must be identical (the key message, product facts, approved claims, disclosure, values and red lines), what should be recognisable (how the product is shown, the call to action, the offer) and what should be left to the creator (voice, format, setting, humour, story). Put the fixed and flexible items in a one-page creator brand kit, agree concepts before filming, review every draft against the same checklist with one consolidated voice, and adapt rather than translate when you work across languages and markets.",
      },
      { type: "heading", text: "Fixed, flexible and free", id: "fixed-flexible-free" },
      {
        type: "table",
        headers: ["Layer", "What belongs here", "Why"],
        rows: [
          ["Fixed (must be identical)", "Product name and pronunciation, key message, approved claims and their exact wording, price and offer terms, disclosure, legal requirements, red lines (topics or comparisons to avoid)", "Errors here create legal, compliance or credibility problems"],
          ["Flexible (should be recognisable)", "How the product appears on screen, the call to action, the link or code, campaign hashtag, one or two brand phrases", "Repetition across creators builds recall"],
          ["Free (left to the creator)", "Tone, humour, format, setting, story, editing style, how they introduce the product", "This is what makes creator content work; scripting it removes the reason you hired them"],
        ],
      },
      {
        type: "paragraph",
        text: "Most consistency problems come from putting too much in the fixed layer, not too little. If a brief tries to control the creator's opening line, the music and the shot list, expect stiff content and more revision rounds.",
      },
      { type: "heading", text: "The one-page creator brand kit", id: "brand-kit" },
      {
        type: "template",
        label: "Creator brand kit (one page)",
        text: "WHO WE ARE: two sentences a creator's audience would understand\nTHE ONE THING TO GET ACROSS: the key message, in plain words\nPRODUCT FACTS: name (and how to say it), what it does, who it's for, price\nAPPROVED CLAIMS: exact wording, and claims we can't make\nHOW TO SHOW THE PRODUCT: packaging visible, shade or colour accuracy, how it's used correctly\nWORDS WE USE / AVOID: e.g. 'serum' not 'cream'; avoid 'cure', 'guaranteed'\nTONE GUARDRAILS: what's fine (humour, honesty about limits) and what isn't\nRED LINES: competitors, sensitive topics, unsafe use, minors\nDISCLOSURE: exact label and placement for each platform and market\nCALL TO ACTION: link or code, and what we want people to do\nGOOD EXAMPLES: two or three creator posts (ours or others') that hit the balance",
      },
      {
        type: "paragraph",
        text: "Send the kit with the campaign brief rather than instead of it: the brief covers this campaign's objective and deliverables, the kit covers the brand rules that apply to every campaign. Influencer campaign brief covers the brief itself.",
        links: [{ text: "Influencer campaign brief", href: "/blog/influencer-campaign-brief" }],
      },
      { type: "heading", text: "Check concepts before filming", id: "concepts" },
      {
        type: "paragraph",
        text: "The cheapest place to fix an off-brand idea is before the camera is on. Ask each creator for a short concept (the hook, the story, where the product appears and what they'll say about it) and approve it within a day or two. This catches wrong claims, risky settings and misunderstandings while they're a sentence, not a reshoot. Keep concept approval light: it's to check direction, not to rewrite the creator's idea.",
      },
      { type: "heading", text: "Review against one standard", id: "one-standard" },
      {
        type: "list",
        items: [
          "Use the same review checklist for every creator: fixed items first (claims, disclosure, product facts), then flexible items, and leave the free layer alone unless something is genuinely wrong.",
          "Have one person consolidate feedback so creators don't receive contradictory comments from marketing, legal and the founder.",
          "Separate must-fix comments from suggestions, and say which is which.",
          "Keep a short log of recurring issues and add them to the brand kit for next time.",
        ],
      },
      {
        type: "paragraph",
        text: "The approval workflow is covered in creator content approval process, the checklist in influencer content quality check, and how to phrase feedback in influencer feedback.",
        links: [
          { text: "creator content approval process", href: "/blog/influencer-content-approval" },
          { text: "influencer content quality check", href: "/blog/influencer-content-quality-check" },
          { text: "influencer feedback", href: "/blog/influencer-feedback" },
        ],
      },
      { type: "heading", text: "Consistency across languages and markets", id: "markets" },
      {
        type: "table",
        headers: ["Issue", "What to do"],
        rows: [
          ["Translating the key message", "Adapt it (transcreation) with a native speaker, so it sounds natural in Hindi, Tamil, Arabic or any other language rather than translated"],
          ["Claims", "Keep an approved-claims list per market; a claim allowed in one market may need different substantiation or wording in another"],
          ["Disclosure", "Use each market's expected label and placement, such as ASCI's guidance in India or the ASA's 'Ad' recommendation in the UK"],
          ["Cultural fit", "Check settings, gestures, clothing, music and humour with someone from the market, especially in the Gulf during Ramadan"],
          ["Review", "Native reviewers for each language, including different Arabic dialects"],
        ],
      },
      {
        type: "paragraph",
        text: "Running creators in several languages is covered in regional and vernacular influencer marketing and the international influencer campaign playbook.",
        links: [
          { text: "regional and vernacular influencer marketing", href: "/blog/regional-influencer-marketing-india" },
          { text: "international influencer campaign playbook", href: "/blog/international-influencer-campaign-playbook" },
        ],
      },
      { type: "heading", text: "How to tell whether it's working", id: "measure" },
      {
        type: "list",
        items: [
          "Message pickup: do comments repeat the key message or ask questions it answers?",
          "Fixed-layer errors: how many drafts failed on claims, product facts or disclosure? This should fall campaign by campaign.",
          "Revision rounds per creator: rising rounds usually mean the kit or brief is unclear, or the fixed layer has grown too big.",
          "Performance against the creator's usual content: on-brand posts that perform far below a creator's norm suggest over-control.",
          "Brand recall, where it matters enough to measure, through a brand lift survey.",
        ],
      },
      {
        type: "paragraph",
        text: "Recall measurement is covered in influencer brand lift surveys.",
        links: [{ text: "influencer brand lift surveys", href: "/blog/influencer-brand-lift-survey" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Scripting creators to get consistency, then wondering why the content reads as ads.",
          "No approved-claims list, so each creator invents their own.",
          "Feedback from several people with different standards.",
          "Checking brand consistency only after filming.",
          "Translating a message word for word into another language.",
          "A different brand kit, or none, for every campaign.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Brand consistency across creators comes from being strict about a short list (message, facts, claims, disclosure, red lines), giving creators a clear one-page kit, catching problems at concept stage and reviewing against one standard. Leave the voice to the creator; that's what audiences trust.",
      },
    ],
    faqs: [
      {
        question: "How do brands keep influencer content consistent?",
        answer:
          "By fixing a short list of things (key message, product facts, approved claims, disclosure, red lines), sharing them in a one-page creator brand kit, approving concepts before filming and reviewing every draft against the same checklist with one consolidated voice.",
      },
      {
        question: "How much creative control should brands give influencers?",
        answer:
          "Control what creates legal, compliance or credibility risk, and leave tone, format, setting and storytelling to the creator. Over-controlling content usually makes it read as an ad and perform below the creator's normal posts.",
      },
      {
        question: "What should creator brand guidelines include?",
        answer:
          "A short brand description, the key message, product facts and pronunciation, approved and banned claims, how to show the product, words to use and avoid, tone guardrails, red lines, disclosure wording, the call to action and a few good examples.",
      },
    ],
  },

  // Topic 28
  {
    slug: "multi-platform-influencer-campaigns",
    category: "Campaign Strategy",
    title: "How Do You Manage Influencer Campaigns Across Multiple Platforms?",
    seoTitle: "Multi-Platform Influencer Campaigns: How to Manage Them",
    excerpt:
      "How to run one influencer campaign across Instagram, YouTube, TikTok, Snapchat and LinkedIn: give each platform a job, plan platform-native deliverables, use each platform's disclosure tool, track and report consistently, and handle market differences.",
    metaDescription:
      "Manage influencer campaigns across several platforms: a job for each platform, native deliverables, disclosure tools, creator ads, tracking and consistent reporting.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "8 min read",
    tags: ["multi-platform influencer campaign", "cross-platform influencer marketing", "influencer campaign Instagram YouTube", "influencer campaign platforms"],
    related: ["influencer-marketing-platforms-india", "influencer-reach-vs-impressions", "influencer-campaign-coordination"],
    hero: {
      src: "/blog/brand-guides/multi-platform-influencer-campaigns.svg",
      alt: "One campaign idea, platform-native content: Instagram, YouTube, TikTok, Snapchat and LinkedIn each with a job",
    },
    body: [
      {
        type: "paragraph",
        text: "Running a campaign on two or three platforms is rarely twice the work of one; it's often more, because deliverables, disclosure tools, ad options, metrics and audiences all differ. Brands that handle it well don't post the same video everywhere. They decide what each platform is for, brief creators for that platform, and report everything in one comparable format.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To manage an influencer campaign across multiple platforms, give each platform a specific job (reach, explanation, search, community or B2B credibility), keep one campaign idea but brief platform-native executions, specify every deliverable per platform in the contract, use each platform's own branded-content disclosure tool, plan creator ads separately for each platform, tag links by platform and creator, and normalise reporting because platforms define views and reach differently. Add platforms only when each has a clear role and budget; one platform done well usually beats three done thinly.",
      },
      { type: "heading", text: "Give each platform a job", id: "platform-jobs" },
      {
        type: "table",
        headers: ["Platform", "Typical job in a campaign", "Formats", "Disclosure tool", "Creator-ad option"],
        rows: [
          ["Instagram", "Reach and social proof; Stories for links and reminders", "Reels, Stories, carousels, collab posts", "Paid partnership label", "Partnership ads"],
          ["YouTube", "Explanation, reviews and search-led discovery that lasts", "Long-form integrations, Shorts", "'Includes paid promotion' disclosure", "Varies by market and program; check current options"],
          ["TikTok (where available)", "Reach and trends in markets where it operates", "Short video, LIVE", "Content disclosure setting", "Spark Ads"],
          ["Snapchat", "Reach with younger audiences, strong in parts of the Gulf", "Stories, Spotlight", "Paid Partnership label", "Brand boosting of tagged creator posts"],
          ["LinkedIn", "B2B credibility and decision-makers", "Posts, documents, video", "Brand Partnership label", "Thought Leader Ads"],
        ],
      },
      {
        type: "paragraph",
        text: "Disclosure tools: Instagram's paid partnership label, YouTube's paid promotion disclosure, TikTok's content disclosure setting, Snapchat's Paid Partnership label and LinkedIn's Brand Partnership label (as reported by Social Media Today). Platform tools supplement, but don't replace, a clear label in the content where local rules require one. Creator-ad options include Instagram partnership ads and TikTok Spark Ads.",
        links: [
          { text: "Instagram's paid partnership label", href: SOURCES.instagramPaidPartnership },
          { text: "YouTube's paid promotion disclosure", href: SOURCES.youtubePaidPromotion },
          { text: "TikTok's content disclosure setting", href: EXT.tiktokDisclosure },
          { text: "Snapchat's Paid Partnership label", href: EXT.snapPartnerships },
          { text: "as reported by Social Media Today", href: EXT.linkedinBrandPartnership },
          { text: "Instagram partnership ads", href: "/blog/instagram-partnership-ads" },
          { text: "TikTok Spark Ads", href: EXT.tiktokSparkAds },
        ],
      },
      { type: "heading", text: "Which platforms in which markets", id: "markets" },
      {
        type: "list",
        items: [
          "India: Instagram and YouTube carry most creator campaigns, with LinkedIn for B2B. TikTok has been blocked in India since 2020, so don't plan on it there.",
          "UAE and Saudi Arabia: Instagram, TikTok, YouTube and Snapchat all matter, and Snapchat is especially significant in Saudi Arabia. Creators also need the relevant licence or permit in each market.",
          "UK, Australia and Singapore: Instagram, TikTok and YouTube are the usual core, with LinkedIn for B2B.",
        ],
      },
      {
        type: "paragraph",
        text: "Choosing platforms is covered in top social media platforms for influencer marketing in India and Snapchat influencer marketing in Saudi Arabia.",
        links: [
          { text: "top social media platforms for influencer marketing in India", href: "/blog/influencer-marketing-platforms-india" },
          { text: "Snapchat influencer marketing in Saudi Arabia", href: "/blog/snapchat-influencer-marketing-saudi-arabia" },
        ],
      },
      {
        type: "paragraph",
        text: "If you are still deciding which platforms to use, Instagram vs YouTube vs TikTok compares them by objective, budget and market availability.",
        links: [
          { text: "Instagram vs YouTube vs TikTok", href: "/blog/instagram-vs-youtube-vs-tiktok" },
        ],
      },
      { type: "heading", text: "One idea, platform-native content", id: "native-content" },
      {
        type: "paragraph",
        text: "Keep the campaign idea, key message and offer the same everywhere; change the execution. A YouTube integration can explain how the product works in two minutes; a Reel needs the hook in the first seconds; a LinkedIn post needs a professional point of view. Cross-posting the same file to every platform usually underperforms, and some platforms reduce the reach of content that looks recycled. Platform limits also change: YouTube, for example, now allows Shorts of up to three minutes. Check current specs when you brief rather than relying on last year's.",
        links: [
          { text: "some platforms reduce the reach of content that looks recycled", href: SOURCES.instagramOriginality },
          { text: "YouTube, for example, now allows Shorts of up to three minutes", href: EXT.youtubeShortsLength },
        ],
      },
      { type: "heading", text: "Put every platform in the contract", id: "contract" },
      {
        type: "table",
        headers: ["Term", "Specify per platform"],
        rows: [
          ["Deliverable", "Format, length, number of posts or frames, links or stickers"],
          ["Dates", "Go-live date and local time for each platform; order of posting"],
          ["Minimum live period", "How long each post stays up; Stories expire unless saved to highlights"],
          ["Disclosure", "The platform tool plus the label in the content"],
          ["Cross-posting", "Whether the creator may repost the content to other platforms, and how it's disclosed there"],
          ["Usage rights", "Brand reuse and paid ads on which platforms, for how long"],
          ["Ad permissions", "Partnership ads, Spark Ads or boosting authorisation, and for how long"],
          ["Insights", "Which metrics, as screenshots or exports, by when"],
        ],
      },
      {
        type: "paragraph",
        text: "Usage rights by platform are covered in influencer usage rights.",
        links: [{ text: "influencer usage rights", href: "/blog/influencer-usage-rights" }],
      },
      { type: "heading", text: "Stagger or launch together?", id: "sequencing" },
      {
        type: "paragraph",
        text: "Launching on all platforms at once maximises a single moment. Sequencing (for example, a YouTube review first, then Reels and Stories that send people to it) lets each platform play its role and lets you learn as you go. Most campaigns benefit from a planned sequence; the influencer campaign calendar covers how to build it.",
        links: [{ text: "influencer campaign calendar", href: "/blog/influencer-campaign-calendar" }],
      },
      { type: "heading", text: "Tracking and reporting across platforms", id: "reporting" },
      {
        type: "list",
        items: [
          "Tag every link with the platform and creator (for example in UTM parameters) so traffic doesn't merge into one 'social' line.",
          "Give each creator a separate code per platform only if you need that detail; otherwise one code per creator is easier for audiences.",
          "Collect insights screenshots or exports from creators for each platform, dated, because you can't see their analytics.",
          "Don't add up views across platforms as if they were the same metric. Platforms count views, reach and impressions differently; report each platform on its own definition, then compare on outcomes you control, such as clicks, sign-ups and orders.",
        ],
      },
      {
        type: "paragraph",
        text: "Metric definitions are explained in reach vs impressions vs views in influencer marketing, and why platform and website numbers disagree in influencer reporting discrepancies.",
        links: [
          { text: "reach vs impressions vs views in influencer marketing", href: "/blog/influencer-reach-vs-impressions" },
          { text: "influencer reporting discrepancies", href: "/blog/influencer-reporting-discrepancies" },
        ],
      },
      { type: "heading", text: "Running it day to day", id: "operations" },
      {
        type: "list",
        items: [
          "One tracker with a row per creator per platform deliverable, not per creator.",
          "Platform-specific review checks: safe zones for on-screen text, captions, music licensing, link stickers, disclosure tool switched on.",
          "Someone who knows each platform's ad tools if creator ads are part of the plan.",
          "Comment monitoring on every platform the content appears on, including replies and duets where they exist.",
        ],
      },
      {
        type: "paragraph",
        text: "Managing many creators at once is covered in influencer campaign coordination, and per-format quality checks in influencer content quality check.",
        links: [
          { text: "influencer campaign coordination", href: "/blog/influencer-campaign-coordination" },
          { text: "influencer content quality check", href: "/blog/influencer-content-quality-check" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Adding platforms because they exist, not because they have a job.",
          "One video posted everywhere unchanged.",
          "Contracts that say 'one post' without naming platforms, formats and dates.",
          "Ad permissions not agreed, so the best content can't be boosted.",
          "Views from different platforms added together in one headline number.",
          "Planning TikTok for an India campaign.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Multi-platform campaigns work when each platform has a job, creators make content native to it, contracts spell out every deliverable and permission per platform, disclosure uses each platform's tool plus a clear label, and reporting respects each platform's definitions. Start with the platforms your customers actually use, and add more only when each has a role and budget.",
      },
    ],
    faqs: [
      {
        question: "Should influencers post the same content on every platform?",
        answer:
          "Usually not. Keep the idea and message the same but adapt the execution to each platform's format and audience. Recycled content often performs worse, and some platforms limit the reach of content that looks reposted.",
      },
      {
        question: "How do you disclose sponsored content on different platforms?",
        answer:
          "Use each platform's branded-content tool (Instagram's paid partnership label, YouTube's paid promotion disclosure, TikTok's content disclosure setting, Snapchat's Paid Partnership label, LinkedIn's Brand Partnership label) and also a clear label in the content where local rules require it.",
      },
      {
        question: "How do you compare influencer results across platforms?",
        answer:
          "Report each platform on its own metric definitions rather than adding views together, then compare platforms on outcomes you measure yourself, such as clicks, sign-ups, orders and cost per result.",
      },
    ],
  },

  // Topic 29
  {
    slug: "influencer-campaign-project-plan",
    category: "Campaign Strategy",
    title: "What Should an Influencer Campaign Project Plan Include?",
    seoTitle: "Influencer Campaign Project Plan: What to Include",
    excerpt:
      "The twelve sections of an influencer campaign project plan: scope, deliverables, milestones, dependencies, roles (RACI), budget and payments, approvals, risks, communication, change control, measurement and close-out, with a template and examples.",
    metaDescription:
      "What an influencer campaign project plan should include: scope, milestones, dependencies, RACI, budget, approvals, risks, communication and close-out, with a template.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "8 min read",
    tags: ["influencer campaign project plan", "influencer campaign plan template", "influencer campaign RACI", "influencer campaign risk register"],
    related: ["influencer-campaign-calendar", "influencer-campaign-checklist", "influencer-campaign-kickoff"],
    hero: {
      src: "/blog/brand-guides/influencer-campaign-project-plan.svg",
      alt: "Influencer campaign project plan: scope, milestones, owners, risks and change control in one document",
    },
    body: [
      {
        type: "paragraph",
        text: "A brief tells creators what to make. A calendar says when. A tracker shows where each creator is. None of them says who decides, what happens if the product is late, how a scope change gets approved, or what 'done' means. That's the job of the project plan: the one document the brand, the agency and everyone approving content work from.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "An influencer campaign project plan should include twelve things: scope and objective (including what's out of scope), a deliverables register, milestones and stage gates, dependencies and the critical path, roles and responsibilities (RACI), budget and payment schedule, the approval workflow and turnaround times, a risk register, a communication and escalation plan, change control, the measurement and reporting plan, and close-out tasks. For a small campaign it can be one page; for a launch with many creators and markets, a few pages and a linked tracker.",
      },
      { type: "heading", text: "Project plan vs brief vs calendar vs tracker", id: "differences" },
      {
        type: "table",
        headers: ["Document", "Answers", "Audience", "Guide"],
        rows: [
          ["Project plan", "Scope, owners, decisions, risks, changes", "Brand team and agency", "This guide"],
          ["Campaign brief", "What creators should make and say", "Creators", "Influencer campaign brief"],
          ["Calendar", "When each step happens", "Everyone", "Influencer campaign calendar"],
          ["Tracker", "Where each creator is right now", "Campaign team", "Influencer campaign status tracking"],
          ["Checklist", "Whether anything has been forgotten", "Campaign team", "Influencer campaign checklist"],
        ],
      },
      {
        type: "paragraph",
        text: "Those guides are: influencer campaign brief, influencer campaign calendar, influencer campaign status tracking and the influencer campaign checklist.",
        links: [
          { text: "influencer campaign brief", href: "/blog/influencer-campaign-brief" },
          { text: "influencer campaign calendar", href: "/blog/influencer-campaign-calendar" },
          { text: "influencer campaign status tracking", href: "/blog/influencer-campaign-tracker" },
          { text: "influencer campaign checklist", href: "/blog/influencer-campaign-checklist" },
        ],
      },
      { type: "heading", text: "The twelve sections", id: "sections" },
      { type: "subheading", text: "1. Scope and objective" },
      {
        type: "paragraph",
        text: "The objective and primary KPI, markets, platforms, number of creators, and a short out-of-scope list (for example: paid media buying, product photography, extra markets). Most disputes later are about scope that was never written down.",
      },
      { type: "subheading", text: "2. Deliverables register" },
      {
        type: "paragraph",
        text: "Every deliverable the campaign must produce, from both sides: creator posts by platform and format, usage rights, reports, the content library, and the brand's own deliverables (product, claims list, approvals).",
      },
      { type: "subheading", text: "3. Milestones and stage gates" },
      {
        type: "paragraph",
        text: "The few checkpoints where the campaign shouldn't move forward until something is true: shortlist approved, contracts signed, product delivered, drafts approved, go-live complete, report delivered. Each gate has a date and an owner.",
      },
      { type: "subheading", text: "4. Dependencies and the critical path" },
      {
        type: "paragraph",
        text: "What must finish before something else can start. In creator campaigns the critical path usually runs through product delivery (no product, no filming), claims approval (no approved claims, no drafts) and brand review time. If any of these slips, the go-live date slips, so the plan should show them clearly and name who watches them.",
      },
      { type: "subheading", text: "5. Roles and responsibilities (RACI)" },
      {
        type: "table",
        headers: ["Task", "Responsible", "Accountable", "Consulted", "Informed"],
        rows: [
          ["Objective and budget", "Marketing manager", "Head of marketing", "Finance", "Agency"],
          ["Creator shortlist", "Agency or campaign manager", "Marketing manager", "Brand team", "Finance"],
          ["Contracts and rights", "Agency or campaign manager", "Marketing manager", "Legal", "Finance"],
          ["Approved claims", "Product or regulatory lead", "Head of marketing", "Legal", "Agency"],
          ["Draft approval", "Marketing manager", "Marketing manager", "Legal for claims", "Agency"],
          ["Creator payments", "Finance", "Marketing manager", "Agency", "Creators"],
          ["Report and post-mortem", "Agency or campaign manager", "Marketing manager", "Brand team", "Leadership"],
        ],
      },
      {
        type: "paragraph",
        text: "An illustrative split; adjust it to your team. The rule that matters: one accountable person per task.",
      },
      { type: "subheading", text: "6. Budget and payment schedule" },
      {
        type: "paragraph",
        text: "Each cost line (creator fees, agency fee, rights, product and shipping, production, amplification, contingency) with who approves spending and when creators and the agency are paid. Late creator payments damage the brand's reputation with creators, so payment dates belong in the plan, not just in finance's system.",
      },
      { type: "subheading", text: "7. Approval workflow and turnaround times" },
      {
        type: "paragraph",
        text: "Who reviews what, in what order, and how fast: concept approval, draft review, legal review for claims, final approval. Include the number of revision rounds. The workflow itself is set out in creator content approval process.",
        links: [{ text: "creator content approval process", href: "/blog/influencer-content-approval" }],
      },
      { type: "subheading", text: "8. Risk register" },
      {
        type: "table",
        headers: ["Risk (examples)", "Likelihood and impact", "Mitigation", "Owner"],
        rows: [
          ["Product arrives late", "Medium; delays every draft", "Ship early; confirm delivery; hold reserve stock", "Operations"],
          ["Creator drops out", "Medium; gap in the schedule", "Approved reserve list; replacement terms in contracts", "Campaign manager"],
          ["Claims not approved in time", "Medium; drafts stall", "Approved-claims list before briefing", "Product lead"],
          ["Disclosure missing on a live post", "Low to medium; compliance exposure", "Go-live checks within hours; fix template", "Campaign manager"],
          ["Negative comments or backlash", "Low; reputational", "Comment monitoring; response plan; escalation path", "Social lead"],
          ["Stock-out after a strong post", "Low to medium; lost sales", "Stock plan for the campaign window", "Operations"],
        ],
      },
      {
        type: "paragraph",
        text: "Illustrative risks; rate your own. Influencer campaign risk management covers the wider risk framework.",
        links: [{ text: "Influencer campaign risk management", href: "/blog/influencer-campaign-risk-management" }],
      },
      { type: "subheading", text: "9. Communication and escalation plan" },
      {
        type: "paragraph",
        text: "Which channel is used for what (email for decisions, a shared tracker for status, a group chat only for urgent issues), the meeting cadence (kickoff, weekly status, launch-week check-ins) and who to escalate to, by severity, when something goes wrong. Influencer campaign escalation covers severity levels.",
        links: [{ text: "Influencer campaign escalation", href: "/blog/influencer-campaign-escalation" }],
      },
      { type: "subheading", text: "10. Change control" },
      {
        type: "paragraph",
        text: "How a change gets requested, priced, approved and recorded: an extra creator, a new market, a changed launch date, more usage rights. Without it, small changes pile up into a different campaign with the same budget.",
      },
      { type: "subheading", text: "11. Measurement and reporting plan" },
      {
        type: "paragraph",
        text: "The primary KPI and how it's tracked, links and codes, the measurement window, what creators must send and when, and the report format and date.",
      },
      { type: "subheading", text: "12. Close-out" },
      {
        type: "paragraph",
        text: "What 'finished' means: all payments made, insights collected, content library and usage register updated, files and contracts filed, post-mortem held and decisions recorded. Influencer campaign documentation and influencer campaign post-mortem cover these.",
        links: [
          { text: "Influencer campaign documentation", href: "/blog/influencer-campaign-documentation" },
          { text: "influencer campaign post-mortem", href: "/blog/influencer-campaign-post-mortem" },
        ],
      },
      { type: "heading", text: "A project plan template", id: "template" },
      {
        type: "template",
        label: "Influencer campaign project plan",
        text: "CAMPAIGN: ____  OWNER (accountable): ____  VERSION / DATE: ____\n1 SCOPE: objective ____ primary KPI ____ markets ____ platforms ____ creators ____ OUT OF SCOPE: ____\n2 DELIVERABLES: creator deliverables (link to register) / brand deliverables ____\n3 MILESTONES: shortlist approved __ / contracts signed __ / product delivered __ / drafts approved __ / go-live __ / report __\n4 CRITICAL PATH: ____ watched by ____\n5 RACI: (table)\n6 BUDGET: creators __ agency __ rights __ product __ production __ amplification __ contingency __ | payment dates ____\n7 APPROVALS: who / order / turnaround / revision rounds\n8 RISKS: top five with mitigation and owner\n9 COMMUNICATION: channels, meeting cadence, escalation contacts\n10 CHANGE CONTROL: how changes are requested, priced and approved\n11 MEASUREMENT: tracking, window, insights due, report date\n12 CLOSE-OUT: payments, insights, usage register, files, post-mortem date",
      },
      { type: "heading", text: "How detailed should it be?", id: "detail" },
      {
        type: "table",
        headers: ["Campaign", "Plan size"],
        rows: [
          ["A small test with a few creators", "One page: scope, milestones, owners, budget, approvals and measurement"],
          ["A multi-creator campaign", "A few pages plus a linked tracker and RACI"],
          ["A launch across markets or platforms", "The full twelve sections, a risk register reviewed weekly and formal change control"],
        ],
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical: a D2C food brand plans a 15-creator launch on Instagram and YouTube across three Indian cities. The plan's critical path shows that the nutrition claims must be approved by the regulatory lead before briefs go out, and that product needs ten days in transit to two cities. The risk register flags summer heat for chocolate products, so shipping uses insulated packaging and a two-day delivery window. Change control catches a request to add Hindi-language creators in week three: it's priced, approved as a second wave and given its own dates rather than squeezed into the first.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Treating the brief as the project plan.",
          "No out-of-scope list.",
          "Several people 'accountable' for the same decision.",
          "Dependencies not shown, so a late product surprises everyone.",
          "No change control, so scope grows without budget.",
          "Close-out skipped, so payments, rights and learnings go missing.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "An influencer campaign project plan holds the decisions the other documents don't: scope, owners, dependencies, risks, changes and what 'done' means. Size it to the campaign, review it weekly while the campaign runs, and close it out properly so the next campaign starts from evidence.",
      },
    ],
    faqs: [
      {
        question: "What should an influencer campaign project plan include?",
        answer:
          "Scope and objective, a deliverables register, milestones and stage gates, dependencies and the critical path, a RACI, budget and payment schedule, the approval workflow, a risk register, communication and escalation, change control, measurement and reporting, and close-out tasks.",
      },
      {
        question: "What's the difference between an influencer brief and a project plan?",
        answer:
          "The brief tells creators what to make and say. The project plan tells the brand and agency who decides, when things happen, what the risks are, how changes are approved and what counts as finished.",
      },
      {
        question: "Do small influencer campaigns need a project plan?",
        answer:
          "Yes, but a one-page version is enough: scope, milestones, owners, budget, approvals and measurement. Add the risk register, RACI and change control as campaigns grow.",
      },
    ],
  },

  // Topic 34
  {
    slug: "influencer-campaign-checklist",
    category: "Campaign Strategy",
    title: "What Should a Brand Include in an Influencer Campaign Checklist?",
    seoTitle: "Influencer Campaign Checklist for Brands",
    excerpt:
      "A complete influencer campaign checklist for brands, phase by phase: readiness, strategy, creator selection, contracts and compliance, briefing and production, approval and go-live, live monitoring and close-out, with market-specific add-ons.",
    metaDescription:
      "A phase-by-phase influencer campaign checklist for brands: strategy, creators, contracts, compliance, briefs, approvals, go-live, monitoring and close-out.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    lastReviewed: REVIEWED,
    readingTime: "8 min read",
    tags: ["influencer campaign checklist", "influencer marketing checklist", "influencer campaign launch checklist", "creator campaign checklist"],
    related: ["influencer-campaign-project-plan", "how-to-create-a-successful-influencer-marketing-campaign", "influencer-content-quality-check"],
    hero: {
      src: "/blog/brand-guides/influencer-campaign-checklist.svg",
      alt: "Influencer campaign checklist by phase: plan, select, contract, produce, go live, close out",
    },
    body: [
      {
        type: "paragraph",
        text: "Most campaign problems aren't hard; they're forgotten. Nobody checked the creator's audience was in the right country, the contract didn't mention paid usage, a code wasn't tested, or the product shipped a week late. A checklist won't make a campaign creative, but it stops the predictable mistakes. This one is organised by phase, so you can use the part you need when you need it.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "An influencer campaign checklist should cover eight phases: readiness (product, page, tracking, stock), strategy (one objective, KPI, audience, platforms, budget), creator selection (audience fit, authenticity, brand safety, availability), contracts and compliance (deliverables, dates, rights, exclusivity, disclosure, payment), briefing and production (brief, brand kit, product delivery, concepts), approval and go-live (draft review, claims, disclosure, links and codes, live checks), live monitoring (comments, performance, issues) and close-out (payments, insights, rights register, report, post-mortem). Add the local rules for each market you run in.",
      },
      { type: "heading", text: "1. Readiness", id: "readiness" },
      {
        type: "list",
        items: [
          "Product delivers on its promise; reviews and returns are under control.",
          "The page, app or listing creators will send people to converts on mobile.",
          "Analytics access confirmed; goals or conversions set up.",
          "Stock and fulfilment can handle a spike during the campaign window.",
          "Customer service knows the campaign is running and what the offer is.",
        ],
      },
      {
        type: "paragraph",
        text: "The full self-assessment is in the influencer marketing readiness checklist.",
        links: [{ text: "influencer marketing readiness checklist", href: "/blog/influencer-marketing-readiness" }],
      },
      { type: "heading", text: "2. Strategy", id: "strategy" },
      {
        type: "list",
        items: [
          "One primary objective and KPI agreed by every stakeholder.",
          "Target customer described: location, language, age, interests.",
          "Platforms chosen, each with a job.",
          "Budget includes non-creator costs: management, rights, product, shipping, production, amplification, contingency.",
          "Creator count and mix worked out from reach, learning and coverage needs.",
          "Measurement window and reporting date agreed.",
          "Project plan written: scope, owners, milestones, risks.",
        ],
      },
      {
        type: "paragraph",
        text: "See how to create a successful influencer marketing campaign, how many influencers a campaign needs and what an influencer campaign project plan should include.",
        links: [
          { text: "how to create a successful influencer marketing campaign", href: "/blog/how-to-create-a-successful-influencer-marketing-campaign" },
          { text: "how many influencers a campaign needs", href: "/blog/how-many-influencers-for-a-campaign" },
          { text: "what an influencer campaign project plan should include", href: "/blog/influencer-campaign-project-plan" },
        ],
      },
      { type: "heading", text: "3. Creator selection", id: "selection" },
      {
        type: "list",
        items: [
          "Audience location, age and language checked against your customer, with dated insights screenshots.",
          "Engagement quality reviewed (comments, saves, growth curve), not just engagement rate.",
          "Recent content reviewed for tone, quality and brand safety.",
          "Past sponsored posts checked for clear disclosure.",
          "Conflicts checked: competitor work and existing exclusivity.",
          "Availability for your dates confirmed.",
          "Reserve creators approved in case someone drops out.",
          "Licences or permits checked where a market requires them.",
        ],
      },
      {
        type: "paragraph",
        text: "How to vet creators is covered in how to vet influencers.",
        links: [{ text: "how to vet influencers", href: "/blog/how-to-vet-influencers" }],
      },
      { type: "heading", text: "4. Contracts and compliance", id: "contracts" },
      {
        type: "list",
        items: [
          "Deliverables per platform: format, number, dates, local posting time, minimum live period.",
          "Fees, payment dates, invoicing and tax treatment.",
          "Usage rights: channels, paid use, duration, territory.",
          "Exclusivity: category and dates, if any.",
          "Revision rounds and turnaround times.",
          "Disclosure: exact label, placement and platform tool.",
          "Approved claims and anything the creator must not say.",
          "Ad permissions (partnership ads, Spark Ads) and their duration.",
          "Cancellation, replacement and what happens if a requirement is missed.",
          "Data: how creator details are stored and for how long.",
        ],
      },
      {
        type: "paragraph",
        text: "Contract terms are covered in influencer marketing contracts, and disclosure rules in influencer marketing compliance.",
        links: [
          { text: "influencer marketing contracts", href: "/blog/influencer-marketing-contract" },
          { text: "influencer marketing compliance", href: "/blog/influencer-marketing-compliance" },
        ],
      },
      { type: "heading", text: "5. Briefing and production", id: "briefing" },
      {
        type: "list",
        items: [
          "Brief sent with objective, key message, must-haves, approved claims, deliverables, dates and disclosure.",
          "One-page brand kit attached.",
          "Kickoff held, or a written recap confirmed by each creator.",
          "Product shipped, delivery confirmed, with time to use it before filming.",
          "Concepts approved before filming for anything involving claims or risk.",
          "Links and codes issued per creator and tested.",
        ],
      },
      { type: "heading", text: "6. Approval and go-live", id: "go-live" },
      {
        type: "list",
        items: [
          "Drafts reviewed against one checklist; feedback consolidated by one person.",
          "Claims checked against the approved list.",
          "Disclosure label in the right place, and the platform tool switched on.",
          "Links, codes, tags and mentions correct.",
          "Final version approved in writing, with the approved file saved.",
          "Live posts checked within hours: right version, disclosure, links, posting time.",
          "Ad permissions granted where agreed.",
        ],
      },
      {
        type: "paragraph",
        text: "Draft and go-live checks are detailed in influencer content quality check and creator content approval process.",
        links: [
          { text: "influencer content quality check", href: "/blog/influencer-content-quality-check" },
          { text: "creator content approval process", href: "/blog/influencer-content-approval" },
        ],
      },
      { type: "heading", text: "7. Live monitoring", id: "monitoring" },
      {
        type: "list",
        items: [
          "Comments monitored and questions answered, with an escalation path for complaints.",
          "Performance checked against each creator's usual numbers in the first days.",
          "Best posts flagged for amplification while they're fresh.",
          "Missed posts or requirements followed up the same day.",
          "Stock and site performance watched during peaks.",
        ],
      },
      { type: "heading", text: "8. Close-out", id: "close-out" },
      {
        type: "list",
        items: [
          "Every creator paid on the agreed date.",
          "Insights screenshots or exports collected from every creator.",
          "Content library and usage register updated with rights and expiry dates.",
          "Report delivered against the primary KPI, with creator-level results.",
          "Post-mortem held; keep, change and test decisions recorded with owners.",
          "Rebooking decisions made and communicated to creators.",
          "Files and contracts stored where the next team can find them.",
        ],
      },
      {
        type: "paragraph",
        text: "See influencer campaign post-mortem and influencer campaign documentation.",
        links: [
          { text: "influencer campaign post-mortem", href: "/blog/influencer-campaign-post-mortem" },
          { text: "influencer campaign documentation", href: "/blog/influencer-campaign-documentation" },
        ],
      },
      { type: "heading", text: "Market add-ons", id: "market-add-ons" },
      {
        type: "table",
        headers: ["Market", "Add to the checklist"],
        rows: [
          ["India", "Disclosure in line with ASCI's influencer guidelines; qualifications for technical health or finance advice; GST and tax deducted at source on creator payments"],
          ["UAE", "The creator's advertiser permit (or visitor permit through an accredited agency); sector approvals for health or financial content; VAT on invoices where applicable"],
          ["Saudi Arabia", "The creator's Mawthooq licence where required; Arabic content reviewed natively"],
          ["United Kingdom", "Clear 'Ad' labelling as recommended in the ASA and CMA influencers' guide"],
          ["Australia", "Disclosure and testimonial rules in the ACCC's guidance for influencers and the AANA Code"],
          ["Singapore", "The ASAS guidance on social media and interactive marketing"],
        ],
      },
      {
        type: "paragraph",
        text: "Sources: ASCI's influencer guidelines, the ASA's influencers' guide, the ACCC's guidance for social media influencers and ASAS guidance on social media. Market detail is in the GCC influencer marketing playbook, UK influencer advertising rules and Australian influencer advertising rules. Check current rules with counsel for regulated categories.",
        links: [
          { text: "ASCI's influencer guidelines", href: SOURCES.asciGuidelines },
          { text: "the ASA's influencers' guide", href: EXT.asaInfluencersGuide },
          { text: "the ACCC's guidance for social media influencers", href: EXT.acccInfluencers },
          { text: "ASAS guidance on social media", href: EXT.asasSocial },
          { text: "GCC influencer marketing playbook", href: "/blog/gcc-influencer-marketing-playbook" },
          { text: "UK influencer advertising rules", href: "/blog/influencer-advertising-rules-uk" },
          { text: "Australian influencer advertising rules", href: "/blog/influencer-advertising-rules-australia" },
        ],
      },
      { type: "heading", text: "Who owns the checklist", id: "ownership" },
      {
        type: "paragraph",
        text: "Give the checklist one owner per campaign, usually the campaign manager on the brand or agency side, and make each phase's items part of a stage gate: the campaign doesn't move to contracts until selection is complete, or to go-live until approval items are ticked. If an agency runs the campaign, ask to see its checklist and agree which items the brand still owns, such as approved claims, product delivery and payments.",
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A good influencer campaign checklist follows the campaign from readiness to close-out, includes the local rules of every market you run in, and has one owner who uses it as a set of gates rather than a form filled in afterwards. Copy the phases above, cut what doesn't apply, and add the issues your own post-mortems keep finding.",
      },
    ],
    faqs: [
      {
        question: "What should be on an influencer campaign checklist?",
        answer:
          "Readiness, strategy, creator selection, contracts and compliance, briefing and production, approval and go-live, live monitoring and close-out items, plus the disclosure and licensing rules for each market you run in.",
      },
      {
        question: "What should brands check before an influencer post goes live?",
        answer:
          "That the approved version is posted, claims match the approved list, the disclosure label is upfront and the platform tool is on, links, codes and tags are correct, and it goes live at the agreed local time.",
      },
      {
        question: "Who should own the influencer campaign checklist?",
        answer:
          "One named campaign manager per campaign, on the brand or agency side, using each phase as a gate the campaign must pass before moving on. The brand still owns items such as approved claims, product delivery and payments.",
      },
    ],
  },
];
