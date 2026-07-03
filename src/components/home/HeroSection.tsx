import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroVisualization from "./HeroVisualization";

const ease = [0.22, 1, 0.36, 1] as const;

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Layered background */}
      <motion.div className="absolute inset-0" style={{ opacity: bgOpacity }}>
        <div className="absolute inset-0 bg-background" />
        <div
          className="absolute inset-0"
          style={{
            background: [
              "radial-gradient(ellipse 55% 55% at 68% 42%, hsl(79 100% 53% / 0.10) 0%, transparent 70%)",
              "radial-gradient(ellipse 38% 55% at 28% 28%, hsl(271 76% 53% / 0.06) 0%, transparent 60%)",
              "radial-gradient(ellipse 50% 38% at 72% 82%, hsl(187 100% 50% / 0.05) 0%, transparent 55%)",
            ].join(","),
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(210 12% 4% / 0.55) 0%, transparent 25%, transparent 72%, hsl(210 12% 3% / 0.75) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="container-wide relative z-10 pt-24 pb-10 lg:pt-28 lg:pb-12"
        style={{ y: contentY }}
      >
        <div className="grid lg:grid-cols-[45%_55%] gap-8 lg:gap-6 items-start">
          {/* ── Left column: text ── */}
          <div>
            {/* Pill */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease }}
              className="mb-5"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm px-4 py-1.5 text-caption font-medium text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Conversion strategy. Revenue-first design.
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease }}
              className="text-foreground mb-6"
              style={{
                fontSize: "clamp(2rem, 4vw + 0.5rem, 3.8rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.04em",
                
              }}
            >
              Websites engineered
              <br />
              to turn attention
              <br />
              into{" "}
              <span className="text-gradient inline-flex items-baseline gap-1.5">
                revenue
                <span className="relative flex h-2 w-2 self-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.28, ease }}
              className="text-muted-foreground max-w-md mb-8 leading-relaxed"
              style={{ fontSize: "clamp(0.92rem, 0.7vw + 0.65rem, 1.05rem)" }}
            >
              We combine conversion psychology, buyer behavior, and modern web
              execution to build sites that generate leads, customers, and growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.44, ease }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2.5 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 hover:scale-[1.02] w-full sm:w-auto justify-center sm:justify-start"
                style={{
                  boxShadow: "0 4px 20px -4px hsl(79 100% 53% / 0.45)",
                }}
              >
                <span>Book a Growth Call</span>
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                to="/solutions"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-cyan transition-colors duration-250 hover:text-foreground"
              >
                See how we work
                <ArrowRight
                  size={13}
                  className="opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>

            {/* Stats with vertical separators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center"
            >
              {[
                { value: "2–3x", label: "Avg. lift" },
                { value: "4–8 wks", label: "To launch" },
                { value: "100%", label: "Custom-built" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.45, delay: 0.85 + i * 0.12 }}
                >
                  {i > 0 && <div className="w-px h-8 bg-border/40 mx-4 sm:mx-5" />}
                  <div className="flex flex-col">
                    <span
                      className="text-sm font-bold tracking-tight text-yellow tabular-nums"
                      
                    >
                      {stat.value}
                    </span>
                    <span className="text-[11px] text-cyan/80 tracking-[0.18em] uppercase font-medium">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Right column: visualization ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="w-full"
          >
            <HeroVisualization />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
