import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
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
      <PageSEO title="AI Workforce Architects" description="We design and deploy custom digital workers that operate inside your business 24/7. Automate sales, operations, support, and research." path="/" />
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
