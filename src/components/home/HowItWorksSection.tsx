import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Audit Your Workflows",
    description: "We map your operations, identify the highest-impact automation opportunities, and build a business case with projected ROI.",
  },
  {
    number: "02",
    title: "Design the Solution",
    description: "We architect digital workers tailored to your processes, tools, and data. No templates. Everything custom.",
  },
  {
    number: "03",
    title: "Deploy With Zero Disruption",
    description: "Your digital workers go live alongside your team. No downtime, no retraining. They start producing value from day one.",
  },
  {
    number: "04",
    title: "Optimize Continuously",
    description: "We monitor performance weekly, refine accuracy, and expand coverage as your business evolves. Results compound over time.",
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding border-t border-border" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-caption font-medium text-primary uppercase tracking-wider mb-4 block">
            Process
          </span>
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-4">
            From first call to measurable results in weeks.
          </h2>
          <p className="text-body-lg text-text-secondary">
            A structured, four-phase process designed for speed, precision, and minimal disruption to your team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="relative"
            >
              <div className="surface-card p-8 h-full">
                <span className="text-display-sm font-bold text-primary/20 mb-4 block">{step.number}</span>
                <h3 className="text-heading-sm font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-body-sm text-text-secondary">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
