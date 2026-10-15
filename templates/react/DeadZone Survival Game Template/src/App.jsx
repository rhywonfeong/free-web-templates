import { useEffect, useRef, useState, useCallback } from "react";

const W = 960;
const H = 600;
const PLAYER_SPEED = 225;
const BULLET_SPEED = 640;
const FIRE_COOLDOWN = 0.13;
const RELOAD_TIME = 1.1;
const MAG_SIZE = 30;

const TYPES = [
  { key: "walker", hp: 32, speed: 52, r: 14, dmg: 9, score: 10, color: "#4ade80", weight: (w) => 10 },
  { key: "runner", hp: 18, speed: 118, r: 11, dmg: 6, score: 15, color: "#a3e635", weight: (w) => (w >= 2 ? 4 + w : 0) },
  { key: "brute", hp: 100, speed: 36, r: 22, dmg: 20, score: 40, color: "#15803d", weight: (w) => (w >= 3 ? 1 + w * 0.6 : 0) },
];

const rand = (a, b) => a + Math.random() * (b - a);

function pickType(wave) {
  const weights = TYPES.map((t) => t.weight(wave));
  const total = weights.reduce((a, b) => a + b, 0);
  let roll = Math.random() * total;
  for (let i = 0; i < TYPES.length; i++) {
    roll -= weights[i];
    if (roll <= 0) return TYPES[i];
  }
  return TYPES[0];
}

function edgePos() {
  const side = Math.floor(Math.random() * 4);
  if (side === 0) return { x: rand(0, W), y: -36 };
  if (side === 1) return { x: rand(0, W), y: H + 36 };
  if (side === 2) return { x: -36, y: rand(0, H) };
  return { x: W + 36, y: rand(0, H) };
}

function makeGame() {
  return {
    player: { x: W / 2, y: H / 2, r: 13, hp: 100, maxHp: 100, ammo: MAG_SIZE, reloading: 0, fireCd: 0, angle: 0 },
    bullets: [],
    zombies: [],
    particles: [],
    pickups: [],
    wave: 0,
    toSpawn: 0,
    spawnCd: 0,
    intermission: 1.2,
    score: 0,
    kills: 0,
    shake: 0,
    banner: 0,
    bannerText: "",
    over: false,
    time: 0,
  };
}

function burst(s, x, y, color, n, speed = 160) {
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2;
    const v = rand(speed * 0.3, speed);
    s.particles.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: rand(0.25, 0.6), maxLife: 0.6, color, r: rand(1.5, 3.5) });
  }
}

