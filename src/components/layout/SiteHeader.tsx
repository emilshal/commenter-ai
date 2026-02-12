"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { FigmaBrandLogo } from "@/components/layout/FigmaBrandLogo";
import { cn } from "@/lib/cn";

type NavItem = { label: string; href: string };

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const nav = useMemo<NavItem[]>(
    () => [
      { label: "Home", href: "/" },
      { label: "Features", href: "/features" },
      { label: "Guide", href: "/partner" },
      { label: "Pricing", href: "/pricing" },
      { label: "Login", href: "/login" },
    ],
    [],
  );

  const isActive = (href: string) => {
    if (href.includes("#")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="relative z-40 w-full px-[24px] pt-[12px]" data-node-id="104:501">
      <div className="relative mx-auto h-[75px] w-full max-w-[1408px] px-[18px] py-[17px] sm:px-[28px] lg:px-[40px]">
        <div
          className="pointer-events-none absolute inset-0 rounded-[20px] backdrop-blur-[10px]"
          style={{
            backgroundImage:
              "linear-gradient(170.9340406028747deg, rgba(255, 255, 255, 0.104) 0%, rgba(255, 255, 255, 0.026) 100%)",
          }}
          data-node-id="104:503"
        />

        <div className="relative flex h-full items-center justify-between gap-[16px] sm:gap-[24px]">
          <Link href="/" className="flex items-center gap-[8px]">
            <FigmaBrandLogo />
          </Link>

          <div className="hidden items-center gap-[20px] lg:flex lg:gap-[28px]">
            <nav className="flex h-[20px] items-center gap-[20px] font-[var(--font-montserrat)] text-[18px] font-medium leading-[20px] tracking-[-0.1504px] text-[#d1d5dc] lg:gap-[28px]">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-[8px] px-[6px] py-[2px]",
                    isActive(item.href)
                      ? "text-[#51a2ff]"
                      : "text-[#d1d5dc]",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/login"
              className="inline-flex h-[36px] shrink-0 items-center justify-center rounded-[4px] bg-[#155dfc] px-[24px] py-[8px] font-[var(--font-montserrat)] text-[14px] font-extrabold leading-[20px] tracking-[-0.1504px] text-white transition-[transform,box-shadow,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#2b7fff] hover:shadow-[0_10px_24px_rgba(43,127,255,0.35)] active:translate-y-0 active:scale-100"
            >
              Get free trial
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            className="inline-flex h-[36px] w-[36px] items-center justify-center rounded-[8px] bg-[rgba(255,255,255,0.06)] text-white lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <svg className="h-[20px] w-[20px]" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div className="mx-auto mt-[10px] w-full max-w-[1408px] lg:hidden">
          <div className="rounded-[16px] border border-[#1e2939] bg-[#111217] p-[14px] shadow-[0_14px_30px_rgba(0,0,0,0.35)]">
            <nav className="flex flex-col gap-[4px]">
              {nav.map((item) => (
                <Link
                  key={`mobile-${item.href}`}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "rounded-[10px] px-[10px] py-[10px] font-[var(--font-montserrat)] text-[16px] font-medium",
                    isActive(item.href) ? "bg-[#155dfc] text-white" : "text-[#d1d5dc]",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-[10px] inline-flex h-[44px] w-full items-center justify-center rounded-[8px] bg-[#155dfc] font-[var(--font-montserrat)] text-[14px] font-extrabold text-white"
            >
              Get free trial
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
