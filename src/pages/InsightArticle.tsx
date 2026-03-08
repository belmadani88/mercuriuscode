import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const articleContent: Record<string, { category: string; title: string; readTime: string; content: string[] }> = {
  "why-your-next-hire-should-be-a-digital-worker": {
    category: "AI Strategy",
    title: "Why Your Next Hire Should Be a Digital Worker",
    readTime: "8 min read",
    content: [
      "The economics of workforce expansion have changed. For the first time, deploying a digital worker is not just cheaper than hiring a person. It is faster, more predictable, and in many cases, more effective for specific operational functions.",
      "Most growing companies hit the same wall. Revenue climbs, operations get more complex, and leadership responds with headcount. But each new hire comes with recruitment costs, onboarding time, benefits, and management overhead. Digital workers bypass all of that.",
      "A digital worker is a purpose-built AI system designed to perform a specific business function autonomously. Unlike generic chatbots or simple automations, digital workers understand context, make decisions within defined parameters, and operate across multiple tools and channels without supervision.",
      "Consider the math. A mid-level operations hire costs between $55,000 and $85,000 per year in total compensation. Add recruiting fees, onboarding time, and the productivity ramp, and the true cost of that hire in year one is closer to $100,000. A digital worker performing the same function costs a fraction of that and starts delivering value within weeks, not months.",
      "This does not mean replacing your team. It means freeing them. When a digital worker handles data entry, ticket triage, lead qualification, or scheduling, your people can focus on judgment, creativity, and relationships. The things only humans can do well.",
      "The companies that are growing fastest right now are the ones treating digital workers as a core part of their workforce strategy. Not an experiment. Not a pilot. A permanent, scalable layer of their operations.",
      "The question is no longer whether digital workers are viable. It is whether you can afford to keep scaling without them.",
    ],
  },
  "the-true-cost-of-manual-operations": {
    category: "ROI Analysis",
    title: "The True Cost of Manual Operations in 2026",
    readTime: "12 min read",
    content: [
      "We analyzed operational data from 50 mid-market companies across industries. The findings were consistent: the cost of manual operations is significantly higher than most leadership teams realize.",
      "The obvious costs are easy to track. Salaries, tools, office space. But the hidden costs are where the real damage happens. Errors that require rework. Delays that lose deals. Knowledge that disappears when an employee leaves. These costs rarely show up on a balance sheet, but they compound every quarter.",
      "In sales operations, we found that teams spend an average of 68% of their time on non-selling activities. Prospecting, data entry, CRM updates, scheduling. That means for every dollar spent on a salesperson's salary, only 32 cents goes toward revenue-generating work.",
      "In customer support, the pattern is similar. Over 70% of incoming tickets are repetitive, well-documented issues that follow predictable resolution paths. Yet most companies staff these functions entirely with human agents, paying premium rates for work that follows a script.",
      "Operations teams face the steepest hidden costs. Manual data transfers between systems introduce error rates between 2% and 5%. At scale, those errors cascade into compliance issues, delayed shipments, incorrect invoices, and customer churn.",
      "The compounding effect is what makes this urgent. A 3% error rate in a process that runs 1,000 times per month means 30 errors. Each error takes 15 to 45 minutes to investigate and correct. That is an additional full-time employee's worth of work just to fix mistakes.",
      "Digital workers eliminate these hidden costs at the source. They do not make data entry errors. They do not forget follow-ups. They do not need onboarding when processes change. They scale linearly with volume, and their cost per task decreases over time.",
      "The companies we studied that had deployed digital workers for at least six months reported average operational cost reductions between 35% and 65%, depending on the function. More importantly, their teams reported higher job satisfaction because they were no longer spending their days on repetitive tasks.",
    ],
  },
  "how-we-architect-multi-agent-systems": {
    category: "Technical",
    title: "How We Architect Multi-Agent Systems",
    readTime: "15 min read",
    content: [
      "Building a single AI agent is straightforward. Building a system where multiple digital workers collaborate, share context, and coordinate decisions is an entirely different discipline. Here is how we approach it.",
      "Every digital workforce starts with a workflow audit. Before writing a single line of code, we map the complete process: inputs, decisions, handoffs, outputs, edge cases. This is not a technology exercise. It is an operational analysis that identifies exactly where automation creates the most leverage.",
      "Each digital worker is designed as a specialist. One might handle lead qualification. Another manages follow-up sequences. A third books meetings and updates the CRM. They are independent systems, each with clear inputs and outputs, but they share a common context layer.",
      "The context layer is what separates our approach from simple automation chains. When a lead qualification worker identifies a high-priority prospect, that context, including the reasoning behind the classification, flows to the outreach worker. The outreach worker uses that context to personalize messaging. If the prospect responds, the scheduling worker receives the full conversation history.",
      "Error handling is built into every layer. If a digital worker encounters a situation outside its defined parameters, it does not guess. It escalates to a human with full context, a clear explanation of what it attempted, and a recommended next step. This creates a feedback loop that continuously improves the system.",
      "Integration architecture follows a hub-and-spoke model. Each digital worker connects to the specific tools it needs (CRM, email, calendar, support desk) through standardized connectors. This means adding a new tool or replacing an existing one does not require rebuilding the entire system.",
      "Security is embedded at the architecture level. Each digital worker operates with the minimum permissions necessary for its function. Data flows are encrypted in transit and at rest. Audit logs capture every decision and action for compliance and review.",
      "The result is a digital workforce that operates like a well-coordinated team: each member has a clear role, they communicate efficiently, and the whole system is greater than the sum of its parts.",
    ],
  },
  "beyond-chatbots-what-real-automation-looks-like": {
    category: "Workflow Automation",
    title: "Beyond Chatbots: What Real Automation Looks Like",
    readTime: "6 min read",
    content: [
      "The AI market is saturated with tools that call themselves intelligent but are little more than chatbot wrappers. Understanding the difference between a conversational interface and a genuine digital worker is critical for making smart investment decisions.",
      "A chatbot responds to prompts. It waits for input, generates a response, and stops. It has no initiative, no memory across sessions (in most implementations), and no ability to take action in external systems. It is reactive by design.",
      "A digital worker is proactive. It monitors conditions, initiates workflows, makes decisions within defined parameters, and takes action across multiple systems without waiting for a human to ask it to do something. It operates continuously, not just when someone opens a chat window.",
      "Here is a practical example. A chatbot can answer the question \"What is the status of order #4521?\" A digital worker monitors all orders, identifies delays before the customer notices, sends a proactive update, adjusts delivery estimates in the system, and flags the issue for the logistics team if it requires intervention.",
      "The technology stack is also fundamentally different. Chatbots typically sit on top of a language model with a retrieval layer. Digital workers combine language understanding with workflow orchestration, system integrations, decision logic, and persistent memory. They are engineered systems, not prompt configurations.",
      "When evaluating automation solutions, ask three questions. First, can it take action without being prompted? Second, does it integrate with your existing tools and take real actions within them? Third, does it improve over time based on outcomes, not just conversation logs? If the answer to any of these is no, you are looking at a chatbot, not a digital worker.",
    ],
  },
  "digital-workers-vs-traditional-hiring": {
    category: "Business Strategy",
    title: "Digital Workers vs Traditional Hiring: A CFO's Framework",
    readTime: "10 min read",
    content: [
      "Every growth-stage company faces the same decision repeatedly: do we hire another person, or is there a better way to scale this function? This framework helps financial leaders evaluate that question objectively.",
      "Start with the function, not the role. Instead of asking \"Do we need another SDR?\" ask \"Do we need more qualified meetings on the calendar?\" This reframing opens the door to solutions that a traditional job description would never surface.",
      "Calculate the fully loaded cost. A $65,000 salary becomes $85,000 to $95,000 when you add benefits, payroll taxes, equipment, and software licenses. Add recruiting costs (typically 15% to 25% of first-year salary) and the productivity ramp (most roles take 3 to 6 months to reach full output). The true year-one cost of a hire is often 40% to 60% higher than the base salary.",
      "Now model the digital worker alternative. A digital worker performing the same function typically costs between $2,000 and $8,000 per month depending on complexity and volume. It reaches full productivity in 4 to 8 weeks. It does not take vacation, call in sick, or resign after 18 months.",
      "But cost is only one variable. Consider these factors. Scalability: a digital worker handles 2x volume at roughly the same cost. A human hire requires another human hire. Consistency: digital workers do not have bad days, forget steps, or interpret processes differently. Speed: a digital worker processes in seconds what takes a person minutes or hours.",
      "There are functions where humans are irreplaceable. Complex negotiations, creative strategy, relationship building, novel problem-solving. The framework is not about replacing people entirely. It is about deploying the right resource for the right function.",
      "The most efficient companies use a blended model: digital workers handle volume and repetition, humans handle judgment and relationships. The result is a leaner, faster, more resilient operation that scales without proportional headcount growth.",
      "Run this analysis on your three highest-volume operational functions. The numbers will speak for themselves.",
    ],
  },
  "enterprise-ai-security": {
    category: "Security",
    title: "Enterprise AI Security: What Decision-Makers Need to Know",
    readTime: "9 min read",
    content: [
      "Deploying AI systems that handle business data introduces legitimate security concerns. Understanding these risks and how to mitigate them is essential for responsible adoption.",
      "Data privacy is the first consideration. Any digital worker that processes customer information, financial data, or proprietary business logic must operate within clear data handling boundaries. This means encryption at rest and in transit (AES-256 minimum), strict access controls, and clear data retention policies.",
      "Compliance requirements vary by industry and geography. Healthcare organizations need HIPAA compliance. Financial services require SOC 2 and often additional regulatory frameworks. Companies operating in Europe must comply with GDPR. Any AI deployment must be architected to meet the specific compliance requirements of your industry from day one, not retrofitted later.",
      "Access control is where many AI deployments fall short. A digital worker should operate with the minimum permissions necessary for its function. If a support worker needs to read customer records and update ticket status, it should not have access to billing systems or HR data. Role-based access control at the AI system level is not optional.",
      "Audit trails are critical for both compliance and operational confidence. Every action a digital worker takes should be logged: what data it accessed, what decisions it made, what actions it executed, and what outcomes resulted. This creates accountability and provides the documentation regulators and auditors require.",
      "Vendor evaluation should include several non-negotiable requirements. Where is data processed and stored? Is the AI model trained on your data, and if so, is that data isolated? What happens to your data if you terminate the relationship? Can you export complete audit logs? These questions separate serious AI providers from those treating security as an afterthought.",
      "The security conversation should happen before deployment, not after an incident. Build security requirements into your evaluation criteria, your implementation plan, and your ongoing operational reviews. The goal is not to avoid AI adoption. It is to adopt it responsibly.",
    ],
  },
};

const InsightArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articleContent[slug] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <section className="pt-32 pb-16">
          <div className="container-tight text-center">
            <h1 className="text-heading font-bold text-foreground mb-4">Article not found</h1>
            <Link to="/insights" className="text-primary hover:text-primary/80 transition-colors">
              Back to Insights
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-8 hero-gradient">
        <div className="container-tight">
          <Link to="/insights" className="inline-flex items-center gap-1 text-body-sm text-text-secondary hover:text-foreground transition-colors mb-8">
            <ArrowLeft size={14} />
            Back to Insights
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-caption font-medium text-primary">{article.category}</span>
              <span className="text-caption text-text-tertiary">{article.readTime}</span>
            </div>
            <h1 className="text-heading md:text-display-sm lg:text-display font-bold text-foreground">
              {article.title}
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose-custom space-y-6"
          >
            {article.content.map((paragraph, i) => (
              <p key={i} className="text-body text-text-secondary leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <div className="mt-16 pt-8 border-t border-border">
            <div className="surface-card p-8 text-center">
              <h3 className="text-heading-sm font-semibold text-foreground mb-3">Ready to explore digital workers for your business?</h3>
              <p className="text-body-sm text-text-secondary mb-6">Let us show you where automation can create the most impact in your operations.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-body-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all glow-sm">
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default InsightArticle;
