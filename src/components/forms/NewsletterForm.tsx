"use client";

import { useState, type FormEvent } from "react";
import { Check, ArrowRight } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, honeypot }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="flex items-center gap-2 text-sm font-medium text-lime">
        <Check className="size-4" /> You&apos;re subscribed.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center gap-3 border-b border-paper/25 pb-2 sm:w-auto">
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
      />
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="you@brand.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full bg-transparent text-sm text-paper placeholder:text-paper/40 focus:outline-none sm:w-56"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        aria-label="Subscribe"
        className="flex size-9 shrink-0 items-center justify-center bg-lime text-ink transition-transform hover:scale-105 disabled:opacity-50"
      >
        <ArrowRight className="size-4" />
      </button>
      {status === "error" && <span className="sr-only">Something went wrong, please try again.</span>}
    </form>
  );
}
