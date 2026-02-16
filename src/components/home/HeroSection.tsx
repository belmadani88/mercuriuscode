import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M60 0v60H0V0h60zm-1 1H1v58h58V1z' fill='%23ffffff' fill-opacity='1'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container-wide relative z-10 pt-24 pb-16">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-caption font-medium text-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Smarter teams, less busywork
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-display-sm lg:text-display font-bold text-foreground mb-6"
          >
            We build digital workers{" "}
            <span className="text-gradient">for your business.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-lg md:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed"
          >
            Imagine having extra team members who handle your repetitive tasks — emails, data entry, customer questions, research — around the clock, so your real team can focus on what matters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-body font-medium text-primary-foreground hover:bg-primary/90 transition-all glow-sm"
            >
              Book Strategy Call
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/solutions"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-7 py-3.5 text-body font-medium text-foreground hover:bg-surface-hover transition-all"
            >
              See Solutions
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-8 text-text-tertiary text-body-sm"
          >
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">500+</span> businesses helped
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">40%</span> avg. cost saved
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">3x</span> faster results
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
