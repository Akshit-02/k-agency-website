import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";

/**
 * Sets expectations before a creator applies: what Kudozz looks at, what to put in the (unchanged)
 * application form, how campaign briefs are shared and what brands expect. Copy must stay within the
 * page's own commitments: personal review, free to join, no obligation, no promised campaigns or income.
 */
const lookFor = [
  {
    title: "Audience fit",
    body: "Who watches you, where they live and what they care about. A smaller audience in the right city, language or niche can matter more than a large general one.",
  },
  {
    title: "Content quality and voice",
    body: "Original ideas, clear storytelling, good light and sound, and a recognisable point of view. We look at your recent posts, not just your best one.",
  },
  {
    title: "Genuine engagement",
    body: "Comments and conversations that come from real followers. Bought followers, engagement pods or sudden unexplained spikes count against an application.",
  },
  {
    title: "Professional habits",
    body: "Meeting deadlines, replying to messages, following a brief while keeping your own style, and disclosing paid and gifted content honestly.",
  },
];

const formTips = [
  { field: "Instagram handle", tip: "Your main handle. If you mostly create on YouTube, LinkedIn or as a UGC creator, still add your handle here and put your main links in Other Social Links." },
  { field: "Content niche and city", tip: "Pick the niche closest to most of your content. Your city helps brands planning local or regional campaigns." },
  { field: "Follower range (optional)", tip: "An honest range is enough. You don't need to share exact numbers at this stage." },
  { field: "Other social links (optional)", tip: "Add your YouTube channel, UGC portfolio, website or media kit. Links to work you're proud of help the review more than follower counts." },
  { field: "Short introduction (optional)", tip: "The languages you create in, the formats you're best at, and the kinds of brands you want to work with, or won't work with." },
];

const process = [
  "When a campaign fits your profile, we contact you by email or phone using the details you gave us.",
  "You get the brief before you commit: deliverables, timelines, approval steps, usage rights, disclosure requirements and the fee or exchange on offer.",
  "You decide whether to take it. There's no obligation to accept a brief that doesn't suit you.",
  "Agreed terms are put in writing before you create anything. Drafts, approvals and publishing dates go through one point of contact.",
];

const expectations = [
  { title: "Disclose every paid or gifted collaboration", body: "Follow the platform's paid partnership tools and the advertising rules in your country, such as ASCI's guidelines in India.", href: "/blog/creator-disclosure-guide", label: "Creator disclosure guide" },
  { title: "Keep to agreed deliverables and dates", body: "If something changes, say so early. Brands plan launches around your posting dates.", href: "/blog/creator-brand-brief", label: "How to read a brand brief" },
  { title: "Make only claims you can stand behind", body: "Share your real experience of a product. Don't repeat medical, financial or performance claims you can't verify.", href: "/blog/creator-product-reviews", label: "Reviewing sponsored products" },
  { title: "Share honest results", body: "Send screenshots of your own analytics when asked, without edits or estimates.", href: "/blog/creator-campaign-reporting", label: "Creator campaign reports" },
];

export function CreatorExpectations() {
  return (
    <>
      <section className="py-28 sm:py-36" id="what-we-look-for">
        <Container>
          <SectionHeading
            eyebrow="Before You Apply"
            title="What we look at when you apply."
            description="Every application is reviewed by a person. Follower count is one input, not the deciding one, and nano and micro creators are welcome to apply."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {lookFor.map((item) => (
              <Reveal key={item.title} className="border-[1.5px] border-ink p-8">
                <h3 className="font-display text-2xl tracking-tight">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink/70">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper-dim py-28 sm:py-36" id="application-tips">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Your Application"
              title="What to include, field by field."
              description="The form takes a few minutes. These details make it easier to match you with the right briefs."
            />
            <dl className="divide-y divide-ink/15 border-y border-ink/15">
              {formTips.map((item) => (
                <div key={item.field} className="grid gap-2 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className="font-display text-lg tracking-tight">{item.field}</dt>
                  <dd className="text-base leading-relaxed text-ink/70">{item.tip}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="py-28 sm:py-36" id="how-opportunities-work">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="After You Apply"
                title="How campaign opportunities reach you."
                description="Joining the network doesn't guarantee campaigns. How often you hear from us depends on what brands are planning and how closely your profile fits."
              />
              <ol className="mt-10 space-y-5">
                {process.map((step, i) => (
                  <li key={step} className="flex gap-5">
                    <span className="font-black-display text-2xl leading-none text-coral">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-base leading-relaxed text-ink/75">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <SectionHeading
                eyebrow="Working Together"
                title="What brands expect from creators."
                description="The same standards apply to every campaign, in every market we work in."
              />
              <ul className="mt-10 space-y-6">
                {expectations.map((item) => (
                  <li key={item.title} className="border-l-[3px] border-lime pl-5">
                    <h3 className="font-display text-xl tracking-tight">{item.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-ink/70">{item.body}</p>
                    <Link
                      href={item.href}
                      className="mt-2 inline-block text-sm font-medium text-ink underline decoration-coral decoration-2 underline-offset-4 hover:text-coral"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
