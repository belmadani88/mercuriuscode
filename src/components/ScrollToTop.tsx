import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // When the route carries a hash (e.g. /solutions#geo), scroll to that
    // section instead of the top. Retry once on the next frame so lazily
    // rendered sections are in the DOM.
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const scrollToSection = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return true;
        }
        return false;
      };
      if (!scrollToSection()) {
        const t = window.setTimeout(scrollToSection, 150);
        return () => window.clearTimeout(t);
      }
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
