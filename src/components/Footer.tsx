import { Link } from "react-router-dom";
import logoUrl from "@/assets/webthangs-logo.webp";

const footerLinks = {
  Solutions: [
    { label: "High-Converting Websites", href: "/solutions#sales" },
    { label: "Landing Pages & Funnels", href: "/solutions#support" },
    { label: "SEO & Growth Systems", href: "/solutions#operations" },
    { label: "CRO & Optimization", href: "/solutions#research" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Packages", href: "/packages" },
    { label: "Industries", href: "/industries" },
    { label: "Insights", href: "/insights" },
    { label: "Security", href: "/security" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-wide px-6 pt-14 pb-8 md:pt-20 md:pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 mb-10 md:mb-14">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center mb-4" aria-label="WebThangs home">
              <img
                src={logoUrl}
                alt="WebThangs"
                width={800}
                height={110}
                loading="lazy"
                className="h-5 sm:h-6 w-auto object-contain"
              />
            </Link>
            <p className="text-text-secondary text-body-sm max-w-xs mb-4">
            We build high-converting websites engineered to turn attention into revenue.
            </p>
            <a
              href="mailto:contact@webthangs.site"
              className="text-body-sm text-primary hover:text-primary/80 transition-colors"
            >
              contact@webthangs.site
            </a>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-body-sm font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.includes('#') ? (
                      <a
                        href={link.href}
                        className="text-body-sm text-text-secondary hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-body-sm text-text-secondary hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-caption text-text-tertiary">
            © 2026 WebThangs. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
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