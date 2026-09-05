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
            Eight services. One coordinated <em className="italic text-coral">engine.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/65 text-pretty">
            Use one service or all eight. Each is designed to work independently, and to compound when combined
            into a full campaign program.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
