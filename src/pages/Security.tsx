import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { motion } from "framer-motion";
import { Shield, Lock, Server, Eye, FileCheck, Users, RefreshCw, AlertTriangle } from "lucide-react";

const securityPractices = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data in transit is encrypted using TLS 1.3. Data at rest is encrypted with AES-256. API communications use mutual TLS authentication.",
  },
  {
    icon: Server,
    title: "Infrastructure Security",
    description: "Hosted on SOC 2 Type II certified infrastructure with automatic failover, DDoS protection, and geo-redundant backups across multiple regions.",
  },
  {
    icon: Eye,
    title: "Access Controls",
    description: "Role-based access control (RBAC) with multi-factor authentication enforced for all team members. Principle of least privilege applied across all systems.",
  },
  {
    icon: FileCheck,
    title: "Compliance & Certifications",
    description: "SOC 2 Type II compliant. GDPR and CCPA ready. HIPAA-eligible configurations available for healthcare clients. Regular third-party audits.",
  },
  {
    icon: Users,
    title: "Personnel Security",
    description: "Background checks on all employees. Mandatory security awareness training. Strict offboarding procedures with immediate access revocation.",
  },
  {
    icon: RefreshCw,
    title: "Business Continuity",
    description: "99.9% uptime SLA. Automated backups every 6 hours. Disaster recovery plan tested quarterly. Recovery time objective (RTO) under 4 hours.",
  },
];

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSEO title="Security" description="Enterprise-grade security practices at Mercurius Code. SOC 2 compliant, AES-256 encryption, GDPR ready." path="/security" />
      <Navigation />
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-caption font-medium text-primary uppercase tracking-wider mb-4 block">Security</span>
            <h1 className="text-heading md:text-display-sm lg:text-display font-bold text-foreground mb-6">
              Security you can trust.
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              Your data and operations are critical. We've built our entire platform with security at its core, not as an afterthought.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface-card p-8 md:p-12 mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-heading font-bold text-foreground mb-3">Our Security Commitment</h2>
                <p className="text-body text-text-secondary mb-4">
                  At Mercurius Code, we understand that deploying AI agents into your business requires absolute trust. Your data never leaves your environment unless explicitly configured. Our agents operate within your security perimeter, respecting your existing access controls and compliance requirements.
                </p>
                <p className="text-body text-text-secondary">
                  We maintain the highest industry standards for data protection, regularly undergo independent security audits, and are committed to transparency in every aspect of our security practices.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {securityPractices.map((practice, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="surface-card p-8 hover:border-glow transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <practice.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-body font-semibold text-foreground mb-2">{practice.title}</h3>
                <p className="text-body-sm text-text-secondary">{practice.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-heading font-bold text-foreground mb-6">Data Handling Principles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="surface-card p-8">
                  <h3 className="text-body font-semibold text-foreground mb-3">Data Isolation</h3>
                  <p className="text-body-sm text-text-secondary">
                    Each client's data is logically isolated. AI agents are deployed in dedicated environments with strict tenant separation. No data is shared between clients, and cross-tenant access is architecturally impossible.
                  </p>
                </div>
                <div className="surface-card p-8">
                  <h3 className="text-body font-semibold text-foreground mb-3">Data Minimization</h3>
                  <p className="text-body-sm text-text-secondary">
                    We collect and process only the minimum data necessary for our agents to operate effectively. We don't retain data beyond its useful life, and we provide clear data deletion mechanisms upon request.
                  </p>
                </div>
                <div className="surface-card p-8">
                  <h3 className="text-body font-semibold text-foreground mb-3">Audit Logging</h3>
                  <p className="text-body-sm text-text-secondary">
                    Every action taken by an AI agent is logged with full audit trails. Access logs, decision records, and data interactions are immutable and available for your review at any time.
                  </p>
                </div>
                <div className="surface-card p-8">
                  <h3 className="text-body font-semibold text-foreground mb-3">Incident Response</h3>
                  <p className="text-body-sm text-text-secondary">
                    Our incident response team operates 24/7. We commit to notifying affected clients within 24 hours of a confirmed security incident, with full transparency on scope, impact, and remediation steps.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-heading font-bold text-foreground mb-6">Vulnerability Disclosure</h2>
              <div className="surface-card p-8 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-body text-text-secondary mb-3">
                    We welcome responsible disclosure of security vulnerabilities. If you discover a potential security issue, please report it to <span className="text-primary">security@mercuriuscode.com</span>. We commit to acknowledging reports within 24 hours and providing regular updates on remediation progress.
                  </p>
                  <p className="text-body-sm text-text-tertiary">
                    We do not pursue legal action against security researchers who act in good faith and follow responsible disclosure practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="surface-card p-8 text-center">
              <h2 className="text-heading-sm font-bold text-foreground mb-3">Need more details?</h2>
              <p className="text-body text-text-secondary mb-2">
                We're happy to provide our full security documentation, SOC 2 report, or sign an NDA before any engagement.
              </p>
              <p className="text-body text-text-secondary">
                Contact us at <span className="text-primary">security@mercuriuscode.com</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Security;
