import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/marketing/SectionHeading";

const steps = [
  {
    n: "01",
    title: "Align on sections",
    desc: "Confirm the page flow from screenshots and identify reusable blocks.",
  },
  {
    n: "02",
    title: "Build the system",
    desc: "Create primitives for spacing, typography, buttons, and cards.",
  },
  {
    n: "03",
    title: "Ship the pages",
    desc: "Assemble marketing pages, auth, pricing, and blog with consistent components.",
  },
];

export function Steps() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="From screenshots to production"
          description="Start with structure now, then swap in final copy and assets from Figma."
          align="center"
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {steps.map((s) => (
            <Card key={s.n} className="p-6">
              <div className="text-xs font-semibold tracking-widest text-white/50">
                {s.n}
              </div>
              <div className="mt-2 text-base font-semibold text-white">{s.title}</div>
              <p className="mt-2 text-sm leading-6 text-white/65">{s.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

