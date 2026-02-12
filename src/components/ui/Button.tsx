import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-[transform,box-shadow,background-color,color] duration-200 ease-out will-change-transform hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_10px_24px_rgba(43,127,255,0.28)] active:translate-y-0 active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-indigo-500 text-white hover:bg-indigo-400 shadow-sm shadow-indigo-500/10",
  secondary:
    "bg-white/8 text-white hover:bg-white/10 ring-1 ring-inset ring-white/10",
  ghost: "text-white/80 hover:text-white hover:bg-white/5",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  children,
}: Readonly<{
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
}>) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type="button">
      {children}
    </button>
  );
}
