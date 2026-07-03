import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, HeadphonesIcon, Settings, Search } from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "High-Converting Websites",
    description: "Custom-built sites engineered around your buyer's decision journey. Every section, every headline, every CTA is designed to move visitors closer to action.",
    metrics: "2–5x conversion lift",
  },
  {
    icon: HeadphonesIcon,
    title: "Landing Pages & Funnels",
    description: "Purpose-built pages for each traffic source, offer, and audience. Turn cold clicks into qualified leads and paid ads into predictable pipeline.",
    metrics: "Up to 4x ROAS",
  },
  {
    icon: Settings,
    title: "SEO & Growth Systems",
    description: "Technical foundations, content architecture, and on-page signals engineered to compound rankings and organic revenue quarter after quarter.",
    metrics: "Organic pipeline that compounds",
  },
  {
    icon: Search,
    title: "CRO & Optimization",
    description: "Ongoing experimentation, heatmaps, session analysis, and A/B testing to keep lifting your conversion rate long after launch. Growth as a discipline, not a project.",
    metrics: "Continuous performance gains",
  },
];

const SolutionsSection = () => {
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
            Solutions
          </span>
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-4">
            One partner. Every layer of your conversion stack.
          </h2>
          <p className="text-body-lg text-text-secondary">
            From the first click to the closed deal, we design and build the entire path. Every page, every offer, every experiment is engineered to move a measurable business number.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="surface-card p-8 md:p-10 group hover:border-glow transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center ring-1 ring-cyan/20">
                  <solution.icon className="w-5 h-5 text-cyan" />
                </div>
                <span className="text-caption font-medium text-accent">{solution.metrics}</span>
              </div>
              <h3 className="text-heading-sm font-semibold text-foreground mb-3">{solution.title}</h3>
              <p className="text-body text-text-secondary">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
