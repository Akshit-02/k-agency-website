import { Reveal } from "@/components/animations/Reveal";
import { StaggerItem, StaggerReveal } from "@/components/animations/StaggerReveal";
import { Waveform } from "@/components/graphics/Waveform";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";

/**
 * Every figure here is quoted from its primary source and linked, and is shown as plain text (not StatCounter)
 * so the exact number is in the server-rendered HTML. Re-check the sources before changing a value.
 */
const headline = {
  value: "$37B",
  label: "Projected US creator ad spend in 2025, up 26% on 2024 and growing about four times faster than total media.",
  source: { name: "IAB, November 2025", url: "https://iab.com/news/creator-economy-ad-spend-to-reach-37-billion-in-2025-growing-4x-faster-than-total-media-industry-according-to-iab" },
};

const supportingStats = [
  {
    value: "48%",
    label: "Of US ad buyers who use creators now call them a “must buy”, behind only social media and paid search.",
    source: { name: "IAB, November 2025", url: "https://iab.com/news/creator-economy-ad-spend-to-reach-37-billion-in-2025-growing-4x-faster-than-total-media-industry-according-to-iab" },
    bg: "bg-coral text-ink",
  },
  {
    value: "£966m",
    label: "UK creator partnership revenue in 2025, forecast to pass £1bn in 2026 (excluding paid amplification).",
    source: { name: "IAB UK and IRM", url: "https://www.iabuk.com/news-article/uk-creator-revenue-surpass-ps1bn-first-time-2026" },
    bg: "bg-violet text-paper",
  },
  {
    value: "98%",
    label: "Of the 1,015 influencer ads ASCI investigated in India in 2024–25 needed changes. Disclosure and claims checks matter.",
    source: { name: "ASCI, May 2025", url: "https://www.ascionline.in/wp-content/uploads/2025/05/ASCI-Press-Release-Annual-Complaints-Report-2024-25-1.pdf" },
    bg: "bg-lime text-ink",
  },
];

export function WhyInfluencer() {
  return (
    <section className="clip-notch -mt-1 bg-ink py-32 text-paper sm:py-40">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Eyebrow dark>Why Creator-Led Marketing Wins</Eyebrow>
            <Reveal delay={0.05}>
              <h2 className="mt-7 font-display text-5xl leading-[1.02] tracking-tight text-balance sm:text-6xl">
                Audiences stopped trusting ads. They never stopped trusting <em className="italic text-lime">people.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-paper/65 text-pretty">
                A creator&apos;s audience follows them because they believe what they say. A well-matched brand
                partnership borrows some of that trust, which is why advertisers keep moving budget into creators. The
                same trust is easy to lose, so the campaign has to be planned, disclosed and measured properly.
              </p>
            </Reveal>
            <Reveal delay={0.25} className="mt-14">
              <div className="flex flex-wrap items-end gap-x-8 gap-y-4">
                <p className="font-black-display text-[7.5rem] leading-[0.8] tracking-tight text-coral sm:text-[9rem]">
                  {headline.value}
                </p>
                <div>
                  <Waveform className="mb-2 h-16 w-24 text-lime" />
                  <p className="max-w-[16rem] text-sm text-paper/60">
                    {headline.label}{" "}
                    <a href={headline.source.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-paper">
                      {headline.source.name}
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <StaggerReveal className="grid content-start gap-4">
            {supportingStats.map((stat) => (
              <StaggerItem key={stat.value} className={`p-8 ${stat.bg}`}>
                <p className="font-black-display text-4xl tracking-tight sm:text-5xl">{stat.value}</p>
                <p className="mt-3 max-w-sm text-sm opacity-80">{stat.label}</p>
                <a
                  href={stat.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs underline underline-offset-2 opacity-80 hover:opacity-100"
                >
                  Source: {stat.source.name}
                </a>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </Container>
    </section>
  );
}
