import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export default async function BlogDetailPage({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Blog post: {slug}
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
        Placeholder blog detail page. Replace with real layout once Figma is
        provided.
      </p>
      <Card className="mt-10 p-6">
        <div className="h-3 w-40 rounded-full bg-white/15" />
        <div className="mt-5 space-y-3">
          <div className="h-2 w-full rounded-full bg-white/10" />
          <div className="h-2 w-11/12 rounded-full bg-white/10" />
          <div className="h-2 w-10/12 rounded-full bg-white/10" />
          <div className="h-2 w-9/12 rounded-full bg-white/10" />
        </div>
      </Card>
    </Container>
  );
}

