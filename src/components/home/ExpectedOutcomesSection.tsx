import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Clock, DollarSign, Target } from "lucide-react";

const outcomes = [
  {
    icon: DollarSign,
    metric: "2–5x",
    label: "Conversion rate lift",
    detail: "Typical uplift versus the previous site, based on the same traffic sources and offers.",
  },
  {
    icon: Clock,
    metric: "4-8 weeks",
    label: "From strategy to launch",
    detail: "Most projects go live within two months, complete with analytics and CRO instrumentation.",
  },
  {
    icon: Target,
    metric: "Under 2s",
    label: "Target page load",
    detail: "Performance is a conversion lever. Faster pages convert better, rank higher, and cost less to advertise on.",
  },
  {
    icon: TrendingUp,
    metric: "3x",
    label: "Return on ad spend",
    detail: "Same ad budget, better landing experience. Every dollar you spend on traffic works dramatically harder.",
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
          <span className="text-caption font-medium text-magenta uppercase tracking-wider mb-4 block">
            Expected Outcomes
          </span>
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-4">
            Measurable outcomes from day one.
          </h2>
          <p className="text-body-lg text-text-secondary">
            These are the targets we design against on every engagement, benchmarked against typical results across our client work.
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
              <div className="w-12 h-12 rounded-xl bg-magenta/10 ring-1 ring-magenta/20 flex items-center justify-center mx-auto mb-4">
                <outcome.icon className="w-5 h-5 text-magenta" />
              </div>
              <div className="text-display-sm font-bold text-magenta mb-1">{outcome.metric}</div>
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
