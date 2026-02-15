import Link from "next/link";

const columns = [
  {
    title: "Learn",
    links: [
      { label: "Blog", href: "/partner" },
    ],
  },
  {
    title: "Commenter.ai",
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
      { label: "Billing & Trust", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/partner" },
      { label: "Contact Us", href: "/partner" },
      { label: "Become a Partner", href: "/partner" },
    ],
  },
] as const;

const footerAssets = {
  image1: "https://www.figma.com/api/mcp/asset/b149e577-880b-490c-84ba-e2ef7bb95ab1",
  featured2: "https://www.figma.com/api/mcp/asset/11f78b91-ee96-4c28-ae81-5781d1c22a97",
  download2: "https://www.figma.com/api/mcp/asset/84b7a239-ccdf-4661-a5cf-20b3a53a190f",
} as const;

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-[#1e2939] bg-[#0a0a0a]">
      <div className="mx-auto w-full max-w-[1512px] px-[20px] pt-[56px] sm:px-[36px] sm:pt-[64px] lg:px-[72px] lg:pt-[80px]">
        <div className="flex flex-col gap-[61px]">
          <div className="flex flex-col gap-[40px] lg:flex-row lg:items-center lg:gap-[70px]">
            <div className="w-full lg:w-[422px]">
              <div className="flex h-[52px] items-center">
                <div className="relative h-[52px] w-[61px] overflow-hidden">
                  <img src={footerAssets.image1} alt="" className="absolute left-0 top-0 h-[52px] w-[200px] max-w-none" />
                </div>
                <div className="relative h-[52px] w-[160px] overflow-hidden">
                  <img src={footerAssets.image1} alt="Commenter.ai" className="absolute left-[-61px] top-0 h-[52px] w-[200px] max-w-none" />
                </div>
              </div>
              <p className="mt-[28px] max-w-[412px] font-[var(--font-inter)] text-[14px] font-normal leading-[20px] text-white sm:mt-[40px] lg:mt-[66px]">
                Commenter.ai is not affiliated, associated, authorized, endorsed by, or in any way officially connected with the LinkedInTM Corporation, registered in the U.S. and other countries. LinkedInTM is a trademark of the LinkedInTM Corporation.
              </p>
            </div>

            <div className="flex w-full flex-col items-start gap-[55px] lg:w-[646.819px]">
              <div className="grid w-full grid-cols-2 gap-x-[32px] gap-y-[22px] sm:grid-cols-2 lg:flex lg:flex-wrap lg:items-start lg:gap-x-[86px]">
                {columns.map((c) => (
                  <div key={c.title}>
                    <div className="font-[var(--font-inter)] text-[14px] font-bold leading-[25px] text-[#c7c7cc]">{c.title}</div>
                    <div className="mt-[14px]">
                      {c.links.map((l) => (
                        <Link
                          key={`${c.title}-${l.href}-${l.label}`}
                          href={l.href}
                          className="block font-[var(--font-inter)] text-[14px] font-normal leading-[25px] text-[#c7c7cc] hover:text-white"
                        >
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex w-full flex-wrap items-center gap-[16px] sm:gap-[20px] lg:gap-[26px]">
                <img src={footerAssets.featured2} alt="Featured on SoftGist" className="h-auto w-[210px] sm:w-[240px] lg:w-[274px]" />
                <img src={footerAssets.download2} alt="Featured on There's an AI for that" className="h-auto w-[185px] sm:w-[220px] lg:w-[249px]" />
                <div className="relative h-[74.51px] w-[71.82px] shrink-0" aria-label="Tekpon Verified badge">
                  <div
                    className="absolute left-[3.13px] top-0 h-[74.51px] w-[65.57px]"
                    style={{ clipPath: "polygon(50% 0%, 100% 14%, 100% 73%, 50% 100%, 0% 73%, 0% 14%)", background: "linear-gradient(214deg, #fff 0%, #b3b3b3 100%)" }}
                  />
                  <div
                    className="absolute bottom-0 left-0 h-[30.98px] w-[71.82px]"
                    style={{ clipPath: "polygon(4% 0%, 96% 0%, 100% 34%, 50% 100%, 0% 34%)", background: "linear-gradient(232deg, #00bda5 0%, #00baa5 46%, #00b3a7 67%, #00a6aa 84%, #0094af 98%, #0091b0 100%)" }}
                  />
                  <div
                    className="absolute bottom-[9.92px] left-0 h-[21.06px] w-[71.82px] mix-blend-screen"
                    style={{ clipPath: "polygon(4% 0%, 96% 0%, 100% 100%, 0% 100%)", background: "linear-gradient(90deg, #040805 0%, #00bda5 50%, #000 100%)" }}
                  />
                  <div className="absolute left-[17.81px] top-[33.95px] h-[10.61px] w-[36.21px] bg-white/75" />
                  <div className="absolute left-[26.2px] top-[31.1px] text-[7px] font-semibold leading-[10px] text-[#221f20]">
                    tekpon
                  </div>
                  <div className="absolute left-[23.2px] top-[40.8px] text-[7px] font-semibold leading-[10px] text-[#221f20]">
                    Verified
                  </div>
                  <div className="absolute left-[32.56px] top-[6.92px] h-[5.86px] w-[6.71px] bg-[#00bda5]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[46px] w-full bg-[#171923] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] sm:mt-[61px]">
        <div className="mx-auto flex w-full max-w-[1512px] flex-col items-start gap-[12px] px-[20px] py-[15px] sm:px-[36px] md:flex-row md:items-center md:justify-between md:gap-[20px] lg:px-[187px]">
          <div className="font-[var(--font-inter)] text-[14px] font-normal leading-[20px] text-white sm:text-[16px] sm:leading-[24px]">
            © 2025 Commenter.ai  |  All rights reserved.
          </div>
          <div className="flex items-center gap-[24px] sm:gap-[36px] lg:gap-[53px]">
            <Link href="/privacy" className="font-[var(--font-inter)] text-[14px] font-normal leading-[20px] text-white hover:text-[#c7c7cc] sm:text-[16px] sm:leading-[24px]">
              Privacy Policy
            </Link>
            <Link href="/pricing" className="font-[var(--font-inter)] text-[14px] font-normal leading-[20px] text-white hover:text-[#c7c7cc] sm:text-[16px] sm:leading-[24px]">
              Term of Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
