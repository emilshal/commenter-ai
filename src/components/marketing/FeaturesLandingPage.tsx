import Link from "next/link";

// NOTE: This page intentionally uses fixed pixel dimensions and glass gradients
// to match the provided Figma-export-like spec for the Features tab.

const assets = {
  // Used in the "Full LinkedIn Loop" section. Kept as-is from the earlier Figma pull.
  rectangle21: "https://www.figma.com/api/mcp/asset/b8efa74c-412a-4952-814d-69f36793ce45",
  rectangle22: "https://www.figma.com/api/mcp/asset/2e5d91df-b5fd-4348-ba72-73df1f41aa30",
  shieldBg: "https://www.figma.com/api/mcp/asset/5f24f3c7-1411-494b-80d4-0b79225d5d48",
  shieldInner: "https://www.figma.com/api/mcp/asset/2ce536a3-ec88-49fa-89e8-529afedd07ff",
  shieldCheck: "https://www.figma.com/api/mcp/asset/422b58a5-d25a-4668-aa63-d7d9363517ba",
  userSarah: "https://www.figma.com/api/mcp/asset/9cb8c3d0-1310-4e12-9808-ba73300f6124",
  userDavid: "https://www.figma.com/api/mcp/asset/98ee8b7b-a589-43cd-b7c1-e736d40ce38e",
  userJessica: "https://www.figma.com/api/mcp/asset/67a79745-d834-4b51-9d04-18a2186352fd",
} as const;

const inboxCards = [
  {
    image: assets.userSarah,
    name: "Sarah Mitchell",
    role: "• VP Engineering at HubSpot",
    badge: "HIRING MANAGER",
    badgeClass: "bg-[rgba(240,177,0,0.2)] text-[#f0b100] w-[119.516px]",
    message: "Thanks for connecting! I'd love to chat about ",
    waiting: "Waiting since: 2 days",
  },
  {
    image: assets.userDavid,
    name: "David Chen",
    role: "• Founder at TechStart",
    badge: "INVESTOR",
    badgeClass: "bg-[rgba(0,201,80,0.2)] text-[#00c950] w-[75.352px]",
    message: "Loved your recent post about AI. We should ",
    waiting: "Waiting since: 4 days",
  },
  {
    image: assets.userJessica,
    name: "Jessica Park",
    role: "• Head of Product at Stripe",
    badge: "HIGH PRIORITY",
    badgeClass: "bg-[rgba(173,70,255,0.2)] text-[#ad46ff] w-[103.813px]",
    message: "Great insights on product management! Would love to ",
    waiting: "Waiting since: 7 days",
  },
] as const;

function GradientPill({
  width,
  children,
}: Readonly<{ width: number; children: React.ReactNode }>) {
  return (
    <div
      className="inline-flex items-center justify-center gap-[10px] rounded-[20px] backdrop-blur-[10px]"
      style={{
        width,
        height: 43,
        paddingTop: 55,
        paddingBottom: 55,
        backgroundImage:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.03) 100%)",
      }}
    >
      <div className="text-center font-[var(--font-montserrat)] text-[16px] font-medium leading-[20px] text-white">
        {children}
      </div>
    </div>
  );
}

