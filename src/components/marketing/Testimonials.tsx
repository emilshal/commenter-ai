import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/marketing/SectionHeading";

const testimonials = [
  {
    quote: "The layout accuracy was spot-on and the components were super reusable.",
    name: "PM, B2B SaaS",
  },
  {
    quote: "Fast implementation, clean structure, and great responsiveness.",
    name: "Founder",
  },
  {
    quote: "Exactly what we needed for a dense marketing site without a messy codebase.",
    name: "Engineering Lead",
  },
];

export function Testimonials() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          eyebrow="Proof"
          title="Built for real layout density"
          description="Long pages with repeated patterns are easiest when the base system is solid."
          align="center"
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="p-6">
              <p className="text-sm leading-7 text-white/75">“{t.quote}”</p>
              <div className="mt-5 text-sm font-semibold text-white">{t.name}</div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

