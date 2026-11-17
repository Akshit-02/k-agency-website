import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerItem, StaggerReveal } from "@/components/animations/StaggerReveal";

/**
 * "What to look for in an agency" section for service pages: each buyer question sits next to how Kudozz handles
 * it, so the "why Kudozz" case is made through checkable practices rather than claims.
 */
export function ServiceChoosing({
  title,
  intro,
  points,
}: {
  title: string;
  intro: string;
  points: { lookFor: string; kudozz: string }[];
}) {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="choosing-heading">
      <Container>
        <Reveal>
          <h2 id="choosing-heading" className="max-w-3xl font-display text-3xl tracking-tight text-balance text-ink sm:text-4xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70 text-pretty">{intro}</p>
        </Reveal>
        <div className="mt-10 border-[1.5px] border-ink">
          <div className="hidden grid-cols-2 bg-ink text-paper sm:grid" aria-hidden="true">
            <p className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em]">What to look for</p>
            <p className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em]">How Kudozz handles it</p>
          </div>
          <StaggerReveal>
            {points.map((point) => (
              <StaggerItem key={point.lookFor} className="grid border-t border-line first:border-t-0 sm:grid-cols-2 sm:first:border-t">
                <h3 className="px-5 pt-5 font-display text-xl tracking-tight text-ink sm:py-5">{point.lookFor}</h3>
                <p className="px-5 pt-2 pb-5 text-base leading-relaxed text-ink/70 sm:py-5">
                  <span className="sr-only">How Kudozz handles it: </span>
                  {point.kudozz}
                </p>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </Container>
    </section>
  );
}
