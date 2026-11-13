import type { BlogPost } from "@/content/blog";

/**
 * SMM batch 05, writer B (2026-11-13): social media for medical and allied practices.
 * Skin and aesthetic clinics (05), individual doctors (08), physiotherapy clinics (09) and diagnostic centres (10).
 * Regulatory statements were checked against primary sources in November 2026 (NMC, NCAHP, MoHFW Clinical
 * Establishments portal, NABL, MeitY/PIB). Sources log: smm-sources-smm-medical.md in the batch scratchpad.
 */

const NMC_AD_GUIDELINES = "https://nmc.org.in/whats-new/download/1874";
const IMC_2002 = "https://nmc.org.in/storage/cms/Ethics-Regulations-2002.pdf";
const PIB_DPDP = "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf";
const ASCI_CODE = "https://www.ascionline.in/the-asci-code/";
const NCAHP_WHO_WE_REGULATE = "https://ncahp.abdm.gov.in/WhoWeRegulate";
const NCAHP_DRAFT_REGULATIONS = "https://ncahp.abdm.gov.in/DraftRegulations";
const NCAHP_REGULATIONS = "https://ncahp.abdm.gov.in/Regulations";
const NCAHP_STATE_COUNCILS = "https://ncahp.abdm.gov.in/StateCouncil";
const CEA_ABOUT = "https://clinicalestablishments.mohfw.gov.in/en/about-us";
const CEA_RULES_2012 =
  "https://clinicalestablishments.mohfw.gov.in/themes/clinical/images/Clinical_Establishment_Gazette_rules_2012_compressed.pdf";
const NABL_FAQ = "https://nabl-india.org/faq/";
const NABL_DOCUMENTS = "https://nabl-india.org/nabl-documents/";
const MOHFW = "https://www.mohfw.gov.in/";
const WHO_INDIA = "https://www.who.int/india";

