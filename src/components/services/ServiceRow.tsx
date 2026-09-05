"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/content/services";
import { ServiceMotif } from "@/components/graphics/ServiceMotif";
import { cn } from "@/lib/utils";

const rowThemes = [
  { bg: "bg-coral", text: "text-ink", sub: "text-ink/60", dot: "bg-ink" },
  { bg: "bg-violet", text: "text-paper", sub: "text-paper/60", dot: "bg-lime" },
  { bg: "bg-lime", text: "text-ink", sub: "text-ink/60", dot: "bg-coral" },
  { bg: "bg-ink", text: "text-paper", sub: "text-paper/60", dot: "bg-coral" },
];

export function ServiceRow({ service, index = 0 }: { service: Service; index?: number }) {
  const [open, setOpen] = useState(false);
  const theme = rowThemes[index % rowThemes.length];

  return (
    <div
      className={cn(
        "group relative overflow-hidden border-b-[1.5px] border-ink py-9 transition-colors duration-300 first:border-t-[1.5px] sm:py-10",
        open ? theme.bg : "bg-transparent"
      )}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span
        aria-hidden="true"
        className="font-black-display pointer-events-none absolute -top-2 right-4 select-none text-[7rem] leading-none text-ink/[0.05] transition-colors duration-300 group-hover:text-ink/10 sm:text-[9rem]"
      >
        {service.index}
      </span>

      <div className="relative flex w-full items-center justify-between gap-6 px-1">
        <div className="flex items-baseline gap-5 sm:gap-8">
          <span className={cn("font-black-display text-sm transition-colors", open ? theme.sub : "text-ink/35")}>
            {service.index}
          </span>
          <h3 className="m-0">
            <Link
              href={`/services/${service.slug}`}
              className={cn(
                "font-display text-3xl tracking-tight transition-colors sm:text-4xl hover:underline decoration-2 underline-offset-4",
                open ? theme.text : "text-ink"
              )}
            >
              {service.name}
            </Link>
          </h3>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={`service-row-panel-${service.slug}`}
          aria-label={`${open ? "Hide" : "Show"} a quick preview of ${service.name}`}
          className="flex items-center gap-6"
        >
          <ServiceMotif
            motif={service.motif}
            className={cn("hidden h-10 w-10 transition-colors sm:block", open ? theme.text : "text-ink/70")}
          />
          <ArrowRight
            className={cn(
              "size-6 shrink-0 transition-transform duration-300",
              open ? `${theme.text} translate-x-1 -translate-y-1 rotate-45` : "text-ink/40"
            )}
          />
        </button>
      </div>

      <motion.div
        id={`service-row-panel-${service.slug}`}
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden"
      >
        <div className={cn("grid gap-6 px-1 pt-7 sm:grid-cols-[2fr_1fr] sm:pl-[3.25rem]", theme.text)}>
          <div>
            <p className="max-w-lg text-base leading-relaxed opacity-80">{service.description}</p>
            <Link
              href={`/services/${service.slug}`}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold underline decoration-2 underline-offset-4"
            >
              Explore {service.name} <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
          <ul className="space-y-2">
            {service.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm opacity-70">
                <span className={cn("mt-2 size-1.5 shrink-0 rounded-full", theme.dot)} />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
