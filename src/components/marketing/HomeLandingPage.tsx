import Link from "next/link";

const homeHeroAssets = {
  imageSarahJohnson: "https://www.figma.com/api/mcp/asset/eff79cce-20a0-40a6-b556-ee6c8806d065",
  imageEmilyRodriguez: "https://www.figma.com/api/mcp/asset/6b9e0a91-61e9-4d67-9d66-2e660d333214",
  imageMichaelChen: "https://www.figma.com/api/mcp/asset/945f2832-f474-46e8-a570-98472a92a975",
  star: "https://www.figma.com/api/mcp/asset/384753f8-79d0-4d57-aa8d-f048fbcadfa8",
  iconBlue: "https://www.figma.com/api/mcp/asset/592e4ecf-7891-4adc-b54b-0e6e7d73ab1d",
  iconPurple: "https://www.figma.com/api/mcp/asset/c0e287f7-672a-4064-868e-e0be6ad78a82",
  iconGreen: "https://www.figma.com/api/mcp/asset/a9c584f1-c838-4384-ade8-fe870edd14ad",
  googleIcon: "https://www.figma.com/api/mcp/asset/52051a85-1147-4998-8815-6c415d8a07eb",
  appleIcon: "https://www.figma.com/api/mcp/asset/0f1e431f-c96e-4255-bdb1-27bb9bdb087f",
} as const;

const fullLoopAssets = {
  rectangle22: "https://www.figma.com/api/mcp/asset/b64ebace-0400-4ec5-b848-71c4826e4d4b",
  check: "https://www.figma.com/api/mcp/asset/c21065ff-6563-492b-846d-02ade24728e9",
} as const;

const testimonialsAssets = {
  rectangle21: "https://www.figma.com/api/mcp/asset/653a1677-5946-4ff4-9f7c-9e4a3312206a",
  rectangle22: "https://www.figma.com/api/mcp/asset/35cae8da-4139-4e13-8426-2bcfef53fc36",
  rectangle26: "https://www.figma.com/api/mcp/asset/a2d604e4-d6ff-42c6-bf3f-e274986f9f00",
  group47: "https://www.figma.com/api/mcp/asset/b2dbc619-f80f-4101-9b74-7d1598c01211",
  group48: "https://www.figma.com/api/mcp/asset/c0522bfc-5f40-448f-b0f3-307126f9de6c",
} as const;

