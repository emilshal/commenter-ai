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
  showToc = false,
  variant = "plain",
}: Readonly<{
  title: string;
  updatedAt?: string;
  intro?: React.ReactNode;
  sections: LegalSection[];
  showToc?: boolean;
  variant?: "plain" | "card";
}>) {
  const toc = sections.map((s) => ({ title: s.title, id: slugify(s.title) }));

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

        <div
          className={cn(
            "mt-10 grid gap-10",
            showToc ? "lg:grid-cols-[1fr_260px] lg:gap-12" : "",
          )}
        >
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

          <aside className={cn("hidden lg:block", showToc ? "block" : "hidden")}>
            <div className="sticky top-24 rounded-2xl bg-black/20 p-5 ring-1 ring-inset ring-white/10">
              <div className="text-xs font-semibold uppercase tracking-widest text-white/55">
                On this page
              </div>
              <nav className="mt-4 space-y-2 text-sm">
                {toc.map((t, idx) => (
                  <a
                    key={t.id}
                    className="block rounded-xl px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white"
                    href={`#${t.id}`}
                  >
                    {idx + 1}. {t.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </Container>
  );
}
