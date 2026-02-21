import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    company: "Vertex Financial",
    industry: "FinTech, Series B",
    problem: "Four SDRs handling outbound sales manually. High cost-per-lead, inconsistent follow-up, and stagnating pipeline growth.",
    solution: "Deployed digital sales workers to automate lead qualification, personalized outreach, and meeting booking across LinkedIn and email.",
    metrics: [
      { label: "Pipeline Increase", value: "340%" },
      { label: "Cost Reduction", value: "65%" },
      { label: "Time to Deploy", value: "6 weeks" },
      { label: "Meetings Booked/Month", value: "180+" },
    ],
    testimonial: "Mercurius Code replaced our entire outbound team with digital workers that outperform humans in every measurable category. We redirected $350K annually back into product development.",
    author: "Sarah Chen, COO",
  },
  {
    company: "NovaCraft",
    industry: "E-Commerce, $40M Revenue",
    problem: "A support team of 12 could not keep up with 12,000+ monthly tickets. Average response time was 4.5 hours. Customer satisfaction was declining.",
    solution: "Digital support workers handling L1 and L2 tickets across email, chat, and social channels. Smart escalation for complex issues with full context.",
    metrics: [
      { label: "Auto-Resolution Rate", value: "85%" },
      { label: "Cost Saved Annually", value: "$480K" },
      { label: "Avg Response Time", value: "< 30s" },
      { label: "CSAT Score", value: "94%" },
    ],
    testimonial: "We went from drowning in tickets to delivering instant, personalized support at scale. The return on investment was clear within the first month.",
    author: "Marcus Rivera, Head of CX",
  },
  {
    company: "TransGlobal Logistics",
    industry: "Supply Chain, 500+ Employees",
    problem: "Dispatch coordination, compliance reporting, and route optimization handled manually across three regional offices.",
    solution: "Digital operations workers automating dispatch, compliance documentation, and route optimization with real-time tracking integration.",
    metrics: [
      { label: "Annual Savings", value: "$1.2M" },
      { label: "Processing Errors", value: "-92%" },
      { label: "Compliance Time", value: "-80%" },
      { label: "Dispatch Efficiency", value: "+55%" },
    ],
    testimonial: "Our operations now run around the clock with fewer errors than we ever achieved with manual processes. Mercurius Code fundamentally transformed how we operate.",
    author: "David Park, VP Operations",
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-caption font-medium text-primary uppercase tracking-wider mb-4 block">Case Studies</span>
            <h1 className="text-heading md:text-display-sm lg:text-display font-bold text-foreground mb-6">
              Measurable results across every deployment.
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              Real companies. Real workflows. Verified outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide space-y-12">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="surface-card p-8 md:p-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-heading font-bold text-foreground">{cs.company}</h2>
                <span className="text-caption text-text-tertiary">{cs.industry}</span>
              </div>

              <div className="grid md:grid-cols-2 gap-10 mb-8">
                <div>
                  <h4 className="text-body-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Challenge</h4>
                  <p className="text-body text-text-secondary mb-6">{cs.problem}</p>
                  <h4 className="text-body-sm font-semibold text-text-tertiary uppercase tracking-wider mb-2">Solution</h4>
                  <p className="text-body text-text-secondary">{cs.solution}</p>
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {cs.metrics.map((m, j) => (
                      <div key={j} className="p-4 rounded-lg bg-secondary/50">
                        <div className="text-heading-sm font-bold text-gradient">{m.value}</div>
                        <div className="text-caption text-text-secondary mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <blockquote className="border-l-2 border-primary pl-4">
                    <p className="text-body-sm text-text-secondary italic mb-2">"{cs.testimonial}"</p>
                    <cite className="text-caption text-text-tertiary not-italic">- {cs.author}</cite>
                  </blockquote>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding border-t border-border">
        <div className="container-tight text-center">
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-6">Your results could be next.</h2>
          <p className="text-body-lg text-text-secondary mb-8 max-w-xl mx-auto">Tell us about your operations. We will show you exactly where digital workers can deliver the highest return.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-body font-medium text-primary-foreground hover:bg-primary/90 transition-all glow-sm">
            Book Strategy Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CaseStudies;
