import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const useCases = [
  {
    area: "Sales Acceleration",
    industry: "B2B, SaaS, Professional Services",
    problem: "Your sales team spends most of their time on manual prospecting, writing cold emails, and chasing unqualified leads instead of closing deals.",
    solution: "A digital sales worker identifies high-intent prospects, sends personalized outreach sequences, handles follow-ups, and books qualified meetings directly on your team's calendar.",
    capabilities: [
      "Lead qualification and scoring",
      "Multi-channel outreach (email, LinkedIn)",
      "Automated follow-up sequences",
      "Calendar booking and CRM updates",
    ],
    outcome: "Your closers spend 100% of their time with qualified buyers. Outbound never sleeps.",
  },
  {
    area: "Customer Support",
    industry: "E-Commerce, SaaS, Marketplaces",
    problem: "Support volume keeps growing. Hiring more agents is expensive, and response times are slipping. Customer satisfaction is declining.",
    solution: "Digital support workers handle the majority of incoming tickets across email, chat, and social channels. They resolve common issues instantly and escalate complex ones with full context.",
    capabilities: [
      "L1 and L2 ticket resolution",
      "Order tracking and status updates",
      "Returns and refund processing",
      "Smart escalation with context handoff",
    ],
    outcome: "Instant responses, consistent quality, and a support operation that scales without headcount.",
  },
  {
    area: "Operations and Back Office",
    industry: "Logistics, Finance, Healthcare",
    problem: "Manual data entry, compliance documentation, and cross-department coordination consume hours of skilled employee time every day.",
    solution: "Digital operations workers automate repetitive workflows: data processing, document generation, scheduling, and compliance reporting across your systems.",
    capabilities: [
      "Dispatch and scheduling coordination",
      "Compliance document generation",
      "Data entry and validation",
      "Cross-system reporting and sync",
    ],
    outcome: "Fewer errors, faster turnaround, and your team reclaims hours for strategic work.",
  },
  {
    area: "Marketing Operations",
    industry: "Agencies, D2C Brands, SaaS",
    problem: "Campaign execution, content distribution, and performance reporting take too long. Your marketing team is stretched thin across too many channels.",
    solution: "Digital marketing workers handle campaign scheduling, social media distribution, performance data collection, and report generation automatically.",
    capabilities: [
      "Campaign scheduling and publishing",
      "Social media content distribution",
      "Performance data aggregation",
      "Automated reporting dashboards",
    ],
    outcome: "Your strategists focus on creative and growth while execution runs on autopilot.",
  },
  {
    area: "Finance and Accounting",
    industry: "Mid-Market Companies, Startups",
    problem: "Invoice processing, expense categorization, and reconciliation are manual, error-prone, and consume disproportionate team resources.",
    solution: "Digital finance workers process invoices, categorize expenses, reconcile transactions, and flag anomalies before they become problems.",
    capabilities: [
      "Invoice processing and matching",
      "Expense categorization",
      "Bank reconciliation",
      "Anomaly detection and alerts",
    ],
    outcome: "Accurate books, faster closes, and finance teams that focus on analysis instead of data entry.",
  },
  {
    area: "HR and Recruitment",
    industry: "Scaling Companies, Agencies",
    problem: "Screening candidates, scheduling interviews, and managing onboarding paperwork take recruiters away from evaluating talent.",
    solution: "Digital HR workers screen applications, schedule interviews, send follow-ups, and manage onboarding checklists so your team can focus on hiring the right people.",
    capabilities: [
      "Resume screening and shortlisting",
      "Interview scheduling",
      "Candidate communication",
      "Onboarding workflow automation",
    ],
    outcome: "Faster time-to-hire and a better candidate experience without adding headcount.",
  },
];

const UseCases = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO title="Use Cases" description="See how digital workers automate sales, support, operations, marketing, finance, and HR across industries." path="/use-cases" />
      <Navigation />
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-caption font-medium text-primary uppercase tracking-wider mb-4 block">Use Cases</span>
            <h1 className="text-heading md:text-display-sm lg:text-display font-bold text-foreground mb-6">
              Digital workers for every function.
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              See how intelligent automation applies to your department, industry, and daily operations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide space-y-12">
          {useCases.map((uc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="surface-card p-8 md:p-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-heading font-bold text-foreground">{uc.area}</h2>
                <span className="text-caption text-text-tertiary">{uc.industry}</span>
              </div>

              <div className="grid md:grid-cols-2 gap-10 mb-8">
                <div>
                  <h4 className="text-body-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">The Challenge</h4>
                  <p className="text-body text-text-secondary mb-6">{uc.problem}</p>
                  <h4 className="text-body-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">The Solution</h4>
                  <p className="text-body text-text-secondary">{uc.solution}</p>
                </div>
                <div>
                  <h4 className="text-body-sm font-semibold text-text-tertiary uppercase tracking-wider mb-3">Capabilities</h4>
                  <ul className="space-y-2 mb-6">
                    {uc.capabilities.map((cap, j) => (
                      <li key={j} className="flex items-start gap-2 text-body-sm text-text-secondary">
                        <span className="text-primary mt-0.5">✓</span>
                        {cap}
                      </li>
                    ))}
                  </ul>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <h4 className="text-body-sm font-semibold text-primary mb-1">The Outcome</h4>
                    <p className="text-body-sm text-text-secondary">{uc.outcome}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-tight text-center">
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-6">Not sure where to start?</h2>
          <p className="text-body-lg text-text-secondary mb-8 max-w-xl mx-auto">Tell us about your operations. We will identify the highest-impact areas for digital workers in your business.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-body font-medium text-primary-foreground hover:bg-primary/90 transition-all glow-sm">
            Book a Free Strategy Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UseCases;
