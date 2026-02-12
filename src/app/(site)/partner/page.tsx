import Link from "next/link";

function PartnerBullet({ label }: Readonly<{ label: string }>) {
  return (
    <div className="flex items-center gap-[12px]">
      <div className="relative size-[24px] rounded-full bg-[#d9d9d9]" aria-hidden>
        <svg
          className="absolute left-1/2 top-1/2 h-[10px] w-[12px] -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 12 10"
        >
          <path
            d="M1.5 5.4 4.2 8 10.5 1.5"
            fill="none"
            stroke="#00C950"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </div>
      <span className="font-[var(--font-inter)] text-[14px] font-normal leading-[20px] text-[#d1d5dc]">
        {label}
      </span>
    </div>
  );
}

function EconomicsCard({
  value,
}: Readonly<{ value: string }>) {
  return (
    <div
      className="relative h-[150px] w-[306px] rounded-[20px] backdrop-blur-[10px]"
      style={{
        background:
          "linear-gradient(135deg, rgba(24.54, 65.55, 147.56, 0.13) 0%, rgba(255, 255, 255, 0.09) 100%)",
      }}
    >
      <div className="absolute left-[26px] top-[10px] font-[var(--font-inter)] text-[16px] font-medium leading-[20px] text-white">
        Commission
      </div>
      <div className="absolute left-[26px] top-[46px] font-[var(--font-inter)] text-[30px] font-medium leading-[20px] text-white">
        {value}
      </div>
      <div className="absolute left-[26px] top-[82px] font-[var(--font-inter)] text-[15px] font-normal leading-[19.5px] text-[#99a1af]">
        Recurring commission on every
        <br />
        referred subscription. Higher rates
        <br />
        available as volume grows
      </div>
    </div>
  );
}

function HowItWorksCard({
  title,
  description,
}: Readonly<{
  title: string;
  description: string;
}>) {
  return (
    <div
      className="flex h-[160px] w-[280px] flex-col items-center justify-center rounded-[20px] px-[16px] text-center backdrop-blur-[10px]"
      style={{
        background:
          "linear-gradient(135deg, rgba(14, 50, 117, 0.38) 0%, rgba(255, 255, 255, 0.10) 100%)",
      }}
    >
      <div className="font-[var(--font-montserrat)] text-[42px] font-medium leading-[48px] text-white">{title}</div>
      <div className="mt-[14px] font-[var(--font-inter)] text-[12px] font-normal leading-[19px] text-[#99a1af]">
        {description}
      </div>
    </div>
  );
}

function PartnerBenefitCard({
  title,
  description,
}: Readonly<{
  title: string;
  description: string;
}>) {
  return (
    <div
      className="inline-flex w-[579px] flex-col items-start gap-[16px] rounded-[20px] px-[10px] py-[27px] backdrop-blur-[10px]"
      style={{
        background:
          "linear-gradient(135deg, rgba(24.54, 65.55, 147.56, 0.13) 0%, rgba(255, 255, 255, 0.09) 100%)",
      }}
    >
      <div className="w-full font-[var(--font-montserrat)] text-[24px] font-medium leading-[20px] text-white">
        {title}
      </div>
      <div className="w-full font-[var(--font-montserrat)] text-[20px] font-normal leading-[19.5px] text-[#99a1af]">
        {description}
      </div>
    </div>
  );
}

