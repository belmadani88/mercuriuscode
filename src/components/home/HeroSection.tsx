import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroScene from "./HeroScene";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Layered gradient background */}
      <motion.div className="absolute inset-0" style={{ opacity: bgOpacity }}>
        {/* Base */}
        <div className="absolute inset-0 bg-background" />
        {/* Volumetric light */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 65% 45%, hsl(183 100% 27% / 0.1), transparent 70%),
              radial-gradient(ellipse 40% 60% at 30% 30%, hsl(180 96% 23% / 0.06), transparent 60%),
              radial-gradient(ellipse 50% 40% at 70% 80%, hsl(47 97% 54% / 0.03), transparent 50%),
              radial-gradient(ellipse 80% 80% at 50% 120%, hsl(237 45% 8% / 0.8), transparent)
            `,
          }}
        />
        {/* Soft top vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(237 45% 10% / 0.4) 0%, transparent 30%, transparent 70%, hsl(237 45% 10% / 0.6) 100%)",
          }}
        />
        {/* Grain texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px",
          }}
        />
      </motion.div>

      {/* 3D Scene - right side */}
      <motion.div
        className="absolute inset-0 z-[1]"
        style={{ y: sceneY }}
      >
        <HeroScene />
      </motion.div>

      {/* Glassy overlay strip for text readability */}
      <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[55%] z-[2]"
        style={{
          background: "linear-gradient(90deg, hsl(237 45% 13% / 0.85) 0%, hsl(237 45% 13% / 0.6) 70%, transparent 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        className="container-wide relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28"
        style={{ y: textY }}
      >
        <div className="max-w-2xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm px-4 py-1.5 text-caption font-medium text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              AI-Powered Automation
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-foreground mb-8"
            style={{
              fontSize: "clamp(2.75rem, 5.5vw + 1rem, 5rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
            }}
          >
            We build
            <br />
            digital workers
            <br />
            <span className="text-gradient">for your</span>
            <br />
            <span className="text-gradient">business.</span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-text-secondary max-w-md mb-12 text-body-lg leading-relaxed"
          >
            Autonomous agents that handle your repetitive work around the clock — so your team can focus on what actually moves the needle.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-8 mb-20 lg:mb-28"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2.5 rounded-xl bg-primary px-8 py-4 text-body font-semibold text-primary-foreground transition-all duration-500 hover:shadow-[0_0_40px_-8px_hsl(183_100%_27%_/_0.5)] hover:scale-[1.02]"
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative">Book a Strategy Call</span>
              <ArrowRight size={16} className="relative transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/solutions"
              className="text-text-secondary text-body-sm font-medium hover:text-foreground transition-colors duration-300 hidden sm:inline-flex items-center gap-1.5 group"
            >
              Explore solutions
              <ArrowRight size={14} className="opacity-40 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="border-t border-border/40 pt-8"
          >
            <p className="text-text-tertiary text-caption uppercase tracking-[0.15em] font-medium mb-5">
              Trusted by 500+ businesses worldwide
            </p>
            <div className="flex items-center gap-8 lg:gap-10">
              {["Accenture", "Deloitte", "McKinsey", "Bain & Co", "BCG"].map(
                (name, i) => (
                  <motion.span
                    key={name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                    className="text-text-tertiary/40 text-body-sm font-semibold tracking-wide uppercase hidden sm:block select-none"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {name}
                  </motion.span>
                )
              )}
              {["Accenture", "Deloitte", "McKinsey"].map((name, i) => (
                <motion.span
                  key={`m-${name}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                  className="text-text-tertiary/40 text-body-sm font-semibold tracking-wide uppercase block sm:hidden select-none"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
