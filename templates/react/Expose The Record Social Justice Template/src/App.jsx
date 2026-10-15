import React, { useState, useEffect, useMemo } from "react";
import { VIDEOS, STATS } from "./data.js";

/* ---------------- Navbar ---------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#07090f]/90 backdrop-blur-md border-b border-red-900/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <iconify-icon
            icon="solar:shield-warning-bold"
            class="text-red-600 text-2xl"
          ></iconify-icon>
          <span className="font-display font-bold text-lg tracking-tight text-white">
            Expose<span className="text-red-600">TheRecord</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-body text-gray-300">
          <a href="#videos" className="hover:text-white transition-colors">
            The Evidence
          </a>
          <a href="#stats" className="hover:text-white transition-colors">
            The Numbers
          </a>
          <a href="#mission" className="hover:text-white transition-colors">
            Our Mission
          </a>
        </nav>
        <a
          href="#videos"
          className="bg-red-700 hover:bg-red-600 text-white text-sm font-semibold px-5 py-2 rounded-sm transition-colors pulse-red"
        >
          Take Action
        </a>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero({ onPlay }) {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80"
          alt=""
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090f] via-[#07090f]/80 to-[#07090f]" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/40 to-blue-950/30" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center w-full py-16">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-red-500 font-semibold mb-5">
            <iconify-icon icon="solar:danger-triangle-bold"></iconify-icon>
            A Documented Pattern of Racism
          </span>
          <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight tracking-tight text-white">
            The Words.
            <br />
            The Policies.
            <br />
            <span className="text-red-600">The Damage.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-gray-300 mt-6 max-w-xl leading-relaxed">
            Donald Trump and his administration built a record of racism — from
            cages at the border to defending neo-Nazis as “very fine people.”
            This is the evidence, in their own words. Watch. Reflect. Act.
          </p>
          <div className="flex flex-wrap gap-4 mt-9">
            <button
              onClick={() => onPlay(VIDEOS[0])}
              className="inline-flex items-center gap-3 bg-red-700 hover:bg-red-600 text-white font-semibold px-7 py-3.5 rounded-sm transition-all hover:scale-105 shadow-lg shadow-red-900/40"
            >
              <iconify-icon icon="solar:play-circle-bold" class="text-xl"></iconify-icon>
              Watch the Evidence
            </button>
            <a
              href="#videos"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-semibold px-7 py-3.5 rounded-sm transition-colors"
            >
              View the Library
            </a>
          </div>
        </div>

        {/* Big hero video */}
        <div className="animate-scale-in">
          <button
            onClick={() => onPlay(VIDEOS[0])}
            className="group relative block w-full rounded-md overflow-hidden border border-red-900/50 shadow-2xl shadow-black"
          >
            <img
              src={VIDEOS[0].thumb}
              alt={VIDEOS[0].title}
              className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="w-20 h-20 rounded-full bg-red-700/90 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform pulse-red">
                <iconify-icon icon="solar:play-bold" class="text-white text-3xl"></iconify-icon>
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
              <span className="text-xs uppercase tracking-widest text-red-400 font-semibold">
                {VIDEOS[0].label}
              </span>
              <h3 className="font-display text-white text-lg md:text-xl tracking-tight mt-1">
                {VIDEOS[0].title}
              </h3>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */
