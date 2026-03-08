import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const tiers = [
  {
    name: "Foundation",
    description: "Ideal for companies deploying their first digital worker.",
    price: "From $2,500",
    period: "/month",
    features: [
      "1 custom digital worker",
      "Core workflow automation",
      "Standard integrations",
      "Weekly performance reports",
      "Email support",
      "Monthly optimization review",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    description: "For scaling companies with automation needs across multiple departments.",
    price: "From $6,000",
    period: "/month",
    features: [
      "Up to 4 custom digital workers",
      "Multi-department deployment",
      "Advanced integrations and APIs",
      "Real-time analytics dashboard",
      "Priority support with SLA",
      "Bi-weekly strategy calls",
      "Custom training and documentation",
    ],
    cta: "Book Strategy Call",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For organizations requiring a full-scale digital workforce.",
    price: "Custom",
    period: "",
    features: [
      "Unlimited digital workers",
      "Enterprise-wide deployment",
      "Custom model training",
      "Dedicated success manager",
      "24/7 priority support",
      "Custom security and compliance",
      "On-premise deployment option",
      "Executive quarterly reviews",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "How long does deployment take?",
    a: "Most deployments take 4 to 8 weeks from audit to go-live. Single-agent deployments with straightforward integrations can launch faster.",
  },
  {
    q: "What if the digital worker makes a mistake?",
    a: "Every digital worker includes configurable confidence thresholds and human escalation rules. After the optimization period, error rates are typically under 2%.",
  },
  {
    q: "Can we start with a pilot before committing?",
    a: "Yes. We recommend starting with a single digital worker to prove ROI before expanding across departments. Most clients see clear results within 30 days.",
  },
  {
    q: "Can we cancel at any time?",
    a: "Yes. After an initial 3-month engagement, all contracts are month-to-month. You retain full ownership of all custom configurations and workflows.",
  },
  {
    q: "How do you handle data security?",
    a: "SOC 2 compliant infrastructure. End-to-end encryption. Your data never leaves your environment. We offer NDA signing before any engagement begins.",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="text-caption font-medium text-primary uppercase tracking-wider mb-4 block">Pricing</span>
            <h1 className="text-heading md:text-display-sm lg:text-display font-bold text-foreground mb-6">
              Invest in outcomes, not headcount.
            </h1>
            <p className="text-body-lg text-text-secondary">
              Clear pricing. Measurable ROI. No long-term lock-in.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6 mb-24">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`surface-card p-8 md:p-10 flex flex-col ${tier.highlighted ? "border-primary/30 glow-sm" : ""}`}
              >
                <h3 className="text-heading-sm font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-body-sm text-text-secondary mb-6">{tier.description}</p>
                <div className="mb-8">
                  <span className="text-heading font-bold text-foreground">{tier.price}</span>
                  <span className="text-body-sm text-text-tertiary">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-body-sm text-text-secondary">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-body-sm font-medium transition-all ${
                    tier.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 glow-sm"
                      : "border border-border bg-secondary text-foreground hover:bg-surface-hover"
                  }`}
                >
                  {tier.cta} <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <h2 className="text-heading font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="border-b border-border pb-6"
                >
                  <h3 className="text-body font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-body-sm text-text-secondary">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Pricing;
