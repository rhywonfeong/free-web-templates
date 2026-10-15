import { useEffect, useLayoutEffect, useRef, useState } from "react";

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
    "content": "\n        window.currentGallery = [];\n        window.currentIndex = 0;\n        window.openLightbox = function(imgSrc, galleryId) {\n          const getFullSrc = (src) => src.replace('_320w.jpg', '_1600w.jpg').replace('_800w.jpg', '_1600w.jpg');\n          const images = Array.from(document.querySelectorAll('#' + galleryId + ' img')).map(img => getFullSrc(img.src));\n          window.currentGallery = [...new Set(images)];\n          window.currentIndex = window.currentGallery.indexOf(getFullSrc(imgSrc));\n          if(window.currentIndex === -1) window.currentIndex = 0;\n          document.getElementById('lightbox-img').src = window.currentGallery[window.currentIndex];\n          document.getElementById('lightbox').style.display = 'flex';\n          document.getElementById('lightbox').classList.remove('hidden');\n          document.body.style.overflow = 'hidden';\n        };\n        window.closeLightbox = function(e) {\n          if(e) e.stopPropagation();\n          document.getElementById('lightbox').style.display = 'none';\n          document.getElementById('lightbox').classList.add('hidden');\n          document.body.style.overflow = '';\n        };\n        window.prevLightboxImage = function(e) {\n          if(e) e.stopPropagation();\n          window.currentIndex = (window.currentIndex > 0) ? window.currentIndex - 1 : window.currentGallery.length - 1;\n          document.getElementById('lightbox-img').src = window.currentGallery[window.currentIndex];\n        };\n        window.nextLightboxImage = function(e) {\n          if(e) e.stopPropagation();\n          window.currentIndex = (window.currentIndex < window.currentGallery.length - 1) ? window.currentIndex + 1 : 0;\n          document.getElementById('lightbox-img').src = window.currentGallery[window.currentIndex];\n        };\n        document.getElementById('lightbox').addEventListener('click', function(e) {\n          if(e.target.id === 'lightbox') window.closeLightbox();\n        });\n        document.addEventListener('keydown', function(e) {\n          if (document.getElementById('lightbox').style.display === 'flex') {\n            if (e.key === 'ArrowLeft') window.prevLightboxImage();\n            if (e.key === 'ArrowRight') window.nextLightboxImage();\n            if (e.key === 'Escape') window.closeLightbox();\n          }\n        });\n      "
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "scroll-smooth";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "bg-[#F6F3EC] text-[#6F7C73] antialiased selection:bg-[#D9CDBB] selection:text-[#2F3A34]";
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

