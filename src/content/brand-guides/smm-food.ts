import type { BlogPost } from "@/content/blog";

/**
 * SMM batch 04, writer C (2026-11-12): food and beverage guides to managing a brand's own social accounts.
 * Packaged food brands (09R), café content ideas (10), cloud kitchens (15) and bakery Reels (16).
 * Sources log: smm-sources-smm-food.md in the batch scratchpad.
 */

const FSSAI_CLAIMS =
  "https://fssai.gov.in/upload/uploadfiles/files/Compendium_Advertising_Claims_Regulations_16_11_2021.pdf";
const PIB_DARK_PATTERNS = "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1983994&reg=48&lang=2";
const GOOGLE_UGC_POLICY = "https://support.google.com/contributionpolicy/answer/7400114?hl=en";

export const smmFoodPosts: BlogPost[] = [
  {
    slug: "social-media-marketing-packaged-food-brands",
    category: "Social Media Management",
    title: "Social Media Marketing for Packaged Food and Beverage Brands: Building Trust Without Overclaiming",
    seoTitle: "Social Media Marketing for Packaged Food Brands",
    excerpt:
      "How packaged food and beverage brands can run social media that sells without overclaiming: what FSSAI's advertising and claims rules mean for posts, a content pillar table, recipe and label content, honest availability updates and a pre-publish claims checklist.",
    metaDescription:
      "Social media marketing for food brands in India: FSSAI claims rules for posts, content pillars, recipes, label education, honest stock updates and a checklist.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-12",
    lastReviewed: "November 2026",
    readingTime: "12 min read",
    tags: [
      "social media marketing for food brands",
      "packaged food social media strategy",
      "FSSAI advertising and claims rules",
      "food and beverage brand content ideas",
      "food brand Instagram marketing",
    ],
    related: ["influencer-marketing-fmcg-brands-india", "influencer-marketing-food-brands-india", "social-media-management-d2c-brands"],
    hero: {
      src: "/blog/brand-guides/social-media-marketing-packaged-food-brands.svg",
      alt: "A packaged food content system: five content pillars from pack education to availability, all passing through a claims check against the label before publishing",
    },
    body: [
      {
        type: "paragraph",
        text: "A millet snack brand is about to post its first Reel for a new flavour. The draft caption says 'guilt-free, boosts immunity, 100% natural, made fresh every day', and the on-screen text adds 'doctor recommended'. Every one of those phrases came from a well-meaning team member, and almost every one of them is a claim the brand would struggle to stand behind. This is the everyday problem for food and beverage brands on social media: the content that feels most persuasive is often the content that needs the most checking.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Social media marketing for food brands works when it builds trust through usefulness rather than adjectives. Post recipes, usage ideas, pack and label explainers, honest sourcing stories and accurate 'where to buy' updates. Treat every caption, on-screen line and reply as advertising: in India, FSSAI's Advertising and Claims Regulations, 2018 require claims to be truthful and consistent with the label, and restrict health, disease and wording such as 'natural' or 'fresh'. Run a claims check before anything goes live.",
      },
      { type: "heading", text: "Why food brands need a claims-first content system", id: "claims-first-system" },
      {
        type: "paragraph",
        text: "Food is a repeat purchase built on trust. A shopper who feels misled by a 'high protein' post that the nutrition panel doesn't support rarely gives the brand a second chance, and they often say so in the comments. Social media also multiplies the number of people writing about your product: the founder, an agency copywriter, a community manager replying at night, creators, and retail partners resharing your posts.",
      },
      {
        type: "paragraph",
        text: "A claims-first system means the approved product facts live in one place, everyone writes from it, and anything outside it goes to the person who owns regulatory sign-off. The general D2C playbook still applies, and our guide to social media management for D2C brands covers community, cadence and content mix. This article covers what is different when the product is something people eat or drink.",
        links: [{ text: "social media management for D2C brands", href: "/blog/social-media-management-d2c-brands" }],
      },
      { type: "heading", text: "What FSSAI's advertising and claims rules mean for social posts", id: "fssai-rules-for-social" },
      {
        type: "paragraph",
        text: "The Food Safety and Standards (Advertising and Claims) Regulations, 2018 were notified on 19 November 2018, with food businesses required to comply by 1 July 2019. Their definition of advertisement covers electronic media, the internet and websites, so brand posts, Reels, Stories and captions are in scope. The summary below is based on FSSAI's consolidated compendium of the regulations (Version II, dated 16 November 2021). FSSAI has amended the regulations several times, including amendments dated 9 October 2020, 30 August 2022 and 13 December 2022, so check the current consolidated text on FSSAI's website and confirm anything specific with your regulatory or legal adviser. This is a plain-language summary, not legal advice.",
        links: [
          { text: "FSSAI's consolidated compendium of the regulations", href: FSSAI_CLAIMS },
          { text: "FSSAI has amended the regulations several times", href: "https://fssai.gov.in/cms/Amendment-FSS-Advertising-Claims.php" },
        ],
      },
      {
        type: "table",
        headers: ["Provision (FSS Advertising and Claims Regulations, 2018)", "What it says, in short", "What it means for a post"],
        rows: [
          ["Reg. 4(1)", "Claims must be truthful, unambiguous, meaningful and not misleading", "No vague superlatives presented as fact. 'Tastiest' as opinion is different from '2x protein' as a fact."],
          ["Reg. 4(2)", "Claims must not encourage or condone excess consumption", "Avoid 'finish the whole pack' or binge framing, even as a joke"],
          ["Reg. 4(3)", "Claims must not imply a balanced, varied diet can't provide the nutrients the body needs", "No 'you can't get enough X from food alone' angles"],
          ["Reg. 4(6)", "Nutritional or health attributes must be scientifically substantiated by validated methods", "Every nutrition number comes from the brand's tested data, not memory"],
          ["Reg. 4(7) and Reg. 9(2)", "Words such as natural, fresh, pure, original, traditional, authentic, genuine and real are restricted to the conditions in Schedule V; brand names using them may need a disclaimer", "Don't use these words loosely in captions. Check Schedule V or ask your regulatory owner first."],
          ["Reg. 4(9)", "No claim or promotion may use the FSSAI logo and licence number, beyond the mandatory label declaration", "Don't post 'FSSAI approved' badges or use the licence number as a selling point"],
          ["Reg. 4(10) and 4(11)", "Advertisements must not undermine healthy lifestyles or portray a food as a meal replacement unless specifically permitted", "No 'skip lunch, grab this' positioning"],
          ["Reg. 4(12)", "Claims in advertisements must be consistent with the label", "If the pack doesn't say it, the post shouldn't either"],
          ["Reg. 10(1)", "No claims about preventing, alleviating, treating or curing a disease, disorder or physiological condition unless specifically permitted", "No immunity, diabetes, gut-healing or weight-loss promises"],
          ["Reg. 10(5) and 10(7)", "No claims that create doubt about the safety of similar foods or arouse fear, and no undermining other manufacturers' products", "No 'other brands are full of chemicals' fear posts or competitor bashing"],
          ["Reg. 11", "Reduction of disease risk claims not already defined in the regulations need FSSAI's prior approval", "Escalate any 'reduces the risk of' line before drafting it"],
        ],
      },
      {
        type: "paragraph",
        text: "Nutrition claims such as 'source of protein', 'low fat' or 'no added sugar' have specific conditions in the regulations (for example, regulation 6 sets out when a non-addition of sugars claim can be made). The rule of thumb for a social team is simple: only use a nutrition or health phrase if it already appears on the approved label or in the brand's approved claims sheet. Separately, the ASCI Code requires that claims of objectively ascertainable fact are capable of substantiation, and ASCI's self-regulation guidelines on advertising of foods and beverages (1 February 2013) also say food advertising should not undermine healthy lifestyles, should not encourage excessive consumption and should not undermine parental guidance on children's food choices.",
        links: [
          { text: "the ASCI Code", href: "https://www.ascionline.in/the-asci-code/" },
          { text: "ASCI's self-regulation guidelines on advertising of foods and beverages", href: "https://www.ascionline.in/the-asci-code-guidelines/" },
        ],
      },
      { type: "heading", text: "Content pillars for a packaged food brand", id: "content-pillars" },
      {
        type: "paragraph",
        text: "Pillars give the calendar a shape, and they also tell you where the claims risk sits. Use this table to plan, then decide who checks each pillar before publishing.",
      },
      {
        type: "table",
        headers: ["Pillar", "What to post", "Claims risk", "Who checks"],
        rows: [
          ["Usage and recipes", "Three-ingredient recipes, pairings, lunchbox and travel ideas, 'how we eat it' from the team", "Low, unless the recipe is framed as healthy or diet-friendly", "Content lead"],
          ["Pack and label education", "How to read the nutrition panel, what each ingredient does, storage after opening, serving size", "Medium: every number must match the label", "Content lead plus product or QA owner"],
          ["Making and sourcing", "Where an ingredient comes from, how a batch is made, the people involved", "Medium: origin, process and 'traditional' wording need evidence", "Founder or operations owner"],
          ["Availability", "Which cities, stores and apps carry which SKUs, new listings, restocks", "Medium: must be true on the day it's posted", "Sales or supply owner"],
          ["Community and customers", "Reposts of customer recipes (with permission), comment replies turned into posts, polls on flavours", "Medium: reposted content can carry claims you didn't make", "Community manager"],
          ["Nutrition and health topics", "Only label-backed facts, with any qualifiers shown clearly", "High", "Regulatory or legal owner, every time"],
        ],
      },
      {
        type: "paragraph",
        text: "Most feeds lean far too heavily on the last row, because nutrition feels like the strongest selling point. In practice, the first two pillars do more for repeat purchase: people buy again when they know what to do with the product. Our guide on product explainer content covers how to produce demos, comparisons and ingredient explainers, and it applies directly to food packs.",
        links: [{ text: "product explainer content", href: "/blog/d2c-product-explainer-content" }],
      },
      { type: "heading", text: "Recipes, usage and label education that sell honestly", id: "recipes-and-label-education" },
      {
        type: "list",
        items: [
          "Film recipes with the actual pack in shot and the quantity used, so viewers can recreate them.",
          "Keep recipe captions descriptive ('a quick evening snack with curd and onion') rather than evaluative ('the healthiest snack you'll eat').",
          "Make a 'label in 30 seconds' series: one panel per post, explaining serving size, ingredients in order of weight and storage instructions as printed.",
          "Answer real questions from comments and DMs as posts, but quote the label rather than paraphrasing it.",
          "Show portion sizes that match the serving size on the pack, not oversized bowls.",
          "Where a product is aimed at families, avoid content that pits children against parents' choices.",
        ],
      },
      { type: "heading", text: "Retail and quick-commerce availability, communicated honestly", id: "availability-communication" },
      {
        type: "paragraph",
        text: "Many food brands now sell through their own site, modern trade, local stores and quick-commerce apps at once, and listings change by city, pin code and week. Availability posts are among the most useful content you can publish, and among the easiest to get wrong. 'Now available everywhere' is rarely true. 'Now on two quick-commerce apps in Bengaluru and Pune; other cities coming, we'll post when they're live' is.",
      },
      {
        type: "list",
        items: [
          "Name the cities, store chains or apps, and the date the information was checked.",
          "Pin a 'where to buy' post or Story highlight, and update it when listings change.",
          "Don't create urgency you can't stand behind. India's CCPA Guidelines for Prevention and Regulation of Dark Patterns, issued on 30 November 2023, list false urgency among the prohibited patterns, so 'only a few packs left' must be true.",
          "If stock runs out or a price changes, say so plainly and give a date only when you're confident of it.",
          "State offer terms in the same post: what's included, where it applies, and when it ends.",
        ],
        },
      {
        type: "paragraph",
        text: "For stock-outs, delays and price changes in detail, including reply templates, see our guide to communicating stock-outs and delivery delays on social media. Our guide to quick-commerce influencer marketing covers the creator side of app launches.",
        links: [
          { text: "communicating stock-outs and delivery delays on social media", href: "/blog/d2c-stockouts-delays-social-media" },
          { text: "quick-commerce influencer marketing", href: "/blog/quick-commerce-influencer-marketing-india" },
        ],
      },
      {
        type: "paragraph",
        text: "The CCPA guidelines were announced by the Department of Consumer Affairs through PIB.",
        links: [{ text: "announced by the Department of Consumer Affairs through PIB", href: PIB_DARK_PATTERNS }],
      },
      { type: "heading", text: "Creators, community and reposted content", id: "creators-and-community" },
      {
        type: "paragraph",
        text: "When a creator says your snack 'fixed my digestion', and you repost it on your brand account, the claim is now on your channel. Brief creators with the same approved claims sheet you use internally, require clear disclosure under ASCI's influencer guidelines, and remember that ASCI's Addendum II (6 March 2025) expects health and nutrition influencers to hold relevant qualifications and state them upfront. Creator programmes are a separate discipline: see our guides to influencer marketing for food brands and to influencer marketing for FMCG brands for briefing, selection and measurement.",
        links: [
          { text: "influencer marketing for food brands", href: "/blog/influencer-marketing-food-brands-india" },
          { text: "influencer marketing for FMCG brands", href: "/blog/influencer-marketing-fmcg-brands-india" },
        ],
      },
      {
        type: "paragraph",
        text: "For customer content, ask permission before reposting, credit the person, and check the caption for claims before you share it. A customer's own 'this cured my acidity' is their experience; your repost turns it into your advertisement.",
      },
      { type: "heading", text: "Resource: the claims pre-publish checklist", id: "claims-checklist" },
      {
        type: "paragraph",
        text: "Paste this into your content calendar or approval tool and require a tick on every line before a post is scheduled. It covers the caption, on-screen text, voiceover, hashtags, alt text and pinned comments.",
      },
      {
        type: "template",
        label: "Food and beverage claims pre-publish checklist",
        text: "POST: ____________  SKU(s): ____________  Writer: ________  Reviewer: ________\n\n[ ] Every fact (nutrition, ingredient, origin, process) matches the current label or the approved claims sheet\n[ ] No disease, cure, prevention or 'immunity' language\n[ ] No 'doctor recommended', 'clinically proven' or medical endorsement unless approved in writing by the regulatory owner\n[ ] 'Natural', 'fresh', 'pure', 'traditional', 'authentic', 'real' or 'original' cleared against Schedule V\n[ ] No FSSAI logo or licence number used as a promotional badge\n[ ] No meal-replacement framing; no binge or excess-consumption framing\n[ ] No fear-based or competitor-undermining comparisons\n[ ] Portion shown matches the serving size\n[ ] Availability (cities, apps, stores) checked today: date ________\n[ ] Offer terms stated in the post: what, where, until when\n[ ] Urgency or scarcity lines are true\n[ ] Creator or customer content: permission recorded, disclosure visible, their claims checked\n[ ] Anything unsure escalated to: ____________ (regulatory/legal owner)\n\nApproved by: ________  Date: ________",
      },
      { type: "heading", text: "Common mistakes food brands make on social", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Letting the community manager improvise nutrition answers in DMs, instead of replying from the approved claims sheet.",
          "Using 'healthy', 'guilt-free' or 'clean' as default adjectives without asking what claim they imply.",
          "Posting availability once and never updating it.",
          "Reposting creator or customer content without reading the caption.",
          "Treating Stories and comments as informal and therefore outside the rules.",
          "Running 'last chance' offers that quietly extend every week.",
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Start with two documents: an approved claims sheet per SKU, signed off by whoever owns regulatory compliance, and the checklist above. Then shift your calendar towards recipes, usage and label education, and make availability posts specific and dated. Trust in a food brand builds slowly and breaks quickly, so the safest content is often the most useful.",
      },
      {
        type: "paragraph",
        text: "If you want an outside team to run this, Kudozz's social media management includes copywriting and publishing against your approved claims and approval process; regulatory sign-off stays with your team.",
        links: [{ text: "Kudozz's social media management includes copywriting", href: "/services/social-media-management#copywriting" }],
      },
    ],
    faqs: [
      {
        question: "Do FSSAI's advertising rules apply to Instagram posts and Reels?",
        answer:
          "The Food Safety and Standards (Advertising and Claims) Regulations, 2018 define advertisement to include electronic media, the internet and websites, so a brand's own social posts, Reels, Stories and captions should be treated as advertising. Check the current consolidated text on FSSAI's website and confirm specific questions with your regulatory or legal adviser, because the regulations have been amended since 2018.",
      },
      {
        question: "Can we call our product 'natural' or 'fresh' in a caption?",
        answer:
          "Only if it meets the conditions FSSAI sets for those words. Regulation 9(2) says terms such as natural, fresh, pure, original, traditional, authentic, genuine and real must be used in line with Schedule V. If the word is part of your brand name, a disclaimer may be needed on the label. When in doubt, describe the product factually instead.",
      },
      {
        question: "Who should approve nutrition content: the agency or the brand?",
        answer:
          "The brand. An agency or social team can draft posts and flag risky phrases, but the person who owns the label and regulatory compliance, usually in quality, regulatory or legal, should approve any nutrition or health statement. A practical set-up is an approved claims sheet per SKU that writers can use freely, with anything new escalated.",
      },
      {
        question: "How should we reply when a follower asks if a product is good for diabetes?",
        answer:
          "Don't give a medical answer. Reply with the factual label information, such as sugar and carbohydrate per serving, and suggest they check with their doctor or dietitian for advice about their own condition. Regulation 10(1) prohibits claims about treating or preventing a disease unless specifically permitted, and a reply on your account is still your brand speaking.",
      },
      {
        question: "Is it fine to compare our product with a competitor's?",
        answer:
          "Be very careful. FSSAI's regulation 10(7) says food advertisements must not undermine other manufacturers' products, and the ASCI Code requires comparisons to be factual, fair and capable of substantiation. Comparisons with your own previous recipe, using label data, are easier to defend. Get any competitor comparison reviewed by your legal adviser first.",
      },
    ],
  },
  {
    slug: "instagram-content-ideas-for-cafes",
    category: "Social Media Management",
    title: "Instagram Content Ideas for Café Owners: What to Post Beyond Food Photos",
    seoTitle: "Instagram Content Ideas for Cafés: 36 Post Ideas",
    excerpt:
      "36 Instagram content ideas for cafés, grouped by format: Reels, carousels, Stories, single posts and community collaborations, plus a simple way to tell whether posts are bringing people through the door.",
    metaDescription:
      "36 Instagram content ideas for cafés beyond food photos: Reels, carousels, Stories, posts and collaborations, plus how to check if views turn into visits.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-12",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: [
      "Instagram content ideas for cafes",
      "cafe Instagram post ideas",
      "cafe Reels ideas",
      "what to post on Instagram for a cafe",
      "cafe social media content",
    ],
    related: ["social-media-marketing-restaurants-cafes", "restaurant-cafe-influencer-marketing-india", "instagram-stories-for-business"],
    hero: {
      src: "/blog/brand-guides/instagram-content-ideas-for-cafes.svg",
      alt: "An idea grid for café Instagram content with five format groups: Reels, carousels, Stories, single posts and community collaborations, leading to visits measured by directions, calls and asking customers",
    },
    body: [
      {
        type: "paragraph",
        text: "A café owner opens Instagram at 4 pm, realises nothing has gone out this week, and photographs the cappuccino on the counter. Again. The grid is now forty flat lays of coffee from slightly different angles, and none of them tells a stranger why this café is worth a detour. Food photos matter, but they are only one of the reasons people choose a café.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "The best Instagram content ideas for cafés show what makes the place worth visiting, not just what's on the plate: the people behind the counter, the space at different times of day, the regulars, the neighbourhood and the small rituals. Mix Reels, carousels, Stories and simple photos, rotate through a few recurring series, and check whether posts lead to visits through direction requests, calls and asking customers how they heard about you.",
      },
      { type: "heading", text: "How to use this idea library", id: "how-to-use" },
      {
        type: "paragraph",
        text: "The 36 ideas below are grouped by format, because most café owners plan by what they can produce that week rather than by abstract themes. Pick two or three ideas from different groups each week and turn the ones that work into recurring series. For the bigger picture, such as content pillars, local discovery and Google Business Profile, our guide to social media marketing for restaurants and cafés covers strategy. This article is the idea bank.",
        links: [{ text: "social media marketing for restaurants and cafés", href: "/blog/social-media-marketing-restaurants-cafes" }],
      },
      {
        type: "list",
        items: [
          "Only show customers who have agreed to be filmed or photographed, and never children without a parent's permission.",
          "Only describe what's true: no 'freshly baked every hour' unless it is, and no hygiene or health claims you can't back up.",
          "Offers must state their terms in the same post.",
        ],
      },
      { type: "heading", text: "Reels ideas (10)", id: "reels-ideas" },
      {
        type: "table",
        headers: ["#", "Idea", "What it shows", "Production tip"],
        rows: [
          ["1", "Opening up in 20 seconds", "Shutters up, machine warming, first pour, first customer", "Film the same sequence once; reuse it seasonally"],
          ["2", "One drink, start to finish", "The craft behind a signature drink", "Close-ups of hands, no talking needed"],
          ["3", "Barista's choice", "What the team drinks on a break and why", "Rotate team members each week"],
          ["4", "The quiet hour", "The café at its calmest, for people who want to work or read", "Shoot at the actual quiet time and say when it is"],
          ["5", "Rush hour, honestly", "The busy weekend morning, with the queue moving", "Helps set expectations; mention the less busy times"],
          ["6", "Menu item origin story", "Why a dish exists, who suggested it", "Voiceover from the person who created it"],
          ["7", "What Rs 300 gets you", "A price-transparent combo or order (use your real prices)", "Only if prices are current; update when they change"],
          ["8", "Regular's order", "A regular's usual and a line from them", "Written permission first"],
          ["9", "Mistakes we made", "A failed latte art attempt, a test bake that didn't work", "Humour builds familiarity"],
          ["10", "Closing up", "Chairs up, last clean, lights off", "Pairs well with idea 1 as a series"],
        ],
      },
      { type: "heading", text: "Carousel ideas (8)", id: "carousel-ideas" },
      {
        type: "table",
        headers: ["#", "Idea", "What it shows", "Production tip"],
        rows: [
          ["11", "How to order like a regular", "Customisations, sizes, milk options, hidden menu items", "Use your real menu wording"],
          ["12", "Our coffee, explained", "Origin, roast and brewing method, as your supplier describes it", "Credit the roaster; don't invent tasting claims"],
          ["13", "The best seat for...", "Window seat for reading, big table for groups, plug points for laptops", "One slide per seat, photographed in daylight"],
          ["14", "Menu changes this month", "What's new, what's leaving, what's back", "Include prices and dates"],
          ["15", "Meet the team", "Names, roles, a favourite item each", "Only with each person's consent"],
          ["16", "Neighbourhood guide", "Bookshop, park, gallery nearby", "Tag the places; ask first if featuring people"],
          ["17", "You asked, we answered", "Parking, pets, Wi-Fi, reservations, vegan options", "Collect questions from DMs and the counter"],
          ["18", "A week of specials", "Daily specials laid out as a plan", "Post on the day before the week starts"],
        ],
      },
      {
        type: "paragraph",
        text: "If you want consistent food shots for these, our sister guide on a restaurant food photography and video brief includes a shoot brief template you can hand to a photographer or a team member.",
        links: [{ text: "restaurant food photography and video brief", href: "/blog/restaurant-food-photography-video-brief" }],
      },
      { type: "heading", text: "Stories ideas (8)", id: "stories-ideas" },
      {
        type: "table",
        headers: ["#", "Idea", "What it shows", "Production tip"],
        rows: [
          ["19", "Today's bake count", "What came out of the oven this morning", "Post when it's true, not as a fixed graphic"],
          ["20", "Poll: next special", "Two options for next week's special", "Follow up with the winner"],
          ["21", "Live table status", "'Plenty of tables right now' on a quiet afternoon", "Only post when accurate"],
          ["22", "Sold out", "When a popular item runs out", "Say when it's back"],
          ["23", "Question box", "'Ask us anything about coffee'", "Answer the best in a carousel later"],
          ["24", "Behind the counter", "Deliveries, prep, cleaning the machine", "Short clips, no polish needed"],
          ["25", "Customer reshares", "Posts where customers tagged you", "Reshare only public posts that tagged you"],
          ["26", "Weather-led nudges", "Hot chocolate on a rainy day, cold brew in the heat", "Keep a few ready to go"],
        ],
      },
      {
        type: "paragraph",
        text: "Stories work best as the day-to-day layer of the account. Our guide to Instagram Stories for business covers highlights, interactive stickers and how often to post.",
        links: [{ text: "Instagram Stories for business", href: "/blog/instagram-stories-for-business" }],
      },
      { type: "heading", text: "Single photo and graphic post ideas (5)", id: "single-post-ideas" },
      {
        type: "list",
        items: [
          "27. The space, empty, in morning light: a calm frame that sells the room itself.",
          "28. A hand-written menu board photographed straight on, with the prices visible.",
          "29. A quote from a team member about why they do this job (with their permission).",
          "30. An anniversary or milestone: 'two years on this corner', with an honest thank-you.",
          "31. Opening hours, holiday closures and changes, designed to be easy to screenshot.",
        ],
      },
      { type: "heading", text: "Community and collaboration ideas (5)", id: "community-ideas" },
      {
        type: "list",
        items: [
          "32. A joint post with a neighbouring business, such as the bakery that supplies your bread or the bookshop next door. Instagram's collaborative posts feature lets an invited account appear as a co-author, so the post is shared with both sets of followers once they accept.",
          "33. Host a small community event (a book club, a sketching morning, a cupping session) and post the recap with attendees' permission.",
          "34. Feature a local artist whose work is on your walls.",
          "35. Ask regulars to name a new drink, and credit the winner.",
          "36. A 'leave a review' reminder for people who've already visited, asked of everyone, with no reward attached.",
        ],
        },
      {
        type: "paragraph",
        text: "On reviews: Google's Maps user-generated content policy prohibits offering incentives such as discounts or free items in exchange for reviews, discouraging negative reviews and selectively asking only happy customers to review. Ask everyone, or ask no one. Collaborative posts are described in Instagram's Help Centre, and features change, so check the current options in the app. If you plan paid or gifted creator visits, that's influencer marketing, covered in our guide to restaurant and café influencer marketing.",
        links: [
          { text: "Google's Maps user-generated content policy", href: GOOGLE_UGC_POLICY },
          { text: "Instagram's Help Centre", href: "https://help.instagram.com/291200585956732" },
          { text: "restaurant and café influencer marketing", href: "/blog/restaurant-cafe-influencer-marketing-india" },
        ],
      },
      { type: "heading", text: "Turning ideas into a weekly rhythm", id: "weekly-rhythm" },
      {
        type: "paragraph",
        text: "Ideas only help if they get made. A simple rhythm for a small café is three feed posts and daily Stories: one Reel, one carousel and one single post, chosen from different groups so the grid doesn't repeat itself. Batch-film on your quietest morning, and keep a running list on the counter for ideas that come from customers.",
      },
      {
        type: "table",
        headers: ["Day", "Format", "Example from the library"],
        rows: [
          ["Monday", "Carousel", "#18 A week of specials"],
          ["Wednesday", "Reel", "#2 One drink, start to finish"],
          ["Friday", "Single post or Reel", "#27 The space in morning light, or #5 Rush hour, honestly"],
          ["Daily", "Stories", "#19 Bake count, #21 Table status, #26 Weather nudges"],
        ],
      },
      {
        type: "paragraph",
        text: "Common mistakes to avoid: posting the same angle of the same drink every week; using trending audio that has nothing to do with your café; showing customers without asking; making 'best coffee in the city' claims; and announcing offers without saying when they end.",
      },
      { type: "heading", text: "From views to visits: a simple measurement note", id: "views-to-visits" },
      {
        type: "paragraph",
        text: "Views and likes tell you what people enjoyed watching, not whether they came in. For a café, three signals matter more. First, your Google Business Profile performance report, which shows direction requests, calls from the profile and menu clicks where they apply. Second, the profile activity your Instagram insights show, such as taps on contact buttons, where available. Third, the simplest and most underrated: ask customers at the counter how they heard about you, and keep a tally for a month.",
        links: [{ text: "Google Business Profile performance report", href: "https://support.google.com/business/answer/10018786?hl=en-IN" }],
      },
      {
        type: "list",
        items: [
          "Compare weeks with a strong post against quiet weeks, not single days.",
          "Note when a specific post is mentioned at the counter ('I saw the quiet hour video').",
          "If you use an offer code from Instagram, state its terms and count redemptions.",
          "Accept that much of the effect can't be attributed precisely, and look for consistent patterns over a few months.",
        ],
      },
      {
        type: "paragraph",
        text: "Our sister guide on how small business owners can measure whether social media generates sales includes a monthly reporting template.",
        links: [{ text: "measure whether social media generates sales", href: "/blog/measure-social-media-sales-small-business" }],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Pick five ideas from this list, one from each group, and post them over the next two weeks. Keep the two that get the most saves, comments or counter mentions and make them recurring series. That alone will move your grid well beyond coffee flat lays.",
      },
      {
        type: "paragraph",
        text: "If keeping the calendar full is the hard part, content planning is the core of our social media management service, built around footage your team captures in the café.",
        links: [{ text: "content planning is the core of our social media management service", href: "/services/social-media-management#content-planning" }],
      },
    ],
    faqs: [
      {
        question: "How often should a café post on Instagram?",
        answer:
          "There's no official ideal frequency. For most small cafés, three feed posts a week plus Stories on most days is sustainable and enough to stay visible to followers. Consistency matters more than volume: a steady three posts every week does more than ten posts in one week followed by silence. Adjust once you see which formats your audience responds to.",
      },
      {
        question: "Do we need professional photos for a café account?",
        answer:
          "Not for most content. Phone footage works well for Reels and Stories, especially behind-the-counter and process clips, as long as the light is good and the camera is steady. A professional shoot is worth it for menu images and hero shots of the space that you'll reuse for months. Mixing the two is normal.",
      },
      {
        question: "Can we post photos of customers in the café?",
        answer:
          "Only with their permission, and ideally in writing for anything used beyond a quick Story. Take extra care with children: get a parent's consent or avoid showing them. When in doubt, frame shots so faces aren't identifiable. Reshare customers' own posts only when they've tagged you publicly, and credit them.",
      },
      {
        question: "Should we run giveaways in exchange for reviews?",
        answer:
          "No. Google's Maps user-generated content policy prohibits offering incentives such as discounts or free items in exchange for reviews, and it also prohibits selectively asking only satisfied customers. A plain reminder to all customers to leave honest feedback is fine. Giveaways for other actions should have clear terms.",
      },
      {
        question: "What should a café post when there's nothing new on the menu?",
        answer:
          "That's when the ideas beyond food help most. Show the space at a different time of day, introduce a team member, answer a common question, feature a neighbouring business or share a regular's usual order with their permission. People visit a café for the place and the people as much as for any single dish.",
      },
    ],
  },
  {
    slug: "social-media-marketing-cloud-kitchens",
    category: "Social Media Management",
    title: "Social Media Marketing for Cloud Kitchens: Building Visibility Without a Physical Storefront",
    seoTitle: "Social Media Marketing for Cloud Kitchens",
    excerpt:
      "How cloud kitchens and delivery-only brands can use social media to be found, chosen and reordered: the delivery journey, brand identity across virtual brands, packaging as content, reviews, and a sample weekly content plan.",
    metaDescription:
      "Social media marketing for cloud kitchens: map the delivery journey, give each virtual brand an identity, use packaging as content, and follow a weekly plan.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-12",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: [
      "social media marketing for cloud kitchens",
      "cloud kitchen Instagram strategy",
      "delivery-only restaurant marketing",
      "virtual brand social media",
      "cloud kitchen content plan",
    ],
    related: ["social-media-marketing-restaurants-cafes", "manage-multiple-social-media-accounts", "influencer-marketing-food-brands-india"],
    hero: {
      src: "/blog/brand-guides/social-media-marketing-cloud-kitchens.svg",
      alt: "The cloud kitchen delivery journey in five steps: discover on social, check the app listing, order, unbox at home and reorder, with social content supporting each step",
    },
    body: [
      {
        type: "paragraph",
        text: "A cloud kitchen in Pune runs three brands out of one kitchen: a biryani brand, a bowls brand and a late-night dessert brand. None of them has a shopfront, a sign or a dining room. Customers meet them as a thumbnail on a delivery app, among dozens of others, and decide in seconds. Social media is one of the few places these brands can show who they are before someone scrolls past.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Social media marketing for cloud kitchens replaces the storefront you don't have. Give each brand a clear identity, show the food and the kitchen honestly, make it easy to find you on the delivery apps you're listed on, and treat the unboxing moment as content. Follow a weekly plan that mixes menu, process, customer and reorder posts, and handle reviews and complaints through a clear routine rather than in public arguments.",
      },
      { type: "heading", text: "What social media does when there's no storefront", id: "role-of-social" },
      {
        type: "paragraph",
        text: "A restaurant with a dining room gets walk-ins, signage and word of mouth from the people at the next table. A cloud kitchen gets none of that. Its whole brand experience is the app listing, the packaging and the food. Social media adds three things the app can't: personality (who cooks this, and why), proof (what the food looks like when it arrives, from real customers with permission), and a reason to come back (new items, timing, offers with clear terms).",
      },
      {
        type: "paragraph",
        text: "For dine-in restaurants and cafés, local discovery and the space itself carry much of the load; our guide to social media marketing for restaurants and cafés covers that. Cloud kitchens have to do all of it through the screen.",
        links: [{ text: "social media marketing for restaurants and cafés", href: "/blog/social-media-marketing-restaurants-cafes" }],
      },
      { type: "heading", text: "Map the delivery journey first", id: "delivery-journey" },
      {
        type: "paragraph",
        text: "Delivery app features, ranking and promotions differ by platform and change often, so describe the journey in general terms and check what each app you're on currently offers. The table below maps where social content helps at each step.",
      },
      {
        type: "table",
        headers: ["Journey step", "What the customer is thinking", "Social content that helps", "Watch out for"],
        rows: [
          ["Discover", "'I'm hungry, what's new around me?'", "Reels of signature dishes, local food conversations, collaborations", "Claims like 'best in the city'"],
          ["Check", "'Is this brand real? Is it any good?'", "A pinned post: who you are, kitchen, menu highlights, which apps you're on", "Outdated menus and prices"],
          ["Order", "'Which app, and what do I order?'", "'What to order first' carousel, bio link or highlight listing apps and areas served", "Listing areas you don't deliver to"],
          ["Unbox", "'Did it arrive as I hoped?'", "Packaging that's easy to photograph, a card asking customers to tag you", "Over-styled photos that don't match reality"],
          ["Reorder", "'Should I order again?'", "New items, combos, timing posts, replies to feedback", "Fake urgency and unclear offer terms"],
        ],
      },
      { type: "heading", text: "Brand identity across virtual brands", id: "virtual-brand-identity" },
      {
        type: "paragraph",
        text: "Running several brands from one kitchen raises a real question: one account or several? There's no single answer. Separate accounts make sense when brands target different customers or occasions (a family biryani brand and a late-night dessert brand rarely share a mood). A parent account can make sense when the kitchen itself is the story, for example a chef-led group. Whichever you choose, be honest: don't present one kitchen's brands as independent restaurants that compete with each other, and don't post reviews of one brand from another brand's account.",
      },
      {
        type: "list",
        items: [
          "Give each brand a distinct name, colour, tone and hero dish, and keep them consistent across the app listing, packaging and social.",
          "Write a one-page identity sheet per brand: who it's for, when they order, three words for the tone, what it never says.",
          "Decide which brands get an active account and which get a simple holding profile. Not every virtual brand needs daily content.",
          "Share production where it's efficient: one kitchen shoot can produce clips for several brands.",
        ],
      },
      {
        type: "paragraph",
        text: "Running several accounts with one small team is an operations problem as much as a creative one. Our guide to managing multiple social media accounts covers tiering accounts by priority, capacity and scheduling.",
        links: [{ text: "managing multiple social media accounts", href: "/blog/manage-multiple-social-media-accounts" }],
      },
      { type: "heading", text: "Packaging as your shopfront", id: "packaging-as-content" },
      {
        type: "paragraph",
        text: "For a delivery-only brand, the box is the only physical thing a customer touches. Design it so it photographs well, carries your handle, and makes it obvious how to tag you. A small insert card can do a lot: a thank-you, the social handle, how to reheat if relevant, and a polite request to share feedback. Don't print claims on inserts that you couldn't support in a post.",
      },
      {
        type: "list",
        items: [
          "Make the handle easy to read on the lid or seal, not hidden on the base.",
          "Post an 'unboxing' Reel of your own packaging so customers know what to expect.",
          "If packaging changes, explain why (for example, a sturdier container for curries) without making environmental claims you can't substantiate. ASCI's guidelines for environmental and green claims (effective 15 February 2024) expect claims like 'eco-friendly' to be backed by strong evidence.",
          "Ask customers to tag you, then reshare with credit. Don't reshare posts that show other people without checking.",
        ],
      },
      {
        type: "paragraph",
        text: "Our creative design work covers packaging-to-post templates, so every unboxing shot looks like the same brand.",
        links: [{ text: "creative design work", href: "/services/social-media-management#creative-design" }],
      },
      { type: "heading", text: "Showing the kitchen honestly", id: "showing-the-kitchen" },
      {
        type: "paragraph",
        text: "Customers are curious about where delivery food is made, and kitchen content can build real trust. It only works if it's honest. Film what the kitchen genuinely looks like during service, not a staged deep-clean. Avoid hygiene, food-safety or certification claims unless you can substantiate them, and note that FSSAI's Advertising and Claims Regulations, 2018 (regulation 4(9)) say the FSSAI logo and licence number must not be used for claims or promotion beyond the mandatory label declaration. So 'FSSAI approved kitchen' badges are a poor idea.",
        links: [{ text: "FSSAI's Advertising and Claims Regulations, 2018", href: FSSAI_CLAIMS }],
      },
      {
        type: "list",
        items: [
          "Show the chef and team, with their consent, and let them explain one dish each.",
          "Show prep that's specific to your food: the dough being folded, the spice blend being ground.",
          "Don't film in a way that shows staff personal details, phone screens or order slips with customer information.",
        ],
      },
      { type: "heading", text: "Resource: a sample weekly content plan", id: "weekly-content-plan" },
      {
        type: "paragraph",
        text: "This plan is for one active brand with a small team. Times assume a dinner-led brand; shift posts towards your own order peaks, which you'll know from your app reports. Adapt it for each additional brand, or rotate brands through the week if capacity is tight. Our guide to a monthly social media content calendar shows how to roll a weekly plan into a month.",
        links: [{ text: "monthly social media content calendar", href: "/blog/monthly-social-media-content-calendar" }],
      },
      {
        type: "table",
        headers: ["Day", "Feed post", "Stories", "Purpose"],
        rows: [
          ["Monday", "Carousel: 'What to order first' (three dishes, who each is for, prices as listed)", "Week's menu changes", "Help first-time orderers choose"],
          ["Tuesday", "None", "Kitchen prep clip, poll on a dish", "Keep presence, gather opinions"],
          ["Wednesday", "Reel: a signature dish from raw ingredients to packed box", "Behind the counter", "Discovery and craft"],
          ["Thursday", "Single post: customer photo of their order, reshared with permission", "Reshare tagged Stories", "Proof from real customers"],
          ["Friday", "Reel: weekend combo, with terms if it's an offer", "Which apps and areas, today", "Drive weekend orders honestly"],
          ["Saturday", "None", "Live-feeling updates: what's selling, what's sold out", "Real-time relevance"],
          ["Sunday", "Carousel: answers to this week's DMs and comments", "Thank-you and next week's teaser", "Reorder and community"],
        ],
      },
      {
        type: "template",
        label: "Weekly planning sheet (one per brand)",
        text: "BRAND: ____________  WEEK OF: ____________\nApps live this week: ____________  Delivery areas: ____________\nMenu changes / sold-out items: ____________\nOffers (with full terms and end date): ____________\n\nMON  Carousel: ____________   Stories: ____________\nTUE  Stories: ____________\nWED  Reel: ____________        Stories: ____________\nTHU  Customer post (permission recorded? Y/N): ____________\nFRI  Reel: ____________        Stories: ____________\nSAT  Stories: ____________\nSUN  Carousel (FAQ): ____________\n\nClaims check done by: ________  Footage needed from kitchen by: ________",
      },
      { type: "heading", text: "Ratings, reviews and complaints", id: "reviews-and-complaints" },
      {
        type: "paragraph",
        text: "Cloud kitchens live and die by ratings, which makes the temptation to game them strong. Don't. Google's Maps user-generated content policy prohibits offering incentives for reviews, discouraging negative reviews and selectively asking only happy customers, and delivery apps have their own review rules, which you should check. Never ask friends or staff to post reviews, and never delete or hide genuine criticism.",
        links: [{ text: "Google's Maps user-generated content policy", href: GOOGLE_UGC_POLICY }],
      },
      {
        type: "paragraph",
        text: "When a complaint appears on social (a missing item, a late delivery, a cold dish), acknowledge it publicly, move the details to DMs, and fix it through the app's support route if the order was placed there. Illness or food-safety complaints should be escalated to the owner immediately, not argued in comments. Our sister guide to handling restaurant comments, reviews and complaints has response scenarios, and our guide to community management versus customer support explains where social replies end and support begins.",
        links: [
          { text: "handling restaurant comments, reviews and complaints", href: "/blog/restaurant-social-media-reviews-complaints" },
          { text: "community management versus customer support", href: "/blog/community-management-vs-customer-support" },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Posting only stock-style food photos that could belong to any kitchen.",
          "Letting the app listing, packaging and Instagram tell three different brand stories.",
          "Promising delivery areas or times you can't control.",
          "Running 'flat discount' posts without saying which app, which items, or when they end.",
          "Creating separate accounts for every virtual brand, then abandoning most of them.",
          "Using food-safety or hygiene claims as marketing lines.",
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Pick your strongest brand, write its one-page identity sheet, pin a 'who we are and where to order' post, and run the weekly plan for a month. Ask a few customers each week how they found you, and compare what they say with your app order reports. Then decide whether a second brand deserves its own active account.",
      },
      {
        type: "paragraph",
        text: "Creator collaborations for food brands are covered in our guide to influencer marketing for food brands.",
        links: [{ text: "influencer marketing for food brands", href: "/blog/influencer-marketing-food-brands-india" }],
      },
    ],
    faqs: [
      {
        question: "Should each virtual brand from one kitchen have its own Instagram account?",
        answer:
          "Only if you can keep each one active and the brands serve genuinely different customers or occasions. An abandoned account damages trust more than no account. Many kitchens run one or two active brand accounts and keep the rest as simple profiles with the menu, apps and contact details, then expand as capacity allows.",
      },
      {
        question: "Can we promote delivery app discounts on our social accounts?",
        answer:
          "Yes, if you state the terms clearly: which app, which items, minimum order if any, and when it ends. App-funded and brand-funded offers can change at short notice, so check before posting and remove the post when the offer ends. Don't invent urgency: India's CCPA dark patterns guidelines (November 2023) list false urgency as a prohibited practice.",
      },
      {
        question: "Is it worth showing the kitchen if it's small or basic?",
        answer:
          "Often, yes, if it's clean and you film what's real. Customers mostly want to see that real people cook their food with care. Focus on hands, ingredients and specific techniques rather than wide shots. Avoid making hygiene or food-safety claims; let the footage speak, and fix anything you wouldn't want customers to see before you film.",
      },
      {
        question: "How do we know if social media is bringing orders, when orders happen on apps?",
        answer:
          "You usually can't attribute app orders precisely to posts. Look for patterns: order volumes on days after strong posts, brand-name searches in the apps if they report them, mentions in reviews, and what customers say when asked. A social-only offer code, with clear terms, can give a rough signal. Treat all of these as indicators, not proof.",
      },
    ],
  },
  {
    slug: "instagram-reels-ideas-for-bakeries",
    category: "Social Media Management",
    title: "How Bakeries and Dessert Brands Can Use Reels to Showcase Products and Drive Orders",
    seoTitle: "Instagram Reels Ideas for Bakeries: 24 Concepts",
    excerpt:
      "24 Instagram Reels concepts for bakeries and dessert brands, each with a hook line and what to film, plus the custom-order enquiry journey from Reel to confirmed order and a copy-ready enquiry reply.",
    metaDescription:
      "Instagram Reels marketing for bakeries: 24 Reels concepts with hook lines, what to film, and a custom-order enquiry journey with a ready-to-use DM reply.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-12",
    lastReviewed: "November 2026",
    readingTime: "9 min read",
    tags: [
      "Instagram Reels marketing for bakeries",
      "bakery Reels ideas",
      "dessert brand Instagram",
      "custom cake orders Instagram",
      "home bakery social media",
    ],
    related: ["instagram-reels-content-plan", "instagram-business-profile-optimization", "restaurant-cafe-influencer-marketing-india"],
    hero: {
      src: "/blog/brand-guides/instagram-reels-ideas-for-bakeries.svg",
      alt: "A bakery order-enquiry journey: a Reel with a hook leads to the profile, a pinned menu and lead times, a direct message with an enquiry template, then a confirmed order and a reshare with consent",
    },
    body: [
      {
        type: "paragraph",
        text: "A home baker in Kochi posts a Reel of a cake being frosted, and it gets more views than anything she has posted before. The DMs fill up: 'price?', 'do you deliver to Kakkanad?', 'can you do eggless?', 'need one tomorrow'. By the time she has answered half of them, two people have ordered elsewhere. The Reel worked. The journey after it didn't.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Instagram Reels marketing for bakeries works when each Reel shows something specific (a technique, a reveal, a custom order, a seasonal bake) with a clear hook in the first seconds, and when the profile is ready for the enquiries that follow. Pin your menu, lead times and delivery areas, use a standard DM reply that collects order details, and confirm orders in writing. Describe ingredients accurately and never fake scarcity.",
      },
      { type: "heading", text: "What makes a bakery Reel work", id: "what-makes-it-work" },
      {
        type: "paragraph",
        text: "Bakeries have an advantage most businesses envy: the process is satisfying to watch. Ganache pouring, lamination, piping, a knife cutting through layers. The risk is that every Reel becomes the same pretty clip with no reason to act. A useful bakery Reel does one job: show a product clearly, answer a question, or prompt an order for a specific date. For the broader approach, our guides to an Instagram Reels strategy and to planning a month of Reels cover series, pacing and repetition; this article is the bakery-specific idea list.",
        links: [
          { text: "an Instagram Reels strategy", href: "/blog/instagram-reels-strategy-for-brands" },
          { text: "planning a month of Reels", href: "/blog/instagram-reels-content-plan" },
        ],
      },
      {
        type: "list",
        items: [
          "Put the product or the most satisfying moment in the first two seconds.",
          "Use on-screen text for the hook, because many people watch without sound.",
          "Show the finished product long enough to see it properly.",
          "End with one action: 'DM for custom orders', 'order by Thursday for Sunday', or 'see the menu in highlights'.",
          "Say 'eggless', 'no added sugar' or 'whole wheat' only if it's accurate for that exact product, every time.",
        ],
      },
      { type: "heading", text: "24 Reels concepts with hook lines", id: "reels-concepts" },
      {
        type: "paragraph",
        text: "Each concept below includes a hook line you can adapt for on-screen text and what to film. Group them into series so your audience learns what to expect.",
      },
      { type: "subheading", text: "Process and craft" },
      {
        type: "table",
        headers: ["#", "Concept", "Hook line", "What to film"],
        rows: [
          ["1", "Layer reveal", "'Guess how many layers before I cut'", "Slow cut, pull out a slice, count on screen"],
          ["2", "Lamination", "'This is why croissants take three days'", "Dough folds, chilling, final bake, flaky cross-section"],
          ["3", "Piping close-up", "'One nozzle, five designs'", "Overhead shot of the same nozzle used five ways"],
          ["4", "Ganache drip", "'The two-minute test before every drip cake'", "Temperature check, test drip, full pour"],
          ["5", "Bread scoring", "'Same dough, three scores'", "Score, bake, compare the loaves side by side"],
          ["6", "From flour to box", "'Every step of one order in 30 seconds'", "Time-lapse from weighing to boxing"],
        ],
      },
      { type: "subheading", text: "Products and menu" },
      {
        type: "table",
        headers: ["#", "Concept", "Hook line", "What to film"],
        rows: [
          ["7", "Menu in 15 seconds", "'Everything we bake, in 15 seconds'", "Quick cuts of each item with name and price on screen"],
          ["8", "Size guide", "'How many people does a 1 kg cake feed?'", "Cakes of each size next to a plate and a knife"],
          ["9", "Flavour of the month", "'Only until the 30th: here's why'", "The ingredient, the bake, the slice (dates must be real)"],
          ["10", "Box opening", "'What arrives at your door'", "Sealed box, opening, cake as delivered"],
          ["11", "Dietary options explained", "'Our eggless range, and what's in it'", "Ingredient close-ups; accurate labels only"],
          ["12", "Pairings", "'What to drink with each pastry'", "Each pastry with tea, coffee or milk"],
        ],
      },
      { type: "subheading", text: "Custom orders and occasions" },
      {
        type: "table",
        headers: ["#", "Concept", "Hook line", "What to film"],
        rows: [
          ["13", "Brief to cake", "'She sent this sketch. Here's the cake.'", "The brief (with permission), the process, the result"],
          ["14", "Theme builds", "'A cricket-themed birthday, start to finish'", "Sketch, colours, toppers, final cake"],
          ["15", "How to order a custom cake", "'Three things to tell us before you order'", "Text-led Reel: date, servings, design reference"],
          ["16", "Lead times explained", "'Why we need five days for this one'", "Each stage with a day count on screen (use your real timings)"],
          ["17", "Festive boxes", "'Our Diwali box, packed by hand'", "Assembly line, filled box, gift tag"],
          ["18", "Corporate gifting", "'Fifty boxes, one afternoon'", "Batch packing, labels, delivery ready"],
        ],
      },
      { type: "subheading", text: "People, behind the scenes and community" },
      {
        type: "table",
        headers: ["#", "Concept", "Hook line", "What to film"],
        rows: [
          ["19", "Baker's day", "'4 am to sold out: a day in our bakery'", "Morning light, ovens, the shelf filling up"],
          ["20", "Fails", "'This is what happened to Tuesday's macarons'", "The cracked batch and what you changed"],
          ["21", "Customer reaction", "'We asked if we could film her opening it'", "Real reaction, filmed with written consent"],
          ["22", "Answer a comment", "'Someone asked if we can make it gluten-free'", "Reply-to-comment Reel with an honest answer"],
          ["23", "Supplier visit", "'Where our butter comes from'", "The supplier, with their permission; no unverified origin claims"],
          ["24", "Pre-order countdown", "'Pre-orders for Christmas open Monday'", "Teaser shots, real dates and real capacity"],
        ],
      },
      {
        type: "paragraph",
        text: "On concept 24 and anything time-bound: only say slots are limited if they are, and state the real cut-off. India's CCPA Guidelines for Prevention and Regulation of Dark Patterns (30 November 2023) name false urgency as a prohibited practice. If you want to test a concept with non-followers before showing it to your followers, Instagram's trial Reels feature does that for professional accounts at the time of writing (November 2026); check the Help Centre for current details.",
        links: [
          { text: "CCPA Guidelines for Prevention and Regulation of Dark Patterns", href: PIB_DARK_PATTERNS },
          { text: "trial Reels feature", href: "https://help.instagram.com/1013292530224018" },
        ],
      },
      { type: "heading", text: "The custom-order enquiry journey", id: "order-enquiry-journey" },
      {
        type: "paragraph",
        text: "Most bakery orders that start on Instagram end in a DM or WhatsApp chat. The aim is to collect the details you need in one or two messages, so the customer isn't left waiting and you aren't chasing information. Map the journey once and set up each step.",
      },
      {
        type: "table",
        headers: ["Step", "What the customer does", "What you set up"],
        rows: [
          ["1. Sees a Reel", "Watches, maybe saves or shares", "A clear hook, the product shown properly, one call to action"],
          ["2. Visits the profile", "Checks the bio and highlights", "Bio with delivery areas and order method; highlights for Menu, Prices, Lead times, Reviews, How to order"],
          ["3. Sends a message", "Asks 'price?' or 'available tomorrow?'", "A saved reply that asks for date, servings, flavour, design, delivery or pickup, and dietary needs"],
          ["4. Gets a quote", "Decides", "A written quote with price, what's included, delivery charge, payment and cancellation terms"],
          ["5. Confirms", "Pays an advance if you require one", "A confirmation message repeating every detail"],
          ["6. Receives the order", "Opens the box, maybe posts", "Packaging with your handle; a request to tag you"],
          ["7. Comes back", "Reorders for the next occasion", "Reshare (with consent), occasion reminders only if they've agreed"],
        ],
      },
      {
        type: "paragraph",
        text: "If you use WhatsApp for orders, a WhatsApp Business account can be linked to an Instagram professional account so a WhatsApp button appears on your profile, as described in WhatsApp's Help Centre. Our guide to turning Instagram profile visitors into enquiries covers bio, highlights and contact buttons in more depth.",
        links: [
          { text: "WhatsApp's Help Centre", href: "https://faq.whatsapp.com/647574060315065" },
          { text: "turning Instagram profile visitors into enquiries", href: "/blog/instagram-business-profile-optimization" },
        ],
      },
      {
        type: "template",
        label: "Saved reply for custom-order enquiries (DM or WhatsApp)",
        text: "Hi [name], thank you for reaching out! To check availability and send you a quote, could you share:\n\n1. Date and time you need it\n2. Delivery (area/pin code) or pickup\n3. Number of people / size\n4. Flavour (our current menu is in the 'Menu' highlight)\n5. Design reference or theme, if any\n6. Dietary needs: eggless, nut-free, etc. (please tell us about any allergies)\n\nCustom cakes need at least [X] days' notice. We'll reply with the price, what's included and our payment and cancellation terms. Thank you!",
      },
      {
        type: "template",
        label: "Order confirmation message",
        text: "Confirmed: [product], [size/servings], [flavour], [design notes].\nDate and time: [ ]  Delivery to: [ ] / Pickup at: [ ]\nPrice: Rs [ ] (includes [ ]; delivery Rs [ ])\nAdvance received: Rs [ ]  Balance due: Rs [ ] by [ ]\nDietary notes: [ ]  Changes possible until: [date]\nCancellation terms: [your policy]\n\nPlease reply 'OK' to confirm these details.",
      },
      { type: "heading", text: "Ingredient and dietary accuracy", id: "ingredient-accuracy" },
      {
        type: "paragraph",
        text: "Dietary words carry real weight for customers with allergies or religious and family food practices. 'Eggless' must mean no egg in any component. 'Sugar-free' and 'no added sugar' are nutrition claims with specific conditions under FSSAI's advertising and claims regulations, and words like 'fresh' and 'natural' are restricted too. Our guide to social media for packaged food brands explains these rules and includes a claims checklist. If you can't guarantee a kitchen free from nuts, gluten or egg, say so plainly in your highlights.",
        links: [{ text: "social media for packaged food brands", href: "/blog/social-media-marketing-packaged-food-brands" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Reels that end without telling viewers how to order.",
          "Answering 'price?' with 'DM' when they already DM'd.",
          "Showing a cake you made once as if it were on the regular menu.",
          "Filming customers or their children at handover without asking.",
          "Posting other bakers' designs as inspiration without credit, or as your own work.",
          "Fake 'only two slots left' posts during festive weeks.",
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Set up the profile first: menu, prices or starting prices, lead times and delivery areas in highlights, and the saved reply above. Then pick six concepts, one from each group plus two that suit your bestsellers, and film them in one baking day. Post two a week and watch which ones bring messages, not only views. For seasonal menu and festive campaign timelines, our sister guide to seasonal menu campaigns covers the run-up.",
        links: [{ text: "seasonal menu campaigns", href: "/blog/restaurant-seasonal-menu-campaigns" }],
      },
      {
        type: "paragraph",
        text: "Creator tie-ups are a separate route, covered in our guide to restaurant and café influencer marketing. If you'd rather hand over the editing, our Reels and short-form editing works from footage you capture in the bakery.",
        links: [
          { text: "restaurant and café influencer marketing", href: "/blog/restaurant-cafe-influencer-marketing-india" },
          { text: "our Reels and short-form editing", href: "/services/social-media-management#reels-short-form-video" },
        ],
      },
    ],
    faqs: [
      {
        question: "How long should a bakery Reel be?",
        answer:
          "Long enough to show the product properly and no longer. Many bakery Reels work at 10 to 30 seconds, because the satisfying moment (a cut, a pour, a reveal) is short. Longer Reels suit a full custom-order story. Instagram's maximum length can change, so check the app; test lengths and keep what your audience watches through.",
      },
      {
        question: "Should a bakery show prices on Instagram?",
        answer:
          "Showing prices, or at least starting prices, saves you and your customers time and reduces 'price?' messages that go nowhere. Put a price list or 'starting from' guide in a highlight and update it when prices change. Custom work can still be quoted individually, but say what affects the price: size, design complexity and delivery.",
      },
      {
        question: "Can we post photos of customers with their cakes?",
        answer:
          "Only with permission, and ideally in writing for anything that stays on your feed. Ask at handover whether they're happy to be featured, and respect a no. For children's birthday cakes, get a parent's consent or show only the cake. If a customer posts and tags you, resharing to Stories with credit is a common, low-risk option.",
      },
      {
        question: "How do we stop custom-order enquiries overwhelming us during festivals?",
        answer:
          "Announce your festive menu and order cut-off early, state your real capacity, and close orders when you reach it, saying so clearly. Use the saved reply so every enquiry arrives with the details you need. Post a pinned Story when you're fully booked. Honest limits protect your quality and avoid disappointed customers.",
      },
    ],
  },
];
