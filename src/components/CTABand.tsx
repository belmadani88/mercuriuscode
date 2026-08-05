import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type Props = {
  heading?: string;
  body?: string;
};

const CTABand = ({
  heading = "Ready to see what your website could be earning?",
  body = "Book a 30-minute strategy meeting. We review your site, find the conversion leaks, and show you the revenue you are leaving on the table.",
}: Props) => (
  <section className="section-padding border-t border-border">
    <div className="container-tight text-center">
      <h2 className="text-heading font-bold text-foreground mb-4">{heading}</h2>
      <p className="text-body text-text-secondary max-w-xl mx-auto mb-8">{body}</p>
      <Link
        to="/contact"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-body font-semibold text-primary-foreground hover:bg-primary/90 transition-all glow-sm"
      >
        Get Your Free Website Conversion Audit <ArrowRight size={16} />
      </Link>
    </div>
  </section>
);

export default CTABand;