import { Hero } from "@/components/marketing/Hero";
import { LogoCloud } from "@/components/marketing/LogoCloud";
import { FeatureSplit } from "@/components/marketing/FeatureSplit";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { Steps } from "@/components/marketing/Steps";
import { Testimonials } from "@/components/marketing/Testimonials";
import { FAQ } from "@/components/marketing/FAQ";
import { FinalCTA } from "@/components/marketing/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoCloud />

      <FeatureSplit
        title="Show the product clearly"
        description="The design relies heavily on screenshot-led sections. We build reusable split layouts so swapping screenshots and copy later is trivial."
        bullets={[
          "Alternating image/text patterns",
          "Consistent spacing + typography rhythm",
          "Responsive stacking with clean breakpoints",
        ]}
      />
      <FeatureSplit
        title="Dense sections without messy code"
        description="This page has lots of repeated blocks. A small set of primitives keeps everything consistent and easier to maintain."
        bullets={[
          "Card styles, borders, glows, and hover states",
          "Reusable grids for features, pricing, and blog cards",
          "Accessible, keyboard-friendly components",
        ]}
        reverse
      />

      <FeatureGrid />
      <Steps />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
