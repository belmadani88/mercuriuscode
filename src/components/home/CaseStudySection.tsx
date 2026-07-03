import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding border-t border-border" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <span className="text-caption font-medium text-purple uppercase tracking-wider mb-4 block">
              Use Cases
            </span>
            <h2 className="text-heading md:text-display-sm font-bold text-foreground">
              What a conversion-engineered site can do for you.
            </h2>
          </div>
          <Link to="/use-cases" className="hidden md:flex items-center gap-1 text-body-sm font-medium text-purple hover:text-purple/80 transition-colors">
            View all use cases <ArrowUpRight size={14} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              area: "Lead Generation",
              industry: "B2B & Services",
              icon: "🎯",
              label: "Turn traffic into qualified leads",
              description: "Pages engineered around your ideal buyer. Sharper messaging, tighter offers, and forms designed to capture serious intent without friction.",
            },
            {
              area: "E-Commerce Growth",
              industry: "DTC & Retail",
              icon: "💬",
              label: "Lift average order value and CVR",
              description: "Storefronts, product pages, and checkout flows tuned to reduce friction, raise trust, and get more visitors to complete the purchase.",
            },
            {
              area: "SaaS & Startups",
              industry: "AI, Tech, Software",
              icon: "⚙️",
              label: "Position, differentiate, convert",
              description: "Sharpen your positioning, communicate your product in seconds, and turn homepage visitors into signups, demos, and paid customers.",
            },
          ].map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="surface-card p-8 group hover:border-glow transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl">{useCase.icon}</span>
                <span className="text-caption font-medium text-text-secondary">{useCase.area}</span>
                <span className="text-caption text-text-tertiary">·</span>
                <span className="text-caption text-text-tertiary">{useCase.industry}</span>
              </div>
              <div className="text-body font-semibold text-foreground mb-3">{useCase.label}</div>
              <p className="text-body-sm text-text-secondary">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
