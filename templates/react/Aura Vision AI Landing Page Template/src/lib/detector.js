/* Aura Vision — on-device motion-intelligence human locator.
   Downscales frames to a grid, diffs luminance, clusters activity,
   tracks targets across frames and renders a HUD overlay. */

export function createDetector({ video, overlay, getSensitivity, onUpdate }) {
  const GW = 80;
  const GH = 60;
  const proc = document.createElement("canvas");
  proc.width = GW;
  proc.height = GH;
  const pctx = proc.getContext("2d", { willReadFrequently: true });
  const octx = overlay.getContext("2d");

  let prev = null;
  let tracks = [];
  let nextId = 1;
  let raf = 0;
  let running = true;
  let frame = 0;
  let fps = 0;
  let lastT = performance.now();
  let acc = 0;
  let cnt = 0;
  let emaActivity = 0;

  const pad = (n) => String(n).padStart(2, "0");

  function cluster(active) {
    const visited = new Uint8Array(GW * GH);
    const boxes = [];
    const stack = [];
    for (let gy = 0; gy < GH; gy++) {
      for (let gx = 0; gx < GW; gx++) {
        const si = gy * GW + gx;
        if (!active[si] || visited[si]) continue;
        visited[si] = 1;
        stack.length = 0;
        stack.push(si);
        let minX = gx, maxX = gx, minY = gy, maxY = gy, count = 0;
        while (stack.length) {
          const c = stack.pop();
          const cx = c % GW;
          const cy = (c / GW) | 0;
          count++;
          if (cx < minX) minX = cx;
          if (cx > maxX) maxX = cx;
          if (cy < minY) minY = cy;
          if (cy > maxY) maxY = cy;
          for (let dy = -2; dy <= 2; dy++) {
            for (let dx = -2; dx <= 2; dx++) {
              const nx = cx + dx;
              const ny = cy + dy;
              if (nx < 0 || ny < 0 || nx >= GW || ny >= GH) continue;
              const ni = ny * GW + nx;
              if (active[ni] && !visited[ni]) {
                visited[ni] = 1;
                stack.push(ni);
              }
            }
          }
        }
        if (count >= 12 && maxX - minX >= 3 && maxY - minY >= 4) {
          boxes.push({ x: minX, y: minY, w: maxX - minX + 1, h: maxY - minY + 1, count });
        }
      }
    }
    return boxes.sort((a, b) => b.count - a.count).slice(0, 4);
  }

  function updateTracks(boxes) {
    for (const t of tracks) t.matched = false;
    for (const b of boxes) {
      const bcx = b.x + b.w / 2;
      const bcy = b.y + b.h / 2;
      let best = null;
      let bd = 26;
      for (const t of tracks) {
        if (t.matched) continue;
        const d = Math.hypot(t.cx - bcx, t.cy - bcy);
        if (d < bd) {
          bd = d;
          best = t;
        }
      }
      if (best) {
        const k = 0.32;
        best.x += (b.x - best.x) * k;
        best.y += (b.y - best.y) * k;
        best.w += (b.w - best.w) * k;
        best.h += (b.h - best.h) * k;
        best.cx = best.x + best.w / 2;
        best.cy = best.y + best.h / 2;
        best.density = b.count / (b.w * b.h);
        best.hits = Math.min(best.hits + 1, 40);
        best.miss = 0;
        best.matched = true;
      } else {
        tracks.push({
          id: nextId++,
          x: b.x, y: b.y, w: b.w, h: b.h,
          cx: bcx, cy: bcy,
          density: b.count / (b.w * b.h),
          hits: 1, miss: 0, matched: true,
        });
      }
    }
    tracks = tracks.filter((t) => {
      if (!t.matched) {
        t.miss++;
        t.hits = Math.max(0, t.hits - 1);
      }
      return t.miss < 16;
    });
  }

  function draw(visible) {
    const cw = overlay.width;
    const ch = overlay.height;
    octx.clearRect(0, 0, cw, ch);

    // Ambient scan line
    const sl = ((frame % 220) / 220) * ch;
    const grad = octx.createLinearGradient(0, sl - 44, 0, sl);
    grad.addColorStop(0, "rgba(255,160,80,0)");
    grad.addColorStop(1, "rgba(255,160,80,0.08)");
    octx.fillStyle = grad;
    octx.fillRect(0, sl - 44, cw, 44);
    octx.fillStyle = "rgba(255,170,90,0.28)";
    octx.fillRect(0, sl, cw, 1);

    const sx = cw / GW;
    const sy = ch / GH;
    const fs = Math.max(11, Math.round(cw * 0.016));
    octx.font = `600 ${fs}px "JetBrains Mono", monospace`;
    octx.textBaseline = "middle";

    for (const t of visible) {
      const x = t.x * sx;
      const y = t.y * sy;
      const w = t.w * sx;
      const h = t.h * sy;
      const L = Math.min(w, h) * 0.22;

      octx.strokeStyle = "rgba(255,159,77,0.3)";
      octx.lineWidth = 1;
      octx.strokeRect(x, y, w, h);

      octx.strokeStyle = "rgba(255,178,102,0.95)";
      octx.lineWidth = 2.5;
      octx.beginPath();
      octx.moveTo(x, y + L); octx.lineTo(x, y); octx.lineTo(x + L, y);
      octx.moveTo(x + w - L, y); octx.lineTo(x + w, y); octx.lineTo(x + w, y + L);
      octx.moveTo(x + w, y + h - L); octx.lineTo(x + w, y + h); octx.lineTo(x + w - L, y + h);
      octx.moveTo(x + L, y + h); octx.lineTo(x, y + h); octx.lineTo(x, y + h - L);
      octx.stroke();

      const ccx = x + w / 2;
      const ccy = y + h / 2;
      octx.strokeStyle = "rgba(255,178,102,0.7)";
      octx.lineWidth = 1;
      octx.beginPath();
      octx.moveTo(ccx - 9, ccy); octx.lineTo(ccx + 9, ccy);
      octx.moveTo(ccx, ccy - 9); octx.lineTo(ccx, ccy + 9);
      octx.stroke();

      const label = `HUMAN ${pad(t.id % 100)} · ${Math.round(t.conf * 100)}%`;
      const tw = octx.measureText(label).width;
      const ly = Math.max(y - fs * 1.7, 4);
      octx.fillStyle = "rgba(5,5,5,0.78)";
      octx.fillRect(x, ly, tw + fs, fs * 1.5);
      octx.fillStyle = "rgba(255,196,128,1)";
      octx.fillText(label, x + fs * 0.5, ly + fs * 0.78);
    }
  }

  function loop() {
    if (!running) return;
    raf = requestAnimationFrame(loop);
    frame++;
    if (!video.videoWidth) return;

    if (overlay.width !== video.videoWidth || overlay.height !== video.videoHeight) {
      overlay.width = video.videoWidth;
      overlay.height = video.videoHeight;
    }

    const now = performance.now();
    acc += now - lastT;
    lastT = now;
    cnt++;
    if (acc >= 500) {
      fps = Math.round(1000 / (acc / cnt));
      acc = 0;
      cnt = 0;
    }

    pctx.drawImage(video, 0, 0, GW, GH);
    const data = pctx.getImageData(0, 0, GW, GH).data;
    const lum = new Float32Array(GW * GH);
    for (let i = 0; i < GW * GH; i++) {
      const o = i * 4;
      lum[i] = data[o] * 0.299 + data[o + 1] * 0.587 + data[o + 2] * 0.114;
    }

    const hadPrev = !!prev;
    const active = new Uint8Array(GW * GH);
    let activeCount = 0;
    if (hadPrev) {
      const thr = 46 - getSensitivity() * 34;
      for (let i = 0; i < GW * GH; i++) {
        if (Math.abs(lum[i] - prev[i]) > thr) {
          active[i] = 1;
          activeCount++;
        }
      }
    }
    prev = lum;
    emaActivity += (activeCount / (GW * GH) - emaActivity) * 0.12;

    const boxes = hadPrev && activeCount > 0 ? cluster(active) : [];
    updateTracks(boxes);

    const visible = tracks
      .filter((t) => t.hits >= 4)
      .map((t) => ({ ...t, conf: Math.min(0.98, 0.52 + t.hits * 0.011 + t.density * 0.4) }));

    draw(visible);

    if (frame % 8 === 0 && onUpdate) {
      onUpdate({
        fps,
        activity: Math.min(1, emaActivity * 4),
        targets: visible.map((t) => ({
          id: t.id,
          conf: Math.round(t.conf * 100),
          x: Math.round((t.cx / GW) * 100),
          y: Math.round((t.cy / GH) * 100),
        })),
      });
    }
  }

  loop();

  return {
    stop() {
      running = false;
      cancelAnimationFrame(raf);
      octx.clearRect(0, 0, overlay.width, overlay.height);
    },
  };
}