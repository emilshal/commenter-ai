import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative min-h-dvh w-full bg-[#0a0a0a] px-[32px]">
      <div className="flex min-h-dvh flex-col items-center gap-[24px]">
        {/* Figma node 61:619: 1376x1 with radius 20 + blur 7 */}
        <div className="h-px w-[1376px] shrink-0 rounded-[20px] backdrop-blur-[7px]" />
        <SiteHeader />
        {children}
        <SiteFooter />
      </div>
    </div>
  );
}
