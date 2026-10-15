import React, { useEffect, useRef, useState } from "react";

/* ---------- Sidebar ---------- */
function Sidebar() {
  const navItems = [
    { icon: "solar:home-smile-linear", active: false },
    { icon: "solar:nodes-linear", active: true },
    { icon: "solar:box-linear", active: false },
    { icon: "solar:settings-linear", active: false },
  ];

  return (
    <aside className="w-[68px] shrink-0 border-r border-white/[0.04] bg-[#0c0d0f] flex flex-col items-center py-6 justify-between z-30 shadow-[4px_0_24px_rgba(0,0,0,0.5)] relative">
      <div className="flex flex-col gap-6 items-center w-full">
        <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-2 shadow-lg cursor-pointer transition-colors hover:bg-white/[0.08]">
          <iconify-icon icon="solar:infinity-bold" class="text-white text-xl" />
        </div>

        <nav className="flex flex-col gap-3 w-full px-3">
          {navItems.map((item, i) => (
            <button
              key={i}
              className={
                item.active
                  ? "w-full aspect-square rounded-xl flex items-center justify-center bg-[#00e559] text-black shadow-[0_0_15px_rgba(0,229,89,0.4)] transition-all hover:scale-105"
                  : "w-full aspect-square rounded-xl flex items-center justify-center text-gray-500 transition-colors hover:text-gray-200 hover:bg-white/[0.04]"
              }
            >
              <iconify-icon icon={item.icon} class="text-[22px]" />
            </button>
          ))}
        </nav>
      </div>

      <button className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-500 transition-colors hover:text-gray-200 hover:bg-white/[0.04]">
        <iconify-icon icon="solar:logout-2-linear" class="text-[22px]" />
      </button>
    </aside>
  );
}

/* ---------- Topbar ---------- */
function Topbar() {
  const avatars = [
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_1600w.jpg",
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_1600w.jpg",
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_1600w.jpg",
  ];

  return (
    <header className="h-[72px] flex items-center justify-between px-8 border-b border-white/[0.02] z-30 relative">
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-medium text-gray-100 tracking-tight">
          Visual Mood Experiment
        </h1>
        <iconify-icon icon="solar:cloud-check-linear" class="text-[#00e559] text-xl" />
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 mr-4">
          <button className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.04] transition-colors">
            <iconify-icon icon="solar:moon-linear" class="text-lg" />
          </button>
          <button className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.04] transition-colors">
            <iconify-icon icon="solar:export-linear" class="text-lg" />
          </button>
        </div>

        <div className="flex items-center -space-x-3">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              className="w-8 h-8 rounded-full border-2 border-[#09090b] object-cover"
              alt="Collaborator"
            />
          ))}
          <div className="w-8 h-8 rounded-full border-2 border-[#09090b] bg-[#1a1b1e] flex items-center justify-center text-[10px] font-medium text-white z-10">
            +2
          </div>
        </div>

        <div className="w-[1px] h-4 bg-white/10 mx-2" />

        <button className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors">
          <iconify-icon icon="solar:soundwave-linear" class="text-[#00e559]" />
        </button>
      </div>
    </header>
  );
}

/* ---------- Connection point ---------- */
function ConnectionPoint({ className, small }) {
  const size = small ? "w-1.5 h-1.5" : "w-2.5 h-2.5";
  return (
    <div
      className={`absolute ${size} bg-[#00e559] rounded-sm rotate-45 ${className}`}
      style={{ animation: "cpPulse 1.5s ease-in-out infinite" }}
    />
  );
}

