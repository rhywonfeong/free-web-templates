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
    "content": "\n      lucide.createIcons();\n\n      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;\n\n      // Nav opacity on scroll\n      const nav = document.getElementById('nav');\n      window.addEventListener('scroll', () => {\n        if (window.scrollY > 40) {\n          nav.classList.add('bg-[#050505]/95', 'border-white/10');\n        } else {\n          nav.classList.remove('bg-[#050505]/95', 'border-white/10');\n        }\n      }, { passive: true });\n\n      // Mobile menu\n      document.getElementById('menuBtn').addEventListener('click', () => {\n        document.getElementById('mobileMenu').classList.toggle('hidden');\n        nav.classList.add('bg-[#050505]/95');\n      });\n\n      // Counters — fast and restrained\n      const counterObserver = new IntersectionObserver((entries) => {\n        entries.forEach(entry => {\n          if (!entry.isIntersecting) return;\n          const el = entry.target;\n          counterObserver.unobserve(el);\n          const target = parseFloat(el.dataset.target);\n          const decimal = el.dataset.decimal === 'true';\n          if (prefersReduced) { el.textContent = decimal ? target.toFixed(1) : Math.round(target); return; }\n          const duration = 700;\n          const start = performance.now();\n          const tick = (now) => {\n            const p = Math.min((now - start) / duration, 1);\n            const eased = 1 - Math.pow(1 - p, 3);\n            const val = target * eased;\n            el.textContent = decimal ? val.toFixed(1) : Math.round(val);\n            if (p < 1) requestAnimationFrame(tick);\n          };\n          requestAnimationFrame(tick);\n        });\n      }, { threshold: 0.5 });\n      document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));\n\n      // GSAP ScrollTrigger cinematic experience\n      if (window.gsap && window.ScrollTrigger && !prefersReduced) {\n        gsap.registerPlugin(ScrollTrigger);\n        document.body.classList.add('gsap-on');\n\n        // Scroll-synced progress bar\n        gsap.to('#scrollProgress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.4 } });\n\n        // Element-by-element reveals: fade + slide + blur\n        gsap.utils.toArray('.reveal').forEach((el) => {\n          gsap.fromTo(el,\n            { autoAlpha: 0, y: 56, filter: 'blur(14px)' },\n            { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out',\n              scrollTrigger: { trigger: el, start: 'top 88%', once: true } });\n        });\n\n        // Hero: parallax background + cinematic exit\n        gsap.fromTo('#hero img',\n          { objectPosition: '50% 35%' },\n          { objectPosition: '50% 65%', ease: 'none',\n            scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 0.6 } });\n        gsap.to('#hero .max-w-3xl', { yPercent: -18, autoAlpha: 0, filter: 'blur(10px)', ease: 'none',\n          scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom 25%', scrub: 0.6 } });\n\n        // Platform: staggered feature rows + progressive command UI reveal\n        gsap.utils.toArray('#platform .border-y > div').forEach((row, i) => {\n          gsap.fromTo(row,\n            { autoAlpha: 0, x: -36, filter: 'blur(8px)' },\n            { autoAlpha: 1, x: 0, filter: 'blur(0px)', duration: 0.9, delay: i * 0.08, ease: 'power3.out',\n              scrollTrigger: { trigger: row, start: 'top 90%', once: true } });\n        });\n        gsap.fromTo('#commandPanel > div',\n          { autoAlpha: 0, y: 28 },\n          { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.18, ease: 'power3.out',\n            scrollTrigger: { trigger: '#commandPanel', start: 'top 80%', once: true } });\n\n        // Use-case panels: background parallax + immersive clip transitions\n        gsap.utils.toArray('.panel').forEach((panel) => {\n          const img = panel.querySelector('img');\n          if (img) {\n            gsap.fromTo(img,\n              { objectPosition: '50% 30%' },\n              { objectPosition: '50% 70%', ease: 'none',\n                scrollTrigger: { trigger: panel, start: 'top bottom', end: 'bottom top', scrub: 0.6 } });\n          }\n          gsap.fromTo(panel,\n            { clipPath: 'inset(8% 5% 8% 5%)' },\n            { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none',\n              scrollTrigger: { trigger: panel, start: 'top 95%', end: 'top 35%', scrub: 0.6 } });\n        });\n\n        // Pricing rows: progressive reveal\n        gsap.utils.toArray('#pricing tbody tr').forEach((tr, i) => {\n          gsap.fromTo(tr,\n            { autoAlpha: 0, y: 20 },\n            { autoAlpha: 1, y: 0, duration: 0.6, delay: i * 0.06, ease: 'power2.out',\n              scrollTrigger: { trigger: tr, start: 'top 92%', once: true } });\n        });\n      } else {\n        // Fallback: reveal on scroll\n        const revealObserver = new IntersectionObserver((entries) => {\n          entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revealObserver.unobserve(e.target); } });\n        }, { threshold: 0.15 });\n        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));\n      }\n    "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n      (function(){var prefersReduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;var canvas=document.getElementById('particleCanvas');if(canvas&&!prefersReduced){var gl=canvas.getContext('webgl',{alpha:true,antialias:false});if(gl){var resize=function(){canvas.width=canvas.clientWidth;canvas.height=canvas.clientHeight;gl.viewport(0,0,canvas.width,canvas.height);};resize();window.addEventListener('resize',resize);var N=260;var data=new Float32Array(N*4);for(var i=0;i<N;i++){data[i*4]=Math.random()*2-1;data[i*4+1]=Math.random()*2-1;data[i*4+2]=Math.random()*0.8+0.2;data[i*4+3]=Math.random();}var vsSrc='attribute vec4 a;uniform float t;varying float vA;void main(){float y=mod(a.y+1.0+t*a.z*0.06,2.0)-1.0;float x=a.x+sin(t*0.4+a.w*6.283)*0.02;vA=a.z;gl_Position=vec4(x,y,0.0,1.0);gl_PointSize=a.z*3.0+1.0;}';var fsSrc='precision mediump float;varying float vA;void main(){float d=length(gl_PointCoord-vec2(0.5));if(d>0.5)discard;float al=(1.0-d*2.0)*0.5*vA;gl_FragColor=vec4(1.0,1.0,1.0,al);}';var sh=function(type,src){var s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);return s;};var p=gl.createProgram();gl.attachShader(p,sh(gl.VERTEX_SHADER,vsSrc));gl.attachShader(p,sh(gl.FRAGMENT_SHADER,fsSrc));gl.linkProgram(p);gl.useProgram(p);var buf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buf);gl.bufferData(gl.ARRAY_BUFFER,data,gl.STATIC_DRAW);var loc=gl.getAttribLocation(p,'a');gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,4,gl.FLOAT,false,0,0);var tLoc=gl.getUniformLocation(p,'t');gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE);gl.clearColor(0,0,0,0);var frame=function(now){gl.clear(gl.COLOR_BUFFER_BIT);gl.uniform1f(tLoc,now*0.001);gl.drawArrays(gl.POINTS,0,N);requestAnimationFrame(frame);};requestAnimationFrame(frame);}}document.querySelectorAll('h1,h2').forEach(function(h){(function walk(node){Array.prototype.slice.call(node.childNodes).forEach(function(child){if(child.nodeType===3){var frag=document.createDocumentFragment();child.textContent.split('').forEach(function(ch){if(ch.trim()===''){frag.appendChild(document.createTextNode(ch));return;}var s=document.createElement('span');s.textContent=ch;s.className='wchar';frag.appendChild(s);});node.replaceChild(frag,child);}else if(child.nodeType===1&&child.tagName!=='BR'){walk(child);}});})(h);if(prefersReduced)return;var spans=h.querySelectorAll('.wchar');var raf=null,mx=0,my=0;var update=function(){raf=null;spans.forEach(function(s){var r=s.getBoundingClientRect();var dx=mx-(r.left+r.width/2),dy=my-(r.top+r.height/2);var d=Math.sqrt(dx*dx+dy*dy);var w=Math.round(Math.max(600,Math.min(900,900-(d/220)*300)));s.style.fontWeight=w;});};h.addEventListener('pointermove',function(e){mx=e.clientX;my=e.clientY;if(!raf)raf=requestAnimationFrame(update);});h.addEventListener('pointerleave',function(){spans.forEach(function(s){s.style.fontWeight='';});});});})();\n    "
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "scroll-smooth";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "bg-[#F7F6F3] text-[#1A1A1A] antialiased";
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
    <div className="aura-source-body bg-[#F7F6F3] text-[#1A1A1A] antialiased">
      <div id="scrollProgress" className="fixed left-0 top-0 z-[60] h-[2px] w-full scale-x-0 bg-[#D92F24]"></div>

          <header id="nav" className="fixed top-0 inset-x-0 z-50 transition-colors duration-300 border-b border-transparent">
            <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:px-10">
              <a href="#" className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 items-center justify-center bg-[#D92F24]">
                  <i data-lucide="zap" className="h-3.5 w-3.5 text-white" strokeWidth="1.5"></i>
                </span>
                <span className="text-sm font-semibold tracking-wide text-white">
                  APEXSIGNAL
                </span>
              </a>
              <nav className="hidden items-center gap-7 lg:flex">
                <a href="#" className="text-xs font-medium text-white/90 hover:text-white transition-colors">
                  Home
                </a>
                <a href="#platform" className="text-xs font-medium text-white/60 hover:text-white transition-colors">
                  Platform
                </a>
                <a href="#usecases" className="text-xs font-medium text-white/60 hover:text-white transition-colors">
                  Use Cases
                </a>
                <a href="#pricing" className="text-xs font-medium text-white/60 hover:text-white transition-colors">
                  Pricing
                </a>
                <a href="#notes" className="text-xs font-medium text-white/60 hover:text-white transition-colors">
                  Notes
                </a>
                <a href="#contact" className="text-xs font-medium text-white/60 hover:text-white transition-colors">
                  Contact
                </a>
                <a href="#contact" className="group ml-3 flex items-stretch">
                  <span className="flex items-center bg-white px-4 py-2.5 text-xs font-semibold text-black">
                    Get Demo
                  </span>
                  <span className="flex w-9 items-center justify-center bg-[#D92F24] overflow-hidden">
                    <i data-lucide="arrow-right" className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1" strokeWidth="1.5"></i>
                  </span>
                </a>
              </nav>
              <button id="menuBtn" className="lg:hidden flex h-10 w-10 items-center justify-center border border-white/20 text-white">
                <i data-lucide="menu" className="h-5 w-5" strokeWidth="1.5"></i>
              </button>
            </div>
            <div id="mobileMenu" className="hidden border-t border-white/10 bg-[#050505] px-5 py-6 lg:hidden">
              <div className="flex flex-col gap-4">
                <a href="#" className="text-sm font-medium text-white">Home</a>
                <a href="#platform" className="text-sm font-medium text-white/60">
                  Platform
                </a>
                <a href="#usecases" className="text-sm font-medium text-white/60">
                  Use Cases
                </a>
                <a href="#pricing" className="text-sm font-medium text-white/60">
                  Pricing
                </a>
                <a href="#notes" className="text-sm font-medium text-white/60">Notes</a>
                <a href="#contact" className="mt-2 flex w-fit items-stretch">
                  <span className="flex items-center bg-white px-4 py-2.5 text-xs font-semibold text-black">
                    Get Demo
                  </span>
                  <span className="flex w-9 items-center justify-center bg-[#D92F24]">
                    <i data-lucide="arrow-right" className="h-4 w-4 text-white" strokeWidth="1.5"></i>
                  </span>
                </a>
              </div>
            </div>
          </header>


          <section className="relative h-screen min-h-[640px] w-full overflow-hidden" id="hero">
            <div className="absolute inset-0">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/50ec0494-aa88-4f04-bae2-37137852e6a1_3840w.png" alt="Machine in motion" className="hero-drift h-full w-full object-cover grayscale-[35%] contrast-125 brightness-[0.65]" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/55 to-black/10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40"></div>
            <canvas id="particleCanvas" className="pointer-events-none absolute inset-0 h-full w-full"></canvas>

            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-0 h-full w-px bg-white/10 beam-v"></div>
              <div className="absolute left-0 top-[72px] h-px w-full bg-white/10 beam-h"></div>
              <div className="absolute bottom-[18%] left-0 h-px w-full bg-white/[0.07] beam-h beam-d2"></div>
              <div className="absolute left-5 md:left-10 top-0 h-full w-px bg-white/[0.07] beam-v beam-d1"></div>
              <div className="absolute right-5 md:right-10 top-0 h-full w-px bg-white/[0.07] beam-v beam-d2"></div>

              <div className="mono absolute left-1/2 top-24 -translate-x-1/2 text-xs text-white/30 hidden md:block">
                — 00 —
              </div>
            </div>


            <div className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-[1440px] px-5 pb-16 md:px-10 md:pb-24">
              <div className="max-w-3xl">
                <div className="clip-reveal d1 mb-5 flex items-center gap-3">
                  <span className="h-2 w-2 bg-[#D92F24] pulse-dot"></span>
                  <span className="mono text-xs tracking-[0.25em] text-white/70">
                    REAL-TIME DECISION INTELLIGENCE
                  </span>
                </div>
                <h1 className="clip-reveal d2 text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                  Race every
                  <br />
                  signal into
                  <br />
                  a decision.
                </h1>
                <p className="clip-reveal d3 mt-6 max-w-md text-base leading-relaxed text-white/70">
                  Every second counts. ApexSignal turns live operational data into
                  decisions your team can trust — before the window closes.
                </p>
                <div className="clip-reveal d3 mt-8 flex flex-wrap items-center gap-6">
                  <a href="#contact" className="group flex items-stretch">
                    <span className="flex items-center bg-white px-6 py-4 text-sm font-semibold text-black">
                      Start Live Demo
                    </span>
                    <span className="flex w-12 items-center justify-center bg-[#D92F24] overflow-hidden">
                      <i data-lucide="arrow-right" className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1.5" strokeWidth="1.5"></i>
                    </span>
                  </a>
                  <a href="#platform" className="group flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
                    <i data-lucide="play" className="h-4 w-4 text-[#E8D45A]" strokeWidth="1.5"></i>
                    Watch the signal flow
                    <span className="block h-px w-6 bg-white/40 transition-all duration-300 group-hover:w-10 group-hover:bg-white"></span>
                  </a>
                </div>
              </div>
            </div>


            <div className="mono absolute bottom-6 right-5 z-10 hidden items-center gap-4 text-xs text-white/60 md:right-10 md:flex">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-[#4ADE80] pulse-dot"></span>
                LIVE SIGNAL
              </span>
              <span className="text-white/25">|</span>
              <span>LATENCY 38MS</span>
              <span className="text-white/25">|</span>
              <span>SECTOR 03</span>
            </div>
          </section>


          <section className="relative border-y border-black/10 bg-white">
            <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-black/[0.05] beam-v beam-d1"></div>
            <div className="mx-auto max-w-[1440px] px-5 md:px-10">
              <div className="mono flex items-center justify-between border-b border-black/10 py-4 text-xs text-black/40">
                <span>TELEMETRY / SAMPLE METRICS*</span>
                <span className="hidden sm:block">SESSION 0042 — ACTIVE</span>
              </div>
              <div className="grid grid-cols-1 divide-y divide-black/10 md:grid-cols-3 md:divide-x md:divide-y-0">
                <div className="reveal py-12 md:py-16 md:pr-10">
                  <div className="mono mb-3 flex items-center gap-2 text-xs text-black/50">
                    <span className="h-1.5 w-1.5 bg-[#D92F24]"></span>
                    EVENT LATENCY
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="counter text-6xl font-semibold tracking-tight text-[#111] md:text-7xl" data-target="38" data-suffix="">
                      0
                    </span>
                    <span className="text-2xl font-medium tracking-tight text-black/40">
                      ms
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-black/55">
                    Sample event latency from ingest to routed alert.
                  </p>
                </div>
                <div className="reveal py-12 md:px-10 md:py-16">
                  <div className="mono mb-3 flex items-center gap-2 text-xs text-black/50">
                    <span className="h-1.5 w-1.5 bg-[#E8D45A]"></span>
                    MONITORING
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="counter text-6xl font-semibold tracking-tight text-[#111] md:text-7xl" data-target="24" data-suffix="">
                      0
                    </span>
                    <span className="text-2xl font-medium tracking-tight text-black/40">
                      /7
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-black/55">
                    Live coverage. No blind laps, no unstaffed sectors.
                  </p>
                </div>
                <div className="reveal py-12 md:py-16 md:pl-10">
                  <div className="mono mb-3 flex items-center gap-2 text-xs text-black/50">
                    <span className="h-1.5 w-1.5 bg-[#16A34A]"></span>
                    RESPONSE SPEED
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="counter text-6xl font-semibold tracking-tight text-[#111] md:text-7xl" data-target="3.2" data-decimal="true">
                      0
                    </span>
                    <span className="text-2xl font-medium tracking-tight text-black/40">
                      x
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-black/55">
                    Sample incident response speed vs. dashboard-first teams.
                  </p>
                </div>
              </div>
              <div className="mono border-t border-black/10 py-3 text-xs text-black/35">
                *Placeholder figures shown until your live telemetry is connected.
              </div>
            </div>
          </section>


          <section id="platform" className="relative bg-[#F7F6F3] py-24 md:py-32">
            <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-black/[0.05] beam-v"></div>
            <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-16 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
              <div className="reveal">
                <div className="mono mb-6 text-xs tracking-[0.25em] text-[#D92F24]">
                  01 / PLATFORM
                </div>
                <h2 className="text-4xl font-semibold leading-[1.02] tracking-tight text-[#111] sm:text-5xl md:text-6xl lg:text-7xl">
                  Built for teams moving too fast for stale dashboards.
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-black/55">
                  Dashboards report the past. ApexSignal runs the present — a
                  continuous lane of live events, classified by urgency and routed to
                  the person who can act.
                </p>
                <div className="mt-12 divide-y divide-black/10 border-y border-black/10">
                  <div className="group flex items-center gap-5 py-5">
                    <span className="mono text-xs text-black/40">A1</span>
                    <i data-lucide="activity" className="h-4 w-4 text-[#D92F24]" strokeWidth="1.5"></i>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[#111]">Live events</div>
                      <div className="text-sm text-black/55">
                        Every operational signal, streamed as it happens.
                      </div>
                    </div>
                    <i data-lucide="arrow-right" className="h-4 w-4 text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black" strokeWidth="1.5"></i>
                  </div>
                  <div className="group flex items-center gap-5 py-5">
                    <span className="mono text-xs text-black/40">A2</span>
                    <i data-lucide="git-branch" className="h-4 w-4 text-[#D92F24]" strokeWidth="1.5"></i>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[#111]">
                        Alert routing
                      </div>
                      <div className="text-sm text-black/55">
                        Urgency-classified, sent to the right owner in milliseconds.
                      </div>
                    </div>
                    <i data-lucide="arrow-right" className="h-4 w-4 text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black" strokeWidth="1.5"></i>
                  </div>
                  <div className="group flex items-center gap-5 py-5">
                    <span className="mono text-xs text-black/40">A3</span>
                    <i data-lucide="history" className="h-4 w-4 text-[#D92F24]" strokeWidth="1.5"></i>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[#111]">
                        Decision history
                      </div>
                      <div className="text-sm text-black/55">
                        Every call logged with context. Review any lap later.
                      </div>
                    </div>
                    <i data-lucide="arrow-right" className="h-4 w-4 text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black" strokeWidth="1.5"></i>
                  </div>
                  <div className="group flex items-center gap-5 py-5">
                    <span className="mono text-xs text-black/40">A4</span>
                    <i data-lucide="users" className="h-4 w-4 text-[#D92F24]" strokeWidth="1.5"></i>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[#111]">
                        Team handoff
                      </div>
                      <div className="text-sm text-black/55">
                        Shift changes without dropped signals or lost context.
                      </div>
                    </div>
                    <i data-lucide="arrow-right" className="h-4 w-4 text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black" strokeWidth="1.5"></i>
                  </div>
                </div>
              </div>
              <div className="reveal lg:sticky lg:top-24 lg:self-start">
                <div className="border border-black/10 bg-[#171717] shadow-xl" id="commandPanel">
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                    <div className="mono text-xs text-white/60">APEXSIGNAL / COMMAND</div>
                    <div className="mono flex items-center gap-2 text-xs text-[#4ADE80]">
                      <span className="h-1.5 w-1.5 bg-[#4ADE80] pulse-dot"></span>
                      LIVE
                    </div>
                  </div>
                  <div className="border-b border-white/10 px-5 py-4">
                    <div className="mono mb-3 text-xs text-white/40">EVENT STREAM</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 border-l-2 border-[#D92F24] bg-white/[0.03] px-3 py-2">
                        <span className="mono text-xs text-white/40">14:02:11</span>
                        <span className="text-xs font-medium text-white">
                          Fulfilment queue breach — Hub East
                        </span>
                        <span className="mono ml-auto bg-[#D92F24]/15 px-1.5 py-0.5 text-xs text-[#D92F24]">
                          CRIT
                        </span>
                      </div>
                      <div className="flex items-center gap-3 border-l-2 border-[#E8D45A] bg-white/[0.03] px-3 py-2">
                        <span className="mono text-xs text-white/40">14:02:04</span>
                        <span className="text-xs font-medium text-white">
                          Payment retries climbing +12%
                        </span>
                        <span className="mono ml-auto bg-[#E8D45A]/15 px-1.5 py-0.5 text-xs text-[#E8D45A]">
                          WARN
                        </span>
                      </div>
                      <div className="flex items-center gap-3 border-l-2 border-white/20 bg-white/[0.03] px-3 py-2">
                        <span className="mono text-xs text-white/40">14:01:47</span>
                        <span className="text-xs font-medium text-white/70">
                          Carrier ETA sync complete
                        </span>
                        <span className="mono ml-auto bg-white/10 px-1.5 py-0.5 text-xs text-white/50">
                          INFO
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-white/10 border-b border-white/10">
                    <div className="px-5 py-4">
                      <div className="mono mb-3 text-xs text-white/40">ALERT LANE</div>
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center bg-[#D92F24]">
                          <i data-lucide="siren" className="h-4 w-4 text-white" strokeWidth="1.5"></i>
                        </span>
                        <div>
                          <div className="text-xs font-semibold text-white">
                            Routed → M. Okafor
                          </div>
                          <div className="mono text-xs text-white/40">
                            ACK IN 00:00:41
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-5 py-4">
                      <div className="mono mb-3 text-xs text-white/40">DECISION LOG</div>
                      <div className="text-xs font-semibold text-white">
                        Reroute 3 lanes to Hub North
                      </div>
                      <div className="mono mt-1 text-xs text-white/40">
                        LOGGED 14:02:56 · REVIEW T+2H
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-4">
                    <div className="mono mb-2 flex justify-between text-xs text-white/40">
                      <span>PIPELINE LATENCY</span>
                      <span className="text-[#4ADE80]">38MS</span>
                    </div>
                    <div className="flex h-1.5 gap-0.5">
                      <div className="w-[38%] bg-[#4ADE80]"></div>
                      <div className="w-[10%] bg-[#E8D45A]"></div>
                      <div className="flex-1 bg-white/10"></div>
                    </div>
                  </div>
                </div>
                <div className="mono mt-3 flex justify-between text-xs text-black/35">
                  <span>FIG. 01 — COMMAND VIEW</span>
                  <span>SCALE 1:1</span>
                </div>
              </div>
            </div>
          </section>


          <section id="usecases">
            <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
              <div className="mono mb-4 text-xs tracking-[0.25em] text-[#D92F24]">
                02 / USE CASES
              </div>
              <h2 className="reveal max-w-2xl text-4xl font-semibold leading-[1.02] tracking-tight text-[#111] md:text-5xl lg:text-6xl">
                Three tracks. One command system.
              </h2>
            </div>


            <div className="panel group relative h-[70vh] min-h-[440px] overflow-hidden border-y border-black/10">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8b8e531-19ee-4acb-a3d9-861a80d43887_3840w.png" alt="Logistics" className="panel-img absolute inset-0 h-full w-full object-cover grayscale-[45%] contrast-125 brightness-[0.55]" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent"></div>
              <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-white/10 beam-v beam-d1"></div>
              <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-5 pb-14 md:px-10">
                <div className="reveal max-w-lg">
                  <div className="mono mb-4 flex items-center gap-3 text-xs tracking-[0.25em] text-[#E8D45A]">
                    <span className="h-px w-8 bg-[#E8D45A]"></span>
                    LOGISTICS COMMAND
                  </div>
                  <h3 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
                    Reroute before the delay becomes the story.
                  </h3>
                  <a href="#contact" className="group/btn mt-6 inline-flex items-stretch border border-white/40 hover:border-white transition-colors">
                    <span className="flex items-center px-5 py-3 text-xs font-semibold text-white">
                      Learn More
                    </span>
                    <span className="flex w-10 items-center justify-center border-l border-white/40">
                      <i data-lucide="arrow-right" className="h-4 w-4 text-white transition-transform duration-300 group-hover/btn:translate-x-1" strokeWidth="1.5"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="mono absolute bottom-6 right-5 z-10 hidden text-xs text-white/40 md:right-10 md:block">
                TRACK 01 / 03
              </div>
            </div>


            <div className="panel group relative h-[70vh] min-h-[440px] overflow-hidden border-b border-black/10">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ff1484f8-4fc4-4acb-bf52-978407b72472_3840w.webp" alt="Incident response" className="panel-img absolute inset-0 h-full w-full object-cover grayscale-[45%] contrast-125 brightness-[0.5]" />
              <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/40 to-transparent"></div>
              <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-white/10 beam-v beam-d2"></div>
              <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col items-end justify-end px-5 pb-14 md:px-10">
                <div className="reveal max-w-lg text-left md:text-right">
                  <div className="mono mb-4 flex items-center gap-3 text-xs tracking-[0.25em] text-[#D92F24] md:justify-end">
                    <span className="h-px w-8 bg-[#D92F24]"></span>
                    INCIDENT RESPONSE
                  </div>
                  <h3 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
                    Triage in seconds, not standups.
                  </h3>
                  <a href="#contact" className="group/btn mt-6 inline-flex items-stretch border border-white/40 hover:border-white transition-colors">
                    <span className="flex items-center px-5 py-3 text-xs font-semibold text-white">
                      Learn More
                    </span>
                    <span className="flex w-10 items-center justify-center border-l border-white/40">
                      <i data-lucide="arrow-right" className="h-4 w-4 text-white transition-transform duration-300 group-hover/btn:translate-x-1" strokeWidth="1.5"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="mono absolute bottom-6 left-5 z-10 hidden text-xs text-white/40 md:left-10 md:block">
                TRACK 02 / 03
              </div>
            </div>


            <div className="panel group relative h-[70vh] min-h-[440px] overflow-hidden border-b border-black/10">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5654af35-b2f0-4ae9-98b5-b96329905ead_3840w.webp" alt="Revenue operations" className="panel-img absolute inset-0 h-full w-full object-cover grayscale-[45%] contrast-125 brightness-[0.5]" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent"></div>
              <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-white/10 beam-v"></div>
              <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-5 pb-14 md:px-10">
                <div className="reveal max-w-lg">
                  <div className="mono mb-4 flex items-center gap-3 text-xs tracking-[0.25em] text-[#4ADE80]">
                    <span className="h-px w-8 bg-[#4ADE80]"></span>
                    REVENUE OPERATIONS
                  </div>
                  <h3 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
                    Catch the leak while it's still a drip.
                  </h3>
                  <a href="#contact" className="group/btn mt-6 inline-flex items-stretch border border-white/40 hover:border-white transition-colors">
                    <span className="flex items-center px-5 py-3 text-xs font-semibold text-white">
                      Learn More
                    </span>
                    <span className="flex w-10 items-center justify-center border-l border-white/40">
                      <i data-lucide="arrow-right" className="h-4 w-4 text-white transition-transform duration-300 group-hover/btn:translate-x-1" strokeWidth="1.5"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="mono absolute bottom-6 right-5 z-10 hidden text-xs text-white/40 md:right-10 md:block">
                TRACK 03 / 03
              </div>
            </div>
          </section>


          <section className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative flex flex-col justify-between bg-white px-5 py-20 md:px-10 md:py-28">
              <div>
                <div className="mono mb-6 text-xs tracking-[0.25em] text-[#D92F24]">
                  03 / WORKFLOW
                </div>
                <h2 className="reveal text-4xl font-semibold leading-[1.02] tracking-tight text-[#111] md:text-5xl lg:text-6xl">
                  The pit-lane
                  <br />
                  procedure.
                </h2>
                <p className="reveal mt-6 max-w-sm text-base leading-relaxed text-black/55">
                  Five steps, executed the same way every time. No debates in the
                  moment. Speed comes from procedure, not heroics.
                </p>
              </div>
              <div className="mono mt-16 flex items-center gap-4 text-xs text-black/45">
                <span className="h-1.5 w-1.5 bg-[#E8D45A]"></span>
                AVG CYCLE: UNDER 90 SECONDS
              </div>
            </div>
            <div className="bg-[#F4F3EF] px-5 py-20 text-[#050505] md:px-10 md:py-28">
              <div className="divide-y divide-black/10 border-y border-black/10">
                <div className="reveal flex items-start gap-6 py-6">
                  <span className="mono pt-1 text-sm font-medium text-[#D92F24]">01</span>
                  <div className="flex-1">
                    <div className="text-base font-semibold tracking-tight">
                      Ingest signal
                    </div>
                    <div className="mt-1 text-sm text-black/55">
                      Every source, one lane. Streams, webhooks, sensors, logs.
                    </div>
                  </div>
                  <i data-lucide="radio" className="mt-1 h-4 w-4 text-black/40" strokeWidth="1.5"></i>
                </div>
                <div className="reveal flex items-start gap-6 py-6">
                  <span className="mono pt-1 text-sm font-medium text-[#D92F24]">02</span>
                  <div className="flex-1">
                    <div className="text-base font-semibold tracking-tight">
                      Classify urgency
                    </div>
                    <div className="mt-1 text-sm text-black/55">
                      Critical, warning, or noise — decided by rules you set, in
                      milliseconds.
                    </div>
                  </div>
                  <i data-lucide="gauge" className="mt-1 h-4 w-4 text-black/40" strokeWidth="1.5"></i>
                </div>
                <div className="reveal flex items-start gap-6 py-6">
                  <span className="mono pt-1 text-sm font-medium text-[#D92F24]">03</span>
                  <div className="flex-1">
                    <div className="text-base font-semibold tracking-tight">
                      Route owner
                    </div>
                    <div className="mt-1 text-sm text-black/55">
                      One named owner per signal. No group pings, no diffusion of
                      responsibility.
                    </div>
                  </div>
                  <i data-lucide="crosshair" className="mt-1 h-4 w-4 text-black/40" strokeWidth="1.5"></i>
                </div>
                <div className="reveal flex items-start gap-6 py-6">
                  <span className="mono pt-1 text-sm font-medium text-[#D92F24]">04</span>
                  <div className="flex-1">
                    <div className="text-base font-semibold tracking-tight">
                      Log decision
                    </div>
                    <div className="mt-1 text-sm text-black/55">
                      What was decided, by whom, with what context. Captured
                      automatically.
                    </div>
                  </div>
                  <i data-lucide="file-check" className="mt-1 h-4 w-4 text-black/40" strokeWidth="1.5"></i>
                </div>
                <div className="reveal flex items-start gap-6 py-6">
                  <span className="mono pt-1 text-sm font-medium text-[#D92F24]">05</span>
                  <div className="flex-1">
                    <div className="text-base font-semibold tracking-tight">
                      Review outcome
                    </div>
                    <div className="mt-1 text-sm text-black/55">
                      Replay any incident. Tighten the procedure. Get faster every
                      lap.
                    </div>
                  </div>
                  <i data-lucide="rotate-ccw" className="mt-1 h-4 w-4 text-black/40" strokeWidth="1.5"></i>
                </div>
              </div>
            </div>
          </section>


          <section id="pricing" className="relative border-t border-black/10 bg-white py-24 md:py-32">
            <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-black/[0.05] beam-v beam-d2"></div>
            <div className="mx-auto max-w-[1440px] px-5 md:px-10">
              <div className="mono mb-4 text-xs tracking-[0.25em] text-[#D92F24]">
                04 / PRICING
              </div>
              <h2 className="reveal max-w-xl text-4xl font-semibold leading-[1.02] tracking-tight text-[#111] md:text-5xl lg:text-6xl">
                Pick your grid position.
              </h2>
              <div className="reveal mt-14 overflow-x-auto border border-black/15 bg-white">
                <table className="w-full min-w-[720px] text-left">
                  <thead>
                    <tr className="border-b border-black/15 bg-black/[0.03]">
                      <th className="mono px-6 py-4 text-xs font-medium text-black/40">
                        PLAN
                      </th>
                      <th className="px-6 py-4">
                        <div className="text-sm font-semibold text-[#111]">Track</div>
                        <div className="mono mt-1 text-xs text-black/40">
                          FOR SMALL CREWS
                        </div>
                      </th>
                      <th className="border-l border-black/10 px-6 py-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-[#111]">
                          Grid
                          <span className="mono bg-[#D92F24] px-1.5 py-0.5 text-xs text-white">
                            POPULAR
                          </span>
                        </div>
                        <div className="mono mt-1 text-xs text-black/40">
                          FOR SCALING TEAMS
                        </div>
                      </th>
                      <th className="border-l border-black/10 px-6 py-4">
                        <div className="text-sm font-semibold text-[#111]">Command</div>
                        <div className="mono mt-1 text-xs text-black/40">
                          FOR THE WHOLE OPERATION
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/10">
                    <tr>
                      <td className="mono px-6 py-4 text-xs text-black/40">PRICE / MO</td>
                      <td className="px-6 py-4 text-2xl font-semibold tracking-tight text-[#111]">
                        $79
                      </td>
                      <td className="border-l border-black/10 px-6 py-4 text-2xl font-semibold tracking-tight text-[#111]">
                        $249
                      </td>
                      <td className="border-l border-black/10 px-6 py-4 text-2xl font-semibold tracking-tight text-[#111]">
                        Custom
                      </td>
                    </tr>
                    <tr>
                      <td className="mono px-6 py-4 text-xs text-black/40">SEATS</td>
                      <td className="px-6 py-4 text-sm text-black/70">Up to 5</td>
                      <td className="border-l border-black/10 px-6 py-4 text-sm text-black/70">
                        Up to 25
                      </td>
                      <td className="border-l border-black/10 px-6 py-4 text-sm text-black/70">
                        Unlimited
                      </td>
                    </tr>
                    <tr>
                      <td className="mono px-6 py-4 text-xs text-black/40">
                        EVENT STREAMS
                      </td>
                      <td className="px-6 py-4 text-sm text-black/70">3 streams</td>
                      <td className="border-l border-black/10 px-6 py-4 text-sm text-black/70">
                        20 streams
                      </td>
                      <td className="border-l border-black/10 px-6 py-4 text-sm text-black/70">
                        Unlimited
                      </td>
                    </tr>
                    <tr>
                      <td className="mono px-6 py-4 text-xs text-black/40">
                        ALERT ROUTING
                      </td>
                      <td className="px-6 py-4">
                        <i data-lucide="check" className="h-4 w-4 text-[#16A34A]" strokeWidth="1.5"></i>
                      </td>
                      <td className="border-l border-black/10 px-6 py-4">
                        <i data-lucide="check" className="h-4 w-4 text-[#16A34A]" strokeWidth="1.5"></i>
                      </td>
                      <td className="border-l border-black/10 px-6 py-4">
                        <i data-lucide="check" className="h-4 w-4 text-[#16A34A]" strokeWidth="1.5"></i>
                      </td>
                    </tr>
                    <tr>
                      <td className="mono px-6 py-4 text-xs text-black/40">
                        DECISION LOG
                      </td>
                      <td className="px-6 py-4 text-sm text-black/70">30-day history</td>
                      <td className="border-l border-black/10 px-6 py-4 text-sm text-black/70">
                        1-year history
                      </td>
                      <td className="border-l border-black/10 px-6 py-4 text-sm text-black/70">
                        Unlimited + export
                      </td>
                    </tr>
                    <tr>
                      <td className="mono px-6 py-4 text-xs text-black/40">SUPPORT</td>
                      <td className="px-6 py-4 text-sm text-black/70">Standard</td>
                      <td className="border-l border-black/10 px-6 py-4 text-sm text-black/70">
                        Priority
                      </td>
                      <td className="border-l border-black/10 px-6 py-4 text-sm text-black/70">
                        Dedicated race engineer
                      </td>
                    </tr>
                    <tr className="bg-black/[0.03]">
                      <td className="px-6 py-5"></td>
                      <td className="px-6 py-5">
                        <a href="#contact" className="inline-flex items-center gap-2 border border-black/30 px-4 py-2.5 text-xs font-semibold text-[#111] hover:border-black transition-colors">
                          Start Track
                          <i data-lucide="arrow-right" className="h-3.5 w-3.5" strokeWidth="1.5"></i>
                        </a>
                      </td>
                      <td className="border-l border-black/10 px-6 py-5">
                        <a href="#contact" className="group inline-flex items-stretch">
                          <span className="flex items-center bg-[#111] px-4 py-2.5 text-xs font-semibold text-white">
                            Start Grid
                          </span>
                          <span className="flex w-9 items-center justify-center bg-[#D92F24]">
                            <i data-lucide="arrow-right" className="h-3.5 w-3.5 text-white transition-transform duration-300 group-hover:translate-x-1" strokeWidth="1.5"></i>
                          </span>
                        </a>
                      </td>
                      <td className="border-l border-black/10 px-6 py-5">
                        <a href="#contact" className="inline-flex items-center gap-2 bg-[#D92F24] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#b5261d] transition-colors">
                          Talk to Us
                          <i data-lucide="arrow-right" className="h-3.5 w-3.5" strokeWidth="1.5"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mono mt-3 text-xs text-black/35">
                ALL PLANS INCLUDE 38MS-CLASS PIPELINE, SSO, AND 24/7 MONITORING.
              </div>
            </div>
          </section>


          <section id="notes" className="relative border-t border-black/10 bg-[#F7F6F3] py-24 md:py-32">
            <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-black/[0.05] beam-v beam-d1"></div>
            <div className="mx-auto max-w-[1440px] px-5 md:px-10">
              <div className="mono mb-4 text-xs tracking-[0.25em] text-[#D92F24]">
                05 / FIELD NOTES
              </div>
              <h2 className="reveal max-w-xl text-4xl font-semibold leading-[1.02] tracking-tight text-[#111] md:text-5xl lg:text-6xl">
                Reports from the operators.
              </h2>
              <div className="mt-14 grid grid-cols-1 gap-px border border-black/10 bg-black/10 md:grid-cols-3">
                <div className="reveal flex flex-col bg-white">
                  <div className="h-52 overflow-hidden">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe67a71f-1c61-4c27-9457-cf72301e63e8_1600w.webp" alt="Operator" className="h-full w-full object-cover grayscale contrast-125 brightness-90" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <i data-lucide="quote" className="mb-4 h-5 w-5 text-[#D92F24]" strokeWidth="1.5"></i>
                    <p className="flex-1 text-base leading-relaxed text-black/70">
                      "Handoffs between shifts used to drop three or four signals a
                      night. Now the lane carries context forward. Zero dropped in six
                      weeks."
                    </p>
                    <div className="mt-6 border-t border-black/10 pt-4">
                      <div className="text-sm font-semibold text-[#111]">D. Vance</div>
                      <div className="mono mt-0.5 text-xs text-black/40">
                        NETWORK OPS LEAD · FREIGHT
                      </div>
                    </div>
                  </div>
                </div>
                <div className="reveal flex flex-col bg-white">
                  <div className="h-52 overflow-hidden">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/0763b698-99fb-4360-baa0-ca5beea9f5a1/1600w.png" alt="Operator" className="h-full w-full object-cover grayscale contrast-125 brightness-90" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <i data-lucide="quote" className="mb-4 h-5 w-5 text-[#D92F24]" strokeWidth="1.5"></i>
                    <p className="flex-1 text-base leading-relaxed text-black/70">
                      "Triage went from a twenty-minute call to a forty-second routing
                      decision. The urgency classes remove the argument before it
                      starts."
                    </p>
                    <div className="mt-6 border-t border-black/10 pt-4">
                      <div className="text-sm font-semibold text-[#111]">R. Aldana</div>
                      <div className="mono mt-0.5 text-xs text-black/40">
                        INCIDENT COMMANDER · FINTECH
                      </div>
                    </div>
                  </div>
                </div>
                <div className="reveal flex flex-col bg-white">
                  <div className="h-52 overflow-hidden">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/166607fc-ca60-49cb-af5a-712ed23cc46c_1600w.webp" alt="Machinery detail" className="h-full w-full object-cover grayscale contrast-125 brightness-90" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <i data-lucide="quote" className="mb-4 h-5 w-5 text-[#D92F24]" strokeWidth="1.5"></i>
                    <p className="flex-1 text-base leading-relaxed text-black/70">
                      "The decision log alone paid for it. Every call is on record
                      with the data it was made on. Post-incident reviews are ten
                      minutes now."
                    </p>
                    <div className="mt-6 border-t border-black/10 pt-4">
                      <div className="text-sm font-semibold text-[#111]">K. Moreau</div>
                      <div className="mono mt-0.5 text-xs text-black/40">
                        REVOPS DIRECTOR · MARKETPLACE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <footer id="contact" className="relative overflow-hidden border-t border-black/10 bg-white">
            <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-black/[0.05] beam-v"></div>
            <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
              <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                <div className="reveal">
                  <div className="mono mb-6 flex items-center gap-3 text-xs tracking-[0.25em] text-black/50">
                    <span className="h-1.5 w-1.5 bg-[#D92F24] pulse-dot"></span>
                    FINAL SECTOR
                  </div>
                  <h2 className="text-4xl font-semibold leading-[0.98] tracking-tight text-[#111] sm:text-5xl md:text-6xl lg:text-7xl">
                    Make the next decision before the window closes.
                  </h2>
                  <a href="#" className="group mt-10 inline-flex items-stretch">
                    <span className="flex items-center bg-[#111] px-6 py-4 text-sm font-semibold text-white">
                      Start Live Demo
                    </span>
                    <span className="flex w-12 items-center justify-center bg-[#D92F24]">
                      <i data-lucide="arrow-right" className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1.5" strokeWidth="1.5"></i>
                    </span>
                  </a>
                  <div className="mono mt-10 text-xs text-black/50">
                    signal@apexsignal.io · +1 (555) 038-0038
                  </div>
                </div>
                <div className="reveal">
                  <form className="border border-black/15 bg-[#F7F6F3] p-7">
                    <div className="mono mb-6 text-xs tracking-[0.25em] text-black/50">
                      REQUEST ACCESS
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <input type="text" placeholder="Name" className="border border-black/20 bg-white px-4 py-3 text-sm text-[#111] placeholder-black/40 focus:border-black focus:outline-none" />
                      <input type="email" placeholder="Work email" className="border border-black/20 bg-white px-4 py-3 text-sm text-[#111] placeholder-black/40 focus:border-black focus:outline-none" />
                    </div>
                    <textarea rows="3" placeholder="What signals are you racing against?" className="mt-4 w-full border border-black/20 bg-white px-4 py-3 text-sm text-[#111] placeholder-black/40 focus:border-black focus:outline-none"></textarea>
                    <button type="button" className="group mt-5 flex w-full items-stretch">
                      <span className="flex flex-1 items-center justify-center bg-[#D92F24] px-5 py-3.5 text-sm font-semibold text-white transition-colors group-hover:bg-[#b5261d]">
                        Send Transmission
                      </span>
                      <span className="flex w-12 items-center justify-center bg-[#111]">
                        <i data-lucide="arrow-right" className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1" strokeWidth="1.5"></i>
                      </span>
                    </button>
                  </form>
                </div>
              </div>
              <div className="mt-20 grid grid-cols-2 gap-8 border-t border-black/10 pt-10 md:grid-cols-4">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 items-center justify-center bg-[#D92F24]">
                      <i data-lucide="zap" className="h-3 w-3 text-white" strokeWidth="1.5"></i>
                    </span>
                    <span className="text-xs font-semibold tracking-wide text-[#111]">
                      APEXSIGNAL
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-black/55">
                    Real-time decision intelligence for operations teams.
                  </p>
                </div>
                <div>
                  <div className="mono mb-4 text-xs tracking-[0.25em] text-black/40">
                    PRODUCT
                  </div>
                  <div className="flex flex-col gap-2.5 text-sm text-black/60">
                    <a href="#platform" className="hover:text-black transition-colors">
                      Platform
                    </a>
                    <a href="#usecases" className="hover:text-black transition-colors">
                      Use Cases
                    </a>
                    <a href="#pricing" className="hover:text-black transition-colors">
                      Pricing
                    </a>
                  </div>
                </div>
                <div>
                  <div className="mono mb-4 text-xs tracking-[0.25em] text-black/40">
                    COMPANY
                  </div>
                  <div className="flex flex-col gap-2.5 text-sm text-black/60">
                    <a href="#notes" className="hover:text-black transition-colors">
                      Field Notes
                    </a>
                    <a href="#" className="hover:text-black transition-colors">Careers</a>
                    <a href="#" className="hover:text-black transition-colors">
                      Security
                    </a>
                  </div>
                </div>
                <div>
                  <div className="mono mb-4 text-xs tracking-[0.25em] text-black/40">
                    STATUS
                  </div>
                  <div className="mono flex items-center gap-2 text-xs text-[#16A34A]">
                    <span className="h-1.5 w-1.5 bg-[#16A34A] pulse-dot"></span>
                    ALL SYSTEMS GREEN
                  </div>
                  <div className="mono mt-2 text-xs text-black/40">LATENCY 38MS</div>
                </div>
              </div>
              <div className="mono mt-12 flex flex-col gap-2 border-t border-black/10 pt-6 text-xs text-black/40 sm:flex-row sm:justify-between">
                <span>© 2025 APEXSIGNAL SYSTEMS</span>
                <span>PRIVACY · TERMS · SLA</span>
              </div>
            </div>
          </footer>
    </div>
  );
}
