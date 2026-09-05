import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { BrandInquiryForm } from "@/components/brands/BrandInquiryForm";
import { siteConfig } from "@/config/site";

export function InquirySection() {
  return (
    <section id="inquiry" className="scroll-mt-24 bg-ink py-28 text-paper sm:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow dark>Start a Conversation</Eyebrow>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-5xl leading-[1.0] tracking-tight text-balance sm:text-6xl">
                Tell us about your <em className="italic text-coral">brand.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-paper/65">
                No automated replies, no sales script. A member of our strategy team reads every inquiry personally
                and responds within one business day.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 inline-flex items-center gap-3 bg-lime px-5 py-3 text-ink">
                <span className="font-black-display text-2xl leading-none">24h</span>
                <span className="text-xs font-medium uppercase leading-tight tracking-wide">
                  Average
                  <br />
                  response time
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-sm text-paper/50">
                Prefer email? Reach us directly at{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="font-medium text-paper underline decoration-coral decoration-2 underline-offset-4">
                  {siteConfig.contact.email}
                </a>
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="border-[1.5px] border-paper/15 bg-paper p-8 shadow-[10px_10px_0_0_var(--color-coral)] sm:p-12">
            <BrandInquiryForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
