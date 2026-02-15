type PlanFeature = {
  title: string;
  description: string;
};

type PricingPlan = {
  name: string;
  includes: string;
  price: string;
  description: string;
  features: PlanFeature[];
};

const sectionBadges = ["7-day trial", "No credit card required", "Cancel Anytime"];
const billingPills = [
  "Cancel or downgrade anytime",
  "You control what gets sent",
  "Clear limits shown upfront",
  "Export available on Workflow and Teams",
];

const replacesLeft = [
  "Spreadsheets",
  "Notes",
  "Reminders",
  "Inbox searching",
  "A CRM that never matches reality",
];

const replacesRight = [
  "One connected workspace",
  "Conversations, leads, and follow-ups",
  "Context stays attached",
];

type PlanSection = {
  title: string;
  rows: Array<{ label: string; signal: string; workflow: string; teams: string }>;
};

const pricingPlans: PricingPlan[] = [
  {
    name: "Signals",
    includes: "Includes everything in Signals",
    price: "$99",
    description: "Focus + deal-relevant signals from LinkedIn conversations.",
    features: [
      { title: "Focus", description: "What needs attention right now" },
      { title: "Signals", description: "Replies, active threads, and stalled conversations" },
      { title: "Conversations", description: "Comments + DMs visible together" },
      { title: "Leads", description: "Create leads from conversations with context attached" },
      { title: "Review", description: "Core activity view for weekly follow-through" },
    ],
  },
  {
    name: "Workflow",
    includes: "Includes everything in Signals",
    price: "$149",
    description: "Continuity and memory across conversations as they evolve.",
    features: [
      { title: "Focus", description: "Deeper prioritization and follow-up visibility" },
      { title: "Signals", description: "Stronger thread status and next-step clarity" },
      { title: "Conversations", description: "Longer history and continuity across threads" },
      { title: "Leads", description: "Full lead states tied to real conversations" },
      { title: "Review", description: "Deeper insight, longer windows, and export for reporting" },
    ],
  },
  {
    name: "Teams",
    includes: "Includes everything in Workflow",
    price: "$350",
    description: "Shared Focus, shared pipeline, and shared ownership across a team.",
    features: [
      { title: "Focus", description: "Shared priorities and follow-up ownership" },
      { title: "Signals", description: "Team visibility into what's waiting and what's at risk" },
      { title: "Conversations", description: "Shared context across operators" },
      { title: "Leads", description: "Shared pipeline with roles and permissions" },
      { title: "Review", description: "Team reporting + multiple LinkedIn accounts in one workspace" },
    ],
  },
];

const fullPlanSections: PlanSection[] = [
  {
    title: "Focus, Conversations & Leads",
    rows: [
      { label: "Comment → DM → Pipeline loop", signal: "Yes", workflow: "Yes", teams: "Yes" },
      { label: "Custom feed lists", signal: "10", workflow: "50", teams: "200" },
    ],
  },
  {
    title: "Scope & Continuity",
    rows: [
      { label: "People tracked", signal: "100", workflow: "1,000", teams: "5,000" },
      { label: "Keywords tracked", signal: "25", workflow: "200", teams: "500" },
      { label: "Your posts + reply to comments", signal: "Included", workflow: "Included", teams: "Included" },
      { label: "“Replies only” comments tab", signal: "Included", workflow: "Included", teams: "Included" },
      { label: "Pipeline board", signal: "300", workflow: "5,000", teams: "25,000" },
    ],
  },
  {
    title: "Review & Insight",
    rows: [
      { label: "Analytics depth", signal: "Core", workflow: "Advanced", teams: "Advanced" },
      { label: "Custom time ranges", signal: "7d, 30d", workflow: "All ranges", teams: "All ranges" },
      { label: "CSV export", signal: "-", workflow: "Yes", teams: "Yes + Schedule" },
    ],
  },
  {
    title: "Team & Ownership",
    rows: [
      { label: "Data history", signal: "60 days", workflow: "12 months", teams: "24 months" },
      { label: "LinkedIn accounts", signal: "1", workflow: "1", teams: "3" },
      { label: "Team seats", signal: "1", workflow: "1", teams: "5" },
      { label: "Team reporting", signal: "-", workflow: "-", teams: "yes" },
    ],
  },
  {
    title: "Usage Boundaries",
    rows: [
      { label: "AI drafts (comments + DMs)", signal: "300 / mo", workflow: "1,000 / mo", teams: "2,500 / mo pooled" },
      { label: "AI thread insights", signal: "30 / mo", workflow: "300 / mo", teams: "1,000 / mo pooled" },
    ],
  },
];

