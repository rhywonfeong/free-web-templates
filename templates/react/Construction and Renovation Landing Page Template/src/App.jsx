import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const appRef = useRef(null);
  const loaderCountRef = useRef(null);

  useLayoutEffect(() => {
    let lenis;
    let raf;

    const ctx = gsap.context(() => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reduced) {
        gsap.set('#loader', { display: 'none' });
        gsap.set(
          '[data-reveal], .group-card, .float-card, .hero-card, #wordmark, #heroCopy, #metaCard, .typo-line',
          { clearProps: 'all', opacity: 1 }
        );
        document.querySelectorAll('.process-bar').forEach((b) => {
          b.style.transform = 'scaleX(1)';
        });
      } else {
        lenis = new Lenis({ duration: 1.3, smoothWheel: true });
        lenis.on('scroll', ScrollTrigger.update);
        
        raf = (t) => lenis.raf(t * 1000);
        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);
        lenis.stop();

        gsap.set('#wordmark', { yPercent: 40, opacity: 0 });
        gsap.set('.hero-card', { y: 120, opacity: 0, scale: 0.92 });
        gsap.set('#heroCopy', { y: 30, opacity: 0 });
        gsap.set('#metaCard', { y: 30, opacity: 0 });
        gsap.set('.cta-btn', { scale: 0.8, opacity: 0 });

        const heroIntro = gsap.timeline({
          paused: true,
          onComplete() {
            const heroScrub = gsap.timeline({
              scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: '+=150%',
                pin: true,
                scrub: 1.5,
                refreshPriority: 1,
              },
            });
            heroScrub
              .to('#wordmark', { yPercent: -60, ease: 'none', duration: 1 }, 0)
              .to('#heroCopy, #metaCard', { opacity: 0, y: -40, ease: 'power1.inOut', duration: 0.6 }, 0)
              .to('#cardStack', { y: -80, scale: 1.05, ease: 'none', duration: 1 }, 0)
              .to('.hero-card:nth-child(1)', { rotation: -4, ease: 'none', duration: 1 }, 0)
              .to('.hero-card:nth-child(2)', { x: '-38vw', y: -50, rotation: -9, ease: 'none', duration: 1 }, 0)
              .to('.hero-card:nth-child(3)', { x: '38vw', y: 50, rotation: 9, ease: 'none', duration: 1 }, 0)
              .fromTo(
                '#cardStack, #wordmark',
                { opacity: 1 },
                { opacity: 0, ease: 'power1.in', duration: 0.35, immediateRender: false },
                0.75
              );
            ScrollTrigger.sort();
            ScrollTrigger.refresh();
            lenis.start();
          },
        });

        heroIntro
          .to('#wordmark', { yPercent: 0, opacity: 1, duration: 1.4, ease: 'power4.out' })
          .to('.hero-card', { y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.12, ease: 'power3.out' }, '-=1')
          .to('#heroCopy', { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }, '-=0.7')
          .to('#metaCard', { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }, '-=0.7')
          .to('.cta-btn', { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.5');

        // loader
        const counter = { v: 0 };
        const loadTl = gsap.timeline({
          onComplete() {
            ScrollTrigger.refresh();
            heroIntro.play();
          },
        });
        loadTl
          .to('#loaderBrand', { opacity: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out' })
          .to('#loaderBar', { scaleX: 1, duration: 1.8, ease: 'power2.inOut' }, '-=0.6')
          .to(
            counter,
            {
              v: 100,
              duration: 1.8,
              ease: 'power2.inOut',
              onUpdate: () => {
                if (loaderCountRef.current) {
                  loaderCountRef.current.textContent = String(Math.round(counter.v)).padStart(3, '0');
                }
              },
            },
            '<'
          )
          .to('#loader', { yPercent: -100, duration: 1, ease: 'power4.inOut', delay: 0.2 })
          .set('#loader', { display: 'none' });

        // pinned typography
        const lines = gsap.utils.toArray('.typo-line');
        lines.forEach((l, i) => gsap.set(l, { xPercent: i % 2 ? 60 : -60, opacity: 0 }));
        const typoTl = gsap.timeline({
          scrollTrigger: { trigger: '#typo', start: 'top top', end: '+=160%', pin: true, scrub: 1 },
        });
        lines.forEach((l, i) =>
          typoTl.to(l, { xPercent: 0, opacity: 1, ease: 'none', duration: 1 }, i * 0.35)
        );
        lines.forEach((l, i) =>
          typoTl.to(
            l,
            { xPercent: i % 2 ? -18 : 18, opacity: 0.25, ease: 'none', duration: 1 },
            '+=' + (i === 0 ? 0.4 : 0)
          )
        );

        // reveals
        gsap.utils.toArray('[data-reveal]').forEach((el) => {
          gsap.fromTo(
            el,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.1,
              ease: 'power3.out',
              scrollTrigger: { trigger: el, start: 'top 85%' },
            }
          );
        });

        // parallax
        gsap.utils.toArray('.parallax-frame').forEach((frame) => {
          const img = frame.querySelector('.parallax-img');
          gsap.fromTo(
            frame,
            { y: 60 },
            {
              y: -60,
              ease: 'none',
              scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: 1 },
            }
          );
          gsap.fromTo(
            img,
            { y: -40, scale: 1.18 },
            {
              y: 40,
              scale: 1.04,
              ease: 'none',
              scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: 1 },
            }
          );
        });

        // card groups
        gsap.utils.toArray('.card-group').forEach((group) => {
          gsap.fromTo(
            group.querySelectorAll('.group-card'),
            { y: 80, opacity: 0, rotation: 2 },
            {
              y: 0,
              opacity: 1,
              rotation: 0,
              duration: 1.1,
              stagger: 0.15,
              ease: 'power3.out',
              scrollTrigger: { trigger: group, start: 'top 82%' },
            }
          );
        });

        // archive drift
        const track = document.getElementById('archiveTrack');
        if (track) {
          gsap.to(track, {
            x: () => -(track.scrollWidth - window.innerWidth + 48),
            ease: 'none',
            scrollTrigger: { trigger: '#archive', start: 'top bottom', end: 'bottom top', scrub: 1.2 },
          });
        }

        // float cards
        const floats = gsap.utils.toArray('.float-card');
        if (floats.length > 0) {
          gsap.fromTo(
            floats,
            { y: 100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              stagger: 0.2,
              ease: 'power3.out',
              scrollTrigger: { trigger: '#masked', start: 'top 60%' },
            }
          );
          gsap.to(floats[0], {
            x: -40,
            y: -30,
            ease: 'none',
            scrollTrigger: { trigger: '#masked', start: 'top top', end: 'bottom top', scrub: 1 },
          });
          if (floats[1]) {
            gsap.to(floats[1], {
              x: 40,
              y: 30,
              ease: 'none',
              scrollTrigger: { trigger: '#masked', start: 'top top', end: 'bottom top', scrub: 1 },
            });
          }
        }

        // process bars
        gsap.utils.toArray('.process-row').forEach((row, i) => {
          gsap.to(row.querySelector('.process-bar'), {
            scaleX: 1,
            duration: 1.4,
            delay: i * 0.12,
            ease: 'power3.inOut',
            scrollTrigger: { trigger: row, start: 'top 85%' },
          });
        });
      }
    }, appRef);

    return () => {
      ctx.revert();
      if (lenis) {
        if (raf) gsap.ticker.remove(raf);
        lenis.destroy();
      }
    };
  }, []);

  return (
    <div ref={appRef} className="font-geist">
      {/* ░░ LOADER ░░ */}
      <div id="loader" className="fixed inset-0 z-[100] bg-[#0a0d1f] flex flex-col items-center justify-center">
        <div
          id="loaderBrand"
          className="text-5xl sm:text-7xl md:text-8xl text-white tracking-tighter"
          style={{ filter: 'blur(24px)', opacity: 0 }}
        >
          RG<span className="text-orange-500 tracking-tighter"> S.r.l.</span>
        </div>
        <div className="w-48 sm:w-64 bg-white/10 mt-10 overflow-hidden" style={{ height: '1px' }}>
          <div id="loaderBar" className="h-full w-full bg-orange-500 origin-left scale-x-0"></div>
        </div>
        <div
          id="loaderCount"
          ref={loaderCountRef}
          className="mt-4 text-xs font-medium tracking-[0.3em] text-white/40 tabular-nums"
        >
          000
        </div>
      </div>

      {/* ░░ NAV ░░ */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#0a0d1f]/40 border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm font-semibold tracking-tight">
              RG<span className="text-orange-500"> S.r.l.</span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#chi-siamo" className="group relative text-sm text-white/60 hover:text-white transition-colors">
                Chi Siamo
                <span className="absolute -bottom-1 left-0 w-full bg-orange-500 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ height: '1px' }}></span>
              </a>
              <a href="#servizi" className="group relative text-sm text-white/60 hover:text-white transition-colors">
                Servizi
                <span className="absolute -bottom-1 left-0 w-full bg-orange-500 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ height: '1px' }}></span>
              </a>
              <a href="#progetti" className="group relative text-sm text-white/60 hover:text-white transition-colors">
                Progetti
                <span className="absolute -bottom-1 left-0 w-full bg-orange-500 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ height: '1px' }}></span>
              </a>
              <a href="#processo" className="group relative text-sm text-white/60 hover:text-white transition-colors">
                Il Processo
                <span className="absolute -bottom-1 left-0 w-full bg-orange-500 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ height: '1px' }}></span>
              </a>
            </div>
          </div>
          <a
            href="#contatti"
            className="cta-btn group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] border border-white/20 rounded-full px-5 py-2.5 hover:bg-white hover:text-[#0a0d1f] transition-all duration-300 will-change-transform"
          >
            CONTATTACI
            <iconify-icon icon="solar:arrow-right-up-linear" className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></iconify-icon>
          </a>
        </nav>
      </header>

      {/* ░░ HERO ░░ */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d1f] via-[#0e1228] to-[#0a0d1f]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <h1 id="wordmark" className="select-none text-[24vw] leading-[0.85] text-center will-change-transform tracking-tighter">
            RG<span className="text-orange-500 tracking-tighter">.</span>
          </h1>
        </div>
        <div id="cardStack" className="relative z-20 max-w-7xl mx-auto px-6 w-full pb-16 -mt-[6vw] will-change-transform">
          <div className="relative h-[44vh] sm:h-[52vh]">
            <div className="hero-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[72%] sm:w-[55%] md:w-[44%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/60 ring-1 ring-white/10 will-change-transform z-30">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
                alt="Cantiere edile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hero-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[58%] sm:w-[42%] md:w-[32%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/60 ring-1 ring-white/10 will-change-transform z-20">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
                alt="Ristrutturazione interni"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hero-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[58%] sm:w-[42%] md:w-[32%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/60 ring-1 ring-white/10 will-change-transform z-10">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop"
                alt="Costruzione"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div
          id="metaCard"
          className="absolute bottom-8 right-6 z-30 hidden md:flex items-center gap-4 rounded-xl bg-white/5 backdrop-blur-xl ring-1 ring-white/10 p-4 will-change-transform"
        >
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=200&auto=format&fit=crop"
            className="w-14 h-14 rounded-lg object-cover"
            alt="Residenza"
          />
          <div>
            <p className="text-xs tracking-[0.25em] text-white/40">DAL 2008</p>
            <p className="text-sm font-medium mt-1">Residenza Parioli — Roma</p>
          </div>
        </div>
        <div id="heroCopy" className="absolute bottom-8 left-6 z-30 max-w-xs will-change-transform">
          <p className="text-sm text-white/50 leading-relaxed">
            Impresa edile specializzata in costruzioni, ristrutturazioni complete e manutenzioni, al servizio di privati e aziende in tutta Italia.
          </p>
        </div>
      </section>

      {/* ░░ STATEMENT / CHI SIAMO ░░ */}
      <section id="chi-siamo" className="relative bg-[#f4f3ef] text-[#0a0d1f] py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <h2 data-reveal className="text-3xl sm:text-4xl md:text-5xl leading-tight max-w-3xl tracking-tighter">
            Ci dedichiamo con passione
            <span className="inline-flex items-center justify-center align-middle w-8 h-8 rounded-md bg-orange-500 mx-1">
              <iconify-icon icon="solar:asterisk-linear" className="text-lg text-white"></iconify-icon>
            </span>
            ai nostri clienti e ad ogni cantiere,
            <span className="text-[#0a0d1f]/30 tracking-tighter"> con cura, precisione e rispetto dei tempi.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10 mt-20 items-start">
            <div data-reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] border border-[#0a0d1f]/20 rounded-full px-4 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                CHI SIAMO
              </span>
            </div>
            <div data-reveal>
              <p className="text-sm leading-relaxed text-[#0a0d1f]/60 max-w-sm">
                RG S.r.l. è un'impresa di costruzioni con anni di esperienza nel settore edile. Realizziamo ristrutturazioni complete, nuove costruzioni e interventi di manutenzione, seguendo il cliente in ogni fase: dal sopralluogo iniziale alla consegna chiavi in mano.
              </p>
              <a
                href="#contatti"
                className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] mt-6 border-b border-[#0a0d1f] pb-1"
              >
                CONTATTACI
                <iconify-icon icon="solar:arrow-right-up-linear" className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></iconify-icon>
              </a>
            </div>
            <div data-reveal className="md:text-right">
              <p className="text-6xl md:text-7xl tracking-tighter">
                350<span className="text-orange-500 tracking-tighter">+</span>
              </p>
              <p className="text-xs tracking-[0.2em] text-[#0a0d1f]/40 mt-2">PROGETTI COMPLETATI</p>
            </div>
          </div>
          {/* parallax fragments */}
          <div className="grid grid-cols-3 gap-4 mt-24">
            <div className="parallax-frame overflow-hidden rounded-xl aspect-[4/5] will-change-transform">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop"
                className="parallax-img w-full h-full object-cover will-change-transform"
                alt="Operaio in cantiere"
              />
            </div>
            <div className="parallax-frame overflow-hidden rounded-xl aspect-[4/5] mt-10 will-change-transform">
              <img
                src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=1200&auto=format&fit=crop"
                className="parallax-img w-full h-full object-cover will-change-transform"
                alt="Cucina ristrutturata"
              />
            </div>
            <div className="parallax-frame overflow-hidden rounded-xl aspect-[4/5] will-change-transform">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
                className="parallax-img w-full h-full object-cover will-change-transform"
                alt="Struttura edile"
              />
            </div>
          </div>
          <div className="flex justify-between mt-6 text-xs tracking-[0.2em] text-[#0a0d1f]/40">
            <span data-reveal>NON SOLO EDILIZIA.</span>
            <span data-reveal>COSTRUIAMO FIDUCIA.</span>
          </div>
        </div>
      </section>

      {/* ░░ PINNED TYPOGRAPHY ░░ */}
      <section id="typo" className="relative bg-[#0a0d1f] h-screen overflow-hidden flex flex-col items-center justify-center">
        <p className="typo-line text-[11vw] md:text-[8vw] leading-none will-change-transform tracking-tighter">COSTRUIAMO</p>
        <p className="typo-line text-[11vw] md:text-[8vw] leading-none text-orange-500 will-change-transform tracking-tighter">IL FUTURO</p>
        <p className="typo-line text-[11vw] md:text-[8vw] leading-none will-change-transform tracking-tighter">DELLE TUE IDEE</p>
        <span className="absolute top-24 right-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] border border-white/15 rounded-full px-4 py-2 text-white/60">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
          I NOSTRI SERVIZI
        </span>
      </section>

      {/* ░░ SERVIZI / GLASS CARDS ░░ */}
      <section id="servizi" className="relative bg-[#0a0d1f] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-end mb-20">
            <h3 data-reveal className="text-3xl md:text-4xl leading-tight tracking-tighter">
              Trasformiamo i tuoi spazi
              <span className="text-white/30 tracking-tighter"> in ambienti funzionali, sicuri e di valore.</span>
            </h3>
            <p data-reveal className="text-sm text-white/40 leading-relaxed max-w-sm md:justify-self-end">
              Dalla progettazione alla consegna, un unico interlocutore per tutte le lavorazioni: edilizia, impianti, finiture e manutenzioni programmate.
            </p>
          </div>
          <div className="card-group grid sm:grid-cols-3 gap-4">
            <div className="group-card rounded-2xl bg-white/[0.04] backdrop-blur-xl ring-1 ring-white/10 p-7 hover:-translate-y-1.5 transition-transform duration-500 will-change-transform">
              <div className="flex items-start justify-between">
                <iconify-icon icon="solar:home-smile-linear" className="text-4xl text-orange-500"></iconify-icon>
                <iconify-icon icon="solar:arrow-right-up-linear" className="text-xl text-orange-500"></iconify-icon>
              </div>
              <p className="text-lg font-medium mt-6 tracking-tight">Ristrutturazioni Complete</p>
              <p className="text-sm text-white/40 mt-3 leading-relaxed">
                Ristrutturazioni chiavi in mano di appartamenti, ville e locali commerciali, con gestione completa di pratiche e lavorazioni.
              </p>
            </div>
            <div className="group-card rounded-2xl bg-white/[0.04] backdrop-blur-xl ring-1 ring-white/10 p-7 hover:-translate-y-1.5 transition-transform duration-500 will-change-transform">
              <div className="flex items-start justify-between">
                <iconify-icon icon="solar:buildings-2-linear" className="text-4xl text-orange-500"></iconify-icon>
                <iconify-icon icon="solar:arrow-right-up-linear" className="text-xl text-orange-500"></iconify-icon>
              </div>
              <p className="text-lg font-medium mt-6 tracking-tight">Nuove Costruzioni</p>
              <p className="text-sm text-white/40 mt-3 leading-relaxed">
                Realizzazione di edifici residenziali e commerciali con materiali certificati e tecniche costruttive moderne ed efficienti.
              </p>
            </div>
            <div className="group-card rounded-2xl bg-white/[0.04] backdrop-blur-xl ring-1 ring-white/10 p-7 hover:-translate-y-1.5 transition-transform duration-500 will-change-transform">
              <div className="flex items-start justify-between">
                <iconify-icon icon="solar:settings-linear" className="text-4xl text-orange-500"></iconify-icon>
                <iconify-icon icon="solar:arrow-right-up-linear" className="text-xl text-orange-500"></iconify-icon>
              </div>
              <p className="text-lg font-medium mt-6 tracking-tight">Manutenzioni & Impianti</p>
              <p className="text-sm text-white/40 mt-3 leading-relaxed">
                Manutenzioni ordinarie e straordinarie, impianti elettrici e idraulici, rifacimento facciate e coperture.
              </p>
            </div>
          </div>
          {/* stats */}
          <div className="card-group grid sm:grid-cols-3 gap-4 mt-6">
            <div className="group-card rounded-2xl bg-white/[0.04] backdrop-blur-xl ring-1 ring-white/10 p-7 hover:-translate-y-1.5 transition-transform duration-500 will-change-transform">
              <p className="text-5xl tracking-tighter">
                15<span className="text-orange-500 text-2xl align-top tracking-tighter">+</span>
              </p>
              <p className="text-sm text-white/40 mt-5 leading-relaxed">
                Anni di esperienza nel settore edile, tra cantieri pubblici e privati.
              </p>
            </div>
            <div className="group-card rounded-2xl bg-white/[0.04] backdrop-blur-xl ring-1 ring-white/10 p-7 hover:-translate-y-1.5 transition-transform duration-500 will-change-transform">
              <p className="text-5xl tracking-tighter">
                98<span className="text-orange-500 text-2xl align-top tracking-tighter">%</span>
              </p>
              <p className="text-sm text-white/40 mt-5 leading-relaxed">
                Di clienti soddisfatti che ci raccomandano ad amici e colleghi.
              </p>
            </div>
            <div className="group-card rounded-2xl bg-white/[0.04] backdrop-blur-xl ring-1 ring-white/10 p-7 hover:-translate-y-1.5 transition-transform duration-500 will-change-transform">
              <p className="text-5xl tracking-tighter">
                24<span className="text-orange-500 text-2xl align-top tracking-tighter">h</span>
              </p>
              <p className="text-sm text-white/40 mt-5 leading-relaxed">
                Tempo medio di risposta per sopralluoghi e preventivi gratuiti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ░░ PROGETTI ░░ */}
      <section id="progetti" className="relative bg-[#0a0d1f] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <span data-reveal className="text-xs tracking-[0.25em] text-white/40">[ LAVORI SELEZIONATI ]</span>
            <h3 data-reveal className="text-4xl md:text-5xl md:text-right leading-tight tracking-tighter">
              LA QUALITÀ È<br />NEI DETTAGLI
            </h3>
          </div>
          <div className="card-group grid md:grid-cols-3 gap-6">
            <a href="#" className="group-card group block hover:-translate-y-1.5 transition-transform duration-500 will-change-transform">
              <div className="overflow-hidden rounded-2xl aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
                  alt="Villa moderna"
                />
              </div>
              <div className="flex justify-between mt-4 text-xs tracking-[0.2em] text-white/40">
                <span>RESIDENZIALE</span>
                <span>320 M²</span>
              </div>
              <p className="text-sm font-medium mt-1.5">Villa EUR — Roma</p>
            </a>
            <a href="#" className="group-card group block md:mt-16 hover:-translate-y-1.5 transition-transform duration-500 will-change-transform">
              <div className="overflow-hidden rounded-2xl aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
                  alt="Appartamento ristrutturato"
                />
              </div>
              <div className="flex justify-between mt-4 text-xs tracking-[0.2em] text-white/40">
                <span>RISTRUTTURAZIONE</span>
                <span>140 M²</span>
              </div>
              <p className="text-sm font-medium mt-1.5">Attico Prati — Roma</p>
            </a>
            <a href="#" className="group-card group block md:mt-32 hover:-translate-y-1.5 transition-transform duration-500 will-change-transform">
              <div className="overflow-hidden rounded-2xl aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
                  alt="Uffici commerciali"
                />
              </div>
              <div className="flex justify-between mt-4 text-xs tracking-[0.2em] text-white/40">
                <span>COMMERCIALE</span>
                <span>580 M²</span>
              </div>
              <p className="text-sm font-medium mt-1.5">Uffici Tiburtina — Roma</p>
            </a>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-20">
            <h4 data-reveal className="text-3xl md:text-4xl tracking-tighter">
              OGNI CANTIERE<br />HA LA SUA STORIA
            </h4>
            <a
              data-reveal
              href="#"
              className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] border-b border-white pb-1"
            >
              VEDI TUTTI I PROGETTI
              <iconify-icon icon="solar:arrow-right-up-linear" className="text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></iconify-icon>
            </a>
          </div>
        </div>
      </section>

      {/* ░░ ARCHIVIO ░░ */}
      <section id="archive" className="relative bg-[#0a0d1f] py-20 overflow-hidden border-y border-white/5">
        <p data-reveal className="text-xs tracking-[0.25em] text-white/40 px-6 max-w-7xl mx-auto mb-10">
          [ L'ARCHIVIO — 2008 → OGGI ]
        </p>
        <div id="archiveTrack" className="flex gap-5 will-change-transform pl-6" style={{ width: 'max-content' }}>
          <div className="w-64 sm:w-80 aspect-[3/4] rounded-xl overflow-hidden shrink-0 ring-1 ring-white/10">
            <img
              src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-full object-cover"
              alt="Cantiere"
            />
          </div>
          <div className="w-64 sm:w-80 aspect-[3/4] rounded-xl overflow-hidden shrink-0 ring-1 ring-white/10">
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-full object-cover"
              alt="Interni"
            />
          </div>
          <div className="w-64 sm:w-80 aspect-[3/4] rounded-xl overflow-hidden shrink-0 ring-1 ring-white/10">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-full object-cover"
              alt="Villa"
            />
          </div>
          <div className="w-64 sm:w-80 aspect-[3/4] rounded-xl overflow-hidden shrink-0 ring-1 ring-white/10">
            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-full object-cover"
              alt="Cucina"
            />
          </div>
          <div className="w-64 sm:w-80 aspect-[3/4] rounded-xl overflow-hidden shrink-0 ring-1 ring-white/10">
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-full object-cover"
              alt="Architettura"
            />
          </div>
          <div className="w-64 sm:w-80 aspect-[3/4] rounded-xl overflow-hidden shrink-0 ring-1 ring-white/10">
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-full object-cover"
              alt="Bagno moderno"
            />
          </div>
        </div>
      </section>

      {/* ░░ NUMERO MASCHERATO ░░ */}
      <section id="masked" className="relative bg-[#0a0d1f] py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <h3
            className="text-[34vw] md:text-[26vw] leading-none text-center bg-clip-text text-transparent select-none tracking-tighter"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2400&auto=format&fit=crop')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            15
          </h3>
          <p data-reveal className="text-center text-xs tracking-[0.3em] text-white/40 mt-4">
            ANNI DI LAVORO SERIO E COSTANTE
          </p>
          <div className="relative grid sm:grid-cols-2 gap-6 mt-16 max-w-3xl mx-auto">
            <a href="#" className="float-card group rounded-2xl bg-white/[0.04] backdrop-blur-xl ring-1 ring-white/10 p-6 hover:-translate-y-1.5 transition-transform duration-500 will-change-transform">
              <div className="overflow-hidden rounded-xl aspect-video mb-5">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
                  alt="Appartamento Trastevere"
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Appartamento Trastevere</p>
                <iconify-icon icon="solar:arrow-right-up-linear" className="text-base text-orange-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></iconify-icon>
              </div>
              <p className="text-xs tracking-[0.2em] text-white/40 mt-1.5">RISTRUTTURAZIONE — 95 M²</p>
            </a>
            <a href="#" className="float-card group rounded-2xl bg-white/[0.04] backdrop-blur-xl ring-1 ring-white/10 p-6 sm:mt-12 hover:-translate-y-1.5 transition-transform duration-500 will-change-transform">
              <div className="overflow-hidden rounded-xl aspect-video mb-5">
                <img
                  src="https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=1600&auto=format&fit=crop"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
                  alt="Villa Ostia"
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Villa Ostia Antica</p>
                <iconify-icon icon="solar:arrow-right-up-linear" className="text-base text-orange-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></iconify-icon>
              </div>
              <p className="text-xs tracking-[0.2em] text-white/40 mt-1.5">NUOVA COSTRUZIONE — 260 M²</p>
            </a>
          </div>
        </div>
      </section>

      {/* ░░ PROCESSO ░░ */}
      <section id="processo" className="relative bg-[#f4f3ef] text-[#0a0d1f] py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <span data-reveal className="text-xs tracking-[0.25em] text-[#0a0d1f]/40">[ COME LAVORIAMO ]</span>
          <h3 data-reveal className="text-4xl md:text-5xl mt-4 mb-20 tracking-tighter">IL PROCESSO</h3>
          <div className="space-y-14">
            <div className="process-row">
              <div className="flex justify-between items-baseline mb-4">
                <p className="text-sm font-semibold">
                  <span className="text-orange-500 mr-3">01</span>Sopralluogo & Preventivo
                </p>
                <p className="text-xs tracking-[0.2em] text-[#0a0d1f]/40">GRATUITO — 48H</p>
              </div>
              <div className="bg-[#0a0d1f]/10" style={{ height: '1px' }}>
                <div className="process-bar h-full bg-orange-500 origin-left scale-x-0 will-change-transform"></div>
              </div>
            </div>
            <div className="process-row">
              <div className="flex justify-between items-baseline mb-4">
                <p className="text-sm font-semibold">
                  <span className="text-orange-500 mr-3">02</span>Progettazione & Permessi
                </p>
                <p className="text-xs tracking-[0.2em] text-[#0a0d1f]/40">SETTIMANE 1–4</p>
              </div>
              <div className="bg-[#0a0d1f]/10" style={{ height: '1px' }}>
                <div className="process-bar h-full bg-orange-500 origin-left scale-x-0 will-change-transform"></div>
              </div>
            </div>
            <div className="process-row">
              <div className="flex justify-between items-baseline mb-4">
                <p className="text-sm font-semibold">
                  <span className="text-orange-500 mr-3">03</span>Esecuzione Lavori
                </p>
                <p className="text-xs tracking-[0.2em] text-[#0a0d1f]/40">SECONDO CRONOPROGRAMMA</p>
              </div>
              <div className="bg-[#0a0d1f]/10" style={{ height: '1px' }}>
                <div className="process-bar h-full bg-orange-500 origin-left scale-x-0 will-change-transform"></div>
              </div>
            </div>
            <div className="process-row">
              <div className="flex justify-between items-baseline mb-4">
                <p className="text-sm font-semibold">
                  <span className="text-orange-500 mr-3">04</span>Consegna & Garanzia
                </p>
                <p className="text-xs tracking-[0.2em] text-[#0a0d1f]/40">ASSISTENZA CONTINUA</p>
              </div>
              <div className="bg-[#0a0d1f]/10" style={{ height: '1px' }}>
                <div className="process-bar h-full bg-orange-500 origin-left scale-x-0 will-change-transform"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ░░ CITAZIONE ░░ */}
      <section className="relative h-[80vh] overflow-hidden flex items-center justify-center">
        <div className="parallax-frame absolute inset-0 will-change-transform">
          <img
            src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=2400&auto=format&fit=crop"
            className="parallax-img w-full h-full object-cover will-change-transform"
            alt="Cantiere al tramonto"
          />
        </div>
        <div className="absolute inset-0 bg-[#0a0d1f]/55"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p data-reveal className="text-2xl sm:text-3xl md:text-4xl leading-snug tracking-tighter">
            Una casa non è solo un cantiere —
            <span className="text-white/40 tracking-tighter"> è il luogo dove vivrai la tua vita.</span>
          </p>
          <p data-reveal className="text-sm font-medium mt-8">Roberto Greco</p>
          <p data-reveal className="text-xs tracking-[0.2em] text-white/40 mt-1">FONDATORE — RG S.R.L.</p>
        </div>
      </section>

      {/* ░░ FOOTER / CONTATTI ░░ */}
      <footer id="contatti" className="relative bg-[#0a0d1f] pt-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between text-xs tracking-[0.2em] text-white/40 border-b border-white/10 pb-8">
            <span>DAL 2008</span>
            <span className="hidden sm:block">QUALITÀ // SERIETÀ // PUNTUALITÀ</span>
            <span>CONTATTI</span>
          </div>
          <div className="text-center py-20">
            <a
              data-reveal
              href="tel:+390612345678"
              className="block text-3xl sm:text-4xl md:text-5xl hover:text-white/70 transition-colors tracking-tighter"
            >
              +39 06 1234 5678
            </a>
            <a
              data-reveal
              href="mailto:info@rgsrl.it"
              className="block text-3xl sm:text-4xl md:text-5xl text-orange-500 mt-2 hover:text-orange-400 transition-colors tracking-tighter"
            >
              info@rgsrl.it
            </a>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 text-xs text-white/40 pb-16">
            <div>
              <p>TUTTI I DIRITTI RISERVATI.</p>
              <p className="mt-1">©2024 RG S.R.L. — P.IVA 01234567890</p>
            </div>
            <div className="sm:text-center">
              <p>VIA DELLE COSTRUZIONI 14, ROMA</p>
              <p className="mt-1">ITALIA 00100</p>
            </div>
            <div className="sm:text-right space-x-4">
              <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
              <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
              <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
            </div>
          </div>
        </div>
        <p className="select-none text-[28vw] leading-[0.75] text-white/[0.04] text-center -mb-[4vw] tracking-tighter">
          RG SRL
        </p>
      </footer>
    </div>
  );
}