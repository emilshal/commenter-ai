import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { cn } from "@/lib/cn";

const faqs = [
  {
    q: "Can we start from screenshots?",
    a: "Yes. We build the structure and reusable components first, then refine spacing, copy, and assets once the final Figma file is shared.",
  },
  {
    q: "How do you keep pages consistent?",
    a: "A small set of primitives (Container, Section spacing, Button, Card, typography tokens) keeps layout and hierarchy consistent across all pages.",
  },
  {
    q: "Do you handle interactions?",
    a: "Yes—basic UI interactions like accordions, mobile nav, form states, and hover/focus styles (no heavy animations).",
  },
];

export function FAQ() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions"
          description="Replace the answers with final product details once available."
          align="center"
        />

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className={cn(
                "group rounded-2xl bg-[var(--card)] p-5 ring-1 ring-inset ring-white/10 open:bg-[var(--card-hover)]",
              )}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white">
                <span>{f.q}</span>
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white/6 text-white/80 ring-1 ring-white/10">
                  <span className="block h-0.5 w-3 bg-current transition group-open:rotate-90" />
                  <span className="-mt-0.5 block h-0.5 w-3 bg-current transition group-open:opacity-0" />
                </span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-white/65">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

