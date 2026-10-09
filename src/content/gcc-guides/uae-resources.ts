import type { BlogPost } from "@/content/blog";
import { AUTHOR, GCC_LANGUAGE, GCC_PUBLISHED, GCC_REVIEWED, REVIEW_DATE_TEXT, SRC, UAE_HUB } from "@/content/gcc-guides/shared";

/**
 * Topics 1405–1411 and 1419: UGC, language, the brief template, Ramadan and Eid, and agency selection.
 * 1406 (UGC vs influencer in the UAE) is merged into the UGC page; 1411 (Eid) into the Ramadan page;
 * 1408 (ROI) is a new section on /blog/measuring-influencer-campaign-roi. See the audit doc.
 */
export const uaeResourcePosts: BlogPost[] = [
  // 1405 (+1406)
  {
    slug: "ugc-agencies-dubai",
    category: "UGC Marketing",
    title: "UGC Agencies in Dubai: How Brands Should Compare Content Partners",
    seoTitle: "UGC Agencies in Dubai: How to Compare Content Partners",
    excerpt:
      "What to check before hiring a UGC agency or platform in Dubai: portfolio quality, creative process, creator sourcing and languages, turnaround, revisions, licensing and usage rights, production scope and reporting, plus when UGC is the right choice over influencer marketing.",
    metaDescription:
      "Comparing UGC agencies in Dubai: portfolio, creative process, creator sourcing, Arabic and English, turnaround, revisions, licensing and when to choose UGC.",
    author: AUTHOR,
    publishedAt: GCC_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "11 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "Dubai, United Arab Emirates",
    breadcrumbParents: [UAE_HUB],
    tags: ["UGC agency Dubai", "UGC agencies UAE", "UGC vs influencer marketing UAE", "UGC content creators Dubai"],
    related: ["ugc-vs-influencer-content-whats-the-difference", "ugc-whitelisting-creator-licensing", "influencer-marketing-ecommerce-brands-uae"],
    hero: {
      src: "/blog/gcc-guides/ugc-agencies-dubai.svg",
      alt: "Scorecard for comparing UGC partners in Dubai: portfolio, creative process, creator sourcing and languages, turnaround and revisions, licensing, and reporting",
    },
    body: [
      {
        type: "paragraph",
        text: "Search for a UGC agency in Dubai and you'll find dozens of production studios, creator platforms and influencer agencies all offering 'authentic content'. They aren't the same. Some cast and script; some hand you a marketplace and leave the rest to you; some are video production companies with a new label. This guide is a buyer's checklist for telling them apart and choosing the right kind of partner for what you need.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To compare UGC agencies in Dubai, judge them on seven things: portfolio work that matches your category and formats, a creative process that starts from your ad goals, how they source creators (including Arabic, English and other language speakers), turnaround times, revision rounds, the licence you receive for paid and organic use, and how they report on performance. Ask for itemized pricing per video, with usage rights separate. UGC is content made for your channels and ads; influencer marketing is distribution through a creator's own audience. Choose UGC when you need volume and variety of creative to test, and influencer marketing when you need reach and credibility with a particular audience.",
      },
      { type: "heading", text: "UGC or influencer marketing?", id: "ugc-vs-influencer" },
      {
        type: "paragraph",
        text: "The distinction matters before you compare partners, because it decides what you're buying.",
      },
      {
        type: "table",
        headers: ["", "UGC", "Influencer marketing"],
        rows: [
          ["What you buy", "Content, delivered to you", "Content plus distribution to the creator's audience"],
          ["Where it runs", "Your ads, product pages, social accounts, marketplaces", "The creator's profile first, then possibly your ads"],
          ["Creator's audience size", "Largely irrelevant", "Central to the price and the plan"],
          ["Objective", "Ad creative testing, conversion, product content", "Awareness, trust, launches, community"],
          ["Rights", "Licence for your use is the product", "Organic post by default; your reuse is an add-on"],
          ["Budget driver", "Number of videos, complexity, rights", "Creator size, deliverables, rights, exclusivity"],
          ["Measurement", "Ad performance (hook rate, cost per purchase), on-page conversion", "Reach, engagement, tracked sales or leads, brand lift"],
        ],
      },
      {
        type: "paragraph",
        text: "In the UAE there's a regulatory angle too. The advertiser permit applies to individuals who publish advertising on their own social media accounts. Whether a creator making content that only appears on your channels needs a permit isn't clearly set out in the guidance we reviewed, and vendor guides disagree, so ask your partner how they handle it and confirm with the National Media Authority. Content that also goes out on the creator's own account is influencer marketing, and the permit clearly applies. The general comparison is covered in more depth in UGC vs influencer marketing.",
        links: [{ text: "UGC vs influencer marketing", href: "/blog/ugc-vs-influencer-content-whats-the-difference" }],
      },
      { type: "heading", text: "The kinds of UGC partner in Dubai", id: "partner-types" },
      {
        type: "table",
        headers: ["Partner type", "How they work", "Suits", "Watch for"],
        rows: [
          ["Managed UGC agency", "Strategy, scripts, casting, production management, editing, delivery", "Brands that need tested ad creative without managing creators", "Higher per-video price; check who actually writes the concepts"],
          ["Creator marketplace or platform", "You post a brief; creators apply; you choose and manage", "Brands with in-house creative capability", "Your team does the briefing, review and quality control"],
          ["Production studio offering UGC", "Professional crews shooting 'UGC-style' content", "Polished hybrid content", "It may not look or perform like creator content"],
          ["Influencer agency with UGC service", "UGC alongside influencer campaigns", "Brands wanting both from one partner", "Whether UGC is a core competence or a side offer"],
          ["Freelance creators direct", "You contract individuals", "Small volumes, ongoing relationships", "Contracts, rights, payments and permits are all on you"],
        ],
      },
      { type: "heading", text: "What to evaluate", id: "evaluate" },
      { type: "subheading", text: "Portfolio quality" },
      {
        type: "list",
        items: [
          "Ask for work in your category and format (product demos, testimonials, unboxings, how-tos), not a highlight reel",
          "Look for range across creators, faces and settings rather than one recognizable house style",
          "Ask which pieces ran as ads and what the brand learned; vague 'viral' claims mean little",
          "Check Arabic work if you need it, and have a native speaker review it",
        ],
      },
      { type: "subheading", text: "Creative process" },
      {
        type: "list",
        items: [
          "Do they start from your audience, offer and ad objective, or from a generic script?",
          "Who writes hooks and concepts: strategists, creators or both?",
          "Do they plan variations for testing, such as different hooks, angles and lengths?",
          "How do they use performance data from previous rounds?",
        ],
      },
      { type: "subheading", text: "Creator sourcing" },
      {
        type: "list",
        items: [
          "How they find creators and vet them for quality, reliability and fit",
          "The languages and communities they can genuinely cast for: Emirati and Khaleeji Arabic, Levantine and Egyptian Arabic, English, South Asian languages",
          "Whether you can approve creators before production",
          "How creators are paid, and whether they're paid on time",
        ],
      },
      { type: "subheading", text: "Turnaround, revisions and production scope" },
      {
        type: "list",
        items: [
          "Time from brief to first drafts, and from feedback to final files",
          "Revision rounds included, and what counts as a revision versus a reshoot",
          "What's included: product shipping, props, locations, editing, subtitles, captions, multiple aspect ratios",
          "Raw footage: whether you receive it, and under what licence",
          "Capacity at peak times such as Ramadan and December",
        ],
      },
      { type: "subheading", text: "Licensing and usage rights" },
      {
        type: "list",
        items: [
          "Which channels: organic social, paid social, website, marketplaces, TV or out-of-home",
          "Duration and territory, such as UAE only, the GCC or worldwide",
          "Whether paid use through the creator's handle (sometimes called whitelisting) is included",
          "Edits: can you cut, re-voice or translate the content?",
          "What happens when the licence ends; you may need to take ads down",
        ],
      },
      {
        type: "paragraph",
        text: "Licensing is where most UGC disputes start. The options are explained in UGC whitelisting and creator licensing, and Arabic-specific briefing and evaluation in Arabic UGC creators in the GCC.",
        links: [
          { text: "UGC whitelisting and creator licensing", href: "/blog/ugc-whitelisting-creator-licensing" },
          { text: "Arabic UGC creators in the GCC", href: "/blog/arabic-ugc-creators-gcc" },
        ],
      },
      { type: "subheading", text: "Reporting" },
      {
        type: "list",
        items: [
          "Do they track how content performs once it runs, or stop at delivery?",
          "Can they report by hook, creator and angle, so the next round improves?",
          "Do they share learnings you can use even if you change partners?",
        ],
      },
      { type: "heading", text: "A comparison scorecard", id: "scorecard" },
      {
        type: "table",
        headers: ["Criterion", "Weight (example)", "Questions"],
        rows: [
          ["Category-relevant portfolio", "20%", "Have they made content like ours, for brands like ours?"],
          ["Creative and testing process", "20%", "Will they help us find what works, or just deliver files?"],
          ["Creator sourcing and languages", "15%", "Can they cast the audiences we need?"],
          ["Licensing terms", "15%", "Do the default terms cover our planned use?"],
          ["Turnaround and revisions", "10%", "Can they meet our launch and seasonal deadlines?"],
          ["Reporting and learning", "10%", "Will we learn from each round?"],
          ["Price transparency", "10%", "Is the quote itemized per video and per right?"],
        ],
      },
      {
        type: "paragraph",
        text: "Adjust the weights to your situation. A brand with an in-house performance team might weight licensing and price higher; a brand without creative resources might weight process higher.",
      },
      { type: "heading", text: "Pricing: what to ask for", id: "pricing" },
      {
        type: "paragraph",
        text: "UAE UGC pricing is not standardized, and published figures come from vendors with a stake in them. Rather than relying on a benchmark, ask each partner to quote in AED per finished video, with usage rights, raw footage, extra hooks, Arabic or bilingual versions, product costs and VAT itemized. That makes quotes comparable and shows where the money goes. Fees for paid usage and bilingual delivery are commonly quoted as additions to the base rate.",
      },
      { type: "heading", text: "Red flags", id: "red-flags" },
      {
        type: "list",
        items: [
          "Rankings or 'top agency' badges that come from paid listings",
          "No clear answer on licensing, or rights that expire before your campaign ends",
          "A portfolio that all looks the same, whatever the brand",
          "Unwillingness to let you approve creators",
          "Performance claims without any explanation of how they were measured",
          "No view on permits or compliance",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "The right UGC partner depends on what you need: tested ad creative at volume, a marketplace your own team can run, or polished hybrid content. Decide first whether you're buying content or distribution, then compare partners on process, casting, licensing and learning rather than on showreels. A small paid trial with two partners often tells you more than any pitch.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between UGC and influencer marketing in the UAE?",
        answer:
          "UGC is content creators make for your channels and ads; the creator's audience doesn't matter much. Influencer marketing pays for content and distribution to the creator's own audience. Many brands use UGC for ad testing and influencers for reach and credibility.",
      },
      {
        question: "Do UGC creators in the UAE need an advertiser permit?",
        answer:
          "Creators who publish advertising on their own social accounts need one. Whether content that appears only on a brand's channels requires a permit isn't clearly addressed in the guidance we reviewed, so ask your partner and confirm with the National Media Authority.",
      },
      {
        question: "What usage rights should brands get for UGC?",
        answer:
          "Rights that match your planned use: the channels (organic, paid, website, marketplaces), territory, duration, whether paid use through the creator's handle is allowed, and whether you can edit or translate the content.",
      },
    ],
  },
  // 1407
  {
    slug: "arabic-vs-english-influencer-campaigns-uae",
    category: "Campaign Strategy",
    title: "Arabic vs English Influencer Campaigns in the UAE: How to Choose the Right Approach",
    seoTitle: "Arabic vs English Influencer Campaigns in the UAE: How to Choose",
    excerpt:
      "How to decide between Arabic, English and bilingual creator content in the UAE: researching who your audience is, native-language copy rather than translation, dialect and cultural review, bilingual production, testing and reporting by segment.",
    metaDescription:
      "Arabic, English or bilingual influencer content in the UAE: audience research, native copy, dialect and cultural review, bilingual production and testing.",
    author: AUTHOR,
    publishedAt: GCC_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "10 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "United Arab Emirates",
    breadcrumbParents: [UAE_HUB],
    tags: ["Arabic influencer marketing UAE", "Arabic vs English content UAE", "bilingual influencer campaigns", "Arabic content creators Dubai"],
    related: ["influencer-marketing-uae", "influencer-marketing-saudi-arabia-vs-uae", "regional-influencer-marketing-india"],
    hero: {
      src: "/blog/gcc-guides/arabic-vs-english-influencer-campaigns-uae.svg",
      alt: "Choosing campaign language in the UAE: audience segments mapped to Arabic, English, bilingual and other community languages, then tested and reported by segment",
    },
    body: [
      {
        type: "paragraph",
        text: "'Should our UAE campaign be in Arabic or English?' is usually the wrong first question. The UAE isn't one language market. Emirati nationals, Arab expatriates from the Levant, Egypt and North Africa, South Asian communities, Filipino residents and Western expatriates all consume content differently, and many people switch between languages depending on the platform and topic. The right question is which audience you need, and what language they choose when nobody's selling to them.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Choose the campaign language from audience research, not assumption. English reaches the broadest resident audience; Arabic is usually essential for Emirati nationals, Gulf visitors and many Arab expatriates, and the dialect matters; other community languages such as Hindi, Urdu, Malayalam or Tagalog can reach large segments more effectively than either. If you need several segments, produce native content for each rather than translating one script, have it culturally reviewed by native speakers, and test and report performance by language and segment. Arabic doesn't automatically outperform English, and English doesn't automatically reach everyone.",
      },
      { type: "heading", text: "Start with who you're trying to reach", id: "audience" },
      {
        type: "table",
        headers: ["Audience", "Language tendencies", "Creator implication"],
        rows: [
          ["Emirati nationals", "Emirati and Gulf (Khaleeji) Arabic for personal content; English common in education and work", "Emirati or Gulf creators; Arabic-first content for cultural and family topics"],
          ["Gulf visitors (for example from Saudi Arabia, Kuwait or Oman)", "Their own Gulf dialects", "Creators from or popular in those markets"],
          ["Levantine, Egyptian and North African expatriates", "Their own Arabic dialects, often alongside English", "Creators from those communities; dialect affects relatability"],
          ["South Asian communities", "Hindi, Urdu, Malayalam, Tamil, Bengali and others, plus English", "Community creators in their language often outperform generic English content"],
          ["Filipino residents", "Tagalog and English", "Filipino creators in the UAE"],
          ["Western and international expatriates", "English", "English-language lifestyle creators"],
        ],
      },
      {
        type: "paragraph",
        text: "Use first-party data where you have it: the language your app or site visitors use, customer service language, past ad performance by language. Then look at each shortlisted creator's audience by country and language. A creator speaking Arabic doesn't guarantee an Emirati audience; it might be mostly Egyptian or Saudi.",
      },
      { type: "heading", text: "Native copy, not translation", id: "native" },
      {
        type: "list",
        items: [
          "Brief Arabic creators in Arabic, and let them write in their own words",
          "Don't send an English script to be translated and read out; it sounds translated, and audiences notice",
          "Adapt the idea, not just the words: humor, references and examples should belong to the audience",
          "Let product names, prices and offer terms stay consistent across languages",
          "Keep a glossary of approved terms for products and claims in each language",
        ],
      },
      { type: "heading", text: "Dialect and cultural review", id: "review" },
      {
        type: "paragraph",
        text: "Arabic isn't one register. Modern Standard Arabic suits formal and official communication; spoken content on social media is usually in a dialect. A Gulf audience may find Egyptian or Levantine Arabic friendly and familiar, or not quite 'for them', depending on the topic. Decide which dialect fits the audience and the brand's tone, and get native speakers from the target audience to review drafts.",
      },
      {
        type: "list",
        items: [
          "Check captions, on-screen text and voiceover, not just the script",
          "Review religious and cultural references, especially around Ramadan, Eid and national occasions",
          "Check right-to-left text in graphics and that Arabic text isn't broken or reversed",
          "Confirm that claims and disclosures are equally clear in every language",
          "Review South Asian and other language versions with native speakers too",
        ],
      },
      { type: "heading", text: "Bilingual production", id: "bilingual" },
      {
        type: "table",
        headers: ["Approach", "How it works", "Suits", "Trade-off"],
        rows: [
          ["Separate creators per language", "Arabic creators make Arabic content; English creators make English content", "Clearly distinct audiences", "More creators and briefs to manage"],
          ["Bilingual creators", "One creator switches between Arabic and English, or posts both versions", "Audiences that switch languages naturally", "Smaller pool, often at a premium"],
          ["One video, two caption sets", "Visual-led content with subtitles in each language", "Demonstrations where speech matters less", "Less personal; weaker for persuasion"],
          ["Arabic-first with English subtitles (or the reverse)", "Primary language spoken, the other in subtitles", "A main audience plus secondary reach", "Secondary audience gets a weaker experience"],
        ],
      },
      {
        type: "paragraph",
        text: "Make sure the landing experience matches. Arabic content that sends people to an English-only website or app onboarding loses many of the people it persuaded.",
      },
      { type: "heading", text: "Testing and reporting by segment", id: "testing" },
      {
        type: "list",
        items: [
          "Give each language version its own tracked link or code",
          "Report reach, engagement, clicks and conversions by language and segment, not as one total",
          "Compare cost per result across languages, not just engagement rates",
          "When running paid amplification, test the same idea in each language against the matching audience",
          "Read the comments: questions and objections differ by community",
        ],
      },
      {
        type: "paragraph",
        text: "You'll find industry articles claiming large engagement uplifts for Arabic-first content in the Gulf. They're often useful signals, but they tend to come from vendors, with no published method. Your own segment-level results are the evidence that should decide future budget.",
      },
      { type: "heading", text: "When each approach tends to fit", id: "fit" },
      {
        type: "table",
        headers: ["Situation", "Likely starting point"],
        rows: [
          ["Government-adjacent, cultural or national-occasion campaigns", "Arabic-first, with Emirati creators, plus English"],
          ["Luxury aimed at Gulf nationals", "Arabic or bilingual Gulf creators"],
          ["Mass-market retail, delivery or telecom", "Several languages, matched to segments"],
          ["Expatriate-focused services (remittance, schools, community food)", "The community's language plus English"],
          ["International brands targeting residents broadly", "English, plus Arabic for reach among Arab audiences"],
          ["B2B", "Mostly English; Arabic for some public-sector and Gulf-national audiences"],
        ],
      },
      {
        type: "paragraph",
        text: "These are starting points, not rules. Test before committing a large budget. Saudi Arabia has a different language balance from the UAE, with campaigns mostly in Saudi dialects; see the Arabic and dialect section of influencer marketing in Saudi Arabia.",
        links: [{ text: "influencer marketing in Saudi Arabia", href: "/blog/influencer-marketing-saudi-arabia" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Treating 'Arabic' as one audience and one dialect",
          "Translating an English script word for word",
          "Assuming Arabic always performs better, or that English reaches everyone",
          "Reporting one blended number that hides which language worked",
          "Skipping native review of captions and on-screen text",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Language in the UAE is a targeting decision. Work out which communities you need, give each one creators who speak to them naturally, review every version with native speakers, and let segment-level results guide where the next dirham goes.",
      },
    ],
    faqs: [
      {
        question: "Should influencer campaigns in the UAE be in Arabic or English?",
        answer:
          "It depends on the audience. English reaches the broadest resident audience; Arabic is important for Emirati nationals, Gulf visitors and many Arab expatriates; other community languages reach large segments too. Many campaigns use several languages with native content for each.",
      },
      {
        question: "Which Arabic dialect should UAE campaigns use?",
        answer:
          "For Emirati and Gulf audiences, Gulf (Khaleeji) Arabic is usually the most natural fit for social content. Arab expatriate audiences may respond better to their own dialects. Have native speakers from the target audience review drafts.",
      },
      {
        question: "Does Arabic content perform better than English in the UAE?",
        answer:
          "Not automatically. It often matters for Arabic-speaking segments, but performance depends on the audience, creator and product. Test each language with its own tracking and compare cost per result.",
      },
    ],
  },
  // 1409
  {
    slug: "influencer-campaign-brief-template-uae",
    category: "Campaign Strategy",
    title: "Influencer Marketing Campaign Brief Template for UAE Brands",
    seoTitle: "Influencer Campaign Brief Template for UAE Brands (Copyable)",
    excerpt:
      "A copy-ready influencer campaign brief for UAE campaigns, with the fields UAE work needs that generic templates miss: emirate and language, advertiser permit and visitor permit checks, sector approvals, disclosure in every language, AED fees and VAT, usage rights and tracking.",
    metaDescription:
      "Copyable influencer campaign brief template for UAE brands: audience, emirate, language, approved claims, permits, disclosure, fees in AED, rights and tracking.",
    author: AUTHOR,
    publishedAt: GCC_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "9 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "United Arab Emirates",
    breadcrumbParents: [UAE_HUB],
    tags: ["influencer campaign brief template UAE", "influencer brief template", "UAE influencer campaign planning", "creator brief UAE"],
    related: ["influencer-campaign-brief", "influencer-marketing-uae", "choose-influencer-marketing-agency-uae"],
    hero: {
      src: "/blog/gcc-guides/influencer-campaign-brief-template-uae.svg",
      alt: "Sections of a UAE influencer campaign brief: objective and audience, market and language, claims, deliverables, permits and disclosure, fees and rights, tracking",
    },
    body: [
      {
        type: "paragraph",
        text: "Most brief templates assume one country, one language and no permit checks. A UAE campaign needs a few more fields: which emirate and which communities, which language and dialect, whether each creator holds an advertiser permit, whether the category needs approval, and how disclosure works in Arabic as well as English. The template below includes them. Copy it into your own document and delete what doesn't apply.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A UAE influencer campaign brief should cover the objective and audience; market, emirate, language and dialect; product information and approved claims; deliverables, platforms, formats and deadlines; creator selection criteria; creative direction and mandatory disclosures; review and approval steps; fees in AED, VAT, payment and cancellation terms; usage rights, exclusivity and paid amplification; tracking links, codes and success metrics; and permit and approval checks. The full template is below and can be copied or printed from this page.",
      },
      { type: "heading", text: "How to use this template", id: "how-to-use" },
      {
        type: "list",
        items: [
          "Fill in the internal sections (objective, budget, approvals) before you contact creators",
          "Share the creator-facing parts with each creator, in their language where possible",
          "Keep the brief short enough to read in five minutes; detail goes in attachments",
          "Treat it as the reference both sides return to when questions come up",
          "To print, use your browser's print function; the template text prints with the page",
        ],
      },
      {
        type: "template",
        label: "UAE influencer campaign brief: copy and adapt",
        text: `1. CAMPAIGN OVERVIEW
Brand / product:
Campaign name:
Campaign dates (first post to last post):
Primary objective (choose one): awareness / consideration / traffic / leads / sales / installs / footfall / bookings
Primary success metric and target:
Secondary metrics:

2. AUDIENCE
Who we want to reach (nationality or community, age, interests, life stage):
Residents, visitors or both:
What they believe or do now, and what we want them to think or do:

3. MARKET, EMIRATE AND LANGUAGE
Emirates that matter (Dubai / Abu Dhabi / Sharjah / Northern Emirates / UAE-wide):
Minimum share of each creator's audience in the UAE (and in target emirates, if relevant):
Content language(s): Arabic / English / bilingual / other (specify):
Arabic dialect, if relevant (for example Emirati or Gulf):
Who reviews each language version (native speaker, name):
Other GCC markets in scope? If yes, note that UAE permits do not cover them:

4. PRODUCT OR SERVICE
What it is and who it's for:
Key benefit in one sentence:
Price, offer and availability (where and how to buy, book or download):
APPROVED CLAIMS (exact wording, with any required qualifiers):
-
-
WORDS AND CLAIMS TO AVOID:
-
Product samples: what is sent, by when, and whether it must be returned:

5. DELIVERABLES
Platform | Format | Quantity | Length | Posting window | Link or code placement
-
-
Draft deadline:
Go-live date(s):
How long posts must stay live:

6. CREATOR SELECTION CRITERIA
Category and content style:
Audience location and language requirements:
Minimum and maximum audience size (if any):
Engagement and authenticity checks required:
Recent competitor work that would rule a creator out:
Advertiser permit number (resident) or visitor permit route (non-resident) confirmed: yes / no

7. CREATIVE DIRECTION
The idea or problem to solve (not a script):
Must-include points (maximum three):
Must-avoid:
Tone:
Cultural and religious sensitivities (for example Ramadan, Eid, national occasions, modesty norms):
Locations and filming permissions (venues, public places, drones):
References or examples (optional):

8. MANDATORY DISCLOSURES
Disclosure wording in each language used:
Placement (start of caption, on-screen, verbal, platform paid-partnership label):
Creator's permit number displayed on the profile as required:
Category-specific disclaimers (for example health, financial or virtual-asset risk warnings):

9. REVIEW, REVISIONS AND APPROVAL
Who reviews (marketing, legal or compliance, medical, native-language reviewer):
What review covers (accuracy, claims, disclosure, brand safety) and what it does not (creative taste):
Number of revision rounds included:
Turnaround for brand feedback:
Final approval by (name):

10. FEES, PAYMENT AND CANCELLATION
Fee in AED, per deliverable or total:
VAT (5%) applicable? Creator or agency VAT registration number:
What the fee includes (content, posting, usage, exclusivity, travel, hosting):
Payment terms (for example 50% on signing, 50% after go-live) and method:
Invoice requirements:
Cancellation and postponement terms (brand and creator):
What happens if content isn't delivered or doesn't meet the brief:

11. USAGE RIGHTS, EXCLUSIVITY AND PAID AMPLIFICATION
Brand reposting on own channels: yes / no, duration:
Paid ads using the content: yes / no, channels, territory, duration:
Paid use through the creator's handle: yes / no, duration:
Edits, translations and cut-downs allowed: yes / no:
Raw footage: provided / not provided:
Exclusivity: competitor categories, platforms, duration:
Fee for rights and exclusivity (itemized):

12. TRACKING AND REPORTING
Tracking link (UTM) per creator:
Discount or referral code per creator, with expiry:
App attribution or deep link (if relevant):
Booking, reservation or lead source field (if relevant):
Insights the creator must share, and when (for example screenshots at 48 hours and 7 days):
Report owner and date:

13. PERMITS AND APPROVALS CHECKLIST
Creator advertiser permit verified (resident): yes / no / not applicable
Visitor advertiser permit through accredited agency (non-resident): yes / no / not applicable
Health advertising approval (MOHAP, DHA or DoH): yes / no / not applicable
Financial promotion requirements checked (SCA, VARA, DFSA, FSRA or CBUAE): yes / no / not applicable
Promotion or discount permit (emirate economic department): yes / no / not applicable
Product registration and claims match registered product: yes / no / not applicable
Date checked and by whom:

14. CONTACTS
Brand contact:
Agency contact (if any):
Escalation contact for urgent issues:`,
      },
      { type: "heading", text: "The UAE-specific fields, explained", id: "uae-fields" },
      {
        type: "table",
        headers: ["Section", "Why it matters in the UAE"],
        rows: [
          ["Market, emirate and language", "Audiences differ by emirate and community; a Dubai creator's audience may be mostly outside the UAE"],
          ["Approved claims in each language", "Arabic captions are often where unreviewed claims slip through"],
          ["Permit fields", "Resident creators need an advertiser permit; visiting creators need a visitor permit through an accredited agency"],
          ["Cultural sensitivities", "Content standards cover religion, national symbols and public morals; Ramadan and national occasions need care"],
          ["Disclosure", "Advertising must be clearly identifiable, and creators should show their permit number on their profile"],
          ["VAT", "Creators and agencies registered for VAT add 5%; agree whether fees include it"],
          ["Sector approvals", "Health, financial and virtual-asset content, and promotional offers, may need prior approval"],
        ],
      },
      {
        type: "paragraph",
        text: `The permit and approval fields reflect rules as reviewed on ${REVIEW_DATE_TEXT}; check them against current guidance each time you use the template. The rules are summarized, with sources, in our UAE influencer marketing guide. VAT treatment is set by the Federal Tax Authority.`,
        links: [
          { text: "UAE influencer marketing guide", href: "/blog/influencer-marketing-uae" },
          { text: "Federal Tax Authority", href: SRC.fta.url },
        ],
      },
      { type: "heading", text: "Writing the creative section well", id: "creative" },
      {
        type: "paragraph",
        text: "The most common brief failure is a creative section that's really a script. Give creators the problem, the audience and three must-haves at most, and let them decide how to say it. The general principles, with an example, are in our guide to writing an influencer campaign brief; this template adds the UAE fields on top.",
        links: [{ text: "writing an influencer campaign brief", href: "/blog/influencer-campaign-brief" }],
      },
      { type: "heading", text: "Common mistakes with UAE briefs", id: "mistakes" },
      {
        type: "list",
        items: [
          "Briefing an Arabic-speaking creator only in English",
          "No requirement on audience location, so reach lands outside the UAE",
          "Leaving permit checks until after content is filmed",
          "Disclosure wording agreed in English only",
          "Fees quoted without saying whether VAT is included",
          "Usage rights left vague, then disputed when content runs as ads",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A good brief makes everything after it easier: shortlisting, contracts, review and reporting. For the UAE, the extra fields aren't paperwork for its own sake; they're the questions that most often cause delays, disputes or compliance problems when nobody asked them upfront.",
      },
    ],
    faqs: [
      {
        question: "What should an influencer campaign brief include for the UAE?",
        answer:
          "The usual sections (objective, audience, product, deliverables, creative direction, review, fees, rights and tracking) plus UAE-specific fields: emirate and language, advertiser or visitor permit checks, sector approvals, disclosure in each language and VAT.",
      },
      {
        question: "Can I download this brief template?",
        answer:
          "There is no separate file. Copy the template text from this page into your own document, or use your browser's print function to print or save the page.",
      },
      {
        question: "Should the brief be in Arabic for Arabic-speaking creators?",
        answer:
          "Ideally, yes, at least for the creative direction, claims and disclosure sections. Creators write more natural content when briefed in the language they'll create in, and native review is easier.",
      },
    ],
  },
  // 1410 (+1411)
  {
    slug: "ramadan-influencer-marketing-uae",
    category: "Campaign Strategy",
    title: "How to Run a Ramadan Influencer Marketing Campaign in the UAE (Including Eid)",
    seoTitle: "Ramadan and Eid Influencer Marketing in the UAE: Planning Guide",
    excerpt:
      "How to plan creator campaigns for Ramadan, Eid al-Fitr and Eid al-Adha in the UAE: expected 2027 dates and why they can change, lead times, respectful creative, gifting, category ideas for food, fashion, beauty, hospitality and retail, charitable messaging and measurement.",
    metaDescription:
      "Ramadan and Eid influencer marketing in the UAE: expected 2027 dates, lead times, respectful creative, gifting, category ideas, charity messaging and measurement.",
    author: AUTHOR,
    publishedAt: GCC_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "12 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "United Arab Emirates",
    breadcrumbParents: [UAE_HUB],
    tags: ["Ramadan influencer marketing UAE", "Eid influencer marketing UAE", "Ramadan campaign ideas UAE", "Ramadan 2027 marketing"],
    related: ["influencer-marketing-uae", "influencer-marketing-fashion-brands-dubai", "seasonal-influencer-marketing-india"],
    hero: {
      src: "/blog/gcc-guides/ramadan-influencer-marketing-uae.svg",
      alt: "Ramadan and Eid campaign timeline for the UAE: planning and booking, pre-Ramadan content, Ramadan, Eid al-Fitr and Eid al-Adha, with dates subject to moon sighting",
    },
    body: [
      {
        type: "paragraph",
        text: "Ramadan is a month of fasting, prayer, reflection, family and giving. It's also the period when many UAE households change their routines most: evenings become the center of the day, gatherings around iftar and suhoor multiply, and spending on food, clothing, gifts and hospitality shifts. Brands that treat it as a sales event tend to get it wrong. Brands that understand what the month means to people, and plan early, can be genuinely useful during it.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To run a Ramadan influencer campaign in the UAE, start planning months ahead and book creators several weeks before Ramadan begins, since demand and rates peak. Ramadan 2027 is expected to start around 8 February, with Eid al-Fitr around 9 or 10 March and Eid al-Adha around 16 or 17 May, but these depend on official moon-sighting announcements. Build creative around family, generosity, gathering and reflection rather than urgency; schedule content for evening and late-night viewing; brief creators who observe or deeply understand the month; plan gifting carefully; and treat Eid as a distinct moment with its own content. Measure against a seasonal baseline, not a normal month.",
      },
      { type: "heading", text: "Ramadan and Eid are different moments", id: "moments" },
      {
        type: "table",
        headers: ["Moment", "What it is", "Mood and behavior", "Campaign role"],
        rows: [
          ["Ramadan", "The month of fasting from dawn to sunset", "Reflection, prayer, family iftars, charity; evenings and late nights are busiest", "Helpful, respectful content; food, home, hospitality, giving"],
          ["Last ten nights of Ramadan", "The most spiritually significant period", "More worship; shopping for Eid ramps up", "Lower-key brand presence; Eid preparation content"],
          ["Eid al-Fitr", "The festival marking the end of Ramadan", "Celebration, new clothes, family visits, gifts, children", "Gifting, fashion, beauty, travel, family experiences"],
          ["Eid al-Adha", "The festival during the Hajj period, about two months later", "Family gatherings, sacrifice and charity, travel; public holiday", "Hospitality, travel, family; a shorter, separate campaign"],
        ],
      },
      {
        type: "paragraph",
        text: "Many brands run one campaign that stops at Eid al-Fitr and ignore Eid al-Adha entirely, or treat both Eids as the same. They're different occasions, and the gap between them is often a quiet period worth planning around.",
      },
      { type: "heading", text: "Dates and why they can change", id: "dates" },
      {
        type: "paragraph",
        text: `Checked ${REVIEW_DATE_TEXT}. Islamic months begin with the sighting of the new crescent moon, so dates move about 11 days earlier each year and are confirmed only shortly before. The dates below are astronomical forecasts for 2027 reported by The National and Gulf News in autumn 2026; the UAE's moon-sighting committee makes the official announcement.`,
        links: [
          { text: "The National", href: SRC.ramadan2027National.url },
          { text: "Gulf News", href: SRC.ramadan2027GulfNews.url },
        ],
      },
      {
        type: "table",
        headers: ["Occasion (2027)", "Expected date", "Depends on"],
        rows: [
          ["First day of Ramadan", "Around Monday 8 February", "Sighting of the Ramadan crescent"],
          ["Eid al-Fitr", "Tuesday 9 or Wednesday 10 March", "Sighting of the Shawwal crescent, and whether Ramadan lasts 29 or 30 days"],
          ["Day of Arafah", "15 or 16 May", "Sighting of the Dhul Hijjah crescent"],
          ["Eid al-Adha", "Sunday 16 or Monday 17 May", "Sighting of the Dhul Hijjah crescent"],
        ],
      },
      {
        type: "paragraph",
        text: "Build a day or two of flexibility into Eid posting schedules, and avoid committing creators to 'Eid day' posts on a fixed date. Public holiday dates are confirmed by the government; check the UAE government's public holidays page.",
        links: [{ text: "public holidays page", href: SRC.uaeHolidays.url }],
      },
      { type: "heading", text: "Planning lead times", id: "lead-times" },
      {
        type: "table",
        headers: ["When (relative to Ramadan)", "What to do"],
        rows: [
          ["Three to four months before", "Set objectives and budget; decide whether the campaign covers Ramadan, Eid al-Fitr, Eid al-Adha or all three"],
          ["Two to three months before", "Shortlist and contract creators; check permits; secure any sector or promotion approvals"],
          ["Six to eight weeks before", "Brief creators; finalize products, offers and gifting; plan shoots, as filming during fasting hours is harder"],
          ["Two to four weeks before", "Pre-Ramadan content (preparation, recipes, home, wardrobe); approvals done"],
          ["During Ramadan", "Evening-focused posting; monitor tone and comments; prepare Eid content"],
          ["Final week to Eid", "Eid content live with flexible dates"],
          ["After Eid", "Debrief and plan Eid al-Adha if relevant"],
        ],
      },
      {
        type: "paragraph",
        text: "Creators are busiest and most expensive in the weeks before and during Ramadan. Late bookings mean less choice, rushed briefs and higher fees.",
      },
      { type: "heading", text: "Respectful creative", id: "creative" },
      {
        type: "list",
        items: [
          "Work with creators who observe Ramadan or have a long, genuine connection to the communities who do",
          "Build around what the month is about: family, gathering, generosity, gratitude, reflection, community",
          "Avoid showing eating or drinking in a way that ignores fasting; many brands schedule food content for after iftar",
          "Don't use religious imagery, verses or rituals as decoration for a product",
          "Avoid deceptive urgency such as fake countdowns or 'last chance' claims; it clashes with the month and can mislead",
          "Keep humor and tone appropriate; what works in other months may not work now",
          "Review Arabic and English versions with native speakers who understand the religious context",
          "Remember that not everyone in the UAE observes Ramadan, but everyone lives alongside it; content for other audiences should still be considerate",
        ],
      },
      { type: "heading", text: "Timing content around the day", id: "timing" },
      {
        type: "paragraph",
        text: "Daily routines change during Ramadan: working hours are often shorter, and evenings after iftar and late nights before suhoor become key times for socializing and screen time. Ask creators when their own audiences are most active during Ramadan, using last year's insights if they have them, rather than assuming.",
      },
      { type: "heading", text: "Gifting during Ramadan and Eid", id: "gifting" },
      {
        type: "list",
        items: [
          "Ramadan hampers and Eid gifts are traditional; make gifts genuinely useful or thoughtful rather than branded clutter",
          "Ask before sending food to creators who may be fasting or have dietary requirements",
          "A gift in exchange for content is still advertising: permit and disclosure rules apply",
          "Gifts that support a charitable cause should do so transparently, with details the audience can verify",
          "Plan logistics early; delivery capacity is stretched before Eid",
        ],
      },
      { type: "heading", text: "Ideas by category", id: "categories" },
      {
        type: "table",
        headers: ["Category", "Ramadan ideas", "Eid ideas"],
        rows: [
          ["Food and grocery", "Iftar recipes, suhoor ideas, planning for gatherings, family cooking", "Eid sweets, hosting, family meals"],
          ["Restaurants and hospitality", "Iftar and suhoor experiences, Ramadan tents and majlis settings, honest reviews", "Eid brunches, family stays, staycations"],
          ["Fashion", "Modest and occasion wear, abayas and kaftans, styling for gatherings", "Eid outfits for the family, children's wear, accessories"],
          ["Beauty and fragrance", "Skincare routines that suit changed sleep patterns, fragrance and oud traditions", "Eid looks, gift sets"],
          ["Retail and electronics", "Home preparation, gifts for family", "Eid gifting guides, children's gifts"],
          ["Travel", "Ramadan stays, respectful travel content", "Eid holiday trips; plan for both Eids"],
          ["Financial services", "Budgeting for the month, charitable giving tools", "Eid gifts of money (eidiya), remittances to family"],
        ],
      },
      {
        type: "paragraph",
        text: "Category specifics are covered in restaurant influencer marketing in Dubai, influencer marketing for fashion brands in Dubai, influencer marketing for beauty brands in the UAE, influencer marketing for travel brands in the UAE and, for stores, retail influencer marketing in the GCC.",
        links: [
          { text: "retail influencer marketing in the GCC", href: "/blog/retail-influencer-marketing-gcc" },
          { text: "restaurant influencer marketing in Dubai", href: "/blog/restaurant-influencer-marketing-dubai" },
          { text: "influencer marketing for fashion brands in Dubai", href: "/blog/influencer-marketing-fashion-brands-dubai" },
          { text: "influencer marketing for beauty brands in the UAE", href: "/blog/influencer-marketing-beauty-brands-uae" },
          { text: "influencer marketing for travel brands in the UAE", href: "/blog/influencer-marketing-travel-brands-uae" },
        ],
      },
      { type: "heading", text: "Charitable messaging", id: "charity" },
      {
        type: "paragraph",
        text: "Giving is central to Ramadan, and many brands want to reflect that. Do it only if the commitment is real and specific: name the partner organization, say exactly what the brand is giving and how, and report back afterwards. Don't make donations conditional on purchases in a way that pressures people, and don't let creators make vague claims about where money goes. Charitable fundraising in the UAE is regulated, so work with licensed charities and check what's permitted before promoting donations.",
      },
      { type: "heading", text: "Rules that still apply", id: "rules" },
      {
        type: "paragraph",
        text: "The advertiser permit, disclosure rules and media content standards apply during Ramadan as at any other time, including the standards on respecting religion. Discounts and promotions may need permits from the relevant emirate's economic department, and those departments are busy before Eid, so apply early. The basics are in our UAE influencer marketing guide.",
        links: [{ text: "UAE influencer marketing guide", href: "/blog/influencer-marketing-uae" }],
      },
      { type: "heading", text: "Measuring a Ramadan campaign", id: "measurement" },
      {
        type: "list",
        items: [
          "Compare with last Ramadan, not with the previous month; behavior and spending patterns differ",
          "Track Ramadan and Eid phases separately, since objectives differ",
          "Expect activity to shift to evenings; review results by time of day where possible",
          "Track per creator and per language with links and codes",
          "Record sentiment and comments; tone matters more this month",
        ],
      },
      {
        type: "paragraph",
        text: "Avoid treating vendor claims about Ramadan uplift as guarantees. Seasonal performance depends on your category, offer and audience; your own year-on-year results are the benchmark that matters.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Booking creators a few weeks before Ramadan and finding the best ones taken",
          "Using religious imagery as decoration",
          "Countdown urgency and aggressive sales messaging",
          "Fixing Eid posts to a date before the moon is sighted",
          "Forgetting Eid al-Adha, or treating it as a repeat of Eid al-Fitr",
          "Charity messaging without a real, specific commitment",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "The best Ramadan campaigns in the UAE are planned early, made with creators who understand the month, and built around what people are actually doing: gathering, giving, preparing and celebrating. Plan flexibility into your dates, keep Eid al-Fitr and Eid al-Adha distinct, and measure against last year's season rather than an ordinary month.",
      },
    ],
    faqs: [
      {
        question: "When is Ramadan 2027 in the UAE?",
        answer:
          "Astronomical forecasts suggest Ramadan 2027 will begin around 8 February, with Eid al-Fitr around 9 or 10 March. The official dates depend on moon sighting and are announced by the UAE's moon-sighting committee shortly before.",
      },
      {
        question: "How early should brands book influencers for Ramadan?",
        answer:
          "Ideally two to three months before Ramadan, with briefs going out six to eight weeks ahead. Creator demand and rates peak before and during Ramadan, and approvals and gifting logistics take time.",
      },
      {
        question: "What is the difference between Eid al-Fitr and Eid al-Adha campaigns?",
        answer:
          "Eid al-Fitr ends Ramadan and is strongly linked to new clothes, gifts and family visits. Eid al-Adha falls about two months later, during the Hajj period, and centers on family gatherings, charity and travel. They need separate content and timing.",
      },
      {
        question: "Should food brands post during fasting hours?",
        answer:
          "Many brands avoid showing eating and drinking during the day and schedule food content for the evening, after iftar. Ask creators what their audiences expect.",
      },
    ],
  },
  // 1419
  {
    slug: "choose-influencer-marketing-agency-uae",
    category: "Influencer Marketing",
    title: "How to Choose an Influencer Marketing Agency for a UAE Campaign: A Brand Checklist",
    seoTitle: "How to Choose an Influencer Marketing Agency in the UAE",
    excerpt:
      "A buyer's checklist for choosing an influencer marketing agency for a UAE campaign: evidence of relevant experience, creator discovery and audience checks, local market and language capability, fees and creator pay, rights, reporting, permits and compliance, communication and contract terms.",
    metaDescription:
      "Checklist for choosing an influencer marketing agency in the UAE: experience, creator vetting, Arabic capability, fees, rights, reporting, permits and contracts.",
    author: AUTHOR,
    publishedAt: GCC_PUBLISHED,
    lastReviewed: GCC_REVIEWED,
    readingTime: "11 min read",
    inLanguage: GCC_LANGUAGE,
    spatialCoverage: "United Arab Emirates",
    breadcrumbParents: [UAE_HUB],
    tags: ["influencer marketing agency UAE", "influencer marketing agency Dubai", "choose influencer agency UAE", "influencer marketing agency Abu Dhabi"],
    related: ["influencer-marketing-agency-checklist", "influencer-marketing-uae", "influencer-campaign-brief-template-uae"],
    hero: {
      src: "/blog/gcc-guides/choose-influencer-marketing-agency-uae.svg",
      alt: "Ten-part checklist for choosing a UAE influencer marketing agency, from evidence and creator vetting to compliance workflow and contract ownership",
    },
    body: [
      {
        type: "paragraph",
        text: "Choosing an agency for a UAE campaign is harder than it looks. Many agencies have impressive Dubai showreels, some are international firms with a UAE sales office, and some are platforms describing themselves as agencies. Rankings you'll find online are often paid listings. This checklist helps you compare them on evidence, whoever they are, including us.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "To choose an influencer marketing agency for a UAE campaign, check ten things: evidence of relevant experience; how they discover creators and verify audiences; genuine local market and language capability; their strategy and execution process; transparency on fees and creator pay; deliverables, usage rights and exclusivity; reporting tied to business outcomes; their permit and disclosure workflow; communication and escalation; and contract terms, including who owns campaign assets and data. Ask for a short written proposal against your brief and talk to the people who'd actually run your campaign.",
      },
      { type: "heading", text: "The checklist", id: "checklist" },
      { type: "subheading", text: "1. Relevant experience, with evidence" },
      {
        type: "list",
        items: [
          "Campaigns in your category or a similar one, in the UAE or comparable markets",
          "What the objective was, what they did and what happened, with numbers they can explain",
          "References you can actually call",
          "Be wary of results presented without the objective or method, or client logos without detail",
        ],
      },
      { type: "subheading", text: "2. Creator discovery and audience verification" },
      {
        type: "list",
        items: [
          "How they find creators beyond the familiar names",
          "How they check audience location, language and authenticity, using creator-provided insights, tools or both",
          "Whether they show you the reasoning and data for each recommended creator",
          "How they handle creators whose audience is mostly outside the UAE",
        ],
      },
      { type: "subheading", text: "3. Local market and language capability" },
      {
        type: "list",
        items: [
          "Who on the team speaks Arabic, and which dialects; who reviews Arabic content",
          "Experience with other community languages if your audience needs them",
          "Understanding of Ramadan, Eid, national occasions and cultural norms",
          "Knowledge of differences between emirates, and of other GCC markets if you'll expand",
          "Where the team that will run your campaign is based, and how they work with UAE creators",
        ],
      },
      { type: "subheading", text: "4. Campaign strategy and execution" },
      {
        type: "list",
        items: [
          "Do they start from your objective and audience, or from a creator list?",
          "How they brief creators and balance creative freedom with your requirements",
          "Their approval workflow and timeline",
          "How they handle problems: late posts, errors, creators who drop out",
        ],
      },
      { type: "subheading", text: "5. Fees, creator compensation and transparency" },
      {
        type: "list",
        items: [
          "Fee model: management fee, retainer, percentage of spend or a combined rate",
          "Whether creator fees are passed through at cost and shown separately, or bundled with a margin",
          "What's included and what's extra (production, travel, paid amplification, reporting)",
          "VAT treatment and payment terms",
          "How and when creators are paid; slow payment damages your brand's reputation with creators",
        ],
      },
      {
        type: "paragraph",
        text: "Agency fee models are compared in detail in influencer marketing agency fees; the models are similar across markets even though rates differ.",
        links: [{ text: "influencer marketing agency fees", href: "/blog/influencer-marketing-agency-fees-india" }],
      },
      { type: "subheading", text: "6. Deliverables, usage rights and exclusivity" },
      {
        type: "list",
        items: [
          "Deliverables per creator in writing: formats, quantity, timing, how long posts stay live",
          "Usage rights you receive by default, and the cost of more",
          "Exclusivity terms and what they cost",
          "Who holds the creator contracts, and whether rights pass to you",
        ],
      },
      { type: "subheading", text: "7. Reporting, attribution and business outcomes" },
      {
        type: "list",
        items: [
          "What they'll report, how often, and against which objective",
          "Tracking setup: links, codes, app attribution, booking or lead tracking",
          "Whether they separate tracked results from estimates",
          "Whether you get the raw data, not just a presentation",
        ],
      },
      { type: "subheading", text: "8. Compliance and disclosure workflow" },
      {
        type: "list",
        items: [
          "How they verify each creator's UAE advertiser permit, and how they handle visiting creators' permits",
          "Whether the agency itself holds the licences its activities require, and, for visiting creators, whether it's accredited or works with an accredited agency",
          "How they handle sector approvals for health, financial and promotional campaigns",
          "Disclosure wording and checks in every language",
          "Claims review and record-keeping",
        ],
      },
      {
        type: "paragraph",
        text: `As of ${REVIEW_DATE_TEXT}, visiting creators' permits must be applied for through an advertising or talent management agency accredited by the National Media Authority, according to Gulf News' report of the authority's guidance. If you'll use international creators, ask how the agency handles that. Other rules are summarized in our UAE influencer marketing guide.`,
        links: [
          { text: "Gulf News' report of the authority's guidance", href: SRC.gnVisitor.url },
          { text: "UAE influencer marketing guide", href: "/blog/influencer-marketing-uae" },
        ],
      },
      { type: "subheading", text: "9. Communication, approvals and escalation" },
      {
        type: "list",
        items: [
          "Your day-to-day contact, and who's senior on the account",
          "Response times and how approvals happen",
          "What happens if something goes wrong on a live post, and how fast they can act",
          "Time zone and working days, especially if the team isn't in the UAE",
        ],
      },
      { type: "subheading", text: "10. Contract terms and ownership" },
      {
        type: "list",
        items: [
          "Who owns content, creator relationships and campaign data at the end",
          "Notice period and exit terms",
          "Liability for compliance failures",
          "Confidentiality and non-solicitation terms, and whether they stop you working directly with creators later",
          "Payment terms and what happens if the campaign is cancelled",
        ],
      },
      {
        type: "paragraph",
        text: "A clause-by-clause contract checklist is in influencer marketing agency checklist.",
        links: [{ text: "influencer marketing agency checklist", href: "/blog/influencer-marketing-agency-checklist" }],
      },
      { type: "heading", text: "Questions to ask in the pitch", id: "questions" },
      {
        type: "list",
        items: [
          "Walk us through a UAE campaign you ran: the objective, the creators, what went wrong and what you changed",
          "For our brief, which kinds of creators would you recommend, and why?",
          "How would you check that a creator's audience is in the emirates we care about?",
          "Who would review our Arabic content?",
          "How do you verify permits, and what happens with a visiting creator?",
          "Show us a real report from a past campaign, anonymized if necessary",
          "What would you need from us to make this work?",
        ],
      },
      {
        type: "paragraph",
        text: "More questions, organized by stage, are in questions to ask an influencer marketing agency.",
        links: [{ text: "questions to ask an influencer marketing agency", href: "/blog/influencer-marketing-agency-pitch-questions" }],
      },
      { type: "heading", text: "Local, regional or international agency?", id: "agency-types" },
      {
        type: "table",
        headers: ["Agency type", "Strengths", "Check"],
        rows: [
          ["UAE-based specialist", "Local creator relationships, language, permits and on-the-ground events", "Depth beyond Dubai; process and reporting"],
          ["Regional GCC agency", "Multi-market campaigns, Saudi and UAE together", "Whether each market has dedicated expertise"],
          ["International agency with a UAE team", "Global brand consistency, larger programs", "Who actually does the local work"],
          ["Agency based in another market", "Cost, specific category or strategy expertise", "How they source UAE creators, handle permits and Arabic review; visiting-creator accreditation"],
          ["Platform or marketplace", "Self-serve scale, lower fees", "Your team does strategy, briefing and review"],
        ],
      },
      {
        type: "paragraph",
        text: "For Abu Dhabi campaigns specifically, ask whether the agency has worked with Abu Dhabi-based creators and authorities such as the Department of Health or the Department of Culture and Tourism, rather than assuming a Dubai track record transfers.",
      },
      { type: "heading", text: "Red flags", id: "red-flags" },
      {
        type: "list",
        items: [
          "Guaranteed results such as follower numbers, sales or 'viral' reach",
          "No clear answer on permits, or suggestions that they don't matter",
          "Refusal to show creator fees separately from the agency's margin",
          "Recommending only creators from their own exclusive roster",
          "Reports with no link to your objective",
          "Contracts that leave you without content or data at the end",
        ],
      },
      { type: "heading", text: "A simple scoring sheet", id: "scoring" },
      {
        type: "table",
        headers: ["Area", "Weight (example)", "Score 1 to 5"],
        rows: [
          ["Relevant experience and evidence", "15%", ""],
          ["Creator discovery and audience verification", "15%", ""],
          ["Local market and language capability", "15%", ""],
          ["Strategy and execution", "10%", ""],
          ["Fee transparency", "10%", ""],
          ["Rights and exclusivity terms", "5%", ""],
          ["Reporting and attribution", "10%", ""],
          ["Compliance workflow", "10%", ""],
          ["Communication", "5%", ""],
          ["Contract and ownership", "5%", ""],
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "The best agency for your UAE campaign is the one that can show evidence relevant to your objective, explain how it would reach your specific audience, and handle the permits, languages and details without being asked. Use the checklist on every shortlisted agency, including any you already know, and you'll compare on substance rather than showreels.",
      },
    ],
    faqs: [
      {
        question: "What should I look for in a UAE influencer marketing agency?",
        answer:
          "Evidence of relevant results, transparent creator vetting, real Arabic and local-market capability, clear fees with creator pay shown separately, defined rights, reporting tied to your objective, a permit and disclosure workflow, and fair contract terms.",
      },
      {
        question: "Does an agency need a licence to run influencer campaigns in the UAE?",
        answer:
          "Agencies need the licences that apply to their activities, and visiting creators' permits must go through an accredited advertising or talent management agency. Ask any agency how it's licensed and how it handles visiting creators, and check with the National Media Authority.",
      },
      {
        question: "Can an agency outside the UAE run a UAE campaign?",
        answer:
          "It can, if it can source and verify UAE creators, review Arabic and other language content, handle permits (including working with an accredited UAE agency for visiting creators) and coordinate locally. Ask how it does each of these.",
      },
    ],
  },
];
