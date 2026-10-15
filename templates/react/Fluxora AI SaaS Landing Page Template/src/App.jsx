import React, { useState } from "react";
import UnicornScene from "unicornstudio-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";

const cardGradient = {
  background:
    "linear-gradient(225deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.0) 100%)",
  borderRadius: "24px",
};

function Icon({ name, width = 16, height = 16, style, className }) {
  return (
    <iconify-icon
      icon={name}
      width={width}
      height={height}
      style={style}
      class={className}
    ></iconify-icon>
  );
}

const StarIcon = ({ width = 16, color = "rgb(255,255,255)" }) => (
  <Icon
    name="solar:star-fall-minimalistic-2-bold-duotone"
    width={width}
    height={width}
    style={{ color }}
  />
);

/* ---------------- Header ---------------- */
function Header() {
  return (
    <header className="relative anim z-10" style={{ animationDelay: "0s" }}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <span
            className="inline-flex items-center justify-center bg-white/10 w-9 h-9 rounded-full backdrop-blur border-gradient"
            style={{ borderRadius: "9999px" }}
          >
            <StarIcon width={16} />
          </span>
          <span className="text-lg font-semibold tracking-tight">Fluxora</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
          <a className="hover:text-white transition-colors font-medium" href="#">Platform</a>
          <a className="hover:text-white transition-colors font-medium" href="#">Stories</a>
          <a className="hover:text-white transition-colors font-medium" href="#">Pricing</a>
          <a className="hover:text-white transition-colors font-medium" href="#">Docs</a>
        </div>
        <div className="flex items-center gap-3">
          <div
            className="hidden sm:flex items-center gap-2 rounded-full border-gradient bg-white/5 px-3 py-1.5"
            style={{ borderRadius: "9999px" }}
          >
            <span className="h-2 w-2 rounded-full bg-blue-400"></span>
            <span className="text-xs text-neutral-300 font-medium">Online</span>
          </div>
          <button
            className="inline-flex items-center gap-2 rounded-full border-gradient bg-white/5 backdrop-blur-xl px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white transition-all hover:-translate-y-0.5"
            style={{ borderRadius: "9999px" }}
          >
            Contact
            <Icon name="solar:arrow-right-linear" width={16} />
          </button>
        </div>
      </nav>
    </header>
  );
}

/* ---------------- Chart ---------------- */
const chartData = [
  { day: "M", value: 92 },
  { day: "T", value: 96 },
  { day: "W", value: 98 },
  { day: "T", value: 97 },
  { day: "F", value: 99 },
  { day: "S", value: 98 },
  { day: "S", value: 97 },
];

function SuccessChart() {
  return (
    <div className="relative w-full h-28">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 5, right: 0, bottom: 0, left: -20 }}>
          <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.08)" />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#9ca3af", fontSize: 11, fontFamily: "Inter" }}
          />
          <YAxis
            domain={[60, 100]}
            ticks={[60, 80, 100]}
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#9ca3af", fontSize: 11, fontFamily: "Inter" }}
            tickFormatter={(v) => v + "%"}
          />
          <Tooltip
            cursor={{ fill: "rgba(255,255,255,0.05)" }}
            contentStyle={{
              backgroundColor: "rgba(17,17,17,0.9)",
              border: "none",
              borderRadius: 8,
              color: "#fff",
            }}
          />
          <Bar dataKey="value" radius={[6, 6, 6, 6]}>
            {chartData.map((_, i) => (
              <Cell key={i} fill="#3b82f6" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pb-24 lg:pt-24">
      {/* Pill */}
      <div className="mx-auto w-fit mb-6 anim" style={{ animationDelay: "0.1s" }}>
        <div
          className="inline-flex items-center gap-2 rounded-full border-gradient bg-white/5 px-3 py-1.5 text-xs text-neutral-300"
          style={{ borderRadius: "9999px" }}
        >
          <span className="inline-flex items-center justify-center rounded-full bg-blue-400/20 text-blue-300 px-2 py-0.5">
            New
          </span>
          <span className="font-medium">Simple pricing</span>
          <StarIcon width={14} color="rgb(96,165,250)" />
        </div>
      </div>

      {/* Heading */}
      <div className="anim text-center" style={{ animationDelay: "0.2s" }}>
        <h1 className="mx-auto max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter">
          Powering the next wave of AI‑driven products
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-neutral-300">
          Fluxora helps ambitious teams prototype, launch, and scale with
          reliable infrastructure and human‑centered design.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-8 items-center justify-center">
          <button
            className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-semibold shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset,0_1px_2px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 transition-all"
            style={{ borderRadius: "9999px" }}
          >
            Start Free
          </button>

          <div className="inline-block group relative">
            <button
              className="inline-flex gap-2 border-gradient hover:text-white transition-all hover:-translate-y-0.5 text-sm font-medium text-white/80 bg-white/5 rounded-full pt-3 pr-5 pb-3 pl-5 backdrop-blur-xl items-center"
              style={{ borderRadius: "9999px" }}
            >
              <Icon name="solar:play-circle-bold-duotone" width={16} />
              Watch demo
            </button>
            <span
              className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(60% 100% at 50% 50%, rgba(59,130,246,.55), rgba(59,130,246,.28) 35%, transparent 70%)",
                filter: "blur(10px) saturate(120%)",
              }}
              aria-hidden="true"
            ></span>
          </div>
        </div>
      </div>

      <BentoGrid />
    </section>
  );
}

