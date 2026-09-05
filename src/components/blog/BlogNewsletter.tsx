"use client";

import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";

export function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-ink py-24 text-paper">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
            Get one sharp influencer marketing insight a <em className="italic text-coral">month.</em>
          </h2>
          <p className="mt-3 text-paper/60">No noise, no daily digest — just what&apos;s actually working.</p>

          {status === "success" ? (
            <p className="mt-8 flex items-center justify-center gap-2 font-medium">
              <Check className="size-5 text-lime" /> You&apos;re subscribed.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <label htmlFor="blog-newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="blog-newsletter-email"
                type="email"
                required
                placeholder="you@brand.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-[1.5px] border-paper/25 bg-transparent px-4 py-3 text-center text-base text-paper placeholder:text-paper/35 focus:border-lime focus:outline-none sm:text-left"
              />
              <Button type="submit" disabled={status === "loading"} className="justify-center">
                Subscribe
              </Button>
            </form>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
