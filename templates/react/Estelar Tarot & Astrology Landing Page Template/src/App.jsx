import { useEffect, useRef, useState, useCallback } from "react";
import {
  CTA_LINKS,
  reportContents,
  clubBenefits,
  readings,
  comparison,
  cards3,
  testimonials,
  steps,
  differentials,
  faqs,
} from "./data.js";

/* ─────────────────────── hooks ─────────────────────── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.18 }
    );
    items.forEach((i) => io.observe(i));
    return () => io.disconnect();
  }, []);
  return ref;
}

function useScrolled(px = 480) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > px);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [px]);
  return scrolled;
}

/* ─────────────────────── atoms ─────────────────────── */
function GoldButton({ href, children, big = false, glow = false, secondary = false }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0";
  const size = big ? "px-8 py-4 text-base" : "px-6 py-3 text-sm";
  const style = secondary
    ? "border border-[#b8893b]/50 text-[#7a4e1d] bg-[#fff9ef]/60 hover:bg-[#fff9ef] hover:border-[#b8893b]"
    : `text-[#fff9ef] bg-gradient-to-r from-[#b8893b] via-[#d8ae5e] to-[#b8893b] shadow-lg shadow-[#b8893b]/30 hover:shadow-xl hover:shadow-[#b8893b]/40 ${glow ? "cta-glow" : ""}`;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${size} ${style}`}>
      {children}
    </a>
  );
}

function Eyebrow({ children }) {
  return (
    <p className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-[#b8893b]">
      {children}
    </p>
  );
}

function SectionTitle({ children, light = false }) {
  return (
    <h2
      className={`reveal font-serif mt-4 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.12] ${
        light ? "text-[#fff9ef]" : "text-[#2b160c]"
      }`}
      style={{ "--d": "100ms" }}
    >
      {children}
    </h2>
  );
}

function TarotMini({ icon, label, className = "", style }) {
  return (
    <div
      className={`tarot-face w-24 sm:w-28 lg:w-32 aspect-[3/5] rounded-xl p-3 flex flex-col items-center justify-between ${className}`}
      style={style}
      aria-hidden="true"
    >
      <div className="w-full gold-rule" />
      <iconify-icon icon={icon} style={{ fontSize: "34px", color: "#b8893b" }} />
      <p className="font-serif text-[10px] tracking-[0.2em] uppercase text-[#7a4e1d]">{label}</p>
      <div className="w-full gold-rule" />
    </div>
  );
}

/* ─────────────────────── header ─────────────────────── */
function Header() {
  const compact = useScrolled(40);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        compact ? "bg-[#fff9ef]/85 backdrop-blur-md shadow-sm shadow-[#2b160c]/5 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 flex items-center justify-between">
        <a href="#topo" className="flex items-center gap-2 group" aria-label="ESTELAR — início">
          <iconify-icon icon="solar:moon-stars-bold-duotone" style={{ fontSize: "26px", color: "#b8893b" }} aria-hidden="true" />
          <span className="font-serif text-xl tracking-[0.32em] font-medium text-[#2b160c]">ESTELAR</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-[#7a4e1d]" aria-label="Navegação principal">
          <a href="#relatorio" className="hover:text-[#b8893b] transition-colors">Relatório</a>
          <a href="#clube" className="hover:text-[#b8893b] transition-colors">Clube Estelar</a>
          <a href="#carta" className="hover:text-[#b8893b] transition-colors">Escolha uma carta</a>
          <a href="#faq" className="hover:text-[#b8893b] transition-colors">Dúvidas</a>
        </nav>
        <GoldButton href={CTA_LINKS.reading}>
          <iconify-icon icon="simple-icons:whatsapp" style={{ fontSize: "15px" }} aria-hidden="true" />
          Receber minha leitura
        </GoldButton>
      </div>
    </header>
  );
}

/* ─────────────────────── hero ─────────────────────── */
function Hero() {
  const ref = useReveal();
  return (
    <section id="topo" ref={ref} className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32 paper-noise">
      {/* moon aura */}
      <div className="moon-glow absolute -top-32 right-[-10%] w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(216,174,94,0.35) 0%, rgba(216,174,94,0.08) 45%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="orbit-ring absolute -top-20 right-[-6%] w-[380px] h-[380px] rounded-full border border-[#b8893b]/15 pointer-events-none" aria-hidden="true" />
      {/* particles */}
      {[12, 28, 52, 70, 86].map((left, i) => (
        <span
          key={i}
          className="particle"
          style={{ left: `${left}%`, bottom: "8%", width: i % 2 ? 3 : 4, height: i % 2 ? 3 : 4, "--t": `${8 + i * 2}s`, "--ad": `${i * 1.4}s` }}
          aria-hidden="true"
        />
      ))}

      <div className="relative mx-auto max-w-6xl px-5 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <p className="reveal inline-flex items-center gap-2 rounded-full border border-[#b8893b]/40 bg-[#fff9ef]/70 px-4 py-1.5 text-xs font-semibold text-[#7a4e1d] tracking-wide">
            <iconify-icon icon="solar:star-bold-duotone" style={{ fontSize: "14px", color: "#b8893b" }} aria-hidden="true" />
            Leitura personalizada · Relatório premium · Orientação mensal
          </p>
          <h1
            className="reveal font-serif mt-6 text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.08] text-[#2b160c]"
            style={{ "--d": "120ms", textWrap: "balance" }}
          >
            Receba uma leitura feita para a{" "}
            <span className="italic text-[#b8893b]">energia do seu próximo ciclo</span>.
          </h1>
          <p className="reveal mt-6 max-w-md text-base sm:text-lg text-[#7a4e1d] leading-relaxed" style={{ "--d": "220ms" }}>
            Se algo dentro de você pediu uma resposta, comece por aqui. Uma leitura intuitiva,
            um relatório visual premium e uma mensagem escrita para você.
          </p>
          <div className="reveal mt-8 flex flex-wrap items-center gap-4" style={{ "--d": "320ms" }}>
            <GoldButton href={CTA_LINKS.reading} big glow>
              <iconify-icon icon="simple-icons:whatsapp" style={{ fontSize: "18px" }} aria-hidden="true" />
              Receber minha leitura
            </GoldButton>
            <a href="#como-funciona" className="inline-flex items-center gap-2 text-sm font-semibold text-[#7a4e1d] hover:text-[#b8893b] transition-colors">
              Ver como funciona
              <iconify-icon icon="solar:arrow-down-line-duotone" style={{ fontSize: "16px" }} aria-hidden="true" />
            </a>
          </div>
          <p className="reveal mt-6 text-xs text-[#7a4e1d]/70" style={{ "--d": "420ms" }}>
            Sigilo absoluto · Linguagem clara · Atendimento humano
          </p>
        </div>

        {/* floating cards */}
        <div className="reveal relative h-[320px] sm:h-[380px] hidden sm:block" style={{ "--d": "260ms" }} aria-hidden="true">
          <TarotMini icon="solar:sun-2-line-duotone" label="O Sol" className="float-a absolute left-2 top-12" />
          <TarotMini icon="solar:moon-stars-line-duotone" label="A Lua" className="float-b absolute left-1/2 -translate-x-1/2 top-0 scale-110 z-10" />
          <TarotMini icon="solar:star-fall-line-duotone" label="A Estrela" className="float-c absolute right-2 top-20" />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-64 h-10 rounded-full"
            style={{ background: "radial-gradient(ellipse, rgba(43,22,12,0.18), transparent 70%)" }} />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── emotional mirror ─────────────────────── */
function EmotionalMirror() {
  const ref = useReveal();
  const lines = [
    "Tem algo que não sai da sua cabeça?",
    "Você sente que precisa de clareza?",
    "Quer entender se deve esperar, insistir ou seguir?",
  ];
  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-[#2b160c] to-[#140b07] text-center overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(60% 50% at 50% 30%, rgba(216,174,94,0.18), transparent 70%)" }} aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-5">
        <Eyebrow>Capítulo dois · O espelho</Eyebrow>
        <div className="mt-8 space-y-5">
          {lines.map((l, i) => (
            <p key={l} className="reveal font-serif text-2xl sm:text-3xl lg:text-4xl tracking-tight font-medium text-[#fff9ef]/90 italic"
              style={{ "--d": `${120 + i * 160}ms` }}>
              {l}
            </p>
          ))}
        </div>
        <div className="reveal gold-rule mx-auto mt-10 w-40" style={{ "--d": "560ms" }} />
        <p className="reveal mt-8 text-base sm:text-lg text-[#d8bfa8] leading-relaxed max-w-xl mx-auto" style={{ "--d": "640ms" }}>
          Talvez você não precise de mais sinais.{" "}
          <span className="text-[#d8ae5e] font-semibold">Talvez precise de uma leitura feita para você.</span>
        </p>
        <div className="reveal mt-10" style={{ "--d": "740ms" }}>
          <GoldButton href={CTA_LINKS.reading} big>
            Quero a minha leitura
            <iconify-icon icon="solar:arrow-right-line-duotone" style={{ fontSize: "16px" }} aria-hidden="true" />
          </GoldButton>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── report showcase ─────────────────────── */
function ReportShowcase() {
  const ref = useReveal();
  return (
    <section id="relatorio" ref={ref} className="relative py-24 lg:py-32 paper-noise">
      <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-2 gap-16 items-center">
        {/* mockup */}
        <div className="reveal report-stage order-2 lg:order-1" aria-hidden="true">
          <div className="report-card relative mx-auto w-72 sm:w-80 rounded-2xl tarot-back p-6 text-[#fff9ef]">
            <div className="gold-shimmer absolute inset-0 rounded-2xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <span className="font-serif text-sm tracking-[0.3em]">ESTELAR</span>
              <iconify-icon icon="solar:moon-stars-bold-duotone" style={{ fontSize: "20px", color: "#d8ae5e" }} />
            </div>
            <div className="gold-rule my-4" />
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#d8ae5e]">Relatório Estelar</p>
            <p className="font-serif text-2xl mt-1 italic">Para Mariana</p>
            <p className="text-xs text-[#d8bfa8] mt-1">Ciclo de Junho · Energia: Recomeço</p>
            <div className="mt-5 rounded-xl bg-[#fff9ef]/5 border border-[#d8ae5e]/30 p-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#d8ae5e]">Carta guia</p>
              <div className="flex items-center gap-3 mt-2">
                <iconify-icon icon="solar:star-fall-line-duotone" style={{ fontSize: "28px", color: "#d8ae5e" }} />
                <p className="font-serif text-lg">A Estrela</p>
              </div>
            </div>
            <div className="mt-4 space-y-2.5">
              {["Previsão amorosa", "Bloqueios e caminhos", "Conselho espiritual", "Mensagem final"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-xs text-[#efe1cf]">
                  <iconify-icon icon="solar:star-bold" style={{ fontSize: "10px", color: "#b8893b" }} />
                  {t}
                </div>
              ))}
            </div>
            <div className="gold-rule my-4" />
            <p className="text-[10px] italic text-[#d8bfa8]">"Confie no que está florescendo em silêncio."</p>
          </div>
        </div>

        {/* copy */}
        <div className="order-1 lg:order-2">
          <Eyebrow>O objeto de desejo</Eyebrow>
          <SectionTitle>
            O Relatório Estelar <span className="italic text-[#b8893b]">Personalizado</span>
          </SectionTitle>
          <p className="reveal mt-5 text-base sm:text-lg text-[#7a4e1d] leading-relaxed" style={{ "--d": "200ms" }}>
            Sua leitura não some em uma conversa. Ela vira um guia visual premium — com seu nome —
            para consultar durante todo o mês.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4">
            {reportContents.map((item, i) => (
              <li key={item.title} className="reveal flex gap-3 rounded-xl border border-[#b8893b]/20 bg-[#fff9ef]/70 p-4 transition-all duration-300 hover:border-[#b8893b]/50 hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#b8893b]/10"
                style={{ "--d": `${240 + i * 70}ms` }}>
                <iconify-icon icon={item.icon} style={{ fontSize: "22px", color: "#b8893b", flexShrink: 0 }} aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#2b160c]">{item.title}</p>
                  <p className="text-xs text-[#7a4e1d] mt-0.5 leading-relaxed">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="reveal mt-9" style={{ "--d": "700ms" }}>
            <GoldButton href={CTA_LINKS.report} big>
              Quero meu Relatório Estelar
              <iconify-icon icon="solar:star-line-duotone" style={{ fontSize: "16px" }} aria-hidden="true" />
            </GoldButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── club offer ─────────────────────── */
function ClubOffer() {
  const ref = useReveal();
  return (
    <section id="clube" ref={ref} className="relative py-24 lg:py-32 bg-gradient-to-b from-[#efe1cf] to-[#f8f1e7]">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow>O ritual mensal</Eyebrow>
          <SectionTitle>Clube Estelar Mensal</SectionTitle>
          <p className="reveal mt-5 text-base sm:text-lg text-[#7a4e1d] leading-relaxed" style={{ "--d": "200ms" }}>
            Todo mês, uma leitura feita para a sua energia — com relatório premium para
            atravessar seu ciclo com mais clareza, calma e direção.
          </p>
        </div>

        <div className="reveal mt-14 mx-auto max-w-lg relative" style={{ "--d": "300ms" }}>
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-[#b8893b]/30 via-[#d8ae5e]/40 to-[#b8893b]/30 blur-xl" aria-hidden="true" />
          <div className="relative rounded-3xl border border-[#b8893b]/40 bg-[#fff9ef] p-8 sm:p-10 shadow-2xl shadow-[#b8893b]/15">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2b160c] px-3.5 py-1.5 text-xs font-semibold text-[#d8ae5e] tracking-wide">
                <iconify-icon icon="solar:crown-line-duotone" style={{ fontSize: "14px" }} aria-hidden="true" />
                Melhor escolha
              </span>
              <iconify-icon icon="solar:moon-stars-bold-duotone" style={{ fontSize: "26px", color: "#b8893b" }} aria-hidden="true" />
            </div>
            <div className="mt-6 flex items-end gap-2">
              <p className="font-serif text-5xl font-medium tracking-tight text-[#2b160c]">R$ XX</p>
              <p className="pb-1.5 text-sm text-[#7a4e1d]">/mês · cancele quando quiser</p>
            </div>
            <div className="gold-rule my-6" />
            <ul className="space-y-3.5">
              {clubBenefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-[#2b160c]">
                  <iconify-icon icon="solar:check-circle-bold-duotone" style={{ fontSize: "18px", color: "#b8893b", flexShrink: 0, marginTop: "1px" }} aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <GoldButton href={CTA_LINKS.club} big glow>
                Entrar para o Clube Estelar
                <iconify-icon icon="solar:arrow-right-line-duotone" style={{ fontSize: "16px" }} aria-hidden="true" />
              </GoldButton>
            </div>
            <p className="mt-4 text-center text-xs text-[#7a4e1d]/70">
              Sem fidelidade · Prioridade no atendimento · Sigilo total
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── one-time readings + comparison ─────────────────────── */
function ReadingsAndComparison() {
  const ref = useReveal();
  return (
    <section ref={ref} className="py-24 lg:py-32 paper-noise relative">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow>Leituras avulsas</Eyebrow>
          <SectionTitle>Prefere começar com uma pergunta?</SectionTitle>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {readings.map((r, i) => (
            <article key={r.name}
              className="reveal group rounded-2xl border border-[#b8893b]/25 bg-[#fff9ef]/80 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#b8893b]/15 hover:border-[#b8893b]/50"
              style={{ "--d": `${150 + i * 120}ms` }}>
              <iconify-icon icon={r.icon} style={{ fontSize: "32px", color: "#b8893b" }} aria-hidden="true" />
              <h3 className="font-serif text-xl font-medium tracking-tight text-[#2b160c] mt-4">{r.name}</h3>
              <p className="mt-2 text-sm text-[#7a4e1d] leading-relaxed">{r.desc}</p>
              <div className="gold-rule my-4" />
              <p className="text-xs text-[#7a4e1d]"><span className="font-semibold text-[#2b160c]">Para quem é:</span> {r.who}</p>
              <p className="mt-2 text-xs text-[#7a4e1d]"><span className="font-semibold text-[#2b160c]">Você recebe:</span> {r.gets}</p>
              <div className="mt-6">
                <GoldButton href={CTA_LINKS.reading} secondary>
                  Escolher minha leitura
                </GoldButton>
              </div>
            </article>
          ))}
        </div>

        {/* comparison */}
        <div className="reveal mt-20 mx-auto max-w-3xl rounded-3xl overflow-hidden border border-[#b8893b]/25 bg-[#fff9ef]" style={{ "--d": "200ms" }}>
          <div className="grid grid-cols-[1.4fr_1fr_1fr] text-center text-xs sm:text-sm">
            <div className="p-4 sm:p-5 text-left font-serif text-base sm:text-lg text-[#2b160c] tracking-tight">Avulsa ou Clube?</div>
            <div className="p-4 sm:p-5 font-semibold text-[#7a4e1d] bg-[#efe1cf]/50">Leitura Avulsa</div>
            <div className="p-4 sm:p-5 font-semibold text-[#fff9ef] bg-[#2b160c] flex items-center justify-center gap-1.5">
              <iconify-icon icon="solar:crown-line-duotone" style={{ fontSize: "14px", color: "#d8ae5e" }} aria-hidden="true" />
              <span className="text-[#d8ae5e]">Clube Estelar</span>
            </div>
            {comparison.map((row, i) => (
              <FragRow key={row.feature} row={row} odd={i % 2 === 1} />
            ))}
          </div>
          <div className="p-6 text-center bg-[#efe1cf]/40">
            <p className="text-sm text-[#7a4e1d] mb-4">
              A leitura avulsa responde uma pergunta. <span className="font-semibold text-[#2b160c]">O Clube acompanha sua jornada.</span>
            </p>
            <GoldButton href={CTA_LINKS.club}>Entrar para o Clube Estelar</GoldButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function FragRow({ row, odd }) {
  const bg = odd ? "bg-[#efe1cf]/30" : "";
  return (
    <>
      <div className={`p-3.5 sm:p-4 text-left text-[#2b160c] border-t border-[#b8893b]/15 ${bg}`}>{row.feature}</div>
      <div className={`p-3.5 sm:p-4 border-t border-[#b8893b]/15 ${bg} bg-[#efe1cf]/40`}>
        {row.single ? (
          <iconify-icon icon="solar:check-circle-line-duotone" style={{ fontSize: "18px", color: "#b8893b" }} aria-label="Incluído" />
        ) : (
          <span className="text-[#d8bfa8]" aria-label="Não incluído">—</span>
        )}
      </div>
      <div className={`p-3.5 sm:p-4 border-t border-[#d8ae5e]/20 bg-[#2b160c]`}>
        <iconify-icon icon="solar:check-circle-bold-duotone" style={{ fontSize: "18px", color: "#d8ae5e" }} aria-label="Incluído" />
      </div>
    </>
  );
}

