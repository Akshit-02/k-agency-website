import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { StaggerItem, StaggerReveal } from "@/components/animations/StaggerReveal";
import { cn } from "@/lib/utils";

const differentiators = [
  { title: "Data-informed creator selection", body: "Every shortlist is scored against audience overlap and engagement quality, not follower count." },
  { title: "Strategic campaign planning", body: "Campaigns start with a KPI and a strategy brief — creators are the execution, not the plan." },
  { title: "Authentic creator partnerships", body: "We build relationships with creators, not transactional gigging — it shows in the content." },
  { title: "End-to-end campaign management", body: "One team handles strategy, outreach, contracts, coordination, and reporting." },
  { title: "Transparent communication", body: "You know where your campaign stands at every stage — no black-box status updates." },
  { title: "Performance-focused reporting", body: "Reporting tied to your original goal, with a plain-language debrief, not just a dashboard export." },
];

const themes = [
  { bg: "hover:bg-coral", icon: "text-coral group-hover:text-ink", body: "text-ink/60 group-hover:text-ink/70" },
  { bg: "hover:bg-lime", icon: "text-coral group-hover:text-ink", body: "text-ink/60 group-hover:text-ink/70" },
  { bg: "hover:bg-violet", icon: "text-coral group-hover:text-lime", body: "text-ink/60 group-hover:text-paper/70" },
];

export function WhyChooseUs() {
  return (
    <section className="py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Why Brands Choose Kudozz"
          title="A partner built for brands who take this channel seriously."
        />

        <StaggerReveal className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, i) => {
            const theme = themes[i % themes.length];
            return (
              <StaggerItem
                key={item.title}
                className={cn("group border-[1.5px] border-ink p-8 transition-colors duration-300", theme.bg)}
              >
                <Check className={cn("size-6 transition-colors", theme.icon)} />
                <h3
                  className={cn(
                    "mt-4 font-display text-xl tracking-tight text-ink transition-colors",
                    i % themes.length === 2 && "group-hover:text-paper"
                  )}
                >
                  {item.title}
                </h3>
                <p className={cn("mt-2 text-sm leading-relaxed transition-colors", theme.body)}>{item.body}</p>
              </StaggerItem>
            );
          })}
        </StaggerReveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-sm text-ink/40">
            Credentials, awards, and client results will appear here as they&apos;re finalized — this section is
            structured to add them without a redesign.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
