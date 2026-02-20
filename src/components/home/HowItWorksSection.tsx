import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "We Learn Your Business",
    description: "We sit down with your team, understand how you work, and find the tasks that are eating up the most time and money.",
  },
  {
    number: "02",
    title: "We Build Your Solution",
    description: "We create digital workers custom-fitted to your processes. They work with the tools you already use.",
  },
  {
    number: "03",
    title: "We Set It Live",
    description: "Your new digital workers start handling tasks alongside your team. No disruption, no learning curve for you.",
  },
  {
    number: "04",
    title: "We Keep Improving",
    description: "We monitor performance, fine-tune results, and expand to new tasks as your business grows.",
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
            How we get you results.
          </h2>
          <p className="text-body-lg text-text-secondary">
            Four simple steps. Up and running in weeks, not months.
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
