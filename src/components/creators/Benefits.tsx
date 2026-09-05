import { Sparkles, Users, MessageCircle, Layers } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { StaggerItem, StaggerReveal } from "@/components/animations/StaggerReveal";

const benefits = [
  { icon: Sparkles, title: "Work with exciting brands", body: "Access campaigns from brands across fashion, beauty, tech, finance, and more — matched to your niche.", bg: "bg-coral text-ink" },
  { icon: Layers, title: "Relevant opportunities only", body: "We match you to campaigns that fit your content and audience, not a generic mass outreach blast.", bg: "bg-violet text-paper" },
  { icon: MessageCircle, title: "Clear, professional communication", body: "Briefs, timelines, and payment terms are clear upfront — no chasing anyone for answers.", bg: "bg-lime text-ink" },
  { icon: Users, title: "Room to grow long-term", body: "Many of our best partnerships start as a single campaign and grow into ongoing ambassador work.", bg: "bg-ink text-paper" },
];

export function Benefits() {
  return (
    <section className="py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Why Join"
          title="Built for creators who treat this like a craft."
          description="We don't promise overnight riches. We promise real opportunities, handled professionally."
        />

        <StaggerReveal className="mt-14 grid gap-5 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, body, bg }) => (
            <StaggerItem key={title} className={`p-8 ${bg}`}>
              <Icon className="size-7" />
              <h3 className="mt-5 font-display text-2xl tracking-tight">{title}</h3>
              <p className="mt-3 max-w-sm text-base leading-relaxed opacity-70">{body}</p>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
