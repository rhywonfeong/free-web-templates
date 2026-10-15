import React, { useEffect, useRef, useState } from "react";
import { features, testimonials, codeLines } from "./data";

/* ----------------------------- Canvas background ---------------------------- */
function GridCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    let width, height, size, gap, cols, rows;
    let particles = [];
    let raf;

    function initGrid() {
      particles = [];
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const nx = i / cols;
          const ny = j / rows;
          let density = 0;

          const distTop = Math.sqrt(
            Math.pow((nx - 0.35) * 1.5, 2) + Math.pow(ny - 0.1, 2)
          );
          density += Math.max(0, 0.7 - distTop * 1.5);

          const distBottomLeft = Math.sqrt(
            Math.pow(nx - 0.1, 2) + Math.pow((ny - 0.85) * 1.2, 2)
          );
          density += Math.max(0, 0.9 - distBottomLeft * 1.6);

          const distRight = Math.sqrt(
            Math.pow(nx - 0.95, 2) + Math.pow((ny - 0.6) * 0.8, 2)
          );
          density += Math.max(0, 0.6 - distRight * 1.2);

          const noiseX = Math.sin(nx * 80) * 0.1;
          const noiseY = Math.cos(ny * 80) * 0.1;
          const combinedNoise = Math.sin(nx * 40 + ny * 40) * 0.15;

          let probability = density + noiseX + noiseY + combinedNoise;

          const centerDist = Math.sqrt(
            Math.pow(nx - 0.5, 2) + Math.pow(ny - 0.42, 2)
          );
          if (centerDist < 0.3) probability -= 0.8;
          if (centerDist < 0.2) probability = -1;

          if (probability > 0.25) {
            const brightness = Math.min(1, Math.max(0.3, probability * 1.5));
            particles.push({
              x: i * (size + gap),
              y: j * (size + gap),
              baseAlpha: brightness,
              phase: Math.random() * Math.PI * 2,
              speed: 0.005 + Math.random() * 0.015,
              flickerAmp: Math.random() > 0.8 ? 0.4 : 0.15,
            });
          }
        }
      }
    }

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      size = width > 768 ? 5 : 3;
      gap = width > 768 ? 2 : 1;
      cols = Math.floor(width / (size + gap));
      rows = Math.floor(height / (size + gap));
      initGrid();
    }

    function animate() {
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, width, height);
      const time = Date.now();
      particles.forEach((p) => {
        const currentAlpha =
          p.baseAlpha *
          (1 - p.flickerAmp + Math.sin(time * p.speed + p.phase) * p.flickerAmp);
        const colorVal = Math.floor(currentAlpha * 255);
        if (colorVal > 15) {
          ctx.fillStyle = `rgb(${colorVal}, ${colorVal}, ${colorVal})`;
          ctx.fillRect(p.x, p.y, size, size);
        }
      });
      raf = requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resize);
    resize();
    animate();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 z-0 pointer-events-none opacity-90"
    />
  );
}

/* ------------------------------ Scroll reveal hook -------------------------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ----------------------------------- Logo ---------------------------------- */
function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3 text-white group">
      <svg
        width="28"
        height="28"
        viewBox="0 0 64 64"
        fill="none"
        className="text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all"
      >
        <path
          d="M30 14 H18 C13.5817 14 10 17.5817 10 22 V42 C10 46.4183 13.5817 50 18 50 H30 M10 32 H26 M26 32 C21.5817 32 18 35.5817 18 40 V50"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinejoin="miter"
          strokeLinecap="square"
        />
        <path
          d="M34 14 H46 C50.4183 14 54 17.5817 54 22 V32 H34 M54 32 L38 50 H48 L56 40"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinejoin="miter"
          strokeLinecap="square"
        />
        <rect x="30" y="45.5" width="4.5" height="4.5" fill="currentColor" />
      </svg>
      <span className="text-lg tracking-tight font-light uppercase mt-0.5">
        Nexus
      </span>
    </a>
  );
}

