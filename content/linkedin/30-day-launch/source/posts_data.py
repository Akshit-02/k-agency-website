# Source of truth for the Kudozz 30-day LinkedIn launch calendar.
# build.py turns this into the CSV, XLSX, Markdown and JSON deliverables.
# In `copy`, {link} is replaced with the post's tracked blog URL; hashtags are
# appended from `hashtags`, so the copy and the metadata can't drift apart.

START_DATE = "2026-10-17"  # first suggested publishing date (IST)
UTM = "utm_source=linkedin&utm_medium=organic_social&utm_campaign=linkedin_30_day_launch"

BLOG_TITLES = {
    "influencer-campaign-management": "How Influencer Campaign Management Works: A Step-by-Step Guide",
    "influencer-marketing-strategy": "How to Build an Influencer Marketing Strategy That Delivers Results",
    "how-to-choose-the-right-influencer-for-your-brand": "How to Choose the Right Influencer for Your Brand (Not Just the Biggest One)",
    "15-influencer-marketing-mistakes": "15 Influencer Marketing Mistakes Brands Should Avoid",
    "nano-vs-micro-influencers": "Nano vs Micro Influencers: Which Creator Tier Fits Your Campaign and Budget?",
    "ugc-vs-influencer-content-whats-the-difference": "UGC vs. Influencer Marketing: What's the Difference?",
    "influencer-marketing-beauty-brands-india": "Influencer Marketing for Beauty and Skincare Brands: How to Choose the Right Creators",
    "influencer-campaign-brief": "Creator Briefing: How to Write an Influencer Campaign Brief and Brief Creators Well",
    "how-to-identify-fake-followers": "How to Identify Fake Followers and Fake Engagement on Instagram",
    "measuring-influencer-campaign-roi": "How to Measure Influencer Marketing ROI",
    "influencer-product-seeding-program": "Influencer Product Seeding: How Brands Can Send Products to Creators Strategically",
    "influencer-marketing-agency-pitch-questions": "Influencer Marketing Agency Questions: 25 Questions Brands Should Ask Before Hiring",
    "regional-influencer-marketing-india": "Regional and Vernacular Influencer Marketing in India",
    "influencer-reporting-discrepancies": "Why Creator Platform Reports and Website Analytics Don't Match, and How to Reconcile Them",
    "how-to-vet-influencers": "How to Vet Influencers Before a Brand Collaboration",
    "influencer-marketing-fmcg-brands-india": "Influencer Marketing for FMCG Brands: Complete Campaign Strategy",
    "ugc-paid-social-testing": "UGC for Paid Social: How to Test and Scale Creator Ads",
    "negotiate-influencer-rates": "How to Negotiate Influencer Rates Without Damaging the Relationship",
    "influencer-marketing-budget": "Influencer Marketing Budget: How Brands Should Plan and Structure Creator Spend",
    "influencer-usage-rights": "Influencer Usage Rights: What Brands Need to Agree Before Reusing Creator Content",
    "influencer-marketing-travel-brands-india": "Influencer Marketing for Travel Brands: How to Build Creator-Led Destination Campaigns",
    "influencer-marketing-kpis": "Influencer Marketing KPIs: The Metrics Every Brand Should Track",
    "influencer-affiliate-program": "Influencer Affiliate Programs: How Brands Can Build a Creator-Led Sales Channel",
    "influencer-disclosure-rules-by-country": "Influencer Disclosure Rules by Platform and Country: What Brands Should Check",
    "influencer-marketing-agency-brief": "How to Write an Influencer Marketing Agency Brief for Your Campaign",
    "influencer-marketing-b2b-technology": "Influencer Marketing for B2B Technology Brands: How to Work With Industry Creators",
    "brand-ambassador-program": "Influencer Ambassador Programs: How Brands Can Build a Long-Term Creator Network",
    "influencer-content-library": "How to Build an Influencer Content Library Your Team Can Actually Use",
    "influencer-marketing-audit": "How to Audit an Influencer Marketing Program Before You Scale It",
    "ugc-localization": "How to Localize UGC and Influencer Campaigns Across Markets",
}

SERVICES = {
    "campaign-strategy": "Influencer Marketing Strategy",
    "creator-discovery": "Creator Discovery & Matchmaking",
    "outreach-management": "Influencer Outreach & Management",
    "ugc-campaigns": "UGC Campaigns",
    "ambassador-programs": "Brand Ambassador Programs",
    "reporting": "Campaign Reporting & Performance Tracking",
    "influencer-seeding-gifting": "Influencer Seeding & Gifting",
    "influencer-affiliate-marketing": "Influencer Affiliate & Performance Marketing",
    "ugc-content-production": "UGC Content Production",
    "regional-influencer-marketing": "Regional Influencer Marketing",
    "micro-nano-influencer-marketing": "Micro & Nano Influencer Marketing",
    "linkedin-influencer-marketing": "LinkedIn Influencer Marketing",
    "social-campaigns": "Social Media Campaigns",
}

EDU = "Educational / how-to"
TIPS = "Tips, checklist or framework"
MIST = "Mistakes or misconceptions"
IND = "Industry-specific"
PLAN = "Campaign planning, management or measurement"
UGC = "UGC, creator partnerships or performance"
KUD = "Kudozz approach, services or expertise"

