const __auraToastCompatDispatch = (..._args) => undefined;
const __auraToastCompatApi = Object.assign(__auraToastCompatDispatch, {
  toast: __auraToastCompatDispatch,
  success: __auraToastCompatDispatch,
  error: __auraToastCompatDispatch,
  info: __auraToastCompatDispatch,
  warning: __auraToastCompatDispatch,
  dismiss: () => undefined,
});
const toast = __auraToastCompatApi;

import { useEffect, useLayoutEffect } from "react";

const sourceScripts = [
  {
    "src": "https://souranyp-stack.github.io/argentum-watch/argentum-v3-assets/aura-runtime-6a524977f1.js",
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
    "type": "text/x-dc",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\nclass Component extends DCLogic {\n  state = { cart: [], confirmed: false, detail: null };\n\n  products = {\n    'AG-1948-MS': {\n      name: 'Argentum Moonphase Silver', price: 24500,\n      desc: 'The house reference. A brushed 904L silver case around a black textured dial carrying moonphase, date subdial and an open heart — driven by the in-house Calibre AG-72.',\n      specs: [\n        { k: 'Case', v: '40.5 mm · brushed 904L steel' },\n        { k: 'Movement', v: 'Calibre AG-72 · automatic' },\n        { k: 'Complications', v: 'Moonphase · date · open heart' },\n        { k: 'Power reserve', v: '72 hours' },\n        { k: 'Strap', v: 'Black crocodile leather' },\n        { k: 'Water resistance', v: '5 ATM' },\n        { k: 'Crystal', v: 'Double-domed sapphire, AR ×2' },\n      ],\n    },\n    'AG-2100-BC': {\n      name: 'Argentum Black Ceramic', price: 21900,\n      desc: 'The moonphase movement in a matte black ceramic case — scratch-proof, feather-light, and near-invisible in low light. Rubber-lined strap for daily wear.',\n      specs: [\n        { k: 'Case', v: '41 mm · matte black ceramic' },\n        { k: 'Movement', v: 'Calibre AG-72 · automatic' },\n        { k: 'Complications', v: 'Moonphase · date' },\n        { k: 'Power reserve', v: '72 hours' },\n        { k: 'Strap', v: 'Rubber-lined calf leather' },\n        { k: 'Water resistance', v: '10 ATM' },\n        { k: 'Crystal', v: 'Flat sapphire, AR ×2' },\n      ],\n    },\n    'AG-1877-OS': {\n      name: 'Argentum Open-Heart Steel', price: 18400,\n      desc: 'The skeletonised balance takes centre stage at six o\\'clock, framed by a polished steel bracelet. The purist\\'s entry to the manufacture.',\n      specs: [\n        { k: 'Case', v: '40 mm · polished 904L steel' },\n        { k: 'Movement', v: 'Calibre AG-70 · automatic' },\n        { k: 'Complications', v: 'Open heart · small seconds' },\n        { k: 'Power reserve', v: '68 hours' },\n        { k: 'Bracelet', v: '904L steel, micro-adjust clasp' },\n        { k: 'Water resistance', v: '5 ATM' },\n        { k: 'Crystal', v: 'Double-domed sapphire' },\n      ],\n    },\n    'AG-1602-CL': {\n      name: 'Argentum Classic Leather', price: 12900,\n      desc: 'Time only, 38 millimetres, hand-stitched calf. The quietest watch in the collection — and the one our watchmakers wear.',\n      specs: [\n        { k: 'Case', v: '38 mm · brushed 904L steel' },\n        { k: 'Movement', v: 'Calibre AG-60 · automatic' },\n        { k: 'Complications', v: 'None — hours, minutes, seconds' },\n        { k: 'Power reserve', v: '60 hours' },\n        { k: 'Strap', v: 'Hand-stitched calf leather' },\n        { k: 'Water resistance', v: '5 ATM' },\n        { k: 'Crystal', v: 'Domed sapphire' },\n      ],\n    },\n  };\n\n  componentDidMount() {\n    this.smooth = this.props.scrubSmoothing ?? 0.14;\n    this.dustSpeed = 1;\n    this.$ = (id) => document.getElementById(id);\n    this.vids = {};\n    ['v1', 'v2', 'v5', 'v8', 'v11'].forEach((id) => {\n      const el = this.$(id);\n      if (el) { el.muted = true; el.pause(); this.vids[id] = { el, cur: 0 }; }\n    });\n    // ambient loop video: only decode while on screen\n    const v3 = this.$('v3');\n    if (v3) {\n      v3.muted = true;\n      const io3 = new IntersectionObserver((es) => {\n        es.forEach((e) => { if (e.isIntersecting) v3.play().catch(() => {}); else v3.pause(); });\n      }, { rootMargin: '200px' });\n      io3.observe(v3);\n    }\n\n    this.splitWords();\n    this.setupParticles();\n    this.setupCards();\n    this.setupVariants();\n    this.setupCartButtons();\n    this.cacheDom();\n    this.measure();\n    // re-measure after late layout shifts (fonts, images)\n    setTimeout(() => this.measure(), 2000);\n    setTimeout(() => this.measure(), 6000);\n    this.onResize = () => { this.sizeCanvas(); this.measure(); };\n    window.addEventListener('resize', this.onResize);\n    this.raf = requestAnimationFrame(this.tick);\n  }\n\n  componentWillUnmount() {\n    cancelAnimationFrame(this.raf);\n    window.removeEventListener('resize', this.onResize);\n  }\n\n  // ---------- helpers ----------\n  clamp(v, a, b) { return Math.min(b, Math.max(a, v)); }\n  sub(p, a, b) { return this.clamp((p - a) / (b - a), 0, 1); }\n  ez(t) { return 1 - Math.pow(1 - t, 3); }\n  prog(id) {\n    const m = this.metrics && this.metrics[id];\n    if (m) return this.clamp((window.scrollY - m.top) / Math.max(1, m.h - window.innerHeight), 0, 1);\n    const el = this.$(id);\n    if (!el) return 0;\n    const r = el.getBoundingClientRect();\n    const total = el.offsetHeight - window.innerHeight;\n    return this.clamp(-r.top / Math.max(1, total), 0, 1);\n  }\n  // cached section geometry — avoids per-frame getBoundingClientRect\n  measure() {\n    this.metrics = {};\n    ['s1', 's2', 's3', 's4', 's5', 's6', 's11', 's9', 's10', 's8'].forEach((id) => {\n      const el = this.$(id);\n      if (!el) return;\n      const r = el.getBoundingClientRect();\n      this.metrics[id] = { top: r.top + window.scrollY, h: el.offsetHeight };\n    });\n    const track = this.$('track');\n    this.trackMax = track ? Math.max(0, track.scrollWidth - window.innerWidth) : 0;\n  }\n  // section near viewport? sections outside are skipped entirely each frame\n  vis(id, sy, vh) {\n    const m = this.metrics && this.metrics[id];\n    if (!m) return true;\n    const pad = vh * 0.6;\n    return sy + vh + pad > m.top && sy - pad < m.top + m.h;\n  }\n  // one-time DOM caches with pre-parsed data attributes\n  cacheDom() {\n    const q = (sel) => Array.from(document.querySelectorAll(sel));\n    this.dom = {\n      panels: q('#s2 [data-panel]').map((el) => ({\n        el, i: +el.getAttribute('data-panel'), dx: +el.getAttribute('data-dx'),\n        dy: +el.getAttribute('data-dy'), spd: +el.getAttribute('data-spd'),\n        lines: Array.from(el.querySelectorAll('[data-line]')),\n      })),\n      bento: q('#s4 [data-bento]').map((el) => ({\n        el, i: +el.getAttribute('data-bento'), tx: +el.getAttribute('data-tx'),\n        ty: +el.getAttribute('data-ty'), rz: +el.getAttribute('data-rz'),\n      })),\n      specs: q('#s5 [data-spec]'),\n      steps: q('#s6 [data-steptitle]'),\n      acards: q('#s11 [data-acard]'),\n      quotes: q('#s9 [data-quote]'),\n      qticks: q('#s9 [data-qtick]'),\n      miles: q('#s10 [data-mile]'),\n    };\n  }\n  scrub(key, p) {\n    const v = this.vids[key];\n    if (!v || v.el.readyState < 1 || !isFinite(v.el.duration)) return;\n    const target = p * Math.max(0, v.el.duration - 0.08);\n    v.cur += (target - v.cur) * this.smooth;\n    if (Math.abs(v.el.currentTime - v.cur) > 0.008) {\n      try { v.el.currentTime = v.cur; } catch (e) {}\n    }\n  }\n\n  // ---------- setup ----------\n  splitWords() {\n    const h = this.$('s3h');\n    if (!h) return;\n    const words = h.textContent.trim().split(/\\s+/);\n    h.textContent = '';\n    this.s3words = words.map((w, i) => {\n      const s = document.createElement('span');\n      s.textContent = w;\n      s.style.cssText = 'display:inline-block;margin-right:0.26em;opacity:0.15;filter:blur(6px);transform:translateY(22px);will-change:transform,opacity,filter;';\n      h.appendChild(s);\n      return s;\n    });\n    const p = this.$('s3p');\n    if (p) { p.style.clipPath = 'inset(0 0 100% 0)'; p.style.opacity = '0'; }\n  }\n\n  setupParticles() {\n    const c = this.$('dust');\n    if (!c) return;\n    this.dustCtx = c.getContext('2d');\n    this.sizeCanvas();\n    const n = 64;\n    this.parts = Array.from({ length: n }, () => ({\n      x: Math.random(), y: Math.random(),\n      r: Math.random() < 0.14 ? 5 + Math.random() * 11 : 0.5 + Math.random() * 1.8,\n      a: 0.03 + Math.random() * 0.12,\n      vx: (Math.random() - 0.5) * 0.00012,\n      vy: -0.00004 - Math.random() * 0.00012,\n      tw: Math.random() * Math.PI * 2,\n    }));\n  }\n  sizeCanvas() {\n    const c = this.$('dust');\n    if (!c) return;\n    c.width = window.innerWidth;\n    c.height = window.innerHeight;\n  }\n  drawParticles(t) {\n    if (!this.dustCtx || (this.props.particles === false)) return;\n    const ctx = this.dustCtx, w = ctx.canvas.width, h = ctx.canvas.height;\n    ctx.clearRect(0, 0, w, h);\n    const sp = this.dustSpeed;\n    for (const p of this.parts) {\n      p.x += p.vx * sp * 16; p.y += p.vy * sp * 16;\n      if (p.y < -0.05) { p.y = 1.05; p.x = Math.random(); }\n      if (p.x < -0.05) p.x = 1.05; if (p.x > 1.05) p.x = -0.05;\n      const tw = 0.7 + 0.3 * Math.sin(t * 0.0008 + p.tw);\n      const big = p.r > 4;\n      if (big) {\n        const g = ctx.createRadialGradient(p.x * w, p.y * h, 0, p.x * w, p.y * h, p.r * 3);\n        g.addColorStop(0, 'rgba(175,195,230,' + (p.a * tw * 0.5) + ')');\n        g.addColorStop(1, 'rgba(175,195,230,0)');\n        ctx.fillStyle = g;\n        ctx.beginPath(); ctx.arc(p.x * w, p.y * h, p.r * 3, 0, 7); ctx.fill();\n      } else {\n        ctx.fillStyle = 'rgba(200,215,240,' + (p.a * tw) + ')';\n        ctx.beginPath(); ctx.arc(p.x * w, p.y * h, p.r, 0, 7); ctx.fill();\n      }\n    }\n  }\n\n  // ---------- cart ----------\n  fmt(n) { return 'CHF ' + n.toLocaleString('en-US'); }\n\n  setupCartButtons() {\n    document.querySelectorAll('[data-add]').forEach((el) => {\n      el.addEventListener('click', () => this.addToCart(el.getAttribute('data-add')));\n    });\n  }\n\n  addToCart(ref) {\n    const p = this.products[ref];\n    if (!p) return;\n    this.setState((s) => {\n      const cart = s.cart.map((it) => ({ ...it }));\n      const ex = cart.find((it) => it.ref === ref);\n      if (ex) ex.qty += 1; else cart.push({ ref, name: p.name, price: p.price, qty: 1 });\n      return { cart };\n    });\n    this.showToast(p.name.toUpperCase() + ' — ADDED TO CART');\n  }\n\n  changeQty(ref, d) {\n    this.setState((s) => ({\n      cart: s.cart\n        .map((it) => (it.ref === ref ? { ...it, qty: it.qty + d } : { ...it }))\n        .filter((it) => it.qty > 0),\n    }));\n  }\n\n  removeItem(ref) {\n    this.setState((s) => ({ cart: s.cart.filter((it) => it.ref !== ref) }));\n  }\n\n  openCart() {\n    const ov = this.$('cartoverlay'), dr = this.$('cartdrawer');\n    if (ov) { ov.style.opacity = '1'; ov.style.pointerEvents = 'auto'; }\n    if (dr) dr.style.transform = 'translateX(0%)';\n  }\n\n  closeCart() {\n    const ov = this.$('cartoverlay'), dr = this.$('cartdrawer');\n    if (ov) { ov.style.opacity = '0'; ov.style.pointerEvents = 'none'; }\n    if (dr) dr.style.transform = 'translateX(112%)';\n  }\n\n  showToast(msg) {\n    const t = this.$('toast');\n    if (!t) return;\n    t.textContent = msg;\n    t.style.opacity = '1';\n    t.style.transform = 'translateX(-50%) translateY(0px)';\n    clearTimeout(this.toastT);\n    this.toastT = setTimeout(() => {\n      t.style.opacity = '0';\n      t.style.transform = 'translateX(-50%) translateY(20px)';\n    }, 2300);\n  }\n\n  checkout() {\n    if (this.state.cart.length === 0) { this.showToast('YOUR CART IS EMPTY'); return; }\n    this.setState({ confirmed: true });\n    this.showToast('ORDER REQUEST SENT — OUR CONCIERGE WILL CONTACT YOU');\n    clearTimeout(this.confirmT);\n    this.confirmT = setTimeout(() => this.setState({ confirmed: false }), 3000);\n  }\n\n  setupCards() {\n    const cards = Array.from(document.querySelectorAll('[data-card]'));\n    cards.forEach((el, i) => {\n      el.style.opacity = '0';\n      el.style.transform = 'translateY(90px) scale(0.97)';\n    });\n    const io = new IntersectionObserver((entries) => {\n      entries.forEach((en) => {\n        if (!en.isIntersecting) return;\n        const el = en.target;\n        const i = +el.getAttribute('data-card');\n        el.style.transition = 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1) ' + (i * 120) + 'ms, transform 1s cubic-bezier(0.4, 0, 0.2, 1) ' + (i * 120) + 'ms';\n        el.style.opacity = '1';\n        el.style.transform = 'translateY(0) scale(1)';\n        io.unobserve(el);\n        setTimeout(() => { el.style.transition = 'box-shadow 400ms ease, border-color 400ms ease'; }, 1300 + i * 120);\n      });\n    }, { threshold: 0.15 });\n    cards.forEach((el) => io.observe(el));\n    // hover tilt + glow\n    cards.forEach((el) => {\n      const glow = el.querySelector('[data-cardglow]');\n      const img = el.querySelector('[data-cardimg]');\n      el.addEventListener('mousemove', (e) => {\n        const r = el.getBoundingClientRect();\n        const nx = (e.clientX - r.left) / r.width - 0.5;\n        const ny = (e.clientY - r.top) / r.height - 0.5;\n        el.style.transform = 'perspective(900px) rotateX(' + (-ny * 5) + 'deg) rotateY(' + (nx * 6) + 'deg) translateY(-4px)';\n        if (glow) {\n          glow.style.opacity = '1';\n          glow.style.background = 'radial-gradient(circle 240px at ' + ((nx + 0.5) * 100) + '% ' + ((ny + 0.5) * 100) + '%, rgba(160,185,225,0.14), rgba(160,185,225,0) 70%)';\n        }\n        if (img) img.style.transform = 'translateZ(30px) scale(1.03)';\n      });\n      el.addEventListener('mouseleave', () => {\n        el.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0)';\n        if (glow) glow.style.opacity = '0';\n        if (img) img.style.transform = 'translateZ(0) scale(1)';\n      });\n    });\n  }\n\n  setupVariants() {\n    const chips = Array.from(document.querySelectorAll('[data-variant]'));\n    const labels = ['360° · SCROLL TO ROTATE', 'SILVER CASE · STEEL BRACELET', 'MOONPHASE DIAL · MACRO'];\n    chips.forEach((chip) => {\n      chip.addEventListener('click', () => {\n        const i = +chip.getAttribute('data-variant');\n        chips.forEach((c) => {\n          c.style.background = 'rgba(8,12,22,0.5)';\n          c.style.color = '#9aa3b2';\n          c.style.borderColor = 'rgba(210,222,244,0.16)';\n        });\n        chip.style.background = '#dfe5ee';\n        chip.style.color = '#04060b';\n        chip.style.borderColor = 'rgba(210,222,244,0.3)';\n        const i1 = this.$('varimg1'), i2 = this.$('varimg2'), lb = this.$('varlabel');\n        if (i1) i1.style.opacity = i === 1 ? '1' : '0';\n        if (i2) i2.style.opacity = i === 2 ? '1' : '0';\n        if (lb) lb.textContent = labels[i] || labels[0];\n      });\n    });\n  }\n\n  // ---------- frame loop ----------\n  tick = (t) => {\n    const sy = window.scrollY;\n    const vh = window.innerHeight;\n    const D = this.dom || {};\n\n    // nav — write only when state flips\n    const navOn = sy > 60;\n    if (navOn !== this._navOn) {\n      this._navOn = navOn;\n      const nav = this.$('nav');\n      if (nav) {\n        nav.style.background = navOn ? 'rgba(5,8,14,0.6)' : 'rgba(4,6,11,0)';\n        nav.style.backdropFilter = navOn ? 'blur(20px) saturate(140%)' : 'none';\n        nav.style.borderBottomColor = navOn ? 'rgba(210,222,244,0.1)' : 'rgba(210,222,244,0)';\n      }\n    }\n\n    // S1 hero\n    if (this.vis('s1', sy, vh)) {\n      const p1 = this.prog('s1');\n      this.scrub('v1', this.sub(p1, 0, 0.88));\n      const v1 = this.vids.v1 && this.vids.v1.el;\n      if (v1) v1.style.transform = 'scale(' + (1 + this.ez(p1) * 0.3) + ') rotate(' + (this.ez(p1) * 4) + 'deg) translateY(' + (Math.sin(t * 0.0006) * 5) + 'px)';\n      const fade1 = this.$('fade1');\n      if (fade1) fade1.style.opacity = this.sub(p1, 0.9, 1);\n      const d = this.ez(this.sub(p1, 0.04, 0.6));\n      const fadeH = 1 - this.sub(p1, 0.5, 0.82);\n      const h1a = this.$('h1a'), h1b = this.$('h1b');\n      if (h1a) { h1a.style.transform = 'translateX(' + (-d * 30) + 'vw)'; h1a.style.opacity = fadeH; }\n      if (h1b) { h1b.style.transform = 'translateX(' + (d * 30) + 'vw)'; h1b.style.opacity = fadeH; }\n      const eb = this.$('s1eyebrow');\n      if (eb) eb.style.opacity = 1 - this.sub(p1, 0.03, 0.2);\n      const s1sub = this.$('s1sub');\n      if (s1sub) {\n        const k = this.sub(p1, 0.03, 0.26);\n        s1sub.style.opacity = 1 - k;\n        s1sub.style.transform = 'translateY(' + (-k * 90) + 'px)';\n        s1sub.style.pointerEvents = k > 0.5 ? 'none' : 'auto';\n      }\n      const dark = this.$('s1dark');\n      if (dark) dark.style.opacity = 0.3 + this.sub(p1, 0.3, 1) * 0.55;\n      const hint = this.$('s1hint');\n      if (hint) hint.style.opacity = 1 - this.sub(p1, 0.01, 0.1);\n    }\n\n    // S2 macro\n    if (this.vis('s2', sy, vh)) {\n      const p2 = this.prog('s2');\n      this.scrub('v2', p2);\n      const v2 = this.vids.v2 && this.vids.v2.el;\n      if (v2) v2.style.transform = 'scale(' + (1.28 - this.ez(p2) * 0.22) + ') rotate(' + ((1 - this.ez(this.sub(p2, 0, 0.35))) * -4) + 'deg)';\n      const fade2 = this.$('fade2');\n      if (fade2) fade2.style.opacity = this.clamp((1 - this.sub(p2, 0, 0.08)) + this.sub(p2, 0.94, 1), 0, 1);\n      const s2t = this.$('s2title');\n      if (s2t) {\n        const k = this.sub(p2, 0.02, 0.14);\n        s2t.style.opacity = k * (1 - this.sub(p2, 0.85, 1));\n        s2t.style.transform = 'translateY(' + ((1 - k) * 30) + 'px)';\n      }\n      (D.panels || []).forEach((pn) => {\n        const start = 0.1 + pn.i * 0.11;\n        const k = this.ez(this.sub(p2, start, start + 0.26));\n        const par = (p2 - 0.5) * pn.spd * -70;\n        pn.el.style.opacity = k;\n        pn.el.style.transform = 'translate(' + (pn.dx * (1 - k)) + 'px,' + (pn.dy * (1 - k) + par) + 'px) scale(' + (0.93 + 0.07 * k) + ')';\n        pn.lines.forEach((ln, j) => {\n          const lk = this.sub(p2, start + 0.06 + j * 0.045, start + 0.16 + j * 0.045);\n          ln.style.opacity = 0.05 + 0.95 * lk;\n          ln.style.transform = 'translateY(' + ((1 - lk) * 14) + 'px)';\n        });\n      });\n    }\n\n    // S3 editorial\n    if (this.vis('s3', sy, vh)) {\n      const p3 = this.prog('s3');\n      if (this.s3words) {\n        this.s3words.forEach((s, i) => {\n          const k = this.sub(p3, 0.04 + i * 0.05, 0.2 + i * 0.05);\n          s.style.opacity = 0.15 + 0.85 * k;\n          s.style.filter = 'blur(' + ((1 - k) * 6) + 'px)';\n          s.style.transform = 'translateY(' + ((1 - k) * 22) + 'px)';\n          s.style.color = k > 0.65 ? '#f6f8fb' : '#8b94a6';\n        });\n      }\n      const s3p = this.$('s3p');\n      if (s3p) {\n        const k = this.ez(this.sub(p3, 0.58, 0.82));\n        s3p.style.clipPath = 'inset(0 0 ' + ((1 - k) * 100) + '% 0)';\n        s3p.style.opacity = k;\n      }\n      const s3vis = this.$('s3vis');\n      if (s3vis) s3vis.style.transform = 'translateY(' + ((0.5 - p3) * 90) + 'px)';\n      // camera push-in toward the dial\n      const v3el = this.$('v3');\n      if (v3el) v3el.style.transform = 'scale(' + (1.3 + this.ez(p3) * 0.45) + ')';\n    }\n\n    // S4 bento\n    if (this.vis('s4', sy, vh)) {\n      const p4 = this.prog('s4');\n      const s4h = this.$('s4head');\n      if (s4h) {\n        const k = this.sub(p4, 0.02, 0.14);\n        s4h.style.opacity = k;\n        s4h.style.transform = 'translateY(' + ((1 - k) * 26) + 'px)';\n      }\n      (D.bento || []).forEach((b) => {\n        const k = this.ez(this.sub(p4, 0.06 + b.i * 0.055, 0.34 + b.i * 0.055));\n        b.el.style.opacity = 0.05 + 0.95 * k;\n        b.el.style.transform = 'translate3d(' + (b.tx * (1 - k)) + 'px,' + (b.ty * (1 - k)) + 'px,' + ((1 - k) * -180) + 'px) rotateZ(' + (b.rz * (1 - k)) + 'deg)';\n      });\n    }\n\n    // S5 showcase\n    if (this.vis('s5', sy, vh)) {\n      const p5 = this.prog('s5');\n      this.scrub('v5', p5);\n      const glow = this.$('s5glow');\n      if (glow) glow.style.opacity = 0.4 + 0.6 * Math.abs(Math.sin(p5 * Math.PI));\n      const frame = this.$('s5frame');\n      if (frame && frame.style.transform) frame.style.transform = '';\n      // cinematic light sweep across the watch\n      const sw = this.$('s5sweep');\n      if (sw) sw.style.transform = 'translateX(' + (-130 + this.ez(this.sub(p5, 0.15, 0.75)) * 260) + '%)';\n      // split text opens around the product\n      const ta = this.$('s5ta'), tb = this.$('s5tb');\n      if (ta && tb) {\n        const open = this.ez(this.sub(p5, 0.02, 0.4));\n        const px = open * Math.min(220, window.innerWidth * 0.12);\n        ta.style.transform = 'translateX(' + (-40 - px) + 'px)';\n        tb.style.transform = 'translateX(' + (40 + px) + 'px)';\n        ta.style.opacity = 0.25 + open * 0.75;\n        tb.style.opacity = 0.25 + open * 0.75;\n      }\n      (D.specs || []).forEach((el, i) => {\n        const k = this.ez(this.sub(p5, 0.06 + i * 0.09, 0.2 + i * 0.09));\n        el.style.opacity = k;\n        el.style.transform = 'translateY(' + ((1 - k) * 36) + 'px)';\n      });\n      const price = this.$('s5price');\n      if (price) price.style.opacity = this.sub(p5, 0.72, 0.88);\n    }\n\n    // S6 timeline\n    if (this.vis('s6', sy, vh)) {\n      const p6 = this.prog('s6');\n      const track = this.$('track');\n      if (track) track.style.transform = 'translateX(' + (-p6 * (this.trackMax || 0)) + 'px)';\n      (D.steps || []).forEach((el, i) => {\n        const k = this.sub(p6, i / 7, i / 7 + 0.1);\n        el.style.transform = 'translateY(' + ((1 - k) * 110) + '%)';\n      });\n    }\n\n    // S11 assembly film\n    if (this.vis('s11', sy, vh)) {\n      const p11 = this.prog('s11');\n      this.scrub('v11', p11);\n      const v11 = this.vids.v11 && this.vids.v11.el;\n      if (v11) v11.style.transform = 'scale(' + (1.02 + this.ez(p11) * 0.08) + ')';\n      const fade11 = this.$('fade11');\n      if (fade11) fade11.style.opacity = this.clamp((1 - this.sub(p11, 0, 0.08)) + this.sub(p11, 0.94, 1), 0, 1);\n      // crosshair lines draw in\n      const vl = this.$('s11vline'), hl = this.$('s11hline');\n      if (vl) vl.style.transform = 'scaleY(' + this.ez(this.sub(p11, 0.03, 0.2)) + ')';\n      if (hl) hl.style.transform = 'scaleX(' + this.ez(this.sub(p11, 0.06, 0.24)) + ')';\n      // headline: rises in, drifts up slowly (parallax), never fully leaves\n      const s11t = this.$('s11title');\n      if (s11t) {\n        const kin = this.ez(this.sub(p11, 0.04, 0.18));\n        s11t.style.opacity = kin;\n        s11t.style.transform = 'translateY(' + ((1 - kin) * 50 - this.sub(p11, 0.2, 1) * 60) + 'px)';\n      }\n      // intro paragraph: fades in after headline, drifts slower\n      const s11i = this.$('s11intro');\n      if (s11i) {\n        const kin = this.ez(this.sub(p11, 0.12, 0.26));\n        s11i.style.opacity = kin;\n        s11i.style.transform = 'translateY(' + ((1 - kin) * 34 - this.sub(p11, 0.26, 1) * 30) + 'px)';\n      }\n      // numbered cards drift up through quadrants at different speeds\n      (D.acards || []).forEach((el, i) => {\n        // staggered windows: each card fades out as the next settles (max ~2 visible)\n        const start = 0.28 + i * 0.2;\n        const kin = this.ez(this.sub(p11, start, start + 0.14));\n        const kout = i === 2 ? this.sub(p11, 0.9, 1) : this.ez(this.sub(p11, start + 0.24, start + 0.36));\n        const drift = this.sub(p11, start, 1) * (70 + i * 15);\n        el.style.opacity = kin * (1 - kout);\n        el.style.transform = 'translateY(' + ((1 - kin) * 70 - drift - kout * 60) + 'px)';\n        el.style.pointerEvents = kin > 0.5 && kout < 0.5 ? 'auto' : 'none';\n      });\n    }\n\n    // S9 testimonials\n    if (this.vis('s9', sy, vh)) {\n      const p9 = this.prog('s9');\n      const quotes = D.quotes || [];\n      let activeQ = 0, bestD = 1e9;\n      const R = vh * 0.30;\n      const step = 38;\n      const rot = p9 * step * (quotes.length - 1);\n      quotes.forEach((el, i) => {\n        const th = i * step - rot;\n        const ad = Math.abs(th);\n        if (ad < bestD) { bestD = ad; activeQ = i; }\n        const k = this.clamp(ad / 40, 0, 1);\n        el.style.opacity = 1 - this.ez(k);\n        el.style.transform =\n          'translate(-50%, -50%) rotate(' + th + 'deg) translateY(' + (-R) + 'px) rotate(' + (-th) + 'deg) scale(' + (1 - 0.1 * k) + ')';\n        el.style.filter = 'blur(' + (k * 7) + 'px)';\n        el.style.pointerEvents = ad < 12 ? 'auto' : 'none';\n      });\n      if (activeQ !== this._activeQ) {\n        this._activeQ = activeQ;\n        (D.qticks || []).forEach((el, i) => {\n          el.style.background = i === activeQ ? 'rgba(223,229,238,0.9)' : 'rgba(210,222,244,0.18)';\n        });\n      }\n    }\n\n    // S10 heritage\n    if (this.vis('s10', sy, vh)) {\n      const p10 = this.prog('s10');\n      const yn = this.$('yearnum');\n      if (yn) {\n        const txt = String(Math.round(1948 + this.ez(p10) * (2026 - 1948)));\n        if (yn.textContent !== txt) yn.textContent = txt;\n      }\n      const yb = this.$('yearbar');\n      if (yb) yb.style.width = (p10 * 100) + '%';\n      const yl = this.$('yearlab');\n      if (yl) {\n        const labs = ['ATELIER FOUNDED · GENEVA', 'CALIBRE AG-31 · FIRST MOONPHASE', 'CASE MANUFACTURE · IN-HOUSE', 'CALIBRE AG-72 · THE OPEN HEART'];\n        const li = Math.min(3, Math.floor(p10 * 4));\n        if (yl.textContent !== labs[li]) yl.textContent = labs[li];\n      }\n      (D.miles || []).forEach((el, i) => {\n        const c = (i + 0.5) / 4;\n        const k = Math.max(0, 1 - Math.abs(p10 - c) * 3.4);\n        el.style.opacity = k;\n        el.style.transform = 'translateY(' + ((1 - k) * 26) + 'px)';\n      });\n    }\n\n    // S8 final\n    if (this.vis('s8', sy, vh)) {\n      const p8 = this.prog('s8');\n      this.dustSpeed = 1 - this.sub(p8, 0.3, 1) * 0.75;\n      const v8 = this.vids.v8 && this.vids.v8.el;\n      if (v8) {\n        if (!this.v8set && v8.readyState >= 1 && isFinite(v8.duration)) { try { v8.currentTime = v8.duration * 0.12; this.v8set = true; } catch (e) {} }\n        v8.style.transform = 'scale(' + (0.92 + this.ez(p8) * 0.22) + ') rotate(' + ((1 - this.ez(p8)) * -3) + 'deg)';\n        v8.style.opacity = 0.35 + this.sub(p8, 0, 0.3) * 0.65;\n      }\n      const fade8 = this.$('fade8');\n      if (fade8) fade8.style.opacity = 1 - this.sub(p8, 0, 0.1);\n      const s8h = this.$('s8h');\n      if (s8h) {\n        const k = this.sub(p8, 0.12, 0.42);\n        s8h.style.opacity = k;\n        s8h.style.filter = 'blur(' + ((1 - k) * 12) + 'px)';\n      }\n      const s8sub = this.$('s8sub');\n      if (s8sub) {\n        const k = this.sub(p8, 0.28, 0.52);\n        s8sub.style.opacity = k;\n        s8sub.style.transform = 'translateY(' + ((1 - k) * 26) + 'px)';\n      }\n      const s8cta = this.$('s8cta');\n      if (s8cta) {\n        const k = this.ez(this.sub(p8, 0.4, 0.66));\n        s8cta.style.opacity = k;\n        s8cta.style.transform = 'translateY(' + ((1 - k) * 50) + 'px)';\n      }\n      const ring = this.$('ring');\n      if (ring) {\n        const k = this.sub(p8, 0.3, 0.95);\n        ring.style.opacity = Math.min(1, k * 1.6) * 0.85;\n        ring.style.transform = 'translate(-50%, -50%) scale(' + (0.55 + k * 0.5) + ')';\n      }\n    } else if (this.dustSpeed !== 1) {\n      this.dustSpeed = 1;\n    }\n\n    this.drawParticles(t);\n    this.raf = requestAnimationFrame(this.tick);\n  };\n\n  renderVals() {\n    const cart = this.state.cart;\n    const count = cart.reduce((a, c) => a + c.qty, 0);\n    const subtotal = cart.reduce((a, c) => a + c.qty * c.price, 0);\n    return {\n      cartCount: count,\n      cartEmpty: cart.length === 0,\n      cartItems: cart.map((it) => ({\n        ref: it.ref,\n        name: it.name,\n        qty: it.qty,\n        lineTotal: this.fmt(it.price * it.qty),\n        inc: () => this.changeQty(it.ref, 1),\n        dec: () => this.changeQty(it.ref, -1),\n        remove: () => this.removeItem(it.ref),\n      })),\n      cartSubtotal: this.fmt(subtotal),\n      detailOpen: !!this.state.detail,\n      detailRef: this.state.detail || '',\n      detailName: (this.state.detail && this.products[this.state.detail].name) || '',\n      detailDesc: (this.state.detail && this.products[this.state.detail].desc) || '',\n      detailPrice: this.state.detail ? this.fmt(this.products[this.state.detail].price) : '',\n      detailSpecs: (this.state.detail && this.products[this.state.detail].specs) || [],\n      detailAdd: () => { if (this.state.detail) this.addToCart(this.state.detail); },\n      closeDetail: () => this.setState({ detail: null }),\n      viewMS: () => this.setState({ detail: 'AG-1948-MS' }),\n      viewBC: () => this.setState({ detail: 'AG-2100-BC' }),\n      viewOS: () => this.setState({ detail: 'AG-1877-OS' }),\n      viewCL: () => this.setState({ detail: 'AG-1602-CL' }),\n      openCart: () => this.openCart(),\n      closeCart: () => this.closeCart(),\n      checkout: () => this.checkout(),\n      checkoutLabel: this.state.confirmed ? 'Request Received ✓' : 'Proceed to Checkout',\n    };\n  }\n}\n\n"
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n(function () {\n  function initCollectionCarousel() {\n    const section = document.getElementById('s7');\n    const stage = document.getElementById('collectionStage');\n    const track = document.getElementById('collectionTrack');\n    const prev = document.getElementById('collectionPrev');\n    const next = document.getElementById('collectionNext');\n    const current = document.getElementById('collectionCurrent');\n    const progress = document.getElementById('collectionProgress');\n\n    if (!section || !stage || !track || !prev || !next || !current || !progress) {\n      window.setTimeout(initCollectionCarousel, 100);\n      return;\n    }\n\n    if (stage.__collectionReady) return;\n    stage.__collectionReady = true;\n\n    const cards = Array.from(track.querySelectorAll('[data-collection-card]'));\n    if (!cards.length) return;\n\n    let active = 0;\n    let pointerId = null;\n    let startX = 0;\n    let moved = false;\n    let lastWheel = 0;\n\n    function circularOffset(index) {\n      let offset = index - active;\n      const half = cards.length / 2;\n      if (offset > half) offset -= cards.length;\n      if (offset < -half) offset += cards.length;\n      return offset;\n    }\n\n    function updateCarousel() {\n      const width = Math.max(stage.clientWidth, window.innerWidth * 0.8);\n      const mobile = window.innerWidth < 760;\n      const radiusX = mobile ? Math.min(width * 0.43, 285) : Math.min(width * 0.37, 520);\n      const depthStep = mobile ? 115 : 185;\n\n      cards.forEach((card, index) => {\n        const offset = circularOffset(index);\n        const distance = Math.abs(offset);\n        const direction = Math.sign(offset);\n        const x = offset === 0 ? 0 : direction * radiusX * Math.min(1, 0.72 + distance * 0.18);\n        const z = offset === 0 ? 80 : -distance * depthStep;\n        const rotateY = offset === 0 ? 0 : -direction * Math.min(58, 27 + distance * 12);\n        const scale = offset === 0 ? 1 : Math.max(mobile ? 0.62 : 0.58, 0.82 - (distance - 1) * 0.13);\n        const opacity = offset === 0 ? 1 : Math.max(0.24, 0.7 - (distance - 1) * 0.18);\n        const blur = offset === 0 ? 0 : Math.min(2.2, 0.55 + distance * 0.45);\n\n        card.style.transform = `translate(-50%, -50%) translate3d(${x}px, 0, ${z}px) rotateY(${rotateY}deg) scale(${scale})`;\n        card.style.opacity = String(opacity);\n        card.style.filter = `blur(${blur}px) saturate(${offset === 0 ? 1 : 0.78})`;\n        card.style.zIndex = String(100 - distance);\n        card.style.pointerEvents = distance <= 1 ? 'auto' : 'none';\n        card.classList.toggle('is-active', index === active);\n        card.setAttribute('aria-hidden', index === active ? 'false' : 'true');\n      });\n\n      current.textContent = String(active + 1).padStart(2, '0');\n      progress.style.width = `${((active + 1) / cards.length) * 100}%`;\n    }\n\n    function goTo(index) {\n      active = (index + cards.length) % cards.length;\n      updateCarousel();\n    }\n\n    window.collectionCarouselGoTo = goTo;\n    window.collectionCarouselPrev = function () { goTo(active - 1); };\n    window.collectionCarouselNext = function () { goTo(active + 1); };\n\n    prev.type = 'button';\n    next.type = 'button';\n    prev.onclick = function (event) {\n      event.preventDefault();\n      event.stopPropagation();\n      goTo(active - 1);\n    };\n    next.onclick = function (event) {\n      event.preventDefault();\n      event.stopPropagation();\n      goTo(active + 1);\n    };\n\n    cards.forEach((card, index) => {\n      card.addEventListener('click', function (event) {\n        if (moved || event.target.closest('[data-add], button, a, [onclick]')) return;\n        if (index !== active) goTo(index);\n      });\n    });\n\n    stage.addEventListener('pointerdown', function (event) {\n      if (event.target.closest('[data-add], button, a, [onclick]')) return;\n      pointerId = event.pointerId;\n      startX = event.clientX;\n      moved = false;\n      stage.setPointerCapture(pointerId);\n      stage.classList.add('is-dragging');\n    });\n\n    stage.addEventListener('pointermove', function (event) {\n      if (pointerId !== event.pointerId) return;\n      if (Math.abs(event.clientX - startX) > 6) moved = true;\n    });\n\n    function finishDrag(event) {\n      if (pointerId !== event.pointerId) return;\n      const delta = event.clientX - startX;\n      try { stage.releasePointerCapture(pointerId); } catch (_) {}\n      pointerId = null;\n      stage.classList.remove('is-dragging');\n      if (Math.abs(delta) >= 40) goTo(active + (delta < 0 ? 1 : -1));\n      window.setTimeout(function () { moved = false; }, 0);\n    }\n\n    stage.addEventListener('pointerup', finishDrag);\n    stage.addEventListener('pointercancel', function (event) {\n      if (pointerId === event.pointerId) {\n        pointerId = null;\n        moved = false;\n        stage.classList.remove('is-dragging');\n      }\n    });\n\n    stage.addEventListener('wheel', function (event) {\n      const amount = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;\n      if (Math.abs(amount) < 8) return;\n      const now = performance.now();\n      if (now - lastWheel < 420) return;\n      event.preventDefault();\n      lastWheel = now;\n      goTo(active + (amount > 0 ? 1 : -1));\n    }, { passive: false });\n\n    stage.addEventListener('pointermove', function (event) {\n      if (pointerId !== null) return;\n      const rect = stage.getBoundingClientRect();\n      const x = (event.clientX - rect.left) / rect.width - 0.5;\n      section.style.setProperty('--collection-glow-x', `${50 + x * 15}%`);\n    });\n\n    stage.addEventListener('pointerleave', function () {\n      section.style.setProperty('--collection-glow-x', '50%');\n    });\n\n    window.addEventListener('resize', updateCarousel, { passive: true });\n    updateCarousel();\n    requestAnimationFrame(updateCarousel);\n    window.setTimeout(updateCarousel, 250);\n  }\n\n  if (document.readyState === 'loading') {\n    document.addEventListener('DOMContentLoaded', initCollectionCarousel, { once: true });\n  } else {\n    initCollectionCarousel();\n  }\n  window.addEventListener('load', initCollectionCarousel, { once: true });\n})();\n"
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
    <div className="aura-source-body">
      <x-dc>
      <helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&amp;family=Inter:wght@400;500;600&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap" />


      </helmet>

      <div style={{"position": "relative", "background": "#04060b", "overflowX": "clip"}}>


        <canvas id="dust" style={{"position": "fixed", "inset": "0", "width": "100%", "height": "100%", "zIndex": "1", "pointerEvents": "none"}}></canvas>
        <div id="gridlines" style={{"position": "fixed", "inset": "0", "zIndex": "1", "pointerEvents": "none", "display": "flex", "justifyContent": "space-evenly"}}>
          <div style={{"width": "1px", "height": "100%", "background": "rgba(210,222,244,0.045)"}}></div>
          <div style={{"width": "1px", "height": "100%", "background": "rgba(210,222,244,0.045)"}}></div>
          <div style={{"width": "1px", "height": "100%", "background": "rgba(210,222,244,0.045)"}}></div>
        </div>


        <nav id="nav" style={{"position": "fixed", "top": "0", "left": "0", "right": "0", "zIndex": "50", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "padding": "22px 48px", "transition": "background 500ms ease, border-color 500ms ease, backdrop-filter 500ms ease", "borderBottom": "1px solid rgba(210,222,244,0)", "background": "rgba(4,6,11,0)"}}>
          <div style={{"fontFamily": "'Cormorant Garamond', serif", "fontSize": "20px", "letterSpacing": "0.32em", "fontWeight": "500", "color": "#eef1f6"}}>ARGENTUM</div>
          <div style={{"display": "flex", "alignItems": "center", "gap": "40px"}}>
            <a href="#collection" style={{"fontSize": "11px", "letterSpacing": "0.22em", "textTransform": "uppercase", "color": "#9aa3b2"}}>Collection</a>
            <a href="#craft" style={{"fontSize": "11px", "letterSpacing": "0.22em", "textTransform": "uppercase", "color": "#9aa3b2"}}>Craftsmanship</a>
            <a href="#showcase" style={{"fontSize": "11px", "letterSpacing": "0.22em", "textTransform": "uppercase", "color": "#9aa3b2"}}>The Watch</a>
            <div data-aura-onclick="&#123;&#123; openCart &#125;&#125;" style={{"display": "flex", "alignItems": "center", "gap": "9px", "fontSize": "11px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "#dfe5ee", "border": "1px solid rgba(210,222,244,0.2)", "padding": "10px 20px", "borderRadius": "9999px", "cursor": "pointer", "transition": "border-color 300ms ease"}} style-hover="border-color: rgba(230,238,250,0.5);">Cart<span style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "color": "#04060b", "background": "#dfe5ee", "borderRadius": "9999px", "minWidth": "18px", "height": "18px", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "padding": "0 5px"}}>&#123;&#123; cartCount &#125;&#125;</span></div>
            <div style={{"fontSize": "11px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "#04060b", "background": "#dfe5ee", "padding": "12px 26px", "borderRadius": "9999px", "cursor": "pointer", "transition": "background 300ms ease"}} style-hover="background: #ffffff;">Reserve</div>
          </div>
        </nav>


        <section id="s1" data-screen-label="01 Hero" style={{"position": "relative", "height": "420vh"}}>
          <div style={{"position": "sticky", "top": "0", "height": "100vh", "overflow": "hidden"}}>
            <video id="v1" src="https://souranyp-stack.github.io/argentum-watch/argentum-v3-assets/video-01-6587d79bd4.mp4" muted="&#123;&#123; true &#125;&#125;" playsInline="&#123;&#123; true &#125;&#125;" preload="auto" style={{"position": "absolute", "inset": "0", "width": "100%", "height": "100%", "objectFit": "cover", "transformOrigin": "50% 46%", "willChange": "transform"}}></video>
            <div style={{"position": "absolute", "inset": "0", "background": "radial-gradient(ellipse 70% 55% at 50% 42%, rgba(0,0,0,0) 30%, rgba(3,5,10,0.75) 100%)"}}></div>
            <div id="s1dark" style={{"position": "absolute", "inset": "0", "background": "linear-gradient(180deg, rgba(4,6,11,0.4) 0%, rgba(4,6,11,0.1) 35%, rgba(4,6,11,0.7) 100%)", "opacity": "0.3"}}></div>
            <div id="fade1" style={{"position": "absolute", "inset": "0", "background": "#04060b", "opacity": "0", "pointerEvents": "none", "zIndex": "5"}}></div>

            <div style={{"position": "absolute", "inset": "0", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "zIndex": "3", "pointerEvents": "none"}}>
              <div id="s1eyebrow" style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "11px", "letterSpacing": "0.5em", "color": "#8b94a6", "marginBottom": "28px"}}>MANUFACTURE · SINCE 1948</div>
              <div style={{"display": "flex", "gap": "0.35em", "alignItems": "baseline", "whiteSpace": "nowrap"}}>
                <span id="h1a" style={{"fontFamily": "'Cormorant Garamond', serif", "fontWeight": "500", "fontSize": "clamp(52px, 9vw, 148px)", "letterSpacing": "0.06em", "color": "#f2f4f8", "display": "inline-block", "willChange": "transform, opacity", "textShadow": "0 4px 60px rgba(0,0,0,0.6)"}}>ARGENTUM</span>
                <span id="h1b" style={{"fontFamily": "'Cormorant Garamond', serif", "fontWeight": "400", "fontStyle": "italic", "fontSize": "clamp(52px, 9vw, 148px)", "letterSpacing": "0.04em", "color": "#c8d0dd", "display": "inline-block", "willChange": "transform, opacity", "textShadow": "0 4px 60px rgba(0,0,0,0.6)"}}>Genève</span>
              </div>
              <div id="s1sub" style={{"marginTop": "30px", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "40px", "willChange": "transform, opacity", "pointerEvents": "auto"}}>
                <div style={{"fontSize": "14px", "fontWeight": "300", "letterSpacing": "0.34em", "textTransform": "uppercase", "color": "#aab2c2"}}>Precision shaped by time</div>
                <div style={{"display": "flex", "gap": "18px"}}>
                  <a href="#collection" style={{"display": "inline-block", "fontSize": "11px", "letterSpacing": "0.22em", "textTransform": "uppercase", "color": "#04060b", "background": "#dfe5ee", "padding": "17px 38px", "borderRadius": "9999px", "transition": "background 300ms ease"}} style-hover="background: #ffffff; color: #04060b;">Explore Collection</a>
                  <a href="#showcase" style={{"display": "inline-block", "fontSize": "11px", "letterSpacing": "0.22em", "textTransform": "uppercase", "color": "#eef1f6", "background": "rgba(255,255,255,0.07)", "border": "1px solid rgba(230,238,250,0.28)", "padding": "16px 38px", "borderRadius": "9999px", "backdropFilter": "blur(24px) saturate(160%)", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -8px 20px rgba(0,0,0,0.35), 0 8px 30px rgba(0,0,0,0.45)", "transition": "border-color 300ms ease, background 300ms ease, color 300ms ease"}} style-hover="border-color: rgba(230,238,250,0.55); background: rgba(255,255,255,0.12); color: #ffffff;">Reserve Now</a>
                </div>
              </div>
            </div>

            <div id="s1hint" style={{"position": "absolute", "bottom": "34px", "left": "50%", "transform": "translateX(-50%)", "zIndex": "3", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "12px"}}>
              <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.4em", "color": "#6d7686"}}>SCROLL</div>
              <div style={{"width": "1px", "height": "44px", "background": "linear-gradient(180deg, rgba(210,222,244,0.5), rgba(210,222,244,0))", "overflow": "hidden"}}>
                <div style={{"width": "1px", "height": "100%", "background": "#eef1f6", "animation": "hintdrift 2.4s ease-in-out infinite"}}></div>
              </div>
            </div>
          </div>
        </section>


        <section id="s2" data-screen-label="02 Macro Mechanics" style={{"position": "relative", "height": "420vh", "marginTop": "-1px"}}>
          <div style={{"position": "sticky", "top": "0", "height": "100vh", "overflow": "hidden"}}>
            <video id="v2" src="https://souranyp-stack.github.io/argentum-watch/argentum-v3-assets/video-02-5948fc4804.mp4" muted="&#123;&#123; true &#125;&#125;" playsInline="&#123;&#123; true &#125;&#125;" preload="auto" style={{"position": "absolute", "inset": "0", "width": "100%", "height": "100%", "objectFit": "cover", "willChange": "transform"}}></video>
            <div style={{"position": "absolute", "inset": "0", "background": "radial-gradient(ellipse 62% 52% at 50% 48%, rgba(0,0,0,0) 34%, rgba(3,5,10,0.82) 100%)"}}></div>
            <div id="fade2" style={{"position": "absolute", "inset": "0", "background": "#04060b", "opacity": "1", "pointerEvents": "none", "zIndex": "5"}}></div>

            <div id="s2title" style={{"position": "absolute", "top": "9vh", "left": "0", "right": "0", "textAlign": "center", "zIndex": "3", "willChange": "transform, opacity"}}>
              <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "11px", "letterSpacing": "0.5em", "color": "#8b94a6", "marginBottom": "14px"}}>CALIBRE AG-72</div>
              <div style={{"fontFamily": "'Cormorant Garamond', serif", "fontSize": "clamp(30px, 3.6vw, 54px)", "fontWeight": "500", "color": "#f2f4f8"}}>The mechanics of <em style={{"fontWeight": "400", "color": "#c8d0dd"}}>quiet obsession</em></div>
            </div>

            <div data-panel="0" data-dx="-140" data-dy="-30" data-spd="0.8" style={{"position": "absolute", "left": "5vw", "top": "24vh", "zIndex": "4", "width": "250px", "background": "rgba(10,14,24,0.82)", "border": "1px solid rgba(210,222,244,0.14)", "borderRadius": "18px", "padding": "22px 24px", "boxShadow": "0 18px 45px -8px rgba(0,0,0,0.9)", "willChange": "transform, opacity"}}>
              <div data-line="0" style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.32em", "color": "#8b94a6"}}>01 — COMPLICATION</div>
              <div data-line="1" style={{"fontFamily": "'Cormorant Garamond', serif", "fontSize": "24px", "fontWeight": "500", "color": "#f2f4f8", "marginTop": "10px"}}>Moonphase Display</div>
              <div data-line="2" style={{"fontSize": "12px", "lineHeight": "1.7", "color": "#9aa3b2", "marginTop": "8px"}}>A 122-year accurate lunar disc, hand-finished in rhodium.</div>
              <div style={{"position": "absolute", "top": "50%", "right": "-60px", "width": "60px", "height": "1px", "background": "linear-gradient(90deg, rgba(210,222,244,0.4), rgba(210,222,244,0))"}}></div>
            </div>

            <div data-panel="1" data-dx="150" data-dy="-50" data-spd="1.25" style={{"position": "absolute", "right": "5vw", "top": "21vh", "zIndex": "4", "width": "250px", "background": "rgba(10,14,24,0.82)", "border": "1px solid rgba(210,222,244,0.14)", "borderRadius": "18px", "padding": "22px 24px", "boxShadow": "0 18px 45px -8px rgba(0,0,0,0.9)", "willChange": "transform, opacity"}}>
              <div data-line="0" style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.32em", "color": "#8b94a6"}}>02 — MOVEMENT</div>
              <div data-line="1" style={{"fontFamily": "'Cormorant Garamond', serif", "fontSize": "24px", "fontWeight": "500", "color": "#f2f4f8", "marginTop": "10px"}}>Open-Heart Movement</div>
              <div data-line="2" style={{"fontSize": "12px", "lineHeight": "1.7", "color": "#9aa3b2", "marginTop": "8px"}}>The escapement beats in open view — 28,800 vibrations per hour.</div>
              <div style={{"position": "absolute", "top": "50%", "left": "-60px", "width": "60px", "height": "1px", "background": "linear-gradient(270deg, rgba(210,222,244,0.4), rgba(210,222,244,0))"}}></div>
            </div>

            <div data-panel="2" data-dx="-150" data-dy="60" data-spd="1.5" style={{"position": "absolute", "left": "6vw", "bottom": "18vh", "zIndex": "4", "width": "240px", "background": "rgba(10,14,24,0.82)", "border": "1px solid rgba(210,222,244,0.14)", "borderRadius": "18px", "padding": "22px 24px", "boxShadow": "0 18px 45px -8px rgba(0,0,0,0.9)", "willChange": "transform, opacity"}}>
              <div data-line="0" style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.32em", "color": "#8b94a6"}}>03 — AUTONOMY</div>
              <div data-line="1" style={{"fontFamily": "'Cormorant Garamond', serif", "fontSize": "24px", "fontWeight": "500", "color": "#f2f4f8", "marginTop": "10px"}}>72h Power Reserve</div>
              <div data-line="2" style={{"fontSize": "12px", "lineHeight": "1.7", "color": "#9aa3b2", "marginTop": "8px"}}>A full weekend off the wrist, indicated at nine o'clock.</div>
            </div>

            <div data-panel="3" data-dx="150" data-dy="80" data-spd="0.9" style={{"position": "absolute", "right": "6vw", "bottom": "16vh", "zIndex": "4", "width": "240px", "background": "rgba(10,14,24,0.82)", "border": "1px solid rgba(210,222,244,0.14)", "borderRadius": "18px", "padding": "22px 24px", "boxShadow": "0 18px 45px -8px rgba(0,0,0,0.9)", "willChange": "transform, opacity"}}>
              <div data-line="0" style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.32em", "color": "#8b94a6"}}>04 — CALIBRE</div>
              <div data-line="1" style={{"fontFamily": "'Cormorant Garamond', serif", "fontSize": "24px", "fontWeight": "500", "color": "#f2f4f8", "marginTop": "10px"}}>Swiss Automatic Calibre</div>
              <div data-line="2" style={{"fontSize": "12px", "lineHeight": "1.7", "color": "#9aa3b2", "marginTop": "8px"}}>In-house Calibre AG-72, assembled and adjusted in Geneva.</div>
            </div>

            <div data-panel="4" data-dx="0" data-dy="130" data-spd="1.1" style={{"position": "absolute", "left": "50%", "bottom": "6vh", "marginLeft": "-135px", "zIndex": "4", "width": "270px", "textAlign": "center", "background": "rgba(10,14,24,0.82)", "border": "1px solid rgba(210,222,244,0.14)", "borderRadius": "18px", "padding": "18px 24px", "boxShadow": "0 18px 45px -8px rgba(0,0,0,0.9)", "willChange": "transform, opacity"}}>
              <div data-line="0" style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.32em", "color": "#8b94a6"}}>05 — PROTECTION</div>
              <div data-line="1" style={{"fontFamily": "'Cormorant Garamond', serif", "fontSize": "22px", "fontWeight": "500", "color": "#f2f4f8", "marginTop": "8px"}}>Sapphire Crystal</div>
            </div>
          </div>
        </section>


        <section id="s3" data-screen-label="03 Philosophy" style={{"position": "relative", "height": "300vh", "background": "linear-gradient(180deg, #04060b 0%, #070b14 50%, #04060b 100%)"}}>
          <div style={{"position": "sticky", "top": "0", "height": "100vh", "overflow": "hidden", "display": "grid", "gridTemplateColumns": "minmax(0, 7fr) minmax(0, 5fr)", "alignItems": "center", "gap": "5vw", "padding": "0 6vw", "boxSizing": "border-box"}}>
            <div style={{"position": "relative", "zIndex": "3"}}>
              <div style={{"display": "flex", "alignItems": "center", "gap": "18px", "marginBottom": "42px"}}>
                <div style={{"width": "48px", "height": "1px", "background": "rgba(210,222,244,0.3)"}}></div>
                <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.44em", "color": "#8b94a6", "writingMode": "horizontal-tb"}}>DESIGN PHILOSOPHY</div>
              </div>
              <h2 id="s3h" style={{"fontFamily": "'Cormorant Garamond', serif", "fontWeight": "500", "fontSize": "clamp(34px, 3.9vw, 62px)", "lineHeight": "1.25", "color": "#f2f4f8", "margin": "0", "maxWidth": "15em"}}>Crafted for those who measure life in moments, not minutes.</h2>
              <p id="s3p" style={{"fontSize": "14px", "fontWeight": "300", "lineHeight": "2", "color": "#9aa3b2", "maxWidth": "46ch", "margin": "44px 0 0 0", "willChange": "clip-path, opacity"}}>Every Argentum case begins as a single billet of 904L steel, brushed by hand until the grain runs unbroken from lug to lug. The dial is stamped, lacquered and stoned seventeen times before a hand ever touches it. Nothing is decorated. Everything is finished — a distinction our watchmakers consider absolute.</p>
              <div style={{"display": "flex", "alignItems": "center", "gap": "26px", "marginTop": "52px"}}>
                <div style={{"width": "100%", "maxWidth": "320px", "height": "1px", "background": "linear-gradient(90deg, rgba(210,222,244,0.28), rgba(210,222,244,0))"}}></div>
              </div>
            </div>
            <div id="s3vis" style={{"position": "relative", "height": "66vh", "borderRadius": "20px", "overflow": "hidden", "border": "1px solid rgba(210,222,244,0.12)", "boxShadow": "0 18px 45px -8px rgba(0,0,0,0.9)", "willChange": "transform"}}>
              <video id="v3" src="https://souranyp-stack.github.io/argentum-watch/argentum-v3-assets/video-02-5948fc4804.mp4" muted="&#123;&#123; true &#125;&#125;" playsInline="&#123;&#123; true &#125;&#125;" autoPlay="&#123;&#123; true &#125;&#125;" loop="&#123;&#123; true &#125;&#125;" preload="metadata" style={{"position": "absolute", "width": "100%", "height": "120%", "top": "-10%", "left": "0", "objectFit": "cover", "transform": "scale(1.3)"}}></video>
              <div style={{"position": "absolute", "inset": "0", "background": "linear-gradient(180deg, rgba(4,6,11,0.25), rgba(4,6,11,0) 40%, rgba(4,6,11,0.55))"}}></div>
              <div style={{"position": "absolute", "bottom": "20px", "left": "22px", "fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.34em", "color": "#aab2c2"}}>CASE DETAIL · 904L</div>
            </div>
          </div>
        </section>


        <section id="s4" data-screen-label="04 Features" style={{"position": "relative", "height": "300vh"}}>
          <div style={{"position": "sticky", "top": "0", "height": "100vh", "overflow": "hidden", "display": "flex", "flexDirection": "column", "justifyContent": "center", "padding": "0 6vw", "boxSizing": "border-box", "perspective": "1400px"}}>
            <div id="s4head" style={{"display": "flex", "alignItems": "baseline", "justifyContent": "space-between", "marginBottom": "34px", "willChange": "transform, opacity"}}>
              <h2 style={{"fontFamily": "'Cormorant Garamond', serif", "fontWeight": "500", "fontSize": "clamp(28px, 3vw, 46px)", "color": "#f2f4f8", "margin": "0"}}>Eight decisions, <em style={{"fontWeight": "400", "color": "#c8d0dd"}}>no compromises</em></h2>
              <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.4em", "color": "#8b94a6"}}>SPECIFICATION</div>
            </div>
            <div style={{"display": "grid", "gridTemplateColumns": "repeat(4, minmax(0, 1fr))", "gridAutoRows": "minmax(150px, 19vh)", "gap": "14px"}}>

              <div data-bento="0" data-tx="-160" data-ty="-90" data-rz="-6" style={{"gridColumn": "span 2", "gridRow": "span 2", "position": "relative", "overflow": "hidden", "background": "rgba(10,14,24,0.72)", "border": "1px solid rgba(210,222,244,0.13)", "borderRadius": "20px", "padding": "28px", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.06), 0 18px 45px -8px rgba(0,0,0,0.8)", "willChange": "transform, opacity"}}>
                <div style={{"position": "absolute", "right": "-46px", "top": "-46px", "width": "210px", "height": "210px", "borderRadius": "50%", "background": "radial-gradient(circle at 35% 35%, #dfe5ee 0%, #8b94a6 28%, #232a38 62%, #0a0f1a 100%)", "boxShadow": "0 0 80px rgba(160,180,220,0.22)", "animation": "moonspin 42s linear infinite"}}></div>
                <div style={{"position": "absolute", "right": "-46px", "top": "-46px", "width": "210px", "height": "210px", "borderRadius": "50%", "background": "radial-gradient(circle at 70% 70%, rgba(4,6,11,0.9) 0%, rgba(4,6,11,0) 55%)"}}></div>
                <div style={{"position": "absolute", "right": "-71px", "top": "-71px", "width": "260px", "height": "260px", "borderRadius": "50%", "border": "1px dashed rgba(210,222,244,0.14)", "animation": "gearspin 24s linear infinite"}}><div style={{"position": "absolute", "left": "50%", "top": "-3px", "width": "5px", "height": "5px", "marginLeft": "-2.5px", "borderRadius": "50%", "background": "#dfe5ee", "boxShadow": "0 0 12px rgba(200,215,245,0.9)"}}></div></div>
                <div style={{"position": "absolute", "left": "28px", "top": "26px", "width": "3px", "height": "3px", "borderRadius": "50%", "background": "rgba(220,232,250,0.8)", "animation": "pulse 3.2s ease-in-out infinite"}}></div>
                <div style={{"position": "absolute", "left": "96px", "top": "54px", "width": "2px", "height": "2px", "borderRadius": "50%", "background": "rgba(220,232,250,0.6)", "animation": "pulse 4.4s ease-in-out 1s infinite"}}></div>
                <div style={{"position": "absolute", "left": "56px", "top": "108px", "width": "2px", "height": "2px", "borderRadius": "50%", "background": "rgba(220,232,250,0.5)", "animation": "pulse 5.1s ease-in-out 2s infinite"}}></div>
                <div style={{"position": "relative", "zIndex": "2", "display": "flex", "flexDirection": "column", "height": "100%", "justifyContent": "flex-end"}}>
                  <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.32em", "color": "#8b94a6"}}>COMPLICATION</div>
                  <div style={{"fontFamily": "'Cormorant Garamond', serif", "fontSize": "30px", "fontWeight": "500", "color": "#f2f4f8", "marginTop": "8px"}}>Moonphase complication</div>
                  <div style={{"fontSize": "12px", "lineHeight": "1.7", "color": "#9aa3b2", "marginTop": "6px", "maxWidth": "34ch"}}>The lunar disc deviates by a single day every 122 years.</div>
                  <div style={{"display": "flex", "gap": "14px", "marginTop": "16px", "alignItems": "center", "flexWrap": "wrap"}}>
                    <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.2em", "color": "#6d7686"}}>LUNATION 29.53 D</div>
                    <div style={{"width": "1px", "height": "12px", "background": "rgba(210,222,244,0.2)"}}></div>
                    <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.2em", "color": "#6d7686"}}>AGE 12.4 D</div>
                    <div style={{"width": "1px", "height": "12px", "background": "rgba(210,222,244,0.2)"}}></div>
                    <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.2em", "color": "#6d7686"}}>WAXING GIBBOUS</div>
                  </div>
                </div>
              </div>

              <div data-bento="1" data-tx="120" data-ty="-140" data-rz="5" style={{"gridColumn": "span 2", "position": "relative", "overflow": "hidden", "background": "rgba(10,14,24,0.72)", "border": "1px solid rgba(210,222,244,0.13)", "borderRadius": "20px", "padding": "26px", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.06), 0 18px 45px -8px rgba(0,0,0,0.8)", "willChange": "transform, opacity"}}>
                <div style={{"position": "absolute", "right": "22px", "top": "50%", "transform": "translateY(-50%)"}}>
                  <div style={{"width": "86px", "height": "86px", "borderRadius": "50%", "border": "1px dashed rgba(210,222,244,0.4)", "animation": "gearspin 26s linear infinite"}}></div>
                  <div style={{"position": "absolute", "right": "60px", "top": "42px", "width": "52px", "height": "52px", "borderRadius": "50%", "border": "1px dashed rgba(210,222,244,0.28)", "animation": "moonspin 16s linear infinite"}}></div>
                  <div style={{"position": "absolute", "right": "16px", "top": "16px", "width": "54px", "height": "54px", "borderRadius": "50%", "borderTop": "2px solid rgba(223,229,238,0.75)", "borderRight": "2px solid rgba(223,229,238,0.12)", "borderBottom": "2px solid transparent", "borderLeft": "2px solid rgba(223,229,238,0.12)", "animation": "oscillate 0.9s ease-in-out infinite"}}></div>
                </div>
                <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.32em", "color": "#8b94a6"}}>MOVEMENT</div>
                <div style={{"fontFamily": "'Cormorant Garamond', serif", "fontSize": "24px", "fontWeight": "500", "color": "#f2f4f8", "marginTop": "8px"}}>Open-heart automatic</div>
                <div style={{"fontSize": "12px", "color": "#9aa3b2", "marginTop": "6px"}}>Balance wheel exposed at six o'clock.</div>
                <div style={{"display": "flex", "alignItems": "center", "gap": "8px", "marginTop": "12px"}}>
                  <div style={{"width": "5px", "height": "5px", "borderRadius": "50%", "background": "#dfe5ee", "animation": "pulse 0.9s ease-in-out infinite"}}></div>
                  <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.2em", "color": "#6d7686"}}>28,800 VPH · 4 HZ · 31 JEWELS</div>
                </div>
              </div>

              <div data-bento="2" data-tx="200" data-ty="-40" data-rz="-4" style={{"position": "relative", "overflow": "hidden", "background": "linear-gradient(115deg, #141a26 0%, #1e2634 42%, #12171f 100%)", "border": "1px solid rgba(210,222,244,0.13)", "borderRadius": "20px", "padding": "24px", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.07), 0 18px 45px -8px rgba(0,0,0,0.8)", "willChange": "transform, opacity"}}>
                <div style={{"position": "absolute", "inset": "0", "background": "repeating-linear-gradient(100deg, rgba(230,238,250,0.05) 0px, rgba(230,238,250,0) 2px, rgba(230,238,250,0) 5px)"}}></div>
                <div style={{"position": "absolute", "inset": "0", "overflow": "hidden"}}><div style={{"position": "absolute", "top": "-20%", "bottom": "-20%", "width": "40%", "background": "linear-gradient(90deg, rgba(230,238,250,0) 0%, rgba(230,238,250,0.14) 50%, rgba(230,238,250,0) 100%)", "animation": "sweep 5.5s ease-in-out infinite"}}></div></div>
                <div style={{"position": "relative", "zIndex": "2", "display": "flex", "flexDirection": "column", "height": "100%", "justifyContent": "flex-end"}}>
                  <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.32em", "color": "#8b94a6"}}>CASE</div>
                  <div style={{"fontFamily": "'Cormorant Garamond', serif", "fontSize": "21px", "fontWeight": "500", "color": "#f2f4f8", "marginTop": "6px"}}>Brushed silver case</div>
                  <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.2em", "color": "#6d7686", "marginTop": "8px"}}>904L STEEL · Ø 40.5 MM · H 11.2 MM</div>
                </div>
              </div>

              <div data-bento="3" data-tx="90" data-ty="120" data-rz="7" style={{"position": "relative", "overflow": "hidden", "background": "rgba(8,12,22,0.55)", "border": "1px solid rgba(210,222,244,0.13)", "borderRadius": "20px", "padding": "24px", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.06), 0 18px 45px -8px rgba(0,0,0,0.8)", "willChange": "transform, opacity"}}>
                <div style={{"position": "absolute", "inset": "0", "backgroundImage": "radial-gradient(rgba(200,212,232,0.09) 1.4px, transparent 1.4px)", "backgroundSize": "13px 13px", "animation": "texzoom 9s ease-in-out infinite"}}></div>
                <div style={{"position": "relative", "zIndex": "2", "display": "flex", "flexDirection": "column", "height": "100%", "justifyContent": "flex-end"}}>
                  <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.32em", "color": "#8b94a6"}}>STRAP</div>
                  <div style={{"fontFamily": "'Cormorant Garamond', serif", "fontSize": "21px", "fontWeight": "500", "color": "#f2f4f8", "marginTop": "6px"}}>Black crocodile leather</div>
                  <div style={{"height": "6px", "marginTop": "12px", "backgroundImage": "linear-gradient(90deg, rgba(223,229,238,0.7) 0 10px, transparent 10px 22px)", "backgroundSize": "22px 2px", "backgroundRepeat": "repeat-x", "backgroundPosition": "0 50%", "animation": "stitchmove 1.6s linear infinite"}}></div>
                  <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.2em", "color": "#6d7686", "marginTop": "6px"}}>HAND-STITCHED · 142 PASSES</div>
                </div>
              </div>

              <div data-bento="4" data-tx="-190" data-ty="70" data-rz="5" style={{"position": "relative", "overflow": "hidden", "background": "rgba(10,14,24,0.72)", "border": "1px solid rgba(210,222,244,0.13)", "borderRadius": "20px", "padding": "24px", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.06), 0 18px 45px -8px rgba(0,0,0,0.8)", "willChange": "transform, opacity"}}>
                <div style={{"display": "flex", "alignItems": "flex-start", "justifyContent": "space-between"}}>
                  <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "42px", "fontWeight": "500", "color": "#dfe5ee", "letterSpacing": "-0.02em"}}>72<span style={{"fontSize": "18px", "color": "#8b94a6"}}>H</span></div>
                  <div style={{"position": "relative", "width": "74px", "height": "42px", "overflow": "hidden"}}>
                    <div style={{"position": "absolute", "left": "0", "top": "0", "width": "72px", "height": "72px", "borderRadius": "50%", "border": "1px solid rgba(210,222,244,0.25)"}}></div>
                    <div style={{"position": "absolute", "left": "50%", "bottom": "-2px", "width": "2px", "height": "30px", "marginLeft": "-1px", "background": "#dfe5ee", "transformOrigin": "50% 100%", "animation": "needleswing 5.5s ease-in-out infinite"}}></div>
                    <div style={{"position": "absolute", "left": "3px", "bottom": "0", "fontFamily": "'JetBrains Mono', monospace", "fontSize": "8px", "color": "#6d7686"}}>E</div>
                    <div style={{"position": "absolute", "right": "3px", "bottom": "0", "fontFamily": "'JetBrains Mono', monospace", "fontSize": "8px", "color": "#6d7686"}}>F</div>
                  </div>
                </div>
                <div style={{"display": "flex", "flexDirection": "column", "marginTop": "14px"}}>
                  <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.32em", "color": "#8b94a6"}}>RESERVE</div>
                  <div style={{"fontFamily": "'Cormorant Garamond', serif", "fontSize": "20px", "fontWeight": "500", "color": "#f2f4f8", "marginTop": "6px"}}>Power reserve indicator</div>
                </div>
              </div>

              <div data-bento="5" data-tx="-80" data-ty="150" data-rz="-7" style={{"position": "relative", "overflow": "hidden", "background": "rgba(10,14,24,0.72)", "border": "1px solid rgba(210,222,244,0.13)", "borderRadius": "20px", "padding": "24px", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.06), 0 18px 45px -8px rgba(0,0,0,0.8)", "willChange": "transform, opacity"}}>
                <div style={{"position": "relative", "width": "62px", "height": "62px"}}>
                  <div style={{"position": "absolute", "inset": "-8px", "borderRadius": "50%", "border": "1px dashed rgba(210,222,244,0.22)", "animation": "moonspin 30s linear infinite"}}></div>
                  <div style={{"width": "62px", "height": "62px", "borderRadius": "50%", "border": "1px solid rgba(210,222,244,0.25)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "'JetBrains Mono', monospace", "fontSize": "18px", "color": "#dfe5ee", "boxSizing": "border-box"}}>31</div>
                </div>
                <div style={{"display": "flex", "flexDirection": "column", "marginTop": "14px"}}>
                  <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.32em", "color": "#8b94a6"}}>CALENDAR</div>
                  <div style={{"fontFamily": "'Cormorant Garamond', serif", "fontSize": "20px", "fontWeight": "500", "color": "#f2f4f8", "marginTop": "6px"}}>Date subdial</div>
                  <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.2em", "color": "#6d7686", "marginTop": "6px"}}>INSTANT JUMP · MIDNIGHT ±5 MIN</div>
                </div>
              </div>

              <div data-bento="6" data-tx="160" data-ty="100" data-rz="4" style={{"position": "relative", "overflow": "hidden", "background": "rgba(10,14,24,0.72)", "border": "1px solid rgba(210,222,244,0.13)", "borderRadius": "20px", "padding": "24px", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.06), 0 18px 45px -8px rgba(0,0,0,0.8)", "willChange": "transform, opacity"}}>
                <div style={{"position": "absolute", "left": "20%", "top": "-30%", "width": "60%", "height": "80%", "borderRadius": "50%", "background": "radial-gradient(ellipse at 50% 100%, rgba(190,208,236,0.14), rgba(190,208,236,0) 70%)"}}></div>
                <div style={{"position": "absolute", "inset": "0", "overflow": "hidden"}}><div style={{"position": "absolute", "top": "-20%", "bottom": "-20%", "width": "30%", "background": "linear-gradient(90deg, rgba(230,238,250,0) 0%, rgba(230,238,250,0.1) 50%, rgba(230,238,250,0) 100%)", "animation": "sweep 7s ease-in-out 1.4s infinite"}}></div></div>
                <div style={{"position": "relative", "zIndex": "2", "display": "flex", "flexDirection": "column", "height": "100%", "justifyContent": "flex-end"}}>
                  <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.32em", "color": "#8b94a6"}}>GLASS</div>
                  <div style={{"fontFamily": "'Cormorant Garamond', serif", "fontSize": "20px", "fontWeight": "500", "color": "#f2f4f8", "marginTop": "6px"}}>Sapphire crystal</div>
                  <div style={{"fontSize": "12px", "color": "#9aa3b2", "marginTop": "4px"}}>Double-domed, anti-reflective.</div>
                  <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.2em", "color": "#6d7686", "marginTop": "8px"}}>HARDNESS 9 MOHS · AR COATING ×2</div>
                </div>
              </div>

              <div data-bento="7" data-tx="-120" data-ty="-120" data-rz="6" style={{"position": "relative", "overflow": "hidden", "background": "rgba(10,14,24,0.72)", "border": "1px solid rgba(210,222,244,0.13)", "borderRadius": "20px", "padding": "24px", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.06), 0 18px 45px -8px rgba(0,0,0,0.8)", "willChange": "transform, opacity"}}>
                <div style={{"display": "flex", "alignItems": "center", "gap": "10px"}}>
                  <div style={{"width": "8px", "height": "8px", "background": "#dfe5ee"}}></div>
                  <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.4em", "color": "#dfe5ee"}}>SWISS MADE</div>
                </div>
                <div style={{"display": "flex", "flexDirection": "column", "marginTop": "14px"}}>
                  <div style={{"fontFamily": "'Cormorant Garamond', serif", "fontSize": "20px", "fontWeight": "500", "color": "#f2f4f8"}}>Geneva finishing</div>
                  <div style={{"fontSize": "12px", "color": "#9aa3b2", "marginTop": "4px"}}>Côtes de Genève, perlage, anglage.</div>
                  <div style={{"display": "flex", "alignItems": "center", "gap": "8px", "marginTop": "12px"}}>
                    <div style={{"width": "5px", "height": "5px", "borderRadius": "50%", "background": "#dfe5ee", "animation": "pulse 2.4s ease-in-out infinite"}}></div>
                    <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.2em", "color": "#6d7686"}}>POINÇON DE GENÈVE · CERT. Nº 0448</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        <section id="s5" data-screen-label="05 Product Showcase" style={{"position": "relative", "height": "380vh"}}>
          <a id="showcase" style={{"position": "absolute", "top": "0"}}></a>
          <div style={{"position": "sticky", "top": "0", "height": "100vh", "overflow": "hidden", "display": "grid", "gridTemplateColumns": "minmax(0, 7fr) minmax(0, 5fr)", "alignItems": "center", "padding": "0 6vw", "boxSizing": "border-box", "gap": "4vw"}}>
            <div style={{"position": "relative", "height": "84vh", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "perspective": "1400px"}}>

              <div id="s5ta" style={{"position": "absolute", "right": "50%", "top": "40%", "zIndex": "0", "fontFamily": "'Cormorant Garamond', serif", "fontWeight": "500", "fontSize": "clamp(60px, 8vw, 150px)", "letterSpacing": "0.08em", "color": "rgba(210,222,244,0.16)", "lineHeight": "1", "whiteSpace": "nowrap", "pointerEvents": "none", "willChange": "transform, opacity"}}>MOON</div>
              <div id="s5tb" style={{"position": "absolute", "left": "50%", "top": "40%", "zIndex": "0", "fontFamily": "'Cormorant Garamond', serif", "fontWeight": "400", "fontStyle": "italic", "fontSize": "clamp(60px, 8vw, 150px)", "letterSpacing": "0.08em", "color": "rgba(210,222,244,0.16)", "lineHeight": "1", "whiteSpace": "nowrap", "pointerEvents": "none", "willChange": "transform, opacity"}}>PHASE</div>
              <div id="s5glow" style={{"position": "absolute", "left": "50%", "top": "50%", "width": "60vmin", "height": "60vmin", "transform": "translate(-50%, -50%)", "borderRadius": "50%", "background": "radial-gradient(circle, rgba(150,175,220,0.16) 0%, rgba(150,175,220,0) 65%)", "willChange": "opacity"}}></div>
              <div id="s5frame" style={{"position": "relative", "zIndex": "1", "width": "100%", "height": "72vh", "borderRadius": "24px", "overflow": "hidden", "border": "1px solid rgba(210,222,244,0.12)", "boxShadow": "0 18px 45px -8px rgba(0,0,0,0.95)", "willChange": "transform"}}>
                <video id="v5" src="https://souranyp-stack.github.io/argentum-watch/argentum-v3-assets/video-01-6587d79bd4.mp4" muted="&#123;&#123; true &#125;&#125;" playsInline="&#123;&#123; true &#125;&#125;" preload="metadata" style={{"position": "absolute", "inset": "0", "width": "100%", "height": "100%", "objectFit": "cover"}}></video>
                <img id="varimg1" src="https://souranyp-stack.github.io/argentum-watch/argentum-v3-assets/image-01-9dcdd44636.jpg" alt="Argentum silver steel bracelet" style={{"position": "absolute", "inset": "0", "width": "100%", "height": "100%", "objectFit": "cover", "opacity": "0", "transition": "opacity 700ms cubic-bezier(0.4, 0, 0.2, 1)", "willChange": "opacity"}} />
                <img id="varimg2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="Argentum moonphase dial detail" style={{"position": "absolute", "inset": "0", "width": "100%", "height": "100%", "objectFit": "cover", "opacity": "0", "transition": "opacity 700ms cubic-bezier(0.4, 0, 0.2, 1)", "willChange": "opacity"}} />
                <div style={{"position": "absolute", "inset": "0", "background": "radial-gradient(ellipse 75% 65% at 50% 45%, rgba(0,0,0,0) 45%, rgba(3,5,10,0.6) 100%)", "pointerEvents": "none"}}></div>

                <div id="s5sweep" style={{"position": "absolute", "inset": "-10%", "zIndex": "2", "pointerEvents": "none", "background": "linear-gradient(115deg, rgba(230,238,250,0) 34%, rgba(230,238,250,0.16) 50%, rgba(230,238,250,0) 66%)", "transform": "translateX(-130%)", "willChange": "transform"}}></div>
                <div id="varlabel" style={{"position": "absolute", "top": "18px", "left": "20px", "zIndex": "3", "fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.34em", "color": "#aab2c2", "transition": "opacity 400ms ease"}}>360° · SCROLL TO ROTATE</div>
              </div>
              <div style={{"display": "flex", "gap": "10px", "marginTop": "22px"}}>
                <div data-variant="0" style={{"fontSize": "10px", "letterSpacing": "0.18em", "textTransform": "uppercase", "color": "#04060b", "background": "#dfe5ee", "border": "1px solid rgba(210,222,244,0.3)", "padding": "10px 20px", "borderRadius": "9999px", "cursor": "pointer", "transition": "all 300ms ease"}}>Black Leather</div>
                <div data-variant="1" style={{"fontSize": "10px", "letterSpacing": "0.18em", "textTransform": "uppercase", "color": "#9aa3b2", "background": "rgba(8,12,22,0.5)", "border": "1px solid rgba(210,222,244,0.16)", "padding": "10px 20px", "borderRadius": "9999px", "cursor": "pointer", "transition": "all 300ms ease"}} style-hover="border-color: rgba(230,238,250,0.4); color: #eef1f6;">Silver Case</div>
                <div data-variant="2" style={{"fontSize": "10px", "letterSpacing": "0.18em", "textTransform": "uppercase", "color": "#9aa3b2", "background": "rgba(8,12,22,0.5)", "border": "1px solid rgba(210,222,244,0.16)", "padding": "10px 20px", "borderRadius": "9999px", "cursor": "pointer", "transition": "all 300ms ease"}} style-hover="border-color: rgba(230,238,250,0.4); color: #eef1f6;">Moonphase Dial</div>
              </div>
            </div>

            <div style={{"display": "flex", "flexDirection": "column", "gap": "0"}}>
              <div data-spec="0" style={{"willChange": "transform, opacity"}}>
                <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.4em", "color": "#8b94a6"}}>REF. AG-1948-MS</div>
                <h2 style={{"fontFamily": "'Cormorant Garamond', serif", "fontWeight": "500", "fontSize": "clamp(30px, 3vw, 46px)", "color": "#f2f4f8", "margin": "14px 0 0 0", "lineHeight": "1.15"}}>Argentum Moonphase <em style={{"fontWeight": "400", "color": "#c8d0dd"}}>Silver</em></h2>
                <p style={{"fontSize": "13px", "fontWeight": "300", "lineHeight": "1.9", "color": "#9aa3b2", "margin": "18px 0 0 0", "maxWidth": "44ch"}}>A brushed silver case around a black textured dial, carrying a moonphase, a date subdial and an open heart — driven by our in-house automatic calibre.</p>
              </div>
              <div style={{"height": "1px", "background": "rgba(210,222,244,0.12)", "margin": "30px 0"}}></div>
              <div style={{"display": "flex", "flexDirection": "column", "gap": "13px"}}>
                <div data-spec="1" style={{"display": "flex", "justifyContent": "space-between", "willChange": "transform, opacity"}}><span style={{"fontSize": "11px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "#7d8595"}}>Case</span><span style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "12px", "color": "#dfe5ee"}}>40.5 mm · brushed 904L</span></div>
                <div data-spec="2" style={{"display": "flex", "justifyContent": "space-between", "willChange": "transform, opacity"}}><span style={{"fontSize": "11px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "#7d8595"}}>Movement</span><span style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "12px", "color": "#dfe5ee"}}>Calibre AG-72 · automatic</span></div>
                <div data-spec="3" style={{"display": "flex", "justifyContent": "space-between", "willChange": "transform, opacity"}}><span style={{"fontSize": "11px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "#7d8595"}}>Strap</span><span style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "12px", "color": "#dfe5ee"}}>Black crocodile leather</span></div>
                <div data-spec="4" style={{"display": "flex", "justifyContent": "space-between", "willChange": "transform, opacity"}}><span style={{"fontSize": "11px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "#7d8595"}}>Water resistance</span><span style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "12px", "color": "#dfe5ee"}}>5 ATM</span></div>
                <div data-spec="5" style={{"display": "flex", "justifyContent": "space-between", "willChange": "transform, opacity"}}><span style={{"fontSize": "11px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "#7d8595"}}>Power reserve</span><span style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "12px", "color": "#dfe5ee"}}>72 hours</span></div>
              </div>
              <div style={{"height": "1px", "background": "rgba(210,222,244,0.12)", "margin": "30px 0"}}></div>
              <div data-spec="6" style={{"willChange": "transform, opacity"}}>
                <div id="s5price" style={{"fontFamily": "'Cormorant Garamond', serif", "fontSize": "38px", "fontWeight": "500", "color": "#ffffff", "willChange": "opacity"}}>CHF 24,500</div>
                <div style={{"display": "flex", "gap": "14px", "marginTop": "22px", "flexWrap": "wrap"}}>
                  <div data-add="AG-1948-MS" style={{"fontSize": "11px", "letterSpacing": "0.22em", "textTransform": "uppercase", "color": "#04060b", "background": "#dfe5ee", "padding": "17px 36px", "borderRadius": "9999px", "cursor": "pointer", "transition": "background 300ms ease"}} style-hover="background: #ffffff;">Add to Cart</div>
                  <div style={{"fontSize": "11px", "letterSpacing": "0.22em", "textTransform": "uppercase", "color": "#dfe5ee", "border": "1px solid rgba(210,222,244,0.22)", "padding": "16px 36px", "borderRadius": "9999px", "cursor": "pointer", "transition": "border-color 300ms ease, color 300ms ease"}} style-hover="border-color: rgba(230,238,250,0.5); color: #ffffff;">Reserve Appointment</div>
                </div>
                <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.24em", "color": "#6d7686", "marginTop": "18px"}}>COMPLIMENTARY DELIVERY · 5-YEAR INTERNATIONAL WARRANTY</div>
              </div>
            </div>
          </div>
        </section>



        <section id="s6" className="craft-lab" data-screen-label="06 Craftsmanship">
          <a id="craft" style={{"position": "absolute", "top": "0"}}></a>

          <div className="craft-sticky">
            <header className="craft-head">
              <h2 className="craft-title">The making of <em>an Argentum</em></h2>
              <div className="craft-kicker">MANUFACTURE · GENEVA</div>
            </header>

            <div className="craft-stage">
              <div className="craft-orbit" aria-hidden="true"></div>
              <div className="craft-core" aria-hidden="true">
                <div className="craft-core-label">
                  <span>CALIBRE</span>
                  <strong>A-01</strong>
                  <span>ASSEMBLY PATH</span>
                </div>
              </div>

              <div id="track">
                <article className="craft-node" data-step="0">
                  <div className="craft-node-head">
                    <div className="craft-index">01</div>
                    <div className="craft-meta">ATELIER 01<br />DRAWING ROOM</div>
                  </div>
                  <div className="craft-visual">
                    <div className="craft-dial"></div>
                    <div className="craft-scan"></div>
                  </div>
                  <div className="craft-copy">
                    <h3 data-steptitle="0">Design sketch</h3>
                    <div className="craft-status">ARCHIVED</div>
                    <p>Every reference begins as a full-scale study. Proportion, balance and light are resolved before a single tool touches metal.</p>
                  </div>
                </article>

                <article className="craft-node" data-step="1">
                  <div className="craft-node-head">
                    <div className="craft-index">02</div>
                    <div className="craft-meta">ATELIER 02<br />CASE ROOM</div>
                  </div>
                  <div className="craft-visual">
                    <div className="craft-part one"></div>
                    <div className="craft-part two"></div>
                    <div className="craft-part three"></div>
                    <div className="craft-scan"></div>
                  </div>
                  <div className="craft-copy">
                    <h3 data-steptitle="1">Case architecture</h3>
                    <div className="craft-status">MACHINING</div>
                    <p>The case is cut in controlled passes, then refined by hand until every transition feels continuous from lug to crown.</p>
                  </div>
                </article>

                <article className="craft-node" data-step="2">
                  <div className="craft-node-head">
                    <div className="craft-index">03</div>
                    <div className="craft-meta">ATELIER 03<br />FINISHING ROOM</div>
                  </div>
                  <div className="craft-visual">
                    <div className="craft-wave">
                      <svg viewBox="0 0 600 180" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M0 104 C54 18 106 164 164 82 S278 20 332 104 S446 164 504 76 S566 26 600 92" fill="none" stroke="rgba(222,232,245,.66)" strokeWidth="2" pathLength="100" strokeDasharray="100" style={{"animation": "drawpath 6s ease-in-out infinite"}}></path>
                        <path d="M0 128 C64 76 108 146 170 112 S276 70 340 128 S450 146 512 102 S570 86 600 114" fill="none" stroke="rgba(167,190,218,.28)" strokeWidth="1"></path>
                      </svg>
                    </div>
                    <div className="craft-scan"></div>
                  </div>
                  <div className="craft-copy">
                    <h3 data-steptitle="2">Surface finishing</h3>
                    <div className="craft-status">HAND WORK</div>
                    <p>Brushed planes and polished edges are finished independently so every surface responds to light with intention.</p>
                  </div>
                </article>

                <article className="craft-node" data-step="3">
                  <div className="craft-node-head">
                    <div className="craft-index">04</div>
                    <div className="craft-meta">ATELIER 04<br />ASSEMBLY BENCH</div>
                  </div>
                  <div className="craft-visual">
                    <div className="craft-dial"></div>
                    <div className="craft-part two"></div>
                    <div className="craft-part three"></div>
                  </div>
                  <div className="craft-copy">
                    <h3 data-steptitle="3">Movement assembly</h3>
                    <div className="craft-status">CALIBRATING</div>
                    <p>Hundreds of components are assembled under magnification, adjusted by feel, then regulated across multiple positions.</p>
                  </div>
                </article>

                <article className="craft-node" data-step="4">
                  <div className="craft-node-head">
                    <div className="craft-index">05</div>
                    <div className="craft-meta">ATELIER 05<br />LEATHER ROOM</div>
                  </div>
                  <div className="craft-visual">
                    <div className="craft-strap"></div>
                    <div className="craft-scan"></div>
                  </div>
                  <div className="craft-copy">
                    <h3 data-steptitle="4">Strap finishing</h3>
                    <div className="craft-status">HAND STITCHED</div>
                    <p>Edges are sealed, folded and stitched by hand. The final curve is shaped to sit naturally against the wrist.</p>
                  </div>
                </article>

                <article className="craft-node" data-step="5">
                  <div className="craft-node-head">
                    <div className="craft-index">06</div>
                    <div className="craft-meta">ATELIER 06<br />CONTROL ROOM</div>
                  </div>
                  <div className="craft-visual">
                    <div className="craft-stamp">GENEVA<br />FINAL<br />CONTROL</div>
                  </div>
                  <div className="craft-copy">
                    <h3 data-steptitle="5">Final inspection</h3>
                    <div className="craft-status">PASSED</div>
                    <p>Accuracy, amplitude, sealing and finishing are observed over several weeks before the watch receives its final signature.</p>
                  </div>
                </article>
              </div>
            </div>

            <div className="craft-rail">
              <span className="craft-rail-count">01 — 06</span>
              <div className="craft-rail-line"></div>
              <span>SCROLL TO FOLLOW THE CALIBRE</span>
            </div>
          </div>
        </section>


        <section id="s11" data-screen-label="11 Assembly Film" style={{"position": "relative", "height": "400vh"}}>
          <div style={{"position": "sticky", "top": "0", "height": "100vh", "overflow": "hidden"}}>
            <video id="v11" src="https://souranyp-stack.github.io/argentum-watch/argentum-v3-assets/video-03-2574601690.mp4" muted="&#123;&#123; true &#125;&#125;" playsInline="&#123;&#123; true &#125;&#125;" preload="metadata" style={{"position": "absolute", "inset": "0", "width": "100%", "height": "100%", "objectFit": "cover", "transformOrigin": "50% 50%", "willChange": "transform"}}></video>
            <div style={{"position": "absolute", "inset": "0", "background": "radial-gradient(ellipse 64% 54% at 50% 46%, rgba(0,0,0,0) 32%, rgba(3,5,10,0.8) 100%)"}}></div>
            <div id="fade11" style={{"position": "absolute", "inset": "0", "background": "#04060b", "opacity": "1", "pointerEvents": "none", "zIndex": "5"}}></div>


            <div id="s11vline" style={{"position": "absolute", "left": "50%", "top": "0", "bottom": "0", "width": "1px", "background": "rgba(210,222,244,0.14)", "transform": "scaleY(0)", "transformOrigin": "50% 0", "zIndex": "2", "willChange": "transform"}}></div>
            <div id="s11hline" style={{"position": "absolute", "top": "50%", "left": "0", "right": "0", "height": "1px", "background": "rgba(210,222,244,0.14)", "transform": "scaleX(0)", "transformOrigin": "0 50%", "zIndex": "2", "willChange": "transform"}}></div>
            <div style={{"position": "absolute", "left": "50%", "top": "50%", "width": "13px", "height": "13px", "margin": "-6.5px 0 0 -6.5px", "zIndex": "2", "color": "rgba(210,222,244,0.5)", "fontFamily": "'JetBrains Mono', monospace", "fontSize": "12px", "lineHeight": "13px", "textAlign": "center"}}>+</div>


            <div id="s11title" style={{"position": "absolute", "top": "10vh", "left": "6vw", "zIndex": "3", "willChange": "transform, opacity"}}>
              <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "11px", "letterSpacing": "0.5em", "color": "#8b94a6", "marginBottom": "20px"}}>CALIBRE AG-72</div>
              <div style={{"fontFamily": "'Cormorant Garamond', serif", "fontSize": "clamp(48px, 6.4vw, 110px)", "fontWeight": "500", "lineHeight": "1.02", "color": "#f2f4f8", "textShadow": "0 6px 60px rgba(0,0,0,0.7)"}}>THE<br />ASSEMBLY</div>
            </div>


            <div id="s11intro" style={{"position": "absolute", "top": "13vh", "right": "6vw", "zIndex": "3", "width": "min(400px, 38vw)", "willChange": "transform, opacity"}}>
              <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "12px", "lineHeight": "2.1", "letterSpacing": "0.06em", "color": "#c2cad8"}}>212 components are assembled by a single watchmaker, in sequence, over three weeks. Every wheel is seated, every jewel oiled, every bridge torqued by hand — then the whole calibre is taken apart, inspected, and built once more.</div>
            </div>


            <div data-acard="0" style={{"position": "absolute", "left": "13vw", "top": "52vh", "zIndex": "4", "width": "min(340px, 80vw)", "boxSizing": "border-box", "background": "linear-gradient(150deg, rgba(24,32,48,0.5), rgba(10,14,24,0.65))", "border": "1px solid rgba(210,222,244,0.14)", "borderRadius": "8px", "padding": "26px 30px 30px 30px", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 60px rgba(0,0,0,0.55)", "willChange": "transform, opacity"}}>
              <div style={{"display": "flex", "alignItems": "center", "gap": "8px", "fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.3em", "color": "#9aa3b2"}}><span style={{"display": "inline-block", "width": "7px", "height": "7px", "background": "#dfe5ee"}}></span>001</div>
              <div style={{"fontFamily": "'Cormorant Garamond', serif", "fontSize": "30px", "fontWeight": "500", "letterSpacing": "0.06em", "color": "#f2f4f8", "marginTop": "42px", "textAlign": "right"}}>SEQUENCE</div>
              <div style={{"fontSize": "12.5px", "lineHeight": "1.9", "color": "#9aa3b2", "marginTop": "12px", "textAlign": "right"}}>The going train is built first, then the escapement, then the complications — never in parallel, never rushed.</div>
            </div>

            <div data-acard="1" style={{"position": "absolute", "right": "11vw", "top": "34vh", "zIndex": "4", "width": "min(340px, 80vw)", "boxSizing": "border-box", "background": "linear-gradient(150deg, rgba(24,32,48,0.5), rgba(10,14,24,0.65))", "border": "1px solid rgba(210,222,244,0.14)", "borderRadius": "8px", "padding": "26px 30px 30px 30px", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 60px rgba(0,0,0,0.55)", "willChange": "transform, opacity"}}>
              <div style={{"display": "flex", "justifyContent": "flex-end", "alignItems": "center", "gap": "8px", "fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.3em", "color": "#9aa3b2"}}>002<span style={{"display": "inline-block", "width": "7px", "height": "7px", "background": "#dfe5ee"}}></span></div>
              <div style={{"fontFamily": "'Cormorant Garamond', serif", "fontSize": "30px", "fontWeight": "500", "letterSpacing": "0.06em", "color": "#f2f4f8", "marginTop": "42px"}}>PRECISION</div>
              <div style={{"fontSize": "12.5px", "lineHeight": "1.9", "color": "#9aa3b2", "marginTop": "12px"}}>Tolerances are held to ±0.02 mm. If a part does not seat perfectly, it is remade — not adjusted.</div>
            </div>

            <div data-acard="2" style={{"position": "absolute", "right": "8vw", "top": "70vh", "zIndex": "4", "width": "min(340px, 80vw)", "boxSizing": "border-box", "background": "linear-gradient(150deg, rgba(24,32,48,0.5), rgba(10,14,24,0.65))", "border": "1px solid rgba(210,222,244,0.14)", "borderRadius": "8px", "padding": "26px 30px 30px 30px", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 60px rgba(0,0,0,0.55)", "willChange": "transform, opacity"}}>
              <div style={{"display": "flex", "alignItems": "center", "gap": "8px", "fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.3em", "color": "#9aa3b2"}}><span style={{"display": "inline-block", "width": "7px", "height": "7px", "background": "#dfe5ee"}}></span>003</div>
              <div style={{"fontFamily": "'Cormorant Garamond', serif", "fontSize": "30px", "fontWeight": "500", "letterSpacing": "0.06em", "color": "#f2f4f8", "marginTop": "42px", "textAlign": "right"}}>CONTROL</div>
              <div style={{"fontSize": "12.5px", "lineHeight": "1.9", "color": "#9aa3b2", "marginTop": "12px", "textAlign": "right"}}>Assembled twice: once to learn the movement, once to keep it. 217 checks before the dial goes on.</div>
            </div>

            <div style={{"position": "absolute", "bottom": "30px", "left": "6vw", "zIndex": "3", "fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.34em", "color": "#6d7686"}}>FILM · SCROLL TO SCRUB</div>
          </div>
        </section>


        <section id="s7" className="collection-3d" data-screen-label="07 Collection">
          <a id="collection" style={{"position": "absolute", "top": "0"}}></a>
          <header className="collection3d-head">
            <h2 className="collection3d-title">The <em>collection</em></h2>
            <div className="collection3d-kicker">FOUR REFERENCES · MMXXVI</div>
          </header>
          <div className="collection3d-stage" id="collectionStage" aria-roledescription="carousel">
            <div className="collection3d-track" id="collectionTrack"><article className="collection3d-card" data-collection-card="0" aria-label="Argentum Moonphase Silver">
              <div className="collection3d-media"><div className="collection3d-badge">FEATURED</div><img src="https://souranyp-stack.github.io/argentum-watch/argentum-v3-assets/image-03-cdbf78c96d.webp" alt="Argentum Moonphase Silver" loading="lazy" /></div>
              <div className="collection3d-copy">
                <h3 className="collection3d-name">Argentum Moonphase Silver</h3>
                <p className="collection3d-desc">Moonphase · open heart · brushed 904L</p>
                <p className="collection3d-price">CHF 24,500</p>
                <div className="collection3d-actions">
                  <div className="collection3d-action primary" data-add="AG-1948-MS">Add to Cart</div>
                  <div className="collection3d-action secondary" data-aura-onclick="&#123;&#123; viewMS &#125;&#125;">View Details</div>
                </div>
              </div>
            </article><article className="collection3d-card" data-collection-card="1" aria-label="Argentum Black Ceramic">
              <div className="collection3d-media"><img src="https://souranyp-stack.github.io/argentum-watch/argentum-v3-assets/image-04-3853ba2679.webp" alt="Argentum Black Ceramic" loading="lazy" /></div>
              <div className="collection3d-copy">
                <h3 className="collection3d-name">Argentum Black Ceramic</h3>
                <p className="collection3d-desc">Matte ceramic case · rubber-lined strap</p>
                <p className="collection3d-price">CHF 21,900</p>
                <div className="collection3d-actions">
                  <div className="collection3d-action primary" data-add="AG-2100-BC">Add to Cart</div>
                  <div className="collection3d-action secondary" data-aura-onclick="&#123;&#123; viewBC &#125;&#125;">View Details</div>
                </div>
              </div>
            </article><article className="collection3d-card" data-collection-card="2" aria-label="Argentum Open-Heart Steel">
              <div className="collection3d-media"><img src="https://souranyp-stack.github.io/argentum-watch/argentum-v3-assets/image-05-6a7b166042.webp" alt="Argentum Open-Heart Steel" loading="lazy" /></div>
              <div className="collection3d-copy">
                <h3 className="collection3d-name">Argentum Open-Heart Steel</h3>
                <p className="collection3d-desc">Skeletonised balance · steel bracelet</p>
                <p className="collection3d-price">CHF 18,400</p>
                <div className="collection3d-actions">
                  <div className="collection3d-action primary" data-add="AG-1877-OS">Add to Cart</div>
                  <div className="collection3d-action secondary" data-aura-onclick="&#123;&#123; viewOS &#125;&#125;">View Details</div>
                </div>
              </div>
            </article><article className="collection3d-card" data-collection-card="3" aria-label="Argentum Classic Leather">
              <div className="collection3d-media"><img src="https://souranyp-stack.github.io/argentum-watch/argentum-v3-assets/image-06-e5a1f7de6f.webp" alt="Argentum Classic Leather" loading="lazy" /></div>
              <div className="collection3d-copy">
                <h3 className="collection3d-name">Argentum Classic Leather</h3>
                <p className="collection3d-desc">Time-only · 38 mm · calf leather</p>
                <p className="collection3d-price">CHF 12,900</p>
                <div className="collection3d-actions">
                  <div className="collection3d-action primary" data-add="AG-1602-CL">Add to Cart</div>
                  <div className="collection3d-action secondary" data-aura-onclick="&#123;&#123; viewCL &#125;&#125;">View Details</div>
                </div>
              </div>
            </article></div>
          </div>
          <nav className="collection3d-nav" aria-label="Collection carousel controls">
            <button className="collection3d-arrow" id="collectionPrev" type="button" aria-label="Previous watch">←</button>
            <div className="collection3d-indicator" aria-live="polite">
              <div className="collection3d-count"><strong id="collectionCurrent">01</strong> <span>/ 04</span></div>
              <div className="collection3d-progress" aria-hidden="true"><i id="collectionProgress"></i></div>
              <div className="collection3d-hint">DRAG TO EXPLORE</div>
            </div>
            <button className="collection3d-arrow" id="collectionNext" type="button" aria-label="Next watch">→</button>
          </nav>
        </section>



      <section id="s9" data-screen-label="09 Testimonials">
        <div className="pin">
          <header className="new-head">
            <h2 className="new-title">Worn by those who value <em>quiet precision</em></h2>
            <div className="new-kicker">CLIENT NOTES · PRIVATE ARCHIVE</div>
          </header>
          <div className="orbit"></div>
          <div className="core"><span>ARGENTUM</span><strong>Voices</strong><span>GENÈVE</span></div>

          <article className="quote" data-quote="0"><div className="stars">★★★★★</div><p className="copy">It does not ask for attention, but it rewards anyone who looks closely. That is exactly what I wanted from a daily watch.</p><div className="person"><div><div className="name">Julien Moreau</div><div className="role">ARCHITECT · PARIS</div></div><div className="ref">REF. AG-1948-MS</div></div></article>
          <article className="quote" data-quote="1"><div className="stars">★★★★★</div><p className="copy">The finishing feels unusually calm. Every surface has purpose, and the movement becomes more interesting the longer you live with it.</p><div className="person"><div><div className="name">Elena Rossi</div><div className="role">CURATOR · MILAN</div></div><div className="ref">REF. AG-2100-BC</div></div></article>
          <article className="quote" data-quote="2"><div className="stars">★★★★★</div><p className="copy">I expected precision. I did not expect the watch to feel this personal. The proportions, weight and sound are all beautifully judged.</p><div className="person"><div><div className="name">David Chen</div><div className="role">FOUNDER · SINGAPORE</div></div><div className="ref">REF. AG-1877-OS</div></div></article>
          <article className="quote" data-quote="3"><div className="stars">★★★★★</div><p className="copy">The most impressive part is restraint. Nothing is added simply to decorate. It feels designed to stay relevant for decades.</p><div className="person"><div><div className="name">Sofia Lindberg</div><div className="role">CREATIVE DIRECTOR · STOCKHOLM</div></div><div className="ref">REF. AG-1602-CL</div></div></article>

          <div className="dots"><i className="dot" data-qtick="0"></i><i className="dot" data-qtick="1"></i><i className="dot" data-qtick="2"></i><i className="dot" data-qtick="3"></i></div>
          <div className="note">SCROLL TO ROTATE THE ARCHIVE</div>
        </div>
      </section>


      <section id="s10" data-screen-label="10 Heritage">
        <div className="pin">
          <div className="grid"></div>
          <header className="new-head">
            <h2 className="new-title">A manufacture shaped by <em>seventy-eight years</em></h2>
            <div className="new-kicker">ARCHIVE · 1948—2026</div>
          </header>

          <div className="center">
            <div id="yearnum">1948</div>
            <div id="yearlab">ATELIER FOUNDED · GENEVA</div>
            <div className="scale"><div id="yearbar"></div><i></i><i></i><i></i><i></i></div>
          </div>

          <article className="mile" data-mile="0"><div className="yr">1948 · GENEVA</div><h3>The first atelier</h3><p>Argentum begins with three watchmakers and one principle: every visible component must be finished as carefully as the unseen ones.</p></article>
          <article className="mile" data-mile="1"><div className="yr">1974 · CALIBRE AG-31</div><h3>Our first moonphase</h3><p>A compact lunar mechanism establishes the house signature, combining mechanical complexity with restrained dial architecture.</p></article>
          <article className="mile" data-mile="2"><div className="yr">2001 · MANUFACTURE</div><h3>Case making in-house</h3><p>Machining, hand brushing and polishing move under one roof, giving Argentum complete control over proportion, texture and reflection.</p></article>
          <article className="mile" data-mile="3"><div className="yr">2026 · CALIBRE AG-72</div><h3>The open-heart generation</h3><p>The current calibre brings a 72-hour reserve, visible balance and modern durability while preserving the visual calm of the original house.</p></article>
          <div className="seal">SWISS MADE · CONTINUOUS MANUFACTURE</div>
        </div>
      </section>


        <section id="s8" data-screen-label="08 Final CTA" style={{"position": "relative", "height": "300vh"}}>
          <div style={{"position": "sticky", "top": "0", "height": "100vh", "overflow": "hidden", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center"}}>
            <video id="v8" src="https://souranyp-stack.github.io/argentum-watch/argentum-v3-assets/video-01-6587d79bd4.mp4" muted="&#123;&#123; true &#125;&#125;" playsInline="&#123;&#123; true &#125;&#125;" preload="metadata" style={{"position": "absolute", "inset": "0", "width": "100%", "height": "100%", "objectFit": "cover", "willChange": "transform, opacity", "transformOrigin": "50% 46%"}}></video>
            <div style={{"position": "absolute", "inset": "0", "background": "radial-gradient(ellipse 66% 55% at 50% 45%, rgba(0,0,0,0.05) 30%, rgba(3,5,10,0.88) 100%)"}}></div>
            <div id="fade8" style={{"position": "absolute", "inset": "0", "background": "#04060b", "opacity": "1", "pointerEvents": "none", "zIndex": "5"}}></div>
            <div id="ring" style={{"position": "absolute", "left": "50%", "top": "45%", "width": "64vmin", "height": "64vmin", "transform": "translate(-50%, -50%)", "borderRadius": "50%", "border": "1px solid rgba(220,230,246,0.5)", "boxShadow": "0 0 60px rgba(160,185,225,0.18), inset 0 0 60px rgba(160,185,225,0.08)", "willChange": "transform, opacity", "opacity": "0"}}></div>

            <div style={{"position": "relative", "zIndex": "3", "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "padding": "0 6vw", "marginTop": "30vh"}}>
              <h2 id="s8h" style={{"fontFamily": "'Cormorant Garamond', serif", "fontWeight": "500", "fontSize": "clamp(36px, 5vw, 84px)", "color": "#f7f9fc", "margin": "0", "lineHeight": "1.15", "textShadow": "0 6px 70px rgba(0,0,0,0.8)", "willChange": "filter, opacity"}}>Own the moment <em style={{"fontWeight": "400", "color": "#c8d0dd"}}>before it passes.</em></h2>
              <div id="s8sub" style={{"fontSize": "13px", "fontWeight": "300", "letterSpacing": "0.14em", "lineHeight": "2", "color": "#aab2c2", "maxWidth": "52ch", "marginTop": "22px", "willChange": "transform, opacity"}}>A mechanical moonphase watch built for precision, presence, and quiet luxury.</div>
              <div id="s8cta" style={{"display": "flex", "gap": "16px", "marginTop": "40px", "flexWrap": "wrap", "justifyContent": "center", "willChange": "transform, opacity"}}>
                <div data-add="AG-1948-MS" style={{"fontSize": "11px", "letterSpacing": "0.22em", "textTransform": "uppercase", "color": "#04060b", "background": "#dfe5ee", "padding": "18px 40px", "borderRadius": "9999px", "cursor": "pointer", "transition": "background 300ms ease"}} style-hover="background: #ffffff;">Add to Cart</div>
                <div style={{"fontSize": "11px", "letterSpacing": "0.22em", "textTransform": "uppercase", "color": "#dfe5ee", "border": "1px solid rgba(210,222,244,0.25)", "background": "rgba(8,12,22,0.4)", "backdropFilter": "blur(12px)", "padding": "17px 40px", "borderRadius": "9999px", "cursor": "pointer", "transition": "border-color 300ms ease, color 300ms ease"}} style-hover="border-color: rgba(230,238,250,0.55); color: #ffffff;">Reserve Yours</div>
                <div style={{"fontSize": "11px", "letterSpacing": "0.22em", "textTransform": "uppercase", "color": "#9aa3b2", "padding": "17px 20px", "borderRadius": "9999px", "cursor": "pointer", "transition": "color 300ms ease"}} style-hover="color: #eef1f6;">Book a Private Viewing →</div>
              </div>
            </div>
          </div>
        </section>


        <footer style={{"position": "relative", "zIndex": "3", "borderTop": "1px solid rgba(210,222,244,0.1)", "background": "#04060b", "padding": "80px 6vw 0 6vw"}}>
          <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(220px, 1fr))", "gap": "48px", "paddingBottom": "64px"}}>
            <div style={{"display": "flex", "flexDirection": "column", "gap": "18px"}}>
              <div style={{"fontFamily": "'Cormorant Garamond', serif", "fontSize": "22px", "letterSpacing": "0.28em", "color": "#eef1f6"}}>ARGENTUM GENÈVE</div>
              <div style={{"fontSize": "12px", "fontWeight": "300", "lineHeight": "1.9", "color": "#7d8595", "maxWidth": "34ch"}}>Manufacture d'horlogerie. Mechanical watches designed, assembled and regulated in Geneva since 1948.</div>
              <div style={{"display": "flex", "flexDirection": "column", "gap": "10px", "marginTop": "8px"}}>
                <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.3em", "color": "#8b94a6"}}>PRIVATE RELEASES</div>
                <div style={{"display": "flex", "gap": "8px", "border": "1px solid rgba(210,222,244,0.16)", "borderRadius": "9999px", "padding": "4px 4px 4px 18px", "alignItems": "center", "maxWidth": "320px"}}>
                  <input placeholder="Email address" style={{"flex": "1", "background": "transparent", "border": "none", "outline": "none", "color": "#eef1f6", "fontFamily": "'Inter', sans-serif", "fontSize": "12px", "minWidth": "0"}} />
                  <div style={{"fontSize": "13px", "color": "#04060b", "background": "#dfe5ee", "width": "32px", "height": "32px", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "cursor": "pointer", "flexShrink": "0", "transition": "background 300ms ease"}} style-hover="background: #ffffff;">→</div>
                </div>
              </div>
            </div>
            <div style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
              <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.3em", "color": "#8b94a6", "marginBottom": "4px"}}>COLLECTION</div>
              <a href="#collection" style={{"fontSize": "12px", "color": "#9aa3b2"}}>Moonphase Silver</a>
              <a href="#collection" style={{"fontSize": "12px", "color": "#9aa3b2"}}>Black Ceramic</a>
              <a href="#collection" style={{"fontSize": "12px", "color": "#9aa3b2"}}>Open-Heart Steel</a>
              <a href="#collection" style={{"fontSize": "12px", "color": "#9aa3b2"}}>Classic Leather</a>
              <a href="#craft" style={{"fontSize": "12px", "color": "#9aa3b2"}}>The Manufacture</a>
            </div>
            <div style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
              <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.3em", "color": "#8b94a6", "marginBottom": "4px"}}>CLIENT SERVICES</div>
              <a href="#showcase" style={{"fontSize": "12px", "color": "#9aa3b2"}}>Book a Private Viewing</a>
              <a href="#showcase" style={{"fontSize": "12px", "color": "#9aa3b2"}}>Servicing &amp; Repairs</a>
              <a href="#showcase" style={{"fontSize": "12px", "color": "#9aa3b2"}}>Warranty Registration</a>
              <a href="#showcase" style={{"fontSize": "12px", "color": "#9aa3b2"}}>Care Guide</a>
              <a href="#showcase" style={{"fontSize": "12px", "color": "#9aa3b2"}}>Certificate of Authenticity</a>
            </div>
            <div style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
              <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.3em", "color": "#8b94a6", "marginBottom": "4px"}}>BOUTIQUES</div>
              <div style={{"fontSize": "12px", "color": "#9aa3b2", "lineHeight": "1.7"}}>Geneva — Rue du Rhône 17</div>
              <div style={{"fontSize": "12px", "color": "#9aa3b2", "lineHeight": "1.7"}}>Zurich — Bahnhofstrasse 4</div>
              <div style={{"fontSize": "12px", "color": "#9aa3b2", "lineHeight": "1.7"}}>London — Old Bond Street 9</div>
              <div style={{"height": "1px", "background": "rgba(210,222,244,0.1)", "maxWidth": "180px", "margin": "6px 0"}}></div>
              <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "11px", "color": "#dfe5ee", "letterSpacing": "0.08em"}}>+41 22 555 01 48</div>
              <a href="#showcase" style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "11px", "color": "#9aa3b2", "letterSpacing": "0.08em"}}>atelier@argentum-geneve.ch</a>
              <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "color": "#6d7686", "letterSpacing": "0.14em"}}>MON–SAT · 10:00–18:00 CET</div>
            </div>
          </div>
          <div style={{"borderTop": "1px solid rgba(210,222,244,0.08)", "padding": "26px 0 34px 0", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "flexWrap": "wrap", "gap": "16px"}}>
            <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "9px", "letterSpacing": "0.26em", "color": "#4d5462"}}>© MMXXVI ARGENTUM GENÈVE SA · ALL RIGHTS RESERVED</div>
            <div style={{"display": "flex", "gap": "26px"}}>
              <a href="#collection" style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "9px", "letterSpacing": "0.26em", "color": "#4d5462"}}>PRIVACY</a>
              <a href="#collection" style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "9px", "letterSpacing": "0.26em", "color": "#4d5462"}}>TERMS</a>
              <a href="#collection" style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "9px", "letterSpacing": "0.26em", "color": "#4d5462"}}>COOKIES</a>
            </div>
            <div style={{"display": "flex", "alignItems": "center", "gap": "8px"}}>
              <div style={{"width": "7px", "height": "7px", "background": "#dfe5ee"}}></div>
              <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "9px", "letterSpacing": "0.3em", "color": "#7d8595"}}>SWISS MADE</div>
            </div>
          </div>
        </footer>


        <div style={{"position": "fixed", "inset": "0", "zIndex": "90", "pointerEvents": "none"}}>
          <div id="cartoverlay" data-aura-onclick="&#123;&#123; closeCart &#125;&#125;" style={{"position": "absolute", "inset": "0", "background": "rgba(2,4,8,0.55)", "backdropFilter": "blur(8px)", "opacity": "0", "pointerEvents": "none", "transition": "opacity 500ms ease"}}></div>
          <div id="cartdrawer" style={{"position": "absolute", "top": "0", "right": "0", "bottom": "0", "width": "min(440px, 94vw)", "background": "rgba(6,9,16,0.94)", "backdropFilter": "blur(30px) saturate(140%)", "borderLeft": "1px solid rgba(210,222,244,0.14)", "boxShadow": "-30px 0 80px rgba(0,0,0,0.6)", "display": "flex", "flexDirection": "column", "pointerEvents": "auto", "transform": "translateX(112%)", "transition": "transform 600ms cubic-bezier(0.4, 0, 0.2, 1)"}}>
            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "padding": "26px 30px", "borderBottom": "1px solid rgba(210,222,244,0.1)"}}>
              <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "11px", "letterSpacing": "0.4em", "color": "#dfe5ee"}}>CART · &#123;&#123; cartCount &#125;&#125;</div>
              <div data-aura-onclick="&#123;&#123; closeCart &#125;&#125;" style={{"fontSize": "15px", "color": "#9aa3b2", "cursor": "pointer", "padding": "4px 10px", "transition": "color 300ms ease"}} style-hover="color: #ffffff;">✕</div>
            </div>
            <div style={{"flex": "1", "overflowY": "auto", "padding": "8px 30px"}}>
              <sc-if value="&#123;&#123; cartEmpty &#125;&#125;" hint-placeholder-val="&#123;&#123; false &#125;&#125;">
                <div style={{"padding": "70px 0", "display": "flex", "flexDirection": "column", "gap": "14px", "alignItems": "center", "textAlign": "center"}}>
                  <div style={{"width": "54px", "height": "54px", "borderRadius": "50%", "border": "1px dashed rgba(210,222,244,0.3)"}}></div>
                  <div style={{"fontFamily": "'Cormorant Garamond', serif", "fontSize": "22px", "color": "#c8d0dd"}}>Your cart is empty</div>
                  <div style={{"fontSize": "12px", "color": "#7d8595"}}>Time waits — briefly.</div>
                </div>
              </sc-if>
              <sc-for list="&#123;&#123; cartItems &#125;&#125;" as="ci" hint-placeholder-count="0">
                <div style={{"display": "flex", "gap": "16px", "padding": "22px 0", "borderBottom": "1px solid rgba(210,222,244,0.08)"}}>
                  <div style={{"width": "64px", "height": "76px", "borderRadius": "10px", "background": "linear-gradient(135deg, #11161f, #1a2130)", "border": "1px solid rgba(210,222,244,0.12)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "'Cormorant Garamond', serif", "fontSize": "22px", "color": "#8b94a6", "flexShrink": "0"}}>A</div>
                  <div style={{"flex": "1", "display": "flex", "flexDirection": "column", "gap": "4px"}}>
                    <div style={{"fontFamily": "'Cormorant Garamond', serif", "fontSize": "18px", "color": "#f2f4f8"}}>&#123;&#123; ci.name &#125;&#125;</div>
                    <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "9px", "letterSpacing": "0.22em", "color": "#6d7686"}}>REF. &#123;&#123; ci.ref &#125;&#125;</div>
                    <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "marginTop": "10px"}}>
                      <div style={{"display": "flex", "alignItems": "center", "border": "1px solid rgba(210,222,244,0.16)", "borderRadius": "9999px"}}>
                        <div data-aura-onclick="&#123;&#123; ci.dec &#125;&#125;" style={{"padding": "4px 12px", "cursor": "pointer", "color": "#9aa3b2", "fontSize": "13px", "transition": "color 300ms ease"}} style-hover="color: #ffffff;">−</div>
                        <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "11px", "color": "#dfe5ee", "minWidth": "18px", "textAlign": "center"}}>&#123;&#123; ci.qty &#125;&#125;</div>
                        <div data-aura-onclick="&#123;&#123; ci.inc &#125;&#125;" style={{"padding": "4px 12px", "cursor": "pointer", "color": "#9aa3b2", "fontSize": "13px", "transition": "color 300ms ease"}} style-hover="color: #ffffff;">+</div>
                      </div>
                      <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "12px", "color": "#dfe5ee"}}>&#123;&#123; ci.lineTotal &#125;&#125;</div>
                    </div>
                  </div>
                  <div data-aura-onclick="&#123;&#123; ci.remove &#125;&#125;" style={{"alignSelf": "flex-start", "fontSize": "12px", "color": "#4d5462", "cursor": "pointer", "transition": "color 300ms ease"}} style-hover="color: #eef1f6;">✕</div>
                </div>
              </sc-for>
            </div>
            <div style={{"padding": "24px 30px 30px 30px", "borderTop": "1px solid rgba(210,222,244,0.12)", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "baseline"}}>
                <div style={{"fontSize": "11px", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "#7d8595"}}>Subtotal</div>
                <div style={{"fontFamily": "'Cormorant Garamond', serif", "fontSize": "27px", "color": "#ffffff"}}>&#123;&#123; cartSubtotal &#125;&#125;</div>
              </div>
              <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "9px", "letterSpacing": "0.2em", "color": "#6d7686", "lineHeight": "1.8"}}>COMPLIMENTARY INSURED DELIVERY · TAXES INCLUDED · 5-YEAR WARRANTY</div>
              <div data-aura-onclick="&#123;&#123; checkout &#125;&#125;" style={{"textAlign": "center", "fontSize": "11px", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "#04060b", "background": "#dfe5ee", "padding": "17px 20px", "borderRadius": "9999px", "cursor": "pointer", "transition": "background 300ms ease"}} style-hover="background: #ffffff;">&#123;&#123; checkoutLabel &#125;&#125;</div>
            </div>
          </div>
        </div>


        <sc-if value="&#123;&#123; detailOpen &#125;&#125;" hint-placeholder-val="&#123;&#123; false &#125;&#125;">
          <div style={{"position": "fixed", "inset": "0", "zIndex": "92"}}>
            <div data-aura-onclick="&#123;&#123; closeDetail &#125;&#125;" style={{"position": "absolute", "inset": "0", "background": "rgba(2,4,8,0.62)", "backdropFilter": "blur(10px)"}}></div>
            <div style={{"position": "absolute", "left": "50%", "top": "50%", "transform": "translate(-50%, -50%)", "width": "min(600px, 92vw)", "maxHeight": "86vh", "overflowY": "auto", "background": "rgba(7,10,18,0.92)", "backdropFilter": "blur(30px) saturate(140%)", "border": "1px solid rgba(210,222,244,0.16)", "borderRadius": "24px", "boxShadow": "inset 0 1px 0 rgba(255,255,255,0.08), 0 40px 90px rgba(0,0,0,0.7)", "padding": "38px 42px", "boxSizing": "border-box"}}>
              <div style={{"display": "flex", "alignItems": "flex-start", "justifyContent": "space-between", "gap": "20px"}}>
                <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
                  <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.4em", "color": "#8b94a6"}}>REF. &#123;&#123; detailRef &#125;&#125;</div>
                  <div style={{"fontFamily": "'Cormorant Garamond', serif", "fontSize": "32px", "fontWeight": "500", "color": "#f2f4f8", "lineHeight": "1.15"}}>&#123;&#123; detailName &#125;&#125;</div>
                </div>
                <div data-aura-onclick="&#123;&#123; closeDetail &#125;&#125;" style={{"fontSize": "15px", "color": "#9aa3b2", "cursor": "pointer", "padding": "4px 10px", "transition": "color 300ms ease"}} style-hover="color: #ffffff;">✕</div>
              </div>
              <p style={{"fontSize": "13px", "fontWeight": "300", "lineHeight": "1.9", "color": "#9aa3b2", "margin": "18px 0 0 0"}}>&#123;&#123; detailDesc &#125;&#125;</p>
              <div style={{"height": "1px", "background": "rgba(210,222,244,0.12)", "margin": "26px 0"}}></div>
              <div style={{"display": "flex", "flexDirection": "column", "gap": "12px"}}>
                <sc-for list="&#123;&#123; detailSpecs &#125;&#125;" as="sp" hint-placeholder-count="4">
                  <div style={{"display": "flex", "justifyContent": "space-between", "gap": "20px"}}>
                    <span style={{"fontSize": "11px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "#7d8595"}}>&#123;&#123; sp.k &#125;&#125;</span>
                    <span style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "12px", "color": "#dfe5ee", "textAlign": "right"}}>&#123;&#123; sp.v &#125;&#125;</span>
                  </div>
                </sc-for>
              </div>
              <div style={{"height": "1px", "background": "rgba(210,222,244,0.12)", "margin": "26px 0"}}></div>
              <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "18px", "flexWrap": "wrap"}}>
                <div style={{"fontFamily": "'Cormorant Garamond', serif", "fontSize": "30px", "fontWeight": "500", "color": "#ffffff"}}>&#123;&#123; detailPrice &#125;&#125;</div>
                <div style={{"display": "flex", "gap": "12px"}}>
                  <div data-aura-onclick="&#123;&#123; detailAdd &#125;&#125;" style={{"fontSize": "11px", "letterSpacing": "0.22em", "textTransform": "uppercase", "color": "#04060b", "background": "#dfe5ee", "padding": "15px 30px", "borderRadius": "9999px", "cursor": "pointer", "transition": "background 300ms ease"}} style-hover="background: #ffffff;">Add to Cart</div>
                  <div data-aura-onclick="&#123;&#123; closeDetail &#125;&#125;" style={{"fontSize": "11px", "letterSpacing": "0.22em", "textTransform": "uppercase", "color": "#dfe5ee", "border": "1px solid rgba(210,222,244,0.22)", "padding": "14px 26px", "borderRadius": "9999px", "cursor": "pointer", "transition": "border-color 300ms ease"}} style-hover="border-color: rgba(230,238,250,0.5);">Close</div>
                </div>
              </div>
              <div style={{"fontFamily": "'JetBrains Mono', monospace", "fontSize": "9px", "letterSpacing": "0.22em", "color": "#6d7686", "marginTop": "18px"}}>COMPLIMENTARY INSURED DELIVERY · 5-YEAR INTERNATIONAL WARRANTY</div>
            </div>
          </div>
        </sc-if>


        <div id="toast" style={{"position": "fixed", "left": "50%", "bottom": "36px", "zIndex": "95", "transform": "translateX(-50%) translateY(20px)", "opacity": "0", "transition": "opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1)", "pointerEvents": "none", "background": "rgba(8,12,20,0.85)", "backdropFilter": "blur(20px)", "border": "1px solid rgba(210,222,244,0.18)", "borderRadius": "9999px", "padding": "13px 26px", "fontFamily": "'JetBrains Mono', monospace", "fontSize": "10px", "letterSpacing": "0.24em", "color": "#dfe5ee"}}></div>

      </div>

      </x-dc>
    </div>
  );
}
