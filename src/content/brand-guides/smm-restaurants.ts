import type { BlogPost } from "@/content/blog";

/**
 * SMM batch 04, writer D (2026-11-12): restaurant social media operations.
 * Shoot brief (11), seasonal menus, events and LTO campaigns (12), opening plan (13) and reviews and complaints (14).
 * Platform and regulatory statements were checked against official sources in November 2026
 * (Google Business Profile Help, Maps user-generated content policy, Instagram Help, FSSAI, ASCI, PIB/CCPA).
 * Sources log: smm-sources-smm-restaurants.md in the batch scratchpad.
 */

const FSSAI_CLAIMS =
  "https://fssai.gov.in/upload/uploadfiles/files/Compendium_Advertising_Claims_Regulations_16_11_2021.pdf";
const ASCI_CODE = "https://www.ascionline.in/the-asci-code/";
const PIB_DARK_PATTERNS = "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1983994&reg=48&lang=2";
const GBP_REVIEWS = "https://support.google.com/business/answer/3474050?hl=en";
const GBP_REPORT = "https://support.google.com/business/answer/4596773?hl=en";
const MAPS_UGC_POLICY = "https://support.google.com/contributionpolicy/answer/7400114?hl=en";
const GBP_OPENING_DATE = "https://support.google.com/business/answer/9174409?hl=en";
const GBP_POSTS = "https://support.google.com/business/answer/7342169?hl=en";
const IG_REEL_RATIO = "https://help.instagram.com/1038071743007909";
const IG_PHOTO_RES = "https://help.instagram.com/1631821640426723/";
const IG_AUDIO = "https://help.instagram.com/329208821595430";
const IG_REELS_LESS = "https://help.instagram.com/1525585517644948/";
const IG_COLLAB = "https://help.instagram.com/291200585956732";
const IG_HIDDEN_WORDS = "https://help.instagram.com/700284123459336";

