import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

/**
 * Visible breadcrumb trail. Always render this alongside `breadcrumbSchema`
 * with the exact same items — schema should describe what's actually on
 * the page, not an invented hierarchy.
 */
export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-xs uppercase tracking-wide text-ink/45">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link href={item.href} className="transition-colors hover:text-ink">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className={isLast ? "text-ink/70" : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronRight className="size-3" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
