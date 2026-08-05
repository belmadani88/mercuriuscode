import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { ArrowRight, Mail, MapPin, Clock, CheckCircle2, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(60, "First name is too long"),
  lastName: z.string().trim().min(1, "Last name is required").max(60, "Last name is too long"),
  email: z.string().trim().min(1, "Work email is required").email("Enter a valid email address").max(255, "Email is too long"),
  company: z.string().trim().min(1, "Company is required").max(120, "Company name is too long"),
  message: z.string().trim().min(10, "Please add at least 10 characters").max(2000, "Message is too long"),
});

const CONTACT_EMAIL = "contact@webthangs.site";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: "" } : prev));
  };

  const [submitting, setSubmitting] = useState(false);

  const buildMailto = () => {
    const body = `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\n${formData.message}`;
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Strategy Meeting Request")}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    const parsed = contactSchema.safeParse(formData);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const key = String(issue.path[0]);
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Strategy Meeting Request from ${parsed.data.firstName} ${parsed.data.lastName}`,
          _template: "table",
          name: `${parsed.data.firstName} ${parsed.data.lastName}`,
          email: parsed.data.email,
          company: parsed.data.company,
          message: parsed.data.message,
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && (!result || result.success !== "false")) {
        setSubmitted(true);
      } else {
        setSubmitError("We could not send your request automatically. Use the email link below and we will reply within 24 hours.");
      }
    } catch {
      setSubmitError("We could not send your request automatically. Use the email link below and we will reply within 24 hours.");
    } finally {
      setSubmitting(false);
    }
  };

  const fieldClass = (name: string) =>
    `w-full px-4 py-3 rounded-lg bg-secondary border text-foreground text-body-sm placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/50 ${
      errors[name] ? "border-destructive" : "border-border"
    }`;

  const FieldError = ({ name }: { name: string }) =>
    errors[name] ? <p className="text-caption text-destructive mt-1.5">{errors[name]}</p> : null;

  return (
    <div className="min-h-screen">
      <PageSEO title="Contact" description="Book a free 30-minute strategy meeting. We will audit your site, identify your biggest conversion leaks, and show you the revenue you are leaving on the table." path="/contact" />
      <Navigation />
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="text-caption font-medium text-cyan uppercase tracking-wider mb-4 block">Get Started</span>
            <h1 className="text-heading md:text-display-sm lg:text-display font-bold text-foreground mb-6">
              Book your free strategy meeting.
            </h1>
            <p className="text-body-lg text-text-secondary">
              30 minutes. No sales pitch. We will audit your website, identify your highest-leverage conversion opportunities, and show you the revenue you are leaving on the table.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              {submitted ? (
                <div className="surface-card p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-heading-sm font-bold text-foreground mb-3">Thank you. We will be in touch shortly.</h3>
                  <p className="text-body text-text-secondary">Expect a response within 24 hours. We will send you a calendar link to schedule your strategy meeting.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="text-body-sm font-medium text-foreground mb-2 block">First Name</label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        maxLength={60}
                        value={formData.firstName}
                        onChange={handleChange}
                        aria-invalid={!!errors.firstName}
                        className={fieldClass("firstName")}
                        placeholder="Jane"
                      />
                      <FieldError name="firstName" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="text-body-sm font-medium text-foreground mb-2 block">Last Name</label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        maxLength={60}
                        value={formData.lastName}
                        onChange={handleChange}
                        aria-invalid={!!errors.lastName}
                        className={fieldClass("lastName")}
                        placeholder="Smith"
                      />
                      <FieldError name="lastName" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="text-body-sm font-medium text-foreground mb-2 block">Work Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      maxLength={255}
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={!!errors.email}
                      className={fieldClass("email")}
                      placeholder="jane@company.com"
                    />
                    <FieldError name="email" />
                  </div>
                  <div>
                    <label htmlFor="company" className="text-body-sm font-medium text-foreground mb-2 block">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      maxLength={120}
                      value={formData.company}
                      onChange={handleChange}
                      aria-invalid={!!errors.company}
                      className={fieldClass("company")}
                      placeholder="Acme Inc."
                    />
                    <FieldError name="company" />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-body-sm font-medium text-foreground mb-2 block">What is holding your website back?</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      aria-invalid={!!errors.message}
                      className={`${fieldClass("message")} resize-none`}
                      placeholder="Tell us about your site, your traffic, and the conversion problem you want to solve..."
                      maxLength={2000}
                    />
                    <FieldError name="message" />
                  </div>
                  {submitError && (
                    <div className="flex items-start gap-3 rounded-lg border border-destructive/40 bg-destructive/10 p-4">
                      <AlertCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <div className="text-body-sm text-text-secondary">
                        {submitError}{" "}
                        <a href={buildMailto()} className="text-primary underline">
                          Send by email instead
                        </a>
                      </div>
                    </div>
                  )}
                  <button type="submit" disabled={submitting} className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-body font-semibold text-primary-foreground hover:bg-primary/90 transition-all glow-sm disabled:opacity-60 disabled:cursor-not-allowed">
                    {submitting ? "Sending…" : "Get Your Free Website Conversion Audit"} {!submitting && <ArrowRight size={16} />}
                  </button>
                  <p className="text-caption text-text-tertiary text-center">We respond within 24 hours. NDA available on request.</p>
                </form>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-8">
              <div>
                <h3 className="text-heading-sm font-bold text-foreground mb-4">What to expect</h3>
                <ul className="space-y-4">
                  {[
                    "A focused 30-minute strategy conversation",
                    "A live audit of your site and highest-leverage conversion leaks",
                    "A custom revenue projection based on your traffic and funnel",
                    "Clear next steps with no pressure and no obligation",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-body text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 pt-4">
                <a href="mailto:contact@webthangs.site" className="flex items-center gap-3 text-body-sm text-text-secondary hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4 text-text-tertiary" />
                  contact@webthangs.site
                </a>
                <div className="flex items-center gap-3 text-body-sm text-text-secondary">
                  <MapPin className="w-4 h-4 text-text-tertiary" />
                  San Francisco, CA
                </div>
                <div className="flex items-center gap-3 text-body-sm text-text-secondary">
                  <Clock className="w-4 h-4 text-text-tertiary" />
                  Response within 24 hours
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;