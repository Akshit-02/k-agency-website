"use client";

import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import Link from "@/components/ui/Link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CommonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark" | "bright" | "bright-dark" | "ghost" | "outline-light";
  size?: "md" | "lg";
  className?: string;
  icon?: boolean;
  magnetic?: boolean;
};

type ButtonAsLink = CommonProps & {
  href: string;
  /** Off-site link: renders a plain <a> that opens in a new tab with rel="noopener noreferrer". */
  external?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  type?: never;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  type?: "button" | "submit";
  disabled?: boolean;
};

const base =
  "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden font-semibold tracking-tight transition-colors duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants = {
  primary: "bg-coral text-ink hover:text-paper",
  secondary: "bg-transparent text-ink border-[1.5px] border-ink hover:text-paper",
  dark: "bg-ink text-paper hover:text-ink",
  bright: "bg-lime text-ink hover:text-paper",
  /** Lime on ink backgrounds: fills with paper on hover so the button never disappears into the section. */
  "bright-dark": "bg-lime text-ink",
  "outline-light": "bg-transparent text-paper border-[1.5px] border-paper/50 hover:text-ink",
  ghost: "bg-transparent text-ink hover:text-coral-deep px-0",
};

const fills = {
  primary: "bg-ink",
  secondary: "bg-ink",
  dark: "bg-lime",
  bright: "bg-ink",
  "bright-dark": "bg-paper",
  "outline-light": "bg-paper",
  ghost: "",
};

const sizes = {
  md: "text-sm px-6 py-3",
  lg: "text-base px-8 py-4",
};

function useMagnetic(strength = 18) {
  const ref = useRef<HTMLElement | null>(null);
  const [style, setStyle] = useState({ x: 0, y: 0 });

  function onPointerMove(e: ReactPointerEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * strength;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * strength;
    setStyle({ x, y });
  }

  function onPointerLeave() {
    setStyle({ x: 0, y: 0 });
  }

  return { ref, style, onPointerMove, onPointerLeave };
}

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "primary", size = "md", className, icon = true, magnetic = false } = props;
  const magneticProps = useMagnetic();

  const classes = cn(
    base,
    variant !== "ghost" && sizes[size],
    variants[variant],
    className
  );

  const content = (
    <>
      {variant !== "ghost" && (
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-0 origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100",
            fills[variant]
          )}
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      {icon && (
        <ArrowUpRight
          className="relative z-10 size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  const motionProps = magnetic
    ? {
        onPointerMove: magneticProps.onPointerMove,
        onPointerLeave: magneticProps.onPointerLeave,
        animate: { x: magneticProps.style.x, y: magneticProps.style.y },
        transition: { type: "spring" as const, stiffness: 150, damping: 12, mass: 0.4 },
      }
    : {};

  if ("href" in props && props.href) {
    const { href, external, onClick } = props as ButtonAsLink;
    return (
      <motion.div className="inline-block" ref={magnetic ? (magneticProps.ref as never) : undefined} {...motionProps}>
        {external ? (
          <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={classes}>
            {content}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : (
          <Link href={href} onClick={onClick} className={classes}>
            {content}
          </Link>
        )}
      </motion.div>
    );
  }

  const { onClick, type = "button", disabled } = props as ButtonAsButton;
  return (
    <motion.button
      ref={magnetic ? (magneticProps.ref as never) : undefined}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
