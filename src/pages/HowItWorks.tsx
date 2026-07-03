import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    phase: "Phase 1",
    title: "Discovery & Strategy",
    duration: "Week 1 to 2",
    details: [
      "Deep-dive on your business model, buyers, and offer",
      "Audit the current site, funnels, and conversion data",
      "Benchmark competitors and identify strategic gaps",
      "Define the revenue metrics we design against",
      "Deliver a complete Conversion Strategy Blueprint",
    ],
  },
  {
    phase: "Phase 2",
    title: "Positioning & Design",
    duration: "Week 2 to 4",
    details: [
      "Sharpen positioning, messaging, and offer clarity",
      "Design every page around a specific buyer decision",
      "Copywrite headlines, sections, and CTAs for conversion",
      "Prototype flows and validate against buyer psychology",
      "Approve a design system built to scale with your brand",
    ],
  },
  {
    phase: "Phase 3",
    title: "Build & Launch",
    duration: "Week 4 to 8",
    details: [
      "Engineer a fast, accessible, SEO-ready website",
      "Integrate CRM, analytics, and marketing tools",
      "Instrument events, funnels, and conversion tracking",
      "QA across devices, browsers, and Core Web Vitals",
      "Ship a production launch with zero downtime",
    ],
  },
  {
    phase: "Phase 4",
    title: "Optimize & Scale",
    duration: "Ongoing",
    details: [
      "Continuous CRO experimentation and A/B testing",
      "Session analysis, heatmaps, and buyer research",
      "Monthly growth reviews with your team",
      "New landing pages, funnels, and campaign builds",
      "Quarterly performance and revenue reporting",
    ],
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO title="How It Works" description="From strategy to launch in 4 to 8 weeks. Our four-phase methodology delivers websites engineered for measurable revenue growth." path="/how-it-works" />
      <Navigation />
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-caption font-medium text-purple uppercase tracking-wider mb-4 block">Our Process</span>
            <h1 className="text-heading md:text-display-sm lg:text-display font-bold text-foreground mb-6">
              A structured path from strategy to revenue.
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              From the first conversation to measurable revenue lifts in weeks. Our four-phase methodology brings strategy, design, engineering, and optimization under one accountable roof.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="surface-card p-8 md:p-10"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <span className="text-caption font-medium text-primary">{step.phase}</span>
                  <h3 className="text-heading-sm font-bold text-foreground mt-1 mb-2">{step.title}</h3>
                  <span className="text-body-sm text-text-tertiary">{step.duration}</span>
                </div>
                <div className="md:col-span-2">
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {step.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-2 text-body-sm text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12 border-t border-border">
        <div className="container-wide flex flex-wrap justify-center gap-6">
          <Link to="/solutions" className="text-body-sm font-medium text-text-secondary hover:text-primary transition-colors">
            Explore solutions →
          </Link>
          <Link to="/pricing" className="text-body-sm font-medium text-text-secondary hover:text-primary transition-colors">
            View pricing →
          </Link>
          <Link to="/use-cases" className="text-body-sm font-medium text-text-secondary hover:text-primary transition-colors">
            See use cases →
          </Link>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-tight text-center">
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-6">Start with a free growth call.</h2>
          <p className="text-body-lg text-text-secondary mb-8 max-w-xl mx-auto">We will audit your current site, identify the highest-leverage conversion wins, and show you the revenue projection before you commit to anything.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-body font-semibold text-primary-foreground hover:bg-primary/90 transition-all glow-sm">
            Book a Free Growth Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HowItWorks;