POSTS = [
# ---------------------------------------------------------------- 01
dict(
    time="11:00", category=KUD,
    objective="Introduce Kudozz and set expectations for the page: practical, non-salesy influencer marketing content.",
    audience="Brand founders, marketing heads and brand managers considering creator campaigns",
    slug="influencer-campaign-management", service="outreach-management",
    cta="Read the step-by-step campaign management guide; share which stage takes most of your team's time.",
    hashtags=["#Kudozz", "#InfluencerMarketing", "#CreatorEconomy", "#BrandStrategy"],
    image="post-01-influencer-campaign-workflow.png",
    alt="Kudozz graphic titled 'What running an influencer campaign actually involves'. Five numbered stages run top to bottom: 1 Plan (objective, audience), 2 Find (creator discovery, evaluation), 3 Agree (outreach, negotiation, contracts and usage rights), 4 Make (briefing, content creation, review and approvals), 5 Measure (publishing, disclosure checks, tracking, final report). Kudozz logo and kudozz.in at the bottom.",
    notes="Launch post. 17 Oct is a Saturday; if you'd rather launch on a weekday, move the first week back by two days.",
    copy="""Hello, LinkedIn. We're Kudozz, an influencer marketing agency.

We help brands find the right creators, then plan, run and measure campaigns in India, the UAE, Saudi Arabia, the UK, Australia and Singapore.

Rather than open with claims about ourselves, we'll start with something useful.

From the outside, an influencer campaign looks like three steps: pick a creator, send a brief, wait for the post.

In practice, there are five stages and thirteen steps:

1. Plan: the objective and the audience
2. Find: creator discovery and evaluation
3. Agree: outreach, negotiation, contracts and usage rights
4. Make: briefing, content creation, review and approvals
5. Measure: publishing, disclosure checks, tracking and the final report

When a campaign disappoints, the cause is often a step that got skipped. Usually it's usage rights agreed too late, or a KPI chosen after the posts went live.

Over the next 30 days we'll share practical notes on creator selection, briefs, UGC, measurement, budgets and the rules that change from market to market.

If you want the whole workflow, step by step: {link}

Which stage takes up most of your team's time?"""),
# ---------------------------------------------------------------- 02
dict(
    time="11:30", category=EDU,
    objective="Explain the difference between a strategy and a run of campaigns; position Kudozz as strategic.",
    audience="Marketing heads and founders running repeat influencer campaigns",
    slug="influencer-marketing-strategy", service="campaign-strategy",
    cta="Read the guide to the ten strategy decisions; reflect on which one your team decides last.",
    hashtags=["#InfluencerMarketing", "#MarketingStrategy", "#BrandStrategy", "#CreatorMarketing"],
    copy="""If every influencer campaign at your brand starts from a blank page, you don't have a strategy yet. You have a series of campaigns.

It helps to separate three levels:

Strategy: what this channel is for, how budget is split and how it's measured.
Campaign: which platform, creators and timeline get this campaign there.
Collaboration: the terms, brief and deliverables for one creator.

Most teams spend their time on the second and third and never write down the first.

An influencer marketing strategy is really ten decisions you make once and reuse:

→ The business objective (not a channel objective)
→ The target audience
→ A primary platform, and a secondary one
→ The mix of awareness and performance work
→ Creator selection criteria
→ The content mix
→ How budget splits across creator types and costs
→ Campaign cadence
→ The measurement plan
→ A review loop that changes the next campaign

None of these needs to be perfect. They need to be written down, so the next campaign builds on the last one's lessons instead of someone's memory.

For Indian brands there's a layer on top: defining customers by language and city tier, and deciding whether regional-language markets get their own creators.

We've written up each decision in more detail here: {link}

Which of the ten does your team usually decide last?"""),
# ---------------------------------------------------------------- 03
dict(
    time="09:30", category=TIPS,
    objective="Give a reusable creator-selection framework that moves brands beyond follower count.",
    audience="Brand managers and marketers shortlisting creators",
    slug="how-to-choose-the-right-influencer-for-your-brand", service="creator-discovery",
    cta="Read the full selection guide and scorecard.",
    hashtags=["#InfluencerMarketing", "#CreatorPartnerships", "#InfluencerCampaigns", "#MarketingTips"],
    image="post-03-creator-selection-framework.png",
    alt="Kudozz graphic titled '8 things to check before you book a creator'. A grid of eight numbered cards: audience fit, content fit, brand fit, engagement quality, audience authenticity, geography and language, professionalism, commercial fit. A footer note reads 'Weigh them against your objective, not follower count.'",
    copy="""The biggest creator on your shortlist is rarely the hard decision.

The hard decision is the smaller creator whose audience is exactly your customer.

Follower count tells you how many people could see a post. It doesn't tell you whether they're the people you sell to.

Here are eight things worth checking instead:

1. Audience fit: does their audience match your target customer?
2. Content fit: can they make the format you need?
3. Brand fit: tone, values and visual style
4. Engagement quality: specific comments, saves and shares, not just likes
5. Audience authenticity: no signs of bought followers
6. Geography and language: are their followers where you sell?
7. Professionalism: response times, deadlines, disclosure
8. Commercial fit: rate and availability

Weigh them against your objective. A launch needs different strengths from a sales push.

Two habits make this work in practice:

Review the last 12 to 20 posts, covering at least three months, plus every sponsored post. Compare sponsored with organic. If the creator's voice disappears when a brand is involved, so will the audience's attention.

Write down the two or three posts that shaped your view. Then a colleague can check your reasoning rather than redo it.

The full guide, with a scoring framework you can adapt: {link}"""),
# ---------------------------------------------------------------- 04
dict(
    time="12:30", category=MIST,
    objective="Show expertise by naming common planning mistakes; drive traffic to the 15-mistakes article.",
    audience="Brand marketers and founders planning or reviewing campaigns",
    slug="15-influencer-marketing-mistakes", service="campaign-strategy",
    cta="Read the other ten mistakes and the pre-launch checklist; share which one you've seen most.",
    hashtags=["#InfluencerMarketing", "#MarketingStrategy", "#DigitalMarketing", "#InfluencerCampaigns"],
    copy="""Most influencer campaigns that disappoint don't fail at the creative.

They fail in planning, weeks before anyone presses record.

Five mistakes that come up again and again:

1. Writing a script instead of a brief
The creator's audience follows them for their voice. A word-for-word script removes the one thing you were paying for.

2. Ignoring usage rights until after delivery
The Reel performs well, someone wants to run it as an ad, and nobody agreed whether that's allowed. Renegotiating after the fact is slower and usually costs more.

3. Treating gifting as a guaranteed campaign
Sending a product with no agreement is a gift. Some creators will post, many won't. Plan for that, or agree deliverables up front.

4. Measuring too early or too late
Check on day one and you miss the slower sales. Wait three months and you can't separate the campaign from everything else going on.

5. Assuming one campaign proves or disproves the channel
One campaign tests one combination of creators, brief, timing and offer. That's a data point, not a verdict.

The other ten, plus a pre-launch checklist, are in our guide: {link}

Which of these have you run into most often?"""),
# ---------------------------------------------------------------- 05
dict(
    time="10:00", category=EDU,
    objective="Help brands choose between nano and micro creators based on objective and capacity, not just budget.",
    audience="D2C founders and growth marketers with smaller budgets",
    slug="nano-vs-micro-influencers", service="micro-nano-influencer-marketing",
    cta="Read the nano vs micro guide before planning your next creator tier test.",
    hashtags=["#MicroInfluencers", "#NanoInfluencers", "#InfluencerMarketing", "#D2CMarketing"],
    image="post-05-nano-vs-micro-creators.png",
    alt="Kudozz comparison graphic titled 'Nano or micro? Choose by job, not budget'. The left column, Nano creators, lists many authentic voices in a niche, city or language, product seeding at volume, a low-cost way to learn who responds, and more coordination needed. The right column, Micro creators, lists more reach per partnership, more polished content, fewer relationships to manage, and more reliable delivery against dates. A footer reads 'Many brands use both.'",
    copy="""Nano or micro creators?

The honest answer depends less on your budget than on how much coordination your team can handle.

Nano creators make sense when you want:
→ Many authentic voices in one niche, city or language
→ Product seeding at volume
→ A low-cost way to find out which kinds of creators respond to your product

Micro creators make sense when you need:
→ More reach per partnership
→ More polished content
→ Fewer relationships to manage
→ More reliable delivery against fixed dates

Many brands use both: a wide nano base to learn, and micro creators to scale what worked.

The catch with nano is volume. Thirty creators means thirty addresses, thirty drafts and thirty payments. Three things keep it manageable:

1. One standard brief with a short list of must-haves, so nobody needs a custom call
2. Batch shipping and a single tracker for dispatch, delivery, draft, post and payment
3. Approvals in batches on fixed days, rather than as each draft arrives

And at either tier, follower count leaves out what you most need to know: audience fit, engagement quality and reliability.

Our full comparison, including which objective suits which tier: {link}"""),
# ---------------------------------------------------------------- 06
dict(
    time="17:30", category=IND,
    objective="Demonstrate beauty-category expertise: audience relevance, demonstration and responsible claims.",
    audience="Beauty, skincare and personal care brand marketers",
    slug="influencer-marketing-beauty-brands-india", service="creator-discovery",
    cta="Read the beauty and skincare creator guide; share how you check audience match.",
    hashtags=["#BeautyMarketing", "#SkincareBrands", "#BeautyInfluencers", "#BeautyIndustry"],
    copy="""For beauty and skincare brands, one question matters more than follower count:

Does this creator's audience actually have the skin type, tone, hair type or concern your product is made for?

A beautifully shot video for the wrong audience is still the wrong audience.

A few things that set beauty campaigns apart:

Show, don't describe.
Texture, application and finish need to be visible on camera, not explained in the caption.

Category relevance matters.
A creator known for makeup isn't automatically credible on actives and serums. Check that they've covered your specific category before.

Honest reviews beat uniformly positive ones.
Audiences trust creators who say what they liked and what they didn't. Briefs that leave room for that tend to produce more believable content.

Routine beats isolation.
Showing a product as part of a real morning or weekly routine is often more convincing than a standalone product shot.

Be careful with claims.
Before-and-after content should only be used where the result is accurate and the claim can be backed up. The brief should spell out which claims the creator may and may not make.

And cast across the skin types, tones and concerns your customers actually have.

Our full guide to beauty creator selection and campaign planning: {link}

Beauty marketers: how do you check that a creator's audience matches the concern your product solves?"""),
# ---------------------------------------------------------------- 07
dict(
    time="13:00", category=EDU,
    objective="Clarify the difference between UGC and influencer marketing so brands choose the right one.",
    audience="Performance and brand marketers deciding between UGC and influencer budgets",
    slug="ugc-vs-influencer-content-whats-the-difference", service="ugc-content-production",
    cta="Read the UGC vs influencer comparison; reflect on whether the brand's problem is being found or being believed.",
    hashtags=["#UGCMarketing", "#InfluencerMarketing", "#ContentMarketing", "#PerformanceMarketing"],
    copy=""""Should we do UGC or influencer marketing?"

It's a bit like asking whether you need distribution or creative. They buy different things.

Influencer marketing buys reach and trust with a creator's own audience.
The content lives on their profile, and it works because their followers already listen to them.

UGC buys content, plus the rights to use it on your channels.
Ads, product pages, email, your own social feeds. The creator's following matters far less than whether the video convinces someone.

A simple way to decide:

If nobody has heard of you, start with influencers.
If people find you but your ads and pages don't convince them, start with UGC.

Many brands end up needing both, often from the same creators under different contracts: one for the creator's post, another for the ad assets.

That last part is where teams get caught out. A creator's post doesn't come with ad rights by default. Decide which you're buying before the brief goes out.

Our side-by-side breakdown, with a quick decision table: {link}

Which problem is your brand solving right now: being found, or being believed?"""),
# ---------------------------------------------------------------- 08
dict(
    time="11:00", category=MIST,
    objective="Correct the misconception that one metric or tool can prove audience authenticity.",
    audience="Brand managers and agencies vetting Instagram creators",
    slug="how-to-identify-fake-followers", service="creator-discovery",
    cta="Read the fake followers guide and authenticity checklist.",
    hashtags=["#InfluencerMarketing", "#InstagramMarketing", "#BrandSafety", "#CreatorEconomy"],
    notes="Weekend slot; suits a shorter, practical post.",
    copy="""No single number proves a creator's audience is real.

That includes the authenticity score in your discovery tool. Tools are useful for screening, but they estimate from patterns. They can't see the creator's actual insights.

What works better is looking for several warning signs together:

→ Follower spikes with no viral post or press mention to explain them
→ Likes and views that don't grow when followers do
→ Generic, repeated comments ("nice post", "love this") from accounts with no photo or posts
→ Audience locations that don't match the creator's language or content
→ Views far below what the follower count suggests

One of these is a question worth asking. Several together are a pattern.

The simplest check most brands skip: ask the creator for a screen recording of their own platform insights. A recording is much harder to alter than a screenshot, and it shows audience location, age and reach in context.

Most genuine creators are happy to share. If someone refuses outright, that tells you something too.

Our full guide, with a checklist and a worked example: {link}"""),
# ---------------------------------------------------------------- 09
dict(
    time="11:30", category=EDU,
    objective="Teach the components of a good creator brief and why it should not be a script.",
    audience="Brand and campaign managers who brief creators",
    slug="influencer-campaign-brief", service="outreach-management",
    cta="Read the creator briefing guide and template.",
    hashtags=["#InfluencerMarketing", "#CreativeBrief", "#CreatorMarketing", "#ContentStrategy"],
    image="post-09-creator-brief-checklist.png",
    alt="Kudozz checklist graphic titled 'What a good creator brief includes'. Ten ticked items: the objective, the audience, one key message, must-haves and prohibited claims, deliverables and specs, references not scripts, the timeline, the call to action, disclosure requirements, and how approval works. A footer reads 'Then leave the creative execution to the creator.'",
    copy="""A brief that reads like a script gets content that sounds like an ad.

And creators' audiences can tell.

A good creator brief gives direction without taking over the delivery. It covers:

✓ The campaign objective
✓ Who the content needs to reach
✓ One key message (not five)
✓ A short list of must-haves and prohibited claims
✓ Deliverables and specs
✓ References, not scripts
✓ The timeline
✓ The call to action
✓ Disclosure requirements
✓ How approval works

Then it leaves the creative execution to the creator.

Two details make a real difference:

1. Briefing is a process, not a document. Walk creators through it at kickoff and answer their questions. Most problems with drafts start as a misunderstanding nobody asked about.

2. Let creators mention limitations. A creator who says "this works brilliantly for X, less so for Y" is usually more believable than one who says everything is perfect.

Our complete briefing guide, including a template you can copy: {link}"""),
# ---------------------------------------------------------------- 10
dict(
    time="09:00", category=PLAN,
    objective="Explain how to calculate true influencer ROI with full costs and contribution.",
    audience="Marketing heads, growth leads and finance-minded founders",
    slug="measuring-influencer-campaign-roi", service="reporting",
    cta="Read the ROI guide, including formulas and the reporting framework.",
    hashtags=["#InfluencerMarketing", "#MarketingROI", "#MarketingAnalytics", "#PerformanceMarketing"],
    image="post-10-influencer-roi-calculation.png",
    alt="Kudozz graphic titled 'Influencer ROI, counted properly'. Five steps: 1 Total cost (creator fees, product, production, usage rights, amplification, discounts, management time); 2 Attributed orders (net of returns and cancellations, deduplicated); 3 Revenue (net, after discounts, excluding GST or VAT); 4 Contribution (revenue minus product, delivery, payment and returns costs); 5 ROI. The formula reads ROI = (contribution minus total cost) divided by total cost, times 100.",
    copy="""If your influencer ROI only counts creator fees, it's probably flattering the campaign.

A fuller version takes five steps:

1. Total cost
Creator fees, product and shipping, production, usage rights, paid amplification, discounts and the team's time.

2. Attributed orders
Delivered orders net of returns and cancellations, deduplicated across codes and links.

3. Revenue
Net revenue from those orders, after discounts and excluding GST or VAT.

4. Contribution
Revenue minus product cost, packaging, delivery, payment fees and returns handling.

5. ROI
(Contribution − total cost) ÷ total cost × 100

This is also why ROI and ROAS aren't the same thing. ROAS divides revenue by spend. ROI asks whether the campaign made money after everything it cost. A campaign can show a respectable ROAS and still lose money once returns and product costs are counted.

One more thing: decide the primary KPI before creator outreach starts. Measurement planned after the posts go live usually ends up measuring whatever looks best.

Our full ROI guide, including formulas, attribution limits and a reporting framework: {link}"""),
# ---------------------------------------------------------------- 11
dict(
    time="12:30", category=EDU,
    objective="Explain seeding, gifting and sampling, and when seeding makes sense.",
    audience="D2C and consumer brand marketers planning product launches",
    slug="influencer-product-seeding-program", service="influencer-seeding-gifting",
    cta="Read the product seeding guide before planning the next send-out.",
    hashtags=["#ProductSeeding", "#InfluencerGifting", "#InfluencerMarketing", "#ProductLaunch"],
    image="post-11-seeding-gifting-sampling.png",
    alt="Kudozz comparison graphic titled 'Seeding, gifting and sampling are not the same thing'. Three columns. Seeding: chosen creators, no obligation to post, genuine reactions. Gifting: a smaller group, led by relationships, builds long-term goodwill. Sampling: volume, for products people need to try, drives trial. A footer note says barter is different again: it comes with agreed deliverables.",
    copy="""Seeding is the only influencer tactic where "nobody posted" can be an acceptable result.

That's the point of it.

Three terms often get used interchangeably:

Seeding: products go to carefully chosen creators with no obligation to post, so whatever appears is genuine.
Gifting: the relationship-led version, for a smaller group you want to know better.
Sampling: the volume version, for products people need to try.

(Barter is different again. It comes with agreed deliverables, so treat it as a deal, not a gift.)

Seeding makes sense when:
→ Your product is good enough that honest reactions help it. Seeding amplifies a weak product's problems too.
→ It's visual, tactile or experiential: food, beauty, gadgets, home, apparel
→ You want to see which creators genuinely like it before you pay anyone
→ You can afford for some boxes to produce nothing

A few practical habits:
→ Ask before sending. Many creators prefer to opt in, and it saves wasted product.
→ A short personal note beats a glossy brochure.
→ Say clearly there's no obligation, and explain how to disclose if they do post.

Our full guide to running seeding as a programme, not a mailing list: {link}"""),
# ---------------------------------------------------------------- 12
dict(
    time="10:30", category=TIPS,
    objective="Equip brands to evaluate agencies, including Kudozz; build trust through transparency.",
    audience="Founders and marketing heads shortlisting influencer marketing agencies",
    slug="influencer-marketing-agency-pitch-questions", service="campaign-strategy",
    cta="Use the 25-question list in the next agency pitch.",
    hashtags=["#InfluencerMarketing", "#MarketingAgency", "#MarketingLeadership", "#Kudozz"],
    copy="""When you're comparing influencer marketing agencies, the pitch deck tells you the least.

The answers to a few awkward questions tell you the most.

Worth asking every agency on your shortlist:

→ How would you approach our specific objective?
→ How do you find and vet creators? What does a shortlist actually look like?
→ How do you handle contracts, usage rights, disclosure and product claims?
→ How will you measure results, and what will the report show?
→ Who exactly will work on our account, day to day?
→ How do you charge, and what's included?
→ What happens when something goes wrong?

What separates strong answers from weak ones:

Strong answers are specific. They describe a documented process and admit trade-offs ("we'd suggest fewer creators here, because...").

Weak answers are vague, promise outcomes nobody can guarantee, or can't name who'll be doing the work.

Yes, you should ask us these too.

We've put together 25 questions, with what strong and weak answers sound like for each: {link}"""),
# ---------------------------------------------------------------- 13
dict(
    time="17:00", category=EDU,
    objective="Explain the difference between translated and genuinely localized regional campaigns in India.",
    audience="Brands targeting customers beyond English-speaking metros in India",
    slug="regional-influencer-marketing-india", service="regional-influencer-marketing",
    cta="Read the regional and vernacular campaign guide.",
    hashtags=["#RegionalMarketing", "#VernacularMarketing", "#InfluencerMarketing", "#IndiaMarketing"],
    copy="""Translating a national campaign into Tamil, Marathi or Bengali isn't a regional campaign.

It's a subtitled one.

Regional and vernacular influencer marketing works when the content feels like it was made for that audience, not adapted for it afterwards.

A few principles:

Define your customer by language and city tier, not just age and gender.
Someone in a tier 2 city who prefers Hindi content is a different viewer from a Delhi professional, even if both are 28.

Pick creators for language and audience relevance.
A native creator speaking to their own community brings context, humour and references a translation can't.

Don't assume one "regional" strategy fits everywhere.
"Non-metro" isn't one audience. Each language market needs its own research, not a stereotype.

Have native speakers check the content.
Not just for grammar, but for tone, idiom and whether a claim lands the way you intended.

Measure each region on its own terms.
A regional campaign compared directly against a national one often looks smaller. Compare it with its own baseline.

Our full guide to regional and vernacular creator campaigns in India: {link}

If you've run a regional campaign, what surprised you most?"""),
# ---------------------------------------------------------------- 14
dict(
    time="12:00", category=MIST,
    objective="Explain why platform and analytics numbers disagree and how to reconcile them.",
    audience="Performance marketers and analysts reporting on creator campaigns",
    slug="influencer-reporting-discrepancies", service="reporting",
    cta="Read the reconciliation guide before the next campaign report.",
    hashtags=["#MarketingAnalytics", "#MarketingAttribution", "#GA4", "#MarketingMeasurement"],
    copy="""Instagram says 212 purchases. GA4 says 140. Your store says 163.

(Hypothetical numbers, very familiar situation.)

Which one is right?

That's the wrong question. Each source is counting something different: different attribution models, different time windows, view-through credit versus clicks, and different handling of privacy settings.

A reconciliation process that works:

1. Agree one date range and time zone for every report
2. Write down each source's definition of a conversion and its attribution window
3. Pull your own orders or leads for the period, net of returns and cancellations
4. Match tagged sessions, code redemptions and platform conversions against those records
5. Look for broken links, duplicated codes, and bot or test orders
6. Report your own records as the main figure, with platform numbers as supporting context

And a few reporting errors worth avoiding:
→ Adding platform conversions and GA4 conversions together, counting the same sale twice
→ Comparing a 30-day campaign with a 7-day one
→ Using creator screenshots as the only source of reach
→ Treating code sales as proof the creator caused them, when codes leak

Our full guide to why the numbers differ and how to reconcile them: {link}"""),
# ---------------------------------------------------------------- 15
dict(
    time="11:00", category=TIPS,
    objective="Give a step-by-step vetting process that sits between shortlisting and contracting.",
    audience="Brand managers and agencies signing creator partnerships",
    slug="how-to-vet-influencers", service="creator-discovery",
    cta="Read the vetting guide and interactive checklist.",
    hashtags=["#InfluencerMarketing", "#BrandSafety", "#CreatorPartnerships", "#InfluencerCampaigns"],
    image="post-15-influencer-vetting-steps.png",
    alt="Kudozz graphic titled 'Vetting a creator in seven steps'. A numbered vertical sequence: 1 Basic profile review, 2 Audience analysis, 3 Engagement and authenticity, 4 Content review, 5 Brand-safety review, 6 Commercial review, 7 Final approval. A note reads 'After the shortlist, before the contract.'",
    notes="Weekend slot.",
    copy="""Shortlisting asks: could this creator work for us?

Vetting asks: is there anything that should stop us?

Different question, different checks. And it should happen after the shortlist, before anything is signed.

A structured vetting process has seven steps:

1. Basic profile review
2. Audience analysis
3. Engagement and authenticity checks
4. Content review
5. Brand-safety review
6. Commercial review
7. Final approval

Steps 4 and 5 are the ones most often rushed. A quick scroll through recent posts isn't a content review. Look at past sponsored work, how the creator handles disclosure, and whether anything in their history would be uncomfortable to see next to your brand.

Step 6 is where media kits deserve a second look. If audience data is only shown as a screenshot, ask for a screen recording of their insights.

For high-stakes partnerships, such as ambassadors, launches or regulated categories, go deeper. Check press coverage, past brand conflicts and any exclusivity they're already under.

Our full vetting guide, with a checklist you can use on your next shortlist: {link}"""),
# ---------------------------------------------------------------- 16
dict(
    time="11:30", category=IND,
    objective="Show FMCG-specific planning: objective, scale, regional coverage and standardised briefs.",
    audience="FMCG and consumer goods brand managers",
    slug="influencer-marketing-fmcg-brands-india", service="micro-nano-influencer-marketing",
    cta="Read the FMCG campaign planning guide.",
    hashtags=["#FMCG", "#FMCGMarketing", "#InfluencerMarketing", "#ConsumerBrands"],
    notes="Weekend slot.",
    copy="""FMCG influencer marketing has a scale problem most categories don't.

You may need dozens of creators to move awareness for an everyday product, and every one of them has to deliver the same core message in their own way.

That changes how you plan.

Start by deciding what the campaign is for.
Awareness, trial and launch campaigns need different scale, different creators and different measures. Trying to do all three at once usually does none of them well.

Decide on national or regional coverage early.
For many FMCG categories, regional-language creators reach customers that national campaigns miss.

Standardise the brief, not the content.
With a large creator group, one clear brief and a central management process stop the message from drifting.

Lean into everyday use.
FMCG products are part of daily routines. Creator demonstrations in a real kitchen, bathroom or commute tend to feel more natural than polished product shots.

Connect content to where people buy.
If the product sells through quick commerce, marketplaces or local stores, the content should help people find it there.

Our full FMCG campaign strategy guide, with a planning framework: {link}"""),
# ---------------------------------------------------------------- 17
dict(
    time="10:00", category=UGC,
    objective="Teach a structured, one-variable-at-a-time approach to testing UGC ads.",
    audience="Performance marketers and D2C growth teams running paid social",
    slug="ugc-paid-social-testing", service="ugc-campaigns",
    cta="Read the UGC paid social testing guide and test plan template.",
    hashtags=["#UGCAds", "#PerformanceMarketing", "#PaidSocial", "#UGCMarketing", "#CreativeTesting"],
    image="post-17-ugc-ad-testing-order.png",
    alt="Kudozz graphic titled 'Test UGC ads one variable at a time'. Eight numbered steps in order: 1 Hook, 2 Opening frame, 3 Script and body, 4 Creator, 5 CTA, 6 Length, 7 Edit style, 8 Aspect ratio. A note says to start with one creator and a few hook variations.",
    copy="""If you test the hook, the creator, the CTA and the length all at once, you'll learn one thing: that one ad did better than another.

You won't know why.

Testing UGC for paid social works better in sequence, one variable at a time:

1. Hook: test first, because it decides whether anyone sees the rest
2. Opening frame: the first visual, before the hook line even lands
3. Script and body: once a hook works, test how the middle is delivered
4. Creator: does a different delivery style change results on a proven script?
5. CTA: wording and placement
6. Length: shorter and longer cuts of the same content
7. Edit style: pacing, captions, music
8. Aspect ratio: made for each platform, not just resized

A practical starting point: one creator, a few hook variations. Then test CTAs on the winning hook. Only then add more creators or edit styles.

Two more things to plan for:

Creative fatigue. Even winning ads wear out. Plan refresh cycles before performance drops.

Measuring beyond click-through rate. Cheap clicks that don't convert aren't a win.

Our full guide, including a test plan template: {link}"""),
# ---------------------------------------------------------------- 18
dict(
    time="12:30", category=EDU,
    objective="Show a respectful, scope-based approach to negotiating creator fees.",
    audience="Brand and partnership managers negotiating with creators and talent managers",
    slug="negotiate-influencer-rates", service="outreach-management",
    cta="Read the negotiation guide and checklist.",
    hashtags=["#InfluencerMarketing", "#CreatorEconomy", "#Negotiation", "#CreatorPartnerships"],
    copy=""""Can you do it for less?"

It's probably the weakest sentence in influencer negotiation.

"What could we change in the scope to fit this budget?" is much stronger.

Fees reflect the work, so the fairer way to lower a fee is to change the work.

Before negotiating, understand what the quote includes:
→ How many deliverables, and what type
→ Revisions, raw footage, link in bio
→ How long the content stays up
→ Any usage rights or exclusivity priced in
→ Whether GST is extra

Two quotes that look far apart can be close once you compare them like for like.

Then the levers you can actually move:
→ Fewer or different deliverables
→ Shorter or narrower usage rights
→ Shorter exclusivity, or none
→ A more flexible timeline

Be honest about your budget. Creators set their own rates, and a lowball offer or pressure tactic can damage a relationship you may want later.

If the numbers don't work, walk away politely. A creator you didn't book this time could be the right fit next quarter.

And the lowest fee isn't always the best deal. A creator who misses deadlines or needs three rounds of revisions costs more than the invoice shows.

Our full guide to negotiating rates without damaging the relationship: {link}"""),
# ---------------------------------------------------------------- 19
dict(
    time="09:30", category=PLAN,
    objective="Give a practical order of questions for setting an influencer budget.",
    audience="Founders, CMOs and marketing managers setting budgets",
    slug="influencer-marketing-budget", service="campaign-strategy",
    cta="Read the budget planning guide, including the seven-step framework.",
    hashtags=["#InfluencerMarketing", "#MarketingBudget", "#MarketingPlanning", "#BrandStrategy"],
    copy=""""How much should we spend on influencer marketing?"

There's no honest percentage that fits every brand. There is, though, an order of questions that gets you to a defensible number:

1. What's the one primary objective, and what's a good result worth to the business?
2. How much content do you need, and where will it be used?
3. Which creator mix and how many creators?
4. What do real quotes say? (Published rate cards vary too widely to plan on.)
5. What are the non-creator costs? Management, production, usage rights, amplification, product, tracking and contingency.
6. How will you phase it?

That last one is underrated. Splitting the money into a test, a scale-up and a reserve means:

→ The test is big enough to learn something, so one unusual post doesn't decide the result
→ The scale-up goes to what actually worked
→ The reserve covers what you didn't expect, such as boosting a post that took off or replacing a creator who dropped out

A common budgeting mistake is spending everything on creator fees, then finding there's nothing left for usage rights or paid amplification once the content turns out to be good.

Our full budget guide, with a seven-step framework and a hypothetical example: {link}"""),
# ---------------------------------------------------------------- 20
dict(
    time="17:30", category=MIST,
    objective="Correct the misconception that paying for a post includes ad and reuse rights.",
    audience="Brand, social and performance teams reusing creator content",
    slug="influencer-usage-rights", service="ugc-campaigns",
    cta="Read the usage rights guide before the next contract.",
    hashtags=["#InfluencerMarketing", "#UsageRights", "#ContentMarketing", "#CreatorEconomy"],
    copy="""You paid for the Reel.

That doesn't automatically mean you can run it as an ad.

Paying for a creator's post and getting the right to reuse it are two different things. Usage rights also aren't the same as ownership, whitelisting or exclusivity, although they often get mixed up.

Usage rights should be agreed in writing, before the content is made, on five points:

1. Channels: where can the brand use it?
2. Formats: as posted, cut down, combined with other assets?
3. Organic or paid use
4. Territory: which countries?
5. Duration: for how long?

Plus one more: whether the brand may edit it.

On duration, match the licence to the plan:
→ If ads will run for 60 days, a 30-day licence is the wrong purchase
→ Trend-led Reels age faster than product demonstrations
→ A packaging change or relaunch ends the content's usefulness anyway

A useful compromise: a shorter licence plus a renewal fee fixed in advance. You only pay for longer use if the content earns it.

Our full guide to usage rights, with a checklist and a rights register: {link}"""),
# ---------------------------------------------------------------- 21
dict(
    time="13:00", category=IND,
    objective="Show travel-specific creator strategy for destinations, hotels and tour operators.",
    audience="Travel, hospitality and tourism marketers",
    slug="influencer-marketing-travel-brands-india", service="social-campaigns",
    cta="Read the travel creator campaign guide; share what changes for destination vs. package campaigns.",
    hashtags=["#TravelMarketing", "#TourismMarketing", "#HospitalityMarketing", "#TravelInfluencers"],
    copy="""Travel creator content has an unusual double job.

It has to make someone want to go. Then it has to help them work out how.

That's why travel campaigns benefit from thinking about what kind of business you are before choosing creators:

Destinations and tourism boards usually need discovery. Content that puts a place on someone's list.

Hotels and stays need experience content. What it actually feels like to be there.

Tour operators need itinerary content. Day-by-day, practical and specific enough to book from.

A few things that apply to all of them:

Short-form sparks interest. Long-form helps people plan. Most campaigns need both.

Pick creators whose audience travels the way you sell. A luxury resort and a backpacker hostel need very different creators, even in the same town.

Plan around booking windows, not just travel seasons. People often book well before they travel.

Disclose hosted trips. A complimentary stay is a commercial relationship, and the audience should know.

Our full guide to creator-led destination and travel campaigns: {link}

Travel marketers: does your best-performing creator content inspire, or inform?"""),
# ---------------------------------------------------------------- 22
dict(
    time="11:00", category=TIPS,
    objective="Map KPIs to campaign objectives so brands choose measures before creators.",
    audience="Marketing managers and analysts planning creator campaigns",
    slug="influencer-marketing-kpis", service="reporting",
    cta="Read the KPI guide, with 17 KPIs and their formulas.",
    hashtags=["#InfluencerMarketing", "#MarketingKPIs", "#MarketingAnalytics", "#InfluencerCampaigns"],
    image="post-22-kpis-by-objective.png",
    alt="Kudozz graphic titled 'Choose the KPI before the creator'. Four quadrants by objective. Awareness: reach, impressions, video views. Engagement: engagement rate, comment quality, saves and shares. Traffic: link clicks, click-through rate, UTM-tracked sessions. Conversion: conversions, revenue from codes or links, CPA, ROI or ROAS. A footer says to compare against your own baseline first.",
    notes="Weekend slot.",
    copy="""Pick the KPI before you pick the creators.

Otherwise it's very tempting to pick the KPI that makes the campaign look best.

The KPI should follow from the objective:

Awareness
→ Reach, impressions, video views

Engagement
→ Engagement rate, comment volume and quality, saves and shares

Traffic
→ Link clicks, click-through rate, UTM-tracked sessions

Conversion
→ Conversions, revenue through codes or links, cost per acquisition, ROI or ROAS

Three habits that make KPIs more useful:

1. Write down each KPI's formula. "Engagement rate" can be calculated against followers, reach or impressions, and each gives a different number. Agree one and stick to it.

2. Compare against your own baseline first. Industry benchmarks rarely say how they were measured. Your past campaigns do.

3. Keep reach and performance metrics separate. A campaign built for awareness shouldn't be judged on sales, and the reverse is just as unfair.

Our full KPI guide, with 17 metrics explained: {link}"""),
# ---------------------------------------------------------------- 23
dict(
    time="11:30", category=UGC,
    objective="Show that affiliate programmes succeed through activation, not just recruitment.",
    audience="E-commerce and D2C brands building creator sales channels",
    slug="influencer-affiliate-program", service="influencer-affiliate-marketing",
    cta="Read the affiliate programme guide.",
    hashtags=["#AffiliateMarketing", "#InfluencerMarketing", "#EcommerceMarketing", "#PerformanceMarketing"],
    notes="Diwali falls on or around 8 Nov 2026; confirm the date. You may prefer to move this post to a weekday or replace the slot with a short festive greeting.",
    copy="""Most influencer affiliate programmes don't stall at recruitment.

They stall after sign-up, when nobody gives affiliates a reason to post.

Signing creators up is the easy part. Activation is the real work:

→ Send product. Creators recommend what they've actually used.
→ Give a monthly theme or moment, such as a launch, a festival or a restock, with two or three content ideas
→ Offer time-limited bonuses for key periods, written into the terms
→ Give active affiliates early access to launches
→ Keep a simple community channel for questions and announcements
→ Pay fast and reliably. Late commission is the quickest way to lose good affiliates.

Where to find affiliates who'll actually stay active:
→ Customers who already create content about your product
→ Creators from seeding who posted without being asked
→ Creators from past paid campaigns who performed but weren't rebooked
→ Niche creators whose audiences already ask for recommendations in your category

And before any of that, set a commission structure your margins can sustain, with clear terms on disclosure, returns and payout timing.

Our full guide to building a creator-led sales channel: {link}"""),
# ---------------------------------------------------------------- 24
dict(
    time="10:00", category=EDU,
    objective="Explain the two layers of disclosure: platform tools and each market's rules.",
    audience="Brand, legal and compliance-aware marketers running creator campaigns across markets",
    slug="influencer-disclosure-rules-by-country", service="outreach-management",
    cta="Read the disclosure rules guide before briefing creators in a new market.",
    hashtags=["#InfluencerMarketing", "#MarketingCompliance", "#AdvertisingStandards", "#CreatorEconomy"],
    notes="Time-sensitive regulatory content. Re-check the linked article is current before posting.",
    copy="""Ticking "paid partnership" on Instagram is the start of disclosure, not the end of it.

Think of disclosure as two layers.

Layer 1: the platform's own tool
Instagram's paid partnership label, YouTube's paid promotion setting, TikTok's content disclosure setting.

Layer 2: the rules where the audience is
For example, ASCI's guidelines in India, the advertiser permit in the UAE, the Mawthooq licence in Saudi Arabia, the ASA and CMA in the UK, the AANA code and consumer law in Australia, and ASAS guidelines in Singapore.

Why the label alone isn't enough:
→ Regulators judge whether the audience clearly understood it was an ad, not whether a setting was ticked
→ Labels can be small, hidden by the interface, or missing on reposts
→ Some markets expect particular words, or disclosure at the start
→ Some markets require a licence or permit before the creator posts at all

What to put in the brief and contract:
→ The exact label wording and where it appears
→ Which platform tool to switch on, and that it stays on for ads
→ Permit or licence numbers, checked before booking
→ Claims the creator may and may not make
→ Who checks each post after it goes live

This isn't legal advice, and rules change, so check each market before you brief.

Our guide to disclosure rules by platform and country: {link}"""),
# ---------------------------------------------------------------- 25
dict(
    time="12:30", category=KUD,
    objective="Show how Kudozz works with brands from the first brief; invite enquiries without a hard sell.",
    audience="Brands preparing to brief an influencer marketing agency",
    slug="influencer-marketing-agency-brief", service="campaign-strategy",
    cta="Read the agency brief guide; email connect@kudozz.in to brief Kudozz.",
    hashtags=["#Kudozz", "#InfluencerMarketing", "#MarketingAgency", "#CampaignPlanning"],
    copy="""The most useful thing a brand can share before an influencer campaign is a budget range.

It's also the thing most often left out.

Without one, every agency guesses. You end up comparing proposals built for completely different budgets, which tells you very little.

When a brand briefs us, these are the things that make the biggest difference to the plan we come back with:

→ One primary objective, and the KPI that goes with it
→ The target customer, described by more than age and gender
→ The budget range, and what it needs to cover
→ Fixed dates and how long approvals take
→ Markets, regions and languages
→ Whether content will be used in ads (it changes creator fees)
→ What worked, and what didn't, in past creator campaigns

And one thing we'd suggest not asking for at the first stage: a final creator list. A good shortlist depends on understanding the brand first.

This applies whichever agency you brief. A clearer brief gets you proposals you can actually compare.

Here's our guide to writing an agency brief, with a twelve-section template: {link}

If you'd like to brief us, we're at connect@kudozz.in."""),
# ---------------------------------------------------------------- 26
dict(
    time="17:00", category=IND,
    objective="Show how B2B technology brands can work with practitioner and technical creators.",
    audience="B2B SaaS, developer tools and enterprise technology marketers",
    slug="influencer-marketing-b2b-technology", service="linkedin-influencer-marketing",
    cta="Read the B2B technology creator guide.",
    hashtags=["#B2BMarketing", "#TechMarketing", "#DeveloperMarketing", "#InfluencerMarketing"],
    copy="""In B2B tech, the most persuasive creator content often looks nothing like an ad.

It looks like a developer building something with your product on screen, including the parts that didn't work the first time.

B2B technology influencer marketing works with practitioners: developers, architects, security engineers, data scientists and IT leaders who already publish on YouTube, LinkedIn, newsletters, podcasts and community platforms.

Formats that tend to work:
→ Deep tutorials
→ Architecture walkthroughs
→ Honest comparisons
→ Live builds
→ Event sessions

Working with technical creators is a little different:

Give real access: accounts, credits or hardware, and an engineer they can ask.
Brief on the problem and the audience, not a script. Technical audiences spot scripts immediately.
Allow honest limitations. They're what makes the recommendation credible.
Review for technical accuracy, not tone.
Disclose sponsorship clearly in the video, description and posts.

And measure for long buying cycles. With buying committees involved, a tutorial can influence a decision months after it's published, so pipeline signals matter more than week-one clicks.

Our full guide to influencer marketing for B2B technology brands: {link}"""),
# ---------------------------------------------------------------- 27
dict(
    time="09:00", category=UGC,
    objective="Help brands judge readiness for an ambassador programme and how to structure one.",
    audience="Brand managers with recurring creator partnerships",
    slug="brand-ambassador-program", service="ambassador-programs",
    cta="Read the ambassador programme guide and planning framework.",
    hashtags=["#BrandAmbassadors", "#CreatorPartnerships", "#InfluencerMarketing", "#CommunityMarketing"],
    image="post-27-ambassador-programme-readiness.png",
    alt="Kudozz comparison graphic titled 'One-off campaign or ambassador programme?'. One-off campaigns suit a single launch or moment, testing new creators, and a fresh brief each time. An ambassador programme suits creators who already know the product, ongoing content over months, and tiers, roles and compensation agreed up front. A footer reads 'Not ready yet? Start by rebooking the creators who worked.'",
    copy="""If no creator has worked with your brand more than once, you're probably not ready for an ambassador programme yet.

That's fine. It tells you what to do next.

An ambassador programme is a structured, ongoing relationship with a group of creators or customers. It isn't just a longer contract with one influencer.

It tends to suit brands that:
→ Have creators who already know and use the product
→ Need content consistently over months, not around one moment
→ Can commit to the relationship work it takes

If that isn't you yet, the next step is simple: rebook the creators who worked. Repeat partnerships are where ambassador programmes usually start.

When you're ready, the structure matters:
1. Set programme objectives
2. Identify ambassadors who already fit
3. Structure compensation
4. Define roles and responsibilities
5. Build the relationship
6. Give creative freedom
7. Measure performance
8. Scale deliberately, with tiers

Our full guide to building a long-term creator network: {link}"""),
# ---------------------------------------------------------------- 28
dict(
    time="12:00", category=TIPS,
    objective="Give a practical system for storing, finding and reusing creator content safely.",
    audience="Brand, content and performance teams with growing creator content",
    slug="influencer-content-library", service="ugc-content-production",
    cta="Read the content library guide, including tags and rights register fields.",
    hashtags=["#ContentMarketing", "#UGCMarketing", "#CreatorContent", "#ContentOps"],
    copy="""Somewhere in a shared drive, your brand probably has creator content that would make a great ad.

Nobody can find it, and nobody's sure whether you're still allowed to use it.

An influencer content library fixes that. It's one shared place that stores every creator asset with three things attached:

1. Tags that make it findable: product, creator, format, hook, objective, market, language
2. A rights record: where it may be used, until when, and whether edits are allowed
3. Performance notes: how it did, and where

What's worth storing:
→ Final posted versions, with the live URL and date
→ Raw footage and alternative takes, if the contract includes them. These are often the most useful files for ads.
→ Edited cuts your team made, linked to the original
→ Captions, on-screen text and any claims used
→ The disclosure used

And a simple workflow:
→ Add each asset within a week of delivery
→ Search the library before requesting new content
→ Log every reuse, and check rights at the point of use
→ Archive expired assets rather than deleting them

Review expiring rights monthly, so nothing runs past its licence.

Our full guide to building a library your team will actually use: {link}"""),
# ---------------------------------------------------------------- 29
dict(
    time="11:00", category=PLAN,
    objective="Encourage brands to audit their influencer programme before scaling spend.",
    audience="Marketing leaders with an existing influencer programme planning to scale",
    slug="influencer-marketing-audit", service="reporting",
    cta="Read the audit guide and scoring sheet before the next budget increase.",
    hashtags=["#InfluencerMarketing", "#MarketingLeadership", "#MarketingStrategy", "#MarketingMeasurement"],
    image="post-29-influencer-programme-audit.png",
    alt="Kudozz graphic titled 'Audit before you scale'. Seven numbered areas to check: 1 Results measured consistently, 2 Tracking reliability, 3 Dependence on a few creators, 4 Content and rights records, 5 Contracts and payments, 6 Disclosure and claims in every market, 7 Operational capacity. A footer reads 'Fix anything rated weak before adding budget.'",
    notes="Weekend slot.",
    copy="""Before you double your influencer budget, check whether the results you're doubling are real.

An audit sounds bureaucratic. In practice it answers one question: will this programme still work at twice the size?

Seven areas to check:

1. Are results real, and measured the same way every time?
2. How reliable is the tracking?
3. How much depends on a few creators?
4. Are content and rights records complete?
5. Are contracts and payments in order?
6. Do disclosure and claims comply in every market?
7. Can the team handle more volume?

When it's worth doing:
→ Before a significant budget increase, a new market or a new platform
→ When results look very different from other channels and nobody can explain why
→ When a new marketing lead or agency takes over
→ Once a year for an always-on programme

How to keep it manageable: sample rather than read everything. For example, ten creators and twenty posts at random. Check source records, not just reports.

The common trap is auditing the results but not how they were measured. The other is treating compliance gaps as minor because the numbers look good.

Our full audit guide, with a scoring sheet and a hypothetical example: {link}"""),
# ---------------------------------------------------------------- 30
dict(
    time="11:30", category=KUD,
    objective="Close the 30-day series by showing Kudozz's multi-market approach; invite conversations.",
    audience="Brands planning creator campaigns across India, the GCC, the UK, Australia or Singapore",
    slug="ugc-localization", service="regional-influencer-marketing",
    cta="Read the localization guide; contact connect@kudozz.in about multi-market campaigns.",
    hashtags=["#Kudozz", "#InfluencerMarketing", "#GlobalMarketing", "#UGCMarketing", "#Localization"],
    notes="Closing post of the series. Weekend slot.",
    copy="""A creator video that works in Mumbai won't automatically work in Dubai, London or Sydney, even if everyone in it speaks English.

We run creator campaigns across India, the UAE, Saudi Arabia, the UK, Australia and Singapore. The most useful rule we work by is simple:

Keep the angle and the proof points global. Re-make the parts that signal "this isn't for you."

In practice, that means:

→ Cast local creators where possible, rather than subtitling one video for every market
→ Use the language or dialect customers actually speak
→ Match settings, seasons, prices, sizes, delivery and payment options to the market
→ Follow each market's disclosure and advertising rules
→ Have a native speaker of that exact language variety review the concept and the final edit

Two things that catch brands out:

Usage rights must name the territories. A licence for India doesn't cover the UAE or the UK unless it says so.

Each market should be reported against its own baseline before you compare markets with each other.

A simple structure helps: a one-page global brief, plus a short annex for each market with its claims, offers, dates and rules.

Our full guide to localizing UGC and influencer campaigns: {link}

That wraps up our first 30 days on LinkedIn. Thank you for reading along. If you're planning campaigns in more than one market, we'd be glad to talk: connect@kudozz.in"""),
]
