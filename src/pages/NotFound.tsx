import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center px-6">
          <span className="text-display font-bold text-primary/20 block mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>404</span>
          <h1 className="text-heading font-bold text-foreground mb-4">Page not found</h1>
          <p className="text-body text-text-secondary mb-8 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-body-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all glow-sm"
          >
            Back to Home <ArrowRight size={14} />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
