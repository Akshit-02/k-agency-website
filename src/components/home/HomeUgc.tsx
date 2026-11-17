import Link from "@/components/ui/Link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerItem, StaggerReveal } from "@/components/animations/StaggerReveal";
import { IconTile, type PictogramName } from "@/components/icons/Pictogram";

/**
 * Homepage UGC section. Every deliverable here is part of /services/ugc-content-production or /services/ugc-campaigns.
 * Keep the commissioned-vs-organic note: Kudozz produces paid creator content, which must never be presented as an
 * unprompted customer review.
 */
const deliverables: { icon: PictogramName; title: string; body: string }[] = [
  {
    icon: "strategy",
    title: "UGC strategy and briefs",
    body: "Angles, hooks and talking points worked out from your product, your customers' questions and where each video will run.",
  },
  {
    icon: "match",
    title: "UGC creator sourcing",
    body: "Creators cast for on-camera delivery, setting and fit with your audience. You approve the casting before products ship.",
  },
  {
    icon: "video",
    title: "Product demos and short-form video",
    body: "Unboxings, how-to clips, problem-and-solution videos and testimonial-style pieces, filmed in a natural, first-person style.",
  },
  {
    icon: "production",
    title: "Ad-ready creative",
    body: "Hook, length and aspect-ratio variations for each placement, so your performance team has creative to test.",
  },
  {
    icon: "shield",
    title: "Usage rights agreed up front",
    body: "Where and for how long you can use each video is settled before production and logged with the delivered files.",
  },
];

const accents = ["coral", "lime"] as const;

export function HomeUgc() {
  return (
    <section className="bg-paper-dim py-28 sm:py-36" id="ugc-marketing">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="UGC Marketing"
              title="UGC marketing that turns authentic creator content into brand assets."
              description="Brands use UGC videos because they look and sound like a real person talking about a product, not an advert. Kudozz works as a UGC content creation agency: we brief UGC creators across India, manage the shoots and deliver edited videos your brand can run in ads, on product pages, on marketplaces and in its own feed."
            />

            <Reveal delay={0.1}>
              <div className="mt-10 border-[1.5px] border-ink bg-paper p-7 shadow-[6px_6px_0_0_var(--color-ink)]">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/70">Commissioned, not collected</p>
                <p className="mt-3 text-base leading-relaxed text-ink/80">
                  &ldquo;UGC&rdquo; originally meant content customers post on their own. Most UGC used in marketing
                  today is commissioned: brands pay creators to make it in that same style. That&apos;s what Kudozz
                  produces. It&apos;s paid creator content, so it should be treated as advertising and never passed
                  off as an unprompted customer review.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="mt-10 flex flex-wrap gap-3">
              <Button href="/services/ugc-content-production">See UGC Content Creation</Button>
              <Button href="/services/ugc-campaigns" variant="secondary">
                Ongoing UGC Campaigns
              </Button>
            </Reveal>
          </div>

          <div>
            <StaggerReveal className="grid gap-4">
              {deliverables.map((item, i) => (
                <StaggerItem key={item.title} className="flex items-start gap-5 border-b-[1.5px] border-ink/15 pb-6 last:border-b-0">
                  <IconTile name={item.icon} accent={accents[i % accents.length]} size="sm" />
                  <div>
                    <h3 className="font-display text-2xl tracking-tight text-ink">{item.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-ink/70">{item.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-sm leading-relaxed text-ink/70">
                Planning a budget or a first brief? Read{" "}
                <Link href="/blog/what-is-ugc-marketing" className="font-medium text-ink underline decoration-coral decoration-2 underline-offset-4 hover:text-coral-deep">
                  how UGC marketing works for brands
                </Link>{" "}
                and{" "}
                <Link href="/blog/ugc-content-cost-india" className="font-medium text-ink underline decoration-coral decoration-2 underline-offset-4 hover:text-coral-deep">
                  what UGC videos cost in India
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
