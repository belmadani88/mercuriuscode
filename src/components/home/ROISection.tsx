import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const comparisons = [
  { metric: "Primary Goal", human: "Look good", ai: "Generate revenue" },
  { metric: "Conversion Rate", human: "1–2% (industry norm)", ai: "3–8% typical outcome" },
  { metric: "Ad Efficiency", human: "High cost per lead", ai: "Dramatically lower CPL and CAC" },
  { metric: "Time to Launch", human: "3 to 6 months", ai: "4 to 8 weeks" },
  { metric: "Post-Launch Support", human: "Handed off, forgotten", ai: "Continuous CRO and optimization" },
  { metric: "Measurement", human: "Vanity metrics", ai: "Revenue, pipeline, ROI" },
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
          <span className="text-caption font-medium text-yellow uppercase tracking-wider mb-4 block">
            ROI
          </span>
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-4">
            The difference is measurable.
          </h2>
          <p className="text-body-lg text-text-secondary">
            A side-by-side comparison of a generic agency website versus a site engineered by WebThangs around conversion, revenue, and business outcomes.
          </p>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="surface-card overflow-hidden hidden md:block"
        >
          <div className="grid grid-cols-3 border-b border-border">
            <div className="p-5 md:p-6 text-body-sm font-medium text-text-secondary">Metric</div>
            <div className="p-5 md:p-6 text-body-sm font-medium text-text-secondary text-center">Generic Website</div>
            <div className="p-5 md:p-6 text-body-sm font-medium text-yellow text-center">WebThangs Site</div>
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

        {/* Mobile stacked cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4 md:hidden"
        >
          {comparisons.map((row, i) => (
            <div key={i} className="surface-card p-5">
              <div className="text-body-sm font-semibold text-foreground mb-3">{row.metric}</div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <div className="text-caption text-text-tertiary uppercase tracking-wider mb-1">Generic</div>
                  <div className="text-body-sm text-text-secondary">{row.human}</div>
                </div>
                <div className="text-right">
                  <div className="text-caption text-yellow uppercase tracking-wider mb-1">WebThangs</div>
                  <div className="text-body-sm text-accent font-medium">{row.ai}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ROISection;
