import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

export function MockProductShot({ className }: Readonly<{ className?: string }>) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_30px_80px_-40px_rgba(99,102,241,0.55)]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(600px_260px_at_60%_20%,rgba(99,102,241,0.22),transparent_60%),radial-gradient(500px_260px_at_20%_80%,rgba(34,197,94,0.10),transparent_65%)]" />
      <div className="relative">
        <div className="flex items-center justify-between gap-3 rounded-xl bg-black/40 px-3 py-2 ring-1 ring-white/10">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </div>
          <div className="h-2 w-24 rounded-full bg-white/10" />
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
            <div className="h-2 w-20 rounded-full bg-white/20" />
            <div className="mt-3 space-y-2">
              <div className="h-2 w-full rounded-full bg-white/10" />
              <div className="h-2 w-5/6 rounded-full bg-white/10" />
              <div className="h-2 w-4/6 rounded-full bg-white/10" />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <div className="h-7 w-20 rounded-full bg-indigo-500/70" />
              <div className="h-7 w-20 rounded-full bg-white/8 ring-1 ring-white/10" />
            </div>
          </div>

          <div className="rounded-xl bg-black/30 p-3 ring-1 ring-white/10">
            <div className="flex items-center justify-between">
              <div className="h-2 w-28 rounded-full bg-white/15" />
              <div className="h-7 w-7 rounded-lg bg-white/8 ring-1 ring-white/10" />
            </div>
            <div className="mt-3 space-y-2">
              <div className="h-2 w-full rounded-full bg-white/10" />
              <div className="h-2 w-11/12 rounded-full bg-white/10" />
              <div className="h-2 w-9/12 rounded-full bg-white/10" />
              <div className="h-2 w-10/12 rounded-full bg-white/10" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="h-16 rounded-xl bg-white/5 ring-1 ring-white/10" />
              <div className="h-16 rounded-xl bg-white/5 ring-1 ring-white/10" />
              <div className="h-16 rounded-xl bg-white/5 ring-1 ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

