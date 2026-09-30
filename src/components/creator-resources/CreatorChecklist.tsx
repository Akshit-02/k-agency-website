"use client";

import { useId, useMemo, useSyncExternalStore } from "react";
import { CHECKLISTS, type ChecklistId } from "@/components/creator-resources/checklists";

/**
 * Interactive checklist used by /blog/creator-operations-checklist and
 * /blog/creator-business-continuity. Ticks are kept only in the reader's own
 * browser (localStorage, wrapped in try/catch so private windows and blocked
 * storage still work for the session). Nothing is sent anywhere.
 */

const listeners = new Set<() => void>();
const memory = new Map<string, string>();

function read(key: string): string {
  try {
    return window.localStorage.getItem(key) ?? memory.get(key) ?? "[]";
  } catch {
    return memory.get(key) ?? "[]";
  }
}

function write(key: string, value: string) {
  memory.set(key, value);
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Storage unavailable: keep the in-memory copy for this session.
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function CreatorChecklist({ checklist }: { checklist: ChecklistId }) {
  const id = useId();
  const config = CHECKLISTS[checklist];
  const storageKey = `kudozz-checklist-${checklist}`;
  const raw = useSyncExternalStore(
    subscribe,
    () => read(storageKey),
    () => "[]"
  );
  const checked = useMemo(() => {
    try {
      const parsed: unknown = JSON.parse(raw);
      return new Set(Array.isArray(parsed) ? parsed.filter((v): v is string => typeof v === "string") : []);
    } catch {
      return new Set<string>();
    }
  }, [raw]);

  const total = config.groups.reduce((sum, g) => sum + g.items.length, 0);
  const done = config.groups.reduce((sum, g) => sum + g.items.filter((item) => checked.has(item.id)).length, 0);

  const toggle = (itemId: string) => {
    const next = new Set(checked);
    if (next.has(itemId)) next.delete(itemId);
    else next.add(itemId);
    write(storageKey, JSON.stringify([...next]));
  };

  return (
    <section
      aria-labelledby={`${id}-title`}
      className="not-prose border-[1.5px] border-ink bg-paper-dim px-5 py-7 text-base shadow-[6px_6px_0_0_var(--color-coral)] sm:px-8"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 id={`${id}-title`} className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
          {config.title}
        </h3>
        <p className="text-sm font-semibold text-ink" aria-live="polite">
          {done} of {total} in place
        </p>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-ink/60">{config.intro}</p>

      <div className="mt-6 space-y-7">
        {config.groups.map((group) => (
          <fieldset key={group.title}>
            <legend className="text-xs font-semibold uppercase tracking-wide text-ink/50">{group.title}</legend>
            <ul className="mt-3 space-y-3">
              {group.items.map((item) => {
                const inputId = `${id}-${item.id}`;
                return (
                  <li key={item.id} className="flex gap-3">
                    <input
                      id={inputId}
                      type="checkbox"
                      checked={checked.has(item.id)}
                      onChange={() => toggle(item.id)}
                      className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-coral)]"
                    />
                    <label htmlFor={inputId} className="text-sm leading-relaxed text-ink">
                      <span className="font-semibold">{item.label}</span>
                      <span className="block text-ink/60">{item.detail}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </fieldset>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t-[1.5px] border-ink/15 pt-5">
        <p className="text-xs leading-relaxed text-ink/50">
          Saved in this browser only. Nothing is sent to Kudozz.
        </p>
        {done > 0 && (
          <button
            type="button"
            onClick={() => write(storageKey, "[]")}
            className="text-xs font-semibold text-ink underline underline-offset-4 hover:text-coral-dim"
          >
            Clear ticks
          </button>
        )}
      </div>
    </section>
  );
}
