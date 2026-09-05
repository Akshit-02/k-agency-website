import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { CreatorApplicationForm } from "@/components/creators/CreatorApplicationForm";
import { siteConfig } from "@/config/site";

export function ApplySection() {
  return (
    <section id="apply" className="scroll-mt-24 bg-violet py-28 text-paper sm:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow dark>Join the Network</Eyebrow>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-5xl leading-[1.0] tracking-tight text-balance sm:text-6xl">
                Apply to join our <em className="italic text-lime">creator network.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-paper/65">
                We review every application personally. There&apos;s no cost to join, and no obligation until a
                campaign is actually a fit for you.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 text-sm text-paper/50">
                Questions first? Email{" "}
                <a href={`mailto:${siteConfig.contact.creatorEmail}`} className="font-medium text-paper underline decoration-lime decoration-2 underline-offset-4">
                  {siteConfig.contact.creatorEmail}
                </a>
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="border-[1.5px] border-ink bg-paper p-8 shadow-[10px_10px_0_0_var(--color-lime)] sm:p-12">
            <CreatorApplicationForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
