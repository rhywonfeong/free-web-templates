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
    "src": "https://unpkg.com/lucide@latest",
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
    "content": "\nwindow.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-2M6V79H761');\n"
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n      // Earth-tone palette remap (orange & brown)\n      (function(){\n        var map = {'#1C2419':'#3B2A1C','#CFE76A':'#E8884A','#F1EEE7':'#F6EDDE','#222B1E':'#46321F','#161C13':'#2A1C10','#33402d':'#55402C','#dff58a':'#F0A06A'};\n        document.querySelectorAll('[class]').forEach(function(el){\n          var c = el.getAttribute('class');\n          Object.keys(map).forEach(function(k){ c = c.split(k).join(map[k]); });\n          el.setAttribute('class', c);\n        });\n        document.querySelectorAll('[stroke],[fill]').forEach(function(el){\n          var s = el.getAttribute('stroke'); if (s && map[s]) el.setAttribute('stroke', map[s]);\n          var f = el.getAttribute('fill'); if (f && map[f]) el.setAttribute('fill', map[f]);\n        });\n      })();\n\n      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });\n\n      // Close mobile menu on anchor click (native browser scrolling)\n      document.querySelectorAll('a[href^=\"#\"]').forEach(a => {\n        a.addEventListener('click', () => { document.getElementById('mobileMenu').classList.add('hidden'); });\n      });\n\n      // Mobile menu\n      document.getElementById('menuBtn').addEventListener('click', () => {\n        document.getElementById('mobileMenu').classList.toggle('hidden');\n      });\n\n      // Scroll reveal\n      const io = new IntersectionObserver(entries => {\n        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });\n      }, { threshold: 0.12 });\n      document.querySelectorAll('.reveal').forEach(el => io.observe(el));\n\n      // Interest pills toggle\n      document.querySelectorAll('.interest').forEach(btn => {\n        btn.addEventListener('click', () => {\n          document.querySelectorAll('.interest').forEach(b => { b.classList.remove('bg-[#3B2A1C]','text-[#F6EDDE]'); b.classList.add('bg-[#F6EDDE]'); });\n          btn.classList.add('bg-[#3B2A1C]','text-[#F6EDDE]'); btn.classList.remove('bg-[#F6EDDE]');\n        });\n      });\n    "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n(function () {\n  function playVideo(video) {\n    var promise = video.play();\n    if (promise && typeof promise.catch === \"function\") {\n      promise.catch(function () {});\n    }\n  }\n\n  function setupVideo(video) {\n    if (video.__auraVideoReady === true) return;\n    video.__auraVideoReady = true;\n    video.removeAttribute(\"data-aura-video-ready\");\n    video.removeAttribute(\"data-aura-video-played\");\n    video.muted = true;\n    video.playsInline = true;\n\n    var preset = video.dataset.auraVideoPreset || \"loop-in-view\";\n    if (preset === \"hover\") {\n      video.addEventListener(\"mouseenter\", function () {\n        playVideo(video);\n      });\n      video.addEventListener(\"mouseleave\", function () {\n        video.pause();\n        video.currentTime = 0;\n      });\n      return;\n    }\n\n    if (!(\"IntersectionObserver\" in window)) {\n      playVideo(video);\n      return;\n    }\n\n    var observer = new IntersectionObserver(function (entries) {\n      entries.forEach(function (entry) {\n        if (entry.isIntersecting) {\n          if (preset === \"play-once\" && video.__auraVideoPlayed === true) {\n            return;\n          }\n          playVideo(video);\n        } else {\n          video.pause();\n        }\n      });\n    }, { threshold: 0.35 });\n\n    if (preset === \"play-once\") {\n      video.addEventListener(\"ended\", function () {\n        video.__auraVideoPlayed = true;\n      }, { once: true });\n    }\n\n    observer.observe(video);\n  }\n\n  function setupVideos() {\n    document\n      .querySelectorAll(\"video[data-aura-video-preset]\")\n      .forEach(setupVideo);\n  }\n\n  if (document.readyState === \"loading\") {\n    document.addEventListener(\"DOMContentLoaded\", setupVideos);\n  } else {\n    setupVideos();\n  }\n})();"
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "bg-[#F1EEE7] text-[#1C2419] antialiased selection:bg-[#CFE76A] selection:text-[#1C2419]";
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
    <div className="aura-source-body bg-[#F1EEE7] text-[#1C2419] antialiased selection:bg-[#CFE76A] selection:text-[#1C2419]">
      <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 lg:px-10 pt-4">
            <nav className="max-w-7xl mx-auto flex items-center justify-between">
              <a href="#" className="flex items-center gap-2.5 bg-[#1C2419]/80 backdrop-blur-md rounded-full pl-3 pr-5 py-2.5 text-[#F1EEE7] transition-transform duration-300 hover:scale-[1.03]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="11" stroke="#CFE76A" strokeWidth="1.5"></circle>
                  <path d="M12 4c0 6-3 8-3 8s3 2 3 8c0-6 3-8 3-8s-3-2-3-8z" fill="#CFE76A"></path>
                </svg>
                <span className="text-sm font-medium tracking-wide">HEVA</span>
              </a>
              <div className="hidden md:flex items-center gap-1 bg-[#1C2419]/80 backdrop-blur-md rounded-full p-1.5 text-[#F1EEE7]">
                <a href="#about" className="text-xs px-4 py-2 rounded-full hover:bg-white/10 transition-colors duration-300">
                  About
                </a>
                <a href="#treatments" className="text-xs px-4 py-2 rounded-full hover:bg-white/10 transition-colors duration-300">
                  Treatments
                </a>
                <a href="#journey" className="text-xs px-4 py-2 rounded-full hover:bg-white/10 transition-colors duration-300">
                  Journey
                </a>
                <a href="#testimonials" className="text-xs px-4 py-2 rounded-full hover:bg-white/10 transition-colors duration-300">
                  Stories
                </a>
                <a href="#contact" className="text-xs px-4 py-2 rounded-full bg-[#CFE76A] text-[#1C2419] font-medium hover:bg-[#dff58a] transition-colors duration-300">
                  Contact us
                </a>
              </div>
              <button id="menuBtn" className="md:hidden bg-[#1C2419]/80 backdrop-blur-md rounded-full p-3 text-[#F1EEE7]">
                <i data-lucide="menu" className="w-5 h-5"></i>
              </button>
            </nav>
            <div id="mobileMenu" className="hidden md:hidden mt-3 max-w-7xl mx-auto bg-[#1C2419]/95 backdrop-blur-md rounded-3xl p-4 text-[#F1EEE7] flex flex-col gap-1">
              <a href="#about" className="text-sm px-4 py-3 rounded-2xl hover:bg-white/10">
                About
              </a>
              <a href="#treatments" className="text-sm px-4 py-3 rounded-2xl hover:bg-white/10">
                Treatments
              </a>
              <a href="#journey" className="text-sm px-4 py-3 rounded-2xl hover:bg-white/10">
                Journey
              </a>
              <a href="#testimonials" className="text-sm px-4 py-3 rounded-2xl hover:bg-white/10">
                Stories
              </a>
              <a href="#contact" className="text-sm px-4 py-3 rounded-2xl bg-[#CFE76A] text-[#1C2419] font-medium">
                Contact us
              </a>
            </div>
          </header>


          <section className="px-3 sm:px-4 pt-3 sm:pt-4">
            <div className="relative rounded-[2rem] overflow-hidden min-h-[92vh] flex flex-col">
              <video src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/9109ecbb-cdc4-4815-981e-2ea83be13765/1781085902595-e0902c5a-fc26-40b9-a3f0-48f2f81fa4dc.mp4" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dd193dcc-9b6c-4525-bb5b-1440be21c9e8_3840w.png" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" muted="" playsInline="" preload="metadata" loop="" aria-label="Woman in sunlight, eyes closed in calm" className="absolute inset-0 w-full h-full object-cover"></video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C2419]/80 via-[#1C2419]/20 to-[#1C2419]/30"></div>
              <div className="relative flex-1 flex flex-col justify-between p-6 sm:p-10 lg:p-14 pt-28 sm:pt-32">
                <div className="flex items-center gap-2 text-[#F1EEE7]">
                  <span className="bg-[#CFE76A] text-[#1C2419] text-xs font-medium px-3 py-1.5 rounded-full">
                    New
                  </span>
                  <span className="text-xs tracking-widest uppercase">
                    Available for treatment
                  </span>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mt-auto">
                  <h1 className="reveal text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#F1EEE7] leading-[1.1] max-w-3xl">
                    Thoughtful care for your body. Designed to bring balance,
                    naturally and gently.
                  </h1>
                  <div className="reveal max-w-xs flex flex-col gap-5">
                    <p className="text-base text-[#F1EEE7]/85 leading-relaxed">
                      A gentle approach to wellness, thoughtfully guided by care that
                      supports everyday life.
                    </p>
                    <a href="#contact" className="group inline-flex items-center justify-between gap-3 bg-[#F1EEE7] text-[#1C2419] rounded-full pl-6 pr-2 py-2 text-sm font-medium w-fit transition-all duration-300 hover:bg-[#CFE76A]">
                      Book now
                      <span className="bg-[#1C2419] text-[#F1EEE7] rounded-full p-2.5 transition-transform duration-300 group-hover:translate-x-1">
                        <i data-lucide="arrow-right" className="w-4 h-4"></i>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-[#F1EEE7]/70 tracking-widest uppercase mt-10 pt-6 border-t border-white/15">
                  <span>London, UK — GMT+0</span>
                  <span className="hidden sm:block">Scroll to explore</span>
                  <span>[ Bali ID — GMT+7 ]</span>
                </div>
              </div>
            </div>
          </section>


          <section id="about" className="px-4 sm:px-6 lg:px-10 py-20 sm:py-28">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between text-xs tracking-widest uppercase text-[#1C2419]/60 mb-12">
                <span>// About us</span>
                <span>[ 01 ]</span>
              </div>
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="reveal lg:col-span-4 group">
                  <div className="rounded-3xl overflow-hidden">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba721100-2f18-43b7-bf8e-33e88fafc585_3840w.png" alt="Member portrait" className="w-full h-72 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm text-[#1C2419]/70 italic max-w-[12rem]">
                      “This platform transformed my daily routine.”
                    </p>
                    <div className="flex items-center gap-1.5 text-sm font-medium">
                      <i data-lucide="star" className="w-4 h-4 fill-[#CFE76A] text-[#1C2419]"></i>
                      5.0
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-8 flex flex-col gap-10">
                  <h2 className="reveal text-2xl sm:text-4xl font-medium tracking-tight leading-snug max-w-2xl">
                    “ We approach digital self-help as a mindful practice — designed
                    to support balance, clarity, and personal growth ”
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="reveal rounded-3xl overflow-hidden group">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ee4e1d6-cb5c-40f0-b7f6-e147b51f409c_3840w.png" alt="Calm meditation space" className="w-full h-56 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-col gap-5">
                      <p className="reveal text-base text-[#1C2419]/70 leading-relaxed">
                        Founded in a small studio in Bali, Heva grew from a simple
                        belief: care should feel human. Today, thousands find
                        structure, calm and lasting success in self-help guided by
                        real specialists.
                      </p>
                      <div className="reveal bg-[#CFE76A] rounded-3xl p-6 flex flex-col gap-3">
                        <span className="text-xs tracking-widest uppercase text-[#1C2419]/70">
                          Weekly practice time
                        </span>
                        <span className="text-4xl font-medium tracking-tight">16h</span>
                        <div className="flex gap-1.5 mt-1">
                          <span className="h-1.5 flex-1 rounded-full bg-[#1C2419]"></span>
                          <span className="h-1.5 flex-1 rounded-full bg-[#1C2419]/60"></span>
                          <span className="h-1.5 flex-1 rounded-full bg-[#1C2419]/25"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section id="treatments" className="px-4 sm:px-6 lg:px-10 py-20 sm:py-28 border-t border-[#1C2419]/10">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between text-xs tracking-widest uppercase text-[#1C2419]/60 mb-12">
                <span>// Featured treatment</span>
                <span>[ 02 ]</span>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className="flex flex-col gap-8">
                  <h2 className="reveal text-3xl sm:text-5xl font-medium tracking-tight leading-tight">
                    Nutritional support for balanced living
                  </h2>
                  <div className="reveal flex flex-wrap gap-2">
                    <span className="text-xs px-4 py-2 rounded-full border border-[#1C2419]/20 hover:bg-[#1C2419] hover:text-[#F1EEE7] transition-colors duration-300 cursor-default">
                      Clinical nutrition
                    </span>
                    <span className="text-xs px-4 py-2 rounded-full border border-[#1C2419]/20 hover:bg-[#1C2419] hover:text-[#F1EEE7] transition-colors duration-300 cursor-default">
                      Professional mentor
                    </span>
                    <span className="text-xs px-4 py-2 rounded-full border border-[#1C2419]/20 hover:bg-[#1C2419] hover:text-[#F1EEE7] transition-colors duration-300 cursor-default">
                      Metabolic support
                    </span>
                    <span className="text-xs px-4 py-2 rounded-full border border-[#1C2419]/20 hover:bg-[#1C2419] hover:text-[#F1EEE7] transition-colors duration-300 cursor-default">
                      Meal planning
                    </span>
                    <span className="text-xs px-4 py-2 rounded-full border border-[#1C2419]/20 hover:bg-[#1C2419] hover:text-[#F1EEE7] transition-colors duration-300 cursor-default">
                      Consultation
                    </span>
                    <span className="text-xs px-4 py-2 rounded-full border border-[#1C2419]/20 hover:bg-[#1C2419] hover:text-[#F1EEE7] transition-colors duration-300 cursor-default">
                      Best facilities
                    </span>
                  </div>
                  <div className="reveal flex items-start gap-5">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=400&amp;auto=format&amp;fit=crop" alt="Dr. Adam Jack" className="w-20 h-24 rounded-2xl object-cover" />
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-lg font-medium tracking-tight">
                        Dr. Adam Jack
                      </h3>
                      <p className="text-sm text-[#1C2419]/60">Our specialist</p>
                      <div className="flex items-center gap-1.5 text-sm font-medium">
                        <i data-lucide="star" className="w-4 h-4 fill-[#CFE76A] text-[#1C2419]"></i>
                        5.0
                      </div>
                      <p className="text-sm text-[#1C2419]/70 italic mt-1">
                        “ Join thousands finding success through real, sustainable
                        habits. ”
                      </p>
                      <a href="#contact" className="group mt-3 inline-flex items-center gap-2 bg-[#1C2419] text-[#F1EEE7] rounded-full px-5 py-2.5 text-xs font-medium w-fit transition-colors duration-300 hover:bg-[#33402d]">
                        Book now
                        <i data-lucide="arrow-right" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="reveal bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <p className="text-xs tracking-widest uppercase text-[#1C2419]/50 mb-2">
                          Max calories / day
                        </p>
                        <p className="text-3xl font-medium tracking-tight">
                          1.800
                          <span className="text-sm font-normal text-[#1C2419]/50">
                            kcal
                          </span>
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs tracking-widest uppercase text-[#1C2419]/50 mb-2">
                          Protein
                        </p>
                        <p className="text-3xl font-medium tracking-tight">
                          142
                          <span className="text-sm font-normal text-[#1C2419]/50">g</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1 mt-5">
                      <span className="h-6 flex-1 rounded bg-[#CFE76A]"></span>
                      <span className="h-6 flex-1 rounded bg-[#CFE76A]"></span>
                      <span className="h-6 flex-1 rounded bg-[#CFE76A]"></span>
                      <span className="h-6 flex-1 rounded bg-[#CFE76A]"></span>
                      <span className="h-6 flex-1 rounded bg-[#CFE76A]"></span>
                      <span className="h-6 flex-1 rounded bg-[#CFE76A]"></span>
                      <span className="h-6 flex-1 rounded bg-[#1C2419]/10"></span>
                      <span className="h-6 flex-1 rounded bg-[#1C2419]/10"></span>
                      <span className="h-6 flex-1 rounded bg-[#1C2419]/10"></span>
                      <span className="h-6 flex-1 rounded bg-[#1C2419]/10"></span>
                    </div>
                    <p className="text-xs text-[#1C2419]/50 mt-3">
                      Today tracking · 60% complete
                    </p>
                  </div>
                  <div className="reveal rounded-3xl overflow-hidden group">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3be6915d-8591-4f0b-a36c-d5475f2c891d_3840w.png" alt="Healthy salmon bowl" className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section id="journey" className="px-4 sm:px-6 lg:px-10 py-20 sm:py-28 border-t border-[#1C2419]/10">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between text-xs tracking-widest uppercase text-[#1C2419]/60 mb-12">
                <span>// Your journey</span>
                <span>[ 03 ]</span>
              </div>
              <div className="flex flex-col lg:flex-row justify-between gap-8 mb-14">
                <h2 className="reveal text-3xl sm:text-5xl font-medium tracking-tight leading-tight max-w-xl">
                  Discover the treatment that’s right for you
                </h2>
                <p className="reveal text-base text-[#1C2419]/70 max-w-sm leading-relaxed">
                  “ Join thousands finding success through a guided, step-by-step path
                  designed around your own rhythm. ”
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div className="reveal relative rounded-3xl overflow-hidden group">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5841789-af78-4a48-8f9d-352e1b07dab4_3840w.png" alt="Woman exercising outdoors" className="w-full h-[28rem] sm:h-[34rem] object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#F1EEE7]/95 backdrop-blur rounded-3xl p-5 sm:w-72">
                    <p className="text-xs tracking-widest uppercase text-[#1C2419]/50">
                      Start from
                    </p>
                    <p className="text-3xl font-medium tracking-tight mt-1">$400</p>
                    <p className="text-xs text-[#1C2419]/60 mt-2 leading-relaxed">
                      Personalized plans for sustainable, healthy weight loss.
                    </p>
                    <div className="flex gap-8 mt-4 pt-4 border-t border-[#1C2419]/10">
                      <div>
                        <p className="text-xs text-[#1C2419]/50">Fat content</p>
                        <p className="text-lg font-medium">
                          19
                          <span className="text-xs text-[#1C2419]/40">%</span>
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-[#1C2419]/50">Body muscle</p>
                        <p className="text-lg font-medium">
                          33
                          <span className="text-xs text-[#1C2419]/40">%</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="reveal py-7 border-b border-[#1C2419]/10 group cursor-pointer">
                    <div className="flex items-start gap-5">
                      <span className="text-xs tracking-widest text-[#1C2419]/40 mt-1.5">
                        01
                      </span>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-medium tracking-tight">
                          Weight loss treatment
                        </h3>
                        <p className="text-base text-[#1C2419]/60 mt-2 leading-relaxed">
                          Support sustainable, balanced weight loss through
                          personalized care, guided support, and healthier long-term
                          habits.
                        </p>
                        <div className="flex items-center justify-between mt-5 flex-wrap gap-3">
                          <a href="#contact" className="group/b inline-flex items-center gap-2 bg-[#1C2419] text-[#F1EEE7] rounded-full px-5 py-2.5 text-xs font-medium transition-colors duration-300 hover:bg-[#33402d]">
                            Book now
                            <i data-lucide="arrow-right" className="w-3.5 h-3.5 transition-transform duration-300 group-hover/b:translate-x-1"></i>
                          </a>
                          <span className="flex items-center gap-1.5 text-sm">
                            <i data-lucide="star" className="w-4 h-4 fill-[#CFE76A] text-[#1C2419]"></i>
                            5.0 reviews
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="reveal py-7 border-b border-[#1C2419]/10 group cursor-pointer transition-colors duration-300 hover:bg-white/60 rounded-2xl px-3 -mx-3">
                    <div className="flex items-start gap-5">
                      <span className="text-xs tracking-widest text-[#1C2419]/40 mt-1.5">
                        02
                      </span>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#1C2419]/70 group-hover:text-[#1C2419] transition-colors duration-300">
                          Testosterone booster
                        </h3>
                        <p className="text-base text-[#1C2419]/50 mt-2">
                          Support energy, strength, and vitality.
                        </p>
                      </div>
                      <i data-lucide="arrow-up-right" className="w-5 h-5 ml-auto text-[#1C2419]/40 group-hover:text-[#1C2419] transition-all duration-300 group-hover:rotate-45"></i>
                    </div>
                  </div>
                  <div className="reveal py-7 border-b border-[#1C2419]/10 group cursor-pointer transition-colors duration-300 hover:bg-white/60 rounded-2xl px-3 -mx-3">
                    <div className="flex items-start gap-5">
                      <span className="text-xs tracking-widest text-[#1C2419]/40 mt-1.5">
                        03
                      </span>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#1C2419]/70 group-hover:text-[#1C2419] transition-colors duration-300">
                          Progesterone balancing
                        </h3>
                        <p className="text-base text-[#1C2419]/50 mt-2">
                          Balance hormones for improved wellbeing.
                        </p>
                      </div>
                      <i data-lucide="arrow-up-right" className="w-5 h-5 ml-auto text-[#1C2419]/40 group-hover:text-[#1C2419] transition-all duration-300 group-hover:rotate-45"></i>
                    </div>
                  </div>
                  <div className="reveal py-7 group cursor-pointer transition-colors duration-300 hover:bg-white/60 rounded-2xl px-3 -mx-3">
                    <div className="flex items-start gap-5">
                      <span className="text-xs tracking-widest text-[#1C2419]/40 mt-1.5">
                        04
                      </span>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#1C2419]/70 group-hover:text-[#1C2419] transition-colors duration-300">
                          Anti-aging treatment
                        </h3>
                        <p className="text-base text-[#1C2419]/50 mt-2">
                          Support longevity and youthful vitality.
                        </p>
                      </div>
                      <i data-lucide="arrow-up-right" className="w-5 h-5 ml-auto text-[#1C2419]/40 group-hover:text-[#1C2419] transition-all duration-300 group-hover:rotate-45"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section id="testimonials" className="px-3 sm:px-4 py-4">
            <div className="bg-[#222B1E] rounded-[2rem] px-6 sm:px-10 lg:px-14 py-16 sm:py-24 text-[#F1EEE7]">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between text-xs tracking-widest uppercase text-[#F1EEE7]/50 mb-12">
                  <span>// Testimonial</span>
                  <span>[ 04 ]</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-12">
                  <h2 className="reveal text-3xl sm:text-5xl font-medium tracking-tight leading-tight max-w-xl">
                    Our happy members built on trusted wellness care
                  </h2>
                  <div className="flex gap-3">
                    <button className="border border-white/20 rounded-full p-3 hover:bg-[#CFE76A] hover:text-[#1C2419] hover:border-[#CFE76A] transition-all duration-300">
                      <i data-lucide="arrow-left" className="w-4 h-4"></i>
                    </button>
                    <button className="border border-white/20 rounded-full p-3 hover:bg-[#CFE76A] hover:text-[#1C2419] hover:border-[#CFE76A] transition-all duration-300">
                      <i data-lucide="arrow-right" className="w-4 h-4"></i>
                    </button>
                  </div>
                </div>
                <div className="grid lg:grid-cols-12 gap-6 items-stretch">
                  <div className="reveal lg:col-span-4 rounded-3xl overflow-hidden group">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/73ce180b-c952-4edc-8e5d-e8ff63357656_1600w.png" alt="Savannah Watson" className="w-full h-72 lg:h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="reveal lg:col-span-8 bg-[#CFE76A] text-[#1C2419] rounded-3xl p-8 sm:p-12 flex flex-col justify-between gap-10">
                    <div>
                      <i data-lucide="quote" className="w-8 h-8 mb-6"></i>
                      <p className="text-xl sm:text-3xl font-medium tracking-tight leading-snug max-w-2xl">
                        Being part of a guided wellness program has supported my daily
                        routine in meaningful ways, making consistency feel
                        effortless.
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop" alt="" className="w-11 h-11 rounded-full object-cover" />
                      <div>
                        <p className="text-sm font-medium">Savannah Watson</p>
                        <p className="text-xs text-[#1C2419]/60">2-year member</p>
                      </div>
                      <span className="ml-auto text-xs text-[#1C2419]/50">1 / 8</span>
                    </div>
                  </div>
                </div>
                <div className="reveal flex flex-wrap gap-10 sm:gap-16 mt-16 pt-10 border-t border-white/10">
                  <div>
                    <p className="text-3xl sm:text-4xl font-medium tracking-tight text-[#CFE76A]">
                      12k+
                    </p>
                    <p className="text-sm text-[#F1EEE7]/60 mt-1">Active members</p>
                  </div>
                  <div>
                    <p className="text-3xl sm:text-4xl font-medium tracking-tight text-[#CFE76A]">
                      98%
                    </p>
                    <p className="text-sm text-[#F1EEE7]/60 mt-1">Satisfaction rate</p>
                  </div>
                  <div>
                    <p className="text-3xl sm:text-4xl font-medium tracking-tight text-[#CFE76A]">
                      40+
                    </p>
                    <p className="text-sm text-[#F1EEE7]/60 mt-1">Specialists</p>
                  </div>
                  <div>
                    <p className="text-3xl sm:text-4xl font-medium tracking-tight text-[#CFE76A]">
                      5.0
                    </p>
                    <p className="text-sm text-[#F1EEE7]/60 mt-1">Average rating</p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="px-4 sm:px-6 lg:px-10 py-20 sm:py-28">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between text-xs tracking-widest uppercase text-[#1C2419]/60 mb-12">
                <span>// Our story</span>
                <span>[ 05 ]</span>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col gap-6">
                  <h2 className="reveal text-3xl sm:text-5xl font-medium tracking-tight leading-tight">
                    Born from a quieter way of caring
                  </h2>
                  <p className="reveal text-base text-[#1C2419]/70 leading-relaxed max-w-lg">
                    Heva began in 2020 when our founders — a nutritionist and a
                    mindfulness teacher — noticed how rushed modern care had become.
                    They built a practice on patience: small steps, real
                    conversations, and treatments shaped around the person, not the
                    protocol.
                  </p>
                  <p className="reveal text-base text-[#1C2419]/70 leading-relaxed max-w-lg">
                    Today our team of forty specialists carries that philosophy
                    forward, from London to Bali — guiding every member with the same
                    gentle attention.
                  </p>
                  <div className="reveal flex -space-x-3 mt-2">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop" className="w-12 h-12 rounded-full object-cover ring-2 ring-[#F1EEE7]" alt="Team member" />
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=200&amp;auto=format&amp;fit=crop" className="w-12 h-12 rounded-full object-cover ring-2 ring-[#F1EEE7]" alt="Team member" />
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=200&amp;auto=format&amp;fit=crop" className="w-12 h-12 rounded-full object-cover ring-2 ring-[#F1EEE7]" alt="Team member" />
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=200&amp;auto=format&amp;fit=crop" className="w-12 h-12 rounded-full object-cover ring-2 ring-[#F1EEE7]" alt="Team member" />
                    <span className="w-12 h-12 rounded-full bg-[#1C2419] text-[#CFE76A] text-xs font-medium flex items-center justify-center ring-2 ring-[#F1EEE7]">
                      +36
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="reveal rounded-3xl overflow-hidden group mt-8">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2cb0683c-7e2f-4013-bef1-530eb48d4d00_3840w.png" alt="Yoga practice" className="w-full h-56 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="reveal rounded-3xl overflow-hidden group">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/979c1e97-b1a4-49e1-8c06-6c4c6fc27940_3840w.png" alt="Spa treatment" className="w-full h-56 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section id="contact" className="px-4 sm:px-6 lg:px-10 pb-20 sm:pb-28">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between text-xs tracking-widest uppercase text-[#1C2419]/60 mb-12">
                <span>// Contact</span>
                <span>[ 06 ]</span>
              </div>
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="flex flex-col gap-6">
                  <h2 className="reveal text-3xl sm:text-5xl font-medium tracking-tight leading-tight">
                    Begin your journey into inner serenity
                  </h2>
                  <p className="reveal text-base text-[#1C2419]/70 leading-relaxed max-w-md">
                    Tell us a little about yourself and a specialist will reach out
                    within one business day. No commitment, just a conversation.
                  </p>
                  <div className="reveal flex flex-col gap-4 mt-2">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="bg-[#CFE76A] rounded-full p-2.5">
                        <i data-lucide="mail" className="w-4 h-4"></i>
                      </span>
                      hello@helovecontent.com
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="bg-[#CFE76A] rounded-full p-2.5">
                        <i data-lucide="phone" className="w-4 h-4"></i>
                      </span>
                      +62 814 7305 9152
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="bg-[#CFE76A] rounded-full p-2.5">
                        <i data-lucide="map-pin" className="w-4 h-4"></i>
                      </span>
                      62 Kensington High Street, London W8 6DT
                    </div>
                  </div>
                  <div className="reveal bg-white rounded-3xl p-5 mt-2 max-w-xs">
                    <p className="text-xs tracking-widest uppercase text-[#1C2419]/50">
                      Only 13 slots left this month
                    </p>
                    <div className="h-1.5 rounded-full bg-[#1C2419]/10 mt-3 overflow-hidden">
                      <span className="block h-full w-3/4 rounded-full bg-[#CFE76A]"></span>
                    </div>
                  </div>
                </div>
                <form className="reveal bg-white rounded-[2rem] p-7 sm:p-10 flex flex-col gap-5 shadow-sm" data-aura-onsubmit="event.preventDefault()">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-medium tracking-wide uppercase text-[#1C2419]/60">
                        Full name
                      </label>
                      <input type="text" placeholder="Jane Cooper" className="bg-[#F1EEE7] rounded-2xl px-5 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#CFE76A] transition-shadow duration-300 placeholder:text-[#1C2419]/40" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-medium tracking-wide uppercase text-[#1C2419]/60">
                        Email
                      </label>
                      <input type="email" placeholder="jane@email.com" className="bg-[#F1EEE7] rounded-2xl px-5 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#CFE76A] transition-shadow duration-300 placeholder:text-[#1C2419]/40" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium tracking-wide uppercase text-[#1C2419]/60">
                      I'm interested in
                    </label>
                    <div className="flex flex-wrap gap-2">
                      <button type="button" className="interest text-xs px-4 py-2.5 rounded-full bg-[#1C2419] text-[#F1EEE7] transition-colors duration-300">
                        Weight loss
                      </button>
                      <button type="button" className="interest text-xs px-4 py-2.5 rounded-full bg-[#F1EEE7] hover:bg-[#1C2419] hover:text-[#F1EEE7] transition-colors duration-300">
                        Hormone balance
                      </button>
                      <button type="button" className="interest text-xs px-4 py-2.5 rounded-full bg-[#F1EEE7] hover:bg-[#1C2419] hover:text-[#F1EEE7] transition-colors duration-300">
                        Anti-aging
                      </button>
                      <button type="button" className="interest text-xs px-4 py-2.5 rounded-full bg-[#F1EEE7] hover:bg-[#1C2419] hover:text-[#F1EEE7] transition-colors duration-300">
                        Nutrition
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium tracking-wide uppercase text-[#1C2419]/60">
                      Message
                    </label>
                    <textarea rows="4" placeholder="Tell us about your goals…" className="bg-[#F1EEE7] rounded-2xl px-5 py-3.5 text-sm outline-none focus:ring-2 focus:ring-[#CFE76A] transition-shadow duration-300 placeholder:text-[#1C2419]/40 resize-none"></textarea>
                  </div>
                  <button className="group inline-flex items-center justify-center gap-2 bg-[#1C2419] text-[#F1EEE7] rounded-full px-7 py-4 text-sm font-medium transition-all duration-300 hover:bg-[#CFE76A] hover:text-[#1C2419]">
                    Send inquiry
                    <i data-lucide="arrow-right" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"></i>
                  </button>
                  <p className="text-xs text-[#1C2419]/50 text-center">
                    We reply within 24 hours · Your details stay private
                  </p>
                </form>
              </div>
            </div>
          </section>


          <footer className="px-3 sm:px-4 pb-3 sm:pb-4">
            <div className="bg-[#161C13] rounded-[2rem] px-6 sm:px-10 lg:px-14 py-14 sm:py-20 text-[#F1EEE7]">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
                  <div className="lg:col-span-5 flex flex-col gap-6">
                    <a href="#" className="flex items-center gap-3">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="11" stroke="#CFE76A" strokeWidth="1.5"></circle>
                        <path d="M12 4c0 6-3 8-3 8s3 2 3 8c0-6 3-8 3-8s-3-2-3-8z" fill="#CFE76A"></path>
                      </svg>
                      <span className="text-lg font-medium tracking-wide">HEVA</span>
                    </a>
                    <h3 className="text-2xl sm:text-3xl font-medium tracking-tight max-w-sm">
                      Begin your journey into inner serenity.
                    </h3>
                    <a href="#contact" className="group inline-flex items-center gap-3 bg-[#CFE76A] text-[#1C2419] rounded-full pl-6 pr-2 py-2 text-sm font-medium w-fit transition-colors duration-300 hover:bg-[#dff58a]">
                      Book now
                      <span className="bg-[#1C2419] text-[#CFE76A] rounded-full p-2.5 transition-transform duration-300 group-hover:translate-x-1">
                        <i data-lucide="arrow-right" className="w-4 h-4"></i>
                      </span>
                    </a>
                  </div>
                  <div className="lg:col-span-3 flex flex-col gap-5 text-sm">
                    <p className="text-xs tracking-widest uppercase text-[#F1EEE7]/40">
                      Open daily
                    </p>
                    <div>
                      <p className="text-[#F1EEE7]/60">Monday — Friday</p>
                      <p className="mt-1">09:00 AM — 09:00 PM</p>
                    </div>
                    <div>
                      <p className="text-[#F1EEE7]/60">Phone</p>
                      <p className="mt-1">(+62) 814 7305 9152</p>
                    </div>
                    <div>
                      <p className="text-[#F1EEE7]/60">Email</p>
                      <p className="mt-1">hello@helovecontent.com</p>
                    </div>
                  </div>
                  <div className="lg:col-span-4 flex flex-col gap-5 text-sm">
                    <p className="text-xs tracking-widest uppercase text-[#F1EEE7]/40">
                      Our locations
                    </p>
                    <p className="text-[#F1EEE7]/80 leading-relaxed">
                      Jl. Raya Pantangan No. 88, Kerobokan, Kuta Utara, Badung, Bali
                      80361 — Indonesia
                    </p>
                    <p className="text-[#F1EEE7]/80 leading-relaxed">
                      62 Kensington High Street, Kensington District, London W8 6DT —
                      United Kingdom
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <a href="#" className="text-xs px-4 py-2 rounded-full border border-white/15 hover:bg-[#CFE76A] hover:text-[#1C2419] hover:border-[#CFE76A] transition-all duration-300">
                        Instagram
                      </a>
                      <a href="#" className="text-xs px-4 py-2 rounded-full border border-white/15 hover:bg-[#CFE76A] hover:text-[#1C2419] hover:border-[#CFE76A] transition-all duration-300">
                        Facebook
                      </a>
                      <a href="#" className="text-xs px-4 py-2 rounded-full border border-white/15 hover:bg-[#CFE76A] hover:text-[#1C2419] hover:border-[#CFE76A] transition-all duration-300">
                        Twitter
                      </a>
                      <a href="#" className="text-xs px-4 py-2 rounded-full border border-white/15 hover:bg-[#CFE76A] hover:text-[#1C2419] hover:border-[#CFE76A] transition-all duration-300">
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-[#F1EEE7]/50">
                  <div className="flex flex-wrap gap-5">
                    <a href="#about" className="hover:text-[#CFE76A] transition-colors duration-300">
                      About
                    </a>
                    <a href="#treatments" className="hover:text-[#CFE76A] transition-colors duration-300">
                      Treatments
                    </a>
                    <a href="#journey" className="hover:text-[#CFE76A] transition-colors duration-300">
                      Journey
                    </a>
                    <a href="#testimonials" className="hover:text-[#CFE76A] transition-colors duration-300">
                      Stories
                    </a>
                  </div>
                  <p>© 2024 Assembly Movement Ltd. All rights reserved.</p>
                  <div className="flex gap-5">
                    <a href="#" className="hover:text-[#CFE76A] transition-colors duration-300">
                      Terms &amp; Conditions
                    </a>
                    <a href="#" className="hover:text-[#CFE76A] transition-colors duration-300">
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
    </div>
  );
}
