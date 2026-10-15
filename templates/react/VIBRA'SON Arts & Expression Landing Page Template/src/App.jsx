import { useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

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
    "src": "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js",
    "type": "text/javascript",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "",
    "type": "text/javascript",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n      WebFont.load({  google: {    families: [\"Inter:300,400,500,600,700\"]  }});\n    "
  },
  {
    "src": "",
    "type": "text/javascript",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n      !function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);\n    "
  },
  {
    "src": "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js",
    "type": "text/javascript",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/js/webflow.schunk.36b8fb49256177c8.js",
    "type": "text/javascript",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/js/webflow.schunk.c47116f2e22705b5.js",
    "type": "text/javascript",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "https://cdn.prod.website-files.com/689e106364c67d5b5a78fbf4/js/webflow.79788389.dcdec78f402af9d2.js",
    "type": "text/javascript",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js",
    "type": "text/javascript",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "https://cdn.prod.website-files.com/gsap/3.15.0/SplitText.min.js",
    "type": "text/javascript",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js",
    "type": "text/javascript",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "",
    "type": "text/javascript",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n      window.addEventListener('load',function(){if(!window.gsap||!window.ScrollTrigger)return;gsap.registerPlugin(ScrollTrigger);document.querySelectorAll('.ai_img img,.tools_item-img img,.automation_img img,.hero_main-img .img-wrap img').forEach(function(img){gsap.fromTo(img,{yPercent:-8,scale:1.15},{yPercent:8,scale:1.15,ease:'none',scrollTrigger:{trigger:img.parentElement,start:'top bottom',end:'bottom top',scrub:true}});});document.querySelectorAll('.hero_img-chip,.hero_card,.hero_stats').forEach(function(el,i){gsap.to(el,{y:i%2?-40:40,ease:'none',scrollTrigger:{trigger:'.section_hero',start:'top top',end:'bottom top',scrub:true}});});document.querySelectorAll('.accordion,.tools_card,.header-center,.automation_grid > div,.reviews_card').forEach(function(el){gsap.fromTo(el,{opacity:0,y:40},{opacity:1,y:0,duration:0.8,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}});});document.querySelectorAll('section h2').forEach(function(h){gsap.fromTo(h,{y:30},{y:-10,ease:'none',scrollTrigger:{trigger:h,start:'top bottom',end:'bottom top',scrub:true}});});});\n    "
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <WhatsAppButton />
    </BrowserRouter>
  );
}
