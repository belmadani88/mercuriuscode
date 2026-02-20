import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const values = [
  { title: "Precision Over Volume", description: "We build fewer agents, better. Every deployment is custom-engineered for measurable impact." },
  { title: "Outcomes Over Activity", description: "We don't bill for hours. We deliver results. Our success is measured by your ROI." },
  { title: "Transparency Over Hype", description: "No black boxes. We explain every decision, every model choice, every tradeoff." },
  { title: "Partnership Over Transactions", description: "We embed with your team. Your success is our business model." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-caption font-medium text-primary uppercase tracking-wider mb-4 block">About</span>
            <h1 className="text-heading md:text-display-sm lg:text-display font-bold text-foreground mb-6">
              We're building the future of work.
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              Mercurius Code exists to help businesses operate at their full potential — by deploying AI agents that handle the work machines should do, so humans can focus on what humans do best.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-heading font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-body-lg text-text-secondary mb-4">
                Every business will have an AI workforce within the next decade. The companies that move first will have an insurmountable advantage.
              </p>
              <p className="text-body text-text-secondary">
                We're not building another AI tool. We're architecting the infrastructure that makes businesses autonomous — where AI agents handle sales, operations, support, and research with the precision of your best employees and the tirelessness of machines.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h2 className="text-heading font-bold text-foreground mb-4">Our Approach</h2>
              <p className="text-body-lg text-text-secondary mb-4">
                We don't do templates. We don't do chatbots. We don't do generic.
              </p>
              <p className="text-body text-text-secondary">
                Every AI agent we build is custom-designed for your specific workflows, data, and business logic. We audit first. We architect second. We deploy third. And we optimize continuously. This is infrastructure, not software.
              </p>
            </motion.div>
          </div>

          <div className="mb-24">
            <h2 className="text-heading font-bold text-foreground mb-10 text-center">What We Believe</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="surface-card p-8"
                >
                  <h3 className="text-heading-sm font-semibold text-foreground mb-3">{v.title}</h3>
                  <p className="text-body text-text-secondary">{v.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-tight text-center">
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-6">Let's build your AI workforce.</h2>
          <p className="text-body-lg text-text-secondary mb-8 max-w-xl mx-auto">Start with a conversation. We'll show you what's possible.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-body font-medium text-primary-foreground hover:bg-primary/90 transition-all glow-sm">
            Book Strategy Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
