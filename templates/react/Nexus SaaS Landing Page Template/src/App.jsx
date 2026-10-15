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
    "content": "\ntailwind.config = {\ntheme: {\nextend: {\nfontFamily: {\nsans: ['Inter', 'sans-serif'],\n},\ncolors: {\ngray: {\n850: '#1f2937',\n900: '#111827',\n950: '#030712', // Deep dark\n}\n},\nanimation: {\n'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',\n}\n}\n}\n}\n"
  },
  {
    "src": "",
    "type": "text/javascript",
    "id": "",
    "async": false,
    "defer": false,
    "content": "!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement(\"script\");i.src=\"https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js\",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();"
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "scroll-smooth";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "antialiased selection:bg-indigo-500/30 selection:text-indigo-200";
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
    <div className="aura-source-body antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{"maskImage": "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)", "WebkitMaskImage": "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)"}}><div className="w-full h-full">
        <div className="w-full h-full relative">
          <div className="aura-background-component top-0 w-full absolute h-full">
            <div data-us-project="bKN5upvoulAmWvInmHza" className="absolute w-full h-full left-0 top-0"></div>

          </div>
        </div>
      </div></div>


          <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
              <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                  <a href="#" className="flex items-center gap-2 group">
                      <div className="w-6 h-6 rounded bg-gradient-to-tr to-stone-500 flex items-center justify-center from-white">
                          <div className="w-2 h-2 rounded-full bg-black"></div>
                      </div>
                      <span className="text-sm font-semibold tracking-tight group-hover:opacity-80 transition-opacity text-white">NEXUS</span>
                  </a>

                  <div className="hidden md:flex items-center gap-8">
                      <a href="#features" className="text-sm transition-colors text-stone-400 hover:text-white">Features</a>
                      <a href="#testimonials" className="text-sm transition-colors text-stone-400 hover:text-white">Customers</a>
                      <a href="#pricing" className="text-sm transition-colors text-stone-400 hover:text-white">Pricing</a>
                      <a href="#" className="text-sm transition-colors text-stone-400 hover:text-white">Changelog</a>
                  </div>

                  <div className="flex items-center gap-4">
                      <a href="#" className="hidden md:block text-sm transition-colors text-stone-300 hover:text-white">Log in</a>
                      <a href="#" className="text-xs font-medium px-4 py-2 rounded-full transition-colors bg-white text-black hover:bg-stone-200">Sign up</a>
                  </div>
              </div>
          </nav>


          <section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative" id="hero">

              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-orange-500/10 rounded-[100%] blur-[100px] pointer-events-none"></div>
              <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-[100%] blur-[120px] pointer-events-none"></div>

              <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs mb-8 transition-colors cursor-pointer bg-white/5 border-white/10 text-orange-300 hover:bg-white/10">
                      <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-orange-400"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                      </span>
                      Nexus v2.0 is now available
                      <iconify-icon icon="lucide:arrow-right" width="12" strokeWidth="1.5"></iconify-icon>
                  </div>

                  <h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-medium tracking-tight max-w-4xl mr-auto mb-6 ml-auto text-white">
                      Sync your reality <br className="" />
                      <span className="text-stone-500">with the digital edge.</span>
                  </h1>

                  <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed text-stone-400">
                      Orchestrate workflows across your entire stack with a single, unified interface. Built for teams who ship at the speed of thought.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                      <button className="h-10 px-6 rounded-full text-sm font-medium transition-colors flex items-center gap-2 group bg-white text-black hover:bg-stone-200">
                          Start Building
                          <iconify-icon icon="lucide:chevron-right" width="16" className="group-hover:translate-x-0.5 transition-transform" strokeWidth="1.5"></iconify-icon>
                      </button>
                      <button className="h-10 px-6 rounded-full border text-sm font-medium transition-colors flex items-center gap-2 bg-white/5 border-white/10 text-white hover:bg-white/10">
                          <iconify-icon icon="lucide:command" width="16" strokeWidth="1.5"></iconify-icon>
                          Read Documentation
                      </button>
                  </div>


                  <div className="relative max-w-5xl mx-auto">
                      <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 rounded-xl blur opacity-20 to-red-600"></div>
                      <div className="relative rounded-xl border bg-[#0A0A0A] overflow-hidden shadow-2xl border-white/10">
                          <div className="flex items-center gap-2 px-4 py-3 border-b bg-white/[0.02] border-white/5">
                              <div className="flex gap-1.5">
                                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                  <div className="w-3 h-3 rounded-full bg-pink-500/20 border border-pink-500/50"></div>
                              </div>
                              <div className="flex-1 text-center text-xs font-mono text-stone-500">nexus_dashboard.tsx</div>
                          </div>
                          <div className="p-0 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">

                              <div className="hidden md:block col-span-1 space-y-4">
                                  <div className="h-8 w-24 rounded bg-white/5"></div>
                                  <div className="space-y-2">
                                      <div className="h-4 w-full rounded bg-white/5"></div>
                                      <div className="h-4 w-3/4 rounded bg-white/5"></div>
                                      <div className="h-4 w-5/6 rounded bg-white/5"></div>
                                  </div>
                              </div>

                              <div className="col-span-2 rounded-lg border p-6 relative overflow-hidden bg-white/5 border-white/5">
                                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-[60px]"></div>
                                  <div className="flex justify-between items-center mb-6">
                                      <div>
                                          <div className="text-sm mb-1 text-stone-400">Total Revenue</div>
                                          <div className="text-2xl font-medium text-white">$124,592.00</div>
                                      </div>
                                      <div className="h-8 w-8 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-400">
                                          <iconify-icon icon="lucide:trending-up" width="16" strokeWidth="1.5"></iconify-icon>
                                      </div>
                                  </div>
                                  <div className="space-y-3">
                                      <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded bg-orange-500/20 flex items-center justify-center text-orange-400">
                                              <iconify-icon icon="lucide:zap" width="16" strokeWidth="1.5"></iconify-icon>
                                          </div>
                                          <div className="flex-1 h-2 rounded-full overflow-hidden bg-white/10">
                                              <div className="h-full w-3/4 bg-orange-500 rounded-full"></div>
                                          </div>
                                      </div>
                                      <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded bg-red-500/20 flex items-center justify-center text-red-400">
                                              <iconify-icon icon="lucide:activity" width="16" strokeWidth="1.5"></iconify-icon>
                                          </div>
                                          <div className="flex-1 h-2 rounded-full overflow-hidden bg-white/10">
                                              <div className="h-full w-1/2 bg-red-500 rounded-full"></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>


                  <div className="mt-20 pt-10 border-t border-white/5">
                      <p className="text-xs text-stone-500 mb-6 uppercase tracking-widest font-medium">Trusted by engineering teams at</p>
                      <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 grayscale opacity-40">

                          <span className="text-lg font-bold tracking-tight">ACME</span>
                          <span className="text-lg font-bold tracking-tight font-serif">Globex</span>
                          <span className="text-lg font-bold tracking-tight italic">Soylent</span>
                          <span className="text-lg font-bold tracking-tight font-mono">Umbrella</span>
                          <span className="text-lg font-bold tracking-tight">Initech</span>
                      </div>
                  </div>
              </div>
          </section>


          <section id="features" className="py-24 relative">
              <div className="max-w-7xl mx-auto px-6">
                  <div className="mb-16">
                      <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">Engineered for perfection.</h2>
                      <p className="max-w-xl text-lg font-light text-stone-400">Every detail has been meticulously crafted to provide the best developer experience possible.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                      <div className="glass-panel p-8 rounded-xl group hover:bg-white/[0.06] transition-colors">
                          <div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-white/5 border-white/10 text-white">
                              <iconify-icon icon="lucide:zap" width="20" strokeWidth="1.5"></iconify-icon>
                          </div>
                          <h3 className="text-lg font-medium mb-2 text-white">Real-time Sync</h3>
                          <p className="text-sm leading-relaxed text-stone-400">Changes propagate instantly across all connected clients via our edge network. No polling required.</p>
                      </div>


                      <div className="glass-panel p-8 rounded-xl group hover:bg-white/[0.06] transition-colors">
                          <div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-white/5 border-white/10 text-white">
                              <iconify-icon icon="lucide:shield-check" width="20" strokeWidth="1.5"></iconify-icon>
                          </div>
                          <h3 className="text-lg font-medium mb-2 text-white">End-to-End Encrypted</h3>
                          <p className="text-sm leading-relaxed text-stone-400">Your data is encrypted on the device before it ever touches our servers. Your keys, your data.</p>
                      </div>


                      <div className="glass-panel p-8 rounded-xl group hover:bg-white/[0.06] transition-colors">
                          <div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-white/5 border-white/10 text-white">
                              <iconify-icon icon="lucide:globe" width="20" strokeWidth="1.5"></iconify-icon>
                          </div>
                          <h3 className="text-lg font-medium mb-2 text-white">Global Edge</h3>
                          <p className="text-sm leading-relaxed text-stone-400">Deployed to 35+ regions worldwide, ensuring low latency regardless of where your users are located.</p>
                      </div>


                      <div className="md:col-span-2 glass-panel p-8 rounded-xl relative overflow-hidden group">
                          <div className="relative z-10">
                              <div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 bg-white/5 border-white/10 text-white">
                                  <iconify-icon icon="lucide:layers" width="20" strokeWidth="1.5"></iconify-icon>
                              </div>
                              <h3 className="text-lg font-medium mb-2 text-white">Deep Integrations</h3>
                              <p className="text-sm max-w-sm leading-relaxed text-stone-400">Connect with your favorite tools seamlessly. From GitHub to Slack, we've got you covered with over 100+ native integrations.</p>
                          </div>

                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-50 group-hover:opacity-80 transition-opacity">
                              <div className="absolute inset-y-4 right-4 w-full border rounded-l-xl backdrop-blur-sm p-4 border-white/10 bg-stone-900/50">
                                  <div className="space-y-3">
                                      <div className="flex items-center gap-3 p-2 rounded transition-colors cursor-default hover:bg-white/5">
                                          <iconify-icon icon="lucide:github" className="text-white" width="16"></iconify-icon>
                                          <div className="h-2 w-16 rounded bg-white/20"></div>
                                      </div>
                                      <div className="flex items-center gap-3 p-2 rounded transition-colors cursor-default hover:bg-white/5">
                                          <iconify-icon icon="lucide:slack" className="text-white" width="16"></iconify-icon>
                                          <div className="h-2 w-20 rounded bg-white/20"></div>
                                      </div>
                                      <div className="flex items-center gap-3 p-2 rounded transition-colors cursor-default hover:bg-white/5">
                                          <iconify-icon icon="lucide:figma" className="text-white" width="16"></iconify-icon>
                                          <div className="h-2 w-12 rounded bg-white/20"></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>


                      <div className="glass-panel p-8 rounded-xl group hover:bg-white/[0.06] transition-colors md:col-span-1">
                          <div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 bg-white/5 border-white/10 text-white">
                              <iconify-icon icon="lucide:terminal" width="20" strokeWidth="1.5"></iconify-icon>
                          </div>
                          <h3 className="text-lg font-medium mb-2 text-white">CLI First</h3>
                          <p className="text-sm leading-relaxed text-stone-400">Control everything from your terminal. Automate your workflows with our powerful CLI tool.</p>
                      </div>
                  </div>
              </div>
          </section>


          <section id="testimonials" className="py-24 border-t bg-white/[0.005] border-white/5">
              <div className="max-w-7xl mx-auto px-6">
                  <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-center mb-16 text-white"> loved by builders.</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                      <div className="glass-panel p-6 rounded-xl flex flex-col justify-between">
                          <div>
                              <div className="mb-4 text-orange-400">
                                  <iconify-icon icon="lucide:quote" width="20" strokeWidth="1.5"></iconify-icon>
                              </div>
                              <p className="text-sm leading-relaxed mb-6 text-stone-300">"Nexus has completely transformed how our distributed team stays in sync. The latency is practically non-existent, and the UI is a joy to use."</p>
                          </div>
                          <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br border from-stone-700 to-stone-900 border-white/10"></div>
                              <div>
                                  <div className="text-xs font-medium text-white">Sarah Jenkins</div>
                                  <div className="text-[10px] text-stone-500 uppercase tracking-wide">CTO at Vertex</div>
                              </div>
                          </div>
                      </div>


                      <div className="glass-panel p-6 rounded-xl flex flex-col justify-between">
                          <div>
                              <div className="mb-4 text-orange-400">
                                  <iconify-icon icon="lucide:quote" width="20" strokeWidth="1.5"></iconify-icon>
                              </div>
                              <p className="text-sm leading-relaxed mb-6 text-stone-300">"The attention to detail in the design is stunning. It's rare to find a developer tool that feels this polished and robust."</p>
                          </div>
                          <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br border from-stone-700 to-stone-900 border-white/10"></div>
                              <div>
                                  <div className="text-xs font-medium text-white">David Chen</div>
                                  <div className="text-[10px] text-stone-500 uppercase tracking-wide">Lead Engineer at Flow</div>
                              </div>
                          </div>
                      </div>


                      <div className="glass-panel p-6 rounded-xl flex flex-col justify-between">
                          <div>
                              <div className="mb-4 text-orange-400">
                                  <iconify-icon icon="lucide:quote" width="20" strokeWidth="1.5"></iconify-icon>
                              </div>
                              <p className="text-sm leading-relaxed mb-6 text-stone-300">"We moved our entire project management workflow to Nexus in a weekend. The API is incredibly well documented."</p>
                          </div>
                          <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br border from-stone-700 to-stone-900 border-white/10"></div>
                              <div>
                                  <div className="text-xs font-medium text-white">Elena Rodriguez</div>
                                  <div className="text-[10px] text-stone-500 uppercase tracking-wide">Product Manager</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>


          <section id="pricing" className="py-24 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[100px] pointer-events-none bg-orange-900/10"></div>

              <div className="max-w-7xl mx-auto px-6 relative z-10">
                  <div className="text-center mb-16">
                      <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">Simple pricing.</h2>
                      <p className="text-lg font-light mb-8 text-stone-400">Start for free, scale as you grow.</p>


                      <div className="flex items-center justify-center gap-3">
                          <span className="text-sm text-stone-300">Monthly</span>
                          <label htmlFor="toggle" className="flex items-center cursor-pointer relative">
                              <input type="checkbox" id="toggle" className="sr-only toggle-checkbox" />
                              <div className="w-11 h-6 rounded-full border toggle-label transition-colors bg-stone-800 border-stone-700"></div>
                              <div className="absolute left-1 top-1 w-4 h-4 rounded-full transition-all duration-300 transform bg-white" style={{"boxShadow": "0 2px 4px rgba(0,0,0,0.2)"}}></div>
                          </label>
                          <span className="text-sm text-stone-300">Yearly <span className="text-xs ml-1 text-orange-400">-20%</span></span>
                      </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

                      <div className="glass-panel p-8 rounded-2xl flex flex-col">
                          <div className="mb-4">
                              <h3 className="text-lg font-medium text-white">Starter</h3>
                              <div className="mt-2 flex items-baseline gap-1">
                                  <span className="text-3xl font-medium text-white">$0</span>
                                  <span className="text-sm text-stone-500">/month</span>
                              </div>
                              <p className="text-xs mt-2 text-stone-400">Perfect for side projects.</p>
                          </div>
                          <div className="my-6 border-t border-white/5"></div>
                          <ul className="space-y-3 flex-1">
                              <li className="flex items-start gap-3 text-sm text-stone-300">
                                  <iconify-icon icon="lucide:check" className="text-stone-500 mt-0.5" width="16"></iconify-icon>
                                  <span>Up to 3 projects</span>
                              </li>
                              <li className="flex items-start gap-3 text-sm text-stone-300">
                                  <iconify-icon icon="lucide:check" className="text-stone-500 mt-0.5" width="16"></iconify-icon>
                                  <span>Basic analytics</span>
                              </li>
                              <li className="flex items-start gap-3 text-sm text-stone-300">
                                  <iconify-icon icon="lucide:check" className="text-stone-500 mt-0.5" width="16"></iconify-icon>
                                  <span>48h support response</span>
                              </li>
                          </ul>
                          <button className="mt-8 w-full py-2 rounded-lg border text-sm font-medium transition-colors bg-white/5 border-white/10 text-white hover:bg-white/10">Get Started</button>
                      </div>


                      <div className="p-8 rounded-2xl flex flex-col bg-white/[0.03] border border-orange-500/30 relative">
                          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent rounded-2xl pointer-events-none"></div>
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)] text-white">Popular</div>

                          <div className="mb-4 relative z-10">
                              <h3 className="text-lg font-medium text-white">Pro</h3>
                              <div className="mt-2 flex items-baseline gap-1">
                                  <span className="text-3xl font-medium text-white">$29</span>
                                  <span className="text-sm text-stone-500">/month</span>
                              </div>
                              <p className="text-xs mt-2 text-stone-400">For growing teams.</p>
                          </div>
                          <div className="my-6 border-t relative z-10 border-white/5"></div>
                          <ul className="space-y-3 flex-1 relative z-10">
                              <li className="flex items-start gap-3 text-sm text-stone-300">
                                  <iconify-icon icon="lucide:check" className="mt-0.5 text-orange-400" width="16"></iconify-icon>
                                  <span>Unlimited projects</span>
                              </li>
                              <li className="flex items-start gap-3 text-sm text-stone-300">
                                  <iconify-icon icon="lucide:check" className="mt-0.5 text-orange-400" width="16"></iconify-icon>
                                  <span>Advanced analytics</span>
                              </li>
                              <li className="flex items-start gap-3 text-sm text-stone-300">
                                  <iconify-icon icon="lucide:check" className="mt-0.5 text-orange-400" width="16"></iconify-icon>
                                  <span>Priority support</span>
                              </li>

                          </ul>
                          <button className="mt-8 w-full py-2 rounded-lg text-sm font-medium transition-colors relative z-10 shadow-[0_0_20px_rgba(255,255,255,0.1)] bg-white text-black hover:bg-stone-200">Start Free Trial</button>
                      </div>


                      <div className="glass-panel p-8 rounded-2xl flex flex-col">
                          <div className="mb-4">
                              <h3 className="text-lg font-medium text-white">Enterprise</h3>
                              <div className="mt-2 flex items-baseline gap-1">
                                  <span className="text-3xl font-medium text-white">Custom</span>
                              </div>
                              <p className="text-xs mt-2 text-stone-400">For large organizations.</p>
                          </div>
                          <div className="my-6 border-t border-white/5"></div>
                          <ul className="space-y-3 flex-1">
                              <li className="flex items-start gap-3 text-sm text-stone-300">
                                  <iconify-icon icon="lucide:check" className="text-stone-500 mt-0.5" width="16"></iconify-icon>
                                  <span>SSO &amp; SAML</span>
                              </li>
                              <li className="flex items-start gap-3 text-sm text-stone-300">
                                  <iconify-icon icon="lucide:check" className="text-stone-500 mt-0.5" width="16"></iconify-icon>
                                  <span>Dedicated success manager</span>
                              </li>
                              <li className="flex items-start gap-3 text-sm text-stone-300">
                                  <iconify-icon icon="lucide:check" className="text-stone-500 mt-0.5" width="16"></iconify-icon>
                                  <span>99.99% Uptime SLA</span>
                              </li>

                          </ul>
                          <button className="mt-8 w-full py-2 rounded-lg border text-sm font-medium transition-colors bg-white/5 border-white/10 text-white hover:bg-white/10">Contact Sales</button>
                      </div>
                  </div>
              </div>
          </section>


          <footer id="footer" className="border-t bg-[#050505] pt-16 pb-8 border-white/5">
              <div className="max-w-7xl mx-auto px-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
                      <div className="col-span-2 lg:col-span-2">
                          <a href="#" className="flex items-center gap-2 mb-4">
                              <div className="w-5 h-5 rounded flex items-center justify-center bg-white/10">
                                   <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                              </div>
                              <span className="text-sm font-semibold tracking-tight text-white">NEXUS</span>
                          </a>
                          <p className="text-sm text-stone-500 mb-6 max-w-xs">
                              Designing the future of workflow automation. Built by developers, for developers.
                          </p>
                          <div className="flex gap-4">
                              <a href="#" className="text-stone-500 transition-colors hover:text-white">
                                  <iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
                              </a>
                              <a href="#" className="text-stone-500 transition-colors hover:text-white">
                                  <iconify-icon icon="lucide:github" width="18"></iconify-icon>
                              </a>
                              <a href="#" className="text-stone-500 transition-colors hover:text-white">
                                  <iconify-icon icon="lucide:linkedin" width="18"></iconify-icon>
                              </a>
                          </div>
                      </div>

                      <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-white">Product</h4>
                          <ul className="space-y-2">
                              <li><a href="#" className="text-sm text-stone-500 transition-colors hover:text-white">Features</a></li>
                              <li><a href="#" className="text-sm text-stone-500 transition-colors hover:text-white">Integrations</a></li>
                              <li><a href="#" className="text-sm text-stone-500 transition-colors hover:text-white">Pricing</a></li>


                          </ul>
                      </div>

                      <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-white">Company</h4>
                          <ul className="space-y-2">
                              <li><a href="#" className="text-sm text-stone-500 transition-colors hover:text-white">About</a></li>
                              <li><a href="#" className="text-sm text-stone-500 transition-colors hover:text-white">Blog</a></li>
                              <li><a href="#" className="text-sm text-stone-500 transition-colors hover:text-white">Careers</a></li>


                          </ul>
                      </div>

                      <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-white">Resources</h4>
                          <ul className="space-y-2">
                              <li><a href="#" className="text-sm text-stone-500 transition-colors hover:text-white">Community</a></li>
                              <li><a href="#" className="text-sm text-stone-500 transition-colors hover:text-white">Contact</a></li>
                              <li><a href="#" className="text-sm text-stone-500 transition-colors hover:text-white">DPA</a></li>

                          </ul>
                      </div>

                       <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-white">Legal</h4>
                          <ul className="space-y-2">
                              <li><a href="#" className="text-sm text-stone-500 transition-colors hover:text-white">Privacy</a></li>
                              <li><a href="#" className="text-sm text-stone-500 transition-colors hover:text-white">Terms</a></li>
                              <li><a href="#" className="text-sm text-stone-500 transition-colors hover:text-white">Security</a></li>
                          </ul>
                      </div>
                  </div>

                  <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 border-white/5">
                      <p className="text-xs text-stone-600">© 2023 Nexus Inc. All rights reserved.</p>
                      <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                          <span className="text-xs text-stone-500">All systems operational</span>
                      </div>
                  </div>
              </div>
          </footer>
    </div>
  );
}