export default function HomeLandingPage() {
  const pricingPlans = [
    {
      name: "Teams",
      subtitle: "Perfect for Companies",
      price: "$350",
      cadence: "/month",
      billingNote: "Billed monthly. 25 members included.",
      features: [
        "Everything in Workflow +",
        "SAML SSO",
        "Private teamspaces",
        "Bulk export",
        "Advanced security & controls",
        "Audit logs",
        "Custom member onboarding & training resources",
        "Dedicated success manager",
      ],
    },
    {
      name: "Workflow",
      subtitle: "Perfect for Small teams",
      price: "$149",
      cadence: "/month",
      billingNote: "Billed monthly. 10 members included.",
      features: [
        "Everything in Brand +",
        "Automation capability via API",
        "Advanced permissions",
        "Unlimited version history",
        "Admin tools & controls",
        "Priority support",
      ],
    },
    {
      name: "Signal",
      subtitle: "Perfect for Individuals",
      price: "$0",
      cadence: "/month",
      billingNote: "Billed monthly. Cancel anytime.",
      features: ["Custom workspace + Unlimited members", "Unlimited docs", "Collaborative workspace", "30+ integrations"],
    },
  ] as const;

  return (
    <main className="flex w-full flex-col items-center gap-[24px] font-[var(--font-inter)]">
      {/* Hero background (104:1263) + hero content (104:1264) */}
      <section className="relative h-[606px] w-[1440px] overflow-hidden" data-node-id="104:1262">
        <div
          className="absolute left-0 top-0 h-[553px] w-[1440px]"
          data-name="Container"
          data-node-id="104:1263"
          style={{
            background:
              "radial-gradient(ellipse 74.37% 111.55% at 50.04% 84.37%, #152D39 10%, rgba(0, 0, 0, 0) 60%)",
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[80px] backdrop-blur-[6px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[120px] bg-[linear-gradient(180deg,rgba(10,10,10,0)_0%,rgba(10,10,10,0.72)_72%,#0a0a0a_100%)]" />

        <div
          className="absolute left-[100px] top-0 z-10 h-[606px] w-[1340px]"
          data-name="Container"
          data-node-id="104:1264"
        >
          <h1
            className="absolute left-[66px] top-[177px] w-[604px] whitespace-pre-wrap font-[var(--font-montserrat)] text-[38px] font-bold leading-[48px] tracking-[0.3516px] text-white"
            data-node-id="104:1265"
          >
            <span className="block">Everything you need to stop losing LinkedIn</span>
            <span className="block">conversations</span>
          </h1>

          <div className="absolute left-[92px] top-[453px] h-[36px] w-[130px]" data-node-id="104:1266">
            <Link
              href="/login"
              className="absolute left-[-19px] top-0 flex h-[60px] w-[168px] items-center justify-center rounded-[10px] bg-[#2b7fff] font-[var(--font-montserrat)] text-[18px] font-bold leading-[28px] tracking-[-0.4395px] text-white transition-[transform,box-shadow,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#3b8cff] hover:shadow-[0_10px_24px_rgba(43,127,255,0.35)] active:translate-y-0 active:scale-100"
              data-name="Button"
              data-node-id="104:1267"
            >
              <span className="relative shrink-0 text-center" data-node-id="104:1268">
                Start for free
              </span>
            </Link>
          </div>

          {/* Mock window (104:1269) */}
          <div className="absolute left-[914px] top-[160px]" data-node-id="104:1269">
            <div
              className="absolute h-[265px] w-[355px] rounded-[18px] opacity-50 backdrop-blur-[10px]"
              data-node-id="104:1271"
              style={{
                backgroundImage:
                  "linear-gradient(114.09430916738202deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)",
              }}
            />
            <div className="absolute h-[24.932px] w-[355px] rounded-tl-[17px] rounded-tr-[17px] bg-[#0d0d0d]" data-node-id="104:1272" />
            <div
              className="absolute left-[229px] top-[6px] h-[11.413px] w-[118.245px] rounded-[20px] backdrop-blur-[10px]"
              data-node-id="104:1273"
              style={{
                backgroundImage:
                  "linear-gradient(163.87401642285528deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)",
              }}
            />

            <div
              className="absolute left-[30px] top-[65px] flex size-[48px] items-center justify-center rounded-[10px] bg-[rgba(43,127,255,0.1)]"
              data-name="Container"
              data-node-id="104:1290"
            >
              <img alt="" className="block size-[24px]" src={homeHeroAssets.iconBlue} data-node-id="104:1291" />
            </div>
            <div
              className="absolute left-[35px] top-[160px] flex size-[48px] items-center justify-center rounded-[10px] bg-[rgba(173,70,255,0.1)]"
              data-name="Container"
              data-node-id="104:1293"
            >
              <img alt="" className="block size-[24px]" src={homeHeroAssets.iconPurple} data-node-id="104:1294" />
            </div>
            <div
              className="absolute left-[136px] top-[72px] flex size-[48px] items-center justify-center rounded-[10px] bg-[rgba(0,201,80,0.1)]"
              data-name="Container"
              data-node-id="104:1296"
            >
              <img alt="" className="block size-[24px]" src={homeHeroAssets.iconGreen} data-node-id="104:1297" />
            </div>
          </div>

          {/* Social proof (104:1318, 104:1319, 104:1274) */}
          <div className="absolute left-[300px] top-[475px] h-[20px] w-[79.008px]" data-node-id="104:1318">
            <img alt="" className="absolute left-0 top-0 block size-[20px]" src={homeHeroAssets.googleIcon} data-node-id="104:1304" />
            <div className="absolute left-[32px] top-0 h-[20px] w-[47.008px]" data-node-id="104:1309">
              <p
                className="absolute left-[24.5px] top-[0.5px] -translate-x-1/2 font-[var(--font-inter)] text-[14px] font-medium leading-[20px] tracking-[-0.1504px] text-white"
                data-node-id="104:1310"
              >
                Google
              </p>
            </div>
          </div>

          <div className="absolute left-[417px] top-[477px] h-[20px] w-[70.266px]" data-node-id="104:1319">
            <img alt="" className="absolute left-0 top-0 block size-[20px]" src={homeHeroAssets.appleIcon} data-node-id="104:1312" />
            <div className="absolute left-[32px] top-0 h-[20px] w-[38.266px]" data-node-id="104:1315">
              <p
                className="absolute left-[19.5px] top-[0.5px] -translate-x-1/2 font-[var(--font-inter)] text-[14px] font-medium leading-[20px] tracking-[-0.1504px] text-white"
                data-node-id="104:1316"
              >
                Apple
              </p>
            </div>
          </div>

          <div className="absolute left-[777px] top-[475px] h-[48px] w-[274px]" data-node-id="104:1274">
            <img
              alt=""
              className="absolute left-0 top-0 block size-[48px] rounded-[16777200px] object-cover"
              src={homeHeroAssets.imageMichaelChen}
              data-node-id="104:1288"
            />
            <img
              alt=""
              className="absolute left-[33px] top-0 block size-[48px] rounded-[16777200px] object-cover"
              src={homeHeroAssets.imageEmilyRodriguez}
              data-node-id="104:1276"
            />
            <img
              alt=""
              className="absolute left-[74px] top-0 block size-[48px] rounded-[16777200px] object-cover"
              src={homeHeroAssets.imageSarahJohnson}
              data-node-id="104:1275"
            />

            <div className="absolute left-[148px] top-[14px] h-[21px] w-[126px]" data-node-id="104:1277">
              {Array.from({ length: 5 }).map((_, idx) => (
                <img
                  // eslint-disable-next-line react/no-array-index-key
                  key={idx}
                  alt=""
                  className="absolute top-0 block size-[21px]"
                  style={{ left: `${idx * 26.25}px` }}
                  src={homeHeroAssets.star}
                  data-name="Icon"
                  data-node-id={idx === 0 ? "104:1278" : idx === 1 ? "104:1280" : idx === 2 ? "104:1282" : idx === 3 ? "104:1284" : "104:1286"}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full loop section (104:548) */}
      <section
        className="flex w-[1376px] flex-col items-center gap-[48px] border-y border-[#1e2939] px-[24px] pt-[65px]"
        data-name="Testimonials"
        data-node-id="104:548"
      >
        <h2
          className="text-center font-[var(--font-montserrat)] text-[38px] font-bold leading-[48px] tracking-[0.3516px] text-white"
          data-node-id="104:594"
        >
          <span className="block">The full LinkedIn loop,</span>
          <span className="block">kept intact</span>
        </h2>

        <p
          className="w-[657px] text-center font-[var(--font-inter)] text-[20px] font-normal leading-[28px] tracking-[-0.4492px] text-[#99a1af]"
          data-node-id="104:595"
        >
          Track conversations, manage follow-ups, and build meaningful connections—all in one place.
        </p>

        {/* Illustration (104:1378) */}
        <div
          className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start"
          data-node-id="104:1378"
        >
          <div className="col-1 ml-[7px] mt-[270px] h-[48px] w-[74px] row-1" data-node-id="104:1379">
            <img alt="" className="block size-full max-w-none" src={fullLoopAssets.rectangle22} />
          </div>

          <div
            className="col-1 ml-0 mt-[97.34px] grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start row-1"
            data-node-id="104:1380"
          >
            <div
              className="col-1 ml-0 mt-[9.8px] h-[179.198px] w-[312.196px] rounded-[20px] backdrop-blur-[10px] row-1"
              data-node-id="104:1381"
              style={{
                backgroundImage:
                  "linear-gradient(120.18183407876862deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)",
              }}
            />
            <div
              className="col-1 ml-[63px] mt-[89.6px] h-[15.4px] w-[187.598px] rounded-[20px] backdrop-blur-[10px] row-1"
              data-node-id="104:1382"
              style={{
                backgroundImage:
                  "linear-gradient(166.1848286342548deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)",
              }}
            />
            <div
              className="col-1 ml-[63px] mt-[124.6px] h-[15.4px] w-[110.599px] rounded-[20px] backdrop-blur-[10px] row-1"
              data-node-id="104:1383"
              style={{
                backgroundImage:
                  "linear-gradient(157.35880805270122deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)",
              }}
            />
            <div
              className="col-1 ml-[39.2px] mt-[30.8px] h-[40.599px] w-[41.999px] rounded-[70px] backdrop-blur-[5px] row-1"
              data-node-id="104:1384"
              style={{
                backgroundImage:
                  "linear-gradient(109.05176312863618deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)",
              }}
            />
            <div
              className="col-1 ml-[39.2px] mt-0 h-[179.198px] w-[310.796px] rounded-[20px] opacity-50 backdrop-blur-[10px] row-1"
              data-node-id="104:1385"
              style={{
                backgroundImage:
                  "linear-gradient(120.0700464121613deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)",
              }}
            />
          </div>

          <div
            className="col-1 ml-[397px] mt-[217px] h-[105px] w-[169px] rounded-[20px] opacity-50 backdrop-blur-[10px] row-1"
            data-node-id="104:1386"
            style={{
              backgroundImage:
                "linear-gradient(118.24926121310872deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)",
            }}
          />

          <div
            className="col-1 ml-[270px] mt-0 grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start row-1"
            data-node-id="104:1387"
          >
            <div
              className="col-1 ml-0 mt-0 h-[157.915px] w-[159.464px] rounded-[15px] backdrop-blur-[5px] row-1"
              data-node-id="104:1388"
              style={{
                backgroundImage:
                  "linear-gradient(108.6289600382595deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)",
              }}
            />
            <div
              className="col-1 ml-[32.51px] mt-[32.51px] h-[92.891px] w-[94.44px] rounded-[70px] backdrop-blur-[5px] row-1"
              data-node-id="104:1389"
              style={{
                backgroundImage:
                  "linear-gradient(108.74674674557349deg, rgba(255, 255, 255, 0.264) 0%, rgba(255, 255, 255, 0.066) 100%)",
              }}
            />
          </div>
        </div>

        {/* Bullet list (104:1504) */}
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start" data-node-id="104:1504">
          <div
            className="col-1 ml-[0.22px] mt-[84px] grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start row-1"
            data-node-id="104:1505"
          >
            <div className="col-1 ml-0 mt-0 size-[24px] row-1" data-node-id="104:1506">
              <img alt="" className="block size-full max-w-none" src={fullLoopAssets.check} />
            </div>
            <div className="col-1 ml-[36px] mt-[2px] h-[20px] w-[65.734px] row-1" data-name="Text" data-node-id="104:1509">
              <p
                className="font-[var(--font-inter)] text-[14px] font-normal leading-[20px] tracking-[-0.1504px] text-[#d1d5dc]"
                data-node-id="104:1510"
              >
                Recruiters
              </p>
            </div>
          </div>

          <div className="col-1 ml-0 mt-0 flex w-[746px] flex-col items-start gap-[18px] row-1" data-node-id="104:1511">
            {[
              { id: "104:1512", textId: "104:1517", label: "Founders", iconId: "104:1513", textBoxId: "104:1516" },
              { id: "104:1518", textId: "104:1523", label: "Sales & business development", iconId: "104:1519", textBoxId: "104:1522" },
              { id: "104:1524", textId: "104:1529", label: "Recruiters", iconId: "104:1525", textBoxId: "104:1528" },
              { id: "104:1530", textId: "104:1535", label: "Recruiters", iconId: "104:1531", textBoxId: "104:1534" },
            ].map((row) => (
              <div key={row.id} className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start" data-node-id={row.id}>
                <div className="col-1 ml-0 mt-0 size-[24px] row-1" data-node-id={row.iconId}>
                  <img alt="" className="block size-full max-w-none" src={fullLoopAssets.check} />
                </div>
                <div className="col-1 ml-[36px] mt-[2px] h-[20px] row-1" data-name="Text" data-node-id={row.textBoxId}>
                  <p
                    className="font-[var(--font-inter)] text-[14px] font-normal leading-[20px] tracking-[-0.1504px] text-[#d1d5dc]"
                    data-node-id={row.textId}
                  >
                    {row.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p
          className="w-[1134px] text-center font-[var(--font-inter)] text-[20px] font-normal leading-[28px] tracking-[-0.4492px] text-[#99a1af]"
          data-node-id="104:1427"
        >
          Track conversations, manage follow-ups, and build meaningful connections—all in one place.
        </p>

        <p
          className="w-[657px] text-center font-[var(--font-inter)] text-[20px] font-normal leading-[28px] tracking-[-0.4492px] text-[#99a1af]"
          data-node-id="104:1428"
        >
          Track conversations, manage follow-ups, and build meaningful connections—all in one place.
        </p>
      </section>

      {/* Testimonials section (104:681) */}
      <section
        className="relative flex w-[1376px] flex-col content-stretch items-center gap-[48px] border-y border-solid border-[#1e2939] px-[24px] pt-[65px]"
        data-name="Testimonials"
        data-node-id="104:681"
      >
        {/* Decorative row (104:1429) */}
        <div className="w-full max-w-[1212px]" data-node-id="104:1429">
          <img
            alt=""
            className="block h-auto w-full opacity-90"
            src="/figma/testimonials-decor.png"
          />
        </div>

        <p
          className="w-[657px] text-center font-[var(--font-inter)] text-[20px] font-normal leading-[28px] tracking-[-0.4492px] text-[#99a1af]"
          data-node-id="104:717"
        >
          Track conversations, manage follow-ups, and build meaningful connections—all in one place.
        </p>

        {/* 3 cards row */}
        <div className="flex w-[1212px] items-center justify-between">
          {Array.from({ length: 3 }).map((_, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <div
              key={idx}
              className="flex h-[151.071px] w-[384px] items-center justify-center rounded-[20px] px-[74px] py-[43px] backdrop-blur-[10px]"
              style={{
                backgroundImage:
                  "linear-gradient(142.22775801952253deg, rgba(25, 66, 148, 0.13) 0%, rgba(255, 255, 255, 0.086) 100%)",
              }}
            >
              <p className="font-[var(--font-inter)] text-[26px] font-semibold leading-[24px] tracking-[-0.3125px] text-[#d1d5dc]">
                Text
              </p>
            </div>
          ))}
        </div>

        <p
          className="w-[657px] text-center font-[var(--font-inter)] text-[20px] font-normal leading-[28px] tracking-[-0.4492px] text-[#99a1af]"
          data-node-id="104:719"
        >
          Track conversations, manage follow-ups, and build meaningful connections—all in one place.
        </p>

        <div
          className="text-center font-[var(--font-montserrat)] text-[38px] font-bold leading-[48px] tracking-[0.3516px] text-white"
          data-node-id="104:718"
        >
          <p className="mb-0">Everything you need to stop losing LinkedIn</p>
          <p>conversations</p>
        </div>

        <div className="relative grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start" data-node-id="104:1559">
          <div
            className="col-1 ml-0 mt-0 inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start row-1"
            data-node-id="104:1547"
          >
            <div
              className="col-1 flex h-[151.071px] w-[584px] items-center justify-center rounded-[20px] px-[74px] py-[43px] backdrop-blur-[10px] row-1"
              data-node-id="104:1548"
              style={{
                backgroundImage:
                  "linear-gradient(142.22775801952253deg, rgba(25, 66, 148, 0.13) 0%, rgba(255, 255, 255, 0.086) 100%)",
              }}
            >
              <p
                className="relative shrink-0 text-center font-[var(--font-inter)] text-[26px] font-semibold leading-[24px] tracking-[-0.3125px] text-[#d1d5dc]"
                data-node-id="104:1549"
              >
                Text
              </p>
            </div>
          </div>

          <div
            className="col-1 ml-0 mt-[173px] inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start row-1"
            data-node-id="104:1553"
          >
            <div
              className="col-1 flex h-[151.071px] w-[584px] items-center justify-center rounded-[20px] px-[74px] py-[43px] backdrop-blur-[10px] row-1"
              data-node-id="104:1554"
              style={{
                backgroundImage:
                  "linear-gradient(142.22775801952253deg, rgba(25, 66, 148, 0.13) 0%, rgba(255, 255, 255, 0.086) 100%)",
              }}
            >
              <p
                className="relative shrink-0 text-center font-[var(--font-inter)] text-[26px] font-semibold leading-[24px] tracking-[-0.3125px] text-[#d1d5dc]"
                data-node-id="104:1555"
              >
                Text
              </p>
            </div>
          </div>

          <div
            className="col-1 ml-[606px] mt-0 inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start row-1"
            data-node-id="104:1550"
          >
            <div
              className="col-1 flex h-[151.071px] w-[606px] items-center justify-center rounded-[20px] px-[74px] py-[43px] backdrop-blur-[10px] row-1"
              data-node-id="104:1551"
              style={{
                backgroundImage:
                  "linear-gradient(143.2486537634269deg, rgba(25, 66, 148, 0.13) 0%, rgba(255, 255, 255, 0.086) 100%)",
              }}
            >
              <p
                className="relative shrink-0 text-center font-[var(--font-inter)] text-[26px] font-semibold leading-[24px] tracking-[-0.3125px] text-[#d1d5dc]"
                data-node-id="104:1552"
              >
                Text
              </p>
            </div>
          </div>

          <div
            className="col-1 ml-[606px] mt-[173px] inline-grid grid-cols-[max-content] grid-rows-[max-content] place-items-start row-1"
            data-node-id="104:1556"
          >
            <div
              className="col-1 flex h-[151.071px] w-[606px] items-center justify-center rounded-[20px] px-[74px] py-[43px] backdrop-blur-[10px] row-1"
              data-node-id="104:1557"
              style={{
                backgroundImage:
                  "linear-gradient(143.2486537634269deg, rgba(25, 66, 148, 0.13) 0%, rgba(255, 255, 255, 0.086) 100%)",
              }}
            >
              <p
                className="relative shrink-0 text-center font-[var(--font-inter)] text-[26px] font-semibold leading-[24px] tracking-[-0.3125px] text-[#d1d5dc]"
                data-node-id="104:1558"
              >
                Text
              </p>
            </div>
          </div>
        </div>

        <p
          className="w-[657px] text-center font-[var(--font-inter)] text-[20px] font-normal leading-[28px] tracking-[-0.4492px] text-[#99a1af]"
          data-node-id="104:1560"
        >
          Track conversations, manage follow-ups, and build meaningful connections—all in one place.
        </p>

        <p
          className="w-[657px] text-center font-[var(--font-inter)] text-[20px] font-normal leading-[28px] tracking-[-0.4492px] text-[#99a1af]"
          data-node-id="104:1561"
        >
          Track conversations, manage follow-ups, and build meaningful connections—all in one place.
        </p>
      </section>

      {/* Section (104:780) */}
      <section
        className="flex w-[1376px] flex-col items-center gap-[48px] border-y border-solid border-[#1e2939] px-[24px] pt-[65px]"
        data-name="Testimonials"
        data-node-id="104:780"
      >
        <div
          className="text-center font-[var(--font-montserrat)] text-[38px] font-bold leading-[48px] tracking-[0.3516px] text-white"
          data-node-id="104:781"
        >
          <p className="mb-0">Everything you need to stop losing LinkedIn</p>
          <p>conversations</p>
        </div>

        <p
          className="w-[657px] text-center font-[var(--font-inter)] text-[20px] font-normal leading-[28px] tracking-[-0.4492px] text-[#99a1af]"
          data-node-id="104:782"
        >
          Track conversations, manage follow-ups, and build meaningful connections—all in one place.
        </p>

        <div className="inline-flex items-center gap-[12px]" data-node-id="104:786">
          <img alt="" className="block size-[24px]" src="/figma/icon-check.svg" data-node-id="104:788" />
          <p
            className="font-[var(--font-inter)] text-[14px] font-normal leading-[20px] tracking-[-0.1504px] text-[#d1d5dc]"
            data-node-id="104:792"
          >
            Recruiters
          </p>
        </div>

        <div className="flex w-[1048px] flex-col items-start gap-[60px]" data-node-id="104:1581">
          {Array.from({ length: 3 }).map((_, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <div
              key={idx}
              className="flex h-[445px] w-[1048px] items-center justify-center rounded-[20px] px-[74px] py-[43px] backdrop-blur-[10px]"
              style={{
                backgroundImage:
                  "linear-gradient(128.1737820696793deg, rgba(25, 66, 148, 0.13) 0%, rgba(255, 255, 255, 0.086) 100%)",
              }}
              data-node-id={idx === 0 ? "104:1573" : idx === 1 ? "104:1576" : "104:1583"}
            >
              <p className="text-center font-[var(--font-inter)] text-[26px] font-semibold leading-[24px] tracking-[-0.3125px] text-[#d1d5dc]">
                Text
              </p>
            </div>
          ))}
        </div>

        <div
          className="text-center font-[var(--font-montserrat)] text-[38px] font-bold leading-[48px] tracking-[0.3516px] text-white"
          data-node-id="104:1588"
        >
          <p className="mb-0">Everything you need to stop losing LinkedIn</p>
          <p>conversations</p>
        </div>

        <p
          className="w-[657px] text-center font-[var(--font-inter)] text-[20px] font-normal leading-[28px] tracking-[-0.4492px] text-[#99a1af]"
          data-node-id="104:1589"
        >
          Track conversations, manage follow-ups, and build meaningful connections—all in one place.
        </p>

        <div className="flex w-[1156.503px] items-start gap-[77.509px]" data-node-id="104:1590">
          <div className="flex w-[344.861px] flex-col gap-[68px]">
            {Array.from({ length: 5 }).map((_, idx) => (
              // eslint-disable-next-line react/no-array-index-key
              <div
                key={idx}
                className="flex h-[117px] w-[344.861px] items-center justify-center rounded-[20px] px-[74px] py-[43px] backdrop-blur-[10px]"
                style={{
                  backgroundImage:
                    "linear-gradient(134.53693860488448deg, rgba(25, 66, 148, 0.13) 0%, rgba(255, 255, 255, 0.086) 100%)",
                }}
                data-node-id={idx === 0 ? "104:1635" : idx === 1 ? "104:1638" : idx === 2 ? "104:1641" : undefined}
              >
                <p className="text-center font-[var(--font-inter)] text-[26px] font-semibold leading-[24px] tracking-[-0.3125px] text-[#d1d5dc]">
                  Text
                </p>
              </div>
            ))}
          </div>

          <div className="flex w-[734.133px] flex-col gap-[48px]">
            <div className="flex w-full gap-[28.737px]">
              {Array.from({ length: 3 }).map((_, idx) => (
                // eslint-disable-next-line react/no-array-index-key
                <div
                  key={idx}
                  className="flex h-[232px] w-[225.553px] items-center justify-center rounded-[20px] bg-[#194294] px-[74px] py-[43px] backdrop-blur-[10px]"
                  data-node-id={idx === 0 ? "104:1644" : idx === 1 ? "104:1647" : "104:1650"}
                >
                  <p className="text-center font-[var(--font-inter)] text-[26px] font-semibold leading-[24px] tracking-[-0.3125px] text-[#d1d5dc]">
                    Text
                  </p>
                </div>
              ))}
            </div>

            <div
              className="flex h-[577px] w-full items-center justify-center rounded-[20px] px-[74px] py-[43px] backdrop-blur-[10px]"
              style={{
                backgroundImage:
                  "linear-gradient(128.1737820696793deg, rgba(25, 66, 148, 0.13) 0%, rgba(255, 255, 255, 0.086) 100%)",
              }}
            >
              <p className="text-center font-[var(--font-inter)] text-[26px] font-semibold leading-[24px] tracking-[-0.3125px] text-[#d1d5dc]">
                Text
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section (104:858) */}
      <section
        className="flex w-[1376px] flex-col items-center gap-[48px] border-y border-solid border-[#1e2939] px-[24px] pt-[65px]"
        data-node-id="104:858"
      >
        <div className="text-center font-[var(--font-montserrat)] text-[38px] font-bold leading-[48px] tracking-[0.3516px] text-white">
          <p className="mb-0">Everything you need to stop losing LinkedIn</p>
          <p>conversations</p>
        </div>

        <p className="w-[657px] text-center font-[var(--font-inter)] text-[20px] font-normal leading-[28px] tracking-[-0.4492px] text-[#99a1af]">
          Track conversations, manage follow-ups, and build meaningful connections—all in one place.
        </p>

        <div className="flex w-[1212px] items-center justify-between">
          {Array.from({ length: 3 }).map((_, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <div
              key={idx}
              className="flex h-[151.071px] w-[384px] items-center justify-center rounded-[20px] px-[74px] py-[43px] backdrop-blur-[10px]"
              style={{
                backgroundImage:
                  "linear-gradient(142.22775801952253deg, rgba(25, 66, 148, 0.13) 0%, rgba(255, 255, 255, 0.086) 100%)",
              }}
            >
              <p className="text-center font-[var(--font-inter)] text-[26px] font-semibold leading-[24px] tracking-[-0.3125px] text-[#d1d5dc]">
                Text
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section (104:894) */}
      <section
        className="flex w-[1376px] flex-col items-center gap-[48px] border-y border-solid border-[#1e2939] px-[24px] pt-[65px]"
        data-node-id="104:894"
      >
        <div className="text-center font-[var(--font-montserrat)] text-[38px] font-bold leading-[48px] tracking-[0.3516px] text-white">
          <p className="mb-0">Everything you need to stop losing LinkedIn</p>
          <p>conversations</p>
        </div>

        {Array.from({ length: 5 }).map((_, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <p
            key={idx}
            className="w-[657px] text-center font-[var(--font-inter)] text-[20px] font-normal leading-[28px] tracking-[-0.4492px] text-[#99a1af]"
          >
            Track conversations, manage follow-ups, and build meaningful connections—all in one place.
          </p>
        ))}
      </section>

      {/* Section (104:1666) */}
      <section
        className="flex w-[1376px] flex-col items-center gap-[48px] border-y border-solid border-[#1e2939] px-[24px] pt-[65px]"
        data-node-id="104:1666"
      >
        <div className="text-center font-[var(--font-montserrat)] text-[38px] font-bold leading-[48px] tracking-[0.35px] text-white">
          Everything you need to stop losing LinkedIn
          <br />
          conversations
        </div>

        <p className="w-[657px] text-center font-[var(--font-inter)] text-[20px] font-normal leading-[28px] text-[#99a1af]">
          Track conversations, manage follow-ups, and build meaningful connections—all in one place.
        </p>

        <div className="inline-flex items-start gap-[44px]">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="flex h-[530px] w-[390px] flex-col rounded-[20px] p-[32px] backdrop-blur-[10px]"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.03) 100%)",
              }}
            >
              <div>
                <div className="font-[var(--font-montserrat)] text-[20px] font-semibold leading-[28px] text-white">
                  {plan.name}
                </div>
                <div className="mt-[4px] font-[var(--font-montserrat)] text-[14px] font-normal leading-[20px] text-[#99a1af]">
                  {plan.subtitle}
                </div>
              </div>

              <div className="mt-[20px] flex items-end gap-[8px]">
                <div className="font-[var(--font-montserrat)] text-[36px] font-bold leading-[40px] tracking-[0.37px] text-white">
                  {plan.price}
                </div>
                <div className="pb-[4px] font-[var(--font-montserrat)] text-[16px] font-normal leading-[24px] text-[#99a1af]">
                  {plan.cadence}
                </div>
              </div>

              <div className="mt-[4px] font-[var(--font-montserrat)] text-[14px] font-normal leading-[20px] text-[#6a7282]">
                {plan.billingNote}
              </div>

              <div className="mt-[18px] h-[48px] w-full rounded-[4px] bg-[#155dfc]">
                <div className="flex h-full w-full items-center justify-center text-center font-[var(--font-montserrat)] text-[16px] font-medium leading-[24px] text-white">
                  Start 7 day free trial
                </div>
              </div>

              <div className="mt-[24px] flex flex-col gap-[12px]">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-[8px]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-[2px] shrink-0"
                      aria-hidden="true"
                    >
                      <path
                        d="M16.6667 5L7.5 14.1667L3.33333 10"
                        stroke="#2B7FFF"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="font-[var(--font-montserrat)] text-[14px] font-normal leading-[20px] text-[#d1d5dc]">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto" />
            </div>
          ))}
        </div>
      </section>

      {/* Section (absolute layout + testimonials) */}
      <section className="w-[1376px] border-y border-[#1e2939]">
        <div className="relative h-[1180px] w-full">
          <div className="absolute left-[228px] top-[65px] w-[920px] text-center font-[var(--font-montserrat)] text-[38px] font-bold leading-[48px] tracking-[0.35px] text-white">
            Everything you need to stop losing LinkedIn
            <br />
            conversations
          </div>

          <div className="absolute left-[359.5px] top-[209px] w-[657px] text-center font-[var(--font-inter)] text-[20px] font-normal leading-[28px] text-[#99a1af]">
            Track conversations, manage follow-ups, and build meaningful connections—all in one place.
          </div>

          {[
            {
              top: 313,
              name: "Sarah Johnson",
              title: "Product Manager at TechCorp",
              quote:
                "This tool has completely transformed how we manage customer conversations. The integration with Slack alone has saved us hours every week. Highly recommended!",
              avatar: "/figma/avatar-sarah.png",
            },
            {
              top: 594,
              name: "Michael Chen",
              title: "Founder at StartupXYZ",
              quote:
                "The analytics features are incredible. We can finally see patterns in our customer communications that we never noticed before. Worth every penny.",
              avatar: "/figma/avatar-michael.png",
            },
            {
              top: 875,
              name: "Emily Rodriguez",
              title: "Customer Success Lead",
              quote:
                "Best investment we've made this year. The searchability and organization features make it so easy to find old conversations and keep track of customer needs.",
              avatar: "/figma/avatar-emily.png",
            },
          ].map((t) => (
            <div
              key={t.name}
              className="absolute left-[771px] flex h-[233px] w-[394px] flex-col gap-[16px] rounded-[10px] border border-[#1e2939] bg-[#101828] px-[25px] pb-[1px] pt-[25px]"
              style={{ top: `${t.top}px` }}
            >
              <div className="flex items-center gap-[12px]">
                <img alt="" className="size-[48px] rounded-full object-cover" src={t.avatar} />
                <div className="flex flex-col">
                  <div className="font-[var(--font-montserrat)] text-[14px] font-bold leading-[20px] text-white">
                    {t.name}
                  </div>
                  <div className="font-[var(--font-montserrat)] text-[12px] font-medium leading-[16px] text-[#99a1af]">
                    {t.title}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-[4px]">
                {Array.from({ length: 5 }).map((_, idx) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <img key={idx} alt="" className="size-[16px]" src="/figma/icon-star.svg" />
                ))}
              </div>

              <div className="font-[var(--font-montserrat)] text-[14px] font-normal leading-[22.75px] text-[#d1d5dc]">
                {t.quote}
              </div>
            </div>
          ))}

          <div className="absolute left-[165px] top-[512px] flex w-[248px] flex-col items-start gap-[18px]">
            {["Founders", "Sales & business development", "Recruiters", "Consultants"].map((label) => (
              <div key={label} className="flex items-center gap-[12px]">
                <div className="size-[24px] rounded-full bg-[#c3372b]" />
                <div className="font-[var(--font-inter)] text-[14px] font-normal leading-[20px] text-[#d1d5dc]">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute left-[165px] top-[958px] flex flex-col items-start gap-[18px]">
            {["Founders", "Sales & business development", "Recruiters", "Consultants"].map((label) => (
              <div key={label} className="flex items-center gap-[12px]">
                <div className="relative size-[24px] rounded-full bg-[#00c950]">
                  <svg
                    className="absolute left-1/2 top-1/2 h-[10px] w-[12px] -translate-x-1/2 -translate-y-1/2"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M16.6667 5L7.5 14.1667L3.33333 10"
                      stroke="#0b0b0b"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="font-[var(--font-inter)] text-[14px] font-normal leading-[20px] text-[#d1d5dc]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section (absolute 2x5 cards) */}
      <section className="w-[1376px] border-y border-[#1e2939]">
        <div className="relative h-[1150px] w-full">
          <div className="absolute left-[228px] top-[65px] text-center font-[var(--font-montserrat)] text-[38px] font-bold leading-[48px] tracking-[0.35px] text-white">
            Everything you need to stop losing LinkedIn
            <br />
            conversations
          </div>

          {[
            { left: 202, top: 209 },
            { left: 202, top: 390.07 },
            { left: 202, top: 571.14 },
            { left: 202, top: 752.21 },
            { left: 202, top: 933.29 },
            { left: 701.41, top: 209 },
            { left: 701.41, top: 390.07 },
            { left: 701.41, top: 571.14 },
            { left: 701.41, top: 752.21 },
            { left: 701.41, top: 933.29 },
          ].map((pos, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <div
              key={idx}
              className="absolute flex h-[151.07px] w-[473.09px] items-center justify-center gap-[47px] rounded-[20px] px-[74px] py-[43px] backdrop-blur-[10px]"
              style={{
                left: `${pos.left}px`,
                top: `${pos.top}px`,
                backgroundImage:
                  "linear-gradient(135deg, rgba(24.54, 65.55, 147.56, 0.13) 0%, rgba(255, 255, 255, 0.09) 100%)",
              }}
            >
              <div className="text-center font-[var(--font-inter)] text-[26px] font-semibold leading-[24px] text-[#d1d5dc]">
                Cancel anytime
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex w-[1376px] flex-col items-center border-t border-[#1e2939] px-[256px] pt-[97px]">
        <div className="flex w-full flex-col items-center gap-[52px]">
          <div className="relative h-[120px] w-[768px]">
            <div className="absolute left-[48px] top-[1px] w-[671px] text-center font-[var(--font-montserrat)] text-[48px] font-bold leading-[60px] tracking-[0.35px] text-white">
              Ready to stop losing track of conversations?
            </div>
          </div>

          <p className="w-[947px] text-center font-[var(--font-montserrat)] text-[28px] font-semibold leading-[33px] text-[#99a1af]">
            Start with signals.
            <br />
            Upgrade only when you hit a real ceiling.
          </p>

          <Link
            href="/login"
            className="inline-flex items-center justify-center gap-[10px] rounded-[10px] bg-[#2b7fff] px-[26px] py-[16px] text-center font-[var(--font-montserrat)] text-[18px] font-bold leading-[28px] text-white transition-[transform,box-shadow,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#3b8cff] hover:shadow-[0_10px_24px_rgba(43,127,255,0.35)] active:translate-y-0 active:scale-100"
          >
            Start for free
          </Link>

          <div className="relative h-[40px] w-[672px]">
            <div className="absolute left-0 top-0 inline-flex h-[40px] w-[672px] items-start gap-[24px]">
              {[
                { label: "7 Day trial", width: 112.32 },
                { label: "Cancel anytime", width: 112.32 },
                { label: "Centralized control", width: 137.5 },
              ].map((item) => (
                <div key={item.label} className="flex w-[216px] items-center gap-[12px]">
                  <div className="relative size-[38px] rounded-full bg-[#d9d9d9]">
                    <svg
                      className="absolute left-1/2 top-1/2 h-[13px] w-[19px] -translate-x-1/2 -translate-y-1/2"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M16.6667 5L7.5 14.1667L3.33333 10"
                        stroke="#00C950"
                        strokeWidth="4.67"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="relative h-[24px]" style={{ width: `${item.width}px` }}>
                    <div className="absolute left-0 top-[-0.5px] font-[var(--font-montserrat)] text-[16px] font-bold leading-[24px] text-[#d1d5dc]">
                      {item.label}
                    </div>
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