/* ---------- Engine Setup Node ---------- */
function EngineSetupNode() {
  return (
    <div
      className="gsap-node absolute w-[280px] bg-[#121316]/90 backdrop-blur-xl border border-white/[0.08] rounded-[20px] p-5 shadow-2xl z-10"
      style={{ left: 0, top: "50%", "--base-transform": "translateY(-50%)" }}
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-200 tracking-tight">
          <iconify-icon icon="solar:cpu-linear" class="text-gray-400" />
          Engine Setup
        </div>
        <div className="w-2 h-2 rounded-full bg-[#00e559] shadow-[0_0_8px_#00e559]" />
      </div>

      <div className="space-y-4">
        {[
          { label: "Core Engine", value: "Neural-X" },
          { label: "Mode", value: "Precision Render" },
        ].map((f) => (
          <div key={f.label}>
            <label className="text-[11px] text-gray-500 mb-1.5 block uppercase tracking-wider font-medium">
              {f.label}
            </label>
            <div className="bg-[#1a1b1e] border border-white/5 rounded-xl px-3 py-2.5 flex items-center justify-between cursor-pointer hover:border-white/10 transition-colors">
              <span className="text-xs text-gray-200">{f.value}</span>
              <iconify-icon icon="solar:alt-arrow-down-linear" class="text-gray-500" />
            </div>
          </div>
        ))}
      </div>

      <ConnectionPoint className="top-1/2 -right-[5px] -translate-y-1/2 shadow-[0_0_10px_#00e559]" />
    </div>
  );
}

