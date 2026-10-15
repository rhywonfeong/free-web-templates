import React, { useEffect, useMemo, useRef, useState, useCallback, memo } from "react";
import { testimonials, services, steps, faqs } from "./data.js";

/* ---------- hooks ---------- */
function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return y;
}

/* ---------- reveal on scroll ---------- */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${vis ? "reveal-in" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------- star field ---------- */
const StarField = memo(function StarField({ count = 40, parallax = 0 }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 5 + 2,
        delay: Math.random() * 4,
        dur: Math.random() * 3 + 2,
        eight: Math.random() > 0.7,
      })),
    [count]
  );
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ transform: `translateY(${parallax}px)` }}
      aria-hidden="true"
    >
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute text-[#B8893E]"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            fontSize: `${s.size}px`,
            animation: `twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
          }}
        >
          {s.eight ? "✦" : "✧"}
        </span>
      ))}
    </div>
  );
});

/* ---------- 3D moon ---------- */
function Moon({ size = 200, parallax = 0 }) {
  return (
    <div
      className="moon-wrap"
      style={{ transform: `translateY(${parallax}px)` }}
      aria-hidden="true"
    >
      <div className="moon-halo" style={{ width: size * 1.6, height: size * 1.6 }} />
      <div className="moon" style={{ width: size, height: size }} />
      <span className="moon-spark" style={{ top: "-8%", right: "4%" }}>✦</span>
      <span className="moon-spark" style={{ bottom: "2%", left: "-10%", animationDelay: "1.2s" }}>✧</span>
      <span className="moon-spark" style={{ top: "30%", left: "-18%", animationDelay: "2s", fontSize: "0.8rem" }}>✦</span>
    </div>
  );
}

/* ---------- gold CTA button ---------- */
function CTAButton({ children, className = "", small = false }) {
  return (
    <a
      href="#oferta"
      className={`btn-gold inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide text-[#FBF7EF] transition-transform duration-300 active:scale-95 hover:scale-[1.03] ${
        small ? "px-6 py-3 text-sm" : "px-9 py-4 text-base"
      } ${className}`}
    >
      <iconify-icon icon="solar:moon-stars-linear" width={small ? "18" : "22"}></iconify-icon>
      {children}
    </a>
  );
}

/* ---------- star particle trail ---------- */
function StarTrail() {
  const [parts, setParts] = useState([]);
  const lastRef = useRef(0);
  const idRef = useRef(0);
  useEffect(() => {
    const onMove = (e) => {
      const now = Date.now();
      if (now - lastRef.current < 70) return;
      lastRef.current = now;
      const id = idRef.current++;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;
      setParts((p) => [...p.slice(-10), { id, x, y, s: Math.random() * 8 + 6 }]);
      setTimeout(() => setParts((p) => p.filter((q) => q.id !== id)), 900);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none z-[60]" aria-hidden="true">
      {parts.map((p) => (
        <span
          key={p.id}
          className="trail-star"
          style={{ left: p.x, top: p.y, fontSize: p.s }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}

/* ---------- ornament divider ---------- */
function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3 text-[#B8893E]" aria-hidden="true">
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#B8893E]/60" />
      <span className="text-sm">✦</span>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#B8893E]/60" />
    </div>
  );
}

/* ================= SECTIONS ================= */

function Hero({ scrollY }) {
  return (
    <header className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-6 pt-10 pb-24 text-center hero-mist">
      <StarField count={46} parallax={scrollY * -0.08} />
      <div className="relative z-10 flex flex-col items-center">
        <p className="font-display text-xs tracking-[0.45em] text-[#B8893E] mb-2">✦ E S T E L A R ✦</p>
        <Moon size={190} parallax={scrollY * 0.12} />
        <h1 className="font-display tracking-tight text-3xl sm:text-5xl text-[#3B2A18] leading-tight max-w-xl mt-8">
          As cartas já sabem o que seu coração{" "}
          <span className="gold-text">ainda não entendeu.</span>
        </h1>
        <p className="mt-5 max-w-md text-[#3B2A18]/70 text-base leading-relaxed">
          Uma leitura feita só pra você. Clareza no amor, nas decisões e no que está por vir — em até 24 horas.
        </p>
        <CTAButton className="mt-8">Quero minha leitura agora</CTAButton>
        <div className="mt-6 flex items-center gap-2 text-xs text-[#3B2A18]/55">
          <iconify-icon icon="solar:verified-check-linear" width="16" class="text-[#B8893E]"></iconify-icon>
          +10 mil leituras realizadas · ★ 4,9 de avaliação
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#B8893E] animate-bounce" aria-hidden="true">
        <iconify-icon icon="solar:alt-arrow-down-linear" width="22"></iconify-icon>
      </div>
    </header>
  );
}

function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 4800);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <StarField count={14} />
      <Reveal className="relative z-10 max-w-lg mx-auto text-center">
        <Ornament />
        <h2 className="font-display tracking-tight text-2xl sm:text-3xl text-[#3B2A18] mt-4">
          Elas chegaram com dúvidas.<br />Saíram com respostas.
        </h2>
        <div className="relative mt-10 h-64">
          {testimonials.map((t, i) => (
            <article
              key={t.initials}
              className={`tarot-card absolute inset-0 mx-auto max-w-sm flex flex-col items-center justify-center px-7 py-8 transition-all duration-700 ${
                i === idx ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"
              }`}
              aria-hidden={i !== idx}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D9B873] to-[#B8893E] flex items-center justify-center font-display text-[#FBF7EF] text-sm">
                {t.initials}
              </div>
              <div className="flex gap-1 mt-3 text-[#B8893E]" aria-label={`${t.stars} estrelas`}>
                {Array.from({ length: t.stars }).map((_, s) => (
                  <iconify-icon key={s} icon="solar:star-bold" width="14"></iconify-icon>
                ))}
              </div>
              <p className="mt-4 text-sm text-[#3B2A18]/75 leading-relaxed italic">"{t.text}"</p>
              <p className="mt-3 text-xs tracking-widest text-[#B8893E] font-medium uppercase">{t.name}</p>
            </article>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Depoimento ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === idx ? "w-6 bg-[#B8893E]" : "w-2 bg-[#B8893E]/30"
              }`}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function PainDesire() {
  const pains = [
    { icon: "solar:heart-broken-linear", text: "\"Será que essa pessoa pensa em mim?\"" },
    { icon: "solar:question-circle-linear", text: "\"E se eu tomar a decisão errada?\"" },
    { icon: "solar:cloud-storm-linear", text: "\"Por que eu sinto que algo está pra mudar?\"" },
  ];
  return (
    <section className="relative py-20 px-6 bg-[#3B2A18] text-[#FBF7EF] overflow-hidden">
      <StarField count={26} />
      <div className="relative z-10 max-w-lg mx-auto text-center">
        <Reveal>
          <p className="text-xs tracking-[0.35em] text-[#D9B873] uppercase">Se você sente isso…</p>
          <h2 className="font-display tracking-tight text-2xl sm:text-3xl mt-4 leading-snug">
            A dúvida pesa mais do que qualquer resposta.
          </h2>
        </Reveal>
        <div className="mt-10 space-y-4">
          {pains.map((p, i) => (
            <Reveal key={p.text} delay={i * 120}>
              <div className="flex items-center gap-4 rounded-2xl border border-[#D9B873]/25 bg-[#FBF7EF]/5 backdrop-blur-sm px-5 py-4 text-left hover:border-[#D9B873]/60 transition-colors duration-300">
                <iconify-icon icon={p.icon} width="24" class="text-[#D9B873] shrink-0"></iconify-icon>
                <p className="text-sm text-[#FBF7EF]/85 italic">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <p className="mt-10 text-[#FBF7EF]/70 text-sm leading-relaxed max-w-sm mx-auto">
            Você não precisa carregar isso sozinha. As cartas existem pra iluminar o que a mente não alcança — e devolver a paz que a ansiedade roubou.
          </p>
          <CTAButton small className="mt-7">Revelar meu futuro agora</CTAButton>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  const [flipped, setFlipped] = useState(null);
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <StarField count={16} />
      <div className="relative z-10 max-w-3xl mx-auto">
        <Reveal className="text-center">
          <Ornament />
          <h2 className="font-display tracking-tight text-2xl sm:text-3xl text-[#3B2A18] mt-4">
            O que você quer descobrir hoje?
          </h2>
          <p className="mt-3 text-sm text-[#3B2A18]/60">Toque em uma carta pra revelar o que ela guarda. ✦</p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-12">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <button
                onClick={() => setFlipped(flipped === i ? null : i)}
                className="flip-scene w-full h-64 sm:h-72 text-left"
                aria-expanded={flipped === i}
                aria-label={`Carta ${s.title}`}
              >
                <div className={`flip-inner ${flipped === i ? "is-flipped" : ""}`}>
                  {/* front */}
                  <div className="flip-face tarot-card flex flex-col items-center justify-center gap-4 px-4 text-center">
                    <span className="text-[#B8893E] text-xs" aria-hidden="true">✦ ✧ ✦</span>
                    <iconify-icon icon={s.icon} width="38" class="text-[#B8893E]"></iconify-icon>
                    <h3 className="font-display tracking-wide text-lg text-[#3B2A18]">{s.title}</h3>
                    <p className="text-xs text-[#3B2A18]/60 leading-relaxed px-2">{s.teaser}</p>
                    <span className="text-[10px] tracking-[0.25em] text-[#B8893E] uppercase mt-1">Toque pra virar</span>
                  </div>
                  {/* back */}
                  <div className="flip-face flip-back tarot-card-dark flex flex-col justify-center gap-3 px-5 text-left">
                    <h3 className="font-display text-base text-[#D9B873]">{s.title} inclui:</h3>
                    <ul className="space-y-2">
                      {s.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-[#FBF7EF]/85 leading-snug">
                          <iconify-icon icon="solar:star-linear" width="12" class="text-[#D9B873] mt-0.5 shrink-0"></iconify-icon>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <span className="text-[10px] tracking-widest text-[#D9B873]/70 uppercase">✦ áudio + texto em 24h</span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
        <Reveal className="text-center mt-12">
          <CTAButton>Quero minha leitura agora</CTAButton>
        </Reveal>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="relative py-20 px-6 bg-[#FBF7EF] overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <Reveal>
          <Ornament />
          <h2 className="font-display tracking-tight text-2xl sm:text-3xl text-[#3B2A18] mt-4">
            Simples como olhar pro céu.
          </h2>
        </Reveal>
        <div className="mt-12 flex flex-col sm:flex-row gap-8 sm:gap-4">
          {steps.map((st, i) => (
            <Reveal key={st.title} delay={i * 150} className="flex-1">
              <div className="flex flex-col items-center group">
                <div className="relative w-16 h-16 rounded-full border border-[#B8893E]/40 bg-[#F6F0E6] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(217,184,115,0.5)] group-hover:border-[#B8893E]">
                  <iconify-icon icon={st.icon} width="28" class="text-[#B8893E]"></iconify-icon>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-[#D9B873] to-[#B8893E] text-[#FBF7EF] text-xs flex items-center justify-center font-medium">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display text-base text-[#3B2A18] mt-5">{st.title}</h3>
                <p className="mt-2 text-xs text-[#3B2A18]/60 leading-relaxed max-w-[220px]">{st.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <StarField count={12} />
      <div className="relative z-10 max-w-lg mx-auto">
        <Reveal>
          <div className="tarot-card px-7 py-10 text-center">
            <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-[#D9B873] shadow-[0_0_40px_rgba(217,184,115,0.4)]">
              <img
                src="https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=400&q=80"
                alt="Selene, taróloga da ESTELAR"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-xs tracking-[0.3em] text-[#B8893E] uppercase mt-6">Quem te guia</p>
            <h2 className="font-display tracking-tight text-2xl text-[#3B2A18] mt-2">Selene · ESTELAR</h2>
            <p className="mt-4 text-sm text-[#3B2A18]/70 leading-relaxed">
              Há mais de 8 anos, eu traduzo o que as cartas sussurram. Foram mais de 10 mil leituras — e em cada uma, uma mulher reencontrando o próprio caminho.
              Aqui, você não recebe previsão genérica. Recebe escuta, verdade e direção.
            </p>
            <div className="flex justify-center gap-6 mt-6 text-xs text-[#3B2A18]/55">
              <span className="flex items-center gap-1.5">
                <iconify-icon icon="solar:moon-stars-linear" width="15" class="text-[#B8893E]"></iconify-icon>
                8+ anos de tarot
              </span>
              <span className="flex items-center gap-1.5">
                <iconify-icon icon="solar:users-group-rounded-linear" width="15" class="text-[#B8893E]"></iconify-icon>
                +10 mil leituras
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section id="oferta" className="relative py-20 px-6 bg-[#3B2A18] text-[#FBF7EF] overflow-hidden scroll-mt-6">
      <StarField count={30} />
      <div className="relative z-10 max-w-md mx-auto text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D9B873]/40 bg-[#D9B873]/10 px-4 py-1.5 text-xs text-[#D9B873]">
            <iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
            Apenas 7 horários restantes nesta semana
          </div>
          <h2 className="font-display tracking-tight text-2xl sm:text-3xl mt-6 leading-snug">
            Sua leitura completa,<br />feita só pra você.
          </h2>
          <div className="mt-8 rounded-3xl border border-[#D9B873]/30 bg-[#FBF7EF]/5 backdrop-blur-sm px-7 py-9 ornament-frame">
            <p className="text-xs tracking-[0.3em] text-[#D9B873] uppercase">Leitura Estelar</p>
            <div className="mt-4 flex items-end justify-center gap-3">
              <span className="text-sm text-[#FBF7EF]/45 line-through mb-1">R$ 127</span>
              <span className="font-display text-5xl tracking-tight gold-text-light">R$ 67</span>
            </div>
            <ul className="mt-6 space-y-3 text-left text-sm text-[#FBF7EF]/85">
              {[
                "Tiragem exclusiva pra sua pergunta",
                "Áudio + texto explicando carta por carta",
                "Conselho prático das cartas pra agir",
                "Entrega em até 24 horas",
                "1 pergunta extra de presente ✦",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-circle-linear" width="18" class="text-[#D9B873] shrink-0 mt-0.5"></iconify-icon>
                  {b}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/5500000000000?text=Quero%20minha%20leitura%20ESTELAR%20%E2%9C%A6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-medium text-[#FBF7EF] transition-transform duration-300 active:scale-95 hover:scale-[1.02]"
            >
              <iconify-icon icon="solar:moon-stars-linear" width="22"></iconify-icon>
              Quero minha leitura agora
            </a>
            <p className="mt-4 text-[10px] text-[#FBF7EF]/45 tracking-wide">
              Pagamento seguro · Se não se conectar, devolvemos seu investimento.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="relative z-10 max-w-lg mx-auto">
        <Reveal className="text-center">
          <Ornament />
          <h2 className="font-display tracking-tight text-2xl sm:text-3xl text-[#3B2A18] mt-4">
            Ainda com dúvidas? Respira. ✦
          </h2>
        </Reveal>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 80}>
              <div className="rounded-2xl border border-[#B8893E]/25 bg-[#FBF7EF]/70 backdrop-blur-sm overflow-hidden transition-shadow duration-300 hover:shadow-[0_4px_24px_rgba(184,137,62,0.12)]">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={open === i}
                >
                  <span className="text-sm font-medium text-[#3B2A18]">{f.q}</span>
                  <iconify-icon
                    icon="solar:alt-arrow-down-linear"
                    width="18"
                    class={`text-[#B8893E] shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                  ></iconify-icon>
                </button>
                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-[#3B2A18]/65 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ scrollY }) {
  return (
    <section className="relative py-24 px-6 overflow-hidden text-center hero-mist">
      <StarField count={34} parallax={scrollY * -0.03} />
      <div className="relative z-10 max-w-md mx-auto flex flex-col items-center">
        <Reveal>
          <Moon size={130} />
          <h2 className="font-display tracking-tight text-2xl sm:text-4xl text-[#3B2A18] mt-8 leading-snug">
            O universo já deixou um recado pra você.
          </h2>
          <p className="mt-4 text-sm text-[#3B2A18]/65 leading-relaxed">
            Falta só você abrir. Sua leitura te espera — e a clareza que você procura está a um toque de distância.
          </p>
          <CTAButton className="mt-8">Revelar meu futuro agora</CTAButton>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-[#3B2A18] text-[#FBF7EF]/70 px-6 pt-14 pb-28 sm:pb-14 overflow-hidden">
      <StarField count={14} />
      <div className="relative z-10 max-w-lg mx-auto text-center">
        <p className="font-display text-sm tracking-[0.45em] text-[#D9B873]">✦ E S T E L A R ✦</p>
        <div className="flex justify-center gap-5 mt-6">
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok da ESTELAR"
            className="w-11 h-11 rounded-full border border-[#D9B873]/30 flex items-center justify-center text-[#D9B873] transition-all duration-300 hover:bg-[#D9B873]/10 hover:shadow-[0_0_20px_rgba(217,184,115,0.4)]"
          >
            <iconify-icon icon="simple-icons:tiktok" width="18"></iconify-icon>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da ESTELAR"
            className="w-11 h-11 rounded-full border border-[#D9B873]/30 flex items-center justify-center text-[#D9B873] transition-all duration-300 hover:bg-[#D9B873]/10 hover:shadow-[0_0_20px_rgba(217,184,115,0.4)]"
          >
            <iconify-icon icon="simple-icons:instagram" width="18"></iconify-icon>
          </a>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp da ESTELAR"
            className="w-11 h-11 rounded-full border border-[#D9B873]/30 flex items-center justify-center text-[#D9B873] transition-all duration-300 hover:bg-[#D9B873]/10 hover:shadow-[0_0_20px_rgba(217,184,115,0.4)]"
          >
            <iconify-icon icon="simple-icons:whatsapp" width="18"></iconify-icon>
          </a>
        </div>
        <p className="mt-8 text-[10px] leading-relaxed text-[#FBF7EF]/40 max-w-xs mx-auto">
          ESTELAR · Tarot & Astrologia. Conteúdo de autoconhecimento e entretenimento.
          As leituras não substituem orientação médica, psicológica, jurídica ou financeira.
        </p>
        <p className="mt-3 text-[10px] text-[#FBF7EF]/30">© {new Date().getFullYear()} ESTELAR. Feito sob as estrelas. ✦</p>
      </div>
    </footer>
  );
}

function StickyCTA({ visible }) {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 sm:hidden px-4 pb-4 pt-2 bg-gradient-to-t from-[#F6F0E6] via-[#F6F0E6]/95 to-transparent transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <a
        href="#oferta"
        className="btn-gold flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-medium text-[#FBF7EF] active:scale-95 transition-transform duration-200"
      >
        <iconify-icon icon="solar:moon-stars-linear" width="20"></iconify-icon>
        Quero minha leitura agora ✦
      </a>
    </div>
  );
}

/* ================= APP ================= */
export default function App() {
  const scrollY = useScrollY();
  return (
    <main className="bg-[#F6F0E6] text-[#3B2A18] overflow-x-hidden selection:bg-[#D9B873]/40">
      <StarTrail />
      <Hero scrollY={scrollY} />
      <Testimonials />
      <PainDesire />
      <Services />
      <HowItWorks />
      <About />
      <Offer />
      <FAQ />
      <FinalCTA scrollY={scrollY} />
      <Footer />
      <StickyCTA visible={scrollY > 480} />
    </main>
  );
}