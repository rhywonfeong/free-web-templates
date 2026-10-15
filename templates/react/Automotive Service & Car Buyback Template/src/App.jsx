import { useEffect, useLayoutEffect } from "react";

const sourceScripts = [
  {
    "src": "https://cdn.tailwindcss.com",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "https://cdn.jsdelivr.net/npm/lenis@1.1.20/dist/lenis.min.js",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/ScrollTrigger.min.js",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n    const menuButton = document.getElementById('menu-button');\n    const mobileMenu = document.getElementById('mobile-menu');\n    const menuIcon = document.getElementById('menu-icon');\n\n    menuButton.addEventListener('click', () => {\n      const opened = menuButton.getAttribute('aria-expanded') === 'true';\n      menuButton.setAttribute('aria-expanded', String(!opened));\n      mobileMenu.classList.toggle('invisible', opened);\n      mobileMenu.classList.toggle('opacity-0', opened);\n      mobileMenu.classList.toggle('translate-y-2', opened);\n      menuIcon.setAttribute('icon', opened ? 'solar:hamburger-menu-linear' : 'solar:close-circle-linear');\n    });\n\n    document.querySelectorAll('#mobile-menu a').forEach((link) => {\n      link.addEventListener('click', () => {\n        menuButton.setAttribute('aria-expanded', 'false');\n        mobileMenu.classList.add('invisible', 'opacity-0', 'translate-y-2');\n        menuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');\n      });\n    });\n\n    const lenis = new Lenis({\n      duration: 1.15,\n      smoothWheel: true,\n      wheelMultiplier: 0.9,\n      touchMultiplier: 1.1\n    });\n\n    function scrollFrame(time) {\n      lenis.raf(time);\n      requestAnimationFrame(scrollFrame);\n    }\n    requestAnimationFrame(scrollFrame);\n\n    document.querySelectorAll('a[href^=\"#\"]').forEach((anchor) => {\n      anchor.addEventListener('click', (event) => {\n        const target = document.querySelector(anchor.getAttribute('href'));\n        if (target) {\n          event.preventDefault();\n          lenis.scrollTo(target, { offset: -64 });\n        }\n      });\n    });\n\n    gsap.registerPlugin(ScrollTrigger);\n    lenis.on('scroll', ScrollTrigger.update);\n    gsap.ticker.add((time) => lenis.raf(time * 1000));\n    gsap.ticker.lagSmoothing(0);\n\n    document.querySelectorAll('[data-reveal]').forEach((element) => {\n      const words = element.textContent.trim().split(/\\s+/);\n      element.innerHTML = words.map((word) =>\n        '<span class=\"inline-block overflow-hidden align-bottom\"><span class=\"reveal-word inline-block\">' + word + '&nbsp;</span></span>'\n      ).join('');\n\n      gsap.from(element.querySelectorAll('.reveal-word'), {\n        yPercent: 110,\n        opacity: 0,\n        duration: 0.85,\n        stagger: 0.045,\n        ease: 'power3.out',\n        scrollTrigger: {\n          trigger: element,\n          start: 'top 86%',\n          once: true\n        }\n      });\n    });\n\n    const form = document.getElementById('estimate-form');\n    const submitButton = document.getElementById('submit-button');\n    const submitLabel = document.getElementById('submit-label');\n    const submitIcon = document.getElementById('submit-icon');\n    const formMessage = document.getElementById('form-message');\n\n    form.addEventListener('submit', (event) => {\n      event.preventDefault();\n\n      if (!form.checkValidity()) {\n        form.reportValidity();\n        return;\n      }\n\n      submitButton.disabled = true;\n      submitButton.classList.add('cursor-wait', 'opacity-80');\n      submitLabel.textContent = 'Envoi en cours';\n      submitIcon.setAttribute('icon', 'solar:refresh-circle-linear');\n      submitIcon.classList.add('animate-spin');\n\n      window.setTimeout(() => {\n        submitButton.disabled = false;\n        submitButton.classList.remove('cursor-wait', 'opacity-80');\n        submitLabel.textContent = 'Demande envoyée';\n        submitIcon.setAttribute('icon', 'solar:check-circle-linear');\n        submitIcon.classList.remove('animate-spin');\n        formMessage.textContent = 'Merci. Votre demande a bien été enregistrée. Nous vous recontacterons rapidement.';\n        formMessage.classList.remove('hidden');\n        form.reset();\n\n        window.setTimeout(() => {\n          submitLabel.textContent = 'Demander mon estimation';\n          submitIcon.setAttribute('icon', 'solar:arrow-right-linear');\n        }, 3500);\n      }, 1200);\n    });\n  "
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "m-0 overflow-x-hidden bg-white text-[#040506] antialiased";
const sourceBodyStyle = "font-family:'Inter',sans-serif;";
const inlineEventAttributeNames = [
  "click",
  "change",
  "input",
  "submit",
  "mouseover",
  "mouseout",
  "mouseenter",
  "mouseleave",
  "keydown",
  "keyup",
  "focus",
  "blur"
];

function applyElementAttributes(element, attributes) {
  const previousId = element.id;
  const previousClassName = element.className;
  const previousStyleAttribute = element.getAttribute("style");

  if (attributes.id) {
    element.id = attributes.id;
  }
  attributes.className
    .split(/\s+/)
    .filter(Boolean)
    .forEach((className) => element.classList.add(className));
  if (attributes.style) {
    element.style.cssText = [element.style.cssText, attributes.style]
      .filter(Boolean)
      .join("; ");
  }

  return () => {
    element.id = previousId;
    element.className = previousClassName;
    if (previousStyleAttribute === null) {
      element.removeAttribute("style");
    } else {
      element.setAttribute("style", previousStyleAttribute);
    }
  };
}

function applySourceRootAttributes() {
  const restoreHtml = applyElementAttributes(document.documentElement, {
    id: sourceHtmlId,
    className: sourceHtmlClassName,
    style: sourceHtmlStyle,
  });
  const restoreBody = applyElementAttributes(document.body, {
    id: sourceBodyId,
    className: sourceBodyClassName,
    style: sourceBodyStyle,
  });

  return () => {
    restoreBody();
    restoreHtml();
  };
}

function attachInlineEventHandlers(root) {
  const cleanups = [];

  inlineEventAttributeNames.forEach((eventName) => {
    root
      .querySelectorAll(`[data-aura-on${eventName}]`)
      .forEach((element) => {
        const handlerCode = element.getAttribute(`data-aura-on${eventName}`);
        if (!handlerCode) return;

        const listener = function (event) {
          const result = Function("event", handlerCode).call(element, event);
          if (result === false) {
            event.preventDefault();
            event.stopPropagation();
          }
        };
        element.addEventListener(eventName, listener);
        cleanups.push(() => element.removeEventListener(eventName, listener));
      });
  });

  return () => cleanups.forEach((cleanup) => cleanup());
}

function appendSourceScript(scriptInfo) {
  const script = document.createElement("script");
  if (scriptInfo.id) script.id = scriptInfo.id;
  if (scriptInfo.type) script.type = scriptInfo.type;
  if (scriptInfo.async) script.async = true;
  if (scriptInfo.defer) script.defer = true;
  if (scriptInfo.src) {
    script.src = scriptInfo.src;
  } else if (scriptInfo.content) {
    script.textContent = scriptInfo.content;
  }
  document.body.appendChild(script);
  return script;
}

export default function App() {
  useLayoutEffect(() => applySourceRootAttributes(), []);

  useEffect(() => {
    const detachInlineEventHandlers = attachInlineEventHandlers(document);
    const appendedScripts = sourceScripts
      .filter((scriptInfo) => scriptInfo.src || scriptInfo.content)
      .map(appendSourceScript);

    return () => {
      detachInlineEventHandlers();
      appendedScripts.forEach((script) => script.remove());
    };
  }, []);

  return (
    <div className="aura-source-body m-0 overflow-x-hidden bg-white text-[#040506] antialiased" style={{"fontFamily": "'Inter',sans-serif"}}>
      <header id="site-header" className="fixed inset-x-0 top-0 z-50 h-16 border-b border-transparent text-white transition-colors duration-300" style={{"fontFamily": "'Lato',sans-serif"}}>
          <div className="mx-auto flex h-full max-w-screen-2xl items-center justify-between px-5 lg:px-10">
            <a href="#accueil" className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              <span className="border border-white px-2.5 py-1.5 text-sm font-semibold tracking-tight transition-colors duration-300 group-hover:bg-white group-hover:text-[#040506]">AR</span>
              <span className="text-base font-semibold tracking-tight">ATELIER R</span>
            </a>

            <nav aria-label="Navigation principale" className="hidden items-center gap-7 text-sm lg:flex">
              <a href="#services" className="border-b border-transparent py-2 transition-colors duration-300 hover:border-white">Nos rachats</a>
              <a href="#fonctionnement" className="border-b border-transparent py-2 transition-colors duration-300 hover:border-white">Comment ça marche</a>
              <a href="#galerie" className="border-b border-transparent py-2 transition-colors duration-300 hover:border-white">Véhicules</a>
              <a href="#apropos" className="border-b border-transparent py-2 transition-colors duration-300 hover:border-white">À propos</a>
              <a href="#contact" className="group relative isolate overflow-hidden border border-white bg-white px-5 py-2.5 font-semibold uppercase tracking-wide text-[#040506] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                <span className="absolute inset-0 -translate-x-full bg-[#f0f2f4] transition-transform duration-300 group-hover:translate-x-0"></span>
                <span className="relative inline-flex items-center gap-2">
                  Estimer mon véhicule
                  <iconify-icon icon="solar:arrow-right-linear" className="text-base transition-transform duration-300 group-hover:translate-x-1" style={{"strokeWidth": "1.5"}}></iconify-icon>
                </span>
              </a>
            </nav>

            <button id="menu-button" type="button" aria-label="Ouvrir le menu" aria-expanded="false" className="grid size-10 place-items-center border border-white/60 transition-colors duration-300 hover:bg-white hover:text-[#040506] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white lg:hidden">
              <iconify-icon id="menu-icon" icon="solar:hamburger-menu-linear" className="text-2xl" style={{"strokeWidth": "1.5"}}></iconify-icon>
            </button>
          </div>

          <div id="mobile-menu" className="invisible absolute left-0 right-0 top-16 translate-y-2 border-t border-white/20 bg-[#040506] px-5 py-6 opacity-0 transition-all duration-300 lg:hidden">
            <nav className="flex flex-col text-base">
              <a href="#services" className="border-b border-white/10 py-4">Nos rachats</a>
              <a href="#fonctionnement" className="border-b border-white/10 py-4">Comment ça marche</a>
              <a href="#galerie" className="border-b border-white/10 py-4">Véhicules</a>
              <a href="#apropos" className="border-b border-white/10 py-4">À propos</a>
              <a href="#contact" className="mt-5 inline-flex items-center justify-between bg-white px-5 py-4 font-semibold uppercase text-[#040506]">
                Estimer mon véhicule
                <iconify-icon icon="solar:arrow-right-linear" style={{"strokeWidth": "1.5"}}></iconify-icon>
              </a>
            </nav>
          </div>
        </header>

        <main className="">
          <section id="accueil" className="relative flex min-h-[600px] items-end overflow-hidden text-white" style={{"height": "85vh"}}>
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&amp;fit=crop&amp;w=2200&amp;q=90" alt="Véhicule sur une route au coucher du soleil" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0" style={{"background": "linear-gradient(90deg,rgba(4,5,6,0.86) 0%,rgba(4,5,6,0.48) 45%,rgba(4,5,6,0.04) 76%),linear-gradient(to top,rgba(4,5,6,0.72),transparent 55%)"}}></div>

            <div className="relative mx-auto w-full max-w-screen-2xl px-5 pb-14 pt-32 lg:px-10 lg:pb-20">
              <div className="max-w-4xl">
                <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide">
                  <span className="h-px w-10 bg-white"></span>
                  Rachat automobile professionnel
                </div>

                <h1 data-reveal="" className="max-w-3xl text-5xl font-normal uppercase leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl" style={{"fontFamily": "'Lato',sans-serif"}}><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">Votre&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">véhicule,&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">racheté&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">en&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">l’état.&nbsp;</span></span></h1>

                <p data-reveal="" className="mt-6 max-w-2xl text-lg font-semibold leading-relaxed sm:text-xl"><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">Avec&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">ou&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">sans&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">contrôle&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">technique,&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">moteur&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">HS,&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">fort&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">kilométrage,&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">gagé,&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">accidenté&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">ou&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">destiné&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">à&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">l’enlèvement.&nbsp;</span></span></p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a href="#contact" className="group relative isolate inline-flex min-h-14 items-center justify-between overflow-hidden border border-white bg-white px-5 text-sm font-semibold uppercase tracking-wide text-[#040506] transition-transform duration-200 active:translate-y-0.5 sm:min-w-60">
                    <span className="absolute inset-0 -translate-x-full bg-[#f0f2f4] transition-transform duration-300 group-hover:translate-x-0"></span>
                    <span className="relative">Recevoir une estimation</span>
                    <iconify-icon icon="solar:arrow-right-linear" className="relative text-lg transition-transform duration-300 group-hover:translate-x-1.5" style={{"strokeWidth": "1.5"}}></iconify-icon>
                  </a>

                  <a href="tel:+33612345678" className="group inline-flex min-h-14 items-center justify-between gap-5 border border-white/70 px-5 text-sm font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-white hover:text-[#040506]">
                    <span>06 12 34 56 78</span>
                    <iconify-icon icon="solar:phone-calling-linear" className="text-lg transition-transform duration-300 group-hover:rotate-6" style={{"strokeWidth": "1.5"}}></iconify-icon>
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80">
                  <span className="inline-flex items-center gap-2">
                    <iconify-icon icon="solar:clock-circle-linear" className="text-lg" style={{"strokeWidth": "1.5"}}></iconify-icon>
                    Réponse sous 24 h
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <iconify-icon icon="solar:map-point-linear" className="text-lg" style={{"strokeWidth": "1.5"}}></iconify-icon>
                    Enlèvement possible
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <iconify-icon icon="solar:shield-check-linear" className="text-lg" style={{"strokeWidth": "1.5"}}></iconify-icon>
                    Paiement sécurisé
                  </span>
                </div>
              </div>
            </div>

            <a href="#services" aria-label="Découvrir nos services" className="absolute bottom-8 right-5 hidden items-center gap-3 text-xs uppercase tracking-wide lg:flex lg:right-10">
              Découvrir
              <span className="grid size-10 place-items-center border border-white/50">
                <iconify-icon icon="solar:arrow-down-linear" className="animate-bounce text-lg" style={{"strokeWidth": "1.5"}}></iconify-icon>
              </span>
            </a>
          </section>

          <section id="services" className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-5 lg:px-10">
              <div className="mx-auto max-w-3xl text-center">
                <span className="text-xs font-semibold uppercase text-[#656363]">Une solution, quel que soit l’état</span>
                <h2 data-reveal="" className="mt-4 text-3xl font-normal uppercase tracking-tight sm:text-4xl"><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">Nous&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">rachetons&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">tous&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">types&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">de&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">véhicules&nbsp;</span></span></h2>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#656363]">
                  Pas besoin de réparer votre véhicule avant de nous contacter. Notre offre prend en compte son état réel et sa situation administrative.
                </p>
              </div>

              <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-14">
                <article className="group text-center">
                  <div className="mx-auto grid size-14 place-items-center border border-[#e5e7eb] transition-colors duration-300 group-hover:border-[#040506] group-hover:bg-[#040506] group-hover:text-white">
                    <iconify-icon icon="solar:bolt-linear" className="text-3xl transition-transform duration-300 group-hover:scale-110" style={{"strokeWidth": "1.5"}}></iconify-icon>
                  </div>
                  <h3 className="mt-5 text-base font-bold uppercase">Rapidité</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#656363]">Envoyez quelques informations et recevez une première estimation sous 24 heures.</p>
                </article>

                <article className="group text-center">
                  <div className="mx-auto grid size-14 place-items-center border border-[#e5e7eb] transition-colors duration-300 group-hover:border-[#040506] group-hover:bg-[#040506] group-hover:text-white">
                    <iconify-icon icon="solar:shield-check-linear" className="text-3xl transition-transform duration-300 group-hover:scale-110" style={{"strokeWidth": "1.5"}}></iconify-icon>
                  </div>
                  <h3 className="mt-5 text-base font-bold uppercase">Simplicité</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#656363]">Nous vous accompagnons pour les documents, la cession et l’enlèvement du véhicule.</p>
                </article>

                <article className="group text-center">
                  <div className="mx-auto grid size-14 place-items-center border border-[#e5e7eb] transition-colors duration-300 group-hover:border-[#040506] group-hover:bg-[#040506] group-hover:text-white">
                    <iconify-icon icon="solar:hand-money-linear" className="text-3xl transition-transform duration-300 group-hover:scale-110" style={{"strokeWidth": "1.5"}}></iconify-icon>
                  </div>
                  <h3 className="mt-5 text-base font-bold uppercase">Prix transparent</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#656363]">Une proposition claire selon le modèle, l’état mécanique et la valeur du véhicule.</p>
                </article>
              </div>

              <div className="mt-16 grid gap-px overflow-hidden border border-[#e5e7eb] bg-[#e5e7eb] sm:grid-cols-2 lg:grid-cols-4">
                <article className="group bg-white p-6 transition-colors duration-300 hover:bg-[#f9fafb]">
                  <iconify-icon icon="solar:wheel-linear" className="text-3xl" style={{"strokeWidth": "1.5"}}></iconify-icon>
                  <h3 className="mt-8 text-base font-semibold uppercase">Voitures</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#656363]">Citadines, berlines, SUV, breaks et véhicules de collection.</p>
                </article>

                <article className="group bg-white p-6 transition-colors duration-300 hover:bg-[#f9fafb]">
                  <iconify-icon icon="solar:bus-linear" className="text-3xl" style={{"strokeWidth": "1.5"}}></iconify-icon>
                  <h3 className="mt-8 text-base font-semibold uppercase">Utilitaires</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#656363]">Fourgons, camionnettes et véhicules professionnels.</p>
                </article>

                <article className="group bg-white p-6 transition-colors duration-300 hover:bg-[#f9fafb]">
                  <iconify-icon icon="solar:medical-kit-linear" className="text-3xl" style={{"strokeWidth": "1.5"}}></iconify-icon>
                  <h3 className="mt-8 text-base font-semibold uppercase">Taxi &amp; ambulance</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#656363]">Même fortement kilométrés ou avec des équipements spécifiques.</p>
                </article>

                <article className="group bg-white p-6 transition-colors duration-300 hover:bg-[#f9fafb]">
                  <iconify-icon icon="solar:danger-triangle-linear" className="text-3xl" style={{"strokeWidth": "1.5"}}></iconify-icon>
                  <h3 className="mt-8 text-base font-semibold uppercase">Accidentés &amp; HS</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#656363]">Moteur cassé, sans CT, gagé, accidenté ou non roulant.</p>
                </article>
              </div>
            </div>
          </section>

          <section id="galerie" className="bg-[#f0f2f4] py-16 sm:py-20">
            <div className="mx-auto max-w-screen-2xl px-5 lg:px-10">
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>
                  <span className="text-xs font-semibold uppercase text-[#656363]">Exemples de reprises</span>
                  <h2 data-reveal="" className="mt-3 text-3xl font-normal uppercase tracking-tight sm:text-4xl"><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">Chaque&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">véhicule&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">a&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">une&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">valeur&nbsp;</span></span></h2>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-[#656363]">
                  Nous étudions chaque demande individuellement, sans limiter notre analyse aux véhicules en parfait état.
                </p>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <article className="group overflow-hidden border border-[#e5e7eb] bg-white">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&amp;fit=crop&amp;w=1000&amp;q=85" alt="Voiture d’occasion" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0" style={{"background": "linear-gradient(to top,rgba(4,5,6,0.72),transparent 65%)"}}></div>
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <span className="text-xs uppercase text-white/70">Catégorie 01</span>
                      <h3 className="mt-1 text-xl font-semibold uppercase" style={{"fontFamily": "'Archivo Narrow',sans-serif"}}>Voiture d’occasion</h3>
                      <p className="mt-2 text-sm text-white/80">Avec ou sans contrôle technique</p>
                    </div>
                  </div>
                </article>

                <article className="group overflow-hidden border border-[#e5e7eb] bg-white">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&amp;fit=crop&amp;w=1000&amp;q=85" alt="Véhicule utilitaire" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0" style={{"background": "linear-gradient(to top,rgba(4,5,6,0.72),transparent 65%)"}}></div>
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <span className="text-xs uppercase text-white/70">Catégorie 02</span>
                      <h3 className="mt-1 text-xl font-semibold uppercase" style={{"fontFamily": "'Archivo Narrow',sans-serif"}}>Utilitaire professionnel</h3>
                      <p className="mt-2 text-sm text-white/80">Fort kilométrage accepté</p>
                    </div>
                  </div>
                </article>

                <article className="group overflow-hidden border border-[#e5e7eb] bg-white">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&amp;fit=crop&amp;w=1000&amp;q=85" alt="Véhicule en atelier mécanique" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0" style={{"background": "linear-gradient(to top,rgba(4,5,6,0.72),transparent 65%)"}}></div>
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <span className="text-xs uppercase text-white/70">Catégorie 03</span>
                      <h3 className="mt-1 text-xl font-semibold uppercase" style={{"fontFamily": "'Archivo Narrow',sans-serif"}}>Moteur hors service</h3>
                      <p className="mt-2 text-sm text-white/80">Non roulant ou panne importante</p>
                    </div>
                  </div>
                </article>

                <article className="group overflow-hidden border border-[#e5e7eb] bg-white">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&amp;fit=crop&amp;w=1000&amp;q=85" alt="Carrosserie automobile endommagée" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0" style={{"background": "linear-gradient(to top,rgba(4,5,6,0.72),transparent 65%)"}}></div>
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <span className="text-xs uppercase text-white/70">Catégorie 04</span>
                      <h3 className="mt-1 text-xl font-semibold uppercase" style={{"fontFamily": "'Archivo Narrow',sans-serif"}}>Accidenté ou épave</h3>
                      <p className="mt-2 text-sm text-white/80">Enlèvement étudié selon la zone</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section id="fonctionnement" className="bg-[#f9fafb] py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-5 lg:px-10">
              <div className="text-center">
                <span className="text-xs font-semibold uppercase text-[#656363]">Un parcours sans complication</span>
                <h2 data-reveal="" className="mt-3 text-3xl font-normal uppercase tracking-tight sm:text-4xl"><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">Comment&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">se&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">déroule&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">le&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">rachat&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">?&nbsp;</span></span></h2>
              </div>

              <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                <article>
                  <span className="inline-flex border border-[#040506] bg-white px-2 py-1 text-xs font-normal uppercase tracking-wide">Étape 1</span>
                  <h3 className="mt-4 text-base font-semibold">Votre demande</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#656363]">Indiquez l’immatriculation, le kilométrage et l’état du véhicule.</p>
                </article>

                <article>
                  <span className="inline-flex border border-[#040506] bg-white px-2 py-1 text-xs font-normal uppercase tracking-wide">Étape 2</span>
                  <h3 className="mt-4 text-base font-semibold">Notre analyse</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#656363]">Nous étudions le marché, les réparations et la situation administrative.</p>
                </article>

                <article>
                  <span className="inline-flex border border-[#040506] bg-white px-2 py-1 text-xs font-normal uppercase tracking-wide">Étape 3</span>
                  <h3 className="mt-4 text-base font-semibold">L’offre de rachat</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#656363]">Vous recevez une proposition claire, sans obligation de votre part.</p>
                </article>

                <article>
                  <span className="inline-flex border border-[#040506] bg-white px-2 py-1 text-xs font-normal uppercase tracking-wide">Étape 4</span>
                  <h3 className="mt-4 text-base font-semibold">Paiement &amp; enlèvement</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#656363]">Nous organisons la cession, le règlement et le transport si nécessaire.</p>
                </article>
              </div>
            </div>
          </section>

          <section id="apropos" className="bg-white py-16 sm:py-20">
            <div className="mx-auto grid max-w-screen-2xl gap-10 px-5 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10">
              <div className="relative min-h-[430px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&amp;fit=crop&amp;w=1500&amp;q=90" alt="Mécanicien examinant un véhicule dans un atelier" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]" />
                <div className="absolute bottom-0 right-0 bg-white p-5 sm:p-7">
                  <strong className="block text-4xl font-light tracking-tight">12+</strong>
                  <span className="mt-1 block text-xs uppercase text-[#656363]">Années d’expérience</span>
                </div>
              </div>

              <div className="max-w-xl">
                <span className="text-xs font-semibold uppercase text-[#656363]">À propos de l’Atelier R</span>
                <h2 data-reveal="" className="mt-3 text-3xl font-normal uppercase tracking-tight sm:text-4xl"><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">Une&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">expertise&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">mécanique&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">au&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">service&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">d’une&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">offre&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">juste&nbsp;</span></span></h2>
                <p className="mt-6 text-base leading-relaxed text-[#656363]">
                  Notre connaissance de la mécanique, de la carrosserie et du marché automobile nous permet d’évaluer des véhicules que les circuits classiques refusent souvent.
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#656363]">
                  Nous travaillons avec les particuliers comme avec les professionnels, en privilégiant une relation directe, des démarches lisibles et des délais courts.
                </p>

                <dl className="mt-9 grid grid-cols-3 border-y border-[#e5e7eb] py-7">
                  <div>
                    <dt className="text-3xl font-light tracking-tight">24 h</dt>
                    <dd className="mt-2 text-xs uppercase text-[#656363]">Pour répondre</dd>
                  </div>
                  <div className="border-x border-[#e5e7eb] px-5">
                    <dt className="text-3xl font-light tracking-tight">100%</dt>
                    <dd className="mt-2 text-xs uppercase text-[#656363]">Sans engagement</dd>
                  </div>
                  <div className="pl-5">
                    <dt className="text-3xl font-light tracking-tight">7 j/7</dt>
                    <dd className="mt-2 text-xs uppercase text-[#656363]">Demandes en ligne</dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          <section className="relative min-h-[530px] overflow-hidden text-white">
            <img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&amp;fit=crop&amp;w=2200&amp;q=90" alt="Atelier automobile professionnel" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0" style={{"background": "linear-gradient(90deg,rgba(4,5,6,0.88),rgba(4,5,6,0.25))"}}></div>
            <div className="relative mx-auto flex min-h-[530px] max-w-screen-2xl items-center px-5 py-16 lg:px-10">
              <figure className="max-w-2xl border-l-2 border-white pl-6">
                <div className="flex gap-1 text-lg">
                  <iconify-icon icon="solar:star-bold"></iconify-icon>
                  <iconify-icon icon="solar:star-bold"></iconify-icon>
                  <iconify-icon icon="solar:star-bold"></iconify-icon>
                  <iconify-icon icon="solar:star-bold"></iconify-icon>
                  <iconify-icon icon="solar:star-bold"></iconify-icon>
                </div>
                <blockquote data-reveal="" className="mt-6 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">“Mon&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">utilitaire&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">avait&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">plus&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">de&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">300&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">000&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">km&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">et&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">un&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">problème&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">moteur.&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">J’ai&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">reçu&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">une&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">offre&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">claire,&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">puis&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">l’enlèvement&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">a&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">été&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">organisé&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">rapidement.”&nbsp;</span></span></blockquote>
                <figcaption className="mt-6 text-sm text-white/75">Marc D. — Artisan indépendant</figcaption>
              </figure>
            </div>
          </section>

          <section className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-5 lg:px-10">
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>
                  <span className="text-xs font-semibold uppercase text-[#656363]">Ils nous ont fait confiance</span>
                  <h2 data-reveal="" className="mt-3 text-3xl font-normal uppercase tracking-tight sm:text-4xl"><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">Des&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">démarches&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">simples,&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">du&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">début&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">à&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">la&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">fin&nbsp;</span></span></h2>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-semibold">4,9 / 5</span>
                  <span className="flex">
                    <iconify-icon icon="solar:star-bold"></iconify-icon>
                    <iconify-icon icon="solar:star-bold"></iconify-icon>
                    <iconify-icon icon="solar:star-bold"></iconify-icon>
                    <iconify-icon icon="solar:star-bold"></iconify-icon>
                    <iconify-icon icon="solar:star-bold"></iconify-icon>
                  </span>
                </div>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <article className="group border border-[#e5e7eb] p-6 transition-transform duration-300 hover:-translate-y-1">
                  <iconify-icon icon="solar:quote-up-linear" className="text-3xl" style={{"strokeWidth": "1.5"}}></iconify-icon>
                  <p className="mt-8 text-sm leading-relaxed text-[#656363]">“Contact très professionnel. Ma voiture sans contrôle technique a été évaluée le jour même et vendue sans démarches compliquées.”</p>
                  <div className="mt-8 border-t border-[#e5e7eb] pt-5">
                    <strong className="text-sm font-semibold uppercase">Sophie L.</strong>
                    <span className="mt-1 block text-xs text-[#656363]">Peugeot 308 — il y a 2 mois</span>
                  </div>
                </article>

                <article className="group border border-[#e5e7eb] p-6 transition-transform duration-300 hover:-translate-y-1">
                  <iconify-icon icon="solar:quote-up-linear" className="text-3xl" style={{"strokeWidth": "1.5"}}></iconify-icon>
                  <p className="mt-8 text-sm leading-relaxed text-[#656363]">“Après un accident, je ne savais pas quoi faire du véhicule. L’équipe a expliqué chaque étape et organisé l’enlèvement.”</p>
                  <div className="mt-8 border-t border-[#e5e7eb] pt-5">
                    <strong className="text-sm font-semibold uppercase">Karim B.</strong>
                    <span className="mt-1 block text-xs text-[#656363]">Renault Clio — il y a 4 mois</span>
                  </div>
                </article>

                <article className="group border border-[#e5e7eb] p-6 transition-transform duration-300 hover:-translate-y-1">
                  <iconify-icon icon="solar:quote-up-linear" className="text-3xl" style={{"strokeWidth": "1.5"}}></iconify-icon>
                  <p className="mt-8 text-sm leading-relaxed text-[#656363]">“Une réponse rapide pour mon ancien taxi très kilométré. L’offre était transparente et le paiement parfaitement organisé.”</p>
                  <div className="mt-8 border-t border-[#e5e7eb] pt-5">
                    <strong className="text-sm font-semibold uppercase">Alain P.</strong>
                    <span className="mt-1 block text-xs text-[#656363]">Mercedes Classe E — il y a 5 mois</span>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section id="contact" className="bg-[#f0f2f4] py-16 sm:py-20">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-10">
              <div>
                <span className="text-xs font-semibold uppercase text-[#656363]">Estimation gratuite</span>
                <h2 data-reveal="" className="mt-3 text-3xl font-normal uppercase tracking-tight sm:text-4xl"><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">Parlez-nous&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">de&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">votre&nbsp;</span></span><span className="inline-block overflow-hidden align-bottom"><span className="reveal-word inline-block">véhicule&nbsp;</span></span></h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-[#656363]">
                  Quelques informations suffisent pour commencer. Vous pourrez ensuite transmettre des photos par téléphone ou par e-mail.
                </p>

                <div className="mt-9 space-y-5">
                  <a href="tel:+33612345678" className="group flex items-center gap-4 border-b border-[#c7cace] pb-5">
                    <span className="grid size-11 place-items-center border border-[#c7cace] bg-white transition-colors duration-300 group-hover:bg-[#040506] group-hover:text-white">
                      <iconify-icon icon="solar:phone-calling-linear" className="text-xl" style={{"strokeWidth": "1.5"}}></iconify-icon>
                    </span>
                    <span>
                      <small className="block text-xs uppercase text-[#656363]">Téléphone</small>
                      <strong className="mt-1 block text-base font-semibold">06 12 34 56 78</strong>
                    </span>
                  </a>

                  <a href="mailto:contact@atelier-r.fr" className="group flex items-center gap-4 border-b border-[#c7cace] pb-5">
                    <span className="grid size-11 place-items-center border border-[#c7cace] bg-white transition-colors duration-300 group-hover:bg-[#040506] group-hover:text-white">
                      <iconify-icon icon="solar:letter-linear" className="text-xl" style={{"strokeWidth": "1.5"}}></iconify-icon>
                    </span>
                    <span>
                      <small className="block text-xs uppercase text-[#656363]">E-mail</small>
                      <strong className="mt-1 block text-base font-semibold">contact@atelier-r.fr</strong>
                    </span>
                  </a>
                </div>
              </div>

              <form id="estimate-form" className="border border-[#e5e7eb] bg-white p-5 sm:p-8" noValidate="">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase">Nom complet *</span>
                    <input required="" name="name" type="text" autoComplete="name" placeholder="Votre nom" className="h-14 w-full border border-[#c7cace] bg-white px-4 text-sm outline-none transition-colors duration-300 placeholder:text-[#a5a9b1] focus:border-[#040506] focus:ring-1 focus:ring-[#040506]" />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase">Téléphone *</span>
                    <input required="" name="phone" type="tel" autoComplete="tel" placeholder="06 00 00 00 00" className="h-14 w-full border border-[#c7cace] bg-white px-4 text-sm outline-none transition-colors duration-300 placeholder:text-[#a5a9b1] focus:border-[#040506] focus:ring-1 focus:ring-[#040506]" />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase">Type de véhicule *</span>
                    <span className="relative block">
                      <select required="" name="vehicle" className="h-14 w-full appearance-none border border-[#c7cace] bg-white px-4 pr-11 text-sm outline-none transition-colors duration-300 focus:border-[#040506] focus:ring-1 focus:ring-[#040506]">
                        <option value="">Sélectionner</option>
                        <option>Voiture particulière</option>
                        <option>Utilitaire</option>
                        <option>Taxi</option>
                        <option>Ambulance</option>
                        <option>Véhicule accidenté</option>
                        <option>Épave ou non roulant</option>
                      </select>
                      <iconify-icon icon="solar:alt-arrow-down-linear" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-lg" style={{"strokeWidth": "1.5"}}></iconify-icon>
                    </span>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase">Kilométrage</span>
                    <input name="mileage" type="text" inputmode="numeric" placeholder="Ex. 180 000 km" className="h-14 w-full border border-[#c7cace] bg-white px-4 text-sm outline-none transition-colors duration-300 placeholder:text-[#a5a9b1] focus:border-[#040506] focus:ring-1 focus:ring-[#040506]" />
                  </label>
                </div>

                <label className="mt-5 block">
                  <span className="mb-2 block text-xs font-semibold uppercase">État et informations utiles *</span>
                  <textarea required="" name="message" rows="5" placeholder="Marque, modèle, année, panne éventuelle, contrôle technique, état de la carrosserie…" className="w-full resize-none border border-[#c7cace] bg-white p-4 text-sm outline-none transition-colors duration-300 placeholder:text-[#a5a9b1] focus:border-[#040506] focus:ring-1 focus:ring-[#040506]"></textarea>
                </label>

                <button id="submit-button" type="submit" className="group relative mt-5 flex min-h-14 w-full items-center justify-between overflow-hidden border border-[#040506] bg-[#040506] px-5 text-sm font-semibold uppercase tracking-wide text-white transition-transform duration-200 active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#040506] focus-visible:ring-offset-2">
                  <span className="absolute inset-0 translate-y-full bg-[#252b31] transition-transform duration-300 group-hover:translate-y-0"></span>
                  <span id="submit-label" className="relative">Demander mon estimation</span>
                  <iconify-icon id="submit-icon" icon="solar:arrow-right-linear" className="relative text-lg transition-transform duration-300 group-hover:translate-x-1.5" style={{"strokeWidth": "1.5"}}></iconify-icon>
                </button>

                <p id="form-message" className="mt-4 hidden border border-[#040506] bg-[#f9fafb] p-3 text-sm" role="status"></p>
                <p className="mt-4 text-xs leading-relaxed text-[#656363]">En envoyant ce formulaire, vous acceptez d’être recontacté au sujet de votre demande d’estimation.</p>
              </form>
            </div>
          </section>
        </main>

        <footer className="bg-[#252b31] text-white" style={{"fontFamily": "'Lato',sans-serif"}}>
          <div className="mx-auto max-w-screen-2xl px-5 py-12 lg:px-10">
            <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <a href="#accueil" className="inline-flex items-center gap-3">
                  <span className="border border-white px-2.5 py-1.5 text-sm font-semibold tracking-tight">AR</span>
                  <span className="text-lg font-semibold tracking-tight">ATELIER R</span>
                </a>
                <p className="mt-5 max-w-xs text-sm font-normal leading-relaxed text-[#c7cace]">Rachat automobile professionnel, véhicules en l’état et solutions d’enlèvement.</p>
              </div>

              <div>
                <h2 className="text-base font-semibold uppercase">Navigation</h2>
                <div className="mt-4 flex flex-col gap-3 text-sm font-normal text-[#c7cace]">
                  <a href="#services" className="hover:underline">Nos rachats</a>
                  <a href="#fonctionnement" className="hover:underline">Fonctionnement</a>
                  <a href="#galerie" className="hover:underline">Véhicules acceptés</a>
                  <a href="#apropos" className="hover:underline">À propos</a>
                </div>
              </div>

              <div>
                <h2 className="text-base font-semibold uppercase">Nous contacter</h2>
                <div className="mt-4 flex flex-col gap-3 text-sm font-normal text-[#c7cace]">
                  <a href="tel:+33612345678" className="hover:underline">06 12 34 56 78</a>
                  <a href="mailto:contact@atelier-r.fr" className="hover:underline">contact@atelier-r.fr</a>
                  <span>Lundi–samedi, 8 h 30–19 h</span>
                </div>
              </div>

              <div>
                <h2 className="text-base font-semibold uppercase">Informations</h2>
                <div className="mt-4 flex flex-col gap-3 text-sm font-normal text-[#c7cace]">
                  <a href="#" className="hover:underline">Mentions légales</a>
                  <a href="#" className="hover:underline">Confidentialité</a>
                  <a href="#" className="hover:underline">Conditions de rachat</a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-7 text-xs font-normal text-[#c7cace] sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 Atelier R. Tous droits réservés.</p>
              <a href="#accueil" className="inline-flex items-center gap-2 self-start uppercase hover:underline sm:self-auto">
                Retour en haut
                <iconify-icon icon="solar:arrow-up-linear" className="text-base" style={{"strokeWidth": "1.5"}}></iconify-icon>
              </a>
            </div>
          </div>
        </footer>
    </div>
  );
}
