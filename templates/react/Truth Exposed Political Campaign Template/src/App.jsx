import { useState, useEffect, useRef } from "react";
import "iconify-icon";
import { videos, facts, quotes, donationAmounts } from "./data.js";

// ── Ticker ──────────────────────────────────────────────────────────────────
function Ticker() {
  const items = [
    "⚠ 30,573 DOCUMENTED LIES",
    "☠ JANUARY 6TH INSURRECTION",
    "⚠ 91 CRIMINAL COUNTS",
    "☠ FAMILY SEPARATION POLICY",
    "⚠ COVID MISMANAGEMENT: 1M DEAD",
    "☠ CLIMATE DENIAL",
    "⚠ $454M CIVIL FRAUD JUDGMENT",
    "☠ NUCLEAR SECRETS STOLEN",
  ];
  return (
    <div className="bg-red-900 border-y border-red-700 py-2 overflow-hidden relative z-10">
      <div className="marquee-text text-xs font-semibold tracking-widest text-red-200 flex gap-16">
        {items.map((item, i) => (
          <span key={i} className="mr-16">{item}</span>
        ))}
        {items.map((item, i) => (
          <span key={`b${i}`} className="mr-16">{item}</span>
        ))}
      </div>
    </div>
  );
}

// ── Navbar ───────────────────────────────────────────────────────────────────
function Navbar({ onOpenDonate }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={"transition-all duration-500 bg-transparent pt-4 pb-4 top-0 right-0 left-0"}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="cult-title text-xl text-red-500 flicker tracking-tight">
          ☠ Evangelical
        </div>
        <div className="hidden md:flex items-center gap-8 text-xs tracking-widest text-red-200/80">
          <a href="#facts" className="hover:text-red-400 transition-colors">EVIDENCE</a>
          <a href="#videos" className="hover:text-red-400 transition-colors">VIDEOS</a>
          <a href="#quotes" className="hover:text-red-400 transition-colors">TESTIMONIALS</a>
          <button
            onClick={onOpenDonate}
            className="btn-danger px-5 py-2 rounded text-xs text-white tracking-widest font-semibold"
          >
            DONATE NOW
          </button>
        </div>
        <button
          onClick={onOpenDonate}
          className="md:hidden btn-danger px-4 py-1.5 rounded text-xs text-white"
        >
          DONATE
        </button>
      </div>
    </nav>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ onOpenDonate }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* BG */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1532297366862-018e4592c813?w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-red-950/70 to-black" />

      {/* Dramatic red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-800/30 rounded-full blur-3xl pointer-events-none" />

      <div className="z-10 text-center max-w-5xl mx-auto pt-24 pr-6 pb-24 pl-6 relative">
        <div className="inline-block border border-red-700 bg-red-950/60 px-4 py-1.5 rounded mb-6 text-xs tracking-widest text-red-300 uppercase">
          ⚠ The Truth They Don't Want You To See ⚠
        </div>

        <h1 className="cult-title text-5xl md:text-7xl lg:text-8xl text-white text-shadow-red leading-tight mb-6 tracking-tight">
          THE DANGER
          <span className="block text-red-500 flicker">IS REAL</span>
        </h1>

        <p className="fell-text text-xl md:text-2xl text-red-100/90 max-w-2xl mx-auto mb-10 leading-relaxed italic">
          "One man's unchecked ambition has threatened democracy itself. 
          Watch. Learn. Act before it's too late."
        </p>

        {/* Hero Video */}
        <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-red-800/60 shadow-2xl pulse-red mb-10">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/c9bYHiDqMYo?autoplay=0&rel=0&modestbranding=1"
              title="Trump Exposed - Hero Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="absolute top-3 left-3 bg-red-700 text-white text-xs px-3 py-1 rounded font-semibold tracking-widest">
            ● MUST WATCH
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onOpenDonate}
            className="btn-danger px-8 py-4 rounded-lg text-white font-semibold text-sm tracking-widest"
          >
            <iconify-icon icon="solar:heart-bold" class="mr-2" />
            DONATE TO RESIST
          </button>
          <a
            href="#videos"
            className="border border-red-700 hover:border-red-500 bg-white/5 hover:bg-white/10 transition-all px-8 py-4 rounded-lg text-white font-semibold text-sm tracking-widest"
          >
            <iconify-icon icon="solar:play-bold" class="mr-2" />
            SEE ALL EVIDENCE
          </a>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-red-400/60 text-xs tracking-widest animate-bounce">
        <span>SCROLL DOWN</span>
        <iconify-icon icon="solar:alt-arrow-down-bold" width="20" />
      </div>
    </section>
  );
}

