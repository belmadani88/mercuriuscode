import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    name: "FinTech & Financial Services",
    pains: ["Manual compliance reporting", "Slow customer onboarding", "Repetitive back-office operations"],
    useCases: ["Automated KYC/AML screening", "AI-driven fraud detection", "Intelligent document processing"],
    metric: "70% faster onboarding",
  },
  {
    name: "E-Commerce & Retail",
    pains: ["Scaling support with growth", "Cart abandonment", "Inventory forecasting errors"],
    useCases: ["24/7 AI customer support", "Personalized re-engagement", "Demand prediction agents"],
    metric: "45% reduction in support costs",
  },
  {
    name: "SaaS & Technology",
    pains: ["Lead qualification bottlenecks", "Churn prediction gaps", "Manual data pipeline management"],
    useCases: ["AI SDR agents", "Proactive churn prevention", "Automated data ops"],
    metric: "3x pipeline velocity",
  },
  {
    name: "Logistics & Supply Chain",
    pains: ["Route optimization complexity", "Compliance documentation", "Dispatch coordination overhead"],
    useCases: ["AI dispatch coordination", "Automated compliance reporting", "Predictive maintenance agents"],
    metric: "$1.2M annual savings",
  },
  {
    name: "Healthcare & Life Sciences",
    pains: ["Administrative burden on clinicians", "Appointment scheduling inefficiency", "Research data processing"],
    useCases: ["Clinical documentation agents", "Intelligent scheduling", "Literature review automation"],
    metric: "40% admin reduction",
  },
  {
    name: "Professional Services",
    pains: ["Research-intensive workflows", "Proposal generation time", "Knowledge management gaps"],
    useCases: ["AI research assistants", "Automated proposal drafting", "Institutional knowledge agents"],
    metric: "5x faster research",
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-caption font-medium text-primary uppercase tracking-wider mb-4 block">Industries</span>
            <h1 className="text-heading md:text-display-sm lg:text-display font-bold text-foreground mb-6">
              AI agents built for your industry.
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              Every industry has unique workflows, compliance requirements, and operational challenges. We build accordingly.
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
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-heading-sm font-bold text-foreground">{ind.name}</h3>
                <span className="text-caption font-medium text-accent whitespace-nowrap ml-4">{ind.metric}</span>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-0">
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

      <section className="section-padding border-t border-border">
        <div className="container-tight text-center">
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-6">Don't see your industry?</h2>
          <p className="text-body-lg text-text-secondary mb-8 max-w-xl mx-auto">We build custom. Tell us about your workflows and we'll design the right solution.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-body font-medium text-primary-foreground hover:bg-primary/90 transition-all glow-sm">
            Book Strategy Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Industries;
