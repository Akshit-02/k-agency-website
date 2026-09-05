import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";

const pairs = [
  { problem: "Finding influencers who actually reach your customer", solution: "Audience-overlap screening before any name reaches your shortlist" },
  { problem: "Fake followers and inflated engagement", solution: "Authenticity and fraud checks built into every creator audit" },
  { problem: "Engagement that looks good but converts nothing", solution: "Scoring weighted toward your specific campaign KPI, not vanity metrics" },
  { problem: "Managing a dozen creators across a dozen inboxes", solution: "One point of contact handling outreach, contracts, and approvals" },
  { problem: "No clear way to measure campaign ROI", solution: "Unified reporting tied to the goal we agreed on at kickoff" },
  { problem: "Coordinating deliverables, usage rights, and deadlines", solution: "A managed production calendar with built-in approval checkpoints" },
  { problem: "Scaling from one campaign to an always-on program", solution: "Ambassador program design built for long-term, repeatable results" },
];

export function ProblemsSolved() {
  return (
    <section className="bg-ink py-28 text-paper sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Problems We Solve"
          title="The influencer marketing problems that quietly kill ROI."
          description="Most campaigns don't fail because influencer marketing doesn't work. They fail because of the operational gaps around it."
          dark
        />

        <div className="mt-14 border-t-[1.5px] border-paper/20">
          {pairs.map((pair, i) => (
            <Reveal key={pair.problem} delay={i * 0.04}>
              <div className="group grid gap-3 border-b-[1.5px] border-paper/20 py-7 transition-colors duration-300 hover:bg-paper/5 sm:grid-cols-[1fr_auto_1.1fr] sm:items-center sm:gap-8 sm:px-4">
                <p className="text-base text-paper/40 line-through decoration-paper/25 sm:text-lg">{pair.problem}</p>
                <ArrowRight className="hidden size-6 shrink-0 text-coral transition-transform duration-300 group-hover:translate-x-1 sm:block" />
                <p className="font-display text-xl tracking-tight text-paper sm:text-2xl">{pair.solution}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
