import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
  return (
    <Container className="grid min-h-dvh place-items-center py-14">
      <Card className="w-full max-w-md p-6">
        <h1 className="text-xl font-semibold tracking-tight text-white">Sign in</h1>
        <p className="mt-2 text-sm text-white/65">
          Placeholder auth page. Hook up real fields and validation from Figma.
        </p>
        <div className="mt-6 grid gap-3">
          <div className="h-11 rounded-xl bg-black/30 ring-1 ring-white/10" />
          <div className="h-11 rounded-xl bg-black/30 ring-1 ring-white/10" />
          <Button className="w-full">Sign in</Button>
        </div>
        <p className="mt-5 text-sm text-white/65">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-indigo-300 hover:text-indigo-200">
            Create one
          </Link>
          .
        </p>
      </Card>
    </Container>
  );
}

