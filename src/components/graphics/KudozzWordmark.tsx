import { cn } from "@/lib/utils";

/**
 * The Kudozz wordmark: tight tracking on a heavy display face, with the
 * trailing double "zz" broken into the accent color as the brand's
 * recurring signature — the same "recognition breaking away" idea as
 * the logomark, carried into the type.
 */
export function KudozzWordmark({ className, accentClassName }: { className?: string; accentClassName?: string }) {
  return (
    <span className={cn("font-display tracking-tight", className)}>
      Kudo
      <span className={cn("text-coral", accentClassName)}>zz</span>
    </span>
  );
}
