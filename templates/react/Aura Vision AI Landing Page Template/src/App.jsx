import React, { useCallback, useEffect, useRef, useState } from "react";
import { Area, AreaChart, ResponsiveContainer, YAxis } from "recharts";
import { createDetector } from "./lib/detector";

/* ---------------- Ambient Background (Aura frame environment) ---------------- */
function AuraBackground() {
  const glowRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 140;
      const y = (e.clientY / window.innerHeight - 0.5) * 100;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Atmospheric ember glow (rebuilt from source WebGL as supporting layer) */}
      <div
        ref={glowRef}
        className="absolute inset-0 transition-transform duration-[1500ms] ease-out will-change-transform"
      >
        <div
          className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/3 w-[150vmax] h-[95vmax] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(204,128,51,0.45) 0%, rgba(153,38,0,0.32) 26%, rgba(38,5,0,0.55) 54%, transparent 74%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Subtle diagonal texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 24px)",
        }}
      />

      {/* Precision grid */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-full max-w-7xl h-full relative">
          <div className="absolute top-0 bottom-0 left-0 w-px bg-white/10" />
          <div className="absolute top-0 bottom-0 left-1/4 w-px bg-white/[0.04] hidden sm:block" />
          <div className="absolute top-0 bottom-0 left-2/4 w-px bg-white/[0.04] hidden sm:block" />
          <div className="absolute top-0 bottom-0 left-3/4 w-px bg-white/[0.04] hidden sm:block" />
          <div className="absolute top-0 bottom-0 right-0 w-px bg-white/10" />

          <div className="absolute top-32 left-1/4 ml-4 text-xs text-white/30 tracking-widest hidden sm:block font-jet">X-01</div>
          <div className="absolute top-32 left-2/4 ml-4 text-xs text-white/30 tracking-widest hidden sm:block font-jet">X-02</div>
          <div className="absolute top-32 left-3/4 ml-4 text-xs text-white/30 tracking-widest hidden sm:block font-jet">X-03</div>

          <div className="absolute top-0 bottom-0 left-1/4 w-px overflow-hidden hidden sm:block">
            <div className="w-full beam beam-1" />
          </div>
          <div className="absolute top-0 bottom-0 right-1/4 w-px overflow-hidden hidden sm:block">
            <div className="w-full beam beam-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Frame corner accents ---------------- */
function Corners({ top = true, bottom = true }) {
  return (
    <>
      {top && (
        <>
          <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-white/40 -translate-x-px -translate-y-px" />
          <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-white/40 translate-x-px -translate-y-px" />
        </>
      )}
      {bottom && (
        <>
          <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-white/40 -translate-x-px translate-y-px" />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-white/40 translate-x-px translate-y-px" />
        </>
      )}
    </>
  );
}

/* ---------------- Header ---------------- */
function Header({ onAccess }) {
  const [open, setOpen] = useState(false);
  const links = ["Engine", "Scenarios", "Privacy", "Docs", "Support"];

  return (
    <header className="relative w-full px-6 py-6 flex items-center justify-between border-b border-white/10 bg-black/20 backdrop-blur-sm">
      <Corners />
      <a href="#top" className="flex items-center gap-3 group">
        <div className="w-5 h-5 bg-white rounded-sm rotate-45 flex items-center justify-center transition-transform duration-700 group-hover:rotate-[225deg]">
          <div className="w-2 h-2 bg-black rounded-sm" />
        </div>
        <span className="text-sm font-normal tracking-tight">Aura Vision</span>
      </a>

      <nav className="hidden md:flex items-center gap-10 text-xs font-extralight text-white/70">
        {links.map((l, i) => (
          <a key={l} href="#scanner" className="hover:text-white transition-colors flex items-center gap-1.5 group">
            {l}
            {i < 2 && (
              <iconify-icon
                icon="solar:alt-arrow-down-linear"
                class="text-xs opacity-50 group-hover:opacity-100 transition-opacity"
              ></iconify-icon>
            )}
          </a>
        ))}
      </nav>

      <div
        className="hidden md:inline-flex relative group rounded-full"
        style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.02))", padding: "1px" }}
      >
        <button
          onClick={onAccess}
          className="px-6 py-2 text-xs font-extralight bg-black/60 backdrop-blur-sm rounded-full hover:bg-white/5 transition-all duration-300"
        >
          Enable Camera
        </button>
      </div>

      <button
        className="md:hidden text-white/70 hover:text-white"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <iconify-icon icon={open ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} class="text-xl"></iconify-icon>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 z-30 md:hidden bg-black/90 backdrop-blur-md border-b border-white/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a key={l} href="#scanner" onClick={() => setOpen(false)} className="text-sm font-extralight text-white/70 hover:text-white transition-colors">
              {l}
            </a>
          ))}
          <button
            onClick={() => { setOpen(false); onAccess(); }}
            className="mt-2 px-6 py-3 text-xs bg-white text-black rounded-full font-normal"
          >
            Enable Camera
          </button>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero({ onEnable }) {
  const line1 = ["Locating", "Humans"];
  const line2 = ["in", "Real", "Time"];
  const sub = "Point your camera at the world. Aura Vision tracks people through precision-crafted motion intelligence — fully on-device, zero uploads, no servers.".split(" ");

  const Word = ({ w, d, dim }) => (
    <span className="word-mask">
      <span className={`word-inner ${dim ? "text-white/90" : ""}`} style={{ animationDelay: `${d}s` }}>{w}</span>
    </span>
  );

  return (
    <main id="top" className="relative flex flex-col items-center justify-center px-4 pt-24 pb-28 text-center border-b border-white/10">
      <Corners top={false} />

      <div className="mb-8 z-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-black/30 backdrop-blur-sm text-xs font-jet font-semibold tracking-widest text-white/50">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 pulse-dot" />
          ON-DEVICE VISION · v2.1
        </span>
      </div>

      <div className="max-w-4xl mx-auto mb-8 w-full z-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight font-dm font-extralight flex flex-wrap justify-center gap-x-4 gap-y-2">
          {line1.map((w, i) => <Word key={w} w={w} d={0.1 + i * 0.07} />)}
          <span className="w-full basis-full h-0" />
          {line2.map((w, i) => <Word key={w} w={w} d={0.24 + i * 0.07} dim />)}
        </h1>
      </div>

      <p className="max-w-lg mx-auto text-sm sm:text-base text-white/60 font-extralight leading-relaxed mb-12 z-10 flex flex-wrap justify-center">
        {sub.map((w, i) => (
          <span key={i} className="word-mask mr-1.5 align-top">
            <span className="word-inner" style={{ animationDelay: `${0.45 + i * 0.025}s` }}>{w}</span>
          </span>
        ))}
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-5 z-10">
        <button
          onClick={onEnable}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-normal bg-[#F5F5F5] text-black rounded-full hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] tracking-wide"
        >
          <iconify-icon icon="solar:camera-linear" class="text-sm"></iconify-icon>
          Enable Camera
        </button>

        <div
          className="w-full sm:w-auto relative group rounded-full"
          style={{ background: "linear-gradient(to bottom right, rgba(255,255,255,0.3), rgba(255,255,255,0.05))", padding: "1px" }}
        >
          <a
            href="#scanner"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-extralight bg-[#050505] text-white rounded-full transition-all duration-300 group-hover:bg-[#111] tracking-wide"
          >
            View Console
            <iconify-icon icon="solar:arrow-right-linear" class="text-sm group-hover:translate-x-1 transition-transform duration-300"></iconify-icon>
          </a>
        </div>
      </div>
    </main>
  );
}

/* ---------------- Scanner / Vision Console ---------------- */
function StatCell({ label, value, accent }) {
  return (
    <div className="relative border border-white/10 bg-black/30 backdrop-blur-sm rounded-lg p-4">
      <div className="text-xs font-jet font-semibold tracking-widest text-white/40 mb-1.5">{label}</div>
      <div className={`text-xl font-dm font-light tracking-tight ${accent ? "text-orange-300" : "text-white"}`}>{value}</div>
    </div>
  );
}

function Scanner({ startSignal }) {
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const streamRef = useRef(null);
  const detRef = useRef(null);

  const [status, setStatus] = useState("idle"); // idle | requesting | live | error
  const [error, setError] = useState("");
  const [facing, setFacing] = useState("environment");
  const [sensitivity, setSensitivity] = useState(0.6);
  const sensRef = useRef(sensitivity);
  sensRef.current = sensitivity;

  const [stats, setStats] = useState({ fps: 0, activity: 0, targets: [] });
  const [log, setLog] = useState([]);
  const [elapsed, setElapsed] = useState(0);
  const startedRef = useRef(0);

  const teardown = useCallback(() => {
    if (detRef.current) { detRef.current.stop(); detRef.current = null; }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
  }, []);

  const start = useCallback(async (face) => {
    teardown();
    setStatus("requesting");
    setError("");
    setStats({ fps: 0, activity: 0, targets: [] });
    setLog([]);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: { facingMode: { ideal: face }, width: { ideal: 1280 }, height: { ideal: 720 } },
      });
      streamRef.current = stream;
      const v = videoRef.current;
      v.srcObject = stream;
      await v.play();
      startedRef.current = Date.now();
      setElapsed(0);
      setStatus("live");
      detRef.current = createDetector({
        video: v,
        overlay: overlayRef.current,
        getSensitivity: () => sensRef.current,
        onUpdate: (s) => {
          setStats(s);
          setLog((l) => [...l.slice(-39), { a: Math.round(s.activity * 100) }]);
        },
      });
    } catch (err) {
      setStatus("error");
      setError(
        err && err.name === "NotAllowedError"
          ? "Camera permission denied. Allow camera access in your browser settings, then retry."
          : "No camera available or it is in use by another application."
      );
    }
  }, [teardown]);

  const stop = useCallback(() => {
    teardown();
    setStatus("idle");
    setStats({ fps: 0, activity: 0, targets: [] });
  }, [teardown]);

  const flip = () => {
    const next = facing === "environment" ? "user" : "environment";
    setFacing(next);
    start(next);
  };

  useEffect(() => {
    if (startSignal > 0) start(facing);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startSignal]);

  useEffect(() => () => teardown(), [teardown]);

  useEffect(() => {
    if (status !== "live") return;
    const t = setInterval(() => setElapsed(Math.floor((Date.now() - startedRef.current) / 1000)), 1000);
    return () => clearInterval(t);
  }, [status]);

  const pad = (n) => String(n).padStart(2, "0");
  const uptime = `${pad(Math.floor(elapsed / 60))}:${pad(elapsed % 60)}`;
  const mirrored = facing === "user";
  const lockText =
    stats.targets.length > 0
      ? `${stats.targets.length} TARGET${stats.targets.length > 1 ? "S" : ""} LOCKED`
      : "SCANNING — NO TARGETS";

  return (
    <section id="scanner" className="relative px-4 sm:px-6 py-20 border-b border-white/10">
      <Corners top={false} />

      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <div className="text-xs font-jet font-semibold tracking-widest text-white/40 mb-3">FRAME 02 — LIVE PERCEPTION</div>
          <h2 className="text-3xl sm:text-4xl font-dm font-extralight tracking-tight">Vision Console</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* ---- Viewport ---- */}
          <div className="relative rounded-lg border border-white/10 bg-black overflow-hidden aspect-[4/3] sm:aspect-video">
            <video
              ref={videoRef}
              playsInline
              muted
              autoPlay
              className="absolute inset-0 w-full h-full object-cover"
              style={{ transform: mirrored ? "scaleX(-1)" : "none" }}
            />
            <canvas
              ref={overlayRef}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              style={{ transform: mirrored ? "scaleX(-1)" : "none" }}
            />

            {/* HUD chrome */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-orange-300/60 pointer-events-none" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-orange-300/60 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-orange-300/60 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-orange-300/60 pointer-events-none" />

            {status === "live" && (
              <>
                <div className="absolute top-5 left-6 flex items-center gap-2 text-xs font-jet font-semibold tracking-widest text-orange-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 pulse-dot" /> LIVE FEED
                </div>
                <div className="absolute top-5 right-6 text-xs font-jet font-semibold tracking-widest text-white/60">
                  {stats.fps} FPS
                </div>
                <div className="absolute bottom-5 left-6 text-xs font-jet font-semibold tracking-widest text-white/60">
                  {lockText}
                </div>
                <div className="absolute bottom-5 right-6 text-xs font-jet font-semibold tracking-widest text-white/40 uppercase">
                  {facing === "user" ? "FRONT CAM" : "REAR CAM"}
                </div>
              </>
            )}

            {status !== "live" && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-black/60 backdrop-blur-sm px-6 text-center">
                {status === "requesting" ? (
                  <>
                    <div className="w-10 h-10 rounded-full border-2 border-white/15 border-t-orange-300 animate-spin" />
                    <p className="text-xs font-jet font-semibold tracking-widest text-white/50">REQUESTING CAMERA ACCESS…</p>
                  </>
                ) : status === "error" ? (
                  <>
                    <iconify-icon icon="solar:shield-warning-linear" class="text-4xl text-orange-300/80"></iconify-icon>
                    <p className="text-sm font-extralight text-white/60 max-w-sm leading-relaxed">{error}</p>
                    <button
                      onClick={() => start(facing)}
                      className="px-7 py-3 text-xs bg-[#F5F5F5] text-black rounded-full hover:bg-white transition-colors tracking-wide"
                    >
                      Retry Access
                    </button>
                  </>
                ) : (
                  <>
                    <iconify-icon icon="solar:camera-minimalistic-linear" class="text-4xl text-white/40"></iconify-icon>
                    <p className="text-sm font-extralight text-white/50 max-w-xs leading-relaxed">
                      Sensor offline. Enable your camera to begin locating humans in the frame.
                    </p>
                    <button
                      onClick={() => start(facing)}
                      className="inline-flex items-center gap-2 px-7 py-3 text-xs bg-[#F5F5F5] text-black rounded-full hover:bg-white transition-colors tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    >
                      <iconify-icon icon="solar:camera-linear" class="text-sm"></iconify-icon>
                      Initialize Sensor
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          {/* ---- Telemetry ---- */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              <StatCell label="FPS" value={status === "live" ? stats.fps : "—"} />
              <StatCell label="TARGETS" value={status === "live" ? stats.targets.length : "—"} accent={stats.targets.length > 0} />
              <StatCell label="ACTIVITY" value={status === "live" ? `${Math.round(stats.activity * 100)}%` : "—"} />
              <StatCell label="UPTIME" value={status === "live" ? uptime : "—"} />
            </div>

            {/* Sensitivity */}
            <div className="border border-white/10 bg-black/30 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-jet font-semibold tracking-widest text-white/40">SENSITIVITY</span>
                <span className="text-xs font-jet font-semibold text-orange-300">{Math.round(sensitivity * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={Math.round(sensitivity * 100)}
                onChange={(e) => setSensitivity(Number(e.target.value) / 100)}
                className="aura-slider"
                aria-label="Detection sensitivity"
              />
            </div>

            {/* Activity chart */}
            <div className="border border-white/10 bg-black/30 backdrop-blur-sm rounded-lg p-4">
              <div className="text-xs font-jet font-semibold tracking-widest text-white/40 mb-2">MOTION SIGNAL</div>
              <div className="h-20">
                {log.length > 1 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={log} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
                      <defs>
                        <linearGradient id="actGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#FFB266" stopOpacity={0.45} />
                          <stop offset="100%" stopColor="#FFB266" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <YAxis hide domain={[0, 100]} />
                      <Area type="monotone" dataKey="a" stroke="#FFB266" strokeWidth={1.5} fill="url(#actGrad)" isAnimationActive={false} />
                    </AreaChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-full flex items-center justify-center text-xs font-extralight text-white/30">
                    Awaiting signal…
                  </div>
                )}
              </div>
            </div>

            {/* Targets */}
            <div className="border border-white/10 bg-black/30 backdrop-blur-sm rounded-lg p-4 flex-grow">
              <div className="text-xs font-jet font-semibold tracking-widest text-white/40 mb-3">TRACKED TARGETS</div>
              {stats.targets.length === 0 ? (
                <p className="text-xs font-extralight text-white/30 leading-relaxed">
                  No humans located. Move within the frame to acquire a lock.
                </p>
              ) : (
                <ul className="flex flex-col gap-2">
                  {stats.targets.map((t) => (
                    <li key={t.id} className="flex items-center justify-between text-xs font-jet font-semibold">
                      <span className="text-orange-300">HUMAN {pad(t.id % 100)}</span>
                      <span className="text-white/40">POS {t.x},{t.y}</span>
                      <span className="text-white/70">{t.conf}%</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Controls */}
            <div className="flex gap-3">
              <button
                onClick={flip}
                disabled={status !== "live"}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-extralight border border-white/15 rounded-full hover:bg-white/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <iconify-icon icon="solar:refresh-linear" class="text-sm"></iconify-icon>
                Flip Camera
              </button>
              <button
                onClick={status === "live" ? stop : () => start(facing)}
                className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs rounded-full transition-colors tracking-wide ${
                  status === "live"
                    ? "border border-orange-400/40 text-orange-300 hover:bg-orange-500/10 font-extralight"
                    : "bg-[#F5F5F5] text-black hover:bg-white font-normal"
                }`}
              >
                <iconify-icon icon={status === "live" ? "solar:stop-circle-linear" : "solar:play-circle-linear"} class="text-sm"></iconify-icon>
                {status === "live" ? "Terminate" : "Start Feed"}
              </button>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs font-jet font-semibold tracking-widest text-white/30">
          100% ON-DEVICE PROCESSING — NO FRAMES EVER LEAVE YOUR BROWSER
        </p>
      </div>
    </section>
  );
}

/* ---------------- Logos footer ---------------- */
function LogosFooter() {
  const brands = [
    { icon: "solar:box-linear", name: "Pulse" },
    { icon: "solar:leaf-linear", name: "Vertex" },
    { icon: "solar:layers-linear", name: "Strata" },
    { icon: "solar:infinity-linear", name: "Nexis" },
  ];
  return (
    <footer className="relative w-full py-16 flex flex-col items-center justify-center bg-black/10 backdrop-blur-sm">
      <Corners top={false} />
      <p className="text-xs font-extralight text-white/40 mb-8 tracking-widest uppercase">Empowering Visionary Brands</p>
      <div className="flex items-center justify-center gap-10 md:gap-20 flex-wrap opacity-50 grayscale hover:grayscale-0 transition-all duration-700 px-6">
        {brands.map((b) => (
          <div key={b.name} className="flex items-center gap-2">
            <iconify-icon icon={b.icon} class="text-xl"></iconify-icon>
            <span className="text-lg font-normal tracking-tight">{b.name}</span>
          </div>
        ))}
      </div>
    </footer>
  );
}

/* ---------------- App ---------------- */
export default function App() {
  const [startSignal, setStartSignal] = useState(0);

  const handleEnable = () => {
    const el = document.getElementById("scanner");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setStartSignal((s) => s + 1);
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen relative overflow-x-hidden">
      <AuraBackground />
      <div className="relative z-10 flex flex-col min-h-screen max-w-7xl mx-auto w-full">
        <Header onAccess={handleEnable} />
        <Hero onEnable={handleEnable} />
        <Scanner startSignal={startSignal} />
        <LogosFooter />
      </div>
    </div>
  );
}