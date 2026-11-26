import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";
import { INTEL_PUBLISHED, INTEL_REVIEWED } from "@/content/brand-guides/intelligence-data";

/**
 * Creator intelligence cluster, scoring layer (1175, 1177, 1178, 1180, 1181). Each score answers a different
 * question: quality (is this a good creator?), fit (ai-influencer-matching), ranking (who first, for this
 * campaign?) and the post-campaign scorecard (how did they do with us?). Shortlisting (1176) and audience
 * quality (1179) expanded their existing owners instead.
 */
export const intelligenceScoringPosts: BlogPost[] = [
  {
    slug: "creator-performance-scorecard",
    category: "Campaign Strategy",
    title: "Creator Performance Scorecards: How Brands Can Evaluate Influencers Consistently",
    seoTitle: "Creator Performance Scorecards: A Framework for Brands",
    excerpt:
      "A post-campaign scorecard for every creator you work with: eight categories, scoring guides for each, how to weight them by objective, a template and how to use scores for rebooking without false precision.",
    metaDescription:
      "A creator performance scorecard for brands: eight categories, a 1–5 scoring guide, weights by objective, a template and how to use it for rebooking decisions.",
    author: AUTHOR,
    publishedAt: INTEL_PUBLISHED,
    lastReviewed: INTEL_REVIEWED,
    readingTime: "8 min read",
    tags: ["creator performance scorecard", "creator performance review", "influencer scorecard", "evaluate influencer performance", "influencer evaluation template"],
    related: ["influencer-performance-data", "creator-quality-score", "influencer-marketing-crm"],
    hero: {
      src: "/blog/brand-guides/creator-performance-scorecard.svg",
      alt: "Creator scorecard with eight categories from audience fit to commercial performance, rated after each campaign",
    },
    updatedAt: "2026-10-08",
    body: [
      {
        type: "paragraph",
        text: "After a campaign, most brands judge creators by memory. The one whose Reel went viral is remembered as great; the one who submitted late is remembered as difficult; the one who quietly delivered strong orders is forgotten. A scorecard replaces memory with a short, consistent record, so the next rebooking decision is based on what actually happened.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator performance scorecard rates each creator after every campaign on the same categories: audience fit, content quality, engagement quality, brand safety and compliance, campaign reliability, commercial performance, communication and consistency. Score each 1–5 with written evidence, weight the categories by the campaign objective, and record a rebook decision with a reason. Use scorecards to compare creators and spot patterns over several campaigns, not to treat one number as a verdict.",
      },
      {
        type: "paragraph",
        text: "This is an after-the-campaign evaluation. For judging creators before you work with them, see creator quality score; for choosing between candidates for a specific campaign, see influencer ranking.",
        links: [
          { text: "creator quality score", href: "/blog/creator-quality-score" },
          { text: "influencer ranking", href: "/blog/influencer-ranking" },
        ],
      },
      { type: "heading", text: "The eight scorecard categories", id: "categories" },
      {
        type: "table",
        headers: ["Category", "Question", "Evidence"],
        rows: [
          ["Audience fit", "Did the audience that saw the content match our target?", "Post insights: cities, age, language; comment language"],
          ["Content quality", "Was the content well made, on-brief and in the creator's own voice?", "The post itself; brief checklist"],
          ["Engagement quality", "Did people respond meaningfully?", "Saves, shares, comment substance, questions about the product"],
          ["Brand safety and compliance", "Was disclosure correct and were claims approved?", "Live post check; approval record"],
          ["Campaign reliability", "Were drafts and posts on time, with reasonable revisions?", "Tracker dates; revision count"],
          ["Commercial performance", "Did they deliver against the campaign's primary metric for the cost?", "Cost metric; campaign index"],
          ["Communication", "Were they responsive, clear and easy to work with?", "Team notes"],
          ["Consistency", "Does this match their previous work with us?", "Previous scorecards"],
        ],
      },
      { type: "heading", text: "A scoring guide", id: "scoring-guide" },
      {
        type: "paragraph",
        text: "Scores are only consistent if everyone means the same thing by a 2 or a 4. Write anchors for each category. An example for three of them:",
      },
      {
        type: "table",
        headers: ["Score", "Campaign reliability", "Engagement quality", "Commercial performance"],
        rows: [
          ["5", "Everything early or on time; one revision or none", "Many specific product questions, high saves/shares for the format", "Index ≥ 1.3 against campaign median"],
          ["4", "On time; two revisions", "Clear product interest in comments", "Index 1.1–1.3"],
          ["3", "Minor delays, flagged in advance", "Mixed: some product discussion, much generic", "Index 0.9–1.1"],
          ["2", "Missed a deadline without warning", "Mostly generic; product ignored", "Index 0.7–0.9"],
          ["1", "Missed go-live or major rework needed", "Negative or suspicious engagement", "Index < 0.7"],
        ],
      },
      {
        type: "paragraph",
        text: "The index thresholds are examples to adapt, not standards. The campaign index (creator result divided by campaign median) is explained in influencer performance data.",
        links: [{ text: "influencer performance data", href: "/blog/influencer-performance-data" }],
      },
      { type: "heading", text: "Weight by objective", id: "weights" },
      {
        type: "table",
        headers: ["Category", "Awareness", "Consideration", "Sales", "UGC for ads"],
        rows: [
          ["Audience fit", "25%", "20%", "20%", "5%"],
          ["Content quality", "15%", "20%", "10%", "35%"],
          ["Engagement quality", "10%", "25%", "10%", "5%"],
          ["Brand safety and compliance", "10%", "10%", "10%", "10%"],
          ["Campaign reliability", "10%", "10%", "10%", "20%"],
          ["Commercial performance", "20%", "5%", "30%", "10%"],
          ["Communication", "5%", "5%", "5%", "10%"],
          ["Consistency", "5%", "5%", "5%", "5%"],
        ],
      },
      {
        type: "paragraph",
        text: "These weights are illustrations. Agree yours before the campaign, not after, so the scorecard isn't tuned to justify a decision already made. Brand safety can also be treated as a gate rather than a weight: a serious compliance failure should override any total.",
      },
      { type: "heading", text: "Scorecard template", id: "template" },
      {
        type: "template",
        label: "Creator performance scorecard (one per creator per campaign)",
        text: "Creator: [ ]   Campaign: [ ]   Objective: [ ]   Role: [reach / trust / convert / regional / content]\nDeliverables: [ ]   Total cost: ₹[ ]   Capture day: [7 / 30]\n\nCategory              Score (1–5)   Weight   Evidence (one line)\nAudience fit           [ ]          [ ]%     [ ]\nContent quality        [ ]          [ ]%     [ ]\nEngagement quality     [ ]          [ ]%     [ ]\nBrand safety/compliance [ ]         gate     [pass/fail + note]\nReliability            [ ]          [ ]%     [ ]\nCommercial performance [ ]          [ ]%     [index: ]\nCommunication          [ ]          [ ]%     [ ]\nConsistency            [ ]          [ ]%     [vs previous: ]\n\nWEIGHTED SCORE: [ ] / 5\nREBOOK: Yes · Yes, different role · Maybe · No\nREASON: [one line]\nNEXT TIME: [what we'd brief differently]",
      },
      { type: "heading", text: "Using scorecards well", id: "using" },
      {
        type: "list",
        items: [
          "Fill it within a week of the 30-day capture, while the team remembers.",
          "Have two people score independently for important creators and discuss differences.",
          "Judge creators in their role: a reach creator shouldn't lose points for low CPA.",
          "Look at trends over several campaigns, not one score.",
          "Separate creator problems from brand problems: a weak brief or broken landing page isn't the creator's fault.",
          "Share a summary with creators you rebook. Specific feedback improves the next campaign.",
        ],
      },
      {
        type: "paragraph",
        text: "Store scorecards on the creator's record so history builds up; influencer marketing CRM covers the structure.",
        links: [{ text: "influencer marketing CRM", href: "/blog/influencer-marketing-crm" }],
      },
      { type: "heading", text: "Avoiding false precision", id: "false-precision" },
      {
        type: "paragraph",
        text: "A weighted score of 3.84 looks precise. It isn't. Several inputs are judgments, the weights are choices and a single campaign is a small sample. Read scores in bands (strong, solid, weak) and always with the evidence column. A creator with a 3.2 and a clear 'great converter, slow on drafts' note is often a better rebook than a 3.6 with no notes.",
      },
      { type: "heading", text: "Variants for different creator roles", id: "variants" },
      {
        type: "table",
        headers: ["Role", "Add or emphasise", "De-emphasise"],
        rows: [
          ["UGC creator", "Usable assets delivered, editing quality, revision speed, ad performance of assets", "Audience fit, organic engagement"],
          ["Ambassador", "Consistency across months, brand knowledge, audience response over time", "Single-post results"],
          ["Expert creator (doctor, CA, trainer)", "Accuracy, claims compliance, credibility in comments", "Raw reach"],
          ["Regional creator", "Market concentration of audience, local language quality, local response", "National reach comparisons"],
        ],
      },
      { type: "heading", text: "Running a scorecard review", id: "review-meeting" },
      {
        type: "template",
        label: "30-minute post-campaign review",
        text: "1. Campaign manager presents creators ranked by index on the primary metric (5 min)\n2. For each creator: scores, evidence, disagreements (15 min)\n3. Decide rebook status and role for each (5 min)\n4. Note brief and process changes for next campaign (5 min)\nOUTPUT: updated scorecards on creator records; 'next time' list",
      },
      { type: "heading", text: "Share feedback with creators", id: "feedback" },
      {
        type: "paragraph",
        text: "Creators rarely hear how their work performed. A short, specific note builds trust and improves the next collaboration:",
      },
      {
        type: "template",
        label: "Creator feedback note",
        text: "Hi [name], thanks again for [deliverable]. A few things from our side:\n• What worked: [specific: e.g. 'showing the product in the first seconds drove most clicks']\n• Numbers we can share: [e.g. 'your Reel had one of the lowest costs per order in the campaign']\n• One thing for next time: [specific, brief-related]\nWe'd love to work together again on [next campaign/month].",
      },
      { type: "heading", text: "From scorecards to a roster", id: "roster" },
      {
        type: "paragraph",
        text: "After several campaigns, group creators into simple roster tiers: A (rebook first, consider ambassador roles), B (reliable for specific roles or markets), C (one-off; rebook only with a reason). Review the roster quarterly. It speeds up shortlisting, gives you a starting point for negotiation and shows where you lack strong creators. Influencer marketing CRM covers where the roster should live, and how to build a long-term partnership programme covers moving A-tier creators into ongoing deals.",
        links: [
          { text: "Influencer marketing CRM", href: "/blog/influencer-marketing-crm" },
          { text: "how to build a long-term partnership programme", href: "/blog/influencer-partnerships" },
        ],
      },
      { type: "heading", text: "Creator performance review: value beyond the headline numbers", id: "beyond-metrics" },
      {
        type: "paragraph",
        text: "A creator can be valuable even when one campaign's views or likes are unremarkable. Before marking a creator down, check whether they delivered on the dimensions that predict long-term value:",
      },
      {
        type: "table",
        headers: ["Dimension", "What strong looks like even with modest reach"],
        rows: [
          ["Audience fit", "Audience concentrated in your markets, language and customer profile"],
          ["Content quality", "Clear, credible content you could reuse in ads or on your site"],
          ["Trust", "Comments asking for advice; audience acting on recommendations"],
          ["Brand alignment", "Natural fit with your product and values"],
          ["Execution", "On time, on brief, easy to work with"],
          ["Commercial outcomes", "Code use, qualified clicks or orders, where measurable"],
          ["Consistency", "Similar results across campaigns"],
        ],
      },
      {
        type: "paragraph",
        text: "Equally, a viral post from a creator whose audience isn't your customer may not deserve a rebook. Read the scorecard as a whole and in the creator's role. When a whole campaign underperforms, check influencer campaign underperformance before scoring creators down for problems they didn't cause.",
        links: [
          { text: "influencer campaign underperformance", href: "/blog/influencer-campaign-underperformance" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Scoring only the creators who did badly.",
          "Changing categories every campaign, so scores can't be compared.",
          "Letting one viral post override weak reliability.",
          "No evidence column, so scores can't be challenged or learned from.",
          "Using the scorecard to judge creators on objectives they weren't briefed for.",
        ],
      },
      {
        type: "paragraph",
        text: "Scorecards tell you who to rebook; repeat influencer collaborations explains how to turn that decision into ongoing work.",
        links: [
          { text: "repeat influencer collaborations", href: "/blog/repeat-influencer-collaborations" },
        ],
      },
      {
        type: "paragraph",
        text: "Add the creator's own perspective to the scorecard; creator feedback loop covers what to ask and how to use it.",
        links: [
          { text: "creator feedback loop", href: "/blog/creator-feedback-loop" },
        ],
      },
      {
        type: "paragraph",
        text: "Missed requirements belong in the reliability score; creator non-compliance covers how to handle and record them fairly.",
        links: [
          { text: "creator non-compliance", href: "/blog/creator-non-compliance" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A creator performance scorecard turns each campaign into a reusable record: eight categories, anchored scores, objective-based weights, evidence and a rebook decision. Over a few campaigns it shows who performs, in which role and under what conditions, which is exactly what you need before the next shortlist. To prepare the shortlist itself, see influencer shortlisting.",
        links: [{ text: "influencer shortlisting", href: "/blog/influencer-shortlist" }],
      },
    ],
    faqs: [
      {
        question: "What is an influencer scorecard?",
        answer:
          "A consistent post-campaign evaluation of a creator across categories such as audience fit, content quality, engagement quality, compliance, reliability, commercial performance, communication and consistency, with evidence and a rebook decision.",
      },
      {
        question: "How should brands weight an influencer scorecard?",
        answer:
          "By campaign objective. Awareness campaigns weight audience fit and reach efficiency; sales campaigns weight commercial performance; UGC campaigns weight content quality and reliability. Agree weights before the campaign.",
      },
      {
        question: "Is a higher scorecard total always better?",
        answer:
          "No. Totals hide trade-offs and depend on judgment-based inputs. Read scores in bands with the evidence, and consider the role the creator played.",
      },
    ],
  },
  {
    slug: "influencer-sentiment-analysis",
    category: "Campaign Strategy",
    title: "Influencer Sentiment Analysis: How Brands Can Understand Audience Reactions to Creators",
    seoTitle: "Influencer Sentiment Analysis: Reading Audience Reactions",
    excerpt:
      "What sentiment analysis can tell brands about creators and sponsored content, what to measure (creator, sponsored-post, brand and aspect sentiment), manual vs automated methods, the real limitations and a workflow you can run.",
    metaDescription:
      "How brands use influencer sentiment analysis: what to measure, manual vs automated methods, limits with sarcasm and Hinglish, and a practical workflow.",
    author: AUTHOR,
    publishedAt: INTEL_PUBLISHED,
    lastReviewed: INTEL_REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer sentiment analysis", "sentiment analysis influencer marketing", "audience reaction analysis", "sponsored content sentiment", "comment sentiment analysis"],
    related: ["influencer-engagement-quality", "influencer-social-listening", "influencer-data-analytics"],
    hero: {
      src: "/blog/brand-guides/influencer-sentiment-analysis.svg",
      alt: "Audience comments sorted into positive, neutral, negative and specific themes such as price, results and trust",
    },
    body: [
      {
        type: "paragraph",
        text: "A campaign report says '82% positive sentiment'. That number usually means an automated tool classified most comments as positive, including emoji-only praise, sarcastic jokes it missed and comments about the creator's haircut rather than your product. Sentiment analysis can tell brands a lot about how audiences react to creators and sponsored content. A single percentage rarely does.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Influencer sentiment analysis classifies how audiences feel in comments and conversations about a creator, a sponsored post or a brand. It's most useful when it goes beyond positive/negative to themes: what people praise, question or object to (price, results, trust, delivery). Use automated tools to sort large volumes and manual coding to check accuracy, especially for sarcasm, emojis and code-mixed Hinglish or regional-language comments, which automated models often misread. Compare sentiment on sponsored posts with the creator's organic posts and track it before, during and after campaigns.",
      },
      { type: "heading", text: "What to measure", id: "what-to-measure" },
      {
        type: "table",
        headers: ["Type", "Question", "Use"],
        rows: [
          ["Creator sentiment", "How does the audience feel about this creator generally?", "Vetting: is the creator trusted, or is there backlash?"],
          ["Sponsored-post sentiment", "How did the audience react to the paid post?", "Did the integration land or feel forced?"],
          ["Sponsored vs organic gap", "Is the audience more negative or indifferent on paid posts?", "Ad fatigue; credibility with sponsorships"],
          ["Brand sentiment", "What do people say about our brand in creator content and comments?", "Campaign impact; issues to address"],
          ["Aspect sentiment", "What specifically do they like or dislike (price, results, taste, packaging)?", "Brief changes, product feedback, FAQs"],
        ],
      },
      {
        type: "paragraph",
        text: "Aspect sentiment is the most actionable. '30% of comments question the price' is a decision; '65% positive' isn't.",
      },
      { type: "heading", text: "Manual, automated or hybrid?", id: "methods" },
      {
        type: "table",
        headers: ["Method", "Strengths", "Weaknesses", "Use when"],
        rows: [
          ["Manual coding", "Understands sarcasm, context, mixed languages", "Slow; reviewer bias; small samples", "Vetting a few creators; small campaigns; calibrating tools"],
          ["Automated classification", "Fast; handles large volumes; consistent", "Misreads sarcasm, emojis, code-mixed text, domain terms", "Large campaigns; ongoing monitoring"],
          ["AI-assisted themes", "Groups comments into topics and summarises", "Can over-generalise; needs checking", "Finding questions and objections across creators"],
          ["Hybrid", "Automated sort, human sample check", "Needs a defined process", "Most brand campaigns"],
        ],
      },
      { type: "heading", text: "The limitations, plainly", id: "limitations" },
      {
        type: "list",
        items: [
          "Sarcasm and irony: 'Wow, another sponsored post, so genuine' reads as positive to many models.",
          "Code-mixed language: Hinglish, Tanglish and other mixes written in Roman script are hard for models trained mostly on English. Research on Hindi-English text consistently identifies inconsistent transliteration and limited training data as problems.",
          "Emojis: 😂 can mean delight or mockery; 🔥 can be praise or a joke.",
          "Domain meaning: 'This serum is killing it' is positive; 'this is killing my skin' is not.",
          "Target confusion: a positive comment about the creator's outfit isn't positive sentiment about your product.",
          "Sample bias: comments come from the most vocal viewers, not all viewers.",
          "Deleted and hidden comments: creators and brands may filter comments, skewing what's left.",
        ],
      },
      {
        type: "paragraph",
        text: "None of this makes sentiment analysis useless. It means no automated sentiment score should be reported without a human-checked sample and a note on method.",
      },
      { type: "heading", text: "A workflow you can run", id: "workflow" },
      {
        type: "template",
        label: "Sentiment workflow for a campaign",
        text: "1. DEFINE: What you need to know (creator trust? product objections? brand perception?) and the aspects to track (price, results, taste, delivery, trust).\n2. BASELINE: Before the campaign, sample comments on each creator's recent organic posts.\n3. COLLECT: Comments on sponsored posts at 7 days (and brand mentions in the period).\n4. CLASSIFY: Automated or AI-assisted sort into sentiment and aspects.\n5. CHECK: Manually code a random sample (e.g. 50 per creator). Record where the tool disagreed.\n6. COMPARE: Sponsored vs organic; creator vs creator; before vs after.\n7. ACT: Questions → FAQ and brief updates. Objections → product or messaging review. Backlash → escalate.",
      },
      { type: "heading", text: "Reading sentiment for creator decisions", id: "creator-decisions" },
      {
        type: "list",
        items: [
          "A creator whose audience reacts negatively to most sponsored posts may have a credibility problem with ads, even if organic sentiment is warm.",
          "Mixed sentiment with lots of questions often signals genuine consideration, which is good for sales objectives.",
          "Negative sentiment about the product, not the creator, is product or messaging feedback; don't blame the creator.",
          "Sudden negative shifts around a creator (controversy) are a brand-safety issue; see influencer brand safety.",
        ],
      },
      {
        type: "paragraph",
        text: "Brand safety responses are covered in influencer brand safety, and the engagement side of comments in influencer engagement quality.",
        links: [
          { text: "influencer brand safety", href: "/blog/influencer-marketing-brand-safety" },
          { text: "influencer engagement quality", href: "/blog/influencer-engagement-quality" },
        ],
      },
      { type: "heading", text: "Reporting sentiment honestly", id: "reporting" },
      {
        type: "list",
        items: [
          "Show themes with example comments, not just percentages.",
          "State the method and sample size.",
          "Report the human-check agreement rate if you used automation.",
          "Separate sentiment about the creator, the content and the product.",
          "Compare with a baseline rather than presenting an absolute number.",
        ],
      },
      { type: "heading", text: "Aspect lists by category", id: "aspects" },
      {
        type: "table",
        headers: ["Category", "Aspects worth tracking"],
        rows: [
          ["Skincare and personal care", "Results, skin type suitability, texture, fragrance, price, side effects, authenticity of claims"],
          ["Packaged food", "Taste, health, price, pack size, availability, comparison with homemade"],
          ["Fintech", "Trust, safety, fees, ease of use, support, comparison with banks"],
          ["Consumer electronics", "Performance, battery, build, price, after-sales service"],
          ["Fashion", "Fit, fabric, price, sizing, delivery, returns"],
        ],
      },
      {
        type: "paragraph",
        text: "Keep the list short (five to eight aspects) and fixed across campaigns so results can be compared.",
      },
      { type: "heading", text: "How big a sample?", id: "sample-size" },
      {
        type: "paragraph",
        text: "For manual checks, coding 50 comments per creator usually shows the main themes; more is better for large campaigns or when aspects are close. For automated classification, still hand-check a random sample and record how often you agreed with the tool. If agreement is low on regional or code-mixed comments, report those creators' sentiment from manual coding only.",
      },
      { type: "heading", text: "Regional-language comments", id: "regional" },
      {
        type: "list",
        items: [
          "Code comments by meaning; Romanised Hindi, Tamil or Bengali is common and tools often misread it.",
          "Have someone who reads the language do the manual sample.",
          "Watch for local idioms and slang that flip meaning.",
          "Report regional sentiment separately rather than blending it into a national figure.",
        ],
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical: a fintech app's campaign shows 'mostly positive' sentiment in an automated report. A manual sample finds many 'positive' comments are jokes about the creator, while the most common product comment is 'is this safe?'. The brand adds a safety explainer to the next brief and a short FAQ on its landing page. Sentiment didn't measure success; it showed what was blocking it. Social listening for creator discovery explains how similar conversations help find creators audiences already trust on topics like safety.",
        links: [
          { text: "Social listening for creator discovery", href: "/blog/social-listening-creator-discovery" },
        ],
      },
      {
        type: "paragraph",
        text: "Comment sentiment is also an early signal when testing a new brand position with creators; see rebranding with influencers.",
        links: [
          { text: "rebranding with influencers", href: "/blog/influencer-marketing-rebrand" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Reporting one positive-sentiment percentage as campaign success.",
          "Trusting automated sentiment on Hinglish or regional comments without checking.",
          "Mixing creator sentiment with product sentiment.",
          "No baseline, so normal audience tone looks like a campaign effect.",
          "Ignoring neutral questions, which are often the most useful comments.",
        ],
      },
      {
        type: "paragraph",
        text: "Negative or confused reactions often explain weak results; influencer campaign underperformance covers turning them into a diagnosis.",
        links: [
          { text: "influencer campaign underperformance", href: "/blog/influencer-campaign-underperformance" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Sentiment analysis helps brands understand how audiences react to creators and sponsored content, especially when it tracks specific aspects rather than a single score. Combine automated sorting with human checks, compare against baselines, separate creator, content and product reactions, and turn questions and objections into better briefs. For listening beyond your own campaign posts, see social listening for influencer marketing.",
        links: [{ text: "social listening for influencer marketing", href: "/blog/influencer-social-listening" }],
      },
    ],
    faqs: [
      {
        question: "What is influencer sentiment analysis?",
        answer:
          "Classifying how audiences feel in comments and conversations about a creator, a sponsored post or a brand, ideally by specific aspects such as price, results or trust rather than only positive or negative.",
      },
      {
        question: "How accurate is automated sentiment analysis?",
        answer:
          "It varies and is weakest on sarcasm, emojis, domain-specific phrases and code-mixed or regional-language comments. Always check a manual sample and report the method alongside results.",
      },
      {
        question: "How can sentiment analysis help choose influencers?",
        answer:
          "By showing whether audiences trust a creator, how they react to sponsored posts compared with organic ones and whether there's recent backlash, alongside other vetting checks.",
      },
    ],
  },
];
