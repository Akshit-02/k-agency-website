import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border-[1.5px] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em]",
        dark ? "border-paper/30 text-paper/80" : "border-ink text-ink",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-coral" aria-hidden="true" />
      {children}
    </span>
  );
}
