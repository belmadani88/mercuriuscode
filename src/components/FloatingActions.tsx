import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * ============================================================
 *  WHATSAPP CONFIGURATION
 *  REPLACE THIS WITH YOUR WHATSAPP NUMBER INCLUDING COUNTRY CODE
 *  Digits only: no +, no spaces, no dashes, no brackets.
 *  Example (Morocco): "212612345678"  |  Example (US): "14155550123"
 * ============================================================
 */
export const WHATSAPP_NUMBER = "212600000000";

/** Pre-filled message shown in WhatsApp when the chat opens. */
const WHATSAPP_MESSAGE =
  "Hello WebThangs, I would like to discuss my website and get a free conversion audit.";

const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

const FloatingActions = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setShowTop(window.scrollY > 600);
        frame = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {/* WhatsApp — bottom right */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with WebThangs on WhatsApp"
        className="fixed z-40 right-4 sm:right-6 bottom-4 sm:bottom-6 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#25D366] text-[#0D0F11] shadow-lg shadow-[#25D366]/20 transition-transform duration-200 hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-safe:animate-in"
        style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="currentColor"
          className="h-5 w-5 sm:h-6 sm:w-6"
        >
          <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.13-.42-2.15-1.33-.8-.71-1.33-1.59-1.48-1.89-.15-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.66-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.2 5.07 4.37.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.75-.71 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
          <path d="M12.04 2C6.6 2 2.17 6.43 2.17 11.88c0 1.74.46 3.44 1.32 4.94L2 22l5.34-1.4c1.44.79 3.07 1.2 4.7 1.2h.01c5.44 0 9.87-4.43 9.87-9.88C21.92 6.43 17.49 2 12.04 2zm0 17.9h-.01c-1.45 0-2.87-.39-4.11-1.13l-.29-.17-3.05.8.81-2.97-.19-.31a8.16 8.16 0 01-1.25-4.34c0-4.52 3.68-8.2 8.21-8.2 2.19 0 4.25.86 5.8 2.41a8.13 8.13 0 012.4 5.8c0 4.52-3.68 8.21-8.32 8.21z" />
        </svg>
      </a>

      {/* Back to top — bottom left, appears after scrolling */}
      <button
        type="button"
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
        aria-label="Back to top"
        className={`fixed z-40 left-4 sm:left-6 bottom-4 sm:bottom-6 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-border bg-card/90 text-foreground backdrop-blur transition-all duration-300 hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
          showTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
        style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
        tabIndex={showTop ? 0 : -1}
      >
        <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
    </>
  );
};

export default FloatingActions;