import Image from "next/image";
import Link from "next/link";

const figmaAssets = {
  profileOne:
    "https://www.figma.com/api/mcp/asset/1911777b-4e54-4c46-9053-bdd9ab696f85",
  profileTwo:
    "https://www.figma.com/api/mcp/asset/aae11c9d-dfc0-432d-8bc8-519b073627c9",
  profileThree:
    "https://www.figma.com/api/mcp/asset/314d9ee6-26cb-441f-8961-7c3a9726e64e",
  profileJasmin:
    "https://www.figma.com/api/mcp/asset/e474db12-6cb8-4077-a897-03c013daafd3",
  google: "https://www.figma.com/api/mcp/asset/cd10e79d-d4a2-4353-a6d3-ab132ed59412",
  apple: "https://www.figma.com/api/mcp/asset/194584df-2ba0-435b-a3d9-a42d99881d5a",
  email: "https://www.figma.com/api/mcp/asset/d1ed7f5b-ba37-45f4-b3ef-73a7f4899c55",
  check: "https://www.figma.com/api/mcp/asset/d3dd2a25-6d00-4da1-9e87-4517813e7c38",
} as const;

type ConversationRow = {
  avatar: string;
  message: string;
};

const conversationRows: ConversationRow[] = [
  {
    avatar: figmaAssets.profileOne,
    message: "Thanks for the connection! - Let's do a 1:1 for alignment on open positions.",
  },
  {
    avatar: figmaAssets.profileTwo,
    message: "Thanks for the connection! - Let's do a 1:1 for alignment on open positions.",
  },
  {
    avatar: figmaAssets.profileThree,
    message: "Thanks for the connection! - Let's do a 1:1 for alignment on open positions.",
  },
];

function SocialButton({ icon, label }: Readonly<{ icon: string; label: string }>) {
  return (
    <button
      type="button"
      className="flex h-[46px] w-full items-center justify-center gap-3 rounded-[10px] border border-[#1e2939] bg-[#1a1a1a] text-[14px] font-medium tracking-[-0.15px] text-white transition hover:border-[#3d5575] hover:bg-[#202020]"
    >
      <Image src={icon} alt="" aria-hidden width={20} height={20} unoptimized />
      {label}
    </button>
  );
}

