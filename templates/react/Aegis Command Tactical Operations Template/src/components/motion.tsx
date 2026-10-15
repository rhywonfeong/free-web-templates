import { ReactNode, useEffect, useRef } from "react";

/**
 * GSAP-referenced motion system.
 * Sandpack-safe: no gsap package. Easing, stagger, and scrub mirror GSAP's
 * power3.out / expo.out defaults used by the futuristic interface reference.
 */

export function useReveal(selector = ".reveal", deps: unknown[] = []) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = root.current;
    if (!host) return;
    const nodes = Array.from(host.querySelectorAll<HTMLElement>(selector));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }

    nodes.forEach((n) => n.classList.remove("is-in"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.delay || 0);
          el.style.animationDelay = `${delay}ms`;
          el.classList.add("is-in");
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" }
    );

    nodes.forEach((n, i) => {
      if (!n.dataset.delay) n.dataset.delay = String(i * 70);
      io.observe(n);
    });

    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return root;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={`reveal ${className}`} data-delay={delay}>
      {children}
    </div>
  );
}

export function AmbientField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const motes = Array.from({ length: 42 }, (_, i) => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.6 + (i % 5) * 0.35,
      s: 0.08 + (i % 7) * 0.02,
      hue: i % 3,
    }));

    const draw = (t: number) => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      const g = ctx.createRadialGradient(w * 0.7, h * 0.2, 20, w * 0.5, h * 0.6, w * 0.7);
      g.addColorStop(0, "rgba(99,102,241,0.22)");
      g.addColorStop(0.45, "rgba(129,140,248,0.08)");
      g.addColorStop(1, "rgba(9,9,11,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      motes.forEach((m, i) => {
        const y = reduce ? m.y * h : ((m.y * h - ((t * m.s) % h) + h) % h);
        const x = m.x * w + Math.sin(t * 0.0004 + i) * 12;
        ctx.beginPath();
        ctx.fillStyle = m.hue === 0 ? "rgba(99,102,241,0.6)" : m.hue === 1 ? "rgba(129,140,248,0.5)" : "rgba(165,180,252,0.42)";
        ctx.arc(x, y, m.r, 0, Math.PI * 2);
        ctx.fill();
      });
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="ambient-canvas" aria-hidden="true" />;
}

export function FolderPlate() {
  return (
    <div className="folder-plate" aria-hidden="true">
      <div className="folder-plate__grid" />
    </div>
  );
}
