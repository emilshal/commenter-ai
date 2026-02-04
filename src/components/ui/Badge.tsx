import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-white/6 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-inset ring-white/10",
        className,
      )}
    >
      {children}
    </span>
  );
}

