import { testimonials } from "@/content/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

const rotations = ["rotate-2", "-rotate-2"];
const cardBg = ["bg-lime text-ink", "bg-coral text-ink"];

export function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section className="py-28 sm:py-36">
      <Container>
        <SectionHeading eyebrow="What Brands Say" title="Trust, built one campaign at a time." />

        <div className="mt-16 grid gap-16">
          <Reveal className="border-l-[6px] border-coral pl-8 sm:pl-12">
            <p className="font-display text-4xl italic leading-[1.15] tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl">
              &ldquo;{featured.quote}&rdquo;
            </p>
            <div className="mt-8">
              <p className="font-semibold text-ink">{featured.name}</p>
              <p className="text-sm text-ink/50">
                {featured.role}, {featured.company}
              </p>
              {featured.isSample && (
                <p className="mt-2 text-xs uppercase tracking-wide text-ink/40">Sample Testimonial</p>
              )}
            </div>
          </Reveal>

          <div className="grid gap-10 sm:grid-cols-2">
            {rest.map((t, i) => (
              <Reveal key={t.company} delay={0.1 + i * 0.08}>
                <div
                  className={cn(
                    "border-[1.5px] border-ink p-8 shadow-[6px_6px_0_0_var(--color-ink)] transition-transform hover:-translate-y-1 sm:p-10",
                    rotations[i % rotations.length],
                    cardBg[i % cardBg.length]
                  )}
                >
                  <span className="font-black-display text-4xl leading-none opacity-30">&ldquo;</span>
                  <p className="mt-2 font-display text-xl leading-snug tracking-tight text-pretty sm:text-2xl">
                    {t.quote}
                  </p>
                  <div className="mt-6">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm opacity-60">
                      {t.role}, {t.company}
                    </p>
                    {t.isSample && <p className="mt-2 text-xs uppercase tracking-wide opacity-50">Sample Testimonial</p>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
