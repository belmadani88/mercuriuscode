import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, HeadphonesIcon, Settings, Search } from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "Sales Assistant",
    description: "Finds potential customers, sends follow-ups, and books meetings for your team — day and night, without missing a lead.",
    metrics: "3x more leads",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support",
    description: "Answers customer questions instantly, solves common problems, and hands off tricky issues to your team with full context.",
    metrics: "85% handled automatically",
  },
  {
    icon: Settings,
    title: "Operations Helper",
    description: "Moves data between your tools, creates reports, and keeps your workflows running smoothly — no manual effort needed.",
    metrics: "60% less admin work",
  },
  {
    icon: Search,
    title: "Research Assistant",
    description: "Monitors your market, tracks competitors, and delivers key insights so you can make faster, smarter decisions.",
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
            Digital workers for every part of your business.
          </h2>
          <p className="text-body-lg text-text-secondary">
            Think of them as tireless team members. They learn your processes, use your tools, and get things done — just like a new hire, but faster and more affordable.
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
