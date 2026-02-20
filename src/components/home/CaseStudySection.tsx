import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding border-t border-border" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <span className="text-caption font-medium text-primary uppercase tracking-wider mb-4 block">
              Results
            </span>
            <h2 className="text-heading md:text-display-sm font-bold text-foreground">
              Proven outcomes.
            </h2>
          </div>
          <Link to="/case-studies" className="hidden md:flex items-center gap-1 text-body-sm font-medium text-primary hover:text-primary/80 transition-colors">
            View all case studies <ArrowUpRight size={14} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              company: "Growing Tech Company",
              industry: "FinTech",
              metric: "340%",
              label: "More sales meetings booked",
              description: "Our digital sales assistant took over lead follow-up and tripled the number of demos booked in 90 days.",
            },
            {
              company: "Online Retailer",
              industry: "Retail",
              metric: "67%",
              label: "Lower support costs",
              description: "A digital support worker handled 12,000 customer questions per month with 94% customer satisfaction.",
            },
            {
              company: "Logistics Company",
              industry: "Supply Chain",
              metric: "$1.2M",
              label: "Saved every year",
              description: "Automated scheduling, route planning, and compliance paperwork, saving the equivalent of 15 full-time employees.",
            },
          ].map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="surface-card p-8 group hover:border-glow transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="text-caption font-medium text-text-secondary">{study.company}</span>
                <span className="text-caption text-text-tertiary">•</span>
                <span className="text-caption text-text-tertiary">{study.industry}</span>
              </div>
              <div className="text-display-sm font-bold text-gradient mb-2">{study.metric}</div>
              <div className="text-body-sm font-medium text-foreground mb-3">{study.label}</div>
              <p className="text-body-sm text-text-secondary">{study.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