// ── Facts Bar ─────────────────────────────────────────────────────────────────
function FactsBar() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setAnimated(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="facts" ref={ref} className="relative py-16 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80')" }}
      />
      <div className="absolute inset-0 bg-black/85" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="cult-title text-3xl md:text-4xl text-center text-white mb-12 tracking-tight text-shadow-red">
          BY THE <span className="text-red-500">NUMBERS</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {facts.map((f, i) => (
            <div
              key={i}
              className={`card-hover bg-gradient-to-br from-red-950/80 to-black/80 border border-red-800/50 rounded-2xl p-6 text-center ${animated ? "fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <iconify-icon icon={f.icon} width="36" class="text-red-500 mb-3 block mx-auto" />
              <div className="cult-title text-2xl md:text-3xl text-white mb-2 tracking-tight">{f.number}</div>
              <div className="text-xs text-red-300 tracking-widest uppercase">{f.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Video Modal ───────────────────────────────────────────────────────────────
function VideoModal({ video, onClose }) {
  const [donationTab, setDonationTab] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [card, setCard] = useState("");
  const [donated, setDonated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Name is required";
    if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) e.email = "Valid email required";
    if (!card.match(/^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/)) e.card = "Valid card number required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleDonate = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDonated(true);
    }, 1800);
  };

  return (
    <div
      className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-5xl bg-gradient-to-br from-gray-950 via-red-950/40 to-black border border-red-800/60 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-red-900/50 bg-black/60">
          <div className="flex items-center gap-3">
            <span className="bg-red-700 text-white text-xs px-2 py-0.5 rounded font-semibold tracking-widest">{video.tag}</span>
            <span className="text-xs text-red-300 tracking-widest">{video.category}</span>
          </div>
          <button onClick={onClose} className="text-red-400 hover:text-white transition-colors text-2xl">
            <iconify-icon icon="solar:close-circle-bold" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-red-900/40">
          <button
            onClick={() => setDonationTab(false)}
            className={`flex-1 py-3 text-sm tracking-widest font-semibold transition-colors ${!donationTab ? "text-white border-b-2 border-red-600 bg-red-950/30" : "text-red-400 hover:text-red-300"}`}
          >
            <iconify-icon icon="solar:play-circle-bold" class="mr-2" />
            WATCH VIDEO
          </button>
          <button
            onClick={() => setDonationTab(true)}
            className={`flex-1 py-3 text-sm tracking-widest font-semibold transition-colors ${donationTab ? "text-white border-b-2 border-red-600 bg-red-950/30" : "text-red-400 hover:text-red-300"}`}
          >
            <iconify-icon icon="solar:heart-bold" class="mr-2" />
            DONATE & RESIST
          </button>
        </div>

        <div className="p-6">
          {!donationTab ? (
            <div>
              <div className="aspect-video rounded-xl overflow-hidden mb-4 border border-red-900/40">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="cult-title text-xl md:text-2xl text-white mb-3 tracking-tight">{video.title}</h3>
              <p className="fell-text text-red-100/80 text-lg italic mb-4">{video.description}</p>
              <div className="flex items-center gap-4 text-xs text-red-400 tracking-widest mb-6">
                <span><iconify-icon icon="solar:eye-bold" class="mr-1" />{video.views} views</span>
                <span><iconify-icon icon="solar:tag-bold" class="mr-1" />{video.category}</span>
              </div>
              <button
                onClick={() => setDonationTab(true)}
                className="btn-danger w-full py-4 rounded-xl text-white font-semibold tracking-widest text-sm"
              >
                <iconify-icon icon="solar:heart-bold" class="mr-2" />
                MOVED BY THIS? DONATE TO MAKE A DIFFERENCE
              </button>
            </div>
          ) : (
            <div className="max-w-xl mx-auto">
              {donated ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-6">🕊️</div>
                  <h3 className="cult-title text-3xl text-red-400 mb-4 tracking-tight">Thank You, Patriot</h3>
                  <p className="fell-text text-red-100/80 text-xl italic mb-6">
                    Your donation of <strong className="text-white">${finalAmount}</strong> helps fund the resistance against authoritarianism. Together we stand.
                  </p>
                  <button onClick={onClose} className="btn-danger px-8 py-3 rounded-lg text-white font-semibold text-sm tracking-widest">
                    CONTINUE WATCHING
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="cult-title text-2xl text-white text-center mb-2 tracking-tight">
                    Stand Against <span className="text-red-500">Tyranny</span>
                  </h3>
                  <p className="fell-text text-red-200/70 text-center italic mb-8 text-lg">
                    Every dollar funds truth, accountability, and democratic resistance.
                  </p>

                  {/* Amount Selector */}
                  <div className="mb-6">
                    <label className="text-xs text-red-300 tracking-widest mb-3 block">SELECT AMOUNT</label>
                    <div className="grid grid-cols-3 gap-3 mb-3">
                      {donationAmounts.map((amt) => (
                        <button
                          key={amt}
                          onClick={() => { setSelectedAmount(amt); setCustomAmount(""); }}
                          className={`py-3 rounded-lg text-sm font-semibold tracking-wider transition-all border ${
                            selectedAmount === amt && !customAmount
                              ? "bg-red-700 border-red-500 text-white shadow-lg shadow-red-900/50"
                              : "bg-red-950/40 border-red-800/40 text-red-300 hover:border-red-600 hover:text-white"
                          }`}
                        >
                          ${amt}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-red-400 font-semibold">$</span>
                      <input
                        type="number"
                        placeholder="Custom amount"
                        value={customAmount}
                        onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                        className="w-full bg-red-950/30 border border-red-800/50 focus:border-red-500 outline-none rounded-lg pl-8 pr-4 py-3 text-white text-sm placeholder-red-700 transition-colors"
                      />
                    </div>
                  </div>

                  <form onSubmit={handleDonate} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-red-950/30 border border-red-800/50 focus:border-red-500 outline-none rounded-lg px-4 py-3 text-white text-sm placeholder-red-700 transition-colors"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-red-950/30 border border-red-800/50 focus:border-red-500 outline-none rounded-lg px-4 py-3 text-white text-sm placeholder-red-700 transition-colors"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <div className="relative">
                        <iconify-icon icon="solar:card-bold" class="absolute left-4 top-1/2 -translate-y-1/2 text-red-500" width="18" />
                        <input
                          type="text"
                          placeholder="Card Number (16 digits)"
                          value={card}
                          onChange={(e) => setCard(e.target.value)}
                          maxLength={19}
                          className="w-full bg-red-950/30 border border-red-800/50 focus:border-red-500 outline-none rounded-lg pl-10 pr-4 py-3 text-white text-sm placeholder-red-700 transition-colors"
                        />
                      </div>
                      {errors.card && <p className="text-red-500 text-xs mt-1">{errors.card}</p>}
                    </div>

                    <div className="bg-red-950/40 border border-red-900/40 rounded-xl p-4 flex items-center justify-between">
                      <span className="text-red-300 text-xs tracking-widest">YOUR IMPACT TODAY</span>
                      <span className="cult-title text-2xl text-white">${finalAmount || 0}</span>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-danger w-full py-4 rounded-xl text-white font-semibold tracking-widest text-sm disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <iconify-icon icon="solar:spinner-bold" class="animate-spin" />
                          PROCESSING...
                        </>
                      ) : (
                        <>
                          <iconify-icon icon="solar:heart-bold" />
                          DONATE ${finalAmount || 0} NOW
                        </>
                      )}
                    </button>

                    <p className="text-center text-red-400/60 text-xs">
                      <iconify-icon icon="solar:lock-bold" class="mr-1" />
                      Secure & encrypted. Demo purposes only.
                    </p>
                  </form>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Videos Section ────────────────────────────────────────────────────────────
function VideosSection() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Democracy", "Corruption", "Human Rights", "Environment", "Public Health"];
  const filtered = filter === "All" ? videos : videos.filter((v) => v.category === filter);

  return (
    <section id="videos" className="relative py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=1600&q=80')" }}
      />
      <div className="absolute inset-0 bg-black/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-block border border-red-700 bg-red-950/40 px-4 py-1 rounded mb-4 text-xs tracking-widest text-red-300">
            THE EVIDENCE ARCHIVE
          </div>
          <h2 className="cult-title text-4xl md:text-5xl text-white mb-4 tracking-tight text-shadow-red">
            WATCH THE <span className="text-red-500">TRUTH</span>
          </h2>
          <p className="fell-text text-xl text-red-100/70 italic max-w-xl mx-auto">
            Documented. Verified. Undeniable. These videos contain critical evidence every American must see.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs tracking-widest font-semibold border transition-all ${
                filter === cat
                  ? "bg-red-700 border-red-500 text-white"
                  : "bg-transparent border-red-800/50 text-red-400 hover:border-red-600 hover:text-red-200"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((video) => (
            <div
              key={video.id}
              className="card-hover bg-gradient-to-br from-red-950/60 to-black/80 border border-red-800/40 rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setActiveVideo(video)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-red-700/90 rounded-full flex items-center justify-center pulse-red">
                    <iconify-icon icon="solar:play-bold" width="28" class="text-white ml-1" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-red-700 text-white text-xs px-2 py-0.5 rounded font-semibold tracking-widest">
                  {video.tag}
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-red-300 text-xs px-2 py-0.5 rounded tracking-wider">
                  <iconify-icon icon="solar:eye-bold" class="mr-1" />{video.views}
                </div>
              </div>
              <div className="p-5">
                <div className="text-xs text-red-500 tracking-widest mb-2 font-semibold">{video.category.toUpperCase()}</div>
                <h3 className="cult-title text-base text-white mb-2 leading-snug tracking-tight line-clamp-2">
                  {video.title}
                </h3>
                <p className="fell-text text-sm text-red-100/60 italic line-clamp-2">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}
    </section>
  );
}

// ── Quotes ────────────────────────────────────────────────────────────────────
function QuotesSection({ onOpenDonate }) {
  const [activeIdx, setActiveIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveIdx((i) => (i + 1) % quotes.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="quotes" className="relative py-24 overflow-hidden">
      <div
        className="absolute opacity-0 inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1600&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/92 via-red-950/60 to-black/92" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block border border-red-700 bg-red-950/40 px-4 py-1 rounded mb-8 text-xs tracking-widest text-red-300">
          THOSE WHO SERVED WITH HIM SPEAK OUT
        </div>

        <div className="relative min-h-48">
          {quotes.map((q, i) => (
            <div
              key={i}
              className={`transition-all duration-700 absolute inset-0 flex flex-col items-center justify-center ${
                i === activeIdx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
              }`}
            >
              <iconify-icon icon="solar:quote-up-bold" width="48" class="text-red-700 mb-6 opacity-60" />
              <blockquote className="fell-text text-2xl md:text-3xl text-white italic leading-relaxed mb-6 text-shadow-red">
                "{q.text}"
              </blockquote>
              <cite className="text-red-400 text-xs tracking-widest not-italic font-semibold">
                — {q.author}
              </cite>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-16 mb-12">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === activeIdx ? "bg-red-500 scale-125" : "bg-red-900 hover:bg-red-700"}`}
            />
          ))}
        </div>

        <button
          onClick={onOpenDonate}
          className="btn-danger px-10 py-4 rounded-xl text-white font-semibold tracking-widest text-sm"
        >
          <iconify-icon icon="solar:heart-bold" class="mr-2" />
          JOIN THE RESISTANCE — DONATE NOW
        </button>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────────────
