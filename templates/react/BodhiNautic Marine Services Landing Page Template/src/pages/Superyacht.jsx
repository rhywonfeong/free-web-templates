import { useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

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
    "src": "https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js",
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
    "content": "\n        lucide.createIcons();\n    "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n        document.addEventListener('DOMContentLoaded', () => {\n            const carousels = document.querySelectorAll('.service-carousel');\n\n            carousels.forEach(carousel => {\n                const getSlideWidth = () => carousel.offsetWidth;\n                const totalSlides = carousel.children.length;\n                \n                const parent = carousel.closest('.relative');\n                const dotsContainer = parent ? parent.querySelector('.carousel-dots') : null;\n                const dots = dotsContainer ? Array.from(dotsContainer.children) : [];\n\n                const updateDots = (index) => {\n                    dots.forEach((dot, i) => {\n                        if (i === index) {\n                            dot.classList.remove('bg-white/40');\n                            dot.classList.add('bg-white');\n                        } else {\n                            dot.classList.add('bg-white/40');\n                            dot.classList.remove('bg-white');\n                        }\n                    });\n                };\n\n                const randomDelay = Math.floor(Math.random() * 2000);\n                const randomInterval = 3000 + Math.floor(Math.random() * 1500);\n\n                setTimeout(() => {\n                    setInterval(() => {\n                        const slideWidth = getSlideWidth();\n                        const currentScroll = carousel.scrollLeft;\n                        const currentIndex = Math.round(currentScroll / slideWidth);\n                        \n                        let nextIndex = currentIndex + 1;\n                        if (nextIndex >= totalSlides) {\n                            nextIndex = 0;\n                        }\n\n                        carousel.scrollTo({\n                            left: nextIndex * slideWidth,\n                            behavior: 'smooth'\n                        });\n\n                        updateDots(nextIndex);\n                    }, randomInterval);\n                }, randomDelay);\n            });\n        });\n    "
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "selection:bg-blue-100 selection:text-blue-900 text-slate-900 bg-white relative";
const sourceBodyStyle = "";
const whatsAppLink = (service) => `https://wa.me/34653654342?text=${encodeURIComponent(`I would like more information about: ${service}`)}`;
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
      .filter((scriptInfo) => (scriptInfo.src || scriptInfo.content) && !scriptInfo.content.includes("service-carousel"))
      .map(appendSourceScript);

    return () => {
      detachInlineEventHandlers();
      appendedScripts.forEach((script) => script.remove());
    };
  }, []);

  useEffect(() => {
    const timers = [];
    const carousels = Array.from(document.querySelectorAll(".service-carousel"));

    carousels.forEach((carousel, carouselIndex) => {
      const slides = Array.from(carousel.children);
      const dots = Array.from(carousel.parentElement?.querySelectorAll(".carousel-dots > *") ?? []);
      if (slides.length < 2) return;

      const updateDots = (index) => {
        dots.forEach((dot, dotIndex) => {
          dot.classList.toggle("bg-white", dotIndex === index);
          dot.classList.toggle("bg-white/40", dotIndex !== index);
        });
      };

      const advance = () => {
        const slideWidth = carousel.clientWidth;
        if (!slideWidth) return;

        const currentIndex = Math.round(carousel.scrollLeft / slideWidth);
        const nextIndex = (currentIndex + 1) % slides.length;
        carousel.scrollTo({ left: nextIndex * slideWidth, behavior: "smooth" });
        updateDots(nextIndex);
      };

      const scheduleNext = () => {
        const interval = 3600 + Math.floor(Math.random() * 3600);
        timers.push(window.setTimeout(() => {
          advance();
          scheduleNext();
        }, interval));
      };

      // A stagger plus a random offset keeps the visible galleries from advancing in unison.
      const initialDelay = 900 + carouselIndex * 480 + Math.floor(Math.random() * 1800);
      timers.push(window.setTimeout(() => {
        advance();
        scheduleNext();
      }, initialDelay));
    });

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, []);

  return (
    <div className="aura-source-body selection:bg-blue-100 selection:text-blue-900 text-slate-900 bg-white relative">
      <Navigation language="en" />
      <nav aria-hidden="true" style={{ display: "none" }} className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300">

              <div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">


                  <a href="index.html" className="flex items-center gap-2 flex-shrink-0 z-50">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2a50be76-efcc-4549-9e22-88c20116de5d_800w.png" alt="BodhiNautic" className="w-auto h-12 md:h-14 object-contain" />
                  </a>


                  <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">


                      <div className="relative nav-item group">
                          <button className="flex items-center gap-1 px-3 py-2 hover:text-blue-700 transition-colors">
                              Professionals
                          </button>
                          <div className="dropdown-menu absolute top-full left-0 w-52 bg-white border border-slate-100 shadow-xl rounded-xl p-2 opacity-0 invisible transform translate-y-2 transition-all duration-200">
                              <a href="professionals#retubing" className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-700 normal-case font-medium">Retubing</a>
                              <a href="professionals#decking" className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-700 normal-case font-medium">Decking</a>
                              <a href="professionals#logos" className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-700 normal-case font-medium">Logos</a>
                              <a href="professionals#materials" className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-700 normal-case font-medium">Materials</a>
                              <a href="professionals#console-panels" className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-700 normal-case font-medium">Console Panels</a>
                              <a href="professionals#3d-scan" className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-700 normal-case font-medium">3D Scan</a>
                          </div>
                      </div>


                      <div className="relative nav-item group">
                          <button className="flex items-center gap-1 px-3 py-2 hover:text-blue-700 transition-colors">
                              Private Owners
                          </button>
                          <div className="dropdown-menu absolute top-full left-0 w-52 bg-white border border-slate-100 shadow-xl rounded-xl p-2 opacity-0 invisible transform translate-y-2 transition-all duration-200">
                              <a href="private-owners#retubing" className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-700 normal-case font-medium">Retubing</a>
                              <a href="private-owners#restoration" className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-700 normal-case font-medium">Restoration</a>
                              <a href="private-owners#decking" className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-700 normal-case font-medium">Decking</a>
                              <a href="private-owners#logos" className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-700 normal-case font-medium">Logos</a>
                              <a href="private-owners#buying" className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-700 normal-case font-medium">Buying</a>
                              <a href="private-owners#bodhiribs" className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-700 normal-case font-medium">BodhiRIBs</a>
                              <a href="private-owners#outboards" className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-700 normal-case font-medium">Outboards</a>
                          </div>
                      </div>


                      <div className="relative nav-item group">
                          <button className="flex items-center gap-1 px-3 py-2 text-blue-700 transition-colors">
                              Superyachts
                          </button>
                          <div className="dropdown-menu absolute top-full left-0 w-52 bg-white border border-slate-100 shadow-xl rounded-xl p-2 opacity-0 invisible transform translate-y-2 transition-all duration-200">
                              <a href="#toys" className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-700 normal-case font-medium">Toys &amp; Platforms</a>
                              <a href="#fenders" className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-700 normal-case font-medium">Fenders</a>
                              <a href="#retubing" className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-700 normal-case font-medium">Retubing</a>
                              <a href="#logos" className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-700 normal-case font-medium">Logos</a>
                              <a href="#console-panels" className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-700 normal-case font-medium">Console Panels</a>
                              <a href="#outboards" className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-700 normal-case font-medium">Outboards</a>
                              <a href="#3d-scan" className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-blue-700 normal-case font-medium">3D Scan</a>
                          </div>
                      </div>


                      <Link to="/shop" className="px-3 py-2 hover:text-blue-700 transition-colors">Shop</Link>
                      <a href="team" className="px-3 py-2 hover:text-blue-700 transition-colors">Team</a>

                  </div>


                  <div className="flex items-center gap-4 lg:gap-6 flex-shrink-0 z-50">


                      <div className="hidden md:flex items-center gap-2 text-xs font-semibold tracking-wider">
                          <a href="index.html" className="hover:text-blue-700 transition-colors text-slate-900">EN</a>
                          <span className="text-slate-300">|</span>
                          <a href="index-es" className="hover:text-blue-700 transition-colors text-slate-500">ES</a>
                      </div>


                      <a href="mailto:info@bodhinautic.com" className="hidden sm:block bg-slate-900 hover:bg-slate-800 transition-all text-xs font-semibold text-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm">
                         Get in touch
                      </a>


                      <button data-aura-onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" className="lg:hidden text-slate-900 p-2">
                          <iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24"></iconify-icon>
                      </button>

                  </div>
              </div>


              <div id="mobile-menu" className="hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl lg:hidden h-[calc(100vh-80px)] overflow-y-auto pb-20">
                  <div className="flex flex-col p-6 gap-2 text-sm font-medium text-slate-600">


                      <div className="border-b border-slate-50 pb-2">
                          <div className="text-slate-900 font-semibold mb-2 uppercase text-xs tracking-wider pt-2">Professionals</div>
                          <div className="pl-4 flex flex-col gap-2">
                              <a href="professionals#retubing" className="py-1">Retubing</a>
                              <a href="professionals#decking" className="py-1">Decking</a>
                              <a href="professionals#logos" className="py-1">Logos</a>
                              <a href="professionals#materials" className="py-1">Materials</a>
                              <a href="professionals#console-panels" className="py-1">Console Panels</a>
                              <a href="professionals#3d-scan" className="py-1">3D Scan</a>
                          </div>
                      </div>


                      <div className="border-b border-slate-50 pb-2 mt-2">
                          <div className="text-slate-900 font-semibold mb-2 uppercase text-xs tracking-wider pt-2">Private Owners</div>
                          <div className="pl-4 flex flex-col gap-2">
                              <a href="private-owners#retubing" className="py-1">Retubing</a>
                              <a href="private-owners#restoration" className="py-1">Restoration</a>
                              <a href="private-owners#decking" className="py-1">Decking</a>
                              <a href="private-owners#logos" className="py-1">Logos</a>
                              <a href="private-owners#buying" className="py-1">Buying Guide</a>
                              <a href="private-owners#bodhiribs" className="py-1">BodhiRibs</a>
                              <a href="private-owners#outboards" className="py-1">Outboards</a>
                          </div>
                      </div>


                      <div className="border-b border-slate-50 pb-2 mt-2">
                          <div className="text-slate-900 font-semibold mb-2 uppercase text-xs tracking-wider pt-2 text-blue-700">Superyachts</div>
                          <div className="pl-4 flex flex-col gap-2">
                              <a href="#toys" data-aura-onclick="document.getElementById('mobile-menu').classList.add('hidden')" className="py-1">Toys &amp; Platforms</a>
                              <a href="#fenders" data-aura-onclick="document.getElementById('mobile-menu').classList.add('hidden')" className="py-1">Fenders</a>
                              <a href="#retubing" data-aura-onclick="document.getElementById('mobile-menu').classList.add('hidden')" className="py-1">Retubing</a>
                              <a href="#logos" data-aura-onclick="document.getElementById('mobile-menu').classList.add('hidden')" className="py-1">Logos</a>
                              <a href="#console-panels" data-aura-onclick="document.getElementById('mobile-menu').classList.add('hidden')" className="py-1">Console Panels</a>
                              <a href="#outboards" data-aura-onclick="document.getElementById('mobile-menu').classList.add('hidden')" className="py-1">Outboards</a>
                              <a href="#3d-scan" data-aura-onclick="document.getElementById('mobile-menu').classList.add('hidden')" className="py-1">3D Scan</a>
                          </div>
                      </div>

                      <Link to="/shop" className="py-3 border-b border-slate-50 uppercase text-xs font-semibold tracking-wider">Shop</Link>
                      <a href="team" className="py-3 border-b border-slate-50 uppercase text-xs font-semibold tracking-wider">Team</a>
                      <a href="mailto:info@bodhinautic.com" className="mt-4 bg-slate-900 text-white text-center py-3 rounded-lg">Get in touch</a>
                  </div>
              </div>
          </nav>


          <section className="relative mt-20 min-h-[750px] flex items-start bg-slate-900 overflow-hidden">

              <div className="absolute inset-0 w-full h-full z-0">

                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/234145e8-7f29-4665-a9f6-110acd6d3d2f_1600w.jpg?w=800&q=80" alt="Superyacht Tender" className="opacity-50 w-full h-full object-cover" />


                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>


                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>


              <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 md:pt-40">
                  <div className="max-w-xl text-left">
                      <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
                          <span className="text-[10px] font-semibold tracking-widest text-blue-300 uppercase">Superyacht Division</span>
                      </div>

                      <h1 className="md:text-5xl lg:text-6xl leading-tight text-4xl font-medium text-white tracking-tight mb-6">Specialist inflatable and fender systems for superyachts</h1>

                      <p className="md:text-xl leading-relaxed text-lg font-light text-slate-300 max-w-lg mb-10">Reliable execution, precise fit and controlled timelines. We support tenders, fender systems and critical inflatable equipment with a technical, no-surprises approach.</p>

                      <div className="flex flex-col sm:flex-row items-start gap-4">
                          <a href="mailto:info@bodhinautic.com" className="w-full sm:w-auto bg-blue-700 hover:bg-blue-600 text-white transition-all px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-lg shadow-blue-900/20">
                              Speak with the technical team
                          </a>
                      </div>
                  </div>
              </div>
          </section>


          <section className="bg-white border-b border-slate-100 py-24">
              <div className="max-w-7xl mx-auto px-6">
                  <div className="flex flex-col md:flex-row gap-16 items-start">
                      <div className="md:w-1/3 md:sticky md:top-32">
                          <h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-6">Operational reality.</h2>
                          <p className="text-slate-500 font-light leading-relaxed mb-6">
                              We understand the constraints of superyacht operations. Our workflows are designed to integrate seamlessly with the demands of the bridge and deck departments.
                          </p>
                          <p className="text-slate-500 font-light leading-relaxed">
                              BodhiNautic is a technical specialist accustomed to these specific requirements.
                          </p>
                      </div>

                      <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">

                          <div className="group p-6 rounded-2xl bg-slate-50/50 border border-slate-200 transition-colors hover:border-slate-300 hover:bg-slate-50">
                              <div className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-4 text-slate-700 shadow-sm">
                                  <iconify-icon icon="solar:clock-circle-linear" width="20" height="20" className="text-slate-600"></iconify-icon>
                              </div>
                              <h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Limited Time Windows</h3>
                              <p className="text-sm text-slate-500 leading-relaxed">Execution must fit within tight turnaround times between guest trips or during scheduled yard periods. We plan logistics to meet departure dates.</p>
                          </div>


                          <div className="group p-6 rounded-2xl bg-slate-50/50 border border-slate-200 transition-colors hover:border-slate-300 hover:bg-slate-50">
                              <div className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-4 text-slate-700 shadow-sm">
                                  <iconify-icon icon="solar:shield-warning-linear" width="20" height="20" className="text-slate-600"></iconify-icon>
                              </div>
                              <h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Zero Tolerance</h3>
                              <p className="text-sm text-slate-500 leading-relaxed">Repairs must hold. There is no room for repeat failures once the tender is back in the garage or the guests are on board.</p>
                          </div>


                          <div className="group p-6 rounded-2xl bg-slate-50/50 border border-slate-200 transition-colors hover:border-slate-300 hover:bg-slate-50">
                              <div className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-4 text-slate-700 shadow-sm">
                                   <iconify-icon icon="solar:ruler-pen-linear" width="20" height="20" className="text-slate-600"></iconify-icon>
                              </div>
                              <h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Custom Geometries</h3>
                              <p className="text-sm text-slate-500 leading-relaxed">Standard parts rarely fit. We fabricate to exact dimensions for transoms, garages, and boarding platforms with precise interface management.</p>
                          </div>


                          <div className="group p-6 rounded-2xl bg-slate-50/50 border border-slate-200 transition-colors hover:border-slate-300 hover:bg-slate-50">
                              <div className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-4 text-slate-700 shadow-sm">
                                   <iconify-icon icon="solar:clipboard-check-linear" width="20" height="20" className="text-slate-600"></iconify-icon>
                              </div>
                              <h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Controlled Variations</h3>
                              <p className="text-sm text-slate-500 leading-relaxed">Predictable costs and no hidden surprises. We seek approval before any scope variation and document changes clearly.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>


          <section className="bg-white flex flex-col">


              <div className="py-20 border-b border-slate-100 bg-slate-50/50">
                  <div className="max-w-7xl mx-auto px-6 text-center">
                      <span className="text-blue-600 font-semibold tracking-wider uppercase text-xs mb-3 block">Expert Solutions</span>
                      <h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">Specialist Services</h2>
                      <p className="text-slate-500 mt-4 text-lg font-light max-w-2xl mx-auto">Engineered solutions for high-demand environments. Reliability and precision for critical equipment.</p>
                  </div>
              </div>


              <div id="toys" className="order-2 border-b border-slate-100 scroll-mt-24">
                  <div className="max-w-7xl mx-auto px-6 py-24">
                      <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
                          <div className="lg:w-1/2">

                              <div className="relative group rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">

                                  <div className="service-carousel flex w-full h-full overflow-x-scroll snap-x snap-mandatory scroll-smooth scrollbar-hide">
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92152c3f-3287-42d7-93a0-5f02ca9bb277_800w.jpg" alt="Inspection 1" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e80c03df-1f22-4950-bc8d-949938a04ee4_800w.jpg" alt="Inspection 2" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cec5345c-305a-4fd7-baec-53517ec7b85b_800w.jpg" alt="Inspection 3" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                  </div>

                                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none carousel-dots">
                                      <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm transition-all"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm transition-all"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm transition-all"></div>
                                  </div>


                                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur text-xs font-semibold px-3 py-1.5 rounded-full text-slate-900 shadow-sm z-20 pointer-events-none">
                                      Preventive Maintenance
                                  </div>
                              </div>
                          </div>
                          <div className="lg:w-1/2">
                              <div className="inline-flex items-center gap-2 mb-6">
                                  <span className="w-8 h-[1px] bg-blue-600"></span>
                                  <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Safety First</span>
                              </div>
                              <h3 className="text-3xl font-medium text-slate-900 mb-6 tracking-tight">Inflatable Toys &amp; Platforms Inspection and Verification</h3>
                              <p className="text-slate-500 text-lg leading-relaxed mb-8 font-light">
                                  Comprehensive inspection and technical assessment of inflatable slides, platforms and water toys commonly used on superyachts. This service focuses on identifying age-related degradation before it becomes an operational or safety issue. Most inflatable toys are built in PVC, where long-term exposure leads to adhesive ageing, plasticiser migration, weakening of bonded elements and progressive valve failures. Early detection is critical to avoid in-season breakdowns.
                              </p>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                                  <div className="flex items-start gap-3">
                                      <iconify-icon icon="solar:shield-check-linear" className="text-blue-600 mt-1 flex-shrink-0" width="20" height="20"></iconify-icon>
                                      <div>
                                          <h4 className="text-sm font-semibold text-slate-900">Bonded Elements</h4>
                                          <p className="text-xs text-slate-500 mt-1">Assessment of bonded seams, glued accessories and high-stress areas.</p>
                                      </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                      <iconify-icon icon="solar:danger-circle-linear" className="text-blue-600 mt-1 flex-shrink-0" width="20" height="20"></iconify-icon>
                                      <div>
                                          <h4 className="text-sm font-semibold text-slate-900">Valve Systems</h4>
                                          <p className="text-xs text-slate-500 mt-1">Valve systems inspection and slow-leak diagnosis.</p>
                                      </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                      <iconify-icon icon="solar:file-check-linear" className="text-blue-600 mt-1 flex-shrink-0" width="20" height="20"></iconify-icon>
                                      <div>
                                          <h4 className="text-sm font-semibold text-slate-900">Fatigue Detection</h4>
                                          <p className="text-xs text-slate-500 mt-1">Identification of abrasion zones and material fatigue.</p>
                                      </div>
                                  </div>
                              </div>

                              <a href={whatsAppLink("Inflatable Toys & Platforms Inspection and Verification")} className="text-blue-700 font-medium text-sm hover:text-blue-800 transition-colors inline-flex items-center gap-2">
                                  Request inspection <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>


              <div id="transom-fenders" className="fenders-feature order-1 scroll-mt-24">
                  <div className="max-w-7xl mx-auto px-6 py-24">
                      <div className="flex flex-col-reverse lg:flex-row-reverse gap-16 items-center">
                          <div className="lg:w-[46%]">
                              <div className="fenders-gallery">
                                  <figure className="fenders-gallery__main">
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9cd442d8-3542-4fb7-9cb0-9a51e92db3ed_800w.jpg" alt="Custom transom fender installation" />
                                      <figcaption>Custom transom protection</figcaption>
                                  </figure>
                                  <figure className="fenders-gallery__detail fenders-gallery__detail--one">
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5a08594-4c90-4983-b8a7-a758f0367c3c_800w.jpg" alt="Inflatable tender fender" />
                                  </figure>
                                  <figure className="fenders-gallery__detail fenders-gallery__detail--two">
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0abae1ed-9edc-4a20-8184-5c9f24ff086e_1600w.jpg" alt="Transom fender profile" />
                                  </figure>
                                  <figure className="fenders-gallery__detail fenders-gallery__detail--three">
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dec5b811-2948-465f-b6ee-d5abf7e840c5_1600w.jpg" alt="Bespoke fender fitment" />
                                  </figure>
                              </div>
                          </div>
                          <div className="lg:w-[46%]">
                              <div className="inline-flex items-center gap-2 mb-6">
                                  <span className="w-8 h-[1px] bg-sky-300"></span>
                                  <span className="text-xs font-bold tracking-widest text-sky-300 uppercase">Protection</span>
                              </div>
                              <h3 className="text-3xl font-medium text-white mb-6 tracking-tight">Custom Transom Fenders &amp; Inflatable Fenders</h3>
                              <p className="text-slate-300 text-lg leading-relaxed mb-8 font-light">
                                  Design, manufacturing and repair of bespoke transom fender systems for superyachts. Each primary solution is engineered around the exact geometry of the vessel, repeated berthing cycles, loads and attachment interfaces. Custom inflatable fenders are also available where required.
                              </p>
                              <ul className="space-y-4 mb-10">
                                  <li className="flex items-center gap-3 text-slate-200">
                                      <iconify-icon icon="solar:check-circle-linear" className="text-sky-300" width="20" height="20"></iconify-icon>
                                      <span>Exact-fit solutions for complex transom geometries.</span>
                                  </li>
                                  <li className="flex items-center gap-3 text-slate-200">
                                      <iconify-icon icon="solar:check-circle-linear" className="text-sky-300" width="20" height="20"></iconify-icon>
                                      <span className="">Designed for repeated heavy-duty use.</span>
                                  </li>
                                  <li className="flex items-center gap-3 text-slate-200">
                                      <iconify-icon icon="solar:check-circle-linear" className="text-sky-300" width="20" height="20"></iconify-icon>
                                      <span className="">Controlled interfaces and attachment points.</span>
                                  </li>
                              </ul>
                              <div className="flex flex-wrap gap-4 mt-8">
                                  <Link to="/transom-fenders" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-900 text-sm font-semibold transition-colors">
                                      Discover more <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon>
                                  </Link>
                                  <a href={whatsAppLink("Custom Transom Fenders & Inflatable Fenders")} className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-sky-400/30 text-sky-300 hover:bg-sky-400/10 hover:text-white transition-colors text-sm font-semibold">
                                      <iconify-icon icon="ic:baseline-whatsapp" width="18" height="18"></iconify-icon> Contact via WhatsApp
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>


              <div id="retubing" className="order-3 border-b border-slate-100 scroll-mt-24">
                  <div className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
                      <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
                          <div className="lg:w-1/2">
                              <div className="relative group rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">
                                   <div className="service-carousel flex w-full h-full overflow-x-scroll snap-x snap-mandatory scroll-smooth scrollbar-hide">
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d5bf68c-f034-4f1f-a739-b6322a9a46eb_1600w.jpg" alt="Hypalon 1" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b501e362-790b-4047-95a5-ccf2a0f80e09_1600w.jpg" alt="Hypalon 2" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0486681b-7762-4a37-a436-18d045335d73_1600w.jpg" alt="Hypalon 3" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04335485-15d7-4b05-bc5b-6fa2b0fdecd1_1600w.jpg" alt="Hypalon 4" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/da4983c1-bdd0-407f-a028-43a8ed4bbe91_1600w.jpg" alt="Hypalon 5" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d2c09873-0209-47a9-b3f4-1dc1af6500d5_1600w.jpg" alt="Hypalon 6" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/960bfa3b-c972-4f21-8cac-eb4c88bbb58b_1600w.jpg" alt="Hypalon 7" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b011c2f-dfd1-4d08-a50a-f591555c083b_1600w.jpg" alt="Hypalon 8" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                  </div>

                                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none carousel-dots">
                                      <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm transition-all"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm transition-all"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm transition-all"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm transition-all"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm transition-all"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm transition-all"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm transition-all"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm transition-all"></div>
                                  </div>
                                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur text-xs font-semibold px-3 py-1.5 rounded-full text-slate-900 shadow-sm z-20 pointer-events-none">
                                      ORCA® Specialists
                                  </div>
                              </div>
                          </div>
                          <div className="lg:w-1/2">
                              <div className="inline-flex items-center gap-2 mb-6">
                                  <span className="w-8 h-[1px] bg-blue-600"></span>
                                  <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Manufacturing</span>
                              </div>
                              <h3 className="text-3xl font-medium text-slate-900 mb-6 tracking-tight">Hypalon Tube Manufacturing &amp; Repair</h3>
                              <p className="text-slate-500 text-lg leading-relaxed mb-8 font-light">
                                   Custom manufacturing and replacement of ORCA® Hypalon (CSM) tubes for tenders and RIBs. Hypalon remains the reference material for superyacht tenders due to its durability, UV resistance and long service life.
                              </p>
                              <ul className="space-y-4 mb-10">
                                  <li className="flex items-center gap-3 text-slate-600">
                                      <iconify-icon icon="solar:check-circle-linear" className="text-blue-600" width="20" height="20"></iconify-icon>
                                      <span>ORCA® Hypalon specialist fabrication.</span>
                                  </li>
                                  <li className="flex items-center gap-3 text-slate-600">
                                      <iconify-icon icon="solar:check-circle-linear" className="text-blue-600" width="20" height="20"></iconify-icon>
                                      <span>Structural reinforcements integrated from the start.</span>
                                  </li>
                                  <li className="flex items-center gap-3 text-slate-600">
                                      <iconify-icon icon="solar:check-circle-linear" className="text-blue-600" width="20" height="20"></iconify-icon>
                                      <span className="">Long-term durability and clean finish.</span>
                                  </li>
                              </ul>
                              <a href={whatsAppLink("Hypalon Tube Manufacturing & Repair")} className="hover:text-blue-800 transition-colors inline-flex items-center gap-2 text-sm font-medium text-blue-700">Lear more</a>
                          </div>
                      </div>
                  </div>
              </div>


               <div id="logos" className="order-4 border-b border-slate-100 bg-slate-50/30 scroll-mt-24">
                  <div className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
                      <div className="flex flex-col-reverse lg:flex-row-reverse gap-16 items-center">
                          <div className="lg:w-1/2">
                              <div className="relative group rounded-2xl overflow-hidden shadow-2xl aspect-video bg-slate-100">
                                  <div className="service-carousel flex w-full h-full overflow-x-scroll snap-x snap-mandatory scroll-smooth scrollbar-hide">
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2bf63f63-0582-4990-b5d2-1d22de91de94_1600w.jpg" alt="Hypalon Logos" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/84246605-35f8-4566-8f68-4d20e818f028_1600w.jpg" alt="Detailing" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a0745e28-5fb9-433d-90de-a6510425bf83_1600w.jpg" alt="Hypalon Finish" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                  </div>

                                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none carousel-dots">
                                      <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm transition-all"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm transition-all"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm transition-all"></div>
                                  </div>
                              </div>
                          </div>
                          <div className="lg:w-1/2">
                              <div className="inline-flex items-center gap-2 mb-6">
                                  <span className="w-8 h-[1px] bg-blue-600"></span>
                                  <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Branding</span>
                              </div>
                              <h3 className="text-3xl font-medium text-slate-900 mb-6 tracking-tight">Logos &amp; Registrations in Hypalon</h3>
                              <p className="text-slate-500 text-lg leading-relaxed mb-8 font-light">
                                  Permanent application of logos, names and registrations directly in Hypalon material. Unlike vinyl or stickers, these markings do not peel, shrink or degrade over time.
                              </p>
                              <ul className="space-y-4 mb-10">
                                  <li className="flex items-center gap-3 text-slate-600">
                                      <iconify-icon icon="solar:check-circle-linear" className="text-blue-600" width="20" height="20"></iconify-icon>
                                      <span className="">Hypalon-applied graphics, not adhesive vinyl.</span>
                                  </li>
                                  <li className="flex items-center gap-3 text-slate-600">
                                      <iconify-icon icon="solar:check-circle-linear" className="text-blue-600" width="20" height="20"></iconify-icon>
                                      <span>Long-lasting, UV-stable finish.</span>
                                  </li>
                                  <li className="flex items-center gap-3 text-slate-600">
                                      <iconify-icon icon="solar:check-circle-linear" className="text-blue-600" width="20" height="20"></iconify-icon>
                                      <span className="">Clean integration with tube design.</span>
                                  </li>
                              </ul>
                              <a href={whatsAppLink("Logos & Registrations in Hypalon")} className="hover:text-blue-800 transition-colors inline-flex items-center gap-2 text-sm font-medium text-blue-700">Discover how it works</a>
                          </div>
                      </div>
                  </div>
              </div>


               <div id="outboards" className="order-5 border-b border-slate-100 scroll-mt-24">
                  <div className="max-w-7xl mx-auto px-6 py-24">
                      <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
                          <div className="lg:w-1/2">

                              <div className="relative group rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">

                                  <div className="service-carousel flex w-full h-full overflow-x-scroll snap-x snap-mandatory scroll-smooth scrollbar-hide">
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/231cb0f4-db2b-4be5-a2b5-499a80d7cbbe_1600w.jpg" alt="Engine Installation" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ee04eb12-fbd2-44e0-bcf4-0ea9268d35c0_800w.jpg" alt="Rigging Detail" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c75ddabc-0afd-4b79-8f6c-f2c25ab51ce4_800w.jpg" alt="Tender Repowering" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2ebe0cb9-1453-4dfd-a1a4-732f73b3284d_800w.png" alt="Clean Engine Setup" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                  </div>

                                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none carousel-dots">
                                      <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm transition-all"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm transition-all"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm transition-all"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm transition-all"></div>
                                  </div>

                                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur text-xs font-semibold px-3 py-1.5 rounded-full text-slate-900 shadow-sm z-20 pointer-events-none">
                                      Honda &amp; Suzuki
                                  </div>
                              </div>
                          </div>
                          <div className="lg:w-1/2">
                              <div className="inline-flex items-center gap-2 mb-6">
                                  <span className="w-8 h-[1px] bg-blue-600"></span>
                                  <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Performance &amp; Reliability</span>
                              </div>
                              <h3 className="text-3xl font-medium text-slate-900 mb-6 tracking-tight">Outboard Engine Installation &amp; Repowering</h3>
                              <p className="text-slate-500 text-lg leading-relaxed mb-8 font-light">
                                  As RIB specialists, we understand that engine selection is not just about horsepower. Hull geometry, weight distribution, propeller choice and trim setup directly affect performance, fuel efficiency and long-term reliability. We provide complete solutions including new outboard engine installation, full repowering projects, rigging, steering and control integration, computer diagnostics and preventive maintenance. We represent Honda and Suzuki outboards and ensure correct configuration for each specific hull and use case.
                              </p>
                              <ul className="space-y-4 mb-10">
                                  <li className="flex items-center gap-3 text-slate-600">
                                      <iconify-icon icon="solar:check-circle-linear" className="text-blue-600" width="20" height="20"></iconify-icon>
                                      <span>Optimised hull–engine matching</span>
                                  </li>
                                  <li className="flex items-center gap-3 text-slate-600">
                                      <iconify-icon icon="solar:check-circle-linear" className="text-blue-600" width="20" height="20"></iconify-icon>
                                      <span>Professional rigging &amp; setup</span>
                                  </li>
                                  <li className="flex items-center gap-3 text-slate-600">
                                      <iconify-icon icon="solar:check-circle-linear" className="text-blue-600" width="20" height="20"></iconify-icon>
                                      <span>Certified diagnostics</span>
                                  </li>

                              </ul>
                              <a href={whatsAppLink("Outboard Engine Installation & Repowering")} className="hover:text-blue-800 transition-colors inline-flex items-center gap-2 text-sm font-medium text-blue-700">
                                  Explore Engine Solutions <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>


               <div id="console-panels" className="order-6 border-b border-slate-100 bg-slate-50/30 scroll-mt-24">
                  <div className="max-w-7xl mx-auto px-6 py-24">
                      <div className="flex flex-col-reverse lg:flex-row-reverse gap-16 items-center">
                          <div className="lg:w-1/2">

                              <div className="relative group rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">

                                  <div className="service-carousel flex w-full h-full overflow-x-scroll snap-x snap-mandatory scroll-smooth scrollbar-hide">
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68915bb8-e504-48cf-a31f-9857754a77e8_800w.jpg" alt="Custom Console Panel" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b7c5ec6f-b7eb-4706-8c79-807c498bee74_800w.png" alt="Helm Station Refit" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0bfbbc0-c301-4810-9a03-a24c136c45a9_1600w.jpg" alt="Technical Dashboard" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                  </div>

                                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none carousel-dots">
                                      <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm transition-all"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm transition-all"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm transition-all"></div>
                                  </div>
                              </div>
                          </div>
                          <div className="lg:w-1/2">
                              <div className="inline-flex items-center gap-2 mb-6">
                                  <span className="w-8 h-[1px] bg-blue-600"></span>
                                  <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Console Refit</span>
                              </div>
                              <h3 className="text-3xl font-medium text-slate-900 mb-6 tracking-tight">Custom Methacrylate Console Panels</h3>
                              <p className="text-slate-500 text-lg leading-relaxed mb-8 font-light">
                                  High-value solutions for refits and console modernisations. We design and manufacture fully custom panels in marine-grade methacrylate (PMMA), laser-cut to specific project requirements.
                              </p>

                              <div className="space-y-4 mb-10">
                                  <div className="flex items-start gap-3">
                                      <iconify-icon icon="solar:ruler-pen-linear" className="text-blue-600 mt-1 flex-shrink-0" width="20" height="20"></iconify-icon>
                                      <div>
                                          <h4 className="text-sm font-semibold text-slate-900">Digital design &amp; Laser precision</h4>
                                          <p className="text-xs text-slate-500 mt-1">CAD-designed geometry with precise cut-outs for instruments, switches and screens.</p>
                                      </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                      <iconify-icon icon="solar:settings-minimalistic-linear" className="text-blue-600 mt-1 flex-shrink-0" width="20" height="20"></iconify-icon>
                                      <div>
                                          <h4 className="text-sm font-semibold text-slate-900">Complete customization</h4>
                                          <p className="text-xs text-slate-500 mt-1">Integrated logos, engraved legends, custom switch groupings and backlighting options.</p>
                                      </div>
                                  </div>
                                  <div className="flex items-start gap-3">
                                      <iconify-icon icon="solar:refresh-square-linear" className="text-blue-600 mt-1 flex-shrink-0" width="20" height="20"></iconify-icon>
                                      <div>
                                          <h4 className="text-sm font-semibold text-slate-900">Efficient Refits</h4>
                                          <p className="text-xs text-slate-500 mt-1">Pre-fabricated accuracy reduces installation time and delivers a shipyard-grade finish.</p>
                                      </div>
                                  </div>
                              </div>

                              <a href={whatsAppLink("Custom Methacrylate Console Panels")} className="hover:text-blue-800 transition-colors inline-flex items-center gap-2 text-sm font-medium text-blue-700">
                                  Discuss your console panel project <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>


               <div id="decking" className="order-7 border-b border-slate-100 scroll-mt-24">
                  <div className="max-w-7xl mx-auto px-6 py-24">
                      <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
                          <div className="lg:w-1/2">
                              <div className="relative group rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">
                                  <div className="service-carousel flex w-full h-full overflow-x-scroll snap-x snap-mandatory scroll-smooth scrollbar-hide">
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7822c086-7f6e-497f-80e8-3a419f1115f9_1600w.jpg" alt="Marine Decking 1" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/316cc031-c818-406f-8681-9a3f6bc6d9e9_800w.jpg" alt="Decking Detail 2" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9e802b67-9198-4e1d-9c05-6e6951076112_800w.jpg" alt="Decking Application 3" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0942cb20-7012-447f-a261-ae41a68d416f_800w.jpg" alt="Decking Pattern 4" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/28749073-4c09-4a66-9a49-c2c076b9f3f7_1600w.jpg" alt="Decking Installation 5" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5c75606-d94d-4b53-81ea-a619deb4df15_800w.jpg" alt="Decking Finish 6" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/36aa6719-eebf-4e77-940e-3cedf5eb7a48_1600w.jpg" alt="Decking Close-up 7" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/42afe28e-0050-49a2-a97a-11b535c3ae69_800w.jpg" alt="Decking Overview 8" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                  </div>

                                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none carousel-dots">
                                      <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm transition-all"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm transition-all"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm transition-all"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm transition-all"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm transition-all"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm transition-all"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm transition-all"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm transition-all"></div>
                                  </div>
                              </div>
                          </div>
                          <div className="lg:w-1/2">
                              <div className="inline-flex items-center gap-2 mb-6">
                                  <span className="w-8 h-[1px] bg-blue-600"></span>
                                  <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Flooring</span>
                              </div>
                              <h3 className="text-3xl font-medium text-slate-900 mb-6 tracking-tight">Premium Synthetic Decking</h3>
                              <p className="text-slate-500 text-lg leading-relaxed mb-8 font-light">
                                  Design, fabrication and installation of premium synthetic decking solutions for tenders and support craft. Decking systems are integrated carefully into the existing layout, ensuring proper drainage, edge detailing and durability under intensive use.
                              </p>
                              <ul className="space-y-4 mb-10">
                                  <li className="flex items-center gap-3 text-slate-600">
                                      <iconify-icon icon="solar:check-circle-linear" className="text-blue-600" width="20" height="20"></iconify-icon>
                                      <span>Integrated into tender geometry.</span>
                                  </li>
                                  <li className="flex items-center gap-3 text-slate-600">
                                      <iconify-icon icon="solar:check-circle-linear" className="text-blue-600" width="20" height="20"></iconify-icon>
                                      <span>Durable, low-maintenance solutions.</span>
                                  </li>
                                  <li className="flex items-center gap-3 text-slate-600">
                                      <iconify-icon icon="solar:check-circle-linear" className="text-blue-600" width="20" height="20"></iconify-icon>
                                      <span>Evercor, PlasDECK, Deck-X and E-Dek systems.</span>
                                  </li>
                              </ul>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  <a href="https://drive.google.com/file/d/1ydEZqEaDZfkj4Q0k4jAAn9efxdSRyuLM/view?usp=sharing" target="_blank" className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 text-slate-600 text-sm font-medium hover:bg-white hover:border-blue-200 hover:text-blue-600 hover:shadow-sm transition-all group">
                                      <iconify-icon icon="solar:file-download-linear" width="18" height="18" className="text-slate-400 group-hover:text-blue-500 transition-colors"></iconify-icon>
                                      Evercor Catalog
                                  </a>
                                  <a href="https://drive.google.com/file/d/1I7UtywanCfgauiCC-m33QZ-4iEf8zaqD/view?usp=sharing" target="_blank" className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 text-slate-600 text-sm font-medium hover:bg-white hover:border-blue-200 hover:text-blue-600 hover:shadow-sm transition-all group">
                                      <iconify-icon icon="solar:file-download-linear" width="18" height="18" className="text-slate-400 group-hover:text-blue-500 transition-colors"></iconify-icon>
                                      PlasDECK Catalog
                                  </a>
                                  <a href="https://drive.google.com/file/d/18iIvNh3pvhnj1BS48eMi6oJK0jj-RhCo/view?usp=sharing" target="_blank" className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 text-slate-600 text-sm font-medium hover:bg-white hover:border-blue-200 hover:text-blue-600 hover:shadow-sm transition-all group">
                                      <iconify-icon icon="solar:file-download-linear" width="18" height="18" className="text-slate-400 group-hover:text-blue-500 transition-colors"></iconify-icon>
                                      Deck-X Catalog
                                  </a>
                                  <a href="https://drive.google.com/file/d/1obPuBJymOs4rGdNvrtXAby5r3v7Odr7R/view?usp=sharing" target="_blank" className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 text-slate-600 text-sm font-medium hover:bg-white hover:border-blue-200 hover:text-blue-600 hover:shadow-sm transition-all group">
                                      <iconify-icon icon="solar:file-download-linear" width="18" height="18" className="text-slate-400 group-hover:text-blue-500 transition-colors"></iconify-icon>
                                      E-Dek PRO Catalog
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>


               <div id="3d-scan" className="order-8 border-b border-slate-100 bg-slate-50/30 scroll-mt-24">
                  <div className="max-w-7xl mx-auto px-6 py-24">
                      <div className="flex flex-col-reverse lg:flex-row-reverse gap-16 items-center">
                          <div className="lg:w-1/2">
                              <div className="relative group rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">
                                   <div className="service-carousel flex w-full h-full overflow-x-scroll snap-x snap-mandatory scroll-smooth scrollbar-hide">
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/671c3825-729c-4735-9b54-4b06375b3c4b_800w.jpg" alt="3D Scan 1" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/634d4b18-f1a8-4e70-91df-62bf633c7da2_800w.png" alt="3D Scan 2" className="w-full h-full object-cover flex-shrink-0 snap-center" />
                                  </div>

                                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none carousel-dots">
                                      <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm transition-all"></div>
                                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-sm transition-all"></div>
                                  </div>
                              </div>
                          </div>
                          <div className="lg:w-1/2">
                              <div className="inline-flex items-center gap-2 mb-6">
                                  <span className="w-8 h-[1px] bg-blue-600"></span>
                                  <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Technology</span>
                              </div>
                              <h3 className="text-3xl font-medium text-slate-900 mb-6 tracking-tight">3D Scanning &amp; Digital Capture</h3>
                              <p className="text-slate-500 text-lg leading-relaxed mb-8 font-light">
                                  High-precision 3D scanning and digital capture of complex geometries using advanced laser and handheld scanning systems. This technology is the same used internally for the design of custom transom fenders and inflatable solutions.
                              </p>
                              <ul className="space-y-4 mb-10">
                                  <li className="flex items-center gap-3 text-slate-600">
                                      <iconify-icon icon="solar:check-circle-linear" className="text-blue-600" width="20" height="20"></iconify-icon>
                                      <span>High-accuracy digital capture.</span>
                                  </li>
                                  <li className="flex items-center gap-3 text-slate-600">
                                      <iconify-icon icon="solar:check-circle-linear" className="text-blue-600" width="20" height="20"></iconify-icon>
                                      <span>Ideal for complex transoms and interfaces.</span>
                                  </li>
                                  <li className="flex items-center gap-3 text-slate-600">
                                      <iconify-icon icon="solar:check-circle-linear" className="text-blue-600" width="20" height="20"></iconify-icon>
                                      <span>Supports precise design and fabrication.</span>
                                  </li>
                              </ul>
                              <a href={whatsAppLink("3D Scanning & Digital Capture")} className="text-blue-700 font-medium text-sm hover:text-blue-800 transition-colors inline-flex items-center gap-2">
                                  Discuss digital capture <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>

          </section>


          <section className="border-t border-slate-100 bg-white py-24 overflow-hidden">
              <div className="max-w-7xl mx-auto px-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                      <div className="">
                          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-blue-100 rounded-full bg-blue-50/50">
                              <span className="text-[10px] font-semibold tracking-widest text-blue-600 uppercase">Communication Workflow</span>
                          </div>
                          <h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-6">Seamless Documentation &amp; Reporting.</h2>
                          <p className="text-lg text-slate-500 font-light leading-relaxed mb-8">
                              In the superyacht sector, information flow is critical. We provide detailed technical reports for every intervention, bridging the gap between Deck Officers, Captains, and Management Companies.
                          </p>
                          <div className="space-y-6">
                              <div className="flex gap-4">
                                  <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                                      <iconify-icon icon="solar:folder-check-linear" width="20" height="20"></iconify-icon>
                                  </div>
                                  <div>
                                      <h4 className="text-base font-medium text-slate-900 mb-1">Internal Communication</h4>
                                      <p className="text-sm text-slate-500 leading-relaxed">Our reports serve as a translation layer, explaining technical issues clearly so Officers can present accurate data to Captains and Management.</p>
                                  </div>
                              </div>
                              <div className="flex gap-4">
                                  <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                                      <iconify-icon icon="solar:history-linear" width="20" height="20"></iconify-icon>
                                  </div>
                                  <div>
                                      <h4 className="text-base font-medium text-slate-900 mb-1">Service Record &amp; History</h4>
                                      <p className="text-sm text-slate-500 leading-relaxed">Every job is logged. This creates a permanent service history for the vessel, invaluable for future maintenance planning, insurance claims, or resale.</p>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="relative">
                          <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                          <div className="relative bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50 p-6 md:p-8 max-w-md mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">
                              <div className="flex justify-between items-start mb-6 border-b border-slate-100 pb-4">
                                  <div>
                                      <div className="h-2 w-24 bg-slate-200 rounded mb-2"></div>
                                      <div className="h-3 w-32 bg-slate-900 rounded"></div>
                                  </div>
                                  <div className="px-2 py-1 bg-green-50 text-green-700 border border-green-100 rounded text-[10px] font-semibold uppercase tracking-wider">Completed</div>
                              </div>
                              <div className="space-y-4 mb-8">
                                  <div className="flex gap-3 items-center">
                                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                          <iconify-icon icon="solar:check-circle-linear" width="16" height="16"></iconify-icon>
                                      </div>
                                      <div className="flex-1">
                                          <div className="h-2.5 w-full bg-slate-100 rounded mb-1.5"></div>
                                          <div className="h-2 w-3/4 bg-slate-50 rounded"></div>
                                      </div>
                                  </div>
                                  <div className="flex gap-3 items-center">
                                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                           <iconify-icon icon="solar:check-circle-linear" width="16" height="16"></iconify-icon>
                                      </div>
                                      <div className="flex-1">
                                          <div className="h-2.5 w-5/6 bg-slate-100 rounded mb-1.5"></div>
                                          <div className="h-2 w-1/2 bg-slate-50 rounded"></div>
                                      </div>
                                  </div>
                              </div>
                              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                                  <div className="flex justify-between items-center text-xs text-slate-400 mb-3 font-medium tracking-wide uppercase">
                                      <span>Workflow Integration</span>
                                  </div>
                                  <div className="flex justify-between items-center">
                                      <div className="flex flex-col items-center gap-2">
                                          <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                                              <iconify-icon icon="solar:user-linear" width="16" height="16" className="text-slate-600"></iconify-icon>
                                          </div>
                                          <span className="text-[10px] font-semibold text-slate-500">Officer</span>
                                      </div>
                                      <div className="h-px bg-slate-300 flex-1 mx-2 relative">
                                          <div className="absolute right-0 -top-1 w-1 h-1 rounded-full bg-blue-500"></div>
                                      </div>
                                      <div className="flex flex-col items-center gap-2">
                                          <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                                              <iconify-icon icon="solar:anchor-linear" width="16" height="16" className="text-slate-600"></iconify-icon>
                                          </div>
                                          <span className="text-[10px] font-semibold text-slate-500">Captain</span>
                                      </div>
                                      <div className="h-px bg-slate-300 flex-1 mx-2 relative">
                                          <div className="absolute right-0 -top-1 w-1 h-1 rounded-full bg-blue-500"></div>
                                      </div>
                                      <div className="flex flex-col items-center gap-2">
                                          <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                                              <iconify-icon icon="solar:buildings-2-linear" width="16" height="16" className="text-slate-600"></iconify-icon>
                                          </div>
                                          <span className="text-[10px] font-semibold text-slate-500">Mgmt</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>


          <section className="bg-white border-t border-slate-100 py-24">
              <div className="max-w-7xl mx-auto px-6">
                  <div className="mb-16">
                      <h2 className="text-3xl font-medium text-slate-900 tracking-tight">How we work</h2>
                      <p className="text-slate-500 mt-3 font-light">A structured approach to minimize downtime and risk.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                      <div className="flex flex-col border-l-2 border-slate-100 pl-6 py-2">
                          <span className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wider">01</span>
                          <h3 className="text-base font-medium text-slate-900 mb-2">Technical Assessment</h3>
                          <p className="text-sm text-slate-500 leading-relaxed">We inspect the vessel or requirements to understand the full scope, identifying potential issues before work begins.</p>
                      </div>
                      <div className="flex flex-col border-l-2 border-slate-100 pl-6 py-2">
                          <span className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wider">02</span>
                          <h3 className="text-base font-medium text-slate-900 mb-2">Defined Scope</h3>
                          <p className="text-sm text-slate-500 leading-relaxed">A clear proposal is issued with detailed deliverables and timelines. No ambiguity on costs or outcomes.</p>
                      </div>
                      <div className="flex flex-col border-l-2 border-slate-100 pl-6 py-2">
                          <span className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wider">03</span>
                          <h3 className="text-base font-medium text-slate-900 mb-2">Execution &amp; Communication</h3>
                          <p className="text-sm text-slate-500 leading-relaxed">Work is performed with transparent updates. We prioritize doing it right the first time over unrealistic speed promises.</p>
                      </div>
                      <div className="flex flex-col border-l-2 border-slate-100 pl-6 py-2">
                          <span className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wider">04</span>
                          <h3 className="text-base font-medium text-slate-900 mb-2">Delivery &amp; Handover</h3>
                          <p className="text-sm text-slate-500 leading-relaxed">Final inspection and handover to the crew, ensuring all systems meet the required standard for immediate operation.</p>
                      </div>
                  </div>
              </div>
          </section>


          <section className="py-24 bg-slate-50 border-t border-slate-100">
              <div className="max-w-7xl mx-auto px-6">
                  <div className="text-center mb-16">
                      <h2 className="text-3xl font-medium text-slate-900 tracking-tight">Why BodhiNautic</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                      <div className="flex flex-col items-center text-center">
                          <div className="w-12 h-12 bg-white text-slate-700 border border-slate-200 rounded-full flex items-center justify-center mb-6 shadow-sm">
                              <iconify-icon icon="solar:wrench-linear" width="24" height="24"></iconify-icon>
                          </div>
                          <h3 className="text-lg font-medium text-slate-900 mb-3">Specialist Manufacturer</h3>
                          <p className="text-sm text-slate-500 leading-relaxed max-w-xs">We are not a general workshop. We specialize specifically in inflatable structures, ensuring technical depth and competence.</p>
                      </div>
                      <div className="flex flex-col items-center text-center">
                          <div className="w-12 h-12 bg-white text-slate-700 border border-slate-200 rounded-full flex items-center justify-center mb-6 shadow-sm">
                              <iconify-icon icon="solar:medal-star-linear" width="24" height="24"></iconify-icon>
                          </div>
                          <h3 className="text-lg font-medium text-slate-900 mb-3">Professional Experience</h3>
                          <p className="text-sm text-slate-500 leading-relaxed max-w-xs">Our team understands the professional and superyacht environment, offering the discretion and service level required.</p>
                      </div>
                      <div className="flex flex-col items-center text-center">
                          <div className="w-12 h-12 bg-white text-slate-700 border border-slate-200 rounded-full flex items-center justify-center mb-6 shadow-sm">
                              <iconify-icon icon="solar:target-linear" width="24" height="24"></iconify-icon>
                          </div>
                          <h3 className="text-lg font-medium text-slate-900 mb-3">Precision &amp; Accountability</h3>
                          <p className="text-sm text-slate-500 leading-relaxed max-w-xs">Repeatability and accuracy are key. We stand behind our work with clear warranties and continued support.</p>
                      </div>
                  </div>
              </div>
          </section>


          <section className="bg-white border-t border-slate-100 py-24">
              <div className="max-w-7xl mx-auto px-6">
                  <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
                      <div className="lg:w-1/2">
                          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-slate-200 rounded-full bg-slate-50">
                              <span className="text-[10px] font-semibold tracking-widest text-slate-600 uppercase">Service Area</span>
                          </div>
                          <h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-6">Strategic hub in Barcelona. Global deployment.</h2>
                          <p className="text-lg text-slate-500 font-light leading-relaxed mb-8">
                              Our workshop is strategically positioned just outside Barcelona, offering rapid response times for Barcelona-based vessels. We are within one hour of Tarragona and Girona key infrastructures.
                          </p>
                          <div className="space-y-6">
                              <div className="flex gap-5">
                                  <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                                      <iconify-icon icon="solar:globe-linear" width="24" height="24"></iconify-icon>
                                  </div>
                                  <div>
                                      <h4 className="text-base font-medium text-slate-900 mb-2">International Service</h4>
                                      <p className="text-sm text-slate-500 leading-relaxed max-w-md">While we provide premium local coverage in Catalonia, our teams are equipped to travel throughout Spain, Europe, and internationally for specific project requirements.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="lg:w-1/2 w-full">
                          <div className="bg-slate-900 rounded-2xl p-8 relative overflow-hidden shadow-2xl shadow-slate-200">
                              <div className="absolute inset-0 opacity-10">
                                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                      <path d="M0 20 L100 40 M20 0 L40 100 M60 0 L80 100 M0 60 L100 80" stroke="white" strokeWidth="0.5" fill="none"></path>
                                  </svg>
                              </div>
                              <div className="relative z-10">
                                  <h3 className="text-white font-medium mb-8 flex items-center gap-2">
                                      <iconify-icon icon="solar:map-point-linear" className="text-blue-400" width="20" height="20"></iconify-icon>
                                      Workshop Location
                                  </h3>
                                  <div className="space-y-4">
                                      <div className="flex items-center justify-between p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                                          <div className="flex items-center gap-3">
                                              <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
                                              <span className="text-slate-200 font-medium">Port Vell / MB92</span>
                                          </div>
                                          <span className="text-white font-mono text-sm">20 min</span>
                                      </div>
                                      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                                          <div className="flex items-center gap-3">
                                              <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                                              <span className="text-slate-400">Tarragona</span>
                                          </div>
                                          <span className="text-slate-300 font-mono text-sm">~60 min</span>
                                      </div>
                                      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                                          <div className="flex items-center gap-3">
                                              <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                                              <span className="text-slate-400">Girona</span>
                                          </div>
                                          <span className="text-slate-300 font-mono text-sm">~60 min</span>
                                      </div>
                                      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 mt-4">
                                          <div className="flex items-center gap-3">
                                              <iconify-icon icon="solar:routing-2-linear" className="text-slate-400" width="20" height="20"></iconify-icon>
                                              <span className="text-slate-400">Rest of Europe</span>
                                          </div>
                                          <span className="text-slate-300 font-mono text-sm">On Request</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>


          <section className="bg-white border-t border-slate-100 pt-24 pb-24" id="contact">
              <div className="max-w-3xl mx-auto px-6 text-center">
                  <h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-6">When reliability matters.</h2>
                  <p className="text-slate-500 text-lg leading-relaxed mb-10 font-light max-w-2xl mx-auto">
                      Discuss your upcoming works, seasonal planning or urgent requirements with our technical team.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <a href="mailto:info@bodhinautic.com" className="w-full sm:w-auto bg-blue-700 hover:bg-blue-600 text-white transition-all px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-lg shadow-blue-900/20">
                          Contact the technical team
                      </a>
                  </div>
              </div>
          </section>


           <Footer language="en" />


          <a href="https://wa.me/34653654342" target="_blank" rel="noopener noreferrer" className="group fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/20 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-[#20bd5a]" aria-label="Contact via WhatsApp">
              <iconify-icon icon="ic:baseline-whatsapp" width="32" height="32"></iconify-icon>
          </a>
    </div>
  );
}