/* ----------------------------------- Header --------------------------------- */
function Header() {
  const [open, setOpen] = useState(false);
  const links = ["Ecosystem", "Architecture", "Solutions", "Guides"];
  return (
    <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[calc(100%-2rem)] max-w-5xl px-6 py-3.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full select-none shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)]">
      <Logo />
      <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-light">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="hover:text-white transition-colors"
          >
            {l}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-5">
        <a
          href="#"
          className="hidden sm:block text-sm text-neutral-400 hover:text-white transition-colors font-light"
        >
          Sign in
        </a>
        <a
          href="#"
          className="text-sm bg-white text-black px-5 py-2 rounded-full font-light hover:bg-neutral-200 transition-colors"
        >
          Get Started
        </a>
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-white"
          aria-label="Menu"
        >
          <iconify-icon
            icon={open ? "solar:close-square-linear" : "solar:hamburger-menu-linear"}
            class="text-xl"
          ></iconify-icon>
        </button>
      </div>

      {open && (
        <div className="absolute top-full mt-3 left-0 w-full md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-lg text-neutral-300 hover:bg-white/5 hover:text-white transition-colors text-sm font-light"
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

/* ------------------------------------ Hero ---------------------------------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full max-w-4xl mx-auto px-6 text-center select-none pt-24"
    >
      <div
        className="mb-7 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md reveal in"
        style={{ animationDelay: "0.05s" }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-white float" />
        <span className="mono text-[0.7rem] tracking-widest uppercase text-neutral-300">
          The autonomous coding agent
        </span>
      </div>

      <h1
        className="text-5xl md:text-7xl leading-[1.04] font-light tracking-tight text-white mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] reveal in"
        style={{ animationDelay: "0.15s" }}
      >
        Decentralized processing,
        <br /> engineered for infinity.
      </h1>

      <p
        className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-10 font-extralight leading-relaxed reveal in"
        style={{ animationDelay: "0.28s" }}
      >
        Launch borderless workloads across a hyper-resilient network. Nexus
        delivers edge-optimized execution with smart routing, instant wake-ups,
        and frictionless growth.
      </p>

      <div
        className="flex flex-col sm:flex-row items-center gap-4 reveal in"
        style={{ animationDelay: "0.4s" }}
      >
        <a
          href="#"
          className="group flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-light hover:bg-neutral-200 transition-all hover:gap-3 w-full sm:w-auto"
        >
          Begin Journey
          <iconify-icon
            icon="solar:arrow-right-linear"
            class="text-lg"
          ></iconify-icon>
        </a>
        <a
          href="#demo"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-light text-white border border-white/10 hover:bg-white/5 transition-colors w-full sm:w-auto"
        >
          Explore API
        </a>
      </div>

      <div
        className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60 reveal in"
        style={{ animationDelay: "0.55s" }}
      >
        {["typescript", "python", "rust", "go", "react"].map((b) => (
          <iconify-icon
            key={b}
            icon={`simple-icons:${b}`}
            class="text-2xl text-neutral-400 hover:text-white transition-colors"
          ></iconify-icon>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------- Stats ---------------------------------- */
function Stats() {
  const stats = [
    { v: "99.99%", l: "uptime SLA" },
    { v: "<40ms", l: "edge cold-start" },
    { v: "8.2M", l: "tasks shipped" },
    { v: "180+", l: "regions" },
  ];
  return (
    <section className="relative z-10 max-w-5xl mx-auto px-6 py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10 reveal">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-[#0a0a0a] px-6 py-8 text-center hover:bg-white/[0.03] transition-colors"
          >
            <div className="text-3xl md:text-4xl font-light tracking-tight text-white mb-1">
              {s.v}
            </div>
            <div className="mono text-[0.7rem] uppercase tracking-widest text-neutral-500">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------- Features --------------------------------- */
function Features() {
  return (
    <section id="architecture" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
      <div className="max-w-2xl mb-14 reveal">
        <span className="mono text-[0.7rem] uppercase tracking-widest text-neutral-500">
          Capabilities
        </span>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mt-4 mb-5">
          An agent that thinks like
          <br /> your best engineer.
        </h2>
        <p className="text-neutral-400 font-extralight leading-relaxed">
          Every capability is built to reduce friction between intent and shipped
          code — without sacrificing privacy or control.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <div
            key={i}
            className="reveal group relative p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/25 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1"
            style={{ animationDelay: `${i * 0.07}s` }}
          >
            <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:bg-white group-hover:text-black transition-colors">
              <iconify-icon icon={f.icon} class="text-xl"></iconify-icon>
            </div>
            <h3 className="text-lg font-medium tracking-tight mb-2">{f.title}</h3>
            <p className="text-sm text-neutral-400 font-extralight leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------- Demo ------------------------------------ */
function Demo() {
  const [visible, setVisible] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setStarted(true);
      },
      { threshold: 0.4 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (visible >= codeLines.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), 520);
    return () => clearTimeout(t);
  }, [started, visible]);

  return (
    <section
      id="demo"
      ref={ref}
      className="relative z-10 max-w-5xl mx-auto px-6 py-24"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <span className="mono text-[0.7rem] uppercase tracking-widest text-neutral-500">
            Live agent loop
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mt-4 mb-5">
            Describe it once.
            <br /> Watch it ship.
          </h2>
          <p className="text-neutral-400 font-extralight leading-relaxed mb-8">
            Nexus plans the work, edits across your repository, runs the test
            suite, and opens a reviewed pull request — all from a single prompt.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-light hover:bg-neutral-200 transition-all hover:gap-3"
          >
            Start a task
            <iconify-icon icon="solar:arrow-right-linear" class="text-lg"></iconify-icon>
          </a>
        </div>

        <div className="reveal rounded-2xl border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="mono text-[0.7rem] text-neutral-500 ml-3">
              nexus — agent
            </span>
          </div>
          <div className="p-5 mono text-[0.8rem] leading-relaxed min-h-[260px]">
            {codeLines.slice(0, visible).map((line, i) => (
              <div key={i} className="mb-1.5" style={{ animation: "fadeIn .4s ease" }}>
                {line.t ? (
                  <span className="text-neutral-400">
                    {line.t}
                    <span className="text-white">{line.c}</span>
                    <span className="text-neutral-300">{line.g}</span>
                    <span className="text-neutral-500">{line.x}</span>
                  </span>
                ) : (
                  <span
                    className={
                      line.p.startsWith("✓")
                        ? "text-emerald-400"
                        : "text-neutral-400"
                    }
                  >
                    {line.p}
                  </span>
                )}
              </div>
            ))}
            {visible < codeLines.length && started && (
              <span className="caret text-white">▋</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Testimonials ------------------------------- */
function Testimonials() {
  return (
    <section id="solutions" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
      <div className="text-center max-w-2xl mx-auto mb-14 reveal">
        <span className="mono text-[0.7rem] uppercase tracking-widest text-neutral-500">
          Proof
        </span>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mt-4">
          Teams ship faster on Nexus.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <figure
            key={i}
            className="reveal p-7 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="flex gap-0.5 mb-5 text-white">
              {Array.from({ length: 5 }).map((_, s) => (
                <iconify-icon key={s} icon="solar:star-bold" class="text-sm"></iconify-icon>
              ))}
            </div>
            <blockquote className="text-neutral-200 font-extralight leading-relaxed flex-1">
              “{t.quote}”
            </blockquote>
            <figcaption className="flex items-center gap-3 mt-6 pt-6 border-t border-white/10">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover grayscale"
              />
              <div>
                <div className="text-sm text-white font-medium">{t.name}</div>
                <div className="mono text-[0.7rem] text-neutral-500">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------- CTA ------------------------------------ */
function CTA() {
  return (
    <section className="relative z-10 max-w-5xl mx-auto px-6 py-24">
      <div className="reveal relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent px-8 py-16 md:py-20 text-center">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-white/10 blur-3xl rounded-full pointer-events-none" />
        <h2 className="relative text-3xl md:text-5xl font-light tracking-tight mb-5">
          Build at the speed of thought.
        </h2>
        <p className="relative text-neutral-400 font-extralight max-w-xl mx-auto mb-9">
          Join thousands of engineers shipping with an agent that respects your
          code, your privacy, and your time.
        </p>
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="group flex items-center justify-center gap-2 bg-white text-black px-7 py-3.5 rounded-full text-sm font-light hover:bg-neutral-200 transition-all hover:gap-3 w-full sm:w-auto"
          >
            Get Started free
            <iconify-icon icon="solar:arrow-right-linear" class="text-lg"></iconify-icon>
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-light text-white border border-white/10 hover:bg-white/5 transition-colors w-full sm:w-auto"
          >
            Talk to sales
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Footer ---------------------------------- */
function Footer() {
  const cols = [
    {
      h: "Product",
      links: ["Architecture", "Pricing", "Changelog", "Status"],
    },
    { h: "Developers", links: ["Documentation", "API reference", "SDKs", "CLI"] },
    { h: "Company", links: ["About", "Careers", "Blog", "Contact"] },
  ];
  return (
    <footer id="guides" className="relative z-10 border-t border-white/10 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="text-sm text-neutral-500 font-extralight leading-relaxed mt-5 max-w-xs">
            Decentralized processing, engineered for infinity. Edge-optimized
            execution for borderless teams.
          </p>
          <div className="flex items-center gap-4 mt-6 text-neutral-500">
            {["github", "x", "discord", "linkedin"].map((s) => (
              <a key={s} href="#" className="hover:text-white transition-colors" aria-label={s}>
                <iconify-icon icon={`simple-icons:${s}`} class="text-lg"></iconify-icon>
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <h4 className="mono text-[0.7rem] uppercase tracking-widest text-neutral-500 mb-4">
              {c.h}
            </h4>
            <ul className="space-y-3">
              {c.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-neutral-400 hover:text-white transition-colors font-light"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="mono text-[0.7rem] text-neutral-600">
            © {new Date().getFullYear()} NEXUS LABS — ALL RIGHTS RESERVED
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-neutral-500 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-neutral-500 hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------ App ----------------------------------- */
export default function App() {
  useReveal();
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <GridCanvas />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Demo />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}