import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import StickyCTA from "@/components/StickyCTA";
import HeroSection from "@/components/home/HeroSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ROISection from "@/components/home/ROISection";
import ExpectedOutcomesSection from "@/components/home/ExpectedOutcomesSection";
import CaseStudySection from "@/components/home/CaseStudySection";
import TrustSection from "@/components/home/TrustSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO
        title="Heuristic thinking. Operational excellence."
        description="We design and deploy custom digital workers that operate inside your business 24/7. Automate sales, operations, support, and research. From $2,500/mo."
        path="/"
      />
      <Navigation />
      <HeroSection />
      <SocialProofSection />
      <ProblemSection />
      <SolutionsSection />
      <HowItWorksSection />
      <ROISection />
      <ExpectedOutcomesSection />
      <CaseStudySection />
      <TrustSection />
      <CTASection />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Index;