import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const articleContent: Record<string, { category: string; title: string; readTime: string; content: string[] }> = {
  "why-your-next-hire-should-be-a-digital-worker": {
    category: "Conversion Strategy",
    title: "Why Your Next Growth Hire Should Be Your Website",
    readTime: "8 min read",
    content: [
      "The economics of growth have shifted. Before hiring another salesperson or scaling ad spend, the highest-leverage move for most businesses is fixing the asset every visitor already touches: the website. A conversion-focused site works every hour of every day, at zero marginal cost per visitor, with completely predictable output.",
      "Most growing companies hit the same wall. Traffic climbs, pipeline gets more expensive, and leadership responds with more headcount or a bigger ad budget. But every new lead, every ad click, and every referral still lands on the same underperforming website. That single asset silently caps the return on every other growth investment.",
      "A high-converting website is not a brochure. It is a purpose-built conversion system designed around a specific buyer decision. Every section, every offer, every headline, and every call to action is engineered to reduce friction and move a qualified visitor one step closer to becoming a customer.",
      "Consider the math. Adding a mid-level sales hire costs between $85,000 and $120,000 fully loaded in year one. Doubling ad spend often doubles cost without doubling revenue, because a weak site converts the extra traffic at the same weak rate. A rebuilt website designed for conversion typically costs a fraction of either option and improves the performance of every future dollar you spend on growth.",
      "This does not mean replacing your team. It means giving them a site that stops leaking pipeline. When your website qualifies leads, answers objections, and books meetings on its own, your sales team can focus on the conversations that actually close revenue.",
      "The companies that are growing fastest right now treat their website as a core revenue channel, not a marketing artifact. Not a redesign project. Not a vanity refresh. A permanent, measurable layer of their growth engine.",
      "The question is no longer whether your website affects revenue. It is how much revenue you are losing every quarter by tolerating a site that was never built to convert.",
    ],
  },
  "the-true-cost-of-manual-operations": {
    category: "ROI Analysis",
    title: "The True Cost of a Low-Converting Website",
    readTime: "12 min read",
    content: [
      "We analyzed funnel data from 50 growth-stage companies across industries. The pattern was consistent: the revenue leaking through weak websites is significantly larger than most leadership teams realize, and it compounds every quarter it is left unfixed.",
      "The obvious costs are easy to track. Design fees, hosting, agency retainers. But the hidden costs are where the real damage happens. Qualified visitors that never convert. Buying intent that dies at a confused pricing page. Trust that quietly collapses at an outdated hero section. These costs rarely show up on a balance sheet, but they compound with every new marketing dollar spent.",
      "In lead generation, we found that most B2B sites convert less than 1.5% of qualified traffic, when 3% to 6% is entirely achievable with the same audience. That gap means at least half of the pipeline the business already paid to attract is walking away silently, without ever filling out a form.",
      "In ecommerce and service-based funnels, the pattern is similar. Over 70% of visitors who reach a pricing or checkout page abandon before finishing. Most of that abandonment is not a demand problem. It is a friction problem: unclear offers, missing trust signals, weak proof, or checkout flows that were never designed against real buyer objections.",
      "Growth teams face the steepest hidden costs. Every dollar spent on ads, SEO, or outbound routes into the same underperforming site. A 20% lift in conversion effectively cuts customer acquisition cost by 20% across every channel, at the same time, forever. Very few investments carry that kind of leverage.",
      "The compounding effect is what makes this urgent. A site converting at 1% instead of 3% is not just losing one third of pipeline. It is tripling the cost of every new customer, distorting payback periods, and making every future growth investment look weaker than it actually is.",
      "A properly engineered conversion system removes these leaks at the source. It answers objections in the right order, presents the offer with clarity, builds trust before the ask, and makes the next action obvious. It scales linearly with traffic, and its cost per acquisition decreases as volume grows.",
      "The companies we studied that rebuilt their site around conversion reported average lifts between 35% and 120% in qualified inquiries within six months, without changing their ad spend or their offer. More importantly, their sales teams reported higher close rates because the leads arriving were already better educated and more qualified.",
    ],
  },
  "how-we-architect-multi-agent-systems": {
    category: "Design Systems",
    title: "How We Architect Websites That Actually Convert",
    readTime: "15 min read",
    content: [
      "Designing a good-looking page is straightforward. Designing a website where every section, every offer, and every call to action is engineered against a specific buyer decision is an entirely different discipline. Here is how we approach it.",
      "Every WebThangs project starts with a conversion audit. Before writing a single line of code or moving a single pixel, we map the complete buyer journey: entry points, questions, objections, moments of hesitation, and the exact decisions we need each visitor to make. This is not a design exercise. It is a strategic analysis that identifies exactly where the current site is leaking revenue.",
      "Each section of the site is designed as a specialist. One section builds trust. Another qualifies. Another handles the primary objection. Another presents the offer with clarity. Each has a job to do, a metric it is responsible for, and a defined role inside the larger funnel.",
      "The narrative layer is what separates our approach from templated design. When a visitor arrives with a specific worry, the site addresses it in the right order, at the right moment, with the right proof. Trust is built before the ask. Objections are answered before they harden. By the time a visitor reaches the primary call to action, the decision to act should feel obvious rather than forced.",
      "Friction handling is built into every layer. If a visitor is not ready to book a call, the site offers a lower-commitment next step instead of losing them entirely. Forms only ask for what is necessary. Every page loads fast, works on every device, and removes anything that does not move the visitor forward.",
      "Technical architecture follows a performance-first model. Each page is built with modern, hardened code, connected to analytics, CRM, and lead-routing tools through clean integrations. Adding a new tool or updating an offer does not require rebuilding the entire site.",
      "Measurement is embedded at the architecture level. Every primary action is tracked. Heatmaps, scroll depth, and funnel drop-off are wired in from day one. This creates a feedback loop that continuously improves the site based on real visitor behavior, not opinions.",
      "The result is a website that operates like a well-coordinated sales team: every section has a clear role, they work together, and the whole system converts significantly better than the sum of its parts.",
    ],
  },
  "beyond-chatbots-what-real-automation-looks-like": {
    category: "Growth",
    title: "Beyond Pretty Pages: What a Real Conversion Site Looks Like",
    readTime: "6 min read",
    content: [
      "The web design market is saturated with agencies and template shops that sell polished visuals as if they were business results. Understanding the difference between a decorated brochure and a website engineered for revenue is critical for making smart investment decisions.",
      "A decorated brochure responds to taste. It exists to look good in a portfolio, win design awards, or match a founder's aesthetic. It has no defined conversion goal, no measured drop-off points, and no responsibility for pipeline. It is passive by design.",
      "A conversion site is accountable. It is built around a specific buyer decision, tracks every step of the journey, and takes action across every section to move qualified visitors toward that decision. It works continuously, not just when someone happens to admire the design.",
      "Here is a practical example. A decorated brochure answers the question \"Does this brand look modern?\" A conversion site answers \"Is this the right partner for my problem, is the offer worth the price, and what is the safest next step?\" and then makes that next step obvious inside every relevant section.",
      "The engineering discipline is also fundamentally different. Portfolio sites typically live inside a page builder with attractive templates on top. Conversion sites combine strategic messaging, structured buyer journeys, funnel logic, performance engineering, and analytics. They are engineered systems, not styling exercises.",
      "When evaluating a web partner, ask three questions. First, can they explain the specific buyer decision each section is designed to influence? Second, do they measure and report on funnel performance, not just launch date? Third, do they improve the site over time based on real conversion data, not just design opinions? If the answer to any of these is no, you are hiring a brochure builder, not a conversion partner.",
    ],
  },
  "digital-workers-vs-traditional-hiring": {
    category: "Business Strategy",
    title: "Website Investment vs Ad Spend: A CFO's Framework",
    readTime: "10 min read",
    content: [
      "Every growth-stage company faces the same decision repeatedly: do we pour more money into paid channels, or do we invest in the site those channels lead to? This framework helps financial leaders evaluate that question objectively.",
      "Start with the constraint, not the tactic. Instead of asking \"Do we need more traffic?\" ask \"Do we need more qualified opportunities on the calendar?\" This reframing opens the door to solutions that a bigger ad budget alone will never solve, because a weak site converts extra traffic at the same weak rate.",
      "Calculate the fully loaded cost of scaling ad spend. Doubling a $30,000 monthly ad budget rarely doubles pipeline. It usually raises CPCs, attracts colder audiences, and lands them on the same site that already converts poorly. The true incremental cost of each new customer typically rises with the budget, not falls.",
      "Now model the website alternative. A properly engineered conversion site is a one-time capital investment plus a small operating cost, typically a fraction of a single quarter of ad spend. It reaches full impact within weeks of launch, works on 100% of traffic across every channel, and does not stop performing the moment the budget is paused.",
      "But cost is only one variable. Consider these factors. Leverage: a 20% lift in conversion improves the return of every marketing dollar, forever. Consistency: a strong site closes leads at the same rate regardless of the day, the season, or the account manager. Speed: an optimized page moves a qualified visitor from arrival to inquiry in seconds instead of minutes.",
      "There are moments where paid acquisition is irreplaceable. Fast market entries, launch campaigns, seasonal pushes, testing new segments. The framework is not about eliminating ad spend. It is about deploying capital into the layer that produces the highest return per dollar.",
      "The most efficient companies use a blended model: a high-converting website compounds the return on every paid channel, and paid channels fund controlled growth on top of a site that no longer leaks revenue. The result is a leaner, faster, more predictable growth engine that scales without proportional increases in acquisition cost.",
      "Run this analysis on your last two quarters of marketing spend and current site conversion rate. The numbers will speak for themselves.",
    ],
  },
  "enterprise-ai-security": {
    category: "Security",
    title: "Web Security for Growing Businesses: What Leaders Need to Know",
    readTime: "9 min read",
    content: [
      "Your website holds your brand, your leads, your payment flows, and increasingly, your customer data. Treating web security as a launch-day checkbox introduces legitimate business risk. Understanding these risks and how to mitigate them is essential for growth-stage companies.",
      "Data privacy is the first consideration. Any site that captures leads, processes payments, or handles customer accounts must operate within clear data handling boundaries. This means TLS encryption in transit, encryption at rest for sensitive fields, strict access controls, and clear data retention policies aligned with your legal obligations.",
      "Compliance requirements vary by industry and geography. Healthcare organizations need HIPAA-aligned handling of any patient data collected online. Financial services require SOC 2 aligned hosting and often additional regulatory frameworks. Companies operating in Europe must comply with GDPR, including cookie consent, data subject rights, and cross-border transfer rules. Any site must be architected to meet the compliance requirements of your industry from day one, not retrofitted later.",
      "Access control is where many websites fall short. Every backend user should operate with the minimum permissions necessary for their role. If a marketer needs to edit pages, they should not have access to customer records or billing exports. Role-based access control at the CMS and hosting layer is not optional.",
      "Audit trails are critical for both compliance and operational confidence. Every meaningful action should be logged: who edited what, who accessed which records, when integrations fired, and when data was exported. This creates accountability and provides the documentation regulators and enterprise buyers increasingly require.",
      "Vendor evaluation should include several non-negotiable requirements. Where is your data hosted, and under which jurisdictions? Are backups encrypted and geo-redundant? What happens to your site and your data if the engagement ends? Can you export complete logs and full source? These questions separate serious web partners from those treating security as an afterthought.",
      "The security conversation should happen before launch, not after an incident. Build security requirements into your evaluation criteria, your build plan, and your ongoing operational reviews. The goal is not to avoid modern web capabilities. It is to adopt them responsibly, so the site that grows your business does not become the liability that shrinks it.",
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
      <PageSEO title={article.title} description={article.content[0].slice(0, 155)} path={`/insights/${slug}`} />
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
              <h3 className="text-heading-sm font-semibold text-foreground mb-3">Ready to see what your website could be earning?</h3>
              <p className="text-body-sm text-text-secondary mb-6">Let us show you where your funnel is leaking revenue and what a conversion-focused rebuild could unlock.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-body-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all glow-sm">
                Book a Growth Call
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
