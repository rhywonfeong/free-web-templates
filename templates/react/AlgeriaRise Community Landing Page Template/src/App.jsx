import React, { useEffect, useRef, useState, useCallback } from "react";
import { PROBLEMS, STATS, PILLARS, FLOW, PROGRAMS, AUTHORITY, PARTNERS, COMMUNITY, STORIES, VISION } from "./data";

/* ---------- HELPERS ---------- */
const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const handleAnchor = (e, id) => {
  e.preventDefault();
  scrollToId(id);
};

/* ---------- HOOKS ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-fast");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const delay = e.target.dataset.delay || 0;
            setTimeout(() => e.target.classList.add("in"), delay);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useCountUp(target, trigger) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = null;
    const duration = 2000;
    const tick = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, trigger]);
  return val;
}

/* ---------- CURSOR ---------- */
function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  useEffect(() => {
    let rx = 0, ry = 0, dx = 0, dy = 0;
    const move = (e) => {
      dx = e.clientX; dy = e.clientY;
      if (dot.current) { dot.current.style.left = dx + "px"; dot.current.style.top = dy + "px"; }
      const t = e.target;
      if (t.closest("a, button, [data-magnet]")) ring.current?.classList.add("hover");
      else ring.current?.classList.remove("hover");
    };
    const tick = () => {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      if (ring.current) { ring.current.style.left = rx + "px"; ring.current.style.top = ry + "px"; }
      requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", move);
    requestAnimationFrame(tick);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}

/* ---------- NAV ---------- */
function Nav({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { id: "problem", label: "Mission" },
    { id: "programs", label: "Programs" },
    { id: "community", label: "Community" },
    { id: "founder", label: "Founders" },
    { id: "stories", label: "Stories" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "nav-blur py-4" : "py-6"}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#top" onClick={(e) => handleAnchor(e, "top")} className="flex items-center gap-2 group" data-magnet>
          <div className="w-8 h-8 rounded-full border border-[#C9A84C] flex items-center justify-center transition-transform group-hover:rotate-180 duration-700">
            <span className="font-display italic text-[#C9A84C] text-sm">A</span>
          </div>
          <span className="font-syne font-semibold tracking-widest text-sm">ALGERIA<span className="text-[#C9A84C]">RISE</span></span>
        </a>

        <nav className="hidden lg:flex items-center gap-10 font-syne text-xs tracking-[0.25em] uppercase">
          {navLinks.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={(e) => handleAnchor(e, n.id)} className="hover:text-[#C9A84C] transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-1 font-syne text-[11px] tracking-[0.2em] text-[var(--bone-dim)]">
            {["EN", "FR", "AR"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 rounded transition-colors ${lang === l ? "text-[#C9A84C]" : "hover:text-[#F5F0E8]"}`}
              >{l}</button>
            ))}
          </div>
          <a href="#cta" onClick={(e) => handleAnchor(e, "cta")} className="btn-gold text-xs" data-magnet>
            Apply Now <iconify-icon icon="solar:arrow-right-linear" />
          </a>
          <button
            className="lg:hidden w-10 h-10 rounded-full border border-[#C9A84C]/30 flex items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <iconify-icon icon={open ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden nav-blur border-t border-[#C9A84C]/10 mt-4">
          <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col gap-5 font-syne text-xs tracking-[0.25em] uppercase">
            {navLinks.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={(e) => { handleAnchor(e, n.id); setOpen(false); }}
                className="hover:text-[#C9A84C] transition-colors"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const words = ["Build", "Your", "Future"];
  const words2 = ["in", "America."];
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden vignette">
      <div className="absolute inset-0 hero-bg" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1920&q=80')] bg-cover bg-center opacity-25 mix-blend-luminosity" />
      <div className="absolute inset-0" style={{ background: "rgba(10,9,6,0.55)" }} />

      {/* Glow halos */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(201,168,76,0.18), transparent 70%)" }} />
      <div className="absolute bottom-1/4 right-1/5 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(196,75,43,0.15), transparent 70%)" }} />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-32 w-full">
        <div className="reveal" style={{ animationDelay: "0.2s" }}>
          <span className="eyebrow flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-[#C9A84C]" />
            New York · Algerian Community · Est. 2024
          </span>
        </div>

        <h1 className="font-display mt-8 leading-[0.88] tracking-tight text-balance">
          <span className="block">
            {words.map((w, i) => (
              <span key={i} className="inline-block reveal mr-4 italic" style={{ animationDelay: `${0.4 + i * 0.12}s`, fontSize: "clamp(3.5rem, 11vw, 9.5rem)", fontWeight: 500 }}>
                {w}
              </span>
            ))}
          </span>
          <span className="block mt-2">
            {words2.map((w, i) => (
              <span key={i} className="inline-block reveal mr-4" style={{ animationDelay: `${0.8 + i * 0.12}s`, fontSize: "clamp(3.5rem, 11vw, 9.5rem)", fontWeight: 400 }}>
                {i === 1 ? <span className="text-[#C9A84C]">{w}</span> : w}
              </span>
            ))}
          </span>
        </h1>

        <p className="reveal mt-10 max-w-xl text-lg leading-relaxed text-[var(--bone-dim)]" style={{ animationDelay: "1.2s" }}>
          Real skills. Recognized certifications.<br/>
          A community that carries you forward.
        </p>

        <div className="reveal mt-12 flex flex-wrap items-center gap-4" style={{ animationDelay: "1.5s" }}>
          <a href="#programs" onClick={(e) => handleAnchor(e, "programs")} className="btn-gold" data-magnet>
            Start Your Journey <iconify-icon icon="solar:arrow-right-linear" />
          </a>
          <a href="#community" onClick={(e) => handleAnchor(e, "community")} className="btn-ghost" data-magnet>
            Join the Community
          </a>
        </div>

        <a
          href="#problem"
          onClick={(e) => handleAnchor(e, "problem")}
          className="reveal absolute bottom-8 left-6 lg:left-12 flex items-center gap-3 font-syne text-[10px] tracking-[0.3em] uppercase text-[var(--bone-dim)] hover:text-[#C9A84C] transition-colors"
          style={{ animationDelay: "1.8s" }}
        >
          <span>Scroll</span>
          <span className="inline-block w-12 h-px bg-[var(--bone-dim)]" />
          <iconify-icon icon="solar:arrow-down-linear" />
        </a>

        <div className="reveal absolute bottom-8 right-6 lg:right-12 hidden md:flex flex-col items-end gap-1 font-syne text-[10px] tracking-[0.25em] uppercase text-[var(--bone-dim)]" style={{ animationDelay: "1.8s" }}>
          <span>40.7128° N</span>
          <span>74.0060° W</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROBLEM ---------- */
function Stat({ stat, trigger }) {
  const v = useCountUp(stat.value, trigger);
  const display = stat.value < 10 ? v.toFixed(1) : Math.floor(v);
  return (
    <div className="reveal border-l border-[#C9A84C]/20 pl-6 py-2">
      <div className="font-display text-6xl md:text-7xl text-[#C9A84C] tracking-tight" style={{ fontWeight: 500 }}>
        {stat.prefix}{display}{stat.suffix}
      </div>
      <div className="mt-3 text-sm text-[var(--bone-dim)] max-w-[240px] leading-relaxed">{stat.label}</div>
    </div>
  );
}

function Problem() {
  const ref = useRef(null);
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setTrigger(true), { threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="problem" className="relative py-32 lg:py-48">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <span className="eyebrow reveal">— The Reality</span>
        <h2 className="reveal font-display italic mt-6 leading-[0.95] tracking-tight text-balance" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 400 }}>
          You arrived with everything.<br/>
          <span className="text-[var(--bone-dim)]">But the system sees nothing.</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 mt-24" ref={ref}>
          <div className="grid sm:grid-cols-2 gap-5">
            {PROBLEMS.map((p, i) => (
              <div key={i} className="reveal glass rounded-2xl p-7 hover:border-[#C9A84C]/40 transition-all duration-500 hover:-translate-y-1" data-delay={i * 80}>
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C]">
                  <iconify-icon icon={p.icon} width="20" />
                </div>
                <h3 className="font-syne text-base font-semibold mt-5 tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm text-[var(--bone-dim)] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="space-y-10">
            {STATS.map((s, i) => <Stat key={i} stat={s} trigger={trigger} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SOLUTION ---------- */
function Solution() {
  return (
    <section className="relative py-32 lg:py-48 bg-gradient-to-b from-transparent via-[#0e0c08] to-transparent">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="eyebrow reveal">— The Bridge</span>
          <h2 className="reveal font-display mt-6 tracking-tight text-balance" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", fontWeight: 400 }}>
            The system you needed<br/>from <span className="italic text-[#C9A84C]">day one</span>.
          </h2>
        </div>

        <div className="gold-rule mt-20" />

        <div className="grid md:grid-cols-3 gap-px bg-[#C9A84C]/10 mt-px">
          {PILLARS.map((p, i) => (
            <div key={i} className="reveal bg-[#0A0906] p-10 lg:p-14 group hover:bg-[#11100B] transition-colors duration-700" data-delay={i * 120}>
              <div className="flex items-baseline justify-between">
                <span className="font-syne text-[11px] tracking-[0.3em] text-[#C9A84C]">{p.tag}</span>
                <iconify-icon icon={p.icon} width="22" style={{ color: "#C9A84C" }} />
              </div>
              <h3 className="font-display italic mt-8 text-5xl tracking-tight" style={{ fontWeight: 500 }}>{p.title}</h3>
              <p className="mt-6 text-[var(--bone-dim)] leading-relaxed text-sm">{p.body}</p>
              <div className="mt-10 h-px bg-gradient-to-r from-[#C9A84C]/40 to-transparent group-hover:from-[#C9A84C] transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* Flow */}
        <div className="mt-24 reveal">
          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4">
            {FLOW.map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center gap-3 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full border border-[#C9A84C] flex items-center justify-center font-syne text-xs font-semibold text-[#C9A84C]">
                    {i + 1}
                  </div>
                  <span className="font-syne text-[11px] tracking-[0.25em] uppercase">{step}</span>
                </div>
                {i < FLOW.length - 1 && (
                  <div className="flex-1 h-px relative min-w-[20px]">
                    <div className="absolute inset-0 border-t border-dashed border-[#C9A84C]/40" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROGRAMS ---------- */
function Programs() {
  return (
    <section id="programs" className="relative py-32 lg:py-48">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <span className="eyebrow reveal">— Programs</span>
            <h2 className="reveal font-display mt-6 tracking-tight" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", fontWeight: 400 }}>
              Master the <span className="italic">craft</span>.
            </h2>
          </div>
          <p className="reveal max-w-md text-[var(--bone-dim)] text-sm leading-relaxed">
            Every program is built around one question: will this get you hired in New York City? If the answer is no, we don't teach it.
          </p>
        </div>

        {/* Flagship HVAC */}
        <article className="reveal mt-20 relative rounded-3xl overflow-hidden group">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[3s] group-hover:scale-105"
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1600&q=80')" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(10,9,6,0.95) 0%, rgba(10,9,6,0.7) 50%, rgba(10,9,6,0.4) 100%)" }} />
          <div className="relative p-10 lg:p-20 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C44B2B]/15 border border-[#C44B2B]/40 font-syne text-[10px] tracking-[0.25em] uppercase text-[#E8A893]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C44B2B] animate-pulse" />
              Most In-Demand Trade in NYC
            </span>
            <h3 className="font-display mt-8 leading-[0.95] tracking-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 500 }}>
              Master HVAC.<br/><span className="italic text-[#C9A84C]">Own your income.</span>
            </h3>
            <p className="mt-6 text-[var(--bone-dim)] leading-relaxed max-w-md">
              High demand. 6-week intensive. EPA 608 certification prep. Graduates start at $60K–$90K with guaranteed interview placement.
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-8 font-syne text-xs tracking-widest uppercase text-[var(--bone-dim)]">
              <span><span className="text-[#C9A84C] font-semibold">6</span> Weeks</span>
              <span className="divider-dot"><span className="text-[#C9A84C] font-semibold">$72K</span> Avg Salary</span>
              <span className="divider-dot"><span className="text-[#C9A84C] font-semibold">94%</span> Placement</span>
            </div>
            <a href="#cta" onClick={(e) => handleAnchor(e, "cta")} className="btn-gold mt-10" data-magnet>
              Explore HVAC Program <iconify-icon icon="solar:arrow-right-linear" />
            </a>
          </div>
        </article>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {PROGRAMS.map((p, i) => (
            <a
              href="#cta"
              onClick={(e) => handleAnchor(e, "cta")}
              key={i}
              className="reveal relative rounded-2xl overflow-hidden glass p-8 hover:-translate-y-2 transition-all duration-500 group block"
              data-delay={i * 100}
              data-magnet
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              <iconify-icon icon={p.icon} width="28" style={{ color: "#C9A84C" }} />
              <h4 className="font-syne mt-6 text-xl font-semibold tracking-tight">{p.title}</h4>
              <p className="font-display italic mt-2 text-[#C9A84C] text-lg" style={{ fontWeight: 500 }}>"{p.hook}"</p>
              <p className="mt-5 text-sm text-[var(--bone-dim)] leading-relaxed">{p.body}</p>
              <div className="mt-8 flex items-center gap-2 font-syne text-[11px] tracking-[0.25em] uppercase text-[#C9A84C] opacity-70 group-hover:opacity-100 transition-opacity">
                Learn more <iconify-icon icon="solar:arrow-right-up-linear" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- AUTHORITY ---------- */
function Authority() {
  return (
    <section className="relative py-32 lg:py-40 bg-[#0c0a07] border-y border-[#C9A84C]/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="eyebrow reveal">— Certification</span>
            <h2 className="reveal font-display mt-6 leading-[0.95] tracking-tight" style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", fontWeight: 400 }}>
              Train to U.S. standards.<br/>
              <span className="italic text-[#C9A84C]">Certify.</span> Get hired.
            </h2>
            <ul className="mt-12 space-y-6">
              {AUTHORITY.map((a, i) => (
                <li key={i} className="reveal flex items-start gap-4" data-delay={i * 100}>
                  <span className="flex-shrink-0 mt-1.5 text-[#C9A84C] text-lg">✦</span>
                  <span className="text-[var(--bone-dim)] leading-relaxed">{a}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Badge mockup */}
          <div className="reveal flex items-center justify-center">
            <div className="relative w-[340px] h-[340px]">
              <div className="absolute inset-0 rounded-full border border-[#C9A84C]/30 animate-spin" style={{ animationDuration: "30s" }}>
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#C9A84C]" />
              </div>
              <div className="absolute inset-6 rounded-full border border-[#C9A84C]/15" />
              <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle at center, rgba(201,168,76,0.15), transparent 65%)" }} />
              <div className="absolute inset-12 rounded-full glass flex flex-col items-center justify-center text-center p-8">
                <iconify-icon icon="solar:medal-ribbons-star-bold" width="42" style={{ color: "#C9A84C" }} />
                <div className="font-display italic text-3xl mt-4 tracking-tight" style={{ fontWeight: 500 }}>Certified</div>
                <div className="font-syne text-[10px] tracking-[0.3em] uppercase text-[var(--bone-dim)] mt-2">EPA 608 · OSHA 30</div>
                <div className="gold-rule w-12 mt-4" />
                <div className="font-syne text-[9px] tracking-[0.3em] uppercase text-[#C9A84C] mt-3">AlgeriaRise · NYC</div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-24 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0c0a07] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0c0a07] to-transparent z-10 pointer-events-none" />
          <div className="marquee-track gap-16 items-center text-[var(--bone-dim)]">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <iconify-icon key={i} icon={p} width="36" style={{ flexShrink: 0, opacity: 0.5 }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- COMMUNITY ---------- */
function Community() {
  const avatars = [
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80",
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
  ];
  return (
    <section id="community" className="relative py-32 lg:py-48 overflow-hidden" style={{ background: "linear-gradient(180deg, #0A0906 0%, #2A1F12 30%, #3D2A18 50%, #2A1F12 70%, #0A0906 100%)" }}>
      <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.4), transparent 70%)" }} />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <span className="eyebrow reveal">— Community</span>
        <h2 className="reveal font-display italic mt-6 leading-[0.92] tracking-tight text-balance mx-auto max-w-4xl" style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", fontWeight: 400 }}>
          You don't have to figure<br/>this out alone.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-24 text-left">
          {COMMUNITY.map((c, i) => (
            <div key={i} className="reveal" data-delay={i * 120}>
              <iconify-icon icon={c.icon} width="32" style={{ color: "#C9A84C" }} />
              <h3 className="font-syne text-lg font-semibold mt-6 tracking-tight">{c.title}</h3>
              <p className="mt-4 text-[var(--bone-dim)] leading-relaxed text-sm">{c.body}</p>
            </div>
          ))}
        </div>

        <blockquote className="reveal mt-32 max-w-3xl mx-auto">
          <p className="font-display italic leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 400 }}>
            "Find your people.<br/>Build your network.<br/><span className="text-[#C9A84C]">Grow together.</span>"
          </p>
        </blockquote>

        <div className="reveal mt-20 flex justify-center -space-x-3">
          {avatars.map((a, i) => (
            <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0A0906] overflow-hidden hover:scale-110 hover:z-10 transition-transform duration-300">
              <img src={a} alt="" className="w-full h-full object-cover grayscale" />
            </div>
          ))}
          <div className="w-12 h-12 rounded-full border-2 border-[#0A0906] bg-[#C9A84C] text-[#0A0906] flex items-center justify-center font-syne text-[10px] font-bold tracking-tight">
            +400
          </div>
        </div>
        <p className="reveal mt-6 font-syne text-[11px] tracking-[0.3em] uppercase text-[var(--bone-dim)]">
          Members across NYC's five boroughs
        </p>
      </div>
    </section>
  );
}

/* ---------- FOUNDERS ---------- */
function Founder() {
  const belkacemImage = "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/5f729cc8-8ced-45f9-b1f4-73df1b7ba5c8/0b826045-5023-45b2-a69d-d980788693aa-ChatGPT-Image-Apr-30-2026-06_54_55-AM.png?v=1777528525509";
  const akramImage = "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/5f729cc8-8ced-45f9-b1f4-73df1b7ba5c8/d0eb6eff-49c4-47d2-b2db-127d9e752bd4-akram-mo-1.jpeg?v=1777530463114";

  return (
    <section id="founder" className="relative py-32 lg:py-48 overflow-hidden">
      {/* Soft gold ambient */}
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(201,168,76,0.08), transparent 70%)" }} />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(196,75,43,0.06), transparent 70%)" }} />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="eyebrow reveal">— The Founders</span>
          <h2 className="reveal font-display mt-6 leading-[0.95] tracking-tight text-balance" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 400 }}>
            Two visions.<br/>
            <span className="italic text-[#C9A84C]">One movement.</span>
          </h2>
        </div>

        {/* BELKACEM — Lead Founder */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-28">
          <div className="lg:col-span-6 reveal">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden founder-frame">
              <img
                src={belkacemImage}
                alt="Belkacem Hamitouche, Founder"
                className="w-full h-full object-cover founder-image"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(10,9,6,0.85) 100%)" }} />

              {/* Top corner mark */}
              <div className="absolute top-6 left-6 right-6 flex items-start justify-between font-syne text-[10px] tracking-[0.3em] uppercase">
                <span className="text-[#C9A84C]">Founder · 01</span>
                <span className="text-[var(--bone-dim)]">EST. 2024</span>
              </div>

              {/* Bottom name plate */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="font-display italic text-3xl md:text-4xl tracking-tight leading-[1]" style={{ fontWeight: 500 }}>
                      Belkacem
                    </div>
                    <div className="font-display text-3xl md:text-4xl tracking-tight leading-[1] mt-1" style={{ fontWeight: 500 }}>
                      Hamitouche
                    </div>
                  </div>
                  <div className="text-right font-syne text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] pb-1">
                    Founder<br/>& CEO
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="reveal flex items-center gap-3">
              <span className="inline-block w-10 h-px bg-[#C9A84C]" />
              <span className="font-syne text-[11px] tracking-[0.3em] uppercase text-[#C9A84C]">The Founder</span>
            </div>

            <h3 className="reveal font-display italic mt-6 leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)", fontWeight: 400 }}>
              "I built this for the<br/>
              <span className="text-[#C9A84C]">ones who arrive</span><br/>
              with everything but a map."
            </h3>

            <div className="mt-12 space-y-6 text-[var(--bone-dim)] leading-[1.85] max-w-xl">
              <p className="reveal">
                Belkacem Hamitouche founded AlgeriaRise after years of watching brilliant Algerian tradesmen, engineers, and dreamers arrive in New York — only to be reduced to invisible labor.
              </p>
              <p className="reveal" data-delay="100">
                A builder by instinct and a leader by purpose, he architected the entire system: the curriculum, the certifications, the partnerships with NYC employers. His belief is simple — talent does not need permission. It needs a door.
              </p>
            </div>

            <div className="reveal mt-14 pl-6 border-l-2 border-[#C9A84C]" data-delay="200">
              <p className="font-display italic text-[#C9A84C] leading-[1.2]" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", fontWeight: 400 }}>
                "We are not a charity.<br/>
                We are a launchpad.<br/>
                And every Algerian deserves one."
              </p>
              <p className="font-syne text-[11px] tracking-[0.3em] uppercase text-[var(--bone-dim)] mt-6">
                — Belkacem Hamitouche · Founder & CEO
              </p>
            </div>

            <div className="reveal mt-12 grid grid-cols-3 gap-6 max-w-md" data-delay="300">
              <div>
                <div className="font-display text-4xl text-[#C9A84C] tracking-tight" style={{ fontWeight: 500 }}>15+</div>
                <div className="font-syne text-[10px] tracking-[0.25em] uppercase text-[var(--bone-dim)] mt-2">Years Building</div>
              </div>
              <div>
                <div className="font-display text-4xl text-[#C9A84C] tracking-tight" style={{ fontWeight: 500 }}>400+</div>
                <div className="font-syne text-[10px] tracking-[0.25em] uppercase text-[var(--bone-dim)] mt-2">Lives Changed</div>
              </div>
              <div>
                <div className="font-display text-4xl text-[#C9A84C] tracking-tight" style={{ fontWeight: 500 }}>1</div>
                <div className="font-syne text-[10px] tracking-[0.25em] uppercase text-[var(--bone-dim)] mt-2">Mission</div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="gold-rule mt-32 mb-20 reveal" />

        {/* AKRAM — Co-Founder */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 lg:order-2 reveal">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden founder-frame">
              <img
                src={akramImage}
                alt="Akram, Co-Founder & Filmmaker"
                className="w-full h-full object-cover founder-image founder-image-akram"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(10,9,6,0.85) 100%)" }} />

              <div className="absolute top-6 left-6 right-6 flex items-start justify-between font-syne text-[10px] tracking-[0.3em] uppercase">
                <span className="text-[#C9A84C]">Co-Founder · 02</span>
                <span className="text-[var(--bone-dim)]">Brooklyn '24</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="font-display italic text-3xl md:text-4xl tracking-tight leading-[1]" style={{ fontWeight: 500 }}>
                      Akram
                    </div>
                    <div className="font-syne text-[11px] tracking-[0.25em] uppercase text-[var(--bone-dim)] mt-3">
                      Filmmaker · Storyteller
                    </div>
                  </div>
                  <div className="text-right font-syne text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] pb-1">
                    Co-Founder
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:order-1">
            <div className="reveal flex items-center gap-3">
              <span className="inline-block w-10 h-px bg-[#C9A84C]" />
              <span className="font-syne text-[11px] tracking-[0.3em] uppercase text-[#C9A84C]">The Storyteller</span>
            </div>

            <h3 className="reveal font-display italic mt-6 leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 400 }}>
              "I didn't come here to make films.<br/>
              <span className="text-[#C9A84C]">I came here to tell the truth.</span>"
            </h3>

            <div className="mt-12 space-y-6 text-[var(--bone-dim)] leading-[1.85] max-w-xl">
              <p className="reveal">
                Akram is a filmmaker. But more than that, he is a witness — to sacrifice, to reinvention, to the quiet dignity of people who cross oceans to give their children a better chance.
              </p>
              <p className="reveal" data-delay="100">
                Alongside Belkacem, he gives AlgeriaRise its voice and its soul — capturing the stories no one else thought to film, and making sure the world finally sees what we are.
              </p>
            </div>

            <div className="reveal mt-14 pl-6 border-l-2 border-[#C9A84C]" data-delay="200">
              <p className="font-display italic text-[#C9A84C] leading-[1.2]" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", fontWeight: 400 }}>
                "This is more than education.<br/>
                This is about giving people<br/>
                a real chance."
              </p>
              <p className="font-syne text-[11px] tracking-[0.3em] uppercase text-[var(--bone-dim)] mt-6">
                — Akram · Co-Founder & Filmmaker
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- STORIES ---------- */
function Stories() {
  const [idx, setIdx] = useState(0);
  const story = STORIES[idx];
  return (
    <section id="stories" className="relative py-32 lg:py-48 bg-[#0c0a07]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
          <div>
            <span className="eyebrow reveal">— Stories</span>
            <h2 className="reveal font-display mt-6 leading-[0.95] tracking-tight" style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", fontWeight: 400 }}>
              Before. <span className="italic text-[#C9A84C]">After.</span>
            </h2>
          </div>
          <div className="reveal flex items-center gap-2">
            <button onClick={() => setIdx((idx - 1 + STORIES.length) % STORIES.length)} className="w-12 h-12 rounded-full border border-[#C9A84C]/30 flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#0A0906] transition-all" aria-label="Previous">
              <iconify-icon icon="solar:arrow-left-linear" />
            </button>
            <button onClick={() => setIdx((idx + 1) % STORIES.length)} className="w-12 h-12 rounded-full border border-[#C9A84C]/30 flex items-center justify-center hover:bg-[#C9A84C] hover:text-[#0A0906] transition-all" aria-label="Next">
              <iconify-icon icon="solar:arrow-right-linear" />
            </button>
          </div>
        </div>

        <div className="reveal grid lg:grid-cols-12 gap-10 items-center" key={idx}>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img src={story.image} alt={story.name} className="w-full h-full object-cover story-image" style={{ animation: "fadeIn 0.8s ease" }} />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0A0906] to-transparent">
                <div className="font-display text-3xl tracking-tight" style={{ fontWeight: 500 }}>{story.name}</div>
                <div className="font-syne text-[11px] tracking-[0.25em] uppercase text-[var(--bone-dim)] mt-1">
                  {story.age} · {story.location}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-syne text-[10px] tracking-[0.3em] uppercase text-[#C44B2B]">Before</span>
                <span className="flex-1 h-px bg-[#C44B2B]/20" />
              </div>
              <p className="font-display italic text-2xl lg:text-3xl leading-[1.3] text-[var(--bone-dim)]" style={{ fontWeight: 400 }}>
                {story.before}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-syne text-[10px] tracking-[0.3em] uppercase text-[#C9A84C]">After</span>
                <span className="flex-1 h-px bg-[#C9A84C]/30" />
              </div>
              <p className="font-display text-2xl lg:text-3xl leading-[1.3]" style={{ fontWeight: 500 }}>
                {story.after}
              </p>
            </div>

            <blockquote className="pt-6 border-t border-[#C9A84C]/15">
              <p className="font-display italic text-[#C9A84C] text-2xl leading-snug" style={{ fontWeight: 400 }}>
                "{story.quote}"
              </p>
            </blockquote>

            <div className="flex items-center gap-1.5">
              {STORIES.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)} className={`h-1 rounded-full transition-all ${i === idx ? "w-12 bg-[#C9A84C]" : "w-6 bg-[#C9A84C]/20 hover:bg-[#C9A84C]/40"}`} aria-label={`Story ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- VISION ---------- */
function Vision() {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="rise-watermark">RISE</div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <span className="eyebrow reveal">— The Vision</span>
          <h2 className="reveal font-display mt-6 leading-[0.95] tracking-tight text-balance" style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", fontWeight: 400 }}>
            The <span className="italic text-[#C9A84C]">#1 hub</span> for Algerians in America.
          </h2>
          <p className="reveal mt-10 text-lg leading-[1.85] text-[var(--bone-dim)] max-w-xl">
            We are building more than a training center. We are building a system — where every Algerian who lands in New York has a clear path from day one. Learn. Certify. Work. Belong.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#C9A84C]/10 mt-24">
          {VISION.map((v, i) => (
            <div key={i} className="reveal bg-[#0A0906] p-10 group hover:bg-[#11100B] transition-colors duration-700" data-delay={i * 80}>
              <div className="font-display text-7xl text-[#C9A84C]/30 group-hover:text-[#C9A84C] transition-colors duration-700" style={{ fontWeight: 500 }}>
                {v.num}
              </div>
              <div className="font-syne text-sm tracking-tight font-semibold mt-6">{v.label}</div>
              <div className="mt-6 w-8 h-px bg-[#C9A84C]/30 group-hover:w-16 group-hover:bg-[#C9A84C] transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCTA({ setLang }) {
  const btnRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", program: "HVAC" });

  const onMove = (e) => {
    const b = btnRef.current; if (!b) return;
    const r = b.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    b.style.transform = `translate(${x * 0.25}px, ${y * 0.4}px)`;
  };
  const onLeave = () => { if (btnRef.current) btnRef.current.style.transform = ""; };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: "", email: "", program: "HVAC" });
  };

  return (
    <section id="cta" className="relative min-h-screen flex items-center overflow-hidden vignette">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=1920&q=80')" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,9,6,0.85) 0%, rgba(10,9,6,0.7) 50%, rgba(10,9,6,0.95) 100%)" }} />

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(201,168,76,0.2), transparent 70%)" }} />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full text-center py-32">
        <span className="eyebrow reveal">— Begin</span>

        <h2 className="reveal font-display italic mt-8 leading-[0.92] tracking-tight text-balance mx-auto max-w-5xl" style={{ fontSize: "clamp(2.75rem, 8vw, 7rem)", fontWeight: 400 }}>
          Your new life in America<br/>
          <span className="text-[#C9A84C]">starts here.</span>
        </h2>

        <p className="reveal mt-10 text-lg text-[var(--bone-dim)] max-w-xl mx-auto">
          Join hundreds of Algerians who chose to rise.
        </p>

        {/* Application form */}
        <form onSubmit={handleSubmit} className="reveal mt-14 max-w-xl mx-auto glass rounded-2xl p-6 md:p-8 text-left">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="font-syne text-[10px] tracking-[0.25em] uppercase text-[var(--bone-dim)]">Full Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Ahmed Bouzid"
                className="cta-input mt-2"
              />
            </div>
            <div>
              <label className="font-syne text-[10px] tracking-[0.25em] uppercase text-[var(--bone-dim)]">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@email.com"
                className="cta-input mt-2"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="font-syne text-[10px] tracking-[0.25em] uppercase text-[var(--bone-dim)]">Program of Interest</label>
            <select
              value={form.program}
              onChange={(e) => setForm({ ...form, program: e.target.value })}
              className="cta-input mt-2"
            >
              <option>HVAC</option>
              <option>Skilled Trades</option>
              <option>Digital Skills</option>
              <option>Entrepreneurship</option>
            </select>
          </div>

          <div className="mt-6 flex justify-center" onMouseMove={onMove} onMouseLeave={onLeave}>
            <button
              ref={btnRef}
              type="submit"
              className="btn-gold gold-glow text-base px-10 py-5"
              style={{ transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s" }}
              data-magnet
            >
              {submitted ? "Application Received ✓" : "Join AlgeriaRise Now"}
              <iconify-icon icon={submitted ? "solar:check-circle-linear" : "solar:arrow-right-linear"} />
            </button>
          </div>

          {submitted && (
            <p className="text-center mt-4 font-syne text-[11px] tracking-[0.2em] uppercase text-[#C9A84C]">
              We'll be in touch within 24 hours.
            </p>
          )}
        </form>

        <div className="reveal mt-12 flex items-center justify-center gap-6 font-syne text-xs tracking-[0.2em] uppercase text-[var(--bone-dim)]">
          <button onClick={() => setLang("EN")} className="hover:text-[#C9A84C] transition-colors flex items-center gap-2"><span>🇺🇸</span> English</button>
          <span className="text-[#C9A84C]/30">·</span>
          <button onClick={() => setLang("FR")} className="hover:text-[#C9A84C] transition-colors flex items-center gap-2"><span>🇫🇷</span> Français</button>
          <span className="text-[#C9A84C]/30">·</span>
          <button onClick={() => setLang("AR")} className="hover:text-[#C9A84C] transition-colors flex items-center gap-2"><span>🇩🇿</span> العربية</button>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  const social = [
    { i: "simple-icons:instagram", l: "Instagram", url: "https://instagram.com/algeriarise" },
    { i: "simple-icons:youtube", l: "YouTube", url: "https://youtube.com/@algeriarise" },
    { i: "simple-icons:whatsapp", l: "WhatsApp", url: "https://wa.me/17185550142" },
    { i: "simple-icons:linkedin", l: "LinkedIn", url: "https://linkedin.com/company/algeriarise" },
  ];

  return (
    <footer className="relative border-t border-[#C9A84C]/10 py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="#top" onClick={(e) => handleAnchor(e, "top")} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-[#C9A84C] flex items-center justify-center">
                <span className="font-display italic text-[#C9A84C] text-sm">A</span>
              </div>
              <span className="font-syne font-semibold tracking-widest text-sm">ALGERIA<span className="text-[#C9A84C]">RISE</span></span>
            </a>
            <p className="mt-6 text-sm text-[var(--bone-dim)] leading-relaxed max-w-sm">
              A learning center and movement empowering Algerian and immigrant communities in New York City through skills, certification, and belonging.
            </p>
            <p className="mt-4 font-syne text-[10px] tracking-[0.25em] uppercase text-[var(--bone-dim)]">
              Founded by <span className="text-[#C9A84C]">Belkacem Hamitouche</span> & Akram
            </p>
            <div className="flex items-center gap-3 mt-8">
              {social.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.l}
                  className="w-10 h-10 rounded-full border border-[#C9A84C]/20 flex items-center justify-center hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
                >
                  <iconify-icon icon={s.i} width="16" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-syne text-[11px] tracking-[0.3em] uppercase text-[#C9A84C]">Visit</h4>
            <a
              href="https://maps.google.com/?q=287+Atlantic+Avenue+Brooklyn+NY+11201"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-5 text-sm text-[var(--bone-dim)] leading-relaxed hover:text-[#C9A84C] transition-colors"
            >
              287 Atlantic Avenue<br/>
              Brooklyn, NY 11201<br/>
              United States
            </a>
          </div>

          <div>
            <h4 className="font-syne text-[11px] tracking-[0.3em] uppercase text-[#C9A84C]">Contact</h4>
            <div className="mt-5 text-sm text-[var(--bone-dim)] leading-relaxed space-y-1">
              <a href="mailto:hello@algeriarise.org" className="block hover:text-[#C9A84C] transition-colors">hello@algeriarise.org</a>
              <a href="tel:+17185550142" className="block hover:text-[#C9A84C] transition-colors">+1 (718) 555-0142</a>
              <span className="block">Mon–Sat · 9am–7pm</span>
            </div>
          </div>
        </div>

        <div className="gold-rule mt-16" />

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 font-syne text-[10px] tracking-[0.25em] uppercase text-[var(--bone-dim)]">
          <span>© 2024 AlgeriaRise · Made in NYC with دارجة</span>
          <span className="flex items-center gap-4">
            <a href="#problem" onClick={(e) => handleAnchor(e, "problem")} className="hover:text-[#C9A84C] transition-colors">Privacy</a>
            <a href="#problem" onClick={(e) => handleAnchor(e, "problem")} className="hover:text-[#C9A84C] transition-colors">Terms</a>
            <a href="#stories" onClick={(e) => handleAnchor(e, "stories")} className="hover:text-[#C9A84C] transition-colors">Press</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- MAIN APP ---------- */
export default function App() {
  useReveal();
  const [progress, setProgress] = useState(0);
  const [showCTA, setShowCTA] = useState(false);
  const [lang, setLang] = useState("EN");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const p = (h.scrollTop / total) * 100;
      setProgress(p);
      setShowCTA(p > 30 && p < 92);
    };
    window.addEventListener("scroll", onScroll);
    const t = setTimeout(() => setLoaded(true), 1400);
    return () => { window.removeEventListener("scroll", onScroll); clearTimeout(t); };
  }, []);

  return (
    <>
      {!loaded && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-[#0A0906] transition-opacity duration-700" style={{ opacity: loaded ? 0 : 1 }}>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full border border-[#C9A84C] flex items-center justify-center mx-auto" style={{ animation: "fadeIn 0.8s ease" }}>
              <span className="font-display italic text-[#C9A84C] text-2xl">A</span>
            </div>
            <div className="font-syne text-[10px] tracking-[0.4em] uppercase text-[var(--bone-dim)] mt-6">Algeria Rise</div>
          </div>
        </div>
      )}

      <div className="grain" />
      <Cursor />
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <Nav lang={lang} setLang={setLang} />

      <main>
        <Hero />
        <Problem />
        <Solution />
        <Programs />
        <Authority />
        <Community />
        <Founder />
        <Stories />
        <Vision />
        <FinalCTA setLang={setLang} />
      </main>

      <Footer />

      <a
        href="#cta"
        onClick={(e) => handleAnchor(e, "cta")}
        className={`sticky-cta btn-gold ${showCTA ? "visible" : ""}`}
        data-magnet
      >
        Apply Now <iconify-icon icon="solar:arrow-right-linear" />
      </a>
    </>
  );
}