import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lock, RefreshCw, Blocks } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant infrastructure. End-to-end encryption. Your data never leaves your environment.",
  },
  {
    icon: Lock,
    title: "Data Privacy",
    description: "GDPR and CCPA ready. NDA available before engagement. Zero data retention on our side.",
  },
  {
    icon: Blocks,
    title: "Seamless Integration",
    description: "Works with your existing stack. Salesforce, HubSpot, Slack, Notion, and 200+ integrations.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Optimization",
    description: "Weekly performance reports. Monthly strategy reviews. Your AI workforce improves constantly.",
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
            Enterprise-ready from day one.
          </h2>
          <p className="text-body-lg text-text-secondary">
            Built for companies that take security, compliance, and reliability seriously.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="text-center p-6"
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
