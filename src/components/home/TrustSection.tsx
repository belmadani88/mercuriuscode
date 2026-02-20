import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lock, RefreshCw, Blocks } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Your Data Is Safe",
    description: "Bank-level security. Your information stays protected and never leaves your systems.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "We follow all major privacy regulations. Happy to sign an NDA before we even start talking.",
  },
  {
    icon: Blocks,
    title: "Works With Your Tools",
    description: "Connects to the software you already use: Salesforce, HubSpot, Slack, Notion, and 200+ more.",
  },
  {
    icon: RefreshCw,
    title: "Always Getting Better",
    description: "We send regular reports and keep improving your digital workers so results grow over time.",
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
            Built to earn your trust.
          </h2>
          <p className="text-body-lg text-text-secondary">
            We know you need reliability and security. That's why we built it into everything we do.
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
