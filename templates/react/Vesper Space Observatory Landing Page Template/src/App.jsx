import { useEffect, useLayoutEffect } from "react";

const sourceScripts = [
  {
    "src": "https://cdn.jsdelivr.net/npm/lenis@1/dist/lenis.min.js",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/SplitText.min.js",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": ""
  },
  {
    "src": "https://cdn.tailwindcss.com",
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
    "type": "module",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\nimport * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js';\n\n/* ===== merged from js/scene.js ===== */\n/* ============================================================\n   VESPER — WebGL layer\n   One scene, three actors:\n\n   1. STARFIELD — a single THREE.Points cloud at multiple depths.\n      The \"flying forward\" trick lives in the vertex shader:\n        z = mod(z0 + uScroll, DEPTH) - DEPTH\n      Scrolling increases uScroll, every star slides toward the\n      camera and wraps back to the far plane — an infinite field\n      with zero per-frame CPU work. Perspective gives free\n      parallax: near stars sweep fast, far stars crawl.\n\n   2. NEBULA — one large plane at the back of the frustum running\n      a cheap fbm (fractal noise) fragment shader, blending the\n      magenta→cyan palette over a deep-indigo wash. Octave count\n      drops on mobile (see OCTAVES define).\n\n   3. FOCAL STAR — an additive radial-glow billboard with\n      diffraction spikes, used by the pinned \"arrival\" section.\n      main.js drives its intensity via setFocal(0..1).\n\n   Nothing here owns the clock or scroll: main.js calls render()\n   from the GSAP ticker (same rAF as Lenis) and feeds scroll\n   progress in — one source of truth for time and position.\n   ============================================================ */\n\nconst DEPTH = 720;        // how deep the starfield extends behind the camera\nconst SPREAD_X = 340;     // half-width of the field\nconst SPREAD_Y = 220;     // half-height of the field\n\nfunction createScene({ canvas, config, isMobile, reduced }) {\n  const colorA = new THREE.Color(config.nebula.colorA); // magenta\n  const colorB = new THREE.Color(config.nebula.colorB); // cyan\n\n  const renderer = new THREE.WebGLRenderer({\n    canvas,\n    antialias: false,\n    powerPreference: 'high-performance',\n  });\n  renderer.setClearColor(0x050507, 1);\n  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));\n  renderer.setSize(window.innerWidth, window.innerHeight);\n\n  const scene = new THREE.Scene();\n  const camera = new THREE.PerspectiveCamera(\n    60, window.innerWidth / window.innerHeight, 0.1, 1500\n  );\n  camera.position.set(0, 0, 0);\n\n  /* Targets set from main.js; render() eases toward them every\n     frame so everything inherits the same weighted, drifting feel. */\n  const target = { scroll: 0, focal: 0, fov: 60, px: 0, py: 0 };\n  const current = { scroll: 0, focal: 0, fov: 60, px: 0, py: 0 };\n\n  /* ---------------- 1. Starfield ---------------- */\n\n  const starCount = isMobile ? config.stars.mobile : config.stars.desktop;\n  const positions = new Float32Array(starCount * 3);\n  const sizes = new Float32Array(starCount);\n  const shades = new Float32Array(starCount);  // 0..1 → magenta-ish .. cyan-ish tint\n  const phases = new Float32Array(starCount);  // twinkle offset\n\n  for (let i = 0; i < starCount; i++) {\n    positions[i * 3 + 0] = (Math.random() * 2 - 1) * SPREAD_X;\n    positions[i * 3 + 1] = (Math.random() * 2 - 1) * SPREAD_Y;\n    positions[i * 3 + 2] = Math.random() * DEPTH; // stored 0..DEPTH, shader maps to -DEPTH..0\n    // mostly faint stars, a few bright ones\n    sizes[i] = Math.random() < 0.06\n      ? 1.8 + Math.random() * 1.6\n      : 0.5 + Math.random() * 1.2;\n    shades[i] = Math.random();\n    phases[i] = Math.random();\n  }\n\n  const starGeo = new THREE.BufferGeometry();\n  starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));\n  starGeo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));\n  starGeo.setAttribute('aShade', new THREE.BufferAttribute(shades, 1));\n  starGeo.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));\n\n  const starMat = new THREE.ShaderMaterial({\n    transparent: true,\n    depthWrite: false,\n    blending: THREE.AdditiveBlending,\n    uniforms: {\n      uTime: { value: 0 },\n      uScroll: { value: 0 },\n      uDepth: { value: DEPTH },\n      uPixelRatio: { value: renderer.getPixelRatio() },\n      uTintA: { value: colorA },\n      uTintB: { value: colorB },\n    },\n    vertexShader: /* glsl */ `\n      uniform float uTime;\n      uniform float uScroll;\n      uniform float uDepth;\n      uniform float uPixelRatio;\n      uniform vec3 uTintA;\n      uniform vec3 uTintB;\n      attribute float aSize;\n      attribute float aShade;\n      attribute float aPhase;\n      varying float vAlpha;\n      varying vec3 vColor;\n\n      void main() {\n        vec3 pos = position;\n        // Infinite forward drift: wrap z through [-DEPTH, 0)\n        pos.z = mod(position.z + uScroll, uDepth) - uDepth;\n\n        vec4 mv = modelViewMatrix * vec4(pos, 1.0);\n        float dist = -mv.z;\n\n        // Perspective point size (clamped so far stars stay visible)\n        gl_PointSize = max(aSize * uPixelRatio * (320.0 / dist), 1.0);\n\n        // Twinkle + fade in at the far plane, fade out passing the camera\n        float twinkle = 0.78 + 0.22 * sin(uTime * 1.6 + aPhase * 6.2831);\n        float farFade  = smoothstep(uDepth, uDepth - 180.0, dist);\n        float nearFade = smoothstep(2.0, 60.0, dist);\n        vAlpha = twinkle * farFade * nearFade;\n\n        // Pale starlight with a faint magenta/cyan cast per star\n        vec3 white = vec3(0.91, 0.93, 0.96);\n        vec3 tint = mix(uTintA, uTintB, step(0.5, aShade));\n        vColor = mix(white, tint, abs(aShade * 2.0 - 1.0) * 0.35);\n\n        gl_Position = projectionMatrix * mv;\n      }\n    `,\n    fragmentShader: /* glsl */ `\n      varying float vAlpha;\n      varying vec3 vColor;\n\n      void main() {\n        // Soft round point: dim halo + hot core\n        float d = length(gl_PointCoord - 0.5);\n        float a = smoothstep(0.5, 0.08, d) * 0.5 + smoothstep(0.16, 0.0, d);\n        gl_FragColor = vec4(vColor, a * vAlpha);\n      }\n    `,\n  });\n\n  const stars = new THREE.Points(starGeo, starMat);\n  stars.frustumCulled = false; // shader moves verts; bounding box is meaningless\n  scene.add(stars);\n\n  /* ---------------- 2. Nebula backdrop ---------------- */\n\n  const nebulaMat = new THREE.ShaderMaterial({\n    depthWrite: false,\n    defines: { OCTAVES: isMobile ? 3 : 5 },\n    uniforms: {\n      uTime: { value: 0 },\n      uScroll: { value: 0 },\n      uColorA: { value: colorA },\n      uColorB: { value: colorB },\n      uIntensity: { value: config.nebula.intensity },\n    },\n    vertexShader: /* glsl */ `\n      varying vec2 vUv;\n      void main() {\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n      }\n    `,\n    fragmentShader: /* glsl */ `\n      varying vec2 vUv;\n      uniform float uTime;\n      uniform float uScroll;\n      uniform vec3 uColorA;\n      uniform vec3 uColorB;\n      uniform float uIntensity;\n\n      float hash(vec2 p) {\n        p = fract(p * vec2(234.34, 435.345));\n        p += dot(p, p + 34.23);\n        return fract(p.x * p.y);\n      }\n      float noise(vec2 p) {\n        vec2 i = floor(p), f = fract(p);\n        f = f * f * (3.0 - 2.0 * f);\n        return mix(\n          mix(hash(i),                 hash(i + vec2(1.0, 0.0)), f.x),\n          mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),\n          f.y\n        );\n      }\n      float fbm(vec2 p) {\n        float v = 0.0, amp = 0.5;\n        for (int i = 0; i < OCTAVES; i++) {\n          v += amp * noise(p);\n          p *= 2.03;\n          amp *= 0.5;\n        }\n        return v;\n      }\n\n      void main() {\n        // Domain-warped fbm: n1 distorts the lookup of n2 → wispy folds.\n        // uTime drifts the cloud, uScroll pushes it slowly as you travel.\n        vec2 p = vUv * 3.0 + vec2(uTime * 0.012, uTime * -0.008) + uScroll * 0.0008;\n        float n1 = fbm(p);\n        float n2 = fbm(p * 1.8 + n1 * 1.6 + vec2(4.7, 9.2));\n\n        vec3 nebula = mix(uColorA, uColorB, smoothstep(0.3, 0.8, n2));\n        float density = smoothstep(0.42, 0.95, (n1 + n2) * 0.55);\n        float mask = smoothstep(1.25, 0.25, length(vUv - 0.5) * 2.0); // vignette\n\n        vec3 col = vec3(0.02, 0.02, 0.028);              // void black base\n        col += vec3(0.106, 0.078, 0.22) * 0.5 * mask;    // deep indigo wash\n        col += nebula * density * mask * uIntensity;     // the cloud itself\n\n        gl_FragColor = vec4(col, 1.0);\n      }\n    `,\n  });\n\n  const nebula = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), nebulaMat);\n  nebula.position.z = -(DEPTH + 40);\n  nebula.renderOrder = -1;\n  scene.add(nebula);\n\n  // Scale the plane to cover the frustum at its depth (1.6x margin\n  // covers camera sway and the arrival fov change without rescaling).\n  function fitNebula() {\n    const dist = DEPTH + 40;\n    const h = 2 * Math.tan(THREE.MathUtils.degToRad(60) / 2) * dist * 1.6;\n    nebula.scale.set(h * camera.aspect, h, 1);\n  }\n\n  /* ---------------- 3. Focal star (arrival section) ---------------- */\n\n  const focalMat = new THREE.ShaderMaterial({\n    transparent: true,\n    depthWrite: false,\n    blending: THREE.AdditiveBlending,\n    uniforms: {\n      uTime: { value: 0 },\n      uFocal: { value: 0 },\n      uColorA: { value: colorA },\n      uColorB: { value: colorB },\n    },\n    vertexShader: /* glsl */ `\n      varying vec2 vUv;\n      void main() {\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n      }\n    `,\n    fragmentShader: /* glsl */ `\n      varying vec2 vUv;\n      uniform float uTime;\n      uniform float uFocal;\n      uniform vec3 uColorA;\n      uniform vec3 uColorB;\n\n      void main() {\n        vec2 q = vUv - 0.5;\n        float d = length(q) * 2.0;\n        float pulse = 1.0 + 0.05 * sin(uTime * 1.4);\n\n        float core = smoothstep(0.16 * pulse, 0.0, d);     // white-hot center\n        float halo = pow(max(0.0, 1.0 - d), 2.6);          // soft falloff\n        float spikeH = pow(max(0.0, 1.0 - abs(q.y) * 26.0), 3.0) * pow(max(0.0, 1.0 - d), 1.4);\n        float spikeV = pow(max(0.0, 1.0 - abs(q.x) * 26.0), 3.0) * pow(max(0.0, 1.0 - d), 1.4) * 0.6;\n\n        vec3 col = mix(uColorB, vec3(1.0), core);\n        col += uColorA * halo * 0.45;\n\n        float a = (core * 1.2 + halo * 0.8 + (spikeH + spikeV) * 0.5) * uFocal;\n        gl_FragColor = vec4(col, a);\n      }\n    `,\n  });\n\n  const focal = new THREE.Mesh(new THREE.PlaneGeometry(90, 90), focalMat);\n  focal.position.set(0, 3, -300);\n  focal.visible = false;\n  scene.add(focal);\n\n  /* ---------------- Resize / render ---------------- */\n\n  function resize() {\n    camera.aspect = window.innerWidth / window.innerHeight;\n    camera.updateProjectionMatrix();\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    starMat.uniforms.uPixelRatio.value = renderer.getPixelRatio();\n    fitNebula();\n  }\n  window.addEventListener('resize', resize);\n  fitNebula();\n\n  const lerp = (a, b, t) => a + (b - a) * t;\n\n  function render(time) {\n    // Ease current values toward targets — this is what makes the\n    // camera feel heavy and weightless at once.\n    current.scroll = lerp(current.scroll, target.scroll, 0.1);\n    current.focal = lerp(current.focal, target.focal, 0.09);\n    current.fov = lerp(current.fov, target.fov, 0.07);\n    current.px = lerp(current.px, target.px, 0.045);\n    current.py = lerp(current.py, target.py, 0.045);\n\n    const t = reduced ? 0 : time; // reduced motion: freeze the drift\n    starMat.uniforms.uTime.value = t;\n    starMat.uniforms.uScroll.value = current.scroll;\n    nebulaMat.uniforms.uTime.value = t;\n    nebulaMat.uniforms.uScroll.value = current.scroll;\n    focalMat.uniforms.uTime.value = t;\n    focalMat.uniforms.uFocal.value = current.focal;\n    focal.visible = current.focal > 0.01;\n    focal.scale.setScalar(0.55 + current.focal * 0.75);\n\n    if (!reduced) {\n      camera.position.x = current.px * 6;\n      camera.position.y = current.py * -3.5;\n      camera.lookAt(0, 0, -220);\n    }\n    if (Math.abs(current.fov - camera.fov) > 0.01) {\n      camera.fov = current.fov;\n      camera.updateProjectionMatrix();\n    }\n\n    renderer.render(scene, camera);\n  }\n\n  return {\n    render,\n    /** scroll distance travelled into the field (world units) */\n    setScroll: (v) => { target.scroll = v; },\n    /** arrival glow intensity 0..1 */\n    setFocal: (v) => { target.focal = v; },\n    /** camera fov — narrowing it reads as \"approaching\" */\n    setFov: (v) => { target.fov = v; },\n    /** normalized pointer (-1..1) for subtle camera sway */\n    setPointer: (x, y) => { target.px = x; target.py = y; },\n  };\n}\n\n\n/* ===== merged from js/main.js ===== */\n/* ============================================================\n   VESPER — orchestration\n   Owns: Lenis↔ScrollTrigger sync, the intro loader, every GSAP\n   timeline, DOM parallax stars, the magnetic button, the cursor.\n   The WebGL scene (js/scene.js) is a dumb renderer — this file\n   feeds it scroll progress / focal intensity / fov.\n   ============================================================ */\n\n/* ====================== TUNING ======================\n   Everything you'd want to tweak lives here.            */\nconst CONFIG = {\n  // --- Scroll weight: higher = heavier, more \"drifting in vacuum\".\n  //     1.0 feels normal, 2.2 feels syrupy. ---\n  scrollWeight: 1.7,\n\n  // --- Lenis easing curve (expo-style ease-out = weighted glide) ---\n  scrollEasing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),\n\n  // --- One easing personality for all GSAP reveals ---\n  ease: 'power3.out',      // standard reveals\n  easeLong: 'expo.out',    // hero / big headline reveals\n\n  // --- Particle counts (mobile heavily reduced) ---\n  stars: { desktop: 6000, mobile: 1400 },\n\n  // --- World units of forward travel over the full page scroll.\n  //     Raised for the longer page so the starfield keeps flowing. ---\n  travel: 1100,\n\n  // --- Nebula shader palette + strength (also tints stars/focal glow) ---\n  nebula: {\n    colorA: '#FF4D9D',   // magenta\n    colorB: '#46E5FF',   // cyan\n    intensity: 0.38,     // 0 = off, 0.6 = loud\n  },\n};\n/* ==================================================== */\n\nconst REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;\nconst IS_MOBILE =\n  window.matchMedia('(max-width: 768px)').matches ||\n  window.matchMedia('(pointer: coarse)').matches;\n\ngsap.registerPlugin(ScrollTrigger, SplitText);\ngsap.defaults({ ease: CONFIG.ease });\n\nwindow.__vesperBooted = true; // tells the inline fail-safe the scripts are alive\n\n/* ---------------- WebGL scene ---------------- */\n\n// Isolated: if WebGL is unavailable, the starfield is the centrepiece — but\n// the page (scroll, reveals) must still work, so fall back to a no-op stub.\nlet sceneApi;\ntry {\n  sceneApi = createScene({\n    canvas: document.getElementById('webgl'),\n    config: CONFIG,\n    isMobile: IS_MOBILE,\n    reduced: REDUCED,\n  });\n} catch (err) {\n  console.warn('[VESPER] WebGL unavailable — continuing without the starfield.', err);\n  document.getElementById('webgl').style.display = 'none';\n  sceneApi = { render() {}, setScroll() {}, setFocal() {}, setFov() {}, setPointer() {} };\n}\n\n/* ============================================================\n   LENIS ↔ SCROLLTRIGGER SYNC (the critical bit)\n\n   One scroll position, one clock:\n   - Lenis animates the *native* scroll position with a weighted\n     easing curve.\n   - Every time Lenis actually moves the page, it tells\n     ScrollTrigger to re-measure (`lenis.on('scroll', ScrollTrigger.update)`).\n   - Lenis's own rAF is never used; instead GSAP's ticker drives\n     `lenis.raf()`, so Lenis, every tween, and the WebGL render\n     all step inside the SAME requestAnimationFrame.\n   - lagSmoothing(0) stops GSAP from \"catching up\" after a janky\n     frame, which would cause a visible scroll jump.\n\n   With reduced motion we skip Lenis entirely — ScrollTrigger\n   falls back to native scroll and everything still works.\n   ============================================================ */\n\nlet lenis = null;\n\nif (!REDUCED) {\n  lenis = new Lenis({\n    duration: CONFIG.scrollWeight,\n    easing: CONFIG.scrollEasing,\n    smoothWheel: true,\n  });\n\n  lenis.on('scroll', ScrollTrigger.update);\n\n  gsap.ticker.add((time) => {\n    lenis.raf(time * 1000); // GSAP time is seconds, Lenis wants ms\n  });\n\n  gsap.ticker.lagSmoothing(0);\n\n  lenis.stop(); // page is frozen until the loader finishes\n\n  window.__lenis = lenis; // debug handle (lets tooling drive the smooth scroll)\n}\n\n// The WebGL render also runs on the GSAP ticker → same frame as Lenis.\ngsap.ticker.add((time) => sceneApi.render(time));\n\n/* ---------------- Scroll → scene ----------------\n   Map total page progress (0..1) to forward travel in world\n   units. The scene lerps toward it, adding extra drift on top\n   of Lenis's own easing. */\n\nif (!REDUCED) {\n  ScrollTrigger.create({\n    start: 0,\n    end: () => ScrollTrigger.maxScroll(window),\n    onUpdate: (self) => sceneApi.setScroll(self.progress * CONFIG.travel),\n  });\n\n  // Subtle camera sway from the pointer (desktop only)\n  if (!IS_MOBILE) {\n    window.addEventListener('mousemove', (e) => {\n      sceneApi.setPointer(\n        (e.clientX / window.innerWidth) * 2 - 1,\n        (e.clientY / window.innerHeight) * 2 - 1\n      );\n    });\n  }\n}\n\n/* SplitText measures the DOM — wait for final font metrics before\n   splitting anything (top-level await; this is an ES module). The\n   loader overlay is plain black, so the beat of delay is invisible. */\nawait document.fonts.ready;\n\n/* ============================================================\n   1. INTRO LOADER\n   Counter 000→100 over the void with a single point of light.\n   On completion the dot flares and expands \"into\" the starfield\n   (it scales up while the black overlay fades, revealing the\n   already-rendering WebGL field beneath), then the hero\n   headline assembles.\n   ============================================================ */\n\nconst loaderEl = document.querySelector('.loader');\nconst countEl = document.querySelector('.loader-count');\n\n// Pre-split the hero headline so chars exist (hidden) before reveal.\nconst heroSplit = new SplitText('.hero-title', { type: 'chars' });\ngsap.set(heroSplit.chars, { autoAlpha: 0 });\ngsap.set(['.hero-sub', '.scroll-cue'], { autoAlpha: 0 });\n\nfunction revealHero() {\n  const tl = gsap.timeline();\n  if (REDUCED) {\n    tl.to(heroSplit.chars, { autoAlpha: 1, duration: 0.8 })\n      .to(['.hero-sub', '.scroll-cue'], { autoAlpha: 1, duration: 0.8 }, '<');\n    return tl;\n  }\n  // Constellation assembly: letters condense out of the dark in a\n  // random order — blur + scale collapsing into place.\n  tl.fromTo(\n    heroSplit.chars,\n    { autoAlpha: 0, scale: 1.55, filter: 'blur(14px)' },\n    {\n      autoAlpha: 1,\n      scale: 1,\n      filter: 'blur(0px)',\n      duration: 1.7,\n      ease: CONFIG.easeLong,\n      stagger: { each: 0.07, from: 'random' },\n    }\n  )\n    .to('.hero-sub', { autoAlpha: 1, duration: 1.2 }, '-=0.9')\n    .to('.scroll-cue', { autoAlpha: 1, duration: 1.2 }, '-=0.8');\n  return tl;\n}\n\nfunction runLoader() {\n  const done = () => {\n    loaderEl.style.display = 'none';\n    document.body.classList.remove('loading');\n    lenis?.start();\n    ScrollTrigger.refresh();\n  };\n\n  if (REDUCED) {\n    countEl.textContent = '100';\n    gsap.to(loaderEl, { autoAlpha: 0, duration: 0.5, onComplete: done });\n    revealHero();\n    return;\n  }\n\n  const counter = { v: 0 };\n  const tl = gsap.timeline();\n\n  tl\n    // count up while the lone point of light idles\n    .to(counter, {\n      v: 100,\n      duration: 2.2,\n      ease: 'power2.inOut',\n      onUpdate: () => {\n        countEl.textContent = String(Math.round(counter.v)).padStart(3, '0');\n      },\n    })\n    .to(['.loader-count', '.loader-label'], { autoAlpha: 0, duration: 0.5 })\n    // the point flares...\n    .to('.loader-dot', { scale: 2.4, duration: 0.55, ease: 'power3.in' }, '<')\n    // ...then expands into the starfield as the void overlay lifts\n    .to('.loader-dot', { scale: 40, autoAlpha: 0, duration: 1.5, ease: 'expo.inOut' })\n    .to(loaderEl, { autoAlpha: 0, duration: 1.1, ease: 'power2.out', onComplete: done }, '<40%')\n    .add(revealHero(), '-=1.0');\n}\n\n/* ============================================================\n   2. HERO — scrub the title away as you leave the section\n   ============================================================ */\n\nif (!REDUCED) {\n  gsap.to('.hero-inner', {\n    yPercent: -28,\n    autoAlpha: 0,\n    ease: 'none',\n    scrollTrigger: {\n      trigger: '.hero',\n      start: 'top top',\n      end: 'bottom top',\n      scrub: true,\n    },\n  });\n  gsap.to('.scroll-cue', {\n    autoAlpha: 0,\n    ease: 'none',\n    scrollTrigger: {\n      trigger: '.hero',\n      start: 'top top',\n      end: '40% top',\n      scrub: true,\n    },\n  });\n}\n\n/* ============================================================\n   3. PINNED ARRIVAL\n   The section pins for 160% of viewport height. While pinned\n   (scrubbed to scroll):\n     0.00–0.50  focal star fades in & swells, fov narrows\n                60→47 (narrowing fov = the approach)\n     0.25–0.65  the text line reveals word by word\n     0.65–0.80  hold — let it breathe\n     0.80–1.00  text drifts off, glow settles to an ember,\n                fov relaxes, scroll resumes naturally\n   ============================================================ */\n\nconst arrivalSplit = new SplitText('.arrival-line', { type: 'words' });\n\nif (REDUCED) {\n  gsap.from(arrivalSplit.words, {\n    autoAlpha: 0,\n    duration: 0.8,\n    scrollTrigger: { trigger: '.arrival', start: 'top 60%' },\n    onStart: () => sceneApi.setFocal(0.55),\n  });\n} else {\n  const focal = { v: 0 };\n  const fov = { v: 60 };\n\n  gsap\n    .timeline({\n      defaults: { ease: 'none' },\n      scrollTrigger: {\n        trigger: '.arrival',\n        start: 'top top',\n        end: '+=160%',\n        pin: true,\n        scrub: true,\n        anticipatePin: 1,\n      },\n    })\n    .to(focal, { v: 1, duration: 0.5, onUpdate: () => sceneApi.setFocal(focal.v) }, 0)\n    .to(fov, { v: 47, duration: 0.5, onUpdate: () => sceneApi.setFov(fov.v) }, 0)\n    .fromTo(\n      arrivalSplit.words,\n      { autoAlpha: 0, y: 26, filter: 'blur(6px)' },\n      {\n        autoAlpha: 1, y: 0, filter: 'blur(0px)',\n        duration: 0.4, stagger: 0.05, ease: CONFIG.ease,\n      },\n      0.25\n    )\n    .to({}, { duration: 0.15 }) // hold\n    .to('.arrival-line', { autoAlpha: 0, y: -24, duration: 0.2 })\n    .to(focal, { v: 0.16, duration: 0.2, onUpdate: () => sceneApi.setFocal(focal.v) }, '<')\n    .to(fov, { v: 60, duration: 0.2, onUpdate: () => sceneApi.setFov(fov.v) }, '<');\n}\n\n/* ============================================================\n   4. CONTENT PANELS — reveals + DOM parallax depth\n   ============================================================ */\n\ndocument.querySelectorAll('.panel').forEach((panel) => {\n  const title = panel.querySelector('.panel-title');\n\n  const mask = panel.querySelector('.img-mask');\n  const plate = panel.querySelector('.img-plate');\n\n  if (REDUCED) {\n    gsap.from(panel.querySelectorAll('.panel-label, .panel-title, .panel-body, .panel-figure'), {\n      autoAlpha: 0,\n      duration: 0.8,\n      stagger: 0.15,\n      scrollTrigger: { trigger: panel, start: 'top 65%' },\n    });\n    return;\n  }\n\n  // Masked line reveal: SplitText wraps each line in a clipping\n  // wrapper (mask:'lines'), lines slide up out of the mask.\n  const split = new SplitText(title, { type: 'lines', mask: 'lines' });\n  gsap.from(split.lines, {\n    yPercent: 115,\n    duration: 1.5,\n    ease: CONFIG.easeLong,\n    stagger: 0.1,\n    scrollTrigger: { trigger: panel, start: 'top 68%' },\n  });\n\n  gsap.from(panel.querySelectorAll('.panel-label, .panel-body'), {\n    autoAlpha: 0,\n    y: 34,\n    duration: 1.4,\n    stagger: 0.15,\n    scrollTrigger: { trigger: panel, start: 'top 62%' },\n  });\n\n  // Image plate: clip-path wipe up while the photo settles 1.3 → 1.\n  if (mask && plate) {\n    gsap.timeline({ scrollTrigger: { trigger: panel, start: 'top 72%' } })\n      .fromTo(mask,\n        { clipPath: 'inset(0% 0% 100% 0%)' },\n        { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.7, ease: CONFIG.easeLong })\n      .fromTo(plate, { scale: 1.3 }, { scale: 1, duration: 2.0, ease: CONFIG.easeLong }, 0);\n    gsap.from(panel.querySelector('figcaption'), {\n      autoAlpha: 0, y: 18, duration: 1.1,\n      scrollTrigger: { trigger: panel, start: 'top 58%' },\n    });\n  }\n});\n\n/* ---------------- DOM parallax star layers ----------------\n   Three layers per panel at different \"depths\". Each layer is\n   scrubbed over a different y-distance while the panel crosses\n   the viewport — foreground stars (bigger, glowing) travel ~3x\n   farther than background ones. Combined with the WebGL field\n   this is what sells real depth. */\n\nif (!REDUCED) {\n  // [depth, star count] — depth 3 = foreground (fast, bright)\n  const LAYERS = IS_MOBILE\n    ? [[1, 4], [2, 4], [3, 3]]\n    : [[1, 9], [2, 8], [3, 6]];\n\n  document.querySelectorAll('.parallax-field').forEach((field) => {\n    LAYERS.forEach(([depth, count]) => {\n      const layer = document.createElement('div');\n      layer.className = 'p-layer';\n\n      for (let i = 0; i < count; i++) {\n        const s = document.createElement('span');\n        const size = depth === 3 ? 2.5 + Math.random() * 1.5 : depth * 0.8 + Math.random();\n        s.className = 'p-star' + (depth === 3 ? ' p-star--near' : '');\n        s.style.cssText = `\n          left:${Math.random() * 100}%;\n          top:${Math.random() * 100}%;\n          width:${size}px; height:${size}px;\n          opacity:${0.25 + (depth / 3) * 0.6};\n        `;\n        layer.appendChild(s);\n      }\n      field.appendChild(layer);\n\n      gsap.fromTo(\n        layer,\n        { y: depth * 70 },\n        {\n          y: -depth * 150, // foreground travels farthest = moves fastest\n          ease: 'none',\n          scrollTrigger: {\n            trigger: field.closest('.panel'),\n            start: 'top bottom',\n            end: 'bottom top',\n            scrub: true,\n          },\n        }\n      );\n    });\n  });\n}\n\n/* ============================================================\n   VELOCITY MARQUEE\n   A base loop drifts the ticker slowly (−50% = one full set, so\n   the seam is invisible). Every Lenis scroll event slams the\n   loop's timeScale to a velocity-scaled boost (and flips its\n   sign with scroll direction), then eases back to a gentle idle\n   drift — so the ticker \"reacts\" to how hard you scroll.\n   ============================================================ */\n\nif (!REDUCED) {\n  const marqTrack = document.querySelector('.marquee-track');\n  if (marqTrack && lenis) {\n    const loop = gsap.to(marqTrack, {\n      xPercent: -50, repeat: -1, duration: 26, ease: 'none',\n    });\n    lenis.on('scroll', ({ velocity = 0 }) => {\n      const dir = velocity >= 0 ? 1 : -1;\n      const boost = dir * (1 + Math.min(Math.abs(velocity) * 0.5, 7));\n      loop.timeScale(boost);                                   // snap to scroll speed\n      gsap.to(loop, { timeScale: dir, duration: 1.0, ease: 'power2.out', overwrite: true }); // ease back to idle drift\n    });\n  }\n}\n\n/* ============================================================\n   STATS READOUT — numbers count up once, on enter\n   ============================================================ */\n\ngsap.utils.toArray('.stat-num').forEach((el) => {\n  const to = parseFloat(el.dataset.to);\n  const suffix = (el.dataset.suffix || '').replace(/\\s/g, '\\u00A0');\nconst fmt = (n) => Math.round(n).toLocaleString('en-US') + suffix;\n\n  if (REDUCED) { el.textContent = fmt(to); return; }\n\n  const obj = { v: 0 };\n  ScrollTrigger.create({\n    trigger: el, start: 'top 88%', once: true,\n    onEnter: () => gsap.to(obj, {\n      v: to, duration: 2.2, ease: 'power3.out',\n      onUpdate: () => { el.textContent = fmt(obj.v); },\n    }),\n  });\n});\n\ngsap.from('.stats-label', {\n  autoAlpha: 0, y: 20, duration: 1,\n  scrollTrigger: { trigger: '.stats', start: 'top 78%' },\n});\ngsap.from('.stats .stat', {\n  autoAlpha: 0, y: 30, duration: REDUCED ? 0.6 : 1.2, stagger: 0.1,\n  scrollTrigger: { trigger: '.stats', start: 'top 72%' },\n});\n\n/* ============================================================\n   DEEP-FIELD GALLERY — horizontal scroll (the signature moment)\n   The track is wider than the viewport; ScrollTrigger pins the\n   section and scrubs the track's x from 0 to −(trackWidth −\n   viewport), turning vertical scroll into a sideways pan. On\n   mobile / reduced motion it falls back to a vertical stack.\n   ============================================================ */\n\nconst gallery = document.querySelector('.gallery');\nconst galleryTrack = document.querySelector('.gallery-track');\n\nif (gallery && galleryTrack) {\n  if (REDUCED || IS_MOBILE) {\n    gallery.classList.add('gallery--stack');\n    gsap.utils.toArray('.gallery-intro, .gallery .card').forEach((el) => {\n      gsap.from(el, {\n        autoAlpha: 0, y: REDUCED ? 0 : 50, duration: REDUCED ? 0.6 : 1.3,\n        scrollTrigger: { trigger: el, start: 'top 84%' },\n      });\n    });\n  } else {\n    const dist = () => galleryTrack.scrollWidth - window.innerWidth;\n    gsap.to(galleryTrack, {\n      x: () => -dist(),\n      ease: 'none',\n      scrollTrigger: {\n        trigger: gallery,\n        start: 'top top',\n        end: () => '+=' + dist(),\n        pin: true, scrub: true, anticipatePin: 1, invalidateOnRefresh: true,\n      },\n    });\n    gsap.from('.gallery-intro > *', {\n      autoAlpha: 0, y: 40, duration: 1.3, stagger: 0.12,\n      scrollTrigger: { trigger: gallery, start: 'top 70%' },\n    });\n  }\n}\n\n/* ============================================================\n   FULL-BLEED EXPANSE — clip-path reveal + parallax + caption\n   ============================================================ */\n\n{\n  const expTitle = document.querySelector('.expanse-title');\n  const expSplit = new SplitText(expTitle, { type: 'lines', mask: 'lines' });\n\n  if (REDUCED) {\n    gsap.set('.expanse-mask', { clearProps: 'clipPath' });\n  } else {\n    gsap.timeline({ scrollTrigger: { trigger: '.expanse', start: 'top 78%' } })\n      .fromTo('.expanse-mask',\n        { clipPath: 'inset(0% 0% 100% 0%)' },\n        { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.8, ease: CONFIG.easeLong })\n      .from(expSplit.lines, { yPercent: 115, duration: 1.4, stagger: 0.12, ease: CONFIG.easeLong }, '-=0.9')\n      .from('.expanse-meta', { autoAlpha: 0, y: 18, duration: 1 }, '-=0.6');\n\n    // slow vertical parallax of the image within its overscan\n    gsap.fromTo('.expanse-img',\n      { yPercent: -6 },\n      { yPercent: 6, ease: 'none',\n        scrollTrigger: { trigger: '.expanse', start: 'top bottom', end: 'bottom top', scrub: true } });\n  }\n}\n\n/* ============================================================\n   TRANSMISSION LOG — rows reveal as they enter\n   ============================================================ */\n\ngsap.from('.log-label', {\n  autoAlpha: 0, y: 20, duration: 1,\n  scrollTrigger: { trigger: '.log', start: 'top 78%' },\n});\ngsap.utils.toArray('.log-row').forEach((row) => {\n  gsap.from(row, {\n    autoAlpha: 0, y: 24, duration: REDUCED ? 0.5 : 1.1,\n    scrollTrigger: { trigger: row, start: 'top 90%' },\n  });\n});\n\n/* ============================================================\n   SCROLL-VELOCITY SKEW — images lean into fast scrolling.\n   ScrollTrigger.getVelocity() is fed through a clamp into a\n   weighted quickTo, so the skew snaps on and eases off.\n   ============================================================ */\n\nif (!REDUCED && !IS_MOBILE) {\n  const setters = gsap.utils.toArray('.card-plate, .img-plate, .expanse-img')\n    .map((el) => gsap.quickTo(el, 'skewY', { duration: 0.5, ease: 'power3' }));\n  const clamp = gsap.utils.clamp(-6, 6);\n  ScrollTrigger.create({\n    onUpdate: (self) => {\n      const s = clamp(self.getVelocity() / -380);\n      setters.forEach((set) => set(s));\n    },\n  });\n}\n\n/* ============================================================\n   SCROLL-PROGRESS METER — fixed hairline + percent readout\n   ============================================================ */\n\n{\n  const fill = document.querySelector('.progress-fill');\n  const pct = document.querySelector('.progress-pct');\n  const meter = document.querySelector('.progress');\n  if (fill && pct) {\n    ScrollTrigger.create({\n      start: 0, end: () => ScrollTrigger.maxScroll(window),\n      onUpdate: (self) => {\n        gsap.set(fill, { scaleX: self.progress });\n        pct.textContent = String(Math.round(self.progress * 100)).padStart(2, '0');\n      },\n    });\n    // fade the meter out over the footer so it never collides with the credit line\n    if (meter) {\n      ScrollTrigger.create({\n        trigger: '.footer', start: 'top 60%', end: 'top top',\n        onUpdate: (self) => gsap.set(meter, { autoAlpha: 1 - self.progress }),\n      });\n    }\n  }\n}\n\n/* ============================================================\n   5. FOOTER — magnetic button\n   The button is pulled toward the cursor inside a padded\n   hitbox; the label moves a touch less for a layered feel.\n   ============================================================ */\n\nconst wrap = document.querySelector('.magnetic-wrap');\nconst btn = document.querySelector('.magnetic-btn');\n\nif (!REDUCED && !IS_MOBILE) {\n  const xTo = gsap.quickTo(btn, 'x', { duration: 0.7, ease: CONFIG.ease });\n  const yTo = gsap.quickTo(btn, 'y', { duration: 0.7, ease: CONFIG.ease });\n  const lxTo = gsap.quickTo('.magnetic-label', 'x', { duration: 0.7, ease: CONFIG.ease });\n  const lyTo = gsap.quickTo('.magnetic-label', 'y', { duration: 0.7, ease: CONFIG.ease });\n\n  wrap.addEventListener('mousemove', (e) => {\n    const r = wrap.getBoundingClientRect();\n    const dx = e.clientX - (r.left + r.width / 2);\n    const dy = e.clientY - (r.top + r.height / 2);\n    xTo(dx * 0.4); yTo(dy * 0.4);\n    lxTo(dx * 0.12); lyTo(dy * 0.12);\n  });\n\n  wrap.addEventListener('mouseleave', () => {\n    xTo(0); yTo(0); lxTo(0); lyTo(0);\n  });\n}\n\n// \"Begin the journey\" → glide back to the top of the crossing\nbtn.addEventListener('click', () => {\n  if (lenis) lenis.scrollTo(0, { duration: 3, easing: CONFIG.scrollEasing });\n  else window.scrollTo({ top: 0, behavior: 'smooth' });\n});\n\n// Footer text reveal\ngsap.from(['.footer-kicker', '.footer-title', '.magnetic-wrap'], {\n  autoAlpha: 0,\n  y: REDUCED ? 0 : 40,\n  duration: REDUCED ? 0.8 : 1.5,\n  stagger: 0.12,\n  scrollTrigger: { trigger: '.footer', start: 'top 65%' },\n});\n\n/* ============================================================\n   CUSTOM CURSOR — glowing dot + lagging tail\n   Two quickTo pairs at different durations: the dot is tight,\n   the tail drags behind on the same weighted ease.\n   ============================================================ */\n\nif (window.matchMedia('(pointer: fine)').matches && !REDUCED) {\n  document.body.classList.add('has-cursor');\n\n  const dotX = gsap.quickTo('.cursor-dot', 'x', { duration: 0.16, ease: CONFIG.ease });\n  const dotY = gsap.quickTo('.cursor-dot', 'y', { duration: 0.16, ease: CONFIG.ease });\n  const tailX = gsap.quickTo('.cursor-tail', 'x', { duration: 0.65, ease: CONFIG.ease });\n  const tailY = gsap.quickTo('.cursor-tail', 'y', { duration: 0.65, ease: CONFIG.ease });\n\n  window.addEventListener('mousemove', (e) => {\n    dotX(e.clientX); dotY(e.clientY);\n    tailX(e.clientX); tailY(e.clientY);\n  });\n\n  // tail swells over interactive elements\n  document.querySelectorAll('a, button').forEach((el) => {\n    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));\n    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));\n  });\n}\n\n/* ---------------- Kickoff ---------------- */\n\nrunLoader();\n\n"
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n    setTimeout(function () {\n      if (!window.__vesperBooted) {\n        document.body.classList.remove('loading');\n        var l = document.querySelector('.loader');\n        if (l) l.style.display = 'none';\n        console.warn('[VESPER] scripts did not boot — revealed page via fail-safe.');\n      }\n    }, 6000);\n  "
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
      <canvas id="webgl" aria-hidden="true"></canvas>


        <div className="loader" aria-hidden="true">
          <div className="loader-dot"></div>
          <div className="loader-count mono">000</div>
          <div className="loader-label mono">CALIBRATING OPTICS</div>
        </div>

        <header className="site-head">
          <div className="logo">VESPER</div>
          <div className="head-meta mono">DEEP-FIELD OBSERVATORY&nbsp;&nbsp;·&nbsp;&nbsp;EST. 2147</div>
        </header>

        <main>


          <section className="hero" id="hero">
            <div className="hero-inner">
              <h1 className="hero-title">VESPER</h1>
              <p className="hero-sub mono">A LISTENING POST AT THE EDGE OF THE CARINA REACH</p>
            </div>
            <div className="scroll-cue mono">
              <span>SCROLL TO BEGIN THE CROSSING</span>
              <span className="cue-line"></span>
            </div>
          </section>


          <section className="marquee" aria-hidden="true">
            <div className="marquee-track">

              <div className="marquee-set">
                <span>CARINA REACH</span><i>✦</i><span>RA 10ʰ 45ᵐ</span><i>✦</i>
                <span>DEC −59° 41′</span><i>✦</i><span>400 LIGHT-YEARS OUT</span><i>✦</i>
                <span>DEEP FIELD ACTIVE</span><i>✦</i>
              </div>
              <div className="marquee-set">
                <span>CARINA REACH</span><i>✦</i><span>RA 10ʰ 45ᵐ</span><i>✦</i>
                <span>DEC −59° 41′</span><i>✦</i><span>400 LIGHT-YEARS OUT</span><i>✦</i>
                <span>DEEP FIELD ACTIVE</span><i>✦</i>
              </div>
            </div>
          </section>


          <section className="arrival" id="arrival">
            <p className="arrival-line">Four hundred light-years out,<br />the noise of home goes quiet.</p>
          </section>


          <section className="stats" id="readout">
            <p className="stats-label mono">01 — BY THE NUMBERS</p>
            <div className="stats-grid">
              <div className="stat">
                <span className="stat-num" data-to="1100">0</span>
                <span className="stat-cap mono">Cold mirror segments</span>
              </div>
              <div className="stat">
                <span className="stat-num" data-to="240000">0</span>
                <span className="stat-cap mono">Exposure hours logged</span>
              </div>
              <div className="stat">
                <span className="stat-num" data-to="11483">0</span>
                <span className="stat-cap mono">Galaxies in one frame</span>
              </div>
              <div className="stat">
                <span className="stat-num" data-to="400" data-suffix=" LY">0</span>
                <span className="stat-cap mono">Distance to the station</span>
              </div>
            </div>
          </section>


          <section className="panel" id="instrument">
            <div className="panel-grid">
              <div className="panel-inner">
                <span className="panel-label mono">02 — THE INSTRUMENT</span>
                <h2 className="panel-title">A mirror the size<br />of a small sea</h2>
                <p className="panel-body">
                  Eleven hundred cold hexagons, grown in orbit and folded open like a
                  night flower. Vesper does not take pictures. It holds its breath for
                  years at a time, and lets the ancient light walk in.
                </p>
              </div>
              <figure className="panel-figure">
                <div className="img-mask"><img className="img-plate" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d72837c-6294-419d-877a-ba6ea4eb2a70_1600w.png" alt="The primary mirror array" loading="lazy" /></div>
                <figcaption className="mono">PRIMARY ARRAY · 1,100 SEGMENTS</figcaption>
              </figure>
            </div>
            <div className="parallax-field" aria-hidden="true"></div>
          </section>

          <section className="panel panel--flip" id="deepfield">
            <div className="panel-grid">
              <div className="panel-inner">
                <span className="panel-label mono">03 — THE DEEP FIELD</span>
                <h2 className="panel-title">Stare at nothing.<br />It becomes everything.</h2>
                <p className="panel-body">
                  The patch of sky we watch is smaller than a grain of sand held at
                  arm's length — and inside it, eleven thousand galaxies are burning
                  quietly. Emptiness, it turns out, was never the right word.
                </p>
              </div>
              <figure className="panel-figure">
                <div className="img-mask"><img className="img-plate" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d6260a51-f244-4eb9-98f5-8c08c05cbe58_1600w.png" alt="A deep-field exposure" loading="lazy" /></div>
                <figcaption className="mono">FIELD 9 · 52,000 LY DEEP</figcaption>
              </figure>
            </div>
            <div className="parallax-field" aria-hidden="true"></div>
          </section>


          <section className="gallery" id="catalogue">
            <div className="gallery-track">
              <div className="gallery-intro">
                <span className="mono panel-label">04 — THE CATALOGUE</span>
                <h2 className="gallery-title">What the<br />silence holds</h2>
                <p className="gallery-hint mono">SCROLL TO PAN →</p>
              </div>

              <figure className="card" data-hover="">
                <div className="card-img"><img className="card-plate" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/38c7b74f-eab0-4d72-bd1d-38f275610390_1600w.png" alt="The Loom" loading="lazy" /></div>
                <figcaption><span className="card-name">The Loom</span><span className="card-meta mono">VX-2291 · 1,344 LY</span></figcaption>
              </figure>

              <figure className="card" data-hover="">
                <div className="card-img"><img className="card-plate" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7afbb74e-e716-4139-9356-09572511d3e9_1600w.png" alt="Pinwheel Deep" loading="lazy" /></div>
                <figcaption><span className="card-name">Pinwheel Deep</span><span className="card-meta mono">NGC-C7 · 21M LY</span></figcaption>
              </figure>

              <figure className="card" data-hover="">
                <div className="card-img"><img className="card-plate" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a72c12b-235b-4875-8cf0-128c0056eef2_1600w.png" alt="The Eye" loading="lazy" /></div>
                <figcaption><span className="card-name">The Eye</span><span className="card-meta mono">PN-7 · 655 LY</span></figcaption>
              </figure>

              <figure className="card" data-hover="">
                <div className="card-img"><img className="card-plate" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/02e44b57-332a-4e4c-96d3-cef8c655fee8_1600w.png" alt="Ember Cloud" loading="lazy" /></div>
                <figcaption><span className="card-name">Ember Cloud</span><span className="card-meta mono">CR-99 · 7,500 LY</span></figcaption>
              </figure>

              <figure className="card" data-hover="">
                <div className="card-img"><img className="card-plate" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d712e20-8e94-4d39-b838-3b29529a7db9_1600w.png" alt="The Halo" loading="lazy" /></div>
                <figcaption><span className="card-name">The Halo</span><span className="card-meta mono">SNR-V · 11,000 LY</span></figcaption>
              </figure>
            </div>
          </section>


          <section className="expanse" id="expanse">
            <div className="expanse-mask"><div className="expanse-img"></div></div>
            <div className="expanse-caption">
              <h2 className="expanse-title">One frame.<br />Eleven thousand suns.</h2>
              <p className="expanse-meta mono">FIELD 9 · CARINA REACH · 52,000 LY DEEP</p>
            </div>
          </section>


          <section className="panel panel--center" id="signals">
            <div className="panel-grid panel-grid--solo">
              <div className="panel-inner">
                <span className="panel-label mono">05 — THE SIGNALS</span>
                <h2 className="panel-title">The dark<br />is not silent</h2>
                <p className="panel-body">
                  Pulsars keep time like lighthouses. Hydrogen hums at twenty-one
                  centimetres. And once a decade, something we cannot name repeats
                  itself — twice — and goes quiet. We log everything. We promise nothing.
                </p>
              </div>
            </div>
            <div className="parallax-field" aria-hidden="true"></div>
          </section>


          <section className="log" id="log">
            <p className="log-label mono">06 — TRANSMISSIONS</p>
            <ul className="log-list">
              <li className="log-row">
                <span className="log-time mono">2147.114 · 03:11</span>
                <span className="log-text">Periodic source recovered at 21 cm. Two pulses, then silence.</span>
                <span className="log-tag mono">UNRESOLVED</span>
              </li>
              <li className="log-row">
                <span className="log-time mono">2147.109 · 22:48</span>
                <span className="log-text">Gravitational lens confirmed behind Field 9. Eleven new galaxies.</span>
                <span className="log-tag mono">CATALOGUED</span>
              </li>
              <li className="log-row">
                <span className="log-time mono">2147.101 · 14:02</span>
                <span className="log-text">Mirror reached thermal floor. Forty-eight micro-kelvin above zero.</span>
                <span className="log-tag mono">NOMINAL</span>
              </li>
              <li className="log-row">
                <span className="log-time mono">2147.094 · 06:37</span>
                <span className="log-text">Carina drift compensated. Pointing error under one milliarcsecond.</span>
                <span className="log-tag mono">NOMINAL</span>
              </li>
            </ul>
          </section>


          <footer className="footer" id="footer">
            <p className="footer-kicker mono">THE CROSSING AWAITS</p>
            <h2 className="footer-title">Leave the map.</h2>
            <div className="magnetic-wrap">
              <button className="magnetic-btn" type="button">
                <span className="magnetic-label">Begin the journey</span>
              </button>
            </div>
            <div className="footer-meta mono">VESPER OBSERVATORY © 2147 · A FICTION</div>
          </footer>

        </main>


        <div className="progress" aria-hidden="true">
          <span className="progress-label mono">CROSSING</span>
          <span className="progress-track"><span className="progress-fill"></span></span>
          <span className="progress-pct mono">00</span>
        </div>


        <div className="grain" aria-hidden="true"></div>
        <div className="cursor-dot" aria-hidden="true"></div>
        <div className="cursor-tail" aria-hidden="true"></div>
    </div>
  );
}
