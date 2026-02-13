import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ROISection from "@/components/home/ROISection";
import CaseStudySection from "@/components/home/CaseStudySection";
import TrustSection from "@/components/home/TrustSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionsSection />
      <HowItWorksSection />
      <ROISection />
      <CaseStudySection />
      <TrustSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
