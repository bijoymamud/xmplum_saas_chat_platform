
import BackgroundEffects from "./home/component/BackgroundEffects";
import HeroSection from "./home/component/HeroSection";
import ProblemSection from "./home/component/ProblemSection";
import AssistantsSection from "./home/component/AssistantsSection";
import HowItWorksSection from "./home/component/HowItWorksSection";
import TrustSection from "./home/component/TrustSection";
import ComparisonSection from "./home/component/ComparisonSection";
import DemoSection from "./home/component/DemoSection";
// import TestimonialsSection from "./home/component/TestimonialsSection";
import PricingSection from "./home/component/PricingSection";
// import FaqSection from "./home/component/FaqSection";
import FinalCtaSection from "./home/component/FinalCtaSection";
import WorkingWith from "./home/component/WorkingWith";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-background">
      <BackgroundEffects />
      <HeroSection />
      <WorkingWith/>
      <ProblemSection />
      <AssistantsSection />
      <HowItWorksSection />
      <TrustSection />
      <ComparisonSection />
      <DemoSection />
      {/* <TestimonialsSection /> */}
      <PricingSection />
      {/* <FaqSection /> */}
      <FinalCtaSection />
    </div>
  );
}