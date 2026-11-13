import type { BlogPost } from "@/content/blog";

/**
 * SMM batch 05, writer E (2026-11-13): enquiry- and booking-led local and professional services.
 * Coaching businesses (16), tutors and private teachers (17), home service businesses (18)
 * and wedding photographers and event professionals (19).
 * Regulatory statements were checked against primary sources in November 2026
 * (CCPA, Consumer Protection Act 2019 Gazette text, MeitY DPDP Act and Rules, ASCI, Copyright Act 1957).
 * Sources log: smm-sources-smm-local-services.md in the batch scratchpad.
 */

const CCPA_COACHING =
  "https://ccpa.doca.gov.in/files/Guidelines%20for%20Prevention%20of%20Misleading%20Advertisement%20in%20Coaching%20Sector,%202024.pdf";
const CPA_2019 = "https://egazette.gov.in/WriteReadData/2019/210422.pdf";
const ASCI_CODE = "https://www.ascionline.in/the-asci-code/";
const ASCI_GUIDELINES = "https://www.ascionline.in/the-asci-code-guidelines/";
const DPDP_ACT = "https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf";
const DPDP_RULES = "https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf";
const COPYRIGHT_ACT = "https://copyright.gov.in/Documents/Copyrightrules1957.pdf";
const DARK_PATTERNS = "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1983994&reg=48&lang=2";
const GOOGLE_REVIEWS_POLICY = "https://support.google.com/contributionpolicy/answer/7400114?hl=en";
const WA_QUICK_REPLIES = "https://faq.whatsapp.com/2565868990219715";

