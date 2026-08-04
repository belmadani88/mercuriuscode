import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1 flex items-center justify-center py-24">
        <div className="text-center px-6">
          <span className="text-display font-bold text-primary/20 block mb-4" >404</span>
          <h1 className="text-heading font-bold text-foreground mb-4">Page not found</h1>
          <p className="text-body text-text-secondary mb-8 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-body-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all glow-sm"
            >
              Book a Strategy Meeting <ArrowRight size={14} />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-body-sm font-medium text-foreground hover:bg-surface-hover transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