function ConversationCard({ avatar, message }: Readonly<ConversationRow>) {
  return (
    <div className="flex h-[104px] w-full items-start gap-[12px] border-b border-[#1e2939] pb-1">
      <Image
        src={avatar}
        alt=""
        aria-hidden
        width={48}
        height={48}
        unoptimized
        className="rounded-full object-cover"
      />
      <div className="flex h-[90px] w-[539px] flex-col gap-[4px]">
        <div className="flex h-[48px] items-center gap-[8px]">
          <p className="text-[14px] font-medium leading-[20px] text-white">Sarah Collins</p>
          <p className="flex-1 text-[12px] leading-[16px] text-[#6a7282]">• VP Engineering - HubSpot</p>
          <span className="inline-flex h-[36px] w-[75.1px] items-start rounded-[4px] bg-[rgba(240,177,0,0.2)] px-[8px] pt-[3px] text-[12px] font-normal leading-[16px] text-[#f0b100]">
            HIRING MANAGER
          </span>
        </div>
        <p className="line-clamp-1 text-[12px] leading-[16px] text-[#99a1af]">{message}</p>
        <p className="text-[12px] leading-[16px] text-[#6a7282]">Waiting since: 3 days</p>
      </div>

      <button type="button" className="relative h-[104px] w-[105.4px] shrink-0">
        <span className="absolute left-[18px] top-[9px] text-center text-[12px] font-normal leading-[16px] text-[#51a2ff] hover:text-[#81beff]">
          Start Conversation
        </span>
      </button>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-black font-[var(--font-inter)]">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[62%] bg-[linear-gradient(180deg,#0a0a0a_0%,#101c20_100%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[62%] bg-[radial-gradient(900px_540px_at_26%_95%,rgba(31,126,214,0.34),transparent_70%)]" />

      <div className="relative mx-auto flex min-h-dvh w-full max-w-[1280px] flex-col justify-center gap-10 px-6 py-14 lg:flex-row lg:items-center lg:gap-14">
        <section className="order-2 w-full max-w-[840px] lg:order-1">
          <div className="rounded-2xl border-[10px] border-[#2a2a2a] bg-[#1a1a1a] px-[25px] pb-px pt-[25px]">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-[14px] font-medium tracking-[-0.15px] text-[#d1d5dc]">
                What Needs Attention Now?
              </h2>
              <p className="text-[12px] text-[#6a7282]">Conversations awaiting reply: See all</p>
            </div>

            <div className="space-y-4">
              {conversationRows.map((row, index) => (
                <ConversationCard key={index} avatar={row.avatar} message={row.message} />
              ))}
            </div>
          </div>

          <div className="mt-[34px] flex max-w-[640px] items-start gap-4">
            <Image
              src={figmaAssets.profileJasmin}
              alt=""
              aria-hidden
              width={64}
              height={64}
              unoptimized
              className="rounded-full object-cover"
            />
            <div className="space-y-2">
              <h3 className="text-[16px] font-semibold leading-6 tracking-[-0.31px] text-white">
                Jasmin Rau - 43,000+ Followers
              </h3>
              <p className="text-[12px] text-[#99a1af]">
                Helping AI Startups in a SaaS Client Process
              </p>
              <p className="max-w-[304px] text-[12px] leading-[19.5px] text-[#d1d5dc]">
                Not sure where to start with LinkedIn? Tell us where you&apos;re struggling.
                Then, I&apos;ll share my advice and make the positioning game easier and easier.
              </p>
            </div>
          </div>
        </section>

        <section className="order-1 w-full max-w-[448px] lg:order-2">
          <header className="mb-8 space-y-3">
            <h1 className="max-w-[396px] text-[30px] font-bold leading-9 tracking-[0.3955px] text-white">
              Stop losing track of LinkedIn conversations
            </h1>
            <p className="max-w-[419px] text-[16px] leading-6 tracking-[-0.3125px] text-[#99a1af]">
              One place to see which conversations matter and when to reply.
            </p>
          </header>

          <div className="space-y-3">
            <SocialButton icon={figmaAssets.google} label="Google" />
            <SocialButton icon={figmaAssets.apple} label="Apple" />
          </div>

          <div className="relative mt-6 flex h-4 items-center justify-center">
            <div className="absolute inset-x-0 border-t border-[#1e2939]" />
            <span className="relative bg-black px-3 text-[12px] leading-4 text-[#6a7282]">
              Or continue with email
            </span>
          </div>

          <form className="mt-6 space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-[14px] font-medium leading-5 tracking-[-0.15px] text-white"
              >
                Email address
              </label>
              <div className="relative">
                <Image
                  src={figmaAssets.email}
                  alt=""
                  aria-hidden
                  width={20}
                  height={20}
                  unoptimized
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2"
                />
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="h-[46px] w-full rounded-[10px] border border-[#1e2939] bg-[#1a1a1a] pl-11 pr-4 text-[14px] text-white placeholder:text-[#6a7282] outline-none transition focus:border-[#4f84c8] focus:ring-2 focus:ring-[#2b7fff]/25"
                />
              </div>
            </div>

            <button
              type="submit"
              className="h-12 w-full rounded-[10px] bg-[#2b7fff] text-[16px] font-medium leading-6 tracking-[-0.3125px] text-white transition hover:bg-[#4e96ff]"
            >
              Get my free trial &amp; start saving time
            </button>
          </form>

          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-2 text-[14px] tracking-[-0.15px] text-[#99a1af]">
              <Image src={figmaAssets.check} alt="" aria-hidden width={16} height={16} unoptimized />
              No credit card required
            </div>
            <div className="flex items-center gap-2 text-[14px] tracking-[-0.15px] text-[#99a1af]">
              <Image src={figmaAssets.check} alt="" aria-hidden width={16} height={16} unoptimized />
              Used by 3,000+ professionals
            </div>
            <div className="flex items-center gap-2 text-[14px] tracking-[-0.15px] text-[#99a1af]">
              <Image src={figmaAssets.check} alt="" aria-hidden width={16} height={16} unoptimized />
              Cancel anytime
            </div>
          </div>

          <p className="mt-6 text-center text-[12px] leading-4 text-[#4a5565]">
            All free purchase email addresses admission - you stay no contact.
          </p>
          <p className="mt-5 text-center text-[14px] leading-5 tracking-[-0.15px] text-[#99a1af]">
            Already have account?{" "}
            <Link href="/login" className="font-medium text-white hover:text-[#d1d5dc]">
              Login!
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
