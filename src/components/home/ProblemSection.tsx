import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingDown, Clock, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    stat: "$4.7M",
    label: "Average annual cost of manual operations",
    description: "Data entry, follow-ups, reporting, approvals. Across departments, these small inefficiencies compound into millions in lost output.",
  },
  {
    icon: Clock,
    stat: "68%",
    label: "Of employee time spent on repeatable work",
    description: "Research consistently shows that most knowledge workers spend the majority of their day on tasks that follow a pattern, not on strategic thinking.",
  },
  {
    icon: AlertTriangle,
    stat: "23 hrs",
    label: "Per person, per week on low-value tasks",
    description: "Nearly three full working days, every week, consumed by work that a well-designed digital worker can handle with higher accuracy.",
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
          <span className="text-caption font-medium text-primary uppercase tracking-wider mb-4 block">
            The Problem
          </span>
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-4">
            Your team is spending time on the wrong things.
          </h2>
          <p className="text-body-lg text-text-secondary">
            Every business has work that follows a pattern. Repetitive, predictable, and necessary. We automate it so your people can do what they were actually hired to do.
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
              <problem.icon className="w-5 h-5 text-primary mb-6" />
              <div className="text-display-sm font-bold text-foreground mb-2">{problem.stat}</div>
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
