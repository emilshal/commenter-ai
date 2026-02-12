import Image from "next/image";
import { cn } from "@/lib/cn";

const figmaLogoAssets = {
  bubble: "https://www.figma.com/api/mcp/asset/167937bc-bb0d-4b1b-8166-37cc825d5bb7",
  face: "https://www.figma.com/api/mcp/asset/0a5f7594-c951-46f5-a034-881740c96c1f",
  eyeLeft: "https://www.figma.com/api/mcp/asset/6b4f110e-0671-4bbd-a91a-0c57624ceab4",
  eyeRight: "https://www.figma.com/api/mcp/asset/ed5463a4-cc8d-441e-854a-6cdcf0262c46",
  antenna: "https://www.figma.com/api/mcp/asset/966281a0-b861-4813-9553-1c2dc8123959",
  tail: "https://www.figma.com/api/mcp/asset/29871cd1-8d88-4e10-bdde-6a32cc74f4f2",
} as const;

export function FigmaBrandLogo({
  className,
  textClassName,
}: Readonly<{ className?: string; textClassName?: string }>) {
  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <div className="relative h-[39.788px] w-[46.892px] shrink-0">
        <Image
          src={figmaLogoAssets.bubble}
          alt=""
          aria-hidden
          width={47}
          height={25}
          className="absolute left-0 top-[8.85px] h-[24.859px] w-[46.892px]"
          unoptimized
        />
        <Image
          src={figmaLogoAssets.face}
          alt=""
          aria-hidden
          width={24}
          height={11}
          className="absolute left-[12.66px] top-[19.32px] h-[10.997px] w-[23.686px]"
          unoptimized
        />
        <Image
          src={figmaLogoAssets.eyeLeft}
          alt=""
          aria-hidden
          width={5}
          height={5}
          className="absolute left-[18.08px] top-[21.88px] h-[4.642px] w-[5.158px]"
          unoptimized
        />
        <Image
          src={figmaLogoAssets.eyeRight}
          alt=""
          aria-hidden
          width={5}
          height={5}
          className="absolute left-[24.39px] top-[21.88px] h-[4.642px] w-[5.158px]"
          unoptimized
        />
        <Image
          src={figmaLogoAssets.antenna}
          alt=""
          aria-hidden
          width={5}
          height={8}
          className="absolute left-[22.33px] top-0 h-[7.108px] w-[4.345px]"
          unoptimized
        />
        <Image
          src={figmaLogoAssets.tail}
          alt=""
          aria-hidden
          width={9}
          height={14}
          className="absolute left-[31.47px] top-[24.18px] h-[13.317px] w-[8.417px] rotate-[-155.5deg]"
          unoptimized
        />
      </div>

      <span
        className={cn(
          "font-[var(--font-montserrat)] text-[18px] font-semibold leading-[28px] tracking-[-0.4395px] text-white",
          textClassName,
        )}
      >
        Commenter AI
      </span>
    </div>
  );
}
