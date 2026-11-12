"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { KudozzLogo } from "@/components/graphics/KudozzLogo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState<string | null>(null);
  const pathname = usePathname();

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-ink text-paper transition-shadow duration-300",
        (scrolled || menuOpen) && "shadow-[0_4px_0_0_var(--color-coral)]"
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between transition-[height] duration-300",
          scrolled ? "h-16" : "h-20"
        )}
      >
        <KudozzLogo size="md" dark ariaLabel={`${siteConfig.name} home`} />

        <nav className="hidden items-center gap-6 lg:flex xl:gap-9" aria-label="Primary">
          {siteConfig.nav.map((item) => {
            const isServices = item.href === "/services";
            const active = isServices ? pathname.startsWith("/services") : pathname === item.href;
            const link = (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative inline-flex items-center gap-1 text-sm font-medium tracking-tight text-paper/65 transition-colors hover:text-paper",
                  active && "text-paper"
                )}
              >
                {item.label}
                {isServices && <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true" />}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 h-1.5 w-1.5 rounded-full bg-coral"
                  />
                )}
              </Link>
            );
            if (!isServices) return link;
            // Opens on hover and on keyboard focus (focus-within), so tabbing from "Services" walks into the menu.
            return (
              <div key={item.href} className="group relative">
                {link}
                <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-5 opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="border-[1.5px] border-paper/15 bg-ink py-2 shadow-[6px_6px_0_0_var(--color-coral)]">
                    {siteConfig.servicesMenu.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className={cn(
                            "block px-5 py-2.5 text-sm text-paper/70 transition-colors hover:bg-paper/5 hover:text-lime focus-visible:bg-paper/5 focus-visible:text-lime",
                            pathname === sub.href && "text-paper"
                          )}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                    <li className="mt-1 border-t border-paper/10 pt-1">
                      <Link href="/services" className="block px-5 py-2.5 text-sm font-semibold text-coral hover:text-lime">
                        All services
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={siteConfig.navCta.href} size="md">
            {siteConfig.navCta.label}
          </Button>
        </div>

        <button
          type="button"
          className="flex items-center justify-center p-2 text-paper lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 5rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-y-auto bg-ink text-paper lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-10">
              {siteConfig.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 + i * 0.05 }}
                  className="border-b border-paper/10 py-4"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-black-display text-xs text-coral">0{i + 1}</span>
                    <Link href={item.href} className="font-display text-4xl tracking-tight">
                      {item.label}
                    </Link>
                  </div>
                  {item.href === "/services" && (
                    <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 pl-9 sm:grid-cols-2">
                      {siteConfig.servicesMenu.map((sub) => (
                        <li key={sub.href}>
                          <Link href={sub.href} onClick={() => setMenuOpen(false)} className="text-base text-paper/65 hover:text-lime">
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
              <div className="mt-8 flex flex-col gap-3">
                <Button href={siteConfig.navCta.href} size="lg" className="justify-center">
                  {siteConfig.navCta.label}
                </Button>
                <Button href="/for-creators#apply" variant="outline-light" size="lg" className="justify-center">
                  Join as a Creator
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
