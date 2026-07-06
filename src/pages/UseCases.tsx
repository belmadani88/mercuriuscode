import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const useCases = [
  {
    area: "Lead Generation Websites",
    industry: "B2B, SaaS, Professional Services",
    problem: "Your website looks fine but generates almost no qualified leads. Sales relies on outbound because inbound never quite works.",
    solution: "A site engineered around your ideal buyer: sharpened positioning, sharper offers, cleaner CTAs, and forms designed to capture serious intent without friction.",
    capabilities: [
      "Positioning, messaging, and offer strategy",
      "Homepage and category-page conversion design",
      "Lead capture forms and demo funnels",
      "CRM integration and lead routing",
    ],
    outcome: "Your homepage becomes a consistent source of qualified pipeline instead of a digital brochure.",
  },
  {
    area: "E-Commerce Storefronts",
    industry: "E-Commerce, SaaS, Marketplaces",
    problem: "Traffic is expensive and growing, but conversion rate is flat. Cart abandonment is high and average order value is stuck.",
    solution: "Product pages, category flows, and checkout experiences engineered to reduce friction, raise trust, and lift both conversion rate and AOV.",
    capabilities: [
      "Product page and PDP optimization",
      "Streamlined checkout and cart flows",
      "Merchandising and upsell placement",
      "Trust, reviews, and social-proof design",
    ],
    outcome: "More revenue from the same traffic and dramatically better return on ad spend.",
  },
  {
    area: "Paid Traffic Landing Pages",
    industry: "AI, SaaS, Local, Services",
    problem: "You are spending real money on ads, but sending clicks to a generic homepage that was never designed to convert them.",
    solution: "Dedicated landing pages per campaign, audience, and offer. Sharper hero sections, focused CTAs, and full tracking from click to close.",
    capabilities: [
      "Campaign-specific landing page design",
      "Offer, messaging, and CTA optimization",
      "Conversion tracking and attribution",
      "A/B testing programs",
    ],
    outcome: "Every dollar of ad spend works harder. Lower CPL, higher ROAS, more predictable pipeline.",
  },
  {
    area: "Brand & Positioning Sites",
    industry: "Agencies, D2C Brands, SaaS",
    problem: "Your product is strong but your site does not communicate why. Buyers do not understand your value in the first ten seconds.",
    solution: "Sharpened positioning, category-defining messaging, and a design language that signals premium, credible, and different from your competitors.",
    capabilities: [
      "Positioning and narrative strategy",
      "Premium visual and brand system",
      "Above-the-fold clarity in seconds",
      "Competitive differentiation on-page",
    ],
    outcome: "A site that immediately signals authority and moves buyers from curious to committed.",
  },
  {
    area: "SEO & Content Systems",
    industry: "Mid-Market Companies, Startups",
    problem: "Content ships without a strategy, rankings never quite hold, and organic traffic never turns into real pipeline.",
    solution: "Technical foundations, content architecture, and on-page conversion design so search demand becomes compounding revenue, not vanity traffic.",
    capabilities: [
      "Technical SEO foundations",
      "Programmatic and pillar content design",
      "On-page conversion optimization",
      "Rank, traffic, and pipeline reporting",
    ],
    outcome: "A steady, compounding stream of organic pipeline that lowers your reliance on paid channels.",
  },
  {
    area: "CRO & Optimization Programs",
    industry: "Scaling Companies, Agencies",
    problem: "You already have traffic. You just are not converting enough of it, and no one on your team owns the discipline of lifting that number.",
    solution: "An ongoing optimization program: research, hypotheses, structured A/B tests, and continuous shipping to keep lifting conversion rate over time.",
    capabilities: [
      "Heatmaps, session analysis, and buyer research",
      "Prioritized experiment roadmap",
      "Structured A/B and multivariate testing",
      "Monthly experiment and revenue reports",
    ],
    outcome: "Compounding conversion gains that translate directly into revenue you did not have to buy more traffic to earn.",
  },
];

const UseCases = () => {
  return (
    <div className="min-h-screen">
      <PageSEO title="Use Cases" description="See how conversion-engineered websites, landing pages, SEO, and CRO drive revenue across industries." path="/use-cases" />
      <Navigation />
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-caption font-medium text-magenta uppercase tracking-wider mb-4 block">Use Cases</span>
            <h1 className="text-heading md:text-display-sm lg:text-display font-bold text-foreground mb-6">
              Websites and growth systems for every kind of business.
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              See how conversion-engineered web experiences apply to your industry, your buyers, and your growth model.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide space-y-12">
          {useCases.map((uc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="surface-card p-8 md:p-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-heading-sm font-semibold text-foreground">{uc.area}</h2>
                <span className="text-caption text-text-tertiary">{uc.industry}</span>
              </div>

              <div className="grid md:grid-cols-2 gap-10 mb-8">
                <div>
                  <h4 className="text-body-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">The Challenge</h4>
                  <p className="text-body text-text-secondary mb-6">{uc.problem}</p>
                  <h4 className="text-body-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">The Solution</h4>
                  <p className="text-body text-text-secondary">{uc.solution}</p>
                </div>
                <div>
                  <h4 className="text-body-sm font-semibold text-text-tertiary uppercase tracking-wider mb-3">Capabilities</h4>
                  <ul className="space-y-2 mb-6">
                    {uc.capabilities.map((cap, j) => (
                      <li key={j} className="flex items-start gap-2 text-body-sm text-text-secondary">
                        <span className="text-primary mt-0.5">✓</span>
                        {cap}
                      </li>
                    ))}
                  </ul>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <h4 className="text-body-sm font-semibold text-primary mb-1">The Outcome</h4>
                    <p className="text-body-sm text-text-secondary">{uc.outcome}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-tight text-center">
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-6">Not sure where to start?</h2>
          <p className="text-body-lg text-text-secondary mb-8 max-w-xl mx-auto">Tell us about your business. We will identify the highest-leverage web and conversion opportunities and show you the projected impact.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-body font-medium text-primary-foreground hover:bg-primary/90 transition-all glow-sm">
            Book a Free Growth Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UseCases;
