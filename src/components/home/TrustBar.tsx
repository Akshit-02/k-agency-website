import Link from "@/components/ui/Link";
import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/ui/Container";
import { industries } from "@/content/home";

const chipColors = ["border-ink", "border-coral"];

/** Industries section: categories Kudozz plans campaigns for, each linked to its guide. No client logos until real ones can be shown. */
export function TrustBar() {
  return (
    <section className="bg-paper-dim py-24 sm:py-28" aria-labelledby="industries-heading" id="industries">
      <Container>
        <Reveal>
          <h2 id="industries-heading" className="max-w-2xl font-display text-4xl leading-[1.05] tracking-tight text-balance text-ink sm:text-5xl">
            Industries we plan campaigns for.
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-5 mb-10 max-w-2xl text-lg leading-relaxed text-ink/70 text-pretty">
            Kudozz plans creator, UGC and social media work for D2C and e-commerce brands, consumer brands, and
            fintech, app and B2B companies. Each category has its own creators, rules and buying cycle; these guides
            explain how creator marketing works in each one.
          </p>
        </Reveal>
        <ul className="flex flex-wrap gap-3">
          {industries.map((industry, i) => (
            <li key={industry.name}>
              <Reveal delay={i * 0.04}>
                <Link
                  href={industry.href}
                  className={`inline-block border-[1.5px] px-5 py-2.5 font-display text-lg tracking-tight text-ink transition-colors hover:bg-ink hover:text-paper ${chipColors[i % chipColors.length]}`}
                >
                  {industry.name}
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
