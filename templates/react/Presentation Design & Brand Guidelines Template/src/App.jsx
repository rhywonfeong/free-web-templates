import React, { useState, useEffect } from "react";
import { projects, services } from "./data";

/* ---------- Decorative Shapes ---------- */
const Shapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-[#8A5BD6] opacity-90 animate-float" />
    <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-[#2BE0A8]" />
    <div className="absolute top-24 right-32 w-12 h-12 rounded-full bg-[#D9DCDE]" />
    <div className="absolute top-40 right-72 w-44 h-44 rounded-full border-2 border-[#2AA9A6]" />
    <div className="absolute top-1/2 left-12 w-5 h-5 rounded-full bg-[#2AA9A6]" />
    <div className="absolute -bottom-40 -left-20 w-[460px] h-[460px] rounded-full bg-[#2AA9A6] opacity-90" />
    <div className="absolute bottom-32 left-1/2 w-56 h-56 rounded-full border-2 border-dashed border-[#8A5BD6] animate-spin-slow" />
    <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-[#2AA9A6]" />
  </div>
);

/* ---------- Nav ---------- */
const Nav = ({ onContact }) => (
  <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#0B1B33]/70 border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
      <a href="#top" className="flex items-center gap-2 font-display text-lg tracking-tight">
        <span className="w-3 h-3 rounded-full bg-[#2BE0A8] inline-block" />
        MARTA<span className="text-[#2BE0A8]">.</span>K
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        <a href="#work" className="hover:text-white transition">Work</a>
        <a href="#services" className="hover:text-white transition">Services</a>
        <a href="#about" className="hover:text-white transition">About</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </nav>
      <button
        onClick={onContact}
        className="text-xs font-semibold uppercase tracking-widest bg-[#2BE0A8] text-[#0B1B33] px-4 py-2 rounded-full hover:bg-white transition"
      >
        Hire Me
      </button>
    </div>
  </header>
);

/* ---------- Hero ---------- */
const Hero = () => (
  <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    <Shapes />
    <div className="relative z-10 text-center px-6 max-w-5xl">
      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60 mb-8 border border-white/10 rounded-full px-4 py-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#2BE0A8] animate-pulse-slow" />
        Available for projects — Q2 2025
      </div>
      <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight uppercase">
        <span className="text-[#2BE0A8]">Marta</span>
        <br />
        <span className="text-white">Kaminska</span>
      </h1>
      <p className="mt-8 text-xs sm:text-sm uppercase tracking-[0.4em] text-white/70 font-semibold">
        Graphic Designer · Presentation Specialist
      </p>
      <p className="mt-10 max-w-xl mx-auto text-base text-white/60 leading-relaxed">
        I design PowerPoint and Keynote decks that don't put people to sleep —
        bold, editorial, and engineered to convert.
      </p>
      <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
        <a href="#work" className="group flex items-center gap-3 bg-[#2BE0A8] text-[#0B1B33] font-semibold px-6 py-3 rounded-full hover:bg-white transition">
          See selected work
          <iconify-icon icon="solar:arrow-right-linear" width="18" />
        </a>
        <a href="#about" className="flex items-center gap-3 text-white/80 font-medium px-6 py-3 rounded-full border border-white/15 hover:border-white/40 transition">
          About me
        </a>
      </div>
    </div>
  </section>
);

/* ---------- Marquee ---------- */
const Marquee = () => {
  const items = ["PowerPoint", "Keynote", "Figma", "After Effects", "Illustrator", "InDesign", "Photoshop", "Cinema 4D"];
  return (
    <div className="relative py-10 border-y border-white/10 bg-[#0B1B33] overflow-hidden">
      <div className="marquee whitespace-nowrap">
        {[...items, ...items].map((it, i) => (
          <span key={i} className="font-display text-4xl md:text-5xl uppercase mx-8 text-white/10 hover:text-[#2BE0A8] transition">
            {it} <span className="text-[#2BE0A8]">●</span>
          </span>
        ))}
      </div>
    </div>
  );
};

/* ---------- Slide Thumbnail (16:9) ---------- */
const SlideThumb = ({ project, onOpen, index }) => {
  return (
    <button
      onClick={() => onOpen(project)}
      className="group relative text-left w-full"
    >
      <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#0F2240] group-hover:border-white/30 transition-all duration-500">
        {/* Decorative shapes inside thumb */}
        <div className="absolute inset-0 opacity-90">
          <div
            className="absolute -top-10 -right-10 w-32 h-32 rounded-full"
            style={{ background: project.color }}
          />
          <div
            className="absolute bottom-4 left-4 w-16 h-16 rounded-full"
            style={{ background: project.accent }}
          />
          <div className="absolute top-1/2 left-1/3 w-3 h-3 rounded-full bg-white/40" />
          <div
            className="absolute bottom-8 right-12 w-20 h-20 rounded-full border-2"
            style={{ borderColor: project.accent }}
          />
        </div>

        {/* Cover image (subtle overlay) */}
        <img
          src={project.cover}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
        />

        {/* Slide content */}
        <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
          <div className="flex items-start justify-between">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-semibold">
              {String(index + 1).padStart(2, "0")} / {project.category}
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">
              {project.year}
            </span>
          </div>

          <div>
            <h3 className="font-display text-3xl md:text-4xl uppercase leading-none tracking-tight">
              <span style={{ color: project.color }}>{project.title.split(" ")[0]}</span>{" "}
              <span className="text-white">{project.title.split(" ").slice(1).join(" ")}</span>
            </h3>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-semibold">
                {project.client}
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">
                {project.slides} slides
              </span>
            </div>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#0B1B33]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="flex items-center gap-3 bg-[#2BE0A8] text-[#0B1B33] font-semibold px-5 py-3 rounded-full">
            <iconify-icon icon="solar:play-linear" width="18" />
            View presentation
          </div>
        </div>
      </div>
    </button>
  );
};

/* ---------- Work Grid ---------- */
const Work = ({ onOpen }) => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map(p => p.category))];
  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="work" className="relative py-24 md:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-[#2BE0A8] font-semibold">
              ⟶ Selected Work
            </span>
            <h2 className="mt-4 font-display text-5xl md:text-7xl uppercase tracking-tight leading-[0.95]">
              Decks that<br />
              <span className="text-[#2BE0A8]">don't suck.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition ${
                  filter === c
                    ? "bg-[#2BE0A8] text-[#0B1B33] border-[#2BE0A8]"
                    : "border-white/15 text-white/70 hover:border-white/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filtered.map((p, i) => (
            <SlideThumb key={p.id} project={p} index={i} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Modal ---------- */
