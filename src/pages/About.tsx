import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const values = [
  { title: "Precision Over Volume", description: "We take on fewer clients and deliver deeper impact. Every deployment is custom-engineered to produce measurable results." },
  { title: "Outcomes Over Activity", description: "We don't bill for time. We deliver outcomes. Our success is directly tied to the ROI you see." },
  { title: "Transparency Over Hype", description: "No black boxes. We explain every model choice, every design decision, and every tradeoff in plain language." },
  { title: "Partnership Over Transactions", description: "We work alongside your team, not above it. Your growth is our business model." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-caption font-medium text-primary uppercase tracking-wider mb-4 block">About Mercurius Code</span>
            <h1 className="text-heading md:text-display-sm lg:text-display font-bold text-foreground mb-6">
              We help businesses operate at their full potential.
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              Mercurius Code designs and deploys intelligent digital workers that handle the repetitive, high-volume operations inside your business, so your people can focus on strategy, creativity, and growth.
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
                Within the next decade, every competitive business will operate with an AI-powered workforce. The companies that move early will build advantages that compound over time.
              </p>
              <p className="text-body text-text-secondary">
                We are not building another chatbot or SaaS tool. We are designing the operational infrastructure that makes businesses genuinely autonomous, where digital workers handle sales, support, operations, and research with the precision of your best employees and the consistency of machines.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h2 className="text-heading font-bold text-foreground mb-4">Our Approach</h2>
              <p className="text-body-lg text-text-secondary mb-4">
                We do not use templates. We do not deploy generic solutions. Every engagement starts from first principles.
              </p>
              <p className="text-body text-text-secondary">
                Each digital worker is designed around your specific workflows, data, and business logic. We audit first. We architect second. We deploy third. Then we optimize continuously. This is operational infrastructure, not off-the-shelf software.
              </p>
            </motion.div>
          </div>

          {/* Founder */}
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="surface-card p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-primary">OB</span>
              </div>
              <div>
                <span className="text-caption font-medium text-primary uppercase tracking-wider mb-2 block">Founder</span>
                <h2 className="text-heading font-bold text-foreground mb-2">Oussama Bel Madani</h2>
                <p className="text-body text-text-secondary mb-4">
                  Oussama founded Mercurius Code with a clear conviction: most businesses are not short on talent, they are short on leverage. The repetitive work that consumes teams today can be handled by intelligent systems, freeing people to focus on what actually drives growth.
                </p>
                <p className="text-body-sm text-text-secondary">
                  His approach combines deep technical expertise with a relentless focus on business outcomes. Every engagement at Mercurius Code begins with the same question: where can we create the most measurable impact, the fastest?
                </p>
              </div>
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
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-6">Ready to see what's possible?</h2>
          <p className="text-body-lg text-text-secondary mb-8 max-w-xl mx-auto">Start with a conversation. We will audit your workflows and show you exactly where digital workers can deliver the highest return.</p>
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
