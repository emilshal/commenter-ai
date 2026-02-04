import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export type LegalSection = {
  title: string;
  body: React.ReactNode;
};

export function LegalPage({
  title,
  updatedAt,
  intro,
  sections,
  variant = "plain",
}: Readonly<{
  title: string;
  updatedAt?: string;
  intro?: React.ReactNode;
  sections: LegalSection[];
  variant?: "plain" | "card";
}>) {
  return (
    <Container className="py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          {updatedAt ? (
            <p className="mt-3 text-xs text-white/55">Last updated: {updatedAt}</p>
          ) : null}
        </div>

        <div className="mt-10 grid gap-10">
          <article
            className={cn(
              "mx-auto w-full max-w-3xl",
              variant === "card"
                ? "rounded-2xl bg-[var(--card)] p-6 ring-1 ring-inset ring-white/10 lg:p-8"
                : "px-0",
            )}
          >
            {intro ? (
              <div className="text-[13px] leading-6 text-white/65">{intro}</div>
            ) : null}

            <div className={cn(intro ? "mt-8" : "", "space-y-10")}>
              {sections.map((s, idx) => {
                const id = slugify(s.title);
                return (
                  <section key={id} id={id} className="scroll-mt-24">
                    <h2 className="text-base font-semibold text-white sm:text-[15px]">
                      {idx + 1}. {s.title}
                    </h2>
                    <div className="mt-3 text-[13px] leading-6 text-white/65">
                      {s.body}
                    </div>
                  </section>
                );
              })}
            </div>
          </article>
        </div>
      </div>
    </Container>
  );
}
