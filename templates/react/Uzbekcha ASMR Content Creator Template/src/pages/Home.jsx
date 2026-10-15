import { useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

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
    "src": "https://unpkg.com/lucide@latest/dist/umd/lucide.min.js",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js",
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
    "src": "https://www.googletagmanager.com/gtag/js?id=G-2M6V79H761",
    "type": "",
    "id": "",
    "async": true,
    "defer": false,
    "content": ""
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n      window.dataLayer = window.dataLayer || [];\n      function gtag(){dataLayer.push(arguments);}\n      gtag('js', new Date());\n      gtag('config', 'G-2M6V79H761');\n    "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n      lucide.createIcons({ attrs: { \"stroke-width\": 1.5 } });\n\n      const prefersReducedMotion = window.matchMedia(\"(prefers-reduced-motion: reduce)\").matches;\n\n      if (!prefersReducedMotion && window.gsap && window.ScrollTrigger && window.Lenis) {\n        gsap.registerPlugin(ScrollTrigger);\n        gsap.defaults({ ease: \"power3.out\" });\n\n        const lenis = new Lenis({\n          duration: 1.05,\n          smoothWheel: true,\n          wheelMultiplier: 0.85,\n          touchMultiplier: 1.15\n        });\n\n        lenis.on(\"scroll\", ScrollTrigger.update);\n        gsap.ticker.add((time) => lenis.raf(time * 1000));\n        gsap.ticker.lagSmoothing(0);\n\n        // ---- On-load: brand preloader -> hero entrance ----\n        const axLoader = document.getElementById(\"ax-loader\");\n\n        if (lenis && axLoader) {\n          lenis.stop();\n        }\n\n        const loadTl = gsap.timeline({ paused: true });\n\n        loadTl\n          .from(\"header\", { y: -24, opacity: 0, duration: 0.75 })\n          .from(\".hero-copy > *\", { y: 28, opacity: 0, stagger: 0.09, duration: 0.8 }, \"-=0.35\")\n          .from(\".hero-card\", { y: 90, opacity: 0, rotate: 0, scale: 0.94, stagger: 0.08, duration: 1.05 }, \"-=0.55\")\n          .from(\".hero-cta\", { scale: 0, opacity: 0, duration: 0.6 }, \"-=0.45\")\n          .from(\".hero-wordmark\", { yPercent: 18, opacity: 0, duration: 1 }, \"-=0.7\")\n          .from(\".hero-meta\", { y: 24, opacity: 0, duration: 0.75 }, \"-=0.65\");\n\n        if (axLoader) {\n          const brandEl = axLoader.querySelector(\".ax-loader__brand\");\n          const barEl = axLoader.querySelector(\".ax-loader__bar\");\n          const metaEl = axLoader.querySelector(\".ax-loader__meta\");\n          const pctEl = axLoader.querySelector(\".ax-loader__pct\");\n          const counter = { v: 0 };\n\n          gsap.timeline({\n            defaults: { ease: \"power3.out\" },\n            onComplete() {\n              axLoader.remove();\n              lenis.start();\n              ScrollTrigger.refresh();\n            }\n          })\n            .to(brandEl, { opacity: 1, y: 0, filter: \"blur(0px)\", duration: 0.9, ease: \"power2.out\" }, 0)\n            .to(metaEl, { opacity: 1, duration: 0.6 }, 0.3)\n            .to(barEl, { scaleX: 1, duration: 1.1, ease: \"power2.inOut\" }, 0.2)\n            .to(counter, {\n              v: 100,\n              duration: 1.1,\n              ease: \"power2.inOut\",\n              onUpdate() {\n                pctEl.textContent = String(Math.round(counter.v)).padStart(3, \"0\");\n              }\n            }, 0.2)\n            .to([brandEl, metaEl], { opacity: 0, y: -20, filter: \"blur(8px)\", duration: 0.5, ease: \"power2.in\" }, \"+=0.15\")\n            .to(axLoader, { yPercent: -100, duration: 0.9, ease: \"power4.inOut\" }, \"<0.1\")\n            .add(() => { loadTl.play(); }, \"<0.35\");\n        } else {\n          loadTl.play();\n          lenis.start();\n        }\n\n        // Universal soft reveals\n        gsap.utils.toArray(\"[data-reveal], .reveal\").forEach((item) => {\n          gsap.to(item, {\n            opacity: 1,\n            y: 0,\n            duration: .9,\n            scrollTrigger: {\n              trigger: item,\n              start: \"top 84%\",\n              toggleActions: \"play none none reverse\"\n            }\n          });\n        });\n\n        // Hero pinned cinematic transformation\n        const hero = gsap.timeline({\n          scrollTrigger: {\n            trigger: \".hero-section\",\n            start: \"top top\",\n            end: \"+=115%\",\n            scrub: 1,\n            pin: true,\n            anticipatePin: 1\n          }\n        });\n\n        hero\n          .to(\".hero-wordmark\", { yPercent: -50, scale: 1.07, opacity: .86, duration: 1 }, 0)\n          .to(\".hero-copy\", { y: -60, opacity: .42, duration: 1 }, 0)\n          .to(\".hero-meta\", { y: -34, opacity: .72, duration: 1 }, 0)\n          .to(\".hero-stack\", { y: -70, scale: .94, duration: 1 }, 0)\n          .to(\".hero-card:nth-child(1)\", { x: -46, y: 34, rotate: -24, duration: 1 }, 0)\n          .to(\".hero-card:nth-child(2)\", { x: 42, y: -34, rotate: 20, duration: 1 }, 0)\n          .to(\".hero-card:nth-child(3)\", { x: 54, y: 22, rotate: 22, duration: 1 }, 0)\n          .to(\".hero-card:nth-child(4)\", { x: 8, y: 12, rotate: 0, duration: 1 }, 0);\n\n        // Studio pinned word rhythm\n        const brand = gsap.timeline({\n          scrollTrigger: {\n            trigger: \".brand-section\",\n            start: \"top top\",\n            end: \"+=110%\",\n            scrub: 1,\n            pin: true,\n            anticipatePin: 1\n          }\n        });\n\n        brand\n          .fromTo(\".brand-drift\", { xPercent: 4 }, { xPercent: -22, duration: 1 }, 0)\n          .fromTo(\".brand-word\", {\n            opacity: 0,\n            y: 80,\n            x: (i) => (i % 2 ? -90 : 90)\n          }, {\n            opacity: 1,\n            y: 0,\n            x: 0,\n            stagger: .08,\n            duration: .6\n          }, .08)\n          .to(\".brand-word\", {\n            x: (i) => (i % 2 ? -34 : 34),\n            stagger: .04,\n            duration: .45\n          }, .64);\n\n        // Services reveal and image strip motion\n        gsap.timeline({\n          scrollTrigger: {\n            trigger: \".services-section\",\n            start: \"top 65%\",\n            end: \"bottom 30%\",\n            scrub: 1\n          }\n        })\n          .from(\".services-copy\", { y: 90, opacity: 0, duration: .35 })\n          .from(\".service-card\", { y: 42, opacity: 0, stagger: .08, duration: .45 }, .16)\n          .to(\".strip-image\", { xPercent: -14, scale: 1.22, duration: .8 }, 0);\n\n        // Parallax media\n        gsap.utils.toArray(\".parallax-image\").forEach((item) => {\n          const isFast = item.classList.contains(\"parallax-fast\");\n          const section = item.closest(\"section\");\n\n          gsap.fromTo(item, { y: isFast ? 90 : 50 }, {\n            y: isFast ? -120 : -70,\n            ease: \"none\",\n            scrollTrigger: {\n              trigger: section,\n              start: \"top bottom\",\n              end: \"bottom top\",\n              scrub: true\n            }\n          });\n\n          const img = item.querySelector(\"img\");\n          if (img) {\n            gsap.fromTo(img, { scale: 1.18, yPercent: isFast ? -8 : -5 }, {\n              scale: 1.04,\n              yPercent: isFast ? 8 : 5,\n              ease: \"none\",\n              scrollTrigger: {\n                trigger: section,\n                start: \"top bottom\",\n                end: \"bottom top\",\n                scrub: true\n              }\n            });\n          }\n        });\n\n        // Stats stagger\n        gsap.from(\".stat-grid .note-card\", {\n          y: 52,\n          opacity: 0,\n          stagger: .08,\n          duration: .8,\n          scrollTrigger: {\n            trigger: \".numbers-intro\",\n            start: \"top 58%\",\n            toggleActions: \"play none none reverse\"\n          }\n        });\n\n        // Archive scroll\n        gsap.timeline({\n          scrollTrigger: {\n            trigger: \".archive-scroll-section\",\n            start: \"top 75%\",\n            end: \"bottom 20%\",\n            scrub: 1\n          }\n        })\n          .from(\".archive-title\", { y: 80, opacity: 0, duration: 0.45 }, 0)\n          .from(\".archive-card\", {\n            y: 100,\n            opacity: 0,\n            rotate: (i) => [-3, 2, -2, 3, -1][i],\n            stagger: 0.08,\n            duration: 0.65\n          }, 0.12)\n          .to(\".archive-gallery\", { xPercent: -18, duration: 1 }, 0.25)\n          .to(\".archive-card img\", { scale: 1.18, duration: 1 }, 0.25);\n\n        // Work pinned number\n        const work = gsap.timeline({\n          scrollTrigger: {\n            trigger: \".work-section\",\n            start: \"top top\",\n            end: \"+=120%\",\n            scrub: 1,\n            pin: true,\n            anticipatePin: 1\n          }\n        });\n\n        work\n          .from(\".work-copy\", { x: -80, opacity: 0, duration: .4 }, 0)\n          .fromTo(\".masked-number\", { scale: .82, y: 80, backgroundPosition: \"50% 28%\" }, { scale: 1.1, y: -50, backgroundPosition: \"50% 74%\", duration: 1 }, 0)\n          .from(\".project-card\", { y: 80, opacity: 0, rotate: 0, stagger: .1, duration: .4 }, .15)\n          .to(\".project-card\", { y: -40, x: (i) => (i ? 42 : -34), duration: .8 }, .45);\n\n        // Field notes editorial\n        gsap.timeline({\n          scrollTrigger: {\n            trigger: \".partners-section\",\n            start: \"top 72%\",\n            end: \"bottom 28%\",\n            scrub: 1\n          }\n        })\n          .fromTo(\".partners-heading\", { yPercent: 10, opacity: 0.06 }, { yPercent: -16, opacity: 0.12, duration: 1 }, 0)\n          .from(\".partners-section .section-label\", { y: 24, opacity: 0, duration: 0.35 }, 0.08)\n          .from(\".partners-section h2:not(.partners-heading)\", { y: 70, opacity: 0, duration: 0.55 }, 0.12)\n          .from(\".partner-logos .note-card\", {\n            y: 100,\n            opacity: 0,\n            rotate: (i) => [-2, 2, -1, 1, -2][i],\n            stagger: 0.08,\n            duration: 0.7\n          }, 0.2)\n          .to(\".partner-logos .note-card\", {\n            y: (i) => [-24, 18, -12, 14, -18][i],\n            stagger: 0.04,\n            duration: 0.55\n          }, 0.62);\n\n        // Timeline process\n        gsap.timeline({\n          scrollTrigger: {\n            trigger: \".process-section\",\n            start: \"top 60%\",\n            end: \"bottom 40%\",\n            scrub: 1\n          }\n        })\n          .to(\".timeline-bar\", { scaleX: 1, stagger: .12, duration: .6 }, 0)\n          .from(\".process-columns > div\", { y: 38, opacity: 0, stagger: .08, duration: .45 }, .25);\n\n        // Pricing pin on desktop only\n        gsap.timeline({\n          scrollTrigger: {\n            trigger: \".pricing-section\",\n            start: \"top top\",\n            end: \"+=80%\",\n            scrub: 1,\n            pin: window.innerWidth >= 768,\n            anticipatePin: 1\n          }\n        })\n          .from(\".pricing-copy\", { y: 50, opacity: 0, duration: .35 }, 0)\n          .from(\".pricing-card\", { x: 110, opacity: 0, stagger: .16, duration: .55 }, .12);\n\n        // Contact / footer\n        gsap.timeline({\n          scrollTrigger: {\n            trigger: \".contact-section\",\n            start: \"top 62%\",\n            end: \"bottom 34%\",\n            scrub: 1\n          }\n        })\n          .from(\".contact-form > *\", { y: 36, opacity: 0, stagger: .07, duration: .45 }, 0)\n          .from(\".faq-row\", { y: 38, opacity: 0, stagger: .08, duration: .45 }, .12);\n\n        gsap.timeline({\n          scrollTrigger: {\n            trigger: \".footer-section\",\n            start: \"top 72%\",\n            end: \"bottom bottom\",\n            scrub: 1\n          }\n        })\n          .fromTo(\".footer-wordmark\", { scale: 0.9, y: 120, opacity: 0.35 }, { scale: 1, y: 0, opacity: 1, duration: 0.9 }, 0)\n          .from(\".footer-links\", { y: 80, opacity: 0, duration: 0.5 }, 0.2)\n          .from(\".footer-links h3\", { y: 60, opacity: 0, letterSpacing: \"-0.12em\", duration: 0.45 }, 0.3)\n          .from(\".footer-links a\", { y: 18, opacity: 0, stagger: 0.04, duration: 0.3 }, 0.45);\n\n        window.addEventListener(\"load\", () => ScrollTrigger.refresh());\n        window.addEventListener(\"resize\", () => ScrollTrigger.refresh());\n\n      } else {\n        document.getElementById(\"ax-loader\")?.remove();\n\n        document.querySelectorAll(\".reveal, [data-reveal]\").forEach((item) => {\n          item.style.opacity = \"1\";\n          item.style.transform = \"none\";\n        });\n\n        document.querySelectorAll(\".timeline-bar\").forEach((item) => {\n          item.style.transform = \"scaleX(1)\";\n        });\n      }\n    "
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "";
const sourceBodyStyle = "";
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

export default function Home() {
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
    <div className="aura-source-body">
      <div className="noise" aria-hidden="true"></div>
          <div className="grid-veil" aria-hidden="true"></div>
          <div className="page-rail" aria-hidden="true">UZBEKCHA ASMR / OSOYISHTALIK</div>


          <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 md:px-8 lg:px-12">
            <a href="#home" className="text-lg font-semibold tracking-[-0.055em] text-[#f3f0e8] md:text-xl">
              UZBEKCHA ASMR
            </a>

            <nav className="hidden md:flex text-xs font-bold text-[#f3f0e8]/82 gap-x-11 gap-y-11 items-center">
              <Link to="/home" className="nav-link">
                <span className="mr-5 inline-block h-1.5 w-1.5 rounded-full bg-[#a855f7] align-middle"></span>
                asosy
              </Link>
              <Link to="/" className="nav-link">Videolar</Link>
              <a href="#pricing" className="nav-link">Shorts</a>
              <a href="#contact" className="nav-link">Jonli</a>
            </nav>

            <button className="glass flex h-10 w-10 items-center justify-center rounded-full md:hidden" aria-label="Open menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="menu" aria-hidden="true" className="lucide lucide-menu h-4 w-4"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
            </button>
          </header><main id="home" className="relative z-10 overflow-hidden">

            <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "flex", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1578px", "padding": "0px 0px 844.001px"}}>
              <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "flex", "margin": "0px", "inset": "0.001px -0.2px -0.4px 0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "734px", "padding": "0px"}}>
                <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "flex", "margin": "0px", "inset": "0.001px -0.2px -0.4px 0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "734px", "padding": "0px"}}>
                  <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "flex", "margin": "0px", "inset": "0.001px -0.2px -0.4px 0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "734px", "padding": "0px"}}>
                    <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "flex", "margin": "0px", "inset": "0.001px -0.2px -0.4px 0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "734px", "padding": "0px"}}>
                      <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "flex", "margin": "0px", "inset": "0.001px -0.2px -0.4px 0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "734px", "padding": "0px"}}>
                        <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "flex", "margin": "0px", "inset": "0.001px -0.2px -0.4px 0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "734px", "padding": "0px"}}>
                          <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "flex", "margin": "0px", "inset": "0.001px -0.2px -0.4px 0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "734px", "padding": "0px"}}>
                            <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "flex", "margin": "0px", "inset": "0.001px 168.778px 0px 0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "820px", "padding": "0px"}}>

                            <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "flex", "margin": "0px", "inset": "0.001px 168.778px -0.444444px 0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "820px", "padding": "0px"}}><div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "flex", "margin": "0px", "inset": "0.001px 168.778px -0.444444px 0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "820px", "padding": "0px"}}><div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "flex", "margin": "0px", "inset": "0px 168.778px -0.444444px 0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "820px", "padding": "0px"}}><div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "flex", "margin": "0px", "inset": "0px 168.778px -0.444444px 0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "820px", "padding": "0px"}}><section className="hero-section relative flex min-h-screen items-center overflow-hidden px-5 py-24 md:px-8 lg:px-12" style={{"inset": "0.001px auto auto 0px", "margin": "0px", "maxWidth": "1041px", "width": "1041px", "maxHeight": "820px", "height": "820px", "padding": "96px 48px", "boxSizing": "border-box", "position": "fixed"}}>
                                <div className="hero-copy relative z-20 max-w-[360px]">
                                  <p className="section-label mb-10">UZBEKCHA ASMR</p>
                                  <p className="max-w-[340px] text-[21px] font-medium leading-[1.45] tracking-[-0.045em] text-[#f3f0e8]/76 md:text-[25px]">
                                    <span className="text-[#f3f0e8]">UZBEKCHA ASMR</span>
                                    — Tingla. His qil. Relax bo'l. Bizning
                                    osoyishtalik makonimizga xush kelibsiz. Yumshoq
                                    shivirlar, nozik teginishlar va tinchlantiruvchi
                                    ovozlar orqali uxlab qolishga yordam beramiz.
                                  </p>

                                  <a href="#work" className="magnetic-button mt-14 inline-flex items-center gap-5 rounded-full border border-[#f3f0e8]/12 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#f3f0e8]">
                                    Videolarni ko'rish
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#a855f7] text-[#060706]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" aria-hidden="true" className="lucide lucide-arrow-right h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                    </span>
                                  </a>
                                </div>

                                <div className="hero-stack absolute left-1/2 top-[48%] z-10 h-[430px] w-[310px] -translate-x-1/2 -translate-y-1/2 md:h-[560px] md:w-[430px] lg:h-[620px] lg:w-[480px]">
                                  <div className="hero-card absolute inset-0 -translate-x-20 translate-y-12 -rotate-[17deg] rounded-[20px] bg-[#151713]">
                                    <div className="h-full w-full rounded-[20px] bg-gradient-to-br from-[#a855f7]/30 via-transparent to-black"></div>
                                  </div>

                                  <div className="hero-card absolute inset-0 translate-x-20 translate-y-10 rotate-[13deg] rounded-[20px] bg-[#d8cbb5]">
                                    <div className="absolute right-10 top-24 font-serif text-[110px] text-[#a855f7]/80">
                                      A
                                    </div>
                                    <div className="absolute bottom-12 left-10 h-32 w-32 rounded-full border border-black/20"></div>
                                  </div>

                                  <div className="hero-card absolute inset-0 translate-x-32 translate-y-20 rotate-[18deg] rounded-[20px] bg-[#080808]">
                                    <div className="w-full h-full rounded-[20px]"></div>
                                  </div>

                                  <div className="hero-card absolute inset-0 rotate-[4deg] overflow-hidden rounded-[20px] bg-[#201714] shadow-[0_0_80px_rgba(168,85,247,0.5)]">
                                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a7b34724-25b1-4e1e-9f61-8b56d968e0a0_1600w.png" alt="Editorial studio portrait" className="h-full w-full object-cover saturate-125" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/48 via-transparent to-orange-950/10"></div>
                                    <div className="absolute inset-0 bg-[#a855f7]/10 mix-blend-overlay"></div>
                                  </div>

                                  <button className="hero-cta absolute right-[-22px] top-1/2 z-20 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white shadow-2xl backdrop-blur transition duration-300 hover:scale-110 hover:bg-[#a855f7]" aria-label="Explore">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" aria-hidden="true" className="lucide lucide-arrow-right h-7 w-7"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                  </button>
                                </div>

                                <h1 className="hero-wordmark wordmark pointer-events-none absolute -bottom-5 left-2 z-0 select-none text-[23vw] font-black leading-none text-[#e8e0d4] md:-bottom-12 lg:left-6 lg:text-[20vw]" style={{"fontFamily": "Caveat, cursive"}}>
                                  ASMR
                                </h1>

                                <div className="hero-meta glass absolute bottom-10 right-5 z-20 hidden w-[270px] rounded-[24px] p-6 md:right-8 lg:block">
                                  <div className="mb-8 text-2xl text-[#a855f7]">✳</div>
                                  <p className="text-[19px] leading-[1.25] tracking-[-0.04em]">
                                    Uyqu, tinchlanish va psixologiya uchun ASMR
                                    videolar.
                                  </p>
                                  <div className="mt-10 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.14em] text-[#f3f0e8]/45">
                                    <span>36.5k Obunachi</span>
                                    <span className="h-1 w-1 rounded-full bg-[#a855f7]"></span>
                                    <span>632 Video</span>
                                  </div>
                                </div>
                              </section></div></div></div></div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "flex", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1575px", "padding": "0px 0px 807px"}}>
              <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "flex", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "768px", "padding": "0px"}}>
                <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "flex", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "768px", "padding": "0px"}}>
                  <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "flex", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "768px", "padding": "0px"}}>
                    <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "flex", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "768px", "padding": "0px"}}>
                      <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "flex", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "768px", "padding": "0px"}}>
                        <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "flex", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "768px", "padding": "0px"}}>
                          <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "flex", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "768px", "padding": "0px"}}>
                            <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "flex", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "820px", "padding": "0px"}}>
                              <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "flex", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "820px", "padding": "0px"}}><div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "flex", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "820px", "padding": "0px"}}><div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "flex", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "820px", "padding": "0px"}}><div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "flex", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "820px", "padding": "0px"}}><section id="studio" className="brand-section relative flex min-h-screen items-center overflow-hidden px-5 py-24 md:px-8 lg:px-12" style={{"inset": "0px auto auto 0px", "margin": "0px", "maxWidth": "1040.78px", "width": "1040.78px", "maxHeight": "819.556px", "height": "819.556px", "padding": "96px 48px"}}>
                                <h2 className="brand-drift wordmark pointer-events-none absolute -top-16 left-0 text-[6rem] font-black leading-none text-[#f3f0e8]/10 sm:text-[9rem] md:text-[13rem] lg:text-[18rem]" style={{"fontFamily": "Caveat, cursive"}}>
                                  ASMR
                                </h2>

                                <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-12">
                                  <div className="md:col-span-4">
                                    <p className="section-label">Kanal Haqida</p>
                                    <p data-reveal="" className="mt-8 max-w-sm text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                                      Har bir video sizning tinchlanishingiz va yaxshi
                                      uxlashingiz uchun maxsus tayyorlanadi. Biz bilan
                                      qoling va dam oling.
                                    </p>
                                  </div>

                                  <div className="brand-words grid gap-6 md:col-span-7 md:col-start-6">
                                    <p className="brand-word text-6xl font-semibold tracking-[-0.08em] md:text-8xl">
                                      tinglang
                                    </p>
                                    <p className="brand-word text-right text-6xl font-semibold tracking-[-0.08em] md:text-8xl">
                                      dam oling
                                    </p>
                                    <p className="brand-word text-6xl font-semibold tracking-[-0.08em] md:text-8xl">
                                      uxlab qoling.
                                    </p>
                                    <p className="brand-word text-right text-6xl font-semibold tracking-[-0.08em] md:text-8xl">
                                      tinchlaning
                                    </p>
                                    <p className="brand-word text-6xl font-semibold tracking-[-0.08em] md:text-8xl">
                                      takrorlang
                                    </p>
                                  </div>
                                </div>
                              </section></div></div></div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <section className="services-section relative min-h-screen overflow-hidden px-5 py-24 md:px-8 lg:px-12">
              <div className="absolute left-1/2 top-0 h-[360px] w-[78%] -translate-x-1/2 overflow-hidden rounded-b-[32px] border-x border-b border-[#f3f0e8]/10 md:h-[480px] lg:h-[620px]">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11d4640b-22ef-448e-8916-2a4d14c2561c_1600w.jpg" alt="Green atmospheric strip" className="strip-image h-full w-full object-cover object-center opacity-70" />
              </div>

              <div className="grid min-h-screen items-center gap-14 md:grid-cols-12">
                <div data-reveal="" className="md:col-span-3">
                  <p className="section-label mb-20">Mashhur Videolar</p>
                  <p className="max-w-60 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                    Siz izlagan barcha turdagi ASMR videolar bitta kanalda.
                  </p>
                </div>

                <div className="md:col-span-6 md:col-start-4">
                  <p className="services-copy text-4xl font-semibold leading-[0.95] tracking-[-0.07em] md:text-6xl lg:text-7xl">
                    Uyqu va tinchlanish uchun eng yaxshi kontent.
                  </p>

                  <div className="mt-10 grid gap-3 sm:grid-cols-2">
                    <div className="service-card glass rounded-[28px] p-6">
                      <p className="mb-14 text-xs font-bold uppercase tracking-[0.14em] text-[#f3f0e8]/44">
                        01
                      </p>
                      <h3 className="text-2xl font-semibold tracking-[-0.05em]">
                        Mukbang va Psixologiya
                      </h3>
                      <p className="mt-4 text-sm leading-[1.6] text-[#f3f0e8]/54">
                        Tinglang va uxlab qoling. Tinchlanish uchun foydali suhbatlar.
                      </p>
                    </div>
                    <div className="service-card glass rounded-[28px] p-6">
                      <p className="mb-14 text-xs font-bold uppercase tracking-[0.14em] text-[#f3f0e8]/44">
                        02
                      </p>
                      <h3 className="text-2xl font-semibold tracking-[-0.05em]">
                        Massaj va Meditatsiya
                      </h3>
                      <p className="mt-4 text-sm leading-[1.6] text-[#f3f0e8]/54">
                        Yelka, bosh va yuz massaji orqali chuqur uyquga keting.
                      </p>
                    </div>
                    <div className="service-card glass rounded-[28px] p-6">
                      <p className="mb-14 text-xs font-bold uppercase tracking-[0.14em] text-[#f3f0e8]/44">
                        03
                      </p>
                      <h3 className="text-2xl font-semibold tracking-[-0.05em]">
                        Triggers va Raspakovka
                      </h3>
                      <p className="mt-4 text-sm leading-[1.6] text-[#f3f0e8]/54">
                        Soch tarash, qadoqlarni ochish va so'zlarsiz tinchlantiruvchi
                        tovushlar.
                      </p>
                    </div>
                    <div className="service-card glass rounded-[28px] p-6">
                      <p className="mb-14 text-xs font-bold uppercase tracking-[0.14em] text-[#f3f0e8]/44">
                        04
                      </p>
                      <h3 className="text-2xl font-semibold tracking-[-0.05em]">
                        Sotuvchi Rolli O'yinlar
                      </h3>
                      <p className="mt-4 text-sm leading-[1.6] text-[#f3f0e8]/54">
                        Kosmetika do'konida pomada tanlash kabi qiziqarli rolli
                        o'yinlar.
                      </p>
                    </div>
                  </div>
                </div>

                <div data-reveal="" className="md:col-span-2 md:col-start-11">
                  <p className="mb-6 text-xs font-bold uppercase tracking-[0.12em]">
                    Obuna bo'ling
                    <span aria-hidden="true">→</span>
                  </p>
                  <p className="max-w-60 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                    Telegram kanalimizga ham obuna bo'lishni unutmang:
                    t.me/uzbekchaasmr
                  </p>
                </div>
              </div>
            </section>


            <section className="numbers-intro relative min-h-screen overflow-hidden px-5 py-24 md:px-8 lg:px-12">
              <figure className="parallax-image parallax-slow pointer-events-none right-4 top-32 h-28 w-40 rotate-[7deg] md:right-8 md:top-28 md:h-48 md:w-72">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8256d7e-24f5-4f30-ae89-63d75bd9ddc2_800w.png" alt="Abstract architecture detail" />
              </figure>

              <figure className="parallax-image parallax-fast pointer-events-none bottom-24 left-4 h-24 w-36 rotate-[-9deg] md:bottom-20 md:left-10 md:h-40 md:w-60">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17811ebe-7339-454b-bf1f-d688cea31804_800w.png" alt="Landscape color field" />
              </figure>

              <div className="grid min-h-screen items-center gap-12 md:grid-cols-12">
                <div data-reveal="" className="md:col-span-3">
                  <p className="section-label mb-8">Kanal Statistikasi</p>
                  <p className="max-w-72 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                    Sizning qiziqishingiz va qo'llab-quvvatlashingiz biz uchun muhim.
                  </p>
                  <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em]">
                    Obuna bo'lish
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" aria-hidden="true" className="lucide lucide-arrow-right h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </a>
                </div>

                <div data-reveal="" className="md:col-span-5 md:col-start-5">
                  <h2 className="text-6xl font-semibold leading-[0.92] tracking-[-0.08em] md:text-8xl lg:text-9xl">
                    Kanal
                    <br />
                    Statistikasi
                  </h2>
                </div>

                <div className="stat-grid md:col-span-3 md:col-start-10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="note-card glass rounded-[24px] p-5">
                      <p className="text-5xl font-semibold tracking-[-0.06em]">36.5</p>
                      <p className="mt-6 text-xs font-medium text-[#f3f0e8]/50">
                        ming obunachi
                      </p>
                    </div>
                    <div className="note-card glass rounded-[24px] p-5">
                      <p className="text-5xl font-semibold tracking-[-0.06em]">632</p>
                      <p className="mt-6 text-xs font-medium text-[#f3f0e8]/50">
                        videolar
                      </p>
                    </div>
                    <div className="note-card glass rounded-[24px] p-5">
                      <p className="text-5xl font-semibold tracking-[-0.06em]">44</p>
                      <p className="mt-6 text-xs font-medium text-[#f3f0e8]/50">
                        K eng ko'p ko'rilgan
                      </p>
                    </div>
                    <div className="note-card glass rounded-[24px] p-5">
                      <p className="text-5xl font-semibold tracking-[-0.06em]">3</p>
                      <p className="mt-6 text-xs font-medium text-[#f3f0e8]/50">
                        yillik tajriba
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section className="archive-scroll-section relative overflow-hidden px-5 py-24 md:px-8 lg:px-12">
              <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12">
                <div className="md:col-span-3">
                  <p className="section-label">Video Lavhalar</p>
                  <p className="mt-8 max-w-64 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                    Kanalimizdagi eng sara video lavhalardan namunalar.
                  </p>
                </div>

                <div className="md:col-span-8 md:col-start-5">
                  <h2 className="archive-title text-[54px] font-black leading-[0.9] tracking-[-0.08em] text-[#f3f0e8] md:text-[86px] lg:text-[112px]">
                    Tinchlantiruvchi va yoqimli ASMR videolar to'plami.
                  </h2>
                </div>
              </div>

              <div className="archive-gallery mt-20 flex gap-5 will-change-transform">
                <figure className="archive-card h-[420px] w-[320px] shrink-0 overflow-hidden rounded-[34px] border border-[#f3f0e8]/10 bg-[#101310] md:h-[560px] md:w-[420px]">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf45b9d1-5025-4acb-a1a2-6b0bf2d42b50_1600w.png" alt="Archive image" className="h-full w-full object-cover opacity-75" />
                </figure>

                <figure className="archive-card mt-20 h-[360px] w-[300px] shrink-0 overflow-hidden rounded-[34px] border border-[#f3f0e8]/10 bg-[#101310] md:h-[460px] md:w-[360px]">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c122c554-39d3-4f44-a327-a6bf714fe3ed_1600w.png" alt="Archive image" className="h-full w-full object-cover opacity-75" />
                </figure>

                <figure className="archive-card h-[420px] w-[320px] shrink-0 overflow-hidden rounded-[34px] border border-[#f3f0e8]/10 bg-[#101310] md:h-[560px] md:w-[420px]">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/40129f89-eeda-4efe-9b93-c48bddd87eed_1600w.png" alt="Archive image" className="h-full w-full object-cover opacity-75" />
                </figure>

                <figure className="archive-card mt-28 h-[360px] w-[300px] shrink-0 overflow-hidden rounded-[34px] border border-[#f3f0e8]/10 bg-[#101310] md:h-[460px] md:w-[360px]">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c686908c-2d56-47ac-a9c5-00dd3689a2fb_1600w.png" alt="Archive image" className="h-full w-full object-cover opacity-75" />
                </figure>

                <figure className="archive-card h-[420px] w-[320px] shrink-0 overflow-hidden rounded-[34px] border border-[#f3f0e8]/10 bg-[#101310] md:h-[560px] md:w-[420px]">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17903688-ba07-4ef5-bc8b-88047b315b36_1600w.png" alt="Archive image" className="h-full w-full object-cover opacity-75" />
                </figure>
              </div>
            </section>


            <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "block", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1807px", "padding": "0px 0px 881px"}}>
              <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "block", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1807px", "padding": "0px 0px 881px"}}>
                <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "block", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1807px", "padding": "0px 0px 881px"}}>
                  <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "block", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1807px", "padding": "0px 0px 881px"}}>
                    <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "block", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1807px", "padding": "0px 0px 881px"}}>
                      <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "block", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1807px", "padding": "0px 0px 881px"}}>
                        <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "block", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1807px", "padding": "0px 0px 881px"}}>
                          <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "block", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1807px", "padding": "0px 0px 881px"}}>
                            <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "block", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1910px", "padding": "0px 0px 984px"}}>
                              <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "block", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1910px", "padding": "0px 0px 984px"}}><div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "block", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1910px", "padding": "0px 0px 984px"}}><div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "block", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1910px", "padding": "0px 0px 984px"}}><div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "block", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1910px", "padding": "0px 0px 984px"}}><section id="work" className="work-section relative min-h-screen overflow-hidden px-5 py-24 md:px-8 lg:px-12" style={{"inset": "0px auto auto 0px", "margin": "0px", "maxWidth": "1040.78px", "width": "1040.78px", "maxHeight": "925.556px", "height": "925.556px", "padding": "96px 48px"}}>
                                <div className="grid min-h-screen items-center gap-12 md:grid-cols-12">
                                  <div className="work-copy md:col-span-3">
                                    <p className="section-label mb-8">Pleylistlar</p>
                                    <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.08em] md:text-6xl">
                                      Turli xil mavzular
                                    </h2>
                                    <p className="mt-6 max-w-72 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                                      Kanalimizda turli xil pleylistlar mavjud:
                                      Mukbang, Rolli o'yinlar, Triggers, va Psixologik
                                      suhbatlar.
                                    </p>
                                    <a href="#contact" className="magnetic-button mt-8 inline-flex rounded-full border border-[#f3f0e8]/12 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em]">
                                      Barchasini ko'rish
                                    </a>
                                  </div>

                                  <div className="relative md:col-span-7 md:col-start-4">
                                    <div className="relative flex min-h-[520px] items-center justify-center">
                                      <span className="masked-number text-[13rem] font-black leading-none tracking-[-0.09em] md:text-[24rem] lg:text-[29rem]" style={{"--number-image": "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&amp", "backgroundPosition": "50% 28%"}}>
                                        600+
                                      </span>
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/28f5ada6-1723-43bb-904e-af7df173fb05_800w.png" alt="Project preview one" className="project-card absolute left-0 top-14 hidden h-44 w-72 rotate-[-14deg] rounded-[18px] border border-[#f3f0e8]/10 object-cover md:block" />
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/628decf8-735c-4fef-8755-6c87d7626345_800w.png" alt="Project preview two" className="project-card absolute right-4 top-6 hidden h-44 w-72 rotate-[10deg] rounded-[18px] border border-[#f3f0e8]/10 object-cover md:block" />
                                    </div>
                                  </div>

                                  <div data-reveal="" className="md:col-span-2">
                                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#f3f0e8]/62">
                                      Eng so'nggi
                                    </p>
                                    <p className="mt-8 text-sm font-medium leading-[1.7] text-[#f3f0e8]/50">
                                      Uyqu uchun video, yelka massaji, bosh massaji
                                    </p>
                                  </div>
                                </div>
                              </section></div></div></div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <section className="partners-section relative min-h-screen overflow-hidden px-5 py-24 md:px-8 lg:px-12">
              <h2 className="partners-heading pointer-events-none absolute left-5 top-16 text-[18vw] font-black leading-none tracking-[-0.1em] text-[#f3f0e8]/[0.055] md:left-8 md:top-10 md:text-[15vw]">
                ASMR Foydasi
              </h2>

              <figure className="parallax-image parallax-slow pointer-events-none absolute right-5 top-28 hidden h-44 w-72 rotate-[5deg] overflow-hidden rounded-[28px] border border-[#f3f0e8]/10 md:block lg:right-14 lg:h-56 lg:w-96">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a0e99ca0-66a1-46b0-8105-bb59b841d7d6_1600w.png" alt="Studio workspace detail" className="h-full w-full object-cover" />
              </figure>

              <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center">
                <div className="mb-16 grid gap-8 md:grid-cols-12">
                  <div className="md:col-span-3">
                    <p className="section-label">ASMR Foydasi</p>
                  </div>

                  <div className="md:col-span-7 md:col-start-5">
                    <h2 className="text-[52px] font-black leading-[0.9] tracking-[-0.08em] text-[#f3f0e8] md:text-[84px] lg:text-[104px]">
                      Tinchlanish va yaxshi uxlash uchun 5 ta qoida.
                    </h2>
                  </div>
                </div>

                <div className="partner-logos grid grid-cols-1 gap-5 md:grid-cols-12">
                  <article className="note-card group relative min-h-[430px] overflow-hidden rounded-[38px] border border-[#f3f0e8]/10 bg-[#f3f0e8] p-8 text-[#060706] md:col-span-5">
                    <div className="absolute -right-6 -top-8 text-[180px] font-black leading-none tracking-[-0.12em] text-[#060706]/[0.06]">
                      01
                    </div>
                    <div className="relative z-10 flex h-full flex-col justify-between">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#060706]/45">
                          01 / Tinchlanish
                        </p>
                        <h3 className="mt-12 max-w-sm text-[50px] font-black leading-[0.88] tracking-[-0.08em] md:text-[64px]">
                          Fikrlar oqimini to'xtating.
                        </h3>
                      </div>
                      <p className="max-w-sm text-base font-semibold leading-[1.55] text-[#060706]/62">
                        ASMR videolari orqali kunlik stressdan xalos bo'ling va miyani
                        dam oldiring.
                      </p>
                    </div>
                  </article>

                  <article className="note-card group relative min-h-[430px] overflow-hidden rounded-[38px] border border-[#f3f0e8]/10 bg-[#111612] md:col-span-4">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd677c9f-932b-40e0-ac9c-3132bb168bdd_800w.png" alt="Structural facade detail" className="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060706] via-[#060706]/25 to-transparent"></div>
                    <div className="absolute bottom-7 left-7 right-7">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f3f0e8]/50">
                        02 / Fokus
                      </p>
                      <h3 className="mt-5 text-[34px] font-black leading-[0.92] tracking-[-0.07em] text-[#f3f0e8]">
                        Tovushlarga e'tibor qarating.
                      </h3>
                    </div>
                  </article>

                  <article className="note-card relative min-h-[430px] overflow-hidden rounded-[38px] border border-[#f3f0e8]/10 bg-white/[0.035] p-7 md:col-span-3">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f3f0e8]/42">
                      Asosiy
                    </p>
                    <div className="mt-10 space-y-5">
                      <div className="border-b border-[#f3f0e8]/10 pb-5">
                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f3f0e8]/32">
                          03
                        </p>
                        <p className="mt-2 text-2xl font-black tracking-[-0.06em]">
                          Uyqu
                        </p>
                      </div>
                      <div className="border-b border-[#f3f0e8]/10 pb-5">
                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f3f0e8]/32">
                          04
                        </p>
                        <p className="mt-2 text-2xl font-black tracking-[-0.06em]">
                          Dam olish
                        </p>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f3f0e8]/32">
                          05
                        </p>
                        <p className="mt-2 text-2xl font-black tracking-[-0.06em]">
                          Psixologiya
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-7 left-7 right-7">
                      <p className="text-sm font-medium leading-[1.65] text-[#f3f0e8]/56">
                        Uyqu, dam olish va psixologik yengillik birgalikda.
                      </p>
                    </div>
                  </article>

                  <article className="note-card group relative overflow-hidden rounded-[38px] border border-[#f3f0e8]/10 bg-[#0c0f0c] p-8 md:col-span-7">
                    <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-[#f3f0e8]/10"></div>
                    <div className="absolute right-14 top-14 h-12 w-12 rounded-full border border-[#f3f0e8]/10"></div>
                    <div className="relative z-10 grid gap-8 md:grid-cols-12">
                      <div className="md:col-span-4">
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f3f0e8]/42">
                          04 / Foyda
                        </p>
                      </div>
                      <div className="md:col-span-8">
                        <h3 className="max-w-2xl text-[44px] font-black leading-[0.9] tracking-[-0.08em] text-[#f3f0e8] md:text-[64px]">
                          Uyqusizlikni yengish.
                        </h3>
                        <p className="mt-7 max-w-lg text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                          ASMR yordamida tezroq va chuqurroq uyquga ketish sirlari.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className="note-card relative overflow-hidden rounded-[38px] border border-[#f3f0e8]/10 bg-[#a855f7] p-8 text-[#060706] md:col-span-5">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#060706]/10"></div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#060706]/50">
                      05 / Natija
                    </p>
                    <h3 className="mt-12 max-w-sm text-[42px] font-black leading-[0.9] tracking-[-0.08em] md:text-[58px]">
                      Ertalabki tetiklik.
                    </h3>
                    <p className="mt-8 max-w-sm text-sm font-semibold leading-[1.65] text-[#060706]/62">
                      Yaxshi uyqu orqali kun davomida yuqori energiya va kayfiyatga
                      ega bo'ling.
                    </p>
                  </article>
                </div>
              </div>
            </section>


            <section className="process-section relative min-h-screen overflow-hidden px-5 py-24 md:px-8 lg:px-12">
              <figure className="parallax-image parallax-slow pointer-events-none right-4 top-24 h-28 w-44 rotate-[4deg] md:right-8 md:top-20 md:h-56 md:w-80">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a7b34724-25b1-4e1e-9f61-8b56d968e0a0_800w.png" alt="Collaborative planning table" />
              </figure>

              <div data-reveal="" className="mb-16 max-w-2xl">
                <p className="section-label mb-8">Jarayon</p>
                <h2 className="text-6xl font-semibold leading-[0.95] tracking-[-0.08em] md:text-8xl">
                  Video Tayyorlash
                </h2>
                <p className="mt-6 max-w-md text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                  Sizgacha yetib borguniga qadar har bir video qanday bosqichlardan
                  o'tadi.
                </p>
              </div>

              <div className="relative h-72 overflow-hidden rounded-[32px] border border-[#f3f0e8]/10 bg-white/[0.025]">
                <div className="timeline-bar absolute left-0 top-10 h-7 w-1/4 rounded-r-full text-[#060706]">
                  <span className="ml-4 text-xs font-bold leading-7">G'oya</span>
                </div>
                <div className="timeline-bar absolute left-[18%] top-24 h-7 w-1/4 rounded-r-full text-[#060706]">
                  <span className="ml-4 text-xs font-bold leading-7">Tasvirga olish</span>
                </div>
                <div className="timeline-bar absolute left-[36%] top-[9.5rem] h-7 w-1/3 rounded-r-full text-[#060706]">
                  <span className="ml-4 text-xs font-bold leading-7">Montaj</span>
                </div>
                <div className="timeline-bar absolute left-[62%] top-52 h-7 w-1/3 rounded-r-full text-[#060706]">
                  <span className="ml-4 text-xs font-bold leading-7">Nashr qilish</span>
                </div>
                <div className="grid h-full grid-cols-4 divide-x divide-[#f3f0e8]/10"></div>
              </div>

              <div className="process-columns mt-8 grid gap-4 md:grid-cols-4">
                <div className="glass rounded-[28px] p-6">
                  <h3 className="text-2xl font-semibold tracking-[-0.05em]">G'oya</h3>
                  <p className="mt-5 text-sm leading-[1.65] text-[#f3f0e8]/56">
                    Biz kuzatuvchilarimiz nima xohlayotganini o'rganamiz va yangi
                    mavzu tanlaymiz.
                  </p>
                </div>
                <div className="glass rounded-[28px] p-6">
                  <h3 className="text-2xl font-semibold tracking-[-0.05em]">
                    Tasvirga olish
                  </h3>
                  <p className="mt-5 text-sm leading-[1.65] text-[#f3f0e8]/56">
                    Sifatli mikrofonlar yordamida eng yoqimli va tinchlantiruvchi
                    tovushlarni yozib olamiz.
                  </p>
                </div>
                <div className="glass rounded-[28px] p-6">
                  <h3 className="text-2xl font-semibold tracking-[-0.05em]">Montaj</h3>
                  <p className="mt-5 text-sm leading-[1.65] text-[#f3f0e8]/56">
                    Kadrlarni va ovozlarni sinchkovlik bilan tahrirlab, yuqori sifatli
                    video tayyorlaymiz.
                  </p>
                </div>
                <div className="glass rounded-[28px] p-6">
                  <h3 className="text-2xl font-semibold tracking-[-0.05em]">
                    Nashr qilish
                  </h3>
                  <p className="mt-5 text-sm leading-[1.65] text-[#f3f0e8]/56">
                    Tayyor videoni YouTube kanalimizga yuklab, sizning e'tiboringizga
                    havola qilamiz.
                  </p>
                </div>
              </div>
            </section>


            <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "block", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1468px", "padding": "0px 0px 587px"}}>
              <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "block", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1468px", "padding": "0px 0px 587px"}}>
                <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "block", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1468px", "padding": "0px 0px 587px"}}>
                  <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "block", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1468px", "padding": "0px 0px 587px"}}>
                    <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "block", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1468px", "padding": "0px 0px 587px"}}>
                      <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "block", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1468px", "padding": "0px 0px 587px"}}>
                        <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "block", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1468px", "padding": "0px 0px 587px"}}>
                          <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "block", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1468px", "padding": "0px 0px 587px"}}>
                            <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "block", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1537px", "padding": "0px 0px 656px"}}>
                              <div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "block", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1537px", "padding": "0px 0px 656px"}}><div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "block", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1537px", "padding": "0px 0px 656px"}}><div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "block", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1537px", "padding": "0px 0px 656px"}}><div className="pin-spacer" style={{"order": "0", "placeSelf": "auto", "gridArea": "auto", "zIndex": "auto", "float": "none", "flexShrink": "1", "display": "block", "margin": "0px", "inset": "0px", "position": "relative", "flexBasis": "auto", "overflow": "visible", "boxSizing": "border-box", "width": "1041px", "height": "1537px", "padding": "0px 0px 656px"}}><section id="pricing" className="pricing-section relative min-h-screen px-5 py-24 md:px-8 lg:px-12" style={{"inset": "0px auto auto 0px", "margin": "0px", "maxWidth": "1040.78px", "width": "1040.78px", "maxHeight": "880.792px", "height": "880.792px", "padding": "96px 48px"}}>
                                <div className="grid gap-12 md:grid-cols-12">
                                  <div className="pricing-copy md:col-span-4">
                                    <p className="section-label mb-8">
                                      Qo'llab-quvvatlash
                                    </p>
                                    <h2 className="text-6xl font-semibold leading-[0.95] tracking-[-0.08em] md:text-8xl">
                                      Homiylik
                                    </h2>
                                    <p className="mt-6 max-w-72 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                                      Kanalimiz rivojiga o'z hissangizni qo'shishingiz
                                      va maxsus qulayliklarga ega bo'lishingiz mumkin.
                                    </p>
                                  </div>

                                  <div className="pricing-list grid gap-5 md:col-span-7 md:col-start-6">
                                    <div className="pricing-card glass rounded-[36px] p-8">
                                      <div className="mb-10 flex flex-wrap gap-2">
                                        <span className="rounded-full border border-[#f3f0e8]/12 px-3 py-1 text-xs font-medium text-[#f3f0e8]/66">
                                          Monthly
                                        </span>
                                        <span className="rounded-full bg-[#a855f7] px-3 py-1 text-xs font-bold text-[#060706]">
                                          Yearly -15%
                                        </span>
                                      </div>
                                      <div className="flex items-baseline gap-3">
                                        <p className="text-4xl font-semibold tracking-[-0.06em]">
                                          10,000
                                        </p>
                                        <p className="text-xl font-semibold tracking-tight text-[#f3f0e8]/38">
                                          UZS/oy
                                        </p>
                                      </div>
                                      <h3 className="mt-12 text-4xl font-semibold tracking-[-0.07em] md:text-6xl">
                                        Oddiy Homiylik
                                      </h3>
                                      <div className="mt-8 grid gap-4 md:grid-cols-2">
                                        <p className="flex items-center gap-2 text-sm font-medium">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="check" aria-hidden="true" className="lucide lucide-check h-4 w-4 text-[#a855f7]"><path d="M20 6 9 17l-5-5"></path></svg>
                                          Telegram yopiq guruh
                                        </p>
                                        <p className="flex items-center gap-2 text-sm font-medium">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="check" aria-hidden="true" className="lucide lucide-check h-4 w-4 text-[#a855f7]"><path d="M20 6 9 17l-5-5"></path></svg>
                                          Maxsus stikerlar
                                        </p>
                                        <p className="flex items-center gap-2 text-sm font-medium">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="check" aria-hidden="true" className="lucide lucide-check h-4 w-4 text-[#a855f7]"><path d="M20 6 9 17l-5-5"></path></svg>
                                          Jonli efirlarda ism o'qish
                                        </p>
                                        <p className="flex items-center gap-2 text-sm font-medium">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="check" aria-hidden="true" className="lucide lucide-check h-4 w-4 text-[#a855f7]"><path d="M20 6 9 17l-5-5"></path></svg>
                                          Fikrlaringiz inobatga olinadi
                                        </p>
                                      </div>
                                    </div>

                                    <div className="pricing-card glass rounded-[36px] p-8">
                                      <div className="flex items-baseline gap-3">
                                        <p className="text-4xl font-semibold tracking-[-0.06em]">
                                          50,000
                                        </p>
                                        <p className="text-xl font-semibold tracking-tight text-[#f3f0e8]/38">
                                          UZS/oy
                                        </p>
                                      </div>
                                      <h3 className="mt-12 text-4xl font-semibold tracking-[-0.07em] md:text-6xl">
                                        Maxsus Homiylik
                                      </h3>
                                      <div className="mt-8 grid gap-4 md:grid-cols-2">
                                        <p className="flex items-center gap-2 text-sm font-medium">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="check" aria-hidden="true" className="lucide lucide-check h-4 w-4 text-[#a855f7]"><path d="M20 6 9 17l-5-5"></path></svg>
                                          Barcha oddiy qulayliklar
                                        </p>
                                        <p className="flex items-center gap-2 text-sm font-medium">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="check" aria-hidden="true" className="lucide lucide-check h-4 w-4 text-[#a855f7]"><path d="M20 6 9 17l-5-5"></path></svg>
                                          Shaxsiy video buyurtma
                                        </p>
                                        <p className="flex items-center gap-2 text-sm font-medium">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="check" aria-hidden="true" className="lucide lucide-check h-4 w-4 text-[#a855f7]"><path d="M20 6 9 17l-5-5"></path></svg>
                                          Videolarda alohida minnatdorchilik
                                        </p>
                                        <p className="flex items-center gap-2 text-sm font-medium">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="check" aria-hidden="true" className="lucide lucide-check h-4 w-4 text-[#a855f7]"><path d="M20 6 9 17l-5-5"></path></svg>
                                          Yangiliklardan xabardor bo'lish
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section></div></div></div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <section id="contact" className="contact-section relative min-h-screen px-5 py-24 md:px-8 lg:px-12">
              <div className="grid gap-14 md:grid-cols-12">
                <div className="contact-form md:col-span-4">
                  <p className="section-label mb-10">Bog'lanish</p>
                  <div className="glass mb-5 flex w-full max-w-sm items-center justify-between rounded-[22px] px-5 py-4 text-sm font-medium text-[#f3f0e8]/58">
                    Murojaat turini tanlang
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="chevron-down" aria-hidden="true" className="lucide lucide-chevron-down h-4 w-4"><path d="m6 9 6 6 6-6"></path></svg>
                  </div>
                  <div className="mb-5 w-full max-w-sm border-b border-[#f3f0e8]/10 py-5 text-sm font-medium text-[#f3f0e8]/58">
                    Bog'lanish uchun
                    <span className="text-[#f3f0e8]">Elektron pochta *</span>
                  </div>
                  <div className="mb-10 w-full max-w-sm border-b border-[#f3f0e8]/10 py-5 text-sm font-medium text-[#f3f0e8]/58">
                    Xabaringizni yozing...
                  </div>
                  <p className="mb-8 max-w-72 text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                    Tijoriy hamkorlik yoki takliflaringiz bormi?
                  </p>
                  <a href="#footer" className="magnetic-button inline-flex items-center gap-4 rounded-full border border-[#f3f0e8]/12 px-4 py-3 text-xs font-bold uppercase tracking-[0.12em]">
                    Boshlash
                    <span className="rounded-full bg-[#a855f7] px-5 py-3 text-[#060706]">
                      Yuborish
                    </span>
                  </a>
                </div>

                <div className="faq-list md:col-span-7 md:col-start-6">
                  <p className="mb-6 text-xs font-bold uppercase tracking-[0.14em]">
                    Ko'p beriladigan savollar.
                    <span className="float-right">×</span>
                  </p>
                  <div className="faq-row border-t border-[#f3f0e8]/10 py-9">
                    <h2 className="text-4xl font-semibold tracking-[-0.07em] md:text-6xl">
                      Hamkorlik shartlari qanday?
                    </h2>
                    <p className="mt-5 max-w-2xl text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                      Tijoriy hamkorlik bo'yicha barcha takliflarni ko'rib chiqamiz.
                      Elektron pochta orqali batafsil ma'lumot yuborishingiz mumkin.
                    </p>
                  </div>
                  <div className="faq-row border-t border-[#f3f0e8]/10 py-9">
                    <h3 className="text-3xl font-semibold tracking-[-0.06em]">
                      Reklama narxlari qancha?
                    </h3>
                    <p className="mt-5 max-w-2xl text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                      Reklama narxlari video turiga va integratsiya davomiyligiga
                      qarab belgilanadi.
                    </p>
                  </div>
                  <div className="faq-row border-t border-[#f3f0e8]/10 py-9">
                    <h3 className="text-3xl font-semibold tracking-[-0.06em]">
                      Telegram orqali bog'lanish mumkinmi?
                    </h3>
                    <p className="mt-5 max-w-2xl text-sm font-medium leading-[1.7] text-[#f3f0e8]/56">
                      Ha, tezkor aloqa uchun rasmiy telegram botimizga yozishingiz
                      mumkin.
                    </p>
                  </div>
                </div>
              </div>
            </section>


            <footer id="footer" className="footer-section relative min-h-screen overflow-hidden px-5 py-24 md:px-8 lg:px-12">
              <div className="grid gap-12 md:grid-cols-12">
                <div className="md:col-span-3">
                  <p className="section-label">UZBEKCHA ASMR</p>
                </div>
                <div className="md:col-span-9">
                  <h2 className="footer-wordmark wordmark text-[5rem] font-black leading-none sm:text-[8rem] md:text-[11rem] lg:text-[14rem]">
                    UZBEKCHA ASMR
                  </h2>
                </div>
              </div>

              <div className="absolute right-5 top-28 text-xs font-bold uppercase tracking-[0.14em] text-[#f3f0e8]/44 md:right-8">
                © 2024
              </div>

              <div className="footer-links absolute bottom-16 left-5 right-5 grid gap-10 border-t border-[#f3f0e8]/12 pt-10 md:left-8 md:right-8 md:grid-cols-12">
                <div className="md:col-span-5">
                  <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#f3f0e8]/36">
                    ASMR YouTube Kanal / 2024
                  </p>
                  <h3 className="max-w-xl text-[42px] font-black leading-[0.92] tracking-[-0.07em] text-[#f3f0e8] md:text-[64px] lg:text-[76px]" style={{"letterSpacing": "-0.12em"}}>
                    Tinchlanish va yoqimli uyqu olami.
                  </h3>

                  <div className="mt-10 grid max-w-lg grid-cols-2 border-y border-[#f3f0e8]/12 py-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f3f0e8]/34">
                        Studio
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[#f3f0e8]/78">
                        UZBEKCHA ASMR
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f3f0e8]/34">
                        Field
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[#f3f0e8]/78">
                        36.5K Obunachi
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-3 md:col-start-7">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f3f0e8]/36">
                    Notes
                  </p>
                  <p className="mt-6 text-sm font-medium leading-[1.75] text-[#f3f0e8]/58">
                    Bizning osoyishtalik makonimizga xush kelibsiz. Yumshoq shivirlar,
                    nozik teginishlar.
                  </p>

                  <a href="#contact" className="group mt-9 flex items-center justify-between border-b border-[#f3f0e8]/14 pb-4 text-sm font-bold text-[#f3f0e8] transition hover:border-[#f3f0e8]/40">
                    Obuna bo'lish
                    <span className="transition duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </a>

                  <a href="#" className="group mt-4 flex items-center justify-between border-b border-[#f3f0e8]/14 pb-4 text-sm font-bold text-[#f3f0e8]/62 transition hover:border-[#f3f0e8]/40 hover:text-[#f3f0e8]">
                    Telegramga o'tish
                    <span className="transition duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </a>
                </div>

                <div className="grid gap-10 md:col-span-2 md:col-start-11">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f3f0e8]/36">
                      Social
                    </p>
                    <div className="mt-6 space-y-4 text-sm font-bold text-[#f3f0e8]/72">
                      <a href="#" className="group flex items-center justify-between transition hover:text-[#f3f0e8]">
                        LinkedIn
                        <span className="text-[#f3f0e8]/28 transition group-hover:translate-x-1 group-hover:text-[#f3f0e8]">
                          ↗
                        </span>
                      </a>
                      <a href="#" className="group flex items-center justify-between transition hover:text-[#f3f0e8]">
                        X / Twitter
                        <span className="text-[#f3f0e8]/28 transition group-hover:translate-x-1 group-hover:text-[#f3f0e8]">
                          ↗
                        </span>
                      </a>
                      <a href="#" className="group flex items-center justify-between transition hover:text-[#f3f0e8]">
                        Instagram
                        <span className="text-[#f3f0e8]/28 transition group-hover:translate-x-1 group-hover:text-[#f3f0e8]">
                          ↗
                        </span>
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f3f0e8]/36">
                      Legal
                    </p>
                    <div className="mt-6 space-y-3 text-sm font-semibold text-[#f3f0e8]/50">
                      <a href="#" className="block transition hover:text-[#f3f0e8]">
                        Privacy Policy
                      </a>
                      <a href="#" className="block transition hover:text-[#f3f0e8]">
                        Terms of Service
                      </a>
                      <a href="#" className="block transition hover:text-[#f3f0e8]">
                        404
                      </a>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-12">
                  <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#f3f0e8]/12 pt-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3f0e8]/34">
                      © 2024 UZBEKCHA ASMR
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3f0e8]/34">
                      O'zbekiston / YouTube
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </main>
    </div>
  );
}
