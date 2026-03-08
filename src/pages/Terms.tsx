import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-caption font-medium text-primary uppercase tracking-wider mb-4 block">Legal</span>
            <h1 className="text-heading md:text-display-sm lg:text-display font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              Last updated: February 17, 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-12">

            <div>
              <h2 className="text-heading-sm font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-body text-text-secondary mb-4">
                By accessing or using the services provided by Mercurius Code ("we," "us," or "our"), including our website, AI agents, consulting services, and related tools (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms").
              </p>
              <p className="text-body text-text-secondary">
                If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind such entity. If you do not agree to these Terms, do not use our Services.
              </p>
            </div>

            <div>
              <h2 className="text-heading-sm font-bold text-foreground mb-4">2. Description of Services</h2>
              <p className="text-body text-text-secondary">
                Mercurius Code provides custom AI agent design, development, deployment, and ongoing optimization services. Our Services include workflow auditing, AI workforce architecture, integration with third-party tools, performance monitoring, and strategic consulting. Specific deliverables, timelines, and scope are defined in individual service agreements or statements of work ("SOW").
              </p>
            </div>

            <div>
              <h2 className="text-heading-sm font-bold text-foreground mb-4">3. Account & Access</h2>
              <p className="text-body text-text-secondary mb-4">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-text-secondary">
                <li>Provide accurate and complete information during registration</li>
                <li>Notify us immediately of any unauthorized access or security breach</li>
                <li>Not share, transfer, or sell access to your account</li>
                <li>Comply with all applicable laws when using our Services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-heading-sm font-bold text-foreground mb-4">4. Fees & Payment</h2>
              <p className="text-body text-text-secondary mb-4">
                Service fees are outlined in your SOW or subscription agreement. Unless otherwise specified:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-text-secondary">
                <li>All fees are quoted in USD and are non-refundable unless stated otherwise</li>
                <li>Invoices are due within 30 days of issuance</li>
                <li>Late payments may incur interest at 1.5% per month or the maximum rate permitted by law</li>
                <li>We reserve the right to suspend Services for accounts with overdue balances exceeding 15 days</li>
              </ul>
            </div>

            <div>
              <h2 className="text-heading-sm font-bold text-foreground mb-4">5. Intellectual Property</h2>
              <p className="text-body text-text-secondary mb-4">
                <strong className="text-foreground">Mercurius Code's IP:</strong> All proprietary tools, frameworks, methodologies, models, and software developed by Mercurius Code remain our exclusive property. You receive a non-exclusive, non-transferable license to use our deliverables for your internal business operations.
              </p>
              <p className="text-body text-text-secondary">
                <strong className="text-foreground">Your Data:</strong> You retain full ownership of your data. We use your data solely to provide and improve our Services, as outlined in our Privacy Policy. Custom configurations and workflows developed specifically for you are yours upon full payment.
              </p>
            </div>

            <div>
              <h2 className="text-heading-sm font-bold text-foreground mb-4">6. Confidentiality</h2>
              <p className="text-body text-text-secondary">
                Both parties agree to keep confidential any proprietary or sensitive information shared during the engagement. This obligation survives termination of these Terms for a period of three (3) years. We are happy to sign a mutual NDA before any engagement begins.
              </p>
            </div>

            <div>
              <h2 className="text-heading-sm font-bold text-foreground mb-4">7. Service Level & Availability</h2>
              <p className="text-body text-text-secondary">
                We strive to maintain 99.9% uptime for our deployed AI agents. Planned maintenance windows will be communicated in advance. We are not liable for interruptions caused by third-party services, force majeure events, or circumstances beyond our reasonable control.
              </p>
            </div>

            <div>
              <h2 className="text-heading-sm font-bold text-foreground mb-4">8. Limitation of Liability</h2>
              <p className="text-body text-text-secondary mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-text-secondary">
                <li>Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim</li>
                <li>We are not liable for indirect, incidental, special, consequential, or punitive damages</li>
                <li>We are not liable for lost profits, data loss, or business interruption arising from the use of our Services</li>
                <li>AI agents are tools that augment human capabilities. Final business decisions remain your responsibility</li>
              </ul>
            </div>

            <div>
              <h2 className="text-heading-sm font-bold text-foreground mb-4">9. Termination</h2>
              <p className="text-body text-text-secondary mb-4">
                Either party may terminate services with 30 days' written notice after the initial commitment period. Upon termination:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-text-secondary">
                <li>You will receive all custom configurations and documentation</li>
                <li>Outstanding fees become immediately due</li>
                <li>We will securely delete your data within 30 days (unless required by law to retain)</li>
                <li>Provisions relating to IP, confidentiality, and liability survive termination</li>
              </ul>
            </div>

            <div>
              <h2 className="text-heading-sm font-bold text-foreground mb-4">10. Indemnification</h2>
              <p className="text-body text-text-secondary">
                You agree to indemnify and hold harmless Mercurius Code, its officers, employees, and agents from any claims, damages, or expenses arising from your use of the Services, violation of these Terms, or infringement of any third-party rights.
              </p>
            </div>

            <div>
              <h2 className="text-heading-sm font-bold text-foreground mb-4">11. Governing Law</h2>
              <p className="text-body text-text-secondary">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes shall be resolved through binding arbitration in San Francisco, CA, under the rules of the American Arbitration Association.
              </p>
            </div>

            <div>
              <h2 className="text-heading-sm font-bold text-foreground mb-4">12. Changes to Terms</h2>
              <p className="text-body text-text-secondary">
                We reserve the right to modify these Terms at any time. Material changes will be communicated via email or a prominent notice on our website. Your continued use of the Services after such changes constitutes acceptance.
              </p>
            </div>

            <div className="surface-card p-8">
              <h2 className="text-heading-sm font-bold text-foreground mb-3">Questions about these terms?</h2>
              <p className="text-body text-text-secondary">
                Contact our legal team at{" "}
                <span className="text-primary">legal@mercuriuscode.com</span> or write to Mercurius Code.
              </p>
            </div>

          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Terms;
