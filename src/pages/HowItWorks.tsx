import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    phase: "Phase 1",
    title: "Discovery & Audit",
    duration: "Week 1–2",
    details: [
      "Map all existing workflows and processes",
      "Identify automation opportunities with ROI estimates",
      "Evaluate current tech stack and integration points",
      "Define success metrics and KPIs",
      "Deliver a comprehensive AI Workforce Blueprint",
    ],
  },
  {
    phase: "Phase 2",
    title: "Architecture & Design",
    duration: "Week 2–4",
    details: [
      "Design custom agent architecture",
      "Select optimal AI models for each task",
      "Plan data flows and security protocols",
      "Create integration blueprints",
      "Define governance and escalation rules",
    ],
  },
  {
    phase: "Phase 3",
    title: "Build & Deploy",
    duration: "Week 4–8",
    details: [
      "Develop and train custom AI agents",
      "Integrate with existing systems",
      "Comprehensive testing and QA",
      "Staged rollout with monitoring",
      "Team training and documentation",
    ],
  },
  {
    phase: "Phase 4",
    title: "Optimize & Scale",
    duration: "Ongoing",
    details: [
      "Continuous performance monitoring",
      "Weekly optimization cycles",
      "Monthly strategy reviews",
      "Expansion to new workflows",
      "Quarterly ROI reporting",
    ],
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-caption font-medium text-primary uppercase tracking-wider mb-4 block">Process</span>
            <h1 className="text-heading md:text-display-sm lg:text-display font-bold text-foreground mb-6">
              A proven methodology.
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              From discovery to deployment in weeks. Our four-phase process ensures precision, security, and measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="surface-card p-8 md:p-10"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <span className="text-caption font-medium text-primary">{step.phase}</span>
                  <h3 className="text-heading-sm font-bold text-foreground mt-1 mb-2">{step.title}</h3>
                  <span className="text-body-sm text-text-tertiary">{step.duration}</span>
                </div>
                <div className="md:col-span-2">
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {step.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-2 text-body-sm text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {detail}
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
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-6">Start with a free audit.</h2>
          <p className="text-body-lg text-text-secondary mb-8 max-w-xl mx-auto">We'll map your workflows, identify opportunities, and show you the ROI before you commit.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-body font-medium text-primary-foreground hover:bg-primary/90 transition-all glow-sm">
            Book Strategy Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HowItWorks;
