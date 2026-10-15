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
    "content": "\n      (function(){\n        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;\n\n        /* WebGL / Canvas petal field with graceful fallback */\n        const canvas = document.getElementById('petalCanvas');\n        const ctx = canvas.getContext('2d');\n        let W, H, petals = [];\n\n        function resize(){\n          W = canvas.width = innerWidth * devicePixelRatio;\n          H = canvas.height = innerHeight * devicePixelRatio;\n        }\n\n        resize();\n        addEventListener('resize', resize);\n\n        for(let i=0; i<70; i++){\n          petals.push({\n            x: Math.random(),\n            y: Math.random(),\n            r: 6 + Math.random() * 14,\n            sp: 0.2 + Math.random() * 0.8,\n            drift: Math.random() * Math.PI * 2,\n            a: 0.3 + Math.random() * 0.5\n          });\n        }\n\n        let petalDensity = 0, windAmt = 0;\n\n        function drawPetals(t){\n          ctx.clearRect(0, 0, W, H);\n          for(const p of petals){\n            const px = (p.x + Math.sin(t*0.0003*p.sp + p.drift)*0.04*(0.5+windAmt*2)) * W;\n            const py = (((p.y + t*0.00004*p.sp) % 1)) * H;\n            const size = p.r * devicePixelRatio * (0.7 + petalDensity*0.8);\n\n            ctx.globalAlpha = p.a * petalDensity;\n            const g = ctx.createRadialGradient(px, py, 0, px, py, size);\n            g.addColorStop(0, 'rgba(247,196,218,0.9)');\n            g.addColorStop(1, 'rgba(194,106,151,0)');\n\n            ctx.fillStyle = g;\n            ctx.beginPath();\n            ctx.ellipse(px, py, size, size*0.6, p.drift + t*0.0002, 0, Math.PI*2);\n            ctx.fill();\n          }\n          ctx.globalAlpha = 1;\n          requestAnimationFrame(drawPetals);\n        }\n\n        if(!reduce) requestAnimationFrame(drawPetals);\n\n        /* Deterministic beat windows */\n        const beats = [\n          {el: document.querySelector('[data-beat=\"0\"]'), s: 0.00, e: 0.10},\n          {el: document.querySelector('[data-beat=\"1\"]'), s: 0.11, e: 0.22},\n          {el: document.querySelector('[data-beat=\"2\"]'), s: 0.23, e: 0.33},\n          {el: document.querySelector('[data-beat=\"3\"]'), s: 0.34, e: 0.47},\n          {el: document.querySelector('[data-beat=\"4\"]'), s: 0.48, e: 0.64},\n          {el: document.querySelector('[data-beat=\"5\"]'), s: 0.65, e: 0.81},\n          {el: document.querySelector('[data-beat=\"6\"]'), s: 0.82, e: 1.00}\n        ];\n\n        function beatOpacity(p, s, e){\n          const mid = (s+e)/2, span = (e-s);\n          const fade = span*0.30;\n          if(p < s || p > e) return 0;\n          if(p < s+fade) return (p-s)/fade;\n          if(p > e-fade) return (e-p)/fade;\n          return 1;\n        }\n\n        /* Timeline dots */\n        const dotRow = document.getElementById('dotRow');\n        beats.forEach((b,i)=>{\n          const d = document.createElement('span');\n          d.style.cssText = 'width:0.5rem;height:0.5rem;border-radius:50%;background:rgba(255,255,255,0.25);transition:background .3s,transform .3s;cursor:pointer;';\n          d.addEventListener('click',()=>{\n            const sec = document.getElementById('cinematic');\n            const top = sec.offsetTop + ((b.s+b.e)/2) * (sec.offsetHeight - innerHeight);\n            scrollTo({top, behavior:'smooth'});\n          });\n          dotRow.appendChild(d);\n          b.dot = d;\n        });\n\n        /* Velocity-aware render progress */\n        const section = document.getElementById('cinematic');\n        const bgLayer = document.getElementById('bgLayer');\n        const midLayer = document.getElementById('midLayer');\n        const bouquet = document.getElementById('bouquet');\n        const grade = document.getElementById('gradeWash');\n        const lbTop = document.getElementById('lbTop');\n        const lbBot = document.getElementById('lbBot');\n        const tlFill = document.getElementById('timelineFill');\n        const timeLabel = document.getElementById('timeLabel');\n        const DUR = 12.75;\n\n        let rawP = 0, renderP = 0;\n\n        function raf(){\n          renderP += (rawP - renderP) * 0.10;\n          const p = renderP;\n\n          const scale = 1 + p*0.55 - Math.max(0, p-0.48)*0.35;\n          const roll = p*4 - Math.max(0, p-0.65)*3;\n          const fwd = p*-40;\n\n          bouquet.style.transform = `scale(${scale}) rotate(${roll}deg) translateY(${fwd}px)`;\n          bgLayer.style.transform = `scale(${1.1+p*0.15}) translateY(${p*-60}px)`;\n          midLayer.style.transform = `translateY(${p*30}px)`;\n\n          petalDensity = p < 0.48 ? p*0.3 : Math.min(1, (p-0.40)*2.2);\n          windAmt = Math.max(0, (p-0.60))*1.4;\n\n          grade.style.opacity = 0.4 + Math.sin(p*Math.PI)*0.5;\n\n          let lb = 0;\n          if(p < 0.06) lb = (p/0.06)*7;\n          else if(p > 0.92) lb = 7 * (1-(p-0.92)/0.08);\n          else lb = 7;\n\n          lbTop.style.height = lb+'vh';\n          lbBot.style.height = lb+'vh';\n\n          tlFill.style.width = (p*100)+'%';\n          timeLabel.textContent = (p*DUR).toFixed(2)+'s';\n\n          beats.forEach(b=>{\n            const o = beatOpacity(p, b.s, b.e);\n            b.el.style.opacity = o.toFixed(3);\n            b.el.style.transform = `translateY(${(1-o)*18}px)`;\n            const active = p >= b.s && p <= b.e;\n            b.dot.style.background = active ? '#f5b8d0' : 'rgba(255,255,255,0.25)';\n            b.dot.style.transform = active ? 'scale(1.4)' : 'scale(1)';\n          });\n\n          requestAnimationFrame(raf);\n        }\n\n        requestAnimationFrame(raf);\n\n        function updateScroll(){\n          const rect = section.getBoundingClientRect();\n          const travel = section.offsetHeight - innerHeight;\n          const scrolled = Math.min(Math.max(-rect.top, 0), travel);\n          rawP = travel > 0 ? scrolled/travel : 0;\n          if(reduce) renderP = rawP;\n        }\n\n        addEventListener('scroll', updateScroll, {passive: true});\n        updateScroll();\n\n        /* GSAP masked staggered reveals */\n        if(window.gsap && window.ScrollTrigger && !reduce){\n          gsap.registerPlugin(ScrollTrigger);\n\n          document.querySelectorAll('.reveal-line').forEach(line=>{\n            const inner = line.firstElementChild;\n            gsap.set(inner, {yPercent: 120});\n            gsap.to(inner, {\n              yPercent: 0,\n              duration: 0.9,\n              ease: 'power3.out',\n              scrollTrigger: {\n                trigger: line,\n                start: 'top 85%'\n              }\n            });\n          });\n\n          gsap.utils.toArray('.fade-card').forEach((c, i)=>{\n            gsap.from(c, {\n              opacity: 0,\n              y: 40,\n              duration: 0.7,\n              ease: 'power2.out',\n              delay: i*0.1,\n              scrollTrigger: {\n                trigger: c,\n                start: 'top 88%'\n              }\n            });\n          });\n\n          gsap.to('#craftBg', {\n            yPercent: 20,\n            ease: 'none',\n            scrollTrigger: {\n              trigger: '#craft',\n              start: 'top bottom',\n              end: 'bottom top',\n              scrub: true\n            }\n          });\n        }\n      })();\n    "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n      (function () {\n        function playVideo(video) {\n          var promise = video.play();\n          if (promise && typeof promise.catch === \"function\") {\n            promise.catch(function () {});\n          }\n        }\n\n        function setupVideo(video) {\n          if (video.__auraVideoReady === true) return;\n          video.__auraVideoReady = true;\n          video.removeAttribute(\"data-aura-video-ready\");\n          video.removeAttribute(\"data-aura-video-played\");\n          video.muted = true;\n          video.playsInline = true;\n\n          var preset = video.dataset.auraVideoPreset || \"loop-in-view\";\n          if (preset === \"hover\") {\n            video.addEventListener(\"mouseenter\", function () {\n              playVideo(video);\n            });\n            video.addEventListener(\"mouseleave\", function () {\n              video.pause();\n              video.currentTime = 0;\n            });\n            return;\n          }\n\n          if (!(\"IntersectionObserver\" in window)) {\n            playVideo(video);\n            return;\n          }\n\n          var observer = new IntersectionObserver(function (entries) {\n            entries.forEach(function (entry) {\n              if (entry.isIntersecting) {\n                if (preset === \"play-once\" && video.__auraVideoPlayed === true) {\n                  return;\n                }\n                playVideo(video);\n              } else {\n                video.pause();\n              }\n            });\n          }, { threshold: 0.35 });\n\n          if (preset === \"play-once\") {\n            video.addEventListener(\"ended\", function () {\n              video.__auraVideoPlayed = true;\n            }, { once: true });\n          }\n\n          observer.observe(video);\n        }\n\n        function setupVideos() {\n          document\n            .querySelectorAll(\"video[data-aura-video-preset]\")\n            .forEach(setupVideo);\n        }\n\n        if (document.readyState === \"loading\") {\n          document.addEventListener(\"DOMContentLoaded\", setupVideos);\n        } else {\n          setupVideos();\n        }\n      })();\n    "
  },
  {
    "src": "",
    "type": "importmap",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n      { \"imports\": { \"three\": \"https://unpkg.com/three@0.160.0/build/three.module.js\", \"three/addons/\": \"https://unpkg.com/three@0.160.0/examples/jsm/\" } }\n    "
  },
  {
    "src": "",
    "type": "module",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n      import * as THREE from 'three';\n      import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';\n      import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';\n      import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';\n      const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;\n      const isMobile = matchMedia('(max-width: 768px)').matches;\n      const canvas = document.getElementById('particlesBg');\n      if (canvas) {\n      const COUNT = isMobile ? 4000 : 12000;\n      const rand = Math.random, gauss = () => (rand() + rand() + rand() - 1.5) * 0.8;\n      const posArr = new Float32Array(COUNT * 3), ringId = new Float32Array(COUNT), seeds = new Float32Array(COUNT), scales = new Float32Array(COUNT);\n      const rings = [{ r: 6.4, tx: -0.5, tz: 0 }, { r: 5.3, tx: 0.9, tz: 0.7 }, { r: 4.2, tx: 0.25, tz: -1.1 }];\n      for (let i = 0; i < COUNT; i++) {\n      const i3 = i * 3, pick = rand();\n      seeds[i] = rand(); scales[i] = seeds[i] > 0.985 ? 2.4 : 0.5 + rand() * 0.9;\n      if (pick < 0.12) { ringId[i] = 4; let x = gauss(), y = gauss(), z = gauss(); const n = Math.hypot(x, y, z) || 1, r = 7.5 + rand() * 5.5; posArr[i3] = x / n * r; posArr[i3 + 1] = y / n * r; posArr[i3 + 2] = z / n * r; continue; }\n      if (pick < 0.24) { ringId[i] = 3; let x = gauss(), y = gauss(), z = gauss(); const n = Math.hypot(x, y, z) || 1, r = 1.7 * Math.cbrt(rand()); posArr[i3] = x / n * r; posArr[i3 + 1] = y / n * r; posArr[i3 + 2] = z / n * r; continue; }\n      ringId[i] = i % 3; const ring = rings[i % 3], ang = rand() * Math.PI * 2;\n      const x = Math.cos(ang) * ring.r + gauss() * 0.07, y = gauss() * 0.07, z = Math.sin(ang) * ring.r + gauss() * 0.07;\n      let y2 = y * Math.cos(ring.tx) - z * Math.sin(ring.tx); const z2 = y * Math.sin(ring.tx) + z * Math.cos(ring.tx);\n      const x2 = x * Math.cos(ring.tz) - y2 * Math.sin(ring.tz); y2 = x * Math.sin(ring.tz) + y2 * Math.cos(ring.tz);\n      posArr[i3] = x2; posArr[i3 + 1] = y2; posArr[i3 + 2] = z2;\n      }\n      const SNOISE = `\n      vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}\n      vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}\n      vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}\n      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}\n      float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}`;\n      const VERT = `attribute float aSeed;attribute float aScale;attribute float aRing;uniform float uTime;uniform float uSize;uniform float uPixelRatio;uniform vec3 uColor;uniform vec3 uCore;uniform vec3 uRing0;uniform vec3 uRing1;uniform vec3 uRing2;varying vec3 vColor;varying float vTwinkle;` + SNOISE + `\n      void main(){\n      vec3 pos=position;\n      if(aRing<2.5){vec3 ax=aRing<0.5?normalize(vec3(1.0,0.18,0.0)):aRing<1.5?normalize(vec3(0.0,1.0,0.22)):normalize(vec3(0.25,0.0,1.0));float ang=uTime*(aRing<0.5?0.24:aRing<1.5?-0.38:0.55);float c=cos(ang),s=sin(ang);pos=pos*c+cross(ax,pos)*s+ax*dot(ax,pos)*(1.0-c);}\n      vec3 np=pos*0.2+vec3(uTime*0.18)+aSeed*6.28;\n      pos+=vec3(snoise(np),snoise(np+31.7),snoise(np+74.3))*0.13;\n      pos.x+=sin(uTime*0.9+aSeed*40.0)*0.05;\n      pos.y+=cos(uTime*0.7+aSeed*30.0)*0.05;\n      vColor=uColor;\n      if(aRing<2.5){vColor=aRing<0.5?uRing0:aRing<1.5?uRing1:uRing2;}\n      vColor=mix(vColor,uCore,smoothstep(2.5,1.4,length(pos)));\n      vColor=mix(vColor,vec3(1.0),step(0.985,aSeed)*0.9);\n      vTwinkle=0.6+0.4*sin(uTime*(0.6+aSeed*1.8)+aSeed*20.0);\n      vec4 mv=modelViewMatrix*vec4(pos,1.0);\n      gl_PointSize=uSize*aScale*uPixelRatio*(12.0/-mv.z);\n      gl_Position=projectionMatrix*mv;\n      }`;\n      const FRAG = `precision mediump float;uniform float uOpacity;varying vec3 vColor;varying float vTwinkle;\n      void main(){float d=length(gl_PointCoord-0.5);float alpha=smoothstep(0.5,0.12,d);alpha+=smoothstep(0.12,0.0,d)*0.5;gl_FragColor=vec4(vColor,alpha*vTwinkle*uOpacity);}`;\n      const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });\n      const pr = Math.min(devicePixelRatio, isMobile ? 1.25 : 1.75);\n      renderer.setPixelRatio(pr);\n      renderer.setSize(innerWidth, innerHeight);\n      renderer.toneMapping = THREE.ACESFilmicToneMapping;\n      renderer.toneMappingExposure = 1.1;\n      const scene = new THREE.Scene();\n      scene.background = new THREE.Color('#0a0a0c');\n      const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 100);\n      camera.position.z = 14.5;\n      const geo = new THREE.BufferGeometry();\n      geo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));\n      geo.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));\n      geo.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));\n      geo.setAttribute('aRing', new THREE.BufferAttribute(ringId, 1));\n      const uniforms = { uTime: { value: 0 }, uSize: { value: 3.0 }, uPixelRatio: { value: pr }, uOpacity: { value: 0.8 }, uColor: { value: new THREE.Color('#f5b8d0') }, uCore: { value: new THREE.Color('#ffd9e8') }, uRing0: { value: new THREE.Color('#c26a97') }, uRing1: { value: new THREE.Color('#f5b8d0') }, uRing2: { value: new THREE.Color('#ffe3ef') } };\n      const mat = new THREE.ShaderMaterial({ uniforms, vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });\n      const group = new THREE.Group();\n      group.add(new THREE.Points(geo, mat));\n      scene.add(group);\n      let composer = null;\n      if (!isMobile && !reduced) {\n      composer = new EffectComposer(renderer);\n      composer.addPass(new RenderPass(scene, camera));\n      composer.addPass(new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.85, 0.55, 0.12));\n      }\n      let mx = 0, my = 0, tmx = 0, tmy = 0;\n      addEventListener('pointermove', (e) => { tmx = e.clientX / innerWidth - 0.5; tmy = e.clientY / innerHeight - 0.5; });\n      const clock = new THREE.Clock();\n      function frame() {\n      const t = clock.getElapsedTime();\n      uniforms.uTime.value = t;\n      mx += (tmx - mx) * 0.04;\n      my += (tmy - my) * 0.04;\n      group.rotation.y = mx * 0.35 + t * 0.06 + Math.sin(t * 0.07) * 0.06;\n      group.rotation.x = my * 0.22 + Math.sin(t * 0.23) * 0.1;\n      composer ? composer.render() : renderer.render(scene, camera);\n      requestAnimationFrame(frame);\n      }\n      if (reduced) { uniforms.uTime.value = 1; renderer.render(scene, camera); } else { requestAnimationFrame(frame); }\n      addEventListener('resize', () => {\n      camera.aspect = innerWidth / innerHeight;\n      camera.updateProjectionMatrix();\n      renderer.setSize(innerWidth, innerHeight);\n      composer && composer.setSize(innerWidth, innerHeight);\n      });\n      }\n    "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n      (function() {\n        const cards = document.querySelectorAll('.fade-card');\n        cards.forEach(card => {\n          card.style.transformStyle = 'preserve-3d';\n          const img = card.querySelector('.rounded-xl');\n          const content = card.querySelector('.flex-grow');\n\n          card.addEventListener('mousemove', e => {\n            const rect = card.getBoundingClientRect();\n            const x = e.clientX - rect.left;\n            const y = e.clientY - rect.top;\n            const centerX = rect.width / 2;\n            const centerY = rect.height / 2;\n            const rotateX = ((y - centerY) / centerY) * -10;\n            const rotateY = ((x - centerX) / centerX) * 10;\n\n            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;\n            card.style.transition = 'transform 0.1s ease-out';\n            card.style.zIndex = '10';\n\n            if (img) {\n              img.style.transform = 'translateZ(30px)';\n              img.style.transition = 'transform 0.1s ease-out';\n            }\n            if (content) {\n              content.style.transform = 'translateZ(20px)';\n              content.style.transition = 'transform 0.1s ease-out';\n            }\n          });\n\n          card.addEventListener('mouseleave', () => {\n            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';\n            card.style.transition = 'transform 0.5s ease-out';\n            card.style.zIndex = '1';\n\n            if (img) {\n              img.style.transform = 'translateZ(0px)';\n              img.style.transition = 'transform 0.5s ease-out';\n            }\n            if (content) {\n              content.style.transform = 'translateZ(0px)';\n              content.style.transition = 'transform 0.5s ease-out';\n            }\n          });\n        });\n      })();\n    "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n      (function(){function init(){if(!window.gsap||!window.ScrollTrigger)return;gsap.registerPlugin(ScrollTrigger);var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(reduce)return;var cards=gsap.utils.toArray('#collection .fade-card');if(cards.length){gsap.fromTo(cards,{x:function(i){return[-260,0,240][i]||0;},y:function(i){return[-80,120,-80][i]||0;},rotate:function(i){return[-14,0,14][i]||0;},scale:0.86,autoAlpha:0.4},{x:0,y:0,rotate:0,scale:1,autoAlpha:1,stagger:0.05,ease:'none',scrollTrigger:{trigger:'#collection',start:'top 80%',end:'top 20%',scrub:1}});}gsap.fromTo('#collection [data-scroll-word]',{y:'6vh',scale:1.04},{y:'-4vh',scale:0.99,ease:'none',scrollTrigger:{trigger:'#collection',start:'top bottom',end:'bottom top',scrub:1}});}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}})();\n    "
  },
  {
    "src": "",
    "type": "",
    "id": "",
    "async": false,
    "defer": false,
    "content": "\n      (function(){function init(){if(!window.gsap||!window.ScrollTrigger)return;gsap.registerPlugin(ScrollTrigger);var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(reduce)return;\n\n      /* Parallax background layers on scroll */\n      gsap.to('#bgLayer',{yPercent:18,ease:'none',scrollTrigger:{trigger:'#cinematic',start:'top top',end:'bottom top',scrub:1}});\n\n      /* Integration cards staggered reveal with 3D tilt-in */\n      gsap.utils.toArray('#integration .fade-card').forEach(function(c,i){gsap.fromTo(c,{y:60,rotateX:12,autoAlpha:0,transformPerspective:900},{y:0,rotateX:0,autoAlpha:1,duration:0.9,ease:'power3.out',scrollTrigger:{trigger:c,start:'top 88%'}});});\n\n      /* Craft strip headline parallax drift */\n      gsap.to('#craft .reveal-line',{yPercent:-15,ease:'none',scrollTrigger:{trigger:'#craft',start:'top bottom',end:'bottom top',scrub:1}});\n\n      /* Manifesto words progressive reveal */\n      var words=gsap.utils.toArray('#noema-manifesto span[style*=\"font-weight:800\"]');\n      if(words.length){gsap.fromTo(words,{autoAlpha:0.12,y:'0.4em'},{autoAlpha:1,y:'0em',ease:'none',stagger:0.4,scrollTrigger:{trigger:'#noema-manifesto',start:'top 70%',end:'center center',scrub:1}});}\n\n      /* Board giant word parallax */\n      gsap.to('#noema-board h2',{yPercent:-14,ease:'none',scrollTrigger:{trigger:'#noema-board',start:'top bottom',end:'bottom top',scrub:1}});\n      gsap.utils.toArray('#noema-board article').forEach(function(a,i){gsap.fromTo(a,{y:70,autoAlpha:0},{y:0,autoAlpha:1,duration:0.8,ease:'power3.out',delay:i*0.08,scrollTrigger:{trigger:'#noema-board',start:'top 75%'}});});\n\n      /* Support giant word parallax + cards */\n      gsap.to('#noema-support h2',{yPercent:-12,ease:'none',scrollTrigger:{trigger:'#noema-support',start:'top bottom',end:'bottom top',scrub:1}});\n      gsap.utils.toArray('#noema-support article').forEach(function(a,i){gsap.fromTo(a,{y:90,rotateX:8,autoAlpha:0,transformPerspective:900},{y:0,rotateX:0,autoAlpha:1,duration:0.9,ease:'power3.out',delay:i*0.1,scrollTrigger:{trigger:'#noema-support',start:'top 72%'}});});\n\n      /* Footer fade-up */\n      gsap.fromTo('footer > div',{y:40,autoAlpha:0},{y:0,autoAlpha:1,duration:0.8,ease:'power2.out',scrollTrigger:{trigger:'footer',start:'top 90%'}});\n\n      /* Micro-interactions: magnetic nav + button hover */\n      var mag=document.querySelectorAll('nav a, nav button, #craft a, #noema-support button, footer a');\n      mag.forEach(function(el){el.style.willChange='transform';el.style.display=el.style.display||'inline-flex';el.addEventListener('mousemove',function(e){var r=el.getBoundingClientRect();var mx=(e.clientX-r.left-r.width/2)/r.width;var my=(e.clientY-r.top-r.height/2)/r.height;gsap.to(el,{x:mx*6,y:my*4,duration:0.4,ease:'power2.out'});});el.addEventListener('mouseleave',function(){gsap.to(el,{x:0,y:0,duration:0.5,ease:'elastic.out(1,0.4)'});});});\n\n      /* Dot row hover pulse */\n      document.querySelectorAll('#dotRow span').forEach(function(d){d.addEventListener('mouseenter',function(){gsap.to(d,{scale:1.8,duration:0.3,ease:'back.out(2)'});});d.addEventListener('mouseleave',function(){gsap.to(d,{scale:1,duration:0.3});});});\n      }if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}})();\n    "
  }
];
const sourceHtmlId = "";
const sourceHtmlClassName = "";
const sourceHtmlStyle = "";
const sourceBodyId = "";
const sourceBodyClassName = "bg-[#0a0a0c] text-[#f4f2ef] font-sans antialiased selection:bg-[#f5b8d0]/20 selection:text-white";
const sourceBodyStyle = "margin:0; overflow-x:hidden;";
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
    <div className="aura-source-body bg-[#0a0a0c] text-[#f4f2ef] font-sans antialiased selection:bg-[#f5b8d0]/20 selection:text-white" style={{"margin": "0", "overflowX": "hidden"}}>
      <canvas id="particlesBg" aria-hidden="true" style={{"position": "fixed", "inset": "0px", "width": "1440px", "height": "1024px", "zIndex": "-1", "pointerEvents": "none", "display": "block"}} data-engine="three.js r160" width="2520" height="1792" className=""></canvas>

          <header style={{"position": "fixed", "top": "0", "left": "0", "right": "0", "zIndex": "60", "backdropFilter": "blur(12px)", "background": "rgba(10,10,12,0.55)", "borderBottom": "1px solid rgba(255,255,255,0.06)"}} className="">
            <nav className="mx-auto flex items-center justify-between px-6 py-4 max-w-[77.5rem]">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium tracking-tighter uppercase text-white">
                  Nexus AI
                </span>
              </div>
              <div className="hidden md:flex items-center gap-8 text-sm text-[#b8b4ae]">
                <a href="#cinematic" className="hover:text-white transition-colors duration-300" style={{"willChange": "transform", "display": "inline-flex"}}>
                  The System
                </a>
                <a href="#collection" className="hover:text-white transition-colors duration-300" style={{"willChange": "transform", "display": "inline-flex"}}>
                  Agents
                </a>
                <a href="#craft" className="hover:text-white transition-colors duration-300" style={{"willChange": "transform", "display": "inline-flex"}}>
                  Architecture
                </a>
              </div>
              <button className="text-sm font-normal px-4 py-1.5 rounded-full bg-[#ededed] text-[#1a1a1a] hover:bg-white transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.8),_0_2px_4px_rgba(0,0,0,0.1)]" style={{"willChange": "transform", "display": "inline-flex"}}>
                Deploy Now
              </button>
            </nav>
          </header>


          <section style={{"position": "relative", "height": "820vh"}} className="" id="cinematic">
            <div style={{"position": "sticky", "top": "0px", "height": "100vh", "width": "100%", "overflow": "hidden"}} className="" id="pinStage">


              <canvas style={{"position": "absolute", "inset": "0", "width": "100%", "height": "100%", "zIndex": "5", "opacity": "0.85"}} width="2880" height="2048" className="" id="petalCanvas"></canvas>


              <div id="visualWrap" style={{"position": "absolute", "inset": "0px", "zIndex": "1", "willChange": "transform"}} className="">
                <div id="bgLayer" style={{"position": "absolute", "inset": "-8%", "backgroundSize": "cover", "backgroundPosition": "center center", "filter": "saturate(0.7) brightness(0.55)", "willChange": "transform", "overflow": "hidden", "isolation": "isolate"}} className=""></div>
                <div style={{"position": "absolute", "inset": "0px", "display": "flex", "alignItems": "center", "justifyContent": "center", "willChange": "transform"}} className="" id="midLayer">

                  <div className="anim-scroll-aura-emrgurr6g15xfazn2" style={{"display": "flex", "alignItems": "center", "justifyContent": "center", "width": "100%", "height": "100%"}}>
                    <div className="anim-float-aura-emrgurr6g15xfazn2" style={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                      <div id="bouquet" className="z-40 relative" style={{"width": "min(56vw, 40rem)", "aspectRatio": "16 / 11", "backgroundImage": "url(&quot", "https": "//hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d0f628cf-26bf-473d-81b9-50e422c51521_3840w.png&quot", "backgroundSize": "contain", "backgroundRepeat": "no-repeat", "backgroundPosition": "center center", "willChange": "transform", "zIndex": "40"}}></div>
                    </div>
                  </div>
                </div>
              </div>


              <div id="gradeWash" style={{"position": "absolute", "inset": "0px", "zIndex": "6", "pointerEvents": "none", "background": "radial-gradient(circle at 50% 45%, rgba(245, 184, 208, 0.1), rgba(10, 10, 12, 0.75) 70%)", "mixBlendMode": "screen"}} className=""></div>


              <div id="lbTop" style={{"position": "absolute", "top": "0px", "left": "0px", "right": "0px", "height": "0.000314vh", "background": "rgb(0, 0, 0)", "zIndex": "20", "willChange": "height"}} className=""></div>
              <div id="lbBot" style={{"position": "absolute", "bottom": "0px", "left": "0px", "right": "0px", "height": "0.000314vh", "background": "rgb(0, 0, 0)", "zIndex": "20", "willChange": "height"}} className=""></div>


              <div style={{"position": "absolute", "inset": "1.5rem", "zIndex": "30", "pointerEvents": "none"}} className="">
                <span style={{"position": "absolute", "top": "0", "left": "0", "width": "1.375rem", "height": "1.375rem", "borderTop": "1px solid rgba(255,255,255,0.25)", "borderLeft": "1px solid rgba(255,255,255,0.25)"}}></span>
                <span style={{"position": "absolute", "top": "0", "right": "0", "width": "1.375rem", "height": "1.375rem", "borderTop": "1px solid rgba(255,255,255,0.25)", "borderRight": "1px solid rgba(255,255,255,0.25)"}}></span>
                <span style={{"position": "absolute", "bottom": "0", "left": "0", "width": "1.375rem", "height": "1.375rem", "borderBottom": "1px solid rgba(255,255,255,0.25)", "borderLeft": "1px solid rgba(255,255,255,0.25)"}}></span>
                <span style={{"position": "absolute", "bottom": "0", "right": "0", "width": "1.375rem", "height": "1.375rem", "borderBottom": "1px solid rgba(255,255,255,0.25)", "borderRight": "1px solid rgba(255,255,255,0.25)"}}></span>
              </div>


              <div style={{"position": "absolute", "inset": "0px", "zIndex": "40", "display": "flex", "alignItems": "center", "justifyContent": "center", "pointerEvents": "none"}} className="">
                <div className="beat flex flex-col items-center" data-beat="0" style={{"position": "absolute", "textAlign": "center", "padding": "0 1.5rem", "opacity": "0"}}>
                  <p className="text-xs uppercase" style={{"letterSpacing": "0.35rem", "color": "#f5b8d0", "marginBottom": "1rem"}}>
                    Version No. 07
                  </p>
                  <h1 className="tracking-tight" style={{"fontSize": "clamp(2.5rem,8vw,6rem)", "lineHeight": "0.95", "fontWeight": "500"}}>
                    Quiet Nodes,
                    <br />
                    Waiting Data
                  </h1>
                </div>
                <div className="beat flex flex-col items-center" data-beat="1" style={{"position": "absolute", "textAlign": "center", "padding": "0 1.5rem", "opacity": "0"}}>
                  <h2 className="tracking-tight" style={{"fontSize": "clamp(2.125rem,7vw,5rem)", "lineHeight": "1", "fontWeight": "500"}}>
                    The First Boot
                  </h2>
                  <p className="text-sm mt-4 text-[#c9c4bd]" style={{"maxWidth": "27.5rem"}}>
                    Algorithms unfold as raw data moves through the neural network.
                  </p>
                </div>
                <div className="beat flex flex-col items-center" data-beat="2" style={{"position": "absolute", "textAlign": "center", "padding": "0 1.5rem", "opacity": "0"}}>
                  <p className="text-xs uppercase" style={{"letterSpacing": "0.3rem", "color": "#f5b8d0", "marginBottom": "0.75rem"}}>
                    The Initialization
                  </p>
                  <h2 className="tracking-tight" style={{"fontSize": "clamp(2.125rem,7vw,5rem)", "lineHeight": "1", "fontWeight": "500"}}>
                    Connected Swarms
                  </h2>
                </div>
                <div className="beat flex flex-col items-center" data-beat="3" style={{"position": "absolute", "textAlign": "center", "padding": "0 1.5rem", "opacity": "0"}}>
                  <h2 className="tracking-tight" style={{"fontSize": "clamp(2.125rem,7vw,5rem)", "lineHeight": "1", "fontWeight": "500"}}>
                    A Full Cluster
                  </h2>
                  <p className="text-sm mt-4 text-[#c9c4bd]" style={{"maxWidth": "26.25rem"}}>
                    Forty-two autonomous agents, architected to scale from every
                    angle.
                  </p>
                </div>
                <div className="beat flex flex-col items-center" data-beat="4" style={{"position": "absolute", "textAlign": "center", "padding": "0 1.5rem", "opacity": "0"}}>
                  <p className="text-xs uppercase" style={{"letterSpacing": "0.3rem", "color": "#f5b8d0", "marginBottom": "0.75rem"}}>
                    Data Lift
                  </p>
                  <h2 className="tracking-tight" style={{"fontSize": "clamp(2.125rem,7vw,5rem)", "lineHeight": "1", "fontWeight": "500"}}>
                    Carried by Cloud
                  </h2>
                </div>
                <div className="beat flex flex-col items-center" data-beat="5" style={{"position": "absolute", "textAlign": "center", "padding": "0 1.5rem", "opacity": "0"}}>
                  <h2 className="tracking-tight" style={{"fontSize": "clamp(2.125rem,7vw,5rem)", "lineHeight": "1", "fontWeight": "500"}}>
                    Into the Stream
                  </h2>
                </div>
                <div className="beat flex flex-col items-center" data-beat="6" style={{"position": "absolute", "textAlign": "center", "padding": "0 1.5rem", "opacity": "0"}}>
                  <p className="text-xs uppercase" style={{"letterSpacing": "0.3rem", "color": "#f5b8d0", "marginBottom": "0.75rem"}}>
                    Deployed Live
                  </p>
                  <h2 className="tracking-tight uppercase" style={{"fontSize": "clamp(2.375rem,8vw,5.625rem)", "lineHeight": "1", "fontWeight": "500"}}>
                    Nexus AI
                  </h2>
                  <p className="text-sm mt-4 text-[#c9c4bd]">
                    System active — explore the agents below.
                  </p>
                </div>
              </div>


              <div style={{"position": "absolute", "left": "2rem", "bottom": "3.5rem", "zIndex": "45", "display": "flex", "alignItems": "center", "gap": "1rem"}} className="">
                <div id="timelineTrack" style={{"width": "11.25rem", "height": "0.1875rem", "borderRadius": "0.1875rem", "background": "rgba(255,255,255,0.16)", "overflow": "hidden"}}>
                  <div id="timelineFill" style={{"height": "100%", "width": "99.999641%", "background": "linear-gradient(90deg, rgb(245, 184, 208), rgb(194, 106, 151))"}}></div>
                </div>
                <span id="timeLabel" className="text-xs tabular-nums text-[#b8b4ae]">12.75s</span>
              </div>


              <div style={{"position": "absolute", "right": "2rem", "bottom": "3.5rem", "zIndex": "45", "display": "flex", "gap": "0.625rem"}} id="dotRow" className="">
                <span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span>
                <span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span>
                <span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span>
                <span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span>
                <span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span>
                <span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span>
                <span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span>
                <span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span>
                <span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span>
                <span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span>
                <span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span>
                <span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span>
                <span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span>
                <span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span>
                <span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span>
                <span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span>
                <span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span>
                <span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span>
                <span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span>
                <span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span>
                <span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span>
              <span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span><span style={{"width": "0.5rem", "height": "0.5rem", "borderRadius": "50%", "background": "rgba(255, 255, 255, 0.25)", "transition": "background 0.3s, transform 0.3s", "cursor": "pointer"}}></span></div>
            </div>
          </section>


          <section id="collection" className="mx-auto px-6 py-24 max-w-[77.5rem] relative overflow-hidden">
            <div style={{"position": "absolute", "inset": "0", "backgroundImage": "repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 9px)", "pointerEvents": "none"}} className=""></div>

            <div className="reveal-line overflow-hidden">
              <p className="text-xs uppercase text-[#f5b8d0]" style={{"letterSpacing": "0.3rem"}}>
                The Agents
              </p>
            </div>
            <div className="reveal-line overflow-hidden mt-3">
              <h2 className="tracking-tight" style={{"fontSize": "clamp(1.875rem,5vw,3.5rem)", "fontWeight": "500", "lineHeight": "1.05"}} data-scroll-word="true">
                Autonomous systems built to scale with data
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 gap-x-6 gap-y-6">

              <div className="fade-card group flex flex-col border-white/[0.06] hover:bg-white/[0.04] transition-colors duration-500 cursor-pointer border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg" style={{"transformStyle": "preserve-3d"}}>
                <div className="rounded-xl overflow-hidden mb-5" style={{"aspectRatio": "4/5", "backgroundImage": "url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4dd5a8b0-2d0d-44eb-ae24-75a4345db5ac_3840w.png')", "backgroundSize": "cover", "backgroundPosition": "center"}}></div>
                <div className="flex flex-col flex-grow justify-between" style={{"transition": "transform 0.5s ease-out"}}>
                  <div className="">
                    <h3 className="text-base font-medium tracking-tight group-hover:text-white transition-colors text-[#e8e6e3]">
                      Data Harvester
                    </h3>
                    <p className="text-sm mt-1.5 text-[#9c988f]">
                      High-frequency extraction for real-time insights.
                    </p>
                  </div>
                  <p className="text-sm mt-4 font-normal text-[#f5b8d0]">$780/mo</p>
                </div>
              </div>


              <div className="fade-card group flex flex-col border-white/[0.06] hover:bg-white/[0.04] transition-colors duration-500 cursor-pointer border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg" style={{"transformStyle": "preserve-3d"}}>
                <div className="rounded-xl overflow-hidden mb-5" style={{"aspectRatio": "4/5", "backgroundImage": "url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d898f02c-0397-49fe-9aca-cab19a5582c5_3840w.png')", "backgroundSize": "cover", "backgroundPosition": "center"}}></div>
                <div className="flex flex-col flex-grow justify-between" style={{"transition": "transform 0.5s ease-out"}}>
                  <div className="">
                    <h3 className="text-base font-medium tracking-tight group-hover:text-white transition-colors text-[#e8e6e3]">
                      Neural Orchestrator
                    </h3>
                    <p className="text-sm mt-1.5 text-[#9c988f]">
                      Dynamic load balancing that shifts with any traffic.
                    </p>
                  </div>
                  <p className="text-sm mt-4 font-normal text-[#f5b8d0]">$940/mo</p>
                </div>
              </div>


              <div className="fade-card group flex flex-col border-white/[0.06] hover:bg-white/[0.04] transition-colors duration-500 cursor-pointer border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg" style={{"transformStyle": "preserve-3d"}}>
                <div className="rounded-xl overflow-hidden mb-5" style={{"aspectRatio": "4/5", "backgroundImage": "url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/25d0ce5e-7521-4346-900f-d2ff2902bd46_3840w.png')", "backgroundSize": "cover", "backgroundPosition": "center"}}></div>
                <div className="flex flex-col flex-grow justify-between" style={{"transition": "transform 0.1s ease-out"}}>
                  <div className="">
                    <h3 className="text-base font-medium tracking-tight group-hover:text-white transition-colors text-[#e8e6e3]">
                      Logic Synthesizer
                    </h3>
                    <p className="text-sm mt-1.5 text-[#9c988f]">
                      Statement deployment, forty-two simultaneous models.
                    </p>
                  </div>
                  <p className="text-sm mt-4 font-normal text-[#f5b8d0]">$1,260/mo</p>
                </div>
              </div>
            </div>
          </section>


          <section id="craft" className="relative overflow-hidden flex items-center" style={{"height": "70vh"}}>
            <div id="craftBg" className="absolute inset-[-15%] bg-cover bg-center will-change-transform" style={{"backgroundImage": "url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf973fee-26dd-4029-b42e-26dfa75c7417_3840w.png')", "filter": "brightness(0.35) saturate(0.8)"}}></div>
            <div className="mx-auto px-6 max-w-[77.5rem] relative z-10">
              <div className="reveal-line overflow-hidden">
                <h2 className="tracking-tight text-white" style={{"fontSize": "clamp(1.75rem,5vw,3.25rem)", "fontWeight": "500", "maxWidth": "40rem", "lineHeight": "1.1"}}>
                  Every algorithm is optimized by hand, the moment it compiles.
                </h2>
              </div>
              <a href="#" className="inline-flex items-center gap-2 mt-8 text-sm font-medium px-5 py-2.5 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-md" style={{"willChange": "transform", "display": "inline-flex"}}>
                Explore our architecture
                <iconify-icon icon="solar:arrow-right-linear" width="1rem"></iconify-icon>
              </a>
            </div>
          </section>
          <section id="integration" className="mx-auto px-6 py-24 max-w-[77.5rem] relative">
            <div className="reveal-line overflow-hidden">
              <p className="text-xs uppercase text-[#f5b8d0]" style={{"letterSpacing": "0.3rem"}}>
                Integration
              </p>
            </div>
            <div className="reveal-line overflow-hidden mt-3">
              <h2 className="tracking-tight" style={{"fontSize": "clamp(1.875rem,5vw,3.5rem)", "fontWeight": "500", "lineHeight": "1.05"}}>
                Deploy seamlessly across your stack
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
              <div className="fade-card flex flex-col border-white/[0.06] hover:bg-white/[0.04] transition-colors duration-500 bg-neutral-900 border rounded-2xl px-10 py-10" style={{"transformStyle": "preserve-3d"}}>
                <iconify-icon icon="solar:server-square-linear" width="2.5rem" className="text-[#f5b8d0] mb-6"></iconify-icon>
                <h3 className="text-xl font-medium tracking-tight text-[#e8e6e3] mb-2">
                  Enterprise API
                </h3>
                <p className="text-sm text-[#9c988f]">
                  Connect your infrastructure directly to our neural clusters with a
                  single API key. Highly scalable, sub-millisecond latency.
                </p>
              </div>
              <div className="fade-card flex flex-col border-white/[0.06] hover:bg-white/[0.04] transition-colors duration-500 bg-neutral-900 border rounded-2xl px-10 py-10" style={{"transformStyle": "preserve-3d"}}>
                <iconify-icon icon="solar:cloud-network-linear" width="2.5rem" className="text-[#f5b8d0] mb-6"></iconify-icon>
                <h3 className="text-xl font-medium tracking-tight text-[#e8e6e3] mb-2">
                  Cloud Native
                </h3>
                <p className="text-sm text-[#9c988f]">
                  Deploy edge nodes directly inside your AWS, GCP, or Azure
                  environments. Keep your data localized and compliant.
                </p>
              </div>
            </div>
          </section>
          <section id="noema-manifesto" style={{"position": "relative", "minHeight": "100vh", "background": "#f4efe7", "color": "#050505", "overflow": "hidden", "display": "flex", "alignItems": "center", "justifyContent": "center", "padding": "6rem 1.25rem", "fontFamily": "'Inter',sans-serif"}} className="">
            <div style={{"position": "absolute", "inset": "0", "background": "radial-gradient(circle at 20% 30%, rgba(79,70,229,0.24), transparent 32%), radial-gradient(circle at 80% 72%, rgba(244,63,94,0.22), transparent 30%)"}} className=""></div>
            <div style={{"position": "relative", "zIndex": "10", "maxWidth": "min(1180px,92vw)", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "center", "gap": "0.18em 0.28em", "textAlign": "center"}} className="">
              <span style={{"display": "inline-block", "fontWeight": "800", "fontSize": "clamp(2.4rem,7.8vw,7.4rem)", "lineHeight": "0.9", "letterSpacing": "-0.045em", "textTransform": "uppercase"}} className="">
                Everything
              </span>
              <span style={{"display": "inline-block", "fontWeight": "800", "fontSize": "clamp(2.4rem,7.8vw,7.4rem)", "lineHeight": "0.9", "letterSpacing": "-0.045em", "textTransform": "uppercase"}}>
                your
              </span>
              <span style={{"display": "inline-block", "fontWeight": "800", "fontSize": "clamp(2.4rem,7.8vw,7.4rem)", "lineHeight": "0.9", "letterSpacing": "-0.045em", "textTransform": "uppercase"}} className="">
                autonomous
              </span>
              <span style={{"display": "inline-block", "fontWeight": "800", "fontSize": "clamp(2.4rem,7.8vw,7.4rem)", "lineHeight": "0.9", "letterSpacing": "-0.045em", "textTransform": "uppercase"}} className="">
                network
              </span>
              <span style={{"display": "inline-block", "fontWeight": "800", "fontSize": "clamp(2.4rem,7.8vw,7.4rem)", "lineHeight": "0.9", "letterSpacing": "-0.045em", "textTransform": "uppercase"}}>
                needs,
              </span>
              <span style={{"display": "inline-block", "fontWeight": "800", "fontSize": "clamp(2.4rem,7.8vw,7.4rem)", "lineHeight": "0.9", "letterSpacing": "-0.045em", "textTransform": "uppercase"}} className="">
                deployed
              </span>
              <span style={{"display": "inline-block", "fontWeight": "800", "fontSize": "clamp(2.4rem,7.8vw,7.4rem)", "lineHeight": "0.9", "letterSpacing": "-0.045em", "textTransform": "uppercase"}}>
                into
              </span>
              <span style={{"display": "inline-block", "fontWeight": "800", "fontSize": "clamp(2.4rem,7.8vw,7.4rem)", "lineHeight": "0.9", "letterSpacing": "-0.045em", "textTransform": "uppercase"}}>
                one
              </span>
              <span style={{"display": "inline-block", "fontWeight": "800", "fontSize": "clamp(2.4rem,7.8vw,7.4rem)", "lineHeight": "0.9", "letterSpacing": "-0.045em", "textTransform": "uppercase"}}>
                unified
              </span>
              <span style={{"display": "inline-block", "fontWeight": "800", "fontSize": "clamp(2.4rem,7.8vw,7.4rem)", "lineHeight": "0.9", "letterSpacing": "-0.045em", "textTransform": "uppercase"}}>
                ecosystem.
              </span>
            </div>
            <p style={{"position": "absolute", "left": "1.25rem", "bottom": "1.25rem", "zIndex": "10", "fontSize": "0.72rem", "letterSpacing": "0.18em", "textTransform": "uppercase", "fontWeight": "700", "color": "rgba(0,0,0,0.6)"}} className="">
              04 / Architecture
            </p>
          </section>
          <section style={{"position": "relative", "minHeight": "100vh", "color": "#050505", "overflow": "hidden", "padding": "7rem 1.25rem 4rem", "display": "flex", "alignItems": "center", "fontFamily": "'Inter',sans-serif"}} className="" id="noema-board">
            <h2 style={{"position": "absolute", "zIndex": "0", "color": "rgba(0,0,0,0.18)", "fontWeight": "800", "fontSize": "clamp(8rem,28vw,30rem)", "lineHeight": "0.78", "letterSpacing": "-0.055em", "whiteSpace": "nowrap", "left": "50%", "top": "50%", "transform": "translate(-50%,-50%)"}} className="">
              MODELS
            </h2>
            <div style={{"position": "relative", "zIndex": "10", "width": "100%", "maxWidth": "72rem", "margin": "0 auto", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(220px,1fr))", "gap": "0.75rem"}} className="">
              <article style={{"minHeight": "158px", "border": "1px solid rgba(255,255,255,0.2)", "background": "#050505", "color": "white", "padding": "1rem", "display": "flex", "flexDirection": "column", "justifyContent": "space-between"}} className="">
                <div className="">
                  <p style={{"fontSize": "0.75rem", "textTransform": "uppercase", "letterSpacing": "0.18em", "color": "rgba(255,255,255,0.45)"}} className="">
                    Deployment
                  </p>
                  <h3 style={{"fontWeight": "800", "fontSize": "1.875rem", "lineHeight": "1", "marginTop": "0.75rem"}} className="">
                    Cluster Alpha:
                    <br />
                    Online
                  </h3>
                </div>
                <div style={{"display": "flex", "alignItems": "flex-end", "justifyContent": "space-between", "fontSize": "0.75rem", "color": "rgba(255,255,255,0.58)"}} className="">
                  <span className="">
                    US-East
                    <br />
                    99.9% Uptime
                  </span>
                </div>
              </article>
              <article style={{"minHeight": "158px", "border": "1px solid rgba(255,255,255,0.2)", "background": "#050505", "color": "white", "padding": "1rem", "display": "flex", "flexDirection": "column", "justifyContent": "space-between"}} className="">
                <div>
                  <p style={{"fontSize": "0.75rem", "textTransform": "uppercase", "letterSpacing": "0.18em", "color": "rgba(255,255,255,0.45)"}}>
                    Processing
                  </p>
                  <h3 style={{"fontWeight": "800", "fontSize": "1.875rem", "lineHeight": "1", "marginTop": "0.75rem"}}>
                    Neural Node
                    <br />
                    Active
                  </h3>
                </div>
                <div style={{"display": "flex", "alignItems": "flex-end", "justifyContent": "space-between", "fontSize": "0.75rem", "color": "rgba(255,255,255,0.58)"}}>
                  <span>
                    EU-Central
                    <br />
                    12ms Ping
                  </span>
                </div>
              </article>
              <article style={{"minHeight": "158px", "border": "1px solid rgba(255,255,255,0.2)", "background": "#050505", "color": "white", "padding": "1rem", "display": "flex", "flexDirection": "column", "justifyContent": "space-between"}} className="">
                <div className="">
                  <p style={{"fontSize": "0.75rem", "textTransform": "uppercase", "letterSpacing": "0.18em", "color": "rgba(255,255,255,0.45)"}}>
                    Training
                  </p>
                  <h3 style={{"fontWeight": "800", "fontSize": "1.875rem", "lineHeight": "1", "marginTop": "0.75rem"}} className="">
                    Deep Learning
                    <br />
                    Epoch 42
                  </h3>
                </div>
                <div style={{"display": "flex", "alignItems": "flex-end", "justifyContent": "space-between", "fontSize": "0.75rem", "color": "rgba(255,255,255,0.58)"}} className="">
                  <span className="">
                    Global
                    <br />
                    Continuous
                  </span>
                </div>
              </article>
              <article style={{"minHeight": "158px", "border": "1px solid rgba(0,0,0,0.2)", "background": "#F43F5E", "color": "#050505", "padding": "1rem", "display": "flex", "flexDirection": "column", "justifyContent": "space-between"}}>
                <div>
                  <p style={{"fontSize": "0.75rem", "textTransform": "uppercase", "letterSpacing": "0.18em", "color": "rgba(0,0,0,0.55)"}}>
                    Security
                  </p>
                  <h3 style={{"fontWeight": "800", "fontSize": "1.875rem", "lineHeight": "1", "marginTop": "0.75rem"}}>
                    Zero-Trust
                    <br />
                    Firewall
                  </h3>
                </div>
                <div style={{"display": "flex", "alignItems": "flex-end", "justifyContent": "space-between", "fontSize": "0.75rem", "color": "rgba(0,0,0,0.65)"}}>
                  <span>
                    US-West
                    <br />
                    Protected
                  </span>
                </div>
              </article>
            </div>
          </section>
          <section style={{"position": "relative", "minHeight": "100vh", "background": "#000000", "color": "white", "overflow": "hidden", "padding": "0 1.25rem", "display": "flex", "alignItems": "center", "fontFamily": "'Inter',sans-serif"}} className="" id="noema-support">
        <h2 style={{"position": "absolute", "zIndex": "0", "color": "rgba(0,0,0,0.35)", "fontWeight": "800", "fontSize": "clamp(8rem,28vw,30rem)", "lineHeight": "0.78", "letterSpacing": "-0.055em", "whiteSpace": "nowrap", "left": "50%", "top": "46%", "transform": "translate(-50%,-50%)"}} className="">
          SCALE
        </h2>
        <div style={{"position": "relative", "zIndex": "10", "width": "100%", "maxWidth": "72rem", "margin": "0px auto", "display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(240px, 1fr))", "gap": "0.75rem", "padding": "5rem 0px"}} className="">
          <article style={{"border": "1px solid rgba(255,255,255,0.28)", "background": "#050505", "color": "white", "minHeight": "310px", "padding": "1.25rem"}} className="">
            <p style={{"fontSize": "0.75rem", "textTransform": "uppercase", "letterSpacing": "0.2em", "color": "rgba(255,255,255,0.45)"}} className="">
              01 / Ingestion
            </p>
            <h3 style={{"fontWeight": "700", "fontSize": "clamp(3rem,5vw,3.75rem)", "lineHeight": "1", "marginTop": "1.5rem", "letterSpacing": "-0.025em"}} className="">
              COLLECTED
            </h3>
            <p style={{"fontSize": "0.875rem", "color": "rgba(255,255,255,0.58)", "marginTop": "1.5rem", "maxWidth": "220px"}} className="">
              Raw data is securely ingested from enterprise edge nodes instantly.
            </p>
          </article>
          <article style={{"border": "1px solid rgba(0,0,0,0.1)", "background": "white", "color": "#050505", "minHeight": "310px", "padding": "1.25rem"}} className="">
            <p style={{"fontSize": "0.75rem", "textTransform": "uppercase", "letterSpacing": "0.2em", "color": "rgba(0,0,0,0.45)"}} className="">
              02 / Synthesis
            </p>
            <h3 style={{"fontWeight": "700", "fontSize": "clamp(3rem,5vw,3.75rem)", "lineHeight": "1", "marginTop": "1.5rem", "letterSpacing": "-0.025em"}} className="">
              PROCESSED
            </h3>
            <button style={{"marginTop": "2rem", "width": "100%", "background": "rgb(5, 5, 5)", "color": "white", "fontSize": "0.875rem", "fontWeight": "500", "padding": "0.75rem", "border": "medium", "borderRadius": "9999px", "cursor": "pointer", "willChange": "transform", "display": "inline-flex", "alignItems": "center", "justifyContent": "center"}}>
                  View Metrics
                </button>
          </article>
          <article style={{"border": "1px solid rgba(255,255,255,0.28)", "background": "#050505", "color": "white", "minHeight": "310px", "padding": "1.25rem"}} className="">
            <p style={{"fontSize": "0.75rem", "textTransform": "uppercase", "letterSpacing": "0.2em", "color": "rgba(255,255,255,0.45)"}}>
              03 / Output
            </p>
            <h3 style={{"fontWeight": "700", "fontSize": "clamp(3rem,5vw,3.75rem)", "lineHeight": "1", "marginTop": "1.5rem", "letterSpacing": "-0.025em"}} className="">
              DEPLOYED
            </h3>
            <p style={{"fontSize": "0.875rem", "color": "rgba(255,255,255,0.58)", "marginTop": "1.5rem", "maxWidth": "220px"}}>
              Actionable insights deployed directly into your operational
              pipelines.
            </p>
          </article>
        </div>
      </section>


          <footer className="mx-auto px-6 py-16 max-w-[77.5rem] border-t border-white/[0.06]">
            <div className="flex flex-col md:flex-row justify-between gap-10">
              <div className="">
                <span className="text-sm font-medium tracking-tighter uppercase text-white">
                  Nexus AI
                </span>
                <p className="text-sm mt-4 text-[#7d7a73]" style={{"maxWidth": "17.5rem"}}>
                  Cinematic AI agent experiences, deployed instantly across the cloud.
                </p>
              </div>
              <div className="flex gap-16 text-sm text-[#9c988f]">
                <div className="flex flex-col gap-3">
                  <a href="#" className="hover:text-white transition-colors" style={{"willChange": "transform", "display": "inline-flex"}}>Deploy</a>
                  <a href="#" className="hover:text-white transition-colors" style={{"willChange": "transform", "display": "inline-flex"}}>Clusters</a>
                  <a href="#" className="hover:text-white transition-colors" style={{"willChange": "transform", "display": "inline-flex"}}>
                    Enterprise
                  </a>
                </div>
                <div className="flex flex-col gap-3">
                  <a href="#" className="hover:text-white transition-colors" style={{"willChange": "transform", "display": "inline-flex"}}>
                    Documentation
                  </a>
                  <a href="#" className="hover:text-white transition-colors" style={{"willChange": "transform", "display": "inline-flex"}}>Changelog</a>
                  <a href="#" className="hover:text-white transition-colors" style={{"willChange": "transform", "display": "inline-flex"}}>API</a>
                </div>
              </div>
            </div>
            <div className="mt-16 flex items-center justify-between">
              <p className="text-xs text-[#5c5a55]">
                © 2026 Nexus AI. All rights reserved.
              </p>
            </div>
          </footer>
    </div>
  );
}
