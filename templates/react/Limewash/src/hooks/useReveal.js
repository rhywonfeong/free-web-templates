import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scroll-reveal hook.
 *
 * IMPORTANT: this effect must return either a cleanup FUNCTION or nothing.
 * Returning a non-function (or letting the cleanup throw) is what produces the
 * React dev-build error: "destroy is not a function".
 *
 * We re-run the observer setup when the route changes (via pathname) so that
 * newly mounted pages get their `.reveal` elements observed, and we always
 * return a plain cleanup function.
 */
export default function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      // Preview/SSR-safe fallback: just show everything.
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, [pathname]);
}
