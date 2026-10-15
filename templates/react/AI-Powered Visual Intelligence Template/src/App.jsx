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
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n        tailwind.config = {\n            theme: {\n                extend: {\n                    colors: {\n                        primary: {\n                            100: '#0072FF',\n                            200: '#6aa0ff',\n                            300: '#e1ffff',\n                        },\n                        accent: {\n                            100: '#4D8BFF',\n                            200: '#003699',\n                        },\n                        neutral: {\n                            100: '#333333',\n                            200: '#5c5c5c',\n                        },\n                        bg: {\n                            100: '#FFFFFF',\n                            200: '#f5f5f5',\n                            300: '#cccccc',\n                        }\n                    },\n                    fontFamily: {\n                        sans: ['Inter', 'sans-serif'],\n                    }\n                }\n            }\n        }\n    "
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "selection:bg-primary-300 selection:text-primary-100 text-neutral-100 bg-bg-100";
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
    <div className="aura-source-body selection:bg-primary-300 selection:text-primary-100 text-neutral-100 bg-bg-100">
      <nav className="fixed w-full z-50 top-0 start-0 bg-white border-b border-gray-100">
          <div className="flex flex-wrap max-w-7xl mx-auto py-4 px-6 items-center justify-between">

              <a href="/home" className="flex items-center gap-3">
                  <img className="flex w-9 h-9 rounded-full items-center justify-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec64ebf2-6582-47b5-8227-1e0828968767_320w.png" alt="" />
                  <span className="self-center whitespace-nowrap text-2xl font-medium text-gray-900 tracking-tight">Percepvision</span>
              </a>


              <div className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center cursor-pointer" data-aura-onclick="window.location.href='/#'" role="button">
                  <a href="/solutions" className="text-lg font-normal text-gray-900 hover:text-[#0066FF] transition-colors">Solutions</a>
                  <a href="/blog" className="text-lg font-normal text-gray-900 hover:text-[#0066FF] transition-colors">Insights</a>
                  <a href="/contact" className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-[#0066FF] text-white text-base font-normal rounded-full hover:bg-blue-600 transition-colors">
                      <span className="w-2 h-2 rounded-full bg-[#00FF9D]"></span>
                      Contact Us
                  </a>
              </div>


              <div className="flex md:hidden items-center gap-4">
                  <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none" aria-controls="navbar-sticky" aria-expanded="false">
                      <span className="sr-only">Open main menu</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="menu" aria-hidden="true" className="lucide lucide-menu w-6 h-6"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
                  </button>
              </div>


              <div className="items-center justify-between hidden w-full md:hidden" id="navbar-sticky">
                  <ul className="flex flex-col p-4 mt-4 font-normal border border-gray-100 rounded-lg bg-gray-50 gap-2">
                      <li>
                          <a href="/#" className="block py-2 px-3 text-lg text-gray-900 rounded hover:bg-gray-100">Solutions</a>
                      </li>
                      <li>
                          <a href="#" className="block py-2 px-3 text-lg text-gray-900 rounded hover:bg-gray-100">Insights</a>
                      </li>
                      <li>
                          <a href="/contact" className="inline-flex items-center gap-2 mt-2 px-6 py-2.5 bg-[#0066FF] text-white text-base font-normal rounded-full hover:bg-blue-600 transition-colors w-max">
                              <span className="w-2 h-2 rounded-full bg-[#00FF9D]"></span>
                              Contact Us
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>


          <section className="md:pt-40 md:pb-28 overflow-hidden pt-32 pb-20 relative">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary-300 rounded-full blur-3xl opacity-50 mix-blend-multiply">
          </div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-20 mix-blend-multiply">
          </div>
        </div>

        <div className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
          <div className="inline-flex gap-2 text-xs font-medium text-neutral-200 bg-bg-200 border-bg-300 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
        <span className="w-2 h-2 rounded-full bg-primary-100 animate-pulse"></span>Enterprise AI-Powered Visual Intelligence
      </div>
          <h1 className="md:text-7xl leading-tight text-5xl font-semibold text-neutral-100 tracking-tight max-w-4xl mr-auto mb-6 ml-auto">
        Turn Existing Cameras into <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-100 to-accent-200">Operational Intelligence</span>
      </h1>
          <p className="leading-relaxed text-xl font-normal text-neutral-200 max-w-2xl mr-auto mb-10 ml-auto">PercepVision transforms existing camera infrastructure into real-time insights that help organisations improve safety, security and operational efficiency.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="contact" className="w-full sm:w-auto px-8 py-4 bg-neutral-100 text-white font-medium rounded-full hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
        Request Demo <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
      </a>

      </div>


          <div className="mt-16 relative mx-auto max-w-5xl rounded-xl border border-bg-300 shadow-2xl bg-white/50 backdrop-blur-sm overflow-hidden">
            <div className="flex border-bg-200 bg-white/80 border-b pt-3 pr-4 pb-3 pl-4 gap-x-2 gap-y-2 items-center">

        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-bg-300"></div>
          <div className="w-3 h-3 rounded-full bg-bg-300"></div>
          <div className="w-3 h-3 rounded-full bg-bg-300"></div>
        </div>
        <div className="ml-4 text-xs text-neutral-200 font-medium bg-bg-200 px-2 py-0.5 rounded">Product Demo</div>
      </div>
            <div className="aspect-video bg-black relative group overflow-hidden">
              <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/pHhiqLOtfcM?si=EnSIkaIECMiOmarE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen="">
              </iframe>
            </div>
          </div>
        </div>
      </section>


          <section className="py-24 border-t border-bg-200 bg-bg-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-center">

          <div className="order-2 lg:order-1 relative w-full h-[600px] bg-[#f9fafb] rounded-[2.5rem] border border-neutral-200 overflow-hidden flex flex-col justify-center p-8 md:p-12">

              <div className="[background-size:24px_24px] opacity-50 absolute top-0 right-0 bottom-0 left-0"></div>

              <div className="relative z-10 w-full max-w-[340px] mx-auto flex flex-col gap-4">

                  <div className="self-start flex gap-4 bg-white/95 w-[90%] border-neutral-100 border rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] backdrop-blur-sm gap-x-4 gap-y-4 items-center">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                      </div>
                      <div className="">
                          <div className="text-base font-medium text-neutral-900 tracking-tight">Safety Score</div>
                          <div className="text-sm text-neutral-500">Increased by 45%</div>
                      </div>
                  </div>


                  <div className="w-[90%] self-end bg-white/95 backdrop-blur-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-neutral-100 rounded-2xl p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 w-6 h-6"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      </div>
                      <div className="">
                          <div className="text-base font-medium text-neutral-900 tracking-tight">Response Time</div>
                          <div className="text-sm text-neutral-500">Reduced by 3 mins</div>
                      </div>
                  </div>


                  <div className="w-full relative bg-white shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] border border-neutral-100 rounded-2xl p-4 flex items-center gap-4 z-20">
                      <div className="absolute -inset-10 bg-blue-400/10 blur-3xl -z-10 rounded-full"></div>
                      <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500 w-6 h-6"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                      </div>
                      <div>
                          <div className="text-base font-medium text-neutral-900 tracking-tight">Ops Efficiency</div>
                          <div className="text-sm text-neutral-500">Optimized</div>
                      </div>
                  </div>


                  <div className="w-[90%] self-start ml-[5%] bg-white/95 backdrop-blur-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-neutral-100 rounded-2xl p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 w-6 h-6"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      </div>
                      <div className="">
                          <div className="text-base font-medium text-neutral-900 tracking-tight">Response Time</div>
                          <div className="text-sm text-neutral-500">Reduced by 3 mins</div>
                      </div>
                  </div>


                  <div className="w-[90%] self-start bg-white/95 backdrop-blur-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-neutral-100 rounded-2xl p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                      </div>
                      <div className="">
                          <div className="text-base font-medium text-neutral-900 tracking-tight">Safety Score</div>
                          <div className="text-sm text-neutral-500">Increased by 45%</div>
                      </div>
                  </div>
              </div>
          </div>


          <div className="order-1 lg:order-2 flex flex-col">
              <span className="text-blue-700 font-medium tracking-wider uppercase text-base mb-4 block">Why Percepvision</span>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 mb-6 leading-tight">
                  From Video Footage to<br className="hidden md:block" />
                  <span className="text-blue-600">Actionable Intelligence</span>
              </h2>
              <p className="text-xl text-neutral-600 leading-relaxed mb-10 max-w-xl">
                  Security should not be a burden. Percepvision streamlines your operations while providing a layer of safety that never sleeps.
              </p>

              <div className="flex flex-col gap-4 gap-x-4 gap-y-4">

                  <div className="flex items-start gap-5 p-6 rounded-[1.5rem] border border-neutral-200 bg-white">
                      <div className="shrink-0 w-12 h-12 rounded-full border-2 border-emerald-400 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-emerald-500"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <div className="">
                          <h3 className="text-xl font-medium text-neutral-900 tracking-tight mb-2">Improve Safety</h3>
                          <p className="text-lg text-neutral-600 leading-relaxed">Detect emerging risks and give teams faster visibility.</p>
                      </div>
                  </div>


                  <div className="flex items-start gap-5 p-6 rounded-[1.5rem] border border-neutral-200 bg-white">
                      <div className="shrink-0 w-12 h-12 rounded-full border-2 border-emerald-400 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-emerald-500"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <div className="">
                          <h3 className="text-xl font-medium text-neutral-900 tracking-tight mb-2">Strengthen Security</h3>
                          <p className="text-lg text-neutral-600 leading-relaxed">Identify unusual activity, intrusion and unattended objects.</p>
                      </div>
                  </div>


                  <div className="flex items-start gap-5 p-6 rounded-[1.5rem] border border-neutral-200 bg-white">
                      <div className="shrink-0 w-12 h-12 rounded-full border-2 border-emerald-400 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-emerald-500"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <div className="">
                          <h3 className="text-xl font-medium text-neutral-900 tracking-tight mb-2">Improve Operations</h3>
                          <p className="text-lg text-neutral-600 leading-relaxed">Understand occupancy, visitor flow, queues and space utilisation.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
          </section>


          <section className="py-24 bg-white border-t border-bg-200">
              <div className="max-w-7xl mx-auto px-6">
                  <div className="text-center mb-16">
                      <p className="text-blue-700 font-medium tracking-wider uppercase text-sm mb-4">Platform Advantages</p>
                      <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 mb-6 leading-tight">
                          Built for Your Existing Infrastructure.<br className="hidden md:block" />
                          <span className="text-blue-600">Designed for Enterprise Scale.</span>
                      </h2>
                      <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                          Add enterprise AI intelligence to the cameras and systems you already have — without replacing your existing CCTV infrastructure.
                      </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

                      <div className="bg-white rounded-[1.5rem] p-8 border border-neutral-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-md">
                          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
                          </div>
                          <h3 className="text-xl font-medium text-neutral-900 tracking-tight mb-3">Works with Existing Cameras &amp; VMS</h3>
                          <p className="text-base text-neutral-600 leading-relaxed">Add AI intelligence to your existing CCTV and VMS infrastructure without replacing your camera estate.</p>
                      </div>


                      <div className="bg-white rounded-[1.5rem] p-8 border border-neutral-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-md">
                          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                          </div>
                          <h3 className="text-xl font-medium text-neutral-900 tracking-tight mb-3">Edge AI Processing</h3>
                          <p className="text-base text-neutral-600 leading-relaxed">Process video close to the source for low-latency intelligence while reducing bandwidth and cloud dependency.</p>
                      </div>


                      <div className="bg-white rounded-[1.5rem] p-8 border border-neutral-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-md">
                          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 12 12 17 22 12"></polyline><polyline points="2 17 12 22 22 17"></polyline></svg>
                          </div>
                          <h3 className="text-xl font-medium text-neutral-900 tracking-tight mb-3">Flexible Deployment</h3>
                          <p className="text-base text-neutral-600 leading-relaxed">Deploy on-premises, at the edge or in hybrid environments to meet operational and IT requirements.</p>
                      </div>


                      <div className="bg-white rounded-[1.5rem] p-8 border border-neutral-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-md">
                          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M15 3h6v6"></path><path d="M9 21H3v-6"></path><path d="M21 3l-7 7"></path><path d="M3 21l7-7"></path></svg>
                          </div>
                          <h3 className="text-xl font-medium text-neutral-900 tracking-tight mb-3">Enterprise Scalability</h3>
                          <p className="text-base text-neutral-600 leading-relaxed">Scale from individual sites to multi-site deployments with centralised management and intelligence.</p>
                      </div>


                      <div className="bg-white rounded-[1.5rem] p-8 border border-neutral-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-md">
                          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
                          </div>
                          <h3 className="text-xl font-medium text-neutral-900 tracking-tight mb-3">Open &amp; Integratable</h3>
                          <p className="text-base text-neutral-600 leading-relaxed">Connect intelligence with VMS, access control and enterprise systems through APIs and integrations.</p>
                      </div>


                      <div className="bg-white rounded-[1.5rem] p-8 border border-neutral-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-md">
                          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                          </div>
                          <h3 className="text-xl font-medium text-neutral-900 tracking-tight mb-3">Security &amp; Privacy by Design</h3>
                          <p className="text-base text-neutral-600 leading-relaxed">Protect video and analytics data with secure communications, access controls and privacy-conscious architecture.</p>
                      </div>
                  </div>
              </div>
          </section>


          <section className="py-24 bg-[#F5F6F8]">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-blue-700 font-medium tracking-wider uppercase text-sm mb-4 text-center">Platform Capabilities</p>

          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 mb-6 text-center">One Platform. <span className="text-blue-600">Multiple Operational Outcomes.</span></h2>

          <p className="text-lg md:text-xl text-neutral-600 mb-20 max-w-3xl mx-auto text-center leading-relaxed">
            Transform your existing camera infrastructure into real-time intelligence for safety, security and
            operations. PercepVision connects with existing CCTV and VMS environments to detect events,
            understand movement and occupancy, and turn video into actionable insight.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">


            <div className="flex flex-col gap-8">
              <div className="border-b border-neutral-200 pb-4">
                <h3 className="text-2xl font-medium tracking-tight text-neutral-900">Safety &amp; Risk</h3>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600" aria-hidden="true">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.7c2.6 3.1 5.4 5.3 5.4 9.1a5.4 5.4 0 0 1-10.8 0c0-1.5.5-2.7 1.3-3.8.6 1 1.3 1.6 2.1 1.9-.4-2.6.5-5.2 2-7.2Z"></path></svg>
                </div>
                <div>
                  <p className="text-base font-medium text-neutral-900 mb-1">Fire &amp; Smoke Detection</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">Identify visible fire and smoke for earlier operational response.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600" aria-hidden="true">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="15.5" cy="4.6" r="1.9"></circle><path d="M13.8 9.2 9.4 12l2.1 3.4M13.8 9.2l3.6 1.7M13.8 9.2 8 18.9M3.6 15.1l4.4 3.8"></path></svg>
                </div>
                <div>
                  <p className="text-base font-medium text-neutral-900 mb-1">Falls &amp; Medical Incidents</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">Detect people on the floor and potential safety incidents.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600" aria-hidden="true">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.8 4.2 6v5.4c0 4.4 3.2 8.1 7.8 9.8 4.6-1.7 7.8-5.4 7.8-9.8V6L12 2.8Z"></path><path d="M12 8.4v3.9M12 15.6h.01"></path></svg>
                </div>
                <div className="">
                  <p className="text-base font-medium text-neutral-900 mb-1">Violence &amp; Abnormal Behaviour</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">Surface potential physical incidents for operator review.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600" aria-hidden="true">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="6.6" r="2.1"></circle><circle cx="13.4" cy="5.4" r="1.8"></circle><circle cx="18.4" cy="7.6" r="1.7"></circle><path d="M3.4 14.4a3.7 3.7 0 0 1 7.2 0M10.4 12.6a3.3 3.3 0 0 1 6.2 0M15.6 14.4a3 3 0 0 1 5 0M4 19.6h16"></path></svg>
                </div>
                <div className="">
                  <p className="text-base font-medium text-neutral-900 mb-1">Crowd Density &amp; Congestion</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">Monitor overcrowding and identify emerging congestion.</p>
                </div>
              </div>
            </div>


            <div className="flex flex-col gap-8">
              <div className="border-b border-neutral-200 pb-4">
                <h3 className="text-2xl font-medium tracking-tight text-neutral-900">Security &amp; Investigation</h3>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600" aria-hidden="true">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3.2 8.2V4.6h3.6M17.2 4.6h3.6v3.6M20.8 15.8v3.6h-3.6M6.8 19.4H3.2v-3.6"></path><circle cx="12" cy="12" r="2.6"></circle><path d="M12 6.4v3M12 14.6v3"></path></svg>
                </div>
                <div className="">
                  <p className="text-base font-medium text-neutral-900 mb-1">Intrusion &amp; Perimeter Monitoring</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">Detect unauthorised entry into restricted areas.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600" aria-hidden="true">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7.6" width="18" height="11.4" rx="2"></rect><path d="M8.8 7.6V6a1.8 1.8 0 0 1 1.8-1.8h2.8A1.8 1.8 0 0 1 15.2 6v1.6M3 12.8h18"></path></svg>
                </div>
                <div className="">
                  <p className="text-base font-medium text-neutral-900 mb-1">Unattended Objects</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">Identify unattended items and generate real-time alerts.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600" aria-hidden="true">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13.6 3.2H18a1.8 1.8 0 0 1 1.8 1.8v14a1.8 1.8 0 0 1-1.8 1.8h-4.4"></path><path d="M9.6 16.2 13.8 12 9.6 7.8M13.8 12H4.2"></path></svg>
                </div>
                <div className="">
                  <p className="text-base font-medium text-neutral-900 mb-1">Tailgating &amp; Access Events</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">Detect unauthorised movement through controlled entrances.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600" aria-hidden="true">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="10.6" cy="10.6" r="6.4"></circle><path d="M15.4 15.4 20.4 20.4"></path><path d="M8.2 10.6h4.8M10.6 8.2v4.8"></path></svg>
                </div>
                <div className="">
                  <p className="text-base font-medium text-neutral-900 mb-1">AI Search &amp; Investigation</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">Search recorded video by people, attributes, location and time.</p>
                </div>
              </div>
            </div>


            <div className="flex flex-col gap-8">
              <div className="border-b border-neutral-200 pb-4">
                <h3 className="text-2xl font-medium tracking-tight text-neutral-900">Operational Intelligence</h3>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600" aria-hidden="true">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9.4" cy="8" r="3.2"></circle><path d="M3.4 19.2a6 6 0 0 1 12 0"></path><path d="M16.6 5.2a3 3 0 0 1 0 5.6M18.4 19.2a5.6 5.6 0 0 0-2.2-4.4"></path></svg>
                </div>
                <div>
                  <p className="text-base font-medium text-neutral-900 mb-1">Occupancy &amp; People Counting</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">Understand live occupancy and visitor volumes across spaces.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600" aria-hidden="true">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.6"></circle><path d="M12 7.2V12l3.2 1.9"></path></svg>
                </div>
                <div>
                  <p className="text-base font-medium text-neutral-900 mb-1">Queue &amp; Waiting-Time Analytics</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">Identify growing queues and service bottlenecks in real time.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600" aria-hidden="true">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3.4 6.4h6.8a3.4 3.4 0 0 1 0 6.8H7.6a3.4 3.4 0 0 0 0 6.8h9"></path><path d="M13.8 3.6 16.8 6.4l-3 2.8M17.2 17.2l3 2.8-3 2.8" transform="translate(0,-3)"></path></svg>
                </div>
                <div>
                  <p className="text-base font-medium text-neutral-900 mb-1">Crowd &amp; Customer Flow</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">See how people move between entrances, zones and destinations.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600" aria-hidden="true">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3.4" y="3.4" width="7.2" height="7.2" rx="1.4"></rect><rect x="13.4" y="3.4" width="7.2" height="7.2" rx="1.4"></rect><rect x="3.4" y="13.4" width="7.2" height="7.2" rx="1.4"></rect><rect x="13.4" y="13.4" width="7.2" height="7.2" rx="1.4"></rect></svg>
                </div>
                <div>
                  <p className="text-base font-medium text-neutral-900 mb-1">Heatmaps &amp; Space Utilisation</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">Reveal high-traffic areas and how spaces are used over time.</p>
                </div>
              </div>
            </div>

          </div>


          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] border border-neutral-200">
            <p className="text-center text-sm font-medium text-neutral-500 uppercase tracking-wider mb-8">One Enterprise Video Intelligence Platform</p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-10">
              <span className="w-full md:w-auto px-8 py-4 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 font-medium text-center">Existing CCTV &amp; VMS</span>

              <span className="text-neutral-300 rotate-90 md:rotate-0 flex shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </span>

              <span className="w-full md:w-auto px-8 py-4 bg-blue-50 border border-blue-200 rounded-xl text-blue-700 font-medium text-center">Edge AI</span>

              <span className="text-neutral-300 rotate-90 md:rotate-0 flex shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </span>

              <span className="w-full md:w-auto px-8 py-4 bg-purple-50 border border-purple-200 rounded-xl text-purple-700 font-medium text-center">Real-Time Intelligence</span>

              <span className="text-neutral-300 rotate-90 md:rotate-0 flex shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </span>

              <span className="w-full md:w-auto px-8 py-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 font-medium text-center">Alerts · Dashboards · Reports · APIs</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-neutral-600 font-medium">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg> 
                Works with your existing infrastructure
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg> 
                Edge / On-Prem / Hybrid
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg> 
                Enterprise Scale
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg> 
                Privacy by Design
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-16 gap-x-4 gap-y-4 items-center justify-center">
            <a className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center" href="#">Book a Demo</a>
            <a className="w-full sm:w-auto px-8 py-4 bg-white border border-neutral-300 text-neutral-900 font-medium rounded-full hover:bg-neutral-50 transition-colors flex items-center justify-center" href="#">Explore the Platform</a>
          </div>

        </div>
      </section>


          <section className="w-full font-sans flex flex-col">

          <div className="w-full py-24 px-6 flex flex-col items-center text-center bg-[#0B3B9B]">
              <h3 className="text-white text-sm md:text-base font-semibold tracking-wider uppercase mb-6">How It Works</h3>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                  See. Understand. <span className="text-[#00DF81]">Act.</span>
              </h2>
              <p className="text-lg md:text-xl text-white mb-20 max-w-3xl mx-auto font-normal">
                  Transform existing camera feeds into real-time operational intelligence.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 max-w-6xl mx-auto w-full">
                  <div className="flex flex-col items-center">
                      <div className="w-20 h-20 bg-[#E0E6ED] rounded-3xl flex items-center justify-center mb-6 text-[#0B3B9B]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                      </div>
                      <h4 className="text-xl font-semibold tracking-tight text-white mb-3">See</h4>
                      <p className="text-base text-white/90 leading-relaxed max-w-xs mx-auto">
                          Connect existing cameras and video-management systems.
                      </p>
                  </div>

                  <div className="flex flex-col items-center">
                      <div className="w-20 h-20 bg-[#E0E6ED] rounded-3xl flex items-center justify-center mb-6 text-[#0B3B9B]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="book-open-text" aria-hidden="true" className="lucide lucide-book-open-text w-[32px] h-[32px]" data-icon-set="lucide" data-icon-replaced="true" style={{"color": "rgb(11, 59, 155)"}}><path d="M12 5v16"></path><path d="M16 13h2"></path><path d="M16 9h2"></path><path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z"></path><path d="M6 13h2"></path><path d="M6 9h2"></path></svg>
                      </div>
                      <h4 className="text-xl font-semibold tracking-tight text-white mb-3">Understand</h4>
                      <p className="text-base text-white/90 leading-relaxed max-w-xs mx-auto">
                          Analyse live video to identify events, movement patterns and operational trends.
                      </p>
                  </div>

                  <div className="flex flex-col items-center">
                      <div className="w-20 h-20 bg-[#E0E6ED] rounded-3xl flex items-center justify-center mb-6 text-[#0B3B9B]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="rocket" aria-hidden="true" className="lucide lucide-rocket" data-icon-set="lucide" data-icon-replaced="true" style={{"color": "rgb(11, 59, 155)"}}><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path></svg>
                      </div>
                      <h4 className="text-xl font-semibold tracking-tight text-white mb-3">Act</h4>
                      <p className="text-base text-white/90 leading-relaxed max-w-xs mx-auto">
                          Deliver alerts and insights to the people and systems responsible for responding.
                      </p>
                  </div>
              </div>
          </div>



      </section>


          <section className="pt-24 pb-24">
              <div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
          <div className="text-center mb-16">
              <h2 className="md:text-4xl text-3xl font-semibold text-neutral-100 tracking-tight">Trusted by Industry Leaders</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-x-8 gap-y-8">

          <div className="md:p-10 flex flex-col text-center bg-bg-100 border-bg-300 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm translate-x-16 gap-x-8 gap-y-8 items-center">
          <div className="flex justify-center gap-1 text-primary-100 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="star" aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="star" aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="star" aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="star" aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" data-lucide="star" aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
          </div>
          <blockquote className="leading-relaxed text-xl font-normal text-neutral-100 mb-6">"The advanced analytics are
              fundamental to our security protocols. Intrusion Detection, Loitering Detection, and Unattended Object
              Detection provide crucial proactive monitoring capabilities, instantly alerting our teams before
              activity
              can escalate. The platform has elevated our operational planning, asset value, and public safety
              standards."
          </blockquote>
          <div className="flex justify-center flex-wrap gap-4 items-center text-sm md:text-base">
              <strong className="font-semibold">Kuldeep Kainth</strong>
              <span className="">Director of Innovative Solutions, CIS Security</span>
          </div>
      </div>
      </div>
      </div></section><section className="py-24 bg-bg-200">
          <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-100 mb-6">
                  See What Your Existing Cameras<br />
                  Could Tell You
              </h2>
              <p className="text-lg md:text-xl text-neutral-200 mb-10 max-w-2xl leading-relaxed">
                  Request a tailored demonstration based on your<br className="hidden md:block" />
                  environment, infrastructure and operational priorities.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-primary-100 text-white text-base font-medium rounded-full hover:bg-accent-200 transition-colors">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00DF81]"></span>
                  Request a Demo
              </a>
          </div>
      </section>
                              <footer className="border-t border-gray-200 pt-16 pb-8 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-16">
                <div className="col-span-2 md:col-span-4 lg:col-span-2">
                  <a href="#" className="flex items-center space-x-3 mb-6">
                    <img className="flex w-9 h-9 rounded-full items-center justify-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec64ebf2-6582-47b5-8227-1e0828968767_320w.png" alt="" />
                    <span className="text-xl font-medium text-gray-900 tracking-tight">
                      Percepvision
                    </span>
                  </a>
                  <p className="text-base text-gray-500 max-w-[280px] mb-8 leading-relaxed">
                    Intelligent security solutions for the modern enterprise. Powered
                    by advanced AI, designed for human use.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube">
                        <path d="M2.5 7.1C2.6 6 3.6 5 4.8 5h14.4c1.2 0 2.2 1 2.3 2.1.1 1.2.1 2.6.1 4.9s0 3.7-.1 4.9c-.1 1.1-1.1 2.1-2.3 2.1H4.8c-1.2 0-2.2-1-2.3-2.1C2.4 15.7 2.4 14.3 2.4 12s0-3.7.1-4.9z"></path>
                        <path d="M10 15l5-3-5-3v6z"></path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="">
                  <h4 className="font-medium text-gray-900 mb-5 text-base">Product</h4>
                  <ul className="space-y-3.5 text-base text-gray-500">
                    <li className="">
                      <a href="/home" className="hover:text-gray-900 transition-colors">
                        Features
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h4 className="font-medium text-gray-900 mb-5 text-base">Solutions</h4>
                  <ul className="space-y-3.5 text-base text-gray-500">
                    <li className="">
                      <a href="/solutions" className="hover:text-gray-900 transition-colors">Hospitality</a>
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h4 className="font-medium text-gray-900 mb-5 text-base">Resources</h4>
                  <ul className="space-y-3.5 text-base text-gray-500">
                    <li className="">
                      <a href="/blog" className="hover:text-gray-900 transition-colors">
                        Blog
                      </a>
                    </li>
                    <li className="">
                      <a href="/blog-post-paddington" className="hover:text-gray-900 transition-colors">
                        Case Studies
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h4 className="font-medium text-gray-900 mb-5 text-base">Company</h4>
                  <ul className="space-y-3.5 text-base text-gray-500">
                    <li className="">
                      <a href="/contact" className="hover:text-gray-900 transition-colors">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="">
                  <h4 className="font-medium text-gray-900 mb-5 text-base">Legal</h4>
                  <ul className="space-y-3.5 text-base text-gray-500">
                    <li className="">
                      <a href="/privacy-policy" className="hover:text-gray-900 transition-colors">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="">
                      <a href="/terms-of-use" className="hover:text-gray-900 transition-colors">
                        Terms of Use
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-base text-gray-500">
                  © 2025 Percepvision AI Limited. All rights reserved.
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-base text-gray-500">All Systems Operational</span>
                </div>
              </div>
            </div>
          </footer>
    </div>
  );
}
