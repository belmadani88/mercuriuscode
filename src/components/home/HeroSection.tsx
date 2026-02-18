import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Static mesh gradient background */}
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 20% 50%, hsl(183 100% 27% / 0.12), transparent),
              radial-gradient(ellipse 50% 70% at 80% 30%, hsl(180 96% 23% / 0.08), transparent),
              radial-gradient(ellipse 60% 40% at 60% 80%, hsl(47 97% 54% / 0.04), transparent)
            `,
          }}
        />
        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px",
          }}
        />
        {/* Top border accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container-wide relative z-10 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl">
          {/* Oversized headline */}
          <h1 className="text-foreground mb-8" style={{ fontSize: "clamp(2.75rem, 6vw + 1rem, 5.5rem)", lineHeight: 1.02, letterSpacing: "-0.04em" }}>
            We build
            <br />
            digital workers
            <br />
            <span className="text-primary">for your business.</span>
          </h1>

          {/* Supporting sentence */}
          <p className="text-text-secondary max-w-xl mb-12 text-body-lg leading-relaxed">
            Extra team members who handle your repetitive tasks around the clock — so your real team can focus on what matters.
          </p>

          {/* CTA group */}
          <div className="flex items-center gap-8 mb-20">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 rounded-xl bg-primary px-8 py-4 text-body font-semibold text-primary-foreground shadow-[0_4px_24px_-4px_hsl(183_100%_27%_/_0.4)] hover:shadow-[0_4px_32px_-4px_hsl(183_100%_27%_/_0.55)] hover:bg-primary/90 transition-all duration-300"
            >
              Book a Strategy Call
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/solutions"
              className="text-text-secondary text-body-sm font-medium hover:text-foreground transition-colors duration-300 hidden sm:inline-flex items-center gap-1.5"
            >
              Explore solutions
              <ArrowRight size={14} className="opacity-50" />
            </Link>
          </div>

          {/* Trust indicator */}
          <div className="border-t border-border/60 pt-8">
            <p className="text-text-tertiary text-caption uppercase tracking-[0.15em] font-medium mb-5">
              Trusted by 500+ businesses worldwide
            </p>
            <div className="flex items-center gap-10 text-text-tertiary/50">
              {["Accenture", "Deloitte", "McKinsey", "Bain & Co", "BCG"].map((name) => (
                <span
                  key={name}
                  className="text-body-sm font-semibold tracking-wide uppercase hidden sm:block"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {name}
                </span>
              ))}
              {/* Mobile: show fewer */}
              {["Accenture", "Deloitte", "McKinsey"].map((name) => (
                <span
                  key={`m-${name}`}
                  className="text-body-sm font-semibold tracking-wide uppercase block sm:hidden"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
