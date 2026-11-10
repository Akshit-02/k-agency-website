import type { BlogPost } from "@/content/blog";
import { AUTHOR } from "@/content/brand-guides/shared";
import { SOURCES } from "@/content/creator-resources/shared";

/**
 * Customer advocacy and commerce discovery gaps (1760–1809). Three pages: customer advocacy programs (1764, with
 * 1766), creator content in AI-assisted product discovery (1780) and creator partnerships for marketplace sellers
 * (1784). Retention, post-purchase and product-page topics were served by updating existing owners. See
 * docs/brand-guides-1760-1809-audit.md.
 */
const PUBLISHED = "2026-10-10";
const REVIEWED = "October 2026";

const EXT = {
  amazonAttribution: "https://advertising.amazon.com/solutions/products/amazon-attribution",
  amazonInfluencerIndia: "https://affiliate-program.amazon.in/influencers",
  openaiShopping: "https://openai.com/index/chatgpt-shopping-research/",
  rufusIndia: "https://www.aboutamazon.in/news/retail/rufus-ai-shopping-assistant-launch-in-india",
  geminiFlipkartTest: "https://yourstory.com/ai-story/gemini-shopping-assistant-flipkart-india",
  bisReviews: "https://www.businesstoday.in/latest/corporate/story/govt-announces-new-norms-to-curb-fake-online-reviews-of-products-services-353634-2022-11-21",
};