function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    elements.forEach((element) => {
      element.style.setProperty("--reveal-delay", `${element.dataset.revealDelay || 0}ms`);
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-revealed"));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15 });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

const standards = [
  { title: "Klimatizace a rekuperace", description: "Příjemné klima v létě a čerstvý vzduch po celý rok díky lokální rekuperaci v každé místnosti.", image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6e0170-6a3f-446f-bbb5-5107f7c3dfe8_1600w.jpg" },
  { title: "Krbová vložka", description: "Krbová vložka dodá interiéru příjemnou atmosféru a zároveň poslouží jako další zdroj tepla během chladnějších dnů.", image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dda13c7b-4c90-44cb-922f-dda87473ddee_1600w.jpg" },
  { title: "Podlahové vytápění", description: "Rovnoměrné teplo v celém domě bez radiátorů, které by zabíraly místo nebo narušovaly čistý vzhled interiéru.", image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1d1ddfe-dc07-4907-b7cb-4901664ab842_1600w.jpg" },
  { title: "Koupelna a sanita", description: "Koupelna je součástí dokončeného standardu včetně obkladů, dlažby, vany, umyvadla a sanitárního vybavení.", image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d3c81928-89a9-43c1-8084-cb6ff801451a_1600w.jpg" },
  { title: "Design koupelen", description: "Ukázka dalšího možného provedení koupelny z dokončených domů, které ukazuje moderní materiály a čisté sladění detailů.", image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/709ac336-9da3-43f9-88ac-62e4fe4bd86c_1600w.jpg" },
  { title: "Příprava na předokenní žaluzie", description: "Domy jsou připravené na instalaci předokenních žaluzií, které pomohou s regulací světla, soukromím i tepelným komfortem v létě.", image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/01a7abf4-80b0-419e-a0b9-01f774a148cc_1600w.jpg" },
  { title: "Krytá terasa", description: "Krytá terasa plynule navazuje na obytnou část domu a vytváří příjemné místo pro ranní kávu, rodinné posezení i klidné večery venku.", image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b850595-f5d9-430a-aede-614b4b883386_1600w.jpg" },
  { title: "Zámková dlažba a parkování", description: "Hotové parkování pro dva vozy a zpevněné plochy kolem domu šetří čas, peníze i starosti po nastěhování.", image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2727bb50-95e7-4e85-a9a0-3f702a3178e9_1600w.jpg" },
  { title: "Voda a elektřina na terase", description: "Praktické napojení vody v nezámrzném systému i elektřiny pro pohodlné využívání terasy a zahrady.", image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/63f9a71f-ed2d-4a54-8c2d-877d928ad9eb_1600w.jpg" },
  { title: "Dřevěné lamely a interiérové detaily", description: "Teplé materiály a promyšlené detaily dodávají domu útulnější charakter.", image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a7dbe7f0-e6c0-4af1-a187-55431ff90d26_1600w.jpg" },
];

// Replace these image URLs, titles, or dates as construction progresses.
const constructionUpdates = [
  { title: "Příprava nové etapy", date: "Červenec 2026", image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14d419d4-d201-442e-9773-3d475a4ed127_1600w.jpg" },
  { title: "První práce na pozemcích", date: "Červenec 2026", image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9109268d-0b24-4e09-acd6-e7ad3f5e6978_1600w.jpg" },
  { title: "Výstavba dvojdomů", date: "Červenec 2026", image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5143a0f2-5f28-4df9-8b55-1a1515db03dc_1600w.jpg" },
  { title: "Pohled na staveniště", date: "Červenec 2026", image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/49f625ad-32dd-4478-a2a6-3863b9a95720_1600w.jpg" },
  { title: "Aktuální stav projektu", date: "Červenec 2026", image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79dd0290-2be2-463c-ac7b-7bfaa0a67e8b_1600w.jpg" },
];

const instagramReels = [
  "https://www.instagram.com/reel/DbBP3DzktxG/",
  "https://www.instagram.com/reel/DbS3a6HuBAp/",
  "https://www.instagram.com/reel/DbdAH1QDfCc/",
  "https://www.instagram.com/reel/DbtM8yzDMq3/",
  "https://www.instagram.com/reel/Db-sGp4AnU7/",
];

function StandardsSection({ standardsViewportRef, standardSlide, standardStep, setStandardSlide, moveStandardSlide, setSelectedStandard, selectedStandard }) {
  return (
    <>
      <section id="standardy" className="standards-section py-24 overflow-hidden bg-[#2F3A34]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12 md:mb-14">
            <p data-reveal className="font-heading text-xs font-semibold tracking-[0.2em] uppercase text-[#D9CDBB] mb-4">Standard provedení</p>
            <h2 data-reveal data-reveal-delay="100" className="font-heading font-semibold text-[#F6F3EC] text-3xl md:text-4xl tracking-tight mb-5">Ukázka standardů</h2>
            <p data-reveal data-reveal-delay="200" className="text-base leading-relaxed text-[#F6F3EC]/75">Domy jsou předávány s dokončenými podlahami, koupelnami, sanitou, technologiemi, terasou, zámkovou dlažbou a upraveným terénem. Kuchyňská linka a oplocení nejsou součástí dodávky.</p>
          </div>
          <div data-reveal data-reveal-delay="280" className="standards-carousel" aria-roledescription="carousel" aria-label="Ukázka standardů domů">
            <div className="standards-viewport" ref={standardsViewportRef}>
              <div className="standards-track" style={{ transform: `translateX(-${standardSlide * standardStep}px)` }}>
                {[...standards, ...standards.slice(0, 2)].map((standard, index) => (
                  <article className="standard-card" key={`${standard.title}-${index}`}>
                    <button className="standard-image-button" onClick={() => setSelectedStandard(standard)} aria-label={`Zvětšit fotografii: ${standard.title}`}>
                      <img src={standard.image} alt={standard.title} />
                      <span className="standard-expand"><iconify-icon icon="solar:magnifer-linear" width="19" height="19"></iconify-icon></span>
                    </button>
                    <div className="p-6 md:p-7">
                      <span className="text-xs tracking-[0.18em] uppercase text-[#B77A5E] font-semibold">{String((index % standards.length) + 1).padStart(2, "0")}</span>
                      <h3 className="font-heading font-semibold text-[#2F3A34] text-xl tracking-tight mt-3 mb-3">{standard.title}</h3>
                      <p className="text-sm leading-relaxed text-[#6F7C73]">{standard.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between gap-6 mt-8">
              <div className="standards-dots" aria-label="Pozice v carouselu">
                {standards.map((standard, index) => <button key={standard.title} onClick={() => setStandardSlide(index)} className={index === standardSlide ? "is-active" : ""} aria-label={`Zobrazit ${standard.title}`} aria-current={index === standardSlide ? "true" : undefined} />)}
              </div>
              <div className="flex gap-3 shrink-0">
                <button onClick={() => moveStandardSlide(-1)} className="standards-arrow" aria-label="Předchozí standard"><iconify-icon icon="solar:arrow-left-linear" width="22" height="22"></iconify-icon></button>
                <button onClick={() => moveStandardSlide(1)} className="standards-arrow" aria-label="Další standard"><iconify-icon icon="solar:arrow-right-linear" width="22" height="22"></iconify-icon></button>
              </div>
            </div>
          </div>
          <p data-reveal data-reveal-delay="360" className="mt-10 text-sm leading-relaxed text-[#F6F3EC]/55 max-w-3xl">Fotografie ukazují příklady provedení z dokončených domů předchozí etapy projektu Domy Hevlín. Konkrétní provedení se může lišit podle vybrané jednotky.</p>
        </div>
      </section>
      {selectedStandard && (
        <div className="standards-lightbox" role="dialog" aria-modal="true" aria-label={`Náhled: ${selectedStandard.title}`} onClick={() => setSelectedStandard(null)}>
          <button className="standards-lightbox-close" onClick={() => setSelectedStandard(null)} aria-label="Zavřít náhled"><iconify-icon icon="solar:close-circle-linear" width="30" height="30"></iconify-icon></button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={selectedStandard.image} alt={selectedStandard.title} />
            <figcaption>{selectedStandard.title}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [standardSlide, setStandardSlide] = useState(0);
  const [selectedStandard, setSelectedStandard] = useState(null);
  const [selectedConstructionUpdate, setSelectedConstructionUpdate] = useState(null);
  const [standardStep, setStandardStep] = useState(0);
  const standardsViewportRef = useRef(null);
  const locationCarouselRef = useRef(null);
  useScrollReveal();
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

  useEffect(() => {
    const processEmbeds = () => window.instgrm?.Embeds?.process();
    const existingScript = document.getElementById("instagram-embed-script");

    if (existingScript) {
      existingScript.addEventListener("load", processEmbeds, { once: true });
      processEmbeds();
      return () => existingScript.removeEventListener("load", processEmbeds);
    }

    const script = document.createElement("script");
    script.id = "instagram-embed-script";
    script.async = true;
    script.src = "https://www.instagram.com/embed.js";
    script.addEventListener("load", processEmbeds);
    document.body.appendChild(script);

    return () => script.removeEventListener("load", processEmbeds);
  }, []);

  useEffect(() => {
    if (!selectedStandard && !selectedConstructionUpdate) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedStandard(null);
        setSelectedConstructionUpdate(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedStandard, selectedConstructionUpdate]);

  useEffect(() => {
    const updateStandardStep = () => {
      const viewportWidth = standardsViewportRef.current?.clientWidth ?? 0;
      const visibleCards = window.innerWidth < 768 ? 1 : 3;
      setStandardStep((viewportWidth - 24 * (visibleCards - 1)) / visibleCards + 24);
    };
    updateStandardStep();
    window.addEventListener("resize", updateStandardStep);
    return () => window.removeEventListener("resize", updateStandardStep);
  }, []);

  const moveStandardSlide = (direction) => {
    setStandardSlide((slide) => (slide + direction + standards.length) % standards.length);
  };

  return (
    <div className="aura-source-body bg-[#F6F3EC] text-[#6F7C73] antialiased selection:bg-[#D9CDBB] selection:text-[#2F3A34]">
      <nav className="sticky top-0 z-50 w-full bg-[#F6F3EC]/90 backdrop-blur-md border-b border-[#D9CDBB]/50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

              <a href="/" className="flex flex-col items-center justify-center shrink-0 group">
                <span className="text-xl md:text-2xl font-normal tracking-[0.2em] text-[#1a2b22] pl-[0.2em]">
                  DOMY HEVLÍN
                </span>
                <div className="w-10 h-[2px] bg-[#d2b48c] mt-1 mb-1.5 transition-all duration-300 group-hover:w-16"></div>
                <span className="text-[10px] md:text-xs font-light tracking-[0.2em] text-[#d2b48c] pl-[0.2em]">
                  Váš moderní domov
                </span>
              </a>


              <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2F3A34]">
                <a href="#projekt" className="hover:text-[#C46B4A] transition-colors">
                  Projekt
                </a>
                <a href="#lokalita" className="hover:text-[#C46B4A] transition-colors">
                  Lokalita
                </a>
                <a href="#nabidka" className="hover:text-[#C46B4A] transition-colors">
                  Domy
                </a>
                <a href="#standardy" className="hover:text-[#C46B4A] transition-colors">
                  Standardy
                </a>
                <a href="#kontakt" className="hover:text-[#C46B4A] transition-colors">
                  Kontakt
                </a>
              </div>


              <button className="md:hidden text-[#2F3A34]" id="mobile-menu-btn" onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)} aria-label={isMobileMenuOpen ? "Zavřít navigaci" : "Otevřít navigaci"} aria-expanded={isMobileMenuOpen}>
                <iconify-icon icon={isMobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} width="24" height="24"></iconify-icon>
              </button>
            </div>
            <div id="mobile-menu" className={`${isMobileMenuOpen ? "flex" : "hidden"} md:hidden absolute top-20 left-0 w-full bg-[#F6F3EC] rounded-b-2xl shadow-xl flex-col divide-y divide-[#D9CDBB]/40 px-6 pb-6 pt-2 text-[#2F3A34] text-lg font-medium z-50 border-b border-[#D9CDBB]/50`}>
              <a href="#projekt" onClick={() => setIsMobileMenuOpen(false)} className="mobile-link flex justify-center w-full py-4 hover:text-[#C46B4A] transition-colors">
                Projekt
              </a>
              <a href="#lokalita" onClick={() => setIsMobileMenuOpen(false)} className="mobile-link flex justify-center w-full py-4 hover:text-[#C46B4A] transition-colors">
                Lokalita
              </a>
              <a href="#nabidka" onClick={() => setIsMobileMenuOpen(false)} className="mobile-link flex justify-center w-full py-4 hover:text-[#C46B4A] transition-colors">
                Domy
              </a>
              <a href="#standardy" onClick={() => setIsMobileMenuOpen(false)} className="mobile-link flex justify-center w-full py-4 hover:text-[#C46B4A] transition-colors">
                Standardy
              </a>
              <a href="#kontakt" onClick={() => setIsMobileMenuOpen(false)} className="mobile-link flex justify-center w-full py-4 hover:text-[#C46B4A] transition-colors">
                Kontakt
              </a>
            </div>

          </nav>


          <section className="relative isolate pt-24 pb-32 md:pt-36 md:pb-48 px-6 overflow-hidden flex flex-col items-center text-center bg-[#2F3A34]">

            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c34af3a7-2b17-4882-9266-c4f8142dece6_1600w.jpg" alt="Moderní obývací pokoj" className="absolute inset-0 z-0 w-full h-full object-cover" />
            <div className="absolute inset-0 z-10 bg-[#2F3A34]/70"></div>

            <div className="relative z-20 max-w-4xl mx-auto">
              <h1 className="font-heading font-semibold text-[#F6F3EC] text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6">
                Moderní domy pro klidný rodinný život
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-[#F6F3EC]/90">
                Dopřejte si prostorné nízkoenergetické bydlení s vlastní zahradou.
                Nová etapa úspěšného projektu, pouhých 5 minut od rakouských hranic a
                40 minut od Brna.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#nabidka" className="font-heading font-medium bg-[#C46B4A] text-[#F6F3EC] w-full sm:w-auto px-8 py-4 rounded-lg hover:bg-[#a85b3f] transition-all duration-300 shadow-sm text-sm">
                  Nabídka domů
                </a>
                <a href="#projekt" className="font-heading font-medium bg-transparent border border-[#F6F3EC] text-[#F6F3EC] w-full sm:w-auto px-8 py-4 rounded-lg hover:bg-[#F6F3EC] hover:text-[#2F3A34] transition-all duration-300 text-sm">
                  Zjistit více o projektu
                </a>
              </div>
            </div>
          </section>


          <section className="py-24 px-6 bg-[#F6F3EC]" id="projekt">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div data-reveal className="bg-[#FFFFFF] border border-[#D9CDBB] p-8 rounded-2xl transition-transform hover:-translate-y-1 duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#F6F3EC] flex items-center justify-center mb-6">
                    <iconify-icon icon="solar:smart-home-linear" width="24" height="24" style={{"color": "#2F3A34"}}></iconify-icon>
                  </div>
                  <h3 className="font-heading font-semibold text-[#2F3A34] text-xl tracking-tight mb-3">
                    Nízkoenergetický provoz
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6F7C73]">
                    Zateplení, trojskla, podlahové vytápění a rekuperace snižují
                    spotřebu energie, zatímco klimatizace a krbová vložka zajišťují
                    komfort po celý rok.
                  </p>
                </div>


                <div data-reveal data-reveal-delay="80" className="bg-[#FFFFFF] border border-[#D9CDBB] p-8 rounded-2xl transition-transform hover:-translate-y-1 duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#F6F3EC] flex items-center justify-center mb-6">
                    <iconify-icon icon="solar:leaf-linear" width="24" height="24" style={{"color": "#2F3A34"}}></iconify-icon>
                  </div>
                  <h3 className="font-heading font-semibold text-[#2F3A34] text-xl tracking-tight mb-3">
                    Vlastní zahrada
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6F7C73]">
                    Ke každému domu patří pozemek o velikosti přibližně 460 až 640 m²
                    s hotovou krytou terasou. Ideální pro letní grilování, odpočinek i
                    bezpečné hraní dětí.
                  </p>
                </div>


                <div data-reveal data-reveal-delay="160" className="bg-[#FFFFFF] border border-[#D9CDBB] p-8 rounded-2xl transition-transform hover:-translate-y-1 duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#F6F3EC] flex items-center justify-center mb-6">
                    <iconify-icon icon="solar:users-group-two-rounded-linear" width="24" height="24" style={{"color": "#2F3A34"}}></iconify-icon>
                  </div>
                  <h3 className="font-heading font-semibold text-[#2F3A34] text-xl tracking-tight mb-3">
                    Naprosté soukromí
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6F7C73]">
                    Díky špičkové akustické izolaci středových stěn dvojdomu o
                    sousedech nebudete vůbec vědět. Bydlíte se stejným klidem jako v
                    samostatném domě.
                  </p>
                </div>


                <div data-reveal data-reveal-delay="240" className="bg-[#FFFFFF] border border-[#D9CDBB] p-8 rounded-2xl transition-transform hover:-translate-y-1 duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#F6F3EC] flex items-center justify-center mb-6">
                    <iconify-icon icon="solar:map-point-linear" width="24" height="24" style={{"color": "#2F3A34"}}></iconify-icon>
                  </div>
                  <h3 className="font-heading font-semibold text-[#2F3A34] text-xl tracking-tight mb-3">
                    Vše na dosah ruky
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6F7C73]">
                    Přímo v obci najdete školku, školu, obchody i lékaře. K rakouským
                    hranicím dojedete za 5 minut a do Brna jen za 40 minut.
                  </p>
                </div>
              </div>
            </div>
          </section>


          <section className="py-24 px-6" id="nabidka">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16" data-aura-onclick="if(event.target.tagName==='IMG') openLightbox(event.target.src, 'nabidka')">
                <img data-reveal src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/905021ca-39da-4394-8fdc-2462c2fec947_800w.jpg" alt="Ukázka exteriéru" className="w-full h-28 md:h-36 object-cover rounded-xl border border-[#D9CDBB] shadow-sm" />
                <img data-reveal data-reveal-delay="80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8fa75bc4-780b-4220-91f3-4970bce2dbbd_800w.jpg" alt="Ukázka moderního obývacího pokoje" className="w-full h-28 md:h-36 object-cover rounded-xl border border-[#D9CDBB] shadow-sm" />
                <img data-reveal data-reveal-delay="160" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd670cd7-c417-4552-a0ca-51c6441646d8_800w.jpg" alt="Ukázka interiéru" className="w-full h-28 md:h-36 object-cover rounded-xl border border-[#D9CDBB] shadow-sm" />
                <img data-reveal data-reveal-delay="240" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/18097469-d457-4af4-8a33-7cbee80f9c3b_800w.jpg" alt="Ukázka terasy" className="w-full h-28 md:h-36 object-cover rounded-xl border border-[#D9CDBB] shadow-sm" />
              </div>
              <div data-reveal className="text-center mb-16">
                <h2 className="font-heading font-semibold text-[#2F3A34] text-3xl md:text-4xl tracking-tight mb-6">
                  Nová etapa úspěšného projektu
                </h2>
                <p className="text-base max-w-3xl mx-auto leading-relaxed text-[#6F7C73]">
                  Navazujeme na předchozí etapu, ve které již spokojeně bydlí 8 rodin.
                  V aktuální fázi pro vás stavíme dalších 10 jednotek. Můžete si
                  vybrat z kompletně dokončených domů k okamžitému nastěhování, nebo
                  si zarezervovat dům ve výstavbě a interiéry si doladit podle svého
                  vkusu.
                </p>
              </div>

              <div data-reveal data-reveal-delay="100" className="overflow-hidden rounded-2xl mb-12 border border-[#D9CDBB] shadow-sm">
                <video
                  src="https://res.cloudinary.com/m3kkdvom/video/upload/v1787143364/dron_pozemky_video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="block w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div data-reveal className="bg-[#FFFFFF] border border-[#D9CDBB] rounded-2xl p-8 md:p-10 flex flex-col h-full">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c34af3a7-2b17-4882-9266-c4f8142dece6_1600w.jpg" alt="Ukázka 3+kk" className="w-full h-48 md:h-64 object-cover rounded-xl mb-6 border border-[#D9CDBB] shadow-sm" data-aura-onclick="openLightbox(this.src, 'nabidka')" />
                  <div className="mb-6 flex justify-between items-start">
                    <h3 className="font-heading font-semibold text-[#2F3A34] text-3xl tracking-tight">
                      Domy 3+kk
                    </h3>
                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#D9CDBB]/30 text-[#2F3A34] text-xs font-semibold tracking-wide">
                      81 m²
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#6F7C73] mb-10 flex-grow">
                    Velkorysý a prosvětlený prostor s krytou terasou, ideální pro páry
                    nebo menší rodiny, které hledají pohodlí bez zbytečné údržby.
                  </p>
                  <a href="#detail-3kk" className="font-heading font-medium w-full text-center bg-transparent border border-[#2F3A34] text-[#2F3A34] py-3.5 rounded-lg hover:bg-[#2F3A34] hover:text-[#F6F3EC] transition-colors text-sm">
                    Prohlédnout
                  </a>
                </div>


                <div data-reveal data-reveal-delay="80" className="bg-[#FFFFFF] border border-[#D9CDBB] rounded-2xl p-8 md:p-10 flex flex-col h-full">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d32a93ac-88b9-4504-a03a-8f33ddd4e460_1600w.jpg" alt="Ukázka 4+kk" className="w-full h-48 md:h-64 object-cover rounded-xl mb-6 border border-[#D9CDBB] shadow-sm" data-aura-onclick="openLightbox(this.src, 'nabidka')" />
                  <div className="mb-6 flex justify-between items-start">
                    <h3 className="font-heading font-semibold text-[#2F3A34] text-3xl tracking-tight">
                      Domy 4+kk
                    </h3>
                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#D9CDBB]/30 text-[#2F3A34] text-xs font-semibold tracking-wide">
                      113 m²
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#6F7C73] mb-10 flex-grow">
                    Nadstandardní prostor pro velkou rodinu. Velkorysá denní část, tři
                    samostatné ložnice, rodinná koupelna a dostatek úložného místa.
                  </p>
                  <a href="#detail-4kk" className="font-heading font-medium w-full text-center bg-transparent border border-[#2F3A34] text-[#2F3A34] py-3.5 rounded-lg hover:bg-[#2F3A34] hover:text-[#F6F3EC] transition-colors text-sm">
                    Prohlédnout
                  </a>
                </div>
              </div>
            </div>
          </section>
          <StandardsSection
            standardsViewportRef={standardsViewportRef}
            standardSlide={standardSlide}
            standardStep={standardStep}
            setStandardSlide={setStandardSlide}
            moveStandardSlide={moveStandardSlide}
            setSelectedStandard={setSelectedStandard}
            selectedStandard={selectedStandard}
          />

          <section className="py-24 px-6 bg-[#F6F3EC] border-b border-[#D9CDBB]/50" id="kuchyne">
            <div className="max-w-6xl mx-auto">
              <div data-reveal className="max-w-3xl mb-12 md:mb-14">
                <p className="font-heading text-xs font-semibold tracking-[0.2em] uppercase text-[#B77A5E] mb-4">Interiér podle vás</p>
                <h2 className="font-heading font-semibold text-[#2F3A34] text-3xl md:text-4xl tracking-tight mb-5">Možnost kuchyně na míru</h2>
                <p className="text-base leading-relaxed text-[#6F7C73]">Dům se předává bez kuchyňské linky, abyste si ji mohli navrhnout podle vlastního stylu. V případě zájmu je možné zajistit kuchyň na míru od truhlářství Rehberger.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <figure data-reveal className="overflow-hidden rounded-2xl border border-[#D9CDBB] bg-[#FFFFFF] shadow-sm">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8988f777-9faa-476c-9c3a-d6bca9574f96_1600w.jpg" alt="Ukázkové provedení kuchyně s ostrůvkem" className="block w-full aspect-[4/3] object-cover" />
                </figure>
                <figure data-reveal data-reveal-delay="80" className="overflow-hidden rounded-2xl border border-[#D9CDBB] bg-[#FFFFFF] shadow-sm">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5c5146b6-d9f5-4d32-9d81-dcccc78d509a_1600w.jpg" alt="Ukázkové provedení kuchyně v teplých tónech" className="block w-full aspect-[4/3] object-cover" />
                </figure>
              </div>

              <p data-reveal data-reveal-delay="160" className="mt-6 text-sm leading-relaxed text-[#6F7C73]">Ukázkové provedení kuchyně. Kuchyňská linka není součástí základního standardu domu.</p>
            </div>
          </section>

          <section className="py-24 px-6 bg-[#FFFFFF] border-t border-[#D9CDBB]/50 scroll-mt-20" id="detail-3kk">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-x-12 gap-y-12 items-start">
                <div data-reveal className="w-full lg:w-1/2 flex flex-col gap-4">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ad44e09d-60d5-4dbf-8904-56d782120906_1600w.jpg" alt="Exteriér 3+kk" className="w-full h-64 md:h-[400px] object-cover rounded-2xl border border-[#D9CDBB] shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" data-aura-onclick="openLightbox(this.src, 'detail-3kk')" />
                  <div className="grid grid-cols-4 gap-2" data-aura-onclick="if(event.target.tagName==='IMG') openLightbox(event.target.src, 'detail-3kk')">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/817f8e2a-10fd-479f-b0b8-77ad710fe9c5_320w.jpg" alt="Exteriér 3+kk 1" className="w-full h-16 sm:h-24 object-cover rounded-xl border border-[#D9CDBB] shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a5c0678-cb71-4113-8e04-3ba2ba265496_800w.jpg" alt="Interiér 3+kk 1" className="w-full h-16 sm:h-24 object-cover rounded-xl border border-[#D9CDBB] shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46bdf3ce-55ff-4daf-a4c5-da991b28e8ac_320w.jpg" alt="Interiér 3+kk 2" className="w-full h-16 sm:h-24 object-cover rounded-xl border border-[#D9CDBB] shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cdb36528-c0c4-4634-b6e2-6befaeff1b09_320w.jpg" alt="Interiér 3+kk 3" className="w-full h-16 sm:h-24 object-cover rounded-xl border border-[#D9CDBB] shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8dbe800f-baad-428c-ba0a-68d25cd4b162_320w.jpg" alt="Interiér 3+kk 4" className="w-full h-16 sm:h-24 object-cover rounded-xl border border-[#D9CDBB] shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5a5056fc-ee29-4b81-8e13-620e99d7a0bb_320w.jpg" alt="Interiér 3+kk 5" className="w-full h-16 sm:h-24 object-cover rounded-xl border border-[#D9CDBB] shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/abe2e132-8444-4796-aa43-d70f413b0169_320w.jpg" alt="Interiér 3+kk 6" className="w-full h-16 sm:h-24 object-cover rounded-xl border border-[#D9CDBB] shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e466cf40-add7-4c47-8b70-59e8950bb13a_320w.jpg" alt="Exteriér 3+kk 2" className="w-full h-16 sm:h-24 object-cover rounded-xl border border-[#D9CDBB] shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c8a17c6f-4357-4589-bbb8-102f5e3ef747_320w.jpg" alt="Interiér 3+kk 7" className="w-full h-16 sm:h-24 object-cover rounded-xl border border-[#D9CDBB] shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f23a7d92-2d22-48f3-957b-2097a3c8c3b4_320w.jpg" alt="Interiér 3+kk 8" className="w-full h-16 sm:h-24 object-cover rounded-xl border border-[#D9CDBB] shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fb1dea44-0426-4b6e-80de-891a7cce3a47_320w.jpg" alt="Interiér 3+kk 9" className="w-full h-16 sm:h-24 object-cover rounded-xl border border-[#D9CDBB] shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9e300294-762c-4597-8567-f05580ce24dd_320w.jpg" alt="Interiér 3+kk 10" className="w-full h-16 sm:h-24 object-cover rounded-xl border border-[#D9CDBB] shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
                  </div>
                </div>
                <div data-reveal data-reveal-delay="100" className="w-full lg:w-1/2 flex flex-col">
                  <h2 className="font-heading font-semibold text-[#2F3A34] text-3xl md:text-4xl tracking-tight mb-4">
                    Detail domu 3+kk
                  </h2>
                   <div className="flex flex-wrap gap-2 mb-6">
                     <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#D9CDBB]/30 text-[#2F3A34] text-xs font-semibold tracking-wide">
                       81 m²
                    </span>
                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#D9CDBB]/30 text-[#2F3A34] text-xs font-semibold tracking-wide">
                      Zahrada cca 460 m²
                    </span>
                     <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#D9CDBB]/30 text-[#2F3A34] text-xs font-semibold tracking-wide">
                        Krytá terasa
                      </span>
                     <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#C46B4A]/10 text-[#A85B3F] text-xs font-semibold tracking-wide">
                        6 390 000 Kč
                     </span>
                    </div>
                    <div className="mb-14 flex flex-col gap-6">
                    <p className="text-base leading-relaxed text-[#6F7C73]">
                      Moderní nízkoenergetický dům 3+kk s užitnou plochou 81 m²,
                      vlastní zahradou o velikosti cca 460 m² a krytou terasou 7,5 m².
                      Dispozice nabízí prosvětlený obývací pokoj s přípravou na
                      kuchyňský kout, dvě samostatné ložnice, prostornou koupelnu s
                      vanou i sprchovým koutem a technickou místnost.
                    </p>
                    <p className="text-base leading-relaxed text-[#6F7C73]">
                      Fotografie zachycují dokončený dům 6A, který slouží jako ukázka
                      standardu provedení. Stejný standard bude použit i u jednotek ve
                      výstavbě.
                    </p>
                    <p className="text-base leading-relaxed text-[#6F7C73]">
                      Na situační mapce jsou jednotky 3+kk označené jako 1A, 2A, 3B,
                      4B, 5A a 6A. Dům 6A je již hotový a připravený k nastěhování,
                      ostatní jednotky jsou aktuálně ve výstavbě.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 self-start w-full sm:w-auto">
                    <a href="#kontakt" className="font-heading font-medium w-full sm:w-auto text-center bg-[#C46B4A] text-[#F6F3EC] px-8 py-4 rounded-lg hover:bg-[#a85b3f] transition-all duration-300 shadow-sm text-sm">
                      Mám zájem o prohlídku
                    </a>
                    <a href="https://www.prodejme.to/nemovitosti/domy-hevlin-3-kk" className="font-heading font-medium w-full sm:w-auto text-center bg-transparent border border-[#2F3A34] text-[#2F3A34] px-8 py-4 rounded-lg hover:bg-[#2F3A34] hover:text-[#F6F3EC] transition-all duration-300 text-sm">
                      Kompletní informace
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="detail-4kk" className="py-24 px-6 bg-[#F6F3EC] border-t border-[#D9CDBB]/50 scroll-mt-20">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
                <div data-reveal className="w-full lg:w-1/2 flex flex-col gap-4">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e247e603-d039-44d7-805e-c0131506605a_1600w.jpg" alt="Exteriér 4+kk" className="w-full h-64 md:h-[400px] object-cover rounded-2xl border border-[#D9CDBB] shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" data-aura-onclick="openLightbox(this.src, 'detail-4kk')" />
                  <div className="grid grid-cols-4 gap-2" data-aura-onclick="if(event.target.tagName==='IMG') openLightbox(event.target.src, 'detail-4kk')">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/944a2311-933c-4a30-8dde-ec1d6cd34726_320w.jpg" alt="Exteriér 4+kk 1" className="w-full h-16 sm:h-24 object-cover rounded-xl border border-[#D9CDBB] shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9407fd64-fe81-4e9e-bd33-0abeb92e4e78_320w.jpg" alt="Interiér 4+kk 1" className="w-full h-16 sm:h-24 object-cover rounded-xl border border-[#D9CDBB] shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0d073d9-79c6-435d-9101-8f6ea3cb2a32_320w.jpg" alt="Interiér 4+kk 2" className="w-full h-16 sm:h-24 object-cover rounded-xl border border-[#D9CDBB] shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31bc1cad-711e-4f81-82d7-89e023f9d8a6_320w.jpg" alt="Exteriér 4+kk 2" className="w-full h-16 sm:h-24 object-cover rounded-xl border border-[#D9CDBB] shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df6b16bf-57fa-44e3-afcb-122e6e427037_320w.jpg" alt="Interiér 4+kk 3" className="w-full h-16 sm:h-24 object-cover rounded-xl border border-[#D9CDBB] shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e40cd12b-a6ff-4b74-8200-1e8dc4b44167_320w.jpg" alt="Interiér 4+kk 4" className="w-full h-16 sm:h-24 object-cover rounded-xl border border-[#D9CDBB] shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0b108a6-a6e6-4755-8251-16af3dba9a6b_320w.jpg" alt="Interiér 4+kk 5" className="w-full h-16 sm:h-24 object-cover rounded-xl border border-[#D9CDBB] shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c71ec2bf-c7c5-4d58-82e2-59a9468c5f14_320w.jpg" alt="Interiér 4+kk 6" className="w-full h-16 sm:h-24 object-cover rounded-xl border border-[#D9CDBB] shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/595a040f-9510-4b44-997d-5a3d3d72535c_320w.jpg" alt="Interiér 4+kk 7" className="w-full h-16 sm:h-24 object-cover rounded-xl border border-[#D9CDBB] shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e788457d-ac64-44b8-a15f-7da9de594c4c_320w.jpg" alt="Interiér 4+kk 8" className="w-full h-16 sm:h-24 object-cover rounded-xl border border-[#D9CDBB] shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/584c5cf1-c6ff-47ea-9f82-fa16d965ec73_320w.jpg" alt="Exteriér 4+kk 3" className="w-full h-16 sm:h-24 object-cover rounded-xl border border-[#D9CDBB] shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/863dea0b-4da1-46b9-afa6-a830542aafc4_320w.jpg" alt="Interiér 4+kk 9" className="w-full h-16 sm:h-24 object-cover rounded-xl border border-[#D9CDBB] shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity" />
                  </div>
                </div>
                <div data-reveal data-reveal-delay="100" className="w-full lg:w-1/2 flex flex-col">
                  <h2 className="font-heading font-semibold text-[#2F3A34] text-3xl md:text-4xl tracking-tight mb-4">
                    Detail domu 4+kk
                  </h2>
                   <div className="flex flex-wrap gap-2 mb-6">
                     <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#D9CDBB]/30 text-[#2F3A34] text-xs font-semibold tracking-wide">
                       113 m²
                    </span>
                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#D9CDBB]/30 text-[#2F3A34] text-xs font-semibold tracking-wide">
                      Zahrada cca 640 m²
                    </span>
                     <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#D9CDBB]/30 text-[#2F3A34] text-xs font-semibold tracking-wide">
                        Krytá terasa
                      </span>
                      <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#C46B4A]/10 text-[#A85B3F] text-xs font-semibold tracking-wide">
                         7 990 000 Kč
                      </span>
                    </div>
                    <div className="mb-14 flex flex-col gap-6">
                    <p className="text-base leading-relaxed text-[#6F7C73]">
                      Moderní nízkoenergetický dům 4+kk s užitnou plochou 113 m²,
                      vlastní zahradou o velikosti cca 640 m² a velkou krytou terasou
                      14 m². Dispozice nabízí prostorný obývací pokoj s přípravou na
                      kuchyňský kout, hlavní ložnici, dva další samostatné pokoje,
                      velkou rodinnou koupelnu s vanou i sprchovým koutem a technickou
                      místnost.
                    </p>
                    <p className="text-base leading-relaxed text-[#6F7C73]">
                      Fotografie zachycují dokončený dům 6B, který slouží jako ukázka
                      standardu provedení. Stejný standard bude použit i u jednotek ve
                      výstavbě.
                    </p>
                    <p className="text-base leading-relaxed text-[#6F7C73]">
                      Na situační mapce jsou jednotky 4+kk označené jako 1B, 2B, 3A,
                      4A, 5B a 6B. Dům 6B je již hotový a připravený k nastěhování,
                      ostatní jednotky jsou aktuálně ve výstavbě.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 self-start w-full sm:w-auto">
                    <a href="#kontakt" className="font-heading font-medium w-full sm:w-auto text-center bg-[#C46B4A] text-[#F6F3EC] px-8 py-4 rounded-lg hover:bg-[#a85b3f] transition-all duration-300 shadow-sm text-sm">
                      Mám zájem o prohlídku
                    </a>
                    <a href="https://www.prodejme.to/nemovitosti/domy-hevlin-4-kk" className="font-heading font-medium w-full sm:w-auto text-center bg-transparent border border-[#2F3A34] text-[#2F3A34] px-8 py-4 rounded-lg hover:bg-[#2F3A34] hover:text-[#F6F3EC] transition-all duration-300 text-sm">
                      Kompletní informace
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="py-24 overflow-hidden bg-[#F6F3EC]" id="lokalita">
            <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div data-reveal>
                <h2 className="font-heading font-semibold text-[#2F3A34] text-3xl md:text-4xl tracking-tight mb-4">
                  Hevlín: Vše důležité na dosah ruky
                </h2>
                <p className="text-base text-[#6F7C73] max-w-2xl">
                  Klidný život v přírodě bez kompromisů v občanské vybavenosti.
                </p>
              </div>
              <div data-reveal data-reveal-delay="100" className="flex gap-4">
                <button onClick={() => locationCarouselRef.current?.scrollBy({ left: -350, behavior: "smooth" })} className="w-12 h-12 rounded-full border border-[#D9CDBB] bg-[#FFFFFF] text-[#2F3A34] flex items-center justify-center hover:bg-[#2F3A34] hover:text-[#F6F3EC] transition-colors shadow-sm" aria-label="Předchozí">
                  <iconify-icon icon="solar:arrow-left-linear" width="24" height="24"></iconify-icon>
                </button>
                <button onClick={() => locationCarouselRef.current?.scrollBy({ left: 350, behavior: "smooth" })} className="w-12 h-12 rounded-full border border-[#D9CDBB] bg-[#FFFFFF] text-[#2F3A34] flex items-center justify-center hover:bg-[#2F3A34] hover:text-[#F6F3EC] transition-colors shadow-sm" aria-label="Další">
                  <iconify-icon icon="solar:arrow-right-linear" width="24" height="24"></iconify-icon>
                </button>
              </div>
            </div>


            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 px-6 hide-scrollbar md:pl-[calc((100vw-80rem)/2+1.5rem)] md:pr-6" style={{"scrollPaddingLeft": "max(1.5rem, calc((100vw - 80rem) / 2 + 1.5rem))"}} id="lokalita-carousel" ref={locationCarouselRef}>

              <div data-reveal className="snap-start shrink-0 w-[85vw] sm:w-[360px] bg-[#FFFFFF] border border-[#D9CDBB] rounded-2xl flex flex-col overflow-hidden">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dac17bc7-66d5-41ee-ab2b-bf5f648b9864_800w.jpg" alt="Kousek do Rakouska" className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-heading font-semibold text-[#2F3A34] text-xl tracking-tight mb-3">
                    Okolní příroda
                  </h3>
                  <p className="text-sm text-[#6F7C73] leading-relaxed">
                    Nádherná okolní příroda nabízí nespočet možností pro relaxaci.
                    Užijte si klidné procházky v blízkosti řeky Dyje.
                  </p>
                </div>
              </div>


              <div data-reveal data-reveal-delay="80" className="snap-start shrink-0 w-[85vw] sm:w-[360px] bg-[#FFFFFF] border border-[#D9CDBB] rounded-2xl flex flex-col overflow-hidden">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5108bb5-393a-42fd-abba-def5f9987126_800w.jpg" alt="Relax v termálních lázních" className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-heading font-semibold text-[#2F3A34] text-xl tracking-tight mb-3">
                    Vzdělání pro děti
                  </h3>
                  <p className="text-sm text-[#6F7C73] leading-relaxed">
                    Vaše děti to budou mít do školy i školky opravdu blízko. Obě
                    instituce sídlí přímo v Hevlíně.
                  </p>
                </div>
              </div>


              <div data-reveal data-reveal-delay="160" className="snap-start shrink-0 w-[85vw] sm:w-[360px] bg-[#FFFFFF] border border-[#D9CDBB] rounded-2xl flex flex-col overflow-hidden">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7836dc1e-16c9-422e-b44d-8b96d9aa3ff4_800w.jpg" alt="Výborná dostupnost do měst" className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-heading font-semibold text-[#2F3A34] text-xl tracking-tight mb-3">
                    Pohodlné nákupy
                  </h3>
                  <p className="text-sm text-[#6F7C73] leading-relaxed">
                    Potraviny nakoupíte pohodlně přímo v obci. K dispozici jsou hned 3
                    dobře zásobené obchody.
                  </p>
                </div>
              </div>


              <div data-reveal data-reveal-delay="240" className="snap-start shrink-0 w-[85vw] sm:w-[360px] bg-[#FFFFFF] border border-[#D9CDBB] rounded-2xl flex flex-col overflow-hidden">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/29e016a1-b5f3-422d-8836-2985ca4e26fb_800w.jpg" alt="Bezpečné zázemí pro děti" className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-heading font-semibold text-[#2F3A34] text-xl tracking-tight mb-3">
                    Služby pro každý den
                  </h3>
                  <p className="text-sm text-[#6F7C73] leading-relaxed">
                    Kvůli odeslání balíku nebo výběru hotovosti nemusíte nikam jezdit.
                    Pošta i bankomat fungují přímo v obci.
                  </p>
                </div>
              </div>


              <div data-reveal data-reveal-delay="320" className="snap-start shrink-0 w-[85vw] sm:w-[360px] bg-[#FFFFFF] border border-[#D9CDBB] rounded-2xl flex flex-col overflow-hidden">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b4f272bc-3356-4099-8a38-5a26e04e3d45_800w.jpg" alt="Hřiště a aktivní odpočinek" className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-heading font-semibold text-[#2F3A34] text-xl tracking-tight mb-3">
                    Místní gastronomie
                  </h3>
                  <p className="text-sm text-[#6F7C73] leading-relaxed">
                    V obci najdete několik restaurací a hospůdek. Skvělá příležitost
                    pro večerní posezení s přáteli nebo rychlé vyřešení oběda.
                  </p>
                </div>
              </div>


              <div data-reveal data-reveal-delay="400" className="snap-start shrink-0 w-[85vw] sm:w-[360px] bg-[#FFFFFF] border border-[#D9CDBB] rounded-2xl flex flex-col overflow-hidden">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8ba4b50a-8148-4436-8c37-b9faa1234f87_800w.jpg" alt="Vše pro každodenní život" className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-heading font-semibold text-[#2F3A34] text-xl tracking-tight mb-3">
                    Aktivní odpočinek venku
                  </h3>
                  <p className="text-sm text-[#6F7C73] leading-relaxed">
                    Děti si vyhrají na moderním hřišti, zatímco dospělí ocení venkovní
                    workout. Vše navíc leží v klidném a zeleném prostředí u vody.
                  </p>
                </div>
              </div>


              <div data-reveal data-reveal-delay="480" className="snap-start shrink-0 w-[85vw] sm:w-[360px] bg-[#FFFFFF] border border-[#D9CDBB] rounded-2xl flex flex-col overflow-hidden">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a594a07c-c2c2-4219-9f75-2f5398636d47_800w.jpg" alt="Místní gastronomie a pohoda" className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-heading font-semibold text-[#2F3A34] text-xl tracking-tight mb-3">
                    Skvělá dostupnost do měst
                  </h3>
                  <p className="text-sm text-[#6F7C73] leading-relaxed">
                    Výborná dopravní dostupnost směrem do Brna (40 minut) i do
                    Rakouska (5 minut). Cesta do práce bude rychlá a bez komplikací.
                  </p>
                </div>
              </div>


              <div className="snap-start shrink-0 w-4 md:w-[calc((100vw-80rem)/2)] block"></div>
            </div>
           </section>


           <section className="reels-section py-24 px-6 bg-[#F6F3EC]" aria-labelledby="reels-heading">
             <div className="max-w-7xl mx-auto">
                <div data-reveal className="reels-intro">
                 <h2 id="reels-heading" className="font-heading font-semibold text-[#2F3A34] text-3xl md:text-4xl tracking-tight mb-5">Domy Hevlín ve videu</h2>
                 <p className="text-base leading-relaxed text-[#6F7C73] max-w-3xl">Podívejte se na Domy Hevlín také v našich Reels.</p>
               </div>
               <div className="reels-grid">
                 {instagramReels.map((reelUrl) => (
                    <blockquote
                      className="instagram-media"
                      data-reveal
                      data-reveal-delay={instagramReels.indexOf(reelUrl) * 80}
                     data-instgrm-permalink={reelUrl}
                     data-instgrm-version="14"
                     key={reelUrl}
                   >
                     <a href={reelUrl}>Zobrazit Reel Domy Hevlín na Instagramu</a>
                   </blockquote>
                 ))}
               </div>
             </div>
           </section>


           <section className="construction-section py-24 px-6 bg-[#FFFFFF] border-t border-[#D9CDBB]/50" aria-labelledby="stavba-heading">
             <div className="max-w-7xl mx-auto">
                <div data-reveal className="construction-intro">
                 <p className="font-heading text-xs font-semibold tracking-[0.2em] uppercase text-[#B77A5E] mb-4">Postup výstavby</p>
                 <h2 id="stavba-heading" className="font-heading font-semibold text-[#2F3A34] text-3xl md:text-4xl tracking-tight mb-5">Aktuálně ze stavby</h2>
                 <p className="text-base leading-relaxed text-[#6F7C73] max-w-3xl">Nová etapa projektu Domy Hevlín už vzniká. Podívejte se na aktuální postup výstavby. Fotografie budeme průběžně doplňovat podle vývoje stavby.</p>
               </div>

               <div className="construction-grid">
                 {constructionUpdates.map((update) => (
                    <article className="construction-card" data-reveal data-reveal-delay={constructionUpdates.indexOf(update) * 80} key={update.title}>
                     <button className="construction-image-button" onClick={() => setSelectedConstructionUpdate(update)} aria-label={`Zvětšit fotografii: ${update.title}`}>
                       <img src={update.image} alt={update.title} />
                       <span className="construction-expand" aria-hidden="true"><iconify-icon icon="solar:magnifer-linear" width="18" height="18"></iconify-icon></span>
                     </button>
                      <div className="construction-caption">
                        <time className="construction-date">{update.date}</time>
                      </div>
                   </article>
                 ))}
               </div>
                <p data-reveal data-reveal-delay="160" className="construction-note">Fotografie zachycují aktuální stav výstavby. Sekci budeme průběžně aktualizovat.</p>
             </div>
           </section>

           {selectedConstructionUpdate && (
             <div className="construction-lightbox" role="dialog" aria-modal="true" aria-label={`Náhled: ${selectedConstructionUpdate.title}`} onClick={() => setSelectedConstructionUpdate(null)}>
               <button className="construction-lightbox-close" onClick={() => setSelectedConstructionUpdate(null)} aria-label="Zavřít náhled"><iconify-icon icon="solar:close-circle-linear" width="30" height="30"></iconify-icon></button>
               <figure onClick={(event) => event.stopPropagation()}>
                 <img src={selectedConstructionUpdate.image} alt={selectedConstructionUpdate.title} />
                 <figcaption><span>{selectedConstructionUpdate.date}</span>{selectedConstructionUpdate.title}</figcaption>
               </figure>
             </div>
           )}


           <section className="py-24 px-6 bg-[#D9CDBB]" id="kontakt">
             <div className="max-w-5xl mx-auto bg-[#FFFFFF] rounded-3xl p-8 md:p-12 lg:p-16 shadow-sm border border-[#FFFFFF]/40 flex flex-col md:flex-row gap-12 items-center">
               <div data-reveal className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                <h2 className="font-heading font-semibold text-[#2F3A34] text-3xl md:text-4xl tracking-tight mb-6">
                  Zaujal vás projekt Domy Hevlín?
                </h2>
                <p className="text-base md:text-lg text-[#6F7C73] leading-relaxed">
                  Rád vám zodpovím veškeré dotazy, doplním další informace nebo se
                  rovnou domluvíme na osobní prohlídce hotového domu, abyste si mohli
                  standard provedení ověřit na vlastní oči.
                </p>
              </div>
               <div data-reveal data-reveal-delay="100" className="w-full md:w-1/2 flex justify-center md:justify-end">
                <div className="bg-[#F6F3EC] rounded-2xl p-6 sm:p-8 border border-[#D9CDBB]/50 w-full max-w-md flex flex-col items-center text-center">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ed2ddd2b-47c6-4286-aab3-e67cf47d9d26_800w.jpg" alt="Viktor Raška" className="w-40 h-48 sm:w-48 sm:h-56 object-cover rounded-2xl mb-6 shadow-sm" />
                  <span className="text-xs font-semibold tracking-widest text-[#C46B4A] uppercase mb-2 block">
                    Prodávající makléř
                  </span>
                  <h3 className="font-heading font-semibold text-[#2F3A34] text-2xl tracking-tight mb-4">
                    Viktor Raška
                  </h3>
                  <div className="flex flex-col gap-2 w-full mb-8">
                    <a href="mailto:viktor.raska@prodejme.to" className="flex items-center justify-center gap-2 text-sm text-[#6F7C73] hover:text-[#C46B4A] transition-colors font-medium">
                      <iconify-icon icon="solar:letter-linear" width="18" height="18" className=""></iconify-icon>
                      viktor.raska@prodejme.to
                    </a>
                    <a href="tel:+420735760218" className="flex items-center justify-center gap-2 text-sm text-[#6F7C73] hover:text-[#C46B4A] transition-colors font-medium">
                      <iconify-icon icon="solar:phone-linear" width="18" height="18" className=""></iconify-icon>
                      +420 735 760 218
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <a href="tel:+420735760218" className="font-heading font-medium bg-[#C46B4A] text-[#F6F3EC] w-full px-6 py-3.5 rounded-lg hover:bg-[#a85b3f] transition-all duration-300 shadow-sm text-sm flex items-center justify-center gap-2">
                      Zavolat makléři
                    </a>
                    <a href="mailto:viktor.raska@prodejme.to" className="font-heading font-medium bg-transparent border border-[#2F3A34] text-[#2F3A34] w-full px-6 py-3.5 rounded-lg hover:bg-[#2F3A34] hover:text-[#F6F3EC] transition-all duration-300 text-sm flex items-center justify-center gap-2">
                      Napsat e-mail
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <footer className="bg-[#2F3A34] py-16 px-6 text-[#F6F3EC]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/335b9411-eed7-41c2-a601-347ea01ef95d_320w.png" alt="Domy Hevlín" className="h-12 md:h-16 w-auto mb-6 object-contain" />
                <p className="text-sm text-[#F6F3EC]/70 max-w-xs">
                  Moderní nízkoenergetické bydlení v těsné blízkosti rakouských
                  hranic.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-end space-y-3">
                <a href="mailto:viktor.raska@prodejme.to" className="flex items-center gap-3 text-sm hover:text-[#C46B4A] transition-colors">
                  viktor.raska@prodejme.to
                </a>
                <a href="tel:+420735760218" className="flex items-center gap-3 text-sm hover:text-[#C46B4A] transition-colors">
                  +420 735 760 218
                </a>
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80fad98e-cf67-4390-a4e2-82264aa4bc35_320w.png" alt="Prodejme.to" className="h-6 w-auto mt-4 object-contain opacity-90" />
              </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#F6F3EC]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F6F3EC]/50">
              <p>Copyright © 2026 Domy Hevlín</p>
              <a href="https://www.prodejme.to/global/legal/spr%C3%A1vce-osobn%C3%ADch-%C3%BAdaj%C5%AF.pdf" className="hover:text-[#F6F3EC] transition-colors">
                Ochrana osobních údajů
              </a>
            </div>
          </footer>

          <div id="lightbox" className="fixed inset-0 z-[200] hidden items-center justify-center bg-[#2F3A34]/95 p-4 backdrop-blur-sm" style={{"display": "none"}}>
            <button id="lightbox-prev" className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-[#F6F3EC]/70 hover:text-[#F6F3EC] p-2 transition-colors z-10" data-aura-onclick="prevLightboxImage(event)">
              <iconify-icon icon="solar:round-alt-arrow-left-linear" width="48" height="48"></iconify-icon>
            </button>
            <div className="relative max-w-full max-h-full flex items-center justify-center p-4">
              <img src="" className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl relative z-0 cursor-default" id="lightbox-img" data-aura-onclick="event.stopPropagation()" />
            </div>
            <button id="lightbox-next" className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-[#F6F3EC]/70 hover:text-[#F6F3EC] p-2 transition-colors z-10" data-aura-onclick="nextLightboxImage(event)">
              <iconify-icon icon="solar:round-alt-arrow-right-linear" width="48" height="48"></iconify-icon>
            </button>
            <button className="absolute top-4 right-4 md:top-6 md:right-6 text-[#F6F3EC]/70 hover:text-[#F6F3EC] transition-colors p-2 z-10" data-aura-onclick="closeLightbox(event)">
              <iconify-icon icon="solar:close-circle-linear" width="48" height="48"></iconify-icon>
            </button>

          </div>
    </div>
  );
}
