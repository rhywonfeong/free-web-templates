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
    "content": "\n        lucide.createIcons();\n    "
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "scroll-smooth";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "antialiased opacity-0 animate-fade-in";
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
    <div className="aura-source-body antialiased opacity-0 animate-fade-in">
      <nav className="absolute top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-black/40 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between px-6 py-4 z-50">
              <div className="flex items-center gap-3">
                  <i data-lucide="triangle" className="text-white w-8 h-8 stroke-[1.5] rotate-180"></i>
              </div>
              <div className="hidden md:flex items-center gap-10 text-white text-base font-medium uppercase tracking-wider">
                  <a href="#" className="bg-zinc-800/80 px-6 py-2 rounded-lg text-white transition-colors hover:bg-zinc-700">ГЛАВНАЯ</a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">НАЧАТЬ ИГРАТЬ</a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">РЕЖИМЫ</a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">О СЕРВЕРЕ</a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">НОВОСТИ</a>
              </div>
              <div className="hidden md:flex items-center bg-white/5 rounded-lg px-4 py-2 border border-white/5">
                  <i data-lucide="search" className="text-gray-400 w-4 h-4 stroke-[1.5]"></i>
                  <input type="text" className="bg-transparent border-none outline-none text-white text-base ml-3 w-40 placeholder-gray-500 focus:ring-0" placeholder="Поиск..." />
              </div>

              <button className="md:hidden text-white"><i data-lucide="menu" className="w-6 h-6 stroke-[1.5]"></i></button>
          </nav>


          <header className="relative w-full h-screen min-h-[900px] overflow-hidden flex flex-col justify-end pb-24">

              <div className="absolute inset-0 z-0 bg-zinc-900 overflow-hidden">
                  <iframe className="video-background opacity-80" src="https://player.mux.com/01mywJGOo4l00f8YOasdq4nIXXI6vrrIIVTKtMN6PCeQM?autoplay=true&amp;loop=true&amp;muted=true&amp;controls=false" frameBorder="0" allow="autoplay; fullscreen">
                  </iframe>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#151515]"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
              </div>

              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col pt-40">
                  <div className="flex flex-col md:flex-row justify-between items-start w-full">

                      <div className="mt-24 md:mt-32 opacity-0 animate-fade-in delay-200">
                          <h2 className="text-white text-4xl md:text-5xl font-medium italic tracking-tight font-heading uppercase text-shadow-strong"></h2>
                      </div>


                      <div className="text-right flex flex-col items-end mt-12 md:mt-0 opacity-0 animate-fade-in delay-400">
                          <h1 className="text-white text-7xl md:text-9xl font-bold italic leading-[0.9] tracking-tight font-heading text-shadow-strong">ENDER<br />MOND</h1>
                          <p className="text-gray-200 text-2xl md:text-3xl mt-6 max-w-lg text-shadow-strong tracking-tight">Легендарный Minecraft-сервер. PVP, мини-игры и рейтинговые сезоны.</p>


                          <div className="mt-16 flex flex-col items-end gap-8">
                              <div className="text-center bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-white/5">
                                  <i data-lucide="swords" className="text-[#c28e3a] w-10 h-10 mx-auto stroke-[1.5]"></i>
                                  <p className="text-gray-300 text-xl font-medium mt-3 uppercase tracking-wider">IP:</p>
                                  <p className="text-white text-xl font-medium">play.endermond.net</p>
                              </div>
                              <div className="text-center bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-white/5">
                                  <div className="flex gap-1.5 justify-center mt-2 mb-4">
                                      <div className="w-5 h-3 bg-[#c28e3a] skew-x-[-20deg]"></div>
                                      <div className="w-5 h-3 bg-[#c28e3a] skew-x-[-20deg]"></div>
                                      <div className="w-5 h-3 bg-[#c28e3a] skew-x-[-20deg]"></div>
                                  </div>
                                  <p className="text-gray-300 text-xl font-medium uppercase tracking-wider">Онлайн:</p>
                                  <p className="text-white text-xl font-medium">24/7</p>
                              </div>
                          </div>
                      </div>
                  </div>


                  <div className="mx-auto mt-auto mb-12 flex justify-center">
                      <button className="clip-button relative px-16 py-5 bg-gradient-to-r from-[#e6aa45] to-[#c28e3a] text-black font-medium text-2xl uppercase tracking-widest transition-transform duration-300 hover:scale-105 hover:brightness-110 shadow-xl">
                          Начать играть
                      </button>
                  </div>
              </div>
          </header>


          <section className="py-32 relative bg-cover bg-center bg-fixed" style={{"backgroundImage": "linear-gradient(to bottom, rgba(21,21,21,0.85), rgba(21,21,21,0.9)), url('https://i.postimg.cc/Qtjkb1QH/bg24.png')", "backgroundColor": "#151515"}}>


              <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 flex justify-between items-center px-4 md:px-12">

                  <img src="https://i.postimg.cc/C1wHNkG1/blade2.png" alt="Левый клинок" className="w-48 md:w-80 object-contain opacity-70 animate-float-left drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />


                  <img src="https://i.postimg.cc/Ssm7rC6K/bladepng.png" alt="Правый клинок" className="w-48 md:w-80 object-contain opacity-70 animate-float-right drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
              </div>

              <div className="max-w-6xl mx-auto px-6 relative z-10 text-center py-24">
                  <h2 className="text-white text-4xl md:text-5xl font-medium tracking-tight font-heading uppercase mb-6">МИР ENDERMOND</h2>
                  <div className="w-12 h-1 bg-[#c28e3a] mx-auto mb-20"></div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 text-left text-gray-300 text-2xl font-monda leading-relaxed">
                      <p>Endermond объединяет уникальные режимы и честное PVP без читеров.<br /><br />Регулярные ивенты и рейтинговые сезоны всегда дают новую цель для победы.</p>
                      <p className="md:text-right">Активное комьюнити поможет найти союзников и достойных соперников. Во внутриигровом магазине доступна только косметика, которая не влияет на баланс.</p>
                  </div>
              </div>
          </section>


          <section className="bg-white py-32 text-center relative z-10">
              <h3 className="text-zinc-800 text-3xl font-medium tracking-tight font-heading italic mb-2">РЕЖИМЫ</h3>
              <h2 className="text-zinc-900 text-6xl md:text-7xl font-bold tracking-tight font-heading italic uppercase mb-6">ИГРЫ</h2>
              <div className="w-12 h-1 bg-[#c28e3a] mx-auto mb-20"></div>


              <div className="flex justify-center items-center gap-6 mb-28 overflow-x-auto px-6 py-4 max-w-6xl mx-auto scrollbar-hide">
                  <div className="w-20 h-20 rounded-full border border-gray-300 overflow-hidden shrink-0 filter grayscale hover:grayscale-0 transition-all cursor-pointer" title="Murder Mystery"><img src="https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&amp;fit=crop&amp;q=80&amp;w=200" alt="Murder Mystery" className="w-full h-full object-cover" /></div>
                  <div className="w-20 h-20 rounded-full border border-gray-300 overflow-hidden shrink-0 filter grayscale hover:grayscale-0 transition-all cursor-pointer" title="Prison"><img src="https://images.unsplash.com/photo-1598153346810-860daa814c4b?auto=format&amp;fit=crop&amp;q=80&amp;w=200" alt="Prison" className="w-full h-full object-cover" /></div>
                  <div className="w-20 h-20 rounded-full border border-gray-300 overflow-hidden shrink-0 filter grayscale hover:grayscale-0 transition-all cursor-pointer" title="Анархия"><img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&amp;fit=crop&amp;q=80&amp;w=200" alt="Анархия" className="w-full h-full object-cover" /></div>

                  <div className="w-28 h-28 rounded-full border-[3px] border-[#c28e3a] overflow-hidden shrink-0 shadow-2xl scale-110 z-10 relative bg-zinc-900">
                      <img src="https://i.postimg.cc/qv918NDq/hippo1.png" className="w-full h-full object-cover object-top" />
                      <div className="absolute inset-0 ring-4 ring-white/20 rounded-full pointer-events-none"></div>
                  </div>
                  <div className="w-20 h-20 rounded-full border border-gray-300 overflow-hidden shrink-0 filter grayscale hover:grayscale-0 transition-all cursor-pointer" title="BuildBattle"><img src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&amp;fit=crop&amp;q=80&amp;w=200" alt="BuildBattle" className="w-full h-full object-cover" /></div>
                  <div className="w-20 h-20 rounded-full border border-gray-300 overflow-hidden shrink-0 filter grayscale hover:grayscale-0 transition-all cursor-pointer" title="SkyBlock"><img src="https://i.postimg.cc/4xrWzY2N/monkey.png" alt="SkyBlock" className="w-full h-full object-cover" /></div>
                  <div className="w-20 h-20 rounded-full border border-gray-300 overflow-hidden shrink-0 filter grayscale hover:grayscale-0 transition-all cursor-pointer" title="KitPVP"><img src="https://i.postimg.cc/DwtxqSpw/panda.png" alt="KitPVP" className="w-full h-full object-cover" /></div>
              </div>


              <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 relative">


                  <div className="flex flex-col text-left gap-5 w-full max-w-md lg:-mr-12 z-0 opacity-90 transition-all hover:opacity-100 hover:-translate-y-2">
                      <div className="flex items-baseline gap-3 px-4">
                          <h4 className="text-zinc-800 text-3xl font-medium tracking-tight font-heading uppercase">BedWars</h4>
                          <span className="text-gray-500 text-lg">/ Командные битвы</span>
                      </div>
                      <p className="text-zinc-800 text-lg font-medium italic px-4">«Защищай свою кровать и уничтожай чужие»</p>
                      <div className="relative w-full h-80 overflow-hidden shadow-lg border border-gray-200 bg-zinc-100">
                          <img src="https://i.postimg.cc/DwtxqSpw/panda.png" alt="BedWars" className="w-full h-full object-cover" />
                      </div>
                      <div className="px-4">
                          <button className="clip-card-btn px-8 py-2.5 bg-[#c28e3a] text-zinc-900 text-base font-semibold uppercase tracking-wider hover:bg-[#d4a045] transition-colors">Играть</button>
                      </div>
                  </div>


                  <div className="flex flex-col text-left w-full max-w-xl z-20 shadow-2xl bg-zinc-900 text-white transform scale-100 lg:scale-105 transition-all hover:-translate-y-3 relative">

                      <div className="absolute inset-0 border border-white/10 pointer-events-none"></div>
                      <div className="w-full h-[400px] relative overflow-hidden bg-zinc-800">
                          <img src="https://i.postimg.cc/qv918NDq/hippo1.png" alt="SkyWars" className="w-full h-full object-cover object-top" />
                      </div>
                      <div className="p-8 flex flex-col gap-4 bg-zinc-900 relative">
                          <div className="flex items-baseline gap-3">
                              <h4 className="text-white text-4xl font-medium tracking-tight font-heading uppercase">SkyWars</h4>
                              <span className="text-gray-400 text-xl">/ Бои на островах</span>
                          </div>
                          <p className="text-white text-lg font-medium italic">«Выживи на летающем острове и стань последним»</p>
                          <div className="mt-4">
                              <button className="clip-card-btn px-10 py-3 bg-[#c28e3a] text-zinc-900 text-base font-semibold uppercase tracking-wider hover:bg-[#d4a045] transition-colors">Играть</button>
                          </div>
                      </div>
                  </div>


                  <div className="flex flex-col text-right items-end gap-5 w-full max-w-md lg:-ml-12 z-0 opacity-90 transition-all hover:opacity-100 hover:-translate-y-2">
                      <div className="flex items-baseline justify-end gap-3 w-full px-4">
                          <h4 className="text-zinc-800 text-3xl font-medium tracking-tight font-heading uppercase">Duels</h4>
                          <span className="text-gray-500 text-lg">/ Честное PVP</span>
                      </div>
                      <p className="text-zinc-800 text-lg font-medium italic px-4">«Арены 1 на 1 и рейтинговые сезоны»</p>
                      <div className="relative w-full h-80 overflow-hidden shadow-lg border border-gray-200 bg-zinc-100">
                          <img src="https://i.postimg.cc/4xrWzY2N/monkey.png" alt="Duels" className="w-full h-full object-cover" />
                      </div>
                      <div className="px-4">
                          <button className="clip-card-btn px-8 py-2.5 bg-[#c28e3a] text-zinc-900 text-base font-semibold uppercase tracking-wider hover:bg-[#d4a045] transition-colors">Играть</button>
                      </div>
                  </div>

              </div>
          </section>


          <section className="bg-gradient-to-b from-white to-gray-100 pt-32 pb-48 text-center border-t border-gray-200 relative z-10">
              <div className="max-w-4xl mx-auto px-6 relative z-10">
                  <h3 className="text-zinc-800 text-4xl font-medium tracking-tight font-heading mb-2">ENDERMOND</h3>
                  <h2 className="text-zinc-900 text-7xl md:text-8xl font-bold tracking-tight font-heading italic uppercase mb-8 text-shadow-sm">ЖДЁТ ТЕБЯ</h2>
                  <div className="w-12 h-1 bg-[#c28e3a] mx-auto mb-12"></div>

                  <p className="text-zinc-800 text-2xl md:text-3xl font-monda leading-relaxed mb-16 text-balance">Выбери режим, зови друзей и врывайся в бой. Играть просто: добавь сервер по IP play.endermond.net — и ты в игре.</p>

                  <button className="group inline-flex items-center gap-6 bg-zinc-900 text-white px-10 py-5 rounded transition-all hover:bg-black hover:scale-105 shadow-xl hover:shadow-2xl">
                      <i data-lucide="monitor" className="w-10 h-10 text-white group-hover:text-gray-300 stroke-[1.5]"></i>
                      <div className="text-left border-l border-white/20 pl-6">
                          <div className="text-base uppercase tracking-[0.2em] text-gray-400 font-medium mb-1">Скачать</div>
                          <div className="text-3xl font-bold tracking-wider font-heading">ЛАУНЧЕР</div>
                      </div>
                  </button>
              </div>
          </section>


          <footer className="relative bg-black pt-48 pb-12 flex flex-col items-center border-t border-white/5">


              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[40%] md:-translate-y-[50%] w-full max-w-6xl z-20 pointer-events-none flex justify-center px-4">
                  <img src="https://i.postimg.cc/9MzzCfVb/footer.png" alt="Персонажи Endermond" className="w-full h-auto max-h-[600px] object-contain drop-shadow-2xl" />
              </div>

              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-16 md:mt-24">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-lg text-gray-400 font-monda border-t border-white/10 pt-16 bg-gradient-to-t from-black via-black/80 to-transparent p-8 rounded-t-3xl backdrop-blur-sm">


                      <div className="md:col-span-4 flex flex-col gap-6">
                          <div>
                              <p className="text-base uppercase tracking-widest text-gray-500 mb-2 font-medium">© 2026</p>
                              <div className="flex items-center gap-3 text-white font-heading text-2xl font-semibold italic tracking-tight">
                                  <i data-lucide="swords" className="w-8 h-8 text-white stroke-[1.5]"></i> Endermond
                              </div>
                          </div>
                          <div className="flex gap-5 mt-2">
                              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full"><i data-lucide="youtube" className="w-5 h-5 stroke-[1.5]"></i></a>
                              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full"><i data-lucide="twitter" className="w-5 h-5 stroke-[1.5]"></i></a>
                              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full"><i data-lucide="instagram" className="w-5 h-5 stroke-[1.5]"></i></a>
                              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full"><i data-lucide="twitch" className="w-5 h-5 stroke-[1.5]"></i></a>
                          </div>
                          <p className="text-base text-gray-500 mt-6 font-medium">Endermond не связан с Mojang Studios и Microsoft</p>
                      </div>


                      <div className="md:col-span-3 flex flex-col gap-4">
                          <h5 className="text-white text-lg font-medium uppercase tracking-widest mb-2 tracking-tight">ENDERMOND</h5>
                          <a href="#" className="hover:text-[#c28e3a] transition-colors w-max">Вакансии</a>
                          <a href="#" className="hover:text-[#c28e3a] transition-colors w-max">Правовая информация</a>
                          <a href="#" className="hover:text-[#c28e3a] transition-colors w-max">Политика конфиденциальности</a>
                      </div>


                      <div className="md:col-span-3 flex flex-col gap-4">
                          <h5 className="text-white text-lg font-medium uppercase tracking-widest mb-2 tracking-tight">БУДЬ НА СВЯЗИ</h5>
                          <a href="#" className="hover:text-[#c28e3a] transition-colors w-max">Новости</a>
                          <a href="#" className="hover:text-[#c28e3a] transition-colors w-max">Рассылка</a>
                      </div>


                      <div className="md:col-span-2 flex justify-start md:justify-end items-start">
                          <button className="flex items-center gap-2 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-lg bg-white/5">
                              <i data-lucide="globe" className="w-4 h-4 stroke-[1.5]"></i> 
                              <span className="font-medium uppercase text-base">RU</span> 
                              <i data-lucide="chevron-down" className="w-4 h-4 stroke-[1.5]"></i>
                          </button>
                      </div>
                  </div>
              </div>
          </footer>
    </div>
  );
}
