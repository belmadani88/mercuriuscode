import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding border-t border-border" ref={ref}>
      <div className="container-tight text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-heading md:text-display-sm font-bold text-foreground mb-6">
            Ready to free up your team?
          </h2>
          <p className="text-body-lg text-text-secondary max-w-xl mx-auto mb-10">
            Book a free 30-minute call. We'll look at where your team spends the most time, and show you what we can take off their plate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-body font-medium text-primary-foreground hover:bg-primary/90 transition-all glow-sm"
            >
              Book Strategy Call
              <ArrowRight size={16} />
            </Link>
            <span className="text-body-sm text-text-tertiary">No commitment required. NDA available.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
