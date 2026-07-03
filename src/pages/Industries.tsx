import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    name: "FinTech and Financial Services",
    pains: ["Low trust on high-consideration pages", "Weak conversion on demo and signup flows", "Complex products explained poorly"],
    useCases: ["Trust-forward marketing sites", "High-converting demo and signup funnels", "Product storytelling and positioning"],
    metric: "Up to 3x lift on qualified signups",
  },
  {
    name: "E-Commerce and Retail",
    pains: ["Flat conversion rate on growing traffic", "High cart and checkout abandonment", "Weak average order value"],
    useCases: ["Storefront and PDP conversion design", "Streamlined checkout flows", "Merchandising and upsell architecture"],
    metric: "Up to 40% lift on revenue per visitor",
  },
  {
    name: "AI, SaaS and Technology",
    pains: ["Positioning that does not differentiate", "Homepage that fails to convert", "Weak paid-traffic landing pages"],
    useCases: ["Category-defining positioning sites", "Signup and demo funnels", "Landing pages per persona and campaign"],
    metric: "Up to 3x lift in signup and demo rate",
  },
  {
    name: "Local Services and Trades",
    pains: ["Sites that do not generate calls or bookings", "Weak local SEO presence", "Wasted spend on Google Ads"],
    useCases: ["Local-service conversion websites", "Booking and quote request funnels", "Local SEO and Google Business optimization"],
    metric: "Consistent flow of local inbound leads",
  },
  {
    name: "Healthcare and Life Sciences",
    pains: ["Complex services explained poorly", "Weak patient acquisition funnels", "Low trust in the digital experience"],
    useCases: ["Trust-first service and clinic websites", "Patient acquisition and referral funnels", "Compliant, accessible content design"],
    metric: "Higher inquiry and booking volume",
  },
  {
    name: "Professional Services",
    pains: ["Website reads like a brochure", "Undifferentiated positioning", "Almost no inbound pipeline"],
    useCases: ["Positioning-first firm websites", "Case study and thought-leadership systems", "Inbound lead funnels for partners"],
    metric: "Real inbound pipeline for partners and closers",
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO title="Industries" description="Conversion-engineered websites for FinTech, E-Commerce, SaaS, Local Services, Healthcare, and Professional Services." path="/industries" />
      <Navigation />
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-caption font-medium text-orange uppercase tracking-wider mb-4 block">Industries</span>
            <h1 className="text-heading md:text-display-sm lg:text-display font-bold text-foreground mb-6">
              Engineered around your industry and buyers.
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              Every industry has different buyers, decision journeys, and trust signals. We design websites and funnels that reflect those realities, not generic templates.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide grid md:grid-cols-2 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="surface-card p-8 hover:border-glow transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                <h3 className="text-heading-sm font-bold text-foreground">{ind.name}</h3>
                <span className="text-caption font-medium text-accent whitespace-nowrap">{ind.metric}</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 mb-0">
                <div>
                  <h4 className="text-caption font-semibold text-text-tertiary uppercase tracking-wider mb-2">Pain Points</h4>
                  <ul className="space-y-1.5">
                    {ind.pains.map((p, j) => (
                      <li key={j} className="text-body-sm text-text-secondary flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-destructive/60 mt-2 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-caption font-semibold text-text-tertiary uppercase tracking-wider mb-2">Our Approach</h4>
                  <ul className="space-y-1.5">
                    {ind.useCases.map((u, j) => (
                      <li key={j} className="text-body-sm text-text-secondary flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {u}
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
            View all solutions →
          </Link>
          <Link to="/use-cases" className="text-body-sm font-medium text-text-secondary hover:text-primary transition-colors">
            Explore use cases →
          </Link>
          <Link to="/how-it-works" className="text-body-sm font-medium text-text-secondary hover:text-primary transition-colors">
            See how it works →
          </Link>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-tight text-center">
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-6">Don't see your industry?</h2>
          <p className="text-body-lg text-text-secondary mb-8 max-w-xl mx-auto">Every engagement is custom. Tell us about your buyers and your business and we will design the right web and growth strategy from the ground up.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-body font-semibold text-primary-foreground hover:bg-primary/90 transition-all glow-sm">
            Book a Free Growth Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Industries;
