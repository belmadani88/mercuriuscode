import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroScene from "./HeroScene";

const ease = [0.22, 1, 0.36, 1] as const;

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax layers — each moves at a different rate
  const textY      = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const sceneY     = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const bgOpacity  = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Static layered background ── */}
      <motion.div className="absolute inset-0" style={{ opacity: bgOpacity }}>
        {/* Deep base */}
        <div className="absolute inset-0 bg-background" />

        {/* Volumetric teal glow — right/center */}
        <div
          className="absolute inset-0"
          style={{
            background: [
              "radial-gradient(ellipse 55% 55% at 68% 42%, hsl(183 100% 27% / 0.13) 0%, transparent 70%)",
              "radial-gradient(ellipse 38% 55% at 28% 28%, hsl(180 96% 23% / 0.07) 0%, transparent 60%)",
              "radial-gradient(ellipse 50% 38% at 72% 82%, hsl(47 97% 54% / 0.04) 0%, transparent 55%)",
              "radial-gradient(ellipse 90% 70% at 50% 130%, hsl(237 45% 8% / 0.9) 0%, transparent)",
            ].join(","),
          }}
        />

        {/* Top + bottom edge vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(237 45% 10% / 0.5) 0%, transparent 25%, transparent 72%, hsl(237 45% 10% / 0.7) 100%)",
          }}
        />

        {/* Subtle film grain */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px",
          }}
        />
      </motion.div>

      {/* ── 3D Scene (right side, parallaxes slower than text) ── */}
      <motion.div
        className="absolute inset-0 z-[1]"
        style={{ y: sceneY }}
      >
        <HeroScene />
      </motion.div>

      {/* ── Gradient overlay: ensures text is readable over scene ── */}
      <div
        className="absolute left-0 top-0 bottom-0 w-full lg:w-[58%] z-[2] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, hsl(237 45% 13% / 0.92) 0%, hsl(237 45% 13% / 0.72) 65%, transparent 100%)",
        }}
      />

      {/* ── Text content (parallaxes fastest) ── */}
      <motion.div
        className="container-wide relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28"
        style={{ y: textY }}
      >
        <div className="max-w-xl">

          {/* Label pill */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm px-4 py-1.5 text-caption font-medium text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              AI-Powered Automation
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease }}
            className="text-foreground mb-6"
            style={{
              fontSize: "clamp(2.8rem, 5vw + 1rem, 5rem)",
              lineHeight: 1.04,
              letterSpacing: "-0.04em",
              fontFamily: "'Space Grotesk', sans-serif",
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
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28, ease }}
            className="text-muted-foreground max-w-sm mb-10 leading-relaxed"
            style={{ fontSize: "clamp(1rem, 1vw + 0.8rem, 1.125rem)" }}
          >
            Autonomous agents that handle your repetitive work around the clock, so your team can focus on what actually moves the needle.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44, ease }}
            className="flex items-center gap-6 mb-16 lg:mb-20"
          >
            {/* Primary CTA */}
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2.5 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
              style={{
                boxShadow: "0 4px 20px -4px hsl(183 100% 27% / 0.45)",
              }}
            >
              <span>Book a Strategy Call</span>
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>

            {/* Secondary link */}
            <Link
              to="/solutions"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors duration-250 hover:text-foreground"
            >
              Explore solutions
              <ArrowRight
                size={13}
                className="opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="border-t border-border/30 pt-7"
          >
            <p className="text-muted-foreground/50 text-xs uppercase tracking-[0.14em] font-medium mb-4">
              Trusted by 500+ businesses worldwide
            </p>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
              {["Accenture", "Deloitte", "McKinsey", "Bain & Co", "BCG"].map((name, i) => (
                <motion.span
                  key={name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.45, delay: 0.85 + i * 0.08 }}
                  className="text-xs font-semibold tracking-widest uppercase select-none"
                  style={{
                    color: "hsl(237 20% 45% / 0.45)",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
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
