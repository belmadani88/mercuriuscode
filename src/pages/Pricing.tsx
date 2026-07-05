import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const tiers = [
  {
    name: "Launch",
    description: "For businesses ready to replace a weak site with a conversion-engineered one.",
    price: "From $6,000",
    period: "/month",
    features: [
      "Custom-designed marketing website",
      "Conversion strategy and positioning",
      "Analytics and event tracking setup",
      "SEO foundations and technical hygiene",
      "Email support",
      "Monthly performance review",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    description: "For teams serious about compounding revenue from their website and paid channels.",
    price: "From $12,000",
    period: "/month",
    features: [
      "Everything in Launch",
      "Ongoing CRO and A/B testing program",
      "Landing pages and funnels for paid channels",
      "Content, SEO, and organic growth systems",
      "Priority support with SLA",
      "Bi-weekly growth strategy calls",
      "Custom analytics dashboards",
    ],
    cta: "Book a Free Growth Call",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For organizations that treat their web presence as core revenue infrastructure.",
    price: "Custom",
    period: "",
    features: [
      "Multi-site or global rollouts",
      "Complex integrations and custom builds",
      "Advanced experimentation programs",
      "Dedicated success manager",
      "24/7 priority support",
      "Enterprise security and compliance",
      "Custom hosting and infrastructure",
      "Executive quarterly reviews",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "How long does a project take?",
    a: "Most websites launch in 4 to 8 weeks from kickoff. Larger builds and full growth programs run longer, but you see measurable value from month one.",
  },
  {
    q: "How do you actually improve conversions?",
    a: "Every project starts with buyer research, positioning, and offer clarity. From there, design, copy, and technical execution are engineered against the specific decisions your buyers need to make.",
  },
  {
    q: "Can we start with a smaller engagement?",
    a: "Yes. Many clients begin with a single high-leverage project like a homepage rebuild or a paid-traffic landing page, then expand into ongoing growth work once results are proven.",
  },
  {
    q: "Can we cancel at any time?",
    a: "Yes. After an initial engagement, ongoing retainers are month-to-month. You retain full ownership of your site, brand assets, and everything we build with you.",
  },
  {
    q: "What about hosting, security, and performance?",
    a: "We build on modern, secure, high-performance infrastructure with encryption, backups, and best-practice hardening. NDA available before any engagement.",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <PageSEO title="Pricing" description="Clear pricing for premium websites, funnels, and growth programs. Measurable ROI, no long-term lock-in." path="/pricing" />
      <Navigation />
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="text-caption font-medium text-yellow uppercase tracking-wider mb-4 block">Pricing</span>
            <h1 className="text-heading md:text-display-sm lg:text-display font-bold text-foreground mb-6">
              Invest in revenue, not aesthetics.
            </h1>
            <p className="text-body-lg text-text-secondary">
              Clear pricing. Measurable ROI. Websites that pay for themselves.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6 mb-24">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`surface-card p-8 md:p-10 flex flex-col ${tier.highlighted ? "border-primary/30 glow-sm" : ""}`}
              >
                <h3 className="text-heading-sm font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-body-sm text-text-secondary mb-6">{tier.description}</p>
                <div className="mb-8">
                  <span className="text-heading font-bold text-foreground">{tier.price}</span>
                  <span className="text-body-sm text-text-tertiary">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-body-sm text-text-secondary">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-body-sm font-semibold transition-all ${
                    tier.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 glow-sm"
                      : "border border-border bg-secondary text-foreground hover:bg-surface-hover"
                  }`}
                >
                  {tier.cta} <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto" id="faq">
            <h2 className="text-heading font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="border-b border-border pb-6"
                >
                  <h3 className="text-body font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-body-sm text-text-secondary">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Pricing;
