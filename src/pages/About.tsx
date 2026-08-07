import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import founderImage from "@/assets/founder.jpg";

const values = [
  { title: "Revenue Over Aesthetics", description: "Design that is not tied to a business outcome is decoration. Every choice we make is measured against your growth." },
  { title: "Strategy Before Pixels", description: "We do not open a design tool until we understand your buyers, your offer, and the exact decision the site needs to earn." },
  { title: "Fewer Clients, Deeper Work", description: "We take on a small number of engagements at a time so every project gets senior attention from strategy to launch." },
  { title: "Partnership Over Projects", description: "Launch is a milestone, not the finish line. Our continuous CRO retainers keep testing, personalizing, and refining long after the site goes live." },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <PageSEO title="About WebThangs" description="WebThangs is a premium web agency building high-converting websites enhanced with AI sales agents, personalization, automation, and continuous optimization." path="/about" />
      <Navigation />
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-caption font-medium text-cyan uppercase tracking-wider mb-4 block">About WebThangs</span>
            <h1 className="text-heading md:text-display-sm lg:text-display font-bold text-foreground mb-6">
              We build websites that earn back the traffic you paid for.
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              WebThangs is a premium web agency for businesses that treat their website as revenue infrastructure. We combine conversion strategy, buyer psychology, and AI-powered growth systems to turn attention into pipeline, customers, and growth.
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
                The businesses that grow fastest over the next decade will be the ones whose websites qualify leads, personalize themselves, automate follow-up, and stay visible inside AI answer engines. We build for those businesses.
              </p>
              <p className="text-body text-text-secondary">
                We are not a design studio and we are not a template shop. We are a conversion-focused web agency that treats every project as a business problem first, and a design problem second. The site is the deliverable. Growth is the outcome.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h2 className="text-heading font-bold text-foreground mb-4">Our Approach</h2>
              <p className="text-body-lg text-text-secondary mb-4">
                We do not use templates. We do not chase trends. Every engagement starts with the buyer, the offer, and the business model, then adds only the AI, personalization, and automation layers that move a real number.
              </p>
              <p className="text-body text-text-secondary">
                We audit first. We position second. We design third. We ship fast, measure everything, and keep lifting conversion rate through a continuous CRO retainer. This is website work as growth work, not as a creative deliverable.
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
              {/* Founder photo: replace src/assets/founder.jpg with your own square image (same filename). */}
              <div className="w-full max-w-[220px] sm:w-40 md:w-48 aspect-square rounded-xl overflow-hidden border border-border bg-card flex-shrink-0 mx-auto md:mx-0">
                <img
                  src={founderImage}
                  alt="Oussama Bel Madani, founder of WebThangs"
                  width={768}
                  height={768}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-caption font-medium text-magenta uppercase tracking-wider mb-2 block">Founder</span>
                <h2 className="text-heading font-bold text-foreground mb-2">Oussama Bel Madani</h2>
                <p className="text-body text-text-secondary mb-4">
                  Oussama founded WebThangs on a clear conviction: most businesses are not short on traffic or ideas. They are short on websites that actually convert what they already have. Great execution on the fundamentals still beats gimmicks every time.
                </p>
                <p className="text-body-sm text-text-secondary">
                  His approach combines conversion strategy, brand thinking, and technical execution. Every engagement at WebThangs starts with the same question: where can we create the most measurable revenue impact, the fastest?
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

      {/* Cross-links */}
      <section className="py-12 border-t border-border">
        <div className="container-wide flex flex-wrap justify-center gap-6">
          <Link to="/how-it-works" className="text-body-sm font-medium text-text-secondary hover:text-primary transition-colors">
            See our process →
          </Link>
          <Link to="/solutions" className="text-body-sm font-medium text-text-secondary hover:text-primary transition-colors">
            Explore solutions →
          </Link>
          <Link to="/insights" className="text-body-sm font-medium text-text-secondary hover:text-primary transition-colors">
            Read our insights →
          </Link>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-tight text-center">
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-6">Ready to see what's possible?</h2>
          <p className="text-body-lg text-text-secondary mb-8 max-w-xl mx-auto">Start with a conversation. We will audit your current site and show you exactly where a conversion-engineered rebuild would deliver the highest return.</p>
          <Link to="/contact" className="btn-cta">
            Get Your Free Website Conversion Audit <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;