/* ---------------- Bento Grid ---------------- */
function BentoGrid() {
  return (
    <div
      className="grid grid-cols-1 auto-rows-[200px] md:mt-16 md:grid-cols-6 md:gap-6 lg:grid-cols-12 lg:mt-32 overflow-hidden h-[800px] mt-16 gap-4"
      style={{
        maskImage:
          "linear-gradient(180deg, transparent, black 0%, black 60%, transparent)",
        WebkitMaskImage:
          "linear-gradient(180deg, transparent, black 0%, black 60%, transparent)",
      }}
    >
      {/* Team Image Card */}
      <div
        className="relative overflow-hidden rounded-3xl border-gradient md:col-span-3 lg:col-span-6 md:row-span-2 anim"
        style={{ ...cardGradient, animationDelay: "0.3s" }}
      >
        <img
          className="h-full w-full object-cover opacity-90"
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/357cb3d1-9f65-4810-884b-f0072a65193d_1600w.webp"
          alt="Product team"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent"></div>
        <div className="absolute left-4 top-4">
          <span
            className="inline-flex items-center gap-1 text-[11px] border-gradient text-slate-300 bg-white/5 rounded-full px-2.5 py-1 backdrop-blur"
            style={{ borderRadius: "9999px" }}
          >
            Product Team
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {[
              "61cab6ed-0aeb-4671-824c-5b8a0cf236ca",
              "2f999a94-8031-4c3e-b64e-836c1b4f5be0",
              "08b00610-61b2-45b5-b8fc-e9305c15b460",
            ].map((id, i) => (
              <div
                key={id}
                className={`h-8 w-8 rounded-full ring-2 ring-white/20 overflow-hidden ${i > 0 ? "-ml-2" : ""}`}
              >
                <img
                  className="h-full w-full object-cover"
                  src={`https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/${id}_320w.webp`}
                  alt="avatar"
                />
              </div>
            ))}
          </div>
          <span className="text-xs text-neutral-200 font-medium">
            Design sync at 10:00
          </span>
        </div>
      </div>

      {/* Stat Card */}
      <div
        className="rounded-3xl bg-white text-neutral-900 p-6 border-gradient md:col-span-3 lg:col-span-3 anim"
        style={{
          background:
            "linear-gradient(225deg,rgba(255,255,255,0.95) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0.95) 100%)",
          borderRadius: "24px",
          animationDelay: "0.4s",
        }}
      >
        <p className="text-4xl tracking-tighter">140+</p>
        <p className="mt-2 text-sm text-neutral-600 font-medium">Active customers</p>
        <div className="mt-4 flex items-center gap-2 text-blue-600">
          <Icon name="solar:graph-up-bold-duotone" width={16} />
          <span className="text-xs font-medium">Q4 growth 23%</span>
        </div>
      </div>

      {/* Code Card */}
      <article
        className="overflow-hidden border-gradient rounded-3xl relative md:col-span-3 lg:col-span-3 md:row-span-2 anim"
        style={{ ...cardGradient, animationDelay: "0.5s" }}
      >
        <div className="h-full p-6 relative flex flex-col">
          <div className="relative mx-auto h-full w-full flex items-center justify-center flex-1">
            <div className="scale-[0.75] w-full">
              <div className="backdrop-blur-[2px] bg-white/[0.03] border-gradient rounded-2xl">
                <div className="px-4 py-3 border-b border-white/10 flex items-center gap-2">
                  <Icon
                    name="solar:code-bold-duotone"
                    width={16}
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  />
                  <span className="text-[11px] font-medium text-white/80">config.tsx</span>
                  <span className="ml-auto text-[10px] text-white/50">modified</span>
                </div>
                <pre className="text-[11px] leading-relaxed text-white/80 p-4">{`export const appConfig = {
  framework: "next",
  runtime: "edge",
  regions: ["sfo1", "iad1"],
  env: {
    DATABASE_URL: process.env.DB,
    REDIS_TOKEN: process.env.CACHE
  }
}

deploy(appConfig)`}</pre>
              </div>
            </div>
          </div>
          <div className="relative pt-2">
            <h3 className="text-lg font-semibold tracking-tight text-white/95">
              Deploy instantly
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Push to production in seconds with zero configuration.
            </p>
          </div>
        </div>
      </article>

      {/* Chart Card */}
      <div
        className="rounded-3xl border-gradient p-6 md:col-span-3 lg:col-span-3 md:row-span-2 anim"
        style={{ ...cardGradient, animationDelay: "0.6s" }}
      >
        <h3 className="text-base font-semibold tracking-tight">Delivery success</h3>
        <p className="mt-1 text-sm text-neutral-300">Last 30 days</p>
        <div className="mt-4 rounded-xl bg-black/30 p-3 border-gradient">
          <SuccessChart />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-blue-400">
            <span className="h-2 w-2 rounded-full bg-blue-400"></span>
            <span className="text-sm font-semibold tracking-tight">97.8%</span>
          </div>
          <span className="text-xs text-neutral-300 font-medium">SLA met</span>
        </div>
      </div>

      {/* Global Card */}
      <div
        className="relative overflow-hidden rounded-3xl border-gradient md:col-span-3 lg:col-span-3 md:row-span-2 anim"
        style={{ ...cardGradient, animationDelay: "0.7s" }}
      >
        <div className="p-6">
          <p className="text-3xl tracking-tighter">35+</p>
          <p className="mt-1 text-sm text-neutral-300">Global launches this year</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Japan", "Canada", "Portugal"].map((c) => (
              <span
                key={c}
                className="inline-flex items-center rounded-full bg-blue-400/15 text-blue-300 px-2.5 py-1 text-xs font-medium border-gradient"
                style={{ borderRadius: "9999px" }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="px-6 pb-6">
          <div className="overflow-hidden rounded-2xl border-gradient">
            <img
              className="h-40 w-full object-cover"
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d25a1767-0ea8-4aac-b981-6afd67dc79a6_800w.webp"
              alt="Globe"
            />
          </div>
        </div>
      </div>

      {/* AI Card */}
      <article
        className="relative overflow-hidden hover:bg-white/[0.08] transition-all group rounded-3xl border-gradient md:col-span-3 lg:col-span-3 md:row-span-2 anim"
        style={{ ...cardGradient, animationDelay: "0.8s" }}
      >
        <div className="flex p-6 items-center justify-between">
          <h4 className="text-base font-semibold tracking-tight">Custom AI Agents</h4>
          <span
            className="inline-flex items-center gap-1 text-[11px] border-gradient text-slate-300 bg-white/5 rounded-full px-2.5 py-1"
            style={{ borderRadius: "9999px" }}
          >
            AI-Powered
          </span>
        </div>
        <div className="flex-1 flex p-6 pt-0 items-center">
          <div className="relative w-full">
            <div className="hover:bg-black/50 transition-all bg-black/60 border-gradient rounded-xl p-3 backdrop-blur">
              <div className="flex gap-1 mb-2 items-center">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-blue-400/80"></span>
              </div>
              <div className="overflow-x-auto">
                <pre className="text-[10px] leading-tight min-w-max text-slate-300">
                  <code>{`# AI Agent
class BusinessAgent:
  def __init__(self):
    self.mode = "adaptive"

  def analyze(self):
    return insights
`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Orbit Card */}
      <section
        className="group relative overflow-hidden border-gradient rounded-3xl md:col-span-3 lg:col-span-3 md:row-span-2 anim"
        style={{ ...cardGradient, animationDelay: "0.9s" }}
      >
        <div className="relative h-full overflow-hidden flex flex-col">
          <div className="flex-1 relative overflow-hidden">
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 animate-pulse" style={{ animationDelay: "0s" }}></div>
              <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 animate-pulse" style={{ animationDelay: ".6s" }}></div>
              <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 animate-pulse" style={{ animationDelay: "1.2s" }}></div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div
                className="relative flex h-28 w-28 items-center justify-center rounded-full border-gradient bg-neutral-900/70 backdrop-blur-md transition-transform duration-300 group-hover:scale-105"
                style={{ borderRadius: "9999px" }}
              >
                <Icon name="solar:widget-6-bold-duotone" width={48} />
              </div>
            </div>
          </div>
          <div className="relative border-t border-white/10">
            <div className="p-6">
              <h3 className="text-xl tracking-tight font-semibold text-slate-100">
                Adaptive Automations
              </h3>
              <p className="leading-relaxed text-slate-400 mt-3 text-sm">
                Event‑driven flows across your stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Card */}
      <div
        className="flex flex-col rounded-3xl border-gradient p-6 backdrop-blur-md transition md:col-span-3 lg:col-span-3 md:row-span-2 anim"
        style={{ ...cardGradient, animationDelay: "1s" }}
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/67ea0bb9-359c-4e9a-a90d-b44f079e8cf7_320w.webp"
              alt=""
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="text-xs font-semibold text-white">Serena Cardenas</p>
              <p className="text-[10px] text-white/60">Design Ops</p>
            </div>
          </div>
        </div>
        <p className="leading-snug text-sm font-medium mb-4 text-white">
          "Animations feel organic, copy is on point, and accessibility is baked
          in from day one."
        </p>
        <div className="mb-4 rounded-lg border-gradient p-3">
          <p className="text-xs text-white/80 mb-2 font-medium">Key Results:</p>
          <ul className="text-xs text-white/70 space-y-1">
            <li>• 127% user engagement</li>
            <li>• 43% fewer tickets</li>
            <li>• 98% compliance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Testimonials ---------------- */
const testimonialData = [
  {
    name: "Michael Chen",
    role: "CEO, TechFlow",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c9aa348-4474-47a8-8f1e-3fe52ac8d2b9_320w.webp",
    quote: `The AI automation in Fluxora has <span class="text-blue-400 tracking-tighter">saved us countless hours</span> every week. Our team is more productive than ever, and we can finally focus on what really matters — <span class="text-blue-400 tracking-tighter">building great products</span>.`,
  },
  {
    name: "Emily Rodriguez",
    role: "Product Lead, Innovate Labs",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a90d32f-809f-4383-b71f-6a9c50621b69_320w.jpg",
    quote: `Switching to Fluxora was the <span class="text-blue-400 tracking-tighter">best decision</span> we made this year. The integrations are seamless, the interface is intuitive, and our team collaboration has <span class="text-blue-400 tracking-tighter">never been stronger</span>.`,
  },
  {
    name: "David Kim",
    role: "Engineering Manager, CloudBase",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a90aa9b5-558b-479a-9570-1ceaa6005110_320w.jpg",
    quote: `Fluxora's intelligent task prioritization helps us <span class="text-blue-400 tracking-tighter">ship features faster</span> and with more confidence. The real-time sync across our distributed team is a <span class="text-blue-400 tracking-tighter">game-changer</span>.`,
  },
  {
    name: "Sarah Nguyen",
    role: "Engineering Lead, Quantum Labs",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca2dff12-04ff-4713-9404-e3cb60f16c8a_320w.jpg",
    quote: `Fluxora completely <span class="text-blue-400 tracking-tighter">transformed the way</span> our team ships products. It keeps us focused, efficient, and aligned — <span class="text-blue-400 tracking-tighter">without endless meetings</span> or context switching.`,
  },
  {
    name: "Jessica Park",
    role: "Operations Director, Nexus Group",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eae5dceb-fa80-4934-b110-86decb2f64ac_320w.webp",
    quote: `From onboarding to daily workflows, Fluxora makes everything <span class="text-blue-400 tracking-tighter">effortless and efficient</span>. We've reduced planning time by 40% and our team satisfaction scores have <span class="text-blue-400 tracking-tighter">skyrocketed</span>.`,
  },
  {
    name: "Alex Thompson",
    role: "Design Lead, Studio Bright",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d4bf47a-eb10-4503-a4f3-1940c4118868_320w.webp",
    quote: `The visual clarity and smart notifications in Fluxora help us stay aligned without <span class="text-blue-400 tracking-tighter">constant check-ins</span>. Our design process is smoother and we deliver <span class="text-blue-400 tracking-tighter">higher quality work</span> on time.`,
  },
  {
    name: "Rachel Foster",
    role: "Marketing VP, Growth Co",
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=96&h=96&fit=crop&crop=faces",
    quote: `Fluxora has become the <span class="text-blue-400 tracking-tighter">single source of truth</span> for our entire team. Campaign planning, execution, and reporting are all in one place, making us <span class="text-blue-400 tracking-tighter">incredibly agile</span>.`,
  },
];

function Testimonials() {
  const [active, setActive] = useState(3);
  const cur = testimonialData[active];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-20 relative">
      <div
        className="overflow-hidden rounded-3xl ring-white/10 ring-1 p-6 sm:p-8 relative backdrop-blur border-gradient"
        style={cardGradient}
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

        <div className="anim text-center mb-12" style={{ animationDelay: "0.1s" }}>
          <div className="mb-6">
            <div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-blue-400">
              <span>TESTIMONIALS</span>
              <span>(02)</span>
            </div>
            <div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white text-left mt-0 tracking-tighter">
              What our customers say
            </h2>
            <p className="text-sm sm:text-base text-slate-300 text-left max-w-[42ch]">
              Real feedback from teams using Fluxora to build better, ship faster,
              and scale smarter.
            </p>
          </div>
        </div>

        <section className="relative anim" style={{ animationDelay: "0.2s" }}>
          <div
            className="overflow-hidden ring-white/10 ring-1 rounded-3xl p-6 sm:p-10 relative backdrop-blur border-gradient"
            style={{ minHeight: "540px", ...cardGradient }}
          >
            <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
            <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl"></div>

            <div className="absolute top-6 left-6 opacity-10 text-white">
              <Icon name="solar:quote-down-circle-bold-duotone" width={64} />
            </div>

            <div className="flex flex-col justify-between" style={{ minHeight: "420px" }}>
              <blockquote className="relative text-center max-w-5xl mx-auto transition-opacity duration-300 flex-1 flex items-center justify-center">
                <p
                  className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white tracking-tighter"
                  dangerouslySetInnerHTML={{ __html: cur.quote }}
                />
              </blockquote>

              <div className="mt-8 text-center transition-opacity duration-300">
                <p className="text-sm sm:text-base text-slate-200 font-medium">
                  {cur.name}{" "}
                  <span className="text-slate-400 font-normal">{cur.role}</span>
                </p>
              </div>

              <div className="mt-10 flex items-end justify-center gap-3 sm:gap-4">
                {testimonialData.map((t, i) => (
                  <img
                    key={i}
                    className={
                      i === active
                        ? "h-14 w-14 sm:h-16 sm:w-16 rounded-xl object-cover ring-2 ring-white/20 shadow-lg cursor-pointer"
                        : "h-12 w-12 sm:h-14 sm:w-14 rounded-xl object-cover ring-1 ring-white/10 opacity-40 grayscale cursor-pointer transition-opacity duration-200 hover:opacity-60"
                    }
                    src={t.img}
                    alt={t.name}
                    onClick={() => setActive(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 mb-24 relative">
      <div className="pointer-events-none absolute -z-10 inset-0">
        <div className="absolute -top-10 -left-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="anim border-gradient bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-blue-300/10 rounded-[28px] p-2">
          <div className="overflow-hidden rounded-[22px] bg-black/30 ring-1 ring-white/10">
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd276cb3-a53d-4683-83d8-727dc1ffaf68_1600w.webp"
              alt="AI platform"
              className="md:h-[520px] w-full h-[320px] object-cover"
            />
          </div>
        </div>

        <div className="anim" style={{ animationDelay: "0.1s" }}>
          <div className="inline-flex items-center gap-2 text-sm text-blue-200/80">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/15 ring-1 ring-white/10">
              <StarIcon width={14} color="currentColor" />
            </span>
            <span>About Fluxora</span>
          </div>

          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl text-white tracking-tighter">
            Intelligent infrastructure, exceptional results.
          </h2>

          <p className="mt-5 text-base md:text-lg leading-relaxed text-white/70 max-w-2xl">
            Fluxora combines cutting-edge AI technology with thoughtful design
            principles to help you build and scale products faster. Our platform
            empowers teams of all sizes to bring their vision to life.
          </p>

          <div className="mt-8">
            <a
              href="#"
              className="group inline-flex items-center gap-2 hover:opacity-90 transition-opacity border-gradient text-sm font-medium text-black bg-gradient-to-r from-blue-400 via-blue-400 to-blue-300 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0_8px_30px_rgba(59,130,246,0.25)]"
              style={{ borderRadius: "9999px" }}
            >
              Discover Our Story
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/10 text-black">
                <Icon name="solar:arrow-right-up-linear" width={16} />
              </span>
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 anim" style={{ animationDelay: "0.2s" }}>
            {[
              ["Lightning Fast", "Launch products in minutes, not months."],
              ["AI-Powered", "Advanced intelligence handles complexity for you."],
              ["Fully Scalable", "Complete control and infrastructure that grows with you."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient">
                <h3 className="text-base tracking-tight text-white font-semibold leading-none">{t}</h3>
                <p className="mt-3 text-sm text-neutral-400">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- How it Works ---------------- */
function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 relative">
      <div className="rounded-3xl border-gradient p-6 sm:p-8 relative backdrop-blur" style={cardGradient}>
        <div className="flex gap-6 pr-1 pl-1 items-center anim" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] text-white tracking-tighter">
            How it works.
          </h2>
          <span className="w-px bg-white/20 h-10"></span>
          <p className="sm:text-base text-sm text-slate-300 mt-1 tracking-tight">
            Three simple steps to deploy faster
          </p>
        </div>
        <div className="h-px bg-white/20 mt-4"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 mt-6 sm:mt-8 relative items-stretch">
          {/* STEP 1 */}
          <div
            className="lg:col-span-4 border-gradient rounded-[28px] p-6 sm:p-8 relative h-full flex flex-col anim"
            style={{ background: cardGradient.background, animationDelay: "0.2s" }}
          >
            <span
              className="absolute -top-4 left-6 inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 bg-neutral-950 text-xs sm:text-sm text-white tracking-tight"
              style={{ borderRadius: "9999px" }}
            >
              STEP 1
            </span>
            <div className="relative h-48 sm:h-56 rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
              <div className="absolute inset-0 p-4 sm:p-6">
                <div className="bg-neutral-900/90 border border-white/10 rounded-xl p-4 w-full shadow-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="solar:document-text-bold-duotone" width={16} />
                    <div className="h-2 w-24 bg-white/80 rounded"></div>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded mb-2"></div>
                  <div className="h-2 w-4/5 bg-white/10 rounded mb-2"></div>
                  <div className="h-2 w-3/4 bg-white/10 rounded mb-3"></div>
                  <div className="flex gap-2">
                    <div className="h-6 w-16 bg-blue-400/20 rounded-lg flex items-center justify-center">
                      <div className="h-1 w-8 bg-blue-400 rounded"></div>
                    </div>
                    <div className="h-6 w-20 bg-white/10 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="mt-6 text-3xl sm:text-4xl text-white tracking-tighter">Create your config</h3>
            <p className="mt-2 text-sm sm:text-base text-neutral-300 max-w-[52ch] tracking-tight">
              Simply define your infrastructure, resources, and deployment
              preferences. Our AI understands your architecture.
            </p>
          </div>

          {/* STEP 2 */}
          <div
            className="lg:col-span-4 border-gradient rounded-[28px] p-6 sm:p-8 relative h-full flex flex-col anim"
            style={{ background: cardGradient.background, animationDelay: "0.3s" }}
          >
            <span
              className="absolute -top-4 left-6 inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 bg-neutral-950 text-xs sm:text-sm text-white tracking-tight"
              style={{ borderRadius: "9999px" }}
            >
              STEP 2
            </span>
            <div className="relative h-48 sm:h-56 rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-br from-white/5 to-white/0 p-4">
              <div className="grid grid-cols-2 gap-3 h-full">
                {[
                  ["solar:chat-round-bold-duotone", "w-12"],
                  ["solar:monitor-bold-duotone", "w-10"],
                  ["solar:book-bold-duotone", "w-14"],
                  ["solar:layers-bold-duotone", "w-8"],
                ].map(([ic, w], i) => (
                  <div key={i} className="bg-neutral-900/80 border border-white/10 rounded-lg p-3 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name={ic} width={12} />
                      <div className={`h-1.5 ${w} bg-blue-400 rounded`}></div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-1 w-full bg-white/20 rounded"></div>
                      <div className="h-1 w-4/5 bg-white/20 rounded"></div>
                      <div className="h-1 w-3/4 bg-white/20 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <h3 className="mt-6 text-3xl sm:text-4xl text-white tracking-tighter">AI optimizes setup</h3>
            <p className="mt-2 text-sm sm:text-base text-neutral-300 max-w-[52ch] tracking-tight">
              Our AI creates optimized infrastructure configurations across
              different environments in seconds.
            </p>
          </div>

          {/* STEP 3 */}
          <div
            className="lg:col-span-4 border-gradient rounded-[28px] p-6 sm:p-8 relative h-full flex flex-col anim"
            style={{ background: cardGradient.background, animationDelay: "0.4s" }}
          >
            <span
              className="absolute -top-4 left-6 inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 bg-neutral-950 text-xs sm:text-sm text-white tracking-tight"
              style={{ borderRadius: "9999px" }}
            >
              STEP 3
            </span>
            <div className="relative h-48 sm:h-56 rounded-2xl bg-white/5 border border-white/10 overflow-hidden p-4">
              <div className="w-full h-full rounded-xl overflow-hidden bg-neutral-900/80 border border-white/10 p-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-400/20 rounded-lg flex items-center justify-center">
                      <Icon name="solar:refresh-bold-duotone" width={12} />
                    </div>
                    <div className="h-2 w-16 bg-white/80 rounded"></div>
                  </div>
                  <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                </div>
                {[0, 1].map((row) => (
                  <div key={row} className="grid grid-cols-3 gap-2 mb-3">
                    {[
                      ["solar:chat-round-bold-duotone", "w-8"],
                      ["solar:letter-bold-duotone", "w-6"],
                      ["solar:monitor-bold-duotone", "w-10"],
                    ].map(([ic, w], i) => (
                      <div key={i} className="bg-blue-400/10 border border-blue-400/20 rounded p-2 text-center">
                        <Icon name={ic} width={12} />
                        <div className={`h-1 ${w} bg-blue-400 rounded mx-auto`}></div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <h3 className="mt-6 text-3xl sm:text-4xl text-white tracking-tighter">Deploy &amp; monitor</h3>
            <p className="mt-2 text-sm sm:text-base text-neutral-300 max-w-[52ch] tracking-tight">
              Your infrastructure is deployed globally with real-time monitoring
              and automatic optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  const projectImgs = [
    "60ce3768-2f2c-44d1-a27e-eeed66fceba7",
    "29c82139-abf4-41db-815e-79641179c0a7",
    "9b8cd27e-1b06-4e82-ac51-1f7e261f46f4",
    "0ed12d3f-3fa4-43a9-a33e-214e46932956",
    "44d41d4e-32d5-4432-bf2b-95b01b1df21f",
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 relative">
      <div className="rounded-3xl border-gradient p-6 sm:p-8 backdrop-blur" style={cardGradient}>
        <div className="flex gap-6 pr-1 pl-1 items-center anim" style={{ animationDelay: "0.1s" }}>
          <span className="text-4xl text-white tracking-tighter">Services</span>
          <span className="w-px bg-white/10 h-10"></span>
          <span className="text-sm text-neutral-300">what we offer</span>
        </div>
        <div className="h-px bg-white/10 mt-4"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 sm:gap-10 mt-6 sm:mt-8">
          <div className="lg:col-span-6 anim" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-[44px] sm:text-6xl md:text-7xl leading-[1.05] text-zinc-100 tracking-tighter">
              Let's Build Something Extraordinary
            </h1>

            <div className="h-px bg-white/10 mt-6"></div>

            {[
              ["AI Infrastructure", "Starting at $2,999", "Building scalable AI-powered platforms that adapt and grow with your business"],
              ["Edge Computing", "Starting at $5,999", "Global edge infrastructure for lightning-fast delivery and unmatched performance."],
            ].map(([t, p, d]) => (
              <React.Fragment key={t}>
                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl sm:text-3xl text-zinc-100 tracking-tighter">{t}</h3>
                    <span
                      className="inline-flex items-center rounded-full px-3 py-1 text-sm text-zinc-200 bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-colors duration-200"
                      style={{ borderRadius: "9999px" }}
                    >
                      {p}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm sm:text-base mt-3">{d}</p>
                </div>
                <div className="h-px bg-white/10 mt-6"></div>
              </React.Fragment>
            ))}

            <div className="flex gap-6 mt-8 items-center flex-wrap">
              <a
                href="#"
                className="group inline-flex items-center gap-2 hover:opacity-90 transition-opacity border-gradient text-sm font-medium text-black bg-gradient-to-r from-blue-400 via-blue-400 to-blue-300 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0_8px_30px_rgba(59,130,246,0.25)]"
                style={{ borderRadius: "9999px" }}
              >
                View Work
              </a>
              <button
                className="inline-flex border-gradient hover:text-white transition-all hover:-translate-y-0.5 text-sm font-medium text-white/80 bg-white/5 rounded-full pt-3 pr-5 pb-3 pl-5 backdrop-blur-xl gap-x-2 items-center"
                style={{ borderRadius: "9999px" }}
              >
                <Icon name="solar:play-circle-bold-duotone" width={16} />
                Watch demo
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 anim" style={{ animationDelay: "0.3s" }}>
            <div
              className="relative mx-auto w-full max-w-[860px]"
              style={{ filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.6))" }}
            >
              <div className="rounded-[28px] bg-neutral-900/60 ring-1 ring-white/10 p-3">
                <div className="relative overflow-hidden rounded-[22px] bg-neutral-950 border border-white/10">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                    <span className="h-3 w-3 rounded-full bg-zinc-700"></span>
                    <span className="h-3 w-3 rounded-full bg-zinc-700/70"></span>
                    <span className="h-3 w-3 rounded-full bg-zinc-700/50"></span>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                      {projectImgs.map((id, i) => (
                        <div
                          key={id}
                          className={`relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900 hover:scale-105 transition-transform duration-300 ${i === 2 ? "md:row-span-2" : ""}`}
                        >
                          <img
                            src={`https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/${id}_320w.webp`}
                            alt="Project"
                            className="w-full h-full object-cover opacity-90"
                          />
                          <div
                            className={`absolute inset-0 ${i === 2 ? "bg-gradient-to-t from-black/60 via-black/10 to-transparent" : "bg-gradient-to-b from-black/0 via-black/20 to-black/50"}`}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pointer-events-none absolute -right-24 bottom-0 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>
                  <div className="pointer-events-none absolute -left-24 -top-24 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  const cols = [
    ["Platform", ["Features", "Pricing", "Security"]],
    ["Resources", ["Documentation", "API Reference", "Guides"]],
    ["Company", ["About", "Blog", "Careers"]],
  ];
  return (
    <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-32 mb-16">
      <div className="rounded-3xl border-gradient p-8 sm:p-12 backdrop-blur" style={cardGradient}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-4">
              <span
                className="inline-flex items-center justify-center bg-white/10 w-9 h-9 rounded-full backdrop-blur border-gradient"
                style={{ borderRadius: "9999px" }}
              >
                <StarIcon width={16} />
              </span>
              <span className="text-lg font-semibold tracking-tight">Fluxora</span>
            </a>
            <p className="text-sm text-neutral-400 max-w-xs">
              Powering the next wave of AI‑driven products with intelligent
              infrastructure.
            </p>
          </div>

          {cols.map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3 text-sm text-neutral-400">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-white transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="h-px bg-white/10 my-8"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-400">© 2024 Fluxora. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {[
              "solar:twitter-bold-duotone",
              "solar:github-bold-duotone",
              "solar:linkedin-bold-duotone",
            ].map((ic) => (
              <a key={ic} href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Icon name={ic} width={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- App ---------------- */
export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased relative">
      {/* Unicorn Studio Background */}
      <div
        className="aura-background-component top-0 w-full h-screen z-0 absolute brightness-50 saturate-50"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
        }}
      >
        <div className="fixed inset-0 -z-10 bg-black">
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 80%, rgba(255,255,255,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 80%, rgba(255,255,255,0) 100%)",
            }}
          >
            <div className="absolute inset-0 w-full h-full bg-neutral-950">
              <UnicornScene
                projectId="XxCmD31vVBmiINgvYCho"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M64 0H0v64" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <Header />
      <main className="relative z-10">
        <Hero />
        <Testimonials />
        <About />
        <HowItWorks />
        <Services />
        <Footer />
      </main>
    </div>
  );
}