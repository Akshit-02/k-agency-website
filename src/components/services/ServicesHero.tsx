import { services, SERVICE_PILLARS } from "@/content/services";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
      <p
        aria-hidden="true"
        className="font-black-display pointer-events-none absolute -top-[3vw] left-1/2 w-[140vw] -translate-x-1/2 select-none text-center text-[20vw] leading-none tracking-tight text-ink/[0.04] sm:text-[13vw]"
      >
        SERVICES
      </p>
      <Container className="relative">
        <Reveal>
          <Eyebrow>Services</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-3xl font-display text-6xl leading-[0.98] tracking-tight text-balance text-ink sm:text-8xl">
            {/* The descriptive phrase leads the H1 for search; the slogan stays the visual headline (as on /for-brands). */}
            <span className="mb-5 block font-sans text-sm font-semibold uppercase tracking-[0.16em] text-ink/70 sm:text-base">
              Social media, influencer marketing and UGC services
              <span className="sr-only">:</span>
            </span>
            Three service areas. One coordinated <em className="italic text-coral">team.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/65 text-pretty">
            Social media management for your own accounts, influencer marketing from strategy and creator discovery
            to paid, barter, gifting and affiliate campaigns, and UGC your brand owns. {services.length} services in
            all. Use one, or combine them into one plan.
          </p>
        </Reveal>
        <Reveal delay={0.22} className="mt-8 flex flex-wrap gap-3">
          {SERVICE_PILLARS.map((pillar) => (
            <a
              key={pillar.id}
              href={`#${pillar.id}`}
              className="border-[1.5px] border-ink px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              {pillar.name}
            </a>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