function TrialBadge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-[9px]">
      <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-white">
        <svg viewBox="0 0 14 14" className="h-[12px] w-[12px] text-[#0d1117]" aria-hidden="true">
          <path d="M3 7.25L5.5 9.75L11 4.25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-[14px] font-light leading-none text-white">{text}</span>
    </div>
  );
}

function PlanCard({ plan }: { plan: PricingPlan }) {
  return (
    <article className="flex h-full w-full max-w-[327px] flex-col rounded-[20px] border border-[#27272a] bg-[#18181b] p-[20px]">
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[3px]">
          <h3 className="text-[25px] font-bold leading-[30px] text-white">{plan.name}</h3>
          <p className="text-[12px] font-normal leading-[14px] text-[#bababa]">{plan.includes}</p>
        </div>

        <div className="flex flex-col gap-[5px]">
          <div className="flex items-end leading-none text-white">
            <span className="text-[35px] font-bold">{plan.price}</span>
            <span className="pb-[4px] text-[18px] font-semibold">/month</span>
          </div>
          <p className="text-[13px] font-normal leading-[16px] text-white">{plan.description}</p>
        </div>

        <button
          type="button"
          className="h-[63px] w-full rounded-[12px] border border-[#79a4f3] text-[16px] font-medium leading-[24px] text-white"
          style={{ backgroundImage: "linear-gradient(107.62deg, #0050B2 13.92%, #41BCFF 166.78%)" }}
        >
          Start 7-day free trial
        </button>
      </div>

      <div className="mt-[20px] flex flex-1 flex-col justify-between">
        <div className="flex flex-col gap-[11px]">
          {plan.features.map((feature) => (
            <div key={`${plan.name}-${feature.title}`} className="flex items-start gap-[8px]">
              <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#d1d5dc]" />
              <p className="text-[12px] leading-[14px] text-white">
                <span className="font-bold">{feature.title}</span>
                <br />
                <span className="font-normal">{feature.description}</span>
              </p>
            </div>
          ))}
        </div>
        <p className="mt-[16px] text-[10px] font-normal leading-[1.2] text-[#bababa]">
          Includes optional AI drafting for comments and DMs (you approve everything).
        </p>
      </div>
    </article>
  );
}

