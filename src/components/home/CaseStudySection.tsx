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
            <span className="text-caption font-medium text-primary uppercase tracking-wider mb-4 block">
              Use Cases
            </span>
            <h2 className="text-heading md:text-display-sm font-bold text-foreground">
              What digital workers can do for you.
            </h2>
          </div>
          <Link to="/use-cases" className="hidden md:flex items-center gap-1 text-body-sm font-medium text-primary hover:text-primary/80 transition-colors">
            View all use cases <ArrowUpRight size={14} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              area: "Sales Acceleration",
              industry: "B2B / SaaS",
              icon: "🎯",
              label: "Automate outbound prospecting",
              description: "A digital sales worker qualifies leads, sends personalized outreach, and books meetings on your team's calendar, around the clock.",
            },
            {
              area: "Customer Support",
              industry: "E-Commerce / SaaS",
              icon: "💬",
              label: "Resolve tickets instantly",
              description: "Digital support workers handle L1 and L2 inquiries across email, chat, and social channels, escalating only the complex issues to your team.",
            },
            {
              area: "Operations",
              industry: "Logistics / Finance",
              icon: "⚙️",
              label: "Streamline back-office workflows",
              description: "Automate dispatch coordination, compliance documentation, data entry, and reporting across departments and offices.",
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
