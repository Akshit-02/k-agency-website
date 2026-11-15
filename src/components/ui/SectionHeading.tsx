import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "@/components/animations/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
  titleClassName,
  descriptionClassName,
  eyebrowClassName,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
  titleClassName?: string;
  /** Overrides the description colour, e.g. full ink on a coral or lime section where /65 lacks contrast. */
  descriptionClassName?: string;
  eyebrowClassName?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Reveal>
          <Eyebrow dark={dark} className={cn("mb-5", eyebrowClassName)}>
            {eyebrow}
          </Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "font-display text-5xl leading-[1.0] tracking-tight text-balance sm:text-6xl",
            dark ? "text-paper" : "text-ink",
            titleClassName
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className={cn("mt-5 text-lg leading-relaxed text-pretty", dark ? "text-paper/70" : "text-ink/70", descriptionClassName)}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
