import { Link } from "react-router-dom";

const footerLinks = {
  Solutions: [
    { label: "AI Sales Agents", href: "/solutions" },
    { label: "AI Support Agents", href: "/solutions" },
    { label: "AI Operations Agents", href: "/solutions" },
    { label: "AI Research Agents", href: "/solutions" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Pricing", href: "/pricing" },
    { label: "Industries", href: "/industries" },
    { label: "Insights", href: "/insights" },
    { label: "Security", href: "/security" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">M</span>
              </div>
              <span className="font-semibold text-foreground text-lg tracking-tight">Mercurius Code</span>
            </Link>
            <p className="text-text-secondary text-body-sm max-w-xs mb-4">
              We design and deploy intelligent digital workers that operate inside your business around the clock.
            </p>
            <a
              href="mailto:hello@mercuriuscode.com"
              className="text-body-sm text-primary hover:text-primary/80 transition-colors"
            >
              hello@mercuriuscode.com
            </a>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-body-sm font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-body-sm text-text-secondary hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-caption text-text-tertiary">
            © 2026 Mercurius Code. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-caption text-text-tertiary hover:text-text-secondary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-caption text-text-tertiary hover:text-text-secondary transition-colors">Terms of Service</Link>
            <Link to="/security" className="text-caption text-text-tertiary hover:text-text-secondary transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
