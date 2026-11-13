"use client";

import NextLink from "next/link";
import { useRouter } from "next/navigation";
import type { ComponentProps, MouseEvent, TouchEvent } from "react";

type Props = ComponentProps<typeof NextLink>;

/**
 * Drop-in replacement for `next/link` that prefetches on intent (hover / touch) instead of on viewport entry.
 *
 * Next's default prefetches every link as soon as it scrolls into view. On a site with 1,000+ articles, the blog
 * index, footers, related-article lists and in-article links fired dozens of RSC prefetches per page view, and each
 * one is a Vercel CDN request and an ISR read (2026-11: 3.5M ISR reads, 1.4M CDN requests on ~0.1M real visits).
 * Prefetching on hover keeps navigation fast for links a visitor is about to click and drops the rest.
 *
 * Pass `prefetch` explicitly to opt back into Next's own behaviour for a specific link.
 */
export default function Link({ prefetch, onMouseEnter, onTouchStart, href, ...rest }: Props) {
  const router = useRouter();

  if (prefetch !== undefined) {
    return <NextLink href={href} prefetch={prefetch} onMouseEnter={onMouseEnter} onTouchStart={onTouchStart} {...rest} />;
  }

  const target = typeof href === "string" ? href : href.pathname ?? "";
  const isInternal = target.startsWith("/") && !target.startsWith("//");

  const prefetchOnIntent = () => {
    if (isInternal) router.prefetch(target);
  };

  return (
    <NextLink
      href={href}
      prefetch={false}
      onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => {
        prefetchOnIntent();
        onMouseEnter?.(e);
      }}
      onTouchStart={(e: TouchEvent<HTMLAnchorElement>) => {
        prefetchOnIntent();
        onTouchStart?.(e);
      }}
      {...rest}
    />
  );
}
