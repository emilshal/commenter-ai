import Link from "next/link";
import { Container } from "@/components/ui/Container";

const columns: Array<{ title: string; links: Array<{ label: string; href: string }> }> =
  [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Billing / Trust", href: "/billing" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Partner", href: "/partner" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms", href: "/terms" },
        { label: "Privacy", href: "/privacy" },
      ],
    },
  ];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/6 ring-1 ring-white/10">
                <span className="h-3 w-3 rounded-sm bg-indigo-400" />
              </span>
              <span>SaaS</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-white/60">
              Premium marketing pages and product flows. Replace placeholder copy
              once Figma is finalized.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-sm font-semibold text-white/80">{col.title}</div>
              <ul className="mt-3 space-y-2 text-sm text-white/60">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SaaS. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
