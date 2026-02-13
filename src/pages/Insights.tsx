import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    category: "AI Strategy",
    title: "Why Your Next Hire Should Be an AI Agent",
    excerpt: "The economics of AI workforce deployment have fundamentally shifted. Here's the analysis that proves it.",
    readTime: "8 min read",
  },
  {
    category: "ROI Analysis",
    title: "The True Cost of Manual Operations in 2026",
    excerpt: "We audited 50 mid-market companies. The average cost of operational inefficiency is staggering.",
    readTime: "12 min read",
  },
  {
    category: "Technical",
    title: "How We Architect Multi-Agent Systems",
    excerpt: "A deep dive into our methodology for designing AI agents that work together as a coordinated workforce.",
    readTime: "15 min read",
  },
  {
    category: "Workflow Automation",
    title: "Beyond Chatbots: What Real AI Automation Looks Like",
    excerpt: "The market is flooded with chatbot wrappers. Here's how to identify genuine AI workforce solutions.",
    readTime: "6 min read",
  },
  {
    category: "AI vs Hiring",
    title: "AI Agents vs Traditional Hiring: A CFO's Guide",
    excerpt: "A financial framework for evaluating when to hire humans versus deploying AI agents.",
    readTime: "10 min read",
  },
  {
    category: "Technical",
    title: "Enterprise AI Security: What You Need to Know",
    excerpt: "Data privacy, compliance, and governance considerations for deploying AI agents in regulated industries.",
    readTime: "9 min read",
  },
];

const Insights = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-caption font-medium text-primary uppercase tracking-wider mb-4 block">Insights</span>
            <h1 className="text-heading md:text-display-sm lg:text-display font-bold text-foreground mb-6">
              Thinking about AI workforce strategy.
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              Research, analysis, and frameworks from the team building AI agents for growth-stage companies.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="surface-card p-8 group hover:border-glow transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-caption font-medium text-primary">{article.category}</span>
                  <span className="text-caption text-text-tertiary">{article.readTime}</span>
                </div>
                <h3 className="text-heading-sm font-semibold text-foreground mb-3 group-hover:text-primary transition-colors flex-1">{article.title}</h3>
                <p className="text-body-sm text-text-secondary mb-4">{article.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-body-sm font-medium text-primary">
                  Read more <ArrowUpRight size={14} />
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Insights;
