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
    { label: "Case Studies", href: "/case-studies" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Industries", href: "/industries" },
    { label: "FAQ", href: "/pricing" },
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
                <span className="text-primary-foreground font-bold text-sm">A</span>
              </div>
              <span className="font-semibold text-foreground text-lg tracking-tight">Archon</span>
            </Link>
            <p className="text-text-secondary text-body-sm max-w-xs">
              AI Workforce Architects. We build autonomous AI agents that operate inside your business 24/7.
            </p>
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
            © 2026 Archon AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-caption text-text-tertiary hover:text-text-secondary cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-caption text-text-tertiary hover:text-text-secondary cursor-pointer transition-colors">Terms of Service</span>
            <span className="text-caption text-text-tertiary hover:text-text-secondary cursor-pointer transition-colors">Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
