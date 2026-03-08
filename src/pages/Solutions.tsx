import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, HeadphonesIcon, Settings, Search } from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "AI Sales Agents",
    problem: "Your sales team spends most of its time on prospecting, data entry, and follow-ups instead of closing deals.",
    solution: "Digital workers that qualify leads, personalize outreach, nurture prospects, and book meetings around the clock, without adding headcount.",
    integrations: ["Salesforce", "HubSpot", "LinkedIn", "Outreach", "Pipedrive"],
    outcomes: ["Up to 3x pipeline velocity", "Significantly lower cost-per-lead", "Consistent follow-up, 24/7"],
  },
  {
    icon: HeadphonesIcon,
    title: "AI Support Agents",
    problem: "Support costs grow linearly with your business. As volume increases, quality and response times decline.",
    solution: "Digital workers that resolve tickets, handle multi-channel inquiries, and escalate complex issues with full context, instantly.",
    integrations: ["Zendesk", "Intercom", "Freshdesk", "Slack", "Email"],
    outcomes: ["Up to 85% auto-resolution rate", "Sub-minute average response time", "Consistent quality at any volume"],
  },
  {
    icon: Settings,
    title: "AI Operations Agents",
    problem: "Manual data processing, reporting, and cross-team coordination consume your operations team's capacity.",
    solution: "Digital workers that process data, manage workflows, generate reports, and coordinate across systems without human involvement.",
    integrations: ["Notion", "Airtable", "Google Workspace", "SAP", "NetSuite"],
    outcomes: ["Up to 60% operational cost reduction", "Near-zero processing errors", "Real-time cross-system reporting"],
  },
  {
    icon: Search,
    title: "AI Research Agents",
    problem: "Market research, competitive analysis, and data gathering take weeks and deliver stale results by the time they arrive.",
    solution: "Digital workers that continuously monitor markets, analyze competitors, and deliver actionable insights in real time.",
    integrations: ["Bloomberg", "Crunchbase", "Custom APIs", "Web scraping", "Internal databases"],
    outcomes: ["Up to 10x faster insight generation", "Real-time competitive intelligence", "Always-current market data"],
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO title="Solutions" description="Autonomous digital workers for sales, support, operations, and research. Engineered around your data and workflows." path="/solutions" />
      <Navigation />
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-caption font-medium text-primary uppercase tracking-wider mb-4 block">Solutions</span>
            <h1 className="text-heading md:text-display-sm lg:text-display font-bold text-foreground mb-6">
              Digital workers designed for your specific workflows.
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              Not chatbots. Not templates. Autonomous digital workers engineered around your data, your processes, and your business objectives.
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

      <section className="section-padding border-t border-border">
        <div className="container-tight text-center">
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-6">Need something different?</h2>
          <p className="text-body-lg text-text-secondary mb-8 max-w-xl mx-auto">Every business operates differently. Tell us about your workflows and we will design the right digital workforce for you.</p>
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
