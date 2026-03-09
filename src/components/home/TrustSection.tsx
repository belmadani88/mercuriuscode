import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lock, RefreshCw, Blocks } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "AES-256 encryption, SOC 2 compliance, and strict access controls. Your data never leaves your environment.",
  },
  {
    icon: Lock,
    title: "Privacy by Design",
    description: "Fully compliant with GDPR, CCPA, and industry-specific regulations. NDA available before any engagement.",
  },
  {
    icon: Blocks,
    title: "Seamless Integration",
    description: "Connects with Salesforce, HubSpot, Slack, Notion, SAP, and 200+ other tools your team already relies on.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Optimization",
    description: "Weekly performance reviews, ongoing accuracy improvements, and proactive scaling as your needs grow.",
  },
];

const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-caption font-medium text-primary uppercase tracking-wider mb-4 block">
            Trust & Security
          </span>
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-4">
            Security and reliability, by default.
          </h2>
          <p className="text-body-lg text-text-secondary">
            We handle sensitive business data every day. Our infrastructure is built to the same standards as the financial institutions we serve.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="surface-card p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-body font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-body-sm text-text-secondary">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
