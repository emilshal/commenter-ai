import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

export function FeatureSplit({
  title,
  description,
  bullets,
  reverse,
}: Readonly<{
  title: string;
  description: string;
  bullets: string[];
  reverse?: boolean;
}>) {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div
          className={cn(
            "grid items-center gap-10 lg:grid-cols-2",
            reverse && "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1",
          )}
        >
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-white/65 sm:text-base">
              {description}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-300/25">
                    <span className="h-2 w-2 rounded-full bg-emerald-300/80" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="p-5">
            <div className="rounded-xl bg-black/35 p-4 ring-1 ring-white/10">
              <div className="h-2 w-40 rounded-full bg-white/15" />
              <div className="mt-4 space-y-2">
                <div className="h-2 w-full rounded-full bg-white/10" />
                <div className="h-2 w-11/12 rounded-full bg-white/10" />
                <div className="h-2 w-9/12 rounded-full bg-white/10" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                <div className="h-16 rounded-xl bg-white/5 ring-1 ring-white/10" />
                <div className="h-16 rounded-xl bg-white/5 ring-1 ring-white/10" />
                <div className="h-16 rounded-xl bg-white/5 ring-1 ring-white/10" />
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