function FullPlanDetails() {
  return (
    <section className="relative mt-[35px] w-full overflow-hidden rounded-[20px]">
      <div className="absolute left-0 top-[80px] h-[1105px] w-full bg-[rgba(186,186,186,0.05)]" />
      <div className="absolute left-[599px] top-[107px] h-[1078px] w-[192px] rounded-t-[10px] bg-[rgba(186,186,186,0.05)]" />

      <div className="relative flex items-center justify-between bg-[rgba(186,186,186,0.1)] px-[50px] py-[25px]">
        <h3 className="text-[25px] font-black leading-none text-white">Full plan details</h3>
        <svg viewBox="0 0 24 24" className="h-[24px] w-[24px] text-white" aria-hidden="true">
          <path d="M6 15L12 9L18 15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="relative overflow-hidden px-[33px] pb-[34px] pt-[27px]">
        <div className="relative">
          <div className="mb-[18px] grid grid-cols-[1fr_192px_192px_192px] gap-[20px]">
            <div className="h-[60px]" />
            <div className="flex h-[60px] flex-col items-center justify-center gap-[3px] rounded-[10px] border border-[rgba(255,255,255,0.5)] bg-[linear-gradient(159.45deg,rgba(255,255,255,0.1)_13.52%,rgba(153,153,153,0.05)_96.44%)] px-[15px] py-[8px] text-center">
              <p className="text-[16px] font-bold leading-none text-white">Signal</p>
              <p className="text-[13px] font-light leading-none text-white">Awareness</p>
            </div>
            <div className="flex h-[60px] flex-col items-center justify-center gap-[3px] rounded-[10px] border border-[rgba(255,255,255,0.5)] bg-[linear-gradient(159.45deg,rgba(255,255,255,0.1)_13.52%,rgba(153,153,153,0.05)_96.44%)] px-[15px] py-[8px] text-center">
              <p className="text-[16px] font-bold leading-none text-white">Workflow</p>
              <p className="text-[13px] font-light leading-none text-white">Memory &amp; Structure</p>
            </div>
            <div className="flex h-[60px] flex-col items-center justify-center gap-[3px] rounded-[10px] border border-[rgba(255,255,255,0.5)] bg-[linear-gradient(159.45deg,rgba(255,255,255,0.1)_13.52%,rgba(153,153,153,0.05)_96.44%)] px-[15px] py-[8px] text-center">
              <p className="text-[16px] font-bold leading-none text-white">Teams</p>
              <p className="text-[13px] font-light leading-none text-white">Shared Clarity</p>
            </div>
          </div>

          {fullPlanSections.map((section) => (
            <div key={section.title} className="mb-[32px]">
              <h4 className="mb-[12px] text-[18px] font-bold leading-[1.1] text-white">{section.title}</h4>
              {section.rows.map((row) => (
                <div key={`${section.title}-${row.label}`} className="grid min-h-[40px] grid-cols-[1fr_192px_192px_192px] items-center gap-[20px] border-b border-[#52525b]">
                  <p className="text-[16px] leading-[40px] text-white">{row.label}</p>
                  <p className="text-center text-[16px] leading-[40px] text-white">{row.signal}</p>
                  <p className="text-center text-[16px] leading-[40px] text-white">{row.workflow}</p>
                  <p className="text-center text-[16px] leading-[40px] text-white">{row.teams}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PricingPage() {
  return (
    <main className="relative w-full max-w-[1376px] flex-1 overflow-hidden pb-[48px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[210px] h-[750px] w-[1700px] -translate-x-1/2 rounded-full opacity-55 blur-[70px]"
        style={{ background: "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(14, 59, 80, 0.75) 0%, rgba(10, 10, 10, 0) 72%)" }}
      />

      <section className="relative z-10 mx-auto flex w-full max-w-[1174px] flex-col items-center pt-[98px]">
        <div className="flex w-full max-w-[773px] flex-col items-center gap-[35px] text-center">
          <div className="flex w-full flex-col gap-[10px]">
            <h1 className="text-[35px] font-black leading-[42px] text-white">Choose your level of control</h1>
            <p className="text-[20px] font-light leading-[24px] text-white">
              Conversations, follow-ups, and deals stay connected.
            </p>
          </div>

          <div className="flex w-full max-w-[585px] flex-col items-center gap-[10px]">
            <div className="flex h-[30px] w-full max-w-[478px] items-center justify-center rounded-[12px] border border-[#27272a] bg-[#18181b] px-[10px] shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
              <p className="text-[14px] font-medium leading-none text-[#c7c7cc]">Built for operators who value continuity, not shortcuts.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-[23px] gap-y-[10px]">
              {sectionBadges.map((badge) => (
                <TrialBadge key={badge} text={badge} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[160px] grid w-full gap-[19px] md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        <section className="mt-[90px] w-full max-w-[886px] text-center">
          <h2 className="text-[35px] font-black leading-[42px] text-white">Billing &amp; trust</h2>
          <p className="mt-[15px] text-[18px] font-normal leading-[21px] text-white">
            Trusted by operators who prefer systems over hacks.
          </p>

          <div className="mt-[50px] grid gap-[11px] md:grid-cols-2">
            {billingPills.map((pill) => (
              <div
                key={pill}
                className="flex h-[31px] items-center justify-center rounded-[50px] border border-[#27272a] bg-[#18181b] px-[20px] text-[18px] font-normal leading-none text-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
              >
                {pill}
              </div>
            ))}
          </div>

          <h3 className="mt-[50px] text-[18px] font-bold leading-[1.1] text-white">Trial &amp; refunds</h3>
          <p className="mt-[8px] text-[18px] font-normal leading-[1.25] text-white">
            7-day free trial, no card.
            <br />
            If you upgrade and it&apos;s not a fit, email us within 30 days for a refund.
          </p>
        </section>

        <section className="mt-[90px] w-full max-w-[1036px] text-center">
          <h2 className="text-[35px] font-black leading-[42px] text-white">What this replaces</h2>

          <div className="mt-[35px] rounded-[20px] bg-[#18181b] px-[50px] py-[40px] text-left">
            <div className="grid gap-[32px] md:grid-cols-2 md:gap-[60px]">
              <div className="space-y-[8px] text-[20px] font-bold leading-[1.2] text-[rgba(186,186,186,0.5)]">
                {replacesLeft.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
              <div className="space-y-[26px] text-[20px] font-bold leading-[1.2] text-white">
                {replacesRight.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </div>

          <FullPlanDetails />
        </section>
      </section>
    </main>
  );
}
