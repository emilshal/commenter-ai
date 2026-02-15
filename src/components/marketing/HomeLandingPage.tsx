import Link from "next/link";

const assets = {
  logo: "/group-10.svg",
  heroImage: "/image 5.png",
  robertAvatar: "/Rectangle 8.png",
  systemHero: "/image 16.png",
  patchworkBoard: "/Frame 1171279905.png",
  avatar1: "https://www.figma.com/api/mcp/asset/63a067b6-45ed-4e70-82e6-ddb94b633d8a",
  avatar2: "https://www.figma.com/api/mcp/asset/57d32ff3-6db1-4b58-9021-2c0471591045",
  avatar3: "https://www.figma.com/api/mcp/asset/9fe0c41a-1322-4d8b-b912-48aac2e55542",
  focusSignal: "https://www.figma.com/api/mcp/asset/74c79bcb-f774-453f-8b0a-a63b539d8d03",
  inboxMessages: "https://www.figma.com/api/mcp/asset/03770887-4ec1-4f4d-b5ef-cd1fe100eaa7",
  inboxStrip: "https://www.figma.com/api/mcp/asset/0a5d8b5b-0c63-4d38-a655-af1594c4b17e",
  inboxPanel: "https://www.figma.com/api/mcp/asset/ab4ad1bf-5977-4ce6-8b77-1d129ed55211",
  leadsPanel: "https://www.figma.com/api/mcp/asset/9a9a044d-2983-46e5-bdaf-b47ca22fbdf5",
  leftIcon: "https://www.figma.com/api/mcp/asset/d7d5f13e-e125-42cb-a7ad-31a3c7a24133",
  locOff: "https://www.figma.com/api/mcp/asset/10021050-5b86-4b89-9591-7e2324cb20c2",
  locOff1: "https://www.figma.com/api/mcp/asset/79a357e4-2585-43f5-bea4-57dc0433fe1d",
  locOff2: "https://www.figma.com/api/mcp/asset/1d37c6e1-a55f-44f3-8a6b-bb80caab3da7",
  fitCheck: "https://www.figma.com/api/mcp/asset/e2a18d69-db38-4e9e-b865-b8049105db8f",
  fitCross: "https://www.figma.com/api/mcp/asset/d11a6e0c-9560-4ec8-b4d5-0a3f2d5894a9",
  pricingCheck: "https://www.figma.com/api/mcp/asset/16e2208f-dcc7-4180-b233-800857fb9e9c",
  chevronUp: "https://www.figma.com/api/mcp/asset/e519bbda-92d7-4bb5-80c5-6ef205f75f8f",
  grayBullet: "https://www.figma.com/api/mcp/asset/d939f5f1-fc3d-4615-9efa-94b647a28029",
  robertCardAvatar: "https://www.figma.com/api/mcp/asset/1b691c35-703f-434f-83b8-7d9de9c6ad23",
  reviewStar: "https://www.figma.com/api/mcp/asset/0cc8de0e-ff78-49b7-8616-ffe459925ab2",
  finalArc: "https://www.figma.com/api/mcp/asset/6efb4a20-18cb-450d-9299-a9c853191652",
  faqChevron: "https://www.figma.com/api/mcp/asset/92602e66-9321-44d1-a36d-691e1f817146",
  faqTinyCheck: "https://www.figma.com/api/mcp/asset/5b39ece6-fba6-428b-9846-d5f010779de8",
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Billing & Trust", href: "/pricing" },
  { label: "Login", href: "/login" },
];

function Tick({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-[9px]">
      <span className="inline-flex size-[22px] items-center justify-center rounded-full bg-[#e5e7eb] text-[14px] font-bold text-[#00c950]">✓</span>
      <span className="text-[14px] font-light text-white">{label}</span>
    </div>
  );
}

