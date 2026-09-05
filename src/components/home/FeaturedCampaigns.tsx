import { caseStudies } from "@/content/case-studies";
import { CampaignTile } from "@/components/brands/CampaignTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";

export function FeaturedCampaigns() {
  const [first, ...rest] = caseStudies;

  return (
    <section className="py-28 sm:py-36" id="work">
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Featured Campaigns"
            title="Campaigns built for outcomes, not just impressions."
            description="A look at how strategy, creator selection, and reporting come together in practice."
          />
          <Reveal delay={0.15}>
            <Button href="/for-brands#work" variant="secondary">
              Explore Our Work
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8">
          {first && <CampaignTile caseStudy={first} index={0} size="large" />}
          {rest.length > 0 && (
            <div className="grid gap-8 sm:grid-cols-2">
              {rest.map((cs, i) => (
                <CampaignTile key={cs.slug} caseStudy={cs} index={i + 1} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