export const smmRestaurantPosts: BlogPost[] = [
  // 11
  {
    slug: "restaurant-food-photography-video-brief",
    category: "Social Media Management",
    title: "Restaurant Menu Photography and Short-Form Video: A Content Brief for Social Media Teams",
    seoTitle: "Restaurant Food Photography and Video: A Shoot Brief",
    excerpt:
      "A production brief for restaurant social media teams: what to agree before a menu shoot, a copy-ready shoot brief template, a shot list for stills and Reels, and the accuracy and consent checks that keep content honest.",
    metaDescription:
      "A restaurant shoot brief for social media: copy-ready template, menu photo and Reels shot list, shoot-day plan around service, and accuracy and consent checks.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-12",
    lastReviewed: "November 2026",
    readingTime: "11 min read",
    tags: [
      "social media content for restaurants",
      "restaurant food photography brief",
      "restaurant video shot list",
      "menu photography for Instagram",
      "restaurant Reels production",
    ],
    related: [
      "social-media-marketing-restaurants-cafes",
      "instagram-reels-content-plan",
      "social-media-content-workflow",
    ],
    hero: {
      src: "/blog/brand-guides/restaurant-food-photography-video-brief.svg",
      alt: "A restaurant shoot brief flow in five steps: purpose, dish list, shot list, shoot day around service, and edit and approve, with a reminder to shoot the dish as it is served",
    },
    body: [
      {
        type: "paragraph",
        text: "The photographer arrives at 12:30, just as the lunch rush starts. The chef has plated six dishes, two of which are not on the new menu yet, nobody has decided whether the shoot is for the menu card, Instagram or the delivery app, and the Reels editor later finds that every clip was filmed horizontally. A half-day shoot produces a folder of beautiful files that the social media team can barely use.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Social media content for restaurants is easier to produce when every shoot starts from a one-page brief. The brief names the purpose and channels, the exact dishes and their real portions, a shot list that covers stills and vertical video, the shoot window around service, who is in frame and has consented, and how files are named, edited and approved. Shoot each dish as customers receive it, and plan the edit before anyone picks up a camera.",
      },
      {
        type: "heading",
        text: "Who the brief is for, and why it saves the shoot",
        id: "who-the-brief-is-for",
      },
      {
        type: "paragraph",
        text: "A restaurant shoot involves more people than most product shoots: the owner who pays for it, the chef who plates, the floor manager who has to keep service running, the photographer or videographer, and the person who will edit and post. Each one assumes the others know the plan. The brief is the single page they all read the day before.",
      },
      {
        type: "paragraph",
        text: "It also stops scope drift: 'while you're here, can you get the bar and the team too' belongs in the shot list with time set aside, not squeezed in when the light has gone. If your restaurant hasn't settled what it posts and why, start with the strategy in our guide to social media marketing for restaurants and cafés, then come back to production.",
        links: [
          {
            text: "social media marketing for restaurants and cafés",
            href: "/blog/social-media-marketing-restaurants-cafes",
          },
        ],
      },
      { type: "heading", text: "The seven parts of a restaurant shoot brief", id: "seven-parts" },
      { type: "subheading", text: "1. Purpose and channels" },
      {
        type: "paragraph",
        text: "Say what the content is for: a new menu launch, a monthly content bank, a festive campaign, or refreshing menu photos for Google and delivery listings. Then list the channels. Instagram feed, Reels, Stories, Google Business Profile and delivery apps each need different crops, so the shooter must know before framing.",
      },
      { type: "subheading", text: "2. The dish list, with real portions" },
      {
        type: "paragraph",
        text: "List every dish by its menu name, with the plate or bowl it is served in, the garnish and the portion customers get. The chef signs this list off. It is the reference that keeps photos honest, and it tells the kitchen how many plates to prepare (usually a hero plate plus a backup for melting or wilting items).",
      },
      { type: "subheading", text: "3. Shot list" },
      {
        type: "paragraph",
        text: "Break each dish into specific shots: overhead still, 45-degree still, a detail, and one or two short vertical clips such as the pour, the tadka or the first cut. The shot list below is a starting point you can copy.",
      },
      { type: "subheading", text: "4. Location, light and timing" },
      {
        type: "paragraph",
        text: "Pick the tables with the best daylight and agree the shoot window around service, usually the quiet hours between lunch and dinner. Note which areas can be closed off and when the kitchen can plate for the camera without delaying real orders.",
      },
      { type: "subheading", text: "5. People and consent" },
      {
        type: "paragraph",
        text: "Name the staff who will appear and confirm they are comfortable being filmed. If diners might be in frame, decide in advance: shoot when the room is empty, keep guests out of focus, or ask identifiable guests for permission and record it. Never post a recognisable customer without their agreement.",
      },
      { type: "subheading", text: "6. Style references and brand rules" },
      {
        type: "paragraph",
        text: "Attach three to five references from your own feed or mood board, plus the props, surfaces and colours that match the restaurant. Note what to avoid, such as props from a different cuisine or garnishes the kitchen never uses.",
      },
      { type: "subheading", text: "7. Delivery, editing and approval" },
      {
        type: "paragraph",
        text: "State the file formats, naming convention, deadline for selects and who approves the final edits. The approval step is short for food: the chef checks accuracy, the owner checks brand fit, and the social team checks that each asset suits its channel.",
      },
      { type: "heading", text: "Copy-ready shoot brief template", id: "shoot-brief-template" },
      {
        type: "template",
        label: "Restaurant shoot brief (one page)",
        text: "RESTAURANT SHOOT BRIEF\n\nRestaurant / outlet: ____________________\nShoot date and window: ____ (e.g. 3:00 pm to 6:00 pm, between services)\nBrief owner: ____ | Chef sign-off: ____ | Final approver: ____\n\n1. PURPOSE\nWhat this shoot is for: [new menu / monthly content bank / festive campaign / listing refresh]\nWhere it will be used: [Instagram feed | Reels | Stories | Google Business Profile | delivery apps | menu card]\n\n2. DISH LIST (chef to confirm)\nDish name | Plate or bowl | Portion as served | Garnish | Plates needed | Notes (melts, wilts, steam)\n____ | ____ | ____ | ____ | ____ | ____\n\n3. SHOT LIST\nSee attached shot list. Priority shots marked *.\n\n4. LOCATION AND LIGHT\nTables / areas: ____ | Light: daylight from ____ | Areas closed during shoot: ____\nKitchen plating slots: ____ (must not delay live orders)\n\n5. PEOPLE AND CONSENT\nStaff appearing: ____ (each has agreed: yes / no)\nGuests: [room empty | guests out of focus | written permission for anyone identifiable]\n\n6. STYLE\nReferences attached: ____ | Props and surfaces: ____ | Avoid: ____\nAccuracy rule: shoot every dish as a customer receives it. No extra toppings, no substitute ingredients, no portions bigger than served.\n\n7. DELIVERY\nStills: ____ (format, crops 4:5 and 1:1) | Video: vertical 9:16 clips, plus horizontal only if requested\nFile names: date_dish_shot-type_number (e.g. 2026-11-20_paneer-tikka_overhead_01)\nSelects due: ____ | Edits due: ____ | Approval: chef (accuracy), owner (brand), social team (channel fit)",
      },
      { type: "heading", text: "Shot list: menu stills and short-form clips", id: "shot-list" },
      {
        type: "paragraph",
        text: "Most dishes need four to six assets. The table is a copyable list; trim it for simple items like a cold coffee and expand it for signature dishes.",
      },
      {
        type: "table",
        headers: ["Shot", "Format", "What it shows", "Production note"],
        rows: [
          ["Overhead hero", "Still, 4:5 and 1:1", "The full dish and its sides", "Even daylight, plate rim wiped, real cutlery"],
          ["45-degree hero", "Still, 4:5", "Height and layers (burgers, cakes, biryani)", "Shoot at table height, as a diner sees it"],
          ["Texture detail", "Still, close-up", "Crumb, char, glaze, garnish", "Fresh plate if the hero has been sitting"],
          ["Action clip", "Vertical video, 3 to 8 seconds", "Pour, tadka, cheese pull, slice, steam", "Several takes; keep the camera still"],
          ["Making-of clip", "Vertical video, 10 to 20 seconds", "Two or three prep steps by the chef", "Film in the real kitchen during prep, with permission"],
          ["Serve clip", "Vertical video, 3 to 6 seconds", "Plate set down at a table", "Use staff, not paid extras posing as diners"],
          ["Context still", "Still, 4:5", "The dish in the room, with drinks and table setting", "Keep any guests out of focus or ask first"],
          ["Menu card or listing", "Still, plain background", "A clear, accurate view for menus and apps", "Match the delivery portion and packaging if used there"],
        ],
      },
      {
        type: "paragraph",
        text: "At the time of writing (November 2026), Instagram's Help Centre says Reels can use an aspect ratio between 1.91:1 and 9:16, and that photos are shared at a width of up to 1080 pixels. Shooting video vertically from the start avoids cropping out the action later. Instagram's help pages also list watermarked, bordered and blurry Reels among those it may show less often, so export clean files without another app's watermark.",
        links: [
          { text: "Reels can use an aspect ratio between 1.91:1 and 9:16", href: IG_REEL_RATIO },
          { text: "photos are shared at a width of up to 1080 pixels", href: IG_PHOTO_RES },
          { text: "watermarked, bordered and blurry Reels", href: IG_REELS_LESS },
        ],
      },
      { type: "heading", text: "Running the shoot day around service", id: "shoot-day" },
      {
        type: "list",
        items: [
          "Day before: chef confirms the dish list and prep; floor manager blocks the tables; brief goes to everyone.",
          "Arrival (30 minutes before the window): set up near the window, test light, clean surfaces and glassware.",
          "Plate in batches of two or three dishes so food is photographed within minutes of plating.",
          "Shoot stills first while the dish is at its best, then the action clips, then the detail shots.",
          "Film the making-of clips during real prep rather than staging a fake rush.",
          "Back up the cards before leaving, and note the best takes against the shot list.",
        ],
      },
      {
        type: "paragraph",
        text: "Most restaurants also need a lighter, ongoing version: ten minutes of phone capture during each prep shift, guided by a short weekly shot list from the social team. That steady stream is what fills Stories and keeps the Reels calendar going between planned shoots. Our Reels planning guide shows how to turn that footage into a month of ideas without repeating yourself.",
        links: [{ text: "Reels planning guide", href: "/blog/instagram-reels-content-plan" }],
      },
      { type: "heading", text: "Accuracy, claims and consent checks", id: "accuracy-checks" },
      {
        type: "paragraph",
        text: "Food content is advertising for the restaurant, so the usual claim rules apply to what you show and write. India's Food Safety and Standards (Advertising and Claims) Regulations, 2018 say claims must be truthful, unambiguous, meaningful and not misleading (Regulation 4), and they put conditions on words such as natural, fresh, pure, original, traditional and authentic (Regulation 9, read with Schedule V, in FSSAI's compendium version dated 16 November 2021). The ASCI Code also expects factual claims to be capable of substantiation. Check current obligations with your legal adviser if you plan any health, nutrition or sourcing claims.",
        links: [
          { text: "Food Safety and Standards (Advertising and Claims) Regulations, 2018", href: FSSAI_CLAIMS },
          { text: "ASCI Code", href: ASCI_CODE },
        ],
      },
      {
        type: "list",
        items: [
          "The dish in the photo matches the menu description, portion and garnish.",
          "No ingredient is swapped for the camera (for example, a different cheese because it melts better).",
          "Captions make no 'fresh', 'healthy', 'organic' or 'homemade' claim the kitchen can't back up.",
          "Spice level, veg or non-veg status and key allergens in the caption match the menu.",
          "Every identifiable staff member and guest has agreed to appear.",
          "Music is from the platform's licensed library or otherwise properly licensed.",
        ],
      },
      {
        type: "paragraph",
        text: "On music, Instagram's Help Centre says licensed audio must credit the artist and track, and that licensed audio can be muted if agreements with rights holders change. Keep the original, unmixed clips so a Reel can be re-edited if that happens.",
        links: [{ text: "licensed audio can be muted if agreements with rights holders change", href: IG_AUDIO }],
      },
      { type: "heading", text: "After the shoot: from files to a content bank", id: "after-the-shoot" },
      {
        type: "paragraph",
        text: "Selects should come back within a few days while the menu is still fresh in everyone's mind. Tag every file with the dish name, shot type and channel, then slot the assets into the calendar: hero stills for the launch post, action clips for Reels, details for carousels and Stories, plain shots for Google and delivery listings. A shared folder with that structure means anyone on the team can find the right file in seconds. Our content workflow guide covers the wider pipeline from brief to publishing.",
        links: [{ text: "content workflow guide", href: "/blog/social-media-content-workflow" }],
      },
      {
        type: "paragraph",
        text: "Note what was missed or didn't work, such as dishes that lost their shape, and fold it into the next brief.",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Booking a shoot during service, so food waits and real customers wait too.",
          "No chef sign-off on the dish list, leading to dishes that look different from what is served.",
          "Shooting only horizontal video and losing the action when it is cropped for Reels.",
          "Over-editing colour so the food looks unlike the plate on the table.",
          "Posting diners or staff who didn't agree to appear.",
          "Treating the shoot as the whole plan, with no weekly phone capture to fill the gaps.",
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Copy the template, fill in the dish list with your chef, and run your next shoot in the quiet hours between services. Even a phone shoot improves when everyone has read the same page the day before.",
      },
      {
        type: "paragraph",
        text: "If you work with an agency, be clear about who does what: in our social media management scope, Reels are edited from footage the restaurant or creators supply, and photo or video shoots are scoped separately through content creation services.",
        links: [
          { text: "social media management scope", href: "/services/social-media-management#reels-short-form-video" },
          { text: "content creation services", href: "/services/ugc-content-production" },
        ],
      },
    ],
    faqs: [
      {
        question: "Do restaurants need a professional photographer for social media?",
        answer:
          "Not always. A professional shoot is useful for a new menu, listing photos and hero images that will be used for months. Day-to-day Stories and many Reels can come from phone footage captured during prep, as long as someone follows a short shot list and shoots in good light. Many restaurants combine one planned shoot per menu change with weekly phone capture.",
      },
      {
        question: "How many dishes can be shot in one half-day session?",
        answer:
          "It depends on the shot list, plating time and how fast dishes lose their look. A dish that needs overhead and angled stills plus two vertical clips takes far longer than a single listing photo. Plan your session from the shot list rather than a dish count, put the priority dishes first, and leave buffer time for melting desserts or dishes that need re-plating.",
      },
      {
        question: "Can we use the same photos on Instagram and delivery apps?",
        answer:
          "Sometimes, but check each platform's own image guidelines and crops. Delivery listings usually need a clear, accurate view of the dish as delivered, often on a plain background, while Instagram favours mood and context. If the delivery portion or packaging differs from dine-in, shoot the delivery version separately so customers aren't surprised.",
      },
      {
        question: "Should staff appear in restaurant content?",
        answer:
          "Staff often make the most engaging content because they show the people behind the food. Only feature people who are happy to appear, ask again before reusing older footage, and remove content promptly if someone leaves and asks you to. Record agreement in writing, even a simple message, so the social team can check it later.",
      },
      {
        question: "Who should approve restaurant food content before it goes live?",
        answer:
          "The chef or kitchen head should confirm that the dish, portion, garnish and caption details match what is served. The owner or brand lead checks tone and fit, and the social team checks the format for each channel. Keeping this to two quick checks avoids delays while still catching inaccurate photos before customers do.",
      },
    ],
  },

  // 12
  {
    slug: "restaurant-seasonal-menu-campaigns",
    category: "Social Media Management",
    title: "Social Media Campaigns for Restaurants: How to Promote Seasonal Menus, Events and Limited-Time Offers",
    seoTitle: "Restaurant Social Media Campaigns: Menus, Events, Offers",
    excerpt:
      "How restaurants can plan social media campaigns for seasonal menus, events and limited-time offers: lead times by campaign type, a campaign one-pager, a sample six-week timeline and honest offer terms.",
    metaDescription:
      "Plan restaurant social media campaigns for seasonal menus, events and limited-time offers: a six-week sample timeline, campaign brief and honest offer terms.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-12",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: [
      "social media marketing campaigns for restaurants",
      "restaurant seasonal menu promotion",
      "restaurant event promotion on Instagram",
      "limited time offer restaurant marketing",
      "restaurant campaign timeline",
    ],
    related: [
      "social-media-marketing-restaurants-cafes",
      "seasonal-influencer-marketing-india",
      "monthly-social-media-content-calendar",
    ],
    hero: {
      src: "/blog/brand-guides/restaurant-seasonal-menu-campaigns.svg",
      alt: "A six-week restaurant campaign timeline: plan, shoot, tease, launch, run and close, with menu, event and offer campaigns sharing the same clock",
    },
    body: [
      {
        type: "paragraph",
        text: "The monsoon menu has been ready in the kitchen for a week, but the first post goes up the morning it launches, with a phone photo and the caption 'New menu now live!'. Two weeks later the team is planning a Friday jazz night and announces it on Wednesday. Neither campaign fails because the food or the band was wrong. They fail because social media was asked to start when the kitchen finished.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Social media marketing campaigns for restaurants work best when they start with the kitchen and the calendar together. Seasonal menus need about four to six weeks from planning to close, events need enough notice for people to book, and limited-time offers need clear terms and an honest end date. Write a one-page campaign brief, shoot before launch, tease without overpromising, then sustain and measure with your own sales and booking data.",
      },
      {
        type: "heading",
        text: "Three campaign types, three different clocks",
        id: "three-campaign-types",
      },
      {
        type: "paragraph",
        text: "A seasonal menu, an event and a limited-time offer (LTO) all look like 'a promotion', but they ask different things of the audience and the kitchen. Planning them with the same timeline is where most problems start. The lead times below are practitioner guidance, not platform rules; adjust them to your kitchen and your guests.",
      },
      {
        type: "table",
        headers: ["", "Seasonal menu", "Event", "Limited-time offer"],
        rows: [
          ["What you want people to do", "Try new dishes over several weeks", "Book or turn up on a specific date", "Visit or order within a defined window"],
          ["Suggested planning start", "4 to 6 weeks before launch", "3 to 4 weeks before the date", "2 to 3 weeks before it starts"],
          ["Must-have information", "Dishes, prices, how long the menu runs", "Date, time, price or cover, booking method, capacity", "Exact terms, dates, times, dine-in or delivery, exclusions"],
          ["Content that carries it", "Dish Reels, chef story, carousels", "Performer or host intro, countdown Stories, recap", "One clear offer post, Stories reminders, pinned post"],
          ["Main risk", "Dishes look different from the shoot", "Overselling capacity", "Unclear terms causing disputes at the bill"],
        ],
      },
      { type: "heading", text: "Start with a campaign one-pager", id: "campaign-one-pager" },
      {
        type: "paragraph",
        text: "Before any post is designed, put the campaign on one page that the owner, chef, floor manager and social team all agree. It prevents the most common last-minute changes: a price that changes after the post is live, a dish dropped because a supplier fell through, or an event that quietly becomes ticketed.",
      },
      {
        type: "template",
        label: "Restaurant campaign brief",
        text: "CAMPAIGN BRIEF\n\nCampaign name: ____\nType: [seasonal menu | event | limited-time offer]\nRuns from ____ to ____ (days and times: ____)\nOutlets: ____ | Dine-in / delivery / takeaway: ____\n\nGOAL\nWhat success looks like, in our own numbers: [covers on event night | units of new dishes sold | bookings | enquiries]\nHow we will count it: [POS item report | booking system | 'how did you hear about us' at the table]\n\nTHE OFFER OR MENU (owner and chef to confirm)\nItems and prices: ____ (taxes and service charge stated as they appear on the bill)\nConditions: ____ (minimum order, days excluded, not combinable with ____, while stocks last ONLY if stock is genuinely limited)\nCapacity: ____ covers / ____ portions per day\n\nCONTENT\nShoot date: ____ (must be before teaser week)\nKey assets: ____ | Partners to tag or collaborate with: ____\nChannels: Instagram feed, Reels, Stories, Google Business Profile, WhatsApp broadcast to opted-in customers, in-venue\n\nOPERATIONS\nStaff briefing date: ____ | Who answers DMs and calls about it: ____\nWhat happens if it sells out early: ____\n\nAPPROVALS\nChef (dishes and descriptions): ____ | Owner (prices, terms): ____ | Social lead: ____",
      },
      {
        type: "heading",
        text: "Sample timeline: a six-week seasonal menu campaign",
        id: "sample-timeline",
      },
      {
        type: "paragraph",
        text: "Here is a hypothetical example. Say a mid-sized restaurant is launching a four-week monsoon menu of six dishes and two drinks. Week 0 is launch week. The same structure works for a festive menu or a winter specials board.",
      },
      {
        type: "table",
        headers: ["Week", "Kitchen and operations", "Social content", "Other channels"],
        rows: [
          ["Week -3: Plan", "Chef finalises dishes, costing and portions; owner confirms prices", "Campaign brief signed off; content plan and shot list written", "Brief floor staff on dates"],
          ["Week -2: Shoot", "Test plating; shoot all dishes and the chef's prep", "Edit Reels, carousels and Stories; write captions and dish descriptions", "Update menu card proofs"],
          ["Week -1: Tease", "Staff tasting so servers can describe each dish", "Two teasers (an ingredient close-up, the chef at the pass); Stories poll on which dish to reveal first", "Google Business Profile update; WhatsApp note to opted-in regulars"],
          ["Week 0: Launch", "Menu live; track item sales daily", "Launch carousel with prices; dish Reel; pinned post; Stories through the week", "In-venue table cards; staff mention it at order"],
          ["Weeks 1 to 2: Sustain", "Drop or tweak any dish that isn't working", "One dish Reel a week, reshared guest posts (with permission), 'what our team orders' Stories", "Google post refreshed with a new photo"],
          ["Week 3: Close", "Plan which dishes, if any, stay on", "'Last week' reminder only if the end date is real; thank-you and recap", "Debrief: sales, feedback, content learnings"],
        ],
      },
      { type: "subheading", text: "Adapting it for an event" },
      {
        type: "paragraph",
        text: "Compress the plan to three or four weeks and build it around the booking. Announce with every detail people need to decide (date, time, price or cover charge, what is included, how to book), introduce the performer, chef or partner, and use Stories reminders as the date approaches. If you are co-hosting with a brewery, artist or neighbouring business, Instagram's collaborative posts let an invited account appear on the post and share it with its followers once they accept. Close the loop with a recap post the next day, using only guests who agreed to be shown.",
        links: [{ text: "collaborative posts", href: IG_COLLAB }],
      },
      { type: "subheading", text: "Adapting it for a limited-time offer" },
      {
        type: "paragraph",
        text: "An LTO needs less storytelling and more clarity. One well-written offer post, pinned for its duration, plus Stories reminders, usually does the job. The end date must be the real end date. If the offer is extended, say so plainly rather than restarting a countdown. India's Central Consumer Protection Authority issued Guidelines for Prevention and Regulation of Dark Patterns on 30 November 2023 that name false urgency among specified dark patterns, so avoid fake timers, invented 'only 5 left' claims and offers that 'end tonight' every night.",
        links: [{ text: "Guidelines for Prevention and Regulation of Dark Patterns", href: PIB_DARK_PATTERNS }],
      },
      { type: "heading", text: "Writing offer terms that don't cause arguments", id: "offer-terms" },
      {
        type: "paragraph",
        text: "Most offer complaints at the table come from something the post left out. The ASCI Code expects claims about objectively ascertainable facts to be capable of substantiation, and food descriptions are covered by the FSSAI claims rules on truthful, non-misleading claims. In practice, check every offer post against this list before it goes live:",
        links: [
          { text: "ASCI Code", href: ASCI_CODE },
          { text: "FSSAI claims rules", href: FSSAI_CLAIMS },
        ],
      },
      {
        type: "list",
        items: [
          "The price matches the bill, and the post says whether taxes and any service charge are extra.",
          "Days and hours are stated (for example, weekdays 12 to 4 pm only).",
          "Dine-in, takeaway or delivery is stated; delivery app prices and offers may differ and are set on the app.",
          "Exclusions are listed: other offers, certain items, public holidays, group bookings.",
          "Words like 'unlimited', 'free' and 'buy one get one' mean exactly what they say, with any limits written next to them.",
          "'While stocks last' appears only when stock is genuinely limited, and you update the post when it runs out.",
          "Dish descriptions avoid 'fresh', 'healthy', 'farm-to-table' or 'authentic' claims the kitchen can't support.",
          "Staff have seen the same terms, so the server and the post say the same thing.",
        ],
      },
      { type: "heading", text: "Where each channel fits in a campaign", id: "channels" },
      {
        type: "paragraph",
        text: "Instagram carries most of the storytelling, but nearby customers often check Google first. At the time of writing (November 2026), Google Business Profile Help says businesses can publish posts as updates, offers or events, which makes it a natural second home for the launch photo and the offer terms. Stories carry the reminders, and a WhatsApp broadcast reaches regulars who have opted in to hear from you. The Stories guide covers stickers and reminder formats in more depth.",
        links: [
          { text: "publish posts as updates, offers or events", href: GBP_POSTS },
          { text: "Stories guide", href: "/blog/instagram-stories-for-business" },
        ],
      },
      {
        type: "paragraph",
        text: "If creators are part of the plan, keep their work on a separate track with its own brief and disclosure checks; our seasonal influencer marketing guide covers that side. Campaigns sit on top of your regular calendar rather than replacing it, so slot them into the monthly content calendar early.",
        links: [
          { text: "seasonal influencer marketing guide", href: "/blog/seasonal-influencer-marketing-india" },
          { text: "monthly content calendar", href: "/blog/monthly-social-media-content-calendar" },
        ],
      },
      { type: "heading", text: "Measuring whether the campaign worked", id: "measuring" },
      {
        type: "paragraph",
        text: "Reach and likes tell you whether people saw the campaign, not whether they came in. Agree the business measure in the brief and compare it with a similar period before the campaign.",
      },
      {
        type: "table",
        headers: ["Campaign type", "Business measure", "Supporting social signals"],
        rows: [
          ["Seasonal menu", "Units of new dishes sold (POS item report), share of orders including them", "Saves and shares on dish posts, DMs asking about dishes"],
          ["Event", "Bookings, covers on the night, repeat bookings for the next edition", "Story replies, link taps, enquiries by DM or call"],
          ["Limited-time offer", "Offer redemptions recorded at billing, average bill during the window", "Pinned post views, questions about terms"],
        ],
      },
      {
        type: "paragraph",
        text: "Ask at the table how guests heard about it, and accept that some of the effect won't be attributable. For which social metrics matter by goal, see our social media KPIs guide.",
        links: [{ text: "social media KPIs guide", href: "/blog/social-media-kpis" }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Shooting the menu on launch day, so the first post is rushed and the teaser week is skipped.",
          "Announcing events with too little notice for people to plan or book.",
          "Leaving taxes, service charge or exclusions out of the offer post.",
          "Fake urgency: countdowns that restart, or 'last day' posts that aren't.",
          "Not briefing staff, so the server contradicts the post.",
          "Judging the campaign on likes instead of dish sales, bookings or redemptions.",
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Pick your next seasonal menu, event or offer, fill in the campaign brief with your chef and floor manager, and count back six weeks. Book the shoot before the teaser week; our restaurant shoot brief covers that step.",
        links: [{ text: "restaurant shoot brief", href: "/blog/restaurant-food-photography-video-brief" }],
      },
      {
        type: "paragraph",
        text: "Multi-week pushes that combine organic content, creators and offers are where social campaign planning helps. Ongoing posting, Stories and comment handling for those campaigns sit within a managed social media service, with campaign scope agreed separately.",
        links: [
          { text: "social campaign planning", href: "/services/social-campaigns" },
          { text: "a managed social media service", href: "/services/social-media-management#content-planning" },
        ],
      },
    ],
    faqs: [
      {
        question: "How often should a restaurant run social media campaigns?",
        answer:
          "There is no fixed number. Many restaurants run one bigger campaign per season or menu change and a few smaller events or offers in between. The limit is usually kitchen and team capacity, not the audience. Too many overlapping offers can confuse regulars and train them to wait for deals, so leave gaps where your regular content carries the feed.",
      },
      {
        question: "Should we announce prices in seasonal menu posts?",
        answer:
          "Usually yes. Prices help people decide whether to visit and reduce repeated DMs asking the same question. State them as they appear on the bill and say whether taxes or service charge are added. If prices vary by outlet or between dine-in and delivery apps, say so in the post rather than leaving customers to discover it at the table.",
      },
      {
        question: "Is 'while stocks last' acceptable on a restaurant offer?",
        answer:
          "Only when it is true. If a dish is genuinely limited, for example because an ingredient is seasonal or a batch is small, the phrase tells customers something useful. Using it as decoration when there is plenty of stock creates false urgency, which India's dark patterns guidelines of November 2023 name among specified practices. Update the post when it does sell out.",
      },
      {
        question: "Can a restaurant offer a discount in exchange for posting about an event?",
        answer:
          "Rewarding a social post is different from rewarding a review, but it still needs care. If guests post because they received something, ask them to make that clear in line with ASCI's influencer guidelines. Never offer discounts in exchange for reviews on Google: Google's Maps content policy prohibits businesses from offering incentives for posting any review.",
      },
      {
        question: "What if a seasonal dish is dropped mid-campaign?",
        answer:
          "Update or archive posts that feature it, change the Google Business Profile post, and tell staff so they can explain it. A short, honest Story such as 'our monsoon prawns are off the menu from today because the catch isn't right' is better than leaving customers to find out when they order. Then point people to the dishes that are still available.",
      },
    ],
  },

  // 13
  {
    slug: "restaurant-opening-social-media-plan",
    category: "Social Media Management",
    title: "How to Promote a New Café or Restaurant Opening on Social Media",
    seoTitle: "Restaurant Opening Social Media Plan: 21-Day Calendar",
    excerpt:
      "A practical social media plan for a new café or restaurant opening in India: the set-up checklist, a 21-day pre- and post-opening calendar, an honest soft launch, opening-day coverage and the first wave of reviews.",
    metaDescription:
      "Promote a new café or restaurant opening on social media with a set-up checklist, a 21-day pre- and post-opening calendar, opening-day plan and first reviews.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-12",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: [
      "social media marketing for restaurant opening",
      "new café opening Instagram plan",
      "restaurant launch content calendar",
      "restaurant soft launch social media",
      "Google Business Profile opening date",
    ],
    related: [
      "store-opening-influencer-campaign",
      "social-media-marketing-restaurants-cafes",
      "instagram-business-profile-optimization",
    ],
    hero: {
      src: "/blog/brand-guides/restaurant-opening-social-media-plan.svg",
      alt: "A 21-day restaurant opening timeline in four phases: set up and reveal, build-up, opening week, and settle in, with the opening day marked in the middle",
    },
    body: [
      {
        type: "paragraph",
        text: "The fit-out is a week behind, the espresso machine arrives tomorrow, and someone suggests announcing the opening date on Instagram 'to create buzz'. Three weeks later the date has moved twice, the comments are full of 'so when are you actually opening?', and the first Google review complains about a 40-minute wait on day one. New restaurants rarely lack excitement. They lack a plan that matches what the kitchen can actually deliver.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Social media marketing for a restaurant opening works best as a short, sequenced plan: set up accounts and your Google Business Profile before announcing anything, announce the date only when it is firm, spend two weeks showing the people, space and menu, run an honest soft launch, cover opening day live, and then spend the first week answering questions and reviews quickly. The 21-day calendar below gives a day-by-day starting point.",
      },
      { type: "heading", text: "Before day one of the plan: the set-up checklist", id: "set-up-checklist" },
      {
        type: "paragraph",
        text: "Do this before the calendar starts. An announcement that sends people to an empty profile or a wrong map pin wastes the moment.",
      },
      {
        type: "list",
        items: [
          "Instagram professional account with a clear name, the area in the bio, and the planned opening month.",
          "Contact options that someone will actually answer: phone, WhatsApp or DMs, with a named person on the inbox from day one.",
          "Google Business Profile created with the right address and pin, and the opening date added (see below).",
          "Menu with prices ready as a clean image or link, even if it is a short launch menu.",
          "Booking or walk-in policy decided, and the link or number ready.",
          "Ten to fifteen answers drafted for predictable questions: hours, parking, veg or Jain options, kids, pets, alcohol, reservations.",
          "A shot list for the build-up content and a person responsible for capturing it every day.",
          "Agreement from staff who will appear on camera.",
        ],
      },
      {
        type: "paragraph",
        text: "Google Business Profile has a feature built for this. At the time of writing (November 2026), its Help Centre says you can add an opening date up to one year ahead; once the business is verified, the profile appears on Google 90 days before that date. Before opening you can post updates and add photos, but users can't post reviews or photos until the business is officially open, and after opening the profile shows a 'Recently opened' tag for 90 days.",
        links: [{ text: "add an opening date up to one year ahead", href: GBP_OPENING_DATE }],
      },
      {
        type: "paragraph",
        text: "For profile structure and turning visitors into enquiries, see our Instagram profile optimisation guide.",
        links: [{ text: "Instagram profile optimisation guide", href: "/blog/instagram-business-profile-optimization" }],
      },
      { type: "heading", text: "The 21-day opening calendar", id: "opening-calendar" },
      {
        type: "paragraph",
        text: "This calendar runs from fourteen days before opening (D-14) to six days after (D+6). It assumes one feed post or Reel most days and Stories daily; scale it down if you are a small team, but keep the order. Move the whole calendar if the date moves, and don't announce a date until fit-out, licences and staffing are confirmed.",
      },
      {
        type: "table",
        headers: ["Day", "Phase", "Feed post or Reel", "Stories and other channels", "Operational dependency"],
        rows: [
          ["D-14", "Reveal", "Announcement: name, area, opening date, one line on what you serve", "Google Business Profile post; Story with a reminder or countdown sticker", "Date confirmed in writing by the fit-out team"],
          ["D-13", "Reveal", "Reel: the space before and during fit-out", "Poll: what are you most curious about?", "Site access for filming safely"],
          ["D-12", "Build-up", "The founder or chef: why this place, why this neighbourhood", "Answer questions from the poll", "Founder available to film"],
          ["D-11", "Build-up", "Carousel: the launch menu with prices", "Menu saved to a Highlight", "Prices final"],
          ["D-10", "Build-up", "Reel: one signature dish being made", "Behind-the-scenes kitchen clip", "Trial cooking under way"],
          ["D-9", "Build-up", "Meet the team: two or three people, with consent", "Staff training moments", "Staff agreement recorded"],
          ["D-8", "Build-up", "Practical post: hours, location, parking, booking or walk-in", "Directions Story; Google profile hours updated", "Hours final"],
          ["D-7", "Build-up", "Reel: drinks or desserts", "Quiz sticker on the menu", "Bar or dessert station ready"],
          ["D-6", "Soft launch", "Friends and family preview (clearly described as a preview)", "Stories from the preview with guests' permission", "Kitchen running full menu"],
          ["D-5", "Soft launch", "What we learned and are fixing before opening", "Answer DMs and questions", "Fix list owned by manager"],
          ["D-4", "Build-up", "Neighbourhood post: nearby partners or suppliers you work with (only if true and agreed)", "Collab post with a local partner if agreed", "Partner approval"],
          ["D-3", "Build-up", "Opening offer post, if any, with full terms", "Pinned post set; WhatsApp note to opted-in contacts", "Offer terms signed off by owner"],
          ["D-2", "Build-up", "Reel: final set-up, signage going up", "Reminder Story", "Signage installed"],
          ["D-1", "Build-up", "'Tomorrow' post with hours and what to expect", "FAQs answered in Stories", "Inbox staffed for opening day"],
          ["D0", "Opening", "Opening day photo or Reel, posted early", "Live Stories through the day; queue or wait-time updates if needed", "Shooter and inbox owner on shift"],
          ["D+1", "Opening week", "Thank-you post with real moments (guests who agreed)", "Reshare tagged Stories with permission", "Permission log"],
          ["D+2", "Opening week", "Most-ordered dishes so far", "Reply to early comments and reviews", "POS item data"],
          ["D+3", "Opening week", "Honest update: what changed after feedback", "Stories Q&A", "Manager input"],
          ["D+4", "Opening week", "Reel: a busy service from the kitchen side", "Team shout-outs", "Kitchen agreement to film"],
          ["D+5", "Settle in", "Guest photo or review shared with permission", "Google post refreshed with new photos", "Permission recorded"],
          ["D+6", "Settle in", "First-week recap and what's next (regular hours, next menu)", "Switch to your regular content calendar", "Week-one debrief"],
        ],
      },
      {
        type: "paragraph",
        text: "Instagram's Stories help pages describe a countdown sticker that followers can opt into for a reminder; check the current sticker options in the app before planning around one. After D+6, move into a normal rhythm, and use our café content ideas library to fill the weeks that follow.",
        links: [{ text: "café content ideas library", href: "/blog/instagram-content-ideas-for-cafes" }],
      },
      { type: "heading", text: "Running an honest soft launch", id: "soft-launch" },
      {
        type: "paragraph",
        text: "A friends-and-family preview is useful for the kitchen and for content, but how you present it matters. Describe it as a preview, not as a queue of strangers. If you invite local food creators, that is a creator campaign with its own disclosure rules, and our store opening influencer campaign guide covers that side so this plan can stay focused on your own channels.",
        links: [{ text: "store opening influencer campaign guide", href: "/blog/store-opening-influencer-campaign" }],
      },
      {
        type: "paragraph",
        text: "Don't ask preview guests to leave Google reviews in return for the free meal. Google's Maps user-generated content policy prohibits businesses from offering incentives, including discounts and free goods or services, in exchange for any review, and treats content based on a conflict of interest, such as reviews from employees or people with close ties to the business, as not allowed. You can ask genuine customers for honest reviews once you're open, without steering what they write.",
        links: [{ text: "Maps user-generated content policy", href: MAPS_UGC_POLICY }],
      },
      { type: "heading", text: "Opening day: a simple coverage plan", id: "opening-day" },
      {
        type: "list",
        items: [
          "One person owns content capture and is not also serving tables.",
          "Post the opening photo or Reel early in the day so people who planned to come see it.",
          "Stories every couple of hours: the first guests (with permission), the kitchen, the queue if there is one.",
          "If waits are long or a dish sells out, say so in Stories. It saves frustrated walk-ins and angry comments later.",
          "One person owns the inbox and replies to DMs and comments within the day.",
          "Capture plenty of extra footage; you will use it for weeks.",
        ],
      },
      { type: "heading", text: "Opening offers without dark patterns", id: "opening-offers" },
      {
        type: "paragraph",
        text: "An opening offer is optional. If you run one, write the terms in full: what is included, which days, dine-in or delivery, and any limits. Don't invent scarcity ('first 50 guests only') unless you will actually count and stop at 50, and don't run a countdown that quietly resets. The Central Consumer Protection Authority's dark patterns guidelines of November 2023 name false urgency among the practices they specify. Claims about the food itself should meet the ASCI Code's substantiation standard.",
        links: [
          { text: "dark patterns guidelines of November 2023", href: PIB_DARK_PATTERNS },
          { text: "ASCI Code", href: ASCI_CODE },
        ],
      },
      { type: "heading", text: "The first wave of comments and reviews", id: "first-reviews" },
      {
        type: "paragraph",
        text: "Opening week brings the most comments you will get for a while, and some will be complaints about waits, missing dishes or a bill. Reply to all of them. Thank people, acknowledge problems plainly, and move specifics to DMs or a phone call. Our guide to managing restaurant comments, reviews and complaints has reply examples for each scenario and an escalation table.",
        links: [
          {
            text: "managing restaurant comments, reviews and complaints",
            href: "/blog/restaurant-social-media-reviews-complaints",
          },
        ],
      },
      { type: "heading", text: "What to measure in the first month", id: "measure-first-month" },
      {
        type: "table",
        headers: ["Measure", "Where to find it", "Why it matters"],
        rows: [
          ["Covers and orders per day", "POS and booking system", "The real outcome of the opening"],
          ["Calls, direction requests and website taps", "Google Business Profile performance and Instagram insights", "Shows how many people were moved to act"],
          ["Questions in DMs and comments", "Inbox log", "Reveals what your content isn't answering"],
          ["'How did you hear about us'", "Ask at the table or on the bill", "Separates social from walk-past and word of mouth"],
          ["Repeat visits", "Booking names, loyalty programme if any", "Opening buzz fades; repeat guests matter more"],
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Announcing a date before fit-out and licences are certain, then moving it publicly.",
          "Sending people to a profile with no menu, hours or working contact.",
          "Inviting preview guests in exchange for reviews.",
          "Nobody watching the inbox on opening day.",
          "Hiding problems instead of posting an honest wait-time or sold-out update.",
          "Stopping all content after opening week.",
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Finish the set-up checklist, add your opening date to Google Business Profile, and copy the 21-day calendar into a shared sheet with an owner for each day. The plan moves with your date, so the only rule is not to announce until the date is real.",
      },
      {
        type: "paragraph",
        text: "If you want help with the launch push, social campaign planning covers the opening as a single campaign, and the regular content and community work that follows sits within what an agency like Kudozz includes in social media management.",
        links: [
          { text: "social campaign planning", href: "/services/social-campaigns" },
          {
            text: "what an agency like Kudozz includes in social media management",
            href: "/services/social-media-management#scope",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How early should a new restaurant start posting on social media?",
        answer:
          "Create and set up the accounts as soon as the name and location are fixed, and capture fit-out footage from the start. Public promotion works best once the opening date is firm, typically two to three weeks out. Starting the countdown months ahead risks losing interest, and announcing a date that later moves creates confusion that shows up in your comments.",
      },
      {
        question: "Can customers review our restaurant on Google before we open?",
        answer:
          "According to Google Business Profile Help at the time of writing (November 2026), users can't post reviews or photos, or suggest edits, until the business is officially open. You can still post updates and add photos yourself during the pre-opening period once the profile is verified and the opening date is set.",
      },
      {
        question: "Should we run an opening discount?",
        answer:
          "It's a business decision, not a requirement. A discount can bring first visits, but it can also attract deal-seekers and set a price expectation you will have to step back from. If you run one, state the terms in full, keep any limits real, and plan what happens when it ends. Many openings work well with a tasting plate or launch menu instead.",
      },
      {
        question: "What should we post if the opening date is delayed?",
        answer:
          "Post a short, honest update as soon as you know: what has changed, the new date if you have one, and an apology to anyone who planned around it. Update the Google Business Profile opening date and pinned posts. Then keep sharing build-up content so the account doesn't go silent while you wait. Avoid giving a new date until it is confirmed.",
      },
      {
        question: "Do we need both Instagram and Facebook for a restaurant opening?",
        answer:
          "Not necessarily. Choose based on where your nearby customers actually are: look at where similar local venues get comments and questions, and ask early guests. Google Business Profile matters for almost every venue because people check it for directions and hours. It is better to run one or two channels well during the opening than to spread a small team across several.",
      },
    ],
  },

  // 14
  {
    slug: "restaurant-social-media-reviews-complaints",
    category: "Social Media Management",
    title: "How Restaurants Can Manage Customer Comments, Reviews and Complaints on Social Media",
    seoTitle: "Restaurant Reviews and Complaints: Social Media Replies",
    excerpt:
      "How restaurants can handle comments, reviews and complaints across Instagram, Google and delivery apps: who owns each channel, response examples for eight common scenarios, an escalation table and what Google's review policies allow.",
    metaDescription:
      "Restaurant social media reputation management: reply examples for eight scenarios, an escalation table, and what Google's review policies say on fake reviews.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-12",
    lastReviewed: "November 2026",
    readingTime: "11 min read",
    tags: [
      "restaurant social media reputation management",
      "how to respond to restaurant reviews",
      "restaurant complaint response examples",
      "Google review policy for restaurants",
      "restaurant comment moderation",
    ],
    related: [
      "community-management-vs-customer-support",
      "social-media-crisis-management-plan",
      "social-media-marketing-restaurants-cafes",
    ],
    hero: {
      src: "/blog/brand-guides/restaurant-social-media-reviews-complaints.svg",
      alt: "A restaurant review and complaint triage flow: read, classify by scenario, reply in public, move details to private, and escalate hygiene and illness claims to the owner",
    },
    body: [
      {
        type: "paragraph",
        text: "Saturday, 10:40 pm. A one-star Google review says the biryani was cold and the manager was rude. An Instagram comment under your latest Reel asks why the delivery order was missing a dish. And a DM from a stranger claims a family member fell ill after eating with you last night. All three need a reply, but not the same reply, and not from the same person.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Restaurant social media reputation management comes down to three things: knowing who owns each channel, replying to every review and complaint with a calm public acknowledgement that moves details to a private channel, and escalating hygiene, illness and legal issues to the owner immediately. Never fake, buy or incentivise reviews, never ask only happy guests, and report fake reviews through the platform instead of arguing in public.",
      },
      { type: "heading", text: "Where feedback arrives and who owns it", id: "channels-and-owners" },
      {
        type: "paragraph",
        text: "Feedback for a restaurant is spread across channels the restaurant only partly controls. Decide who watches each one and how quickly. The targets below are practice suggestions for a single restaurant, not platform rules.",
      },
      {
        type: "table",
        headers: ["Channel", "Typical feedback", "Owner", "Suggested reply target"],
        rows: [
          ["Google reviews", "Ratings and detailed reviews of visits", "Owner or manager, drafted by the social team", "Within one to two days"],
          ["Instagram comments", "Questions, praise, public complaints", "Social team or community manager", "Same day during working hours"],
          ["Instagram and Facebook DMs", "Bookings, complaints, private issues", "Named inbox owner, with a manager for complaints", "Same day"],
          ["Delivery app reviews and chats", "Missing items, late or cold food, packaging", "Manager who handles the delivery partner account", "As the app's own process allows"],
          ["Facebook page reviews and comments", "Similar to Google, often older regulars", "Social team", "Within one to two days"],
        ],
      },
      {
        type: "paragraph",
        text: "Where social media community management ends and customer support begins is a decision in itself; our community management vs customer support guide sets out how to draw that line and build an escalation matrix.",
        links: [
          { text: "community management vs customer support guide", href: "/blog/community-management-vs-customer-support" },
        ],
      },
      { type: "heading", text: "Five rules for every reply", id: "five-rules" },
      {
        type: "list",
        items: [
          "Acknowledge the specific issue in the guest's words. Generic 'sorry for the inconvenience' replies read as copy-paste.",
          "Never argue facts in public, even when the guest is wrong. Offer to look into it.",
          "Move details to a private channel: a phone number, DM or email, with a named person.",
          "Never post a guest's bill, order number, phone number or CCTV stills publicly.",
          "Sign off as a real person or role (for example, 'Ritu, Manager') so the guest knows someone owns it.",
        ],
      },
      {
        type: "paragraph",
        text: "On Google specifically, Business Profile Help says the reviewer is notified when you reply, and replies are checked against Google's content policies before they appear. That review usually takes minutes but can take longer, and you can edit or delete your reply later. Reviewers can also update their review after reading your response, which is one more reason to reply well.",
        links: [{ text: "the reviewer is notified when you reply", href: GBP_REVIEWS }],
      },
      { type: "heading", text: "Response examples by scenario", id: "response-examples" },
      {
        type: "paragraph",
        text: "These replies are starting points, not scripts. Adapt them to your voice and the guest's actual words. Names and details are placeholders.",
      },
      { type: "subheading", text: "1. Wrong or late order at the table" },
      {
        type: "template",
        label: "Public reply: dine-in order problem",
        text: "Hi [name], thank you for telling us, and we're sorry your [dish] came out wrong and you had to wait for the replacement on [day]. That isn't the experience we want for anyone. I've shared this with our kitchen team. Could you send us a DM or call [number] and ask for [manager's name]? We'd like to hear exactly what happened and put it right.\n[Name], Manager",
      },
      { type: "subheading", text: "2. Delivery app issue (missing item, cold food, late delivery)" },
      {
        type: "template",
        label: "Public reply: delivery order problem",
        text: "Hi [name], sorry your order was missing the [item]. That's frustrating, especially when you're hungry. For delivery orders, refunds and replacements go through the app's own help section, so please raise it there if you haven't already. We've also checked our packing for that order and briefed the team. If the app doesn't resolve it, DM us your order date and time (not your phone number) and we'll follow up.\n[Name], [Restaurant]",
      },
      {
        type: "paragraph",
        text: "Delivery platforms run their own refund, rating and support processes, and these vary by app. Don't promise refunds the app controls; describe what you can do yourself.",
      },
      { type: "subheading", text: "3. Hygiene complaint or foreign object (escalate)" },
      {
        type: "template",
        label: "Public holding reply: hygiene concern",
        text: "Hi [name], thank you for raising this. We take it very seriously and our owner is looking into it personally today. Please could you DM us or call [owner's number] so we can get the details and any photos, and speak to you directly?\n[Name], Owner",
      },
      {
        type: "paragraph",
        text: "Don't deny, explain or blame in public, and don't make hygiene or safety claims ('our kitchen is 100% hygienic') that you can't substantiate. Capture the post and any photos, check the kitchen and supplier records for that service, and decide the next step with the owner.",
      },
      { type: "subheading", text: "4. Illness claim after a meal (escalate immediately)" },
      {
        type: "template",
        label: "Public holding reply: illness claim",
        text: "Hi [name], we're very sorry to hear [you / your family member] felt unwell, and we hope [you're / they're] recovering. Our owner would like to speak to you directly. Please call [number] or DM us your contact details so we can understand what happened.\n[Name], Owner",
      },
      {
        type: "paragraph",
        text: "Illness claims are a potential crisis, not a community management task. Don't speculate about the cause, admit liability or dismiss the claim in public. The owner takes over, and for anything serious, take legal advice. Our social media crisis plan covers severity levels and holding statements.",
        links: [{ text: "social media crisis plan", href: "/blog/social-media-crisis-management-plan" }],
      },
      { type: "subheading", text: "5. Price or bill dispute" },
      {
        type: "template",
        label: "Public reply: bill dispute",
        text: "Hi [name], thanks for flagging this. We're sorry the bill wasn't what you expected. We want to check it properly: please DM us the date and time of your visit and [manager's name] will go through the bill with you. If we got something wrong, we'll fix it.\n[Name], Manager",
      },
      {
        type: "paragraph",
        text: "Many bill disputes start with an offer post or menu that left out taxes, charges or conditions. Check the post the guest saw, and fix it if it was unclear.",
      },
      { type: "subheading", text: "6. Rude or unhelpful staff" },
      {
        type: "template",
        label: "Public reply: staff behaviour",
        text: "Hi [name], we're sorry. Everyone who visits should be treated with courtesy, and what you've described falls short of that. I'm speaking with the team about your visit on [day]. I'd also like to hear from you directly: please call [number] or DM us.\n[Name], Manager",
      },
      {
        type: "paragraph",
        text: "Never name or blame individual staff in public, and don't debate their side in the comments. Deal with it internally.",
      },
      { type: "subheading", text: "7. Positive review" },
      {
        type: "template",
        label: "Public reply: positive review",
        text: "Thank you, [name]! So glad you enjoyed the [dish they mentioned] and that [server's first name, if they named them] looked after you well. We'll pass your note to the kitchen. See you again soon.\n[Name], [Restaurant]",
      },
      {
        type: "paragraph",
        text: "Mention something specific from the review. If you want to reshare a positive review or customer photo on your own feed, ask first and keep it unedited; our customer testimonials guide covers permission and evidence rules.",
        links: [{ text: "customer testimonials guide", href: "/blog/customer-testimonials-ugc" }],
      },
      { type: "subheading", text: "8. Suspected fake or competitor review" },
      {
        type: "template",
        label: "Public reply: review you can't trace",
        text: "Hi [name], we take every review seriously, but we can't find a visit or order matching what you've described. If you did visit us, please call [number] or DM us with the date and time so we can look into it properly.\n[Name], Manager",
      },
      {
        type: "paragraph",
        text: "Keep this reply factual and polite, then report the review through the platform. Don't accuse the reviewer of working for a competitor in public; readers see the accusation, not your evidence.",
      },
      { type: "heading", text: "Escalation table", id: "escalation-table" },
      {
        type: "table",
        headers: ["Scenario", "Severity", "First response", "Escalate to", "Public reply?"],
        rows: [
          ["Positive review or praise", "Low", "Social team replies", "No one", "Yes, specific thank-you"],
          ["Question about menu, hours, booking", "Low", "Social team answers", "Manager if unsure", "Yes"],
          ["Wrong or late order (dine-in)", "Medium", "Manager reply and private follow-up", "Owner if repeated", "Yes, short acknowledgement"],
          ["Delivery app issue", "Medium", "Point to app support; check packing", "Manager handling the app account", "Yes, short acknowledgement"],
          ["Bill or price dispute", "Medium", "Manager checks bill privately", "Owner if an offer post was unclear", "Yes, short acknowledgement"],
          ["Rude staff", "Medium to high", "Manager reply; internal review", "Owner", "Yes, apology without naming staff"],
          ["Hygiene complaint or foreign object", "High", "Holding reply within hours", "Owner the same day; legal if needed", "Holding reply only"],
          ["Illness claim", "High", "Holding reply within hours", "Owner immediately; legal advice", "Holding reply only"],
          ["Fake or competitor review", "Medium", "Factual reply; report via platform", "Owner decides on appeal", "Brief, neutral"],
          ["Abuse, threats, hate speech", "High", "Hide or report; don't engage", "Owner; police if threats", "No"],
          ["Media or viral post", "High", "Pause scheduled posts", "Owner and crisis plan", "Agreed statement only"],
        ],
      },
      {
        type: "heading",
        text: "Fake reviews, gating and what the platforms allow",
        id: "platform-rules",
      },
      {
        type: "paragraph",
        text: "Google's Maps user-generated content policy is explicit, and worth reading in full. At the time of writing (November 2026), it says fake engagement is not allowed and will be removed, including paid reviews and content based on a conflict of interest such as reviews from current or former employees or competitors. It also says businesses must not discourage or prohibit negative reviews, selectively solicit positive reviews (often called review gating), or offer incentives such as payment, discounts or free goods or services in exchange for posting any review.",
        links: [{ text: "Maps user-generated content policy", href: MAPS_UGC_POLICY }],
      },
      {
        type: "paragraph",
        text: "If a review breaks those rules, Google Business Profile Help explains how to report it from your profile or through the Reviews Management Tool, where you can track the decision and make a one-time appeal. The same page tells businesses not to report a review just because they disagree with it, and says Google doesn't get involved in conflicts between businesses and customers. Reporting is for policy violations, not bad experiences.",
        links: [{ text: "how to report it from your profile", href: GBP_REPORT }],
      },
      {
        type: "list",
        items: [
          "Never write, buy or swap reviews, and never ask staff, friends or family to review you.",
          "Ask every guest the same way for honest feedback; don't screen for happy ones first.",
          "Don't offer a discount, free dessert or contest entry for a Google review.",
          "Don't delete or hide genuine criticism on your own Instagram or Facebook. Hide or report only spam, abuse and hate.",
        ],
      },
      {
        type: "paragraph",
        text: "For abuse on your own accounts, Instagram's Hidden Words setting can filter comments containing offensive terms automatically, so abuse is kept out of view without removing honest complaints.",
        links: [{ text: "Hidden Words setting", href: IG_HIDDEN_WORDS }],
      },
      { type: "heading", text: "Turning complaints into fixes", id: "complaints-into-fixes" },
      {
        type: "paragraph",
        text: "Keep a simple weekly log: date, channel, scenario, what happened and what was changed. After a month, patterns appear, such as slow weekend service, one dish that travels badly for delivery, or a confusing offer post. Fixing the cause cuts complaints far more than better replies. Recurring questions are also a source of useful content; our guide on turning customer questions into content shows how.",
        links: [
          {
            text: "turning customer questions into content",
            href: "/blog/social-media-content-from-customer-questions",
          },
        ],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Replying defensively, or correcting the guest's version of events in public.",
          "Copy-paste replies that ignore what the guest actually said.",
          "Letting the social team handle illness or hygiene claims without the owner.",
          "Promising refunds that only the delivery app can give.",
          "Offering incentives for reviews, or asking only happy guests.",
          "Leaving positive reviews unanswered while replying only to complaints.",
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Name an owner for each channel, save the eight reply templates in your team's shared notes, and print the escalation table for the manager's desk. Then reply to every review from the last month, starting with the oldest unanswered complaint.",
      },
      {
        type: "paragraph",
        text: "If you outsource this, community management within an agreed scope is part of a social media management retainer, while customer support and crisis communication stay with the restaurant or are scoped separately. For a new venue, the first wave of reviews arrives in opening week; our opening plan prepares for it.",
        links: [
          { text: "community management within an agreed scope", href: "/services/social-media-management#community-management" },
          { text: "opening plan", href: "/blog/restaurant-opening-social-media-plan" },
        ],
      },
    ],
    faqs: [
      {
        question: "Should a restaurant reply to every Google review?",
        answer:
          "Replying to every review, positive and negative, shows guests that someone is paying attention. Short, specific replies to positive reviews are enough. Negative reviews deserve a considered reply that acknowledges the issue and offers a private follow-up. If volume is high, prioritise unanswered complaints first, then recent reviews, and keep the tone consistent across all of them.",
      },
      {
        question: "Can we ask Google to remove a negative review?",
        answer:
          "Only if it breaks Google's policies, for example spam, fake engagement, conflict of interest or offensive content. Google Business Profile Help says not to report a review simply because you disagree with it. If the review is genuine but unfair, reply calmly with your side and an offer to talk. Future readers often judge the reply as much as the review.",
      },
      {
        question: "Is it allowed to give guests a discount for leaving a review?",
        answer:
          "Not for Google reviews. Google's Maps user-generated content policy prohibits businesses from offering incentives such as payment, discounts or free goods or services in exchange for posting any review, and from selectively asking only satisfied customers. You can ask all guests for honest feedback, for example on a table card or bill, without any reward attached.",
      },
      {
        question: "Should we delete negative comments on Instagram?",
        answer:
          "No, not genuine ones. Deleting honest criticism usually makes the guest angrier and can lead to a second, louder post elsewhere. Reply publicly and move the details to a DM. Reserve hiding, deleting or reporting for spam, abuse, hate speech and threats, and use Instagram's Hidden Words filter to catch offensive terms automatically.",
      },
      {
        question: "Who should reply to a food poisoning allegation?",
        answer:
          "The owner, or a senior person they authorise, should take over immediately. The social team can post a short, sympathetic holding reply asking the person to get in touch, but shouldn't discuss causes, deny the claim or admit fault in public. Check kitchen records for that service, keep copies of the posts, and take legal advice for anything serious.",
      },
    ],
  },
];
