import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    name: "FinTech and Financial Services",
    pains: ["Manual compliance reporting", "Slow customer onboarding", "Repetitive back-office operations"],
    useCases: ["Automated KYC/AML screening", "AI-driven fraud detection", "Intelligent document processing"],
    metric: "Up to 70% faster onboarding",
  },
  {
    name: "E-Commerce and Retail",
    pains: ["Support costs scaling with growth", "Cart abandonment recovery", "Inventory forecasting errors"],
    useCases: ["24/7 intelligent customer support", "Personalized re-engagement", "Demand prediction and planning"],
    metric: "Up to 45% lower support costs",
  },
  {
    name: "SaaS and Technology",
    pains: ["Lead qualification bottlenecks", "Churn prediction gaps", "Manual data pipeline management"],
    useCases: ["Automated SDR workflows", "Proactive churn prevention", "Self-managing data operations"],
    metric: "Up to 3x pipeline velocity",
  },
  {
    name: "Logistics and Supply Chain",
    pains: ["Route optimization complexity", "Compliance documentation load", "Dispatch coordination overhead"],
    useCases: ["Intelligent dispatch coordination", "Automated compliance reporting", "Predictive maintenance alerts"],
    metric: "Potential for $1M+ annual savings",
  },
  {
    name: "Healthcare and Life Sciences",
    pains: ["Administrative burden on clinicians", "Scheduling inefficiency", "Research data processing delays"],
    useCases: ["Clinical documentation automation", "Intelligent appointment scheduling", "Literature review acceleration"],
    metric: "Up to 40% admin reduction",
  },
  {
    name: "Professional Services",
    pains: ["Research-intensive workflows", "Slow proposal generation", "Knowledge management gaps"],
    useCases: ["AI-powered research assistants", "Automated proposal drafting", "Institutional knowledge systems"],
    metric: "Up to 5x faster research",
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO title="Industries" description="Digital workers purpose-built for FinTech, E-Commerce, SaaS, Logistics, Healthcare, and Professional Services." path="/industries" />
      <Navigation />
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-caption font-medium text-primary uppercase tracking-wider mb-4 block">Industries</span>
            <h1 className="text-heading md:text-display-sm lg:text-display font-bold text-foreground mb-6">
              Purpose-built for your industry.
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              Every industry has unique workflows, compliance requirements, and operational patterns. We design digital workers that reflect those realities.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide grid md:grid-cols-2 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="surface-card p-8 hover:border-glow transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                <h3 className="text-heading-sm font-bold text-foreground">{ind.name}</h3>
                <span className="text-caption font-medium text-accent whitespace-nowrap">{ind.metric}</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 mb-0">
                <div>
                  <h4 className="text-caption font-semibold text-text-tertiary uppercase tracking-wider mb-2">Pain Points</h4>
                  <ul className="space-y-1.5">
                    {ind.pains.map((p, j) => (
                      <li key={j} className="text-body-sm text-text-secondary flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-destructive/60 mt-2 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-caption font-semibold text-text-tertiary uppercase tracking-wider mb-2">AI Solutions</h4>
                  <ul className="space-y-1.5">
                    {ind.useCases.map((u, j) => (
                      <li key={j} className="text-body-sm text-text-secondary flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12 border-t border-border">
        <div className="container-wide flex flex-wrap justify-center gap-6">
          <Link to="/solutions" className="text-body-sm font-medium text-text-secondary hover:text-primary transition-colors">
            View all solutions →
          </Link>
          <Link to="/use-cases" className="text-body-sm font-medium text-text-secondary hover:text-primary transition-colors">
            Explore use cases →
          </Link>
          <Link to="/how-it-works" className="text-body-sm font-medium text-text-secondary hover:text-primary transition-colors">
            See how it works →
          </Link>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-tight text-center">
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-6">Don't see your industry?</h2>
          <p className="text-body-lg text-text-secondary mb-8 max-w-xl mx-auto">Every engagement is custom. Tell us about your workflows and we will design the right solution from the ground up.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-body font-semibold text-primary-foreground hover:bg-primary/90 transition-all glow-sm">
            Book a Free Strategy Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Industries;