export const customerCommercePosts: BlogPost[] = [
  // 1764 (+1766)
  {
    slug: "customer-advocacy-program",
    category: "Campaign Strategy",
    title: "Customer Advocacy Programs: How Brands Can Turn Existing Fans Into Creator Partners",
    seoTitle: "Customer Advocacy Programs With Creators",
    excerpt:
      "How to build a customer advocacy program: finding the fans already talking about you, choosing who to invite, rewards that don't buy opinions, disclosure for customers, content rights, when an advocate becomes a paid creator, and what to measure.",
    metaDescription:
      "Build a customer advocacy program: find existing fans, invite the right ones, reward without buying opinions, handle disclosure and rights, and measure it.",
    author: AUTHOR,
    publishedAt: PUBLISHED,
    updatedAt: "2026-10-25",
    lastReviewed: REVIEWED,
    readingTime: "6 min read",
    tags: ["customer advocacy program", "brand advocacy program", "turn customers into creators", "brand fans program", "customer creator program India"],
    related: ["influencer-marketing-customer-retention", "brand-ambassador-program", "influencer-affiliate-program"],
    hero: {
      src: "/blog/brand-guides/customer-advocacy-program.svg",
      alt: "Steps in a customer advocacy program: find fans, invite, reward and disclose, support, measure",
    },
    body: [
      {
        type: "paragraph",
        text: "Some of a brand's most convincing content comes from people it never paid: customers who post their routines, tag the product in reviews or answer questions in comment sections. A customer advocacy program gives those people a reason and a structure to keep going, without turning their honesty into a script. It sits between organic word of mouth and a paid creator roster.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "A customer advocacy program invites existing customers who already talk about your brand to share their experience more often, in exchange for non-cash or modest rewards such as early access, products, recognition or referral credit. Find them through tagged posts, reviews and support history, invite a small group first, require disclosure whenever they receive anything of value, agree on how you may reuse their content, and move the most consistent advocates into paid creator partnerships with proper contracts.",
      },
      { type: "heading", text: "Advocates, ambassadors and affiliates", id: "compare" },
      {
        type: "table",
        headers: ["", "Customer advocates", "Ambassadors", "Affiliates"],
        rows: [
          ["Who they are", "Existing customers, often with small followings", "Creators chosen for audience and fit", "Anyone who can drive tracked sales"],
          ["Why they post", "They already like the product", "A paid, longer-term partnership", "Commission on sales"],
          ["Typical reward", "Early access, products, recognition, referral credit", "Fees plus product", "Commission per sale"],
          ["Main value", "Credibility, real use cases, content volume", "Consistent reach and a recognizable face", "Measurable sales"],
          ["Main risk", "Undisclosed rewards, uneven quality", "Cost, fit over time", "Coupon leakage, low-quality traffic"],
        ],
      },
      {
        type: "paragraph",
        text: "Programs often run together: advocates feed content and referrals, the best become ambassadors, and affiliate links handle tracked sales. See influencer ambassador programs and influencer affiliate programs for those structures.",
        links: [
          { text: "influencer ambassador programs", href: "/blog/brand-ambassador-program" },
          { text: "influencer affiliate programs", href: "/blog/influencer-affiliate-program" },
        ],
      },
      { type: "heading", text: "Finding the fans you already have", id: "find" },
      {
        type: "list",
        items: [
          "Tagged posts and mentions: people who post about you without being asked. Brand mention monitoring helps here.",
          "Reviews: detailed, specific reviews (positive or balanced) on your site and marketplaces.",
          "Repeat customers: people with several orders or long subscriptions, especially if they've referred others.",
          "Support and community: customers who answer other customers' questions in groups or comments.",
          "Sales and service teams: in B2B, account managers know which clients speak well of you in public.",
        ],
      },
      {
        type: "paragraph",
        text: "Only contact people through channels they've used with you, and use what you know about them for the purpose they'd expect. Customer data falls under India's data protection framework; see influencer marketing data privacy for the practical rules. Monitoring for mentions is covered in brand mention monitoring.",
        links: [
          { text: "influencer marketing data privacy", href: "/blog/influencer-marketing-data-privacy" },
          { text: "brand mention monitoring", href: "/blog/brand-mention-monitoring" },
        ],
      },
      { type: "heading", text: "Choosing who to invite", id: "invite" },
      {
        type: "table",
        headers: ["Criterion", "Look for", "Be wary of"],
        rows: [
          ["Genuine use", "Posts and reviews over months, not one burst", "Accounts that post about many competing brands"],
          ["Specificity", "Real details: how they use it, what didn't work", "Generic praise that could be about any product"],
          ["Tone", "Helpful to other customers", "Hostility toward competitors or other customers"],
          ["Content history", "Nothing you couldn't stand behind", "Past posts that conflict with your brand's values"],
          ["Audience", "Followers who resemble your customers", "Large but unrelated followings"],
        ],
      },
      {
        type: "paragraph",
        text: "Start with ten to thirty people. A small group lets you learn what they need, check content quality and fix the rules before you scale.",
      },
      { type: "heading", text: "Rewards that don't buy opinions", id: "rewards" },
      {
        type: "paragraph",
        text: "The value of an advocate is that they'd say it anyway. Rewards should thank and equip them, not pay for praise. Never make a reward conditional on a positive post or a star rating.",
      },
      {
        type: "table",
        headers: ["Reward", "Works well for", "Watch out for"],
        rows: [
          ["Early access and previews", "Launches; advocates love being first", "Confidentiality: agree what can be shown, and when"],
          ["Free products to try", "New variants, honest first impressions", "Counts as a material connection, so it must be disclosed"],
          ["Recognition (features, badges, events)", "Community-driven categories", "Featuring their content needs permission"],
          ["Referral credit", "Repeat-purchase categories", "Track it, and disclose it like any incentive"],
          ["Feedback sessions with the product team", "Advocates who care about the product", "Make sure feedback is acted on and acknowledged"],
        ],
      },
      { type: "heading", text: "Disclosure applies to customers too", id: "disclosure" },
      {
        type: "paragraph",
        text: "Under ASCI's influencer guidelines, a material connection includes free products (even unsolicited ones), discounts, gifts, contest entries and other benefits, and it must be disclosed with a label such as 'Free gift', 'Collaboration' or 'Ad', in English or the language of the post. The government's endorsement guidance for influencers says the same in plain terms. Small followings don't change this. Give advocates the exact label to use, show them where it goes (upfront, not buried in hashtags), and check posts. The full rules are in the creator disclosure guide.",
        links: [
          { text: "ASCI's influencer guidelines", href: SOURCES.asciGuidelines },
          { text: "endorsement guidance for influencers", href: SOURCES.docaEndorsements },
          { text: "creator disclosure guide", href: "/blog/creator-disclosure-guide" },
        ],
      },
      {
        type: "paragraph",
        text: "Reviews need extra care. Marketplaces restrict reviews written in exchange for products or rewards, and India's voluntary standard for online reviews (IS 19000:2022) expects paid reviews to be disclosed. Keep advocacy content on social channels and your own site, and don't ask advocates for marketplace ratings in return for anything.",
        links: [{ text: "voluntary standard for online reviews", href: EXT.bisReviews }],
      },
      { type: "heading", text: "Content rights and reuse", id: "rights" },
      {
        type: "paragraph",
        text: "Seeing a customer's post doesn't give you the right to use it in ads or on product pages. Ask each time, in writing, and say where it will appear and for how long. For program members, a simple standing agreement can cover reposts on your own social accounts, with separate permission for paid ads. Usage terms are explained in influencer usage rights.",
        links: [{ text: "influencer usage rights", href: "/blog/influencer-usage-rights" }],
      },
      { type: "heading", text: "When a customer becomes a creator partner", id: "graduate" },
      {
        type: "paragraph",
        text: "Some advocates will grow audiences or produce work good enough for ads. When you start asking for specific deliverables, deadlines or paid usage, the relationship has become a creator partnership: offer a fee, a written agreement and the same terms you'd give any creator. Keeping someone on product rewards while asking for professional output is unfair and tends to end the relationship.",
      },
      {
        type: "table",
        headers: ["Signal", "What to offer"],
        rows: [
          ["Consistent, high-quality posts over several months", "A paid trial collaboration with a brief"],
          ["Content that performs well when reposted", "A usage-rights fee for ads"],
          ["Growing, relevant audience", "A place in the ambassador program"],
          ["Strong referrals", "An affiliate agreement with commission"],
        ],
      },
      { type: "heading", text: "Connecting creator campaigns to a customer referral programme", id: "creator-referrals" },
      {
        type: "paragraph",
        text: "Creators bring in new customers; a referral programme turns those customers into the next source of customers. The two work best together when the creator introduces the referral offer, not when every creator is paid as an affiliate.",
      },
      {
        type: "table",
        headers: ["Approach", "How it works", "When it fits"],
        rows: [
          ["Creator introduces the referral offer", "The creator's audience gets a welcome offer plus a referral link to share after their first order", "Products people talk about with friends and family"],
          ["Give-get rewards", "Both the referrer and the friend receive a reward, such as credit or a free item", "Repeat-purchase categories"],
          ["Creator-themed referral moments", "A limited-time referral push tied to a creator's series or launch", "Launches and festivals"],
          ["Referral leaderboards for advocates", "Top-referring customers get early access or a feature, not cash", "Community-led brands"],
          ["Affiliate only for true partners", "Commission for creators who actively sell; referral rewards for everyone else", "Brands with both creators and customer advocates"],
        ],
      },
      {
        type: "list",
        items: [
          "Keep the referral reward the same however a customer arrived, so creator customers aren't treated differently.",
          "Track which creator brought the first customer, then count the referrals that customer makes.",
          "Referrers who post publicly about a reward must disclose it.",
          "Don't reward reviews or ratings; reward referrals only.",
          "Judge creators on the customers they bring and the referrals those customers make, over months.",
        ],
      },
      {
        type: "paragraph",
        text: "Commission-based creator partnerships are covered in influencer affiliate programmes.",
        links: [
          { text: "influencer affiliate programmes", href: "/blog/influencer-affiliate-program" },
        ],
      },
      { type: "heading", text: "What to measure", id: "measure" },
      {
        type: "list",
        items: [
          "Content volume and quality: posts per month, share usable on your own channels.",
          "Reach among relevant people, not total impressions.",
          "Referral sales and new customers, net of returns.",
          "Repeat purchase and retention among advocates and the customers they refer.",
          "Questions answered and sentiment in comments where advocates are active.",
          "Program health: active members, drop-off, disclosure compliance rate.",
        ],
      },
      {
        type: "paragraph",
        text: "Compare referred customers with similar customers from other sources before drawing conclusions; see how to measure customer quality from influencer campaigns.",
        links: [{ text: "how to measure customer quality from influencer campaigns", href: "/blog/influencer-customer-quality" }],
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical, for illustration only. A home-baking supplies brand finds 40 customers who regularly post bakes with its products. It invites 20, offers early access to new flavors and a referral code, and gives everyone a one-page guide: use 'Free gift' when posting about products you received, say what you actually think, and tell us before we repost. After three months, six members post consistently; the brand offers three of them paid recipe collaborations with usage rights for ads.",
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Rewarding only positive posts or star ratings.",
          "Assuming small accounts don't need to disclose.",
          "Reposting customer content in ads without permission.",
          "Asking advocates for professional deliverables without paying them.",
          "Inviting hundreds of people before testing the program with a few.",
          "Measuring only referral codes and ignoring retention.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "A customer advocacy program works when it amplifies what customers already believe. Find the fans you have, reward them without buying their opinions, make disclosure easy, ask before reusing their content, and pay the ones who become creators. For the wider retention picture, see influencer marketing for customer retention.",
        links: [{ text: "influencer marketing for customer retention", href: "/blog/influencer-marketing-customer-retention" }],
      },
    ],
    faqs: [
      {
        question: "What is a customer advocacy program?",
        answer:
          "A structured way to encourage existing customers who already like your brand to share their experience, with modest rewards such as early access, products, recognition or referral credit, clear disclosure, and permission before their content is reused.",
      },
      {
        question: "Do customers in an advocacy program need to disclose?",
        answer:
          "Yes, whenever they receive something of value. ASCI's guidelines treat free products, discounts, gifts and similar benefits as a material connection, regardless of follower count.",
      },
      {
        question: "When should a customer advocate be paid?",
        answer:
          "When you ask for specific deliverables, deadlines or paid usage of their content. At that point the relationship is a creator partnership and needs a fee and a written agreement.",
      },
    ],
  },
  // 1780
  {
    slug: "creator-content-ai-product-discovery",
    category: "Campaign Strategy",
    title: "AI Shopping Search and Creator Content: How D2C Brands Get Discovered in India",
    seoTitle: "AI Shopping Search and Creator Content: A D2C Guide",
    excerpt:
      "What Google AI Mode, Gemini, ChatGPT and Amazon's Rufus actually use when they recommend products in India, where creator content fits, what is live versus only in pilots, and the practical steps a D2C brand can take without buying into promises of guaranteed AI visibility.",
    metaDescription:
      "How D2C brands in India get discovered in AI shopping search: what AI Mode, Gemini, ChatGPT and Rufus use, where creator content fits, and steps that help.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-10-10",
    updatedAt: "2026-11-10",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: ["AI product discovery India", "ChatGPT shopping brands India", "AI shopping search D2C", "creator content AI search", "generative engine optimization creators"],
    related: ["youtube-product-reviews", "ugc-content-ecommerce", "influencer-marketing-seo"],
    hero: {
      src: "/blog/brand-guides/creator-content-ai-product-discovery.svg",
      alt: "How creator content can reach AI shopping answers: honest reviews, text on your site, consistent facts, disclosure, measurement",
    },
    body: [
      {
        type: "paragraph",
        text: "A shopper in Pune asks Gemini which sunscreen suits oily skin under ₹600. Another asks Rufus on the Amazon app whether a mixer grinder is loud. A third types the same question into ChatGPT. None of them scrolls ten blue links. For a D2C founder, the practical question is what these systems read when they answer, whether creator content plays any part, and what you can sensibly do about it this quarter. Some of the mechanics are documented; a lot is not. This guide sticks to what the platforms themselves say.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "AI shopping search in India is live for discovery and still limited for checkout. Google AI Mode shopping works in English and Gemini shopping in English and Hindi; Rufus runs on Amazon.in; ChatGPT shows organic product results. They draw on product feeds, retailer pages, reviews and public web content, including video. Creator content helps indirectly: honest, specific reviews add accurate information about your product, YouTube videos are among the sources Google's AI answers cite, and creator insights republished as text on your pages are easy to read. No provider sells guaranteed inclusion, so treat anyone who promises it with suspicion.",
      },
      { type: "heading", text: "What is live in India, and what is only a pilot", id: "india-status" },
      {
        type: "paragraph",
        text: "Much of the coverage of AI shopping is about the US. In India the picture as of November 2026 is that discovery is live and checkout inside the assistant is mostly pilots and tests. Plan around what customers can actually use.",
      },
      {
        type: "table",
        headers: ["Capability", "India status (November 2026)", "Source"],
        rows: [
          ["Google AI Mode shopping (listings, prices, reviews, comparison tables)", "Live in English; Hindi announced as rolling out", "Google India blog, 7 April 2026"],
          ["Gemini app shopping", "Live in English and Hindi", "Google India blog, 7 April 2026"],
          ["Amazon Rufus", "Live on Amazon.in since 2024", "Amazon India announcement and press"],
          ["ChatGPT product results", "Organic results, not ads; OpenAI's merchant feed specification targets the US", "OpenAI developer documentation"],
          ["ChatGPT Instant Checkout", "Was US-only and was wound down in March 2026; purchases now happen on merchant sites or merchant apps", "Checkout.com, 20 April 2026, citing OpenAI"],
          ["ChatGPT ads", "Live in India since late August 2026 for logged-in Free and Go users", "PPC Land, citing OpenAI"],
          ["Buying Flipkart products inside Gemini or AI Mode", "Limited test for some users", "TechCrunch, 26 September 2026"],
          ["UPI payments inside AI assistants", "Pilots with named merchants only; NPCI has not issued agent-specific rules", "Razorpay; MediaNama, September 2026"],
        ],
      },
      {
        type: "paragraph",
        text: "Sources: Google India's April 2026 shopping announcement, OpenAI's product feed specification, Checkout.com's analysis of OpenAI's checkout shift, PPC Land's report on ChatGPT ads in India and TechCrunch's report on the Flipkart test. Features change quickly, so check each before you plan around it. The payment and agent side of this, including UPI pilots, is explained in what agentic commerce means for D2C brands in India.",
        links: [
          { text: "Google India's April 2026 shopping announcement", href: "https://blog.google/intl/en-in/products/explore-communicate/new-ways-google-is-using-ai-to-make-shopping-easier/" },
          { text: "OpenAI's product feed specification", href: "https://developers.openai.com/commerce/specs/feed" },
          { text: "Checkout.com's analysis of OpenAI's checkout shift", href: "https://www.checkout.com/blog/openai-agentic-commerce-shift" },
          { text: "PPC Land's report on ChatGPT ads in India", href: "https://ppc.land/openai-gains-32-chatgpt-ad-markets-in-5-days-as-india-goes-live/" },
          { text: "what agentic commerce means for D2C brands in India", href: "/blog/agentic-commerce-india-d2c-brands" },
        ],
      },
      {
        type: "paragraph",
        text: "Two consequences for a founder. First, the near-term value is in being described accurately when a shopper asks, not in selling inside a chat window. Second, organic and paid are now separate: ChatGPT ads can be bought in India, but buying ads does not change what the organic answer says about your product.",
      },
      { type: "heading", text: "What AI shopping systems read", id: "what-they-read" },
      {
        type: "paragraph",
        text: "Each system documents its inputs differently, and none publishes a ranking formula. What they do say is consistent enough to plan on.",
      },
      {
        type: "table",
        headers: ["System", "Documented inputs", "What it means for you"],
        rows: [
          ["Google AI Overviews and AI Mode", "Indexed web pages that are eligible for a snippet; Merchant Center feeds and Business Profiles; relevant images and video. Google says no special schema or files are needed.", "Keep Merchant Center accurate, keep key facts in text, and make video eligible for search"],
          ["ChatGPT shopping", "Structured product data from merchants and providers (price, description, availability) plus third-party content. The feed holds images, star rating and review count, not video or review text.", "Your product data must be clean; creator content reaches ChatGPT only indirectly, through the public web"],
          ["Amazon Rufus", "Information from across Amazon.in and the web", "Your listing (titles, bullets, A+ content, reviews, Q&A, video) is the main material Rufus has to work with"],
        ],
      },
      {
        type: "paragraph",
        text: "Google's own guide to optimising for generative AI features adds one line every brand should read: seeking inauthentic mentions across the web isn't as helpful as it might seem. In September 2026 Google also added a creator property to video structured data, so a video's creator can be marked up explicitly. Both point the same way: genuine, attributable content from real people, not volume.",
        links: [
          { text: "Google's own guide to optimising for generative AI features", href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" },
        ],
      },
      { type: "heading", text: "Where creator content fits", id: "fit" },
      {
        type: "paragraph",
        text: "There is no public evidence that an assistant counts creator videos and ranks products accordingly, and you should be sceptical of anyone who claims to know the weighting. There is, however, evidence that video is a large share of what Google's AI answers cite, and that Indian shoppers use creators and AI side by side.",
      },
      {
        type: "list",
        items: [
          "Conductor's tracking from September 2025 to March 2026 found YouTube was the top-cited domain for purchase-intent queries in AI Overviews every month, while AI Mode leaned on Google's own shopping properties. Conductor does not state the geography, and its method is thinly described.",
          "A Google-commissioned Ipsos survey of 2,450 Indian festive shoppers (September to November 2025) found 73% look to online creators for inspiration, and that among people who research with AI chatbots, 87% also use YouTube.",
        ],
      },
      {
        type: "paragraph",
        text: "Read together: creators are not a route around AI search; they sit alongside it. A shopper who sees a Reel may ask an assistant to compare options, then watch a longer review before buying. Creator content contributes in three ways. It adds specific, experience-based detail (who a product suits, what it's like after a month, how it compares) that thin product pages lack. It generates questions and answers in comments and on retailer pages. And its key points can be republished as text on your product pages, FAQs and comparison guides, where any system can read them. Conductor's citation tracking and the Google India festive shopper research are the sources above.",
        links: [
          { text: "the Google India festive shopper research", href: "https://blog.google/intl/en-in/products/google-companies/decoding-indias-two-speed-festive-shopper-how-ai-search-and-youtube-drive-the-cart/" },
        ],
      },
      { type: "heading", text: "Practical steps for a D2C brand", id: "steps" },
      {
        type: "paragraph",
        text: "None of these steps is specific to AI. Each one also helps ordinary search, marketplace conversion and customers who never touch an assistant, which is the best test of whether it's worth doing.",
      },
      {
        type: "table",
        headers: ["Step", "Why it helps", "Also helps"],
        rows: [
          ["Keep Merchant Center and marketplace listings complete and current", "Google says feeds help products appear in AI responses; Rufus reads your Amazon listing", "Shopping ads, marketplace conversion"],
          ["Structure variants properly (size, colour, shade as separate, labelled variants)", "Feeds and listings represent variants explicitly; confused variants produce confused answers", "Fewer wrong-variant returns"],
          ["Brief creators for honest, specific reviews, including who it isn't for", "Specific use cases and limits make public information accurate and credible", "Conversion and returns"],
          ["Publish creator videos on YouTube with clear titles, descriptions and captions", "Puts spoken detail into text and makes video eligible for Google surfaces", "YouTube search, accessibility"],
          ["Mark up videos you host with video structured data, including the creator", "Google added a creator property in September 2026", "Video rich results"],
          ["Summarise creator insights as text on product pages and FAQs, with permission", "Your page becomes the clearest single source on the product", "Product-page conversion"],
          ["Keep product facts identical across site, marketplaces and creator briefs", "Contradictions between sources produce contradictory answers", "Fewer complaints"],
          ["Get creator videos onto your Amazon and Flipkart listings where supported", "Listing content is what Rufus and marketplace search work from", "Marketplace conversion"],
        ],
      },
      {
        type: "paragraph",
        text: "How to reuse creator videos on product pages is covered in using creator content on product pages, review-led YouTube campaigns in YouTube product reviews, and marketplace listings in influencer marketing for Amazon and Flipkart sellers. Kudozz's UGC campaigns service covers briefing and producing review content with usage rights for your site and listings.",
        links: [
          { text: "using creator content on product pages", href: "/blog/creator-content-product-pages" },
          { text: "YouTube product reviews", href: "/blog/youtube-product-reviews" },
          { text: "influencer marketing for Amazon and Flipkart sellers", href: "/blog/influencer-marketing-amazon-flipkart-sellers" },
          { text: "UGC campaigns service", href: "/services/ugc-campaigns" },
        ],
      },
      { type: "heading", text: "Risks and rules", id: "risks" },
      {
        type: "list",
        items: [
          "Disclosure still applies. A paid or gifted review must carry a label such as 'Ad' or 'Collaboration' under ASCI's guidelines, however an assistant later summarises it.",
          "Don't fake volume. Fabricated reviews, review swaps and undisclosed paid reviews risk consumer-protection action and marketplace penalties, and India's standard for online reviews (IS 19000:2022) expects paid reviews to be disclosed. Google's review-snippet guidelines were also tightened in July 2026 on fake and undisclosed incentivised reviews.",
          "Don't brief dozens of creators with identical talking points to flood the web. Google says inauthentic mentions don't help much, and readers notice.",
          "Assistants make mistakes. If one repeats an inaccurate claim about your product, correct the underlying public sources: your pages, listings and any creator content that got it wrong. There's usually no way to edit an answer directly.",
        ],
      },
      {
        type: "paragraph",
        text: "Disclosure rules by market are in influencer marketing compliance.",
        links: [{ text: "influencer marketing compliance", href: "/blog/influencer-marketing-compliance" }],
      },
      { type: "heading", text: "Measuring it honestly", id: "measure" },
      {
        type: "paragraph",
        text: "You can't measure AI visibility the way you measure search rankings, and Indian brands currently have little first-party reporting on it. Use these signals and label them as directional:",
      },
      {
        type: "list",
        items: [
          "Referral traffic from AI assistants in your analytics, where the referrer is passed.",
          "Branded search trends in Search Console after creator campaigns.",
          "Customer service mentions such as 'Gemini said' or 'ChatGPT recommended'.",
          "A monthly log of fixed prompts (same wording, same products, date recorded) across the assistants your customers use, noting whether your product appears and whether the description is accurate.",
          "Accuracy, not just presence: an answer that mentions you with the wrong price or claim is a problem to fix.",
        ],
      },
      {
        type: "paragraph",
        text: "Report these separately from campaign results, and don't credit sales to an 'AI effect' without a test. How creator partnerships affect traditional search is covered in influencer marketing and SEO.",
        links: [{ text: "influencer marketing and SEO", href: "/blog/influencer-marketing-seo" }],
      },
      { type: "heading", text: "Questions to ask an agency selling AI visibility", id: "agency-questions" },
      {
        type: "list",
        items: [
          "Which assistants and features does this cover in India specifically, and what documentation supports the approach?",
          "What exactly will be created or changed, and would it be useful to customers if AI search didn't exist?",
          "How will results be measured, what is the baseline, and what would count as no effect?",
          "Does the plan involve paid or gifted reviews, and how will they be disclosed?",
          "Is any part of it ads (for example ChatGPT ads), and is that priced and reported separately from organic work?",
        ],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Paying for 'guaranteed AI citations' or 'ranking in ChatGPT'.",
          "Planning around in-chat checkout that isn't available to Indian shoppers.",
          "Leaving key information only in video, with no text version.",
          "Inconsistent claims, prices or variant names across creators, marketplaces and your site.",
          "Treating manual prompt checks as hard performance data.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "AI shopping search in India rewards clear, accurate and widely available product information, as far as anyone outside these companies can tell. Get your feeds and listings right, brief creators for honest and specific reviews, publish video where search can find it, and put the useful parts into text on your own pages. Plan creator content for customers first; what helps them is also your best bet with the assistants they're starting to use.",
      },
    ],
    faqs: [
      {
        question: "Can Indian shoppers buy products directly inside ChatGPT?",
        answer:
          "Not broadly. ChatGPT's Instant Checkout was US-only and was wound down in March 2026, and OpenAI's merchant feed specification targets the US. Indian UPI payments inside AI assistants exist only as pilots with named merchants. In India, treat ChatGPT as a discovery channel that sends shoppers to your site or a marketplace.",
      },
      {
        question: "Do creator reviews affect AI shopping recommendations?",
        answer:
          "Possibly, indirectly. Assistants summarise public product information, and honest, specific creator reviews add to it. US studies show YouTube is heavily cited in Google's AI Overviews. No provider documents a way to buy or engineer an organic recommendation.",
      },
      {
        question: "Does Google need special markup or an llms.txt file for AI Mode?",
        answer:
          "No. Google says pages need to be indexed and eligible for a snippet, with important content in text and structured data that matches what's visible. Merchant Center feeds help products appear, and video structured data now supports a creator property.",
      },
      {
        question: "Is buying ChatGPT ads the same as appearing in ChatGPT's answers?",
        answer:
          "No. OpenAI says product results in ChatGPT are selected independently and are not ads. ChatGPT ads, live in India since August 2026, are a separate paid placement and don't change what the organic answer says.",
      },
      {
        question: "Should a small D2C brand spend money on AI visibility now?",
        answer:
          "Spend on the fundamentals first: accurate feeds and listings, honest creator reviews, captioned video and clear product pages. They help every channel. Be wary of paying separately for 'AI optimisation' that wouldn't be useful to customers on its own.",
      },
    ],
  },
  // 1784
  {
    slug: "influencer-marketing-amazon-flipkart-sellers",
    category: "Campaign Strategy",
    title: "Influencer Marketing for Amazon and Flipkart Sellers: A Practical Playbook",
    seoTitle: "Influencer Marketing for Amazon and Flipkart Sellers in India",
    excerpt:
      "How marketplace sellers in India can work with creators: when it pays, getting listings ready, the creator programmes Amazon, Flipkart and YouTube now run, getting creator video onto listings, tracking without Amazon Attribution, review rules and sale-event timing.",
    metaDescription:
      "Influencer marketing for Amazon and Flipkart sellers in India: listing readiness, creator programmes, listing videos, tracking that works and review rules.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-10-10",
    updatedAt: "2026-11-10",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: [
      "influencer marketing for Amazon sellers",
      "Flipkart seller influencer marketing",
      "marketplace seller creator campaigns",
      "Amazon influencer program for brands",
      "drive traffic to Amazon listing influencers",
    ],
    related: ["influencer-marketing-ecommerce-brands-india", "ugc-content-ecommerce", "influencer-affiliate-program"],
    hero: {
      src: "/blog/brand-guides/influencer-marketing-amazon-flipkart-sellers.svg",
      alt: "A marketplace seller's creator plan: fix the listing, choose creators, tag links, time to sales, read results",
    },
    body: [
      {
        type: "paragraph",
        text: "Many Indian brands sell mainly through Amazon, Flipkart and category marketplaces such as Nykaa or Myntra rather than their own websites. Creator campaigns work differently for them: the sale happens on someone else's platform, the data you get back is limited, and the listing has to do the converting. The good news is that the marketplaces have spent 2026 building their own creator plumbing, so sellers now have more ways to connect creators to sales than they did a year ago. This playbook covers what changes for marketplace sellers.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Fix the listing first (images, video, title, reviews, stock), then brief creators who demonstrate the product for a clear use case and send viewers to the listing. Layer the marketplaces' own creator routes on top of paid briefs: the Amazon Influencer Program and Creator Connections on Amazon, Flipkart and Myntra's affiliate tagging through Meta, and YouTube Shopping product tags. Amazon Attribution is not available on Amazon.in, so measure with creator codes, affiliate reports, short links, branded-search lift and sales compared with a baseline. Never trade product or payment for marketplace reviews.",
      },
      { type: "heading", text: "When creators are worth it for a marketplace seller", id: "when" },
      {
        type: "table",
        headers: ["Situation", "Creator fit"],
        rows: [
          ["The product needs showing (fit, texture, setup, size)", "Strong: demonstrations answer what a listing can't"],
          ["A new listing with few reviews", "Useful for discovery, but the listing may not convert yet; keep budgets small"],
          ["A crowded category where buyers search by generic terms", "Good for building branded searches, people typing your brand name instead of the category"],
          ["A low-priced commodity with thin margins", "Often weak; marketplace ads may be cheaper per order"],
          ["Sale events", "Good for pre-event consideration and wishlists, if stock and price are confirmed"],
        ],
      },
      {
        type: "paragraph",
        text: "Amazon's own numbers suggest creators reach shoppers that sellers often struggle to reach otherwise. In March 2026 Amazon India said nearly 70% of creator-led purchases on its platform come from non-metro cities, and that more than two-thirds of its creators are based outside the metros. These are company-reported figures, but they line up with what you'd expect: regional creators selling to audiences who trust them more than a metro brand.",
        links: [{ text: "Amazon India said", href: "https://www.aboutamazon.in/news/retail/amazon-influencer-program-india" }],
      },
      { type: "heading", text: "Get the listing ready first", id: "listing" },
      {
        type: "list",
        items: [
          "Images and video that match what creators will show, so the shopper recognises the product when they land.",
          "A title and bullets that use the words creators use for the benefit, not only the category keywords.",
          "Enough stock in the regions you're targeting, and delivery promises you can keep.",
          "Price and offers confirmed for the posting window, including any bank or sale-event offers.",
          "Answers to the questions creators' audiences are likely to ask, in the listing or the Q&A section.",
        ],
      },
      {
        type: "paragraph",
        text: "Sending creator traffic to a weak listing wastes the campaign. If stock is uncertain, see the stock section of influencer marketing for product launches.",
        links: [{ text: "influencer marketing for product launches", href: "/blog/influencers-for-product-launch#stock" }],
      },
      { type: "heading", text: "The creator programmes marketplaces now run", id: "marketplace-programmes" },
      {
        type: "paragraph",
        text: "A paid brief from you is still the most controllable way to work with a creator. But marketplaces and YouTube now pay creators commission on sales directly, which changes the economics: a creator who earns commission on your product has a reason to keep mentioning it after your paid post. These are the routes that matter for Indian sellers as of November 2026.",
      },
      {
        type: "table",
        headers: ["Route", "How it works", "What it means for a seller"],
        rows: [
          ["Amazon Influencer Program", "Creators build storefronts and earn commission on purchases through their links. Amazon reported about 200,000 creators in October 2026", "Creators you brief may already earn commission on your product; ask them to add it to their storefront"],
          ["Amazon Creator Connections", "Amazon announced in March 2026 that it would bring this to India; Telangana Today reported its launch in September 2026. It lets brands set up campaigns for creators in Amazon's programme", "A way to recruit commission-based creators inside Amazon; check availability and terms in your seller or ads account"],
          ["YouTube Shopping affiliate", "Creators tag products in videos, Shorts and livestreams. Flipkart and Myntra joined at launch in October 2024; Amazon was added in September 2026", "A long-form review on YouTube can now carry a tagged link to your Amazon or Flipkart listing"],
          ["YouTube Affiliate Partnerships Boost", "Announced by Google in 2026: brands pay to amplify creators' affiliate content", "Lets you put paid reach behind a creator video that already links to your listing"],
          ["Flipkart and Myntra affiliate via Meta", "Launched June 2026: creators tag Flipkart and Myntra products in Facebook posts and Reels; sellers choose products and set commission rates. Instagram was announced as the next phase", "A commission layer you control on Flipkart; check whether Instagram tagging is live for your account"],
        ],
      },
      {
        type: "paragraph",
        text: "Sources: Amazon India's October 2026 announcement on creator scale and YouTube and Pinterest linking, Flipkart's announcement of its Meta affiliate partnership, and Google's update on YouTube Shopping in India. Programme rules, commission rates and eligibility change often, so confirm the current terms before you build a plan around any of them. How to design your own commission structure is covered in influencer affiliate programs, and the creator side of YouTube tagging in YouTube Shopping for Indian creators.",
        links: [
          { text: "Amazon India's October 2026 announcement", href: "https://www.aboutamazon.in/news/retail/amazon-creators-youtube-pinterest-india" },
          { text: "Flipkart's announcement of its Meta affiliate partnership", href: "https://stories.flipkart.com/announcement/flipkart-group-launches-meta-affiliate-partnerships-to-power-india-s-creator-commerce-revolution" },
          { text: "Google's update on YouTube Shopping in India", href: "https://blog.google/intl/en-in/products/platforms/helping-indian-creators-build-thriving-businesses-on-youtube-shopping/" },
          { text: "influencer affiliate programs", href: "/blog/influencer-affiliate-program" },
          { text: "YouTube Shopping for Indian creators", href: "/blog/youtube-shopping-india-creators" },
        ],
      },
      { type: "heading", text: "Choosing creators", id: "creators" },
      {
        type: "paragraph",
        text: "Prioritise creators whose audiences buy online in your price band and whose content shows products in use. Unboxing alone rarely converts; demonstrations, honest comparisons that admit limits, and routines do. Creators who already post marketplace finds often have audiences used to tapping through to buy, and their storefront or affiliate history tells you which categories their followers actually purchase. A creator's commission arrangement with Amazon or YouTube is their own; it doesn't replace a paid brief from you if you need guaranteed posts, specific dates or usage rights for ads.",
      },
      { type: "heading", text: "Getting creator video onto your listings", id: "listing-video" },
      {
        type: "paragraph",
        text: "Some of the most valuable creator content for a marketplace seller never runs on social media. A clear 30–60 second demonstration on the listing itself answers the questions that cause abandoned carts and returns: how big it really is, how it fits, how it's set up. The same content works on your brand store pages and in sponsored video ads where the marketplace supports them.",
      },
      {
        type: "list",
        items: [
          "Buy the right rights. Your contract must allow the video on marketplace listings and brand pages, for a stated period. Posting on the creator's profile alone doesn't include this.",
          "Ask for a listing cut. A creator's Reel is built for the feed; a listing video should open on the product, not the creator's hook, and work without sound.",
          "Check the marketplace's rules. Upload options, eligibility (for example brand registration) and content rules for listing videos differ between Amazon, Flipkart and category marketplaces and change over time, so check Seller Central or Seller Hub for current options before you commission.",
          "Avoid claims the listing can't carry. Anything the creator says on a listing video must be something you can substantiate, and some marketplaces restrict mentions of prices, offers or other websites.",
          "Track what you replaced. Note the date the video went live so you can compare conversion and return reasons before and after.",
        ],
      },
      {
        type: "paragraph",
        text: "Using creator content across product pages, reviews and ads more broadly is covered in UGC content for e-commerce, and the rights side in influencer usage rights.",
        links: [
          { text: "UGC content for e-commerce", href: "/blog/ugc-content-ecommerce" },
          { text: "influencer usage rights", href: "/blog/influencer-usage-rights" },
        ],
      },
      { type: "heading", text: "Tracking sales you can't see", id: "tracking" },
      {
        type: "paragraph",
        text: "Amazon Attribution, the tool that reports detail page views, add-to-carts and purchases from tagged external links, is not available for Amazon.in. Amazon Ads' own FAQ, checked in November 2026, lists the marketplaces where it's offered as Canada, Mexico, the US, Germany, Spain, France, Italy, the Netherlands and the UK. Some blogs say otherwise; plan as if you won't have it, and re-check if Amazon adds India later. That leaves Indian sellers with a combination of partial signals.",
        links: [{ text: "Amazon Ads' own FAQ", href: "https://advertising.amazon.com/solutions/products/amazon-attribution" }],
      },
      {
        type: "table",
        headers: ["Method", "What you get", "Limits"],
        rows: [
          ["Creator-specific coupon codes", "Orders using each code", "Codes leak to coupon sites; many buyers don't use them"],
          ["Affiliate and creator-programme reports", "Commissionable sales through creators' Amazon storefronts, YouTube tags or Flipkart affiliate links", "Reports belong to the creator or programme; agree upfront what they'll share with you"],
          ["Short links per creator", "Clicks by creator and post", "Clicks only; no sales on the marketplace side"],
          ["Branded-search lift", "More people searching your brand name on the marketplace and on Google during the campaign", "Other activity also moves it; compare with a baseline"],
          ["Sales lift against a baseline", "Change against the same weeks before, or against regions without creator activity", "Seasonality, sale events and ads all affect it"],
          ["Marketplace business reports", "Sessions and conversion on the listing over time", "Not split by source; read alongside campaign dates"],
        ],
      },
      {
        type: "paragraph",
        text: "Agree before launch which of these will count, and report the conservative number (codes and affiliate-tracked sales) separately from the estimated lift. When platform numbers and your own records disagree, see why creator reports and analytics don't match. Wider tracking for sales on marketplaces is covered in influencer marketing for e-commerce.",
        links: [
          { text: "why creator reports and analytics don't match", href: "/blog/influencer-reporting-discrepancies" },
          { text: "influencer marketing for e-commerce", href: "/blog/influencer-marketing-ecommerce-brands-india#marketplace-tracking" },
        ],
      },
      {
        type: "paragraph",
        text: "Selling through quick-commerce apps as well? The measurement problem is similar but local; see creator campaigns for quick-commerce brands.",
        links: [{ text: "creator campaigns for quick-commerce brands", href: "/blog/quick-commerce-influencer-marketing-india" }],
      },
      { type: "heading", text: "Working out what a creator order is worth on a marketplace", id: "economics" },
      {
        type: "paragraph",
        text: "Marketplace margins are thinner than they look on the price tag. Before setting creator fees or commissions, work out what one extra order is worth to you after the marketplace's referral or commission fee, fulfilment and shipping charges, the cost of the product, returns, and any sponsored-ads spend you'll run alongside. That figure is the most you can pay per creator-driven order and still break even. It's often lower than sellers expect, which is why commission-based creator routes and low-cost seeding are popular with marketplace-only brands, and why paid creator fees tend to work best for higher-margin products or launches where branded search has long-term value.",
      },
      {
        type: "paragraph",
        text: "Retail media competes for the same budget. Bain's How India Shops Online 2026 estimated that e-retail ads were about 25% of India's digital ad spend in 2025. Creators and sponsored ads work best together: creators build branded searches and give shoppers a reason to choose you, and sponsored ads make sure you're the first result when they search. The full calculation is in how to calculate the break-even point of an influencer campaign.",
        links: [
          { text: "How India Shops Online 2026", href: "https://www.bain.com/insights/how-india-shops-online-2026/" },
          { text: "how to calculate the break-even point of an influencer campaign", href: "/blog/influencer-campaign-break-even" },
        ],
      },
      { type: "heading", text: "Reviews: what not to do", id: "reviews" },
      {
        type: "paragraph",
        text: "Marketplaces restrict reviews written in exchange for free products, payment or other rewards, and breaches can lead to removed reviews, delisting or suspension. Don't ask creators or their followers to leave marketplace reviews as part of a deal, don't send product on the condition of a review, and don't use review-swap groups. Let creator content live on social platforms, disclosed under ASCI's guidelines, and let marketplace reviews come from ordinary buyers. Check your marketplace's current seller policies before any campaign that involves free product.",
        links: [{ text: "ASCI's guidelines", href: "https://www.ascionline.in/social/wp-content/uploads/2025/04/ASCI-Influencer-Guidelines.pdf" }],
      },
      { type: "heading", text: "Timing around sale events", id: "sale-events" },
      {
        type: "table",
        headers: ["Window", "Creator role"],
        rows: [
          ["Two to four weeks before", "Demonstrations and comparisons; encourage wishlisting and adding to cart"],
          ["Days before", "Confirmed price and offer reminders, only once the price is final"],
          ["During the event", "Short reminders; watch stock and pause posts if items sell out"],
          ["After", "How-to and second-use content for new buyers; collect questions for the listing"],
        ],
      },
      {
        type: "paragraph",
        text: "Creator rates and availability tighten before big sale events, so brief and contract early. Before-during-after planning for festive campaigns is covered in seasonal influencer marketing.",
        links: [{ text: "seasonal influencer marketing", href: "/blog/seasonal-influencer-marketing-india" }],
      },
      { type: "heading", text: "Hypothetical example", id: "example" },
      {
        type: "paragraph",
        text: "Hypothetical, for illustration only. A kitchen-tools seller on Amazon and Flipkart books eight cooking creators to demonstrate a vegetable chopper three weeks before a sale event. Each creator gets a unique code and short link; four of them already earn Amazon commission, so they add the product to their storefronts, and two tag the Flipkart listing through YouTube Shopping. The seller commissions a 45-second listing cut from the best demonstration and adds it to the Amazon listing. After the event, it compares code redemptions and affiliate-reported sales by creator, plus branded searches and listing conversion against the same weeks before, and keeps the two creators whose codes and affiliate sales were highest for the next event. How creator campaigns and sponsored ads on Amazon, Flipkart and quick-commerce apps work together is covered in retail media and influencer marketing.", links: [{ text: "retail media and influencer marketing", href: "/blog/retail-media-influencer-marketing-india" }],
      },
      { type: "heading", text: "Common mistakes", id: "mistakes" },
      {
        type: "list",
        items: [
          "Sending creator traffic to a listing with poor images, no video or few reviews.",
          "Promising a client or leadership order-level attribution on Amazon.in that the tools don't provide.",
          "Posting before the sale price is confirmed.",
          "Asking for marketplace reviews in return for product or payment.",
          "Using creator video on a listing without contracted usage rights.",
          "Running out of stock in the regions the campaign targeted.",
        ],
      },
      { type: "heading", text: "Conclusion", id: "conclusion" },
      {
        type: "paragraph",
        text: "Marketplace sellers can use creators well if the listing is ready, creators demonstrate rather than just unbox, and the measurement plan is honest about what Amazon.in and Flipkart will and won't show you. Combine paid briefs with the commission routes Amazon, Flipkart and YouTube now offer, put the best creator video on the listing itself, and keep creator content and marketplace reviews separate. Finding creators whose audiences already buy in your category is the work Kudozz's creator discovery service does.",
        links: [{ text: "creator discovery service", href: "/services/creator-discovery" }],
      },
    ],
    faqs: [
      {
        question: "Is Amazon Attribution available in India?",
        answer:
          "No. As of November 2026, Amazon Ads lists Amazon Attribution for Canada, Mexico, the US, Germany, Spain, France, Italy, the Netherlands and the UK only. Indian sellers have to rely on creator codes, affiliate and creator-programme reports, short links, branded-search lift and sales compared with a baseline.",
      },
      {
        question: "Can Amazon sellers in India track influencer traffic at all?",
        answer:
          "Partly. Clicks can be tracked with short links, orders with creator-specific codes, and commissionable sales through creators' Amazon storefronts or YouTube Shopping tags if the creator shares those reports. Combine them with sales and branded-search changes during the campaign.",
      },
      {
        question: "Can I ask influencers to leave reviews on Amazon or Flipkart?",
        answer:
          "Don't make reviews part of a deal. Marketplaces restrict reviews written in exchange for free products or payment, and breaches can lead to removed reviews or penalties. Keep paid creator content on social platforms, with disclosure.",
      },
      {
        question: "Should I pay creators a fee or rely on marketplace commissions?",
        answer:
          "Use commission routes for steady, low-risk volume and creators who already sell in your category. Pay a fee when you need guaranteed posts on set dates, specific content, or usage rights for listing videos and ads, such as for a launch or a sale event. Many sellers combine both.",
      },
      {
        question: "Is influencer marketing worth it for marketplace sellers?",
        answer:
          "It works best for products that need demonstrating, in categories where branded searches matter, and around sale events. For low-priced commodities with thin margins, marketplace ads are often cheaper per order.",
      },
    ],
  },
];
