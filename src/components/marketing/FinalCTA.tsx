import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function FinalCTA() {
  return (
    <section className="py-16">
      <Container>
        <Card className="relative overflow-hidden p-8 sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(600px_260px_at_25%_20%,rgba(99,102,241,0.22),transparent_60%),radial-gradient(700px_360px_at_80%_60%,rgba(236,72,153,0.14),transparent_65%)]" />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Ready to implement the rest of the pages?
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-7 text-white/65">
                Once you get the Figma file and assets, we’ll swap in final copy,
                exact spacing, icons, and screenshots—without rewriting components.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button href="/register">Get started</Button>
              <Button href="/features" variant="secondary">
                Explore features
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}

