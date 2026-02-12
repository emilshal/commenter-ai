"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { FigmaBrandLogo } from "@/components/layout/FigmaBrandLogo";
import { cn } from "@/lib/cn";

type NavItem = { label: string; href: string };

export function SiteHeader() {
  const pathname = usePathname();
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
      <div className="relative mx-auto h-[75px] w-full max-w-[1408px] px-[28px] py-[17px] lg:px-[40px]">
        <div
          className="pointer-events-none absolute inset-0 rounded-[20px] backdrop-blur-[10px]"
          style={{
            backgroundImage:
              "linear-gradient(170.9340406028747deg, rgba(255, 255, 255, 0.104) 0%, rgba(255, 255, 255, 0.026) 100%)",
          }}
          data-node-id="104:503"
        />

        <div className="relative flex h-full items-center justify-between gap-[24px]">
          <Link href="/" className="flex items-center gap-[8px]">
            <FigmaBrandLogo />
          </Link>

          <div className="flex items-center gap-[20px] lg:gap-[28px]">
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
        </div>
      </div>
    </header>
  );
}
