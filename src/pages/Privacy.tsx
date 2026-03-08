import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-caption font-medium text-primary uppercase tracking-wider mb-4 block">Legal</span>
            <h1 className="text-heading md:text-display-sm lg:text-display font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              Last updated: February 17, 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight prose-styles">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-12">

            <div>
              <h2 className="text-heading-sm font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-body text-text-secondary mb-4">
                Mercurius Code ("we," "us," or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your data when you visit our website, use our services, or interact with our AI agents.
              </p>
              <p className="text-body text-text-secondary">
                By accessing our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our practices, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-heading-sm font-bold text-foreground mb-4">2. Information We Collect</h2>
              <h3 className="text-body font-semibold text-foreground mb-2">Personal Information</h3>
              <p className="text-body text-text-secondary mb-4">
                We may collect personally identifiable information that you voluntarily provide, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-text-secondary mb-6">
                <li>Name, email address, and phone number</li>
                <li>Company name, job title, and industry</li>
                <li>Billing and payment information</li>
                <li>Communications and correspondence with us</li>
              </ul>

              <h3 className="text-body font-semibold text-foreground mb-2">Automatically Collected Data</h3>
              <p className="text-body text-text-secondary mb-4">
                When you access our website or services, we may automatically collect:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-text-secondary">
                <li>IP address, browser type, and operating system</li>
                <li>Pages visited, time spent, and navigation patterns</li>
                <li>Device identifiers and cookie data</li>
                <li>Referring URLs and search terms</li>
              </ul>
            </div>

            <div>
              <h2 className="text-heading-sm font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-body text-text-secondary mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-body text-text-secondary">
                <li>Provide, maintain, and improve our AI agent services</li>
                <li>Process transactions and send related communications</li>
                <li>Respond to inquiries, support requests, and feedback</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Analyze usage trends to improve user experience</li>
                <li>Detect, prevent, and address technical issues or fraud</li>
                <li>Comply with legal obligations and enforce our agreements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-heading-sm font-bold text-foreground mb-4">4. Data Sharing & Disclosure</h2>
              <p className="text-body text-text-secondary mb-4">
                We do not sell your personal information. We may share data with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-text-secondary">
                <li><strong className="text-foreground">Service Providers:</strong> Third-party vendors who assist in delivering our services (hosting, analytics, payment processing)</li>
                <li><strong className="text-foreground">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong className="text-foreground">Legal Requirements:</strong> When required by law, regulation, or legal process</li>
                <li><strong className="text-foreground">With Your Consent:</strong> When you have given explicit permission</li>
              </ul>
            </div>

            <div>
              <h2 className="text-heading-sm font-bold text-foreground mb-4">5. Data Retention</h2>
              <p className="text-body text-text-secondary">
                We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. When data is no longer needed, we securely delete or anonymize it.
              </p>
            </div>

            <div>
              <h2 className="text-heading-sm font-bold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-body text-text-secondary mb-4">
                Depending on your jurisdiction, you may have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-text-secondary">
                <li>Access and receive a copy of your personal data</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Data portability: receive your data in a structured format</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="text-body text-text-secondary mt-4">
                To exercise any of these rights, contact us at <span className="text-primary">privacy@mercuriuscode.com</span>.
              </p>
            </div>

            <div>
              <h2 className="text-heading-sm font-bold text-foreground mb-4">7. Cookies & Tracking</h2>
              <p className="text-body text-text-secondary">
                We use cookies and similar tracking technologies to enhance your experience, analyze site traffic, and understand usage patterns. You can control cookies through your browser settings. Disabling certain cookies may limit functionality.
              </p>
            </div>

            <div>
              <h2 className="text-heading-sm font-bold text-foreground mb-4">8. International Transfers</h2>
              <p className="text-body text-text-secondary">
                Your data may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place, including Standard Contractual Clauses approved by relevant authorities, to protect your information.
              </p>
            </div>

            <div>
              <h2 className="text-heading-sm font-bold text-foreground mb-4">9. Children's Privacy</h2>
              <p className="text-body text-text-secondary">
                Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If we become aware of such collection, we will promptly delete the data.
              </p>
            </div>

            <div>
              <h2 className="text-heading-sm font-bold text-foreground mb-4">10. Changes to This Policy</h2>
              <p className="text-body text-text-secondary">
                We may update this Privacy Policy periodically. We will notify you of material changes by posting the updated policy on our website and updating the "Last updated" date. Continued use of our services constitutes acceptance of any changes.
              </p>
            </div>

            <div className="surface-card p-8">
              <h2 className="text-heading-sm font-bold text-foreground mb-3">Questions?</h2>
              <p className="text-body text-text-secondary">
                If you have questions about this Privacy Policy or our data practices, contact us at{" "}
                <span className="text-primary">privacy@mercuriuscode.com</span> or write to us at Mercurius Code.
              </p>
            </div>

          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Privacy;
