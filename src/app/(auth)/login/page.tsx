import Image from "next/image";
import Link from "next/link";
import { FigmaBrandLogo } from "@/components/layout/FigmaBrandLogo";

const figmaAssets = {
  google: "https://www.figma.com/api/mcp/asset/e326a5ec-b272-4e7c-a4b0-ffd512bbcae7",
  apple: "https://www.figma.com/api/mcp/asset/47caccbf-9fa8-49b1-82e8-10912d7e18e0",
  email: "https://www.figma.com/api/mcp/asset/a445a0b3-eb97-4069-9ff0-8c9a73305e20",
  password:
    "https://www.figma.com/api/mcp/asset/05c9781b-1674-4103-bb04-bb624e6165dd",
  lock: "https://www.figma.com/api/mcp/asset/1cc4cd21-d688-4617-8517-f59d7b325c1b",
} as const;

function SocialAuthButton({
  icon,
  label,
}: Readonly<{ icon: string; label: string }>) {
  return (
    <button
      type="button"
      className="flex h-[46px] w-full items-center justify-center gap-3 rounded-[10px] border border-[#364153] bg-[#2a2a2a] text-[14px] font-medium tracking-[-0.15px] text-white transition hover:border-[#456186] hover:bg-[#313131]"
    >
      <Image src={icon} alt="" aria-hidden width={20} height={20} unoptimized />
      <span>{label}</span>
    </button>
  );
}

export default function LoginPage() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#0f0f0f_0%,#0f191d_100%)] px-4 py-8 font-[var(--font-inter)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(850px_500px_at_50%_97%,rgba(15,96,188,0.35),transparent_70%),radial-gradient(420px_260px_at_50%_8%,rgba(27,80,155,0.25),transparent_78%)]" />

      <div className="relative w-full max-w-[448px]">
        <div className="mb-8 flex h-16 items-end justify-center">
          <FigmaBrandLogo className="!gap-0" textClassName="hidden" />
        </div>

        <section className="rounded-2xl border border-[#1e2939] bg-[rgba(26,26,26,0.8)] px-8 pb-8 pt-8">
          <header className="space-y-1 text-center">
            <h1 className="text-[20px] font-semibold leading-7 tracking-[-0.45px] text-white">
              Login to Commenter AI
            </h1>
            <p className="text-[14px] leading-5 tracking-[-0.15px] text-[#99a1af]">
              Pick up where you left off/reactivate for $0
            </p>
          </header>

          <div className="mt-6 space-y-3">
            <SocialAuthButton icon={figmaAssets.google} label="Google" />
            <SocialAuthButton icon={figmaAssets.apple} label="Apple" />
          </div>

          <div className="relative mt-6 flex h-4 items-center justify-center">
            <div className="absolute inset-x-0 border-t border-[#364153]" />
            <span className="relative bg-[#1a1a1a] px-3 text-[12px] leading-4 text-[#99a1af]">
              Or continue with email
            </span>
          </div>

          <form className="mt-6 space-y-4">
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
                  placeholder="Email address"
                  className="h-[46px] w-full rounded-[10px] border border-[#364153] bg-[#2a2a2a] pl-11 pr-4 text-[14px] leading-5 tracking-[-0.15px] text-white placeholder:text-[#6a7282] outline-none transition focus:border-[#4f84c8] focus:ring-2 focus:ring-[#2b7fff]/25"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-[14px] font-medium leading-5 tracking-[-0.15px] text-white"
                >
                  Password
                </label>
                <Link
                  href="#"
                  className="text-[12px] leading-4 text-[#51a2ff] transition hover:text-[#82beff]"
                >
                  forgot password?
                </Link>
              </div>
              <div className="relative">
                <Image
                  src={figmaAssets.password}
                  alt=""
                  aria-hidden
                  width={20}
                  height={20}
                  unoptimized
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2"
                />
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="h-[46px] w-full rounded-[10px] border border-[#364153] bg-[#2a2a2a] pl-11 pr-4 text-[14px] leading-5 tracking-[-0.15px] text-white placeholder:text-[#6a7282] outline-none transition focus:border-[#4f84c8] focus:ring-2 focus:ring-[#2b7fff]/25"
                />
              </div>
            </div>

            <label className="mt-0.5 inline-flex cursor-pointer items-center gap-2 text-[14px] leading-5 tracking-[-0.15px] text-[#d1d5dc]">
              <input
                type="checkbox"
                className="size-4 appearance-none rounded-[2px] border border-[#2f3a49] bg-[#2a2a2a] checked:border-[#2b7fff] checked:bg-[#2b7fff]"
              />
              Remember me
            </label>

            <button
              type="submit"
              className="mt-1 h-12 w-full rounded-[10px] bg-[#2b7fff] text-[16px] font-medium leading-6 tracking-[-0.31px] text-white transition hover:bg-[#4e96ff]"
            >
              Continue to Commenter AI
            </button>
          </form>

          <div className="mt-4 flex items-center justify-center gap-1 text-center text-[12px] leading-4 text-[#6a7282]">
            <Image
              src={figmaAssets.lock}
              alt=""
              aria-hidden
              width={12}
              height={12}
              unoptimized
            />
            <p>Secure login. No posting without your approval.</p>
          </div>

          <p className="mt-3 text-center text-[14px] leading-5 tracking-[-0.15px] text-[#99a1af]">
            New here?{" "}
            <Link href="/register" className="font-medium text-[#51a2ff] hover:text-[#82beff]">
              Start free!
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
