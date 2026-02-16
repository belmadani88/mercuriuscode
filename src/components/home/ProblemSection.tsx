import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingDown, Clock, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    stat: "$4.7M",
    label: "Wasted every year on work that could be automated",
    description: "Copy-pasting data, writing the same emails, chasing follow-ups — it all adds up to millions in lost productivity.",
  },
  {
    icon: Clock,
    stat: "68%",
    label: "Of your team's time goes to repetitive tasks",
    description: "Your best people are buried in busywork instead of growing the business.",
  },
  {
    icon: AlertTriangle,
    stat: "23hrs",
    label: "Lost per person, per week",
    description: "That's 3 full working days every week spent on tasks a digital worker could handle.",
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
            Your team is drowning in busywork.
          </h2>
          <p className="text-body-lg text-text-secondary">
            Every business has tasks that eat up time but don't need human creativity. We take those off your plate — permanently.
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
