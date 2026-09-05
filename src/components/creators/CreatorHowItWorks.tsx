import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { StaggerItem, StaggerReveal } from "@/components/animations/StaggerReveal";

const steps = [
  { n: "01", title: "Apply to Join", body: "Submit your details and content niche — takes less than three minutes.", bg: "bg-ink text-paper" },
  { n: "02", title: "Tell Us About Your Content", body: "Share your platforms, audience, and the kind of brands you want to work with.", bg: "bg-coral text-ink" },
  { n: "03", title: "Get Matched", body: "When a relevant campaign comes up, we'll reach out with the brief and terms.", bg: "bg-violet text-paper" },
  { n: "04", title: "Collaborate", body: "We handle contracts and coordination so you can focus on making great content.", bg: "bg-lime text-ink" },
];

export function CreatorHowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-28 sm:py-36">
      <Container>
        <SectionHeading eyebrow="How It Works" title="From application to your first campaign." align="center" className="mx-auto" />

        <StaggerReveal className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <StaggerItem key={step.n} className={`p-8 ${step.bg}`}>
              <span className="font-black-display text-4xl leading-none opacity-30">{step.n}</span>
              <h3 className="mt-4 font-display text-xl tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-70">{step.body}</p>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
