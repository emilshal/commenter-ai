import Link from "next/link";
import Image from "next/image";
import { FigmaBrandLogo } from "@/components/layout/FigmaBrandLogo";

const columns = [
  {
    title: "Learn",
    links: [
      { label: "Guide", href: "/partner" },
    ],
  },
  {
    title: "Commenter AI",
    links: [
      { label: "Features", href: "/features" },
      { label: "Guide", href: "/partner" },
      { label: "How It Works", href: "/features" },
    ],
  },
  {
    title: "Pricing",
    links: [
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Become a Partner", href: "/partner" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-[#1e2939]">
      <div className="mx-auto w-full max-w-[1408px] px-[12px] pt-[48px] sm:px-[20px] lg:px-[32px]">
        <div className="flex flex-col gap-[28px] px-[8px] pb-[36px] sm:px-[24px]">
          <div className="grid grid-cols-1 gap-[44px] lg:grid-cols-[389.33px_1fr]">
            <div>
              <div className="flex items-center gap-[8px]">
                <FigmaBrandLogo />
              </div>
              <p className="mt-[24px] w-full max-w-[392px] font-[var(--font-inter)] text-[14px] font-normal leading-[20px] text-[#99a1af] sm:mt-[48px]">
                Commenter AI is not affiliated, associated, authorized,
                <br />
                endorsed by, or in any way officially connected with the
                <br />
                LinkedInTM Corporation, registered in the U.S. and other
                <br />
                countries. LinkedInTM is a trademark of the
                <br />
                LinkedInTM Corporation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-[38px] gap-y-[24px] lg:grid-cols-4">
              {columns.map((c) => (
                <div key={c.title}>
                  <div className="font-[var(--font-inter)] text-[14px] font-semibold leading-[20px] text-white">
                    {c.title}
                  </div>
                  <div className="mt-[16px] flex flex-col gap-[12px]">
                    {c.links.map((l) => (
                      <Link
                        key={`${c.title}-${l.href}-${l.label}`}
                        href={l.href}
                        className="font-[var(--font-inter)] text-[14px] font-normal leading-[20px] text-[#99a1af] hover:text-white"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-[16px] sm:gap-[26px] lg:justify-end lg:pr-[12px]">
            <Image src="/footer-featured-ai.png" alt="Featured on There's an AI for that" width={194} height={52} />
            <Image src="/footer-ai-logo.png" alt="Featured on SoftGist" width={214} height={54} />
            <Image src="/footer-tekpon.png" alt="Tekpon Verified" width={58} height={54} />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#171a23]">
        <div className="mx-auto flex w-full max-w-[1408px] flex-wrap items-center gap-[20px] px-[14px] py-[16px] sm:px-[30px] lg:gap-[40px] lg:px-[68px]">
          <div className="font-[var(--font-inter)] text-[14px] font-normal leading-[20px] text-[#99a1af]">
            © 2025 Commenter AI. All rights reserved.
          </div>
          <Link
            href="/privacy"
            className="ml-auto font-[var(--font-inter)] text-[14px] font-normal leading-[20px] text-[#99a1af] hover:text-white"
          >
            Privacy Policy
          </Link>
          <Link href="/pricing" className="font-[var(--font-inter)] text-[14px] font-normal leading-[20px] text-[#99a1af] hover:text-white">
            Pricing
          </Link>
        </div>
      </div>
    </footer>
  );
}
