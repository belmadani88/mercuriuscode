import { useLocation } from "react-router-dom";
import { useMemo } from "react";

/**
 * Global ambient lighting layer.
 * Fixed, pointer-events-none, sits behind all content (z: -10).
 * Uses brand accent tokens only. Palette rotates per route so every
 * page feels part of the same universe with a distinct atmosphere.
 */

type Blob = {
  color: string;      // hsl var name, e.g. "var(--primary)"
  x: string;          // left %
  y: string;          // top %
  size: string;       // vmax
  opacity: number;    // 0..1
  blur: number;       // px
};

const PALETTES: Record<string, Blob[]> = {
  // Home — lime hero + cyan/purple depth
  "/": [
    { color: "var(--primary)", x: "72%", y: "18%", size: "70vmax", opacity: 0.234, blur: 140 },
    { color: "var(--cyan)",    x: "12%", y: "55%", size: "55vmax", opacity: 0.156, blur: 160 },
    { color: "var(--purple)",  x: "82%", y: "82%", size: "60vmax", opacity: 0.13, blur: 180 },
    { color: "var(--magenta)", x: "35%", y: "92%", size: "40vmax", opacity: 0.091, blur: 200 },
  ],
  "/solutions": [
    { color: "var(--cyan)",    x: "18%", y: "22%", size: "65vmax", opacity: 0.182, blur: 150 },
    { color: "var(--primary)", x: "85%", y: "35%", size: "50vmax", opacity: 0.156, blur: 160 },
    { color: "var(--purple)",  x: "50%", y: "85%", size: "55vmax", opacity: 0.117, blur: 180 },
  ],
  "/industries": [
    { color: "var(--orange)",  x: "78%", y: "20%", size: "55vmax", opacity: 0.143, blur: 170 },
    { color: "var(--yellow)",  x: "15%", y: "60%", size: "48vmax", opacity: 0.117, blur: 170 },
    { color: "var(--cyan)",    x: "55%", y: "90%", size: "55vmax", opacity: 0.13, blur: 180 },
  ],
  "/how-it-works": [
    { color: "var(--purple)",  x: "20%", y: "25%", size: "60vmax", opacity: 0.182, blur: 160 },
    { color: "var(--cyan)",    x: "80%", y: "55%", size: "55vmax", opacity: 0.143, blur: 170 },
    { color: "var(--primary)", x: "50%", y: "88%", size: "45vmax", opacity: 0.13, blur: 170 },
  ],
  "/use-cases": [
    { color: "var(--magenta)", x: "75%", y: "22%", size: "55vmax", opacity: 0.143, blur: 170 },
    { color: "var(--purple)",  x: "18%", y: "48%", size: "55vmax", opacity: 0.13, blur: 180 },
    { color: "var(--primary)", x: "60%", y: "85%", size: "45vmax", opacity: 0.13, blur: 170 },
  ],
  "/pricing": [
    { color: "var(--yellow)",  x: "70%", y: "18%", size: "55vmax", opacity: 0.143, blur: 170 },
    { color: "var(--primary)", x: "20%", y: "50%", size: "55vmax", opacity: 0.156, blur: 160 },
    { color: "var(--cyan)",    x: "58%", y: "88%", size: "50vmax", opacity: 0.13, blur: 180 },
  ],
  "/about": [
    { color: "var(--cyan)",    x: "72%", y: "20%", size: "60vmax", opacity: 0.156, blur: 170 },
    { color: "var(--purple)",  x: "18%", y: "55%", size: "55vmax", opacity: 0.13, blur: 180 },
    { color: "var(--primary)", x: "60%", y: "90%", size: "45vmax", opacity: 0.117, blur: 170 },
  ],
  "/insights": [
    { color: "var(--purple)",  x: "78%", y: "22%", size: "58vmax", opacity: 0.156, blur: 170 },
    { color: "var(--cyan)",    x: "16%", y: "58%", size: "52vmax", opacity: 0.13, blur: 180 },
    { color: "var(--magenta)", x: "55%", y: "90%", size: "45vmax", opacity: 0.104, blur: 190 },
  ],
  "/contact": [
    { color: "var(--primary)", x: "20%", y: "22%", size: "55vmax", opacity: 0.182, blur: 160 },
    { color: "var(--cyan)",    x: "80%", y: "58%", size: "55vmax", opacity: 0.156, blur: 170 },
    { color: "var(--yellow)",  x: "50%", y: "92%", size: "40vmax", opacity: 0.104, blur: 190 },
  ],
  "/security": [
    { color: "var(--cyan)",    x: "78%", y: "22%", size: "60vmax", opacity: 0.156, blur: 170 },
    { color: "var(--primary)", x: "20%", y: "60%", size: "50vmax", opacity: 0.13, blur: 180 },
    { color: "var(--purple)",  x: "55%", y: "92%", size: "45vmax", opacity: 0.104, blur: 190 },
  ],
  // Legal/misc — quieter
  "/privacy": [
    { color: "var(--cyan)",    x: "82%", y: "18%", size: "50vmax", opacity: 0.104, blur: 190 },
    { color: "var(--purple)",  x: "18%", y: "72%", size: "45vmax", opacity: 0.091, blur: 200 },
  ],
  "/terms": [
    { color: "var(--purple)",  x: "78%", y: "22%", size: "48vmax", opacity: 0.104, blur: 190 },
    { color: "var(--cyan)",    x: "20%", y: "70%", size: "45vmax", opacity: 0.091, blur: 200 },
  ],
};

const DEFAULT_PALETTE: Blob[] = [
  { color: "var(--primary)", x: "75%", y: "20%", size: "60vmax", opacity: 0.156, blur: 170 },
  { color: "var(--cyan)",    x: "18%", y: "60%", size: "55vmax", opacity: 0.13, blur: 180 },
  { color: "var(--purple)",  x: "55%", y: "90%", size: "50vmax", opacity: 0.104, blur: 190 },
];

const AmbientBackground = () => {
  const { pathname } = useLocation();

  const blobs = useMemo(() => {
    // Match longest known prefix (handles /insights/:slug)
    const key = Object.keys(PALETTES)
      .filter((k) => pathname === k || pathname.startsWith(k + "/"))
      .sort((a, b) => b.length - a.length)[0];
    return key ? PALETTES[key] : DEFAULT_PALETTE;
  }, [pathname]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: -10 }}
    >
      {/* Solid brand canvas — body is transparent so this is the base layer */}
      <div className="absolute inset-0 bg-background" />
      {/* Base vignette to seat the glows into the dark canvas */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, hsl(var(--background) / 0) 0%, hsl(var(--background) / 0.35) 60%, hsl(var(--background) / 0.9) 100%)",
        }}
      />
      {blobs.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full will-change-transform"
          style={{
            left: b.x,
            top: b.y,
            width: b.size,
            height: b.size,
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(circle at center, hsl(${b.color} / ${b.opacity}) 0%, hsl(${b.color} / 0) 65%)`,
            filter: `blur(${b.blur}px)`,
          }}
        />
      ))}
      {/* Faint grain to prevent banding */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px 180px",
        }}
      />
    </div>
  );
};

export default AmbientBackground;