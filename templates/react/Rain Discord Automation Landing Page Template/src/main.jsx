import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'iconify-icon'

// Inject Liquid Glass Script
const liquidGlassScript = document.createElement('script');
liquidGlassScript.src = "https://www.aura.build/FxFilter.js";
document.head.appendChild(liquidGlassScript);

// Inject UnicornStudio Script
!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

// Initialize Animation on Scroll Observer
const once = true;
if (!window.__inViewIO) {
  window.__inViewIO = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        if (once) window.__inViewIO.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}

window.initInViewAnimations = function (selector = ".animate-on-scroll") {
  document.querySelectorAll(selector).forEach((el) => {
    window.__inViewIO.observe(el);
  });
};

// Observe DOM mutations to auto-init animations on newly added elements (useful for React)
const observer = new MutationObserver((mutations) => {
  let shouldInit = false;
  mutations.forEach(mutation => {
    if (mutation.addedNodes.length) shouldInit = true;
  });
  if (shouldInit) window.initInViewAnimations();
});
observer.observe(document.body, { childList: true, subtree: true });

// Initial call when DOM is ready
document.addEventListener("DOMContentLoaded", () => window.initInViewAnimations());

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}