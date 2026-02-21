import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, HeadphonesIcon, Settings, Search } from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "Sales",
    description: "Qualifies leads, personalizes outreach, follows up with prospects, and books meetings around the clock. Your pipeline stays full without adding headcount.",
    metrics: "3x pipeline growth",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support",
    description: "Resolves common inquiries instantly across every channel. Complex issues are escalated with full context, so your team picks up right where it matters.",
    metrics: "85% auto-resolution",
  },
  {
    icon: Settings,
    title: "Operations",
    description: "Syncs data across systems, generates reports, and keeps workflows on track. No more manual handoffs or spreadsheet errors slowing your team down.",
    metrics: "60% less admin work",
  },
  {
    icon: Search,
    title: "Research",
    description: "Continuously scans your market, tracks competitors, and surfaces the insights that matter. Decisions get faster when the data comes to you.",
    metrics: "10x faster insights",
  },
];

const SolutionsSection = () => {
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
            Solutions
          </span>
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-4">
            One platform. Every department covered.
          </h2>
          <p className="text-body-lg text-text-secondary">
            Each digital worker is built specifically for your workflows. They integrate with the tools you already use and start delivering results within weeks, not quarters.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="surface-card p-8 md:p-10 group hover:border-glow transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <solution.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-caption font-medium text-accent">{solution.metrics}</span>
              </div>
              <h3 className="text-heading-sm font-semibold text-foreground mb-3">{solution.title}</h3>
              <p className="text-body text-text-secondary">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
