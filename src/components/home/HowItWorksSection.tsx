import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Audit & Strategy",
    description: "We study your buyers, your offer, your competitors, and your current site. Then we map the exact conversion strategy that turns your traffic into revenue.",
  },
  {
    number: "02",
    title: "Design for Conversion",
    description: "Every layout, headline, image, and CTA is built around buyer psychology. Not templates. Not trends. Just decisions engineered to move revenue.",
  },
  {
    number: "03",
    title: "Build & Launch",
    description: "Fast, modern, technically flawless. Your new site ships in weeks, not months, with performance, SEO, and analytics wired in from day one.",
  },
  {
    number: "04",
    title: "Optimize & Scale",
    description: "We measure every conversion, test every hypothesis, and keep lifting performance. Your site gets better every month, not worse.",
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
          <span className="text-caption font-medium text-purple uppercase tracking-wider mb-4 block">
            Process
          </span>
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-4">
            From strategy to measurable revenue in weeks.
          </h2>
          <p className="text-body-lg text-text-secondary">
            A structured, four-phase engagement designed for speed, precision, and measurable growth from launch onward.
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
                <span className="text-display-sm font-bold text-purple/30 mb-4 block">{step.number}</span>
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
