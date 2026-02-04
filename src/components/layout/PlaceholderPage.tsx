import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function PlaceholderPage({
  title,
  description,
}: Readonly<{ title: string; description?: string }>) {
  return (
    <Container className="py-16 sm:py-20">
      <Badge>Placeholder</Badge>
      <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
          {description}
        </p>
      ) : null}
      <div className="mt-10 rounded-2xl bg-[var(--card)] p-6 ring-1 ring-inset ring-white/10">
        <p className="text-sm text-white/65">
          Wire up this page once the client provides the final Figma details and
          assets.
        </p>
      </div>
    </Container>
  );
}

