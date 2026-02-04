import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/marketing/SectionHeading";

const items = [
  {
    title: "Composable sections",
    desc: "Swap content without touching layout.",
  },
  {
    title: "Pricing tables",
    desc: "Plans, add-ons, and trust blocks.",
  },
  {
    title: "Auth-ready forms",
    desc: "Login, registration, validation states.",
  },
  {
    title: "Blog layouts",
    desc: "Index and detail pages, responsive grids.",
  },
  {
    title: "Performance-first",
    desc: "Clean markup, optimized images, no bloat.",
  },
  {
    title: "Accessible UI",
    desc: "Keyboard-friendly patterns by default.",
  },
];

export function FeatureGrid() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="Everything you need for a SaaS launch"
          description="This design is section-dense. Build it once with consistent primitives and reuse across all pages."
          align="center"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card
              key={item.title}
              className="group p-5 transition hover:bg-[var(--card-hover)]"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 grid h-9 w-9 place-items-center rounded-xl bg-white/6 ring-1 ring-white/10">
                  <span className="h-2.5 w-2.5 rounded-sm bg-indigo-400/90" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{item.title}</div>
                  <div className="mt-1 text-sm leading-6 text-white/65">
                    {item.desc}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