function CTASection({ onOpenDonate }) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute opacity-10 inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1600&q=80')" }}
      />
      <div className="absolute inset-0 bg-black/88" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-700 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-700 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="cult-title text-5xl md:text-7xl text-white mb-6 leading-tight tracking-tight">
          SILENCE IS
          <span className="block text-red-500 flicker">COMPLICITY</span>
        </h2>
        <p className="fell-text text-xl md:text-2xl text-white/80 italic max-w-2xl mx-auto mb-12">
          Democracy does not defend itself. Every voice matters. Every dollar counts. Stand up before it's too late.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onOpenDonate}
            className="btn-danger px-10 py-5 rounded-xl text-white font-semibold tracking-widest text-base"
          >
            <iconify-icon icon="solar:dollar-minimalistic-bold" class="mr-2" />
            DONATE NOW
          </button>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 transition-all px-10 py-5 rounded-xl text-white font-semibold text-base tracking-widest"
          >
            <iconify-icon icon="solar:share-bold" class="mr-2" />
            SHARE THE TRUTH
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer({ onOpenDonate }) {
  return (
    <footer className="bg-black border-t border-red-900/50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="cult-title text-2xl text-red-500 flicker mb-4">☠ Evangelical</div>
            <p className="fell-text text-red-100/60 italic text-sm leading-relaxed">
              A non-partisan citizen-led archive documenting threats to American democracy.
            </p>
          </div>
          <div>
            <h4 className="text-xs text-red-300 tracking-widest mb-4 font-semibold">NAVIGATE</h4>
            <ul className="space-y-2">
              {["Evidence", "Videos", "Testimonials"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-red-200/60 hover:text-red-400 transition-colors text-sm tracking-wider">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs text-red-300 tracking-widest mb-4 font-semibold">ACT NOW</h4>
            <button
              onClick={onOpenDonate}
              className="btn-danger px-6 py-3 rounded-lg text-white text-sm font-semibold tracking-widest w-full mb-3"
            >
              DONATE
            </button>
            <p className="text-red-400/50 text-xs tracking-wider">For educational purposes only.</p>
          </div>
        </div>
        <div className="section-divider mb-6" />
        <p className="text-center text-red-400/40 text-xs tracking-widest">
          © 2026 Evangelical. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

// ── Standalone Donate Modal ───────────────────────────────────────────────────
function DonateModal({ onClose }) {
  const fakeVideo = { id: 0, title: "Support the Cause", category: "Donation", tag: "ACT NOW", youtubeId: "", views: "" };
  return <VideoModal video={fakeVideo} onClose={onClose} />;
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [donateOpen, setDonateOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="scanline" />
      <div className="vignette" />
      <div className="grain" />

      <Navbar onOpenDonate={() => setDonateOpen(true)} />
      <Ticker />
      <Hero onOpenDonate={() => setDonateOpen(true)} />
      <div className="section-divider" />
      <FactsBar />
      <div className="section-divider" />
      <VideosSection />
      <div className="section-divider" />
      <QuotesSection onOpenDonate={() => setDonateOpen(true)} />
      <div className="section-divider" />
      <CTASection onOpenDonate={() => setDonateOpen(true)} />
      <Footer onOpenDonate={() => setDonateOpen(true)} />

      {donateOpen && (
        <DonateModal onClose={() => setDonateOpen(false)} />
      )}
    </div>
  );
}