import { cn } from "@/lib/cn";

export function Card({
  className,
  children,
}: Readonly<{ className?: string; children: React.ReactNode }>) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-[var(--card)] ring-1 ring-inset ring-white/10",
        className,
      )}
    >
      {children}
    </div>
  );
}

