import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MockProductShot } from "@/components/marketing/MockProductShot";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <Badge>New • Launch-ready components</Badge>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Premium SaaS pages that ship fast.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
              Build your marketing site, auth flows, pricing, and blog layouts
              with clean, reusable React components. Replace placeholder copy
              once Figma arrives.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/login">Get started</Button>
              <Button href="/pricing" variant="secondary">
                View pricing
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-white/55">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                <span>Mobile-first</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400/80" />
                <span>Reusable sections</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400/80" />
                <span>Fast page loads</span>
              </div>
            </div>
          </div>

          <MockProductShot className="lg:ml-auto lg:max-w-xl" />
        </div>
      </Container>
    </section>
  );
}

