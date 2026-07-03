import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingDown, Clock, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    stat: "97%",
    label: "Of visitors leave without converting",
    description: "Most sites are built to look nice, not to sell. Traffic arrives, scrolls, and disappears. Every non-converting visitor is money you already paid to acquire.",
  },
  {
    icon: Clock,
    stat: "2.35%",
    label: "Average website conversion rate",
    description: "The industry benchmark most businesses accept without questioning. A site engineered for conversion typically performs two to five times better on the same traffic.",
  },
  {
    icon: AlertTriangle,
    stat: "$1 in / $0.15 out",
    label: "The true cost of ad spend on a weak site",
    description: "Every dollar spent driving traffic to a low-converting page is a dollar wasted. Fix the site, and the same ad budget delivers dramatically more revenue.",
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding border-t border-border" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-caption font-medium text-orange uppercase tracking-wider mb-4 block">
            The Problem
          </span>
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-4">
            Your website is leaving revenue on the table.
          </h2>
          <p className="text-body-lg text-text-secondary">
            You worked hard to earn the traffic. Ads, SEO, content, referrals. Then the site fails to convert. Most websites are decorated brochures pretending to be sales engines. We fix that.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="surface-card p-8 group hover:border-glow transition-all duration-300"
            >
              <problem.icon className="w-5 h-5 text-orange mb-6" />
              <div className="text-display-sm font-bold text-orange mb-2">{problem.stat}</div>
              <div className="text-body-sm font-medium text-foreground mb-3">{problem.label}</div>
              <p className="text-body-sm text-text-secondary">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
