"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return (
      <div className="relative min-h-dvh w-full overflow-x-auto bg-[#0f0f0f]">
        <div className="flex min-h-dvh flex-col">
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-dvh w-full overflow-x-auto bg-[#0a0a0a] px-[12px] sm:px-[20px] lg:px-[32px]">
      <div className="flex min-h-dvh flex-col items-center gap-[24px]">
        <div className="h-px w-full max-w-[1376px] shrink-0 rounded-[20px] backdrop-blur-[7px]" />
        <SiteHeader />
        {children}
        <SiteFooter />
      </div>
    </div>
  );
}
