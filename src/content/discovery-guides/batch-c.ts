import type { BlogPost } from "@/content/blog";

const AUTHOR = { name: "Kudozz Strategy Team", role: "Agency Team" };

export const discoveryBatchC: BlogPost[] = [
  // #7 how-to-research-influencers (NEW)
  {
    slug: "how-to-research-influencers",
    category: "Influencer Marketing",
    title: "How to Research Influencers Before Approaching Them for a Collaboration",
    seoTitle: "How to Research Influencers Before Outreach | Kudozz",
    excerpt:
      "What to look at before you message a creator: a content audit, past brand work, comment quality, audience signals to request, values fit, likely rates and how they prefer to be contacted.",
    metaDescription:
      "Research influencers before outreach: audit recent posts, past brand deals, comments, audience signals, values fit, rates and contact preferences.",
    author: AUTHOR,
    publishedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["Influencer Research", "Creator Discovery", "Influencer Outreach", "India"],
    related: ["influencer-shortlist", "things-to-check-before-selecting-influencers", "how-to-vet-influencers", "how-to-create-influencer-outreach-list"],
    hero: {
      src: "/blog/discovery/how-to-research-influencers.svg",
      alt: "A creator research note with six sections: content audit, past brand deals, comments, audience signals to request, values fit and contact preference",
    },
    discoveryCta: {
      headline: "Research Fewer Creators, More Carefully",
      body: "Start your research from a better list. Kudozz Discovery lets you search Instagram creators in India by niche, city, language and engagement, check each profile's averages and posting frequency, and save the ones worth a closer look into a list.",
    },
    body: [
      {
        type: "paragraph",
        text: "Most bad influencer collaborations can be traced back to the first message. The brand wrote to a creator it had seen once on Explore, pitched a product that clashed with something the creator posted last month, offered barter to someone who clearly works on paid deals, and sent the DM to an inbox the creator's manager handles. None of that is a vetting failure. It's a research failure, and it happens before anyone has checked a single metric.",
      },
      {
        type: "paragraph",
        text: "This guide covers the research you do after a creator looks promising and before you approach them: what to read, what to note down, what to ask for later, and how to turn it into a short research note your team can use. It takes 15 to 40 minutes per creator once you have a routine, and it is the cheapest way to raise your reply rate and avoid awkward pull-outs later.",
      },
      { type: "heading", text: "What influencer research covers (and what it doesn't)", id: "what-research-covers" },
      {
        type: "paragraph",
        text: "Research and vetting overlap, but they answer different questions. Vetting asks whether the creator's audience and engagement are genuine. Research asks whether this creator is a good fit for this brand and this brief, and how to approach them so the conversation starts well. If you suspect bought followers or engagement pods, that's a job for our guide on how to vet influencers before a brand collaboration. Here we assume the account is real and focus on fit and approach.",
        links: [{ text: "how to vet influencers before a brand collaboration", href: "/blog/how-to-vet-influencers" }],
      },
      {
        type: "paragraph",
        text: "Research also isn't the final selection. Once you've researched a handful of creators, the selection decision uses a fixed set of checks; we list them in 15 things to check before selecting an influencer. Research feeds that decision with evidence rather than impressions.",
        links: [{ text: "15 things to check before selecting an influencer", href: "/blog/things-to-check-before-selecting-influencers" }],
      },
      { type: "heading", text: "Step 1: Audit the last 20 to 30 posts", id: "content-audit" },
      {
        type: "paragraph",
        text: "Scroll back through roughly the last 20 to 30 posts and Reels, plus pinned posts and Story highlights. That's usually two to four months of content for an active creator, which is long enough to see patterns and short enough to stay current. Don't judge from the top grid alone: pinned posts are a creator's greatest hits, not their typical week.",
      },
      {
        type: "table",
        headers: ["What to note", "What it tells you"],
        rows: [
          ["Main topics and how often each appears", "Whether your category is core to their content or an occasional detour"],
          ["Formats: Reels, carousels, static posts, Stories", "Whether they already make the format your brief needs"],
          ["Language mix in captions and voiceovers", "Which audience they actually speak to, beyond the bio"],
          ["Tone: funny, expert, aspirational, plain-spoken", "Whether your product's voice can sit inside theirs without sounding forced"],
          ["Production style: phone-shot, edited, studio", "What kind of content you'll realistically get, and whether it suits ads"],
          ["Views on recent Reels compared with their usual", "Whether reach is steady, rising or driven by one outlier"],
        ],
      },
      {
        type: "paragraph",
        text: "Say you're a Bengaluru skincare brand looking at a creator who describes herself as \"beauty and lifestyle\". The audit shows her last 25 posts are mostly travel and cafe content with three makeup Reels. She may still be a good fit for a lifestyle angle, but she isn't the person to explain a niacinamide serum. That's a finding you want before the pitch, not after the draft arrives.",
      },
      { type: "heading", text: "Step 2: Map past brand collaborations", id: "past-collaborations" },
      {
        type: "paragraph",
        text: "Search the profile for paid partnership labels, #ad, #collab and brand tags, and open a few of the sponsored posts. You're looking for four things: which brands, how often, how the content was made, and how it was disclosed.",
      },
      {
        type: "list",
        items: [
          "Which brands: note any direct competitors and when they posted. A creator who promoted a rival serum six weeks ago is less believable for yours, and may be under exclusivity.",
          "How often: if every third post is sponsored, your post competes with a lot of other ads and the audience may have tuned out.",
          "How the product was integrated: did they actually use it, show a result, explain a downside, or just hold it up? Their past brand work is the best preview of yours.",
          "How it was disclosed: a clear label at the start of the caption or on the video, or a hashtag buried under twenty others? Under ASCI's guidelines, paid, gifted and other material connections need to be disclosed prominently, so poor habits here become your brand's problem too.",
        ],
      },
      {
        type: "paragraph",
        text: "Also compare engagement on sponsored posts with their organic posts. A big drop is common and not a dealbreaker, but a creator whose sponsored posts hold up well usually knows how to make brand content feel like their own. For the rules on labels and responsibility, see our influencer marketing compliance guide.",
        links: [{ text: "influencer marketing compliance guide", href: "/blog/influencer-marketing-compliance" }],
      },
      { type: "heading", text: "Step 3: Read the comments, not just the count", id: "comment-quality" },
      {
        type: "paragraph",
        text: "Open the comments on five or six recent posts, including at least one sponsored post. A healthy comment section has specific reactions (\"which shade is this?\", \"does this work for oily skin?\", \"where in Indiranagar is this?\"), replies from the creator, and conversations between followers. Warning signs are walls of emoji, generic \"nice pic\" comments from accounts with no posts, and the same handful of names on every post.",
      },
      {
        type: "paragraph",
        text: "Comments are also free market research. If followers keep asking the creator about price, sizes or delivery to their city, you learn what your own brief needs to answer. Our piece on influencer engagement quality goes deeper on separating real conversation from noise.",
        links: [{ text: "influencer engagement quality", href: "/blog/influencer-engagement-quality" }],
      },
      { type: "heading", text: "Step 4: Know which audience signals to request", id: "audience-signals" },
      {
        type: "paragraph",
        text: "Public metrics tell you about content performance. They don't tell you who the audience is. A creator in Mumbai can have most of their followers in Delhi, Dubai or nowhere you deliver. You can only see that from the creator's own insights, so research is about knowing what to ask for once a conversation starts.",
      },
      {
        type: "list",
        items: [
          "Top cities and top countries of followers",
          "Age range and gender split of followers",
          "Reach and views on their last 5 to 10 Reels, not just the best one",
          "Average Story views over a recent week, if Stories are part of the deal",
          "Follower growth over the last few months",
          "Results from a past brand collaboration in your category, if they're willing to share",
        ],
      },
      {
        type: "paragraph",
        text: "Ask for dated screenshots straight from Instagram's insights, and note the date in your research note. Before you ask, write down what you'd expect to see. If you sell only in Kerala and expect most followers in South India, you'll know immediately whether the screenshot confirms or kills the fit.",
      },
      {
        type: "discovery-cta",
        headline: "Decide Who Deserves a Full Content Audit",
        body: "Kudozz Discovery shows each Instagram creator's average likes, comments and views, engagement rate with a quality label and posting frequency, so you can pick which creators are worth 30 minutes of research before you start scrolling.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Step 5: Check values and brand-safety fit", id: "values-fit" },
      {
        type: "paragraph",
        text: "This is the part most teams skip, and the part that causes the most public embarrassment. You're not looking for a perfect person. You're looking for anything that would make the partnership look wrong to your customers.",
      },
      {
        type: "list",
        items: [
          "Past controversies, call-outs or apologies (search their name with words like \"controversy\" or \"apology\")",
          "Strong positions that contradict your brand's stance, such as a creator who mocks the exact category you sell",
          "Content themes your audience would object to, such as alcohol for a kids' brand or crash diets for a wellness brand",
          "How they handle criticism in their comments: calmly, defensively or not at all",
          "Claims they've made in past sponsored content that you couldn't legally make yourself",
        ],
      },
      {
        type: "paragraph",
        text: "Record what you found and leave the judgement to whoever owns the brand. A Jaipur block-print label and a fast-fashion haul account may have the same follower count, but one of them will undercut a \"slow fashion\" message however good the content is. For a fuller framework, read influencer brand safety for brands.",
        links: [{ text: "influencer brand safety for brands", href: "/blog/influencer-marketing-brand-safety" }],
      },
      { type: "heading", text: "Step 6: Estimate rate expectations", id: "rate-expectations" },
      {
        type: "paragraph",
        text: "You won't know a creator's fee until you ask, but you can avoid insulting offers. Look for signals: a \"for paid collabs\" email in the bio, a manager listed, frequent sponsored posts from well-funded brands, and polished production all suggest a creator who works on paid deals. A smaller creator who has recently done gifted posts with local brands may be open to barter or a modest fee for the right product.",
      },
      {
        type: "paragraph",
        text: "Note your estimate as a range and mark it clearly as an estimate. It helps you decide whether to approach them for this budget at all, and what kind of offer to open with. Instagram influencer rates in India covers typical pricing factors so your range is grounded.",
        links: [{ text: "Instagram influencer rates in India", href: "/blog/instagram-influencer-rates-india" }],
      },
      { type: "heading", text: "Step 7: Find out how they prefer to be contacted", id: "contact-preference" },
      {
        type: "paragraph",
        text: "Creators usually tell you how they want to be approached; most brands just don't read it. Check the bio, the link in bio and highlights for any of these: a business email, a \"DM for collabs\" line, a manager or talent agency, or a collaboration form. If a manager is listed, a DM to the creator often gets redirected or ignored. If the bio says email only, a DM looks like you didn't look.",
      },
      {
        type: "paragraph",
        text: "Also note the language and register to use. A Kochi cafe approaching a Malayalam food creator may get a warmer reply with a message that respects that, rather than a generic English template. Our guide on how to contact influencers covers channels and timing once your research is done.",
        links: [{ text: "how to contact influencers", href: "/blog/how-to-contact-influencers" }],
      },
      { type: "heading", text: "Step 8: Write a research note", id: "research-note" },
      {
        type: "paragraph",
        text: "Everything above is wasted if it lives in one person's head. Keep a short note per creator, in the same format every time, so a colleague can pick it up, a manager can approve from it and outreach can personalise from it.",
      },
      {
        type: "template",
        label: "Creator research note",
        text: "Creator: @handle | Instagram link | Date researched | Researched by\n\nContent audit (last 20–30 posts): main topics, formats, language, tone\nFits our brief because: (one line)\nPast brand work: brands, dates, competitor conflicts, disclosure quality\nComment quality: specific / mixed / generic, with one example\nAudience signals to request: cities, age, gender, Reel reach (dated)\nValues and brand-safety notes: anything the brand owner should see\nRate expectation: barter / low / mid / high (estimate)\nPreferred contact: email / DM / manager / form, plus language\nPersonalisation hook: one specific post or detail to mention\nStatus: research done / ready for outreach / parked (reason)",
      },
      {
        type: "paragraph",
        text: "The personalisation hook is the line that pays for the research. A message that mentions a specific Reel, and why it relates to your product, reads very differently from \"we love your content\". Personalised influencer outreach has examples of how to use it. If your notes live in a shared sheet, they also become the columns of an influencer outreach list your team can actually work from.",
        links: [{ text: "influencer outreach list", href: "/blog/how-to-create-influencer-outreach-list" }],
      },
      { type: "heading", text: "How much research is enough?", id: "research-depth" },
      {
        type: "paragraph",
        text: "Match the depth of research to the size of the commitment. A rule of thumb many teams use:",
      },
      {
        type: "table",
        headers: ["Commitment", "Research depth", "Rough time per creator"],
        rows: [
          ["Product seeding with no obligation to post", "Content audit and values check", "10–15 minutes"],
          ["Single paid post or Reel", "All eight steps, light on rate research", "20–30 minutes"],
          ["Multi-post deal, usage rights or ambassador role", "All eight steps plus audience screenshots before contract", "40 minutes or more"],
        ],
      },
      {
        type: "paragraph",
        text: "Research also works best on a short list rather than a long one. Narrow the field first with filters for niche, location and engagement, then research only the creators who pass. Our step-by-step guide to shortlisting influencers shows where research sits in that funnel. If you'd rather hand the whole process to a team, Kudozz's creator discovery service delivers researched shortlists with a written rationale for each creator.",
        links: [
          { text: "step-by-step guide to shortlisting influencers", href: "/blog/influencer-shortlist" },
          { text: "creator discovery service", href: "/services/creator-discovery" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Judging from the top nine posts or the pinned posts only.",
          "Treating follower count or engagement rate as research. They're starting points that tell you where to look.",
          "Skipping past sponsored posts, which show exactly how your collaboration is likely to turn out.",
          "Not checking competitor collaborations until the creator mentions exclusivity in negotiation.",
          "Asking for audience data without knowing what answer you need.",
          "Ignoring the contact instructions in the bio.",
          "Keeping research in private notes, so the next campaign starts from zero.",
        ],
      },
      { type: "heading", text: "Final thoughts", id: "conclusion" },
      {
        type: "paragraph",
        text: "Good influencer research is unglamorous: reading posts, opening comments, checking old collaborations and writing a few honest lines. It is also the difference between a pitch that gets a considered reply and one that gets ignored. Audit the content, map past brand work, read the comments, know what audience data to ask for, check values, estimate the rate, respect contact preferences and write it all down. Do that for a small number of well-chosen creators and your outreach will be shorter, warmer and far more likely to turn into a collaboration worth running.",
      },
    ],
    faqs: [
      {
        question: "Can I research influencers without contacting them?",
        answer:
          "Yes, for most of it. Content, past collaborations, comments, values and contact preferences are all visible on the public profile. Audience details such as top cities and age split come from the creator's own insights, so you'll need to ask for those once a conversation has started.",
      },
      {
        question: "Is a high engagement rate enough to shortlist a creator?",
        answer:
          "No. Engagement rate is a useful signal for deciding who to research, but it doesn't show who the audience is or whether the comments are genuine conversation. Treat it as a filter, then read the content and comments before deciding.",
      },
      {
        question: "Should I research a creator's personal life?",
        answer:
          "Stick to what they publish and what is publicly reported about their work. You're checking whether their public content and statements fit your brand, not investigating them as a person. Keep notes factual and professional, since creators may one day see how they were described.",
      },
      {
        question: "What if a creator has worked with a competitor?",
        answer:
          "It depends on timing and terms. A collaboration a year ago is rarely a problem; one last month may come with an exclusivity clause and will look less credible to their audience. Note the date and ask about exclusivity early in the conversation.",
      },
      {
        question: "How do I research creators who post in regional languages I don't speak?",
        answer:
          "Ask a colleague who speaks the language to review a few posts and the comments, or use auto-translated captions only as a rough guide. Tone, humour and comment quality are easy to misread through translation, so a native speaker's ten-minute review is worth it.",
      },
    ],
  },

  // #8 influencer-shortlist (UPGRADE)
  {
    slug: "influencer-shortlist",
    category: "Influencer Marketing",
    title: "How to Shortlist Influencers for a Brand Campaign: A Step-by-Step Guide",
    seoTitle: "How to Shortlist Influencers: Step-by-Step Guide | Kudozz",
    excerpt:
      "A practical process for turning a long list of possible creators into a ranked, approved shortlist: criteria first, hard gates, weighted scoring, tiers, backups and a quick stakeholder review.",
    metaDescription:
      "Shortlist influencers step by step: set criteria, build a longlist, apply hard gates, score with weights, rank into tiers, name backups and get fast approval.",
    author: AUTHOR,
    publishedAt: "2026-09-30",
    updatedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: ["Influencer Shortlisting", "Creator Discovery", "Influencer Selection", "Campaign Planning"],
    related: ["how-to-research-influencers", "things-to-check-before-selecting-influencers", "influencer-discovery-checklist", "how-to-create-influencer-outreach-list"],
    hero: {
      src: "/blog/discovery/influencer-shortlist.svg",
      alt: "Influencer shortlisting scorecard: weighted criteria scored for each creator, sorted into priority, reserve and out",
    },
    discoveryCta: {
      headline: "Build Your Longlist in One Place",
      body: "Kudozz Discovery lets you filter Instagram creators in India by niche, city, language, follower band and engagement, then save candidates into a named list for each campaign, so your scoring starts from a relevant longlist instead of a pile of screenshots.",
    },
    body: [
      {
        type: "paragraph",
        text: "If your shortlist is a spreadsheet of handles sorted by follower count, it isn't a shortlist yet. It's a longlist with a nicer title. A real shortlist is small, ranked and explained: every creator on it has passed the same checks, earned a score against the same criteria and comes with a backup in case they say no. That's what lets a decision-maker approve it in one sitting instead of three weeks of \"can we see a few more options?\"",
      },
      {
        type: "paragraph",
        text: "Here is the process we use, step by step, with a scorecard you can copy.",
      },
      { type: "heading", text: "The shortlisting funnel at a glance", id: "the-funnel" },
      {
        type: "table",
        headers: ["Stage", "What happens", "Rough size (rule of thumb)"],
        rows: [
          ["Criteria", "Agree what a good creator looks like for this brief", "Before any names"],
          ["Longlist", "Collect every plausible creator from search, tools and referrals", "Around 5 to 10 times the number you need"],
          ["Gated list", "Remove anyone who fails a non-negotiable rule", "Roughly half the longlist, often less"],
          ["Scored shortlist", "Score the survivors and rank them", "About 1.5 to 2 times the number you need"],
          ["Final picks and backups", "Confirm availability and fees; name a reserve for each slot", "The number you need, plus backups"],
        ],
      },
      {
        type: "paragraph",
        text: "These ratios are planning guides, not targets. A narrow brief, such as Marathi-speaking parenting creators in Pune, needs a wider longlist because fewer creators pass. A broad national brief can work with a tighter one.",
      },
      { type: "heading", text: "Step 1: Set criteria before you see any names", id: "set-criteria" },
      {
        type: "paragraph",
        text: "The most common reason shortlists stall is that criteria are invented during the review. Someone likes a creator's vibe, someone else wants bigger names, and the list gets rebuilt. Agree two kinds of criteria with the decision-maker first:",
      },
      {
        type: "list",
        items: [
          "Gates: yes/no rules a creator must pass to be considered at all, such as posting in Hindi, living in or audience concentrated in your delivery cities, no competitor collaboration in the last 90 days, and content suitable for your category.",
          "Scored criteria: qualities you compare across creators who passed, such as niche fit, content quality, engagement quality, audience match, reliability and expected cost.",
        ],
      },
      {
        type: "paragraph",
        text: "Write both into the campaign brief. If they're in the brief, stakeholders have already agreed to them before the first name appears, and the review becomes a check on how well you applied them.",
      },
      { type: "heading", text: "Step 2: Build the longlist", id: "build-longlist" },
      {
        type: "paragraph",
        text: "Pull from more than one source so the list isn't biased towards whoever appears first in a hashtag search: platform search and hashtags, creators already tagging your brand or competitors, past creators in your own records, referrals from creators you trust, and a discovery tool. Our guides to finding the right influencers for your brand in India and finding Instagram influencers for a campaign cover these routes in depth.",
        links: [
          { text: "finding the right influencers for your brand in India", href: "/blog/find-indian-influencers" },
          { text: "finding Instagram influencers for a campaign", href: "/blog/how-to-find-instagram-influencers" },
        ],
      },
      {
        type: "paragraph",
        text: "At this stage collect only what's cheap to collect: handle, profile link, niche, city, language, follower band, a rough idea of average views and engagement, and where you found them. Don't research anyone in depth yet. A discovery tool helps here because the filters do the first pass for you: in Kudozz Discovery, for example, you can filter Instagram creators by niche, state, city, language, follower band and minimum engagement rate, then save the results into a list named after the campaign.",
      },
      { type: "heading", text: "Step 3: Apply the hard gates", id: "hard-gates" },
      {
        type: "paragraph",
        text: "Go through the longlist and remove anyone who fails a gate. This should be fast: a minute or two per creator. Record the reason for every removal in a single word or phrase (\"language\", \"competitor deal\", \"inactive\"). That record stops the same names coming back next campaign and shows stakeholders the list wasn't trimmed on taste.",
      },
      {
        type: "list",
        items: [
          "Not active: no posts in the last few weeks, or posting too rarely to deliver in your window.",
          "Wrong language or region for the brief.",
          "Recent competitor collaboration or likely exclusivity.",
          "Content or past statements that conflict with your brand values.",
          "Clear signs of inauthentic growth or engagement, which our guide on how to vet influencers explains how to spot.",
        ],
      },
      {
        type: "paragraph",
        text: "Creators who pass the gates are the ones worth researching properly. The research itself (content audit, past brand work, comment quality, likely rates) is covered in how to research influencers before approaching them.",
        links: [{ text: "how to research influencers before approaching them", href: "/blog/how-to-research-influencers" }],
      },
      { type: "heading", text: "Step 4: Score what's left with weights", id: "scoring" },
      {
        type: "paragraph",
        text: "Score each surviving creator from 1 to 5 on each criterion, multiply by the weight and add up. Weights should reflect the campaign objective, which is why they're set before scoring. The table below shows how weights might shift by objective. Treat these as starting points to adjust, not a formula.",
      },
      {
        type: "table",
        headers: ["Criterion", "Awareness", "Sales or conversions", "Content for ads"],
        rows: [
          ["Niche and brand fit", "20%", "20%", "15%"],
          ["Audience match (location, language, age)", "25%", "25%", "10%"],
          ["Engagement quality (comments, saves, replies)", "15%", "20%", "10%"],
          ["Content quality and format fit", "15%", "10%", "35%"],
          ["Reach consistency (typical views, not best views)", "15%", "10%", "5%"],
          ["Reliability and professionalism", "10%", "15%", "25%"],
        ],
      },
      {
        type: "paragraph",
        text: "Keep cost out of the quality score and show it alongside instead. Otherwise a cheap, mediocre creator can outrank an excellent one, and the decision-maker can't see the trade-off. Score with evidence: link the posts or screenshots that justify each score so a reviewer can check your reasoning.",
      },
      {
        type: "discovery-cta",
        headline: "Score Creators From a Cleaner Longlist",
        body: "Scoring is only as good as the longlist behind it. Niche, city, language, follower band and minimum engagement rate are filters in Kudozz Discovery, so fewer Instagram creators fail your gates before you score anyone by hand.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      {
        type: "template",
        label: "Shortlist scorecard (one row per creator)",
        text: "Creator | Profile link | Niche | City | Language | Follower band\nFit (1–5) | Audience (1–5) | Engagement quality (1–5) | Content (1–5) | Reach consistency (1–5) | Reliability (1–5)\nWeighted score | Estimated fee range | Role (reach / trust / content / regional)\nWhy they fit (one line) | Risks or open questions | Tier (priority / reserve / out) | Backup for slot",
      },
      {
        type: "paragraph",
        text: "If several creators in the same city and niche score well, check how much their audiences overlap before you pick them all; influencer audience overlap explains how to estimate it.",
        links: [{ text: "influencer audience overlap", href: "/blog/influencer-audience-overlap" }],
      },
      { type: "heading", text: "Step 5: Sort into tiers and roles", id: "tiers" },
      {
        type: "paragraph",
        text: "A ranked list is not yet a plan. Sort creators into three decision tiers: priority (approach first), reserve (approach if a priority creator declines) and out (with the reason). Then look at the mix of the priority tier as a whole. A good shortlist usually has a deliberate blend of roles rather than ten versions of the same creator.",
      },
      {
        type: "list",
        items: [
          "Reach creators: larger accounts that put the brand in front of many people quickly.",
          "Trust creators: smaller, specialist accounts whose followers ask them for recommendations.",
          "Content creators: people whose videos you can reuse in ads and on product pages, with usage rights agreed.",
          "Regional voices: creators who speak the language of a priority market.",
        ],
      },
      {
        type: "paragraph",
        text: "Follower size matters here mainly as a proxy for role and cost. Micro vs macro influencers covers the trade-offs, and influencer ranking covers how to order creators within each tier.",
        links: [
          { text: "Micro vs macro influencers", href: "/blog/micro-vs-macro-influencers" },
          { text: "influencer ranking", href: "/blog/influencer-ranking" },
        ],
      },
      { type: "heading", text: "Step 6: Name a backup for every slot", id: "backups" },
      {
        type: "paragraph",
        text: "Some creators will decline, quote beyond budget, be unavailable in your window or go quiet. Without backups, each of those restarts the approval process. Assign a named reserve to each priority slot, ideally with a similar role, region and cost, and get the reserves approved in the same review. Then a decline becomes a quick swap rather than another meeting.",
      },
      {
        type: "paragraph",
        text: "Backups also protect your timeline. If you're working to a fixed launch or festive date, the influencer marketing campaign timeline shows how shortlist approval and outreach fit into the weeks you have.",
        links: [{ text: "influencer marketing campaign timeline", href: "/blog/influencer-marketing-campaign-timeline" }],
      },
      { type: "heading", text: "Step 7: Run a fast stakeholder review", id: "stakeholder-review" },
      {
        type: "list",
        items: [
          "Send the scorecard as a pre-read a day before, with the criteria and weights at the top.",
          "Name one decision-maker. Others can comment before the meeting, not veto after it.",
          "Review the priority tier and the backups together; don't reopen the gates unless a rule was wrong.",
          "Discuss exceptions explicitly: if someone wants a creator who scored low, record why.",
          "Agree a turnaround. Shortlist approval is one of the most common hidden delays in a campaign.",
        ],
      },
      {
        type: "template",
        label: "Decision log",
        text: "Creator | Stage reached (gate / scored / final) | Decision (priority / reserve / out) | Reason or rule | Evidence link | Decided by | Date",
      },
      {
        type: "paragraph",
        text: "Once approved, the shortlist becomes the input for outreach. How to create an influencer outreach list shows how to carry the same rows forward with contact details, status and owner.",
        links: [{ text: "How to create an influencer outreach list", href: "/blog/how-to-create-influencer-outreach-list" }],
      },
      { type: "heading", text: "A worked example", id: "worked-example" },
      {
        type: "paragraph",
        text: "Say a Jaipur block-print label wants six creators for a festive collection, mostly selling to women in Rajasthan, Gujarat and Delhi NCR. Gates agreed in the brief: Hindi or Hinglish content, fashion or lifestyle as a core niche, no fast-fashion haul content in the last two months, and at least weekly posting. The team pulls 60 names from search, competitor tags and a discovery tool. Gates remove 34, mostly for posting frequency and haul content. Research and scoring on the remaining 26 produces 9 priority creators and 5 reserves. Since the goal is sales, audience match and engagement quality carry the most weight. Two priority creators decline over dates; their named reserves step in the same day without another review.",
      },
      {
        type: "paragraph",
        text: "If you'd rather not run this in-house, Kudozz's creator discovery service delivers shortlists in this format, with a written reason for each creator.",
        links: [{ text: "creator discovery service", href: "/services/creator-discovery" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Sorting by follower count and calling it a shortlist.",
          "Inventing criteria in the review meeting instead of the brief.",
          "Researching every longlisted creator in depth, when gates would have removed half of them in minutes.",
          "Mixing cost into the quality score, which hides the trade-off from the decision-maker.",
          "No backups, so one decline sends the list back for approval.",
          "Ten similar creators with overlapping audiences in the priority tier.",
          "No written reasons, so nobody remembers next quarter why a creator was dropped.",
        ],
      },
      { type: "heading", text: "Bringing it together", id: "conclusion" },
      {
        type: "paragraph",
        text: "Shortlisting is a funnel with rules. Set gates and weighted criteria before you look at anyone, build a broad longlist from several sources, remove failures quickly, research and score the survivors with evidence, sort them into tiers with a deliberate mix of roles, and name a backup for every slot. Present it as a scorecard with one decision-maker and a decision log, and approval stops being the slowest part of your campaign.",
      },
    ],
    faqs: [
      {
        question: "How many influencers should be on a shortlist?",
        answer:
          "As a planning guide, about one and a half to two times the number of creators you need, plus named backups. Niche or regional briefs may need more, because more creators will decline or fall out on availability.",
      },
      {
        question: "Should a shortlist include creators of different sizes?",
        answer:
          "Usually yes, but choose by role rather than size. Decide what you need (reach, trust, reusable content, regional coverage) and pick the creators who do each job best. Size then follows from the role.",
      },
      {
        question: "Who should approve an influencer shortlist?",
        answer:
          "One named decision-maker, typically the brand or marketing lead who owns the campaign budget. Others, such as founders, product or legal, should give input on the criteria and the pre-read, not veto after the meeting.",
      },
      {
        question: "Can I reuse a shortlist for the next campaign?",
        answer:
          "Partly. Creators who performed well and reserves who never got used are a strong starting point, but re-check activity, recent brand deals and fit against the new brief. Audiences and content shift over a few months.",
      },
      {
        question: "What's the difference between shortlisting and vetting?",
        answer:
          "Vetting checks whether a creator's audience and engagement are genuine and the account is safe to work with. Shortlisting is the wider process of choosing which vetted creators best fit this campaign, ranking them and preparing them for approval.",
      },
    ],
  },

  // #9 things-to-check-before-selecting-influencers (NEW)
  {
    slug: "things-to-check-before-selecting-influencers",
    category: "Influencer Marketing",
    title: "15 Things to Check Before Selecting an Influencer for Your Brand",
    seoTitle: "15 Things to Check Before Selecting an Influencer",
    excerpt:
      "A 15-point evaluation for the final decision on a creator, grouped into audience, content, performance, professionalism, and commercial and compliance checks, with where to find each answer.",
    metaDescription:
      "Evaluate influencers with 15 checks across audience, content, performance, professionalism, disclosure, exclusivity and rates before you commit budget.",
    author: AUTHOR,
    publishedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: ["Influencer Evaluation", "Influencer Selection", "Creator Discovery", "ASCI"],
    related: ["how-to-research-influencers", "influencer-shortlist", "how-to-vet-influencers", "how-to-choose-the-right-influencer-for-your-brand"],
    hero: {
      src: "/blog/discovery/things-to-check-before-selecting-influencers.svg",
      alt: "A 15-point influencer evaluation grid grouped into audience, content, performance, professionalism, and commercial and compliance checks",
    },
    discoveryCta: {
      headline: "Start Your Checks With the Right Creators",
      body: "Several of these checks begin with numbers you can see before you ever message a creator. Kudozz Discovery shows Instagram creators' averages, engagement rate, posting frequency, niches, languages and city, so you spend your evaluation time on creators who already look relevant.",
    },
    body: [
      {
        type: "paragraph",
        text: "Before you commit budget to a creator, can you answer fifteen plain questions about them? Not \"are they popular\" or \"do we like their feed\", but specific things like where their followers live, how they disclosed their last paid post and whether they've just signed with your competitor. If you can't, you're selecting on instinct.",
      },
      {
        type: "paragraph",
        text: "This list is for the selection decision itself: the point where a creator has been found, researched and scored, and someone has to say yes. It is deliberately specific. Use it alongside our guides on researching influencers before outreach (which covers how to gather the evidence) and shortlisting influencers step by step (which covers ranking many creators against each other).",
        links: [
          { text: "researching influencers before outreach", href: "/blog/how-to-research-influencers" },
          { text: "shortlisting influencers step by step", href: "/blog/influencer-shortlist" },
        ],
      },
      { type: "heading", text: "How to use these 15 checks", id: "how-to-use" },
      {
        type: "paragraph",
        text: "Treat each check as pass, concern or fail. A single fail on audience location or compliance should usually rule a creator out. Two or three concerns elsewhere are normal; write them down and decide whether they matter for this brief. Some checks use public data you can see on the profile or in a discovery tool. Others need the creator to share screenshots or answer a question, so you'll complete them during the first conversation rather than before it.",
      },
      { type: "heading", text: "Audience checks", id: "audience-checks" },
      { type: "subheading", text: "1. Their audience lives where you sell" },
      {
        type: "paragraph",
        text: "A creator based in Bengaluru may have most of their followers in Hyderabad, the Gulf or spread thinly across the country. If you deliver only to certain pin codes or run a single store, this is the most important check on the list. Ask for a dated screenshot of top cities and countries from their Instagram insights. The creator's own city is a starting clue, not an answer.",
      },
      { type: "subheading", text: "2. Their audience speaks the language of your campaign" },
      {
        type: "paragraph",
        text: "Look at the language of captions, voiceovers and, more tellingly, comments. A creator who posts in English but gets most comments in Tamil may be a strong fit for a Chennai campaign. One who posts in Hinglish with comments mostly in English may skew more urban than you expect.",
      },
      { type: "subheading", text: "3. Their audience is at the right life stage" },
      {
        type: "paragraph",
        text: "A college-age audience and a new-parent audience behave very differently, even inside the same niche. Ask for the age split and check it against who actually buys your product. A premium skincare brand priced for working professionals gains little from a following that is mostly under 20, however engaged.",
      },
      { type: "heading", text: "Content checks", id: "content-checks" },
      { type: "subheading", text: "4. Your category is core to their content" },
      {
        type: "paragraph",
        text: "Count how many of their last 20 to 30 posts touch your category. If it's most of them, their audience follows them for exactly what you sell. If it's two, a sponsored post will feel like a detour, and their audience will treat it as one.",
      },
      { type: "subheading", text: "5. Their format and production fit what you need" },
      {
        type: "paragraph",
        text: "If your brief needs talking-head demos, a creator who only makes aesthetic static flat-lays is the wrong pick, however good the flat-lays are. If you plan to run the content as ads, look for clear audio, good lighting and strong first seconds. Check that they already make the format you're paying for.",
      },
      { type: "subheading", text: "6. They can talk about a product without sounding like an ad" },
      {
        type: "paragraph",
        text: "Open three of their past sponsored posts. Do they show real use, explain why they chose the product, mention a limitation? Or do they read out brand copy? Past sponsored content is the closest preview you'll get of yours. Our influencer content quality check covers what good branded content looks like in more detail.",
        links: [{ text: "influencer content quality check", href: "/blog/influencer-content-quality-check" }],
      },
      { type: "heading", text: "Performance checks", id: "performance-checks" },
      { type: "subheading", text: "7. Engagement rate makes sense for their size and niche" },
      {
        type: "paragraph",
        text: "Engagement rate tends to fall as accounts grow, and it varies by niche and format, so compare creators against similar accounts rather than a single number from the internet. An unusually high rate isn't automatically good; a sudden jump can mean a viral post or something less genuine. How to read and calculate it is in our influencer engagement rate guide.",
        links: [{ text: "influencer engagement rate guide", href: "/blog/influencer-engagement-rate" }],
      },
      { type: "subheading", text: "8. Typical views, not best views" },
      {
        type: "paragraph",
        text: "One Reel with millions of views can make a profile look far bigger than it is. Look at the spread across the last 10 or so Reels and work with the typical number. That is what your post is most likely to get, and it's the number to use when you judge whether the fee is reasonable.",
      },
      { type: "subheading", text: "9. Comments show real conversation" },
      {
        type: "paragraph",
        text: "Specific questions, replies from the creator and back-and-forth between followers are good signs. Generic praise from accounts with no posts, identical emoji strings and the same few names on every post are concerns. If comments look manufactured, run the deeper checks in how to vet influencers before going further.",
        links: [{ text: "how to vet influencers", href: "/blog/how-to-vet-influencers" }],
      },
      { type: "subheading", text: "10. They post consistently and grow steadily" },
      {
        type: "paragraph",
        text: "Regular posting means an active audience and a creator who can deliver to schedule. Gaps of several weeks, or follower jumps with no viral post to explain them, need a question. Steady growth isn't required, but unexplained spikes are worth asking about.",
      },
      {
        type: "discovery-cta",
        headline: "See Checks 7, 8 and 10 Before You Reach Out",
        body: "Kudozz Discovery shows each Instagram creator's engagement rate with a quality label, average views, likes and comments, and posting frequency, and lets you filter by minimum values, so performance checks start before the first message.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      {
        type: "paragraph",
        text: "These numbers are signals, not proof. A strong engagement label tells you a creator's posts get interaction; it doesn't tell you who is interacting or whether they'd buy. That's why checks 1 to 3 still need the creator's own insights.",
      },
      { type: "heading", text: "Professionalism checks", id: "professionalism-checks" },
      { type: "subheading", text: "11. They communicate clearly and on time" },
      {
        type: "paragraph",
        text: "How the first few messages go is a fair preview of the whole collaboration. Do they reply within a reasonable time, answer what you asked, share rates and screenshots when requested and ask sensible questions about the brief? A creator who is vague about deliverables now will be vague about deadlines later.",
      },
      { type: "subheading", text: "12. They have a track record of delivering" },
      {
        type: "paragraph",
        text: "Ask how they handle drafts, revisions and posting dates, and whether you can speak to a brand they've worked with recently. Check that past sponsored posts went live as complete posts with the brand tagged properly. For larger deals, a quick reference call with another brand manager is normal and usually welcomed by professional creators.",
      },
      { type: "heading", text: "Commercial and compliance checks", id: "commercial-compliance-checks" },
      { type: "subheading", text: "13. They disclose paid and gifted content properly" },
      {
        type: "paragraph",
        text: "In India, ASCI's guidelines expect influencers to disclose material connections with a brand, including payment, free products and other benefits, using a clear label that the audience can't miss, placed upfront rather than hidden in a pile of hashtags. Look at how this creator has labelled past collaborations. If they habitually hide or skip disclosure, that becomes your brand's compliance risk. Our influencer marketing compliance guide sets out what brands should check and put in the contract.",
        links: [{ text: "influencer marketing compliance guide", href: "/blog/influencer-marketing-compliance" }],
      },
      { type: "subheading", text: "14. No conflicting brand deals or exclusivity" },
      {
        type: "paragraph",
        text: "Check their recent sponsored posts for competitors and ask directly whether they're under any category exclusivity. A creator who promoted a rival protein bar three weeks ago will look less credible recommending yours, and may be contractually unable to. If you need exclusivity yourself, raise it now, because it affects price. Influencer exclusivity explains how to scope it.",
        links: [{ text: "Influencer exclusivity", href: "/blog/influencer-exclusivity" }],
      },
      { type: "subheading", text: "15. Their rate and terms fit your budget and plans" },
      {
        type: "paragraph",
        text: "Compare the quoted fee to the typical views and the deliverables, not to follower count. Confirm what's included: number of posts and Stories, revisions, usage rights if you want to run the content as ads, and payment terms. A creator who is a great fit but needs three times your budget isn't a selection; they're a negotiation, or a creator for a different campaign. How much to pay influencers covers the factors behind fees.",
        links: [{ text: "How much to pay influencers", href: "/blog/how-much-to-pay-influencers" }],
      },
      { type: "heading", text: "The 15 checks on one page", id: "summary-table" },
      {
        type: "table",
        headers: ["#", "Check", "Where you find the answer", "Fail means"],
        rows: [
          ["1", "Audience location", "Creator's insights screenshot", "Usually out"],
          ["2", "Audience language", "Captions, voiceovers, comments", "Out for language-led briefs"],
          ["3", "Audience age and life stage", "Creator's insights screenshot", "Concern or out"],
          ["4", "Category is core content", "Last 20–30 posts", "Concern"],
          ["5", "Format and production fit", "Recent Reels and posts", "Out if format is essential"],
          ["6", "Natural sponsored content", "Past sponsored posts", "Concern"],
          ["7", "Engagement rate in context", "Profile metrics, discovery tool", "Concern; investigate"],
          ["8", "Typical views", "Last 10 Reels", "Re-price or out"],
          ["9", "Comment quality", "Comments on recent posts", "Out if manufactured"],
          ["10", "Posting consistency and growth", "Profile history, discovery tool", "Concern; ask"],
          ["11", "Communication", "First messages", "Concern"],
          ["12", "Delivery track record", "Past posts, references", "Concern or out"],
          ["13", "Disclosure habits", "Past sponsored posts", "Out unless fixed in contract"],
          ["14", "Conflicts and exclusivity", "Recent posts, direct question", "Usually out"],
          ["15", "Rate and terms fit", "Quote and deliverables", "Negotiate or out"],
        ],
      },
      {
        type: "paragraph",
        text: "If you want a ready-made weighted version for comparing creators, the selection scorecard in how to choose the right influencer for your brand pairs well with this list.",
        links: [{ text: "how to choose the right influencer for your brand", href: "/blog/how-to-choose-the-right-influencer-for-your-brand" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Running checks 7 and 8 only, because they're visible, and skipping the audience checks that need a conversation.",
          "Assuming a creator's audience lives in the creator's city.",
          "Judging reach by the best Reel on the profile.",
          "Treating disclosure as the creator's problem. It reflects on your brand too.",
          "Asking about exclusivity after the fee is agreed.",
          "Letting one great check (beautiful content, say) outweigh a clear fail on audience or compliance.",
          "Not writing the results down, so the next person repeats the same checks.",
        ],
      },
      {
        type: "paragraph",
        text: "If you'd rather have a team run these checks for you, Kudozz's influencer marketing service handles evaluation, selection and contracts as part of the campaign.",
        links: [{ text: "influencer marketing service", href: "/services/influencer-marketing" }],
      },
      { type: "heading", text: "Final thoughts", id: "conclusion" },
      {
        type: "paragraph",
        text: "Selecting an influencer is a commitment of money and reputation, so it deserves more than a glance at follower count. Check that the audience is in the right place, speaks the right language and is at the right life stage; that the content fits your category and format; that performance holds up in typical posts and real comments; that the creator communicates and delivers; and that disclosure, exclusivity and rates all work. Fifteen checks sounds like a lot, but most take a minute or two, and together they turn a gut decision into one you can defend.",
      },
    ],
    faqs: [
      {
        question: "Which of the 15 checks matter most?",
        answer:
          "Audience location, conflicts and exclusivity, and disclosure habits are the ones most likely to sink a collaboration outright. If any of those fail, the creator is usually out, however strong the rest looks.",
      },
      {
        question: "Can I complete these checks without contacting the creator?",
        answer:
          "About two-thirds of them. Content, performance, comments, disclosure habits and recent brand deals are public. Audience location, age split, rates, availability and exclusivity need the creator to share screenshots or answer directly.",
      },
      {
        question: "Do these checks apply to nano and micro creators too?",
        answer:
          "Yes, but scale the effort to the commitment. For a simple product seeding, a quick look at content, comments and values may be enough. For a paid deal or usage rights, run all fifteen.",
      },
      {
        question: "What if a creator refuses to share audience insights?",
        answer:
          "It's reasonable for a creator to share them only once there is genuine interest, so ask at the right moment. If they still decline for a paid collaboration, treat it as a concern and weigh it against everything else you know.",
      },
      {
        question: "Is a verified badge a sign of a good creator?",
        answer:
          "Not on its own. It indicates the account's identity has been confirmed or that it's a subscribed account, not that the audience fits your brand or the engagement is healthy. Run the same checks either way.",
      },
    ],
  },

  // #20 influencer-discovery-checklist (NEW)
  {
    slug: "influencer-discovery-checklist",
    category: "Influencer Marketing",
    title: "The Complete Influencer Discovery Checklist for Marketing Teams",
    seoTitle: "Influencer Discovery Checklist for Marketing Teams",
    excerpt:
      "A stage-by-stage checklist for finding creators: what to settle before you search, what to do during discovery, how to evaluate and shortlist, and exactly what to hand over to outreach.",
    metaDescription:
      "A complete influencer discovery checklist: brief, budget and creator profile, search and filters, evaluation, shortlist and a clean handover to outreach.",
    author: AUTHOR,
    publishedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: ["Influencer Discovery", "Checklist", "Creator Discovery", "Marketing Teams"],
    related: ["influencer-shortlist", "things-to-check-before-selecting-influencers", "how-to-create-influencer-outreach-list", "influencer-campaign-checklist"],
    hero: {
      src: "/blog/discovery/influencer-discovery-checklist.svg",
      alt: "Influencer discovery checklist across five stages: before searching, during discovery, evaluation, shortlist and handover to outreach",
    },
    discoveryCta: {
      headline: "Run Stage 2 Faster",
      body: "Kudozz Discovery covers the search part of this checklist for Instagram creators in India: filter by niche, follower band, city, state, language, gender and engagement, keep filters in a shareable URL and save candidates into named lists for each campaign.",
    },
    body: [
      {
        type: "paragraph",
        text: "Discovery is where most influencer campaigns quietly lose a week. Someone starts searching before the brief is final, the budget changes halfway, three people keep their own spreadsheets, and the outreach team receives a list of handles with no reasons, no rates and no contact details. Nothing went badly wrong. It just wasn't run as a process.",
      },
      {
        type: "paragraph",
        text: "This checklist covers creator discovery only, from the moment a campaign needs creators to the moment a shortlist is handed to whoever does outreach. For the whole campaign, from brief to final report, use our influencer campaign checklist instead. Tick through the stages in order; each one assumes the one before it is done.",
        links: [{ text: "influencer campaign checklist", href: "/blog/influencer-campaign-checklist" }],
      },
      { type: "heading", text: "The five stages at a glance", id: "stages-overview" },
      {
        type: "table",
        headers: ["Stage", "Goal", "Output", "Typical owner"],
        rows: [
          ["1. Before searching", "Know exactly who you're looking for", "Brief, budget range, creator profile, gates", "Campaign lead"],
          ["2. During discovery", "Find enough plausible creators, from several sources", "Longlist with basic data and source", "Discovery or social team"],
          ["3. Evaluation", "Remove poor fits and check the rest properly", "Researched, gated creators with notes", "Discovery team"],
          ["4. Shortlist", "Rank, tier and approve", "Approved shortlist with backups", "Campaign lead and decision-maker"],
          ["5. Handover", "Give outreach everything it needs", "Outreach-ready list", "Discovery team to outreach owner"],
        ],
      },
      { type: "heading", text: "Stage 1: Before you search", id: "before-searching" },
      {
        type: "paragraph",
        text: "Every hour spent here saves several later. If you can't tick these, you're not ready to search, because you won't know when you've found the right creator.",
      },
      { type: "subheading", text: "The brief" },
      {
        type: "list",
        items: [
          "One primary campaign objective (awareness, sales, content for ads, launch buzz, local footfall).",
          "Product or offer, including price point and any claims creators may or may not make.",
          "Target customer: age range, city or region, language, and why they'd buy.",
          "Platform and formats needed (for example, Instagram Reels and Stories).",
          "Campaign window and any fixed dates such as a launch or festive sale.",
          "Number of creators needed, and the role each should play.",
        ],
      },
      {
        type: "paragraph",
        text: "If your brief isn't written yet, creator briefing and campaign brief structure covers what to include.",
        links: [{ text: "creator briefing and campaign brief structure", href: "/blog/influencer-campaign-brief" }],
      },
      { type: "subheading", text: "The budget" },
      {
        type: "list",
        items: [
          "Total creator budget, and whether it includes product, shipping and usage rights.",
          "Mix of paid, barter and seeding, decided upfront.",
          "A rough fee range per creator role, so discovery doesn't chase creators you can't afford.",
          "A contingency for replacements and rate surprises.",
        ],
      },
      {
        type: "paragraph",
        text: "The influencer marketing budget guide explains how to split spend across creators and phases.",
        links: [{ text: "influencer marketing budget guide", href: "/blog/influencer-marketing-budget" }],
      },
      { type: "subheading", text: "The creator profile and gates" },
      {
        type: "list",
        items: [
          "Niche or niches the creator should cover.",
          "Creator location and, separately, where their audience should be.",
          "Content language(s).",
          "Follower band or bands, chosen by role and budget.",
          "Minimum activity: how often they should be posting.",
          "Hard exclusions: competitors worked with recently, content themes that clash with your brand.",
          "Scoring criteria and weights for later, agreed with the decision-maker now.",
        ],
      },
      { type: "heading", text: "Stage 2: During discovery", id: "during-discovery" },
      {
        type: "paragraph",
        text: "Discovery should be broad but disciplined: several sources, the same data collected for every creator, and everything going into one shared list rather than personal notes.",
      },
      {
        type: "list",
        items: [
          "Search at least three sources: platform search and hashtags, creators tagging you or competitors, past creators, referrals and a discovery tool.",
          "Translate the creator profile into filters (niche, follower band, city or state, language, minimum engagement, posting frequency) and save the search so colleagues can rerun it.",
          "Search in regional languages and local hashtags, not just English, if your audience isn't only metro English speakers.",
          "Check your own records first: past collaborators, creators who already like your product.",
          "Record for each creator: handle, profile link, niche, city, language, follower band, average views, engagement rate, source and date found.",
          "Keep one shared list per campaign. Name it after the campaign, not the person searching.",
          "Stop when the longlist is several times the number you need (a common rule of thumb is five to ten times), rather than when you run out of patience.",
        ],
      },
      {
        type: "paragraph",
        text: "Most of the filter step can be done in a discovery tool. In Kudozz Discovery, for instance, filters for niche, follower band, state, city, language, gender, minimum engagement rate, average views and posting frequency stay in the URL, so a teammate opening the same link sees the same search. Our guide to finding influencers by niche, location and audience relevance explains how to set those filters well.",
        links: [{ text: "finding influencers by niche, location and audience relevance", href: "/blog/influencer-search-tools" }],
      },
      {
        type: "discovery-cta",
        headline: "Turn Your Creator Profile Into Saved Filters",
        body: "Set niche, city, language, follower band and minimum engagement once in Kudozz Discovery, share the search link with your team and save promising Instagram creators into a list named after the campaign.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Stage 3: Evaluation", id: "evaluation" },
      {
        type: "paragraph",
        text: "Evaluation happens in two passes. A fast gate pass removes clear misfits in a minute or two each. A slower research pass looks properly at the creators who are left.",
      },
      { type: "subheading", text: "Gate pass" },
      {
        type: "list",
        items: [
          "Active recently and posting at the frequency you need.",
          "Right language and region for the brief.",
          "No recent competitor collaboration.",
          "No obvious values or brand-safety conflict.",
          "No obvious signs of inauthentic followers or engagement.",
          "Reason recorded for every creator removed.",
        ],
      },
      { type: "subheading", text: "Research pass" },
      {
        type: "list",
        items: [
          "Last 20 to 30 posts reviewed for topic, format, tone and production.",
          "Past sponsored posts reviewed for integration quality and disclosure.",
          "Comments read on several recent posts.",
          "Typical views noted (not the best Reel).",
          "Rate expectation estimated and marked as an estimate.",
          "Preferred contact method and language noted.",
          "Audience data to request listed (top cities, age split, recent Reel reach).",
        ],
      },
      {
        type: "paragraph",
        text: "For the detail behind each of these, see how to research influencers before approaching them and 15 things to check before selecting an influencer.",
        links: [
          { text: "how to research influencers before approaching them", href: "/blog/how-to-research-influencers" },
          { text: "15 things to check before selecting an influencer", href: "/blog/things-to-check-before-selecting-influencers" },
        ],
      },
      { type: "heading", text: "Stage 4: Shortlist", id: "shortlist-stage" },
      {
        type: "list",
        items: [
          "Each remaining creator scored against the agreed criteria and weights, with evidence linked.",
          "Cost shown next to the score, not inside it.",
          "Creators sorted into priority, reserve and out.",
          "Priority tier checked for a sensible mix of roles, regions and sizes.",
          "Audience overlap considered where several creators share a city and niche.",
          "A named backup for every priority slot.",
          "Scorecard sent as a pre-read; one decision-maker approves.",
          "Decisions and reasons logged.",
        ],
      },
      {
        type: "paragraph",
        text: "The full process, with a copyable scorecard, is in how to shortlist influencers for a brand campaign.",
        links: [{ text: "how to shortlist influencers for a brand campaign", href: "/blog/influencer-shortlist" }],
      },
      { type: "heading", text: "Stage 5: Handover to outreach", id: "handover" },
      {
        type: "paragraph",
        text: "The handover is where discovery work is most often lost. If outreach has to re-open every profile to work out why a creator was chosen, the research was wasted. Hand over a list with these fields filled in:",
      },
      {
        type: "table",
        headers: ["Field", "Why outreach needs it"],
        rows: [
          ["Handle and profile link", "To find the right account quickly"],
          ["Tier and backup for", "So they approach priority creators first and know who replaces whom"],
          ["Role in the campaign", "To pitch the right deliverables"],
          ["Why they fit (one line)", "The opening of a personalised message"],
          ["Personalisation hook", "A specific post or detail to mention"],
          ["Preferred contact and language", "To use the channel the creator asked for"],
          ["Email or phone, if available", "So outreach isn't hunting for contacts"],
          ["Rate estimate and budget ceiling", "To open with a realistic offer"],
          ["Audience data to request", "So the first conversation collects it"],
          ["Risks or open questions", "Exclusivity, disclosure habits, availability"],
          ["Status and owner", "So two people don't message the same creator"],
        ],
      },
      {
        type: "paragraph",
        text: "How to create an influencer outreach list that your team can actually use goes deeper on structuring this sheet, and your influencer database is where the results should end up after the campaign, so the next discovery round starts ahead.",
        links: [
          { text: "How to create an influencer outreach list that your team can actually use", href: "/blog/how-to-create-influencer-outreach-list" },
          { text: "influencer database", href: "/blog/influencer-database" },
        ],
      },
      { type: "heading", text: "One-page version to copy", id: "one-page-checklist" },
      {
        type: "template",
        label: "Influencer discovery checklist",
        text: "BEFORE SEARCHING\n[ ] Objective, product, target customer, platform, formats, dates\n[ ] Number of creators and role of each\n[ ] Budget total, paid/barter/seeding mix, fee range per role, contingency\n[ ] Creator profile: niche, creator location, audience location, language, follower bands, activity\n[ ] Gates and scoring weights agreed with decision-maker\n\nDURING DISCOVERY\n[ ] 3+ sources searched, including regional-language searches\n[ ] Filters saved and shared\n[ ] Same basic fields recorded for every creator, plus source and date\n[ ] One shared list per campaign\n[ ] Longlist large enough for the brief\n\nEVALUATION\n[ ] Gate pass done, reasons recorded\n[ ] Research pass: content, sponsored posts, comments, typical views\n[ ] Rate estimate, contact preference, audience data to request\n\nSHORTLIST\n[ ] Scored with evidence, cost shown separately\n[ ] Priority / reserve / out, mix checked, backups named\n[ ] Approved by one decision-maker, decisions logged\n\nHANDOVER\n[ ] Outreach list with fit reason, hook, contact, rate estimate, risks, owner\n[ ] Results to be added to the influencer database after the campaign",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Starting to search before objective, budget and audience are agreed.",
          "Using a single source, so the list reflects one algorithm's idea of relevance.",
          "Recording different data for different creators, which makes scoring unfair.",
          "Doing deep research on the whole longlist instead of gating first.",
          "Handing outreach a list of handles with no reasons or contact details.",
          "Not saving what you learned, so the next campaign repeats the same work.",
        ],
      },
      {
        type: "paragraph",
        text: "If your team doesn't have the hours for all five stages, Kudozz's creator discovery service can run them and hand over an approved, outreach-ready shortlist.",
        links: [{ text: "creator discovery service", href: "/services/creator-discovery" }],
      },
      { type: "heading", text: "Wrapping up", id: "conclusion" },
      {
        type: "paragraph",
        text: "A discovery checklist won't find the perfect creator for you, but it stops the usual leaks: searching without a brief, losing research in personal spreadsheets and handing outreach a bare list. Settle the brief, budget and creator profile first, search broadly with consistent data, gate before you research, shortlist with scores and backups, and hand over everything outreach needs in one row per creator. Run it the same way each campaign and discovery gets faster every time.",
      },
    ],
    faqs: [
      {
        question: "How long should influencer discovery take?",
        answer:
          "It depends on the brief and number of creators. A focused brief for a handful of creators can be done in a few working days; a multi-city or multi-language campaign can take two to three weeks including approvals. Getting stage 1 right is what shortens it most.",
      },
      {
        question: "Who should own influencer discovery in a marketing team?",
        answer:
          "One person should own the process and the shared list, even if several people search. Usually that's whoever runs influencer or social campaigns, with the campaign lead owning the brief and a single decision-maker approving the shortlist.",
      },
      {
        question: "How is a discovery checklist different from a campaign checklist?",
        answer:
          "A discovery checklist ends when an approved shortlist is handed to outreach. A campaign checklist goes further: contracts, briefs to creators, content approval, posting, tracking and reporting.",
      },
      {
        question: "Should we search for creators before or after setting the budget?",
        answer:
          "After. Budget decides which follower bands and how many creators are realistic. Searching first often leads to a shortlist the team can't afford, and the process has to restart.",
      },
      {
        question: "Can a small team use this checklist?",
        answer:
          "Yes. Combine roles: one person can own the brief, search and handover, as long as someone else approves the shortlist. Keep the one-page version and skip nothing in stage 1.",
      },
    ],
  },

  // #13 influencers-for-product-launch (UPGRADE)
  {
    slug: "influencers-for-product-launch",
    category: "Campaign Strategy",
    title: "How to Find Influencers for a Product Launch",
    seoTitle: "How to Find Influencers for a Product Launch | Kudozz",
    excerpt:
      "Finding creators for a launch is a timing problem as much as a search problem. How to work back from launch day, which creator roles a launch needs, how to find creators who'll be believable for a new product, and how to keep backups ready.",
    metaDescription:
      "Find influencers for a product launch: lead times, creator roles from teasers to UGC, seeding as a filter, tier mix, credibility checks and backups.",
    author: AUTHOR,
    publishedAt: "2026-09-29",
    updatedAt: "2026-11-25",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: ["Product Launch", "Creator Discovery", "Influencer Seeding", "D2C"],
    related: ["influencer-discovery-for-d2c-brands", "influencer-shortlist", "influencer-product-seeding-program", "influencer-marketing-campaign-timeline"],
    hero: {
      src: "/blog/discovery/influencers-for-product-launch.svg",
      alt: "Launch countdown timeline showing when to find, seed and book creators for teasers, launch day, reviews and UGC, working back from launch day",
    },
    discoveryCta: {
      headline: "Find Your Launch Creators Early",
      body: "Launch dates don't wait for a slow search. Kudozz Discovery lets you filter Instagram creators in India by niche, city, language, follower band and engagement, and save teaser, launch-day and review candidates into separate lists weeks before launch.",
    },
    body: [
      {
        type: "paragraph",
        text: "Here is the blunt answer: start finding launch creators about two months before launch day, not two weeks. Launch dates don't move, good creators book up, and the most credible launch content comes from people who have had the product long enough to form an opinion. A brand that starts searching a fortnight out ends up with whoever is free, not whoever is right.",
      },
      {
        type: "paragraph",
        text: "This guide is about the discovery side of a launch: who you need, when you need to find them, and how to tell which creators will be believable for a product nobody has seen yet. If you need the full launch plan around it (store readiness, launch-day run sheet, budget by phase), our product launch campaign service and the guides linked below cover that.",
        links: [{ text: "product launch campaign service", href: "/services/product-launches" }],
      },
      { type: "heading", text: "Start with what the launch must achieve", id: "launch-objective" },
      {
        type: "paragraph",
        text: "The launch objective decides which creators you look for, so settle it before you search. Pick one primary objective. Trying to get waitlist sign-ups, launch-week sales and broad awareness from the same small group of creators usually means none of them happens well.",
      },
      {
        type: "table",
        headers: ["Launch objective", "Creators to look for", "What to check hardest"],
        rows: [
          ["Waitlist or pre-orders", "Niche and micro creators whose followers ask them what to buy", "Comment quality and category focus"],
          ["Launch-week sales", "A few reach creators plus micro creators with codes", "Audience location versus where you deliver"],
          ["Category awareness", "Fewer, larger creators who can post in a tight window", "Typical views and availability on your date"],
          ["Content for ads and product pages", "UGC-style creators and clear demonstrators", "Production quality and willingness to grant usage rights"],
        ],
      },
      {
        type: "paragraph",
        text: "Your launch audience is usually narrower than your eventual customer base: early adopters and category enthusiasts who act quickly. Define that group first, because it is who your creators need to reach.",
      },
      { type: "heading", text: "Work backwards from launch day", id: "launch-timeline" },
      {
        type: "paragraph",
        text: "Every creator role has a lead time. Seeded reviewers need weeks with the product; launch-day creators need contracts and drafts approved before the date; backups need to be identified before anything goes wrong. A rough timeline, to adjust for your category:",
      },
      {
        type: "table",
        headers: ["When", "Discovery and creator work"],
        rows: [
          ["Launch minus 9 to 8 weeks", "Objective, launch audience, creator roles and budget agreed; gates and scoring set"],
          ["Launch minus 8 to 6 weeks", "Discovery: longlist for each role; gate and research; shortlist with backups approved"],
          ["Launch minus 6 to 5 weeks", "Outreach and contracts for seeding and teaser creators; embargo and disclosure terms agreed"],
          ["Launch minus 5 to 3 weeks", "Product seeded; feedback gathered; best-fit seeded creators invited into paid launch roles"],
          ["Launch minus 3 to 1 weeks", "Launch-day and review creators contracted; drafts and posting slots confirmed; backups on standby"],
          ["Launch day to plus 4 weeks", "Launch posts, then a second wave of reviews and UGC from creators who have used the product"],
        ],
      },
      {
        type: "paragraph",
        text: "If you have less time than this, cut the number of creators, not the seeding period. Five creators who've used the product for three weeks will say more useful things than fifteen who received it two days before posting. The influencer marketing campaign timeline shows how these steps fit with the rest of a campaign.",
        links: [{ text: "influencer marketing campaign timeline", href: "/blog/influencer-marketing-campaign-timeline" }],
      },
      { type: "heading", text: "The creator roles a launch needs", id: "creator-roles" },
      {
        type: "paragraph",
        text: "Search for roles, not just names. Each role has a different job, a different timing and different things to look for, so it helps to run discovery for each role separately and keep them in separate lists.",
      },
      {
        type: "table",
        headers: ["Role", "Job in the launch", "What to look for when finding them"],
        rows: [
          ["Teaser creators", "Build curiosity and a waitlist before launch", "Followers who trust their early picks; comfortable with embargoes; strong Stories"],
          ["Launch-day creators", "Concentrate attention when the product can be bought", "Reliable typical views; available on your exact date; audience where you deliver"],
          ["Reviewers", "Answer \"is it actually good?\" after real use", "Track record of honest reviews, including mixed ones; deep category focus"],
          ["Demonstrators and UGC creators", "Produce content you can run as ads and use on product pages", "Clear, well-lit videos; good hooks; willing to grant usage rights"],
          ["Regional voices", "Explain the product in the language of a priority market", "Native-language content; comments in that language; audience in that state"],
        ],
      },
      {
        type: "paragraph",
        text: "UGC creators are often found differently from influencers, because you care about their videos more than their audience. How to find UGC creators for your brand covers that search, including the usage rights to agree before filming.",
        links: [{ text: "How to find UGC creators for your brand", href: "/blog/how-to-find-ugc-creators" }],
      },
      { type: "heading", text: "Finding creators who'll be credible for a new product", id: "credibility" },
      {
        type: "paragraph",
        text: "A new product has no reviews, and a new brand has no reputation. The creator's credibility is doing a lot of the work, so the question isn't just \"is this creator popular\" but \"would their followers believe them about this?\" Look for these signals while you research:",
      },
      {
        type: "list",
        items: [
          "Category history: they've posted about this kind of product for months, not just this week.",
          "Honest past reviews: they've said \"this didn't work for me\" about something. Creators who praise everything carry less weight.",
          "Followers ask them for recommendations: comments like \"what should I buy for…\" are a strong sign of trust.",
          "No recent competitor promotion: a creator who launched a rival product last month is a hard sell for yours.",
          "They explain, not just show: launch products need someone who can say what's new and why it matters.",
          "Their sponsored posts perform close to their organic ones, which suggests the audience doesn't switch off for brand content.",
        ],
      },
      {
        type: "paragraph",
        text: "Our guide to researching influencers before outreach shows how to gather this evidence in 20 to 30 minutes per creator. If your product creates a new category that buyers don't yet know they need, credibility matters even more; see influencer marketing for a new product category.",
        links: [
          { text: "researching influencers before outreach", href: "/blog/how-to-research-influencers" },
          { text: "influencer marketing for a new product category", href: "/blog/new-product-category-influencer-marketing" },
        ],
      },
      { type: "heading", text: "Use seeding as a discovery filter", id: "seeding-filter" },
      {
        type: "paragraph",
        text: "Seeding is the best credibility test you have. Send the product to a wider group of creators than you plan to pay, weeks before launch, and ask for honest feedback with no obligation to post. The creators who genuinely like it, and say why in specific terms, are the ones to invite into paid launch roles. Their launch content will sound like a recommendation because it is one.",
      },
      {
        type: "paragraph",
        text: "Say a Pune protein-snack brand seeds 25 fitness and food creators a month before launch. Eight come back with detailed, enthusiastic feedback; three mention the taste unprompted and ask when it goes on sale. Those eight become the launch shortlist, and the most articulate three become launch-day creators. Two who were lukewarm stay on the list as candidates for a later flavour. How to set this up is in our influencer product seeding program guide.",
        links: [{ text: "influencer product seeding program", href: "/blog/influencer-product-seeding-program" }],
      },
      {
        type: "paragraph",
        text: "Two rules keep seeding clean. If a seeded creator posts, the free product is a material connection and must be disclosed clearly, in line with ASCI's guidelines. And keep creator content on social platforms: marketplaces such as Amazon and Flipkart restrict reviews given in exchange for free products or payment, so don't ask seeded creators to review you there.",
      },
      {
        type: "discovery-cta",
        headline: "Build Your Seeding List by Niche and City",
        body: "Seeding works best with a wide, relevant list. In Kudozz Discovery you can filter Instagram creators in India by niche, city, language and engagement, check posting frequency and save a seeding list for your launch.",
        ctaLabel: "Explore Kudozz Discovery",
      },
      { type: "heading", text: "Getting the tier mix right", id: "tier-mix" },
      {
        type: "paragraph",
        text: "Most launches work best in layers: a small number of larger creators for reach and a wider group of micro and nano creators for detailed, trusted coverage. The right balance depends on the objective. A fast awareness launch leans larger; a credibility or content launch leans smaller and wider. Five creators who genuinely fit can do more than twenty booked to hit a headcount.",
      },
      {
        type: "list",
        items: [
          "Book larger creators only for slots where reach on a specific day matters, and confirm their availability first.",
          "Use micro creators for reviews, tutorials and regional coverage, where trust matters more than size.",
          "Keep one or two strong demonstrators for ad content, whatever their follower count.",
          "Don't spread a small budget across too many creators; each one needs product, briefing and follow-up.",
        ],
      },
      {
        type: "paragraph",
        text: "The trade-offs between sizes are covered in micro vs macro influencers.",
        links: [{ text: "micro vs macro influencers", href: "/blog/micro-vs-macro-influencers" }],
      },
      { type: "heading", text: "Search filters that matter for a launch", id: "launch-search" },
      {
        type: "paragraph",
        text: "Launch discovery uses the usual filters, with a few priorities that are specific to launches:",
      },
      {
        type: "list",
        items: [
          "Location: if stock or delivery is limited to certain cities at launch, search creators in those cities first and confirm audience location later.",
          "Posting frequency: launch creators must post inside a narrow window, so favour creators who post regularly.",
          "Niche: search the specific niche (Health & Fitness, Food & Beverages) rather than broad lifestyle.",
          "Language: for regional launches, filter by content language and check comments are in it too.",
          "Engagement and average views: use them to set a floor, then read content and comments to judge credibility.",
        ],
      },
      {
        type: "paragraph",
        text: "If you're searching on Instagram, a discovery tool saves time on the first pass. Kudozz Discovery, for example, covers Indian Instagram creators and lets you combine niche, city, language, follower band and minimum engagement, then save candidates into separate lists for teaser, launch-day and review roles. For YouTube reviewers, who often suit detailed launch demos, use the methods in how to find YouTube creators for product reviews.",
        links: [{ text: "how to find YouTube creators for product reviews", href: "/blog/how-to-find-youtube-influencers" }],
      },
      { type: "heading", text: "Lock backups before launch week", id: "backups" },
      {
        type: "paragraph",
        text: "Launch week is the worst time to restart a search. Someone will fall ill, miss a slot, get a conflicting offer or deliver a draft that doesn't work. Name a reserve for every launch-day slot when the shortlist is approved, ideally a seeded creator who already has the product and liked it. Agree in advance what happens if a reserve is called in: fee, notice period and posting slot.",
      },
      {
        type: "paragraph",
        text: "Write date changes into agreements too, because launches slip. Decide how much notice you'll give to move a posting date, whether a moved date is paid, and what happens if the product is delayed or withdrawn. The shortlisting process with backups is in how to shortlist influencers for a brand campaign.",
        links: [{ text: "how to shortlist influencers for a brand campaign", href: "/blog/influencer-shortlist" }],
      },
      { type: "heading", text: "Before any creator posts: store and stock", id: "store-stock" },
      {
        type: "paragraph",
        text: "Finding the right creators is wasted if their audience lands on a broken page or a sold-out product. Before the first teaser, confirm stock and delivery coverage for the cities your creators' audiences live in, give each creator a tested code and tracked link, and brief customer support on the launch. If stock is limited, stagger creators: start with smaller ones and hold reach creators until stock is confirmed. Is your Shopify store ready for an influencer campaign has the full pre-launch store check.",
        links: [{ text: "Is your Shopify store ready for an influencer campaign", href: "/blog/shopify-store-influencer-campaign-checklist" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Starting the creator search two or three weeks before launch.",
          "Booking creators before seeding, so nobody has actually used the product.",
          "Choosing by follower count when the launch needs trust and explanation.",
          "Finding creators in metros when stock only ships to a few cities at launch.",
          "One list for every role, so teaser, launch-day and review creators get the same brief.",
          "No reserves for launch-day slots.",
          "Asking seeded creators for marketplace reviews.",
        ],
      },
      { type: "heading", text: "Bringing it together", id: "conclusion" },
      {
        type: "paragraph",
        text: "Finding influencers for a product launch means finding the right people early enough for them to be believable. Set one objective, work back from launch day, search for distinct roles, judge credibility by category history and honest reviews rather than size, seed wider than you book and promote the creators who genuinely liked the product, and have a reserve ready for every launch-day slot. Do the discovery work eight weeks out and launch week becomes a matter of execution rather than scrambling.",
      },
    ],
    faqs: [
      {
        question: "How many influencers do I need for a product launch?",
        answer:
          "There's no fixed number. Decide the roles first (teasers, launch-day, reviewers, UGC, regional), then how many each role needs for your objective and budget. A focused launch with a handful of well-chosen creators often does better than a large group booked for headcount.",
      },
      {
        question: "Should launch creators sign an NDA or embargo?",
        answer:
          "If they receive the product before it's announced, yes: agree an embargo date and time in writing, and what they can and can't show beforehand. Keep it simple and specific so creators can plan teaser content within it.",
      },
      {
        question: "Can I use creators who previously worked with a competitor?",
        answer:
          "Sometimes. Check the timing and any exclusivity. A collaboration many months ago is rarely an issue, but a recent one undermines credibility for a launch and may be contractually off-limits.",
      },
      {
        question: "What if seeded creators don't like the product?",
        answer:
          "That's useful information, not a failure. Thank them, don't pressure them to post, and look at whether their feedback points to a product or messaging issue to fix before launch. Only invite creators who genuinely liked it into paid launch roles.",
      },
      {
        question: "Is it better to launch with one big creator or many small ones?",
        answer:
          "For most new products, a mix works better: one or two larger creators where reach on launch day matters, and a wider group of smaller, specialist creators for reviews and trust that keep working after launch day.",
      },
    ],
  },
];
