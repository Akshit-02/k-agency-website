import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";

export type LegalSection = { heading: string; body: string[] };

export function LegalPage({ title, updated, sections }: { title: string; updated: string; sections: LegalSection[] }) {
  return (
    <section className="pt-36 pb-28 sm:pt-44 sm:pb-36">
      <Container className="max-w-3xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-6 font-display text-4xl tracking-tight text-ink sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-ink/45">Last updated: {updated}</p>

        <div className="mt-14 space-y-12">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-2xl tracking-tight text-ink">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-ink/70">
                {section.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
