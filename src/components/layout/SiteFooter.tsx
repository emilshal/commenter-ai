import Link from "next/link";
import { Container } from "@/components/ui/Container";

const columns: Array<{
  title: string;
  links: Array<{ label: string; href: string }>;
}> = [
  {
    title: "Learn",
    links: [{ label: "Blog", href: "#" }],
  },
  {
    title: "Commenter AI",
    links: [
      { label: "Features", href: "#" },
      { label: "Guide", href: "#" },
      { label: "How It Works", href: "#" },
    ],
  },
  {
    title: "Pricing",
    links: [
      { label: "Pricing", href: "#" },
      { label: "Billing/Trust", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Become a Partner", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#0b0b0b]">
      <Container className="py-16">
        <div className="grid gap-14 md:grid-cols-[1.4fr_2fr]">
          <div>
            <img
              src="/commenterai-logo.png"
              alt="Commenter.ai"
              className="h-12 w-auto"
            />
            <p className="mt-6 max-w-sm text-sm leading-6 text-white/60">
              Commenter AI is not affiliated, associated, authorized, endorsed
              by, or in any way officially connected with the LinkedIn™
              Corporation, registered in the U.S. and other countries. LinkedIn™
              is a trademark of the LinkedIn™ Corporation.
            </p>
          </div>

          <div className="space-y-10">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {columns.map((col) => (
                <div key={col.title}>
                  <div className="text-sm font-semibold text-white/85">
                    {col.title}
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-white/60">
                    {col.links.map((l, index) => (
                      <li key={`${l.label}-${index}`}>
                        <Link href={l.href} className="hover:text-white">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:flex-nowrap">
              <img
                src="/footer-featured-ai.png"
                alt="Featured on There's an AI for That"
                className="h-9 w-auto opacity-70"
              />
              <img
                src="/commenterai-logo.png"
                alt="Featured on SoftGist"
                className="h-12 w-auto"
              />
              <img
                src="/footer-tekpon.png"
                alt="Tekpon Verified"
                className="h-12 w-auto"
              />
            </div>
          </div>
        </div>
      </Container>

      <div className="mt-12 border-t border-white/10 bg-[#121826]">
        <Container className="py-4">
          <div className="flex flex-col gap-3 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2025 Commenter AI. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Term of Services
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