export default function PartnerPage() {
  return (
    <main className="inline-flex w-[1376px] flex-col items-center justify-start gap-[60px] px-[24px] py-[64px]">
      <section className="relative -mx-[24px] flex h-[523px] w-[1376px] justify-center overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 58% 48% at 50% 86%, rgba(35, 133, 184, 0.42) 0%, rgba(10, 40, 58, 0.34) 34%, rgba(0, 0, 0, 0) 72%)",
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[80px] backdrop-blur-[6px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[120px] bg-[linear-gradient(180deg,rgba(10,10,10,0)_0%,rgba(10,10,10,0.72)_72%,#0a0a0a_100%)]" />
        <div className="relative h-[523px] w-[756px]">
          <div className="absolute left-0 top-0 h-[180px] w-[756px]">
            <h1 className="absolute left-[42.5px] top-0 text-center font-[var(--font-montserrat)] text-[38px] font-bold leading-[48px] tracking-[0.35px] text-white">
              Become a Commenter AI partner
            </h1>
            <p className="absolute left-0 top-[96px] text-center font-[var(--font-montserrat)] text-[24px] font-normal leading-[36px] tracking-[0.4px] text-white">
              Build a consistent partner channel with clear offers and recurring revenue.
              <br />
              Share Commenter AI with your audience and grow together.
            </p>
          </div>

          <Link
            href="/login"
          className="absolute left-[243px] top-[274px] inline-flex h-[72px] w-[270px] items-center justify-center gap-[10px] rounded-[4px] bg-[#155dfc] px-[24px] py-[8px] text-center font-[var(--font-montserrat)] text-[24px] font-extrabold leading-[20px] text-white transition-[transform,box-shadow,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#2b7fff] hover:shadow-[0_10px_24px_rgba(43,127,255,0.35)] active:translate-y-0 active:scale-100"
          >
            Apply Now
          </Link>
        </div>
      </section>

      <h2 className="text-center font-[var(--font-montserrat)] text-[30px] font-bold leading-[48px] tracking-[0.35px] text-white">
        Simple economics
      </h2>

      <div className="flex w-full max-w-[980px] items-center justify-center gap-[24px]">
        <EconomicsCard value="20%" />
        <EconomicsCard value="Monthly" />
        <EconomicsCard value="90 Days" />
      </div>

      <section className="relative h-[171px] w-[1232px]">
        <h3 className="absolute left-0 top-0 w-[1232px] text-center font-[var(--font-montserrat)] text-[30px] font-bold leading-[36px] tracking-[0.4px] text-white">
          Who succeeds here
        </h3>

        <div className="absolute left-1/2 top-[87px] flex -translate-x-1/2 flex-col gap-[18px]">
          <PartnerBullet label="Founders" />
          <PartnerBullet label="Sales & business development" />
          <PartnerBullet label="Recruiters" />
        </div>
      </section>

      <section className="flex w-full flex-col items-center gap-[48px]">
        <h3 className="text-center font-[var(--font-montserrat)] text-[30px] font-bold leading-[48px] tracking-[0.35px] text-white">
          How it works
        </h3>
        <p className="text-center font-[var(--font-montserrat)] text-[24px] font-normal leading-[48px] tracking-[0.4px] text-white">
          Build a consistent partner channel with clear offers and recurring revenue.
          <br />
          Share Commenter AI with your audience and grow together.
        </p>

        <div className="flex w-full max-w-[920px] items-center justify-center gap-[18px]">
          <HowItWorksCard title="Apply" description="Fill out the partner form and tell us about your audience." />
          <HowItWorksCard
            title="Promote"
            description="Share your link with your network using your content and channels."
          />
          <HowItWorksCard
            title="Earn"
            description="Get recurring commission for every referred subscription that stays active."
          />
        </div>
      </section>

      <section className="inline-flex w-full flex-col items-center justify-start gap-[48px] border-t border-[#1e2939] px-[24px] pt-[24px]">
        <h3 className="text-center font-[var(--font-montserrat)] text-[30px] font-bold leading-[36px] tracking-[0.4px] text-white">
          Approved by top experts
        </h3>

        <div className="relative h-[233px] w-[666px] rounded-[10px] bg-[#101828] outline outline-1 outline-[#1e2939] outline-offset-[-1px]">
          <img
            alt=""
            className="absolute left-[18px] top-[40px] h-[145px] w-[145px] rounded-full object-cover"
            src="https://www.figma.com/api/mcp/asset/e474db12-6cb8-4077-a897-03c013daafd3"
          />

          <div className="absolute left-[189px] top-[45px] inline-flex h-[106.5px] w-[448px] items-start gap-[16px]">
            <div className="inline-flex h-[106.5px] flex-1 flex-col items-start gap-[22px]">
              <div className="flex h-[40px] w-full flex-col items-start">
                <div className="relative h-[24px] w-full">
                  <div className="absolute left-0 top-[-0.5px] font-[var(--font-inter)] text-[16px] font-semibold leading-[24px] text-white">
                    Jasmin Rau - 43,000+ Followers
                  </div>
                </div>
                <div className="relative h-[16px] w-full">
                  <div className="absolute left-0 top-[1px] font-[var(--font-inter)] text-[12px] font-normal leading-[16px] text-[#99a1af]">
                    Helping AI Startups in a SaaS Client Process
                  </div>
                </div>
              </div>

              <div className="relative h-[58.5px] w-full">
                <div className="absolute left-0 top-[0.5px] w-[304px] font-[var(--font-inter)] text-[12px] font-normal leading-[19.5px] text-[#d1d5dc]">
                  Not sure where to start with LinkedIn? Tell us where you&apos;re struggling. Then, I&apos;ll share
                  my advice and make the positioning game easier and easier.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inline-flex w-full flex-col items-center justify-start gap-[48px] border-t border-[#1e2939] px-[24px] pt-[24px]">
        <div className="inline-flex h-[36px] w-[1232px] items-start justify-start">
          <div className="flex-1 text-center font-[var(--font-montserrat)] text-[30px] font-bold leading-[36px] tracking-[0.4px] text-white">
            Partner benefits
          </div>
        </div>

        <div className="inline-flex w-[1198px] flex-col items-start gap-[47px]">
          <div className="inline-flex w-full items-center justify-start gap-[40px]">
            <PartnerBenefitCard
              title="Opportunity to earn cash bonuses"
              description="Top performers get quarterly bonuses based on volume."
            />
            <PartnerBenefitCard
              title="Opportunity to earn equity"
              description="Exceptional partners can earn equity in the company."
            />
          </div>
          <div className="inline-flex w-full items-center justify-start gap-[40px]">
            <PartnerBenefitCard
              title="Personal support"
              description="Dedicated partner manager to help you succeed."
            />
            <PartnerBenefitCard
              title="Marketing resources"
              description="Pre-built content, templates, and case studies to share."
            />
          </div>
        </div>
      </section>

      <section className="inline-flex w-full flex-col items-center justify-start gap-[48px] border-t border-[#1e2939] bg-[#18171c] px-[24px] pb-[65px] pt-[65px]">
        <h3 className="text-center font-[var(--font-montserrat)] text-[30px] font-bold leading-[36px] tracking-[0.4px] text-white">
          Ready to earn with us?
        </h3>
        <p className="w-[947px] text-center font-[var(--font-montserrat)] text-[28px] font-semibold leading-[33px] text-[#99a1af]">
          Join thousands of partners earning recurring income by helping
          <br />
          people scale their LinkedIn engagement
        </p>
        <Link
          href="/login"
          className="inline-flex items-center justify-center gap-[10px] rounded-[10px] bg-[#2b7fff] px-[26px] py-[16px] text-center font-[var(--font-montserrat)] text-[18px] font-bold leading-[28px] text-white transition-[transform,box-shadow,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#3b8cff] hover:shadow-[0_10px_24px_rgba(43,127,255,0.35)] active:translate-y-0 active:scale-100"
        >
          Apply now
        </Link>
      </section>
    </main>
  );
}