export const smmLocalServicePosts: BlogPost[] = [
  {
    slug: "social-media-marketing-coaching-businesses",
    category: "Social Media Management",
    title: "Social Media Marketing for Coaching Businesses: Turning Expertise Into Consistent Enquiries",
    seoTitle: "Social Media Marketing for Coaching Businesses",
    excerpt:
      "A practical guide for independent business, career and leadership coaches: defining a niche, explaining the discovery call, using LinkedIn and Instagram for different jobs, sharing client stories responsibly and a 30-day calendar.",
    metaDescription:
      "Social media marketing for coaching businesses: niche, discovery-call content, LinkedIn vs Instagram, consented client stories and a 30-day content calendar.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-13",
    lastReviewed: "November 2026",
    readingTime: "12 min read",
    tags: [
      "social media marketing for coaching businesses",
      "LinkedIn marketing for coaches",
      "content calendar for coaches",
      "discovery call content",
      "executive coach social media",
    ],
    related: ["linkedin-marketing-professional-services", "customer-testimonials-ugc", "creator-coaching-business"],
    hero: {
      src: "/blog/brand-guides/social-media-marketing-coaching-businesses.svg",
      alt: "An expertise-to-enquiry flow for coaches: a clear niche feeds teaching posts on LinkedIn and Instagram, which lead to a discovery call explainer and a qualified call, with consented stories and no outcome promises as guardrails",
    },
    body: [
      {
        type: "paragraph",
        text: "Picture a leadership coach with fifteen years in HR, a coaching certification and a handful of clients who all came through referrals. She posts a quote card every few days on LinkedIn and Instagram. Former colleagues like them politely. Nobody books a discovery call, and the two messages she got last month were from students asking for free career advice. Her expertise is real; her feed just doesn't show it, or say who it's for.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Social media marketing for coaching businesses works when your content shows how you think, who you help and what working with you involves. Pick a niche people can repeat, publish posts that each solve one small problem, explain your discovery call plainly, and use LinkedIn for professional buyers and Instagram for personal clients. Share client stories only with consent and without promising promotions, income or life changes. Count qualified discovery calls, not followers.",
      },
      { type: "heading", text: "Who this guide is for, and the rules worth checking", id: "who-and-rules" },
      {
        type: "paragraph",
        text: "This guide is for independent business, career, leadership and executive coaches, working solo or in a small firm, who sell one-to-one or small-group coaching. It isn't about exam-preparation institutes, which our guide to social media marketing for coaching institutes covers, or about creators packaging an audience into a course, which our guide to building a creator coaching business covers.",
        links: [
          { text: "social media marketing for coaching institutes", href: "/blog/social-media-marketing-coaching-institutes" },
          { text: "building a creator coaching business", href: "/blog/creator-coaching-business" },
        ],
      },
      {
        type: "paragraph",
        text: "The CCPA's Guidelines for Prevention of Misleading Advertisement in Coaching Sector, 2024 define coaching to include academic support, imparting education, guidance, instructions, study programmes, tuition or similar activity, and exclude counselling, sports, dance, theatre and other creative activities. They were written with coaching centres in mind. Whether one-to-one business or leadership coaching falls inside that definition isn't settled by the text, so check with your legal adviser rather than assume either way.",
        links: [{ text: "Guidelines for Prevention of Misleading Advertisement in Coaching Sector, 2024", href: CCPA_COACHING }],
      },
      {
        type: "paragraph",
        text: "Two things apply regardless. Section 2(28) of the Consumer Protection Act, 2019 defines a misleading advertisement to include one that falsely describes a service, gives a false guarantee or deliberately conceals important information. Chapter I of the ASCI Code says factual claims must be capable of substantiation and that ads shouldn't refer to a person without their permission. Life and wellbeing coaches have one more line to hold: coaching isn't therapy. Don't describe your work as treating anxiety, depression or any health condition, and point anyone who describes a crisis to a qualified professional.",
        links: [
          { text: "Section 2(28) of the Consumer Protection Act, 2019", href: CPA_2019 },
          { text: "ASCI Code", href: ASCI_CODE },
        ],
      },
      { type: "heading", text: "Define a niche people can repeat", id: "niche" },
      {
        type: "paragraph",
        text: "A niche isn't a label for your bio. It's a sentence a former client could repeat to a friend. If nobody can repeat it, referrals stall and your posts try to speak to everyone. Write it in this shape, and describe the change you work on rather than a result you promise.",
      },
      {
        type: "template",
        label: "Niche statement",
        text: "I help [specific person, by role or situation]\nwho are [specific moment or problem]\nto work on [the change you coach towards, not a guaranteed result]\nthrough [format: 1:1 sessions / small group / workshop, and length].\n\nHypothetical example: I help first-time managers in tech companies, in their first year of leading a team, work on one-on-ones, feedback and difficult conversations through a six-session programme.",
      },
      {
        type: "table",
        headers: ["Too broad", "Narrower and repeatable", "Content it makes easy"],
        rows: [
          ["Life and career coach", "Career coach for mid-career professionals moving from IT services to product roles", "Role-switch questions, CV and interview stories, decision frameworks"],
          ["Leadership coach", "Coach for founders managing their first leadership team of five to ten people", "Delegation, hiring first managers, running leadership meetings"],
          ["Business coach", "Coach for owners of small service firms who want to step out of daily delivery", "Pricing conversations, building a second line of managers, owner time audits"],
        ],
      },
      { type: "heading", text: "Explain the discovery call before anyone books it", id: "discovery-call" },
      {
        type: "paragraph",
        text: "Most coaches ask people to 'book a free call' without saying what happens on it. Busy professionals hesitate because they expect a sales pitch. A pinned post, a profile section and a short video that explain the call remove that doubt and also put off people who aren't a fit, which saves you time.",
      },
      {
        type: "template",
        label: "Discovery call explainer (pin it on both platforms)",
        text: "WHAT HAPPENS ON A DISCOVERY CALL\n\nWho it's for: [your niche in one line]\nLength: [__ minutes], on [video / phone]\nCost: [free / paid, and the amount if paid]\n\nWe'll talk about:\n1. What's prompting you to look for a coach now\n2. What you've already tried\n3. How I work: [format, number of sessions, gap between sessions]\n4. Whether I'm the right fit, or who might suit you better\n\nWhat it isn't: a coaching session, or a pressure sale.\nAfter the call: I'll send [a written proposal / my fee and terms] within [__] working days. You decide in your own time.\n\nBook through: [link]",
      },
      {
        type: "paragraph",
        text: "Keep the explainer honest. If places in a group programme are genuinely limited, state the real number and the real start date. Don't invent 'only two spots left' lines; the CCPA's November 2023 guidelines on dark patterns name false urgency among the practices they cover.",
        links: [{ text: "guidelines on dark patterns", href: DARK_PATTERNS }],
      },
      { type: "heading", text: "LinkedIn and Instagram do different jobs", id: "linkedin-instagram" },
      {
        type: "paragraph",
        text: "Coaches who sell to companies or senior professionals usually find buyers on LinkedIn. Coaches whose clients pay personally, such as career changers, often find Instagram useful too. Choose by where your buyer already reads, not by habit, and post from your personal profile on LinkedIn, because people hire a coach, not a logo.",
      },
      {
        type: "table",
        headers: ["Job", "LinkedIn", "Instagram"],
        rows: [
          ["Who you reach", "HR and L&D heads, founders, managers, your former colleagues", "Individuals paying for themselves, younger professionals"],
          ["Formats that suit coaching", "Text posts with a point of view, carousels, longer articles", "Short talking-head Reels, carousels, Stories with question boxes"],
          ["What proves expertise", "Frameworks, lessons from real situations (anonymised), workshops you ran", "Quick tips, myths in your niche, behind-the-scenes of how you prepare"],
          ["Where enquiries arrive", "Messages, comments, profile link to your booking page", "DMs, link in bio, Story replies"],
          ["A realistic cadence for one person", "Three posts a week, plus time to comment on others' posts", "Two or three posts a week, Stories on most days"],
        ],
      },
      {
        type: "paragraph",
        text: "Our guide to how professional services firms use LinkedIn goes deeper on profile and firm-page choices, and our guide to choosing social media platforms by business model helps if you're unsure whether a third platform is worth it.",
        links: [
          { text: "how professional services firms use LinkedIn", href: "/blog/linkedin-marketing-professional-services" },
          { text: "choosing social media platforms by business model", href: "/blog/choose-social-media-platforms-for-business" },
        ],
      },
      { type: "heading", text: "Client stories without outcome promises", id: "client-stories" },
      {
        type: "paragraph",
        text: "Client stories persuade, and they're also where coaches most often overclaim. 'My client got promoted in three months' implies the coaching caused the promotion and that others can expect the same. You can't substantiate either. Tell stories about the work instead: what the client was facing, what you worked on together and what they said about the process, in their words and with their permission.",
      },
      {
        type: "list",
        items: [
          "Written consent for each story, naming where it will appear (LinkedIn, Instagram, website) and whether the client is named.",
          "The client approves the final wording before it goes live.",
          "Quotes are real and unedited in meaning. No AI-written or composite testimonials presented as one person's words.",
          "No promotions, salary rises, revenue or 'life-changing' outcomes presented as caused by coaching.",
          "Anonymised stories really are anonymous. Company, role and city together can identify someone.",
          "Corporate clients: check whether the employer's contract restricts what you can share about the engagement.",
          "Stories are removed promptly if the client withdraws consent.",
        ],
      },
      {
        type: "paragraph",
        text: "Our guide to using customer testimonials and UGC covers permission records in more detail.",
        links: [{ text: "using customer testimonials and UGC", href: "/blog/customer-testimonials-ugc" }],
      },
      { type: "heading", text: "Better enquiries, not more of them", id: "enquiry-quality" },
      {
        type: "paragraph",
        text: "A coach with ten hours a week for clients doesn't need forty discovery calls a month. Add a short form before the booking link so you can prepare, and so people see early whether you're a fit.",
      },
      {
        type: "template",
        label: "Pre-call questions (keep it to five)",
        text: "1. What's your current role, and how long have you been in it?\n2. What made you look for a coach now?\n3. What would you like to be different in six months? (Your goal, not a promise from me.)\n4. Is this self-funded or funded by your employer?\n5. When would you want to start?\n\nNote on the form: I'll reply within [__] working days. If I'm not the right fit, I'll say so and suggest where to look.",
      },
      { type: "subheading", text: "Mistakes that attract the wrong enquiries" },
      {
        type: "list",
        items: [
          "Motivational quote cards with no point of view, which attract likes from peers rather than enquiries from buyers.",
          "A bio that lists every coaching type you've trained in.",
          "Hiding the fee structure entirely, so every call starts with a mismatch. You don't have to post prices, but say how fees work.",
          "Answering every DM with a booking link before answering the question.",
          "Claiming credentials loosely. Name the certifying body and the exact certification, and don't present a private certification as a licence.",
          "Copying another coach's framework without credit.",
        ],
      },
      { type: "heading", text: "A 30-day content calendar for coaches", id: "thirty-day-calendar" },
      {
        type: "paragraph",
        text: "This calendar assumes a solo coach posting on LinkedIn three times a week and Instagram twice a week, with one rest day for commenting and replies. Replace the hypothetical topics with your niche, and batch-write a week at a time. Our guide to a monthly social media content calendar explains the planning fields if you want a fuller tracker.",
        links: [{ text: "a monthly social media content calendar", href: "/blog/monthly-social-media-content-calendar" }],
      },
      {
        type: "table",
        headers: ["Day", "Platform", "Format", "Post"],
        rows: [
          ["1", "LinkedIn", "Text post", "Who I coach and the one problem I see most often in that group"],
          ["2", "Instagram", "Reel", "60-second intro: who you are, who you help, how to book"],
          ["3", "LinkedIn", "Carousel", "A simple framework you use in sessions, step by step"],
          ["4", "Both", "Engage", "Comment thoughtfully on ten posts in your niche"],
          ["5", "LinkedIn", "Text post", "A mistake you made as a manager and what you'd do now"],
          ["6", "Instagram", "Carousel", "Five questions to ask yourself before a career switch"],
          ["7", "Both", "Rest", "Reply to comments and messages"],
          ["8", "LinkedIn", "Text post", "A common belief in your field you disagree with, and why"],
          ["9", "Instagram", "Stories", "Question box: what's your hardest work conversation this month?"],
          ["10", "LinkedIn", "Pinned post", "The discovery call explainer"],
          ["11", "Instagram", "Reel", "Answer one question from the Day 9 box"],
          ["12", "LinkedIn", "Carousel", "How a typical coaching engagement runs, session by session"],
          ["13", "Both", "Engage", "Comment on posts by HR or L&D leaders"],
          ["14", "Both", "Rest", "Review which posts drew messages"],
          ["15", "LinkedIn", "Text post", "A consented client story about the process, not the outcome"],
          ["16", "Instagram", "Carousel", "Myth vs reality of what coaching is and isn't"],
          ["17", "LinkedIn", "Article", "Longer piece expanding your Day 3 framework"],
          ["18", "Instagram", "Reel", "Behind the scenes: how you prepare for a first session"],
          ["19", "LinkedIn", "Text post", "Coaching vs mentoring vs therapy: when each fits"],
          ["20", "Both", "Engage", "Reply to every comment from the week; thank people who shared"],
          ["21", "Both", "Rest", "Batch-write next week"],
          ["22", "LinkedIn", "Text post", "What you learned from a workshop or talk you gave"],
          ["23", "Instagram", "Stories", "Poll on a niche dilemma, with your view the next day"],
          ["24", "LinkedIn", "Carousel", "A checklist people can save, such as a first-90-days plan for new managers"],
          ["25", "Instagram", "Reel", "Answer a question you get on every discovery call"],
          ["26", "LinkedIn", "Text post", "How fees and formats work, without hard selling"],
          ["27", "Both", "Engage", "Comment on posts from people in your target roles"],
          ["28", "Both", "Rest", "Note the month's best questions"],
          ["29", "LinkedIn", "Text post", "Recap: the three ideas readers responded to most"],
          ["30", "Both", "Stories and post", "Next month's dates for calls or a workshop, with real availability"],
        ],
      },
      { type: "heading", text: "What to track each month", id: "measure" },
      {
        type: "list",
        items: [
          "Discovery calls booked, and how many fitted your niche.",
          "Where each call came from: ask on the form and again on the call.",
          "Messages that asked a real question, not just 'interested'.",
          "Saves and shares on teaching posts, which show content people want to keep.",
          "Profile visits in the week after a strong post.",
          "Calls that became paid engagements, tracked over a quarter because coaching decisions take time.",
        ],
      },
      {
        type: "paragraph",
        text: "Follower counts tell you little here. Our guide to whether social media is generating sales for a small business shows how to keep a simple monthly record of enquiries by source.",
        links: [{ text: "whether social media is generating sales for a small business", href: "/blog/measure-social-media-sales-small-business" }],
      },
      { type: "heading", text: "Your first 30 days", id: "conclusion" },
      {
        type: "paragraph",
        text: "Write your niche sentence and test it on two former clients. Publish and pin the discovery call explainer, add the pre-call questions, then run the calendar for a month and compare enquiries against the month before. Keep every story consented and every claim provable.",
      },
      {
        type: "paragraph",
        text: "If you'd rather keep your hours for clients, Kudozz's social media management can cover planning, design, copywriting and publishing within an agreed scope, while your point of view, client approvals and coaching itself stay with you.",
        links: [{ text: "Kudozz's social media management", href: "/services/social-media-management#copywriting" }],
      },
    ],
    faqs: [
      {
        question: "Should a coach post from a personal LinkedIn profile or a company page?",
        answer:
          "For most solo coaches, the personal profile does the heavy lifting because buyers hire the person. A company page is useful once you have associates, run workshops under a brand name or sell to companies that expect to see one. If you keep both, post original thinking on your profile and use the page for programme details, dates and team introductions.",
      },
      {
        question: "Should my discovery call be free or paid?",
        answer:
          "Both work. A free call lowers the barrier but attracts more people who aren't ready. A paid call filters harder but needs a clear explanation of what the person gets. Whichever you choose, say so plainly in the explainer, state the length and what happens afterwards, and don't present a sales conversation as a coaching session.",
      },
      {
        question: "Can I mention my coaching certification in posts?",
        answer:
          "Yes, if it's accurate. Name the certifying body and the exact credential, and keep the wording consistent across platforms. Don't describe a private certification as a licence or government approval, and don't round up hours or levels. If you hold several, lead with the one most relevant to your niche rather than listing all of them.",
      },
      {
        question: "Can I use AI tools to write my posts?",
        answer:
          "You can use them for drafts and editing, but read every post as if you wrote it from scratch. Check facts, remove generic phrases and make sure the example is real or labelled as hypothetical. Never use AI to create client quotes or stories. Your point of view is what people hire you for, so keep it recognisably yours.",
      },
      {
        question: "How long before social media brings coaching enquiries?",
        answer:
          "There's no reliable timeline, and anyone promising one is guessing. Coaching is a considered purchase, and many buyers watch for months before they message. Judge the first three months on whether the right people engage and whether discovery calls fit your niche better, then decide what to change. Consistency with a clear niche matters more than volume.",
      },
    ],
  },
  {
    slug: "instagram-marketing-for-tutors",
    category: "Social Media Management",
    title: "Instagram Marketing for Tutors and Private Teachers: Building Trust With Students and Parents",
    seoTitle: "Instagram Marketing for Tutors and Private Teachers",
    excerpt:
      "How private tutors and small home-tuition teachers can use Instagram to show how they teach, reassure parents and protect students' privacy, with 20 content ideas and a parent reply template.",
    metaDescription:
      "Instagram marketing for tutors: 20 content ideas, sample-lesson tips, parental consent, safeguarding, and what the CCPA coaching guidelines mean for results.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-13",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: [
      "Instagram marketing for tutors",
      "home tuition marketing ideas",
      "private tutor social media",
      "tuition classes Instagram content",
      "student privacy for tutors",
    ],
    related: ["social-media-marketing-coaching-institutes", "instagram-business-profile-optimization", "social-media-content-from-customer-questions"],
    hero: {
      src: "/blog/brand-guides/instagram-marketing-for-tutors.svg",
      alt: "Two audiences for a tutor's Instagram: students who want useful explanations and parents who want method, safety and clear fees, both leading to a trial class, with ground rules for parental consent, no identifiable students, no private DMs with minors and no rank claims",
    },
    body: [
      {
        type: "paragraph",
        text: "A maths tutor who teaches Class 9 and 10 students from home has three free slots after the board exams. Her WhatsApp status reaches parents she already knows. When a parent two sectors away asks a friend for 'a good maths tutor', the friend can only forward a phone number. Nothing shows how she explains a concept, how she keeps parents informed or what a trial class involves.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Instagram marketing for tutors works when parents can see how you teach and students find your explanations useful. Post short sample lessons, explain your method, timings and fee policy plainly, and answer the questions parents ask. Never show identifiable students without a parent's written consent, keep any contact with minors visible to their parents, and don't claim marks or ranks you can't document, because the CCPA's 2024 coaching guidelines include tuition.",
      },
      { type: "heading", text: "Parents decide, students influence", id: "two-audiences" },
      {
        type: "paragraph",
        text: "For school-age students, a parent usually pays and decides, while the student's opinion after a trial class often settles it. Your account has to work for both, without turning into two separate feeds.",
      },
      {
        type: "table",
        headers: ["", "Parents", "Students"],
        rows: [
          ["What they want to know", "Is this tutor qualified, safe, consistent, and worth the fee?", "Will this person explain things so I actually get it?"],
          ["Content that answers it", "Method, progress updates, timings, fee and missed-class policy, your background", "Short lessons, solved questions, study techniques"],
          ["Where they act", "WhatsApp or a call to the number in your bio", "Saves, shares and telling a parent 'this one explains well'"],
          ["What puts them off", "Vague fees, big result claims, photos of other people's children", "Long lectures, outdated syllabus, talking down"],
        ],
      },
      { type: "heading", text: "Ground rules before your first post", id: "ground-rules" },
      { type: "subheading", text: "Student privacy and parental consent" },
      {
        type: "paragraph",
        text: "Under the Digital Personal Data Protection Act, 2023, a child is anyone under eighteen. Section 9 requires verifiable consent of the parent before processing a child's personal data, and bars tracking, behavioural monitoring and targeted advertising directed at children. The DPDP Rules, 2025 set out how verifiable parental consent works in Rule 10, and that rule is being phased in: the Rules say it comes into force eighteen months after their publication in November 2025. Don't wait for the date. Get a parent's written consent now before any student's face, name, voice, handwriting or marks appear on your account, and check your current obligations with a legal adviser.",
        links: [
          { text: "Digital Personal Data Protection Act, 2023", href: DPDP_ACT },
          { text: "DPDP Rules, 2025", href: DPDP_RULES },
        ],
      },
      {
        type: "paragraph",
        text: "Even with consent, the safest default is to keep students out of frame. Film your hands and the whiteboard, blur names on worksheets, crop out uniforms and school logos, and never tag a student's home location. If you promote posts, aim them at parents, not students.",
      },
      { type: "subheading", text: "Safeguarding on Instagram" },
      {
        type: "list",
        items: [
          "Don't hold private one-to-one DM conversations with students under eighteen. Move academic questions to a group or channel the parent can see, or to the parent's number.",
          "Don't follow students' personal accounts from your tutoring account, and don't ask them to follow you.",
          "Don't post screenshots of online classes that show students' faces, names or chat messages.",
          "Turn off or filter comments if anyone posts about a student, and report harassment through the platform.",
          "Agree with parents how you'll share class updates and stick to it.",
          "If a student tells you something that worries you about their safety, speak to the parent or the appropriate authority; don't discuss it on social media.",
        ],
      },
      { type: "subheading", text: "What the coaching guidelines mean for tutors" },
      {
        type: "paragraph",
        text: "The CCPA's Guidelines for Prevention of Misleading Advertisement in Coaching Sector, 2024 define coaching to include academic support, guidance, study programmes and tuition. The 'coaching center' definition covers centres with more than fifty students, but the misleading-advertisement conditions in clause 3 and the obligations in clause 4 are written for any person who provides or is engaged in coaching. On a plain reading, a solo tutor's posts are covered. Our guide to social media marketing for coaching institutes summarises the clauses; the parts that matter most for tutors are in the results section below. Also check whether your state has rules for registering tuition or coaching centres, especially if you teach groups from rented premises. This is not legal advice.",
        links: [
          { text: "Guidelines for Prevention of Misleading Advertisement in Coaching Sector, 2024", href: CCPA_COACHING },
          { text: "social media marketing for coaching institutes", href: "/blog/social-media-marketing-coaching-institutes" },
        ],
      },
      { type: "heading", text: "20 Instagram content ideas for tutors", id: "twenty-ideas" },
      {
        type: "paragraph",
        text: "These ideas are grouped by the job they do. None needs a student on camera. Swap the subject examples for your own.",
      },
      {
        type: "table",
        headers: ["#", "Group", "Idea", "Format"],
        rows: [
          ["1", "Sample lessons", "'One mistake, one fix': a common error in a Class 10 trigonometry question, solved on the board", "45-second Reel"],
          ["2", "Sample lessons", "Same question, two methods, and when to use each", "Carousel"],
          ["3", "Sample lessons", "A past board question walked through step by step, citing the board's published paper", "Reel or carousel"],
          ["4", "Sample lessons", "A concept explained with a household object, such as fractions with a roti or chapati", "Reel"],
          ["5", "Sample lessons", "A two-minute grammar or pronunciation drill for language students", "Reel"],
          ["6", "Sample lessons", "This week's most-asked doubt, typed on screen without the student's name, and your answer", "Reel"],
          ["7", "Parent trust", "How you track progress, shown on a blank progress sheet", "Carousel"],
          ["8", "Parent trust", "A week in your batch: days, timings, batch size, breaks", "Single image or carousel"],
          ["9", "Parent trust", "Fee, missed-class and refund policy in plain words", "Carousel, saved to Highlights"],
          ["10", "Parent trust", "What a parent update from you looks like, with dummy data", "Screenshot-style graphic you design"],
          ["11", "Parent trust", "Your qualifications and teaching experience, exactly as documented", "Reel or carousel"],
          ["12", "Study skills", "A 20-minute revision plan the night before a unit test", "Carousel"],
          ["13", "Study skills", "How to build a one-page formula sheet", "Reel"],
          ["14", "Study skills", "How to review a corrected test paper and find your error pattern", "Carousel"],
          ["15", "Study skills", "Questions to ask yourself when you're stuck on a problem", "Single image to save"],
          ["16", "Study skills", "Reading the syllabus: which chapters are in this year's official syllabus, with the board's source", "Carousel"],
          ["17", "About your tuition", "A tour of your teaching space, with no students present", "Reel"],
          ["18", "About your tuition", "Behind the scenes: preparing worksheets and marking", "Stories"],
          ["19", "About your tuition", "What happens in a trial class, how long it takes and what to bring", "Reel, pinned"],
          ["20", "About your tuition", "'Is tuition right for your child?' including when it isn't the answer", "Carousel"],
        ],
      },
      {
        type: "paragraph",
        text: "Ideas 6 and 15 come straight from questions students ask. Our guide to turning customer questions into social content shows how to keep a running list so you never start from a blank page.",
        links: [{ text: "turning customer questions into social content", href: "/blog/social-media-content-from-customer-questions" }],
      },
      { type: "heading", text: "How to film a sample lesson", id: "sample-lessons" },
      {
        type: "list",
        items: [
          "One concept per video. If it needs three minutes, it's two videos.",
          "Start with the question on screen, not an introduction.",
          "Film the board or notebook from above with steady light; your phone and a window are enough.",
          "Speak the way you teach, in the language mix your students actually use.",
          "Check the content against the current syllabus and have a second subject teacher review anything you're unsure of.",
          "End with what to try next, not 'DM for admission'.",
        ],
      },
      { type: "heading", text: "Talking about results honestly", id: "results" },
      {
        type: "paragraph",
        text: "Results season is when tutors are most tempted to overclaim. Clause 3 of the CCPA guidelines treats false claims about selections, ranks or success rates, and claims of guaranteed marks or admissions, as misleading. Clause 4(1)(a) requires the rank secured, the name and duration of the course and whether it was paid to be disclosed with a candidate's photograph, and clause 4(2) requires the candidate's written consent, taken after the result. For a student under eighteen, also get the parent's written consent.",
      },
      {
        type: "list",
        items: [
          "No '100% results', 'guaranteed 90+' or 'every student passed' claims.",
          "Don't count a student who took a two-week crash course as your full-year result.",
          "Don't compare one student's marks with another's in public.",
          "Prefer process stories, such as how a student's approach to revision changed, told with consent and without marks.",
          "Keep the evidence (mark sheets, consent forms) on file in case anyone asks.",
        ],
      },
      {
        type: "template",
        label: "Result post caption (fill only with verified facts)",
        text: "[Student first name, only with consent] scored [result] in [exam, year].\nStudied with me: [course or subject], [duration], [paid / free].\nShared with [the student's and parent's] written consent, given after the result.\nPast results don't guarantee future results.",
      },
      { type: "heading", text: "From profile to trial class", id: "profile-to-trial" },
      {
        type: "paragraph",
        text: "A parent who lands on your profile should know within seconds which subjects, classes and boards you teach, whether you teach at home, at the student's home or online, which area you cover and how to ask about a trial. Put the fee policy and trial-class post in Highlights. Our guide to turning Instagram profile visitors into enquiries covers bio, links and Highlights in detail.",
        links: [{ text: "turning Instagram profile visitors into enquiries", href: "/blog/instagram-business-profile-optimization" }],
      },
      {
        type: "template",
        label: "Reply to a parent's first message",
        text: "Hello, thank you for getting in touch.\n\nTo suggest the right batch, could you share:\n1. Your child's class and board\n2. Subject(s) and what they find hardest right now\n3. Preferred days and times\n4. Home, my place or online?\n\nI teach [subjects] for [classes] in [area / online]. Batches are [size]. Fees are [monthly / per session], and my missed-class and refund policy is here: [link or Highlight].\n\nA trial class is [free / ₹__] and takes [__] minutes. After it, you and your child can decide with no obligation.",
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Posting group photos of students taken in class without each parent's written consent.",
          "Chatting with students in DMs late at night, even about homework.",
          "Topper banners with ranks or marks and no consent or course details.",
          "Copying solved questions from paid books or other tutors' videos.",
          "Teaching an old syllabus because the content was made last year.",
          "Saying 'limited seats' when the batch isn't actually full.",
        ],
      },
      { type: "heading", text: "Where to start this term", id: "conclusion" },
      {
        type: "paragraph",
        text: "Set up your bio and Highlights, pin a trial-class post, and write your consent and safeguarding rules in a note you share with every parent at admission. Then post two sample lessons a week for a month and see which topics parents forward. If you run a larger centre, the rules for institutes in our guide to social media management for schools and universities and the coaching-institutes guide above will matter more.",
        links: [{ text: "social media management for schools and universities", href: "/blog/social-media-management-schools-universities" }],
      },
      {
        type: "paragraph",
        text: "Tutors who'd rather spend their hours teaching can hand the editing, captions and scheduling to a managed social media service such as Kudozz's, while lesson accuracy, consent and parent communication stay with the tutor.",
        links: [{ text: "a managed social media service", href: "/services/social-media-management#reels-short-form-video" }],
      },
    ],
    faqs: [
      {
        question: "Should a tutor use a personal Instagram account or a separate one?",
        answer:
          "Use a separate professional account. It keeps family photos and personal followers away from students and parents, gives you a clear bio with subjects and area, and lets you switch on professional account tools. It also makes safeguarding easier, because the account exists only for teaching and you can apply stricter rules about who you follow and message.",
      },
      {
        question: "Can I post a video of my online class if students' cameras are off?",
        answer:
          "Only if nothing identifies them. Names in the participant list, voices, chat messages and profile pictures can all identify a student. Record a separate version of the explanation yourself, or crop and mute everything except your screen. If any student could be recognised, get the parent's written consent first, and remove the clip if they later ask.",
      },
      {
        question: "Can I share a parent's WhatsApp message praising my teaching?",
        answer:
          "Ask first, in writing, and say where it will appear. Remove the parent's number, profile photo and the child's name unless they agree to show them. Don't edit the message to change its meaning. If it mentions marks or a result, the coaching guidelines' consent and disclosure points apply, so treat it like a result post.",
      },
      {
        question: "Do I need to show my qualifications on Instagram?",
        answer:
          "You don't have to, but parents look for them and they build trust. If you mention a degree, teaching certificate or years of experience, state it exactly as it appears on your documents. The CCPA coaching guidelines treat false claims about faculty credentials as misleading, so don't round up experience or imply a qualification you don't hold.",
      },
      {
        question: "How often should a tutor post?",
        answer:
          "Two or three useful posts a week is enough for most tutors, plus Stories when you have news such as a new batch. Busy exam months may leave less time, so batch-film sample lessons during quieter weeks. A steady rhythm over a term matters more than daily posting for a fortnight followed by silence.",
      },
    ],
  },
  {
    slug: "social-media-marketing-home-services",
    category: "Social Media Management",
    title: "Social Media Marketing for Home Service Businesses: How to Generate Local Enquiries Through Content",
    seoTitle: "Social Media Marketing for Home Service Businesses",
    excerpt:
      "A practical guide for plumbing, electrical, cleaning, pest control, AC servicing and repair businesses: service-area content, safe demo videos, technician introductions, WhatsApp enquiry handling and a weekly plan.",
    metaDescription:
      "Social media marketing for home service businesses: service-area posts, safe demo videos, honest claims, WhatsApp enquiry replies and a weekly content plan.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-13",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: [
      "social media marketing for home service businesses",
      "home services local enquiries",
      "AC service Instagram ideas",
      "pest control social media",
      "WhatsApp enquiry handling",
    ],
    related: ["social-media-marketing-retail-stores", "measure-social-media-sales-small-business", "community-management-vs-customer-support"],
    hero: {
      src: "/blog/brand-guides/social-media-marketing-home-services.svg",
      alt: "Three questions a homeowner asks before calling a home service business (do you cover my area, can I trust who comes, what happens on the visit) mapped to a weekly content plan and a WhatsApp reply, with no unsafe DIY and only true claims as guardrails",
    },
    body: [
      {
        type: "paragraph",
        text: "An AC servicing business with four technicians gets most of its work from the same three housing societies. In summer the phone doesn't stop; in the cooler months the team waits. The Instagram account has a logo, a phone number and twenty posts saying 'Best AC service in town'. People in the next neighbourhood don't know the business exists, and anyone who finds the page can't tell which areas it covers, who will turn up or what a visit involves.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Social media marketing for home service businesses works when content answers what a homeowner needs to know before letting someone in: do you cover my area, can I trust the person who comes, and what will happen on the visit. Show real jobs with permission, introduce your technicians, state service areas and timings clearly and reply quickly on WhatsApp. Never post DIY demos for electrical, gas or chemical work, and claim only licences, warranties and safety features you actually have.",
      },
      { type: "heading", text: "Where home-service enquiries come from", id: "enquiry-moments" },
      {
        type: "paragraph",
        text: "Most home-service work starts with a problem, not a scroll: a leaking tap, a tripping switch, cockroaches in the kitchen, an AC blowing warm air. The homeowner asks neighbours, searches nearby or checks a society WhatsApp group, then looks you up before calling. Your content's job is to pass that quick check.",
      },
      {
        type: "table",
        headers: ["Moment", "What they check", "Content that helps"],
        rows: [
          ["Something breaks", "Do you cover my area? Can you come today or tomorrow?", "Service-area posts, timings, how to book"],
          ["A neighbour recommends you", "Is this a real, active business?", "Recent jobs, consistent name and number, replies to comments"],
          ["Before letting someone in", "Who will come? Will they be careful in my home?", "Technician introductions, uniforms and ID if you use them, shoe covers and clean-up routine"],
          ["Comparing two options", "What will it cost? What's included?", "What affects the price, visit charge policy, what a service covers"],
          ["Seasonal or planned work", "Should I book before the rush?", "Honest seasonal reminders, real slot availability"],
        ],
      },
      { type: "heading", text: "Make your service area and timings unmissable", id: "service-area" },
      {
        type: "list",
        items: [
          "List the localities, pin codes or landmarks you cover in your bio, a pinned post and a Highlight. 'All of Bengaluru' is rarely true.",
          "Say how far you'll travel for which jobs, if it differs (for example, emergency repairs only nearby).",
          "State working hours and whether you take emergency calls, and keep them identical on Instagram, Facebook, WhatsApp and Google.",
          "Show the same business name and phone number everywhere, matching your vehicle or uniform branding if you have it.",
          "Mention the languages your team speaks; it reassures many households.",
          "Update holiday and festival timings before the day, not after.",
        ],
      },
      {
        type: "paragraph",
        text: "Google Business Profile matters as much as Instagram for nearby searches. Our guide to social media marketing for local retail stores explains how to keep it accurate alongside Instagram and WhatsApp, and the same approach works for service businesses.",
        links: [{ text: "social media marketing for local retail stores", href: "/blog/social-media-marketing-retail-stores" }],
      },
      { type: "heading", text: "Show the work, not a DIY tutorial", id: "safe-content" },
      {
        type: "paragraph",
        text: "How-to videos get views, but a homeowner copying your technician on a live circuit or a gas line can get badly hurt. Your content should show competence and explain when to call a professional, not teach people to do risky work themselves.",
      },
      {
        type: "table",
        headers: ["Trade", "Safe to show", "Don't show"],
        rows: [
          ["Electrical", "Finished work, tidy wiring, warning signs such as a burning smell or a hot switch, with 'stop using it and call a qualified electrician'", "Step-by-step repairs on wiring, boards or appliances"],
          ["Gas and appliances", "Your technician arriving and explaining what they check", "Any gas fitting, leak testing or appliance opening; tell viewers to follow their gas supplier's safety instructions"],
          ["Plumbing", "Before-and-after of a fix, how to describe a problem when booking", "Work that needs tools or access most homeowners shouldn't attempt"],
          ["AC servicing", "What a service visit covers; owner care only as the manufacturer's manual allows, with a pointer to it", "Opening units, refrigerant work, electrical parts"],
          ["Pest control", "The preparation checklist you give customers, what to expect on the day", "Mixing or applying chemicals, dosage, product handling"],
          ["Cleaning", "Results, the equipment your team brings, how long a job takes", "Mixing cleaning chemicals"],
        ],
      },
      { type: "heading", text: "Technicians, credentials and claims", id: "people-and-claims" },
      {
        type: "paragraph",
        text: "People are letting a stranger into their home. Introducing the technician by first name, with their trade and years of experience, does more than any slogan. Ask each technician for consent before featuring them, let them see the post first, and remove it if they leave and ask you to.",
      },
      {
        type: "paragraph",
        text: "Be strict about what you claim. Show a licence, registration, certification or trade qualification only if the business or the technician in the post actually holds it, it's current and you can show the document. We haven't listed licensing rules for each trade because they vary by trade and by state; check with the relevant authority or your trade association rather than relying on social media posts. Say 'background-verified' only if you ran a real check and can describe it.",
      },
      {
        type: "paragraph",
        text: "Section 2(28) of the Consumer Protection Act, 2019 counts an ad that gives a false guarantee or deliberately conceals important information as misleading, and the ASCI Code requires factual claims to be capable of substantiation. In practice that means 'guaranteed pest-free', 'lifetime warranty', 'odourless', 'herbal' or 'safe for children and pets' appear only if they're true, documented and match the terms you'd give in writing.",
        links: [
          { text: "Section 2(28) of the Consumer Protection Act, 2019", href: CPA_2019 },
          { text: "ASCI Code", href: ASCI_CODE },
        ],
      },
      { type: "heading", text: "A weekly content plan", id: "weekly-plan" },
      {
        type: "paragraph",
        text: "This plan suits a small team posting four or five times a week from phone footage the technicians capture on jobs. Adjust it to your trade and season, and keep one person responsible for checking consent and claims before anything goes out.",
      },
      {
        type: "table",
        headers: ["Day", "Content", "Format", "Job it does"],
        rows: [
          ["Monday", "Job of the week: before and after, with the customer's permission and no address visible", "Reel or carousel", "Proof of real work"],
          ["Tuesday", "Meet the technician: name, trade, years of experience, one tip about booking", "Reel", "Trust before the visit"],
          ["Wednesday", "Signs you need a service, ending with when to call a professional", "Carousel", "Problem recognition, safely"],
          ["Thursday", "FAQ: what affects the price, how long a visit takes, what to keep ready", "Reel or Stories", "Removes doubts before the call"],
          ["Friday", "Areas we covered this week, with landmarks, not house numbers", "Single image or Stories", "Service-area recall"],
          ["Saturday", "A review shared with permission, or a reply to a common comment", "Stories", "Social proof"],
          ["Daily", "Stories: real slot availability, team on the move, seasonal reminders", "Stories", "Shows the business is active"],
        ],
      },
      {
        type: "template",
        label: "Weekly planning sheet",
        text: "WEEK OF: ________   SEASON NOTE: ____________\n\nJobs filmed this week (customer consent recorded?):\n1) ________ [ ] yes   2) ________ [ ] yes   3) ________ [ ] yes\nTechnician to feature (consent recorded?): ________ [ ] yes\nQuestion customers asked most: ________\nAreas covered: ________\n\nCLAIMS CHECK before posting\n[ ] No address, house number, society gate or family photos in frame\n[ ] No DIY steps for electrical, gas or chemical work\n[ ] Warranties and licences shown are real and current\n[ ] Prices or visit charges match what we actually charge\n[ ] Slot availability is true today",
      },
      { type: "subheading", text: "What to stop posting" },
      {
        type: "list",
        items: [
          "'Best in the city' and '100% satisfaction' slogans you can't prove.",
          "Stock photos of technicians who don't work for you.",
          "Prices that are out of date the week after you post them.",
          "Fake 'only 2 slots left today' Stories. The CCPA's 2023 dark patterns guidelines name false urgency.",
          "Videos where a customer's home, family or valuables are clearly visible.",
        ],
      },
      {
        type: "paragraph",
        text: "Read the CCPA's dark patterns guidelines before you write offer posts or slot announcements.",
        links: [{ text: "CCPA's dark patterns guidelines", href: DARK_PATTERNS }],
      },
      { type: "heading", text: "Handling WhatsApp enquiries", id: "whatsapp" },
      {
        type: "paragraph",
        text: "Most home-service enquiries end up on WhatsApp, and a slow or vague reply sends people to the next number. The WhatsApp Business app offers quick replies and away messages, so you can answer common questions fast and tell people when you'll reply outside working hours. Keep the templates honest and short.",
        links: [{ text: "quick replies and away messages", href: WA_QUICK_REPLIES }],
      },
      {
        type: "template",
        label: "First reply, price question and follow-up",
        text: "FIRST REPLY\nHi, thanks for messaging [business name]. To help quickly, please share:\n1. Your area or pin code\n2. What's the problem? A photo or short video helps\n3. When would suit you for a visit?\nWe cover [areas]. Working hours: [days, times].\n\nPRICE QUESTION\nThe cost depends on [the main factors, e.g. type of unit, parts needed, extent of the problem]. [Our visit charge is ₹__, adjusted against the job if you go ahead / We'll confirm the cost before starting any work.] Use only what's true for your business.\n\nAFTER THE JOB\nThanks for choosing us today. If anything isn't right, reply here and we'll come back. If you're happy to, a review on [Google / Instagram] helps a small team like ours. Either way, thank you.",
      },
      {
        type: "paragraph",
        text: "Ask every customer for a review in the same way, with no reward and no filtering. Google's policy on fake engagement and rating manipulation bars offering incentives for reviews, discouraging negative ones or asking only happy customers. Complaints about a specific job belong in a call or message, not a public argument; our guide to community management vs customer support explains where to draw that line.",
        links: [
          { text: "Google's policy on fake engagement and rating manipulation", href: GOOGLE_REVIEWS_POLICY },
          { text: "community management vs customer support", href: "/blog/community-management-vs-customer-support" },
        ],
      },
      { type: "heading", text: "Customers' homes, photos and reviews", id: "homes-and-consent" },
      {
        type: "list",
        items: [
          "Ask before filming inside anyone's home, and record the yes in the job's WhatsApp chat.",
          "Keep faces, children, family photos, documents, jewellery and valuables out of frame.",
          "Never show house numbers, society names, gates or location tags that identify a customer's home.",
          "Blur or crop names on electricity bills, appliance warranty cards and invoices.",
          "Share reviews or customer messages only with permission, and hide numbers and profile photos.",
          "Remove any post promptly if a customer changes their mind.",
        ],
      },
      {
        type: "paragraph",
        text: "Our guide to using customer testimonials and UGC covers permission records in more detail.",
        links: [{ text: "using customer testimonials and UGC", href: "/blog/customer-testimonials-ugc" }],
      },
      { type: "heading", text: "Start this week", id: "conclusion" },
      {
        type: "paragraph",
        text: "Fix your service area, hours and number across every profile, set up the WhatsApp templates and film two jobs with the customers' permission. Run the weekly plan for a month and ask each new customer how they found you. Our guide to measuring whether social media generates sales for a small business shows how to turn those answers into a simple monthly record.",
        links: [{ text: "measuring whether social media generates sales for a small business", href: "/blog/measure-social-media-sales-small-business" }],
      },
      {
        type: "paragraph",
        text: "If you'd rather your team stayed on jobs, a social media management partner like Kudozz can plan the calendar, edit Reels from your technicians' footage and publish, while bookings, customer service and on-site work stay with you.",
        links: [{ text: "a social media management partner like Kudozz", href: "/services/social-media-management#content-planning" }],
      },
    ],
    faqs: [
      {
        question: "Should a home service business post prices on Instagram?",
        answer:
          "Fixed-price services, such as a standard AC service, can be posted if the price is accurate and you state what's included. For variable jobs, explain what affects the cost instead of posting a number that won't match the final bill. If you charge a visit fee, say so upfront. Never show a crossed-out price you didn't actually charge.",
      },
      {
        question: "Is it okay to post simple DIY tips?",
        answer:
          "Only tips that carry no safety risk, such as how to describe a problem when booking or what to keep ready before a visit. For appliance care, point people to the manufacturer's manual rather than demonstrating it yourself. Avoid anything involving electricity, gas, chemicals, heights or opening equipment, and say clearly when a job needs a qualified professional.",
      },
      {
        question: "How do we show we're trustworthy without customer faces?",
        answer:
          "Show your people and your process. Introduce technicians, show uniforms, tools and shoe covers if you use them, film the clean-up at the end of a job and share reviews with permission. Consistent branding, quick replies and accurate service areas also signal that the business is real and organised, which matters more to most households than polished videos.",
      },
      {
        question: "Which platform matters most for local home services?",
        answer:
          "Google Business Profile usually matters most when someone searches for help nearby, and WhatsApp is where most bookings happen. Instagram and Facebook help neighbours discover you and check you're active. Facebook groups and society WhatsApp groups can be useful, but follow each group's rules and don't spam them with offers.",
      },
      {
        question: "What should we do about a negative review or angry comment?",
        answer:
          "Reply politely and briefly in public, acknowledge the problem and move the details to a call or message. Don't share the customer's address, bill or personal details, and don't argue. If the complaint is fair, fix it and say what you've changed. Report reviews that are fake or break the platform's rules through the platform itself.",
      },
    ],
  },
  {
    slug: "social-media-management-wedding-photographers",
    category: "Social Media Management",
    title: "Social Media Management for Wedding Photographers and Event Professionals: A Content Strategy That Wins Enquiries",
    seoTitle: "Social Media Management for Wedding Photographers",
    excerpt:
      "How wedding photographers, filmmakers and event professionals can build a portfolio that answers couples' questions, handle consent and image rights, credit vendors, plan around wedding seasons and reply to enquiries well.",
    metaDescription:
      "Social media management for wedding photographers: an enquiry portfolio framework, 20 concepts, a monthly calendar, consent and image rights, and vendor credit.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-13",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: [
      "social media management for wedding photographers",
      "wedding photographer Instagram ideas",
      "wedding photography enquiries",
      "event professional content calendar",
      "wedding photo consent and usage",
    ],
    related: ["wedding-influencer-marketing-india", "photography-creative-services-influencer-marketing-india", "instagram-carousel-strategy"],
    hero: {
      src: "/blog/brand-guides/social-media-management-wedding-photographers.svg",
      alt: "An enquiry portfolio framework for wedding photographers in four layers (full wedding stories, how we work, what's included, availability and enquiry) beside a contract checklist covering couple consent, image use, guests and children, and vendor credit",
    },
    body: [
      {
        type: "paragraph",
        text: "A wedding photography studio gets dozens of DMs a week in peak season, and most say 'price?' or 'available on the 12th?'. The feed is full of beautiful single frames from many weddings, but nothing shows how the team covers a three-day event, how many people come, or when the album arrives. Couples who book are mostly referrals. Everyone else goes quiet after the price reply.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Social media management for wedding photographers works when the feed answers what a couple needs before they enquire: your style across a complete event, how you work, what's included and how to check availability. Build the portfolio around full stories rather than single frames, agree image use with couples in the contract, take care with guests and children, credit vendors accurately, plan around your region's wedding seasons and reply to enquiries with clear questions about date, city and scope.",
      },
      { type: "heading", text: "The enquiry portfolio framework", id: "portfolio-framework" },
      {
        type: "paragraph",
        text: "Couples scroll a photographer's grid to answer four questions in order. If your content answers each one, the enquiries you get are from people who already like your work and have a rough idea of what you offer. The same framework works for filmmakers, decorators, planners and makeup artists.",
      },
      {
        type: "table",
        headers: ["Layer", "The couple's question", "Content that answers it", "Where it lives"],
        rows: [
          ["1. Full stories", "Do I love their work across a whole wedding, not just one shot?", "Carousels and Reels covering one wedding from preparation to farewell", "Feed, a Highlight per recent wedding"],
          ["2. How you work", "Will they be calm, discreet and organised on the day?", "Behind-the-scenes, team introductions, how you handle rituals and family portraits", "Reels, Stories"],
          ["3. What's included", "What do we get, and when?", "Coverage options, team size, delivery timelines, album and film formats, payment terms", "Pinned posts, Highlights, a price guide on request"],
          ["4. Availability and enquiry", "Are they free on our dates, and how do we ask?", "How to enquire, what to include, cities you travel to", "Bio, pinned post, Stories"],
        ],
      },
      {
        type: "paragraph",
        text: "Carousels carry full stories well; our guide to planning Instagram carousels covers sequencing. Many couples also collect ideas on Pinterest, which our guide to Pinterest marketing for businesses covers.",
        links: [
          { text: "planning Instagram carousels", href: "/blog/instagram-carousel-strategy" },
          { text: "Pinterest marketing for businesses", href: "/blog/pinterest-marketing-for-business" },
        ],
      },
      { type: "heading", text: "Consent, image rights and the contract", id: "rights-and-consent" },
      {
        type: "paragraph",
        text: "Who owns wedding photos is less obvious than many photographers assume. Section 17 of the Copyright Act, 1957 makes the author of a work its first owner, and the Act defines the author of a photograph as the person who takes it. But proviso (b) to section 17 says that when a photograph is taken for valuable consideration at the instance of another person, that person is the first owner of the copyright, in the absence of any agreement to the contrary. A paid wedding shoot may fall under that proviso. The point to take away is simple: agree ownership and usage in the contract, and have a lawyer draft or review it. This isn't legal advice.",
        links: [{ text: "Copyright Act, 1957", href: COPYRIGHT_ACT }],
      },
      {
        type: "paragraph",
        text: "Copyright and consent are separate questions. Even where you're entitled to use images, many couples don't want their wedding public, or want to wait until after the reception. Photos of identifiable people may also be personal data under the Digital Personal Data Protection Act, 2023, so check your obligations with a legal adviser.",
        links: [{ text: "Digital Personal Data Protection Act, 2023", href: DPDP_ACT }],
      },
      {
        type: "list",
        items: [
          "Who owns the copyright, and what each side may do with the images.",
          "Whether you may post on social media, your website, award entries, print ads or paid promotion, listed separately.",
          "When you may post (for example, after the couple's own announcement) and whether they approve the selection.",
          "What you'll never post: private rituals, getting-ready moments, children, guests who opt out.",
          "How the couple may use and share the images, and the credit they'll give you.",
          "How to ask you to remove a post later, and how fast you'll act.",
          "The same terms for second shooters, freelance editors and filmmakers you hire, in their contracts.",
        ],
      },
      { type: "subheading", text: "Guests and children in frame" },
      {
        type: "paragraph",
        text: "Guests didn't sign your contract. Wide shots of a crowded mandap are part of wedding storytelling, but close portraits of guests, especially children, are different. Post identifiable children only with their parents' consent, remove any guest who asks, and avoid frames that reveal jewellery close-ups alongside a home address or live location. Delay posting until after the event for the couple's and guests' security.",
      },
      { type: "heading", text: "Vendor collaborations and credit", id: "vendors" },
      {
        type: "paragraph",
        text: "Weddings are team work, and decorators, planners, makeup artists and venues share your audience. Credit every vendor accurately for the role they actually played, check their handles before posting, and send them the images they're allowed to use under your contract with the couple. If a vendor pays you, gifts you something or you have a commercial arrangement to promote them, label the post clearly; ASCI's guidelines on influencer advertising expect material connections to be disclosed. Our guide to influencer marketing for wedding businesses covers working with wedding creators, which is a separate programme from your own account.",
        links: [
          { text: "ASCI's guidelines on influencer advertising", href: ASCI_GUIDELINES },
          { text: "influencer marketing for wedding businesses", href: "/blog/wedding-influencer-marketing-india" },
        ],
      },
      {
        type: "template",
        label: "Vendor credit block for captions",
        text: "Couple: [first names, only with their consent]\nVenue: [@handle]\nPlanning: [@handle]\nDecor: [@handle]\nMakeup and hair: [@handle]\nOutfits: [@handle, only if confirmed by the couple]\nFilm: [@handle]\nPhotography: [your handle and team]\n\nCheck: every handle verified, roles correct, any paid or gifted arrangement labelled, couple approved the post.",
      },
      { type: "heading", text: "20 content concepts for wedding and event professionals", id: "twenty-concepts" },
      {
        type: "table",
        headers: ["#", "Group", "Concept"],
        rows: [
          ["1", "Full stories", "One wedding in ten frames, preparation to farewell, as a carousel"],
          ["2", "Full stories", "A 60-second film cut of a single ceremony, with the couple's approval"],
          ["3", "Full stories", "The same couple across haldi, mehendi, wedding and reception, showing how your style holds across very different light"],
          ["4", "Full stories", "Small or court wedding story, for couples planning something intimate"],
          ["5", "Full stories", "Destination or travel wedding, with what changed in logistics"],
          ["6", "How we work", "Our team on the day: who does what, filmed during setup"],
          ["7", "How we work", "How we photograph rituals without getting in the way of the priest or family"],
          ["8", "How we work", "Family portrait plan: how we organise a big group shot in minutes"],
          ["9", "How we work", "Low-light reception shooting, explained without gear talk"],
          ["10", "How we work", "From card to album: the editing and delivery timeline"],
          ["11", "Planning help", "Questions to ask any wedding photographer before booking"],
          ["12", "Planning help", "How to build a shot list with your family"],
          ["13", "Planning help", "Photo-friendly timeline tips for a long wedding day"],
          ["14", "Planning help", "What 'candid' and 'traditional' coverage mean in practice"],
          ["15", "Planning help", "Pre-wedding shoot: what to wear, timing, location permissions to check"],
          ["16", "Team and vendors", "Meet the second shooter or editor, with their consent"],
          ["17", "Team and vendors", "A decorator's setup seen through your lens, credited"],
          ["18", "Team and vendors", "Venue spotlight: where the light falls at different times"],
          ["19", "Team and vendors", "A couple's own words about working with you, with written consent"],
          ["20", "Team and vendors", "What's in our bag for a three-day wedding, and why we carry backups"],
        ],
      },
      { type: "heading", text: "Planning around wedding seasons", id: "seasons-calendar" },
      {
        type: "paragraph",
        text: "Wedding demand rises and falls through the year, but the busy months differ by region and community, and auspicious dates change every year. Build your plan from your own bookings and the dates couples are asking about, not a national list. Most studios move through four phases.",
      },
      {
        type: "list",
        items: [
          "Off-season: shoot styled content, publish full stories from the last season, update your price guide and contracts.",
          "Booking window: lead with availability, how-we-work content and planning help, because couples are choosing now.",
          "Peak season: post less, mostly Stories and quick sneak peeks the couple has approved; keep enquiry replies fast.",
          "Delivery season: full stories, films and vendor credits as albums are delivered and couples approve.",
        ],
      },
      { type: "subheading", text: "A monthly calendar for the booking window" },
      {
        type: "table",
        headers: ["Week", "Feed post 1", "Feed post 2", "Reel", "Stories"],
        rows: [
          ["1", "Full wedding story carousel (concept 1)", "What's included and delivery timeline (concept 10)", "Ceremony film cut (concept 2)", "Dates you're still free, accurately; enquiry steps"],
          ["2", "Questions to ask before booking (concept 11)", "Vendor-credited decor story (concept 17)", "Team on the day (concept 6)", "Question box: what are you unsure about?"],
          ["3", "Multi-event story (concept 3)", "Couple's words with consent (concept 19)", "Family portrait plan (concept 8)", "Answers to the question box"],
          ["4", "Intimate wedding story (concept 4)", "Shot list with your family (concept 12)", "Rituals without getting in the way (concept 7)", "Cities you're travelling to next season"],
        ],
      },
      {
        type: "paragraph",
        text: "In peak months, cut to one feed post and daily Stories, and keep a backlog of approved stories to publish later.",
      },
      { type: "heading", text: "Answering 'available?' and 'price?' enquiries", id: "enquiries" },
      {
        type: "paragraph",
        text: "A one-line price reply invites a one-line comparison. Ask a few questions first so you can suggest the right coverage, and send your price guide with context. If dates are genuinely filling, say which ones; don't invent scarcity. The CCPA's dark patterns guidelines name false urgency among the practices they cover.",
        links: [{ text: "CCPA's dark patterns guidelines", href: DARK_PATTERNS }],
      },
      {
        type: "template",
        label: "Enquiry reply",
        text: "Hi [name], congratulations, and thank you for reaching out.\n\nSo I can check availability and suggest the right coverage:\n1. Date(s) and which events (for example haldi, mehendi, wedding, reception)\n2. City and venue, if decided\n3. Approximate guest count\n4. Photo, film or both?\n5. Anything you've loved in our work so far?\n\n[Our packages start from ₹__ and the full guide is here: link] (use only if you publish a guide)\nWe'll confirm availability within [__] hours. A date is held only once [your real booking terms].",
      },
      { type: "subheading", text: "Mistakes that lose enquiries" },
      {
        type: "list",
        items: [
          "A grid of single hero frames with no full stories.",
          "Posting a wedding before the couple has shared it, or without asking.",
          "Close-ups of guests' children without their parents' consent.",
          "Missing or wrong vendor credits, which cost you referrals.",
          "Replying 'DM for price' to a DM.",
          "Edits so heavy that couples can't recognise their skin tone or venue, which sets wrong expectations.",
        ],
      },
      { type: "heading", text: "Before the next season", id: "conclusion" },
      {
        type: "paragraph",
        text: "Update your contract's image-use clause with your lawyer, pin a 'how to enquire' post and a 'what's included' post, and pick three recent weddings to turn into full stories with the couples' approval. Then plan the booking-window month from the calendar above. Our guide to influencer marketing for photography and creative service businesses covers creator collaborations if you want to add them later.",
        links: [{ text: "influencer marketing for photography and creative service businesses", href: "/blog/photography-creative-services-influencer-marketing-india" }],
      },
      {
        type: "paragraph",
        text: "If peak season leaves no time for posting, Kudozz's social media management for businesses can handle planning, captions, Reels edited from your footage and publishing within an agreed scope, while shoots, contracts and client approvals stay with your studio.",
        links: [{ text: "Kudozz's social media management for businesses", href: "/services/social-media-management#scope" }],
      },
    ],
    faqs: [
      {
        question: "Can I post a couple's wedding photos without asking if I own the copyright?",
        answer:
          "Even where your contract gives you the right to use the images, asking first protects the relationship. Many couples have reasons to delay or limit posting, such as family wishes or privacy. Agree posting rights, timing and exclusions in the contract, confirm before each post, and remove images promptly if the couple later asks. For the ownership question itself, rely on your contract and a lawyer.",
      },
      {
        question: "Should I post prices on Instagram?",
        answer:
          "Some studios publish starting prices to filter enquiries; others share a guide on request. Either works if it's accurate and explains what's included, such as team size, hours and deliverables. Avoid a single headline number that hides travel, extra events or album costs, because that creates disputes later. Update the guide every season.",
      },
      {
        question: "How soon after a wedding should I post?",
        answer:
          "Follow what you agreed with the couple. Some want a sneak peek the next day, others want nothing public until after their own announcement. For security, avoid live posting during the event, especially frames showing jewellery or the venue in real time. Full stories usually work best once the couple has seen and approved the gallery.",
      },
      {
        question: "Do event professionals other than photographers need the same approach?",
        answer:
          "Mostly yes. Decorators, planners, makeup artists and caterers also need full stories, how-you-work content and clear enquiry steps. Image rights differ: if you use a photographer's images of your work, you need their permission and should credit them, and the couple's consent still matters. Agree image sharing between vendors before the wedding, not after.",
      },
      {
        question: "Is Pinterest worth it for wedding photographers?",
        answer:
          "It can be, because many couples collect ideas there long before they book. Pins from a full wedding story, linked to your website gallery, can keep being discovered after an Instagram post has faded. Treat it as a second channel once your Instagram enquiry journey works, and only pin images you have rights and consent to share.",
      },
    ],
  },
];