const Modal = ({ project, onClose }) => {
  const [slide, setSlide] = useState(0);
  const totalPreview = 6;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setSlide(s => (s + 1) % totalPreview);
      if (e.key === "ArrowLeft") setSlide(s => (s - 1 + totalPreview) % totalPreview);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0B1B33]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
      >
        <iconify-icon icon="solar:close-circle-linear" width="22" />
      </button>

      <div className="relative w-full max-w-6xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/50">
              {project.category} · {project.client}
            </span>
            <h3 className="mt-1 font-display text-3xl md:text-4xl uppercase tracking-tight">
              <span style={{ color: project.color }}>{project.title.split(" ")[0]}</span>{" "}
              {project.title.split(" ").slice(1).join(" ")}
            </h3>
          </div>
          <div className="text-xs uppercase tracking-widest text-white/60">
            Slide {slide + 1} / {totalPreview}
          </div>
        </div>

        {/* Slide viewer 16:9 */}
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#0F2240]">
          <div className="absolute inset-0">
            <div
              className="absolute rounded-full"
              style={{
                background: project.color,
                width: 180 + slide * 30,
                height: 180 + slide * 30,
                top: -60,
                right: -40 + slide * 20,
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                background: project.accent,
                width: 120,
                height: 120,
                bottom: 40,
                left: 60 + slide * 40,
              }}
            />
            <div className="absolute bottom-10 right-20 w-32 h-32 rounded-full border-2 border-dashed border-white/30 animate-spin-slow" />
          </div>
          <div className="relative h-full flex flex-col justify-center items-center text-center p-12">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 mb-4">
              {project.client} — {project.year}
            </span>
            <h4 className="font-display text-5xl md:text-7xl uppercase tracking-tight leading-[0.9]">
              {slide === 0 && <><span style={{ color: project.color }}>Intro</span> Slide</>}
              {slide === 1 && <><span style={{ color: project.color }}>The</span> Problem</>}
              {slide === 2 && <><span style={{ color: project.color }}>Our</span> Solution</>}
              {slide === 3 && <><span style={{ color: project.color }}>Market</span> Size</>}
              {slide === 4 && <><span style={{ color: project.color }}>The</span> Team</>}
              {slide === 5 && <><span style={{ color: project.color }}>Thank</span> You</>}
            </h4>
            <p className="mt-6 max-w-md text-sm text-white/60">
              {project.description}
            </p>
          </div>

          {/* Navigation */}
          <button
            onClick={() => setSlide(s => (s - 1 + totalPreview) % totalPreview)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
          >
            <iconify-icon icon="solar:arrow-left-linear" width="20" />
          </button>
          <button
            onClick={() => setSlide(s => (s + 1) % totalPreview)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
          >
            <iconify-icon icon="solar:arrow-right-linear" width="20" />
          </button>
        </div>

        {/* Meta */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Client</div>
            <div className="text-white font-medium">{project.client}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Year</div>
            <div className="text-white font-medium">{project.year}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Slides</div>
            <div className="text-white font-medium">{project.slides}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Tools</div>
            <div className="text-white font-medium">{project.tools.join(", ")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- Services ---------- */
const Services = () => (
  <section id="services" className="relative py-24 md:py-32 px-6 lg:px-10 border-t border-white/10">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.4em] text-[#2BE0A8] font-semibold">⟶ Services</span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl uppercase tracking-tight leading-[0.95]">
            What I<br /><span className="text-[#8A5BD6]">build.</span>
          </h2>
        </div>
        <p className="md:max-w-md text-white/60 leading-relaxed">
          Whether it's a 12-slide pitch or a 90-slide annual report, I design decks that respect
          your audience's time and your brand's voice.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s, i) => (
          <div
            key={i}
            className="group relative p-8 rounded-2xl border border-white/10 hover:border-[#2BE0A8]/60 bg-[#0F2240]/40 hover:bg-[#0F2240] transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-[#2BE0A8]/10 group-hover:bg-[#2BE0A8] text-[#2BE0A8] group-hover:text-[#0B1B33] flex items-center justify-center transition mb-6">
              <iconify-icon icon={s.icon} width="22" />
            </div>
            <h3 className="font-display text-xl uppercase tracking-tight mb-2">{s.title}</h3>
            <p className="text-sm text-white/55 leading-relaxed">{s.desc}</p>
            <div className="absolute top-6 right-6 text-[10px] uppercase tracking-widest text-white/30">
              0{i + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- About ---------- */
const About = () => (
  <section id="about" className="relative py-24 md:py-32 px-6 lg:px-10 border-t border-white/10">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
      <div className="relative">
        <div className="relative aspect-square rounded-3xl overflow-hidden">
          <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-[#8A5BD6]" />
          <div className="absolute -bottom-8 -right-8 w-56 h-56 rounded-full bg-[#2BE0A8]" />
          <div className="absolute inset-8 rounded-2xl overflow-hidden bg-[#0F2240]">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
              alt="Marta Kaminska"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-1/2 right-2 w-6 h-6 rounded-full bg-[#2AA9A6]" />
        </div>
      </div>

      <div>
        <span className="text-xs uppercase tracking-[0.4em] text-[#2BE0A8] font-semibold">⟶ About</span>
        <h2 className="mt-4 font-display text-5xl md:text-6xl uppercase tracking-tight leading-[0.95]">
          Eight years.<br /><span className="text-[#2BE0A8]">200+ decks.</span>
        </h2>
        <p className="mt-8 text-white/70 leading-relaxed">
          I'm Marta — a Warsaw-based graphic designer obsessed with one specific problem:
          why are so many presentations so bad? I work with startups, agencies, and Fortune 500
          teams to build decks that actually communicate.
        </p>
        <p className="mt-4 text-white/60 leading-relaxed">
          Previously at Wieden+Kennedy, Pentagram (intern), and lead designer at Brand24.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-6">
          {[
            { n: "8+", l: "Years" },
            { n: "220", l: "Decks shipped" },
            { n: "47", l: "Happy clients" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl text-[#2BE0A8]">{s.n}</div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-white/50">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------- Contact ---------- */
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: "", email: "", msg: "" }); }, 3000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 lg:px-10 border-t border-white/10 overflow-hidden">
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#8A5BD6]/20 blur-3xl" />
      <div className="absolute -top-32 -left-20 w-72 h-72 rounded-full bg-[#2BE0A8]/20 blur-3xl" />

      <div className="relative max-w-5xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.4em] text-[#2BE0A8] font-semibold">⟶ Let's work</span>
        <h2 className="mt-4 font-display text-5xl md:text-8xl uppercase tracking-tight leading-[0.9]">
          Got a deck<br /><span className="text-[#2BE0A8]">to fix?</span>
        </h2>
        <p className="mt-6 max-w-lg mx-auto text-white/60">
          Drop a message and I'll respond within 24 hours. Most projects start within 2 weeks.
        </p>

        <form onSubmit={submit} className="mt-12 max-w-2xl mx-auto grid gap-4 text-left">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#2BE0A8] transition"
            />
            <input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#2BE0A8] transition"
            />
          </div>
          <textarea
            rows="4"
            placeholder="Tell me about your project..."
            value={form.msg}
            onChange={(e) => setForm({ ...form, msg: e.target.value })}
            className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#2BE0A8] transition resize-none"
          />
          <button
            type="submit"
            disabled={sent}
            className="mt-2 flex items-center justify-center gap-3 bg-[#2BE0A8] text-[#0B1B33] font-semibold px-8 py-4 rounded-full hover:bg-white transition disabled:opacity-70"
          >
            {sent ? (
              <>
                <iconify-icon icon="solar:check-circle-bold" width="20" /> Message sent!
              </>
            ) : (
              <>
                Send message <iconify-icon icon="solar:arrow-right-linear" width="18" />
              </>
            )}
          </button>
        </form>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
          <a href="mailto:hello@martakaminska.com" className="hover:text-[#2BE0A8] transition flex items-center gap-2">
            <iconify-icon icon="solar:letter-linear" width="18" /> hello@martakaminska.com
          </a>
          <a href="#" className="hover:text-[#2BE0A8] transition flex items-center gap-2">
            <iconify-icon icon="simple-icons:behance" width="18" /> Behance
          </a>
          <a href="#" className="hover:text-[#2BE0A8] transition flex items-center gap-2">
            <iconify-icon icon="simple-icons:dribbble" width="18" /> Dribbble
          </a>
          <a href="#" className="hover:text-[#2BE0A8] transition flex items-center gap-2">
            <iconify-icon icon="simple-icons:linkedin" width="18" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

/* ---------- Footer ---------- */
const Footer = () => (
  <footer className="border-t border-white/10 py-10 px-6 lg:px-10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-xs uppercase tracking-widest text-white/40">
      <span>© 2025 Marta Kaminska — Warsaw, PL</span>
      <span>Designed & built with care · Last update 03 / 25</span>
    </div>
  </footer>
);

/* ---------- App ---------- */
export default function App() {
  const [active, setActive] = useState(null);

  return (
    <div className="min-h-screen bg-[#0B1B33] text-white font-body">
      <Nav onContact={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} />
      <Hero />
      <Marquee />
      <Work onOpen={setActive} />
      <Services />
      <About />
      <Contact />
      <Footer />
      {active && <Modal project={active} onClose={() => setActive(null)} />}
    </div>
  );
}