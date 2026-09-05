/**
 * The Kudozz logomark — a deconstructed "K": a solid spine with its two
 * arms broken away and offset, reading as a moment of recognition
 * radiating outward (the "kudos" in Kudozz) rather than a literal
 * megaphone, badge, or handshake. The spine takes `currentColor` so it
 * inherits whatever text color it's placed in; the arms take a
 * dedicated `accent` so the mark stays two-tone on any background.
 *
 * Wrap with a `group` ancestor to get the arms nudge apart on hover.
 */
export function KudozzMark({
  className,
  accent = "var(--color-coral)",
}: {
  className?: string;
  accent?: string;
}) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect x="7" y="4" width="5" height="24" rx="1" fill="currentColor" />
      <polygon
        points="14,15 24,5 27,5 17,15"
        fill={accent}
        className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <polygon
        points="14,17 24,27 27,27 17,17"
        fill={accent}
        className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:translate-y-0.5"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </svg>
  );
}