export default function App() {
  const [screen, setScreen] = useState("menu"); // menu | playing | paused | gameover
  const [hud, setHud] = useState(null);
  const [finalStats, setFinalStats] = useState(null);
  const [highScore, setHighScore] = useState(() => Number(localStorage.getItem("zs-highscore") || 0));

  const canvasRef = useRef(null);
  const stateRef = useRef(makeGame());
  const keysRef = useRef(new Set());
  const mouseRef = useRef({ x: W / 2, y: H / 3, down: false });
  const screenRef = useRef(screen);
  screenRef.current = screen;

  const startGame = useCallback(() => {
    stateRef.current = makeGame();
    setHud(null);
    setScreen("playing");
  }, []);
  const startRef = useRef(startGame);
  startRef.current = startGame;

  // ---------- Input ----------
  useEffect(() => {
    const down = (e) => {
      const k = e.key.toLowerCase();
      if ([" ", "arrowup", "arrowdown", "arrowleft", "arrowright"].includes(k)) e.preventDefault();
      keysRef.current.add(k);
      if (k === "p" || k === "escape") {
        if (screenRef.current === "playing") setScreen("paused");
        else if (screenRef.current === "paused") setScreen("playing");
      }
      if (k === "enter" && (screenRef.current === "menu" || screenRef.current === "gameover")) startRef.current();
    };
    const up = (e) => keysRef.current.delete(e.key.toLowerCase());
    const blur = () => keysRef.current.clear();
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    window.addEventListener("blur", blur);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      window.removeEventListener("blur", blur);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const toLocal = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) * (W / rect.width);
      mouseRef.current.y = (e.clientY - rect.top) * (H / rect.height);
    };
    const move = (e) => toLocal(e);
    const mdown = (e) => { toLocal(e); mouseRef.current.down = true; };
    const mup = () => { mouseRef.current.down = false; };
    const ctx = (e) => e.preventDefault();
    canvas.addEventListener("mousemove", move);
    canvas.addEventListener("mousedown", mdown);
    window.addEventListener("mouseup", mup);
    canvas.addEventListener("contextmenu", ctx);
    return () => {
      canvas.removeEventListener("mousemove", move);
      canvas.removeEventListener("mousedown", mdown);
      window.removeEventListener("mouseup", mup);
      canvas.removeEventListener("contextmenu", ctx);
    };
  }, []);

  // ---------- Game loop ----------
  useEffect(() => {
    if (screen !== "playing") return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let last = performance.now();
    let hudLast = 0;

    const update = (dt) => {
      const s = stateRef.current;
      const p = s.player;
      const k = keysRef.current;
      const m = mouseRef.current;
      s.time += dt;
      s.banner = Math.max(0, s.banner - dt);
      s.shake = Math.max(0, s.shake - dt * 14);

      // movement
      let dx = 0, dy = 0;
      if (k.has("w") || k.has("arrowup")) dy -= 1;
      if (k.has("s") || k.has("arrowdown")) dy += 1;
      if (k.has("a") || k.has("arrowleft")) dx -= 1;
      if (k.has("d") || k.has("arrowright")) dx += 1;
      if (dx || dy) {
        const len = Math.hypot(dx, dy);
        p.x = Math.max(p.r, Math.min(W - p.r, p.x + (dx / len) * PLAYER_SPEED * dt));
        p.y = Math.max(p.r, Math.min(H - p.r, p.y + (dy / len) * PLAYER_SPEED * dt));
      }
      p.angle = Math.atan2(m.y - p.y, m.x - p.x);

      // reload
      if (p.reloading > 0) {
        p.reloading -= dt;
        if (p.reloading <= 0) { p.reloading = 0; p.ammo = MAG_SIZE; }
      } else if (k.has("r") && p.ammo < MAG_SIZE) {
        p.reloading = RELOAD_TIME;
      }

      // shooting
      p.fireCd -= dt;
      if ((m.down || k.has(" ")) && p.fireCd <= 0 && p.reloading <= 0) {
        if (p.ammo > 0) {
          p.ammo--;
          p.fireCd = FIRE_COOLDOWN;
          const a = p.angle + rand(-0.04, 0.04);
          s.bullets.push({ x: p.x + Math.cos(a) * 22, y: p.y + Math.sin(a) * 22, vx: Math.cos(a) * BULLET_SPEED, vy: Math.sin(a) * BULLET_SPEED, life: 1.4 });
          burst(s, p.x + Math.cos(a) * 24, p.y + Math.sin(a) * 24, "#fde047", 3, 90);
          s.shake = Math.min(s.shake + 1.4, 5);
        } else {
          p.reloading = RELOAD_TIME;
        }
      }

      // bullets
      s.bullets = s.bullets.filter((b) => {
        b.x += b.vx * dt; b.y += b.vy * dt; b.life -= dt;
        return b.life > 0 && b.x > -20 && b.x < W + 20 && b.y > -20 && b.y < H + 20;
      });

      // wave / spawning
      if (s.intermission > 0) {
        s.intermission -= dt;
        if (s.intermission <= 0) {
          s.wave++;
          s.toSpawn = 5 + s.wave * 3;
          s.banner = 2;
          s.bannerText = `WAVE ${s.wave}`;
        }
      } else if (s.toSpawn > 0) {
        s.spawnCd -= dt;
        if (s.spawnCd <= 0) {
          s.spawnCd = Math.max(0.22, 0.85 - s.wave * 0.05);
          s.toSpawn--;
          const t = pickType(s.wave);
          const pos = edgePos();
          s.zombies.push({ ...pos, type: t, hp: t.hp * (1 + s.wave * 0.06), maxHp: t.hp * (1 + s.wave * 0.06), hitCd: 0, wob: Math.random() * 10 });
        }
      } else if (s.zombies.length === 0) {
        s.score += s.wave * 25;
        s.intermission = 2.5;
        s.banner = 2;
        s.bannerText = "WAVE CLEARED  +" + s.wave * 25;
      }

      // zombies
      for (const z of s.zombies) {
        const ang = Math.atan2(p.y - z.y, p.x - z.x) + Math.sin(s.time * 3 + z.wob) * 0.25;
        z.x += Math.cos(ang) * z.type.speed * dt;
        z.y += Math.sin(ang) * z.type.speed * dt;
        z.hitCd = Math.max(0, z.hitCd - dt);

        if (Math.hypot(p.x - z.x, p.y - z.y) < p.r + z.type.r && z.hitCd <= 0) {
          z.hitCd = 0.8;
          p.hp -= z.type.dmg;
          s.shake = 8;
          burst(s, p.x, p.y, "#f87171", 10, 180);
          if (p.hp <= 0) { p.hp = 0; s.over = true; }
        }
      }

      // bullet hits
      for (const b of s.bullets) {
        for (const z of s.zombies) {
          if (b.life <= 0) break;
          if (Math.hypot(b.x - z.x, b.y - z.y) < z.type.r + 3) {
            b.life = 0;
            z.hp -= 13;
            z.x += (b.vx / BULLET_SPEED) * 5;
            z.y += (b.vy / BULLET_SPEED) * 5;
            burst(s, b.x, b.y, "#86efac", 5, 140);
            if (z.hp <= 0) {
              z.dead = true;
              s.kills++;
              s.score += z.type.score;
              burst(s, z.x, z.y, "#22c55e", 16, 220);
              burst(s, z.x, z.y, "#14532d", 8, 120);
              if (Math.random() < 0.08) s.pickups.push({ x: z.x, y: z.y, life: 10 });
            }
          }
        }
      }
      s.bullets = s.bullets.filter((b) => b.life > 0);
      s.zombies = s.zombies.filter((z) => !z.dead);

      // pickups
      s.pickups = s.pickups.filter((pk) => {
        pk.life -= dt;
        if (Math.hypot(p.x - pk.x, p.y - pk.y) < p.r + 14) {
          p.hp = Math.min(p.maxHp, p.hp + 25);
          burst(s, pk.x, pk.y, "#ffffff", 8, 120);
          return false;
        }
        return pk.life > 0;
      });

      // particles
      s.particles = s.particles.filter((pt) => {
        pt.x += pt.vx * dt; pt.y += pt.vy * dt;
        pt.vx *= 0.92; pt.vy *= 0.92;
        pt.life -= dt;
        return pt.life > 0;
      });
    };

    const draw = () => {
      const s = stateRef.current;
      const p = s.player;
      ctx.save();
      ctx.clearRect(0, 0, W, H);
      if (s.shake > 0) ctx.translate(rand(-s.shake, s.shake), rand(-s.shake, s.shake));

      // ground
      ctx.fillStyle = "#0a0f0b";
      ctx.fillRect(-10, -10, W + 20, H + 20);
      ctx.strokeStyle = "rgba(74,222,128,0.05)";
      ctx.lineWidth = 1;
      for (let x = 0; x <= W; x += 48) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
      for (let y = 0; y <= H; y += 48) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

      // pickups
      for (const pk of s.pickups) {
        const pulse = 1 + Math.sin(s.time * 6) * 0.1;
        ctx.save();
        ctx.translate(pk.x, pk.y);
        ctx.scale(pulse, pulse);
        ctx.fillStyle = "#f8fafc";
        ctx.fillRect(-9, -9, 18, 18);
        ctx.fillStyle = "#ef4444";
        ctx.fillRect(-2.5, -6, 5, 12);
        ctx.fillRect(-6, -2.5, 12, 5);
        ctx.restore();
      }

      // bullets
      ctx.strokeStyle = "#fde047";
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      for (const b of s.bullets) {
        ctx.beginPath();
        ctx.moveTo(b.x, b.y);
        ctx.lineTo(b.x - b.vx * 0.018, b.y - b.vy * 0.018);
        ctx.stroke();
      }

      // zombies
      for (const z of s.zombies) {
        const r = z.type.r;
        ctx.beginPath();
        ctx.arc(z.x, z.y, r, 0, Math.PI * 2);
        ctx.fillStyle = z.type.color;
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "rgba(0,0,0,0.45)";
        ctx.stroke();
        // eyes facing player
        const a = Math.atan2(p.y - z.y, p.x - z.x);
        for (const off of [-0.45, 0.45]) {
          ctx.beginPath();
          ctx.arc(z.x + Math.cos(a + off) * r * 0.55, z.y + Math.sin(a + off) * r * 0.55, r * 0.16, 0, Math.PI * 2);
          ctx.fillStyle = "#ef4444";
          ctx.fill();
        }
        if (z.hp < z.maxHp) {
          const w2 = r * 2;
          ctx.fillStyle = "rgba(0,0,0,0.5)";
          ctx.fillRect(z.x - r, z.y - r - 9, w2, 4);
          ctx.fillStyle = "#4ade80";
          ctx.fillRect(z.x - r, z.y - r - 9, w2 * Math.max(0, z.hp / z.maxHp), 4);
        }
      }

      // player
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.strokeStyle = "#cbd5e1";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(6, 0);
      ctx.lineTo(24, 0);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "#34d399";
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#064e3b";
      ctx.stroke();
      ctx.restore();

      // reload ring
      if (p.reloading > 0) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + 9, -Math.PI / 2, -Math.PI / 2 + (1 - p.reloading / RELOAD_TIME) * Math.PI * 2);
        ctx.strokeStyle = "#fbbf24";
        ctx.lineWidth = 3;
        ctx.stroke();
      }

      // particles
      for (const pt of s.particles) {
        ctx.globalAlpha = Math.max(0, pt.life / pt.maxLife);
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
        ctx.fillStyle = pt.color;
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // crosshair
      const m = mouseRef.current;
      ctx.strokeStyle = "rgba(74,222,128,0.9)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(m.x, m.y, 9, 0, Math.PI * 2);
      ctx.stroke();
      for (const [ax, ay] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        ctx.beginPath();
        ctx.moveTo(m.x + ax * 5, m.y + ay * 5);
        ctx.lineTo(m.x + ax * 13, m.y + ay * 13);
        ctx.stroke();
      }
      ctx.restore();
    };

    const frame = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const s = stateRef.current;
      update(dt);
      draw();

      if (now - hudLast > 90) {
        hudLast = now;
        const p = s.player;
        setHud({
          hp: Math.round(p.hp), maxHp: p.maxHp, ammo: p.ammo, reloading: p.reloading > 0,
          score: s.score, wave: s.wave, kills: s.kills,
          left: s.toSpawn + s.zombies.length,
          banner: s.banner > 0 ? s.bannerText : null,
        });
      }

      if (s.over) {
        const stats = { score: s.score, kills: s.kills, wave: s.wave };
        setFinalStats(stats);
        setHighScore((prev) => {
          const next = Math.max(prev, stats.score);
          localStorage.setItem("zs-highscore", String(next));
          return next;
        });
        setScreen("gameover");
        return;
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [screen]);

  const isNewHigh = finalStats && finalStats.score >= highScore && finalStats.score > 0;

  return (
    <div className="min-h-screen bg-[#060807] text-zinc-100 flex flex-col items-center justify-center px-4 py-8 font-mono selection:bg-emerald-500/30">
      {/* Header */}
      <header className="w-full max-w-[960px] flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
            <iconify-icon icon="solar:skull-linear" class="text-emerald-400 text-xl" aria-hidden="true"></iconify-icon>
          </span>
          <div>
            <h1 className="text-lg font-semibold tracking-tight leading-none">DEAD<span className="text-emerald-400">ZONE</span></h1>
            <p className="text-xs text-zinc-500 mt-0.5">tactical undead survival</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <iconify-icon icon="solar:cup-star-linear" class="text-emerald-400" aria-hidden="true"></iconify-icon>
          <span>BEST <span className="text-zinc-200 font-medium">{highScore.toLocaleString()}</span></span>
        </div>
      </header>

      {/* Game viewport */}
      <div className="relative w-full max-w-[960px] aspect-[8/5] rounded-xl overflow-hidden border border-emerald-900/60 shadow-[0_0_60px_-15px_rgba(16,185,129,0.25)] bg-black">
        <canvas ref={canvasRef} width={W} height={H} className="w-full h-full block cursor-none" aria-label="Zombie shooter game canvas" role="img" />

        {/* HUD */}
        {(screen === "playing" || screen === "paused") && hud && (
          <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <iconify-icon icon="solar:heart-pulse-linear" class="text-red-400" aria-hidden="true"></iconify-icon>
                  <div className="w-44 h-3 rounded-full bg-black/60 border border-white/10 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-200 ${hud.hp > 50 ? "bg-emerald-400" : hud.hp > 25 ? "bg-amber-400" : "bg-red-500"}`}
                      style={{ width: `${(hud.hp / hud.maxHp) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-zinc-300 w-8">{hud.hp}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <iconify-icon icon="solar:crosshair-linear" class="text-amber-300" aria-hidden="true"></iconify-icon>
                  {hud.reloading ? (
                    <span className="text-amber-300 text-xs animate-pulse">RELOADING…</span>
                  ) : (
                    <span className={hud.ammo <= 6 ? "text-red-400" : "text-zinc-200"}>
                      {hud.ammo}<span className="text-zinc-500 text-xs"> / {MAG_SIZE}</span>
                    </span>
                  )}
                </div>
              </div>
              <div className="text-right space-y-1">
                <p className="text-xs text-emerald-400/80 tracking-widest">WAVE {hud.wave}</p>
                <p className="text-xl font-semibold tracking-tight tabular-nums">{hud.score.toLocaleString()}</p>
                <p className="text-xs text-zinc-500">{hud.kills} kills · {hud.left} hostiles</p>
              </div>
            </div>
            {hud.banner && (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-300/90 drop-shadow-[0_0_25px_rgba(16,185,129,0.6)]">
                  {hud.banner}
                </p>
              </div>
            )}
            <p className="text-xs text-zinc-600 text-center">WASD move · Mouse aim · Click shoot · R reload · P pause</p>
          </div>
        )}

        {/* Menu */}
        {screen === "menu" && (
          <Overlay>
            <iconify-icon icon="solar:skull-linear" class="text-emerald-400 text-5xl" aria-hidden="true"></iconify-icon>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4">DEAD<span className="text-emerald-400">ZONE</span></h2>
            <p className="text-sm text-zinc-400 mt-2 max-w-sm">The outbreak has begun. Hold your ground against endless waves of the undead.</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-6 text-xs text-zinc-400">
              <Control icon="solar:keyboard-linear" label="WASD — move" />
              <Control icon="solar:cursor-linear" label="Mouse — aim & shoot" />
              <Control icon="solar:refresh-linear" label="R — reload" />
              <Control icon="solar:pause-circle-linear" label="P / Esc — pause" />
            </div>
            <ActionButton onClick={startGame} icon="solar:play-linear">START MISSION</ActionButton>
            <p className="text-xs text-zinc-600 mt-3">or press Enter</p>
          </Overlay>
        )}

        {/* Paused */}
        {screen === "paused" && (
          <Overlay>
            <iconify-icon icon="solar:pause-circle-linear" class="text-emerald-400 text-4xl" aria-hidden="true"></iconify-icon>
            <h2 className="text-3xl font-semibold tracking-tight mt-3">PAUSED</h2>
            <div className="flex gap-3 mt-6">
              <ActionButton onClick={() => setScreen("playing")} icon="solar:play-linear">RESUME</ActionButton>
              <button
                onClick={() => setScreen("menu")}
                className="px-5 py-2.5 rounded-lg border border-zinc-700 text-zinc-300 text-sm hover:bg-zinc-800 transition-colors"
              >
                Abandon run
              </button>
            </div>
          </Overlay>
        )}

        {/* Game over */}
        {screen === "gameover" && finalStats && (
          <Overlay>
            <iconify-icon icon="solar:confounded-square-linear" class="text-red-400 text-5xl" aria-hidden="true"></iconify-icon>
            <h2 className="text-4xl font-semibold tracking-tight mt-3 text-red-400">YOU DIED</h2>
            {isNewHigh && (
              <p className="mt-2 text-xs px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 tracking-widest">
                ★ NEW HIGH SCORE
              </p>
            )}
            <div className="flex gap-8 mt-6">
              <Stat label="SCORE" value={finalStats.score.toLocaleString()} />
              <Stat label="KILLS" value={finalStats.kills} />
              <Stat label="WAVE" value={finalStats.wave} />
            </div>
            <ActionButton onClick={startGame} icon="solar:restart-linear">TRY AGAIN</ActionButton>
            <p className="text-xs text-zinc-600 mt-3">or press Enter</p>
          </Overlay>
        )}
      </div>

      <footer className="w-full max-w-[960px] mt-4 flex items-center justify-between text-xs text-zinc-600">
        <span>v1.0 · canvas engine · 60fps</span>
        <span className="flex items-center gap-1.5">
          <iconify-icon icon="solar:shield-warning-linear" aria-hidden="true"></iconify-icon>
          survival rate: 0%
        </span>
      </footer>
    </div>
  );
}

/* ---------- Small UI pieces ---------- */

function Overlay({ children }) {
  return (
    <div className="absolute inset-0 bg-black/75 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6">
      {children}
    </div>
  );
}

function Control({ icon, label }) {
  return (
    <span className="flex items-center gap-2">
      <iconify-icon icon={icon} class="text-emerald-400" aria-hidden="true"></iconify-icon>
      {label}
    </span>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <p className="text-xs text-zinc-500 tracking-widest">{label}</p>
      <p className="text-2xl font-semibold tracking-tight tabular-nums mt-1">{value}</p>
    </div>
  );
}

function ActionButton({ onClick, icon, children }) {
  return (
    <button
      onClick={onClick}
      className="mt-7 inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-emerald-500 text-emerald-950 text-sm font-semibold tracking-widest hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_-5px_rgba(16,185,129,0.6)]"
    >
      <iconify-icon icon={icon} class="text-lg" aria-hidden="true"></iconify-icon>
      {children}
    </button>
  );
}