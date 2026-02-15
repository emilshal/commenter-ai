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
  tekponHex: "https://www.figma.com/api/mcp/asset/aef7df8d-b4e4-4e3f-9162-cb84f75031d2",
  tekponBottom: "https://www.figma.com/api/mcp/asset/dc4e3364-2738-4571-b99e-8b14b18ef792",
  tekponBottomBlend: "https://www.figma.com/api/mcp/asset/4a064d37-cfcf-4ffc-b2c2-da6af50c2592",
  tekponSideLeft: "https://www.figma.com/api/mcp/asset/a9ccddf9-6671-4bea-aa39-051c1c2258fb",
  tekponSideRight: "https://www.figma.com/api/mcp/asset/708dddd8-1bb9-49f0-837e-21000cb6337c",
  tekponWordmark: "https://www.figma.com/api/mcp/asset/3b3cced0-13cc-400f-9662-3d242913fe6d",
  tekponRect: "https://www.figma.com/api/mcp/asset/e4d9b038-df38-42cf-b00e-394de2f86296",
  tekponTopIcon: "https://www.figma.com/api/mcp/asset/c1756d9b-70f0-4b48-a9af-713443523e37",
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
                <div className="relative h-[74.511px] w-[71.819px] shrink-0" aria-label="Tekpon Verified badge">
                  <img src={footerAssets.tekponHex} alt="" className="absolute left-[3.13px] top-0 h-[74.511px] w-[65.565px]" />
                  <img src={footerAssets.tekponBottom} alt="" className="absolute left-0 top-[39.357px] h-[30.982px] w-[71.819px]" />
                  <img src={footerAssets.tekponBottomBlend} alt="" className="absolute left-0 top-[39.357px] h-[21.063px] w-[71.819px] mix-blend-screen" />
                  <img src={footerAssets.tekponSideLeft} alt="" className="absolute left-0 top-[35.41px] h-[5.682px] w-[3.126px]" />
                  <img src={footerAssets.tekponSideRight} alt="" className="absolute left-[68.48px] top-[35.41px] h-[5.682px] w-[3.126px]" />
                  <img src={footerAssets.tekponRect} alt="" className="absolute left-[17.81px] top-[33.95px] h-[10.606px] w-[36.211px]" />
                  <img src={footerAssets.tekponWordmark} alt="" className="absolute left-[19.31px] top-[23.34px] h-[10.269px] w-[33.176px]" />
                  <img src={footerAssets.tekponTopIcon} alt="" className="absolute left-[32.56px] top-[6.92px] h-[5.863px] w-[6.709px]" />
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
