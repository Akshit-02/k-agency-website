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
    slug: "influencer-ranking",
    category: "Influencer Marketing",
    title: "Influencer Ranking: How Brands Can Prioritize Creators for Campaigns",
    seoTitle: "Influencer Ranking: How to Prioritize Creators",
    excerpt:
      "A transparent ranking model that combines creator quality, campaign fit, expected value and risk into priority tiers, then balances the final mix across roles, markets and budget instead of picking the top N.",
    metaDescription:
      "How to rank influencers for a campaign: a transparent model combining quality, fit, value and risk, priority tiers, portfolio balancing and tie-breakers.",
    author: AUTHOR,
    publishedAt: INTEL_PUBLISHED,
    lastReviewed: INTEL_REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer ranking", "rank influencers", "prioritize influencers", "influencer prioritization", "creator ranking model"],
    related: ["influencer-shortlist", "creator-quality-score", "ai-influencer-matching"],
    hero: {
      src: "/blog/brand-guides/influencer-ranking.svg",
      alt: "Influencer ranking model combining quality, fit, value and risk into priority tiers, then balancing the final creator mix",
    },
    body: [
      {
        type: "paragraph",
        text: "Once you have a vetted shortlist of 25 creators and budget for 10, someone has to decide the order. In many teams that order is follower count, the founder's favourite or whoever replied first. Each produces a predictable problem: the budget goes to reach you didn't need, to a creator who fits one person's taste, or to whoever is quickest rather than best.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Rank creators with a transparent model that combines four things: creator quality (is this a strong creator?), campaign fit (are they right for this brief and audience?), expected value (what do we expect for the cost?) and risk (brand safety, reliability, conflicts). Group the results into priority tiers rather than a strict 1-to-25 list, then build the final selection as a portfolio that covers the roles, markets and formats the campaign needs. Document the reason for each tier so the ranking can be challenged and improved.",
      },
      { type: "heading", text: "Why follower count is a poor ranking", id: "why-not-followers" },
      {
        type: "list",
        items: [
          "It measures audience size, not whether the audience is yours.",
          "It says nothing about views; many accounts reach a fraction of their followers.",
          "It ignores cost. A bigger creator at a much higher fee may be worse value.",
          "It favours accounts with inflated or inactive followings.",
          "It pushes every brand towards the same handful of creators.",
        ],
      },
      { type: "heading", text: "The ranking model", id: "model" },
      {
        type: "table",
        headers: ["Component", "Question", "Inputs", "Who scores it"],
        rows: [
          ["Quality", "Is this a strong creator regardless of our brief?", "Creator quality score: content, audience quality, engagement quality, consistency, professionalism", "Team, with data"],
          ["Fit", "Are they right for this brief, audience and market?", "Audience match, topic fit, format fit, language", "Team, AI-assisted"],
          ["Expected value", "What do we expect for the cost?", "Median views, past results, quoted fee, expected cost metric", "Analyst"],
          ["Risk", "What could go wrong?", "Brand safety, reliability history, exclusivities, sponsored-post fatigue", "Team"],
        ],
      },
      {
        type: "template",
        label: "Priority score",
        text: "PRIORITY = (Quality × wQ) + (Fit × wF) + (Expected value × wV) − (Risk penalty)\n\nScore Quality, Fit and Value 1–5. Risk penalty: 0 (low), 0.5 (medium), 1.5 (high), or EXCLUDE (unacceptable).\nExample weights (adjust per objective): Quality 30% · Fit 40% · Value 30%",
      },
      {
        type: "paragraph",
        text: "Fit usually deserves the largest weight because a strong creator for the wrong audience is still the wrong booking. But weights must change with the objective: a UGC brief cares more about quality of production than audience fit, a regional launch cares more about market fit than anything else. Creator quality score and AI influencer matching explain how the quality and fit components are built.",
        links: [
          { text: "Creator quality score", href: "/blog/creator-quality-score" },
          { text: "AI influencer matching", href: "/blog/ai-influencer-matching" },
        ],
      },
      { type: "heading", text: "Estimating expected value without false precision", id: "expected-value" },
      {
        type: "paragraph",
        text: "Expected value isn't a forecast of exact results. It's a rough estimate of what the fee buys, based on evidence you have:",
      },
      {
        type: "list",
        items: [
          "Expected CPM: quoted fee ÷ median views over the last 10–15 comparable posts × 1,000.",
          "If you've worked with them: their campaign index from past scorecards.",
          "If you haven't: how their sponsored posts perform relative to their organic posts.",
          "Score in bands relative to your baseline (better, similar, worse), not as a predicted number.",
        ],
      },
      {
        type: "paragraph",
        text: "Your baselines come from influencer benchmarking.",
        links: [{ text: "influencer benchmarking", href: "/blog/influencer-benchmarking" }],
      },
      { type: "heading", text: "Use tiers, not a strict order", id: "tiers" },
      {
        type: "table",
        headers: ["Tier", "Meaning", "Action"],
        rows: [
          ["Tier 1: Priority", "Strong on fit and value, low risk", "Approach first"],
          ["Tier 2: Strong alternatives", "Good, with one weaker component", "Approach if Tier 1 declines or for coverage"],
          ["Tier 3: Reserve", "Acceptable; useful backups", "Hold for replacements"],
          ["Excluded", "Unacceptable risk or poor fit", "Record reason"],
        ],
      },
      {
        type: "paragraph",
        text: "The difference between the 4th and 6th creator in a scored list is usually within the noise of the scoring. Tiers acknowledge that and make replacements faster.",
      },
      { type: "heading", text: "Build the final selection as a portfolio", id: "portfolio" },
      {
        type: "paragraph",
        text: "Picking the top ten by score often produces ten similar creators: same city, same format, same style. Before confirming, check the selection against what the campaign needs:",
      },
      {
        type: "list",
        items: [
          "Roles: enough reach drivers, trust builders, converters or content producers for the objective.",
          "Markets and languages: every priority region covered.",
          "Formats and platforms: the mix the plan calls for.",
          "Audience overlap: not paying several creators to reach the same people (unless frequency is the goal).",
          "Budget spread: not most of the budget on one creator unless that's deliberate.",
          "Test slots: one or two creators from a segment you haven't tried, to learn something new.",
        ],
      },
      { type: "heading", text: "Tie-breakers", id: "tie-breakers" },
      {
        type: "list",
        items: [
          "Past reliability with your brand.",
          "Usage rights availability for ads.",
          "Fewer recent sponsored posts in your category.",
          "Stronger comment substance on recent sponsored work.",
          "Availability within your go-live window.",
        ],
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical: a snack brand ranks 22 creators for a Gujarat and Maharashtra launch. The top five by score are all Mumbai-based Hindi and English creators. Portfolio checks show no Gujarati creator in Tier 1 and only one Marathi creator. The team keeps three Mumbai creators for reach, promotes two Gujarati creators and one Marathi creator from Tier 2 for market coverage, and reserves one slot to test a Pune-based food creator with a smaller but highly local audience. The scores informed the decision; the plan made it.",
      },
      { type: "heading", text: "Weights by objective", id: "weights" },
      {
        type: "table",
        headers: ["Objective", "Quality", "Fit", "Value", "Typical risk tolerance"],
        rows: [
          ["Awareness at scale", "25%", "35%", "40%", "Medium"],
          ["Consideration / education", "35%", "45%", "20%", "Low"],
          ["Sales", "20%", "40%", "40%", "Medium"],
          ["Premium launch", "40%", "45%", "15%", "Very low"],
          ["UGC for ads", "50%", "15%", "35%", "Medium"],
        ],
      },
      {
        type: "paragraph",
        text: "These are illustrations, not standards. The useful habit is agreeing weights before scoring, and showing them on the ranking sheet.",
      },
      { type: "heading", text: "Presenting a ranking to stakeholders", id: "presenting" },
      {
        type: "list",
        items: [
          "Show tiers, not decimal scores.",
          "One line per creator: role, why they fit, main risk, expected cost metric.",
          "Show the portfolio view: roles, markets, formats and budget covered.",
          "Show the weights, so disagreements are about priorities rather than names.",
          "Include reserves, so a decline doesn't need another approval round.",
        ],
      },
      { type: "heading", text: "When to re-rank", id: "re-rank" },
      {
        type: "list",
        items: [
          "A Tier 1 creator declines or quotes far above expectation.",
          "New audience data changes a creator's fit.",
          "The brief changes: new market, new objective, new budget.",
          "A competitor books creators you'd prioritised.",
        ],
      },
      { type: "heading", text: "Repeat creators vs new creators", id: "repeat-vs-new" },
      {
        type: "paragraph",
        text: "Repeat creators bring evidence: scorecards, reliability, known audiences. New creators bring reach you haven't bought yet and the chance to find better partners. A ranking that always favours repeats stops learning; one that ignores history wastes it. Many brands reserve a fixed share of each campaign for new creators. Creator performance scorecard explains how repeat-creator evidence is recorded.",
        links: [
          { text: "Creator performance scorecard", href: "/blog/creator-performance-scorecard" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Ranking by followers or engagement rate alone.",
          "Treating small score differences as meaningful.",
          "Picking the top N without checking roles, markets and overlap.",
          "Hiding the weights, so stakeholders can't see why a creator ranked where they did.",
          "Not feeding results back into future rankings.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Rank influencers on quality, fit, expected value and risk with visible weights, group them into tiers and build the final selection as a portfolio. That keeps the decision explainable, makes replacements fast and stops budget from drifting towards the biggest or most familiar names. For the steps before ranking, see influencer shortlisting.",
        links: [{ text: "influencer shortlisting", href: "/blog/influencer-shortlist" }],
      },
    ],
    faqs: [
      {
        question: "How should brands rank influencers?",
        answer:
          "Combine creator quality, campaign fit, expected value for the cost and risk into a priority score with visible weights, group creators into tiers, and balance the final selection across roles, markets, formats and budget.",
      },
      {
        question: "Should influencers be ranked by follower count?",
        answer:
          "No. Follower count ignores audience fit, real reach, cost and authenticity. It's one input at most, usually inside the expected-value component.",
      },
      {
        question: "What's the difference between shortlisting and ranking influencers?",
        answer:
          "Shortlisting removes creators who don't meet the brief's requirements. Ranking orders the remaining creators by priority and helps build a balanced final selection.",
      },
    ],
  },
  {
    slug: "creator-quality-score",
    category: "Influencer Marketing",
    title: "Creator Quality Score: How Brands Can Evaluate Influencers Beyond Follower Count",
    seoTitle: "Creator Quality Score: Evaluate Influencers Beyond Followers",
    excerpt:
      "A brand-agnostic creator quality score built from six components (content craft, audience quality, engagement quality, consistency, credibility and professionalism), with signals, scoring anchors, worked examples and limits.",
    metaDescription:
      "A creator quality score framework: content craft, audience quality, engagement quality, consistency, credibility and professionalism, with anchors and examples.",
    author: AUTHOR,
    publishedAt: INTEL_PUBLISHED,
    lastReviewed: INTEL_REVIEWED,
    readingTime: "6 min read",
    tags: ["creator quality score", "influencer quality score", "evaluate influencers beyond followers", "influencer quality assessment", "creator evaluation"],
    related: ["influencer-audience-quality", "influencer-engagement-quality", "influencer-ranking"],
    hero: {
      src: "/blog/brand-guides/creator-quality-score.svg",
      alt: "Creator quality score built from content craft, audience quality, engagement quality, consistency, credibility and professionalism",
    },
    body: [
      {
        type: "paragraph",
        text: "Follower count is the first number anyone sees and the least useful one for judging a creator. It doesn't say whether the content is good, whether the audience is real, whether people listen to the creator's recommendations or whether the creator is reliable. A quality score asks those questions directly, before you think about any specific campaign.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator quality score evaluates how good a creator is independently of any brand or brief, across six components: content craft, audience quality, engagement quality, consistency, credibility and professionalism. Score each 1–5 against written anchors, using a mix of data and review, then combine them with weights suited to how you plan to use creators. The score helps decide who's worth considering at all; whether they fit a particular campaign is a separate fit assessment.",
      },
      { type: "heading", text: "Quality vs fit", id: "quality-vs-fit" },
      {
        type: "table",
        headers: ["", "Creator quality", "Campaign fit"],
        rows: [
          ["Question", "Is this a strong creator?", "Is this creator right for our brief?"],
          ["Depends on brand?", "No (mostly)", "Yes"],
          ["Changes how often", "Slowly; review quarterly", "Every campaign"],
          ["Used for", "Database curation, long-term partners", "Shortlists and ranking"],
        ],
      },
      {
        type: "paragraph",
        text: "A high-quality creator can be a poor fit (great finance educator, wrong audience for your snack brand). A creator with average quality scores can be the best fit for a narrow regional brief. You need both; fit is covered in AI influencer matching.",
        links: [{ text: "AI influencer matching", href: "/blog/ai-influencer-matching" }],
      },
      { type: "heading", text: "The six components", id: "components" },
      {
        type: "table",
        headers: ["Component", "What it measures", "Signals"],
        rows: [
          ["Content craft", "How well the creator makes content", "Hooks, clarity, editing, sound, pacing, originality, format mastery"],
          ["Audience quality", "Whether the audience is real, active and attentive", "Views relative to followers, growth pattern, authenticity checks, audience stability"],
          ["Engagement quality", "Whether people respond meaningfully", "Saves, shares, specific comments, questions, conversations"],
          ["Consistency", "Whether quality and output are stable", "Posting regularity, performance variance, niche focus over months"],
          ["Credibility", "Whether the audience trusts the creator's recommendations", "Expertise shown, honest reviews, disclosure habits, audience reaction to sponsored posts"],
          ["Professionalism", "Whether the creator is good to work with", "Media kit, response quality, past brand reliability, contract readiness"],
        ],
      },
      { type: "heading", text: "Scoring anchors", id: "anchors" },
      {
        type: "table",
        headers: ["Score", "Content craft", "Credibility", "Consistency"],
        rows: [
          ["5", "Distinctive style; strong hooks; recognisable even without the handle", "Audience asks for and acts on recommendations; honest negatives shown", "Steady output for 6+ months; narrow variance"],
          ["4", "Polished and clear; good hooks", "Sponsored posts get real questions", "Regular output; occasional dips"],
          ["3", "Competent; follows formats", "Mixed response to sponsored posts", "Some gaps or swings"],
          ["2", "Inconsistent quality", "Sponsored posts mostly ignored", "Irregular; niche drifting"],
          ["1", "Poor production or copied content", "Audience sceptical; disclosure lapses", "Long gaps or erratic performance"],
        ],
      },
      { type: "heading", text: "Combine with sensible weights", id: "weights" },
      {
        type: "paragraph",
        text: "How you weight components depends on how you use creators. A brand that mostly buys UGC for ads cares most about content craft and professionalism. A brand that relies on creator recommendations to sell considered purchases cares most about credibility and engagement quality. An illustrative general-purpose weighting: content craft 20%, audience quality 20%, engagement quality 20%, credibility 20%, consistency 10%, professionalism 10%. Treat audience authenticity as a gate: if fraud is likely, the creator is out regardless of score.",
      },
      { type: "heading", text: "How to gather the evidence", id: "evidence" },
      {
        type: "list",
        items: [
          "Watch 10–15 recent posts, including at least two sponsored ones.",
          "Calculate median views and quality engagement per view from those posts.",
          "Read 30–50 comments across several posts; note questions, purchase intent and generic patterns.",
          "Run an authenticity check and look at the growth history.",
          "Note how sponsored posts perform compared with organic posts.",
          "For professionalism, check past brand feedback if you have it, and how the creator handles the first conversation.",
        ],
      },
      {
        type: "paragraph",
        text: "Audience quality has its own scoring framework in influencer audience quality, and engagement quality in influencer engagement quality.",
        links: [
          { text: "influencer audience quality", href: "/blog/influencer-audience-quality" },
          { text: "influencer engagement quality", href: "/blog/influencer-engagement-quality" },
        ],
      },
      { type: "heading", text: "Worked examples (hypothetical)", id: "examples" },
      {
        type: "table",
        headers: ["", "Creator X: 900K followers, lifestyle", "Creator Y: 45K followers, Tamil skincare"],
        rows: [
          ["Content craft", "4: polished, trend-driven", "4: clear demos, honest"],
          ["Audience quality", "2: views around 3% of followers; spiky growth", "4: views often 40%+ of followers; steady growth"],
          ["Engagement quality", "2: emoji comments, few questions", "5: detailed questions about skin types"],
          ["Consistency", "3: frequent niche changes", "4: consistent for two years"],
          ["Credibility", "2: many unrelated sponsorships", "5: shows products that didn't work for her"],
          ["Professionalism", "4: managed, responsive", "3: no media kit, slower replies"],
          ["Illustrative total", "≈ 2.7", "≈ 4.3"],
        ],
      },
      {
        type: "paragraph",
        text: "Both creators are invented. The point is that the larger account scores lower on the things that make recommendations work. That doesn't make Creator X useless; for a reach-only objective, their views may still be good value. Quality is one input into ranking, not the decision.",
      },
      { type: "heading", text: "Limits of a quality score", id: "limits" },
      {
        type: "list",
        items: [
          "Several components are judgments; two reviewers can differ. Calibrate on a few creators together.",
          "Scores go stale. Review quarterly for creators you use, and before every booking.",
          "A score can't capture a creator's chemistry with a particular product.",
          "Small creators with little history are harder to score; treat their scores as provisional.",
          "A high score doesn't predict a specific campaign's result.",
        ],
      },
      { type: "heading", text: "Calibrate your reviewers", id: "calibration" },
      {
        type: "paragraph",
        text: "Quality scores depend on judgment, so different reviewers drift apart. A short calibration keeps them consistent:",
      },
      {
        type: "list",
        items: [
          "Pick five creators everyone knows. Each reviewer scores them independently.",
          "Compare scores component by component and discuss the biggest gaps.",
          "Rewrite anchors where people interpreted them differently.",
          "Repeat each quarter, or when new reviewers join.",
        ],
      },
      { type: "heading", text: "Scoring different kinds of creator", id: "creator-types" },
      {
        type: "table",
        headers: ["Creator type", "What quality looks like", "Watch for"],
        rows: [
          ["UGC creator", "Clean framing, strong hooks, clear product shots, fast turnaround", "Their own audience matters little; don't penalise small followings"],
          ["Expert creator", "Accurate, clear explanations; credentials verifiable", "Claims beyond their qualification"],
          ["Regional nano creator", "Strong local response; authentic voice; consistent posting", "Lower production polish isn't low quality"],
          ["Entertainer", "Craft and audience attention", "Credibility on product recommendations may be lower"],
          ["Reviewer", "Balanced reviews; shows negatives", "Many brands in one category may reduce persuasion"],
        ],
      },
      { type: "heading", text: "Keep scores fresh and stored", id: "freshness" },
      {
        type: "paragraph",
        text: "Record the date and reviewer with every score, and keep it on the creator's database record so it can be reused across briefs. Refresh before any booking and quarterly for active creators. Influencer database covers the record structure.",
        links: [
          { text: "Influencer database", href: "/blog/influencer-database" },
        ],
      },
      { type: "heading", text: "Hypothetical example: quality vs follower count", id: "example-2" },
      {
        type: "paragraph",
        text: "Hypothetical: a home-appliance brand compares three Kannada creators with 30,000, 150,000 and 600,000 followers. Quality scores come out at 4.2, 3.1 and 2.6, mainly because the smallest creator's demos are clear, her audience asks detailed questions and her sponsored posts perform like her organic ones. The brand still books the largest creator for launch-week reach, but gives the smallest one the explainer role and the code-led offer. Quality changed the roles, not just the list.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Mixing fit into quality, so scores change with every brief.",
          "Scoring from bios and follower counts without watching content.",
          "Treating a high engagement rate as high engagement quality.",
          "Not separating sponsored-post performance from organic.",
          "Never recalibrating anchors as platforms change.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A creator quality score evaluates what follower counts hide: craft, real audiences, meaningful engagement, consistency, credibility and professionalism. Keep it brand-agnostic, anchor every score, gather evidence from content and comments as well as metrics, and combine it with campaign fit and value when you rank creators. Influencer ranking shows how those pieces come together.",
        links: [{ text: "Influencer ranking", href: "/blog/influencer-ranking" }],
      },
    ],
    faqs: [
      {
        question: "What is a creator quality score?",
        answer:
          "A brand-agnostic evaluation of a creator across content craft, audience quality, engagement quality, consistency, credibility and professionalism, scored against written anchors.",
      },
      {
        question: "How do brands evaluate influencers beyond follower count?",
        answer:
          "By watching recent content, calculating median views and quality engagement per view, reading comments, checking authenticity and growth, comparing sponsored with organic performance and assessing credibility and professionalism.",
      },
      {
        question: "Is creator quality the same as creator fit?",
        answer:
          "No. Quality asks whether the creator is strong in general; fit asks whether they're right for a specific brief, audience and market. Both matter for selection.",
      },
    ],
  },
  {
    slug: "influencer-engagement-quality",
    category: "Influencer Marketing",
    title: "Influencer Engagement Quality: How Brands Can Separate Real Engagement From Vanity Metrics",
    seoTitle: "Influencer Engagement Quality vs Vanity Metrics",
    excerpt:
      "How to judge engagement quality rather than quantity: an engagement hierarchy, a comment audit method, relevance and consistency checks, suspicious patterns, an Engagement Quality framework and what it means for sponsored posts.",
    metaDescription:
      "How brands judge influencer engagement quality: saves, shares, meaningful comments, a comment audit, relevance, consistency and suspicious patterns to watch.",
    author: AUTHOR,
    publishedAt: INTEL_PUBLISHED,
    lastReviewed: INTEL_REVIEWED,
    readingTime: "6 min read",
    tags: ["influencer engagement quality", "real engagement vs vanity metrics", "meaningful engagement influencer", "comment quality influencer", "engagement quality analysis"],
    related: ["influencer-engagement-rate", "influencer-sentiment-analysis", "how-to-identify-fake-followers"],
    hero: {
      src: "/blog/brand-guides/influencer-engagement-quality.svg",
      alt: "Engagement hierarchy from likes and emoji comments to saves, shares, questions and purchase intent",
    },
    body: [
      {
        type: "paragraph",
        text: "Two Reels each get 5,000 interactions. The first has 4,800 likes and 200 comments, mostly fire emojis and 'nice'. The second has 3,000 likes, 900 saves, 600 shares and 500 comments, many asking where to buy, whether it works for oily skin, or tagging a friend with 'we need this'. The engagement rate is identical. The commercial value isn't.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Engagement quality measures whether people respond to a creator's content in ways that signal attention, trust and intent, rather than how many interactions there are. Weight saves, shares, specific comments and product questions above likes and generic comments; check that engagement comes from relevant audiences in the right language and region; look for consistency across posts; and watch for suspicious patterns such as repeated phrases, the same accounts on every post or likes far out of line with views. Assess it with a structured comment audit, not engagement rate alone.",
      },
      {
        type: "paragraph",
        text: "For engagement rate formulas, see influencer engagement rate. This guide is about what the engagement consists of.",
        links: [{ text: "influencer engagement rate", href: "/blog/influencer-engagement-rate" }],
      },
      { type: "heading", text: "The engagement hierarchy", id: "hierarchy" },
      {
        type: "table",
        headers: ["Level", "Signals", "What it suggests"],
        rows: [
          ["Low effort", "Likes, emoji-only comments, 'nice', 'wow'", "Seen, briefly approved"],
          ["Social", "Tagging friends, short reactions", "Content is shareable within a circle"],
          ["Utility", "Saves, 'saving this', recipe or routine requests", "Content is useful; likely revisited"],
          ["Advocacy", "Shares, reposts, 'sending this to my sister'", "People will spread it"],
          ["Intent", "'Where can I buy?', 'price?', 'does it work for…?', 'ordered'", "Consideration or purchase"],
          ["Trust", "Asking the creator for advice, referencing past recommendations", "Audience relies on the creator's judgment"],
        ],
      },
      {
        type: "paragraph",
        text: "The higher levels are harder to fake and closer to business outcomes. A sponsored post that generates intent and trust signals is doing its job even if the like count is modest.",
      },
      { type: "heading", text: "Run a comment audit", id: "comment-audit" },
      {
        type: "template",
        label: "Comment audit (per creator)",
        text: "SAMPLE: 50–100 comments across 5 recent posts (include 2 sponsored if available). Skip the creator's own replies.\n\nCODE EACH COMMENT AS:\nG  Generic (emoji, 'nice', 'wow')\nS  Social (tag, short reaction)\nQ  Question about the content or product\nI  Purchase intent ('where to buy', 'ordered', 'price')\nE  Experience ('I tried this', 'worked for me')\nN  Negative or critical\nX  Suspicious (repeated phrase, unrelated language, spam)\nO  Off-topic\n\nRECORD: share of each code · language of comments · whether commenters look like real, relevant accounts\nCOMPARE: sponsored vs organic posts",
      },
      {
        type: "paragraph",
        text: "A creator whose comments are 60% generic and 2% questions is in a different position from one at 25% generic and 20% questions, even at the same engagement rate. There's no universal threshold; compare creators within the same category, tier and language.",
      },
      { type: "heading", text: "Relevance: whose engagement is it?", id: "relevance" },
      {
        type: "list",
        items: [
          "Language: do comments come in the language your campaign targets?",
          "Region: do commenters mention cities and contexts that match your market?",
          "Audience type: are commenters potential customers, or mostly other creators and engagement-group regulars?",
          "Topic: do comments engage with the subject, or only with the creator's personality?",
        ],
      },
      {
        type: "paragraph",
        text: "Engagement from the wrong audience is real engagement with no value to you. That's why engagement quality and audience fit belong together; influencer audience quality covers the audience side.",
        links: [{ text: "influencer audience quality", href: "/blog/influencer-audience-quality" }],
      },
      { type: "heading", text: "Consistency", id: "consistency" },
      {
        type: "paragraph",
        text: "Look at engagement across 10–15 recent posts, not one. Natural engagement varies: some posts do better, some worse. Suspiciously uniform engagement (very similar like counts on every post regardless of content) and extreme dependence on one viral post are both worth investigating. For sponsored work, compare sponsored posts with the creator's organic median; a big drop means the audience tunes out ads.",
      },
      { type: "heading", text: "Suspicious patterns", id: "suspicious" },
      {
        type: "table",
        headers: ["Pattern", "Possible cause", "Innocent explanation to rule out"],
        rows: [
          ["Same accounts commenting on every post", "Engagement pods", "Genuine superfans (look at what they say)"],
          ["Repeated phrases across many comments", "Bought or automated comments", "Giveaway entry instructions"],
          ["Likes far above what views suggest", "Bought likes", "Measurement differences between formats"],
          ["Comments in unrelated languages", "Bought engagement from other regions", "Diaspora or international audience"],
          ["Engagement arrives in a burst then stops", "Automated or pod engagement", "Post shared by a large account"],
        ],
      },
      {
        type: "paragraph",
        text: "Automated tools can flag these patterns at scale; influencer fraud detection tools explains how to read their output. For the manual checks, see how to identify fake followers.",
        links: [
          { text: "influencer fraud detection tools", href: "/blog/influencer-fraud-detection-tools" },
          { text: "how to identify fake followers", href: "/blog/how-to-identify-fake-followers" },
        ],
      },
      { type: "heading", text: "An engagement quality framework", id: "framework" },
      {
        type: "table",
        headers: ["Dimension", "Measure", "Score 1–5 on"],
        rows: [
          ["Depth", "Saves + shares per view; share of Q, I, E comments", "Relative to category and tier peers"],
          ["Relevance", "Share of comments in target language and context", "Match to your market"],
          ["Consistency", "Variance across recent posts; sponsored vs organic", "Stability"],
          ["Authenticity", "Suspicious patterns", "Gate: fail excludes"],
          ["Sponsored response", "How audiences respond to paid posts", "Questions and intent on sponsored work"],
        ],
      },
      {
        type: "paragraph",
        text: "Weight these by objective. For awareness, depth and relevance matter less than reach; for consideration and sales, depth and sponsored response matter most. The score feeds the engagement component of a creator quality score.",
        links: [{ text: "creator quality score", href: "/blog/creator-quality-score" }],
      },
      { type: "heading", text: "Engagement quality in Indian campaigns", id: "india" },
      {
        type: "list",
        items: [
          "Comments often mix Hindi, English and regional languages in Roman script. Code them by meaning, not by language purity.",
          "Regional creators may get fewer comments but more specific, local ones; don't penalise them for lower volume.",
          "WhatsApp sharing doesn't show up publicly but appears in share counts in creator insights; ask for them.",
          "Festival and cricket periods change engagement patterns across categories; compare within similar periods.",
        ],
      },
      { type: "heading", text: "Hypothetical comment audit result", id: "audit-example" },
      {
        type: "table",
        headers: ["Code", "Creator A (macro, 2.8% ER)", "Creator B (micro, 2.6% ER)"],
        rows: [
          ["Generic", "64%", "28%"],
          ["Social (tags)", "18%", "17%"],
          ["Question", "4%", "22%"],
          ["Purchase intent", "1%", "11%"],
          ["Experience", "2%", "14%"],
          ["Negative", "3%", "5%"],
          ["Suspicious", "6%", "1%"],
          ["Off-topic", "2%", "2%"],
        ],
      },
      {
        type: "paragraph",
        text: "Invented figures from a 100-comment sample each. Engagement rates are almost identical; engagement quality isn't. Creator B's audience asks, tries and buys. Creator A's 6% suspicious share also warrants a closer authenticity look.",
      },
      { type: "heading", text: "Platform differences", id: "platforms" },
      {
        type: "table",
        headers: ["Platform", "Strongest quality signals", "Caveat"],
        rows: [
          ["Instagram Reels", "Saves, shares, specific comments", "Saves and shares are only visible in creator insights"],
          ["Instagram Stories", "Replies, link taps, sticker responses", "Disappear after 24 hours; collect insights promptly"],
          ["YouTube long-form", "Watch time, comment depth, returning viewers", "Comments arrive over weeks; check later"],
          ["YouTube Shorts", "Views vs subscribers, comment substance", "Short attention; fewer detailed comments"],
        ],
      },
      { type: "heading", text: "Use it after the campaign too", id: "post-campaign" },
      {
        type: "paragraph",
        text: "Engagement quality isn't only a vetting check. After posting, audit comments on each sponsored post and compare with the creator's organic baseline. A sponsored post that generated questions and intent did its job even with modest likes; one with plenty of likes and no product discussion probably didn't. Feed the result into the creator performance scorecard.",
        links: [
          { text: "creator performance scorecard", href: "/blog/creator-performance-scorecard" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Treating engagement rate as engagement quality.",
          "Counting comments without reading them.",
          "Ignoring saves and shares because they're not public; ask creators for them.",
          "Judging sponsored posts by organic engagement norms.",
          "Assuming high engagement means the audience will buy.",
        ],
      },
      {
        type: "paragraph",
        text: "Engagement quality is one input into judging which content worked; influencer content performance covers the full picture and what to do with winning posts.",
        links: [
          { text: "influencer content performance", href: "/blog/influencer-content-performance" },
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Engagement quality is about what people do and say, not how many interactions there are. Prioritise saves, shares, questions and purchase intent; audit comments; check relevance and consistency; rule out suspicious patterns; and look closely at how audiences respond to sponsored posts. To go further into what audiences feel about creators and brands, see influencer sentiment analysis.",
        links: [{ text: "influencer sentiment analysis", href: "/blog/influencer-sentiment-analysis" }],
      },
    ],
    faqs: [
      {
        question: "What is engagement quality in influencer marketing?",
        answer:
          "Whether audiences respond in ways that show attention, trust and intent (saves, shares, specific comments, product questions) from relevant people, rather than the raw number of likes and comments.",
      },
      {
        question: "How do brands separate real engagement from vanity metrics?",
        answer:
          "By auditing a sample of comments, weighting saves, shares and questions above likes, checking that engagement comes from relevant audiences, comparing sponsored with organic posts and looking for suspicious patterns.",
      },
      {
        question: "Are saves and shares more important than likes?",
        answer:
          "For most consideration and sales objectives, yes. They signal that content was useful or worth passing on, and they're harder to inflate. Ask creators for them, since they're not always public.",
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
