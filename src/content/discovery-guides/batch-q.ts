import type { BlogPost } from "@/content/blog";

const AUTHOR = { name: "Kudozz Strategy Team", role: "Agency Team" };

export const discoveryBatchQ: BlogPost[] = [
  // #81 creator-quality-score (UPGRADE, orig 2026-10-07)
  {
    slug: "creator-quality-score",
    category: "Influencer Marketing",
    title: "How to Build an Influencer Evaluation Scorecard for Your Brand",
    seoTitle: "Influencer Evaluation Scorecard: How to Build One | Kudozz",
    excerpt:
      "A practical influencer evaluation scorecard for brands: six criteria, written 1 to 5 anchors, weights by campaign objective, pass/fail gates and a copy-ready template for judging creators before you collaborate.",
    metaDescription:
      "Build an influencer evaluation scorecard: six criteria, 1 to 5 anchors, weights by campaign objective and pass/fail gates to judge creators before you sign.",
    author: AUTHOR,
    publishedAt: "2026-10-07",
    updatedAt: "2026-11-27",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: ["Influencer Evaluation Scorecard", "Creator Quality Score", "Influencer Scoring Framework", "Influencer Vetting"],
    related: ["influencer-ranking", "creator-performance-scorecard", "influencer-engagement-quality", "influencer-shortlist"],
    hero: {
      src: "/blog/discovery/creator-quality-score.svg",
      alt: "An influencer evaluation scorecard with pass/fail gates on top and six criteria whose weights shift across awareness, consideration, conversion and content-for-ads objectives",
    },
    discoveryCta: {
      headline: "Fill Your Scorecard With Comparable Creators",
      body: "Explore Kudozz Discovery to search Instagram creators in India by niche, follower range, location and engagement, open their profile metrics and save a list per brief. Your team applies the scorecard, requests Insights and handles outreach.",
    },
    body: [
      {
        type: "paragraph",
        text: "A Bengaluru coffee brand has 30 creators on a longlist for its cold-brew launch, and three people reviewing them. One favours the creator with the biggest following, another prefers whoever's Reels look best, and the third keeps asking whose audience actually drinks coffee. After two meetings nobody can explain why one creator ranks above another, and the list is no shorter.",
      },
      {
        type: "paragraph",
        text: "An influencer evaluation scorecard fixes that. It's a short, written set of criteria, scoring anchors and weights that every reviewer uses to judge creators before a collaboration is agreed. This guide shows how to build one for your brand: which criteria to include, how to write anchors so two people give the same score, how to weight criteria by campaign objective, and how to use the result without letting a number make the decision for you.",
      },
      { type: "heading", text: "Evaluation, ranking and performance: three different jobs", id: "where-it-fits" },
      {
        type: "paragraph",
        text: "Brands use the word scorecard for three tools that answer different questions at different moments. Mixing them up is a common reason scorecards end up ignored.",
      },
      {
        type: "table",
        headers: ["Tool", "When it's used", "Question it answers", "Main evidence"],
        rows: [
          ["Evaluation scorecard (this guide)", "Before contact or before booking", "Is this creator worth collaborating with for our brand?", "Public content, profile metrics, creator-provided insights"],
          ["Shortlist ranking", "After vetting, before final selection", "Which vetted creators do we book first, given budget and mix?", "Evaluation scores plus quotes, availability and portfolio balance"],
          ["Performance scorecard", "After a campaign", "How did this creator actually perform against the brief?", "Campaign results, deliverables, reliability"],
        ],
      },
      {
        type: "paragraph",
        text: "The evaluation scorecard feeds the other two. Its scores are one input when you compare a final shortlist side by side, and the baseline for a post-campaign creator performance scorecard. A creator who scored well before booking and poorly after tells you something about your criteria.",
        links: [
          { text: "compare a final shortlist side by side", href: "/blog/influencer-ranking" },
          { text: "post-campaign creator performance scorecard", href: "/blog/creator-performance-scorecard" },
        ],
      },
      {
        type: "paragraph",
        text: "A brand scorecard also needs two kinds of criteria: some describe the creator in general (content quality, consistency), others describe fit with your brief (audience relevance, niche fit, campaign suitability). A brilliant finance educator can be the wrong pick for a snack brand.",
      },
      { type: "heading", text: "The six criteria in an influencer evaluation scorecard", id: "six-criteria" },
      {
        type: "paragraph",
        text: "Six criteria cover what most brands need to judge. Keep the list short; every extra criterion dilutes the ones that matter.",
      },
      {
        type: "table",
        headers: ["Criterion", "Question it answers", "Where the evidence comes from"],
        rows: [
          ["Audience relevance", "Are the people watching likely to be our customers?", "Comment language and themes, location and age signals, then creator-shared Insights screenshots"],
          ["Engagement", "Do people respond meaningfully, not just numerically?", "Engagement against followers and views, specific questions in comments, saves and shares if shared"],
          ["Content quality", "Does the creator hold attention and explain clearly?", "10 to 15 recent posts watched in full, including sponsored ones"],
          ["Consistency", "Will we get roughly the standard and rhythm we see today?", "Posting pattern over three to six months, median versus best post, topic focus"],
          ["Niche fit", "Does our product belong naturally in this creator's world?", "Topics covered, past brand categories, how products already appear in their content"],
          ["Campaign suitability", "Can this creator deliver this specific brief?", "Format strengths, language, location, availability, turnaround, past sponsored work"],
        ],
      },
      {
        type: "paragraph",
        text: "Audience relevance carries the most uncertainty, because the best data sits inside the creator's own dashboard. The guide to analysing an influencer's audience demographics explains what to request and how to read it. Consistency deserves more than a glance at the profile grid; evaluating a creator's content consistency covers the full review.",
        links: [
          { text: "analysing an influencer's audience demographics", href: "/blog/influencer-audience-demographics" },
          { text: "evaluating a creator's content consistency", href: "/blog/influencer-content-consistency" },
        ],
      },
      { type: "heading", text: "Write the anchors before you score anyone", id: "scoring-anchors" },
      {
        type: "paragraph",
        text: "An anchor is a one-line description of what a score looks like. Without anchors, a 4 from one reviewer is a 3 from another. Score each criterion from 1 to 5, and write at least the 1, 3 and 5 descriptions so reviewers can place 2 and 4 between them.",
      },
      {
        type: "table",
        headers: ["Criterion", "1 (weak)", "3 (acceptable)", "5 (strong)"],
        rows: [
          ["Audience relevance", "Little sign the audience matches our customer; Insights contradict the brief", "Partial match; our core age or location band is present but not dominant", "Insights and comments both show our target customer as the main audience"],
          ["Engagement", "Generic or repetitive comments; numbers out of line with views", "Steady engagement with some real conversation", "Specific questions, recommendations asked for, sponsored posts still discussed"],
          ["Content quality", "Unclear, badly lit or copied content", "Competent and on-format; follows trends rather than setting them", "Distinctive, clear and watchable; explains products well"],
          ["Consistency", "Long gaps, erratic results or frequent topic changes", "Regular posting with some dips or drift", "Steady rhythm and quality for six months or more"],
          ["Niche fit", "Product would look out of place", "Adjacent niche; needs a clear angle", "Product already belongs in the creator's routine or topics"],
          ["Campaign suitability", "Wrong format, language or timeline for the brief", "Can deliver with extra briefing or support", "Already makes the format, in the language, on our timeline"],
        ],
      },
      {
        type: "paragraph",
        text: "Calibrate before the first real round: every reviewer scores the same five creators independently, you compare scores criterion by criterion, and rewrite any anchor people read differently. Repeat when a new reviewer joins.",
      },
      {
        type: "paragraph",
        text: "Judge creators against their type: a regional nano creator's lower polish isn't low quality if the content is clear and trusted.",
      },
      { type: "heading", text: "Start from a comparable shortlist", id: "comparable-shortlist" },
      {
        type: "paragraph",
        text: "Before scoring, make sure the creators were found the same way. If half the list came from a teammate's saved posts and half from an agency deck, you end up comparing a 6,000-follower Kannada food creator with a 4 lakh-follower national lifestyle account, and the totals mean little.",
      },
      {
        type: "paragraph",
        text: "Define the search once: niche, follower band, the states or cities you care about, language and a minimum engagement level. Run it, save the results into one list per campaign, and score only from that list. The wider process is covered in building an influencer shortlist step by step.",
        links: [{ text: "building an influencer shortlist step by step", href: "/blog/influencer-shortlist" }],
      },
      {
        type: "paragraph",
        text: "Kudozz Discovery helps with this part for Instagram creators in India: filter by follower range, niche, state, city, language, engagement and posting frequency, sort by engagement rate or average views, and open profiles showing followers, average views and likes, engagement rate, niches and languages. It doesn't score creators or show audience demographics, so the scorecard and the judgement calls stay with your team.",
      },
      {
        type: "discovery-cta",
        headline: "Score Creators Found the Same Way",
        body: "Kudozz Discovery lets you filter Instagram creators in India by niche, follower range, city, language and engagement, then save one list per campaign to score from. Audience checks, outreach and the final call stay with your team.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Weight the criteria by campaign objective", id: "weights-by-objective" },
      {
        type: "paragraph",
        text: "Weights tell the scorecard what matters most for this brief. The figures below are illustrative starting points, not benchmarks; adjust them to your category and to the evidence you actually have.",
      },
      {
        type: "table",
        headers: ["Criterion", "Awareness", "Consideration", "Conversion", "Content for ads"],
        rows: [
          ["Audience relevance", "25%", "25%", "30%", "5%"],
          ["Engagement", "15%", "25%", "25%", "5%"],
          ["Content quality", "20%", "20%", "15%", "40%"],
          ["Consistency", "15%", "10%", "10%", "15%"],
          ["Niche fit", "10%", "10%", "10%", "10%"],
          ["Campaign suitability", "15%", "10%", "10%", "25%"],
        ],
      },
      {
        type: "paragraph",
        text: "For a content-for-ads brief, where you run creators' videos from your own account, their audience matters far less than craft and reliability. For a code-led conversion brief, who is watching and whether they act on recommendations dominate. Change weights per campaign; keep criteria and anchors stable so scores stay comparable.",
      },
      { type: "heading", text: "Gates that override the total", id: "gates" },
      {
        type: "paragraph",
        text: "Some problems shouldn't be averaged away. A creator with a strong total and a likely fake audience is still a no. Treat these as pass/fail checks before any weighted score counts:",
      },
      {
        type: "list",
        items: [
          "Audience authenticity: sudden follower spikes, views far below the follower count, or automated-looking comments.",
          "Brand safety: past content or comment sections your brand couldn't stand next to.",
          "Disclosure habits: sponsored posts without the clear labels that ASCI's influencer advertising guidelines require.",
          "Conflicts: a current deal or exclusivity with a direct competitor.",
          "Regulated categories: ASCI expects creators giving health or financial advice to hold relevant qualifications.",
        ],
      },
      {
        type: "paragraph",
        text: "The guide to spotting fake followers and suspicious engagement explains what to look for and which innocent explanations to rule out before you fail a creator. Brand safety has its own process in the pre-hire brand safety check.",
        links: [
          { text: "spotting fake followers and suspicious engagement", href: "/blog/how-to-identify-fake-followers" },
          { text: "pre-hire brand safety check", href: "/blog/influencer-marketing-brand-safety" },
        ],
      },
      { type: "heading", text: "How to run the scorecard, step by step", id: "step-by-step" },
      {
        type: "list",
        items: [
          "1. Fix the brief: objective, target customer, format, language, region and budget band. Suitability can't be judged against a brief nobody wrote down.",
          "2. Set this campaign's weights and save them with the scorecard.",
          "3. Score only from the comparable longlist described above.",
          "4. Score the public-evidence criteria first: content quality, consistency, niche fit and a provisional engagement score. Most creators drop out here, cheaply.",
          "5. Ask the survivors for audience Insights, rates and availability, then score audience relevance and campaign suitability properly.",
          "6. Apply the gates, calculate weighted totals and write one line explaining every score below 3.",
          "7. Pass the results into your shortlist comparison, where cost and mix come in.",
        ],
      },
      {
        type: "paragraph",
        text: "Step 4 comes before step 5 on purpose: asking forty creators for Insights wastes everyone's time, while asking the twelve who passed the public review is reasonable.",
      },
      { type: "heading", text: "A copy-ready scorecard template", id: "scorecard-template" },
      {
        type: "template",
        label: "Influencer evaluation scorecard",
        text: "Campaign: ____   Objective: ____   Reviewer: ____   Date: ____\nCreator: @____   Platform: ____   Followers: ____   Avg views: ____\n\nGATES (pass / fail / query)\nAudience authenticity: __   Brand safety: __   Disclosure habits: __\nCompetitor conflict: __   Category qualification (if regulated): __\n\nCRITERION              Weight   Score (1-5)   Weighted   Evidence\nAudience relevance     __%      __            __         Insights dated __\nEngagement             __%      __            __         Comments read: __\nContent quality        __%      __            __         Posts watched: __\nConsistency            __%      __            __         Window: __ months\nNiche fit              __%      __            __\nCampaign suitability   __%      __            __\n\nWeighted total (out of 5): __\nReason for any score below 3: ____\nDecision: shortlist / hold / reject",
      },
      {
        type: "paragraph",
        text: "Each weighted figure is the score multiplied by its weight; the total is their sum. Keep the evidence column specific ('Insights dated 3 November' rather than 'looks good') and store completed scorecards on each creator's record in your influencer database so the next campaign starts with history.",
        links: [{ text: "creator's record in your influencer database", href: "/blog/influencer-database" }],
      },
      { type: "heading", text: "Worked example: three creators, one conversion brief", id: "worked-example" },
      {
        type: "paragraph",
        text: "Back to the Bengaluru coffee brand. The cold-brew launch is a conversion brief built around a first-order code, so it uses the conversion weights above. Three hypothetical creators pass the gates:",
      },
      {
        type: "table",
        headers: ["Criterion (weight)", "Creator A: 3.8 lakh, national lifestyle", "Creator B: 42K, Bengaluru food", "Creator C: 15K, Kannada home café"],
        rows: [
          ["Audience relevance (30%)", "2", "5", "4"],
          ["Engagement (25%)", "2", "4", "5"],
          ["Content quality (15%)", "5", "4", "3"],
          ["Consistency (10%)", "4", "4", "3"],
          ["Niche fit (10%)", "2", "5", "5"],
          ["Campaign suitability (10%)", "4", "4", "3"],
          ["Weighted total", "2.85", "4.40", "4.00"],
        ],
      },
      {
        type: "paragraph",
        text: "Creator A has the most polished content and the largest following, but Insights show followers spread nationally and younger than the brand's buyers. Creator C is less polished but has the most engaged audience and talks about coffee every week. The brand books B and C for the code-led push and keeps A on file for a later awareness wave, re-weighted for reach.",
      },
      {
        type: "paragraph",
        text: "The scorecard didn't make the decision. It made the reasons visible, so the team argued about evidence instead of taste.",
      },
      { type: "heading", text: "Scorecard mistakes to avoid", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Scoring from the profile grid and media kit without watching full posts.",
          "Treating engagement rate as engagement quality; emoji comments and giveaway entries aren't conversation.",
          "Changing the criteria every campaign, so no score can be compared with an older one. Change weights, not criteria.",
          "Giving audience relevance a 5 from public signals alone. Without Insights, cap it at 3 and mark it provisional.",
          "Letting a strong total override a failed gate.",
                    "Never revisiting scores. Rescore before every booking, because creators change faster than spreadsheets.",
        ],
      },
      { type: "heading", text: "Make it a habit, not a document", id: "conclusion" },
      {
        type: "paragraph",
        text: "A good influencer evaluation scorecard is short enough that reviewers actually use it: six criteria, written anchors, weights set per objective and a handful of gates. Score public evidence first, ask for Insights only from creators who pass, and record the reasons behind every number. If you'd rather have specialists run sourcing and vetting for you, Kudozz's creator discovery service applies the same discipline across large longlists.",
        links: [{ text: "creator discovery service", href: "/services/creator-discovery" }],
      },
    ],
    faqs: [
      {
        question: "What is an influencer evaluation scorecard?",
        answer:
          "It's a written set of criteria, scoring anchors and weights a brand uses to judge creators before collaborating. A typical version scores six criteria from 1 to 5, applies pass/fail gates such as audience authenticity, and weights the scores to suit the campaign objective.",
      },
      {
        question: "Is a creator quality score the same as an evaluation scorecard?",
        answer:
          "Not quite. A creator quality score usually describes how strong a creator is in general, such as content craft and consistency. An evaluation scorecard adds brand-specific criteria like audience relevance, niche fit and campaign suitability, so it answers whether the creator is right for you, not just whether they're good.",
      },
      {
        question: "How is this different from an influencer performance scorecard?",
        answer:
          "An evaluation scorecard is used before a collaboration and relies on public content, profile metrics and creator-provided insights. A performance scorecard is used after a campaign and judges actual results and delivery. Keeping both lets you see whether your pre-campaign judgements predicted what happened.",
      },
      {
        question: "Should every campaign use the same weights?",
        answer:
          "No. Keep the criteria and anchors fixed so scores stay comparable, but change the weights for each objective, because an awareness push and a content-for-ads brief value very different things.",
      },
      {
        question: "How many creators should we score?",
        answer:
          "Score everyone on the longlist against the public-evidence criteria, which is quick. Request Insights only from creators who pass that first round, so you don't ask dozens of creators for data you won't use.",
      },
    ],
  },

  // #82 influencer-audience-demographics (NEW)
  {
    slug: "influencer-audience-demographics",
    category: "Influencer Marketing",
    title: "How to Analyse an Influencer's Audience Demographics Before a Collaboration",
    seoTitle: "How to Check Influencer Audience Demographics | Kudozz",
    excerpt:
      "A creator's own age and gender tell you little about who watches them. Here's how to analyse an influencer's audience demographics, what public data can't show and how to request verified Insights.",
    metaDescription:
      "Analyse influencer audience demographics before you collaborate: age and gender, matching your customer, limits of public data and how to request Insights.",
    author: AUTHOR,
    publishedAt: "2026-11-27",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["Influencer Audience Demographics", "Audience Analysis", "Instagram Insights", "Influencer Vetting"],
    related: ["find-influencers-matching-target-audience", "influencer-audience-quality", "how-to-research-influencers", "things-to-check-before-selecting-influencers"],
    hero: {
      src: "/blog/discovery/influencer-audience-demographics.svg",
      alt: "Paired bars comparing a hypothetical creator's follower age bands with a brand's target customer, showing that the creator's own profile is not the audience",
    },
    discoveryCta: {
      headline: "Find Creators Worth an Audience Check",
      body: "Explore Kudozz Discovery to find Instagram creators in India by niche, language and engagement, compare profile metrics and reveal contact details when you're ready to ask for audience data. Demographic checks, contracts and measurement stay with your team.",
    },
    body: [
      {
        type: "paragraph",
        text: "The most common assumption in influencer selection is that a creator's audience looks like the creator. A 27-year-old woman in Mumbai who posts skincare must be followed by women in their twenties in Mumbai. Sometimes that's true. Often it isn't. Plenty of women fitness creators are followed mainly by young men, plenty of dads who cook are watched mostly by women, and city-based creators can have large followings in other states or abroad.",
      },
      {
        type: "paragraph",
        text: "Influencer audience demographics are the age, gender and location breakdown of the people who follow or watch a creator, plus the signals you can reasonably infer around them, such as language and life stage. This guide covers what to look at, how to match it to your target customer, what public data can't tell you, and how to ask for verified screenshots from Instagram Insights or YouTube Studio before you commit budget.",
      },
      { type: "heading", text: "What influencer audience demographics can and can't tell you", id: "what-demographics-tell" },
      {
        type: "table",
        headers: ["Data point", "What it helps you judge", "What it doesn't tell you"],
        rows: [
          ["Age bands", "Whether your buyers' life stage is present: students, young professionals, parents, older adults", "Income, spending power or purchase intent"],
          ["Gender split", "Whether the people you sell to are a meaningful share of the audience", "Who in a household makes the buying decision"],
          ["Top cities and countries", "Whether followers live where you sell or deliver", "Whether they shop online or visit stores"],
          ["Language (inferred)", "Whether your message will land as written", "How comfortable bilingual followers are in each language"],
        ],
      },
      {
        type: "paragraph",
        text: "Location has enough nuance to need its own process, covered in checking an influencer's audience location. This guide concentrates on age, gender and the signals that sit around them.",
        links: [{ text: "checking an influencer's audience location", href: "/blog/influencer-audience-location" }],
      },
      { type: "heading", text: "Start with your customer, not the creator", id: "customer-spec" },
      {
        type: "paragraph",
        text: "Before you look at a single creator's numbers, write down what a matching audience would look like. Keep it to a few lines and mark each one as must-have or nice-to-have.",
      },
      {
        type: "template",
        label: "Target audience spec (example: a premium baby-care brand)",
        text: "Must-have\n- Age: largest follower band is 25-34\n- Gender: women a clear majority of followers\n- Country: India the top country by a wide margin\n\nNice-to-have\n- Cities: metros and large Tier 2 cities with fast delivery\n- Language: comfortable with Hindi or English captions\n- Life stage: comments mention pregnancy, newborns or toddlers",
      },
      {
        type: "paragraph",
        text: "The spec prevents the most common analysis error: reading a breakdown first and deciding afterwards whether it's good. If your ideal customer isn't written down yet, the guide to turning an ideal customer profile into an audience spec walks through it.",
        links: [{ text: "turning an ideal customer profile into an audience spec", href: "/blog/find-influencers-matching-target-audience" }],
      },
      { type: "heading", text: "Read the public signals first", id: "public-signals" },
      {
        type: "paragraph",
        text: "You can form a reasonable hypothesis about a creator's audience without any data from them. Treat it as a hypothesis, not a finding.",
      },
      {
        type: "table",
        headers: ["Signal", "What it suggests", "Why it can mislead"],
        rows: [
          ["Who comments, and what they say", "Comments about office life, exams or toddlers point to life stage; names and profile photos hint at gender mix", "A vocal minority comments; most viewers never do"],
          ["Questions asked", "'Is this safe during pregnancy?' or 'Will this suit a college budget?' are strong clues", "Giveaway posts attract people who aren't the regular audience"],
          ["Topics and references", "School runs, first jobs, retirement or college fests signal an age band", "Creators sometimes post for the audience they want, not the one they have"],
          ["Caption and audio language", "Who can follow the content comfortably", "Bilingual audiences are common across India"],
          ["Past brand partners", "Brands usually choose creators who reach their own customers", "Some creators accept any brand that pays"],
        ],
      },
      {
        type: "paragraph",
        text: "Read comments across eight to ten posts, not one. A practical method for this kind of desk research is set out in researching influencers before you approach them.",
        links: [{ text: "researching influencers before you approach them", href: "/blog/how-to-research-influencers" }],
      },
      { type: "heading", text: "Limits of public and creator-provided data", id: "limits" },
      {
        type: "list",
        items: [
          "Public signals over-represent the people who comment, who may not resemble the silent majority who watch.",
          "Platform demographics are estimates. YouTube, for example, bases its age and gender reports on signed-in viewers.",
          "Insights describe followers over a chosen period, not the specific people your sponsored post will reach.",
          "Screenshots can be edited or chosen from the best period. Dated, full-screen captures and recordings reduce that risk without removing it.",
          "Demographics say nothing about income, intent or whether people trust the creator.",
        ],
      },
      {
        type: "paragraph",
        text: "That last gap is why demographics sit next to an audience quality review. For the authenticity and attention side, see the guide to checking and scoring influencer audience quality.",
        links: [{ text: "checking and scoring influencer audience quality", href: "/blog/influencer-audience-quality" }],
      },
      { type: "heading", text: "Shortlist on what you can filter, verify what you can't", id: "shortlist-then-verify" },
      {
        type: "paragraph",
        text: "Discovery tools filter on creator attributes, so it's worth being precise about what those are. In Kudozz Discovery, the gender filter is the creator's gender, and the state, city and language filters describe the creator, not their followers. They're still useful: a Marathi-speaking creator based in Nagpur is a reasonable bet if you want Marathi speakers in Maharashtra. But Discovery doesn't show audience demographics, so no filter can confirm that a creator's followers are women aged 25 to 34.",
      },
      {
        type: "paragraph",
        text: "Use filters and profile metrics (followers, average views and likes, engagement rate, niches and languages) to build a longlist, save it as a named list for the campaign, and spend your demographic checks on the creators who survive the content review.",
      },
      {
        type: "discovery-cta",
        headline: "Shortlist Creators Before You Ask for Insights",
        body: "Kudozz Discovery helps you search Instagram creators in India by niche, city, language and engagement, and save a named list for each brief. Audience demographics still come from the creators themselves, so Insights requests and outreach stay with your team.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "How to request verified Insights screenshots", id: "request-insights" },
      {
        type: "paragraph",
        text: "Once a creator is interested, ask for their own audience data. Be specific about what you want and why, and keep the request short; creators receive plenty of vague ones.",
      },
      {
        type: "table",
        headers: ["Platform", "Where the creator finds it", "What to ask for"],
        rows: [
          ["Instagram", "Insights in the professional dashboard of a creator or business account, in the followers or audience section", "Age range, gender, and top towns or cities and countries for followers; views or reach on recent Reels"],
          ["YouTube", "YouTube Studio, Analytics, Audience tab", "Age, gender and top geographies for a recent period, such as the last 28 or 90 days"],
        ],
      },
      {
        type: "paragraph",
        text: "Then set three conditions that make screenshots more trustworthy:",
      },
      {
        type: "list",
        items: [
          "The date range is visible in every screenshot, and it covers a recent period rather than one peak month.",
          "Full-screen captures, not crops, so you can see the account name and where in the dashboard the figures sit.",
          "For larger fees, a short screen recording scrolling through the audience section, which is much harder to alter than a still image.",
        ],
      },
      {
        type: "template",
        label: "Short Insights request",
        text: "Hi (name), we're considering you for a (product) campaign in (month). Before we send a brief, could you share:\n\n1. Instagram audience screenshots: age range, gender, top cities and top countries\n2. Views or reach on your last 8-10 Reels\n\nPlease keep the date range visible in each one. We'll use them only to check fit for this campaign.",
      },
      {
        type: "paragraph",
        text: "Cross-check what arrives against what you can see publicly. If the screenshots show a mostly female audience aged 25 to 34 but the comments are full of college students, ask about it. There's often a sensible answer, such as a recent shift in content, but you should hear it before you sign. Treat the screenshots as personal data: share them only with the people evaluating the campaign and delete them once the decision is made. The basics are in how brands should handle creator and audience data in India.",
        links: [{ text: "how brands should handle creator and audience data in India", href: "/blog/influencer-marketing-data-privacy" }],
      },
      { type: "heading", text: "Reading the breakdown against your spec", id: "reading-the-numbers" },
      {
        type: "paragraph",
        text: "With screenshots in hand, go back to the spec and test each must-have. Compare shares rather than absolute numbers, and look at the largest band rather than an average age.",
      },
      {
        type: "table",
        headers: ["Age band (hypothetical)", "Creator X followers", "Creator Y followers", "Baby-care spec"],
        rows: [
          ["13-17", "7%", "2%", "Not a target"],
          ["18-24", "46%", "20%", "Low priority"],
          ["25-34", "31%", "52%", "Must be the largest band"],
          ["35-44", "12%", "20%", "Welcome"],
          ["45+", "4%", "6%", "Low priority"],
        ],
      },
      {
        type: "paragraph",
        text: "On these invented numbers, Creator Y passes the age must-have and Creator X doesn't, even if X has more followers and better engagement. X isn't a weak creator; X is a creator for a different brief, such as a campus launch.",
      },
      {
        type: "paragraph",
        text: "Two cautions. Follower demographics describe followers, while a Reel can reach many non-followers, so a creator's views may come from a broader crowd than their breakdown suggests. And small accounts can show thin breakdowns, so treat a 6,000-follower creator's percentages as directional rather than precise.",
      },
      { type: "heading", text: "Three practical examples", id: "practical-examples" },
      { type: "subheading", text: "A men's grooming brand and a woman creator" },
      {
        type: "paragraph",
        text: "A Jaipur men's grooming brand rules out a woman lifestyle creator on instinct. When it asks anyway, her Insights show that most of her followers are men aged 18 to 34, many of whom follow her for blunt product comparisons. On the numbers she's a closer audience match than several men on the longlist.",
      },
      { type: "subheading", text: "An exam-prep app and a teacher with older followers" },
      {
        type: "paragraph",
        text: "An exam-prep app looks at a popular maths teacher. The comments are full of students asking about exam dates, but his Insights show a large share of followers aged 35 to 44: parents follow him too. The app keeps him and shifts part of the brief toward the parent who pays for the subscription.",
      },
      { type: "subheading", text: "A senior-friendly phone and a family creator" },
      {
        type: "paragraph",
        text: "A company selling easy-to-use smartphones for older people assumes it needs creators over 55. A family creator who films with her parents turns out to have an audience mostly aged 25 to 44, the adult children who'd buy the phone as a gift. The brand changes its message from 'for you' to 'for your parents'.",
      },
      {
        type: "paragraph",
        text: "In each case the creator's own profile pointed one way and the audience data pointed another. The decision followed the data.",
      },
      { type: "heading", text: "Mistakes that skew the analysis", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Using the creator's own age, gender or city as a stand-in for the audience's.",
          "Reading the breakdown before writing the target spec, then rationalising whatever comes back.",
          "Accepting a single cropped screenshot from a viral month.",
          "Treating a filter on the creator's gender or location as audience data.",
          "Ruling out creators whose profile doesn't look like your customer without checking.",
          "Over-weighting small differences. A few percentage points between two creators rarely matters as much as content and engagement.",
        ],
      },
      { type: "heading", text: "Where this fits in your vetting", id: "conclusion" },
      {
        type: "paragraph",
        text: "Audience demographics are one input into a wider decision, and they work best scored alongside engagement, content and fit in a single brand evaluation scorecard. Write the spec, form a hypothesis from public signals, request dated Insights from the creators who pass your content review, and let the numbers change your mind when they disagree with your instinct. For the rest of the pre-selection checks, see the things to check before selecting an influencer, and if you'd like help running the process across a large shortlist, Kudozz's influencer marketing team handles this vetting as part of campaign planning.",
        links: [
          { text: "brand evaluation scorecard", href: "/blog/creator-quality-score" },
          { text: "things to check before selecting an influencer", href: "/blog/things-to-check-before-selecting-influencers" },
          { text: "influencer marketing team", href: "/services/influencer-marketing" },
        ],
      },
    ],
    faqs: [
      {
        question: "How can I see an influencer's audience demographics?",
        answer:
          "Ask the creator. On Instagram, age, gender and top locations for followers sit in Insights in the professional dashboard; on YouTube, in the Audience tab of YouTube Studio's analytics. Request dated, full-screen screenshots, or a short screen recording for larger deals.",
      },
      {
        question: "Can I check audience demographics without asking the creator?",
        answer:
          "Only roughly. Comments, questions, topics, language and past brand partners give you a reasonable hypothesis, but they over-represent the people who comment. Use public signals to decide who is worth asking, not as proof.",
      },
      {
        question: "Does a creator's gender tell you their audience's gender?",
        answer:
          "No. Many creators have audiences skewed toward a different gender or age group from their own. Discovery filters, including Kudozz Discovery's gender filter, describe the creator, so audience gender has to come from the creator's own Insights.",
      },
      {
        question: "What if a creator won't share Insights?",
        answer:
          "Ask once more, explaining why you need the data and how you'll handle it. If they still decline, you can go ahead on public signals for a small, low-risk collaboration, but cap audience relevance in your scoring and avoid large commitments.",
      },
      {
        question: "How recent should the demographic data be?",
        answer:
          "Ask for a recent period with the date range visible. Audiences shift when creators change topics or go viral, so a breakdown from a year ago may not describe who follows them now.",
      },
    ],
  },

  // #83 influencer-audience-location (NEW)
  {
    slug: "influencer-audience-location",
    category: "Influencer Marketing",
    title: "How to Check an Influencer's Audience Location Before Hiring Them",
    seoTitle: "Influencer Audience Location: How to Check It | Kudozz",
    excerpt:
      "Where a creator lives and where their followers live are often different. Here's how to check an influencer's audience location for national, regional and local campaigns in India.",
    metaDescription:
      "Check influencer audience location before hiring: creator vs audience location, city, state and country data, and what to ask for on local or regional briefs.",
    author: AUTHOR,
    publishedAt: "2026-11-27",
    lastReviewed: "November 2026",
    readingTime: "8 min read",
    tags: ["Influencer Audience Location", "Local Influencer Marketing", "Regional Influencers", "India"],
    related: ["how-to-find-local-influencers", "find-regional-content-creators-india", "influencer-shortlist-multi-city-campaign", "influencer-audience-quality"],
    hero: {
      src: "/blog/discovery/influencer-audience-location.svg",
      alt: "Concentric rings for local, regional, national and international audiences around a creator's home city, with followers scattered across every ring",
    },
    discoveryCta: {
      headline: "Search Creators State by State, Then Verify",
      body: "Explore Kudozz Discovery to find Instagram creators based in the states and cities where you sell, filtered by niche and language, and save them per market. Your team confirms where their followers live and handles outreach and contracts.",
    },
    body: [
      {
        type: "paragraph",
        text: "A new café in Pune's Baner area books three creators who are 'from Pune'. Their Reels look great and the launch weekend collects plenty of likes. Footfall barely moves. When the owner finally asks the creators for their Insights, the reason is obvious: one creator's followers are mostly in Mumbai, another's are spread across India, and the third has a large following in the Gulf from her years living in Dubai.",
      },
      {
        type: "paragraph",
        text: "Checking influencer audience location means confirming that the people who follow and watch a creator live where you sell, deliver or open your doors. It's a different question from where the creator lives, and for a local or regional campaign it can matter more than follower count, engagement or polish. This guide covers the difference, the location data platforms actually show, and a step-by-step check with examples from Kerala, Gujarat and Pune.",
      },
      { type: "heading", text: "Creator location vs audience location", id: "creator-vs-audience" },
      {
        type: "table",
        headers: ["", "Creator location", "Audience location"],
        rows: [
          ["What it is", "Where the creator lives and shoots", "Where the creator's followers and viewers live"],
          ["Where you see it", "Bio, location tags, places in their content, discovery filters", "Only in the creator's own Insights or Studio analytics"],
          ["How reliable from outside", "Fairly reliable, though creators move and travel", "Can only be guessed from public signals"],
          ["Why they can differ", "Creators relocate, travel and shoot in other cities", "Followers stay after a move; viral posts pull in viewers from everywhere; diaspora audiences follow creators from their home state"],
        ],
      },
      {
        type: "paragraph",
        text: "Creator location is a good starting point, because creators usually build their early audience close to home and talk about local places. It isn't proof. As an account grows, its audience can spread well beyond the creator's city.",
      },
      { type: "heading", text: "How much location matters depends on the campaign", id: "campaign-scope" },
      {
        type: "table",
        headers: ["Campaign type", "Location question", "What a good match looks like", "Example"],
        rows: [
          ["National", "Is the audience mostly in India, and in the regions you serve?", "India the clear top country; delivery cities well represented", "A D2C brand shipping across India"],
          ["Regional", "Is the audience concentrated in the target state or language region?", "Top cities mostly within the state, or in diaspora hubs that matter to you", "A Gujarat snacks brand sold through state distributors"],
          ["Local", "Do enough followers live within reach of the store or service area?", "The target city near the top of the list with a meaningful share", "A Pune café or a Kochi clinic"],
          ["Hyperlocal", "Do they live in the neighbourhoods you serve?", "Platform data rarely goes this fine; rely on comments, tags and the creator's knowledge", "A single-neighbourhood bakery or home service"],
        ],
      },
      {
        type: "paragraph",
        text: "For national campaigns, location is mostly a check that the audience is in India rather than elsewhere. For local and hyperlocal campaigns it becomes the deciding criterion, and everything else in the evaluation only matters once it passes. Store launches add their own timing and footfall questions, covered in planning a store-opening influencer campaign.",
        links: [{ text: "planning a store-opening influencer campaign", href: "/blog/store-opening-influencer-campaign" }],
      },
      { type: "heading", text: "What platform data actually shows", id: "platform-location-data" },
      {
        type: "paragraph",
        text: "Ask for location data with a clear idea of what each platform provides:",
      },
      {
        type: "list",
        items: [
          "Instagram: Insights in the professional dashboard shows followers' top towns or cities and top countries. There's no state breakdown, so you group cities into states yourself.",
          "YouTube: YouTube Studio's audience and geography reports show where viewers watch from, mainly by country. Ask the creator what finer location detail their dashboard shows rather than assuming city data is available.",
          "Both: the breakdowns list leading locations, not every city, so part of the audience always sits outside what you can see.",
        ],
      },
      {
        type: "paragraph",
        text: "Follower location also differs from viewer location on any single post. Reels can reach non-followers, so a creator's views may come from a wider crowd than their follower breakdown suggests. Ask for both: follower locations and the views or reach on recent posts.",
      },
      { type: "heading", text: "Build the candidate list from creators based in your region", id: "candidate-list" },
      {
        type: "paragraph",
        text: "Because creator location is the best free predictor you have, start there. Search for creators who live in your target state or city, speak the language your customers use and post about the places they go. Smaller local accounts are often the strongest candidates for location-led campaigns. The search methods city by city are in finding local influencers for your business, and language-led searches are covered in the guide to regional and vernacular creators.",
        links: [
          { text: "finding local influencers for your business", href: "/blog/how-to-find-local-influencers" },
          { text: "regional and vernacular creators", href: "/blog/find-regional-content-creators-india" },
        ],
      },
      {
        type: "paragraph",
        text: "In Kudozz Discovery, the state and city filters show where the creator is based, and the language filter reflects the creator's languages. That narrows a search to creators in Kerala or Pune quickly, and you can save them into a list for the campaign. It doesn't show where their followers live, so treat a filtered list as candidates to verify, not as a verified local audience.",
      },
      {
        type: "discovery-cta",
        headline: "Start With Creators Based Where You Sell",
        body: "Kudozz Discovery lets you filter Instagram creators in India by state, city, language and niche, and save them to a named list for each market. Confirming where their followers live, and the outreach that goes with it, stays with your team.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "A step-by-step influencer audience location check", id: "step-by-step" },
      {
        type: "list",
        items: [
          "1. Define the geography in writing: country, states, cities or a delivery radius, and which of them are must-haves.",
          "2. Screen the public signals: location tags, local landmarks and festivals in the content, comments naming neighbourhoods or asking which branch to visit, and replies in the local language.",
          "3. Note red flags: comments mostly from another country, content shot in a city the creator left long ago, or one viral post about something unrelated to place.",
          "4. Ask for Insights: top cities and countries for followers with the date range visible, plus views or reach on recent posts.",
          "5. Calculate the share that matters: add up the cities inside your target area and compare with the rest. For a regional brand, group cities by state.",
          "6. Decide on the whole picture: a creator with a strong local share and modest engagement can beat a bigger account whose audience lives elsewhere.",
        ],
      },
      {
        type: "template",
        label: "Audience location worksheet",
        text: "Creator: @____   Based in: ____   Insights date range: ____\nTarget area (must-have): ____   Nice-to-have: ____\n\nTop cities shown         Share    Inside target area?\n1. ____                  __%      Y / N\n2. ____                  __%      Y / N\n3. ____                  __%      Y / N\n4. ____                  __%      Y / N\n5. ____                  __%      Y / N\n\nShare inside target area (sum of Y): __%\nTop country: ____   India share: __%\nPublic signals agree? Y / N   Notes: ____\nDecision: pass / query / fail",
      },
      { type: "heading", text: "Regional examples from India", id: "regional-examples" },
      { type: "subheading", text: "A Kerala ayurveda brand" },
      {
        type: "paragraph",
        text: "A Kozhikode ayurvedic skincare brand wants Malayalam creators. Some of the strongest have audiences split between Kerala and the Gulf, where many Malayalis live and work. Whether that's good depends on distribution. If the brand ships only within India, a creator whose top cities include Dubai and Doha is partly reaching people who can't buy. If it ships to the UAE, the same creator becomes a bonus. The brand checks the India share as well as the Kerala cities.",
      },
      { type: "subheading", text: "A Gujarat snacks brand" },
      {
        type: "paragraph",
        text: "A Rajkot namkeen brand sold through distributors in Gujarat and Mumbai shortlists Gujarati food creators. One has strong Ahmedabad and Surat followings; another's top locations are Mumbai and several US cities, reflecting the Gujarati diaspora. For a retail-led campaign the first is the clear choice, while the second might suit a later push on the brand's online store if it ships abroad. If reaching that diaspora becomes the goal, working with diaspora creators is the better starting point.",
        links: [{ text: "working with diaspora creators", href: "/blog/diaspora-influencer-marketing" }],
      },
      { type: "subheading", text: "A Pune café" },
      {
        type: "paragraph",
        text: "Back to the Baner café. Its target area is a few neighbourhoods in west Pune, so the check is strict: Pune needs to be a top city with a substantial share, and the comments should mention local spots. Mumbai followers might visit on a weekend, but the café doesn't count them. Its second round of creators are smaller Pune food and lifestyle accounts whose Insights put Pune well ahead of any other city.",
      },
      {
        type: "paragraph",
        text: "Brands running one campaign across several cities can apply the worksheet per city; building an influencer shortlist for a multi-city campaign shows how to organise that. Smaller cities need extra care because fewer creators are based there, a problem covered in influencer marketing in Tier 2 and Tier 3 cities.",
        links: [
          { text: "building an influencer shortlist for a multi-city campaign", href: "/blog/influencer-shortlist-multi-city-campaign" },
          { text: "influencer marketing in Tier 2 and Tier 3 cities", href: "/blog/influencer-marketing-tier-2-tier-3-cities" },
        ],
      },
      { type: "heading", text: "Common location mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Assuming a creator's city is their audience's city.",
          "Treating a location or language filter as proof of where the audience lives.",
          "Counting followers in cities where you don't sell or deliver.",
          "Ignoring the diaspora share for regional creators, in either direction.",
          "Asking for 'audience location' without naming the period or breakdown, then receiving one flattering screenshot.",
          "Applying a local campaign's strict standard to a national campaign and ruling out good creators for no reason.",
        ],
      },
      { type: "heading", text: "Final word", id: "conclusion" },
      {
        type: "paragraph",
        text: "Audience location is the check most likely to protect a local or regional budget, and one of the easiest to get right. Start with creators based in your area, read the public signals, ask for dated Insights showing top cities and countries, and add up the share that sits where you can actually sell. Location is one part of the audience picture; the guide to an influencer's audience age and gender covers the rest. For campaigns that span several Indian languages and states, Kudozz's regional influencer marketing team can plan and run the sourcing.",
        links: [
          { text: "an influencer's audience age and gender", href: "/blog/influencer-audience-demographics" },
          { text: "regional influencer marketing team", href: "/services/regional-influencer-marketing" },
        ],
      },
    ],
    faqs: [
      {
        question: "How do I check where an influencer's audience is located?",
        answer:
          "Ask the creator for Insights screenshots showing followers' top cities and countries, with the date range visible. Before that, use public signals such as location tags, local references and comments naming neighbourhoods to decide who is worth asking.",
      },
      {
        question: "Is a creator's location the same as their audience's location?",
        answer:
          "Not necessarily. Creators who have moved keep followers from their old city, viral posts attract viewers from everywhere, and regional creators often have diaspora audiences. Creator location is a useful starting point, but only the creator's own analytics confirm where followers live.",
      },
      {
        question: "Does Instagram show audience location by state?",
        answer:
          "Instagram Insights shows top towns or cities and top countries rather than states. For a state-level campaign, group the cities in the breakdown by state yourself, and remember that smaller cities may fall outside the list you can see.",
      },
      {
        question: "Do Kudozz Discovery's location filters show audience location?",
        answer:
          "No. The state and city filters show where the creator is based. They're a good way to build a list of local candidates, but audience location has to be confirmed with the creator's own Insights.",
      },
      {
        question: "How much of a creator's audience needs to be local?",
        answer:
          "There's no universal threshold. It depends on your margins, how far customers will travel and how many local creators exist. Compare creators on the share inside your target area, and weigh that against cost and engagement.",
      },
    ],
  },

  // #84 influencer-audience-overlap (UPGRADE, orig 2026-10-09)
  {
    slug: "influencer-audience-overlap",
    category: "Campaign Strategy",
    title: "How to Identify Audience Overlap Between Influencers",
    seoTitle: "Influencer Audience Overlap: How to Identify It | Kudozz",
    excerpt:
      "Five creators with two lakh followers each rarely add up to ten lakh people. Here's how to identify influencer audience overlap, estimate unique reach and build a creator mix that diversifies on purpose.",
    metaDescription:
      "Identify influencer audience overlap before booking several creators: duplication, incremental reach, data sources, a commenter check and unique reach maths.",
    author: AUTHOR,
    publishedAt: "2026-10-09",
    updatedAt: "2026-11-27",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["Influencer Audience Overlap", "Unique Reach", "Creator Mix", "Campaign Planning"],
    related: ["select-influencer-mix-for-campaign", "influencer-reach-vs-impressions", "influencer-shortlist", "influencer-audience-quality"],
    hero: {
      src: "/blog/discovery/influencer-audience-overlap.svg",
      alt: "Three overlapping creator audience circles showing shared followers in the middle and the incremental reach each creator adds on the outside",
    },
    discoveryCta: {
      headline: "Mix Niches, Cities and Languages From the Start",
      body: "Explore Kudozz Discovery to find Instagram creators in India across different niches, cities and languages, compare their engagement and average views, and keep each group in its own list. Overlap estimates, outreach and reporting stay with your team.",
    },
    body: [
      {
        type: "paragraph",
        text: "Here's the arithmetic that catches out many campaign plans. Book five Mumbai fitness creators with around two lakh followers each and the plan says ten lakh reach. In practice, a lot of those followers follow several of the five, because people who care about home workouts in Mumbai tend to follow the same well-known accounts. The campaign reaches fewer unique people than the plan claims, and some of them see your product five times in a week.",
      },
      {
        type: "paragraph",
        text: "Influencer audience overlap is the share of people who follow, or are reached by, more than one creator in your campaign. Sometimes that repetition is exactly what you want. Often it's budget spent reaching the same people twice. This guide explains the terms, when overlap helps or hurts, what data you can realistically get in India, a hands-on method for estimating it, and how to plan a creator mix with the overlap you intend.",
      },
      { type: "heading", text: "Influencer audience overlap, duplication and incremental reach", id: "key-terms" },
      {
        type: "table",
        headers: ["Term", "What it means", "Why it matters"],
        rows: [
          ["Audience overlap", "People who follow or are reached by two or more of your creators", "Shrinks the number of unique people you reach"],
          ["Duplication", "Paying more than once to reach the same person", "The cost side of overlap"],
          ["Frequency", "How many times the average person sees your campaign", "Overlap raises it; some repetition helps recall, too much tires people"],
          ["Incremental reach", "New people a creator adds beyond those the rest of the mix already reaches", "The real value of adding one more creator to an awareness plan"],
          ["Unique reach", "Total distinct people reached across all creators", "The figure to plan with, instead of summed followers"],
        ],
      },
      {
        type: "paragraph",
        text: "Reach, impressions and views are often blurred in creator reporting, which makes overlap harder to reason about. The explainer on reach versus impressions and views sorts them out.",
        links: [{ text: "reach versus impressions and views", href: "/blog/influencer-reach-vs-impressions" }],
      },
      { type: "heading", text: "When overlap hurts and when it helps", id: "when-overlap-matters" },
      {
        type: "table",
        headers: ["Objective", "Overlap is", "Because"],
        rows: [
          ["Awareness in a new market", "Mostly a cost", "Every shared follower is someone you've already paid to reach"],
          ["Launch week", "Often useful", "Seeing a product from several trusted creators in a few days builds the sense that everyone's talking about it"],
          ["Conversion", "Can help", "Repeated exposure from different voices can move people who were already considering the product"],
          ["Creator testing", "A problem", "When audiences overlap, you can't tell which creator drove a result"],
          ["Always-on programmes", "Needs managing", "The same core audience seeing the brand every week can tire of it"],
        ],
      },
      {
        type: "paragraph",
        text: "Decide which row you're in before measuring anything. The same level of overlap can be a problem for one brief and the whole point of another.",
      },
      { type: "heading", text: "The data you can actually get", id: "data-sources" },
      {
        type: "paragraph",
        text: "No public number tells you how much two Instagram audiences overlap. You build an estimate from several partial sources, each with a weakness.",
      },
      {
        type: "table",
        headers: ["Source", "What it gives you", "Weakness", "Effort"],
        rows: [
          ["Creator-provided Insights", "Top cities, countries, age and gender for each creator's followers", "Similar demographics don't prove the same people; two creators can both skew towards Pune women aged 25 to 34 and share few followers", "Low, once you're in conversation"],
          ["Commenter-handle comparison", "The actual accounts engaging with each creator, matched across creators", "Commenters are a small, active slice of the audience", "Medium; a spreadsheet job"],
          ["Follower-sample comparison", "A sample of followers checked across accounts", "Follower lists are hard to sample fairly and include inactive accounts", "High"],
          ["Third-party analytics tools", "Modelled overlap estimates for pairs or groups of accounts", "Based on samples and the tool's own method; check how it's calculated", "Low, if you already pay for one"],
          ["Your own campaign data", "De-duplicated reach when creator content runs as ads from one ad account; total reach versus summed creator reach after a campaign", "Only available after you've worked with the creators", "Low, but retrospective"],
        ],
      },
      {
        type: "paragraph",
        text: "Overlap only matters among people in your target market, so read each creator's location data alongside the overlap estimate; reading an influencer's audience location explains how. Kudozz Discovery doesn't measure audience overlap, and no discovery filter can. It helps with an earlier decision, covered below: building a longlist that's varied by niche, city and language before you check overlap at all.",
        links: [{ text: "reading an influencer's audience location", href: "/blog/influencer-audience-location" }],
      },
      { type: "heading", text: "Design the mix for the overlap you want", id: "diversification" },
      {
        type: "paragraph",
        text: "Most overlap is decided when you choose creators, long before you measure anything. To diversify, vary at least one of these across the mix:",
      },
      {
        type: "list",
        items: [
          "Niche: a protein snack brand might pair a fitness creator with a cooking creator and a working-parent creator, rather than booking three fitness creators.",
          "Geography: creators based in different cities or states, especially for national awareness.",
          "Language: Hindi, Tamil, Bengali and English creators in the same niche usually draw different audiences.",
          "Size: a mix of tiers rather than the five biggest accounts in one niche, which are the ones a niche's fans are most likely to all follow.",
          "Format: Reels creators and long-form YouTube creators reach people at different moments, even within one niche.",
        ],
      },
      {
        type: "paragraph",
        text: "For repetition, do the opposite on purpose: several creators in one niche and city posting within the same few days. Choosing the right mix of influencers for a campaign covers roles, tiers and formats in full, and finding influencers by content niche helps you search adjacent niches you may not have considered.",
        links: [
          { text: "the right mix of influencers for a campaign", href: "/blog/select-influencer-mix-for-campaign" },
          { text: "finding influencers by content niche", href: "/blog/find-influencers-by-content-niche" },
        ],
      },
      { type: "heading", text: "Start with a diversified longlist", id: "diversified-longlist" },
      {
        type: "paragraph",
        text: "The overlap check is much easier when the longlist was built for variety in the first place. Run separate searches for each niche, city and language in your plan and save each into its own list, rather than taking the top results of one search. When the shortlist comes together, you'll already know which creators are likely to share audiences and which pairs need checking. The broader method for putting together an influencer shortlist fits around this.",
        links: [{ text: "putting together an influencer shortlist", href: "/blog/influencer-shortlist" }],
      },
      {
        type: "discovery-cta",
        headline: "Diversify Your Longlist Before You Check Overlap",
        body: "Kudozz Discovery lets you search Instagram creators in India by niche, city and language and save separate lists for each part of your mix. It doesn't measure audience overlap, so the commenter checks, Insights requests and outreach stay with your team.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "A step-by-step overlap check", id: "step-by-step" },
      {
        type: "paragraph",
        text: "For a shortlist of four to eight creators, the commenter-handle method gives a usable estimate in an afternoon.",
      },
      {
        type: "list",
        items: [
          "1. Pick the pairs that matter. Creators who share a niche, city or language are the ones likely to share audience; skip pairs that obviously don't.",
          "2. Collect handles. For each creator, copy the usernames of commenters on their last eight to ten posts into one column, then remove duplicates within that creator.",
          "3. Strip the noise: the creators themselves, brand accounts, obvious bots and giveaway entries.",
          "4. Match across creators. A lookup or COUNTIF in your spreadsheet flags handles that appear under more than one creator.",
          "5. Calculate a pairwise overlap share: shared handles divided by the smaller of the two creators' unique commenter lists.",
          "6. Sense-check with Insights. If commenter overlap is high and both creators' top cities and age bands match, treat the overlap as real. If the demographics differ, the shared commenters may be a small fan cluster.",
          "7. Record the estimate with its date and method, so the next campaign can reuse it.",
        ],
      },
      {
        type: "paragraph",
        text: "This measures overlap among engaged people, which is the audience you care most about anyway, since they're the ones who watch and respond. It won't give you a precise figure. It will tell you whether overlap between two creators is negligible, moderate or large, which is enough to make a decision.",
      },
      { type: "heading", text: "Estimating unique reach", id: "unique-reach" },
      {
        type: "paragraph",
        text: "With an overlap share for each pair, you can estimate unique reach instead of adding everything up.",
      },
      {
        type: "template",
        label: "Unique reach for two and three creators",
        text: "Two creators\nUnique reach = Reach A + Reach B - Shared\nShared ≈ overlap share x the smaller of Reach A and Reach B\n\nThree creators (approximate)\nUnique ≈ A + B + C - Shared(AB) - Shared(AC) - Shared(BC) + people reached by all three\n\nHypothetical example\nReach A = 1,20,000   Reach B = 80,000   Reach C = 60,000\nOverlap AB = 30% of B   -> Shared(AB) ≈ 24,000\nOverlap AC = 10% of C   -> Shared(AC) ≈ 6,000\nOverlap BC = 25% of C   -> Shared(BC) ≈ 15,000\nReached by all three (estimate) ≈ 4,000\nUnique ≈ 2,60,000 - 45,000 + 4,000 = 2,19,000 (not 2,60,000)",
      },
      {
        type: "paragraph",
        text: "Start from reach per post, not follower counts. A creator with two lakh followers whose Reels typically reach 60,000 people contributes 60,000. Beyond three creators the arithmetic gets messy, so most teams estimate pairwise and treat the total as a range. For awareness plans, the useful question is incremental: if you add Creator D, how many genuinely new people does that bring? If the answer is small, the money may work harder elsewhere.",
      },
      { type: "heading", text: "Small and narrow markets", id: "narrow-markets" },
      {
        type: "paragraph",
        text: "Overlap runs higher wherever the audience pool is small: a single-language niche, a smaller city, a specialist hobby or a small country. The earlier version of this guide made the point about markets such as Bahrain, Kuwait and Qatar, where the popular creators in a niche often share followers, and it still holds. Plan fewer creators per niche for reach and use language and community to diversify. The same logic applies inside India: five Konkani food creators or five Coimbatore wedding photographers are likely to share a large part of their audiences.",
      },
      {
        type: "paragraph",
        text: "Frequency builds faster in these pools too. If you also run creator content as ads, plan creative rotation early so the same faces don't wear out; Kudozz's paid influencer campaigns team handles that side when brands want support.",
        links: [{ text: "paid influencer campaigns team", href: "/services/paid-influencer-campaigns" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Adding follower counts and calling the total reach.",
          "Booking the top five creators in one niche for an awareness campaign.",
          "Assuming matching demographics means matching people.",
          "Treating a tool's overlap figure as exact without knowing how it was calculated.",
          "Measuring overlap across all followers instead of followers in your target market.",
          "Testing creators whose audiences largely overlap, then trying to credit results to one of them.",
          "Adding creators to hit a reach target when the extra ones bring few new people.",
        ],
      },
      { type: "heading", text: "Before you book: five questions", id: "conclusion" },
      {
        type: "paragraph",
        text: "Overlap is neither good nor bad; it's a planning variable. Before confirming a multi-creator plan, answer five questions:",
      },
      {
        type: "list",
        items: [
          "Do we want breadth or repetition for this objective?",
          "Which pairs of creators share a niche, city or language?",
          "What does the commenter check say about those pairs?",
          "What is our estimated unique reach, based on reach per post rather than followers?",
          "Does each creator add enough new people, or a distinct role, to justify the fee?",
        ],
      },
      {
        type: "paragraph",
        text: "If the answers change the mix, change it before outreach rather than after. Deciding how many creators the campaign really needs is the natural next step, and the guide on how many influencers to book for a campaign covers shortlist sizes and backups.",
        links: [{ text: "how many influencers to book for a campaign", href: "/blog/how-many-influencers-for-a-campaign" }],
      },
    ],
    faqs: [
      {
        question: "What is influencer audience overlap?",
        answer:
          "It's the share of people who follow, or are reached by, more than one creator in the same campaign. High overlap means you're paying several times to reach the same people, which lowers unique reach and raises frequency.",
      },
      {
        question: "How can I check audience overlap without a paid tool?",
        answer:
          "Collect the commenter handles from each creator's last eight to ten posts, remove duplicates and noise, and count how many appear under more than one creator. Divide the shared handles by the smaller creator's list for a rough overlap share, then sense-check it against each creator's Insights.",
      },
      {
        question: "Is audience overlap always bad?",
        answer:
          "No. For launch moments and conversion pushes, hearing about a product from several trusted creators in a short window can help. For awareness and for testing which creator works, low overlap is usually better.",
      },
      {
        question: "Can Kudozz Discovery show audience overlap between creators?",
        answer:
          "No. Kudozz Discovery helps you find and compare Instagram creators in India and save them into lists, which makes it easier to build a longlist that's varied by niche, city and language. Overlap itself has to be estimated with methods like the ones in this guide.",
      },
      {
        question: "Do similar audience demographics mean high overlap?",
        answer:
          "Not necessarily. Two creators can both have mostly women aged 25 to 34 in Pune and still share few followers. Demographics show the audiences are similar in type; only handle-level comparisons or de-duplicated reach data show they're the same people.",
      },
    ],
  },

  // #85 influencer-content-consistency (NEW)
  {
    slug: "influencer-content-consistency",
    category: "Influencer Marketing",
    title: "How to Evaluate an Influencer's Content Consistency Before Collaborating",
    seoTitle: "Influencer Content Consistency: How to Evaluate It | Kudozz",
    excerpt:
      "One viral Reel says little about what a creator will deliver for you. Here's how to evaluate an influencer's content consistency over months, with a sampling method, warning signs and a checklist.",
    metaDescription:
      "Evaluate influencer content consistency before you collaborate: posting regularity, quality over time, recurring formats, niche drift and a review checklist.",
    author: AUTHOR,
    publishedAt: "2026-11-27",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["Influencer Content Consistency", "Influencer Vetting", "Content Analysis", "Instagram Creators"],
    related: ["influencer-content-analysis-guide", "influencer-engagement-quality", "things-to-check-before-selecting-influencers", "how-to-find-emerging-influencers"],
    hero: {
      src: "/blog/discovery/influencer-content-consistency.svg",
      alt: "Two creators' posts over twelve weeks: one steady row of similar bars around a median line, and one mostly low row with a single viral spike",
    },
    discoveryCta: {
      headline: "Find Creators With a Steady Rhythm",
      body: "Explore Kudozz Discovery to search Instagram creators in India by posting frequency, niche and engagement, compare average views on their profiles and save the steadiest candidates. Your team reviews their content in depth and handles outreach.",
    },
    body: [
      {
        type: "paragraph",
        text: "A Kolkata saree label spots a creator whose Reel about draping a Banarasi crossed a few million views. The account has 30,000 followers. The brand books her for its Puja collection, expecting something similar. The sponsored Reel performs in line with her other posts, which nobody had looked at. Nothing went wrong. The brand judged a creator on her outlier rather than her normal.",
      },
      {
        type: "paragraph",
        text: "Influencer content consistency is how reliably a creator posts, holds a quality standard, stays on topic and performs over time. It's the best predictor you have of what a collaboration will look like, because your sponsored post will usually land somewhere in that creator's normal range, not at their peak. This guide sets out what to examine, how to build a sample that covers months rather than days, the warning signs and a checklist to use on every creator.",
      },
      {
        type: "paragraph",
        text: "It goes deeper than the consistency lens in the broader guide to analysing an influencer's content, which also covers format mix, storytelling, comment themes and claims.",
        links: [{ text: "the broader guide to analysing an influencer's content", href: "/blog/influencer-content-analysis-guide" }],
      },
      { type: "heading", text: "Why one viral post isn't enough", id: "one-viral-post" },
      {
        type: "paragraph",
        text: "Viral posts come partly from the creator's skill and partly from timing, audio, the algorithm and luck. A creator can't reliably repeat them, and neither can a brand that pays for one. Three things follow:",
      },
      {
        type: "list",
        items: [
          "Judge by the median, not the best post. Sort the last 20 to 30 posts by views and look at the middle one. That's the closest thing to an honest expectation.",
          "Check what the viral post did to the account. A creator can gain followers who came for one topic and never engage again, which can make later engagement look weaker.",
          "Ask whether the viral post matches your brief. A trending-audio comedy Reel tells you little about how the same creator will explain a skincare product.",
        ],
      },
      {
        type: "paragraph",
        text: "None of this makes a viral hit a bad sign. It's a reason to look carefully at everything around it.",
      },
      { type: "heading", text: "Six dimensions of influencer content consistency", id: "six-dimensions" },
      {
        type: "table",
        headers: ["Dimension", "What to look at", "Healthy sign", "Warning sign"],
        rows: [
          ["Posting regularity", "Posts per week or month over three to six months", "A steady rhythm, even if modest", "Long silences followed by bursts"],
          ["Quality over time", "Median views and engagement month by month; weakest versus strongest posts", "A narrow gap between typical and best", "A few spikes carrying an otherwise flat feed"],
          ["Recurring formats", "Series, segments or structures the audience returns for", "Named series and a recognisable style", "Every post a different experiment with no thread"],
          ["Activity patterns", "Replies to comments, Stories between posts, posting times", "Regular replies and active Stories", "No replies, or comments switched off without a reason"],
          ["Niche focus", "Share of posts in the core topic now versus six months ago", "Gradual evolution around a clear core", "A sharp swerve into unrelated topics"],
          ["Production quality", "Sound, framing, edit and captions across the sample", "A similar standard on sponsored and organic posts", "Polished sponsored posts and careless organic ones, or the reverse"],
        ],
      },
      { type: "heading", text: "Build a sample that covers time, not just the top of the grid", id: "review-sample" },
      {
        type: "paragraph",
        text: "The top of a profile grid shows the last few weeks plus the posts the creator chose to pin. A fair consistency review needs a spread across time:",
      },
      {
        type: "list",
        items: [
          "Every post from the last 60 to 90 days, Reels and carousels included.",
          "A handful of posts from six months ago and, for larger deals, from a year ago.",
          "Every sponsored post you can find in that period, identified by paid-partnership labels or disclosure tags.",
          "Pinned posts, noted separately, since they're the creator's chosen best work.",
        ],
      },
      {
        type: "paragraph",
        text: "Log each post in a simple sheet: date, format, topic, sponsored or not, views and comments. Twenty minutes of logging turns impressions into evidence.",
      },
      { type: "heading", text: "Checking posting regularity", id: "posting-regularity" },
      {
        type: "paragraph",
        text: "Regularity matters because a creator who posts steadily keeps their audience in the habit of watching. A creator who disappears for six weeks and then posts daily may see uneven reach while the audience reconnects. Look for:",
      },
      {
        type: "list",
        items: [
          "Average posts per week over the last three months, and the longest gap.",
          "Whether gaps have an obvious reason, such as exams, a wedding or illness. A single explained break isn't a concern.",
          "Whether the rhythm survives sponsored periods, or whether organic content disappears whenever paid work arrives.",
        ],
      },
      {
        type: "paragraph",
        text: "Regularity is also the one consistency signal you can screen for at scale. Kudozz Discovery has a posting-frequency filter, so you can narrow a search of Instagram creators in India to accounts that post at a rhythm you're comfortable with, alongside niche, city, language and engagement filters. Treat it as a first screen. It tells you a creator posts often enough; it can't tell you whether quality holds, the niche is stable or the spread is healthy. That still takes the review in the sections below.",
      },
      {
        type: "discovery-cta",
        headline: "Screen Out Irregular Posters Early",
        body: "Kudozz Discovery lets you filter Instagram creators in India by posting frequency, niche, city and engagement, then save the ones worth a full review to a named list. The consistency review, outreach and final decision stay with your team.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Reading quality and performance over time", id: "quality-over-time" },
      {
        type: "paragraph",
        text: "With the sheet filled in, look for three patterns.",
      },
      { type: "subheading", text: "The spread between typical and best" },
      {
        type: "paragraph",
        text: "Compare the median post with the best one. A tight spread means a brand post is likely to land near the median. A very wide spread means a few outliers are carrying the averages, so any average views figure, including the one on a profile or in a media kit, overstates what you should expect.",
      },
      { type: "subheading", text: "The trend line" },
      {
        type: "paragraph",
        text: "Group posts by month and compare the median views. Gentle movement either way is normal. A steady decline over several months can mean audience fatigue or falling reach, while steady growth can mark a rising creator worth booking early. Spotting emerging creators covers how to judge that kind of momentum.",
        links: [{ text: "Spotting emerging creators", href: "/blog/how-to-find-emerging-influencers" }],
      },
      { type: "subheading", text: "Sponsored versus organic" },
      {
        type: "paragraph",
        text: "Line up sponsored posts against organic ones from the same weeks. Some drop is normal. You're checking whether the creator brings the same craft and care to paid work, and whether sponsored posts are so frequent that the feed reads like an ad break. How a creator has handled earlier brands is a check of its own, covered in researching an influencer's previous brand collaborations.",
        links: [{ text: "researching an influencer's previous brand collaborations", href: "/blog/influencer-previous-brand-collaborations" }],
      },
      { type: "heading", text: "Spotting niche drift", id: "niche-drift" },
      {
        type: "paragraph",
        text: "Niche drift is when a creator's subject matter moves away from what made them relevant to you. It isn't always bad. Creators grow, and a fitness creator who becomes a new parent may now be ideal for a baby-care brand. It matters when the audience you're paying for came for something the creator no longer does.",
      },
      {
        type: "paragraph",
        text: "Count the share of posts in the core topic over the last three months and compare it with the same count from six months earlier. Then read the comments on recent off-topic posts. If the audience has followed happily, the drift has carried them along. If engagement on the new topics is thin and comments ask for the old content, the creator and their audience are pulling apart.",
      },
      { type: "heading", text: "Recurring formats, activity and production", id: "recurring-formats" },
      {
        type: "paragraph",
        text: "Recurring formats are among the clearest consistency signals, because they show a creator has worked out what their audience comes back for. A Chennai home cook with a weekly Sunday tiffin series, or a Delhi tech creator who reviews one budget phone every week, has a structure your product can slot into. That makes briefing easier and results more predictable.",
      },
      {
        type: "paragraph",
        text: "Activity patterns show how present the creator is. Do they reply to comments in the first few hours? Are Stories active between posts? Do they pin useful answers? A creator who talks with their audience tends to get better conversation under sponsored posts too. Going further on comments is covered in judging engagement quality, and the formats a creator repeats feed directly into how well they'll tell your story, which is the subject of evaluating an influencer's storytelling.",
        links: [
          { text: "judging engagement quality", href: "/blog/influencer-engagement-quality" },
          { text: "evaluating an influencer's storytelling", href: "/blog/evaluate-influencer-storytelling" },
        ],
      },
      {
        type: "paragraph",
        text: "Production quality belongs in the same view. You're not looking for studio polish; many of the most trusted creators shoot on a phone. You're looking for a stable standard: clear sound, readable captions, steady framing and the same care on paid posts as on organic ones.",
      },
      { type: "heading", text: "A content consistency checklist", id: "consistency-checklist" },
      {
        type: "template",
        label: "Content consistency review",
        text: "Creator: @____   Reviewer: ____   Date: ____   Window reviewed: __ months\n\nPOSTING\n[ ] Posts per week (last 3 months): __   Longest gap: __ days (reason: ____)\n[ ] Rhythm holds during sponsored periods\n\nPERFORMANCE\n[ ] Median views: ____   Best post: ____   Spread: tight / moderate / wide\n[ ] Monthly median trend: rising / stable / declining\n[ ] Viral outliers excluded when setting expectations\n\nQUALITY\n[ ] Weakest posts still meet our minimum standard\n[ ] Sponsored posts made with the same care as organic ones\n[ ] Sound, captions and framing consistent\n\nFOCUS\n[ ] Core-topic share now: __%   Six months ago: __%\n[ ] Audience follows topic changes (comments, engagement)\n\nFORMATS AND ACTIVITY\n[ ] Recurring series or formats our product fits into\n[ ] Replies to comments; Stories active between posts\n\nVerdict: consistent / acceptable with caveats / too unpredictable\nOne-line reason: ____",
      },
      {
        type: "paragraph",
        text: "Carry the verdict into the consistency criterion of your influencer evaluation scorecard, so it sits alongside audience, engagement and fit rather than being judged on its own.",
        links: [{ text: "consistency criterion of your influencer evaluation scorecard", href: "/blog/creator-quality-score" }],
      },
      { type: "heading", text: "Mistakes brands make when judging consistency", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Booking off one viral post or the best example in a media kit.",
          "Using average views, which outliers inflate, instead of the median.",
          "Reviewing only the last two weeks of the grid.",
          "Penalising a single explained break as if it were a pattern.",
          "Mistaking polish for consistency. A creator can be polished and erratic.",
          "Ignoring niche drift because the follower count kept growing.",
          "Treating a posting-frequency filter as a full consistency check.",
        ],
      },
      { type: "heading", text: "What consistent looks like", id: "conclusion" },
      {
        type: "paragraph",
        text: "A consistent creator isn't one who never changes. It's one whose typical post is predictable enough to plan around: steady posting, a narrow gap between ordinary and best work, a clear core topic, formats the audience returns for, and the same care on paid posts as on organic ones. Review a sample spread across time, judge by the median and write down the reason for your verdict. For Reels-led briefs, finding Reels creators whose views hold up is a useful next read, and if you'd like a team to run these reviews across a large shortlist, Kudozz's Instagram influencer marketing service includes creator vetting.",
        links: [
          { text: "finding Reels creators whose views hold up", href: "/blog/find-instagram-reels-creators" },
          { text: "Instagram influencer marketing service", href: "/services/instagram-influencer-marketing" },
        ],
      },
    ],
    faqs: [
      {
        question: "What is influencer content consistency?",
        answer:
          "It's how reliably a creator posts, keeps a quality standard, stays on topic and performs over time. Brands check it because a sponsored post usually lands within a creator's normal range, so their typical post is a better guide than their best one.",
      },
      {
        question: "How many posts should I review to judge consistency?",
        answer:
          "Review every post from the last 60 to 90 days plus a few from six months ago, and from a year ago for larger deals. For an active creator that's often a few dozen posts, enough to see the median, the spread and any drift in topic.",
      },
      {
        question: "Is a viral post a good reason to hire a creator?",
        answer:
          "On its own, no. Viral posts depend partly on timing and luck, and a sponsored post rarely repeats them. Use median performance across a few months to set expectations, and treat the viral post as a signal about the creator's ideas and craft.",
      },
      {
        question: "Does Kudozz Discovery check content consistency?",
        answer:
          "Partly. Kudozz Discovery has a posting-frequency filter, so you can screen Instagram creators in India by how often they post, and profiles show average views and likes. Quality over time, niche drift and the gap between typical and best posts still need a manual review.",
      },
      {
        question: "What counts as niche drift?",
        answer:
          "Niche drift is when a creator's topics move away from what made them relevant to your brand. It's only a concern if the audience hasn't followed, so check engagement and comments on the newer topics before deciding.",
      },
    ],
  },
];
