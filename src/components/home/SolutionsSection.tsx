import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, HeadphonesIcon, Settings, Search } from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "AI Sales Agents",
    description: "Qualify leads, nurture prospects, and close deals around the clock. Your pipeline never sleeps.",
    metrics: "3x pipeline velocity",
  },
  {
    icon: HeadphonesIcon,
    title: "AI Support Agents",
    description: "Resolve tickets, handle inquiries, and escalate intelligently. Consistent quality at any scale.",
    metrics: "85% resolution rate",
  },
  {
    icon: Settings,
    title: "AI Operations Agents",
    description: "Process data, manage workflows, and coordinate systems. Operational precision without overhead.",
    metrics: "60% cost reduction",
  },
  {
    icon: Search,
    title: "AI Research Agents",
    description: "Analyze markets, monitor competitors, and surface insights. Decisions backed by real-time data.",
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
            AI agents built for every function.
          </h2>
          <p className="text-body-lg text-text-secondary">
            Not chatbots. Not templates. Custom-built autonomous agents designed for your specific workflows.
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
