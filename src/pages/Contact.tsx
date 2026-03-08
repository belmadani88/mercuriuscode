import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="text-caption font-medium text-primary uppercase tracking-wider mb-4 block">Get Started</span>
            <h1 className="text-heading md:text-display-sm lg:text-display font-bold text-foreground mb-6">
              Let's find your highest-value opportunity.
            </h1>
            <p className="text-body-lg text-text-secondary">
              30 minutes. No sales pitch. We will audit your workflows, identify the best automation opportunities, and show you the projected ROI.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              {submitted ? (
                <div className="surface-card p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-heading-sm font-bold text-foreground mb-3">Thank you. We will be in touch shortly.</h3>
                  <p className="text-body text-text-secondary">Expect a response within 24 hours. We will send you a calendar link to schedule your strategy call.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-body-sm font-medium text-foreground mb-2 block">First Name</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-body-sm placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Jane" />
                    </div>
                    <div>
                      <label className="text-body-sm font-medium text-foreground mb-2 block">Last Name</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-body-sm placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Smith" />
                    </div>
                  </div>
                  <div>
                    <label className="text-body-sm font-medium text-foreground mb-2 block">Work Email</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-body-sm placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="jane@company.com" />
                  </div>
                  <div>
                    <label className="text-body-sm font-medium text-foreground mb-2 block">Company</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-body-sm placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Acme Inc." />
                  </div>
                  <div>
                    <label className="text-body-sm font-medium text-foreground mb-2 block">What would you like to automate?</label>
                    <textarea required rows={4} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-body-sm placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" placeholder="Describe the workflows, bottlenecks, or tasks you would like to automate..." />
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-body font-medium text-primary-foreground hover:bg-primary/90 transition-all glow-sm">
                    Request Your Free Audit <ArrowRight size={16} />
                  </button>
                  <p className="text-caption text-text-tertiary text-center">We respond within 24 hours. NDA available on request.</p>
                </form>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-8">
              <div>
                <h3 className="text-heading-sm font-bold text-foreground mb-4">What to expect</h3>
                <ul className="space-y-4">
                  {[
                    "A focused 30-minute strategy discussion",
                    "Workflow audit and automation opportunity mapping",
                    "Custom ROI projection based on your operations",
                    "Clear next steps with no pressure and no obligation",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-body text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3 text-body-sm text-text-secondary">
                  <Mail className="w-4 h-4 text-text-tertiary" />
                  hello@mercuriuscode.com
                </div>
                <div className="flex items-center gap-3 text-body-sm text-text-secondary">
                  <MapPin className="w-4 h-4 text-text-tertiary" />
                  San Francisco, CA
                </div>
                <div className="flex items-center gap-3 text-body-sm text-text-secondary">
                  <Clock className="w-4 h-4 text-text-tertiary" />
                  Response within 24 hours
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
