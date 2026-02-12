import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const tierCards = [
  {
    name: "Signal",
    subtitle: "Perfect for Individuals",
    price: "$0",
    note: "Billed monthly. Cancel anytime.",
    features: [
      "Custom workspace + Unlimited members",
      "Unlimited docs",
      "Collaborative workspace",
      "30+ integrations",
    ],
  },
  {
    name: "Workflow",
    subtitle: "Perfect for Small teams",
    price: "$149",
    note: "Billed monthly. 10 members included.",
    features: [
      "Everything in Brand +",
      "Automation capability via API",
      "Advanced permissions",
      "Unlimited version history",
      "Admin tools & controls",
      "Priority support",
    ],
  },
  {
    name: "Teams",
    subtitle: "Perfect for Companies",
    price: "$350",
    note: "Billed monthly. 25 members included.",
    features: [
      "Everything in Workflow +",
      "SAML SSO",
      "Private teamspaces",
      "Bulk export",
      "Advanced security & controls",
      "Audit logs",
      "Custom member onboarding & training resources",
      "Dedicated success manager",
    ],
  },
];

const proofCards = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    avatar: "/figma/avatar-sarah.png",
    copy:
      "This tool has completely transformed how we manage customer conversations. The integration with Slack alone has saved us hours every week. Highly recommended!",
  },
  {
    name: "Michael Chen",
    role: "Founder at StartupXYZ",
    avatar: "/figma/avatar-michael.png",
    copy:
      "The analytics features are incredible. We can finally see patterns in our customer communications that we never noticed before. Worth every penny.",
  },
  {
    name: "Emily Rodriguez",
    role: "Customer Success Lead",
    avatar: "/figma/avatar-emily.png",
    copy:
      "Best investment we've made this year. The searchability and organization features make it so easy to find old conversations and keep track of customer needs.",
  },
];

type ComparisonRow = {
  feature: string;
  starter: boolean;
  advanced: boolean;
  premium: boolean;
};

const comparisonSections: Array<{ title: string; rows: ComparisonRow[] }> = [
  {
    title: "Active integrations",
    rows: [
      { feature: "Slack", starter: true, advanced: true, premium: true },
      { feature: "Discord", starter: false, advanced: true, premium: true },
      { feature: "Telegram", starter: false, advanced: true, premium: true },
      { feature: "WhatsApp", starter: false, advanced: false, premium: true },
      { feature: "Microsoft Teams", starter: false, advanced: true, premium: true },
      { feature: "Custom webhooks", starter: false, advanced: true, premium: true },
    ],
  },
  {
    title: "Conversational search (coming soon)",
    rows: [
      { feature: "Search by keyword", starter: true, advanced: true, premium: true },
      { feature: "Search by date range", starter: true, advanced: true, premium: true },
      { feature: "Search by user", starter: false, advanced: true, premium: true },
      { feature: "Advanced filters", starter: false, advanced: true, premium: true },
      { feature: "Saved searches", starter: false, advanced: false, premium: true },
    ],
  },
  {
    title: "Analytics & insights",
    rows: [
      { feature: "Message volume", starter: true, advanced: true, premium: true },
      { feature: "Response time", starter: false, advanced: true, premium: true },
      { feature: "User engagement", starter: false, advanced: true, premium: true },
      { feature: "Custom dashboards", starter: false, advanced: false, premium: true },
      { feature: "Data export", starter: false, advanced: true, premium: true },
      { feature: "API access", starter: false, advanced: true, premium: true },
    ],
  },
  {
    title: "Support & SLA",
    rows: [
      { feature: "Community support", starter: true, advanced: true, premium: true },
      { feature: "Email support", starter: false, advanced: true, premium: true },
      { feature: "Priority support", starter: false, advanced: false, premium: true },
      { feature: "Dedicated account manager", starter: false, advanced: false, premium: true },
      { feature: "99.9% uptime SLA", starter: false, advanced: false, premium: true },
    ],
  },
];

