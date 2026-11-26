import type { BlogPost } from "@/content/blog";

const AUTHOR = { name: "Kudozz Strategy Team", role: "Agency Team" };

export const discoveryBatchS: BlogPost[] = [
  // #91 how-many-influencers-for-a-campaign (UPGRADE, orig 2026-10-14)
  {
    slug: "how-many-influencers-for-a-campaign",
    category: "Campaign Strategy",
    title: "How Many Influencers Should You Shortlist for a Brand Campaign?",
    seoTitle: "How Many Influencers to Shortlist for a Campaign | Kudozz",
    excerpt:
      "Two numbers decide a creator campaign: how many influencers you'll finally book, and how many you need on the shortlist to get there. How to work out both, size your backups and track every creator's status.",
    metaDescription:
      "How many influencers to shortlist: set the final creator count from reach, learning, coverage and budget, then add expected drop-off and named backups.",
    author: AUTHOR,
    publishedAt: "2026-10-14",
    updatedAt: "2026-11-27",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: ["Influencer Shortlist", "Campaign Planning", "Creator Count", "Backup Creators"],
    related: ["influencer-shortlist", "select-influencer-mix-for-campaign", "influencer-budget-allocation", "influencer-marketing-testing"],
    hero: {
      src: "/blog/discovery/how-many-influencers-for-a-campaign.svg",
      alt: "A funnel narrowing from a longlist to a shortlist, approved creators and a confirmed final line-up, with a bench of backup creators held beside the approved stage",
    },
    discoveryCta: {
      headline: "Size Your Next Shortlist From Real Profiles",
      body: "Explore Kudozz Discovery to compare Instagram creators in India by followers, engagement rate and average views, and keep primary picks and backups in one saved list per campaign. Your team still handles outreach, terms and reporting.",
    },
    body: [
      {
        type: "paragraph",
        text: "A marketing manager at a Jaipur-based block-print apparel brand gets a simple instruction before the festive season: 'Book eight creators for the new collection.' She finds eight creators she likes and messages all eight. Three don't reply, two quote well above budget, one is booked through Diwali and one promoted a rival label last month. A week later she has one confirmed creator and a launch date that hasn't moved.",
      },
      {
        type: "paragraph",
        text: "The instruction was fine. The mistake was treating the final creator count and the shortlist as the same number. This guide answers both questions: how many influencers to shortlist so you actually end up with the line-up you need, and how many creators the campaign should have in the first place. The numbers in it are worked examples to show the method, not industry benchmarks; your own response rates and budget set the real figures.",
      },
      { type: "heading", text: "Two numbers, not one", id: "two-numbers" },
      {
        type: "paragraph",
        text: "Every creator campaign runs on two counts that people tend to blur:",
      },
      {
        type: "list",
        items: [
          "The final count: how many creators will actually publish for the campaign. It's a planning decision, set by your objective, your markets and your budget.",
          "The shortlist size: how many vetted creators you need ready so that, after declines, rate gaps, date clashes and failed checks, you still reach the final count with a backup for every slot that matters.",
        ],
      },
      {
        type: "paragraph",
        text: "Work out the final count first. The shortlist is built backwards from it.",
      },
      { type: "heading", text: "Step 1: Set the final creator count", id: "final-count" },
      {
        type: "paragraph",
        text: "There's no standard number of influencers for a campaign. The useful approach is to calculate four separate counts and let them argue with each other.",
      },
      {
        type: "table",
        headers: ["Count", "Question it answers", "How to estimate it"],
        rows: [
          ["Reach", "How many creators does it take to reach enough of the right people?", "Relevant viewers wanted ÷ (typical views per post × share of viewers who match your customer), plus a margin for overlap"],
          ["Learning", "How many do we need to learn which creator type or message works?", "Groups being compared × creators per group, so no single post decides the result"],
          ["Coverage", "How many to cover every city, language or segment?", "Segments × a minimum per segment, usually at least two so one dropout doesn't leave a market empty"],
          ["Ceiling", "How many can we pay for and manage properly?", "The lower of (creator budget ÷ real cost per creator) and (team hours ÷ hours per creator)"],
        ],
      },
      {
        type: "paragraph",
        text: "The campaign needs at least the largest of the first three counts and can afford at most the fourth. Real cost per creator means the fee plus usage rights, product, shipping and that creator's share of management time, not the quote alone; influencer campaign costs in India breaks those lines down.",
        links: [{ text: "influencer campaign costs in India", href: "/blog/influencer-campaign-cost-india" }],
      },
      { type: "subheading", text: "A worked example" },
      {
        type: "paragraph",
        text: "Say a skincare brand is launching on Instagram in Bengaluru and Hyderabad and wants about 1,50,000 views per city from women aged 25 to 40. The micro-creators it's considering average around 30,000 views per Reel, and roughly half their viewers fit the profile, so each delivers about 15,000 relevant views: around ten creators per city, twenty in all. The learning count (dermatology educators against skincare reviewers, four of each) is eight, and coverage (two cities, at least two creators each) is four. The need is twenty. After non-creator costs, ₹6,00,000 at about ₹40,000 real cost per creator pays for fifteen.",
      },
      {
        type: "paragraph",
        text: "Need is twenty, ceiling is fifteen. The answer isn't to book fifteen and hope; it's to change the scope, either launching in one city with ten creators or keeping both cities with a lower reach target. All figures here are hypothetical. Whether the budget itself is right is covered in estimating an influencer marketing budget, and designing fair comparison groups in creator campaign testing.",
        links: [
          { text: "estimating an influencer marketing budget", href: "/blog/influencer-marketing-budget" },
          { text: "creator campaign testing", href: "/blog/influencer-marketing-testing" },
        ],
      },
      { type: "heading", text: "Step 2: How many influencers to shortlist for that final count", id: "shortlist-size" },
      {
        type: "paragraph",
        text: "Once the final count is fixed, the shortlist has to survive the gap between 'we like this creator' and 'this creator is booked'. Creators fall out at every stage:",
      },
      {
        type: "list",
        items: [
          "No reply, or a reply after your deadline.",
          "A quote that doesn't fit the budget even after negotiation.",
          "Dates that clash with the posting window, which is common around festive peaks.",
          "An exclusivity deal with, or a recent post for, a competitor.",
          "Something in vetting: inconsistent views, suspicious comments, past content you can't be associated with.",
          "Terms they won't accept, such as usage rights, approval rounds or paid amplification of their posts.",
        ],
      },
      {
        type: "paragraph",
        text: "So size the shortlist from your expected drop-off rather than a rule of thumb:",
      },
      {
        type: "template",
        label: "Shortlist size",
        text: "Creators to approach ≈ (final count + backups) ÷ expected share who agree on acceptable terms\n\nExpected share: from your own last campaign, if you tracked it. With no history, assume it's lower than you hope and recheck after the first round of replies.\nBackups: at least one for every slot that can't be left empty.\nVetting: run the hard checks before outreach, so everyone on the shortlist is someone you'd actually book.",
      },
      {
        type: "paragraph",
        text: "For example, if a brand needs ten creators plus three backups and, in its last campaign, about half the creators it approached ended up agreeing, it should approach around twenty-six vetted creators, ideally in two waves rather than all at once. A brand that has never tracked its response rate should treat the first campaign as the way to find it.",
      },
      { type: "subheading", text: "What widens or narrows the shortlist" },
      {
        type: "table",
        headers: ["Factor", "The shortlist should be", "Why"],
        rows: [
          ["Narrow niche or small city", "Deeper than usual", "Fewer qualified creators, and each is more likely to be busy"],
          ["Festive or sale-season dates", "Deeper, and approached earlier", "Calendars fill up and quotes change"],
          ["Strict exclusivity or category conflicts", "Deeper", "More creators fail the competitor check"],
          ["Regional language requirement", "Built separately per language", "A Marathi creator can't back up a Tamil slot"],
          ["Flexible dates and simple deliverables", "Leaner", "Fewer reasons for creators to decline"],
          ["Creators you've worked with before", "Leaner", "Replies and terms are more predictable"],
        ],
      },
      {
        type: "paragraph",
        text: "The full process for turning a longlist into a ranked list, with criteria, hard gates, scoring and stakeholder review, is in how to shortlist influencers step by step. Before anyone starts searching, an internal sourcing brief that states the final count, the segments and the budget per creator keeps the shortlist honest.",
        links: [
          { text: "how to shortlist influencers step by step", href: "/blog/influencer-shortlist" },
          { text: "internal sourcing brief", href: "/blog/influencer-sourcing-brief" },
        ],
      },
      { type: "heading", text: "How many backups, and which kind", id: "backups" },
      {
        type: "paragraph",
        text: "A backup is a vetted, approved creator you can book quickly if a confirmed creator drops out, misses a date or fails a late check. There are two ways to hold them:",
      },
      {
        type: "list",
        items: [
          "Per slot: each important slot (a city, a language, a role such as the lead creator on launch day) has a named, like-for-like backup. Use this when slots aren't interchangeable.",
          "A pool: a few approved creators who could fill any of several similar slots. Use this when ten micro-creators in one city are doing roughly the same job.",
        ],
      },
      {
        type: "paragraph",
        text: "Backups have to be genuinely ready: vetted, roughly within budget and aware of the dates. Be straight with them as well. Tell a backup creator they're on a reserve list for specific dates rather than leaving them with a vague 'we'll get back to you'; it protects the relationship for the next campaign. For launch-day or event slots that can't move, keep a backup per slot. For flexible, always-on work, a small pool is usually enough.",
      },
      {
        type: "discovery-cta",
        headline: "Line Up Every Slot and Its Backup",
        body: "Kudozz Discovery lets you search Instagram creators in India by niche, city, language and engagement, compare average views and likes, and save primary and backup picks into a named list for each campaign. Outreach, negotiation and contracts stay with your team.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Organise the list: shortlisted, approved, backup", id: "status-table" },
      {
        type: "paragraph",
        text: "Most shortlist confusion comes from a single 'status' column that means different things to different people. Agree a fixed set of statuses and what moves a creator from one to the next:",
      },
      {
        type: "table",
        headers: ["Status", "What it means", "Who moves it", "What to record"],
        rows: [
          ["Longlist", "Possible fit, not yet checked", "Whoever is sourcing", "Handle, niche, city, language, followers, typical views"],
          ["Shortlisted", "Passed the hard checks; worth approaching", "Campaign lead", "Check results, content notes, any competitor posts"],
          ["Approved", "Signed off internally for a specific slot", "Brand approver", "The slot (city, role, format) and budget range"],
          ["Backup", "Approved and held in reserve for named slots or dates", "Campaign lead", "Which slots they can cover, and whether they've been told"],
          ["In discussion", "Approached; terms being agreed", "Whoever handles outreach", "Quote, deliverables, dates, rights requested"],
          ["Confirmed", "Agreement signed and dates fixed", "Campaign lead", "Contract, brief sent, go-live date"],
          ["Declined or dropped", "Out for this campaign", "Anyone, with a reason", "The reason, so you know whether to try again"],
        ],
      },
      {
        type: "paragraph",
        text: "Two rules keep it workable. A creator is only ever approved for a named slot, never 'in general'. And a backup moves to confirmed only once the person who approved the original slot agrees. Keeping these statuses alongside contact details and past rates in one place is exactly what an influencer marketing CRM is for.",
        links: [{ text: "influencer marketing CRM", href: "/blog/influencer-marketing-crm" }],
      },
      {
        type: "template",
        label: "Shortlist tracker columns",
        text: "Creator | Handle | Slot (city / language / role) | Status | Typical views | Quote | Dates available | Checks passed (Y/N) | Backup for | Owner | Last contact | Notes",
      },
      { type: "heading", text: "When the numbers don't fit", id: "when-numbers-dont-fit" },
      {
        type: "paragraph",
        text: "If the count you need is bigger than your ceiling, or the shortlist you can realistically build is too thin, change the plan rather than lowering the bar on who gets booked:",
      },
      {
        type: "list",
        items: [
          "Cut a market: one city done properly beats three done thinly.",
          "Cut a comparison: test two creator types instead of four.",
          "Drop a platform or format for this round.",
          "Move the dates out of a peak period if the shortlist is thin because creators are already booked.",
          "Split the campaign into waves and use the first wave's results to plan the second.",
        ],
      },
      {
        type: "paragraph",
        text: "If your real question is which tiers, roles, formats and regions the line-up should include, rather than how many creators, that's a separate decision; selecting the right mix of influencers works through it as a portfolio. For campaigns across several cities, multi-city shortlisting shows how to keep a list per city. And when you add several creators from the same niche, check how much their audiences overlap before assuming each one brings new viewers.",
        links: [
          { text: "selecting the right mix of influencers", href: "/blog/select-influencer-mix-for-campaign" },
          { text: "multi-city shortlisting", href: "/blog/influencer-shortlist-multi-city-campaign" },
          { text: "how much their audiences overlap", href: "/blog/influencer-audience-overlap" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Shortlisting exactly the final count, so every decline becomes a scramble.",
          "Picking a creator count first and fitting the budget around it.",
          "Counting followers instead of typical views from the right audience.",
          "Booking one creator per creator type, then drawing conclusions about the whole type.",
          "Approaching the entire shortlist at once and getting more yeses than the budget can pay for.",
          "Backups who were never vetted, or never told they were backups.",
          "A status column with no agreed meanings, so 'approved' just means someone liked the profile.",
        ],
      },
      { type: "heading", text: "The rule to take away", id: "takeaway" },
      {
        type: "paragraph",
        text: "Decide how many creators the campaign needs from reach, learning and coverage, cap it at what your budget and team can handle, then build the shortlist backwards from that number using your own drop-off rate plus a backup for every slot that can't move. Track every creator through the same statuses and write down why people drop out. By your second or third campaign you'll know your real numbers instead of guessing them. If you'd like help building and vetting the list, Kudozz's creator discovery service works alongside brand teams on exactly this.",
        links: [{ text: "creator discovery service", href: "/services/creator-discovery" }],
      },
    ],
    faqs: [
      {
        question: "How many influencers should I shortlist for a campaign?",
        answer:
          "Enough to reach your final creator count after drop-off, plus backups. Divide the final count plus backups by the share of approached creators you expect to agree on acceptable terms, using your own past campaigns where you can. With no history, approach in two waves and adjust after the first.",
      },
      {
        question: "How many influencers does a campaign need?",
        answer:
          "There's no standard number. Work out how many creators you need for reach, for learning and for covering your cities or languages; the campaign needs at least the largest of those, within what your budget and team can manage. If the need is higher than that ceiling, narrow the scope.",
      },
      {
        question: "How many backup influencers should we keep?",
        answer:
          "At least one like-for-like backup for every slot that can't move, such as a launch-day creator or the only creator in a language. For flexible campaigns with many similar creators, a small pool of approved backups is usually enough.",
      },
      {
        question: "Is it better to use one big influencer or several small ones?",
        answer:
          "It depends on the objective. One larger creator gives concentrated reach on one date; several smaller creators give more content, more segments and a way to compare. Reach-led launches can favour fewer, larger creators if their audience fits, while tests and regional campaigns favour more, smaller ones.",
      },
      {
        question: "What's the difference between shortlisted and approved?",
        answer:
          "Shortlisted means a creator has passed your basic checks and is worth approaching. Approved means a named person at the brand has signed them off for a specific slot and budget range. Keeping the two separate stops creators being contacted before anyone has agreed they fit.",
      },
    ],
  },

  // #93 creators-for-product-testing (NEW)
  {
    slug: "creators-for-product-testing",
    category: "Influencer Marketing",
    title: "How to Find Creators for Product Testing and Early Feedback",
    seoTitle: "Creators for Product Testing: How to Find Them | Kudozz",
    excerpt:
      "Product testers are chosen for what they can tell you, not how many people they reach. How to find creators who give useful early feedback, how testing differs from seeding and paid reviews, and where NDAs and disclosure come in.",
    metaDescription:
      "Find creators for product testing and early feedback: what makes a good tester, how testing differs from seeding and reviews, NDAs and ASCI disclosure.",
    author: AUTHOR,
    publishedAt: "2026-11-27",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["Product Testing", "Creator Feedback", "Product Seeding", "Influencer Disclosure"],
    related: ["influencer-product-seeding-program", "creator-feedback-loop", "instagram-gifting-vs-paid-collaboration", "pilot-influencer-campaign"],
    hero: {
      src: "/blog/discovery/creators-for-product-testing.svg",
      alt: "Four creator arrangements on a line from private feedback to public endorsement, marking which are published, which are paid and which need a disclosure label",
    },
    discoveryCta: {
      headline: "Recruit Your First Panel of Product Testers",
      body: "Explore Kudozz Discovery to find Instagram creators in India by niche, city and language, check their engagement and average views, and save a tester shortlist. Screening, confidentiality agreements and feedback collection stay with your team.",
    },
    body: [
      {
        type: "paragraph",
        text: "A Pune-based protein snack brand has three new flavours in sample packs and six weeks before production is locked. The founder's instinct is to send them to the biggest fitness creators who'll accept. That might get posts. It rarely gets what the brand needs at this stage: someone who'll say the chocolate one is chalky, the pack is hard to tear open after a workout and the price would put their followers off.",
      },
      {
        type: "paragraph",
        text: "Finding creators for product testing is a different job from finding creators for a campaign. You're choosing people for what they can tell you before launch, not for how many people they can reach after it. This guide covers what makes a good tester, how testing differs from seeding, paid reviews and endorsements, how to find and screen candidates, and where NDAs and ASCI disclosure fit.",
      },
      { type: "heading", text: "Testing, seeding, paid reviews and endorsements are different deals", id: "four-arrangements" },
      {
        type: "paragraph",
        text: "Brands blur these four, and creators then don't know whether they're expected to post, to praise or to criticise. Decide which one you're running before you approach anyone:",
      },
      {
        type: "table",
        headers: ["Arrangement", "What you want", "Published?", "Typical terms", "Disclosure"],
        rows: [
          ["Product testing", "Private, honest feedback before or soon after launch", "No, unless agreed later", "Product, often a fee for time; an NDA for unreleased items", "None while it stays private; needed if the creator later posts about it"],
          ["Seeding", "Genuine use and optional organic posts", "Creator's choice", "Product only, no obligation to post", "Needed if they post, because a free product is a material connection"],
          ["Paid review", "An honest public review, good and bad", "Yes", "Fee plus product; the verdict is the creator's", "Needed"],
          ["Public endorsement", "A creator recommending your product", "Yes", "Fee, agreed messages and deliverables", "Needed"],
        ],
      },
      {
        type: "paragraph",
        text: "The difference that matters most: in testing, the output is information that comes back to you. Once content goes out to an audience, it's marketing, and disclosure rules apply. Seeding programmes are covered in finding influencers for product gifting and seeding, and the trade-offs between free product and paid deals in gifting versus paid collaborations.",
        links: [
          { text: "finding influencers for product gifting and seeding", href: "/blog/influencer-product-seeding-program" },
          { text: "gifting versus paid collaborations", href: "/blog/instagram-gifting-vs-paid-collaboration" },
        ],
      },
      { type: "heading", text: "What makes a creator good at product testing", id: "tester-qualities" },
      {
        type: "paragraph",
        text: "Follower count barely matters here. These do:",
      },
      {
        type: "list",
        items: [
          "Niche expertise. A running coach can tell you whether a shoe's cushioning holds up over weeks of training; a lifestyle creator who jogs occasionally can tell you whether it looks good. Both are useful, for different questions.",
          "A relevant audience. When their followers resemble your future customers, the creator knows what those people ask, complain about and will pay for. Their comment section is a free preview of objections.",
          "Communication skills. Good testers explain why something works or doesn't, in specifics. Look for creators whose content already breaks products down rather than simply showing them.",
          "Product familiarity. They've used your competitors, so their feedback comes with a reference point: 'thinner than the one I normally use, but the clasp is worse'.",
          "A record of honesty. Past reviews that mention flaws are a good sign. A feed where every product is perfect suggests feedback that will be polite rather than useful.",
          "Reliability and discretion. They reply, meet deadlines and can keep an unreleased product off their Stories.",
        ],
      },
      {
        type: "paragraph",
        text: "Depending on the product, the best testers might not be typical creators at all. Physiotherapists, chefs, software engineers and other practitioners can spot problems a general audience would only discover months later; how to identify them is covered in subject-matter experts for influencer collaborations.",
        links: [{ text: "subject-matter experts for influencer collaborations", href: "/blog/expert-creator-marketing" }],
      },
      { type: "heading", text: "How to find creators for product testing, step by step", id: "finding-testers" },
      {
        type: "list",
        items: [
          "Write down what you need to learn, such as 'Is the texture right for humid cities?' or 'Can a first-time user set this up without the manual?' Each question points to a different kind of tester.",
          "Define a tester profile for each question: niche, city or climate, language, experience level, and whether they need to have used competing products.",
          "Search by niche first, then narrow. On Instagram, filter by niche, city and language, and look for creators who post breakdowns, comparisons and how-tos. For technical or long-form products, check YouTube reviewers and specialist communities by hand.",
          "Read ten or fifteen recent posts, not the bio. You're looking for evidence that they explain, compare and criticise.",
          "Read their comments. Follower questions show what their audience cares about and whether the creator answers thoughtfully.",
          "Screen with a short call or questionnaire. Ask how they'd test a product like yours and what they'd compare it with. The answer tells you more than any metric.",
          "Agree terms before anything ships: what you're asking for, by when, the feedback format, any fee, whether an NDA applies, what happens to the product afterwards and whether they may post about it later.",
        ],
      },
      {
        type: "paragraph",
        text: "Two earlier guides help with the search itself: finding influencers by content niche covers narrowing by topic, and analysing an influencer's content before shortlisting covers what to look for in their posts, which for testing should put extra weight on clarity.",
        links: [
          { text: "finding influencers by content niche", href: "/blog/find-influencers-by-content-niche" },
          { text: "analysing an influencer's content before shortlisting", href: "/blog/influencer-content-analysis-guide" },
        ],
      },
      {
        type: "paragraph",
        text: "Aim for a small group with a spread of perspectives rather than a large group of similar creators. Five testers who each see the product differently (a beginner, an expert, a creator in a humid coastal city, a regional-language creator and someone loyal to your main competitor) will usually tell you more than fifteen who all see it the same way.",
      },
      { type: "heading", text: "A simple tester scorecard", id: "tester-scorecard" },
      {
        type: "table",
        headers: ["Criterion", "What good looks like", "Red flag"],
        rows: [
          ["Niche expertise", "Posts show real depth in your category", "The topic only appears in sponsored posts"],
          ["Audience relevance", "Comments come from people like your customers", "Generic comments, or an audience in the wrong life stage"],
          ["Communication", "Explains why, with specifics and comparisons", "Only aesthetic content or one-line captions"],
          ["Product familiarity", "Has used and discussed competing products", "No reference points in the category"],
          ["Honesty", "Past reviews mention drawbacks", "Every product is a favourite"],
          ["Reliability", "Replies promptly and keeps agreed dates", "Slow or vague even at the screening stage"],
        ],
      },
      {
        type: "paragraph",
        text: "Score each criterion from 1 to 3 and keep the notes. The scores matter less than the conversation they force: if nobody can say why one creator would give better feedback than the next, neither probably will.",
      },
      {
        type: "discovery-cta",
        headline: "Find Testers Who Know Your Category",
        body: "Kudozz Discovery lets you filter Instagram creators in India by niche, city, language and engagement, open each profile's metrics and save likely testers into a named list. Screening calls, NDAs and the feedback process stay with your team.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "NDAs for unreleased products", id: "ndas" },
      {
        type: "paragraph",
        text: "If a product hasn't been announced, put confidentiality in writing before it leaves your warehouse. Creators film their lives by habit, and an unboxing on Stories can happen before anyone thinks about it. A short, plain-language agreement usually covers:",
      },
      {
        type: "list",
        items: [
          "What's confidential: the product, packaging, name, price and launch date, plus anything shared on calls.",
          "What they can't do: post, show or describe the product publicly, including in Stories, close-friends lists and private groups.",
          "How long it lasts: until a named date or until you announce, whichever comes first, so it doesn't run indefinitely.",
          "What happens to prototypes: kept, returned or destroyed, and who pays for return shipping.",
          "How feedback can be used: in product development, and separately, whether you may quote it publicly.",
        ],
      },
      {
        type: "paragraph",
        text: "Keep it proportionate. A two-page agreement a creator can read in five minutes gets signed; a long document full of penalty clauses sends good testers elsewhere. Have your legal adviser review the template once, then reuse it.",
      },
      { type: "heading", text: "When testing turns into content: disclosure", id: "disclosure" },
      {
        type: "paragraph",
        text: "Private feedback isn't advertising, so there's nothing to disclose while it stays between you and the creator. The moment a tester posts about the product, that changes. ASCI's guidelines for influencer advertising treat a free product as a material connection, even one sent without conditions, so a post about a product received for testing needs a clear, prominent label such as 'Ad', 'Collaboration' or 'Free gift', not one buried among hashtags. The Department of Consumer Affairs' 2023 endorsement guidance also expects material connections to be disclosed.",
      },
      {
        type: "list",
        items: [
          "Agree in advance whether testers may post once the product launches, and on what terms.",
          "Never make payment or future work depend on a positive verdict. If you want an honest public review, commission a paid review and let the creator say what they think.",
          "If you want to quote a tester's feedback publicly as a testimonial, get written permission and disclose the relationship.",
        ],
      },
      {
        type: "paragraph",
        text: "Rules are updated from time to time, so check the current guidance and take legal advice for regulated categories such as food supplements or health products. Practical label wording and placement are covered in the creator disclosure guide.",
        links: [{ text: "creator disclosure guide", href: "/blog/creator-disclosure-guide" }],
      },
      { type: "heading", text: "Collect feedback you can act on", id: "feedback-format" },
      {
        type: "paragraph",
        text: "'Loved it!' is pleasant and useless. Give testers a short form, then follow up with a call:",
      },
      {
        type: "template",
        label: "Tester feedback form",
        text: "First impressions (packaging, opening, set-up):\nWhat you used it for, how often and for how long:\nWhat worked, with specifics:\nWhat didn't, with specifics:\nCompared with what you normally use:\nWhat would stop your followers buying it:\nPrice you'd expect to pay:\nOne change you'd make before launch:\nCan we contact you with follow-up questions? Y/N",
      },
      {
        type: "paragraph",
        text: "Collate the answers across testers before you act. A complaint from one tester is a note; the same complaint from three different kinds of tester is a decision. How to turn creator input into product and positioning changes without over-reading a single voice is covered in building a creator feedback loop.",
        links: [{ text: "building a creator feedback loop", href: "/blog/creator-feedback-loop" }],
      },
      {
        type: "paragraph",
        text: "Good testers also make natural launch creators. They know the product, their feedback shaped it and their later content tends to be specific, which suits demonstration videos. When you're ready to send product more widely, Kudozz's seeding and gifting service can run the selection and logistics.",
        links: [
          { text: "demonstration videos", href: "/blog/influencers-for-product-demonstration-videos" },
          { text: "seeding and gifting service", href: "/services/influencer-seeding-gifting" },
        ],
      },
      { type: "heading", text: "Mistakes that waste a testing round", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Choosing testers by follower count, then getting polite, vague feedback.",
          "Running 'testing' that's really seeding, then being disappointed nobody sent notes.",
          "Shipping unreleased products without a confidentiality agreement.",
          "Only asking creators who already love the brand.",
          "Tying payment to positive comments.",
          "Letting a tester post about a free product without a disclosure label.",
          "Collecting feedback and never telling testers what changed because of it.",
        ],
      },
      { type: "heading", text: "Before the first sample ships", id: "before-you-ship" },
      {
        type: "list",
        items: [
          "Questions written down, with one tester profile per question.",
          "A spread of perspectives, including at least one creator who uses a competitor.",
          "Terms agreed: deadline, feedback format, fee if any, prototype return.",
          "NDA signed for anything unannounced.",
          "Posting rules agreed, with disclosure wording ready for when testers publish.",
          "A date set to tell testers what you changed.",
        ],
      },
      {
        type: "paragraph",
        text: "Treat testers as advisers, not as an early wave of advertising. Brands that do tend to come out with a better product and a small group of creators who already understand it.",
      },
    ],
    faqs: [
      {
        question: "What's the difference between product testing and product seeding?",
        answer:
          "Product testing asks creators for private, structured feedback, often before launch and sometimes under an NDA. Seeding sends products to creators who may post about them if they genuinely like them, with no obligation. Testing returns information to the brand; seeding aims for organic content.",
      },
      {
        question: "Should we pay creators for product testing?",
        answer:
          "Often, yes, if you're asking for real time: structured feedback, a call or several weeks of use. A fee for their time is fair and makes deadlines easier to hold. What you shouldn't do is make payment depend on positive feedback.",
      },
      {
        question: "Do creators need to disclose products they received for testing?",
        answer:
          "Not while the feedback stays private. If they post about a product they received free, ASCI's guidelines treat that as a material connection, so the post needs a clear disclosure label. Agree posting rules before you ship.",
      },
      {
        question: "Do we need an NDA for product testing?",
        answer:
          "For unreleased products it's sensible. A short agreement covering what's confidential, for how long and what happens to prototypes protects the launch without scaring off good testers. Have a legal adviser review the template.",
      },
      {
        question: "How many creators should test a product?",
        answer:
          "Enough to cover the perspectives you need rather than a fixed number. A small group with a spread of experience levels, cities and reference points usually gives clearer feedback than a large group of similar creators.",
      },
    ],
  },

  // #94 influencers-for-brand-events (NEW)
  {
    slug: "influencers-for-brand-events",
    category: "Campaign Strategy",
    title: "How to Find Influencers for Brand Events and Product Launch Events",
    seoTitle: "Influencers for Brand Events: How to Find Them | Kudozz",
    excerpt:
      "The right event creators aren't the biggest names who'll accept an invite. They're the ones who can be there, suit the event and produce the content you need before, during and after it. How to source them for launches, brand experiences and industry events.",
    metaDescription:
      "How to find influencers for brand events and launch events: five selection criteria, pre, live and post-event content needs, and a sourcing checklist.",
    author: AUTHOR,
    publishedAt: "2026-11-27",
    lastReviewed: "November 2026",
    readingTime: "8 min read",
    tags: ["Event Influencer Marketing", "Launch Events", "Creator Sourcing", "Brand Experiences"],
    related: ["experiential-influencer-marketing", "influencers-for-product-launch", "how-to-find-local-influencers", "influencer-marketing-and-pr"],
    hero: {
      src: "/blog/discovery/influencers-for-brand-events.svg",
      alt: "An event timeline running from sourcing and invitations through pre-event teasers, live coverage and post-event recaps, with the creator skill to select for at each stage",
    },
    discoveryCta: {
      headline: "Plan the Creator Guest List for Your Launch",
      body: "Explore Kudozz Discovery to find Instagram creators in India by city, niche and language, compare engagement and average views, and save invitees and backups in one list. Invitations, logistics and agreements stay with your team.",
    },
    body: [
      {
        type: "paragraph",
        text: "The usual way to build an event guest list is to start at the top: invite the biggest creators who might say yes, then work down. It feels safe. It often produces a room where half the confirmed names don't turn up, a few who do post a single Story of the welcome drink, and nobody films the product.",
      },
      {
        type: "paragraph",
        text: "Finding influencers for brand events works better the other way round. Start with what the event needs creators to do before, during and after it, then find people who can actually be in the room and are good at that. This guide covers the sourcing side: the selection criteria, how they shift between launch events, brand experiences and industry events, and a checklist for building the list.",
      },
      { type: "heading", text: "Where this guide fits", id: "sourcing-vs-planning" },
      {
        type: "paragraph",
        text: "Sourcing is one part of an event creator campaign. How to structure the campaign around the event itself, from invitations and teasers through live coverage to recaps and amplification, is in experiential influencer marketing, which is worth reading alongside this. If you run events as a business (an exhibition organiser, conference company or festival) and need ticket or registration sales, see influencer marketing for event and exhibition businesses instead.",
        links: [
          { text: "experiential influencer marketing", href: "/blog/experiential-influencer-marketing" },
          { text: "influencer marketing for event and exhibition businesses", href: "/blog/event-influencer-marketing-india" },
        ],
      },
      { type: "heading", text: "Five things to check before you invite anyone", id: "selection-criteria" },
      {
        type: "table",
        headers: ["Criterion", "The question", "How to check"],
        rows: [
          ["Event relevance", "Would this creator's audience care about the event, or is it just a free evening out?", "Their recent content covers your category, or events like yours"],
          ["Creator location", "Can they physically be there on the date without a complicated trip?", "Where they're based and how often they post from your city; ask rather than assume"],
          ["Audience fit", "Are their followers the people you want to reach, and where do those followers live?", "Recent comments, plus an Insights screenshot of top cities and age ranges"],
          ["Content style", "Can they produce what you need in a crowded, badly lit room?", "Past event coverage: live Stories, quick Reels, polished recaps"],
          ["Availability", "Are they free on the date and through the posting window after it?", "Ask early; festive and wedding-season calendars fill quickly"],
        ],
      },
      {
        type: "paragraph",
        text: "Creator location and audience location are different questions. A creator who lives in Gurugram might have followers spread across India, which suits a national launch and is much less useful for a pop-up that needs local footfall. The difference is explained in checking where an influencer's audience actually lives.",
        links: [{ text: "checking where an influencer's audience actually lives", href: "/blog/influencer-audience-location" }],
      },
      { type: "heading", text: "How the shortlist changes by event type", id: "event-types" },
      {
        type: "table",
        headers: ["Event type", "Who to prioritise", "What matters most", "Watch for"],
        rows: [
          ["Product launch event", "Category creators who can explain the product, plus a few with wider reach for the announcement", "Content style and relevance: they must film and explain the product, not just the venue", "Embargoes; confirm exactly when they may post"],
          ["Brand experience or pop-up", "Local lifestyle and city creators whose followers can visit", "Audience location, and availability across the whole run rather than opening night only", "Coverage that stops after the first evening"],
          ["Industry event, trade show or conference", "Practitioners, B2B and subject-matter creators", "Credibility with the trade audience; ability to summarise talks and demos", "Lifestyle creators with no professional following"],
        ],
      },
      {
        type: "paragraph",
        text: "For a launch, the event is one moment in a longer plan, and choosing creators for the launch as a whole is covered in finding influencers for a product launch. For industry events, the best creators are often experts first and creators second, and may be more active on LinkedIn or YouTube than on Instagram, so expect to search beyond Instagram by hand.",
        links: [{ text: "finding influencers for a product launch", href: "/blog/influencers-for-product-launch" }],
      },
      { type: "heading", text: "Select for pre-event, live and post-event content", id: "content-requirements" },
      {
        type: "paragraph",
        text: "Every event creates three content jobs. Write down which you need from which creators, and treat them as selection criteria rather than something to sort out in the brief later:",
      },
      {
        type: "table",
        headers: ["Phase", "Content you need", "Creator skill to select for", "How to spot it on their profile"],
        rows: [
          ["Pre-event", "Teasers, invitations, countdowns, 'see you there' posts", "Builds anticipation; audience responds to plans", "Past posts announcing trips or events, with comments asking for details"],
          ["Live", "Stories and quick clips during the event", "Fast, unpolished, comfortable filming in crowds", "Story highlights from past events; frequent Stories"],
          ["Post-event", "Recaps, product explainers, longer reviews", "Editing and explaining; follows through after the night", "Recap Reels or videos posted days after earlier events"],
        ],
      },
      {
        type: "paragraph",
        text: "Few creators are strong at all three. A sensible list mixes roles: a couple of creators who are excellent live, a few who make strong recaps, and one or two category experts who explain the product properly afterwards. Format strengths are compared in more depth in choosing creators for Reels, Stories and YouTube.",
        links: [{ text: "choosing creators for Reels, Stories and YouTube", href: "/blog/influencers-for-reels-stories-youtube" }],
      },
      { type: "heading", text: "How to source influencers for brand events, step by step", id: "sourcing-steps" },
      {
        type: "list",
        items: [
          "As soon as the date and venue are fixed, write a short event creator brief: event type, city, date, how many creators the room can take, the content needed in each phase, and the budget for fees and travel.",
          "Build a longlist by city and niche. Start with creators based in, or regularly posting from, the event city, then add any you're prepared to bring in from elsewhere.",
          "Check the five criteria and review past event content. Drop anyone you'd be uncomfortable seeing at your brand's event.",
          "Decide who is invited and who is paid. Invitations carry no obligation to post; if you need specific content, book it with a fee and a written agreement.",
          "Invite in waves with a clear RSVP date, and keep a backup list for late declines and no-shows.",
          "A few days before, confirm logistics in writing: arrival time, plus-ones, travel or parking, filming rules, anything they'll take home, the embargo and disclosure wording.",
          "Afterwards, follow up within the agreed posting window and record who delivered what for next time.",
        ],
      },
      {
        type: "paragraph",
        text: "Outreach wording and timing are covered in how to contact influencers, and writing the creator-facing document in creating an influencer campaign brief.",
        links: [
          { text: "how to contact influencers", href: "/blog/how-to-contact-influencers" },
          { text: "creating an influencer campaign brief", href: "/blog/influencer-campaign-brief" },
        ],
      },
      {
        type: "discovery-cta",
        headline: "Build Your Event Guest List by City",
        body: "Kudozz Discovery lets you search Instagram creators in India by city, niche, language and engagement, open their recent averages and save invitees and backups into a named list for the event. Invitations, logistics and agreements stay with your team.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Event creator sourcing checklist", id: "sourcing-checklist" },
      {
        type: "template",
        label: "Event creator sourcing checklist",
        text: "Event: type, city, venue, date, number of creator places\nContent needed: pre-event / live / post-event, and from how many creators each\n\nFor each creator:\n[ ] Recent content fits the event or category\n[ ] Based in or regularly in the event city, or travel agreed\n[ ] Audience location and age checked from an Insights screenshot\n[ ] Past event coverage reviewed (live, recap or both)\n[ ] Available on the date and through the posting window\n[ ] No recent work for a direct competitor, or the conflict cleared\n[ ] Invited or paid decided; agreement signed if paid\n[ ] Plus-one, travel and stay confirmed in writing\n[ ] Embargo, filming rules and disclosure wording shared\n[ ] Backup named for every key slot",
      },
      { type: "heading", text: "Invited guests or paid appearances?", id: "invite-or-pay" },
      {
        type: "paragraph",
        text: "An invitation is hospitality, not a contract. Invited creators may post, may not, and may post something you didn't expect. That's fine for a brand experience where the goal is genuine reactions. When you need guaranteed content, such as a live Story at a set time, a launch explainer or a recap by a fixed date, pay for it and put the deliverables in an agreement.",
      },
      {
        type: "paragraph",
        text: "Either way, disclosure applies if they post. ASCI's influencer guidelines count benefits such as free products, gifts and hosted trips or stays as a material connection, so a creator posting about an event where they were your guest should label it clearly, just as a paid creator would. Share the wording in advance rather than correcting posts after they go live.",
      },
      {
        type: "paragraph",
        text: "Launch events often involve press as well. Coordinating creators and journalists around the same announcement is covered in influencer marketing and PR.",
        links: [{ text: "influencer marketing and PR", href: "/blog/influencer-marketing-and-pr" }],
      },
      { type: "heading", text: "Where event creator lists go wrong", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Inviting by follower count without checking whether the event is relevant to the creator's audience.",
          "Assuming a creator can attend because they're 'in Mumbai', when they're based two hours away or travelling that week.",
          "Choosing only creators who post polished Reels, then getting no live coverage.",
          "Expecting guaranteed posts from unpaid guests.",
          "No backup list, so no-shows leave gaps on the night.",
          "Inviting creators who recently promoted a direct competitor.",
          "Forgetting the post-event window, when the most useful content is often made.",
        ],
      },
      { type: "heading", text: "Start with the content, finish with the names", id: "conclusion" },
      {
        type: "paragraph",
        text: "A strong event creator list is built backwards: from the content you need in each phase, to the skills that produce it, to creators who can be in the room on the day. Check creator location and audience location separately, mix live and recap strengths, pay for anything you need guaranteed and keep a backup for every key slot. If you'd like support around the whole launch, Kudozz's product launch campaigns sequence seeding, launch-day coverage and follow-up content around your date.",
        links: [{ text: "product launch campaigns", href: "/services/product-launches" }],
      },
    ],
    faqs: [
      {
        question: "How do I find influencers for a brand event?",
        answer:
          "Start from the content you need before, during and after the event, then search for creators in the event city who fit your category and have covered events well before. Check that they can attend, that their audience suits the event and that they're free for the posting window, and keep a backup list.",
      },
      {
        question: "Should we pay influencers to attend a launch event?",
        answer:
          "Pay when you need specific, guaranteed content, such as a live Story at a set time or a recap by a fixed date, and put it in an agreement. Unpaid invitations are fine for genuine reactions but carry no obligation to post.",
      },
      {
        question: "Do influencers need to disclose that they attended an event as guests?",
        answer:
          "If they post about it, yes. ASCI's guidelines treat benefits such as free products, gifts and hosted trips or stays as a material connection, so the post should carry a clear label. Share the wording with creators before the event.",
      },
      {
        question: "How far in advance should we invite influencers to an event?",
        answer:
          "As early as you can once the date and venue are fixed, and earlier still around festive and wedding seasons. Set a clear RSVP date and invite in waves so you can fill gaps from your backup list.",
      },
      {
        question: "Is this the same as planning an experiential influencer campaign?",
        answer:
          "No. This guide is about choosing who to invite. Planning the campaign around the event, from teasers through live coverage to recaps and amplification, is covered in the experiential influencer marketing guide.",
      },
    ],
  },

  // #95 store-opening-influencer-campaign (UPGRADE, orig 2026-11-05)
  {
    slug: "store-opening-influencer-campaign",
    category: "Campaign Strategy",
    title: "How to Find Local Content Creators for Store Openings and Retail Activations",
    seoTitle: "Local Creators for Store Openings and Activations | Kudozz",
    excerpt:
      "A new store needs people nearby to notice it, find it and walk in. How to find local creators whose audiences actually live in your catchment, run the opening as a sequence and keep the same network for later retail activations.",
    metaDescription:
      "Find local creators for a store opening or retail activation: audience locality over creator location, catchment mapping, a sourcing workflow and metrics.",
    author: AUTHOR,
    publishedAt: "2026-11-05",
    updatedAt: "2026-11-27",
    lastReviewed: "November 2026",
    readingTime: "8 min read",
    tags: ["Store Opening", "Local Influencers", "Retail Activation", "Footfall"],
    related: ["how-to-find-local-influencers", "retail-influencer-marketing-india", "measure-influencer-in-store-sales", "influencer-marketing-tier-2-tier-3-cities"],
    hero: {
      src: "/blog/discovery/store-opening-influencer-campaign.svg",
      alt: "A store at the centre of three catchment rings for neighbourhood, city and region, with creators marked by where their audience lives rather than where they are based",
    },
    discoveryCta: {
      headline: "Start a Creator List for Every New Outlet",
      body: "Explore Kudozz Discovery to search Instagram creators in India by city, state, niche and language, and save a separate list for each store you open. Audience-location checks, outreach and footfall measurement stay with your team.",
    },
    body: [
      {
        type: "paragraph",
        text: "Someone forty kilometres away who sees a lovely opening Reel is unlikely to visit your new store. Someone three kilometres away who watches a creator they follow walk through it on opening weekend might. That difference should shape every decision about local creators for a store opening, starting with who you invite.",
      },
      {
        type: "paragraph",
        text: "This guide is for local businesses, retail chains, restaurants and cafés, and D2C brands opening their first physical outlets. It covers how to find creators whose audiences live near the store, how to choose between neighbourhood, city and regional creators, a step-by-step sourcing workflow, and how to run and measure the opening and the retail activations that follow.",
      },
      { type: "heading", text: "What 'local' means for your kind of business", id: "who-its-for" },
      {
        type: "table",
        headers: ["Business", "Where customers come from", "Creators who usually fit"],
        rows: [
          ["Neighbourhood café, salon, clinic or gym", "A few kilometres; people who live or work nearby", "Locality pages, residential-community creators, food and lifestyle creators who live in the area"],
          ["Restaurant or destination café", "Across the city, for the right occasion", "City food creators, 'things to do' pages, regional-language food creators"],
          ["Retail chain opening a new branch", "That branch's catchment, which differs by city", "A separate local list per branch, plus category creators in that city"],
          ["D2C brand opening its first outlets", "Existing online customers in the city, plus walk-ins", "Category creators already covering the brand's niche, followed by people in that city"],
        ],
      },
      {
        type: "paragraph",
        text: "Restaurants and cafés have their own considerations around tastings, menus and reviews; finding food creators for restaurant marketing covers those in depth.",
        links: [{ text: "finding food creators for restaurant marketing", href: "/blog/find-food-creators-restaurant-marketing" }],
      },
      { type: "heading", text: "Audience locality matters more than creator location", id: "audience-locality" },
      {
        type: "paragraph",
        text: "A creator who lives in Indore isn't automatically an Indore creator in the sense that matters to you. Their audience might be spread across India, or concentrated in Mumbai where they grew up. Equally, a creator who moved to Bengaluru may still have most of their followers in Kochi. For a store opening, what counts is where the people watching live.",
      },
      {
        type: "paragraph",
        text: "This catches brands out when they search by city. Location filters on discovery tools, including the city and state filters in Kudozz Discovery, describe where the creator is based, not where their audience is. Use them to build the longlist, then verify the audience separately:",
      },
      {
        type: "list",
        items: [
          "Ask for a recent Instagram Insights screenshot showing the top cities (and, if useful, age ranges) of their audience.",
          "Read comments on recent posts for local cues: neighbourhood names, 'going there this weekend', replies in the regional language.",
          "Look at past local collaborations: have other cafés or stores in the city worked with them, and did followers talk about visiting?",
        ],
      },
      {
        type: "paragraph",
        text: "What audience location data can and can't tell you is covered in the guide to influencer audience location.",
        links: [{ text: "the guide to influencer audience location", href: "/blog/influencer-audience-location" }],
      },
      { type: "heading", text: "Neighbourhood, city or regional: define the catchment first", id: "catchment" },
      {
        type: "paragraph",
        text: "Your catchment is the area most of the store's customers will come from. If you already have stores, look at where their customers live (delivery addresses, loyalty sign-ups, billing PIN codes) to estimate a realistic radius. Measure travel time rather than distance; ten kilometres across a congested city is a long way.",
      },
      {
        type: "table",
        headers: ["Catchment", "Typical business", "Creator types", "What to check"],
        rows: [
          ["Neighbourhood", "Café, salon, pharmacy, gym, kids' activity centre", "Locality pages, residential-community creators, local food and family creators", "Followers in the locality, not just the city"],
          ["City", "Destination restaurant, large-format store, flagship", "City food and lifestyle pages, category creators based in the city", "Share of audience in the city, from Insights"],
          ["Regional", "A chain opening across a state, or a store in a smaller city that draws from nearby towns", "Regional-language creators and state-level pages", "Language fit and audience spread across the relevant towns"],
        ],
      },
      {
        type: "paragraph",
        text: "In Tier 2 and smaller cities there may only be a handful of relevant creators, and the best local voices are often small. Influencer marketing in tier 2 and tier 3 cities covers how to work with them, and finding regional content creators in India helps when the catchment speaks Marathi, Tamil, Bengali or another language first.",
        links: [
          { text: "Influencer marketing in tier 2 and tier 3 cities", href: "/blog/influencer-marketing-tier-2-tier-3-cities" },
          { text: "finding regional content creators in India", href: "/blog/find-regional-content-creators-india" },
        ],
      },
      { type: "heading", text: "How to find local creators for a store opening, step by step", id: "sourcing-workflow" },
      {
        type: "list",
        items: [
          "Map the catchment: localities, PIN codes and landmarks such as malls, colleges, office parks and residential societies.",
          "List the creator types you need: city pages for awareness, neighbourhood creators for the catchment, category creators to show the range, and regional-language creators where the catchment calls for it.",
          "Build a longlist from several sources: city and niche searches on Instagram, location tags at nearby malls and cafés, local hashtags, creators who already tag your other stores, and customers who post about you.",
          "Check audience locality for every serious candidate with an Insights screenshot, backed up by their comments.",
          "Check local credibility. Do locals reply as if they know the creator? Have they covered local openings before, and did those posts feel genuine?",
          "Shortlist by slot, with backups. Opening-weekend slots can't move, so each one needs a named backup.",
          "Approach early with the date, the ask and the offer. Good local creators are often juggling several openings in the same month.",
        ],
      },
      {
        type: "paragraph",
        text: "The wider process of finding creators in your city is covered in how to find local influencers in India. For chains opening in several cities at once, multi-city shortlists explains how to keep one structure with a separate list per city.",
        links: [
          { text: "how to find local influencers in India", href: "/blog/how-to-find-local-influencers" },
          { text: "multi-city shortlists", href: "/blog/influencer-shortlist-multi-city-campaign" },
        ],
      },
      {
        type: "discovery-cta",
        headline: "Find Creators Near Your New Store",
        body: "Kudozz Discovery lets you filter Instagram creators in India by city, state, niche and language, compare engagement and average views, and save a list for each store. City filters show where a creator is based, so audience-location checks and outreach stay with your team.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Run the opening as a sequence, not a single day", id: "sequence" },
      {
        type: "table",
        headers: ["Stage", "Timing (typical)", "Creator activity", "What to watch"],
        rows: [
          ["Teaser", "1–2 weeks before", "'Something is opening on this street' posts, behind-the-scenes set-up", "Saves, shares, comments asking when"],
          ["Preview", "1–3 days before, or opening morning", "A small creator preview with a guided walkthrough", "Stories reach in the city; directions requests"],
          ["Opening weekend", "Days 1–3", "Live Stories, first-day finds, the opening offer", "Footfall, opening sales, code redemptions"],
          ["First weeks", "Weeks 1–4", "Walkthroughs, product finds, local guides", "Footfall against forecast, reviews, repeat visits"],
          ["After", "Month 2 onwards", "Best clips reused on the store's listing and pages; strong creators rebooked", "Ongoing local awareness and reviews"],
        ],
      },
      {
        type: "paragraph",
        text: "If the opening includes a launch party or preview evening, treat it as one stage in this sequence rather than the whole campaign. Choosing who to invite is covered in finding influencers for brand events.",
        links: [{ text: "finding influencers for brand events", href: "/blog/influencers-for-brand-events" }],
      },
      { type: "heading", text: "Get the store ready to be filmed and found", id: "store-readiness" },
      {
        type: "list",
        items: [
          "Google Business Profile claimed, verified and complete with hours, phone number and photos before any creator posts. Verification and new photos can take time to appear, so start well ahead of opening.",
          "Filming permission: malls often have rules on shoots, lighting and tripods, so book a slot if needed.",
          "Staff briefed on who's visiting, what can be filmed and how offers or codes work.",
          "Featured products in stock in this store, in quantity.",
          "Wayfinding: if the store is hard to find inside a mall or market, ask creators to show the route.",
          "Consent from any customers or staff who appear on camera.",
        ],
      },
      {
        type: "template",
        label: "Store opening creator brief: essentials",
        text: "Store: [name], [full address and landmark]\nOpening date and hours: [date, hours]\nWhy it's worth visiting: [one or two specifics]\nMust show: the entrance and how to find it; [2–3 products or areas]\nOffer (if any): [code or phrase, validity, terms]\nLocation tag: the store's Google and Instagram location\nDisclosure: paid partnership label plus a clear 'Ad' or 'Collaboration' at the start of the caption\nFilming rules: [mall or store restrictions, customers on camera]\nPosting window: [dates]",
      },
      { type: "heading", text: "Beyond opening day: retail activations", id: "retail-activations" },
      {
        type: "paragraph",
        text: "The creators who made the opening work are the start of a local network. Rebook the strongest for the moments that bring people back:",
      },
      {
        type: "list",
        items: [
          "New collection drops, menu changes or product arrivals.",
          "Festive and wedding-season shopping, and local festivals such as Durga Puja, Onam or Ganesh Chaturthi where they matter to the catchment.",
          "In-store events: workshops, tastings, trunk shows, styling sessions.",
          "Pop-ups and shop-in-shops in new localities, sourced the same way as the opening.",
        ],
      },
      {
        type: "paragraph",
        text: "For chains, write the playbook once (sequence, brief, staff briefing, measurement) and build a fresh local list for each city. A Mumbai creator's audience won't travel to a new store in Lucknow, so reuse the playbook, not the creators. More on store-based campaigns across the year is in influencer marketing for retail brands.",
        links: [{ text: "influencer marketing for retail brands", href: "/blog/retail-influencer-marketing-india" }],
      },
      { type: "heading", text: "Measure footfall, not just views", id: "measurement" },
      {
        type: "table",
        headers: ["Metric", "Source"],
        rows: [
          ["Footfall in the first weeks against forecast", "Footfall counter or billing count"],
          ["Directions requests and calls", "The store's Google Business Profile performance"],
          ["Code or offer redemptions by creator", "Billing system or staff log"],
          ["Local reach and audience location", "Creators' Insights screenshots"],
          ["Reviews and ratings in the first month", "Google listing and other review sites"],
        ],
      },
      {
        type: "paragraph",
        text: "Across several openings, compare stores that used creators with those that didn't, or with similar stores' first months. Measuring influencer impact on in-store sales explains how to make that comparison fair.",
        links: [{ text: "Measuring influencer impact on in-store sales", href: "/blog/measure-influencer-in-store-sales" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Treating a creator's home city as proof that their audience is local.",
          "Choosing by follower count instead of where followers live.",
          "Posting before the Google listing is live, so interested viewers can't find the store.",
          "Inviting creators before the store is ready to be filmed.",
          "Spending everything on opening day and nothing on the weeks after.",
          "Featuring products that aren't stocked in that store.",
          "Reusing one set of national creators for every city.",
        ],
      },
      { type: "heading", text: "The short version for your next opening", id: "conclusion" },
      {
        type: "paragraph",
        text: "Define the catchment, find creators whose audiences live inside it, confirm that with Insights rather than assuming it from where the creator is based, and run a short sequence that carries on past opening weekend. Keep the best local creators for later activations, and for every new city reuse the playbook with a fresh list. If you'd rather have a team source and manage creators across several cities and languages, Kudozz's regional influencer marketing service can help.",
        links: [{ text: "regional influencer marketing service", href: "/services/regional-influencer-marketing" }],
      },
    ],
    faqs: [
      {
        question: "How do I find local creators for a store opening?",
        answer:
          "Map your catchment, search for creators in your city by niche and language, and add creators found through nearby location tags and local hashtags. Ask each serious candidate for an Insights screenshot of their audience's top cities, then shortlist by slot with backups and approach early.",
      },
      {
        question: "Does a creator who lives in my city have a local audience?",
        answer:
          "Not necessarily. Many creators have audiences spread across India or concentrated where they grew up. Check the top cities in their Instagram Insights and look for local cues in comments before you book.",
      },
      {
        question: "When should influencers post about a new store opening?",
        answer:
          "A typical sequence is a teaser one to two weeks before, a preview visit just before or on opening day, and walkthroughs and offers over the first few weeks. Make sure the store's maps listing is live before any posts go out.",
      },
      {
        question: "Should we use big influencers or local creators for a store launch?",
        answer:
          "Local creators whose audiences live near the store usually matter more. A national creator can add buzz, but most of their audience can't visit, so check audience location before booking anyone.",
      },
      {
        question: "Do we need permission to film influencers inside a mall store?",
        answer:
          "Often, yes. Many malls have rules on shoots, equipment and filming in common areas. Check with mall management in advance and book a slot if required.",
      },
    ],
  },

  // #97 expert-creator-marketing (UPGRADE, orig 2026-09-30)
  {
    slug: "expert-creator-marketing",
    category: "Influencer Marketing",
    title: "How to Identify Subject-Matter Experts for Influencer Collaborations",
    seoTitle: "How to Identify Subject Matter Expert Influencers | Kudozz",
    excerpt:
      "A creator who talks confidently about a subject isn't necessarily an expert in it. How to tell genuine subject-matter experts from lifestyle content, verify credentials, and check India's rules for health, finance and other regulated categories.",
    metaDescription:
      "How to identify subject matter expert influencers: tell real knowledge from lifestyle content, verify credentials, and check ASCI, SEBI and NMC rules.",
    author: AUTHOR,
    publishedAt: "2026-09-30",
    updatedAt: "2026-11-27",
    lastReviewed: "November 2026",
    readingTime: "8 min read",
    tags: ["Expert Influencers", "Subject Matter Experts", "Regulated Categories", "Influencer Vetting"],
    related: ["influencer-marketing-healthcare-brands-india", "regulated-categories-influencer-marketing-india", "how-to-vet-influencers", "b2b-creator-economy"],
    hero: {
      src: "/blog/discovery/expert-creator-marketing.svg",
      alt: "A creator passing through four checks for experience, credentials, communication and audience, with health and finance advice branching to a qualification check and legal review",
    },
    discoveryCta: {
      headline: "Start Your Expert Creator Longlist",
      body: "Explore Kudozz Discovery to find Instagram creators in India in niches such as Education, Finance & Business and Health & Fitness, compare their engagement and save a longlist. Credential checks, legal review and outreach remain your team's job.",
    },
    body: [
      {
        type: "paragraph",
        text: "A creator in a white coat explaining skin barriers. A trader with a chart behind him. A fitness page speaking confidently about injury rehab. All three look like experts, and on a quick scroll audiences treat them as experts. Whether they actually are is the question a brand has to answer before signing anyone, especially in categories where bad advice can hurt someone's health or savings.",
      },
      {
        type: "paragraph",
        text: "Subject matter expert influencers are creators whose authority comes from real knowledge: qualifications, professional experience or years of serious practice. This guide explains how to tell them apart from lifestyle creators who cover a topic, what to check in technology, finance, fitness, beauty and other categories, and the India rules that apply when the subject is regulated.",
      },
      { type: "heading", text: "Genuine expertise or expert-flavoured content?", id: "knowledge-vs-lifestyle" },
      {
        type: "paragraph",
        text: "Lifestyle creators who talk about a subject are valuable. They show how a product fits into a real life. They're just not the right people to explain mechanisms, give advice or make technical claims. The signals differ:",
      },
      {
        type: "table",
        headers: ["Signal", "Subject-matter expert", "Lifestyle creator covering the topic"],
        rows: [
          ["What they post", "Explanations, comparisons, corrections, 'it depends' answers", "Routines, hauls, favourites, results"],
          ["Source of authority", "A qualification, professional role or years of practice they can describe", "Personal experience and taste"],
          ["Handling uncertainty", "Say when evidence is weak or a product isn't for everyone", "Rarely; the content is about what they love"],
          ["Comments", "Questions asking for advice; other professionals joining in", "Compliments, 'link?', friends tagged"],
          ["Sponsored content", "Fewer brands, close to their field, often with caveats", "A broader range of brands"],
        ],
      },
      {
        type: "paragraph",
        text: "Neither is better. The point is to use each for what it can honestly do. Many campaigns need both: an expert to explain why a product works, and lifestyle creators to show it in everyday use.",
      },
      { type: "heading", text: "Five things to assess in a potential expert", id: "five-criteria" },
      {
        type: "list",
        items: [
          "Experience. What have they actually done? Years in practice, roles, projects, patients or clients, published work. Ask them to describe it; real experts can be specific.",
          "Educational content. Do their posts teach? Look for accuracy, sources where relevant, and explanations a non-expert can follow without being misled.",
          "Credibility. Can their qualifications or registrations be checked? Do other professionals in the field engage with them or cite them?",
          "Communication. Expertise doesn't help if nobody can follow it. The best expert creators make complex things simple without making them wrong.",
          "Audience expectations. People who follow someone for advice expect independence. That shapes what the expert can promote and how, and it's why heavy-handed scripts damage both sides.",
        ],
      },
      { type: "heading", text: "What expertise looks like in different categories", id: "examples-by-category" },
      {
        type: "table",
        headers: ["Category", "Signals of genuine expertise", "What to verify", "Watch-outs"],
        rows: [
          ["Technology and gadgets", "Explains specifications and trade-offs, compares products over time", "Professional background if claimed, such as engineering or development", "Unboxing pages presented as reviews"],
          ["Personal finance and investing", "Explains concepts, risks and costs rather than tips", "SEBI registration for securities advice; relevant qualifications for insurance, tax or credit", "Stock tips, return promises, courses with guarantees"],
          ["Fitness and physiotherapy", "Explains form, progression and when not to do something", "Fitness certifications; physiotherapy or medical qualifications for injury or condition advice", "Rehab advice from general fitness creators"],
          ["Nutrition", "Explains why, references evidence, avoids miracle claims", "Dietitian, nutritionist or medical qualification for diet advice", "Weight-loss promises, supplement-heavy feeds"],
          ["Beauty and skincare", "Ingredient knowledge, skin-type nuance, realistic results", "Dermatologist or other medical qualification for treatment advice", "Before-and-after claims, 'cures'"],
          ["B2B and professional services", "Practitioner stories, frameworks, informed industry commentary", "Employer, role and track record", "Generic motivational content passed off as expertise"],
          ["Automotive", "Mechanical knowledge, long-term ownership reviews, running-cost detail", "Trade background if claimed", "Pages that only cover launch-day hype"],
        ],
      },
      {
        type: "paragraph",
        text: "Category-specific search is covered in finding fitness and wellness influencers and finding tech influencers for gadgets and electronics. For B2B software, where practitioners are often more persuasive than credentialed experts, see how SaaS companies find the right creators, and for industry creators more broadly, the B2B creator economy.",
        links: [
          { text: "finding fitness and wellness influencers", href: "/blog/find-fitness-wellness-influencers" },
          { text: "finding tech influencers for gadgets and electronics", href: "/blog/find-tech-influencers-gadgets-electronics" },
          { text: "how SaaS companies find the right creators", href: "/blog/saas-influencer-marketing-india" },
          { text: "the B2B creator economy", href: "/blog/b2b-creator-economy" },
        ],
      },
      { type: "heading", text: "How to identify subject matter expert influencers, step by step", id: "identify-steps" },
      {
        type: "list",
        items: [
          "List the topics and claims the content will cover. 'Explain how this sunscreen filter works' needs different expertise from 'show your morning routine'.",
          "For each claim, decide whether a qualified expert is required. In health, nutrition and finance it often is (see the rules below).",
          "Search where experts actually post. On Instagram, start with niches such as Health & Fitness, Finance & Business, Technology & Gadgets or Education, then filter by language and city. Check YouTube, LinkedIn and podcasts by hand; many experts are more active there.",
          "Read twenty or thirty recent posts. Look for accuracy, caveats and corrections, not just confidence.",
          "Verify credentials independently, through the relevant register or professional body, the employer or institution they name, and any published work.",
          "Review past sponsored content: which brands, how it was disclosed, and whether claims stayed within their field.",
          "Hold a screening conversation. Ask how they'd approach the topic and what they wouldn't say. Good experts will tell you.",
        ],
      },
      {
        type: "paragraph",
        text: "The general checks behind this are in how to vet influencers before a collaboration. Experts also make strong testers before a launch, as covered in finding creators for product testing.",
        links: [
          { text: "how to vet influencers before a collaboration", href: "/blog/how-to-vet-influencers" },
          { text: "finding creators for product testing", href: "/blog/creators-for-product-testing" },
        ],
      },
      {
        type: "discovery-cta",
        headline: "Search Expert Creators by Niche and Language",
        body: "Kudozz Discovery lets you search Instagram creators in India across niches such as Finance & Business, Health & Fitness and Technology & Gadgets, filter by language and engagement, and save candidates into a named list. Credential checks, legal review and outreach stay with your team.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Regulated categories: India rules to check before briefing", id: "regulated-rules" },
      {
        type: "paragraph",
        text: "In some categories, using the wrong person isn't just a credibility problem. These are the main rules to know at the time of review. They change, and they apply case by case, so confirm the current position with a legal adviser before any campaign.",
      },
      {
        type: "table",
        headers: ["Area", "What to know", "What it means for brands"],
        rows: [
          ["Health and nutrition (ASCI)", "ASCI's influencer guidelines expect creators giving health or nutrition advice to hold relevant qualifications and disclose them prominently; sharing personal experience doesn't require them", "Match advice and technical claims to qualified experts, and show their credentials"],
          ["Banking, finance and insurance (ASCI)", "Creators giving financial advice are expected to hold relevant qualifications and state them upfront; for securities and investment content, ASCI expects SEBI registration to be shown", "Check qualifications at the shortlist stage, not at approval"],
          ["Securities market (SEBI)", "SEBI restricts regulated entities and their agents from associating with unregistered persons who give securities advice or make return claims", "Brokers, fund houses, advisers and their agents must check registration first; keep unregistered creators to general education"],
          ["Doctors (NMC)", "The NMC's 2023 professional conduct regulations were held in abeyance, so the 2002 Indian Medical Council ethics regulations apply; these restrict doctors from endorsing products and soliciting patients", "Keep doctor collaborations educational and take legal advice before any product-linked work"],
          ["Lawyers (Bar Council of India)", "Rule 36 of the Bar Council of India Rules prohibits advocates from advertising or soliciting work", "Advocates can share general legal information but generally can't promote their services or endorse products as advertising"],
          ["Chartered accountants (ICAI)", "ICAI's Code of Ethics limits how members advertise; recent revisions eased some rules for CA firms while keeping others, such as limits on testimonials", "Check the current ICAI position with the CA before any promotional arrangement"],
        ],
      },
      {
        type: "paragraph",
        text: "Healthcare brands will find more detail in ASCI's qualification rule for health advice, and finance brands in the fintech guide's section on finfluencers. The full category map, including food supplements, insurance and real estate, is in influencer marketing in regulated categories. This is general information, not legal advice.",
        links: [
          { text: "ASCI's qualification rule for health advice", href: "/blog/influencer-marketing-healthcare-brands-india#asci-qualifications" },
          { text: "the fintech guide's section on finfluencers", href: "/blog/influencer-marketing-fintech-brands-india#sebi-finfluencer-note" },
          { text: "influencer marketing in regulated categories", href: "/blog/regulated-categories-influencer-marketing-india" },
        ],
      },
      {
        type: "paragraph",
        text: "Two habits help. Take a dated screenshot of any registration check on the day you do it and keep it with the contract. And add a clause requiring the expert to follow ASCI and any professional or regulatory rules, with a right to end the agreement if they don't.",
      },
      { type: "heading", text: "Brief experts without scripting them", id: "briefing" },
      {
        type: "template",
        label: "Expert creator brief (outline)",
        text: "The problem our customers face: [ ]\nWhat we'd like you to explore: [a topic, not a script]\nEvidence available: [studies, data, product documentation you may review]\nClaims we can substantiate: [ ]   Claims we cannot make: [ ]\nYour editorial independence: you may disagree, note limitations and decline to make claims\nDisclosure: [label and wording, plus your qualification where required]\nRules for your profession: [to be confirmed by you]\nFormat and timeline: [ ]\nReview: factual accuracy check by our team; final wording yours",
      },
      {
        type: "paragraph",
        text: "Formats that tend to suit experts include sponsored education, live Q&As, co-created guides and honest reviews where the category allows them. Expect experts to mention limitations; it's what makes them credible. Allow extra review time, because experts have day jobs and check their own wording carefully. Any material connection, whether a fee, free product, advisory role or employment, needs a clear disclosure label alongside any qualification the rules require.",
      },
      { type: "heading", text: "Mistakes brands make with expert creators", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Treating confidence, a lab coat or a large following as expertise.",
          "Checking credentials after the script is written.",
          "Asking an expert to make claims beyond their field or your evidence.",
          "Booking unregistered finance creators for investment content.",
          "Scripting experts so tightly they sound like an advert.",
          "Hiding the relationship, which destroys the credibility you're paying for.",
          "Judging expert content only on reach rather than comment quality and qualified enquiries.",
        ],
      },
      { type: "heading", text: "Credentials get them on the list; accuracy keeps them there", id: "conclusion" },
      {
        type: "paragraph",
        text: "Identifying a genuine subject-matter expert means looking past presentation to experience, teaching quality, verifiable credentials, clear communication and an audience that trusts their judgement. In health, nutrition and finance, check the qualification and registration rules before shortlisting, and have campaigns reviewed by a legal adviser. For B2B experts who mostly post on LinkedIn, Kudozz's LinkedIn influencer marketing service can help find and manage them.",
        links: [{ text: "LinkedIn influencer marketing service", href: "/services/linkedin-influencer-marketing" }],
      },
    ],
    faqs: [
      {
        question: "What is a subject matter expert influencer?",
        answer:
          "A creator whose authority comes from real knowledge of a field, such as a qualification, a professional role or years of serious practice, rather than reach or personal taste. Doctors, dietitians, engineers, chartered accountants and experienced practitioners are common examples.",
      },
      {
        question: "How do I verify an expert creator's credentials?",
        answer:
          "Check the relevant register or professional body where one exists, confirm the employers or institutions they name, and look at any published work or talks. Keep a dated screenshot of any registration check with the contract.",
      },
      {
        question: "Do health and finance influencers need qualifications in India?",
        answer:
          "ASCI's influencer guidelines expect creators giving health, nutrition or financial advice to hold relevant qualifications and disclose them, and for securities content, SEBI registration. Creators without qualifications can still share personal experience, but not advice or technical claims. Take legal advice for specific campaigns.",
      },
      {
        question: "Can doctors endorse products on social media in India?",
        answer:
          "Doctors are bound by medical ethics regulations that restrict product endorsement and soliciting patients; the NMC's 2023 regulations were held in abeyance, so the 2002 regulations apply. Keep collaborations educational and take legal advice before any product-linked work.",
      },
      {
        question: "Can unregistered finfluencers promote investment products?",
        answer:
          "SEBI restricts regulated entities such as brokers and fund houses, and their agents, from associating with unregistered persons who give securities advice or make return claims. Brands in this space should check registration before any partnership and keep unregistered creators to general financial education.",
      },
    ],
  },
];
