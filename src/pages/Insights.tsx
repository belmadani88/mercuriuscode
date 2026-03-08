import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    slug: "why-your-next-hire-should-be-a-digital-worker",
    category: "AI Strategy",
    title: "Why Your Next Hire Should Be a Digital Worker",
    excerpt: "The economics of deploying a digital workforce have shifted fundamentally. Here is the analysis that makes the case.",
    readTime: "8 min read",
  },
  {
    slug: "the-true-cost-of-manual-operations",
    category: "ROI Analysis",
    title: "The True Cost of Manual Operations in 2026",
    excerpt: "We audited 50 mid-market companies. The cost of operational inefficiency is higher than most leadership teams realize.",
    readTime: "12 min read",
  },
  {
    slug: "how-we-architect-multi-agent-systems",
    category: "Technical",
    title: "How We Architect Multi-Agent Systems",
    excerpt: "A look inside our methodology for designing digital workers that operate together as a coordinated workforce.",
    readTime: "15 min read",
  },
  {
    slug: "beyond-chatbots-what-real-automation-looks-like",
    category: "Workflow Automation",
    title: "Beyond Chatbots: What Real Automation Looks Like",
    excerpt: "The market is crowded with chatbot wrappers. Here is how to tell the difference between a tool and a genuine digital worker.",
    readTime: "6 min read",
  },
  {
    slug: "digital-workers-vs-traditional-hiring",
    category: "Business Strategy",
    title: "Digital Workers vs Traditional Hiring: A CFO's Framework",
    excerpt: "A financial model for evaluating when to hire people versus deploying digital workers for the same function.",
    readTime: "10 min read",
  },
  {
    slug: "enterprise-ai-security",
    category: "Security",
    title: "Enterprise AI Security: What Decision-Makers Need to Know",
    excerpt: "Data privacy, compliance, and governance considerations for deploying digital workers in regulated industries.",
    readTime: "9 min read",
  },
];

const Insights = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO title="Insights" description="Research, analysis, and practical frameworks on AI automation, digital workers, and the future of business operations." path="/insights" />
      <Navigation />
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-caption font-medium text-primary uppercase tracking-wider mb-4 block">Insights</span>
            <h1 className="text-heading md:text-display-sm lg:text-display font-bold text-foreground mb-6">
              Perspectives on the future of work.
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              Research, analysis, and practical frameworks from the team building digital workforces for growth-stage companies.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <Link key={i} to={`/insights/${article.slug}`}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="surface-card p-8 group hover:border-glow transition-all duration-300 cursor-pointer flex flex-col h-full"
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
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Insights;