function BrowserFrame({
  title,
  children,
}: Readonly<{ title: string; children: React.ReactNode }>) {
  return (
    <div className="relative h-[642px] w-[1136px] overflow-hidden rounded-[16px] border border-[#1e2939] bg-[#1a1a1a] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
      <div className="absolute left-0 top-0 flex h-[41px] w-full items-center gap-[8px] border-b border-[#1e2939] bg-[#0d0d0d] px-[24px]">
        <div className="flex h-[12px] w-[52px] gap-[8px]" aria-hidden>
          <div className="size-[12px] rounded-full bg-[#fb2c36]" />
          <div className="size-[12px] rounded-full bg-[#f0b100]" />
          <div className="size-[12px] rounded-full bg-[#00c950]" />
        </div>
        <div className="relative h-[16px] flex-1">
          <div className="absolute left-1/2 top-px -translate-x-1/2 text-center font-[var(--font-inter)] text-[12px] font-normal leading-[16px] text-[#6a7282]">
            {title}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

function BulletItem({ text }: Readonly<{ text: string }>) {
  return (
    <div className="flex items-center gap-[12px]">
      <div className="relative size-[22px] shrink-0 rounded-full bg-[#f3f4f6]" aria-hidden>
        <svg className="absolute left-1/2 top-1/2 h-[11px] w-[11px] -translate-x-1/2 -translate-y-1/2" viewBox="0 0 12 12">
          <path
            d="M2 6.2L4.6 8.8L10 3.4"
            fill="none"
            stroke="#00C950"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="font-[var(--font-inter)] text-[14px] font-normal leading-[20px] text-[#d1d5dc]">
        {text}
      </div>
    </div>
  );
}

function UrlPill() {
  return (
    <div className="relative h-[32px] w-[133.65px] rounded-[4px] bg-[#1a1a1a]">
      <div className="absolute left-[12px] top-[7.5px] text-center font-[var(--font-inter)] text-[12px] font-normal leading-[16px] text-[#6a7282]">
        conversant.ai/inbox
      </div>
    </div>
  );
}

function InboxCard({ card }: Readonly<{ card: (typeof inboxCards)[number] }>) {
  return (
    <div className="flex h-[114px] w-[496px] flex-col items-start rounded-[10px] border border-[rgba(30,41,57,0.5)] bg-[#1a1a1a] px-[17px] pb-px pt-[17px]">
      <div className="flex w-full gap-[16px]">
        <div className="relative size-[48px] shrink-0 rounded-full">
          <img alt="" className="absolute inset-0 size-full rounded-full object-cover" src={card.image} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-[8px]">
            <div className="flex h-[20px] items-center justify-between">
              <div className="flex min-w-0 flex-1 items-center gap-[8px]">
                <div className="shrink-0">
                  <p className="font-[var(--font-inter)] text-[14px] font-medium leading-[20px] tracking-[-0.1504px] text-white">
                    {card.name}
                  </p>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-[var(--font-inter)] text-[12px] font-normal leading-[16px] text-[#6a7282]">
                    {card.role}
                  </p>
                </div>
                <div className={`h-[20px] shrink-0 rounded-[4px] ${card.badgeClass}`}>
                  <p className="px-[8px] pt-[3px] font-[var(--font-inter)] text-[12px] font-normal leading-[16px]">
                    {card.badge}
                  </p>
                </div>
              </div>
              <div className="h-[16px] w-[61.875px] shrink-0" />
            </div>

            <div className="h-[20px] w-full">
              <p className="font-[var(--font-inter)] text-[14px] font-normal leading-[20px] tracking-[-0.1504px] text-[#99a1af]">
                {card.message}
              </p>
            </div>

            <div className="flex h-[24px] w-full items-center gap-[16px]">
              <p className="font-[var(--font-inter)] text-[12px] font-normal leading-[16px] text-[#6a7282]">
                {card.waiting}
              </p>
              <p className="font-[var(--font-inter)] text-[16px] font-medium leading-[24px] tracking-[-0.3125px] text-[#51a2ff]">
                Reply
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesLandingPage() {
  return (
    <main className="flex w-full flex-col items-center gap-[24px] font-[var(--font-inter)]">
      <section
        className="relative inline-flex w-full flex-col items-center justify-start gap-[60px] px-[24px] py-[64px]"
        style={{
          background:
            "radial-gradient(ellipse 74.37% 111.55% at 50.04% 84.37%, #152D39 10%, rgba(0, 0, 0, 0) 60%)",
        }}
      >
        <div className="relative z-10 inline-flex flex-col items-center gap-[60px]">
          <h1 className="text-center font-[var(--font-montserrat)] text-[38px] font-bold leading-[48px] tracking-[0.35px] text-white">
            Everything you need to stop losing LinkedIn
            <br />
            conversations
          </h1>
          <p className="w-[657px] text-center text-[20px] font-normal leading-[28px] text-[#99a1af]">
            Track conversations, manage follow-ups, and build meaningful connections—all in one place.
          </p>
          <GradientPill width={724}>Stay focused on high-signal conversations and respond at the right time.</GradientPill>
          <div className="relative h-[60px] w-[188px]">
            <Link
              href="/login"
              className="absolute inset-0 inline-flex items-center justify-center gap-[10px] rounded-[10px] bg-[#2b7fff] px-[26px] py-[16px] font-[var(--font-montserrat)] text-[18px] font-bold leading-[28px] text-white transition-[transform,box-shadow,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#3b8cff] hover:shadow-[0_10px_24px_rgba(43,127,255,0.35)] active:translate-y-0 active:scale-100"
            >
              Start for free
            </Link>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[80px] backdrop-blur-[6px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[120px] bg-[linear-gradient(180deg,rgba(10,10,10,0)_0%,rgba(10,10,10,0.72)_72%,#0a0a0a_100%)]" />
      </section>

      {/* Full LinkedIn Loop section */}
      <section className="inline-flex w-[1376px] flex-col items-center justify-start gap-[48px] border-y border-[#1e2939] px-[24px] pb-[65px] pt-[65px]">
        <div className="relative h-[197px] w-[1280.5px]">
          <div
            className="absolute left-0 top-[10.88px] h-[58.436px] w-[59.008px] rounded-[15px] backdrop-blur-[5px]"
            style={{
              backgroundImage:
                "linear-gradient(108.62895950627697deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)",
            }}
          />
          <div
            className="absolute left-[12.03px] top-[22.92px] h-[34.374px] w-[34.947px] rounded-[70px] backdrop-blur-[5px]"
            style={{
              backgroundImage:
                "linear-gradient(108.74674582629844deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)",
            }}
          />

          {[
            { x: 199.94, y: 72.76 },
            { x: 543.11, y: 88.8 },
            { x: 983.67, y: 79.63 },
          ].map((group) => (
            <div
              key={`${group.x}-${group.y}`}
              className="absolute"
              style={{ left: `${group.x}px`, top: `${group.y}px` }}
            >
              {[0, 33.8, 67.03, 100.83].map((offset) => (
                <div
                  key={offset}
                  className="absolute h-[19.479px] w-[20.051px] rounded-[70px] backdrop-blur-[5px]"
                  style={{
                    left: `${offset}px`,
                    top: 0,
                    backgroundImage:
                      "linear-gradient(108.96505759461176deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)",
                  }}
                />
              ))}
            </div>
          ))}

          <div
            className="absolute left-[29.22px] top-[40.1px] h-[73.904px] w-[127.756px] rounded-[20px] backdrop-blur-[10px]"
            style={{
              backgroundImage:
                "linear-gradient(119.98843133204234deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)",
            }}
          />
          <div className="absolute left-[429.41px] top-[165.86px] h-[23.489px] w-[36.665px]">
            <img alt="" className="block h-full w-full max-w-none" src={assets.rectangle21} />
          </div>
          <div className="absolute left-[373.79px] top-[69.89px] h-[19.479px] w-[30.364px]">
            <img alt="" className="block h-full w-full max-w-none" src={assets.rectangle22} />
          </div>

          <div
            className="absolute left-[363.79px] top-[4.01px] h-[73.331px] w-[127.756px] rounded-[20px] backdrop-blur-[10px]"
            style={{
              backgroundImage:
                "linear-gradient(120.18183220927693deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)",
            }}
          />
          <div
            className="absolute left-[716.12px] top-[12.6px] h-[73.904px] w-[127.183px] rounded-[20px] backdrop-blur-[10px]"
            style={{
              backgroundImage:
                "linear-gradient(119.87707778197499deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)",
            }}
          />
          <div
            className="absolute left-[348.89px] top-[98.54px] h-[73.904px] w-[127.183px] rounded-[20px] backdrop-blur-[10px]"
            style={{
              backgroundImage:
                "linear-gradient(119.87707778197499deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)",
            }}
          />

          {[
            { left: 52.13, top: 69.32, width: 76.768, height: 6.875, deg: 164.98342503261097 },
            { left: 389.57, top: 36.67, width: 76.768, height: 6.302, deg: 166.18482802980697 },
            { left: 373.53, top: 131.77, width: 76.768, height: 6.875, deg: 164.98342503261097 },
            { left: 52.13, top: 83.64, width: 45.259, height: 6.302, deg: 157.35880767157258 },
            { left: 389.57, top: 50.99, width: 45.259, height: 6.302, deg: 157.35880767157258 },
            { left: 397.59, top: 143.8, width: 45.832, height: 6.302, deg: 157.61373749119923 },
          ].map((bar) => (
            <div
              key={`${bar.left}-${bar.top}-${bar.width}`}
              className="absolute rounded-[20px] backdrop-blur-[10px]"
              style={{
                left: `${bar.left}px`,
                top: `${bar.top}px`,
                width: `${bar.width}px`,
                height: `${bar.height}px`,
                backgroundImage: `linear-gradient(${bar.deg}deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)`,
              }}
            />
          ))}

          {[
            { left: 379.83, top: 12.6 },
            { left: 443.42, top: 109.42 },
          ].map((c) => (
            <div
              key={`${c.left}-${c.top}`}
              className="absolute h-[16.614px] w-[17.187px] rounded-[70px] backdrop-blur-[5px]"
              style={{
                left: `${c.left}px`,
                top: `${c.top}px`,
                backgroundImage:
                  "linear-gradient(109.05176230398023deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)",
              }}
            />
          ))}

          {[
            { left: 379.83, top: 0 },
            { left: 749.35, top: 40.1 },
            { left: 813.51, top: 79.63 },
          ].map((r) => (
            <div
              key={`${r.left}-${r.top}`}
              className="absolute h-[73.331px] w-[127.183px] rounded-[20px] opacity-50 backdrop-blur-[10px]"
              style={{
                left: `${r.left}px`,
                top: `${r.top}px`,
                backgroundImage:
                  "linear-gradient(120.07004530719747deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)",
              }}
            />
          ))}

          <div className="absolute left-[1153.5px] top-0 h-[197px] w-[127px]">
            <img alt="" className="absolute inset-0 block size-full max-w-none" src={assets.shieldBg} />
            <img alt="" className="absolute left-[15.24px] top-[24.67px] h-[134.283px] w-[97.522px]" src={assets.shieldInner} />
            <img alt="" className="absolute left-[42.14px] top-[69.9px] h-[43.564px] w-[43.564px]" src={assets.shieldCheck} />
          </div>
        </div>

        <h2 className="text-center font-[var(--font-montserrat)] text-[38px] font-bold leading-[48px] tracking-[0.35px] text-white">
          The full LinkedIn loop, kept intact
        </h2>
        <p className="w-[657px] text-center font-[var(--font-inter)] text-[20px] font-normal leading-[28px] text-[#99a1af]">
          Track conversations, manage follow-ups, and build meaningful connections—all in one place.
        </p>

        <div className="relative h-[1130px] w-[1048px]">
          <div
            className="absolute right-0 top-0 h-[659px] w-[711px] rounded-[18px] opacity-50 backdrop-blur-[10px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.26) 0%, rgba(255, 255, 255, 0.07) 100%)",
            }}
          />
          <div className="absolute right-0 top-0 h-[62px] w-[711px] rounded-tl-[17px] rounded-tr-[17px] bg-[#0d0d0d]" />

          <div className="absolute right-[647px] top-[25px] inline-flex w-[52px] items-start gap-[8px]">
            <div className="size-[12px] rounded-full bg-[rgba(251,44,54,0.80)]" />
            <div className="size-[12px] rounded-full bg-[rgba(240,177,0,0.80)]" />
            <div className="size-[12px] rounded-full bg-[rgba(0,201,80,0.80)]" />
          </div>

          <div className="absolute right-[487px] top-[19px]">
            <UrlPill />
          </div>
          <div
            className="absolute right-[328px] top-[19px] h-[24px] w-[128px] rounded-[20px] backdrop-blur-[10px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.26) 0%, rgba(255, 255, 255, 0.07) 100%)",
            }}
          />

          <div className="absolute right-[530px] top-[84px]">
            <UrlPill />
          </div>
          <div className="absolute right-[390px] top-[118px]">
            <UrlPill />
          </div>
          <div className="absolute right-[530px] top-[118px]">
            <UrlPill />
          </div>

          <div
            className="absolute left-0 top-[220px] h-[903px] w-[598px] rounded-[20px] backdrop-blur-[10px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.26) 0%, rgba(255, 255, 255, 0.07) 100%)",
            }}
          />

          <div className="absolute left-[51px] top-[268px]">
            <InboxCard card={inboxCards[0]} />
          </div>
          <div className="absolute left-[51px] top-[428px]">
            <InboxCard card={inboxCards[1]} />
          </div>
          <div className="absolute left-[51px] top-[588px]">
            <InboxCard card={inboxCards[2]} />
          </div>
        </div>

        <GradientPill width={1048}>Stay focused on high-signal conversations and respond at the right time.</GradientPill>
        <GradientPill width={724}>Stay focused on high-signal conversations and respond at the right time.</GradientPill>
      </section>

      {/* Comparison preview section */}
      <section className="inline-flex w-[1376px] flex-col items-center justify-start gap-[48px] border-y border-[#1e2939] px-[24px] pb-[65px] pt-[65px]">
        <h2 className="text-center font-[var(--font-montserrat)] text-[38px] font-bold leading-[48px] tracking-[0.35px] text-white">
          Everything you need to stop losing LinkedIn
          <br />
          conversations
        </h2>

        <p className="w-[1134px] text-center font-[var(--font-inter)] text-[20px] font-normal leading-[28px] text-[#99a1af]">
          Track conversations, manage follow-ups, and build meaningful connections—all in one place.
        </p>

        <p className="w-[657px] text-center font-[var(--font-inter)] text-[20px] font-normal leading-[28px] text-[#99a1af]">
          Track conversations, manage follow-ups, and build meaningful connections—all in one place.
        </p>

        <div className="inline-flex w-[944px] items-start justify-between">
          <div className="flex flex-col gap-[18px]">
            <BulletItem text="Founders" />
          </div>
          <div className="flex flex-col gap-[18px]">
            <BulletItem text="Founders" />
            <BulletItem text="Sales & business development" />
          </div>
        </div>

        <GradientPill width={1048}>Stay focused on high-signal conversations and respond at the right time.</GradientPill>

        <div className="relative h-[486px] w-[1359px]">
          <div className="absolute left-[77.5px] top-0 inline-flex h-[459px] w-[655.5px] flex-col items-start justify-start rounded-[16px] bg-[#1a1a1a] px-[33px] pb-px pt-[33px] outline outline-1 outline-[#1e2939] outline-offset-[-1px]">
            <img
              alt=""
              className="relative h-[393px] w-full rounded-[10px] object-cover opacity-80"
              src="/5320c920f6f103dd5d91299723b04211f5900234.jpg"
            />
          </div>

          <div className="absolute left-[760.5px] top-0 h-[346px] w-[409px] overflow-hidden rounded-[20px] backdrop-blur-[10px]">
            <img
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-80"
              src="/c51fc5724dcc74286811b2cbe82ed4f362ef2d3c.jpg"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.26) 0%, rgba(255, 255, 255, 0.07) 100%)",
              }}
            />
          </div>
          <div className="absolute left-[760.5px] top-[305px] h-[41px] w-[409px] rounded-[20px] bg-[#204283] backdrop-blur-[10px]" />
        </div>

        <h3 className="text-center font-[var(--font-montserrat)] text-[38px] font-bold leading-[48px] tracking-[0.35px] text-white">
          Everything you need to stop losing
        </h3>
      </section>

      <section className="flex h-[1265px] w-[1376px] flex-col items-center gap-[48px] border-y border-[#1e2939] px-[24px] pt-[65px]">
        <h2 className="text-center font-[var(--font-montserrat)] text-[38px] font-bold leading-[48px] tracking-[0.3516px] text-white">
          Everything you need to stop losing LinkedIn
          <br />
          conversations
        </h2>
        <p className="w-[657px] text-center font-[var(--font-inter)] text-[20px] font-normal leading-[28px] text-[#99a1af]">
          Track conversations, manage follow-ups, and build meaningful connections—all in one place.
        </p>
        <div className="flex w-[746px] flex-col items-start gap-[18px]">
          <BulletItem text="Founders" />
          <BulletItem text="Sales & business development" />
          <BulletItem text="Recruiters" />
          <BulletItem text="Recruiters" />
        </div>
        <GradientPill width={1048}>Stay focused on high-signal conversations and respond at the right time.</GradientPill>
        <BrowserFrame title="Conversant AI Dashboard">
          <img
            alt=""
            className="absolute left-[33px] top-[74px] h-[535px] w-[1070px] rounded-[10px] object-cover opacity-90"
            src="/c51fc5724dcc74286811b2cbe82ed4f362ef2d3c.jpg"
          />
        </BrowserFrame>
      </section>

      <section className="flex h-[1265px] w-[1376px] flex-col items-center gap-[48px] border-y border-[#1e2939] px-[24px] pt-[65px]">
        <h2 className="text-center font-[var(--font-montserrat)] text-[38px] font-bold leading-[48px] tracking-[0.3516px] text-white">
          Everything you need to stop losing LinkedIn
          <br />
          conversations
        </h2>
        <p className="w-[657px] text-center font-[var(--font-inter)] text-[20px] font-normal leading-[28px] text-[#99a1af]">
          Track conversations, manage follow-ups, and build meaningful connections—all in one place.
        </p>
        <p className="w-[657px] text-center font-[var(--font-inter)] text-[20px] font-normal leading-[28px] text-[#99a1af]">
          Track conversations, manage follow-ups, and build meaningful connections—all in one place.
        </p>

        <GradientPill width={724}>Stay focused on high-signal conversations and respond at the right time.</GradientPill>

        <BrowserFrame title="Conversant AI Dashboard">
          <img
            alt=""
            className="absolute left-[33px] top-[74px] h-[535px] w-[1070px] rounded-[10px] object-cover opacity-90"
            src="/979f3182f63d0153427f5e07e2c4d45bce68b35e.jpg"
          />
        </BrowserFrame>
      </section>

      <section className="flex h-[866px] w-[1376px] flex-col items-center gap-[48px] border-y border-[#1e2939] px-[24px] pt-[65px]">
        <h2 className="text-center font-[var(--font-montserrat)] text-[38px] font-bold leading-[48px] tracking-[0.3516px] text-white">
          Everything you need to stop losing LinkedIn
          <br />
          conversations
        </h2>
        <p className="w-[657px] text-center font-[var(--font-inter)] text-[20px] font-normal leading-[28px] text-[#99a1af]">
          Track conversations, manage follow-ups, and build meaningful connections—all in one place.
        </p>
        <p className="w-[657px] text-center font-[var(--font-inter)] text-[20px] font-normal leading-[28px] text-[#99a1af]">
          Track conversations, manage follow-ups, and build meaningful connections—all in one place.
        </p>
        <GradientPill width={724}>Stay focused on high-signal conversations and respond at the right time.</GradientPill>
        <div className="flex w-[746px] flex-col items-start gap-[18px]">
          <BulletItem text="Founders" />
          <BulletItem text="Sales & business development" />
          <BulletItem text="Recruiters" />
          <BulletItem text="Recruiters" />
        </div>
      </section>

      <section className="flex h-[1409px] w-[1376px] flex-col items-center gap-[48px] border-y border-[#1e2939] px-[24px] pt-[65px]">
        <h2 className="text-center font-[var(--font-montserrat)] text-[38px] font-bold leading-[48px] tracking-[0.3516px] text-white">
          Everything you need to stop losing LinkedIn
          <br />
          conversations
        </h2>
        <p className="w-[657px] text-center font-[var(--font-inter)] text-[20px] font-normal leading-[28px] text-[#99a1af]">
          Track conversations, manage follow-ups, and build meaningful connections—all in one place.
        </p>
        <div className="flex w-[746px] flex-col items-start gap-[18px]">
          <BulletItem text="Founders" />
          <BulletItem text="Sales & business development" />
          <BulletItem text="Recruiters" />
          <BulletItem text="Recruiters" />
        </div>
        <GradientPill width={1048}>Stay focused on high-signal conversations and respond at the right time.</GradientPill>
        <div
          className="h-[760px] w-[1195px] rounded-[10px] opacity-80"
          style={{
            background: "linear-gradient(180deg, #ffffff 0%, #9ca3af 100%)",
          }}
        />
      </section>

      <section className="flex h-[537px] w-[1376px] flex-col items-center gap-[48px] border-y border-[#1e2939] px-[24px] pt-[65px]">
        <h2 className="text-center font-[var(--font-montserrat)] text-[38px] font-bold leading-[48px] tracking-[0.3516px] text-white">
          Everything you need to stop losing LinkedIn
          <br />
          conversations
        </h2>
        <p className="w-[657px] text-center font-[var(--font-inter)] text-[20px] font-normal leading-[28px] text-[#99a1af]">
          Track conversations, manage follow-ups, and build meaningful connections—all in one place.
        </p>
        <div className="flex w-[746px] flex-col items-start gap-[18px]">
          <BulletItem text="Founders" />
          <BulletItem text="Sales & business development" />
          <BulletItem text="Recruiters" />
          <BulletItem text="Recruiters" />
        </div>
      </section>

      {/* Comparison grid section */}
      <section className="flex h-[1326px] w-[1376px] flex-col items-center gap-[48px] border-y border-[#1e2939] px-[24px] pt-[65px]">
        <h2 className="text-center font-[var(--font-montserrat)] text-[38px] font-bold leading-[48px] tracking-[0.3516px] text-white">
          Everything you need to stop losing LinkedIn
          <br />
          conversations
        </h2>

        <div className="grid w-full max-w-[1194px] grid-cols-2 gap-x-[24px] gap-y-[30px]">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="flex h-[151px] items-center justify-center rounded-[20px] bg-[linear-gradient(136.27deg,rgba(25,66,148,0.13)_0%,rgba(255,255,255,0.086)_100%)] backdrop-blur-[10px]"
            >
              <p className="text-center font-[var(--font-inter)] text-[26px] font-semibold leading-[24px] text-[#d1d5dc]">
                Cancel anytime
              </p>
            </div>
          ))}
        </div>

        <div className="flex h-[103px] w-full max-w-[1194px] items-center gap-[24px] rounded-[20px] bg-[linear-gradient(136.27deg,rgba(25,66,148,0.13)_0%,rgba(255,255,255,0.086)_100%)] px-[74px] backdrop-blur-[10px]">
          <div className="size-[33px] rounded-full border-[3.5px] border-white" aria-hidden />
          <p className="font-[var(--font-inter)] text-[26px] font-semibold leading-[24px] text-[#d1d5dc]">
            Cancel anytime, no questions asked
          </p>
        </div>
      </section>

      {/* CTA section */}
      <section className="flex w-full border-t border-[#1e2939] px-[256px] pt-[97px]">
        <div className="flex w-full flex-col items-center gap-[52px]">
          <div className="relative h-[120px] w-[768px]">
            <div className="absolute left-[48px] top-px w-[671px] text-center font-[var(--font-montserrat)] text-[48px] font-bold leading-[60px] tracking-[0.3516px] text-white">
              Ready to stop losing track of conversations?
            </div>
          </div>

          <div className="w-[947px] text-center font-[var(--font-montserrat)] text-[28px] font-semibold leading-[33px] text-[#99a1af]">
            Start with signals.
            <br />
            Upgrade only when you hit a real ceiling.
          </div>

          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-[10px] bg-[#2b7fff] px-[26px] py-[16px] font-[var(--font-montserrat)] text-[18px] font-bold leading-[28px] text-white transition-[transform,box-shadow,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#3b8cff] hover:shadow-[0_10px_24px_rgba(43,127,255,0.35)] active:translate-y-0 active:scale-100"
          >
            Start for free
          </Link>

          <div className="relative h-[40px] w-[672px]">
            <div className="absolute left-0 top-0 inline-flex h-[40px] w-[672px] items-start gap-[24px]">
              {["7 Day trial", "Cancel anytime", "Centralized control"].map((label) => (
                <div key={label} className="flex w-[216px] items-center gap-[12px]">
                  <div className="relative size-[38px] shrink-0 rounded-full bg-[#e5e7eb]" aria-hidden>
                    <svg
                      className="absolute left-1/2 top-1/2 h-[16px] w-[16px] -translate-x-1/2 -translate-y-1/2"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M2 6.2L4.6 8.8L10 3.4"
                        fill="none"
                        stroke="#00C950"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className="font-[var(--font-montserrat)] text-[16px] font-bold leading-[24px] text-[#d1d5dc]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
