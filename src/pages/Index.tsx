import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import PageSEO from "@/components/PageSEO";
import HeroSection from "@/components/home/HeroSection";

/* Below-the-fold sections load after the hero is interactive */
const SocialProofSection = lazy(() => import("@/components/home/SocialProofSection"));
const ProblemSection = lazy(() => import("@/components/home/ProblemSection"));
const SolutionsSection = lazy(() => import("@/components/home/SolutionsSection"));
const HowItWorksSection = lazy(() => import("@/components/home/HowItWorksSection"));
const ROISection = lazy(() => import("@/components/home/ROISection"));
const ExpectedOutcomesSection = lazy(() => import("@/components/home/ExpectedOutcomesSection"));
const CaseStudySection = lazy(() => import("@/components/home/CaseStudySection"));
const TrustSection = lazy(() => import("@/components/home/TrustSection"));
const CTASection = lazy(() => import("@/components/home/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <PageSEO
        title="AI-powered websites engineered for revenue"
        description="WebThangs builds conversion-engineered websites enhanced with AI sales agents, Generative Engine Optimization, real-time personalization, CRM automation, and continuous CRO."
        path="/"
      />
      <Navigation />
      <HeroSection />
      <Suspense fallback={null}>
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
      </Suspense>
    </div>
  );
};

export default Index;