function Stats() {
  return (
    <section id="stats" className="relative py-20">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1600&q=80"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-blue-950/40" />
      </div>
      <div className="relative max-w-6xl mx-auto px-5">
        <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight text-white text-center mb-12">
          The Numbers Don’t Lie
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-md p-7 text-center hover:border-red-700/60 transition-colors"
            >
              <div className="font-display font-bold text-3xl md:text-4xl text-red-500 tracking-tight">
                {s.value}
              </div>
              <p className="font-body text-gray-300 mt-3 text-sm leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Video Library ---------------- */
function VideoLibrary({ onPlay }) {
  return (
    <section id="videos" className="relative py-24 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-red-700 font-semibold">
            The Evidence
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight mt-3">
            Watch It For Yourself
          </h2>
          <p className="font-body text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            A library of videos and sermons confronting the racism of the Trump
            administration — and calling us toward justice. Each video opens
            with an option to support the work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {VIDEOS.map((v) => (
            <button
              key={v.id}
              onClick={() => onPlay(v)}
              className="group text-left bg-white rounded-md overflow-hidden border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={v.thumb}
                  alt={v.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                <span className="absolute top-3 left-3 bg-red-700 text-white text-[0.65rem] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-sm">
                  {v.label}
                </span>
                <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-0.5 rounded-sm">
                  {v.duration}
                </span>
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <iconify-icon
                      icon="solar:play-bold"
                      class="text-red-700 text-2xl"
                    ></iconify-icon>
                  </span>
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg tracking-tight leading-snug group-hover:text-red-700 transition-colors">
                  {v.title}
                </h3>
                <p className="font-body text-gray-600 mt-2 text-sm leading-relaxed line-clamp-3">
                  {v.summary}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Mission ---------------- */
function Mission() {
  return (
    <section id="mission" className="relative py-28">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1600&q=80"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090f] via-red-950/30 to-[#07090f]" />
      </div>
      <div className="relative max-w-3xl mx-auto px-5 text-center">
        <iconify-icon
          icon="solar:hand-heart-bold"
          class="text-red-600 text-5xl"
        ></iconify-icon>
        <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-white mt-5">
          Silence Is Complicity
        </h2>
        <p className="font-body text-lg md:text-xl text-gray-300 mt-6 leading-relaxed">
          We document the record so it can never be denied or forgotten. Your
          support funds education, community sermons, legal advocacy for
          targeted families, and the production of more truth-telling video.
          Every dollar fuels the fight against racism.
        </p>
        <a
          href="#videos"
          className="inline-flex items-center gap-2 mt-9 bg-red-700 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-sm transition-all hover:scale-105 shadow-lg shadow-red-900/40"
        >
          <iconify-icon icon="solar:heart-bold"></iconify-icon>
          Donate &amp; Watch
        </a>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="bg-[#05060a] border-t border-red-900/30 py-10">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 font-body">
        <div className="flex items-center gap-2">
          <iconify-icon icon="solar:shield-warning-bold" class="text-red-600"></iconify-icon>
          <span className="font-display text-white">ExposeTheRecord</span>
        </div>
        <p className="text-center">
          An independent, donor-funded education project. Quotes are sourced
          from public statements and reporting.
        </p>
        <div className="flex gap-4 text-xl">
          <a href="#" aria-label="X" className="hover:text-white transition-colors">
            <iconify-icon icon="simple-icons:x"></iconify-icon>
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-white transition-colors">
            <iconify-icon icon="simple-icons:youtube"></iconify-icon>
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
            <iconify-icon icon="simple-icons:facebook"></iconify-icon>
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Video + Donate Modal ---------------- */
const PRESETS = [10, 25, 50, 100];

function VideoModal({ video, onClose }) {
  const [amount, setAmount] = useState(25);
  const [custom, setCustom] = useState("");
  const [recurring, setRecurring] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const finalAmount = useMemo(() => {
    const c = parseFloat(custom);
    return custom !== "" && !isNaN(c) ? c : amount;
  }, [custom, amount]);

  const handleDonate = (e) => {
    e.preventDefault();
    const err = {};
    if (!name.trim()) err.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) err.email = "Enter a valid email.";
    if (!finalAmount || finalAmount < 1) err.amount = "Choose an amount of $1 or more.";
    setErrors(err);
    if (Object.keys(err).length === 0) setDone(true);
  };

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-4 overflow-y-auto bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#0c0e15] border border-red-900/40 rounded-lg overflow-hidden animate-scale-in my-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-red-700 text-white flex items-center justify-center transition-colors"
        >
          <iconify-icon icon="solar:close-circle-bold" class="text-2xl"></iconify-icon>
        </button>

        <div className="grid lg:grid-cols-5">
          {/* Video side */}
          <div className="lg:col-span-3 p-5 md:p-7">
            <span className="text-xs uppercase tracking-widest text-red-500 font-semibold">
              {video.label}
            </span>
            <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight text-white mt-1 leading-snug">
              {video.title}
            </h3>
            <div className="mt-4 rounded-md overflow-hidden border border-white/10 bg-black">
              <iframe
                title={video.title}
                src={video.embed}
                className="w-full aspect-video"
                allow="accelerated-getformation; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="font-body text-gray-300 mt-4 leading-relaxed">
              {video.summary}
            </p>
            <blockquote className="border-l-4 border-red-700 pl-4 mt-4 italic font-body text-gray-200">
              {video.quote}
            </blockquote>
            <div className="flex items-start gap-2 mt-4 text-sm text-blue-300 font-body">
              <iconify-icon icon="solar:info-circle-bold" class="mt-0.5"></iconify-icon>
              <span>{video.fact}</span>
            </div>
          </div>

          {/* Donate side */}
          <div className="lg:col-span-2 bg-gradient-to-b from-red-950/40 to-blue-950/30 border-t lg:border-t-0 lg:border-l border-white/10 p-5 md:p-7">
            {done ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <iconify-icon icon="solar:heart-bold" class="text-red-500 text-5xl"></iconify-icon>
                <h4 className="font-display font-bold text-xl tracking-tight text-white mt-4">
                  Thank You, {name.split(" ")[0]}!
                </h4>
                <p className="font-body text-gray-300 mt-3">
                  Your {recurring ? "monthly " : ""}gift of{" "}
                  <span className="text-red-400 font-semibold">
                    ${finalAmount.toFixed(2)}
                  </span>{" "}
                  helps expose the record and fight racism.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 bg-white text-gray-900 font-semibold px-6 py-2.5 rounded-sm hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleDonate}>
                <h4 className="font-display font-bold text-lg tracking-tight text-white flex items-center gap-2">
                  <iconify-icon icon="solar:hand-heart-bold" class="text-red-500"></iconify-icon>
                  Stand Against Racism
                </h4>
                <p className="font-body text-gray-300 text-sm mt-2">
                  Fund the production of truth. Choose an amount:
                </p>

                <div className="grid grid-cols-4 gap-2 mt-4">
                  {PRESETS.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => {
                        setAmount(p);
                        setCustom("");
                      }}
                      className={`py-2.5 rounded-sm font-semibold text-sm transition-all ${
                        custom === "" && amount === p
                          ? "bg-red-700 text-white scale-105"
                          : "bg-white/10 text-gray-200 hover:bg-white/20"
                      }`}
                    >
                      ${p}
                    </button>
                  ))}
                </div>

                <div className="relative mt-3">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    $
                  </span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Custom amount"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 rounded-sm py-2.5 pl-7 pr-3 text-white font-body focus:outline-none focus:border-red-600"
                  />
                </div>
                {errors.amount && (
                  <p className="text-red-400 text-xs mt-1 font-body">{errors.amount}</p>
                )}

                <label className="flex items-center gap-3 mt-4 cursor-pointer select-none">
                  <span
                    onClick={() => setRecurring((r) => !r)}
                    className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-colors ${
                      recurring ? "bg-red-700" : "bg-white/20"
                    }`}
                  >
                    <span
                      className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        recurring ? "translate-x-5" : ""
                      }`}
                    />
                  </span>
                  <span className="font-body text-sm text-gray-200">
                    Make this a monthly gift
                  </span>
                </label>

                <div className="mt-4 space-y-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-sm py-2.5 px-3 text-white font-body focus:outline-none focus:border-red-600"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1 font-body">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded-sm py-2.5 px-3 text-white font-body focus:outline-none focus:border-red-600"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1 font-body">{errors.email}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-5 bg-red-700 hover:bg-red-600 text-white font-semibold py-3 rounded-sm transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <iconify-icon icon="solar:hand-money-bold"></iconify-icon>
                  Donate ${finalAmount ? finalAmount.toFixed(2) : "0.00"}
                  {recurring ? "/mo" : ""}
                </button>
                <p className="text-center text-gray-500 text-xs mt-3 font-body">
                  Secure demo form — no real payment is processed.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- App ---------------- */
export default function App() {
  const [active, setActive] = useState(null);
  return (
    <div className="font-body">
      <Navbar />
      <Hero onPlay={setActive} />
      <Stats />
      <VideoLibrary onPlay={setActive} />
      <Mission />
      <Footer />
      {active && <VideoModal video={active} onClose={() => setActive(null)} />}
    </div>
  );
}