export const smmMedicalPosts: BlogPost[] = [
  {
    slug: "social-media-marketing-skin-clinics",
    category: "Social Media Management",
    title: "How Skin and Aesthetic Clinics Can Use Educational Social Media Content to Build Trust",
    seoTitle: "Social Media Marketing for Skin Clinics: Build Trust",
    excerpt:
      "How dermatology and aesthetic clinics in India can explain procedures, set honest expectations, show who treats patients and handle 'will this work for me?' comments under the NMC's October 2026 guidelines, with a skin-clinic approval checklist.",
    metaDescription:
      "Social media for skin and aesthetic clinics in India: procedure explainers, honest expectations, no before-and-after posts and a skin-clinic approval checklist.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-13",
    lastReviewed: "November 2026",
    readingTime: "12 min read",
    tags: [
      "social media marketing for skin clinics",
      "dermatology clinic Instagram",
      "aesthetic clinic social media",
      "before and after photos NMC guidelines",
      "skin clinic content approval checklist",
    ],
    related: [
      "social-media-management-clinics",
      "social-media-marketing-beauty-skincare-brands",
      "social-media-content-approval-process",
    ],
    hero: {
      src: "/blog/brand-guides/social-media-marketing-skin-clinics.svg",
      alt: "A skin clinic post check shown as six gates: explain the procedure, set expectations not outcomes, no before-and-after images, name the treating doctor, no filters on skin, and consent and privacy",
    },
    body: [
      {
        type: "paragraph",
        text: "A follower comments under your clinic's Reel: 'How much for laser on my pigmentation, and will it go in three sittings?' The same week, a team member asks whether they can post a patient's peel results, and a sunscreen brand offers free stock if the dermatologist mentions it in a Story. Skin and aesthetic clinics get these requests more than most practices, because the thing patients most want to see, results, is exactly what the rules restrict.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Skin and aesthetic clinics build trust on social media by explaining conditions and procedures in plain language, describing what a procedure involves rather than what it will achieve, and showing who treats patients with their real qualifications and registration details. Under the NMC's guidelines of 6 October 2026, doctors must not display before-and-after photographs or advertise results for promotion, so the feed runs on education and process, approved by the treating doctor before anything is published.",
      },
      { type: "heading", text: "Explain what the clinic does, in plain words", id: "explain-scope" },
      {
        type: "paragraph",
        text: "Many patients can't tell a dermatology consultation from a salon facial, or a medical laser from a beauty-parlour device. Clear, factual descriptions of what you offer are the most useful content a skin clinic can publish, and they are where trust starts. Describe only services the clinic actually provides, and keep the medical and the elective sides distinct:",
      },
      {
        type: "table",
        headers: ["Service type", "How to describe it on social media", "What to leave out"],
        rows: [
          [
            "Medical dermatology (skin, hair and nail conditions)",
            "That the doctor examines, diagnoses and treats these conditions; general education on when to see a dermatologist; what a consultation involves",
            "Named cures, timelines, 'permanent' results, anything that reads as a diagnosis for the viewer",
          ],
          [
            "Cosmetic and aesthetic procedures (only those you offer)",
            "What the procedure is, what happens in a session, preparation and aftercare the doctor wants patients to know, and that suitability is decided at consultation",
            "'Painless', 'guaranteed', 'miracle', 'glowing skin in one session', and any promise about how a person will look",
          ],
          [
            "Products the clinic stocks or uses",
            "Generic, doctor-approved ingredient education ('what a broad-spectrum sunscreen means')",
            "A doctor recommending or endorsing a named product (clause 8.1(iv))",
          ],
        ],
      },
      {
        type: "paragraph",
        text: "One thing a clinic's feed should never try to settle is who is allowed to perform which procedure. That is a question for regulators and your legal adviser, not a caption. What the feed can do is state plainly who performs each procedure at your clinic and what that person's actual qualifications are, so patients can judge for themselves.",
      },
      { type: "heading", text: "The clauses that shape a skin clinic feed", id: "rules" },
      {
        type: "paragraph",
        text: "Our guide to social media management for clinics sets out the general framework (the National Medical Commission's Guidelines on Ethical Advertising and Public Communication, No. R-13014/01/2024-Ethics, dated 6 October 2026, read with the Indian Medical Council (Professional Conduct, Etiquette and Ethics) Regulations, 2002) and a general approval checklist. Read that first. These are the clauses that matter most for skin and aesthetic work:",
        links: [{ text: "social media management for clinics", href: "/blog/social-media-management-clinics" }],
      },
      {
        type: "list",
        items: [
          "Clause 8.1(iii): no advertising of success rates or numbers of patients treated, with 'painless treatment', 'Miracle treatment', '100% success' and 'Guaranteed cures' given as examples of barred claims.",
          "Clause 8.1(v): no publishing cases for promotional purposes, advertising surgical results, displaying 'before and after' photographs, publicising celebrity patients or promoting personal success stories, unless published strictly for scientific or educational purposes with anonymised patient consent.",
          "Clause 8.1(vi): no statement that creates unrealistic expectations, misrepresents treatment outcomes or conceals risks.",
          "Clause 8.1(iv): no approval, recommendation or endorsement of any drug, health product or commercial product for advertising in connection with the doctor's name, photograph or professional status.",
          "Clause 8.1(x): no discounts, limited-period offers, contests, coupons, gifts, cashbacks, referral benefits or free procedures used in a way likely to encourage unnecessary treatment; any lawful disclosure of charges must be factual and transparent.",
          "Clause 7.2(b): AI must not be used to create or manipulate a patient's image, testimonial or clinical outcome.",
        ],
      },
      {
        type: "paragraph",
        text: "Sources: the NMC guidelines of 6 October 2026 and the IMC Regulations, 2002. The NMC text applies to registered medical practitioners and to hospitals and medical institutions. If treatments at your clinic are delivered by people registered with another council, their own regulator's rules also apply; check them rather than assuming the NMC text covers everything.",
        links: [
          { text: "the NMC guidelines of 6 October 2026", href: NMC_AD_GUIDELINES },
          { text: "the IMC Regulations, 2002", href: IMC_2002 },
        ],
      },
      { type: "heading", text: "Before-and-after photos: what clause 8.1(v) means for you", id: "before-and-after" },
      {
        type: "paragraph",
        text: "Before-and-after images are the default format in aesthetic marketing worldwide, which is why this needs to be precise. Clause 8.1(v) lists displaying 'before and after' photographs among the things a registered medical practitioner shall not do, alongside advertising surgical results and promoting success stories. The only carve-out is material 'published strictly for scientific or educational purposes with anonymized patient consent'. Clause 6.2 adds that patient consent does not, by itself, make a before-and-after depiction acceptable, and Explanation V to clause 3.2 bars doctors from requesting or sharing patient testimonials for promotion on social media.",
      },
      {
        type: "paragraph",
        text: "A clinic's Instagram exists to build interest in the clinic, so it is hard to see how a results post there would count as strictly scientific or educational. The safe policy is no before-and-after images, result reels or 'transformation' carousels on the clinic's or the doctor's accounts. If you believe a specific educational use falls within the exception, get the State Medical Council's view in writing first. Separately, clause 7.17 of the 2002 Regulations already barred publishing patients' photographs in an identifiable way without their permission.",
      },
      { type: "subheading", text: "What to show instead" },
      {
        type: "list",
        items: [
          "A labelled diagram of what a procedure does to the skin layers, drawn rather than photographed.",
          "A session walk-through filmed with a staff volunteer or in an empty room: arrival, consent conversation, preparation, the procedure room, aftercare briefing.",
          "Aftercare instructions as a save-worthy carousel, written by the doctor.",
          "'What this procedure can't do': the doctor explains its limits and who it may not suit.",
          "Questions worth asking at any consultation: qualifications, risks, number of sessions, total cost, what happens if you're unhappy.",
          "Factual equipment posts (what the device is and what it's used for) without superiority, accuracy or outcome claims (Explanation II to clause 3.2).",
        ],
      },
      { type: "heading", text: "Show who treats patients, accurately", id: "who-treats" },
      {
        type: "paragraph",
        text: "Under Explanation III to clause 3.2, a doctor's electronic media posts should disclose their name, qualifications, registration status and SMR or NMR registration number; under Explanation IV, a clinical establishment's posts should name the doctors involved with the same details. Clause 1.4.2 of the 2002 Regulations allows only recognised medical degrees and qualifying certificates as suffixes, and clause 7.20 says a physician shall not claim to be a specialist without a special qualification in that branch. Copy every credential from the registration certificate and degree, never from a bio or a visiting card.",
      },
      {
        type: "template",
        label: "Practitioner line for procedure posts (fill from the registration certificate)",
        text: "This procedure is performed at [clinic name] by [full name], [recognised qualifications exactly as registered], registered with [State Medical Council / NMC], Reg. No. [number]. Suitability is decided only after an in-person consultation.",
      },
      {
        type: "paragraph",
        text: "Keep the doctor's photograph directory-style rather than promotional. Clause 9.2 says use of a practitioner's photograph is not permitted where it amounts to self-advertisement, solicitation or promotional publicity, so a 'meet the doctor' post should read like a profile, not a celebrity feature.",
      },
      { type: "heading", text: "Filters, retouching and body image", id: "filters-body-image" },
      {
        type: "paragraph",
        text: "On a skin clinic's feed, a beauty filter is a misleading claim about skin. Make it a written rule that no filter, smoothing, reshaping or AI enhancement is applied to any skin shown in clinic content, including staff and models, and that lighting stays consistent. Altered skin in a post about a procedure risks the unrealistic expectations clause 8.1(vi) forbids, and AI-made or AI-altered faces risk clause 7.2.",
      },
      {
        type: "list",
        items: [
          "Don't frame normal features (pores, texture, fine lines, darker skin tones, body hair) as problems that need fixing.",
          "Avoid language that ranks skin tones or links appearance to worth, success or marriage prospects.",
          "Avoid fear-based hooks ('your skin is ageing faster than you think'); clause 8.1(i) bars fear-based marketing and creating unnecessary demand for procedures.",
          "Use a range of real skin types in illustrations and staff volunteers in demos, with consent.",
        ],
      },
      { type: "heading", text: "Products on the feed", id: "products" },
      {
        type: "paragraph",
        text: "Skin clinics often stock products, and brands often approach dermatologists. Clause 8.1(iv) of the 2026 guidelines and clause 6.1.1 of the 2002 Regulations both bar a doctor from giving an endorsement or recommendation of a product for use in advertising with their name or photograph. Keep product content generic and educational (ingredient categories, how to read a label, why patch-testing instructions on the pack matter) and leave specific product choices to the consultation. Turn down paid or gifted mentions for the doctor's account. If you also run a separate retail skincare brand, our guide to social media for beauty and skincare brands covers product marketing, which follows different rules from a doctor's feed.",
        links: [{ text: "social media for beauty and skincare brands", href: "/blog/social-media-marketing-beauty-skincare-brands" }],
      },
      { type: "heading", text: "Replying to 'will this work for me?'", id: "will-it-work" },
      {
        type: "paragraph",
        text: "Comments asking about suitability, results and price are the most common inbound on a skin clinic account. The person managing the inbox should never assess a photo, suggest a treatment or predict a result. Agree these replies with the doctor once, then use them consistently. Our guide to community management vs customer support explains how to route the questions that need the clinic team.",
        links: [{ text: "community management vs customer support", href: "/blog/community-management-vs-customer-support" }],
      },
      {
        type: "template",
        label: "Suitability or results question",
        text: "Thanks for asking. Whether a treatment suits you, and what it can realistically do, depends on an examination by the doctor, so we can't advise here or from a photo. You can book a consultation on [number / link]. Please don't share photos of your skin or medical details in comments.",
      },
      {
        type: "template",
        label: "Price question",
        text: "Our consultation fee is [amount]. Procedure fees depend on what the doctor recommends after examining you; the current fee list is at [link / on request at the front desk]. We'll always give you the full cost before any treatment starts.",
      },
      {
        type: "template",
        label: "Unhappy patient commenting publicly",
        text: "We're sorry to hear this. To protect your privacy we can't discuss anyone's treatment here. Please call [number] or email [address] so the doctor can speak with you directly.",
      },
      { type: "heading", text: "Skin clinic content approval checklist", id: "approval-checklist" },
      {
        type: "paragraph",
        text: "Use this in addition to the general clinic checklist, before any post, Story, Reel or reply template goes live. The treating doctor signs off; our guide to the social media approval process covers stages and turnaround.",
        links: [{ text: "the social media approval process", href: "/blog/social-media-content-approval-process" }],
      },
      {
        type: "list",
        items: [
          "The procedure or condition is described factually, in plain language, and only if the clinic offers it.",
          "No outcome promised: no 'results', timelines, 'permanent', 'painless', 'guaranteed', 'miracle' or '100%'.",
          "Risks, limits and the need for a consultation are mentioned where a procedure is discussed.",
          "No before-and-after images, result reels, transformation carousels, celebrity patients or patient stories.",
          "No filter, retouching or AI alteration on any skin shown; no AI-generated faces.",
          "The treating practitioner is named with recognised qualifications, registration status and registration number.",
          "No named-product endorsement by a doctor; no gifted or paid product mentions.",
          "No discounts, packages with countdowns, contests, referral rewards or free procedures.",
          "Everyone shown has given written consent; no patient is identifiable.",
          "Normal skin features are not framed as defects; no fear-based hooks.",
          "Reply templates for suitability, price and complaints are approved and ready.",
        ],
      },
      { type: "subheading", text: "Common mistakes the checklist catches" },
      {
        type: "list",
        items: [
          "Copying aesthetic marketing from other countries, where before-and-after content is routine, into an Indian doctor's feed.",
          "Captioning a procedure post with what the patient 'will get' instead of what the procedure involves.",
          "Letting a receptionist or agency answer 'is this acne or pigmentation?' from a photo in DMs.",
          "Using a smoothing filter on a model in a laser explainer.",
          "Running festive offers on peels or laser packages.",
        ],
      },
      { type: "heading", text: "Where to begin", id: "conclusion" },
      {
        type: "paragraph",
        text: "Start with three things: a correct practitioner line on every post, a short series explaining each procedure you offer and its limits, and approved replies for suitability and price questions. Run every draft through the checklist above. If the dermatologist also wants a personal professional profile, our guide to social media management for doctors covers that separately.",
        links: [{ text: "social media management for doctors", href: "/blog/social-media-management-for-doctors" }],
      },
      {
        type: "paragraph",
        text: "Outside help such as Kudozz's copywriting and publishing support can draft explainers and keep the calendar running, but for a doctor-led clinic, clause 8.1(ii) lists engaging 'any third party for marketing medical services' among practices to avoid while clause 8.1(viii) addresses how agencies are paid, so ask your State Medical Council how those apply before engaging anyone, and never tie any fee to patients or bookings.",
        links: [{ text: "Kudozz's copywriting and publishing support", href: "/services/social-media-management#copywriting" }],
      },
    ],
    faqs: [
      {
        question: "Can a dermatologist post before-and-after photos if the patient agrees?",
        answer:
          "Not for promotion. Clause 8.1(v) of the NMC's October 2026 guidelines bars displaying before-and-after photographs except when published strictly for scientific or educational purposes with anonymised patient consent, and clause 6.2 says consent alone doesn't make a prohibited depiction acceptable. A clinic's social feed is unlikely to qualify as strictly scientific. If you think a specific use falls within the exception, ask your State Medical Council first.",
      },
      {
        question: "Can we use a model or staff member to demonstrate a procedure?",
        answer:
          "You can show what a session looks like with a consenting staff volunteer or model, provided you don't present it as a result and don't edit their skin. Get written consent that covers where the video will be used and for how long. Avoid any framing that suggests the person's appearance is the outcome of treatment, and have the doctor approve the final edit.",
      },
      {
        question: "Can the clinic post its prices?",
        answer:
          "The 2002 Regulations allow a public declaration of charges, and the 2026 guidelines say any lawful disclosure of charges, packages or fees must be factual, transparent and not misleading. A clear fee list is different from a discount or limited-period offer, which clause 8.1(x) restricts. Show what is included, avoid 'starting from' figures that mislead, and have legal review package posts.",
      },
      {
        question: "Can the doctor recommend a sunscreen brand in a Reel?",
        answer:
          "It is safer not to. Clause 8.1(iv) of the 2026 guidelines and clause 6.1.1 of the 2002 Regulations bar doctors from endorsing or recommending products for advertising with their name or image, whether or not they are paid. Talk about ingredient types and how to use a product category, and leave specific product choices to individual consultations.",
      },
      {
        question: "Do these rules apply to aesthetic clinics not run by doctors?",
        answer:
          "The NMC guidelines apply to registered medical practitioners and to hospitals and medical institutions. If your clinic is run by, or treatments are delivered by, people registered with another council, their regulator's rules apply too, and consumer and advertising law (including the ASCI Code's substantiation requirement) applies to everyone. Check with your legal adviser which rules cover your set-up.",
      },
    ],
  },
  {
    slug: "social-media-management-for-doctors",
    category: "Social Media Management",
    title: "Social Media Management for Doctors: How to Build a Professional and Consistent Online Presence",
    seoTitle: "Social Media Management for Doctors in India (2026)",
    excerpt:
      "How an individual doctor in India can run a professional social media presence under the NMC's October 2026 guidelines: profile details, what to post in your own name, patient DMs, misinformation, a monthly publishing framework and what help is safe to take.",
    metaDescription:
      "Social media for doctors in India: profile details the NMC expects, what to post in your own name, patient DMs, misinformation and a monthly publishing plan.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-13",
    lastReviewed: "November 2026",
    readingTime: "10 min read",
    tags: [
      "social media management for doctors",
      "doctor personal brand India",
      "doctors on Instagram NMC rules",
      "doctor LinkedIn content",
      "monthly content plan for doctors",
    ],
    related: [
      "social-media-management-clinics",
      "hospital-social-media-marketing",
      "linkedin-thought-leadership-marketing",
    ],
    hero: {
      src: "/blog/brand-guides/social-media-management-for-doctors.svg",
      alt: "A doctor's monthly publishing framework: four weekly slots for a patient question answered, a general explainer, a sourced misinformation check and a practice notice, built on a profile with registration details and a weekly inbox routine",
    },
    body: [
      {
        type: "paragraph",
        text: "You finish OPD at 8 pm, open Instagram and find twenty follow requests, two patients asking about their reports in DMs, and a relative's forwarded Reel claiming a kitchen remedy replaces insulin. You'd like to post something useful, but you have twenty minutes and no idea which of your ideas the new NMC rules allow. This guide is for the individual doctor's own professional presence, not a clinic or hospital account.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Social media management for doctors in India means running your profile as a professional record and an outlet for general health education, not a marketing channel. Under the NMC's guidelines of 6 October 2026, your posts should disclose your name, qualifications, registration status and SMR or NMR number, must not solicit patients or promote your practice, and can include education and talks in your own name. A short monthly framework and firm DM boundaries keep it sustainable.",
      },
      { type: "heading", text: "Personal profile, clinic account or both?", id: "which-account" },
      {
        type: "paragraph",
        text: "Most doctors end up with more than one presence, and mixing them causes problems. Decide what each account is for before you post anything:",
      },
      {
        type: "table",
        headers: ["Account", "What it's for", "Who runs it", "Guide"],
        rows: [
          ["Your professional profile as a doctor", "Education within your specialty, talks and articles in your own name, formal announcements", "You, with any help working under your review", "This article"],
          ["Clinic or practice account", "Timings, booking, team, facilities, process FAQs", "The clinic, with the doctor approving", "Our clinic guide"],
          ["Hospital account", "Departments, services, public health, governance", "Hospital communications team", "Our hospital guide"],
          ["Private personal account", "Family and friends", "You", "Keep it private and patient-free"],
        ],
      },
      {
        type: "paragraph",
        text: "If you run a practice, see our guide to social media management for clinics; if you work in a multi-department hospital, the hospital social media strategy guide covers the institution's accounts. Clause 8.2(iii) of the guidelines lets you give public health talks on electronic media in your own name and designation, but without promoting your employer, so keep the professional profile about education rather than about where you work.",
        links: [
          { text: "social media management for clinics", href: "/blog/social-media-management-clinics" },
          { text: "hospital social media strategy", href: "/blog/hospital-social-media-marketing" },
        ],
      },
      { type: "heading", text: "Set up the profile as a professional record", id: "profile-setup" },
      {
        type: "paragraph",
        text: "Explanation III to clause 3.2 of the NMC's Guidelines on Ethical Advertising and Public Communication (No. R-13014/01/2024-Ethics, 6 October 2026) says a registered medical practitioner publishing any electronic media post should transparently disclose their name, qualifications, registration status and SMR or NMR registration number. The simplest way to meet that consistently is to put the details in the bio and repeat a short version on education posts. Clause 1.4.2 of the 2002 Regulations allows only recognised degrees and qualifying certificates as suffixes, and clause 7.20 bars claiming to be a specialist without a special qualification in that branch.",
        links: [
          { text: "Guidelines on Ethical Advertising and Public Communication", href: NMC_AD_GUIDELINES },
          { text: "the 2002 Regulations", href: IMC_2002 },
        ],
      },
      {
        type: "template",
        label: "Profile bio (adapt to the platform's character limit)",
        text: "Dr [Full name], [recognised qualifications exactly as registered]\n[Specialty, only if you hold the qualification]\nRegistered with [State Medical Council / NMC], Reg. No. [number]\nGeneral health education only. Not medical advice. I can't answer personal medical questions here.",
      },
      {
        type: "list",
        items: [
          "No 'best', 'top', 'No.1', 'leading' or 'most trusted' in the bio or handle (clause 8.1(ix)).",
          "No booking link or 'DM for appointments' if the profile is meant for education; a link to an official practice page with timings is a judgement call to check with your State Medical Council.",
          "Profile photo: plain and professional. Clause 9.2 bars using a doctor's photograph where it amounts to self-advertisement or promotional publicity.",
        ],
      },
      { type: "heading", text: "What you can post in your own name", id: "what-you-can-post" },
      {
        type: "paragraph",
        text: "The guidelines are restrictive about promotion but explicitly make room for education. Clause 5.1 allows medical practitioners to take part in health awareness programmes, public health campaigns, academic discussions and educational content, provided these don't promote personal practice, don't solicit patients and aren't monetised through promotional marketing.",
      },
      {
        type: "table",
        headers: ["Content", "Basis", "Keep in mind"],
        rows: [
          ["General education within your specialty", "Clause 5.1", "Written for a general reader; no diagnosis; a 'not medical advice' line"],
          ["Talks, interviews and articles in your own name", "Clause 8.2(iii)", "Your name and designation, without promoting your employer"],
          ["Research you've published in a reputed journal", "Clause 8.2(i)", "Share the paper and its findings, not a promotional case story"],
          ["Formal announcements: starting practice, change of address or type of practice, temporary absence, resumption, succession, declaration of charges", "Clause 8.2(ii); IMC 6.1.1", "Factual and limited in scope (clause 9.3)"],
          ["Greetings on national days or medical observances", "Clause 8.2(v)", "No advertisement of professional gain"],
          ["Government health campaigns", "Explanation to clause 7.3", "Campaigns on Government of India and state programmes are exempt"],
        ],
      },
      { type: "heading", text: "Where the line is", id: "where-the-line-is" },
      {
        type: "paragraph",
        text: "Clause 8.1 lists what registered practitioners shall not do. For a personal profile, these are the ones that come up:",
      },
      {
        type: "list",
        items: [
          "Soliciting patients directly or indirectly, or self-promotion of professional services (8.1(ii)).",
          "Advertising personal achievements, success rates or the number of patients treated (8.1(iii)).",
          "Endorsing any drug, device, health product or commercial product, paid or not (8.1(iv)).",
          "Case posts for promotion, surgical results, before-and-after photos, celebrity patients or success stories (8.1(v)).",
          "Requesting or sharing patient testimonials or reviews for promotion on social media (Explanation V to 3.2).",
          "Fear-based content or creating unnecessary demand for procedures or tests (8.1(i)).",
          "Buying followers, likes, comments or views, or manipulating rankings (8.1(xii)).",
          "AI-generated promotional campaigns; any AI-generated content must carry a source mark saying so (7.2).",
          "Sharing any patient data, such as names, faces or anomalies, that could identify someone (7.4).",
        ],
      },
      { type: "subheading", text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Posting an 'interesting case' from today's OPD with the face blurred but the story recognisable.",
          "Sharing a grateful patient's message as a screenshot.",
          "Celebrating a milestone number of procedures.",
          "Accepting a gifted product and showing it in a Story.",
          "Using a hashtag like #bestcardiologistdelhi.",
        ],
      },
      { type: "heading", text: "A monthly publishing framework for a busy doctor", id: "monthly-framework" },
      {
        type: "paragraph",
        text: "Consistency matters more than volume. Four planned posts a month, one per weekly slot, is a realistic starting point for a doctor in full-time practice; increase only if you can still review everything yourself. This framework is a suggestion, not a benchmark, and works on Instagram, LinkedIn or YouTube Shorts.",
      },
      {
        type: "table",
        headers: ["Week", "Slot", "Example (general, hypothetical)", "Your review"],
        rows: [
          ["1", "A question patients often ask, answered generally", "'Why does my doctor ask me to fast before some blood tests?'", "Check every sentence; add the not-advice line"],
          ["2", "Explainer within your specialty", "A carousel on how a common condition is usually diagnosed, in plain language", "Source health facts; avoid anything that reads like individual advice"],
          ["3", "Misinformation check, sourced", "A forwarded claim, why it's misleading, and what MoHFW or WHO actually say", "Link the primary source; correct the claim, not the person"],
          ["4", "Professional notice or talk", "A talk you gave, a published paper, a change in consultation days, or a national health day", "Announcements stay factual (clause 9.3)"],
        ],
      },
      { type: "subheading", text: "Budgeting the time" },
      {
        type: "list",
        items: [
          "One 90-minute monthly session: pick four topics from questions you heard in OPD, outline them, and record any video in one sitting.",
          "If someone helps you, they turn the outlines into drafts; you review the final versions in one 30-minute block.",
          "Ten minutes, two or three times a week, for comments and DMs, using approved replies.",
          "A 'parking list' in your phone for questions worth answering next month.",
        ],
      },
      {
        type: "paragraph",
        text: "If you post on LinkedIn for peers and institutions as well, our guide to LinkedIn thought leadership covers the professional-audience side; a doctor's version should still follow every rule above. For turning recurring patient questions into posts, see our guide to content from customer questions, and keep every example general.",
        links: [
          { text: "LinkedIn thought leadership", href: "/blog/linkedin-thought-leadership-marketing" },
          { text: "content from customer questions", href: "/blog/social-media-content-from-customer-questions" },
        ],
      },
      { type: "heading", text: "Patients in your DMs and follow requests", id: "dms-boundaries" },
      {
        type: "paragraph",
        text: "A DM is not a consultation. You don't have the history, the examination or a record, and replying with advice creates a clinical interaction you can't document properly. The 2002 Regulations require you to keep patients' confidences (clause 7.14), so never discuss anyone's care in comments or confirm that someone is your patient. If you offer teleconsultation, run it through a proper channel under the rules that apply to it, not through Instagram messages.",
      },
      {
        type: "template",
        label: "Reply to a personal medical question in DMs",
        text: "Thank you for writing. I'm not able to give personal medical advice over social media, because I'd need your history and an examination. Please consult a doctor in person, or call [clinic number] if you'd like an appointment with me. If your symptoms are severe or sudden, please go to the nearest emergency department now.",
      },
      {
        type: "list",
        items: [
          "Decide your follow-back policy once (for example: you don't follow patients back) and apply it to everyone.",
          "Turn off message requests from people you don't follow if the volume becomes unmanageable; check the current setting in the platform's help centre.",
          "Never ask patients to follow, review or tag you.",
          "Screenshot and escalate threats or harassment to the platform and, where needed, the police.",
        ],
      },
      { type: "heading", text: "Correcting misinformation without a fight", id: "misinformation" },
      {
        type: "paragraph",
        text: "Correcting viral health myths is among the most useful things a doctor can do online, and it is squarely education. Quote the claim without naming or mocking the person who shared it, explain what is wrong in two or three sentences, and link the primary source, such as the Ministry of Health and Family Welfare or the World Health Organization. Don't speculate beyond your specialty, don't use the post to point people to your practice, and if a claim concerns a specific medicine or product, keep to what the official source says.",
        links: [
          { text: "Ministry of Health and Family Welfare", href: MOHFW },
          { text: "World Health Organization", href: WHO_INDIA },
        ],
      },
      { type: "heading", text: "What help is safe to take", id: "outside-help" },
      {
        type: "paragraph",
        text: "Clause 4.4 says publishing through an agency or other third party does not absolve a practitioner of responsibility for content they authorised or knowingly permitted. Clause 8.1(ii) lists engaging 'any third party for marketing medical services' among the practices to avoid, while clause 8.1(viii) says the engagement of advertising and digital marketing agencies must not be structured so that payment is linked to the procurement or referral of individual patients. How these apply to help with factual and educational posting is a question for your State Medical Council or legal adviser before you engage anyone.",
      },
      {
        type: "list",
        items: [
          "Lower-risk help: editing your own recorded video, designing carousels from your outline, scheduling, and flagging comments for your reply.",
          "Needs your full review: anyone drafting captions or scripts in your voice. You publish only what you've read and agree with.",
          "Avoid: anyone 'growing' the account through paid engagement, posting without your approval, replying to patients as you, or charging per enquiry or appointment.",
          "AI drafting tools: never paste patient information in (clause 7.2(d)), check every fact, and mark AI-generated content as clause 7.2 requires.",
        ],
      },
      { type: "heading", text: "Your first month", id: "conclusion" },
      {
        type: "paragraph",
        text: "Fix the bio with your registration details, write your DM reply and follow-back policy, then publish four posts using the weekly slots above. Review what people actually asked during the month and feed those questions into the next one.",
      },
      {
        type: "paragraph",
        text: "If you decide, after checking with your State Medical Council, that support with editing, design and scheduling is appropriate, a social media management service such as Kudozz's content planning support can work only inside your review, with fees never tied to patients or appointments.",
        links: [{ text: "Kudozz's content planning support", href: "/services/social-media-management#content-planning" }],
      },
    ],
    faqs: [
      {
        question: "Do I have to show my registration number on every post?",
        answer:
          "Explanation III to clause 3.2 of the NMC's October 2026 guidelines says a registered practitioner publishing electronic media posts should transparently disclose their name, qualifications, registration status and SMR or NMR number. Putting these in your bio helps, but a short credit line on education posts and videos is the more cautious way to meet it. Check with your State Medical Council if you are unsure what format it expects.",
      },
      {
        question: "Can I monetise my educational YouTube channel?",
        answer:
          "Be careful. Clause 5.1 allows educational content provided it doesn't promote personal practice, solicit patients or get monetised through promotional marketing, and clause 8.1(iv) bars product endorsements. Sponsored videos and brand deals are clearly risky. Whether platform ad revenue on purely educational videos counts as promotional monetisation isn't spelled out, so ask your State Medical Council before switching it on.",
      },
      {
        question: "Can I mention the hospital where I work?",
        answer:
          "You can give talks in your own name and designation under clause 8.2(iii), but without promoting your employer. A neutral designation in a bio is different from posts that promote the hospital's services. Hospital promotion belongs on the hospital's own accounts under its governance, so check with the hospital's communications or legal team as well.",
      },
      {
        question: "Can I reply to a patient who thanks me publicly?",
        answer:
          "A brief, neutral acknowledgement such as 'Thank you, wishing you good health' is the cautious approach. Don't confirm they were your patient, discuss their care or reshare the message, because the guidelines bar sharing patient testimonials for professional promotion on social media and the 2002 Regulations require confidentiality.",
      },
      {
        question: "Are the NMC's 2023 professional conduct regulations in force?",
        answer:
          "According to the NMC's regulations page at the time of writing, the 2023 Regulations dated 2 August 2023 were kept in abeyance by an amendment dated 23 August 2023. The October 2026 advertising guidelines say they are to be read with the 2002 Regulations. Check the NMC website for any later notification before relying on either.",
      },
    ],
  },
  {
    slug: "social-media-marketing-physiotherapy-clinics",
    category: "Social Media Management",
    title: "How Physiotherapy Clinics Can Use Social Media to Explain Treatments and Educate Patients",
    seoTitle: "Social Media Marketing for Physiotherapy Clinics",
    excerpt:
      "How physiotherapy clinics in India can use social media for movement education without prescribing exercises: the NCAHP regulatory position in November 2026, 15 educational content ideas, safe demonstration filming, team introductions and first-assessment enquiries.",
    metaDescription:
      "Social media for physiotherapy clinics in India: 15 educational ideas, safe exercise demos, first-visit explainers and the NCAHP rules as of November 2026.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-13",
    lastReviewed: "November 2026",
    readingTime: "11 min read",
    tags: [
      "social media marketing for physiotherapy clinics",
      "physiotherapy content ideas",
      "physiotherapist Instagram",
      "NCAHP physiotherapy rules",
      "physio clinic enquiries",
    ],
    related: [
      "social-media-management-clinics",
      "instagram-reels-strategy-for-brands",
      "social-media-content-from-customer-questions",
    ],
    hero: {
      src: "/blog/brand-guides/social-media-marketing-physiotherapy-clinics.svg",
      alt: "An idea map of 15 physiotherapy content ideas in three groups: general explainers, demonstrations with safety framing, and clinic and first-visit information, all leading to assessment rather than prescription",
    },
    body: [
      {
        type: "paragraph",
        text: "A patient's son sends your clinic a YouTube video of knee exercises and asks if his father can do them three weeks after surgery. A follower wants 'the best stretch for sciatica'. Your associate would like to film a patient's first unassisted steps for a Reel. Each request is a chance to educate, and each one can go wrong if the clinic's feed starts prescribing to people it has never assessed.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Physiotherapy clinics should use social media for general movement education, clearly framed demonstrations and honest information about what happens at an assessment, never for individual exercise prescription. Every demonstration should say it is not a substitute for an assessment. Physiotherapy is regulated under the NCAHP Act, 2021; at the time of writing (November 2026) its professional conduct and ethics regulations are still a draft, so follow their direction cautiously and check with your State Council.",
      },
      { type: "heading", text: "Who regulates physiotherapy, as of November 2026", id: "regulation-status" },
      {
        type: "paragraph",
        text: "This is orientation, not legal advice. The rules for allied and healthcare professions are being built out, so check the current position with your State Allied and Healthcare Council or legal adviser.",
      },
      {
        type: "table",
        headers: ["Source", "Status (checked 13 November 2026)", "What it means for your posts"],
        rows: [
          [
            "National Commission for Allied and Healthcare Professions (NCAHP) Act, 2021",
            "Notified in the Gazette on 28 March 2021; the NCAHP lists physiotherapy as one of its ten professional categories",
            "Physiotherapists are regulated as allied and healthcare professionals, not under the NMC",
          ],
          [
            "Registration of Allied and Healthcare Professionals Regulations, 2026",
            "Listed by the NCAHP among final regulations, uploaded 15 September 2026",
            "Registration details are what you should show in introductions, once you have them",
          ],
          [
            "Registered Allied and Healthcare Professionals (Professional Conduct & Ethics) Regulations, 2026",
            "Draft, placed for public comment on 27 April 2026 (comments to 28 May 2026); still listed as a draft",
            "Not yet binding, but signals the direction (see below)",
          ],
          [
            "State Allied and Healthcare Councils",
            "Notification status varies by state; the NCAHP publishes a state-by-state table",
            "Your State Council is the body to ask about local requirements",
          ],
          [
            "Clinical Establishments (Registration and Regulation) Act, 2010, or your state's law",
            "Applies to therapeutic and diagnostic establishments in states that apply or have adopted it",
            "Your clinic may need registration; ask your state authority",
          ],
        ],
      },
      {
        type: "paragraph",
        text: "Sources: the NCAHP's list of the professions it regulates, its regulations page, its draft regulations page and its state councils table, and the Clinical Establishments portal. We found no physiotherapy-specific advertising code in force at the time of writing. General advertising rules still apply, including the ASCI Code's requirement that claims be capable of substantiation. If a doctor practises at your clinic, the NMC's October 2026 guidelines also govern that doctor's content.",
        links: [
          { text: "the ASCI Code", href: ASCI_CODE },
          { text: "the professions it regulates", href: NCAHP_WHO_WE_REGULATE },
          { text: "its regulations page", href: NCAHP_REGULATIONS },
          { text: "its draft regulations page", href: NCAHP_DRAFT_REGULATIONS },
          { text: "its state councils table", href: NCAHP_STATE_COUNCILS },
          { text: "the Clinical Establishments portal", href: CEA_ABOUT },
        ],
      },
      { type: "subheading", text: "What the draft ethics regulations propose" },
      {
        type: "paragraph",
        text: "The April 2026 draft (NCAHP notice No. M-13/4/2026-NCAHP) proposes that registered professionals shall not solicit patients (regulation 6), shall not endorse products (regulation 8), may make formal announcements and do public education without soliciting (regulation 9), and should follow a social media guideline. That guideline says information should be evidence-based and verifiable; professionals should avoid discussing patients' treatment on public social media and guide anyone who asks towards a consultation; patients' photographs or scans need written consent; no buying likes or followers; no requesting or sharing testimonials or reviews; no images of 'healed/cured patients' or procedure videos 'displaying impressive results'; and education should stay within the professional's expertise. Because it is a draft, wording may change before it is notified.",
      },
      { type: "heading", text: "Education, not prescription", id: "education-not-prescription" },
      {
        type: "paragraph",
        text: "A practical way to keep every post on the right side is to check which of three layers it sits in. Only the first two belong on a public feed; the third happens in the clinic.",
      },
      {
        type: "list",
        items: [
          "Layer 1, general information: what a condition or term means, how physiotherapy assessment works, everyday habits. Reviewed by a registered physiotherapist.",
          "Layer 2, demonstration with safety framing: how a common movement is generally performed, with who should not try it and a clear line that it is not a substitute for assessment.",
          "Layer 3, individual prescription: which exercises, how many, how hard and when to progress for a specific person. Never on social media, in comments or in DMs.",
        ],
      },
      {
        type: "template",
        label: "Safety line for every demonstration (adapt and keep on screen and in the caption)",
        text: "General information only, not a substitute for an assessment. Don't try this if you have pain, a recent injury or surgery, or a condition your doctor or physiotherapist hasn't cleared you for. Stop if it hurts and get assessed.",
      },
      { type: "heading", text: "15 educational content ideas for a physiotherapy clinic", id: "content-ideas" },
      {
        type: "paragraph",
        text: "Each idea is specific enough to brief and shoot. Have the lead physiotherapist approve the script, and where an idea contains a health fact, keep it general and source it.",
      },
      {
        type: "table",
        headers: ["#", "Idea", "Format", "Guardrail"],
        rows: [
          ["", "Group 1: Explain, generally", "", ""],
          ["1", "'What a physiotherapist actually does': assessment, treatment and education, explained by the lead physio", "Carousel", "Describe your clinic's real services only"],
          ["2", "Glossary: range of motion, mobility, strength, load and other words patients hear at physio", "Carousel", "Plain definitions, no claims"],
          ["3", "'Why your exercises differ from your neighbour's': how assessment shapes a plan", "Talking-head Reel", "No example plans for named conditions"],
          ["4", "How to read a home exercise sheet, using a blank sample", "Screen-recorded walk-through", "Use a dummy sheet, never a patient's"],
          ["5", "Questions to ask your surgeon about rehab before an operation", "Checklist post", "Questions only; answers come from the patient's own team"],
          ["", "Group 2: Demonstrate, with safety framing", "", ""],
          ["6", "Desk set-up walk-through: chair height, screen position, taking breaks", "Reel filmed at a clinic desk", "Safety line; 'see a professional if pain persists'"],
          ["7", "Using a walking aid: the common handling errors to watch for", "Short demo with staff", "Say height and fit are set by the treating physio"],
          ["8", "A general warm-up before weekend sport", "Reel", "Safety line; no claims about preventing injury"],
          ["9", "Lifting a suitcase or shopping bags: technique basics", "Reel", "Safety line; no medical claims"],
          ["10", "A posture and breathing break for long drives", "Story series", "Only when parked; safety line"],
          ["", "Group 3: The clinic and the first visit", "", ""],
          ["11", "'What happens at your first assessment', step by step", "Reel with a staff volunteer", "Process only; no outcome language"],
          ["12", "What to wear and bring: reports, prescriptions, comfortable clothing", "Carousel", "Keep it current"],
          ["13", "Meet the team: names, qualifications and registration details as issued, areas they have trained in, languages", "Profile posts", "Copy credentials from certificates"],
          ["14", "Inside the treatment area: what each piece of equipment is used for", "Walk-through video", "Factual; no superiority claims"],
          ["15", "'When to see a doctor first': signs that need medical review before physio, as agreed with your referring doctors", "Carousel", "General; reviewed by a doctor and a physio"],
        ],
      },
      {
        type: "paragraph",
        text: "For turning these into a steady Reels rhythm, our guide to an Instagram Reels strategy covers formats and planning, and our guide to content from customer questions explains how to collect the questions patients actually ask at the front desk.",
        links: [
          { text: "an Instagram Reels strategy", href: "/blog/instagram-reels-strategy-for-brands" },
          { text: "content from customer questions", href: "/blog/social-media-content-from-customer-questions" },
        ],
      },
      { type: "heading", text: "Filming demonstrations safely", id: "filming-demonstrations" },
      {
        type: "list",
        items: [
          "Use staff or consenting adult volunteers, never patients mid-treatment.",
          "Show the starting position, the movement and the finish clearly, at real speed, with no exaggerated range.",
          "Put the safety line on screen for the whole video, not just in the caption.",
          "Avoid numbers of repetitions, sets or durations that read as a prescription; say 'your physio will set the amount'.",
          "Don't promise outcomes ('fix your back in 7 days', 'never have knee pain again').",
          "Film in a tidy space with no files, screens or patients in frame.",
          "Get written consent from everyone who appears, covering platforms and how long you'll keep the video up.",
        ],
      },
      { type: "heading", text: "Introducing the clinic and the team", id: "team-introductions" },
      {
        type: "paragraph",
        text: "Team introductions are where trust is built, and where overclaiming creeps in. State each person's qualifications exactly as on their certificates, their registration details once issued, the areas they have actually trained in, and the languages they speak. Titles and prefixes for physiotherapists have been the subject of official directives and public disputes in recent years, so use only the title your registration supports and check the current position with your State Council rather than following what other clinics do. Avoid 'expert', 'specialist' or 'best' unless you can show exactly what supports the word.",
      },
      { type: "heading", text: "Answering 'what happens at the first visit?'", id: "first-assessment" },
      {
        type: "paragraph",
        text: "Most enquiries to a physio clinic are some version of 'can you help with my problem?' and 'what will happen?'. You can't answer the first without an assessment, but you can answer the second fully, and doing so honestly is what turns an anxious enquiry into a booking.",
      },
      {
        type: "template",
        label: "Reply to a 'can you help with my pain?' enquiry",
        text: "Thanks for reaching out. We can't advise on your condition here, but we can tell you what happens next. At a first assessment (about [duration] at [clinic]), the physiotherapist asks about your history, looks at how you move and explains what they find. If physiotherapy is suitable, they'll agree a plan with you; if you need to see a doctor first, they'll tell you. Please bring any reports or prescriptions. Fee: [amount]. To book, call or WhatsApp [number]. If you have severe or sudden symptoms, please seek medical care urgently.",
      },
      {
        type: "paragraph",
        text: "Pin a post with the same information, and keep the address, timings, accessibility details and fees current. Clear process information, not promises, is what you want people to find on your profile.",
      },
      { type: "heading", text: "Patient progress videos and stories", id: "patient-stories" },
      {
        type: "paragraph",
        text: "Rehab progress videos are emotionally powerful and the most common way physio clinics get this wrong. The draft NCAHP guideline proposes no requesting or sharing of testimonials and no images of 'healed/cured patients' or videos 'displaying impressive results'. Even before it is final, these posts also risk misleading viewers about what treatment will do for them, and health information is personal data under the Digital Personal Data Protection Act, 2023, whose Rules were notified on 14 November 2025 with phased compliance (PIB, 17 November 2025). The cautious policy: no patient progress videos or testimonials on the clinic's feed, and no identifiable patients in any content.",
        links: [{ text: "PIB, 17 November 2025", href: PIB_DPDP }],
      },
      { type: "heading", text: "Common mistakes", id: "common-mistakes" },
      {
        type: "list",
        items: [
          "Answering 'which exercise for my disc problem?' in comments with a specific routine.",
          "Posting '10 exercises for knee pain' with sets and reps and no safety framing.",
          "Filming a patient's session because they said it was fine.",
          "Claiming a technique or machine 'cures' or 'permanently fixes' anything.",
          "Paying a marketing partner per new patient; the draft regulations also propose banning fee-splitting tied to referrals.",
        ],
      },
      { type: "heading", text: "Where to start", id: "conclusion" },
      {
        type: "paragraph",
        text: "Fix your profile and pinned 'first visit' post, agree the safety line and the enquiry reply, and pick five of the fifteen ideas for your first month. Check your registration position with your State Council, and if a doctor also practises at the clinic, see our guide to social media management for clinics for the NMC side.",
        links: [{ text: "social media management for clinics", href: "/blog/social-media-management-clinics" }],
      },
      {
        type: "paragraph",
        text: "If you want help turning footage your team records into Reels, an agency such as Kudozz can handle short-form editing and scheduling, while every script and final cut stays with your lead physiotherapist for approval.",
        links: [{ text: "short-form editing and scheduling", href: "/services/social-media-management#reels-short-form-video" }],
      },
    ],
    faqs: [
      {
        question: "Can a physiotherapy clinic post exercise videos?",
        answer:
          "Yes, as general demonstrations with clear safety framing: who shouldn't try it, that it doesn't replace an assessment, and to stop if it hurts. Avoid sets, reps and progressions that read like a prescription, and don't promise results. Have a registered physiotherapist approve each video. Individual exercise advice belongs in an assessment, not in comments or DMs.",
      },
      {
        question: "Do the NMC advertising guidelines apply to physiotherapists?",
        answer:
          "The NMC's October 2026 guidelines apply to registered medical practitioners and to hospitals and medical institutions. Physiotherapists are regulated under the National Commission for Allied and Healthcare Professions Act, 2021. If a doctor works at your clinic, the NMC guidelines apply to that doctor's content. Check your clinic's position with your State Council and legal adviser.",
      },
      {
        question: "Is there an advertising code for physiotherapists in India?",
        answer:
          "We found no physiotherapy-specific advertising code in force in November 2026. The NCAHP published draft Professional Conduct and Ethics Regulations on 27 April 2026, which include proposed social media conduct rules, and at the time of writing they were still listed as a draft. General consumer and advertising law, including the ASCI Code's requirement to substantiate claims, applies regardless.",
      },
      {
        question: "Can we share a patient's recovery video if they're happy for us to?",
        answer:
          "We'd advise against it on the clinic's feed. The draft NCAHP guideline proposes no testimonials and no videos displaying impressive results, recovery videos can mislead others about what treatment will do for them, and health information is personal data under the DPDP Act. If you have a specific educational use in mind, take advice from your State Council and legal adviser first.",
      },
      {
        question: "How often should a small physio clinic post?",
        answer:
          "Post as often as your lead physiotherapist can genuinely review. For many small clinics that means one or two posts a week plus Stories with timings and updates. A steady rhythm of accurate, useful posts matters more than volume, and every demonstration needs the same safety review whether you post weekly or daily.",
      },
    ],
  },
  {
    slug: "social-media-marketing-diagnostic-centres",
    category: "Social Media Management",
    title: "Social Media Marketing for Diagnostic Centres: Communicating Services, Processes and Patient Information",
    seoTitle: "Social Media Marketing for Diagnostic Centres in India",
    excerpt:
      "How pathology labs and imaging centres in India can use social media to explain tests, preparation, sample collection and report timelines honestly, keep reports confidential, handle packages and accreditation claims, and plan a month of content.",
    metaDescription:
      "Social media for diagnostic centres in India: test preparation, home collection, honest report timelines, packages, NABL claims and a sample content calendar.",
    author: { name: "Kudozz Strategy Team", role: "Agency Team" },
    publishedAt: "2026-11-13",
    lastReviewed: "November 2026",
    readingTime: "11 min read",
    tags: [
      "social media marketing for diagnostic centres",
      "pathology lab social media",
      "diagnostic centre content calendar",
      "home sample collection marketing",
      "NABL accreditation claims",
    ],
    related: [
      "hospital-social-media-marketing",
      "social-media-management-clinics",
      "social-media-management-multiple-locations",
    ],
    hero: {
      src: "/blog/brand-guides/social-media-marketing-diagnostic-centres.svg",
      alt: "A diagnostic centre patient journey in six steps: book, prepare, sample collection, processing, report delivered and doctor discusses results, with a rule that reports are never interpreted in public",
    },
    body: [
      {
        type: "paragraph",
        text: "At 6.45 am a patient messages your lab's Instagram: 'I'm fasting for the lipid test, can I have black tea?' By noon someone has commented that her report is a day late and 'the sugar value looks wrong'. Meanwhile marketing has drafted a 'Full body check-up, 70% off, today only' creative. A diagnostic centre's social media is mostly about these moments: clear process information, honest timelines and careful handling of anything to do with a result.",
      },
      { type: "heading", text: "Quick answer", id: "quick-answer" },
      {
        type: "paragraph",
        text: "Diagnostic centres should use social media to explain which tests they offer, how to prepare, how sample collection and home collection work, and when reports are realistically ready, with preparation advice written by the centre's own medical team. Never interpret a result publicly, keep reports confidential, state package contents and prices plainly without countdown offers, and claim accreditation only for the tests and location it actually covers.",
      },
      { type: "heading", text: "The rules that apply to a diagnostic centre", id: "rules" },
      {
        type: "paragraph",
        text: "Diagnostic centres sit under several overlapping rules. This is orientation, not legal advice; your legal adviser should confirm which apply to your set-up and state.",
      },
      {
        type: "table",
        headers: ["Rule or body", "What we verified (November 2026)", "What it means for your posts"],
        rows: [
          [
            "Clinical Establishments (Registration and Regulation) Act, 2010",
            "Applies to therapeutic and diagnostic establishments in the states and UTs where it has taken effect or been adopted; other states have their own laws",
            "Registration status is a state matter; check with your state authority",
          ],
          [
            "Clinical Establishments (Central Government) Rules, 2012, rule 9(i)",
            "Registered establishments must display the rates charged for each type of service at a conspicuous place, in the local language and English",
            "Online prices should match the displayed rates exactly",
          ],
          [
            "NMC Guidelines on Ethical Advertising (6 October 2026)",
            "Apply to registered medical practitioners and to hospitals and medical institutions. Explanation II allows factual information on diagnostic facilities and equipment without claims of superiority, guaranteed accuracy or guaranteed outcomes",
            "Pathologists and radiologists who report are RMPs; whether a standalone lab counts as a 'medical institution' is for your legal adviser",
          ],
          [
            "NMC clauses 8.1(i), 8.1(vii) and 8.1(x)",
            "No promoting unnecessary diagnostics or fear-based marketing; no referral or lead-generation fees connected with procuring patients or specimens; no inducements likely to encourage unnecessary diagnostic investigation",
            "No scare hooks, no per-sample commissions, no 'today only' test offers",
          ],
          [
            "NABL accreditation",
            "Voluntary; capabilities not listed in a lab's scope are not covered; use of the NABL symbol is governed by NABL 133",
            "Claim accreditation only for the tests and location in your scope",
          ],
        ],
      },
      {
        type: "paragraph",
        text: "Sources: the Clinical Establishments portal, the Central Government Rules, 2012, the NMC guidelines of 6 October 2026 and NABL's FAQ. Clause 6.4.2 of the IMC Regulations, 2002 also extends the ban on commissions to the referral of specimens for diagnosis. We found no social-media-specific advertising rule for laboratories in the Central Act's portal or the 2012 Rules; your state law may say more.",
        links: [
          { text: "the Clinical Establishments portal", href: CEA_ABOUT },
          { text: "the Central Government Rules, 2012", href: CEA_RULES_2012 },
          { text: "the NMC guidelines of 6 October 2026", href: NMC_AD_GUIDELINES },
          { text: "NABL's FAQ", href: NABL_FAQ },
          { text: "IMC Regulations, 2002", href: IMC_2002 },
        ],
      },
      { type: "heading", text: "Test preparation posts come from your medical team", id: "test-preparation" },
      {
        type: "paragraph",
        text: "Preparation instructions are the most saved and shared posts a lab can publish, and the most dangerous if wrong. Fasting rules, medication questions and timing vary by test and by patient, so every preparation post must be written or approved by your centre's pathologist or medical director, using the same wording as your printed instructions. Never borrow preparation advice from another lab's feed or a general website.",
      },
      {
        type: "template",
        label: "Test preparation post brief (filled in by the medical team)",
        text: "Test name (as on your test menu):\nWho should read this:\nPreparation steps (from our standard instructions, version/date):\nWhat not to change without asking your doctor (for example, regular medicines):\nWhat to bring:\nWhen to arrive / collection window:\nApproved by (name, qualification, registration no.):\nCaption ends with: 'Your doctor's instructions come first. If unsure, call us on [number] before your test.'",
      },
      {
        type: "paragraph",
        text: "Reply to the 6.45 am 'can I have black tea?' message with your approved standard answer for that test if one exists, or a call-back from the lab if it doesn't. Don't improvise, and don't advise on medicines; that is for the patient's doctor.",
      },
      { type: "heading", text: "Sample collection and home collection", id: "sample-collection" },
      {
        type: "paragraph",
        text: "People booking home collection want to know who is coming, when, and how they'll know it's genuine. Content that answers those questions reduces missed slots and anxious calls:",
      },
      {
        type: "list",
        items: [
          "The service area by locality or PIN code, kept current, and what happens if an address is outside it.",
          "Collection windows as they actually run, including Sundays and holidays, and how rescheduling works.",
          "How to recognise your collector: uniform, ID card, the confirmation message they'll receive. Never post staff phone numbers.",
          "What the collector will do: confirm identity, label in front of you, handle the sample as your protocol requires, give a receipt.",
          "Charges for home collection stated plainly, including any minimum order.",
          "A walk-through Reel of your walk-in collection area: queue, token system, accessibility, a private space if available.",
        ],
      },
      { type: "heading", text: "Report turnaround: promise only what your process delivers", id: "turnaround" },
      {
        type: "paragraph",
        text: "'Reports in 6 hours' is a claim. If your own data shows some tests take longer, or that samples arriving after a cut-off go into the next run, say so. Explanation II to clause 3.2 of the NMC guidelines bars guaranteed accuracy and other unverifiable representations about diagnostic facilities, and the same logic applies to timelines. Publish turnaround by test category, with the cut-off times and what can delay a report, and review it whenever your process changes.",
      },
      {
        type: "template",
        label: "Turnaround post (fill from your own lab data)",
        text: "When will my report be ready?\nRoutine blood tests: usually [time] after collection, for samples received by [cut-off].\n[Category]: usually [time].\nSome tests are sent to a partner lab or need repeat checks, which takes longer; we'll tell you at booking.\nReports are shared by [WhatsApp / email / app / collection counter] only to the registered number or email.",
      },
      { type: "heading", text: "Never interpret a report in public", id: "reports-confidential" },
      {
        type: "paragraph",
        text: "Your social team will see people post screenshots of reports and ask 'is this normal?'. The answer is always the same: the lab does not interpret results on social media, and the patient's doctor is the right person to explain them. Hide or remove comments that expose someone's report where your moderation policy allows, and contact the person privately to explain why. Health information is personal data under the Digital Personal Data Protection Act, 2023; its Rules were notified on 14 November 2025 with phased compliance (PIB, 17 November 2025), and clause 7.4 of the NMC guidelines bars sharing patient data that could identify someone publicly.",
        links: [{ text: "PIB, 17 November 2025", href: PIB_DPDP }],
      },
      {
        type: "template",
        label: "Reply to 'is my result normal?'",
        text: "Thanks for asking. We can't interpret reports on social media, and we've hidden your comment to protect your privacy. Please discuss the result with the doctor who ordered the test. If you think there's a problem with the report itself, call our lab on [number] and quote your booking ID, and our team will check it with you.",
      },
      {
        type: "template",
        label: "Reply to a public complaint about a delayed or disputed report",
        text: "We're sorry for the trouble. To protect your privacy we can't discuss reports here. Please call [number] or email [address] with your booking ID so our team can look into it today.",
      },
      {
        type: "paragraph",
        text: "Our guide to community management vs customer support explains how to split routine replies from issues that need the lab team, which for a diagnostic centre should include any comment alleging a wrong result.",
        links: [{ text: "community management vs customer support", href: "/blog/community-management-vs-customer-support" }],
      },
      { type: "heading", text: "Packages and prices", id: "packages-prices" },
      {
        type: "paragraph",
        text: "Health check-up packages are a staple of diagnostic marketing, and the area most likely to cross a line. Clause 8.1(x) bars discounts, limited-period offers, coupons, cashbacks, referral benefits and similar inducements used in a way likely to encourage unnecessary diagnostic investigation, and says any lawful disclosure of charges, packages or fees must be factual, transparent and not misleading.",
      },
      {
        type: "list",
        items: [
          "List every test in a package by name and count, not 'over 80 parameters'.",
          "Show the price that will actually be charged, the same as your displayed rate list, with any home collection charge.",
          "Say who a package is not meant to replace: a doctor's advice on which tests a person needs.",
          "No countdowns, 'today only', 'last few slots' or false comparisons with a made-up 'original' price.",
          "No fear-based hooks ('Is a silent disease growing inside you?'); clause 8.1(i) bars fear-based marketing.",
          "Run package posts past your legal adviser and medical director before publishing.",
        ],
      },
      { type: "heading", text: "Accreditation claims", id: "accreditation" },
      {
        type: "paragraph",
        text: "NABL describes its accreditation as voluntary and says capabilities not listed in a lab's scope are not covered by its accreditation. That shapes how you talk about it. Say which location is accredited and which tests or departments are in scope, and avoid 'fully accredited lab' if only some tests are covered. Use of the NABL symbol is governed by NABL's own policy document, NABL 133, which you'll find in its published documents; follow its current issue exactly and check whether it allows the symbol in social media creatives before using it. NABL also publishes lists of labs facing action for misuse of the symbol.",
        links: [{ text: "its published documents", href: NABL_DOCUMENTS }],
      },
      {
        type: "list",
        items: [
          "Name the accreditation body, the accredited location and the scope; link to the public directory where patients can verify it.",
          "Update or remove posts promptly if scope changes, accreditation is suspended or a branch isn't covered.",
          "Don't imply accreditation guarantees accuracy or makes you better than other labs (Explanation II and clause 8.1(ix)).",
        ],
      },
      { type: "heading", text: "Sample content calendar", id: "content-calendar" },
      {
        type: "paragraph",
        text: "A diagnostic centre's calendar is mostly evergreen process content, refreshed and reposted, plus a few dated items. Here is a four-week sample with three posts a week; adapt it to what your team can produce and the medical team can approve. Our guide to a monthly social media content calendar covers fields and planning meetings.",
        links: [{ text: "a monthly social media content calendar", href: "/blog/monthly-social-media-content-calendar" }],
      },
      {
        type: "table",
        headers: ["Week", "Post 1", "Post 2", "Post 3"],
        rows: [
          ["1", "Preparation explainer for one commonly booked test (medical team's wording)", "Home collection: service area and collection windows", "Turnaround by test category, with cut-offs"],
          ["2", "Walk-through Reel of the walk-in collection area", "'How to recognise our collector' carousel", "Health awareness post tied to a national health day, sourced from MoHFW or WHO"],
          ["3", "Package explainer: every test listed, price as displayed, who should ask their doctor first", "'How you'll receive your report and who can access it'", "Meet the team: the reporting doctors with qualifications and registration numbers"],
          ["4", "Accreditation post with location, scope and how to verify it", "FAQ round-up: parking, timings, payment, insurance paperwork", "Preparation explainer for a second test"],
        ],
      },
      {
        type: "paragraph",
        text: "Health awareness posts should take their facts from primary sources such as the Ministry of Health and Family Welfare or the World Health Organization, never suggest that viewers need a test, and be checked by your medical director. If you run several branches, our guide to managing social media for multiple locations covers branch pages and local information.",
        links: [
          { text: "Ministry of Health and Family Welfare", href: MOHFW },
          { text: "World Health Organization", href: WHO_INDIA },
          { text: "managing social media for multiple locations", href: "/blog/social-media-management-multiple-locations" },
        ],
      },
      { type: "subheading", text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Copying preparation instructions from another lab's Reel.",
          "Advertising 'reports in 4 hours' because it is true for the fastest test.",
          "Replying 'looks normal' to a report screenshot to be helpful.",
          "Putting the NABL symbol on a creative for a branch or test outside the scope.",
          "Paying a partner, doctor or app per sample or per booking.",
        ],
      },
      { type: "heading", text: "Getting started", id: "conclusion" },
      {
        type: "paragraph",
        text: "Start by getting your medical team to sign off standard preparation wording for your ten most booked tests, publish honest turnaround and home collection posts, and agree the reply templates for results and complaints. Check package posts against your displayed rate list and your accreditation scope before anything goes live. For measuring whether the posts lead to bookings, our guide to measuring social media sales for small businesses covers calls, WhatsApp enquiries and 'how did you hear about us'.",
        links: [{ text: "measuring social media sales for small businesses", href: "/blog/measure-social-media-sales-small-business" }],
      },
      {
        type: "paragraph",
        text: "Kudozz's publishing and scheduling support can keep a calendar like this running within an agreed scope. Where the centre's doctors are registered medical practitioners, ask your State Medical Council how clauses 8.1(ii) and 8.1(viii) apply before engaging any agency, and never tie an agency's fee to bookings, patients or samples.",
        links: [{ text: "Kudozz's publishing and scheduling support", href: "/services/social-media-management#publishing" }],
      },
    ],
    faqs: [
      {
        question: "Can a diagnostic centre run discounts on health check-ups?",
        answer:
          "Be careful. The NMC's October 2026 guidelines bar discounts, limited-period offers, coupons, cashbacks and similar inducements used in a way likely to encourage unnecessary diagnostic investigation, and require any disclosure of charges or packages to be factual and transparent. A plain, accurate price list differs from a 'today only' offer. Have your legal adviser review any package promotion before it runs.",
      },
      {
        question: "Can we answer questions about test results in DMs?",
        answer:
          "Don't interpret results over social media. The person managing the inbox can confirm a report has been sent, explain how to access it or arrange a call-back about a suspected error, but what a value means for that person is for their doctor. Keep report details out of public comments and move any conversation about a specific report to a private, verified channel.",
      },
      {
        question: "Can we say we are NABL accredited?",
        answer:
          "Only if it is true for the specific location and tests you are talking about. NABL says capabilities not listed in a lab's scope are not covered by its accreditation, and use of its symbol is governed by NABL 133. State the location and scope, link to NABL's public directory so people can verify it, and update posts if your scope or status changes.",
      },
      {
        question: "Do we need registration under the Clinical Establishments Act?",
        answer:
          "It depends on your state. The Clinical Establishments portal says the Act applies to therapeutic and diagnostic establishments in the states and union territories where it has taken effect or been adopted, while other states have their own laws. Ask your state's registering authority or legal adviser, and keep the registration details you're required to display current on your profile.",
      },
      {
        question: "Can doctors who refer patients promote our lab?",
        answer:
          "No referral arrangement should involve payment. Clause 8.1(vii) of the NMC's 2026 guidelines bars commissions, referral fees and lead-generation fees connected with the referral of patients or specimens, and clause 6.4.2 of the 2002 Regulations says the same about specimens for diagnosis. Doctors also must not endorse services or products under clause 8.1(iv). Keep referring doctors out of your promotional content.",
      },
    ],
  },
];