const faqItems = Array.from({ length: 5 }, () => "Cancel anytime, no questions asked");

const figmaIcons = {
  star: "https://www.figma.com/api/mcp/asset/75e86ed8-e012-4edd-846e-8e13cc1aafa6",
  check: "https://www.figma.com/api/mcp/asset/ce237012-0c6f-4da5-870b-08c01244941f",
  cross: "https://www.figma.com/api/mcp/asset/ad5252f5-b5bf-480c-bc9c-b9205bfb9499",
} as const;

function CheckBadge() {
  return (
    <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white">
      <svg
        aria-hidden
        className="h-[16px] w-[16px]"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6667 5L7.5 14.1667L3.33333 10"
          stroke="#00C950"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function SmallCheck() {
  return (
    <svg
      aria-hidden
      className="h-[16px] w-[16px] shrink-0"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6667 5L7.5 14.1667L3.33333 10"
        stroke="#2B7FFF"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ComparisonIcon({ enabled }: { enabled: boolean }) {
  if (enabled) {
    return <Image src={figmaIcons.check} alt="" width={20} height={20} unoptimized />;
  }
  return <Image src={figmaIcons.cross} alt="" width={20} height={20} unoptimized />;
}

export default function Home() {
  return (
    <main className="pb-24 font-[var(--font-inter)]">
      <section className="pt-16">
        <Container className="max-w-[1306px]">
          <div className="flex flex-col items-center gap-[60px] text-center">
            <h1 className="font-[var(--font-montserrat)] text-[38px] font-bold leading-[48px] tracking-[0.3516px] text-white">
              Choose your level of control
            </h1>

            <div className="grid w-full max-w-[1022px] grid-cols-1 gap-6 md:grid-cols-3">
              {["Signal", "Workflow", "Teams"].map((label) => (
                <div
                  key={label}
                  className="flex h-[150px] flex-col items-center justify-center gap-4 rounded-[20px] bg-[linear-gradient(124.26deg,rgba(25,66,148,0.13)_0%,rgba(255,255,255,0.086)_100%)] px-6 py-8 text-center backdrop-blur-[10px]"
                >
                  <div className="font-[var(--font-inter)] text-[30px] font-medium leading-[20px] text-white">
                    {label}
                  </div>
                  <div className="font-[var(--font-inter)] text-[15px] text-[#99a1af]">
                    Start with the essentials and stay organized from day one.
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-[973px] font-[var(--font-montserrat)] text-[30px] font-semibold leading-[36px] tracking-[0.3955px] text-white">
              Bring conversations, follow-ups, and priorities into one clear workflow.
            </div>

            <div className="w-full max-w-[874px] rounded-[20px] bg-[linear-gradient(167.25deg,rgba(255,255,255,0.104)_0%,rgba(255,255,255,0.026)_100%)] px-6 py-6 text-center text-[22px] font-medium text-white backdrop-blur-[10px]">
              Get full visibility into what matters now and what needs a reply next.
            </div>

            <div className="flex w-full max-w-[672px] flex-col items-center gap-6 sm:flex-row sm:justify-between">
              {["One workspace", "Shared visibility", "Centralized control"].map((text) => (
                <div key={text} className="flex items-center gap-3">
                  <CheckBadge />
                  <span className="font-[var(--font-montserrat)] text-[16px] font-bold text-[#d1d5dc]">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3">
              {tierCards.map((tier) => (
                <div
                  key={tier.name}
                  className="rounded-[20px] bg-[linear-gradient(103.8deg,rgba(255,255,255,0.104)_0%,rgba(255,255,255,0.026)_100%)] p-6 text-left backdrop-blur-[10px]"
                >
                  <div className="space-y-1">
                    <h3 className="font-[var(--font-montserrat)] text-[20px] font-semibold text-white">
                      {tier.name}
                    </h3>
                    <p className="text-[14px] text-[#99a1af]">{tier.subtitle}</p>
                  </div>
                  <div className="mt-4 flex items-end gap-2">
                    <span className="font-[var(--font-montserrat)] text-[36px] font-bold text-white">
                      {tier.price}
                    </span>
                    <span className="text-[16px] text-[#99a1af]">/month</span>
                  </div>
                  <p className="mt-1 text-[14px] text-[#6a7282]">{tier.note}</p>
                  <Button className="mt-6 h-12 w-full rounded-[4px] bg-[#155dfc] text-[16px] font-medium hover:bg-[#2b7fff]">
                    Start 7 day free trial
                  </Button>
                  <ul className="mt-6 space-y-3 text-[14px] text-[#d1d5dc]">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <SmallCheck />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="w-full max-w-[864px] rounded-[20px] bg-[linear-gradient(128.39deg,rgba(255,255,255,0.104)_0%,rgba(255,255,255,0.026)_100%)] px-12 py-10 text-center backdrop-blur-[10px]">
              <h3 className="font-[var(--font-montserrat)] text-[30px] font-bold text-white">
                Stop the scattered system.
              </h3>
              <p className="mt-4 text-[16px] text-[#99a1af]">
                Your knowledge base should not be scattered across tools, documents, wikis, and spreadsheets. From meeting
                notes to project plans to customer docs, keep everything in one place and keep teams aligned.
              </p>
              <div className="mt-8 grid gap-6 text-left sm:grid-cols-[1fr_auto]">
                <p className="text-[14px] text-[#6a7282]">
                  Spreadsheets {"->"} Wikis {"->"} Documents {"->"} Project management {"->"} Notes {"->"} Docs
                </p>
                <div className="space-y-3 text-[16px] text-[#d1d5dc]">
                  <div className="flex items-center gap-3">
                    <SmallCheck />
                    One workspace
                  </div>
                  <div className="flex items-center gap-3">
                    <SmallCheck />
                    Centralized control
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full text-center">
              <h3 className="font-[var(--font-montserrat)] text-[30px] font-bold text-white">
                What this replaces
              </h3>
              <div className="mt-4 space-y-2 text-[16px] text-[#99a1af]">
                <p>Spreadsheets + wikis + scattered notes + disconnected planning tools</p>
                <p>CRM patchwork + inbox tabs + manual reminder lists</p>
                <p>Ad-hoc follow-up docs + inconsistent handoffs across the team</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-24 border-t border-[#1e2939] pt-16">
        <Container className="max-w-[1280px]">
          <h2 className="font-[var(--font-montserrat)] text-[30px] font-bold leading-[36px] text-white">
            Quick comparison
          </h2>

          <div className="mt-12 space-y-12">
            {comparisonSections.map((section) => (
              <div key={section.title} className="space-y-6">
                <h3 className="font-[var(--font-montserrat)] text-[20px] font-medium text-white">
                  {section.title}
                </h3>

                <div className="overflow-hidden rounded-[10px] border border-[#1e2939] bg-[#101828]">
                  <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] border-b border-[#1e2939] bg-[rgba(30,41,57,0.5)] px-4 py-4 text-[14px] text-[#99a1af]">
                    <div>Feature</div>
                    <div className="text-center">Starter</div>
                    <div className="text-center">Advanced</div>
                    <div className="text-center">Premium</div>
                  </div>

                  {section.rows.map((row, index) => (
                    <div
                      key={`${section.title}-${row.feature}`}
                      className={`grid grid-cols-[1.2fr_1fr_1fr_1fr] px-4 py-4 text-[14px] ${
                        index !== section.rows.length - 1 ? "border-b border-[#1e2939]" : ""
                      }`}
                    >
                      <div className="text-[#d1d5dc]">{row.feature}</div>
                      <div className="flex justify-center">
                        <ComparisonIcon enabled={row.starter} />
                      </div>
                      <div className="flex justify-center">
                        <ComparisonIcon enabled={row.advanced} />
                      </div>
                      <div className="flex justify-center">
                        <ComparisonIcon enabled={row.premium} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-24 border-t border-[#1e2939] pt-16">
        <Container className="max-w-[1280px]">
          <div className="text-center">
            <h2 className="font-[var(--font-montserrat)] text-[30px] font-normal text-white">Proof</h2>
            <p className="mt-2 text-[14px] text-[#99a1af]">Trusted by thousands of teams worldwide</p>
          </div>

          <div className="mt-12 flex w-full flex-col gap-8">
            {proofCards.map((card) => (
              <div
                key={card.name}
                className="flex w-full flex-col border-b border-[#1e2939] pb-6"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={card.avatar}
                    alt={card.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-[14px] font-bold text-white">{card.name}</div>
                    <div className="text-[12px] text-[#99a1af]">{card.role}</div>
                  </div>
                </div>
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Image
                      key={`${card.name}-star-${index}`}
                      src={figmaIcons.star}
                      alt=""
                      width={16}
                      height={16}
                      unoptimized
                    />
                  ))}
                </div>
                <p className="mt-4 text-[14px] leading-[22.75px] text-[#d1d5dc]">{card.copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-20 border-t border-[#1e2939] pt-16">
        <Container className="max-w-[1280px]">
          <div className="text-center">
            <h2 className="font-[var(--font-montserrat)] text-[30px] font-semibold text-white">
              Billing & trust
            </h2>
            <p className="mt-2 text-[14px] text-[#99a1af]">Fair, transparent pricing with no surprises</p>
          </div>

          <div className="mx-auto mt-12 grid max-w-[925px] grid-cols-1 gap-6 sm:grid-cols-2">
            {["Cancel anytime", "Transparent billing", "Monthly invoices", "No hidden fees"].map((label, index) => (
              <div
                key={`${label}-${index}`}
                className="flex h-[57px] items-center justify-center rounded-[20px] bg-[linear-gradient(159.14deg,rgba(25,66,148,0.13)_0%,rgba(255,255,255,0.086)_100%)] text-[30px] font-medium text-white backdrop-blur-[10px]"
              >
                {label}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-20 border-t border-[#1e2939] pt-16">
        <Container className="max-w-[1280px]">
          <div className="text-center">
            <h2 className="font-[var(--font-montserrat)] text-[30px] font-bold text-white">
              Pricing FAQ
            </h2>
          </div>

          <div className="mx-auto mt-10 flex max-w-[979px] flex-col gap-6">
            {faqItems.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-center gap-6 rounded-[20px] bg-[linear-gradient(163.63deg,rgba(25,66,148,0.13)_0%,rgba(255,255,255,0.086)_100%)] px-10 py-7 text-[26px] font-semibold text-[#d1d5dc] backdrop-blur-[10px]"
              >
                <span className="flex h-[33px] w-[33px] items-center justify-center rounded-full border border-white text-[18px]">+</span>
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="mt-20 border-t border-[#1e2939] pt-16">
        <Container className="max-w-[1280px]">
          <div className="mx-auto max-w-[768px] text-center">
            <h2 className="font-[var(--font-montserrat)] text-[48px] font-bold leading-[60px] text-white">
              Ready to stop losing track of conversations?
            </h2>
            <div className="mt-6 text-[28px] font-semibold leading-[33px] text-[#99a1af]">
              <p>Start with signals.</p>
              <p>Upgrade only when you hit a real ceiling.</p>
            </div>
            <Button className="mt-10 h-[60px] rounded-[10px] bg-[#2b7fff] px-10 text-[18px] font-bold hover:bg-[#3b8cff]">
              Start for free
            </Button>
            <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
              {["7 Day trial", "Cancel anytime", "Centralized control"].map((label) => (
                <div key={label} className="flex items-center gap-3 text-[16px] font-bold text-[#d1d5dc]">
                  <SmallCheck />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