export default function HomeLandingPage() {
  return (
    <main className="w-full bg-[#0f0f0f] text-white">
      <div className="desktop-canvas-scale relative mx-auto w-full max-w-[1512px] overflow-visible">
        <div className="pointer-events-none absolute left-1/2 top-[429px] h-[305px] w-[1512px] -translate-x-1/2">
          <div className="absolute -inset-x-[50px] -inset-y-[125px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(29,138,181,0.35)_0%,rgba(16,29,38,0.55)_45%,rgba(15,15,15,0)_75%)] blur-[12px]" />
        </div>

        <section className="relative h-[760px]">
          <div className="absolute left-1/2 top-[45px] flex h-[76px] w-[1199px] -translate-x-1/2 items-center justify-between rounded-[15px] bg-[#18181b] px-[20px]">
            <div className="flex items-center gap-[8px]">
              <img alt="Commenter AI" src={assets.logo} className="h-[52px] w-[57px] object-contain" />
              <span className="text-[34px] font-semibold leading-none">Commenter.ai</span>
            </div>

            <div className="flex items-center gap-[28px]">
              <nav className="flex items-center gap-[22px] text-[16px]">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={item.label === "Home" ? "font-bold text-[#41bcff]" : "font-normal text-white"}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/register"
                className="inline-flex h-[49px] w-[167px] items-center justify-center rounded-[12px] border border-[#79a4f3] bg-[linear-gradient(102deg,#0050b2_13.921%,#41bcff_166.78%)] text-center text-[16px] font-medium"
              >
                Get Free Trial
              </Link>
            </div>
          </div>

          <div className="absolute left-[178px] top-[200px] flex h-[24px] w-[323px] items-center gap-[13px] rounded-[12px] border border-[#27272a] bg-[#18181b] px-[10px]">
            <span className="inline-flex size-[15px] items-center justify-center rounded-full bg-[#27272a] text-[10px] text-[#41bcff]">AI</span>
            <p className="text-[11px] font-medium text-[#c7c7cc]">From AI commenting to revenue clarity on LinkedIn</p>
          </div>

          <h1 className="absolute left-[178px] top-[265px] w-[541px] text-[25px] font-bold leading-[normal]">
            Turn LinkedIn activity into a sales system in your first week
          </h1>

          <p className="absolute left-[178px] top-[351px] w-[525px] text-[18px] font-light leading-[normal]">
            Commenter.ai connects comments and DMs to the conversations that actually move deals forward, so you know what to focus on next.
          </p>

          <p className="absolute left-[178px] top-[469px] text-[11px] font-light text-[#bababa]">For B2B founders &amp; sales teams</p>

          <div className="absolute left-[178px] top-[491px] flex items-center gap-[28px]">
            <Link
              href="/register"
              className="inline-flex h-[49px] w-[191px] items-center justify-center rounded-[12px] border border-[#79a4f3] bg-[linear-gradient(105deg,#0050b2_13.921%,#41bcff_166.78%)] text-[16px] font-medium"
            >
              Start Free Trial
            </Link>
            <div className="flex items-center gap-[23px]">
              <Tick label="No credit card required" />
              <Tick label="No credit card required" />
            </div>
          </div>

          <p className="absolute left-[178px] top-[538px] w-[541px] text-[9.5px] font-light text-[#bababa]">
            Designed to show patterns and direction - not make promises. Results depend on how you engage and follow up.
          </p>

          <div className="absolute left-[769px] top-[220px] h-[358px] w-[602px]">
            <div className="absolute left-[22px] top-[22px] h-[313px] w-[558px] rounded-[23px] border-[1.5px] border-[rgba(255,255,255,0.5)]" />
            <div className="absolute left-[12px] top-[12px] h-[332px] w-[576px] rounded-[30px] border border-[rgba(255,255,255,0.5)]" />
            <div className="absolute inset-0 rounded-[38px] border border-[rgba(255,255,255,0.5)]" />
            <div className="absolute left-[33px] top-[33px] h-[292px] w-[536px] overflow-hidden rounded-[15px] border-[3px] border-[rgba(186,186,186,0.35)]">
              <img alt="Dashboard" src={assets.heroImage} className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="absolute left-[859px] top-[643px] flex items-center gap-[20px]">
            <div className="relative h-[40px] w-[106px]">
              <img alt="" src={assets.avatar1} className="absolute left-0 top-0 size-[40px] rounded-full object-cover" />
              <img alt="" src={assets.avatar2} className="absolute left-[33px] top-0 size-[40px] rounded-full object-cover" />
              <img alt="" src={assets.avatar3} className="absolute left-[66px] top-0 size-[40px] rounded-full object-cover" />
            </div>
            <div className="space-y-[6px]">
              <p className="text-[14px] font-bold">Used by 10,000+</p>
              <p className="text-[14px] font-normal">B2B founders &amp; sales teams</p>
            </div>
          </div>

          <img alt="Robert" src={assets.robertAvatar} className="absolute left-[178px] top-[638px] size-[44px] rounded-full object-cover" />
          <div className="absolute left-[239px] top-[639px] w-[429px]">
            <p className="text-[14px] font-bold">Robert Groenendijk • <span className="text-[11px] font-light text-[#9ca3af]">B2B Founder</span></p>
            <p className="mt-[8px] text-[10px] leading-[12px] text-[#d5d7dc]">
              Commenter.ai gave me structure and consistency. Instead of random activity, I finally had a system that helped me stay focused on the right conversations - even while running my business.
            </p>
          </div>
        </section>

        <section className="mx-auto w-[1174px] border-y border-[#1e2939] pb-[100px] pt-[100px]">
          <div className="mx-auto w-[784px] text-center">
            <span className="inline-flex h-[23px] items-center rounded-[20px] bg-[#18181b] px-[20px] text-center text-[13px] font-normal text-white">
              The Problem
            </span>
            <h2 className="mt-[20px] text-[35px] font-extrabold leading-[normal]">When activity grows, what matters quietly gets lost</h2>
            <p className="mt-[20px] text-[16px] font-normal leading-[normal]">Most B2B founders don’t struggle to start conversations.</p>
          </div>

          <div className="mx-auto mt-[55px] w-[471px]">
            <img src="/Frame 1171279898.png" alt="Lost messages mockup" className="h-[116px] w-[284px] object-contain mx-auto" />
            <p className="mt-[25px] text-center text-[16px] font-black leading-[normal] text-[#bababa]">
              They struggle to keep track once they start.
            </p>
          </div>

          <div className="mx-auto mt-[35px] w-[445px]">
            <ul className="space-y-[10px]">
              <li className="flex items-center gap-[14px] leading-[1]">
                <span className="text-[26px] text-[#d4d4d8]">•</span>
                <span className="text-[16px] font-normal leading-[normal] text-white">
                  Someone replies, and it disappears before you follow up
                </span>
              </li>
              <li className="flex items-center gap-[14px] leading-[1]">
                <span className="text-[26px] text-[#d4d4d8]">•</span>
                <span className="text-[16px] font-normal leading-[normal] text-white">
                  A DM thread starts strong, then fades by the next day
                </span>
              </li>
            </ul>

            <ul className="mt-[12px] space-y-[10px] px-[2px]">
              <li className="flex items-center gap-[15px] leading-[1]">
                <span className="text-[16px] text-[#a1a1aa]">•</span>
                <span className="text-[12px] font-normal leading-[normal] text-[#bababa]">
                  Profile views go up, but you don’t know what caused it
                </span>
              </li>
              <li className="flex items-center gap-[15px] leading-[1]">
                <span className="text-[16px] text-[#a1a1aa]">•</span>
                <span className="text-[12px] font-normal leading-[normal] text-[#bababa]">
                  Leads exist, but the context lives in tabs, notes, or memory
                </span>
              </li>
            </ul>
          </div>

          <p className="mx-auto mt-[55px] w-[574px] text-center text-[16px] font-normal leading-[25px] text-white">
            Not because LinkedIn doesn’t work - but because there’s no system to keep conversations from getting lost as things pick up.
          </p>
        </section>

        <section className="mx-auto w-[1174px] border-b border-[#1e2939] pb-[100px] pt-[100px]">
          <div className="mx-auto flex w-[964px] flex-col items-center gap-[75px]">
            <div className="flex w-[784px] flex-col items-center gap-[20px] text-center">
              <span className="inline-flex h-[23px] items-center rounded-[20px] bg-[#18181b] px-[20px] text-[14px] font-normal text-white">
                The Solution
              </span>
              <h2 className="text-[35px] font-extrabold leading-[normal] text-white">
                <span className="block">The fix isn’t more activity.</span>
                <span className="block">It’s having one place to see what’s going on.</span>
              </h2>
              <p className="text-[18px] font-normal leading-[normal] text-white">
                <span className="block">Sales momentum doesn’t come from doing more on LinkedIn.</span>
                <span className="block">It comes from clearly seeing what’s already happening — in one place.</span>
              </p>
            </div>

            <img src="/Frame 1171279902.png" alt="Unified conversation signals" className="h-[109px] w-[935px] object-contain" />

            <div className="flex w-full flex-col items-center gap-[41px]">
              <p className="text-center text-[18px] font-normal leading-[normal] text-white">
                <span className="block">It comes from clearly seeing what’s already happening.</span>
                <span className="block">When comments, DMs, and leads are visible in one place:</span>
              </p>

              <div className="flex w-full items-center gap-[20px]">
                <div className="flex h-[68px] w-[308px] items-center justify-center rounded-[20px] border border-[#27272a] bg-[#18181b] text-center text-[18px] leading-[normal] text-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                  <span className="w-[252px]">Follow-ups stop being accidental</span>
                </div>
                <div className="flex h-[68px] w-[308px] items-center justify-center rounded-[20px] border border-[#27272a] bg-[#18181b] text-center text-[18px] leading-[normal] text-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                  <span className="w-[252px]">Conversations don’t reset every day</span>
                </div>
                <div className="flex h-[68px] w-[308px] items-center justify-center rounded-[20px] border border-[#27272a] bg-[#18181b] text-center text-[18px] leading-[normal] text-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                  <span className="w-[252px]">Follow-through doesn’t disappear overnight.</span>
                </div>
              </div>

              <p className="text-center text-[18px] font-normal leading-[30px] text-white">
                Activity stops feeling chaotic and starts feeling intentional.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-[1174px] border-b border-[#1e2939] pb-[100px] pt-[100px]">
          <div className="mx-auto flex w-[963px] flex-col items-center gap-[75px]">
            <div className="flex w-[784px] flex-col items-center gap-[20px] text-center text-white">
              <h2 className="text-[35px] font-extrabold leading-[normal]">
                <span className="block">What having a system actually</span>
                <span className="block">changes day to day</span>
              </h2>
              <p className="w-[688px] text-[18px] leading-[normal]">
                When your LinkedIn activity is visible in one place, work stops feeling reactive and starts feeling intentional.
              </p>
            </div>

            <div className="h-[509px] w-[617px] overflow-hidden rounded-[15px] border-4 border-[rgba(186,186,186,0.1)]">
              <img src="/image 16.png" alt="Commenter dashboard preview" className="size-full object-cover" />
            </div>

            <div className="flex w-full flex-col items-center gap-[41px] text-center text-white">
              <p className="text-[18px] leading-[normal]">
                <span className="block">It comes from clearly seeing what’s already happening.</span>
                <span className="block">When comments, DMs, and leads are visible in one place:</span>
              </p>

              <div className="flex w-full flex-col gap-[33px]">
                <div className="flex w-full gap-[33px]">
                  <div className="flex h-[191px] w-[465px] flex-col items-center justify-center gap-[38px] rounded-[20px] border border-[#27272a] bg-[#18181b] px-[50px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                    <p className="text-[18px] font-bold leading-[normal]">You can tell which comments actually start conversations</p>
                    <p className="w-[330px] text-[16px] leading-[normal]">
                      It’s immediately clear which conversations are worth following up on.
                    </p>
                  </div>
                  <div className="flex h-[191px] w-[465px] flex-col items-center justify-center gap-[38px] rounded-[20px] border border-[#27272a] bg-[#18181b] px-[50px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                    <p className="text-[18px] font-bold leading-[normal]">You know where each lead stands without digging through messages</p>
                    <p className="w-[330px] text-[16px] leading-[normal]">
                      Every lead has context, history, and a clear next step.
                    </p>
                  </div>
                </div>
                <div className="flex w-full gap-[33px]">
                  <div className="flex h-[191px] w-[465px] flex-col items-center justify-center gap-[38px] rounded-[20px] border border-[#27272a] bg-[#18181b] px-[50px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                    <p className="text-[18px] font-bold leading-[normal]">You can see which DMs are active, stalled, or waiting on you</p>
                    <p className="w-[330px] text-[16px] leading-[normal]">You know who needs a reply and who doesn’t.</p>
                  </div>
                  <div className="flex h-[191px] w-[465px] flex-col items-center justify-center gap-[38px] rounded-[20px] border border-[#27272a] bg-[#18181b] px-[50px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                    <p className="text-[18px] font-bold leading-[normal]">How activity, conversations, and leads move together</p>
                    <p className="w-[330px] text-[16px] leading-[normal]">
                      Nothing lives in isolation anymore, everything stays connected.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-[18px] leading-[normal]">
                You open one place and know what matters next. Nothing important disappears when the day ends.
              </p>
            </div>

            <div className="flex w-[741px] flex-col items-center gap-[15px]">
              <p className="text-center text-[18px] font-bold leading-[normal] text-white">And your momentum stops depending on memory.</p>
              <div className="flex h-[30px] w-full items-center justify-center rounded-[12px] border border-[#27272a] bg-[#18181b] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                <p className="w-[700px] text-center text-[12px] font-medium leading-[24px] text-[#c7c7cc]">
                  Practical value: this replaces the “spreadsheet + notes + reminders + CRM patchwork” most founders build by accident.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-[1174px] border-b border-[#1e2939] pb-[100px] pt-[100px]">
          <div className="mx-auto flex w-[960px] flex-col items-center gap-[60px]">
            <div className="flex w-[784px] flex-col items-center gap-[20px] text-center text-white">
              <h2 className="text-[35px] font-extrabold leading-[normal]">See what’s actually happening, not what you think is happening</h2>
              <p className="text-[18px] leading-[normal]">When everything is visible in one place, decisions stop relying on memory.</p>
            </div>

            <div className="flex w-[960px] flex-col items-center gap-[35px]">
              <div className="flex h-[288px] w-[878px] items-center justify-between rounded-[20px] border border-[#27272a] bg-[#18181b] px-[30px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                <div className="flex w-[408px] flex-col gap-[45px] text-white">
                  <p className="text-[18px] font-bold leading-[normal]">Overview and signals</p>
                  <div>
                    <p className="mb-[10px] text-[18px] font-bold leading-[normal]">A clear view of what actually matters</p>
                    <p className="text-[18px] leading-[normal]">See comments, DMs, and conversations together so patterns are visible and guesswork fades.</p>
                  </div>
                  <p className="text-[12px] leading-[normal]">Without this, activity looks busy, but direction stays unclear.</p>
                </div>
                <div className="relative h-[252px] w-[332px]">
                  <div className="absolute bottom-0 h-[186px] w-[332px] overflow-hidden rounded-[15px] border-4 border-[rgba(186,186,186,0.1)]">
                    <img src={assets.systemHero} alt="Overview and signals" className="h-full w-full object-cover" />
                  </div>
                  <div className="absolute right-[51px] top-0 h-[49px] w-[229px] overflow-hidden rounded-[5px] border-4 border-[#28282b]">
                    <img src={assets.focusSignal} alt="" className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>

              <div className="flex h-[358px] w-[960px] items-center justify-center gap-[38px] rounded-[20px] border border-[#27272a] bg-[#18181b] px-[50px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                <div className="flex w-[508px] flex-col gap-[45px] text-white">
                  <p className="text-[18px] font-bold leading-[normal]">Conversations and follow-ups</p>
                  <div>
                    <p className="mb-[10px] text-[18px] font-bold leading-[normal]">Conversations don’t disappear overnight</p>
                    <p className="text-[18px] leading-[normal]">See which conversations are active, stalled, or waiting on you without relying on memory.</p>
                  </div>
                  <p className="text-[12px] leading-[normal]">This is where most momentum dies: threads that never get the second message.</p>
                </div>
                <div className="relative h-[294px] w-[332px]">
                  <div className="absolute right-0 top-0 h-[204px] w-[136px] overflow-hidden rounded-[5px] border-4 border-[#28282b]">
                    <img src={assets.inboxMessages} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="absolute left-[18px] top-0 h-[204px] w-[137px] overflow-hidden rounded-[5px] border-4 border-[#28282b]">
                    <img src={assets.inboxPanel} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="absolute bottom-0 h-[68px] w-[332px] overflow-hidden rounded-[5px] border-4 border-[#28282b]">
                    <img src={assets.inboxStrip} alt="" className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>

              <div className="flex h-[288px] w-[878px] items-center justify-between rounded-[20px] border border-[#27272a] bg-[#18181b] px-[30px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                <div className="flex w-[425px] flex-col gap-[45px] text-white">
                  <p className="text-[18px] font-bold leading-[normal]">Leads and context</p>
                  <div>
                    <p className="mb-[10px] text-[18px] font-bold leading-[normal]">Leads stay tied to real conversations</p>
                    <p className="text-[18px] leading-[normal]">See exactly where each lead stands, based on what actually happened, not assumptions.</p>
                  </div>
                  <p className="text-[12px] leading-[normal]">Instead of random activity, everything became structured and consistent.</p>
                </div>
                <div className="h-[241px] w-[332px] overflow-hidden rounded-[5px] border-4 border-[rgba(186,186,186,0.1)]">
                  <img src={assets.leadsPanel} alt="Leads and context" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>

            <div className="flex w-[784px] flex-col items-center gap-[55px]">
              <div className="text-center text-white">
                <p className="text-[24px] font-extrabold leading-[normal]">Replace the patchwork</p>
                <p className="mt-[20px] text-[18px] leading-[normal]">Most people run LinkedIn sales with a patchwork.</p>
              </div>

              <div className="flex items-center justify-center gap-[20px]">
                <div className="flex h-[463px] w-[281px] flex-col justify-between rounded-[15px] bg-[#18181b] px-[10px] py-[20px]">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <div key={idx} className="relative h-[76px] w-full rounded-[12px] border border-[#27272a] bg-[#18181b]">
                      <img src={assets.leftIcon} alt="" className="absolute left-[19px] top-[17px] size-[39px] object-contain" />
                      <p className="absolute left-[70px] top-[26px] text-[18px] leading-[normal] text-white">CRM patchwork</p>
                    </div>
                  ))}
                </div>

                <div className="h-[459px] w-[532px] overflow-hidden rounded-[15px]">
                  <img src={assets.patchworkBoard} alt="Unified workspace" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-[1174px] border-b border-[#1e2939] py-[100px]">
          <div className="mx-auto flex w-[985px] flex-col items-center gap-[65px] text-white">
            <div className="flex w-full flex-col items-center gap-[20px] text-center">
              <span className="inline-flex h-[23px] items-center rounded-[20px] bg-[#18181b] px-[20px] text-[13px] font-normal">
                What You Get
              </span>
              <p className="text-[35px] font-extrabold leading-[normal]">What You Get With Commenter.ai ?</p>
              <div className="text-[18px] leading-[normal]">
                <p>Commenter.ai isn’t a commenting tool. And it isn’t a generic CRM.</p>
                <p>It’s one system that connects activity, conversations, and follow-ups so context doesn’t leak.</p>
              </div>
            </div>

            <div className="flex w-full items-start gap-[53px]">
              <div className="flex w-[466px] flex-col gap-[30px]">
                <div>
                  <p className="mb-[13px] text-[18px] font-bold leading-[normal]">Activity that stays connected</p>
                  <p className="text-[14px] leading-[normal] text-[#bababa]">
                    Comments, DMs, and profile views are tracked together, so engagement trends make sense over time.
                  </p>
                </div>
                <div>
                  <p className="mb-[13px] text-[18px] font-bold leading-[normal]">A system built for LinkedIn conversations</p>
                  <p className="text-[14px] leading-[normal] text-[#bababa]">
                    Leads move forward with their full conversation history attached. No copy-pasting. No lost context.
                  </p>
                </div>
                <div>
                  <p className="mb-[13px] text-[18px] font-bold leading-[normal]">Signals and performance insight</p>
                  <p className="text-[14px] leading-[normal] text-[#bababa]">
                    You see what’s changing across engagement, conversations, and follow-ups — based on your labels and actions, not assumptions.
                  </p>
                </div>
              </div>

              <div className="flex w-[466px] flex-col gap-[30px]">
                <div>
                  <p className="mb-[13px] text-[18px] font-bold leading-[normal]">Optional AI assistance (when you want it)</p>
                  <p className="text-[14px] leading-[normal] text-[#bababa]">
                    Draft comments and DMs faster without losing your voice. Everything stays editable. You stay in control.
                  </p>
                </div>
                <div>
                  <p className="mb-[13px] text-[18px] font-bold leading-[normal]">One system instead of five tools</p>
                  <p className="text-[14px] leading-[normal] text-[#bababa]">
                    No spreadsheets. No reminders. No mental tracking. Everything lives in one place, connected.
                  </p>
                </div>
              </div>
            </div>

            <p className="w-full text-center text-[18px] leading-[normal]">
              Commenter.ai helps you see where opportunities are forming and where attention is actually going.
            </p>
          </div>
        </section>

        <section className="mx-auto w-[1174px] border-b border-[#1e2939] py-[100px]">
          <div className="mx-auto flex w-[811px] flex-col items-center gap-[55px] text-white">
            <div className="flex w-full flex-col items-center gap-[20px] text-center">
              <span className="inline-flex h-[23px] items-center rounded-[20px] bg-[#18181b] px-[20px] text-[13px] font-normal">
                The Payoff
              </span>
              <p className="text-[35px] font-extrabold leading-[normal]">
                From checking LinkedIn all day to knowing what needs attention
              </p>
              <p className="text-[18px] leading-[normal]">Without a system, effort spreads thin and follow-ups go cold.</p>
              <p className="w-[658px] text-[18px] leading-[normal]">
                With Commenter.ai, you review what changed, follow up where signals surfaced, and stop guessing.
              </p>
            </div>

            <div className="flex h-[77px] w-[445px] flex-col items-start gap-[10px]">
              <div className="flex items-center gap-[14px]">
                <span className="text-[20px] leading-none text-[#e5e7eb]">•</span>
                <p className="text-[16px] leading-[normal]">Know which conversations are worth pushing forward</p>
              </div>
              <div className="flex items-center gap-[14px]">
                <span className="text-[20px] leading-none text-[#e5e7eb]">•</span>
                <p className="text-[16px] leading-[normal]">See what’s waiting on you</p>
              </div>
              <div className="flex items-center gap-[14px]">
                <span className="text-[20px] leading-none text-[#e5e7eb]">•</span>
                <p className="text-[16px] leading-[normal]">Keep lead context attached to real activity</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-[1174px] border-b border-[#1e2939] py-[100px]">
          <div className="mx-auto flex w-[1138px] flex-col items-start gap-[50px] text-white">
            <div className="flex w-full flex-col items-center gap-[20px] text-center">
              <span className="inline-flex h-[23px] items-center rounded-[20px] bg-[#18181b] px-[20px] text-[13px] font-normal">
                How Commenter AI Works
              </span>
              <p className="text-[35px] font-extrabold leading-[normal]">
                <span className="block">A simple system that turns LinkedIn activity</span>
                <span className="block">into clear focus.</span>
              </p>
              <p className="text-[18px] leading-[normal]">
                <span className="block">You do not need to change how you use LinkedIn.</span>
                <span className="block">Commenter.ai adds structure to what you already do.</span>
              </p>
            </div>

            <div className="flex w-full items-center justify-center gap-[24px]">
              <div className="relative h-[295px] w-[363px] rounded-[20px] border border-[#27272a] bg-[rgba(186,186,186,0.1)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                <img src={assets.locOff} alt="" className="absolute right-[23px] top-[20px] size-[45px] object-contain opacity-25" />
                <p className="absolute left-[21px] top-[70px] w-[263px] text-[22px] font-bold leading-[normal] text-[#bababa]">
                  <span className="block">Connected by</span>
                  <span className="block">default</span>
                </p>
                <p className="absolute left-[21px] top-[168px] w-[244px] text-[18px] leading-[normal] text-[#bababa]">
                  Connect your LinkedIn account so comments and DMs are visible together in one place.
                </p>
              </div>

              <div className="relative h-[295px] w-[363px] rounded-[20px] border border-[#27272a] bg-[rgba(186,186,186,0.15)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                <img src={assets.locOff1} alt="" className="absolute right-[23px] top-[20px] size-[45px] object-contain opacity-25" />
                <p className="absolute left-[21px] top-[70px] w-[263px] text-[22px] font-bold leading-[normal] text-white">
                  <span className="block">No behavior</span>
                  <span className="block">change required</span>
                </p>
                <p className="absolute left-[21px] top-[168px] w-[244px] text-[18px] leading-[normal] text-white">
                  Comment, reply, and message like you already do. No scripts. No forced workflows.
                </p>
              </div>

              <div className="relative h-[295px] w-[363px] rounded-[20px] border-2 border-[#0050b2] bg-[rgba(0,80,178,0.25)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                <img src={assets.locOff2} alt="" className="absolute right-[23px] top-[20px] size-[45px] object-contain opacity-25" />
                <p className="absolute left-[20px] top-[69px] w-[263px] text-[22px] font-bold leading-[normal] text-white">
                  <span className="block">Focus emerges</span>
                  <span className="block">naturally</span>
                </p>
                <p className="absolute left-[20px] top-[167px] w-[244px] text-[18px] leading-[normal] text-white">
                  Commenter.ai surfaces real sales signals so you know where attention belongs and where it doesn’t.
                </p>
              </div>
            </div>

            <p className="w-full text-center text-[18px] leading-[normal]">
              No new habits. No extra work. Commenter.ai works quietly in the background as you use LinkedIn.
            </p>
          </div>
        </section>

        <section className="mx-auto w-[1174px] border-b border-[#1e2939] py-[100px]">
          <div className="mx-auto flex w-[876px] flex-col items-center gap-[55px] text-white">
            <div className="flex w-full flex-col items-center gap-[20px] text-center">
              <span className="inline-flex h-[23px] items-center justify-center rounded-[20px] bg-[#18181b] px-[20px] text-[13px]">
                Who it is for?
              </span>
              <h2 className="text-[35px] font-extrabold leading-[normal]">Built for serious LinkedIn operators</h2>
              <p className="w-[876px] text-[18px] leading-[normal]">
                Commenter.ai is for people who use LinkedIn as part of their business, not as a side experiment.
              </p>
            </div>

            <div className="flex w-[697px] items-start justify-between">
              <div className="w-[317px]">
                <p className="text-[18px] font-bold leading-[normal]">It’s a fit if you:</p>
                <div className="mt-[18px] space-y-[18px]">
                  {[
                    "Use it to start conversations and generate business",
                    "Care about sales, not just visibility",
                    "Want a clear way to manage comments, DMs, and leads",
                    "Prefer systems over daily guesswork",
                  ].map((line) => (
                    <div key={line} className="flex items-start gap-[13px]">
                      <img src={assets.fitCheck} alt="" className="mt-[2px] size-[20px] object-contain" />
                      <p className="w-[284px] text-[18px] leading-[normal]">{line}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-[317px]">
                <p className="text-[18px] font-bold leading-[normal]">It’s not a fit if you:</p>
                <div className="mt-[18px] space-y-[42px]">
                  {[
                    "Are only chasing viral reach or vanity metrics",
                    "Want shortcuts without follow-up",
                    "Want mass automation or spam",
                  ].map((line) => (
                    <div key={line} className="flex items-start gap-[13px]">
                      <img src={assets.fitCross} alt="" className="mt-[2px] size-[20px] object-contain" />
                      <p className="w-[284px] text-[18px] leading-[normal]">{line}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="w-[876px] text-center text-[18px] leading-[25px]">
              <span className="font-bold">Commenter.ai doesn’t promise outcomes.</span>
              <br />
              It gives visibility, structure, and follow-through so conversations don’t disappear.
            </p>
          </div>
        </section>

        <section className="mx-auto w-[1174px] py-[100px]">
          <div className="mx-auto flex w-[1174px] flex-col items-center gap-[20px] text-center text-white">
            <span className="inline-flex h-[23px] items-center justify-center rounded-[20px] bg-[#18181b] px-[20px] text-[13px]">
              Pricing Intro
            </span>
            <h2 className="text-[35px] font-bold leading-[normal]">Simple pricing for serious LinkedIn operators</h2>
            <p className="text-[18px] leading-[normal]">
              <span className="block">All plans include core tracking and conversation visibility.</span>
              <span className="block">Higher plans unlock more control and deeper insight.</span>
              <span className="block">No contracts. Upgrade or downgrade anytime.</span>
              <span className="block">Built so follow-ups don’t slip.</span>
            </p>
          </div>
        </section>

        <section className="mx-auto w-[1174px] border-b border-[#1e2939] pb-[100px]">
          <div className="mx-auto flex w-[1174px] flex-col items-center gap-[55px] text-white">
            <div className="flex w-[784px] flex-col items-center gap-[20px] text-center">
              <span className="inline-flex h-[23px] items-center justify-center rounded-[20px] bg-[#18181b] px-[20px] text-[13px]">Pricing</span>
              <h2 className="text-[35px] font-bold leading-[normal]">Choose the level of control you need</h2>
            </div>

            <div className="flex w-full items-start justify-between">
              <article className="h-[668px] w-[363px] rounded-[20px] border border-[#27272a] bg-[#18181b] px-[24px] pt-[24px]">
                <h3 className="text-[55px] font-extrabold leading-[normal]">Signals</h3>
                <p className="mt-[10px] text-[14px] leading-[normal]">For solo founders who want a real system, not another tool.</p>
                <div className="mt-[10px] flex items-end gap-[5px]">
                  <p className="text-[55px] font-bold leading-[normal]">$99</p>
                  <p className="pb-[9px] text-[16px] font-bold leading-[normal]">/month</p>
                </div>
                <Link
                  href="/register"
                  className="mt-[7px] inline-flex h-[63px] w-full items-center justify-center rounded-[12px] border border-[#79a4f3] bg-[linear-gradient(107.623deg,#0050b2_13.921%,#41bcff_166.78%)] text-[16px] font-medium leading-[24px]"
                >
                  Start 7-day free trial
                </Link>
                <div className="mt-[7px] flex items-center gap-[24px] text-[14px]">
                  <div className="flex items-center gap-[9px]">
                    <img src={assets.pricingCheck} alt="" className="size-[22px]" />
                    <span>7-day trial</span>
                  </div>
                  <div className="flex items-center gap-[9px]">
                    <img src={assets.pricingCheck} alt="" className="size-[22px]" />
                    <span>No credit card required</span>
                  </div>
                </div>
                <div className="mt-[20px] space-y-[20px] text-[14px]">
                  <div className="space-y-[6px]">
                    <p className="font-bold">Includes:</p>
                    {[
                      "Core activity tracking (comments, DMs, profile views)",
                      "Basic engagement insights over time",
                      "Optional AI-assisted comment + DM drafting",
                      "Lightweight conversation organization",
                    ].map((line) => (
                      <div key={line} className="flex gap-[11px]">
                        <span className="text-[20px] leading-[19px]">•</span>
                        <p className="w-[277px] leading-[17px]">{line}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-[6px] text-[12px] text-[#bababa]">
                    <p>Best if:</p>
                    {["you want help staying consistent", "you want visibility without managing a pipeline yet"].map((line) => (
                      <div key={line} className="flex gap-[11px]">
                        <span className="text-[16px] leading-[19px]">•</span>
                        <p className="w-[277px] leading-[17px]">{line}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              <article className="h-[729px] w-[363px] rounded-[20px] border border-[#0050b2] bg-[rgba(0,80,178,0.25)] px-[24px] pt-[24px]">
                <h3 className="text-[55px] font-extrabold leading-[normal]">Workflow</h3>
                <p className="mt-[10px] text-[14px] leading-[normal]">For people who rely on LinkedIn weekly and can’t afford to drop conversations.</p>
                <div className="mt-[10px] flex items-end gap-[5px]">
                  <p className="text-[55px] font-bold leading-[normal]">$149</p>
                  <p className="pb-[9px] text-[16px] font-bold leading-[normal]">/month</p>
                </div>
                <Link
                  href="/register"
                  className="mt-[7px] inline-flex h-[63px] w-full items-center justify-center rounded-[12px] border border-[#79a4f3] bg-[linear-gradient(107.623deg,#0050b2_13.921%,#41bcff_166.78%)] text-[16px] font-medium leading-[24px]"
                >
                  Start 7-day free trial
                </Link>
                <div className="mt-[7px] flex items-center gap-[24px] text-[14px]">
                  <div className="flex items-center gap-[9px]">
                    <img src={assets.pricingCheck} alt="" className="size-[22px]" />
                    <span>7-day trial</span>
                  </div>
                  <div className="flex items-center gap-[9px]">
                    <img src={assets.pricingCheck} alt="" className="size-[22px]" />
                    <span>No credit card required</span>
                  </div>
                </div>
                <div className="mt-[20px] space-y-[20px] text-[14px]">
                  <div className="space-y-[6px]">
                    <p className="font-bold">Everything in Signals, plus:</p>
                    {[
                      "Full comment + DM performance insights",
                      "Conversation tracking with history over time",
                      "Lead + deal states (based on your labels and actions)",
                      "Clear follow-up visibility and sales patterns",
                      "Trends across activity, conversations, and pipeline",
                      "Workflow built for LinkedIn-driven sales",
                    ].map((line) => (
                      <div key={line} className="flex gap-[11px]">
                        <span className="text-[20px] leading-[19px]">•</span>
                        <p className="w-[277px] leading-[17px]">{line}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-[6px] text-[12px] text-[#bababa]">
                    <p>Best if:</p>
                    {[
                      "Follow-ups matter",
                      "LinkedIn is part of your sales process",
                      "You want to see what’s really happening, not guess",
                    ].map((line) => (
                      <div key={line} className="flex gap-[11px]">
                        <span className="text-[16px] leading-[19px]">•</span>
                        <p className="w-[277px] leading-[17px]">{line}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              <article className="h-[668px] w-[363px] rounded-[20px] border border-[#27272a] bg-[#18181b] px-[24px] pt-[24px]">
                <h3 className="text-[55px] font-extrabold leading-[normal]">Teams</h3>
                <p className="mt-[10px] text-[14px] leading-[normal]">For teams where follow-up can’t live in one person’s head.</p>
                <div className="mt-[10px] flex items-end gap-[5px]">
                  <p className="text-[55px] font-bold leading-[normal]">$350</p>
                  <p className="pb-[9px] text-[16px] font-bold leading-[normal]">/month</p>
                </div>
                <Link
                  href="/register"
                  className="mt-[7px] inline-flex h-[63px] w-full items-center justify-center rounded-[12px] border border-[#79a4f3] bg-[linear-gradient(107.623deg,#0050b2_13.921%,#41bcff_166.78%)] text-[16px] font-medium leading-[24px]"
                >
                  Contact Us
                </Link>
                <p className="mt-[10px] text-[10px] text-[#bababa]">For teams that need shared visibility and follow-up ownership.</p>
                <div className="mt-[37px] space-y-[37px] text-[14px]">
                  <p className="font-bold">Everything in Workflow, plus:</p>
                  {[
                    "Multiple users and shared visibility",
                    "Team pipelines and reporting",
                    "Collaboration and access controls",
                    "Priority onboarding and support",
                  ].map((line) => (
                    <div key={line} className="flex gap-[11px]">
                      <span className="text-[24px] leading-[19px]">•</span>
                      <p className="w-[277px] leading-[normal]">{line}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <div className="flex w-[811px] flex-col items-center justify-center gap-[55px]">
              <div className="flex w-full flex-col items-center gap-[20px] text-center">
                <span className="inline-flex h-[23px] items-center justify-center rounded-[20px] bg-[#18181b] px-[20px] text-[13px]">
                  Which Plan is Right?
                </span>
                <h3 className="text-[35px] font-extrabold leading-[normal]">Which plan is right for you?</h3>
              </div>
              <div className="w-[721px] space-y-[10px]">
                {[
                  "Choose Signals if you want visibility and organization without managing a pipeline yet.",
                  "Choose Workflow if LinkedIn drives real conversations and follow-ups for your sales process.",
                  "Choose Teams if multiple people need shared context and accountability.",
                ].map((line) => (
                  <div key={line} className="flex items-center gap-[14px] text-[16px]">
                    <span className="size-[8px] rounded-full bg-[#d4d4d8]" />
                    <p>{line}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-[1174px] py-[100px]">
          <div className="mx-auto flex w-[721px] flex-col items-center justify-between rounded-[15px] border border-[#27272a] bg-[#18181b] px-[30px] pt-[20px]">
            <div className="flex w-full items-center justify-between">
              <p className="text-[18px] font-bold leading-[normal] text-white">What to expect in your first 7 days</p>
              <div className="-scale-y-100">
                <img src={assets.chevronUp} alt="" className="size-[24px]" />
              </div>
            </div>

            <div className="mt-[20px] flex h-[286px] w-[661px] flex-col items-center justify-center gap-[58px] rounded-bl-[15px] rounded-br-[15px] bg-[rgba(186,186,186,0.05)]">
              <div className="flex h-[125px] w-[562px] flex-col justify-between">
                <div className="flex items-center gap-[68px]">
                  <div className="flex items-center gap-[14px]">
                    <span className="size-[8px] rounded-full bg-[#d4d4d8]" />
                    <span className="text-[16px] font-bold leading-[normal] text-white">Day 1</span>
                  </div>
                  <p className="text-[16px] leading-[normal] text-white">Connect and see comments + DMs organize in one place</p>
                </div>
                <div className="flex items-start gap-[36px]">
                  <div className="flex items-center gap-[14px]">
                    <span className="size-[8px] rounded-full bg-[#d4d4d8]" />
                    <span className="text-[16px] font-bold leading-[normal] text-white">Days 2–4</span>
                  </div>
                  <p className="w-[429px] text-[16px] leading-[normal] text-white">
                    Patterns start forming across engagement, conversations, and follow-ups
                  </p>
                </div>
                <div className="flex items-start gap-[37px]">
                  <div className="flex items-center gap-[14px]">
                    <span className="size-[8px] rounded-full bg-[#d4d4d8]" />
                    <span className="text-[16px] font-bold leading-[normal] text-white">Days 5–7</span>
                  </div>
                  <p className="w-[429px] text-[16px] leading-[normal] text-white">
                    You have a working system for visibility and next-step follow-through
                  </p>
                </div>
              </div>

              <p className="w-[477px] text-center text-[16px] font-bold leading-[normal] text-white">
                No heavy setup. No new habits — just clearer visibility into what’s already happening.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-[1174px] pb-[80px]">
          <div className="flex flex-col items-center gap-[80px] text-white">
            <div className="flex w-[784px] flex-col items-center gap-[20px] text-center">
              <h2 className="text-[52px] font-extrabold leading-[normal]">What happens after people switch to a system?</h2>
              <p className="text-[18px] leading-[normal]">
                <span className="block">People who use Commenter.ai seriously stop chasing hacks.</span>
                <span className="block">They operate with structure, consistency, and full conversation visibility.</span>
              </p>
            </div>

            <div className="flex w-full items-start gap-[55px]">
              <div className="flex w-[469px] flex-col gap-[250px]">
                <p className="w-[395px] text-[49px] leading-[normal]">
                  Trusted by B2B founders, consultants, and small sales teams using LinkedIn as a growth channel.
                </p>

                <div className="flex flex-col gap-[47px]">
                  <div className="flex flex-col gap-[15px]">
                    <p className="text-[18px] font-bold">Before Commenter AI</p>
                    <div className="space-y-[2px]">
                      {[
                        "Hidden opportunities across comments and DMs",
                        "Follow-ups based on memory or guesswork",
                        "Time spent on low-signal interactions",
                      ].map((line) => (
                        <div key={line} className="flex items-center gap-[15px]">
                          <img src={assets.fitCross} alt="" className="size-[24px]" />
                          <p className="w-[430px] text-[18px] leading-[35px]">{line}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-[15px]">
                    <p className="text-[18px] font-bold">After Commenter AI</p>
                    <div className="space-y-[2px]">
                      {[
                        "Sales signals clearly highlighted",
                        "Daily focus on conversations that matter",
                        "Less time wasted, better momentum",
                        "Conversations tracked through to outcomes",
                      ].map((line) => (
                        <div key={line} className="flex items-center gap-[15px]">
                          <img src={assets.fitCheck} alt="" className="size-[24px]" />
                          <p className="w-[430px] text-[18px] leading-[35px]">{line}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-[539px] flex-col gap-[50px]">
                <div className="space-y-[0px]">
                  {[
                    "Trusted by 10,000+ LinkedIn-first B2B professionals",
                    "Supporting founder-led sales and lean revenue teams",
                    "Designed for deal-driven LinkedIn workflows",
                  ].map((line) => (
                    <div key={line} className="flex items-center gap-[16px]">
                      <img src={assets.grayBullet} alt="" className="h-[18px] w-[19px]" />
                      <p className="w-[508px] text-[16px] leading-[38px] text-[#bababa]">{line}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-[20px] border border-[#27272a] bg-[#18181b] p-[30px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                  {[
                    {
                      name: "Robert Groenendijk",
                      role: "B2B Founder",
                      text: "Generated multiple new clients and $25,000+ in new revenue by focusing on the right conversations",
                    },
                    {
                      name: "Diego Mangabeira",
                      role: "B2B Sales Advisor",
                      text: "Booked 12 qualified calls and closed 3 new clients in the first month.",
                    },
                    {
                      name: "Tom Saper",
                      role: "Sales Lead",
                      text: "Saved 3–5 hours per week by reviewing 5–10 high-signal conversations per day instead of scanning everything.",
                    },
                  ].map((review, idx) => (
                    <div key={review.name} className={idx > 0 ? "mt-[21px]" : ""}>
                      {idx > 0 && <div className="mb-[21px] h-px w-full bg-[rgba(255,255,255,0.14)]" />}
                      <div className="flex items-center gap-[22px]">
                        <img src={assets.robertCardAvatar} alt={review.name} className="size-[64px] rounded-full object-cover" />
                        <div className="w-[392px] text-[16px]">
                          <p className="font-bold">{review.name}</p>
                          <p>{review.role}</p>
                        </div>
                      </div>
                      <div className="mt-[13px] flex items-center gap-[8px]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <img key={i} src={assets.reviewStar} alt="" className="size-[18px]" />
                        ))}
                      </div>
                      <p className="mt-[13px] w-[478px] text-[16px]">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex h-[30px] w-[855px] items-center justify-center rounded-[12px] border border-[#27272a] bg-[#18181b] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
              <p className="w-[777px] text-center text-[12px] font-medium leading-[24px] text-[#c7c7cc]">
                Try it for 7 days with no card. Upgrade only if it fits. If you upgrade and it is not right, email us within 30 days and we will refund you.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-[1174px] pb-[60px]">
          <div className="flex flex-col items-center gap-[30px]">
            <div className="flex w-[875px] flex-col items-center gap-[25px]">
              <h2 className="w-full text-center text-[80px] leading-[normal] text-white">
                <span className="block">Bring structure to how you</span>
                <span className="block">use LinkedIn</span>
              </h2>
              <div className="relative h-[26px] w-[479px]">
                <img src={assets.finalArc} alt="" className="absolute inset-0 h-full w-full object-contain" />
              </div>
            </div>

            <div className="flex w-full flex-col items-center gap-[20px] text-center text-white">
              <p className="w-full text-[35px] leading-[normal]">Designed for people who already use LinkedIn seriously.</p>
              <div className="w-full text-[25px] leading-[normal]">
                <p>No hacks. No promises.</p>
                <p>Just visibility, follow-through, and a system you can rely on.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-[1174px] pb-[100px]">
          <div className="mx-auto flex w-[662px] flex-col items-center gap-[50px]">
            <h2 className="text-center text-[35px] font-extrabold leading-[normal] text-white">Frequently asked questions</h2>

            <div className="w-full space-y-[19px]">
              <div className="flex h-[186px] flex-col items-center justify-between rounded-[15px] border border-[#27272a] bg-[#18181b] px-[30px] pt-[20px]">
                <div className="flex w-full items-center justify-between">
                  <p className="text-[18px] font-bold leading-[normal] text-white">Is this just another AI commenting tool?</p>
                  <div className="-scale-y-100">
                    <img src={assets.faqChevron} alt="" className="size-[24px]" />
                  </div>
                </div>
                <div className="flex h-[114px] w-[662px] items-center justify-center rounded-bl-[15px] rounded-br-[15px] bg-[rgba(186,186,186,0.05)]">
                  <p className="w-[588px] text-[16px] leading-[normal] text-white">
                    No. AI-assisted writing is included, but it’s not the core. Commenter.ai is a system for tracking activity, keeping history attached, managing follow-ups, and seeing patterns across comments, DMs, and leads.
                  </p>
                </div>
              </div>

              {[
                "Does this guarantee more leads or sales?",
                "Do I need to change how I use LinkedIn?",
                "Is it safe to use with LinkedIn?",
                "Can I cancel anytime?",
              ].map((q) => (
                <div key={q} className="flex h-[72px] items-center justify-between rounded-[15px] border border-[#27272a] bg-[#18181b] px-[30px]">
                  <p className="text-[18px] font-bold leading-[normal] text-white">{q}</p>
                  <img src={assets.faqChevron} alt="" className="size-[24px]" />
                </div>
              ))}
            </div>

            <div className="flex w-[336px] flex-col items-center gap-[5px]">
              <Link
                href="/register"
                className="inline-flex h-[49px] w-[209px] items-center justify-center rounded-[12px] border border-[#79a4f3] bg-[linear-gradient(105.255deg,#0050b2_13.921%,#41bcff_166.78%)] text-[16px] font-medium leading-[24px] text-white"
              >
                Start Free Trial
              </Link>
              <div className="flex w-full items-center justify-center gap-[37px]">
                <div className="flex items-center gap-[9px]">
                  <img src={assets.faqTinyCheck} alt="" className="size-[12px]" />
                  <span className="text-[9px] font-light leading-[normal] text-white">7-day trial</span>
                </div>
                <div className="flex items-center gap-[9px]">
                  <img src={assets.faqTinyCheck} alt="" className="size-[12px]" />
                  <span className="text-[9px] font-light leading-[normal] text-white">No credit card required</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