/* ─────────────────────── choose a card ─────────────────────── */
function ChooseACard() {
  const ref = useReveal();
  const [picked, setPicked] = useState(null);

  const reset = useCallback(() => setPicked(null), []);

  return (
    <section id="carta" ref={ref} className="relative py-24 lg:py-36 bg-gradient-to-b from-[#140b07] via-[#2b160c] to-[#140b07] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{ background: "radial-gradient(50% 40% at 50% 20%, rgba(216,174,94,0.2), transparent 70%)" }} aria-hidden="true" />
      {[18, 44, 76].map((left, i) => (
        <span key={i} className="particle" style={{ left: `${left}%`, bottom: "10%", width: 3, height: 3, "--t": `${10 + i * 3}s`, "--ad": `${i * 2}s` }} aria-hidden="true" />
      ))}

      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <Eyebrow>Um sinal para agora</Eyebrow>
        <SectionTitle light>Respire fundo. Escolha uma carta.</SectionTitle>
        <p className="reveal mt-4 text-[#d8bfa8] text-sm sm:text-base max-w-md mx-auto" style={{ "--d": "200ms" }}>
          Pense no que mais pesa no seu coração — e toque na carta que te chamar.
        </p>

        <div className="reveal mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto" style={{ "--d": "320ms" }}>
          {cards3.map((card) => {
            const isPicked = picked === card.id;
            const dimmed = picked !== null && !isPicked;
            return (
              <div key={card.id} className={`flip-scene transition-all duration-500 ${dimmed ? "opacity-30 scale-95" : ""} ${isPicked ? "scale-105" : ""}`}>
                <button
                  type="button"
                  onClick={() => !picked && setPicked(card.id)}
                  disabled={picked !== null}
                  aria-label={picked ? `Carta ${card.title}` : `Escolher carta ${card.id}`}
                  className="block w-full aspect-[3/5] disabled:cursor-default"
                >
                  <div className={`flip-inner ${isPicked ? "flipped" : ""}`}>
                    {/* back of card (face down) */}
                    <div className="flip-front tarot-back flex flex-col items-center justify-center gap-3 p-3 transition-transform duration-300 hover:-translate-y-1.5">
                      <div className="w-10 h-10 rounded-full border border-[#d8ae5e]/50 flex items-center justify-center">
                        <iconify-icon icon="solar:moon-stars-line-duotone" style={{ fontSize: "20px", color: "#d8ae5e" }} aria-hidden="true" />
                      </div>
                      <div className="gold-rule w-3/4" />
                      <p className="font-serif text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#d8ae5e]/80">Estelar</p>
                    </div>
                    {/* revealed face */}
                    <div className="flip-back tarot-face flex flex-col items-center justify-center gap-2 p-3 text-center">
                      <iconify-icon icon={card.symbol} style={{ fontSize: "30px", color: "#b8893b" }} aria-hidden="true" />
                      <p className="font-serif text-xs sm:text-sm font-medium text-[#2b160c]">{card.title}</p>
                      <div className="gold-rule w-2/3" />
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* revealed message */}
        <div aria-live="polite" className="min-h-[140px] mt-10">
          {picked && (
            <div className="mx-auto max-w-md rounded-2xl border border-[#d8ae5e]/40 bg-[#fff9ef]/5 backdrop-blur-sm p-7 reveal is-in">
              <p className="font-serif text-lg sm:text-xl italic text-[#fff9ef] leading-relaxed">
                "{cards3.find((c) => c.id === picked)?.message}"
              </p>
              <div className="gold-rule my-5" />
              <p className="text-sm text-[#d8bfa8] mb-5">Quer uma leitura feita para a sua energia?</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <GoldButton href={CTA_LINKS.reading} glow>
                  Receber leitura completa
                  <iconify-icon icon="solar:arrow-right-line-duotone" style={{ fontSize: "16px" }} aria-hidden="true" />
                </GoldButton>
                <button type="button" onClick={reset} className="text-xs text-[#d8bfa8] underline underline-offset-4 hover:text-[#d8ae5e] transition-colors">
                  Escolher outra carta
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── proof / steps / differentials ─────────────────────── */
function SocialProof() {
  const ref = useReveal();
  return (
    <section ref={ref} className="py-24 lg:py-32 paper-noise relative">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow>Quem já recebeu</Eyebrow>
          <SectionTitle>Mensagens que pareceram escritas sob medida</SectionTitle>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <figure key={t.name}
              className="reveal rounded-2xl border border-[#b8893b]/20 bg-[#fff9ef]/80 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#b8893b]/10"
              style={{ "--d": `${120 + i * 100}ms` }}>
              <div className="flex gap-1" aria-label="5 estrelas">
                {[...Array(5)].map((_, s) => (
                  <iconify-icon key={s} icon="solar:star-bold" style={{ fontSize: "13px", color: "#d8ae5e" }} aria-hidden="true" />
                ))}
              </div>
              <blockquote className="font-serif italic text-base sm:text-lg text-[#2b160c] mt-4 leading-relaxed">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#d8ae5e] to-[#b8893b] flex items-center justify-center text-xs font-semibold text-[#fff9ef]">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2b160c]">{t.name}</p>
                  <p className="text-xs text-[#7a4e1d]">{t.context}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const ref = useReveal();
  return (
    <section id="como-funciona" ref={ref} className="py-24 lg:py-32 bg-[#efe1cf]/60">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow>Simples e acolhedor</Eyebrow>
          <SectionTitle>Como a sua leitura acontece</SectionTitle>
        </div>
        <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <li key={s.n} className="reveal relative rounded-2xl border border-[#b8893b]/20 bg-[#fff9ef] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-[#b8893b]/10"
              style={{ "--d": `${120 + i * 110}ms` }}>
              <span className="font-serif text-4xl font-medium text-[#d8ae5e]/60">{s.n}</span>
              <h3 className="font-serif text-lg font-medium tracking-tight text-[#2b160c] mt-3">{s.title}</h3>
              <p className="text-sm text-[#7a4e1d] mt-1.5 leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="reveal mt-12 text-center" style={{ "--d": "560ms" }}>
          <GoldButton href={CTA_LINKS.start} big>
            <iconify-icon icon="simple-icons:whatsapp" style={{ fontSize: "18px" }} aria-hidden="true" />
            Começar pelo WhatsApp
          </GoldButton>
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  const ref = useReveal();
  return (
    <section ref={ref} className="py-24 lg:py-32 paper-noise relative">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow>Por que ESTELAR</Eyebrow>
          <SectionTitle>Uma experiência, não apenas uma leitura</SectionTitle>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((d, i) => (
            <div key={d.title} className="reveal flex gap-4 rounded-2xl border border-[#b8893b]/15 bg-[#fff9ef]/60 p-6 transition-colors duration-300 hover:border-[#b8893b]/40"
              style={{ "--d": `${100 + i * 80}ms` }}>
              <iconify-icon icon={d.icon} style={{ fontSize: "26px", color: "#b8893b", flexShrink: 0 }} aria-hidden="true" />
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-[#2b160c]">{d.title}</h3>
                <p className="text-xs text-[#7a4e1d] mt-1 leading-relaxed">{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── FAQ ─────────────────────── */
function FAQ() {
  const ref = useReveal();
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" ref={ref} className="py-24 lg:py-32 bg-[#efe1cf]/50">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <Eyebrow>Dúvidas frequentes</Eyebrow>
          <SectionTitle>Tudo o que você precisa saber</SectionTitle>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="reveal rounded-xl border border-[#b8893b]/25 bg-[#fff9ef] overflow-hidden" style={{ "--d": `${i * 50}ms` }}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-sm font-semibold text-[#2b160c]">{f.q}</span>
                  <iconify-icon
                    icon="solar:alt-arrow-down-line-duotone"
                    style={{ fontSize: "18px", color: "#b8893b", transition: "transform 0.3s", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}
                    aria-hidden="true"
                  />
                </button>
                <div className={`faq-body ${isOpen ? "open" : ""}`}>
                  <div>
                    <p className="px-5 pb-5 text-sm text-[#7a4e1d] leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="reveal mt-8 text-center text-xs text-[#7a4e1d]/70 leading-relaxed max-w-xl mx-auto" style={{ "--d": "300ms" }}>
          As leituras têm caráter simbólico, espiritual e reflexivo, voltadas para autoconhecimento
          e orientação pessoal. Não substituem aconselhamento médico, psicológico, jurídico ou financeiro.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────── final CTA + footer ─────────────────────── */
function FinalCTA() {
  const ref = useReveal();
  return (
    <section ref={ref} className="relative py-28 lg:py-36 bg-gradient-to-b from-[#2b160c] to-[#140b07] text-center overflow-hidden">
      <div className="moon-glow absolute top-[-120px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(216,174,94,0.3), transparent 65%)" }} aria-hidden="true" />
      <div className="relative mx-auto max-w-2xl px-5">
        <iconify-icon icon="solar:moon-stars-bold-duotone" style={{ fontSize: "40px", color: "#d8ae5e" }} aria-hidden="true" />
        <SectionTitle light>
          Seu próximo ciclo pode começar <span className="italic text-[#d8ae5e]">com mais clareza</span>.
        </SectionTitle>
        <p className="reveal mt-5 text-base sm:text-lg text-[#d8bfa8] leading-relaxed" style={{ "--d": "200ms" }}>
          Receba uma leitura personalizada e um Relatório Estelar premium criado para a sua energia.
          O sinal já apareceu — a mensagem completa está a uma conversa de distância.
        </p>
        <div className="reveal mt-9 flex flex-wrap items-center justify-center gap-4" style={{ "--d": "320ms" }}>
          <GoldButton href={CTA_LINKS.reading} big glow>
            <iconify-icon icon="simple-icons:whatsapp" style={{ fontSize: "18px" }} aria-hidden="true" />
            Receber minha leitura agora
          </GoldButton>
          <GoldButton href={CTA_LINKS.club} big secondary>
            Entrar para o Clube Estelar
          </GoldButton>
        </div>
        <p className="reveal mt-6 text-xs text-[#d8bfa8]/60" style={{ "--d": "420ms" }}>
          Vagas mensais limitadas para garantir leituras feitas com atenção.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#140b07] text-[#d8bfa8] py-14 pb-28 md:pb-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg tracking-[0.32em] text-[#fff9ef]">ESTELAR</p>
            <p className="text-xs mt-2 italic">Transforme sinais em clareza.</p>
          </div>
          <nav className="flex items-center gap-6 text-xs" aria-label="Links do rodapé">
            <a href="#relatorio" className="hover:text-[#d8ae5e] transition-colors">Relatório</a>
            <a href="#clube" className="hover:text-[#d8ae5e] transition-colors">Clube</a>
            <a href="#faq" className="hover:text-[#d8ae5e] transition-colors">Dúvidas</a>
          </nav>
          <div className="flex items-center gap-5">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram da ESTELAR" className="hover:opacity-80 transition-opacity">
              <iconify-icon icon="simple-icons:instagram" style={{ fontSize: "18px", color: "#d8ae5e" }} aria-hidden="true" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok da ESTELAR" className="hover:opacity-80 transition-opacity">
              <iconify-icon icon="simple-icons:tiktok" style={{ fontSize: "18px", color: "#d8ae5e" }} aria-hidden="true" />
            </a>
            <a href={CTA_LINKS.reading} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da ESTELAR" className="hover:opacity-80 transition-opacity">
              <iconify-icon icon="simple-icons:whatsapp" style={{ fontSize: "18px", color: "#d8ae5e" }} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="gold-rule my-8 opacity-30" />
        <p className="text-[11px] text-center leading-relaxed text-[#d8bfa8]/60 max-w-2xl mx-auto">
          © {new Date().getFullYear()} ESTELAR · Leituras de caráter simbólico, espiritual e reflexivo,
          voltadas para autoconhecimento. Não substituem aconselhamento médico, psicológico, jurídico ou financeiro.
          · Política de Privacidade · Termos
        </p>
      </div>
    </footer>
  );
}

function StickyMobileCTA() {
  const show = useScrolled(560);
  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-50 md:hidden transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="bg-[#fff9ef]/90 backdrop-blur-md border-t border-[#b8893b]/30 px-5 py-3">
        <a
          href={CTA_LINKS.reading}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-glow flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#b8893b] via-[#d8ae5e] to-[#b8893b] py-3.5 text-sm font-semibold text-[#fff9ef]"
        >
          <iconify-icon icon="simple-icons:whatsapp" style={{ fontSize: "17px" }} aria-hidden="true" />
          Receber minha leitura
        </a>
      </div>
    </div>
  );
}

/* ─────────────────────── app ─────────────────────── */
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EmotionalMirror />
        <ReportShowcase />
        <ClubOffer />
        <ReadingsAndComparison />
        <ChooseACard />
        <SocialProof />
        <HowItWorks />
        <Differentials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}