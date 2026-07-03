import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lock, RefreshCw, Blocks } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Built on Business Strategy",
    description: "Every project starts with your model, your buyers, and your numbers. Design decisions are made against revenue goals, not aesthetic preferences.",
  },
  {
    icon: Lock,
    title: "Conversion Psychology at the Core",
    description: "Layouts, copy, offers, and micro-interactions are engineered around how buyers actually decide. Trust, clarity, and momentum on every page.",
  },
  {
    icon: Blocks,
    title: "Modern Web Execution",
    description: "Fast, accessible, secure, SEO-ready, and beautifully engineered. We ship on the best tools for your business, from Webflow to fully custom builds.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Growth Partnership",
    description: "Launch is the beginning, not the end. We test, refine, and evolve your site every month to keep converting more of the traffic you earn.",
  },
];

const TrustSection = () => {
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
          <span className="text-caption font-medium text-cyan uppercase tracking-wider mb-4 block">
            Why WebThangs
          </span>
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-4">
            A partner, not a vendor.
          </h2>
          <p className="text-body-lg text-text-secondary">
            Serious businesses hire us because we treat their website as a revenue asset, not a marketing checkbox. Everything we do is measured against growth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="surface-card p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan/10 ring-1 ring-cyan/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-5 h-5 text-cyan" />
              </div>
              <h3 className="text-body font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-body-sm text-text-secondary">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
