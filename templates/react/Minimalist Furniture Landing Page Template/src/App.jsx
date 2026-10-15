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
    "src": "https://madebysourasith-sudo.github.io/mobel-assets/assets/js/main-init-1.js",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "https://madebysourasith-sudo.github.io/mobel-assets/assets/js/main-ITJ26GRW.js",
    "type": "module",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "loading";
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
    <div className="aura-source-body loading">
      <div id="loader" aria-hidden="true">
          <div className="ld-ground"></div>
          <canvas id="ldCanvas"></canvas>
          <div className="ld-mark">
            <span className="ld-mask"><span className="ld-word">MØBEL</span></span><span className="ld-mask"><span className="ld-tag">Objects for living.</span></span>
          </div>
        </div>

        <div id="poster" aria-hidden="true"></div>
        <canvas id="gl"></canvas>
        <div id="spacer"></div>
        <section id="shop">
          <header className="shop-head">
            <div>
              <div className="eyebrow">The Living Collection / Shop</div>
              <h2><span className="mask"><span className="line">The Collection</span></span></h2>
            </div>
            <p>Objects designed to live together.</p>
          </header>
          <div className="grid" id="grid"></div>
        </section>
        <section id="featured" aria-label="Havn sectional, featured">
          <div className="feat-sticky">
            <div className="feat-media">
              <img className="feat-img" src="https://madebysourasith-sudo.github.io/mobel-assets/assets/images/1684165610413-2401399e0e59-1600x1400.webp" alt="Havn sectional in washed linen" loading="lazy" decoding="async" />
              <img className="feat-img" src="https://madebysourasith-sudo.github.io/mobel-assets/assets/images/1768946131690-247c5319f0d8-1400x1400.webp" alt="Woven upholstery, close" loading="lazy" decoding="async" />
              <img className="feat-img" src="https://madebysourasith-sudo.github.io/mobel-assets/assets/images/1583847268964-b28dc8f51f92-1600x1400.webp" alt="Havn in a living room" loading="lazy" decoding="async" />
            </div>
            <div className="feat-copy">
              <div className="eyebrow">Featured / Havn sectional</div>
              <div className="feat-chapters">
                <div className="chap">
                  <div className="n">01 / Form</div>
                  <h3>Generous proportions. Low, architectural lines.</h3>
                </div>
                <div className="chap">
                  <div className="n">02 / Material</div>
                  <h3>Soft woven upholstery selected for texture and durability.</h3>
                </div>
                <div className="chap">
                  <div className="n">03 / Comfort</div>
                  <h3>Designed for long, everyday living.</h3>
                </div>
              </div>
              <div className="feat-meta"><b>Havn sectional</b><span>€6,900</span></div>
              <div className="feat-progress"><i></i></div>
            </div>
          </div>
        </section>
        <section id="catalog" aria-label="MØBEL catalogue">
          <div className="pin-scroll" id="catScroll">
            <div className="pin-sticky">
              <header className="cat-head">
                <div>
                  <h2><span className="mask"><span className="line">The Catalogue</span></span></h2>
                </div>
              </header>
              <div className="cat-stage">
                <div className="cat-frame" id="catFrame">
                  <div className="cat-hint">Preparing the collection</div>
                  <iframe id="catBook" title="MØBEL Collection 2026 lookbook" data-src="https://madebysourasith-sudo.github.io/mobel-assets/pages/catalog.html?embed" loading="lazy" allow="fullscreen"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="materials" aria-label="Materials and craftsmanship">
          <header className="mat-head">
            <div>
              <div className="eyebrow">Materials / Craftsmanship</div>
              <h2><span className="mask"><span className="line">Made to be lived with.</span></span></h2>
            </div>
            <p>Furniture shaped by natural materials, thoughtful construction and the rhythms of everyday life.</p>
          </header>
          <div className="mat-principles">
            <div className="mat-item">
              <div className="n">01</div>
              <h3>Natural materials</h3>
              <p>Selected for touch, character and longevity.</p>
            </div>
            <div className="mat-item">
              <div className="n">02</div>
              <h3>Considered construction</h3>
              <p>Details designed to disappear into everyday life.</p>
            </div>
            <div className="mat-item">
              <div className="n">03</div>
              <h3>Made for time</h3>
              <p>Furniture that belongs beyond a season.</p>
            </div>
          </div>
          <div className="mat-scroll" id="matScroll">
            <div className="mat-sticky">
              <div className="mat-track" id="matTrack">
                <div className="mat-panel">
                  <div className="mat-panel-in">
                    <figure><img src="https://madebysourasith-sudo.github.io/mobel-assets/assets/images/1768946131690-247c5319f0d8-1400x1100.webp" alt="Wool bouclé, close" loading="lazy" decoding="async" />
                    </figure>
                    <div className="txt">
                      <div className="n">Material 01</div>
                      <h3>Textile</h3>
                      <p>Wool and linen woven in Northern Europe, chosen for how they wear in rather than out.</p>
                    </div>
                  </div>
                </div>
                <div className="mat-panel">
                  <div className="mat-panel-in">
                    <figure><img src="https://madebysourasith-sudo.github.io/mobel-assets/assets/images/1644931551533-02906718127f-1400x1100.webp" alt="Oak grain, close" loading="lazy" decoding="async" />
                    </figure>
                    <div className="txt">
                      <div className="n">Material 02</div>
                      <h3>Wood</h3>
                      <p>Solid oak and walnut, finished by hand with oil, darkening slowly over the years.</p>
                    </div>
                  </div>
                </div>
                <div className="mat-panel">
                  <div className="mat-panel-in">
                    <figure><img src="https://madebysourasith-sudo.github.io/mobel-assets/assets/images/1603369425250-b276f2006ec0-1400x1100.webp" alt="Travertine, close" loading="lazy" decoding="async" />
                    </figure>
                    <div className="txt">
                      <div className="n">Material 03</div>
                      <h3>Stone</h3>
                      <p>Honed travertine that holds the light and keeps its marks.</p>
                    </div>
                  </div>
                </div>
                <div className="mat-panel">
                  <div className="mat-panel-in">
                    <figure><img src="https://madebysourasith-sudo.github.io/mobel-assets/assets/images/1497219055242-93359eeed651-1400x1100.webp" alt="Oak joinery being cut" loading="lazy" decoding="async" />
                    </figure>
                    <div className="txt">
                      <div className="n">Material 04</div>
                      <h3>Craft</h3>
                      <p>Joinery cut to fit, built to be repaired rather than replaced.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mat-idx" id="matIdx">01 / 04</div>
              <div className="mat-hint">Scroll</div>
            </div>
          </div>
        </section>
        <section id="story" aria-label="Our story">
          <img src="https://madebysourasith-sudo.github.io/mobel-assets/assets/images/1600210492486-724fe5c67fb0-2400x1500.webp" alt="A furnished living room in afternoon light" loading="lazy" decoding="async" />
          <div className="story-shade"></div>
          <div className="story-copy">
            <h2 className="story-h">A room is never finished.<br />It grows with the people who live in it.</h2><a href="#">Our
              story →</a>
          </div>
        </section>
        <section id="gallery" aria-label="Spaces furnished by MØBEL">
          <div className="pin-scroll" id="galScroll">
            <div className="pin-sticky">
              <header className="cat-head gal-head">
                <div>
                  <div className="eyebrow">Spaces / Selected interiors</div>
                  <h2><span className="mask"><span className="line">Rooms we have furnished.</span></span></h2>
                </div>
                <p>Fourteen homes, from Bergen to Berlin.</p>
              </header>
              <div className="cat-stage">
                <div className="cat-frame gal-frame" id="galFrame">
                  <div className="cat-hint">Preparing the spaces</div>
                  <iframe id="galBook" title="MØBEL spaces gallery" data-src="https://madebysourasith-sudo.github.io/mobel-assets/pages/gallery.html?embed" loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer id="site-foot">
          <div className="foot-wrap">
            <div className="foot-state">
              <h2>
                <span className="mask"><span className="line">Make room for</span></span><span className="mask"><span className="line">better living.</span></span>
              </h2><a className="foot-cta" href="#shop" data-scroll="shop">Explore the collection →</a>
            </div>
            <div className="foot-cols">
              <div>
                <h4>Shop</h4>
                <ul>
                  <li><a href="#">Seating</a></li>
                  <li><a href="#">Tables</a></li>
                  <li><a href="#">Lighting</a></li>
                  <li><a href="#">Objects</a></li>
                  <li><a href="#shop" data-scroll="shop">All products</a></li>
                </ul>
              </div>
              <div>
                <h4>MØBEL</h4>
                <ul>
                  <li><a href="#story" data-scroll="story">Our story</a></li>
                  <li><a href="#materials" data-scroll="materials">Materials</a></li>
                  <li><a href="#gallery" data-scroll="gallery">Spaces</a></li>
                  <li><a href="#">Journal</a></li>
                  <li><a href="#catalog" data-scroll="catalog">Catalogues</a></li>
                </ul>
              </div>
              <div>
                <h4>Service</h4>
                <ul>
                  <li><a href="#">Delivery</a></li>
                  <li><a href="#">Returns</a></li>
                  <li><a href="#">Care guide</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <div className="news">
                <h4>Newsletter</h4>
                <p>Objects, spaces and stories from MØBEL.</p>
                <form data-aura-onsubmit="return false">
                  <input type="email" placeholder="Email address" aria-label="Email address" /><button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
            <div className="foot-mark" aria-hidden="true">MØBEL</div>
            <div className="foot-bottom"><span>© 2026 MØBEL · Copenhagen</span><span>Privacy · Terms · Imprint</span></div>
          </div>
        </footer>
        <div className="nav" id="nav">
          <div className="brand">MØBEL</div>
          <div className="links"><span><b>Collection</b></span><span>Materials</span><span>Showrooms</span><span>Journal</span>
          </div>
        </div>
        <div id="ui">
          <div className="vig"></div>
          <div className="hero" id="hero">
            <div className="eyebrow">The Living Collection / No. 01</div>
            <h1><span className="l1">Scroll to shape</span><span className="l2">the space</span></h1>
            <p>An empty room and north light. Keep scrolling and the collection arrives, one piece at a time.</p>
            <div className="hint"><span>Scroll</span><i></i></div>
          </div>
          <div className="cap" data-a="0.04" data-b="0.19">
            <div className="n">01 &nbsp;/&nbsp; Ull</div>
            <h2>Ull rug</h2>
            <p>Undyed New Zealand wool in a low, hand-loomed flat weave. It grounds the room before anything else arrives.</p>
          </div>
          <div className="cap" data-a="0.19" data-b="0.38">
            <div className="n">02 &nbsp;/&nbsp; Havn</div>
            <h2>Havn sectional</h2>
            <p>A low modular sofa in washed linen. Joined by the Bue swivel chair in vegetable-tanned leather and the Sten
              coffee table in blackened oak.</p>
          </div>
          <div className="cap" data-a="0.38" data-b="0.56">
            <div className="n">03 &nbsp;/&nbsp; Tavle</div>
            <h2>Tavle dining</h2>
            <p>Solid walnut for six, the Stol chair in charcoal wool, and the Hylle console with its stoneware lamp along the
              wall.</p>
          </div>
          <div className="cap" data-a="0.56" data-b="0.78">
            <div className="n">04 &nbsp;/&nbsp; Glød</div>
            <h2>Glød pendants</h2>
            <p>Mouth-blown glass, dimmed to evening. Add something green, and the collection is complete.</p>
          </div>
          <div className="cap" data-ta="0.70" data-tb="0.9">
            <div className="n">05 &nbsp;/&nbsp; Hvile</div>
            <h2>Hvile bed</h2>
            <p>Upstairs, the Hvile platform bed in washed linen, the Natt side table with its stoneware lamp, and the Bue
              chair turned to the garden.</p>
          </div>
          <div className="index" id="index"><span id="idxn">00 / 05</span>
            <div className="bar"><i id="idxbar"></i></div>
          </div>
          <div className="outro" id="outro">
            <h3>MØBEL</h3>
            <p>The Living Collection. Designed in Copenhagen, made to last.</p><a className="cta" href="#">Explore the
              collection</a>
          </div>
        </div>
    </div>
  );
}
