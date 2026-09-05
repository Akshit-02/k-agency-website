import { Reveal } from "@/components/animations/Reveal";
import { StaggerItem, StaggerReveal } from "@/components/animations/StaggerReveal";
import { StatCounter } from "@/components/ui/StatCounter";
import { Waveform } from "@/components/graphics/Waveform";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";

const supportingStats = [
  { value: "3.4x", label: "Higher engagement than brand-produced content", bg: "bg-coral text-ink" },
  { value: "61%", label: "Of shoppers acted on a creator recommendation this year", bg: "bg-violet text-paper" },
  { value: "76%", label: "Say creator content feels more authentic than ads", bg: "bg-lime text-ink" },
];

export function WhyInfluencer() {
  return (
    <section className="clip-notch -mt-1 bg-ink py-32 text-paper sm:py-40">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Eyebrow dark>Why Creator-Led Marketing Wins</Eyebrow>
            <Reveal delay={0.05}>
              <p className="mt-7 font-display text-5xl leading-[1.02] tracking-tight text-balance sm:text-6xl">
                Audiences stopped trusting ads. They never stopped trusting <em className="italic text-lime">people.</em>
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-paper/65 text-pretty">
                A creator&apos;s audience follows them because they believe what they say. That trust doesn&apos;t
                transfer to a banner ad — but it does transfer to a well-matched brand partnership, which is why
                creator content consistently outperforms traditional advertising on every trust metric that matters.
              </p>
            </Reveal>
            <Reveal delay={0.25} className="mt-14">
              <div className="flex items-end gap-8">
                <p className="font-black-display text-[7.5rem] leading-[0.8] tracking-tight text-coral sm:text-[9rem]">
                  <StatCounter value="92%" />
                </p>
                <div>
                  <Waveform className="mb-2 h-16 w-24 text-lime" />
                  <p className="max-w-[14rem] text-sm text-paper/60">
                    Trust recommendations from creators over traditional celebrity endorsements.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <StaggerReveal className="grid content-start gap-4">
            {supportingStats.map((stat) => (
              <StaggerItem key={stat.label} className={`p-8 ${stat.bg}`}>
                <p className="font-black-display text-4xl tracking-tight sm:text-5xl">
                  <StatCounter value={stat.value} />
                </p>
                <p className="mt-3 max-w-sm text-sm opacity-70">{stat.label}</p>
              </StaggerItem>
            ))}
            <p className="pt-2 text-xs text-paper/35">
              Figures reflect widely cited creator-marketing industry benchmarks, presented as directional context.
            </p>
          </StaggerReveal>
        </div>
      </Container>
    </section>
  );
}
