import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/ui/Container";
import { industries } from "@/content/home";

const chipColors = ["border-ink", "border-coral", "border-violet", "border-ink"];

/** Industries Kudozz plans campaigns for, each linked to its playbook. No client logos until real ones can be shown. */
export function TrustBar() {
  return (
    <section className="bg-paper-dim py-14" aria-labelledby="industries-heading">
      <Container>
        <Reveal>
          <h2 id="industries-heading" className="mb-8 text-xs font-semibold uppercase tracking-[0.22em] text-ink/45">
            Influencer campaigns for brands in
          </h2>
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
