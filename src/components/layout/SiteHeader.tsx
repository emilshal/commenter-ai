"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type NavItem = { label: string; href: string };

export function SiteHeader() {
  const nav = useMemo<NavItem[]>(
    () => [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Blog", href: "/blog" },
      { label: "About", href: "/about" },
      { label: "Privacy", href: "/privacy" },
    ],
    [],
  );

  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/6 ring-1 ring-white/10">
              <span className="h-3 w-3 rounded-sm bg-indigo-400" />
            </span>
            <span>SaaS</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className="text-sm text-white/80 hover:text-white">
            Sign in
          </Link>
          <Button href="/register" size="sm">
            Get started
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white ring-1 ring-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex flex-col gap-1.5">
            <span className={cn("h-0.5 w-5 bg-white transition", open && "translate-y-2 rotate-45")} />
            <span className={cn("h-0.5 w-5 bg-white transition", open && "opacity-0")} />
            <span className={cn("h-0.5 w-5 bg-white transition", open && "-translate-y-2 -rotate-45")} />
          </div>
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-white/10 bg-black/60 backdrop-blur md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="py-4">
          <div className="flex flex-col gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-3">
              <Button href="/login" variant="secondary" size="sm" className="flex-1">
                Sign in
              </Button>
              <Button href="/register" size="sm" className="flex-1">
                Get started
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