/* ---------- Instruction Core Node ---------- */
function InstructionCoreNode() {
  const text =
    "Generate a surreal visual composition blending organic textures, cinematic lighting, and abstract depth.";
  const words = text.split(" ");
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="gsap-node absolute w-[340px] bg-[#121316]/90 backdrop-blur-xl border border-white/[0.08] rounded-[20px] p-5 shadow-2xl z-10"
      style={{ left: "35%", top: "40px", "--base-transform": "none" }}
    >
      <ConnectionPoint className="top-1/2 -left-[5px] -translate-y-1/2 shadow-[0_0_10px_#00e559]" />
      <ConnectionPoint className="-bottom-[5px] left-1/2 -translate-x-1/2 shadow-[0_0_10px_#00e559]" />

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-200 tracking-tight">
          <iconify-icon icon="solar:magic-stick-3-linear" class="text-gray-400" />
          Instruction Core
        </div>
        <div className="w-2 h-2 rounded-full bg-[#00e559] shadow-[0_0_8px_#00e559]" />
      </div>

      <p className="text-xs text-gray-400 leading-relaxed min-h-[60px]">
        {words.map((word, i) => (
          <span key={i} className="reveal-word-wrap">
            <span
              className={`reveal-word text-gray-300 font-light${revealed ? " in" : ""}`}
              style={{ transitionDelay: `${i * 0.03}s` }}
            >
              {word}
            </span>
          </span>
        ))}
      </p>

      <div className="flex items-center gap-2 mt-5">
        {[
          { icon: "solar:cpu-bolt-linear", label: "Model X4" },
          { icon: "solar:document-text-linear", label: "32 Tokens" },
          { icon: "solar:stopwatch-linear", label: "0.8s" },
        ].map((t) => (
          <div
            key={t.label}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-white/[0.06] bg-white/[0.02] text-[10px] text-gray-400"
          >
            <iconify-icon icon={t.icon} /> {t.label}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Custom Slider ---------- */
function CustomSlider({ label, percent, minLabel, maxLabel }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-300">{label}</span>
        <iconify-icon icon="solar:alt-arrow-up-linear" class="text-gray-500 text-xs" />
      </div>
      <div className="h-8 bg-[#1a1b1e] border border-white/[0.04] rounded-full relative flex items-center px-1">
        <div
          className="absolute left-1 top-1 bottom-1 bg-white rounded-full"
          style={{ width: `${percent}%` }}
        />
        <div
          className="absolute w-10 h-6 bg-[#09090b] border-2 border-white rounded-full flex items-center justify-center -ml-5 shadow-lg cursor-grab hover:scale-105 transition-transform z-10"
          style={{ left: `${percent}%` }}
        >
          <iconify-icon icon="solar:pause-linear" class="text-white text-[10px] rotate-90" />
        </div>
        <div className="flex justify-between w-full px-3 text-[10px] text-gray-500 z-0 pointer-events-none">
          <span className="text-gray-800">{minLabel}</span>
          <span>{maxLabel}</span>
        </div>
      </div>
    </div>
  );
}

/* ---------- Render Tuning Node ---------- */
function RenderTuningNode() {
  return (
    <div
      className="gsap-node absolute w-[340px] bg-[#121316]/90 backdrop-blur-xl border border-white/[0.08] rounded-[20px] p-5 shadow-2xl z-10"
      style={{ left: "35%", bottom: "40px", "--base-transform": "none" }}
    >
      <ConnectionPoint className="top-1/2 -left-[5px] -translate-y-1/2 shadow-[0_0_10px_#00e559]" />
      <ConnectionPoint className="-top-[5px] left-1/2 -translate-x-1/2 shadow-[0_0_10px_#00e559]" />

      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-200 tracking-tight">
          <iconify-icon icon="solar:slider-minimalistic-horizontal-linear" class="text-gray-400" />
          Render Tuning
        </div>
        <div className="w-2 h-2 rounded-full bg-[#00e559] shadow-[0_0_8px_#00e559]" />
      </div>

      <div className="space-y-5">
        <CustomSlider label="Creativity" percent={40} minLabel="Low" maxLabel="High" />
        <CustomSlider label="Detail Level" percent={70} minLabel="0" maxLabel="100" />
      </div>
    </div>
  );
}

/* ---------- Center Hub ---------- */
function CenterHub() {
  return (
    <div
      className="gsap-node absolute w-16 h-16 bg-[#121316] border border-white/[0.08] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(0,229,89,0.1)] z-20"
      style={{ left: "56.66%", top: "50%", "--base-transform": "translate(-50%, -50%)" }}
    >
      <ConnectionPoint small className="-top-[3px] left-1/2 -translate-x-1/2" />
      <ConnectionPoint small className="-bottom-[3px] left-1/2 -translate-x-1/2" />
      <div
        className="absolute top-1/2 -right-[4px] -translate-y-1/2 w-2 h-2 bg-[#00e559] rounded-sm rotate-45 shadow-[0_0_12px_#00e559]"
        style={{ animation: "cpPulse 1.5s ease-in-out infinite" }}
      />

      <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center cursor-pointer hover:bg-white/[0.08] transition-colors relative group">
        <div className="absolute inset-0 rounded-xl bg-[#00e559]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
        <iconify-icon icon="solar:bolt-linear" class="text-white text-xl relative z-10" />
      </div>
    </div>
  );
}

/* ---------- Output Frame Node ---------- */
function OutputFrameNode() {
  return (
    <div
      className="gsap-node absolute w-[340px] h-[460px] bg-[#121316]/90 backdrop-blur-xl border border-white/[0.08] rounded-[24px] p-5 shadow-2xl z-10 flex flex-col"
      style={{ right: 0, top: "50%", "--base-transform": "translateY(-50%)" }}
    >
      <ConnectionPoint className="top-1/2 -left-[5px] -translate-y-1/2 shadow-[0_0_10px_#00e559]" />

      <div className="flex items-center justify-between mb-4 shrink-0">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-200 tracking-tight">
          <iconify-icon icon="solar:gallery-linear" class="text-gray-400" />
          Output Frame
        </div>
        <div className="w-2 h-2 rounded-full bg-[#8b5cf6] shadow-[0_0_8px_#8b5cf6]" />
      </div>

      <div className="flex-1 relative w-full mt-2 flex items-center justify-center perspective-1000">
        <div className="absolute w-[85%] aspect-[4/5] bg-white/5 rounded-2xl border border-white/5 shadow-xl rotate-[6deg] translate-x-4 opacity-40" />
        <div className="absolute w-[90%] aspect-[4/5] bg-white/10 rounded-2xl border border-white/10 shadow-xl -rotate-[4deg] -translate-x-2 opacity-60" />
        <div className="absolute w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(0,229,89,0.2)] transition-all duration-500 cursor-pointer z-10 bg-[#1a1b1e]">
          <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d868fef-f560-45ca-ab35-5dad4fc29059_3840w.webp"
            alt="AI Generated Portrait"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.4)] pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

/* ---------- Connections SVG ---------- */
function Connections() {
  const paths = [
    "M 288 337.5 C 340 337.5, 360 160, 420 160",
    "M 288 337.5 C 340 337.5, 360 515, 420 515",
    "M 680 250 L 680 300",
    "M 680 430 L 680 375",
    "M 720 337.5 L 860 337.5",
  ];

  return (
    <svg
      viewBox="0 0 1200 675"
      className="absolute inset-0 w-full h-full z-0 pointer-events-none drop-shadow-[0_0_8px_rgba(0,229,89,0.4)]"
      preserveAspectRatio="none"
    >
      <g fill="none" stroke="#00e559" strokeWidth="2" className="opacity-30">
        {paths.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
      <g fill="none" stroke="#00e559" strokeWidth="2">
        {paths.map((d, i) => (
          <path key={i} d={d} className="flow-path" />
        ))}
      </g>
    </svg>
  );
}

/* ---------- Floating Toolbar ---------- */
function FloatingToolbar() {
  const tools = [
    "solar:hand-stars-linear",
    "solar:bolt-linear",
    "solar:cpu-linear",
    "solar:magic-stick-3-linear",
  ];
  const extras = ["solar:chat-line-linear", "solar:code-square-linear"];

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 p-1.5 bg-[#121316]/80 backdrop-blur-xl border border-white/[0.08] rounded-full shadow-2xl">
      <button className="w-10 h-10 rounded-full bg-[#38bdf8]/20 text-[#38bdf8] flex items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-[#38bdf8]/10 group-hover:bg-[#38bdf8]/30 transition-colors" />
        <iconify-icon icon="solar:cursor-linear" class="text-lg relative z-10 rotate-12" />
      </button>
      {tools.map((t) => (
        <button
          key={t}
          className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          <iconify-icon icon={t} class="text-lg" />
        </button>
      ))}
      <div className="w-[1px] h-5 bg-white/10 mx-1" />
      {extras.map((t) => (
        <button
          key={t}
          className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          <iconify-icon icon={t} class="text-lg" />
        </button>
      ))}
    </div>
  );
}

/* ---------- Floating animation hook ---------- */
function useFloatingNodes(rootRef) {
  useEffect(() => {
    const nodes = rootRef.current
      ? Array.from(rootRef.current.querySelectorAll(".gsap-node"))
      : [];
    const offsets = nodes.map(() => Math.random() * Math.PI * 2);
    let raf;
    const start = performance.now();

    const tick = (now) => {
      const t = (now - start) / 1000;
      nodes.forEach((node, i) => {
        const base = getComputedStyle(node).getPropertyValue("--base-transform").trim();
        const y = Math.sin(t * 0.5 + offsets[i]) * 8;
        const baseTransform = base && base !== "none" ? base + " " : "";
        node.style.transform = `${baseTransform}translateY(${-y}px)`;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [rootRef]);
}

/* ---------- App ---------- */
export default function App() {
  const canvasRef = useRef(null);
  useFloatingNodes(canvasRef);

  return (
    <div className="h-screen w-screen overflow-hidden flex text-gray-200 bg-[#09090b]">
      <Sidebar />

      <main className="flex-1 flex flex-col relative bg-[#09090b]">
        <Topbar />

        <div className="flex-1 relative overflow-hidden flex items-center justify-center p-12">
          <div
            className="absolute inset-0 z-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, transparent 20%, #09090b 100%)",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[#00e559]/[0.03] blur-[120px] pointer-events-none z-0" />

          <div
            ref={canvasRef}
            className="w-full max-w-[1200px] aspect-[16/9] relative z-10"
          >
            <Connections />
            <EngineSetupNode />
            <InstructionCoreNode />
            <RenderTuningNode />
            <CenterHub />
            <OutputFrameNode />
          </div>
        </div>

        <FloatingToolbar />
      </main>
    </div>
  );
}