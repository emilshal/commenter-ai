import { Container } from "@/components/ui/Container";

const logos = ["Acme", "Northwind", "Globex", "Umbrella", "Initech", "Stark"];

export function LogoCloud() {
  return (
    <section className="border-y border-white/10 bg-black/10">
      <Container className="py-10">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-white/45">
          Trusted by teams shipping weekly
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 text-center text-sm text-white/60 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((l) => (
            <div
              key={l}
              className="rounded-xl bg-white/4 py-3 ring-1 ring-white/10"
            >
              {l}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

