import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, HeadphonesIcon, Settings, Search } from "lucide-react";

const solutions = [
  {
    id: "sales",
    icon: Zap,
    title: "High-Converting Websites",
    problem: "Your current site looks acceptable but does not generate revenue. Visitors land, scroll, and leave. Every non-converting session is money you already paid to acquire.",
    solution: "A custom-built site engineered around your buyers, your offer, and your business model. Every section is designed to move visitors toward a measurable action.",
    integrations: ["Webflow", "Framer", "WordPress", "Custom React", "Headless CMS"],
    outcomes: ["2 to 5x conversion rate lift", "Lower cost per lead and per acquisition", "A site your team is proud to send traffic to"],
  },
  {
    id: "support",
    icon: HeadphonesIcon,
    title: "Landing Pages & Funnels",
    problem: "You are spending on ads, SEO, and outbound, but sending that traffic to generic pages that were never designed to convert it.",
    solution: "Dedicated landing pages and funnels engineered per audience, offer, and channel. Sharper messaging, tighter offers, and instrumentation to prove what works.",
    integrations: ["Google Ads", "Meta Ads", "HubSpot", "Klaviyo", "GA4"],
    outcomes: ["Up to 4x return on ad spend", "Predictable pipeline from paid channels", "Full-funnel visibility from click to close"],
  },
  {
    id: "operations",
    icon: Settings,
    title: "SEO & Growth Systems",
    problem: "Your organic traffic is flat. Rankings never quite hold. Content ships without a strategy and never compounds into pipeline.",
    solution: "Technical foundations, content architecture, and on-page signals engineered so search demand becomes predictable, compounding revenue.",
    integrations: ["GA4", "GSC", "Ahrefs", "Semrush", "Segment"],
    outcomes: ["Organic pipeline that compounds", "Higher share of high-intent keywords", "Content that converts, not just ranks"],
  },
  {
    id: "research",
    icon: Search,
    title: "CRO & Ongoing Optimization",
    problem: "You launched a nice site and moved on. Meanwhile every point of conversion left on the table is compounded revenue you will never earn back.",
    solution: "Continuous experimentation, session analysis, heatmaps, and structured A/B testing to keep lifting conversion rate long after launch.",
    integrations: ["GA4", "Hotjar", "Microsoft Clarity", "VWO", "Segment"],
    outcomes: ["Compounding conversion gains", "Data-backed design decisions", "A site that gets better every month, not worse"],
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <PageSEO title="Websites, Funnels, SEO & CRO for Growth" description="Custom websites, landing pages, SEO systems, and continuous CRO — engineered around your buyers and your business objectives." path="/solutions" />
      <Navigation />
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-caption font-medium text-cyan uppercase tracking-wider mb-4 block">Solutions</span>
            <h1 className="text-heading md:text-display-sm lg:text-display font-bold text-foreground mb-6">
              Websites and growth systems engineered around your business.
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              Not templates. Not aesthetics-first. Custom-built sites and funnels engineered around your buyers, your offer, and the numbers you actually care about.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide space-y-16">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.id}
              id={sol.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="surface-card p-8 md:p-12 scroll-mt-24"
            >
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <sol.icon className="w-5 h-5 text-cyan" />
                  </div>
                  <h2 className="text-heading font-bold text-foreground mb-4">{sol.title}</h2>
                  <div className="mb-6">
                    <h4 className="text-body-sm font-semibold text-destructive/80 mb-2">The Problem</h4>
                    <p className="text-body text-text-secondary">{sol.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-body-sm font-semibold text-accent mb-2">The Solution</h4>
                    <p className="text-body text-text-secondary">{sol.solution}</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-body-sm font-semibold text-foreground mb-3">Integrations</h4>
                    <div className="flex flex-wrap gap-2">
                      {sol.integrations.map((int) => (
                        <span key={int} className="px-3 py-1 rounded-full bg-secondary text-caption font-medium text-text-secondary">{int}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-body-sm font-semibold text-foreground mb-3">Expected Outcomes</h4>
                    <ul className="space-y-2">
                      {sol.outcomes.map((outcome, j) => (
                        <li key={j} className="flex items-start gap-2 text-body-sm text-accent font-medium">
                          <span className="text-primary mt-0.5">✓</span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12 border-t border-border">
        <div className="container-wide flex flex-wrap justify-center gap-6">
          <Link to="/industries" className="text-body-sm font-medium text-text-secondary hover:text-primary transition-colors">
            See industries we serve →
          </Link>
          <Link to="/how-it-works" className="text-body-sm font-medium text-text-secondary hover:text-primary transition-colors">
            Learn our process →
          </Link>
          <Link to="/pricing" className="text-body-sm font-medium text-text-secondary hover:text-primary transition-colors">
            View pricing →
          </Link>
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-tight text-center">
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-6">Need something different?</h2>
          <p className="text-body-lg text-text-secondary mb-8 max-w-xl mx-auto">Every business grows differently. Tell us about your buyers and your offer, and we will design the right growth engine for you.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-body font-semibold text-primary-foreground hover:bg-primary/90 transition-all glow-sm">
            Book a Free Growth Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Solutions;
