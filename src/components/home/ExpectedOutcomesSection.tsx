import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Clock, DollarSign, Target } from "lucide-react";

const outcomes = [
  {
    icon: DollarSign,
    metric: "60-80%",
    label: "Expected cost reduction",
    detail: "Compared to staffing the same function traditionally, based on typical deployment economics.",
  },
  {
    icon: Clock,
    metric: "4-8 weeks",
    label: "From audit to production",
    detail: "Most digital workers are live and producing results within two months of engagement.",
  },
  {
    icon: Target,
    metric: "Under 2%",
    label: "Target error rate",
    detail: "After the optimization period, digital workers consistently outperform manual accuracy benchmarks.",
  },
  {
    icon: TrendingUp,
    metric: "3x",
    label: "Projected pipeline growth",
    detail: "Sales teams supported by digital workers can expect significantly higher outbound volume and quality.",
  },
];

const ExpectedOutcomesSection = () => {
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
            Expected Outcomes
          </span>
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-4">
            Projected results from day one.
          </h2>
          <p className="text-body-lg text-text-secondary">
            These projections are based on the capabilities of our digital worker architecture and typical deployment performance.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="surface-card p-8 text-center group hover:border-glow transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <outcome.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-display-sm font-bold text-accent mb-1">{outcome.metric}</div>
              <div className="text-body-sm font-semibold text-foreground mb-2">{outcome.label}</div>
              <p className="text-caption text-text-secondary">{outcome.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpectedOutcomesSection;
