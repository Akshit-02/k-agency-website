import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/ui/Container";

const marks = ["Studio North", "Palewave", "Grid & Co.", "Glasshaus", "Goodstock", "Goldleaf", "Northfield", "Vessel Labs"];
const chipColors = ["border-ink", "border-coral", "border-violet", "border-ink"];

export function TrustBar() {
  return (
    <section className="bg-paper-dim py-14" aria-label="Categories of brands the agency works with">
      <Container>
        <Reveal>
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.22em] text-ink/45">
            Built for brands across every category
          </p>
        </Reveal>
        <div className="flex flex-wrap gap-3">
          {marks.map((mark, i) => (
            <Reveal key={mark} delay={i * 0.04}>
              <span
                className={`inline-block border-[1.5px] px-5 py-2.5 font-display text-lg tracking-tight text-ink transition-colors hover:bg-ink hover:text-paper ${chipColors[i % chipColors.length]}`}
              >
                {mark}
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
