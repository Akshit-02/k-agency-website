import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { BroadcastRings } from "@/components/graphics/BroadcastRings";
import { homeInquiryHref } from "@/content/home";

export function FinalCTA() {
  return (
    <section className="clip-notch relative -my-1 overflow-hidden bg-coral py-32 text-ink sm:py-40">
      <BroadcastRings
        className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] text-ink/15 sm:h-[36rem] sm:w-[36rem]"
      />
      <Container className="relative">
        <div className="max-w-3xl">
          <Reveal>
            <p className="font-black-display text-xs tracking-[0.14em] text-ink/60">LET&apos;S TALK</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-5xl leading-[1.0] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Ready to plan your next creator campaign?
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink/70">
              Tell us about your brand, your customers and what the campaign needs to achieve. We&apos;ll come back
              with a plan and a point of view before we ever mention a creator name.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-10 flex flex-wrap gap-4">
            <Button href={homeInquiryHref("bottom")} size="lg" variant="dark" magnetic>
              Plan Your Campaign
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Talk to Kudozz
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
