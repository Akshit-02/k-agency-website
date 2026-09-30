import type { BlogPost } from "@/content/blog";
import { CREATOR_AUTHOR, CREATOR_CLUSTER_PUBLISHED } from "@/content/creator-resources/shared";

/** Creator positioning: creator brand, niche, pitch deck, audience. */
export const creatorPositioningPosts: BlogPost[] = [
  {
    slug: "how-to-build-a-creator-brand",
    category: "Creator Resources",
    title: "How to Build a Personal Brand as a Creator (That Brands Want to Work With)",
    seoTitle: "How to Build a Personal Brand as a Creator",
    excerpt:
      "Your personal brand is what people, and brand managers, understand about you in the first ten seconds. Here's how to define your positioning, pillars, story, voice and credibility, and keep them consistent across platforms.",
    metaDescription:
      "How to build a personal brand as a creator: positioning, niche, content pillars, story and values, visual identity, voice, expertise, consistency across platforms, credibility and differentiation, with worksheets.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    updatedAt: "2026-09-29",
    readingTime: "12 min read",
    tags: ["personal brand", "creator brand", "personal brand for creators", "content pillars", "brand deals", "creator personal brand strategy"],
    related: ["creator-niche-selection", "how-to-build-an-audience-brands-want", "creator-media-kit"],
    body: [
      {
        type: "paragraph",
        text: "Brands rarely hire \"a creator.\" They hire the creator who makes budget skincare make sense to first-time buyers in Hindi, or the one whose weekend-trip Reels make people book a homestay. The clearer that sentence is about you, the easier you are to hire. That sentence is your creator brand.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator brand is the consistent set of things people associate with you: what you make, who it's for, how it looks and sounds, and why they trust you. To build one that attracts brands, define a one-line positioning, choose three or four content pillars, keep a recognisable visual style and voice, show real expertise or lived experience, post consistently, and make the fit with specific product categories obvious. Audience size helps, but a clear, credible brand is what makes a small or mid-sized creator easy to choose.",
      },
      { type: "heading", text: "What brands actually need to understand about you", id: "what-brands-need" },
      {
        type: "list",
        items: [
          "Who you speak to: age, city or region, language, life stage, interests.",
          "What problem or desire your content serves: saving money, learning a skill, looking good, finding places to go.",
          "Where their product fits naturally in your content, without a jarring ad break.",
          "Whether your audience trusts your recommendations.",
          "Whether you're reliable and professional to work with.",
        ],
      },
      {
        type: "paragraph",
        text: "If a brand manager can answer those five points from your profile and media kit in under a minute, your creator brand is doing its job. For how brands run this check from their side, see how brands choose the right influencer.",
        links: [{ text: "how brands choose the right influencer", href: "/blog/how-to-choose-the-right-influencer-for-your-brand" }],
      },
      { type: "heading", text: "The ten building blocks of a creator brand", id: "building-blocks" },
      {
        type: "table",
        headers: ["Building block", "What it means", "Quick test"],
        rows: [
          ["Positioning", "The one sentence that says what you make, for whom, and why you", "Could a stranger repeat it after seeing your bio?"],
          ["Niche", "The topic area and audience you focus on", "Can you name 20 brands that sell to this audience?"],
          ["Content pillars", "Three or four recurring themes or series", "Would a new follower know what to expect next week?"],
          ["Visual identity", "Colours, framing, fonts, thumbnails, cover style", "Can people recognise your post before seeing your name?"],
          ["Voice", "How you talk: calm expert, funny friend, blunt reviewer", "Would your captions sound like you if unsigned?"],
          ["Audience", "The specific people who follow and trust you", "Can you describe them beyond 'young people'?"],
          ["Expertise", "Qualifications, experience or lived experience", "Why should anyone believe you on this topic?"],
          ["Consistency", "Regular posting in a predictable style", "Could a brand predict what a sponsored post would look like?"],
          ["Credibility", "Honest reviews, disclosure, accurate claims", "Do you ever say a product isn't for everyone?"],
          ["Differentiation", "What makes you different from creators in the same niche", "What would your audience miss if you stopped?"],
        ],
      },
      { type: "heading", text: "Step 1: Write your positioning line", id: "positioning" },
      {
        type: "template",
        label: "Positioning formula",
        text: "I make [content type] for [specific audience] who want [outcome], in [language/format/style that makes me different].\n\nExamples (illustrative):\n• I make 60-second budget skincare explainers for first-time buyers in Hindi who want to stop wasting money on the wrong products.\n• I make weekend-trip Reels for working professionals in Ahmedabad who want short getaways they can plan on a Thursday night.\n• I make honest phone reviews for buyers under ₹20,000 who want to know what they're giving up at that price.",
      },
      {
        type: "paragraph",
        text: "Put a short version in your bio, the full version at the top of your media kit, and use it to decide what you post. If a content idea doesn't serve the positioning, it can still be posted, but it shouldn't be the majority.",
      },
      { type: "heading", text: "Step 2: Pick your content pillars", id: "content-pillars" },
      {
        type: "paragraph",
        text: "Pillars are the recurring themes that make up most of your feed. Three or four is enough. Each pillar should serve your audience and create natural slots for brands.",
      },
      {
        type: "table",
        headers: ["Example creator (illustrative)", "Pillars", "Natural brand fits"],
        rows: [
          ["Budget skincare, Hindi", "Myth or fact · Under ₹500 routines · Ingredient explainers · Honest reviews", "Sunscreen, cleansers, D2C skincare, pharmacy chains"],
          ["Gujarat weekend travel", "Two-day itineraries · Food stops · Stays under ₹3,000 · Monsoon trips", "Homestays, travel apps, state tourism, car rentals"],
          ["Budget smartphones", "First impressions · Camera tests · Long-term reviews · Buying guides", "Phone brands, accessories, e-commerce sale events"],
        ],
      },
      { type: "heading", text: "Step 3: Make your visual identity and voice recognisable", id: "visual-voice" },
      {
        type: "list",
        items: [
          "Pick two or three brand colours and use them in covers, text overlays and your media kit.",
          "Use a consistent thumbnail or cover template so your grid or channel looks intentional.",
          "Keep a recurring intro line, format or series name that people associate with you.",
          "Write captions the way you speak. If your audience talks in Hinglish, so can you.",
          "Keep sponsored content in your normal style. Brands hire you for your look and voice; don't switch to a generic ad voice.",
        ],
      },
      {
        type: "paragraph",
        text: "Your creator brand needs a home you control; see how to build a creator website, and for keeping your voice while using AI tools, AI tools for creators.",
        links: [{ text: "how to build a creator website", href: "/blog/how-to-build-a-creator-website" }, { text: "AI tools for creators", href: "/blog/ai-tools-for-creators" }],
      },
      { type: "heading", text: "Step 4: Show your expertise honestly", id: "expertise" },
      {
        type: "paragraph",
        text: "Expertise can be formal (a dermatology degree, a CA qualification, years as a chef) or lived (ten years of managing acne, three hundred weekend trips). Say which it is. In India, ASCI expects influencers giving specialised advice in areas such as health, nutrition and finance to hold appropriate qualifications, so creators without them should frame content as personal experience and avoid prescriptive claims.",
      },
      { type: "heading", text: "Step 5: Build credibility brands can borrow", id: "credibility" },
      {
        type: "list",
        items: [
          "Disclose every paid, gifted or affiliate partnership clearly.",
          "Say when a product didn't work for you, and who it might suit instead.",
          "Don't promote competing products back to back.",
          "Correct mistakes publicly when you get something wrong.",
          "Turn down brands that don't fit, even when the money is good.",
        ],
      },
      {
        type: "paragraph",
        text: "Brands pay creators for trust they can't buy directly. Every honest review adds to the value of your recommendations, including the paid ones.",
      },
      { type: "heading", text: "Step 6: Differentiate", id: "differentiate" },
      {
        type: "paragraph",
        text: "Look at five creators in your niche and list what they all do. Then pick one or two things you'll do differently: a language, a price bracket, a format, a depth of testing, a region, a sense of humour. Differentiation doesn't need to be dramatic. \"Same topic, but in Marathi\" or \"same topic, but only products under ₹999\" is enough.",
      },
      { type: "heading", text: "Step 7: Tell your story and show your values", id: "story-values" },
      {
        type: "paragraph",
        text: "A personal brand is more than a topic. It's why you care about it and what you stand for. Share the origin story (why you started), the standards you hold (\"I only review products I've bought or tested for a month\"), and the things you won't do. These become the reasons people trust you, and the filter brands use to judge fit.",
      },
      {
        type: "template",
        label: "Personal brand worksheet",
        text: "WHY I STARTED: [one or two sentences]\nWHAT I BELIEVE ABOUT MY TOPIC: [a point of view]\nMY STANDARDS: [e.g. honest reviews, disclose every partnership, no finance tips without sources]\nWHAT I WON'T DO: [e.g. promote crash diets, betting apps]\nHOW I WANT PEOPLE TO FEEL AFTER MY CONTENT: [e.g. confident, less confused]",
      },
      { type: "heading", text: "Step 8: Stay consistent across platforms", id: "across-platforms" },
      {
        type: "table",
        headers: ["Element", "Keep the same", "Adapt per platform"],
        rows: [
          ["Name and photo", "Yes", "No"],
          ["Positioning line", "Yes", "Length"],
          ["Visual style", "Colours, fonts, cover style", "Aspect ratios"],
          ["Voice", "Personality and values", "Formality (LinkedIn vs Instagram)"],
          ["Series", "Core series names", "Formats and lengths"],
        ],
      },
      {
        type: "paragraph",
        text: "Consistent identity also helps search engines and AI tools understand who you are; see creator SEO. For becoming known for one specific topic, see creator positioning, and for building credibility over time, how to build authority as a creator.",
        links: [{ text: "creator SEO", href: "/blog/creator-seo" }, { text: "creator positioning", href: "/blog/creator-positioning" }, { text: "how to build authority as a creator", href: "/blog/how-to-build-authority-as-a-creator" }],
      },
      { type: "heading", text: "You don't need a huge following", id: "no-huge-following" },
      {
        type: "paragraph",
        text: "A clear creator brand matters more at smaller sizes, not less. A brand choosing between two micro creators will usually pick the one whose positioning matches its customer. Size affects price and reach; positioning affects whether you're considered at all. See how to build an audience brands want to reach for the audience side.",
        links: [{ text: "how to build an audience brands want to reach", href: "/blog/how-to-build-an-audience-brands-want" }],
      },
      { type: "heading", text: "Creator brand checklist", id: "checklist" },
      {
        type: "list",
        items: [
          "One-line positioning in your bio and media kit",
          "Three or four named content pillars",
          "Consistent covers, thumbnails and colours",
          "A voice that's recognisably yours",
          "A clear statement of your expertise or experience",
          "A track record of honest reviews and proper disclosure",
          "One or two clear points of difference",
          "A list of product categories that fit naturally",
        ],
      },
      {
        type: "paragraph",
        text: "Next steps: narrow your focus with creator niche selection, then package your brand in a creator media kit and a creator pitch deck.",
        links: [
          { text: "creator niche selection", href: "/blog/creator-niche-selection" },
          { text: "creator media kit", href: "/blog/creator-media-kit" },
          { text: "creator pitch deck", href: "/blog/creator-pitch-deck" },
        ],
      },
      { type: "heading", text: "The personal brand system, and how it differs from positioning and authority", id: "brand-system" },
      {
        type: "image",
        src: "/blog/creator-resources/creator-personal-brand-system.svg",
        alt: "Creator personal brand system: positioning, expertise, content, consistency, proof and community",
        caption: "Recognition comes from all six, repeated over time.",
        width: 1200,
        height: 675,
      },
      {
        type: "table",
        headers: ["Concept", "Means", "Guide"],
        rows: [
          ["Personal brand", "How people perceive you overall", "This guide"],
          ["Positioning", "What you want to be known for", "Creator positioning"],
          ["Authority", "Why people trust your expertise", "How to build authority"],
          ["Thought leadership", "How your ideas shape your field", "Creator thought leadership"],
          ["Founder creator brand", "A founder's audience supporting a company", "Founder creator brand"],
          ["Employee creators", "Employees creating content about their work", "Employee influencer marketing"],
        ],
      },
      {
        type: "paragraph",
        text: "Guides: creator positioning, how to build authority as a creator, creator thought leadership, founder creator brand and employee influencer marketing.",
        links: [
          { text: "creator positioning", href: "/blog/creator-positioning" },
          { text: "how to build authority as a creator", href: "/blog/how-to-build-authority-as-a-creator" },
          { text: "creator thought leadership", href: "/blog/creator-thought-leadership" },
          { text: "founder creator brand", href: "/blog/founder-creator-brand" },
          { text: "employee influencer marketing", href: "/blog/employee-influencer-marketing" },
        ],
      },
    ],
    faqs: [
      {
        question: "What is a personal brand for a creator?",
        answer:
          "The consistent impression people have of a creator: their topic and positioning, story and values, voice and visual style, and the credibility they've earned. It's what makes a creator recognisable and trusted.",
      },
      {
        question: "What is a creator brand?",
        answer:
          "The consistent set of associations people have with a creator: what they make, who it's for, how it looks and sounds, and why they're trusted. It's what lets a brand quickly judge whether a creator fits its product.",
      },
      {
        question: "Do I need a big following to build a creator brand?",
        answer:
          "No. Clear positioning matters most for small and mid-sized creators, because it's what makes a brand choose you over similar-sized accounts.",
      },
      {
        question: "How many content pillars should a creator have?",
        answer: "Three or four recurring themes is enough for most creators. Each should serve your audience and create natural places for relevant brands.",
      },
      {
        question: "Should sponsored posts look different from my normal content?",
        answer: "No. Brands hire you for your style and voice. Keep sponsored content in your usual format, with clear disclosure.",
      },
    ],
  },
  {
    slug: "creator-niche-selection",
    category: "Creator Resources",
    title: "Creator Niche Selection: How to Choose a Niche Brands Actually Hire For",
    seoTitle: "Creator Niche Selection: How to Choose a Niche Brands Hire For",
    excerpt:
      "How to choose a creator niche that balances what you can sustain, what your audience wants and what brands pay for, with a scoring framework and real narrowing examples.",
    metaDescription:
      "How to choose a creator niche brands hire for: broad vs narrow niches, audience demand, expertise, sustainability, brand demand, monetization, competition, regional-language opportunities and sub-niches.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "10 min read",
    tags: ["creator niche", "how to choose a niche", "influencer niche India", "sub-niche", "regional creators"],
    related: ["how-to-build-a-creator-brand", "first-brand-collaboration-india", "how-to-find-brands-to-collaborate-with"],
    body: [
      {
        type: "paragraph",
        text: "\"Pick a niche\" is the most common advice new creators get, and the least specific. The useful question isn't whether to niche down, but how far, and in which direction, so that you can keep making content, people keep watching it, and brands have a reason to pay for it.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Choose a niche where three things overlap: a topic you can make content about for years, an audience that actively looks for that content, and brands that sell to that audience and already work with creators. Start one or two levels narrower than the broad category (for example skincare rather than beauty, or budget smartphones rather than technology), add a language or regional angle if it's natural to you, and test with 20 to 30 posts before committing.",
      },
      { type: "heading", text: "Broad vs narrow niches", id: "broad-vs-narrow" },
      {
        type: "table",
        headers: ["", "Broad niche (e.g. lifestyle, tech)", "Narrow niche (e.g. budget smartphones)"],
        rows: [
          ["Audience", "Large but loosely connected", "Smaller but specific and engaged"],
          ["Competition", "Very high", "Lower, easier to stand out"],
          ["Brand fit", "Many brands, weak fit", "Fewer brands, strong fit"],
          ["Growth", "Harder to get recommended consistently", "Easier to become the go-to creator"],
          ["Risk", "Hard to explain what you do", "Can feel limiting; may run out of ideas if too narrow"],
        ],
      },
      { type: "heading", text: "How to narrow: three examples", id: "narrowing-examples" },
      {
        type: "image",
        src: "/blog/creator-resources/niche-narrowing.svg",
        alt: "Three niche-narrowing ladders: Beauty to skincare to acne skincare to Indian acne skincare; Technology to gadgets to smartphones to budget smartphones; Travel to India travel to weekend trips to Gujarat weekend travel",
        caption: "Each step down the ladder makes the audience more specific and the brand fit stronger.",
        width: 1200,
        height: 675,
      },
      {
        type: "list",
        items: [
          "Beauty → skincare → acne skincare → acne skincare for Indian skin and climate. Brand fit: dermatology-led D2C brands, sunscreen, pharmacy chains, skincare marketplaces.",
          "Technology → gadgets → smartphones → budget smartphones. Brand fit: phone brands' budget lines, accessories, e-commerce sale events.",
          "Travel → India travel → weekend trips → Gujarat weekend travel. Brand fit: homestays, regional tourism boards, car rentals, local restaurants, travel apps.",
        ],
      },
      {
        type: "paragraph",
        text: "Notice that the last step often adds geography or language. That's frequently where Indian creators find the least competition and the most loyal audiences.",
      },
      { type: "heading", text: "The niche scorecard", id: "scorecard" },
      {
        type: "paragraph",
        text: "Score each niche you're considering from 1 (weak) to 5 (strong) on each factor. The total isn't a formula for success, but it makes trade-offs visible.",
      },
      {
        type: "table",
        headers: ["Factor", "Question to ask", "Where to look"],
        rows: [
          ["Sustainability", "Can I make 150 posts on this without burning out?", "Brainstorm 50 post ideas; if you struggle at 20, it's too narrow"],
          ["Expertise or experience", "Why should people listen to me on this?", "Your job, study, hobbies, life experience"],
          ["Audience demand", "Are people actively searching and asking about this?", "YouTube and Instagram search suggestions, comments on similar creators, Reddit and Quora questions"],
          ["Brand demand", "Do brands sell to this audience and pay creators?", "Paid partnership labels and sponsored segments on similar creators"],
          ["Monetization range", "Beyond sponsorships, are there affiliate, product or service options?", "Affiliate programmes, courses and products in the niche"],
          ["Competition", "Can I be distinctive here?", "Top 20 creators in the niche; what's missing?"],
          ["Language or regional angle", "Is there an underserved language or region?", "Search the topic in your language; count active creators"],
        ],
      },
      {
        type: "template",
        label: "Worked example (illustrative scores)",
        text: "Niche A: General fashion (English)\nSustainability 4 · Expertise 2 · Audience demand 5 · Brand demand 5 · Monetization 4 · Competition 1 · Language angle 1 = 22\n\nNiche B: Office wear under ₹1,500 for women in Tier 2 cities (Hindi + English)\nSustainability 4 · Expertise 4 · Audience demand 4 · Brand demand 4 · Monetization 4 · Competition 4 · Language angle 4 = 28\n\nNiche B scores higher mainly on competition and language, the two factors new creators most often ignore.",
      },
      { type: "heading", text: "Checking brand demand before you commit", id: "brand-demand" },
      {
        type: "list",
        items: [
          "Find 10 creators in the niche. Note every brand they've worked with in the last six months.",
          "Check whether those brands pay creators (paid partnership labels, sponsored segments, creator ads) or only gift products.",
          "Look for brands advertising to the audience even without creators; they're future prospects.",
          "Check affiliate availability for the products your audience would buy.",
        ],
      },
      {
        type: "paragraph",
        text: "The how to find brands to collaborate with guide has a repeatable routine for this research.",
        links: [{ text: "how to find brands to collaborate with", href: "/blog/how-to-find-brands-to-collaborate-with" }],
      },
      { type: "heading", text: "Regional-language opportunities", id: "regional" },
      {
        type: "paragraph",
        text: "Many Indian categories are crowded in English and thin in regional languages. A personal finance creator in Tamil, a skincare creator in Bengali or a tech reviewer in Marathi may face far fewer direct competitors, and brands expanding beyond metros actively look for them. Choose a language you're genuinely fluent and comfortable creating in; audiences notice when it isn't natural.",
      },
      { type: "heading", text: "Sub-niches and series", id: "sub-niches" },
      {
        type: "paragraph",
        text: "You don't need one tiny niche forever. Many creators keep a focused core (for example budget smartphones) and add adjacent series over time (budget earbuds, phone photography tips). Expand when your core audience asks for it, not when you're bored.",
      },
      { type: "heading", text: "Test before you commit", id: "test" },
      {
        type: "list",
        items: [
          "Post 20 to 30 pieces in the niche over six to eight weeks.",
          "Track average views, saves, shares and follower growth per post, not just one viral hit.",
          "Read comments: are people asking follow-up questions and product questions?",
          "Notice whether you still enjoy making it.",
          "Adjust the angle (audience, price point, language, format) before abandoning the topic.",
        ],
      },
      {
        type: "paragraph",
        text: "Choosing a niche is the first step; becoming known within it is creator positioning.",
        links: [{ text: "creator positioning", href: "/blog/creator-positioning" }],
      },
      { type: "heading", text: "Common niche mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Choosing only by what pays the most, with no genuine interest.",
          "Going so narrow there are no brands or no audience.",
          "Switching niches every month before any content has a chance to find its audience.",
          "Copying a big creator's niche exactly instead of finding an angle.",
          "Ignoring disclosure and qualification expectations in regulated areas like finance and health.",
        ],
      },
      {
        type: "paragraph",
        text: "Once you've chosen, turn it into a clear identity with how to build a creator brand, and when you're ready for your first partnership, follow how to get your first brand collaboration in India.",
        links: [
          { text: "how to build a creator brand", href: "/blog/how-to-build-a-creator-brand" },
          { text: "how to get your first brand collaboration in India", href: "/blog/first-brand-collaboration-india" },
        ],
      },
      {
        type: "paragraph",
        text: "If your audience speaks an Indian language, your niche can be defined by language and region as well as topic; see regional creator growth in India.",
        links: [{ text: "regional creator growth in India", href: "/blog/regional-creator-growth-india" }],
      },
      {
        type: "paragraph",
        text: "To see how others already serve a niche, and where the gaps are, use creator competitor analysis.",
        links: [{ text: "creator competitor analysis", href: "/blog/creator-competitor-analysis" }],
      },
    ],
    faqs: [
      {
        question: "How do I choose a niche as a creator?",
        answer:
          "Look for the overlap between a topic you can sustain for years, an audience actively looking for that content, and brands that sell to that audience and pay creators. Start one or two levels narrower than a broad category and test with 20 to 30 posts.",
      },
      {
        question: "Is a narrow niche better for brand deals?",
        answer:
          "Usually, up to a point. A specific niche makes brand fit obvious and competition lower. Too narrow, and there may not be enough audience or brands. Aim for specific but sustainable.",
      },
      {
        question: "Should I create in a regional language?",
        answer:
          "If you're genuinely fluent, often yes. Many categories have far fewer creators in regional languages, and brands expanding beyond metros look for them.",
      },
      {
        question: "Can I change my niche later?",
        answer: "Yes. Many creators expand into adjacent topics once their core audience is established. Frequent unrelated switches make it harder for audiences and brands to understand you.",
      },
    ],
  },
  {
    slug: "creator-pitch-deck",
    category: "Creator Resources",
    title: "How to Create a Creator Pitch Deck for Brand Collaborations",
    seoTitle: "Creator Pitch Deck: How to Make One for Brand Collaborations",
    excerpt:
      "A pitch deck is built for one brand and one idea, unlike a media kit. Here's when to use one, what goes on each slide, and a sample structure you can adapt.",
    metaDescription:
      "How to create a creator pitch deck for brand collaborations: pitch deck vs media kit vs portfolio vs rate card, what each slide should include, campaign concepts, and a sample 8-slide structure.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "9 min read",
    tags: ["creator pitch deck", "influencer pitch deck", "sponsorship deck", "brand collaboration proposal", "media kit vs pitch deck"],
    related: ["creator-media-kit", "creator-campaign-proposal", "how-to-pitch-brands-as-a-creator"],
    body: [
      {
        type: "paragraph",
        text: "A media kit says \"here's who I am.\" A pitch deck says \"here's what I'd do for you.\" When you're approaching a brand you really want, or answering a bigger opportunity like a launch or a long-term partnership, that second message is the one that gets meetings.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A creator pitch deck is a short, brand-specific presentation (usually 6 to 10 slides) that proposes one or more campaign ideas for a particular brand, backed by your positioning, audience fit, platform data and relevant past work. Use it for high-value or long-term opportunities. It differs from a media kit (general, reusable), a portfolio (your body of work) and a rate card (prices). Structure it as cover, positioning, audience fit, performance, campaign concepts, proof, what's included, and next steps, with rates optional.",
      },
      { type: "heading", text: "Pitch deck vs media kit vs portfolio vs rate card", id: "differences" },
      {
        type: "table",
        headers: ["Document", "Purpose", "Tailored per brand?", "Use it when"],
        rows: [
          ["Media kit", "Summary of you, your audience and performance", "No (general)", "First pitches and replies to inbound enquiries"],
          ["Pitch deck", "Proposes specific ideas for one brand", "Yes", "High-value brands, launches, long-term partnerships, agency pitches"],
          ["Portfolio", "Shows your work and results", "Sometimes curated", "When a brand is evaluating your quality"],
          ["Rate card", "Lists prices and inclusions", "No (general)", "After you understand the brief"],
          ["Campaign proposal", "Formal scope, timeline and fee responding to a brief", "Yes", "When a brand has sent a brief and asked for a quote"],
        ],
      },
      {
        type: "paragraph",
        text: "A pitch deck is proactive: you bring the idea. A campaign proposal is reactive: you respond to a brand's brief. See the creator campaign proposal guide for that case, and the creator media kit guide for the general document.",
        links: [
          { text: "creator campaign proposal guide", href: "/blog/creator-campaign-proposal" },
          { text: "creator media kit guide", href: "/blog/creator-media-kit" },
        ],
      },
      { type: "heading", text: "What goes on each slide", id: "slides" },
      {
        type: "image",
        src: "/blog/creator-resources/pitch-deck-structure.svg",
        alt: "Eight-slide creator pitch deck structure: cover, positioning, audience fit, performance, campaign concepts, proof, what's included, next steps",
        caption: "Eight slides is enough for most pitches. The campaign concepts slide does the heavy lifting.",
        width: 1200,
        height: 675,
      },
      { type: "subheading", text: "1. Cover" },
      {
        type: "paragraph",
        text: "\"[Your name] × [Brand]: [one-line idea]\". Your photo, handle and the month. The cover should already tell them this deck was made for them.",
      },
      { type: "subheading", text: "2. Creator positioning" },
      {
        type: "paragraph",
        text: "Your one-line positioning, content pillars and why you're relevant to this brand in particular. See how to build a creator brand if you haven't written your positioning yet.",
        links: [{ text: "how to build a creator brand", href: "/blog/how-to-build-a-creator-brand" }],
      },
      { type: "subheading", text: "3. Audience fit" },
      {
        type: "paragraph",
        text: "Put your audience next to the brand's target customer: age, cities, language, interests. Only include data from your native insights, with the date.",
      },
      { type: "subheading", text: "4. Platform data" },
      {
        type: "paragraph",
        text: "Average views per format, reach, and the engagement signals that match the brand's goal (saves for consideration, shares for awareness, link taps for traffic). Label the metrics and date range. Engagement rate vs reach explains which to lead with.",
        links: [{ text: "Engagement rate vs reach", href: "/blog/engagement-rate-vs-reach-for-creators" }],
      },
      { type: "subheading", text: "5. Campaign concepts" },
      {
        type: "paragraph",
        text: "One to three specific ideas. For each: a working title, the format, the story or hook, where the product appears, and why it suits your audience. This is the slide that makes a deck worth more than a media kit.",
      },
      { type: "subheading", text: "6. Proof" },
      {
        type: "paragraph",
        text: "Two or three relevant past pieces or short case studies, ideally in the same category. See creator case studies for how to present results without leaning on vanity metrics.",
        links: [{ text: "creator case studies", href: "/blog/creator-case-study" }],
      },
      { type: "subheading", text: "7. What's included (services)" },
      {
        type: "paragraph",
        text: "The deliverables behind each concept, the timeline, and optional add-ons like paid usage or whitelisting. Rates are optional here; many creators say \"investment on request\" and send a proposal once the brand is interested.",
      },
      { type: "subheading", text: "8. Next steps and contact" },
      {
        type: "paragraph",
        text: "A clear ask (\"a 15-minute call next week?\"), your business email and phone, and a link to your full media kit and portfolio.",
      },
      { type: "heading", text: "Sample structure you can copy", id: "sample-structure" },
      {
        type: "template",
        label: "8-slide creator pitch deck (illustrative content)",
        text: "SLIDE 1 — COVER\nPriya × [Brand]: \"Sunscreen Myth or Fact\" launch series · Oct 2026\n\nSLIDE 2 — WHO I AM\nBudget skincare explainers in Hindi for first-time buyers · Pillars: Myth or fact · Under ₹500 routines · Honest reviews\n\nSLIDE 3 — AUDIENCE FIT\nMy audience: 18–27, Lucknow / Jaipur / Delhi / Indore, Hindi-first\nYour target (from your launch posts): first-time SPF buyers, Tier 1–2 cities\n\nSLIDE 4 — PERFORMANCE (native insights, last 90 days)\nAvg Reel views · avg saves · top cities · Story link taps\n\nSLIDE 5 — CONCEPTS\n1. \"Myth or Fact\" Reel: white cast test on camera\n2. 7-day wear test Story series with link sticker\n3. Optional: Collab Reel with your brand account\n\nSLIDE 6 — PROOF\nTwo past skincare collaborations with one-line results each\n\nSLIDE 7 — WHAT'S INCLUDED\nDeliverables per concept · timeline · add-ons (paid usage, whitelisting)\n\nSLIDE 8 — NEXT STEPS\n15-minute call? · email · phone · media kit link",
      },
      { type: "heading", text: "Design and format tips", id: "design" },
      {
        type: "list",
        items: [
          "Keep it short: 6 to 10 slides. Brand teams skim.",
          "Use the brand's name and product visuals only as references to their public materials, not as if they endorsed your deck.",
          "Use your own photos and screenshots; don't use other creators' images.",
          "Export as a small PDF and also keep a shareable link version.",
          "Name the file clearly: yourname-x-brand-pitch-oct-2026.pdf",
        ],
      },
      { type: "heading", text: "When not to send a pitch deck", id: "when-not" },
      {
        type: "list",
        items: [
          "For a quick gifting enquiry or a simple one-post request; a short email and media kit is enough.",
          "When a brand has sent a formal brief: respond with a proposal that follows their structure.",
          "To brands you haven't researched. A generic deck is worse than a short personal email.",
        ],
      },
      {
        type: "paragraph",
        text: "Send the deck with a short personal email. Our brand collaboration email templates and the how to pitch brands as a creator guide cover the message around it.",
        links: [
          { text: "brand collaboration email templates", href: "/blog/brand-collaboration-email-templates" },
          { text: "how to pitch brands as a creator", href: "/blog/how-to-pitch-brands-as-a-creator" },
        ],
      },
    ],
    faqs: [
      {
        question: "What is a creator pitch deck?",
        answer:
          "A short, brand-specific presentation that proposes campaign ideas for one brand, supported by your positioning, audience fit, performance data and relevant past work.",
      },
      {
        question: "What is the difference between a pitch deck and a media kit?",
        answer:
          "A media kit is a general summary you reuse with every brand. A pitch deck is tailored to one brand and proposes specific campaign ideas for it.",
      },
      {
        question: "How many slides should a creator pitch deck have?",
        answer: "Six to ten slides is typical. Eight works well: cover, positioning, audience fit, performance, concepts, proof, what's included and next steps.",
      },
      {
        question: "Should I include rates in a pitch deck?",
        answer:
          "It's optional. Many creators list what's included and say pricing is available on request, then send a formal proposal once the brand is interested.",
      },
    ],
  },
  {
    slug: "how-to-build-an-audience-brands-want",
    category: "Creator Resources",
    title: "How to Build a Creator Audience That Brands Want to Reach",
    seoTitle: "How to Build a Creator Audience Brands Want to Reach",
    excerpt:
      "Brands don't pay for followers. They pay for the right people paying attention. Here's how to build an audience with relevance, trust, retention and community, and how to show it.",
    metaDescription:
      "How to build a creator audience brands want: audience relevance, trust, consistency, niche authority, engagement, retention, community, geographic and language relevance, and why follower count alone isn't enough.",
    author: CREATOR_AUTHOR,
    publishedAt: CREATOR_CLUSTER_PUBLISHED,
    readingTime: "10 min read",
    tags: ["build an audience", "creator audience", "audience quality", "retention", "community building", "creator audience strategy", "attract the right followers"],
    related: ["how-to-build-a-creator-brand", "engagement-rate-vs-reach-for-creators", "creator-analytics-for-brand-deals"],
    body: [
      {
        type: "paragraph",
        text: "Two creators each have 50,000 followers. One gets steady brand enquiries; the other gets gifting DMs from brands that have nothing to do with their content. The difference is rarely the number. It's who those 50,000 people are, whether they trust the creator, and whether they watch.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Brands want to reach audiences that are relevant to their product, trust the creator, pay attention (strong views, watch time and saves) and are concentrated in the places and languages they sell to. To build one, serve a specific audience consistently, create content people return to and save, reply and build community, stay honest about recommendations, and track audience demographics and retention, not just follower growth. No follower count guarantees brand deals; relevance and trust are what make an audience valuable.",
      },
      { type: "heading", text: "Why follower count alone isn't enough", id: "follower-count" },
      {
        type: "list",
        items: [
          "Short-form platforms distribute content to non-followers, so followers don't predict views.",
          "Followers gained from giveaways, trends or viral one-offs often aren't interested in your niche.",
          "An audience scattered across countries or languages may not reach a brand's customers.",
          "Bought or inactive followers lower engagement and are increasingly easy for brands to spot.",
        ],
      },
      { type: "heading", text: "The seven qualities brands look for", id: "qualities" },
      {
        type: "table",
        headers: ["Quality", "What it looks like", "How to show it"],
        rows: [
          ["Relevance", "Audience matches the brand's customer", "Age, city, gender, language from native insights"],
          ["Trust", "People act on your recommendations", "Questions like \"where did you buy it?\", code usage, repeat buyers"],
          ["Attention", "People watch and read, not just scroll", "Average views, watch time, completion, saves"],
          ["Consistency", "Regular content in a predictable style", "Posting history, series, stable averages"],
          ["Niche authority", "You're a go-to voice on a topic", "Search visibility, other creators referencing you, expert questions"],
          ["Community", "Your audience talks to you and each other", "Comment threads, replies, DMs, broadcast channel activity"],
          ["Geographic and language fit", "Audience is where the brand sells", "Top cities and states, language split"],
        ],
      },
      { type: "heading", text: "1. Serve a specific audience", id: "specific-audience" },
      {
        type: "paragraph",
        text: "Write down who you're making content for in one sentence, then check each post against it. \"Working women in Pune who want quick, healthy lunches\" makes a clearer audience than \"food lovers.\" The niche selection guide covers how to choose.",
        links: [{ text: "niche selection guide", href: "/blog/creator-niche-selection" }],
      },
      { type: "heading", text: "2. Make content people return to", id: "return-content" },
      {
        type: "list",
        items: [
          "Series: numbered or named formats people follow (\"Day 12 of budget meals\").",
          "Reference content: lists, guides, comparisons people save for later.",
          "Answers: content built from real questions in your comments.",
          "Honest updates: long-term reviews that show what happened after the first week.",
        ],
      },
      { type: "heading", text: "3. Improve retention before reach", id: "retention" },
      {
        type: "paragraph",
        text: "Retention (how much of each video people watch) and saves tell platforms and brands that content is worth attention. Check where viewers drop off in your analytics, tighten hooks and cut slow openings. On YouTube, audience retention and average view duration in YouTube Studio are the numbers to watch; on Instagram, Reel watch time and saves.",
      },
      { type: "heading", text: "4. Build community, not just followers", id: "community" },
      {
        type: "list",
        items: [
          "Reply to comments, especially questions, in the first hour after posting.",
          "Pin useful answers and turn repeat questions into content.",
          "Use Stories polls, question stickers and broadcast channels to hear from your audience.",
          "Feature audience responses and credit them.",
          "Set clear community norms and moderate abuse.",
        ],
      },
      {
        type: "paragraph",
        text: "For turning an engaged audience into a community with its own rituals, see how to build a creator community, and for an audience you own outright, how to build an email newsletter.",
        links: [{ text: "how to build a creator community", href: "/blog/how-to-build-a-creator-community" }, { text: "how to build an email newsletter", href: "/blog/creator-newsletter-india" }],
      },
      { type: "heading", text: "5. Protect trust", id: "trust" },
      {
        type: "paragraph",
        text: "Your audience's trust is what brands are really paying for. Disclose partnerships clearly, don't promote products you wouldn't use, say who a product isn't right for, and space out sponsored posts so your feed doesn't feel like an ad break. An audience that trusts you will act on sponsored content; one that feels sold to will scroll past.",
      },
      { type: "heading", text: "6. Know your geography and language", id: "geography-language" },
      {
        type: "paragraph",
        text: "For Indian creators, the city, state and language mix of your audience can matter as much as its size. A brand launching in Tamil Nadu or selling mainly in Tier 2 cities will value an audience concentrated there. Check your insights regularly and create in the language your audience responds to best, including Hinglish if that's how they talk.",
      },
      { type: "heading", text: "7. Don't inflate", id: "dont-inflate" },
      {
        type: "paragraph",
        text: "Buying followers, joining engagement pods or running giveaways purely for follows can make numbers look bigger for a while, but they dilute your real audience, hurt engagement and are the patterns brands check for when vetting creators. See how brands identify fake followers and fake engagement.",
        links: [{ text: "how brands identify fake followers and fake engagement", href: "/blog/how-to-identify-fake-followers" }],
      },
      { type: "heading", text: "How to show your audience to brands", id: "show-audience" },
      {
        type: "list",
        items: [
          "Audience demographics screenshot (age, gender, top cities, languages) with date.",
          "Average views and reach per format over a recent period.",
          "Saves, shares and comment examples that show trust and intent.",
          "Evidence of action: link taps, code redemptions or product questions, where you can share them.",
        ],
      },
      {
        type: "paragraph",
        text: "For which numbers to lead with, see engagement rate vs reach and creator analytics for brand deals.",
        links: [
          { text: "engagement rate vs reach", href: "/blog/engagement-rate-vs-reach-for-creators" },
          { text: "creator analytics for brand deals", href: "/blog/creator-analytics-for-brand-deals" },
        ],
      },
      {
        type: "paragraph",
        text: "To track whether your audience is really growing, not just your follower count, see follower growth vs audience growth.",
        links: [{ text: "follower growth vs audience growth", href: "/blog/follower-growth-vs-audience-growth" }],
      },
      { type: "heading", text: "Audience health checklist", id: "checklist" },
      {
        type: "list",
        items: [
          "I can describe my audience in one specific sentence",
          "Most of my audience is in the cities/languages I create for",
          "My average views are stable, not driven by one viral post",
          "Saves and shares are growing, not just likes",
          "Comments include real questions and conversation",
          "Sponsored posts perform close to my organic average",
          "I've never bought followers or engagement",
        ],
      },
      { type: "heading", text: "How to attract the right followers, not just more", id: "right-followers" },
      {
        type: "paragraph",
        text: "Audience strategy is as much about who you don't attract as who you do. Content choices send signals.",
      },
      {
        type: "table",
        headers: ["Attracts the right followers", "Attracts the wrong ones"],
        rows: [
          ["Specific topics for a defined audience", "Broad viral bait unrelated to your niche"],
          ["Series people return for", "One-off trends with no follow-up"],
          ["Honest recommendations", "Giveaways requiring follows and tags"],
          ["Language and examples your audience uses", "Generic content made for everyone"],
          ["Collaborations with adjacent creators", "Follow-for-follow schemes"],
        ],
      },
      {
        type: "paragraph",
        text: "Define who you want first with how to identify your ideal audience, then check what they actually want with creator audience research.",
        links: [
          { text: "how to identify your ideal audience", href: "/blog/identify-ideal-audience-creator" },
          { text: "creator audience research", href: "/blog/creator-audience-research" },
        ],
      },
    ],
    faqs: [
      {
        question: "How many followers do I need to get brand deals?",
        answer:
          "There's no guaranteed number. Brands work with creators of all sizes when the audience is relevant, engaged and trusts the creator. Size mainly affects price and reach, not whether you're considered.",
      },
      {
        question: "What kind of audience do brands want?",
        answer:
          "One that matches their customer (age, location, language, interests), pays attention to content, trusts the creator's recommendations, and is consistent rather than inflated by one-off viral spikes.",
      },
      {
        question: "Why is my engagement low even though followers are growing?",
        answer:
          "Often because new followers came from content outside your niche, giveaways or trends. Focus on content for your core audience and track saves, shares and average views alongside follower growth.",
      },
      {
        question: "Does audience location matter for Indian creators?",
        answer:
          "Yes. Brands often sell in specific cities, states or language markets, so an audience concentrated where they sell can be more valuable than a larger, scattered one.",
      },
    ],
  },
];
