import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, HeadphonesIcon, Settings, Search } from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "AI Sales Agents",
    problem: "Your sales team spends 70% of their time on prospecting, data entry, and follow-ups instead of closing.",
    solution: "Autonomous agents that qualify leads, personalize outreach, nurture prospects, and book meetings — 24/7.",
    integrations: ["Salesforce", "HubSpot", "LinkedIn", "Outreach", "Pipedrive"],
    roi: "3x pipeline velocity. 60% reduction in cost-per-lead.",
    caseStudy: "Series B SaaS: Replaced 4 SDRs, tripled outbound conversions in 90 days.",
  },
  {
    icon: HeadphonesIcon,
    title: "AI Support Agents",
    problem: "Support costs scale linearly with growth. Quality drops as volume increases. Response times suffer.",
    solution: "AI agents that resolve tickets, handle multi-channel inquiries, and escalate with full context — instantly.",
    integrations: ["Zendesk", "Intercom", "Freshdesk", "Slack", "Email"],
    roi: "85% auto-resolution rate. 67% reduction in support costs.",
    caseStudy: "E-commerce brand: Handled 12,000 monthly tickets with 94% satisfaction rate.",
  },
  {
    icon: Settings,
    title: "AI Operations Agents",
    problem: "Manual data processing, reporting, and workflow coordination consume your ops team's bandwidth.",
    solution: "Agents that process data, manage workflows, generate reports, and coordinate across systems autonomously.",
    integrations: ["Notion", "Airtable", "Google Workspace", "SAP", "NetSuite"],
    roi: "60% operational cost reduction. 90% fewer processing errors.",
    caseStudy: "Logistics company: Automated dispatch, routing, and compliance — saving $1.2M annually.",
  },
  {
    icon: Search,
    title: "AI Research Agents",
    problem: "Market research, competitive analysis, and data gathering take weeks and deliver stale insights.",
    solution: "Continuous intelligence agents that monitor markets, analyze competitors, and surface actionable insights in real-time.",
    integrations: ["Bloomberg", "Crunchbase", "Custom APIs", "Web scraping", "Internal databases"],
    roi: "10x faster insight generation. Real-time competitive intelligence.",
    caseStudy: "VC fund: Automated deal sourcing and due diligence research across 5,000+ companies.",
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-caption font-medium text-primary uppercase tracking-wider mb-4 block">Solutions</span>
            <h1 className="text-heading md:text-display-sm lg:text-display font-bold text-foreground mb-6">
              Custom AI agents for every business function.
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              Not chatbots. Not templates. Autonomous agents engineered for your specific workflows, data, and objectives.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide space-y-16">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="surface-card p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <sol.icon className="w-5 h-5 text-primary" />
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
                    <h4 className="text-body-sm font-semibold text-foreground mb-2">Expected ROI</h4>
                    <p className="text-body text-accent font-medium">{sol.roi}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                    <h4 className="text-caption font-semibold text-text-secondary mb-1">Case Study</h4>
                    <p className="text-body-sm text-foreground">{sol.caseStudy}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-tight text-center">
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-6">Need a custom solution?</h2>
          <p className="text-body-lg text-text-secondary mb-8 max-w-xl mx-auto">Every business is different. Let's design the AI workforce that fits yours.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-body font-medium text-primary-foreground hover:bg-primary/90 transition-all glow-sm">
            Book Strategy Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Solutions;
