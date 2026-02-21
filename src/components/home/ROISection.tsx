import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const comparisons = [
  { metric: "Annual Cost", human: "$85,000+", ai: "$12,000 to $24,000" },
  { metric: "Availability", human: "8 hrs/day, weekdays", ai: "24/7, 365 days a year" },
  { metric: "Time to Productivity", human: "3 to 6 months", ai: "2 to 4 weeks" },
  { metric: "Error Rate", human: "Variable", ai: "Under 2%, improving continuously" },
  { metric: "Scalability", human: "Hire and retrain", ai: "Deploy instantly" },
  { metric: "Onboarding Cost", human: "$5,000 to $15,000", ai: "Included in setup" },
];

const ROISection = () => {
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
            ROI
          </span>
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-4">
            The economics are clear.
          </h2>
          <p className="text-body-lg text-text-secondary">
            A side-by-side comparison of what it costs to staff a role traditionally versus deploying a digital worker for the same function.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="surface-card overflow-hidden"
        >
          <div className="grid grid-cols-3 border-b border-border">
            <div className="p-5 md:p-6 text-body-sm font-medium text-text-secondary">Metric</div>
            <div className="p-5 md:p-6 text-body-sm font-medium text-text-secondary text-center">Traditional Hire</div>
            <div className="p-5 md:p-6 text-body-sm font-medium text-primary text-center">Digital Worker</div>
          </div>
          {comparisons.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 ${i < comparisons.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="p-5 md:p-6 text-body-sm font-medium text-foreground">{row.metric}</div>
              <div className="p-5 md:p-6 text-body-sm text-text-secondary text-center">{row.human}</div>
              <div className="p-5 md:p-6 text-body-sm text-accent font-medium text-center">{row.ai}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ROISection;
